function sy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function oy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kp={exports:{}},tl={},Np={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var os=Symbol.for("react.element"),ly=Symbol.for("react.portal"),ay=Symbol.for("react.fragment"),uy=Symbol.for("react.strict_mode"),cy=Symbol.for("react.profiler"),dy=Symbol.for("react.provider"),hy=Symbol.for("react.context"),fy=Symbol.for("react.forward_ref"),py=Symbol.for("react.suspense"),my=Symbol.for("react.memo"),gy=Symbol.for("react.lazy"),Gd=Symbol.iterator;function _y(t){return t===null||typeof t!="object"?null:(t=Gd&&t[Gd]||t["@@iterator"],typeof t=="function"?t:null)}var Pp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rp=Object.assign,xp={};function $r(t,e,n){this.props=t,this.context=e,this.refs=xp,this.updater=n||Pp}$r.prototype.isReactComponent={};$r.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$r.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Op(){}Op.prototype=$r.prototype;function $u(t,e,n){this.props=t,this.context=e,this.refs=xp,this.updater=n||Pp}var qu=$u.prototype=new Op;qu.constructor=$u;Rp(qu,$r.prototype);qu.isPureReactComponent=!0;var Kd=Array.isArray,Ap=Object.prototype.hasOwnProperty,Gu={current:null},Dp={key:!0,ref:!0,__self:!0,__source:!0};function Mp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ap.call(e,r)&&!Dp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:os,type:t,key:s,ref:o,props:i,_owner:Gu.current}}function vy(t,e){return{$$typeof:os,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ku(t){return typeof t=="object"&&t!==null&&t.$$typeof===os}function yy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qd=/\/+/g;function Fl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yy(""+t.key):e.toString(36)}function Vs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case os:case ly:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Fl(o,0):r,Kd(i)?(n="",t!=null&&(n=t.replace(Qd,"$&/")+"/"),Vs(i,e,n,"",function(u){return u})):i!=null&&(Ku(i)&&(i=vy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Qd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Kd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Fl(s,l);o+=Vs(s,e,n,a,i)}else if(a=_y(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Fl(s,l++),o+=Vs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Cs(t,e,n){if(t==null)return t;var r=[],i=0;return Vs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xe={current:null},Hs={transition:null},Ey={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Hs,ReactCurrentOwner:Gu};z.Children={map:Cs,forEach:function(t,e,n){Cs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Cs(t,function(){e++}),e},toArray:function(t){return Cs(t,function(e){return e})||[]},only:function(t){if(!Ku(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=$r;z.Fragment=ay;z.Profiler=cy;z.PureComponent=$u;z.StrictMode=uy;z.Suspense=py;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ey;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Rp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Ap.call(e,a)&&!Dp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:os,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:hy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dy,_context:t},t.Consumer=t};z.createElement=Mp;z.createFactory=function(t){var e=Mp.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:fy,render:t}};z.isValidElement=Ku;z.lazy=function(t){return{$$typeof:gy,_payload:{_status:-1,_result:t},_init:wy}};z.memo=function(t,e){return{$$typeof:my,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=Hs.transition;Hs.transition={};try{t()}finally{Hs.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return xe.current.useCallback(t,e)};z.useContext=function(t){return xe.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return xe.current.useDeferredValue(t)};z.useEffect=function(t,e){return xe.current.useEffect(t,e)};z.useId=function(){return xe.current.useId()};z.useImperativeHandle=function(t,e,n){return xe.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return xe.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return xe.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return xe.current.useMemo(t,e)};z.useReducer=function(t,e,n){return xe.current.useReducer(t,e,n)};z.useRef=function(t){return xe.current.useRef(t)};z.useState=function(t){return xe.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return xe.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return xe.current.useTransition()};z.version="18.2.0";Np.exports=z;var x=Np.exports;const Lp=oy(x),Cy=sy({__proto__:null,default:Lp},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy=x,Iy=Symbol.for("react.element"),Ty=Symbol.for("react.fragment"),ky=Object.prototype.hasOwnProperty,Ny=Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Py={key:!0,ref:!0,__self:!0,__source:!0};function bp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ky.call(e,r)&&!Py.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Iy,type:t,key:s,ref:o,props:i,_owner:Ny.current}}tl.Fragment=Ty;tl.jsx=bp;tl.jsxs=bp;kp.exports=tl;var N=kp.exports,Ta={},Fp={exports:{}},He={},Up={exports:{}},jp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,M){var L=R.length;R.push(M);e:for(;0<L;){var ie=L-1>>>1,ue=R[ie];if(0<i(ue,M))R[ie]=M,R[L]=ue,L=ie;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var M=R[0],L=R.pop();if(L!==M){R[0]=L;e:for(var ie=0,ue=R.length,ws=ue>>>1;ie<ws;){var Cn=2*(ie+1)-1,bl=R[Cn],Sn=Cn+1,Es=R[Sn];if(0>i(bl,L))Sn<ue&&0>i(Es,bl)?(R[ie]=Es,R[Sn]=L,ie=Sn):(R[ie]=bl,R[Cn]=L,ie=Cn);else if(Sn<ue&&0>i(Es,L))R[ie]=Es,R[Sn]=L,ie=Sn;else break e}}return M}function i(R,M){var L=R.sortIndex-M.sortIndex;return L!==0?L:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,g=!1,_=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=R)r(u),M.sortIndex=M.expirationTime,e(a,M);else break;M=n(u)}}function y(R){if(v=!1,m(R),!_)if(n(a)!==null)_=!0,Ml(T);else{var M=n(u);M!==null&&Ll(y,M.startTime-R)}}function T(R,M){_=!1,v&&(v=!1,p(k),k=-1),g=!0;var L=h;try{for(m(M),d=n(a);d!==null&&(!(d.expirationTime>M)||R&&!ke());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,h=d.priorityLevel;var ue=ie(d.expirationTime<=M);M=t.unstable_now(),typeof ue=="function"?d.callback=ue:d===n(a)&&r(a),m(M)}else r(a);d=n(a)}if(d!==null)var ws=!0;else{var Cn=n(u);Cn!==null&&Ll(y,Cn.startTime-M),ws=!1}return ws}finally{d=null,h=L,g=!1}}var C=!1,S=null,k=-1,j=5,D=-1;function ke(){return!(t.unstable_now()-D<j)}function rr(){if(S!==null){var R=t.unstable_now();D=R;var M=!0;try{M=S(!0,R)}finally{M?En():(C=!1,S=null)}}else C=!1}var En;if(typeof f=="function")En=function(){f(rr)};else if(typeof MessageChannel<"u"){var qd=new MessageChannel,iy=qd.port2;qd.port1.onmessage=rr,En=function(){iy.postMessage(null)}}else En=function(){w(rr,0)};function Ml(R){S=R,C||(C=!0,En())}function Ll(R,M){k=w(function(){R(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Ml(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var L=h;h=M;try{return R()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=h;h=R;try{return M()}finally{h=L}},t.unstable_scheduleCallback=function(R,M,L){var ie=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ie+L:ie):L=ie,R){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=L+ue,R={id:c++,callback:M,priorityLevel:R,startTime:L,expirationTime:ue,sortIndex:-1},L>ie?(R.sortIndex=L,e(u,R),n(a)===null&&R===n(u)&&(v?(p(k),k=-1):v=!0,Ll(y,L-ie))):(R.sortIndex=ue,e(a,R),_||g||(_=!0,Ml(T))),R},t.unstable_shouldYield=ke,t.unstable_wrapCallback=function(R){var M=h;return function(){var L=h;h=M;try{return R.apply(this,arguments)}finally{h=L}}}})(jp);Up.exports=jp;var Ry=Up.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp=x,Ve=Ry;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wp=new Set,xi={};function Zn(t,e){Or(t,e),Or(t+"Capture",e)}function Or(t,e){for(xi[t]=e,t=0;t<e.length;t++)Wp.add(e[t])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ka=Object.prototype.hasOwnProperty,xy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yd={},Xd={};function Oy(t){return ka.call(Xd,t)?!0:ka.call(Yd,t)?!1:xy.test(t)?Xd[t]=!0:(Yd[t]=!0,!1)}function Ay(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Dy(t,e,n,r){if(e===null||typeof e>"u"||Ay(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Oe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new Oe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new Oe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new Oe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new Oe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new Oe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new Oe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new Oe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new Oe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new Oe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qu=/[\-:]([a-z])/g;function Yu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qu,Yu);ye[e]=new Oe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qu,Yu);ye[e]=new Oe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qu,Yu);ye[e]=new Oe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new Oe(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new Oe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xu(t,e,n,r){var i=ye.hasOwnProperty(e)?ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Dy(e,n,i,r)&&(n=null),r||i===null?Oy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zt=zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ss=Symbol.for("react.element"),or=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),Ju=Symbol.for("react.strict_mode"),Na=Symbol.for("react.profiler"),Bp=Symbol.for("react.provider"),Vp=Symbol.for("react.context"),Zu=Symbol.for("react.forward_ref"),Pa=Symbol.for("react.suspense"),Ra=Symbol.for("react.suspense_list"),ec=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),Hp=Symbol.for("react.offscreen"),Jd=Symbol.iterator;function ei(t){return t===null||typeof t!="object"?null:(t=Jd&&t[Jd]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,Ul;function hi(t){if(Ul===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ul=e&&e[1]||""}return`
`+Ul+t}var jl=!1;function zl(t,e){if(!t||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?hi(t):""}function My(t){switch(t.tag){case 5:return hi(t.type);case 16:return hi("Lazy");case 13:return hi("Suspense");case 19:return hi("SuspenseList");case 0:case 2:case 15:return t=zl(t.type,!1),t;case 11:return t=zl(t.type.render,!1),t;case 1:return t=zl(t.type,!0),t;default:return""}}function xa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case lr:return"Fragment";case or:return"Portal";case Na:return"Profiler";case Ju:return"StrictMode";case Pa:return"Suspense";case Ra:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vp:return(t.displayName||"Context")+".Consumer";case Bp:return(t._context.displayName||"Context")+".Provider";case Zu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ec:return e=t.displayName||null,e!==null?e:xa(t.type)||"Memo";case Ht:e=t._payload,t=t._init;try{return xa(t(e))}catch{}}return null}function Ly(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xa(e);case 8:return e===Ju?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $p(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function by(t){var e=$p(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Is(t){t._valueTracker||(t._valueTracker=by(t))}function qp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$p(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function so(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Oa(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gp(t,e){e=e.checked,e!=null&&Xu(t,"checked",e,!1)}function Aa(t,e){Gp(t,e);var n=fn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Da(t,e.type,n):e.hasOwnProperty("defaultValue")&&Da(t,e.type,fn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function eh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Da(t,e,n){(e!=="number"||so(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fi=Array.isArray;function yr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ma(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function th(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(fi(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fn(n)}}function Kp(t,e){var n=fn(e.value),r=fn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function nh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function La(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ts,Yp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ts=Ts||document.createElement("div"),Ts.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ts.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fy=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(t){Fy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),gi[e]=gi[t]})});function Xp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||gi.hasOwnProperty(t)&&gi[t]?(""+e).trim():e+"px"}function Jp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Uy=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ba(t,e){if(e){if(Uy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Fa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ua=null;function tc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ja=null,wr=null,Er=null;function rh(t){if(t=us(t)){if(typeof ja!="function")throw Error(E(280));var e=t.stateNode;e&&(e=ol(e),ja(t.stateNode,t.type,e))}}function Zp(t){wr?Er?Er.push(t):Er=[t]:wr=t}function em(){if(wr){var t=wr,e=Er;if(Er=wr=null,rh(t),e)for(t=0;t<e.length;t++)rh(e[t])}}function tm(t,e){return t(e)}function nm(){}var Wl=!1;function rm(t,e,n){if(Wl)return t(e,n);Wl=!0;try{return tm(t,e,n)}finally{Wl=!1,(wr!==null||Er!==null)&&(nm(),em())}}function Ai(t,e){var n=t.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var za=!1;if(Dt)try{var ti={};Object.defineProperty(ti,"passive",{get:function(){za=!0}}),window.addEventListener("test",ti,ti),window.removeEventListener("test",ti,ti)}catch{za=!1}function jy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var _i=!1,oo=null,lo=!1,Wa=null,zy={onError:function(t){_i=!0,oo=t}};function Wy(t,e,n,r,i,s,o,l,a){_i=!1,oo=null,jy.apply(zy,arguments)}function By(t,e,n,r,i,s,o,l,a){if(Wy.apply(this,arguments),_i){if(_i){var u=oo;_i=!1,oo=null}else throw Error(E(198));lo||(lo=!0,Wa=u)}}function er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function im(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ih(t){if(er(t)!==t)throw Error(E(188))}function Vy(t){var e=t.alternate;if(!e){if(e=er(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ih(i),t;if(s===r)return ih(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function sm(t){return t=Vy(t),t!==null?om(t):null}function om(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=om(t);if(e!==null)return e;t=t.sibling}return null}var lm=Ve.unstable_scheduleCallback,sh=Ve.unstable_cancelCallback,Hy=Ve.unstable_shouldYield,$y=Ve.unstable_requestPaint,se=Ve.unstable_now,qy=Ve.unstable_getCurrentPriorityLevel,nc=Ve.unstable_ImmediatePriority,am=Ve.unstable_UserBlockingPriority,ao=Ve.unstable_NormalPriority,Gy=Ve.unstable_LowPriority,um=Ve.unstable_IdlePriority,nl=null,gt=null;function Ky(t){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(nl,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Xy,Qy=Math.log,Yy=Math.LN2;function Xy(t){return t>>>=0,t===0?32:31-(Qy(t)/Yy|0)|0}var ks=64,Ns=4194304;function pi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=pi(l):(s&=o,s!==0&&(r=pi(s)))}else o=n&~i,o!==0?r=pi(o):s!==0&&(r=pi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ut(e),i=1<<n,r|=t[n],e&=~i;return r}function Jy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ut(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Jy(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ba(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cm(){var t=ks;return ks<<=1,!(ks&4194240)&&(ks=64),t}function Bl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ls(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ut(e),t[e]=n}function e0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function dm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hm,ic,fm,pm,mm,Va=!1,Ps=[],en=null,tn=null,nn=null,Di=new Map,Mi=new Map,Gt=[],t0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(t,e){switch(t){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":Di.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(e.pointerId)}}function ni(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=us(e),e!==null&&ic(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function n0(t,e,n,r,i){switch(e){case"focusin":return en=ni(en,t,e,n,r,i),!0;case"dragenter":return tn=ni(tn,t,e,n,r,i),!0;case"mouseover":return nn=ni(nn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Di.set(s,ni(Di.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Mi.set(s,ni(Mi.get(s)||null,t,e,n,r,i)),!0}return!1}function gm(t){var e=Pn(t.target);if(e!==null){var n=er(e);if(n!==null){if(e=n.tag,e===13){if(e=im(n),e!==null){t.blockedOn=e,mm(t.priority,function(){fm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $s(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ha(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ua=r,n.target.dispatchEvent(r),Ua=null}else return e=us(n),e!==null&&ic(e),t.blockedOn=n,!1;e.shift()}return!0}function lh(t,e,n){$s(t)&&n.delete(e)}function r0(){Va=!1,en!==null&&$s(en)&&(en=null),tn!==null&&$s(tn)&&(tn=null),nn!==null&&$s(nn)&&(nn=null),Di.forEach(lh),Mi.forEach(lh)}function ri(t,e){t.blockedOn===e&&(t.blockedOn=null,Va||(Va=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,r0)))}function Li(t){function e(i){return ri(i,t)}if(0<Ps.length){ri(Ps[0],t);for(var n=1;n<Ps.length;n++){var r=Ps[n];r.blockedOn===t&&(r.blockedOn=null)}}for(en!==null&&ri(en,t),tn!==null&&ri(tn,t),nn!==null&&ri(nn,t),Di.forEach(e),Mi.forEach(e),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)gm(n),n.blockedOn===null&&Gt.shift()}var Cr=zt.ReactCurrentBatchConfig,co=!0;function i0(t,e,n,r){var i=V,s=Cr.transition;Cr.transition=null;try{V=1,sc(t,e,n,r)}finally{V=i,Cr.transition=s}}function s0(t,e,n,r){var i=V,s=Cr.transition;Cr.transition=null;try{V=4,sc(t,e,n,r)}finally{V=i,Cr.transition=s}}function sc(t,e,n,r){if(co){var i=Ha(t,e,n,r);if(i===null)Jl(t,e,r,ho,n),oh(t,r);else if(n0(i,t,e,n,r))r.stopPropagation();else if(oh(t,r),e&4&&-1<t0.indexOf(t)){for(;i!==null;){var s=us(i);if(s!==null&&hm(s),s=Ha(t,e,n,r),s===null&&Jl(t,e,r,ho,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Jl(t,e,r,null,n)}}var ho=null;function Ha(t,e,n,r){if(ho=null,t=tc(r),t=Pn(t),t!==null)if(e=er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=im(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ho=t,null}function _m(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qy()){case nc:return 1;case am:return 4;case ao:case Gy:return 16;case um:return 536870912;default:return 16}default:return 16}}var Jt=null,oc=null,qs=null;function vm(){if(qs)return qs;var t,e=oc,n=e.length,r,i="value"in Jt?Jt.value:Jt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return qs=i.slice(t,1<r?1-r:void 0)}function Gs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rs(){return!0}function ah(){return!1}function $e(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rs:ah,this.isPropagationStopped=ah,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rs)},persist:function(){},isPersistent:Rs}),e}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=$e(qr),as=ee({},qr,{view:0,detail:0}),o0=$e(as),Vl,Hl,ii,rl=ee({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ii&&(ii&&t.type==="mousemove"?(Vl=t.screenX-ii.screenX,Hl=t.screenY-ii.screenY):Hl=Vl=0,ii=t),Vl)},movementY:function(t){return"movementY"in t?t.movementY:Hl}}),uh=$e(rl),l0=ee({},rl,{dataTransfer:0}),a0=$e(l0),u0=ee({},as,{relatedTarget:0}),$l=$e(u0),c0=ee({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),d0=$e(c0),h0=ee({},qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f0=$e(h0),p0=ee({},qr,{data:0}),ch=$e(p0),m0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_0[t])?!!e[t]:!1}function ac(){return v0}var y0=ee({},as,{key:function(t){if(t.key){var e=m0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?Gs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w0=$e(y0),E0=ee({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dh=$e(E0),C0=ee({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),S0=$e(C0),I0=ee({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),T0=$e(I0),k0=ee({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=$e(k0),P0=[9,13,27,32],uc=Dt&&"CompositionEvent"in window,vi=null;Dt&&"documentMode"in document&&(vi=document.documentMode);var R0=Dt&&"TextEvent"in window&&!vi,ym=Dt&&(!uc||vi&&8<vi&&11>=vi),hh=String.fromCharCode(32),fh=!1;function wm(t,e){switch(t){case"keyup":return P0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Em(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function x0(t,e){switch(t){case"compositionend":return Em(e);case"keypress":return e.which!==32?null:(fh=!0,hh);case"textInput":return t=e.data,t===hh&&fh?null:t;default:return null}}function O0(t,e){if(ar)return t==="compositionend"||!uc&&wm(t,e)?(t=vm(),qs=oc=Jt=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ym&&e.locale!=="ko"?null:e.data;default:return null}}var A0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!A0[t.type]:e==="textarea"}function Cm(t,e,n,r){Zp(r),e=fo(e,"onChange"),0<e.length&&(n=new lc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var yi=null,bi=null;function D0(t){Dm(t,0)}function il(t){var e=dr(t);if(qp(e))return t}function M0(t,e){if(t==="change")return e}var Sm=!1;if(Dt){var ql;if(Dt){var Gl="oninput"in document;if(!Gl){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),Gl=typeof mh.oninput=="function"}ql=Gl}else ql=!1;Sm=ql&&(!document.documentMode||9<document.documentMode)}function gh(){yi&&(yi.detachEvent("onpropertychange",Im),bi=yi=null)}function Im(t){if(t.propertyName==="value"&&il(bi)){var e=[];Cm(e,bi,t,tc(t)),rm(D0,e)}}function L0(t,e,n){t==="focusin"?(gh(),yi=e,bi=n,yi.attachEvent("onpropertychange",Im)):t==="focusout"&&gh()}function b0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(bi)}function F0(t,e){if(t==="click")return il(e)}function U0(t,e){if(t==="input"||t==="change")return il(e)}function j0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ht=typeof Object.is=="function"?Object.is:j0;function Fi(t,e){if(ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ka.call(e,i)||!ht(t[i],e[i]))return!1}return!0}function _h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vh(t,e){var n=_h(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_h(n)}}function Tm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function km(){for(var t=window,e=so();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=so(t.document)}return e}function cc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function z0(t){var e=km(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tm(n.ownerDocument.documentElement,n)){if(r!==null&&cc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=vh(n,s);var o=vh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var W0=Dt&&"documentMode"in document&&11>=document.documentMode,ur=null,$a=null,wi=null,qa=!1;function yh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qa||ur==null||ur!==so(r)||(r=ur,"selectionStart"in r&&cc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wi&&Fi(wi,r)||(wi=r,r=fo($a,"onSelect"),0<r.length&&(e=new lc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ur)))}function xs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cr={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionend:xs("Transition","TransitionEnd")},Kl={},Nm={};Dt&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function sl(t){if(Kl[t])return Kl[t];if(!cr[t])return t;var e=cr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nm)return Kl[t]=e[n];return t}var Pm=sl("animationend"),Rm=sl("animationiteration"),xm=sl("animationstart"),Om=sl("transitionend"),Am=new Map,wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(t,e){Am.set(t,e),Zn(e,[t])}for(var Ql=0;Ql<wh.length;Ql++){var Yl=wh[Ql],B0=Yl.toLowerCase(),V0=Yl[0].toUpperCase()+Yl.slice(1);_n(B0,"on"+V0)}_n(Pm,"onAnimationEnd");_n(Rm,"onAnimationIteration");_n(xm,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(Om,"onTransitionEnd");Or("onMouseEnter",["mouseout","mouseover"]);Or("onMouseLeave",["mouseout","mouseover"]);Or("onPointerEnter",["pointerout","pointerover"]);Or("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H0=new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));function Eh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,By(r,e,void 0,t),t.currentTarget=null}function Dm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Eh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Eh(i,l,u),s=a}}}if(lo)throw t=Wa,lo=!1,Wa=null,t}function Q(t,e){var n=e[Xa];n===void 0&&(n=e[Xa]=new Set);var r=t+"__bubble";n.has(r)||(Mm(e,t,2,!1),n.add(r))}function Xl(t,e,n){var r=0;e&&(r|=4),Mm(n,t,r,e)}var Os="_reactListening"+Math.random().toString(36).slice(2);function Ui(t){if(!t[Os]){t[Os]=!0,Wp.forEach(function(n){n!=="selectionchange"&&(H0.has(n)||Xl(n,!1,t),Xl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Os]||(e[Os]=!0,Xl("selectionchange",!1,e))}}function Mm(t,e,n,r){switch(_m(e)){case 1:var i=i0;break;case 4:i=s0;break;default:i=sc}n=i.bind(null,e,n,t),i=void 0,!za||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Pn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}rm(function(){var u=s,c=tc(n),d=[];e:{var h=Am.get(t);if(h!==void 0){var g=lc,_=t;switch(t){case"keypress":if(Gs(n)===0)break e;case"keydown":case"keyup":g=w0;break;case"focusin":_="focus",g=$l;break;case"focusout":_="blur",g=$l;break;case"beforeblur":case"afterblur":g=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=a0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=S0;break;case Pm:case Rm:case xm:g=d0;break;case Om:g=T0;break;case"scroll":g=o0;break;case"wheel":g=N0;break;case"copy":case"cut":case"paste":g=f0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=dh}var v=(e&4)!==0,w=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Ai(f,p),y!=null&&v.push(ji(f,y,m)))),w)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Ua&&(_=n.relatedTarget||n.fromElement)&&(Pn(_)||_[Mt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Pn(_):null,_!==null&&(w=er(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=uh,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=dh,y="onPointerLeave",p="onPointerEnter",f="pointer"),w=g==null?h:dr(g),m=_==null?h:dr(_),h=new v(y,f+"leave",g,n,c),h.target=w,h.relatedTarget=m,y=null,Pn(c)===u&&(v=new v(p,f+"enter",_,n,c),v.target=m,v.relatedTarget=w,y=v),w=y,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=ir(m))f++;for(m=0,y=p;y;y=ir(y))m++;for(;0<f-m;)v=ir(v),f--;for(;0<m-f;)p=ir(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=ir(v),p=ir(p)}v=null}else v=null;g!==null&&Ch(d,h,g,v,!1),_!==null&&w!==null&&Ch(d,w,_,v,!0)}}e:{if(h=u?dr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=M0;else if(ph(h))if(Sm)T=U0;else{T=b0;var C=L0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=F0);if(T&&(T=T(t,u))){Cm(d,T,n,c);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Da(h,"number",h.value)}switch(C=u?dr(u):window,t){case"focusin":(ph(C)||C.contentEditable==="true")&&(ur=C,$a=u,wi=null);break;case"focusout":wi=$a=ur=null;break;case"mousedown":qa=!0;break;case"contextmenu":case"mouseup":case"dragend":qa=!1,yh(d,n,c);break;case"selectionchange":if(W0)break;case"keydown":case"keyup":yh(d,n,c)}var S;if(uc)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else ar?wm(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(ym&&n.locale!=="ko"&&(ar||k!=="onCompositionStart"?k==="onCompositionEnd"&&ar&&(S=vm()):(Jt=c,oc="value"in Jt?Jt.value:Jt.textContent,ar=!0)),C=fo(u,k),0<C.length&&(k=new ch(k,t,null,n,c),d.push({event:k,listeners:C}),S?k.data=S:(S=Em(n),S!==null&&(k.data=S)))),(S=R0?x0(t,n):O0(t,n))&&(u=fo(u,"onBeforeInput"),0<u.length&&(c=new ch("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}Dm(d,e)})}function ji(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ai(t,n),s!=null&&r.unshift(ji(t,s,i)),s=Ai(t,e),s!=null&&r.push(ji(t,s,i))),t=t.return}return r}function ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ch(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ai(n,s),a!=null&&o.unshift(ji(n,a,l))):i||(a=Ai(n,s),a!=null&&o.push(ji(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $0=/\r\n?/g,q0=/\u0000|\uFFFD/g;function Sh(t){return(typeof t=="string"?t:""+t).replace($0,`
`).replace(q0,"")}function As(t,e,n){if(e=Sh(e),Sh(t)!==e&&n)throw Error(E(425))}function po(){}var Ga=null,Ka=null;function Qa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ya=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,K0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(t){return Ih.resolve(null).then(t).catch(Q0)}:Ya;function Q0(t){setTimeout(function(){throw t})}function Zl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Li(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Li(e)}function rn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Th(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),mt="__reactFiber$"+Gr,zi="__reactProps$"+Gr,Mt="__reactContainer$"+Gr,Xa="__reactEvents$"+Gr,Y0="__reactListeners$"+Gr,X0="__reactHandles$"+Gr;function Pn(t){var e=t[mt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mt]||n[mt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Th(t);t!==null;){if(n=t[mt])return n;t=Th(t)}return e}t=n,n=t.parentNode}return null}function us(t){return t=t[mt]||t[Mt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function dr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function ol(t){return t[zi]||null}var Ja=[],hr=-1;function vn(t){return{current:t}}function Y(t){0>hr||(t.current=Ja[hr],Ja[hr]=null,hr--)}function K(t,e){hr++,Ja[hr]=t.current,t.current=e}var pn={},Ie=vn(pn),be=vn(!1),Wn=pn;function Ar(t,e){var n=t.type.contextTypes;if(!n)return pn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(t){return t=t.childContextTypes,t!=null}function mo(){Y(be),Y(Ie)}function kh(t,e,n){if(Ie.current!==pn)throw Error(E(168));K(Ie,e),K(be,n)}function Lm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,Ly(t)||"Unknown",i));return ee({},n,r)}function go(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pn,Wn=Ie.current,K(Ie,t),K(be,be.current),!0}function Nh(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Lm(t,e,Wn),r.__reactInternalMemoizedMergedChildContext=t,Y(be),Y(Ie),K(Ie,t)):Y(be),K(be,n)}var It=null,ll=!1,ea=!1;function bm(t){It===null?It=[t]:It.push(t)}function J0(t){ll=!0,bm(t)}function yn(){if(!ea&&It!==null){ea=!0;var t=0,e=V;try{var n=It;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}It=null,ll=!1}catch(i){throw It!==null&&(It=It.slice(t+1)),lm(nc,yn),i}finally{V=e,ea=!1}}return null}var fr=[],pr=0,_o=null,vo=0,qe=[],Ge=0,Bn=null,kt=1,Nt="";function In(t,e){fr[pr++]=vo,fr[pr++]=_o,_o=t,vo=e}function Fm(t,e,n){qe[Ge++]=kt,qe[Ge++]=Nt,qe[Ge++]=Bn,Bn=t;var r=kt;t=Nt;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var s=32-ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kt=1<<32-ut(e)+i|n<<i|r,Nt=s+t}else kt=1<<s|n<<i|r,Nt=t}function dc(t){t.return!==null&&(In(t,1),Fm(t,1,0))}function hc(t){for(;t===_o;)_o=fr[--pr],fr[pr]=null,vo=fr[--pr],fr[pr]=null;for(;t===Bn;)Bn=qe[--Ge],qe[Ge]=null,Nt=qe[--Ge],qe[Ge]=null,kt=qe[--Ge],qe[Ge]=null}var Be=null,We=null,X=!1,st=null;function Um(t,e){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ph(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,We=rn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Bn!==null?{id:kt,overflow:Nt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,We=null,!0):!1;default:return!1}}function Za(t){return(t.mode&1)!==0&&(t.flags&128)===0}function eu(t){if(X){var e=We;if(e){var n=e;if(!Ph(t,e)){if(Za(t))throw Error(E(418));e=rn(n.nextSibling);var r=Be;e&&Ph(t,e)?Um(r,n):(t.flags=t.flags&-4097|2,X=!1,Be=t)}}else{if(Za(t))throw Error(E(418));t.flags=t.flags&-4097|2,X=!1,Be=t}}}function Rh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function Ds(t){if(t!==Be)return!1;if(!X)return Rh(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qa(t.type,t.memoizedProps)),e&&(e=We)){if(Za(t))throw jm(),Error(E(418));for(;e;)Um(t,e),e=rn(e.nextSibling)}if(Rh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=rn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=Be?rn(t.stateNode.nextSibling):null;return!0}function jm(){for(var t=We;t;)t=rn(t.nextSibling)}function Dr(){We=Be=null,X=!1}function fc(t){st===null?st=[t]:st.push(t)}var Z0=zt.ReactCurrentBatchConfig;function nt(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var yo=vn(null),wo=null,mr=null,pc=null;function mc(){pc=mr=wo=null}function gc(t){var e=yo.current;Y(yo),t._currentValue=e}function tu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Sr(t,e){wo=t,pc=mr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(De=!0),t.firstContext=null)}function Xe(t){var e=t._currentValue;if(pc!==t)if(t={context:t,memoizedValue:e,next:null},mr===null){if(wo===null)throw Error(E(308));mr=t,wo.dependencies={lanes:0,firstContext:t}}else mr=mr.next=t;return e}var Rn=null;function _c(t){Rn===null?Rn=[t]:Rn.push(t)}function zm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_c(e)):(n.next=i.next,i.next=n),e.interleaved=n,Lt(t,r)}function Lt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $t=!1;function vc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ot(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Lt(t,n)}return i=r.interleaved,i===null?(e.next=e,_c(r)):(e.next=i.next,i.next=e),r.interleaved=e,Lt(t,n)}function Ks(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rc(t,n)}}function xh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Eo(t,e,n,r){var i=t.updateQueue;$t=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(g,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,d,h):_,h==null)break e;d=ee({},d,h);break e;case 2:$t=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,a=d):c=c.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hn|=o,t.lanes=o,t.memoizedState=d}}function Oh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Bm=new zp.Component().refs;function nu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var al={isMounted:function(t){return(t=t._reactInternals)?er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Re(),i=ln(t),s=Ot(r,i);s.payload=e,n!=null&&(s.callback=n),e=sn(t,s,i),e!==null&&(ct(e,t,i,r),Ks(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Re(),i=ln(t),s=Ot(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sn(t,s,i),e!==null&&(ct(e,t,i,r),Ks(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Re(),r=ln(t),i=Ot(n,r);i.tag=2,e!=null&&(i.callback=e),e=sn(t,i,r),e!==null&&(ct(e,t,r,n),Ks(e,t,r))}};function Ah(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fi(n,r)||!Fi(i,s):!0}function Vm(t,e,n){var r=!1,i=pn,s=e.contextType;return typeof s=="object"&&s!==null?s=Xe(s):(i=Fe(e)?Wn:Ie.current,r=e.contextTypes,s=(r=r!=null)?Ar(t,i):pn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=al,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&al.enqueueReplaceState(e,e.state,null)}function ru(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Bm,vc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xe(s):(s=Fe(e)?Wn:Ie.current,i.context=Ar(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&al.enqueueReplaceState(i,i.state,null),Eo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function si(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Bm&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Ms(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mh(t){var e=t._init;return e(t._payload)}function Hm(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=an(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,y){return f===null||f.tag!==6?(f=la(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,y){var T=m.type;return T===lr?c(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ht&&Mh(T)===f.type)?(y=i(f,m.props),y.ref=si(p,f,m),y.return=p,y):(y=eo(m.type,m.key,m.props,null,p.mode,y),y.ref=si(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=aa(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,y,T){return f===null||f.tag!==7?(f=Un(m,p.mode,y,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=la(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ss:return m=eo(f.type,f.key,f.props,null,p.mode,m),m.ref=si(p,null,f),m.return=p,m;case or:return f=aa(f,p.mode,m),f.return=p,f;case Ht:var y=f._init;return d(p,y(f._payload),m)}if(fi(f)||ei(f))return f=Un(f,p.mode,m,null),f.return=p,f;Ms(p,f)}return null}function h(p,f,m,y){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:l(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ss:return m.key===T?a(p,f,m,y):null;case or:return m.key===T?u(p,f,m,y):null;case Ht:return T=m._init,h(p,f,T(m._payload),y)}if(fi(m)||ei(m))return T!==null?null:c(p,f,m,y,null);Ms(p,m)}return null}function g(p,f,m,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(f,p,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ss:return p=p.get(y.key===null?m:y.key)||null,a(f,p,y,T);case or:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,T);case Ht:var C=y._init;return g(p,f,m,C(y._payload),T)}if(fi(y)||ei(y))return p=p.get(m)||null,c(f,p,y,T,null);Ms(f,y)}return null}function _(p,f,m,y){for(var T=null,C=null,S=f,k=f=0,j=null;S!==null&&k<m.length;k++){S.index>k?(j=S,S=null):j=S.sibling;var D=h(p,S,m[k],y);if(D===null){S===null&&(S=j);break}t&&S&&D.alternate===null&&e(p,S),f=s(D,f,k),C===null?T=D:C.sibling=D,C=D,S=j}if(k===m.length)return n(p,S),X&&In(p,k),T;if(S===null){for(;k<m.length;k++)S=d(p,m[k],y),S!==null&&(f=s(S,f,k),C===null?T=S:C.sibling=S,C=S);return X&&In(p,k),T}for(S=r(p,S);k<m.length;k++)j=g(S,p,k,m[k],y),j!==null&&(t&&j.alternate!==null&&S.delete(j.key===null?k:j.key),f=s(j,f,k),C===null?T=j:C.sibling=j,C=j);return t&&S.forEach(function(ke){return e(p,ke)}),X&&In(p,k),T}function v(p,f,m,y){var T=ei(m);if(typeof T!="function")throw Error(E(150));if(m=T.call(m),m==null)throw Error(E(151));for(var C=T=null,S=f,k=f=0,j=null,D=m.next();S!==null&&!D.done;k++,D=m.next()){S.index>k?(j=S,S=null):j=S.sibling;var ke=h(p,S,D.value,y);if(ke===null){S===null&&(S=j);break}t&&S&&ke.alternate===null&&e(p,S),f=s(ke,f,k),C===null?T=ke:C.sibling=ke,C=ke,S=j}if(D.done)return n(p,S),X&&In(p,k),T;if(S===null){for(;!D.done;k++,D=m.next())D=d(p,D.value,y),D!==null&&(f=s(D,f,k),C===null?T=D:C.sibling=D,C=D);return X&&In(p,k),T}for(S=r(p,S);!D.done;k++,D=m.next())D=g(S,p,k,D.value,y),D!==null&&(t&&D.alternate!==null&&S.delete(D.key===null?k:D.key),f=s(D,f,k),C===null?T=D:C.sibling=D,C=D);return t&&S.forEach(function(rr){return e(p,rr)}),X&&In(p,k),T}function w(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===lr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ss:e:{for(var T=m.key,C=f;C!==null;){if(C.key===T){if(T=m.type,T===lr){if(C.tag===7){n(p,C.sibling),f=i(C,m.props.children),f.return=p,p=f;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ht&&Mh(T)===C.type){n(p,C.sibling),f=i(C,m.props),f.ref=si(p,C,m),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}m.type===lr?(f=Un(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=eo(m.type,m.key,m.props,null,p.mode,y),y.ref=si(p,f,m),y.return=p,p=y)}return o(p);case or:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=aa(m,p.mode,y),f.return=p,p=f}return o(p);case Ht:return C=m._init,w(p,f,C(m._payload),y)}if(fi(m))return _(p,f,m,y);if(ei(m))return v(p,f,m,y);Ms(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=la(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return w}var Mr=Hm(!0),$m=Hm(!1),cs={},_t=vn(cs),Wi=vn(cs),Bi=vn(cs);function xn(t){if(t===cs)throw Error(E(174));return t}function yc(t,e){switch(K(Bi,e),K(Wi,t),K(_t,cs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:La(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=La(e,t)}Y(_t),K(_t,e)}function Lr(){Y(_t),Y(Wi),Y(Bi)}function qm(t){xn(Bi.current);var e=xn(_t.current),n=La(e,t.type);e!==n&&(K(Wi,t),K(_t,n))}function wc(t){Wi.current===t&&(Y(_t),Y(Wi))}var J=vn(0);function Co(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ta=[];function Ec(){for(var t=0;t<ta.length;t++)ta[t]._workInProgressVersionPrimary=null;ta.length=0}var Qs=zt.ReactCurrentDispatcher,na=zt.ReactCurrentBatchConfig,Vn=0,Z=null,le=null,de=null,So=!1,Ei=!1,Vi=0,ew=0;function Ee(){throw Error(E(321))}function Cc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ht(t[n],e[n]))return!1;return!0}function Sc(t,e,n,r,i,s){if(Vn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qs.current=t===null||t.memoizedState===null?iw:sw,t=n(r,i),Ei){s=0;do{if(Ei=!1,Vi=0,25<=s)throw Error(E(301));s+=1,de=le=null,e.updateQueue=null,Qs.current=ow,t=n(r,i)}while(Ei)}if(Qs.current=Io,e=le!==null&&le.next!==null,Vn=0,de=le=Z=null,So=!1,e)throw Error(E(300));return t}function Ic(){var t=Vi!==0;return Vi=0,t}function pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?Z.memoizedState=de=t:de=de.next=t,de}function Je(){if(le===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=le.next;var e=de===null?Z.memoizedState:de.next;if(e!==null)de=e,le=t;else{if(t===null)throw Error(E(310));le=t,t={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},de===null?Z.memoizedState=de=t:de=de.next=t}return de}function Hi(t,e){return typeof e=="function"?e(t):e}function ra(t){var e=Je(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Vn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,Z.lanes|=c,Hn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ht(r,e.memoizedState)||(De=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Hn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ia(t){var e=Je(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ht(s,e.memoizedState)||(De=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Gm(){}function Km(t,e){var n=Z,r=Je(),i=e(),s=!ht(r.memoizedState,i);if(s&&(r.memoizedState=i,De=!0),r=r.queue,Tc(Xm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,$i(9,Ym.bind(null,n,r,i,e),void 0,null),pe===null)throw Error(E(349));Vn&30||Qm(n,e,i)}return i}function Qm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ym(t,e,n,r){e.value=n,e.getSnapshot=r,Jm(e)&&Zm(t)}function Xm(t,e,n){return n(function(){Jm(e)&&Zm(t)})}function Jm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ht(t,n)}catch{return!0}}function Zm(t){var e=Lt(t,1);e!==null&&ct(e,t,1,-1)}function Lh(t){var e=pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:t},e.queue=t,t=t.dispatch=rw.bind(null,Z,t),[e.memoizedState,t]}function $i(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function eg(){return Je().memoizedState}function Ys(t,e,n,r){var i=pt();Z.flags|=t,i.memoizedState=$i(1|e,n,void 0,r===void 0?null:r)}function ul(t,e,n,r){var i=Je();r=r===void 0?null:r;var s=void 0;if(le!==null){var o=le.memoizedState;if(s=o.destroy,r!==null&&Cc(r,o.deps)){i.memoizedState=$i(e,n,s,r);return}}Z.flags|=t,i.memoizedState=$i(1|e,n,s,r)}function bh(t,e){return Ys(8390656,8,t,e)}function Tc(t,e){return ul(2048,8,t,e)}function tg(t,e){return ul(4,2,t,e)}function ng(t,e){return ul(4,4,t,e)}function rg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ig(t,e,n){return n=n!=null?n.concat([t]):null,ul(4,4,rg.bind(null,e,t),n)}function kc(){}function sg(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function og(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lg(t,e,n){return Vn&21?(ht(n,e)||(n=cm(),Z.lanes|=n,Hn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,De=!0),t.memoizedState=n)}function tw(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=na.transition;na.transition={};try{t(!1),e()}finally{V=n,na.transition=r}}function ag(){return Je().memoizedState}function nw(t,e,n){var r=ln(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ug(t))cg(e,n);else if(n=zm(t,e,n,r),n!==null){var i=Re();ct(n,t,r,i),dg(n,e,r)}}function rw(t,e,n){var r=ln(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ug(t))cg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ht(l,o)){var a=e.interleaved;a===null?(i.next=i,_c(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=zm(t,e,i,r),n!==null&&(i=Re(),ct(n,t,r,i),dg(n,e,r))}}function ug(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function cg(t,e){Ei=So=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rc(t,n)}}var Io={readContext:Xe,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},iw={readContext:Xe,useCallback:function(t,e){return pt().memoizedState=[t,e===void 0?null:e],t},useContext:Xe,useEffect:bh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ys(4194308,4,rg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ys(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ys(4,2,t,e)},useMemo:function(t,e){var n=pt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nw.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=pt();return t={current:t},e.memoizedState=t},useState:Lh,useDebugValue:kc,useDeferredValue:function(t){return pt().memoizedState=t},useTransition:function(){var t=Lh(!1),e=t[0];return t=tw.bind(null,t[1]),pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=pt();if(X){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),pe===null)throw Error(E(349));Vn&30||Qm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,bh(Xm.bind(null,r,s,t),[t]),r.flags|=2048,$i(9,Ym.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pt(),e=pe.identifierPrefix;if(X){var n=Nt,r=kt;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ew++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sw={readContext:Xe,useCallback:sg,useContext:Xe,useEffect:Tc,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:ra,useRef:eg,useState:function(){return ra(Hi)},useDebugValue:kc,useDeferredValue:function(t){var e=Je();return lg(e,le.memoizedState,t)},useTransition:function(){var t=ra(Hi)[0],e=Je().memoizedState;return[t,e]},useMutableSource:Gm,useSyncExternalStore:Km,useId:ag,unstable_isNewReconciler:!1},ow={readContext:Xe,useCallback:sg,useContext:Xe,useEffect:Tc,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:ia,useRef:eg,useState:function(){return ia(Hi)},useDebugValue:kc,useDeferredValue:function(t){var e=Je();return le===null?e.memoizedState=t:lg(e,le.memoizedState,t)},useTransition:function(){var t=ia(Hi)[0],e=Je().memoizedState;return[t,e]},useMutableSource:Gm,useSyncExternalStore:Km,useId:ag,unstable_isNewReconciler:!1};function br(t,e){try{var n="",r=e;do n+=My(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function sa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function iu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lw=typeof WeakMap=="function"?WeakMap:Map;function hg(t,e,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ko||(ko=!0,pu=r),iu(t,e)},n}function fg(t,e,n){n=Ot(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){iu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){iu(t,e),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new lw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ew.bind(null,t,e,n),e.then(t,t))}function Uh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ot(-1,1),e.tag=2,sn(n,e,1))),n.lanes|=1),t)}var aw=zt.ReactCurrentOwner,De=!1;function Ne(t,e,n,r){e.child=t===null?$m(e,null,n,r):Mr(e,t.child,n,r)}function zh(t,e,n,r,i){n=n.render;var s=e.ref;return Sr(e,i),r=Sc(t,e,n,r,s,i),n=Ic(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(X&&n&&dc(e),e.flags|=1,Ne(t,e,r,i),e.child)}function Wh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pg(t,e,s,r,i)):(t=eo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fi,n(o,r)&&t.ref===e.ref)return bt(t,e,i)}return e.flags|=1,t=an(s,r),t.ref=e.ref,t.return=e,e.child=t}function pg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fi(s,r)&&t.ref===e.ref)if(De=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(De=!0);else return e.lanes=t.lanes,bt(t,e,i)}return su(t,e,n,r,i)}function mg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(_r,ze),ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(_r,ze),ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(_r,ze),ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(_r,ze),ze|=r;return Ne(t,e,i,n),e.child}function gg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function su(t,e,n,r,i){var s=Fe(n)?Wn:Ie.current;return s=Ar(e,s),Sr(e,i),n=Sc(t,e,n,r,s,i),r=Ic(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(X&&r&&dc(e),e.flags|=1,Ne(t,e,n,i),e.child)}function Bh(t,e,n,r,i){if(Fe(n)){var s=!0;go(e)}else s=!1;if(Sr(e,i),e.stateNode===null)Xs(t,e),Vm(e,n,r),ru(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=Fe(n)?Wn:Ie.current,u=Ar(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Dh(e,o,r,u),$t=!1;var h=e.memoizedState;o.state=h,Eo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||be.current||$t?(typeof c=="function"&&(nu(e,n,c,r),a=e.memoizedState),(l=$t||Ah(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Wm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:nt(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Xe(a):(a=Fe(n)?Wn:Ie.current,a=Ar(e,a));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Dh(e,o,r,a),$t=!1,h=e.memoizedState,o.state=h,Eo(e,r,o,i);var _=e.memoizedState;l!==d||h!==_||be.current||$t?(typeof g=="function"&&(nu(e,n,g,r),_=e.memoizedState),(u=$t||Ah(e,n,u,r,h,_,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return ou(t,e,n,r,s,i)}function ou(t,e,n,r,i,s){gg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Nh(e,n,!1),bt(t,e,s);r=e.stateNode,aw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Mr(e,t.child,null,s),e.child=Mr(e,null,l,s)):Ne(t,e,l,s),e.memoizedState=r.state,i&&Nh(e,n,!0),e.child}function _g(t){var e=t.stateNode;e.pendingContext?kh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kh(t,e.context,!1),yc(t,e.containerInfo)}function Vh(t,e,n,r,i){return Dr(),fc(i),e.flags|=256,Ne(t,e,n,r),e.child}var lu={dehydrated:null,treeContext:null,retryLane:0};function au(t){return{baseLanes:t,cachePool:null,transitions:null}}function vg(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(J,i&1),t===null)return eu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hl(o,r,0,null),t=Un(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=au(n),e.memoizedState=lu,t):Nc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return uw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=an(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=an(l,s):(s=Un(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?au(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=lu,r}return s=t.child,t=s.sibling,r=an(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nc(t,e){return e=hl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ls(t,e,n,r){return r!==null&&fc(r),Mr(e,t.child,null,n),t=Nc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=sa(Error(E(422))),Ls(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=hl({mode:"visible",children:r.children},i,0,null),s=Un(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Mr(e,t.child,null,o),e.child.memoizedState=au(o),e.memoizedState=lu,s);if(!(e.mode&1))return Ls(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=sa(s,r,void 0),Ls(t,e,o,r)}if(l=(o&t.childLanes)!==0,De||l){if(r=pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Lt(t,i),ct(r,t,i,-1))}return Dc(),r=sa(Error(E(421))),Ls(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Cw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,We=rn(i.nextSibling),Be=e,X=!0,st=null,t!==null&&(qe[Ge++]=kt,qe[Ge++]=Nt,qe[Ge++]=Bn,kt=t.id,Nt=t.overflow,Bn=e),e=Nc(e,r.children),e.flags|=4096,e)}function Hh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),tu(t.return,e,n)}function oa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function yg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ne(t,e,r.children,n),r=J.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hh(t,n,e);else if(t.tag===19)Hh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(J,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Co(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),oa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Co(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}oa(e,!0,n,null,s);break;case"together":oa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=an(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=an(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cw(t,e,n){switch(e.tag){case 3:_g(e),Dr();break;case 5:qm(e);break;case 1:Fe(e.type)&&go(e);break;case 4:yc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(yo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(J,J.current&1),e.flags|=128,null):n&e.child.childLanes?vg(t,e,n):(K(J,J.current&1),t=bt(t,e,n),t!==null?t.sibling:null);K(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return yg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,mg(t,e,n)}return bt(t,e,n)}var wg,uu,Eg,Cg;wg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uu=function(){};Eg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xn(_t.current);var s=null;switch(n){case"input":i=Oa(t,i),r=Oa(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=Ma(t,i),r=Ma(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=po)}ba(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Cg=function(t,e,n,r){n!==r&&(e.flags|=4)};function oi(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ce(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dw(t,e,n){var r=e.pendingProps;switch(hc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(e),null;case 1:return Fe(e.type)&&mo(),Ce(e),null;case 3:return r=e.stateNode,Lr(),Y(be),Y(Ie),Ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ds(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,st!==null&&(_u(st),st=null))),uu(t,e),Ce(e),null;case 5:wc(e);var i=xn(Bi.current);if(n=e.type,t!==null&&e.stateNode!=null)Eg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Ce(e),null}if(t=xn(_t.current),Ds(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mt]=e,r[zi]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<mi.length;i++)Q(mi[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Zd(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":th(r,s),Q("invalid",r)}ba(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&As(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&As(r.textContent,l,t),i=["children",""+l]):xi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Is(r),eh(r,s,!0);break;case"textarea":Is(r),nh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=po)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mt]=e,t[zi]=r,wg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fa(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<mi.length;i++)Q(mi[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":Zd(t,r),i=Oa(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),Q("invalid",t);break;case"textarea":th(t,r),i=Ma(t,r),Q("invalid",t);break;default:i=r}ba(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Jp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Yp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Oi(t,a):typeof a=="number"&&Oi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&Xu(t,s,a,o))}switch(n){case"input":Is(t),eh(t,r,!1);break;case"textarea":Is(t),nh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?yr(t,!!r.multiple,s,!1):r.defaultValue!=null&&yr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=po)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ce(e),null;case 6:if(t&&e.stateNode!=null)Cg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=xn(Bi.current),xn(_t.current),Ds(e)){if(r=e.stateNode,n=e.memoizedProps,r[mt]=e,(s=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:As(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&As(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=e,e.stateNode=r}return Ce(e),null;case 13:if(Y(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&We!==null&&e.mode&1&&!(e.flags&128))jm(),Dr(),e.flags|=98560,s=!1;else if(s=Ds(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[mt]=e}else Dr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ce(e),s=!1}else st!==null&&(_u(st),st=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||J.current&1?ae===0&&(ae=3):Dc())),e.updateQueue!==null&&(e.flags|=4),Ce(e),null);case 4:return Lr(),uu(t,e),t===null&&Ui(e.stateNode.containerInfo),Ce(e),null;case 10:return gc(e.type._context),Ce(e),null;case 17:return Fe(e.type)&&mo(),Ce(e),null;case 19:if(Y(J),s=e.memoizedState,s===null)return Ce(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)oi(s,!1);else{if(ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Co(t),o!==null){for(e.flags|=128,oi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&se()>Fr&&(e.flags|=128,r=!0,oi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Co(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return Ce(e),null}else 2*se()-s.renderingStartTime>Fr&&n!==1073741824&&(e.flags|=128,r=!0,oi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=se(),e.sibling=null,n=J.current,K(J,r?n&1|2:n&1),e):(Ce(e),null);case 22:case 23:return Ac(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ze&1073741824&&(Ce(e),e.subtreeFlags&6&&(e.flags|=8192)):Ce(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function hw(t,e){switch(hc(e),e.tag){case 1:return Fe(e.type)&&mo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Lr(),Y(be),Y(Ie),Ec(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wc(e),null;case 13:if(Y(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Dr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(J),null;case 4:return Lr(),null;case 10:return gc(e.type._context),null;case 22:case 23:return Ac(),null;case 24:return null;default:return null}}var bs=!1,Se=!1,fw=typeof WeakSet=="function"?WeakSet:Set,P=null;function gr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function cu(t,e,n){try{n()}catch(r){te(t,e,r)}}var $h=!1;function pw(t,e){if(Ga=co,t=km(),cc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ka={focusedElem:t,selectionRange:n},co=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,w=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:nt(e.type,v),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){te(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return _=$h,$h=!1,_}function Ci(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&cu(e,n,s)}i=i.next}while(i!==r)}}function cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function du(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Sg(t){var e=t.alternate;e!==null&&(t.alternate=null,Sg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mt],delete e[zi],delete e[Xa],delete e[Y0],delete e[X0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ig(t){return t.tag===5||t.tag===3||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ig(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=po));else if(r!==4&&(t=t.child,t!==null))for(hu(t,e,n),t=t.sibling;t!==null;)hu(t,e,n),t=t.sibling}function fu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fu(t,e,n),t=t.sibling;t!==null;)fu(t,e,n),t=t.sibling}var me=null,it=!1;function Bt(t,e,n){for(n=n.child;n!==null;)Tg(t,e,n),n=n.sibling}function Tg(t,e,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:Se||gr(n,e);case 6:var r=me,i=it;me=null,Bt(t,e,n),me=r,it=i,me!==null&&(it?(t=me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(it?(t=me,n=n.stateNode,t.nodeType===8?Zl(t.parentNode,n):t.nodeType===1&&Zl(t,n),Li(t)):Zl(me,n.stateNode));break;case 4:r=me,i=it,me=n.stateNode.containerInfo,it=!0,Bt(t,e,n),me=r,it=i;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cu(n,e,o),i=i.next}while(i!==r)}Bt(t,e,n);break;case 1:if(!Se&&(gr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}Bt(t,e,n);break;case 21:Bt(t,e,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Bt(t,e,n),Se=r):Bt(t,e,n);break;default:Bt(t,e,n)}}function Gh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fw),e.forEach(function(r){var i=Sw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,it=!1;break e;case 3:me=l.stateNode.containerInfo,it=!0;break e;case 4:me=l.stateNode.containerInfo,it=!0;break e}l=l.return}if(me===null)throw Error(E(160));Tg(s,o,i),me=null,it=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kg(e,t),e=e.sibling}function kg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(et(e,t),ft(t),r&4){try{Ci(3,t,t.return),cl(3,t)}catch(v){te(t,t.return,v)}try{Ci(5,t,t.return)}catch(v){te(t,t.return,v)}}break;case 1:et(e,t),ft(t),r&512&&n!==null&&gr(n,n.return);break;case 5:if(et(e,t),ft(t),r&512&&n!==null&&gr(n,n.return),t.flags&32){var i=t.stateNode;try{Oi(i,"")}catch(v){te(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Gp(i,s),Fa(l,o);var u=Fa(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?Jp(i,d):c==="dangerouslySetInnerHTML"?Yp(i,d):c==="children"?Oi(i,d):Xu(i,c,d,u)}switch(l){case"input":Aa(i,s);break;case"textarea":Kp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?yr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?yr(i,!!s.multiple,s.defaultValue,!0):yr(i,!!s.multiple,s.multiple?[]:"",!1))}i[zi]=s}catch(v){te(t,t.return,v)}}break;case 6:if(et(e,t),ft(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){te(t,t.return,v)}}break;case 3:if(et(e,t),ft(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Li(e.containerInfo)}catch(v){te(t,t.return,v)}break;case 4:et(e,t),ft(t);break;case 13:et(e,t),ft(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xc=se())),r&4&&Gh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Se=(u=Se)||c,et(e,t),Se=u):et(e,t),ft(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(P=t,c=t.child;c!==null;){for(d=P=c;P!==null;){switch(h=P,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ci(4,h,h.return);break;case 1:gr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){te(r,n,v)}}break;case 5:gr(h,h.return);break;case 22:if(h.memoizedState!==null){Qh(d);continue}}g!==null?(g.return=h,P=g):Qh(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Xp("display",o))}catch(v){te(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){te(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:et(e,t),ft(t),r&4&&Gh(t);break;case 21:break;default:et(e,t),ft(t)}}function ft(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ig(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oi(i,""),r.flags&=-33);var s=qh(t);fu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=qh(t);hu(t,l,o);break;default:throw Error(E(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mw(t,e,n){P=t,Ng(t)}function Ng(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Se;l=bs;var u=Se;if(bs=o,(Se=a)&&!u)for(P=i;P!==null;)o=P,a=o.child,o.tag===22&&o.memoizedState!==null?Yh(i):a!==null?(a.return=o,P=a):Yh(i);for(;s!==null;)P=s,Ng(s),s=s.sibling;P=i,bs=l,Se=u}Kh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Kh(t)}}function Kh(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Se||cl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Se)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Oh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Oh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Li(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Se||e.flags&512&&du(e)}catch(h){te(e,e.return,h)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Qh(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Yh(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cl(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{du(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{du(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){P=null;break}var l=e.sibling;if(l!==null){l.return=e.return,P=l;break}P=e.return}}var gw=Math.ceil,To=zt.ReactCurrentDispatcher,Pc=zt.ReactCurrentOwner,Ye=zt.ReactCurrentBatchConfig,W=0,pe=null,oe=null,ve=0,ze=0,_r=vn(0),ae=0,qi=null,Hn=0,dl=0,Rc=0,Si=null,Ae=null,xc=0,Fr=1/0,St=null,ko=!1,pu=null,on=null,Fs=!1,Zt=null,No=0,Ii=0,mu=null,Js=-1,Zs=0;function Re(){return W&6?se():Js!==-1?Js:Js=se()}function ln(t){return t.mode&1?W&2&&ve!==0?ve&-ve:Z0.transition!==null?(Zs===0&&(Zs=cm()),Zs):(t=V,t!==0||(t=window.event,t=t===void 0?16:_m(t.type)),t):1}function ct(t,e,n,r){if(50<Ii)throw Ii=0,mu=null,Error(E(185));ls(t,n,r),(!(W&2)||t!==pe)&&(t===pe&&(!(W&2)&&(dl|=n),ae===4&&Kt(t,ve)),Ue(t,r),n===1&&W===0&&!(e.mode&1)&&(Fr=se()+500,ll&&yn()))}function Ue(t,e){var n=t.callbackNode;Zy(t,e);var r=uo(t,t===pe?ve:0);if(r===0)n!==null&&sh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&sh(n),e===1)t.tag===0?J0(Xh.bind(null,t)):bm(Xh.bind(null,t)),K0(function(){!(W&6)&&yn()}),n=null;else{switch(dm(r)){case 1:n=nc;break;case 4:n=am;break;case 16:n=ao;break;case 536870912:n=um;break;default:n=ao}n=Lg(n,Pg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pg(t,e){if(Js=-1,Zs=0,W&6)throw Error(E(327));var n=t.callbackNode;if(Ir()&&t.callbackNode!==n)return null;var r=uo(t,t===pe?ve:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Po(t,r);else{e=r;var i=W;W|=2;var s=xg();(pe!==t||ve!==e)&&(St=null,Fr=se()+500,Fn(t,e));do try{yw();break}catch(l){Rg(t,l)}while(1);mc(),To.current=s,W=i,oe!==null?e=0:(pe=null,ve=0,e=ae)}if(e!==0){if(e===2&&(i=Ba(t),i!==0&&(r=i,e=gu(t,i))),e===1)throw n=qi,Fn(t,0),Kt(t,r),Ue(t,se()),n;if(e===6)Kt(t,r);else{if(i=t.current.alternate,!(r&30)&&!_w(i)&&(e=Po(t,r),e===2&&(s=Ba(t),s!==0&&(r=s,e=gu(t,s))),e===1))throw n=qi,Fn(t,0),Kt(t,r),Ue(t,se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Tn(t,Ae,St);break;case 3:if(Kt(t,r),(r&130023424)===r&&(e=xc+500-se(),10<e)){if(uo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Re(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ya(Tn.bind(null,t,Ae,St),e);break}Tn(t,Ae,St);break;case 4:if(Kt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gw(r/1960))-r,10<r){t.timeoutHandle=Ya(Tn.bind(null,t,Ae,St),r);break}Tn(t,Ae,St);break;case 5:Tn(t,Ae,St);break;default:throw Error(E(329))}}}return Ue(t,se()),t.callbackNode===n?Pg.bind(null,t):null}function gu(t,e){var n=Si;return t.current.memoizedState.isDehydrated&&(Fn(t,e).flags|=256),t=Po(t,e),t!==2&&(e=Ae,Ae=n,e!==null&&_u(e)),t}function _u(t){Ae===null?Ae=t:Ae.push.apply(Ae,t)}function _w(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kt(t,e){for(e&=~Rc,e&=~dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ut(e),r=1<<n;t[n]=-1,e&=~r}}function Xh(t){if(W&6)throw Error(E(327));Ir();var e=uo(t,0);if(!(e&1))return Ue(t,se()),null;var n=Po(t,e);if(t.tag!==0&&n===2){var r=Ba(t);r!==0&&(e=r,n=gu(t,r))}if(n===1)throw n=qi,Fn(t,0),Kt(t,e),Ue(t,se()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tn(t,Ae,St),Ue(t,se()),null}function Oc(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(Fr=se()+500,ll&&yn())}}function $n(t){Zt!==null&&Zt.tag===0&&!(W&6)&&Ir();var e=W;W|=1;var n=Ye.transition,r=V;try{if(Ye.transition=null,V=1,t)return t()}finally{V=r,Ye.transition=n,W=e,!(W&6)&&yn()}}function Ac(){ze=_r.current,Y(_r)}function Fn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,G0(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(hc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mo();break;case 3:Lr(),Y(be),Y(Ie),Ec();break;case 5:wc(r);break;case 4:Lr();break;case 13:Y(J);break;case 19:Y(J);break;case 10:gc(r.type._context);break;case 22:case 23:Ac()}n=n.return}if(pe=t,oe=t=an(t.current,null),ve=ze=e,ae=0,qi=null,Rc=dl=Hn=0,Ae=Si=null,Rn!==null){for(e=0;e<Rn.length;e++)if(n=Rn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Rn=null}return t}function Rg(t,e){do{var n=oe;try{if(mc(),Qs.current=Io,So){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}So=!1}if(Vn=0,de=le=Z=null,Ei=!1,Vi=0,Pc.current=null,n===null||n.return===null){ae=1,qi=e,oe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ve,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Uh(o);if(g!==null){g.flags&=-257,jh(g,o,l,s,e),g.mode&1&&Fh(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){Fh(s,u,e),Dc();break e}a=Error(E(426))}}else if(X&&l.mode&1){var w=Uh(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),jh(w,o,l,s,e),fc(br(a,l));break e}}s=a=br(a,l),ae!==4&&(ae=2),Si===null?Si=[s]:Si.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=hg(s,a,e);xh(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(on===null||!on.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=fg(s,l,e);xh(s,y);break e}}s=s.return}while(s!==null)}Ag(n)}catch(T){e=T,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function xg(){var t=To.current;return To.current=Io,t===null?Io:t}function Dc(){(ae===0||ae===3||ae===2)&&(ae=4),pe===null||!(Hn&268435455)&&!(dl&268435455)||Kt(pe,ve)}function Po(t,e){var n=W;W|=2;var r=xg();(pe!==t||ve!==e)&&(St=null,Fn(t,e));do try{vw();break}catch(i){Rg(t,i)}while(1);if(mc(),W=n,To.current=r,oe!==null)throw Error(E(261));return pe=null,ve=0,ae}function vw(){for(;oe!==null;)Og(oe)}function yw(){for(;oe!==null&&!Hy();)Og(oe)}function Og(t){var e=Mg(t.alternate,t,ze);t.memoizedProps=t.pendingProps,e===null?Ag(t):oe=e,Pc.current=null}function Ag(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hw(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,oe=null;return}}else if(n=dw(n,e,ze),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);ae===0&&(ae=5)}function Tn(t,e,n){var r=V,i=Ye.transition;try{Ye.transition=null,V=1,ww(t,e,n,r)}finally{Ye.transition=i,V=r}return null}function ww(t,e,n,r){do Ir();while(Zt!==null);if(W&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(e0(t,s),t===pe&&(oe=pe=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fs||(Fs=!0,Lg(ao,function(){return Ir(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ye.transition,Ye.transition=null;var o=V;V=1;var l=W;W|=4,Pc.current=null,pw(t,n),kg(n,t),z0(Ka),co=!!Ga,Ka=Ga=null,t.current=n,mw(n),$y(),W=l,V=o,Ye.transition=s}else t.current=n;if(Fs&&(Fs=!1,Zt=t,No=i),s=t.pendingLanes,s===0&&(on=null),Ky(n.stateNode),Ue(t,se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ko)throw ko=!1,t=pu,pu=null,t;return No&1&&t.tag!==0&&Ir(),s=t.pendingLanes,s&1?t===mu?Ii++:(Ii=0,mu=t):Ii=0,yn(),null}function Ir(){if(Zt!==null){var t=dm(No),e=Ye.transition,n=V;try{if(Ye.transition=null,V=16>t?16:t,Zt===null)var r=!1;else{if(t=Zt,Zt=null,No=0,W&6)throw Error(E(331));var i=W;for(W|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:Ci(8,c,s)}var d=c.child;if(d!==null)d.return=c,P=d;else for(;P!==null;){c=P;var h=c.sibling,g=c.return;if(Sg(c),c===u){P=null;break}if(h!==null){h.return=g,P=h;break}P=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ci(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,P=m;else e:for(o=f;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cl(9,l)}}catch(T){te(l,l.return,T)}if(l===o){P=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,P=y;break e}P=l.return}}if(W=i,yn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(nl,t)}catch{}r=!0}return r}finally{V=n,Ye.transition=e}}return!1}function Jh(t,e,n){e=br(n,e),e=hg(t,e,1),t=sn(t,e,1),e=Re(),t!==null&&(ls(t,1,e),Ue(t,e))}function te(t,e,n){if(t.tag===3)Jh(t,t,n);else for(;e!==null;){if(e.tag===3){Jh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){t=br(n,t),t=fg(e,t,1),e=sn(e,t,1),t=Re(),e!==null&&(ls(e,1,t),Ue(e,t));break}}e=e.return}}function Ew(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Re(),t.pingedLanes|=t.suspendedLanes&n,pe===t&&(ve&n)===n&&(ae===4||ae===3&&(ve&130023424)===ve&&500>se()-xc?Fn(t,0):Rc|=n),Ue(t,e)}function Dg(t,e){e===0&&(t.mode&1?(e=Ns,Ns<<=1,!(Ns&130023424)&&(Ns=4194304)):e=1);var n=Re();t=Lt(t,e),t!==null&&(ls(t,e,n),Ue(t,n))}function Cw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dg(t,n)}function Sw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Dg(t,n)}var Mg;Mg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||be.current)De=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return De=!1,cw(t,e,n);De=!!(t.flags&131072)}else De=!1,X&&e.flags&1048576&&Fm(e,vo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xs(t,e),t=e.pendingProps;var i=Ar(e,Ie.current);Sr(e,n),i=Sc(null,e,r,t,i,n);var s=Ic();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Fe(r)?(s=!0,go(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vc(e),i.updater=al,e.stateNode=i,i._reactInternals=e,ru(e,r,t,n),e=ou(null,e,r,!0,s,n)):(e.tag=0,X&&s&&dc(e),Ne(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Tw(r),t=nt(r,t),i){case 0:e=su(null,e,r,t,n);break e;case 1:e=Bh(null,e,r,t,n);break e;case 11:e=zh(null,e,r,t,n);break e;case 14:e=Wh(null,e,r,nt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),su(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Bh(t,e,r,i,n);case 3:e:{if(_g(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Wm(t,e),Eo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=br(Error(E(423)),e),e=Vh(t,e,r,n,i);break e}else if(r!==i){i=br(Error(E(424)),e),e=Vh(t,e,r,n,i);break e}else for(We=rn(e.stateNode.containerInfo.firstChild),Be=e,X=!0,st=null,n=$m(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dr(),r===i){e=bt(t,e,n);break e}Ne(t,e,r,n)}e=e.child}return e;case 5:return qm(e),t===null&&eu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qa(r,i)?o=null:s!==null&&Qa(r,s)&&(e.flags|=32),gg(t,e),Ne(t,e,o,n),e.child;case 6:return t===null&&eu(e),null;case 13:return vg(t,e,n);case 4:return yc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mr(e,null,r,n):Ne(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),zh(t,e,r,i,n);case 7:return Ne(t,e,e.pendingProps,n),e.child;case 8:return Ne(t,e,e.pendingProps.children,n),e.child;case 12:return Ne(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(yo,r._currentValue),r._currentValue=o,s!==null)if(ht(s.value,o)){if(s.children===i.children&&!be.current){e=bt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ot(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),tu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),tu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ne(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Sr(e,n),i=Xe(i),r=r(i),e.flags|=1,Ne(t,e,r,n),e.child;case 14:return r=e.type,i=nt(r,e.pendingProps),i=nt(r.type,i),Wh(t,e,r,i,n);case 15:return pg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Xs(t,e),e.tag=1,Fe(r)?(t=!0,go(e)):t=!1,Sr(e,n),Vm(e,r,i),ru(e,r,i,n),ou(null,e,r,!0,t,n);case 19:return yg(t,e,n);case 22:return mg(t,e,n)}throw Error(E(156,e.tag))};function Lg(t,e){return lm(t,e)}function Iw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(t,e,n,r){return new Iw(t,e,n,r)}function Mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tw(t){if(typeof t=="function")return Mc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zu)return 11;if(t===ec)return 14}return 2}function an(t,e){var n=t.alternate;return n===null?(n=Ke(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function eo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case lr:return Un(n.children,i,s,e);case Ju:o=8,i|=8;break;case Na:return t=Ke(12,n,e,i|2),t.elementType=Na,t.lanes=s,t;case Pa:return t=Ke(13,n,e,i),t.elementType=Pa,t.lanes=s,t;case Ra:return t=Ke(19,n,e,i),t.elementType=Ra,t.lanes=s,t;case Hp:return hl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bp:o=10;break e;case Vp:o=9;break e;case Zu:o=11;break e;case ec:o=14;break e;case Ht:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Ke(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Un(t,e,n,r){return t=Ke(7,t,r,e),t.lanes=n,t}function hl(t,e,n,r){return t=Ke(22,t,r,e),t.elementType=Hp,t.lanes=n,t.stateNode={isHidden:!1},t}function la(t,e,n){return t=Ke(6,t,null,e),t.lanes=n,t}function aa(t,e,n){return e=Ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lc(t,e,n,r,i,s,o,l,a){return t=new kw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ke(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vc(s),t}function Nw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bg(t){if(!t)return pn;t=t._reactInternals;e:{if(er(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Fe(n))return Lm(t,n,e)}return e}function Fg(t,e,n,r,i,s,o,l,a){return t=Lc(n,r,!0,t,i,s,o,l,a),t.context=bg(null),n=t.current,r=Re(),i=ln(n),s=Ot(r,i),s.callback=e??null,sn(n,s,i),t.current.lanes=i,ls(t,i,r),Ue(t,r),t}function fl(t,e,n,r){var i=e.current,s=Re(),o=ln(i);return n=bg(n),e.context===null?e.context=n:e.pendingContext=n,e=Ot(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=sn(i,e,o),t!==null&&(ct(t,i,o,s),Ks(t,i,o)),o}function Ro(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bc(t,e){Zh(t,e),(t=t.alternate)&&Zh(t,e)}function Pw(){return null}var Ug=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fc(t){this._internalRoot=t}pl.prototype.render=Fc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));fl(t,e,null,null)};pl.prototype.unmount=Fc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$n(function(){fl(null,t,null,null)}),e[Mt]=null}};function pl(t){this._internalRoot=t}pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=pm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gt.length&&e!==0&&e<Gt[n].priority;n++);Gt.splice(n,0,t),n===0&&gm(t)}};function Uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ef(){}function Rw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ro(o);s.call(u)}}var o=Fg(e,r,t,0,null,!1,!1,"",ef);return t._reactRootContainer=o,t[Mt]=o.current,Ui(t.nodeType===8?t.parentNode:t),$n(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ro(a);l.call(u)}}var a=Lc(t,0,!1,null,null,!1,!1,"",ef);return t._reactRootContainer=a,t[Mt]=a.current,Ui(t.nodeType===8?t.parentNode:t),$n(function(){fl(e,a,n,r)}),a}function gl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Ro(o);l.call(a)}}fl(e,o,t,i)}else o=Rw(n,e,t,i,r);return Ro(o)}hm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=pi(e.pendingLanes);n!==0&&(rc(e,n|1),Ue(e,se()),!(W&6)&&(Fr=se()+500,yn()))}break;case 13:$n(function(){var r=Lt(t,1);if(r!==null){var i=Re();ct(r,t,1,i)}}),bc(t,1)}};ic=function(t){if(t.tag===13){var e=Lt(t,134217728);if(e!==null){var n=Re();ct(e,t,134217728,n)}bc(t,134217728)}};fm=function(t){if(t.tag===13){var e=ln(t),n=Lt(t,e);if(n!==null){var r=Re();ct(n,t,e,r)}bc(t,e)}};pm=function(){return V};mm=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};ja=function(t,e,n){switch(e){case"input":if(Aa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ol(r);if(!i)throw Error(E(90));qp(r),Aa(r,i)}}}break;case"textarea":Kp(t,n);break;case"select":e=n.value,e!=null&&yr(t,!!n.multiple,e,!1)}};tm=Oc;nm=$n;var xw={usingClientEntryPoint:!1,Events:[us,dr,ol,Zp,em,Oc]},li={findFiberByHostInstance:Pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ow={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sm(t),t===null?null:t.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||Pw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Us.isDisabled&&Us.supportsFiber)try{nl=Us.inject(Ow),gt=Us}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xw;He.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uc(e))throw Error(E(200));return Nw(t,e,null,n)};He.createRoot=function(t,e){if(!Uc(t))throw Error(E(299));var n=!1,r="",i=Ug;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lc(t,1,!1,null,null,n,!1,r,i),t[Mt]=e.current,Ui(t.nodeType===8?t.parentNode:t),new Fc(e)};He.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=sm(e),t=t===null?null:t.stateNode,t};He.flushSync=function(t){return $n(t)};He.hydrate=function(t,e,n){if(!ml(e))throw Error(E(200));return gl(null,t,e,!0,n)};He.hydrateRoot=function(t,e,n){if(!Uc(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ug;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fg(e,null,t,1,n??null,i,!1,s,o),t[Mt]=e.current,Ui(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pl(e)};He.render=function(t,e,n){if(!ml(e))throw Error(E(200));return gl(null,t,e,!1,n)};He.unmountComponentAtNode=function(t){if(!ml(t))throw Error(E(40));return t._reactRootContainer?($n(function(){gl(null,null,t,!1,function(){t._reactRootContainer=null,t[Mt]=null})}),!0):!1};He.unstable_batchedUpdates=Oc;He.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ml(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return gl(t,e,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";function jg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jg)}catch(t){console.error(t)}}jg(),Fp.exports=He;var Aw=Fp.exports,tf=Aw;Ta.createRoot=tf.createRoot,Ta.hydrateRoot=tf.hydrateRoot;const Dw="_title_1reb9_1",Mw={title:Dw},Lw=t=>N.jsx("h1",{className:Mw.title,children:t.title}),bw="_topbar_1yftk_1",Fw="_button_1yftk_6",Uw="_dropdown_1yftk_15",jw="_course_1yftk_20",zw="_selected_1yftk_31",Ww="_conflicted_1yftk_35",Bw="_courses_1yftk_39",Vw="_info_1yftk_51",Hw="_meets_1yftk_56",$w="_editbutton_1yftk_60",qw="_addbutton_1yftk_76",lt={topbar:bw,button:Fw,dropdown:Uw,course:jw,selected:zw,conflicted:Ww,courses:Bw,info:Vw,meets:Hw,editbutton:$w,addbutton:qw};function nf(t){const[e,n]=t.split(":");return parseInt(e)*60+parseInt(n)}function rf(t){if(!t)return null;const[e,n]=t.split(" "),[r,i]=n.split("-");return{days:e.match(/[A-Z][a-z]*/g)||[],startTime:nf(r),endTime:nf(i)}}function Gw(t,e){const n=rf(t.courseDetails.meets),r=rf(e.courseDetails.meets);return!n||!r||!n.days.some(o=>r.days.includes(o))?!1:n.startTime<r.endTime&&r.startTime<n.endTime}/**
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
 */const zg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw Kr(e)},Kr=function(t){return new Error("Firebase Database ("+zg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Wg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new Qw;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Qw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bg=function(t){const e=Wg(t);return jc.encodeByteArray(e,!0)},xo=function(t){return Bg(t).replace(/\./g,"")},Oo=function(t){try{return jc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yw(t){return Vg(void 0,t)}function Vg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Xw(n)||(t[n]=Vg(t[n],e[n]));return t}function Xw(t){return t!=="__proto__"}/**
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
 */function Jw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zw=()=>Jw().__FIREBASE_DEFAULTS__,eE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oo(t[1]);return e&&JSON.parse(e)},zc=()=>{try{return Zw()||eE()||tE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hg=t=>{var e,n;return(n=(e=zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nE=t=>{const e=Hg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$g=()=>{var t;return(t=zc())===null||t===void 0?void 0:t.config},qg=t=>{var e;return(e=zc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class _l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function rE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[xo(JSON.stringify(n)),xo(JSON.stringify(o)),l].join(".")}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function iE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sE(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kg(){return zg.NODE_ADMIN===!0}function oE(){try{return typeof indexedDB=="object"}catch{return!1}}function lE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const aE="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aE,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new wn(i,l,r)}}function uE(t,e){return t.replace(cE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cE=/\{\$([^}]+)}/g;/**
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
 */function Gi(t){return JSON.parse(t)}function fe(t){return JSON.stringify(t)}/**
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
 */const Qg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Gi(Oo(s[0])||""),n=Gi(Oo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},dE=function(t){const e=Qg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hE=function(t){const e=Qg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ct(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ur(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ao(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Do(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(sf(s)&&sf(o)){if(!Do(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sf(t){return t!==null&&typeof t=="object"}/**
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
 */function Qr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class fE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function pE(t,e){const n=new mE(t,e);return n.subscribe.bind(n)}class mE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ua),i.error===void 0&&(i.error=ua),i.complete===void 0&&(i.complete=ua);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ua(){}function Bc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const _E=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kn="[DEFAULT]";/**
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
 */class vE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _l;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wE(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yE(t){return t===kn?void 0:t}function wE(t){return t.instantiationMode==="EAGER"}/**
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
 */class EE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const CE={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},SE=H.INFO,IE={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},TE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=IE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vc{constructor(e){this.name=e,this._logLevel=SE,this._logHandler=TE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const kE=(t,e)=>e.some(n=>t instanceof n);let of,lf;function NE(){return of||(of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PE(){return lf||(lf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yg=new WeakMap,yu=new WeakMap,Xg=new WeakMap,ca=new WeakMap,Hc=new WeakMap;function RE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yg.set(n,t)}).catch(()=>{}),Hc.set(e,t),e}function xE(t){if(yu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yu.set(t,e)}let wu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OE(t){wu=t(wu)}function AE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(da(this),e,...n);return Xg.set(r,e.sort?e.sort():[e]),un(r)}:PE().includes(t)?function(...e){return t.apply(da(this),e),un(Yg.get(this))}:function(...e){return un(t.apply(da(this),e))}}function DE(t){return typeof t=="function"?AE(t):(t instanceof IDBTransaction&&xE(t),kE(t,NE())?new Proxy(t,wu):t)}function un(t){if(t instanceof IDBRequest)return RE(t);if(ca.has(t))return ca.get(t);const e=DE(t);return e!==t&&(ca.set(t,e),Hc.set(e,t)),e}const da=t=>Hc.get(t);function ME(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=un(o);return r&&o.addEventListener("upgradeneeded",a=>{r(un(o.result),a.oldVersion,a.newVersion,un(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const LE=["get","getKey","getAll","getAllKeys","count"],bE=["put","add","delete","clear"],ha=new Map;function af(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ha.get(e))return ha.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=bE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||LE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ha.set(e,s),s}OE(t=>({...t,get:(e,n,r)=>af(e,n)||t.get(e,n,r),has:(e,n)=>!!af(e,n)||t.has(e,n)}));/**
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
 */class FE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function UE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Eu="@firebase/app",uf="0.9.19";/**
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
 */const Gn=new Vc("@firebase/app"),jE="@firebase/app-compat",zE="@firebase/analytics-compat",WE="@firebase/analytics",BE="@firebase/app-check-compat",VE="@firebase/app-check",HE="@firebase/auth",$E="@firebase/auth-compat",qE="@firebase/database",GE="@firebase/database-compat",KE="@firebase/functions",QE="@firebase/functions-compat",YE="@firebase/installations",XE="@firebase/installations-compat",JE="@firebase/messaging",ZE="@firebase/messaging-compat",eC="@firebase/performance",tC="@firebase/performance-compat",nC="@firebase/remote-config",rC="@firebase/remote-config-compat",iC="@firebase/storage",sC="@firebase/storage-compat",oC="@firebase/firestore",lC="@firebase/firestore-compat",aC="firebase",uC="10.4.0";/**
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
 */const Cu="[DEFAULT]",cC={[Eu]:"fire-core",[jE]:"fire-core-compat",[WE]:"fire-analytics",[zE]:"fire-analytics-compat",[VE]:"fire-app-check",[BE]:"fire-app-check-compat",[HE]:"fire-auth",[$E]:"fire-auth-compat",[qE]:"fire-rtdb",[GE]:"fire-rtdb-compat",[KE]:"fire-fn",[QE]:"fire-fn-compat",[YE]:"fire-iid",[XE]:"fire-iid-compat",[JE]:"fire-fcm",[ZE]:"fire-fcm-compat",[eC]:"fire-perf",[tC]:"fire-perf-compat",[nC]:"fire-rc",[rC]:"fire-rc-compat",[iC]:"fire-gcs",[sC]:"fire-gcs-compat",[oC]:"fire-fst",[lC]:"fire-fst-compat","fire-js":"fire-js",[aC]:"fire-js-all"};/**
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
 */const Mo=new Map,Su=new Map;function dC(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jr(t){const e=t.name;if(Su.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;Su.set(e,t);for(const n of Mo.values())dC(n,t);return!0}function $c(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const hC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cn=new ds("app","Firebase",hC);/**
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
 */class fC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
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
 */const Yr=uC;function Jg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw cn.create("bad-app-name",{appName:String(i)});if(n||(n=$g()),!n)throw cn.create("no-options");const s=Mo.get(i);if(s){if(Do(n,s.options)&&Do(r,s.config))return s;throw cn.create("duplicate-app",{appName:i})}const o=new EE(i);for(const a of Su.values())o.addComponent(a);const l=new fC(n,r,o);return Mo.set(i,l),l}function Zg(t=Cu){const e=Mo.get(t);if(!e&&t===Cu&&$g())return Jg();if(!e)throw cn.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let i=(r=cC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(l.join(" "));return}jr(new qn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const pC="firebase-heartbeat-database",mC=1,Ki="firebase-heartbeat-store";let fa=null;function e_(){return fa||(fa=ME(pC,mC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ki)}}}).catch(t=>{throw cn.create("idb-open",{originalErrorMessage:t.message})})),fa}async function gC(t){try{return await(await e_()).transaction(Ki).objectStore(Ki).get(t_(t))}catch(e){if(e instanceof wn)Gn.warn(e.message);else{const n=cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function cf(t,e){try{const r=(await e_()).transaction(Ki,"readwrite");await r.objectStore(Ki).put(e,t_(t)),await r.done}catch(n){if(n instanceof wn)Gn.warn(n.message);else{const r=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function t_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _C=1024,vC=30*24*60*60*1e3;class yC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=df();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=vC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=df(),{heartbeatsToSend:n,unsentEntries:r}=wC(this._heartbeatsCache.heartbeats),i=xo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function df(){return new Date().toISOString().substring(0,10)}function wC(t,e=_C){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),hf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class EC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oE()?lE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hf(t){return xo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function CC(t){jr(new qn("platform-logger",e=>new FE(e),"PRIVATE")),jr(new qn("heartbeat",e=>new yC(e),"PRIVATE")),dn(Eu,uf,t),dn(Eu,uf,"esm2017"),dn("fire-js","")}CC("");const ff="@firebase/database",pf="1.0.1";/**
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
 */let n_="";function SC(t){n_=t}/**
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
 */class IC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Gi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class TC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ct(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const r_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new IC(e)}}catch{}return new TC},On=r_("localStorage"),Iu=r_("sessionStorage");/**
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
 */const Tr=new Vc("@firebase/database"),kC=function(){let t=1;return function(){return t++}}(),i_=function(t){const e=_E(t),n=new fE;n.update(e);const r=n.digest();return jc.encodeByteArray(r)},hs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=hs.apply(null,r):typeof r=="object"?e+=fe(r):e+=r,e+=" "}return e};let jn=null,mf=!0;const NC=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Tr.logLevel=H.VERBOSE,jn=Tr.log.bind(Tr),e&&Iu.set("logging_enabled",!0)):typeof t=="function"?jn=t:(jn=null,Iu.remove("logging_enabled"))},ge=function(...t){if(mf===!0&&(mf=!1,jn===null&&Iu.get("logging_enabled")===!0&&NC(!0)),jn){const e=hs.apply(null,t);jn(e)}},fs=function(t){return function(...e){ge(t,...e)}},Tu=function(...t){const e="FIREBASE INTERNAL ERROR: "+hs(...t);Tr.error(e)},Ft=function(...t){const e=`FIREBASE FATAL ERROR: ${hs(...t)}`;throw Tr.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+hs(...t);Tr.warn(e)},PC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},RC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zr="[MIN_NAME]",Kn="[MAX_NAME]",tr=function(t,e){if(t===e)return 0;if(t===zr||e===Kn)return-1;if(e===zr||t===Kn)return 1;{const n=gf(t),r=gf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},xC=function(t,e){return t===e?0:t<e?-1:1},ai=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+fe(e))},Gc=function(t){if(typeof t!="object"||t===null)return fe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=fe(e[r]),n+=":",n+=Gc(t[e[r]]);return n+="}",n},s_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function we(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const o_=function(t){I(!qc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},OC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},AC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function DC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const MC=new RegExp("^-?(0*)\\d{1,10}$"),LC=-2147483648,bC=2147483647,gf=function(t){if(MC.test(t)){const e=Number(t);if(e>=LC&&e<=bC)return e}return null},Xr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},FC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ti=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class UC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class jC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class kr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}kr.OWNER="owner";/**
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
 */const Kc="5",l_="v",a_="s",u_="r",c_="f",d_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,h_="ls",f_="p",ku="ac",p_="websocket",m_="long_polling";/**
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
 */class g_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=On.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&On.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function zC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function __(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===p_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===m_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zC(t)&&(n.ns=t.namespace);const i=[];return we(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class WC{constructor(){this.counters_={}}incrementCounter(e,n=1){Ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Yw(this.counters_)}}/**
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
 */const pa={},ma={};function Qc(t){const e=t.toString();return pa[e]||(pa[e]=new WC),pa[e]}function BC(t,e){const n=t.toString();return ma[n]||(ma[n]=e()),ma[n]}/**
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
 */class VC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Xr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const _f="start",HC="close",$C="pLPCommand",qC="pRTLPCB",v_="id",y_="pw",w_="ser",GC="cb",KC="seg",QC="ts",YC="d",XC="dframe",E_=1870,C_=30,JC=E_-C_,ZC=25e3,eS=3e4;class vr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fs(e),this.stats_=Qc(n),this.urlFn=a=>(this.appCheckToken&&(a[ku]=this.appCheckToken),__(n,m_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eS)),RC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yc((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_f)this.id=l,this.password=a;else if(o===HC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[_f]="t",r[w_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[GC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[l_]=Kc,this.transportSessionId&&(r[a_]=this.transportSessionId),this.lastSessionId&&(r[h_]=this.lastSessionId),this.applicationId&&(r[f_]=this.applicationId),this.appCheckToken&&(r[ku]=this.appCheckToken),typeof location<"u"&&location.hostname&&d_.test(location.hostname)&&(r[u_]=c_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vr.forceAllow_=!0}static forceDisallow(){vr.forceDisallow_=!0}static isAvailable(){return vr.forceAllow_?!0:!vr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!OC()&&!AC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Bg(n),i=s_(r,JC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[XC]="t",r[v_]=e,r[y_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=fe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Yc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kC(),window[$C+this.uniqueCallbackIdentifier]=e,window[qC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Yc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ge("frame writing exception"),l.stack&&ge(l.stack),ge(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ge("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[v_]=this.myID,e[y_]=this.myPW,e[w_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+C_+r.length<=E_;){const o=this.pendingSegs.shift();r=r+"&"+KC+i+"="+o.seg+"&"+QC+i+"="+o.ts+"&"+YC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ZC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const tS=16384,nS=45e3;let Lo=null;typeof MozWebSocket<"u"?Lo=MozWebSocket:typeof WebSocket<"u"&&(Lo=WebSocket);class ot{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fs(this.connId),this.stats_=Qc(n),this.connURL=ot.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[l_]=Kc,typeof location<"u"&&location.hostname&&d_.test(location.hostname)&&(o[u_]=c_),n&&(o[a_]=n),r&&(o[h_]=r),i&&(o[ku]=i),s&&(o[f_]=s),__(e,p_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,On.set("previous_websocket_failure",!0);try{let r;Kg(),this.mySock=new Lo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Lo!==null&&!ot.forceDisallow_}static previouslyFailed(){return On.isInMemoryStorage||On.get("previous_websocket_failure")===!0}markConnectionHealthy(){On.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Gi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=fe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=s_(n,tS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
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
 */class Qi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vr,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ot&&ot.isAvailable();let r=n&&!ot.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ot];else{const i=this.transports_=[];for(const s of Qi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Qi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qi.globalTransportInitialized_=!1;/**
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
 */const rS=6e4,iS=5e3,sS=10*1024,oS=100*1024,ga="t",vf="d",lS="s",yf="r",aS="e",wf="o",Ef="a",Cf="n",Sf="p",uS="h";class cS{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fs("c:"+this.id+":"),this.transportManager_=new Qi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ti(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>oS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ga in e){const n=e[ga];n===Ef?this.upgradeIfSecondaryHealthy_():n===yf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===wf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ai("t",e),r=ai("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ef,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ai("t",e),r=ai("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ai(ga,e);if(vf in e){const r=e[vf];if(n===uS){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Cf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lS?this.onConnectionShutdown_(r):n===yf?this.onReset_(r):n===aS?Tu("Server Error: "+r):n===wf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Tu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kc!==r&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ti(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ti(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(iS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(On.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class S_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class I_{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class bo extends I_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Wc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bo}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const If=32,Tf=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new $("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function mn(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function Xc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function dS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Yi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function T_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return Me(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hS(t,e){const n=Yi(t,0),r=Yi(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=tr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Jc(t,e){if(mn(t)!==mn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Qe(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(mn(t)>mn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class fS{constructor(e,n){this.errorPrefix_=n,this.parts_=Yi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=vl(this.parts_[r]);k_(this)}}function pS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=vl(e),k_(t)}function mS(t){const e=t.parts_.pop();t.byteLength_-=vl(e),t.parts_.length>0&&(t.byteLength_-=1)}function k_(t){if(t.byteLength_>Tf)throw new Error(t.errorPrefix_+"has a key path longer than "+Tf+" bytes ("+t.byteLength_+").");if(t.parts_.length>If)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+If+") or object contains a cycle "+Nn(t))}function Nn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Zc extends I_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Zc}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ui=1e3,gS=60*5*1e3,kf=30*1e3,_S=1.3,vS=3e4,yS="server_kill",Nf=3;class At extends S_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=At.nextPersistentConnectionId_++,this.log_=fs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ui,this.maxReconnectDelay_=gS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Kg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(fe(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new _l,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;At.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ct(e,"w")){const r=Ur(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=kf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=dE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+fe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Tu("Unrecognized action received from server: "+fe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vS&&(this.reconnectDelay_=ui),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_S)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+At.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ge("getToken() completed but was canceled"):(ge("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new cS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{je(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(yS)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&je(d),a())}}}interrupt(e){ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vu(this.interruptReasons_)&&(this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Gc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nf&&(this.reconnectDelay_=kf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+n_.replace(/\./g,"-")]=1,Wc()?e["framework.cordova"]=1:Gg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bo.getInstance().currentlyOnline();return vu(this.interruptReasons_)&&e}}At.nextPersistentConnectionId_=0;At.nextConnectionId_=0;/**
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
 */class b{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new b(e,n)}}/**
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
 */class yl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new b(zr,e),i=new b(zr,n);return this.compare(r,i)!==0}minPost(){return b.MIN}}/**
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
 */let js;class N_ extends yl{static get __EMPTY_NODE(){return js}static set __EMPTY_NODE(e){js=e}compare(e,n){return tr(e.name,n.name)}isDefinedOn(e){throw Kr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return b.MIN}maxPost(){return new b(Kn,js)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,js)}toString(){return".key"}}const Nr=new N_;/**
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
 */class zs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class he{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??he.RED,this.left=i??Le.EMPTY_NODE,this.right=s??Le.EMPTY_NODE}copy(e,n,r,i,s){return new he(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}he.RED=!0;he.BLACK=!1;class wS{copy(e,n,r,i,s){return this}insert(e,n,r){return new he(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,he.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,he.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new zs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new zs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new zs(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new wS;/**
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
 */function ES(t,e){return tr(t.name,e.name)}function ed(t,e){return tr(t,e)}/**
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
 */let Nu;function CS(t){Nu=t}const P_=function(t){return typeof t=="number"?"number:"+o_(t):"string:"+t},R_=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ct(e,".sv"),"Priority must be a string or number.")}else I(t===Nu||t.isEmpty(),"priority of unexpected type.");I(t===Nu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Pf;class ce{constructor(e,n=ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),R_(this.priorityNode_)}static set __childrenNodeConstructor(e){Pf=e}static get __childrenNodeConstructor(){return Pf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+P_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=o_(this.value_):e+=this.value_,this.lazyHash_=i_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ce.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ce.VALUE_TYPE_ORDER.indexOf(n),s=ce.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let x_,O_;function SS(t){x_=t}function IS(t){O_=t}class TS extends yl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?tr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return b.MIN}maxPost(){return new b(Kn,new ce("[PRIORITY-POST]",O_))}makePost(e,n){const r=x_(e);return new b(n,new ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const re=new TS;/**
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
 */const kS=Math.log(2);class NS{constructor(e){const n=s=>parseInt(Math.log(s)/kS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fo=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new he(h,d.node,he.BLACK,null,null);{const g=parseInt(c/2,10)+a,_=i(a,g),v=i(g+1,u);return d=t[g],h=n?n(d):d,new he(h,d.node,he.BLACK,_,v)}},s=function(a){let u=null,c=null,d=t.length;const h=function(_,v){const w=d-_,p=d;d-=_;const f=i(w+1,p),m=t[w],y=n?n(m):m;g(new he(y,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),w=Math.pow(2,a.count-(_+1));v?h(w,he.BLACK):(h(w,he.BLACK),h(w,he.RED))}return c},o=new NS(t.length),l=s(o);return new Le(r||e,l)};/**
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
 */let _a;const sr={};class Pt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(sr&&re,"ChildrenNode.ts has not been loaded"),_a=_a||new Pt({".priority":sr},{".priority":re}),_a}get(e){const n=Ur(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return Ct(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Nr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(b.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Fo(r,e.getCompare()):l=sr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Pt(c,u)}addToIndexes(e,n){const r=Ao(this.indexes_,(i,s)=>{const o=Ur(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===sr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(b.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Fo(l,o.getCompare())}else return sr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new b(e.name,l))),a.insert(e,e.node)}});return new Pt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ao(this.indexes_,i=>{if(i===sr)return i;{const s=n.get(e.name);return s?i.remove(new b(e.name,s)):i}});return new Pt(r,this.indexSet_)}}/**
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
 */let ci;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&R_(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ci||(ci=new O(new Le(ed),null,Pt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ci}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ci:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new b(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ci:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{I(F(e)!==".priority"||mn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(re,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+P_(this.getPriority().val())+":"),this.forEachChild(re,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":i_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new b(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new b(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new b(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ps?-1:0}withIndex(e){if(e===Nr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Nr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(re),i=n.getIterator(re);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nr?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class PS extends O{constructor(){super(new Le(ed),O.EMPTY_NODE,Pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const ps=new PS;Object.defineProperties(b,{MIN:{value:new b(zr,O.EMPTY_NODE)},MAX:{value:new b(Kn,ps)}});N_.__EMPTY_NODE=O.EMPTY_NODE;ce.__childrenNodeConstructor=O;CS(ps);IS(ps);/**
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
 */const RS=!0;function _e(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ce(n,_e(e))}if(!(t instanceof Array)&&RS){const n=[];let r=!1;if(we(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=_e(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new b(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=Fo(n,ES,o=>o.name,ed);if(r){const o=Fo(n,re.getCompare());return new O(s,_e(e),new Pt({".priority":o},{".priority":re}))}else return new O(s,_e(e),Pt.Default)}else{let n=O.EMPTY_NODE;return we(t,(r,i)=>{if(Ct(t,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_e(e))}}SS(_e);/**
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
 */class xS extends yl{constructor(e){super(),this.indexPath_=e,I(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?tr(e.name,n.name):s}makePost(e,n){const r=_e(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new b(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,ps);return new b(Kn,e)}toString(){return Yi(this.indexPath_,0).join("/")}}/**
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
 */class OS extends yl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?tr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,n){const r=_e(e);return new b(n,r)}toString(){return".value"}}const AS=new OS;/**
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
 */function A_(t){return{type:"value",snapshotNode:t}}function Wr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Xi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ji(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function DS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class td{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Xi(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Wr(n,r)):o.trackChildChange(Ji(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(re,(i,s)=>{n.hasChild(i)||r.trackChildChange(Xi(i,s))}),n.isLeafNode()||n.forEachChild(re,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ji(i,s,o))}else r.trackChildChange(Wr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Zi{constructor(e){this.indexedFilter_=new td(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zi.getStartPost_(e),this.endPost_=Zi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new b(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(re,(o,l)=>{s.matches(new b(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class MS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Zi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new b(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,g)=>d(g,h)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new b(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Ji(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Xi(n,d));const v=l.updateImmediateChild(n,O.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Wr(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Xi(u.name,u.node)),s.trackChildChange(Wr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
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
 */class nd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zr}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Kn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new nd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function LS(t){return t.loadsAllData()?new td(t.getIndex()):t.hasLimit()?new MS(t):new Zi(t)}function Rf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===re?n="$priority":t.index_===AS?n="$value":t.index_===Nr?n="$key":(I(t.index_ instanceof xS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=fe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=fe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+fe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=fe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+fe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function xf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==re&&(e.i=t.index_.toString()),e}/**
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
 */class Uo extends S_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=fs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Uo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Rf(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Ur(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Uo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Rf(e._queryParams),r=e._path.toString(),i=new _l;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Gi(l.responseText)}catch{je("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class bS{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function jo(){return{value:null,children:new Map}}function D_(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,jo());const i=t.children.get(r);e=G(e),D_(i,e,n)}}function Pu(t,e,n){t.value!==null?n(e,t.value):FS(t,(r,i)=>{const s=new $(e.toString()+"/"+r);Pu(i,s,n)})}function FS(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class US{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&we(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Of=10*1e3,jS=30*1e3,zS=5*60*1e3;class WS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new US(e);const r=Of+(jS-Of)*Math.random();Ti(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;we(e,(i,s)=>{s>0&&Ct(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ti(this.reportStats_.bind(this),Math.floor(Math.random()*2*zS))}}/**
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
 */var at;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(at||(at={}));function rd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function id(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class zo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=at.ACK_USER_WRITE,this.source=rd()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new zo(B(),n,this.revert)}}else return I(F(this.path)===e,"operationForChild called for unrelated child."),new zo(G(this.path),this.affectedTree,this.revert)}}/**
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
 */class es{constructor(e,n){this.source=e,this.path=n,this.type=at.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new es(this.source,B()):new es(this.source,G(this.path))}}/**
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
 */class Qn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=at.OVERWRITE}operationForChild(e){return U(this.path)?new Qn(this.source,B(),this.snap.getImmediateChild(e)):new Qn(this.source,G(this.path),this.snap)}}/**
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
 */class Br{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=at.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new Qn(this.source,B(),n.value):new Br(this.source,B(),n)}else return I(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Br(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Yn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class BS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function VS(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(DS(o.childName,o.snapshotNode))}),di(t,i,"child_removed",e,r,n),di(t,i,"child_added",e,r,n),di(t,i,"child_moved",s,r,n),di(t,i,"child_changed",e,r,n),di(t,i,"value",e,r,n),i}function di(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>$S(t,l,a)),o.forEach(l=>{const a=HS(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function HS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $S(t,e,n){if(e.childName==null||n.childName==null)throw Kr("Should only compare child_ events.");const r=new b(e.childName,e.snapshotNode),i=new b(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function wl(t,e){return{eventCache:t,serverCache:e}}function ki(t,e,n,r){return wl(new Yn(e,n,r),t.serverCache)}function M_(t,e,n,r){return wl(t.eventCache,new Yn(e,n,r))}function Ru(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let va;const qS=()=>(va||(va=new Le(xC)),va);class q{constructor(e,n=qS()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return we(e,(r,i)=>{n=n.set(new $(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(U(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:ne(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new q(null)}}set(e,n){if(U(e))return new q(n,this.children);{const r=F(e),s=(this.children.get(r)||new q(null)).set(G(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(U(e))return n;{const r=F(e),s=(this.children.get(r)||new q(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ne(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(G(e),ne(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),ne(n,i),r):new q(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class dt{constructor(e){this.writeTree_=e}static empty(){return new dt(new q(null))}}function Ni(t,e,n){if(U(e))return new dt(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Me(i,e);return s=s.updateChild(o,n),new dt(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new dt(s)}}}function xu(t,e,n){let r=t;return we(n,(i,s)=>{r=Ni(r,ne(e,i),s)}),r}function Af(t,e){if(U(e))return dt.empty();{const n=t.writeTree_.setTree(e,new q(null));return new dt(n)}}function Ou(t,e){return nr(t,e)!=null}function nr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function Df(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(re,(r,i)=>{e.push(new b(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new b(r,i.value))}),e}function hn(t,e){if(U(e))return t;{const n=nr(t,e);return n!=null?new dt(new q(n)):new dt(t.writeTree_.subtree(e))}}function Au(t){return t.writeTree_.isEmpty()}function Vr(t,e){return L_(B(),t.writeTree_,e)}function L_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=L_(ne(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ne(t,".priority"),r)),n}}/**
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
 */function od(t,e){return j_(e,t)}function GS(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ni(t.visibleWrites,e,n)),t.lastWriteId=r}function KS(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=xu(t.visibleWrites,e,n),t.lastWriteId=r}function QS(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function YS(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&XS(l,r.path)?i=!1:Qe(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return JS(t),!0;if(r.snap)t.visibleWrites=Af(t.visibleWrites,r.path);else{const l=r.children;we(l,a=>{t.visibleWrites=Af(t.visibleWrites,ne(r.path,a))})}return!0}else return!1}function XS(t,e){if(t.snap)return Qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qe(ne(t.path,n),e))return!0;return!1}function JS(t){t.visibleWrites=b_(t.allWrites,ZS,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ZS(t){return t.visible}function b_(t,e,n){let r=dt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Qe(n,o)?(l=Me(n,o),r=Ni(r,l,s.snap)):Qe(o,n)&&(l=Me(o,n),r=Ni(r,B(),s.snap.getChild(l)));else if(s.children){if(Qe(n,o))l=Me(n,o),r=xu(r,l,s.children);else if(Qe(o,n))if(l=Me(o,n),U(l))r=xu(r,B(),s.children);else{const a=Ur(s.children,F(l));if(a){const u=a.getChild(G(l));r=Ni(r,B(),u)}}}else throw Kr("WriteRecord should have .snap or .children")}}return r}function F_(t,e,n,r,i){if(!r&&!i){const s=nr(t.visibleWrites,e);if(s!=null)return s;{const o=hn(t.visibleWrites,e);if(Au(o))return n;if(n==null&&!Ou(o,B()))return null;{const l=n||O.EMPTY_NODE;return Vr(o,l)}}}else{const s=hn(t.visibleWrites,e);if(!i&&Au(s))return n;if(!i&&n==null&&!Ou(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Qe(u.path,e)||Qe(e,u.path))},l=b_(t.allWrites,o,e),a=n||O.EMPTY_NODE;return Vr(l,a)}}}function eI(t,e,n){let r=O.EMPTY_NODE;const i=nr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(re,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=hn(t.visibleWrites,e);return n.forEachChild(re,(o,l)=>{const a=Vr(hn(s,new $(o)),l);r=r.updateImmediateChild(o,a)}),Df(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=hn(t.visibleWrites,e);return Df(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function tI(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ne(e,n);if(Ou(t.visibleWrites,s))return null;{const o=hn(t.visibleWrites,s);return Au(o)?i.getChild(n):Vr(o,i.getChild(n))}}function nI(t,e,n,r){const i=ne(e,n),s=nr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=hn(t.visibleWrites,i);return Vr(o,r.getNode().getImmediateChild(n))}else return null}function rI(t,e){return nr(t.visibleWrites,e)}function iI(t,e,n,r,i,s,o){let l;const a=hn(t.visibleWrites,e),u=nr(a,B());if(u!=null)l=u;else if(n!=null)l=Vr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=h.getNext();return c}else return[]}function sI(){return{visibleWrites:dt.empty(),allWrites:[],lastWriteId:-1}}function Wo(t,e,n,r){return F_(t.writeTree,t.treePath,e,n,r)}function ld(t,e){return eI(t.writeTree,t.treePath,e)}function Mf(t,e,n,r){return tI(t.writeTree,t.treePath,e,n,r)}function Bo(t,e){return rI(t.writeTree,ne(t.treePath,e))}function oI(t,e,n,r,i,s){return iI(t.writeTree,t.treePath,e,n,r,i,s)}function ad(t,e,n){return nI(t.writeTree,t.treePath,e,n)}function U_(t,e){return j_(ne(t.treePath,e),t.writeTree)}function j_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class lI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ji(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Xi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Wr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ji(r,e.snapshotNode,i.oldSnap));else throw Kr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class aI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const z_=new aI;class ud{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Yn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ad(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xn(this.viewCache_),s=oI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function uI(t){return{filter:t}}function cI(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function dI(t,e,n,r,i){const s=new lI;let o,l;if(n.type===at.OVERWRITE){const u=n;u.source.fromUser?o=Du(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=Vo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===at.MERGE){const u=n;u.source.fromUser?o=fI(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Mu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===at.ACK_USER_WRITE){const u=n;u.revert?o=gI(t,e,u.path,r,i,s):o=pI(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===at.LISTEN_COMPLETE)o=mI(t,e,n.path,r,s);else throw Kr("Unknown operation type: "+n.type);const a=s.getChanges();return hI(e,o,a),{viewCache:o,changes:a}}function hI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ru(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(A_(Ru(e)))}}function W_(t,e,n,r,i,s){const o=e.eventCache;if(Bo(r,n)!=null)return e;{let l,a;if(U(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Xn(e),c=u instanceof O?u:O.EMPTY_NODE,d=ld(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Wo(r,Xn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=F(n);if(u===".priority"){I(mn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=Mf(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=G(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Mf(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=ad(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return ki(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Vo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),g,null)}else{const g=F(n);if(!a.isCompleteForPath(n)&&mn(n)>1)return e;const _=G(n),w=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=c.updatePriority(a.getNode(),w):u=c.updateChild(a.getNode(),g,w,_,z_,null)}const d=M_(e,u,a.isFullyInitialized()||U(n),c.filtersNodes()),h=new ud(i,d,s);return W_(t,d,n,i,h,l)}function Du(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new ud(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=ki(e,u,!0,t.filter.filtersNodes());else{const d=F(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=ki(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=G(n),g=l.getNode().getImmediateChild(d);let _;if(U(h))_=r;else{const v=c.getCompleteChild(d);v!=null?Xc(h)===".priority"&&v.getChild(T_(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=O.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),d,_,h,c,o);a=ki(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Lf(t,e){return t.eventCache.isCompleteForChild(e)}function fI(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=ne(n,a);Lf(e,F(c))&&(l=Du(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=ne(n,a);Lf(e,F(c))||(l=Du(t,l,c,u,i,s,o))}),l}function bf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Mu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new q(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),_=bf(t,g,h);a=Vo(t,a,new $(d),_,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const g=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!g){const _=e.serverCache.getNode().getImmediateChild(d),v=bf(t,_,h);a=Vo(t,a,new $(d),v,i,s,o,l)}}),a}function pI(t,e,n,r,i,s,o){if(Bo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Vo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new q(null);return a.getNode().forEachChild(Nr,(c,d)=>{u=u.set(new $(c),d)}),Mu(t,e,n,u,i,s,l,o)}else return e}else{let u=new q(null);return r.foreach((c,d)=>{const h=ne(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Mu(t,e,n,u,i,s,l,o)}}function mI(t,e,n,r,i){const s=e.serverCache,o=M_(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return W_(t,o,n,r,z_,i)}function gI(t,e,n,r,i,s){let o;if(Bo(r,n)!=null)return e;{const l=new ud(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||F(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Wo(r,Xn(e));else{const d=e.serverCache.getNode();I(d instanceof O,"serverChildren would be complete if leaf node"),c=ld(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=F(n);let d=ad(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,G(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,O.EMPTY_NODE,G(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wo(r,Xn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Bo(r,B())!=null,ki(e,u,o,t.filter.filtersNodes())}}/**
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
 */class _I{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new td(r.getIndex()),s=LS(r);this.processor_=uI(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),c=new Yn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Yn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=wl(d,c),this.eventGenerator_=new BS(this.query_)}get query(){return this.query_}}function vI(t){return t.viewCache_.serverCache.getNode()}function yI(t,e){const n=Xn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Ff(t){return t.eventRegistrations_.length===0}function wI(t,e){t.eventRegistrations_.push(e)}function Uf(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function jf(t,e,n,r){e.type===at.MERGE&&e.source.queryId!==null&&(I(Xn(t.viewCache_),"We should always have a full cache before handling merges"),I(Ru(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=dI(t.processor_,i,e,n,r);return cI(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,B_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function EI(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(re,(s,o)=>{r.push(Wr(s,o))}),n.isFullyInitialized()&&r.push(A_(n.getNode())),B_(t,r,n.getNode(),e)}function B_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return VS(t.eventGenerator_,e,n,i)}/**
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
 */let Ho;class CI{constructor(){this.views=new Map}}function SI(t){I(!Ho,"__referenceConstructor has already been defined"),Ho=t}function II(){return I(Ho,"Reference.ts has not been loaded"),Ho}function TI(t){return t.views.size===0}function cd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),jf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(jf(o,e,n,r));return s}}function kI(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Wo(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=ld(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=wl(new Yn(l,a,!1),new Yn(r,i,!1));return new _I(e,u)}return o}function NI(t,e,n,r,i,s){const o=kI(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),wI(o,n),EI(o,n)}function PI(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=gn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Uf(u,n,r)),Ff(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Uf(a,n,r)),Ff(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!gn(t)&&s.push(new(II())(e._repo,e._path)),{removed:s,events:o}}function V_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pr(t,e){let n=null;for(const r of t.views.values())n=n||yI(r,e);return n}function H_(t,e){if(e._queryParams.loadsAllData())return El(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $_(t,e){return H_(t,e)!=null}function gn(t){return El(t)!=null}function El(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let $o;function RI(t){I(!$o,"__referenceConstructor has already been defined"),$o=t}function xI(){return I($o,"Reference.ts has not been loaded"),$o}let OI=1;class zf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=sI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function AI(t,e,n,r,i){return GS(t.pendingWriteTree_,e,n,r,i),i?Jr(t,new Qn(rd(),e,n)):[]}function DI(t,e,n,r){KS(t.pendingWriteTree_,e,n,r);const i=q.fromObject(n);return Jr(t,new Br(rd(),e,i))}function An(t,e,n=!1){const r=QS(t.pendingWriteTree_,e);if(YS(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(B(),!0):we(r.children,o=>{s=s.set(new $(o),!0)}),Jr(t,new zo(r.path,s,n))}else return[]}function Cl(t,e,n){return Jr(t,new Qn(id(),e,n))}function MI(t,e,n){const r=q.fromObject(n);return Jr(t,new Br(id(),e,r))}function LI(t,e){return Jr(t,new es(id(),e))}function bI(t,e,n){const r=dd(t,n);if(r){const i=hd(r),s=i.path,o=i.queryId,l=Me(s,e),a=new es(sd(o),l);return fd(t,s,a)}else return[]}function Lu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||$_(o,e))){const a=PI(o,e,n,r);TI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,g)=>gn(g));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=jI(h);for(let _=0;_<g.length;++_){const v=g[_],w=v.query,p=Q_(t,v);t.listenProvider_.startListening(Pi(w),qo(t,w),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Pi(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Sl(h));t.listenProvider_.stopListening(Pi(h),g)}))}zI(t,u)}return l}function FI(t,e,n,r){const i=dd(t,r);if(i!=null){const s=hd(i),o=s.path,l=s.queryId,a=Me(o,e),u=new Qn(sd(l),a,n);return fd(t,o,u)}else return[]}function UI(t,e,n,r){const i=dd(t,r);if(i){const s=hd(i),o=s.path,l=s.queryId,a=Me(o,e),u=q.fromObject(n),c=new Br(sd(l),a,u);return fd(t,o,c)}else return[]}function Wf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=Me(h,i);s=s||Pr(g,_),o=o||gn(g)});let l=t.syncPointTree_.get(i);l?(o=o||gn(l),s=s||Pr(l,B())):(l=new CI,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=Pr(_,B());v&&(s=s.updateImmediateChild(g,v))}));const u=$_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Sl(e);I(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=WI();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const c=od(t.pendingWriteTree_,i);let d=NI(l,e,n,c,s,a);if(!u&&!o&&!r){const h=H_(l,e);d=d.concat(BI(t,e,h))}return d}function q_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Me(o,e),u=Pr(l,a);if(u)return u});return F_(i,e,s,n,!0)}function Jr(t,e){return G_(e,t.syncPointTree_,null,od(t.pendingWriteTree_,B()))}function G_(t,e,n,r){if(U(t.path))return K_(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=Pr(i,B()));let s=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=U_(r,o);s=s.concat(G_(l,a,u,c))}return i&&(s=s.concat(cd(i,t,r,n))),s}}function K_(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=Pr(i,B()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=U_(r,o),c=t.operationForChild(o);c&&(s=s.concat(K_(c,l,a,u)))}),i&&(s=s.concat(cd(i,t,r,n))),s}function Q_(t,e){const n=e.query,r=qo(t,n);return{hashFn:()=>(vI(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?bI(t,n._path,r):LI(t,n._path);{const s=DC(i,n);return Lu(t,n,null,s)}}}}function qo(t,e){const n=Sl(e);return t.queryToTagMap.get(n)}function Sl(t){return t._path.toString()+"$"+t._queryIdentifier}function dd(t,e){return t.tagToQueryMap.get(e)}function hd(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function fd(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=od(t.pendingWriteTree_,e);return cd(r,n,i,null)}function jI(t){return t.fold((e,n,r)=>{if(n&&gn(n))return[El(n)];{let i=[];return n&&(i=V_(n)),we(r,(s,o)=>{i=i.concat(o)}),i}})}function Pi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(xI())(t._repo,t._path):t}function zI(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Sl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function WI(){return OI++}function BI(t,e,n){const r=e._path,i=qo(t,e),s=Q_(t,n),o=t.listenProvider_.startListening(Pi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)I(!gn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!U(u)&&c&&gn(c))return[El(c).query];{let h=[];return c&&(h=h.concat(V_(c).map(g=>g.query))),we(d,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Pi(c),qo(t,c))}}return o}/**
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
 */class pd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new pd(n)}node(){return this.node_}}class md{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ne(this.path_,e);return new md(this.syncTree_,n)}node(){return q_(this.syncTree_,this.path_)}}const VI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Bf=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return HI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $I(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},HI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},$I=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Y_=function(t,e,n,r){return gd(e,new md(n,t),r)},qI=function(t,e,n){return gd(t,new pd(e),n)};function gd(t,e,n){const r=t.getPriority().val(),i=Bf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Bf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ce(l,_e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ce(i))),o.forEachChild(re,(l,a)=>{const u=gd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class _d{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function vd(t,e){let n=e instanceof $?e:new $(e),r=t,i=F(n);for(;i!==null;){const s=Ur(r.node.children,i)||{children:{},childCount:0};r=new _d(i,r,s),n=G(n),i=F(n)}return r}function Zr(t){return t.node.value}function X_(t,e){t.node.value=e,bu(t)}function J_(t){return t.node.childCount>0}function GI(t){return Zr(t)===void 0&&!J_(t)}function Il(t,e){we(t.node.children,(n,r)=>{e(new _d(n,t,r))})}function Z_(t,e,n,r){n&&!r&&e(t),Il(t,i=>{Z_(i,e,!0,r)}),n&&r&&e(t)}function KI(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ms(t){return new $(t.parent===null?t.name:ms(t.parent)+"/"+t.name)}function bu(t){t.parent!==null&&QI(t.parent,t.name,t)}function QI(t,e,n){const r=GI(n),i=Ct(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,bu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,bu(t))}/**
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
 */const YI=/[\[\].#$\/\u0000-\u001F\u007F]/,XI=/[\[\].#$\u0000-\u001F\u007F]/,ya=10*1024*1024,yd=function(t){return typeof t=="string"&&t.length!==0&&!YI.test(t)},ev=function(t){return typeof t=="string"&&t.length!==0&&!XI.test(t)},JI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ev(t)},ZI=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!qc(t)||t&&typeof t=="object"&&Ct(t,".sv")},wd=function(t,e,n){const r=n instanceof $?new fS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Nn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Nn(r)+" with contents = "+e.toString());if(qc(e))throw new Error(t+"contains "+e.toString()+" "+Nn(r));if(typeof e=="string"&&e.length>ya/3&&vl(e)>ya)throw new Error(t+"contains a string greater than "+ya+" utf8 bytes "+Nn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(we(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!yd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Nn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pS(r,o),wd(t,l,r),mS(r)}),i&&s)throw new Error(t+' contains ".value" child '+Nn(r)+" in addition to actual children.")}},eT=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Yi(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!yd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(hS);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Qe(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},tT=function(t,e,n,r){if(r&&e===void 0)return;const i=Bc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];we(e,(o,l)=>{const a=new $(o);if(wd(i,l,ne(n,a)),Xc(a)===".priority"&&!ZI(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),eT(i,s)},tv=function(t,e,n,r){if(!(r&&n===void 0)&&!ev(n))throw new Error(Bc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tv(t,e,n,r)},rT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JI(n))throw new Error(Bc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class iT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ed(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Jc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function nv(t,e,n){Ed(t,n),rv(t,r=>Jc(r,e))}function Ut(t,e,n){Ed(t,n),rv(t,r=>Qe(r,e)||Qe(e,r))}function rv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(sT(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function sT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();jn&&ge("event: "+n.toString()),Xr(r)}}}/**
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
 */const oT="repo_interrupt",lT=25;class aT{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new iT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jo(),this.transactionQueueTree_=new _d,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uT(t,e,n){if(t.stats_=Qc(t.repoInfo_),t.forceRestClient_||FC())t.server_=new Uo(t.repoInfo_,(r,i,s,o)=>{Vf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new At(t.repoInfo_,e,(r,i,s,o)=>{Vf(t,r,i,s,o)},r=>{Hf(t,r)},r=>{dT(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=BC(t.repoInfo_,()=>new WS(t.stats_,t.server_)),t.infoData_=new bS,t.infoSyncTree_=new zf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Cl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Sd(t,"connected",!1),t.serverSyncTree_=new zf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ut(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function cT(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Cd(t){return VI({timestamp:cT(t)})}function Vf(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Ao(n,u=>_e(u));o=UI(t.serverSyncTree_,s,a,i)}else{const a=_e(n);o=FI(t.serverSyncTree_,s,a,i)}else if(r){const a=Ao(n,u=>_e(u));o=MI(t.serverSyncTree_,s,a)}else{const a=_e(n);o=Cl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ts(t,s)),Ut(t.eventQueue_,l,o)}function Hf(t,e){Sd(t,"connected",e),e===!1&&fT(t)}function dT(t,e){we(e,(n,r)=>{Sd(t,n,r)})}function Sd(t,e,n){const r=new $("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const s=Cl(t.infoSyncTree_,r,i);Ut(t.eventQueue_,r,s)}function iv(t){return t.nextWriteId_++}function hT(t,e,n,r){Id(t,"update",{path:e.toString(),value:n});let i=!0;const s=Cd(t),o={};if(we(n,(l,a)=>{i=!1,o[l]=Y_(ne(e,l),_e(a),t.serverSyncTree_,s)}),i)ge("update() called with empty data.  Don't do anything."),qf(t,r,"ok",void 0);else{const l=iv(t),a=DI(t.serverSyncTree_,e,o,l);Ed(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||je("update at "+e+" failed: "+u);const h=An(t.serverSyncTree_,l,!d),g=h.length>0?ts(t,e):e;Ut(t.eventQueue_,g,h),qf(t,r,u,c)}),we(n,u=>{const c=uv(t,ne(e,u));ts(t,c)}),Ut(t.eventQueue_,e,[])}}function fT(t){Id(t,"onDisconnectEvents");const e=Cd(t),n=jo();Pu(t.onDisconnect_,B(),(i,s)=>{const o=Y_(i,s,t.serverSyncTree_,e);D_(n,i,o)});let r=[];Pu(n,B(),(i,s)=>{r=r.concat(Cl(t.serverSyncTree_,i,s));const o=uv(t,i);ts(t,o)}),t.onDisconnect_=jo(),Ut(t.eventQueue_,B(),r)}function pT(t,e,n){let r;F(e._path)===".info"?r=Wf(t.infoSyncTree_,e,n):r=Wf(t.serverSyncTree_,e,n),nv(t.eventQueue_,e._path,r)}function $f(t,e,n){let r;F(e._path)===".info"?r=Lu(t.infoSyncTree_,e,n):r=Lu(t.serverSyncTree_,e,n),nv(t.eventQueue_,e._path,r)}function mT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(oT)}function Id(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ge(n,...e)}function qf(t,e,n,r){e&&Xr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function sv(t,e,n){return q_(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Td(t,e=t.transactionQueueTree_){if(e||Tl(t,e),Zr(e)){const n=lv(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gT(t,ms(e),n)}else J_(e)&&Il(e,n=>{Td(t,n)})}function gT(t,e,n){const r=n.map(u=>u.currentWriteId),i=sv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];I(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Me(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Id(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(An(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Tl(t,vd(t.transactionQueueTree_,e)),Td(t,t.transactionQueueTree_),Ut(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)Xr(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{je("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ts(t,e)}},o)}function ts(t,e){const n=ov(t,e),r=ms(n),i=lv(t,n);return _T(t,i,r),r}function _T(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Me(n,a.path);let c=!1,d;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(An(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=lT)c=!0,d="maxretry",i=i.concat(An(t.serverSyncTree_,a.currentWriteId,!0));else{const h=sv(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){wd("transaction failed: Data returned ",g,a.path);let _=_e(g);typeof g=="object"&&g!=null&&Ct(g,".priority")||(_=_.updatePriority(h.getPriority()));const w=a.currentWriteId,p=Cd(t),f=qI(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=iv(t),o.splice(o.indexOf(w),1),i=i.concat(AI(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(An(t.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(An(t.serverSyncTree_,a.currentWriteId,!0))}Ut(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Tl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Xr(r[l]);Td(t,t.transactionQueueTree_)}function ov(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&Zr(r)===void 0;)r=vd(r,n),e=G(e),n=F(e);return r}function lv(t,e){const n=[];return av(t,e,n),n.sort((r,i)=>r.order-i.order),n}function av(t,e,n){const r=Zr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Il(e,i=>{av(t,i,n)})}function Tl(t,e){const n=Zr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,X_(e,n.length>0?n:void 0)}Il(e,r=>{Tl(t,r)})}function uv(t,e){const n=ms(ov(t,e)),r=vd(t.transactionQueueTree_,e);return KI(r,i=>{wa(t,i)}),wa(t,r),Z_(r,i=>{wa(t,i)}),n}function wa(t,e){const n=Zr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(An(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?X_(e,void 0):n.length=s+1,Ut(t.eventQueue_,ms(e),i);for(let o=0;o<r.length;o++)Xr(r[o])}}/**
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
 */function vT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function yT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Gf=function(t,e){const n=wT(t),r=n.namespace;n.domain==="firebase.com"&&Ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||PC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new g_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},wT=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=vT(t.substring(c,d)));const h=yT(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class cv{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+fe(this.snapshot.exportVal())}}class dv{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ET{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class kd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:Xc(this._path)}get ref(){return new Wt(this._repo,this._path)}get _queryIdentifier(){const e=xf(this._queryParams),n=Gc(e);return n==="{}"?"default":n}get _queryObject(){return xf(this._queryParams)}isEqual(e){if(e=Ze(e),!(e instanceof kd))return!1;const n=this._repo===e._repo,r=Jc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+dS(this._path)}}class Wt extends kd{constructor(e,n){super(e,n,new nd,!1)}get parent(){const e=T_(this._path);return e===null?null:new Wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ns{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=Go(this.ref,e);return new ns(this._node.getChild(n),r,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ns(i,Go(this.ref,r),re)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function hv(t,e){return t=Ze(t),t._checkNotDeleted("ref"),e!==void 0?Go(t._root,e):t._root}function Go(t,e){return t=Ze(t),F(t._path)===null?nT("child","path",e,!1):tv("child","path",e,!1),new Wt(t._repo,ne(t._path,e))}function CT(t,e){tT("update",e,t._path,!1);const n=new _l;return hT(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Nd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new cv("value",this,new ns(e.snapshotNode,new Wt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dv(this,e,n):null}matches(e){return e instanceof Nd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Pd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dv(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const r=Go(new Wt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new cv(e.type,this,new ns(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Pd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ST(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{$f(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new ET(n,s||void 0),l=e==="value"?new Nd(o):new Pd(e,o);return pT(t._repo,t,l),()=>$f(t._repo,t,l)}function IT(t,e,n,r){return ST(t,"value",e,n,r)}SI(Wt);RI(Wt);/**
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
 */const TT="FIREBASE_DATABASE_EMULATOR_HOST",Fu={};let kT=!1;function NT(t,e,n,r){t.repoInfo_=new g_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function PT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ge("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Gf(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[TT]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Gf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new kr(kr.OWNER):new jC(t.name,t.options,e);rT("Invalid Firebase Database URL",o),U(o.path)||Ft("Database URL must point to the root of a Firebase Database (not including a child path).");const d=xT(l,t,c,new UC(t.name,n));return new OT(d,t)}function RT(t,e){const n=Fu[e];(!n||n[t.key]!==t)&&Ft(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mT(t),delete n[t.key]}function xT(t,e,n,r){let i=Fu[e.name];i||(i={},Fu[e.name]=i);let s=i[t.toURLString()];return s&&Ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new aT(t,kT,n,r),i[t.toURLString()]=s,s}class OT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(uT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(RT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ft("Cannot call "+e+" on a deleted database.")}}function AT(t=Zg(),e){const n=$c(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=nE("database");r&&DT(n,...r)}return n}function DT(t,e,n,r={}){t=Ze(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ft("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new kr(kr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:rE(r.mockUserToken,t.app.options.projectId);s=new kr(o)}NT(i,e,n,s)}/**
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
 */function MT(t){SC(Yr),jr(new qn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return PT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),dn(ff,pf,t),dn(ff,pf,"esm2017")}At.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};At.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};MT();var LT="firebase",bT="10.4.0";/**
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
 */dn(LT,bT,"app");function Rd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FT=fv,pv=new ds("auth","Firebase",fv());/**
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
 */const Ko=new Vc("@firebase/auth");function UT(t,...e){Ko.logLevel<=H.WARN&&Ko.warn(`Auth (${Yr}): ${t}`,...e)}function to(t,...e){Ko.logLevel<=H.ERROR&&Ko.error(`Auth (${Yr}): ${t}`,...e)}/**
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
 */function Et(t,...e){throw xd(t,...e)}function vt(t,...e){return xd(t,...e)}function mv(t,e,n){const r=Object.assign(Object.assign({},FT()),{[e]:n});return new ds("auth","Firebase",r).create(e,{appName:t.name})}function jT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(t,"argument-error"),mv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pv.create(t,...e)}function A(t,e,...n){if(!t)throw xd(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw to(e),new Error(e)}function jt(t,e){t||Rt(e)}/**
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
 */function Uu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zT(){return Kf()==="http:"||Kf()==="https:"}function Kf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function WT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zT()||iE()||"connection"in navigator)?navigator.onLine:!0}function BT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=Wc()||Gg()}get(){return WT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Od(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const HT=new gs(3e4,6e4);function _v(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _s(t,e,n,r,i={}){return vv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Qr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),gv.fetch()(yv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function vv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VT),e);try{const i=new qT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ws(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ws(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ws(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ws(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mv(t,c,u);Et(t,c)}}catch(i){if(i instanceof wn)throw i;Et(t,"network-request-failed",{message:String(i)})}}async function $T(t,e,n,r,i={}){const s=await _s(t,e,n,r,i);return"mfaPendingCredential"in s&&Et(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Od(t.config,i):`${t.config.apiScheme}://${i}`}class qT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),HT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ws(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function GT(t,e){return _s(t,"POST","/v1/accounts:delete",e)}async function KT(t,e){return _s(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QT(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),i=Ad(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ri(Ea(i.auth_time)),issuedAtTime:Ri(Ea(i.iat)),expirationTime:Ri(Ea(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ea(t){return Number(t)*1e3}function Ad(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return to("JWT malformed, contained fewer than 3 sections"),null;try{const i=Oo(n);return i?JSON.parse(i):(to("Failed to decode base64 JWT payload"),null)}catch(i){return to("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function YT(t){const e=Ad(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&XT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class JT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ri(this.lastLoginAt),this.creationTime=Ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await rs(t,KT(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tk(s.providerUserInfo):[],l=ek(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new wv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function ZT(t){const e=Ze(t);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ek(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tk(t){return t.map(e=>{var{providerId:n}=e,r=Rd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nk(t,e){const n=await vv(t,{},async()=>{const r=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",gv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):YT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await nk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new is;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function Vt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await rs(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QT(this,e)}reload(){return ZT(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rs(this,GT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,w=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:T,providerData:C,stsTokenManager:S}=n;A(m&&S,e,"internal-error");const k=is.fromJSON(this.name,S);A(typeof m=="string",e,"internal-error"),Vt(d,e.name),Vt(h,e.name),A(typeof y=="boolean",e,"internal-error"),A(typeof T=="boolean",e,"internal-error"),Vt(g,e.name),Vt(_,e.name),Vt(v,e.name),Vt(w,e.name),Vt(p,e.name),Vt(f,e.name);const j=new zn({uid:m,auth:e,email:h,emailVerified:y,displayName:d,isAnonymous:T,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:k,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(j.providerData=C.map(D=>Object.assign({},D))),w&&(j._redirectEventId=w),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new is;i.updateFromServerResponse(n);const s=new zn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qo(s),s}}/**
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
 */const Qf=new Map;function xt(t){jt(t instanceof Function,"Expected a class definition");let e=Qf.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qf.set(t,e),e)}/**
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
 */class Ev{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ev.type="NONE";const Yf=Ev;/**
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
 */function no(t,e,n){return`firebase:${t}:${e}:${n}`}class Rr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=no(this.userKey,i.apiKey,s),this.fullPersistenceKey=no("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rr(xt(Yf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||xt(Yf);const o=no(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=zn._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Rr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Rr(s,e,r))}}/**
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
 */function Xf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kv(e))return"Blackberry";if(Nv(e))return"Webos";if(Dd(e))return"Safari";if((e.includes("chrome/")||Sv(e))&&!e.includes("edge/"))return"Chrome";if(Tv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cv(t=Te()){return/firefox\//i.test(t)}function Dd(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sv(t=Te()){return/crios\//i.test(t)}function Iv(t=Te()){return/iemobile/i.test(t)}function Tv(t=Te()){return/android/i.test(t)}function kv(t=Te()){return/blackberry/i.test(t)}function Nv(t=Te()){return/webos/i.test(t)}function kl(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rk(t=Te()){var e;return kl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ik(){return sE()&&document.documentMode===10}function Pv(t=Te()){return kl(t)||Tv(t)||Nv(t)||kv(t)||/windows phone/i.test(t)||Iv(t)}function sk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Rv(t,e=[]){let n;switch(t){case"Browser":n=Xf(Te());break;case"Worker":n=`${Xf(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yr}/${r}`}/**
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
 */class ok{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function lk(t,e={}){return _s(t,"GET","/v2/passwordPolicy",_v(t,e))}/**
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
 */const ak=6;class uk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ak,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ck{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jf(this),this.idTokenSubscription=new Jf(this),this.beforeStateQueue=new ok(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ze(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lk(this),n=new uk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&UT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nl(t){return Ze(t)}class Jf{constructor(e){this.auth=e,this.observer=null,this.addObserver=pE(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function dk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dk().appendChild(r)})}function fk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function pk(t,e){const n=$c(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Do(s,e??{}))return i;Et(i,"already-initialized")}return n.initialize({options:e})}function mk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gk(t,e,n){const r=Nl(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=xv(e),{host:o,port:l}=_k(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||vk()}function xv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _k(t){const e=xv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Zf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Zf(o)}}}function Zf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ov{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}/**
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
 */async function xr(t,e){return $T(t,"POST","/v1/accounts:signInWithIdp",_v(t,e))}/**
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
 */const yk="http://localhost";class Jn extends Ov{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Jn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xr(e,n)}buildRequest(){const e={requestUri:yk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qr(n)}return e}}/**
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
 */class Md{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vs extends Md{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qt extends vs{constructor(){super("facebook.com")}static credential(e){return Jn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
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
 */class Tt extends vs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
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
 */class Yt extends vs{constructor(){super("github.com")}static credential(e){return Jn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
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
 */class Xt extends vs{constructor(){super("twitter.com")}static credential(e,n){return Jn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
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
 */class Hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zn._fromIdTokenResponse(e,r,i),o=ep(r);return new Hr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ep(r);return new Hr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ep(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Yo extends wn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yo(e,n,r,i)}}function Av(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(t,s,e,r):s})}async function wk(t,e,n=!1){const r=await rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hr._forOperation(t,"link",r)}/**
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
 */async function Ek(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await rs(t,Av(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Ad(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(t.uid===l,r,"user-mismatch"),Hr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),s}}/**
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
 */async function Ck(t,e,n=!1){const r="signIn",i=await Av(t,r,e),s=await Hr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Sk(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function Ik(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function Tk(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function kk(t){return Ze(t).signOut()}const Xo="__sak";/**
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
 */class Dv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Nk(){const t=Te();return Dd(t)||kl(t)}const Pk=1e3,Rk=10;class Mv extends Dv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Nk()&&sk(),this.fallbackToPolling=Pv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ik()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Rk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mv.type="LOCAL";const xk=Mv;/**
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
 */class Lv extends Dv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lv.type="SESSION";const bv=Lv;/**
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
 */function Ok(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Pl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await Ok(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pl.receivers=[];/**
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
 */function Ld(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ak{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Ld("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yt(){return window}function Dk(t){yt().location.href=t}/**
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
 */function Fv(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function Mk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bk(){return Fv()?self:null}/**
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
 */const Uv="firebaseLocalStorageDb",Fk=1,Jo="firebaseLocalStorage",jv="fbase_key";class ys{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rl(t,e){return t.transaction([Jo],e?"readwrite":"readonly").objectStore(Jo)}function Uk(){const t=indexedDB.deleteDatabase(Uv);return new ys(t).toPromise()}function ju(){const t=indexedDB.open(Uv,Fk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jo,{keyPath:jv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jo)?e(r):(r.close(),await Uk(),e(await ju()))})})}async function tp(t,e,n){const r=Rl(t,!0).put({[jv]:e,value:n});return new ys(r).toPromise()}async function jk(t,e){const n=Rl(t,!1).get(e),r=await new ys(n).toPromise();return r===void 0?null:r.value}function np(t,e){const n=Rl(t,!0).delete(e);return new ys(n).toPromise()}const zk=800,Wk=3;class zv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ju(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Wk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pl._getInstance(bk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mk(),!this.activeServiceWorker)return;this.sender=new Ak(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ju();return await tp(e,Xo,"1"),await np(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>np(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Rl(i,!1).getAll();return new ys(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zv.type="LOCAL";const Bk=zv;new gs(3e4,6e4);/**
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
 */function Wv(t,e){return e?xt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bd extends Ov{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Vk(t){return Ck(t.auth,new bd(t),t.bypassAuthState)}function Hk(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Ek(n,new bd(t),t.bypassAuthState)}async function $k(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),wk(n,new bd(t),t.bypassAuthState)}/**
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
 */class Bv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vk;case"linkViaPopup":case"linkViaRedirect":return $k;case"reauthViaPopup":case"reauthViaRedirect":return Hk;default:Et(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qk=new gs(2e3,1e4);async function Gk(t,e,n){const r=Nl(t);jT(t,e,Md);const i=Wv(r,n);return new Dn(r,"signInViaPopup",e,i).executeNotNull()}class Dn extends Bv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=Ld();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qk.get())};e()}}Dn.currentPopupAction=null;/**
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
 */const Kk="pendingRedirect",ro=new Map;class Qk extends Bv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ro.get(this.auth._key());if(!e){try{const r=await Yk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ro.set(this.auth._key(),e)}return this.bypassAuthState||ro.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yk(t,e){const n=Zk(e),r=Jk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Xk(t,e){ro.set(t._key(),e)}function Jk(t){return xt(t._redirectPersistence)}function Zk(t){return no(Kk,t.config.apiKey,t.name)}async function e1(t,e,n=!1){const r=Nl(t),i=Wv(r,e),o=await new Qk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const t1=10*60*1e3;class n1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!r1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=t1&&this.cachedEventUids.clear(),this.cachedEventUids.has(rp(e))}saveEventToCache(e){this.cachedEventUids.add(rp(e)),this.lastProcessedEventTime=Date.now()}}function rp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function r1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vv(t);default:return!1}}/**
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
 */async function i1(t,e={}){return _s(t,"GET","/v1/projects",e)}/**
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
 */const s1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,o1=/^https?/;async function l1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await i1(t);for(const n of e)try{if(a1(n))return}catch{}Et(t,"unauthorized-domain")}function a1(t){const e=Uu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!o1.test(n))return!1;if(s1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const u1=new gs(3e4,6e4);function ip(){const t=yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function c1(t){return new Promise((e,n)=>{var r,i,s;function o(){ip(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ip(),n(vt(t,"network-request-failed"))},timeout:u1.get()})}if(!((i=(r=yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yt().gapi)===null||s===void 0)&&s.load)o();else{const l=fk("iframefcb");return yt()[l]=()=>{gapi.load?o():n(vt(t,"network-request-failed"))},hk(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw io=null,e})}let io=null;function d1(t){return io=io||c1(t),io}/**
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
 */const h1=new gs(5e3,15e3),f1="__/auth/iframe",p1="emulator/auth/iframe",m1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},g1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _1(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Od(e,p1):`https://${t.config.authDomain}/${f1}`,r={apiKey:e.apiKey,appName:t.name,v:Yr},i=g1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qr(r).slice(1)}`}async function v1(t){const e=await d1(t),n=yt().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:_1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:m1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),l=yt().setTimeout(()=>{s(o)},h1.get());function a(){yt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const y1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},w1=500,E1=600,C1="_blank",S1="http://localhost";class sp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function I1(t,e,n,r=w1,i=E1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},y1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Te().toLowerCase();n&&(l=Sv(u)?C1:n),Cv(u)&&(e=e||S1,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(rk(u)&&l!=="_self")return T1(e||"",l),new sp(null);const d=window.open(e||"",l,c);A(d,t,"popup-blocked");try{d.focus()}catch{}return new sp(d)}function T1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const k1="__/auth/handler",N1="emulator/auth/handler",P1=encodeURIComponent("fac");async function op(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yr,eventId:i};if(e instanceof Md){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof vs){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${P1}=${encodeURIComponent(a)}`:"";return`${R1(t)}?${Qr(l).slice(1)}${u}`}function R1({config:t}){return t.emulator?Od(t,N1):`https://${t.authDomain}/${k1}`}/**
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
 */const Ca="webStorageSupport";class x1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bv,this._completeRedirectFn=e1,this._overrideRedirectResult=Xk}async _openPopup(e,n,r,i){var s;jt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await op(e,n,r,Uu(),i);return I1(e,o,Ld())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await op(e,n,r,Uu(),i);return Dk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await v1(e),r=new n1(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ca,{type:Ca},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ca];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=l1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pv()||Dd()||kl()}}const O1=x1;var lp="@firebase/auth",ap="1.3.0";/**
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
 */class A1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function D1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function M1(t){jr(new qn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rv(t)},u=new ck(r,i,s,a);return mk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jr(new qn("auth-internal",e=>{const n=Nl(e.getProvider("auth").getImmediate());return(r=>new A1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(lp,ap,D1(t)),dn(lp,ap,"esm2017")}/**
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
 */const L1=5*60,b1=qg("authIdTokenMaxAge")||L1;let up=null;const F1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>b1)return;const i=n==null?void 0:n.token;up!==i&&(up=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Fd(t=Zg()){const e=$c(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pk(t,{popupRedirectResolver:O1,persistence:[Bk,xk,bv]}),r=qg("authTokenSyncURL");if(r){const s=F1(r);Ik(n,s,()=>s(n.currentUser)),Sk(n,o=>s(o))}const i=Hg("auth");return i&&gk(n,`http://${i}`),n}M1("Browser");const U1={apiKey:"AIzaSyCoArecBjNWTWB8IUiVx_1AIJafRQXzq4Y",authDomain:"cs-392-react-tutorial.firebaseapp.com",databaseURL:"https://cs-392-react-tutorial-default-rtdb.firebaseio.com",projectId:"cs-392-react-tutorial",storageBucket:"cs-392-react-tutorial.appspot.com",messagingSenderId:"1059143274077",appId:"1:1059143274077:web:a8ec1cbf544236175cc7b4",measurementId:"G-QLNWDHM9M1"},xl=Jg(U1),zu=AT(xl),j1=t=>{const[e,n]=x.useState(),[r,i]=x.useState(null);return x.useEffect(()=>IT(hv(zu,t),s=>{n(s.val())},s=>{i(s)}),[t]),[e,r]},cp=t=>{const e=Date.now(),n=(t==null?void 0:t.message)||`Updated: ${new Date(e).toLocaleString()}`;return{timestamp:e,error:t,message:n}},z1=t=>{const[e,n]=x.useState();return[x.useCallback(i=>{CT(hv(zu,t),i).then(()=>n(cp())).catch(s=>n(cp(s)))},[zu,t]),e]},W1=()=>{Gk(Fd(xl),new Tt)},B1=()=>kk(Fd(xl)),Hv=()=>{const[t,e]=x.useState();return x.useEffect(()=>Tk(Fd(xl),e),[]),[t]},V1=(t=null,e={})=>{const[n,r]=x.useState(()=>({values:e}));return[n,s=>{const{id:o,value:l}=s.target,a=t?t(o,l):"";s.target.setCustomValidity(a);const u={...n.values,[o]:l},c={...n.errors,[o]:a},d=Object.values(c).some(h=>h!=="");r(d?{values:u,errors:c}:{values:u})}]};/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ss.apply(this,arguments)}var Mn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Mn||(Mn={}));const dp="popstate";function H1(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Wu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$v(i)}return q1(e,n,null,t)}function wt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $1(){return Math.random().toString(36).substr(2,8)}function hp(t,e){return{usr:t.state,key:t.key,idx:e}}function Wu(t,e,n,r){return n===void 0&&(n=null),ss({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ol(e):e,{state:n,key:e&&e.key||r||$1()})}function $v(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ol(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function q1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Mn.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(ss({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=Mn.Pop;let w=c(),p=w==null?null:w-u;u=w,a&&a({action:l,location:v.location,delta:p})}function h(w,p){l=Mn.Push;let f=Wu(v.location,w,p);n&&n(f,w),u=c()+1;let m=hp(f,u),y=v.createHref(f);try{o.pushState(m,"",y)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(y)}s&&a&&a({action:l,location:v.location,delta:1})}function g(w,p){l=Mn.Replace;let f=Wu(v.location,w,p);n&&n(f,w),u=c();let m=hp(f,u),y=v.createHref(f);o.replaceState(m,"",y),s&&a&&a({action:l,location:v.location,delta:0})}function _(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:$v(w);return wt(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return l},get location(){return t(i,o)},listen(w){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(dp,d),a=w,()=>{i.removeEventListener(dp,d),a=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let p=_(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(w){return o.go(w)}};return v}var fp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fp||(fp={}));function G1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function K1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ol(t):t;return{pathname:n?n.startsWith("/")?n:Q1(n,e):e,search:Z1(r),hash:eN(i)}}function Q1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Y1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function X1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ol(t):(i=ss({},t),wt(!i.pathname||!i.pathname.includes("?"),Sa("?","pathname","search",i)),wt(!i.pathname||!i.pathname.includes("#"),Sa("#","pathname","hash",i)),wt(!i.search||!i.search.includes("#"),Sa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?e[d]:"/"}let a=K1(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const J1=t=>t.join("/").replace(/\/\/+/g,"/"),Z1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,eN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,qv=["post","put","patch","delete"];new Set(qv);const tN=["get",...qv];new Set(tN);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bu(){return Bu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bu.apply(this,arguments)}const Gv=x.createContext(null),Ud=x.createContext(null),jd=x.createContext(null),zd=x.createContext({outlet:null,matches:[],isDataRoute:!1});function Wd(){return x.useContext(jd)!=null}function nN(){return Wd()||wt(!1),x.useContext(jd).location}function Kv(t){x.useContext(Ud).static||x.useLayoutEffect(t)}function rN(){let{isDataRoute:t}=x.useContext(zd);return t?aN():iN()}function iN(){Wd()||wt(!1);let t=x.useContext(Gv),{basename:e,navigator:n}=x.useContext(Ud),{matches:r}=x.useContext(zd),{pathname:i}=nN(),s=JSON.stringify(Y1(r).map(a=>a.pathnameBase)),o=x.useRef(!1);return Kv(()=>{o.current=!0}),x.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let c=X1(a,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:J1([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}var Qv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Qv||{}),Yv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Yv||{});function sN(t){let e=x.useContext(Gv);return e||wt(!1),e}function oN(t){let e=x.useContext(zd);return e||wt(!1),e}function lN(t){let e=oN(),n=e.matches[e.matches.length-1];return n.route.id||wt(!1),n.route.id}function aN(){let{router:t}=sN(Qv.UseNavigateStable),e=lN(Yv.UseNavigateStable),n=x.useRef(!1);return Kv(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bu({fromRouteId:e},s)))},[t,e])}function uN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Mn.Pop,navigator:s,static:o=!1}=t;Wd()&&wt(!1);let l=e.replace(/^\/*/,"/"),a=x.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Ol(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:g="default"}=r,_=x.useMemo(()=>{let v=G1(u,l);return v==null?null:{location:{pathname:v,search:c,hash:d,state:h,key:g},navigationType:i}},[l,u,c,d,h,g,i]);return _==null?null:x.createElement(Ud.Provider,{value:a},x.createElement(jd.Provider,{children:n,value:_}))}new Promise(()=>{});/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const cN="startTransition",pp=Cy[cN];function dN(t){let{basename:e,children:n,future:r,window:i}=t,s=x.useRef();s.current==null&&(s.current=H1({window:i,v5Compat:!0}));let o=s.current,[l,a]=x.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=x.useCallback(d=>{u&&pp?pp(()=>a(d)):a(d)},[a,u]);return x.useLayoutEffect(()=>o.listen(c),[o,c]),x.createElement(uN,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o})}var mp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(mp||(mp={}));var gp;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gp||(gp={}));const hN="_form_13qnl_1",fN="_label_13qnl_10",pN="_input_13qnl_15",mN="_button_13qnl_30",gN="_cancel_13qnl_39",_N="_submit_13qnl_49",vN="_message_13qnl_59",Ln={form:hN,label:fN,input:pN,button:mN,cancel:gN,submit:_N,message:vN},yN=(t,e)=>{switch(t){case"title":return e.length>=2?"":"Title must be at least two characters.";case"meets":return/^[A-Za-z]{3,5} (?:[01]\d|2[0-3]):[0-5]\d-[01]\d|2[0-3]:[0-5]\d$/.test(e)?"":"Meeting time must have a valid format, e.g., 'MWF 12:00-13:20'.";default:return""}},_p=({name:t,text:e,state:n,change:r})=>{var i,s;return N.jsxs("div",{children:[N.jsx("label",{className:Ln.label,htmlFor:t,children:e}),N.jsx("input",{id:t,name:t,defaultValue:(i=n.values)==null?void 0:i[t],onChange:r,className:Ln.input}),N.jsx("div",{children:(s=n.errors)==null?void 0:s[t]})]})},wN=({message:t,disabled:e,onCancel:n})=>(rN(),N.jsxs("div",{className:Ln.button,children:[N.jsx("button",{type:"button",onClick:()=>n(),className:Ln.cancel,children:"Cancel"}),N.jsx("button",{type:"submit",disabled:e,className:Ln.submit,children:"Submit"}),N.jsx("br",{}),N.jsx("span",{className:Ln.message,children:t})]})),EN=({courseCode:t,courseDetails:e,onCancel:n})=>{const[r,i]=z1(`/courses/${t}`),[s,o]=V1(yN,e),l=a=>{a.preventDefault(),s.errors||r(s.values)};return N.jsxs("form",{onSubmit:l,className:Ln.form,noValidate:s.errors?"novalidate":null,children:[N.jsx(_p,{name:"title",text:"Title",state:s,change:o}),N.jsx(_p,{name:"meets",text:"Meets",state:s,change:o}),N.jsx(wN,{message:i==null?void 0:i.message,disabled:s.errors,onCancel:n})]})},CN=({courseCode:t,courseDetails:e,handleEditClick:n})=>{const[r]=Hv(),i=r!==null;return N.jsxs("div",{children:[N.jsxs("div",{className:lt.info,children:[N.jsxs("h2",{children:[e.term," CS ",t]}),N.jsx("p",{children:e.title})]}),N.jsx("div",{className:lt.meets,children:N.jsx("p",{children:e.meets})}),i&&N.jsx("button",{className:lt.editbutton,onClick:n,children:"Edit"})]})},SN=({courseCode:t,courseDetails:e,selected:n,toggleSelected:r,conflicted:i})=>{const[s,o]=x.useState(!1),[l,a]=x.useState(!1),u=()=>{o(!0)},c=()=>{o(!1)};return N.jsxs("div",{className:`${lt.course} ${n.some(d=>d.courseCode===t)?lt.selected:""}
      ${i.some(d=>d.courseCode===t)?lt.conflicted:""}`,children:[i.some(d=>d.courseCode===t)?null:N.jsx("button",{onClick:()=>{a(!l),r(t,e)},className:lt.addbutton,children:l?"Remove":"Add"}),s?N.jsx(EN,{courseCode:t,courseDetails:e,onCancel:c}):N.jsx(CN,{courseCode:t,courseDetails:e,handleEditClick:u})]})},IN="_modal_mnexd_1",TN="_show_mnexd_16",kN="_dialog_mnexd_22",NN="_content_mnexd_39",PN="_header_mnexd_48",RN="_body_mnexd_55",xN="_close_mnexd_59",tt={modal:IN,show:TN,dialog:kN,content:NN,header:PN,body:RN,close:xN},ON=({children:t,open:e,close:n})=>N.jsx("div",{className:`${tt.modal} ${e?tt.show:""}`,tabIndex:"-1",role:"dialog",onClick:r=>{r.target===r.currentTarget&&n()},children:N.jsx("div",{className:tt.dialog,role:"document",children:N.jsxs("div",{className:tt.content,children:[N.jsx("div",{className:tt.header,children:N.jsx("button",{type:"button",className:tt.close,"aria-label":"Close",onClick:n,children:"X"})}),N.jsx("div",{className:tt.body,children:t.length===0?N.jsxs("div",{className:tt.noCourses,children:[N.jsx("p",{children:"No courses selected."}),N.jsx("p",{children:"Select courses by clicking on them."})]}):t.map((r,i)=>N.jsxs("div",{className:tt.course,children:[N.jsxs("div",{className:tt.info,children:[N.jsxs("h2",{children:[r.courseDetails.term," CS ",r.courseCode]}),N.jsx("p",{children:r.courseDetails.title})]}),N.jsx("div",{className:tt.meets,children:N.jsx("p",{children:r.courseDetails.meets})})]},i))})]})})}),AN=({selectedTerm:t,setSelectedTerm:e})=>N.jsxs("div",{className:lt.dropdown,children:[N.jsx("label",{children:"Filter term: "}),N.jsxs("select",{id:"termSelect",value:t,onChange:n=>e(n.target.value),children:[N.jsx("option",{value:"Fall",children:"Fall"}),N.jsx("option",{value:"Winter",children:"Winter"}),N.jsx("option",{value:"Spring",children:"Spring"})]})]}),DN=({openModal:t})=>N.jsx("button",{onClick:()=>t(),className:lt.button,children:"Course Plan"}),MN=t=>{const[e,n]=j1("/"),[r,i]=x.useState("Fall"),[s,o]=x.useState([]),[l,a]=x.useState([]),[u,c]=x.useState(!1),d=()=>c(!0),h=()=>c(!1),g=(v,w,p)=>{const f=Object.keys(w),m=[];for(const y of f){const T={courseCode:y,courseDetails:w[y]};if(!v.some(C=>C.courseCode===T.courseCode&&C.courseDetails===T.courseDetails)){for(const C of v)if(p(T,C)){m.push(T);break}}}a(m)},_=(v,w)=>{s.some(p=>p.courseCode===v)?o(s.filter(p=>p.courseCode!==v)):l.some(f=>f.courseCode===v)||o([...s,{courseCode:v,courseDetails:w}])};return x.useEffect(()=>{e&&e.courses&&g(s,e.courses,Gw)},[s,e]),N.jsxs("div",{children:[N.jsxs("div",{className:lt.topbar,children:[N.jsx(AN,{selectedTerm:r,setSelectedTerm:i}),N.jsx(DN,{openModal:d}),u&&N.jsx(ON,{open:u,close:h,children:s})]}),e&&e.courses?N.jsx("div",{className:lt.courses,children:Object.entries(e.courses).filter(([v,w])=>w.term===r).map(([v,w])=>N.jsx(SN,{courseCode:v,courseDetails:w,selected:s,toggleSelected:_,conflicted:l},v))}):N.jsx("p",{children:"Loading..."})]})},LN="_button_vuuw8_1",Xv={button:LN},bN=()=>N.jsx("button",{className:Xv.button,onClick:W1,children:"Sign in"}),FN=()=>N.jsx("button",{className:Xv.button,onClick:B1,children:"Sign out"}),UN=()=>{const[t]=Hv();return t?N.jsx(FN,{}):N.jsx(bN,{})},jN=()=>N.jsx("nav",{children:N.jsx(UN,{})});class Al{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){const n={listener:e};return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const Bd=typeof window>"u"||"Deno"in window;function rt(){}function zN(t,e){return typeof t=="function"?t(e):t}function WN(t){return typeof t=="number"&&t>=0&&t!==1/0}function BN(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Bs(t,e,n){return Dl(t)?typeof e=="function"?{...n,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function qt(t,e,n){return Dl(t)?[{...e,queryKey:t},n]:[t||{},e]}function vp(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:l}=t;if(Dl(o)){if(r){if(e.queryHash!==Vd(o,e.options))return!1}else if(!Zo(e.queryKey,o))return!1}if(n!=="all"){const a=e.isActive();if(n==="active"&&!a||n==="inactive"&&a)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||typeof i<"u"&&i!==e.state.fetchStatus||s&&!s(e))}function yp(t,e){const{exact:n,fetching:r,predicate:i,mutationKey:s}=t;if(Dl(s)){if(!e.options.mutationKey)return!1;if(n){if(bn(e.options.mutationKey)!==bn(s))return!1}else if(!Zo(e.options.mutationKey,s))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function Vd(t,e){return((e==null?void 0:e.queryKeyHashFn)||bn)(t)}function bn(t){return JSON.stringify(t,(e,n)=>Vu(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Zo(t,e){return Jv(t,e)}function Jv(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!Jv(t[n],e[n])):!1}function Zv(t,e){if(t===e)return t;const n=wp(t)&&wp(e);if(n||Vu(t)&&Vu(e)){const r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),s=i.length,o=n?[]:{};let l=0;for(let a=0;a<s;a++){const u=n?a:i[a];o[u]=Zv(t[u],e[u]),o[u]===t[u]&&l++}return r===s&&l===r?t:o}return e}function wp(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Vu(t){if(!Ep(t))return!1;const e=t.constructor;if(typeof e>"u")return!0;const n=e.prototype;return!(!Ep(n)||!n.hasOwnProperty("isPrototypeOf"))}function Ep(t){return Object.prototype.toString.call(t)==="[object Object]"}function Dl(t){return Array.isArray(t)}function ey(t){return new Promise(e=>{setTimeout(e,t)})}function Cp(t){ey(0).then(t)}function VN(){if(typeof AbortController=="function")return new AbortController}function HN(t,e,n){return n.isDataEqual!=null&&n.isDataEqual(t,e)?t:typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?Zv(t,e):e}class $N extends Al{constructor(){super(),this.setup=e=>{if(!Bd&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const Hu=new $N,Sp=["online","offline"];class qN extends Al{constructor(){super(),this.setup=e=>{if(!Bd&&window.addEventListener){const n=()=>e();return Sp.forEach(r=>{window.addEventListener(r,n,!1)}),()=>{Sp.forEach(r=>{window.removeEventListener(r,n)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const el=new qN;function GN(t){return Math.min(1e3*2**t,3e4)}function Hd(t){return(t??"online")==="online"?el.isOnline():!0}class ty{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}}function Ia(t){return t instanceof ty}function ny(t){let e=!1,n=0,r=!1,i,s,o;const l=new Promise((w,p)=>{s=w,o=p}),a=w=>{r||(g(new ty(w)),t.abort==null||t.abort())},u=()=>{e=!0},c=()=>{e=!1},d=()=>!Hu.isFocused()||t.networkMode!=="always"&&!el.isOnline(),h=w=>{r||(r=!0,t.onSuccess==null||t.onSuccess(w),i==null||i(),s(w))},g=w=>{r||(r=!0,t.onError==null||t.onError(w),i==null||i(),o(w))},_=()=>new Promise(w=>{i=p=>{const f=r||!d();return f&&w(p),f},t.onPause==null||t.onPause()}).then(()=>{i=void 0,r||t.onContinue==null||t.onContinue()}),v=()=>{if(r)return;let w;try{w=t.fn()}catch(p){w=Promise.reject(p)}Promise.resolve(w).then(h).catch(p=>{var f,m;if(r)return;const y=(f=t.retry)!=null?f:3,T=(m=t.retryDelay)!=null?m:GN,C=typeof T=="function"?T(n,p):T,S=y===!0||typeof y=="number"&&n<y||typeof y=="function"&&y(n,p);if(e||!S){g(p);return}n++,t.onFail==null||t.onFail(n,p),ey(C).then(()=>{if(d())return _()}).then(()=>{e?g(p):v()})})};return Hd(t.networkMode)?v():_().then(v),{promise:l,cancel:a,continue:()=>(i==null?void 0:i())?l:Promise.resolve(),cancelRetry:u,continueRetry:c}}const $d=console;function KN(){let t=[],e=0,n=c=>{c()},r=c=>{c()};const i=c=>{let d;e++;try{d=c()}finally{e--,e||l()}return d},s=c=>{e?t.push(c):Cp(()=>{n(c)})},o=c=>(...d)=>{s(()=>{c(...d)})},l=()=>{const c=t;t=[],c.length&&Cp(()=>{r(()=>{c.forEach(d=>{n(d)})})})};return{batch:i,batchCalls:o,schedule:s,setNotifyFunction:c=>{n=c},setBatchNotifyFunction:c=>{r=c}}}const Pe=KN();class ry{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),WN(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,e??(Bd?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class QN extends ry{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||$d,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||YN(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(e,n){const r=HN(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){this.dispatch({type:"setState",state:e,setStateOptions:n})}cancel(e){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(e),r?r.then(rt).catch(rt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!BN(this.state.dataUpdatedAt,e)}onFocus(){var e;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}onOnline(){var e;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var s;return(s=this.retryer)==null||s.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){const g=this.observers.find(_=>_.options.queryFn);g&&this.setOptions(g.options)}const o=VN(),l={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},a=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};a(l);const u=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(l)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),c={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:u};if(a(c),(r=this.options.behavior)==null||r.onFetch(c),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=c.fetchOptions)==null?void 0:i.meta)){var d;this.dispatch({type:"fetch",meta:(d=c.fetchOptions)==null?void 0:d.meta})}const h=g=>{if(Ia(g)&&g.silent||this.dispatch({type:"error",error:g}),!Ia(g)){var _,v,w,p;(_=(v=this.cache.config).onError)==null||_.call(v,g,this),(w=(p=this.cache.config).onSettled)==null||w.call(p,this.state.data,g,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=ny({fn:c.fetchFn,abort:o==null?void 0:o.abort.bind(o),onSuccess:g=>{var _,v,w,p;if(typeof g>"u"){h(new Error(this.queryHash+" data is undefined"));return}this.setData(g),(_=(v=this.cache.config).onSuccess)==null||_.call(v,g,this),(w=(p=this.cache.config).onSettled)==null||w.call(p,g,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:h,onFail:(g,_)=>{this.dispatch({type:"failed",failureCount:g,error:_})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){const n=r=>{var i,s;switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=e.meta)!=null?i:null,fetchStatus:Hd(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(s=e.dataUpdatedAt)!=null?s:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=e.error;return Ia(o)&&o.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),Pe.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}function YN(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=typeof e<"u",r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class XN extends Al{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,n,r){var i;const s=n.queryKey,o=(i=n.queryHash)!=null?i:Vd(s,n);let l=this.get(o);return l||(l=new QN({cache:this,logger:e.getLogger(),queryKey:s,queryHash:o,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(s)}),this.add(l)),l}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const n=this.queriesMap[e.queryHash];n&&(e.destroy(),this.queries=this.queries.filter(r=>r!==e),n===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){Pe.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,n){const[r]=qt(e,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>vp(r,i))}findAll(e,n){const[r]=qt(e,n);return Object.keys(r).length>0?this.queries.filter(i=>vp(r,i)):this.queries}notify(e){Pe.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}onFocus(){Pe.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){Pe.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class JN extends ry{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||$d,this.observers=[],this.state=e.state||ZN(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(n=>n!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,n;return(e=(n=this.retryer)==null?void 0:n.continue())!=null?e:this.execute()}async execute(){const e=()=>{var S;return this.retryer=ny({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(k,j)=>{this.dispatch({type:"failed",failureCount:k,error:j})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(S=this.options.retry)!=null?S:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,s,o,l,a,u,c;if(!n){var d,h,g,_;this.dispatch({type:"loading",variables:this.options.variables}),await((d=(h=this.mutationCache.config).onMutate)==null?void 0:d.call(h,this.state.variables,this));const k=await((g=(_=this.options).onMutate)==null?void 0:g.call(_,this.state.variables));k!==this.state.context&&this.dispatch({type:"loading",context:k,variables:this.state.variables})}const S=await e();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,S,this.state.variables,this.state.context,this)),await((s=(o=this.options).onSuccess)==null?void 0:s.call(o,S,this.state.variables,this.state.context)),await((l=(a=this.mutationCache.config).onSettled)==null?void 0:l.call(a,S,null,this.state.variables,this.state.context,this)),await((u=(c=this.options).onSettled)==null?void 0:u.call(c,S,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:S}),S}catch(S){try{var v,w,p,f,m,y,T,C;throw await((v=(w=this.mutationCache.config).onError)==null?void 0:v.call(w,S,this.state.variables,this.state.context,this)),await((p=(f=this.options).onError)==null?void 0:p.call(f,S,this.state.variables,this.state.context)),await((m=(y=this.mutationCache.config).onSettled)==null?void 0:m.call(y,void 0,S,this.state.variables,this.state.context,this)),await((T=(C=this.options).onSettled)==null?void 0:T.call(C,void 0,S,this.state.variables,this.state.context)),S}finally{this.dispatch({type:"error",error:S})}}}dispatch(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Hd(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...r,...e.state}}};this.state=n(this.state),Pe.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function ZN(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class eP extends Al{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,n,r){const i=new JN({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?e.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(n=>n!==e),this.notify({type:"removed",mutation:e})}clear(){Pe.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(n=>yp(e,n))}findAll(e){return this.mutations.filter(n=>yp(e,n))}notify(e){Pe.batch(()=>{this.listeners.forEach(({listener:n})=>{n(e)})})}resumePausedMutations(){var e;return this.resuming=((e=this.resuming)!=null?e:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return Pe.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(rt)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function tP(){return{onFetch:t=>{t.fetchFn=()=>{var e,n,r,i,s,o;const l=(e=t.fetchOptions)==null||(n=e.meta)==null?void 0:n.refetchPage,a=(r=t.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,u=a==null?void 0:a.pageParam,c=(a==null?void 0:a.direction)==="forward",d=(a==null?void 0:a.direction)==="backward",h=((s=t.state.data)==null?void 0:s.pages)||[],g=((o=t.state.data)==null?void 0:o.pageParams)||[];let _=g,v=!1;const w=C=>{Object.defineProperty(C,"signal",{enumerable:!0,get:()=>{var S;if((S=t.signal)!=null&&S.aborted)v=!0;else{var k;(k=t.signal)==null||k.addEventListener("abort",()=>{v=!0})}return t.signal}})},p=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),f=(C,S,k,j)=>(_=j?[S,..._]:[..._,S],j?[k,...C]:[...C,k]),m=(C,S,k,j)=>{if(v)return Promise.reject("Cancelled");if(typeof k>"u"&&!S&&C.length)return Promise.resolve(C);const D={queryKey:t.queryKey,pageParam:k,meta:t.options.meta};w(D);const ke=p(D);return Promise.resolve(ke).then(En=>f(C,k,En,j))};let y;if(!h.length)y=m([]);else if(c){const C=typeof u<"u",S=C?u:Ip(t.options,h);y=m(h,C,S)}else if(d){const C=typeof u<"u",S=C?u:nP(t.options,h);y=m(h,C,S,!0)}else{_=[];const C=typeof t.options.getNextPageParam>"u";y=(l&&h[0]?l(h[0],0,h):!0)?m([],C,g[0]):Promise.resolve(f([],g[0],h[0]));for(let k=1;k<h.length;k++)y=y.then(j=>{if(l&&h[k]?l(h[k],k,h):!0){const ke=C?g[k]:Ip(t.options,j);return m(j,C,ke)}return Promise.resolve(f(j,g[k],h[k]))})}return y.then(C=>({pages:C,pageParams:_}))}}}}function Ip(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function nP(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}class rP{constructor(e={}){this.queryCache=e.queryCache||new XN,this.mutationCache=e.mutationCache||new eP,this.logger=e.logger||$d,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=Hu.subscribe(()=>{Hu.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=el.subscribe(()=>{el.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,n;this.mountCount--,this.mountCount===0&&((e=this.unsubscribeFocus)==null||e.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(e,n){const[r]=qt(e,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state.data}ensureQueryData(e,n,r){const i=Bs(e,n,r),s=this.getQueryData(i.queryKey);return s?Promise.resolve(s):this.fetchQuery(i)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(e,n,r){const i=this.queryCache.find(e),s=i==null?void 0:i.state.data,o=zN(n,s);if(typeof o>"u")return;const l=Bs(e),a=this.defaultQueryOptions(l);return this.queryCache.build(this,a).setData(o,{...r,manual:!0})}setQueriesData(e,n,r){return Pe.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(e,n){var r;return(r=this.queryCache.find(e,n))==null?void 0:r.state}removeQueries(e,n){const[r]=qt(e,n),i=this.queryCache;Pe.batch(()=>{i.findAll(r).forEach(s=>{i.remove(s)})})}resetQueries(e,n,r){const[i,s]=qt(e,n,r),o=this.queryCache,l={type:"active",...i};return Pe.batch(()=>(o.findAll(i).forEach(a=>{a.reset()}),this.refetchQueries(l,s)))}cancelQueries(e,n,r){const[i,s={}]=qt(e,n,r);typeof s.revert>"u"&&(s.revert=!0);const o=Pe.batch(()=>this.queryCache.findAll(i).map(l=>l.cancel(s)));return Promise.all(o).then(rt).catch(rt)}invalidateQueries(e,n,r){const[i,s]=qt(e,n,r);return Pe.batch(()=>{var o,l;if(this.queryCache.findAll(i).forEach(u=>{u.invalidate()}),i.refetchType==="none")return Promise.resolve();const a={...i,type:(o=(l=i.refetchType)!=null?l:i.type)!=null?o:"active"};return this.refetchQueries(a,s)})}refetchQueries(e,n,r){const[i,s]=qt(e,n,r),o=Pe.batch(()=>this.queryCache.findAll(i).filter(a=>!a.isDisabled()).map(a=>{var u;return a.fetch(void 0,{...s,cancelRefetch:(u=s==null?void 0:s.cancelRefetch)!=null?u:!0,meta:{refetchPage:i.refetchPage}})}));let l=Promise.all(o).then(rt);return s!=null&&s.throwOnError||(l=l.catch(rt)),l}fetchQuery(e,n,r){const i=Bs(e,n,r),s=this.defaultQueryOptions(i);typeof s.retry>"u"&&(s.retry=!1);const o=this.queryCache.build(this,s);return o.isStaleByTime(s.staleTime)?o.fetch(s):Promise.resolve(o.state.data)}prefetchQuery(e,n,r){return this.fetchQuery(e,n,r).then(rt).catch(rt)}fetchInfiniteQuery(e,n,r){const i=Bs(e,n,r);return i.behavior=tP(),this.fetchQuery(i)}prefetchInfiniteQuery(e,n,r){return this.fetchInfiniteQuery(e,n,r).then(rt).catch(rt)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,n){const r=this.queryDefaults.find(i=>bn(e)===bn(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:e,defaultOptions:n})}getQueryDefaults(e){if(!e)return;const n=this.queryDefaults.find(r=>Zo(e,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(e,n){const r=this.mutationDefaults.find(i=>bn(e)===bn(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:e,defaultOptions:n})}getMutationDefaults(e){if(!e)return;const n=this.mutationDefaults.find(r=>Zo(e,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const n={...this.defaultOptions.queries,...this.getQueryDefaults(e==null?void 0:e.queryKey),...e,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=Vd(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(e==null?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}const Tp=x.createContext(void 0),iP=x.createContext(!1);function sP(t,e){return t||(e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Tp),window.ReactQueryClientContext):Tp)}const oP=({client:t,children:e,context:n,contextSharing:r=!1})=>{x.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);const i=sP(n,r);return x.createElement(iP.Provider,{value:!n&&r},x.createElement(i.Provider,{value:t},e))},lP=new rP,aP="CS Courses for 2018-2019",uP=()=>N.jsx(x.Fragment,{children:N.jsx(dN,{children:N.jsxs(oP,{client:lP,children:[N.jsx(Lw,{title:aP}),N.jsx(jN,{}),N.jsx(MN,{})]})})}),cP=Ta.createRoot(document.getElementById("root"));cP.render(N.jsx(Lp.StrictMode,{children:N.jsx(uP,{})}));
