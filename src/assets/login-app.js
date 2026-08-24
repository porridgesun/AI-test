(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();function Y2(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ld={exports:{}},Il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function K2(){if(Ig)return Il;Ig=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var d=null;if(c!==void 0&&(d=""+c),o.key!==void 0&&(d=""+o.key),"key"in o){c={};for(var p in o)p!=="key"&&(c[p]=o[p])}else c=o;return o=c.ref,{$$typeof:s,type:r,key:d,ref:o!==void 0?o:null,props:c}}return Il.Fragment=e,Il.jsx=i,Il.jsxs=i,Il}var Bg;function Q2(){return Bg||(Bg=1,ld.exports=K2()),ld.exports}var He=Q2(),od={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function J2(){if(zg)return rt;zg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=g&&L[g]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,E={};function S(L,K,Ee){this.props=L,this.context=K,this.refs=E,this.updater=Ee||T}S.prototype.isReactComponent={},S.prototype.setState=function(L,K){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,K,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function z(){}z.prototype=S.prototype;function N(L,K,Ee){this.props=L,this.context=K,this.refs=E,this.updater=Ee||T}var C=N.prototype=new z;C.constructor=N,D(C,S.prototype),C.isPureReactComponent=!0;var P=Array.isArray;function U(){}var I={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function O(L,K,Ee){var Ce=Ee.ref;return{$$typeof:s,type:L,key:K,ref:Ce!==void 0?Ce:null,props:Ee}}function W(L,K){return O(L.type,K,L.props)}function G(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function J(L){var K={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Ee){return K[Ee]})}var he=/\/+/g;function ve(L,K){return typeof L=="object"&&L!==null&&L.key!=null?J(""+L.key):K.toString(36)}function j(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(U,U):(L.status="pending",L.then(function(K){L.status==="pending"&&(L.status="fulfilled",L.value=K)},function(K){L.status==="pending"&&(L.status="rejected",L.reason=K)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function B(L,K,Ee,Ce,Fe){var ae=typeof L;(ae==="undefined"||ae==="boolean")&&(L=null);var Se=!1;if(L===null)Se=!0;else switch(ae){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(L.$$typeof){case s:case e:Se=!0;break;case x:return Se=L._init,B(Se(L._payload),K,Ee,Ce,Fe)}}if(Se)return Fe=Fe(L),Se=Ce===""?"."+ve(L,0):Ce,P(Fe)?(Ee="",Se!=null&&(Ee=Se.replace(he,"$&/")+"/"),B(Fe,K,Ee,"",function(nt){return nt})):Fe!=null&&(G(Fe)&&(Fe=W(Fe,Ee+(Fe.key==null||L&&L.key===Fe.key?"":(""+Fe.key).replace(he,"$&/")+"/")+Se)),K.push(Fe)),1;Se=0;var ye=Ce===""?".":Ce+":";if(P(L))for(var Ve=0;Ve<L.length;Ve++)Ce=L[Ve],ae=ye+ve(Ce,Ve),Se+=B(Ce,K,Ee,ae,Fe);else if(Ve=y(L),typeof Ve=="function")for(L=Ve.call(L),Ve=0;!(Ce=L.next()).done;)Ce=Ce.value,ae=ye+ve(Ce,Ve++),Se+=B(Ce,K,Ee,ae,Fe);else if(ae==="object"){if(typeof L.then=="function")return B(j(L),K,Ee,Ce,Fe);throw K=String(L),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Se}function V(L,K,Ee){if(L==null)return L;var Ce=[],Fe=0;return B(L,Ce,"","",function(ae){return K.call(Ee,ae,Fe++)}),Ce}function $(L){if(L._status===-1){var K=L._result;K=K(),K.then(function(Ee){(L._status===0||L._status===-1)&&(L._status=1,L._result=Ee)},function(Ee){(L._status===0||L._status===-1)&&(L._status=2,L._result=Ee)}),L._status===-1&&(L._status=0,L._result=K)}if(L._status===1)return L._result.default;throw L._result}var ge=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},be={map:V,forEach:function(L,K,Ee){V(L,function(){K.apply(this,arguments)},Ee)},count:function(L){var K=0;return V(L,function(){K++}),K},toArray:function(L){return V(L,function(K){return K})||[]},only:function(L){if(!G(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return rt.Activity=v,rt.Children=be,rt.Component=S,rt.Fragment=i,rt.Profiler=o,rt.PureComponent=N,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,rt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},rt.cache=function(L){return function(){return L.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(L,K,Ee){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Ce=D({},L.props),Fe=L.key;if(K!=null)for(ae in K.key!==void 0&&(Fe=""+K.key),K)!b.call(K,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&K.ref===void 0||(Ce[ae]=K[ae]);var ae=arguments.length-2;if(ae===1)Ce.children=Ee;else if(1<ae){for(var Se=Array(ae),ye=0;ye<ae;ye++)Se[ye]=arguments[ye+2];Ce.children=Se}return O(L.type,Fe,Ce)},rt.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},rt.createElement=function(L,K,Ee){var Ce,Fe={},ae=null;if(K!=null)for(Ce in K.key!==void 0&&(ae=""+K.key),K)b.call(K,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Fe[Ce]=K[Ce]);var Se=arguments.length-2;if(Se===1)Fe.children=Ee;else if(1<Se){for(var ye=Array(Se),Ve=0;Ve<Se;Ve++)ye[Ve]=arguments[Ve+2];Fe.children=ye}if(L&&L.defaultProps)for(Ce in Se=L.defaultProps,Se)Fe[Ce]===void 0&&(Fe[Ce]=Se[Ce]);return O(L,ae,Fe)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(L){return{$$typeof:p,render:L}},rt.isValidElement=G,rt.lazy=function(L){return{$$typeof:x,_payload:{_status:-1,_result:L},_init:$}},rt.memo=function(L,K){return{$$typeof:h,type:L,compare:K===void 0?null:K}},rt.startTransition=function(L){var K=I.T,Ee={};I.T=Ee;try{var Ce=L(),Fe=I.S;Fe!==null&&Fe(Ee,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(U,ge)}catch(ae){ge(ae)}finally{K!==null&&Ee.types!==null&&(K.types=Ee.types),I.T=K}},rt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},rt.use=function(L){return I.H.use(L)},rt.useActionState=function(L,K,Ee){return I.H.useActionState(L,K,Ee)},rt.useCallback=function(L,K){return I.H.useCallback(L,K)},rt.useContext=function(L){return I.H.useContext(L)},rt.useDebugValue=function(){},rt.useDeferredValue=function(L,K){return I.H.useDeferredValue(L,K)},rt.useEffect=function(L,K){return I.H.useEffect(L,K)},rt.useEffectEvent=function(L){return I.H.useEffectEvent(L)},rt.useId=function(){return I.H.useId()},rt.useImperativeHandle=function(L,K,Ee){return I.H.useImperativeHandle(L,K,Ee)},rt.useInsertionEffect=function(L,K){return I.H.useInsertionEffect(L,K)},rt.useLayoutEffect=function(L,K){return I.H.useLayoutEffect(L,K)},rt.useMemo=function(L,K){return I.H.useMemo(L,K)},rt.useOptimistic=function(L,K){return I.H.useOptimistic(L,K)},rt.useReducer=function(L,K,Ee){return I.H.useReducer(L,K,Ee)},rt.useRef=function(L){return I.H.useRef(L)},rt.useState=function(L){return I.H.useState(L)},rt.useSyncExternalStore=function(L,K,Ee){return I.H.useSyncExternalStore(L,K,Ee)},rt.useTransition=function(){return I.H.useTransition()},rt.version="19.2.0",rt}var Hg;function zh(){return Hg||(Hg=1,od.exports=J2()),od.exports}var F=zh();const j2=Y2(F);var cd={exports:{}},Bl={},ud={exports:{}},fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function $2(){return Vg||(Vg=1,(function(s){function e(B,V){var $=B.length;B.push(V);e:for(;0<$;){var ge=$-1>>>1,be=B[ge];if(0<o(be,V))B[ge]=V,B[$]=be,$=ge;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var V=B[0],$=B.pop();if($!==V){B[0]=$;e:for(var ge=0,be=B.length,L=be>>>1;ge<L;){var K=2*(ge+1)-1,Ee=B[K],Ce=K+1,Fe=B[Ce];if(0>o(Ee,$))Ce<be&&0>o(Fe,Ee)?(B[ge]=Fe,B[Ce]=$,ge=Ce):(B[ge]=Ee,B[K]=$,ge=K);else if(Ce<be&&0>o(Fe,$))B[ge]=Fe,B[Ce]=$,ge=Ce;else break e}}return V}function o(B,V){var $=B.sortIndex-V.sortIndex;return $!==0?$:B.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,v=null,g=3,y=!1,T=!1,D=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var V=i(h);V!==null;){if(V.callback===null)r(h);else if(V.startTime<=B)r(h),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(h)}}function P(B){if(D=!1,C(B),!T)if(i(m)!==null)T=!0,U||(U=!0,J());else{var V=i(h);V!==null&&j(P,V.startTime-B)}}var U=!1,I=-1,b=5,O=-1;function W(){return E?!0:!(s.unstable_now()-O<b)}function G(){if(E=!1,U){var B=s.unstable_now();O=B;var V=!0;try{e:{T=!1,D&&(D=!1,z(I),I=-1),y=!0;var $=g;try{t:{for(C(B),v=i(m);v!==null&&!(v.expirationTime>B&&W());){var ge=v.callback;if(typeof ge=="function"){v.callback=null,g=v.priorityLevel;var be=ge(v.expirationTime<=B);if(B=s.unstable_now(),typeof be=="function"){v.callback=be,C(B),V=!0;break t}v===i(m)&&r(m),C(B)}else r(m);v=i(m)}if(v!==null)V=!0;else{var L=i(h);L!==null&&j(P,L.startTime-B),V=!1}}break e}finally{v=null,g=$,y=!1}V=void 0}}finally{V?J():U=!1}}}var J;if(typeof N=="function")J=function(){N(G)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,ve=he.port2;he.port1.onmessage=G,J=function(){ve.postMessage(null)}}else J=function(){S(G,0)};function j(B,V){I=S(function(){B(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(B){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var $=g;g=V;try{return B()}finally{g=$}},s.unstable_requestPaint=function(){E=!0},s.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=g;g=B;try{return V()}finally{g=$}},s.unstable_scheduleCallback=function(B,V,$){var ge=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,B){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=$+be,B={id:x++,callback:V,priorityLevel:B,startTime:$,expirationTime:be,sortIndex:-1},$>ge?(B.sortIndex=$,e(h,B),i(m)===null&&B===i(h)&&(D?(z(I),I=-1):D=!0,j(P,$-ge))):(B.sortIndex=be,e(m,B),T||y||(T=!0,U||(U=!0,J()))),B},s.unstable_shouldYield=W,s.unstable_wrapCallback=function(B){var V=g;return function(){var $=g;g=V;try{return B.apply(this,arguments)}finally{g=$}}}})(fd)),fd}var Gg;function ex(){return Gg||(Gg=1,ud.exports=$2()),ud.exports}var dd={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function tx(){if(Xg)return Nn;Xg=1;var s=zh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,h,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:h,implementation:x}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,x)},Nn.flushSync=function(m){var h=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=x,r.d.f()}},Nn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,v=p(x,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):x==="script"&&r.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Nn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Nn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,v=p(x,h.crossOrigin);r.d.L(m,x,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Nn.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,h){return m(h)},Nn.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},Nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Nn.version="19.2.0",Nn}var kg;function nx(){if(kg)return dd.exports;kg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),dd.exports=tx(),dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function ix(){if(Wg)return Bl;Wg=1;var s=ex(),e=zh(),i=nx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,l=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===l)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==l.return)a=u,l=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,l=f;break}if(R===l){_=!0,l=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,l=u;break}if(R===l){_=!0,l=f,a=u;break}R=R.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),N=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case S:return"Profiler";case E:return"StrictMode";case P:return"Suspense";case U:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case N:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ve(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return ve(t(n))}catch{}}return null}var j=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ge=[],be=-1;function L(t){return{current:t}}function K(t){0>be||(t.current=ge[be],ge[be]=null,be--)}function Ee(t,n){be++,ge[be]=t.current,t.current=n}var Ce=L(null),Fe=L(null),ae=L(null),Se=L(null);function ye(t,n){switch(Ee(ae,n),Ee(Fe,t),Ee(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?sg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=sg(n),t=lg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Ce),Ee(Ce,t)}function Ve(){K(Ce),K(Fe),K(ae)}function nt(t){t.memoizedState!==null&&Ee(Se,t);var n=Ce.current,a=lg(n,t.type);n!==a&&(Ee(Fe,t),Ee(Ce,a))}function Je(t){Fe.current===t&&(K(Ce),K(Fe)),Se.current===t&&(K(Se),Nl._currentValue=$)}var qt,ft;function vt(t){if(qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qt=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+t+ft}var xt=!1;function dt(t,n){if(!t||xt)return"";xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var le=ce}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ce){le=ce}t.call(xe.prototype)}}else{try{throw Error()}catch(ce){le=ce}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&le&&typeof ce.stack=="string")return[ce.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var H=_.split(`
`),te=R.split(`
`);for(u=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(l===H.length||u===te.length)for(l=H.length-1,u=te.length-1;1<=l&&0<=u&&H[l]!==te[u];)u--;for(;1<=l&&0<=u;l--,u--)if(H[l]!==te[u]){if(l!==1||u!==1)do if(l--,u--,0>u||H[l]!==te[u]){var pe=`
`+H[l].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=l&&0<=u);break}}}finally{xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?vt(a):""}function $t(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return vt("Activity");default:return""}}function en(t){try{var n="",a=null;do n+=$t(t,a),a=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var tn=Object.prototype.hasOwnProperty,on=s.unstable_scheduleCallback,Wt=s.unstable_cancelCallback,nn=s.unstable_shouldYield,Z=s.unstable_requestPaint,zt=s.unstable_now,Rt=s.unstable_getCurrentPriorityLevel,w=s.unstable_ImmediatePriority,M=s.unstable_UserBlockingPriority,Q=s.unstable_NormalPriority,re=s.unstable_LowPriority,fe=s.unstable_IdlePriority,Te=s.log,De=s.unstable_setDisableYieldValue,ue=null,de=null;function Re(t){if(typeof Te=="function"&&De(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(ue,t)}catch{}}var Be=Math.clz32?Math.clz32:Qe,Ne=Math.log,Ue=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Ne(t)/Ue|0)|0}var je=256,it=262144,k=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function me(t,n,a){var l=t.pendingLanes;if(l===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~f,l!==0?u=Ae(l):(_&=R,_!==0?u=Ae(_):a||(a=R&~t,a!==0&&(u=Ae(a))))):(R=l&~f,R!==0?u=Ae(R):_!==0?u=Ae(_):a||(a=l&~t,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function Ze(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Xe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Kt(t,n,a,l,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,te=t.hiddenUpdates;for(a=_&~a;0<a;){var pe=31-Be(a),xe=1<<pe;R[pe]=0,H[pe]=-1;var le=te[pe];if(le!==null)for(te[pe]=null,pe=0;pe<le.length;pe++){var ce=le[pe];ce!==null&&(ce.lane&=-536870913)}a&=~xe}l!==0&&Lt(t,l,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Lt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Be(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Yn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var l=31-Be(a),u=1<<l;u&n|t[l]&n&&(t[l]|=n),a&=~u}}function Kn(t,n){var a=n&-n;return a=(a&42)!==0?1:Zs(a),(a&(t.suspendedLanes|n))!==0?0:a}function Zs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ys(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ks(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:Dg(t.type))}function Gr(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var Li=Math.random().toString(36).slice(2),fn="__reactFiber$"+Li,Tn="__reactProps$"+Li,zn="__reactContainer$"+Li,cr="__reactEvents$"+Li,eo="__reactListeners$"+Li,to="__reactHandles$"+Li,ur="__reactResources$"+Li,Aa="__reactMarker$"+Li;function Ra(t){delete t[fn],delete t[Tn],delete t[cr],delete t[eo],delete t[to]}function Ji(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[zn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=pg(t);t!==null;){if(a=t[fn])return a;t=pg(t)}return n}t=a,a=t.parentNode}return null}function ji(t){if(t=t[fn]||t[zn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function fr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ca(t){var n=t[ur];return n||(n=t[ur]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[Aa]=!0}var no=new Set,A={};function q(t,n){se(t,n),se(t+"Capture",n)}function se(t,n){for(A[t]=n,t=0;t<n.length;t++)no.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Oe={};function Ge(t){return tn.call(Oe,t)?!0:tn.call(ie,t)?!1:ne.test(t)?Oe[t]=!0:(ie[t]=!0,!1)}function Le(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+l)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t,n,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,f=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function bt(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Ke(t,n,""+t[n])}}function Qt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return t&&(l=lt(t)?t.checked?"true":"false":t.value),t=l,t!==a?(n.setValue(t),!0):!1}function Xt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nt=/[\n"\\]/g;function Ot(t){return t.replace(Nt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ze(t,n,a,l,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?ht(t,_,$e(n)):a!=null?ht(t,_,$e(a)):l!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+$e(R):t.removeAttribute("name")}function Ln(t,n,a,l,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){bt(t);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),bt(t)}function ht(t,n,a){n==="number"&&Xt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xn(t,n,a,l){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Qn(t,n,a){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$e(a):""}function vi(t,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(r(92));if(j(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=$e(n),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),bt(t)}function Jn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jt(t,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,a):typeof a!="number"||a===0||Pt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function xi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&a[u]!==l&&Jt(t,u,l)}else for(var f in n)n.hasOwnProperty(f)&&Jt(t,f,n[f])}function Dt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dr(t){return wa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function $i(){}var iu=null;function au(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xr=null,kr=null;function rp(t){var n=ji(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(ze(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==t&&l.form===t.form){var u=l[Tn]||null;if(!u)throw Error(r(90));ze(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===t.form&&Qt(l)}break e;case"textarea":Qn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&xn(t,!!a.multiple,n,!1)}}}var ru=!1;function sp(t,n,a){if(ru)return t(n,a);ru=!0;try{var l=t(n);return l}finally{if(ru=!1,(Xr!==null||kr!==null)&&(ko(),Xr&&(n=Xr,t=kr,kr=Xr=null,rp(n),t)))for(n=0;n<t.length;n++)rp(t[n])}}function Qs(t,n){var a=t.stateNode;if(a===null)return null;var l=a[Tn]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(ea)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){su=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{su=!1}var Da=null,lu=null,io=null;function lp(){if(io)return io;var t,n=lu,a=n.length,l,u="value"in Da?Da.value:Da.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(l=1;l<=_&&n[a-l]===u[f-l];l++);return io=u.slice(t,1<l?1-l:void 0)}function ao(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function op(){return!1}function Hn(t){function n(a,l,u,f,_){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ro:op,this.isPropagationStopped=op,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),n}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},so=Hn(hr),js=v({},hr,{view:0,detail:0}),q_=Hn(js),ou,cu,$s,lo=v({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(ou=t.screenX-$s.screenX,cu=t.screenY-$s.screenY):cu=ou=0,$s=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:cu}}),cp=Hn(lo),Z_=v({},lo,{dataTransfer:0}),Y_=Hn(Z_),K_=v({},js,{relatedTarget:0}),uu=Hn(K_),Q_=v({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),J_=Hn(Q_),j_=v({},hr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$_=Hn(j_),ev=v({},hr,{data:0}),up=Hn(ev),tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function av(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=iv[t])?!!n[t]:!1}function fu(){return av}var rv=v({},js,{key:function(t){if(t.key){var n=tv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ao(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(t){return t.type==="keypress"?ao(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ao(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sv=Hn(rv),lv=v({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=Hn(lv),ov=v({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),cv=Hn(ov),uv=v({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fv=Hn(uv),dv=v({},lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hv=Hn(dv),pv=v({},hr,{newState:0,oldState:0}),mv=Hn(pv),gv=[9,13,27,32],du=ea&&"CompositionEvent"in window,el=null;ea&&"documentMode"in document&&(el=document.documentMode);var _v=ea&&"TextEvent"in window&&!el,dp=ea&&(!du||el&&8<el&&11>=el),hp=" ",pp=!1;function mp(t,n){switch(t){case"keyup":return gv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function vv(t,n){switch(t){case"compositionend":return gp(n);case"keypress":return n.which!==32?null:(pp=!0,hp);case"textInput":return t=n.data,t===hp&&pp?null:t;default:return null}}function xv(t,n){if(Wr)return t==="compositionend"||!du&&mp(t,n)?(t=lp(),io=lu=Da=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var Sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Sv[t.type]:n==="textarea"}function vp(t,n,a,l){Xr?kr?kr.push(l):kr=[l]:Xr=l,n=Jo(n,"onChange"),0<n.length&&(a=new so("onChange","change",null,a,l),t.push({event:a,listeners:n}))}var tl=null,nl=null;function Mv(t){eg(t,0)}function oo(t){var n=fr(t);if(Qt(n))return t}function xp(t,n){if(t==="change")return n}var Sp=!1;if(ea){var hu;if(ea){var pu="oninput"in document;if(!pu){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),pu=typeof Mp.oninput=="function"}hu=pu}else hu=!1;Sp=hu&&(!document.documentMode||9<document.documentMode)}function yp(){tl&&(tl.detachEvent("onpropertychange",Ep),nl=tl=null)}function Ep(t){if(t.propertyName==="value"&&oo(nl)){var n=[];vp(n,nl,t,au(t)),sp(Mv,n)}}function yv(t,n,a){t==="focusin"?(yp(),tl=n,nl=a,tl.attachEvent("onpropertychange",Ep)):t==="focusout"&&yp()}function Ev(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oo(nl)}function bv(t,n){if(t==="click")return oo(n)}function Tv(t,n){if(t==="input"||t==="change")return oo(n)}function Av(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:Av;function il(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!tn.call(n,u)||!jn(t[u],n[u]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tp(t,n){var a=bp(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=n&&l>=n)return{node:a,offset:n-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bp(a)}}function Ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Rp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Xt(t.document)}return n}function mu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Rv=ea&&"documentMode"in document&&11>=document.documentMode,qr=null,gu=null,al=null,_u=!1;function Cp(t,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_u||qr==null||qr!==Xt(l)||(l=qr,"selectionStart"in l&&mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),al&&il(al,l)||(al=l,l=Jo(gu,"onSelect"),0<l.length&&(n=new so("onSelect","select",null,n,a),t.push({event:n,listeners:l}),n.target=qr)))}function pr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Zr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},vu={},wp={};ea&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function mr(t){if(vu[t])return vu[t];if(!Zr[t])return t;var n=Zr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in wp)return vu[t]=n[a];return t}var Dp=mr("animationend"),Up=mr("animationiteration"),Lp=mr("animationstart"),Cv=mr("transitionrun"),wv=mr("transitionstart"),Dv=mr("transitioncancel"),Np=mr("transitionend"),Op=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function Si(t,n){Op.set(t,n),q(n,[t])}var co=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],Yr=0,Su=0;function uo(){for(var t=Yr,n=Su=Yr=0;n<t;){var a=oi[n];oi[n++]=null;var l=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,l!==null&&u!==null){var _=l.pending;_===null?u.next=u:(u.next=_.next,_.next=u),l.pending=u}f!==0&&Pp(a,u,f)}}function fo(t,n,a,l){oi[Yr++]=t,oi[Yr++]=n,oi[Yr++]=a,oi[Yr++]=l,Su|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Mu(t,n,a,l){return fo(t,n,a,l),ho(t)}function gr(t,n){return fo(t,null,null,n),ho(t)}function Pp(t,n,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Be(a),t=f.hiddenUpdates,l=t[u],l===null?t[u]=[n]:l.push(n),n.lane=a|536870912),f):null}function ho(t){if(50<Al)throw Al=0,Uf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Kr={};function Uv(t,n,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,l){return new Uv(t,n,a,l)}function yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function po(t,n,a,l,u,f){var _=0;if(l=t,typeof t=="function")yu(t)&&(_=1);else if(typeof t=="string")_=F2(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=$n(31,a,n,u),t.elementType=O,t.lanes=f,t;case D:return _r(a.children,u,f,n);case E:_=8,u|=24;break;case S:return t=$n(12,a,n,u|2),t.elementType=S,t.lanes=f,t;case P:return t=$n(13,a,n,u),t.elementType=P,t.lanes=f,t;case U:return t=$n(19,a,n,u),t.elementType=U,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:_=10;break e;case z:_=9;break e;case C:_=11;break e;case I:_=14;break e;case b:_=16,l=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=$n(_,a,n,u),n.elementType=t,n.type=l,n.lanes=f,n}function _r(t,n,a,l){return t=$n(7,t,l,n),t.lanes=a,t}function Eu(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function Ip(t){var n=$n(18,null,null,0);return n.stateNode=t,n}function bu(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Bp=new WeakMap;function ci(t,n){if(typeof t=="object"&&t!==null){var a=Bp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:en(n)},Bp.set(t,n),n)}return{value:t,source:n,stack:en(n)}}var Qr=[],Jr=0,mo=null,rl=0,ui=[],fi=0,Ua=null,Oi=1,Pi="";function na(t,n){Qr[Jr++]=rl,Qr[Jr++]=mo,mo=t,rl=n}function zp(t,n,a){ui[fi++]=Oi,ui[fi++]=Pi,ui[fi++]=Ua,Ua=t;var l=Oi;t=Pi;var u=32-Be(l)-1;l&=~(1<<u),a+=1;var f=32-Be(n)+u;if(30<f){var _=u-u%5;f=(l&(1<<_)-1).toString(32),l>>=_,u-=_,Oi=1<<32-Be(n)+u|a<<u|l,Pi=f+t}else Oi=1<<f|a<<u|l,Pi=t}function Tu(t){t.return!==null&&(na(t,1),zp(t,1,0))}function Au(t){for(;t===mo;)mo=Qr[--Jr],Qr[Jr]=null,rl=Qr[--Jr],Qr[Jr]=null;for(;t===Ua;)Ua=ui[--fi],ui[fi]=null,Pi=ui[--fi],ui[fi]=null,Oi=ui[--fi],ui[fi]=null}function Hp(t,n){ui[fi++]=Oi,ui[fi++]=Pi,ui[fi++]=Ua,Oi=n.id,Pi=n.overflow,Ua=t}var An=null,Zt=null,St=!1,La=null,di=!1,Ru=Error(r(519));function Na(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sl(ci(n,t)),Ru}function Vp(t){var n=t.stateNode,a=t.type,l=t.memoizedProps;switch(n[fn]=t,n[Tn]=l,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<Cl.length;a++)mt(Cl[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Ln(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),vi(n,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||ag(n.textContent,a)?(l.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),l.onScroll!=null&&mt("scroll",n),l.onScrollEnd!=null&&mt("scrollend",n),l.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||Na(t,!0)}function Gp(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:An=An.return}}function jr(t){if(t!==An)return!1;if(!St)return Gp(t),St=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||qf(t.type,t.memoizedProps)),a=!a),a&&Zt&&Na(t),Gp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Zt=hg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Zt=hg(t)}else n===27?(n=Zt,Za(t.type)?(t=Jf,Jf=null,Zt=t):Zt=n):Zt=An?pi(t.stateNode.nextSibling):null;return!0}function vr(){Zt=An=null,St=!1}function Cu(){var t=La;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),La=null),t}function sl(t){La===null?La=[t]:La.push(t)}var wu=L(null),xr=null,ia=null;function Oa(t,n,a){Ee(wu,n._currentValue),n._currentValue=a}function aa(t){t._currentValue=wu.current,K(wu)}function Du(t,n,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===a)break;t=t.return}}function Uu(t,n,a,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Du(f.return,a,t),l||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Du(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function $r(t,n,a,l){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var R=u.type;jn(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===Se.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Nl):t=[Nl])}u=u.return}t!==null&&Uu(n,t,a,l),n.flags|=262144}function go(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){xr=t,ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Xp(xr,t)}function _o(t,n){return xr===null&&Sr(t),Xp(t,n)}function Xp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(t===null)throw Error(r(308));ia=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ia=ia.next=n;return a}var Lv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Nv=s.unstable_scheduleCallback,Ov=s.unstable_NormalPriority,hn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new Lv,data:new Map,refCount:0}}function ll(t){t.refCount--,t.refCount===0&&Nv(Ov,function(){t.controller.abort()})}var ol=null,Nu=0,es=0,ts=null;function Pv(t,n){if(ol===null){var a=ol=[];Nu=0,es=If(),ts={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Nu++,n.then(kp,kp),n}function kp(){if(--Nu===0&&ol!==null){ts!==null&&(ts.status="fulfilled");var t=ol;ol=null,es=0,ts=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Fv(t,n){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var Wp=B.S;B.S=function(t,n){Cm=zt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Pv(t,n),Wp!==null&&Wp(t,n)};var Mr=L(null);function Ou(){var t=Mr.current;return t!==null?t:kt.pooledCache}function vo(t,n){n===null?Ee(Mr,Mr.current):Ee(Mr,n.pool)}function qp(){var t=Ou();return t===null?null:{parent:hn._currentValue,pool:t}}var ns=Error(r(460)),Pu=Error(r(474)),xo=Error(r(542)),So={then:function(){}};function Zp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Yp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t;default:if(typeof n.status=="string")n.then($i,$i);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t}throw Er=n,ns}}function yr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Er=a,ns):a}}var Er=null;function Kp(){if(Er===null)throw Error(r(459));var t=Er;return Er=null,t}function Qp(t){if(t===ns||t===xo)throw Error(r(483))}var is=null,cl=0;function Mo(t){var n=cl;return cl+=1,is===null&&(is=[]),Yp(is,t,n)}function ul(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function yo(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Jp(t){function n(Y,X){if(t){var ee=Y.deletions;ee===null?(Y.deletions=[X],Y.flags|=16):ee.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function l(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=ta(Y,X),Y.index=0,Y.sibling=null,Y}function f(Y,X,ee){return Y.index=ee,t?(ee=Y.alternate,ee!==null?(ee=ee.index,ee<X?(Y.flags|=67108866,X):ee):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,X,ee,_e){return X===null||X.tag!==6?(X=Eu(ee,Y.mode,_e),X.return=Y,X):(X=u(X,ee),X.return=Y,X)}function H(Y,X,ee,_e){var et=ee.type;return et===D?pe(Y,X,ee.props.children,_e,ee.key):X!==null&&(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===b&&yr(et)===X.type)?(X=u(X,ee.props),ul(X,ee),X.return=Y,X):(X=po(ee.type,ee.key,ee.props,null,Y.mode,_e),ul(X,ee),X.return=Y,X)}function te(Y,X,ee,_e){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=bu(ee,Y.mode,_e),X.return=Y,X):(X=u(X,ee.children||[]),X.return=Y,X)}function pe(Y,X,ee,_e,et){return X===null||X.tag!==7?(X=_r(ee,Y.mode,_e,et),X.return=Y,X):(X=u(X,ee),X.return=Y,X)}function xe(Y,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Eu(""+X,Y.mode,ee),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return ee=po(X.type,X.key,X.props,null,Y.mode,ee),ul(ee,X),ee.return=Y,ee;case T:return X=bu(X,Y.mode,ee),X.return=Y,X;case b:return X=yr(X),xe(Y,X,ee)}if(j(X)||J(X))return X=_r(X,Y.mode,ee,null),X.return=Y,X;if(typeof X.then=="function")return xe(Y,Mo(X),ee);if(X.$$typeof===N)return xe(Y,_o(Y,X),ee);yo(Y,X)}return null}function le(Y,X,ee,_e){var et=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return et!==null?null:R(Y,X,""+ee,_e);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:return ee.key===et?H(Y,X,ee,_e):null;case T:return ee.key===et?te(Y,X,ee,_e):null;case b:return ee=yr(ee),le(Y,X,ee,_e)}if(j(ee)||J(ee))return et!==null?null:pe(Y,X,ee,_e,null);if(typeof ee.then=="function")return le(Y,X,Mo(ee),_e);if(ee.$$typeof===N)return le(Y,X,_o(Y,ee),_e);yo(Y,ee)}return null}function ce(Y,X,ee,_e,et){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Y=Y.get(ee)||null,R(X,Y,""+_e,et);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case y:return Y=Y.get(_e.key===null?ee:_e.key)||null,H(X,Y,_e,et);case T:return Y=Y.get(_e.key===null?ee:_e.key)||null,te(X,Y,_e,et);case b:return _e=yr(_e),ce(Y,X,ee,_e,et)}if(j(_e)||J(_e))return Y=Y.get(ee)||null,pe(X,Y,_e,et,null);if(typeof _e.then=="function")return ce(Y,X,ee,Mo(_e),et);if(_e.$$typeof===N)return ce(Y,X,ee,_o(X,_e),et);yo(X,_e)}return null}function qe(Y,X,ee,_e){for(var et=null,Tt=null,Ye=X,ct=X=0,_t=null;Ye!==null&&ct<ee.length;ct++){Ye.index>ct?(_t=Ye,Ye=null):_t=Ye.sibling;var At=le(Y,Ye,ee[ct],_e);if(At===null){Ye===null&&(Ye=_t);break}t&&Ye&&At.alternate===null&&n(Y,Ye),X=f(At,X,ct),Tt===null?et=At:Tt.sibling=At,Tt=At,Ye=_t}if(ct===ee.length)return a(Y,Ye),St&&na(Y,ct),et;if(Ye===null){for(;ct<ee.length;ct++)Ye=xe(Y,ee[ct],_e),Ye!==null&&(X=f(Ye,X,ct),Tt===null?et=Ye:Tt.sibling=Ye,Tt=Ye);return St&&na(Y,ct),et}for(Ye=l(Ye);ct<ee.length;ct++)_t=ce(Ye,Y,ct,ee[ct],_e),_t!==null&&(t&&_t.alternate!==null&&Ye.delete(_t.key===null?ct:_t.key),X=f(_t,X,ct),Tt===null?et=_t:Tt.sibling=_t,Tt=_t);return t&&Ye.forEach(function(ja){return n(Y,ja)}),St&&na(Y,ct),et}function tt(Y,X,ee,_e){if(ee==null)throw Error(r(151));for(var et=null,Tt=null,Ye=X,ct=X=0,_t=null,At=ee.next();Ye!==null&&!At.done;ct++,At=ee.next()){Ye.index>ct?(_t=Ye,Ye=null):_t=Ye.sibling;var ja=le(Y,Ye,At.value,_e);if(ja===null){Ye===null&&(Ye=_t);break}t&&Ye&&ja.alternate===null&&n(Y,Ye),X=f(ja,X,ct),Tt===null?et=ja:Tt.sibling=ja,Tt=ja,Ye=_t}if(At.done)return a(Y,Ye),St&&na(Y,ct),et;if(Ye===null){for(;!At.done;ct++,At=ee.next())At=xe(Y,At.value,_e),At!==null&&(X=f(At,X,ct),Tt===null?et=At:Tt.sibling=At,Tt=At);return St&&na(Y,ct),et}for(Ye=l(Ye);!At.done;ct++,At=ee.next())At=ce(Ye,Y,ct,At.value,_e),At!==null&&(t&&At.alternate!==null&&Ye.delete(At.key===null?ct:At.key),X=f(At,X,ct),Tt===null?et=At:Tt.sibling=At,Tt=At);return t&&Ye.forEach(function(Z2){return n(Y,Z2)}),St&&na(Y,ct),et}function Gt(Y,X,ee,_e){if(typeof ee=="object"&&ee!==null&&ee.type===D&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:e:{for(var et=ee.key;X!==null;){if(X.key===et){if(et=ee.type,et===D){if(X.tag===7){a(Y,X.sibling),_e=u(X,ee.props.children),_e.return=Y,Y=_e;break e}}else if(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===b&&yr(et)===X.type){a(Y,X.sibling),_e=u(X,ee.props),ul(_e,ee),_e.return=Y,Y=_e;break e}a(Y,X);break}else n(Y,X);X=X.sibling}ee.type===D?(_e=_r(ee.props.children,Y.mode,_e,ee.key),_e.return=Y,Y=_e):(_e=po(ee.type,ee.key,ee.props,null,Y.mode,_e),ul(_e,ee),_e.return=Y,Y=_e)}return _(Y);case T:e:{for(et=ee.key;X!==null;){if(X.key===et)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){a(Y,X.sibling),_e=u(X,ee.children||[]),_e.return=Y,Y=_e;break e}else{a(Y,X);break}else n(Y,X);X=X.sibling}_e=bu(ee,Y.mode,_e),_e.return=Y,Y=_e}return _(Y);case b:return ee=yr(ee),Gt(Y,X,ee,_e)}if(j(ee))return qe(Y,X,ee,_e);if(J(ee)){if(et=J(ee),typeof et!="function")throw Error(r(150));return ee=et.call(ee),tt(Y,X,ee,_e)}if(typeof ee.then=="function")return Gt(Y,X,Mo(ee),_e);if(ee.$$typeof===N)return Gt(Y,X,_o(Y,ee),_e);yo(Y,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,X!==null&&X.tag===6?(a(Y,X.sibling),_e=u(X,ee),_e.return=Y,Y=_e):(a(Y,X),_e=Eu(ee,Y.mode,_e),_e.return=Y,Y=_e),_(Y)):a(Y,X)}return function(Y,X,ee,_e){try{cl=0;var et=Gt(Y,X,ee,_e);return is=null,et}catch(Ye){if(Ye===ns||Ye===xo)throw Ye;var Tt=$n(29,Ye,null,Y.mode);return Tt.lanes=_e,Tt.return=Y,Tt}finally{}}}var br=Jp(!0),jp=Jp(!1),Pa=!1;function Fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ct&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=ho(t),Pp(t,null,a),n}return fo(t,l,n,a),ho(t)}function fl(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,Yn(t,a)}}function Bu(t,n){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var zu=!1;function dl(){if(zu){var t=ts;if(t!==null)throw t}}function hl(t,n,a,l){zu=!1;var u=t.updateQueue;Pa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,te=H.next;H.next=null,_===null?f=te:_.next=te,_=H;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,R=pe.lastBaseUpdate,R!==_&&(R===null?pe.firstBaseUpdate=te:R.next=te,pe.lastBaseUpdate=H))}if(f!==null){var xe=u.baseState;_=0,pe=te=H=null,R=f;do{var le=R.lane&-536870913,ce=le!==R.lane;if(ce?(gt&le)===le:(l&le)===le){le!==0&&le===es&&(zu=!0),pe!==null&&(pe=pe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,tt=R;le=n;var Gt=a;switch(tt.tag){case 1:if(qe=tt.payload,typeof qe=="function"){xe=qe.call(Gt,xe,le);break e}xe=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=tt.payload,le=typeof qe=="function"?qe.call(Gt,xe,le):qe,le==null)break e;xe=v({},xe,le);break e;case 2:Pa=!0}}le=R.callback,le!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[le]:ce.push(le))}else ce={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pe===null?(te=pe=ce,H=xe):pe=pe.next=ce,_|=le;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);pe===null&&(H=xe),u.baseState=H,u.firstBaseUpdate=te,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),Ga|=_,t.lanes=_,t.memoizedState=xe}}function $p(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function e0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)$p(a[t],n)}var as=L(null),Eo=L(0);function t0(t,n){t=ha,Ee(Eo,t),Ee(as,n),ha=t|n.baseLanes}function Hu(){Ee(Eo,ha),Ee(as,as.current)}function Vu(){ha=Eo.current,K(as),K(Eo)}var ei=L(null),hi=null;function Ba(t){var n=t.alternate;Ee(cn,cn.current&1),Ee(ei,t),hi===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(hi=t)}function Gu(t){Ee(cn,cn.current),Ee(ei,t),hi===null&&(hi=t)}function n0(t){t.tag===22?(Ee(cn,cn.current),Ee(ei,t),hi===null&&(hi=t)):za()}function za(){Ee(cn,cn.current),Ee(ei,ei.current)}function ti(t){K(ei),hi===t&&(hi=null),K(cn)}var cn=L(0);function bo(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Kf(a)||Qf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ra=0,ot=null,Ht=null,pn=null,To=!1,rs=!1,Tr=!1,Ao=0,pl=0,ss=null,Iv=0;function an(){throw Error(r(321))}function Xu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function ku(t,n,a,l,u,f){return ra=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?z0:sf,Tr=!1,f=a(l,u),Tr=!1,rs&&(f=a0(n,a,l,u)),i0(t),f}function i0(t){B.H=_l;var n=Ht!==null&&Ht.next!==null;if(ra=0,pn=Ht=ot=null,To=!1,pl=0,ss=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&go(t)&&(mn=!0))}function a0(t,n,a,l){ot=t;var u=0;do{if(rs&&(ss=null),pl=0,rs=!1,25<=u)throw Error(r(301));if(u+=1,pn=Ht=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=H0,f=n(a,l)}while(rs);return f}function Bv(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?ml(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(ot.flags|=1024),n}function Wu(){var t=Ao!==0;return Ao=0,t}function qu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Zu(t){if(To){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}To=!1}ra=0,pn=Ht=ot=null,rs=!1,pl=Ao=0,ss=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ot.memoizedState=pn=t:pn=pn.next=t,pn}function un(){if(Ht===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=pn===null?ot.memoizedState:pn.next;if(n!==null)pn=n,Ht=t;else{if(t===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},pn===null?ot.memoizedState=pn=t:pn=pn.next=t}return pn}function Ro(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ml(t){var n=pl;return pl+=1,ss===null&&(ss=[]),t=Yp(ss,t,n),n=ot,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?z0:sf),t}function Co(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ml(t);if(t.$$typeof===N)return Rn(t)}throw Error(r(438,String(t)))}function Yu(t){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=ot.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ro(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),l=0;l<t;l++)a[l]=W;return n.index++,a}function sa(t,n){return typeof n=="function"?n(t):n}function wo(t){var n=un();return Ku(n,Ht,t)}function Ku(t,n,a){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var u=t.baseQueue,f=l.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,l.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,H=null,te=n,pe=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(gt&xe)===xe:(ra&xe)===xe){var le=te.revertLane;if(le===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===es&&(pe=!0);else if((ra&le)===le){te=te.next,le===es&&(pe=!0);continue}else xe={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(R=H=xe,_=f):H=H.next=xe,ot.lanes|=le,Ga|=le;xe=te.action,Tr&&a(f,xe),f=te.hasEagerState?te.eagerState:a(f,xe)}else le={lane:xe,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(R=H=le,_=f):H=H.next=le,ot.lanes|=xe,Ga|=xe;te=te.next}while(te!==null&&te!==n);if(H===null?_=f:H.next=R,!jn(f,t.memoizedState)&&(mn=!0,pe&&(a=ts,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=H,l.lastRenderedState=f}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Qu(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);jn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,l]}function r0(t,n,a){var l=ot,u=un(),f=St;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!jn((Ht||u).memoizedState,a);if(_&&(u.memoizedState=a,mn=!0),u=u.queue,$u(o0.bind(null,l,u,t),[t]),u.getSnapshot!==n||_||pn!==null&&pn.memoizedState.tag&1){if(l.flags|=2048,ls(9,{destroy:void 0},l0.bind(null,l,u,a,n),null),kt===null)throw Error(r(349));f||(ra&127)!==0||s0(l,n,a)}return a}function s0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=Ro(),ot.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function l0(t,n,a,l){n.value=a,n.getSnapshot=l,c0(n)&&u0(t)}function o0(t,n,a){return a(function(){c0(n)&&u0(t)})}function c0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function u0(t){var n=gr(t,2);n!==null&&Wn(n,t,2)}function Ju(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Tr){Re(!0);try{a()}finally{Re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},n}function f0(t,n,a,l){return t.baseState=a,Ku(t,Ht,typeof l=="function"?l:sa)}function zv(t,n,a,l,u){if(Lo(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};B.T!==null?a(!0):f.isTransition=!1,l(f),a=n.pending,a===null?(f.next=n.pending=f,d0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function d0(t,n){var a=n.action,l=n.payload,u=t.state;if(n.isTransition){var f=B.T,_={};B.T=_;try{var R=a(u,l),H=B.S;H!==null&&H(_,R),h0(t,n,R)}catch(te){ju(t,n,te)}finally{f!==null&&_.types!==null&&(f.types=_.types),B.T=f}}else try{f=a(u,l),h0(t,n,f)}catch(te){ju(t,n,te)}}function h0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){p0(t,n,l)},function(l){return ju(t,n,l)}):p0(t,n,a)}function p0(t,n,a){n.status="fulfilled",n.value=a,m0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,d0(t,a)))}function ju(t,n,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,m0(n),n=n.next;while(n!==l)}t.action=null}function m0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function g0(t,n){return n}function _0(t,n){if(St){var a=kt.formState;if(a!==null){e:{var l=ot;if(St){if(Zt){t:{for(var u=Zt,f=di;u.nodeType!==8;){if(!f){u=null;break t}if(u=pi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Zt=pi(u.nextSibling),l=u.data==="F!";break e}}Na(l)}l=!1}l&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:g0,lastRenderedState:n},a.queue=l,a=F0.bind(null,ot,l),l.dispatch=a,l=Ju(!1),f=rf.bind(null,ot,!1,l.queue),l=Fn(),u={state:n,dispatch:null,action:t,pending:null},l.queue=u,a=zv.bind(null,ot,u,f,a),u.dispatch=a,l.memoizedState=t,[n,a,!1]}function v0(t){var n=un();return x0(n,Ht,t)}function x0(t,n,a){if(n=Ku(t,n,g0)[0],t=wo(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=ml(n)}catch(_){throw _===ns?xo:_}else l=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,ls(9,{destroy:void 0},Hv.bind(null,u,a),null)),[l,f,t]}function Hv(t,n){t.action=n}function S0(t){var n=un(),a=Ht;if(a!==null)return x0(n,a,t);un(),n=n.memoizedState,a=un();var l=a.queue.dispatch;return a.memoizedState=t,[n,l,!1]}function ls(t,n,a,l){return t={tag:t,create:a,deps:l,inst:n,next:null},n=ot.updateQueue,n===null&&(n=Ro(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,n.lastEffect=t),t}function M0(){return un().memoizedState}function Do(t,n,a,l){var u=Fn();ot.flags|=t,u.memoizedState=ls(1|n,{destroy:void 0},a,l===void 0?null:l)}function Uo(t,n,a,l){var u=un();l=l===void 0?null:l;var f=u.memoizedState.inst;Ht!==null&&l!==null&&Xu(l,Ht.memoizedState.deps)?u.memoizedState=ls(n,f,a,l):(ot.flags|=t,u.memoizedState=ls(1|n,f,a,l))}function y0(t,n){Do(8390656,8,t,n)}function $u(t,n){Uo(2048,8,t,n)}function Vv(t){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=Ro(),ot.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function E0(t){var n=un().memoizedState;return Vv({ref:n,nextImpl:t}),function(){if((Ct&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function b0(t,n){return Uo(4,2,t,n)}function T0(t,n){return Uo(4,4,t,n)}function A0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function R0(t,n,a){a=a!=null?a.concat([t]):null,Uo(4,4,A0.bind(null,n,t),a)}function ef(){}function C0(t,n){var a=un();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&Xu(n,l[1])?l[0]:(a.memoizedState=[t,n],t)}function w0(t,n){var a=un();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&Xu(n,l[1]))return l[0];if(l=t(),Tr){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[l,n],l}function tf(t,n,a){return a===void 0||(ra&1073741824)!==0&&(gt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Dm(),ot.lanes|=t,Ga|=t,a)}function D0(t,n,a,l){return jn(a,n)?a:as.current!==null?(t=tf(t,a,l),jn(t,n)||(mn=!0),t):(ra&42)===0||(ra&1073741824)!==0&&(gt&261930)===0?(mn=!0,t.memoizedState=a):(t=Dm(),ot.lanes|=t,Ga|=t,n)}function U0(t,n,a,l,u){var f=V.p;V.p=f!==0&&8>f?f:8;var _=B.T,R={};B.T=R,rf(t,!1,n,a);try{var H=u(),te=B.S;if(te!==null&&te(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pe=Fv(H,l);gl(t,n,pe,ai(t))}else gl(t,n,l,ai(t))}catch(xe){gl(t,n,{then:function(){},status:"rejected",reason:xe},ai())}finally{V.p=f,_!==null&&R.types!==null&&(_.types=R.types),B.T=_}}function Gv(){}function nf(t,n,a,l){if(t.tag!==5)throw Error(r(476));var u=L0(t).queue;U0(t,u,n,$,a===null?Gv:function(){return N0(t),a(l)})}function L0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function N0(t){var n=L0(t);n.next===null&&(n=t.alternate.memoizedState),gl(t,n.next.queue,{},ai())}function af(){return Rn(Nl)}function O0(){return un().memoizedState}function P0(){return un().memoizedState}function Xv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();t=Fa(a);var l=Ia(n,t,a);l!==null&&(Wn(l,n,a),fl(l,n,a)),n={cache:Lu()},t.payload=n;return}n=n.return}}function kv(t,n,a){var l=ai();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Lo(t)?I0(n,a):(a=Mu(t,n,a,l),a!==null&&(Wn(a,t,l),B0(a,n,l)))}function F0(t,n,a){var l=ai();gl(t,n,a,l)}function gl(t,n,a,l){var u={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lo(t))I0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,jn(R,_))return fo(t,n,u,0),kt===null&&uo(),!1}catch{}finally{}if(a=Mu(t,n,u,l),a!==null)return Wn(a,t,l),B0(a,n,l),!0}return!1}function rf(t,n,a,l){if(l={lane:2,revertLane:If(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Lo(t)){if(n)throw Error(r(479))}else n=Mu(t,a,l,2),n!==null&&Wn(n,t,2)}function Lo(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function I0(t,n){rs=To=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function B0(t,n,a){if((a&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,Yn(t,a)}}var _l={readContext:Rn,use:Co,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};_l.useEffectEvent=an;var z0={readContext:Rn,use:Co,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:y0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Do(4194308,4,A0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Do(4194308,4,t,n)},useInsertionEffect:function(t,n){Do(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var l=t();if(Tr){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[l,n],l},useReducer:function(t,n,a){var l=Fn();if(a!==void 0){var u=a(n);if(Tr){Re(!0);try{a(n)}finally{Re(!1)}}}else u=n;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=kv.bind(null,ot,t),[l.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ju(t);var n=t.queue,a=F0.bind(null,ot,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ef,useDeferredValue:function(t,n){var a=Fn();return tf(a,t,n)},useTransition:function(){var t=Ju(!1);return t=U0.bind(null,ot,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var l=ot,u=Fn();if(St){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(gt&127)!==0||s0(l,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,y0(o0.bind(null,l,f,t),[t]),l.flags|=2048,ls(9,{destroy:void 0},l0.bind(null,l,f,a,n),null),a},useId:function(){var t=Fn(),n=kt.identifierPrefix;if(St){var a=Pi,l=Oi;a=(l&~(1<<32-Be(l)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ao++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Iv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:af,useFormState:_0,useActionState:_0,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rf.bind(null,ot,!0,a),a.dispatch=n,[t,n]},useMemoCache:Yu,useCacheRefresh:function(){return Fn().memoizedState=Xv.bind(null,ot)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Ct&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},sf={readContext:Rn,use:Co,useCallback:C0,useContext:Rn,useEffect:$u,useImperativeHandle:R0,useInsertionEffect:b0,useLayoutEffect:T0,useMemo:w0,useReducer:wo,useRef:M0,useState:function(){return wo(sa)},useDebugValue:ef,useDeferredValue:function(t,n){var a=un();return D0(a,Ht.memoizedState,t,n)},useTransition:function(){var t=wo(sa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ml(t),n]},useSyncExternalStore:r0,useId:O0,useHostTransitionStatus:af,useFormState:v0,useActionState:v0,useOptimistic:function(t,n){var a=un();return f0(a,Ht,t,n)},useMemoCache:Yu,useCacheRefresh:P0};sf.useEffectEvent=E0;var H0={readContext:Rn,use:Co,useCallback:C0,useContext:Rn,useEffect:$u,useImperativeHandle:R0,useInsertionEffect:b0,useLayoutEffect:T0,useMemo:w0,useReducer:Qu,useRef:M0,useState:function(){return Qu(sa)},useDebugValue:ef,useDeferredValue:function(t,n){var a=un();return Ht===null?tf(a,t,n):D0(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Qu(sa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ml(t),n]},useSyncExternalStore:r0,useId:O0,useHostTransitionStatus:af,useFormState:S0,useActionState:S0,useOptimistic:function(t,n){var a=un();return Ht!==null?f0(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:P0};H0.useEffectEvent=E0;function lf(t,n,a,l){n=t.memoizedState,a=a(l,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var of={enqueueSetState:function(t,n,a){t=t._reactInternals;var l=ai(),u=Fa(l);u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,l),n!==null&&(Wn(n,t,l),fl(n,t,l))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var l=ai(),u=Fa(l);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,l),n!==null&&(Wn(n,t,l),fl(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ai(),l=Fa(a);l.tag=2,n!=null&&(l.callback=n),n=Ia(t,l,a),n!==null&&(Wn(n,t,a),fl(n,t,a))}};function V0(t,n,a,l,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,f,_):n.prototype&&n.prototype.isPureReactComponent?!il(a,l)||!il(u,f):!0}function G0(t,n,a,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==t&&of.enqueueReplaceState(n,n.state,null)}function Ar(t,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function X0(t){co(t)}function k0(t){console.error(t)}function W0(t){co(t)}function No(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function q0(t,n,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function cf(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){No(t,n)},a}function Z0(t){return t=Fa(t),t.tag=3,t}function Y0(t,n,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;t.payload=function(){return u(f)},t.callback=function(){q0(n,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){q0(n,a,l),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function Wv(t,n,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Wo():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===So?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Of(t,l,u)),!1;case 22:return a.flags|=65536,l===So?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Of(t,l,u)),!1}throw Error(r(435,a.tag))}return Of(t,l,u),Wo(),!1}if(St)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==Ru&&(t=Error(r(422),{cause:l}),sl(ci(t,a)))):(l!==Ru&&(n=Error(r(423),{cause:l}),sl(ci(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=ci(l,a),u=cf(t.stateNode,l,u),Bu(t,u),rn!==4&&(rn=2)),!1;var f=Error(r(520),{cause:l});if(f=ci(f,a),Tl===null?Tl=[f]:Tl.push(f),rn!==4&&(rn=2),n===null)return!0;l=ci(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=cf(a.stateNode,l,t),Bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Xa===null||!Xa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Z0(u),Y0(u,t,a,l),Bu(a,u),!1}a=a.return}while(a!==null);return!1}var uf=Error(r(461)),mn=!1;function Cn(t,n,a,l){n.child=t===null?jp(n,null,a,l):br(n,t.child,a,l)}function K0(t,n,a,l,u){a=a.render;var f=n.ref;if("ref"in l){var _={};for(var R in l)R!=="ref"&&(_[R]=l[R])}else _=l;return Sr(n),l=ku(t,n,a,_,f,u),R=Wu(),t!==null&&!mn?(qu(t,n,u),la(t,n,u)):(St&&R&&Tu(n),n.flags|=1,Cn(t,n,l,u),n.child)}function Q0(t,n,a,l,u){if(t===null){var f=a.type;return typeof f=="function"&&!yu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,J0(t,n,f,l,u)):(t=po(a.type,null,l,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!vf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:il,a(_,l)&&t.ref===n.ref)return la(t,n,u)}return n.flags|=1,t=ta(f,l),t.ref=n.ref,t.return=n,n.child=t}function J0(t,n,a,l,u){if(t!==null){var f=t.memoizedProps;if(il(f,l)&&t.ref===n.ref)if(mn=!1,n.pendingProps=l=f,vf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,la(t,n,u)}return ff(t,n,a,l,u)}function j0(t,n,a,l){var u=l.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(l=n.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~f}else l=0,n.child=null;return $0(t,n,f,a,l)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vo(n,f!==null?f.cachePool:null),f!==null?t0(n,f):Hu(),n0(n);else return l=n.lanes=536870912,$0(t,n,f!==null?f.baseLanes|a:a,a,l)}else f!==null?(vo(n,f.cachePool),t0(n,f),za(),n.memoizedState=null):(t!==null&&vo(n,null),Hu(),za());return Cn(t,n,u,a),n.child}function vl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $0(t,n,a,l,u){var f=Ou();return f=f===null?null:{parent:hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&vo(n,null),Hu(),n0(n),t!==null&&$r(t,n,l,!0),n.childLanes=u,null}function Oo(t,n){return n=Fo({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function em(t,n,a){return br(n,t.child,null,a),t=Oo(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function qv(t,n,a){var l=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(St){if(l.mode==="hidden")return t=Oo(n,l),n.lanes=536870912,vl(null,t);if(Gu(n),(t=Zt)?(t=dg(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Ip(t),a.return=n,n.child=a,An=n,Zt=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return Oo(n,l)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Gu(n),u)if(n.flags&256)n.flags&=-257,n=em(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||$r(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(l=kt,l!==null&&(_=Kn(l,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,gr(t,_),Wn(l,t,_),uf;Wo(),n=em(t,n,a)}else t=f.treeContext,Zt=pi(_.nextSibling),An=n,St=!0,La=null,di=!1,t!==null&&Hp(n,t),n=Oo(n,l),n.flags|=4096;return n}return t=ta(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Po(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ff(t,n,a,l,u){return Sr(n),a=ku(t,n,a,l,void 0,u),l=Wu(),t!==null&&!mn?(qu(t,n,u),la(t,n,u)):(St&&l&&Tu(n),n.flags|=1,Cn(t,n,a,u),n.child)}function tm(t,n,a,l,u,f){return Sr(n),n.updateQueue=null,a=a0(n,l,a,u),i0(t),l=Wu(),t!==null&&!mn?(qu(t,n,f),la(t,n,f)):(St&&l&&Tu(n),n.flags|=1,Cn(t,n,a,f),n.child)}function nm(t,n,a,l,u){if(Sr(n),n.stateNode===null){var f=Kr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Rn(_)),f=new a(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=of,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},Fu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Rn(_):Kr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(lf(n,a,_,l),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&of.enqueueReplaceState(f,f.state,null),hl(n,l,f,u),dl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,H=Ar(a,R);f.props=H;var te=f.context,pe=a.contextType;_=Kr,typeof pe=="object"&&pe!==null&&(_=Rn(pe));var xe=a.getDerivedStateFromProps;pe=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||te!==_)&&G0(n,f,l,_),Pa=!1;var le=n.memoizedState;f.state=le,hl(n,l,f,u),dl(),te=n.memoizedState,R||le!==te||Pa?(typeof xe=="function"&&(lf(n,a,xe,l),te=n.memoizedState),(H=Pa||V0(n,a,H,l,le,te,_))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=te),f.props=l,f.state=te,f.context=_,l=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,Iu(t,n),_=n.memoizedProps,pe=Ar(a,_),f.props=pe,xe=n.pendingProps,le=f.context,te=a.contextType,H=Kr,typeof te=="object"&&te!==null&&(H=Rn(te)),R=a.getDerivedStateFromProps,(te=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xe||le!==H)&&G0(n,f,l,H),Pa=!1,le=n.memoizedState,f.state=le,hl(n,l,f,u),dl();var ce=n.memoizedState;_!==xe||le!==ce||Pa||t!==null&&t.dependencies!==null&&go(t.dependencies)?(typeof R=="function"&&(lf(n,a,R,l),ce=n.memoizedState),(pe=Pa||V0(n,a,pe,l,le,ce,H)||t!==null&&t.dependencies!==null&&go(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,ce,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,ce,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=ce),f.props=l,f.state=ce,f.context=H,l=pe):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),l=!1)}return f=l,Po(t,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&l?(n.child=br(n,t.child,null,u),n.child=br(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=la(t,n,u),t}function im(t,n,a,l){return vr(),n.flags|=256,Cn(t,n,a,l),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(t){return{baseLanes:t,cachePool:qp()}}function pf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function am(t,n,a){var l=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(St){if(u?Ba(n):za(),(t=Zt)?(t=dg(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Ip(t),a.return=n,n.child=a,An=n,Zt=null)):t=null,t===null)throw Na(n);return Qf(t)?n.lanes=32:n.lanes=536870912,null}var R=l.children;return l=l.fallback,u?(za(),u=n.mode,R=Fo({mode:"hidden",children:R},u),l=_r(l,u,a,null),R.return=n,l.return=n,R.sibling=l,n.child=R,l=n.child,l.memoizedState=hf(a),l.childLanes=pf(t,_,a),n.memoizedState=df,vl(null,l)):(Ba(n),mf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(Ba(n),n.flags&=-257,n=gf(t,n,a)):n.memoizedState!==null?(za(),n.child=t.child,n.flags|=128,n=null):(za(),R=l.fallback,u=n.mode,l=Fo({mode:"visible",children:l.children},u),R=_r(R,u,a,null),R.flags|=2,l.return=n,R.return=n,l.sibling=R,n.child=l,br(n,t.child,null,a),l=n.child,l.memoizedState=hf(a),l.childLanes=pf(t,_,a),n.memoizedState=df,n=vl(null,l));else if(Ba(n),Qf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var te=_.dgst;_=te,l=Error(r(419)),l.stack="",l.digest=_,sl({value:l,source:null,stack:null}),n=gf(t,n,a)}else if(mn||$r(t,n,a,!1),_=(a&t.childLanes)!==0,mn||_){if(_=kt,_!==null&&(l=Kn(_,a),l!==0&&l!==H.retryLane))throw H.retryLane=l,gr(t,l),Wn(_,t,l),uf;Kf(R)||Wo(),n=gf(t,n,a)}else Kf(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Zt=pi(R.nextSibling),An=n,St=!0,La=null,di=!1,t!==null&&Hp(n,t),n=mf(n,l.children),n.flags|=4096);return n}return u?(za(),R=l.fallback,u=n.mode,H=t.child,te=H.sibling,l=ta(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,te!==null?R=ta(te,R):(R=_r(R,u,a,null),R.flags|=2),R.return=n,l.return=n,l.sibling=R,n.child=l,vl(null,l),l=n.child,R=t.child.memoizedState,R===null?R=hf(a):(u=R.cachePool,u!==null?(H=hn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=qp(),R={baseLanes:R.baseLanes|a,cachePool:u}),l.memoizedState=R,l.childLanes=pf(t,_,a),n.memoizedState=df,vl(t.child,l)):(Ba(n),a=t.child,t=a.sibling,a=ta(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function mf(t,n){return n=Fo({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Fo(t,n){return t=$n(22,t,null,n),t.lanes=0,t}function gf(t,n,a){return br(n,t.child,null,a),t=mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function rm(t,n,a){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Du(t.return,n,a)}function _f(t,n,a,l,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=l,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function sm(t,n,a){var l=n.pendingProps,u=l.revealOrder,f=l.tail;l=l.children;var _=cn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,Ee(cn,_),Cn(t,n,l,a),l=St?rl:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rm(t,a,n);else if(t.tag===19)rm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&bo(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,f,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&bo(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}_f(n,!0,a,null,f,l);break;case"together":_f(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function la(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ta(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ta(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&go(t)))}function Zv(t,n,a){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),Oa(n,hn,t.memoizedState.cache),vr();break;case 27:case 5:nt(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Gu(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?am(t,n,a):(Ba(n),t=la(t,n,a),t!==null?t.sibling:null);Ba(n);break;case 19:var u=(t.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||($r(t,n,a,!1),l=(a&n.childLanes)!==0),u){if(l)return sm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ee(cn,cn.current),l)break;return null;case 22:return n.lanes=0,j0(t,n,a,n.pendingProps);case 24:Oa(n,hn,t.memoizedState.cache)}return la(t,n,a)}function lm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!vf(t,a)&&(n.flags&128)===0)return mn=!1,Zv(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,St&&(n.flags&1048576)!==0&&zp(n,rl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=yr(n.elementType),n.type=t,typeof t=="function")yu(t)?(l=Ar(t,l),n.tag=1,n=nm(null,n,t,l,a)):(n.tag=0,n=ff(null,n,t,l,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=K0(null,n,t,l,a);break e}else if(u===I){n.tag=14,n=Q0(null,n,t,l,a);break e}}throw n=ve(t)||t,Error(r(306,n,""))}}return n;case 0:return ff(t,n,n.type,n.pendingProps,a);case 1:return l=n.type,u=Ar(l,n.pendingProps),nm(t,n,l,u,a);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var f=n.memoizedState;u=f.element,Iu(t,n),hl(n,l,null,a);var _=n.memoizedState;if(l=_.cache,Oa(n,hn,l),l!==f.cache&&Uu(n,[hn],a,!0),dl(),l=_.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=im(t,n,l,a);break e}else if(l!==u){u=ci(Error(r(424)),n),sl(u),n=im(t,n,l,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=pi(t.firstChild),An=n,St=!0,La=null,di=!0,a=jp(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vr(),l===u){n=la(t,n,a);break e}Cn(t,n,l,a)}n=n.child}return n;case 26:return Po(t,n),t===null?(a=vg(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,t=n.pendingProps,l=jo(ae.current).createElement(a),l[fn]=n,l[Tn]=t,wn(l,a,t),dn(l),n.stateNode=l):n.memoizedState=vg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&St&&(l=n.stateNode=mg(n.type,n.pendingProps,ae.current),An=n,di=!0,u=Zt,Za(n.type)?(Jf=u,Zt=pi(l.firstChild)):Zt=u),Cn(t,n,n.pendingProps.children,a),Po(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&St&&((u=l=Zt)&&(l=E2(l,n.type,n.pendingProps,di),l!==null?(n.stateNode=l,An=n,Zt=pi(l.firstChild),di=!1,u=!0):u=!1),u||Na(n)),nt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,l=f.children,qf(u,f)?l=null:_!==null&&qf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=ku(t,n,Bv,null,null,a),Nl._currentValue=u),Po(t,n),Cn(t,n,l,a),n.child;case 6:return t===null&&St&&((t=a=Zt)&&(a=b2(a,n.pendingProps,di),a!==null?(n.stateNode=a,An=n,Zt=null,t=!0):t=!1),t||Na(n)),null;case 13:return am(t,n,a);case 4:return ye(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=br(n,null,l,a):Cn(t,n,l,a),n.child;case 11:return K0(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,Oa(n,n.type,l.value),Cn(t,n,l.children,a),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,Sr(n),u=Rn(u),l=l(u),n.flags|=1,Cn(t,n,l,a),n.child;case 14:return Q0(t,n,n.type,n.pendingProps,a);case 15:return J0(t,n,n.type,n.pendingProps,a);case 19:return sm(t,n,a);case 31:return qv(t,n,a);case 22:return j0(t,n,a,n.pendingProps);case 24:return Sr(n),l=Rn(hn),t===null?(u=Ou(),u===null&&(u=kt,f=Lu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:l,cache:u},Fu(n),Oa(n,hn,u)):((t.lanes&a)!==0&&(Iu(t,n),hl(n,null,null,a),dl()),u=t.memoizedState,f=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,hn,l)):(l=f.cache,Oa(n,hn,l),l!==u.cache&&Uu(n,[hn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function oa(t){t.flags|=4}function xf(t,n,a,l,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Om())t.flags|=8192;else throw Er=So,Pu}else t.flags&=-16777217}function om(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Eg(n))if(Om())t.flags|=8192;else throw Er=So,Pu}function Io(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Me():536870912,t.lanes|=n,fs|=n)}function xl(t,n){if(!St)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,n}function Yv(t,n,a){var l=n.pendingProps;switch(Au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),aa(hn),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(jr(n)?oa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cu())),Yt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(oa(n),f!==null?(Yt(n),om(n,f)):(Yt(n),xf(n,u,null,l,a))):f?f!==t.memoizedState?(oa(n),Yt(n),om(n,f)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&oa(n),Yt(n),xf(n,u,t,l,a)),null;case 27:if(Je(n),a=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&oa(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=Ce.current,jr(n)?Vp(n):(t=mg(u,l,a),n.stateNode=t,oa(n))}return Yt(n),null;case 5:if(Je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&oa(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(f=Ce.current,jr(n))Vp(n);else{var _=jo(ae.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof l.is=="string"?_.createElement("select",{is:l.is}):_.createElement("select"),l.multiple?f.multiple=!0:l.size&&(f.size=l.size);break;default:f=typeof l.is=="string"?_.createElement(u,{is:l.is}):_.createElement(u)}}f[fn]=n,f[Tn]=l;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(wn(f,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&oa(n)}}return Yt(n),xf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&oa(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,jr(n)){if(t=n.stateNode,a=n.memoizedProps,l=null,u=An,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||ag(t.nodeValue,a)),t||Na(n,!0)}else t=jo(t).createTextNode(l),t[fn]=n,n.stateNode=t}return Yt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(l=jr(n),a!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[fn]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else a=Cu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Yt(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=jr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[fn]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),u=!1}else u=Cu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),f=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Io(n,n.updateQueue),Yt(n),null);case 4:return Ve(),t===null&&Vf(n.stateNode.containerInfo),Yt(n),null;case 10:return aa(n.type),Yt(n),null;case 19:if(K(cn),l=n.memoizedState,l===null)return Yt(n),null;if(u=(n.flags&128)!==0,f=l.rendering,f===null)if(u)xl(l,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=bo(t),f!==null){for(n.flags|=128,xl(l,!1),t=f.updateQueue,n.updateQueue=t,Io(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Fp(a,t),a=a.sibling;return Ee(cn,cn.current&1|2),St&&na(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&zt()>Go&&(n.flags|=128,u=!0,xl(l,!1),n.lanes=4194304)}else{if(!u)if(t=bo(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Io(n,t),xl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!f.alternate&&!St)return Yt(n),null}else 2*zt()-l.renderingStartTime>Go&&a!==536870912&&(n.flags|=128,u=!0,xl(l,!1),n.lanes=4194304);l.isBackwards?(f.sibling=n.child,n.child=f):(t=l.last,t!==null?t.sibling=f:n.child=f,l.last=f)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=zt(),t.sibling=null,a=cn.current,Ee(cn,u?a&1|2:a&1),St&&na(n,l.treeForkCount),t):(Yt(n),null);case 22:case 23:return ti(n),Vu(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Io(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),t!==null&&K(Mr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(hn),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Kv(t,n){switch(Au(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return aa(hn),Ve(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(r(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(cn),null;case 4:return Ve(),null;case 10:return aa(n.type),null;case 22:case 23:return ti(n),Vu(),t!==null&&K(Mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return aa(hn),null;case 25:return null;default:return null}}function cm(t,n){switch(Au(n),n.tag){case 3:aa(hn),Ve();break;case 26:case 27:case 5:Je(n);break;case 4:Ve();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:K(cn);break;case 10:aa(n.type);break;case 22:case 23:ti(n),Vu(),t!==null&&K(Mr);break;case 24:aa(hn)}}function Sl(t,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&t)===t){l=void 0;var f=a.create,_=a.inst;l=f(),_.destroy=l}a=a.next}while(a!==u)}}catch(R){It(n,n.return,R)}}function Ha(t,n,a){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&t)===t){var _=l.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var H=a,te=R;try{te()}catch(pe){It(u,H,pe)}}}l=l.next}while(l!==f)}}catch(pe){It(n,n.return,pe)}}function um(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{e0(n,a)}catch(l){It(t,t.return,l)}}}function fm(t,n,a){a.props=Ar(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){It(t,n,l)}}function Ml(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(u){It(t,n,u)}}function Fi(t,n){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){It(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){It(t,n,u)}else a.current=null}function dm(t){var n=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){It(t,t.return,u)}}function Sf(t,n,a){try{var l=t.stateNode;_2(l,t.type,a,n),l[Tn]=n}catch(u){It(t,t.return,u)}}function hm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function Mf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(l!==4&&(l===27&&Za(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(yf(t,n,a),t=t.sibling;t!==null;)yf(t,n,a),t=t.sibling}function Bo(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(l!==4&&(l===27&&Za(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Bo(t,n,a),t=t.sibling;t!==null;)Bo(t,n,a),t=t.sibling}function pm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,l,a),n[fn]=t,n[Tn]=a}catch(f){It(t,t.return,f)}}var ca=!1,gn=!1,Ef=!1,mm=typeof WeakSet=="function"?WeakSet:Set,En=null;function Qv(t,n){if(t=t.containerInfo,kf=rc,t=Rp(t),mu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,H=-1,te=0,pe=0,xe=t,le=null;t:for(;;){for(var ce;xe!==a||u!==0&&xe.nodeType!==3||(R=_+u),xe!==f||l!==0&&xe.nodeType!==3||(H=_+l),xe.nodeType===3&&(_+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)le=xe,xe=ce;for(;;){if(xe===t)break t;if(le===a&&++te===u&&(R=_),le===f&&++pe===l&&(H=_),(ce=xe.nextSibling)!==null)break;xe=le,le=xe.parentNode}xe=ce}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wf={focusedElem:t,selectionRange:a},rc=!1,En=n;En!==null;)if(n=En,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,En=t;else for(;En!==null;){switch(n=En,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var qe=Ar(a.type,u);t=l.getSnapshotBeforeUpdate(qe,f),l.__reactInternalSnapshotBeforeUpdate=t}catch(tt){It(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Yf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Yf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,En=t;break}En=n.return}}function gm(t,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:fa(t,a),l&4&&Sl(5,a);break;case 1:if(fa(t,a),l&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){It(a,a.return,_)}else{var u=Ar(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){It(a,a.return,_)}}l&64&&um(a),l&512&&Ml(a,a.return);break;case 3:if(fa(t,a),l&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{e0(t,n)}catch(_){It(a,a.return,_)}}break;case 27:n===null&&l&4&&pm(a);case 26:case 5:fa(t,a),n===null&&l&4&&dm(a),l&512&&Ml(a,a.return);break;case 12:fa(t,a);break;case 31:fa(t,a),l&4&&xm(t,a);break;case 13:fa(t,a),l&4&&Sm(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=r2.bind(null,a),T2(t,a))));break;case 22:if(l=a.memoizedState!==null||ca,!l){n=n!==null&&n.memoizedState!==null||gn,u=ca;var f=gn;ca=l,(gn=n)&&!f?da(t,a,(a.subtreeFlags&8772)!==0):fa(t,a),ca=u,gn=f}break;case 30:break;default:fa(t,a)}}function _m(t){var n=t.alternate;n!==null&&(t.alternate=null,_m(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ra(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Vn=!1;function ua(t,n,a){for(a=a.child;a!==null;)vm(t,n,a),a=a.sibling}function vm(t,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:gn||Fi(a,n),ua(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Fi(a,n);var l=jt,u=Vn;Za(a.type)&&(jt=a.stateNode,Vn=!1),ua(t,n,a),Dl(a.stateNode),jt=l,Vn=u;break;case 5:gn||Fi(a,n);case 6:if(l=jt,u=Vn,jt=null,ua(t,n,a),jt=l,Vn=u,jt!==null)if(Vn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(a.stateNode)}catch(f){It(a,n,f)}else try{jt.removeChild(a.stateNode)}catch(f){It(a,n,f)}break;case 18:jt!==null&&(Vn?(t=jt,ug(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xs(t)):ug(jt,a.stateNode));break;case 4:l=jt,u=Vn,jt=a.stateNode.containerInfo,Vn=!0,ua(t,n,a),jt=l,Vn=u;break;case 0:case 11:case 14:case 15:Ha(2,a,n),gn||Ha(4,a,n),ua(t,n,a);break;case 1:gn||(Fi(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&fm(a,n,l)),ua(t,n,a);break;case 21:ua(t,n,a);break;case 22:gn=(l=gn)||a.memoizedState!==null,ua(t,n,a),gn=l;break;default:ua(t,n,a)}}function xm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xs(t)}catch(a){It(n,n.return,a)}}}function Sm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xs(t)}catch(a){It(n,n.return,a)}}function Jv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new mm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new mm),n;default:throw Error(r(435,t.tag))}}function zo(t,n){var a=Jv(t);n.forEach(function(l){if(!a.has(l)){a.add(l);var u=s2.bind(null,t,l);l.then(u,u)}})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],f=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Za(R.type)){jt=R.stateNode,Vn=!1;break e}break;case 5:jt=R.stateNode,Vn=!1;break e;case 3:case 4:jt=R.stateNode.containerInfo,Vn=!0;break e}R=R.return}if(jt===null)throw Error(r(160));vm(f,_,u),jt=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Mm(n,t),n=n.sibling}var Mi=null;function Mm(t,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Xn(t),l&4&&(Ha(3,t,t.return),Sl(3,t),Ha(5,t,t.return));break;case 1:Gn(n,t),Xn(t),l&512&&(gn||a===null||Fi(a,a.return)),l&64&&ca&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=Mi;if(Gn(n,t),Xn(t),l&512&&(gn||a===null||Fi(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Aa]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,l,a),f[fn]=t,dn(f),l=f;break e;case"link":var _=Mg("link","href",u).get(l+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(l),wn(f,l,a),u.head.appendChild(f);break;case"meta":if(_=Mg("meta","content",u).get(l+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(l),wn(f,l,a),u.head.appendChild(f);break;default:throw Error(r(468,l))}f[fn]=t,dn(f),l=f}t.stateNode=l}else yg(u,t.type,t.stateNode);else t.stateNode=Sg(u,l,t.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?yg(u,t.type,t.stateNode):Sg(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Xn(t),l&512&&(gn||a===null||Fi(a,a.return)),a!==null&&l&4&&Sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Xn(t),l&512&&(gn||a===null||Fi(a,a.return)),t.flags&32){u=t.stateNode;try{Jn(u,"")}catch(qe){It(t,t.return,qe)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,Sf(t,u,a!==null?a.memoizedProps:u)),l&1024&&(Ef=!0);break;case 6:if(Gn(n,t),Xn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(qe){It(t,t.return,qe)}}break;case 3:if(tc=null,u=Mi,Mi=$o(n.containerInfo),Gn(n,t),Mi=u,Xn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(qe){It(t,t.return,qe)}Ef&&(Ef=!1,ym(t));break;case 4:l=Mi,Mi=$o(t.stateNode.containerInfo),Gn(n,t),Xn(t),Mi=l;break;case 12:Gn(n,t),Xn(t);break;case 31:Gn(n,t),Xn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,zo(t,l)));break;case 13:Gn(n,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vo=zt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,zo(t,l)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,te=ca,pe=gn;if(ca=te||u,gn=pe||H,Gn(n,t),gn=pe,ca=te,Xn(t),l&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ca||gn||Rr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=H.stateNode;var xe=H.memoizedProps.style,le=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(qe){It(H,H.return,qe)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(qe){It(H,H.return,qe)}}}else if(n.tag===18){if(a===null){H=n;try{var ce=H.stateNode;u?fg(ce,!0):fg(H.stateNode,!1)}catch(qe){It(H,H.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,zo(t,a))));break;case 19:Gn(n,t),Xn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,zo(t,l)));break;case 30:break;case 21:break;default:Gn(n,t),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,l=t.return;l!==null;){if(hm(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Mf(t);Bo(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Jn(_,""),a.flags&=-33);var R=Mf(t);Bo(t,R,_);break;case 3:case 4:var H=a.stateNode.containerInfo,te=Mf(t);yf(t,te,H);break;default:throw Error(r(161))}}catch(pe){It(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ym(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ym(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gm(t,n.alternate,n),n=n.sibling}function Rr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),Rr(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&fm(n,n.return,a),Rr(n);break;case 27:Dl(n.stateNode);case 26:case 5:Fi(n,n.return),Rr(n);break;case 22:n.memoizedState===null&&Rr(n);break;case 30:Rr(n);break;default:Rr(n)}t=t.sibling}}function da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:da(u,f,a),Sl(4,f);break;case 1:if(da(u,f,a),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){It(l,l.return,te)}if(l=f,u=l.updateQueue,u!==null){var R=l.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)$p(H[u],R)}catch(te){It(l,l.return,te)}}a&&_&64&&um(f),Ml(f,f.return);break;case 27:pm(f);case 26:case 5:da(u,f,a),a&&l===null&&_&4&&dm(f),Ml(f,f.return);break;case 12:da(u,f,a);break;case 31:da(u,f,a),a&&_&4&&xm(u,f);break;case 13:da(u,f,a),a&&_&4&&Sm(u,f);break;case 22:f.memoizedState===null&&da(u,f,a),Ml(f,f.return);break;case 30:break;default:da(u,f,a)}n=n.sibling}}function bf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ll(a))}function Tf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ll(t))}function yi(t,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Em(t,n,a,l),n=n.sibling}function Em(t,n,a,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,l),u&2048&&Sl(9,n);break;case 1:yi(t,n,a,l);break;case 3:yi(t,n,a,l),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ll(t)));break;case 12:if(u&2048){yi(t,n,a,l),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){It(n,n.return,H)}}else yi(t,n,a,l);break;case 31:yi(t,n,a,l);break;case 13:yi(t,n,a,l);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?yi(t,n,a,l):yl(t,n):f._visibility&2?yi(t,n,a,l):(f._visibility|=2,os(t,n,a,l,(n.subtreeFlags&10256)!==0||!1)),u&2048&&bf(_,n);break;case 24:yi(t,n,a,l),u&2048&&Tf(n.alternate,n);break;default:yi(t,n,a,l)}}function os(t,n,a,l,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,H=l,te=_.flags;switch(_.tag){case 0:case 11:case 15:os(f,_,R,H,u),Sl(8,_);break;case 23:break;case 22:var pe=_.stateNode;_.memoizedState!==null?pe._visibility&2?os(f,_,R,H,u):yl(f,_):(pe._visibility|=2,os(f,_,R,H,u)),u&&te&2048&&bf(_.alternate,_);break;case 24:os(f,_,R,H,u),u&&te&2048&&Tf(_.alternate,_);break;default:os(f,_,R,H,u)}n=n.sibling}}function yl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,l=n,u=l.flags;switch(l.tag){case 22:yl(a,l),u&2048&&bf(l.alternate,l);break;case 24:yl(a,l),u&2048&&Tf(l.alternate,l);break;default:yl(a,l)}n=n.sibling}}var El=8192;function cs(t,n,a){if(t.subtreeFlags&El)for(t=t.child;t!==null;)bm(t,n,a),t=t.sibling}function bm(t,n,a){switch(t.tag){case 26:cs(t,n,a),t.flags&El&&t.memoizedState!==null&&I2(a,Mi,t.memoizedState,t.memoizedProps);break;case 5:cs(t,n,a);break;case 3:case 4:var l=Mi;Mi=$o(t.stateNode.containerInfo),cs(t,n,a),Mi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=El,El=16777216,cs(t,n,a),El=l):cs(t,n,a));break;default:cs(t,n,a)}}function Tm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];En=l,Rm(l,t)}Tm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Am(t),t=t.sibling}function Am(t){switch(t.tag){case 0:case 11:case 15:bl(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:bl(t);break;case 12:bl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ho(t)):bl(t);break;default:bl(t)}}function Ho(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];En=l,Rm(l,t)}Tm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Ho(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ho(n));break;default:Ho(n)}t=t.sibling}}function Rm(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ll(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,En=l;else e:for(a=t;En!==null;){l=En;var u=l.sibling,f=l.return;if(_m(l),l===a){En=null;break e}if(u!==null){u.return=f,En=u;break e}En=f}}}var jv={getCacheForType:function(t){var n=Rn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(hn).controller.signal}},$v=typeof WeakMap=="function"?WeakMap:Map,Ct=0,kt=null,pt=null,gt=0,Ft=0,ni=null,Va=!1,us=!1,Af=!1,ha=0,rn=0,Ga=0,Cr=0,Rf=0,ii=0,fs=0,Tl=null,kn=null,Cf=!1,Vo=0,Cm=0,Go=1/0,Xo=null,Xa=null,Sn=0,ka=null,ds=null,pa=0,wf=0,Df=null,wm=null,Al=0,Uf=null;function ai(){return(Ct&2)!==0&&gt!==0?gt&-gt:B.T!==null?If():Ks()}function Dm(){if(ii===0)if((gt&536870912)===0||St){var t=it;it<<=1,(it&3932160)===0&&(it=262144),ii=t}else ii=536870912;return t=ei.current,t!==null&&(t.flags|=32),ii}function Wn(t,n,a){(t===kt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(hs(t,0),Wa(t,gt,ii,!1)),Xe(t,a),((Ct&2)===0||t!==kt)&&(t===kt&&((Ct&2)===0&&(Cr|=a),rn===4&&Wa(t,gt,ii,!1)),Ii(t))}function Um(t,n,a){if((Ct&6)!==0)throw Error(r(327));var l=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=l?n2(t,n):Nf(t,n,!0),f=l;do{if(u===0){us&&!l&&Wa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!e2(a)){u=Nf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=Tl;var H=R.current.memoizedState.isDehydrated;if(H&&(hs(R,_).flags|=256),_=Nf(R,_,!1),_!==2){if(Af&&!H){R.errorRecoveryDisabledLanes|=f,Cr|=f,u=4;break e}f=kn,kn=u,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){hs(t,0),Wa(t,n,0,!0);break}e:{switch(l=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Wa(l,n,ii,!Va);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Vo+300-zt(),10<u)){if(Wa(l,n,ii,!Va),me(l,0,!0)!==0)break e;pa=n,l.timeoutHandle=og(Lm.bind(null,l,a,kn,Xo,Cf,n,ii,Cr,fs,Va,f,"Throttled",-0,0),u);break e}Lm(l,a,kn,Xo,Cf,n,ii,Cr,fs,Va,f,null,-0,0)}}break}while(!0);Ii(t)}function Lm(t,n,a,l,u,f,_,R,H,te,pe,xe,le,ce){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},bm(n,f,xe);var qe=(f&62914560)===f?Vo-zt():(f&4194048)===f?Cm-zt():0;if(qe=B2(xe,qe),qe!==null){pa=f,t.cancelPendingCommit=qe(Hm.bind(null,t,n,f,a,l,u,_,R,H,pe,xe,null,le,ce)),Wa(t,f,_,!te);return}}Hm(t,n,f,a,l,u,_,R,H)}function e2(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],f=u.getSnapshot;u=u.value;try{if(!jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(t,n,a,l){n&=~Rf,n&=~Cr,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var u=n;0<u;){var f=31-Be(u),_=1<<f;l[f]=-1,u&=~_}a!==0&&Lt(t,a,n)}function ko(){return(Ct&6)===0?(Rl(0),!1):!0}function Lf(){if(pt!==null){if(Ft===0)var t=pt.return;else t=pt,ia=xr=null,Zu(t),is=null,cl=0,t=pt;for(;t!==null;)cm(t.alternate,t),t=t.return;pt=null}}function hs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,S2(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),pa=0,Lf(),kt=t,pt=a=ta(t.current,null),gt=n,Ft=0,ni=null,Va=!1,us=we(t,n),Af=!1,fs=ii=Rf=Cr=Ga=rn=0,kn=Tl=null,Cf=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var u=31-Be(l),f=1<<u;n|=t[u],l&=~f}return ha=n,uo(),a}function Nm(t,n){ot=null,B.H=_l,n===ns||n===xo?(n=Kp(),Ft=3):n===Pu?(n=Kp(),Ft=4):Ft=n===uf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,pt===null&&(rn=1,No(t,ci(n,t.current)))}function Om(){var t=ei.current;return t===null?!0:(gt&4194048)===gt?hi===null:(gt&62914560)===gt||(gt&536870912)!==0?t===hi:!1}function Pm(){var t=B.H;return B.H=_l,t===null?_l:t}function Fm(){var t=B.A;return B.A=jv,t}function Wo(){rn=4,Va||(gt&4194048)!==gt&&ei.current!==null||(us=!0),(Ga&134217727)===0&&(Cr&134217727)===0||kt===null||Wa(kt,gt,ii,!1)}function Nf(t,n,a){var l=Ct;Ct|=2;var u=Pm(),f=Fm();(kt!==t||gt!==n)&&(Xo=null,hs(t,n)),n=!1;var _=rn;e:do try{if(Ft!==0&&pt!==null){var R=pt,H=ni;switch(Ft){case 8:Lf(),_=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var te=Ft;if(Ft=0,ni=null,ps(t,R,H,te),a&&us){_=0;break e}break;default:te=Ft,Ft=0,ni=null,ps(t,R,H,te)}}t2(),_=rn;break}catch(pe){Nm(t,pe)}while(!0);return n&&t.shellSuspendCounter++,ia=xr=null,Ct=l,B.H=u,B.A=f,pt===null&&(kt=null,gt=0,uo()),_}function t2(){for(;pt!==null;)Im(pt)}function n2(t,n){var a=Ct;Ct|=2;var l=Pm(),u=Fm();kt!==t||gt!==n?(Xo=null,Go=zt()+500,hs(t,n)):us=we(t,n);e:do try{if(Ft!==0&&pt!==null){n=pt;var f=ni;t:switch(Ft){case 1:Ft=0,ni=null,ps(t,n,f,1);break;case 2:case 9:if(Zp(f)){Ft=0,ni=null,Bm(n);break}n=function(){Ft!==2&&Ft!==9||kt!==t||(Ft=7),Ii(t)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Zp(f)?(Ft=0,ni=null,Bm(n)):(Ft=0,ni=null,ps(t,n,f,7));break;case 5:var _=null;switch(pt.tag){case 26:_=pt.memoizedState;case 5:case 27:var R=pt;if(_?Eg(_):R.stateNode.complete){Ft=0,ni=null;var H=R.sibling;if(H!==null)pt=H;else{var te=R.return;te!==null?(pt=te,qo(te)):pt=null}break t}}Ft=0,ni=null,ps(t,n,f,5);break;case 6:Ft=0,ni=null,ps(t,n,f,6);break;case 8:Lf(),rn=6;break e;default:throw Error(r(462))}}i2();break}catch(pe){Nm(t,pe)}while(!0);return ia=xr=null,B.H=l,B.A=u,Ct=a,pt!==null?0:(kt=null,gt=0,uo(),rn)}function i2(){for(;pt!==null&&!nn();)Im(pt)}function Im(t){var n=lm(t.alternate,t,ha);t.memoizedProps=t.pendingProps,n===null?qo(t):pt=n}function Bm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=tm(a,n,n.pendingProps,n.type,void 0,gt);break;case 11:n=tm(a,n,n.pendingProps,n.type.render,n.ref,gt);break;case 5:Zu(n);default:cm(a,n),n=pt=Fp(n,ha),n=lm(a,n,ha)}t.memoizedProps=t.pendingProps,n===null?qo(t):pt=n}function ps(t,n,a,l){ia=xr=null,Zu(n),is=null,cl=0;var u=n.return;try{if(Wv(t,u,n,a,gt)){rn=1,No(t,ci(a,t.current)),pt=null;return}}catch(f){if(u!==null)throw pt=u,f;rn=1,No(t,ci(a,t.current)),pt=null;return}n.flags&32768?(St||l===1?t=!0:us||(gt&536870912)!==0?t=!1:(Va=t=!0,(l===2||l===9||l===3||l===6)&&(l=ei.current,l!==null&&l.tag===13&&(l.flags|=16384))),zm(n,t)):qo(n)}function qo(t){var n=t;do{if((n.flags&32768)!==0){zm(n,Va);return}t=n.return;var a=Yv(n.alternate,n,ha);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);rn===0&&(rn=5)}function zm(t,n){do{var a=Kv(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);rn=6,pt=null}function Hm(t,n,a,l,u,f,_,R,H){t.cancelPendingCommit=null;do Zo();while(Sn!==0);if((Ct&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Su,Kt(t,a,f,_,R,H),t===kt&&(pt=kt=null,gt=0),ds=n,ka=t,pa=a,wf=f,Df=u,wm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,l2(Q,function(){return Wm(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,u=V.p,V.p=2,_=Ct,Ct|=4;try{Qv(t,n,a)}finally{Ct=_,V.p=u,B.T=l}}Sn=1,Vm(),Gm(),Xm()}}function Vm(){if(Sn===1){Sn=0;var t=ka,n=ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var l=V.p;V.p=2;var u=Ct;Ct|=4;try{Mm(n,t);var f=Wf,_=Rp(t.containerInfo),R=f.focusedElem,H=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Ap(R.ownerDocument.documentElement,R)){if(H!==null&&mu(R)){var te=H.start,pe=H.end;if(pe===void 0&&(pe=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(pe,R.value.length);else{var xe=R.ownerDocument||document,le=xe&&xe.defaultView||window;if(le.getSelection){var ce=le.getSelection(),qe=R.textContent.length,tt=Math.min(H.start,qe),Gt=H.end===void 0?tt:Math.min(H.end,qe);!ce.extend&&tt>Gt&&(_=Gt,Gt=tt,tt=_);var Y=Tp(R,tt),X=Tp(R,Gt);if(Y&&X&&(ce.rangeCount!==1||ce.anchorNode!==Y.node||ce.anchorOffset!==Y.offset||ce.focusNode!==X.node||ce.focusOffset!==X.offset)){var ee=xe.createRange();ee.setStart(Y.node,Y.offset),ce.removeAllRanges(),tt>Gt?(ce.addRange(ee),ce.extend(X.node,X.offset)):(ee.setEnd(X.node,X.offset),ce.addRange(ee))}}}}for(xe=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var _e=xe[R];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}rc=!!kf,Wf=kf=null}finally{Ct=u,V.p=l,B.T=a}}t.current=n,Sn=2}}function Gm(){if(Sn===2){Sn=0;var t=ka,n=ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var l=V.p;V.p=2;var u=Ct;Ct|=4;try{gm(t,n.alternate,n)}finally{Ct=u,V.p=l,B.T=a}}Sn=3}}function Xm(){if(Sn===4||Sn===3){Sn=0,Z();var t=ka,n=ds,a=pa,l=wm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,ds=ka=null,km(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xa=null),Ys(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=B.T,u=V.p,V.p=2,B.T=null;try{for(var f=t.onRecoverableError,_=0;_<l.length;_++){var R=l[_];f(R.value,{componentStack:R.stack})}}finally{B.T=n,V.p=u}}(pa&3)!==0&&Zo(),Ii(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Uf?Al++:(Al=0,Uf=t):Al=0,Rl(0)}}function km(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ll(n)))}function Zo(){return Vm(),Gm(),Xm(),Wm()}function Wm(){if(Sn!==5)return!1;var t=ka,n=wf;wf=0;var a=Ys(pa),l=B.T,u=V.p;try{V.p=32>a?32:a,B.T=null,a=Df,Df=null;var f=ka,_=pa;if(Sn=0,ds=ka=null,pa=0,(Ct&6)!==0)throw Error(r(331));var R=Ct;if(Ct|=4,Am(f.current),Em(f,f.current,_,a),Ct=R,Rl(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(ue,f)}catch{}return!0}finally{V.p=u,B.T=l,km(t,n)}}function qm(t,n,a){n=ci(a,n),n=cf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(Xe(t,2),Ii(t))}function It(t,n,a){if(t.tag===3)qm(t,t,a);else for(;n!==null;){if(n.tag===3){qm(n,t,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xa===null||!Xa.has(l))){t=ci(a,t),a=Z0(2),l=Ia(n,a,2),l!==null&&(Y0(a,l,n,t),Xe(l,2),Ii(l));break}}n=n.return}}function Of(t,n,a){var l=t.pingCache;if(l===null){l=t.pingCache=new $v;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(a)||(Af=!0,u.add(a),t=a2.bind(null,t,n,a),n.then(t,t))}function a2(t,n,a){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(gt&a)===a&&(rn===4||rn===3&&(gt&62914560)===gt&&300>zt()-Vo?(Ct&2)===0&&hs(t,0):Rf|=a,fs===gt&&(fs=0)),Ii(t)}function Zm(t,n){n===0&&(n=Me()),t=gr(t,n),t!==null&&(Xe(t,n),Ii(t))}function r2(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Zm(t,a)}function s2(t,n){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Zm(t,a)}function l2(t,n){return on(t,n)}var Yo=null,ms=null,Pf=!1,Ko=!1,Ff=!1,qa=0;function Ii(t){t!==ms&&t.next===null&&(ms===null?Yo=ms=t:ms=ms.next=t),Ko=!0,Pf||(Pf=!0,c2())}function Rl(t,n){if(!Ff&&Ko){Ff=!0;do for(var a=!1,l=Yo;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var _=l.suspendedLanes,R=l.pingedLanes;f=(1<<31-Be(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Jm(l,f))}else f=gt,f=me(l,l===kt?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||we(l,f)||(a=!0,Jm(l,f));l=l.next}while(a);Ff=!1}}function o2(){Ym()}function Ym(){Ko=Pf=!1;var t=0;qa!==0&&x2()&&(t=qa);for(var n=zt(),a=null,l=Yo;l!==null;){var u=l.next,f=Km(l,n);f===0?(l.next=null,a===null?Yo=u:a.next=u,u===null&&(ms=a)):(a=l,(t!==0||(f&3)!==0)&&(Ko=!0)),l=u}Sn!==0&&Sn!==5||Rl(t),qa!==0&&(qa=0)}function Km(t,n){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Be(f),R=1<<_,H=u[_];H===-1?((R&a)===0||(R&l)!==0)&&(u[_]=Ie(R,n)):H<=n&&(t.expiredLanes|=R),f&=~R}if(n=kt,a=gt,a=me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Wt(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(l!==null&&Wt(l),Ys(a)){case 2:case 8:a=M;break;case 32:a=Q;break;case 268435456:a=fe;break;default:a=Q}return l=Qm.bind(null,t),a=on(a,l),t.callbackPriority=n,t.callbackNode=a,n}return l!==null&&l!==null&&Wt(l),t.callbackPriority=2,t.callbackNode=null,2}function Qm(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Zo()&&t.callbackNode!==a)return null;var l=gt;return l=me(t,t===kt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Um(t,l,n),Km(t,zt()),t.callbackNode!=null&&t.callbackNode===a?Qm.bind(null,t):null)}function Jm(t,n){if(Zo())return null;Um(t,n,!0)}function c2(){M2(function(){(Ct&6)!==0?on(w,o2):Ym()})}function If(){if(qa===0){var t=es;t===0&&(t=je,je<<=1,(je&261888)===0&&(je=256)),qa=t}return qa}function jm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:dr(""+t)}function $m(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function u2(t,n,a,l,u){if(n==="submit"&&a&&a.stateNode===u){var f=jm((u[Tn]||null).action),_=l.submitter;_&&(n=(n=_[Tn]||null)?jm(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new so("action","action",null,l,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(qa!==0){var H=_?$m(u,_):new FormData(u);nf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=_?$m(u,_):new FormData(u),nf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Bf=0;Bf<xu.length;Bf++){var zf=xu[Bf],f2=zf.toLowerCase(),d2=zf[0].toUpperCase()+zf.slice(1);Si(f2,"on"+d2)}Si(Dp,"onAnimationEnd"),Si(Up,"onAnimationIteration"),Si(Lp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Cv,"onTransitionRun"),Si(wv,"onTransitionStart"),Si(Dv,"onTransitionCancel"),Si(Np,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cl));function eg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var _=l.length-1;0<=_;_--){var R=l[_],H=R.instance,te=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(pe){co(pe)}u.currentTarget=null,f=H}else for(_=0;_<l.length;_++){if(R=l[_],H=R.instance,te=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(pe){co(pe)}u.currentTarget=null,f=H}}}}function mt(t,n){var a=n[cr];a===void 0&&(a=n[cr]=new Set);var l=t+"__bubble";a.has(l)||(tg(n,t,2,!1),a.add(l))}function Hf(t,n,a){var l=0;n&&(l|=4),tg(a,t,l,n)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function Vf(t){if(!t[Qo]){t[Qo]=!0,no.forEach(function(a){a!=="selectionchange"&&(h2.has(a)||Hf(a,!1,t),Hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Qo]||(n[Qo]=!0,Hf("selectionchange",!1,n))}}function tg(t,n,a,l){switch(Dg(n)){case 2:var u=V2;break;case 8:u=G2;break;default:u=nd}a=u.bind(null,n,a,t),u=void 0,!su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Gf(t,n,a,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var R=l.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=l.return;_!==null;){var H=_.tag;if((H===3||H===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=Ji(R),_===null)return;if(H=_.tag,H===5||H===6||H===26||H===27){l=f=_;continue e}R=R.parentNode}}l=l.return}sp(function(){var te=f,pe=au(a),xe=[];e:{var le=Op.get(t);if(le!==void 0){var ce=so,qe=t;switch(t){case"keypress":if(ao(a)===0)break e;case"keydown":case"keyup":ce=sv;break;case"focusin":qe="focus",ce=uu;break;case"focusout":qe="blur",ce=uu;break;case"beforeblur":case"afterblur":ce=uu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=cv;break;case Dp:case Up:case Lp:ce=J_;break;case Np:ce=fv;break;case"scroll":case"scrollend":ce=q_;break;case"wheel":ce=hv;break;case"copy":case"cut":case"paste":ce=$_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=fp;break;case"toggle":case"beforetoggle":ce=mv}var tt=(n&4)!==0,Gt=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?le!==null?le+"Capture":null:le;tt=[];for(var X=te,ee;X!==null;){var _e=X;if(ee=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ee===null||Y===null||(_e=Qs(X,Y),_e!=null&&tt.push(wl(X,_e,ee))),Gt)break;X=X.return}0<tt.length&&(le=new ce(le,qe,null,a,pe),xe.push({event:le,listeners:tt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",le&&a!==iu&&(qe=a.relatedTarget||a.fromElement)&&(Ji(qe)||qe[zn]))break e;if((ce||le)&&(le=pe.window===pe?pe:(le=pe.ownerDocument)?le.defaultView||le.parentWindow:window,ce?(qe=a.relatedTarget||a.toElement,ce=te,qe=qe?Ji(qe):null,qe!==null&&(Gt=c(qe),tt=qe.tag,qe!==Gt||tt!==5&&tt!==27&&tt!==6)&&(qe=null)):(ce=null,qe=te),ce!==qe)){if(tt=cp,_e="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(tt=fp,_e="onPointerLeave",Y="onPointerEnter",X="pointer"),Gt=ce==null?le:fr(ce),ee=qe==null?le:fr(qe),le=new tt(_e,X+"leave",ce,a,pe),le.target=Gt,le.relatedTarget=ee,_e=null,Ji(pe)===te&&(tt=new tt(Y,X+"enter",qe,a,pe),tt.target=ee,tt.relatedTarget=Gt,_e=tt),Gt=_e,ce&&qe)t:{for(tt=p2,Y=ce,X=qe,ee=0,_e=Y;_e;_e=tt(_e))ee++;_e=0;for(var et=X;et;et=tt(et))_e++;for(;0<ee-_e;)Y=tt(Y),ee--;for(;0<_e-ee;)X=tt(X),_e--;for(;ee--;){if(Y===X||X!==null&&Y===X.alternate){tt=Y;break t}Y=tt(Y),X=tt(X)}tt=null}else tt=null;ce!==null&&ng(xe,le,ce,tt,!1),qe!==null&&Gt!==null&&ng(xe,Gt,qe,tt,!0)}}e:{if(le=te?fr(te):window,ce=le.nodeName&&le.nodeName.toLowerCase(),ce==="select"||ce==="input"&&le.type==="file")var Tt=xp;else if(_p(le))if(Sp)Tt=Tv;else{Tt=Ev;var Ye=yv}else ce=le.nodeName,!ce||ce.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?te&&Dt(te.elementType)&&(Tt=xp):Tt=bv;if(Tt&&(Tt=Tt(t,te))){vp(xe,Tt,a,pe);break e}Ye&&Ye(t,le,te),t==="focusout"&&te&&le.type==="number"&&te.memoizedProps.value!=null&&ht(le,"number",le.value)}switch(Ye=te?fr(te):window,t){case"focusin":(_p(Ye)||Ye.contentEditable==="true")&&(qr=Ye,gu=te,al=null);break;case"focusout":al=gu=qr=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Cp(xe,a,pe);break;case"selectionchange":if(Rv)break;case"keydown":case"keyup":Cp(xe,a,pe)}var ct;if(du)e:{switch(t){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Wr?mp(t,a)&&(_t="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(dp&&a.locale!=="ko"&&(Wr||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Wr&&(ct=lp()):(Da=pe,lu="value"in Da?Da.value:Da.textContent,Wr=!0)),Ye=Jo(te,_t),0<Ye.length&&(_t=new up(_t,t,null,a,pe),xe.push({event:_t,listeners:Ye}),ct?_t.data=ct:(ct=gp(a),ct!==null&&(_t.data=ct)))),(ct=_v?vv(t,a):xv(t,a))&&(_t=Jo(te,"onBeforeInput"),0<_t.length&&(Ye=new up("onBeforeInput","beforeinput",null,a,pe),xe.push({event:Ye,listeners:_t}),Ye.data=ct)),u2(xe,t,te,a,pe)}eg(xe,n)})}function wl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Jo(t,n){for(var a=n+"Capture",l=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Qs(t,a),u!=null&&l.unshift(wl(t,u,f)),u=Qs(t,n),u!=null&&l.push(wl(t,u,f))),t.tag===3)return l;t=t.return}return[]}function p2(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ng(t,n,a,l,u){for(var f=n._reactName,_=[];a!==null&&a!==l;){var R=a,H=R.alternate,te=R.stateNode;if(R=R.tag,H!==null&&H===l)break;R!==5&&R!==26&&R!==27||te===null||(H=te,u?(te=Qs(a,f),te!=null&&_.unshift(wl(a,te,H))):u||(te=Qs(a,f),te!=null&&_.push(wl(a,te,H)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var m2=/\r\n?/g,g2=/\u0000|\uFFFD/g;function ig(t){return(typeof t=="string"?t:""+t).replace(m2,`
`).replace(g2,"")}function ag(t,n){return n=ig(n),ig(t)===n}function Vt(t,n,a,l,u,f){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Jn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Jn(t,""+l);break;case"className":We(t,"class",l);break;case"tabIndex":We(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,l);break;case"style":xi(t,l,f);break;case"data":if(n!=="object"){We(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=dr(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=dr(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=$i);break;case"onScroll":l!=null&&mt("scroll",t);break;case"onScrollEnd":l!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=dr(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Le(t,"popover",l);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Le(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ni.get(a)||a,Le(t,a,l))}}function Xf(t,n,a,l,u,f){switch(a){case"style":xi(t,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Jn(t,l):(typeof l=="number"||typeof l=="bigint")&&Jn(t,""+l);break;case"onScroll":l!=null&&mt("scroll",t);break;case"onScrollEnd":l!=null&&mt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,l,u);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Le(t,a,l)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var l=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,f,_,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),l&&Vt(t,n,"src",a.src,a,null);return;case"input":mt("invalid",t);var R=f=_=u=null,H=null,te=null;for(l in a)if(a.hasOwnProperty(l)){var pe=a[l];if(pe!=null)switch(l){case"name":u=pe;break;case"type":_=pe;break;case"checked":H=pe;break;case"defaultChecked":te=pe;break;case"value":f=pe;break;case"defaultValue":R=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:Vt(t,n,l,pe,a,null)}}Ln(t,f,R,H,te,_,u,!1);return;case"select":mt("invalid",t),l=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":l=R;default:Vt(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!l,n!=null?xn(t,!!l,n,!1):a!=null&&xn(t,!!l,a,!0);return;case"textarea":mt("invalid",t),f=u=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":l=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Vt(t,n,_,R,a,null)}vi(t,l,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(l=a[H],l!=null))switch(H){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Vt(t,n,H,l,a,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(l=0;l<Cl.length;l++)mt(Cl[l],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(l=a[te],l!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,te,l,a,null)}return;default:if(Dt(n)){for(pe in a)a.hasOwnProperty(pe)&&(l=a[pe],l!==void 0&&Xf(t,n,pe,l,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(l=a[R],l!=null&&Vt(t,n,R,l,a,null))}function _2(t,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,H=null,te=null,pe=null;for(ce in a){var xe=a[ce];if(a.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=xe;default:l.hasOwnProperty(ce)||Vt(t,n,ce,null,l,xe)}}for(var le in l){var ce=l[le];if(xe=a[le],l.hasOwnProperty(le)&&(ce!=null||xe!=null))switch(le){case"type":f=ce;break;case"name":u=ce;break;case"checked":te=ce;break;case"defaultChecked":pe=ce;break;case"value":_=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==xe&&Vt(t,n,le,ce,l,xe)}}ze(t,_,R,H,te,pe,f,u);return;case"select":ce=_=R=le=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ce=H;default:l.hasOwnProperty(f)||Vt(t,n,f,null,l,H)}for(u in l)if(f=l[u],H=a[u],l.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":le=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==H&&Vt(t,n,u,f,l,H)}n=R,a=_,l=ce,le!=null?xn(t,!!a,le,!1):!!l!=!!a&&(n!=null?xn(t,!!a,n,!0):xn(t,!!a,a?[]:"",!1));return;case"textarea":ce=le=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Vt(t,n,R,null,l,u)}for(_ in l)if(u=l[_],f=a[_],l.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":le=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Vt(t,n,_,u,l,f)}Qn(t,le,ce);return;case"option":for(var qe in a)if(le=a[qe],a.hasOwnProperty(qe)&&le!=null&&!l.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Vt(t,n,qe,null,l,le)}for(H in l)if(le=l[H],ce=a[H],l.hasOwnProperty(H)&&le!==ce&&(le!=null||ce!=null))switch(H){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Vt(t,n,H,le,l,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)le=a[tt],a.hasOwnProperty(tt)&&le!=null&&!l.hasOwnProperty(tt)&&Vt(t,n,tt,null,l,le);for(te in l)if(le=l[te],ce=a[te],l.hasOwnProperty(te)&&le!==ce&&(le!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Vt(t,n,te,le,l,ce)}return;default:if(Dt(n)){for(var Gt in a)le=a[Gt],a.hasOwnProperty(Gt)&&le!==void 0&&!l.hasOwnProperty(Gt)&&Xf(t,n,Gt,void 0,l,le);for(pe in l)le=l[pe],ce=a[pe],!l.hasOwnProperty(pe)||le===ce||le===void 0&&ce===void 0||Xf(t,n,pe,le,l,ce);return}}for(var Y in a)le=a[Y],a.hasOwnProperty(Y)&&le!=null&&!l.hasOwnProperty(Y)&&Vt(t,n,Y,null,l,le);for(xe in l)le=l[xe],ce=a[xe],!l.hasOwnProperty(xe)||le===ce||le==null&&ce==null||Vt(t,n,xe,le,l,ce)}function rg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function v2(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var u=a[l],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&rg(_)){for(_=0,R=u.responseEnd,l+=1;l<a.length;l++){var H=a[l],te=H.startTime;if(te>R)break;var pe=H.transferSize,xe=H.initiatorType;pe&&rg(xe)&&(H=H.responseEnd,_+=pe*(H<R?1:(R-te)/(H-te)))}if(--l,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var kf=null,Wf=null;function jo(t){return t.nodeType===9?t:t.ownerDocument}function sg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function qf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function x2(){var t=window.event;return t&&t.type==="popstate"?t===Zf?!1:(Zf=t,!0):(Zf=null,!1)}var og=typeof setTimeout=="function"?setTimeout:void 0,S2=typeof clearTimeout=="function"?clearTimeout:void 0,cg=typeof Promise=="function"?Promise:void 0,M2=typeof queueMicrotask=="function"?queueMicrotask:typeof cg<"u"?function(t){return cg.resolve(null).then(t).catch(y2)}:og;function y2(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function ug(t,n){var a=n,l=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(u),xs(n);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Dl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Dl(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Aa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Dl(t.ownerDocument.body);a=u}while(a);xs(n)}function fg(t,n){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Yf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yf(a),Ra(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function E2(t,n,a,l){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Aa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function b2(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pi(t.nextSibling),t===null))return null;return t}function dg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=pi(t.nextSibling),t===null))return null;return t}function Kf(t){return t.data==="$?"||t.data==="$~"}function Qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function T2(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function pi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Jf=null;function hg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return pi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function pg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function mg(t,n,a){switch(n=jo(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Dl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ra(t)}var mi=new Map,gg=new Set;function $o(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ma=V.d;V.d={f:A2,r:R2,D:C2,C:w2,L:D2,m:U2,X:N2,S:L2,M:O2};function A2(){var t=ma.f(),n=ko();return t||n}function R2(t){var n=ji(t);n!==null&&n.tag===5&&n.type==="form"?N0(n):ma.r(t)}var gs=typeof document>"u"?null:document;function _g(t,n,a){var l=gs;if(l&&typeof n=="string"&&n){var u=Ot(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),gg.has(u)||(gg.add(u),t={rel:t,crossOrigin:a,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),wn(n,"link",t),dn(n),l.head.appendChild(n)))}}function C2(t){ma.D(t),_g("dns-prefetch",t,null)}function w2(t,n){ma.C(t,n),_g("preconnect",t,n)}function D2(t,n,a){ma.L(t,n,a);var l=gs;if(l&&t&&n){var u='link[rel="preload"][as="'+Ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ot(a.imageSizes)+'"]')):u+='[href="'+Ot(t)+'"]';var f=u;switch(n){case"style":f=_s(t);break;case"script":f=vs(t)}mi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),mi.set(f,t),l.querySelector(u)!==null||n==="style"&&l.querySelector(Ul(f))||n==="script"&&l.querySelector(Ll(f))||(n=l.createElement("link"),wn(n,"link",t),dn(n),l.head.appendChild(n)))}}function U2(t,n){ma.m(t,n);var a=gs;if(a&&t){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ot(l)+'"][href="'+Ot(t)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vs(t)}if(!mi.has(f)&&(t=v({rel:"modulepreload",href:t},n),mi.set(f,t),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ll(f)))return}l=a.createElement("link"),wn(l,"link",t),dn(l),a.head.appendChild(l)}}}function L2(t,n,a){ma.S(t,n,a);var l=gs;if(l&&t){var u=Ca(l).hoistableStyles,f=_s(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=l.querySelector(Ul(f)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=mi.get(f))&&jf(t,a);var H=_=l.createElement("link");dn(H),wn(H,"link",t),H._p=new Promise(function(te,pe){H.onload=te,H.onerror=pe}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ec(_,n,l)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function N2(t,n){ma.X(t,n);var a=gs;if(a&&t){var l=Ca(a).hoistableScripts,u=vs(t),f=l.get(u);f||(f=a.querySelector(Ll(u)),f||(t=v({src:t,async:!0},n),(n=mi.get(u))&&$f(t,n),f=a.createElement("script"),dn(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function O2(t,n){ma.M(t,n);var a=gs;if(a&&t){var l=Ca(a).hoistableScripts,u=vs(t),f=l.get(u);f||(f=a.querySelector(Ll(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=mi.get(u))&&$f(t,n),f=a.createElement("script"),dn(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function vg(t,n,a,l){var u=(u=ae.current)?$o(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_s(a.href),a=Ca(u).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_s(a.href);var f=Ca(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Ul(t)))&&!f._p&&(_.instance=f,_.state.loading=5),mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(t,a),f||P2(u,t,a,_.state))),n&&l===null)throw Error(r(528,""));return _}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=Ca(u).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function _s(t){return'href="'+Ot(t)+'"'}function Ul(t){return'link[rel="stylesheet"]['+t+"]"}function xg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function P2(t,n,a,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),wn(n,"link",a),dn(n),t.head.appendChild(n))}function vs(t){return'[src="'+Ot(t)+'"]'}function Ll(t){return"script[async]"+t}function Sg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(l)return n.instance=l,dn(l),l;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),dn(l),wn(l,"style",u),ec(l,a.precedence,t),n.instance=l;case"stylesheet":u=_s(a.href);var f=t.querySelector(Ul(u));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;l=xg(a),(u=mi.get(u))&&jf(l,u),f=(t.ownerDocument||t).createElement("link"),dn(f);var _=f;return _._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),wn(f,"link",l),n.state.loading|=4,ec(f,a.precedence,t),n.instance=f;case"script":return f=vs(a.src),(u=t.querySelector(Ll(f)))?(n.instance=u,dn(u),u):(l=a,(u=mi.get(f))&&(l=v({},a),$f(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),dn(u),wn(u,"link",l),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,ec(l,a.precedence,t));return n.instance}function ec(t,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,_=0;_<l.length;_++){var R=l[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function Mg(t,n,a){if(tc===null){var l=new Map,u=tc=new Map;u.set(a,l)}else u=tc,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Aa]||f[fn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=l.get(_);R?R.push(f):l.set(_,[f])}}return l}function yg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function F2(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Eg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function I2(t,n,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_s(l.href),f=n.querySelector(Ul(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,l=xg(l),(u=mi.get(u))&&jf(l,u),f=f.createElement("link"),dn(f);var _=f;_._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),wn(f,"link",l),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ed=0;function B2(t,n){return t.stylesheets&&t.count===0&&ac(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ed===0&&(ed=62500*v2());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ed?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function nc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ic=null;function ac(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ic=new Map,n.forEach(z2,t),ic=null,nc.call(t))}function z2(t,n){if(!(n.state.loading&4)){var a=ic.get(t);if(a)var l=a.get(null);else{a=new Map,ic.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||l,f===l&&a.set(null,u),a.set(_,u),this.count++,l=nc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Nl={$$typeof:N,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function H2(t,n,a,l,u,f,_,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function bg(t,n,a,l,u,f,_,R,H,te,pe,xe){return t=new H2(t,n,a,_,H,te,pe,xe,R),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),t.current=f,f.stateNode=t,n=Lu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:n},Fu(f),t}function Tg(t){return t?(t=Kr,t):Kr}function Ag(t,n,a,l,u,f){u=Tg(u),l.context===null?l.context=u:l.pendingContext=u,l=Fa(n),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=Ia(t,l,n),a!==null&&(Wn(a,t,n),fl(a,t,n))}function Rg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function td(t,n){Rg(t,n),(t=t.alternate)&&Rg(t,n)}function Cg(t){if(t.tag===13||t.tag===31){var n=gr(t,67108864);n!==null&&Wn(n,t,67108864),td(t,67108864)}}function wg(t){if(t.tag===13||t.tag===31){var n=ai();n=Zs(n);var a=gr(t,n);a!==null&&Wn(a,t,n),td(t,n)}}var rc=!0;function V2(t,n,a,l){var u=B.T;B.T=null;var f=V.p;try{V.p=2,nd(t,n,a,l)}finally{V.p=f,B.T=u}}function G2(t,n,a,l){var u=B.T;B.T=null;var f=V.p;try{V.p=8,nd(t,n,a,l)}finally{V.p=f,B.T=u}}function nd(t,n,a,l){if(rc){var u=id(l);if(u===null)Gf(t,n,l,sc,a),Ug(t,l);else if(k2(u,t,n,a,l))l.stopPropagation();else if(Ug(t,l),n&4&&-1<X2.indexOf(t)){for(;u!==null;){var f=ji(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ae(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var H=1<<31-Be(_);R.entanglements[1]|=H,_&=~H}Ii(f),(Ct&6)===0&&(Go=zt()+500,Rl(0))}}break;case 31:case 13:R=gr(f,2),R!==null&&Wn(R,f,2),ko(),td(f,2)}if(f=id(l),f===null&&Gf(t,n,l,sc,a),f===u)break;u=f}u!==null&&l.stopPropagation()}else Gf(t,n,l,null,a)}}function id(t){return t=au(t),ad(t)}var sc=null;function ad(t){if(sc=null,t=Ji(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return sc=t,null}function Dg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case w:return 2;case M:return 8;case Q:case re:return 32;case fe:return 268435456;default:return 32}default:return 32}}var rd=!1,Ya=null,Ka=null,Qa=null,Ol=new Map,Pl=new Map,Ja=[],X2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ug(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Ol.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(n.pointerId)}}function Fl(t,n,a,l,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ji(n),n!==null&&Cg(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function k2(t,n,a,l,u){switch(n){case"focusin":return Ya=Fl(Ya,t,n,a,l,u),!0;case"dragenter":return Ka=Fl(Ka,t,n,a,l,u),!0;case"mouseover":return Qa=Fl(Qa,t,n,a,l,u),!0;case"pointerover":var f=u.pointerId;return Ol.set(f,Fl(Ol.get(f)||null,t,n,a,l,u)),!0;case"gotpointercapture":return f=u.pointerId,Pl.set(f,Fl(Pl.get(f)||null,t,n,a,l,u)),!0}return!1}function Lg(t){var n=Ji(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Gr(t.priority,function(){wg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Gr(t.priority,function(){wg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=id(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);iu=l,a.target.dispatchEvent(l),iu=null}else return n=ji(a),n!==null&&Cg(n),t.blockedOn=a,!1;n.shift()}return!0}function Ng(t,n,a){lc(t)&&a.delete(n)}function W2(){rd=!1,Ya!==null&&lc(Ya)&&(Ya=null),Ka!==null&&lc(Ka)&&(Ka=null),Qa!==null&&lc(Qa)&&(Qa=null),Ol.forEach(Ng),Pl.forEach(Ng)}function oc(t,n){t.blockedOn===n&&(t.blockedOn=null,rd||(rd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,W2)))}var cc=null;function Og(t){cc!==t&&(cc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){cc===t&&(cc=null);for(var n=0;n<t.length;n+=3){var a=t[n],l=t[n+1],u=t[n+2];if(typeof l!="function"){if(ad(l||a)===null)continue;break}var f=ji(a);f!==null&&(t.splice(n,3),n-=3,nf(f,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function xs(t){function n(H){return oc(H,t)}Ya!==null&&oc(Ya,t),Ka!==null&&oc(Ka,t),Qa!==null&&oc(Qa,t),Ol.forEach(n),Pl.forEach(n);for(var a=0;a<Ja.length;a++){var l=Ja[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)Lg(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],f=a[l+1],_=u[Tn]||null;if(typeof f=="function")_||Og(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[Tn]||null)R=_.formAction;else if(ad(u)!==null)continue}else R=_.action;typeof R=="function"?a[l+1]=R:(a.splice(l,3),l-=3),Og(a)}}}function Pg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function sd(t){this._internalRoot=t}uc.prototype.render=sd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,l=ai();Ag(a,l,t,n,null,null)},uc.prototype.unmount=sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ag(t.current,2,null,t,null,null),ko(),n[zn]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ks();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&Lg(t)}};var Fg=e.version;if(Fg!=="19.2.0")throw Error(r(527,Fg,"19.2.0"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var q2={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{ue=fc.inject(q2),de=fc}catch{}}return Bl.createRoot=function(t,n){if(!o(t))throw Error(r(299));var a=!1,l="",u=X0,f=k0,_=W0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=bg(t,1,!1,null,null,a,l,null,u,f,_,Pg),t[zn]=n.current,Vf(t),new sd(n)},Bl.hydrateRoot=function(t,n,a){if(!o(t))throw Error(r(299));var l=!1,u="",f=X0,_=k0,R=W0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=bg(t,1,!0,n,a??null,l,u,H,f,_,R,Pg),n.context=Tg(null),a=n.current,l=ai(),l=Zs(l),u=Fa(l),u.callback=null,Ia(a,u,l),a=l,n.current.lanes=a,Xe(n,a),Ii(n),t[zn]=n.current,Vf(t),new uc(n)},Bl.version="19.2.0",Bl}var qg;function ax(){if(qg)return cd.exports;qg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),cd.exports=ix(),cd.exports}var rx=ax();const sx=new Map([["bold",F.createElement(F.Fragment,null,F.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"}))],["duotone",F.createElement(F.Fragment,null,F.createElement("path",{d:"M112,56V200L40,128Z",opacity:"0.2"}),F.createElement("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"}))],["fill",F.createElement(F.Fragment,null,F.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))],["light",F.createElement(F.Fragment,null,F.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"}))],["regular",F.createElement(F.Fragment,null,F.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"}))],["thin",F.createElement(F.Fragment,null,F.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"}))]]),lx=new Map([["bold",F.createElement(F.Fragment,null,F.createElement("path",{d:"M176,12H80A28,28,0,0,0,52,40V216a28,28,0,0,0,28,28h96a28,28,0,0,0,28-28V40A28,28,0,0,0,176,12ZM76,76H180V180H76Zm4-40h96a4,4,0,0,1,4,4V52H76V40A4,4,0,0,1,80,36Zm96,184H80a4,4,0,0,1-4-4V204H180v12A4,4,0,0,1,176,220Z"}))],["duotone",F.createElement(F.Fragment,null,F.createElement("path",{d:"M192,56V200H64V56Z",opacity:"0.2"}),F.createElement("path",{d:"M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"}))],["fill",F.createElement(F.Fragment,null,F.createElement("path",{d:"M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM80,32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"}))],["light",F.createElement(F.Fragment,null,F.createElement("path",{d:"M176,18H80A22,22,0,0,0,58,40V216a22,22,0,0,0,22,22h96a22,22,0,0,0,22-22V40A22,22,0,0,0,176,18ZM70,62H186V194H70ZM80,30h96a10,10,0,0,1,10,10V50H70V40A10,10,0,0,1,80,30Zm96,196H80a10,10,0,0,1-10-10V206H186v10A10,10,0,0,1,176,226Z"}))],["regular",F.createElement(F.Fragment,null,F.createElement("path",{d:"M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"}))],["thin",F.createElement(F.Fragment,null,F.createElement("path",{d:"M176,20H80A20,20,0,0,0,60,40V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20V40A20,20,0,0,0,176,20ZM68,60H188V196H68ZM80,28h96a12,12,0,0,1,12,12V52H68V40A12,12,0,0,1,80,28Zm96,200H80a12,12,0,0,1-12-12V204H188v12A12,12,0,0,1,176,228Z"}))]]),ox=new Map([["bold",F.createElement(F.Fragment,null,F.createElement("path",{d:"M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"}))],["duotone",F.createElement(F.Fragment,null,F.createElement("path",{d:"M224,56l-96,88L32,56Z",opacity:"0.2"}),F.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["fill",F.createElement(F.Fragment,null,F.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["light",F.createElement(F.Fragment,null,F.createElement("path",{d:"M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z"}))],["regular",F.createElement(F.Fragment,null,F.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["thin",F.createElement(F.Fragment,null,F.createElement("path",{d:"M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"}))]]),cx=new Map([["bold",F.createElement(F.Fragment,null,F.createElement("path",{d:"M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"}))],["duotone",F.createElement(F.Fragment,null,F.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),F.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",F.createElement(F.Fragment,null,F.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",F.createElement(F.Fragment,null,F.createElement("path",{d:"M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",F.createElement(F.Fragment,null,F.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",F.createElement(F.Fragment,null,F.createElement("path",{d:"M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),ux=new Map([["bold",F.createElement(F.Fragment,null,F.createElement("path",{d:"M56.88,31.93A12,12,0,1,0,39.12,48.07l16,17.65C20.67,88.66,5.72,121.58,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212a131.34,131.34,0,0,0,51-10l20.09,22.1a12,12,0,0,0,17.76-16.14ZM128,188c-29.59,0-55.47-10.73-76.91-31.88A130.69,130.69,0,0,1,29.52,128c5.27-9.31,18.79-29.9,42-44.29l90.09,99.11A109.33,109.33,0,0,1,128,188Zm123-55.12c-.36.81-9,20-28,39.16a12,12,0,1,1-17-16.9A130.48,130.48,0,0,0,226.48,128a130.36,130.36,0,0,0-21.57-28.12C183.46,78.73,157.59,68,128,68c-3.35,0-6.7.14-10,.42a12,12,0,1,1-2-23.91c3.93-.34,8-.51,12-.51,36,0,68.63,13.67,94.49,39.52,19.35,19.35,28.11,38.8,28.48,39.61A12.08,12.08,0,0,1,251,132.88Z"}))],["duotone",F.createElement(F.Fragment,null,F.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),F.createElement("path",{d:"M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z"}))],["fill",F.createElement(F.Fragment,null,F.createElement("path",{d:"M96.68,57.87a4,4,0,0,1,2.08-6.6A130.13,130.13,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41a8,8,0,0,1,0,6.5c-.35.79-8.82,19.57-27.65,38.4q-4.28,4.26-8.79,8.07a4,4,0,0,1-5.55-.36ZM213.92,210.62a8,8,0,1,1-11.84,10.76L180,197.13A127.21,127.21,0,0,1,128,208c-34.88,0-66.57-13.26-91.66-38.34C17.51,150.83,9,132.05,8.69,131.26a8,8,0,0,1,0-6.5C9,124,17.51,105.18,36.34,86.35a135,135,0,0,1,25-19.78L42.08,45.38A8,8,0,1,1,53.92,34.62Zm-65.49-48.25-52.69-58a40,40,0,0,0,52.69,58Z"}))],["light",F.createElement(F.Fragment,null,F.createElement("path",{d:"M52.44,36A6,6,0,0,0,43.56,44L64.44,67c-37.28,21.9-53.23,57-53.92,58.57a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206a124.91,124.91,0,0,0,52.57-11.25l23,25.29a6,6,0,0,0,8.88-8.08Zm48.62,71.32,45,49.52a34,34,0,0,1-45-49.52ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.57,134.57,0,0,1,22.69,128c4.29-8.2,20.1-35.18,50-51.91L92.89,98.3a46,46,0,0,0,61.35,67.48l17.81,19.6A113.47,113.47,0,0,1,128,194Zm6.4-99.4a6,6,0,0,1,2.25-11.79,46.17,46.17,0,0,1,37.15,40.87,6,6,0,0,1-5.42,6.53l-.56,0a6,6,0,0,1-6-5.45A34.1,34.1,0,0,0,134.4,94.6Zm111.08,35.85c-.41.92-10.37,23-32.86,43.12a6,6,0,1,1-8-8.94A134.07,134.07,0,0,0,233.31,128a134.67,134.67,0,0,0-23.86-32.07C186.78,73.42,159.38,62,128,62a120.19,120.19,0,0,0-19.69,1.6,6,6,0,1,1-2-11.83A131.12,131.12,0,0,1,128,50c43.38,0,73,20.54,90.24,37.76,18.58,18.58,26.9,37,27.24,37.81A6,6,0,0,1,245.48,130.45Z"}))],["regular",F.createElement(F.Fragment,null,F.createElement("path",{d:"M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z"}))],["thin",F.createElement(F.Fragment,null,F.createElement("path",{d:"M51,37.31A4,4,0,0,0,45,42.69L67.59,67.5C29.34,89,13,124.81,12.34,126.38a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17a122.59,122.59,0,0,0,53.06-11.69l24,26.38a4,4,0,1,0,5.92-5.38ZM149.1,157.16A36,36,0,0,1,101,104.22ZM128,196c-32,0-59.89-11.65-83-34.62A135.81,135.81,0,0,1,20.44,128c3.65-7.23,20.09-36.81,52.68-54.43l22.45,24.7a44,44,0,0,0,59,64.83l20.89,23A114.94,114.94,0,0,1,128,196Zm6.78-103.36a4,4,0,0,1,1.49-7.86,44.15,44.15,0,0,1,35.54,39.09,4,4,0,0,1-3.61,4.35l-.38,0a4,4,0,0,1-4-3.63A36.1,36.1,0,0,0,134.78,92.64Zm108.88,37c-.41.91-10.2,22.58-32.38,42.45a4,4,0,0,1-2.67,1,4,4,0,0,1-2.67-7A136.71,136.71,0,0,0,235.56,128,136.07,136.07,0,0,0,211,94.62C187.89,71.65,160,60,128,60a122,122,0,0,0-20,1.63,4,4,0,0,1-1.32-7.89A129.3,129.3,0,0,1,128,52c42.7,0,71.87,20.22,88.83,37.18,18.31,18.31,26.49,36.44,26.83,37.2A4.08,4.08,0,0,1,243.66,129.63Z"}))]]),fx=new Map([["bold",F.createElement(F.Fragment,null,F.createElement("path",{d:"M249.8,85.49l-116-64a12,12,0,0,0-11.6,0l-116,64a12,12,0,0,0,0,21l21.8,12v47.76a19.89,19.89,0,0,0,5.09,13.32C46.63,194.7,77,220,128,220a136.88,136.88,0,0,0,40-5.75V240a12,12,0,0,0,24,0V204.12a119.53,119.53,0,0,0,30.91-24.51A19.89,19.89,0,0,0,228,166.29V118.53l21.8-12a12,12,0,0,0,0-21ZM128,45.71,219.16,96,186,114.3a1.88,1.88,0,0,1-.18-.12l-52-28.69a12,12,0,0,0-11.6,21l39,21.49L128,146.3,36.84,96ZM128,196c-40.42,0-64.65-19.07-76-31.27v-33l70.2,38.74a12,12,0,0,0,11.6,0L168,151.64v37.23A110.46,110.46,0,0,1,128,196Zm76-31.27a93.21,93.21,0,0,1-12,10.81V138.39l12-6.62Z"}))],["duotone",F.createElement(F.Fragment,null,F.createElement("path",{d:"M216,113.07v53.22a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V113.07L128,160Z",opacity:"0.2"}),F.createElement("path",{d:"M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"}))],["fill",F.createElement(F.Fragment,null,F.createElement("path",{d:"M176,207.24a119,119,0,0,0,16-7.73V240a8,8,0,0,1-16,0Zm11.76-88.43-56-29.87a8,8,0,0,0-7.52,14.12L171,128l17-9.06Zm64-29.87-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V130.67L171,128l-43,22.93L43.83,106l0,0L25,96,128,41.07,231,96l-18.78,10-.06,0L188,118.94a8,8,0,0,1,4,6.93v73.64a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12Z"}))],["light",F.createElement(F.Fragment,null,F.createElement("path",{d:"M250.82,90.71l-120-64a5.94,5.94,0,0,0-5.64,0l-120,64a6,6,0,0,0,0,10.58L34,116.67v49.62a14,14,0,0,0,3.55,9.32C50.42,189.94,79.29,214,128,214a127.21,127.21,0,0,0,50-9.73V240a6,6,0,0,0,12,0V198.35a113.18,113.18,0,0,0,28.45-22.75,13.91,13.91,0,0,0,3.55-9.31V116.67l28.82-15.38a6,6,0,0,0,0-10.58ZM128,202c-44,0-70-21.56-81.52-34.41a2,2,0,0,1-.48-1.3V123.07l79.18,42.22a6,6,0,0,0,5.64,0L178,140.13v51C165,197.35,148.45,202,128,202Zm82-35.71a2,2,0,0,1-.48,1.3A100.25,100.25,0,0,1,190,184.3V133.73l20-10.66Zm-22.15-45a6.27,6.27,0,0,0-1-.71l-56-29.86a6,6,0,0,0-5.64,10.58L175.25,128,128,153.2,20.75,96,128,38.8,235.25,96Z"}))],["regular",F.createElement(F.Fragment,null,F.createElement("path",{d:"M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"}))],["thin",F.createElement(F.Fragment,null,F.createElement("path",{d:"M249.88,92.47l-120-64a4,4,0,0,0-3.76,0l-120,64a4,4,0,0,0,0,7.06L36,115.47v50.82a11.92,11.92,0,0,0,3,8c12.65,14.09,41,37.73,89,37.73,21,0,38.2-4.52,52-10.79V240a4,4,0,0,0,8,0V197.18a111.64,111.64,0,0,0,29-22.91,11.94,11.94,0,0,0,3-8V115.47l29.88-15.94a4,4,0,0,0,0-7.06ZM128,204c-44.83,0-71.25-22-83-35.08a3.92,3.92,0,0,1-1-2.63V119.73l82.12,43.8a4,4,0,0,0,3.76,0L180,136.8v55.53C166.58,199,149.39,204,128,204Zm84-37.71a4,4,0,0,1-1,2.64,103.32,103.32,0,0,1-23,19v-55.4l24-12.8Zm-24.59-42.51a4,4,0,0,0-1.53-1.44l-56-29.87a4,4,0,0,0-3.76,7.06L179.5,128,128,155.47,16.5,96,128,36.53,239.5,96Z"}))]]),dx=new Map([["bold",F.createElement(F.Fragment,null,F.createElement("path",{d:"M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Zm-76-92a32,32,0,0,0-12,61.66V180a12,12,0,0,0,24,0v-6.34A32,32,0,0,0,128,112Zm0,24a8,8,0,1,1-8,8A8,8,0,0,1,128,136Z"}))],["duotone",F.createElement(F.Fragment,null,F.createElement("path",{d:"M208,88H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V96A8,8,0,0,0,208,88Zm-80,72a20,20,0,1,1,20-20A20,20,0,0,1,128,160Z",opacity:"0.2"}),F.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-80-96a28,28,0,0,0-8,54.83V184a8,8,0,0,0,16,0V166.83A28,28,0,0,0,128,112Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,152Z"}))],["fill",F.createElement(F.Fragment,null,F.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-72,78.63V184a8,8,0,0,1-16,0V158.63a24,24,0,1,1,16,0ZM160,80H96V56a32,32,0,0,1,64,0Z"}))],["light",F.createElement(F.Fragment,null,F.createElement("path",{d:"M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-82-94a26,26,0,0,0-6,51.29V184a6,6,0,0,0,12,0V165.29A26,26,0,0,0,128,114Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,128,154Z"}))],["regular",F.createElement(F.Fragment,null,F.createElement("path",{d:"M128,112a28,28,0,0,0-8,54.83V184a8,8,0,0,0,16,0V166.83A28,28,0,0,0,128,112Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,152Zm80-72H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"}))],["thin",F.createElement(F.Fragment,null,F.createElement("path",{d:"M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-84-92a24,24,0,0,0-4,47.66V184a4,4,0,0,0,8,0V163.66A24,24,0,0,0,128,116Zm0,40a16,16,0,1,1,16-16A16,16,0,0,1,128,156Z"}))]]),hx=new Map([["bold",F.createElement(F.Fragment,null,F.createElement("path",{d:"M208,36H48A20,20,0,0,0,28,56v56c0,54.29,26.32,87.22,48.4,105.29,23.71,19.39,47.44,26,48.44,26.29a12.1,12.1,0,0,0,6.32,0c1-.28,24.73-6.9,48.44-26.29,22.08-18.07,48.4-51,48.4-105.29V56A20,20,0,0,0,208,36Zm-4,76c0,35.71-13.09,64.69-38.91,86.15A126.28,126.28,0,0,1,128,219.38a126.14,126.14,0,0,1-37.09-21.23C65.09,176.69,52,147.71,52,112V60H204ZM79.51,144.49a12,12,0,1,1,17-17L112,143l47.51-47.52a12,12,0,0,1,17,17l-56,56a12,12,0,0,1-17,0Z"}))],["duotone",F.createElement(F.Fragment,null,F.createElement("path",{d:"M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z",opacity:"0.2"}),F.createElement("path",{d:"M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"}))],["fill",F.createElement(F.Fragment,null,F.createElement("path",{d:"M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm-34.32,69.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"}))],["light",F.createElement(F.Fragment,null,F.createElement("path",{d:"M208,42H48A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c.95-.26,23.49-6.55,46.22-25.15C196.88,195.4,222,163.94,222,112V56A14,14,0,0,0,208,42Zm2,70c0,37.76-13.94,68.39-41.44,91.06A131.17,131.17,0,0,1,128,225.72a130.94,130.94,0,0,1-40.56-22.66C59.94,180.39,46,149.76,46,112V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76Z"}))],["regular",F.createElement(F.Fragment,null,F.createElement("path",{d:"M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"}))],["thin",F.createElement(F.Fragment,null,F.createElement("path",{d:"M208,44H48A12,12,0,0,0,36,56v56c0,51.16,24.73,82.12,45.47,99.1,22.4,18.32,44.55,24.5,45.48,24.76a4,4,0,0,0,2.1,0c.93-.26,23.08-6.44,45.48-24.76,20.74-17,45.47-47.94,45.47-99.1V56A12,12,0,0,0,208,44Zm4,68c0,38.44-14.23,69.63-42.29,92.71A132.45,132.45,0,0,1,128,227.82a132.23,132.23,0,0,1-41.71-23.11C58.23,181.63,44,150.44,44,112V56a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-41.17-10.83a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17Z"}))]]),px=new Map([["bold",F.createElement(F.Fragment,null,F.createElement("path",{d:"M144.49,136.49l-40,40a12,12,0,0,1-17-17L107,140H24a12,12,0,0,1,0-24h83L87.51,96.49a12,12,0,0,1,17-17l40,40A12,12,0,0,1,144.49,136.49ZM200,28H136a12,12,0,0,0,0,24h52V204H136a12,12,0,0,0,0,24h64a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28Z"}))],["duotone",F.createElement(F.Fragment,null,F.createElement("path",{d:"M200,40V216H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40Z",opacity:"0.2"}),F.createElement("path",{d:"M141.66,133.66l-40,40a8,8,0,0,1-11.32-11.32L116.69,136H24a8,8,0,0,1,0-16h92.69L90.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,141.66,133.66ZM200,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h64a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32Z"}))],["fill",F.createElement(F.Fragment,null,F.createElement("path",{d:"M141.66,133.66l-40,40A8,8,0,0,1,88,168V136H24a8,8,0,0,1,0-16H88V88a8,8,0,0,1,13.66-5.66l40,40A8,8,0,0,1,141.66,133.66ZM200,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h64a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32Z"}))],["light",F.createElement(F.Fragment,null,F.createElement("path",{d:"M140.24,132.24l-40,40a6,6,0,0,1-8.48-8.48L121.51,134H24a6,6,0,0,1,0-12h97.51L91.76,92.24a6,6,0,0,1,8.48-8.48l40,40A6,6,0,0,1,140.24,132.24ZM200,34H136a6,6,0,0,0,0,12h58V210H136a6,6,0,0,0,0,12h64a6,6,0,0,0,6-6V40A6,6,0,0,0,200,34Z"}))],["regular",F.createElement(F.Fragment,null,F.createElement("path",{d:"M141.66,133.66l-40,40a8,8,0,0,1-11.32-11.32L116.69,136H24a8,8,0,0,1,0-16h92.69L90.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,141.66,133.66ZM200,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h64a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32Z"}))],["thin",F.createElement(F.Fragment,null,F.createElement("path",{d:"M138.83,130.83l-40,40a4,4,0,0,1-5.66-5.66L126.34,132H24a4,4,0,0,1,0-8H126.34L93.17,90.83a4,4,0,0,1,5.66-5.66l40,40A4,4,0,0,1,138.83,130.83ZM200,36H136a4,4,0,0,0,0,8h60V212H136a4,4,0,0,0,0,8h64a4,4,0,0,0,4-4V40A4,4,0,0,0,200,36Z"}))]]),mx=new Map([["bold",F.createElement(F.Fragment,null,F.createElement("path",{d:"M152,144a16,16,0,1,1-16-16A16,16,0,0,1,152,144Zm32-16a16,16,0,1,0,16,16A16,16,0,0,0,184,128Zm59.18,82.35a20,20,0,0,1-24.83,24.83l-23.26-6.84A84,84,0,0,1,83.72,187.11a83.2,83.2,0,0,1-22.82-6.77l-23.25,6.84A20.24,20.24,0,0,1,32,188a20,20,0,0,1-19.19-25.64l6.84-23.26A84,84,0,0,1,172.33,68.91a84,84,0,0,1,64,118.18ZM76.46,160.75A83.94,83.94,0,0,1,145,69.37,60,60,0,0,0,43.08,132.3a12,12,0,0,1,.93,9.06l-6.09,20.72L58.64,156a12,12,0,0,1,9.06.93A60.08,60.08,0,0,0,76.46,160.75ZM220,152a60,60,0,1,0-31.7,52.92,12,12,0,0,1,9.06-.93l20.72,6.09L212,189.36a12,12,0,0,1,.93-9.06A60.09,60.09,0,0,0,220,152Z"}))],["duotone",F.createElement(F.Fragment,null,F.createElement("path",{d:"M163.94,80.11h0C162.63,80,161.32,80,160,80a72,72,0,0,0-67.93,95.88h0a71.53,71.53,0,0,1-30-8.39l-27.76,8.16a8,8,0,0,1-9.93-9.93L32.5,138A72,72,0,1,1,163.94,80.11Z",opacity:"0.2"}),F.createElement("path",{d:"M144,140a12,12,0,1,1-12-12A12,12,0,0,1,144,140Zm44-12a12,12,0,1,0,12,12A12,12,0,0,0,188,128Zm51.34,83.47a16,16,0,0,1-19.87,19.87l-24.71-7.27A80,80,0,0,1,86.43,183.42a79,79,0,0,1-25.19-7.35l-24.71,7.27a16,16,0,0,1-19.87-19.87l7.27-24.71A80,80,0,1,1,169.58,72.59a80,80,0,0,1,62.49,114.17ZM81.3,166.3a79.94,79.94,0,0,1,70.38-93.87A64,64,0,0,0,39.55,134.19a8,8,0,0,1,.63,6L32,168l27.76-8.17a8,8,0,0,1,6,.63A63.45,63.45,0,0,0,81.3,166.3Zm135.15,15.89a64,64,0,1,0-26.26,26.26,8,8,0,0,1,6-.63L224,216l-8.17-27.76A8,8,0,0,1,216.45,182.19Z"}))],["fill",F.createElement(F.Fragment,null,F.createElement("path",{d:"M232.07,186.76A80,80,0,0,0,169.58,72.59,80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a79,79,0,0,0,25.19,7.35,80,80,0,0,0,108.33,40.65l24.71,7.27a16,16,0,0,0,19.87-19.87ZM132,152a12,12,0,1,1,12-12A12,12,0,0,1,132,152Zm-52,0a80.32,80.32,0,0,0,1.3,14.3,63.45,63.45,0,0,1-15.49-5.85,8,8,0,0,0-6-.63L32,168l8.17-27.76a8,8,0,0,0-.63-6A64,64,0,0,1,151.68,72.43,80.12,80.12,0,0,0,80,152Zm108,0a12,12,0,1,1,12-12A12,12,0,0,1,188,152Z"}))],["light",F.createElement(F.Fragment,null,F.createElement("path",{d:"M142,140a10,10,0,1,1-10-10A10,10,0,0,1,142,140Zm46-10a10,10,0,1,0,10,10A10,10,0,0,0,188,130Zm49.42,82A14,14,0,0,1,220,229.42l-25.46-7.49A78,78,0,0,1,87.84,181.58a77,77,0,0,1-26.42-7.65L36,181.42A14,14,0,0,1,18.58,164l7.49-25.46A78,78,0,1,1,168.19,74.43a78,78,0,0,1,61.74,112.15ZM83.86,168.87a77.92,77.92,0,0,1,71-94.68,66,66,0,1,0-117.1,60.94,6.05,6.05,0,0,1,.47,4.53l-8.17,27.76a2,2,0,0,0,2.48,2.49l27.77-8.17a6.06,6.06,0,0,1,4.53.47A65.2,65.2,0,0,0,83.86,168.87Zm134.35,14.26a66,66,0,1,0-27.08,27.08,6.06,6.06,0,0,1,4.53-.47l27.77,8.17a2,2,0,0,0,2.48-2.48l-8.17-27.77A6.05,6.05,0,0,1,218.21,183.13Z"}))],["regular",F.createElement(F.Fragment,null,F.createElement("path",{d:"M144,140a12,12,0,1,1-12-12A12,12,0,0,1,144,140Zm44-12a12,12,0,1,0,12,12A12,12,0,0,0,188,128Zm51.34,83.47a16,16,0,0,1-19.87,19.87l-24.71-7.27A80,80,0,0,1,86.43,183.42a79,79,0,0,1-25.19-7.35l-24.71,7.27a16,16,0,0,1-19.87-19.87l7.27-24.71A80,80,0,1,1,169.58,72.59a80,80,0,0,1,62.49,114.17ZM81.3,166.3a79.94,79.94,0,0,1,70.38-93.87A64,64,0,0,0,39.55,134.19a8,8,0,0,1,.63,6L32,168l27.76-8.17a8,8,0,0,1,6,.63A63.45,63.45,0,0,0,81.3,166.3Zm135.15,15.89a64,64,0,1,0-26.26,26.26,8,8,0,0,1,6-.63L224,216l-8.17-27.76A8,8,0,0,1,216.45,182.19Z"}))],["thin",F.createElement(F.Fragment,null,F.createElement("path",{d:"M140,140a8,8,0,1,1-8-8A8,8,0,0,1,140,140Zm48-8a8,8,0,1,0,8,8A8,8,0,0,0,188,132Zm47.5,80.6a12,12,0,0,1-14.9,14.9l-26.21-7.71A76,76,0,0,1,89.24,179.68a75,75,0,0,1-27.63-7.89L35.4,179.5a12,12,0,0,1-14.9-14.9l7.71-26.21A76,76,0,1,1,166.79,76.32a76,76,0,0,1,61,110.07Zm-149-41.28A76,76,0,0,1,158,76.05a68,68,0,1,0-122,60,4.07,4.07,0,0,1,.31,3l-8.17,27.76a4,4,0,0,0,5,5l27.76-8.17a4.07,4.07,0,0,1,3,.31A66.93,66.93,0,0,0,86.5,171.32Zm141.33,43.54-8.17-27.76a4.07,4.07,0,0,1,.31-3A68,68,0,1,0,192.08,212a4.07,4.07,0,0,1,1.89-.47,4,4,0,0,1,1.13.16l27.76,8.17a4,4,0,0,0,5-5Z"}))]]),gx=F.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Ui=F.forwardRef((s,e)=>{const{alt:i,color:r,size:o,weight:c,mirrored:d,children:p,weights:m,...h}=s,{color:x="currentColor",size:v,weight:g="regular",mirrored:y=!1,...T}=F.useContext(gx);return F.createElement("svg",{ref:e,xmlns:"http://www.w3.org/2000/svg",width:o??v,height:o??v,fill:r??x,viewBox:"0 0 256 256",transform:d||y?"scale(-1, 1)":void 0,...T,...h},!!i&&F.createElement("title",null,i),p,m.get(c??g))});Ui.displayName="IconBase";const e_=F.forwardRef((s,e)=>F.createElement(Ui,{ref:e,...s,weights:sx}));e_.displayName="ArrowLeftIcon";const _x=e_,t_=F.forwardRef((s,e)=>F.createElement(Ui,{ref:e,...s,weights:lx}));t_.displayName="DeviceMobileIcon";const vx=t_,n_=F.forwardRef((s,e)=>F.createElement(Ui,{ref:e,...s,weights:ox}));n_.displayName="EnvelopeSimpleIcon";const xx=n_,i_=F.forwardRef((s,e)=>F.createElement(Ui,{ref:e,...s,weights:cx}));i_.displayName="EyeIcon";const Sx=i_,a_=F.forwardRef((s,e)=>F.createElement(Ui,{ref:e,...s,weights:ux}));a_.displayName="EyeSlashIcon";const Mx=a_,r_=F.forwardRef((s,e)=>F.createElement(Ui,{ref:e,...s,weights:fx}));r_.displayName="GraduationCapIcon";const yx=r_,s_=F.forwardRef((s,e)=>F.createElement(Ui,{ref:e,...s,weights:dx}));s_.displayName="LockKeyIcon";const Ex=s_,l_=F.forwardRef((s,e)=>F.createElement(Ui,{ref:e,...s,weights:hx}));l_.displayName="ShieldCheckIcon";const bx=l_,o_=F.forwardRef((s,e)=>F.createElement(Ui,{ref:e,...s,weights:px}));o_.displayName="SignInIcon";const Tx=o_,c_=F.forwardRef((s,e)=>F.createElement(Ui,{ref:e,...s,weights:mx}));c_.displayName="WechatLogoIcon";const Ax=c_,dc=1672,Zg=941;function Rx(){const s=F.useRef(null);return F.useEffect(()=>{const e=s.current,i=e==null?void 0:e.getContext("2d");if(!e||!i)return;let r;const o=()=>{const c=document.querySelector(".newsroom-warp-canvas");if(i.clearRect(0,0,dc,Zg),c!=null&&c.width&&(c!=null&&c.height)){i.save(),i.beginPath(),i.moveTo(166,846),i.lineTo(1506,846),i.lineTo(1642,941),i.lineTo(30,941),i.closePath(),i.clip(),i.globalAlpha=.15,i.filter="blur(9px) saturate(1.18)",i.drawImage(c,0,478,dc,228,116,936,1440,-102),i.restore(),i.save(),i.globalCompositeOperation="destination-in";const d=i.createLinearGradient(0,840,0,941);d.addColorStop(0,"rgba(0, 0, 0, .78)"),d.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=d,i.fillRect(0,830,dc,111),i.restore()}r=window.requestAnimationFrame(o)};return r=window.requestAnimationFrame(o),()=>window.cancelAnimationFrame(r)},[]),He.jsx("canvas",{ref:s,className:"studio-floor-reflection",width:dc,height:Zg,"aria-hidden":"true"})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hh="185",Cx=0,Yg=1,wx=2,zc=1,Dx=2,ql=3,or=0,Zn=1,Vi=2,ya=0,Fs=1,Kg=2,Qg=3,Jg=4,Ux=5,Or=100,Lx=101,Nx=102,Ox=103,Px=104,Fx=200,Ix=201,Bx=202,zx=203,Yd=204,Kd=205,Hx=206,Vx=207,Gx=208,Xx=209,kx=210,Wx=211,qx=212,Zx=213,Yx=214,Qd=0,Jd=1,jd=2,Vs=3,$d=4,eh=5,th=6,nh=7,u_=0,Kx=1,Qx=2,ki=0,f_=1,d_=2,h_=3,p_=4,m_=5,g_=6,__=7,v_=300,Br=301,Gs=302,hd=303,pd=304,jc=306,ih=1e3,Ci=1001,ah=1002,Dn=1003,Jx=1004,hc=1005,ln=1006,md=1007,Fr=1008,_i=1009,x_=1010,S_=1011,Yl=1012,Vh=1013,Zi=1014,Gi=1015,ba=1016,Gh=1017,Xh=1018,Kl=1020,M_=35902,y_=35899,E_=1021,b_=1022,wi=1023,Ta=1026,Ir=1027,T_=1028,kh=1029,zr=1030,Wh=1031,qh=1033,Hc=33776,Vc=33777,Gc=33778,Xc=33779,rh=35840,sh=35841,lh=35842,oh=35843,ch=36196,uh=37492,fh=37496,dh=37488,hh=37489,Wc=37490,ph=37491,mh=37808,gh=37809,_h=37810,vh=37811,xh=37812,Sh=37813,Mh=37814,yh=37815,Eh=37816,bh=37817,Th=37818,Ah=37819,Rh=37820,Ch=37821,wh=36492,Dh=36494,Uh=36495,Lh=36283,Nh=36284,qc=36285,Oh=36286,jx=3200,jg=0,$x=1,rr="",Bn="srgb",Zc="srgb-linear",Yc="linear",Bt="srgb",Ss=7680,$g=519,eS=512,tS=513,nS=514,Zh=515,iS=516,aS=517,Yh=518,rS=519,e1=35044,t1="300 es",Xi=2e3,Kc=2001;function sS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ql(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lS(){const s=Ql("canvas");return s.style.display="block",s}const n1={};function i1(...s){const e="THREE."+s.shift();console.log(e,...s)}function A_(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function at(...s){s=A_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Et(...s){s=A_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Is(...s){const e=s.join(" ");e in n1||(n1[e]=!0,at(...s))}function oS(s,e,i){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const cS={[Qd]:Jd,[jd]:th,[$d]:nh,[Vs]:eh,[Jd]:Qd,[th]:jd,[nh]:$d,[eh]:Vs};class Vr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gd=Math.PI/180,Ph=180/Math.PI;function Jl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function yt(s,e,i){return Math.max(e,Math.min(i,s))}function uS(s,e){return(s%e+e)%e}function _d(s,e,i){return(1-i)*s+i*e}function zl(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ep=class ep{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ep.prototype.isVector2=!0;let wt=ep;class Ws{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,d,p){let m=r[o+0],h=r[o+1],x=r[o+2],v=r[o+3],g=c[d+0],y=c[d+1],T=c[d+2],D=c[d+3];if(v!==D||m!==g||h!==y||x!==T){let E=m*g+h*y+x*T+v*D;E<0&&(g=-g,y=-y,T=-T,D=-D,E=-E);let S=1-p;if(E<.9995){const z=Math.acos(E),N=Math.sin(z);S=Math.sin(S*z)/N,p=Math.sin(p*z)/N,m=m*S+g*p,h=h*S+y*p,x=x*S+T*p,v=v*S+D*p}else{m=m*S+g*p,h=h*S+y*p,x=x*S+T*p,v=v*S+D*p;const z=1/Math.sqrt(m*m+h*h+x*x+v*v);m*=z,h*=z,x*=z,v*=z}}e[i]=m,e[i+1]=h,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,o,c,d){const p=r[o],m=r[o+1],h=r[o+2],x=r[o+3],v=c[d],g=c[d+1],y=c[d+2],T=c[d+3];return e[i]=p*T+x*v+m*y-h*g,e[i+1]=m*T+x*g+h*v-p*y,e[i+2]=h*T+x*y+p*g-m*v,e[i+3]=x*T-p*v-m*g-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(r/2),x=p(o/2),v=p(c/2),g=m(r/2),y=m(o/2),T=m(c/2);switch(d){case"XYZ":this._x=g*x*v+h*y*T,this._y=h*y*v-g*x*T,this._z=h*x*T+g*y*v,this._w=h*x*v-g*y*T;break;case"YXZ":this._x=g*x*v+h*y*T,this._y=h*y*v-g*x*T,this._z=h*x*T-g*y*v,this._w=h*x*v+g*y*T;break;case"ZXY":this._x=g*x*v-h*y*T,this._y=h*y*v+g*x*T,this._z=h*x*T+g*y*v,this._w=h*x*v-g*y*T;break;case"ZYX":this._x=g*x*v-h*y*T,this._y=h*y*v+g*x*T,this._z=h*x*T-g*y*v,this._w=h*x*v+g*y*T;break;case"YZX":this._x=g*x*v+h*y*T,this._y=h*y*v+g*x*T,this._z=h*x*T-g*y*v,this._w=h*x*v-g*y*T;break;case"XZY":this._x=g*x*v-h*y*T,this._y=h*y*v-g*x*T,this._z=h*x*T+g*y*v,this._w=h*x*v+g*y*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],v=i[10],g=r+p+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-h)*y,this._z=(d-o)*y}else if(r>p&&r>v){const y=2*Math.sqrt(1+r-p-v);this._w=(x-m)/y,this._x=.25*y,this._y=(o+d)/y,this._z=(c+h)/y}else if(p>v){const y=2*Math.sqrt(1+p-r-v);this._w=(c-h)/y,this._x=(o+d)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+v-r-p);this._w=(d-o)/y,this._x=(c+h)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=r*x+d*p+o*h-c*m,this._y=o*x+d*m+c*p-r*h,this._z=c*x+d*h+r*m-o*p,this._w=d*x-r*p-o*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,o=-o,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tp=class tp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(a1.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(a1.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*o-p*r),x=2*(p*i-c*o),v=2*(c*r-d*i);return this.x=i+m*h+d*v-p*x,this.y=r+m*x+p*h-c*v,this.z=o+m*v+c*x-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=o*m-c*p,this.y=c*d-r*m,this.z=r*p-o*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return vd.copy(this).projectOnVector(e),this.sub(vd)}reflect(e){return this.sub(vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tp.prototype.isVector3=!0;let oe=tp;const vd=new oe,a1=new Ws,np=class np{constructor(e,i,r,o,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,d,p,m,h)}set(e,i,r,o,c,d,p,m,h){const x=this.elements;return x[0]=e,x[1]=o,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],x=r[4],v=r[7],g=r[2],y=r[5],T=r[8],D=o[0],E=o[3],S=o[6],z=o[1],N=o[4],C=o[7],P=o[2],U=o[5],I=o[8];return c[0]=d*D+p*z+m*P,c[3]=d*E+p*N+m*U,c[6]=d*S+p*C+m*I,c[1]=h*D+x*z+v*P,c[4]=h*E+x*N+v*U,c[7]=h*S+x*C+v*I,c[2]=g*D+y*z+T*P,c[5]=g*E+y*N+T*U,c[8]=g*S+y*C+T*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8];return i*d*x-i*p*h-r*c*x+r*p*m+o*c*h-o*d*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],v=x*d-p*h,g=p*m-x*c,y=h*c-d*m,T=i*v+r*g+o*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/T;return e[0]=v*D,e[1]=(o*h-x*r)*D,e[2]=(p*r-o*d)*D,e[3]=g*D,e[4]=(x*i-o*m)*D,e[5]=(o*c-p*i)*D,e[6]=y*D,e[7]=(r*m-h*i)*D,e[8]=(d*i-r*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+e,-o*h,o*m,-o*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xd.makeScale(e,i)),this}rotate(e){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xd.makeRotation(-e)),this}translate(e,i){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};np.prototype.isMatrix3=!0;let st=np;const xd=new st,r1=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s1=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fS(){const s={enabled:!0,workingColorSpace:Zc,spaces:{},convert:function(o,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Bt&&(o.r=Ea(o.r),o.g=Ea(o.g),o.b=Ea(o.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Bt&&(o.r=Bs(o.r),o.g=Bs(o.g),o.b=Bs(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===rr?Yc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,d){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Zc]:{primaries:e,whitePoint:r,transfer:Yc,toXYZ:r1,fromXYZ:s1,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:r1,fromXYZ:s1,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),s}const Mt=fS();function Ea(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class dS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ms===void 0&&(Ms=Ql("canvas")),Ms.width=e.width,Ms.height=e.height;const o=Ms.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ms}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ql("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=Ea(c[d]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ea(i[r]/255)*255):i[r]=Ea(i[r]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hS=0;class Kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Jl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,p=o.length;d<p;d++)o[d].isDataTexture?c.push(Sd(o[d].image)):c.push(Sd(o[d]))}else c=Sd(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function Sd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let pS=0;const Md=new oe;class Un extends Vr{constructor(e=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=Ci,o=Ci,c=ln,d=Fr,p=wi,m=_i,h=Un.DEFAULT_ANISOTROPY,x=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Jl(),this.name="",this.source=new Kh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ih:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ih:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=v_;Un.DEFAULT_ANISOTROPY=1;const ip=class ip{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,h=m[0],x=m[4],v=m[8],g=m[1],y=m[5],T=m[9],D=m[2],E=m[6],S=m[10];if(Math.abs(x-g)<.01&&Math.abs(v-D)<.01&&Math.abs(T-E)<.01){if(Math.abs(x+g)<.1&&Math.abs(v+D)<.1&&Math.abs(T+E)<.1&&Math.abs(h+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(h+1)/2,C=(y+1)/2,P=(S+1)/2,U=(x+g)/4,I=(v+D)/4,b=(T+E)/4;return N>C&&N>P?N<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(N),o=U/r,c=I/r):C>P?C<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),r=U/o,c=b/o):P<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(P),r=I/c,o=b/c),this.set(r,o,c,i),this}let z=Math.sqrt((E-T)*(E-T)+(v-D)*(v-D)+(g-x)*(g-x));return Math.abs(z)<.001&&(z=1),this.x=(E-T)/z,this.y=(v-D)/z,this.z=(g-x)/z,this.w=Math.acos((h+y+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ip.prototype.isVector4=!0;let sn=ip;class mS extends Vr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new Un(o),d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new Kh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends mS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class R_ extends Un{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gS extends Un{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=class Jc{constructor(e,i,r,o,c,d,p,m,h,x,v,g,y,T,D,E){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,d,p,m,h,x,v,g,y,T,D,E)}set(e,i,r,o,c,d,p,m,h,x,v,g,y,T,D,E){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=o,S[1]=c,S[5]=d,S[9]=p,S[13]=m,S[2]=h,S[6]=x,S[10]=v,S[14]=g,S[3]=y,S[7]=T,S[11]=D,S[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/ys.setFromMatrixColumn(e,0).length(),c=1/ys.setFromMatrixColumn(e,1).length(),d=1/ys.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(o),h=Math.sin(o),x=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=d*x,y=d*v,T=p*x,D=p*v;i[0]=m*x,i[4]=-m*v,i[8]=h,i[1]=y+T*h,i[5]=g-D*h,i[9]=-p*m,i[2]=D-g*h,i[6]=T+y*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*x,y=m*v,T=h*x,D=h*v;i[0]=g+D*p,i[4]=T*p-y,i[8]=d*h,i[1]=d*v,i[5]=d*x,i[9]=-p,i[2]=y*p-T,i[6]=D+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*x,y=m*v,T=h*x,D=h*v;i[0]=g-D*p,i[4]=-d*v,i[8]=T+y*p,i[1]=y+T*p,i[5]=d*x,i[9]=D-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*x,y=d*v,T=p*x,D=p*v;i[0]=m*x,i[4]=T*h-y,i[8]=g*h+D,i[1]=m*v,i[5]=D*h+g,i[9]=y*h-T,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,y=d*h,T=p*m,D=p*h;i[0]=m*x,i[4]=D-g*v,i[8]=T*v+y,i[1]=v,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=y*v+T,i[10]=g-D*v}else if(e.order==="XZY"){const g=d*m,y=d*h,T=p*m,D=p*h;i[0]=m*x,i[4]=-v,i[8]=h*x,i[1]=g*v+D,i[5]=d*x,i[9]=y*v-T,i[2]=T*v-y,i[6]=p*x,i[10]=D*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_S,e,vS)}lookAt(e,i,r){const o=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),$a.crossVectors(r,ri),$a.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),$a.crossVectors(r,ri)),$a.normalize(),pc.crossVectors(ri,$a),o[0]=$a.x,o[4]=pc.x,o[8]=ri.x,o[1]=$a.y,o[5]=pc.y,o[9]=ri.y,o[2]=$a.z,o[6]=pc.z,o[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],x=r[1],v=r[5],g=r[9],y=r[13],T=r[2],D=r[6],E=r[10],S=r[14],z=r[3],N=r[7],C=r[11],P=r[15],U=o[0],I=o[4],b=o[8],O=o[12],W=o[1],G=o[5],J=o[9],he=o[13],ve=o[2],j=o[6],B=o[10],V=o[14],$=o[3],ge=o[7],be=o[11],L=o[15];return c[0]=d*U+p*W+m*ve+h*$,c[4]=d*I+p*G+m*j+h*ge,c[8]=d*b+p*J+m*B+h*be,c[12]=d*O+p*he+m*V+h*L,c[1]=x*U+v*W+g*ve+y*$,c[5]=x*I+v*G+g*j+y*ge,c[9]=x*b+v*J+g*B+y*be,c[13]=x*O+v*he+g*V+y*L,c[2]=T*U+D*W+E*ve+S*$,c[6]=T*I+D*G+E*j+S*ge,c[10]=T*b+D*J+E*B+S*be,c[14]=T*O+D*he+E*V+S*L,c[3]=z*U+N*W+C*ve+P*$,c[7]=z*I+N*G+C*j+P*ge,c[11]=z*b+N*J+C*B+P*be,c[15]=z*O+N*he+C*V+P*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],x=e[2],v=e[6],g=e[10],y=e[14],T=e[3],D=e[7],E=e[11],S=e[15],z=m*y-h*g,N=p*y-h*v,C=p*g-m*v,P=d*y-h*x,U=d*g-m*x,I=d*v-p*x;return i*(D*z-E*N+S*C)-r*(T*z-E*P+S*U)+o*(T*N-D*P+S*I)-c*(T*C-D*U+E*I)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],d=e[5],p=e[9],m=e[2],h=e[6],x=e[10];return i*(d*x-p*h)-r*(c*x-p*m)+o*(c*h-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],v=e[9],g=e[10],y=e[11],T=e[12],D=e[13],E=e[14],S=e[15],z=i*p-r*d,N=i*m-o*d,C=i*h-c*d,P=r*m-o*p,U=r*h-c*p,I=o*h-c*m,b=x*D-v*T,O=x*E-g*T,W=x*S-y*T,G=v*E-g*D,J=v*S-y*D,he=g*S-y*E,ve=z*he-N*J+C*G+P*W-U*O+I*b;if(ve===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/ve;return e[0]=(p*he-m*J+h*G)*j,e[1]=(o*J-r*he-c*G)*j,e[2]=(D*I-E*U+S*P)*j,e[3]=(g*U-v*I-y*P)*j,e[4]=(m*W-d*he-h*O)*j,e[5]=(i*he-o*W+c*O)*j,e[6]=(E*C-T*I-S*N)*j,e[7]=(x*I-g*C+y*N)*j,e[8]=(d*J-p*W+h*b)*j,e[9]=(r*W-i*J-c*b)*j,e[10]=(T*U-D*C+S*z)*j,e[11]=(v*C-x*U-y*z)*j,e[12]=(p*O-d*G-m*b)*j,e[13]=(i*G-r*O+o*b)*j,e[14]=(D*N-T*P-E*z)*j,e[15]=(x*P-v*N+g*z)*j,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,d=e.x,p=e.y,m=e.z,h=c*d,x=c*p;return this.set(h*d+r,h*p-o*m,h*m+o*p,0,h*p+o*m,x*p+r,x*m-o*d,0,h*m-o*p,x*m+o*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,x=d+d,v=p+p,g=c*h,y=c*x,T=c*v,D=d*x,E=d*v,S=p*v,z=m*h,N=m*x,C=m*v,P=r.x,U=r.y,I=r.z;return o[0]=(1-(D+S))*P,o[1]=(y+C)*P,o[2]=(T-N)*P,o[3]=0,o[4]=(y-C)*U,o[5]=(1-(g+S))*U,o[6]=(E+z)*U,o[7]=0,o[8]=(T+N)*I,o[9]=(E-z)*I,o[10]=(1-(g+D))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let d=ys.set(o[0],o[1],o[2]).length();const p=ys.set(o[4],o[5],o[6]).length(),m=ys.set(o[8],o[9],o[10]).length();c<0&&(d=-d),Ei.copy(this);const h=1/d,x=1/p,v=1/m;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=x,Ei.elements[5]*=x,Ei.elements[6]*=x,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,i.setFromRotationMatrix(Ei),r.x=d,r.y=p,r.z=m,this}makePerspective(e,i,r,o,c,d,p=Xi,m=!1){const h=this.elements,x=2*c/(i-e),v=2*c/(r-o),g=(i+e)/(i-e),y=(r+o)/(r-o);let T,D;if(m)T=c/(d-c),D=d*c/(d-c);else if(p===Xi)T=-(d+c)/(d-c),D=-2*d*c/(d-c);else if(p===Kc)T=-d/(d-c),D=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=D,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,o,c,d,p=Xi,m=!1){const h=this.elements,x=2/(i-e),v=2/(r-o),g=-(i+e)/(i-e),y=-(r+o)/(r-o);let T,D;if(m)T=1/(d-c),D=d/(d-c);else if(p===Xi)T=-2/(d-c),D=-(d+c)/(d-c);else if(p===Kc)T=-1/(d-c),D=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=T,h[14]=D,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Jc.prototype.isMatrix4=!0;let vn=Jc;const ys=new oe,Ei=new vn,_S=new oe(0,0,0),vS=new oe(1,1,1),$a=new oe,pc=new oe,ri=new oe,l1=new vn,o1=new Ws;class Hr{constructor(e=0,i=0,r=0,o=Hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],p=o[8],m=o[1],h=o[5],x=o[9],v=o[2],g=o[6],y=o[10];switch(i){case"XYZ":this._y=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return l1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(l1,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return o1.setFromEuler(this),this.setFromQuaternion(o1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hr.DEFAULT_ORDER="XYZ";class C_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xS=0;const c1=new oe,Es=new Ws,ga=new vn,mc=new oe,Hl=new oe,SS=new oe,MS=new Ws,u1=new oe(1,0,0),f1=new oe(0,1,0),d1=new oe(0,0,1),h1={type:"added"},yS={type:"removed"},bs={type:"childadded",child:null},yd={type:"childremoved",child:null};class li extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Jl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const e=new oe,i=new Hr,r=new Ws,o=new oe(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new vn},normalMatrix:{value:new st}}),this.matrix=new vn,this.matrixWorld=new vn,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new C_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Es.setFromAxisAngle(e,i),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,i){return Es.setFromAxisAngle(e,i),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(u1,e)}rotateY(e){return this.rotateOnAxis(f1,e)}rotateZ(e){return this.rotateOnAxis(d1,e)}translateOnAxis(e,i){return c1.copy(e).applyQuaternion(this.quaternion),this.position.add(c1.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(u1,e)}translateY(e){return this.translateOnAxis(f1,e)}translateZ(e){return this.translateOnAxis(d1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?mc.copy(e):mc.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(Hl,mc,this.up):ga.lookAt(mc,Hl,this.up),this.quaternion.setFromRotationMatrix(ga),o&&(ga.extractRotation(o.matrixWorld),Es.setFromRotationMatrix(ga),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(h1),bs.child=e,this.dispatchEvent(bs),bs.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(yS),yd.child=e,this.dispatchEvent(yd),yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(h1),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,e,SS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,MS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));o.material=p}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];o.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),x=d(e.images),v=d(e.shapes),g=d(e.skeletons),y=d(e.animations),T=d(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=o,r;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}li.DEFAULT_UP=new oe(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gc extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ES={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const D of e.hand.values()){const E=i.getJointPose(D,r),S=this._getHandJoint(h,D);E!==null&&(S.matrix.fromArray(E.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=E.radius),S.visible=E!==null}const x=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=x.position.distanceTo(v.position),y=.02,T=.005;h.inputState.pinching&&g>y+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=y-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(ES)))}return p!==null&&(p.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new gc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const w_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},_c={h:0,s:0,l:0};function bd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ut{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Mt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Mt.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Mt.workingColorSpace){if(e=uS(e,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=bd(d,c,e+1/3),this.g=bd(d,c,e),this.b=bd(d,c,e-1/3)}return Mt.colorSpaceToWorking(this,o),this}setStyle(e,i=Bn){function r(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],p=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Bn){const r=w_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Mt.workingToColorSpace(Pn.copy(this),e),Math.round(yt(Pn.r*255,0,255))*65536+Math.round(yt(Pn.g*255,0,255))*256+Math.round(yt(Pn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Mt.workingColorSpace){Mt.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,o=Pn.g,c=Pn.b,d=Math.max(r,o,c),p=Math.min(r,o,c);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const v=d-p;switch(h=x<=.5?v/(d+p):v/(2-d-p),d){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,i=Mt.workingColorSpace){return Mt.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Bn){Mt.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,r=Pn.g,o=Pn.b;return e!==Bn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(er),this.setHSL(er.h+e,er.s+i,er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(er),e.getHSL(_c);const r=_d(er.h,_c.h,i),o=_d(er.s,_c.s,i),c=_d(er.l,_c.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Ut;Ut.NAMES=w_;class bS extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hr,this.environmentIntensity=1,this.environmentRotation=new Hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const bi=new oe,_a=new oe,Td=new oe,va=new oe,Ts=new oe,As=new oe,p1=new oe,Ad=new oe,Rd=new oe,Cd=new oe,wd=new sn,Dd=new sn,Ud=new sn;class Ri{constructor(e=new oe,i=new oe,r=new oe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),bi.subVectors(e,i),o.cross(bi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){bi.subVectors(o,i),_a.subVectors(r,i),Td.subVectors(e,i);const d=bi.dot(bi),p=bi.dot(_a),m=bi.dot(Td),h=_a.dot(_a),x=_a.dot(Td),v=d*h-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(h*m-p*x)*g,T=(d*x-p*m)*g;return c.set(1-y-T,T,y)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(e,i,r,o,c,d,p,m){return this.getBarycoord(e,i,r,o,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(d,va.y),m.addScaledVector(p,va.z),m)}static getInterpolatedAttribute(e,i,r,o,c,d){return wd.setScalar(0),Dd.setScalar(0),Ud.setScalar(0),wd.fromBufferAttribute(e,i),Dd.fromBufferAttribute(e,r),Ud.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(wd,c.x),d.addScaledVector(Dd,c.y),d.addScaledVector(Ud,c.z),d}static isFrontFacing(e,i,r,o){return bi.subVectors(r,i),_a.subVectors(e,i),bi.cross(_a).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),bi.cross(_a).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ri.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return Ri.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let d,p;Ts.subVectors(o,r),As.subVectors(c,r),Ad.subVectors(e,r);const m=Ts.dot(Ad),h=As.dot(Ad);if(m<=0&&h<=0)return i.copy(r);Rd.subVectors(e,o);const x=Ts.dot(Rd),v=As.dot(Rd);if(x>=0&&v<=x)return i.copy(o);const g=m*v-x*h;if(g<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(Ts,d);Cd.subVectors(e,c);const y=Ts.dot(Cd),T=As.dot(Cd);if(T>=0&&y<=T)return i.copy(c);const D=y*h-m*T;if(D<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(r).addScaledVector(As,p);const E=x*T-y*v;if(E<=0&&v-x>=0&&y-T>=0)return p1.subVectors(c,o),p=(v-x)/(v-x+(y-T)),i.copy(o).addScaledVector(p1,p);const S=1/(E+D+g);return d=D*S,p=g*S,i.copy(r).addScaledVector(Ts,d).addScaledVector(As,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jl{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ti):Ti.fromBufferAttribute(c,d),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vc.copy(r.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vl),xc.subVectors(this.max,Vl),Rs.subVectors(e.a,Vl),Cs.subVectors(e.b,Vl),ws.subVectors(e.c,Vl),tr.subVectors(Cs,Rs),nr.subVectors(ws,Cs),wr.subVectors(Rs,ws);let i=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-wr.z,wr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,wr.z,0,-wr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-wr.y,wr.x,0];return!Ld(i,Rs,Cs,ws,xc)||(i=[1,0,0,0,1,0,0,0,1],!Ld(i,Rs,Cs,ws,xc))?!1:(Sc.crossVectors(tr,nr),i=[Sc.x,Sc.y,Sc.z],Ld(i,Rs,Cs,ws,xc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xa=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Ti=new oe,vc=new jl,Rs=new oe,Cs=new oe,ws=new oe,tr=new oe,nr=new oe,wr=new oe,Vl=new oe,xc=new oe,Sc=new oe,Dr=new oe;function Ld(s,e,i,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){Dr.fromArray(s,c);const p=o.x*Math.abs(Dr.x)+o.y*Math.abs(Dr.y)+o.z*Math.abs(Dr.z),m=e.dot(Dr),h=i.dot(Dr),x=r.dot(Dr);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const _n=new oe,Mc=new wt;let TS=0;class qi extends Vr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=e1,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(e),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=zl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=zl(i,this.array)),i}setX(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=zl(i,this.array)),i}setY(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=zl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=zl(i,this.array)),i}setW(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array),o=qn(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),r=qn(r,this.array),o=qn(o,this.array),c=qn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==e1&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class D_ extends qi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class U_ extends qi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Di extends qi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const AS=new jl,Gl=new oe,Nd=new oe;class Qh{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):AS.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gl.subVectors(e,this.center);const i=Gl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(Gl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gl.copy(e.center).add(Nd)),this.expandByPoint(Gl.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let RS=0;const gi=new vn,Od=new li,Ds=new oe,si=new jl,Xl=new jl,bn=new oe;class Qi extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Jl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sS(e)?U_:D_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new st().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,i,r){return gi.makeTranslation(e,i,r),this.applyMatrix4(gi),this}scale(e,i,r){return gi.makeScale(e,i,r),this.applyMatrix4(gi),this}lookAt(e){return Od.lookAt(e),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Di(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];si.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Xl.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(si.min,Xl.min),si.expandByPoint(bn),bn.addVectors(si.max,Xl.max),si.expandByPoint(bn)):(si.expandByPoint(Xl.min),si.expandByPoint(Xl.max))}si.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)bn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(bn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)bn.fromBufferAttribute(p,h),m&&(Ds.fromBufferAttribute(e,h),bn.add(Ds)),o=Math.max(o,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new qi(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let b=0;b<r.count;b++)p[b]=new oe,m[b]=new oe;const h=new oe,x=new oe,v=new oe,g=new wt,y=new wt,T=new wt,D=new oe,E=new oe;function S(b,O,W){h.fromBufferAttribute(r,b),x.fromBufferAttribute(r,O),v.fromBufferAttribute(r,W),g.fromBufferAttribute(c,b),y.fromBufferAttribute(c,O),T.fromBufferAttribute(c,W),x.sub(h),v.sub(h),y.sub(g),T.sub(g);const G=1/(y.x*T.y-T.x*y.y);isFinite(G)&&(D.copy(x).multiplyScalar(T.y).addScaledVector(v,-y.y).multiplyScalar(G),E.copy(v).multiplyScalar(y.x).addScaledVector(x,-T.x).multiplyScalar(G),p[b].add(D),p[O].add(D),p[W].add(D),m[b].add(E),m[O].add(E),m[W].add(E))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let b=0,O=z.length;b<O;++b){const W=z[b],G=W.start,J=W.count;for(let he=G,ve=G+J;he<ve;he+=3)S(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const N=new oe,C=new oe,P=new oe,U=new oe;function I(b){P.fromBufferAttribute(o,b),U.copy(P);const O=p[b];N.copy(O),N.sub(P.multiplyScalar(P.dot(O))).normalize(),C.crossVectors(U,O);const G=C.dot(m[b])<0?-1:1;d.setXYZW(b,N.x,N.y,N.z,G)}for(let b=0,O=z.length;b<O;++b){const W=z[b],G=W.start,J=W.count;for(let he=G,ve=G+J;he<ve;he+=3)I(e.getX(he+0)),I(e.getX(he+1)),I(e.getX(he+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new oe,c=new oe,d=new oe,p=new oe,m=new oe,h=new oe,x=new oe,v=new oe;if(e)for(let g=0,y=e.count;g<y;g+=3){const T=e.getX(g+0),D=e.getX(g+1),E=e.getX(g+2);o.fromBufferAttribute(i,T),c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,E),x.subVectors(d,c),v.subVectors(o,c),x.cross(v),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,D),h.fromBufferAttribute(r,E),p.add(x),m.add(x),h.add(x),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(E,h.x,h.y,h.z)}else for(let g=0,y=i.count;g<y;g+=3)o.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,c),v.subVectors(o,c),x.cross(v),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(p,m){const h=p.array,x=p.itemSize,v=p.normalized,g=new h.constructor(m.length*x);let y=0,T=0;for(let D=0,E=m.length;D<E;D++){p.isInterleavedBufferAttribute?y=m[D]*p.data.stride+p.offset:y=m[D]*x;for(let S=0;S<x;S++)g[T++]=h[y++]}return new qi(g,x,v)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qi,r=this.index.array,o=this.attributes;for(const p in o){const m=o[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,v=h.length;x<v;x++){const g=h[x],y=e(g,r);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let v=0,g=h.length;v<g;v++){const y=h[v];x.push(y.toJSON(e.data))}x.length>0&&(o[m]=x,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const x=o[h];this.setAttribute(h,x.clone(i))}const c=e.morphAttributes;for(const h in c){const x=[],v=c[h];for(let g=0,y=v.length;g<y;g++)x.push(v[g].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,x=d.length;h<x;h++){const v=d[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let CS=0;class $c extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Jl(),this.name="",this.type="Material",this.blending=Fs,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=Kd,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yd&&(r.blendSrc=this.blendSrc),this.blendDst!==Kd&&(r.blendDst=this.blendDst),this.blendEquation!==Or&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$g&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new wt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sa=new oe,Pd=new oe,yc=new oe,ir=new oe,Fd=new oe,Ec=new oe,Id=new oe;class wS{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){Pd.copy(e).add(i).multiplyScalar(.5),yc.copy(i).sub(e).normalize(),ir.copy(this.origin).sub(Pd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(yc),p=ir.dot(this.direction),m=-ir.dot(yc),h=ir.lengthSq(),x=Math.abs(1-d*d);let v,g,y,T;if(x>0)if(v=d*m-p,g=d*p-m,T=c*x,v>=0)if(g>=-T)if(g<=T){const D=1/x;v*=D,g*=D,y=v*(v+d*g+2*p)+g*(d*v+g+2*m)+h}else g=c,v=Math.max(0,-(d*g+p)),y=-v*v+g*(g+2*m)+h;else g=-c,v=Math.max(0,-(d*g+p)),y=-v*v+g*(g+2*m)+h;else g<=-T?(v=Math.max(0,-(-d*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+h):g<=T?(v=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+h):(v=Math.max(0,-(d*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+h);else g=d>0?-c:c,v=Math.max(0,-(d*g+p)),y=-v*v+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Pd).addScaledVector(yc,g),y}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const r=Sa.dot(this.direction),o=Sa.dot(Sa)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),x>=0?(c=(e.min.y-g.y)*x,d=(e.max.y-g.y)*x):(c=(e.max.y-g.y)*x,d=(e.min.y-g.y)*x),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),v>=0?(p=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(p=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),r>m||p>o)||((p>r||r!==r)&&(r=p),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,r,o,c){Fd.subVectors(i,e),Ec.subVectors(r,e),Id.crossVectors(Fd,Ec);let d=this.direction.dot(Id),p;if(d>0){if(o)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ir.subVectors(this.origin,e);const m=p*this.direction.dot(Ec.crossVectors(ir,Ec));if(m<0)return null;const h=p*this.direction.dot(Fd.cross(ir));if(h<0||m+h>d)return null;const x=-p*ir.dot(Id);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jh extends $c{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.combine=u_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const m1=new vn,Ur=new wS,bc=new Qh,g1=new oe,Tc=new oe,Ac=new oe,Rc=new oe,Bd=new oe,Cc=new oe,_1=new oe,wc=new oe;class Yi extends li{constructor(e=new Qi,i=new Jh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const p=this.morphTargetInfluences;if(c&&p){Cc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],v=c[m];x!==0&&(Bd.fromBufferAttribute(v,e),d?Cc.addScaledVector(Bd,x):Cc.addScaledVector(Bd.sub(i),x))}i.add(Cc)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(c),Ur.copy(e.ray).recast(e.near),!(bc.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(bc,g1)===null||Ur.origin.distanceToSquared(g1)>(e.far-e.near)**2))&&(m1.copy(c).invert(),Ur.copy(e.ray).applyMatrix4(m1),!(r.boundingBox!==null&&Ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Ur)))}_computeIntersections(e,i,r){let o;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,D=g.length;T<D;T++){const E=g[T],S=d[E.materialIndex],z=Math.max(E.start,y.start),N=Math.min(p.count,Math.min(E.start+E.count,y.start+y.count));for(let C=z,P=N;C<P;C+=3){const U=p.getX(C),I=p.getX(C+1),b=p.getX(C+2);o=Dc(this,S,e,r,h,x,v,U,I,b),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=E.materialIndex,i.push(o))}}else{const T=Math.max(0,y.start),D=Math.min(p.count,y.start+y.count);for(let E=T,S=D;E<S;E+=3){const z=p.getX(E),N=p.getX(E+1),C=p.getX(E+2);o=Dc(this,d,e,r,h,x,v,z,N,C),o&&(o.faceIndex=Math.floor(E/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,D=g.length;T<D;T++){const E=g[T],S=d[E.materialIndex],z=Math.max(E.start,y.start),N=Math.min(m.count,Math.min(E.start+E.count,y.start+y.count));for(let C=z,P=N;C<P;C+=3){const U=C,I=C+1,b=C+2;o=Dc(this,S,e,r,h,x,v,U,I,b),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=E.materialIndex,i.push(o))}}else{const T=Math.max(0,y.start),D=Math.min(m.count,y.start+y.count);for(let E=T,S=D;E<S;E+=3){const z=E,N=E+1,C=E+2;o=Dc(this,d,e,r,h,x,v,z,N,C),o&&(o.faceIndex=Math.floor(E/3),i.push(o))}}}}function DS(s,e,i,r,o,c,d,p){let m;if(e.side===Zn?m=r.intersectTriangle(d,c,o,!0,p):m=r.intersectTriangle(o,c,d,e.side===or,p),m===null)return null;wc.copy(p),wc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(wc);return h<i.near||h>i.far?null:{distance:h,point:wc.clone(),object:s}}function Dc(s,e,i,r,o,c,d,p,m,h){s.getVertexPosition(p,Tc),s.getVertexPosition(m,Ac),s.getVertexPosition(h,Rc);const x=DS(s,e,i,r,Tc,Ac,Rc,_1);if(x){const v=new oe;Ri.getBarycoord(_1,Tc,Ac,Rc,v),o&&(x.uv=Ri.getInterpolatedAttribute(o,p,m,h,v,new wt)),c&&(x.uv1=Ri.getInterpolatedAttribute(c,p,m,h,v,new wt)),d&&(x.normal=Ri.getInterpolatedAttribute(d,p,m,h,v,new oe),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new oe,materialIndex:0};Ri.getNormal(Tc,Ac,Rc,g.normal),x.face=g,x.barycoord=v}return x}class US extends Un{constructor(e=null,i=1,r=1,o,c,d,p,m,h=Dn,x=Dn,v,g){super(null,d,p,m,h,x,o,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zd=new oe,LS=new oe,NS=new st;class Nr{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=zd.subVectors(r,i).cross(LS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(zd),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(o,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||NS.getNormalMatrix(e),o=this.coplanarPoint(zd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new Qh,OS=new wt(.5,.5),Uc=new oe;class L_{constructor(e=new Nr,i=new Nr,r=new Nr,o=new Nr,c=new Nr,d=new Nr){this.planes=[e,i,r,o,c,d]}set(e,i,r,o,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(o),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Xi,r=!1){const o=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],x=c[4],v=c[5],g=c[6],y=c[7],T=c[8],D=c[9],E=c[10],S=c[11],z=c[12],N=c[13],C=c[14],P=c[15];if(o[0].setComponents(h-d,y-x,S-T,P-z).normalize(),o[1].setComponents(h+d,y+x,S+T,P+z).normalize(),o[2].setComponents(h+p,y+v,S+D,P+N).normalize(),o[3].setComponents(h-p,y-v,S-D,P-N).normalize(),r)o[4].setComponents(m,g,E,C).normalize(),o[5].setComponents(h-m,y-g,S-E,P-C).normalize();else if(o[4].setComponents(h-m,y-g,S-E,P-C).normalize(),i===Xi)o[5].setComponents(h+m,y+g,S+E,P+C).normalize();else if(i===Kc)o[5].setComponents(m,g,E,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){Lr.center.set(0,0,0);const i=OS.distanceTo(e.center);return Lr.radius=.7071067811865476+i,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(Uc.x=o.normal.x>0?e.max.x:e.min.x,Uc.y=o.normal.y>0?e.max.y:e.min.y,Uc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class PS extends Un{constructor(e,i,r,o,c=ln,d=ln,p,m,h){super(e,i,r,o,c,d,p,m,h),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const x=this;function v(){x.needsUpdate=!0,x._requestVideoFrameCallbackId=e.requestVideoFrameCallback(v)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(v))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class N_ extends Un{constructor(e=[],i=Br,r,o,c,d,p,m,h,x){super(e,i,r,o,c,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xs extends Un{constructor(e,i,r=Zi,o,c,d,p=Dn,m=Dn,h,x=Ta,v=1){if(x!==Ta&&x!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,o,c,d,p,m,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class FS extends Xs{constructor(e,i=Zi,r=Br,o,c,d=Dn,p=Dn,m,h=Ta){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,i,r,o,c,d,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class O_ extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $l extends Qi{constructor(e=1,i=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const p=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],v=[];let g=0,y=0;T("z","y","x",-1,-1,r,i,e,d,c,0),T("z","y","x",1,-1,r,i,-e,d,c,1),T("x","z","y",1,1,e,r,i,o,d,2),T("x","z","y",1,-1,e,r,-i,o,d,3),T("x","y","z",1,-1,e,i,r,o,c,4),T("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Di(h,3)),this.setAttribute("normal",new Di(x,3)),this.setAttribute("uv",new Di(v,2));function T(D,E,S,z,N,C,P,U,I,b,O){const W=C/I,G=P/b,J=C/2,he=P/2,ve=U/2,j=I+1,B=b+1;let V=0,$=0;const ge=new oe;for(let be=0;be<B;be++){const L=be*G-he;for(let K=0;K<j;K++){const Ee=K*W-J;ge[D]=Ee*z,ge[E]=L*N,ge[S]=ve,h.push(ge.x,ge.y,ge.z),ge[D]=0,ge[E]=0,ge[S]=U>0?1:-1,x.push(ge.x,ge.y,ge.z),v.push(K/I),v.push(1-be/b),V+=1}}for(let be=0;be<b;be++)for(let L=0;L<I;L++){const K=g+L+j*be,Ee=g+L+j*(be+1),Ce=g+(L+1)+j*(be+1),Fe=g+(L+1)+j*be;m.push(K,Ee,Fe),m.push(Ee,Ce,Fe),$+=6}p.addGroup(y,$,O),y+=$,g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class eu extends Qi{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,d=i/2,p=Math.floor(r),m=Math.floor(o),h=p+1,x=m+1,v=e/p,g=i/m,y=[],T=[],D=[],E=[];for(let S=0;S<x;S++){const z=S*g-d;for(let N=0;N<h;N++){const C=N*v-c;T.push(C,-z,0),D.push(0,0,1),E.push(N/p),E.push(1-S/m)}}for(let S=0;S<m;S++)for(let z=0;z<p;z++){const N=z+h*S,C=z+h*(S+1),P=z+1+h*(S+1),U=z+1+h*S;y.push(N,C,U),y.push(C,P,U)}this.setIndex(y),this.setAttribute("position",new Di(T,3)),this.setAttribute("normal",new Di(D,3)),this.setAttribute("uv",new Di(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.width,e.height,e.widthSegments,e.heightSegments)}}function ks(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const o=s[i][r];if(v1(o))o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(v1(o[0])){const c=[];for(let d=0,p=o.length;d<p;d++)c[d]=o[d].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function In(s){const e={};for(let i=0;i<s.length;i++){const r=ks(s[i]);for(const o in r)e[o]=r[o]}return e}function v1(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function IS(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function P_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const BS={clone:ks,merge:In};var zS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends $c{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zS,this.fragmentShader=HS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=IS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?i.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[o]={type:"m4",value:d.toArray()}:i.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Ut().setHex(o.value);break;case"v2":this.uniforms[r].value=new wt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new oe().fromArray(o.value);break;case"v4":this.uniforms[r].value=new sn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new st().fromArray(o.value);break;case"m4":this.uniforms[r].value=new vn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class VS extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class GS extends $c{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XS extends $c{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(x1(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!x1(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function x1(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class kS{constructor(e,i,r){const o=this;let c=!1,d=0,p=0,m;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(x){p++,c===!1&&o.onStart!==void 0&&o.onStart(x,d,p),c=!0},this.itemEnd=function(x){d++,o.onProgress!==void 0&&o.onProgress(x,d,p),d===p&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(x){o.onError!==void 0&&o.onError(x)},this.resolveURL=function(x){return x=x.normalize("NFC"),m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,v){return h.push(x,v),this},this.removeHandler=function(x){const v=h.indexOf(x);return v!==-1&&h.splice(v,2),this},this.getHandler=function(x){for(let v=0,g=h.length;v<g;v+=2){const y=h[v],T=h[v+1];if(y.global&&(y.lastIndex=0),y.test(x))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const WS=new kS;class jh{constructor(e){this.manager=e!==void 0?e:WS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const r=this;return new Promise(function(o,c){r.load(e,o,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}jh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Us=new WeakMap;class qS extends jh{constructor(e){super(e)}load(e,i,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,d=Hd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(d),c.manager.itemEnd(e)},0);else{let v=Us.get(d);v===void 0&&(v=[],Us.set(d,v)),v.push({onLoad:i,onError:o})}return d}const p=Ql("img");function m(){x(),i&&i(this);const v=Us.get(this)||[];for(let g=0;g<v.length;g++){const y=v[g];y.onLoad&&y.onLoad(this)}Us.delete(this),c.manager.itemEnd(e)}function h(v){x(),o&&o(v),Hd.remove(`image:${e}`);const g=Us.get(this)||[];for(let y=0;y<g.length;y++){const T=g[y];T.onError&&T.onError(v)}Us.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function x(){p.removeEventListener("load",m,!1),p.removeEventListener("error",h,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),Hd.add(`image:${e}`,p),c.manager.itemStart(e),p.src=e,p}}class ZS extends jh{constructor(e){super(e)}load(e,i,r,o){const c=new Un,d=new qS(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(p){c.image=p,c.needsUpdate=!0,i!==void 0&&i(c)},r,o),c}}const Lc=new oe,Nc=new Ws,Bi=new oe;class F_ extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vn,this.projectionMatrix=new vn,this.projectionMatrixInverse=new vn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lc,Nc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Nc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Lc,Nc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Nc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new oe,S1=new wt,M1=new wt;class Ai extends F_{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(gd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,i){return this.getViewBounds(e,S1,M1),i.subVectors(M1,S1)}setViewOffset(e,i,r,o,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(gd*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*o/m,i-=d.offsetY*r/h,o*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class $h extends F_{constructor(e=-1,i=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,p=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ls=-90,Ns=1;class YS extends li{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ai(Ls,Ns,e,i);o.layers=this.layers,this.add(o);const c=new Ai(Ls,Ns,e,i);c.layers=this.layers,this.add(c);const d=new Ai(Ls,Ns,e,i);d.layers=this.layers,this.add(d);const p=new Ai(Ls,Ns,e,i);p.layers=this.layers,this.add(p);const m=new Ai(Ls,Ns,e,i);m.layers=this.layers,this.add(m);const h=new Ai(Ls,Ns,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Kc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,x]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let E=!1;e.isWebGLRenderer===!0?E=e.state.buffers.depth.getReversed():E=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,o),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,o),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,o),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(v,g,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class KS extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ap=class ap{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};ap.prototype.isMatrix2=!0;let y1=ap;function E1(s,e,i,r){const o=QS(r);switch(i){case E_:return s*e;case T_:return s*e/o.components*o.byteLength;case kh:return s*e/o.components*o.byteLength;case zr:return s*e*2/o.components*o.byteLength;case Wh:return s*e*2/o.components*o.byteLength;case b_:return s*e*3/o.components*o.byteLength;case wi:return s*e*4/o.components*o.byteLength;case qh:return s*e*4/o.components*o.byteLength;case Hc:case Vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sh:case oh:return Math.max(s,16)*Math.max(e,8)/4;case rh:case lh:return Math.max(s,8)*Math.max(e,8)/2;case ch:case uh:case dh:case hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fh:case Wc:case ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Th:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wh:case Dh:case Uh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Lh:case Nh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qc:case Oh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function QS(s){switch(s){case _i:case x_:return{byteLength:1,components:1};case Yl:case S_:case ba:return{byteLength:2,components:1};case Gh:case Xh:return{byteLength:2,components:4};case Zi:case Vh:case Gi:return{byteLength:4,components:1};case M_:case y_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hh}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I_(){let s=null,e=!1,i=null,r=null;function o(c,d){i(c,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function JS(s){const e=new WeakMap;function i(p,m){const h=p.array,x=p.usage,v=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,x),p.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function r(p,m,h){const x=m.array,v=m.updateRanges;if(s.bindBuffer(h,p),v.length===0)s.bufferSubData(h,0,x);else{v.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<v.length;y++){const T=v[g],D=v[y];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++g,v[g]=D)}v.length=g+1;for(let y=0,T=v.length;y<T;y++){const D=v[y];s.bufferSubData(h,D.start*x.BYTES_PER_ELEMENT,x,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:o,remove:c,update:d}}var jS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$S=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,MM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,EM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,kM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN

		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );

		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );

		irradiance *= sheenEnergyComp;

	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_y=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,by=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER

		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {

	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif

				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Iy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$y=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_E=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN

		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;

	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:jS,alphahash_pars_fragment:$S,alphamap_fragment:eM,alphamap_pars_fragment:tM,alphatest_fragment:nM,alphatest_pars_fragment:iM,aomap_fragment:aM,aomap_pars_fragment:rM,batching_pars_vertex:sM,batching_vertex:lM,begin_vertex:oM,beginnormal_vertex:cM,bsdfs:uM,iridescence_fragment:fM,bumpmap_pars_fragment:dM,clipping_planes_fragment:hM,clipping_planes_pars_fragment:pM,clipping_planes_pars_vertex:mM,clipping_planes_vertex:gM,color_fragment:_M,color_pars_fragment:vM,color_pars_vertex:xM,color_vertex:SM,common:MM,cube_uv_reflection_fragment:yM,defaultnormal_vertex:EM,displacementmap_pars_vertex:bM,displacementmap_vertex:TM,emissivemap_fragment:AM,emissivemap_pars_fragment:RM,colorspace_fragment:CM,colorspace_pars_fragment:wM,envmap_fragment:DM,envmap_common_pars_fragment:UM,envmap_pars_fragment:LM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:kM,envmap_vertex:OM,fog_vertex:PM,fog_pars_vertex:FM,fog_fragment:IM,fog_pars_fragment:BM,gradientmap_pars_fragment:zM,lightmap_pars_fragment:HM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:GM,lights_pars_begin:XM,lights_toon_fragment:WM,lights_toon_pars_fragment:qM,lights_phong_fragment:ZM,lights_phong_pars_fragment:YM,lights_physical_fragment:KM,lights_physical_pars_fragment:QM,lights_fragment_begin:JM,lights_fragment_maps:jM,lights_fragment_end:$M,lightprobes_pars_fragment:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:ay,map_fragment:ry,map_pars_fragment:sy,map_particle_fragment:ly,map_particle_pars_fragment:oy,metalnessmap_fragment:cy,metalnessmap_pars_fragment:uy,morphinstance_vertex:fy,morphcolor_vertex:dy,morphnormal_vertex:hy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:_y,normal_pars_fragment:vy,normal_pars_vertex:xy,normal_vertex:Sy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:Ey,clearcoat_pars_fragment:by,iridescence_pars_fragment:Ty,opaque_fragment:Ay,packing:Ry,premultiplied_alpha_fragment:Cy,project_vertex:wy,dithering_fragment:Dy,dithering_pars_fragment:Uy,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:Oy,shadowmap_pars_vertex:Py,shadowmap_vertex:Fy,shadowmask_pars_fragment:Iy,skinbase_vertex:By,skinning_pars_vertex:zy,skinning_vertex:Hy,skinnormal_vertex:Vy,specularmap_fragment:Gy,specularmap_pars_fragment:Xy,tonemapping_fragment:ky,tonemapping_pars_fragment:Wy,transmission_fragment:qy,transmission_pars_fragment:Zy,uv_pars_fragment:Yy,uv_pars_vertex:Ky,uv_vertex:Qy,worldpos_vertex:Jy,background_vert:jy,background_frag:$y,backgroundCube_vert:eE,backgroundCube_frag:tE,cube_vert:nE,cube_frag:iE,depth_vert:aE,depth_frag:rE,distance_vert:sE,distance_frag:lE,equirect_vert:oE,equirect_frag:cE,linedashed_vert:uE,linedashed_frag:fE,meshbasic_vert:dE,meshbasic_frag:hE,meshlambert_vert:pE,meshlambert_frag:mE,meshmatcap_vert:gE,meshmatcap_frag:_E,meshnormal_vert:vE,meshnormal_frag:xE,meshphong_vert:SE,meshphong_frag:ME,meshphysical_vert:yE,meshphysical_frag:EE,meshtoon_vert:bE,meshtoon_frag:TE,points_vert:AE,points_frag:RE,shadow_vert:CE,shadow_frag:wE,sprite_vert:DE,sprite_frag:UE},Pe={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new oe},probesMax:{value:new oe},probesResolution:{value:new oe}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Hi={basic:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:In([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:In([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:In([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:In([Pe.points,Pe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:In([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:In([Pe.common,Pe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:In([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:In([Pe.sprite,Pe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:In([Pe.common,Pe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:In([Pe.lights,Pe.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Hi.physical={uniforms:In([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Oc={r:0,b:0,g:0},LE=new vn,B_=new st;B_.set(-1,0,0,0,1,0,0,0,1);function NE(s,e,i,r,o,c){const d=new Ut(0);let p=o===!0?0:1,m,h,x=null,v=0,g=null;function y(z){let N=z.isScene===!0?z.background:null;if(N&&N.isTexture){const C=z.backgroundBlurriness>0;N=e.get(N,C)}return N}function T(z){let N=!1;const C=y(z);C===null?E(d,p):C&&C.isColor&&(E(C,1),N=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function D(z,N){const C=y(N);C&&(C.isCubeTexture||C.mapping===jc)?(h===void 0&&(h=new Yi(new $l(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:ks(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(LE.makeRotationFromEuler(N.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(B_),h.material.toneMapped=Mt.getTransfer(C.colorSpace)!==Bt,(x!==C||v!==C.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,x=C,v=C.version,g=s.toneMapping),h.layers.enableAll(),z.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Yi(new eu(2,2),new Ki({name:"BackgroundMaterial",uniforms:ks(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(C.colorSpace)!==Bt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||v!==C.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,x=C,v=C.version,g=s.toneMapping),m.layers.enableAll(),z.unshift(m,m.geometry,m.material,0,0,null))}function E(z,N){z.getRGB(Oc,P_(s)),i.buffers.color.setClear(Oc.r,Oc.g,Oc.b,N,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,N=1){d.set(z),p=N,E(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(z){p=z,E(d,p)},render:T,addToRenderList:D,dispose:S}}function OE(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let c=o,d=!1;function p(G,J,he,ve,j){let B=!1;const V=v(G,ve,he,J);c!==V&&(c=V,h(c.object)),B=y(G,ve,he,j),B&&T(G,ve,he,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(B||d)&&(d=!1,C(G,J,he,ve),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function m(){return s.createVertexArray()}function h(G){return s.bindVertexArray(G)}function x(G){return s.deleteVertexArray(G)}function v(G,J,he,ve){const j=ve.wireframe===!0;let B=r[J.id];B===void 0&&(B={},r[J.id]=B);const V=G.isInstancedMesh===!0?G.id:0;let $=B[V];$===void 0&&($={},B[V]=$);let ge=$[he.id];ge===void 0&&(ge={},$[he.id]=ge);let be=ge[j];return be===void 0&&(be=g(m()),ge[j]=be),be}function g(G){const J=[],he=[],ve=[];for(let j=0;j<i;j++)J[j]=0,he[j]=0,ve[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:he,attributeDivisors:ve,object:G,attributes:{},index:null}}function y(G,J,he,ve){const j=c.attributes,B=J.attributes;let V=0;const $=he.getAttributes();for(const ge in $)if($[ge].location>=0){const L=j[ge];let K=B[ge];if(K===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),L===void 0||L.attribute!==K||K&&L.data!==K.data)return!0;V++}return c.attributesNum!==V||c.index!==ve}function T(G,J,he,ve){const j={},B=J.attributes;let V=0;const $=he.getAttributes();for(const ge in $)if($[ge].location>=0){let L=B[ge];L===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(L=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(L=G.instanceColor));const K={};K.attribute=L,L&&L.data&&(K.data=L.data),j[ge]=K,V++}c.attributes=j,c.attributesNum=V,c.index=ve}function D(){const G=c.newAttributes;for(let J=0,he=G.length;J<he;J++)G[J]=0}function E(G){S(G,0)}function S(G,J){const he=c.newAttributes,ve=c.enabledAttributes,j=c.attributeDivisors;he[G]=1,ve[G]===0&&(s.enableVertexAttribArray(G),ve[G]=1),j[G]!==J&&(s.vertexAttribDivisor(G,J),j[G]=J)}function z(){const G=c.newAttributes,J=c.enabledAttributes;for(let he=0,ve=J.length;he<ve;he++)J[he]!==G[he]&&(s.disableVertexAttribArray(he),J[he]=0)}function N(G,J,he,ve,j,B,V){V===!0?s.vertexAttribIPointer(G,J,he,j,B):s.vertexAttribPointer(G,J,he,ve,j,B)}function C(G,J,he,ve){D();const j=ve.attributes,B=he.getAttributes(),V=J.defaultAttributeValues;for(const $ in B){const ge=B[$];if(ge.location>=0){let be=j[$];if(be===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(be=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(be=G.instanceColor)),be!==void 0){const L=be.normalized,K=be.itemSize,Ee=e.get(be);if(Ee===void 0)continue;const Ce=Ee.buffer,Fe=Ee.type,ae=Ee.bytesPerElement,Se=Fe===s.INT||Fe===s.UNSIGNED_INT||be.gpuType===Vh;if(be.isInterleavedBufferAttribute){const ye=be.data,Ve=ye.stride,nt=be.offset;if(ye.isInstancedInterleavedBuffer){for(let Je=0;Je<ge.locationSize;Je++)S(ge.location+Je,ye.meshPerAttribute);G.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Je=0;Je<ge.locationSize;Je++)E(ge.location+Je);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Je=0;Je<ge.locationSize;Je++)N(ge.location+Je,K/ge.locationSize,Fe,L,Ve*ae,(nt+K/ge.locationSize*Je)*ae,Se)}else{if(be.isInstancedBufferAttribute){for(let ye=0;ye<ge.locationSize;ye++)S(ge.location+ye,be.meshPerAttribute);G.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ye=0;ye<ge.locationSize;ye++)E(ge.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let ye=0;ye<ge.locationSize;ye++)N(ge.location+ye,K/ge.locationSize,Fe,L,K*ae,K/ge.locationSize*ye*ae,Se)}}else if(V!==void 0){const L=V[$];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(ge.location,L);break;case 3:s.vertexAttrib3fv(ge.location,L);break;case 4:s.vertexAttrib4fv(ge.location,L);break;default:s.vertexAttrib1fv(ge.location,L)}}}}z()}function P(){O();for(const G in r){const J=r[G];for(const he in J){const ve=J[he];for(const j in ve){const B=ve[j];for(const V in B)x(B[V].object),delete B[V];delete ve[j]}}delete r[G]}}function U(G){if(r[G.id]===void 0)return;const J=r[G.id];for(const he in J){const ve=J[he];for(const j in ve){const B=ve[j];for(const V in B)x(B[V].object),delete B[V];delete ve[j]}}delete r[G.id]}function I(G){for(const J in r){const he=r[J];for(const ve in he){const j=he[ve];if(j[G.id]===void 0)continue;const B=j[G.id];for(const V in B)x(B[V].object),delete B[V];delete j[G.id]}}}function b(G){for(const J in r){const he=r[J],ve=G.isInstancedMesh===!0?G.id:0,j=he[ve];if(j!==void 0){for(const B in j){const V=j[B];for(const $ in V)x(V[$].object),delete V[$];delete j[B]}delete he[ve],Object.keys(he).length===0&&delete r[J]}}}function O(){W(),d=!0,c!==o&&(c=o,h(c.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:O,resetDefaultState:W,dispose:P,releaseStatesOfGeometry:U,releaseStatesOfObject:b,releaseStatesOfProgram:I,initAttributes:D,enableAttribute:E,disableUnusedAttributes:z}}function PE(s,e,i){let r;function o(m){r=m}function c(m,h){s.drawArrays(r,m,h),i.update(h,r,1)}function d(m,h,x){x!==0&&(s.drawArraysInstanced(r,m,h,x),i.update(h,r,x))}function p(m,h,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,x);let g=0;for(let y=0;y<x;y++)g+=h[y];i.update(g,r,1)}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function FE(s,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(I){return!(I!==wi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const b=I===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==_i&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gi&&!b)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(at("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:E,maxAttributes:S,maxVertexUniforms:z,maxVaryings:N,maxFragmentUniforms:C,maxSamples:P,samples:U}}function IE(s){const e=this;let i=null,r=0,o=!1,c=!1;const d=new Nr,p=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||r!==0||o;return o=g,r=v.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=x(v,g,0)},this.setState=function(v,g,y){const T=v.clippingPlanes,D=v.clipIntersection,E=v.clipShadows,S=s.get(v);if(!o||T===null||T.length===0||c&&!E)c?x(null):h();else{const z=c?0:r,N=z*4;let C=S.clippingState||null;m.value=C,C=x(T,g,N,y);for(let P=0;P!==N;++P)C[P]=i[P];S.clippingState=C,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=z}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,g,y,T){const D=v!==null?v.length:0;let E=null;if(D!==0){if(E=m.value,T!==!0||E===null){const S=y+D*4,z=g.matrixWorldInverse;p.getNormalMatrix(z),(E===null||E.length<S)&&(E=new Float32Array(S));for(let N=0,C=y;N!==D;++N,C+=4)d.copy(v[N]).applyMatrix4(z,p),d.normal.toArray(E,C),E[C+3]=d.constant}m.value=E,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,E}}const sr=4,b1=[.125,.215,.35,.446,.526,.582],Pr=20,BE=256,kl=new $h,T1=new Ut;let Vd=null,Gd=0,Xd=0,kd=!1;const zE=new oe;class A1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:d=256,position:p=zE}=c;Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,Gd,Xd),this._renderer.xr.enabled=kd,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Br||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ba,format:wi,colorSpace:Zc,depthBuffer:!1},o=R1(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R1(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=HE(c)),this._blurMaterial=GE(c,e,i),this._ggxMaterial=VE(c,e,i)}return o}_compileMaterial(e){const i=new Yi(new Qi,e);this._renderer.compile(i,kl)}_sceneToCubeUV(e,i,r,o,c){const m=new Ai(90,1,i,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(T1),v.toneMapping=ki,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yi(new $l,new Jh({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,E=D.material;let S=!1;const z=e.background;z?z.isColor&&(E.color.copy(z),e.background=null,S=!0):(E.color.copy(T1),S=!0);for(let N=0;N<6;N++){const C=N%3;C===0?(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[N],c.y,c.z)):C===1?(m.up.set(0,0,h[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[N],c.z)):(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[N]));const P=this._cubeSize;Os(o,C*P,N>2?P:0,P,P),v.setRenderTarget(o),S&&v.render(D,m),v.render(e,m)}v.toneMapping=y,v.autoClear=g,e.background=z}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===Br||e.mapping===Gs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=w1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C1());const c=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Os(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,kl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-x*x),g=0+h*1.25,y=v*g,{_lodMax:T}=this,D=this._sizeLods[r],E=3*D*(r>T-sr?r-T+sr:0),S=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=T-i,Os(c,E,S,3*D,2*D),o.setRenderTarget(c),o.render(p,kl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,Os(e,E,S,3*D,2*D),o.setRenderTarget(e),o.render(p,kl)}_blur(e,i,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,o,"latitudinal",c),this._halfBlur(d,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[o];v.material=h;const g=h.uniforms,y=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Pr-1),D=c/T,E=isFinite(c)?1+Math.floor(x*D):Pr;E>Pr&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Pr}`);const S=[];let z=0;for(let I=0;I<Pr;++I){const b=I/D,O=Math.exp(-b*b/2);S.push(O),I===0?z+=O:I<E&&(z+=2*O)}for(let I=0;I<S.length;I++)S[I]=S[I]/z;g.envMap.value=e.texture,g.samples.value=E,g.weights.value=S,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=T,g.mipInt.value=N-r;const C=this._sizeLods[o],P=3*C*(o>N-sr?o-N+sr:0),U=4*(this._cubeSize-C);Os(i,P,U,3*C,2*C),m.setRenderTarget(i),m.render(v,kl)}}function HE(s){const e=[],i=[],r=[];let o=s;const c=s-sr+1+b1.length;for(let d=0;d<c;d++){const p=Math.pow(2,o);e.push(p);let m=1/p;d>s-sr?m=b1[d-s+sr-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,v=1+h,g=[x,x,v,x,v,v,x,x,v,v,x,v],y=6,T=6,D=3,E=2,S=1,z=new Float32Array(D*T*y),N=new Float32Array(E*T*y),C=new Float32Array(S*T*y);for(let U=0;U<y;U++){const I=U%3*2/3-1,b=U>2?0:-1,O=[I,b,0,I+2/3,b,0,I+2/3,b+1,0,I,b,0,I+2/3,b+1,0,I,b+1,0];z.set(O,D*T*U),N.set(g,E*T*U);const W=[U,U,U,U,U,U];C.set(W,S*T*U)}const P=new Qi;P.setAttribute("position",new qi(z,D)),P.setAttribute("uv",new qi(N,E)),P.setAttribute("faceIndex",new qi(C,S)),r.push(new Yi(P,null)),o>sr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function R1(s,e,i){const r=new Wi(s,e,i);return r.texture.mapping=jc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Os(s,e,i,r,o){s.viewport.set(e,i,r,o),s.scissor.set(e,i,r,o)}function VE(s,e,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function GE(s,e,i){const r=new Float32Array(Pr),o=new oe(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function C1(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function w1(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class z_ extends Wi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new N_(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new $l(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:ya});c.uniforms.tEquirect.value=i;const d=new Yi(o,c),p=i.minFilter;return i.minFilter===Fr&&(i.minFilter=ln),new YS(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,o);e.setRenderTarget(c)}}function XE(s){let e=new WeakMap,i=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?d(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===hd||y===pd)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const D=new z_(T.height);return D.fromEquirectangularTexture(s,g),e.set(g,D),g.addEventListener("dispose",h),p(D.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const y=g.mapping,T=y===hd||y===pd,D=y===Br||y===Gs;if(T||D){let E=i.get(g);const S=E!==void 0?E.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new A1(s)),E=T?r.fromEquirectangular(g,E):r.fromCubemap(g,E),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),E.texture;if(E!==void 0)return E.texture;{const z=g.image;return T&&z&&z.height>0||D&&z&&m(z)?(r===null&&(r=new A1(s)),E=T?r.fromEquirectangular(g):r.fromCubemap(g),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),g.addEventListener("dispose",x),E.texture):null}}}return g}function p(g,y){return y===hd?g.mapping=Br:y===pd&&(g.mapping=Gs),g}function m(g){let y=0;const T=6;for(let D=0;D<T;D++)g[D]!==void 0&&y++;return y===T}function h(g){const y=g.target;y.removeEventListener("dispose",h);const T=e.get(y);T!==void 0&&(e.delete(y),T.dispose())}function x(g){const y=g.target;y.removeEventListener("dispose",x);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function kE(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&Is("WebGLRenderer: "+r+" extension not supported."),o}}}function WE(s,e,i,r){const o={},c=new WeakMap;function d(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete o[g.id];const y=c.get(g);y&&(e.remove(y),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return o[g.id]===!0||(g.addEventListener("dispose",d),o[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function h(v){const g=[],y=v.index,T=v.attributes.position;let D=0;if(T===void 0)return;if(y!==null){const z=y.array;D=y.version;for(let N=0,C=z.length;N<C;N+=3){const P=z[N+0],U=z[N+1],I=z[N+2];g.push(P,U,U,I,I,P)}}else{const z=T.array;D=T.version;for(let N=0,C=z.length/3-1;N<C;N+=3){const P=N+0,U=N+1,I=N+2;g.push(P,U,U,I,I,P)}}const E=new(T.count>=65535?U_:D_)(g,1);E.version=D;const S=c.get(v);S&&e.remove(S),c.set(v,E)}function x(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:x}}function qE(s,e,i){let r;function o(v){r=v}let c,d;function p(v){c=v.type,d=v.bytesPerElement}function m(v,g){s.drawElements(r,g,c,v*d),i.update(g,r,1)}function h(v,g,y){y!==0&&(s.drawElementsInstanced(r,g,c,v*d,y),i.update(g,r,y))}function x(v,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,v,0,y);let D=0;for(let E=0;E<y;E++)D+=g[E];i.update(D,r,1)}this.setMode=o,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x}function ZE(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Et("WebGLInfo: Unknown draw mode:",d);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function YE(s,e,i){const r=new WeakMap,o=new sn;function c(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=x!==void 0?x.length:0;let g=r.get(p);if(g===void 0||g.count!==v){let W=function(){b.dispose(),r.delete(p),p.removeEventListener("dispose",W)};var y=W;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,E=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],z=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let C=0;T===!0&&(C=1),D===!0&&(C=2),E===!0&&(C=3);let P=p.attributes.position.count*C,U=1;P>e.maxTextureSize&&(U=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const I=new Float32Array(P*U*4*v),b=new R_(I,P,U,v);b.type=Gi,b.needsUpdate=!0;const O=C*4;for(let G=0;G<v;G++){const J=S[G],he=z[G],ve=N[G],j=P*U*4*G;for(let B=0;B<J.count;B++){const V=B*O;T===!0&&(o.fromBufferAttribute(J,B),I[j+V+0]=o.x,I[j+V+1]=o.y,I[j+V+2]=o.z,I[j+V+3]=0),D===!0&&(o.fromBufferAttribute(he,B),I[j+V+4]=o.x,I[j+V+5]=o.y,I[j+V+6]=o.z,I[j+V+7]=0),E===!0&&(o.fromBufferAttribute(ve,B),I[j+V+8]=o.x,I[j+V+9]=o.y,I[j+V+10]=o.z,I[j+V+11]=ve.itemSize===4?o.w:1)}}g={count:v,texture:b,size:new wt(P,U)},r.set(p,g),p.addEventListener("dispose",W)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let T=0;for(let E=0;E<h.length;E++)T+=h[E];const D=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",D),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function KE(s,e,i,r,o){let c=new WeakMap;function d(h){const x=o.render.frame,v=h.geometry,g=e.get(h,v);if(c.get(g)!==x&&(e.update(g),c.set(g,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const y=h.skeleton;c.get(y)!==x&&(y.update(),c.set(y,x))}return g}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:p}}const QE={[f_]:"LINEAR_TONE_MAPPING",[d_]:"REINHARD_TONE_MAPPING",[h_]:"CINEON_TONE_MAPPING",[p_]:"ACES_FILMIC_TONE_MAPPING",[g_]:"AGX_TONE_MAPPING",[__]:"NEUTRAL_TONE_MAPPING",[m_]:"CUSTOM_TONE_MAPPING"};function JE(s,e,i,r,o,c){const d=new Wi(e,i,{type:s,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Xs(e,i):void 0}),p=new Wi(e,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),m=new Qi;m.setAttribute("position",new Di([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Di([0,2,0,0,2,0],2));const h=new VS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new Yi(m,h),v=new $h(-1,1,1,-1,0,1);let g=null,y=null,T=!1,D,E=null,S=[],z=!1;this.setSize=function(N,C){d.setSize(N,C),p.setSize(N,C);for(let P=0;P<S.length;P++){const U=S[P];U.setSize&&U.setSize(N,C)}},this.setEffects=function(N){S=N,z=S.length>0&&S[0].isRenderPass===!0;const C=d.width,P=d.height;for(let U=0;U<S.length;U++){const I=S[U];I.setSize&&I.setSize(C,P)}},this.begin=function(N,C){if(T||N.toneMapping===ki&&S.length===0)return!1;if(E=C,C!==null){const P=C.width,U=C.height;(d.width!==P||d.height!==U)&&this.setSize(P,U)}return z===!1&&N.setRenderTarget(d),D=N.toneMapping,N.toneMapping=ki,!0},this.hasRenderPass=function(){return z},this.end=function(N,C){N.toneMapping=D,T=!0;let P=d,U=p;for(let I=0;I<S.length;I++){const b=S[I];if(b.enabled!==!1&&(b.render(N,U,P,C),b.needsSwap!==!1)){const O=P;P=U,U=O}}if(g!==N.outputColorSpace||y!==N.toneMapping){g=N.outputColorSpace,y=N.toneMapping,h.defines={},Mt.getTransfer(g)===Bt&&(h.defines.SRGB_TRANSFER="");const I=QE[y];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,N.setRenderTarget(E),N.render(x,v),E=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),h.dispose()}}const H_=new Un,Fh=new Xs(1,1),V_=new R_,G_=new gS,X_=new N_,D1=[],U1=[],L1=new Float32Array(16),N1=new Float32Array(9),O1=new Float32Array(4);function qs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const o=e*i;let c=D1[o];if(c===void 0&&(c=new Float32Array(o),D1[o]=c),e!==0){r.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,s[d].toArray(c,p)}return c}function Mn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function yn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function nu(s,e){let i=U1[e];i===void 0&&(i=new Int32Array(e),U1[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function jE(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function $E(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2fv(this.addr,e),yn(i,e)}}function e3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;s.uniform3fv(this.addr,e),yn(i,e)}}function t3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4fv(this.addr,e),yn(i,e)}}function n3(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,r))return;O1.set(r),s.uniformMatrix2fv(this.addr,!1,O1),yn(i,r)}}function i3(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,r))return;N1.set(r),s.uniformMatrix3fv(this.addr,!1,N1),yn(i,r)}}function a3(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,r))return;L1.set(r),s.uniformMatrix4fv(this.addr,!1,L1),yn(i,r)}}function r3(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function s3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2iv(this.addr,e),yn(i,e)}}function l3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;s.uniform3iv(this.addr,e),yn(i,e)}}function o3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4iv(this.addr,e),yn(i,e)}}function c3(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function u3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2uiv(this.addr,e),yn(i,e)}}function f3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;s.uniform3uiv(this.addr,e),yn(i,e)}}function d3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4uiv(this.addr,e),yn(i,e)}}function h3(s,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Fh.compareFunction=i.isReversedDepthBuffer()?Yh:Zh,c=Fh):c=H_,i.setTexture2D(e||c,o)}function p3(s,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||G_,o)}function m3(s,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||X_,o)}function g3(s,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||V_,o)}function _3(s){switch(s){case 5126:return jE;case 35664:return $E;case 35665:return e3;case 35666:return t3;case 35674:return n3;case 35675:return i3;case 35676:return a3;case 5124:case 35670:return r3;case 35667:case 35671:return s3;case 35668:case 35672:return l3;case 35669:case 35673:return o3;case 5125:return c3;case 36294:return u3;case 36295:return f3;case 36296:return d3;case 35678:case 36198:case 36298:case 36306:case 35682:return h3;case 35679:case 36299:case 36307:return p3;case 35680:case 36300:case 36308:case 36293:return m3;case 36289:case 36303:case 36311:case 36292:return g3}}function v3(s,e){s.uniform1fv(this.addr,e)}function x3(s,e){const i=qs(e,this.size,2);s.uniform2fv(this.addr,i)}function S3(s,e){const i=qs(e,this.size,3);s.uniform3fv(this.addr,i)}function M3(s,e){const i=qs(e,this.size,4);s.uniform4fv(this.addr,i)}function y3(s,e){const i=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function E3(s,e){const i=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function b3(s,e){const i=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function T3(s,e){s.uniform1iv(this.addr,e)}function A3(s,e){s.uniform2iv(this.addr,e)}function R3(s,e){s.uniform3iv(this.addr,e)}function C3(s,e){s.uniform4iv(this.addr,e)}function w3(s,e){s.uniform1uiv(this.addr,e)}function D3(s,e){s.uniform2uiv(this.addr,e)}function U3(s,e){s.uniform3uiv(this.addr,e)}function L3(s,e){s.uniform4uiv(this.addr,e)}function N3(s,e,i){const r=this.cache,o=e.length,c=nu(i,o);Mn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Fh:d=H_;for(let p=0;p!==o;++p)i.setTexture2D(e[p]||d,c[p])}function O3(s,e,i){const r=this.cache,o=e.length,c=nu(i,o);Mn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let d=0;d!==o;++d)i.setTexture3D(e[d]||G_,c[d])}function P3(s,e,i){const r=this.cache,o=e.length,c=nu(i,o);Mn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let d=0;d!==o;++d)i.setTextureCube(e[d]||X_,c[d])}function F3(s,e,i){const r=this.cache,o=e.length,c=nu(i,o);Mn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let d=0;d!==o;++d)i.setTexture2DArray(e[d]||V_,c[d])}function I3(s){switch(s){case 5126:return v3;case 35664:return x3;case 35665:return S3;case 35666:return M3;case 35674:return y3;case 35675:return E3;case 35676:return b3;case 5124:case 35670:return T3;case 35667:case 35671:return A3;case 35668:case 35672:return R3;case 35669:case 35673:return C3;case 5125:return w3;case 36294:return D3;case 36295:return U3;case 36296:return L3;case 35678:case 36198:case 36298:case 36306:case 35682:return N3;case 35679:case 36299:case 36307:return O3;case 35680:case 36300:case 36308:case 36293:return P3;case 36289:case 36303:case 36311:case 36292:return F3}}class B3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=_3(i.type)}}class z3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=I3(i.type)}}class H3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const p=o[c];p.setValue(e,i[p.id],r)}}}const Wd=/(\w+)(\])?(\[|\.)?/g;function P1(s,e){s.seq.push(e),s.map[e.id]=e}function V3(s,e,i){const r=s.name,o=r.length;for(Wd.lastIndex=0;;){const c=Wd.exec(r),d=Wd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===o){P1(i,h===void 0?new B3(p,s,e):new z3(p,s,e));break}else{let v=i.map[p];v===void 0&&(v=new H3(p),P1(i,v)),i=v}}}class kc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);V3(p,m,this)}const o=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):c.push(d);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in i&&r.push(d)}return r}}function F1(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const G3=37297;let X3=0;function k3(s,e){const i=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=o;d<c;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const I1=new st;function W3(s){Mt._getMatrix(I1,Mt.workingColorSpace,s);const e=`mat3( ${I1.elements.map(i=>i.toFixed(4))} )`;switch(Mt.getTransfer(s)){case Yc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function B1(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+k3(s.getShaderSource(e),p)}else return c}function q3(s,e){const i=W3(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Z3={[f_]:"Linear",[d_]:"Reinhard",[h_]:"Cineon",[p_]:"ACESFilmic",[g_]:"AgX",[__]:"Neutral",[m_]:"Custom"};function Y3(s,e){const i=Z3[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pc=new oe;function K3(){Mt.getLuminanceCoefficients(Pc);const s=Pc.x.toFixed(4),e=Pc.y.toFixed(4),i=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q3(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zl).join(`
`)}function J3(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function j3(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:p}}return i}function Zl(s){return s!==""}function z1(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function H1(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(s){return s.replace($3,tb)}const eb=new Map;function tb(s,e){let i=ut[e];if(i===void 0){const r=eb.get(e);if(r!==void 0)i=ut[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ih(i)}const nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V1(s){return s.replace(nb,ib)}function ib(s,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function G1(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ab={[zc]:"SHADOWMAP_TYPE_PCF",[ql]:"SHADOWMAP_TYPE_VSM"};function rb(s){return ab[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sb={[Br]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[jc]:"ENVMAP_TYPE_CUBE_UV"};function lb(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":sb[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const ob={[Gs]:"ENVMAP_MODE_REFRACTION"};function cb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ob[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ub={[u_]:"ENVMAP_BLENDING_MULTIPLY",[Kx]:"ENVMAP_BLENDING_MIX",[Qx]:"ENVMAP_BLENDING_ADD"};function fb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ub[s.combine]||"ENVMAP_BLENDING_NONE"}function db(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function hb(s,e,i,r){const o=s.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=rb(i),h=lb(i),x=cb(i),v=fb(i),g=db(i),y=Q3(i),T=J3(c),D=o.createProgram();let E,S,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Zl).join(`
`),E.length>0&&(E+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Zl).join(`
`),S.length>0&&(S+=`
`)):(E=[G1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zl).join(`
`),S=[G1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?ut.tonemapping_pars_fragment:"",i.toneMapping!==ki?Y3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,q3("linearToOutputTexel",i.outputColorSpace),K3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zl).join(`
`)),d=Ih(d),d=z1(d,i),d=H1(d,i),p=Ih(p),p=z1(p,i),p=H1(p,i),d=V1(d),p=V1(p),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,E=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,S=["#define varying in",i.glslVersion===t1?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===t1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=z+E+d,C=z+S+p,P=F1(o,o.VERTEX_SHADER,N),U=F1(o,o.FRAGMENT_SHADER,C);o.attachShader(D,P),o.attachShader(D,U),i.index0AttributeName!==void 0?o.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(D,0,"position"),o.linkProgram(D);function I(G){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(D)||"",he=o.getShaderInfoLog(P)||"",ve=o.getShaderInfoLog(U)||"",j=J.trim(),B=he.trim(),V=ve.trim();let $=!0,ge=!0;if(o.getProgramParameter(D,o.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,D,P,U);else{const be=B1(o,P,"vertex"),L=B1(o,U,"fragment");Et("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(D,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+be+`
`+L)}else j!==""?at("WebGLProgram: Program Info Log:",j):(B===""||V==="")&&(ge=!1);ge&&(G.diagnostics={runnable:$,programLog:j,vertexShader:{log:B,prefix:E},fragmentShader:{log:V,prefix:S}})}o.deleteShader(P),o.deleteShader(U),b=new kc(o,D),O=j3(o,D)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let O;this.getAttributes=function(){return O===void 0&&I(this),O};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(D,G3)),W},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=X3++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=P,this.fragmentShader=U,this}let pb=0;class mb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new gb(e),i.set(e,r)),r}}class gb{constructor(e){this.id=pb++,this.code=e,this.usedTimes=0}}function _b(s){return s===zr||s===Wc||s===qc}function vb(s,e,i,r,o,c){const d=new C_,p=new mb,m=new Set,h=[],x=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function D(b,O,W,G,J,he){const ve=G.fog,j=J.geometry,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,V=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,$=e.get(b.envMap||B,V),ge=$&&$.mapping===jc?$.image.height:null,be=y[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&at("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const L=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,K=L!==void 0?L.length:0;let Ee=0;j.morphAttributes.position!==void 0&&(Ee=1),j.morphAttributes.normal!==void 0&&(Ee=2),j.morphAttributes.color!==void 0&&(Ee=3);let Ce,Fe,ae,Se;if(be){const Xe=Hi[be];Ce=Xe.vertexShader,Fe=Xe.fragmentShader}else{Ce=b.vertexShader,Fe=b.fragmentShader;const Xe=p.getVertexShaderStage(b),Kt=p.getFragmentShaderStage(b);p.update(b,Xe,Kt),ae=Xe.id,Se=Kt.id}const ye=s.getRenderTarget(),Ve=s.state.buffers.depth.getReversed(),nt=J.isInstancedMesh===!0,Je=J.isBatchedMesh===!0,qt=!!b.map,ft=!!b.matcap,vt=!!$,xt=!!b.aoMap,dt=!!b.lightMap,$t=!!b.bumpMap&&b.wireframe===!1,en=!!b.normalMap,tn=!!b.displacementMap,on=!!b.emissiveMap,Wt=!!b.metalnessMap,nn=!!b.roughnessMap,Z=b.anisotropy>0,zt=b.clearcoat>0,Rt=b.dispersion>0,w=b.iridescence>0,M=b.sheen>0,Q=b.transmission>0,re=Z&&!!b.anisotropyMap,fe=zt&&!!b.clearcoatMap,Te=zt&&!!b.clearcoatNormalMap,De=zt&&!!b.clearcoatRoughnessMap,ue=w&&!!b.iridescenceMap,de=w&&!!b.iridescenceThicknessMap,Re=M&&!!b.sheenColorMap,Be=M&&!!b.sheenRoughnessMap,Ne=!!b.specularMap,Ue=!!b.specularColorMap,Qe=!!b.specularIntensityMap,je=Q&&!!b.transmissionMap,it=Q&&!!b.thicknessMap,k=!!b.gradientMap,Ae=!!b.alphaMap,me=b.alphaTest>0,we=!!b.alphaHash,Ie=!!b.extensions;let Me=ki;b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Me=s.toneMapping);const Ze={shaderID:be,shaderType:b.type,shaderName:b.name,vertexShader:Ce,fragmentShader:Fe,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Je,batchingColor:Je&&J._colorsTexture!==null,instancing:nt,instancingColor:nt&&J.instanceColor!==null,instancingMorph:nt&&J.morphTexture!==null,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:qt,matcap:ft,envMap:vt,envMapMode:vt&&$.mapping,envMapCubeUVHeight:ge,aoMap:xt,lightMap:dt,bumpMap:$t,normalMap:en,displacementMap:tn,emissiveMap:on,normalMapObjectSpace:en&&b.normalMapType===$x,normalMapTangentSpace:en&&b.normalMapType===jg,packedNormalMap:en&&b.normalMapType===jg&&_b(b.normalMap.format),metalnessMap:Wt,roughnessMap:nn,anisotropy:Z,anisotropyMap:re,clearcoat:zt,clearcoatMap:fe,clearcoatNormalMap:Te,clearcoatRoughnessMap:De,dispersion:Rt,iridescence:w,iridescenceMap:ue,iridescenceThicknessMap:de,sheen:M,sheenColorMap:Re,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:Ue,specularIntensityMap:Qe,transmission:Q,transmissionMap:je,thicknessMap:it,gradientMap:k,opaque:b.transparent===!1&&b.blending===Fs&&b.alphaToCoverage===!1,alphaMap:Ae,alphaTest:me,alphaHash:we,combine:b.combine,mapUv:qt&&T(b.map.channel),aoMapUv:xt&&T(b.aoMap.channel),lightMapUv:dt&&T(b.lightMap.channel),bumpMapUv:$t&&T(b.bumpMap.channel),normalMapUv:en&&T(b.normalMap.channel),displacementMapUv:tn&&T(b.displacementMap.channel),emissiveMapUv:on&&T(b.emissiveMap.channel),metalnessMapUv:Wt&&T(b.metalnessMap.channel),roughnessMapUv:nn&&T(b.roughnessMap.channel),anisotropyMapUv:re&&T(b.anisotropyMap.channel),clearcoatMapUv:fe&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Te&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:de&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(b.sheenRoughnessMap.channel),specularMapUv:Ne&&T(b.specularMap.channel),specularColorMapUv:Ue&&T(b.specularColorMap.channel),specularIntensityMapUv:Qe&&T(b.specularIntensityMap.channel),transmissionMapUv:je&&T(b.transmissionMap.channel),thicknessMapUv:it&&T(b.thicknessMap.channel),alphaMapUv:Ae&&T(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(en||Z),vertexNormals:!!j.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!j.attributes.uv&&(qt||Ae),fog:!!ve,useFog:b.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||j.attributes.normal===void 0&&en===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ve,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Ee,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:Me,decodeVideoTexture:qt&&b.map.isVideoTexture===!0&&Mt.getTransfer(b.map.colorSpace)===Bt,decodeVideoTextureEmissive:on&&b.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(b.emissiveMap.colorSpace)===Bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vi,flipSided:b.side===Zn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ze.vertexUv1s=m.has(1),Ze.vertexUv2s=m.has(2),Ze.vertexUv3s=m.has(3),m.clear(),Ze}function E(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.customVertexShaderID),O.push(b.customFragmentShaderID)),b.defines!==void 0)for(const W in b.defines)O.push(W),O.push(b.defines[W]);return b.isRawShaderMaterial===!1&&(S(O,b),z(O,b),O.push(s.outputColorSpace)),O.push(b.customProgramCacheKey),O.join()}function S(b,O){b.push(O.precision),b.push(O.outputColorSpace),b.push(O.envMapMode),b.push(O.envMapCubeUVHeight),b.push(O.mapUv),b.push(O.alphaMapUv),b.push(O.lightMapUv),b.push(O.aoMapUv),b.push(O.bumpMapUv),b.push(O.normalMapUv),b.push(O.displacementMapUv),b.push(O.emissiveMapUv),b.push(O.metalnessMapUv),b.push(O.roughnessMapUv),b.push(O.anisotropyMapUv),b.push(O.clearcoatMapUv),b.push(O.clearcoatNormalMapUv),b.push(O.clearcoatRoughnessMapUv),b.push(O.iridescenceMapUv),b.push(O.iridescenceThicknessMapUv),b.push(O.sheenColorMapUv),b.push(O.sheenRoughnessMapUv),b.push(O.specularMapUv),b.push(O.specularColorMapUv),b.push(O.specularIntensityMapUv),b.push(O.transmissionMapUv),b.push(O.thicknessMapUv),b.push(O.combine),b.push(O.fogExp2),b.push(O.sizeAttenuation),b.push(O.morphTargetsCount),b.push(O.morphAttributeCount),b.push(O.numDirLights),b.push(O.numPointLights),b.push(O.numSpotLights),b.push(O.numSpotLightMaps),b.push(O.numHemiLights),b.push(O.numRectAreaLights),b.push(O.numDirLightShadows),b.push(O.numPointLightShadows),b.push(O.numSpotLightShadows),b.push(O.numSpotLightShadowsWithMaps),b.push(O.numLightProbes),b.push(O.shadowMapType),b.push(O.toneMapping),b.push(O.numClippingPlanes),b.push(O.numClipIntersection),b.push(O.depthPacking)}function z(b,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),O.packedNormalMap&&d.enable(22),O.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),O.numLightProbeGrids>0&&d.enable(22),O.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function N(b){const O=y[b.type];let W;if(O){const G=Hi[O];W=BS.clone(G.uniforms)}else W=b.uniforms;return W}function C(b,O){let W=x.get(O);return W!==void 0?++W.usedTimes:(W=new hb(s,O,b,o),h.push(W),x.set(O,W)),W}function P(b){if(--b.usedTimes===0){const O=h.indexOf(b);h[O]=h[h.length-1],h.pop(),x.delete(b.cacheKey),b.destroy()}}function U(b){p.remove(b)}function I(){p.dispose()}return{getParameters:D,getProgramCacheKey:E,getUniforms:N,acquireProgram:C,releaseProgram:P,releaseShaderCache:U,programs:h,dispose:I}}function xb(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function o(d,p,m){s.get(d)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function Sb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function X1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function k1(){const s=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function d(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,T,D,E,S){let z=s[e];return z===void 0?(z={id:g.id,object:g,geometry:y,material:T,materialVariant:d(g),groupOrder:D,renderOrder:g.renderOrder,z:E,group:S},s[e]=z):(z.id=g.id,z.object=g,z.geometry=y,z.material=T,z.materialVariant=d(g),z.groupOrder=D,z.renderOrder=g.renderOrder,z.z=E,z.group=S),e++,z}function m(g,y,T,D,E,S){const z=p(g,y,T,D,E,S);T.transmission>0?r.push(z):T.transparent===!0?o.push(z):i.push(z)}function h(g,y,T,D,E,S){const z=p(g,y,T,D,E,S);T.transmission>0?r.unshift(z):T.transparent===!0?o.unshift(z):i.unshift(z)}function x(g,y,T){i.length>1&&i.sort(g||Sb),r.length>1&&r.sort(y||X1),o.length>1&&o.sort(y||X1),T&&(i.reverse(),r.reverse(),o.reverse())}function v(){for(let g=e,y=s.length;g<y;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:h,finish:v,sort:x}}function Mb(){let s=new WeakMap;function e(r,o){const c=s.get(r);let d;return c===void 0?(d=new k1,s.set(r,[d])):o>=c.length?(d=new k1,c.push(d)):d=c[o],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function yb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Ut};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=i,i}}}function Eb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let bb=0;function Tb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ab(s){const e=new yb,i=Eb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new oe);const o=new oe,c=new vn,d=new vn;function p(h){let x=0,v=0,g=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let y=0,T=0,D=0,E=0,S=0,z=0,N=0,C=0,P=0,U=0,I=0;h.sort(Tb);for(let O=0,W=h.length;O<W;O++){const G=h[O],J=G.color,he=G.intensity,ve=G.distance;let j=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===zr?j=G.shadow.map.texture:j=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=J.r*he,v+=J.g*he,g+=J.b*he;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],he);I++}else if(G.isDirectionalLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const V=G.shadow,$=i.get(G);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,r.directionalShadow[y]=$,r.directionalShadowMap[y]=j,r.directionalShadowMatrix[y]=G.shadow.matrix,z++}r.directional[y]=B,y++}else if(G.isSpotLight){const B=e.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(J).multiplyScalar(he),B.distance=ve,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[D]=B;const V=G.shadow;if(G.map&&(r.spotLightMap[P]=G.map,P++,V.updateMatrices(G),G.castShadow&&U++),r.spotLightMatrix[D]=V.matrix,G.castShadow){const $=i.get(G);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,r.spotShadow[D]=$,r.spotShadowMap[D]=j,C++}D++}else if(G.isRectAreaLight){const B=e.get(G);B.color.copy(J).multiplyScalar(he),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[E]=B,E++}else if(G.isPointLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const V=G.shadow,$=i.get(G);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,$.shadowCameraNear=V.camera.near,$.shadowCameraFar=V.camera.far,r.pointShadow[T]=$,r.pointShadowMap[T]=j,r.pointShadowMatrix[T]=G.shadow.matrix,N++}r.point[T]=B,T++}else if(G.isHemisphereLight){const B=e.get(G);B.skyColor.copy(G.color).multiplyScalar(he),B.groundColor.copy(G.groundColor).multiplyScalar(he),r.hemi[S]=B,S++}}E>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==y||b.pointLength!==T||b.spotLength!==D||b.rectAreaLength!==E||b.hemiLength!==S||b.numDirectionalShadows!==z||b.numPointShadows!==N||b.numSpotShadows!==C||b.numSpotMaps!==P||b.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=D,r.rectArea.length=E,r.point.length=T,r.hemi.length=S,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=C+P-U,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=I,b.directionalLength=y,b.pointLength=T,b.spotLength=D,b.rectAreaLength=E,b.hemiLength=S,b.numDirectionalShadows=z,b.numPointShadows=N,b.numSpotShadows=C,b.numSpotMaps=P,b.numLightProbes=I,r.version=bb++)}function m(h,x){let v=0,g=0,y=0,T=0,D=0;const E=x.matrixWorldInverse;for(let S=0,z=h.length;S<z;S++){const N=h[S];if(N.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(E),v++}else if(N.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(E),C.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(E),y++}else if(N.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(E),d.identity(),c.copy(N.matrixWorld),c.premultiply(E),d.extractRotation(c),C.halfWidth.set(N.width*.5,0,0),C.halfHeight.set(0,N.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),T++}else if(N.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(E),g++}else if(N.isHemisphereLight){const C=r.hemi[D];C.direction.setFromMatrixPosition(N.matrixWorld),C.direction.transformDirection(E),D++}}}return{setup:p,setupView:m,state:r}}function W1(s){const e=new Ab(s),i=[],r=[],o=[];function c(g){v.camera=g,i.length=0,r.length=0,o.length=0}function d(g){i.push(g)}function p(g){r.push(g)}function m(g){o.push(g)}function h(){e.setup(i)}function x(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:x,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function Rb(s){let e=new WeakMap;function i(o,c=0){const d=e.get(o);let p;return d===void 0?(p=new W1(s),e.set(o,[p])):c>=d.length?(p=new W1(s),d.push(p)):p=d[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const Cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Db=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],Ub=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],q1=new vn,Wl=new oe,qd=new oe;function Lb(s,e,i){let r=new L_;const o=new wt,c=new wt,d=new sn,p=new GS,m=new XS,h={},x=i.maxTextureSize,v={[or]:Zn,[Zn]:or,[Vi]:Vi},g=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Cb,fragmentShader:wb}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new Qi;T.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Yi(T,g),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let S=this.type;this.render=function(U,I,b){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||U.length===0)return;this.type===Dx&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zc);const O=s.getRenderTarget(),W=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),J=s.state;J.setBlending(ya),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const he=S!==this.type;he&&I.traverse(function(ve){ve.material&&(Array.isArray(ve.material)?ve.material.forEach(j=>j.needsUpdate=!0):ve.material.needsUpdate=!0)});for(let ve=0,j=U.length;ve<j;ve++){const B=U[ve],V=B.shadow;if(V===void 0){at("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const $=V.getFrameExtents();o.multiply($),c.copy(V.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/$.x),o.x=c.x*$.x,V.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/$.y),o.y=c.y*$.y,V.mapSize.y=c.y));const ge=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ge,V.map===null||he===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ql){if(B.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Wi(o.x,o.y,{format:zr,type:ba,minFilter:ln,magFilter:ln,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new Xs(o.x,o.y,Gi),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=Ta,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Dn,V.map.depthTexture.magFilter=Dn}else B.isPointLight?(V.map=new z_(o.x),V.map.depthTexture=new FS(o.x,Zi)):(V.map=new Wi(o.x,o.y),V.map.depthTexture=new Xs(o.x,o.y,Zi)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=Ta,this.type===zc?(V.map.depthTexture.compareFunction=ge?Yh:Zh,V.map.depthTexture.minFilter=ln,V.map.depthTexture.magFilter=ln):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Dn,V.map.depthTexture.magFilter=Dn);V.camera.updateProjectionMatrix()}const be=V.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<be;L++){if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,L),s.clear();else{L===0&&(s.setRenderTarget(V.map),s.clear());const K=V.getViewport(L);d.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),J.viewport(d)}if(B.isPointLight){const K=V.camera,Ee=V.matrix,Ce=B.distance||K.far;Ce!==K.far&&(K.far=Ce,K.updateProjectionMatrix()),Wl.setFromMatrixPosition(B.matrixWorld),K.position.copy(Wl),qd.copy(K.position),qd.add(Db[L]),K.up.copy(Ub[L]),K.lookAt(qd),K.updateMatrixWorld(),Ee.makeTranslation(-Wl.x,-Wl.y,-Wl.z),q1.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),V._frustum.setFromProjectionMatrix(q1,K.coordinateSystem,K.reversedDepth)}else V.updateMatrices(B);r=V.getFrustum(),C(I,b,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===ql&&z(V,b),V.needsUpdate=!1}S=this.type,E.needsUpdate=!1,s.setRenderTarget(O,W,G)};function z(U,I){const b=e.update(D);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Wi(o.x,o.y,{format:zr,type:ba})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(I,null,b,g,D,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(I,null,b,y,D,null)}function N(U,I,b,O){let W=null;const G=b.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(G!==void 0)W=G;else if(W=b.isPointLight===!0?m:p,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const J=W.uuid,he=I.uuid;let ve=h[J];ve===void 0&&(ve={},h[J]=ve);let j=ve[he];j===void 0&&(j=W.clone(),ve[he]=j,I.addEventListener("dispose",P)),W=j}if(W.visible=I.visible,W.wireframe=I.wireframe,O===ql?W.side=I.shadowSide!==null?I.shadowSide:I.side:W.side=I.shadowSide!==null?I.shadowSide:v[I.side],W.alphaMap=I.alphaMap,W.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,W.map=I.map,W.clipShadows=I.clipShadows,W.clippingPlanes=I.clippingPlanes,W.clipIntersection=I.clipIntersection,W.displacementMap=I.displacementMap,W.displacementScale=I.displacementScale,W.displacementBias=I.displacementBias,W.wireframeLinewidth=I.wireframeLinewidth,W.linewidth=I.linewidth,b.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const J=s.properties.get(W);J.light=b}return W}function C(U,I,b,O,W){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&W===ql)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,U.matrixWorld);const he=e.update(U),ve=U.material;if(Array.isArray(ve)){const j=he.groups;for(let B=0,V=j.length;B<V;B++){const $=j[B],ge=ve[$.materialIndex];if(ge&&ge.visible){const be=N(U,ge,O,W);U.onBeforeShadow(s,U,I,b,he,be,$),s.renderBufferDirect(b,null,he,be,U,$),U.onAfterShadow(s,U,I,b,he,be,$)}}}else if(ve.visible){const j=N(U,ve,O,W);U.onBeforeShadow(s,U,I,b,he,j,null),s.renderBufferDirect(b,null,he,j,U,null),U.onAfterShadow(s,U,I,b,he,j,null)}}const J=U.children;for(let he=0,ve=J.length;he<ve;he++)C(J[he],I,b,O,W)}function P(U){U.target.removeEventListener("dispose",P);for(const b in h){const O=h[b],W=U.target.uuid;W in O&&(O[W].dispose(),delete O[W])}}}function Nb(s,e){function i(){let k=!1;const Ae=new sn;let me=null;const we=new sn(0,0,0,0);return{setMask:function(Ie){me!==Ie&&!k&&(s.colorMask(Ie,Ie,Ie,Ie),me=Ie)},setLocked:function(Ie){k=Ie},setClear:function(Ie,Me,Ze,Xe,Kt){Kt===!0&&(Ie*=Xe,Me*=Xe,Ze*=Xe),Ae.set(Ie,Me,Ze,Xe),we.equals(Ae)===!1&&(s.clearColor(Ie,Me,Ze,Xe),we.copy(Ae))},reset:function(){k=!1,me=null,we.set(-1,0,0,0)}}}function r(){let k=!1,Ae=!1,me=null,we=null,Ie=null;return{setReversed:function(Me){if(Ae!==Me){const Ze=e.get("EXT_clip_control");Me?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ae=Me;const Xe=Ie;Ie=null,this.setClear(Xe)}},getReversed:function(){return Ae},setTest:function(Me){Me?ye(s.DEPTH_TEST):Ve(s.DEPTH_TEST)},setMask:function(Me){me!==Me&&!k&&(s.depthMask(Me),me=Me)},setFunc:function(Me){if(Ae&&(Me=cS[Me]),we!==Me){switch(Me){case Qd:s.depthFunc(s.NEVER);break;case Jd:s.depthFunc(s.ALWAYS);break;case jd:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case $d:s.depthFunc(s.EQUAL);break;case eh:s.depthFunc(s.GEQUAL);break;case th:s.depthFunc(s.GREATER);break;case nh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=Me}},setLocked:function(Me){k=Me},setClear:function(Me){Ie!==Me&&(Ie=Me,Ae&&(Me=1-Me),s.clearDepth(Me))},reset:function(){k=!1,me=null,we=null,Ie=null,Ae=!1}}}function o(){let k=!1,Ae=null,me=null,we=null,Ie=null,Me=null,Ze=null,Xe=null,Kt=null;return{setTest:function(Lt){k||(Lt?ye(s.STENCIL_TEST):Ve(s.STENCIL_TEST))},setMask:function(Lt){Ae!==Lt&&!k&&(s.stencilMask(Lt),Ae=Lt)},setFunc:function(Lt,Yn,Kn){(me!==Lt||we!==Yn||Ie!==Kn)&&(s.stencilFunc(Lt,Yn,Kn),me=Lt,we=Yn,Ie=Kn)},setOp:function(Lt,Yn,Kn){(Me!==Lt||Ze!==Yn||Xe!==Kn)&&(s.stencilOp(Lt,Yn,Kn),Me=Lt,Ze=Yn,Xe=Kn)},setLocked:function(Lt){k=Lt},setClear:function(Lt){Kt!==Lt&&(s.clearStencil(Lt),Kt=Lt)},reset:function(){k=!1,Ae=null,me=null,we=null,Ie=null,Me=null,Ze=null,Xe=null,Kt=null}}}const c=new i,d=new r,p=new o,m=new WeakMap,h=new WeakMap;let x={},v={},g={},y=new WeakMap,T=[],D=null,E=!1,S=null,z=null,N=null,C=null,P=null,U=null,I=null,b=new Ut(0,0,0),O=0,W=!1,G=null,J=null,he=null,ve=null,j=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const ge=s.getParameter(s.VERSION);ge.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ge)[1]),V=$>=1):ge.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),V=$>=2);let be=null,L={};const K=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),Ce=new sn().fromArray(K),Fe=new sn().fromArray(Ee);function ae(k,Ae,me,we){const Ie=new Uint8Array(4),Me=s.createTexture();s.bindTexture(k,Me),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<me;Ze++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Ae+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Me}const Se={};Se[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),ye(s.DEPTH_TEST),d.setFunc(Vs),$t(!1),en(Yg),ye(s.CULL_FACE),xt(ya);function ye(k){x[k]!==!0&&(s.enable(k),x[k]=!0)}function Ve(k){x[k]!==!1&&(s.disable(k),x[k]=!1)}function nt(k,Ae){return g[k]!==Ae?(s.bindFramebuffer(k,Ae),g[k]=Ae,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Je(k,Ae){let me=T,we=!1;if(k){me=y.get(Ae),me===void 0&&(me=[],y.set(Ae,me));const Ie=k.textures;if(me.length!==Ie.length||me[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,Ze=Ie.length;Me<Ze;Me++)me[Me]=s.COLOR_ATTACHMENT0+Me;me.length=Ie.length,we=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,we=!0);we&&s.drawBuffers(me)}function qt(k){return D!==k?(s.useProgram(k),D=k,!0):!1}const ft={[Or]:s.FUNC_ADD,[Lx]:s.FUNC_SUBTRACT,[Nx]:s.FUNC_REVERSE_SUBTRACT};ft[Ox]=s.MIN,ft[Px]=s.MAX;const vt={[Fx]:s.ZERO,[Ix]:s.ONE,[Bx]:s.SRC_COLOR,[Yd]:s.SRC_ALPHA,[kx]:s.SRC_ALPHA_SATURATE,[Gx]:s.DST_COLOR,[Hx]:s.DST_ALPHA,[zx]:s.ONE_MINUS_SRC_COLOR,[Kd]:s.ONE_MINUS_SRC_ALPHA,[Xx]:s.ONE_MINUS_DST_COLOR,[Vx]:s.ONE_MINUS_DST_ALPHA,[Wx]:s.CONSTANT_COLOR,[qx]:s.ONE_MINUS_CONSTANT_COLOR,[Zx]:s.CONSTANT_ALPHA,[Yx]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(k,Ae,me,we,Ie,Me,Ze,Xe,Kt,Lt){if(k===ya){E===!0&&(Ve(s.BLEND),E=!1);return}if(E===!1&&(ye(s.BLEND),E=!0),k!==Ux){if(k!==S||Lt!==W){if((z!==Or||P!==Or)&&(s.blendEquation(s.FUNC_ADD),z=Or,P=Or),Lt)switch(k){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kg:s.blendFunc(s.ONE,s.ONE);break;case Qg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Et("WebGLState: Invalid blending: ",k);break}else switch(k){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qg:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jg:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",k);break}N=null,C=null,U=null,I=null,b.set(0,0,0),O=0,S=k,W=Lt}return}Ie=Ie||Ae,Me=Me||me,Ze=Ze||we,(Ae!==z||Ie!==P)&&(s.blendEquationSeparate(ft[Ae],ft[Ie]),z=Ae,P=Ie),(me!==N||we!==C||Me!==U||Ze!==I)&&(s.blendFuncSeparate(vt[me],vt[we],vt[Me],vt[Ze]),N=me,C=we,U=Me,I=Ze),(Xe.equals(b)===!1||Kt!==O)&&(s.blendColor(Xe.r,Xe.g,Xe.b,Kt),b.copy(Xe),O=Kt),S=k,W=!1}function dt(k,Ae){k.side===Vi?Ve(s.CULL_FACE):ye(s.CULL_FACE);let me=k.side===Zn;Ae&&(me=!me),$t(me),k.blending===Fs&&k.transparent===!1?xt(ya):xt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),c.setMask(k.colorWrite);const we=k.stencilWrite;p.setTest(we),we&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),on(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(k){G!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),G=k)}function en(k){k!==Cx?(ye(s.CULL_FACE),k!==J&&(k===Yg?s.cullFace(s.BACK):k===wx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ve(s.CULL_FACE),J=k}function tn(k){k!==he&&(V&&s.lineWidth(k),he=k)}function on(k,Ae,me){k?(ye(s.POLYGON_OFFSET_FILL),(ve!==Ae||j!==me)&&(ve=Ae,j=me,d.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,me))):Ve(s.POLYGON_OFFSET_FILL)}function Wt(k){k?ye(s.SCISSOR_TEST):Ve(s.SCISSOR_TEST)}function nn(k){k===void 0&&(k=s.TEXTURE0+B-1),be!==k&&(s.activeTexture(k),be=k)}function Z(k,Ae,me){me===void 0&&(be===null?me=s.TEXTURE0+B-1:me=be);let we=L[me];we===void 0&&(we={type:void 0,texture:void 0},L[me]=we),(we.type!==k||we.texture!==Ae)&&(be!==me&&(s.activeTexture(me),be=me),s.bindTexture(k,Ae||Se[k]),we.type=k,we.texture=Ae)}function zt(){const k=L[be];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Rt(){try{s.compressedTexImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function w(){try{s.compressedTexImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function M(){try{s.texSubImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function Q(){try{s.texSubImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function Te(){try{s.texStorage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function De(){try{s.texStorage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function ue(){try{s.texImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function de(){try{s.texImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function Re(k){return v[k]!==void 0?v[k]:s.getParameter(k)}function Be(k,Ae){v[k]!==Ae&&(s.pixelStorei(k,Ae),v[k]=Ae)}function Ne(k){Ce.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Ce.copy(k))}function Ue(k){Fe.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Fe.copy(k))}function Qe(k,Ae){let me=h.get(Ae);me===void 0&&(me=new WeakMap,h.set(Ae,me));let we=me.get(k);we===void 0&&(we=s.getUniformBlockIndex(Ae,k.name),me.set(k,we))}function je(k,Ae){const we=h.get(Ae).get(k);m.get(Ae)!==we&&(s.uniformBlockBinding(Ae,we,k.__bindingPointIndex),m.set(Ae,we))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},v={},be=null,L={},g={},y=new WeakMap,T=[],D=null,E=!1,S=null,z=null,N=null,C=null,P=null,U=null,I=null,b=new Ut(0,0,0),O=0,W=!1,G=null,J=null,he=null,ve=null,j=null,Ce.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:ye,disable:Ve,bindFramebuffer:nt,drawBuffers:Je,useProgram:qt,setBlending:xt,setMaterial:dt,setFlipSided:$t,setCullFace:en,setLineWidth:tn,setPolygonOffset:on,setScissorTest:Wt,activeTexture:nn,bindTexture:Z,unbindTexture:zt,compressedTexImage2D:Rt,compressedTexImage3D:w,texImage2D:ue,texImage3D:de,pixelStorei:Be,getParameter:Re,updateUBOMapping:Qe,uniformBlockBinding:je,texStorage2D:Te,texStorage3D:De,texSubImage2D:M,texSubImage3D:Q,compressedTexSubImage2D:re,compressedTexSubImage3D:fe,scissor:Ne,viewport:Ue,reset:it}}function Ob(s,e,i,r,o,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new wt,x=new WeakMap,v=new Set;let g;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(w,M){return T?new OffscreenCanvas(w,M):Ql("canvas")}function E(w,M,Q){let re=1;const fe=Rt(w);if((fe.width>Q||fe.height>Q)&&(re=Q/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Te=Math.floor(re*fe.width),De=Math.floor(re*fe.height);g===void 0&&(g=D(Te,De));const ue=M?D(Te,De):g;return ue.width=Te,ue.height=De,ue.getContext("2d").drawImage(w,0,0,Te,De),at("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Te+"x"+De+")."),ue}else return"data"in w&&at("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),w;return w}function S(w){return w.generateMipmaps}function z(w){s.generateMipmap(w)}function N(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(w,M,Q,re,fe,Te=!1){if(w!==null){if(s[w]!==void 0)return s[w];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let De;re&&(De=e.get("EXT_texture_norm16"),De||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=M;if(M===s.RED&&(Q===s.FLOAT&&(ue=s.R32F),Q===s.HALF_FLOAT&&(ue=s.R16F),Q===s.UNSIGNED_BYTE&&(ue=s.R8),Q===s.UNSIGNED_SHORT&&De&&(ue=De.R16_EXT),Q===s.SHORT&&De&&(ue=De.R16_SNORM_EXT)),M===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ue=s.R8UI),Q===s.UNSIGNED_SHORT&&(ue=s.R16UI),Q===s.UNSIGNED_INT&&(ue=s.R32UI),Q===s.BYTE&&(ue=s.R8I),Q===s.SHORT&&(ue=s.R16I),Q===s.INT&&(ue=s.R32I)),M===s.RG&&(Q===s.FLOAT&&(ue=s.RG32F),Q===s.HALF_FLOAT&&(ue=s.RG16F),Q===s.UNSIGNED_BYTE&&(ue=s.RG8),Q===s.UNSIGNED_SHORT&&De&&(ue=De.RG16_EXT),Q===s.SHORT&&De&&(ue=De.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ue=s.RG8UI),Q===s.UNSIGNED_SHORT&&(ue=s.RG16UI),Q===s.UNSIGNED_INT&&(ue=s.RG32UI),Q===s.BYTE&&(ue=s.RG8I),Q===s.SHORT&&(ue=s.RG16I),Q===s.INT&&(ue=s.RG32I)),M===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),Q===s.UNSIGNED_INT&&(ue=s.RGB32UI),Q===s.BYTE&&(ue=s.RGB8I),Q===s.SHORT&&(ue=s.RGB16I),Q===s.INT&&(ue=s.RGB32I)),M===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),Q===s.UNSIGNED_INT&&(ue=s.RGBA32UI),Q===s.BYTE&&(ue=s.RGBA8I),Q===s.SHORT&&(ue=s.RGBA16I),Q===s.INT&&(ue=s.RGBA32I)),M===s.RGB&&(Q===s.UNSIGNED_SHORT&&De&&(ue=De.RGB16_EXT),Q===s.SHORT&&De&&(ue=De.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),M===s.RGBA){const de=Te?Yc:Mt.getTransfer(fe);Q===s.FLOAT&&(ue=s.RGBA32F),Q===s.HALF_FLOAT&&(ue=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(ue=de===Bt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&De&&(ue=De.RGBA16_EXT),Q===s.SHORT&&De&&(ue=De.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function P(w,M){let Q;return w?M===null||M===Zi||M===Kl?Q=s.DEPTH24_STENCIL8:M===Gi?Q=s.DEPTH32F_STENCIL8:M===Yl&&(Q=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zi||M===Kl?Q=s.DEPTH_COMPONENT24:M===Gi?Q=s.DEPTH_COMPONENT32F:M===Yl&&(Q=s.DEPTH_COMPONENT16),Q}function U(w,M){return S(w)===!0||w.isFramebufferTexture&&w.minFilter!==Dn&&w.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function I(w){const M=w.target;M.removeEventListener("dispose",I),O(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&v.delete(M)}function b(w){const M=w.target;M.removeEventListener("dispose",b),G(M)}function O(w){const M=r.get(w);if(M.__webglInit===void 0)return;const Q=w.source,re=y.get(Q);if(re){const fe=re[M.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&W(w),Object.keys(re).length===0&&y.delete(Q)}r.remove(w)}function W(w){const M=r.get(w);s.deleteTexture(M.__webglTexture);const Q=w.source,re=y.get(Q);delete re[M.__cacheKey],d.memory.textures--}function G(w){const M=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let fe=0;fe<M.__webglFramebuffer[re].length;fe++)s.deleteFramebuffer(M.__webglFramebuffer[re][fe]);else s.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)s.deleteFramebuffer(M.__webglFramebuffer[re]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=w.textures;for(let re=0,fe=Q.length;re<fe;re++){const Te=r.get(Q[re]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),d.memory.textures--),r.remove(Q[re])}r.remove(w)}let J=0;function he(){J=0}function ve(){return J}function j(w){J=w}function B(){const w=J;return w>=o.maxTextures&&at("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+o.maxTextures),J+=1,w}function V(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function $(w,M){const Q=r.get(w);if(w.isVideoTexture&&Z(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&Q.__version!==w.version){const re=w.image;if(re===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(Q,w,M);return}}else w.isExternalTexture&&(Q.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+M)}function ge(w,M){const Q=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&Q.__version!==w.version){Ve(Q,w,M);return}else w.isExternalTexture&&(Q.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+M)}function be(w,M){const Q=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&Q.__version!==w.version){Ve(Q,w,M);return}i.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+M)}function L(w,M){const Q=r.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&Q.__version!==w.version){nt(Q,w,M);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+M)}const K={[ih]:s.REPEAT,[Ci]:s.CLAMP_TO_EDGE,[ah]:s.MIRRORED_REPEAT},Ee={[Dn]:s.NEAREST,[Jx]:s.NEAREST_MIPMAP_NEAREST,[hc]:s.NEAREST_MIPMAP_LINEAR,[ln]:s.LINEAR,[md]:s.LINEAR_MIPMAP_NEAREST,[Fr]:s.LINEAR_MIPMAP_LINEAR},Ce={[eS]:s.NEVER,[rS]:s.ALWAYS,[tS]:s.LESS,[Zh]:s.LEQUAL,[nS]:s.EQUAL,[Yh]:s.GEQUAL,[iS]:s.GREATER,[aS]:s.NOTEQUAL};function Fe(w,M){if(M.type===Gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===md||M.magFilter===hc||M.magFilter===Fr||M.minFilter===ln||M.minFilter===md||M.minFilter===hc||M.minFilter===Fr)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,K[M.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,K[M.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,K[M.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,Ee[M.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,Ee[M.minFilter]),M.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Dn||M.minFilter!==hc&&M.minFilter!==Fr||M.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ae(w,M){let Q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",I));const re=M.source;let fe=y.get(re);fe===void 0&&(fe={},y.set(re,fe));const Te=V(M);if(Te!==w.__cacheKey){fe[Te]===void 0&&(fe[Te]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),fe[Te].usedTimes++;const De=fe[w.__cacheKey];De!==void 0&&(fe[w.__cacheKey].usedTimes--,De.usedTimes===0&&W(M)),w.__cacheKey=Te,w.__webglTexture=fe[Te].texture}return Q}function Se(w,M,Q){return Math.floor(Math.floor(w/Q)/M)}function ye(w,M,Q,re){const Te=w.updateRanges;if(Te.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,Q,re,M.data);else{Te.sort((Be,Ne)=>Be.start-Ne.start);let De=0;for(let Be=1;Be<Te.length;Be++){const Ne=Te[De],Ue=Te[Be],Qe=Ne.start+Ne.count,je=Se(Ue.start,M.width,4),it=Se(Ne.start,M.width,4);Ue.start<=Qe+1&&je===it&&Se(Ue.start+Ue.count-1,M.width,4)===je?Ne.count=Math.max(Ne.count,Ue.start+Ue.count-Ne.start):(++De,Te[De]=Ue)}Te.length=De+1;const ue=i.getParameter(s.UNPACK_ROW_LENGTH),de=i.getParameter(s.UNPACK_SKIP_PIXELS),Re=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Be=0,Ne=Te.length;Be<Ne;Be++){const Ue=Te[Be],Qe=Math.floor(Ue.start/4),je=Math.ceil(Ue.count/4),it=Qe%M.width,k=Math.floor(Qe/M.width),Ae=je,me=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,it),i.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,it,k,Ae,me,Q,re,M.data)}w.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,ue),i.pixelStorei(s.UNPACK_SKIP_PIXELS,de),i.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function Ve(w,M,Q){let re=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=s.TEXTURE_3D);const fe=ae(w,M),Te=M.source;i.bindTexture(re,w.__webglTexture,s.TEXTURE0+Q);const De=r.get(Te);if(Te.version!==De.__version||fe===!0){if(i.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const me=Mt.getPrimaries(Mt.workingColorSpace),we=M.colorSpace===rr?null:Mt.getPrimaries(M.colorSpace),Ie=M.colorSpace===rr||me===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let de=E(M.image,!1,o.maxTextureSize);de=zt(M,de);const Re=c.convert(M.format,M.colorSpace),Be=c.convert(M.type);let Ne=C(M.internalFormat,Re,Be,M.normalized,M.colorSpace,M.isVideoTexture);Fe(re,M);let Ue;const Qe=M.mipmaps,je=M.isVideoTexture!==!0,it=De.__version===void 0||fe===!0,k=Te.dataReady,Ae=U(M,de);if(M.isDepthTexture)Ne=P(M.format===Ir,M.type),it&&(je?i.texStorage2D(s.TEXTURE_2D,1,Ne,de.width,de.height):i.texImage2D(s.TEXTURE_2D,0,Ne,de.width,de.height,0,Re,Be,null));else if(M.isDataTexture)if(Qe.length>0){je&&it&&i.texStorage2D(s.TEXTURE_2D,Ae,Ne,Qe[0].width,Qe[0].height);for(let me=0,we=Qe.length;me<we;me++)Ue=Qe[me],je?k&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Ue.width,Ue.height,Re,Be,Ue.data):i.texImage2D(s.TEXTURE_2D,me,Ne,Ue.width,Ue.height,0,Re,Be,Ue.data);M.generateMipmaps=!1}else je?(it&&i.texStorage2D(s.TEXTURE_2D,Ae,Ne,de.width,de.height),k&&ye(M,de,Re,Be)):i.texImage2D(s.TEXTURE_2D,0,Ne,de.width,de.height,0,Re,Be,de.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){je&&it&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ne,Qe[0].width,Qe[0].height,de.depth);for(let me=0,we=Qe.length;me<we;me++)if(Ue=Qe[me],M.format!==wi)if(Re!==null)if(je){if(k)if(M.layerUpdates.size>0){const Ie=E1(Ue.width,Ue.height,M.format,M.type);for(const Me of M.layerUpdates){const Ze=Ue.data.subarray(Me*Ie/Ue.data.BYTES_PER_ELEMENT,(Me+1)*Ie/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,Me,Ue.width,Ue.height,1,Re,Ze)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ue.width,Ue.height,de.depth,Re,Ue.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Ne,Ue.width,Ue.height,de.depth,0,Ue.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ue.width,Ue.height,de.depth,Re,Be,Ue.data):i.texImage3D(s.TEXTURE_2D_ARRAY,me,Ne,Ue.width,Ue.height,de.depth,0,Re,Be,Ue.data)}else{je&&it&&i.texStorage2D(s.TEXTURE_2D,Ae,Ne,Qe[0].width,Qe[0].height);for(let me=0,we=Qe.length;me<we;me++)Ue=Qe[me],M.format!==wi?Re!==null?je?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Ue.width,Ue.height,Re,Ue.data):i.compressedTexImage2D(s.TEXTURE_2D,me,Ne,Ue.width,Ue.height,0,Ue.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?k&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Ue.width,Ue.height,Re,Be,Ue.data):i.texImage2D(s.TEXTURE_2D,me,Ne,Ue.width,Ue.height,0,Re,Be,Ue.data)}else if(M.isDataArrayTexture)if(je){if(it&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ne,de.width,de.height,de.depth),k)if(M.layerUpdates.size>0){const me=E1(de.width,de.height,M.format,M.type);for(const we of M.layerUpdates){const Ie=de.data.subarray(we*me/de.data.BYTES_PER_ELEMENT,(we+1)*me/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,we,de.width,de.height,1,Re,Be,Ie)}M.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Re,Be,de.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,de.width,de.height,de.depth,0,Re,Be,de.data);else if(M.isData3DTexture)je?(it&&i.texStorage3D(s.TEXTURE_3D,Ae,Ne,de.width,de.height,de.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Re,Be,de.data)):i.texImage3D(s.TEXTURE_3D,0,Ne,de.width,de.height,de.depth,0,Re,Be,de.data);else if(M.isFramebufferTexture){if(it)if(je)i.texStorage2D(s.TEXTURE_2D,Ae,Ne,de.width,de.height);else{let me=de.width,we=de.height;for(let Ie=0;Ie<Ae;Ie++)i.texImage2D(s.TEXTURE_2D,Ie,Ne,me,we,0,Re,Be,null),me>>=1,we>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),de.parentNode!==me){me.appendChild(de),v.add(M),me.onpaint=we=>{const Ie=we.changedElements;for(const Me of v)Ie.includes(Me.image)&&(Me.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,de);else{const Ie=s.RGBA,Me=s.RGBA,Ze=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ie,Me,Ze,de)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(je&&it){const me=Rt(Qe[0]);i.texStorage2D(s.TEXTURE_2D,Ae,Ne,me.width,me.height)}for(let me=0,we=Qe.length;me<we;me++)Ue=Qe[me],je?k&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Re,Be,Ue):i.texImage2D(s.TEXTURE_2D,me,Ne,Re,Be,Ue);M.generateMipmaps=!1}else if(je){if(it){const me=Rt(de);i.texStorage2D(s.TEXTURE_2D,Ae,Ne,me.width,me.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Be,de)}else i.texImage2D(s.TEXTURE_2D,0,Ne,Re,Be,de);S(M)&&z(re),De.__version=Te.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function nt(w,M,Q){if(M.image.length!==6)return;const re=ae(w,M),fe=M.source;i.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+Q);const Te=r.get(fe);if(fe.version!==Te.__version||re===!0){i.activeTexture(s.TEXTURE0+Q);const De=Mt.getPrimaries(Mt.workingColorSpace),ue=M.colorSpace===rr?null:Mt.getPrimaries(M.colorSpace),de=M.colorSpace===rr||De===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Re&&!Be?Ne[Me]=E(M.image[Me],!0,o.maxCubemapSize):Ne[Me]=Be?M.image[Me].image:M.image[Me],Ne[Me]=zt(M,Ne[Me]);const Ue=Ne[0],Qe=c.convert(M.format,M.colorSpace),je=c.convert(M.type),it=C(M.internalFormat,Qe,je,M.normalized,M.colorSpace),k=M.isVideoTexture!==!0,Ae=Te.__version===void 0||re===!0,me=fe.dataReady;let we=U(M,Ue);Fe(s.TEXTURE_CUBE_MAP,M);let Ie;if(Re){k&&Ae&&i.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,Ue.width,Ue.height);for(let Me=0;Me<6;Me++){Ie=Ne[Me].mipmaps;for(let Ze=0;Ze<Ie.length;Ze++){const Xe=Ie[Ze];M.format!==wi?Qe!==null?k?me&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,Xe.width,Xe.height,Qe,Xe.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,it,Xe.width,Xe.height,0,Xe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,Xe.width,Xe.height,Qe,je,Xe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,it,Xe.width,Xe.height,0,Qe,je,Xe.data)}}}else{if(Ie=M.mipmaps,k&&Ae){Ie.length>0&&we++;const Me=Rt(Ne[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Be){k?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,Qe,je,Ne[Me].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,it,Ne[Me].width,Ne[Me].height,0,Qe,je,Ne[Me].data);for(let Ze=0;Ze<Ie.length;Ze++){const Kt=Ie[Ze].image[Me].image;k?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,Kt.width,Kt.height,Qe,je,Kt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,it,Kt.width,Kt.height,0,Qe,je,Kt.data)}}else{k?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Qe,je,Ne[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,it,Qe,je,Ne[Me]);for(let Ze=0;Ze<Ie.length;Ze++){const Xe=Ie[Ze];k?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,Qe,je,Xe.image[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,it,Qe,je,Xe.image[Me])}}}S(M)&&z(s.TEXTURE_CUBE_MAP),Te.__version=fe.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Je(w,M,Q,re,fe,Te){const De=c.convert(Q.format,Q.colorSpace),ue=c.convert(Q.type),de=C(Q.internalFormat,De,ue,Q.normalized,Q.colorSpace),Re=r.get(M),Be=r.get(Q);if(Be.__renderTarget=M,!Re.__hasExternalTextures){const Ne=Math.max(1,M.width>>Te),Ue=Math.max(1,M.height>>Te);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?i.texImage3D(fe,Te,de,Ne,Ue,M.depth,0,De,ue,null):i.texImage2D(fe,Te,de,Ne,Ue,0,De,ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,w),nn(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,fe,Be.__webglTexture,0,Wt(M)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,fe,Be.__webglTexture,Te),i.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(w,M,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,w),M.depthBuffer){const re=M.depthTexture,fe=re&&re.isDepthTexture?re.type:null,Te=P(M.stencilBuffer,fe),De=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;nn(M)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(M),Te,M.width,M.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(M),Te,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Te,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,w)}else{const re=M.textures;for(let fe=0;fe<re.length;fe++){const Te=re[fe],De=c.convert(Te.format,Te.colorSpace),ue=c.convert(Te.type),de=C(Te.internalFormat,De,ue,Te.normalized,Te.colorSpace);nn(M)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(M),de,M.width,M.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(M),de,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,de,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ft(w,M,Q){const re=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(M.depthTexture);if(fe.__renderTarget=M,(!fe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),re){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,M.depthTexture.addEventListener("dispose",I)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,M.depthTexture);const Re=c.convert(M.depthTexture.format),Be=c.convert(M.depthTexture.type);let Ne;M.depthTexture.format===Ta?Ne=s.DEPTH_COMPONENT24:M.depthTexture.format===Ir&&(Ne=s.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ne,M.width,M.height,0,Re,Be,null)}}else $(M.depthTexture,0);const Te=fe.__webglTexture,De=Wt(M),ue=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,de=M.depthTexture.format===Ir?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ta)nn(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ue,Te,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,de,ue,Te,0);else if(M.depthTexture.format===Ir)nn(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ue,Te,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,de,ue,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(w){const M=r.get(w),Q=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const re=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){const fe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),M.__depthDisposeCallback=fe}M.__boundDepthTexture=re}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(Q)for(let re=0;re<6;re++)ft(M.__webglFramebuffer[re],w,re);else{const re=w.texture.mipmaps;re&&re.length>0?ft(M.__webglFramebuffer[0],w,0):ft(M.__webglFramebuffer,w,0)}else if(Q){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=s.createRenderbuffer(),qt(M.__webglDepthbuffer[re],w,!1);else{const fe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=M.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Te)}}else{const re=w.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),qt(M.__webglDepthbuffer,w,!1);else{const fe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Te)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(w,M,Q){const re=r.get(w);M!==void 0&&Je(re.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&vt(w)}function dt(w){const M=w.texture,Q=r.get(w),re=r.get(M);w.addEventListener("dispose",b);const fe=w.textures,Te=w.isWebGLCubeRenderTarget===!0,De=fe.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=M.version,d.memory.textures++),Te){Q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[ue]=[];for(let de=0;de<M.mipmaps.length;de++)Q.__webglFramebuffer[ue][de]=s.createFramebuffer()}else Q.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)Q.__webglFramebuffer[ue]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(De)for(let ue=0,de=fe.length;ue<de;ue++){const Re=r.get(fe[ue]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),d.memory.textures++)}if(w.samples>0&&nn(w)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ue=0;ue<fe.length;ue++){const de=fe[ue];Q.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[ue]);const Re=c.convert(de.format,de.colorSpace),Be=c.convert(de.type),Ne=C(de.internalFormat,Re,Be,de.normalized,de.colorSpace,w.isXRRenderTarget===!0),Ue=Wt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,Ne,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,Q.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),qt(Q.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){i.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)Je(Q.__webglFramebuffer[ue][de],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else Je(Q.__webglFramebuffer[ue],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(M)&&z(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let ue=0,de=fe.length;ue<de;ue++){const Re=fe[ue],Be=r.get(Re);let Ne=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ne=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Be.__webglTexture),Fe(Ne,Re),Je(Q.__webglFramebuffer,w,Re,s.COLOR_ATTACHMENT0+ue,Ne,0),S(Re)&&z(Ne)}i.unbindTexture()}else{let ue=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ue,re.__webglTexture),Fe(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)Je(Q.__webglFramebuffer[de],w,M,s.COLOR_ATTACHMENT0,ue,de);else Je(Q.__webglFramebuffer,w,M,s.COLOR_ATTACHMENT0,ue,0);S(M)&&z(ue),i.unbindTexture()}w.depthBuffer&&vt(w)}function $t(w){const M=w.textures;for(let Q=0,re=M.length;Q<re;Q++){const fe=M[Q];if(S(fe)){const Te=N(w),De=r.get(fe).__webglTexture;i.bindTexture(Te,De),z(Te),i.unbindTexture()}}}const en=[],tn=[];function on(w){if(w.samples>0){if(nn(w)===!1){const M=w.textures,Q=w.width,re=w.height;let fe=s.COLOR_BUFFER_BIT;const Te=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=r.get(w),ue=M.length>1;if(ue)for(let Re=0;Re<M.length;Re++)i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const de=w.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Be=r.get(M[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,Q,re,0,0,Q,re,fe,s.NEAREST),m===!0&&(en.length=0,tn.length=0,en.push(s.COLOR_ATTACHMENT0+Re),w.depthBuffer&&w.resolveDepthBuffer===!1&&(en.push(Te),tn.push(Te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,tn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,en))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Re=0;Re<M.length;Re++){i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Be=r.get(M[Re]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,Be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const M=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Wt(w){return Math.min(o.maxSamples,w.samples)}function nn(w){const M=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Z(w){const M=d.render.frame;x.get(w)!==M&&(x.set(w,M),w.update())}function zt(w,M){const Q=w.colorSpace,re=w.format,fe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||Q!==Zc&&Q!==rr&&(Mt.getTransfer(Q)===Bt?(re!==wi||fe!==_i)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",Q)),M}function Rt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=he,this.getTextureUnits=ve,this.setTextureUnits=j,this.setTexture2D=$,this.setTexture2DArray=ge,this.setTexture3D=be,this.setTextureCube=L,this.rebindTextures=xt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Pb(s,e){function i(r,o=rr){let c;const d=Mt.getTransfer(o);if(r===_i)return s.UNSIGNED_BYTE;if(r===Gh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===M_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===y_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===x_)return s.BYTE;if(r===S_)return s.SHORT;if(r===Yl)return s.UNSIGNED_SHORT;if(r===Vh)return s.INT;if(r===Zi)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===ba)return s.HALF_FLOAT;if(r===E_)return s.ALPHA;if(r===b_)return s.RGB;if(r===wi)return s.RGBA;if(r===Ta)return s.DEPTH_COMPONENT;if(r===Ir)return s.DEPTH_STENCIL;if(r===T_)return s.RED;if(r===kh)return s.RED_INTEGER;if(r===zr)return s.RG;if(r===Wh)return s.RG_INTEGER;if(r===qh)return s.RGBA_INTEGER;if(r===Hc||r===Vc||r===Gc||r===Xc)if(d===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rh||r===sh||r===lh||r===oh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===rh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===oh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ch||r===uh||r===fh||r===dh||r===hh||r===Wc||r===ph)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ch||r===uh)return d===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===fh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===dh)return c.COMPRESSED_R11_EAC;if(r===hh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Wc)return c.COMPRESSED_RG11_EAC;if(r===ph)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===mh||r===gh||r===_h||r===vh||r===xh||r===Sh||r===Mh||r===yh||r===Eh||r===bh||r===Th||r===Ah||r===Rh||r===Ch)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===mh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_h)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Eh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Th)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ah)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ch)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wh||r===Dh||r===Uh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===wh)return d===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Uh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Lh||r===Nh||r===qc||r===Oh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Lh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Nh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Oh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Kl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const Fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ib=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new O_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ki({vertexShader:Fb,fragmentShader:Ib,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Yi(new eu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zb extends Vr{constructor(e,i){super();const r=this;let o=null,c=1,d=null,p="local-floor",m=1,h=null,x=null,v=null,g=null,y=null,T=null;const D=typeof XRWebGLBinding<"u",E=new Bb,S={},z=i.getContextAttributes();let N=null,C=null;const P=[],U=[],I=new wt;let b=null;const O=new Ai;O.viewport=new sn;const W=new Ai;W.viewport=new sn;const G=[O,W],J=new KS;let he=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Se=P[ae];return Se===void 0&&(Se=new Ed,P[ae]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ae){let Se=P[ae];return Se===void 0&&(Se=new Ed,P[ae]=Se),Se.getGripSpace()},this.getHand=function(ae){let Se=P[ae];return Se===void 0&&(Se=new Ed,P[ae]=Se),Se.getHandSpace()};function j(ae){const Se=U.indexOf(ae.inputSource);if(Se===-1)return;const ye=P[Se];ye!==void 0&&(ye.update(ae.inputSource,ae.frame,h||d),ye.dispatchEvent({type:ae.type,data:ae.inputSource}))}function B(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",V);for(let ae=0;ae<P.length;ae++){const Se=U[ae];Se!==null&&(U[ae]=null,P[ae].disconnect(Se))}he=null,ve=null,E.reset();for(const ae in S)delete S[ae];e.setRenderTarget(N),y=null,g=null,v=null,o=null,C=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){p=ae,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(o,i)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",B),o.addEventListener("inputsourceschange",V),z.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(I),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ve=null,nt=null;z.depth&&(nt=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=z.stencil?Ir:Ta,Ve=z.stencil?Kl:Zi);const Je={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Je),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Wi(g.textureWidth,g.textureHeight,{format:wi,type:_i,depthTexture:new Xs(g.textureWidth,g.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ye={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,i,ye),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Wi(y.framebufferWidth,y.framebufferHeight,{format:wi,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await o.requestReferenceSpace(p),Fe.setContext(o),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function V(ae){for(let Se=0;Se<ae.removed.length;Se++){const ye=ae.removed[Se],Ve=U.indexOf(ye);Ve>=0&&(U[Ve]=null,P[Ve].disconnect(ye))}for(let Se=0;Se<ae.added.length;Se++){const ye=ae.added[Se];let Ve=U.indexOf(ye);if(Ve===-1){for(let Je=0;Je<P.length;Je++)if(Je>=U.length){U.push(ye),Ve=Je;break}else if(U[Je]===null){U[Je]=ye,Ve=Je;break}if(Ve===-1)break}const nt=P[Ve];nt&&nt.connect(ye)}}const $=new oe,ge=new oe;function be(ae,Se,ye){$.setFromMatrixPosition(Se.matrixWorld),ge.setFromMatrixPosition(ye.matrixWorld);const Ve=$.distanceTo(ge),nt=Se.projectionMatrix.elements,Je=ye.projectionMatrix.elements,qt=nt[14]/(nt[10]-1),ft=nt[14]/(nt[10]+1),vt=(nt[9]+1)/nt[5],xt=(nt[9]-1)/nt[5],dt=(nt[8]-1)/nt[0],$t=(Je[8]+1)/Je[0],en=qt*dt,tn=qt*$t,on=Ve/(-dt+$t),Wt=on*-dt;if(Se.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Wt),ae.translateZ(on),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),nt[10]===-1)ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const nn=qt+on,Z=ft+on,zt=en-Wt,Rt=tn+(Ve-Wt),w=vt*ft/Z*nn,M=xt*ft/Z*nn;ae.projectionMatrix.makePerspective(zt,Rt,w,M,nn,Z),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function L(ae,Se){Se===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Se.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let Se=ae.near,ye=ae.far;E.texture!==null&&(E.depthNear>0&&(Se=E.depthNear),E.depthFar>0&&(ye=E.depthFar)),J.near=W.near=O.near=Se,J.far=W.far=O.far=ye,(he!==J.near||ve!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),he=J.near,ve=J.far),J.layers.mask=ae.layers.mask|6,O.layers.mask=J.layers.mask&-5,W.layers.mask=J.layers.mask&-3;const Ve=ae.parent,nt=J.cameras;L(J,Ve);for(let Je=0;Je<nt.length;Je++)L(nt[Je],Ve);nt.length===2?be(J,O,W):J.projectionMatrix.copy(O.projectionMatrix),K(ae,J,Ve)};function K(ae,Se,ye){ye===null?ae.matrix.copy(Se.matrixWorld):(ae.matrix.copy(ye.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Se.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Ph*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(ae){m=ae,g!==null&&(g.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(J)},this.getCameraTexture=function(ae){return S[ae]};let Ee=null;function Ce(ae,Se){if(x=Se.getViewerPose(h||d),T=Se,x!==null){const ye=x.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Ve=!1;ye.length!==J.cameras.length&&(J.cameras.length=0,Ve=!0);for(let ft=0;ft<ye.length;ft++){const vt=ye[ft];let xt=null;if(y!==null)xt=y.getViewport(vt);else{const $t=v.getViewSubImage(g,vt);xt=$t.viewport,ft===0&&(e.setRenderTargetTextures(C,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(C))}let dt=G[ft];dt===void 0&&(dt=new Ai,dt.layers.enable(ft),dt.viewport=new sn,G[ft]=dt),dt.matrix.fromArray(vt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(vt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(xt.x,xt.y,xt.width,xt.height),ft===0&&(J.matrix.copy(dt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ve===!0&&J.cameras.push(dt)}const nt=o.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&D){v=r.getBinding();const ft=v.getDepthInformation(ye[0]);ft&&ft.isValid&&ft.texture&&E.init(ft,o.renderState)}if(nt&&nt.includes("camera-access")&&D){e.state.unbindTexture(),v=r.getBinding();for(let ft=0;ft<ye.length;ft++){const vt=ye[ft].camera;if(vt){let xt=S[vt];xt||(xt=new O_,S[vt]=xt);const dt=v.getCameraImage(vt);xt.sourceTexture=dt}}}}for(let ye=0;ye<P.length;ye++){const Ve=U[ye],nt=P[ye];Ve!==null&&nt!==void 0&&nt.update(Ve,Se,h||d)}Ee&&Ee(ae,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),T=null}const Fe=new I_;Fe.setAnimationLoop(Ce),this.setAnimationLoop=function(ae){Ee=ae},this.dispose=function(){}}}const Hb=new vn,k_=new st;k_.set(-1,0,0,0,1,0,0,0,1);function Vb(s,e){function i(E,S){E.matrixAutoUpdate===!0&&E.updateMatrix(),S.value.copy(E.matrix)}function r(E,S){S.color.getRGB(E.fogColor.value,P_(s)),S.isFog?(E.fogNear.value=S.near,E.fogFar.value=S.far):S.isFogExp2&&(E.fogDensity.value=S.density)}function o(E,S,z,N,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(E,S):S.isMeshLambertMaterial?(c(E,S),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(E,S),v(E,S)):S.isMeshPhongMaterial?(c(E,S),x(E,S),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(E,S),g(E,S),S.isMeshPhysicalMaterial&&y(E,S,C)):S.isMeshMatcapMaterial?(c(E,S),T(E,S)):S.isMeshDepthMaterial?c(E,S):S.isMeshDistanceMaterial?(c(E,S),D(E,S)):S.isMeshNormalMaterial?c(E,S):S.isLineBasicMaterial?(d(E,S),S.isLineDashedMaterial&&p(E,S)):S.isPointsMaterial?m(E,S,z,N):S.isSpriteMaterial?h(E,S):S.isShadowMaterial?(E.color.value.copy(S.color),E.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(E,S){E.opacity.value=S.opacity,S.color&&E.diffuse.value.copy(S.color),S.emissive&&E.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(E.map.value=S.map,i(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.bumpMap&&(E.bumpMap.value=S.bumpMap,i(S.bumpMap,E.bumpMapTransform),E.bumpScale.value=S.bumpScale,S.side===Zn&&(E.bumpScale.value*=-1)),S.normalMap&&(E.normalMap.value=S.normalMap,i(S.normalMap,E.normalMapTransform),E.normalScale.value.copy(S.normalScale),S.side===Zn&&E.normalScale.value.negate()),S.displacementMap&&(E.displacementMap.value=S.displacementMap,i(S.displacementMap,E.displacementMapTransform),E.displacementScale.value=S.displacementScale,E.displacementBias.value=S.displacementBias),S.emissiveMap&&(E.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,E.emissiveMapTransform)),S.specularMap&&(E.specularMap.value=S.specularMap,i(S.specularMap,E.specularMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest);const z=e.get(S),N=z.envMap,C=z.envMapRotation;N&&(E.envMap.value=N,E.envMapRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(C)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&E.envMapRotation.value.premultiply(k_),E.reflectivity.value=S.reflectivity,E.ior.value=S.ior,E.refractionRatio.value=S.refractionRatio),S.lightMap&&(E.lightMap.value=S.lightMap,E.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,E.lightMapTransform)),S.aoMap&&(E.aoMap.value=S.aoMap,E.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,E.aoMapTransform))}function d(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,S.map&&(E.map.value=S.map,i(S.map,E.mapTransform))}function p(E,S){E.dashSize.value=S.dashSize,E.totalSize.value=S.dashSize+S.gapSize,E.scale.value=S.scale}function m(E,S,z,N){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.size.value=S.size*z,E.scale.value=N*.5,S.map&&(E.map.value=S.map,i(S.map,E.uvTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function h(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.rotation.value=S.rotation,S.map&&(E.map.value=S.map,i(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function x(E,S){E.specular.value.copy(S.specular),E.shininess.value=Math.max(S.shininess,1e-4)}function v(E,S){S.gradientMap&&(E.gradientMap.value=S.gradientMap)}function g(E,S){E.metalness.value=S.metalness,S.metalnessMap&&(E.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,E.metalnessMapTransform)),E.roughness.value=S.roughness,S.roughnessMap&&(E.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,E.roughnessMapTransform)),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)}function y(E,S,z){E.ior.value=S.ior,S.sheen>0&&(E.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),E.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(E.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,E.sheenColorMapTransform)),S.sheenRoughnessMap&&(E.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,E.sheenRoughnessMapTransform))),S.clearcoat>0&&(E.clearcoat.value=S.clearcoat,E.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(E.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,E.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(E.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Zn&&E.clearcoatNormalScale.value.negate())),S.dispersion>0&&(E.dispersion.value=S.dispersion),S.iridescence>0&&(E.iridescence.value=S.iridescence,E.iridescenceIOR.value=S.iridescenceIOR,E.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(E.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,E.iridescenceMapTransform)),S.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),S.transmission>0&&(E.transmission.value=S.transmission,E.transmissionSamplerMap.value=z.texture,E.transmissionSamplerSize.value.set(z.width,z.height),S.transmissionMap&&(E.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,E.transmissionMapTransform)),E.thickness.value=S.thickness,S.thicknessMap&&(E.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=S.attenuationDistance,E.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(E.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(E.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=S.specularIntensity,E.specularColor.value.copy(S.specularColor),S.specularColorMap&&(E.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,E.specularColorMapTransform)),S.specularIntensityMap&&(E.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,S){S.matcap&&(E.matcap.value=S.matcap)}function D(E,S){const z=e.get(S).light;E.referencePosition.value.setFromMatrixPosition(z.matrixWorld),E.nearDistance.value=z.shadow.camera.near,E.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Gb(s,e,i,r){let o={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,P){const U=P.program;r.uniformBlockBinding(C,U)}function h(C,P){let U=o[C.id];U===void 0&&(E(C),U=x(C),o[C.id]=U,C.addEventListener("dispose",z));const I=P.program;r.updateUBOMapping(C,I);const b=e.render.frame;c[C.id]!==b&&(g(C),c[C.id]=b)}function x(C){const P=v();C.__bindingPointIndex=P;const U=s.createBuffer(),I=C.__size,b=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,I,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,U),U}function v(){for(let C=0;C<p;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const P=o[C.id],U=C.uniforms,I=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let b=0,O=U.length;b<O;b++){const W=U[b];if(Array.isArray(W))for(let G=0,J=W.length;G<J;G++)y(W[G],b,G,I);else y(W,b,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(C,P,U,I){if(D(C,P,U,I)===!0){const b=C.__offset,O=C.value;if(Array.isArray(O)){let W=0;for(let G=0;G<O.length;G++){const J=O[G],he=S(J);T(J,C.__data,W),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(W+=he.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(O,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,C.__data)}}function T(C,P,U){typeof C=="number"||typeof C=="boolean"?P[0]=C:C.isMatrix3?(P[0]=C.elements[0],P[1]=C.elements[1],P[2]=C.elements[2],P[3]=0,P[4]=C.elements[3],P[5]=C.elements[4],P[6]=C.elements[5],P[7]=0,P[8]=C.elements[6],P[9]=C.elements[7],P[10]=C.elements[8],P[11]=0):ArrayBuffer.isView(C)?P.set(new C.constructor(C.buffer,C.byteOffset,P.length)):C.toArray(P,U)}function D(C,P,U,I){const b=C.value,O=P+"_"+U;if(I[O]===void 0)return typeof b=="number"||typeof b=="boolean"?I[O]=b:ArrayBuffer.isView(b)?I[O]=b.slice():I[O]=b.clone(),!0;{const W=I[O];if(typeof b=="number"||typeof b=="boolean"){if(W!==b)return I[O]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(W.equals(b)===!1)return W.copy(b),!0}}return!1}function E(C){const P=C.uniforms;let U=0;const I=16;for(let O=0,W=P.length;O<W;O++){const G=Array.isArray(P[O])?P[O]:[P[O]];for(let J=0,he=G.length;J<he;J++){const ve=G[J],j=Array.isArray(ve.value)?ve.value:[ve.value];for(let B=0,V=j.length;B<V;B++){const $=j[B],ge=S($),be=U%I,L=be%ge.boundary,K=be+L;U+=L,K!==0&&I-K<ge.storage&&(U+=I-K),ve.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),ve.__offset=U,U+=ge.storage}}}const b=U%I;return b>0&&(U+=I-b),C.__size=U,C.__cache={},this}function S(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):at("WebGLRenderer: Unsupported uniform value type.",C),P}function z(C){const P=C.target;P.removeEventListener("dispose",z);const U=d.indexOf(P.__bindingPointIndex);d.splice(U,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete c[P.id]}function N(){for(const C in o)s.deleteBuffer(o[C]);d=[],o={},c={}}return{bind:m,update:h,dispose:N}}const Xb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function kb(){return zi===null&&(zi=new US(Xb,16,16,zr,ba),zi.name="DFG_LUT",zi.minFilter=ln,zi.magFilter=ln,zi.wrapS=Ci,zi.wrapT=Ci,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class Wb{constructor(e={}){const{canvas:i=lS(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=_i}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const D=y,E=new Set([qh,Wh,kh]),S=new Set([_i,Zi,Yl,Kl,Gh,Xh]),z=new Uint32Array(4),N=new Int32Array(4),C=new oe;let P=null,U=null;const I=[],b=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let G=!1,J=null,he=null,ve=null,j=null;this._outputColorSpace=Bn;let B=0,V=0,$=null,ge=-1,be=null;const L=new sn,K=new sn;let Ee=null;const Ce=new Ut(0);let Fe=0,ae=i.width,Se=i.height,ye=1,Ve=null,nt=null;const Je=new sn(0,0,ae,Se),qt=new sn(0,0,ae,Se);let ft=!1;const vt=new L_;let xt=!1,dt=!1;const $t=new vn,en=new oe,tn=new sn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function nn(){return $===null?ye:1}let Z=r;function zt(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:o,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Hh}`),i.addEventListener("webglcontextlost",Kt,!1),i.addEventListener("webglcontextrestored",Lt,!1),i.addEventListener("webglcontextcreationerror",Yn,!1),Z===null){const q="webgl2";if(Z=zt(q,A),Z===null)throw zt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Et("WebGLRenderer: "+A.message),A}let Rt,w,M,Q,re,fe,Te,De,ue,de,Re,Be,Ne,Ue,Qe,je,it,k,Ae,me,we,Ie,Me;function Ze(){Rt=new kE(Z),Rt.init(),we=new Pb(Z,Rt),w=new FE(Z,Rt,e,we),M=new Nb(Z,Rt),w.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),he=Z.createFramebuffer(),ve=Z.createFramebuffer(),j=Z.createFramebuffer(),Q=new ZE(Z),re=new xb,fe=new Ob(Z,Rt,M,re,w,we,Q),Te=new XE(W),De=new JS(Z),Ie=new OE(Z,De),ue=new WE(Z,De,Q,Ie),de=new KE(Z,ue,De,Ie,Q),k=new YE(Z,w,fe),Qe=new IE(re),Re=new vb(W,Te,Rt,w,Ie,Qe),Be=new Vb(W,re),Ne=new Mb,Ue=new Rb(Rt),it=new NE(W,Te,M,de,T,m),je=new Lb(W,de,w),Me=new Gb(Z,Q,w,M),Ae=new PE(Z,Rt,Q),me=new qE(Z,Rt,Q),Q.programs=Re.programs,W.capabilities=w,W.extensions=Rt,W.properties=re,W.renderLists=Ne,W.shadowMap=je,W.state=M,W.info=Q}Ze(),D!==_i&&(O=new JE(D,i.width,i.height,p,o,c));const Xe=new zb(W,Z);this.xr=Xe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=Rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(A){A!==void 0&&(ye=A,this.setSize(ae,Se,!1))},this.getSize=function(A){return A.set(ae,Se)},this.setSize=function(A,q,se=!0){if(Xe.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,Se=q,i.width=Math.floor(A*ye),i.height=Math.floor(q*ye),se===!0&&(i.style.width=A+"px",i.style.height=q+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(ae*ye,Se*ye).floor()},this.setDrawingBufferSize=function(A,q,se){ae=A,Se=q,ye=se,i.width=Math.floor(A*se),i.height=Math.floor(q*se),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(D===_i){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(Je)},this.setViewport=function(A,q,se,ne){A.isVector4?Je.set(A.x,A.y,A.z,A.w):Je.set(A,q,se,ne),M.viewport(L.copy(Je).multiplyScalar(ye).round())},this.getScissor=function(A){return A.copy(qt)},this.setScissor=function(A,q,se,ne){A.isVector4?qt.set(A.x,A.y,A.z,A.w):qt.set(A,q,se,ne),M.scissor(K.copy(qt).multiplyScalar(ye).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(A){M.setScissorTest(ft=A)},this.setOpaqueSort=function(A){Ve=A},this.setTransparentSort=function(A){nt=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,se=!0){let ne=0;if(A){let ie=!1;if($!==null){const Oe=$.texture.format;ie=E.has(Oe)}if(ie){const Oe=$.texture.type,Ge=S.has(Oe),Le=it.getClearColor(),We=it.getClearAlpha(),ke=Le.r,$e=Le.g,lt=Le.b;Ge?(z[0]=ke,z[1]=$e,z[2]=lt,z[3]=We,Z.clearBufferuiv(Z.COLOR,0,z)):(N[0]=ke,N[1]=$e,N[2]=lt,N[3]=We,Z.clearBufferiv(Z.COLOR,0,N))}else ne|=Z.COLOR_BUFFER_BIT}q&&(ne|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ne|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&Z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),J=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Kt,!1),i.removeEventListener("webglcontextrestored",Lt,!1),i.removeEventListener("webglcontextcreationerror",Yn,!1),it.dispose(),Ne.dispose(),Ue.dispose(),re.dispose(),Te.dispose(),de.dispose(),Ie.dispose(),Me.dispose(),Re.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",fn),Xe.removeEventListener("sessionend",Tn),zn.stop()};function Kt(A){A.preventDefault(),i1("WebGLRenderer: Context Lost."),G=!0}function Lt(){i1("WebGLRenderer: Context Restored."),G=!1;const A=Q.autoReset,q=je.enabled,se=je.autoUpdate,ne=je.needsUpdate,ie=je.type;Ze(),Q.autoReset=A,je.enabled=q,je.autoUpdate=se,je.needsUpdate=ne,je.type=ie}function Yn(A){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Kn(A){const q=A.target;q.removeEventListener("dispose",Kn),Zs(q)}function Zs(A){Ys(A),re.remove(A)}function Ys(A){const q=re.get(A).programs;q!==void 0&&(q.forEach(function(se){Re.releaseProgram(se)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,se,ne,ie,Oe){q===null&&(q=on);const Ge=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Le=Ca(A,q,se,ne,ie);M.setMaterial(ne,Ge);let We=se.index,ke=1;if(ne.wireframe===!0){if(We=ue.getWireframeAttribute(se),We===void 0)return;ke=2}const $e=se.drawRange,lt=se.attributes.position;let Ke=$e.start*ke,bt=($e.start+$e.count)*ke;Oe!==null&&(Ke=Math.max(Ke,Oe.start*ke),bt=Math.min(bt,(Oe.start+Oe.count)*ke)),We!==null?(Ke=Math.max(Ke,0),bt=Math.min(bt,We.count)):lt!=null&&(Ke=Math.max(Ke,0),bt=Math.min(bt,lt.count));const Qt=bt-Ke;if(Qt<0||Qt===1/0)return;Ie.setup(ie,ne,Le,se,We);let Xt,Nt=Ae;if(We!==null&&(Xt=De.get(We),Nt=me,Nt.setIndex(Xt)),ie.isMesh)ne.wireframe===!0?(M.setLineWidth(ne.wireframeLinewidth*nn()),Nt.setMode(Z.LINES)):Nt.setMode(Z.TRIANGLES);else if(ie.isLine){let Ot=ne.linewidth;Ot===void 0&&(Ot=1),M.setLineWidth(Ot*nn()),ie.isLineSegments?Nt.setMode(Z.LINES):ie.isLineLoop?Nt.setMode(Z.LINE_LOOP):Nt.setMode(Z.LINE_STRIP)}else ie.isPoints?Nt.setMode(Z.POINTS):ie.isSprite&&Nt.setMode(Z.TRIANGLES);if(ie.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Ot=ie._multiDrawStarts,ze=ie._multiDrawCounts,Ln=ie._multiDrawCount,ht=We?De.get(We).bytesPerElement:1,xn=re.get(ne).currentProgram.getUniforms();for(let Qn=0;Qn<Ln;Qn++)xn.setValue(Z,"_gl_DrawID",Qn),Nt.render(Ot[Qn]/ht,ze[Qn])}else if(ie.isInstancedMesh)Nt.renderInstances(Ke,Qt,ie.count);else if(se.isInstancedBufferGeometry){const Ot=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ze=Math.min(se.instanceCount,Ot);Nt.renderInstances(Ke,Qt,ze)}else Nt.render(Ke,Qt)};function Ks(A,q,se){A.transparent===!0&&A.side===Vi&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,Ra(A,q,se),A.side=or,A.needsUpdate=!0,Ra(A,q,se),A.side=Vi):Ra(A,q,se)}this.compile=function(A,q,se=null){se===null&&(se=A),U=Ue.get(se),U.init(q),b.push(U),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(U.pushLight(ie),ie.castShadow&&U.pushShadow(ie))}),A!==se&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(U.pushLight(ie),ie.castShadow&&U.pushShadow(ie))}),U.setupLights();const ne=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Oe=ie.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const Le=Oe[Ge];Ks(Le,se,ie),ne.add(Le)}else Ks(Oe,se,ie),ne.add(Oe)}),U=b.pop(),ne},this.compileAsync=function(A,q,se=null){const ne=this.compile(A,q,se);return new Promise(ie=>{function Oe(){if(ne.forEach(function(Ge){re.get(Ge).currentProgram.isReady()&&ne.delete(Ge)}),ne.size===0){ie(A);return}setTimeout(Oe,10)}Rt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Gr=null;function Li(A){Gr&&Gr(A)}function fn(){zn.stop()}function Tn(){zn.start()}const zn=new I_;zn.setAnimationLoop(Li),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(A){Gr=A,Xe.setAnimationLoop(A),A===null?zn.stop():zn.start()},Xe.addEventListener("sessionstart",fn),Xe.addEventListener("sessionend",Tn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;J!==null&&J.renderStart(A,q);const se=Xe.enabled===!0&&Xe.isPresenting===!0,ne=O!==null&&($===null||se)&&O.begin(W,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(q),q=Xe.getCamera()),A.isScene===!0&&A.onBeforeRender(W,A,q,$),U=Ue.get(A,b.length),U.init(q),U.state.textureUnits=fe.getTextureUnits(),b.push(U),$t.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),vt.setFromProjectionMatrix($t,Xi,q.reversedDepth),dt=this.localClippingEnabled,xt=Qe.init(this.clippingPlanes,dt),P=Ne.get(A,I.length),P.init(),I.push(P),Xe.enabled===!0&&Xe.isPresenting===!0){const Ge=W.xr.getDepthSensingMesh();Ge!==null&&cr(Ge,q,-1/0,W.sortObjects)}cr(A,q,0,W.sortObjects),P.finish(),W.sortObjects===!0&&P.sort(Ve,nt,q.reversedDepth),Wt=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Wt&&it.addToRenderList(P,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Qe.beginShadows();const ie=U.state.shadowsArray;if(je.render(ie,A,q),xt===!0&&Qe.endShadows(),(ne&&O.hasRenderPass())===!1){const Ge=P.opaque,Le=P.transmissive;if(U.setupLights(),q.isArrayCamera){const We=q.cameras;if(Le.length>0)for(let ke=0,$e=We.length;ke<$e;ke++){const lt=We[ke];to(Ge,Le,A,lt)}Wt&&it.render(A);for(let ke=0,$e=We.length;ke<$e;ke++){const lt=We[ke];eo(P,A,lt,lt.viewport)}}else Le.length>0&&to(Ge,Le,A,q),Wt&&it.render(A),eo(P,A,q)}$!==null&&V===0&&(fe.updateMultisampleRenderTarget($),fe.updateRenderTargetMipmap($)),ne&&O.end(W),A.isScene===!0&&A.onAfterRender(W,A,q),Ie.resetDefaultState(),ge=-1,be=null,b.pop(),b.length>0?(U=b[b.length-1],fe.setTextureUnits(U.state.textureUnits),xt===!0&&Qe.setGlobalState(W.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?P=I[I.length-1]:P=null,J!==null&&J.renderEnd()};function cr(A,q,se,ne){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||vt.intersectsSprite(A)){ne&&tn.setFromMatrixPosition(A.matrixWorld).applyMatrix4($t);const Ge=de.update(A),Le=A.material;Le.visible&&P.push(A,Ge,Le,se,tn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||vt.intersectsObject(A))){const Ge=de.update(A),Le=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),tn.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),tn.copy(Ge.boundingSphere.center)),tn.applyMatrix4(A.matrixWorld).applyMatrix4($t)),Array.isArray(Le)){const We=Ge.groups;for(let ke=0,$e=We.length;ke<$e;ke++){const lt=We[ke],Ke=Le[lt.materialIndex];Ke&&Ke.visible&&P.push(A,Ge,Ke,se,tn.z,lt)}}else Le.visible&&P.push(A,Ge,Le,se,tn.z,null)}}const Oe=A.children;for(let Ge=0,Le=Oe.length;Ge<Le;Ge++)cr(Oe[Ge],q,se,ne)}function eo(A,q,se,ne){const{opaque:ie,transmissive:Oe,transparent:Ge}=A;U.setupLightsView(se),xt===!0&&Qe.setGlobalState(W.clippingPlanes,se),ne&&M.viewport(L.copy(ne)),ie.length>0&&ur(ie,q,se),Oe.length>0&&ur(Oe,q,se),Ge.length>0&&ur(Ge,q,se),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function to(A,q,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ne.id]===void 0){const Ke=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ne.id]=new Wi(1,1,{generateMipmaps:!0,type:Ke?ba:_i,minFilter:Fr,samples:Math.max(4,w.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Oe=U.state.transmissionRenderTarget[ne.id],Ge=ne.viewport||L;Oe.setSize(Ge.z*W.transmissionResolutionScale,Ge.w*W.transmissionResolutionScale);const Le=W.getRenderTarget(),We=W.getActiveCubeFace(),ke=W.getActiveMipmapLevel();W.setRenderTarget(Oe),W.getClearColor(Ce),Fe=W.getClearAlpha(),Fe<1&&W.setClearColor(16777215,.5),W.clear(),Wt&&it.render(se);const $e=W.toneMapping;W.toneMapping=ki;const lt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),U.setupLightsView(ne),xt===!0&&Qe.setGlobalState(W.clippingPlanes,ne),ur(A,se,ne),fe.updateMultisampleRenderTarget(Oe),fe.updateRenderTargetMipmap(Oe),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let bt=0,Qt=q.length;bt<Qt;bt++){const Xt=q[bt],{object:Nt,geometry:Ot,material:ze,group:Ln}=Xt;if(ze.side===Vi&&Nt.layers.test(ne.layers)){const ht=ze.side;ze.side=Zn,ze.needsUpdate=!0,Aa(Nt,se,ne,Ot,ze,Ln),ze.side=ht,ze.needsUpdate=!0,Ke=!0}}Ke===!0&&(fe.updateMultisampleRenderTarget(Oe),fe.updateRenderTargetMipmap(Oe))}W.setRenderTarget(Le,We,ke),W.setClearColor(Ce,Fe),lt!==void 0&&(ne.viewport=lt),W.toneMapping=$e}function ur(A,q,se){const ne=q.isScene===!0?q.overrideMaterial:null;for(let ie=0,Oe=A.length;ie<Oe;ie++){const Ge=A[ie],{object:Le,geometry:We,group:ke}=Ge;let $e=Ge.material;$e.allowOverride===!0&&ne!==null&&($e=ne),Le.layers.test(se.layers)&&Aa(Le,q,se,We,$e,ke)}}function Aa(A,q,se,ne,ie,Oe){A.onBeforeRender(W,q,se,ne,ie,Oe),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(W,q,se,ne,A,Oe),ie.transparent===!0&&ie.side===Vi&&ie.forceSinglePass===!1?(ie.side=Zn,ie.needsUpdate=!0,W.renderBufferDirect(se,q,ne,ie,A,Oe),ie.side=or,ie.needsUpdate=!0,W.renderBufferDirect(se,q,ne,ie,A,Oe),ie.side=Vi):W.renderBufferDirect(se,q,ne,ie,A,Oe),A.onAfterRender(W,q,se,ne,ie,Oe)}function Ra(A,q,se){q.isScene!==!0&&(q=on);const ne=re.get(A),ie=U.state.lights,Oe=U.state.shadowsArray,Ge=ie.state.version,Le=Re.getParameters(A,ie.state,Oe,q,se,U.state.lightProbeGridArray),We=Re.getProgramCacheKey(Le);let ke=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const $e=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Te.get(A.envMap||ne.environment,$e),ne.envMapRotation=ne.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",Kn),ke=new Map,ne.programs=ke);let lt=ke.get(We);if(lt!==void 0){if(ne.currentProgram===lt&&ne.lightsStateVersion===Ge)return ji(A,Le),lt}else Le.uniforms=Re.getUniforms(A),J!==null&&A.isNodeMaterial&&J.build(A,se,Le),A.onBeforeCompile(Le,W),lt=Re.acquireProgram(Le,We),ke.set(We,lt),ne.uniforms=Le.uniforms;const Ke=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=Qe.uniform),ji(A,Le),ne.needsLights=no(A),ne.lightsStateVersion=Ge,ne.needsLights&&(Ke.ambientLightColor.value=ie.state.ambient,Ke.lightProbe.value=ie.state.probe,Ke.directionalLights.value=ie.state.directional,Ke.directionalLightShadows.value=ie.state.directionalShadow,Ke.spotLights.value=ie.state.spot,Ke.spotLightShadows.value=ie.state.spotShadow,Ke.rectAreaLights.value=ie.state.rectArea,Ke.ltc_1.value=ie.state.rectAreaLTC1,Ke.ltc_2.value=ie.state.rectAreaLTC2,Ke.pointLights.value=ie.state.point,Ke.pointLightShadows.value=ie.state.pointShadow,Ke.hemisphereLights.value=ie.state.hemi,Ke.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ie.state.spotLightMatrix,Ke.spotLightMap.value=ie.state.spotLightMap,Ke.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=U.state.lightProbeGridArray.length>0,ne.currentProgram=lt,ne.uniformsList=null,lt}function Ji(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=kc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function ji(A,q){const se=re.get(A);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function fr(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(q.matrixWorld);for(let se=0,ne=A.length;se<ne;se++){const ie=A[se];if(ie.texture!==null&&ie.boundingBox.containsPoint(C))return ie}return null}function Ca(A,q,se,ne,ie){q.isScene!==!0&&(q=on),fe.resetTextureUnits();const Oe=q.fog,Ge=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Le=$===null?W.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Mt.workingColorSpace,We=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,ke=Te.get(ne.envMap||Ge,We),$e=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,lt=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!se.morphAttributes.position,bt=!!se.morphAttributes.normal,Qt=!!se.morphAttributes.color;let Xt=ki;ne.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Xt=W.toneMapping);const Nt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ot=Nt!==void 0?Nt.length:0,ze=re.get(ne),Ln=U.state.lights;if(xt===!0&&(dt===!0||A!==be)){const Dt=A===be&&ne.id===ge;Qe.setState(ne,A,Dt)}let ht=!1;ne.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Ln.state.version||ze.outputColorSpace!==Le||ie.isBatchedMesh&&ze.batching===!1||!ie.isBatchedMesh&&ze.batching===!0||ie.isBatchedMesh&&ze.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&ze.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&ze.instancing===!1||!ie.isInstancedMesh&&ze.instancing===!0||ie.isSkinnedMesh&&ze.skinning===!1||!ie.isSkinnedMesh&&ze.skinning===!0||ie.isInstancedMesh&&ze.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ze.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&ze.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&ze.instancingMorph===!1&&ie.morphTexture!==null||ze.envMap!==ke||ne.fog===!0&&ze.fog!==Oe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Qe.numPlanes||ze.numIntersection!==Qe.numIntersection)||ze.vertexAlphas!==$e||ze.vertexTangents!==lt||ze.morphTargets!==Ke||ze.morphNormals!==bt||ze.morphColors!==Qt||ze.toneMapping!==Xt||ze.morphTargetsCount!==Ot||!!ze.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,ze.__version=ne.version);let xn=ze.currentProgram;ht===!0&&(xn=Ra(ne,q,ie),J&&ne.isNodeMaterial&&J.onUpdateProgram(ne,xn,ze));let Qn=!1,vi=!1,Jn=!1;const Pt=xn.getUniforms(),Jt=ze.uniforms;if(M.useProgram(xn.program)&&(Qn=!0,vi=!0,Jn=!0),ne.id!==ge&&(ge=ne.id,vi=!0),ze.needsLights){const Dt=fr(U.state.lightProbeGridArray,ie);ze.lightProbeGrid!==Dt&&(ze.lightProbeGrid=Dt,vi=!0)}if(Qn||be!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(Z,"projectionMatrix",A.projectionMatrix),Pt.setValue(Z,"viewMatrix",A.matrixWorldInverse);const Ni=Pt.map.cameraPosition;Ni!==void 0&&Ni.setValue(Z,en.setFromMatrixPosition(A.matrixWorld)),w.logarithmicDepthBuffer&&Pt.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Pt.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),be!==A&&(be=A,vi=!0,Jn=!0)}if(ze.needsLights&&(Ln.state.directionalShadowMap.length>0&&Pt.setValue(Z,"directionalShadowMap",Ln.state.directionalShadowMap,fe),Ln.state.spotShadowMap.length>0&&Pt.setValue(Z,"spotShadowMap",Ln.state.spotShadowMap,fe),Ln.state.pointShadowMap.length>0&&Pt.setValue(Z,"pointShadowMap",Ln.state.pointShadowMap,fe)),ie.isSkinnedMesh){Pt.setOptional(Z,ie,"bindMatrix"),Pt.setOptional(Z,ie,"bindMatrixInverse");const Dt=ie.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Pt.setValue(Z,"boneTexture",Dt.boneTexture,fe))}ie.isBatchedMesh&&(Pt.setOptional(Z,ie,"batchingTexture"),Pt.setValue(Z,"batchingTexture",ie._matricesTexture,fe),Pt.setOptional(Z,ie,"batchingIdTexture"),Pt.setValue(Z,"batchingIdTexture",ie._indirectTexture,fe),Pt.setOptional(Z,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Pt.setValue(Z,"batchingColorTexture",ie._colorsTexture,fe));const xi=se.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&k.update(ie,se,xn),(vi||ze.receiveShadow!==ie.receiveShadow)&&(ze.receiveShadow=ie.receiveShadow,Pt.setValue(Z,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(Jt.envMapIntensity.value=q.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=kb()),vi){if(Pt.setValue(Z,"toneMappingExposure",W.toneMappingExposure),ze.needsLights&&dn(Jt,Jn),Oe&&ne.fog===!0&&Be.refreshFogUniforms(Jt,Oe),Be.refreshMaterialUniforms(Jt,ne,ye,Se,U.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.lightProbeGrid){const Dt=ze.lightProbeGrid;Jt.probesSH.value=Dt.texture,Jt.probesMin.value.copy(Dt.boundingBox.min),Jt.probesMax.value.copy(Dt.boundingBox.max),Jt.probesResolution.value.copy(Dt.resolution)}kc.upload(Z,Ji(ze),Jt,fe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(kc.upload(Z,Ji(ze),Jt,fe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Pt.setValue(Z,"center",ie.center),Pt.setValue(Z,"modelViewMatrix",ie.modelViewMatrix),Pt.setValue(Z,"normalMatrix",ie.normalMatrix),Pt.setValue(Z,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const Dt=ne.uniformsGroups;for(let Ni=0,wa=Dt.length;Ni<wa;Ni++){const dr=Dt[Ni];Me.update(dr,xn),Me.bind(dr,xn)}}return xn}function dn(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function no(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,q,se){const ne=re.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=q,re.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const se=re.get(A);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,se=0){$=A,B=q,V=se;let ne=null,ie=!1,Oe=!1;if(A){const Le=re.get(A);if(Le.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Z.FRAMEBUFFER,Le.__webglFramebuffer),L.copy(A.viewport),K.copy(A.scissor),Ee=A.scissorTest,M.viewport(L),M.scissor(K),M.setScissorTest(Ee),ge=-1;return}else if(Le.__webglFramebuffer===void 0)fe.setupRenderTarget(A);else if(Le.__hasExternalTextures)fe.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Le.__boundDepthTexture!==$e){if($e!==null&&re.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Oe=!0);const ke=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[q])?ne=ke[q][se]:ne=ke[q],ie=!0):A.samples>0&&fe.useMultisampledRTT(A)===!1?ne=re.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?ne=ke[se]:ne=ke,L.copy(A.viewport),K.copy(A.scissor),Ee=A.scissorTest}else L.copy(Je).multiplyScalar(ye).floor(),K.copy(qt).multiplyScalar(ye).floor(),Ee=ft;if(se!==0&&(ne=he),M.bindFramebuffer(Z.FRAMEBUFFER,ne)&&M.drawBuffers(A,ne),M.viewport(L),M.scissor(K),M.setScissorTest(Ee),ie){const Le=re.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,se)}else if(Oe){const Le=q;for(let We=0;We<A.textures.length;We++){const ke=re.get(A.textures[We]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+We,ke.__webglTexture,se,Le)}}else if(A!==null&&se!==0){const Le=re.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Le.__webglTexture,se)}ge=-1},this.readRenderTargetPixels=function(A,q,se,ne,ie,Oe,Ge,Le=0){if(!(A&&A.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We){M.bindFramebuffer(Z.FRAMEBUFFER,We);try{const ke=A.textures[Le],$e=ke.format,lt=ke.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Le),!w.textureFormatReadable($e)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(lt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ne&&se>=0&&se<=A.height-ie&&Z.readPixels(q,se,ne,ie,we.convert($e),we.convert(lt),Oe)}finally{const ke=$!==null?re.get($).__webglFramebuffer:null;M.bindFramebuffer(Z.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,q,se,ne,ie,Oe,Ge,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We)if(q>=0&&q<=A.width-ne&&se>=0&&se<=A.height-ie){M.bindFramebuffer(Z.FRAMEBUFFER,We);const ke=A.textures[Le],$e=ke.format,lt=ke.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Le),!w.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ke),Z.bufferData(Z.PIXEL_PACK_BUFFER,Oe.byteLength,Z.STREAM_READ),Z.readPixels(q,se,ne,ie,we.convert($e),we.convert(lt),0);const bt=$!==null?re.get($).__webglFramebuffer:null;M.bindFramebuffer(Z.FRAMEBUFFER,bt);const Qt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await oS(Z,Qt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ke),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Oe),Z.deleteBuffer(Ke),Z.deleteSync(Qt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,se=0){const ne=Math.pow(2,-se),ie=Math.floor(A.image.width*ne),Oe=Math.floor(A.image.height*ne),Ge=q!==null?q.x:0,Le=q!==null?q.y:0;fe.setTexture2D(A,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,se,0,0,Ge,Le,ie,Oe),M.unbindTexture()},this.copyTextureToTexture=function(A,q,se=null,ne=null,ie=0,Oe=0){let Ge,Le,We,ke,$e,lt,Ke,bt,Qt;const Xt=A.isCompressedTexture?A.mipmaps[Oe]:A.image;if(se!==null)Ge=se.max.x-se.min.x,Le=se.max.y-se.min.y,We=se.isBox3?se.max.z-se.min.z:1,ke=se.min.x,$e=se.min.y,lt=se.isBox3?se.min.z:0;else{const Jt=Math.pow(2,-ie);Ge=Math.floor(Xt.width*Jt),Le=Math.floor(Xt.height*Jt),A.isDataArrayTexture?We=Xt.depth:A.isData3DTexture?We=Math.floor(Xt.depth*Jt):We=1,ke=0,$e=0,lt=0}ne!==null?(Ke=ne.x,bt=ne.y,Qt=ne.z):(Ke=0,bt=0,Qt=0);const Nt=we.convert(q.format),Ot=we.convert(q.type);let ze;q.isData3DTexture?(fe.setTexture3D(q,0),ze=Z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(fe.setTexture2DArray(q,0),ze=Z.TEXTURE_2D_ARRAY):(fe.setTexture2D(q,0),ze=Z.TEXTURE_2D),M.activeTexture(Z.TEXTURE0),M.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,q.flipY),M.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),M.pixelStorei(Z.UNPACK_ALIGNMENT,q.unpackAlignment);const Ln=M.getParameter(Z.UNPACK_ROW_LENGTH),ht=M.getParameter(Z.UNPACK_IMAGE_HEIGHT),xn=M.getParameter(Z.UNPACK_SKIP_PIXELS),Qn=M.getParameter(Z.UNPACK_SKIP_ROWS),vi=M.getParameter(Z.UNPACK_SKIP_IMAGES);M.pixelStorei(Z.UNPACK_ROW_LENGTH,Xt.width),M.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Xt.height),M.pixelStorei(Z.UNPACK_SKIP_PIXELS,ke),M.pixelStorei(Z.UNPACK_SKIP_ROWS,$e),M.pixelStorei(Z.UNPACK_SKIP_IMAGES,lt);const Jn=A.isDataArrayTexture||A.isData3DTexture,Pt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const Jt=re.get(A),xi=re.get(q),Dt=re.get(Jt.__renderTarget),Ni=re.get(xi.__renderTarget);M.bindFramebuffer(Z.READ_FRAMEBUFFER,Dt.__webglFramebuffer),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let wa=0;wa<We;wa++)Jn&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,re.get(A).__webglTexture,ie,lt+wa),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,re.get(q).__webglTexture,Oe,Qt+wa)),Z.blitFramebuffer(ke,$e,Ge,Le,Ke,bt,Ge,Le,Z.DEPTH_BUFFER_BIT,Z.NEAREST);M.bindFramebuffer(Z.READ_FRAMEBUFFER,null),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||re.has(A)){const Jt=re.get(A),xi=re.get(q);M.bindFramebuffer(Z.READ_FRAMEBUFFER,ve),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,j);for(let Dt=0;Dt<We;Dt++)Jn?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Jt.__webglTexture,ie,lt+Dt):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Jt.__webglTexture,ie),Pt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,xi.__webglTexture,Oe,Qt+Dt):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,xi.__webglTexture,Oe),ie!==0?Z.blitFramebuffer(ke,$e,Ge,Le,Ke,bt,Ge,Le,Z.COLOR_BUFFER_BIT,Z.NEAREST):Pt?Z.copyTexSubImage3D(ze,Oe,Ke,bt,Qt+Dt,ke,$e,Ge,Le):Z.copyTexSubImage2D(ze,Oe,Ke,bt,ke,$e,Ge,Le);M.bindFramebuffer(Z.READ_FRAMEBUFFER,null),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?Z.texSubImage3D(ze,Oe,Ke,bt,Qt,Ge,Le,We,Nt,Ot,Xt.data):q.isCompressedArrayTexture?Z.compressedTexSubImage3D(ze,Oe,Ke,bt,Qt,Ge,Le,We,Nt,Xt.data):Z.texSubImage3D(ze,Oe,Ke,bt,Qt,Ge,Le,We,Nt,Ot,Xt):A.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Oe,Ke,bt,Ge,Le,Nt,Ot,Xt.data):A.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Oe,Ke,bt,Xt.width,Xt.height,Nt,Xt.data):Z.texSubImage2D(Z.TEXTURE_2D,Oe,Ke,bt,Ge,Le,Nt,Ot,Xt);M.pixelStorei(Z.UNPACK_ROW_LENGTH,Ln),M.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ht),M.pixelStorei(Z.UNPACK_SKIP_PIXELS,xn),M.pixelStorei(Z.UNPACK_SKIP_ROWS,Qn),M.pixelStorei(Z.UNPACK_SKIP_IMAGES,vi),Oe===0&&q.generateMipmaps&&Z.generateMipmap(ze),M.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?fe.setTextureCube(A,0):A.isData3DTexture?fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?fe.setTexture2DArray(A,0):fe.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){B=0,V=0,$=null,M.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Mt._getUnpackColorSpace()}}const Zd=1672,Ps=941,zs=520,Z1=12,Hs=24,lr=8;function qb(s,e,i,r,o){const c=1-o;return{x:c**3*s.x+3*c**2*o*e.x+3*c*o**2*i.x+o**3*r.x,y:c**3*s.y+3*c**2*o*e.y+3*c*o**2*i.y+o**3*r.y}}function Fc(s,e=96){const i=[];for(let r=0;r<2;r+=1){const o=r*3;for(let c=0;c<=e;c+=1)r>0&&c===0||i.push(qb(s[o],s[o+1],s[o+2],s[o+3],c/e))}return i}function Ic(s,e){const i=Math.min(1,Math.max(0,e));let r=0,o=s.length-1;for(;r<o-1;){const h=Math.floor((r+o)/2);s[h].x<=i?r=h:o=h}const c=s[r],d=s[o],p=Math.max(1e-6,d.x-c.x),m=Math.min(1,Math.max(0,(i-c.x)/p));return c.y+(d.y-c.y)*m}function Zb(){const s=[],e=[],i=[];for(let c=0;c<=Hs;c+=1){const d=c/Hs;for(let p=0;p<=lr;p+=1){const m=p/lr;s.push(d*zs,m*Ps,0),e.push(d,1-m)}}const r=lr+1;for(let c=0;c<Hs;c+=1)for(let d=0;d<lr;d+=1){const p=c*r+d,m=(c+1)*r+d;i.push(p,m,p+1,p+1,m,m+1)}const o=new Qi;return o.setAttribute("position",new Di(s,3)),o.setAttribute("uv",new Di(e,2)),o.setIndex(i),o}function Y1(s,e,i,r){const o=Math.max(.01,e/i),c=zs/Math.max(1,r);s.wrapS=Ci,s.wrapT=Ci,s.repeat.set(1,1),s.offset.set(0,0),o>c?(s.repeat.x=c/o,s.offset.x=(1-s.repeat.x)/2):(s.repeat.y=o/c,s.offset.y=(1-s.repeat.y)/2),s.needsUpdate=!0}async function Yb(s,e){if(s.type==="video"){const r=document.createElement("video");r.src=s.src,r.muted=!0,r.loop=!0,r.playsInline=!0,r.autoplay=!0,r.preload="auto",await r.play().catch(()=>{});const o=new PS(r);o.colorSpace=Bn,o.minFilter=ln,o.magFilter=ln;const c=()=>Y1(o,r.videoWidth||zs,r.videoHeight||e,e);return r.addEventListener("loadedmetadata",c,{once:!0}),c(),{texture:o,video:r}}const i=await new ZS().loadAsync(s.src);return i.colorSpace=Bn,i.minFilter=ln,i.magFilter=ln,Y1(i,i.image.naturalWidth||i.image.width,i.image.naturalHeight||i.image.height,e),{texture:i,video:null}}function Kb({curves:s,media:e,paused:i,speed:r}){const o=F.useRef(null),c=F.useRef({curves:s,paused:i,speed:r});return F.useEffect(()=>{c.current={curves:s,paused:i,speed:r}},[s,i,r]),F.useEffect(()=>{const d=o.current;if(!d||e.length===0)return;let p=!1,m,h,x=0;const v=[],g=[],y=new Wb({canvas:d,alpha:!0,antialias:!0});d.dataset.warpMode=`uv-mesh-${Hs}x${lr}`,d.dataset.scrollOffset="0.000",y.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),y.setSize(Zd,Ps,!1),y.setClearColor(0,0),y.outputColorSpace=Bn;const T=new bS,D=new $h(0,Zd,0,Ps,-10,10);D.position.z=1;const E=e.length*(zs+Z1),S=Math.max(100,(Ic(Fc(s.bottom),.5)-Ic(Fc(s.top),.5))*Ps);return(async()=>{const N=await Promise.all(e.map(P=>Yb(P,S)));if(p){N.forEach(({texture:P,video:U})=>{P.dispose(),U==null||U.pause()});return}N.forEach((P,U)=>{v.push(P);const I=new Jh({map:P.texture,side:Vi,toneMapped:!1});v.push({material:I});for(let b=-1;b<=2;b+=1){const O=Zb(),W=new Yi(O,I);W.frustumCulled=!1,W.userData.baseX=b*E+U*(zs+Z1),W.userData.itemIndex=U,T.add(W),g.push(W)}});const C=P=>{const U=c.current;h!==void 0&&!U.paused&&(x=(x+U.speed*Math.min(64,P-h)/1e3)%E),d.dataset.scrollOffset=x.toFixed(3),h=P;const I=Fc(U.curves.top),b=Fc(U.curves.bottom),O=lr+1;g.forEach(W=>{const G=W.userData.baseX-x;W.position.x=G;const J=W.geometry.attributes.position.array;for(let he=0;he<=Hs;he+=1){const ve=he/Hs*zs,j=(G+ve)/Zd,B=Ic(I,j)*Ps,V=Ic(b,j)*Ps;for(let $=0;$<=lr;$+=1){const ge=(he*O+$)*3;J[ge+1]=B+$/lr*(V-B)}}W.geometry.attributes.position.needsUpdate=!0}),y.render(T,D),m=requestAnimationFrame(C)};m=requestAnimationFrame(C)})(),()=>{p=!0,cancelAnimationFrame(m),g.forEach(N=>N.geometry.dispose()),v.forEach(N=>{var C,P,U;(C=N.texture)==null||C.dispose(),(P=N.video)==null||P.pause(),(U=N.material)==null||U.dispose()}),y.dispose()}},[e]),He.jsx("canvas",{className:"newsroom-warp-canvas",ref:o,"aria-hidden":"true"})}const Bh=1672,K1=Bh*9/16,Qb=42,Q1={version:1,top:[{x:0,y:.049389567147613764},{x:.29172468254646355,y:.11493941326530613},{x:.38132211800152943,y:.10266370699223086},{x:.5727263922539709,y:.10473533163265306},{x:.7293296527642158,y:.10269451530612245},{x:.8729008372188588,y:.08024553571428572},{x:1,y:.039400665926748055}],bottom:[{x:0,y:.7068027210884353},{x:.1527045267021226,y:.6670366259711432},{x:.267950279693217,y:.6770255271920089},{x:.47314393745784855,y:.6703662597114317},{x:.6925754295438271,y:.6700414540816326},{x:.8582334047695543,y:.6770255271920089},{x:1,y:.7149659863945578}]},Jb=Array.from({length:7},(s,e)=>({id:`demo-${e+1}`,type:"image",src:`/assets/adaptive-carousel/card_image${e+1}.jpg`}));function jb(s,e,i,r,o){const c=1-o;return{x:c**3*s.x+3*c**2*o*e.x+3*c*o**2*i.x+o**3*r.x,y:c**3*s.y+3*c**2*o*e.y+3*c*o**2*i.y+o**3*r.y}}function J1(s,e=72){const i=[];for(let r=0;r<2;r+=1){const o=r*3;for(let c=0;c<=e;c+=1)r>0&&c===0||i.push(jb(s[o],s[o+1],s[o+2],s[o+3],c/e))}return i}function $b(s){const e=J1(s.top),i=J1(s.bottom);return`polygon(${[...e,...[...i].reverse()].map(r=>`${(r.x*100).toFixed(3)}% ${(r.y*100).toFixed(3)}%`).join(",")})`}function eT(){const s=F.useRef(null),[e,i]=F.useState(1),[r,o]=F.useState(!1),c=F.useMemo(()=>$b(Q1),[]);F.useEffect(()=>{const p=s.current;if(!p)return;const m=()=>i(Math.max(p.clientWidth/Bh,p.clientHeight/K1));m();const h=new ResizeObserver(m);return h.observe(p),()=>h.disconnect()},[]);const d=()=>{r||(window.dispatchEvent(new CustomEvent("studio-login-request")),o(!0))};return He.jsx("section",{className:"newsroom-shell",ref:s,"aria-label":"狐狸演播室媒体轮播",children:He.jsx("div",{className:"newsroom-stage-frame",style:{width:Bh*e,height:K1*e},children:He.jsxs("div",{className:`newsroom-stage ${r?"is-login-blackout":""}`,style:{transform:`scale(${e})`},children:[He.jsxs("div",{className:"newsroom-screen",style:{clipPath:c},"aria-label":"自动滚动曲面屏",children:[He.jsx("div",{className:"newsroom-screen-glass","aria-hidden":"true"}),He.jsx(Kb,{curves:Q1,media:Jb,paused:!1,speed:Qb}),He.jsx("div",{className:"newsroom-screen-shade","aria-hidden":"true"})]}),He.jsx(Rx,{}),He.jsx("img",{className:"studio-lighting-atmosphere",src:"/assets/studio/studio-lighting-atmosphere.png",alt:"","aria-hidden":"true",draggable:"false"}),He.jsx("div",{className:"studio-depth-overlay","aria-hidden":"true"}),He.jsx("img",{className:"newsroom-fox-foreground",src:"/assets/studio/fox-presenter-foreground.png",alt:"","aria-hidden":"true",draggable:"false"}),He.jsx("div",{className:"studio-blackout-overlay","aria-hidden":"true"}),!r&&He.jsxs("button",{className:"studio-login-button",type:"button",onClick:d,"aria-label":"登录",children:[He.jsx(Tx,{weight:"bold"}),He.jsx("span",{children:"登录"})]})]})})})}function W_(s){const[e,i]=F.useState(null);return F.useEffect(()=>{const r=new AbortController,o=document.createElement("video"),c=s.find(({type:m})=>!m||o.canPlayType(m))??s[0];let d;async function p(){try{const m=await fetch(c.src,{cache:"force-cache",signal:r.signal});if(!m.ok)throw new Error(`Video request failed: ${m.status}`);const h=await m.arrayBuffer(),x=new Blob([h],{type:c.mimeType||m.headers.get("content-type")||"video/mp4"});d=URL.createObjectURL(x),i(d)}catch(m){m.name!=="AbortError"&&i(c.src)}}return p(),()=>{r.abort(),d&&URL.revokeObjectURL(d)}},[s]),e}const tT=420,nT=3e4,iT=[{src:"/assets/studio/brand-intro-alpha.webm",type:'video/webm; codecs="vp9"',mimeType:"video/webm"},{src:"/assets/studio/brand-intro-alpha.mov",type:'video/quicktime; codecs="hvc1"',mimeType:"video/quicktime"}];function aT(){const s=F.useRef(null),e=F.useRef(null),i=F.useRef(!1),r=W_(iT),[o,c]=F.useState("loading"),[d,p]=F.useState(!0),m=F.useCallback(()=>{c(h=>h==="exiting"?h:(e.current=window.setTimeout(()=>p(!1),tT),"exiting"))},[]);return F.useEffect(()=>{const h=window.setTimeout(m,nT);return()=>{window.clearTimeout(h),window.clearTimeout(e.current)}},[m]),d?He.jsx("section",{className:`brand-intro brand-intro--${o}`,"aria-label":"品牌开场动画","data-intro-phase":o,children:He.jsx("video",{ref:s,className:"brand-intro__video",src:r??void 0,muted:!0,playsInline:!0,preload:"auto",disablePictureInPicture:!0,onLoadedData:async()=>{var h;if(!i.current){i.current=!0,c("starting");try{await((h=s.current)==null?void 0:h.play())}catch{m()}}},onPlaying:()=>c("playing"),onEnded:m,onError:m,"aria-hidden":"true"})}):null}const rT=1.01,sT=.9,lT=1,oT=0,cT=1.5,uT=0,fT=[{start:0,end:.233333}],Ma={scale:rT,brightness:sT,offsetX:lT,offsetY:oT,playbackRate:cT,trimStart:uT,cuts:fT},j1={student:{title:"学员端登录",registrationTitle:"学员端注册",accent:"student",Icon:yx},admin:{title:"教师端登录",registrationTitle:"教师端注册",accent:"admin",Icon:bx}};function dT({role:s="student",onBack:e,layout:i}){const[r,o]=F.useState("login"),[c,d]=F.useState(!1),[p,m]=F.useState(""),[h,x]=F.useState(!1),v=j1[s]??j1.student,g=v.Icon,y=r==="register",T=S=>{var z,N,C;return{"data-layout-key":S,style:{"--layout-x":`${((z=i==null?void 0:i[S])==null?void 0:z.x)??0}%`,"--layout-y":`${((N=i==null?void 0:i[S])==null?void 0:N.y)??0}%`,"--layout-scale":((C=i==null?void 0:i[S])==null?void 0:C.scale)??1}}},D=async S=>{var I,b;if(S.preventDefault(),h)return;const z=new FormData(S.currentTarget),N=String(z.get("identity")||"").trim(),C=String(z.get("password")||""),P=y?"/api/auth/register":"/api/auth/login",U=y?{account:N,password:C,role:s==="admin"?"teacher":"student"}:{account:N,password:C};x(!0),m(y?"正在创建账号…":"正在验证身份…");try{const O=await fetch(P,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U)}),W=await O.json().catch(()=>({}));if(!O.ok){const G=typeof W.error=="object"?(I=W.error)==null?void 0:I.message:W.error;throw new Error(G||W.message||"请求失败，请稍后再试")}localStorage.setItem("ai-auth-token",W.token||""),localStorage.setItem("ai-auth-role",((b=W.user)==null?void 0:b.role)||"student"),m(y?"注册成功，正在进入…":"登录成功，正在进入…"),window.setTimeout(()=>{var G;window.location.href=((G=W.user)==null?void 0:G.role)==="student"?"/student.html":"/teacher.html"},420)}catch(O){m(O instanceof Error?O.message:"请求失败，请稍后再试")}finally{x(!1)}},E=S=>{m(`正在使用${S}登录`)};return He.jsxs("section",{...T("panel"),className:`role-login-panel role-login-panel--${v.accent}`,"aria-label":y?v.registrationTitle:v.title,children:[He.jsxs("button",{...T("back"),className:"role-login-panel__back",type:"button",onClick:e,children:[He.jsx(_x,{weight:"bold","aria-hidden":"true"}),"返回"]}),He.jsxs("header",{...T("heading"),className:"role-login-panel__heading",children:[He.jsx("span",{className:"role-login-panel__badge","aria-hidden":"true",children:He.jsx(g,{weight:"fill"})}),He.jsx("h1",{children:y?v.registrationTitle:v.title})]}),He.jsxs("form",{className:"role-login-panel__form",onSubmit:D,children:[He.jsxs("label",{...T("identity"),className:"role-login-field illustrated-control",children:[He.jsx(vx,{weight:"regular","aria-hidden":"true"}),He.jsx("span",{className:"sr-only",children:"手机号或邮箱"}),He.jsx("input",{name:"identity",type:"text",autoComplete:"username",placeholder:"账号或邮箱",required:!0})]}),He.jsxs("label",{...T("password"),className:"role-login-field illustrated-control",children:[He.jsx(Ex,{weight:"fill","aria-hidden":"true"}),He.jsx("span",{className:"sr-only",children:"密码"}),He.jsx("input",{name:"password",type:c?"text":"password",autoComplete:y?"new-password":"current-password",placeholder:"密码",required:!0}),He.jsx("button",{className:"role-login-field__reveal",type:"button","aria-label":c?"隐藏密码":"显示密码",onClick:()=>d(S=>!S),children:c?He.jsx(Mx,{weight:"bold"}):He.jsx(Sx,{weight:"bold"})})]}),He.jsx("button",{...T("submit"),className:"role-login-panel__submit illustrated-control",type:"submit",disabled:h,"aria-busy":h,children:h?"请稍候…":y?"注册":"登录"})]}),He.jsxs("button",{...T("switch"),className:"role-login-panel__switch",type:"button",onClick:()=>{o(y?"login":"register"),m("")},children:[y?"已有账号？":"还没有账号？",He.jsx("strong",{children:y?"立即登录":"立即注册"})]}),He.jsx("div",{...T("divider"),className:"role-login-panel__divider","aria-hidden":"true",children:He.jsx("span",{children:"或"})}),He.jsxs("div",{className:"role-login-panel__alternatives",children:[He.jsxs("button",{...T("wechat"),className:"role-login-alternative role-login-alternative--wechat illustrated-control",type:"button",onClick:()=>E("微信"),children:[He.jsx(Ax,{weight:"fill","aria-hidden":"true"}),"微信登录"]}),He.jsxs("button",{...T("email"),className:"role-login-alternative role-login-alternative--email illustrated-control",type:"button",onClick:()=>E("邮箱"),children:[He.jsx(xx,{weight:"fill","aria-hidden":"true"}),"邮箱登录"]})]}),He.jsx("p",{className:"role-login-panel__status","aria-live":"polite",children:p})]})}const hT=1,pT={x:-4.024781181619256,y:0,scale:.96},mT={x:1.2,y:.5,scale:.97},gT={x:-.3,y:-3,scale:.89},_T={x:0,y:0,scale:1.01},vT={x:0,y:0,scale:1.01},xT={x:0,y:0,scale:1},ST={x:-.1625583779260039,y:-.37077488131846303,scale:1},MT={x:-11.4,y:23.18538744065923,scale:.96},yT={x:-5551115123125783e-32,y:23,scale:.96},ET={version:hT,panel:pT,back:mT,heading:gT,identity:_T,password:vT,submit:xT,switch:{x:0,y:0,scale:1},divider:ST,wechat:MT,email:yT},bT=[{src:"/assets/studio/login-transition.mp4",type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',mimeType:"video/mp4"}],TT=560,Qc=1/30,AT=.8;function Bc(s){const e=Number.isFinite(s)&&s>0?s:0,i=Math.min(Math.max(0,Ma.trimStart),Math.max(0,e-Qc)),r=Math.min(Math.max(i+Qc,e),e);return{start:i,end:r}}function $1(s,e){let i=s;return Ma.cuts.forEach(r=>{i>=r.start&&i<r.end&&(i=Math.min(r.end,e))}),i}function RT(){const s=F.useRef(null),e=F.useRef(0),i=W_(bT),[r,o]=F.useState(!1),[c,d]=F.useState(!1),[p,m]=F.useState("preloading"),[h,x]=F.useState(!1),[v,g]=F.useState(null),[y,T]=F.useState("roles");F.useEffect(()=>{const N=()=>{e.current=performance.now(),x(!1),g(null),T("roles"),o(!0),m(C=>C==="preloading"?"waiting":C)};return window.addEventListener("studio-login-request",N),()=>window.removeEventListener("studio-login-request",N)},[]),F.useEffect(()=>{if(!r||!c)return;const N=Math.max(0,TT-(performance.now()-e.current)),C=window.setTimeout(async()=>{const P=s.current;if(!P)return;const U=Bc(P.duration);P.currentTime=$1(U.start,U.end),P.playbackRate=Ma.playbackRate,m("starting");try{await P.play()}catch{m("waiting")}},N);return()=>window.clearTimeout(C)},[c,r]);const D=()=>{const N=s.current;if(N&&(N.pause(),Number.isFinite(N.duration)&&N.duration>0)){const C=Bc(N.duration);N.currentTime=Math.max(C.start,C.end-Qc)}x(!0),m("frozen")},E=()=>{const N=s.current;if(!N||N.paused||!Number.isFinite(N.duration))return;const C=Bc(N.duration),P=Ma.cuts.find(I=>N.currentTime>=I.start&&N.currentTime<I.end);P&&(N.currentTime=Math.min(P.end,C.end));const U=AT*N.playbackRate;N.currentTime>=C.end-U&&x(!0),N.currentTime>=C.end-Qc/2&&D()},S=p==="playing"||p==="frozen",z=N=>{g(N),T("leaving"),window.dispatchEvent(new CustomEvent("studio-role-selected",{detail:{role:N}})),window.setTimeout(()=>T("form"),250)};return He.jsx("section",{className:`login-transition ${S?"login-transition--visible":""}`,"data-transition-phase":p,"data-has-role-selection":h?"true":"false","aria-hidden":!h,children:He.jsxs("div",{className:"login-transition__stage",children:[i&&He.jsx("video",{ref:s,className:"login-transition__video",src:i,preload:"auto",muted:!0,playsInline:!0,disablePictureInPicture:!0,style:{filter:`brightness(${Ma.brightness})`,transform:`translate(${Ma.offsetX}%, ${Ma.offsetY}%) scale(${Ma.scale})`},onLoadedData:()=>{const N=s.current;if(N==null||N.pause(),N){const C=Bc(N.duration);N.currentTime=$1(C.start,C.end),N.playbackRate=Ma.playbackRate}d(!0),m(C=>C==="preloading"?"ready":C)},onTimeUpdate:E,onPlaying:()=>m("playing"),onEnded:D,onError:()=>m(r?"waiting":"preloading")}),h&&y!=="form"&&He.jsxs("div",{className:`role-selection-scene ${y==="leaving"?"role-selection-scene--leaving":""}`,"data-selected-role":v??"","aria-label":"选择登录入口",children:[He.jsx("img",{className:"role-selection-scene__bubble",src:"/assets/studio/role-question-bubble.png",alt:"","aria-hidden":"true",draggable:"false"}),He.jsxs("div",{className:"role-selection-scene__accessible-copy",children:[He.jsx("h1",{children:"你是什么身份？"}),He.jsx("p",{children:"请选择学员端或管理端"})]}),He.jsx("button",{className:`role-selection-hotspot role-selection-hotspot--student ${v==="student"?"is-selected":""}`,type:"button","aria-label":"学员端，进入学习中心","aria-pressed":v==="student",onClick:()=>z("student"),children:He.jsx("img",{src:"/assets/studio/role-student-button.png",alt:"","aria-hidden":"true",draggable:"false"})}),He.jsx("button",{className:`role-selection-hotspot role-selection-hotspot--admin ${v==="admin"?"is-selected":""}`,type:"button","aria-label":"管理端，进入管理后台","aria-pressed":v==="admin",onClick:()=>z("admin"),children:He.jsx("img",{src:"/assets/studio/role-admin-button.png",alt:"","aria-hidden":"true",draggable:"false"})}),He.jsxs("p",{className:"role-selection-scene__status","aria-live":"polite",children:[v==="student"&&"已选择学员端",v==="admin"&&"已选择管理端"]})]}),h&&y==="form"&&He.jsx(dT,{role:v,layout:ET,onBack:()=>{g(null),T("roles")}})]})})}function CT(){return He.jsxs("main",{className:"baseline-page",children:[He.jsx(eT,{}),He.jsx(RT,{}),He.jsx(aT,{},"brand-intro-v2")]})}rx.createRoot(document.getElementById("root")).render(He.jsx(j2.StrictMode,{children:He.jsx(CT,{})}));
