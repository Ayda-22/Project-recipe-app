var eP=Object.defineProperty;var tP=(e,t,n)=>t in e?eP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var he=(e,t,n)=>(tP(e,typeof t!="symbol"?t+"":t,n),n);function nP(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rP(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ml=Symbol.for("react.element"),oP=Symbol.for("react.portal"),aP=Symbol.for("react.fragment"),iP=Symbol.for("react.strict_mode"),sP=Symbol.for("react.profiler"),lP=Symbol.for("react.provider"),uP=Symbol.for("react.context"),cP=Symbol.for("react.forward_ref"),dP=Symbol.for("react.suspense"),fP=Symbol.for("react.memo"),pP=Symbol.for("react.lazy"),db=Symbol.iterator;function mP(e){return e===null||typeof e!="object"?null:(e=db&&e[db]||e["@@iterator"],typeof e=="function"?e:null)}var I2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R2=Object.assign,N2={};function Bi(e,t,n){this.props=e,this.context=t,this.refs=N2,this.updater=n||I2}Bi.prototype.isReactComponent={};Bi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function M2(){}M2.prototype=Bi.prototype;function Ag(e,t,n){this.props=e,this.context=t,this.refs=N2,this.updater=n||I2}var Ig=Ag.prototype=new M2;Ig.constructor=Ag;R2(Ig,Bi.prototype);Ig.isPureReactComponent=!0;var fb=Array.isArray,O2=Object.prototype.hasOwnProperty,Rg={current:null},D2={key:!0,ref:!0,__self:!0,__source:!0};function q2(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)O2.call(t,r)&&!D2.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Ml,type:e,key:a,ref:i,props:o,_owner:Rg.current}}function hP(e,t){return{$$typeof:Ml,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ng(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ml}function gP(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pb=/\/+/g;function gp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gP(""+e.key):t.toString(36)}function rc(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ml:case oP:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+gp(i,0):r,fb(o)?(n="",e!=null&&(n=e.replace(pb,"$&/")+"/"),rc(o,t,n,"",function(u){return u})):o!=null&&(Ng(o)&&(o=hP(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(pb,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",fb(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+gp(a,s);i+=rc(a,t,n,l,o)}else if(l=mP(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+gp(a,s++),i+=rc(a,t,n,l,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function yu(e,t,n){if(e==null)return e;var r=[],o=0;return rc(e,r,"","",function(a){return t.call(n,a,o++)}),r}function vP(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Kt={current:null},oc={transition:null},yP={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:oc,ReactCurrentOwner:Rg};_e.Children={map:yu,forEach:function(e,t,n){yu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yu(e,function(){t++}),t},toArray:function(e){return yu(e,function(t){return t})||[]},only:function(e){if(!Ng(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_e.Component=Bi;_e.Fragment=aP;_e.Profiler=sP;_e.PureComponent=Ag;_e.StrictMode=iP;_e.Suspense=dP;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yP;_e.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=R2({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Rg.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)O2.call(t,l)&&!D2.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ml,type:e.type,key:o,ref:a,props:r,_owner:i}};_e.createContext=function(e){return e={$$typeof:uP,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lP,_context:e},e.Consumer=e};_e.createElement=q2;_e.createFactory=function(e){var t=q2.bind(null,e);return t.type=e,t};_e.createRef=function(){return{current:null}};_e.forwardRef=function(e){return{$$typeof:cP,render:e}};_e.isValidElement=Ng;_e.lazy=function(e){return{$$typeof:pP,_payload:{_status:-1,_result:e},_init:vP}};_e.memo=function(e,t){return{$$typeof:fP,type:e,compare:t===void 0?null:t}};_e.startTransition=function(e){var t=oc.transition;oc.transition={};try{e()}finally{oc.transition=t}};_e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};_e.useCallback=function(e,t){return Kt.current.useCallback(e,t)};_e.useContext=function(e){return Kt.current.useContext(e)};_e.useDebugValue=function(){};_e.useDeferredValue=function(e){return Kt.current.useDeferredValue(e)};_e.useEffect=function(e,t){return Kt.current.useEffect(e,t)};_e.useId=function(){return Kt.current.useId()};_e.useImperativeHandle=function(e,t,n){return Kt.current.useImperativeHandle(e,t,n)};_e.useInsertionEffect=function(e,t){return Kt.current.useInsertionEffect(e,t)};_e.useLayoutEffect=function(e,t){return Kt.current.useLayoutEffect(e,t)};_e.useMemo=function(e,t){return Kt.current.useMemo(e,t)};_e.useReducer=function(e,t,n){return Kt.current.useReducer(e,t,n)};_e.useRef=function(e){return Kt.current.useRef(e)};_e.useState=function(e){return Kt.current.useState(e)};_e.useSyncExternalStore=function(e,t,n){return Kt.current.useSyncExternalStore(e,t,n)};_e.useTransition=function(){return Kt.current.useTransition()};_e.version="18.2.0";(function(e){e.exports=_e})(p);const P=rP(p.exports),mb=nP({__proto__:null,default:P},[p.exports]);var An=Boolean(globalThis==null?void 0:globalThis.document)?p.exports.useLayoutEffect:p.exports.useEffect,qd={exports:{}},Ld={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bP=p.exports,wP=Symbol.for("react.element"),xP=Symbol.for("react.fragment"),SP=Object.prototype.hasOwnProperty,CP=bP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kP={key:!0,ref:!0,__self:!0,__source:!0};function L2(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)SP.call(t,r)&&!kP.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:wP,type:e,key:a,ref:i,props:o,_owner:CP.current}}Ld.Fragment=xP;Ld.jsx=L2;Ld.jsxs=L2;(function(e){e.exports=Ld})(qd);const Ht=qd.exports.Fragment,S=qd.exports.jsx,se=qd.exports.jsxs;var ga=p.exports.createContext({});ga.displayName="ColorModeContext";function Ol(){const e=p.exports.useContext(ga);if(e===void 0)throw new Error("useColorMode must be used within a ColorModeProvider");return e}function _P(e,t){const{colorMode:n}=Ol();return n==="dark"?t:e}var bu={light:"chakra-ui-light",dark:"chakra-ui-dark"};function EP(e={}){const{preventTransition:t=!0}=e,n={setDataset:r=>{const o=t?n.preventTransition():void 0;document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,o==null||o()},setClassName(r){document.body.classList.add(r?bu.dark:bu.light),document.body.classList.remove(r?bu.light:bu.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(r){var a;return((a=n.query().matches)!=null?a:r==="dark")?"dark":"light"},addListener(r){const o=n.query(),a=i=>{r(i.matches?"dark":"light")};return typeof o.addListener=="function"?o.addListener(a):o.addEventListener("change",a),()=>{typeof o.removeListener=="function"?o.removeListener(a):o.removeEventListener("change",a)}},preventTransition(){const r=document.createElement("style");return r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(r),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(r)})})}}};return n}var Mg="chakra-ui-color-mode";function B2(e){return{ssr:!1,type:"localStorage",get(t){if(!(globalThis!=null&&globalThis.document))return t;let n;try{n=localStorage.getItem(e)||t}catch{}return n||t},set(t){try{localStorage.setItem(e,t)}catch{}}}}var z2=B2(Mg);function hb(e,t){const n=e.match(new RegExp(`(^| )${t}=([^;]+)`));return n==null?void 0:n[2]}function Og(e,t){return{ssr:!!t,type:"cookie",get(n){return t?hb(t,e):globalThis!=null&&globalThis.document&&hb(document.cookie,e)||n},set(n){document.cookie=`${e}=${n}; max-age=31536000; path=/`}}}var PP=Og(Mg),TP=e=>Og(Mg,e),Si=()=>{};function gb(e,t){return e.type==="cookie"&&e.ssr?e.get(t):t}function Dg(e){const{value:t,children:n,options:{useSystemColorMode:r,initialColorMode:o,disableTransitionOnChange:a}={},colorModeManager:i=z2}=e,s=o==="dark"?"dark":"light",[l,u]=p.exports.useState(()=>gb(i,s)),[c,d]=p.exports.useState(()=>gb(i)),{getSystemTheme:f,setClassName:m,setDataset:v,addListener:h}=p.exports.useMemo(()=>EP({preventTransition:a}),[a]),b=o==="system"&&!l?c:l,y=p.exports.useCallback(x=>{const k=x==="system"?f():x;u(k),m(k==="dark"),v(k),i.set(k)},[i,f,m,v]);An(()=>{o==="system"&&d(f())},[]),p.exports.useEffect(()=>{const x=i.get();if(x){y(x);return}if(o==="system"){y("system");return}y(s)},[i,s,o,y]);const g=p.exports.useCallback(()=>{y(b==="dark"?"light":"dark")},[b,y]);p.exports.useEffect(()=>{if(!!r)return h(y)},[r,h,y]);const w=p.exports.useMemo(()=>({colorMode:t!=null?t:b,toggleColorMode:t?Si:g,setColorMode:t?Si:y,forced:t!==void 0}),[b,g,y,t]);return S(ga.Provider,{value:w,children:n})}Dg.displayName="ColorModeProvider";function V2(e){const t=p.exports.useMemo(()=>({colorMode:"dark",toggleColorMode:Si,setColorMode:Si,forced:!0}),[]);return S(ga.Provider,{value:t,...e})}V2.displayName="DarkMode";function $2(e){const t=p.exports.useMemo(()=>({colorMode:"light",toggleColorMode:Si,setColorMode:Si,forced:!0}),[]);return S(ga.Provider,{value:t,...e})}$2.displayName="LightMode";var FP=new Set(["dark","light","system"]);function AP(e){let t=e;return FP.has(t)||(t="light"),t}function j2(e={}){const{initialColorMode:t="light",type:n="localStorage",storageKey:r="chakra-ui-color-mode"}=e,o=AP(t),a=n==="cookie",i=`(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `,s=`(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;return`!${a?i:s}`.trim()}function IP(e={}){const{nonce:t}=e;return S("script",{id:"chakra-script",nonce:t,dangerouslySetInnerHTML:{__html:j2(e)}})}var zm={exports:{}};(function(e,t){var n=200,r="__lodash_hash_undefined__",o=800,a=16,i=9007199254740991,s="[object Arguments]",l="[object Array]",u="[object AsyncFunction]",c="[object Boolean]",d="[object Date]",f="[object Error]",m="[object Function]",v="[object GeneratorFunction]",h="[object Map]",b="[object Number]",y="[object Null]",g="[object Object]",w="[object Proxy]",x="[object RegExp]",k="[object Set]",_="[object String]",E="[object Undefined]",T="[object WeakMap]",O="[object ArrayBuffer]",A="[object DataView]",q="[object Float32Array]",$="[object Float64Array]",z="[object Int8Array]",Z="[object Int16Array]",te="[object Int32Array]",V="[object Uint8Array]",L="[object Uint8ClampedArray]",N="[object Uint16Array]",B="[object Uint32Array]",X=/[\\^$.*+?()[\]{}|]/g,ee=/^\[object .+?Constructor\]$/,Q=/^(?:0|[1-9]\d*)$/,U={};U[q]=U[$]=U[z]=U[Z]=U[te]=U[V]=U[L]=U[N]=U[B]=!0,U[s]=U[l]=U[O]=U[c]=U[A]=U[d]=U[f]=U[m]=U[h]=U[b]=U[g]=U[x]=U[k]=U[_]=U[T]=!1;var H=typeof vu=="object"&&vu&&vu.Object===Object&&vu,ie=typeof self=="object"&&self&&self.Object===Object&&self,me=H||ie||Function("return this")(),j=t&&!t.nodeType&&t,ae=j&&!0&&e&&!e.nodeType&&e,ge=ae&&ae.exports===j,xe=ge&&H.process,le=function(){try{var C=ae&&ae.require&&ae.require("util").types;return C||xe&&xe.binding&&xe.binding("util")}catch{}}(),ve=le&&le.isTypedArray;function Ee(C,F,D){switch(D.length){case 0:return C.call(F);case 1:return C.call(F,D[0]);case 2:return C.call(F,D[0],D[1]);case 3:return C.call(F,D[0],D[1],D[2])}return C.apply(F,D)}function K(C,F){for(var D=-1,ne=Array(C);++D<C;)ne[D]=F(D);return ne}function de(C){return function(F){return C(F)}}function Te(C,F){return C==null?void 0:C[F]}function we(C,F){return function(D){return C(F(D))}}var Fe=Array.prototype,Pt=Function.prototype,Ye=Object.prototype,gt=me["__core-js_shared__"],vt=Pt.toString,ct=Ye.hasOwnProperty,Xt=function(){var C=/[^.]+$/.exec(gt&&gt.keys&&gt.keys.IE_PROTO||"");return C?"Symbol(src)_1."+C:""}(),zn=Ye.toString,ar=vt.call(Object),ir=RegExp("^"+vt.call(ct).replace(X,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=ge?me.Buffer:void 0,Se=me.Symbol,et=me.Uint8Array,st=G?G.allocUnsafe:void 0,J=we(Object.getPrototypeOf,Object),fe=Object.create,Y=Ye.propertyIsEnumerable,ue=Fe.splice,oe=Se?Se.toStringTag:void 0,Ie=function(){try{var C=lp(Object,"defineProperty");return C({},"",{}),C}catch{}}(),Xe=G?G.isBuffer:void 0,Zt=Math.max,Tt=Date.now,Ct=lp(me,"Map"),Vn=lp(Object,"create"),e8=function(){function C(){}return function(F){if(!$o(F))return{};if(fe)return fe(F);C.prototype=F;var D=new C;return C.prototype=void 0,D}}();function Vo(C){var F=-1,D=C==null?0:C.length;for(this.clear();++F<D;){var ne=C[F];this.set(ne[0],ne[1])}}function t8(){this.__data__=Vn?Vn(null):{},this.size=0}function n8(C){var F=this.has(C)&&delete this.__data__[C];return this.size-=F?1:0,F}function r8(C){var F=this.__data__;if(Vn){var D=F[C];return D===r?void 0:D}return ct.call(F,C)?F[C]:void 0}function o8(C){var F=this.__data__;return Vn?F[C]!==void 0:ct.call(F,C)}function a8(C,F){var D=this.__data__;return this.size+=this.has(C)?0:1,D[C]=Vn&&F===void 0?r:F,this}Vo.prototype.clear=t8,Vo.prototype.delete=n8,Vo.prototype.get=r8,Vo.prototype.has=o8,Vo.prototype.set=a8;function Fr(C){var F=-1,D=C==null?0:C.length;for(this.clear();++F<D;){var ne=C[F];this.set(ne[0],ne[1])}}function i8(){this.__data__=[],this.size=0}function s8(C){var F=this.__data__,D=pu(F,C);if(D<0)return!1;var ne=F.length-1;return D==ne?F.pop():ue.call(F,D,1),--this.size,!0}function l8(C){var F=this.__data__,D=pu(F,C);return D<0?void 0:F[D][1]}function u8(C){return pu(this.__data__,C)>-1}function c8(C,F){var D=this.__data__,ne=pu(D,C);return ne<0?(++this.size,D.push([C,F])):D[ne][1]=F,this}Fr.prototype.clear=i8,Fr.prototype.delete=s8,Fr.prototype.get=l8,Fr.prototype.has=u8,Fr.prototype.set=c8;function Pa(C){var F=-1,D=C==null?0:C.length;for(this.clear();++F<D;){var ne=C[F];this.set(ne[0],ne[1])}}function d8(){this.size=0,this.__data__={hash:new Vo,map:new(Ct||Fr),string:new Vo}}function f8(C){var F=hu(this,C).delete(C);return this.size-=F?1:0,F}function p8(C){return hu(this,C).get(C)}function m8(C){return hu(this,C).has(C)}function h8(C,F){var D=hu(this,C),ne=D.size;return D.set(C,F),this.size+=D.size==ne?0:1,this}Pa.prototype.clear=d8,Pa.prototype.delete=f8,Pa.prototype.get=p8,Pa.prototype.has=m8,Pa.prototype.set=h8;function Ta(C){var F=this.__data__=new Fr(C);this.size=F.size}function g8(){this.__data__=new Fr,this.size=0}function v8(C){var F=this.__data__,D=F.delete(C);return this.size=F.size,D}function y8(C){return this.__data__.get(C)}function b8(C){return this.__data__.has(C)}function w8(C,F){var D=this.__data__;if(D instanceof Fr){var ne=D.__data__;if(!Ct||ne.length<n-1)return ne.push([C,F]),this.size=++D.size,this;D=this.__data__=new Pa(ne)}return D.set(C,F),this.size=D.size,this}Ta.prototype.clear=g8,Ta.prototype.delete=v8,Ta.prototype.get=y8,Ta.prototype.has=b8,Ta.prototype.set=w8;function x8(C,F){var D=dp(C),ne=!D&&cp(C),Ae=!D&&!ne&&ab(C),je=!D&&!ne&&!Ae&&sb(C),tt=D||ne||Ae||je,Pe=tt?K(C.length,String):[],nt=Pe.length;for(var xn in C)(F||ct.call(C,xn))&&!(tt&&(xn=="length"||Ae&&(xn=="offset"||xn=="parent")||je&&(xn=="buffer"||xn=="byteLength"||xn=="byteOffset")||rb(xn,nt)))&&Pe.push(xn);return Pe}function ip(C,F,D){(D!==void 0&&!gu(C[F],D)||D===void 0&&!(F in C))&&sp(C,F,D)}function S8(C,F,D){var ne=C[F];(!(ct.call(C,F)&&gu(ne,D))||D===void 0&&!(F in C))&&sp(C,F,D)}function pu(C,F){for(var D=C.length;D--;)if(gu(C[D][0],F))return D;return-1}function sp(C,F,D){F=="__proto__"&&Ie?Ie(C,F,{configurable:!0,enumerable:!0,value:D,writable:!0}):C[F]=D}var C8=D8();function mu(C){return C==null?C===void 0?E:y:oe&&oe in Object(C)?q8(C):j8(C)}function tb(C){return Xi(C)&&mu(C)==s}function k8(C){if(!$o(C)||V8(C))return!1;var F=pp(C)?ir:ee;return F.test(G8(C))}function _8(C){return Xi(C)&&ib(C.length)&&!!U[mu(C)]}function E8(C){if(!$o(C))return $8(C);var F=ob(C),D=[];for(var ne in C)ne=="constructor"&&(F||!ct.call(C,ne))||D.push(ne);return D}function nb(C,F,D,ne,Ae){C!==F&&C8(F,function(je,tt){if(Ae||(Ae=new Ta),$o(je))P8(C,F,tt,D,nb,ne,Ae);else{var Pe=ne?ne(up(C,tt),je,tt+"",C,F,Ae):void 0;Pe===void 0&&(Pe=je),ip(C,tt,Pe)}},lb)}function P8(C,F,D,ne,Ae,je,tt){var Pe=up(C,D),nt=up(F,D),xn=tt.get(nt);if(xn){ip(C,D,xn);return}var ln=je?je(Pe,nt,D+"",C,F,tt):void 0,Zi=ln===void 0;if(Zi){var mp=dp(nt),hp=!mp&&ab(nt),cb=!mp&&!hp&&sb(nt);ln=nt,mp||hp||cb?dp(Pe)?ln=Pe:K8(Pe)?ln=N8(Pe):hp?(Zi=!1,ln=A8(nt,!0)):cb?(Zi=!1,ln=R8(nt,!0)):ln=[]:Y8(nt)||cp(nt)?(ln=Pe,cp(Pe)?ln=X8(Pe):(!$o(Pe)||pp(Pe))&&(ln=L8(nt))):Zi=!1}Zi&&(tt.set(nt,ln),Ae(ln,nt,ne,je,tt),tt.delete(nt)),ip(C,D,ln)}function T8(C,F){return H8(W8(C,F,ub),C+"")}var F8=Ie?function(C,F){return Ie(C,"toString",{configurable:!0,enumerable:!1,value:Q8(F),writable:!0})}:ub;function A8(C,F){if(F)return C.slice();var D=C.length,ne=st?st(D):new C.constructor(D);return C.copy(ne),ne}function I8(C){var F=new C.constructor(C.byteLength);return new et(F).set(new et(C)),F}function R8(C,F){var D=F?I8(C.buffer):C.buffer;return new C.constructor(D,C.byteOffset,C.length)}function N8(C,F){var D=-1,ne=C.length;for(F||(F=Array(ne));++D<ne;)F[D]=C[D];return F}function M8(C,F,D,ne){var Ae=!D;D||(D={});for(var je=-1,tt=F.length;++je<tt;){var Pe=F[je],nt=ne?ne(D[Pe],C[Pe],Pe,D,C):void 0;nt===void 0&&(nt=C[Pe]),Ae?sp(D,Pe,nt):S8(D,Pe,nt)}return D}function O8(C){return T8(function(F,D){var ne=-1,Ae=D.length,je=Ae>1?D[Ae-1]:void 0,tt=Ae>2?D[2]:void 0;for(je=C.length>3&&typeof je=="function"?(Ae--,je):void 0,tt&&B8(D[0],D[1],tt)&&(je=Ae<3?void 0:je,Ae=1),F=Object(F);++ne<Ae;){var Pe=D[ne];Pe&&C(F,Pe,ne,je)}return F})}function D8(C){return function(F,D,ne){for(var Ae=-1,je=Object(F),tt=ne(F),Pe=tt.length;Pe--;){var nt=tt[C?Pe:++Ae];if(D(je[nt],nt,je)===!1)break}return F}}function hu(C,F){var D=C.__data__;return z8(F)?D[typeof F=="string"?"string":"hash"]:D.map}function lp(C,F){var D=Te(C,F);return k8(D)?D:void 0}function q8(C){var F=ct.call(C,oe),D=C[oe];try{C[oe]=void 0;var ne=!0}catch{}var Ae=zn.call(C);return ne&&(F?C[oe]=D:delete C[oe]),Ae}function L8(C){return typeof C.constructor=="function"&&!ob(C)?e8(J(C)):{}}function rb(C,F){var D=typeof C;return F=F==null?i:F,!!F&&(D=="number"||D!="symbol"&&Q.test(C))&&C>-1&&C%1==0&&C<F}function B8(C,F,D){if(!$o(D))return!1;var ne=typeof F;return(ne=="number"?fp(D)&&rb(F,D.length):ne=="string"&&F in D)?gu(D[F],C):!1}function z8(C){var F=typeof C;return F=="string"||F=="number"||F=="symbol"||F=="boolean"?C!=="__proto__":C===null}function V8(C){return!!Xt&&Xt in C}function ob(C){var F=C&&C.constructor,D=typeof F=="function"&&F.prototype||Ye;return C===D}function $8(C){var F=[];if(C!=null)for(var D in Object(C))F.push(D);return F}function j8(C){return zn.call(C)}function W8(C,F,D){return F=Zt(F===void 0?C.length-1:F,0),function(){for(var ne=arguments,Ae=-1,je=Zt(ne.length-F,0),tt=Array(je);++Ae<je;)tt[Ae]=ne[F+Ae];Ae=-1;for(var Pe=Array(F+1);++Ae<F;)Pe[Ae]=ne[Ae];return Pe[F]=D(tt),Ee(C,this,Pe)}}function up(C,F){if(!(F==="constructor"&&typeof C[F]=="function")&&F!="__proto__")return C[F]}var H8=U8(F8);function U8(C){var F=0,D=0;return function(){var ne=Tt(),Ae=a-(ne-D);if(D=ne,Ae>0){if(++F>=o)return arguments[0]}else F=0;return C.apply(void 0,arguments)}}function G8(C){if(C!=null){try{return vt.call(C)}catch{}try{return C+""}catch{}}return""}function gu(C,F){return C===F||C!==C&&F!==F}var cp=tb(function(){return arguments}())?tb:function(C){return Xi(C)&&ct.call(C,"callee")&&!Y.call(C,"callee")},dp=Array.isArray;function fp(C){return C!=null&&ib(C.length)&&!pp(C)}function K8(C){return Xi(C)&&fp(C)}var ab=Xe||J8;function pp(C){if(!$o(C))return!1;var F=mu(C);return F==m||F==v||F==u||F==w}function ib(C){return typeof C=="number"&&C>-1&&C%1==0&&C<=i}function $o(C){var F=typeof C;return C!=null&&(F=="object"||F=="function")}function Xi(C){return C!=null&&typeof C=="object"}function Y8(C){if(!Xi(C)||mu(C)!=g)return!1;var F=J(C);if(F===null)return!0;var D=ct.call(F,"constructor")&&F.constructor;return typeof D=="function"&&D instanceof D&&vt.call(D)==ar}var sb=ve?de(ve):_8;function X8(C){return M8(C,lb(C))}function lb(C){return fp(C)?x8(C,!0):E8(C)}var Z8=O8(function(C,F,D,ne){nb(C,F,D,ne)});function Q8(C){return function(){return C}}function ub(C){return C}function J8(){return!1}e.exports=Z8})(zm,zm.exports);const Tn=zm.exports;function Qn(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function Xo(e,...t){return RP(e)?e(...t):e}var RP=e=>typeof e=="function",NP=e=>/!(important)?$/.test(e),vb=e=>typeof e=="string"?e.replace(/!(important)?$/,"").trim():e,Mc=(e,t)=>n=>{const r=String(t),o=NP(r),a=vb(r),i=e?`${e}.${a}`:a;let s=Qn(n.__cssMap)&&i in n.__cssMap?n.__cssMap[i].varRef:t;return s=vb(s),o?`${s} !important`:s};function Ks(e){const{scale:t,transform:n,compose:r}=e;return(a,i)=>{var u;const s=Mc(t,a)(i);let l=(u=n==null?void 0:n(s,i))!=null?u:s;return r&&(l=r(l,i)),l}}var wu=(...e)=>t=>e.reduce((n,r)=>r(n),t);function $n(e,t){return n=>{const r={property:n,scale:e};return r.transform=Ks({scale:e,transform:t}),r}}var MP=({rtl:e,ltr:t})=>n=>n.direction==="rtl"?e:t;function OP(e){const{property:t,scale:n,transform:r}=e;return{scale:n,property:MP(t),transform:n?Ks({scale:n,compose:r}):r}}var W2=["rotate(var(--chakra-rotate, 0))","scaleX(var(--chakra-scale-x, 1))","scaleY(var(--chakra-scale-y, 1))","skewX(var(--chakra-skew-x, 0))","skewY(var(--chakra-skew-y, 0))"];function DP(){return["translateX(var(--chakra-translate-x, 0))","translateY(var(--chakra-translate-y, 0))",...W2].join(" ")}function qP(){return["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",...W2].join(" ")}var LP={"--chakra-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-sepia":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-drop-shadow":"var(--chakra-empty,/*!*/ /*!*/)",filter:["var(--chakra-blur)","var(--chakra-brightness)","var(--chakra-contrast)","var(--chakra-grayscale)","var(--chakra-hue-rotate)","var(--chakra-invert)","var(--chakra-saturate)","var(--chakra-sepia)","var(--chakra-drop-shadow)"].join(" ")},BP={backdropFilter:["var(--chakra-backdrop-blur)","var(--chakra-backdrop-brightness)","var(--chakra-backdrop-contrast)","var(--chakra-backdrop-grayscale)","var(--chakra-backdrop-hue-rotate)","var(--chakra-backdrop-invert)","var(--chakra-backdrop-opacity)","var(--chakra-backdrop-saturate)","var(--chakra-backdrop-sepia)"].join(" "),"--chakra-backdrop-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-opacity":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-sepia":"var(--chakra-empty,/*!*/ /*!*/)"};function zP(e){return{"--chakra-ring-offset-shadow":"var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)","--chakra-ring-shadow":"var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)","--chakra-ring-width":e,boxShadow:["var(--chakra-ring-offset-shadow)","var(--chakra-ring-shadow)","var(--chakra-shadow, 0 0 #0000)"].join(", ")}}var VP={"row-reverse":{space:"--chakra-space-x-reverse",divide:"--chakra-divide-x-reverse"},"column-reverse":{space:"--chakra-space-y-reverse",divide:"--chakra-divide-y-reverse"}},H2="& > :not(style) ~ :not(style)",$P={[H2]:{marginInlineStart:"calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",marginInlineEnd:"calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"}},jP={[H2]:{marginTop:"calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",marginBottom:"calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"}},Vm={"to-t":"to top","to-tr":"to top right","to-r":"to right","to-br":"to bottom right","to-b":"to bottom","to-bl":"to bottom left","to-l":"to left","to-tl":"to top left"},WP=new Set(Object.values(Vm)),U2=new Set(["none","-moz-initial","inherit","initial","revert","unset"]),HP=e=>e.trim();function UP(e,t){var d;var n;if(e==null||U2.has(e))return e;const r=/(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g,{type:o,values:a}=(d=(n=r.exec(e))==null?void 0:n.groups)!=null?d:{};if(!o||!a)return e;const i=o.includes("-gradient")?o:`${o}-gradient`,[s,...l]=a.split(",").map(HP).filter(Boolean);if((l==null?void 0:l.length)===0)return e;const u=s in Vm?Vm[s]:s;l.unshift(u);const c=l.map(f=>{if(WP.has(f))return f;const m=f.indexOf(" "),[v,h]=m!==-1?[f.substr(0,m),f.substr(m+1)]:[f],b=G2(h)?h:h&&h.split(" "),y=`colors.${v}`,g=y in t.__cssMap?t.__cssMap[y].varRef:v;return b?[g,...Array.isArray(b)?b:[b]].join(" "):g});return`${i}(${c.join(", ")})`}var G2=e=>typeof e=="string"&&e.includes("(")&&e.includes(")"),GP=(e,t)=>UP(e,t!=null?t:{});function KP(e){return/^var\(--.+\)$/.test(e)}var YP=e=>{const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}},sr=e=>t=>`${e}(${t})`,Re={filter(e){return e!=="auto"?e:LP},backdropFilter(e){return e!=="auto"?e:BP},ring(e){return zP(Re.px(e))},bgClip(e){return e==="text"?{color:"transparent",backgroundClip:"text"}:{backgroundClip:e}},transform(e){return e==="auto"?DP():e==="auto-gpu"?qP():e},vh(e){return e==="$100vh"?"var(--chakra-vh)":e},px(e){if(e==null)return e;const{unitless:t}=YP(e);return t||typeof e=="number"?`${e}px`:e},fraction(e){return typeof e!="number"||e>1?e:`${e*100}%`},float(e,t){const n={left:"right",right:"left"};return t.direction==="rtl"?n[e]:e},degree(e){if(KP(e)||e==null)return e;const t=typeof e=="string"&&!e.endsWith("deg");return typeof e=="number"||t?`${e}deg`:e},gradient:GP,blur:sr("blur"),opacity:sr("opacity"),brightness:sr("brightness"),contrast:sr("contrast"),dropShadow:sr("drop-shadow"),grayscale:sr("grayscale"),hueRotate:sr("hue-rotate"),invert:sr("invert"),saturate:sr("saturate"),sepia:sr("sepia"),bgImage(e){return e==null||G2(e)||U2.has(e)?e:`url(${e})`},outline(e){const t=String(e)==="0"||String(e)==="none";return e!==null&&t?{outline:"2px solid transparent",outlineOffset:"2px"}:{outline:e}},flexDirection(e){var o;const{space:t,divide:n}=(o=VP[e])!=null?o:{},r={flexDirection:e};return t&&(r[t]=1),n&&(r[n]=1),r}},I={borderWidths:$n("borderWidths"),borderStyles:$n("borderStyles"),colors:$n("colors"),borders:$n("borders"),radii:$n("radii",Re.px),space:$n("space",wu(Re.vh,Re.px)),spaceT:$n("space",wu(Re.vh,Re.px)),degreeT(e){return{property:e,transform:Re.degree}},prop(e,t,n){return{property:e,scale:t,...t&&{transform:Ks({scale:t,transform:n})}}},propT(e,t){return{property:e,transform:t}},sizes:$n("sizes",wu(Re.vh,Re.px)),sizesT:$n("sizes",wu(Re.vh,Re.fraction)),shadows:$n("shadows"),logical:OP,blur:$n("blur",Re.blur)},ks={background:I.colors("background"),backgroundColor:I.colors("backgroundColor"),backgroundImage:I.propT("backgroundImage",Re.bgImage),backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundAttachment:!0,backgroundClip:{transform:Re.bgClip},bgSize:I.prop("backgroundSize"),bgPosition:I.prop("backgroundPosition"),bg:I.colors("background"),bgColor:I.colors("backgroundColor"),bgPos:I.prop("backgroundPosition"),bgRepeat:I.prop("backgroundRepeat"),bgAttachment:I.prop("backgroundAttachment"),bgGradient:I.propT("backgroundImage",Re.gradient),bgClip:{transform:Re.bgClip}};Object.assign(ks,{bgImage:ks.backgroundImage,bgImg:ks.backgroundImage});var Me={border:I.borders("border"),borderWidth:I.borderWidths("borderWidth"),borderStyle:I.borderStyles("borderStyle"),borderColor:I.colors("borderColor"),borderRadius:I.radii("borderRadius"),borderTop:I.borders("borderTop"),borderBlockStart:I.borders("borderBlockStart"),borderTopLeftRadius:I.radii("borderTopLeftRadius"),borderStartStartRadius:I.logical({scale:"radii",property:{ltr:"borderTopLeftRadius",rtl:"borderTopRightRadius"}}),borderEndStartRadius:I.logical({scale:"radii",property:{ltr:"borderBottomLeftRadius",rtl:"borderBottomRightRadius"}}),borderTopRightRadius:I.radii("borderTopRightRadius"),borderStartEndRadius:I.logical({scale:"radii",property:{ltr:"borderTopRightRadius",rtl:"borderTopLeftRadius"}}),borderEndEndRadius:I.logical({scale:"radii",property:{ltr:"borderBottomRightRadius",rtl:"borderBottomLeftRadius"}}),borderRight:I.borders("borderRight"),borderInlineEnd:I.borders("borderInlineEnd"),borderBottom:I.borders("borderBottom"),borderBlockEnd:I.borders("borderBlockEnd"),borderBottomLeftRadius:I.radii("borderBottomLeftRadius"),borderBottomRightRadius:I.radii("borderBottomRightRadius"),borderLeft:I.borders("borderLeft"),borderInlineStart:{property:"borderInlineStart",scale:"borders"},borderInlineStartRadius:I.logical({scale:"radii",property:{ltr:["borderTopLeftRadius","borderBottomLeftRadius"],rtl:["borderTopRightRadius","borderBottomRightRadius"]}}),borderInlineEndRadius:I.logical({scale:"radii",property:{ltr:["borderTopRightRadius","borderBottomRightRadius"],rtl:["borderTopLeftRadius","borderBottomLeftRadius"]}}),borderX:I.borders(["borderLeft","borderRight"]),borderInline:I.borders("borderInline"),borderY:I.borders(["borderTop","borderBottom"]),borderBlock:I.borders("borderBlock"),borderTopWidth:I.borderWidths("borderTopWidth"),borderBlockStartWidth:I.borderWidths("borderBlockStartWidth"),borderTopColor:I.colors("borderTopColor"),borderBlockStartColor:I.colors("borderBlockStartColor"),borderTopStyle:I.borderStyles("borderTopStyle"),borderBlockStartStyle:I.borderStyles("borderBlockStartStyle"),borderBottomWidth:I.borderWidths("borderBottomWidth"),borderBlockEndWidth:I.borderWidths("borderBlockEndWidth"),borderBottomColor:I.colors("borderBottomColor"),borderBlockEndColor:I.colors("borderBlockEndColor"),borderBottomStyle:I.borderStyles("borderBottomStyle"),borderBlockEndStyle:I.borderStyles("borderBlockEndStyle"),borderLeftWidth:I.borderWidths("borderLeftWidth"),borderInlineStartWidth:I.borderWidths("borderInlineStartWidth"),borderLeftColor:I.colors("borderLeftColor"),borderInlineStartColor:I.colors("borderInlineStartColor"),borderLeftStyle:I.borderStyles("borderLeftStyle"),borderInlineStartStyle:I.borderStyles("borderInlineStartStyle"),borderRightWidth:I.borderWidths("borderRightWidth"),borderInlineEndWidth:I.borderWidths("borderInlineEndWidth"),borderRightColor:I.colors("borderRightColor"),borderInlineEndColor:I.colors("borderInlineEndColor"),borderRightStyle:I.borderStyles("borderRightStyle"),borderInlineEndStyle:I.borderStyles("borderInlineEndStyle"),borderTopRadius:I.radii(["borderTopLeftRadius","borderTopRightRadius"]),borderBottomRadius:I.radii(["borderBottomLeftRadius","borderBottomRightRadius"]),borderLeftRadius:I.radii(["borderTopLeftRadius","borderBottomLeftRadius"]),borderRightRadius:I.radii(["borderTopRightRadius","borderBottomRightRadius"])};Object.assign(Me,{rounded:Me.borderRadius,roundedTop:Me.borderTopRadius,roundedTopLeft:Me.borderTopLeftRadius,roundedTopRight:Me.borderTopRightRadius,roundedTopStart:Me.borderStartStartRadius,roundedTopEnd:Me.borderStartEndRadius,roundedBottom:Me.borderBottomRadius,roundedBottomLeft:Me.borderBottomLeftRadius,roundedBottomRight:Me.borderBottomRightRadius,roundedBottomStart:Me.borderEndStartRadius,roundedBottomEnd:Me.borderEndEndRadius,roundedLeft:Me.borderLeftRadius,roundedRight:Me.borderRightRadius,roundedStart:Me.borderInlineStartRadius,roundedEnd:Me.borderInlineEndRadius,borderStart:Me.borderInlineStart,borderEnd:Me.borderInlineEnd,borderTopStartRadius:Me.borderStartStartRadius,borderTopEndRadius:Me.borderStartEndRadius,borderBottomStartRadius:Me.borderEndStartRadius,borderBottomEndRadius:Me.borderEndEndRadius,borderStartRadius:Me.borderInlineStartRadius,borderEndRadius:Me.borderInlineEndRadius,borderStartWidth:Me.borderInlineStartWidth,borderEndWidth:Me.borderInlineEndWidth,borderStartColor:Me.borderInlineStartColor,borderEndColor:Me.borderInlineEndColor,borderStartStyle:Me.borderInlineStartStyle,borderEndStyle:Me.borderInlineEndStyle});var K2={color:I.colors("color"),textColor:I.colors("color"),fill:I.colors("fill"),stroke:I.colors("stroke")},Oc={boxShadow:I.shadows("boxShadow"),mixBlendMode:!0,blendMode:I.prop("mixBlendMode"),backgroundBlendMode:!0,bgBlendMode:I.prop("backgroundBlendMode"),opacity:!0};Object.assign(Oc,{shadow:Oc.boxShadow});var Y2={filter:{transform:Re.filter},blur:I.blur("--chakra-blur"),brightness:I.propT("--chakra-brightness",Re.brightness),contrast:I.propT("--chakra-contrast",Re.contrast),hueRotate:I.degreeT("--chakra-hue-rotate"),invert:I.propT("--chakra-invert",Re.invert),saturate:I.propT("--chakra-saturate",Re.saturate),dropShadow:I.propT("--chakra-drop-shadow",Re.dropShadow),backdropFilter:{transform:Re.backdropFilter},backdropBlur:I.blur("--chakra-backdrop-blur"),backdropBrightness:I.propT("--chakra-backdrop-brightness",Re.brightness),backdropContrast:I.propT("--chakra-backdrop-contrast",Re.contrast),backdropHueRotate:I.degreeT("--chakra-backdrop-hue-rotate"),backdropInvert:I.propT("--chakra-backdrop-invert",Re.invert),backdropSaturate:I.propT("--chakra-backdrop-saturate",Re.saturate)},Ys={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:{transform:Re.flexDirection},experimental_spaceX:{static:$P,transform:Ks({scale:"space",transform:e=>e!==null?{"--chakra-space-x":e}:null})},experimental_spaceY:{static:jP,transform:Ks({scale:"space",transform:e=>e!=null?{"--chakra-space-y":e}:null})},flex:!0,flexFlow:!0,flexGrow:!0,flexShrink:!0,flexBasis:I.sizes("flexBasis"),justifySelf:!0,alignSelf:!0,order:!0,placeItems:!0,placeContent:!0,placeSelf:!0,gap:I.space("gap"),rowGap:I.space("rowGap"),columnGap:I.space("columnGap")};Object.assign(Ys,{flexDir:Ys.flexDirection});var qg={gridGap:I.space("gridGap"),gridColumnGap:I.space("gridColumnGap"),gridRowGap:I.space("gridRowGap"),gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridColumnStart:!0,gridColumnEnd:!0,gridRowStart:!0,gridRowEnd:!0,gridAutoRows:!0,gridTemplate:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},X2={appearance:!0,cursor:!0,resize:!0,userSelect:!0,pointerEvents:!0,outline:{transform:Re.outline},outlineOffset:!0,outlineColor:I.colors("outlineColor")},un={width:I.sizesT("width"),inlineSize:I.sizesT("inlineSize"),height:I.sizes("height"),blockSize:I.sizes("blockSize"),boxSize:I.sizes(["width","height"]),minWidth:I.sizes("minWidth"),minInlineSize:I.sizes("minInlineSize"),minHeight:I.sizes("minHeight"),minBlockSize:I.sizes("minBlockSize"),maxWidth:I.sizes("maxWidth"),maxInlineSize:I.sizes("maxInlineSize"),maxHeight:I.sizes("maxHeight"),maxBlockSize:I.sizes("maxBlockSize"),overflow:!0,overflowX:!0,overflowY:!0,overscrollBehavior:!0,overscrollBehaviorX:!0,overscrollBehaviorY:!0,display:!0,verticalAlign:!0,boxSizing:!0,boxDecorationBreak:!0,float:I.propT("float",Re.float),objectFit:!0,objectPosition:!0,visibility:!0,isolation:!0};Object.assign(un,{w:un.width,h:un.height,minW:un.minWidth,maxW:un.maxWidth,minH:un.minHeight,maxH:un.maxHeight,overscroll:un.overscrollBehavior,overscrollX:un.overscrollBehaviorX,overscrollY:un.overscrollBehaviorY});var Z2={listStyleType:!0,listStylePosition:!0,listStylePos:I.prop("listStylePosition"),listStyleImage:!0,listStyleImg:I.prop("listStyleImage")};function XP(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}var ZP=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},QP=ZP(XP),JP={border:"0px",clip:"rect(0, 0, 0, 0)",width:"1px",height:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},eT={position:"static",width:"auto",height:"auto",clip:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal"},vp=(e,t,n)=>{const r={},o=QP(e,t,{});for(const a in o)a in n&&n[a]!=null||(r[a]=o[a]);return r},Q2={srOnly:{transform(e){return e===!0?JP:e==="focusable"?eT:{}}},layerStyle:{processResult:!0,transform:(e,t,n)=>vp(t,`layerStyles.${e}`,n)},textStyle:{processResult:!0,transform:(e,t,n)=>vp(t,`textStyles.${e}`,n)},apply:{processResult:!0,transform:(e,t,n)=>vp(t,e,n)}},ti={position:!0,pos:I.prop("position"),zIndex:I.prop("zIndex","zIndices"),inset:I.spaceT("inset"),insetX:I.spaceT(["left","right"]),insetInline:I.spaceT("insetInline"),insetY:I.spaceT(["top","bottom"]),insetBlock:I.spaceT("insetBlock"),top:I.spaceT("top"),insetBlockStart:I.spaceT("insetBlockStart"),bottom:I.spaceT("bottom"),insetBlockEnd:I.spaceT("insetBlockEnd"),left:I.spaceT("left"),insetInlineStart:I.logical({scale:"space",property:{ltr:"left",rtl:"right"}}),right:I.spaceT("right"),insetInlineEnd:I.logical({scale:"space",property:{ltr:"right",rtl:"left"}})};Object.assign(ti,{insetStart:ti.insetInlineStart,insetEnd:ti.insetInlineEnd});var J2={ring:{transform:Re.ring},ringColor:I.colors("--chakra-ring-color"),ringOffset:I.prop("--chakra-ring-offset-width"),ringOffsetColor:I.colors("--chakra-ring-offset-color"),ringInset:I.prop("--chakra-ring-inset")},We={margin:I.spaceT("margin"),marginTop:I.spaceT("marginTop"),marginBlockStart:I.spaceT("marginBlockStart"),marginRight:I.spaceT("marginRight"),marginInlineEnd:I.spaceT("marginInlineEnd"),marginBottom:I.spaceT("marginBottom"),marginBlockEnd:I.spaceT("marginBlockEnd"),marginLeft:I.spaceT("marginLeft"),marginInlineStart:I.spaceT("marginInlineStart"),marginX:I.spaceT(["marginInlineStart","marginInlineEnd"]),marginInline:I.spaceT("marginInline"),marginY:I.spaceT(["marginTop","marginBottom"]),marginBlock:I.spaceT("marginBlock"),padding:I.space("padding"),paddingTop:I.space("paddingTop"),paddingBlockStart:I.space("paddingBlockStart"),paddingRight:I.space("paddingRight"),paddingBottom:I.space("paddingBottom"),paddingBlockEnd:I.space("paddingBlockEnd"),paddingLeft:I.space("paddingLeft"),paddingInlineStart:I.space("paddingInlineStart"),paddingInlineEnd:I.space("paddingInlineEnd"),paddingX:I.space(["paddingInlineStart","paddingInlineEnd"]),paddingInline:I.space("paddingInline"),paddingY:I.space(["paddingTop","paddingBottom"]),paddingBlock:I.space("paddingBlock")};Object.assign(We,{m:We.margin,mt:We.marginTop,mr:We.marginRight,me:We.marginInlineEnd,marginEnd:We.marginInlineEnd,mb:We.marginBottom,ml:We.marginLeft,ms:We.marginInlineStart,marginStart:We.marginInlineStart,mx:We.marginX,my:We.marginY,p:We.padding,pt:We.paddingTop,py:We.paddingY,px:We.paddingX,pb:We.paddingBottom,pl:We.paddingLeft,ps:We.paddingInlineStart,paddingStart:We.paddingInlineStart,pr:We.paddingRight,pe:We.paddingInlineEnd,paddingEnd:We.paddingInlineEnd});var eS={textDecorationColor:I.colors("textDecorationColor"),textDecoration:!0,textDecor:{property:"textDecoration"},textDecorationLine:!0,textDecorationStyle:!0,textDecorationThickness:!0,textUnderlineOffset:!0,textShadow:I.shadows("textShadow")},tS={clipPath:!0,transform:I.propT("transform",Re.transform),transformOrigin:!0,translateX:I.spaceT("--chakra-translate-x"),translateY:I.spaceT("--chakra-translate-y"),skewX:I.degreeT("--chakra-skew-x"),skewY:I.degreeT("--chakra-skew-y"),scaleX:I.prop("--chakra-scale-x"),scaleY:I.prop("--chakra-scale-y"),scale:I.prop(["--chakra-scale-x","--chakra-scale-y"]),rotate:I.degreeT("--chakra-rotate")},nS={transition:!0,transitionDelay:!0,animation:!0,willChange:!0,transitionDuration:I.prop("transitionDuration","transition.duration"),transitionProperty:I.prop("transitionProperty","transition.property"),transitionTimingFunction:I.prop("transitionTimingFunction","transition.easing")},rS={fontFamily:I.prop("fontFamily","fonts"),fontSize:I.prop("fontSize","fontSizes",Re.px),fontWeight:I.prop("fontWeight","fontWeights"),lineHeight:I.prop("lineHeight","lineHeights"),letterSpacing:I.prop("letterSpacing","letterSpacings"),textAlign:!0,fontStyle:!0,textIndent:!0,wordBreak:!0,overflowWrap:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0,noOfLines:{static:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"var(--chakra-line-clamp)"},property:"--chakra-line-clamp"}},oS={scrollBehavior:!0,scrollSnapAlign:!0,scrollSnapStop:!0,scrollSnapType:!0,scrollMargin:I.spaceT("scrollMargin"),scrollMarginTop:I.spaceT("scrollMarginTop"),scrollMarginBottom:I.spaceT("scrollMarginBottom"),scrollMarginLeft:I.spaceT("scrollMarginLeft"),scrollMarginRight:I.spaceT("scrollMarginRight"),scrollMarginX:I.spaceT(["scrollMarginLeft","scrollMarginRight"]),scrollMarginY:I.spaceT(["scrollMarginTop","scrollMarginBottom"]),scrollPadding:I.spaceT("scrollPadding"),scrollPaddingTop:I.spaceT("scrollPaddingTop"),scrollPaddingBottom:I.spaceT("scrollPaddingBottom"),scrollPaddingLeft:I.spaceT("scrollPaddingLeft"),scrollPaddingRight:I.spaceT("scrollPaddingRight"),scrollPaddingX:I.spaceT(["scrollPaddingLeft","scrollPaddingRight"]),scrollPaddingY:I.spaceT(["scrollPaddingTop","scrollPaddingBottom"])};function aS(e){return Qn(e)&&e.reference?e.reference:String(e)}var Bd=(e,...t)=>t.map(aS).join(` ${e} `).replace(/calc/g,""),yb=(...e)=>`calc(${Bd("+",...e)})`,bb=(...e)=>`calc(${Bd("-",...e)})`,$m=(...e)=>`calc(${Bd("*",...e)})`,wb=(...e)=>`calc(${Bd("/",...e)})`,xb=e=>{const t=aS(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:$m(t,-1)},lo=Object.assign(e=>({add:(...t)=>lo(yb(e,...t)),subtract:(...t)=>lo(bb(e,...t)),multiply:(...t)=>lo($m(e,...t)),divide:(...t)=>lo(wb(e,...t)),negate:()=>lo(xb(e)),toString:()=>e.toString()}),{add:yb,subtract:bb,multiply:$m,divide:wb,negate:xb});function tT(e,t="-"){return e.replace(/\s+/g,t)}function nT(e){const t=tT(e.toString());return oT(rT(t))}function rT(e){return e.includes("\\.")?e:!Number.isInteger(parseFloat(e.toString()))?e.replace(".","\\."):e}function oT(e){return e.replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}function iS(e,t=""){return[t,e].filter(Boolean).join("-")}function sS(e,t){return`var(${e}${t?`, ${t}`:""})`}function lS(e,t=""){return nT(`--${iS(e,t)}`)}function qe(e,t,n){const r=lS(e,n);return{variable:r,reference:sS(r,t)}}function aT(e){const t=e==null?0:e.length;return t?e[t-1]:void 0}function iT(e){const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}}function jm(e){if(e==null)return e;const{unitless:t}=iT(e);return t||typeof e=="number"?`${e}px`:e}var uS=(e,t)=>parseInt(e[1],10)>parseInt(t[1],10)?1:-1,Lg=e=>Object.fromEntries(Object.entries(e).sort(uS));function Sb(e){const t=Lg(e);return Object.assign(Object.values(t),t)}function sT(e){const t=Object.keys(Lg(e));return new Set(t)}function Cb(e){var n;if(!e)return e;e=(n=jm(e))!=null?n:e;const t=e.endsWith("px")?-1:-.0625;return typeof e=="number"?`${e+t}`:e.replace(/(\d+\.?\d*)/u,r=>`${parseFloat(r)+t}`)}function ms(e,t){const n=["@media screen"];return e&&n.push("and",`(min-width: ${jm(e)})`),t&&n.push("and",`(max-width: ${jm(t)})`),n.join(" ")}function lT(e){var a;if(!e)return null;e.base=(a=e.base)!=null?a:"0px";const t=Sb(e),n=Object.entries(e).sort(uS).map(([i,s],l,u)=>{var d;let[,c]=(d=u[l+1])!=null?d:[];return c=parseFloat(c)>0?Cb(c):void 0,{_minW:Cb(s),breakpoint:i,minW:s,maxW:c,maxWQuery:ms(null,c),minWQuery:ms(s),minMaxQuery:ms(s,c)}}),r=sT(e),o=Array.from(r.values());return{keys:r,normalized:t,isResponsive(i){const s=Object.keys(i);return s.length>0&&s.every(l=>r.has(l))},asObject:Lg(e),asArray:Sb(e),details:n,media:[null,...t.map(i=>ms(i)).slice(1)],toArrayValue(i){if(!Qn(i))throw new Error("toArrayValue: value must be an object");const s=o.map(l=>{var u;return(u=i[l])!=null?u:null});for(;aT(s)===null;)s.pop();return s},toObjectValue(i){if(!Array.isArray(i))throw new Error("toObjectValue: value must be an array");return i.reduce((s,l,u)=>{const c=o[u];return c!=null&&l!=null&&(s[c]=l),s},{})}}}var Ft={hover:(e,t)=>`${e}:hover ${t}, ${e}[data-hover] ${t}`,focus:(e,t)=>`${e}:focus ${t}, ${e}[data-focus] ${t}`,focusVisible:(e,t)=>`${e}:focus-visible ${t}`,focusWithin:(e,t)=>`${e}:focus-within ${t}`,active:(e,t)=>`${e}:active ${t}, ${e}[data-active] ${t}`,disabled:(e,t)=>`${e}:disabled ${t}, ${e}[data-disabled] ${t}`,invalid:(e,t)=>`${e}:invalid ${t}, ${e}[data-invalid] ${t}`,checked:(e,t)=>`${e}:checked ${t}, ${e}[data-checked] ${t}`,indeterminate:(e,t)=>`${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,readOnly:(e,t)=>`${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,expanded:(e,t)=>`${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,placeholderShown:(e,t)=>`${e}:placeholder-shown ${t}`},Qr=e=>cS(t=>e(t,"&"),"[role=group]","[data-group]",".group"),Ar=e=>cS(t=>e(t,"~ &"),"[data-peer]",".peer"),cS=(e,...t)=>t.map(e).join(", "),Dl={_hover:"&:hover, &[data-hover]",_active:"&:active, &[data-active]",_focus:"&:focus, &[data-focus]",_highlighted:"&[data-highlighted]",_focusWithin:"&:focus-within",_focusVisible:"&:focus-visible, &[data-focus-visible]",_disabled:"&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",_readOnly:"&[aria-readonly=true], &[readonly], &[data-readonly]",_before:"&::before",_after:"&::after",_empty:"&:empty",_expanded:"&[aria-expanded=true], &[data-expanded]",_checked:"&[aria-checked=true], &[data-checked]",_grabbed:"&[aria-grabbed=true], &[data-grabbed]",_pressed:"&[aria-pressed=true], &[data-pressed]",_invalid:"&[aria-invalid=true], &[data-invalid]",_valid:"&[data-valid], &[data-state=valid]",_loading:"&[data-loading], &[aria-busy=true]",_selected:"&[aria-selected=true], &[data-selected]",_hidden:"&[hidden], &[data-hidden]",_autofill:"&:-webkit-autofill",_even:"&:nth-of-type(even)",_odd:"&:nth-of-type(odd)",_first:"&:first-of-type",_last:"&:last-of-type",_notFirst:"&:not(:first-of-type)",_notLast:"&:not(:last-of-type)",_visited:"&:visited",_activeLink:"&[aria-current=page]",_activeStep:"&[aria-current=step]",_indeterminate:"&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",_groupHover:Qr(Ft.hover),_peerHover:Ar(Ft.hover),_groupFocus:Qr(Ft.focus),_peerFocus:Ar(Ft.focus),_groupFocusVisible:Qr(Ft.focusVisible),_peerFocusVisible:Ar(Ft.focusVisible),_groupActive:Qr(Ft.active),_peerActive:Ar(Ft.active),_groupDisabled:Qr(Ft.disabled),_peerDisabled:Ar(Ft.disabled),_groupInvalid:Qr(Ft.invalid),_peerInvalid:Ar(Ft.invalid),_groupChecked:Qr(Ft.checked),_peerChecked:Ar(Ft.checked),_groupFocusWithin:Qr(Ft.focusWithin),_peerFocusWithin:Ar(Ft.focusWithin),_peerPlaceholderShown:Ar(Ft.placeholderShown),_placeholder:"&::placeholder",_placeholderShown:"&:placeholder-shown",_fullScreen:"&:fullscreen",_selection:"&::selection",_rtl:"[dir=rtl] &, &[dir=rtl]",_ltr:"[dir=ltr] &, &[dir=ltr]",_mediaDark:"@media (prefers-color-scheme: dark)",_mediaReduceMotion:"@media (prefers-reduced-motion: reduce)",_dark:".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",_light:".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"},dS=Object.keys(Dl);function kb(e,t){return qe(String(e).replace(/\./g,"-"),void 0,t)}function uT(e,t){let n={};const r={};for(const[o,a]of Object.entries(e)){const{isSemantic:i,value:s}=a,{variable:l,reference:u}=kb(o,t==null?void 0:t.cssVarPrefix);if(!i){if(o.startsWith("space")){const f=o.split("."),[m,...v]=f,h=`${m}.-${v.join(".")}`,b=lo.negate(s),y=lo.negate(u);r[h]={value:b,var:l,varRef:y}}n[l]=s,r[o]={value:s,var:l,varRef:u};continue}const c=f=>{const v=[String(o).split(".")[0],f].join(".");if(!e[v])return f;const{reference:b}=kb(v,t==null?void 0:t.cssVarPrefix);return b},d=Qn(s)?s:{default:s};n=Tn(n,Object.entries(d).reduce((f,[m,v])=>{var g;var h;const b=c(v);if(m==="default")return f[l]=b,f;const y=(g=(h=Dl)==null?void 0:h[m])!=null?g:m;return f[y]={[l]:b},f},{})),r[o]={value:u,var:l,varRef:u}}return{cssVars:n,cssMap:r}}function cT(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function dT(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}var fT=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur"];function pT(e){return dT(e,fT)}function mT(e){return e.semanticTokens}function hT(e){const{__cssMap:t,__cssVars:n,__breakpoints:r,...o}=e;return o}function fS({tokens:e,semanticTokens:t}){var o,a;const n=Object.entries((o=Dc(e))!=null?o:{}).map(([i,s])=>[i,{isSemantic:!1,value:s}]),r=Object.entries((a=Dc(t,1))!=null?a:{}).map(([i,s])=>[i,{isSemantic:!0,value:s}]);return Object.fromEntries([...n,...r])}function Dc(e,t=1/0){return!Qn(e)&&!Array.isArray(e)||!t?e:Object.entries(e).reduce((n,[r,o])=>(Qn(o)||Array.isArray(o)?Object.entries(Dc(o,t-1)).forEach(([a,i])=>{n[`${r}.${a}`]=i}):n[r]=o,n),{})}function pS(e){var t;const n=hT(e),r=pT(n),o=mT(n),a=fS({tokens:r,semanticTokens:o}),i=(t=n.config)==null?void 0:t.cssVarPrefix,{cssMap:s,cssVars:l}=uT(a,{cssVarPrefix:i});return Object.assign(n,{__cssVars:{...{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0"},...l},__cssMap:s,__breakpoints:lT(n.breakpoints)}),n}var zd=Tn({},ks,Me,K2,Ys,un,Y2,J2,X2,qg,Q2,ti,Oc,We,oS,rS,eS,tS,Z2,nS),gT=Object.assign({},We,un,Ys,qg,ti),Bg=Object.keys(gT),mS=[...Object.keys(zd),...dS],vT={...zd,...Dl},hS=e=>e in vT,yT=e=>t=>{if(!t.__breakpoints)return e;const{isResponsive:n,toArrayValue:r,media:o}=t.__breakpoints,a={};for(const i in e){let s=Xo(e[i],t);if(s==null)continue;if(s=Qn(s)&&n(s)?r(s):s,!Array.isArray(s)){a[i]=s;continue}const l=s.slice(0,o.length).length;for(let u=0;u<l;u+=1){const c=o==null?void 0:o[u];if(!c){a[i]=s[u];continue}a[c]=a[c]||{},s[u]!=null&&(a[c][i]=s[u])}}return a};function bT(e){const t=[];let n="",r=!1;for(let o=0;o<e.length;o++){const a=e[o];a==="("?(r=!0,n+=a):a===")"?(r=!1,n+=a):a===","&&!r?(t.push(n),n=""):n+=a}return n=n.trim(),n&&t.push(n),t}function wT(e){return/^var\(--.+\)$/.test(e)}var xT=(e,t)=>e.startsWith("--")&&typeof t=="string"&&!wT(t),ST=(e,t)=>{var i,s;if(t==null)return t;const n=l=>{var u,c;return(c=(u=e.__cssMap)==null?void 0:u[l])==null?void 0:c.varRef},r=l=>{var u;return(u=n(l))!=null?u:l},[o,a]=bT(t);return t=(s=(i=n(o))!=null?i:r(a))!=null?s:r(t),t};function gS(e){const{configs:t={},pseudos:n={},theme:r}=e,o=(a,i=!1)=>{var d,f;var s;const l=Xo(a,r),u=yT(l)(r);let c={};for(let m in u){const v=u[m];let h=Xo(v,r);m in n&&(m=n[m]),xT(m,h)&&(h=ST(r,h));let b=t[m];if(b===!0&&(b={property:m}),Qn(h)){c[m]=(d=c[m])!=null?d:{},c[m]=Tn({},c[m],o(h,!0));continue}let y=(f=(s=b==null?void 0:b.transform)==null?void 0:s.call(b,h,r,l))!=null?f:h;y=b!=null&&b.processResult?o(y,!0):y;const g=Xo(b==null?void 0:b.property,r);if(!i&&(b==null?void 0:b.static)){const w=Xo(b.static,r);c=Tn({},c,w)}if(g&&Array.isArray(g)){for(const w of g)c[w]=y;continue}if(g){g==="&"&&Qn(y)?c=Tn({},c,y):c[g]=y;continue}if(Qn(y)){c=Tn({},c,y);continue}c[m]=y}return c};return o}var zg=e=>t=>gS({theme:t,pseudos:Dl,configs:zd})(e);function CT(e){return e}function kT(e){return e}function Ke(e){return{definePartsStyle(t){return t},defineMultiStyleConfig(t){return{parts:e,...t}}}}function _T(e,t){if(Array.isArray(e))return e;if(Qn(e))return t(e);if(e!=null)return[e]}function ET(e,t){for(let n=t+1;n<e.length;n++)if(e[n]!=null)return n;return-1}function PT(e){const t=e.__breakpoints;return function(r,o,a,i){var s,l;if(!t)return;const u={},c=_T(a,t.toArrayValue);if(!c)return u;const d=c.length,f=d===1,m=!!r.parts;for(let v=0;v<d;v++){const h=t.details[v],b=t.details[ET(c,v)],y=ms(h.minW,b==null?void 0:b._minW),g=Xo((s=r[o])==null?void 0:s[c[v]],i);if(!!g){if(m){(l=r.parts)==null||l.forEach(w=>{Tn(u,{[w]:f?g[w]:{[y]:g[w]}})});continue}if(!m){f?Tn(u,g):u[y]=g;continue}u[y]=g}}return u}}function vS(e){return t=>{var i;const{variant:n,size:r,theme:o}=t,a=PT(o);return Tn({},Xo((i=e.baseStyle)!=null?i:{},t),a(e,"sizes",r,t),a(e,"variants",n,t))}}function yS(e,t,n){var a;var r,o;return(a=(o=(r=e.__cssMap)==null?void 0:r[`${t}.${n}`])==null?void 0:o.varRef)!=null?a:n}function ye(e){return cT(e,["styleConfig","size","variant","colorScheme"])}function TT(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function FT(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var AT=function(){function e(n){var r=this;this._insertTag=function(o){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,a),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(FT(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var a=TT(o);try{a.insertRule(r,a.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),qt="-ms-",qc="-moz-",Oe="-webkit-",bS="comm",Vg="rule",$g="decl",IT="@import",wS="@keyframes",RT=Math.abs,Vd=String.fromCharCode,NT=Object.assign;function MT(e,t){return It(e,0)^45?(((t<<2^It(e,0))<<2^It(e,1))<<2^It(e,2))<<2^It(e,3):0}function xS(e){return e.trim()}function OT(e,t){return(e=t.exec(e))?e[0]:e}function Le(e,t,n){return e.replace(t,n)}function Wm(e,t){return e.indexOf(t)}function It(e,t){return e.charCodeAt(t)|0}function Xs(e,t,n){return e.slice(t,n)}function mr(e){return e.length}function jg(e){return e.length}function xu(e,t){return t.push(e),e}function DT(e,t){return e.map(t).join("")}var $d=1,Ci=1,SS=0,sn=0,pt=0,zi="";function jd(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:$d,column:Ci,length:i,return:""}}function Qi(e,t){return NT(jd("",null,null,"",null,null,0),e,{length:-e.length},t)}function qT(){return pt}function LT(){return pt=sn>0?It(zi,--sn):0,Ci--,pt===10&&(Ci=1,$d--),pt}function fn(){return pt=sn<SS?It(zi,sn++):0,Ci++,pt===10&&(Ci=1,$d++),pt}function wr(){return It(zi,sn)}function ac(){return sn}function ql(e,t){return Xs(zi,e,t)}function Zs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function CS(e){return $d=Ci=1,SS=mr(zi=e),sn=0,[]}function kS(e){return zi="",e}function ic(e){return xS(ql(sn-1,Hm(e===91?e+2:e===40?e+1:e)))}function BT(e){for(;(pt=wr())&&pt<33;)fn();return Zs(e)>2||Zs(pt)>3?"":" "}function zT(e,t){for(;--t&&fn()&&!(pt<48||pt>102||pt>57&&pt<65||pt>70&&pt<97););return ql(e,ac()+(t<6&&wr()==32&&fn()==32))}function Hm(e){for(;fn();)switch(pt){case e:return sn;case 34:case 39:e!==34&&e!==39&&Hm(pt);break;case 40:e===41&&Hm(e);break;case 92:fn();break}return sn}function VT(e,t){for(;fn()&&e+pt!==47+10;)if(e+pt===42+42&&wr()===47)break;return"/*"+ql(t,sn-1)+"*"+Vd(e===47?e:fn())}function $T(e){for(;!Zs(wr());)fn();return ql(e,sn)}function jT(e){return kS(sc("",null,null,null,[""],e=CS(e),0,[0],e))}function sc(e,t,n,r,o,a,i,s,l){for(var u=0,c=0,d=i,f=0,m=0,v=0,h=1,b=1,y=1,g=0,w="",x=o,k=a,_=r,E=w;b;)switch(v=g,g=fn()){case 40:if(v!=108&&It(E,d-1)==58){Wm(E+=Le(ic(g),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:E+=ic(g);break;case 9:case 10:case 13:case 32:E+=BT(v);break;case 92:E+=zT(ac()-1,7);continue;case 47:switch(wr()){case 42:case 47:xu(WT(VT(fn(),ac()),t,n),l);break;default:E+="/"}break;case 123*h:s[u++]=mr(E)*y;case 125*h:case 59:case 0:switch(g){case 0:case 125:b=0;case 59+c:m>0&&mr(E)-d&&xu(m>32?Eb(E+";",r,n,d-1):Eb(Le(E," ","")+";",r,n,d-2),l);break;case 59:E+=";";default:if(xu(_=_b(E,t,n,u,c,o,s,w,x=[],k=[],d),a),g===123)if(c===0)sc(E,t,_,_,x,a,d,s,k);else switch(f===99&&It(E,3)===110?100:f){case 100:case 109:case 115:sc(e,_,_,r&&xu(_b(e,_,_,0,0,o,s,w,o,x=[],d),k),o,k,d,s,r?x:k);break;default:sc(E,_,_,_,[""],k,0,s,k)}}u=c=m=0,h=y=1,w=E="",d=i;break;case 58:d=1+mr(E),m=v;default:if(h<1){if(g==123)--h;else if(g==125&&h++==0&&LT()==125)continue}switch(E+=Vd(g),g*h){case 38:y=c>0?1:(E+="\f",-1);break;case 44:s[u++]=(mr(E)-1)*y,y=1;break;case 64:wr()===45&&(E+=ic(fn())),f=wr(),c=d=mr(w=E+=$T(ac())),g++;break;case 45:v===45&&mr(E)==2&&(h=0)}}return a}function _b(e,t,n,r,o,a,i,s,l,u,c){for(var d=o-1,f=o===0?a:[""],m=jg(f),v=0,h=0,b=0;v<r;++v)for(var y=0,g=Xs(e,d+1,d=RT(h=i[v])),w=e;y<m;++y)(w=xS(h>0?f[y]+" "+g:Le(g,/&\f/g,f[y])))&&(l[b++]=w);return jd(e,t,n,o===0?Vg:s,l,u,c)}function WT(e,t,n){return jd(e,t,n,bS,Vd(qT()),Xs(e,2,-2),0)}function Eb(e,t,n,r){return jd(e,t,n,$g,Xs(e,0,r),Xs(e,r+1,-1),r)}function ni(e,t){for(var n="",r=jg(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function HT(e,t,n,r){switch(e.type){case IT:case $g:return e.return=e.return||e.value;case bS:return"";case wS:return e.return=e.value+"{"+ni(e.children,r)+"}";case Vg:e.value=e.props.join(",")}return mr(n=ni(e.children,r))?e.return=e.value+"{"+n+"}":""}function UT(e){var t=jg(e);return function(n,r,o,a){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,a)||"";return i}}function GT(e){return function(t){t.root||(t=t.return)&&e(t)}}var Pb=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}};function _S(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var KT=function(t,n,r){for(var o=0,a=0;o=a,a=wr(),o===38&&a===12&&(n[r]=1),!Zs(a);)fn();return ql(t,sn)},YT=function(t,n){var r=-1,o=44;do switch(Zs(o)){case 0:o===38&&wr()===12&&(n[r]=1),t[r]+=KT(sn-1,n,r);break;case 2:t[r]+=ic(o);break;case 4:if(o===44){t[++r]=wr()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Vd(o)}while(o=fn());return t},XT=function(t,n){return kS(YT(CS(t),n))},Tb=new WeakMap,ZT=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Tb.get(r))&&!o){Tb.set(t,!0);for(var a=[],i=XT(n,a),s=r.props,l=0,u=0;l<i.length;l++)for(var c=0;c<s.length;c++,u++)t.props[u]=a[l]?i[l].replace(/&\f/g,s[c]):s[c]+" "+i[l]}}},QT=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function ES(e,t){switch(MT(e,t)){case 5103:return Oe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+e+qc+e+qt+e+e;case 6828:case 4268:return Oe+e+qt+e+e;case 6165:return Oe+e+qt+"flex-"+e+e;case 5187:return Oe+e+Le(e,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+qt+"flex-$1$2")+e;case 5443:return Oe+e+qt+"flex-item-"+Le(e,/flex-|-self/,"")+e;case 4675:return Oe+e+qt+"flex-line-pack"+Le(e,/align-content|flex-|-self/,"")+e;case 5548:return Oe+e+qt+Le(e,"shrink","negative")+e;case 5292:return Oe+e+qt+Le(e,"basis","preferred-size")+e;case 6060:return Oe+"box-"+Le(e,"-grow","")+Oe+e+qt+Le(e,"grow","positive")+e;case 4554:return Oe+Le(e,/([^-])(transform)/g,"$1"+Oe+"$2")+e;case 6187:return Le(Le(Le(e,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),e,"")+e;case 5495:case 3959:return Le(e,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return Le(Le(e,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+qt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+e+e;case 4095:case 3583:case 4068:case 2532:return Le(e,/(.+)-inline(.+)/,Oe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mr(e)-1-t>6)switch(It(e,t+1)){case 109:if(It(e,t+4)!==45)break;case 102:return Le(e,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+qc+(It(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Wm(e,"stretch")?ES(Le(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(It(e,t+1)!==115)break;case 6444:switch(It(e,mr(e)-3-(~Wm(e,"!important")&&10))){case 107:return Le(e,":",":"+Oe)+e;case 101:return Le(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Oe+(It(e,14)===45?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+qt+"$2box$3")+e}break;case 5936:switch(It(e,t+11)){case 114:return Oe+e+qt+Le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Oe+e+qt+Le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Oe+e+qt+Le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Oe+e+qt+e+e}return e}var JT=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case $g:t.return=ES(t.value,t.length);break;case wS:return ni([Qi(t,{value:Le(t.value,"@","@"+Oe)})],o);case Vg:if(t.length)return DT(t.props,function(a){switch(OT(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ni([Qi(t,{props:[Le(a,/:(read-\w+)/,":"+qc+"$1")]})],o);case"::placeholder":return ni([Qi(t,{props:[Le(a,/:(plac\w+)/,":"+Oe+"input-$1")]}),Qi(t,{props:[Le(a,/:(plac\w+)/,":"+qc+"$1")]}),Qi(t,{props:[Le(a,/:(plac\w+)/,qt+"input-$1")]})],o)}return""})}},e7=[JT],t7=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(h){var b=h.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var o=t.stylisPlugins||e7,a={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(h){for(var b=h.getAttribute("data-emotion").split(" "),y=1;y<b.length;y++)a[b[y]]=!0;s.push(h)});var l,u=[ZT,QT];{var c,d=[HT,GT(function(h){c.insert(h)})],f=UT(u.concat(o,d)),m=function(b){return ni(jT(b),f)};l=function(b,y,g,w){c=g,m(b?b+"{"+y.styles+"}":y.styles),w&&(v.inserted[y.name]=!0)}}var v={key:n,sheet:new AT({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return v.sheet.hydrate(s),v};function Qs(){return Qs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qs.apply(this,arguments)}var PS={exports:{}},Ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Et=typeof Symbol=="function"&&Symbol.for,Wg=Et?Symbol.for("react.element"):60103,Hg=Et?Symbol.for("react.portal"):60106,Wd=Et?Symbol.for("react.fragment"):60107,Hd=Et?Symbol.for("react.strict_mode"):60108,Ud=Et?Symbol.for("react.profiler"):60114,Gd=Et?Symbol.for("react.provider"):60109,Kd=Et?Symbol.for("react.context"):60110,Ug=Et?Symbol.for("react.async_mode"):60111,Yd=Et?Symbol.for("react.concurrent_mode"):60111,Xd=Et?Symbol.for("react.forward_ref"):60112,Zd=Et?Symbol.for("react.suspense"):60113,n7=Et?Symbol.for("react.suspense_list"):60120,Qd=Et?Symbol.for("react.memo"):60115,Jd=Et?Symbol.for("react.lazy"):60116,r7=Et?Symbol.for("react.block"):60121,o7=Et?Symbol.for("react.fundamental"):60117,a7=Et?Symbol.for("react.responder"):60118,i7=Et?Symbol.for("react.scope"):60119;function vn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Wg:switch(e=e.type,e){case Ug:case Yd:case Wd:case Ud:case Hd:case Zd:return e;default:switch(e=e&&e.$$typeof,e){case Kd:case Xd:case Jd:case Qd:case Gd:return e;default:return t}}case Hg:return t}}}function TS(e){return vn(e)===Yd}Ve.AsyncMode=Ug;Ve.ConcurrentMode=Yd;Ve.ContextConsumer=Kd;Ve.ContextProvider=Gd;Ve.Element=Wg;Ve.ForwardRef=Xd;Ve.Fragment=Wd;Ve.Lazy=Jd;Ve.Memo=Qd;Ve.Portal=Hg;Ve.Profiler=Ud;Ve.StrictMode=Hd;Ve.Suspense=Zd;Ve.isAsyncMode=function(e){return TS(e)||vn(e)===Ug};Ve.isConcurrentMode=TS;Ve.isContextConsumer=function(e){return vn(e)===Kd};Ve.isContextProvider=function(e){return vn(e)===Gd};Ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wg};Ve.isForwardRef=function(e){return vn(e)===Xd};Ve.isFragment=function(e){return vn(e)===Wd};Ve.isLazy=function(e){return vn(e)===Jd};Ve.isMemo=function(e){return vn(e)===Qd};Ve.isPortal=function(e){return vn(e)===Hg};Ve.isProfiler=function(e){return vn(e)===Ud};Ve.isStrictMode=function(e){return vn(e)===Hd};Ve.isSuspense=function(e){return vn(e)===Zd};Ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wd||e===Yd||e===Ud||e===Hd||e===Zd||e===n7||typeof e=="object"&&e!==null&&(e.$$typeof===Jd||e.$$typeof===Qd||e.$$typeof===Gd||e.$$typeof===Kd||e.$$typeof===Xd||e.$$typeof===o7||e.$$typeof===a7||e.$$typeof===i7||e.$$typeof===r7)};Ve.typeOf=vn;(function(e){e.exports=Ve})(PS);var FS=PS.exports,s7={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l7={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},AS={};AS[FS.ForwardRef]=s7;AS[FS.Memo]=l7;var u7=!0;function c7(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var IS=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||u7===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},RS=function(t,n,r){IS(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+o:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function d7(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var f7={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},p7=/[A-Z]|^ms/g,m7=/_EMO_([^_]+?)_([^]*?)_EMO_/g,NS=function(t){return t.charCodeAt(1)===45},Fb=function(t){return t!=null&&typeof t!="boolean"},yp=_S(function(e){return NS(e)?e:e.replace(p7,"-$&").toLowerCase()}),Ab=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(m7,function(r,o,a){return hr={name:o,styles:a,next:hr},o})}return f7[t]!==1&&!NS(t)&&typeof n=="number"&&n!==0?n+"px":n};function Js(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return hr={name:n.name,styles:n.styles,next:hr},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)hr={name:r.name,styles:r.styles,next:hr},r=r.next;var o=n.styles+";";return o}return h7(e,t,n)}case"function":{if(e!==void 0){var a=hr,i=n(e);return hr=a,Js(e,t,i)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function h7(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Js(e,t,n[o])+";";else for(var a in n){var i=n[a];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=a+"{"+t[i]+"}":Fb(i)&&(r+=yp(a)+":"+Ab(a,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var s=0;s<i.length;s++)Fb(i[s])&&(r+=yp(a)+":"+Ab(a,i[s])+";");else{var l=Js(e,t,i);switch(a){case"animation":case"animationName":{r+=yp(a)+":"+l+";";break}default:r+=a+"{"+l+"}"}}}return r}var Ib=/label:\s*([^\s;\n{]+)\s*(;|$)/g,hr,Gg=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,a="";hr=void 0;var i=t[0];i==null||i.raw===void 0?(o=!1,a+=Js(r,n,i)):a+=i[0];for(var s=1;s<t.length;s++)a+=Js(r,n,t[s]),o&&(a+=i[s]);Ib.lastIndex=0;for(var l="",u;(u=Ib.exec(a))!==null;)l+="-"+u[1];var c=d7(a)+l;return{name:c,styles:a,next:hr}},g7=function(t){return t()},MS=mb["useInsertionEffect"]?mb["useInsertionEffect"]:!1,v7=MS||g7,Rb=MS||p.exports.useLayoutEffect,OS=p.exports.createContext(typeof HTMLElement<"u"?t7({key:"css"}):null);OS.Provider;var DS=function(t){return p.exports.forwardRef(function(n,r){var o=p.exports.useContext(OS);return t(n,o,r)})},el=p.exports.createContext({}),y7=function(t,n){if(typeof n=="function"){var r=n(t);return r}return Qs({},t,n)},b7=Pb(function(e){return Pb(function(t){return y7(e,t)})}),w7=function(t){var n=p.exports.useContext(el);return t.theme!==n&&(n=b7(n)(t.theme)),p.exports.createElement(el.Provider,{value:n},t.children)},ef=DS(function(e,t){var n=e.styles,r=Gg([n],void 0,p.exports.useContext(el)),o=p.exports.useRef();return Rb(function(){var a=t.key+"-global",i=new t.sheet.constructor({key:a,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+a+" "+r.name+'"]');return t.sheet.tags.length&&(i.before=t.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",a),i.hydrate([l])),o.current=[i,s],function(){i.flush()}},[t]),Rb(function(){var a=o.current,i=a[0],s=a[1];if(s){a[1]=!1;return}if(r.next!==void 0&&RS(t,r.next,!0),i.tags.length){var l=i.tags[i.tags.length-1].nextElementSibling;i.before=l,i.flush()}t.insert("",r,i,!1)},[t,r.name]),null});function x7(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Gg(t)}var rr=function(){var t=x7.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},S7=!0,bp="Invariant failed";function C7(e,t){if(!e){if(S7)throw new Error(bp);var n=typeof t=="function"?t():t,r=n?"".concat(bp,": ").concat(n):bp;throw new Error(r)}}var Su=function(t){var n=t.top,r=t.right,o=t.bottom,a=t.left,i=r-a,s=o-n,l={top:n,right:r,bottom:o,left:a,width:i,height:s,x:a,y:n,center:{x:(r+a)/2,y:(o+n)/2}};return l},k7=function(t,n){return{top:t.top-n.top,left:t.left-n.left,bottom:t.bottom+n.bottom,right:t.right+n.right}},Nb=function(t,n){return{top:t.top+n.top,left:t.left+n.left,bottom:t.bottom-n.bottom,right:t.right-n.right}},wp={top:0,right:0,bottom:0,left:0},_7=function(t){var n=t.borderBox,r=t.margin,o=r===void 0?wp:r,a=t.border,i=a===void 0?wp:a,s=t.padding,l=s===void 0?wp:s,u=Su(k7(n,o)),c=Su(Nb(n,i)),d=Su(Nb(c,l));return{marginBox:u,borderBox:Su(n),paddingBox:c,contentBox:d,margin:o,border:i,padding:l}},Sn=function(t){var n=t.slice(0,-2),r=t.slice(-2);if(r!=="px")return 0;var o=Number(n);return isNaN(o)&&C7(!1),o},E7=function(t,n){var r={top:Sn(n.marginTop),right:Sn(n.marginRight),bottom:Sn(n.marginBottom),left:Sn(n.marginLeft)},o={top:Sn(n.paddingTop),right:Sn(n.paddingRight),bottom:Sn(n.paddingBottom),left:Sn(n.paddingLeft)},a={top:Sn(n.borderTopWidth),right:Sn(n.borderRightWidth),bottom:Sn(n.borderBottomWidth),left:Sn(n.borderLeftWidth)};return _7({borderBox:t,margin:r,padding:o,border:a})},P7=function(t){var n=t.getBoundingClientRect(),r=window.getComputedStyle(t);return E7(n,r)},qS=1/60*1e3,T7=typeof performance<"u"?function(){return performance.now()}:function(){return Date.now()},LS=typeof window<"u"?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout(function(){return e(T7())},qS)};function F7(e){var t=[],n=[],r=0,o=!1,a=new WeakSet,i={schedule:function(s,l,u){l===void 0&&(l=!1),u===void 0&&(u=!1);var c=u&&o,d=c?t:n;return l&&a.add(s),d.indexOf(s)===-1&&(d.push(s),c&&o&&(r=t.length)),s},cancel:function(s){var l=n.indexOf(s);l!==-1&&n.splice(l,1),a.delete(s)},process:function(s){var l;if(o=!0,l=[n,t],t=l[0],n=l[1],n.length=0,r=t.length,r)for(var u=0;u<r;u++){var c=t[u];c(s),a.has(c)&&(i.schedule(c),e())}o=!1}};return i}var A7=40,Um=!0,tl=!1,Gm=!1,_s={delta:0,timestamp:0},tf=["read","update","preRender","render","postRender"],Kg=tf.reduce(function(e,t){return e[t]=F7(function(){return tl=!0}),e},{}),BS=tf.reduce(function(e,t){var n=Kg[t];return e[t]=function(r,o,a){return o===void 0&&(o=!1),a===void 0&&(a=!1),tl||R7(),n.schedule(r,o,a)},e},{}),zS=tf.reduce(function(e,t){return e[t]=Kg[t].cancel,e},{}),I7=function(e){return Kg[e].process(_s)},VS=function(e){tl=!1,_s.delta=Um?qS:Math.max(Math.min(e-_s.timestamp,A7),1),_s.timestamp=e,Gm=!0,tf.forEach(I7),Gm=!1,tl&&(Um=!1,LS(VS))},R7=function(){tl=!0,Um=!0,Gm||LS(VS)},Lc=function(){return _s};function Mb(e){return typeof e=="number"}function N7(e){return typeof e=="function"}var M7=!1;function $S(e){return"current"in e}function O7(e,t){const n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}function D7(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}var q7=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},jS=q7(D7);function WS(e,t){const n={};return Object.keys(e).forEach(r=>{const o=e[r];t(o,r,e)&&(n[r]=o)}),n}var HS=e=>WS(e,t=>t!=null);function Yg(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function nf(e){var n;if(!Yg(e))return!1;const t=(n=e.ownerDocument.defaultView)!=null?n:window;return e instanceof t.HTMLElement}function L7(e){var n;var t;return Yg(e)&&(n=(t=va(e))==null?void 0:t.defaultView)!=null?n:window}function va(e){var t;return Yg(e)&&(t=e.ownerDocument)!=null?t:document}function Xg(e){var t;return(t=e.view)!=null?t:window}function B7(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Ll=B7();function z7(e){const t=va(e);return t==null?void 0:t.activeElement}function Zg(e,t){return e?e===t||e.contains(t):!1}function V7(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}var US=e=>e.hasAttribute("tabindex"),$7=e=>US(e)&&e.tabIndex===-1;function j7(e){return Boolean(e.getAttribute("disabled"))===!0||Boolean(e.getAttribute("aria-disabled"))===!0}function W7(e){return nf(e)&&e.localName==="input"&&"select"in e}function GS(e){return(nf(e)?va(e):document).activeElement===e}function H7(e){return document.activeElement?e.contains(document.activeElement):!1}function KS(e){return e.parentElement&&KS(e.parentElement)?!0:e.hidden}function U7(e){const t=e.getAttribute("contenteditable");return t!=="false"&&t!=null}function YS(e){if(!nf(e)||KS(e)||j7(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const r={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in r?r[t]():U7(e)?!0:US(e)}function G7(e){return e?nf(e)&&YS(e)&&!$7(e):!1}var K7=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],Y7=K7.join(),X7=e=>e.offsetWidth>0&&e.offsetHeight>0;function Z7(e){const t=Array.from(e.querySelectorAll(Y7));return t.unshift(e),t.filter(n=>YS(n)&&X7(n))}function nl(e,...t){return N7(e)?e(...t):e}function Q7(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}function J7(e){let t;return function(...r){return e&&(t=e.apply(this,r),e=null),t}}var XS=()=>{},eF=J7(e=>()=>{const{condition:t,message:n}=e;t&&M7&&console.warn(n)}),tF=(...e)=>t=>e.reduce((n,r)=>r(n),t),xp=(e,t)=>Math.abs(e-t),Ob=e=>"x"in e&&"y"in e;function nF(e,t){if(Mb(e)&&Mb(t))return xp(e,t);if(Ob(e)&&Ob(t)){const n=xp(e.x,t.x),r=xp(e.y,t.y);return Math.sqrt(n**2+r**2)}return 0}function rl(e,t={}){const{isActive:n=GS,nextTick:r,preventScroll:o=!0,selectTextIfInput:a=!0}=t;if(!e||n(e))return-1;function i(){if(!e){eF({condition:!0,message:"[chakra-ui]: can't call focus() on `null` or `undefined` element"});return}if(rF())e.focus({preventScroll:o});else if(e.focus(),o){const s=oF(e);aF(s)}if(a){if(W7(e))e.select();else if("setSelectionRange"in e){const s=e;s.setSelectionRange(s.value.length,s.value.length)}}}return r?requestAnimationFrame(i):(i(),-1)}var Cu=null;function rF(){if(Cu==null){Cu=!1;try{document.createElement("div").focus({get preventScroll(){return Cu=!0,!0}})}catch{}}return Cu}function oF(e){var i;const t=va(e),n=(i=t.defaultView)!=null?i:window;let r=e.parentNode;const o=[],a=t.scrollingElement||t.documentElement;for(;r instanceof n.HTMLElement&&r!==a;)(r.offsetHeight<r.scrollHeight||r.offsetWidth<r.scrollWidth)&&o.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),r=r.parentNode;return a instanceof n.HTMLElement&&o.push({element:a,scrollTop:a.scrollTop,scrollLeft:a.scrollLeft}),o}function aF(e){for(const{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}function iF(e){const t=Xg(e);return typeof t.PointerEvent<"u"&&e instanceof t.PointerEvent?e.pointerType==="mouse":e instanceof t.MouseEvent}function ZS(e){return!!e.touches}function sF(e){return t=>{const n=Xg(t),r=t instanceof n.MouseEvent;(!r||r&&t.button===0)&&e(t)}}var lF={pageX:0,pageY:0};function uF(e,t="page"){const r=e.touches[0]||e.changedTouches[0]||lF;return{x:r[`${t}X`],y:r[`${t}Y`]}}function cF(e,t="page"){return{x:e[`${t}X`],y:e[`${t}Y`]}}function QS(e,t="page"){return{point:ZS(e)?uF(e,t):cF(e,t)}}var Qg=(e,t=!1)=>{const n=r=>e(r,QS(r));return t?sF(n):n},dF=()=>Ll&&window.onpointerdown===null,fF=()=>Ll&&window.ontouchstart===null,pF=()=>Ll&&window.onmousedown===null,mF={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},hF={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function Jg(e){return dF()?e:fF()?hF[e]:pF()?mF[e]:e}function Sp(e,t,n,r){return V7(e,Jg(t),Qg(n,t==="pointerdown"),r)}function gF(e){return ZS(e)&&e.touches.length>1}var vF=class{constructor(e,t,n){he(this,"history",[]);he(this,"startEvent",null);he(this,"lastEvent",null);he(this,"lastEventInfo",null);he(this,"handlers",{});he(this,"removeListeners",XS);he(this,"threshold",3);he(this,"win");he(this,"updatePoint",()=>{if(!(this.lastEvent&&this.lastEventInfo))return;const e=Cp(this.lastEventInfo,this.history),t=this.startEvent!==null,n=nF(e.offset,{x:0,y:0})>=this.threshold;if(!t&&!n)return;const{timestamp:r}=Lc();this.history.push({...e.point,timestamp:r});const{onStart:o,onMove:a}=this.handlers;t||(o==null||o(this.lastEvent,e),this.startEvent=this.lastEvent),a==null||a(this.lastEvent,e)});he(this,"onPointerMove",(e,t)=>{if(this.lastEvent=e,this.lastEventInfo=t,iF(e)&&e.buttons===0){this.onPointerUp(e,t);return}BS.update(this.updatePoint,!0)});he(this,"onPointerUp",(e,t)=>{const n=Cp(t,this.history),{onEnd:r,onSessionEnd:o}=this.handlers;o==null||o(e,n),this.end(),!(!r||!this.startEvent)&&(r==null||r(e,n))});if(this.win=Xg(e),gF(e))return;this.handlers=t,n&&(this.threshold=n),e.stopPropagation(),e.preventDefault();const r=QS(e),{timestamp:o}=Lc();this.history=[{...r.point,timestamp:o}];const{onSessionStart:a}=t;a==null||a(e,Cp(r,this.history)),this.removeListeners=tF(Sp(this.win,"pointermove",this.onPointerMove),Sp(this.win,"pointerup",this.onPointerUp),Sp(this.win,"pointercancel",this.onPointerUp))}updateHandlers(e){this.handlers=e}end(){var e;(e=this.removeListeners)==null||e.call(this),zS.update(this.updatePoint)}};function Db(e,t){return{x:e.x-t.x,y:e.y-t.y}}function yF(e){return e[0]}function bF(e){return e[e.length-1]}function Cp(e,t){return{point:e.point,delta:Db(e.point,bF(t)),offset:Db(e.point,yF(t)),velocity:SF(t,.1)}}function wF(e){return e[e.length-1]}var xF=e=>e*1e3;function SF(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=wF(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>xF(t)));)n--;if(!r)return{x:0,y:0};const a=(o.timestamp-r.timestamp)/1e3;if(a===0)return{x:0,y:0};const i={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return i.x===1/0&&(i.x=0),i.y===1/0&&(i.y=0),i}Object.freeze(["base","sm","md","lg","xl","2xl"]);function CF(e){const{userAgent:t,vendor:n}=e,r=/(android)/i.test(t);switch(!0){case/CriOS/.test(t):return"Chrome for iOS";case/Edg\//.test(t):return"Edge";case(r&&/Silk\//.test(t)):return"Silk";case(/Chrome/.test(t)&&/Google Inc/.test(n)):return"Chrome";case/Firefox\/\d+\.\d+$/.test(t):return"Firefox";case r:return"AOSP";case/MSIE|Trident/.test(t):return"IE";case(/Safari/.test(e.userAgent)&&/Apple Computer/.test(t)):return"Safari";case/AppleWebKit/.test(t):return"WebKit";default:return null}}function kF(e){return Ll?CF(window.navigator)===e:!1}function JS(e={}){const{strict:t=!0,errorMessage:n="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:r}=e,o=p.exports.createContext(void 0);o.displayName=r;function a(){var i;const s=p.exports.useContext(o);if(!s&&t){const l=new Error(n);throw l.name="ContextError",(i=Error.captureStackTrace)==null||i.call(Error,l,a),l}return s}return[o.Provider,a,o]}var _F=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,EF=_S(function(e){return _F.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),PF=EF,TF=function(t){return t!=="theme"},qb=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?PF:TF},Lb=function(t,n,r){var o;if(n){var a=n.shouldForwardProp;o=t.__emotion_forwardProp&&a?function(i){return t.__emotion_forwardProp(i)&&a(i)}:a}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},FF=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return IS(n,r,o),v7(function(){return RS(n,r,o)}),null},AF=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,a,i;n!==void 0&&(a=n.label,i=n.target);var s=Lb(t,n,r),l=s||qb(o),u=!l("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push("label:"+a+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,m=1;m<f;m++)d.push(c[m],c[0][m])}var v=DS(function(h,b,y){var g=u&&h.as||o,w="",x=[],k=h;if(h.theme==null){k={};for(var _ in h)k[_]=h[_];k.theme=p.exports.useContext(el)}typeof h.className=="string"?w=c7(b.registered,x,h.className):h.className!=null&&(w=h.className+" ");var E=Gg(d.concat(x),b.registered,k);w+=b.key+"-"+E.name,i!==void 0&&(w+=" "+i);var T=u&&s===void 0?qb(g):l,O={};for(var A in h)u&&A==="as"||T(A)&&(O[A]=h[A]);return O.className=w,O.ref=y,p.exports.createElement(p.exports.Fragment,null,p.exports.createElement(FF,{cache:b,serialized:E,isStringTag:typeof g=="string"}),p.exports.createElement(g,O))});return v.displayName=a!==void 0?a:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=o,v.__emotion_styles=d,v.__emotion_forwardProp=s,Object.defineProperty(v,"toString",{value:function(){return"."+i}}),v.withComponent=function(h,b){return e(h,Qs({},n,b,{shouldForwardProp:Lb(v,b,!0)})).apply(void 0,d)},v}},IF=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Km=AF.bind();IF.forEach(function(e){Km[e]=Km(e)});function Be(e,t={}){let n=!1;function r(){if(!n){n=!0;return}throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?")}function o(...c){r();for(const d of c)t[d]=l(d);return Be(e,t)}function a(...c){for(const d of c)d in t||(t[d]=l(d));return Be(e,t)}function i(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.selector]))}function s(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.className]))}function l(c){const m=`chakra-${(["container","root"].includes(c!=null?c:"")?[e]:[e,c]).filter(Boolean).join("__")}`;return{className:m,selector:`.${m}`,toString:()=>c}}return{parts:o,toPart:l,extend:a,selectors:i,classnames:s,get keys(){return Object.keys(t)},__type:{}}}var RF=Be("accordion").parts("root","container","button","panel").extend("icon"),NF=Be("alert").parts("title","description","container").extend("icon","spinner"),MF=Be("avatar").parts("label","badge","container").extend("excessLabel","group"),OF=Be("breadcrumb").parts("link","item","container").extend("separator");Be("button").parts();var DF=Be("checkbox").parts("control","icon","container").extend("label");Be("progress").parts("track","filledTrack").extend("label");var qF=Be("drawer").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),LF=Be("editable").parts("preview","input","textarea"),BF=Be("form").parts("container","requiredIndicator","helperText"),zF=Be("formError").parts("text","icon"),VF=Be("input").parts("addon","field","element"),$F=Be("list").parts("container","item","icon"),jF=Be("menu").parts("button","list","item").extend("groupTitle","command","divider"),WF=Be("modal").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),HF=Be("numberinput").parts("root","field","stepperGroup","stepper");Be("pininput").parts("field");var UF=Be("popover").parts("content","header","body","footer").extend("popper","arrow","closeButton"),GF=Be("progress").parts("label","filledTrack","track"),KF=Be("radio").parts("container","control","label"),YF=Be("select").parts("field","icon"),XF=Be("slider").parts("container","track","thumb","filledTrack","mark"),ZF=Be("stat").parts("container","label","helpText","number","icon"),QF=Be("switch").parts("container","track","thumb"),JF=Be("table").parts("table","thead","tbody","tr","th","td","tfoot","caption"),eA=Be("tabs").parts("root","tab","tablist","tabpanel","tabpanels","indicator"),tA=Be("tag").parts("container","label","closeButton"),nA=Be("card").parts("container","header","body","footer");function Zo(e,t,n){return Math.min(Math.max(e,n),t)}class rA extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var hs=rA;function e0(e){if(typeof e!="string")throw new hs(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=dA.test(e)?iA(e):e;const n=sA.exec(t);if(n){const i=Array.from(n).slice(1);return[...i.slice(0,3).map(s=>parseInt(ol(s,2),16)),parseInt(ol(i[3]||"f",2),16)/255]}const r=lA.exec(t);if(r){const i=Array.from(r).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,16)),parseInt(i[3]||"ff",16)/255]}const o=uA.exec(t);if(o){const i=Array.from(o).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,10)),parseFloat(i[3]||"1")]}const a=cA.exec(t);if(a){const[i,s,l,u]=Array.from(a).slice(1).map(parseFloat);if(Zo(0,100,s)!==s)throw new hs(e);if(Zo(0,100,l)!==l)throw new hs(e);return[...fA(i,s,l),u||1]}throw new hs(e)}function oA(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}const Bb=e=>parseInt(e.replace(/_/g,""),36),aA="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const n=Bb(t.substring(0,3)),r=Bb(t.substring(3)).toString(16);let o="";for(let a=0;a<6-r.length;a++)o+="0";return e[n]=`${o}${r}`,e},{});function iA(e){const t=e.toLowerCase().trim(),n=aA[oA(t)];if(!n)throw new hs(e);return`#${n}`}const ol=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),sA=new RegExp(`^#${ol("([a-f0-9])",3)}([a-f0-9])?$`,"i"),lA=new RegExp(`^#${ol("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),uA=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${ol(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),cA=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,dA=/^[a-z]+$/i,zb=e=>Math.round(e*255),fA=(e,t,n)=>{let r=n/100;if(t===0)return[r,r,r].map(zb);const o=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*(t/100),i=a*(1-Math.abs(o%2-1));let s=0,l=0,u=0;o>=0&&o<1?(s=a,l=i):o>=1&&o<2?(s=i,l=a):o>=2&&o<3?(l=a,u=i):o>=3&&o<4?(l=i,u=a):o>=4&&o<5?(s=i,u=a):o>=5&&o<6&&(s=a,u=i);const c=r-a/2,d=s+c,f=l+c,m=u+c;return[d,f,m].map(zb)};function pA(e,t,n,r){return`rgba(${Zo(0,255,e).toFixed()}, ${Zo(0,255,t).toFixed()}, ${Zo(0,255,n).toFixed()}, ${parseFloat(Zo(0,1,r).toFixed(3))})`}function mA(e,t){const[n,r,o,a]=e0(e);return pA(n,r,o,a-t)}function hA(e){const[t,n,r,o]=e0(e);let a=i=>{const s=Zo(0,255,i).toString(16);return s.length===1?`0${s}`:s};return`#${a(t)}${a(n)}${a(r)}${o<1?a(Math.round(o*255)):""}`}function gA(e,t,n,r,o){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e}var vA=e=>Object.keys(e).length===0,Wt=(e,t,n)=>{const r=gA(e,`colors.${t}`,t);try{return hA(r),r}catch{return n!=null?n:"#000000"}},yA=e=>{const[t,n,r]=e0(e);return(t*299+n*587+r*114)/1e3},bA=e=>t=>{const n=Wt(t,e);return yA(n)<128?"dark":"light"},wA=e=>t=>bA(e)(t)==="dark",ki=(e,t)=>n=>{const r=Wt(n,e);return mA(r,1-t)};function Vb(e="1rem",t="rgba(255, 255, 255, 0.15)"){return{backgroundImage:`linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,backgroundSize:`${e} ${e}`}}var xA=()=>`#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`;function SA(e){const t=xA();return!e||vA(e)?t:e.string&&e.colors?kA(e.string,e.colors):e.string&&!e.colors?CA(e.string):e.colors&&!e.string?_A(e.colors):t}function CA(e){let t=0;if(e.length===0)return t.toString();for(let r=0;r<e.length;r+=1)t=e.charCodeAt(r)+((t<<5)-t),t=t&t;let n="#";for(let r=0;r<3;r+=1){const o=t>>r*8&255;n+=`00${o.toString(16)}`.substr(-2)}return n}function kA(e,t){let n=0;if(e.length===0)return t[0];for(let r=0;r<e.length;r+=1)n=e.charCodeAt(r)+((n<<5)-n),n=n&n;return n=(n%t.length+t.length)%t.length,t[n]}function _A(e){return e[Math.floor(Math.random()*e.length)]}function ce(e,t){return n=>n.colorMode==="dark"?t:e}function t0(e){const{orientation:t,vertical:n,horizontal:r}=e;return t?t==="vertical"?n:r:{}}function EA(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function eC(e){return EA(e)&&e.reference?e.reference:String(e)}var rf=(e,...t)=>t.map(eC).join(` ${e} `).replace(/calc/g,""),$b=(...e)=>`calc(${rf("+",...e)})`,jb=(...e)=>`calc(${rf("-",...e)})`,Ym=(...e)=>`calc(${rf("*",...e)})`,Wb=(...e)=>`calc(${rf("/",...e)})`,Hb=e=>{const t=eC(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:Ym(t,-1)},Mr=Object.assign(e=>({add:(...t)=>Mr($b(e,...t)),subtract:(...t)=>Mr(jb(e,...t)),multiply:(...t)=>Mr(Ym(e,...t)),divide:(...t)=>Mr(Wb(e,...t)),negate:()=>Mr(Hb(e)),toString:()=>e.toString()}),{add:$b,subtract:jb,multiply:Ym,divide:Wb,negate:Hb});function PA(e){return!Number.isInteger(parseFloat(e.toString()))}function TA(e,t="-"){return e.replace(/\s+/g,t)}function tC(e){const t=TA(e.toString());return t.includes("\\.")?e:PA(e)?t.replace(".","\\."):e}function FA(e,t=""){return[t,tC(e)].filter(Boolean).join("-")}function AA(e,t){return`var(${tC(e)}${t?`, ${t}`:""})`}function IA(e,t=""){return`--${FA(e,t)}`}function St(e,t){const n=IA(e,t==null?void 0:t.prefix);return{variable:n,reference:AA(n,RA(t==null?void 0:t.fallback))}}function RA(e){return typeof e=="string"?e:e==null?void 0:e.reference}var{definePartsStyle:NA,defineMultiStyleConfig:MA}=Ke(RF.keys),OA={borderTopWidth:"1px",borderColor:"inherit",_last:{borderBottomWidth:"1px"}},DA={transitionProperty:"common",transitionDuration:"normal",fontSize:"md",_focusVisible:{boxShadow:"outline"},_hover:{bg:"blackAlpha.50"},_disabled:{opacity:.4,cursor:"not-allowed"},px:"4",py:"2"},qA={pt:"2",px:"4",pb:"5"},LA={fontSize:"1.25em"},BA=NA({container:OA,button:DA,panel:qA,icon:LA}),zA=MA({baseStyle:BA}),{definePartsStyle:Bl,defineMultiStyleConfig:VA}=Ke(NF.keys),pn=qe("alert-fg"),Br=qe("alert-bg"),$A=Bl({container:{bg:Br.reference,px:"4",py:"3"},title:{fontWeight:"bold",lineHeight:"6",marginEnd:"2"},description:{lineHeight:"6"},icon:{color:pn.reference,flexShrink:0,marginEnd:"3",w:"5",h:"6"},spinner:{color:pn.reference,flexShrink:0,marginEnd:"3",w:"5",h:"5"}});function n0(e){const{theme:t,colorScheme:n}=e,r=ki(`${n}.200`,.16)(t);return{light:`colors.${n}.100`,dark:r}}var jA=Bl(e=>{const{colorScheme:t}=e,n=n0(e);return{container:{[pn.variable]:`colors.${t}.500`,[Br.variable]:n.light,_dark:{[pn.variable]:`colors.${t}.200`,[Br.variable]:n.dark}}}}),WA=Bl(e=>{const{colorScheme:t}=e,n=n0(e);return{container:{[pn.variable]:`colors.${t}.500`,[Br.variable]:n.light,_dark:{[pn.variable]:`colors.${t}.200`,[Br.variable]:n.dark},paddingStart:"3",borderStartWidth:"4px",borderStartColor:pn.reference}}}),HA=Bl(e=>{const{colorScheme:t}=e,n=n0(e);return{container:{[pn.variable]:`colors.${t}.500`,[Br.variable]:n.light,_dark:{[pn.variable]:`colors.${t}.200`,[Br.variable]:n.dark},pt:"2",borderTopWidth:"4px",borderTopColor:pn.reference}}}),UA=Bl(e=>{const{colorScheme:t}=e;return{container:{[pn.variable]:"colors.white",[Br.variable]:`colors.${t}.500`,_dark:{[pn.variable]:"colors.gray.900",[Br.variable]:`colors.${t}.200`},color:pn.reference}}}),GA={subtle:jA,"left-accent":WA,"top-accent":HA,solid:UA},KA=VA({baseStyle:$A,variants:GA,defaultProps:{variant:"subtle",colorScheme:"blue"}}),nC={px:"1px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},YA={max:"max-content",min:"min-content",full:"100%","3xs":"14rem","2xs":"16rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem","8xl":"90rem",prose:"60ch"},XA={sm:"640px",md:"768px",lg:"1024px",xl:"1280px"},ZA={...nC,...YA,container:XA},rC=ZA,QA=e=>typeof e=="function";function Ut(e,...t){return QA(e)?e(...t):e}var{definePartsStyle:oC,defineMultiStyleConfig:JA}=Ke(MF.keys),ri=qe("avatar-border-color"),kp=qe("avatar-bg"),eI={borderRadius:"full",border:"0.2em solid",[ri.variable]:"white",_dark:{[ri.variable]:"colors.gray.800"},borderColor:ri.reference},tI={[kp.variable]:"colors.gray.200",_dark:{[kp.variable]:"colors.whiteAlpha.400"},bgColor:kp.reference},Ub=qe("avatar-background"),nI=e=>{const{name:t,theme:n}=e,r=t?SA({string:t}):"colors.gray.400",o=wA(r)(n);let a="white";return o||(a="gray.800"),{bg:Ub.reference,"&:not([data-loaded])":{[Ub.variable]:r},color:a,[ri.variable]:"colors.white",_dark:{[ri.variable]:"colors.gray.800"},borderColor:ri.reference,verticalAlign:"top"}},rI=oC(e=>({badge:Ut(eI,e),excessLabel:Ut(tI,e),container:Ut(nI,e)}));function Jr(e){const t=e!=="100%"?rC[e]:void 0;return oC({container:{width:e,height:e,fontSize:`calc(${t!=null?t:e} / 2.5)`},excessLabel:{width:e,height:e},label:{fontSize:`calc(${t!=null?t:e} / 2.5)`,lineHeight:e!=="100%"?t!=null?t:e:void 0}})}var oI={"2xs":Jr(4),xs:Jr(6),sm:Jr(8),md:Jr(12),lg:Jr(16),xl:Jr(24),"2xl":Jr(32),full:Jr("100%")},aI=JA({baseStyle:rI,sizes:oI,defaultProps:{size:"md"}}),iI={px:1,textTransform:"uppercase",fontSize:"xs",borderRadius:"sm",fontWeight:"bold"},oi=qe("badge-bg"),br=qe("badge-color"),sI=e=>{const{colorScheme:t,theme:n}=e,r=ki(`${t}.500`,.6)(n);return{[oi.variable]:`colors.${t}.500`,[br.variable]:"colors.white",_dark:{[oi.variable]:r,[br.variable]:"colors.whiteAlpha.800"},bg:oi.reference,color:br.reference}},lI=e=>{const{colorScheme:t,theme:n}=e,r=ki(`${t}.200`,.16)(n);return{[oi.variable]:`colors.${t}.100`,[br.variable]:`colors.${t}.800`,_dark:{[oi.variable]:r,[br.variable]:`colors.${t}.200`},bg:oi.reference,color:br.reference}},uI=e=>{const{colorScheme:t,theme:n}=e,r=ki(`${t}.200`,.8)(n);return{[br.variable]:`colors.${t}.500`,_dark:{[br.variable]:r},color:br.reference,boxShadow:`inset 0 0 0px 1px ${br.reference}`}},cI={solid:sI,subtle:lI,outline:uI},Es={baseStyle:iI,variants:cI,defaultProps:{variant:"subtle",colorScheme:"gray"}},{defineMultiStyleConfig:dI,definePartsStyle:fI}=Ke(OF.keys),pI={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},mI=fI({link:pI}),hI=dI({baseStyle:mI}),gI={lineHeight:"1.2",borderRadius:"md",fontWeight:"semibold",transitionProperty:"common",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{_disabled:{bg:"initial"}}},aC=e=>{const{colorScheme:t,theme:n}=e;if(t==="gray")return{color:ce("inherit","whiteAlpha.900")(e),_hover:{bg:ce("gray.100","whiteAlpha.200")(e)},_active:{bg:ce("gray.200","whiteAlpha.300")(e)}};const r=ki(`${t}.200`,.12)(n),o=ki(`${t}.200`,.24)(n);return{color:ce(`${t}.600`,`${t}.200`)(e),bg:"transparent",_hover:{bg:ce(`${t}.50`,r)(e)},_active:{bg:ce(`${t}.100`,o)(e)}}},vI=e=>{const{colorScheme:t}=e,n=ce("gray.200","whiteAlpha.300")(e);return{border:"1px solid",borderColor:t==="gray"?n:"currentColor",".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":{marginEnd:"-1px"},".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":{marginBottom:"-1px"},...Ut(aC,e)}},yI={yellow:{bg:"yellow.400",color:"black",hoverBg:"yellow.500",activeBg:"yellow.600"},cyan:{bg:"cyan.400",color:"black",hoverBg:"cyan.500",activeBg:"cyan.600"}},bI=e=>{var s;const{colorScheme:t}=e;if(t==="gray"){const l=ce("gray.100","whiteAlpha.200")(e);return{bg:l,_hover:{bg:ce("gray.200","whiteAlpha.300")(e),_disabled:{bg:l}},_active:{bg:ce("gray.300","whiteAlpha.400")(e)}}}const{bg:n=`${t}.500`,color:r="white",hoverBg:o=`${t}.600`,activeBg:a=`${t}.700`}=(s=yI[t])!=null?s:{},i=ce(n,`${t}.200`)(e);return{bg:i,color:ce(r,"gray.800")(e),_hover:{bg:ce(o,`${t}.300`)(e),_disabled:{bg:i}},_active:{bg:ce(a,`${t}.400`)(e)}}},wI=e=>{const{colorScheme:t}=e;return{padding:0,height:"auto",lineHeight:"normal",verticalAlign:"baseline",color:ce(`${t}.500`,`${t}.200`)(e),_hover:{textDecoration:"underline",_disabled:{textDecoration:"none"}},_active:{color:ce(`${t}.700`,`${t}.500`)(e)}}},xI={bg:"none",color:"inherit",display:"inline",lineHeight:"inherit",m:"0",p:"0"},SI={ghost:aC,outline:vI,solid:bI,link:wI,unstyled:xI},CI={lg:{h:"12",minW:"12",fontSize:"lg",px:"6"},md:{h:"10",minW:"10",fontSize:"md",px:"4"},sm:{h:"8",minW:"8",fontSize:"sm",px:"3"},xs:{h:"6",minW:"6",fontSize:"xs",px:"2"}},kI={baseStyle:gI,variants:SI,sizes:CI,defaultProps:{variant:"solid",size:"md",colorScheme:"gray"}},{definePartsStyle:na,defineMultiStyleConfig:_I}=Ke(nA.keys),Bc=qe("card-bg"),ai=qe("card-padding"),EI=na({container:{[Bc.variable]:"chakra-body-bg",backgroundColor:Bc.reference,color:"chakra-body-text"},body:{padding:ai.reference,flex:"1 1 0%"},header:{padding:ai.reference},footer:{padding:ai.reference}}),PI={sm:na({container:{borderRadius:"base",[ai.variable]:"space.3"}}),md:na({container:{borderRadius:"md",[ai.variable]:"space.5"}}),lg:na({container:{borderRadius:"xl",[ai.variable]:"space.7"}})},TI={elevated:na({container:{boxShadow:"base",_dark:{[Bc.variable]:"colors.gray.700"}}}),outline:na({container:{borderWidth:"1px",borderColor:"chakra-border-color"}}),filled:na({container:{[Bc.variable]:"colors.chakra-subtle-bg"}}),unstyled:{body:{padding:0},header:{padding:0},footer:{padding:0}}},FI=_I({baseStyle:EI,variants:TI,sizes:PI,defaultProps:{variant:"elevated",size:"md"}}),{definePartsStyle:lc,defineMultiStyleConfig:AI}=Ke(DF.keys),Ps=qe("checkbox-size"),II=e=>{const{colorScheme:t}=e;return{w:Ps.reference,h:Ps.reference,transitionProperty:"box-shadow",transitionDuration:"normal",border:"2px solid",borderRadius:"sm",borderColor:"inherit",color:"white",_checked:{bg:ce(`${t}.500`,`${t}.200`)(e),borderColor:ce(`${t}.500`,`${t}.200`)(e),color:ce("white","gray.900")(e),_hover:{bg:ce(`${t}.600`,`${t}.300`)(e),borderColor:ce(`${t}.600`,`${t}.300`)(e)},_disabled:{borderColor:ce("gray.200","transparent")(e),bg:ce("gray.200","whiteAlpha.300")(e),color:ce("gray.500","whiteAlpha.500")(e)}},_indeterminate:{bg:ce(`${t}.500`,`${t}.200`)(e),borderColor:ce(`${t}.500`,`${t}.200`)(e),color:ce("white","gray.900")(e)},_disabled:{bg:ce("gray.100","whiteAlpha.100")(e),borderColor:ce("gray.100","transparent")(e)},_focusVisible:{boxShadow:"outline"},_invalid:{borderColor:ce("red.500","red.300")(e)}}},RI={_disabled:{cursor:"not-allowed"}},NI={userSelect:"none",_disabled:{opacity:.4}},MI={transitionProperty:"transform",transitionDuration:"normal"},OI=lc(e=>({icon:MI,container:RI,control:Ut(II,e),label:NI})),DI={sm:lc({control:{[Ps.variable]:"sizes.3"},label:{fontSize:"sm"},icon:{fontSize:"3xs"}}),md:lc({control:{[Ps.variable]:"sizes.4"},label:{fontSize:"md"},icon:{fontSize:"2xs"}}),lg:lc({control:{[Ps.variable]:"sizes.5"},label:{fontSize:"lg"},icon:{fontSize:"2xs"}})},zc=AI({baseStyle:OI,sizes:DI,defaultProps:{size:"md",colorScheme:"blue"}}),Ts=St("close-button-size"),Ji=St("close-button-bg"),qI={w:[Ts.reference],h:[Ts.reference],borderRadius:"md",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{[Ji.variable]:"colors.blackAlpha.100",_dark:{[Ji.variable]:"colors.whiteAlpha.100"}},_active:{[Ji.variable]:"colors.blackAlpha.200",_dark:{[Ji.variable]:"colors.whiteAlpha.200"}},_focusVisible:{boxShadow:"outline"},bg:Ji.reference},LI={lg:{[Ts.variable]:"sizes.10",fontSize:"md"},md:{[Ts.variable]:"sizes.8",fontSize:"xs"},sm:{[Ts.variable]:"sizes.6",fontSize:"2xs"}},BI={baseStyle:qI,sizes:LI,defaultProps:{size:"md"}},{variants:zI,defaultProps:VI}=Es,$I={fontFamily:"mono",fontSize:"sm",px:"0.2em",borderRadius:"sm"},jI={baseStyle:$I,variants:zI,defaultProps:VI},WI={w:"100%",mx:"auto",maxW:"prose",px:"4"},HI={baseStyle:WI},UI={opacity:.6,borderColor:"inherit"},GI={borderStyle:"solid"},KI={borderStyle:"dashed"},YI={solid:GI,dashed:KI},XI={baseStyle:UI,variants:YI,defaultProps:{variant:"solid"}},{definePartsStyle:Xm,defineMultiStyleConfig:ZI}=Ke(qF.keys),_p=qe("drawer-bg"),Ep=qe("drawer-box-shadow");function Fa(e){return Xm(e==="full"?{dialog:{maxW:"100vw",h:"100vh"}}:{dialog:{maxW:e}})}var QI={bg:"blackAlpha.600",zIndex:"overlay"},JI={display:"flex",zIndex:"modal",justifyContent:"center"},eR=e=>{const{isFullHeight:t}=e;return{...t&&{height:"100vh"},zIndex:"modal",maxH:"100vh",color:"inherit",[_p.variable]:"colors.white",[Ep.variable]:"shadows.lg",_dark:{[_p.variable]:"colors.gray.700",[Ep.variable]:"shadows.dark-lg"},bg:_p.reference,boxShadow:Ep.reference}},tR={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},nR={position:"absolute",top:"2",insetEnd:"3"},rR={px:"6",py:"2",flex:"1",overflow:"auto"},oR={px:"6",py:"4"},aR=Xm(e=>({overlay:QI,dialogContainer:JI,dialog:Ut(eR,e),header:tR,closeButton:nR,body:rR,footer:oR})),iR={xs:Fa("xs"),sm:Fa("md"),md:Fa("lg"),lg:Fa("2xl"),xl:Fa("4xl"),full:Fa("full")},sR=ZI({baseStyle:aR,sizes:iR,defaultProps:{size:"xs"}}),{definePartsStyle:lR,defineMultiStyleConfig:uR}=Ke(LF.keys),cR={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal"},dR={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},fR={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},pR=lR({preview:cR,input:dR,textarea:fR}),mR=uR({baseStyle:pR}),{definePartsStyle:hR,defineMultiStyleConfig:gR}=Ke(BF.keys),ii=qe("form-control-color"),vR={marginStart:"1",[ii.variable]:"colors.red.500",_dark:{[ii.variable]:"colors.red.300"},color:ii.reference},yR={mt:"2",[ii.variable]:"colors.gray.600",_dark:{[ii.variable]:"colors.whiteAlpha.600"},color:ii.reference,lineHeight:"normal",fontSize:"sm"},bR=hR({container:{width:"100%",position:"relative"},requiredIndicator:vR,helperText:yR}),wR=gR({baseStyle:bR}),{definePartsStyle:xR,defineMultiStyleConfig:SR}=Ke(zF.keys),si=qe("form-error-color"),CR={[si.variable]:"colors.red.500",_dark:{[si.variable]:"colors.red.300"},color:si.reference,mt:"2",fontSize:"sm",lineHeight:"normal"},kR={marginEnd:"0.5em",[si.variable]:"colors.red.500",_dark:{[si.variable]:"colors.red.300"},color:si.reference},_R=xR({text:CR,icon:kR}),ER=SR({baseStyle:_R}),PR={fontSize:"md",marginEnd:"3",mb:"2",fontWeight:"medium",transitionProperty:"common",transitionDuration:"normal",opacity:1,_disabled:{opacity:.4}},TR={baseStyle:PR},FR={fontFamily:"heading",fontWeight:"bold"},AR={"4xl":{fontSize:["6xl",null,"7xl"],lineHeight:1},"3xl":{fontSize:["5xl",null,"6xl"],lineHeight:1},"2xl":{fontSize:["4xl",null,"5xl"],lineHeight:[1.2,null,1]},xl:{fontSize:["3xl",null,"4xl"],lineHeight:[1.33,null,1.2]},lg:{fontSize:["2xl",null,"3xl"],lineHeight:[1.33,null,1.2]},md:{fontSize:"xl",lineHeight:1.2},sm:{fontSize:"md",lineHeight:1.2},xs:{fontSize:"sm",lineHeight:1.2}},IR={baseStyle:FR,sizes:AR,defaultProps:{size:"xl"}},{definePartsStyle:Or,defineMultiStyleConfig:RR}=Ke(VF.keys),NR=Or({field:{width:"100%",minWidth:0,outline:0,position:"relative",appearance:"none",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed"}}}),eo={lg:{fontSize:"lg",px:"4",h:"12",borderRadius:"md"},md:{fontSize:"md",px:"4",h:"10",borderRadius:"md"},sm:{fontSize:"sm",px:"3",h:"8",borderRadius:"sm"},xs:{fontSize:"xs",px:"2",h:"6",borderRadius:"sm"}},MR={lg:Or({field:eo.lg,addon:eo.lg}),md:Or({field:eo.md,addon:eo.md}),sm:Or({field:eo.sm,addon:eo.sm}),xs:Or({field:eo.xs,addon:eo.xs})};function r0(e){const{focusBorderColor:t,errorBorderColor:n}=e;return{focusBorderColor:t||ce("blue.500","blue.300")(e),errorBorderColor:n||ce("red.500","red.300")(e)}}var OR=Or(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=r0(e);return{field:{border:"1px solid",borderColor:"inherit",bg:"inherit",_hover:{borderColor:ce("gray.300","whiteAlpha.400")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Wt(t,r),boxShadow:`0 0 0 1px ${Wt(t,r)}`},_focusVisible:{zIndex:1,borderColor:Wt(t,n),boxShadow:`0 0 0 1px ${Wt(t,n)}`}},addon:{border:"1px solid",borderColor:ce("inherit","whiteAlpha.50")(e),bg:ce("gray.100","whiteAlpha.300")(e)}}}),DR=Or(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=r0(e);return{field:{border:"2px solid",borderColor:"transparent",bg:ce("gray.100","whiteAlpha.50")(e),_hover:{bg:ce("gray.200","whiteAlpha.100")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Wt(t,r)},_focusVisible:{bg:"transparent",borderColor:Wt(t,n)}},addon:{border:"2px solid",borderColor:"transparent",bg:ce("gray.100","whiteAlpha.50")(e)}}}),qR=Or(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=r0(e);return{field:{borderBottom:"1px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent",_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:Wt(t,r),boxShadow:`0px 1px 0px 0px ${Wt(t,r)}`},_focusVisible:{borderColor:Wt(t,n),boxShadow:`0px 1px 0px 0px ${Wt(t,n)}`}},addon:{borderBottom:"2px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent"}}}),LR=Or({field:{bg:"transparent",px:"0",height:"auto"},addon:{bg:"transparent",px:"0",height:"auto"}}),BR={outline:OR,filled:DR,flushed:qR,unstyled:LR},De=RR({baseStyle:NR,sizes:MR,variants:BR,defaultProps:{size:"md",variant:"outline"}}),Pp=qe("kbd-bg"),zR={[Pp.variable]:"colors.gray.100",_dark:{[Pp.variable]:"colors.whiteAlpha.100"},bg:Pp.reference,borderRadius:"md",borderWidth:"1px",borderBottomWidth:"3px",fontSize:"0.8em",fontWeight:"bold",lineHeight:"normal",px:"0.4em",whiteSpace:"nowrap"},VR={baseStyle:zR},$R={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},jR={baseStyle:$R},{defineMultiStyleConfig:WR,definePartsStyle:HR}=Ke($F.keys),UR={marginEnd:"2",display:"inline",verticalAlign:"text-bottom"},GR=HR({icon:UR}),KR=WR({baseStyle:GR}),{defineMultiStyleConfig:YR,definePartsStyle:XR}=Ke(jF.keys),pr=qe("menu-bg"),Tp=qe("menu-shadow"),ZR={[pr.variable]:"#fff",[Tp.variable]:"shadows.sm",_dark:{[pr.variable]:"colors.gray.700",[Tp.variable]:"shadows.dark-lg"},color:"inherit",minW:"3xs",py:"2",zIndex:1,borderRadius:"md",borderWidth:"1px",bg:pr.reference,boxShadow:Tp.reference},QR={py:"1.5",px:"3",transitionProperty:"background",transitionDuration:"ultra-fast",transitionTimingFunction:"ease-in",_focus:{[pr.variable]:"colors.gray.100",_dark:{[pr.variable]:"colors.whiteAlpha.100"}},_active:{[pr.variable]:"colors.gray.200",_dark:{[pr.variable]:"colors.whiteAlpha.200"}},_expanded:{[pr.variable]:"colors.gray.100",_dark:{[pr.variable]:"colors.whiteAlpha.100"}},_disabled:{opacity:.4,cursor:"not-allowed"},bg:pr.reference},JR={mx:4,my:2,fontWeight:"semibold",fontSize:"sm"},eN={opacity:.6},tN={border:0,borderBottom:"1px solid",borderColor:"inherit",my:"2",opacity:.6},nN={transitionProperty:"common",transitionDuration:"normal"},rN=XR({button:nN,list:ZR,item:QR,groupTitle:JR,command:eN,divider:tN}),oN=YR({baseStyle:rN}),{defineMultiStyleConfig:aN,definePartsStyle:Zm}=Ke(WF.keys),iN={bg:"blackAlpha.600",zIndex:"modal"},sN=e=>{const{isCentered:t,scrollBehavior:n}=e;return{display:"flex",zIndex:"modal",justifyContent:"center",alignItems:t?"center":"flex-start",overflow:n==="inside"?"hidden":"auto",overscrollBehaviorY:"none"}},lN=e=>{const{scrollBehavior:t}=e;return{borderRadius:"md",bg:ce("white","gray.700")(e),color:"inherit",my:"16",zIndex:"modal",maxH:t==="inside"?"calc(100% - 7.5rem)":void 0,boxShadow:ce("lg","dark-lg")(e)}},uN={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},cN={position:"absolute",top:"2",insetEnd:"3"},dN=e=>{const{scrollBehavior:t}=e;return{px:"6",py:"2",flex:"1",overflow:t==="inside"?"auto":void 0}},fN={px:"6",py:"4"},pN=Zm(e=>({overlay:iN,dialogContainer:Ut(sN,e),dialog:Ut(lN,e),header:uN,closeButton:cN,body:Ut(dN,e),footer:fN}));function jn(e){return Zm(e==="full"?{dialog:{maxW:"100vw",minH:"$100vh",my:"0",borderRadius:"0"}}:{dialog:{maxW:e}})}var mN={xs:jn("xs"),sm:jn("sm"),md:jn("md"),lg:jn("lg"),xl:jn("xl"),"2xl":jn("2xl"),"3xl":jn("3xl"),"4xl":jn("4xl"),"5xl":jn("5xl"),"6xl":jn("6xl"),full:jn("full")},hN=aN({baseStyle:pN,sizes:mN,defaultProps:{size:"md"}}),gN={letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeights:{normal:"normal",none:1,shorter:1.25,short:1.375,base:1.5,tall:1.625,taller:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},fonts:{heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'},fontSizes:{"3xs":"0.45rem","2xs":"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"}},iC=gN,{defineMultiStyleConfig:vN,definePartsStyle:sC}=Ke(HF.keys),o0=St("number-input-stepper-width"),lC=St("number-input-input-padding"),yN=Mr(o0).add("0.5rem").toString(),Fp=St("number-input-bg"),Ap=St("number-input-color"),Ip=St("number-input-border-color"),bN={[o0.variable]:"sizes.6",[lC.variable]:yN},wN=e=>{var n;var t;return(n=(t=Ut(De.baseStyle,e))==null?void 0:t.field)!=null?n:{}},xN={width:o0.reference},SN={borderStart:"1px solid",borderStartColor:Ip.reference,color:Ap.reference,bg:Fp.reference,[Ap.variable]:"colors.chakra-body-text",[Ip.variable]:"colors.chakra-border-color",_dark:{[Ap.variable]:"colors.whiteAlpha.800",[Ip.variable]:"colors.whiteAlpha.300"},_active:{[Fp.variable]:"colors.gray.200",_dark:{[Fp.variable]:"colors.whiteAlpha.300"}},_disabled:{opacity:.4,cursor:"not-allowed"}},CN=sC(e=>{var t;return{root:bN,field:(t=Ut(wN,e))!=null?t:{},stepperGroup:xN,stepper:SN}});function ku(e){var s;var t,n;const r=(t=De.sizes)==null?void 0:t[e],o={lg:"md",md:"md",sm:"sm",xs:"sm"},a=(s=(n=r.field)==null?void 0:n.fontSize)!=null?s:"md",i=iC.fontSizes[a];return sC({field:{...r.field,paddingInlineEnd:lC.reference,verticalAlign:"top"},stepper:{fontSize:Mr(i).multiply(.75).toString(),_first:{borderTopEndRadius:o[e]},_last:{borderBottomEndRadius:o[e],mt:"-1px",borderTopWidth:1}}})}var kN={xs:ku("xs"),sm:ku("sm"),md:ku("md"),lg:ku("lg")},_N=vN({baseStyle:CN,sizes:kN,variants:De.variants,defaultProps:De.defaultProps}),Gb,EN={...(Gb=De.baseStyle)==null?void 0:Gb.field,textAlign:"center"},PN={lg:{fontSize:"lg",w:12,h:12,borderRadius:"md"},md:{fontSize:"md",w:10,h:10,borderRadius:"md"},sm:{fontSize:"sm",w:8,h:8,borderRadius:"sm"},xs:{fontSize:"xs",w:6,h:6,borderRadius:"sm"}},Kb,_2,TN={outline:e=>{var r;var t,n;return(r=(n=Ut((t=De.variants)==null?void 0:t.outline,e))==null?void 0:n.field)!=null?r:{}},flushed:e=>{var r;var t,n;return(r=(n=Ut((t=De.variants)==null?void 0:t.flushed,e))==null?void 0:n.field)!=null?r:{}},filled:e=>{var r;var t,n;return(r=(n=Ut((t=De.variants)==null?void 0:t.filled,e))==null?void 0:n.field)!=null?r:{}},unstyled:(_2=(Kb=De.variants)==null?void 0:Kb.unstyled.field)!=null?_2:{}},FN={baseStyle:EN,sizes:PN,variants:TN,defaultProps:De.defaultProps},{defineMultiStyleConfig:AN,definePartsStyle:IN}=Ke(UF.keys),_u=St("popper-bg"),RN=St("popper-arrow-bg"),Yb=St("popper-arrow-shadow-color"),NN={zIndex:10},MN={[_u.variable]:"colors.white",bg:_u.reference,[RN.variable]:_u.reference,[Yb.variable]:"colors.gray.200",_dark:{[_u.variable]:"colors.gray.700",[Yb.variable]:"colors.whiteAlpha.300"},width:"xs",border:"1px solid",borderColor:"inherit",borderRadius:"md",boxShadow:"sm",zIndex:"inherit",_focusVisible:{outline:0,boxShadow:"outline"}},ON={px:3,py:2,borderBottomWidth:"1px"},DN={px:3,py:2},qN={px:3,py:2,borderTopWidth:"1px"},LN={position:"absolute",borderRadius:"md",top:1,insetEnd:2,padding:2},BN=IN({popper:NN,content:MN,header:ON,body:DN,footer:qN,closeButton:LN}),zN=AN({baseStyle:BN}),{defineMultiStyleConfig:VN,definePartsStyle:gs}=Ke(GF.keys),$N=e=>{const{colorScheme:t,theme:n,isIndeterminate:r,hasStripe:o}=e,a=ce(Vb(),Vb("1rem","rgba(0,0,0,0.1)"))(e),i=ce(`${t}.500`,`${t}.200`)(e),s=`linear-gradient(
    to right,
    transparent 0%,
    ${Wt(n,i)} 50%,
    transparent 100%
  )`;return{...!r&&o&&a,...r?{bgImage:s}:{bgColor:i}}},jN={lineHeight:"1",fontSize:"0.25em",fontWeight:"bold",color:"white"},WN=e=>({bg:ce("gray.100","whiteAlpha.300")(e)}),HN=e=>({transitionProperty:"common",transitionDuration:"slow",...$N(e)}),UN=gs(e=>({label:jN,filledTrack:HN(e),track:WN(e)})),GN={xs:gs({track:{h:"1"}}),sm:gs({track:{h:"2"}}),md:gs({track:{h:"3"}}),lg:gs({track:{h:"4"}})},KN=VN({sizes:GN,baseStyle:UN,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:YN,definePartsStyle:uc}=Ke(KF.keys),XN=e=>{var t;const n=(t=Ut(zc.baseStyle,e))==null?void 0:t.control;return{...n,borderRadius:"full",_checked:{...n==null?void 0:n._checked,_before:{content:'""',display:"inline-block",pos:"relative",w:"50%",h:"50%",borderRadius:"50%",bg:"currentColor"}}}},ZN=uc(e=>{var t,n,r,o;return{label:(n=(t=zc).baseStyle)==null?void 0:n.call(t,e).label,container:(o=(r=zc).baseStyle)==null?void 0:o.call(r,e).container,control:XN(e)}}),QN={md:uc({control:{w:"4",h:"4"},label:{fontSize:"md"}}),lg:uc({control:{w:"5",h:"5"},label:{fontSize:"lg"}}),sm:uc({control:{width:"3",height:"3"},label:{fontSize:"sm"}})},JN=YN({baseStyle:ZN,sizes:QN,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:eM,definePartsStyle:tM}=Ke(YF.keys),Eu=qe("select-bg"),Xb,nM={...(Xb=De.baseStyle)==null?void 0:Xb.field,appearance:"none",paddingBottom:"1px",lineHeight:"normal",bg:Eu.reference,[Eu.variable]:"colors.white",_dark:{[Eu.variable]:"colors.gray.700"},"> option, > optgroup":{bg:Eu.reference}},rM={width:"6",height:"100%",insetEnd:"2",position:"relative",color:"currentColor",fontSize:"xl",_disabled:{opacity:.5}},oM=tM({field:nM,icon:rM}),Pu={paddingInlineEnd:"8"},Zb,Qb,Jb,e1,t1,n1,r1,o1,aM={lg:{...(Zb=De.sizes)==null?void 0:Zb.lg,field:{...(Qb=De.sizes)==null?void 0:Qb.lg.field,...Pu}},md:{...(Jb=De.sizes)==null?void 0:Jb.md,field:{...(e1=De.sizes)==null?void 0:e1.md.field,...Pu}},sm:{...(t1=De.sizes)==null?void 0:t1.sm,field:{...(n1=De.sizes)==null?void 0:n1.sm.field,...Pu}},xs:{...(r1=De.sizes)==null?void 0:r1.xs,field:{...(o1=De.sizes)==null?void 0:o1.xs.field,...Pu},icon:{insetEnd:"1"}}},iM=eM({baseStyle:oM,sizes:aM,variants:De.variants,defaultProps:De.defaultProps}),Rp=qe("skeleton-start-color"),Np=qe("skeleton-end-color"),sM={[Rp.variable]:"colors.gray.100",[Np.variable]:"colors.gray.400",_dark:{[Rp.variable]:"colors.gray.800",[Np.variable]:"colors.gray.600"},background:Rp.reference,borderColor:Np.reference,opacity:.7,borderRadius:"sm"},lM={baseStyle:sM},Mp=qe("skip-link-bg"),uM={borderRadius:"md",fontWeight:"semibold",_focusVisible:{boxShadow:"outline",padding:"4",position:"fixed",top:"6",insetStart:"6",[Mp.variable]:"colors.white",_dark:{[Mp.variable]:"colors.gray.700"},bg:Mp.reference}},cM={baseStyle:uM},{defineMultiStyleConfig:dM,definePartsStyle:of}=Ke(XF.keys),al=qe("slider-thumb-size"),il=qe("slider-track-size"),uo=qe("slider-bg"),fM=e=>{const{orientation:t}=e;return{display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"},...t0({orientation:t,vertical:{h:"100%"},horizontal:{w:"100%"}})}},pM=e=>({...t0({orientation:e.orientation,horizontal:{h:il.reference},vertical:{w:il.reference}}),overflow:"hidden",borderRadius:"sm",[uo.variable]:"colors.gray.200",_dark:{[uo.variable]:"colors.whiteAlpha.200"},_disabled:{[uo.variable]:"colors.gray.300",_dark:{[uo.variable]:"colors.whiteAlpha.300"}},bg:uo.reference}),mM=e=>{const{orientation:t}=e;return{...t0({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",_active:{transform:"translateX(-50%) scale(1.15)"}},horizontal:{top:"50%",transform:"translateY(-50%)",_active:{transform:"translateY(-50%) scale(1.15)"}}}),w:al.reference,h:al.reference,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",outline:0,zIndex:1,borderRadius:"full",bg:"white",boxShadow:"base",border:"1px solid",borderColor:"transparent",transitionProperty:"transform",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{bg:"gray.300"}}},hM=e=>{const{colorScheme:t}=e;return{width:"inherit",height:"inherit",[uo.variable]:`colors.${t}.500`,_dark:{[uo.variable]:`colors.${t}.200`},bg:uo.reference}},gM=of(e=>({container:fM(e),track:pM(e),thumb:mM(e),filledTrack:hM(e)})),vM=of({container:{[al.variable]:"sizes.4",[il.variable]:"sizes.1"}}),yM=of({container:{[al.variable]:"sizes.3.5",[il.variable]:"sizes.1"}}),bM=of({container:{[al.variable]:"sizes.2.5",[il.variable]:"sizes.0.5"}}),wM={lg:vM,md:yM,sm:bM},xM=dM({baseStyle:gM,sizes:wM,defaultProps:{size:"md",colorScheme:"blue"}}),Yo=St("spinner-size"),SM={width:[Yo.reference],height:[Yo.reference]},CM={xs:{[Yo.variable]:"sizes.3"},sm:{[Yo.variable]:"sizes.4"},md:{[Yo.variable]:"sizes.6"},lg:{[Yo.variable]:"sizes.8"},xl:{[Yo.variable]:"sizes.12"}},kM={baseStyle:SM,sizes:CM,defaultProps:{size:"md"}},{defineMultiStyleConfig:_M,definePartsStyle:uC}=Ke(ZF.keys),EM={fontWeight:"medium"},PM={opacity:.8,marginBottom:"2"},TM={verticalAlign:"baseline",fontWeight:"semibold"},FM={marginEnd:1,w:"3.5",h:"3.5",verticalAlign:"middle"},AM=uC({container:{},label:EM,helpText:PM,number:TM,icon:FM}),IM={md:uC({label:{fontSize:"sm"},helpText:{fontSize:"sm"},number:{fontSize:"2xl"}})},RM=_M({baseStyle:AM,sizes:IM,defaultProps:{size:"md"}}),{defineMultiStyleConfig:NM,definePartsStyle:cc}=Ke(QF.keys),Fs=St("switch-track-width"),ra=St("switch-track-height"),Op=St("switch-track-diff"),MM=Mr.subtract(Fs,ra),Qm=St("switch-thumb-x"),es=St("switch-bg"),OM=e=>{const{colorScheme:t}=e;return{borderRadius:"full",p:"0.5",width:[Fs.reference],height:[ra.reference],transitionProperty:"common",transitionDuration:"fast",[es.variable]:"colors.gray.300",_dark:{[es.variable]:"colors.whiteAlpha.400"},_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed"},_checked:{[es.variable]:`colors.${t}.500`,_dark:{[es.variable]:`colors.${t}.200`}},bg:es.reference}},DM={bg:"white",transitionProperty:"transform",transitionDuration:"normal",borderRadius:"inherit",width:[ra.reference],height:[ra.reference],_checked:{transform:`translateX(${Qm.reference})`}},qM=cc(e=>({container:{[Op.variable]:MM,[Qm.variable]:Op.reference,_rtl:{[Qm.variable]:Mr(Op).negate().toString()}},track:OM(e),thumb:DM})),LM={sm:cc({container:{[Fs.variable]:"1.375rem",[ra.variable]:"sizes.3"}}),md:cc({container:{[Fs.variable]:"1.875rem",[ra.variable]:"sizes.4"}}),lg:cc({container:{[Fs.variable]:"2.875rem",[ra.variable]:"sizes.6"}})},BM=NM({baseStyle:qM,sizes:LM,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:zM,definePartsStyle:li}=Ke(JF.keys),VM=li({table:{fontVariantNumeric:"lining-nums tabular-nums",borderCollapse:"collapse",width:"full"},th:{fontFamily:"heading",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"wider",textAlign:"start"},td:{textAlign:"start"},caption:{mt:4,fontFamily:"heading",textAlign:"center",fontWeight:"medium"}}),Vc={"&[data-is-numeric=true]":{textAlign:"end"}},$M=li(e=>{const{colorScheme:t}=e;return{th:{color:ce("gray.600","gray.400")(e),borderBottom:"1px",borderColor:ce(`${t}.100`,`${t}.700`)(e),...Vc},td:{borderBottom:"1px",borderColor:ce(`${t}.100`,`${t}.700`)(e),...Vc},caption:{color:ce("gray.600","gray.100")(e)},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),jM=li(e=>{const{colorScheme:t}=e;return{th:{color:ce("gray.600","gray.400")(e),borderBottom:"1px",borderColor:ce(`${t}.100`,`${t}.700`)(e),...Vc},td:{borderBottom:"1px",borderColor:ce(`${t}.100`,`${t}.700`)(e),...Vc},caption:{color:ce("gray.600","gray.100")(e)},tbody:{tr:{"&:nth-of-type(odd)":{"th, td":{borderBottomWidth:"1px",borderColor:ce(`${t}.100`,`${t}.700`)(e)},td:{background:ce(`${t}.100`,`${t}.700`)(e)}}}},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),WM={simple:$M,striped:jM,unstyled:{}},HM={sm:li({th:{px:"4",py:"1",lineHeight:"4",fontSize:"xs"},td:{px:"4",py:"2",fontSize:"sm",lineHeight:"4"},caption:{px:"4",py:"2",fontSize:"xs"}}),md:li({th:{px:"6",py:"3",lineHeight:"4",fontSize:"xs"},td:{px:"6",py:"4",lineHeight:"5"},caption:{px:"6",py:"2",fontSize:"sm"}}),lg:li({th:{px:"8",py:"4",lineHeight:"5",fontSize:"sm"},td:{px:"8",py:"5",lineHeight:"6"},caption:{px:"6",py:"2",fontSize:"md"}})},UM=zM({baseStyle:VM,variants:WM,sizes:HM,defaultProps:{variant:"simple",size:"md",colorScheme:"gray"}}),Jt=qe("tabs-color"),Zn=qe("tabs-bg"),Tu=qe("tabs-border-color"),{defineMultiStyleConfig:GM,definePartsStyle:xr}=Ke(eA.keys),KM=e=>{const{orientation:t}=e;return{display:t==="vertical"?"flex":"block"}},YM=e=>{const{isFitted:t}=e;return{flex:t?1:void 0,transitionProperty:"common",transitionDuration:"normal",_focusVisible:{zIndex:1,boxShadow:"outline"},_disabled:{cursor:"not-allowed",opacity:.4}}},XM=e=>{const{align:t="start",orientation:n}=e;return{justifyContent:{end:"flex-end",center:"center",start:"flex-start"}[t],flexDirection:n==="vertical"?"column":"row"}},ZM={p:4},QM=xr(e=>({root:KM(e),tab:YM(e),tablist:XM(e),tabpanel:ZM})),JM={sm:xr({tab:{py:1,px:4,fontSize:"sm"}}),md:xr({tab:{fontSize:"md",py:2,px:4}}),lg:xr({tab:{fontSize:"lg",py:3,px:4}})},eO=xr(e=>{const{colorScheme:t,orientation:n}=e,r=n==="vertical",o=n==="vertical"?"borderStart":"borderBottom",a=r?"marginStart":"marginBottom";return{tablist:{[o]:"2px solid",borderColor:"inherit"},tab:{[o]:"2px solid",borderColor:"transparent",[a]:"-2px",_selected:{[Jt.variable]:`colors.${t}.600`,_dark:{[Jt.variable]:`colors.${t}.300`},borderColor:"currentColor"},_active:{[Zn.variable]:"colors.gray.200",_dark:{[Zn.variable]:"colors.whiteAlpha.300"}},_disabled:{_active:{bg:"none"}},color:Jt.reference,bg:Zn.reference}}}),tO=xr(e=>{const{colorScheme:t}=e;return{tab:{borderTopRadius:"md",border:"1px solid",borderColor:"transparent",mb:"-1px",[Tu.variable]:"transparent",_selected:{[Jt.variable]:`colors.${t}.600`,[Tu.variable]:"colors.white",_dark:{[Jt.variable]:`colors.${t}.300`,[Tu.variable]:"colors.gray.800"},borderColor:"inherit",borderBottomColor:Tu.reference},color:Jt.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),nO=xr(e=>{const{colorScheme:t}=e;return{tab:{border:"1px solid",borderColor:"inherit",[Zn.variable]:"colors.gray.50",_dark:{[Zn.variable]:"colors.whiteAlpha.50"},mb:"-1px",_notLast:{marginEnd:"-1px"},_selected:{[Zn.variable]:"colors.white",[Jt.variable]:`colors.${t}.600`,_dark:{[Zn.variable]:"colors.gray.800",[Jt.variable]:`colors.${t}.300`},borderColor:"inherit",borderTopColor:"currentColor",borderBottomColor:"transparent"},color:Jt.reference,bg:Zn.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),rO=xr(e=>{const{colorScheme:t,theme:n}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",color:"gray.600",_selected:{color:Wt(n,`${t}.700`),bg:Wt(n,`${t}.100`)}}}}),oO=xr(e=>{const{colorScheme:t}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",[Jt.variable]:"colors.gray.600",_dark:{[Jt.variable]:"inherit"},_selected:{[Jt.variable]:"colors.white",[Zn.variable]:`colors.${t}.600`,_dark:{[Jt.variable]:"colors.gray.800",[Zn.variable]:`colors.${t}.300`}},color:Jt.reference,bg:Zn.reference}}}),aO=xr({}),iO={line:eO,enclosed:tO,"enclosed-colored":nO,"soft-rounded":rO,"solid-rounded":oO,unstyled:aO},sO=GM({baseStyle:QM,sizes:JM,variants:iO,defaultProps:{size:"md",variant:"line",colorScheme:"blue"}}),{defineMultiStyleConfig:lO,definePartsStyle:oa}=Ke(tA.keys),uO={fontWeight:"medium",lineHeight:1.2,outline:0,borderRadius:"md",_focusVisible:{boxShadow:"outline"}},cO={lineHeight:1.2,overflow:"visible"},dO={fontSize:"lg",w:"5",h:"5",transitionProperty:"common",transitionDuration:"normal",borderRadius:"full",marginStart:"1.5",marginEnd:"-1",opacity:.5,_disabled:{opacity:.4},_focusVisible:{boxShadow:"outline",bg:"rgba(0, 0, 0, 0.14)"},_hover:{opacity:.8},_active:{opacity:1}},fO=oa({container:uO,label:cO,closeButton:dO}),pO={sm:oa({container:{minH:"5",minW:"5",fontSize:"xs",px:"2"},closeButton:{marginEnd:"-2px",marginStart:"0.35rem"}}),md:oa({container:{minH:"6",minW:"6",fontSize:"sm",px:"2"}}),lg:oa({container:{minH:"8",minW:"8",fontSize:"md",px:"3"}})},mO={subtle:oa(e=>{var t;return{container:(t=Es.variants)==null?void 0:t.subtle(e)}}),solid:oa(e=>{var t;return{container:(t=Es.variants)==null?void 0:t.solid(e)}}),outline:oa(e=>{var t;return{container:(t=Es.variants)==null?void 0:t.outline(e)}})},hO=lO({variants:mO,baseStyle:fO,sizes:pO,defaultProps:{size:"md",variant:"subtle",colorScheme:"gray"}}),a1,gO={...(a1=De.baseStyle)==null?void 0:a1.field,paddingY:"2",minHeight:"20",lineHeight:"short",verticalAlign:"top"},i1,E2,vO={outline:e=>{var n;var t;return(n=(t=De.variants)==null?void 0:t.outline(e).field)!=null?n:{}},flushed:e=>{var n;var t;return(n=(t=De.variants)==null?void 0:t.flushed(e).field)!=null?n:{}},filled:e=>{var n;var t;return(n=(t=De.variants)==null?void 0:t.filled(e).field)!=null?n:{}},unstyled:(E2=(i1=De.variants)==null?void 0:i1.unstyled.field)!=null?E2:{}},s1,l1,u1,c1,P2,T2,F2,A2,yO={xs:(P2=(s1=De.sizes)==null?void 0:s1.xs.field)!=null?P2:{},sm:(T2=(l1=De.sizes)==null?void 0:l1.sm.field)!=null?T2:{},md:(F2=(u1=De.sizes)==null?void 0:u1.md.field)!=null?F2:{},lg:(A2=(c1=De.sizes)==null?void 0:c1.lg.field)!=null?A2:{}},bO={baseStyle:gO,sizes:yO,variants:vO,defaultProps:{size:"md",variant:"outline"}},Fu=St("tooltip-bg"),Dp=St("tooltip-fg"),wO=St("popper-arrow-bg"),xO={bg:Fu.reference,color:Dp.reference,[Fu.variable]:"colors.gray.700",[Dp.variable]:"colors.whiteAlpha.900",_dark:{[Fu.variable]:"colors.gray.300",[Dp.variable]:"colors.gray.900"},[wO.variable]:Fu.reference,px:"2",py:"0.5",borderRadius:"sm",fontWeight:"medium",fontSize:"sm",boxShadow:"md",maxW:"xs",zIndex:"tooltip"},SO={baseStyle:xO},CO={Accordion:zA,Alert:KA,Avatar:aI,Badge:Es,Breadcrumb:hI,Button:kI,Checkbox:zc,CloseButton:BI,Code:jI,Container:HI,Divider:XI,Drawer:sR,Editable:mR,Form:wR,FormError:ER,FormLabel:TR,Heading:IR,Input:De,Kbd:VR,Link:jR,List:KR,Menu:oN,Modal:hN,NumberInput:_N,PinInput:FN,Popover:zN,Progress:KN,Radio:JN,Select:iM,Skeleton:lM,SkipLink:cM,Slider:xM,Spinner:kM,Stat:RM,Switch:BM,Table:UM,Tabs:sO,Tag:hO,Textarea:bO,Tooltip:SO,Card:FI},kO={none:0,"1px":"1px solid","2px":"2px solid","4px":"4px solid","8px":"8px solid"},_O=kO,EO={base:"0em",sm:"30em",md:"48em",lg:"62em",xl:"80em","2xl":"96em"},PO=EO,TO={transparent:"transparent",current:"currentColor",black:"#000000",white:"#FFFFFF",whiteAlpha:{50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},blackAlpha:{50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},gray:{50:"#F7FAFC",100:"#EDF2F7",200:"#E2E8F0",300:"#CBD5E0",400:"#A0AEC0",500:"#718096",600:"#4A5568",700:"#2D3748",800:"#1A202C",900:"#171923"},red:{50:"#FFF5F5",100:"#FED7D7",200:"#FEB2B2",300:"#FC8181",400:"#F56565",500:"#E53E3E",600:"#C53030",700:"#9B2C2C",800:"#822727",900:"#63171B"},orange:{50:"#FFFAF0",100:"#FEEBC8",200:"#FBD38D",300:"#F6AD55",400:"#ED8936",500:"#DD6B20",600:"#C05621",700:"#9C4221",800:"#7B341E",900:"#652B19"},yellow:{50:"#FFFFF0",100:"#FEFCBF",200:"#FAF089",300:"#F6E05E",400:"#ECC94B",500:"#D69E2E",600:"#B7791F",700:"#975A16",800:"#744210",900:"#5F370E"},green:{50:"#F0FFF4",100:"#C6F6D5",200:"#9AE6B4",300:"#68D391",400:"#48BB78",500:"#38A169",600:"#2F855A",700:"#276749",800:"#22543D",900:"#1C4532"},teal:{50:"#E6FFFA",100:"#B2F5EA",200:"#81E6D9",300:"#4FD1C5",400:"#38B2AC",500:"#319795",600:"#2C7A7B",700:"#285E61",800:"#234E52",900:"#1D4044"},blue:{50:"#ebf8ff",100:"#bee3f8",200:"#90cdf4",300:"#63b3ed",400:"#4299e1",500:"#3182ce",600:"#2b6cb0",700:"#2c5282",800:"#2a4365",900:"#1A365D"},cyan:{50:"#EDFDFD",100:"#C4F1F9",200:"#9DECF9",300:"#76E4F7",400:"#0BC5EA",500:"#00B5D8",600:"#00A3C4",700:"#0987A0",800:"#086F83",900:"#065666"},purple:{50:"#FAF5FF",100:"#E9D8FD",200:"#D6BCFA",300:"#B794F4",400:"#9F7AEA",500:"#805AD5",600:"#6B46C1",700:"#553C9A",800:"#44337A",900:"#322659"},pink:{50:"#FFF5F7",100:"#FED7E2",200:"#FBB6CE",300:"#F687B3",400:"#ED64A6",500:"#D53F8C",600:"#B83280",700:"#97266D",800:"#702459",900:"#521B41"},linkedin:{50:"#E8F4F9",100:"#CFEDFB",200:"#9BDAF3",300:"#68C7EC",400:"#34B3E4",500:"#00A0DC",600:"#008CC9",700:"#0077B5",800:"#005E93",900:"#004471"},facebook:{50:"#E8F4F9",100:"#D9DEE9",200:"#B7C2DA",300:"#6482C0",400:"#4267B2",500:"#385898",600:"#314E89",700:"#29487D",800:"#223B67",900:"#1E355B"},messenger:{50:"#D0E6FF",100:"#B9DAFF",200:"#A2CDFF",300:"#7AB8FF",400:"#2E90FF",500:"#0078FF",600:"#0063D1",700:"#0052AC",800:"#003C7E",900:"#002C5C"},whatsapp:{50:"#dffeec",100:"#b9f5d0",200:"#90edb3",300:"#65e495",400:"#3cdd78",500:"#22c35e",600:"#179848",700:"#0c6c33",800:"#01421c",900:"#001803"},twitter:{50:"#E5F4FD",100:"#C8E9FB",200:"#A8DCFA",300:"#83CDF7",400:"#57BBF5",500:"#1DA1F2",600:"#1A94DA",700:"#1681BF",800:"#136B9E",900:"#0D4D71"},telegram:{50:"#E3F2F9",100:"#C5E4F3",200:"#A2D4EC",300:"#7AC1E4",400:"#47A9DA",500:"#0088CC",600:"#007AB8",700:"#006BA1",800:"#005885",900:"#003F5E"}},FO=TO,AO={none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},IO=AO,RO={xs:"0 0 0 1px rgba(0, 0, 0, 0.05)",sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",outline:"0 0 0 3px rgba(66, 153, 225, 0.6)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.06)",none:"none","dark-lg":"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"},NO=RO,MO={common:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",colors:"background-color, border-color, color, fill, stroke",dimensions:"width, height",position:"left, right, top, bottom",background:"background-color, background-image, background-position"},OO={"ease-in":"cubic-bezier(0.4, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.2, 1)","ease-in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},DO={"ultra-fast":"50ms",faster:"100ms",fast:"150ms",normal:"200ms",slow:"300ms",slower:"400ms","ultra-slow":"500ms"},qO={property:MO,easing:OO,duration:DO},LO=qO,BO={hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},zO=BO,VO={none:0,sm:"4px",base:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},$O=VO,cC={breakpoints:PO,zIndices:zO,radii:IO,blur:$O,colors:FO,...iC,sizes:rC,shadows:NO,space:nC,borders:_O,transition:LO},dC={colors:{"chakra-body-text":{_light:"gray.800",_dark:"whiteAlpha.900"},"chakra-body-bg":{_light:"white",_dark:"gray.800"},"chakra-border-color":{_light:"gray.200",_dark:"whiteAlpha.300"},"chakra-subtle-bg":{_light:"gray.100",_dark:"gray.700"},"chakra-placeholder-color":{_light:"gray.500",_dark:"whiteAlpha.400"}}},fC={global:{body:{fontFamily:"body",color:"chakra-body-text",bg:"chakra-body-bg",transitionProperty:"background-color",transitionDuration:"normal",lineHeight:"base"},"*::placeholder":{color:"chakra-placeholder-color"},"*, *::before, &::after":{borderColor:"chakra-border-color",wordWrap:"break-word"}}};function jO(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}var pC=["borders","breakpoints","colors","components","config","direction","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","space","styles","transition","zIndices"];function mC(e){return jO(e)?pC.every(t=>Object.prototype.hasOwnProperty.call(e,t)):!1}var hC="ltr",gC={useSystemColorMode:!1,initialColorMode:"light",cssVarPrefix:"chakra"},af={semanticTokens:dC,direction:hC,...cC,components:CO,styles:fC,config:gC},WO=af,a0={semanticTokens:dC,direction:hC,components:{},...cC,styles:fC,config:gC};function vs(e){return typeof e=="function"}function HO(...e){return t=>e.reduce((n,r)=>r(n),t)}var vC=e=>function(...n){let r=[...n],o=n[n.length-1];return mC(o)&&r.length>1?r=r.slice(0,r.length-1):o=e,HO(...r.map(a=>i=>vs(a)?a(i):ya(i,a)))(o)},UO=vC(af),GO=vC(a0);function ya(...e){return Tn({},...e,yC)}function yC(e,t,n,r){if((vs(e)||vs(t))&&Object.prototype.hasOwnProperty.call(r,n))return(...o)=>{const a=vs(e)?e(...o):e,i=vs(t)?t(...o):t;return Tn({},a,i,yC)}}function i0(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function bC({colorScheme:e,components:t}){return n=>{let r=Object.keys(n.components||{});return Array.isArray(t)?r=t:i0(t)&&(r=Object.keys(t)),ya(n,{components:Object.fromEntries(r.map(o=>[o,{defaultProps:{colorScheme:e}}]))})}}function wC({size:e,components:t}){return n=>{let r=Object.keys(n.components||{});return Array.isArray(t)?r=t:i0(t)&&(r=Object.keys(t)),ya(n,{components:Object.fromEntries(r.map(o=>[o,{defaultProps:{size:e}}]))})}}function xC({variant:e,components:t}){return n=>{let r=Object.keys(n.components||{});return Array.isArray(t)?r=t:i0(t)&&(r=Object.keys(t)),ya(n,{components:Object.fromEntries(r.map(o=>[o,{defaultProps:{variant:e}}]))})}}function KO(...e){return t=>e.reduce((n,r)=>r(n),t)}function YO({defaultProps:{colorScheme:e,variant:t,size:n},components:r}){const o=i=>i,a=[e?bC({colorScheme:e,components:r}):o,n?wC({size:n,components:r}):o,t?xC({variant:t,components:r}):o];return i=>ya(KO(...a)(i))}var XO=typeof Element<"u",ZO=typeof Map=="function",QO=typeof Set=="function",JO=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function dc(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!dc(e[r],t[r]))return!1;return!0}var a;if(ZO&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!dc(r.value[1],t.get(r.value[0])))return!1;return!0}if(QO&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(JO&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(XO&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!dc(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var eD=function(t,n){try{return dc(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};function yn(){const e=p.exports.useContext(el);if(!e)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");return e}function sf(){const e=Ol(),t=yn();return{...e,theme:t}}function tD(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__breakpoints)==null?void 0:s.asArray)==null?void 0:l[i]};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function nD(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__cssMap)==null?void 0:s[i])==null?void 0:l.value};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function SC(e,t,n){const r=yn();return s0(e,t,n)(r)}function s0(e,t,n){const r=Array.isArray(t)?t:[t],o=Array.isArray(n)?n:[n];return a=>{const i=o.filter(Boolean),s=r.map((l,u)=>{var d,f;if(e==="breakpoints")return tD(a,l,(d=i[u])!=null?d:l);const c=`${e}.${l}`;return nD(a,c,(f=i[u])!=null?f:l)});return Array.isArray(t)?s:s[0]}}function l0(e){const{cssVarsRoot:t,theme:n,children:r}=e,o=p.exports.useMemo(()=>pS(n),[n]);return se(w7,{theme:o,children:[S(CC,{root:t}),r]})}function CC({root:e=":host, :root"}){const t=[e,"[data-theme]"].join(",");return S(ef,{styles:n=>({[t]:n.__cssVars})})}var[rD,oD]=JS({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function aD(e){return JS({name:`${e}StylesContext`,errorMessage:`useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `})}function kC(){const{colorMode:e}=Ol();return S(ef,{styles:t=>{const n=jS(t,"styles.global"),r=nl(n,{theme:t,colorMode:e});return r?zg(r)(t):void 0}})}var iD=new Set([...mS,"textStyle","layerStyle","apply","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),sD=new Set(["htmlWidth","htmlHeight","htmlSize"]);function _C(e){return sD.has(e)||!iD.has(e)}var EC=({baseStyle:e})=>t=>{const{theme:n,css:r,__css:o,sx:a,...i}=t,s=WS(i,(d,f)=>hS(f)),l=nl(e,t),u=Object.assign({},o,l,HS(s),a),c=zg(u)(t.theme);return r?[c,r]:c};function fc(e,t){const{baseStyle:n,...r}=t!=null?t:{};r.shouldForwardProp||(r.shouldForwardProp=_C);const o=EC({baseStyle:n}),a=Km(e,r)(o);return P.forwardRef(function(l,u){const{colorMode:c,forced:d}=Ol();return P.createElement(a,{ref:u,"data-theme":d?c:void 0,...l})})}function M(e){return p.exports.forwardRef(e)}function u0(e,t={}){var c;const{styleConfig:n,...r}=t,{theme:o,colorMode:a}=sf(),i=e?jS(o,`components.${e}`):void 0,s=n||i,l=Tn({theme:o,colorMode:a},(c=s==null?void 0:s.defaultProps)!=null?c:{},HS(O7(r,["children"]))),u=p.exports.useRef({});if(s){const f=vS(s)(l);eD(u.current,f)||(u.current=f)}return u.current}function ht(e,t={}){return u0(e,t)}function $e(e,t={}){return u0(e,t)}function lD(e,t){var n;const{baseConfig:r,...o}=t,{theme:a}=sf(),i=(n=a.components)==null?void 0:n[e],s=i?ya(i,r):r;return u0(null,{...o,styleConfig:s})}function uD(){const e=new Map;return new Proxy(fc,{apply(t,n,r){return fc(...r)},get(t,n){return e.has(n)||e.set(n,fc(n)),e.get(n)}})}var R=uD();function cD(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function be(e={}){const{name:t,strict:n=!0,hookName:r="useContext",providerName:o="Provider",errorMessage:a}=e,i=p.exports.createContext(void 0);i.displayName=t;function s(){var l;const u=p.exports.useContext(i);if(!u&&n){const c=new Error(a!=null?a:cD(r,o));throw c.name="ContextError",(l=Error.captureStackTrace)==null||l.call(Error,c,s),c}return u}return[i.Provider,s,i]}function dD(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function ke(...e){return t=>{e.forEach(n=>{dD(n,t)})}}function fD(...e){return p.exports.useMemo(()=>ke(...e),e)}function d1(e){return e.sort((t,n)=>{const r=t.compareDocumentPosition(n);if(r&Node.DOCUMENT_POSITION_FOLLOWING||r&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(r&Node.DOCUMENT_POSITION_PRECEDING||r&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(r&Node.DOCUMENT_POSITION_DISCONNECTED||r&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}var pD=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function f1(e,t,n){let r=e+1;return n&&r>=t&&(r=0),r}function p1(e,t,n){let r=e-1;return n&&r<0&&(r=t),r}var Jm=typeof window<"u"?p.exports.useLayoutEffect:p.exports.useEffect,$c=e=>e,mD=class{constructor(){he(this,"descendants",new Map);he(this,"register",e=>{if(e!=null)return pD(e)?this.registerNode(e):t=>{this.registerNode(t,e)}});he(this,"unregister",e=>{this.descendants.delete(e);const t=d1(Array.from(this.descendants.keys()));this.assignIndex(t)});he(this,"destroy",()=>{this.descendants.clear()});he(this,"assignIndex",e=>{this.descendants.forEach(t=>{const n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})});he(this,"count",()=>this.descendants.size);he(this,"enabledCount",()=>this.enabledValues().length);he(this,"values",()=>Array.from(this.descendants.values()).sort((t,n)=>t.index-n.index));he(this,"enabledValues",()=>this.values().filter(e=>!e.disabled));he(this,"item",e=>{if(this.count()!==0)return this.values()[e]});he(this,"enabledItem",e=>{if(this.enabledCount()!==0)return this.enabledValues()[e]});he(this,"first",()=>this.item(0));he(this,"firstEnabled",()=>this.enabledItem(0));he(this,"last",()=>this.item(this.descendants.size-1));he(this,"lastEnabled",()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)});he(this,"indexOf",e=>{var n;var t;return e&&(n=(t=this.descendants.get(e))==null?void 0:t.index)!=null?n:-1});he(this,"enabledIndexOf",e=>e==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(e)));he(this,"next",(e,t=!0)=>{const n=f1(e,this.count(),t);return this.item(n)});he(this,"nextEnabled",(e,t=!0)=>{const n=this.item(e);if(!n)return;const r=this.enabledIndexOf(n.node),o=f1(r,this.enabledCount(),t);return this.enabledItem(o)});he(this,"prev",(e,t=!0)=>{const n=p1(e,this.count()-1,t);return this.item(n)});he(this,"prevEnabled",(e,t=!0)=>{const n=this.item(e);if(!n)return;const r=this.enabledIndexOf(n.node),o=p1(r,this.enabledCount()-1,t);return this.enabledItem(o)});he(this,"registerNode",(e,t)=>{if(!e||this.descendants.has(e))return;const n=Array.from(this.descendants.keys()).concat(e),r=d1(n);t!=null&&t.disabled&&(t.disabled=!!t.disabled);const o={node:e,index:-1,...t};this.descendants.set(e,o),this.assignIndex(r)})}};function hD(){const e=p.exports.useRef(new mD);return Jm(()=>()=>e.current.destroy()),e.current}var[gD,PC]=be({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function vD(e){const t=PC(),[n,r]=p.exports.useState(-1),o=p.exports.useRef(null);Jm(()=>()=>{!o.current||t.unregister(o.current)},[]),Jm(()=>{if(!o.current)return;const i=Number(o.current.dataset.index);n!=i&&!Number.isNaN(i)&&r(i)});const a=$c(e?t.register(e):t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(o.current),register:ke(a,o)}}function lf(){return[$c(gD),()=>$c(PC()),()=>hD(),o=>vD(o)]}var Je=(...e)=>e.filter(Boolean).join(" ");function yD(e,...t){return bD(e)?e(...t):e}var bD=e=>typeof e=="function",qp=e=>e?!0:void 0;function Cn(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var m1={path:se("g",{stroke:"currentColor",strokeWidth:"1.5",children:[S("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),S("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),S("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},Mt=M((e,t)=>{const{as:n,viewBox:r,color:o="currentColor",focusable:a=!1,children:i,className:s,__css:l,...u}=e,c=Je("chakra-icon",s),d=ht("Icon",e),f={w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o,...l,...d},m={ref:t,focusable:a,className:c,__css:f},v=r!=null?r:m1.viewBox;if(n&&typeof n!="string")return P.createElement(R.svg,{as:n,...m,...u});const h=i!=null?i:m1.path;return P.createElement(R.svg,{verticalAlign:"middle",viewBox:v,...m,...u},h)});Mt.displayName="Icon";function wD(e){const{viewBox:t="0 0 24 24",d:n,displayName:r,defaultProps:o={}}=e,a=p.exports.Children.toArray(e.path),i=M((s,l)=>S(Mt,{ref:l,viewBox:t,...o,...s,children:a.length?a:S("path",{fill:"currentColor",d:n})}));return i.displayName=r,i}function Ue(e,t=[]){const n=p.exports.useRef(e);return p.exports.useEffect(()=>{n.current=e}),p.exports.useCallback((...r)=>{var o;return(o=n.current)==null?void 0:o.call(n,...r)},t)}function Fo(e){const{value:t,defaultValue:n,onChange:r,shouldUpdate:o=(f,m)=>f!==m}=e,a=Ue(r),i=Ue(o),[s,l]=p.exports.useState(n),u=t!==void 0,c=u?t:s,d=Ue(f=>{const v=typeof f=="function"?f(c):f;!i(c,v)||(u||l(v),a(v))},[u,a,c,i]);return[c,d]}const c0=p.exports.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),uf=p.exports.createContext({});function xD(){return p.exports.useContext(uf).visualElement}const Vi=p.exports.createContext(null),ba=typeof document<"u",jc=ba?p.exports.useLayoutEffect:p.exports.useEffect,TC=p.exports.createContext({strict:!1});function SD(e,t,n,r){const o=xD(),a=p.exports.useContext(TC),i=p.exports.useContext(Vi),s=p.exports.useContext(c0).reducedMotion,l=p.exports.useRef();r=r||a.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceId:i?i.id:void 0,blockInitialAnimation:i?i.initial===!1:!1,reducedMotionConfig:s}));const u=l.current;return jc(()=>{u&&u.render()}),p.exports.useEffect(()=>{u&&u.animationState&&u.animationState.animateChanges()}),jc(()=>()=>u&&u.notify("Unmount"),[]),u}function Ba(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function CD(e,t,n){return p.exports.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Ba(n)&&(n.current=r))},[t])}function sl(e){return typeof e=="string"||Array.isArray(e)}function cf(e){return typeof e=="object"&&typeof e.start=="function"}const kD=["initial","animate","exit","whileHover","whileDrag","whileTap","whileFocus","whileInView"];function df(e){return cf(e.animate)||kD.some(t=>sl(e[t]))}function FC(e){return Boolean(df(e)||e.variants)}function _D(e,t){if(df(e)){const{initial:n,animate:r}=e;return{initial:n===!1||sl(n)?n:void 0,animate:sl(r)?r:void 0}}return e.inherit!==!1?t:{}}function ED(e){const{initial:t,animate:n}=_D(e,p.exports.useContext(uf));return p.exports.useMemo(()=>({initial:t,animate:n}),[h1(t),h1(n)])}function h1(e){return Array.isArray(e)?e.join(" "):e}const Ir=e=>({isEnabled:t=>e.some(n=>!!t[n])}),ll={measureLayout:Ir(["layout","layoutId","drag"]),animation:Ir(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:Ir(["exit"]),drag:Ir(["drag","dragControls"]),focus:Ir(["whileFocus"]),hover:Ir(["whileHover","onHoverStart","onHoverEnd"]),tap:Ir(["whileTap","onTap","onTapStart","onTapCancel"]),pan:Ir(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:Ir(["whileInView","onViewportEnter","onViewportLeave"])};function PD(e){for(const t in e)t==="projectionNodeConstructor"?ll.projectionNodeConstructor=e[t]:ll[t].Component=e[t]}function ff(e){const t=p.exports.useRef(null);return t.current===null&&(t.current=e()),t.current}const As={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let TD=1;function FD(){return ff(()=>{if(As.hasEverUpdated)return TD++})}const d0=p.exports.createContext({});class AD extends P.Component{getSnapshotBeforeUpdate(){const{visualElement:t,props:n}=this.props;return t&&t.setProps(n),null}componentDidUpdate(){}render(){return this.props.children}}const AC=p.exports.createContext({}),ID=Symbol.for("motionComponentSymbol");function RD({preloadedFeatures:e,createVisualElement:t,projectionNodeConstructor:n,useRender:r,useVisualState:o,Component:a}){e&&PD(e);function i(l,u){const c={...p.exports.useContext(c0),...l,layoutId:ND(l)},{isStatic:d}=c;let f=null;const m=ED(l),v=d?void 0:FD(),h=o(l,d);if(!d&&ba){m.visualElement=SD(a,h,c,t);const b=p.exports.useContext(TC).strict,y=p.exports.useContext(AC);m.visualElement&&(f=m.visualElement.loadFeatures(c,b,e,v,n||ll.projectionNodeConstructor,y))}return se(AD,{visualElement:m.visualElement,props:c,children:[f,S(uf.Provider,{value:m,children:r(a,l,v,CD(h,m.visualElement,u),h,d,m.visualElement)})]})}const s=p.exports.forwardRef(i);return s[ID]=a,s}function ND({layoutId:e}){const t=p.exports.useContext(d0).id;return t&&e!==void 0?t+"-"+e:e}function MD(e){function t(r,o={}){return RD(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const OD=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","text","tspan","use","view"];function f0(e){return typeof e!="string"||e.includes("-")?!1:!!(OD.indexOf(e)>-1||/[A-Z]/.test(e))}const Wc={};function DD(e){Object.assign(Wc,e)}const Hc=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],$i=new Set(Hc);function IC(e,{layout:t,layoutId:n}){return $i.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Wc[e]||e==="opacity")}const Er=e=>!!(e!=null&&e.getVelocity),qD={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},LD=(e,t)=>Hc.indexOf(e)-Hc.indexOf(t);function BD({transform:e,transformKeys:t},{enableHardwareAcceleration:n=!0,allowTransformNone:r=!0},o,a){let i="";t.sort(LD);for(const s of t)i+=`${qD[s]||s}(${e[s]}) `;return n&&!e.z&&(i+="translateZ(0)"),i=i.trim(),a?i=a(e,o?"":i):r&&o&&(i="none"),i}function RC(e){return e.startsWith("--")}const zD=(e,t)=>t&&typeof e=="number"?t.transform(e):e,NC=(e,t)=>n=>Math.max(Math.min(n,t),e),Is=e=>e%1?Number(e.toFixed(5)):e,ul=/(-)?([\d]*\.?[\d])+/g,eh=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,VD=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function zl(e){return typeof e=="string"}const wa={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Rs=Object.assign(Object.assign({},wa),{transform:NC(0,1)}),Au=Object.assign(Object.assign({},wa),{default:1}),Vl=e=>({test:t=>zl(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),no=Vl("deg"),Sr=Vl("%"),pe=Vl("px"),$D=Vl("vh"),jD=Vl("vw"),g1=Object.assign(Object.assign({},Sr),{parse:e=>Sr.parse(e)/100,transform:e=>Sr.transform(e*100)}),p0=(e,t)=>n=>Boolean(zl(n)&&VD.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),MC=(e,t,n)=>r=>{if(!zl(r))return r;const[o,a,i,s]=r.match(ul);return{[e]:parseFloat(o),[t]:parseFloat(a),[n]:parseFloat(i),alpha:s!==void 0?parseFloat(s):1}},za={test:p0("hsl","hue"),parse:MC("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Sr.transform(Is(t))+", "+Sr.transform(Is(n))+", "+Is(Rs.transform(r))+")"},WD=NC(0,255),Lp=Object.assign(Object.assign({},wa),{transform:e=>Math.round(WD(e))}),Qo={test:p0("rgb","red"),parse:MC("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Lp.transform(e)+", "+Lp.transform(t)+", "+Lp.transform(n)+", "+Is(Rs.transform(r))+")"};function HD(e){let t="",n="",r="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const th={test:p0("#"),parse:HD,transform:Qo.transform},$t={test:e=>Qo.test(e)||th.test(e)||za.test(e),parse:e=>Qo.test(e)?Qo.parse(e):za.test(e)?za.parse(e):th.parse(e),transform:e=>zl(e)?e:e.hasOwnProperty("red")?Qo.transform(e):za.transform(e)},OC="${c}",DC="${n}";function UD(e){var t,n,r,o;return isNaN(e)&&zl(e)&&((n=(t=e.match(ul))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(r=e.match(eh))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function qC(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(eh);r&&(n=r.length,e=e.replace(eh,OC),t.push(...r.map($t.parse)));const o=e.match(ul);return o&&(e=e.replace(ul,DC),t.push(...o.map(wa.parse))),{values:t,numColors:n,tokenised:e}}function LC(e){return qC(e).values}function BC(e){const{values:t,numColors:n,tokenised:r}=qC(e),o=t.length;return a=>{let i=r;for(let s=0;s<o;s++)i=i.replace(s<n?OC:DC,s<n?$t.transform(a[s]):Is(a[s]));return i}}const GD=e=>typeof e=="number"?0:e;function KD(e){const t=LC(e);return BC(e)(t.map(GD))}const zr={test:UD,parse:LC,createTransformer:BC,getAnimatableNone:KD},YD=new Set(["brightness","contrast","saturate","opacity"]);function XD(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(ul)||[];if(!r)return e;const o=n.replace(r,"");let a=YD.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+o+")"}const ZD=/([a-z-]*)\(.*?\)/g,nh=Object.assign(Object.assign({},zr),{getAnimatableNone:e=>{const t=e.match(ZD);return t?t.map(XD).join(" "):e}}),v1={...wa,transform:Math.round},zC={borderWidth:pe,borderTopWidth:pe,borderRightWidth:pe,borderBottomWidth:pe,borderLeftWidth:pe,borderRadius:pe,radius:pe,borderTopLeftRadius:pe,borderTopRightRadius:pe,borderBottomRightRadius:pe,borderBottomLeftRadius:pe,width:pe,maxWidth:pe,height:pe,maxHeight:pe,size:pe,top:pe,right:pe,bottom:pe,left:pe,padding:pe,paddingTop:pe,paddingRight:pe,paddingBottom:pe,paddingLeft:pe,margin:pe,marginTop:pe,marginRight:pe,marginBottom:pe,marginLeft:pe,rotate:no,rotateX:no,rotateY:no,rotateZ:no,scale:Au,scaleX:Au,scaleY:Au,scaleZ:Au,skew:no,skewX:no,skewY:no,distance:pe,translateX:pe,translateY:pe,translateZ:pe,x:pe,y:pe,z:pe,perspective:pe,transformPerspective:pe,opacity:Rs,originX:g1,originY:g1,originZ:pe,zIndex:v1,fillOpacity:Rs,strokeOpacity:Rs,numOctaves:v1};function m0(e,t,n,r){const{style:o,vars:a,transform:i,transformKeys:s,transformOrigin:l}=e;s.length=0;let u=!1,c=!1,d=!0;for(const f in t){const m=t[f];if(RC(f)){a[f]=m;continue}const v=zC[f],h=zD(m,v);if($i.has(f)){if(u=!0,i[f]=h,s.push(f),!d)continue;m!==(v.default||0)&&(d=!1)}else f.startsWith("origin")?(c=!0,l[f]=h):o[f]=h}if(t.transform||(u||r?o.transform=BD(e,n,d,r):o.transform&&(o.transform="none")),c){const{originX:f="50%",originY:m="50%",originZ:v=0}=l;o.transformOrigin=`${f} ${m} ${v}`}}const h0=()=>({style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}});function VC(e,t,n){for(const r in t)!Er(t[r])&&!IC(r,n)&&(e[r]=t[r])}function QD({transformTemplate:e},t,n){return p.exports.useMemo(()=>{const r=h0();return m0(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function JD(e,t,n){const r=e.style||{},o={};return VC(o,r,e),Object.assign(o,QD(e,t,n)),e.transformValues?e.transformValues(o):o}function eq(e,t,n){const r={},o=JD(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),r.style=o,r}const tq=["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"],nq=["whileTap","onTap","onTapStart","onTapCancel"],rq=["onPan","onPanStart","onPanSessionStart","onPanEnd"],oq=["whileInView","onViewportEnter","onViewportLeave","viewport"],aq=new Set(["initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","onHoverStart","onHoverEnd","layoutScroll",...oq,...nq,...tq,...rq]);function Uc(e){return aq.has(e)}let $C=e=>!Uc(e);function iq(e){!e||($C=t=>t.startsWith("on")?!Uc(t):e(t))}try{iq(require("@emotion/is-prop-valid").default)}catch{}function sq(e,t,n){const r={};for(const o in e)($C(o)||n===!0&&Uc(o)||!t&&!Uc(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function y1(e,t,n){return typeof e=="string"?e:pe.transform(t+n*e)}function lq(e,t,n){const r=y1(t,e.x,e.width),o=y1(n,e.y,e.height);return`${r} ${o}`}const uq={offset:"stroke-dashoffset",array:"stroke-dasharray"},cq={offset:"strokeDashoffset",array:"strokeDasharray"};function dq(e,t,n=1,r=0,o=!0){e.pathLength=1;const a=o?uq:cq;e[a.offset]=pe.transform(-r);const i=pe.transform(t),s=pe.transform(n);e[a.array]=`${i} ${s}`}function g0(e,{attrX:t,attrY:n,originX:r,originY:o,pathLength:a,pathSpacing:i=1,pathOffset:s=0,...l},u,c){m0(e,l,u,c),e.attrs=e.style,e.style={};const{attrs:d,style:f,dimensions:m}=e;d.transform&&(m&&(f.transform=d.transform),delete d.transform),m&&(r!==void 0||o!==void 0||f.transform)&&(f.transformOrigin=lq(m,r!==void 0?r:.5,o!==void 0?o:.5)),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),a!==void 0&&dq(d,a,i,s,!1)}const jC=()=>({...h0(),attrs:{}});function fq(e,t){const n=p.exports.useMemo(()=>{const r=jC();return g0(r,t,{enableHardwareAcceleration:!1},e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){const r={};VC(r,e.style,e),n.style={...r,...n.style}}return n}function pq(e=!1){return(n,r,o,a,{latestValues:i},s)=>{const u=(f0(n)?fq:eq)(r,i,s),d={...sq(r,typeof n=="string",e),...u,ref:a};return o&&(d["data-projection-id"]=o),p.exports.createElement(n,d)}}const WC=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function HC(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const UC=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength"]);function GC(e,t,n,r){HC(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(UC.has(o)?o:WC(o),t.attrs[o])}function v0(e){const{style:t}=e,n={};for(const r in t)(Er(t[r])||IC(r,e))&&(n[r]=t[r]);return n}function KC(e){const t=v0(e);for(const n in e)if(Er(e[n])){const r=n==="x"||n==="y"?"attr"+n.toUpperCase():n;t[r]=e[n]}return t}function y0(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}const cl=e=>Array.isArray(e),mq=e=>Boolean(e&&typeof e=="object"&&e.mix&&e.toValue),YC=e=>cl(e)?e[e.length-1]||0:e;function pc(e){const t=Er(e)?e.get():e;return mq(t)?t.toValue():t}function hq({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,a){const i={latestValues:gq(r,o,a,e),renderState:t()};return n&&(i.mount=s=>n(r,s,i)),i}const XC=e=>(t,n)=>{const r=p.exports.useContext(uf),o=p.exports.useContext(Vi),a=()=>hq(e,t,r,o);return n?a():ff(a)};function gq(e,t,n,r){const o={},a=r(e);for(const f in a)o[f]=pc(a[f]);let{initial:i,animate:s}=e;const l=df(e),u=FC(e);t&&u&&!l&&e.inherit!==!1&&(i===void 0&&(i=t.initial),s===void 0&&(s=t.animate));let c=n?n.initial===!1:!1;c=c||i===!1;const d=c?s:i;return d&&typeof d!="boolean"&&!cf(d)&&(Array.isArray(d)?d:[d]).forEach(m=>{const v=y0(e,m);if(!v)return;const{transitionEnd:h,transition:b,...y}=v;for(const g in y){let w=y[g];if(Array.isArray(w)){const x=c?w.length-1:0;w=w[x]}w!==null&&(o[g]=w)}for(const g in h)o[g]=h[g]}),o}const vq={useVisualState:XC({scrapeMotionValuesFromProps:KC,createRenderState:jC,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}g0(n,r,{enableHardwareAcceleration:!1},e.transformTemplate),GC(t,n)}})},yq={useVisualState:XC({scrapeMotionValuesFromProps:v0,createRenderState:h0})};function bq(e,{forwardMotionProps:t=!1},n,r,o){return{...f0(e)?vq:yq,preloadedFeatures:n,useRender:pq(t),createVisualElement:r,projectionNodeConstructor:o,Component:e}}var He;(function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"})(He||(He={}));function pf(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function rh(e,t,n,r){p.exports.useEffect(()=>{const o=e.current;if(n&&o)return pf(o,t,n,r)},[e,t,n,r])}function wq({whileFocus:e,visualElement:t}){const{animationState:n}=t,r=()=>{n&&n.setActive(He.Focus,!0)},o=()=>{n&&n.setActive(He.Focus,!1)};rh(t,"focus",e?r:void 0),rh(t,"blur",e?o:void 0)}function ZC(e){return typeof PointerEvent<"u"&&e instanceof PointerEvent?e.pointerType==="mouse":e instanceof MouseEvent}function QC(e){return!!e.touches}function xq(e){return t=>{const n=t instanceof MouseEvent;(!n||n&&t.button===0)&&e(t)}}const Sq={pageX:0,pageY:0};function Cq(e,t="page"){const r=e.touches[0]||e.changedTouches[0]||Sq;return{x:r[t+"X"],y:r[t+"Y"]}}function kq(e,t="page"){return{x:e[t+"X"],y:e[t+"Y"]}}function b0(e,t="page"){return{point:QC(e)?Cq(e,t):kq(e,t)}}const JC=(e,t=!1)=>{const n=r=>e(r,b0(r));return t?xq(n):n},_q=()=>ba&&window.onpointerdown===null,Eq=()=>ba&&window.ontouchstart===null,Pq=()=>ba&&window.onmousedown===null,Tq={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},Fq={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function e5(e){return _q()?e:Eq()?Fq[e]:Pq()?Tq[e]:e}function ui(e,t,n,r){return pf(e,e5(t),JC(n,t==="pointerdown"),r)}function Gc(e,t,n,r){return rh(e,e5(t),n&&JC(n,t==="pointerdown"),r)}function t5(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const b1=t5("dragHorizontal"),w1=t5("dragVertical");function n5(e){let t=!1;if(e==="y")t=w1();else if(e==="x")t=b1();else{const n=b1(),r=w1();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function r5(){const e=n5(!0);return e?(e(),!1):!0}function x1(e,t,n){return(r,o)=>{!ZC(r)||r5()||(e.animationState&&e.animationState.setActive(He.Hover,t),n&&n(r,o))}}function Aq({onHoverStart:e,onHoverEnd:t,whileHover:n,visualElement:r}){Gc(r,"pointerenter",e||n?x1(r,!0,e):void 0,{passive:!e}),Gc(r,"pointerleave",t||n?x1(r,!1,t):void 0,{passive:!t})}const o5=(e,t)=>t?e===t?!0:o5(e,t.parentElement):!1;function w0(e){return p.exports.useEffect(()=>()=>e(),[])}const Iq=(e,t)=>n=>t(e(n)),mf=(...e)=>e.reduce(Iq);function Rq({onTap:e,onTapStart:t,onTapCancel:n,whileTap:r,visualElement:o}){const a=e||t||n||r,i=p.exports.useRef(!1),s=p.exports.useRef(null),l={passive:!(t||e||n||m)};function u(){s.current&&s.current(),s.current=null}function c(){return u(),i.current=!1,o.animationState&&o.animationState.setActive(He.Tap,!1),!r5()}function d(v,h){!c()||(o5(o.current,v.target)?e&&e(v,h):n&&n(v,h))}function f(v,h){!c()||n&&n(v,h)}function m(v,h){u(),!i.current&&(i.current=!0,s.current=mf(ui(window,"pointerup",d,l),ui(window,"pointercancel",f,l)),o.animationState&&o.animationState.setActive(He.Tap,!0),t&&t(v,h))}Gc(o,"pointerdown",a?m:void 0,l),w0(u)}const Nq="production",a5=typeof process>"u"||process.env===void 0?Nq:"production",S1=new Set;function i5(e,t,n){e||S1.has(t)||(console.warn(t),n&&console.warn(n),S1.add(t))}const oh=new WeakMap,Bp=new WeakMap,Mq=e=>{const t=oh.get(e.target);t&&t(e)},Oq=e=>{e.forEach(Mq)};function Dq({root:e,...t}){const n=e||document;Bp.has(n)||Bp.set(n,{});const r=Bp.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(Oq,{root:e,...t})),r[o]}function qq(e,t,n){const r=Dq(t);return oh.set(e,n),r.observe(e),()=>{oh.delete(e),r.unobserve(e)}}function Lq({visualElement:e,whileInView:t,onViewportEnter:n,onViewportLeave:r,viewport:o={}}){const a=p.exports.useRef({hasEnteredView:!1,isInView:!1});let i=Boolean(t||n||r);o.once&&a.current.hasEnteredView&&(i=!1),(typeof IntersectionObserver>"u"?Vq:zq)(i,a.current,e,o)}const Bq={some:0,all:1};function zq(e,t,n,{root:r,margin:o,amount:a="some",once:i}){p.exports.useEffect(()=>{if(!e||!n.current)return;const s={root:r==null?void 0:r.current,rootMargin:o,threshold:typeof a=="number"?a:Bq[a]},l=u=>{const{isIntersecting:c}=u;if(t.isInView===c||(t.isInView=c,i&&!c&&t.hasEnteredView))return;c&&(t.hasEnteredView=!0),n.animationState&&n.animationState.setActive(He.InView,c);const d=n.getProps(),f=c?d.onViewportEnter:d.onViewportLeave;f&&f(u)};return qq(n.current,s,l)},[e,r,o,a])}function Vq(e,t,n,{fallback:r=!0}){p.exports.useEffect(()=>{!e||!r||(a5!=="production"&&i5(!1,"IntersectionObserver not available on this device. whileInView animations will trigger on mount."),requestAnimationFrame(()=>{t.hasEnteredView=!0;const{onViewportEnter:o}=n.getProps();o&&o(null),n.animationState&&n.animationState.setActive(He.InView,!0)}))},[e])}const po=e=>t=>(e(t),null),$q={inView:po(Lq),tap:po(Rq),focus:po(wq),hover:po(Aq)};function x0(){const e=p.exports.useContext(Vi);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=p.exports.useId();return p.exports.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}function jq(){return Wq(p.exports.useContext(Vi))}function Wq(e){return e===null?!0:e.isPresent}function s5(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const Kc=e=>e*1e3;var Hq=function(){},Yc=function(){};const S0=e=>e,l5=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Uq=1e-7,Gq=12;function Kq(e,t,n,r,o){let a,i,s=0;do i=t+(n-t)/2,a=l5(i,r,o)-e,a>0?n=i:t=i;while(Math.abs(a)>Uq&&++s<Gq);return i}function Yq(e,t,n,r){if(e===t&&n===r)return S0;const o=a=>Kq(a,0,1,e,n);return a=>a===0||a===1?a:l5(o(a),t,r)}const C0=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,k0=e=>t=>1-e(1-t),_0=e=>e*e,Xq=k0(_0),u5=C0(_0),c5=e=>1-Math.sin(Math.acos(e)),E0=k0(c5),Zq=C0(E0),d5=(e=1.525)=>t=>t*t*((e+1)*t-e),P0=d5(),Qq=k0(P0),Jq=C0(P0),eL=e=>{const t=d5(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},tL=eL(),nL={linear:S0,easeIn:_0,easeInOut:u5,easeOut:Xq,circIn:c5,circInOut:Zq,circOut:E0,backIn:P0,backInOut:Jq,backOut:Qq,anticipate:tL},C1=e=>{if(Array.isArray(e)){Yc(e.length===4);const[t,n,r,o]=e;return Yq(t,n,r,o)}else if(typeof e=="string")return nL[e];return e},rL=e=>Array.isArray(e)&&typeof e[0]!="number",k1=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&zr.test(t)&&!t.startsWith("url(")),jo=()=>({type:"spring",stiffness:500,damping:25,restSpeed:10}),Iu=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),zp=()=>({type:"keyframes",ease:"linear",duration:.3}),oL=e=>({type:"keyframes",duration:.8,values:e}),_1={x:jo,y:jo,z:jo,rotate:jo,rotateX:jo,rotateY:jo,rotateZ:jo,scaleX:Iu,scaleY:Iu,scale:Iu,opacity:zp,backgroundColor:zp,color:zp,default:Iu},aL=(e,t)=>{let n;return cl(t)?n=oL:n=_1[e]||_1.default,{to:t,...n(t)}},iL={...zC,color:$t,backgroundColor:$t,outlineColor:$t,fill:$t,stroke:$t,borderColor:$t,borderTopColor:$t,borderRightColor:$t,borderBottomColor:$t,borderLeftColor:$t,filter:nh,WebkitFilter:nh},T0=e=>iL[e];function F0(e,t){var n;let r=T0(e);return r!==nh&&(r=zr),(n=r.getAnimatableNone)===null||n===void 0?void 0:n.call(r,t)}const sL={current:!1},f5=1/60*1e3,lL=typeof performance<"u"?()=>performance.now():()=>Date.now(),p5=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(lL()),f5);function uL(e){let t=[],n=[],r=0,o=!1,a=!1;const i=new WeakSet,s={schedule:(l,u=!1,c=!1)=>{const d=c&&o,f=d?t:n;return u&&i.add(l),f.indexOf(l)===-1&&(f.push(l),d&&o&&(r=t.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),i.delete(l)},process:l=>{if(o){a=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const c=t[u];c(l),i.has(c)&&(s.schedule(c),e())}o=!1,a&&(a=!1,s.process(l))}};return s}const cL=40;let ah=!0,dl=!1,ih=!1;const ci={delta:0,timestamp:0},$l=["read","update","preRender","render","postRender"],hf=$l.reduce((e,t)=>(e[t]=uL(()=>dl=!0),e),{}),In=$l.reduce((e,t)=>{const n=hf[t];return e[t]=(r,o=!1,a=!1)=>(dl||fL(),n.schedule(r,o,a)),e},{}),_o=$l.reduce((e,t)=>(e[t]=hf[t].cancel,e),{}),Vp=$l.reduce((e,t)=>(e[t]=()=>hf[t].process(ci),e),{}),dL=e=>hf[e].process(ci),m5=e=>{dl=!1,ci.delta=ah?f5:Math.max(Math.min(e-ci.timestamp,cL),1),ci.timestamp=e,ih=!0,$l.forEach(dL),ih=!1,dl&&(ah=!1,p5(m5))},fL=()=>{dl=!0,ah=!0,ih||p5(m5)},Xc=()=>ci;function h5(e,t){const n=performance.now(),r=({timestamp:o})=>{const a=o-n;a>=t&&(_o.read(r),e(a-t))};return In.read(r,!0),()=>_o.read(r)}const Zc=(e,t,n)=>Math.min(Math.max(n,e),t),ut=(e,t,n)=>-n*e+n*t+e;function $p(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function pL({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,a=0,i=0;if(!t)o=a=i=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;o=$p(l,s,e+1/3),a=$p(l,s,e),i=$p(l,s,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(i*255),alpha:r}}const jp=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},mL=[th,Qo,za],hL=e=>mL.find(t=>t.test(e));function E1(e){const t=hL(e);let n=t.parse(e);return t===za&&(n=pL(n)),n}const g5=(e,t)=>{const n=E1(e),r=E1(t),o={...n};return a=>(o.red=jp(n.red,r.red,a),o.green=jp(n.green,r.green,a),o.blue=jp(n.blue,r.blue,a),o.alpha=ut(n.alpha,r.alpha,a),Qo.transform(o))};function v5(e,t){return typeof e=="number"?n=>ut(e,t,n):$t.test(e)?g5(e,t):b5(e,t)}const y5=(e,t)=>{const n=[...e],r=n.length,o=e.map((a,i)=>v5(a,t[i]));return a=>{for(let i=0;i<r;i++)n[i]=o[i](a);return n}},gL=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=v5(e[o],t[o]));return o=>{for(const a in r)n[a]=r[a](o);return n}};function P1(e){const t=zr.parse(e),n=t.length;let r=0,o=0;for(let a=0;a<n;a++)r||typeof t[a]=="number"?r++:o++;return{parsed:t,numNumbers:r,numColors:o}}const b5=(e,t)=>{const n=zr.createTransformer(t),r=P1(e),o=P1(t);return r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?mf(y5(r.parsed,o.parsed),n):i=>`${i>0?t:e}`},Qc=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},T1=(e,t)=>n=>ut(e,t,n);function vL(e){return typeof e=="number"?T1:typeof e=="string"?$t.test(e)?g5:b5:Array.isArray(e)?y5:typeof e=="object"?gL:T1}function yL(e,t,n){const r=[],o=n||vL(e[0]),a=e.length-1;for(let i=0;i<a;i++){let s=o(e[i],e[i+1]);if(t){const l=Array.isArray(t)?t[i]:t;s=mf(l,s)}r.push(s)}return r}function w5(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const a=e.length;Yc(a===t.length),Yc(!r||!Array.isArray(r)||r.length===a-1),e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const i=yL(t,r,o),s=i.length,l=u=>{let c=0;if(s>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=Qc(e[c],e[c+1],u);return i[c](d)};return n?u=>l(Zc(e[0],e[a-1],u)):l}function bL(e,t){return e.map(()=>t||u5).splice(0,e.length-1)}function wL(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function xL(e,t){return e.map(n=>n*t)}function SL({from:e=0,to:t=1,ease:n,offset:r,duration:o=300}){const a={done:!1,value:e},i=Array.isArray(t)?t:[e,t],s=xL(r&&r.length===i.length?r:wL(i),o);function l(){return w5(s,i,{ease:Array.isArray(n)?n:bL(i,n)})}let u=l();return{next:c=>(a.value=u(c),a.done=c>=o,a),flipTarget:()=>{i.reverse(),u=l()}}}const Wp=.001,CL=.01,F1=10,kL=.05,_L=1;function EL({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,a;Hq(e<=F1*1e3);let i=1-t;i=Zc(kL,_L,i),e=Zc(CL,F1,e/1e3),i<1?(o=u=>{const c=u*i,d=c*e,f=c-n,m=sh(u,i),v=Math.exp(-d);return Wp-f/m*v},a=u=>{const d=u*i*e,f=d*n+n,m=Math.pow(i,2)*Math.pow(u,2)*e,v=Math.exp(-d),h=sh(Math.pow(u,2),i);return(-o(u)+Wp>0?-1:1)*((f-m)*v)/h}):(o=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-Wp+c*d},a=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const s=5/e,l=TL(o,a,s);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:i*2*Math.sqrt(r*u),duration:e}}}const PL=12;function TL(e,t,n){let r=n;for(let o=1;o<PL;o++)r=r-e(r)/t(r);return r}function sh(e,t){return e*Math.sqrt(1-t*t)}const FL=["duration","bounce"],AL=["stiffness","damping","mass"];function A1(e,t){return t.some(n=>e[n]!==void 0)}function IL(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!A1(e,AL)&&A1(e,FL)){const n=EL(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function x5({from:e=0,to:t=1,restSpeed:n=2,restDelta:r=.01,...o}){const a={done:!1,value:e};let{stiffness:i,damping:s,mass:l,velocity:u,duration:c,isResolvedFromDuration:d}=IL(o),f=I1,m=I1;function v(){const h=u?-(u/1e3):0,b=t-e,y=s/(2*Math.sqrt(i*l)),g=Math.sqrt(i/l)/1e3;if(r===void 0&&(r=Math.min(Math.abs(t-e)/100,.4)),y<1){const w=sh(g,y);f=x=>{const k=Math.exp(-y*g*x);return t-k*((h+y*g*b)/w*Math.sin(w*x)+b*Math.cos(w*x))},m=x=>{const k=Math.exp(-y*g*x);return y*g*k*(Math.sin(w*x)*(h+y*g*b)/w+b*Math.cos(w*x))-k*(Math.cos(w*x)*(h+y*g*b)-w*b*Math.sin(w*x))}}else if(y===1)f=w=>t-Math.exp(-g*w)*(b+(h+g*b)*w);else{const w=g*Math.sqrt(y*y-1);f=x=>{const k=Math.exp(-y*g*x),_=Math.min(w*x,300);return t-k*((h+y*g*b)*Math.sinh(_)+w*b*Math.cosh(_))/w}}}return v(),{next:h=>{const b=f(h);if(d)a.done=h>=c;else{const y=m(h)*1e3,g=Math.abs(y)<=n,w=Math.abs(t-b)<=r;a.done=g&&w}return a.value=a.done?t:b,a},flipTarget:()=>{u=-u,[e,t]=[t,e],v()}}}x5.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const I1=e=>0;function RL({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:a}){const i={done:!1,value:t};let s=n*e;const l=t+s,u=a===void 0?l:a(l);return u!==l&&(s=u-t),{next:c=>{const d=-s*Math.exp(-c/r);return i.done=!(d>o||d<-o),i.value=i.done?u:u+d,i},flipTarget:()=>{}}}const NL={decay:RL,keyframes:SL,spring:x5};function S5(e,t,n=0){return e-t-n}function ML(e,t=0,n=0,r=!0){return r?S5(t+-e,t,n):t-(e-t)+n}function OL(e,t,n,r){return r?e>=t+n:e<=-n}const DL=e=>{const t=({delta:n})=>e(n);return{start:()=>In.update(t,!0),stop:()=>_o.update(t)}};function C5({from:e,autoplay:t=!0,driver:n=DL,elapsed:r=0,repeat:o=0,repeatType:a="loop",repeatDelay:i=0,onPlay:s,onStop:l,onComplete:u,onRepeat:c,onUpdate:d,type:f="keyframes",...m}){var v,h;let{to:b}=m,y,g=0,w=m.duration,x,k=!1,_=!0,E;const T=NL[Array.isArray(b)?"keyframes":f];!((h=(v=T).needsInterpolation)===null||h===void 0)&&h.call(v,e,b)&&(E=w5([0,100],[e,b],{clamp:!1}),e=0,b=100);const O=T({...m,from:e,to:b});function A(){g++,a==="reverse"?(_=g%2===0,r=ML(r,w,i,_)):(r=S5(r,w,i),a==="mirror"&&O.flipTarget()),k=!1,c&&c()}function q(){y.stop(),u&&u()}function $(Z){if(_||(Z=-Z),r+=Z,!k){const te=O.next(Math.max(0,r));x=te.value,E&&(x=E(x)),k=_?te.done:r<=0}d==null||d(x),k&&(g===0&&(w!=null||(w=r)),g<o?OL(r,w,i,_)&&A():q())}function z(){s==null||s(),y=n($),y.start()}return t&&z(),{stop:()=>{l==null||l(),y.stop()}}}function k5(e,t){return t?e*(1e3/t):0}function qL({from:e=0,velocity:t=0,min:n,max:r,power:o=.8,timeConstant:a=750,bounceStiffness:i=500,bounceDamping:s=10,restDelta:l=1,modifyTarget:u,driver:c,onUpdate:d,onComplete:f,onStop:m}){let v;function h(w){return n!==void 0&&w<n||r!==void 0&&w>r}function b(w){return n===void 0?r:r===void 0||Math.abs(n-w)<Math.abs(r-w)?n:r}function y(w){v==null||v.stop(),v=C5({...w,driver:c,onUpdate:x=>{var k;d==null||d(x),(k=w.onUpdate)===null||k===void 0||k.call(w,x)},onComplete:f,onStop:m})}function g(w){y({type:"spring",stiffness:i,damping:s,restDelta:l,...w})}if(h(e))g({from:e,velocity:t,to:b(e)});else{let w=o*t+e;typeof u<"u"&&(w=u(w));const x=b(w),k=x===n?-1:1;let _,E;const T=O=>{_=E,E=O,t=k5(O-_,Xc().delta),(k===1&&O>x||k===-1&&O<x)&&g({from:O,to:x,velocity:t})};y({type:"decay",from:e,velocity:t,timeConstant:a,power:o,restDelta:l,modifyTarget:u,onUpdate:h(w)?T:void 0})}return{stop:()=>v==null?void 0:v.stop()}}function LL({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:i,repeatDelay:s,from:l,...u}){return!!Object.keys(u).length}function BL({ease:e,times:t,yoyo:n,flip:r,loop:o,...a}){const i={...a};return t&&(i.offset=t),a.duration&&(i.duration=Kc(a.duration)),a.repeatDelay&&(i.repeatDelay=Kc(a.repeatDelay)),e&&(i.ease=rL(e)?e.map(C1):C1(e)),a.type==="tween"&&(i.type="keyframes"),(n||o||r)&&(n?i.repeatType="reverse":o?i.repeatType="loop":r&&(i.repeatType="mirror"),i.repeat=o||n||r||a.repeat),a.type!=="spring"&&(i.type="keyframes"),i}function zL(e,t){var n,r;return(r=(n=(A0(e,t)||{}).delay)!==null&&n!==void 0?n:e.delay)!==null&&r!==void 0?r:0}function VL(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function $L(e,t,n){return Array.isArray(t.to)&&e.duration===void 0&&(e.duration=.8),VL(t),LL(e)||(e={...e,...aL(n,t.to)}),{...t,...BL(e)}}function jL(e,t,n,r,o){const a=A0(r,e)||{};let i=a.from!==void 0?a.from:t.get();const s=k1(e,n);i==="none"&&s&&typeof n=="string"?i=F0(e,n):R1(i)&&typeof n=="string"?i=N1(n):!Array.isArray(n)&&R1(n)&&typeof i=="string"&&(n=N1(i));const l=k1(e,i);function u(){const d={from:i,to:n,velocity:t.getVelocity(),onComplete:o,onUpdate:f=>t.set(f)};return a.type==="inertia"||a.type==="decay"?qL({...d,...a}):C5({...$L(a,d,e),onUpdate:f=>{d.onUpdate(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{d.onComplete(),a.onComplete&&a.onComplete()}})}function c(){const d=YC(n);return t.set(d),o(),a.onUpdate&&a.onUpdate(d),a.onComplete&&a.onComplete(),{stop:()=>{}}}return!l||!s||a.type===!1?c:u}function R1(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function N1(e){return typeof e=="number"?0:F0("",e)}function A0(e,t){return e[t]||e.default||e}function I0(e,t,n,r={}){return sL.current&&(r={type:!1}),t.start(o=>{let a;const i=jL(e,t,n,r,o),s=zL(r,e),l=()=>a=i();let u;return s?u=h5(l,Kc(s)):l(),()=>{u&&u(),a&&a.stop()}})}const WL=e=>/^\-?\d*\.?\d+$/.test(e),HL=e=>/^0[^.\s]+$/.test(e);function R0(e,t){e.indexOf(t)===-1&&e.push(t)}function N0(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ns{constructor(){this.subscriptions=[]}add(t){return R0(this.subscriptions,t),()=>N0(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(!!o)if(o===1)this.subscriptions[0](t,n,r);else for(let a=0;a<o;a++){const i=this.subscriptions[a];i&&i(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const UL=e=>!isNaN(parseFloat(e));class GL{constructor(t){this.version="7.6.18",this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Ns,this.velocityUpdateSubscribers=new Ns,this.renderSubscribers=new Ns,this.canTrackVelocity=!1,this.updateAndNotify=(n,r=!0)=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:a}=Xc();this.lastUpdated!==a&&(this.timeDelta=o,this.lastUpdated=a,In.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.updateSubscribers.notify(this.current),this.velocityUpdateSubscribers.getSize()&&this.velocityUpdateSubscribers.notify(this.getVelocity()),r&&this.renderSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>In.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.velocityUpdateSubscribers.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=UL(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}onRenderRequest(t){return t(this.get()),this.renderSubscribers.add(t)}attach(t){this.passiveEffect=t}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?k5(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.stopAnimation=t(n)}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop()}}function _i(e){return new GL(e)}const _5=e=>t=>t.test(e),KL={test:e=>e==="auto",parse:e=>e},E5=[wa,pe,Sr,no,jD,$D,KL],ts=e=>E5.find(_5(e)),YL=[...E5,$t,zr],XL=e=>YL.find(_5(e));function ZL(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function QL(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function gf(e,t,n){const r=e.getProps();return y0(r,t,n!==void 0?n:r.custom,ZL(e),QL(e))}function JL(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,_i(n))}function eB(e,t){const n=gf(e,t);let{transitionEnd:r={},transition:o={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const i in a){const s=YC(a[i]);JL(e,i,s)}}function tB(e,t,n){var r,o;const a=Object.keys(t).filter(s=>!e.hasValue(s)),i=a.length;if(!!i)for(let s=0;s<i;s++){const l=a[s],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(o=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&o!==void 0?o:t[l]),c!=null&&(typeof c=="string"&&(WL(c)||HL(c))?c=parseFloat(c):!XL(c)&&zr.test(u)&&(c=F0(l,u)),e.addValue(l,_i(c)),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function nB(e,t){return t?(t[e]||t.default||t).from:void 0}function rB(e,t,n){var r;const o={};for(const a in e){const i=nB(a,t);o[a]=i!==void 0?i:(r=n.getValue(a))===null||r===void 0?void 0:r.get()}return o}function Jc(e){return Boolean(Er(e)&&e.add)}function oB(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(a=>lh(e,a,n));r=Promise.all(o)}else if(typeof t=="string")r=lh(e,t,n);else{const o=typeof t=="function"?gf(e,t,n.custom):t;r=P5(e,o,n)}return r.then(()=>e.notify("AnimationComplete",t))}function lh(e,t,n={}){var r;const o=gf(e,t,n.custom);let{transition:a=e.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(a=n.transitionOverride);const i=o?()=>P5(e,o,n):()=>Promise.resolve(),s=!((r=e.variantChildren)===null||r===void 0)&&r.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=a;return aB(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[u,c]=l==="beforeChildren"?[i,s]:[s,i];return u().then(c)}else return Promise.all([i(),s(n.delay)])}function P5(e,t,{delay:n=0,transitionOverride:r,type:o}={}){var a;let{transition:i=e.getDefaultTransition(),transitionEnd:s,...l}=e.makeTargetAnimatable(t);const u=e.getValue("willChange");r&&(i=r);const c=[],d=o&&((a=e.animationState)===null||a===void 0?void 0:a.getState()[o]);for(const f in l){const m=e.getValue(f),v=l[f];if(!m||v===void 0||d&&sB(d,f))continue;let h={delay:n,...i};e.shouldReduceMotion&&$i.has(f)&&(h={...h,type:!1,delay:0});let b=I0(f,m,v,h);Jc(u)&&(u.add(f),b=b.then(()=>u.remove(f))),c.push(b)}return Promise.all(c).then(()=>{s&&eB(e,s)})}function aB(e,t,n=0,r=0,o=1,a){const i=[],s=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(iB).forEach((u,c)=>{i.push(lh(u,t,{...a,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(i)}function iB(e,t){return e.sortNodePosition(t)}function sB({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}const M0=[He.Animate,He.InView,He.Focus,He.Hover,He.Tap,He.Drag,He.Exit],lB=[...M0].reverse(),uB=M0.length;function cB(e){return t=>Promise.all(t.map(({animation:n,options:r})=>oB(e,n,r)))}function dB(e){let t=cB(e);const n=pB();let r=!0;const o=(l,u)=>{const c=gf(e,u);if(c){const{transition:d,transitionEnd:f,...m}=c;l={...l,...m,...f}}return l};function a(l){t=l(e)}function i(l,u){var c;const d=e.getProps(),f=e.getVariantContext(!0)||{},m=[],v=new Set;let h={},b=1/0;for(let g=0;g<uB;g++){const w=lB[g],x=n[w],k=(c=d[w])!==null&&c!==void 0?c:f[w],_=sl(k),E=w===u?x.isActive:null;E===!1&&(b=g);let T=k===f[w]&&k!==d[w]&&_;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),x.protectedKeys={...h},!x.isActive&&E===null||!k&&!x.prevProp||cf(k)||typeof k=="boolean")continue;const O=fB(x.prevProp,k);let A=O||w===u&&x.isActive&&!T&&_||g>b&&_;const q=Array.isArray(k)?k:[k];let $=q.reduce(o,{});E===!1&&($={});const{prevResolvedValues:z={}}=x,Z={...z,...$},te=V=>{A=!0,v.delete(V),x.needsAnimating[V]=!0};for(const V in Z){const L=$[V],N=z[V];h.hasOwnProperty(V)||(L!==N?cl(L)&&cl(N)?!s5(L,N)||O?te(V):x.protectedKeys[V]=!0:L!==void 0?te(V):v.add(V):L!==void 0&&v.has(V)?te(V):x.protectedKeys[V]=!0)}x.prevProp=k,x.prevResolvedValues=$,x.isActive&&(h={...h,...$}),r&&e.blockInitialAnimation&&(A=!1),A&&!T&&m.push(...q.map(V=>({animation:V,options:{type:w,...l}})))}if(v.size){const g={};v.forEach(w=>{const x=e.getBaseTarget(w);x!==void 0&&(g[w]=x)}),m.push({animation:g})}let y=Boolean(m.length);return r&&d.initial===!1&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(m):Promise.resolve()}function s(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(m=>{var v;return(v=m.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const f=i(c,l);for(const m in n)n[m].protectedKeys={};return f}return{animateChanges:i,setActive:s,setAnimateFunction:a,getState:()=>n}}function fB(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!s5(t,e):!1}function Wo(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function pB(){return{[He.Animate]:Wo(!0),[He.InView]:Wo(),[He.Hover]:Wo(),[He.Tap]:Wo(),[He.Drag]:Wo(),[He.Focus]:Wo(),[He.Exit]:Wo()}}const mB={animation:po(({visualElement:e,animate:t})=>{e.animationState||(e.animationState=dB(e)),cf(t)&&p.exports.useEffect(()=>t.subscribe(e),[t])}),exit:po(e=>{const{custom:t,visualElement:n}=e,[r,o]=x0(),a=p.exports.useContext(Vi);p.exports.useEffect(()=>{n.isPresent=r;const i=n.animationState&&n.animationState.setActive(He.Exit,!r,{custom:a&&a.custom||t});i&&!r&&i.then(o)},[r])})},M1=(e,t)=>Math.abs(e-t);function hB(e,t){const n=M1(e.x,t.x),r=M1(e.y,t.y);return Math.sqrt(n**2+r**2)}class T5{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=Up(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,d=hB(u.offset,{x:0,y:0})>=3;if(!c&&!d)return;const{point:f}=u,{timestamp:m}=Xc();this.history.push({...f,timestamp:m});const{onStart:v,onMove:h}=this.handlers;c||(v&&v(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{if(this.lastMoveEvent=u,this.lastMoveEventInfo=Hp(c,this.transformPagePoint),ZC(u)&&u.buttons===0){this.handlePointerUp(u,c);return}In.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{this.end();const{onEnd:d,onSessionEnd:f}=this.handlers,m=Up(Hp(c,this.transformPagePoint),this.history);this.startEvent&&d&&d(u,m),f&&f(u,m)},QC(t)&&t.touches.length>1)return;this.handlers=n,this.transformPagePoint=r;const o=b0(t),a=Hp(o,this.transformPagePoint),{point:i}=a,{timestamp:s}=Xc();this.history=[{...i,timestamp:s}];const{onSessionStart:l}=n;l&&l(t,Up(a,this.history)),this.removeListeners=mf(ui(window,"pointermove",this.handlePointerMove),ui(window,"pointerup",this.handlePointerUp),ui(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),_o.update(this.updatePoint)}}function Hp(e,t){return t?{point:t(e.point)}:e}function O1(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Up({point:e},t){return{point:e,delta:O1(e,F5(t)),offset:O1(e,gB(t)),velocity:vB(t,.1)}}function gB(e){return e[0]}function F5(e){return e[e.length-1]}function vB(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=F5(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Kc(t)));)n--;if(!r)return{x:0,y:0};const a=(o.timestamp-r.timestamp)/1e3;if(a===0)return{x:0,y:0};const i={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return i.x===1/0&&(i.x=0),i.y===1/0&&(i.y=0),i}function hn(e){return e.max-e.min}function uh(e,t=0,n=.01){return Math.abs(e-t)<=n}function D1(e,t,n,r=.5){e.origin=r,e.originPoint=ut(t.min,t.max,e.origin),e.scale=hn(n)/hn(t),(uh(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ut(n.min,n.max,e.origin)-e.originPoint,(uh(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Ms(e,t,n,r){D1(e.x,t.x,n.x,r==null?void 0:r.originX),D1(e.y,t.y,n.y,r==null?void 0:r.originY)}function q1(e,t,n){e.min=n.min+t.min,e.max=e.min+hn(t)}function yB(e,t,n){q1(e.x,t.x,n.x),q1(e.y,t.y,n.y)}function L1(e,t,n){e.min=t.min-n.min,e.max=e.min+hn(t)}function Os(e,t,n){L1(e.x,t.x,n.x),L1(e.y,t.y,n.y)}function bB(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ut(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ut(n,e,r.max):Math.min(e,n)),e}function B1(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function wB(e,{top:t,left:n,bottom:r,right:o}){return{x:B1(e.x,n,o),y:B1(e.y,t,r)}}function z1(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function xB(e,t){return{x:z1(e.x,t.x),y:z1(e.y,t.y)}}function SB(e,t){let n=.5;const r=hn(e),o=hn(t);return o>r?n=Qc(t.min,t.max-r,e.min):r>o&&(n=Qc(e.min,e.max-o,t.min)),Zc(0,1,n)}function CB(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const ch=.35;function kB(e=ch){return e===!1?e=0:e===!0&&(e=ch),{x:V1(e,"left","right"),y:V1(e,"top","bottom")}}function V1(e,t,n){return{min:$1(e,t),max:$1(e,n)}}function $1(e,t){var n;return typeof e=="number"?e:(n=e[t])!==null&&n!==void 0?n:0}const j1=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ds=()=>({x:j1(),y:j1()}),W1=()=>({min:0,max:0}),yt=()=>({x:W1(),y:W1()});function dr(e){return[e("x"),e("y")]}function A5({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function _B({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function EB(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Gp(e){return e===void 0||e===1}function dh({scale:e,scaleX:t,scaleY:n}){return!Gp(e)||!Gp(t)||!Gp(n)}function Ho(e){return dh(e)||I5(e)||e.z||e.rotate||e.rotateX||e.rotateY}function I5(e){return H1(e.x)||H1(e.y)}function H1(e){return e&&e!=="0%"}function ed(e,t,n){const r=e-n,o=t*r;return n+o}function U1(e,t,n,r,o){return o!==void 0&&(e=ed(e,o,r)),ed(e,n,r)+t}function fh(e,t=0,n=1,r,o){e.min=U1(e.min,t,n,r,o),e.max=U1(e.max,t,n,r,o)}function R5(e,{x:t,y:n}){fh(e.x,t.translate,t.scale,t.originPoint),fh(e.y,n.translate,n.scale,n.originPoint)}function PB(e,t,n,r=!1){var o,a;const i=n.length;if(!i)return;t.x=t.y=1;let s,l;for(let u=0;u<i;u++)s=n[u],l=s.projectionDelta,((a=(o=s.instance)===null||o===void 0?void 0:o.style)===null||a===void 0?void 0:a.display)!=="contents"&&(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Va(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,R5(e,l)),r&&Ho(s.latestValues)&&Va(e,s.latestValues));t.x=G1(t.x),t.y=G1(t.y)}function G1(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function oo(e,t){e.min=e.min+t,e.max=e.max+t}function K1(e,t,[n,r,o]){const a=t[o]!==void 0?t[o]:.5,i=ut(e.min,e.max,a);fh(e,t[n],t[r],i,t.scale)}const TB=["x","scaleX","originX"],FB=["y","scaleY","originY"];function Va(e,t){K1(e.x,t,TB),K1(e.y,t,FB)}function N5(e,t){return A5(EB(e.getBoundingClientRect(),t))}function AB(e,t,n){const r=N5(e,n),{scroll:o}=t;return o&&(oo(r.x,o.offset.x),oo(r.y,o.offset.y)),r}const IB=new WeakMap;class RB{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=yt(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){if(this.visualElement.isPresent===!1)return;const r=s=>{this.stopAnimation(),n&&this.snapToCursor(b0(s,"page").point)},o=(s,l)=>{var u;const{drag:c,dragPropagation:d,onDragStart:f}=this.getProps();c&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=n5(c),!this.openGlobalLock)||(this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),dr(m=>{var v,h;let b=this.getAxisMotionValue(m).get()||0;if(Sr.test(b)){const y=(h=(v=this.visualElement.projection)===null||v===void 0?void 0:v.layout)===null||h===void 0?void 0:h.layoutBox[m];y&&(b=hn(y)*(parseFloat(b)/100))}this.originPoint[m]=b}),f==null||f(s,l),(u=this.visualElement.animationState)===null||u===void 0||u.setActive(He.Drag,!0))},a=(s,l)=>{const{dragPropagation:u,dragDirectionLock:c,onDirectionLock:d,onDrag:f}=this.getProps();if(!u&&!this.openGlobalLock)return;const{offset:m}=l;if(c&&this.currentDirection===null){this.currentDirection=NB(m),this.currentDirection!==null&&(d==null||d(this.currentDirection));return}this.updateAxis("x",l.point,m),this.updateAxis("y",l.point,m),this.visualElement.render(),f==null||f(s,l)},i=(s,l)=>this.stop(s,l);this.panSession=new T5(t,{onSessionStart:r,onStart:o,onMove:a,onSessionEnd:i},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a==null||a(t,n)}cancel(){var t,n;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),(t=this.panSession)===null||t===void 0||t.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(n=this.visualElement.animationState)===null||n===void 0||n.setActive(He.Drag,!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!Ru(t,o,this.currentDirection))return;const a=this.getAxisMotionValue(t);let i=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(i=bB(i,this.constraints[t],this.elastic[t])),a.set(i)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},o=this.constraints;t&&Ba(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=wB(r.layoutBox,t):this.constraints=!1,this.elastic=kB(n),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&dr(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=CB(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ba(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=AB(r,o.root,this.visualElement.getTransformPagePoint());let i=xB(o.layout.layoutBox,a);if(n){const s=n(_B(i));this.hasMutatedConstraints=!!s,s&&(i=A5(s))}return i}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:i,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=dr(c=>{var d;if(!Ru(c,n,this.currentDirection))return;let f=(d=l==null?void 0:l[c])!==null&&d!==void 0?d:{};i&&(f={min:0,max:0});const m=o?200:1e6,v=o?40:1e7,h={type:"inertia",velocity:r?t[c]:0,bounceStiffness:m,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(c,h)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return I0(t,r,0,n)}stopAnimation(){dr(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){var n,r;const o="_drag"+t.toUpperCase(),a=this.visualElement.getProps()[o];return a||this.visualElement.getValue(t,(r=(n=this.visualElement.getProps().initial)===null||n===void 0?void 0:n[t])!==null&&r!==void 0?r:0)}snapToCursor(t){dr(n=>{const{drag:r}=this.getProps();if(!Ru(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(n);if(o&&o.layout){const{min:i,max:s}=o.layout.layoutBox[n];a.set(t[n]-ut(i,s,.5))}})}scalePositionWithinConstraints(){var t;if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!Ba(r)||!o||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};dr(s=>{const l=this.getAxisMotionValue(s);if(l){const u=l.get();a[s]=SB({min:u,max:u},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",(t=o.root)===null||t===void 0||t.updateScroll(),o.updateLayout(),this.resolveConstraints(),dr(s=>{if(!Ru(s,n,null))return;const l=this.getAxisMotionValue(s),{min:u,max:c}=this.constraints[s];l.set(ut(u,c,a[s]))})}addListeners(){var t;if(!this.visualElement.current)return;IB.set(this.visualElement,this);const n=this.visualElement.current,r=ui(n,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),o=()=>{const{dragConstraints:u}=this.getProps();Ba(u)&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,i=a.addEventListener("measure",o);a&&!a.layout&&((t=a.root)===null||t===void 0||t.updateScroll(),a.updateLayout()),o();const s=pf(window,"resize",()=>this.scalePositionWithinConstraints()),l=a.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(dr(d=>{const f=this.getAxisMotionValue(d);!f||(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{s(),r(),i(),l==null||l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:i=ch,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:i,dragMomentum:s}}}function Ru(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function NB(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}function MB(e){const{dragControls:t,visualElement:n}=e,r=ff(()=>new RB(n));p.exports.useEffect(()=>t&&t.subscribe(r),[r,t]),p.exports.useEffect(()=>r.addListeners(),[r])}function OB({onPan:e,onPanStart:t,onPanEnd:n,onPanSessionStart:r,visualElement:o}){const a=e||t||n||r,i=p.exports.useRef(null),{transformPagePoint:s}=p.exports.useContext(c0),l={onSessionStart:r,onStart:t,onMove:e,onEnd:(c,d)=>{i.current=null,n&&n(c,d)}};p.exports.useEffect(()=>{i.current!==null&&i.current.updateHandlers(l)});function u(c){i.current=new T5(c,l,{transformPagePoint:s})}Gc(o,"pointerdown",a&&u),w0(()=>i.current&&i.current.end())}const DB={pan:po(OB),drag:po(MB)};function ph(e){return typeof e=="string"&&e.startsWith("var(--")}const M5=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function qB(e){const t=M5.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function mh(e,t,n=1){const[r,o]=qB(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);return a?a.trim():ph(o)?mh(o,t,n+1):o}function LB(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const a=o.get();if(!ph(a))return;const i=mh(a,r);i&&o.set(i)});for(const o in t){const a=t[o];if(!ph(a))continue;const i=mh(a,r);!i||(t[o]=i,n&&n[o]===void 0&&(n[o]=a))}return{target:t,transitionEnd:n}}const BB=new Set(["width","height","top","left","right","bottom","x","y"]),O5=e=>BB.has(e),zB=e=>Object.keys(e).some(O5),D5=(e,t)=>{e.set(t,!1),e.set(t)},Y1=e=>e===wa||e===pe;var X1;(function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"})(X1||(X1={}));const Z1=(e,t)=>parseFloat(e.split(", ")[t]),Q1=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return Z1(o[1],t);{const a=r.match(/^matrix\((.+)\)$/);return a?Z1(a[1],e):0}},VB=new Set(["x","y","z"]),$B=Hc.filter(e=>!VB.has(e));function jB(e){const t=[];return $B.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const J1={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Q1(4,13),y:Q1(5,14)},WB=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,a=getComputedStyle(o),{display:i}=a,s={};i==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{s[u]=J1[u](r,a)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);D5(c,s[u]),e[u]=J1[u](l,a)}),e},HB=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(O5);let a=[],i=!1;const s=[];if(o.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=ts(c);const f=t[l];let m;if(cl(f)){const v=f.length,h=f[0]===null?1:0;c=f[h],d=ts(c);for(let b=h;b<v;b++)m?Yc(ts(f[b])===m):m=ts(f[b])}else m=ts(f);if(d!==m)if(Y1(d)&&Y1(m)){const v=u.get();typeof v=="string"&&u.set(parseFloat(v)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&m===pe&&(t[l]=f.map(parseFloat))}else(d==null?void 0:d.transform)&&(m==null?void 0:m.transform)&&(c===0||f===0)?c===0?u.set(m.transform(c)):t[l]=d.transform(f):(i||(a=jB(e),i=!0),s.push(l),r[l]=r[l]!==void 0?r[l]:t[l],D5(u,f))}),s.length){const l=s.indexOf("height")>=0?window.pageYOffset:null,u=WB(t,e,s);return a.length&&a.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),ba&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function UB(e,t,n,r){return zB(t)?HB(e,t,n,r):{target:t,transitionEnd:r}}const GB=(e,t,n,r)=>{const o=LB(e,t,r);return t=o.target,r=o.transitionEnd,UB(e,t,n,r)},hh={current:null},q5={current:!1};function KB(){if(q5.current=!0,!!ba)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>hh.current=e.matches;e.addListener(t),t()}else hh.current=!1}function YB(e,t,n){const{willChange:r}=t;for(const o in t){const a=t[o],i=n[o];if(Er(a))e.addValue(o,a),Jc(r)&&r.add(o);else if(Er(i))e.addValue(o,_i(a)),Jc(r)&&r.remove(o);else if(i!==a)if(e.hasValue(o)){const s=e.getValue(o);!s.hasAnimated&&s.set(a)}else{const s=e.getStaticValue(o);e.addValue(o,_i(s!==void 0?s:a))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const L5=Object.keys(ll),XB=L5.length,ew=["AnimationStart","AnimationComplete","Update","Unmount","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class ZB{constructor({parent:t,props:n,reducedMotionConfig:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.isPresent=!0,this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{!this.current||(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>In.render(this.render,!1,!0);const{latestValues:i,renderState:s}=o;this.latestValues=i,this.baseTarget={...i},this.initialValues=n.initial?{...i}:{},this.renderState=s,this.parent=t,this.props=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.isControllingVariants=df(n),this.isVariantNode=FC(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:l,...u}=this.scrapeMotionValuesFromProps(n);for(const c in u){const d=u[c];i[c]!==void 0&&Er(d)&&(d.set(i[c],!1),Jc(l)&&l.add(c))}}scrapeMotionValuesFromProps(t){return{}}mount(t){var n;this.current=t,this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=(n=this.parent)===null||n===void 0?void 0:n.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),q5.current||KB(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:hh.current,this.parent&&this.parent.children.add(this),this.setProps(this.props)}unmount(){var t,n,r;(t=this.projection)===null||t===void 0||t.unmount(),_o.update(this.notifyUpdate),_o.render(this.render),this.valueSubscriptions.forEach(o=>o()),(n=this.removeFromVariantTree)===null||n===void 0||n.call(this),(r=this.parent)===null||r===void 0||r.children.delete(this);for(const o in this.events)this.events[o].clear();this.current=null}bindToMotionValue(t,n){const r=$i.has(t),o=n.onChange(i=>{this.latestValues[t]=i,this.props.onUpdate&&In.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.onRenderRequest(this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures(t,n,r,o,a,i){const s=[];for(let l=0;l<XB;l++){const u=L5[l],{isEnabled:c,Component:d}=ll[u];c(t)&&d&&s.push(p.exports.createElement(d,{key:u,...t,visualElement:this}))}if(!this.projection&&a){this.projection=new a(o,this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:f}=t;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:Boolean(c)||d&&Ba(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:f})}return s}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):yt()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}setProps(t){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.props=t;for(let n=0;n<ew.length;n++){const r=ew[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o=t["on"+r];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=YB(this,this.scrapeMotionValuesFromProps(t),this.prevMotionValues)}getProps(){return this.props}getVariant(t){var n;return(n=this.props.variants)===null||n===void 0?void 0:n[t]}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){var t;return this.isVariantNode?this:(t=this.parent)===null||t===void 0?void 0:t.getClosestVariantNode()}getVariantContext(t=!1){var n,r;if(t)return(n=this.parent)===null||n===void 0?void 0:n.getVariantContext();if(!this.isControllingVariants){const a=((r=this.parent)===null||r===void 0?void 0:r.getVariantContext())||{};return this.props.initial!==void 0&&(a.initial=this.props.initial),a}const o={};for(let a=0;a<QB;a++){const i=B5[a],s=this.props[i];(sl(s)||s===!1)&&(o[i]=s)}return o}addVariantChild(t){var n;const r=this.getClosestVariantNode();if(r)return(n=r.variantChildren)===null||n===void 0||n.add(t),()=>r.variantChildren.delete(t)}addValue(t,n){this.hasValue(t)&&this.removeValue(t),this.values.set(t,n),this.latestValues[t]=n.get(),this.bindToMotionValue(t,n)}removeValue(t){var n;this.values.delete(t),(n=this.valueSubscriptions.get(t))===null||n===void 0||n(),this.valueSubscriptions.delete(t),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=_i(n),this.addValue(t,r)),r}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=y0(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!Er(a)?a:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Ns),this.events[t].add(n)}notify(t,...n){var r;(r=this.events[t])===null||r===void 0||r.notify(...n)}}const B5=["initial",...M0],QB=B5.length;class z5 extends ZB{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){var r;return(r=t.style)===null||r===void 0?void 0:r[n]}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},a){let i=rB(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),i&&(i=o(i))),a){tB(this,r,i);const s=GB(this,r,i,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function JB(e){return window.getComputedStyle(e)}class ez extends z5{readValueFromInstance(t,n){if($i.has(n)){const r=T0(n);return r&&r.default||0}else{const r=JB(t),o=(RC(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return N5(t,n)}build(t,n,r,o){m0(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t){return v0(t)}renderInstance(t,n,r,o){HC(t,n,r,o)}}class tz extends z5{getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){var r;return $i.has(n)?((r=T0(n))===null||r===void 0?void 0:r.default)||0:(n=UC.has(n)?n:WC(n),t.getAttribute(n))}measureInstanceViewportBox(){return yt()}scrapeMotionValuesFromProps(t){return KC(t)}build(t,n,r,o){g0(t,n,r,o.transformTemplate)}renderInstance(t,n,r,o){GC(t,n,r,o)}}const nz=(e,t)=>f0(e)?new tz(t,{enableHardwareAcceleration:!1}):new ez(t,{enableHardwareAcceleration:!0});function tw(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ns={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(pe.test(e))e=parseFloat(e);else return e;const n=tw(e,t.target.x),r=tw(e,t.target.y);return`${n}% ${r}%`}},nw="_$css",rz={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=e.includes("var("),a=[];o&&(e=e.replace(M5,m=>(a.push(m),nw)));const i=zr.parse(e);if(i.length>5)return r;const s=zr.createTransformer(e),l=typeof i[0]!="number"?1:0,u=n.x.scale*t.x,c=n.y.scale*t.y;i[0+l]/=u,i[1+l]/=c;const d=ut(u,c,.5);typeof i[2+l]=="number"&&(i[2+l]/=d),typeof i[3+l]=="number"&&(i[3+l]/=d);let f=s(i);if(o){let m=0;f=f.replace(nw,()=>{const v=a[m];return m++,v})}return f}};class oz extends P.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=t;DD(iz),a&&(n.group&&n.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),As.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:a}=this.props,i=r.projection;return i&&(i.isPresent=a,o||t.layoutDependency!==n||n===void 0?i.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?i.promote():i.relegate()||In.postRender(()=>{var s;!((s=i.getStack())===null||s===void 0)&&s.members.length||this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n!=null&&n.group&&n.group.remove(o),r!=null&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t==null||t()}render(){return null}}function az(e){const[t,n]=x0(),r=p.exports.useContext(d0);return S(oz,{...e,layoutGroup:r,switchLayoutGroup:p.exports.useContext(AC),isPresent:t,safeToRemove:n})}const iz={borderRadius:{...ns,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ns,borderTopRightRadius:ns,borderBottomLeftRadius:ns,borderBottomRightRadius:ns,boxShadow:rz},sz={measureLayout:az};function lz(e,t,n={}){const r=Er(e)?e:_i(e);return I0("",r,t,n),{stop:()=>r.stop(),isAnimating:()=>r.isAnimating()}}const V5=["TopLeft","TopRight","BottomLeft","BottomRight"],uz=V5.length,rw=e=>typeof e=="string"?parseFloat(e):e,ow=e=>typeof e=="number"||pe.test(e);function cz(e,t,n,r,o,a){var i,s,l,u;o?(e.opacity=ut(0,(i=n.opacity)!==null&&i!==void 0?i:1,dz(r)),e.opacityExit=ut((s=t.opacity)!==null&&s!==void 0?s:1,0,fz(r))):a&&(e.opacity=ut((l=t.opacity)!==null&&l!==void 0?l:1,(u=n.opacity)!==null&&u!==void 0?u:1,r));for(let c=0;c<uz;c++){const d=`border${V5[c]}Radius`;let f=aw(t,d),m=aw(n,d);if(f===void 0&&m===void 0)continue;f||(f=0),m||(m=0),f===0||m===0||ow(f)===ow(m)?(e[d]=Math.max(ut(rw(f),rw(m),r),0),(Sr.test(m)||Sr.test(f))&&(e[d]+="%")):e[d]=m}(t.rotate||n.rotate)&&(e.rotate=ut(t.rotate||0,n.rotate||0,r))}function aw(e,t){var n;return(n=e[t])!==null&&n!==void 0?n:e.borderRadius}const dz=$5(0,.5,E0),fz=$5(.5,.95,S0);function $5(e,t,n){return r=>r<e?0:r>t?1:n(Qc(e,t,r))}function iw(e,t){e.min=t.min,e.max=t.max}function Wn(e,t){iw(e.x,t.x),iw(e.y,t.y)}function sw(e,t,n,r,o){return e-=t,e=ed(e,1/n,r),o!==void 0&&(e=ed(e,1/o,r)),e}function pz(e,t=0,n=1,r=.5,o,a=e,i=e){if(Sr.test(t)&&(t=parseFloat(t),t=ut(i.min,i.max,t/100)-i.min),typeof t!="number")return;let s=ut(a.min,a.max,r);e===a&&(s-=t),e.min=sw(e.min,t,n,s,o),e.max=sw(e.max,t,n,s,o)}function lw(e,t,[n,r,o],a,i){pz(e,t[n],t[r],t[o],t.scale,a,i)}const mz=["x","scaleX","originX"],hz=["y","scaleY","originY"];function uw(e,t,n,r){lw(e.x,t,mz,n==null?void 0:n.x,r==null?void 0:r.x),lw(e.y,t,hz,n==null?void 0:n.y,r==null?void 0:r.y)}function cw(e){return e.translate===0&&e.scale===1}function j5(e){return cw(e.x)&&cw(e.y)}function W5(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function dw(e){return hn(e.x)/hn(e.y)}class gz{constructor(){this.members=[]}add(t){R0(this.members,t),t.scheduleRender()}remove(t){if(N0(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){var r;const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,n&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),!((r=t.root)===null||r===void 0)&&r.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:a}=t.options;a===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,o,a,i;(r=(n=t.options).onExitComplete)===null||r===void 0||r.call(n),(i=(o=t.resumingFrom)===null||o===void 0?void 0:(a=o.options).onExitComplete)===null||i===void 0||i.call(a)})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function fw(e,t,n){let r="";const o=e.x.translate/t.x,a=e.y.translate/t.y;if((o||a)&&(r=`translate3d(${o}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const i=e.x.scale*t.x,s=e.y.scale*t.y;return(i!==1||s!==1)&&(r+=`scale(${i}, ${s})`),r||"none"}const vz=(e,t)=>e.depth-t.depth;class yz{constructor(){this.children=[],this.isDirty=!1}add(t){R0(this.children,t),this.isDirty=!0}remove(t){N0(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(vz),this.isDirty=!1,this.children.forEach(t)}}const pw=["","X","Y","Z"],mw=1e3;let bz=0;function H5({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(i,s={},l=t==null?void 0:t()){this.id=bz++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isTransformDirty=!1,this.isProjectionDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.nodes.forEach(Sz),this.nodes.forEach(_z),this.nodes.forEach(Ez)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=i,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,i&&this.root.registerPotentialNode(i,this);for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new yz)}addEventListener(i,s){return this.eventHandlers.has(i)||this.eventHandlers.set(i,new Ns),this.eventHandlers.get(i).add(s)}notifyListeners(i,...s){const l=this.eventHandlers.get(i);l==null||l.notify(...s)}hasListeners(i){return this.eventHandlers.has(i)}registerPotentialNode(i,s){this.potentialNodes.set(i,s)}mount(i,s=!1){var l;if(this.instance)return;this.isSVG=i instanceof SVGElement&&i.tagName!=="svg",this.instance=i;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(i),this.root.nodes.add(this),(l=this.parent)===null||l===void 0||l.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),s&&(c||u)&&(this.isLayoutDirty=!0),e){let f;const m=()=>this.root.updateBlockedByResize=!1;e(i,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=h5(m,250),As.hasAnimatedSinceResize&&(As.hasAnimatedSinceResize=!1,this.nodes.forEach(gw))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:m,hasRelativeTargetChanged:v,layout:h})=>{var b,y,g,w,x;if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const k=(y=(b=this.options.transition)!==null&&b!==void 0?b:d.getDefaultTransition())!==null&&y!==void 0?y:Iz,{onLayoutAnimationStart:_,onLayoutAnimationComplete:E}=d.getProps(),T=!this.targetLayout||!W5(this.targetLayout,h)||v,O=!m&&v;if(((g=this.resumeFrom)===null||g===void 0?void 0:g.instance)||O||m&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,O);const A={...A0(k,"layout"),onPlay:_,onComplete:E};d.shouldReduceMotion&&(A.delay=0,A.type=!1),this.startAnimation(A)}else!m&&this.animationProgress===0&&gw(this),this.isLead()&&((x=(w=this.options).onExitComplete)===null||x===void 0||x.call(w));this.targetLayout=h})}unmount(){var i,s;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),(i=this.getStack())===null||i===void 0||i.remove(this),(s=this.parent)===null||s===void 0||s.children.delete(this),this.instance=void 0,_o.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){var i;return this.isAnimationBlocked||((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimationBlocked())||!1}startUpdate(){var i;this.isUpdateBlocked()||(this.isUpdating=!0,(i=this.nodes)===null||i===void 0||i.forEach(Pz),this.animationId++)}willUpdate(i=!0){var s,l,u;if(this.root.isUpdateBlocked()){(l=(s=this.options).onExitComplete)===null||l===void 0||l.call(s);return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const v=this.path[m];v.shouldResetTransform=!0,v.updateScroll("snapshot")}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const f=(u=this.options.visualElement)===null||u===void 0?void 0:u.getProps().transformTemplate;this.prevTransformTemplateValue=f==null?void 0:f(this.latestValues,""),this.updateSnapshot(),i&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(hw);return}!this.isUpdating||(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(Rz),this.potentialNodes.clear()),this.nodes.forEach(kz),this.nodes.forEach(wz),this.nodes.forEach(xz),this.clearAllSnapshots(),Vp.update(),Vp.preRender(),Vp.render())}clearAllSnapshots(){this.nodes.forEach(Cz),this.sharedNodes.forEach(Tz)}scheduleUpdateProjection(){In.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){In.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){var i;if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=yt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox),(i=this.options.visualElement)===null||i===void 0||i.notify("LayoutMeasure",this.layout.layoutBox,s==null?void 0:s.layoutBox)}updateScroll(i="measure"){let s=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===i&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:i,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){var i;if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!j5(this.projectionDelta),u=(i=this.options.visualElement)===null||i===void 0?void 0:i.getProps().transformTemplate,c=u==null?void 0:u(this.latestValues,""),d=c!==this.prevTransformTemplateValue;s&&(l||Ho(this.latestValues)||d)&&(o(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(i=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return i&&(l=this.removeTransform(l)),Nz(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:i}=this.options;if(!i)return yt();const s=i.measureViewportBox(),{scroll:l}=this.root;return l&&(oo(s.x,l.offset.x),oo(s.y,l.offset.y)),s}removeElementScroll(i){const s=yt();Wn(s,i);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){Wn(s,i);const{scroll:f}=this.root;f&&(oo(s.x,-f.offset.x),oo(s.y,-f.offset.y))}oo(s.x,c.offset.x),oo(s.y,c.offset.y)}}return s}applyTransform(i,s=!1){const l=yt();Wn(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];!s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Va(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Ho(c.latestValues)&&Va(l,c.latestValues)}return Ho(this.latestValues)&&Va(l,this.latestValues),l}removeTransform(i){var s;const l=yt();Wn(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!Ho(c.latestValues))continue;dh(c.latestValues)&&c.updateSnapshot();const d=yt(),f=c.measurePageBox();Wn(d,f),uw(l,c.latestValues,(s=c.snapshot)===null||s===void 0?void 0:s.layoutBox,d)}return Ho(this.latestValues)&&uw(l,this.latestValues),l}setTargetDelta(i){this.targetDelta=i,this.isProjectionDirty=!0,this.root.scheduleUpdateProjection()}setOptions(i){this.options={...this.options,...i,crossfade:i.crossfade!==void 0?i.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(){var i;const s=this.getLead();if(this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),!this.isProjectionDirty&&!this.attemptToResolveRelativeTarget)return;const{layout:l,layoutId:u}=this.options;if(!(!this.layout||!(l||u))){if(!this.targetDelta&&!this.relativeTarget){const c=this.getClosestProjectingParent();c&&c.layout?(this.relativeParent=c,this.relativeTarget=yt(),this.relativeTargetOrigin=yt(),Os(this.relativeTargetOrigin,this.layout.layoutBox,c.layout.layoutBox),Wn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=yt(),this.targetWithTransforms=yt()),this.relativeTarget&&this.relativeTargetOrigin&&((i=this.relativeParent)===null||i===void 0?void 0:i.target)?yB(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Wn(this.target,this.layout.layoutBox),R5(this.target,this.targetDelta)):Wn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const c=this.getClosestProjectingParent();c&&Boolean(c.resumingFrom)===Boolean(this.resumingFrom)&&!c.options.layoutScroll&&c.target?(this.relativeParent=c,this.relativeTarget=yt(),this.relativeTargetOrigin=yt(),Os(this.relativeTargetOrigin,this.target,c.target),Wn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||dh(this.parent.latestValues)||I5(this.parent.latestValues)))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()}calcProjection(){var i;const{isProjectionDirty:s,isTransformDirty:l}=this;this.isProjectionDirty=this.isTransformDirty=!1;const u=this.getLead(),c=Boolean(this.resumingFrom)||this!==u;let d=!0;if(s&&(d=!1),c&&l&&(d=!1),d)return;const{layout:f,layoutId:m}=this.options;if(this.isTreeAnimating=Boolean(((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimating)||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||m))return;Wn(this.layoutCorrected,this.layout.layoutBox),PB(this.layoutCorrected,this.treeScale,this.path,c);const{target:v}=u;if(!v)return;this.projectionDelta||(this.projectionDelta=Ds(),this.projectionDeltaWithTransform=Ds());const h=this.treeScale.x,b=this.treeScale.y,y=this.projectionTransform;Ms(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=fw(this.projectionDelta,this.treeScale),(this.projectionTransform!==y||this.treeScale.x!==h||this.treeScale.y!==b)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(i=!0){var s,l,u;(l=(s=this.options).scheduleRender)===null||l===void 0||l.call(s),i&&((u=this.getStack())===null||u===void 0||u.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(i,s=!1){var l,u;const c=this.snapshot,d=(c==null?void 0:c.latestValues)||{},f={...this.latestValues},m=Ds();this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!s;const v=yt(),h=(c==null?void 0:c.source)!==((l=this.layout)===null||l===void 0?void 0:l.source),b=(((u=this.getStack())===null||u===void 0?void 0:u.members.length)||0)<=1,y=Boolean(h&&!b&&this.options.crossfade===!0&&!this.path.some(Az));this.animationProgress=0,this.mixTargetDelta=g=>{var w;const x=g/1e3;vw(m.x,i.x,x),vw(m.y,i.y,x),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&((w=this.relativeParent)===null||w===void 0?void 0:w.layout)&&(Os(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Fz(this.relativeTarget,this.relativeTargetOrigin,v,x)),h&&(this.animationValues=f,cz(f,d,this.latestValues,x,y,b)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=x},this.mixTargetDelta(0)}startAnimation(i){var s,l;this.notifyListeners("animationStart"),(s=this.currentAnimation)===null||s===void 0||s.stop(),this.resumingFrom&&((l=this.resumingFrom.currentAnimation)===null||l===void 0||l.stop()),this.pendingAnimation&&(_o.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=In.update(()=>{As.hasAnimatedSinceResize=!0,this.currentAnimation=lz(0,mw,{...i,onUpdate:u=>{var c;this.mixTargetDelta(u),(c=i.onUpdate)===null||c===void 0||c.call(i,u)},onComplete:()=>{var u;(u=i.onComplete)===null||u===void 0||u.call(i),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){var i;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),(i=this.getStack())===null||i===void 0||i.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){var i;this.currentAnimation&&((i=this.mixTargetDelta)===null||i===void 0||i.call(this,mw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const i=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:c}=i;if(!(!s||!l||!u)){if(this!==i&&this.layout&&u&&U5(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||yt();const d=hn(this.layout.layoutBox.x);l.x.min=i.target.x.min,l.x.max=l.x.min+d;const f=hn(this.layout.layoutBox.y);l.y.min=i.target.y.min,l.y.max=l.y.min+f}Wn(s,l),Va(s,c),Ms(this.projectionDeltaWithTransform,this.layoutCorrected,s,c)}}registerSharedNode(i,s){var l,u,c;this.sharedNodes.has(i)||this.sharedNodes.set(i,new gz),this.sharedNodes.get(i).add(s),s.promote({transition:(l=s.options.initialPromotionConfig)===null||l===void 0?void 0:l.transition,preserveFollowOpacity:(c=(u=s.options.initialPromotionConfig)===null||u===void 0?void 0:u.shouldPreserveFollowOpacity)===null||c===void 0?void 0:c.call(u,s)})}isLead(){const i=this.getStack();return i?i.lead===this:!0}getLead(){var i;const{layoutId:s}=this.options;return s?((i=this.getStack())===null||i===void 0?void 0:i.lead)||this:this}getPrevLead(){var i;const{layoutId:s}=this.options;return s?(i=this.getStack())===null||i===void 0?void 0:i.prevLead:void 0}getStack(){const{layoutId:i}=this.options;if(i)return this.root.sharedNodes.get(i)}promote({needsReset:i,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),i&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const i=this.getStack();return i?i.relegate(this):!1}resetRotation(){const{visualElement:i}=this.options;if(!i)return;let s=!1;const{latestValues:l}=i;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(s=!0),!s)return;const u={};for(let c=0;c<pw.length;c++){const d="rotate"+pw[c];l[d]&&(u[d]=l[d],i.setStaticValue(d,0))}i==null||i.render();for(const c in u)i.setStaticValue(c,u[c]);i.scheduleRender()}getProjectionStyles(i={}){var s,l,u;const c={};if(!this.instance||this.isSVG)return c;if(this.isVisible)c.visibility="";else return{visibility:"hidden"};const d=(s=this.options.visualElement)===null||s===void 0?void 0:s.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=pc(i.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=pc(i.pointerEvents)||""),this.hasProjected&&!Ho(this.latestValues)&&(b.transform=d?d({},""):"none",this.hasProjected=!1),b}const m=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=fw(this.projectionDeltaWithTransform,this.treeScale,m),d&&(c.transform=d(m,c.transform));const{x:v,y:h}=this.projectionDelta;c.transformOrigin=`${v.origin*100}% ${h.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(l=m.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:c.opacity=f===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const b in Wc){if(m[b]===void 0)continue;const{correct:y,applyTo:g}=Wc[b],w=y(m[b],f);if(g){const x=g.length;for(let k=0;k<x;k++)c[g[k]]=w}else c[b]=w}return this.options.layoutId&&(c.pointerEvents=f===this?pc(i.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(i=>{var s;return(s=i.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(hw),this.root.sharedNodes.clear()}}}function wz(e){e.updateLayout()}function xz(e){var t,n,r;const o=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&o&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:i}=e.layout,{animationType:s}=e.options,l=o.source!==e.layout.source;s==="size"?dr(m=>{const v=l?o.measuredBox[m]:o.layoutBox[m],h=hn(v);v.min=a[m].min,v.max=v.min+h}):U5(s,o.layoutBox,a)&&dr(m=>{const v=l?o.measuredBox[m]:o.layoutBox[m],h=hn(a[m]);v.max=v.min+h});const u=Ds();Ms(u,a,o.layoutBox);const c=Ds();l?Ms(c,e.applyTransform(i,!0),o.measuredBox):Ms(c,a,o.layoutBox);const d=!j5(u);let f=!1;if(!e.resumeFrom){const m=e.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:v,layout:h}=m;if(v&&h){const b=yt();Os(b,o.layoutBox,v.layoutBox);const y=yt();Os(y,a,h.layoutBox),W5(b,y)||(f=!0)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:c,layoutDelta:u,hasLayoutChanged:d,hasRelativeTargetChanged:f})}else e.isLead()&&((r=(n=e.options).onExitComplete)===null||r===void 0||r.call(n));e.options.transition=void 0}function Sz(e){e.isProjectionDirty||(e.isProjectionDirty=Boolean(e.parent&&e.parent.isProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=Boolean(e.parent&&e.parent.isTransformDirty))}function Cz(e){e.clearSnapshot()}function hw(e){e.clearMeasurements()}function kz(e){const{visualElement:t}=e.options;t!=null&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function gw(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function _z(e){e.resolveTargetDelta()}function Ez(e){e.calcProjection()}function Pz(e){e.resetRotation()}function Tz(e){e.removeLeadSnapshot()}function vw(e,t,n){e.translate=ut(t.translate,0,n),e.scale=ut(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function yw(e,t,n,r){e.min=ut(t.min,n.min,r),e.max=ut(t.max,n.max,r)}function Fz(e,t,n,r){yw(e.x,t.x,n.x,r),yw(e.y,t.y,n.y,r)}function Az(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Iz={duration:.45,ease:[.4,0,.1,1]};function Rz(e,t){let n=e.root;for(let a=e.path.length-1;a>=0;a--)if(Boolean(e.path[a].instance)){n=e.path[a];break}const o=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);o&&e.mount(o,!0)}function bw(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function Nz(e){bw(e.x),bw(e.y)}function U5(e,t,n){return e==="position"||e==="preserve-aspect"&&!uh(dw(t),dw(n),.2)}const Mz=H5({attachResizeListener:(e,t)=>pf(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Kp={current:void 0},Oz=H5({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Kp.current){const e=new Mz(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),Kp.current=e}return Kp.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>Boolean(window.getComputedStyle(e).position==="fixed")}),Dz={...mB,...$q,...DB,...sz},or=MD((e,t)=>bq(e,t,Dz,nz,Oz));function G5(){const e=p.exports.useRef(!1);return jc(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function qz(){const e=G5(),[t,n]=p.exports.useState(0),r=p.exports.useCallback(()=>{e.current&&n(t+1)},[t]);return[p.exports.useCallback(()=>In.postRender(r),[r]),t]}class Lz extends p.exports.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Bz({children:e,isPresent:t}){const n=p.exports.useId(),r=p.exports.useRef(null),o=p.exports.useRef({width:0,height:0,top:0,left:0});return p.exports.useInsertionEffect(()=>{const{width:a,height:i,top:s,left:l}=o.current;if(t||!r.current||!a||!i)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${i}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),S(Lz,{isPresent:t,childRef:r,sizeRef:o,children:p.exports.cloneElement(e,{ref:r})})}const Yp=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:i})=>{const s=ff(zz),l=p.exports.useId(),u=p.exports.useMemo(()=>({id:l,initial:t,isPresent:n,custom:o,onExitComplete:c=>{s.set(c,!0);for(const d of s.values())if(!d)return;r&&r()},register:c=>(s.set(c,!1),()=>s.delete(c))}),a?void 0:[n]);return p.exports.useMemo(()=>{s.forEach((c,d)=>s.set(d,!1))},[n]),p.exports.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),i==="popLayout"&&(e=S(Bz,{isPresent:n,children:e})),S(Vi.Provider,{value:u,children:e})};function zz(){return new Map}const La=e=>e.key||"";function Vz(e,t){e.forEach(n=>{const r=La(n);t.set(r,n)})}function $z(e){const t=[];return p.exports.Children.forEach(e,n=>{p.exports.isValidElement(n)&&t.push(n)}),t}const Ao=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:a=!0,mode:i="sync"})=>{o&&(i="wait",i5(!1,"Replace exitBeforeEnter with mode='wait'"));let[s]=qz();const l=p.exports.useContext(d0).forceRender;l&&(s=l);const u=G5(),c=$z(e);let d=c;const f=new Set,m=p.exports.useRef(d),v=p.exports.useRef(new Map).current,h=p.exports.useRef(!0);if(jc(()=>{h.current=!1,Vz(c,v),m.current=d}),w0(()=>{h.current=!0,v.clear(),f.clear()}),h.current)return S(Ht,{children:d.map(w=>S(Yp,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:i,children:w},La(w)))});d=[...d];const b=m.current.map(La),y=c.map(La),g=b.length;for(let w=0;w<g;w++){const x=b[w];y.indexOf(x)===-1&&f.add(x)}return i==="wait"&&f.size&&(d=[]),f.forEach(w=>{if(y.indexOf(w)!==-1)return;const x=v.get(w);if(!x)return;const k=b.indexOf(w),_=()=>{v.delete(w),f.delete(w);const E=m.current.findIndex(T=>T.key===w);if(m.current.splice(E,1),!f.size){if(m.current=c,u.current===!1)return;s(),r&&r()}};d.splice(k,0,S(Yp,{isPresent:!1,onExitComplete:_,custom:t,presenceAffectsLayout:a,mode:i,children:x},La(x)))}),d=d.map(w=>{const x=w.key;return f.has(x)?w:S(Yp,{isPresent:!0,presenceAffectsLayout:a,mode:i,children:w},La(w))}),a5!=="production"&&i==="wait"&&d.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`),S(Ht,{children:f.size?d:d.map(w=>p.exports.cloneElement(w))})};var gr=function(){return gr=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},gr.apply(this,arguments)};function K5(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function jz(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var jl=(...e)=>e.filter(Boolean).join(" ");function Wz(){return!1}var Hz=e=>{const{condition:t,message:n}=e;t&&Wz()&&console.warn(n)},mo={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},rs={scale:{enter:{scale:1},exit:{scale:.95}},fade:{enter:{opacity:1},exit:{opacity:0}},pushLeft:{enter:{x:"100%"},exit:{x:"-30%"}},pushRight:{enter:{x:"-100%"},exit:{x:"30%"}},pushUp:{enter:{y:"100%"},exit:{y:"-30%"}},pushDown:{enter:{y:"-100%"},exit:{y:"30%"}},slideLeft:{position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},slideRight:{position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},slideUp:{position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},slideDown:{position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}}};function td(e){var n;switch((n=e==null?void 0:e.direction)!=null?n:"right"){case"right":return rs.slideRight;case"left":return rs.slideLeft;case"bottom":return rs.slideDown;case"top":return rs.slideUp;default:return rs.slideRight}}var aa={enter:{duration:.2,ease:mo.easeOut},exit:{duration:.1,ease:mo.easeIn}},Rn={enter:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.enter}),exit:(e,t)=>({...e,delay:typeof t=="number"?t:t==null?void 0:t.exit})},Uz=e=>e!=null&&parseInt(e.toString(),10)>0,ww={exit:{height:{duration:.2,ease:mo.ease},opacity:{duration:.3,ease:mo.ease}},enter:{height:{duration:.3,ease:mo.ease},opacity:{duration:.4,ease:mo.ease}}},Gz={exit:({animateOpacity:e,startingHeight:t,transition:n,transitionEnd:r,delay:o})=>{var a;return{...e&&{opacity:Uz(t)?1:0},height:t,transitionEnd:r==null?void 0:r.exit,transition:(a=n==null?void 0:n.exit)!=null?a:Rn.exit(ww.exit,o)}},enter:({animateOpacity:e,endingHeight:t,transition:n,transitionEnd:r,delay:o})=>{var a;return{...e&&{opacity:1},height:t,transitionEnd:r==null?void 0:r.enter,transition:(a=n==null?void 0:n.enter)!=null?a:Rn.enter(ww.enter,o)}}},O0=p.exports.forwardRef((e,t)=>{const{in:n,unmountOnExit:r,animateOpacity:o=!0,startingHeight:a=0,endingHeight:i="auto",style:s,className:l,transition:u,transitionEnd:c,...d}=e,[f,m]=p.exports.useState(!1);p.exports.useEffect(()=>{const g=setTimeout(()=>{m(!0)});return()=>clearTimeout(g)},[]),Hz({condition:Boolean(a>0&&r),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const v=parseFloat(a.toString())>0,h={startingHeight:a,endingHeight:i,animateOpacity:o,transition:f?u:{enter:{duration:0}},transitionEnd:{enter:c==null?void 0:c.enter,exit:r?c==null?void 0:c.exit:{...c==null?void 0:c.exit,display:v?"block":"none"}}},b=r?n:!0,y=n||r?"enter":"exit";return S(Ao,{initial:!1,custom:h,children:b&&P.createElement(or.div,{ref:t,...d,className:jl("chakra-collapse",l),style:{overflow:"hidden",display:"block",...s},custom:h,variants:Gz,initial:r?"exit":!1,animate:y,exit:"exit"})})});O0.displayName="Collapse";var Kz={enter:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:1,transition:(r=e==null?void 0:e.enter)!=null?r:Rn.enter(aa.enter,n),transitionEnd:t==null?void 0:t.enter}},exit:({transition:e,transitionEnd:t,delay:n}={})=>{var r;return{opacity:0,transition:(r=e==null?void 0:e.exit)!=null?r:Rn.exit(aa.exit,n),transitionEnd:t==null?void 0:t.exit}}},D0={initial:"exit",animate:"enter",exit:"exit",variants:Kz},Y5=p.exports.forwardRef(function(t,n){const{unmountOnExit:r,in:o,className:a,transition:i,transitionEnd:s,delay:l,...u}=t,c=o||r?"enter":"exit",d=r?o&&r:!0,f={transition:i,transitionEnd:s,delay:l};return S(Ao,{custom:f,children:d&&P.createElement(or.div,{ref:n,className:jl("chakra-fade",a),custom:f,...D0,animate:c,...u})})});Y5.displayName="Fade";var Yz={exit:({reverse:e,initialScale:t,transition:n,transitionEnd:r,delay:o})=>{var a;return{opacity:0,...e?{scale:t,transitionEnd:r==null?void 0:r.exit}:{transitionEnd:{scale:t,...r==null?void 0:r.exit}},transition:(a=n==null?void 0:n.exit)!=null?a:Rn.exit(aa.exit,o)}},enter:({transitionEnd:e,transition:t,delay:n})=>{var r;return{opacity:1,scale:1,transition:(r=t==null?void 0:t.enter)!=null?r:Rn.enter(aa.enter,n),transitionEnd:e==null?void 0:e.enter}}},q0={initial:"exit",animate:"enter",exit:"exit",variants:Yz},X5=p.exports.forwardRef(function(t,n){const{unmountOnExit:r,in:o,reverse:a=!0,initialScale:i=.95,className:s,transition:l,transitionEnd:u,delay:c,...d}=t,f=r?o&&r:!0,m=o||r?"enter":"exit",v={initialScale:i,reverse:a,transition:l,transitionEnd:u,delay:c};return S(Ao,{custom:v,children:f&&P.createElement(or.div,{ref:n,className:jl("chakra-offset-slide",s),...q0,animate:m,custom:v,...d})})});X5.displayName="ScaleFade";var xw={exit:{duration:.15,ease:mo.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},Xz={exit:({direction:e,transition:t,transitionEnd:n,delay:r})=>{var a;const{exit:o}=td({direction:e});return{...o,transition:(a=t==null?void 0:t.exit)!=null?a:Rn.exit(xw.exit,r),transitionEnd:n==null?void 0:n.exit}},enter:({direction:e,transitionEnd:t,transition:n,delay:r})=>{var a;const{enter:o}=td({direction:e});return{...o,transition:(a=n==null?void 0:n.enter)!=null?a:Rn.enter(xw.enter,r),transitionEnd:t==null?void 0:t.enter}}},L0=p.exports.forwardRef(function(t,n){const{direction:r="right",style:o,unmountOnExit:a,in:i,className:s,transition:l,transitionEnd:u,delay:c,motionProps:d,...f}=t,m=td({direction:r}),v=Object.assign({position:"fixed"},m.position,o),h=a?i&&a:!0,b=i||a?"enter":"exit",y={transitionEnd:u,transition:l,direction:r,delay:c};return S(Ao,{custom:y,children:h&&P.createElement(or.div,{...f,ref:n,initial:"exit",className:jl("chakra-slide",s),animate:b,exit:"exit",custom:y,variants:Xz,style:v,...d})})});L0.displayName="Slide";var Zz={initial:({offsetX:e,offsetY:t,transition:n,transitionEnd:r,delay:o})=>{var a;return{opacity:0,x:e,y:t,transition:(a=n==null?void 0:n.exit)!=null?a:Rn.exit(aa.exit,o),transitionEnd:r==null?void 0:r.exit}},enter:({transition:e,transitionEnd:t,delay:n})=>{var r;return{opacity:1,x:0,y:0,transition:(r=e==null?void 0:e.enter)!=null?r:Rn.enter(aa.enter,n),transitionEnd:t==null?void 0:t.enter}},exit:({offsetY:e,offsetX:t,transition:n,transitionEnd:r,reverse:o,delay:a})=>{var s;const i={x:t,y:e};return{opacity:0,transition:(s=n==null?void 0:n.exit)!=null?s:Rn.exit(aa.exit,a),...o?{...i,transitionEnd:r==null?void 0:r.exit}:{transitionEnd:{...i,...r==null?void 0:r.exit}}}}},nd={initial:"initial",animate:"enter",exit:"exit",variants:Zz},Z5=p.exports.forwardRef(function(t,n){const{unmountOnExit:r,in:o,reverse:a=!0,className:i,offsetX:s=0,offsetY:l=8,transition:u,transitionEnd:c,delay:d,...f}=t,m=r?o&&r:!0,v=o||r?"enter":"exit",h={offsetX:s,offsetY:l,reverse:a,transition:u,transitionEnd:c,delay:d};return S(Ao,{custom:h,children:m&&P.createElement(or.div,{ref:n,className:jl("chakra-offset-slide",i),custom:h,...nd,animate:v,...f})})});Z5.displayName="SlideFade";var Wl=(...e)=>e.filter(Boolean).join(" ");function Qz(){return!1}var vf=e=>{const{condition:t,message:n}=e;t&&Qz()&&console.warn(n)};function Xp(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var[Jz,Hl]=be({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[eV,yf]=be({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[tV,qZ,nV,rV]=lf(),Q5=M(function(t,n){const{getButtonProps:r}=yf(),o=r(t,n),i={display:"flex",alignItems:"center",width:"100%",outline:0,...Hl().button};return P.createElement(R.button,{...o,className:Wl("chakra-accordion__button",t.className),__css:i})});Q5.displayName="AccordionButton";function J5(e){const{onChange:t,defaultIndex:n,index:r,allowMultiple:o,allowToggle:a,...i}=e;oV(e),aV(e);const s=nV(),[l,u]=p.exports.useState(-1);p.exports.useEffect(()=>()=>{u(-1)},[]);const[c,d]=Fo({value:r,defaultValue(){return o?n!=null?n:[]:n!=null?n:-1},onChange:t});return{index:c,setIndex:d,htmlProps:i,getAccordionItemProps:m=>{let v=!1;return m!==null&&(v=Array.isArray(c)?c.includes(m):c===m),{isOpen:v,onChange:b=>{if(m!==null)if(o&&Array.isArray(c)){const y=b?c.concat(m):c.filter(g=>g!==m);d(y)}else b?d(m):a&&d(-1)}}},focusedIndex:l,setFocusedIndex:u,descendants:s}}var[ek,bf]=be({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function tk(e){const{isDisabled:t,isFocusable:n,id:r,...o}=e,{getAccordionItemProps:a,setFocusedIndex:i}=bf(),s=p.exports.useRef(null),l=p.exports.useId(),u=r!=null?r:l,c=`accordion-button-${u}`,d=`accordion-panel-${u}`;iV(e);const{register:f,index:m,descendants:v}=rV({disabled:t&&!n}),{isOpen:h,onChange:b}=a(m===-1?null:m);sV({isOpen:h,isDisabled:t});const y=()=>{b==null||b(!0)},g=()=>{b==null||b(!1)},w=p.exports.useCallback(()=>{b==null||b(!h),i(m)},[m,i,h,b]),x=p.exports.useCallback(T=>{const A={ArrowDown:()=>{const q=v.nextEnabled(m);q==null||q.node.focus()},ArrowUp:()=>{const q=v.prevEnabled(m);q==null||q.node.focus()},Home:()=>{const q=v.firstEnabled();q==null||q.node.focus()},End:()=>{const q=v.lastEnabled();q==null||q.node.focus()}}[T.key];A&&(T.preventDefault(),A(T))},[v,m]),k=p.exports.useCallback(()=>{i(m)},[i,m]),_=p.exports.useCallback(function(O={},A=null){return{...O,type:"button",ref:ke(f,s,A),id:c,disabled:!!t,"aria-expanded":!!h,"aria-controls":d,onClick:Xp(O.onClick,w),onFocus:Xp(O.onFocus,k),onKeyDown:Xp(O.onKeyDown,x)}},[c,t,h,w,k,x,d,f]),E=p.exports.useCallback(function(O={},A=null){return{...O,ref:A,role:"region",id:d,"aria-labelledby":c,hidden:!h}},[c,h,d]);return{isOpen:h,isDisabled:t,isFocusable:n,onOpen:y,onClose:g,getButtonProps:_,getPanelProps:E,htmlProps:o}}function oV(e){const t=e.index||e.defaultIndex,n=t!=null&&!Array.isArray(t)&&e.allowMultiple;vf({condition:!!n,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`})}function aV(e){vf({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function iV(e){vf({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function sV(e){vf({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}function nk(e){const{isOpen:t,isDisabled:n}=yf(),{reduceMotion:r}=bf(),o=Wl("chakra-accordion__icon",e.className),a=Hl(),i={opacity:n?.4:1,transform:t?"rotate(-180deg)":void 0,transition:r?void 0:"transform 0.2s",transformOrigin:"center",...a.icon};return S(Mt,{viewBox:"0 0 24 24","aria-hidden":!0,className:o,__css:i,...e,children:S("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}nk.displayName="AccordionIcon";var rk=M(function(t,n){const{children:r,className:o}=t,{htmlProps:a,...i}=tk(t),l={...Hl().container,overflowAnchor:"none"},u=p.exports.useMemo(()=>i,[i]);return P.createElement(eV,{value:u},P.createElement(R.div,{ref:n,...a,className:Wl("chakra-accordion__item",o),__css:l},typeof r=="function"?r({isExpanded:!!i.isOpen,isDisabled:!!i.isDisabled}):r))});rk.displayName="AccordionItem";var ok=M(function(t,n){const{className:r,motionProps:o,...a}=t,{reduceMotion:i}=bf(),{getPanelProps:s,isOpen:l}=yf(),u=s(a,n),c=Wl("chakra-accordion__panel",r),d=Hl();i||delete u.hidden;const f=P.createElement(R.div,{...u,__css:d.panel,className:c});return i?f:S(O0,{in:l,...o,children:f})});ok.displayName="AccordionPanel";var ak=M(function({children:t,reduceMotion:n,...r},o){const a=$e("Accordion",r),i=ye(r),{htmlProps:s,descendants:l,...u}=J5(i),c=p.exports.useMemo(()=>({...u,reduceMotion:!!n}),[u,n]);return P.createElement(tV,{value:l},P.createElement(ek,{value:c},P.createElement(Jz,{value:a},P.createElement(R.div,{ref:o,...s,className:Wl("chakra-accordion",r.className),__css:a.root},t))))});ak.displayName="Accordion";function lV(){const{isOpen:e,isDisabled:t,onClose:n,onOpen:r}=yf();return{isOpen:e,onClose:n,isDisabled:t,onOpen:r}}var uV=(...e)=>e.filter(Boolean).join(" "),cV=rr({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),wf=M((e,t)=>{const n=ht("Spinner",e),{label:r="Loading...",thickness:o="2px",speed:a="0.45s",emptyColor:i="transparent",className:s,...l}=ye(e),u=uV("chakra-spinner",s),c={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:o,borderBottomColor:i,borderLeftColor:i,animation:`${cV} ${a} linear infinite`,...n};return P.createElement(R.div,{ref:t,__css:c,className:u,...l},r&&P.createElement(R.span,{srOnly:!0},r))});wf.displayName="Spinner";var xf=(...e)=>e.filter(Boolean).join(" ");function dV(e){return S(Mt,{viewBox:"0 0 24 24",...e,children:S("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})}function fV(e){return S(Mt,{viewBox:"0 0 24 24",...e,children:S("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})}function Sw(e){return S(Mt,{viewBox:"0 0 24 24",...e,children:S("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}var[pV,mV]=be({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[hV,Sf]=be({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),ik={info:{icon:fV,colorScheme:"blue"},warning:{icon:Sw,colorScheme:"orange"},success:{icon:dV,colorScheme:"green"},error:{icon:Sw,colorScheme:"red"},loading:{icon:wf,colorScheme:"blue"}};function gV(e){return ik[e].colorScheme}function vV(e){return ik[e].icon}var B0=M(function(t,n){var u;const{status:r="info",addRole:o=!0,...a}=ye(t),i=(u=t.colorScheme)!=null?u:gV(r),s=$e("Alert",{...t,colorScheme:i}),l={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...s.container};return P.createElement(pV,{value:{status:r}},P.createElement(hV,{value:s},P.createElement(R.div,{role:o?"alert":void 0,ref:n,...a,className:xf("chakra-alert",t.className),__css:l})))});B0.displayName="Alert";var z0=M(function(t,n){const o={display:"inline",...Sf().description};return P.createElement(R.div,{ref:n,...t,className:xf("chakra-alert__desc",t.className),__css:o})});z0.displayName="AlertDescription";function V0(e){const{status:t}=mV(),n=vV(t),r=Sf(),o=t==="loading"?r.spinner:r.icon;return P.createElement(R.span,{display:"inherit",...e,className:xf("chakra-alert__icon",e.className),__css:o},e.children||S(n,{h:"100%",w:"100%"}))}V0.displayName="AlertIcon";var $0=M(function(t,n){const r=Sf();return P.createElement(R.div,{ref:n,...t,className:xf("chakra-alert__title",t.className),__css:r.title})});$0.displayName="AlertTitle";function yV(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function j0(e){const{loading:t,src:n,srcSet:r,onLoad:o,onError:a,crossOrigin:i,sizes:s,ignoreFallback:l}=e,[u,c]=p.exports.useState("pending");p.exports.useEffect(()=>{c(n?"loading":"pending")},[n]);const d=p.exports.useRef(),f=p.exports.useCallback(()=>{if(!n)return;m();const v=new Image;v.src=n,i&&(v.crossOrigin=i),r&&(v.srcset=r),s&&(v.sizes=s),t&&(v.loading=t),v.onload=h=>{m(),c("loaded"),o==null||o(h)},v.onerror=h=>{m(),c("failed"),a==null||a(h)},d.current=v},[n,i,r,s,o,a,t]),m=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return An(()=>{if(!l)return u==="loading"&&f(),()=>{m()}},[u,f,l]),l?"loaded":u}var sk=(e,t)=>e!=="loaded"&&t==="beforeLoadOrError"||e==="failed"&&t==="onError",rd=M(function(t,n){const{htmlWidth:r,htmlHeight:o,alt:a,...i}=t;return S("img",{width:r,height:o,ref:n,alt:a,...i})});rd.displayName="NativeImage";var Ul=M(function(t,n){const{fallbackSrc:r,fallback:o,src:a,srcSet:i,align:s,fit:l,loading:u,ignoreFallback:c,crossOrigin:d,fallbackStrategy:f="beforeLoadOrError",referrerPolicy:m,...v}=t,h=r!==void 0||o!==void 0,b=u!=null||c||!h,y=j0({...t,ignoreFallback:b}),g=sk(y,f),w={ref:n,objectFit:l,objectPosition:s,...b?v:yV(v,["onError","onLoad"])};return g?o||P.createElement(R.img,{as:rd,className:"chakra-image__placeholder",src:r,...w}):P.createElement(R.img,{as:rd,src:a,srcSet:i,crossOrigin:d,loading:u,referrerPolicy:m,className:"chakra-image",...w})});Ul.displayName="Image";var bV=M((e,t)=>P.createElement(R.img,{ref:t,as:rd,className:"chakra-image",...e}));function Yr(e){return p.exports.Children.toArray(e).filter(t=>p.exports.isValidElement(t))}var W0=(...e)=>e.filter(Boolean).join(" "),wV=e=>e?"":void 0;function xV(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var[SV,H0]=be({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"});function CV(e){const[t,n]=e.split(" ");return t&&n?`${t.charAt(0)}${n.charAt(0)}`:t.charAt(0)}function lk(e){const{name:t,getInitials:n,...r}=e,o=H0();return P.createElement(R.div,{role:"img","aria-label":t,...r,__css:o.label},t?n==null?void 0:n(t):null)}lk.displayName="AvatarName";var U0=e=>P.createElement(R.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e},S("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),S("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}));function uk(e){const{src:t,srcSet:n,onError:r,onLoad:o,getInitials:a,name:i,borderRadius:s,loading:l,iconLabel:u,icon:c=S(U0,{}),ignoreFallback:d,referrerPolicy:f}=e,v=j0({src:t,onError:r,ignoreFallback:d})==="loaded";return!t||!v?i?S(lk,{className:"chakra-avatar__initials",getInitials:a,name:i}):p.exports.cloneElement(c,{role:"img","aria-label":u}):P.createElement(R.img,{src:t,srcSet:n,alt:i,onLoad:o,referrerPolicy:f,className:"chakra-avatar__img",loading:l,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:s}})}uk.displayName="AvatarImage";var ck={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},dk=M((e,t)=>{const n=$e("Avatar",e),[r,o]=p.exports.useState(!1),{src:a,srcSet:i,name:s,showBorder:l,borderRadius:u="full",onError:c,onLoad:d,getInitials:f=CV,icon:m=S(U0,{}),iconLabel:v=" avatar",loading:h,children:b,borderColor:y,ignoreFallback:g,...w}=ye(e),x={borderRadius:u,borderWidth:l?"2px":void 0,...ck,...n.container};return y&&(x.borderColor=y),P.createElement(R.span,{ref:t,...w,className:W0("chakra-avatar",e.className),"data-loaded":wV(r),__css:x},se(SV,{value:n,children:[S(uk,{src:a,srcSet:i,loading:h,onLoad:xV(d,()=>{o(!0)}),onError:c,getInitials:f,name:s,borderRadius:u,icon:m,iconLabel:v,ignoreFallback:g}),b]}))});dk.displayName="Avatar";function kV(e){const t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}var fk=M(function(t,n){const r=$e("Avatar",t),{children:o,borderColor:a,max:i,spacing:s="-0.75rem",borderRadius:l="full",...u}=ye(t),c=Yr(o),d=i?c.slice(0,i):c,f=i!=null&&c.length-i,v=d.reverse().map((y,g)=>{var k;const x={marginEnd:g===0?0:s,size:t.size,borderColor:(k=y.props.borderColor)!=null?k:a,showBorder:!0};return p.exports.cloneElement(y,kV(x))}),h={display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse",...r.group},b={borderRadius:l,marginStart:s,...ck,...r.excessLabel};return P.createElement(R.div,{ref:n,role:"group",__css:h,...u,className:W0("chakra-avatar__group",t.className)},f>0&&P.createElement(R.span,{className:"chakra-avatar__excess",__css:b},`+${f}`),v)});fk.displayName="AvatarGroup";var _V={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},pk=M(function(t,n){const{placement:r="bottom-end",className:o,...a}=t,i=H0(),l={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",..._V[r],...i.badge};return P.createElement(R.div,{ref:n,...a,className:W0("chakra-avatar__badge",o),__css:l})});pk.displayName="AvatarBadge";var G0=(...e)=>e.filter(Boolean).join(" "),[EV,Cf]=be({name:"BreadcrumbStylesContext",errorMessage:`useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),mk=M(function(t,n){const r=$e("Breadcrumb",t),o=ye(t),{children:a,spacing:i="0.5rem",separator:s="/",className:l,listProps:u,...c}=o,d=Yr(a),f=d.length,m=d.map((h,b)=>p.exports.cloneElement(h,{separator:s,spacing:i,isLastChild:f===b+1})),v=G0("chakra-breadcrumb",l);return P.createElement(R.nav,{ref:n,"aria-label":"breadcrumb",className:v,__css:r.container,...c},P.createElement(EV,{value:r},P.createElement(R.ol,{className:"chakra-breadcrumb__list",...u,__css:{display:"flex",alignItems:"center",...r.list}},m)))});mk.displayName="Breadcrumb";var od=M(function(t,n){const{spacing:r,...o}=t,a=Cf(),i={mx:r,...a.separator};return P.createElement(R.span,{ref:n,role:"presentation",...o,__css:i})});od.displayName="BreadcrumbSeparator";var K0=M(function(t,n){const{isCurrentPage:r,as:o,className:a,href:i,...s}=t,l=Cf(),u={ref:n,as:o,className:G0("chakra-breadcrumb__link",a),...s};return r?P.createElement(R.span,{"aria-current":"page",__css:l.link,...u}):P.createElement(R.a,{__css:l.link,href:i,...u})});K0.displayName="BreadcrumbLink";var hk=M(function(t,n){const{isCurrentPage:r,separator:o,isLastChild:a,spacing:i,children:s,className:l,...u}=t,d=Yr(s).map(h=>h.type===K0?p.exports.cloneElement(h,{isCurrentPage:r}):h.type===od?p.exports.cloneElement(h,{spacing:i,children:h.props.children||o}):h),m={display:"inline-flex",alignItems:"center",...Cf().item},v=G0("chakra-breadcrumb__list-item",l);return P.createElement(R.li,{ref:n,className:v,...u,__css:m},d,!a&&S(od,{spacing:i,children:o}))});hk.displayName="BreadcrumbItem";var kf=(...e)=>e.filter(Boolean).join(" "),Cw=e=>e?"":void 0,[PV,gk]=be({strict:!1,name:"ButtonGroupContext"});function gh(e){const{children:t,className:n,...r}=e,o=p.exports.isValidElement(t)?p.exports.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,a=kf("chakra-button__icon",n);return P.createElement(R.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:a},o)}gh.displayName="ButtonIcon";function ad(e){const{label:t,placement:n,spacing:r="0.5rem",children:o=S(wf,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:i,...s}=e,l=kf("chakra-button__spinner",a),u=n==="start"?"marginEnd":"marginStart",c=p.exports.useMemo(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[u]:t?r:0,fontSize:"1em",lineHeight:"normal",...i}),[i,t,u,r]);return P.createElement(R.div,{className:l,...s,__css:c},o)}ad.displayName="ButtonSpinner";function TV(e){const[t,n]=p.exports.useState(!e);return{ref:p.exports.useCallback(a=>{!a||n(a.tagName==="BUTTON")},[]),type:t?"button":void 0}}var Y0=M((e,t)=>{const n=gk(),r=ht("Button",{...n,...e}),{isDisabled:o=n==null?void 0:n.isDisabled,isLoading:a,isActive:i,children:s,leftIcon:l,rightIcon:u,loadingText:c,iconSpacing:d="0.5rem",type:f,spinner:m,spinnerPlacement:v="start",className:h,as:b,...y}=ye(e),g=p.exports.useMemo(()=>{const _={...r==null?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!n&&{_focus:_}}},[r,n]),{ref:w,type:x}=TV(b),k={rightIcon:u,leftIcon:l,iconSpacing:d,children:s};return P.createElement(R.button,{disabled:o||a,ref:fD(t,w),as:b,type:f!=null?f:x,"data-active":Cw(i),"data-loading":Cw(a),__css:g,className:kf("chakra-button",h),...y},a&&v==="start"&&S(ad,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:d,children:m}),a?c||P.createElement(R.span,{opacity:0},S(kw,{...k})):S(kw,{...k}),a&&v==="end"&&S(ad,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:d,children:m}))});Y0.displayName="Button";function kw(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:o}=e;return se(Ht,{children:[t&&S(gh,{marginEnd:o,children:t}),r,n&&S(gh,{marginStart:o,children:n})]})}var FV={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},AV={horizontal:e=>({"& > *:not(style) ~ *:not(style)":{marginStart:e}}),vertical:e=>({"& > *:not(style) ~ *:not(style)":{marginTop:e}})},vk=M(function(t,n){const{size:r,colorScheme:o,variant:a,className:i,spacing:s="0.5rem",isAttached:l,isDisabled:u,orientation:c="horizontal",...d}=t,f=kf("chakra-button__group",i),m=p.exports.useMemo(()=>({size:r,colorScheme:o,variant:a,isDisabled:u}),[r,o,a,u]);let v={display:"inline-flex",...l?FV[c]:AV[c](s)};const h=c==="vertical";return P.createElement(PV,{value:m},P.createElement(R.div,{ref:n,role:"group",__css:v,className:f,"data-attached":l?"":void 0,"data-orientation":c,flexDir:h?"column":void 0,...d}))});vk.displayName="ButtonGroup";var X0=M((e,t)=>{const{icon:n,children:r,isRound:o,"aria-label":a,...i}=e,s=n||r,l=p.exports.isValidElement(s)?p.exports.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return S(Y0,{padding:"0",borderRadius:o?"full":void 0,ref:t,"aria-label":a,...i,children:l})});X0.displayName="IconButton";var _f=(...e)=>e.filter(Boolean).join(" "),[IV,Ef]=be({name:"CardStylesContext",hookName:"useCardStyles",providerName:"<Card />"}),Z0=M(function(t,n){const{className:r,children:o,direction:a="column",justify:i,align:s,...l}=ye(t),u=$e("Card",t);return P.createElement(R.div,{ref:n,className:_f("chakra-card",r),__css:{display:"flex",flexDirection:a,justifyContent:i,alignItems:s,position:"relative",minWidth:0,wordWrap:"break-word",...u.container},...l},S(IV,{value:u,children:o}))}),yk=M(function(t,n){const{className:r,...o}=t,a=Ef();return P.createElement(R.div,{ref:n,className:_f("chakra-card__header",r),__css:a.header,...o})}),Q0=M(function(t,n){const{className:r,...o}=t,a=Ef();return P.createElement(R.div,{ref:n,className:_f("chakra-card__body",r),__css:a.body,...o})}),RV=M(function(t,n){const{className:r,justify:o,...a}=t,i=Ef();return P.createElement(R.div,{ref:n,className:_f("chakra-card__footer",r),__css:{...i.footer,display:"flex",justifyContent:o},...a})}),ji=(...e)=>e.filter(Boolean).join(" "),Nu=e=>e?"":void 0,Zp=e=>e?!0:void 0;function _w(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var[NV,J0]=be({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[MV,Io]=be({strict:!1,name:"FormControlContext"});function OV(e){const{id:t,isRequired:n,isInvalid:r,isDisabled:o,isReadOnly:a,...i}=e,s=p.exports.useId(),l=t||`field-${s}`,u=`${l}-label`,c=`${l}-feedback`,d=`${l}-helptext`,[f,m]=p.exports.useState(!1),[v,h]=p.exports.useState(!1),[b,y]=p.exports.useState(!1),g=p.exports.useCallback((E={},T=null)=>({id:d,...E,ref:ke(T,O=>{!O||h(!0)})}),[d]),w=p.exports.useCallback((E={},T=null)=>{var O,A;return{...E,ref:T,"data-focus":Nu(b),"data-disabled":Nu(o),"data-invalid":Nu(r),"data-readonly":Nu(a),id:(O=E.id)!=null?O:u,htmlFor:(A=E.htmlFor)!=null?A:l}},[l,o,b,r,a,u]),x=p.exports.useCallback((E={},T=null)=>({id:c,...E,ref:ke(T,O=>{!O||m(!0)}),"aria-live":"polite"}),[c]),k=p.exports.useCallback((E={},T=null)=>({...E,...i,ref:T,role:"group"}),[i]),_=p.exports.useCallback((E={},T=null)=>({...E,ref:T,role:"presentation","aria-hidden":!0,children:E.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!o,isFocused:!!b,onFocus:()=>y(!0),onBlur:()=>y(!1),hasFeedbackText:f,setHasFeedbackText:m,hasHelpText:v,setHasHelpText:h,id:l,labelId:u,feedbackId:c,helpTextId:d,htmlProps:i,getHelpTextProps:g,getErrorMessageProps:x,getRootProps:k,getLabelProps:w,getRequiredIndicatorProps:_}}var bk=M(function(t,n){const r=$e("Form",t),o=ye(t),{getRootProps:a,htmlProps:i,...s}=OV(o),l=ji("chakra-form-control",t.className);return P.createElement(MV,{value:s},P.createElement(NV,{value:r},P.createElement(R.div,{...a({},n),className:l,__css:r.container})))});bk.displayName="FormControl";var wk=M(function(t,n){const r=Io(),o=J0(),a=ji("chakra-form__helper-text",t.className);return P.createElement(R.div,{...r==null?void 0:r.getHelpTextProps(t,n),__css:o.helperText,className:a})});wk.displayName="FormHelperText";function Pf(e){const{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:o,...a}=Tf(e);return{...a,disabled:t,readOnly:r,required:o,"aria-invalid":Zp(n),"aria-required":Zp(o),"aria-readonly":Zp(r)}}function Tf(e){var v,h,b;const t=Io(),{id:n,disabled:r,readOnly:o,required:a,isRequired:i,isInvalid:s,isReadOnly:l,isDisabled:u,onFocus:c,onBlur:d,...f}=e,m=e["aria-describedby"]?[e["aria-describedby"]]:[];return(t==null?void 0:t.hasFeedbackText)&&(t==null?void 0:t.isInvalid)&&m.push(t.feedbackId),t!=null&&t.hasHelpText&&m.push(t.helpTextId),{...f,"aria-describedby":m.join(" ")||void 0,id:n!=null?n:t==null?void 0:t.id,isDisabled:(v=r!=null?r:u)!=null?v:t==null?void 0:t.isDisabled,isReadOnly:(h=o!=null?o:l)!=null?h:t==null?void 0:t.isReadOnly,isRequired:(b=a!=null?a:i)!=null?b:t==null?void 0:t.isRequired,isInvalid:s!=null?s:t==null?void 0:t.isInvalid,onFocus:_w(t==null?void 0:t.onFocus,c),onBlur:_w(t==null?void 0:t.onBlur,d)}}var[DV,xk]=be({name:"FormErrorStylesContext",errorMessage:`useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `}),Sk=M((e,t)=>{const n=$e("FormError",e),r=ye(e),o=Io();return o!=null&&o.isInvalid?P.createElement(DV,{value:n},P.createElement(R.div,{...o==null?void 0:o.getErrorMessageProps(r,t),className:ji("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})):null});Sk.displayName="FormErrorMessage";var Ck=M((e,t)=>{const n=xk(),r=Io();if(!(r!=null&&r.isInvalid))return null;const o=ji("chakra-form__error-icon",e.className);return S(Mt,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:o,children:S("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})});Ck.displayName="FormErrorIcon";var kk=M(function(t,n){var f;const r=ht("FormLabel",t),o=ye(t),{className:a,children:i,requiredIndicator:s=S(ev,{}),optionalIndicator:l=null,...u}=o,c=Io(),d=(f=c==null?void 0:c.getLabelProps(u,n))!=null?f:{ref:n,...u};return P.createElement(R.label,{...d,className:ji("chakra-form__label",o.className),__css:{display:"block",textAlign:"start",...r}},i,c!=null&&c.isRequired?s:l)});kk.displayName="FormLabel";var ev=M(function(t,n){const r=Io(),o=J0();if(!(r!=null&&r.isRequired))return null;const a=ji("chakra-form__required-indicator",t.className);return P.createElement(R.span,{...r==null?void 0:r.getRequiredIndicatorProps(t,n),__css:o.requiredIndicator,className:a})});ev.displayName="RequiredIndicator";function tr(e,t){const n=p.exports.useRef(!1),r=p.exports.useRef(!1);p.exports.useEffect(()=>{if(n.current&&r.current)return e();r.current=!0},t),p.exports.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[])}var Ff={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},_k=R("span",{baseStyle:Ff});_k.displayName="VisuallyHidden";var Ek=R("input",{baseStyle:Ff});Ek.displayName="VisuallyHiddenInput";var Ew=!1,Af=null,Ei=!1,vh=new Set,qV=typeof window<"u"&&window.navigator!=null?/^Mac/.test(window.navigator.platform):!1;function LV(e){return!(e.metaKey||!qV&&e.altKey||e.ctrlKey)}function tv(e,t){vh.forEach(n=>n(e,t))}function Pw(e){Ei=!0,LV(e)&&(Af="keyboard",tv("keyboard",e))}function Aa(e){Af="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(Ei=!0,tv("pointer",e))}function BV(e){e.target===window||e.target===document||(Ei||(Af="keyboard",tv("keyboard",e)),Ei=!1)}function zV(){Ei=!1}function Tw(){return Af!=="pointer"}function VV(){if(typeof window>"u"||Ew)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...n){Ei=!0,e.apply(this,n)},document.addEventListener("keydown",Pw,!0),document.addEventListener("keyup",Pw,!0),window.addEventListener("focus",BV,!0),window.addEventListener("blur",zV,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",Aa,!0),document.addEventListener("pointermove",Aa,!0),document.addEventListener("pointerup",Aa,!0)):(document.addEventListener("mousedown",Aa,!0),document.addEventListener("mousemove",Aa,!0),document.addEventListener("mouseup",Aa,!0)),Ew=!0}function Pk(e){VV(),e(Tw());const t=()=>e(Tw());return vh.add(t),()=>{vh.delete(t)}}var[$V,jV]=be({name:"CheckboxGroupContext",strict:!1}),WV=(...e)=>e.filter(Boolean).join(" ");function Fw(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}var zt=e=>e?"":void 0;function kn(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}function HV(...e){return function(n){e.forEach(r=>{r==null||r(n)})}}function Aw(e){return e&&Fw(e)&&Fw(e.target)}function Tk(e={}){const{defaultValue:t,value:n,onChange:r,isDisabled:o,isNative:a}=e,i=Ue(r),[s,l]=Fo({value:n,defaultValue:t||[],onChange:i}),u=p.exports.useCallback(d=>{if(!s)return;const f=Aw(d)?d.target.checked:!s.includes(d),m=Aw(d)?d.target.value:d,v=f?[...s,m]:s.filter(h=>String(h)!==String(m));l(v)},[l,s]),c=p.exports.useCallback((d={})=>({...d,[a?"checked":"isChecked"]:s.some(m=>String(d.value)===String(m)),onChange:u}),[u,a,s]);return{value:s,isDisabled:o,onChange:u,setValue:l,getCheckboxProps:c}}function Fk(e){const{colorScheme:t,size:n,variant:r,children:o,isDisabled:a}=e,{value:i,onChange:s}=Tk(e),l=p.exports.useMemo(()=>({size:n,onChange:s,colorScheme:t,value:i,variant:r,isDisabled:a}),[n,s,t,i,r,a]);return S($V,{value:l,children:o})}Fk.displayName="CheckboxGroup";function UV(e){return P.createElement(R.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e},S("polyline",{points:"1.5 6 4.5 9 10.5 1"}))}function GV(e){return P.createElement(R.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e},S("line",{x1:"21",x2:"3",y1:"12",y2:"12"}))}function Ak(e){const{isIndeterminate:t,isChecked:n,...r}=e,o=t?GV:UV;return n||t?P.createElement(R.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},S(o,{...r})):null}function KV(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function nv(e={}){const t=Tf(e),{isDisabled:n,isReadOnly:r,isRequired:o,isInvalid:a,id:i,onBlur:s,onFocus:l,"aria-describedby":u}=t,{defaultChecked:c,isChecked:d,isFocusable:f,onChange:m,isIndeterminate:v,name:h,value:b,tabIndex:y=void 0,"aria-label":g,"aria-labelledby":w,"aria-invalid":x,...k}=e,_=KV(k,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),E=Ue(m),T=Ue(s),O=Ue(l),[A,q]=p.exports.useState(!1),[$,z]=p.exports.useState(!1),[Z,te]=p.exports.useState(!1),[V,L]=p.exports.useState(!1);p.exports.useEffect(()=>Pk(q),[]);const N=p.exports.useRef(null),[B,X]=p.exports.useState(!0),[ee,Q]=p.exports.useState(!!c),U=d!==void 0,H=U?d:ee,ie=p.exports.useCallback(K=>{if(r||n){K.preventDefault();return}U||Q(H?K.target.checked:v?!0:K.target.checked),E==null||E(K)},[r,n,H,U,v,E]);An(()=>{N.current&&(N.current.indeterminate=Boolean(v))},[v]),tr(()=>{n&&z(!1)},[n,z]),An(()=>{const K=N.current;!(K!=null&&K.form)||(K.form.onreset=()=>{Q(!!c)})},[]);const me=n&&!f,j=p.exports.useCallback(K=>{K.key===" "&&L(!0)},[L]),ae=p.exports.useCallback(K=>{K.key===" "&&L(!1)},[L]);An(()=>{if(!N.current)return;N.current.checked!==H&&Q(N.current.checked)},[N.current]);const ge=p.exports.useCallback((K={},de=null)=>{const Te=we=>{$&&we.preventDefault(),L(!0)};return{...K,ref:de,"data-active":zt(V),"data-hover":zt(Z),"data-checked":zt(H),"data-focus":zt($),"data-focus-visible":zt($&&A),"data-indeterminate":zt(v),"data-disabled":zt(n),"data-invalid":zt(a),"data-readonly":zt(r),"aria-hidden":!0,onMouseDown:kn(K.onMouseDown,Te),onMouseUp:kn(K.onMouseUp,()=>L(!1)),onMouseEnter:kn(K.onMouseEnter,()=>te(!0)),onMouseLeave:kn(K.onMouseLeave,()=>te(!1))}},[V,H,n,$,A,Z,v,a,r]),xe=p.exports.useCallback((K={},de=null)=>({..._,...K,ref:ke(de,Te=>{!Te||X(Te.tagName==="LABEL")}),onClick:kn(K.onClick,()=>{var Te;B||((Te=N.current)==null||Te.click(),requestAnimationFrame(()=>{var we;(we=N.current)==null||we.focus()}))}),"data-disabled":zt(n),"data-checked":zt(H),"data-invalid":zt(a)}),[_,n,H,a,B]),le=p.exports.useCallback((K={},de=null)=>({...K,ref:ke(N,de),type:"checkbox",name:h,value:b,id:i,tabIndex:y,onChange:kn(K.onChange,ie),onBlur:kn(K.onBlur,T,()=>z(!1)),onFocus:kn(K.onFocus,O,()=>z(!0)),onKeyDown:kn(K.onKeyDown,j),onKeyUp:kn(K.onKeyUp,ae),required:o,checked:H,disabled:me,readOnly:r,"aria-label":g,"aria-labelledby":w,"aria-invalid":x?Boolean(x):a,"aria-describedby":u,"aria-disabled":n,style:Ff}),[h,b,i,ie,T,O,j,ae,o,H,me,r,g,w,x,a,u,n,y]),ve=p.exports.useCallback((K={},de=null)=>({...K,ref:de,onMouseDown:kn(K.onMouseDown,Iw),onTouchStart:kn(K.onTouchStart,Iw),"data-disabled":zt(n),"data-checked":zt(H),"data-invalid":zt(a)}),[H,n,a]);return{state:{isInvalid:a,isFocused:$,isChecked:H,isActive:V,isHovered:Z,isIndeterminate:v,isDisabled:n,isReadOnly:r,isRequired:o},getRootProps:xe,getCheckboxProps:ge,getInputProps:le,getLabelProps:ve,htmlProps:_}}function Iw(e){e.preventDefault(),e.stopPropagation()}var YV={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},XV={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},ZV=rr({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),QV=rr({from:{opacity:0},to:{opacity:1}}),JV=rr({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),Ik=M(function(t,n){const r=jV(),o={...r,...t},a=$e("Checkbox",o),i=ye(t),{spacing:s="0.5rem",className:l,children:u,iconColor:c,iconSize:d,icon:f=S(Ak,{}),isChecked:m,isDisabled:v=r==null?void 0:r.isDisabled,onChange:h,inputProps:b,...y}=i;let g=m;(r==null?void 0:r.value)&&i.value&&(g=r.value.includes(i.value));let w=h;(r==null?void 0:r.onChange)&&i.value&&(w=HV(r.onChange,h));const{state:x,getInputProps:k,getCheckboxProps:_,getLabelProps:E,getRootProps:T}=nv({...y,isDisabled:v,isChecked:g,onChange:w}),O=p.exports.useMemo(()=>({animation:x.isIndeterminate?`${QV} 20ms linear, ${JV} 200ms linear`:`${ZV} 200ms linear`,fontSize:d,color:c,...a.icon}),[c,d,,x.isIndeterminate,a.icon]),A=p.exports.cloneElement(f,{__css:O,isIndeterminate:x.isIndeterminate,isChecked:x.isChecked});return P.createElement(R.label,{__css:{...XV,...a.container},className:WV("chakra-checkbox",l),...T()},S("input",{className:"chakra-checkbox__input",...k(b,n)}),P.createElement(R.span,{__css:{...YV,...a.control},className:"chakra-checkbox__control",..._()},A),u&&P.createElement(R.span,{className:"chakra-checkbox__label",...E(),__css:{marginStart:s,...a.label}},u))});Ik.displayName="Checkbox";function e$(e){return S(Mt,{focusable:"false","aria-hidden":!0,...e,children:S("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}var Gl=M(function(t,n){const r=ht("CloseButton",t),{children:o,isDisabled:a,__css:i,...s}=ye(t),l={outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0};return P.createElement(R.button,{type:"button","aria-label":"Close",ref:n,disabled:a,__css:{...l,...r,...i},...s},o||S(e$,{width:"1em",height:"1em"}))});Gl.displayName="CloseButton";var Rk=e=>{const{type:t="checkbox",_hover:n,_invalid:r,_disabled:o,_focus:a,_checked:i,_child:s={opacity:0},_checkedAndChild:l={opacity:1},_checkedAndDisabled:u,_checkedAndFocus:c,_checkedAndHover:d,children:f,...m}=e,v=`input[type=${t}]:checked:disabled + &`,h=`input[type=${t}]:checked:hover:not(:disabled) + &`,b=`input[type=${t}]:checked:focus + &`,y=`input[type=${t}]:disabled + &`,g=`input[type=${t}]:focus + &`,w=`input[type=${t}]:hover:not(:disabled):not(:checked) + &`,x=`input[type=${t}]:checked + &, input[type=${t}][aria-checked=mixed] + &`,k=`input[type=${t}][aria-invalid=true] + &`,_="& > *";return P.createElement(R.div,{...m,"aria-hidden":!0,__css:{display:"inline-flex",alignItems:"center",justifyContent:"center",transitionProperty:"common",transitionDuration:"fast",flexShrink:0,[g]:a,[w]:n,[y]:o,[k]:r,[v]:u,[b]:c,[h]:d,[_]:s,[x]:{...i,[_]:l}}},f)};Rk.displayName="ControlBox";function t$(e){const t=parseFloat(e);return typeof t!="number"||Number.isNaN(t)?0:t}function rv(e,t){let n=t$(e);const r=10**(t!=null?t:10);return n=Math.round(n*r)/r,t?n.toFixed(t):n.toString()}function yh(e){if(!Number.isFinite(e))return 0;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n+=1;return n}function id(e,t,n){return(e-t)*100/(n-t)}function Nk(e,t,n){return(n-t)*e+t}function bh(e,t,n){const r=Math.round((e-t)/n)*n+t,o=yh(n);return rv(r,o)}function di(e,t,n){return e==null?e:(n<t&&console.warn("clamp: max cannot be less than min"),Math.min(Math.max(e,t),n))}function Mk(e={}){const{onChange:t,precision:n,defaultValue:r,value:o,step:a=1,min:i=Number.MIN_SAFE_INTEGER,max:s=Number.MAX_SAFE_INTEGER,keepWithinRange:l=!0}=e,u=Ue(t),[c,d]=p.exports.useState(()=>{var A;return r==null?"":(A=Qp(r,a,n))!=null?A:""}),f=typeof o<"u",m=f?o:c,v=Ok(ro(m),a),h=n!=null?n:v,b=p.exports.useCallback(A=>{A!==m&&(f||d(A.toString()),u==null||u(A.toString(),ro(A)))},[u,f,m]),y=p.exports.useCallback(A=>{let q=A;return l&&(q=di(q,i,s)),rv(q,h)},[h,l,s,i]),g=p.exports.useCallback((A=a)=>{let q;m===""?q=ro(A):q=ro(m)+A,q=y(q),b(q)},[y,a,b,m]),w=p.exports.useCallback((A=a)=>{let q;m===""?q=ro(-A):q=ro(m)-A,q=y(q),b(q)},[y,a,b,m]),x=p.exports.useCallback(()=>{var q;let A;r==null?A="":A=(q=Qp(r,a,n))!=null?q:i,b(A)},[r,n,a,b,i]),k=p.exports.useCallback(A=>{var $;const q=($=Qp(A,a,h))!=null?$:i;b(q)},[h,a,b,i]),_=ro(m);return{isOutOfRange:_>s||_<i,isAtMax:_===s,isAtMin:_===i,precision:h,value:m,valueAsNumber:_,update:b,reset:x,increment:g,decrement:w,clamp:y,cast:k,setValue:d}}function ro(e){return parseFloat(e.toString().replace(/[^\w.-]+/g,""))}function Ok(e,t){return Math.max(yh(t),yh(e))}function Qp(e,t,n){const r=ro(e);if(Number.isNaN(r))return;const o=Ok(r,t);return rv(r,n!=null?n:o)}var Dk=`
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root {
      --chakra-vh: 100dvh;
    }
  }
`,qk=()=>S(ef,{styles:Dk}),Lk=()=>S(ef,{styles:`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${Dk}
    `});function ia(e,t,n,r){const o=Ue(n);return p.exports.useEffect(()=>{const a=typeof e=="function"?e():e!=null?e:document;if(!(!n||!a))return a.addEventListener(t,o,r),()=>{a.removeEventListener(t,o,r)}},[t,e,r,o,n]),()=>{const a=typeof e=="function"?e():e!=null?e:document;a==null||a.removeEventListener(t,o,r)}}function n$(e){return"current"in e}var Bk=()=>typeof window<"u";function r$(){var t;const e=navigator.userAgentData;return(t=e==null?void 0:e.platform)!=null?t:navigator.platform}var o$=e=>Bk()&&e.test(navigator.vendor),a$=e=>Bk()&&e.test(r$()),i$=()=>a$(/mac|iphone|ipad|ipod/i),s$=()=>i$()&&o$(/apple/i);function zk(e){const{ref:t,elements:n,enabled:r}=e,o=()=>{var i;var a;return(i=(a=t.current)==null?void 0:a.ownerDocument)!=null?i:document};ia(o,"pointerdown",a=>{if(!s$()||!r)return;const i=a.target,l=(n!=null?n:[t]).some(u=>{const c=n$(u)?u.current:u;return(c==null?void 0:c.contains(i))||c===i});o().activeElement!==i&&l&&(a.preventDefault(),i.focus())})}var[l$,If]=be({name:"EditableStylesContext",errorMessage:`useEditableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Editable />" `}),[u$,Kl]=be({name:"EditableContext",errorMessage:"useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"});function Rw(e,t){return e?e===t||e.contains(t):!1}function Vk(e={}){const{onChange:t,onCancel:n,onSubmit:r,value:o,isDisabled:a,defaultValue:i,startWithEditView:s,isPreviewFocusable:l=!0,submitOnBlur:u=!0,selectAllOnFocus:c=!0,placeholder:d,onEdit:f,...m}=e,v=Ue(f),h=Boolean(s&&!a),[b,y]=p.exports.useState(h),[g,w]=Fo({defaultValue:i||"",value:o,onChange:t}),[x,k]=p.exports.useState(g),_=p.exports.useRef(null),E=p.exports.useRef(null),T=p.exports.useRef(null),O=p.exports.useRef(null),A=p.exports.useRef(null);zk({ref:_,enabled:b,elements:[O,A]});const q=!b&&!a;An(()=>{var j,ae;b&&((j=_.current)==null||j.focus(),c&&((ae=_.current)==null||ae.select()))},[]),tr(()=>{var j,ae,ge;if(!b){(j=T.current)==null||j.focus();return}(ae=_.current)==null||ae.focus(),c&&((ge=_.current)==null||ge.select()),v==null||v()},[b,v,c]);const $=p.exports.useCallback(()=>{q&&y(!0)},[q]),z=p.exports.useCallback(()=>{k(g)},[g]),Z=p.exports.useCallback(()=>{y(!1),w(x),n==null||n(x)},[n,w,x]),te=p.exports.useCallback(()=>{y(!1),k(g),r==null||r(g)},[g,r]);p.exports.useEffect(()=>{if(b)return;const j=_.current;(j==null?void 0:j.ownerDocument.activeElement)===j&&(j==null||j.blur())},[b]);const V=p.exports.useCallback(j=>{w(j.currentTarget.value)},[w]),L=p.exports.useCallback(j=>{const ae=j.key,xe={Escape:Z,Enter:le=>{!le.shiftKey&&!le.metaKey&&te()}}[ae];xe&&(j.preventDefault(),xe(j))},[Z,te]),N=p.exports.useCallback(j=>{const ae=j.key,xe={Escape:Z}[ae];xe&&(j.preventDefault(),xe(j))},[Z]),B=g.length===0,X=p.exports.useCallback(j=>{var Ee;if(!b)return;const ae=j.currentTarget.ownerDocument,ge=(Ee=j.relatedTarget)!=null?Ee:ae.activeElement,xe=Rw(O.current,ge),le=Rw(A.current,ge);!xe&&!le&&(u?te():Z())},[u,te,Z,b]),ee=p.exports.useCallback((j={},ae=null)=>{const ge=q&&l?0:void 0;return{...j,ref:ke(ae,E),children:B?d:g,hidden:b,"aria-disabled":qp(a),tabIndex:ge,onFocus:Cn(j.onFocus,$,z)}},[a,b,q,l,B,$,z,d,g]),Q=p.exports.useCallback((j={},ae=null)=>({...j,hidden:!b,placeholder:d,ref:ke(ae,_),disabled:a,"aria-disabled":qp(a),value:g,onBlur:Cn(j.onBlur,X),onChange:Cn(j.onChange,V),onKeyDown:Cn(j.onKeyDown,L),onFocus:Cn(j.onFocus,z)}),[a,b,X,V,L,z,d,g]),U=p.exports.useCallback((j={},ae=null)=>({...j,hidden:!b,placeholder:d,ref:ke(ae,_),disabled:a,"aria-disabled":qp(a),value:g,onBlur:Cn(j.onBlur,X),onChange:Cn(j.onChange,V),onKeyDown:Cn(j.onKeyDown,N),onFocus:Cn(j.onFocus,z)}),[a,b,X,V,N,z,d,g]),H=p.exports.useCallback((j={},ae=null)=>({"aria-label":"Edit",...j,type:"button",onClick:Cn(j.onClick,$),ref:ke(ae,T),disabled:a}),[$,a]),ie=p.exports.useCallback((j={},ae=null)=>({...j,"aria-label":"Submit",ref:ke(A,ae),type:"button",onClick:Cn(j.onClick,te),disabled:a}),[te,a]),me=p.exports.useCallback((j={},ae=null)=>({"aria-label":"Cancel",id:"cancel",...j,ref:ke(O,ae),type:"button",onClick:Cn(j.onClick,Z),disabled:a}),[Z,a]);return{isEditing:b,isDisabled:a,isValueEmpty:B,value:g,onEdit:$,onCancel:Z,onSubmit:te,getPreviewProps:ee,getInputProps:Q,getTextareaProps:U,getEditButtonProps:H,getSubmitButtonProps:ie,getCancelButtonProps:me,htmlProps:m}}var $k=M(function(t,n){const r=$e("Editable",t),o=ye(t),{htmlProps:a,...i}=Vk(o),{isEditing:s,onSubmit:l,onCancel:u,onEdit:c}=i,d=Je("chakra-editable",t.className),f=yD(t.children,{isEditing:s,onSubmit:l,onCancel:u,onEdit:c});return P.createElement(u$,{value:i},P.createElement(l$,{value:r},P.createElement(R.div,{ref:n,...a,className:d},f)))});$k.displayName="Editable";var ov={fontSize:"inherit",fontWeight:"inherit",textAlign:"inherit",bg:"transparent"},jk=M(function(t,n){const{getInputProps:r}=Kl(),o=If(),a=r(t,n),i=Je("chakra-editable__input",t.className);return P.createElement(R.input,{...a,__css:{outline:0,...ov,...o.input},className:i})});jk.displayName="EditableInput";var Wk=M(function(t,n){const{getTextareaProps:r}=Kl(),o=If(),a=r(t,n),i=Je("chakra-editable__textarea",t.className);return P.createElement(R.textarea,{...a,__css:{outline:0,...ov,...o.textarea},className:i})});Wk.displayName="EditableTextarea";var Hk=M(function(t,n){const{getPreviewProps:r}=Kl(),o=If(),a=r(t,n),i=Je("chakra-editable__preview",t.className);return P.createElement(R.span,{...a,__css:{cursor:"text",display:"inline-block",...ov,...o.preview},className:i})});Hk.displayName="EditablePreview";function c$(){const{isEditing:e,getEditButtonProps:t,getCancelButtonProps:n,getSubmitButtonProps:r}=Kl();return{isEditing:e,getEditButtonProps:t,getCancelButtonProps:n,getSubmitButtonProps:r}}function d$(){const{isEditing:e,onSubmit:t,onCancel:n,onEdit:r,isDisabled:o}=Kl();return{isEditing:e,onSubmit:t,onCancel:n,onEdit:r,isDisabled:o}}var f$=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(o){e.addRange(o)}),t&&t.focus()}},p$=f$,Nw={"text/plain":"Text","text/html":"Url",default:"Text"},m$="Copy to clipboard: #{key}, Enter";function h$(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function g$(e,t){var n,r,o,a,i,s,l=!1;t||(t={}),n=t.debug||!1;try{o=p$(),a=document.createRange(),i=document.getSelection(),s=document.createElement("span"),s.textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(c){if(c.stopPropagation(),t.format)if(c.preventDefault(),typeof c.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=Nw[t.format]||Nw.default;window.clipboardData.setData(d,e)}else c.clipboardData.clearData(),c.clipboardData.setData(t.format,e);t.onCopy&&(c.preventDefault(),t.onCopy(c.clipboardData))}),document.body.appendChild(s),a.selectNodeContents(s),i.addRange(a);var u=document.execCommand("copy");if(!u)throw new Error("copy command was unsuccessful");l=!0}catch(c){n&&console.error("unable to copy using execCommand: ",c),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),l=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),r=h$("message"in t?t.message:m$),window.prompt(r,e)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(a):i.removeAllRanges()),s&&document.body.removeChild(s),o()}return l}var v$=g$,Rf=Ll?p.exports.useLayoutEffect:p.exports.useEffect;function Vr(e,t=[]){const n=p.exports.useRef(e);return Rf(()=>{n.current=e}),p.exports.useCallback((...r)=>{var o;return(o=n.current)==null?void 0:o.call(n,...r)},t)}function Yl(e,t,n,r){const o=Vr(t);return p.exports.useEffect(()=>{var i;const a=(i=nl(n))!=null?i:document;if(!!t)return a.addEventListener(e,o,r),()=>{a.removeEventListener(e,o,r)}},[e,n,r,o,t]),()=>{var i;((i=nl(n))!=null?i:document).removeEventListener(e,o,r)}}function y$(e){const{isOpen:t,ref:n}=e,[r,o]=p.exports.useState(t),[a,i]=p.exports.useState(!1);return p.exports.useEffect(()=>{a||(o(t),i(!0))},[t,a,r]),Yl("animationend",()=>{o(t)},()=>n.current),{present:!(t?!1:!r),onComplete(){var l;const u=L7(n.current),c=new u.CustomEvent("animationend",{bubbles:!0});(l=n.current)==null||l.dispatchEvent(c)}}}function b$(e=!1){const[t,n]=p.exports.useState(e),r=p.exports.useMemo(()=>({on:()=>n(!0),off:()=>n(!1),toggle:()=>n(o=>!o)}),[]);return[t,r]}function w$(e,t={}){const[n,r]=p.exports.useState(!1),[o,a]=p.exports.useState(e),{timeout:i=1500,...s}=typeof t=="number"?{timeout:t}:t,l=p.exports.useCallback(()=>{const u=v$(o,s);r(u)},[o,s]);return p.exports.useEffect(()=>{let u=null;return n&&(u=window.setTimeout(()=>{r(!1)},i)),()=>{u&&window.clearTimeout(u)}},[i,n]),{value:o,setValue:a,onCopy:l,hasCopied:n}}function x$(e){const t=p.exports.useRef(null);return t.current===null&&(t.current=typeof e=="function"?e():e),t.current}function Uk(e,t){const n=e!==void 0;return[n,n&&typeof e<"u"?e:t]}function S$(e){const{value:t,defaultValue:n,onChange:r,shouldUpdate:o=(f,m)=>f!==m}=e,a=Vr(r),i=Vr(o),[s,l]=p.exports.useState(n),u=t!==void 0,c=u?t:s,d=p.exports.useCallback(f=>{const m=nl(f,c);!i(c,m)||(u||l(m),a(m))},[u,a,c,i]);return[c,d]}function C$(e,t){const[n,r]=p.exports.useState(null),o=p.exports.useRef();return Rf(()=>{if(!e.current)return;const a=e.current;function i(){o.current=requestAnimationFrame(()=>{const s=P7(a);r(s)})}return i(),t&&(window.addEventListener("resize",i),window.addEventListener("scroll",i)),()=>{t&&(window.removeEventListener("resize",i),window.removeEventListener("scroll",i)),o.current&&cancelAnimationFrame(o.current)}},[t]),n}function av(e,t){const n=p.exports.useId();return p.exports.useMemo(()=>e||[t,n].filter(Boolean).join("-"),[e,t,n])}function k$(e,...t){const n=av(e);return p.exports.useMemo(()=>t.map(r=>`${r}-${n}`),[n,t])}function _$(e){const[t,n]=p.exports.useState(null);return{ref:p.exports.useCallback(o=>{n(o?e:null)},[e]),id:t,isRendered:Boolean(t)}}function E$(e={}){const{onClose:t,onOpen:n,isOpen:r,id:o}=e,a=Vr(n),i=Vr(t),[s,l]=p.exports.useState(e.defaultIsOpen||!1),[u,c]=Uk(r,s),d=av(o,"disclosure"),f=p.exports.useCallback(()=>{u||l(!1),i==null||i()},[u,i]),m=p.exports.useCallback(()=>{u||l(!0),a==null||a()},[u,a]),v=p.exports.useCallback(()=>{(c?f:m)()},[c,m,f]);return{isOpen:!!c,onOpen:m,onClose:f,onToggle:v,isControlled:u,getButtonProps:(h={})=>({...h,"aria-expanded":c,"aria-controls":d,onClick:Q7(h.onClick,v)}),getDisclosureProps:(h={})=>({...h,hidden:!c,id:d})}}function P$(){const e=p.exports.useRef(new Map),t=e.current,n=p.exports.useCallback((o,a,i,s)=>{const l=Qg(i,a==="pointerdown");e.current.set(i,{__listener:l,type:Jg(a),el:o,options:s}),o.addEventListener(a,l,s)},[]),r=p.exports.useCallback((o,a,i,s)=>{const{__listener:l}=e.current.get(i);o.removeEventListener(a,l,s),e.current.delete(l)},[]);return p.exports.useEffect(()=>()=>{t.forEach((o,a)=>{r(o.el,o.type,a,o.options)})},[r,t]),{add:n,remove:r}}var Nf=(e,t)=>{const n=p.exports.useRef(!1),r=p.exports.useRef(!1);p.exports.useEffect(()=>{if(n.current&&r.current)return e();r.current=!0},t),p.exports.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[])};function T$(e,t){const{shouldFocus:n,preventScroll:r}=t;Nf(()=>{const o=e.current;!o||!n||H7(o)||rl(o,{preventScroll:r,nextTick:!0})},[n,e,r])}function F$(e){const t=e.current;if(!t)return!1;const n=z7(t);return!n||Zg(t,n)?!1:!!G7(n)}function A$(e,t){const{shouldFocus:n,visible:r,focusRef:o}=t,a=n&&!r;Nf(()=>{if(!a||F$(e))return;const i=(o==null?void 0:o.current)||e.current;i&&rl(i,{nextTick:!0})},[a,e,o])}function iv(e,t,n,r){return Yl(Jg(t),Qg(n,t==="pointerdown"),e,r)}function I$(e){const{ref:t,elements:n,enabled:r}=e,o=kF("Safari");iv(()=>va(t.current),"pointerdown",i=>{if(!o||!r)return;const s=i.target,u=(n!=null?n:[t]).some(c=>{const d=$S(c)?c.current:c;return Zg(d,s)});!GS(s)&&u&&(i.preventDefault(),rl(s))})}var R$={preventScroll:!0,shouldFocus:!1};function N$(e,t=R$){const{focusRef:n,preventScroll:r,shouldFocus:o,visible:a}=t,i=$S(e)?e.current:e,s=o&&a,l=p.exports.useRef(s),u=p.exports.useRef(a);Rf(()=>{!u.current&&a&&(l.current=s),u.current=a},[a,s]);const c=p.exports.useCallback(()=>{if(!(!a||!i||!l.current)&&(l.current=!1,!Zg(i,document.activeElement)))if(n!=null&&n.current)rl(n.current,{preventScroll:r,nextTick:!0});else{const d=Z7(i);d.length>0&&rl(d[0],{preventScroll:r,nextTick:!0})}},[a,r,i,n]);Nf(()=>{c()},[c]),Yl("transitionend",c,i)}function sv(e,t=[]){return p.exports.useEffect(()=>()=>e(),t)}function M$(){const e=p.exports.useRef(!1),[t,n]=p.exports.useState(0);return sv(()=>{e.current=!0}),p.exports.useCallback(()=>{e.current||n(t+1)},[t])}function O$(e,t){const n=Vr(e);p.exports.useEffect(()=>{let r=null;const o=()=>n();return t!==null&&(r=window.setInterval(o,t)),()=>{r&&window.clearInterval(r)}},[t,n])}function D$(e){const t=p.exports.useRef(null);return t.current=e,t}function Gk(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function q$(...e){return p.exports.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{n&&Gk(n,t)})},e)}function L$(e=!0){const t=p.exports.useRef();return Yl("mousedown",n=>{e&&(t.current=n.target)}),t}function B$(e){const{ref:t,handler:n,enabled:r=!0}=e,o=Vr(n),i=p.exports.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}).current;p.exports.useEffect(()=>{if(!r)return;const s=d=>{Jp(d,t)&&(i.isPointerDown=!0)},l=d=>{if(i.ignoreEmulatedMouseEvents){i.ignoreEmulatedMouseEvents=!1;return}i.isPointerDown&&n&&Jp(d,t)&&(i.isPointerDown=!1,o(d))},u=d=>{i.ignoreEmulatedMouseEvents=!0,n&&i.isPointerDown&&Jp(d,t)&&(i.isPointerDown=!1,o(d))},c=va(t.current);return c.addEventListener("mousedown",s,!0),c.addEventListener("mouseup",l,!0),c.addEventListener("touchstart",s,!0),c.addEventListener("touchend",u,!0),()=>{c.removeEventListener("mousedown",s,!0),c.removeEventListener("mouseup",l,!0),c.removeEventListener("touchstart",s,!0),c.removeEventListener("touchend",u,!0)}},[n,t,o,i,r])}function Jp(e,t){var n;const r=e.target;return e.button>0||r&&!va(r).contains(r)?!1:!((n=t.current)!=null&&n.contains(r))}function z$(e,t){const{onPan:n,onPanStart:r,onPanEnd:o,onPanSessionStart:a,onPanSessionEnd:i,threshold:s}=t,l=Boolean(n||r||o||a||i),u=p.exports.useRef(null),c={onSessionStart:a,onSessionEnd:i,onStart:r,onMove:n,onEnd(f,m){u.current=null,o==null||o(f,m)}};p.exports.useEffect(()=>{var f;(f=u.current)==null||f.updateHandlers(c)});function d(f){u.current=new vF(f,c,s)}iv(()=>e.current,"pointerdown",l?d:XS),sv(()=>{var f;(f=u.current)==null||f.end(),u.current=null})}function V$(e){const t=p.exports.useRef();return p.exports.useEffect(()=>{t.current=e},[e]),t.current}function $$(e){const{key:t}=e;return t.length===1||t.length>1&&/[^a-zA-Z0-9]/.test(t)}function j$(e={}){const{timeout:t=300,preventDefault:n=()=>!0}=e,[r,o]=p.exports.useState([]),a=p.exports.useRef(),i=()=>{a.current&&(clearTimeout(a.current),a.current=null)},s=()=>{i(),a.current=setTimeout(()=>{o([]),a.current=null},t)};p.exports.useEffect(()=>i,[]);function l(u){return c=>{if(c.key==="Backspace"){const d=[...r];d.pop(),o(d);return}if($$(c)){const d=r.concat(c.key);n(c)&&(c.preventDefault(),c.stopPropagation()),o(d),u(d.join("")),s()}}}return l}function W$(e,t){const n=Vr(e);p.exports.useEffect(()=>{if(t==null)return;let r=null;return r=window.setTimeout(()=>{n()},t),()=>{r&&window.clearTimeout(r)}},[t,n])}function H$(e,t){const n=p.exports.useRef();p.exports.useEffect(()=>{if(n.current){const r=Object.keys({...n.current,...t}),o={};r.forEach(a=>{n.current[a]!==t[a]&&(o[a]={from:n.current[a],to:t[a]})}),Object.keys(o).length&&console.log("[why-did-you-update]",e,o)}n.current=t})}function lv(e){const t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}var Mf=M(function(t,n){const{htmlSize:r,...o}=t,a=$e("Input",o),i=ye(o),s=Pf(i),l=Je("chakra-input",t.className);return P.createElement(R.input,{size:r,...s,__css:a.field,ref:n,className:l})});Mf.displayName="Input";Mf.id="Input";var[U$,uv]=be({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),Kk=M(function(t,n){const r=$e("Input",t),{children:o,className:a,...i}=ye(t),s=Je("chakra-input__group",a),l={},u=Yr(o),c=r.field;u.forEach(f=>{var m,v;!r||(c&&f.type.id==="InputLeftElement"&&(l.paddingStart=(m=c.height)!=null?m:c.h),c&&f.type.id==="InputRightElement"&&(l.paddingEnd=(v=c.height)!=null?v:c.h),f.type.id==="InputRightAddon"&&(l.borderEndRadius=0),f.type.id==="InputLeftAddon"&&(l.borderStartRadius=0))});const d=u.map(f=>{var m,v;const h=lv({size:((m=f.props)==null?void 0:m.size)||t.size,variant:((v=f.props)==null?void 0:v.variant)||t.variant});return f.type.id!=="Input"?p.exports.cloneElement(f,h):p.exports.cloneElement(f,Object.assign(h,l,f.props))});return P.createElement(R.div,{className:s,ref:n,__css:{width:"100%",display:"flex",position:"relative"},...i},S(U$,{value:r,children:d}))});Kk.displayName="InputGroup";var G$={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},K$=R("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),Of=M(function(t,n){var s;const{placement:r="left",...o}=t,a=(s=G$[r])!=null?s:{},i=uv();return S(K$,{ref:n,...o,__css:{...i.addon,...a}})});Of.displayName="InputAddon";var cv=M(function(t,n){return S(Of,{ref:n,placement:"left",...t,className:Je("chakra-input__left-addon",t.className)})});cv.displayName="InputLeftAddon";cv.id="InputLeftAddon";var dv=M(function(t,n){return S(Of,{ref:n,placement:"right",...t,className:Je("chakra-input__right-addon",t.className)})});dv.displayName="InputRightAddon";dv.id="InputRightAddon";var Y$=R("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),Df=M(function(t,n){var u,c;const{placement:r="left",...o}=t,a=uv(),i=a.field,l={[r==="left"?"insetStart":"insetEnd"]:"0",width:(u=i==null?void 0:i.height)!=null?u:i==null?void 0:i.h,height:(c=i==null?void 0:i.height)!=null?c:i==null?void 0:i.h,fontSize:i==null?void 0:i.fontSize,...a.element};return S(Y$,{ref:n,__css:l,...o})});Df.id="InputElement";Df.displayName="InputElement";var fv=M(function(t,n){const{className:r,...o}=t,a=Je("chakra-input__left-element",r);return S(Df,{ref:n,placement:"left",className:a,...o})});fv.id="InputLeftElement";fv.displayName="InputLeftElement";var pv=M(function(t,n){const{className:r,...o}=t,a=Je("chakra-input__right-element",r);return S(Df,{ref:n,placement:"right",className:a,...o})});pv.id="InputRightElement";pv.displayName="InputRightElement";function X$(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}var Yk=Object.freeze(["base","sm","md","lg","xl","2xl"]);function Eo(e,t){return Array.isArray(e)?e.map(n=>n===null?null:t(n)):X$(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}function Z$(e,t=Yk){const n={};return e.forEach((r,o)=>{const a=t[o];r!=null&&(n[a]=r)}),n}var Xk=M(function(e,t){const{ratio:n=4/3,children:r,className:o,...a}=e,i=p.exports.Children.only(r),s=Je("chakra-aspect-ratio",o);return P.createElement(R.div,{ref:t,position:"relative",className:s,_before:{height:0,content:'""',display:"block",paddingBottom:Eo(n,l=>`${1/l*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...a},i)});Xk.displayName="AspectRatio";var ao=M(function(t,n){const r=ht("Badge",t),{className:o,...a}=ye(t);return P.createElement(R.span,{ref:n,className:Je("chakra-badge",t.className),...a,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})});ao.displayName="Badge";var bt=R("div");bt.displayName="Box";var mv=M(function(t,n){const{size:r,centerContent:o=!0,...a}=t;return S(bt,{ref:n,boxSize:r,__css:{...o?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});mv.displayName="Square";var Zk=M(function(t,n){const{size:r,...o}=t;return S(mv,{size:r,ref:n,borderRadius:"9999px",...o})});Zk.displayName="Circle";var Pi=R("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});Pi.displayName="Center";var Q$={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}},J$=M(function(t,n){const{axis:r="both",...o}=t;return P.createElement(R.div,{ref:n,__css:Q$[r],...o,position:"absolute"})}),Qk=M(function(t,n){const r=ht("Code",t),{className:o,...a}=ye(t);return P.createElement(R.code,{ref:n,className:Je("chakra-code",t.className),...a,__css:{display:"inline-block",...r}})});Qk.displayName="Code";var Jk=M(function(t,n){const{className:r,centerContent:o,...a}=ye(t),i=ht("Container",t);return P.createElement(R.div,{ref:n,className:Je("chakra-container",r),...a,__css:{...i,...o&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});Jk.displayName="Container";var e3=M(function(t,n){const{borderLeftWidth:r,borderBottomWidth:o,borderTopWidth:a,borderRightWidth:i,borderWidth:s,borderStyle:l,borderColor:u,...c}=ht("Divider",t),{className:d,orientation:f="horizontal",__css:m,...v}=ye(t),h={vertical:{borderLeftWidth:r||i||s||"1px",height:"100%"},horizontal:{borderBottomWidth:o||a||s||"1px",width:"100%"}};return P.createElement(R.hr,{ref:n,"aria-orientation":f,...v,__css:{...c,border:"0",borderColor:u,borderStyle:l,...h[f],...m},className:Je("chakra-divider",d)})});e3.displayName="Divider";var sd=M(function(t,n){const{direction:r,align:o,justify:a,wrap:i,basis:s,grow:l,shrink:u,...c}=t,d={display:"flex",flexDirection:r,alignItems:o,justifyContent:a,flexWrap:i,flexBasis:s,flexGrow:l,flexShrink:u};return P.createElement(R.div,{ref:n,__css:d,...c})});sd.displayName="Flex";var hv=M(function(t,n){const{templateAreas:r,gap:o,rowGap:a,columnGap:i,column:s,row:l,autoFlow:u,autoRows:c,templateRows:d,autoColumns:f,templateColumns:m,...v}=t,h={display:"grid",gridTemplateAreas:r,gridGap:o,gridRowGap:a,gridColumnGap:i,gridAutoColumns:f,gridColumn:s,gridRow:l,gridAutoFlow:u,gridAutoRows:c,gridTemplateRows:d,gridTemplateColumns:m};return P.createElement(R.div,{ref:n,__css:h,...v})});hv.displayName="Grid";function Mw(e){return Eo(e,t=>t==="auto"?"auto":`span ${t}/span ${t}`)}var t3=M(function(t,n){const{area:r,colSpan:o,colStart:a,colEnd:i,rowEnd:s,rowSpan:l,rowStart:u,...c}=t,d=lv({gridArea:r,gridColumn:Mw(o),gridRow:Mw(l),gridColumnStart:a,gridColumnEnd:i,gridRowStart:u,gridRowEnd:s});return P.createElement(R.div,{ref:n,__css:d,...c})});t3.displayName="GridItem";var Xl=M(function(t,n){const r=ht("Heading",t),{className:o,...a}=ye(t);return P.createElement(R.h2,{ref:n,className:Je("chakra-heading",t.className),...a,__css:r})});Xl.displayName="Heading";var ej=e=>e.replace(/[|\\{}()[\]^$+*?.-]/g,t=>`\\${t}`);function tj(e){const t=e.filter(n=>n.length!==0).map(n=>ej(n.trim()));return t.length?new RegExp(`(${t.join("|")})`,"ig"):null}function nj({text:e,query:t}){const n=tj(Array.isArray(t)?t:[t]);return n?e.split(n).filter(Boolean).map(o=>({text:o,match:n.test(o)})):[{text:e,match:!1}]}function n3(e){const{text:t,query:n}=e;return p.exports.useMemo(()=>nj({text:t,query:n}),[t,n])}var r3=M(function(t,n){const r=ht("Mark",t),o=ye(t);return S(bt,{ref:n,...o,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...r}})});function rj(e){const{children:t,query:n,styles:r}=e;if(typeof t!="string")throw new Error("The children prop of Highlight must be a string");const o=n3({query:n,text:t});return S(Ht,{children:o.map((a,i)=>a.match?S(r3,{sx:r,children:a.text},i):S(p.exports.Fragment,{children:a.text},i))})}var o3=M(function(t,n){const r=ht("Kbd",t),{className:o,...a}=ye(t);return P.createElement(R.kbd,{ref:n,className:Je("chakra-kbd",o),...a,__css:{fontFamily:"mono",...r}})});o3.displayName="Kbd";var a3=M(function(t,n){const r=ht("Link",t),{className:o,isExternal:a,...i}=ye(t);return P.createElement(R.a,{target:a?"_blank":void 0,rel:a?"noopener":void 0,ref:n,className:Je("chakra-link",o),...i,__css:r})});a3.displayName="Link";var oj=M(function(t,n){const{isExternal:r,target:o,rel:a,className:i,...s}=t;return P.createElement(R.a,{...s,ref:n,className:Je("chakra-linkbox__overlay",i),rel:r?"noopener noreferrer":a,target:r?"_blank":o,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})}),aj=M(function(t,n){const{className:r,...o}=t;return P.createElement(R.div,{ref:n,position:"relative",...o,className:Je("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})}),[ij,gv]=be({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),qf=M(function(t,n){const r=$e("List",t),{children:o,styleType:a="none",stylePosition:i,spacing:s,...l}=ye(t),u=Yr(o),d=s?{["& > *:not(style) ~ *:not(style)"]:{mt:s}}:{};return P.createElement(ij,{value:r},P.createElement(R.ul,{ref:n,listStyleType:a,listStylePosition:i,role:"list",__css:{...r.container,...d},...l},u))});qf.displayName="List";var i3=M((e,t)=>{const{as:n,...r}=e;return S(qf,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})});i3.displayName="OrderedList";var s3=M(function(t,n){const{as:r,...o}=t;return S(qf,{ref:n,as:"ul",styleType:"initial",marginStart:"1em",...o})});s3.displayName="UnorderedList";var l3=M(function(t,n){const r=gv();return P.createElement(R.li,{ref:n,...t,__css:r.item})});l3.displayName="ListItem";var u3=M(function(t,n){const r=gv();return S(Mt,{ref:n,role:"presentation",...t,__css:r.icon})});u3.displayName="ListIcon";var Lf=M(function(t,n){const{columns:r,spacingX:o,spacingY:a,spacing:i,minChildWidth:s,...l}=t,u=yn(),c=s?lj(s,u):uj(r);return S(hv,{ref:n,gap:i,columnGap:o,rowGap:a,templateColumns:c,...l})});Lf.displayName="SimpleGrid";function sj(e){return typeof e=="number"?`${e}px`:e}function lj(e,t){return Eo(e,n=>{const r=s0("sizes",n,sj(n))(t);return n===null?null:`repeat(auto-fit, minmax(${r}, 1fr))`})}function uj(e){return Eo(e,t=>t===null?null:`repeat(${t}, minmax(0, 1fr))`)}var vv=R("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});vv.displayName="Spacer";var ld="& > *:not(style) ~ *:not(style)";function c3(e){const{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[ld]:Eo(n,o=>r[o])}}function d3(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Eo(n,o=>r[o])}}var yv=e=>P.createElement(R.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});yv.displayName="StackItem";var Zl=M((e,t)=>{const{isInline:n,direction:r,align:o,justify:a,spacing:i="0.5rem",wrap:s,children:l,divider:u,className:c,shouldWrapChildren:d,...f}=e,m=n?"row":r!=null?r:"column",v=p.exports.useMemo(()=>c3({direction:m,spacing:i}),[m,i]),h=p.exports.useMemo(()=>d3({spacing:i,direction:m}),[i,m]),b=!!u,y=!d&&!b,g=p.exports.useMemo(()=>{const x=Yr(l);return y?x:x.map((k,_)=>{const E=typeof k.key<"u"?k.key:_,T=_+1===x.length,A=d?S(yv,{children:k},E):k;if(!b)return A;const q=p.exports.cloneElement(u,{__css:h}),$=T?null:q;return se(p.exports.Fragment,{children:[A,$]},E)})},[u,h,b,y,d,l]),w=Je("chakra-stack",c);return P.createElement(R.div,{ref:t,display:"flex",alignItems:o,justifyContent:a,flexDirection:v.flexDirection,flexWrap:s,className:w,__css:b?{}:{[ld]:v[ld]},...f},g)});Zl.displayName="Stack";var f3=M((e,t)=>S(Zl,{align:"center",...e,direction:"row",ref:t}));f3.displayName="HStack";var p3=e=>P.createElement(R.div,{className:"chakra-stack__divider",...e,__css:{...e.__css,borderWidth:0,alignSelf:"stretch",borderColor:"inherit",width:"auto",height:"auto"}});p3.displayName="StackDivider";var bv=M((e,t)=>S(Zl,{align:"center",...e,direction:"column",ref:t}));bv.displayName="VStack";var Ce=M(function(t,n){const r=ht("Text",t),{className:o,align:a,decoration:i,casing:s,...l}=ye(t),u=lv({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return P.createElement(R.p,{ref:n,className:Je("chakra-text",t.className),...u,...l,__css:r})});Ce.displayName="Text";function Ow(e){return typeof e=="number"?`${e}px`:e}var m3=M(function(t,n){const{spacing:r="0.5rem",spacingX:o,spacingY:a,children:i,justify:s,direction:l,align:u,className:c,shouldWrapChildren:d,...f}=t,m=p.exports.useMemo(()=>{const{spacingX:h=r,spacingY:b=r}={spacingX:o,spacingY:a};return{"--chakra-wrap-x-spacing":y=>Eo(h,g=>Ow(Mc("space",g)(y))),"--chakra-wrap-y-spacing":y=>Eo(b,g=>Ow(Mc("space",g)(y))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:s,alignItems:u,flexDirection:l,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}},[r,o,a,s,u,l]),v=p.exports.useMemo(()=>d?p.exports.Children.map(i,(h,b)=>S(wv,{children:h},b)):i,[i,d]);return P.createElement(R.div,{ref:n,className:Je("chakra-wrap",c),overflow:"hidden",...f},P.createElement(R.ul,{className:"chakra-wrap__list",__css:m},v))});m3.displayName="Wrap";var wv=M(function(t,n){const{className:r,...o}=t;return P.createElement(R.li,{ref:n,__css:{display:"flex",alignItems:"flex-start"},className:Je("chakra-wrap__listitem",r),...o})});wv.displayName="WrapItem";var cj={body:{classList:{add(){},remove(){}}},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}}},h3=cj,Ia=()=>{},dj={document:h3,navigator:{userAgent:""},CustomEvent:function(){return this},addEventListener:Ia,removeEventListener:Ia,getComputedStyle(){return{getPropertyValue(){return""}}},matchMedia(){return{matches:!1,addListener:Ia,removeListener:Ia}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)},setTimeout:()=>0,clearTimeout:Ia,setInterval:()=>0,clearInterval:Ia},fj=dj,pj={window:fj,document:h3},g3=typeof window<"u"?{window,document}:pj,xv=p.exports.createContext(g3);xv.displayName="EnvironmentContext";function v3(){return p.exports.useContext(xv)}function Sv(e){const{children:t,environment:n}=e,[r,o]=p.exports.useState(null),[a,i]=p.exports.useState(!1);p.exports.useEffect(()=>i(!0),[]);const s=p.exports.useMemo(()=>{if(n)return n;const l=r==null?void 0:r.ownerDocument,u=r==null?void 0:r.ownerDocument.defaultView;return l?{document:l,window:u}:g3},[r,n]);return se(xv.Provider,{value:s,children:[t,!n&&a&&S("span",{id:"__chakra_env",hidden:!0,ref:l=>{p.exports.startTransition(()=>{l&&o(l)})}})]})}Sv.displayName="EnvironmentProvider";var Dw=(e,t)=>{var r;var n;return(r=(n=e==null?void 0:e.breakpoints)==null?void 0:n[t])!=null?r:t};function Cv(e){const{breakpoint:t="",below:n,above:r}=e,o=yn(),a=Dw(o,n),i=Dw(o,r);let s=t;return a?s=`(max-width: ${a})`:i&&(s=`(min-width: ${i})`),s}function Ql(e,t={}){const{ssr:n=!0,fallback:r}=t,o=v3(),a=Array.isArray(e)?e:[e];let i=Array.isArray(r)?r:[r];i=i.filter(u=>u!=null);const[s,l]=p.exports.useState(()=>a.map((u,c)=>({media:u,matches:n?!!i[c]:o.window.matchMedia(u).matches})));return p.exports.useEffect(()=>{l(a.map(d=>({media:d,matches:o.window.matchMedia(d).matches})));const u=a.map(d=>o.window.matchMedia(d)),c=d=>{l(f=>f.slice().map(m=>m.media===d.media?{...m,matches:d.matches}:m))};return u.forEach(d=>{typeof d.addListener=="function"?d.addListener(c):d.addEventListener("change",c)}),()=>{u.forEach(d=>{typeof d.removeListener=="function"?d.removeListener(c):d.removeEventListener("change",c)})}},[o.window]),s.map(u=>u.matches)}function mj(e){const[t]=Ql("(prefers-reduced-motion: reduce)",e);return t}function hj(e){const[t,n]=Ql(["(prefers-color-scheme: light)","(prefers-color-scheme: dark)"],e);if(t)return"light";if(n)return"dark"}function y3(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function b3(e){var l;var t;const n=y3(e)?e:{fallback:e!=null?e:"base"},o=yn().__breakpoints.details.map(({minMaxQuery:u,breakpoint:c})=>({breakpoint:c,query:u.replace("@media screen and ","")})),a=o.map(u=>u.breakpoint===n.fallback),s=Ql(o.map(u=>u.query),{fallback:a,ssr:n.ssr}).findIndex(u=>u==!0);return(l=(t=o[s])==null?void 0:t.breakpoint)!=null?l:n.fallback}function gj(e,t,n=Yk){let r=Object.keys(e).indexOf(t);if(r!==-1)return e[t];let o=n.indexOf(t);for(;o>=0;){const a=n[o];if(e.hasOwnProperty(a)){r=o;break}o-=1}if(r!==-1){const a=n[r];return e[a]}}function w3(e,t){var n;const r=y3(t)?t:{fallback:t!=null?t:"base"},o=b3(r),a=yn();if(!o)return;const i=Array.from(((n=a.__breakpoints)==null?void 0:n.keys)||[]),s=Array.isArray(e)?Object.fromEntries(Object.entries(Z$(e,i)).map(([l,u])=>[l,u])):e;return gj(s,o,i)}function x3(e){const{breakpoint:t,hide:n,children:r,ssr:o}=e,[a]=Ql(t,{ssr:o});return(n?!a:a)?r:null}function S3(e){const{children:t,ssr:n}=e,r=Cv(e);return S(x3,{breakpoint:r,ssr:n,children:t})}S3.displayName="Show";function C3(e){const{children:t,ssr:n}=e,r=Cv(e);return S(x3,{breakpoint:r,hide:!0,ssr:n,children:t})}C3.displayName="Hide";var vj=e=>e?"":void 0;function yj(){const e=p.exports.useRef(new Map),t=e.current,n=p.exports.useCallback((o,a,i,s)=>{e.current.set(i,{type:a,el:o,options:s}),o.addEventListener(a,i,s)},[]),r=p.exports.useCallback((o,a,i,s)=>{o.removeEventListener(a,i,s),e.current.delete(i)},[]);return p.exports.useEffect(()=>()=>{t.forEach((o,a)=>{r(o.el,o.type,a,o.options)})},[r,t]),{add:n,remove:r}}function em(e){const t=e.target,{tagName:n,isContentEditable:r}=t;return n!=="INPUT"&&n!=="TEXTAREA"&&r!==!0}function k3(e={}){const{ref:t,isDisabled:n,isFocusable:r,clickOnEnter:o=!0,clickOnSpace:a=!0,onMouseDown:i,onMouseUp:s,onClick:l,onKeyDown:u,onKeyUp:c,tabIndex:d,onMouseOver:f,onMouseLeave:m,...v}=e,[h,b]=p.exports.useState(!0),[y,g]=p.exports.useState(!1),w=yj(),x=L=>{!L||L.tagName!=="BUTTON"&&b(!1)},k=h?d:d||0,_=n&&!r,E=p.exports.useCallback(L=>{if(n){L.stopPropagation(),L.preventDefault();return}L.currentTarget.focus(),l==null||l(L)},[n,l]),T=p.exports.useCallback(L=>{y&&em(L)&&(L.preventDefault(),L.stopPropagation(),g(!1),w.remove(document,"keyup",T,!1))},[y,w]),O=p.exports.useCallback(L=>{if(u==null||u(L),n||L.defaultPrevented||L.metaKey||!em(L.nativeEvent)||h)return;const N=o&&L.key==="Enter";a&&L.key===" "&&(L.preventDefault(),g(!0)),N&&(L.preventDefault(),L.currentTarget.click()),w.add(document,"keyup",T,!1)},[n,h,u,o,a,w,T]),A=p.exports.useCallback(L=>{if(c==null||c(L),n||L.defaultPrevented||L.metaKey||!em(L.nativeEvent)||h)return;a&&L.key===" "&&(L.preventDefault(),g(!1),L.currentTarget.click())},[a,h,n,c]),q=p.exports.useCallback(L=>{L.button===0&&(g(!1),w.remove(document,"mouseup",q,!1))},[w]),$=p.exports.useCallback(L=>{if(L.button!==0)return;if(n){L.stopPropagation(),L.preventDefault();return}h||g(!0),L.currentTarget.focus({preventScroll:!0}),w.add(document,"mouseup",q,!1),i==null||i(L)},[n,h,i,w,q]),z=p.exports.useCallback(L=>{L.button===0&&(h||g(!1),s==null||s(L))},[s,h]),Z=p.exports.useCallback(L=>{if(n){L.preventDefault();return}f==null||f(L)},[n,f]),te=p.exports.useCallback(L=>{y&&(L.preventDefault(),g(!1)),m==null||m(L)},[y,m]),V=ke(t,x);return h?{...v,ref:V,type:"button","aria-disabled":_?void 0:n,disabled:_,onClick:E,onMouseDown:i,onMouseUp:s,onKeyUp:c,onKeyDown:u,onMouseOver:f,onMouseLeave:m}:{...v,ref:V,role:"button","data-active":vj(y),"aria-disabled":n?"true":void 0,tabIndex:_?void 0:k,onClick:E,onMouseDown:$,onMouseUp:z,onKeyUp:A,onKeyDown:O,onMouseOver:Z,onMouseLeave:te}}function _3(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function E3(e){var n;if(!_3(e))return!1;const t=(n=e.ownerDocument.defaultView)!=null?n:window;return e instanceof t.HTMLElement}function bj(e){var n;var t;return(n=(t=P3(e))==null?void 0:t.defaultView)!=null?n:window}function P3(e){return _3(e)?e.ownerDocument:document}function wj(e){return P3(e).activeElement}var T3=e=>e.hasAttribute("tabindex"),xj=e=>T3(e)&&e.tabIndex===-1;function Sj(e){return Boolean(e.getAttribute("disabled"))===!0||Boolean(e.getAttribute("aria-disabled"))===!0}function F3(e){return e.parentElement&&F3(e.parentElement)?!0:e.hidden}function Cj(e){const t=e.getAttribute("contenteditable");return t!=="false"&&t!=null}function A3(e){if(!E3(e)||F3(e)||Sj(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const r={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in r?r[t]():Cj(e)?!0:T3(e)}function kj(e){return e?E3(e)&&A3(e)&&!xj(e):!1}var _j=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],Ej=_j.join(),Pj=e=>e.offsetWidth>0&&e.offsetHeight>0;function I3(e){const t=Array.from(e.querySelectorAll(Ej));return t.unshift(e),t.filter(n=>A3(n)&&Pj(n))}function Tj(e){const t=e.current;if(!t)return!1;const n=wj(t);return!n||t.contains(n)?!1:!!kj(n)}function R3(e,t){const{shouldFocus:n,visible:r,focusRef:o}=t,a=n&&!r;tr(()=>{if(!a||Tj(e))return;const i=(o==null?void 0:o.current)||e.current;i&&requestAnimationFrame(()=>{i.focus()})},[a,e,o])}var Fj={preventScroll:!0,shouldFocus:!1};function Aj(e,t=Fj){const{focusRef:n,preventScroll:r,shouldFocus:o,visible:a}=t,i=Ij(e)?e.current:e,s=o&&a,l=p.exports.useRef(s),u=p.exports.useRef(a);An(()=>{!u.current&&a&&(l.current=s),u.current=a},[a,s]);const c=p.exports.useCallback(()=>{if(!(!a||!i||!l.current)&&(l.current=!1,!i.contains(document.activeElement)))if(n!=null&&n.current)requestAnimationFrame(()=>{var d;(d=n.current)==null||d.focus({preventScroll:r})});else{const d=I3(i);d.length>0&&requestAnimationFrame(()=>{d[0].focus({preventScroll:r})})}},[a,r,i,n]);tr(()=>{c()},[c]),ia(i,"transitionend",c)}function Ij(e){return"current"in e}var tn="top",On="bottom",Dn="right",nn="left",kv="auto",Jl=[tn,On,Dn,nn],Ti="start",fl="end",Rj="clippingParents",N3="viewport",os="popper",Nj="reference",qw=Jl.reduce(function(e,t){return e.concat([t+"-"+Ti,t+"-"+fl])},[]),M3=[].concat(Jl,[kv]).reduce(function(e,t){return e.concat([t,t+"-"+Ti,t+"-"+fl])},[]),Mj="beforeRead",Oj="read",Dj="afterRead",qj="beforeMain",Lj="main",Bj="afterMain",zj="beforeWrite",Vj="write",$j="afterWrite",jj=[Mj,Oj,Dj,qj,Lj,Bj,zj,Vj,$j];function Pr(e){return e?(e.nodeName||"").toLowerCase():null}function Bn(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ca(e){var t=Bn(e).Element;return e instanceof t||e instanceof Element}function Nn(e){var t=Bn(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function _v(e){if(typeof ShadowRoot>"u")return!1;var t=Bn(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Wj(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},a=t.elements[n];!Nn(a)||!Pr(a)||(Object.assign(a.style,r),Object.keys(o).forEach(function(i){var s=o[i];s===!1?a.removeAttribute(i):a.setAttribute(i,s===!0?"":s)}))})}function Hj(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],a=t.attributes[r]||{},i=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=i.reduce(function(l,u){return l[u]="",l},{});!Nn(o)||!Pr(o)||(Object.assign(o.style,s),Object.keys(a).forEach(function(l){o.removeAttribute(l)}))})}}const Uj={name:"applyStyles",enabled:!0,phase:"write",fn:Wj,effect:Hj,requires:["computeStyles"]};function Cr(e){return e.split("-")[0]}var sa=Math.max,ud=Math.min,Fi=Math.round;function wh(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function O3(){return!/^((?!chrome|android).)*safari/i.test(wh())}function Ai(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,a=1;t&&Nn(e)&&(o=e.offsetWidth>0&&Fi(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Fi(r.height)/e.offsetHeight||1);var i=ca(e)?Bn(e):window,s=i.visualViewport,l=!O3()&&n,u=(r.left+(l&&s?s.offsetLeft:0))/o,c=(r.top+(l&&s?s.offsetTop:0))/a,d=r.width/o,f=r.height/a;return{width:d,height:f,top:c,right:u+d,bottom:c+f,left:u,x:u,y:c}}function Ev(e){var t=Ai(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function D3(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&_v(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function $r(e){return Bn(e).getComputedStyle(e)}function Gj(e){return["table","td","th"].indexOf(Pr(e))>=0}function Ro(e){return((ca(e)?e.ownerDocument:e.document)||window.document).documentElement}function Bf(e){return Pr(e)==="html"?e:e.assignedSlot||e.parentNode||(_v(e)?e.host:null)||Ro(e)}function Lw(e){return!Nn(e)||$r(e).position==="fixed"?null:e.offsetParent}function Kj(e){var t=/firefox/i.test(wh()),n=/Trident/i.test(wh());if(n&&Nn(e)){var r=$r(e);if(r.position==="fixed")return null}var o=Bf(e);for(_v(o)&&(o=o.host);Nn(o)&&["html","body"].indexOf(Pr(o))<0;){var a=$r(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function eu(e){for(var t=Bn(e),n=Lw(e);n&&Gj(n)&&$r(n).position==="static";)n=Lw(n);return n&&(Pr(n)==="html"||Pr(n)==="body"&&$r(n).position==="static")?t:n||Kj(e)||t}function Pv(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function qs(e,t,n){return sa(e,ud(t,n))}function Yj(e,t,n){var r=qs(e,t,n);return r>n?n:r}function q3(){return{top:0,right:0,bottom:0,left:0}}function L3(e){return Object.assign({},q3(),e)}function B3(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var Xj=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,L3(typeof t!="number"?t:B3(t,Jl))};function Zj(e){var t,n=e.state,r=e.name,o=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,s=Cr(n.placement),l=Pv(s),u=[nn,Dn].indexOf(s)>=0,c=u?"height":"width";if(!(!a||!i)){var d=Xj(o.padding,n),f=Ev(a),m=l==="y"?tn:nn,v=l==="y"?On:Dn,h=n.rects.reference[c]+n.rects.reference[l]-i[l]-n.rects.popper[c],b=i[l]-n.rects.reference[l],y=eu(a),g=y?l==="y"?y.clientHeight||0:y.clientWidth||0:0,w=h/2-b/2,x=d[m],k=g-f[c]-d[v],_=g/2-f[c]/2+w,E=qs(x,_,k),T=l;n.modifiersData[r]=(t={},t[T]=E,t.centerOffset=E-_,t)}}function Qj(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||!D3(t.elements.popper,o)||(t.elements.arrow=o))}const Jj={name:"arrow",enabled:!0,phase:"main",fn:Zj,effect:Qj,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ii(e){return e.split("-")[1]}var eW={top:"auto",right:"auto",bottom:"auto",left:"auto"};function tW(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:Fi(t*o)/o||0,y:Fi(n*o)/o||0}}function Bw(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,d=e.isFixed,f=i.x,m=f===void 0?0:f,v=i.y,h=v===void 0?0:v,b=typeof c=="function"?c({x:m,y:h}):{x:m,y:h};m=b.x,h=b.y;var y=i.hasOwnProperty("x"),g=i.hasOwnProperty("y"),w=nn,x=tn,k=window;if(u){var _=eu(n),E="clientHeight",T="clientWidth";if(_===Bn(n)&&(_=Ro(n),$r(_).position!=="static"&&s==="absolute"&&(E="scrollHeight",T="scrollWidth")),_=_,o===tn||(o===nn||o===Dn)&&a===fl){x=On;var O=d&&_===k&&k.visualViewport?k.visualViewport.height:_[E];h-=O-r.height,h*=l?1:-1}if(o===nn||(o===tn||o===On)&&a===fl){w=Dn;var A=d&&_===k&&k.visualViewport?k.visualViewport.width:_[T];m-=A-r.width,m*=l?1:-1}}var q=Object.assign({position:s},u&&eW),$=c===!0?tW({x:m,y:h}):{x:m,y:h};if(m=$.x,h=$.y,l){var z;return Object.assign({},q,(z={},z[x]=g?"0":"",z[w]=y?"0":"",z.transform=(k.devicePixelRatio||1)<=1?"translate("+m+"px, "+h+"px)":"translate3d("+m+"px, "+h+"px, 0)",z))}return Object.assign({},q,(t={},t[x]=g?h+"px":"",t[w]=y?m+"px":"",t.transform="",t))}function nW(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,a=n.adaptive,i=a===void 0?!0:a,s=n.roundOffsets,l=s===void 0?!0:s,u={placement:Cr(t.placement),variation:Ii(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Bw(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Bw(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const rW={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:nW,data:{}};var Mu={passive:!0};function oW(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=o===void 0?!0:o,i=r.resize,s=i===void 0?!0:i,l=Bn(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach(function(c){c.addEventListener("scroll",n.update,Mu)}),s&&l.addEventListener("resize",n.update,Mu),function(){a&&u.forEach(function(c){c.removeEventListener("scroll",n.update,Mu)}),s&&l.removeEventListener("resize",n.update,Mu)}}const aW={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:oW,data:{}};var iW={left:"right",right:"left",bottom:"top",top:"bottom"};function mc(e){return e.replace(/left|right|bottom|top/g,function(t){return iW[t]})}var sW={start:"end",end:"start"};function zw(e){return e.replace(/start|end/g,function(t){return sW[t]})}function Tv(e){var t=Bn(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Fv(e){return Ai(Ro(e)).left+Tv(e).scrollLeft}function lW(e,t){var n=Bn(e),r=Ro(e),o=n.visualViewport,a=r.clientWidth,i=r.clientHeight,s=0,l=0;if(o){a=o.width,i=o.height;var u=O3();(u||!u&&t==="fixed")&&(s=o.offsetLeft,l=o.offsetTop)}return{width:a,height:i,x:s+Fv(e),y:l}}function uW(e){var t,n=Ro(e),r=Tv(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=sa(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=sa(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Fv(e),l=-r.scrollTop;return $r(o||n).direction==="rtl"&&(s+=sa(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}function Av(e){var t=$r(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function z3(e){return["html","body","#document"].indexOf(Pr(e))>=0?e.ownerDocument.body:Nn(e)&&Av(e)?e:z3(Bf(e))}function Ls(e,t){var n;t===void 0&&(t=[]);var r=z3(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),a=Bn(r),i=o?[a].concat(a.visualViewport||[],Av(r)?r:[]):r,s=t.concat(i);return o?s:s.concat(Ls(Bf(i)))}function xh(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function cW(e,t){var n=Ai(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Vw(e,t,n){return t===N3?xh(lW(e,n)):ca(t)?cW(t,n):xh(uW(Ro(e)))}function dW(e){var t=Ls(Bf(e)),n=["absolute","fixed"].indexOf($r(e).position)>=0,r=n&&Nn(e)?eu(e):e;return ca(r)?t.filter(function(o){return ca(o)&&D3(o,r)&&Pr(o)!=="body"}):[]}function fW(e,t,n,r){var o=t==="clippingParents"?dW(e):[].concat(t),a=[].concat(o,[n]),i=a[0],s=a.reduce(function(l,u){var c=Vw(e,u,r);return l.top=sa(c.top,l.top),l.right=ud(c.right,l.right),l.bottom=ud(c.bottom,l.bottom),l.left=sa(c.left,l.left),l},Vw(e,i,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function V3(e){var t=e.reference,n=e.element,r=e.placement,o=r?Cr(r):null,a=r?Ii(r):null,i=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,l;switch(o){case tn:l={x:i,y:t.y-n.height};break;case On:l={x:i,y:t.y+t.height};break;case Dn:l={x:t.x+t.width,y:s};break;case nn:l={x:t.x-n.width,y:s};break;default:l={x:t.x,y:t.y}}var u=o?Pv(o):null;if(u!=null){var c=u==="y"?"height":"width";switch(a){case Ti:l[u]=l[u]-(t[c]/2-n[c]/2);break;case fl:l[u]=l[u]+(t[c]/2-n[c]/2);break}}return l}function pl(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,a=n.strategy,i=a===void 0?e.strategy:a,s=n.boundary,l=s===void 0?Rj:s,u=n.rootBoundary,c=u===void 0?N3:u,d=n.elementContext,f=d===void 0?os:d,m=n.altBoundary,v=m===void 0?!1:m,h=n.padding,b=h===void 0?0:h,y=L3(typeof b!="number"?b:B3(b,Jl)),g=f===os?Nj:os,w=e.rects.popper,x=e.elements[v?g:f],k=fW(ca(x)?x:x.contextElement||Ro(e.elements.popper),l,c,i),_=Ai(e.elements.reference),E=V3({reference:_,element:w,strategy:"absolute",placement:o}),T=xh(Object.assign({},w,E)),O=f===os?T:_,A={top:k.top-O.top+y.top,bottom:O.bottom-k.bottom+y.bottom,left:k.left-O.left+y.left,right:O.right-k.right+y.right},q=e.modifiersData.offset;if(f===os&&q){var $=q[o];Object.keys(A).forEach(function(z){var Z=[Dn,On].indexOf(z)>=0?1:-1,te=[tn,On].indexOf(z)>=0?"y":"x";A[z]+=$[te]*Z})}return A}function pW(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,i=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?M3:l,c=Ii(r),d=c?s?qw:qw.filter(function(v){return Ii(v)===c}):Jl,f=d.filter(function(v){return u.indexOf(v)>=0});f.length===0&&(f=d);var m=f.reduce(function(v,h){return v[h]=pl(e,{placement:h,boundary:o,rootBoundary:a,padding:i})[Cr(h)],v},{});return Object.keys(m).sort(function(v,h){return m[v]-m[h]})}function mW(e){if(Cr(e)===kv)return[];var t=mc(e);return[zw(e),t,zw(t)]}function hW(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,a=o===void 0?!0:o,i=n.altAxis,s=i===void 0?!0:i,l=n.fallbackPlacements,u=n.padding,c=n.boundary,d=n.rootBoundary,f=n.altBoundary,m=n.flipVariations,v=m===void 0?!0:m,h=n.allowedAutoPlacements,b=t.options.placement,y=Cr(b),g=y===b,w=l||(g||!v?[mc(b)]:mW(b)),x=[b].concat(w).reduce(function(H,ie){return H.concat(Cr(ie)===kv?pW(t,{placement:ie,boundary:c,rootBoundary:d,padding:u,flipVariations:v,allowedAutoPlacements:h}):ie)},[]),k=t.rects.reference,_=t.rects.popper,E=new Map,T=!0,O=x[0],A=0;A<x.length;A++){var q=x[A],$=Cr(q),z=Ii(q)===Ti,Z=[tn,On].indexOf($)>=0,te=Z?"width":"height",V=pl(t,{placement:q,boundary:c,rootBoundary:d,altBoundary:f,padding:u}),L=Z?z?Dn:nn:z?On:tn;k[te]>_[te]&&(L=mc(L));var N=mc(L),B=[];if(a&&B.push(V[$]<=0),s&&B.push(V[L]<=0,V[N]<=0),B.every(function(H){return H})){O=q,T=!1;break}E.set(q,B)}if(T)for(var X=v?3:1,ee=function(ie){var me=x.find(function(j){var ae=E.get(j);if(ae)return ae.slice(0,ie).every(function(ge){return ge})});if(me)return O=me,"break"},Q=X;Q>0;Q--){var U=ee(Q);if(U==="break")break}t.placement!==O&&(t.modifiersData[r]._skip=!0,t.placement=O,t.reset=!0)}}const gW={name:"flip",enabled:!0,phase:"main",fn:hW,requiresIfExists:["offset"],data:{_skip:!1}};function $w(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function jw(e){return[tn,Dn,On,nn].some(function(t){return e[t]>=0})}function vW(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,i=pl(t,{elementContext:"reference"}),s=pl(t,{altBoundary:!0}),l=$w(i,r),u=$w(s,o,a),c=jw(l),d=jw(u);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}const yW={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:vW};function bW(e,t,n){var r=Cr(e),o=[nn,tn].indexOf(r)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,i=a[0],s=a[1];return i=i||0,s=(s||0)*o,[nn,Dn].indexOf(r)>=0?{x:s,y:i}:{x:i,y:s}}function wW(e){var t=e.state,n=e.options,r=e.name,o=n.offset,a=o===void 0?[0,0]:o,i=M3.reduce(function(c,d){return c[d]=bW(d,t.rects,a),c},{}),s=i[t.placement],l=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=i}const xW={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:wW};function SW(e){var t=e.state,n=e.name;t.modifiersData[n]=V3({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const CW={name:"popperOffsets",enabled:!0,phase:"read",fn:SW,data:{}};function kW(e){return e==="x"?"y":"x"}function _W(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,a=o===void 0?!0:o,i=n.altAxis,s=i===void 0?!1:i,l=n.boundary,u=n.rootBoundary,c=n.altBoundary,d=n.padding,f=n.tether,m=f===void 0?!0:f,v=n.tetherOffset,h=v===void 0?0:v,b=pl(t,{boundary:l,rootBoundary:u,padding:d,altBoundary:c}),y=Cr(t.placement),g=Ii(t.placement),w=!g,x=Pv(y),k=kW(x),_=t.modifiersData.popperOffsets,E=t.rects.reference,T=t.rects.popper,O=typeof h=="function"?h(Object.assign({},t.rects,{placement:t.placement})):h,A=typeof O=="number"?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),q=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,$={x:0,y:0};if(!!_){if(a){var z,Z=x==="y"?tn:nn,te=x==="y"?On:Dn,V=x==="y"?"height":"width",L=_[x],N=L+b[Z],B=L-b[te],X=m?-T[V]/2:0,ee=g===Ti?E[V]:T[V],Q=g===Ti?-T[V]:-E[V],U=t.elements.arrow,H=m&&U?Ev(U):{width:0,height:0},ie=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:q3(),me=ie[Z],j=ie[te],ae=qs(0,E[V],H[V]),ge=w?E[V]/2-X-ae-me-A.mainAxis:ee-ae-me-A.mainAxis,xe=w?-E[V]/2+X+ae+j+A.mainAxis:Q+ae+j+A.mainAxis,le=t.elements.arrow&&eu(t.elements.arrow),ve=le?x==="y"?le.clientTop||0:le.clientLeft||0:0,Ee=(z=q==null?void 0:q[x])!=null?z:0,K=L+ge-Ee-ve,de=L+xe-Ee,Te=qs(m?ud(N,K):N,L,m?sa(B,de):B);_[x]=Te,$[x]=Te-L}if(s){var we,Fe=x==="x"?tn:nn,Pt=x==="x"?On:Dn,Ye=_[k],gt=k==="y"?"height":"width",vt=Ye+b[Fe],ct=Ye-b[Pt],Xt=[tn,nn].indexOf(y)!==-1,zn=(we=q==null?void 0:q[k])!=null?we:0,ar=Xt?vt:Ye-E[gt]-T[gt]-zn+A.altAxis,ir=Xt?Ye+E[gt]+T[gt]-zn-A.altAxis:ct,G=m&&Xt?Yj(ar,Ye,ir):qs(m?ar:vt,Ye,m?ir:ct);_[k]=G,$[k]=G-Ye}t.modifiersData[r]=$}}const EW={name:"preventOverflow",enabled:!0,phase:"main",fn:_W,requiresIfExists:["offset"]};function PW(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function TW(e){return e===Bn(e)||!Nn(e)?Tv(e):PW(e)}function FW(e){var t=e.getBoundingClientRect(),n=Fi(t.width)/e.offsetWidth||1,r=Fi(t.height)/e.offsetHeight||1;return n!==1||r!==1}function AW(e,t,n){n===void 0&&(n=!1);var r=Nn(t),o=Nn(t)&&FW(t),a=Ro(t),i=Ai(e,o,n),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((Pr(t)!=="body"||Av(a))&&(s=TW(t)),Nn(t)?(l=Ai(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=Fv(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function IW(e){var t=new Map,n=new Set,r=[];e.forEach(function(a){t.set(a.name,a)});function o(a){n.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(s){if(!n.has(s)){var l=t.get(s);l&&o(l)}}),r.push(a)}return e.forEach(function(a){n.has(a.name)||o(a)}),r}function RW(e){var t=IW(e);return jj.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function NW(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function MW(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var Ww={placement:"bottom",modifiers:[],strategy:"absolute"};function Hw(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function OW(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,a=o===void 0?Ww:o;return function(s,l,u){u===void 0&&(u=a);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ww,a),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},d=[],f=!1,m={state:c,setOptions:function(y){var g=typeof y=="function"?y(c.options):y;h(),c.options=Object.assign({},a,c.options,g),c.scrollParents={reference:ca(s)?Ls(s):s.contextElement?Ls(s.contextElement):[],popper:Ls(l)};var w=RW(MW([].concat(r,c.options.modifiers)));return c.orderedModifiers=w.filter(function(x){return x.enabled}),v(),m.update()},forceUpdate:function(){if(!f){var y=c.elements,g=y.reference,w=y.popper;if(!!Hw(g,w)){c.rects={reference:AW(g,eu(w),c.options.strategy==="fixed"),popper:Ev(w)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(A){return c.modifiersData[A.name]=Object.assign({},A.data)});for(var x=0;x<c.orderedModifiers.length;x++){if(c.reset===!0){c.reset=!1,x=-1;continue}var k=c.orderedModifiers[x],_=k.fn,E=k.options,T=E===void 0?{}:E,O=k.name;typeof _=="function"&&(c=_({state:c,options:T,name:O,instance:m})||c)}}}},update:NW(function(){return new Promise(function(b){m.forceUpdate(),b(c)})}),destroy:function(){h(),f=!0}};if(!Hw(s,l))return m;m.setOptions(u).then(function(b){!f&&u.onFirstUpdate&&u.onFirstUpdate(b)});function v(){c.orderedModifiers.forEach(function(b){var y=b.name,g=b.options,w=g===void 0?{}:g,x=b.effect;if(typeof x=="function"){var k=x({state:c,name:y,instance:m,options:w}),_=function(){};d.push(k||_)}})}function h(){d.forEach(function(b){return b()}),d=[]}return m}}var DW=[aW,CW,rW,Uj,xW,gW,EW,Jj,yW],qW=OW({defaultModifiers:DW}),Ra=(e,t)=>({var:e,varRef:t?`var(${e}, ${t})`:`var(${e})`}),dt={arrowShadowColor:Ra("--popper-arrow-shadow-color"),arrowSize:Ra("--popper-arrow-size","8px"),arrowSizeHalf:Ra("--popper-arrow-size-half"),arrowBg:Ra("--popper-arrow-bg"),transformOrigin:Ra("--popper-transform-origin"),arrowOffset:Ra("--popper-arrow-offset")};function LW(e){if(e.includes("top"))return"1px 1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("bottom"))return"-1px -1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("right"))return"-1px 1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("left"))return"1px -1px 1px 0 var(--popper-arrow-shadow-color)"}var BW={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},zW=e=>BW[e],Uw={scroll:!0,resize:!0};function VW(e){let t;return typeof e=="object"?t={enabled:!0,options:{...Uw,...e}}:t={enabled:e,options:Uw},t}var $W={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>()=>{const t=e.elements.reference;e.elements.popper.style.width=`${t.offsetWidth}px`}},jW={name:"transformOrigin",enabled:!0,phase:"write",fn:({state:e})=>{Gw(e)},effect:({state:e})=>()=>{Gw(e)}},Gw=e=>{e.elements.popper.style.setProperty(dt.transformOrigin.var,zW(e.placement))},WW={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:({state:e})=>{HW(e)}},HW=e=>{var t;if(!e.placement)return;const n=UW(e.placement);if(((t=e.elements)==null?void 0:t.arrow)&&n){Object.assign(e.elements.arrow.style,{[n.property]:n.value,width:dt.arrowSize.varRef,height:dt.arrowSize.varRef,zIndex:-1});const r={[dt.arrowSizeHalf.var]:`calc(${dt.arrowSize.varRef} / 2)`,[dt.arrowOffset.var]:`calc(${dt.arrowSizeHalf.varRef} * -1)`};for(const o in r)e.elements.arrow.style.setProperty(o,r[o])}},UW=e=>{if(e.startsWith("top"))return{property:"bottom",value:dt.arrowOffset.varRef};if(e.startsWith("bottom"))return{property:"top",value:dt.arrowOffset.varRef};if(e.startsWith("left"))return{property:"right",value:dt.arrowOffset.varRef};if(e.startsWith("right"))return{property:"left",value:dt.arrowOffset.varRef}},GW={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:({state:e})=>{Kw(e)},effect:({state:e})=>()=>{Kw(e)}},Kw=e=>{if(!e.elements.arrow)return;const t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");!t||Object.assign(t.style,{transform:"rotate(45deg)",background:dt.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:LW(e.placement)})},KW={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},YW={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};function XW(e,t="ltr"){var o;var n;const r=((n=KW[e])==null?void 0:n[t])||e;return t==="ltr"?r:(o=YW[e])!=null?o:r}function zf(e={}){const{enabled:t=!0,modifiers:n,placement:r="bottom",strategy:o="absolute",arrowPadding:a=8,eventListeners:i=!0,offset:s,gutter:l=8,flip:u=!0,boundary:c="clippingParents",preventOverflow:d=!0,matchWidth:f,direction:m="ltr"}=e,v=p.exports.useRef(null),h=p.exports.useRef(null),b=p.exports.useRef(null),y=XW(r,m),g=p.exports.useRef(()=>{}),w=p.exports.useCallback(()=>{var A;!t||!v.current||!h.current||((A=g.current)==null||A.call(g),b.current=qW(v.current,h.current,{placement:y,modifiers:[GW,WW,jW,{...$W,enabled:!!f},{name:"eventListeners",...VW(i)},{name:"arrow",options:{padding:a}},{name:"offset",options:{offset:s!=null?s:[0,l]}},{name:"flip",enabled:!!u,options:{padding:8}},{name:"preventOverflow",enabled:!!d,options:{boundary:c}},...n!=null?n:[]],strategy:o}),b.current.forceUpdate(),g.current=b.current.destroy)},[y,t,n,f,i,a,s,l,u,d,c,o]);p.exports.useEffect(()=>()=>{var A;!v.current&&!h.current&&((A=b.current)==null||A.destroy(),b.current=null)},[]);const x=p.exports.useCallback(A=>{v.current=A,w()},[w]),k=p.exports.useCallback((A={},q=null)=>({...A,ref:ke(x,q)}),[x]),_=p.exports.useCallback(A=>{h.current=A,w()},[w]),E=p.exports.useCallback((A={},q=null)=>({...A,ref:ke(_,q),style:{...A.style,position:o,minWidth:f?void 0:"max-content",inset:"0 auto auto 0"}}),[o,_,f]),T=p.exports.useCallback((A={},q=null)=>{const{size:$,shadowColor:z,bg:Z,style:te,...V}=A;return{...V,ref:q,"data-popper-arrow":"",style:ZW(A)}},[]),O=p.exports.useCallback((A={},q=null)=>({...A,ref:q,"data-popper-arrow-inner":""}),[]);return{update(){var A;(A=b.current)==null||A.update()},forceUpdate(){var A;(A=b.current)==null||A.forceUpdate()},transformOrigin:dt.transformOrigin.varRef,referenceRef:x,popperRef:_,getPopperProps:E,getArrowProps:T,getArrowInnerProps:O,getReferenceProps:k}}function ZW(e){const{size:t,shadowColor:n,bg:r,style:o}=e,a={...o,position:"absolute"};return t&&(a["--popper-arrow-size"]=t),n&&(a["--popper-arrow-shadow-color"]=n),r&&(a["--popper-arrow-bg"]=r),a}function Iv(e={}){const{onClose:t,onOpen:n,isOpen:r,id:o}=e,a=Ue(n),i=Ue(t),[s,l]=p.exports.useState(e.defaultIsOpen||!1),u=r!==void 0?r:s,c=r!==void 0,d=p.exports.useId(),f=o!=null?o:`disclosure-${d}`,m=p.exports.useCallback(()=>{c||l(!1),i==null||i()},[c,i]),v=p.exports.useCallback(()=>{c||l(!0),a==null||a()},[c,a]),h=p.exports.useCallback(()=>{u?m():v()},[u,v,m]);function b(g={}){return{...g,"aria-expanded":u,"aria-controls":f,onClick(w){var x;(x=g.onClick)==null||x.call(g,w),h()}}}function y(g={}){return{...g,hidden:!u,id:f}}return{isOpen:u,onOpen:v,onClose:m,onToggle:h,isControlled:c,getButtonProps:b,getDisclosureProps:y}}function QW(e){const{ref:t,handler:n,enabled:r=!0}=e,o=Ue(n),i=p.exports.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}).current;p.exports.useEffect(()=>{if(!r)return;const s=d=>{tm(d,t)&&(i.isPointerDown=!0)},l=d=>{if(i.ignoreEmulatedMouseEvents){i.ignoreEmulatedMouseEvents=!1;return}i.isPointerDown&&n&&tm(d,t)&&(i.isPointerDown=!1,o(d))},u=d=>{i.ignoreEmulatedMouseEvents=!0,n&&i.isPointerDown&&tm(d,t)&&(i.isPointerDown=!1,o(d))},c=$3(t.current);return c.addEventListener("mousedown",s,!0),c.addEventListener("mouseup",l,!0),c.addEventListener("touchstart",s,!0),c.addEventListener("touchend",u,!0),()=>{c.removeEventListener("mousedown",s,!0),c.removeEventListener("mouseup",l,!0),c.removeEventListener("touchstart",s,!0),c.removeEventListener("touchend",u,!0)}},[n,t,o,i,r])}function tm(e,t){var n;const r=e.target;return e.button>0||r&&!$3(r).contains(r)?!1:!((n=t.current)!=null&&n.contains(r))}function $3(e){var t;return(t=e==null?void 0:e.ownerDocument)!=null?t:document}function j3(e){const{isOpen:t,ref:n}=e,[r,o]=p.exports.useState(t),[a,i]=p.exports.useState(!1);return p.exports.useEffect(()=>{a||(o(t),i(!0))},[t,a,r]),ia(()=>n.current,"animationend",()=>{o(t)}),{present:!(t?!1:!r),onComplete(){var l;const u=bj(n.current),c=new u.CustomEvent("animationend",{bubbles:!0});(l=n.current)==null||l.dispatchEvent(c)}}}function Rv(e){const{wasSelected:t,enabled:n,isSelected:r,mode:o="unmount"}=e;return!!(!n||r||o==="keepMounted"&&t)}var jr=(...e)=>e.filter(Boolean).join(" ");function JW(e,...t){return eH(e)?e(...t):e}var eH=e=>typeof e=="function",tH=e=>e?"":void 0;function Sh(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}function nH(...e){return function(n){e.forEach(r=>{r==null||r(n)})}}function rH(e){const{key:t}=e;return t.length===1||t.length>1&&/[^a-zA-Z0-9]/.test(t)}function oH(e={}){const{timeout:t=300,preventDefault:n=()=>!0}=e,[r,o]=p.exports.useState([]),a=p.exports.useRef(),i=()=>{a.current&&(clearTimeout(a.current),a.current=null)},s=()=>{i(),a.current=setTimeout(()=>{o([]),a.current=null},t)};p.exports.useEffect(()=>i,[]);function l(u){return c=>{if(c.key==="Backspace"){const d=[...r];d.pop(),o(d);return}if(rH(c)){const d=r.concat(c.key);n(c)&&(c.preventDefault(),c.stopPropagation()),o(d),u(d.join("")),s()}}}return l}function aH(e,t,n,r){if(t==null)return r;if(!r)return e.find(i=>n(i).toLowerCase().startsWith(t.toLowerCase()));const o=e.filter(a=>n(a).toLowerCase().startsWith(t.toLowerCase()));if(o.length>0){let a;return o.includes(r)?(a=o.indexOf(r)+1,a===o.length&&(a=0),o[a]):(a=e.indexOf(o[0]),e[a])}return r}var[W3,H3,U3,G3]=lf(),[K3,xa]=be({strict:!1,name:"MenuContext"});function iH(e,...t){const n=p.exports.useId(),r=e||n;return p.exports.useMemo(()=>t.map(o=>`${o}-${r}`),[r,t])}function Y3(e){var t;return(t=e==null?void 0:e.ownerDocument)!=null?t:document}function Yw(e){return Y3(e).activeElement===e}function X3(e={}){const{id:t,closeOnSelect:n=!0,closeOnBlur:r=!0,initialFocusRef:o,autoSelect:a=!0,isLazy:i,isOpen:s,defaultIsOpen:l,onClose:u,onOpen:c,placement:d="bottom-start",lazyBehavior:f="unmount",direction:m,computePositionOnMount:v=!1,...h}=e,b=p.exports.useRef(null),y=p.exports.useRef(null),g=U3(),w=p.exports.useCallback(()=>{requestAnimationFrame(()=>{var Q;(Q=b.current)==null||Q.focus({preventScroll:!1})})},[]),x=p.exports.useCallback(()=>{const Q=setTimeout(()=>{var U;if(o)(U=o.current)==null||U.focus();else{const H=g.firstEnabled();H&&z(H.index)}});N.current.add(Q)},[g,o]),k=p.exports.useCallback(()=>{const Q=setTimeout(()=>{const U=g.lastEnabled();U&&z(U.index)});N.current.add(Q)},[g]),_=p.exports.useCallback(()=>{c==null||c(),a?x():w()},[a,x,w,c]),{isOpen:E,onOpen:T,onClose:O,onToggle:A}=Iv({isOpen:s,defaultIsOpen:l,onClose:u,onOpen:_});QW({enabled:E&&r,ref:b,handler:Q=>{var U;(U=y.current)!=null&&U.contains(Q.target)||O()}});const q=zf({...h,enabled:E||v,placement:d,direction:m}),[$,z]=p.exports.useState(-1);tr(()=>{E||z(-1)},[E]),R3(b,{focusRef:y,visible:E,shouldFocus:!0});const Z=j3({isOpen:E,ref:b}),[te,V]=iH(t,"menu-button","menu-list"),L=p.exports.useCallback(()=>{T(),w()},[T,w]),N=p.exports.useRef(new Set([]));cH(()=>{N.current.forEach(Q=>clearTimeout(Q)),N.current.clear()});const B=p.exports.useCallback(()=>{T(),x()},[x,T]),X=p.exports.useCallback(()=>{T(),k()},[T,k]),ee=p.exports.useCallback(()=>{var Q,U;const H=Y3(b.current),ie=(Q=b.current)==null?void 0:Q.contains(H.activeElement);if(!(E&&!ie))return;const j=(U=g.item($))==null?void 0:U.node;j==null||j.focus()},[E,$,g]);return{openAndFocusMenu:L,openAndFocusFirstItem:B,openAndFocusLastItem:X,onTransitionEnd:ee,unstable__animationState:Z,descendants:g,popper:q,buttonId:te,menuId:V,forceUpdate:q.forceUpdate,orientation:"vertical",isOpen:E,onToggle:A,onOpen:T,onClose:O,menuRef:b,buttonRef:y,focusedIndex:$,closeOnSelect:n,closeOnBlur:r,autoSelect:a,setFocusedIndex:z,isLazy:i,lazyBehavior:f,initialFocusRef:o}}function Z3(e={},t=null){const n=xa(),{onToggle:r,popper:o,openAndFocusFirstItem:a,openAndFocusLastItem:i}=n,s=p.exports.useCallback(l=>{const u=l.key,d={Enter:a,ArrowDown:a,ArrowUp:i}[u];d&&(l.preventDefault(),l.stopPropagation(),d(l))},[a,i]);return{...e,ref:ke(n.buttonRef,t,o.referenceRef),id:n.buttonId,"data-active":tH(n.isOpen),"aria-expanded":n.isOpen,"aria-haspopup":"menu","aria-controls":n.menuId,onClick:Sh(e.onClick,r),onKeyDown:Sh(e.onKeyDown,s)}}function Ch(e){var t;return lH(e)&&!!((t=e==null?void 0:e.getAttribute("role"))!=null&&t.startsWith("menuitem"))}function Q3(e={},t=null){const n=xa();if(!n)throw new Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");const{focusedIndex:r,setFocusedIndex:o,menuRef:a,isOpen:i,onClose:s,menuId:l,isLazy:u,lazyBehavior:c,unstable__animationState:d}=n,f=H3(),m=oH({preventDefault:y=>y.key!==" "&&Ch(y.target)}),v=p.exports.useCallback(y=>{const g=y.key,x={Tab:_=>_.preventDefault(),Escape:s,ArrowDown:()=>{const _=f.nextEnabled(r);_&&o(_.index)},ArrowUp:()=>{const _=f.prevEnabled(r);_&&o(_.index)}}[g];if(x){y.preventDefault(),x(y);return}const k=m(_=>{const E=aH(f.values(),_,T=>{var A;var O;return(A=(O=T==null?void 0:T.node)==null?void 0:O.textContent)!=null?A:""},f.item(r));if(E){const T=f.indexOf(E.node);o(T)}});Ch(y.target)&&k(y)},[f,r,m,s,o]),h=p.exports.useRef(!1);i&&(h.current=!0);const b=Rv({wasSelected:h.current,enabled:u,mode:c,isSelected:d.present});return{...e,ref:ke(a,t),children:b?e.children:null,tabIndex:-1,role:"menu",id:l,style:{...e.style,transformOrigin:"var(--popper-transform-origin)"},"aria-orientation":"vertical",onKeyDown:Sh(e.onKeyDown,v)}}function J3(e={}){const{popper:t,isOpen:n}=xa();return t.getPopperProps({...e,style:{visibility:n?"visible":"hidden",...e.style}})}function Nv(e={},t=null){const{onMouseEnter:n,onMouseMove:r,onMouseLeave:o,onClick:a,onFocus:i,isDisabled:s,isFocusable:l,closeOnSelect:u,type:c,...d}=e,f=xa(),{setFocusedIndex:m,focusedIndex:v,closeOnSelect:h,onClose:b,menuRef:y,isOpen:g,menuId:w}=f,x=p.exports.useRef(null),k=`${w}-menuitem-${p.exports.useId()}`,{index:_,register:E}=G3({disabled:s&&!l}),T=p.exports.useCallback(V=>{n==null||n(V),!s&&m(_)},[m,_,s,n]),O=p.exports.useCallback(V=>{r==null||r(V),x.current&&!Yw(x.current)&&T(V)},[T,r]),A=p.exports.useCallback(V=>{o==null||o(V),!s&&m(-1)},[m,s,o]),q=p.exports.useCallback(V=>{a==null||a(V),!!Ch(V.currentTarget)&&(u!=null?u:h)&&b()},[b,a,h,u]),$=p.exports.useCallback(V=>{i==null||i(V),m(_)},[m,i,_]),z=_===v,Z=s&&!l;tr(()=>{!g||(z&&!Z&&x.current?requestAnimationFrame(()=>{var V;(V=x.current)==null||V.focus()}):y.current&&!Yw(y.current)&&y.current.focus())},[z,Z,y,g]);const te=k3({onClick:q,onFocus:$,onMouseEnter:T,onMouseMove:O,onMouseLeave:A,ref:ke(E,x,t),isDisabled:s,isFocusable:l});return{...d,...te,type:c!=null?c:te.type,id:k,role:"menuitem",tabIndex:z?0:-1}}function e9(e={},t=null){const{type:n="radio",isChecked:r,...o}=e;return{...Nv(o,t),role:`menuitem${n}`,"aria-checked":r}}function t9(e={}){const{children:t,type:n="radio",value:r,defaultValue:o,onChange:a,...i}=e,l=n==="radio"?"":[],[u,c]=Fo({defaultValue:o!=null?o:l,value:r,onChange:a}),d=p.exports.useCallback(v=>{if(n==="radio"&&typeof u=="string"&&c(v),n==="checkbox"&&Array.isArray(u)){const h=u.includes(v)?u.filter(b=>b!==v):u.concat(v);c(h)}},[u,c,n]),m=Yr(t).map(v=>{if(v.type.id!=="MenuItemOption")return v;const h=y=>{var g,w;d(v.props.value),(w=(g=v.props).onClick)==null||w.call(g,y)},b=n==="radio"?v.props.value===u:u.includes(v.props.value);return p.exports.cloneElement(v,{type:n,onClick:h,isChecked:b})});return{...i,children:m}}function sH(){const{isOpen:e,onClose:t}=xa();return{isOpen:e,onClose:t}}function lH(e){var n;if(!uH(e))return!1;const t=(n=e.ownerDocument.defaultView)!=null?n:window;return e instanceof t.HTMLElement}function uH(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function cH(e,t=[]){return p.exports.useEffect(()=>()=>e(),t)}var[dH,Sa]=be({name:"MenuStylesContext",errorMessage:`useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `}),n9=e=>{const{children:t}=e,n=$e("Menu",e),r=ye(e),{direction:o}=yn(),{descendants:a,...i}=X3({...r,direction:o}),s=p.exports.useMemo(()=>i,[i]),{isOpen:l,onClose:u,forceUpdate:c}=s;return S(W3,{value:a,children:S(K3,{value:s,children:S(dH,{value:n,children:JW(t,{isOpen:l,onClose:u,forceUpdate:c})})})})};n9.displayName="Menu";var fH=M((e,t)=>{const n=Sa();return P.createElement(R.button,{ref:t,...e,__css:{display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...n.button}})}),r9=M((e,t)=>{const{children:n,as:r,...o}=e,a=Z3(o,t),i=r||fH;return P.createElement(i,{...a,className:jr("chakra-menu__menu-button",e.className)},P.createElement(R.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0}},e.children))});r9.displayName="MenuButton";var Mv=M((e,t)=>{const n=Sa();return P.createElement(R.span,{ref:t,...e,__css:n.command,className:"chakra-menu__command"})});Mv.displayName="MenuCommand";var o9=e=>{const{className:t,...n}=e,r=Sa();return P.createElement(R.hr,{"aria-orientation":"horizontal",className:jr("chakra-menu__divider",t),...n,__css:r.divider})};o9.displayName="MenuDivider";var Ov=M((e,t)=>{const{title:n,children:r,className:o,...a}=e,i=jr("chakra-menu__group__title",o),s=Sa();return se("div",{ref:t,className:"chakra-menu__group",role:"group",children:[n&&P.createElement(R.p,{className:i,...a,__css:s.groupTitle},n),r]})});Ov.displayName="MenuGroup";var Vf=e=>{const{className:t,children:n,...r}=e,o=p.exports.Children.only(n),a=p.exports.isValidElement(o)?p.exports.cloneElement(o,{focusable:"false","aria-hidden":!0,className:jr("chakra-menu__icon",o.props.className)}):null,i=jr("chakra-menu__icon-wrapper",t);return P.createElement(R.span,{className:i,...r,__css:{flexShrink:0}},a)};Vf.displayName="MenuIcon";var a9=M((e,t)=>{const{type:n,...r}=e,o=Sa(),a=r.as||n?n!=null?n:void 0:"button",i=p.exports.useMemo(()=>({textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,...o.item}),[o.item]);return P.createElement(R.button,{ref:t,type:a,...r,__css:i})}),pH=e=>S("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",...e,children:S("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),Dv=M((e,t)=>{const{icon:n,iconSpacing:r="0.75rem",...o}=e,a=e9(o,t);return se(a9,{...a,className:jr("chakra-menu__menuitem-option",o.className),children:[n!==null&&S(Vf,{fontSize:"0.8em",marginEnd:r,opacity:e.isChecked?1:0,children:n||S(pH,{})}),S("span",{style:{flex:1},children:a.children})]})});Dv.id="MenuItemOption";Dv.displayName="MenuItemOption";var i9=M((e,t)=>{const{icon:n,iconSpacing:r="0.75rem",command:o,commandSpacing:a="0.75rem",children:i,...s}=e,l=Nv(s,t),c=n||o?S("span",{style:{pointerEvents:"none",flex:1},children:i}):i;return se(a9,{...l,className:jr("chakra-menu__menuitem",l.className),children:[n&&S(Vf,{fontSize:"0.8em",marginEnd:r,children:n}),c,o&&S(Mv,{marginStart:a,children:o})]})});i9.displayName="MenuItem";var mH={enter:{visibility:"visible",opacity:1,scale:1,transition:{duration:.2,ease:[.4,0,.2,1]}},exit:{transitionEnd:{visibility:"hidden"},opacity:0,scale:.8,transition:{duration:.1,easings:"easeOut"}}},hH=R(or.div),s9=M(function(t,n){var m;var r;const{rootProps:o,motionProps:a,...i}=t,{isOpen:s,onTransitionEnd:l,unstable__animationState:u}=xa(),c=Q3(i,n),d=J3(o),f=Sa();return P.createElement(R.div,{...d,__css:{zIndex:(m=t.zIndex)!=null?m:(r=f.list)==null?void 0:r.zIndex}},S(hH,{variants:mH,initial:!1,animate:s?"enter":"exit",__css:{outline:0,...f.list},...a,className:jr("chakra-menu__menu-list",c.className),...c,onUpdate:l,onAnimationComplete:nH(u.onComplete,c.onAnimationComplete)}))});s9.displayName="MenuList";var l9=e=>{const{className:t,title:n,...r}=e,o=t9(r);return S(Ov,{title:n,className:jr("chakra-menu__option-group",t),...o})};l9.displayName="MenuOptionGroup";var $f={exports:{}},bn={},u9={exports:{}},c9={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,B){var X=N.length;N.push(B);e:for(;0<X;){var ee=X-1>>>1,Q=N[ee];if(0<o(Q,B))N[ee]=B,N[X]=Q,X=ee;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var B=N[0],X=N.pop();if(X!==B){N[0]=X;e:for(var ee=0,Q=N.length,U=Q>>>1;ee<U;){var H=2*(ee+1)-1,ie=N[H],me=H+1,j=N[me];if(0>o(ie,X))me<Q&&0>o(j,ie)?(N[ee]=j,N[me]=X,ee=me):(N[ee]=ie,N[H]=X,ee=H);else if(me<Q&&0>o(j,X))N[ee]=j,N[me]=X,ee=me;else break e}}return B}function o(N,B){var X=N.sortIndex-B.sortIndex;return X!==0?X:N.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],c=1,d=null,f=3,m=!1,v=!1,h=!1,b=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(N){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=N)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function x(N){if(h=!1,w(N),!v)if(n(l)!==null)v=!0,V(k);else{var B=n(u);B!==null&&L(x,B.startTime-N)}}function k(N,B){v=!1,h&&(h=!1,y(T),T=-1),m=!0;var X=f;try{for(w(B),d=n(l);d!==null&&(!(d.expirationTime>B)||N&&!q());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,f=d.priorityLevel;var Q=ee(d.expirationTime<=B);B=e.unstable_now(),typeof Q=="function"?d.callback=Q:d===n(l)&&r(l),w(B)}else r(l);d=n(l)}if(d!==null)var U=!0;else{var H=n(u);H!==null&&L(x,H.startTime-B),U=!1}return U}finally{d=null,f=X,m=!1}}var _=!1,E=null,T=-1,O=5,A=-1;function q(){return!(e.unstable_now()-A<O)}function $(){if(E!==null){var N=e.unstable_now();A=N;var B=!0;try{B=E(!0,N)}finally{B?z():(_=!1,E=null)}}else _=!1}var z;if(typeof g=="function")z=function(){g($)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,te=Z.port2;Z.port1.onmessage=$,z=function(){te.postMessage(null)}}else z=function(){b($,0)};function V(N){E=N,_||(_=!0,z())}function L(N,B){T=b(function(){N(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,V(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var X=f;f=B;try{return N()}finally{f=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var X=f;f=N;try{return B()}finally{f=X}},e.unstable_scheduleCallback=function(N,B,X){var ee=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ee+X:ee):X=ee,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=X+Q,N={id:c++,callback:B,priorityLevel:N,startTime:X,expirationTime:Q,sortIndex:-1},X>ee?(N.sortIndex=X,t(u,N),n(l)===null&&N===n(u)&&(h?(y(T),T=-1):h=!0,L(x,X-ee))):(N.sortIndex=Q,t(l,N),v||m||(v=!0,V(k))),N},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(N){var B=f;return function(){var X=f;f=B;try{return N.apply(this,arguments)}finally{f=X}}}})(c9);(function(e){e.exports=c9})(u9);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d9=p.exports,gn=u9.exports;function W(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f9=new Set,ml={};function Ca(e,t){Ri(e,t),Ri(e+"Capture",t)}function Ri(e,t){for(ml[e]=t,e=0;e<t.length;e++)f9.add(t[e])}var Wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kh=Object.prototype.hasOwnProperty,gH=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xw={},Zw={};function vH(e){return kh.call(Zw,e)?!0:kh.call(Xw,e)?!1:gH.test(e)?Zw[e]=!0:(Xw[e]=!0,!1)}function yH(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bH(e,t,n,r){if(t===null||typeof t>"u"||yH(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Yt(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Nt[e]=new Yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Nt[t]=new Yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Nt[e]=new Yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Nt[e]=new Yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Nt[e]=new Yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Nt[e]=new Yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Nt[e]=new Yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Nt[e]=new Yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Nt[e]=new Yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var qv=/[\-:]([a-z])/g;function Lv(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qv,Lv);Nt[t]=new Yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qv,Lv);Nt[t]=new Yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qv,Lv);Nt[t]=new Yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Nt[e]=new Yt(e,1,!1,e.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Nt[e]=new Yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bv(e,t,n,r){var o=Nt.hasOwnProperty(t)?Nt[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bH(t,n,o,r)&&(n=null),r||o===null?vH(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xr=d9.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ou=Symbol.for("react.element"),$a=Symbol.for("react.portal"),ja=Symbol.for("react.fragment"),zv=Symbol.for("react.strict_mode"),_h=Symbol.for("react.profiler"),p9=Symbol.for("react.provider"),m9=Symbol.for("react.context"),Vv=Symbol.for("react.forward_ref"),Eh=Symbol.for("react.suspense"),Ph=Symbol.for("react.suspense_list"),$v=Symbol.for("react.memo"),io=Symbol.for("react.lazy"),h9=Symbol.for("react.offscreen"),Qw=Symbol.iterator;function as(e){return e===null||typeof e!="object"?null:(e=Qw&&e[Qw]||e["@@iterator"],typeof e=="function"?e:null)}var it=Object.assign,nm;function ys(e){if(nm===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);nm=t&&t[1]||""}return`
`+nm+e}var rm=!1;function om(e,t){if(!e||rm)return"";rm=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,s=a.length-1;1<=i&&0<=s&&o[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==a[s]){var l=`
`+o[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{rm=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ys(e):""}function wH(e){switch(e.tag){case 5:return ys(e.type);case 16:return ys("Lazy");case 13:return ys("Suspense");case 19:return ys("SuspenseList");case 0:case 2:case 15:return e=om(e.type,!1),e;case 11:return e=om(e.type.render,!1),e;case 1:return e=om(e.type,!0),e;default:return""}}function Th(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ja:return"Fragment";case $a:return"Portal";case _h:return"Profiler";case zv:return"StrictMode";case Eh:return"Suspense";case Ph:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case m9:return(e.displayName||"Context")+".Consumer";case p9:return(e._context.displayName||"Context")+".Provider";case Vv:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $v:return t=e.displayName||null,t!==null?t:Th(e.type)||"Memo";case io:t=e._payload,e=e._init;try{return Th(e(t))}catch{}}return null}function xH(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Th(t);case 8:return t===zv?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Po(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function g9(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function SH(e){var t=g9(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Du(e){e._valueTracker||(e._valueTracker=SH(e))}function v9(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=g9(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function cd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fh(e,t){var n=t.checked;return it({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Jw(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Po(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function y9(e,t){t=t.checked,t!=null&&Bv(e,"checked",t,!1)}function Ah(e,t){y9(e,t);var n=Po(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ih(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ih(e,t.type,Po(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ex(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ih(e,t,n){(t!=="number"||cd(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bs=Array.isArray;function fi(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Po(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Rh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(W(91));return it({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tx(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(W(92));if(bs(n)){if(1<n.length)throw Error(W(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Po(n)}}function b9(e,t){var n=Po(t.value),r=Po(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function nx(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function w9(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?w9(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qu,x9=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qu=qu||document.createElement("div"),qu.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qu.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function hl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CH=["Webkit","ms","Moz","O"];Object.keys(Bs).forEach(function(e){CH.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bs[t]=Bs[e]})});function S9(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bs.hasOwnProperty(e)&&Bs[e]?(""+t).trim():t+"px"}function C9(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=S9(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var kH=it({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mh(e,t){if(t){if(kH[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(W(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(W(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(W(61))}if(t.style!=null&&typeof t.style!="object")throw Error(W(62))}}function Oh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dh=null;function jv(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qh=null,pi=null,mi=null;function rx(e){if(e=ru(e)){if(typeof qh!="function")throw Error(W(280));var t=e.stateNode;t&&(t=Gf(t),qh(e.stateNode,e.type,t))}}function k9(e){pi?mi?mi.push(e):mi=[e]:pi=e}function _9(){if(pi){var e=pi,t=mi;if(mi=pi=null,rx(e),t)for(e=0;e<t.length;e++)rx(t[e])}}function E9(e,t){return e(t)}function P9(){}var am=!1;function T9(e,t,n){if(am)return e(t,n);am=!0;try{return E9(e,t,n)}finally{am=!1,(pi!==null||mi!==null)&&(P9(),_9())}}function gl(e,t){var n=e.stateNode;if(n===null)return null;var r=Gf(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(W(231,t,typeof n));return n}var Lh=!1;if(Wr)try{var is={};Object.defineProperty(is,"passive",{get:function(){Lh=!0}}),window.addEventListener("test",is,is),window.removeEventListener("test",is,is)}catch{Lh=!1}function _H(e,t,n,r,o,a,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var zs=!1,dd=null,fd=!1,Bh=null,EH={onError:function(e){zs=!0,dd=e}};function PH(e,t,n,r,o,a,i,s,l){zs=!1,dd=null,_H.apply(EH,arguments)}function TH(e,t,n,r,o,a,i,s,l){if(PH.apply(this,arguments),zs){if(zs){var u=dd;zs=!1,dd=null}else throw Error(W(198));fd||(fd=!0,Bh=u)}}function ka(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function F9(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ox(e){if(ka(e)!==e)throw Error(W(188))}function FH(e){var t=e.alternate;if(!t){if(t=ka(e),t===null)throw Error(W(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return ox(o),e;if(a===r)return ox(o),t;a=a.sibling}throw Error(W(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i)throw Error(W(189))}}if(n.alternate!==r)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?e:t}function A9(e){return e=FH(e),e!==null?I9(e):null}function I9(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=I9(e);if(t!==null)return t;e=e.sibling}return null}var R9=gn.unstable_scheduleCallback,ax=gn.unstable_cancelCallback,AH=gn.unstable_shouldYield,IH=gn.unstable_requestPaint,ft=gn.unstable_now,RH=gn.unstable_getCurrentPriorityLevel,Wv=gn.unstable_ImmediatePriority,N9=gn.unstable_UserBlockingPriority,pd=gn.unstable_NormalPriority,NH=gn.unstable_LowPriority,M9=gn.unstable_IdlePriority,jf=null,kr=null;function MH(e){if(kr&&typeof kr.onCommitFiberRoot=="function")try{kr.onCommitFiberRoot(jf,e,void 0,(e.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:qH,OH=Math.log,DH=Math.LN2;function qH(e){return e>>>=0,e===0?32:31-(OH(e)/DH|0)|0}var Lu=64,Bu=4194304;function ws(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function md(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=ws(s):(a&=i,a!==0&&(r=ws(a)))}else i=n&~o,i!==0?r=ws(i):a!==0&&(r=ws(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Jn(t),o=1<<n,r|=e[n],t&=~o;return r}function LH(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BH(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Jn(a),s=1<<i,l=o[i];l===-1?((s&n)===0||(s&r)!==0)&&(o[i]=LH(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function zh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function O9(){var e=Lu;return Lu<<=1,(Lu&4194240)===0&&(Lu=64),e}function im(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tu(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Jn(t),e[t]=n}function zH(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Jn(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function Hv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Jn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ze=0;function D9(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var q9,Uv,L9,B9,z9,Vh=!1,zu=[],vo=null,yo=null,bo=null,vl=new Map,yl=new Map,co=[],VH="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ix(e,t){switch(e){case"focusin":case"focusout":vo=null;break;case"dragenter":case"dragleave":yo=null;break;case"mouseover":case"mouseout":bo=null;break;case"pointerover":case"pointerout":vl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(t.pointerId)}}function ss(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=ru(t),t!==null&&Uv(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function $H(e,t,n,r,o){switch(t){case"focusin":return vo=ss(vo,e,t,n,r,o),!0;case"dragenter":return yo=ss(yo,e,t,n,r,o),!0;case"mouseover":return bo=ss(bo,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return vl.set(a,ss(vl.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,yl.set(a,ss(yl.get(a)||null,e,t,n,r,o)),!0}return!1}function V9(e){var t=Jo(e.target);if(t!==null){var n=ka(t);if(n!==null){if(t=n.tag,t===13){if(t=F9(n),t!==null){e.blockedOn=t,z9(e.priority,function(){L9(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$h(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Dh=r,n.target.dispatchEvent(r),Dh=null}else return t=ru(n),t!==null&&Uv(t),e.blockedOn=n,!1;t.shift()}return!0}function sx(e,t,n){hc(e)&&n.delete(t)}function jH(){Vh=!1,vo!==null&&hc(vo)&&(vo=null),yo!==null&&hc(yo)&&(yo=null),bo!==null&&hc(bo)&&(bo=null),vl.forEach(sx),yl.forEach(sx)}function ls(e,t){e.blockedOn===t&&(e.blockedOn=null,Vh||(Vh=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,jH)))}function bl(e){function t(o){return ls(o,e)}if(0<zu.length){ls(zu[0],e);for(var n=1;n<zu.length;n++){var r=zu[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vo!==null&&ls(vo,e),yo!==null&&ls(yo,e),bo!==null&&ls(bo,e),vl.forEach(t),yl.forEach(t),n=0;n<co.length;n++)r=co[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<co.length&&(n=co[0],n.blockedOn===null);)V9(n),n.blockedOn===null&&co.shift()}var hi=Xr.ReactCurrentBatchConfig,hd=!0;function WH(e,t,n,r){var o=ze,a=hi.transition;hi.transition=null;try{ze=1,Gv(e,t,n,r)}finally{ze=o,hi.transition=a}}function HH(e,t,n,r){var o=ze,a=hi.transition;hi.transition=null;try{ze=4,Gv(e,t,n,r)}finally{ze=o,hi.transition=a}}function Gv(e,t,n,r){if(hd){var o=$h(e,t,n,r);if(o===null)gm(e,t,r,gd,n),ix(e,r);else if($H(o,e,t,n,r))r.stopPropagation();else if(ix(e,r),t&4&&-1<VH.indexOf(e)){for(;o!==null;){var a=ru(o);if(a!==null&&q9(a),a=$h(e,t,n,r),a===null&&gm(e,t,r,gd,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else gm(e,t,r,null,n)}}var gd=null;function $h(e,t,n,r){if(gd=null,e=jv(r),e=Jo(e),e!==null)if(t=ka(e),t===null)e=null;else if(n=t.tag,n===13){if(e=F9(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gd=e,null}function $9(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(RH()){case Wv:return 1;case N9:return 4;case pd:case NH:return 16;case M9:return 536870912;default:return 16}default:return 16}}var ho=null,Kv=null,gc=null;function j9(){if(gc)return gc;var e,t=Kv,n=t.length,r,o="value"in ho?ho.value:ho.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return gc=o.slice(e,1<r?1-r:void 0)}function vc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vu(){return!0}function lx(){return!1}function wn(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Vu:lx,this.isPropagationStopped=lx,this}return it(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vu)},persist:function(){},isPersistent:Vu}),t}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yv=wn(Wi),nu=it({},Wi,{view:0,detail:0}),UH=wn(nu),sm,lm,us,Wf=it({},nu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xv,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==us&&(us&&e.type==="mousemove"?(sm=e.screenX-us.screenX,lm=e.screenY-us.screenY):lm=sm=0,us=e),sm)},movementY:function(e){return"movementY"in e?e.movementY:lm}}),ux=wn(Wf),GH=it({},Wf,{dataTransfer:0}),KH=wn(GH),YH=it({},nu,{relatedTarget:0}),um=wn(YH),XH=it({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),ZH=wn(XH),QH=it({},Wi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),JH=wn(QH),eU=it({},Wi,{data:0}),cx=wn(eU),tU={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nU={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rU={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oU(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rU[e])?!!t[e]:!1}function Xv(){return oU}var aU=it({},nu,{key:function(e){if(e.key){var t=tU[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nU[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xv,charCode:function(e){return e.type==="keypress"?vc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iU=wn(aU),sU=it({},Wf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dx=wn(sU),lU=it({},nu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xv}),uU=wn(lU),cU=it({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),dU=wn(cU),fU=it({},Wf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pU=wn(fU),mU=[9,13,27,32],Zv=Wr&&"CompositionEvent"in window,Vs=null;Wr&&"documentMode"in document&&(Vs=document.documentMode);var hU=Wr&&"TextEvent"in window&&!Vs,W9=Wr&&(!Zv||Vs&&8<Vs&&11>=Vs),fx=String.fromCharCode(32),px=!1;function H9(e,t){switch(e){case"keyup":return mU.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U9(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function gU(e,t){switch(e){case"compositionend":return U9(t);case"keypress":return t.which!==32?null:(px=!0,fx);case"textInput":return e=t.data,e===fx&&px?null:e;default:return null}}function vU(e,t){if(Wa)return e==="compositionend"||!Zv&&H9(e,t)?(e=j9(),gc=Kv=ho=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return W9&&t.locale!=="ko"?null:t.data;default:return null}}var yU={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mx(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yU[e.type]:t==="textarea"}function G9(e,t,n,r){k9(r),t=vd(t,"onChange"),0<t.length&&(n=new Yv("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $s=null,wl=null;function bU(e){o6(e,0)}function Hf(e){var t=Ga(e);if(v9(t))return e}function wU(e,t){if(e==="change")return t}var K9=!1;if(Wr){var cm;if(Wr){var dm="oninput"in document;if(!dm){var hx=document.createElement("div");hx.setAttribute("oninput","return;"),dm=typeof hx.oninput=="function"}cm=dm}else cm=!1;K9=cm&&(!document.documentMode||9<document.documentMode)}function gx(){$s&&($s.detachEvent("onpropertychange",Y9),wl=$s=null)}function Y9(e){if(e.propertyName==="value"&&Hf(wl)){var t=[];G9(t,wl,e,jv(e)),T9(bU,t)}}function xU(e,t,n){e==="focusin"?(gx(),$s=t,wl=n,$s.attachEvent("onpropertychange",Y9)):e==="focusout"&&gx()}function SU(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hf(wl)}function CU(e,t){if(e==="click")return Hf(t)}function kU(e,t){if(e==="input"||e==="change")return Hf(t)}function _U(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nr=typeof Object.is=="function"?Object.is:_U;function xl(e,t){if(nr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!kh.call(t,o)||!nr(e[o],t[o]))return!1}return!0}function vx(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yx(e,t){var n=vx(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vx(n)}}function X9(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?X9(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Z9(){for(var e=window,t=cd();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cd(e.document)}return t}function Qv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function EU(e){var t=Z9(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&X9(n.ownerDocument.documentElement,n)){if(r!==null&&Qv(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=yx(n,a);var i=yx(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var PU=Wr&&"documentMode"in document&&11>=document.documentMode,Ha=null,jh=null,js=null,Wh=!1;function bx(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wh||Ha==null||Ha!==cd(r)||(r=Ha,"selectionStart"in r&&Qv(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),js&&xl(js,r)||(js=r,r=vd(jh,"onSelect"),0<r.length&&(t=new Yv("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ha)))}function $u(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ua={animationend:$u("Animation","AnimationEnd"),animationiteration:$u("Animation","AnimationIteration"),animationstart:$u("Animation","AnimationStart"),transitionend:$u("Transition","TransitionEnd")},fm={},Q9={};Wr&&(Q9=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function Uf(e){if(fm[e])return fm[e];if(!Ua[e])return e;var t=Ua[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Q9)return fm[e]=t[n];return e}var J9=Uf("animationend"),e6=Uf("animationiteration"),t6=Uf("animationstart"),n6=Uf("transitionend"),r6=new Map,wx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function No(e,t){r6.set(e,t),Ca(t,[e])}for(var pm=0;pm<wx.length;pm++){var mm=wx[pm],TU=mm.toLowerCase(),FU=mm[0].toUpperCase()+mm.slice(1);No(TU,"on"+FU)}No(J9,"onAnimationEnd");No(e6,"onAnimationIteration");No(t6,"onAnimationStart");No("dblclick","onDoubleClick");No("focusin","onFocus");No("focusout","onBlur");No(n6,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AU=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function xx(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,TH(r,t,void 0,e),e.currentTarget=null}function o6(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&o.isPropagationStopped())break e;xx(o,s,u),a=l}else for(i=0;i<r.length;i++){if(s=r[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&o.isPropagationStopped())break e;xx(o,s,u),a=l}}}if(fd)throw e=Bh,fd=!1,Bh=null,e}function Ze(e,t){var n=t[Yh];n===void 0&&(n=t[Yh]=new Set);var r=e+"__bubble";n.has(r)||(a6(t,e,2,!1),n.add(r))}function hm(e,t,n){var r=0;t&&(r|=4),a6(n,e,r,t)}var ju="_reactListening"+Math.random().toString(36).slice(2);function Sl(e){if(!e[ju]){e[ju]=!0,f9.forEach(function(n){n!=="selectionchange"&&(AU.has(n)||hm(n,!1,e),hm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ju]||(t[ju]=!0,hm("selectionchange",!1,t))}}function a6(e,t,n,r){switch($9(t)){case 1:var o=WH;break;case 4:o=HH;break;default:o=Gv}n=o.bind(null,t,n,e),o=void 0,!Lh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function gm(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Jo(s),i===null)return;if(l=i.tag,l===5||l===6){r=a=i;continue e}s=s.parentNode}}r=r.return}T9(function(){var u=a,c=jv(n),d=[];e:{var f=r6.get(e);if(f!==void 0){var m=Yv,v=e;switch(e){case"keypress":if(vc(n)===0)break e;case"keydown":case"keyup":m=iU;break;case"focusin":v="focus",m=um;break;case"focusout":v="blur",m=um;break;case"beforeblur":case"afterblur":m=um;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ux;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=KH;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=uU;break;case J9:case e6:case t6:m=ZH;break;case n6:m=dU;break;case"scroll":m=UH;break;case"wheel":m=pU;break;case"copy":case"cut":case"paste":m=JH;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=dx}var h=(t&4)!==0,b=!h&&e==="scroll",y=h?f!==null?f+"Capture":null:f;h=[];for(var g=u,w;g!==null;){w=g;var x=w.stateNode;if(w.tag===5&&x!==null&&(w=x,y!==null&&(x=gl(g,y),x!=null&&h.push(Cl(g,x,w)))),b)break;g=g.return}0<h.length&&(f=new m(f,v,null,n,c),d.push({event:f,listeners:h}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==Dh&&(v=n.relatedTarget||n.fromElement)&&(Jo(v)||v[Hr]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Jo(v):null,v!==null&&(b=ka(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(h=ux,x="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(h=dx,x="onPointerLeave",y="onPointerEnter",g="pointer"),b=m==null?f:Ga(m),w=v==null?f:Ga(v),f=new h(x,g+"leave",m,n,c),f.target=b,f.relatedTarget=w,x=null,Jo(c)===u&&(h=new h(y,g+"enter",v,n,c),h.target=w,h.relatedTarget=b,x=h),b=x,m&&v)t:{for(h=m,y=v,g=0,w=h;w;w=Na(w))g++;for(w=0,x=y;x;x=Na(x))w++;for(;0<g-w;)h=Na(h),g--;for(;0<w-g;)y=Na(y),w--;for(;g--;){if(h===y||y!==null&&h===y.alternate)break t;h=Na(h),y=Na(y)}h=null}else h=null;m!==null&&Sx(d,f,m,h,!1),v!==null&&b!==null&&Sx(d,b,v,h,!0)}}e:{if(f=u?Ga(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var k=wU;else if(mx(f))if(K9)k=kU;else{k=SU;var _=xU}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=CU);if(k&&(k=k(e,u))){G9(d,k,n,c);break e}_&&_(e,f,u),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&Ih(f,"number",f.value)}switch(_=u?Ga(u):window,e){case"focusin":(mx(_)||_.contentEditable==="true")&&(Ha=_,jh=u,js=null);break;case"focusout":js=jh=Ha=null;break;case"mousedown":Wh=!0;break;case"contextmenu":case"mouseup":case"dragend":Wh=!1,bx(d,n,c);break;case"selectionchange":if(PU)break;case"keydown":case"keyup":bx(d,n,c)}var E;if(Zv)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Wa?H9(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(W9&&n.locale!=="ko"&&(Wa||T!=="onCompositionStart"?T==="onCompositionEnd"&&Wa&&(E=j9()):(ho=c,Kv="value"in ho?ho.value:ho.textContent,Wa=!0)),_=vd(u,T),0<_.length&&(T=new cx(T,e,null,n,c),d.push({event:T,listeners:_}),E?T.data=E:(E=U9(n),E!==null&&(T.data=E)))),(E=hU?gU(e,n):vU(e,n))&&(u=vd(u,"onBeforeInput"),0<u.length&&(c=new cx("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}o6(d,t)})}function Cl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vd(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=gl(e,n),a!=null&&r.unshift(Cl(e,a,o)),a=gl(e,t),a!=null&&r.push(Cl(e,a,o))),e=e.return}return r}function Na(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sx(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=gl(n,a),l!=null&&i.unshift(Cl(n,l,s))):o||(l=gl(n,a),l!=null&&i.push(Cl(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var IU=/\r\n?/g,RU=/\u0000|\uFFFD/g;function Cx(e){return(typeof e=="string"?e:""+e).replace(IU,`
`).replace(RU,"")}function Wu(e,t,n){if(t=Cx(t),Cx(e)!==t&&n)throw Error(W(425))}function yd(){}var Hh=null,Uh=null;function Gh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kh=typeof setTimeout=="function"?setTimeout:void 0,NU=typeof clearTimeout=="function"?clearTimeout:void 0,kx=typeof Promise=="function"?Promise:void 0,MU=typeof queueMicrotask=="function"?queueMicrotask:typeof kx<"u"?function(e){return kx.resolve(null).then(e).catch(OU)}:Kh;function OU(e){setTimeout(function(){throw e})}function vm(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),bl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);bl(t)}function wo(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _x(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hi=Math.random().toString(36).slice(2),vr="__reactFiber$"+Hi,kl="__reactProps$"+Hi,Hr="__reactContainer$"+Hi,Yh="__reactEvents$"+Hi,DU="__reactListeners$"+Hi,qU="__reactHandles$"+Hi;function Jo(e){var t=e[vr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hr]||n[vr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_x(e);e!==null;){if(n=e[vr])return n;e=_x(e)}return t}e=n,n=e.parentNode}return null}function ru(e){return e=e[vr]||e[Hr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ga(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(W(33))}function Gf(e){return e[kl]||null}var Xh=[],Ka=-1;function Mo(e){return{current:e}}function Qe(e){0>Ka||(e.current=Xh[Ka],Xh[Ka]=null,Ka--)}function Ge(e,t){Ka++,Xh[Ka]=e.current,e.current=t}var To={},Bt=Mo(To),rn=Mo(!1),da=To;function Ni(e,t){var n=e.type.contextTypes;if(!n)return To;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function on(e){return e=e.childContextTypes,e!=null}function bd(){Qe(rn),Qe(Bt)}function Ex(e,t,n){if(Bt.current!==To)throw Error(W(168));Ge(Bt,t),Ge(rn,n)}function i6(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(W(108,xH(e)||"Unknown",o));return it({},n,r)}function wd(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||To,da=Bt.current,Ge(Bt,e),Ge(rn,rn.current),!0}function Px(e,t,n){var r=e.stateNode;if(!r)throw Error(W(169));n?(e=i6(e,t,da),r.__reactInternalMemoizedMergedChildContext=e,Qe(rn),Qe(Bt),Ge(Bt,e)):Qe(rn),Ge(rn,n)}var Nr=null,Kf=!1,ym=!1;function s6(e){Nr===null?Nr=[e]:Nr.push(e)}function LU(e){Kf=!0,s6(e)}function Oo(){if(!ym&&Nr!==null){ym=!0;var e=0,t=ze;try{var n=Nr;for(ze=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nr=null,Kf=!1}catch(o){throw Nr!==null&&(Nr=Nr.slice(e+1)),R9(Wv,Oo),o}finally{ze=t,ym=!1}}return null}var Ya=[],Xa=0,xd=null,Sd=0,_n=[],En=0,fa=null,Dr=1,qr="";function Uo(e,t){Ya[Xa++]=Sd,Ya[Xa++]=xd,xd=e,Sd=t}function l6(e,t,n){_n[En++]=Dr,_n[En++]=qr,_n[En++]=fa,fa=e;var r=Dr;e=qr;var o=32-Jn(r)-1;r&=~(1<<o),n+=1;var a=32-Jn(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Dr=1<<32-Jn(t)+o|n<<o|r,qr=a+e}else Dr=1<<a|n<<o|r,qr=e}function Jv(e){e.return!==null&&(Uo(e,1),l6(e,1,0))}function ey(e){for(;e===xd;)xd=Ya[--Xa],Ya[Xa]=null,Sd=Ya[--Xa],Ya[Xa]=null;for(;e===fa;)fa=_n[--En],_n[En]=null,qr=_n[--En],_n[En]=null,Dr=_n[--En],_n[En]=null}var mn=null,dn=null,rt=!1,Yn=null;function u6(e,t){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tx(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,mn=e,dn=wo(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,mn=e,dn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fa!==null?{id:Dr,overflow:qr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,mn=e,dn=null,!0):!1;default:return!1}}function Zh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qh(e){if(rt){var t=dn;if(t){var n=t;if(!Tx(e,t)){if(Zh(e))throw Error(W(418));t=wo(n.nextSibling);var r=mn;t&&Tx(e,t)?u6(r,n):(e.flags=e.flags&-4097|2,rt=!1,mn=e)}}else{if(Zh(e))throw Error(W(418));e.flags=e.flags&-4097|2,rt=!1,mn=e}}}function Fx(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mn=e}function Hu(e){if(e!==mn)return!1;if(!rt)return Fx(e),rt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gh(e.type,e.memoizedProps)),t&&(t=dn)){if(Zh(e))throw c6(),Error(W(418));for(;t;)u6(e,t),t=wo(t.nextSibling)}if(Fx(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dn=wo(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dn=null}}else dn=mn?wo(e.stateNode.nextSibling):null;return!0}function c6(){for(var e=dn;e;)e=wo(e.nextSibling)}function Mi(){dn=mn=null,rt=!1}function ty(e){Yn===null?Yn=[e]:Yn.push(e)}var BU=Xr.ReactCurrentBatchConfig;function Gn(e,t){if(e&&e.defaultProps){t=it({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Cd=Mo(null),kd=null,Za=null,ny=null;function ry(){ny=Za=kd=null}function oy(e){var t=Cd.current;Qe(Cd),e._currentValue=t}function Jh(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gi(e,t){kd=e,ny=Za=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(en=!0),e.firstContext=null)}function qn(e){var t=e._currentValue;if(ny!==e)if(e={context:e,memoizedValue:t,next:null},Za===null){if(kd===null)throw Error(W(308));Za=e,kd.dependencies={lanes:0,firstContext:e}}else Za=Za.next=e;return t}var ea=null;function ay(e){ea===null?ea=[e]:ea.push(e)}function d6(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ay(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ur(e,r)}function Ur(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var so=!1;function iy(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f6(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ur(e,n)}return o=r.interleaved,o===null?(t.next=t,ay(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ur(e,n)}function yc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hv(e,n)}}function Ax(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _d(e,t,n,r){var o=e.updateQueue;so=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?a=u:i.next=u,i=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=o.baseState;i=0,c=u=l=null,s=a;do{var f=s.lane,m=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,h=s;switch(f=t,m=n,h.tag){case 1:if(v=h.payload,typeof v=="function"){d=v.call(m,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=h.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break e;d=it({},d,f);break e;case 2:so=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else m={eventTime:m,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,i|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);ma|=i,e.lanes=i,e.memoizedState=d}}function Ix(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(W(191,o));o.call(r)}}}var p6=new d9.Component().refs;function eg(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:it({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yf={isMounted:function(e){return(e=e._reactInternals)?ka(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Gt(),o=Co(e),a=Lr(r,o);a.payload=t,n!=null&&(a.callback=n),t=xo(e,a,o),t!==null&&(er(t,e,o,r),yc(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Gt(),o=Co(e),a=Lr(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=xo(e,a,o),t!==null&&(er(t,e,o,r),yc(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Gt(),r=Co(e),o=Lr(n,r);o.tag=2,t!=null&&(o.callback=t),t=xo(e,o,r),t!==null&&(er(t,e,r,n),yc(t,e,r))}};function Rx(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!xl(n,r)||!xl(o,a):!0}function m6(e,t,n){var r=!1,o=To,a=t.contextType;return typeof a=="object"&&a!==null?a=qn(a):(o=on(t)?da:Bt.current,r=t.contextTypes,a=(r=r!=null)?Ni(e,o):To),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yf,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Nx(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yf.enqueueReplaceState(t,t.state,null)}function tg(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=p6,iy(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=qn(a):(a=on(t)?da:Bt.current,o.context=Ni(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(eg(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yf.enqueueReplaceState(o,o.state,null),_d(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function cs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var r=n.stateNode}if(!r)throw Error(W(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=o.refs;s===p6&&(s=o.refs={}),i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,e))}return e}function Uu(e,t){throw e=Object.prototype.toString.call(t),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mx(e){var t=e._init;return t(e._payload)}function h6(e){function t(y,g){if(e){var w=y.deletions;w===null?(y.deletions=[g],y.flags|=16):w.push(g)}}function n(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function o(y,g){return y=ko(y,g),y.index=0,y.sibling=null,y}function a(y,g,w){return y.index=w,e?(w=y.alternate,w!==null?(w=w.index,w<g?(y.flags|=2,g):w):(y.flags|=2,g)):(y.flags|=1048576,g)}function i(y){return e&&y.alternate===null&&(y.flags|=2),y}function s(y,g,w,x){return g===null||g.tag!==6?(g=_m(w,y.mode,x),g.return=y,g):(g=o(g,w),g.return=y,g)}function l(y,g,w,x){var k=w.type;return k===ja?c(y,g,w.props.children,x,w.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===io&&Mx(k)===g.type)?(x=o(g,w.props),x.ref=cs(y,g,w),x.return=y,x):(x=kc(w.type,w.key,w.props,null,y.mode,x),x.ref=cs(y,g,w),x.return=y,x)}function u(y,g,w,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==w.containerInfo||g.stateNode.implementation!==w.implementation?(g=Em(w,y.mode,x),g.return=y,g):(g=o(g,w.children||[]),g.return=y,g)}function c(y,g,w,x,k){return g===null||g.tag!==7?(g=ua(w,y.mode,x,k),g.return=y,g):(g=o(g,w),g.return=y,g)}function d(y,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return g=_m(""+g,y.mode,w),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ou:return w=kc(g.type,g.key,g.props,null,y.mode,w),w.ref=cs(y,null,g),w.return=y,w;case $a:return g=Em(g,y.mode,w),g.return=y,g;case io:var x=g._init;return d(y,x(g._payload),w)}if(bs(g)||as(g))return g=ua(g,y.mode,w,null),g.return=y,g;Uu(y,g)}return null}function f(y,g,w,x){var k=g!==null?g.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return k!==null?null:s(y,g,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ou:return w.key===k?l(y,g,w,x):null;case $a:return w.key===k?u(y,g,w,x):null;case io:return k=w._init,f(y,g,k(w._payload),x)}if(bs(w)||as(w))return k!==null?null:c(y,g,w,x,null);Uu(y,w)}return null}function m(y,g,w,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return y=y.get(w)||null,s(g,y,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ou:return y=y.get(x.key===null?w:x.key)||null,l(g,y,x,k);case $a:return y=y.get(x.key===null?w:x.key)||null,u(g,y,x,k);case io:var _=x._init;return m(y,g,w,_(x._payload),k)}if(bs(x)||as(x))return y=y.get(w)||null,c(g,y,x,k,null);Uu(g,x)}return null}function v(y,g,w,x){for(var k=null,_=null,E=g,T=g=0,O=null;E!==null&&T<w.length;T++){E.index>T?(O=E,E=null):O=E.sibling;var A=f(y,E,w[T],x);if(A===null){E===null&&(E=O);break}e&&E&&A.alternate===null&&t(y,E),g=a(A,g,T),_===null?k=A:_.sibling=A,_=A,E=O}if(T===w.length)return n(y,E),rt&&Uo(y,T),k;if(E===null){for(;T<w.length;T++)E=d(y,w[T],x),E!==null&&(g=a(E,g,T),_===null?k=E:_.sibling=E,_=E);return rt&&Uo(y,T),k}for(E=r(y,E);T<w.length;T++)O=m(E,y,T,w[T],x),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?T:O.key),g=a(O,g,T),_===null?k=O:_.sibling=O,_=O);return e&&E.forEach(function(q){return t(y,q)}),rt&&Uo(y,T),k}function h(y,g,w,x){var k=as(w);if(typeof k!="function")throw Error(W(150));if(w=k.call(w),w==null)throw Error(W(151));for(var _=k=null,E=g,T=g=0,O=null,A=w.next();E!==null&&!A.done;T++,A=w.next()){E.index>T?(O=E,E=null):O=E.sibling;var q=f(y,E,A.value,x);if(q===null){E===null&&(E=O);break}e&&E&&q.alternate===null&&t(y,E),g=a(q,g,T),_===null?k=q:_.sibling=q,_=q,E=O}if(A.done)return n(y,E),rt&&Uo(y,T),k;if(E===null){for(;!A.done;T++,A=w.next())A=d(y,A.value,x),A!==null&&(g=a(A,g,T),_===null?k=A:_.sibling=A,_=A);return rt&&Uo(y,T),k}for(E=r(y,E);!A.done;T++,A=w.next())A=m(E,y,T,A.value,x),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?T:A.key),g=a(A,g,T),_===null?k=A:_.sibling=A,_=A);return e&&E.forEach(function($){return t(y,$)}),rt&&Uo(y,T),k}function b(y,g,w,x){if(typeof w=="object"&&w!==null&&w.type===ja&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ou:e:{for(var k=w.key,_=g;_!==null;){if(_.key===k){if(k=w.type,k===ja){if(_.tag===7){n(y,_.sibling),g=o(_,w.props.children),g.return=y,y=g;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===io&&Mx(k)===_.type){n(y,_.sibling),g=o(_,w.props),g.ref=cs(y,_,w),g.return=y,y=g;break e}n(y,_);break}else t(y,_);_=_.sibling}w.type===ja?(g=ua(w.props.children,y.mode,x,w.key),g.return=y,y=g):(x=kc(w.type,w.key,w.props,null,y.mode,x),x.ref=cs(y,g,w),x.return=y,y=x)}return i(y);case $a:e:{for(_=w.key;g!==null;){if(g.key===_)if(g.tag===4&&g.stateNode.containerInfo===w.containerInfo&&g.stateNode.implementation===w.implementation){n(y,g.sibling),g=o(g,w.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else t(y,g);g=g.sibling}g=Em(w,y.mode,x),g.return=y,y=g}return i(y);case io:return _=w._init,b(y,g,_(w._payload),x)}if(bs(w))return v(y,g,w,x);if(as(w))return h(y,g,w,x);Uu(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,g!==null&&g.tag===6?(n(y,g.sibling),g=o(g,w),g.return=y,y=g):(n(y,g),g=_m(w,y.mode,x),g.return=y,y=g),i(y)):n(y,g)}return b}var Oi=h6(!0),g6=h6(!1),ou={},_r=Mo(ou),_l=Mo(ou),El=Mo(ou);function ta(e){if(e===ou)throw Error(W(174));return e}function sy(e,t){switch(Ge(El,t),Ge(_l,e),Ge(_r,ou),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nh(t,e)}Qe(_r),Ge(_r,t)}function Di(){Qe(_r),Qe(_l),Qe(El)}function v6(e){ta(El.current);var t=ta(_r.current),n=Nh(t,e.type);t!==n&&(Ge(_l,e),Ge(_r,n))}function ly(e){_l.current===e&&(Qe(_r),Qe(_l))}var ot=Mo(0);function Ed(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bm=[];function uy(){for(var e=0;e<bm.length;e++)bm[e]._workInProgressVersionPrimary=null;bm.length=0}var bc=Xr.ReactCurrentDispatcher,wm=Xr.ReactCurrentBatchConfig,pa=0,at=null,wt=null,kt=null,Pd=!1,Ws=!1,Pl=0,zU=0;function Ot(){throw Error(W(321))}function cy(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nr(e[n],t[n]))return!1;return!0}function dy(e,t,n,r,o,a){if(pa=a,at=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bc.current=e===null||e.memoizedState===null?WU:HU,e=n(r,o),Ws){a=0;do{if(Ws=!1,Pl=0,25<=a)throw Error(W(301));a+=1,kt=wt=null,t.updateQueue=null,bc.current=UU,e=n(r,o)}while(Ws)}if(bc.current=Td,t=wt!==null&&wt.next!==null,pa=0,kt=wt=at=null,Pd=!1,t)throw Error(W(300));return e}function fy(){var e=Pl!==0;return Pl=0,e}function fr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?at.memoizedState=kt=e:kt=kt.next=e,kt}function Ln(){if(wt===null){var e=at.alternate;e=e!==null?e.memoizedState:null}else e=wt.next;var t=kt===null?at.memoizedState:kt.next;if(t!==null)kt=t,wt=e;else{if(e===null)throw Error(W(310));wt=e,e={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},kt===null?at.memoizedState=kt=e:kt=kt.next=e}return kt}function Tl(e,t){return typeof t=="function"?t(e):t}function xm(e){var t=Ln(),n=t.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=e;var r=wt,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var s=i=null,l=null,u=a;do{var c=u.lane;if((pa&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,i=r):l=l.next=d,at.lanes|=c,ma|=c}u=u.next}while(u!==null&&u!==a);l===null?i=r:l.next=s,nr(r,t.memoizedState)||(en=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,at.lanes|=a,ma|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sm(e){var t=Ln(),n=t.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);nr(a,t.memoizedState)||(en=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function y6(){}function b6(e,t){var n=at,r=Ln(),o=t(),a=!nr(r.memoizedState,o);if(a&&(r.memoizedState=o,en=!0),r=r.queue,py(S6.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,Fl(9,x6.bind(null,n,r,o,t),void 0,null),_t===null)throw Error(W(349));(pa&30)!==0||w6(n,t,o)}return o}function w6(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=at.updateQueue,t===null?(t={lastEffect:null,stores:null},at.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function x6(e,t,n,r){t.value=n,t.getSnapshot=r,C6(t)&&k6(e)}function S6(e,t,n){return n(function(){C6(t)&&k6(e)})}function C6(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nr(e,n)}catch{return!0}}function k6(e){var t=Ur(e,1);t!==null&&er(t,e,1,-1)}function Ox(e){var t=fr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:e},t.queue=e,e=e.dispatch=jU.bind(null,at,e),[t.memoizedState,e]}function Fl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=at.updateQueue,t===null?(t={lastEffect:null,stores:null},at.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _6(){return Ln().memoizedState}function wc(e,t,n,r){var o=fr();at.flags|=e,o.memoizedState=Fl(1|t,n,void 0,r===void 0?null:r)}function Xf(e,t,n,r){var o=Ln();r=r===void 0?null:r;var a=void 0;if(wt!==null){var i=wt.memoizedState;if(a=i.destroy,r!==null&&cy(r,i.deps)){o.memoizedState=Fl(t,n,a,r);return}}at.flags|=e,o.memoizedState=Fl(1|t,n,a,r)}function Dx(e,t){return wc(8390656,8,e,t)}function py(e,t){return Xf(2048,8,e,t)}function E6(e,t){return Xf(4,2,e,t)}function P6(e,t){return Xf(4,4,e,t)}function T6(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function F6(e,t,n){return n=n!=null?n.concat([e]):null,Xf(4,4,T6.bind(null,t,e),n)}function my(){}function A6(e,t){var n=Ln();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cy(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function I6(e,t){var n=Ln();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cy(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function R6(e,t,n){return(pa&21)===0?(e.baseState&&(e.baseState=!1,en=!0),e.memoizedState=n):(nr(n,t)||(n=O9(),at.lanes|=n,ma|=n,e.baseState=!0),t)}function VU(e,t){var n=ze;ze=n!==0&&4>n?n:4,e(!0);var r=wm.transition;wm.transition={};try{e(!1),t()}finally{ze=n,wm.transition=r}}function N6(){return Ln().memoizedState}function $U(e,t,n){var r=Co(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},M6(e))O6(t,n);else if(n=d6(e,t,n,r),n!==null){var o=Gt();er(n,e,r,o),D6(n,t,r)}}function jU(e,t,n){var r=Co(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(M6(e))O6(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(o.hasEagerState=!0,o.eagerState=s,nr(s,i)){var l=t.interleaved;l===null?(o.next=o,ay(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=d6(e,t,o,r),n!==null&&(o=Gt(),er(n,e,r,o),D6(n,t,r))}}function M6(e){var t=e.alternate;return e===at||t!==null&&t===at}function O6(e,t){Ws=Pd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function D6(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hv(e,n)}}var Td={readContext:qn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},WU={readContext:qn,useCallback:function(e,t){return fr().memoizedState=[e,t===void 0?null:t],e},useContext:qn,useEffect:Dx,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wc(4194308,4,T6.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wc(4194308,4,e,t)},useInsertionEffect:function(e,t){return wc(4,2,e,t)},useMemo:function(e,t){var n=fr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=fr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$U.bind(null,at,e),[r.memoizedState,e]},useRef:function(e){var t=fr();return e={current:e},t.memoizedState=e},useState:Ox,useDebugValue:my,useDeferredValue:function(e){return fr().memoizedState=e},useTransition:function(){var e=Ox(!1),t=e[0];return e=VU.bind(null,e[1]),fr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=at,o=fr();if(rt){if(n===void 0)throw Error(W(407));n=n()}else{if(n=t(),_t===null)throw Error(W(349));(pa&30)!==0||w6(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Dx(S6.bind(null,r,a,e),[e]),r.flags|=2048,Fl(9,x6.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=fr(),t=_t.identifierPrefix;if(rt){var n=qr,r=Dr;n=(r&~(1<<32-Jn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zU++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},HU={readContext:qn,useCallback:A6,useContext:qn,useEffect:py,useImperativeHandle:F6,useInsertionEffect:E6,useLayoutEffect:P6,useMemo:I6,useReducer:xm,useRef:_6,useState:function(){return xm(Tl)},useDebugValue:my,useDeferredValue:function(e){var t=Ln();return R6(t,wt.memoizedState,e)},useTransition:function(){var e=xm(Tl)[0],t=Ln().memoizedState;return[e,t]},useMutableSource:y6,useSyncExternalStore:b6,useId:N6,unstable_isNewReconciler:!1},UU={readContext:qn,useCallback:A6,useContext:qn,useEffect:py,useImperativeHandle:F6,useInsertionEffect:E6,useLayoutEffect:P6,useMemo:I6,useReducer:Sm,useRef:_6,useState:function(){return Sm(Tl)},useDebugValue:my,useDeferredValue:function(e){var t=Ln();return wt===null?t.memoizedState=e:R6(t,wt.memoizedState,e)},useTransition:function(){var e=Sm(Tl)[0],t=Ln().memoizedState;return[e,t]},useMutableSource:y6,useSyncExternalStore:b6,useId:N6,unstable_isNewReconciler:!1};function qi(e,t){try{var n="",r=t;do n+=wH(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Cm(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function ng(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var GU=typeof WeakMap=="function"?WeakMap:Map;function q6(e,t,n){n=Lr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ad||(Ad=!0,fg=r),ng(e,t)},n}function L6(e,t,n){n=Lr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ng(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ng(e,t),typeof r!="function"&&(So===null?So=new Set([this]):So.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function qx(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new GU;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=sG.bind(null,e,t,n),t.then(e,e))}function Lx(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bx(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lr(-1,1),t.tag=2,xo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var KU=Xr.ReactCurrentOwner,en=!1;function jt(e,t,n,r){t.child=e===null?g6(t,null,n,r):Oi(t,e.child,n,r)}function zx(e,t,n,r,o){n=n.render;var a=t.ref;return gi(t,o),r=dy(e,t,n,r,a,o),n=fy(),e!==null&&!en?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gr(e,t,o)):(rt&&n&&Jv(t),t.flags|=1,jt(e,t,r,o),t.child)}function Vx(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Sy(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,B6(e,t,a,r,o)):(e=kc(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:xl,n(i,r)&&e.ref===t.ref)return Gr(e,t,o)}return t.flags|=1,e=ko(a,r),e.ref=t.ref,e.return=t,t.child=e}function B6(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(xl(a,r)&&e.ref===t.ref)if(en=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(en=!0);else return t.lanes=e.lanes,Gr(e,t,o)}return rg(e,t,n,r,o)}function z6(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(Ja,cn),cn|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ge(Ja,cn),cn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Ge(Ja,cn),cn|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ge(Ja,cn),cn|=r;return jt(e,t,o,n),t.child}function V6(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rg(e,t,n,r,o){var a=on(n)?da:Bt.current;return a=Ni(t,a),gi(t,o),n=dy(e,t,n,r,a,o),r=fy(),e!==null&&!en?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gr(e,t,o)):(rt&&r&&Jv(t),t.flags|=1,jt(e,t,n,o),t.child)}function $x(e,t,n,r,o){if(on(n)){var a=!0;wd(t)}else a=!1;if(gi(t,o),t.stateNode===null)xc(e,t),m6(t,n,r),tg(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=qn(u):(u=on(n)?da:Bt.current,u=Ni(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Nx(t,i,r,u),so=!1;var f=t.memoizedState;i.state=f,_d(t,r,i,o),l=t.memoizedState,s!==r||f!==l||rn.current||so?(typeof c=="function"&&(eg(t,n,c,r),l=t.memoizedState),(s=so||Rx(t,n,s,r,f,l,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,f6(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Gn(t.type,s),i.props=u,d=t.pendingProps,f=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=on(n)?da:Bt.current,l=Ni(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==d||f!==l)&&Nx(t,i,r,l),so=!1,f=t.memoizedState,i.state=f,_d(t,r,i,o);var v=t.memoizedState;s!==d||f!==v||rn.current||so?(typeof m=="function"&&(eg(t,n,m,r),v=t.memoizedState),(u=so||Rx(t,n,u,r,f,v,l)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),i.props=r,i.state=v,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return og(e,t,n,r,a,o)}function og(e,t,n,r,o,a){V6(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Px(t,n,!1),Gr(e,t,a);r=t.stateNode,KU.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Oi(t,e.child,null,a),t.child=Oi(t,null,s,a)):jt(e,t,s,a),t.memoizedState=r.state,o&&Px(t,n,!0),t.child}function $6(e){var t=e.stateNode;t.pendingContext?Ex(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ex(e,t.context,!1),sy(e,t.containerInfo)}function jx(e,t,n,r,o){return Mi(),ty(o),t.flags|=256,jt(e,t,n,r),t.child}var ag={dehydrated:null,treeContext:null,retryLane:0};function ig(e){return{baseLanes:e,cachePool:null,transitions:null}}function j6(e,t,n){var r=t.pendingProps,o=ot.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ge(ot,o&1),e===null)return Qh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Jf(i,r,0,null),e=ua(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ig(n),t.memoizedState=ag,e):hy(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return YU(e,t,i,r,s,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ko(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?a=ko(s,a):(a=ua(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?ig(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=ag,r}return a=e.child,e=a.sibling,r=ko(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hy(e,t){return t=Jf({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gu(e,t,n,r){return r!==null&&ty(r),Oi(t,e.child,null,n),e=hy(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function YU(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=Cm(Error(W(422))),Gu(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Jf({mode:"visible",children:r.children},o,0,null),a=ua(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Oi(t,e.child,null,i),t.child.memoizedState=ig(i),t.memoizedState=ag,a);if((t.mode&1)===0)return Gu(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(W(419)),r=Cm(a,r,void 0),Gu(e,t,i,r)}if(s=(i&e.childLanes)!==0,en||s){if(r=_t,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Ur(e,o),er(r,e,o,-1))}return xy(),r=Cm(Error(W(421))),Gu(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=lG.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,dn=wo(o.nextSibling),mn=t,rt=!0,Yn=null,e!==null&&(_n[En++]=Dr,_n[En++]=qr,_n[En++]=fa,Dr=e.id,qr=e.overflow,fa=t),t=hy(t,r.children),t.flags|=4096,t)}function Wx(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Jh(e.return,t,n)}function km(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function W6(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(jt(e,t,r.children,n),r=ot.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wx(e,n,t);else if(e.tag===19)Wx(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ge(ot,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ed(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),km(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ed(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}km(t,!0,n,null,a);break;case"together":km(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xc(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ma|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(W(153));if(t.child!==null){for(e=t.child,n=ko(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ko(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function XU(e,t,n){switch(t.tag){case 3:$6(t),Mi();break;case 5:v6(t);break;case 1:on(t.type)&&wd(t);break;case 4:sy(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Ge(Cd,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ge(ot,ot.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?j6(e,t,n):(Ge(ot,ot.current&1),e=Gr(e,t,n),e!==null?e.sibling:null);Ge(ot,ot.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return W6(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ge(ot,ot.current),r)break;return null;case 22:case 23:return t.lanes=0,z6(e,t,n)}return Gr(e,t,n)}var H6,sg,U6,G6;H6=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sg=function(){};U6=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ta(_r.current);var a=null;switch(n){case"input":o=Fh(e,o),r=Fh(e,r),a=[];break;case"select":o=it({},o,{value:void 0}),r=it({},r,{value:void 0}),a=[];break;case"textarea":o=Rh(e,o),r=Rh(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yd)}Mh(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ml.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ml.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ze("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};G6=function(e,t,n,r){n!==r&&(t.flags|=4)};function ds(e,t){if(!rt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Dt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ZU(e,t,n){var r=t.pendingProps;switch(ey(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(t),null;case 1:return on(t.type)&&bd(),Dt(t),null;case 3:return r=t.stateNode,Di(),Qe(rn),Qe(Bt),uy(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hu(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Yn!==null&&(hg(Yn),Yn=null))),sg(e,t),Dt(t),null;case 5:ly(t);var o=ta(El.current);if(n=t.type,e!==null&&t.stateNode!=null)U6(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(W(166));return Dt(t),null}if(e=ta(_r.current),Hu(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[vr]=t,r[kl]=a,e=(t.mode&1)!==0,n){case"dialog":Ze("cancel",r),Ze("close",r);break;case"iframe":case"object":case"embed":Ze("load",r);break;case"video":case"audio":for(o=0;o<xs.length;o++)Ze(xs[o],r);break;case"source":Ze("error",r);break;case"img":case"image":case"link":Ze("error",r),Ze("load",r);break;case"details":Ze("toggle",r);break;case"input":Jw(r,a),Ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ze("invalid",r);break;case"textarea":tx(r,a),Ze("invalid",r)}Mh(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Wu(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Wu(r.textContent,s,e),o=["children",""+s]):ml.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Ze("scroll",r)}switch(n){case"input":Du(r),ex(r,a,!0);break;case"textarea":Du(r),nx(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=yd)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=w9(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[vr]=t,e[kl]=r,H6(e,t,!1,!1),t.stateNode=e;e:{switch(i=Oh(n,r),n){case"dialog":Ze("cancel",e),Ze("close",e),o=r;break;case"iframe":case"object":case"embed":Ze("load",e),o=r;break;case"video":case"audio":for(o=0;o<xs.length;o++)Ze(xs[o],e);o=r;break;case"source":Ze("error",e),o=r;break;case"img":case"image":case"link":Ze("error",e),Ze("load",e),o=r;break;case"details":Ze("toggle",e),o=r;break;case"input":Jw(e,r),o=Fh(e,r),Ze("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=it({},r,{value:void 0}),Ze("invalid",e);break;case"textarea":tx(e,r),o=Rh(e,r),Ze("invalid",e);break;default:o=r}Mh(n,o),s=o;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?C9(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&x9(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&hl(e,l):typeof l=="number"&&hl(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ml.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Ze("scroll",e):l!=null&&Bv(e,a,l,i))}switch(n){case"input":Du(e),ex(e,r,!1);break;case"textarea":Du(e),nx(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Po(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?fi(e,!!r.multiple,a,!1):r.defaultValue!=null&&fi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=yd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Dt(t),null;case 6:if(e&&t.stateNode!=null)G6(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(W(166));if(n=ta(El.current),ta(_r.current),Hu(t)){if(r=t.stateNode,n=t.memoizedProps,r[vr]=t,(a=r.nodeValue!==n)&&(e=mn,e!==null))switch(e.tag){case 3:Wu(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wu(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vr]=t,t.stateNode=r}return Dt(t),null;case 13:if(Qe(ot),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(rt&&dn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)c6(),Mi(),t.flags|=98560,a=!1;else if(a=Hu(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(W(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(W(317));a[vr]=t}else Mi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Dt(t),a=!1}else Yn!==null&&(hg(Yn),Yn=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ot.current&1)!==0?xt===0&&(xt=3):xy())),t.updateQueue!==null&&(t.flags|=4),Dt(t),null);case 4:return Di(),sg(e,t),e===null&&Sl(t.stateNode.containerInfo),Dt(t),null;case 10:return oy(t.type._context),Dt(t),null;case 17:return on(t.type)&&bd(),Dt(t),null;case 19:if(Qe(ot),a=t.memoizedState,a===null)return Dt(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)ds(a,!1);else{if(xt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ed(e),i!==null){for(t.flags|=128,ds(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ge(ot,ot.current&1|2),t.child}e=e.sibling}a.tail!==null&&ft()>Li&&(t.flags|=128,r=!0,ds(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ed(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ds(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!rt)return Dt(t),null}else 2*ft()-a.renderingStartTime>Li&&n!==1073741824&&(t.flags|=128,r=!0,ds(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ft(),t.sibling=null,n=ot.current,Ge(ot,r?n&1|2:n&1),t):(Dt(t),null);case 22:case 23:return wy(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(cn&1073741824)!==0&&(Dt(t),t.subtreeFlags&6&&(t.flags|=8192)):Dt(t),null;case 24:return null;case 25:return null}throw Error(W(156,t.tag))}function QU(e,t){switch(ey(t),t.tag){case 1:return on(t.type)&&bd(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Di(),Qe(rn),Qe(Bt),uy(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ly(t),null;case 13:if(Qe(ot),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(W(340));Mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Qe(ot),null;case 4:return Di(),null;case 10:return oy(t.type._context),null;case 22:case 23:return wy(),null;case 24:return null;default:return null}}var Ku=!1,Lt=!1,JU=typeof WeakSet=="function"?WeakSet:Set,re=null;function Qa(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){lt(e,t,r)}else n.current=null}function lg(e,t,n){try{n()}catch(r){lt(e,t,r)}}var Hx=!1;function eG(e,t){if(Hh=hd,e=Z9(),Qv(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var m;d!==n||o!==0&&d.nodeType!==3||(s=i+o),d!==a||r!==0&&d.nodeType!==3||(l=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break t;if(f===n&&++u===o&&(s=i),f===a&&++c===r&&(l=i),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uh={focusedElem:e,selectionRange:n},hd=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var h=v.memoizedProps,b=v.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?h:Gn(t.type,h),b);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(x){lt(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return v=Hx,Hx=!1,v}function Hs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&lg(t,n,a)}o=o.next}while(o!==r)}}function Zf(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ug(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function K6(e){var t=e.alternate;t!==null&&(e.alternate=null,K6(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vr],delete t[kl],delete t[Yh],delete t[DU],delete t[qU])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Y6(e){return e.tag===5||e.tag===3||e.tag===4}function Ux(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Y6(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cg(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yd));else if(r!==4&&(e=e.child,e!==null))for(cg(e,t,n),e=e.sibling;e!==null;)cg(e,t,n),e=e.sibling}function dg(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(dg(e,t,n),e=e.sibling;e!==null;)dg(e,t,n),e=e.sibling}var At=null,Kn=!1;function to(e,t,n){for(n=n.child;n!==null;)X6(e,t,n),n=n.sibling}function X6(e,t,n){if(kr&&typeof kr.onCommitFiberUnmount=="function")try{kr.onCommitFiberUnmount(jf,n)}catch{}switch(n.tag){case 5:Lt||Qa(n,t);case 6:var r=At,o=Kn;At=null,to(e,t,n),At=r,Kn=o,At!==null&&(Kn?(e=At,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):At.removeChild(n.stateNode));break;case 18:At!==null&&(Kn?(e=At,n=n.stateNode,e.nodeType===8?vm(e.parentNode,n):e.nodeType===1&&vm(e,n),bl(e)):vm(At,n.stateNode));break;case 4:r=At,o=Kn,At=n.stateNode.containerInfo,Kn=!0,to(e,t,n),At=r,Kn=o;break;case 0:case 11:case 14:case 15:if(!Lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&lg(n,t,i),o=o.next}while(o!==r)}to(e,t,n);break;case 1:if(!Lt&&(Qa(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){lt(n,t,s)}to(e,t,n);break;case 21:to(e,t,n);break;case 22:n.mode&1?(Lt=(r=Lt)||n.memoizedState!==null,to(e,t,n),Lt=r):to(e,t,n);break;default:to(e,t,n)}}function Gx(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new JU),t.forEach(function(r){var o=uG.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Hn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:At=s.stateNode,Kn=!1;break e;case 3:At=s.stateNode.containerInfo,Kn=!0;break e;case 4:At=s.stateNode.containerInfo,Kn=!0;break e}s=s.return}if(At===null)throw Error(W(160));X6(a,i,o),At=null,Kn=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){lt(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Z6(t,e),t=t.sibling}function Z6(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Hn(t,e),lr(e),r&4){try{Hs(3,e,e.return),Zf(3,e)}catch(h){lt(e,e.return,h)}try{Hs(5,e,e.return)}catch(h){lt(e,e.return,h)}}break;case 1:Hn(t,e),lr(e),r&512&&n!==null&&Qa(n,n.return);break;case 5:if(Hn(t,e),lr(e),r&512&&n!==null&&Qa(n,n.return),e.flags&32){var o=e.stateNode;try{hl(o,"")}catch(h){lt(e,e.return,h)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&y9(o,a),Oh(s,i);var u=Oh(s,a);for(i=0;i<l.length;i+=2){var c=l[i],d=l[i+1];c==="style"?C9(o,d):c==="dangerouslySetInnerHTML"?x9(o,d):c==="children"?hl(o,d):Bv(o,c,d,u)}switch(s){case"input":Ah(o,a);break;case"textarea":b9(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?fi(o,!!a.multiple,m,!1):f!==!!a.multiple&&(a.defaultValue!=null?fi(o,!!a.multiple,a.defaultValue,!0):fi(o,!!a.multiple,a.multiple?[]:"",!1))}o[kl]=a}catch(h){lt(e,e.return,h)}}break;case 6:if(Hn(t,e),lr(e),r&4){if(e.stateNode===null)throw Error(W(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(h){lt(e,e.return,h)}}break;case 3:if(Hn(t,e),lr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bl(t.containerInfo)}catch(h){lt(e,e.return,h)}break;case 4:Hn(t,e),lr(e);break;case 13:Hn(t,e),lr(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(yy=ft())),r&4&&Gx(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Lt=(u=Lt)||c,Hn(t,e),Lt=u):Hn(t,e),lr(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(re=e,c=e.child;c!==null;){for(d=re=c;re!==null;){switch(f=re,m=f.child,f.tag){case 0:case 11:case 14:case 15:Hs(4,f,f.return);break;case 1:Qa(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(h){lt(r,n,h)}}break;case 5:Qa(f,f.return);break;case 22:if(f.memoizedState!==null){Yx(d);continue}}m!==null?(m.return=f,re=m):Yx(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=S9("display",i))}catch(h){lt(e,e.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){lt(e,e.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Hn(t,e),lr(e),r&4&&Gx(e);break;case 21:break;default:Hn(t,e),lr(e)}}function lr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Y6(n)){var r=n;break e}n=n.return}throw Error(W(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(hl(o,""),r.flags&=-33);var a=Ux(e);dg(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Ux(e);cg(e,s,i);break;default:throw Error(W(161))}}catch(l){lt(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tG(e,t,n){re=e,Q6(e)}function Q6(e,t,n){for(var r=(e.mode&1)!==0;re!==null;){var o=re,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Ku;if(!i){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Lt;s=Ku;var u=Lt;if(Ku=i,(Lt=l)&&!u)for(re=o;re!==null;)i=re,l=i.child,i.tag===22&&i.memoizedState!==null?Xx(o):l!==null?(l.return=i,re=l):Xx(o);for(;a!==null;)re=a,Q6(a),a=a.sibling;re=o,Ku=s,Lt=u}Kx(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,re=a):Kx(e)}}function Kx(e){for(;re!==null;){var t=re;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Lt||Zf(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Lt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Gn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ix(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ix(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&bl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}Lt||t.flags&512&&ug(t)}catch(f){lt(t,t.return,f)}}if(t===e){re=null;break}if(n=t.sibling,n!==null){n.return=t.return,re=n;break}re=t.return}}function Yx(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var n=t.sibling;if(n!==null){n.return=t.return,re=n;break}re=t.return}}function Xx(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zf(4,t)}catch(l){lt(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){lt(t,o,l)}}var a=t.return;try{ug(t)}catch(l){lt(t,a,l)}break;case 5:var i=t.return;try{ug(t)}catch(l){lt(t,i,l)}}}catch(l){lt(t,t.return,l)}if(t===e){re=null;break}var s=t.sibling;if(s!==null){s.return=t.return,re=s;break}re=t.return}}var nG=Math.ceil,Fd=Xr.ReactCurrentDispatcher,gy=Xr.ReactCurrentOwner,Mn=Xr.ReactCurrentBatchConfig,Ne=0,_t=null,mt=null,Rt=0,cn=0,Ja=Mo(0),xt=0,Al=null,ma=0,Qf=0,vy=0,Us=null,Qt=null,yy=0,Li=1/0,Rr=null,Ad=!1,fg=null,So=null,Yu=!1,go=null,Id=0,Gs=0,pg=null,Sc=-1,Cc=0;function Gt(){return(Ne&6)!==0?ft():Sc!==-1?Sc:Sc=ft()}function Co(e){return(e.mode&1)===0?1:(Ne&2)!==0&&Rt!==0?Rt&-Rt:BU.transition!==null?(Cc===0&&(Cc=O9()),Cc):(e=ze,e!==0||(e=window.event,e=e===void 0?16:$9(e.type)),e)}function er(e,t,n,r){if(50<Gs)throw Gs=0,pg=null,Error(W(185));tu(e,n,r),((Ne&2)===0||e!==_t)&&(e===_t&&((Ne&2)===0&&(Qf|=n),xt===4&&fo(e,Rt)),an(e,r),n===1&&Ne===0&&(t.mode&1)===0&&(Li=ft()+500,Kf&&Oo()))}function an(e,t){var n=e.callbackNode;BH(e,t);var r=md(e,e===_t?Rt:0);if(r===0)n!==null&&ax(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ax(n),t===1)e.tag===0?LU(Zx.bind(null,e)):s6(Zx.bind(null,e)),MU(function(){(Ne&6)===0&&Oo()}),n=null;else{switch(D9(r)){case 1:n=Wv;break;case 4:n=N9;break;case 16:n=pd;break;case 536870912:n=M9;break;default:n=pd}n=i4(n,J6.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function J6(e,t){if(Sc=-1,Cc=0,(Ne&6)!==0)throw Error(W(327));var n=e.callbackNode;if(vi()&&e.callbackNode!==n)return null;var r=md(e,e===_t?Rt:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Rd(e,r);else{t=r;var o=Ne;Ne|=2;var a=t4();(_t!==e||Rt!==t)&&(Rr=null,Li=ft()+500,la(e,t));do try{aG();break}catch(s){e4(e,s)}while(1);ry(),Fd.current=a,Ne=o,mt!==null?t=0:(_t=null,Rt=0,t=xt)}if(t!==0){if(t===2&&(o=zh(e),o!==0&&(r=o,t=mg(e,o))),t===1)throw n=Al,la(e,0),fo(e,r),an(e,ft()),n;if(t===6)fo(e,r);else{if(o=e.current.alternate,(r&30)===0&&!rG(o)&&(t=Rd(e,r),t===2&&(a=zh(e),a!==0&&(r=a,t=mg(e,a))),t===1))throw n=Al,la(e,0),fo(e,r),an(e,ft()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(W(345));case 2:Go(e,Qt,Rr);break;case 3:if(fo(e,r),(r&130023424)===r&&(t=yy+500-ft(),10<t)){if(md(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Gt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Kh(Go.bind(null,e,Qt,Rr),t);break}Go(e,Qt,Rr);break;case 4:if(fo(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Jn(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=ft()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nG(r/1960))-r,10<r){e.timeoutHandle=Kh(Go.bind(null,e,Qt,Rr),r);break}Go(e,Qt,Rr);break;case 5:Go(e,Qt,Rr);break;default:throw Error(W(329))}}}return an(e,ft()),e.callbackNode===n?J6.bind(null,e):null}function mg(e,t){var n=Us;return e.current.memoizedState.isDehydrated&&(la(e,t).flags|=256),e=Rd(e,t),e!==2&&(t=Qt,Qt=n,t!==null&&hg(t)),e}function hg(e){Qt===null?Qt=e:Qt.push.apply(Qt,e)}function rG(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!nr(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fo(e,t){for(t&=~vy,t&=~Qf,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Jn(t),r=1<<n;e[n]=-1,t&=~r}}function Zx(e){if((Ne&6)!==0)throw Error(W(327));vi();var t=md(e,0);if((t&1)===0)return an(e,ft()),null;var n=Rd(e,t);if(e.tag!==0&&n===2){var r=zh(e);r!==0&&(t=r,n=mg(e,r))}if(n===1)throw n=Al,la(e,0),fo(e,t),an(e,ft()),n;if(n===6)throw Error(W(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Go(e,Qt,Rr),an(e,ft()),null}function by(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(Li=ft()+500,Kf&&Oo())}}function ha(e){go!==null&&go.tag===0&&(Ne&6)===0&&vi();var t=Ne;Ne|=1;var n=Mn.transition,r=ze;try{if(Mn.transition=null,ze=1,e)return e()}finally{ze=r,Mn.transition=n,Ne=t,(Ne&6)===0&&Oo()}}function wy(){cn=Ja.current,Qe(Ja)}function la(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,NU(n)),mt!==null)for(n=mt.return;n!==null;){var r=n;switch(ey(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bd();break;case 3:Di(),Qe(rn),Qe(Bt),uy();break;case 5:ly(r);break;case 4:Di();break;case 13:Qe(ot);break;case 19:Qe(ot);break;case 10:oy(r.type._context);break;case 22:case 23:wy()}n=n.return}if(_t=e,mt=e=ko(e.current,null),Rt=cn=t,xt=0,Al=null,vy=Qf=ma=0,Qt=Us=null,ea!==null){for(t=0;t<ea.length;t++)if(n=ea[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}ea=null}return e}function e4(e,t){do{var n=mt;try{if(ry(),bc.current=Td,Pd){for(var r=at.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Pd=!1}if(pa=0,kt=wt=at=null,Ws=!1,Pl=0,gy.current=null,n===null||n.return===null){xt=1,Al=t,mt=null;break}e:{var a=e,i=n.return,s=n,l=t;if(t=Rt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Lx(i);if(m!==null){m.flags&=-257,Bx(m,i,s,a,t),m.mode&1&&qx(a,u,t),t=m,l=u;var v=t.updateQueue;if(v===null){var h=new Set;h.add(l),t.updateQueue=h}else v.add(l);break e}else{if((t&1)===0){qx(a,u,t),xy();break e}l=Error(W(426))}}else if(rt&&s.mode&1){var b=Lx(i);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),Bx(b,i,s,a,t),ty(qi(l,s));break e}}a=l=qi(l,s),xt!==4&&(xt=2),Us===null?Us=[a]:Us.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=q6(a,l,t);Ax(a,y);break e;case 1:s=l;var g=a.type,w=a.stateNode;if((a.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(So===null||!So.has(w)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=L6(a,s,t);Ax(a,x);break e}}a=a.return}while(a!==null)}r4(n)}catch(k){t=k,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(1)}function t4(){var e=Fd.current;return Fd.current=Td,e===null?Td:e}function xy(){(xt===0||xt===3||xt===2)&&(xt=4),_t===null||(ma&268435455)===0&&(Qf&268435455)===0||fo(_t,Rt)}function Rd(e,t){var n=Ne;Ne|=2;var r=t4();(_t!==e||Rt!==t)&&(Rr=null,la(e,t));do try{oG();break}catch(o){e4(e,o)}while(1);if(ry(),Ne=n,Fd.current=r,mt!==null)throw Error(W(261));return _t=null,Rt=0,xt}function oG(){for(;mt!==null;)n4(mt)}function aG(){for(;mt!==null&&!AH();)n4(mt)}function n4(e){var t=a4(e.alternate,e,cn);e.memoizedProps=e.pendingProps,t===null?r4(e):mt=t,gy.current=null}function r4(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=ZU(n,t,cn),n!==null){mt=n;return}}else{if(n=QU(n,t),n!==null){n.flags&=32767,mt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xt=6,mt=null;return}}if(t=t.sibling,t!==null){mt=t;return}mt=t=e}while(t!==null);xt===0&&(xt=5)}function Go(e,t,n){var r=ze,o=Mn.transition;try{Mn.transition=null,ze=1,iG(e,t,n,r)}finally{Mn.transition=o,ze=r}return null}function iG(e,t,n,r){do vi();while(go!==null);if((Ne&6)!==0)throw Error(W(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(W(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(zH(e,a),e===_t&&(mt=_t=null,Rt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Yu||(Yu=!0,i4(pd,function(){return vi(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=Mn.transition,Mn.transition=null;var i=ze;ze=1;var s=Ne;Ne|=4,gy.current=null,eG(e,n),Z6(n,e),EU(Uh),hd=!!Hh,Uh=Hh=null,e.current=n,tG(n),IH(),Ne=s,ze=i,Mn.transition=a}else e.current=n;if(Yu&&(Yu=!1,go=e,Id=o),a=e.pendingLanes,a===0&&(So=null),MH(n.stateNode),an(e,ft()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ad)throw Ad=!1,e=fg,fg=null,e;return(Id&1)!==0&&e.tag!==0&&vi(),a=e.pendingLanes,(a&1)!==0?e===pg?Gs++:(Gs=0,pg=e):Gs=0,Oo(),null}function vi(){if(go!==null){var e=D9(Id),t=Mn.transition,n=ze;try{if(Mn.transition=null,ze=16>e?16:e,go===null)var r=!1;else{if(e=go,go=null,Id=0,(Ne&6)!==0)throw Error(W(331));var o=Ne;for(Ne|=4,re=e.current;re!==null;){var a=re,i=a.child;if((re.flags&16)!==0){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(re=u;re!==null;){var c=re;switch(c.tag){case 0:case 11:case 15:Hs(8,c,a)}var d=c.child;if(d!==null)d.return=c,re=d;else for(;re!==null;){c=re;var f=c.sibling,m=c.return;if(K6(c),c===u){re=null;break}if(f!==null){f.return=m,re=f;break}re=m}}}var v=a.alternate;if(v!==null){var h=v.child;if(h!==null){v.child=null;do{var b=h.sibling;h.sibling=null,h=b}while(h!==null)}}re=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,re=i;else e:for(;re!==null;){if(a=re,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Hs(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,re=y;break e}re=a.return}}var g=e.current;for(re=g;re!==null;){i=re;var w=i.child;if((i.subtreeFlags&2064)!==0&&w!==null)w.return=i,re=w;else e:for(i=g;re!==null;){if(s=re,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Zf(9,s)}}catch(k){lt(s,s.return,k)}if(s===i){re=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,re=x;break e}re=s.return}}if(Ne=o,Oo(),kr&&typeof kr.onPostCommitFiberRoot=="function")try{kr.onPostCommitFiberRoot(jf,e)}catch{}r=!0}return r}finally{ze=n,Mn.transition=t}}return!1}function Qx(e,t,n){t=qi(n,t),t=q6(e,t,1),e=xo(e,t,1),t=Gt(),e!==null&&(tu(e,1,t),an(e,t))}function lt(e,t,n){if(e.tag===3)Qx(e,e,n);else for(;t!==null;){if(t.tag===3){Qx(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(So===null||!So.has(r))){e=qi(n,e),e=L6(t,e,1),t=xo(t,e,1),e=Gt(),t!==null&&(tu(t,1,e),an(t,e));break}}t=t.return}}function sG(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Gt(),e.pingedLanes|=e.suspendedLanes&n,_t===e&&(Rt&n)===n&&(xt===4||xt===3&&(Rt&130023424)===Rt&&500>ft()-yy?la(e,0):vy|=n),an(e,t)}function o4(e,t){t===0&&((e.mode&1)===0?t=1:(t=Bu,Bu<<=1,(Bu&130023424)===0&&(Bu=4194304)));var n=Gt();e=Ur(e,t),e!==null&&(tu(e,t,n),an(e,n))}function lG(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),o4(e,n)}function uG(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(W(314))}r!==null&&r.delete(t),o4(e,n)}var a4;a4=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rn.current)en=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return en=!1,XU(e,t,n);en=(e.flags&131072)!==0}else en=!1,rt&&(t.flags&1048576)!==0&&l6(t,Sd,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xc(e,t),e=t.pendingProps;var o=Ni(t,Bt.current);gi(t,n),o=dy(null,t,r,e,o,n);var a=fy();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,on(r)?(a=!0,wd(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,iy(t),o.updater=Yf,t.stateNode=o,o._reactInternals=t,tg(t,r,e,n),t=og(null,t,r,!0,a,n)):(t.tag=0,rt&&a&&Jv(t),jt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xc(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=dG(r),e=Gn(r,e),o){case 0:t=rg(null,t,r,e,n);break e;case 1:t=$x(null,t,r,e,n);break e;case 11:t=zx(null,t,r,e,n);break e;case 14:t=Vx(null,t,r,Gn(r.type,e),n);break e}throw Error(W(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Gn(r,o),rg(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Gn(r,o),$x(e,t,r,o,n);case 3:e:{if($6(t),e===null)throw Error(W(387));r=t.pendingProps,a=t.memoizedState,o=a.element,f6(e,t),_d(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=qi(Error(W(423)),t),t=jx(e,t,r,n,o);break e}else if(r!==o){o=qi(Error(W(424)),t),t=jx(e,t,r,n,o);break e}else for(dn=wo(t.stateNode.containerInfo.firstChild),mn=t,rt=!0,Yn=null,n=g6(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mi(),r===o){t=Gr(e,t,n);break e}jt(e,t,r,n)}t=t.child}return t;case 5:return v6(t),e===null&&Qh(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Gh(r,o)?i=null:a!==null&&Gh(r,a)&&(t.flags|=32),V6(e,t),jt(e,t,i,n),t.child;case 6:return e===null&&Qh(t),null;case 13:return j6(e,t,n);case 4:return sy(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Oi(t,null,r,n):jt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Gn(r,o),zx(e,t,r,o,n);case 7:return jt(e,t,t.pendingProps,n),t.child;case 8:return jt(e,t,t.pendingProps.children,n),t.child;case 12:return jt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,Ge(Cd,r._currentValue),r._currentValue=i,a!==null)if(nr(a.value,i)){if(a.children===o.children&&!rn.current){t=Gr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Lr(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Jh(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(W(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Jh(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}jt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,gi(t,n),o=qn(o),r=r(o),t.flags|=1,jt(e,t,r,n),t.child;case 14:return r=t.type,o=Gn(r,t.pendingProps),o=Gn(r.type,o),Vx(e,t,r,o,n);case 15:return B6(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Gn(r,o),xc(e,t),t.tag=1,on(r)?(e=!0,wd(t)):e=!1,gi(t,n),m6(t,r,o),tg(t,r,o,n),og(null,t,r,!0,e,n);case 19:return W6(e,t,n);case 22:return z6(e,t,n)}throw Error(W(156,t.tag))};function i4(e,t){return R9(e,t)}function cG(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(e,t,n,r){return new cG(e,t,n,r)}function Sy(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dG(e){if(typeof e=="function")return Sy(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vv)return 11;if(e===$v)return 14}return 2}function ko(e,t){var n=e.alternate;return n===null?(n=Fn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function kc(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")Sy(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ja:return ua(n.children,o,a,t);case zv:i=8,o|=8;break;case _h:return e=Fn(12,n,t,o|2),e.elementType=_h,e.lanes=a,e;case Eh:return e=Fn(13,n,t,o),e.elementType=Eh,e.lanes=a,e;case Ph:return e=Fn(19,n,t,o),e.elementType=Ph,e.lanes=a,e;case h9:return Jf(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case p9:i=10;break e;case m9:i=9;break e;case Vv:i=11;break e;case $v:i=14;break e;case io:i=16,r=null;break e}throw Error(W(130,e==null?e:typeof e,""))}return t=Fn(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function ua(e,t,n,r){return e=Fn(7,e,r,t),e.lanes=n,e}function Jf(e,t,n,r){return e=Fn(22,e,r,t),e.elementType=h9,e.lanes=n,e.stateNode={isHidden:!1},e}function _m(e,t,n){return e=Fn(6,e,null,t),e.lanes=n,e}function Em(e,t,n){return t=Fn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fG(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=im(0),this.expirationTimes=im(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=im(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Cy(e,t,n,r,o,a,i,s,l){return e=new fG(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Fn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},iy(a),e}function pG(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$a,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function s4(e){if(!e)return To;e=e._reactInternals;e:{if(ka(e)!==e||e.tag!==1)throw Error(W(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(on(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(W(171))}if(e.tag===1){var n=e.type;if(on(n))return i6(e,n,t)}return t}function l4(e,t,n,r,o,a,i,s,l){return e=Cy(n,r,!0,e,o,a,i,s,l),e.context=s4(null),n=e.current,r=Gt(),o=Co(n),a=Lr(r,o),a.callback=t!=null?t:null,xo(n,a,o),e.current.lanes=o,tu(e,o,r),an(e,r),e}function ep(e,t,n,r){var o=t.current,a=Gt(),i=Co(o);return n=s4(n),t.context===null?t.context=n:t.pendingContext=n,t=Lr(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xo(o,t,i),e!==null&&(er(e,o,i,a),yc(e,o,i)),i}function Nd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ky(e,t){Jx(e,t),(e=e.alternate)&&Jx(e,t)}function mG(){return null}var u4=typeof reportError=="function"?reportError:function(e){console.error(e)};function _y(e){this._internalRoot=e}tp.prototype.render=_y.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(W(409));ep(e,t,null,null)};tp.prototype.unmount=_y.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ha(function(){ep(null,e,null,null)}),t[Hr]=null}};function tp(e){this._internalRoot=e}tp.prototype.unstable_scheduleHydration=function(e){if(e){var t=B9();e={blockedOn:null,target:e,priority:t};for(var n=0;n<co.length&&t!==0&&t<co[n].priority;n++);co.splice(n,0,e),n===0&&V9(e)}};function Ey(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function np(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function e2(){}function hG(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=Nd(i);a.call(u)}}var i=l4(t,r,e,0,null,!1,!1,"",e2);return e._reactRootContainer=i,e[Hr]=i.current,Sl(e.nodeType===8?e.parentNode:e),ha(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Nd(l);s.call(u)}}var l=Cy(e,0,!1,null,null,!1,!1,"",e2);return e._reactRootContainer=l,e[Hr]=l.current,Sl(e.nodeType===8?e.parentNode:e),ha(function(){ep(t,l,n,r)}),l}function rp(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var s=o;o=function(){var l=Nd(i);s.call(l)}}ep(t,i,e,o)}else i=hG(n,t,e,o,r);return Nd(i)}q9=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ws(t.pendingLanes);n!==0&&(Hv(t,n|1),an(t,ft()),(Ne&6)===0&&(Li=ft()+500,Oo()))}break;case 13:ha(function(){var r=Ur(e,1);if(r!==null){var o=Gt();er(r,e,1,o)}}),ky(e,1)}};Uv=function(e){if(e.tag===13){var t=Ur(e,134217728);if(t!==null){var n=Gt();er(t,e,134217728,n)}ky(e,134217728)}};L9=function(e){if(e.tag===13){var t=Co(e),n=Ur(e,t);if(n!==null){var r=Gt();er(n,e,t,r)}ky(e,t)}};B9=function(){return ze};z9=function(e,t){var n=ze;try{return ze=e,t()}finally{ze=n}};qh=function(e,t,n){switch(t){case"input":if(Ah(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Gf(r);if(!o)throw Error(W(90));v9(r),Ah(r,o)}}}break;case"textarea":b9(e,n);break;case"select":t=n.value,t!=null&&fi(e,!!n.multiple,t,!1)}};E9=by;P9=ha;var gG={usingClientEntryPoint:!1,Events:[ru,Ga,Gf,k9,_9,by]},fs={findFiberByHostInstance:Jo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vG={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=A9(e),e===null?null:e.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||mG,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{jf=Xu.inject(vG),kr=Xu}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gG;bn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ey(t))throw Error(W(200));return pG(e,t,null,n)};bn.createRoot=function(e,t){if(!Ey(e))throw Error(W(299));var n=!1,r="",o=u4;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Cy(e,1,!1,null,null,n,!1,r,o),e[Hr]=t.current,Sl(e.nodeType===8?e.parentNode:e),new _y(t)};bn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=A9(t),e=e===null?null:e.stateNode,e};bn.flushSync=function(e){return ha(e)};bn.hydrate=function(e,t,n){if(!np(t))throw Error(W(200));return rp(null,e,t,!0,n)};bn.hydrateRoot=function(e,t,n){if(!Ey(e))throw Error(W(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=u4;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=l4(t,null,e,1,n!=null?n:null,o,!1,a,i),e[Hr]=t.current,Sl(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new tp(t)};bn.render=function(e,t,n){if(!np(t))throw Error(W(200));return rp(null,e,t,!1,n)};bn.unmountComponentAtNode=function(e){if(!np(e))throw Error(W(40));return e._reactRootContainer?(ha(function(){rp(null,null,e,!1,function(){e._reactRootContainer=null,e[Hr]=null})}),!0):!1};bn.unstable_batchedUpdates=by;bn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!np(n))throw Error(W(200));if(e==null||e._reactInternals===void 0)throw Error(W(38));return rp(e,t,n,!1,r)};bn.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=bn})($f);var[yG,c4]=be({strict:!1,name:"PortalManagerContext"});function Py(e){const{children:t,zIndex:n}=e;return S(yG,{value:{zIndex:n},children:t})}Py.displayName="PortalManager";var[d4,bG]=be({strict:!1,name:"PortalContext"}),Ty="chakra-portal",wG=".chakra-portal",xG=e=>S("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:e.zIndex,top:0,left:0,right:0},children:e.children}),SG=e=>{const{appendToParentPortal:t,children:n}=e,[r,o]=p.exports.useState(null),a=p.exports.useRef(null),[,i]=p.exports.useState({});p.exports.useEffect(()=>i({}),[]);const s=bG(),l=c4();An(()=>{if(!r)return;const c=r.ownerDocument,d=t&&s!=null?s:c.body;if(!d)return;a.current=c.createElement("div"),a.current.className=Ty,d.appendChild(a.current),i({});const f=a.current;return()=>{d.contains(f)&&d.removeChild(f)}},[r]);const u=l!=null&&l.zIndex?S(xG,{zIndex:l==null?void 0:l.zIndex,children:n}):n;return a.current?$f.exports.createPortal(S(d4,{value:a.current,children:u}),a.current):S("span",{ref:c=>{c&&o(c)}})},CG=e=>{const{children:t,containerRef:n,appendToParentPortal:r}=e,o=n.current,a=o!=null?o:typeof window<"u"?document.body:void 0,i=p.exports.useMemo(()=>{const l=o==null?void 0:o.ownerDocument.createElement("div");return l&&(l.className=Ty),l},[o]),[,s]=p.exports.useState({});return An(()=>s({}),[]),An(()=>{if(!(!i||!a))return a.appendChild(i),()=>{a.removeChild(i)}},[i,a]),a&&i?$f.exports.createPortal(S(d4,{value:r?i:null,children:t}),i):null};function Do(e){const{containerRef:t,...n}=e;return t?S(CG,{containerRef:t,...n}):S(SG,{...n})}Do.defaultProps={appendToParentPortal:!0};Do.className=Ty;Do.selector=wG;Do.displayName="Portal";var kG=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Ma=new WeakMap,Zu=new WeakMap,Qu={},Pm=0,f4=function(e){return e&&(e.host||f4(e.parentNode))},_G=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=f4(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return Boolean(n)})},EG=function(e,t,n,r){var o=_G(t,Array.isArray(e)?e:[e]);Qu[n]||(Qu[n]=new WeakMap);var a=Qu[n],i=[],s=new Set,l=new Set(o),u=function(d){!d||s.has(d)||(s.add(d),u(d.parentNode))};o.forEach(u);var c=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(f){if(s.has(f))c(f);else{var m=f.getAttribute(r),v=m!==null&&m!=="false",h=(Ma.get(f)||0)+1,b=(a.get(f)||0)+1;Ma.set(f,h),a.set(f,b),i.push(f),h===1&&v&&Zu.set(f,!0),b===1&&f.setAttribute(n,"true"),v||f.setAttribute(r,"true")}})};return c(t),s.clear(),Pm++,function(){i.forEach(function(d){var f=Ma.get(d)-1,m=a.get(d)-1;Ma.set(d,f),a.set(d,m),f||(Zu.has(d)||d.removeAttribute(r),Zu.delete(d)),m||d.removeAttribute(n)}),Pm--,Pm||(Ma=new WeakMap,Ma=new WeakMap,Zu=new WeakMap,Qu={})}},PG=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||kG(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),EG(r,o,n,"aria-hidden")):function(){return null}};function TG(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var gg="data-focus-lock",p4="data-focus-lock-disabled",FG="data-no-focus-lock",AG="data-autofocus-inside",IG="data-no-autofocus";function RG(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function NG(e,t){var n=p.exports.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}function m4(e,t){return NG(t||null,function(n){return e.forEach(function(r){return RG(r,n)})})}var Tm={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"};function h4(e){return e}function g4(e,t){t===void 0&&(t=h4);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(s){return s!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(s){return a(s)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var s=n;n=[],s.forEach(a),i=n}var l=function(){var c=i;i=[],c.forEach(a)},u=function(){return Promise.resolve().then(l)};u(),n={push:function(c){i.push(c),u()},filter:function(c){return i=i.filter(c),n}}}};return o}function Fy(e,t){return t===void 0&&(t=h4),g4(e,t)}function v4(e){e===void 0&&(e={});var t=g4(null);return t.options=gr({async:!0,ssr:!1},e),t}var y4=function(e){var t=e.sideCar,n=K5(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return S(r,{...gr({},n)})};y4.isSideCarExport=!0;function MG(e,t){return e.useMedium(t),y4}var b4=Fy({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),w4=Fy(),OG=Fy(),DG=v4({async:!0}),qG=[],Ay=p.exports.forwardRef(function(t,n){var r,o=p.exports.useState(),a=o[0],i=o[1],s=p.exports.useRef(),l=p.exports.useRef(!1),u=p.exports.useRef(null),c=t.children,d=t.disabled,f=t.noFocusGuards,m=t.persistentFocus,v=t.crossFrame,h=t.autoFocus;t.allowTextSelection;var b=t.group,y=t.className,g=t.whiteList,w=t.hasPositiveIndices,x=t.shards,k=x===void 0?qG:x,_=t.as,E=_===void 0?"div":_,T=t.lockProps,O=T===void 0?{}:T,A=t.sideCar,q=t.returnFocus,$=t.focusOptions,z=t.onActivation,Z=t.onDeactivation,te=p.exports.useState({}),V=te[0],L=p.exports.useCallback(function(){u.current=u.current||document&&document.activeElement,s.current&&z&&z(s.current),l.current=!0},[z]),N=p.exports.useCallback(function(){l.current=!1,Z&&Z(s.current)},[Z]);p.exports.useEffect(function(){d||(u.current=null)},[]);var B=p.exports.useCallback(function(j){var ae=u.current;if(ae&&ae.focus){var ge=typeof q=="function"?q(ae):q;if(ge){var xe=typeof ge=="object"?ge:void 0;u.current=null,j?Promise.resolve().then(function(){return ae.focus(xe)}):ae.focus(xe)}}},[q]),X=p.exports.useCallback(function(j){l.current&&b4.useMedium(j)},[]),ee=w4.useMedium,Q=p.exports.useCallback(function(j){s.current!==j&&(s.current=j,i(j))},[]),U=Qs((r={},r[p4]=d&&"disabled",r[gg]=b,r),O),H=f!==!0,ie=H&&f!=="tail",me=m4([n,Q]);return se(Ht,{children:[H&&[S("div",{"data-focus-guard":!0,tabIndex:d?-1:0,style:Tm},"guard-first"),w?S("div",{"data-focus-guard":!0,tabIndex:d?-1:1,style:Tm},"guard-nearest"):null],!d&&S(A,{id:V,sideCar:DG,observed:a,disabled:d,persistentFocus:m,crossFrame:v,autoFocus:h,whiteList:g,shards:k,onActivation:L,onDeactivation:N,returnFocus:B,focusOptions:$}),S(E,{ref:me,...U,className:y,onBlur:ee,onFocus:X,children:c}),ie&&S("div",{"data-focus-guard":!0,tabIndex:d?-1:0,style:Tm})]})});Ay.propTypes={};Ay.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};const x4=Ay;function vg(e,t){return vg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},vg(e,t)}function LG(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,vg(e,t)}function Il(e){return Il=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Il(e)}function BG(e,t){if(Il(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Il(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zG(e){var t=BG(e,"string");return Il(t)==="symbol"?t:String(t)}function VG(e,t,n){return t=zG(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $G(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function s(){i=e(a.map(function(u){return u.props})),t(i)}var l=function(u){LG(c,u);function c(){return u.apply(this,arguments)||this}c.peek=function(){return i};var d=c.prototype;return d.componentDidMount=function(){a.push(this),s()},d.componentDidUpdate=function(){s()},d.componentWillUnmount=function(){var m=a.indexOf(this);a.splice(m,1),s()},d.render=function(){return S(o,{...this.props})},c}(p.exports.PureComponent);return VG(l,"displayName","SideEffect("+n(o)+")"),l}}var Tr=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},yg=function(e){return Array.isArray(e)?e:[e]},jG=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},S4=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},C4=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},WG=function(e,t){return!e||C4(e)||!jG(e)&&t(S4(e))},k4=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=WG(t,k4.bind(void 0,e));return e.set(t,r),r},HG=function(e,t){return e&&!C4(e)?KG(e)?t(S4(e)):!1:!0},_4=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=HG(t,_4.bind(void 0,e));return e.set(t,r),r},E4=function(e){return e.dataset},UG=function(e){return e.tagName==="BUTTON"},P4=function(e){return e.tagName==="INPUT"},T4=function(e){return P4(e)&&e.type==="radio"},GG=function(e){return!((P4(e)||UG(e))&&(e.type==="hidden"||e.disabled))},KG=function(e){var t=e.getAttribute(IG);return![!0,"true",""].includes(t)},Iy=function(e){var t;return Boolean(e&&((t=E4(e))===null||t===void 0?void 0:t.focusGuard))},Md=function(e){return!Iy(e)},YG=function(e){return Boolean(e)},XG=function(e,t){var n=e.tabIndex-t.tabIndex,r=e.index-t.index;if(n){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return n||r},F4=function(e,t,n){return Tr(e).map(function(r,o){return{node:r,index:o,tabIndex:n&&r.tabIndex===-1?(r.dataset||{}).focusGuard?0:-1:r.tabIndex}}).filter(function(r){return!t||r.tabIndex>=0}).sort(XG)},ZG=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Ry=ZG.join(","),QG="".concat(Ry,", [data-focus-guard]"),A4=function(e,t){var n;return Tr(((n=e.shadowRoot)===null||n===void 0?void 0:n.children)||e.children).reduce(function(r,o){return r.concat(o.matches(t?QG:Ry)?[o]:[],A4(o))},[])},Ny=function(e,t){return e.reduce(function(n,r){return n.concat(A4(r,t),r.parentNode?Tr(r.parentNode.querySelectorAll(Ry)).filter(function(o){return o===r}):[])},[])},JG=function(e){var t=e.querySelectorAll("[".concat(AG,"]"));return Tr(t).map(function(n){return Ny([n])}).reduce(function(n,r){return n.concat(r)},[])},My=function(e,t){return Tr(e).filter(function(n){return k4(t,n)}).filter(function(n){return GG(n)})},t2=function(e,t){return t===void 0&&(t=new Map),Tr(e).filter(function(n){return _4(t,n)})},bg=function(e,t,n){return F4(My(Ny(e,n),t),!0,n)},n2=function(e,t){return F4(My(Ny(e),t),!1)},eK=function(e,t){return My(JG(e),t)},Rl=function(e,t){return e.shadowRoot?Rl(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:Tr(e.children).some(function(n){return Rl(n,t)})},tK=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,s){return!t.has(s)})},I4=function(e){return e.parentNode?I4(e.parentNode):e},Oy=function(e){var t=yg(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(gg);return n.push.apply(n,o?tK(Tr(I4(r).querySelectorAll("[".concat(gg,'="').concat(o,'"]:not([').concat(p4,'="disabled"])')))):[r]),n},[])},R4=function(e){return e.activeElement?e.activeElement.shadowRoot?R4(e.activeElement.shadowRoot):e.activeElement:void 0},Dy=function(){return document.activeElement?document.activeElement.shadowRoot?R4(document.activeElement.shadowRoot):document.activeElement:void 0},nK=function(e){return e===document.activeElement},rK=function(e){return Boolean(Tr(e.querySelectorAll("iframe")).some(function(t){return nK(t)}))},N4=function(e){var t=document&&Dy();return!t||t.dataset&&t.dataset.focusGuard?!1:Oy(e).some(function(n){return Rl(n,t)||rK(n)})},oK=function(){var e=document&&Dy();return e?Tr(document.querySelectorAll("[".concat(FG,"]"))).some(function(t){return Rl(t,e)}):!1},aK=function(e,t){return t.filter(T4).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},qy=function(e,t){return T4(e)&&e.name?aK(e,t):e},iK=function(e){var t=new Set;return e.forEach(function(n){return t.add(qy(n,e))}),e.filter(function(n){return t.has(n)})},r2=function(e){return e[0]&&e.length>1?qy(e[0],e):e[0]},o2=function(e,t){return e.length>1?e.indexOf(qy(e[t],e)):t},M4="NEW_FOCUS",sK=function(e,t,n,r){var o=e.length,a=e[0],i=e[o-1],s=Iy(n);if(!(n&&e.indexOf(n)>=0)){var l=n!==void 0?t.indexOf(n):-1,u=r?t.indexOf(r):l,c=r?e.indexOf(r):-1,d=l-u,f=t.indexOf(a),m=t.indexOf(i),v=iK(t),h=n!==void 0?v.indexOf(n):-1,b=h-(r?v.indexOf(r):l),y=o2(e,0),g=o2(e,o-1);if(l===-1||c===-1)return M4;if(!d&&c>=0)return c;if(l<=f&&s&&Math.abs(d)>1)return g;if(l>=m&&s&&Math.abs(d)>1)return y;if(d&&Math.abs(b)>1)return c;if(l<=f)return g;if(l>m)return y;if(d)return Math.abs(d)>1?c:(o+c+d)%o}},lK=function(e){return function(t){var n,r=(n=E4(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},uK=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=t2(r.filter(lK(n)));return o&&o.length?r2(o):r2(t2(t))},wg=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&wg(e.parentNode.host||e.parentNode,t),t},Fm=function(e,t){for(var n=wg(e),r=wg(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},O4=function(e,t,n){var r=yg(e),o=yg(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(s){i=Fm(i||s,s)||i,n.filter(Boolean).forEach(function(l){var u=Fm(a,l);u&&(!i||Rl(u,i)?i=u:i=Fm(u,i))})}),i},cK=function(e,t){return e.reduce(function(n,r){return n.concat(eK(r,t))},[])},dK=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(YG)},fK=function(e,t){var n=document&&Dy(),r=Oy(e).filter(Md),o=O4(n||e,e,r),a=new Map,i=n2(r,a),s=bg(r,a).filter(function(m){var v=m.node;return Md(v)});if(!(!s[0]&&(s=i,!s[0]))){var l=n2([o],a).map(function(m){var v=m.node;return v}),u=dK(l,s),c=u.map(function(m){var v=m.node;return v}),d=sK(c,l,n,t);if(d===M4){var f=uK(i,c,cK(r,a));if(f)return{node:f};console.warn("focus-lock: cannot find any node to move focus into");return}return d===void 0?d:u[d]}},pK=function(e){var t=Oy(e).filter(Md),n=O4(e,e,t),r=new Map,o=bg([n],r,!0),a=bg(t,r).filter(function(i){var s=i.node;return Md(s)}).map(function(i){var s=i.node;return s});return o.map(function(i){var s=i.node,l=i.index;return{node:s,index:l,lockItem:a.indexOf(s)>=0,guard:Iy(s)}})},mK=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},Am=0,Im=!1,hK=function(e,t,n){n===void 0&&(n={});var r=fK(e,t);if(!Im&&r){if(Am>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),Im=!0,setTimeout(function(){Im=!1},1);return}Am++,mK(r.node,n.focusOptions),Am--}};const D4=hK;function q4(e){var t=window,n=t.setImmediate;typeof n<"u"?n(e):setTimeout(e,1)}var gK=function(){return document&&document.activeElement===document.body},vK=function(){return gK()||oK()},yi=null,ei=null,bi=null,Nl=!1,yK=function(){return!0},bK=function(t){return(yi.whiteList||yK)(t)},wK=function(t,n){bi={observerNode:t,portaledElement:n}},xK=function(t){return bi&&bi.portaledElement===t};function a2(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var SK=function(t){return t&&"current"in t?t.current:t},CK=function(t){return t?Boolean(Nl):Nl==="meanwhile"},kK=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},_K=function(t,n){return n.some(function(r){return kK(t,r,r)})},Od=function(){var t=!1;if(yi){var n=yi,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,s=n.crossFrame,l=n.focusOptions,u=r||bi&&bi.portaledElement,c=document&&document.activeElement;if(u){var d=[u].concat(i.map(SK).filter(Boolean));if((!c||bK(c))&&(o||CK(s)||!vK()||!ei&&a)&&(u&&!(N4(d)||c&&_K(c,d)||xK(c))&&(document&&!ei&&c&&!a?(c.blur&&c.blur(),document.body.focus()):(t=D4(d,ei,{focusOptions:l}),bi={})),Nl=!1,ei=document&&document.activeElement),document){var f=document&&document.activeElement,m=pK(d),v=m.map(function(h){var b=h.node;return b}).indexOf(f);v>-1&&(m.filter(function(h){var b=h.guard,y=h.node;return b&&y.dataset.focusAutoGuard}).forEach(function(h){var b=h.node;return b.removeAttribute("tabIndex")}),a2(v,m.length,1,m),a2(v,-1,-1,m))}}}return t},L4=function(t){Od()&&t&&(t.stopPropagation(),t.preventDefault())},Ly=function(){return q4(Od)},EK=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||wK(r,n)},PK=function(){return null},B4=function(){Nl="just",setTimeout(function(){Nl="meanwhile"},0)},TK=function(){document.addEventListener("focusin",L4),document.addEventListener("focusout",Ly),window.addEventListener("blur",B4)},FK=function(){document.removeEventListener("focusin",L4),document.removeEventListener("focusout",Ly),window.removeEventListener("blur",B4)};function AK(e){return e.filter(function(t){var n=t.disabled;return!n})}function IK(e){var t=e.slice(-1)[0];t&&!yi&&TK();var n=yi,r=n&&t&&t.id===n.id;yi=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(ei=null,(!r||n.observed!==t.observed)&&t.onActivation(),Od(),q4(Od)):(FK(),ei=null)}b4.assignSyncMedium(EK);w4.assignMedium(Ly);OG.assignMedium(function(e){return e({moveFocusInside:D4,focusInside:N4})});const RK=$G(AK,IK)(PK);var z4=p.exports.forwardRef(function(t,n){return S(x4,{sideCar:RK,ref:n,...t})}),V4=x4.propTypes||{};V4.sideCar;TG(V4,["sideCar"]);z4.propTypes={};const NK=z4;var $4=e=>{const{initialFocusRef:t,finalFocusRef:n,contentRef:r,restoreFocus:o,children:a,isDisabled:i,autoFocus:s,persistentFocus:l,lockFocusAcrossFrames:u}=e,c=p.exports.useCallback(()=>{t!=null&&t.current?t.current.focus():r!=null&&r.current&&I3(r.current).length===0&&requestAnimationFrame(()=>{var v;(v=r.current)==null||v.focus()})},[t,r]),d=p.exports.useCallback(()=>{var m;(m=n==null?void 0:n.current)==null||m.focus()},[n]);return S(NK,{crossFrame:u,persistentFocus:l,autoFocus:s,disabled:i,onActivation:c,onDeactivation:d,returnFocus:o&&!n,children:a})};$4.displayName="FocusLock";var _c="right-scroll-bar-position",Ec="width-before-scroll-bar",MK="with-scroll-bars-hidden",OK="--removed-body-scroll-bar-size",j4=v4(),Rm=function(){},op=p.exports.forwardRef(function(e,t){var n=p.exports.useRef(null),r=p.exports.useState({onScrollCapture:Rm,onWheelCapture:Rm,onTouchMoveCapture:Rm}),o=r[0],a=r[1],i=e.forwardProps,s=e.children,l=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,f=e.sideCar,m=e.noIsolation,v=e.inert,h=e.allowPinchZoom,b=e.as,y=b===void 0?"div":b,g=K5(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),w=f,x=m4([n,t]),k=gr(gr({},g),o);return se(Ht,{children:[c&&S(w,{sideCar:j4,removeScrollBar:u,shards:d,noIsolation:m,inert:v,setCallbacks:a,allowPinchZoom:!!h,lockRef:n}),i?p.exports.cloneElement(p.exports.Children.only(s),gr(gr({},k),{ref:x})):S(y,{...gr({},k,{className:l,ref:x}),children:s})]})});op.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};op.classNames={fullWidth:Ec,zeroRight:_c};var DK=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function qK(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=DK();return t&&e.setAttribute("nonce",t),e}function LK(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function BK(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var zK=function(){var e=0,t=null;return{add:function(n){e==0&&(t=qK())&&(LK(t,n),BK(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},VK=function(){var e=zK();return function(t,n){p.exports.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},W4=function(){var e=VK(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},$K={left:0,top:0,right:0,gap:0},Nm=function(e){return parseInt(e||"",10)||0},jK=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Nm(n),Nm(r),Nm(o)]},WK=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return $K;var t=jK(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},HK=W4(),UK=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(MK,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(_c,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Ec,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(_c," .").concat(_c,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Ec," .").concat(Ec,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(OK,": ").concat(s,`px;
  }
`)},GK=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r,a=p.exports.useMemo(function(){return WK(o)},[o]);return S(HK,{styles:UK(a,!t,o,n?"":"!important")})},xg=!1;if(typeof window<"u")try{var Ju=Object.defineProperty({},"passive",{get:function(){return xg=!0,!0}});window.addEventListener("test",Ju,Ju),window.removeEventListener("test",Ju,Ju)}catch{xg=!1}var Oa=xg?{passive:!1}:!1,KK=function(e){return e.tagName==="TEXTAREA"},H4=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!KK(e)&&n[t]==="visible")},YK=function(e){return H4(e,"overflowY")},XK=function(e){return H4(e,"overflowX")},i2=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=U4(e,n);if(r){var o=G4(e,n),a=o[1],i=o[2];if(a>i)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},ZK=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},QK=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},U4=function(e,t){return e==="v"?YK(t):XK(t)},G4=function(e,t){return e==="v"?ZK(t):QK(t)},JK=function(e,t){return e==="h"&&t==="rtl"?-1:1},eY=function(e,t,n,r,o){var a=JK(e,window.getComputedStyle(t).direction),i=a*r,s=n.target,l=t.contains(s),u=!1,c=i>0,d=0,f=0;do{var m=G4(e,s),v=m[0],h=m[1],b=m[2],y=h-b-a*v;(v||y)&&U4(e,s)&&(d+=y,f+=v),s=s.parentNode}while(!l&&s!==document.body||l&&(t.contains(s)||t===s));return(c&&(o&&d===0||!o&&i>d)||!c&&(o&&f===0||!o&&-i>f))&&(u=!0),u},ec=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},s2=function(e){return[e.deltaX,e.deltaY]},l2=function(e){return e&&"current"in e?e.current:e},tY=function(e,t){return e[0]===t[0]&&e[1]===t[1]},nY=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},rY=0,Da=[];function oY(e){var t=p.exports.useRef([]),n=p.exports.useRef([0,0]),r=p.exports.useRef(),o=p.exports.useState(rY++)[0],a=p.exports.useState(function(){return W4()})[0],i=p.exports.useRef(e);p.exports.useEffect(function(){i.current=e},[e]),p.exports.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var h=jz([e.lockRef.current],(e.shards||[]).map(l2),!0).filter(Boolean);return h.forEach(function(b){return b.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),h.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=p.exports.useCallback(function(h,b){if("touches"in h&&h.touches.length===2)return!i.current.allowPinchZoom;var y=ec(h),g=n.current,w="deltaX"in h?h.deltaX:g[0]-y[0],x="deltaY"in h?h.deltaY:g[1]-y[1],k,_=h.target,E=Math.abs(w)>Math.abs(x)?"h":"v";if("touches"in h&&E==="h"&&_.type==="range")return!1;var T=i2(E,_);if(!T)return!0;if(T?k=E:(k=E==="v"?"h":"v",T=i2(E,_)),!T)return!1;if(!r.current&&"changedTouches"in h&&(w||x)&&(r.current=k),!k)return!0;var O=r.current||k;return eY(O,b,h,O==="h"?w:x,!0)},[]),l=p.exports.useCallback(function(h){var b=h;if(!(!Da.length||Da[Da.length-1]!==a)){var y="deltaY"in b?s2(b):ec(b),g=t.current.filter(function(k){return k.name===b.type&&k.target===b.target&&tY(k.delta,y)})[0];if(g&&g.should){b.cancelable&&b.preventDefault();return}if(!g){var w=(i.current.shards||[]).map(l2).filter(Boolean).filter(function(k){return k.contains(b.target)}),x=w.length>0?s(b,w[0]):!i.current.noIsolation;x&&b.cancelable&&b.preventDefault()}}},[]),u=p.exports.useCallback(function(h,b,y,g){var w={name:h,delta:b,target:y,should:g};t.current.push(w),setTimeout(function(){t.current=t.current.filter(function(x){return x!==w})},1)},[]),c=p.exports.useCallback(function(h){n.current=ec(h),r.current=void 0},[]),d=p.exports.useCallback(function(h){u(h.type,s2(h),h.target,s(h,e.lockRef.current))},[]),f=p.exports.useCallback(function(h){u(h.type,ec(h),h.target,s(h,e.lockRef.current))},[]);p.exports.useEffect(function(){return Da.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",l,Oa),document.addEventListener("touchmove",l,Oa),document.addEventListener("touchstart",c,Oa),function(){Da=Da.filter(function(h){return h!==a}),document.removeEventListener("wheel",l,Oa),document.removeEventListener("touchmove",l,Oa),document.removeEventListener("touchstart",c,Oa)}},[]);var m=e.removeScrollBar,v=e.inert;return se(Ht,{children:[v?S(a,{styles:nY(o)}):null,m?S(GK,{gapMode:"margin"}):null]})}const aY=MG(j4,oY);var K4=p.exports.forwardRef(function(e,t){return S(op,{...gr({},e,{ref:t,sideCar:aY})})});K4.classNames=op.classNames;const iY=K4;var _a=(...e)=>e.filter(Boolean).join(" ");function Ss(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var sY=class{constructor(){he(this,"modals");this.modals=[]}add(e){this.modals.push(e)}remove(e){this.modals=this.modals.filter(t=>t!==e)}isTopModal(e){return this.modals[this.modals.length-1]===e}},Sg=new sY;function lY(e,t){p.exports.useEffect(()=>(t&&Sg.add(e),()=>{Sg.remove(e)}),[t,e])}function Y4(e){const{isOpen:t,onClose:n,id:r,closeOnOverlayClick:o=!0,closeOnEsc:a=!0,useInert:i=!0,onOverlayClick:s,onEsc:l}=e,u=p.exports.useRef(null),c=p.exports.useRef(null),[d,f,m]=uY(r,"chakra-modal","chakra-modal--header","chakra-modal--body");X4(u,t&&i),lY(u,t);const v=p.exports.useRef(null),h=p.exports.useCallback(T=>{v.current=T.target},[]),b=p.exports.useCallback(T=>{T.key==="Escape"&&(T.stopPropagation(),a&&(n==null||n()),l==null||l())},[a,n,l]),[y,g]=p.exports.useState(!1),[w,x]=p.exports.useState(!1),k=p.exports.useCallback((T={},O=null)=>({role:"dialog",...T,ref:ke(O,u),id:d,tabIndex:-1,"aria-modal":!0,"aria-labelledby":y?f:void 0,"aria-describedby":w?m:void 0,onClick:Ss(T.onClick,A=>A.stopPropagation())}),[m,w,d,f,y]),_=p.exports.useCallback(T=>{T.stopPropagation(),v.current===T.target&&(!Sg.isTopModal(u)||(o&&(n==null||n()),s==null||s()))},[n,o,s]),E=p.exports.useCallback((T={},O=null)=>({...T,ref:ke(O,c),onClick:Ss(T.onClick,_),onKeyDown:Ss(T.onKeyDown,b),onMouseDown:Ss(T.onMouseDown,h)}),[b,h,_]);return{isOpen:t,onClose:n,headerId:f,bodyId:m,setBodyMounted:x,setHeaderMounted:g,dialogRef:u,overlayRef:c,getDialogProps:k,getDialogContainerProps:E}}function X4(e,t){const n=e.current;p.exports.useEffect(()=>{if(!(!e.current||!t))return PG(e.current)},[t,e,n])}function uY(e,...t){const n=p.exports.useId(),r=e||n;return p.exports.useMemo(()=>t.map(o=>`${o}-${r}`),[r,t])}var[cY,qo]=be({name:"ModalStylesContext",errorMessage:`useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[Z4,Kr]=be({strict:!0,name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"}),au=e=>{const{portalProps:t,children:n,autoFocus:r,trapFocus:o,initialFocusRef:a,finalFocusRef:i,returnFocusOnClose:s,blockScrollOnMount:l,allowPinchZoom:u,preserveScrollBarGap:c,motionPreset:d,lockFocusAcrossFrames:f,onCloseComplete:m}=e,v=$e("Modal",e),b={...Y4(e),autoFocus:r,trapFocus:o,initialFocusRef:a,finalFocusRef:i,returnFocusOnClose:s,blockScrollOnMount:l,allowPinchZoom:u,preserveScrollBarGap:c,motionPreset:d,lockFocusAcrossFrames:f};return S(Z4,{value:b,children:S(cY,{value:v,children:S(Ao,{onExitComplete:m,children:b.isOpen&&S(Do,{...t,children:n})})})})};au.defaultProps={lockFocusAcrossFrames:!0,returnFocusOnClose:!0,scrollBehavior:"outside",trapFocus:!0,autoFocus:!0,blockScrollOnMount:!0,allowPinchZoom:!1,motionPreset:"scale"};au.displayName="Modal";var Pc=M((e,t)=>{const{className:n,...r}=e,{bodyId:o,setBodyMounted:a}=Kr();p.exports.useEffect(()=>(a(!0),()=>a(!1)),[a]);const i=_a("chakra-modal__body",n),s=qo();return P.createElement(R.div,{ref:t,className:i,id:o,...r,__css:s.body})});Pc.displayName="ModalBody";var Tc=M((e,t)=>{const{onClick:n,className:r,...o}=e,{onClose:a}=Kr(),i=_a("chakra-modal__close-btn",r),s=qo();return S(Gl,{ref:t,__css:s.closeButton,className:i,onClick:Ss(n,l=>{l.stopPropagation(),a()}),...o})});Tc.displayName="ModalCloseButton";function By(e){const{autoFocus:t,trapFocus:n,dialogRef:r,initialFocusRef:o,blockScrollOnMount:a,allowPinchZoom:i,finalFocusRef:s,returnFocusOnClose:l,preserveScrollBarGap:u,lockFocusAcrossFrames:c}=Kr(),[d,f]=x0();return p.exports.useEffect(()=>{!d&&f&&setTimeout(f)},[d,f]),S($4,{autoFocus:t,isDisabled:!n,initialFocusRef:o,finalFocusRef:s,restoreFocus:l,contentRef:r,lockFocusAcrossFrames:c,children:S(iY,{removeScrollBar:!u,allowPinchZoom:i,enabled:a,forwardProps:!0,children:e.children})})}var dY={slideInBottom:{...nd,custom:{offsetY:16,reverse:!0}},slideInRight:{...nd,custom:{offsetX:16,reverse:!0}},scale:{...q0,custom:{initialScale:.95,reverse:!0}},none:{}},fY=R(or.section),pY=e=>dY[e||"none"],Q4=p.exports.forwardRef((e,t)=>{const{preset:n,motionProps:r=pY(n),...o}=e;return S(fY,{ref:t,...r,...o})});Q4.displayName="ModalTransition";var zy=M((e,t)=>{const{className:n,children:r,containerProps:o,motionProps:a,...i}=e,{getDialogProps:s,getDialogContainerProps:l}=Kr(),u=s(i,t),c=l(o),d=_a("chakra-modal__content",n),f=qo(),m={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...f.dialog},v={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...f.dialogContainer},{motionPreset:h}=Kr();return P.createElement(By,null,P.createElement(R.div,{...c,className:"chakra-modal__content-container",tabIndex:-1,__css:v},S(Q4,{preset:h,motionProps:a,className:d,...u,__css:m,children:r})))});zy.displayName="ModalContent";var Fc=M((e,t)=>{const{className:n,...r}=e,o=_a("chakra-modal__footer",n),i={display:"flex",alignItems:"center",justifyContent:"flex-end",...qo().footer};return P.createElement(R.footer,{ref:t,...r,__css:i,className:o})});Fc.displayName="ModalFooter";var Ac=M((e,t)=>{const{className:n,...r}=e,{headerId:o,setHeaderMounted:a}=Kr();p.exports.useEffect(()=>(a(!0),()=>a(!1)),[a]);const i=_a("chakra-modal__header",n),l={flex:0,...qo().header};return P.createElement(R.header,{ref:t,className:i,id:o,...r,__css:l})});Ac.displayName="ModalHeader";var mY=R(or.div),Ic=M((e,t)=>{const{className:n,transition:r,motionProps:o,...a}=e,i=_a("chakra-modal__overlay",n),l={pos:"fixed",left:"0",top:"0",w:"100vw",h:"100vh",...qo().overlay},{motionPreset:u}=Kr();return S(mY,{...o||(u==="none"?{}:D0),__css:l,ref:t,className:i,...a})});Ic.displayName="ModalOverlay";function hY(e){const{leastDestructiveRef:t,...n}=e;return S(au,{...n,initialFocusRef:t})}var gY=M((e,t)=>S(zy,{ref:t,role:"alertdialog",...e})),[vY,J4]=be(),yY={start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}};function bY(e,t){var r;var n;if(!!e)return(r=(n=yY[e])==null?void 0:n[t])!=null?r:e}function wY(e){var t;const{isOpen:n,onClose:r,placement:o="right",children:a,...i}=e,s=yn(),l=(t=s.components)==null?void 0:t.Drawer,u=bY(o,s.direction);return S(vY,{value:{placement:u},children:S(au,{isOpen:n,onClose:r,styleConfig:l,...i,children:a})})}var xY=R(L0),e_=M((e,t)=>{const{className:n,children:r,motionProps:o,containerProps:a,...i}=e,{getDialogProps:s,getDialogContainerProps:l,isOpen:u}=Kr(),c=s(i,t),d=l(a),f=_a("chakra-modal__content",n),m=qo(),v={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...m.dialog},h={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...m.dialogContainer},{placement:b}=J4();return P.createElement(By,null,P.createElement(R.div,{...d,className:"chakra-modal__content-container",__css:h},S(xY,{motionProps:o,direction:b,in:u,className:f,...c,__css:v,children:r})))});e_.displayName="DrawerContent";function SY(e,t){const n=Ue(e);p.exports.useEffect(()=>{let r=null;const o=()=>n();return t!==null&&(r=window.setInterval(o,t)),()=>{r&&window.clearInterval(r)}},[t,n])}var t_=(...e)=>e.filter(Boolean).join(" "),Mm=e=>e?!0:void 0;function ur(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var CY=e=>S(Mt,{viewBox:"0 0 24 24",...e,children:S("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})}),kY=e=>S(Mt,{viewBox:"0 0 24 24",...e,children:S("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})});function u2(e,t,n,r){p.exports.useEffect(()=>{var s;if(!e.current||!r)return;const o=(s=e.current.ownerDocument.defaultView)!=null?s:window,a=Array.isArray(t)?t:[t],i=new o.MutationObserver(l=>{for(const u of l)u.type==="attributes"&&u.attributeName&&a.includes(u.attributeName)&&n(u)});return i.observe(e.current,{attributes:!0,attributeFilter:a}),()=>i.disconnect()})}var _Y=50,c2=300;function EY(e,t){const[n,r]=p.exports.useState(!1),[o,a]=p.exports.useState(null),[i,s]=p.exports.useState(!0),l=p.exports.useRef(null),u=()=>clearTimeout(l.current);SY(()=>{o==="increment"&&e(),o==="decrement"&&t()},n?_Y:null);const c=p.exports.useCallback(()=>{i&&e(),l.current=setTimeout(()=>{s(!1),r(!0),a("increment")},c2)},[e,i]),d=p.exports.useCallback(()=>{i&&t(),l.current=setTimeout(()=>{s(!1),r(!0),a("decrement")},c2)},[t,i]),f=p.exports.useCallback(()=>{s(!0),r(!1),u()},[]);return p.exports.useEffect(()=>()=>u(),[]),{up:c,down:d,stop:f,isSpinning:n}}var PY=/^[Ee0-9+\-.]$/;function TY(e){return PY.test(e)}function FY(e,t){if(e.key==null)return!0;const n=e.ctrlKey||e.altKey||e.metaKey;return!(e.key.length===1)||n?!0:t(e.key)}function n_(e={}){const{focusInputOnChange:t=!0,clampValueOnBlur:n=!0,keepWithinRange:r=!0,min:o=Number.MIN_SAFE_INTEGER,max:a=Number.MAX_SAFE_INTEGER,step:i=1,isReadOnly:s,isDisabled:l,isRequired:u,isInvalid:c,pattern:d="[0-9]*(.[0-9]+)?",inputMode:f="decimal",allowMouseWheel:m,id:v,onChange:h,precision:b,name:y,"aria-describedby":g,"aria-label":w,"aria-labelledby":x,onFocus:k,onBlur:_,onInvalid:E,getAriaValueText:T,isValidCharacter:O,format:A,parse:q,...$}=e,z=Ue(k),Z=Ue(_),te=Ue(E),V=Ue(O!=null?O:TY),L=Ue(T),N=Mk(e),{update:B,increment:X,decrement:ee}=N,[Q,U]=p.exports.useState(!1),H=!(s||l),ie=p.exports.useRef(null),me=p.exports.useRef(null),j=p.exports.useRef(null),ae=p.exports.useRef(null),ge=p.exports.useCallback(G=>G.split("").filter(V).join(""),[V]),xe=p.exports.useCallback(G=>{var Se;return(Se=q==null?void 0:q(G))!=null?Se:G},[q]),le=p.exports.useCallback(G=>{var Se;return((Se=A==null?void 0:A(G))!=null?Se:G).toString()},[A]);tr(()=>{(N.valueAsNumber>a||N.valueAsNumber<o)&&(te==null||te("rangeOverflow",le(N.value),N.valueAsNumber))},[N.valueAsNumber,N.value,le,te]),An(()=>{if(!ie.current)return;if(ie.current.value!=N.value){const Se=xe(ie.current.value);N.setValue(ge(Se))}},[xe,ge]);const ve=p.exports.useCallback((G=i)=>{H&&X(G)},[X,H,i]),Ee=p.exports.useCallback((G=i)=>{H&&ee(G)},[ee,H,i]),K=EY(ve,Ee);u2(j,"disabled",K.stop,K.isSpinning),u2(ae,"disabled",K.stop,K.isSpinning);const de=p.exports.useCallback(G=>{if(G.nativeEvent.isComposing)return;const et=xe(G.currentTarget.value);B(ge(et)),me.current={start:G.currentTarget.selectionStart,end:G.currentTarget.selectionEnd}},[B,ge,xe]),Te=p.exports.useCallback(G=>{var et,st;var Se;z==null||z(G),me.current&&(G.target.selectionStart=(et=me.current.start)!=null?et:(Se=G.currentTarget.value)==null?void 0:Se.length,G.currentTarget.selectionEnd=(st=me.current.end)!=null?st:G.currentTarget.selectionStart)},[z]),we=p.exports.useCallback(G=>{if(G.nativeEvent.isComposing)return;FY(G,V)||G.preventDefault();const Se=Fe(G)*i,et=G.key,J={ArrowUp:()=>ve(Se),ArrowDown:()=>Ee(Se),Home:()=>B(o),End:()=>B(a)}[et];J&&(G.preventDefault(),J(G))},[V,i,ve,Ee,B,o,a]),Fe=G=>{let Se=1;return(G.metaKey||G.ctrlKey)&&(Se=.1),G.shiftKey&&(Se=10),Se},Pt=p.exports.useMemo(()=>{const G=L==null?void 0:L(N.value);if(G!=null)return G;const Se=N.value.toString();return Se||void 0},[N.value,L]),Ye=p.exports.useCallback(()=>{let G=N.value;if(N.value==="")return;/^[eE]/.test(N.value.toString())?N.setValue(""):(N.valueAsNumber<o&&(G=o),N.valueAsNumber>a&&(G=a),N.cast(G))},[N,a,o]),gt=p.exports.useCallback(()=>{U(!1),n&&Ye()},[n,U,Ye]),vt=p.exports.useCallback(()=>{t&&requestAnimationFrame(()=>{var G;(G=ie.current)==null||G.focus()})},[t]),ct=p.exports.useCallback(G=>{G.preventDefault(),K.up(),vt()},[vt,K]),Xt=p.exports.useCallback(G=>{G.preventDefault(),K.down(),vt()},[vt,K]);ia(()=>ie.current,"wheel",G=>{var Y;var Se;const st=((Y=(Se=ie.current)==null?void 0:Se.ownerDocument)!=null?Y:document).activeElement===ie.current;if(!m||!st)return;G.preventDefault();const J=Fe(G)*i,fe=Math.sign(G.deltaY);fe===-1?ve(J):fe===1&&Ee(J)},{passive:!1});const zn=p.exports.useCallback((G={},Se=null)=>{const et=l||r&&N.isAtMax;return{...G,ref:ke(Se,j),role:"button",tabIndex:-1,onPointerDown:ur(G.onPointerDown,st=>{st.button!==0||et||ct(st)}),onPointerLeave:ur(G.onPointerLeave,K.stop),onPointerUp:ur(G.onPointerUp,K.stop),disabled:et,"aria-disabled":Mm(et)}},[N.isAtMax,r,ct,K.stop,l]),ar=p.exports.useCallback((G={},Se=null)=>{const et=l||r&&N.isAtMin;return{...G,ref:ke(Se,ae),role:"button",tabIndex:-1,onPointerDown:ur(G.onPointerDown,st=>{st.button!==0||et||Xt(st)}),onPointerLeave:ur(G.onPointerLeave,K.stop),onPointerUp:ur(G.onPointerUp,K.stop),disabled:et,"aria-disabled":Mm(et)}},[N.isAtMin,r,Xt,K.stop,l]),ir=p.exports.useCallback((G={},Se=null)=>{var et,st,J,fe;return{name:y,inputMode:f,type:"text",pattern:d,"aria-labelledby":x,"aria-label":w,"aria-describedby":g,id:v,disabled:l,...G,readOnly:(et=G.readOnly)!=null?et:s,"aria-readonly":(st=G.readOnly)!=null?st:s,"aria-required":(J=G.required)!=null?J:u,required:(fe=G.required)!=null?fe:u,ref:ke(ie,Se),value:le(N.value),role:"spinbutton","aria-valuemin":o,"aria-valuemax":a,"aria-valuenow":Number.isNaN(N.valueAsNumber)?void 0:N.valueAsNumber,"aria-invalid":Mm(c!=null?c:N.isOutOfRange),"aria-valuetext":Pt,autoComplete:"off",autoCorrect:"off",onChange:ur(G.onChange,de),onKeyDown:ur(G.onKeyDown,we),onFocus:ur(G.onFocus,Te,()=>U(!0)),onBlur:ur(G.onBlur,Z,gt)}},[y,f,d,x,w,le,g,v,l,u,s,c,N.value,N.valueAsNumber,N.isOutOfRange,o,a,Pt,de,we,Te,Z,gt]);return{value:le(N.value),valueAsNumber:N.valueAsNumber,isFocused:Q,isDisabled:l,isReadOnly:s,getIncrementButtonProps:zn,getDecrementButtonProps:ar,getInputProps:ir,htmlProps:$}}var[AY,iu]=be({name:"NumberInputStylesContext",errorMessage:`useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `}),[IY,Vy]=be({name:"NumberInputContext",errorMessage:"useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"}),r_=M(function(t,n){const r=$e("NumberInput",t),o=ye(t),a=Tf(o),{htmlProps:i,...s}=n_(a),l=p.exports.useMemo(()=>s,[s]);return P.createElement(IY,{value:l},P.createElement(AY,{value:r},P.createElement(R.div,{...i,ref:n,className:t_("chakra-numberinput",t.className),__css:{position:"relative",zIndex:0,...r.root}})))});r_.displayName="NumberInput";var o_=M(function(t,n){const r=iu();return P.createElement(R.div,{"aria-hidden":!0,ref:n,...t,__css:{display:"flex",flexDirection:"column",position:"absolute",top:"0",insetEnd:"0px",margin:"1px",height:"calc(100% - 2px)",zIndex:1,...r.stepperGroup}})});o_.displayName="NumberInputStepper";var a_=M(function(t,n){const{getInputProps:r}=Vy(),o=r(t,n),a=iu();return P.createElement(R.input,{...o,className:t_("chakra-numberinput__field",t.className),__css:{width:"100%",...a.field}})});a_.displayName="NumberInputField";var $y=R("div",{baseStyle:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,transitionProperty:"common",transitionDuration:"normal",userSelect:"none",cursor:"pointer",lineHeight:"normal"}}),i_=M(function(t,n){var i;const r=iu(),{getDecrementButtonProps:o}=Vy(),a=o(t,n);return S($y,{...a,__css:r.stepper,children:(i=t.children)!=null?i:S(CY,{})})});i_.displayName="NumberDecrementStepper";var s_=M(function(t,n){var i;const{getIncrementButtonProps:r}=Vy(),o=r(t,n),a=iu();return S($y,{...o,__css:a.stepper,children:(i=t.children)!=null?i:S(kY,{})})});s_.displayName="NumberIncrementStepper";var RY=(...e)=>e.filter(Boolean).join(" "),NY=e=>e?!0:void 0;function tc(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var[l_,MY,u_,c_]=lf(),[d_,f_]=be({name:"PinInputContext",errorMessage:"usePinInputContext: `context` is undefined. Seems you forgot to all pin input fields within `<PinInput />`"}),d2=e=>e==null?void 0:e.split("");function f2(e,t){return(t==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(e)}function p_(e={}){const{autoFocus:t,value:n,defaultValue:r,onChange:o,onComplete:a,placeholder:i="\u25CB",manageFocus:s=!0,otp:l=!1,id:u,isDisabled:c,isInvalid:d,type:f="number",mask:m}=e,v=p.exports.useId(),h=u!=null?u:`pin-input-${v}`,b=u_(),[y,g]=p.exports.useState(!0),[w,x]=p.exports.useState(-1),[k,_]=Fo({defaultValue:d2(r)||[],value:d2(n),onChange:$=>o==null?void 0:o($.join(""))});p.exports.useEffect(()=>{if(t){const $=b.first();$&&requestAnimationFrame(()=>{$.node.focus()})}},[b]);const E=p.exports.useCallback($=>{if(!y||!s)return;const z=b.next($,!1);z&&requestAnimationFrame(()=>{z.node.focus()})},[b,y,s]),T=p.exports.useCallback(($,z,Z=!0)=>{const te=[...k];te[z]=$,_(te),$!==""&&te.length===b.count()&&te.every(L=>L!=null&&L!=="")?a==null||a(te.join("")):Z&&E(z)},[k,_,E,a,b]),O=p.exports.useCallback(()=>{var $;const z=Array(b.count()).fill("");_(z);const Z=b.first();($=Z==null?void 0:Z.node)==null||$.focus()},[b,_]),A=p.exports.useCallback(($,z)=>{let Z=z;return($==null?void 0:$.length)>0&&($[0]===z.charAt(0)?Z=z.charAt(1):$[0]===z.charAt(1)&&(Z=z.charAt(0))),Z},[]);return{getInputProps:p.exports.useCallback($=>{const{index:z,...Z}=$,te=ee=>{const Q=ee.target.value,U=k[z],H=A(U,Q);if(H===""){T("",z);return}if(Q.length>2){if(f2(Q,f)){const ie=Q.split("").filter((me,j)=>j<b.count());_(ie),ie.length===b.count()&&(a==null||a(ie.join("")))}}else f2(H,f)&&T(H,z),g(!0)},V=ee=>{var Q;if(ee.key==="Backspace"&&s)if(ee.target.value===""){const U=b.prev(z,!1);U&&(T("",z-1,!1),(Q=U.node)==null||Q.focus(),g(!0))}else g(!1)},L=()=>{x(z)},N=()=>{x(-1)},B=w===z;return{"aria-label":"Please enter your pin code",inputMode:f==="number"?"numeric":"text",type:m?"password":f==="number"?"tel":"text",...Z,id:`${h}-${z}`,disabled:c,"aria-invalid":NY(d),onChange:tc(Z.onChange,te),onKeyDown:tc(Z.onKeyDown,V),onFocus:tc(Z.onFocus,L),onBlur:tc(Z.onBlur,N),value:k[z]||"",autoComplete:l?"one-time-code":"off",placeholder:B?"":i}},[b,w,A,h,c,m,d,s,a,l,i,T,_,f,k]),id:h,descendants:b,values:k,setValue:T,setValues:_,clear:O}}function m_(e={},t=null){const{getInputProps:n}=f_(),{index:r,register:o}=c_();return n({...e,ref:ke(o,t),index:r})}function h_(e){const t=ht("PinInput",e),{children:n,...r}=ye(e),{descendants:o,...a}=p_(r),i=Yr(n).map(s=>p.exports.cloneElement(s,{__css:t}));return S(l_,{value:o,children:S(d_,{value:a,children:i})})}h_.displayName="PinInput";var g_=M(function(t,n){const r=m_(t,n);return P.createElement(R.input,{...r,className:RY("chakra-pin-input",t.className)})});g_.displayName="PinInputField";var Ui=(...e)=>e.filter(Boolean).join(" ");function OY(e,...t){return DY(e)?e(...t):e}var DY=e=>typeof e=="function";function cr(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}function qY(...e){return function(n){e.forEach(r=>{r==null||r(n)})}}var[LY,Zr]=be({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[BY,Ea]=be({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `}),qa={click:"click",hover:"hover"};function v_(e={}){const{closeOnBlur:t=!0,closeOnEsc:n=!0,initialFocusRef:r,id:o,returnFocusOnClose:a=!0,autoFocus:i=!0,arrowSize:s,arrowShadowColor:l,trigger:u=qa.click,openDelay:c=200,closeDelay:d=200,isLazy:f,lazyBehavior:m="unmount",computePositionOnMount:v,...h}=e,{isOpen:b,onClose:y,onOpen:g,onToggle:w}=Iv(e),x=p.exports.useRef(null),k=p.exports.useRef(null),_=p.exports.useRef(null),E=p.exports.useRef(!1),T=p.exports.useRef(!1);b&&(T.current=!0);const[O,A]=p.exports.useState(!1),[q,$]=p.exports.useState(!1),z=p.exports.useId(),Z=o!=null?o:z,[te,V,L,N]=["popover-trigger","popover-content","popover-header","popover-body"].map(de=>`${de}-${Z}`),{referenceRef:B,getArrowProps:X,getPopperProps:ee,getArrowInnerProps:Q,forceUpdate:U}=zf({...h,enabled:b||!!v}),H=j3({isOpen:b,ref:_});zk({enabled:b,ref:k}),R3(_,{focusRef:k,visible:b,shouldFocus:a&&u===qa.click}),Aj(_,{focusRef:r,visible:b,shouldFocus:i&&u===qa.click});const ie=Rv({wasSelected:T.current,enabled:f,mode:m,isSelected:H.present}),me=p.exports.useCallback((de={},Te=null)=>{const we={...de,style:{...de.style,transformOrigin:dt.transformOrigin.varRef,[dt.arrowSize.var]:s?`${s}px`:void 0,[dt.arrowShadowColor.var]:l},ref:ke(_,Te),children:ie?de.children:null,id:V,tabIndex:-1,role:"dialog",onKeyDown:cr(de.onKeyDown,Fe=>{n&&Fe.key==="Escape"&&y()}),onBlur:cr(de.onBlur,Fe=>{const Pt=p2(Fe),Ye=Om(_.current,Pt),gt=Om(k.current,Pt);b&&t&&(!Ye&&!gt)&&y()}),"aria-labelledby":O?L:void 0,"aria-describedby":q?N:void 0};return u===qa.hover&&(we.role="tooltip",we.onMouseEnter=cr(de.onMouseEnter,()=>{E.current=!0}),we.onMouseLeave=cr(de.onMouseLeave,Fe=>{Fe.nativeEvent.relatedTarget!==null&&(E.current=!1,setTimeout(()=>y(),d))})),we},[ie,V,O,L,q,N,u,n,y,b,t,d,l,s]),j=p.exports.useCallback((de={},Te=null)=>ee({...de,style:{visibility:b?"visible":"hidden",...de.style}},Te),[b,ee]),ae=p.exports.useCallback((de,Te=null)=>({...de,ref:ke(Te,x,B)}),[x,B]),ge=p.exports.useRef(),xe=p.exports.useRef(),le=p.exports.useCallback(de=>{x.current==null&&B(de)},[B]),ve=p.exports.useCallback((de={},Te=null)=>{const we={...de,ref:ke(k,Te,le),id:te,"aria-haspopup":"dialog","aria-expanded":b,"aria-controls":V};return u===qa.click&&(we.onClick=cr(de.onClick,w)),u===qa.hover&&(we.onFocus=cr(de.onFocus,()=>{ge.current===void 0&&g()}),we.onBlur=cr(de.onBlur,Fe=>{const Pt=p2(Fe),Ye=!Om(_.current,Pt);b&&t&&Ye&&y()}),we.onKeyDown=cr(de.onKeyDown,Fe=>{Fe.key==="Escape"&&y()}),we.onMouseEnter=cr(de.onMouseEnter,()=>{E.current=!0,ge.current=window.setTimeout(()=>g(),c)}),we.onMouseLeave=cr(de.onMouseLeave,()=>{E.current=!1,ge.current&&(clearTimeout(ge.current),ge.current=void 0),xe.current=window.setTimeout(()=>{E.current===!1&&y()},d)})),we},[te,b,V,u,le,w,g,t,y,c,d]);p.exports.useEffect(()=>()=>{ge.current&&clearTimeout(ge.current),xe.current&&clearTimeout(xe.current)},[]);const Ee=p.exports.useCallback((de={},Te=null)=>({...de,id:L,ref:ke(Te,we=>{A(!!we)})}),[L]),K=p.exports.useCallback((de={},Te=null)=>({...de,id:N,ref:ke(Te,we=>{$(!!we)})}),[N]);return{forceUpdate:U,isOpen:b,onAnimationComplete:H.onComplete,onClose:y,getAnchorProps:ae,getArrowProps:X,getArrowInnerProps:Q,getPopoverPositionerProps:j,getPopoverProps:me,getTriggerProps:ve,getHeaderProps:Ee,getBodyProps:K}}function Om(e,t){return e===t||(e==null?void 0:e.contains(t))}function p2(e){var n;const t=e.currentTarget.ownerDocument.activeElement;return(n=e.relatedTarget)!=null?n:t}function y_(e){const t=$e("Popover",e),{children:n,...r}=ye(e),o=yn(),a=v_({...r,direction:o.direction});return S(LY,{value:a,children:S(BY,{value:t,children:OY(n,{isOpen:a.isOpen,onClose:a.onClose,forceUpdate:a.forceUpdate})})})}y_.displayName="Popover";function b_(e){const t=p.exports.Children.only(e.children),{getAnchorProps:n}=Zr();return p.exports.cloneElement(t,n(t.props,t.ref))}b_.displayName="PopoverAnchor";function w_(e){var l;const{bg:t,bgColor:n,backgroundColor:r}=e,{getArrowProps:o,getArrowInnerProps:a}=Zr(),i=Ea(),s=(l=t!=null?t:n)!=null?l:r;return P.createElement(R.div,{...o(),className:"chakra-popover__arrow-positioner"},P.createElement(R.div,{className:Ui("chakra-popover__arrow",e.className),...a(e),__css:{...i.arrow,"--popper-arrow-bg":s?`colors.${s}, ${s}`:void 0}}))}w_.displayName="PopoverArrow";var x_=M(function(t,n){const{getBodyProps:r}=Zr(),o=Ea();return P.createElement(R.div,{...r(t,n),className:Ui("chakra-popover__body",t.className),__css:o.body})});x_.displayName="PopoverBody";var S_=M(function(t,n){const{onClose:r}=Zr(),o=Ea();return S(Gl,{size:"sm",onClick:r,className:Ui("chakra-popover__close-btn",t.className),__css:o.closeButton,ref:n,...t})});S_.displayName="PopoverCloseButton";function zY(e){if(!!e)return{enter:{...e.enter,visibility:"visible"},exit:{...e.exit,transitionEnd:{visibility:"hidden"}}}}var VY={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},$Y=R(or.section),C_=M(function(t,n){const{variants:r=VY,...o}=t,{isOpen:a}=Zr();return P.createElement($Y,{ref:n,variants:zY(r),initial:!1,animate:a?"enter":"exit",...o})});C_.displayName="PopoverTransition";var k_=M(function(t,n){const{rootProps:r,motionProps:o,...a}=t,{getPopoverProps:i,getPopoverPositionerProps:s,onAnimationComplete:l}=Zr(),u=Ea(),c={position:"relative",display:"flex",flexDirection:"column",...u.content};return P.createElement(R.div,{...s(r),__css:u.popper,className:"chakra-popover__popper"},S(C_,{...o,...i(a,n),onAnimationComplete:qY(l,a.onAnimationComplete),className:Ui("chakra-popover__content",t.className),__css:c}))});k_.displayName="PopoverContent";function __(e){const t=Ea();return P.createElement(R.footer,{...e,className:Ui("chakra-popover__footer",e.className),__css:t.footer})}__.displayName="PopoverFooter";var E_=M(function(t,n){const{getHeaderProps:r}=Zr(),o=Ea();return P.createElement(R.header,{...r(t,n),className:Ui("chakra-popover__header",t.className),__css:o.header})});E_.displayName="PopoverHeader";function P_(e){const t=p.exports.Children.only(e.children),{getTriggerProps:n}=Zr();return p.exports.cloneElement(t,n(t.props,t.ref))}P_.displayName="PopoverTrigger";function jY(e,t,n){return(e-t)*100/(n-t)}var WY=rr({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),HY=rr({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),UY=rr({"0%":{left:"-40%"},"100%":{left:"100%"}}),GY=rr({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function T_(e){const{value:t=0,min:n,max:r,valueText:o,getValueText:a,isIndeterminate:i,role:s="progressbar"}=e,l=jY(t,n,r);return{bind:{"data-indeterminate":i?"":void 0,"aria-valuemax":r,"aria-valuemin":n,"aria-valuenow":i?void 0:t,"aria-valuetext":(()=>{if(t!=null)return typeof a=="function"?a(t,l):o})(),role:s},percent:l,value:t}}var F_=e=>{const{size:t,isIndeterminate:n,...r}=e;return P.createElement(R.svg,{viewBox:"0 0 100 100",__css:{width:t,height:t,animation:n?`${HY} 2s linear infinite`:void 0},...r})};F_.displayName="Shape";var Cg=e=>P.createElement(R.circle,{cx:50,cy:50,r:42,fill:"transparent",...e});Cg.displayName="Circle";var A_=M((e,t)=>{var x;const{size:n="48px",max:r=100,min:o=0,valueText:a,getValueText:i,value:s,capIsRound:l,children:u,thickness:c="10px",color:d="#0078d4",trackColor:f="#edebe9",isIndeterminate:m,...v}=e,h=T_({min:o,max:r,value:s,valueText:a,getValueText:i,isIndeterminate:m}),b=m?void 0:((x=h.percent)!=null?x:0)*2.64,y=b==null?void 0:`${b} ${264-b}`,g=m?{css:{animation:`${WY} 1.5s linear infinite`}}:{strokeDashoffset:66,strokeDasharray:y,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},w={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:n};return P.createElement(R.div,{ref:t,className:"chakra-progress",...h.bind,...v,__css:w},se(F_,{size:n,isIndeterminate:m,children:[S(Cg,{stroke:f,strokeWidth:c,className:"chakra-progress__track"}),S(Cg,{stroke:d,strokeWidth:c,className:"chakra-progress__indicator",strokeLinecap:l?"round":void 0,opacity:h.value===0&&!m?0:void 0,...g})]}),u)});A_.displayName="CircularProgress";var[KY,jy]=be({name:"ProgressStylesContext",errorMessage:`useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),YY=M((e,t)=>{const{min:n,max:r,value:o,isIndeterminate:a,role:i,...s}=e,l=T_({value:o,min:n,max:r,isIndeterminate:a,role:i}),c={height:"100%",...jy().filledTrack};return P.createElement(R.div,{ref:t,style:{width:`${l.percent}%`,...s.style},...l.bind,...s,__css:c})}),I_=M((e,t)=>{var n;const{value:r,min:o=0,max:a=100,hasStripe:i,isAnimated:s,children:l,borderRadius:u,isIndeterminate:c,"aria-label":d,"aria-labelledby":f,title:m,role:v,...h}=ye(e),b=$e("Progress",e),y=u!=null?u:(n=b.track)==null?void 0:n.borderRadius,g={animation:`${GY} 1s linear infinite`},k={...!c&&i&&s&&g,...c&&{position:"absolute",willChange:"left",minWidth:"50%",animation:`${UY} 1s ease infinite normal none running`}},_={overflow:"hidden",position:"relative",...b.track};return P.createElement(R.div,{ref:t,borderRadius:y,__css:_,...h},se(KY,{value:b,children:[S(YY,{"aria-label":d,"aria-labelledby":f,min:o,max:a,value:r,isIndeterminate:c,css:k,borderRadius:y,title:m,role:v}),l]}))});I_.displayName="Progress";var R_=e=>{const n={top:"50%",left:"50%",width:"100%",textAlign:"center",position:"absolute",transform:"translate(-50%, -50%)",...jy().label};return P.createElement(R.div,{...e,__css:n})};R_.displayName="ProgressLabel";var N_=R("div",{baseStyle:{fontSize:"0.24em",top:"50%",left:"50%",width:"100%",textAlign:"center",position:"absolute",transform:"translate(-50%, -50%)"}});N_.displayName="CircularProgressLabel";var XY=(...e)=>e.filter(Boolean).join(" ");function m2(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}var Vt=e=>e?"":void 0,Dm=e=>e?!0:void 0;function Un(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}function ZY(...e){return function(n){e.forEach(r=>{r==null||r(n)})}}function QY(e,t){const n={},r={};for(const[o,a]of Object.entries(e))t.includes(o)?n[o]=a:r[o]=a;return[n,r]}function JY(e){return e&&m2(e)&&m2(e.target)}function M_(e={}){const{onChange:t,value:n,defaultValue:r,name:o,isDisabled:a,isFocusable:i,isNative:s,...l}=e,[u,c]=p.exports.useState(r||""),d=typeof n<"u",f=d?n:u,m=p.exports.useRef(null),v=p.exports.useCallback(()=>{const k=m.current;if(!k)return;let _="input:not(:disabled):checked";const E=k.querySelector(_);if(E){E.focus();return}_="input:not(:disabled)";const T=k.querySelector(_);T==null||T.focus()},[]),b=`radio-${p.exports.useId()}`,y=o||b,g=p.exports.useCallback(k=>{const _=JY(k)?k.target.value:k;d||c(_),t==null||t(String(_))},[t,d]),w=p.exports.useCallback((k={},_=null)=>({...k,ref:ke(_,m),role:"radiogroup"}),[]),x=p.exports.useCallback((k={},_=null)=>({...k,ref:_,name:y,[s?"checked":"isChecked"]:f!=null?k.value===f:void 0,onChange(T){g(T)},"data-radiogroup":!0}),[s,y,g,f]);return{getRootProps:w,getRadioProps:x,name:y,ref:m,focus:v,setValue:c,value:f,onChange:g,isDisabled:a,isFocusable:i,htmlProps:l}}var[eX,Wy]=be({name:"RadioGroupContext",strict:!1}),O_=M((e,t)=>{const{colorScheme:n,size:r,variant:o,children:a,className:i,isDisabled:s,isFocusable:l,...u}=e,{value:c,onChange:d,getRootProps:f,name:m,htmlProps:v}=M_(u),h=p.exports.useMemo(()=>({name:m,size:r,onChange:d,colorScheme:n,value:c,variant:o,isDisabled:s,isFocusable:l}),[m,r,d,n,c,o,s,l]);return P.createElement(eX,{value:h},P.createElement(R.div,{...f(v,t),className:XY("chakra-radio-group",i)},a))});O_.displayName="RadioGroup";var tX={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function D_(e={}){const{defaultChecked:t,isChecked:n,isFocusable:r,isDisabled:o,isReadOnly:a,isRequired:i,onChange:s,isInvalid:l,name:u,value:c,id:d,"data-radiogroup":f,"aria-describedby":m,...v}=e,h=`radio-${p.exports.useId()}`,b=Io(),g=!!Wy()||!!f;let x=!!b&&!g?b.id:h;x=d!=null?d:x;const k=o!=null?o:b==null?void 0:b.isDisabled,_=a!=null?a:b==null?void 0:b.isReadOnly,E=i!=null?i:b==null?void 0:b.isRequired,T=l!=null?l:b==null?void 0:b.isInvalid,[O,A]=p.exports.useState(!1),[q,$]=p.exports.useState(!1),[z,Z]=p.exports.useState(!1),[te,V]=p.exports.useState(!1),[L,N]=p.exports.useState(Boolean(t)),B=typeof n<"u",X=B?n:L;p.exports.useEffect(()=>Pk(A),[]);const ee=p.exports.useCallback(le=>{if(_||k){le.preventDefault();return}B||N(le.target.checked),s==null||s(le)},[B,k,_,s]),Q=p.exports.useCallback(le=>{le.key===" "&&V(!0)},[V]),U=p.exports.useCallback(le=>{le.key===" "&&V(!1)},[V]),H=p.exports.useCallback((le={},ve=null)=>({...le,ref:ve,"data-active":Vt(te),"data-hover":Vt(z),"data-disabled":Vt(k),"data-invalid":Vt(T),"data-checked":Vt(X),"data-focus":Vt(q),"data-focus-visible":Vt(q&&O),"data-readonly":Vt(_),"aria-hidden":!0,onMouseDown:Un(le.onMouseDown,()=>V(!0)),onMouseUp:Un(le.onMouseUp,()=>V(!1)),onMouseEnter:Un(le.onMouseEnter,()=>Z(!0)),onMouseLeave:Un(le.onMouseLeave,()=>Z(!1))}),[te,z,k,T,X,q,_,O]),{onFocus:ie,onBlur:me}=b!=null?b:{},j=p.exports.useCallback((le={},ve=null)=>{const Ee=k&&!r;return{...le,id:x,ref:ve,type:"radio",name:u,value:c,onChange:Un(le.onChange,ee),onBlur:Un(me,le.onBlur,()=>$(!1)),onFocus:Un(ie,le.onFocus,()=>$(!0)),onKeyDown:Un(le.onKeyDown,Q),onKeyUp:Un(le.onKeyUp,U),checked:X,disabled:Ee,readOnly:_,required:E,"aria-invalid":Dm(T),"aria-disabled":Dm(Ee),"aria-required":Dm(E),"data-readonly":Vt(_),"aria-describedby":m,style:tX}},[k,r,x,u,c,ee,me,ie,Q,U,X,_,E,T,m]);return{state:{isInvalid:T,isFocused:q,isChecked:X,isActive:te,isHovered:z,isDisabled:k,isReadOnly:_,isRequired:E},getCheckboxProps:H,getInputProps:j,getLabelProps:(le={},ve=null)=>({...le,ref:ve,onMouseDown:Un(le.onMouseDown,h2),onTouchStart:Un(le.onTouchStart,h2),"data-disabled":Vt(k),"data-checked":Vt(X),"data-invalid":Vt(T)}),getRootProps:(le,ve=null)=>({...le,ref:ve,"data-disabled":Vt(k),"data-checked":Vt(X),"data-invalid":Vt(T)}),htmlProps:v}}function h2(e){e.preventDefault(),e.stopPropagation()}var q_=M((e,t)=>{var Z;const n=Wy(),{onChange:r,value:o}=e,a=$e("Radio",{...n,...e}),i=ye(e),{spacing:s="0.5rem",children:l,isDisabled:u=n==null?void 0:n.isDisabled,isFocusable:c=n==null?void 0:n.isFocusable,inputProps:d,...f}=i;let m=e.isChecked;(n==null?void 0:n.value)!=null&&o!=null&&(m=n.value===o);let v=r;(n==null?void 0:n.onChange)&&o!=null&&(v=ZY(n.onChange,r));const h=(Z=e==null?void 0:e.name)!=null?Z:n==null?void 0:n.name,{getInputProps:b,getCheckboxProps:y,getLabelProps:g,getRootProps:w,htmlProps:x}=D_({...f,isChecked:m,isFocusable:c,isDisabled:u,onChange:v,name:h}),[k,_]=QY(x,Bg),E=y(_),T=b(d,t),O=g(),A=Object.assign({},k,w()),q={display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative",...a.container},$={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...a.control},z={userSelect:"none",marginStart:s,...a.label};return P.createElement(R.label,{className:"chakra-radio",...A,__css:q},S("input",{className:"chakra-radio__input",...T}),P.createElement(R.span,{className:"chakra-radio__control",...E,__css:$}),l&&P.createElement(R.span,{className:"chakra-radio__label",...O,__css:z},l))});q_.displayName="Radio";var nX=(...e)=>e.filter(Boolean).join(" "),rX=e=>e?"":void 0;function oX(e,t){const n={},r={};for(const[o,a]of Object.entries(e))t.includes(o)?n[o]=a:r[o]=a;return[n,r]}var Hy=M(function(t,n){const{children:r,placeholder:o,className:a,...i}=t;return P.createElement(R.select,{...i,ref:n,className:nX("chakra-select",a)},o&&S("option",{value:"",children:o}),r)});Hy.displayName="SelectField";var L_=M((e,t)=>{var n;const r=$e("Select",e),{rootProps:o,placeholder:a,icon:i,color:s,height:l,h:u,minH:c,minHeight:d,iconColor:f,iconSize:m,...v}=ye(e),[h,b]=oX(v,Bg),y=Pf(b),g={width:"100%",height:"fit-content",position:"relative",color:s},w={paddingEnd:"2rem",...r.field,_focus:{zIndex:"unset",...(n=r.field)==null?void 0:n._focus}};return P.createElement(R.div,{className:"chakra-select__wrapper",__css:g,...h,...o},S(Hy,{ref:t,height:u!=null?u:l,minH:c!=null?c:d,placeholder:a,...y,__css:w,children:e.children}),S(z_,{"data-disabled":rX(y.disabled),...(f||s)&&{color:f||s},__css:r.icon,...m&&{fontSize:m},children:i}))});L_.displayName="Select";var B_=e=>S("svg",{viewBox:"0 0 24 24",...e,children:S("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),aX=R("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),z_=e=>{const{children:t=S(B_,{}),...n}=e,r=p.exports.cloneElement(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return S(aX,{...n,className:"chakra-select__icon-wrapper",children:p.exports.isValidElement(t)?r:null})};z_.displayName="SelectIcon";function iX(e){const t=p.exports.useRef();return p.exports.useEffect(()=>{t.current=e},[e]),t.current}var V_=(...e)=>e.filter(Boolean).join(" ");function sX(){const e=p.exports.useRef(!0);return p.exports.useEffect(()=>{e.current=!1},[]),e.current}var lX=R("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),kg=qe("skeleton-start-color"),_g=qe("skeleton-end-color"),uX=rr({from:{opacity:0},to:{opacity:1}}),cX=rr({from:{borderColor:kg.reference,background:kg.reference},to:{borderColor:_g.reference,background:_g.reference}}),su=M((e,t)=>{const n=ht("Skeleton",e),r=sX(),{startColor:o="",endColor:a="",isLoaded:i,fadeDuration:s,speed:l,className:u,...c}=ye(e),[d,f]=SC("colors",[o,a]),m=iX(i),v=V_("chakra-skeleton",u),h={...d&&{[kg.variable]:d},...f&&{[_g.variable]:f}};if(i){const b=r||m?"none":`${uX} ${s}s`;return P.createElement(R.div,{ref:t,className:v,__css:{animation:b},...c})}return S(lX,{ref:t,className:v,...c,__css:{...n,...h,_dark:{...h},animation:`${l}s linear infinite alternate ${cX}`}})});su.defaultProps={fadeDuration:.4,speed:.8};su.displayName="Skeleton";function dX(e){return Array(e).fill(1).map((t,n)=>n+1)}var g2=3,$_=e=>{const{noOfLines:t=g2,spacing:n="0.5rem",skeletonHeight:r="0.5rem",className:o,startColor:a,endColor:i,isLoaded:s,fadeDuration:l,speed:u,children:c,...d}=e,f=w3(typeof t=="number"?[t]:t)||g2,m=dX(f),v=b=>f>1&&b===m.length?"80%":"100%",h=V_("chakra-skeleton__group",o);return P.createElement(R.div,{className:h,...d},m.map((b,y)=>{if(s&&y>0)return null;const g=s?null:{mb:b===m.length?"0":n,width:v(b),height:r};return S(su,{startColor:a,endColor:i,isLoaded:s,fadeDuration:l,speed:u,...g,children:y===0?c:void 0},m.length.toString()+b)}))};$_.displayName="SkeletonText";var j_=({size:e="2rem",...t})=>S(su,{borderRadius:"full",boxSize:e,...t});j_.displayName="SkeletonCircle";function fX(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function pX(e){const t=hX(e);return typeof t.PointerEvent<"u"&&e instanceof t.PointerEvent?e.pointerType==="mouse":e instanceof t.MouseEvent}function W_(e){return!!e.touches}function mX(e){return W_(e)&&e.touches.length>1}function hX(e){var t;return(t=e.view)!=null?t:window}function gX(e,t="page"){const n=e.touches[0]||e.changedTouches[0];return{x:n[`${t}X`],y:n[`${t}Y`]}}function vX(e,t="page"){return{x:e[`${t}X`],y:e[`${t}Y`]}}function H_(e,t="page"){return W_(e)?gX(e,t):vX(e,t)}function yX(e){return t=>{const n=pX(t);(!n||n&&t.button===0)&&e(t)}}function bX(e,t=!1){function n(o){e(o,{point:H_(o)})}return t?yX(n):n}function Rc(e,t,n,r){return fX(e,t,bX(n,t==="pointerdown"),r)}function U_(e){const t=p.exports.useRef(null);return t.current=e,t}var wX=class{constructor(e,t,n){he(this,"history",[]);he(this,"startEvent",null);he(this,"lastEvent",null);he(this,"lastEventInfo",null);he(this,"handlers",{});he(this,"removeListeners",()=>{});he(this,"threshold",3);he(this,"win");he(this,"updatePoint",()=>{if(!(this.lastEvent&&this.lastEventInfo))return;const e=qm(this.lastEventInfo,this.history),t=this.startEvent!==null,n=kX(e.offset,{x:0,y:0})>=this.threshold;if(!t&&!n)return;const{timestamp:r}=Lc();this.history.push({...e.point,timestamp:r});const{onStart:o,onMove:a}=this.handlers;t||(o==null||o(this.lastEvent,e),this.startEvent=this.lastEvent),a==null||a(this.lastEvent,e)});he(this,"onPointerMove",(e,t)=>{this.lastEvent=e,this.lastEventInfo=t,BS.update(this.updatePoint,!0)});he(this,"onPointerUp",(e,t)=>{const n=qm(t,this.history),{onEnd:r,onSessionEnd:o}=this.handlers;o==null||o(e,n),this.end(),!(!r||!this.startEvent)&&(r==null||r(e,n))});var i;if(this.win=(i=e.view)!=null?i:window,mX(e))return;this.handlers=t,n&&(this.threshold=n),e.stopPropagation(),e.preventDefault();const r={point:H_(e)},{timestamp:o}=Lc();this.history=[{...r.point,timestamp:o}];const{onSessionStart:a}=t;a==null||a(e,qm(r,this.history)),this.removeListeners=CX(Rc(this.win,"pointermove",this.onPointerMove),Rc(this.win,"pointerup",this.onPointerUp),Rc(this.win,"pointercancel",this.onPointerUp))}updateHandlers(e){this.handlers=e}end(){var e;(e=this.removeListeners)==null||e.call(this),zS.update(this.updatePoint)}};function v2(e,t){return{x:e.x-t.x,y:e.y-t.y}}function qm(e,t){return{point:e.point,delta:v2(e.point,t[t.length-1]),offset:v2(e.point,t[0]),velocity:SX(t,.1)}}var xX=e=>e*1e3;function SX(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=e[e.length-1];for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>xX(t)));)n--;if(!r)return{x:0,y:0};const a=(o.timestamp-r.timestamp)/1e3;if(a===0)return{x:0,y:0};const i={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return i.x===1/0&&(i.x=0),i.y===1/0&&(i.y=0),i}function CX(...e){return t=>e.reduce((n,r)=>r(n),t)}function Lm(e,t){return Math.abs(e-t)}function y2(e){return"x"in e&&"y"in e}function kX(e,t){if(typeof e=="number"&&typeof t=="number")return Lm(e,t);if(y2(e)&&y2(t)){const n=Lm(e.x,t.x),r=Lm(e.y,t.y);return Math.sqrt(n**2+r**2)}return 0}function G_(e,t){const{onPan:n,onPanStart:r,onPanEnd:o,onPanSessionStart:a,onPanSessionEnd:i,threshold:s}=t,l=Boolean(n||r||o||a||i),u=p.exports.useRef(null),c=U_({onSessionStart:a,onSessionEnd:i,onStart:r,onMove:n,onEnd(d,f){u.current=null,o==null||o(d,f)}});p.exports.useEffect(()=>{var d;(d=u.current)==null||d.updateHandlers(c.current)}),p.exports.useEffect(()=>{const d=e.current;if(!d||!l)return;function f(m){u.current=new wX(m,c.current,s)}return Rc(d,"pointerdown",f)},[e,l,c,s]),p.exports.useEffect(()=>()=>{var d;(d=u.current)==null||d.end(),u.current=null},[])}function _X(e,t){var o;if(!e){t(void 0);return}t({width:e.offsetWidth,height:e.offsetHeight});const n=(o=e.ownerDocument.defaultView)!=null?o:window,r=new n.ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const[i]=a;let s,l;if("borderBoxSize"in i){const u=i.borderBoxSize,c=Array.isArray(u)?u[0]:u;s=c.inlineSize,l=c.blockSize}else s=e.offsetWidth,l=e.offsetHeight;t({width:s,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}var EX=Boolean(globalThis==null?void 0:globalThis.document)?p.exports.useLayoutEffect:p.exports.useEffect;function PX(e,t){var a;var n;if(!e||!e.parentElement)return;const r=(a=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?a:window,o=new r.MutationObserver(()=>{t()});return o.observe(e.parentElement,{childList:!0}),()=>{o.disconnect()}}function K_({getNodes:e,observeMutation:t=!0}){const[n,r]=p.exports.useState([]),[o,a]=p.exports.useState(0);return EX(()=>{const i=e(),s=i.map((l,u)=>_X(l,c=>{r(d=>[...d.slice(0,u),c,...d.slice(u+1)])}));if(t){const l=i[0];s.push(PX(l,()=>{a(u=>u+1)}))}return()=>{s.forEach(l=>{l==null||l()})}},[o]),n}function TX(e){return typeof e=="object"&&e!==null&&"current"in e}function FX(e){const[t]=K_({observeMutation:!1,getNodes(){return[TX(e)?e.current:e]}});return t}var AX=Object.getOwnPropertyNames,IX=(e,t)=>function(){return e&&(t=(0,e[AX(e)[0]])(e=0)),t},Lo=IX({"../../../react-shim.js"(){}});Lo();Lo();Lo();var Pn=e=>e?"":void 0,wi=e=>e?!0:void 0,Bo=(...e)=>e.filter(Boolean).join(" ");Lo();function xi(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}Lo();Lo();function RX(e){return{root:`slider-root-${e}`,getThumb:t=>`slider-thumb-${e}-${t}`,getInput:t=>`slider-input-${e}-${t}`,track:`slider-track-${e}`,innerTrack:`slider-filled-track-${e}`,getMarker:t=>`slider-marker-${e}-${t}`,output:`slider-output-${e}`}}function Cs(e){const{orientation:t,vertical:n,horizontal:r}=e;return t==="vertical"?n:r}var Nc={width:0,height:0},nc=e=>e||Nc;function Y_(e){const{orientation:t,thumbPercents:n,thumbRects:r,isReversed:o}=e,a=h=>{var y;const b=(y=r[h])!=null?y:Nc;return{position:"absolute",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",touchAction:"none",...Cs({orientation:t,vertical:{bottom:`calc(${n[h]}% - ${b.height/2}px)`},horizontal:{left:`calc(${n[h]}% - ${b.width/2}px)`}})}},i=t==="vertical"?r.reduce((h,b)=>nc(h).height>nc(b).height?h:b,Nc):r.reduce((h,b)=>nc(h).width>nc(b).width?h:b,Nc),s={position:"relative",touchAction:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)",userSelect:"none",outline:0,...Cs({orientation:t,vertical:i?{paddingLeft:i.width/2,paddingRight:i.width/2}:{},horizontal:i?{paddingTop:i.height/2,paddingBottom:i.height/2}:{}})},l={position:"absolute",...Cs({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",height:"100%"},horizontal:{top:"50%",transform:"translateY(-50%)",width:"100%"}})},u=n.length===1,c=[0,o?100-n[0]:n[0]],d=u?c:n;let f=d[0];!u&&o&&(f=100-f);const m=Math.abs(d[d.length-1]-d[0]),v={...l,...Cs({orientation:t,vertical:o?{height:`${m}%`,top:`${f}%`}:{height:`${m}%`,bottom:`${f}%`},horizontal:o?{width:`${m}%`,right:`${f}%`}:{width:`${m}%`,left:`${f}%`}})};return{trackStyle:l,innerTrackStyle:v,rootStyle:s,getThumbStyle:a}}function X_(e){const{isReversed:t,direction:n,orientation:r}=e;return n==="ltr"||r==="vertical"?t:!t}function Z_(e){const{min:t=0,max:n=100,onChange:r,value:o,defaultValue:a,isReversed:i,direction:s="ltr",orientation:l="horizontal",id:u,isDisabled:c,isReadOnly:d,onChangeStart:f,onChangeEnd:m,step:v=1,getAriaValueText:h,"aria-valuetext":b,"aria-label":y,"aria-labelledby":g,name:w,focusThumbOnChange:x=!0,minStepsBetweenThumbs:k=0,..._}=e,E=Ue(f),T=Ue(m),O=Ue(h),A=X_({isReversed:i,direction:s,orientation:l}),[q,$]=Fo({value:o,defaultValue:a!=null?a:[25,75],onChange:r});if(!Array.isArray(q))throw new TypeError(`[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof q}\``);const[z,Z]=p.exports.useState(!1),[te,V]=p.exports.useState(!1),[L,N]=p.exports.useState(-1),B=!(c||d),X=p.exports.useRef(q),ee=q.map(Y=>di(Y,t,n)),Q=k*v,U=NX(ee,t,n,Q),H=p.exports.useRef({eventSource:null,value:[],valueBounds:[]});H.current.value=ee,H.current.valueBounds=U;const ie=ee.map(Y=>n-Y+t),j=(A?ie:ee).map(Y=>id(Y,t,n)),ae=l==="vertical",ge=p.exports.useRef(null),xe=p.exports.useRef(null),le=K_({getNodes(){const Y=xe.current,ue=Y==null?void 0:Y.querySelectorAll("[role=slider]");return ue?Array.from(ue):[]}}),ve=p.exports.useId(),Ee=u!=null?u:ve,K=RX(Ee),de=p.exports.useCallback(Y=>{var Vn;var ue;if(!ge.current)return;H.current.eventSource="pointer";const oe=ge.current.getBoundingClientRect(),{clientX:Ie,clientY:Xe}=(Vn=(ue=Y.touches)==null?void 0:ue[0])!=null?Vn:Y,Zt=ae?oe.bottom-Xe:Ie-oe.left,Tt=ae?oe.height:oe.width;let Ct=Zt/Tt;return A&&(Ct=1-Ct),Nk(Ct,t,n)},[ae,A,n,t]),Te=(n-t)/10,we=v||(n-t)/100,Fe=p.exports.useMemo(()=>({setValueAtIndex(Y,ue){if(!B)return;const oe=H.current.valueBounds[Y];ue=parseFloat(bh(ue,oe.min,we)),ue=di(ue,oe.min,oe.max);const Ie=[...H.current.value];Ie[Y]=ue,$(Ie)},setActiveIndex:N,stepUp(Y,ue=we){const oe=H.current.value[Y],Ie=A?oe-ue:oe+ue;Fe.setValueAtIndex(Y,Ie)},stepDown(Y,ue=we){const oe=H.current.value[Y],Ie=A?oe+ue:oe-ue;Fe.setValueAtIndex(Y,Ie)},reset(){$(X.current)}}),[we,A,$,B]),Pt=p.exports.useCallback(Y=>{const ue=Y.key,Ie={ArrowRight:()=>Fe.stepUp(L),ArrowUp:()=>Fe.stepUp(L),ArrowLeft:()=>Fe.stepDown(L),ArrowDown:()=>Fe.stepDown(L),PageUp:()=>Fe.stepUp(L,Te),PageDown:()=>Fe.stepDown(L,Te),Home:()=>{const{min:Xe}=U[L];Fe.setValueAtIndex(L,Xe)},End:()=>{const{max:Xe}=U[L];Fe.setValueAtIndex(L,Xe)}}[ue];Ie&&(Y.preventDefault(),Y.stopPropagation(),Ie(Y),H.current.eventSource="keyboard")},[Fe,L,Te,U]),{getThumbStyle:Ye,rootStyle:gt,trackStyle:vt,innerTrackStyle:ct}=p.exports.useMemo(()=>Y_({isReversed:A,orientation:l,thumbRects:le,thumbPercents:j}),[A,l,j,le]),Xt=p.exports.useCallback(Y=>{var ue;const oe=Y!=null?Y:L;if(oe!==-1&&x){const Ie=K.getThumb(oe),Xe=(ue=xe.current)==null?void 0:ue.ownerDocument.getElementById(Ie);Xe&&setTimeout(()=>Xe.focus())}},[x,L,K]);tr(()=>{H.current.eventSource==="keyboard"&&(T==null||T(H.current.value))},[ee,T]);const zn=Y=>{const ue=de(Y)||0,oe=H.current.value.map(Ct=>Math.abs(Ct-ue)),Ie=Math.min(...oe);let Xe=oe.indexOf(Ie);const Zt=oe.filter(Ct=>Ct===Ie);Zt.length>1&&ue>H.current.value[Xe]&&(Xe=Xe+Zt.length-1),N(Xe),Fe.setValueAtIndex(Xe,ue),Xt(Xe)},ar=Y=>{if(L==-1)return;const ue=de(Y)||0;N(L),Fe.setValueAtIndex(L,ue),Xt(L)};G_(xe,{onPanSessionStart(Y){!B||(Z(!0),zn(Y),E==null||E(H.current.value))},onPanSessionEnd(){!B||(Z(!1),T==null||T(H.current.value))},onPan(Y){!B||ar(Y)}});const ir=p.exports.useCallback((Y={},ue=null)=>({...Y,..._,id:K.root,ref:ke(ue,xe),tabIndex:-1,"aria-disabled":wi(c),"data-focused":Pn(te),style:{...Y.style,...gt}}),[_,c,te,gt,K]),G=p.exports.useCallback((Y={},ue=null)=>({...Y,ref:ke(ue,ge),id:K.track,"data-disabled":Pn(c),style:{...Y.style,...vt}}),[c,vt,K]),Se=p.exports.useCallback((Y={},ue=null)=>({...Y,ref:ue,id:K.innerTrack,style:{...Y.style,...ct}}),[ct,K]),et=p.exports.useCallback((Y,ue=null)=>{var Tt;const{index:oe,...Ie}=Y,Xe=ee[oe];if(Xe==null)throw new TypeError(`[range-slider > thumb] Cannot find value at index \`${oe}\`. The \`value\` or \`defaultValue\` length is : ${ee.length}`);const Zt=U[oe];return{...Ie,ref:ue,role:"slider",tabIndex:B?0:void 0,id:K.getThumb(oe),"data-active":Pn(z&&L===oe),"aria-valuetext":(Tt=O==null?void 0:O(Xe))!=null?Tt:b==null?void 0:b[oe],"aria-valuemin":Zt.min,"aria-valuemax":Zt.max,"aria-valuenow":Xe,"aria-orientation":l,"aria-disabled":wi(c),"aria-readonly":wi(d),"aria-label":y==null?void 0:y[oe],"aria-labelledby":y!=null&&y[oe]||g==null?void 0:g[oe],style:{...Y.style,...Ye(oe)},onKeyDown:xi(Y.onKeyDown,Pt),onFocus:xi(Y.onFocus,()=>{V(!0),N(oe)}),onBlur:xi(Y.onBlur,()=>{V(!1),N(-1)})}},[K,ee,U,B,z,L,O,b,l,c,d,y,g,Ye,Pt,V]),st=p.exports.useCallback((Y={},ue=null)=>({...Y,ref:ue,id:K.output,htmlFor:ee.map((oe,Ie)=>K.getThumb(Ie)).join(" "),"aria-live":"off"}),[K,ee]),J=p.exports.useCallback((Y,ue=null)=>{const{value:oe,...Ie}=Y,Xe=!(oe<t||oe>n),Zt=oe>=ee[0]&&oe<=ee[ee.length-1];let Tt=id(oe,t,n);Tt=A?100-Tt:Tt;const Ct={position:"absolute",pointerEvents:"none",...Cs({orientation:l,vertical:{bottom:`${Tt}%`},horizontal:{left:`${Tt}%`}})};return{...Ie,ref:ue,id:K.getMarker(Y.value),role:"presentation","aria-hidden":!0,"data-disabled":Pn(c),"data-invalid":Pn(!Xe),"data-highlighted":Pn(Zt),style:{...Y.style,...Ct}}},[c,A,n,t,l,ee,K]),fe=p.exports.useCallback((Y,ue=null)=>{const{index:oe,...Ie}=Y;return{...Ie,ref:ue,id:K.getInput(oe),type:"hidden",value:ee[oe],name:Array.isArray(w)?w[oe]:`${w}-${oe}`}},[w,ee,K]);return{state:{value:ee,isFocused:te,isDragging:z,getThumbPercent:Y=>j[Y],getThumbMinValue:Y=>U[Y].min,getThumbMaxValue:Y=>U[Y].max},actions:Fe,getRootProps:ir,getTrackProps:G,getInnerTrackProps:Se,getThumbProps:et,getMarkerProps:J,getInputProps:fe,getOutputProps:st}}function NX(e,t,n,r){return e.map((o,a)=>{const i=a===0?t:e[a-1]+r,s=a===e.length-1?n:e[a+1]-r;return{min:i,max:s}})}var[Q_,lu]=be({name:"SliderContext",errorMessage:"useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"}),[MX,ap]=be({name:"RangeSliderStylesContext",errorMessage:`useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),Uy=M(function(t,n){const r=$e("Slider",t),o=ye(t),{direction:a}=yn();o.direction=a;const{getRootProps:i,...s}=Z_(o),l=p.exports.useMemo(()=>({...s,name:t.name}),[s,t.name]);return P.createElement(Q_,{value:l},P.createElement(MX,{value:r},P.createElement(R.div,{...i({},n),className:"chakra-slider",__css:r.container},t.children)))});Uy.defaultProps={orientation:"horizontal"};Uy.displayName="RangeSlider";var J_=M(function(t,n){const{getThumbProps:r,getInputProps:o,name:a}=lu(),i=ap(),s=r(t,n);return P.createElement(R.div,{...s,className:Bo("chakra-slider__thumb",t.className),__css:i.thumb},s.children,a&&S("input",{...o({index:t.index})}))});J_.displayName="RangeSliderThumb";var eE=M(function(t,n){const{getTrackProps:r}=lu(),o=ap(),a=r(t,n);return P.createElement(R.div,{...a,className:Bo("chakra-slider__track",t.className),__css:o.track,"data-testid":"chakra-range-slider-track"})});eE.displayName="RangeSliderTrack";var tE=M(function(t,n){const{getInnerTrackProps:r}=lu(),o=ap(),a=r(t,n);return P.createElement(R.div,{...a,className:"chakra-slider__filled-track",__css:o.filledTrack})});tE.displayName="RangeSliderFilledTrack";var nE=M(function(t,n){const{getMarkerProps:r}=lu(),o=r(t,n);return P.createElement(R.div,{...o,className:Bo("chakra-slider__marker",t.className)})});nE.displayName="RangeSliderMark";Lo();Lo();function rE(e){var st;const{min:t=0,max:n=100,onChange:r,value:o,defaultValue:a,isReversed:i,direction:s="ltr",orientation:l="horizontal",id:u,isDisabled:c,isReadOnly:d,onChangeStart:f,onChangeEnd:m,step:v=1,getAriaValueText:h,"aria-valuetext":b,"aria-label":y,"aria-labelledby":g,name:w,focusThumbOnChange:x=!0,...k}=e,_=Ue(f),E=Ue(m),T=Ue(h),O=X_({isReversed:i,direction:s,orientation:l}),[A,q]=Fo({value:o,defaultValue:a!=null?a:DX(t,n),onChange:r}),[$,z]=p.exports.useState(!1),[Z,te]=p.exports.useState(!1),V=!(c||d),L=(n-t)/10,N=v||(n-t)/100,B=di(A,t,n),X=n-B+t,Q=id(O?X:B,t,n),U=l==="vertical",H=U_({min:t,max:n,step:v,isDisabled:c,value:B,isInteractive:V,isReversed:O,isVertical:U,eventSource:null,focusThumbOnChange:x,orientation:l}),ie=p.exports.useRef(null),me=p.exports.useRef(null),j=p.exports.useRef(null),ae=p.exports.useId(),ge=u!=null?u:ae,[xe,le]=[`slider-thumb-${ge}`,`slider-track-${ge}`],ve=p.exports.useCallback(J=>{var Vn;var fe;if(!ie.current)return;const Y=H.current;Y.eventSource="pointer";const ue=ie.current.getBoundingClientRect(),{clientX:oe,clientY:Ie}=(Vn=(fe=J.touches)==null?void 0:fe[0])!=null?Vn:J,Xe=U?ue.bottom-Ie:oe-ue.left,Zt=U?ue.height:ue.width;let Tt=Xe/Zt;O&&(Tt=1-Tt);let Ct=Nk(Tt,Y.min,Y.max);return Y.step&&(Ct=parseFloat(bh(Ct,Y.min,Y.step))),Ct=di(Ct,Y.min,Y.max),Ct},[U,O,H]),Ee=p.exports.useCallback(J=>{const fe=H.current;!fe.isInteractive||(J=parseFloat(bh(J,fe.min,N)),J=di(J,fe.min,fe.max),q(J))},[N,q,H]),K=p.exports.useMemo(()=>({stepUp(J=N){const fe=O?B-J:B+J;Ee(fe)},stepDown(J=N){const fe=O?B+J:B-J;Ee(fe)},reset(){Ee(a||0)},stepTo(J){Ee(J)}}),[Ee,O,B,N,a]),de=p.exports.useCallback(J=>{const fe=H.current,ue={ArrowRight:()=>K.stepUp(),ArrowUp:()=>K.stepUp(),ArrowLeft:()=>K.stepDown(),ArrowDown:()=>K.stepDown(),PageUp:()=>K.stepUp(L),PageDown:()=>K.stepDown(L),Home:()=>Ee(fe.min),End:()=>Ee(fe.max)}[J.key];ue&&(J.preventDefault(),J.stopPropagation(),ue(J),fe.eventSource="keyboard")},[K,Ee,L,H]),Te=(st=T==null?void 0:T(B))!=null?st:b,we=FX(me),{getThumbStyle:Fe,rootStyle:Pt,trackStyle:Ye,innerTrackStyle:gt}=p.exports.useMemo(()=>{const J=H.current,fe=we!=null?we:{width:0,height:0};return Y_({isReversed:O,orientation:J.orientation,thumbRects:[fe],thumbPercents:[Q]})},[O,we,Q,H]),vt=p.exports.useCallback(()=>{H.current.focusThumbOnChange&&setTimeout(()=>{var fe;return(fe=me.current)==null?void 0:fe.focus()})},[H]);tr(()=>{const J=H.current;vt(),J.eventSource==="keyboard"&&(E==null||E(J.value))},[B,E]);function ct(J){const fe=ve(J);fe!=null&&fe!==H.current.value&&q(fe)}G_(j,{onPanSessionStart(J){const fe=H.current;!fe.isInteractive||(z(!0),vt(),ct(J),_==null||_(fe.value))},onPanSessionEnd(){const J=H.current;!J.isInteractive||(z(!1),E==null||E(J.value))},onPan(J){!H.current.isInteractive||ct(J)}});const Xt=p.exports.useCallback((J={},fe=null)=>({...J,...k,ref:ke(fe,j),tabIndex:-1,"aria-disabled":wi(c),"data-focused":Pn(Z),style:{...J.style,...Pt}}),[k,c,Z,Pt]),zn=p.exports.useCallback((J={},fe=null)=>({...J,ref:ke(fe,ie),id:le,"data-disabled":Pn(c),style:{...J.style,...Ye}}),[c,le,Ye]),ar=p.exports.useCallback((J={},fe=null)=>({...J,ref:fe,style:{...J.style,...gt}}),[gt]),ir=p.exports.useCallback((J={},fe=null)=>({...J,ref:ke(fe,me),role:"slider",tabIndex:V?0:void 0,id:xe,"data-active":Pn($),"aria-valuetext":Te,"aria-valuemin":t,"aria-valuemax":n,"aria-valuenow":B,"aria-orientation":l,"aria-disabled":wi(c),"aria-readonly":wi(d),"aria-label":y,"aria-labelledby":y?void 0:g,style:{...J.style,...Fe(0)},onKeyDown:xi(J.onKeyDown,de),onFocus:xi(J.onFocus,()=>te(!0)),onBlur:xi(J.onBlur,()=>te(!1))}),[V,xe,$,Te,t,n,B,l,c,d,y,g,Fe,de]),G=p.exports.useCallback((J,fe=null)=>{const Y=!(J.value<t||J.value>n),ue=B>=J.value,oe=id(J.value,t,n),Ie={position:"absolute",pointerEvents:"none",...OX({orientation:l,vertical:{bottom:O?`${100-oe}%`:`${oe}%`},horizontal:{left:O?`${100-oe}%`:`${oe}%`}})};return{...J,ref:fe,role:"presentation","aria-hidden":!0,"data-disabled":Pn(c),"data-invalid":Pn(!Y),"data-highlighted":Pn(ue),style:{...J.style,...Ie}}},[c,O,n,t,l,B]),Se=p.exports.useCallback((J={},fe=null)=>({...J,ref:fe,type:"hidden",value:B,name:w}),[w,B]);return{state:{value:B,isFocused:Z,isDragging:$},actions:K,getRootProps:Xt,getTrackProps:zn,getInnerTrackProps:ar,getThumbProps:ir,getMarkerProps:G,getInputProps:Se}}function OX(e){const{orientation:t,vertical:n,horizontal:r}=e;return t==="vertical"?n:r}function DX(e,t){return t<e?e:e+(t-e)/2}var[oE,uu]=be({name:"SliderContext",hookName:"useSliderContext",providerName:"<Slider />"}),[qX,cu]=be({name:"SliderStylesContext",hookName:"useSliderStyles",providerName:"<Slider />"}),Gy=M((e,t)=>{const n=$e("Slider",e),r=ye(e),{direction:o}=yn();r.direction=o;const{getInputProps:a,getRootProps:i,...s}=rE(r),l=i(),u=a({},t);return P.createElement(oE,{value:s},P.createElement(qX,{value:n},P.createElement(R.div,{...l,className:Bo("chakra-slider",e.className),__css:n.container},e.children,S("input",{...u}))))});Gy.defaultProps={orientation:"horizontal"};Gy.displayName="Slider";var aE=M((e,t)=>{const{getThumbProps:n}=uu(),r=cu(),o=n(e,t);return P.createElement(R.div,{...o,className:Bo("chakra-slider__thumb",e.className),__css:r.thumb})});aE.displayName="SliderThumb";var iE=M((e,t)=>{const{getTrackProps:n}=uu(),r=cu(),o=n(e,t);return P.createElement(R.div,{...o,className:Bo("chakra-slider__track",e.className),__css:r.track})});iE.displayName="SliderTrack";var sE=M((e,t)=>{const{getInnerTrackProps:n}=uu(),r=cu(),o=n(e,t);return P.createElement(R.div,{...o,className:Bo("chakra-slider__filled-track",e.className),__css:r.filledTrack})});sE.displayName="SliderFilledTrack";var lE=M((e,t)=>{const{getMarkerProps:n}=uu(),r=cu(),o=n(e,t);return P.createElement(R.div,{...o,className:Bo("chakra-slider__marker",e.className),__css:r.mark})});lE.displayName="SliderMark";var du=(...e)=>e.filter(Boolean).join(" "),[LX,fu]=be({name:"StatStylesContext",errorMessage:`useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />" `}),uE=M(function(t,n){const r=$e("Stat",t),o={position:"relative",flex:"1 1 0%",...r.container},{className:a,children:i,...s}=ye(t);return P.createElement(LX,{value:r},P.createElement(R.div,{ref:n,...s,className:du("chakra-stat",a),__css:o},S("dl",{children:i})))});uE.displayName="Stat";var Ky=e=>S(Mt,{color:"red.400",...e,children:S("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})});Ky.displayName="StatDownArrow";function Yy(e){return S(Mt,{color:"green.400",...e,children:S("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})})}Yy.displayName="StatUpArrow";function cE(e){const{type:t,"aria-label":n,...r}=e,o=fu(),a=t==="increase"?Yy:Ky,s=n||(t==="increase"?"increased by":"decreased by");return P.createElement(P.Fragment,null,P.createElement(R.span,{srOnly:!0},s),S(a,{"aria-hidden":!0,...r,__css:o.icon}))}cE.displayName="StatArrow";var dE=M(function(t,n){return P.createElement(R.div,{...t,ref:n,role:"group",className:du("chakra-stat__group",t.className),__css:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"flex-start"}})});dE.displayName="StatGroup";var fE=M(function(t,n){const r=fu();return P.createElement(R.dd,{ref:n,...t,className:du("chakra-stat__help-text",t.className),__css:r.helpText})});fE.displayName="StatHelpText";var pE=M(function(t,n){const r=fu();return P.createElement(R.dt,{ref:n,...t,className:du("chakra-stat__label",t.className),__css:r.label})});pE.displayName="StatLabel";var mE=M(function(t,n){const r=fu();return P.createElement(R.dd,{ref:n,...t,className:du("chakra-stat__number",t.className),__css:{...r.number,fontFeatureSettings:"pnum",fontVariantNumeric:"proportional-nums"}})});mE.displayName="StatNumber";var BX=(...e)=>e.filter(Boolean).join(" "),b2=e=>e?"":void 0,hE=M(function(t,n){const r=$e("Switch",t),{spacing:o="0.5rem",children:a,...i}=ye(t),{state:s,getInputProps:l,getCheckboxProps:u,getRootProps:c,getLabelProps:d}=nv(i),f=p.exports.useMemo(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...r.container}),[r.container]),m=p.exports.useMemo(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...r.track}),[r.track]),v=p.exports.useMemo(()=>({userSelect:"none",marginStart:o,...r.label}),[o,r.label]);return P.createElement(R.label,{...c(),className:BX("chakra-switch",t.className),__css:f},S("input",{className:"chakra-switch__input",...l({},n)}),P.createElement(R.span,{...u(),className:"chakra-switch__track",__css:m},P.createElement(R.span,{__css:r.thumb,className:"chakra-switch__thumb","data-checked":b2(s.isChecked),"data-hover":b2(s.isHovered)})),a&&P.createElement(R.span,{className:"chakra-switch__label",...d(),__css:v},a))});hE.displayName="Switch";var gE=(...e)=>e.filter(Boolean).join(" "),[zX,zo]=be({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),vE=M((e,t)=>{const n=$e("Table",e),{className:r,...o}=ye(e);return P.createElement(zX,{value:n},P.createElement(R.table,{ref:t,__css:n.table,className:gE("chakra-table",r),...o}))});vE.displayName="Table";var VX=M((e,t)=>{var i;const{overflow:n,overflowX:r,className:o,...a}=e;return P.createElement(R.div,{ref:t,className:gE("chakra-table__container",o),...a,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:(i=n!=null?n:r)!=null?i:"auto",overflowY:"hidden",maxWidth:"100%"}})}),yE=M((e,t)=>{const{placement:n="bottom",...r}=e,o=zo();return P.createElement(R.caption,{...r,ref:t,__css:{...o.caption,captionSide:n}})});yE.displayName="TableCaption";var $X=M((e,t)=>{const n=zo();return P.createElement(R.thead,{...e,ref:t,__css:n.thead})}),jX=M((e,t)=>{const n=zo();return P.createElement(R.tbody,{...e,ref:t,__css:n.tbody})}),WX=M((e,t)=>{const n=zo();return P.createElement(R.tfoot,{...e,ref:t,__css:n.tfoot})}),HX=M(({isNumeric:e,...t},n)=>{const r=zo();return P.createElement(R.th,{...t,ref:n,__css:r.th,"data-is-numeric":e})}),UX=M((e,t)=>{const n=zo();return P.createElement(R.tr,{...e,ref:t,__css:n.tr})}),GX=M(({isNumeric:e,...t},n)=>{const r=zo();return P.createElement(R.td,{...t,ref:n,__css:r.td,"data-is-numeric":e})}),Gi=(...e)=>e.filter(Boolean).join(" ");function Eg(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var[bE,Xy,wE,xE]=lf();function SE(e){var g;const{defaultIndex:t,onChange:n,index:r,isManual:o,isLazy:a,lazyBehavior:i="unmount",orientation:s="horizontal",direction:l="ltr",...u}=e,[c,d]=p.exports.useState(t!=null?t:0),[f,m]=Fo({defaultValue:t!=null?t:0,value:r,onChange:n});p.exports.useEffect(()=>{r!=null&&d(r)},[r]);const v=wE(),h=p.exports.useId();return{id:`tabs-${(g=e.id)!=null?g:h}`,selectedIndex:f,focusedIndex:c,setSelectedIndex:m,setFocusedIndex:d,isManual:o,isLazy:a,lazyBehavior:i,orientation:s,descendants:v,direction:l,htmlProps:u}}var[CE,Ki]=be({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function kE(e){const{focusedIndex:t,orientation:n,direction:r}=Ki(),o=Xy(),a=p.exports.useCallback(i=>{const s=()=>{var g;const w=o.nextEnabled(t);w&&((g=w.node)==null||g.focus())},l=()=>{var g;const w=o.prevEnabled(t);w&&((g=w.node)==null||g.focus())},u=()=>{var g;const w=o.firstEnabled();w&&((g=w.node)==null||g.focus())},c=()=>{var g;const w=o.lastEnabled();w&&((g=w.node)==null||g.focus())},d=n==="horizontal",f=n==="vertical",m=i.key,v=r==="ltr"?"ArrowLeft":"ArrowRight",h=r==="ltr"?"ArrowRight":"ArrowLeft",y={[v]:()=>d&&l(),[h]:()=>d&&s(),ArrowDown:()=>f&&s(),ArrowUp:()=>f&&l(),Home:u,End:c}[m];y&&(i.preventDefault(),y(i))},[o,t,n,r]);return{...e,role:"tablist","aria-orientation":n,onKeyDown:Eg(e.onKeyDown,a)}}function _E(e){const{isDisabled:t,isFocusable:n,...r}=e,{setSelectedIndex:o,isManual:a,id:i,setFocusedIndex:s,selectedIndex:l}=Ki(),{index:u,register:c}=xE({disabled:t&&!n}),d=u===l,f=()=>{o(u)},m=()=>{s(u),!a&&!(t&&n)&&o(u)},v=k3({...r,ref:ke(c,e.ref),isDisabled:t,isFocusable:n,onClick:Eg(e.onClick,f)}),h="button";return{...v,id:FE(i,u),role:"tab",tabIndex:d?0:-1,type:h,"aria-selected":d,"aria-controls":AE(i,u),onFocus:t?void 0:Eg(e.onFocus,m)}}var[KX,YX]=be({});function EE(e){const t=Ki(),{id:n,selectedIndex:r}=t,a=Yr(e.children).map((i,s)=>p.exports.createElement(KX,{key:s,value:{isSelected:s===r,id:AE(n,s),tabId:FE(n,s),selectedIndex:r}},i));return{...e,children:a}}function PE(e){const{children:t,...n}=e,{isLazy:r,lazyBehavior:o}=Ki(),{isSelected:a,id:i,tabId:s}=YX(),l=p.exports.useRef(!1);a&&(l.current=!0);const u=Rv({wasSelected:l.current,isSelected:a,enabled:r,mode:o});return{tabIndex:0,...n,children:u?t:null,role:"tabpanel","aria-labelledby":s,hidden:!a,id:i}}function TE(){const e=Ki(),t=Xy(),{selectedIndex:n,orientation:r}=e,o=r==="horizontal",a=r==="vertical",[i,s]=p.exports.useState(()=>{if(o)return{left:0,width:0};if(a)return{top:0,height:0}}),[l,u]=p.exports.useState(!1);return An(()=>{if(n==null)return;const c=t.item(n);if(c==null)return;o&&s({left:c.node.offsetLeft,width:c.node.offsetWidth}),a&&s({top:c.node.offsetTop,height:c.node.offsetHeight});const d=requestAnimationFrame(()=>{u(!0)});return()=>{d&&cancelAnimationFrame(d)}},[n,o,a,t]),{position:"absolute",transitionProperty:"left, right, top, bottom, height, width",transitionDuration:l?"200ms":"0ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",...i}}function FE(e,t){return`${e}--tab-${t}`}function AE(e,t){return`${e}--tabpanel-${t}`}var[XX,Yi]=be({name:"TabsStylesContext",errorMessage:`useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `}),IE=M(function(t,n){const r=$e("Tabs",t),{children:o,className:a,...i}=ye(t),{htmlProps:s,descendants:l,...u}=SE(i),c=p.exports.useMemo(()=>u,[u]),{isFitted:d,...f}=s;return P.createElement(bE,{value:l},P.createElement(CE,{value:c},P.createElement(XX,{value:r},P.createElement(R.div,{className:Gi("chakra-tabs",a),ref:n,...f,__css:r.root},o))))});IE.displayName="Tabs";var RE=M(function(t,n){const r=TE(),o={...t.style,...r},a=Yi();return P.createElement(R.div,{ref:n,...t,className:Gi("chakra-tabs__tab-indicator",t.className),style:o,__css:a.indicator})});RE.displayName="TabIndicator";var NE=M(function(t,n){const r=kE({...t,ref:n}),a={display:"flex",...Yi().tablist};return P.createElement(R.div,{...r,className:Gi("chakra-tabs__tablist",t.className),__css:a})});NE.displayName="TabList";var ME=M(function(t,n){const r=PE({...t,ref:n}),o=Yi();return P.createElement(R.div,{outline:"0",...r,className:Gi("chakra-tabs__tab-panel",t.className),__css:o.tabpanel})});ME.displayName="TabPanel";var OE=M(function(t,n){const r=EE(t),o=Yi();return P.createElement(R.div,{...r,width:"100%",ref:n,className:Gi("chakra-tabs__tab-panels",t.className),__css:o.tabpanels})});OE.displayName="TabPanels";var DE=M(function(t,n){const r=Yi(),o=_E({...t,ref:n}),a={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...r.tab};return P.createElement(R.button,{...o,className:Gi("chakra-tabs__tab",t.className),__css:a})});DE.displayName="Tab";var[ZX,Zy]=be({name:"TagStylesContext",errorMessage:`useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `}),Xn=M((e,t)=>{const n=$e("Tag",e),r=ye(e),o={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...n.container};return P.createElement(ZX,{value:n},P.createElement(R.span,{ref:t,...r,__css:o}))});Xn.displayName="Tag";var qE=M((e,t)=>{const n=Zy();return P.createElement(R.span,{ref:t,noOfLines:1,...e,__css:n.label})});qE.displayName="TagLabel";var LE=M((e,t)=>S(Mt,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e}));LE.displayName="TagLeftIcon";var BE=M((e,t)=>S(Mt,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e}));BE.displayName="TagRightIcon";var zE=e=>S(Mt,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:S("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});zE.displayName="TagCloseIcon";var VE=M((e,t)=>{const{isDisabled:n,children:r,...o}=e,i={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...Zy().closeButton};return P.createElement(R.button,{ref:t,"aria-label":"close",...o,type:"button",disabled:n,__css:i},r||S(zE,{}))});VE.displayName="TagCloseButton";var QX=(...e)=>e.filter(Boolean).join(" ");function JX(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}var eZ=["h","minH","height","minHeight"],$E=M((e,t)=>{const n=ht("Textarea",e),{className:r,rows:o,...a}=ye(e),i=Pf(a),s=o?JX(n,eZ):n;return P.createElement(R.textarea,{ref:t,rows:o,...i,className:QX("chakra-textarea",r),__css:s})});$E.displayName="Textarea";function tZ(e,t){const n=Ue(e);p.exports.useEffect(()=>{if(t==null)return;let r=null;return r=window.setTimeout(()=>{n()},t),()=>{r&&window.clearTimeout(r)}},[t,n])}function Pg(e,...t){return nZ(e)?e(...t):e}var nZ=e=>typeof e=="function";function jE(e,t){var a;const n=e!=null?e:"bottom",o={"top-start":{ltr:"top-left",rtl:"top-right"},"top-end":{ltr:"top-right",rtl:"top-left"},"bottom-start":{ltr:"bottom-left",rtl:"bottom-right"},"bottom-end":{ltr:"bottom-right",rtl:"bottom-left"}}[n];return(a=o==null?void 0:o[t])!=null?a:n}var rZ=(e,t)=>e.find(n=>n.id===t);function w2(e,t){const n=WE(e,t),r=n?e[n].findIndex(o=>o.id===t):-1;return{position:n,index:r}}function WE(e,t){for(const[n,r]of Object.entries(e))if(rZ(r,t))return n}function oZ(e){const t=e.includes("right"),n=e.includes("left");let r="center";return t&&(r="flex-end"),n&&(r="flex-start"),{display:"flex",flexDirection:"column",alignItems:r}}function aZ(e){const n=e==="top"||e==="bottom"?"0 auto":void 0,r=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,o=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,a=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",i=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:5500,pointerEvents:"none",display:"flex",flexDirection:"column",margin:n,top:r,bottom:o,right:a,left:i}}var iZ={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},yr=sZ(iZ);function sZ(e){let t=e;const n=new Set,r=o=>{t=o(t),n.forEach(a=>a())};return{getState:()=>t,subscribe:o=>(n.add(o),()=>{r(()=>e),n.delete(o)}),removeToast:(o,a)=>{r(i=>({...i,[a]:i[a].filter(s=>s.id!=o)}))},notify:(o,a)=>{const i=lZ(o,a),{position:s,id:l}=i;return r(u=>{var f,m;const d=s.includes("top")?[i,...(f=u[s])!=null?f:[]]:[...(m=u[s])!=null?m:[],i];return{...u,[s]:d}}),l},update:(o,a)=>{!o||r(i=>{const s={...i},{position:l,index:u}=w2(s,o);return l&&u!==-1&&(s[l][u]={...s[l][u],...a,message:Qy(a)}),s})},closeAll:({positions:o}={})=>{r(a=>{const i=["bottom","bottom-right","bottom-left","top","top-left","top-right"];return(o!=null?o:i).reduce((l,u)=>(l[u]=a[u].map(c=>({...c,requestClose:!0})),l),{...a})})},close:o=>{r(a=>{const i=WE(a,o);return i?{...a,[i]:a[i].map(s=>s.id==o?{...s,requestClose:!0}:s)}:a})},isActive:o=>Boolean(w2(yr.getState(),o).position)}}var x2=0;function lZ(e,t={}){var o,a;x2+=1;const n=(o=t.id)!=null?o:x2,r=(a=t.position)!=null?a:"bottom";return{id:n,message:e,position:r,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>yr.removeToast(String(n),r),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}var HE=e=>{const{status:t,variant:n="solid",id:r,title:o,isClosable:a,onClose:i,description:s,icon:l}=e,u=r?{root:`toast-${r}`,title:`toast-${r}-title`,description:`toast-${r}-description`}:void 0;return P.createElement(B0,{addRole:!1,status:t,variant:n,id:u==null?void 0:u.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto"},S(V0,{children:l}),P.createElement(R.div,{flex:"1",maxWidth:"100%"},o&&S($0,{id:u==null?void 0:u.title,children:o}),s&&S(z0,{id:u==null?void 0:u.description,display:"block",children:s})),a&&S(Gl,{size:"sm",onClick:i,position:"absolute",insetEnd:1,top:1}))};function Qy(e={}){const{render:t,toastComponent:n=HE}=e;return o=>typeof t=="function"?t({...o,...e}):S(n,{...o,...e})}function Jy(e,t){const n=o=>{var a;return{...t,...o,position:jE((a=o==null?void 0:o.position)!=null?a:t==null?void 0:t.position,e)}},r=o=>{const a=n(o),i=Qy(a);return yr.notify(i,a)};return r.update=(o,a)=>{yr.update(o,n(a))},r.promise=(o,a)=>{const i=r({...a.loading,status:"loading",duration:null});o.then(s=>r.update(i,{status:"success",duration:5e3,...Pg(a.success,s)})).catch(s=>r.update(i,{status:"error",duration:5e3,...Pg(a.error,s)}))},r.closeAll=yr.closeAll,r.close=yr.close,r.isActive=yr.isActive,r}function uZ(e){const{theme:t}=sf();return p.exports.useMemo(()=>Jy(t.direction,e),[e,t.direction])}var cZ={initial:e=>{const{position:t}=e,n=["top","bottom"].includes(t)?"y":"x";let r=["top-right","bottom-right"].includes(t)?1:-1;return t==="bottom"&&(r=1),{opacity:0,[n]:r*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},UE=p.exports.memo(e=>{const{id:t,message:n,onCloseComplete:r,onRequestRemove:o,requestClose:a=!1,position:i="bottom",duration:s=5e3,containerStyle:l,motionVariants:u=cZ,toastSpacing:c="0.5rem"}=e,[d,f]=p.exports.useState(s),m=jq();tr(()=>{m||r==null||r()},[m]),tr(()=>{f(s)},[s]);const v=()=>f(null),h=()=>f(s),b=()=>{m&&o()};p.exports.useEffect(()=>{m&&a&&o()},[m,a,o]),tZ(b,d);const y=p.exports.useMemo(()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:c,...l}),[l,c]),g=p.exports.useMemo(()=>oZ(i),[i]);return P.createElement(or.li,{layout:!0,className:"chakra-toast",variants:u,initial:"initial",animate:"animate",exit:"exit",onHoverStart:v,onHoverEnd:h,custom:{position:i},style:g},P.createElement(R.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:y},Pg(n,{id:t,onClose:b})))});UE.displayName="ToastComponent";var eb=e=>{const t=p.exports.useSyncExternalStore(yr.subscribe,yr.getState,yr.getState),{children:n,motionVariants:r,component:o=UE,portalProps:a}=e,s=Object.keys(t).map(l=>{const u=t[l];return S("ul",{role:"region","aria-live":"polite",id:`chakra-toast-manager-${l}`,style:aZ(l),children:S(Ao,{initial:!1,children:u.map(c=>S(o,{motionVariants:r,...c},c.id))})},l)});return se(Ht,{children:[n,S(Do,{...a,children:s})]})},dZ={duration:5e3,variant:"solid"},Ko={theme:WO,colorMode:"light",toggleColorMode:()=>{},setColorMode:()=>{},defaultOptions:dZ,forced:!1};function fZ({theme:e=Ko.theme,colorMode:t=Ko.colorMode,toggleColorMode:n=Ko.toggleColorMode,setColorMode:r=Ko.setColorMode,defaultOptions:o=Ko.defaultOptions,motionVariants:a,toastSpacing:i,component:s,forced:l}=Ko){const u={colorMode:t,setColorMode:r,toggleColorMode:n,forced:l};return{ToastContainer:()=>S(l0,{theme:e,children:S(ga.Provider,{value:u,children:S(eb,{defaultOptions:o,motionVariants:a,toastSpacing:i,component:s})})}),toast:Jy(e.direction,o)}}function pZ(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function mZ(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}var hZ={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}};function ps(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var Dd=e=>{var t;return((t=e.current)==null?void 0:t.ownerDocument)||document},Tg=e=>{var t,n;return((n=(t=e.current)==null?void 0:t.ownerDocument)==null?void 0:n.defaultView)||window};function GE(e={}){const{openDelay:t=0,closeDelay:n=0,closeOnClick:r=!0,closeOnMouseDown:o,closeOnScroll:a,closeOnPointerDown:i=o,closeOnEsc:s=!0,onOpen:l,onClose:u,placement:c,id:d,isOpen:f,defaultIsOpen:m,arrowSize:v=10,arrowShadowColor:h,arrowPadding:b,modifiers:y,isDisabled:g,gutter:w,offset:x,direction:k,..._}=e,{isOpen:E,onOpen:T,onClose:O}=Iv({isOpen:f,defaultIsOpen:m,onOpen:l,onClose:u}),{referenceRef:A,getPopperProps:q,getArrowInnerProps:$,getArrowProps:z}=zf({enabled:E,placement:c,arrowPadding:b,modifiers:y,gutter:w,offset:x,direction:k}),Z=p.exports.useId(),V=`tooltip-${d!=null?d:Z}`,L=p.exports.useRef(null),N=p.exports.useRef(),B=p.exports.useCallback(()=>{N.current&&(clearTimeout(N.current),N.current=void 0)},[]),X=p.exports.useRef(),ee=p.exports.useCallback(()=>{X.current&&(clearTimeout(X.current),X.current=void 0)},[]),Q=p.exports.useCallback(()=>{ee(),O()},[O,ee]),U=gZ(L,Q),H=p.exports.useCallback(()=>{if(!g&&!N.current){U();const ve=Tg(L);N.current=ve.setTimeout(T,t)}},[U,g,T,t]),ie=p.exports.useCallback(()=>{B();const ve=Tg(L);X.current=ve.setTimeout(Q,n)},[n,Q,B]),me=p.exports.useCallback(()=>{E&&r&&ie()},[r,ie,E]),j=p.exports.useCallback(()=>{E&&i&&ie()},[i,ie,E]),ae=p.exports.useCallback(ve=>{E&&ve.key==="Escape"&&ie()},[E,ie]);ia(()=>Dd(L),"keydown",s?ae:void 0),ia(()=>Dd(L),"scroll",()=>{E&&a&&Q()}),p.exports.useEffect(()=>{!g||(B(),E&&O())},[g,E,O,B]),p.exports.useEffect(()=>()=>{B(),ee()},[B,ee]),ia(()=>L.current,"pointerleave",ie);const ge=p.exports.useCallback((ve={},Ee=null)=>({...ve,ref:ke(L,Ee,A),onPointerEnter:ps(ve.onPointerEnter,de=>{de.pointerType!=="touch"&&H()}),onClick:ps(ve.onClick,me),onPointerDown:ps(ve.onPointerDown,j),onFocus:ps(ve.onFocus,H),onBlur:ps(ve.onBlur,ie),"aria-describedby":E?V:void 0}),[H,ie,j,E,V,me,A]),xe=p.exports.useCallback((ve={},Ee=null)=>q({...ve,style:{...ve.style,[dt.arrowSize.var]:v?`${v}px`:void 0,[dt.arrowShadowColor.var]:h}},Ee),[q,v,h]),le=p.exports.useCallback((ve={},Ee=null)=>{const K={...ve.style,position:"relative",transformOrigin:dt.transformOrigin.varRef};return{ref:Ee,..._,...ve,id:V,role:"tooltip",style:K}},[_,V]);return{isOpen:E,show:H,hide:ie,getTriggerProps:ge,getTooltipProps:le,getTooltipPositionerProps:xe,getArrowProps:z,getArrowInnerProps:$}}var Bm="chakra-ui:close-tooltip";function gZ(e,t){return p.exports.useEffect(()=>{const n=Dd(e);return n.addEventListener(Bm,t),()=>n.removeEventListener(Bm,t)},[t,e]),()=>{const n=Dd(e),r=Tg(e);n.dispatchEvent(new r.CustomEvent(Bm))}}var vZ=R(or.div),KE=M((e,t)=>{var O,A;const n=ht("Tooltip",e),r=ye(e),o=yn(),{children:a,label:i,shouldWrapChildren:s,"aria-label":l,hasArrow:u,bg:c,portalProps:d,background:f,backgroundColor:m,bgColor:v,motionProps:h,...b}=r,y=(A=(O=f!=null?f:m)!=null?O:c)!=null?A:v;if(y){n.bg=y;const q=yS(o,"colors",y);n[dt.arrowBg.var]=q}const g=GE({...b,direction:o.direction}),w=typeof a=="string"||s;let x;if(w)x=P.createElement(R.span,{display:"inline-block",tabIndex:0,...g.getTriggerProps()},a);else{const q=p.exports.Children.only(a);x=p.exports.cloneElement(q,g.getTriggerProps(q.props,q.ref))}const k=!!l,_=g.getTooltipProps({},t),E=k?pZ(_,["role","id"]):_,T=mZ(_,["role","id"]);return i?se(Ht,{children:[x,S(Ao,{children:g.isOpen&&P.createElement(Do,{...d},P.createElement(R.div,{...g.getTooltipPositionerProps(),__css:{zIndex:n.zIndex,pointerEvents:"none"}},se(vZ,{variants:hZ,initial:"exit",animate:"enter",exit:"exit",...h,...E,__css:n,children:[i,k&&P.createElement(R.span,{srOnly:!0,...T},l),u&&P.createElement(R.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper"},P.createElement(R.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:n.bg}}))]})))})]}):S(Ht,{children:a})});KE.displayName="Tooltip";var yZ=e=>{const{children:t,colorModeManager:n,portalZIndex:r,resetCSS:o=!0,theme:a={},environment:i,cssVarsRoot:s}=e,l=S(Sv,{environment:i,children:t});return S(l0,{theme:a,cssVarsRoot:s,children:se(Dg,{colorModeManager:n,options:a.config,children:[o?S(Lk,{}):S(qk,{}),S(kC,{}),r?S(Py,{zIndex:r,children:l}):l]})})},YE=e=>function({children:n,theme:r=e,toastOptions:o,...a}){return se(yZ,{theme:r,...a,children:[n,S(eb,{...o})]})},XE=YE(af),bZ=YE(a0);const ZE=Object.freeze(Object.defineProperty({__proto__:null,ChakraBaseProvider:bZ,ChakraProvider:XE,Accordion:ak,AccordionButton:Q5,AccordionIcon:nk,AccordionItem:rk,AccordionPanel:ok,AccordionProvider:ek,useAccordion:J5,useAccordionContext:bf,useAccordionItem:tk,useAccordionItemState:lV,useAccordionStyles:Hl,Alert:B0,AlertDescription:z0,AlertIcon:V0,AlertTitle:$0,useAlertStyles:Sf,Avatar:dk,AvatarBadge:pk,AvatarGroup:fk,GenericAvatarIcon:U0,useAvatarStyles:H0,Breadcrumb:mk,BreadcrumbItem:hk,BreadcrumbLink:K0,BreadcrumbSeparator:od,useBreadcrumbStyles:Cf,Button:Y0,ButtonGroup:vk,ButtonSpinner:ad,IconButton:X0,useButtonGroup:gk,Card:Z0,CardBody:Q0,CardFooter:RV,CardHeader:yk,useCardStyles:Ef,Checkbox:Ik,CheckboxGroup:Fk,CheckboxIcon:Ak,useCheckbox:nv,useCheckboxGroup:Tk,CloseButton:Gl,ControlBox:Rk,useCounter:Mk,CSSPolyfill:qk,CSSReset:Lk,Editable:$k,EditableInput:jk,EditablePreview:Hk,EditableTextarea:Wk,useEditable:Vk,useEditableControls:c$,useEditableState:d$,useEditableStyles:If,FormControl:bk,FormErrorIcon:Ck,FormErrorMessage:Sk,FormHelperText:wk,FormLabel:kk,RequiredIndicator:ev,useFormControl:Pf,useFormControlContext:Io,useFormControlProps:Tf,useFormControlStyles:J0,useFormErrorStyles:xk,assignRef:Gk,useAnimationState:y$,useBoolean:b$,useCallbackRef:Vr,useClipboard:w$,useConst:x$,useControllableProp:Uk,useControllableState:S$,useDimensions:C$,useDisclosure:E$,useEventListener:Yl,useEventListenerMap:P$,useFocusEffect:T$,useFocusOnHide:A$,useFocusOnPointerDown:I$,useFocusOnShow:N$,useForceUpdate:M$,useId:av,useIds:k$,useInterval:O$,useLatestRef:D$,useMergeRefs:q$,useMouseDownRef:L$,useOptionalPart:_$,useOutsideClick:B$,usePanGesture:z$,usePointerEvent:iv,usePrevious:V$,useSafeLayoutEffect:Rf,useShortcut:j$,useTimeout:W$,useUnmountEffect:sv,useUpdateEffect:Nf,useWhyDidYouUpdate:H$,Icon:Mt,createIcon:wD,Image:Ul,Img:bV,shouldShowFallbackImage:sk,useImage:j0,Input:Mf,InputAddon:Of,InputGroup:Kk,InputLeftAddon:cv,InputLeftElement:fv,InputRightAddon:dv,InputRightElement:pv,useInputGroupStyles:uv,AbsoluteCenter:J$,AspectRatio:Xk,Badge:ao,Box:bt,Center:Pi,Circle:Zk,Code:Qk,Container:Jk,Divider:e3,Flex:sd,Grid:hv,GridItem:t3,HStack:f3,Heading:Xl,Highlight:rj,Kbd:o3,Link:a3,LinkBox:aj,LinkOverlay:oj,List:qf,ListIcon:u3,ListItem:l3,Mark:r3,OrderedList:i3,SimpleGrid:Lf,Spacer:vv,Square:mv,Stack:Zl,StackDivider:p3,StackItem:yv,Text:Ce,UnorderedList:s3,VStack:bv,Wrap:m3,WrapItem:wv,getDividerStyles:d3,getStackStyles:c3,selector:ld,useHighlight:n3,useListStyles:gv,Hide:C3,Show:S3,useBreakpoint:b3,useBreakpointValue:w3,useColorModePreference:hj,useMediaQuery:Ql,usePrefersReducedMotion:mj,useQuery:Cv,Menu:n9,MenuButton:r9,MenuCommand:Mv,MenuDescendantsProvider:W3,MenuDivider:o9,MenuGroup:Ov,MenuIcon:Vf,MenuItem:i9,MenuItemOption:Dv,MenuList:s9,MenuOptionGroup:l9,MenuProvider:K3,useMenu:X3,useMenuButton:Z3,useMenuContext:xa,useMenuDescendant:G3,useMenuDescendants:U3,useMenuDescendantsContext:H3,useMenuItem:Nv,useMenuList:Q3,useMenuOption:e9,useMenuOptionGroup:t9,useMenuPositioner:J3,useMenuState:sH,useMenuStyles:Sa,AlertDialog:hY,AlertDialogBody:Pc,AlertDialogCloseButton:Tc,AlertDialogContent:gY,AlertDialogFooter:Fc,AlertDialogHeader:Ac,AlertDialogOverlay:Ic,Drawer:wY,DrawerBody:Pc,DrawerCloseButton:Tc,DrawerContent:e_,DrawerFooter:Fc,DrawerHeader:Ac,DrawerOverlay:Ic,Modal:au,ModalBody:Pc,ModalCloseButton:Tc,ModalContent:zy,ModalContextProvider:Z4,ModalFocusScope:By,ModalFooter:Fc,ModalHeader:Ac,ModalOverlay:Ic,useAriaHidden:X4,useDrawerContext:J4,useModal:Y4,useModalContext:Kr,useModalStyles:qo,NumberDecrementStepper:i_,NumberIncrementStepper:s_,NumberInput:r_,NumberInputField:a_,NumberInputStepper:o_,StyledStepper:$y,useNumberInput:n_,useNumberInputStyles:iu,PinInput:h_,PinInputDescendantsProvider:l_,PinInputField:g_,PinInputProvider:d_,usePinInput:p_,usePinInputContext:f_,usePinInputDescendant:c_,usePinInputDescendants:u_,usePinInputDescendantsContext:MY,usePinInputField:m_,Popover:y_,PopoverAnchor:b_,PopoverArrow:w_,PopoverBody:x_,PopoverCloseButton:S_,PopoverContent:k_,PopoverFooter:__,PopoverHeader:E_,PopoverTrigger:P_,usePopover:v_,usePopoverContext:Zr,usePopoverStyles:Ea,popperCSSVars:dt,usePopper:zf,Portal:Do,PortalManager:Py,usePortalManager:c4,CircularProgress:A_,CircularProgressLabel:N_,Progress:I_,ProgressLabel:R_,useProgressStyles:jy,Radio:q_,RadioGroup:O_,useRadio:D_,useRadioGroup:M_,useRadioGroupContext:Wy,EnvironmentProvider:Sv,useEnvironment:v3,DefaultIcon:B_,Select:L_,SelectField:Hy,Skeleton:su,SkeletonCircle:j_,SkeletonText:$_,RangeSlider:Uy,RangeSliderFilledTrack:tE,RangeSliderMark:nE,RangeSliderProvider:Q_,RangeSliderThumb:J_,RangeSliderTrack:eE,Slider:Gy,SliderFilledTrack:sE,SliderMark:lE,SliderProvider:oE,SliderThumb:aE,SliderTrack:iE,useRangeSlider:Z_,useRangeSliderContext:lu,useRangeSliderStyles:ap,useSlider:rE,useSliderContext:uu,useSliderStyles:cu,Spinner:wf,Stat:uE,StatArrow:cE,StatDownArrow:Ky,StatGroup:dE,StatHelpText:fE,StatLabel:pE,StatNumber:mE,StatUpArrow:Yy,useStatStyles:fu,Switch:hE,ColorModeContext:ga,ColorModeProvider:Dg,ColorModeScript:IP,DarkMode:V2,LightMode:$2,cookieStorageManager:PP,cookieStorageManagerSSR:TP,createCookieStorageManager:Og,createLocalStorageManager:B2,getScriptSrc:j2,localStorageManager:z2,useColorMode:Ol,useColorModeValue:_P,addPrefix:iS,background:ks,border:Me,calc:lo,color:K2,createMultiStyleConfigHelpers:Ke,css:zg,cssVar:qe,defineStyle:CT,defineStyleConfig:kT,effect:Oc,filter:Y2,flatten:Dc,flattenTokens:fS,flexbox:Ys,getCSSVar:yS,getCss:gS,grid:qg,interactivity:X2,isStyleProp:hS,layout:un,layoutPropNames:Bg,list:Z2,omitThemingProps:ye,others:Q2,position:ti,propNames:mS,pseudoPropNames:dS,pseudoSelectors:Dl,resolveStyleConfig:vS,ring:J2,scroll:oS,space:We,systemProps:zd,textDecoration:eS,toCSSVar:pS,toVarDefinition:lS,toVarReference:sS,tokenToCSSVar:Mc,transform:tS,transition:nS,typography:rS,CSSVars:CC,GlobalStyle:kC,StylesProvider:rD,ThemeProvider:l0,chakra:R,createStylesContext:aD,forwardRef:M,getToken:s0,keyframes:rr,shouldForwardProp:_C,styled:fc,toCSSObject:EC,useChakra:sf,useComponentStyles__unstable:lD,useMultiStyleConfig:$e,useStyleConfig:ht,useStyles:oD,useTheme:yn,useToken:SC,Table:vE,TableCaption:yE,TableContainer:VX,Tbody:jX,Td:GX,Tfoot:WX,Th:HX,Thead:$X,Tr:UX,useTableStyles:zo,Tab:DE,TabIndicator:RE,TabList:NE,TabPanel:ME,TabPanels:OE,Tabs:IE,TabsDescendantsProvider:bE,TabsProvider:CE,useTab:_E,useTabIndicator:TE,useTabList:kE,useTabPanel:PE,useTabPanels:EE,useTabs:SE,useTabsContext:Ki,useTabsDescendant:xE,useTabsDescendants:wE,useTabsDescendantsContext:Xy,useTabsStyles:Yi,Tag:Xn,TagCloseButton:VE,TagLabel:qE,TagLeftIcon:LE,TagRightIcon:BE,useTagStyles:Zy,Textarea:$E,baseTheme:a0,isChakraTheme:mC,requiredChakraThemeKeys:pC,theme:af,Toast:HE,ToastProvider:eb,createRenderToast:Qy,createStandaloneToast:fZ,createToastFn:Jy,defaultStandaloneParam:Ko,getToastPlacement:jE,useToast:uZ,Tooltip:KE,useTooltip:GE,Collapse:O0,EASINGS:mo,Fade:Y5,ScaleFade:X5,Slide:L0,SlideFade:Z5,fadeConfig:D0,getSlideTransition:td,scaleFadeConfig:q0,slideFadeConfig:nd,withDelay:Rn,VisuallyHidden:_k,VisuallyHiddenInput:Ek,visuallyHiddenStyle:Ff,extendBaseTheme:GO,extendTheme:UO,mergeThemeOverride:ya,withDefaultColorScheme:bC,withDefaultProps:YO,withDefaultSize:wC,withDefaultVariant:xC},Symbol.toStringTag,{value:"Module"}));var Fg={},S2=$f.exports;Fg.createRoot=S2.createRoot,Fg.hydrateRoot=S2.hydrateRoot;const wZ=JSON.parse(`{
  "from": 1,
  "to": 20,
  "count": 10000,
  "_links": {},
  "hits": [
    {
      "recipe": {
        "label": "Paleo Chocolate Covered Caramels",
        "image": "/recipe-images/chocolate-caramel.jpeg",
        "url": "http://ourfineday.com/happy-birthday-travis-and-a-recipe-for-chocolate-covered-chocolates/",
        "yield": 12,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Tree-Nuts",
          "Sulfites"
        ],
        "ingredientLines": [
          "1/2 cup honey",
          "1 1/2 Tbsp almond butter",
          "3 tsp butter or coconut butter for dairy free",
          "1 tsp water",
          "1/2 tsp vanilla",
          "1 cup chocolate chips",
          "1/2 tsp coconut oil"
        ],
        "ingredients": [
          {
            "text": "1/2 cup honey",
            "quantity": 0.5,
            "measure": "cup",
            "food": "honey",
            "weight": 169.5,
            "foodCategory": null,
            "foodId": "food_bn6aoj9atkqx8fbkli859bbbxx62",
            "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
          },
          {
            "text": "1 1/2 Tbsp almond butter",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "almond butter",
            "weight": 24,
            "foodCategory": "plant-based protein",
            "foodId": "food_ae9575obgo01yta6szkvqab50hhl",
            "image": "https://www.edamam.com/food-img/5dd/5ddf70b59f27c03902b5d5a3c4574b37.png"
          },
          {
            "text": "3 tsp butter or coconut butter for dairy free",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "coconut butter",
            "weight": 14.000000000710095,
            "foodCategory": null,
            "foodId": "food_bkx1ggcaouz8qob002t72ay33jbo",
            "image": "https://www.edamam.com/food-img/0d0/0d0a27d667f0b7930bdda17da8ea7dc7.jpg"
          },
          {
            "text": "1 tsp water",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "water",
            "weight": 4.928921594,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "1/2 tsp vanilla",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "1 cup chocolate chips",
            "quantity": 1,
            "measure": "cup",
            "food": "chocolate chips",
            "weight": 224,
            "foodCategory": "chocolate",
            "foodId": "food_b0camz2asgzienbko2epvbzzv6qj",
            "image": "https://www.edamam.com/food-img/36c/36ce336d10d51259f365ec2dbc1e28c4.jpg"
          },
          {
            "text": "1/2 tsp coconut oil",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "coconut oil",
            "weight": 2.25,
            "foodCategory": "Oils",
            "foodId": "food_b40ubq8a0enoidbcr1tmfbwgs6aw",
            "image": "https://www.edamam.com/food-img/3c9/3c97284c57e76e16093d51572b558be8.jpg"
          }
        ],
        "calories": 1912.5630000050721,
        "totalWeight": 440.7789215947101,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1912.5630000050721,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 76.8976600004565,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 35.34678,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4121600000000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.917509999999998,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.307704,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 301.1664500001775,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 290.8074500001014,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 10.359000000076083,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 280.61185,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 279.283,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 17.247360000050723,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 33.6,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 168.71615686414296,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 353.66886764782004,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 70.65128921593998,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 270.768,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.668120000018259,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 1.1653028921594002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 128.826,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.1915,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.010071,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.291765,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.97122,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.065946,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 16.11,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 16.11,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.812424999999999,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 0.01125,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 38.766272672406004,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Grilled Pork Chops with Chipotle Sauce",
        "image": "/recipe-images/Grilled-Pork-Chop-with-Chipotle-Sauce.jpeg",
        "url": "https://grumpyshoneybunch.com/2009/07/grilled-pork-chops-chipotle-sauce.html",
        "yield": 8,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "* 8 pork chops",
          "* 1/2 cup sugar free ketchup",
          "* 1/3 cup Seasoned Rice Vinegar, original",
          "* 1/3 cup Swerve Brown Sweetener",
          "* 1 Tablespoon ground cumin",
          "* 1 teaspoons chipotle chili powder"
        ],
        "ingredients": [
          {
            "text": "* 8 pork chops",
            "quantity": 8,
            "measure": "<unit>",
            "food": "pork chops",
            "weight": 1592,
            "foodCategory": "meats",
            "foodId": "food_a6yuw2wan806yxaem8uqza91rjmb",
            "image": "https://www.edamam.com/food-img/499/49977aabc381bd3889ad9100978e1bb6.jpg"
          },
          {
            "text": "* 1/2 cup sugar free ketchup",
            "quantity": 0.5,
            "measure": "cup",
            "food": "ketchup",
            "weight": 120,
            "foodCategory": "condiments and sauces",
            "foodId": "food_au7jthtab0n3era9uue8pauakroe",
            "image": "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg"
          },
          {
            "text": "* 1/3 cup Seasoned Rice Vinegar, original",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Seasoned Rice Vinegar",
            "weight": 79.66666666666666,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bhk02bwbp4x7kkbeajj2pbnj15cp",
            "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
          },
          {
            "text": "* 1/3 cup Swerve Brown Sweetener",
            "quantity": 0.3333333333333333,
            "measure": "<unit>",
            "food": "Sweetener",
            "weight": 0.3333333333333333,
            "foodCategory": "sugars",
            "foodId": "food_b3755atafogvz2ac74adra225skl",
            "image": "https://www.edamam.com/food-img/0e3/0e3edc39fe123b516c4c758f4f09e99f.jpg"
          },
          {
            "text": "* 1 Tablespoon ground cumin",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cumin",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "* 1 teaspoons chipotle chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          }
        ],
        "calories": 2875.644,
        "totalWeight": 1800.7,
        "totalTime": 0,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2875.644,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 145.59936,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 47.823934,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.46464,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 57.431257,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 19.406902,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 37.914233333333335,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 35.984633333333335,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 1.9296,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 26.455763333333334,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.28396666666666665,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 332.3863533333334,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1098.48,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2056.899,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 390.8266666666667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 443.5663333333334,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6015.86,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.057766666666668,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 28.8184,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3402.8933333333334,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 106.92099999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 5.400899999999999,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 7.77883,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.25308,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 107.68321999999998,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 11.368478,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 12.155999999999999,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 12.155999999999999,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 8.4376,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 7.96,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 4.89198,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 6.7779,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1267.3743166666668,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Slow Cooker Turkey Dip Sandwiches recipes",
        "image": "/recipe-images/turkey-sandwich.jpeg",
        "url": "http://www.bobbiskozykitchen.com/2015/03/slow-cooker-turkey-dip-sandwiches.html",
        "yield": 4,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "7 tablespoons room temperature unsalted butter, divided",
          "3 tablespoons fresh thyme leaves, chopped",
          "4 cloves garlic, minced",
          "1 lemon, zested",
          "kosher salt",
          "cracked black pepper",
          "1 large onion, chopped",
          "1/2 cup chicken stock",
          "3 tablespoons Worcestershire sauce",
          "1 (4-pound) bone-in turkey breast",
          "4 demi French baguettes, sliced in half",
          "12 slices Swiss Cheese"
        ],
        "ingredients": [
          {
            "text": "7 tablespoons room temperature unsalted butter, divided",
            "quantity": 7,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 99.39999999999999,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "3 tablespoons fresh thyme leaves, chopped",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "fresh thyme",
            "weight": 7.19999999951308,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
            "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
          },
          {
            "text": "4 cloves garlic, minced",
            "quantity": 4,
            "measure": "clove",
            "food": "garlic",
            "weight": 12,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lemon, zested",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lemon",
            "weight": 58,
            "foodCategory": "fruit",
            "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
            "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
          },
          {
            "text": "kosher salt",
            "quantity": 0,
            "measure": null,
            "food": "kosher salt",
            "weight": 23.087816879997078,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "cracked black pepper",
            "quantity": 0,
            "measure": null,
            "food": "black pepper",
            "weight": 11.543908439998539,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 large onion, chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 150,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup chicken stock",
            "quantity": 0.5,
            "measure": "cup",
            "food": "chicken stock",
            "weight": 120,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "3 tablespoons Worcestershire sauce",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "Worcestershire sauce",
            "weight": 51,
            "foodCategory": "canned soup",
            "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
            "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
          },
          {
            "text": "1 (4-pound) bone-in turkey breast",
            "quantity": 4,
            "measure": "pound",
            "food": "turkey breast",
            "weight": 1814.36948,
            "foodCategory": "Poultry",
            "foodId": "food_aijy334arptsr3b4zwpdrajqapl8",
            "image": "https://www.edamam.com/food-img/3d8/3d80f3f4fcb0efcf54d094c857d74926.jpg"
          },
          {
            "text": "4 demi French baguettes, sliced in half",
            "quantity": 4,
            "measure": "<unit>",
            "food": "baguettes",
            "weight": 1200,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_bz1n7y8bupmgp0anvyqmda9dwufz",
            "image": "https://www.edamam.com/food-img/470/47053c77e167539c64fef3f2a3249bb2.jpg"
          },
          {
            "text": "12 slices Swiss Cheese",
            "quantity": 12,
            "measure": "slice",
            "food": "Swiss Cheese",
            "weight": 336,
            "foodCategory": "Cheese",
            "foodId": "food_am9c0zybyfhgn9brc0imabzslets",
            "image": "https://www.edamam.com/food-img/419/419f6ce36db411c072d0dbf6c8510897.jpg"
          }
        ],
        "calories": 8031.129285423905,
        "totalWeight": 3859.513388439512,
        "totalTime": 375,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "sandwiches"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 8031.129285423905,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 320.02449516153575,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 149.01005856668252,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.318332,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.9322608345712,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.1734542374286,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 687.3825694472602,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 652.6279606120087,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 34.75460883525146,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 74.95002101401599,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 585.4535633416888,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1587.8361458,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 9117.120975567957,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 3727.6667435472214,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 970.9018911116184,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7255.567006164616,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 73.40638389343889,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 53.81769326282717,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 6386.241884854681,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1476.3375059176406,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 63.98119999922044,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.893574289674964,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 8.318519446989704,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 145.90443453746033,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 9.910386927158704,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 2227.9697416745803,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 859.9697416745806,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 804,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 18.2496966344,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.171,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.426336647775984,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 44.209378116277605,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2031.4894896573069,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Blueberry Basil Margarita Cocktail recipes",
        "image": "/recipe-images/blueberry-margarita.jpeg",
        "url": "http://drinkwire.liquor.com/post/blueberry-basil-margarita-cocktail-recipe/",
        "yield": 4,
        "dietLabels": [
          "Low-Fat",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher",
          "Alcohol-Cocktail"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "2.0 oz. Tres Agaves Blanco Tequila",
          "1.0 oz. agave nectar",
          "12-15 blueberries",
          "1 lime squeezed",
          "A couple sprigs of basil"
        ],
        "ingredients": [
          {
            "text": "2.0 oz. Tres Agaves Blanco Tequila",
            "quantity": 2,
            "measure": "ounce",
            "food": "Tequila",
            "weight": 56.69904625,
            "foodCategory": "liquors and cocktails",
            "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
            "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
          },
          {
            "text": "1.0 oz. agave nectar",
            "quantity": 1,
            "measure": "ounce",
            "food": "agave nectar",
            "weight": 28.349523125,
            "foodCategory": "sugar syrups",
            "foodId": "food_bj8pkd1bgey1rlbp58zagbjhpfi0",
            "image": "https://www.edamam.com/food-img/3b5/3b5425ed8e35a486b4138cc8720ae9e4.jpg"
          },
          {
            "text": "12-15 blueberries",
            "quantity": 13.5,
            "measure": "<unit>",
            "food": "blueberries",
            "weight": 18.360000000000003,
            "foodCategory": "fruit",
            "foodId": "food_bgkl0cuasoeomtbolalmcauhha54",
            "image": "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png"
          },
          {
            "text": "1 lime squeezed",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "A couple sprigs of basil",
            "quantity": 2,
            "measure": "sprig",
            "food": "basil",
            "weight": 4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          }
        ],
        "calories": 243.539632975,
        "totalWeight": 174.408569375,
        "totalTime": 15,
        "cuisineType": [
          "world"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "alcohol cocktail"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 243.539632975,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 0.22018800000000005,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 0.0215208,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 0.0248792,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 0.07921560000000001,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 31.37380157500001,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 27.57568541875001,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 3.7981161562500003,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 23.101117418750007,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 20.128161418750004,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 0.7308640000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2.2505904625000004,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 30.291600000000003,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 7.681600000000001,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 95.41118092500001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 0.6028876185,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.1581556185,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 18.771161850000006,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12.450800000000001,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 21.997920000000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.031655142775000006,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.026235561850000005,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.25419567601250004,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.0451241904625,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 9.181600000000001,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 9.181600000000001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.28405199999999997,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 20.537480000000002,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 116.03912080250001,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Potato Gratin",
        "image": "/recipe-images/potatoes-gratin.jpeg",
        "url": "http://www.cookstr.com/recipes/potato-gratin-2",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 cup milk",
          "1 cup heavy cream",
          "2 cups finely sliced leeks, white part only",
          "1 tablespoon roasted garlic pur\xE9e (see note)",
          "1 tablespoon chopped rosemary leaves",
          "Pinch freshly ground nutmeg",
          "Coarse salt and freshly ground white pepper to taste",
          "5 tablespoons unsalted butter, at room temperature",
          "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices"
        ],
        "ingredients": [
          {
            "text": "1 cup milk",
            "quantity": 1,
            "measure": "cup",
            "food": "milk",
            "weight": 244,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "1 cup heavy cream",
            "quantity": 1,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 238,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "2 cups finely sliced leeks, white part only",
            "quantity": 2,
            "measure": "cup",
            "food": "leeks",
            "weight": 178,
            "foodCategory": "vegetables",
            "foodId": "food_a27jevnb06c1m9ax7k41xbbcwcuo",
            "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
          },
          {
            "text": "1 tablespoon roasted garlic pur\xE9e (see note)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "garlic",
            "weight": 8.499999999856291,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 tablespoon chopped rosemary leaves",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "rosemary",
            "weight": 1.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
            "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
          },
          {
            "text": "Pinch freshly ground nutmeg",
            "quantity": 1,
            "measure": "pinch",
            "food": "ground nutmeg",
            "weight": 0.14583333352071937,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
            "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "Coarse salt",
            "weight": 13.304075000000262,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "white pepper",
            "weight": 0,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a443px0bncpqa5avv80p3anrp26k",
            "image": "https://www.edamam.com/food-img/4f0/4f0e35fe6c042996408b337fb550324a.jpg"
          },
          {
            "text": "5 tablespoons unsalted butter, at room temperature",
            "quantity": 5,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 71,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices",
            "quantity": 4,
            "measure": "<unit>",
            "food": "Yukon Gold potatoes",
            "weight": 1476,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          }
        ],
        "calories": 2739.76762500077,
        "totalWeight": 2229.800431236176,
        "totalTime": 120,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2739.76762500077,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 155.63557208340066,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 96.38664016671514,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 2.32738,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 42.400860833339344,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 6.873602416666964,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 304.67288125004484,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 268.54834791667554,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 36.12453333336929,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 37.54896041667083,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.259086666668466,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 503.11,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5156.393388500102,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 753.6314368300897,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 435.86342097933505,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7098.92778449897,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.712683506415825,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.138100014571826,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1287.6176250001793,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1726.289291666676,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 316.5869749999608,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.4738665833336944,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.2360371249999487,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 16.685738375001428,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 5.0317103333318585,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.14883333347143,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.14883333347143,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.6471,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 5.9030000000000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.132799999999884,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 125.16649999999754,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1690.0881846123998,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Seafood Casserole",
        "image": "/recipe-images/seafood-casserol.jpeg",
        "url": "http://www.bigoven.com/recipe/Seafood-Casserole/296427",
        "yield": 6,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "6 oz pasta or noodles",
          "1/2 cup mayonnaise or salad dressing",
          "1/2 cup white wine",
          "1 can condensed cream of mushroom soup",
          "1 cup cheddar cheese",
          "1/2 tsp dry mustard",
          "8 oz, can tuna, shrimp or crab",
          "1 cup breadcrumbs"
        ],
        "ingredients": [
          {
            "text": "6 oz pasta or noodles",
            "quantity": 6,
            "measure": "ounce",
            "food": "pasta",
            "weight": 170.09713875,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1/2 cup mayonnaise or salad dressing",
            "quantity": 0.5,
            "measure": "cup",
            "food": "salad dressing",
            "weight": 125,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a67f1v3boelh4wasob4qib34t5bv",
            "image": "https://www.edamam.com/food-img/241/24178db68d42001caf980f8f209534cb.jpg"
          },
          {
            "text": "1/2 cup white wine",
            "quantity": 0.5,
            "measure": "cup",
            "food": "white wine",
            "weight": 117.6,
            "foodCategory": "wines",
            "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
            "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
          },
          {
            "text": "1 can condensed cream of mushroom soup",
            "quantity": 1,
            "measure": "can",
            "food": "condensed cream of mushroom soup",
            "weight": 303,
            "foodCategory": "canned soup",
            "foodId": "food_b628l7bbpw7rnqa1ri8egb0xetpn",
            "image": "https://www.edamam.com/food-img/545/545d0db4311588977bed0aabfa530c58.jpg"
          },
          {
            "text": "1 cup cheddar cheese",
            "quantity": 1,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 132,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "1/2 tsp dry mustard",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dry mustard",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b0xqxo3a93nsz8a6ppdilau4ujwt",
            "image": "https://www.edamam.com/food-img/9ff/9ff9e6d04cbc71ff884f3212afa0adfd.jpg"
          },
          {
            "text": "8 oz, can tuna, shrimp or crab",
            "quantity": 8,
            "measure": "ounce",
            "food": "can tuna",
            "weight": 226.796185,
            "foodCategory": "canned seafood",
            "foodId": "food_a0jj77zb6yprvtasct45abh6qkxp",
            "image": "https://www.edamam.com/food-img/b53/b53adeb03d265a094fb598dd89f33450.jpg"
          },
          {
            "text": "1 cup breadcrumbs",
            "quantity": 1,
            "measure": "cup",
            "food": "breadcrumbs",
            "weight": 108,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_ata1dxza443wfda7jb4e5b3zwt9p",
            "image": "https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
          }
        ],
        "calories": 2690.7571038625,
        "totalWeight": 1183.49332375,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2690.7571038625,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 134.158510171125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 42.130519024687494,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.6305059237000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 35.1820880252125,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.719843295,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 233.57303350462502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 221.026925064625,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 12.546108440000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.141053604625,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 116.85426525700001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 216.28662660000003,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4312.022405275,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1212.5197505875,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 248.9446060875,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1392.0777905625002,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.290660619250001,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.592083332875001,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1541.4582893875,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 391.79535145,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.071,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.351416280375,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.3694170786500002,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 34.31560067035,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.2685977671750002,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 259.985332375,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 109.86533237500001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 88.56,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 7.322902717500002,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.11955422,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.379734263125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 194.99208950874998,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 668.15201569525,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Green coconut curry with salmon",
        "image": "/recipe-images/coconut-curry-salmon.jpeg",
        "url": "http://www.aliceincookingland.com/recipe/green-coconut-curry-salmon/",
        "yield": 18,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Dairy-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Tree-Nuts",
          "Shellfish",
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "1 1/2 lb salmon",
          "1 zuchinni finely chopped",
          "2 green peppers",
          "2 cloves garlic diced",
          "1 lb mushrooms sliced",
          "2 heads baby bok choy cut into fourths",
          "3 tsp ginger finely grated",
          "4 tbsp grapeseed oil",
          "2 14-oz cans coconut milk",
          "4 tbsp green curry paste",
          "2 tbsp fish sauce",
          "1 lime juiced",
          "1/2 cup fresh basil chopped",
          "2 green onions sliced",
          "1 tsp salt",
          "1 tsp pepper",
          "1 package Aisian noodles we used Soba"
        ],
        "ingredients": [
          {
            "text": "1 1/2 lb salmon",
            "quantity": 1.5,
            "measure": "pound",
            "food": "salmon",
            "weight": 680.388555,
            "foodCategory": "seafood",
            "foodId": "food_bhncugnadgibupafbeeapbislbom",
            "image": "https://www.edamam.com/food-img/9a0/9a0f38422e9f21dcedbc2dca0d8209ac.jpg"
          },
          {
            "text": "1 zuchinni finely chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "zuchinni",
            "weight": 196,
            "foodCategory": "vegetables",
            "foodId": "food_avpihljbuwpd8ibbmahcabaros5s",
            "image": "https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg"
          },
          {
            "text": "2 green peppers",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green peppers",
            "weight": 232.57777777777778,
            "foodCategory": "vegetables",
            "foodId": "food_bz8rcwobbzm7zhb3wh2n7aznivou",
            "image": "https://www.edamam.com/food-img/629/629dc9fddc1f8aec27fa337dd6ce2b7c.jpg"
          },
          {
            "text": "2 cloves garlic diced",
            "quantity": 2,
            "measure": "clove",
            "food": "garlic",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lb mushrooms sliced",
            "quantity": 1,
            "measure": "pound",
            "food": "mushrooms",
            "weight": 453.59237,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "2 heads baby bok choy cut into fourths",
            "quantity": 2,
            "measure": "head",
            "food": "bok choy",
            "weight": 151.99999999999983,
            "foodCategory": "vegetables",
            "foodId": "food_bq7w3usaxapk30b8utp6lasy79lv",
            "image": "https://www.edamam.com/food-img/c76/c7698a4dc6baecd186476820b6b91cdc.jpg"
          },
          {
            "text": "3 tsp ginger finely grated",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "ginger",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
            "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
          },
          {
            "text": "4 tbsp grapeseed oil",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "grapeseed oil",
            "weight": 54.4,
            "foodCategory": "Oils",
            "foodId": "food_br8vwihb5tm7wybd4ppzjaox5089",
            "image": "https://www.edamam.com/food-img/88b/88bb3399c7bf214d2bce6bd86780eaf2.jpg"
          },
          {
            "text": "2 14-oz cans coconut milk",
            "quantity": 28,
            "measure": "ounce",
            "food": "coconut milk",
            "weight": 793.7866475000001,
            "foodCategory": "non-dairy beverages",
            "foodId": "food_by1k6v2adj7drhbq9w1rpbpen9ms",
            "image": "https://www.edamam.com/food-img/671/671f7528eadb1b01efb53243d0ef0f80.JPG"
          },
          {
            "text": "4 tbsp green curry paste",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "curry paste",
            "weight": 64,
            "foodCategory": "condiments and sauces",
            "foodId": "food_aojdol2are6zg7af2nincbe87jot",
            "image": "https://www.edamam.com/food-img/b6a/b6a9ebae5850f42eca0253827603ef9c.jpg"
          },
          {
            "text": "2 tbsp fish sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "fish sauce",
            "weight": 36,
            "foodCategory": "canned soup",
            "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
            "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
          },
          {
            "text": "1 lime juiced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "1/2 cup fresh basil chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "fresh basil",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          },
          {
            "text": "2 green onions sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green onions",
            "weight": 30,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 tsp pepper",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 2.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 package Aisian noodles we used Soba",
            "quantity": 1,
            "measure": "package",
            "food": "noodles",
            "weight": 340,
            "foodCategory": "grains",
            "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
            "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
          }
        ],
        "calories": 5112.068417170556,
        "totalWeight": 3132.645350277778,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5112.068417170556,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 336.96978048289225,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 181.28297571055614,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.2074,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.68709068526722,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 73.26260006699724,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 328.1063749712389,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 297.98885939653667,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 30.11751557470222,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 32.25989848546667,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 230.65632545302884,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 665.70150452552,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 6120.048996514333,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 673.4619165553777,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 988.5084524161775,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 8413.89930292511,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 51.18356467470444,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 18.335398636711112,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3885.2424455315554,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 246.90042395519998,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 345.5847355913334,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 6.220408624813333,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 4.799611279027777,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 114.07125079756834,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.403383890282219,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 1891.6150528181777,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 732.2150528181777,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 683.4000000000001,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 23.33407684378,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.9271847400000002,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 44.03291935599778,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 218.48374043807544,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2193.2876144164557,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Vegan Herb Crackers recipes",
        "image": "/recipe-images/herb-crackers.jpeg",        
        "url": "https://elanaspantry.com/herb-crackers/",
        "yield": 15,
        "dietLabels": [
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "FODMAP-Free",
          "Kosher"
        ],
        "cautions": [
          "FODMAP"
        ],
        "ingredientLines": [
          "2 cups blanched almond flour (not almond meal)",
          "\xBE teaspoon celtic sea salt",
          "2 tablespoons herbes de provence",
          "1 tablespoon olive oil",
          "2 tablespoons water"
        ],
        "ingredients": [
          {
            "text": "2 cups blanched almond flour (not almond meal)",
            "quantity": 2,
            "measure": "cup",
            "food": "blanched almond flour",
            "weight": 224,
            "foodCategory": "grains",
            "foodId": "food_aquymekalw81cfbcaho71btv3lnt",
            "image": "https://www.edamam.com/food-img/4ce/4ce26863cf14ffeb473cc6f9edcc60f0.jpg"
          },
          {
            "text": "\xBE teaspoon celtic sea salt",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "sea salt",
            "weight": 3.6406250001846567,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons herbes de provence",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "herbes de provence",
            "weight": 5.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "2 tablespoons water",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "water",
            "weight": 29.573529562,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 1445.316,
        "totalWeight": 274.08661383452016,
        "totalTime": 30,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "starter"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1445.316,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 125.81162,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 9.739500000000001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 9.875115000000001,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 1.484865,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 46.10236,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 20.920359999999995,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 25.182000000000002,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 7.8203400000000025,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 50.60074000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 633.6317435258399,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 260.2693461122648,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 12.191866138345203,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1675.5672467418017,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.174523178099317,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.33829043722872015,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1074.4284000000002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 10.260000000000002,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.7,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.027702000000000004,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.021546000000000003,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.26676000000000005,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.029700000000000008,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 14.796000000000001,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 14.796000000000001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.34117,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 100.71000000000001,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 29.967842200983043,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Baked Chicken Parm",
        "image": "/recipe-images/baked-chicken-parm.jpeg",
        "url": "https://food52.com/recipes/17016-baked-chicken-parm",
        "yield": 4,
        "dietLabels": [
          "High-Fiber",
          "Low-Fat"
        ],
        "healthLabels": [
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon oil",
          "1 1/2 cup panko",
          "1/2 cup grated parmesan cheese",
          "1/4 teaspoon salt",
          "1/4 teaspoon ground black pepper",
          "1/8 teaspoon garlic powder",
          "1 teaspoon dried italian seasoning",
          "2 large eggs",
          "2 large boneless, skinless chicken breast halves",
          "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
          "2 cups purchased marinara sauce",
          "4 servings angel hair pasta, prepared according to package instructions"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "1 1/2 cup panko",
            "quantity": 1.5,
            "measure": "cup",
            "food": "panko",
            "weight": 90,
            "foodCategory": "grains",
            "foodId": "food_a9tnk2lbj0xkckbytqnx1ajhpqbp",
            "image": null
          },
          {
            "text": "1/2 cup grated parmesan cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 74.353125,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/4 teaspoon ground black pepper",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "black pepper",
            "weight": 0.575,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1/8 teaspoon garlic powder",
            "quantity": 0.125,
            "measure": "teaspoon",
            "food": "garlic powder",
            "weight": 0.3875,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1 teaspoon dried italian seasoning",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "italian seasoning",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "2 large eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 100,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 large boneless, skinless chicken breast halves",
            "quantity": 2,
            "measure": "half",
            "food": "boneless, skinless chicken breast",
            "weight": 217.5,
            "foodCategory": "Poultry",
            "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
            "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
          },
          {
            "text": "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 66,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "2 cups purchased marinara sauce",
            "quantity": 2,
            "measure": "cup",
            "food": "marinara sauce",
            "weight": 528,
            "foodCategory": "canned soup",
            "foodId": "food_a7hv5mybkkrs3ub78yhtxafs67bu",
            "image": "https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg"
          },
          {
            "text": "4 servings angel hair pasta, prepared according to package instructions",
            "quantity": 4,
            "measure": "serving",
            "food": "angel hair pasta",
            "weight": 1200,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          }
        ],
        "calories": 6118.390125,
        "totalWeight": 2293.315625,
        "totalTime": 116,
        "cuisineType": [
          "mediterranean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 6118.390125,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 99.64538593750002,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 34.6237216875,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.913065,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 29.21728721875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 17.610497531249997,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 1004.0793118749999,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 952.744961875,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 51.33435000000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 65.13982125000001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 276.6349159375,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 659.2151250000001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4683.3015000000005,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1981.3793750000002,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 857.972,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5363.8595000000005,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 25.297121875000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 25.1352396875,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3941.5084375,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 679.0112187500001,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 11.06465,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.5054243437500001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.42291875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 62.323053718749996,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.66494884375,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.59959375,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.59959375,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.8197875000000003,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.767765625,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 19.466153125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 106.57482812500001,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 863.4466100000002,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Parmesan grissini",
        "image": "/recipe-images/parmesan-grissini.jpeg",
        "url": "https://www.goodfood.com.au/recipes/parmesan-grissini-20121001-33zi8",
        "yield": 6,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon (3 g) instant dried yeast",
          "a pinch of caster (superfine) sugar",
          "1 tablespoon extra virgin olive oil",
          "250 g (9 oz/2 cups) white strong flour",
          "60 g (2\xBC oz/\u2154 cup) grated parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon (3 g) instant dried yeast",
            "quantity": 3,
            "measure": "gram",
            "food": "yeast",
            "weight": 3,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "a pinch of caster (superfine) sugar",
            "quantity": 1,
            "measure": "pinch",
            "food": "sugar",
            "weight": 0.2604166669968817,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 tablespoon extra virgin olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "extra virgin olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "250 g (9 oz/2 cups) white strong flour",
            "quantity": 250,
            "measure": "gram",
            "food": "flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "60 g (2\xBC oz/\u2154 cup) grated parmesan cheese",
            "quantity": 60,
            "measure": "gram",
            "food": "parmesan cheese",
            "weight": 60,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 1275.297812501278,
        "totalWeight": 326.7604166669969,
        "totalTime": 90,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "biscuits and cookies"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1275.297812501278,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 31.676299999999998,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.12761,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 14.705504999999999,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.7950150000000002,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 194.2039645836635,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 186.64696458366348,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 7.557,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 1.414895833662888,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.25989583366288793,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 48.48819999999999,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 40.8,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 832.40260416667,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 748.93760416667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 83.02,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 351.4902083333399,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 3.557830208333498,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 3.6382260416667,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 705.51,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 124.19999999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.009,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6530999999999999,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.4192494791667294,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 4.4936,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.20959999999999995,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 139.39999999999998,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 139.39999999999998,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.7221,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.3,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.21925,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 9.909,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 47.4484520833334,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Easy Chili Almonds recipes",
        "image": "/recipe-images/easy-chili-almonds.jpeg",
        "url": "http://www.pumpkinnspice.com/2017/02/05/easy-chili-almonds/",
        "yield": 2,
        "dietLabels": [
          "High-Fiber",
          "Low-Carb"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "DASH",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 cups California Almonds",
          "1 tablespoon olive oil",
          "1 1/2 teaspoons chili powder",
          "1 tablespoon kosher salt",
          "2 tablespoons fresh cilantro, chopped"
        ],
        "ingredients": [
          {
            "text": "2 cups California Almonds",
            "quantity": 2,
            "measure": "cup",
            "food": "Almonds",
            "weight": 286,
            "foodCategory": "plant-based protein",
            "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
            "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons chili powder",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 4.050000000000001,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "1 tablespoon kosher salt",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "kosher salt",
            "weight": 14.562499999753793,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons fresh cilantro, chopped",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "cilantro",
            "weight": 1.999999999966186,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          }
        ],
        "calories": 1787.160999999992,
        "totalWeight": 307.0732646524249,
        "totalTime": 10,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1787.160999999992,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 156.88853999999984,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.837790999999994,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.042899999999999994,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 100.22114049999989,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 37.00658799999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 63.71924999999876,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 26.50384999999971,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 37.21539999999905,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.749594999999704,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 61.07672999999927,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 710.5504139999216,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 784.5455835165673,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 778.7697326465158,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2186.0318611720204,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.427276773352515,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.108873264652289,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1388.7699999999836,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 66.80149999988606,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.5683499999908702,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.5977649999999773,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.2959899999999447,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 10.839559999999622,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.47960699999994966,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 128.21399999997902,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 128.21399999997902,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 76.83371999999916,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 18.60784999989518,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 14.895221529273739,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Korean Seasoned Potatoes (\uAC10\uC790 \uC870&",
        "image": "/recipe-images/korean-potatoes.jpeg",
        "url": "http://www.food.com/recipe/korean-seasoned-potatoes-44048-51088-51312-390718",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 medium potatoes",
          "2 tablespoons soy sauce",
          "2 teaspoons sugar (or sweetener of your choice)",
          "1 teaspoon garlic, minced",
          "2 teaspoons sesame seeds",
          "1 -2 teaspoon sesame seed oil",
          "4 tablespoons scallions, minced"
        ],
        "ingredients": [
          {
            "text": "2 medium potatoes",
            "quantity": 2,
            "measure": "<unit>",
            "food": "potatoes",
            "weight": 426,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          },
          {
            "text": "2 tablespoons soy sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "soy sauce",
            "weight": 32,
            "foodCategory": "plant-based protein",
            "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
            "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
          },
          {
            "text": "2 teaspoons sugar (or sweetener of your choice)",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sugar",
            "weight": 8.4,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 teaspoon garlic, minced",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "garlic",
            "weight": 2.8,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "2 teaspoons sesame seeds",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sesame seeds",
            "weight": 6.000000000304327,
            "foodCategory": "plant-based protein",
            "foodId": "food_bvxfnx8bwz2q3abs04kd6bbuf9w8",
            "image": "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg"
          },
          {
            "text": "1 -2 teaspoon sesame seed oil",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "oil",
            "weight": 6.75,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "4 tablespoons scallions, minced",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "scallions",
            "weight": 24,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          }
        ],
        "calories": 483.3900000017438,
        "totalWeight": 505.9500000003043,
        "totalTime": 20,
        "cuisineType": [
          "south east asian",
          "korean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 483.3900000017438,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 10.35560000015116,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 1.058849500021172,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.026662500000000002,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 5.440138000057089,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.498037000066261,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 88.49240000007136,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 77.47360000003545,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.018800000035911,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.439200000000914,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 8.3832,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 12.891080000053957,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1788.3800000000335,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 142.6120000029672,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 148.2200000010682,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2038.376000001424,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.06680000004428,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 2.105720000023585,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 346.8440000019142,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 89.3076,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.41762000000240723,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.22781600000075167,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 5.60926000001374,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.4006800000024042,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 93.9040000002952,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 93.9040000002952,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 1.3703900000007612,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 62.63435,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 384.2389200000143,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Oven Baked Mexican Rice recipes",
        "image": "/recipe-images/mexican-rice.jpeg",
        "url": "http://keciasflavorbreakthrough.com/oven-baked-mexican-rice/",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 cup whole grain rice",
          "2 cup chicken or vegetable broth",
          "1 cup tomato sauce",
          "6 scallions chopped, divided",
          "1 jalapeno pepper, seeds, veins removed and diced",
          "\xBD bell pepper diced",
          "1 clove garlic minced",
          "\xBD cup frozen sweet corn kernels, thawed",
          "1 tsp cilantro",
          "2 tsp cumin",
          "1 tsp chili powder",
          "2 tsp salt",
          "1/2 cup shredded cheddar or Mexican blend cheese"
        ],
        "ingredients": [
          {
            "text": "1 cup whole grain rice",
            "quantity": 1,
            "measure": "cup",
            "food": "whole grain rice",
            "weight": 190,
            "foodCategory": "grains",
            "foodId": "food_aro09r9avsklizbsberuoaegj0uh",
            "image": "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg"
          },
          {
            "text": "2 cup chicken or vegetable broth",
            "quantity": 2,
            "measure": "cup",
            "food": "vegetable broth",
            "weight": 454,
            "foodCategory": "Vegan products",
            "foodId": "food_bb2qjrjamst0vmam39stubtkmrs4",
            "image": "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg"
          },
          {
            "text": "1 cup tomato sauce",
            "quantity": 1,
            "measure": "cup",
            "food": "tomato sauce",
            "weight": 245,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 scallions chopped, divided",
            "quantity": 6,
            "measure": "<unit>",
            "food": "scallions",
            "weight": 90,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 jalapeno pepper, seeds, veins removed and diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "jalapeno pepper",
            "weight": 14,
            "foodCategory": "vegetables",
            "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
            "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
          },
          {
            "text": "\xBD bell pepper diced",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "bell pepper",
            "weight": 59.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1 clove garlic minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "\xBD cup frozen sweet corn kernels, thawed",
            "quantity": 0.5,
            "measure": "cup",
            "food": "corn kernels",
            "weight": 70.5,
            "foodCategory": "vegetables",
            "foodId": "food_bljsxw8akb9zr5aj5dahpay2gxsb",
            "image": "https://www.edamam.com/food-img/34c/34c09c7af85efb3a2025167cc38af8d1.jpg"
          },
          {
            "text": "1 tsp cilantro",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "cilantro",
            "weight": 0.33333333335024,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          },
          {
            "text": "2 tsp cumin",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "cumin",
            "weight": 4.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "1 tsp chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 cup shredded cheddar or Mexican blend cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mexican blend cheese",
            "weight": 56,
            "foodCategory": "Cheese",
            "foodId": "food_ari4tsrahqllsdap5f2rkb5g60ng",
            "image": "https://www.edamam.com/food-img/8ee/8ee24c655103a961f2c48054b672a9db.jpg"
          }
        ],
        "calories": 1123.0241452052305,
        "totalWeight": 1192.4077378998313,
        "totalTime": 50,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1123.0241452052305,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 24.70364773767342,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 10.97607104170667,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.384159168186714,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.43750068367334,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 192.94110791691398,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 175.34687236822018,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 17.594235548693803,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.516731647060148,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 36.73504390126037,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 53.2,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2765.5383320000396,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 612.3098797637601,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 393.489078675556,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2051.7486483513735,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.424348741549686,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 7.386391343193232,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 969.6826463092882,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 365.3858809112703,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 129.28132405812454,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.0456329733333447,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.6373697849600275,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 13.972286409053524,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.7363836725666917,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 160.10624152709713,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 186.89624152709712,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.6890773940000001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.28166164000000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.9083901328137545,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 211.47728196646577,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 922.7590471832152,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Swedish Pancakes",
        "image": "/recipe-images/swedish-pancakes.jpeg",
        "url": "http://scratchthiswithsandy.com/2014/01/19/swedish-pancakes/",
        "yield": 6,
        "dietLabels": [
          "Balanced",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "* 4 egg",
          "* 2 cup milk",
          "* 3/4 cup flour",
          "* 1 tbl sugar",
          "* pinch of salt",
          "* 2 tbl melted butter"
        ],
        "ingredients": [
          {
            "text": "* 4 egg",
            "quantity": 4,
            "measure": "<unit>",
            "food": "egg",
            "weight": 172,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "* 2 cup milk",
            "quantity": 2,
            "measure": "cup",
            "food": "milk",
            "weight": 488,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "* 3/4 cup flour",
            "quantity": 0.75,
            "measure": "cup",
            "food": "flour",
            "weight": 93.75,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "* 1 tbl sugar",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "sugar",
            "weight": 12.4999999997887,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "* pinch of salt",
            "quantity": 1,
            "measure": "pinch",
            "food": "salt",
            "weight": 0.380208333815447,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "* 2 tbl melted butter",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "butter",
            "weight": 28.4,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          }
        ],
        "calories": 1136.8929999991822,
        "totalWeight": 795.030208333604,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "pancake"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1136.8929999991822,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 56.171189999999996,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 29.211744500000002,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.9963119999999999,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 16.3058465,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 5.489919499999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 108.71756499978872,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 106.18631499978872,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 2.53125,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 38.02556499978912,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 12.474999999789123,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.900975,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 749.6999999999999,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 606.5651460201889,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 668.8547500001135,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 90.63680208333815,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 988.9289166667011,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.266459687501484,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 4.707840208333794,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 858.546,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 693.9359999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.40719999999999995,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.66029099999996,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 1.747123,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.5101819999999999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 130.467,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 130.467,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 3.77508,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 10.21,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.86273,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 4.24925,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 577.3256204166676,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Pizza with taleggio, prosciutto and pear",
        "image": "/recipe-images/pizza-pear.jpeg",
        "url": "https://www.goodfood.com.au/recipes/pizza-with-taleggio-prosciutto-and-pear-20111018-29wks",
        "yield": 12,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "500g flour",
          "1 tbsp instant yeast",
          "1 tsp salt",
          "300ml warm water",
          "2 tbsp olive oil",
          "For the topping",
          "1-2 tbsp olive oil",
          "300g taleggio",
          "8 slices prosciutto",
          "2 pears, finely sliced",
          "handful fresh rocket"
        ],
        "ingredients": [
          {
            "text": "500g flour",
            "quantity": 500,
            "measure": "gram",
            "food": "flour",
            "weight": 500,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "1 tbsp instant yeast",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "yeast",
            "weight": 12,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "300ml warm water",
            "quantity": 300,
            "measure": "milliliter",
            "food": "water",
            "weight": 300,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 tbsp olive oil",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 27,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1-2 tbsp olive oil",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 20.25,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "300g taleggio",
            "quantity": 300,
            "measure": "gram",
            "food": "taleggio",
            "weight": 300,
            "foodCategory": "Cheese",
            "foodId": "food_b6s9dpea421339bjgiudnaoxh7nl",
            "image": "https://www.edamam.com/food-img/419/419fc950e8f2a589a11d63efb28b8bef.jpg"
          },
          {
            "text": "8 slices prosciutto",
            "quantity": 8,
            "measure": "slice",
            "food": "prosciutto",
            "weight": 120,
            "foodCategory": "cured meats",
            "foodId": "food_au1dzjfa990c8yap79k4nawq65y9",
            "image": "https://www.edamam.com/food-img/802/8029e7b80cce92694182b85a1ebd1822.jpg"
          },
          {
            "text": "2 pears, finely sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "pears",
            "weight": 372.8888888888889,
            "foodCategory": "fruit",
            "foodId": "food_bq6stkiaxkwhxia9q4v7wanjnew0",
            "image": "https://www.edamam.com/food-img/65a/65aec51d264db28bbe27117c9fdaaca7.jpg"
          },
          {
            "text": "handful fresh rocket",
            "quantity": 1,
            "measure": "handful",
            "food": "rocket",
            "weight": 2.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8z1kzrawhksuzav2g1irb6zf4zc",
            "image": "https://www.edamam.com/food-img/fa7/fa761a311efc0ec361a5eba4ed71870e.jpeg"
          }
        ],
        "calories": 3623.8616666666667,
        "totalWeight": 1654.638888888889,
        "totalTime": 120,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3623.8616666666667,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 136.36574444444446,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 56.61658555555556,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 61.39480416666666,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 10.733648055555555,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 445.1186277777778,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 416.7910722222223,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 28.327555555555556,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 39.137916666666676,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 150.66970000000003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 300,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5793.4688888888895,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1301.6325,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 236.75722222222225,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2264.848611111111,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.404700000000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 15.379438888888888,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2085.086666666667,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 729.7038888888889,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 16.445222222222224,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.729046666666667,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.533501111111111,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 18.229176111111112,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.6949627777777776,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 631.3272222222222,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 631.3272222222222,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.9644,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.2800000000000002,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 8.504591666666666,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 55.11461111111112,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 897.795861111111,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Strawberry Cheesecake recipes",
        "image": "/recipe-images/strawberry-cheesecake.jpeg",
        "url": "http://allrecipes.com/recipe/222588/strawberry-cheesecake/",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Gluten",
          "Wheat",
          "Sulfites"
        ],
        "ingredientLines": [
          "1 1/4 cups graham cracker crumbs",
          "1/4 cup white sugar",
          "2 teaspoons ground cinnamon",
          "1/3 cup butter, melted",
          "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
          "1 tablespoon cornstarch",
          "3 (8 ounce) packages cream cheese, softened",
          "1 (14 ounce) can sweetened condensed milk",
          "1/4 cup lemon juice",
          "1/2 teaspoon vanilla extract",
          "3 eggs",
          "1 tablespoon water (optional)"
        ],
        "ingredients": [
          {
            "text": "1 1/4 cups graham cracker crumbs",
            "quantity": 1.25,
            "measure": "cup",
            "food": "cracker crumbs",
            "weight": 65,
            "foodCategory": "crackers",
            "foodId": "food_bngjmfmb13ckgcaefl7gta8r5zx5",
            "image": "https://www.edamam.com/food-img/533/5335c3d911793785012a46379a6ad2d3.jpg"
          },
          {
            "text": "1/4 cup white sugar",
            "quantity": 0.25,
            "measure": "cup",
            "food": "white sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "2 teaspoons ground cinnamon",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "ground cinnamon",
            "weight": 5.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_atjxtznauw5zabaixm24xa787onz",
            "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
          },
          {
            "text": "1/3 cup butter, melted",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "butter",
            "weight": 75.66666666666666,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
            "quantity": 20,
            "measure": "ounce",
            "food": "strawberries",
            "weight": 566.9904625,
            "foodCategory": "fruit",
            "foodId": "food_b4s2ibkbrrucmbabbaxhfau8ay42",
            "image": "https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg"
          },
          {
            "text": "1 tablespoon cornstarch",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cornstarch",
            "weight": 7.999999999864745,
            "foodCategory": null,
            "foodId": "food_bevnfkfbvjm45pbbgj9nsb3ypntm",
            "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
          },
          {
            "text": "3 (8 ounce) packages cream cheese, softened",
            "quantity": 24,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 680.388555,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1 (14 ounce) can sweetened condensed milk",
            "quantity": 14,
            "measure": "ounce",
            "food": "sweetened condensed milk",
            "weight": 396.89332375000004,
            "foodCategory": "Milk",
            "foodId": "food_a89byenbz1jssabxmx7i6aa77jz1",
            "image": "https://www.edamam.com/food-img/bc9/bc97e9aa15ccef74dbad4d6267e30e3f.jpg"
          },
          {
            "text": "1/4 cup lemon juice",
            "quantity": 0.25,
            "measure": "cup",
            "food": "lemon juice",
            "weight": 61,
            "foodCategory": "100% juice",
            "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
            "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
          },
          {
            "text": "1/2 teaspoon vanilla extract",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla extract",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "3 eggs",
            "quantity": 3,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 129,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "1 tablespoon water (optional)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "water",
            "weight": 14.786764781,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 5097.185375336985,
        "totalWeight": 2055.0257726975315,
        "totalTime": 645,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5097.185375336985,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 360.2325051190833,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 199.67873967423336,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.2287733333333333,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.42800230728746,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 25.31875591992914,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 393.92277982837663,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 378.0717705783778,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 15.851009249998782,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 323.13166435175,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 97.1447459855413,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1525.9344739083335,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 3659.6764554620613,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 2110.1749002934275,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 274.24919523113937,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 3641.375844637496,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.102928053707698,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.184514197728019,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2305.5836883874827,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 3514.3330755000006,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 367.5142183675,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.9711577467083332,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.5607334889666666,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 7.099651569875,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.0063791067374999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 427.49071766249995,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 335.1907176625,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 54.599999999999994,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.724035345333334,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 8.5911179775,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.544035135416665,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 86.93748487916668,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1181.137699732458,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Mushroom and Spinach Ravioli",
        "image": "/recipe-images/spinach-ravioli.jpeg",
        "url": "http://ourlifetastesgood.blogspot.com/2012/07/mushroom-and-spinach-ravioli-with-chive.html",
        "yield": 2,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon olive oil",
          "1 1/2 teaspoons water (or more as needed)",
          "2 eggs",
          "2 cups all-purpose flour (or more as needed)",
          "1/4 teaspoon salt",
          "1 teaspoon olive oil",
          "1 clove garlic, minced",
          "1/2 chopped onion",
          "1 (8 ounce) package fresh mushrooms, chopped",
          "4 ounces cream cheese softened",
          "1/3 cup grated Parmesan Cheese",
          "1/2 cup Mozzarella Cheese",
          "1/2 cup frozen spinach, thawed and drained",
          "1 tablespoon chopped fresh chives",
          "1 tablespoon fresh parsley",
          "1/2 teaspoon ground cayenne pepper",
          "salt",
          "pepper",
          "1 egg white beaten",
          "3 tablespoons unsalted butter",
          "1 1/2 teaspoons chopped fresh chives"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons water (or more as needed)",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "water",
            "weight": 7.393382391,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 86,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 cups all-purpose flour (or more as needed)",
            "quantity": 2,
            "measure": "cup",
            "food": "all-purpose flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
            "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 clove garlic, minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1/2 chopped onion",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "onion",
            "weight": 62.5,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1 (8 ounce) package fresh mushrooms, chopped",
            "quantity": 8,
            "measure": "ounce",
            "food": "mushrooms",
            "weight": 226.796185,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "4 ounces cream cheese softened",
            "quantity": 4,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 113.3980925,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1/3 cup grated Parmesan Cheese",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Parmesan Cheese",
            "weight": 49.56875,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/2 cup Mozzarella Cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mozzarella Cheese",
            "weight": 129.9375,
            "foodCategory": "Cheese",
            "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
            "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
          },
          {
            "text": "1/2 cup frozen spinach, thawed and drained",
            "quantity": 0.5,
            "measure": "cup",
            "food": "spinach",
            "weight": 15,
            "foodCategory": "vegetables",
            "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
            "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
          },
          {
            "text": "1 tablespoon chopped fresh chives",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "chives",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          },
          {
            "text": "1 tablespoon fresh parsley",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "parsley",
            "weight": 3.8,
            "foodCategory": "vegetables",
            "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
            "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
          },
          {
            "text": "1/2 teaspoon ground cayenne pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "cayenne pepper",
            "weight": 0.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8iooz3aris8gba605l07brngnrx",
            "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
          },
          {
            "text": "salt",
            "quantity": 0,
            "measure": null,
            "food": "salt",
            "weight": 6.193763459345999,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "pepper",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 3.0968817296729996,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 egg white beaten",
            "quantity": 1,
            "measure": "<unit>",
            "food": "egg white",
            "weight": 26.4,
            "foodCategory": "Eggs",
            "foodId": "food_a7hurbpb20zs42bnwg2p8bca3ihs",
            "image": "https://www.edamam.com/food-img/b30/b304a020501418f9a63cf7f9359bc99d.jpg"
          },
          {
            "text": "3 tablespoons unsalted butter",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 42.599999999999994,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "1 1/2 teaspoons chopped fresh chives",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chives",
            "weight": 1.5,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          }
        ],
        "calories": 2523.210560191479,
        "totalWeight": 1034.356009510093,
        "totalTime": 75,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2523.210560191479,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 139.10042037038735,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 76.66771694127705,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.4291079999999998,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 41.58860721698228,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.370521302387136,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 218.72712386187592,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 206.98745093426865,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.739672927607268,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 14.017192025319906,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 101.38330313846303,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 685.5990267500001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2404.2923580980423,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1609.214281027642,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 178.172863735545,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1740.9563865685082,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 16.68506486148633,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.56972100746163,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1691.469395282883,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1318.3283641170117,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 22.894819885000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.306116973118047,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.3985371664384116,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 23.86636554774516,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.8420161031083486,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 888.1944240190444,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 233.19442401904442,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 385,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.77916245525,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.3905121750000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.1493016567386,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 167.2074463239747,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 561.1935454974051,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Cajun Pork Pinwheels",
        "image": "/recipe-images/cayun-pork-pinwheel.jpeg",
        "url": "https://www.bigoven.com/recipe/cajun-pork-pinwheels/158806",
        "yield": 6,
        "dietLabels": [
          "High-Protein",
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 pork tenderloins ; about 1 pound each",
          "1 tablespoon Vegetable oil",
          "1 cup red bell pepper ; finely chopped",
          "1/2 cup Onion ; finely chopped",
          "1/2 cup celery ; finely chopped",
          "1 teaspoon dried thyme leaves ; crushed",
          "1/4 teaspoon Garlic salt",
          "1/2 teaspoon Ground red pepper",
          "1/2 teaspoon Paprika",
          "1 tablespoon fennel seed ; crushed",
          "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)"
        ],
        "ingredients": [
          {
            "text": "2 pork tenderloins ; about 1 pound each",
            "quantity": 2,
            "measure": "pound",
            "food": "pork tenderloins",
            "weight": 907.18474,
            "foodCategory": "meats",
            "foodId": "food_bgd2x5qbzpcbz0apfim52a8wr97x",
            "image": "https://www.edamam.com/food-img/4df/4dfc18749ffa490e3d4daf9dd2ea4d34.jpg"
          },
          {
            "text": "1 tablespoon Vegetable oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "Vegetable oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
            "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
          },
          {
            "text": "1 cup red bell pepper ; finely chopped",
            "quantity": 1,
            "measure": "cup",
            "food": "red bell pepper",
            "weight": 149,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 cup Onion ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Onion",
            "weight": 80,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup celery ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "celery",
            "weight": 50.5,
            "foodCategory": "vegetables",
            "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
            "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
          },
          {
            "text": "1 teaspoon dried thyme leaves ; crushed",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried thyme",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1/4 teaspoon Garlic salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "Garlic salt",
            "weight": 0.775,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1/2 teaspoon Ground red pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "red pepper",
            "weight": 1.5520833334120565,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 teaspoon Paprika",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "Paprika",
            "weight": 1.15,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
            "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
          },
          {
            "text": "1 tablespoon fennel seed ; crushed",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "fennel seed",
            "weight": 5.8,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a7gzoswb5qrepsa8xcla8bxm5wla",
            "image": "https://www.edamam.com/food-img/a40/a4059150e503052ae5a390af6e666873.jpg"
          },
          {
            "text": "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "seasoning",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
            "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
          }
        ],
        "calories": 1277.8849994333577,
        "totalWeight": 1212.4618233334124,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1277.8849994333577,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 46.243549005900235,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.316188002930023,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.41763718108000003,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.405505878150002,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 7.625709285193389,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 23.89075312500475,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 15.242159375003098,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 8.648593750001652,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 10.573730000003305,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 182.1281044945008,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 560.18657695,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 505.07734489333643,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 207.30192601333886,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 294.8478858100095,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 4104.8568726235,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.403798837433673,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 17.090634614433537,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2208.340013956687,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 280.087270833457,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 201.65816041676715,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 8.631749814460042,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.1252729659434006,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 59.261679644134105,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.2544416604502295,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 108.37170833336955,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 108.37170833336955,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.481492615600001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.585476509,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 7.9135315232679115,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 52.6461020833372,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 905.3225831408392,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Fire Roasted Tomato Soup recipes",
        "image": "/recipe-images/tomato-soup.jpeg",
        "url": "http://therecipecritic.com/2013/02/fire-roasted-tomato-soup/",
        "yield": 8,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Mediterranean",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 medium onion, diced",
          "3 cloves garlic, minced",
          "1 T olive oil",
          "8 oz can tomato sauce",
          "6 oz can tomato paste",
          "28 oz can whole tomatoes",
          "2 14 oz cans fire roasted diced tomatoes",
          "2 cups water",
          "2 cups chicken broth",
          "2 tsp salt",
          "1/2 tsp pepper",
          "1 1/2 cups heavy cream",
          "1/4 cup parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 medium onion, diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 110,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "3 cloves garlic, minced",
            "quantity": 3,
            "measure": "clove",
            "food": "garlic",
            "weight": 9,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 T olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "8 oz can tomato sauce",
            "quantity": 8,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 226.796185,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 oz can tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "28 oz can whole tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "whole tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 14 oz cans fire roasted diced tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "diced tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 cups water",
            "quantity": 2,
            "measure": "cup",
            "food": "water",
            "weight": 474,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 cups chicken broth",
            "quantity": 2,
            "measure": "cup",
            "food": "chicken broth",
            "weight": 480,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 tsp pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 1.45,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 1/2 cups heavy cream",
            "quantity": 1.5,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 357,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "1/4 cup parmesan cheese",
            "quantity": 0.25,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 37.1765625,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 2098.9340903750003,
        "totalWeight": 3463.8814151342513,
        "totalTime": 55,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "soup"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2098.9340903750003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 157.603754438375,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 91.36432640115001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.8967418560875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.816557503037501,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 141.57510001012503,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 98.60943194137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 42.96566806875,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 91.87988720825001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 57.249755738250016,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 528.7700625,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 8040.563791133251,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1367.2937993322207,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 345.2976253638426,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6453.095646035741,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 18.285999876568027,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.353450237759252,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1129.2093990125002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 2046.1006295250002,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 267.21124150624996,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.616240673275,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.2471676422875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 26.833612026075002,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 3.018696610325001,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 230.128036275,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 230.128036275,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.0887187500000002,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.6848828125,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 24.64674290825,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 85.70992423,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 3072.464483754519,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Homemade Sweet Spaghetti Sauce",
        "image": "/recipe-images/sweet-spaghetti-sauce.jpeg",
        "url": "https://www.recipezazz.com/recipe/homemade-sweet-spaghetti-sauce-4752",
        "yield": 8,
        "dietLabels": [],
        "healthLabels": [
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon olive oil (or coconut oil)",
          "1 to 2 garlic cloves, minced",
          "1 pound ground turkey (or 1 pound lean ground beef, optional)",
          "1 can (32 ounce) tomato sauce (no-salt-added)",
          "8 ounces red wine",
          "24 ounces water (or use all water and no wine)",
          "3 cans (6 ounce) tomato paste",
          "3 to 4 tablespoons instant minced onion",
          "1/4 cup granulated sugar (more less to your taste)",
          "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
          "1 teaspoon dried basil (see note)",
          "1/2 teaspoon dried oregano",
          "1 teaspoon onion powder"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon olive oil (or coconut oil)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 to 2 garlic cloves, minced",
            "quantity": 1.5,
            "measure": "clove",
            "food": "garlic",
            "weight": 4.5,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 pound ground turkey (or 1 pound lean ground beef, optional)",
            "quantity": 1,
            "measure": "pound",
            "food": "ground turkey",
            "weight": 453.59237,
            "foodCategory": "Poultry",
            "foodId": "food_av7gav4bs6txmfb85t0ruapws8if",
            "image": "https://www.edamam.com/food-img/c1a/c1a1663042ef7f4d6d50f1f6418aaac6.jpg"
          },
          {
            "text": "1 can (32 ounce) tomato sauce (no-salt-added)",
            "quantity": 32,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 907.18474,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "8 ounces red wine",
            "quantity": 8,
            "measure": "ounce",
            "food": "red wine",
            "weight": 226.796185,
            "foodCategory": "wines",
            "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
            "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
          },
          {
            "text": "24 ounces water (or use all water and no wine)",
            "quantity": 24,
            "measure": "ounce",
            "food": "water",
            "weight": 680.388555,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "3 cans (6 ounce) tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "3 to 4 tablespoons instant minced onion",
            "quantity": 3.5,
            "measure": "tablespoon",
            "food": "onion",
            "weight": 35,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/4 cup granulated sugar (more less to your taste)",
            "quantity": 0.25,
            "measure": "cup",
            "food": "granulated sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 4.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon dried basil (see note)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried basil",
            "weight": 0.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_abrithza96sev8ae5za0paqf42o0",
            "image": "https://www.edamam.com/food-img/49a/49a878702f9b654e1a965f2f2618a341.jpg"
          },
          {
            "text": "1/2 teaspoon dried oregano",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dried oregano",
            "weight": 0.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
            "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
          },
          {
            "text": "1 teaspoon onion powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "onion powder",
            "weight": 2.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bmv8z27b1o25vcbu41ooyawd2zj4",
            "image": "https://www.edamam.com/food-img/1e7/1e73e6f5dd96bb233abc0fcc05fb0ec8.jpg"
          }
        ],
        "calories": 1565.9824562250003,
        "totalWeight": 2544.6589887499995,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack",
          "lunch/dinner"
        ],
        "dishType": [
          "condiments and sauces"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1565.9824562250003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 51.898536314125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.633647450949999,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4672001411,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.346231165462502,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 12.825390744512502,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 143.58068906012502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 121.46823527137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 22.112453788749995,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 106.04028459075,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 108.69633054550003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 312.97873530000004,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5948.538027925,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 362.68973530000005,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 359.52818212500006,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5900.798736575001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 20.922087522749997,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 14.389442611625002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1372.8893675125003,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 420.25694225000007,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 105.32690518625,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6680063943000001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.6646896178375001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 45.40809048785001,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.07339265715,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 147.753711,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 147.753711,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.535923700000001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.8143694800000003,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 22.906400355250003,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 69.2513312775,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2191.2693134367505,
            "unit": "g"
          }
        }
      }
    }
  ]
}`),xZ=({src:e,alt:t})=>S(p.exports.Suspense,{fallback:S("div",{children:"Loading..."}),children:S(Ul,{src:e,alt:t,w:"550px",h:"260px",m:"0",p:"0",objectFit:"cover"})});function SZ({recipe:e,clickFn:t}){return se(Z0,{overflow:"hidden",w:"100%",gap:1,bg:"white",cursor:"pointer",onClick:()=>{t(e)},_hover:{transform:"scale(1.03)"},children:[S(yk,{m:"0",p:"0",children:S(xZ,{src:e.image,alt:e.label})}),se(Q0,{textAlign:"center",children:[S(Ce,{textTransform:"uppercase",color:"gray.400",fontSize:16,mt:".1rem",fontWeight:"bold",children:e.mealType}),S(Ce,{fontStyle:"normal",fontSize:25,fontWeight:"bold",children:e.label}),e.healthLabels.includes("Vegan")&&e.healthLabels.includes("Vegetarian")?se(Ce,{p:1.5,mt:1,textTransform:"uppercase",children:[S(Xn,{fontWeight:"bold",colorScheme:"purple",children:"Vegan"}),S(Xn,{fontWeight:"bold",colorScheme:"purple",ml:1,children:"Vegetarian"})]}):e.healthLabels.includes("Vegan")?S(Ce,{p:1.5,mt:1,textTransform:"uppercase",children:S(Xn,{fontWeight:"bold",colorScheme:"purple",children:"Vegan"})}):e.healthLabels.includes("Vegetarian")?S(Ce,{p:1.5,mt:1,textTransform:"uppercase",children:S(Xn,{fontWeight:"bold",colorScheme:"purple",children:"Vegetarian"})}):null,e.dietLabels&&e.dietLabels.length>0?S(Ce,{fontWeight:"bold",textTransform:"uppercase",p:1.5,m:0,children:e.dietLabels.map((r,o)=>S(Xn,{fontWeight:"bold",colorScheme:"green",mr:o<e.dietLabels.length-1?1:0,children:r},o))}):null,se(Ce,{p:1.5,m:0,color:"gray.800",fontWeight:"bold",textTransform:"capitalize",children:["Dish: ",e.dishType]}),e.cautions.length>0&&se(Ht,{children:[S(Ce,{m:"0 ",p:"1",fontWeight:"normal",children:"Cautions:"}),S(Ce,{textTransform:"uppercase",children:e.cautions.map(r=>S(Xn,{fontWeight:"bold",colorScheme:"red",marginRight:"0.5rem",mt:"0.5rem",children:r},r))})]})]})]})}const CZ=({recipes:e,clickFn:t})=>{const[n,r]=p.exports.useState(""),o=e.filter(i=>Object.values(i).flat().join(" ").replace(/-/g," ").toLowerCase().includes(n.toLowerCase()));return S(Pi,{mb:"3rem",w:"100%",children:se(bv,{children:[S(bt,{w:"100%",position:"relative",children:S(bt,{children:S(Ul,{src:"https://images.pexels.com/photos/10455982/pexels-photo-10455982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:"pizza",objectFit:"cover",w:"100%",h:"30rem",mb:"3rem"})})}),se(bt,{position:"absolute",top:"12rem",left:"25%",w:"60%",children:[S(Pi,{children:S(Xl,{size:"lg",mb:"1rem",color:"green.800",children:"Find a Recipe"})}),S(Mf,{bg:"white",m:"auto",placeholder:"Search Recipes",onChange:i=>r(i.target.value),h:"3rem"})]}),S(Lf,{columns:[1,2,3,4],gap:5,transition:"all 0.3s ease",spacingX:5,w:"80%",children:o.map(i=>S(SZ,{clickFn:t,recipe:i,minHeight:"250px"},i.label))})]})})},kZ="modulepreload",_Z=function(e){return"/"+e},C2={},QE=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=_Z(a),a in C2)return;C2[a]=!0;const i=a.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(!!r)for(let c=o.length-1;c>=0;c--){const d=o[c];if(d.href===a&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${s}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":kZ,i||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),i)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())};var EZ=(...e)=>e.filter(Boolean).join(" "),k2={path:se("g",{stroke:"currentColor",strokeWidth:"1.5",children:[S("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),S("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),S("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},JE=M((e,t)=>{const{as:n,viewBox:r,color:o="currentColor",focusable:a=!1,children:i,className:s,__css:l,...u}=e,c=EZ("chakra-icon",s),d=ht("Icon",e),f={w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o,...l,...d},m={ref:t,focusable:a,className:c,__css:f},v=r!=null?r:k2.viewBox;if(n&&typeof n!="string")return S(R.svg,{as:n,...m,...u});const h=i!=null?i:k2.path;return S(R.svg,{verticalAlign:"middle",viewBox:v,...m,...u,children:h})});JE.displayName="Icon";function PZ(e){const{viewBox:t="0 0 24 24",d:n,displayName:r,defaultProps:o={}}=e,a=p.exports.Children.toArray(e.path),i=M((s,l)=>S(JE,{ref:l,viewBox:t,...o,...s,children:a.length?a:S("path",{fill:"currentColor",d:n})}));return i.displayName=r,i}var TZ=PZ({d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",displayName:"ChevronLeftIcon"});const FZ=p.exports.lazy(()=>QE(()=>Promise.resolve().then(()=>ZE),void 0).then(e=>({default:e.Center}))),AZ=p.exports.lazy(()=>QE(()=>Promise.resolve().then(()=>ZE),void 0).then(e=>({default:e.Button}))),IZ=({recipes:e,clickFn:t})=>S(Ht,{children:S(bt,{children:S(p.exports.Suspense,{fallback:S("div",{children:"Loading..."}),children:S(FZ,{children:S(Z0,{borderRadius:"xl",w:"80%",h:"100%",bg:"white",pb:"2rem",mb:"8rem",children:se(Q0,{m:"0",p:"0",children:[S(Ul,{src:e.image,alt:e.label,w:"100%",h:"350px",objectFit:"cover",overflow:"hidden"}),se(Zl,{mt:"6",spacing:"3",pl:"1.5rem",children:[se(sd,{gap:5,flexWrap:["wrap","nowrap"],flexDirection:["column","row"],children:[se(bt,{w:"50%",p:".5rem",children:[" ",S(Ce,{fontWeight:"bold",textTransform:"uppercase",fontSize:13,color:"gray.400",children:e.mealType}),S(Xl,{size:"md",children:e.label}),se(Ce,{children:["Total Cooking Time: ",e.totalTime," Minutes"," "]}),se(Ce,{children:["Servings: ",e.yield," "]}),S(Ce,{fontWeight:"bold",children:"Ingredients"}),S(Ce,{children:e.ingredientLines.map(n=>S(Ce,{children:n},n))})]}),S(vv,{}),se(bt,{w:"50%",p:".5rem",children:[" ",S(Ce,{children:"Health labels"}),S(Ce,{textTransform:"uppercase",children:e.healthLabels.map(n=>S(Xn,{fontWeight:"bold",colorScheme:"purple",marginRight:"0.5rem",mt:"0.5rem",children:n},n))}),e.dietLabels.length>0&&se(Ht,{children:[S(Ce,{m:"0 ",p:"1",fontWeight:"normal",children:"Diet"}),S(Ce,{textTransform:"uppercase",children:e.dietLabels.map(n=>S(Xn,{fontWeight:"bold",colorScheme:"red",marginRight:"0.5rem",mt:"0.5rem",children:n},n.label))})]}),e.cautions.length>0&&se(Ht,{children:[S(Ce,{m:"0 ",p:"1",fontWeight:"normal",children:"Cautions:"}),S(Ce,{textTransform:"uppercase",children:e.cautions.map(n=>S(Xn,{fontWeight:"bold",colorScheme:"red",marginRight:"0.5rem",mt:"0.5rem",children:n},n))})]}),S(Ce,{mt:".8rem",children:"Total Nutrients"}),se(sd,{flexDirection:["column","row"],flexWrap:"wrap",children:[se(bt,{mr:5,mt:2,children:[se(Ce,{children:[Math.floor(e.totalNutrients.ENERC_KCAL.quantity)," "]}),S(Ce,{children:S(ao,{variant:"outline",colorScheme:"green",textTransform:"uppercase",children:"Calories"})})]}),se(bt,{mr:5,mt:2,children:[se(Ce,{children:[" ",Math.floor(e.totalNutrients.CHOCDF.quantity)," ",e.totalNutrients.CHOCDF.unit]}),se(Ce,{children:[" ",S(ao,{variant:"outline",colorScheme:"green",textTransform:"uppercase",children:e.totalNutrients.CHOCDF.label})]})]}),se(bt,{mr:5,mt:2,children:[se(Ce,{children:[Math.floor(e.totalNutrients.PROCNT.quantity)," ",e.totalNutrients.PROCNT.unit]}),se(Ce,{children:[" ",S(ao,{variant:"outline",colorScheme:"green",textTransform:"uppercase",children:e.totalNutrients.PROCNT.label})]})]}),se(bt,{mr:5,mt:2,children:[se(Ce,{children:[Math.floor(e.totalNutrients.FAT.quantity)," ",e.totalNutrients.FAT.unit]}),se(Ce,{children:[" ",S(ao,{variant:"outline",colorScheme:"yellow",textTransform:"uppercase",children:e.totalNutrients.FAT.label})]})]}),se(bt,{mr:5,mt:2,children:[se(Ce,{children:[Math.floor(e.totalNutrients.CHOLE.quantity)," ",e.totalNutrients.CHOLE.unit]}),se(Ce,{children:[" ",S(ao,{variant:"outline",colorScheme:"pink",textTransform:"uppercase",children:e.totalNutrients.CHOLE.label})]})]}),se(bt,{mr:5,mt:2,children:[" ",se(Ce,{children:[Math.floor(e.totalNutrients.NA.quantity)," ",e.totalNutrients.NA.unit]}),se(Ce,{children:[" ",S(ao,{variant:"outline",colorScheme:"green",textTransform:"uppercase",children:e.totalNutrients.NA.label})]})]})]})]})]}),S(p.exports.Suspense,{fallback:S("div",{children:"Loading..."}),children:se(AZ,{pb:"0.2rem",pl:".5rem",bg:"blue.500",w:"fit-content",onClick:()=>t(null),color:"white",children:[S(X0,{fontSize:25,colorScheme:"white","aria-label":"previous page",icon:S(TZ,{}),onClick:()=>t(null),color:"white"}),"Back to overview"]})})]})]})})})})})}),RZ=e=>se(Ht,{children:[S(Pi,{bg:"green.500",children:S(Xl,{p:"1rem",color:"white",fontSize:"2xl",onClick:()=>{window.location.href="/"},cursor:"pointer",_hover:{color:"orange.200"},children:"Winc Recipe App"})}),e.children]}),NZ=()=>S(bt,{w:"100%",h:"10rem",bg:"gray.600",p:"2rem",children:se(bt,{w:"80%",h:"7rem",m:"auto",color:"green.200",textAlign:"Center",p:"3rem",children:[S(Ce,{children:"Winc Recipes App"}),S(Ce,{children:"Copyright \xA9 2023 All rights reserved."})]})}),MZ=()=>{const[e,t]=p.exports.useState(),n=wZ.hits.map(r=>r.recipe);return se(RZ,{children:[S(bt,{w:"100%",h:"100%",children:S(Pi,{children:S(Lf,{w:"100%",children:e?S(IZ,{recipes:e,clickFn:t}):S(CZ,{recipes:n,clickFn:t})})})}),S(NZ,{})]})};Fg.createRoot(document.getElementById("root")).render(S(P.StrictMode,{children:S(XE,{children:S(MZ,{})})}));
