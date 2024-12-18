var k_=Object.defineProperty;var B_=(r,e,t)=>e in r?k_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Xp=(r,e,t)=>B_(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function lg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Rc={exports:{}},Oo={},Pc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function z_(){if(jp)return dt;jp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(N,ie,De){this.props=N,this.context=ie,this.refs=T,this.updater=De||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,ie){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ie,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=y.prototype;function b(N,ie,De){this.props=N,this.context=ie,this.refs=T,this.updater=De||S}var L=b.prototype=new _;L.constructor=b,E(L,y.prototype),L.isPureReactComponent=!0;var P=Array.isArray,z=Object.prototype.hasOwnProperty,F={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function V(N,ie,De){var Y,fe={},ye=null,xe=null;if(ie!=null)for(Y in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(ye=""+ie.key),ie)z.call(ie,Y)&&!I.hasOwnProperty(Y)&&(fe[Y]=ie[Y]);var we=arguments.length-2;if(we===1)fe.children=De;else if(1<we){for(var Ne=Array(we),Je=0;Je<we;Je++)Ne[Je]=arguments[Je+2];fe.children=Ne}if(N&&N.defaultProps)for(Y in we=N.defaultProps,we)fe[Y]===void 0&&(fe[Y]=we[Y]);return{$$typeof:r,type:N,key:ye,ref:xe,props:fe,_owner:F.current}}function R(N,ie){return{$$typeof:r,type:N.type,key:ie,ref:N.ref,props:N.props,_owner:N._owner}}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function O(N){var ie={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(De){return ie[De]})}var J=/\/+/g;function Q(N,ie){return typeof N=="object"&&N!==null&&N.key!=null?O(""+N.key):ie.toString(36)}function se(N,ie,De,Y,fe){var ye=typeof N;(ye==="undefined"||ye==="boolean")&&(N=null);var xe=!1;if(N===null)xe=!0;else switch(ye){case"string":case"number":xe=!0;break;case"object":switch(N.$$typeof){case r:case e:xe=!0}}if(xe)return xe=N,fe=fe(xe),N=Y===""?"."+Q(xe,0):Y,P(fe)?(De="",N!=null&&(De=N.replace(J,"$&/")+"/"),se(fe,ie,De,"",function(Je){return Je})):fe!=null&&(C(fe)&&(fe=R(fe,De+(!fe.key||xe&&xe.key===fe.key?"":(""+fe.key).replace(J,"$&/")+"/")+N)),ie.push(fe)),1;if(xe=0,Y=Y===""?".":Y+":",P(N))for(var we=0;we<N.length;we++){ye=N[we];var Ne=Y+Q(ye,we);xe+=se(ye,ie,De,Ne,fe)}else if(Ne=v(N),typeof Ne=="function")for(N=Ne.call(N),we=0;!(ye=N.next()).done;)ye=ye.value,Ne=Y+Q(ye,we++),xe+=se(ye,ie,De,Ne,fe);else if(ye==="object")throw ie=String(N),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function le(N,ie,De){if(N==null)return N;var Y=[],fe=0;return se(N,Y,"","",function(ye){return ie.call(De,ye,fe++)}),Y}function ne(N){if(N._status===-1){var ie=N._result;ie=ie(),ie.then(function(De){(N._status===0||N._status===-1)&&(N._status=1,N._result=De)},function(De){(N._status===0||N._status===-1)&&(N._status=2,N._result=De)}),N._status===-1&&(N._status=0,N._result=ie)}if(N._status===1)return N._result.default;throw N._result}var ue={current:null},k={transition:null},ce={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:k,ReactCurrentOwner:F};function oe(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:le,forEach:function(N,ie,De){le(N,function(){ie.apply(this,arguments)},De)},count:function(N){var ie=0;return le(N,function(){ie++}),ie},toArray:function(N){return le(N,function(ie){return ie})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},dt.Component=y,dt.Fragment=t,dt.Profiler=a,dt.PureComponent=b,dt.StrictMode=s,dt.Suspense=p,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,dt.act=oe,dt.cloneElement=function(N,ie,De){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Y=E({},N.props),fe=N.key,ye=N.ref,xe=N._owner;if(ie!=null){if(ie.ref!==void 0&&(ye=ie.ref,xe=F.current),ie.key!==void 0&&(fe=""+ie.key),N.type&&N.type.defaultProps)var we=N.type.defaultProps;for(Ne in ie)z.call(ie,Ne)&&!I.hasOwnProperty(Ne)&&(Y[Ne]=ie[Ne]===void 0&&we!==void 0?we[Ne]:ie[Ne])}var Ne=arguments.length-2;if(Ne===1)Y.children=De;else if(1<Ne){we=Array(Ne);for(var Je=0;Je<Ne;Je++)we[Je]=arguments[Je+2];Y.children=we}return{$$typeof:r,type:N.type,key:fe,ref:ye,props:Y,_owner:xe}},dt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},dt.createElement=V,dt.createFactory=function(N){var ie=V.bind(null,N);return ie.type=N,ie},dt.createRef=function(){return{current:null}},dt.forwardRef=function(N){return{$$typeof:f,render:N}},dt.isValidElement=C,dt.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:ne}},dt.memo=function(N,ie){return{$$typeof:h,type:N,compare:ie===void 0?null:ie}},dt.startTransition=function(N){var ie=k.transition;k.transition={};try{N()}finally{k.transition=ie}},dt.unstable_act=oe,dt.useCallback=function(N,ie){return ue.current.useCallback(N,ie)},dt.useContext=function(N){return ue.current.useContext(N)},dt.useDebugValue=function(){},dt.useDeferredValue=function(N){return ue.current.useDeferredValue(N)},dt.useEffect=function(N,ie){return ue.current.useEffect(N,ie)},dt.useId=function(){return ue.current.useId()},dt.useImperativeHandle=function(N,ie,De){return ue.current.useImperativeHandle(N,ie,De)},dt.useInsertionEffect=function(N,ie){return ue.current.useInsertionEffect(N,ie)},dt.useLayoutEffect=function(N,ie){return ue.current.useLayoutEffect(N,ie)},dt.useMemo=function(N,ie){return ue.current.useMemo(N,ie)},dt.useReducer=function(N,ie,De){return ue.current.useReducer(N,ie,De)},dt.useRef=function(N){return ue.current.useRef(N)},dt.useState=function(N){return ue.current.useState(N)},dt.useSyncExternalStore=function(N,ie,De){return ue.current.useSyncExternalStore(N,ie,De)},dt.useTransition=function(){return ue.current.useTransition()},dt.version="18.3.1",dt}var qp;function sd(){return qp||(qp=1,Pc.exports=z_()),Pc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function H_(){if($p)return Oo;$p=1;var r=sd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,h){var m,x={},v=null,S=null;h!==void 0&&(v=""+h),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(S=p.ref);for(m in p)s.call(p,m)&&!l.hasOwnProperty(m)&&(x[m]=p[m]);if(f&&f.defaultProps)for(m in p=f.defaultProps,p)x[m]===void 0&&(x[m]=p[m]);return{$$typeof:e,type:f,key:v,ref:S,props:x,_owner:a.current}}return Oo.Fragment=t,Oo.jsx=c,Oo.jsxs=c,Oo}var Yp;function V_(){return Yp||(Yp=1,Rc.exports=H_()),Rc.exports}var Ve=V_(),de=sd();const Dn=lg(de);var cl={},bc={exports:{}},bn={},Lc={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function G_(){return Kp||(Kp=1,function(r){function e(k,ce){var oe=k.length;k.push(ce);e:for(;0<oe;){var N=oe-1>>>1,ie=k[N];if(0<a(ie,ce))k[N]=ce,k[oe]=ie,oe=N;else break e}}function t(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var ce=k[0],oe=k.pop();if(oe!==ce){k[0]=oe;e:for(var N=0,ie=k.length,De=ie>>>1;N<De;){var Y=2*(N+1)-1,fe=k[Y],ye=Y+1,xe=k[ye];if(0>a(fe,oe))ye<ie&&0>a(xe,fe)?(k[N]=xe,k[ye]=oe,N=ye):(k[N]=fe,k[Y]=oe,N=Y);else if(ye<ie&&0>a(xe,oe))k[N]=xe,k[ye]=oe,N=ye;else break e}}return ce}function a(k,ce){var oe=k.sortIndex-ce.sortIndex;return oe!==0?oe:k.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],h=[],m=1,x=null,v=3,S=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(k){for(var ce=t(h);ce!==null;){if(ce.callback===null)s(h);else if(ce.startTime<=k)s(h),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=t(h)}}function P(k){if(T=!1,L(k),!E)if(t(p)!==null)E=!0,ne(z);else{var ce=t(h);ce!==null&&ue(P,ce.startTime-k)}}function z(k,ce){E=!1,T&&(T=!1,_(V),V=-1),S=!0;var oe=v;try{for(L(ce),x=t(p);x!==null&&(!(x.expirationTime>ce)||k&&!O());){var N=x.callback;if(typeof N=="function"){x.callback=null,v=x.priorityLevel;var ie=N(x.expirationTime<=ce);ce=r.unstable_now(),typeof ie=="function"?x.callback=ie:x===t(p)&&s(p),L(ce)}else s(p);x=t(p)}if(x!==null)var De=!0;else{var Y=t(h);Y!==null&&ue(P,Y.startTime-ce),De=!1}return De}finally{x=null,v=oe,S=!1}}var F=!1,I=null,V=-1,R=5,C=-1;function O(){return!(r.unstable_now()-C<R)}function J(){if(I!==null){var k=r.unstable_now();C=k;var ce=!0;try{ce=I(!0,k)}finally{ce?Q():(F=!1,I=null)}}else F=!1}var Q;if(typeof b=="function")Q=function(){b(J)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,le=se.port2;se.port1.onmessage=J,Q=function(){le.postMessage(null)}}else Q=function(){y(J,0)};function ne(k){I=k,F||(F=!0,Q())}function ue(k,ce){V=y(function(){k(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,ne(z))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(k){switch(v){case 1:case 2:case 3:var ce=3;break;default:ce=v}var oe=v;v=ce;try{return k()}finally{v=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,ce){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var oe=v;v=k;try{return ce()}finally{v=oe}},r.unstable_scheduleCallback=function(k,ce,oe){var N=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?N+oe:N):oe=N,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=oe+ie,k={id:m++,callback:ce,priorityLevel:k,startTime:oe,expirationTime:ie,sortIndex:-1},oe>N?(k.sortIndex=oe,e(h,k),t(p)===null&&k===t(h)&&(T?(_(V),V=-1):T=!0,ue(P,oe-N))):(k.sortIndex=ie,e(p,k),E||S||(E=!0,ne(z))),k},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(k){var ce=v;return function(){var oe=v;v=ce;try{return k.apply(this,arguments)}finally{v=oe}}}}(Dc)),Dc}var Zp;function W_(){return Zp||(Zp=1,Lc.exports=G_()),Lc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function X_(){if(Qp)return bn;Qp=1;var r=sd(),e=W_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},x={};function v(n){return p.call(x,n)?!0:p.call(m,n)?!1:h.test(n)?x[n]=!0:(m[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,o,u,d,g,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,b);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,b);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,b);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,u)&&(o=null),u||d===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),F=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),O=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),k=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,N;function ie(n){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var De=!1;function Y(n,i){if(!n||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var u=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){u=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){u=ee}n()}}catch(ee){if(ee&&u&&typeof ee.stack=="string"){for(var d=ee.stack.split(`
`),g=u.stack.split(`
`),M=d.length-1,U=g.length-1;1<=M&&0<=U&&d[M]!==g[U];)U--;for(;1<=M&&0<=U;M--,U--)if(d[M]!==g[U]){if(M!==1||U!==1)do if(M--,U--,0>U||d[M]!==g[U]){var B=`
`+d[M].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=M&&0<=U);break}}}finally{De=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ie(n):""}function fe(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case F:return"Portal";case R:return"Profiler";case V:return"StrictMode";case Q:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case J:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case le:return i=n.displayName||null,i!==null?i:ye(n.type)||"Memo";case ne:i=n._payload,n=n._init;try{return ye(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(n){var i=Ne(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,g.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Pt(n){n._valueTracker||(n._valueTracker=Je(n))}function mt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ne(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function H(n,i){var o=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function vn(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ct(n,i){ht(n,i);var o=we(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Rt(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function $e(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Rt(n,i,o){(i!=="number"||Ut(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var je=Array.isArray;function D(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function w(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(je(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:we(o)}}function me(n,i){var o=we(i.value),u=we(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Fe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ut(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function Ke(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Ke(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var ze=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ce=null,ae=null,pe=null;function Le(n){if(n=Eo(n)){if(typeof Ce!="function")throw Error(t(280));var i=n.stateNode;i&&(i=wa(i),Ce(n.stateNode,n.type,i))}}function be(n){ae?pe?pe.push(n):pe=[n]:ae=n}function st(){if(ae){var n=ae,i=pe;if(pe=ae=null,Le(n),i)for(n=0;n<i.length;n++)Le(i[n])}}function Nt(n,i){return n(i)}function Kt(){}var xt=!1;function Tn(n,i,o){if(xt)return n(i,o);xt=!0;try{return Nt(n,i,o)}finally{xt=!1,(ae!==null||pe!==null)&&(Kt(),st())}}function _n(n,i){var o=n.stateNode;if(o===null)return null;var u=wa(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ss=!1;if(f)try{var $i={};Object.defineProperty($i,"passive",{get:function(){ss=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{ss=!1}function Mi(n,i,o,u,d,g,M,U,B){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(_e){this.onError(_e)}}var Ti=!1,Cr=null,Rr=!1,Yi=null,ra={onError:function(n){Ti=!0,Cr=n}};function os(n,i,o,u,d,g,M,U,B){Ti=!1,Cr=null,Mi.apply(ra,arguments)}function sa(n,i,o,u,d,g,M,U,B){if(os.apply(this,arguments),Ti){if(Ti){var ee=Cr;Ti=!1,Cr=null}else throw Error(t(198));Rr||(Rr=!0,Yi=ee)}}function hi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function oa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function aa(n){if(hi(n)!==n)throw Error(t(188))}function Zl(n){var i=n.alternate;if(!i){if(i=hi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var g=d.alternate;if(g===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===o)return aa(d),n;if(g===u)return aa(d),i;g=g.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=g;else{for(var M=!1,U=d.child;U;){if(U===o){M=!0,o=d,u=g;break}if(U===u){M=!0,u=d,o=g;break}U=U.sibling}if(!M){for(U=g.child;U;){if(U===o){M=!0,o=g,u=d;break}if(U===u){M=!0,u=g,o=d;break}U=U.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function la(n){return n=Zl(n),n!==null?ua(n):null}function ua(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ua(n);if(i!==null)return i;n=n.sibling}return null}var A=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,te=e.unstable_shouldYield,re=e.unstable_requestPaint,G=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Ie=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,tt=e.unstable_LowPriority,nt=e.unstable_IdlePriority,qe=null,ot=null;function Et(n){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(qe,n,void 0,(n.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Ye,kt=Math.log,_t=Math.LN2;function Ye(n){return n>>>=0,n===0?32:31-(kt(n)/_t|0)|0}var Wt=64,gt=4194304;function on(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Qn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,g=n.pingedLanes,M=o&268435455;if(M!==0){var U=M&~d;U!==0?u=on(U):(g&=M,g!==0&&(u=on(g)))}else M=o&~d,M!==0?u=on(M):g!==0&&(u=on(g));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if(u&4&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Mt(i),d=1<<o,u|=n[o],i&=~d;return u}function xn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pr(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var M=31-Mt(g),U=1<<M,B=d[M];B===-1?(!(U&o)||U&u)&&(d[M]=xn(U,i)):B<=i&&(n.expiredLanes|=U),g&=~U}}function bt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function yn(){var n=Wt;return Wt<<=1,!(Wt&4194240)&&(Wt=64),n}function un(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function jt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Mt(i),n[i]=o}function cn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Mt(o),g=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~g}}function br(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Mt(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var pt=0;function Md(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Td,Ql,wd,Ad,Cd,Jl=!1,ca=[],Ki=null,Zi=null,Qi=null,so=new Map,oo=new Map,Ji=[],ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rd(n,i){switch(n){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(n,i,o,u,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Eo(i),i!==null&&Ql(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function av(n,i,o,u,d){switch(i){case"focusin":return Ki=ao(Ki,n,i,o,u,d),!0;case"dragenter":return Zi=ao(Zi,n,i,o,u,d),!0;case"mouseover":return Qi=ao(Qi,n,i,o,u,d),!0;case"pointerover":var g=d.pointerId;return so.set(g,ao(so.get(g)||null,n,i,o,u,d)),!0;case"gotpointercapture":return g=d.pointerId,oo.set(g,ao(oo.get(g)||null,n,i,o,u,d)),!0}return!1}function Pd(n){var i=Lr(n.target);if(i!==null){var o=hi(i);if(o!==null){if(i=o.tag,i===13){if(i=oa(o),i!==null){n.blockedOn=i,Cd(n.priority,function(){wd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=tu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Ct=u,o.target.dispatchEvent(u),Ct=null}else return i=Eo(o),i!==null&&Ql(i),n.blockedOn=o,!1;i.shift()}return!0}function bd(n,i,o){fa(n)&&o.delete(i)}function lv(){Jl=!1,Ki!==null&&fa(Ki)&&(Ki=null),Zi!==null&&fa(Zi)&&(Zi=null),Qi!==null&&fa(Qi)&&(Qi=null),so.forEach(bd),oo.forEach(bd)}function lo(n,i){n.blockedOn===i&&(n.blockedOn=null,Jl||(Jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lv)))}function uo(n){function i(d){return lo(d,n)}if(0<ca.length){lo(ca[0],n);for(var o=1;o<ca.length;o++){var u=ca[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Ki!==null&&lo(Ki,n),Zi!==null&&lo(Zi,n),Qi!==null&&lo(Qi,n),so.forEach(i),oo.forEach(i),o=0;o<Ji.length;o++)u=Ji[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Ji.length&&(o=Ji[0],o.blockedOn===null);)Pd(o),o.blockedOn===null&&Ji.shift()}var as=P.ReactCurrentBatchConfig,da=!0;function uv(n,i,o,u){var d=pt,g=as.transition;as.transition=null;try{pt=1,eu(n,i,o,u)}finally{pt=d,as.transition=g}}function cv(n,i,o,u){var d=pt,g=as.transition;as.transition=null;try{pt=4,eu(n,i,o,u)}finally{pt=d,as.transition=g}}function eu(n,i,o,u){if(da){var d=tu(n,i,o,u);if(d===null)_u(n,i,u,ha,o),Rd(n,u);else if(av(d,n,i,o,u))u.stopPropagation();else if(Rd(n,u),i&4&&-1<ov.indexOf(n)){for(;d!==null;){var g=Eo(d);if(g!==null&&Td(g),g=tu(n,i,o,u),g===null&&_u(n,i,u,ha,o),g===d)break;d=g}d!==null&&u.stopPropagation()}else _u(n,i,u,null,o)}}var ha=null;function tu(n,i,o,u){if(ha=null,n=X(u),n=Lr(n),n!==null)if(i=hi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=oa(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ha=n,null}function Ld(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case Re:return 1;case Ie:return 4;case Oe:case tt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var er=null,nu=null,pa=null;function Dd(){if(pa)return pa;var n,i=nu,o=i.length,u,d="value"in er?er.value:er.textContent,g=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===d[g-u];u++);return pa=d.slice(n,1<u?1-u:void 0)}function ma(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ga(){return!0}function Ud(){return!1}function Fn(n){function i(o,u,d,g,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=g,this.target=M,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(o=n[U],this[U]=o?o(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ga:Ud,this.isPropagationStopped=Ud,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=Fn(ls),co=oe({},ls,{view:0,detail:0}),fv=Fn(co),ru,su,fo,va=oe({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fo&&(fo&&n.type==="mousemove"?(ru=n.screenX-fo.screenX,su=n.screenY-fo.screenY):su=ru=0,fo=n),ru)},movementY:function(n){return"movementY"in n?n.movementY:su}}),Id=Fn(va),dv=oe({},va,{dataTransfer:0}),hv=Fn(dv),pv=oe({},co,{relatedTarget:0}),ou=Fn(pv),mv=oe({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),gv=Fn(mv),vv=oe({},ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_v=Fn(vv),xv=oe({},ls,{data:0}),Nd=Fn(xv),yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ev[n])?!!i[n]:!1}function au(){return Mv}var Tv=oe({},co,{key:function(n){if(n.key){var i=yv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ma(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Sv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(n){return n.type==="keypress"?ma(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ma(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wv=Fn(Tv),Av=oe({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fd=Fn(Av),Cv=oe({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),Rv=Fn(Cv),Pv=oe({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),bv=Fn(Pv),Lv=oe({},va,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dv=Fn(Lv),Uv=[9,13,27,32],lu=f&&"CompositionEvent"in window,ho=null;f&&"documentMode"in document&&(ho=document.documentMode);var Iv=f&&"TextEvent"in window&&!ho,Od=f&&(!lu||ho&&8<ho&&11>=ho),kd=" ",Bd=!1;function zd(n,i){switch(n){case"keyup":return Uv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var us=!1;function Nv(n,i){switch(n){case"compositionend":return Hd(i);case"keypress":return i.which!==32?null:(Bd=!0,kd);case"textInput":return n=i.data,n===kd&&Bd?null:n;default:return null}}function Fv(n,i){if(us)return n==="compositionend"||!lu&&zd(n,i)?(n=Dd(),pa=nu=er=null,us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Od&&i.locale!=="ko"?null:i.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ov[n.type]:i==="textarea"}function Gd(n,i,o,u){be(u),i=Ea(i,"onChange"),0<i.length&&(o=new iu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var po=null,mo=null;function kv(n){ah(n,0)}function _a(n){var i=ps(n);if(mt(i))return n}function Bv(n,i){if(n==="change")return i}var Wd=!1;if(f){var uu;if(f){var cu="oninput"in document;if(!cu){var Xd=document.createElement("div");Xd.setAttribute("oninput","return;"),cu=typeof Xd.oninput=="function"}uu=cu}else uu=!1;Wd=uu&&(!document.documentMode||9<document.documentMode)}function jd(){po&&(po.detachEvent("onpropertychange",qd),mo=po=null)}function qd(n){if(n.propertyName==="value"&&_a(mo)){var i=[];Gd(i,mo,n,X(n)),Tn(kv,i)}}function zv(n,i,o){n==="focusin"?(jd(),po=i,mo=o,po.attachEvent("onpropertychange",qd)):n==="focusout"&&jd()}function Hv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _a(mo)}function Vv(n,i){if(n==="click")return _a(i)}function Gv(n,i){if(n==="input"||n==="change")return _a(i)}function Wv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Jn=typeof Object.is=="function"?Object.is:Wv;function go(n,i){if(Jn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!p.call(i,d)||!Jn(n[d],i[d]))return!1}return!0}function $d(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Yd(n,i){var o=$d(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=$d(o)}}function Kd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Kd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Zd(){for(var n=window,i=Ut();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Ut(n.document)}return i}function fu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Xv(n){var i=Zd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Kd(o.ownerDocument.documentElement,o)){if(u!==null&&fu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,g=Math.min(u.start,d);u=u.end===void 0?g:Math.min(u.end,d),!n.extend&&g>u&&(d=u,u=g,g=d),d=Yd(o,g);var M=Yd(o,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var jv=f&&"documentMode"in document&&11>=document.documentMode,cs=null,du=null,vo=null,hu=!1;function Qd(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hu||cs==null||cs!==Ut(u)||(u=cs,"selectionStart"in u&&fu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),vo&&go(vo,u)||(vo=u,u=Ea(du,"onSelect"),0<u.length&&(i=new iu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=cs)))}function xa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var fs={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},pu={},Jd={};f&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function ya(n){if(pu[n])return pu[n];if(!fs[n])return n;var i=fs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Jd)return pu[n]=i[o];return n}var eh=ya("animationend"),th=ya("animationiteration"),nh=ya("animationstart"),ih=ya("transitionend"),rh=new Map,sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(n,i){rh.set(n,i),l(i,[n])}for(var mu=0;mu<sh.length;mu++){var gu=sh[mu],qv=gu.toLowerCase(),$v=gu[0].toUpperCase()+gu.slice(1);tr(qv,"on"+$v)}tr(eh,"onAnimationEnd"),tr(th,"onAnimationIteration"),tr(nh,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(ih,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function oh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,sa(u,i,void 0,n),n.currentTarget=null}function ah(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var M=u.length-1;0<=M;M--){var U=u[M],B=U.instance,ee=U.currentTarget;if(U=U.listener,B!==g&&d.isPropagationStopped())break e;oh(d,U,ee),g=B}else for(M=0;M<u.length;M++){if(U=u[M],B=U.instance,ee=U.currentTarget,U=U.listener,B!==g&&d.isPropagationStopped())break e;oh(d,U,ee),g=B}}}if(Rr)throw n=Yi,Rr=!1,Yi=null,n}function Ft(n,i){var o=i[Tu];o===void 0&&(o=i[Tu]=new Set);var u=n+"__bubble";o.has(u)||(lh(i,n,2,!1),o.add(u))}function vu(n,i,o){var u=0;i&&(u|=4),lh(o,n,u,i)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function xo(n){if(!n[Sa]){n[Sa]=!0,s.forEach(function(o){o!=="selectionchange"&&(Yv.has(o)||vu(o,!1,n),vu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Sa]||(i[Sa]=!0,vu("selectionchange",!1,i))}}function lh(n,i,o,u){switch(Ld(i)){case 1:var d=uv;break;case 4:d=cv;break;default:d=eu}o=d.bind(null,i,o,n),d=void 0,!ss||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function _u(n,i,o,u,d){var g=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var U=u.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;M=M.return}for(;U!==null;){if(M=Lr(U),M===null)return;if(B=M.tag,B===5||B===6){u=g=M;continue e}U=U.parentNode}}u=u.return}Tn(function(){var ee=g,_e=X(o),Se=[];e:{var ge=rh.get(n);if(ge!==void 0){var Ue=iu,He=n;switch(n){case"keypress":if(ma(o)===0)break e;case"keydown":case"keyup":Ue=wv;break;case"focusin":He="focus",Ue=ou;break;case"focusout":He="blur",Ue=ou;break;case"beforeblur":case"afterblur":Ue=ou;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=hv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=Rv;break;case eh:case th:case nh:Ue=gv;break;case ih:Ue=bv;break;case"scroll":Ue=fv;break;case"wheel":Ue=Dv;break;case"copy":case"cut":case"paste":Ue=_v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Fd}var Ge=(i&4)!==0,qt=!Ge&&n==="scroll",q=Ge?ge!==null?ge+"Capture":null:ge;Ge=[];for(var W=ee,$;W!==null;){$=W;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,q!==null&&(Te=_n(W,q),Te!=null&&Ge.push(yo(W,Te,$)))),qt)break;W=W.return}0<Ge.length&&(ge=new Ue(ge,He,null,o,_e),Se.push({event:ge,listeners:Ge}))}}if(!(i&7)){e:{if(ge=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ge&&o!==Ct&&(He=o.relatedTarget||o.fromElement)&&(Lr(He)||He[wi]))break e;if((Ue||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ue?(He=o.relatedTarget||o.toElement,Ue=ee,He=He?Lr(He):null,He!==null&&(qt=hi(He),He!==qt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=ee),Ue!==He)){if(Ge=Id,Te="onMouseLeave",q="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=Fd,Te="onPointerLeave",q="onPointerEnter",W="pointer"),qt=Ue==null?ge:ps(Ue),$=He==null?ge:ps(He),ge=new Ge(Te,W+"leave",Ue,o,_e),ge.target=qt,ge.relatedTarget=$,Te=null,Lr(_e)===ee&&(Ge=new Ge(q,W+"enter",He,o,_e),Ge.target=$,Ge.relatedTarget=qt,Te=Ge),qt=Te,Ue&&He)t:{for(Ge=Ue,q=He,W=0,$=Ge;$;$=ds($))W++;for($=0,Te=q;Te;Te=ds(Te))$++;for(;0<W-$;)Ge=ds(Ge),W--;for(;0<$-W;)q=ds(q),$--;for(;W--;){if(Ge===q||q!==null&&Ge===q.alternate)break t;Ge=ds(Ge),q=ds(q)}Ge=null}else Ge=null;Ue!==null&&uh(Se,ge,Ue,Ge,!1),He!==null&&qt!==null&&uh(Se,qt,He,Ge,!0)}}e:{if(ge=ee?ps(ee):window,Ue=ge.nodeName&&ge.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ge.type==="file")var Xe=Bv;else if(Vd(ge))if(Wd)Xe=Gv;else{Xe=Hv;var Ze=zv}else(Ue=ge.nodeName)&&Ue.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=Vv);if(Xe&&(Xe=Xe(n,ee))){Gd(Se,Xe,o,_e);break e}Ze&&Ze(n,ge,ee),n==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&Rt(ge,"number",ge.value)}switch(Ze=ee?ps(ee):window,n){case"focusin":(Vd(Ze)||Ze.contentEditable==="true")&&(cs=Ze,du=ee,vo=null);break;case"focusout":vo=du=cs=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Qd(Se,o,_e);break;case"selectionchange":if(jv)break;case"keydown":case"keyup":Qd(Se,o,_e)}var Qe;if(lu)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else us?zd(n,o)&&(it="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(Od&&o.locale!=="ko"&&(us||it!=="onCompositionStart"?it==="onCompositionEnd"&&us&&(Qe=Dd()):(er=_e,nu="value"in er?er.value:er.textContent,us=!0)),Ze=Ea(ee,it),0<Ze.length&&(it=new Nd(it,n,null,o,_e),Se.push({event:it,listeners:Ze}),Qe?it.data=Qe:(Qe=Hd(o),Qe!==null&&(it.data=Qe)))),(Qe=Iv?Nv(n,o):Fv(n,o))&&(ee=Ea(ee,"onBeforeInput"),0<ee.length&&(_e=new Nd("onBeforeInput","beforeinput",null,o,_e),Se.push({event:_e,listeners:ee}),_e.data=Qe))}ah(Se,i)})}function yo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ea(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=_n(n,o),g!=null&&u.unshift(yo(n,g,d)),g=_n(n,i),g!=null&&u.push(yo(n,g,d))),n=n.return}return u}function ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function uh(n,i,o,u,d){for(var g=i._reactName,M=[];o!==null&&o!==u;){var U=o,B=U.alternate,ee=U.stateNode;if(B!==null&&B===u)break;U.tag===5&&ee!==null&&(U=ee,d?(B=_n(o,g),B!=null&&M.unshift(yo(o,B,U))):d||(B=_n(o,g),B!=null&&M.push(yo(o,B,U)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var Kv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function ch(n){return(typeof n=="string"?n:""+n).replace(Kv,`
`).replace(Zv,"")}function Ma(n,i,o){if(i=ch(i),ch(n)!==i&&o)throw Error(t(425))}function Ta(){}var xu=null,yu=null;function Su(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,fh=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof fh<"u"?function(n){return fh.resolve(null).then(n).catch(e_)}:Eu;function e_(n){setTimeout(function(){throw n})}function Mu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),uo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);uo(i)}function nr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function dh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var hs=Math.random().toString(36).slice(2),pi="__reactFiber$"+hs,So="__reactProps$"+hs,wi="__reactContainer$"+hs,Tu="__reactEvents$"+hs,t_="__reactListeners$"+hs,n_="__reactHandles$"+hs;function Lr(n){var i=n[pi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[wi]||o[pi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=dh(n);n!==null;){if(o=n[pi])return o;n=dh(n)}return i}n=o,o=n.parentNode}return null}function Eo(n){return n=n[pi]||n[wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function wa(n){return n[So]||null}var wu=[],ms=-1;function ir(n){return{current:n}}function Ot(n){0>ms||(n.current=wu[ms],wu[ms]=null,ms--)}function It(n,i){ms++,wu[ms]=n.current,n.current=i}var rr={},fn=ir(rr),wn=ir(!1),Dr=rr;function gs(n,i){var o=n.type.contextTypes;if(!o)return rr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in o)d[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function An(n){return n=n.childContextTypes,n!=null}function Aa(){Ot(wn),Ot(fn)}function hh(n,i,o){if(fn.current!==rr)throw Error(t(168));It(fn,i),It(wn,o)}function ph(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,xe(n)||"Unknown",d));return oe({},o,u)}function Ca(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||rr,Dr=fn.current,It(fn,n),It(wn,wn.current),!0}function mh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=ph(n,i,Dr),u.__reactInternalMemoizedMergedChildContext=n,Ot(wn),Ot(fn),It(fn,n)):Ot(wn),It(wn,o)}var Ai=null,Ra=!1,Au=!1;function gh(n){Ai===null?Ai=[n]:Ai.push(n)}function i_(n){Ra=!0,gh(n)}function sr(){if(!Au&&Ai!==null){Au=!0;var n=0,i=pt;try{var o=Ai;for(pt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ai=null,Ra=!1}catch(d){throw Ai!==null&&(Ai=Ai.slice(n+1)),A(Re,sr),d}finally{pt=i,Au=!1}}return null}var vs=[],_s=0,Pa=null,ba=0,Xn=[],jn=0,Ur=null,Ci=1,Ri="";function Ir(n,i){vs[_s++]=ba,vs[_s++]=Pa,Pa=n,ba=i}function vh(n,i,o){Xn[jn++]=Ci,Xn[jn++]=Ri,Xn[jn++]=Ur,Ur=n;var u=Ci;n=Ri;var d=32-Mt(u)-1;u&=~(1<<d),o+=1;var g=32-Mt(i)+d;if(30<g){var M=d-d%5;g=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Ci=1<<32-Mt(i)+d|o<<d|u,Ri=g+n}else Ci=1<<g|o<<d|u,Ri=n}function Cu(n){n.return!==null&&(Ir(n,1),vh(n,1,0))}function Ru(n){for(;n===Pa;)Pa=vs[--_s],vs[_s]=null,ba=vs[--_s],vs[_s]=null;for(;n===Ur;)Ur=Xn[--jn],Xn[jn]=null,Ri=Xn[--jn],Xn[jn]=null,Ci=Xn[--jn],Xn[jn]=null}var On=null,kn=null,Bt=!1,ei=null;function _h(n,i){var o=Kn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function xh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,On=n,kn=nr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,On=n,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ur!==null?{id:Ci,overflow:Ri}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Kn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,On=n,kn=null,!0):!1;default:return!1}}function Pu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bu(n){if(Bt){var i=kn;if(i){var o=i;if(!xh(n,i)){if(Pu(n))throw Error(t(418));i=nr(o.nextSibling);var u=On;i&&xh(n,i)?_h(u,o):(n.flags=n.flags&-4097|2,Bt=!1,On=n)}}else{if(Pu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,On=n}}}function yh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;On=n}function La(n){if(n!==On)return!1;if(!Bt)return yh(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Su(n.type,n.memoizedProps)),i&&(i=kn)){if(Pu(n))throw Sh(),Error(t(418));for(;i;)_h(n,i),i=nr(i.nextSibling)}if(yh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){kn=nr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}kn=null}}else kn=On?nr(n.stateNode.nextSibling):null;return!0}function Sh(){for(var n=kn;n;)n=nr(n.nextSibling)}function xs(){kn=On=null,Bt=!1}function Lu(n){ei===null?ei=[n]:ei.push(n)}var r_=P.ReactCurrentBatchConfig;function Mo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(M){var U=d.refs;M===null?delete U[g]:U[g]=M},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Da(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Eh(n){var i=n._init;return i(n._payload)}function Mh(n){function i(q,W){if(n){var $=q.deletions;$===null?(q.deletions=[W],q.flags|=16):$.push(W)}}function o(q,W){if(!n)return null;for(;W!==null;)i(q,W),W=W.sibling;return null}function u(q,W){for(q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function d(q,W){return q=hr(q,W),q.index=0,q.sibling=null,q}function g(q,W,$){return q.index=$,n?($=q.alternate,$!==null?($=$.index,$<W?(q.flags|=2,W):$):(q.flags|=2,W)):(q.flags|=1048576,W)}function M(q){return n&&q.alternate===null&&(q.flags|=2),q}function U(q,W,$,Te){return W===null||W.tag!==6?(W=Ec($,q.mode,Te),W.return=q,W):(W=d(W,$),W.return=q,W)}function B(q,W,$,Te){var Xe=$.type;return Xe===I?_e(q,W,$.props.children,Te,$.key):W!==null&&(W.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ne&&Eh(Xe)===W.type)?(Te=d(W,$.props),Te.ref=Mo(q,W,$),Te.return=q,Te):(Te=nl($.type,$.key,$.props,null,q.mode,Te),Te.ref=Mo(q,W,$),Te.return=q,Te)}function ee(q,W,$,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=Mc($,q.mode,Te),W.return=q,W):(W=d(W,$.children||[]),W.return=q,W)}function _e(q,W,$,Te,Xe){return W===null||W.tag!==7?(W=Vr($,q.mode,Te,Xe),W.return=q,W):(W=d(W,$),W.return=q,W)}function Se(q,W,$){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Ec(""+W,q.mode,$),W.return=q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case z:return $=nl(W.type,W.key,W.props,null,q.mode,$),$.ref=Mo(q,null,W),$.return=q,$;case F:return W=Mc(W,q.mode,$),W.return=q,W;case ne:var Te=W._init;return Se(q,Te(W._payload),$)}if(je(W)||ce(W))return W=Vr(W,q.mode,$,null),W.return=q,W;Da(q,W)}return null}function ge(q,W,$,Te){var Xe=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:U(q,W,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case z:return $.key===Xe?B(q,W,$,Te):null;case F:return $.key===Xe?ee(q,W,$,Te):null;case ne:return Xe=$._init,ge(q,W,Xe($._payload),Te)}if(je($)||ce($))return Xe!==null?null:_e(q,W,$,Te,null);Da(q,$)}return null}function Ue(q,W,$,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get($)||null,U(W,q,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case z:return q=q.get(Te.key===null?$:Te.key)||null,B(W,q,Te,Xe);case F:return q=q.get(Te.key===null?$:Te.key)||null,ee(W,q,Te,Xe);case ne:var Ze=Te._init;return Ue(q,W,$,Ze(Te._payload),Xe)}if(je(Te)||ce(Te))return q=q.get($)||null,_e(W,q,Te,Xe,null);Da(W,Te)}return null}function He(q,W,$,Te){for(var Xe=null,Ze=null,Qe=W,it=W=0,rn=null;Qe!==null&&it<$.length;it++){Qe.index>it?(rn=Qe,Qe=null):rn=Qe.sibling;var Tt=ge(q,Qe,$[it],Te);if(Tt===null){Qe===null&&(Qe=rn);break}n&&Qe&&Tt.alternate===null&&i(q,Qe),W=g(Tt,W,it),Ze===null?Xe=Tt:Ze.sibling=Tt,Ze=Tt,Qe=rn}if(it===$.length)return o(q,Qe),Bt&&Ir(q,it),Xe;if(Qe===null){for(;it<$.length;it++)Qe=Se(q,$[it],Te),Qe!==null&&(W=g(Qe,W,it),Ze===null?Xe=Qe:Ze.sibling=Qe,Ze=Qe);return Bt&&Ir(q,it),Xe}for(Qe=u(q,Qe);it<$.length;it++)rn=Ue(Qe,q,it,$[it],Te),rn!==null&&(n&&rn.alternate!==null&&Qe.delete(rn.key===null?it:rn.key),W=g(rn,W,it),Ze===null?Xe=rn:Ze.sibling=rn,Ze=rn);return n&&Qe.forEach(function(pr){return i(q,pr)}),Bt&&Ir(q,it),Xe}function Ge(q,W,$,Te){var Xe=ce($);if(typeof Xe!="function")throw Error(t(150));if($=Xe.call($),$==null)throw Error(t(151));for(var Ze=Xe=null,Qe=W,it=W=0,rn=null,Tt=$.next();Qe!==null&&!Tt.done;it++,Tt=$.next()){Qe.index>it?(rn=Qe,Qe=null):rn=Qe.sibling;var pr=ge(q,Qe,Tt.value,Te);if(pr===null){Qe===null&&(Qe=rn);break}n&&Qe&&pr.alternate===null&&i(q,Qe),W=g(pr,W,it),Ze===null?Xe=pr:Ze.sibling=pr,Ze=pr,Qe=rn}if(Tt.done)return o(q,Qe),Bt&&Ir(q,it),Xe;if(Qe===null){for(;!Tt.done;it++,Tt=$.next())Tt=Se(q,Tt.value,Te),Tt!==null&&(W=g(Tt,W,it),Ze===null?Xe=Tt:Ze.sibling=Tt,Ze=Tt);return Bt&&Ir(q,it),Xe}for(Qe=u(q,Qe);!Tt.done;it++,Tt=$.next())Tt=Ue(Qe,q,it,Tt.value,Te),Tt!==null&&(n&&Tt.alternate!==null&&Qe.delete(Tt.key===null?it:Tt.key),W=g(Tt,W,it),Ze===null?Xe=Tt:Ze.sibling=Tt,Ze=Tt);return n&&Qe.forEach(function(O_){return i(q,O_)}),Bt&&Ir(q,it),Xe}function qt(q,W,$,Te){if(typeof $=="object"&&$!==null&&$.type===I&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case z:e:{for(var Xe=$.key,Ze=W;Ze!==null;){if(Ze.key===Xe){if(Xe=$.type,Xe===I){if(Ze.tag===7){o(q,Ze.sibling),W=d(Ze,$.props.children),W.return=q,q=W;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ne&&Eh(Xe)===Ze.type){o(q,Ze.sibling),W=d(Ze,$.props),W.ref=Mo(q,Ze,$),W.return=q,q=W;break e}o(q,Ze);break}else i(q,Ze);Ze=Ze.sibling}$.type===I?(W=Vr($.props.children,q.mode,Te,$.key),W.return=q,q=W):(Te=nl($.type,$.key,$.props,null,q.mode,Te),Te.ref=Mo(q,W,$),Te.return=q,q=Te)}return M(q);case F:e:{for(Ze=$.key;W!==null;){if(W.key===Ze)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){o(q,W.sibling),W=d(W,$.children||[]),W.return=q,q=W;break e}else{o(q,W);break}else i(q,W);W=W.sibling}W=Mc($,q.mode,Te),W.return=q,q=W}return M(q);case ne:return Ze=$._init,qt(q,W,Ze($._payload),Te)}if(je($))return He(q,W,$,Te);if(ce($))return Ge(q,W,$,Te);Da(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,W!==null&&W.tag===6?(o(q,W.sibling),W=d(W,$),W.return=q,q=W):(o(q,W),W=Ec($,q.mode,Te),W.return=q,q=W),M(q)):o(q,W)}return qt}var ys=Mh(!0),Th=Mh(!1),Ua=ir(null),Ia=null,Ss=null,Du=null;function Uu(){Du=Ss=Ia=null}function Iu(n){var i=Ua.current;Ot(Ua),n._currentValue=i}function Nu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Es(n,i){Ia=n,Du=Ss=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Cn=!0),n.firstContext=null)}function qn(n){var i=n._currentValue;if(Du!==n)if(n={context:n,memoizedValue:i,next:null},Ss===null){if(Ia===null)throw Error(t(308));Ss=n,Ia.dependencies={lanes:0,firstContext:n}}else Ss=Ss.next=n;return i}var Nr=null;function Fu(n){Nr===null?Nr=[n]:Nr.push(n)}function wh(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Fu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Pi(n,u)}function Pi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var or=!1;function Ou(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ah(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function bi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,yt&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Pi(n,o)}return d=u.interleaved,d===null?(i.next=i,Fu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Pi(n,o)}function Na(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,br(n,o)}}function Ch(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?d=g=M:g=g.next=M,o=o.next}while(o!==null);g===null?d=g=i:g=g.next=i}else d=g=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Fa(n,i,o,u){var d=n.updateQueue;or=!1;var g=d.firstBaseUpdate,M=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var B=U,ee=B.next;B.next=null,M===null?g=ee:M.next=ee,M=B;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==M&&(U===null?_e.firstBaseUpdate=ee:U.next=ee,_e.lastBaseUpdate=B))}if(g!==null){var Se=d.baseState;M=0,_e=ee=B=null,U=g;do{var ge=U.lane,Ue=U.eventTime;if((u&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ue,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var He=n,Ge=U;switch(ge=i,Ue=o,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){Se=He.call(Ue,Se,ge);break e}Se=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,ge=typeof He=="function"?He.call(Ue,Se,ge):He,ge==null)break e;Se=oe({},Se,ge);break e;case 2:or=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[U]:ge.push(U))}else Ue={eventTime:Ue,lane:ge,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(ee=_e=Ue,B=Se):_e=_e.next=Ue,M|=ge;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;ge=U,U=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(_e===null&&(B=Se),d.baseState=B,d.firstBaseUpdate=ee,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);kr|=M,n.lanes=M,n.memoizedState=Se}}function Rh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var To={},mi=ir(To),wo=ir(To),Ao=ir(To);function Fr(n){if(n===To)throw Error(t(174));return n}function ku(n,i){switch(It(Ao,i),It(wo,n),It(mi,To),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}Ot(mi),It(mi,i)}function Ms(){Ot(mi),Ot(wo),Ot(Ao)}function Ph(n){Fr(Ao.current);var i=Fr(mi.current),o=We(i,n.type);i!==o&&(It(wo,n),It(mi,o))}function Bu(n){wo.current===n&&(Ot(mi),Ot(wo))}var zt=ir(0);function Oa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var zu=[];function Hu(){for(var n=0;n<zu.length;n++)zu[n]._workInProgressVersionPrimary=null;zu.length=0}var ka=P.ReactCurrentDispatcher,Vu=P.ReactCurrentBatchConfig,Or=0,Ht=null,Zt=null,tn=null,Ba=!1,Co=!1,Ro=0,s_=0;function dn(){throw Error(t(321))}function Gu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Jn(n[o],i[o]))return!1;return!0}function Wu(n,i,o,u,d,g){if(Or=g,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ka.current=n===null||n.memoizedState===null?u_:c_,n=o(u,d),Co){g=0;do{if(Co=!1,Ro=0,25<=g)throw Error(t(301));g+=1,tn=Zt=null,i.updateQueue=null,ka.current=f_,n=o(u,d)}while(Co)}if(ka.current=Va,i=Zt!==null&&Zt.next!==null,Or=0,tn=Zt=Ht=null,Ba=!1,i)throw Error(t(300));return n}function Xu(){var n=Ro!==0;return Ro=0,n}function gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Ht.memoizedState=tn=n:tn=tn.next=n,tn}function $n(){if(Zt===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=tn===null?Ht.memoizedState:tn.next;if(i!==null)tn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},tn===null?Ht.memoizedState=tn=n:tn=tn.next=n}return tn}function Po(n,i){return typeof i=="function"?i(n):i}function ju(n){var i=$n(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Zt,d=u.baseQueue,g=o.pending;if(g!==null){if(d!==null){var M=d.next;d.next=g.next,g.next=M}u.baseQueue=d=g,o.pending=null}if(d!==null){g=d.next,u=u.baseState;var U=M=null,B=null,ee=g;do{var _e=ee.lane;if((Or&_e)===_e)B!==null&&(B=B.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),u=ee.hasEagerState?ee.eagerState:n(u,ee.action);else{var Se={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};B===null?(U=B=Se,M=u):B=B.next=Se,Ht.lanes|=_e,kr|=_e}ee=ee.next}while(ee!==null&&ee!==g);B===null?M=u:B.next=U,Jn(u,i.memoizedState)||(Cn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=B,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do g=d.lane,Ht.lanes|=g,kr|=g,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function qu(n){var i=$n(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,g=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do g=n(g,M.action),M=M.next;while(M!==d);Jn(g,i.memoizedState)||(Cn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,u]}function bh(){}function Lh(n,i){var o=Ht,u=$n(),d=i(),g=!Jn(u.memoizedState,d);if(g&&(u.memoizedState=d,Cn=!0),u=u.queue,$u(Ih.bind(null,o,u,n),[n]),u.getSnapshot!==i||g||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,bo(9,Uh.bind(null,o,u,d,i),void 0,null),nn===null)throw Error(t(349));Or&30||Dh(o,i,d)}return d}function Dh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Uh(n,i,o,u){i.value=o,i.getSnapshot=u,Nh(i)&&Fh(n)}function Ih(n,i,o){return o(function(){Nh(i)&&Fh(n)})}function Nh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Jn(n,o)}catch{return!0}}function Fh(n){var i=Pi(n,1);i!==null&&ri(i,n,1,-1)}function Oh(n){var i=gi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},i.queue=n,n=n.dispatch=l_.bind(null,Ht,n),[i.memoizedState,n]}function bo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function kh(){return $n().memoizedState}function za(n,i,o,u){var d=gi();Ht.flags|=n,d.memoizedState=bo(1|i,o,void 0,u===void 0?null:u)}function Ha(n,i,o,u){var d=$n();u=u===void 0?null:u;var g=void 0;if(Zt!==null){var M=Zt.memoizedState;if(g=M.destroy,u!==null&&Gu(u,M.deps)){d.memoizedState=bo(i,o,g,u);return}}Ht.flags|=n,d.memoizedState=bo(1|i,o,g,u)}function Bh(n,i){return za(8390656,8,n,i)}function $u(n,i){return Ha(2048,8,n,i)}function zh(n,i){return Ha(4,2,n,i)}function Hh(n,i){return Ha(4,4,n,i)}function Vh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Gh(n,i,o){return o=o!=null?o.concat([n]):null,Ha(4,4,Vh.bind(null,i,n),o)}function Yu(){}function Wh(n,i){var o=$n();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Gu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Xh(n,i){var o=$n();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Gu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function jh(n,i,o){return Or&21?(Jn(o,i)||(o=yn(),Ht.lanes|=o,kr|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Cn=!0),n.memoizedState=o)}function o_(n,i){var o=pt;pt=o!==0&&4>o?o:4,n(!0);var u=Vu.transition;Vu.transition={};try{n(!1),i()}finally{pt=o,Vu.transition=u}}function qh(){return $n().memoizedState}function a_(n,i,o){var u=fr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},$h(n))Yh(i,o);else if(o=wh(n,i,o,u),o!==null){var d=En();ri(o,n,u,d),Kh(o,i,u)}}function l_(n,i,o){var u=fr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if($h(n))Yh(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var M=i.lastRenderedState,U=g(M,o);if(d.hasEagerState=!0,d.eagerState=U,Jn(U,M)){var B=i.interleaved;B===null?(d.next=d,Fu(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}o=wh(n,i,d,u),o!==null&&(d=En(),ri(o,n,u,d),Kh(o,i,u))}}function $h(n){var i=n.alternate;return n===Ht||i!==null&&i===Ht}function Yh(n,i){Co=Ba=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Kh(n,i,o){if(o&4194240){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,br(n,o)}}var Va={readContext:qn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},u_={readContext:qn,useCallback:function(n,i){return gi().memoizedState=[n,i===void 0?null:i],n},useContext:qn,useEffect:Bh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,za(4194308,4,Vh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return za(4194308,4,n,i)},useInsertionEffect:function(n,i){return za(4,2,n,i)},useMemo:function(n,i){var o=gi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=gi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=a_.bind(null,Ht,n),[u.memoizedState,n]},useRef:function(n){var i=gi();return n={current:n},i.memoizedState=n},useState:Oh,useDebugValue:Yu,useDeferredValue:function(n){return gi().memoizedState=n},useTransition:function(){var n=Oh(!1),i=n[0];return n=o_.bind(null,n[1]),gi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Ht,d=gi();if(Bt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),nn===null)throw Error(t(349));Or&30||Dh(u,i,o)}d.memoizedState=o;var g={value:o,getSnapshot:i};return d.queue=g,Bh(Ih.bind(null,u,g,n),[n]),u.flags|=2048,bo(9,Uh.bind(null,u,g,o,i),void 0,null),o},useId:function(){var n=gi(),i=nn.identifierPrefix;if(Bt){var o=Ri,u=Ci;o=(u&~(1<<32-Mt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ro++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=s_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},c_={readContext:qn,useCallback:Wh,useContext:qn,useEffect:$u,useImperativeHandle:Gh,useInsertionEffect:zh,useLayoutEffect:Hh,useMemo:Xh,useReducer:ju,useRef:kh,useState:function(){return ju(Po)},useDebugValue:Yu,useDeferredValue:function(n){var i=$n();return jh(i,Zt.memoizedState,n)},useTransition:function(){var n=ju(Po)[0],i=$n().memoizedState;return[n,i]},useMutableSource:bh,useSyncExternalStore:Lh,useId:qh,unstable_isNewReconciler:!1},f_={readContext:qn,useCallback:Wh,useContext:qn,useEffect:$u,useImperativeHandle:Gh,useInsertionEffect:zh,useLayoutEffect:Hh,useMemo:Xh,useReducer:qu,useRef:kh,useState:function(){return qu(Po)},useDebugValue:Yu,useDeferredValue:function(n){var i=$n();return Zt===null?i.memoizedState=n:jh(i,Zt.memoizedState,n)},useTransition:function(){var n=qu(Po)[0],i=$n().memoizedState;return[n,i]},useMutableSource:bh,useSyncExternalStore:Lh,useId:qh,unstable_isNewReconciler:!1};function ti(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Ku(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:oe({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ga={isMounted:function(n){return(n=n._reactInternals)?hi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=En(),d=fr(n),g=bi(u,d);g.payload=i,o!=null&&(g.callback=o),i=ar(n,g,d),i!==null&&(ri(i,n,d,u),Na(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=En(),d=fr(n),g=bi(u,d);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=ar(n,g,d),i!==null&&(ri(i,n,d,u),Na(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=En(),u=fr(n),d=bi(o,u);d.tag=2,i!=null&&(d.callback=i),i=ar(n,d,u),i!==null&&(ri(i,n,u,o),Na(i,n,u))}};function Zh(n,i,o,u,d,g,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,M):i.prototype&&i.prototype.isPureReactComponent?!go(o,u)||!go(d,g):!0}function Qh(n,i,o){var u=!1,d=rr,g=i.contextType;return typeof g=="object"&&g!==null?g=qn(g):(d=An(i)?Dr:fn.current,u=i.contextTypes,g=(u=u!=null)?gs(n,d):rr),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ga,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function Jh(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Ga.enqueueReplaceState(i,i.state,null)}function Zu(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Ou(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=qn(g):(g=An(i)?Dr:fn.current,d.context=gs(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Ku(n,i,g,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ga.enqueueReplaceState(d,d.state,null),Fa(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ts(n,i){try{var o="",u=i;do o+=fe(u),u=u.return;while(u);var d=o}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Qu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Ju(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var d_=typeof WeakMap=="function"?WeakMap:Map;function ep(n,i,o){o=bi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ka||(Ka=!0,pc=u),Ju(n,i)},o}function tp(n,i,o){o=bi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Ju(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Ju(n,i),typeof u!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function np(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new d_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=A_.bind(null,n,i,o),i.then(n,n))}function ip(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function rp(n,i,o,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=bi(-1,1),i.tag=2,ar(o,i,1))),o.lanes|=1),n)}var h_=P.ReactCurrentOwner,Cn=!1;function Sn(n,i,o,u){i.child=n===null?Th(i,null,o,u):ys(i,n.child,o,u)}function sp(n,i,o,u,d){o=o.render;var g=i.ref;return Es(i,d),u=Wu(n,i,o,u,g,d),o=Xu(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Li(n,i,d)):(Bt&&o&&Cu(i),i.flags|=1,Sn(n,i,u,d),i.child)}function op(n,i,o,u,d){if(n===null){var g=o.type;return typeof g=="function"&&!Sc(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,ap(n,i,g,u,d)):(n=nl(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,!(n.lanes&d)){var M=g.memoizedProps;if(o=o.compare,o=o!==null?o:go,o(M,u)&&n.ref===i.ref)return Li(n,i,d)}return i.flags|=1,n=hr(g,u),n.ref=i.ref,n.return=i,i.child=n}function ap(n,i,o,u,d){if(n!==null){var g=n.memoizedProps;if(go(g,u)&&n.ref===i.ref)if(Cn=!1,i.pendingProps=u=g,(n.lanes&d)!==0)n.flags&131072&&(Cn=!0);else return i.lanes=n.lanes,Li(n,i,d)}return ec(n,i,o,u,d)}function lp(n,i,o){var u=i.pendingProps,d=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(As,Bn),Bn|=o;else{if(!(o&1073741824))return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(As,Bn),Bn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,It(As,Bn),Bn|=u}else g!==null?(u=g.baseLanes|o,i.memoizedState=null):u=o,It(As,Bn),Bn|=u;return Sn(n,i,d,o),i.child}function up(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ec(n,i,o,u,d){var g=An(o)?Dr:fn.current;return g=gs(i,g),Es(i,d),o=Wu(n,i,o,u,g,d),u=Xu(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Li(n,i,d)):(Bt&&u&&Cu(i),i.flags|=1,Sn(n,i,o,d),i.child)}function cp(n,i,o,u,d){if(An(o)){var g=!0;Ca(i)}else g=!1;if(Es(i,d),i.stateNode===null)Xa(n,i),Qh(i,o,u),Zu(i,o,u,d),u=!0;else if(n===null){var M=i.stateNode,U=i.memoizedProps;M.props=U;var B=M.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=qn(ee):(ee=An(o)?Dr:fn.current,ee=gs(i,ee));var _e=o.getDerivedStateFromProps,Se=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==u||B!==ee)&&Jh(i,M,u,ee),or=!1;var ge=i.memoizedState;M.state=ge,Fa(i,u,M,d),B=i.memoizedState,U!==u||ge!==B||wn.current||or?(typeof _e=="function"&&(Ku(i,o,_e,u),B=i.memoizedState),(U=or||Zh(i,o,U,u,ge,B,ee))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),M.props=u,M.state=B,M.context=ee,u=U):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Ah(n,i),U=i.memoizedProps,ee=i.type===i.elementType?U:ti(i.type,U),M.props=ee,Se=i.pendingProps,ge=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=qn(B):(B=An(o)?Dr:fn.current,B=gs(i,B));var Ue=o.getDerivedStateFromProps;(_e=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==Se||ge!==B)&&Jh(i,M,u,B),or=!1,ge=i.memoizedState,M.state=ge,Fa(i,u,M,d);var He=i.memoizedState;U!==Se||ge!==He||wn.current||or?(typeof Ue=="function"&&(Ku(i,o,Ue,u),He=i.memoizedState),(ee=or||Zh(i,o,ee,u,ge,He,B)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,He,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,He,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=He),M.props=u,M.state=He,M.context=B,u=ee):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return tc(n,i,o,u,g,d)}function tc(n,i,o,u,d,g){up(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&mh(i,o,!1),Li(n,i,g);u=i.stateNode,h_.current=i;var U=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=ys(i,n.child,null,g),i.child=ys(i,null,U,g)):Sn(n,i,U,g),i.memoizedState=u.state,d&&mh(i,o,!0),i.child}function fp(n){var i=n.stateNode;i.pendingContext?hh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&hh(n,i.context,!1),ku(n,i.containerInfo)}function dp(n,i,o,u,d){return xs(),Lu(d),i.flags|=256,Sn(n,i,o,u),i.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function ic(n){return{baseLanes:n,cachePool:null,transitions:null}}function hp(n,i,o){var u=i.pendingProps,d=zt.current,g=!1,M=(i.flags&128)!==0,U;if((U=M)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),It(zt,d&1),n===null)return bu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=u.children,n=u.fallback,g?(u=i.mode,g=i.child,M={mode:"hidden",children:M},!(u&1)&&g!==null?(g.childLanes=0,g.pendingProps=M):g=il(M,u,0,null),n=Vr(n,u,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=ic(o),i.memoizedState=nc,n):rc(i,M));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return p_(n,i,M,u,U,d,o);if(g){g=u.fallback,M=i.mode,d=n.child,U=d.sibling;var B={mode:"hidden",children:u.children};return!(M&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=hr(d,B),u.subtreeFlags=d.subtreeFlags&14680064),U!==null?g=hr(U,g):(g=Vr(g,M,o,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,M=n.child.memoizedState,M=M===null?ic(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},g.memoizedState=M,g.childLanes=n.childLanes&~o,i.memoizedState=nc,u}return g=n.child,n=g.sibling,u=hr(g,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function rc(n,i){return i=il({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Wa(n,i,o,u){return u!==null&&Lu(u),ys(i,n.child,null,o),n=rc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function p_(n,i,o,u,d,g,M){if(o)return i.flags&256?(i.flags&=-257,u=Qu(Error(t(422))),Wa(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,d=i.mode,u=il({mode:"visible",children:u.children},d,0,null),g=Vr(g,d,M,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,i.mode&1&&ys(i,n.child,null,M),i.child.memoizedState=ic(M),i.memoizedState=nc,g);if(!(i.mode&1))return Wa(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var U=u.dgst;return u=U,g=Error(t(419)),u=Qu(g,u,void 0),Wa(n,i,M,u)}if(U=(M&n.childLanes)!==0,Cn||U){if(u=nn,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|M)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Pi(n,d),ri(u,n,d,-1))}return yc(),u=Qu(Error(t(421))),Wa(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=C_.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,kn=nr(d.nextSibling),On=i,Bt=!0,ei=null,n!==null&&(Xn[jn++]=Ci,Xn[jn++]=Ri,Xn[jn++]=Ur,Ci=n.id,Ri=n.overflow,Ur=i),i=rc(i,u.children),i.flags|=4096,i)}function pp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Nu(n.return,i,o)}function sc(n,i,o,u,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=d)}function mp(n,i,o){var u=i.pendingProps,d=u.revealOrder,g=u.tail;if(Sn(n,i,u.children,o),u=zt.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&pp(n,o,i);else if(n.tag===19)pp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(It(zt,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Oa(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),sc(i,!1,d,o,g);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Oa(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}sc(i,!0,o,null,g);break;case"together":sc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xa(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Li(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),kr|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=hr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=hr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function m_(n,i,o){switch(i.tag){case 3:fp(i),xs();break;case 5:Ph(i);break;case 1:An(i.type)&&Ca(i);break;case 4:ku(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;It(Ua,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(zt,zt.current&1),i.flags|=128,null):o&i.child.childLanes?hp(n,i,o):(It(zt,zt.current&1),n=Li(n,i,o),n!==null?n.sibling:null);It(zt,zt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,n.flags&128){if(u)return mp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),It(zt,zt.current),u)break;return null;case 22:case 23:return i.lanes=0,lp(n,i,o)}return Li(n,i,o)}var gp,oc,vp,_p;gp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},oc=function(){},vp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Fr(mi.current);var g=null;switch(o){case"input":d=H(n,d),u=H(n,u),g=[];break;case"select":d=oe({},d,{value:void 0}),u=oe({},u,{value:void 0}),g=[];break;case"textarea":d=w(n,d),u=w(n,u),g=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ta)}ft(o,u);var M;o=null;for(ee in d)if(!u.hasOwnProperty(ee)&&d.hasOwnProperty(ee)&&d[ee]!=null)if(ee==="style"){var U=d[ee];for(M in U)U.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?g||(g=[]):(g=g||[]).push(ee,null));for(ee in u){var B=u[ee];if(U=d!=null?d[ee]:void 0,u.hasOwnProperty(ee)&&B!==U&&(B!=null||U!=null))if(ee==="style")if(U){for(M in U)!U.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&U[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(g||(g=[]),g.push(ee,o)),o=B;else ee==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(g=g||[]).push(ee,B)):ee==="children"?typeof B!="string"&&typeof B!="number"||(g=g||[]).push(ee,""+B):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(B!=null&&ee==="onScroll"&&Ft("scroll",n),g||U===B||(g=[])):(g=g||[]).push(ee,B))}o&&(g=g||[]).push("style",o);var ee=g;(i.updateQueue=ee)&&(i.flags|=4)}},_p=function(n,i,o,u){o!==u&&(i.flags|=4)};function Lo(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function hn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function g_(n,i,o){var u=i.pendingProps;switch(Ru(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return An(i.type)&&Aa(),hn(i),null;case 3:return u=i.stateNode,Ms(),Ot(wn),Ot(fn),Hu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(La(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,ei!==null&&(vc(ei),ei=null))),oc(n,i),hn(i),null;case 5:Bu(i);var d=Fr(Ao.current);if(o=i.type,n!==null&&i.stateNode!=null)vp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return hn(i),null}if(n=Fr(mi.current),La(i)){u=i.stateNode,o=i.type;var g=i.memoizedProps;switch(u[pi]=i,u[So]=g,n=(i.mode&1)!==0,o){case"dialog":Ft("cancel",u),Ft("close",u);break;case"iframe":case"object":case"embed":Ft("load",u);break;case"video":case"audio":for(d=0;d<_o.length;d++)Ft(_o[d],u);break;case"source":Ft("error",u);break;case"img":case"image":case"link":Ft("error",u),Ft("load",u);break;case"details":Ft("toggle",u);break;case"input":vn(u,g),Ft("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Ft("invalid",u);break;case"textarea":Z(u,g),Ft("invalid",u)}ft(o,g),d=null;for(var M in g)if(g.hasOwnProperty(M)){var U=g[M];M==="children"?typeof U=="string"?u.textContent!==U&&(g.suppressHydrationWarning!==!0&&Ma(u.textContent,U,n),d=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&Ma(u.textContent,U,n),d=["children",""+U]):a.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Ft("scroll",u)}switch(o){case"input":Pt(u),$e(u,g,!0);break;case"textarea":Pt(u),ve(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Ta)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[pi]=i,n[So]=u,gp(n,i,!1,!1),i.stateNode=n;e:{switch(M=rt(o,u),o){case"dialog":Ft("cancel",n),Ft("close",n),d=u;break;case"iframe":case"object":case"embed":Ft("load",n),d=u;break;case"video":case"audio":for(d=0;d<_o.length;d++)Ft(_o[d],n);d=u;break;case"source":Ft("error",n),d=u;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),d=u;break;case"details":Ft("toggle",n),d=u;break;case"input":vn(n,u),d=H(n,u),Ft("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=oe({},u,{value:void 0}),Ft("invalid",n);break;case"textarea":Z(n,u),d=w(n,u),Ft("invalid",n);break;default:d=u}ft(o,d),U=d;for(g in U)if(U.hasOwnProperty(g)){var B=U[g];g==="style"?et(n,B):g==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Fe(n,B)):g==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&ut(n,B):typeof B=="number"&&ut(n,""+B):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?B!=null&&g==="onScroll"&&Ft("scroll",n):B!=null&&L(n,g,B,M))}switch(o){case"input":Pt(n),$e(n,u,!1);break;case"textarea":Pt(n),ve(n);break;case"option":u.value!=null&&n.setAttribute("value",""+we(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?D(n,!!u.multiple,g,!1):u.defaultValue!=null&&D(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ta)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(n&&i.stateNode!=null)_p(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Fr(Ao.current),Fr(mi.current),La(i)){if(u=i.stateNode,o=i.memoizedProps,u[pi]=i,(g=u.nodeValue!==o)&&(n=On,n!==null))switch(n.tag){case 3:Ma(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ma(u.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[pi]=i,i.stateNode=u}return hn(i),null;case 13:if(Ot(zt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&kn!==null&&i.mode&1&&!(i.flags&128))Sh(),xs(),i.flags|=98560,g=!1;else if(g=La(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[pi]=i}else xs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;hn(i),g=!1}else ei!==null&&(vc(ei),ei=null),g=!0;if(!g)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||zt.current&1?Qt===0&&(Qt=3):yc())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return Ms(),oc(n,i),n===null&&xo(i.stateNode.containerInfo),hn(i),null;case 10:return Iu(i.type._context),hn(i),null;case 17:return An(i.type)&&Aa(),hn(i),null;case 19:if(Ot(zt),g=i.memoizedState,g===null)return hn(i),null;if(u=(i.flags&128)!==0,M=g.rendering,M===null)if(u)Lo(g,!1);else{if(Qt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(M=Oa(n),M!==null){for(i.flags|=128,Lo(g,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)g=o,n=u,g.flags&=14680066,M=g.alternate,M===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=M.childLanes,g.lanes=M.lanes,g.child=M.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=M.memoizedProps,g.memoizedState=M.memoizedState,g.updateQueue=M.updateQueue,g.type=M.type,n=M.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return It(zt,zt.current&1|2),i.child}n=n.sibling}g.tail!==null&&G()>Cs&&(i.flags|=128,u=!0,Lo(g,!1),i.lanes=4194304)}else{if(!u)if(n=Oa(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Lo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!M.alternate&&!Bt)return hn(i),null}else 2*G()-g.renderingStartTime>Cs&&o!==1073741824&&(i.flags|=128,u=!0,Lo(g,!1),i.lanes=4194304);g.isBackwards?(M.sibling=i.child,i.child=M):(o=g.last,o!==null?o.sibling=M:i.child=M,g.last=M)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=G(),i.sibling=null,o=zt.current,It(zt,u?o&1|2:o&1),i):(hn(i),null);case 22:case 23:return xc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Bn&1073741824&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function v_(n,i){switch(Ru(i),i.tag){case 1:return An(i.type)&&Aa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ms(),Ot(wn),Ot(fn),Hu(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Bu(i),null;case 13:if(Ot(zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(zt),null;case 4:return Ms(),null;case 10:return Iu(i.type._context),null;case 22:case 23:return xc(),null;case 24:return null;default:return null}}var ja=!1,pn=!1,__=typeof WeakSet=="function"?WeakSet:Set,ke=null;function ws(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Xt(n,i,u)}else o.current=null}function ac(n,i,o){try{o()}catch(u){Xt(n,i,u)}}var xp=!1;function x_(n,i){if(xu=da,n=Zd(),fu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var M=0,U=-1,B=-1,ee=0,_e=0,Se=n,ge=null;t:for(;;){for(var Ue;Se!==o||d!==0&&Se.nodeType!==3||(U=M+d),Se!==g||u!==0&&Se.nodeType!==3||(B=M+u),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)ge=Se,Se=Ue;for(;;){if(Se===n)break t;if(ge===o&&++ee===d&&(U=M),ge===g&&++_e===u&&(B=M),(Ue=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Ue}o=U===-1||B===-1?null:{start:U,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(yu={focusedElem:n,selectionRange:o},da=!1,ke=i;ke!==null;)if(i=ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ke=n;else for(;ke!==null;){i=ke;try{var He=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,qt=He.memoizedState,q=i.stateNode,W=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:ti(i.type,Ge),qt);q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Xt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,ke=n;break}ke=i.return}return He=xp,xp=!1,He}function Do(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&ac(i,o,g)}d=d.next}while(d!==u)}}function qa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function lc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function yp(n){var i=n.alternate;i!==null&&(n.alternate=null,yp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[pi],delete i[So],delete i[Tu],delete i[t_],delete i[n_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Sp(n){return n.tag===5||n.tag===3||n.tag===4}function Ep(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function uc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ta));else if(u!==4&&(n=n.child,n!==null))for(uc(n,i,o),n=n.sibling;n!==null;)uc(n,i,o),n=n.sibling}function cc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(cc(n,i,o),n=n.sibling;n!==null;)cc(n,i,o),n=n.sibling}var an=null,ni=!1;function lr(n,i,o){for(o=o.child;o!==null;)Mp(n,i,o),o=o.sibling}function Mp(n,i,o){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(qe,o)}catch{}switch(o.tag){case 5:pn||ws(o,i);case 6:var u=an,d=ni;an=null,lr(n,i,o),an=u,ni=d,an!==null&&(ni?(n=an,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(ni?(n=an,o=o.stateNode,n.nodeType===8?Mu(n.parentNode,o):n.nodeType===1&&Mu(n,o),uo(n)):Mu(an,o.stateNode));break;case 4:u=an,d=ni,an=o.stateNode.containerInfo,ni=!0,lr(n,i,o),an=u,ni=d;break;case 0:case 11:case 14:case 15:if(!pn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var g=d,M=g.destroy;g=g.tag,M!==void 0&&(g&2||g&4)&&ac(o,i,M),d=d.next}while(d!==u)}lr(n,i,o);break;case 1:if(!pn&&(ws(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(U){Xt(o,i,U)}lr(n,i,o);break;case 21:lr(n,i,o);break;case 22:o.mode&1?(pn=(u=pn)||o.memoizedState!==null,lr(n,i,o),pn=u):lr(n,i,o);break;default:lr(n,i,o)}}function Tp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new __),i.forEach(function(u){var d=R_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ii(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var g=n,M=i,U=M;e:for(;U!==null;){switch(U.tag){case 5:an=U.stateNode,ni=!1;break e;case 3:an=U.stateNode.containerInfo,ni=!0;break e;case 4:an=U.stateNode.containerInfo,ni=!0;break e}U=U.return}if(an===null)throw Error(t(160));Mp(g,M,d),an=null,ni=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(ee){Xt(d,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)wp(i,n),i=i.sibling}function wp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(i,n),vi(n),u&4){try{Do(3,n,n.return),qa(3,n)}catch(Ge){Xt(n,n.return,Ge)}try{Do(5,n,n.return)}catch(Ge){Xt(n,n.return,Ge)}}break;case 1:ii(i,n),vi(n),u&512&&o!==null&&ws(o,o.return);break;case 5:if(ii(i,n),vi(n),u&512&&o!==null&&ws(o,o.return),n.flags&32){var d=n.stateNode;try{ut(d,"")}catch(Ge){Xt(n,n.return,Ge)}}if(u&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,M=o!==null?o.memoizedProps:g,U=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&ht(d,g),rt(U,M);var ee=rt(U,g);for(M=0;M<B.length;M+=2){var _e=B[M],Se=B[M+1];_e==="style"?et(d,Se):_e==="dangerouslySetInnerHTML"?Fe(d,Se):_e==="children"?ut(d,Se):L(d,_e,Se,ee)}switch(U){case"input":ct(d,g);break;case"textarea":me(d,g);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Ue=g.value;Ue!=null?D(d,!!g.multiple,Ue,!1):ge!==!!g.multiple&&(g.defaultValue!=null?D(d,!!g.multiple,g.defaultValue,!0):D(d,!!g.multiple,g.multiple?[]:"",!1))}d[So]=g}catch(Ge){Xt(n,n.return,Ge)}}break;case 6:if(ii(i,n),vi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(Ge){Xt(n,n.return,Ge)}}break;case 3:if(ii(i,n),vi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch(Ge){Xt(n,n.return,Ge)}break;case 4:ii(i,n),vi(n);break;case 13:ii(i,n),vi(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(hc=G())),u&4&&Tp(n);break;case 22:if(_e=o!==null&&o.memoizedState!==null,n.mode&1?(pn=(ee=pn)||_e,ii(i,n),pn=ee):ii(i,n),vi(n),u&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!_e&&n.mode&1)for(ke=n,_e=n.child;_e!==null;){for(Se=ke=_e;ke!==null;){switch(ge=ke,Ue=ge.child,ge.tag){case 0:case 11:case 14:case 15:Do(4,ge,ge.return);break;case 1:ws(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){u=ge,o=ge.return;try{i=u,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ge){Xt(u,o,Ge)}}break;case 5:ws(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Rp(Se);continue}}Ue!==null?(Ue.return=ge,ke=Ue):Rp(Se)}_e=_e.sibling}e:for(_e=null,Se=n;;){if(Se.tag===5){if(_e===null){_e=Se;try{d=Se.stateNode,ee?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=Se.stateNode,B=Se.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=Ke("display",M))}catch(Ge){Xt(n,n.return,Ge)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=ee?"":Se.memoizedProps}catch(Ge){Xt(n,n.return,Ge)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ii(i,n),vi(n),u&4&&Tp(n);break;case 21:break;default:ii(i,n),vi(n)}}function vi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Sp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ut(d,""),u.flags&=-33);var g=Ep(n);cc(n,g,d);break;case 3:case 4:var M=u.stateNode.containerInfo,U=Ep(n);uc(n,U,M);break;default:throw Error(t(161))}}catch(B){Xt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function y_(n,i,o){ke=n,Ap(n)}function Ap(n,i,o){for(var u=(n.mode&1)!==0;ke!==null;){var d=ke,g=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||ja;if(!M){var U=d.alternate,B=U!==null&&U.memoizedState!==null||pn;U=ja;var ee=pn;if(ja=M,(pn=B)&&!ee)for(ke=d;ke!==null;)M=ke,B=M.child,M.tag===22&&M.memoizedState!==null?Pp(d):B!==null?(B.return=M,ke=B):Pp(d);for(;g!==null;)ke=g,Ap(g),g=g.sibling;ke=d,ja=U,pn=ee}Cp(n)}else d.subtreeFlags&8772&&g!==null?(g.return=d,ke=g):Cp(n)}}function Cp(n){for(;ke!==null;){var i=ke;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:pn||qa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!pn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Rh(i,g,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Rh(i,M,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&uo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pn||i.flags&512&&lc(i)}catch(ge){Xt(i,i.return,ge)}}if(i===n){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Rp(n){for(;ke!==null;){var i=ke;if(i===n){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Pp(n){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{qa(4,i)}catch(B){Xt(i,o,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(B){Xt(i,d,B)}}var g=i.return;try{lc(i)}catch(B){Xt(i,g,B)}break;case 5:var M=i.return;try{lc(i)}catch(B){Xt(i,M,B)}}}catch(B){Xt(i,i.return,B)}if(i===n){ke=null;break}var U=i.sibling;if(U!==null){U.return=i.return,ke=U;break}ke=i.return}}var S_=Math.ceil,$a=P.ReactCurrentDispatcher,fc=P.ReactCurrentOwner,Yn=P.ReactCurrentBatchConfig,yt=0,nn=null,$t=null,ln=0,Bn=0,As=ir(0),Qt=0,Uo=null,kr=0,Ya=0,dc=0,Io=null,Rn=null,hc=0,Cs=1/0,Di=null,Ka=!1,pc=null,ur=null,Za=!1,cr=null,Qa=0,No=0,mc=null,Ja=-1,el=0;function En(){return yt&6?G():Ja!==-1?Ja:Ja=G()}function fr(n){return n.mode&1?yt&2&&ln!==0?ln&-ln:r_.transition!==null?(el===0&&(el=yn()),el):(n=pt,n!==0||(n=window.event,n=n===void 0?16:Ld(n.type)),n):1}function ri(n,i,o,u){if(50<No)throw No=0,mc=null,Error(t(185));jt(n,o,u),(!(yt&2)||n!==nn)&&(n===nn&&(!(yt&2)&&(Ya|=o),Qt===4&&dr(n,ln)),Pn(n,u),o===1&&yt===0&&!(i.mode&1)&&(Cs=G()+500,Ra&&sr()))}function Pn(n,i){var o=n.callbackNode;Pr(n,i);var u=Qn(n,n===nn?ln:0);if(u===0)o!==null&&j(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&j(o),i===1)n.tag===0?i_(Lp.bind(null,n)):gh(Lp.bind(null,n)),Jv(function(){!(yt&6)&&sr()}),o=null;else{switch(Md(u)){case 1:o=Re;break;case 4:o=Ie;break;case 16:o=Oe;break;case 536870912:o=nt;break;default:o=Oe}o=Bp(o,bp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function bp(n,i){if(Ja=-1,el=0,yt&6)throw Error(t(327));var o=n.callbackNode;if(Rs()&&n.callbackNode!==o)return null;var u=Qn(n,n===nn?ln:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=tl(n,u);else{i=u;var d=yt;yt|=2;var g=Up();(nn!==n||ln!==i)&&(Di=null,Cs=G()+500,zr(n,i));do try{T_();break}catch(U){Dp(n,U)}while(!0);Uu(),$a.current=g,yt=d,$t!==null?i=0:(nn=null,ln=0,i=Qt)}if(i!==0){if(i===2&&(d=bt(n),d!==0&&(u=d,i=gc(n,d))),i===1)throw o=Uo,zr(n,0),dr(n,u),Pn(n,G()),o;if(i===6)dr(n,u);else{if(d=n.current.alternate,!(u&30)&&!E_(d)&&(i=tl(n,u),i===2&&(g=bt(n),g!==0&&(u=g,i=gc(n,g))),i===1))throw o=Uo,zr(n,0),dr(n,u),Pn(n,G()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Hr(n,Rn,Di);break;case 3:if(dr(n,u),(u&130023424)===u&&(i=hc+500-G(),10<i)){if(Qn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){En(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Eu(Hr.bind(null,n,Rn,Di),i);break}Hr(n,Rn,Di);break;case 4:if(dr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-Mt(u);g=1<<M,M=i[M],M>d&&(d=M),u&=~g}if(u=d,u=G()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*S_(u/1960))-u,10<u){n.timeoutHandle=Eu(Hr.bind(null,n,Rn,Di),u);break}Hr(n,Rn,Di);break;case 5:Hr(n,Rn,Di);break;default:throw Error(t(329))}}}return Pn(n,G()),n.callbackNode===o?bp.bind(null,n):null}function gc(n,i){var o=Io;return n.current.memoizedState.isDehydrated&&(zr(n,i).flags|=256),n=tl(n,i),n!==2&&(i=Rn,Rn=o,i!==null&&vc(i)),n}function vc(n){Rn===null?Rn=n:Rn.push.apply(Rn,n)}function E_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],g=d.getSnapshot;d=d.value;try{if(!Jn(g(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(n,i){for(i&=~dc,i&=~Ya,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Mt(i),u=1<<o;n[o]=-1,i&=~u}}function Lp(n){if(yt&6)throw Error(t(327));Rs();var i=Qn(n,0);if(!(i&1))return Pn(n,G()),null;var o=tl(n,i);if(n.tag!==0&&o===2){var u=bt(n);u!==0&&(i=u,o=gc(n,u))}if(o===1)throw o=Uo,zr(n,0),dr(n,i),Pn(n,G()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Hr(n,Rn,Di),Pn(n,G()),null}function _c(n,i){var o=yt;yt|=1;try{return n(i)}finally{yt=o,yt===0&&(Cs=G()+500,Ra&&sr())}}function Br(n){cr!==null&&cr.tag===0&&!(yt&6)&&Rs();var i=yt;yt|=1;var o=Yn.transition,u=pt;try{if(Yn.transition=null,pt=1,n)return n()}finally{pt=u,Yn.transition=o,yt=i,!(yt&6)&&sr()}}function xc(){Bn=As.current,Ot(As)}function zr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Qv(o)),$t!==null)for(o=$t.return;o!==null;){var u=o;switch(Ru(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Aa();break;case 3:Ms(),Ot(wn),Ot(fn),Hu();break;case 5:Bu(u);break;case 4:Ms();break;case 13:Ot(zt);break;case 19:Ot(zt);break;case 10:Iu(u.type._context);break;case 22:case 23:xc()}o=o.return}if(nn=n,$t=n=hr(n.current,null),ln=Bn=i,Qt=0,Uo=null,dc=Ya=kr=0,Rn=Io=null,Nr!==null){for(i=0;i<Nr.length;i++)if(o=Nr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,g=o.pending;if(g!==null){var M=g.next;g.next=d,u.next=M}o.pending=u}Nr=null}return n}function Dp(n,i){do{var o=$t;try{if(Uu(),ka.current=Va,Ba){for(var u=Ht.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ba=!1}if(Or=0,tn=Zt=Ht=null,Co=!1,Ro=0,fc.current=null,o===null||o.return===null){Qt=1,Uo=i,$t=null;break}e:{var g=n,M=o.return,U=o,B=i;if(i=ln,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ee=B,_e=U,Se=_e.tag;if(!(_e.mode&1)&&(Se===0||Se===11||Se===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ue=ip(M);if(Ue!==null){Ue.flags&=-257,rp(Ue,M,U,g,i),Ue.mode&1&&np(g,ee,i),i=Ue,B=ee;var He=i.updateQueue;if(He===null){var Ge=new Set;Ge.add(B),i.updateQueue=Ge}else He.add(B);break e}else{if(!(i&1)){np(g,ee,i),yc();break e}B=Error(t(426))}}else if(Bt&&U.mode&1){var qt=ip(M);if(qt!==null){!(qt.flags&65536)&&(qt.flags|=256),rp(qt,M,U,g,i),Lu(Ts(B,U));break e}}g=B=Ts(B,U),Qt!==4&&(Qt=2),Io===null?Io=[g]:Io.push(g),g=M;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var q=ep(g,B,i);Ch(g,q);break e;case 1:U=B;var W=g.type,$=g.stateNode;if(!(g.flags&128)&&(typeof W.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(ur===null||!ur.has($)))){g.flags|=65536,i&=-i,g.lanes|=i;var Te=tp(g,U,i);Ch(g,Te);break e}}g=g.return}while(g!==null)}Np(o)}catch(Xe){i=Xe,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function Up(){var n=$a.current;return $a.current=Va,n===null?Va:n}function yc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),nn===null||!(kr&268435455)&&!(Ya&268435455)||dr(nn,ln)}function tl(n,i){var o=yt;yt|=2;var u=Up();(nn!==n||ln!==i)&&(Di=null,zr(n,i));do try{M_();break}catch(d){Dp(n,d)}while(!0);if(Uu(),yt=o,$a.current=u,$t!==null)throw Error(t(261));return nn=null,ln=0,Qt}function M_(){for(;$t!==null;)Ip($t)}function T_(){for(;$t!==null&&!te();)Ip($t)}function Ip(n){var i=kp(n.alternate,n,Bn);n.memoizedProps=n.pendingProps,i===null?Np(n):$t=i,fc.current=null}function Np(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=v_(o,i),o!==null){o.flags&=32767,$t=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,$t=null;return}}else if(o=g_(o,i,Bn),o!==null){$t=o;return}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);Qt===0&&(Qt=5)}function Hr(n,i,o){var u=pt,d=Yn.transition;try{Yn.transition=null,pt=1,w_(n,i,o,u)}finally{Yn.transition=d,pt=u}return null}function w_(n,i,o,u){do Rs();while(cr!==null);if(yt&6)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(cn(n,g),n===nn&&($t=nn=null,ln=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Za||(Za=!0,Bp(Oe,function(){return Rs(),null})),g=(o.flags&15990)!==0,o.subtreeFlags&15990||g){g=Yn.transition,Yn.transition=null;var M=pt;pt=1;var U=yt;yt|=4,fc.current=null,x_(n,o),wp(o,n),Xv(yu),da=!!xu,yu=xu=null,n.current=o,y_(o),re(),yt=U,pt=M,Yn.transition=g}else n.current=o;if(Za&&(Za=!1,cr=n,Qa=d),g=n.pendingLanes,g===0&&(ur=null),Et(o.stateNode),Pn(n,G()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Ka)throw Ka=!1,n=pc,pc=null,n;return Qa&1&&n.tag!==0&&Rs(),g=n.pendingLanes,g&1?n===mc?No++:(No=0,mc=n):No=0,sr(),null}function Rs(){if(cr!==null){var n=Md(Qa),i=Yn.transition,o=pt;try{if(Yn.transition=null,pt=16>n?16:n,cr===null)var u=!1;else{if(n=cr,cr=null,Qa=0,yt&6)throw Error(t(331));var d=yt;for(yt|=4,ke=n.current;ke!==null;){var g=ke,M=g.child;if(ke.flags&16){var U=g.deletions;if(U!==null){for(var B=0;B<U.length;B++){var ee=U[B];for(ke=ee;ke!==null;){var _e=ke;switch(_e.tag){case 0:case 11:case 15:Do(8,_e,g)}var Se=_e.child;if(Se!==null)Se.return=_e,ke=Se;else for(;ke!==null;){_e=ke;var ge=_e.sibling,Ue=_e.return;if(yp(_e),_e===ee){ke=null;break}if(ge!==null){ge.return=Ue,ke=ge;break}ke=Ue}}}var He=g.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var qt=Ge.sibling;Ge.sibling=null,Ge=qt}while(Ge!==null)}}ke=g}}if(g.subtreeFlags&2064&&M!==null)M.return=g,ke=M;else e:for(;ke!==null;){if(g=ke,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Do(9,g,g.return)}var q=g.sibling;if(q!==null){q.return=g.return,ke=q;break e}ke=g.return}}var W=n.current;for(ke=W;ke!==null;){M=ke;var $=M.child;if(M.subtreeFlags&2064&&$!==null)$.return=M,ke=$;else e:for(M=W;ke!==null;){if(U=ke,U.flags&2048)try{switch(U.tag){case 0:case 11:case 15:qa(9,U)}}catch(Xe){Xt(U,U.return,Xe)}if(U===M){ke=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,ke=Te;break e}ke=U.return}}if(yt=d,sr(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(qe,n)}catch{}u=!0}return u}finally{pt=o,Yn.transition=i}}return!1}function Fp(n,i,o){i=Ts(o,i),i=ep(n,i,1),n=ar(n,i,1),i=En(),n!==null&&(jt(n,1,i),Pn(n,i))}function Xt(n,i,o){if(n.tag===3)Fp(n,n,o);else for(;i!==null;){if(i.tag===3){Fp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ur===null||!ur.has(u))){n=Ts(o,n),n=tp(i,n,1),i=ar(i,n,1),n=En(),i!==null&&(jt(i,1,n),Pn(i,n));break}}i=i.return}}function A_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&o,nn===n&&(ln&o)===o&&(Qt===4||Qt===3&&(ln&130023424)===ln&&500>G()-hc?zr(n,0):dc|=o),Pn(n,i)}function Op(n,i){i===0&&(n.mode&1?(i=gt,gt<<=1,!(gt&130023424)&&(gt=4194304)):i=1);var o=En();n=Pi(n,i),n!==null&&(jt(n,i,o),Pn(n,o))}function C_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Op(n,o)}function R_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Op(n,o)}var kp;kp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||wn.current)Cn=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return Cn=!1,m_(n,i,o);Cn=!!(n.flags&131072)}else Cn=!1,Bt&&i.flags&1048576&&vh(i,ba,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Xa(n,i),n=i.pendingProps;var d=gs(i,fn.current);Es(i,o),d=Wu(null,i,u,n,d,o);var g=Xu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(u)?(g=!0,Ca(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ou(i),d.updater=Ga,i.stateNode=d,d._reactInternals=i,Zu(i,u,n,o),i=tc(null,i,u,!0,g,o)):(i.tag=0,Bt&&g&&Cu(i),Sn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Xa(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=b_(u),n=ti(u,n),d){case 0:i=ec(null,i,u,n,o);break e;case 1:i=cp(null,i,u,n,o);break e;case 11:i=sp(null,i,u,n,o);break e;case 14:i=op(null,i,u,ti(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),ec(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),cp(n,i,u,d,o);case 3:e:{if(fp(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,d=g.element,Ah(n,i),Fa(i,u,null,o);var M=i.memoizedState;if(u=M.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=Ts(Error(t(423)),i),i=dp(n,i,u,o,d);break e}else if(u!==d){d=Ts(Error(t(424)),i),i=dp(n,i,u,o,d);break e}else for(kn=nr(i.stateNode.containerInfo.firstChild),On=i,Bt=!0,ei=null,o=Th(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(xs(),u===d){i=Li(n,i,o);break e}Sn(n,i,u,o)}i=i.child}return i;case 5:return Ph(i),n===null&&bu(i),u=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,M=d.children,Su(u,d)?M=null:g!==null&&Su(u,g)&&(i.flags|=32),up(n,i),Sn(n,i,M,o),i.child;case 6:return n===null&&bu(i),null;case 13:return hp(n,i,o);case 4:return ku(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=ys(i,null,u,o):Sn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),sp(n,i,u,d,o);case 7:return Sn(n,i,i.pendingProps,o),i.child;case 8:return Sn(n,i,i.pendingProps.children,o),i.child;case 12:return Sn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,g=i.memoizedProps,M=d.value,It(Ua,u._currentValue),u._currentValue=M,g!==null)if(Jn(g.value,M)){if(g.children===d.children&&!wn.current){i=Li(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var U=g.dependencies;if(U!==null){M=g.child;for(var B=U.firstContext;B!==null;){if(B.context===u){if(g.tag===1){B=bi(-1,o&-o),B.tag=2;var ee=g.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),ee.pending=B}}g.lanes|=o,B=g.alternate,B!==null&&(B.lanes|=o),Nu(g.return,o,i),U.lanes|=o;break}B=B.next}}else if(g.tag===10)M=g.type===i.type?null:g.child;else if(g.tag===18){if(M=g.return,M===null)throw Error(t(341));M.lanes|=o,U=M.alternate,U!==null&&(U.lanes|=o),Nu(M,o,i),M=g.sibling}else M=g.child;if(M!==null)M.return=g;else for(M=g;M!==null;){if(M===i){M=null;break}if(g=M.sibling,g!==null){g.return=M.return,M=g;break}M=M.return}g=M}Sn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Es(i,o),d=qn(d),u=u(d),i.flags|=1,Sn(n,i,u,o),i.child;case 14:return u=i.type,d=ti(u,i.pendingProps),d=ti(u.type,d),op(n,i,u,d,o);case 15:return ap(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),Xa(n,i),i.tag=1,An(u)?(n=!0,Ca(i)):n=!1,Es(i,o),Qh(i,u,d),Zu(i,u,d,o),tc(null,i,u,!0,n,o);case 19:return mp(n,i,o);case 22:return lp(n,i,o)}throw Error(t(156,i.tag))};function Bp(n,i){return A(n,i)}function P_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(n,i,o,u){return new P_(n,i,o,u)}function Sc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function b_(n){if(typeof n=="function")return Sc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===le)return 14}return 2}function hr(n,i){var o=n.alternate;return o===null?(o=Kn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function nl(n,i,o,u,d,g){var M=2;if(u=n,typeof n=="function")Sc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case I:return Vr(o.children,d,g,i);case V:M=8,d|=8;break;case R:return n=Kn(12,o,i,d|2),n.elementType=R,n.lanes=g,n;case Q:return n=Kn(13,o,i,d),n.elementType=Q,n.lanes=g,n;case se:return n=Kn(19,o,i,d),n.elementType=se,n.lanes=g,n;case ue:return il(o,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:M=10;break e;case O:M=9;break e;case J:M=11;break e;case le:M=14;break e;case ne:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Kn(M,o,i,d),i.elementType=n,i.type=u,i.lanes=g,i}function Vr(n,i,o,u){return n=Kn(7,n,u,i),n.lanes=o,n}function il(n,i,o,u){return n=Kn(22,n,u,i),n.elementType=ue,n.lanes=o,n.stateNode={isHidden:!1},n}function Ec(n,i,o){return n=Kn(6,n,null,i),n.lanes=o,n}function Mc(n,i,o){return i=Kn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function L_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=un(0),this.expirationTimes=un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tc(n,i,o,u,d,g,M,U,B){return n=new L_(n,i,o,U,B),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Kn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ou(g),n}function D_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function zp(n){if(!n)return rr;n=n._reactInternals;e:{if(hi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(An(o))return ph(n,o,i)}return i}function Hp(n,i,o,u,d,g,M,U,B){return n=Tc(o,u,!0,n,d,g,M,U,B),n.context=zp(null),o=n.current,u=En(),d=fr(o),g=bi(u,d),g.callback=i??null,ar(o,g,d),n.current.lanes=d,jt(n,d,u),Pn(n,u),n}function rl(n,i,o,u){var d=i.current,g=En(),M=fr(d);return o=zp(o),i.context===null?i.context=o:i.pendingContext=o,i=bi(g,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=ar(d,i,M),n!==null&&(ri(n,d,M,g),Na(n,d,M)),M}function sl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Vp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function wc(n,i){Vp(n,i),(n=n.alternate)&&Vp(n,i)}function U_(){return null}var Gp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ac(n){this._internalRoot=n}ol.prototype.render=Ac.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));rl(n,i,null,null)},ol.prototype.unmount=Ac.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Br(function(){rl(null,n,null,null)}),i[wi]=null}};function ol(n){this._internalRoot=n}ol.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ad();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Ji.length&&i!==0&&i<Ji[o].priority;o++);Ji.splice(o,0,n),o===0&&Pd(n)}};function Cc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Wp(){}function I_(n,i,o,u,d){if(d){if(typeof u=="function"){var g=u;u=function(){var ee=sl(M);g.call(ee)}}var M=Hp(i,u,n,0,null,!1,!1,"",Wp);return n._reactRootContainer=M,n[wi]=M.current,xo(n.nodeType===8?n.parentNode:n),Br(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var U=u;u=function(){var ee=sl(B);U.call(ee)}}var B=Tc(n,0,!1,null,null,!1,!1,"",Wp);return n._reactRootContainer=B,n[wi]=B.current,xo(n.nodeType===8?n.parentNode:n),Br(function(){rl(i,B,o,u)}),B}function ll(n,i,o,u,d){var g=o._reactRootContainer;if(g){var M=g;if(typeof d=="function"){var U=d;d=function(){var B=sl(M);U.call(B)}}rl(i,M,n,d)}else M=I_(o,i,n,d,u);return sl(M)}Td=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=on(i.pendingLanes);o!==0&&(br(i,o|1),Pn(i,G()),!(yt&6)&&(Cs=G()+500,sr()))}break;case 13:Br(function(){var u=Pi(n,1);if(u!==null){var d=En();ri(u,n,1,d)}}),wc(n,1)}},Ql=function(n){if(n.tag===13){var i=Pi(n,134217728);if(i!==null){var o=En();ri(i,n,134217728,o)}wc(n,134217728)}},wd=function(n){if(n.tag===13){var i=fr(n),o=Pi(n,i);if(o!==null){var u=En();ri(o,n,i,u)}wc(n,i)}},Ad=function(){return pt},Cd=function(n,i){var o=pt;try{return pt=n,i()}finally{pt=o}},Ce=function(n,i,o){switch(i){case"input":if(ct(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=wa(u);if(!d)throw Error(t(90));mt(u),ct(u,d)}}}break;case"textarea":me(n,o);break;case"select":i=o.value,i!=null&&D(n,!!o.multiple,i,!1)}},Nt=_c,Kt=Br;var N_={usingClientEntryPoint:!1,Events:[Eo,ps,wa,be,st,_c]},Fo={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F_={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=la(n),n===null?null:n.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||U_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{qe=ul.inject(F_),ot=ul}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_,bn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cc(i))throw Error(t(200));return D_(n,i,null,o)},bn.createRoot=function(n,i){if(!Cc(n))throw Error(t(299));var o=!1,u="",d=Gp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Tc(n,1,!1,null,null,o,!1,u,d),n[wi]=i.current,xo(n.nodeType===8?n.parentNode:n),new Ac(i)},bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=la(i),n=n===null?null:n.stateNode,n},bn.flushSync=function(n){return Br(n)},bn.hydrate=function(n,i,o){if(!al(i))throw Error(t(200));return ll(null,n,i,!0,o)},bn.hydrateRoot=function(n,i,o){if(!Cc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,g="",M=Gp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Hp(i,null,n,1,o??null,d,!1,g,M),n[wi]=i.current,xo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ol(i)},bn.render=function(n,i,o){if(!al(i))throw Error(t(200));return ll(null,n,i,!1,o)},bn.unmountComponentAtNode=function(n){if(!al(n))throw Error(t(40));return n._reactRootContainer?(Br(function(){ll(null,null,n,!1,function(){n._reactRootContainer=null,n[wi]=null})}),!0):!1},bn.unstable_batchedUpdates=_c,bn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!al(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ll(n,i,o,!1,u)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var Jp;function j_(){if(Jp)return bc.exports;Jp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),bc.exports=X_(),bc.exports}var em;function q_(){if(em)return cl;em=1;var r=j_();return cl.createRoot=r.createRoot,cl.hydrateRoot=r.hydrateRoot,cl}var $_=q_();const Y_=lg($_);var ko={},tm;function K_(){if(tm)return ko;tm=1,Object.defineProperty(ko,"__esModule",{value:!0}),ko.parse=c,ko.serialize=h;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function c(v,S){const E=new l,T=v.length;if(T<2)return E;const y=(S==null?void 0:S.decode)||m;let _=0;do{const b=v.indexOf("=",_);if(b===-1)break;const L=v.indexOf(";",_),P=L===-1?T:L;if(b>P){_=v.lastIndexOf(";",b-1)+1;continue}const z=f(v,_,b),F=p(v,b,z),I=v.slice(z,F);if(E[I]===void 0){let V=f(v,b+1,P),R=p(v,P,V);const C=y(v.slice(V,R));E[I]=C}_=P+1}while(_<T);return E}function f(v,S,E){do{const T=v.charCodeAt(S);if(T!==32&&T!==9)return S}while(++S<E);return E}function p(v,S,E){for(;S>E;){const T=v.charCodeAt(--S);if(T!==32&&T!==9)return S+1}return E}function h(v,S,E){const T=(E==null?void 0:E.encode)||encodeURIComponent;if(!r.test(v))throw new TypeError(`argument name is invalid: ${v}`);const y=T(S);if(!e.test(y))throw new TypeError(`argument val is invalid: ${S}`);let _=v+"="+y;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!t.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!s.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function m(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return a.call(v)==="[object Date]"}return ko}K_();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var nm="popstate";function Z_(r={}){function e(a,l){let{pathname:c="/",search:f="",hash:p=""}=is(a.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),pf("",{pathname:c,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(a,l){let c=a.document.querySelector("base"),f="";if(c&&c.getAttribute("href")){let p=a.location.href,h=p.indexOf("#");f=h===-1?p:p.slice(0,h)}return f+"#"+(typeof l=="string"?l:qo(l))}function s(a,l){di(a.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return J_(e,t,s,r)}function Vt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function di(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Q_(){return Math.random().toString(36).substring(2,10)}function im(r,e){return{usr:r.state,key:r.key,idx:e}}function pf(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?is(e):e,state:t,key:e&&e.key||s||Q_()}}function qo({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function is(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function J_(r,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,f="POP",p=null,h=m();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function m(){return(c.state||{idx:null}).idx}function x(){f="POP";let y=m(),_=y==null?null:y-h;h=y,p&&p({action:f,location:T.location,delta:_})}function v(y,_){f="PUSH";let b=pf(T.location,y,_);t&&t(b,y),h=m()+1;let L=im(b,h),P=T.createHref(b);try{c.pushState(L,"",P)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;a.location.assign(P)}l&&p&&p({action:f,location:T.location,delta:1})}function S(y,_){f="REPLACE";let b=pf(T.location,y,_);t&&t(b,y),h=m();let L=im(b,h),P=T.createHref(b);c.replaceState(L,"",P),l&&p&&p({action:f,location:T.location,delta:0})}function E(y){let _=a.location.origin!=="null"?a.location.origin:a.location.href,b=typeof y=="string"?y:qo(y);return b=b.replace(/ $/,"%20"),Vt(_,`No window.location.(origin|href) available to create URL for href: ${b}`),new URL(b,_)}let T={get action(){return f},get location(){return r(a,c)},listen(y){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(nm,x),p=y,()=>{a.removeEventListener(nm,x),p=null}},createHref(y){return e(a,y)},createURL:E,encodeLocation(y){let _=E(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:S,go(y){return c.go(y)}};return T}function ug(r,e,t="/"){return e0(r,e,t,!1)}function e0(r,e,t,s){let a=typeof e=="string"?is(e):e,l=Tr(a.pathname||"/",t);if(l==null)return null;let c=cg(r);t0(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let h=d0(l);f=c0(c[p],h,s)}return f}function cg(r,e=[],t=[],s=""){let a=(l,c,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(Vt(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let h=Vi([s,p.relativePath]),m=t.concat(p);l.children&&l.children.length>0&&(Vt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),cg(l.children,e,m,h)),!(l.path==null&&!l.index)&&e.push({path:h,score:l0(h,l.index),routesMeta:m})};return r.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))a(l,c);else for(let p of fg(l.path))a(l,c,p)}),e}function fg(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=fg(s.join("/")),f=[];return f.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&f.push(...c),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function t0(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:u0(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var n0=/^:[\w-]+$/,i0=3,r0=2,s0=1,o0=10,a0=-2,rm=r=>r==="*";function l0(r,e){let t=r.split("/"),s=t.length;return t.some(rm)&&(s+=a0),e&&(s+=r0),t.filter(a=>!rm(a)).reduce((a,l)=>a+(n0.test(l)?i0:l===""?s0:o0),s)}function u0(r,e){return r.length===e.length&&r.slice(0,-1).every((s,a)=>s===e[a])?r[r.length-1]-e[e.length-1]:0}function c0(r,e,t=!1){let{routesMeta:s}=r,a={},l="/",c=[];for(let f=0;f<s.length;++f){let p=s[f],h=f===s.length-1,m=l==="/"?e:e.slice(l.length)||"/",x=Vl({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},m),v=p.route;if(!x&&h&&t&&!s[s.length-1].route.index&&(x=Vl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},m)),!x)return null;Object.assign(a,x.params),c.push({params:a,pathname:Vi([l,x.pathname]),pathnameBase:g0(Vi([l,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(l=Vi([l,x.pathnameBase]))}return c}function Vl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=f0(r.path,r.caseSensitive,r.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:s.reduce((h,{paramName:m,isOptional:x},v)=>{if(m==="*"){let E=f[v]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[v];return x&&!S?h[m]=void 0:h[m]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:c,pattern:r}}function f0(r,e=!1,t=!0){di(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function d0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return di(!1,`The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Tr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function h0(r,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof r=="string"?is(r):r;return{pathname:t?t.startsWith("/")?t:p0(t,e):e,search:v0(s),hash:_0(a)}}function p0(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Uc(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function m0(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function dg(r){let e=m0(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function hg(r,e,t,s=!1){let a;typeof r=="string"?a=is(r):(a={...r},Vt(!a.pathname||!a.pathname.includes("?"),Uc("?","pathname","search",a)),Vt(!a.pathname||!a.pathname.includes("#"),Uc("#","pathname","hash",a)),Vt(!a.search||!a.search.includes("#"),Uc("#","search","hash",a)));let l=r===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let x=e.length-1;if(!s&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),x-=1;a.pathname=v.join("/")}f=x>=0?e[x]:"/"}let p=h0(a,f),h=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(h||m)&&(p.pathname+="/"),p}var Vi=r=>r.join("/").replace(/\/\/+/g,"/"),g0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),v0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,_0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function x0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var pg=["POST","PUT","PATCH","DELETE"];new Set(pg);var y0=["GET",...pg];new Set(y0);var no=de.createContext(null);no.displayName="DataRouter";var jl=de.createContext(null);jl.displayName="DataRouterState";var mg=de.createContext({isTransitioning:!1});mg.displayName="ViewTransition";var S0=de.createContext(new Map);S0.displayName="Fetchers";var E0=de.createContext(null);E0.displayName="Await";var Ei=de.createContext(null);Ei.displayName="Navigation";var Yo=de.createContext(null);Yo.displayName="Location";var qi=de.createContext({outlet:null,matches:[],isDataRoute:!1});qi.displayName="Route";var od=de.createContext(null);od.displayName="RouteError";function M0(r,{relative:e}={}){Vt(Ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=de.useContext(Ei),{hash:a,pathname:l,search:c}=Zo(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Vi([t,l])),s.createHref({pathname:f,search:c,hash:a})}function Ko(){return de.useContext(Yo)!=null}function rs(){return Vt(Ko(),"useLocation() may be used only in the context of a <Router> component."),de.useContext(Yo).location}var gg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vg(r){de.useContext(Ei).static||de.useLayoutEffect(r)}function T0(){let{isDataRoute:r}=de.useContext(qi);return r?O0():w0()}function w0(){Vt(Ko(),"useNavigate() may be used only in the context of a <Router> component.");let r=de.useContext(no),{basename:e,navigator:t}=de.useContext(Ei),{matches:s}=de.useContext(qi),{pathname:a}=rs(),l=JSON.stringify(dg(s)),c=de.useRef(!1);return vg(()=>{c.current=!0}),de.useCallback((p,h={})=>{if(di(c.current,gg),!c.current)return;if(typeof p=="number"){t.go(p);return}let m=hg(p,JSON.parse(l),a,h.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Vi([e,m.pathname])),(h.replace?t.replace:t.push)(m,h.state,h)},[e,t,l,a,r])}de.createContext(null);function Zo(r,{relative:e}={}){let{matches:t}=de.useContext(qi),{pathname:s}=rs(),a=JSON.stringify(dg(t));return de.useMemo(()=>hg(r,JSON.parse(a),s,e==="path"),[r,a,s,e])}function A0(r,e){return _g(r,e)}function _g(r,e,t,s){var _;Vt(Ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=de.useContext(Ei),{matches:l}=de.useContext(qi),c=l[l.length-1],f=c?c.params:{},p=c?c.pathname:"/",h=c?c.pathnameBase:"/",m=c&&c.route;{let b=m&&m.path||"";xg(p,!m||b.endsWith("*")||b.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b==="/"?"*":`${b}/*`}">.`)}let x=rs(),v;if(e){let b=typeof e=="string"?is(e):e;Vt(h==="/"||((_=b.pathname)==null?void 0:_.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${b.pathname}" was given in the \`location\` prop.`),v=b}else v=x;let S=v.pathname||"/",E=S;if(h!=="/"){let b=h.replace(/^\//,"").split("/");E="/"+S.replace(/^\//,"").split("/").slice(b.length).join("/")}let T=ug(r,{pathname:E});di(m||T!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),di(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=L0(T&&T.map(b=>Object.assign({},b,{params:Object.assign({},f,b.params),pathname:Vi([h,a.encodeLocation?a.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?h:Vi([h,a.encodeLocation?a.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,t,s);return e&&y?de.createElement(Yo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},y):y}function C0(){let r=F0(),e=x0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=de.createElement(de.Fragment,null,de.createElement("p",null,"💿 Hey developer 👋"),de.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",de.createElement("code",{style:l},"ErrorBoundary")," or"," ",de.createElement("code",{style:l},"errorElement")," prop on your route.")),de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),t?de.createElement("pre",{style:a},t):null,c)}var R0=de.createElement(C0,null),P0=class extends de.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?de.createElement(qi.Provider,{value:this.props.routeContext},de.createElement(od.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function b0({routeContext:r,match:e,children:t}){let s=de.useContext(no);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),de.createElement(qi.Provider,{value:r},t)}function L0(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let a=r,l=t==null?void 0:t.errors;if(l!=null){let p=a.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);Vt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,f=-1;if(t)for(let p=0;p<a.length;p++){let h=a[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(f=p),h.route.id){let{loaderData:m,errors:x}=t,v=h.route.loader&&!m.hasOwnProperty(h.route.id)&&(!x||x[h.route.id]===void 0);if(h.route.lazy||v){c=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((p,h,m)=>{let x,v=!1,S=null,E=null;t&&(x=l&&h.route.id?l[h.route.id]:void 0,S=h.route.errorElement||R0,c&&(f<0&&m===0?(xg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):f===m&&(v=!0,E=h.route.hydrateFallbackElement||null)));let T=e.concat(a.slice(0,m+1)),y=()=>{let _;return x?_=S:v?_=E:h.route.Component?_=de.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=p,de.createElement(b0,{match:h,routeContext:{outlet:p,matches:T,isDataRoute:t!=null},children:_})};return t&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?de.createElement(P0,{location:t.location,revalidation:t.revalidation,component:S,error:x,children:y(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):y()},null)}function ad(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function D0(r){let e=de.useContext(no);return Vt(e,ad(r)),e}function U0(r){let e=de.useContext(jl);return Vt(e,ad(r)),e}function I0(r){let e=de.useContext(qi);return Vt(e,ad(r)),e}function ld(r){let e=I0(r),t=e.matches[e.matches.length-1];return Vt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function N0(){return ld("useRouteId")}function F0(){var s;let r=de.useContext(od),e=U0("useRouteError"),t=ld("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function O0(){let{router:r}=D0("useNavigate"),e=ld("useNavigate"),t=de.useRef(!1);return vg(()=>{t.current=!0}),de.useCallback(async(a,l={})=>{di(t.current,gg),t.current&&(typeof a=="number"?r.navigate(a):await r.navigate(a,{fromRouteId:e,...l}))},[r,e])}var sm={};function xg(r,e,t){!e&&!sm[r]&&(sm[r]=!0,di(!1,t))}de.memo(k0);function k0({routes:r,future:e,state:t}){return _g(r,void 0,t,e)}function mf(r){Vt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function B0({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1}){Vt(!Ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),f=de.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=is(t));let{pathname:p="/",search:h="",hash:m="",state:x=null,key:v="default"}=t,S=de.useMemo(()=>{let E=Tr(p,c);return E==null?null:{location:{pathname:E,search:h,hash:m,state:x,key:v},navigationType:s}},[c,p,h,m,x,v,s]);return di(S!=null,`<Router basename="${c}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:de.createElement(Ei.Provider,{value:f},de.createElement(Yo.Provider,{children:e,value:S}))}function z0({children:r,location:e}){return A0(gf(r),e)}function gf(r,e=[]){let t=[];return de.Children.forEach(r,(s,a)=>{if(!de.isValidElement(s))return;let l=[...e,a];if(s.type===de.Fragment){t.push.apply(t,gf(s.props.children,l));return}Vt(s.type===mf,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Vt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=gf(s.props.children,l)),t.push(c)}),t}var Il="get",Nl="application/x-www-form-urlencoded";function ql(r){return r!=null&&typeof r.tagName=="string"}function H0(r){return ql(r)&&r.tagName.toLowerCase()==="button"}function V0(r){return ql(r)&&r.tagName.toLowerCase()==="form"}function G0(r){return ql(r)&&r.tagName.toLowerCase()==="input"}function W0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function X0(r,e){return r.button===0&&(!e||e==="_self")&&!W0(r)}var fl=null;function j0(){if(fl===null)try{new FormData(document.createElement("form"),0),fl=!1}catch{fl=!0}return fl}var q0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ic(r){return r!=null&&!q0.has(r)?(di(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Nl}"`),null):r}function $0(r,e){let t,s,a,l,c;if(V0(r)){let f=r.getAttribute("action");s=f?Tr(f,e):null,t=r.getAttribute("method")||Il,a=Ic(r.getAttribute("enctype"))||Nl,l=new FormData(r)}else if(H0(r)||G0(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||f.getAttribute("action");if(s=p?Tr(p,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Il,a=Ic(r.getAttribute("formenctype"))||Ic(f.getAttribute("enctype"))||Nl,l=new FormData(f,r),!j0()){let{name:h,type:m,value:x}=r;if(m==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,x)}}else{if(ql(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Il,s=null,a=Nl,c=r}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}function ud(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function Y0(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function K0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Z0(r,e,t){let s=await Promise.all(r.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await Y0(l,t);return c.links?c.links():[]}return[]}));return tx(s.flat(1).filter(K0).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function om(r,e,t,s,a,l){let c=(p,h)=>t[h]?p.route.id!==t[h].route.id:!0,f=(p,h)=>{var m;return t[h].pathname!==p.pathname||((m=t[h].route.path)==null?void 0:m.endsWith("*"))&&t[h].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,h)=>c(p,h)||f(p,h)):l==="data"?e.filter((p,h)=>{var x;let m=s.routes[p.route.id];if(!m||!m.hasLoader)return!1;if(c(p,h)||f(p,h))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=t[0])==null?void 0:x.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Q0(r,e){return J0(r.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let a=[s.module];return s.imports&&(a=a.concat(s.imports)),a}).flat(1))}function J0(r){return[...new Set(r)]}function ex(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function tx(r,e){let t=new Set;return new Set(e),r.reduce((s,a)=>{let l=JSON.stringify(ex(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}function nx(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function ix(){let r=de.useContext(no);return ud(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function rx(){let r=de.useContext(jl);return ud(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var cd=de.createContext(void 0);cd.displayName="FrameworkContext";function yg(){let r=de.useContext(cd);return ud(r,"You must render this element inside a <HydratedRouter> element"),r}function sx(r,e){let t=de.useContext(cd),[s,a]=de.useState(!1),[l,c]=de.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:h,onMouseLeave:m,onTouchStart:x}=e,v=de.useRef(null);de.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let T=_=>{_.forEach(b=>{c(b.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),de.useEffect(()=>{if(s){let T=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(T)}}},[s]);let S=()=>{a(!0)},E=()=>{a(!1),c(!1)};return t?r!=="intent"?[l,v,{}]:[l,v,{onFocus:Bo(f,S),onBlur:Bo(p,E),onMouseEnter:Bo(h,S),onMouseLeave:Bo(m,E),onTouchStart:Bo(x,S)}]:[!1,v,{}]}function Bo(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function ox({page:r,...e}){let{router:t}=ix(),s=de.useMemo(()=>ug(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?de.createElement(lx,{page:r,matches:s,...e}):(console.warn(`Tried to prefetch ${r} but no routes matched.`),null)}function ax(r){let{manifest:e,routeModules:t}=yg(),[s,a]=de.useState([]);return de.useEffect(()=>{let l=!1;return Z0(r,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[r,e,t]),s}function lx({page:r,matches:e,...t}){let s=rs(),{manifest:a,routeModules:l}=yg(),{loaderData:c,matches:f}=rx(),p=de.useMemo(()=>om(r,e,f,a,s,"data"),[r,e,f,a,s]),h=de.useMemo(()=>om(r,e,f,a,s,"assets"),[r,e,f,a,s]),m=de.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let S=new Set,E=!1;if(e.forEach(y=>{var b;let _=a.routes[y.route.id];!_||!_.hasLoader||(!p.some(L=>L.route.id===y.route.id)&&y.route.id in c&&((b=l[y.route.id])!=null&&b.shouldRevalidate)||_.hasClientLoader?E=!0:S.add(y.route.id))}),S.size===0)return[];let T=nx(r);return E&&S.size>0&&T.searchParams.set("_routes",e.filter(y=>S.has(y.route.id)).map(y=>y.route.id).join(",")),[T.pathname+T.search]},[c,s,a,p,e,r,l]),x=de.useMemo(()=>Q0(h,a),[h,a]),v=ax(h);return de.createElement(de.Fragment,null,m.map(S=>de.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...t})),x.map(S=>de.createElement("link",{key:S,rel:"modulepreload",href:S,...t})),v.map(({key:S,link:E})=>de.createElement("link",{key:S,...E})))}function ux(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Sg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sg&&(window.__reactRouterVersion="7.0.2")}catch{}function Eg({basename:r,children:e,window:t}){let s=de.useRef();s.current==null&&(s.current=Z_({window:t,v5Compat:!0}));let a=s.current,[l,c]=de.useState({action:a.action,location:a.location}),f=de.useCallback(p=>{de.startTransition(()=>c(p))},[c]);return de.useLayoutEffect(()=>a.listen(f),[a,f]),de.createElement(B0,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:a})}var Mg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tg=de.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,state:f,target:p,to:h,preventScrollReset:m,viewTransition:x,...v},S){let{basename:E}=de.useContext(Ei),T=typeof h=="string"&&Mg.test(h),y,_=!1;if(typeof h=="string"&&T&&(y=h,Sg))try{let R=new URL(window.location.href),C=h.startsWith("//")?new URL(R.protocol+h):new URL(h),O=Tr(C.pathname,E);C.origin===R.origin&&O!=null?h=O+C.search+C.hash:_=!0}catch{di(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let b=M0(h,{relative:a}),[L,P,z]=sx(s,v),F=hx(h,{replace:c,state:f,target:p,preventScrollReset:m,relative:a,viewTransition:x});function I(R){e&&e(R),R.defaultPrevented||F(R)}let V=de.createElement("a",{...v,...z,href:y||b,onClick:_||l?e:I,ref:ux(S,P),target:p,"data-discover":!T&&t==="render"?"true":void 0});return L&&!T?de.createElement(de.Fragment,null,V,de.createElement(ox,{page:b})):V});Tg.displayName="Link";var cx=de.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:f,children:p,...h},m){let x=Zo(c,{relative:h.relative}),v=rs(),S=de.useContext(jl),{navigator:E,basename:T}=de.useContext(Ei),y=S!=null&&_x(x)&&f===!0,_=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,b=v.pathname,L=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(b=b.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&T&&(L=Tr(L,T)||L);const P=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let z=b===_||!a&&b.startsWith(_)&&b.charAt(P)==="/",F=L!=null&&(L===_||!a&&L.startsWith(_)&&L.charAt(_.length)==="/"),I={isActive:z,isPending:F,isTransitioning:y},V=z?e:void 0,R;typeof s=="function"?R=s(I):R=[s,z?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(I):l;return de.createElement(Tg,{...h,"aria-current":V,className:R,ref:m,style:C,to:c,viewTransition:f},typeof p=="function"?p(I):p)});cx.displayName="NavLink";var fx=de.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=Il,action:f,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:x,...v},S)=>{let E=gx(),T=vx(f,{relative:h}),y=c.toLowerCase()==="get"?"get":"post",_=typeof f=="string"&&Mg.test(f),b=L=>{if(p&&p(L),L.defaultPrevented)return;L.preventDefault();let P=L.nativeEvent.submitter,z=(P==null?void 0:P.getAttribute("formmethod"))||c;E(P||L.currentTarget,{fetcherKey:e,method:z,navigate:t,replace:a,state:l,relative:h,preventScrollReset:m,viewTransition:x})};return de.createElement("form",{ref:S,method:y,action:T,onSubmit:s?p:b,...v,"data-discover":!_&&r==="render"?"true":void 0})});fx.displayName="Form";function dx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wg(r){let e=de.useContext(no);return Vt(e,dx(r)),e}function hx(r,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:c}={}){let f=T0(),p=rs(),h=Zo(r,{relative:l});return de.useCallback(m=>{if(X0(m,e)){m.preventDefault();let x=t!==void 0?t:qo(p)===qo(h);f(r,{replace:x,state:s,preventScrollReset:a,relative:l,viewTransition:c})}},[p,f,h,t,s,e,r,a,l,c])}var px=0,mx=()=>`__${String(++px)}__`;function gx(){let{router:r}=wg("useSubmit"),{basename:e}=de.useContext(Ei),t=N0();return de.useCallback(async(s,a={})=>{let{action:l,method:c,encType:f,formData:p,body:h}=$0(s,e);if(a.navigate===!1){let m=a.fetcherKey||mx();await r.fetch(m,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:h,formMethod:a.method||c,formEncType:a.encType||f,flushSync:a.flushSync})}else await r.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:h,formMethod:a.method||c,formEncType:a.encType||f,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,e,t])}function vx(r,{relative:e}={}){let{basename:t}=de.useContext(Ei),s=de.useContext(qi);Vt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...Zo(r||".",{relative:e})},c=rs();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(m=>m==="")){f.delete("index"),p.filter(x=>x).forEach(x=>f.append("index",x));let m=f.toString();l.search=m?`?${m}`:""}}return(!r||r===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Vi([t,l.pathname])),qo(l)}function _x(r,e={}){let t=de.useContext(mg);Vt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=wg("useViewTransitionState"),a=Zo(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Tr(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Tr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Vl(a.pathname,c)!=null||Vl(a.pathname,l)!=null}new TextEncoder;const xx=()=>Ve.jsxs("nav",{className:"navbar",children:[Ve.jsx("div",{className:"navbar-left"}),Ve.jsxs("div",{className:"navbar-center",children:[Ve.jsx("img",{src:"/images/p_logo.png",alt:"Description",className:"navbar-logo"}),Ve.jsxs("ul",{className:"nav-links",children:[Ve.jsx("li",{children:Ve.jsx("a",{href:"/",children:"PROJECTS"})}),Ve.jsx("li",{children:Ve.jsx("a",{href:"/about",children:"ABOUT"})})]})]})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fd="171",yx=0,am=1,Sx=2,Ag=1,Ex=2,Bi=3,wr=0,Un=1,xi=2,Er=0,js=1,lm=2,um=3,cm=4,Mx=5,Zr=100,Tx=101,wx=102,Ax=103,Cx=104,Rx=200,Px=201,bx=202,Lx=203,vf=204,_f=205,Dx=206,Ux=207,Ix=208,Nx=209,Fx=210,Ox=211,kx=212,Bx=213,zx=214,xf=0,yf=1,Sf=2,Ys=3,Ef=4,Mf=5,Tf=6,wf=7,Cg=0,Hx=1,Vx=2,Mr=0,Gx=1,Wx=2,Xx=3,jx=4,qx=5,$x=6,Yx=7,Rg=300,Ks=301,Zs=302,Af=303,Cf=304,$l=306,Rf=1e3,Jr=1001,Pf=1002,fi=1003,Kx=1004,dl=1005,yi=1006,Nc=1007,es=1008,Xi=1009,Pg=1010,bg=1011,$o=1012,dd=1013,ts=1014,zi=1015,Qo=1016,hd=1017,pd=1018,Qs=1020,Lg=35902,Dg=1021,Ug=1022,ui=1023,Ig=1024,Ng=1025,qs=1026,Js=1027,Fg=1028,md=1029,Og=1030,gd=1031,vd=1033,Fl=33776,Ol=33777,kl=33778,Bl=33779,bf=35840,Lf=35841,Df=35842,Uf=35843,If=36196,Nf=37492,Ff=37496,Of=37808,kf=37809,Bf=37810,zf=37811,Hf=37812,Vf=37813,Gf=37814,Wf=37815,Xf=37816,jf=37817,qf=37818,$f=37819,Yf=37820,Kf=37821,zl=36492,Zf=36494,Qf=36495,kg=36283,Jf=36284,ed=36285,td=36286,Zx=3200,Qx=3201,Bg=0,Jx=1,Sr="",Vn="srgb",eo="srgb-linear",Gl="linear",Lt="srgb",Ps=7680,fm=519,ey=512,ty=513,ny=514,zg=515,iy=516,ry=517,sy=518,oy=519,dm=35044,hm="300 es",Hi=2e3,Wl=2001;class io{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fc=Math.PI/180,nd=180/Math.PI;function Jo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function ay(r,e){return(r%e+e)%e}function Oc(r,e,t){return(1-t)*r+t*e}function zo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ln(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,t=0){At.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,s,a,l,c,f,p,h){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,p,h)}set(e,t,s,a,l,c,f,p,h){const m=this.elements;return m[0]=e,m[1]=a,m[2]=f,m[3]=t,m[4]=l,m[5]=p,m[6]=s,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],p=s[6],h=s[1],m=s[4],x=s[7],v=s[2],S=s[5],E=s[8],T=a[0],y=a[3],_=a[6],b=a[1],L=a[4],P=a[7],z=a[2],F=a[5],I=a[8];return l[0]=c*T+f*b+p*z,l[3]=c*y+f*L+p*F,l[6]=c*_+f*P+p*I,l[1]=h*T+m*b+x*z,l[4]=h*y+m*L+x*F,l[7]=h*_+m*P+x*I,l[2]=v*T+S*b+E*z,l[5]=v*y+S*L+E*F,l[8]=v*_+S*P+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],m=e[8];return t*c*m-t*f*h-s*l*m+s*f*p+a*l*h-a*c*p}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],m=e[8],x=m*c-f*h,v=f*p-m*l,S=h*l-c*p,E=t*x+s*v+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=x*T,e[1]=(a*h-m*s)*T,e[2]=(f*s-a*c)*T,e[3]=v*T,e[4]=(m*t-a*p)*T,e[5]=(a*l-f*t)*T,e[6]=S*T,e[7]=(s*p-h*t)*T,e[8]=(c*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const p=Math.cos(l),h=Math.sin(l);return this.set(s*p,s*h,-s*(p*c+h*f)+c+e,-a*h,a*p,-a*(-h*c+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(kc.makeScale(e,t)),this}rotate(e){return this.premultiply(kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kc=new at;function Hg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ly(){const r=Xl("canvas");return r.style.display="block",r}const pm={};function Gs(r){r in pm||(pm[r]=!0,console.warn(r))}function uy(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function cy(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fy(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mm=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gm=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dy(){const r={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Lt&&(a.r=Gi(a.r),a.g=Gi(a.g),a.b=Gi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Lt&&(a.r=$s(a.r),a.g=$s(a.g),a.b=$s(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Sr?Gl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[eo]:{primaries:e,whitePoint:s,transfer:Gl,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:s,transfer:Lt,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),r}const wt=dy();function Gi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $s(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let bs;class hy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=Xl("canvas")),bs.width=e.width,bs.height=e.height;const s=bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xl("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Gi(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Gi(t[s]/255)*255):t[s]=Gi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let py=0;class Vg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Jo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Bc(a[c].image)):l.push(Bc(a[c]))}else l=Bc(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function Bc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let my=0;class In extends io{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,s=Jr,a=Jr,l=yi,c=es,f=ui,p=Xi,h=In.DEFAULT_ANISOTROPY,m=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Jo(),this.name="",this.source=new Vg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rf:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case Pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rf:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case Pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Rg;In.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,s=0,a=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const p=e.elements,h=p[0],m=p[4],x=p[8],v=p[1],S=p[5],E=p[9],T=p[2],y=p[6],_=p[10];if(Math.abs(m-v)<.01&&Math.abs(x-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(x+T)<.1&&Math.abs(E+y)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,P=(S+1)/2,z=(_+1)/2,F=(m+v)/4,I=(x+T)/4,V=(E+y)/4;return L>P&&L>z?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=F/s,l=I/s):P>z?P<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),s=F/a,l=V/a):z<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),s=I/l,a=V/l),this.set(s,a,l,t),this}let b=Math.sqrt((y-E)*(y-E)+(x-T)*(x-T)+(v-m)*(v-m));return Math.abs(b)<.001&&(b=1),this.x=(y-E)/b,this.y=(x-T)/b,this.z=(v-m)/b,this.w=Math.acos((h+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gy extends io{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new In(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends gy{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Gg extends In{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vy extends In{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let p=s[a+0],h=s[a+1],m=s[a+2],x=s[a+3];const v=l[c+0],S=l[c+1],E=l[c+2],T=l[c+3];if(f===0){e[t+0]=p,e[t+1]=h,e[t+2]=m,e[t+3]=x;return}if(f===1){e[t+0]=v,e[t+1]=S,e[t+2]=E,e[t+3]=T;return}if(x!==T||p!==v||h!==S||m!==E){let y=1-f;const _=p*v+h*S+m*E+x*T,b=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const z=Math.sqrt(L),F=Math.atan2(z,_*b);y=Math.sin(y*F)/z,f=Math.sin(f*F)/z}const P=f*b;if(p=p*y+v*P,h=h*y+S*P,m=m*y+E*P,x=x*y+T*P,y===1-f){const z=1/Math.sqrt(p*p+h*h+m*m+x*x);p*=z,h*=z,m*=z,x*=z}}e[t]=p,e[t+1]=h,e[t+2]=m,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],p=s[a+1],h=s[a+2],m=s[a+3],x=l[c],v=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+m*x+p*S-h*v,e[t+1]=p*E+m*v+h*x-f*S,e[t+2]=h*E+m*S+f*v-p*x,e[t+3]=m*E-f*x-p*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,p=Math.sin,h=f(s/2),m=f(a/2),x=f(l/2),v=p(s/2),S=p(a/2),E=p(l/2);switch(c){case"XYZ":this._x=v*m*x+h*S*E,this._y=h*S*x-v*m*E,this._z=h*m*E+v*S*x,this._w=h*m*x-v*S*E;break;case"YXZ":this._x=v*m*x+h*S*E,this._y=h*S*x-v*m*E,this._z=h*m*E-v*S*x,this._w=h*m*x+v*S*E;break;case"ZXY":this._x=v*m*x-h*S*E,this._y=h*S*x+v*m*E,this._z=h*m*E+v*S*x,this._w=h*m*x-v*S*E;break;case"ZYX":this._x=v*m*x-h*S*E,this._y=h*S*x+v*m*E,this._z=h*m*E-v*S*x,this._w=h*m*x+v*S*E;break;case"YZX":this._x=v*m*x+h*S*E,this._y=h*S*x+v*m*E,this._z=h*m*E-v*S*x,this._w=h*m*x-v*S*E;break;case"XZY":this._x=v*m*x-h*S*E,this._y=h*S*x-v*m*E,this._z=h*m*E+v*S*x,this._w=h*m*x+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],p=t[9],h=t[2],m=t[6],x=t[10],v=s+f+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-p)*S,this._y=(l-h)*S,this._z=(c-a)*S}else if(s>f&&s>x){const S=2*Math.sqrt(1+s-f-x);this._w=(m-p)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+h)/S}else if(f>x){const S=2*Math.sqrt(1+f-s-x);this._w=(l-h)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(p+m)/S}else{const S=2*Math.sqrt(1+x-s-f);this._w=(c-a)/S,this._x=(l+h)/S,this._y=(p+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,p=t._y,h=t._z,m=t._w;return this._x=s*m+c*f+a*h-l*p,this._y=a*m+c*p+l*f-s*h,this._z=l*m+c*h+s*p-a*f,this._w=c*m-s*f-a*p-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const h=Math.sqrt(p),m=Math.atan2(h,f),x=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=c*x+this._w*v,this._x=s*x+this._x*v,this._y=a*x+this._y*v,this._z=l*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,s=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,p=e.w,h=2*(c*a-f*s),m=2*(f*t-l*a),x=2*(l*s-c*t);return this.x=t+p*h+c*x-f*m,this.y=s+p*m+f*h-l*x,this.z=a+p*x+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,p=t.z;return this.x=a*p-l*f,this.y=l*c-s*p,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zc=new K,vm=new ea;class ta{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,si):si.fromBufferAttribute(l,c),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hl.copy(s.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),pl.subVectors(this.max,Ho),Ls.subVectors(e.a,Ho),Ds.subVectors(e.b,Ho),Us.subVectors(e.c,Ho),mr.subVectors(Ds,Ls),gr.subVectors(Us,Ds),Gr.subVectors(Ls,Us);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Gr.z,Gr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Gr.z,0,-Gr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Gr.y,Gr.x,0];return!Hc(t,Ls,Ds,Us,pl)||(t=[1,0,0,0,1,0,0,0,1],!Hc(t,Ls,Ds,Us,pl))?!1:(ml.crossVectors(mr,gr),t=[ml.x,ml.y,ml.z],Hc(t,Ls,Ds,Us,pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new K,new K,new K,new K,new K,new K,new K,new K],si=new K,hl=new ta,Ls=new K,Ds=new K,Us=new K,mr=new K,gr=new K,Gr=new K,Ho=new K,pl=new K,ml=new K,Wr=new K;function Hc(r,e,t,s,a){for(let l=0,c=r.length-3;l<=c;l+=3){Wr.fromArray(r,l);const f=a.x*Math.abs(Wr.x)+a.y*Math.abs(Wr.y)+a.z*Math.abs(Wr.z),p=e.dot(Wr),h=t.dot(Wr),m=s.dot(Wr);if(Math.max(-Math.max(p,h,m),Math.min(p,h,m))>f)return!1}return!0}const _y=new ta,Vo=new K,Vc=new K;class _d{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):_y.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const t=Vo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Vo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Vc)),this.expandByPoint(Vo.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new K,Gc=new K,gl=new K,vr=new K,Wc=new K,vl=new K,Xc=new K;class xy{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Gc.copy(e).add(t).multiplyScalar(.5),gl.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Gc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(gl),f=vr.dot(this.direction),p=-vr.dot(gl),h=vr.lengthSq(),m=Math.abs(1-c*c);let x,v,S,E;if(m>0)if(x=c*p-f,v=c*f-p,E=l*m,x>=0)if(v>=-E)if(v<=E){const T=1/m;x*=T,v*=T,S=x*(x+c*v+2*f)+v*(c*x+v+2*p)+h}else v=l,x=Math.max(0,-(c*v+f)),S=-x*x+v*(v+2*p)+h;else v=-l,x=Math.max(0,-(c*v+f)),S=-x*x+v*(v+2*p)+h;else v<=-E?(x=Math.max(0,-(-c*l+f)),v=x>0?-l:Math.min(Math.max(-l,-p),l),S=-x*x+v*(v+2*p)+h):v<=E?(x=0,v=Math.min(Math.max(-l,-p),l),S=v*(v+2*p)+h):(x=Math.max(0,-(c*l+f)),v=x>0?l:Math.min(Math.max(-l,-p),l),S=-x*x+v*(v+2*p)+h);else v=c>0?-l:l,x=Math.max(0,-(c*v+f)),S=-x*x+v*(v+2*p)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Gc).addScaledVector(gl,v),S}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const s=Ii.dot(this.direction),a=Ii.dot(Ii)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,p=s+c;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,p;const h=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,v=this.origin;return h>=0?(s=(e.min.x-v.x)*h,a=(e.max.x-v.x)*h):(s=(e.max.x-v.x)*h,a=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),x>=0?(f=(e.min.z-v.z)*x,p=(e.max.z-v.z)*x):(f=(e.max.z-v.z)*x,p=(e.min.z-v.z)*x),s>p||f>a)||((f>s||s!==s)&&(s=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,s,a,l){Wc.subVectors(t,e),vl.subVectors(s,e),Xc.crossVectors(Wc,vl);let c=this.direction.dot(Xc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;vr.subVectors(this.origin,e);const p=f*this.direction.dot(vl.crossVectors(vr,vl));if(p<0)return null;const h=f*this.direction.dot(Wc.cross(vr));if(h<0||p+h>c)return null;const m=-f*vr.dot(Xc);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,s,a,l,c,f,p,h,m,x,v,S,E,T,y){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,p,h,m,x,v,S,E,T,y)}set(e,t,s,a,l,c,f,p,h,m,x,v,S,E,T,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=s,_[12]=a,_[1]=l,_[5]=c,_[9]=f,_[13]=p,_[2]=h,_[6]=m,_[10]=x,_[14]=v,_[3]=S,_[7]=E,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Is.setFromMatrixColumn(e,0).length(),l=1/Is.setFromMatrixColumn(e,1).length(),c=1/Is.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),p=Math.cos(a),h=Math.sin(a),m=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const v=c*m,S=c*x,E=f*m,T=f*x;t[0]=p*m,t[4]=-p*x,t[8]=h,t[1]=S+E*h,t[5]=v-T*h,t[9]=-f*p,t[2]=T-v*h,t[6]=E+S*h,t[10]=c*p}else if(e.order==="YXZ"){const v=p*m,S=p*x,E=h*m,T=h*x;t[0]=v+T*f,t[4]=E*f-S,t[8]=c*h,t[1]=c*x,t[5]=c*m,t[9]=-f,t[2]=S*f-E,t[6]=T+v*f,t[10]=c*p}else if(e.order==="ZXY"){const v=p*m,S=p*x,E=h*m,T=h*x;t[0]=v-T*f,t[4]=-c*x,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*m,t[9]=T-v*f,t[2]=-c*h,t[6]=f,t[10]=c*p}else if(e.order==="ZYX"){const v=c*m,S=c*x,E=f*m,T=f*x;t[0]=p*m,t[4]=E*h-S,t[8]=v*h+T,t[1]=p*x,t[5]=T*h+v,t[9]=S*h-E,t[2]=-h,t[6]=f*p,t[10]=c*p}else if(e.order==="YZX"){const v=c*p,S=c*h,E=f*p,T=f*h;t[0]=p*m,t[4]=T-v*x,t[8]=E*x+S,t[1]=x,t[5]=c*m,t[9]=-f*m,t[2]=-h*m,t[6]=S*x+E,t[10]=v-T*x}else if(e.order==="XZY"){const v=c*p,S=c*h,E=f*p,T=f*h;t[0]=p*m,t[4]=-x,t[8]=h*m,t[1]=v*x+T,t[5]=c*m,t[9]=S*x-E,t[2]=E*x-S,t[6]=f*m,t[10]=T*x+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yy,e,Sy)}lookAt(e,t,s){const a=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),_r.crossVectors(s,zn),_r.lengthSq()===0&&(Math.abs(s.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),_r.crossVectors(s,zn)),_r.normalize(),_l.crossVectors(zn,_r),a[0]=_r.x,a[4]=_l.x,a[8]=zn.x,a[1]=_r.y,a[5]=_l.y,a[9]=zn.y,a[2]=_r.z,a[6]=_l.z,a[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],p=s[8],h=s[12],m=s[1],x=s[5],v=s[9],S=s[13],E=s[2],T=s[6],y=s[10],_=s[14],b=s[3],L=s[7],P=s[11],z=s[15],F=a[0],I=a[4],V=a[8],R=a[12],C=a[1],O=a[5],J=a[9],Q=a[13],se=a[2],le=a[6],ne=a[10],ue=a[14],k=a[3],ce=a[7],oe=a[11],N=a[15];return l[0]=c*F+f*C+p*se+h*k,l[4]=c*I+f*O+p*le+h*ce,l[8]=c*V+f*J+p*ne+h*oe,l[12]=c*R+f*Q+p*ue+h*N,l[1]=m*F+x*C+v*se+S*k,l[5]=m*I+x*O+v*le+S*ce,l[9]=m*V+x*J+v*ne+S*oe,l[13]=m*R+x*Q+v*ue+S*N,l[2]=E*F+T*C+y*se+_*k,l[6]=E*I+T*O+y*le+_*ce,l[10]=E*V+T*J+y*ne+_*oe,l[14]=E*R+T*Q+y*ue+_*N,l[3]=b*F+L*C+P*se+z*k,l[7]=b*I+L*O+P*le+z*ce,l[11]=b*V+L*J+P*ne+z*oe,l[15]=b*R+L*Q+P*ue+z*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],p=e[9],h=e[13],m=e[2],x=e[6],v=e[10],S=e[14],E=e[3],T=e[7],y=e[11],_=e[15];return E*(+l*p*x-a*h*x-l*f*v+s*h*v+a*f*S-s*p*S)+T*(+t*p*S-t*h*v+l*c*v-a*c*S+a*h*m-l*p*m)+y*(+t*h*x-t*f*S-l*c*x+s*c*S+l*f*m-s*h*m)+_*(-a*f*m-t*p*x+t*f*v+a*c*x-s*c*v+s*p*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],m=e[8],x=e[9],v=e[10],S=e[11],E=e[12],T=e[13],y=e[14],_=e[15],b=x*y*h-T*v*h+T*p*S-f*y*S-x*p*_+f*v*_,L=E*v*h-m*y*h-E*p*S+c*y*S+m*p*_-c*v*_,P=m*T*h-E*x*h+E*f*S-c*T*S-m*f*_+c*x*_,z=E*x*p-m*T*p-E*f*v+c*T*v+m*f*y-c*x*y,F=t*b+s*L+a*P+l*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=b*I,e[1]=(T*v*l-x*y*l-T*a*S+s*y*S+x*a*_-s*v*_)*I,e[2]=(f*y*l-T*p*l+T*a*h-s*y*h-f*a*_+s*p*_)*I,e[3]=(x*p*l-f*v*l-x*a*h+s*v*h+f*a*S-s*p*S)*I,e[4]=L*I,e[5]=(m*y*l-E*v*l+E*a*S-t*y*S-m*a*_+t*v*_)*I,e[6]=(E*p*l-c*y*l-E*a*h+t*y*h+c*a*_-t*p*_)*I,e[7]=(c*v*l-m*p*l+m*a*h-t*v*h-c*a*S+t*p*S)*I,e[8]=P*I,e[9]=(E*x*l-m*T*l-E*s*S+t*T*S+m*s*_-t*x*_)*I,e[10]=(c*T*l-E*f*l+E*s*h-t*T*h-c*s*_+t*f*_)*I,e[11]=(m*f*l-c*x*l-m*s*h+t*x*h+c*s*S-t*f*S)*I,e[12]=z*I,e[13]=(m*T*a-E*x*a+E*s*v-t*T*v-m*s*y+t*x*y)*I,e[14]=(E*f*a-c*T*a-E*s*p+t*T*p+c*s*y-t*f*y)*I,e[15]=(c*x*a-m*f*a+m*s*p-t*x*p-c*s*v+t*f*v)*I,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,p=e.z,h=l*c,m=l*f;return this.set(h*c+s,h*f-a*p,h*p+a*f,0,h*f+a*p,m*f+s,m*p-a*c,0,h*p-a*f,m*p+a*c,l*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,p=t._w,h=l+l,m=c+c,x=f+f,v=l*h,S=l*m,E=l*x,T=c*m,y=c*x,_=f*x,b=p*h,L=p*m,P=p*x,z=s.x,F=s.y,I=s.z;return a[0]=(1-(T+_))*z,a[1]=(S+P)*z,a[2]=(E-L)*z,a[3]=0,a[4]=(S-P)*F,a[5]=(1-(v+_))*F,a[6]=(y+b)*F,a[7]=0,a[8]=(E+L)*I,a[9]=(y-b)*I,a[10]=(1-(v+T))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Is.set(a[0],a[1],a[2]).length();const c=Is.set(a[4],a[5],a[6]).length(),f=Is.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const h=1/l,m=1/c,x=1/f;return oi.elements[0]*=h,oi.elements[1]*=h,oi.elements[2]*=h,oi.elements[4]*=m,oi.elements[5]*=m,oi.elements[6]*=m,oi.elements[8]*=x,oi.elements[9]*=x,oi.elements[10]*=x,t.setFromRotationMatrix(oi),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=Hi){const p=this.elements,h=2*l/(t-e),m=2*l/(s-a),x=(t+e)/(t-e),v=(s+a)/(s-a);let S,E;if(f===Hi)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Wl)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=h,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=m,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=Hi){const p=this.elements,h=1/(t-e),m=1/(s-a),x=1/(c-l),v=(t+e)*h,S=(s+a)*m;let E,T;if(f===Hi)E=(c+l)*x,T=-2*x;else if(f===Wl)E=l*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*h,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*m,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Is=new K,oi=new Gt,yy=new K(0,0,0),Sy=new K(1,1,1),_r=new K,_l=new K,zn=new K,_m=new Gt,xm=new ea;class Si{constructor(e=0,t=0,s=0,a=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],p=a[1],h=a[5],m=a[9],x=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-vt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xm.setFromEuler(this),this.setFromQuaternion(xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Wg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ey=0;const ym=new K,Ns=new ea,Ni=new Gt,xl=new K,Go=new K,My=new K,Ty=new ea,Sm=new K(1,0,0),Em=new K(0,1,0),Mm=new K(0,0,1),Tm={type:"added"},wy={type:"removed"},Fs={type:"childadded",child:null},jc={type:"childremoved",child:null};class Nn extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new K,t=new Si,s=new ea,a=new K(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new at}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(Em,e)}rotateZ(e){return this.rotateOnAxis(Mm,e)}translateOnAxis(e,t){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(Em,e)}translateZ(e){return this.translateOnAxis(Mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?xl.copy(e):xl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Go,xl,this.up):Ni.lookAt(xl,Go,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wy),jc.child=e,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,My),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,Ty,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,m=p.length;h<m;h++){const x=p[h];l(e.shapes,x)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(e.materials,this.material[p]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(l(e.animations,p))}}if(t){const f=c(e.geometries),p=c(e.materials),h=c(e.textures),m=c(e.images),x=c(e.shapes),v=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),h.length>0&&(s.textures=h),m.length>0&&(s.images=m),x.length>0&&(s.shapes=x),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=a,s;function c(f){const p=[];for(const h in f){const m=f[h];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Nn.DEFAULT_UP=new K(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new K,Fi=new K,qc=new K,Oi=new K,Os=new K,ks=new K,wm=new K,$c=new K,Yc=new K,Kc=new K,Zc=new Dt,Qc=new Dt,Jc=new Dt;class li{constructor(e=new K,t=new K,s=new K){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),ai.subVectors(e,t),a.cross(ai);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){ai.subVectors(a,t),Fi.subVectors(s,t),qc.subVectors(e,t);const c=ai.dot(ai),f=ai.dot(Fi),p=ai.dot(qc),h=Fi.dot(Fi),m=Fi.dot(qc),x=c*h-f*f;if(x===0)return l.set(0,0,0),null;const v=1/x,S=(h*p-f*m)*v,E=(c*m-f*p)*v;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,s,a,l,c,f,p){return this.getBarycoord(e,t,s,a,Oi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Oi.x),p.addScaledVector(c,Oi.y),p.addScaledVector(f,Oi.z),p)}static getInterpolatedAttribute(e,t,s,a,l,c){return Zc.setScalar(0),Qc.setScalar(0),Jc.setScalar(0),Zc.fromBufferAttribute(e,t),Qc.fromBufferAttribute(e,s),Jc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Zc,l.x),c.addScaledVector(Qc,l.y),c.addScaledVector(Jc,l.z),c}static isFrontFacing(e,t,s,a){return ai.subVectors(s,t),Fi.subVectors(e,t),ai.cross(Fi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ai.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return li.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;Os.subVectors(a,s),ks.subVectors(l,s),$c.subVectors(e,s);const p=Os.dot($c),h=ks.dot($c);if(p<=0&&h<=0)return t.copy(s);Yc.subVectors(e,a);const m=Os.dot(Yc),x=ks.dot(Yc);if(m>=0&&x<=m)return t.copy(a);const v=p*x-m*h;if(v<=0&&p>=0&&m<=0)return c=p/(p-m),t.copy(s).addScaledVector(Os,c);Kc.subVectors(e,l);const S=Os.dot(Kc),E=ks.dot(Kc);if(E>=0&&S<=E)return t.copy(l);const T=S*h-p*E;if(T<=0&&h>=0&&E<=0)return f=h/(h-E),t.copy(s).addScaledVector(ks,f);const y=m*E-S*x;if(y<=0&&x-m>=0&&S-E>=0)return wm.subVectors(l,a),f=(x-m)/(x-m+(S-E)),t.copy(a).addScaledVector(wm,f);const _=1/(y+T+v);return c=T*_,f=v*_,t.copy(s).addScaledVector(Os,c).addScaledVector(ks,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},yl={h:0,s:0,l:0};function ef(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class St{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=wt.workingColorSpace){return this.r=e,this.g=t,this.b=s,wt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=wt.workingColorSpace){if(e=ay(e,1),t=vt(t,0,1),s=vt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=ef(c,l,e+1/3),this.g=ef(c,l,e),this.b=ef(c,l,e-1/3)}return wt.toWorkingColorSpace(this,a),this}setStyle(e,t=Vn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vn){const s=Xg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return wt.fromWorkingColorSpace(gn.copy(this),e),Math.round(vt(gn.r*255,0,255))*65536+Math.round(vt(gn.g*255,0,255))*256+Math.round(vt(gn.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(gn.copy(this),t);const s=gn.r,a=gn.g,l=gn.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let p,h;const m=(f+c)/2;if(f===c)p=0,h=0;else{const x=c-f;switch(h=m<=.5?x/(c+f):x/(2-c-f),c){case s:p=(a-l)/x+(a<l?6:0);break;case a:p=(l-s)/x+2;break;case l:p=(s-a)/x+4;break}p/=6}return e.h=p,e.s=h,e.l=m,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Vn){wt.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,s=gn.g,a=gn.b;return e!==Vn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(yl);const s=Oc(xr.h,yl.h,t),a=Oc(xr.s,yl.s,t),l=Oc(xr.l,yl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new St;St.NAMES=Xg;let Ay=0;class na extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=js,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vf,this.blendDst=_f,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(s.blending=this.blending),this.side!==wr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==vf&&(s.blendSrc=this.blendSrc),this.blendDst!==_f&&(s.blendDst=this.blendDst),this.blendEquation!==Zr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jg extends na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new K,Sl=new At;class Wn{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=dm,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Sl.fromBufferAttribute(this,t),Sl.applyMatrix3(e),this.setXY(t,Sl.x,Sl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=zo(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ln(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),s=Ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),s=Ln(s,this.array),a=Ln(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),s=Ln(s,this.array),a=Ln(a,this.array),l=Ln(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dm&&(e.usage=this.usage),e}}class qg extends Wn{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class $g extends Wn{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Wi extends Wn{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Cy=0;const Zn=new Gt,tf=new Nn,Bs=new K,Hn=new ta,Wo=new ta,sn=new K;class ji extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hg(e)?$g:qg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new at().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,s){return Zn.makeTranslation(e,t,s),this.applyMatrix4(Zn),this}scale(e,t,s){return Zn.makeScale(e,t,s),this.applyMatrix4(Zn),this}lookAt(e){return tf.lookAt(e),tf.updateMatrix(),this.applyMatrix4(tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Wi(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Hn.setFromBufferAttribute(l),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _d);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Wo.setFromBufferAttribute(f),this.morphTargetsRelative?(sn.addVectors(Hn.min,Wo.min),Hn.expandByPoint(sn),sn.addVectors(Hn.max,Wo.max),Hn.expandByPoint(sn)):(Hn.expandByPoint(Wo.min),Hn.expandByPoint(Wo.max))}Hn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)sn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(sn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],p=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)sn.fromBufferAttribute(f,h),p&&(Bs.fromBufferAttribute(e,h),sn.add(Bs)),a=Math.max(a,s.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let V=0;V<s.count;V++)f[V]=new K,p[V]=new K;const h=new K,m=new K,x=new K,v=new At,S=new At,E=new At,T=new K,y=new K;function _(V,R,C){h.fromBufferAttribute(s,V),m.fromBufferAttribute(s,R),x.fromBufferAttribute(s,C),v.fromBufferAttribute(l,V),S.fromBufferAttribute(l,R),E.fromBufferAttribute(l,C),m.sub(h),x.sub(h),S.sub(v),E.sub(v);const O=1/(S.x*E.y-E.x*S.y);isFinite(O)&&(T.copy(m).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(O),y.copy(x).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(O),f[V].add(T),f[R].add(T),f[C].add(T),p[V].add(y),p[R].add(y),p[C].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let V=0,R=b.length;V<R;++V){const C=b[V],O=C.start,J=C.count;for(let Q=O,se=O+J;Q<se;Q+=3)_(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const L=new K,P=new K,z=new K,F=new K;function I(V){z.fromBufferAttribute(a,V),F.copy(z);const R=f[V];L.copy(R),L.sub(z.multiplyScalar(z.dot(R))).normalize(),P.crossVectors(F,R);const O=P.dot(p[V])<0?-1:1;c.setXYZW(V,L.x,L.y,L.z,O)}for(let V=0,R=b.length;V<R;++V){const C=b[V],O=C.start,J=C.count;for(let Q=O,se=O+J;Q<se;Q+=3)I(e.getX(Q+0)),I(e.getX(Q+1)),I(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const a=new K,l=new K,c=new K,f=new K,p=new K,h=new K,m=new K,x=new K;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),T=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),m.subVectors(c,l),x.subVectors(a,l),m.cross(x),f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,T),h.fromBufferAttribute(s,y),f.add(m),p.add(m),h.add(m),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),x.subVectors(a,l),m.cross(x),s.setXYZ(v+0,m.x,m.y,m.z),s.setXYZ(v+1,m.x,m.y,m.z),s.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(f,p){const h=f.array,m=f.itemSize,x=f.normalized,v=new h.constructor(p.length*m);let S=0,E=0;for(let T=0,y=p.length;T<y;T++){f.isInterleavedBufferAttribute?S=p[T]*f.data.stride+f.offset:S=p[T]*m;for(let _=0;_<m;_++)v[E++]=h[S++]}return new Wn(v,m,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ji,s=this.index.array,a=this.attributes;for(const f in a){const p=a[f],h=e(p,s);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let m=0,x=h.length;m<x;m++){const v=h[m],S=e(v,s);p.push(S)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const h=s[p];e.data.attributes[p]=h.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],m=[];for(let x=0,v=h.length;x<v;x++){const S=h[x];m.push(S.toJSON(e.data))}m.length>0&&(a[p]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const h in a){const m=a[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],x=l[h];for(let v=0,S=x.length;v<S;v++)m.push(x[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const x=c[h];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Am=new Gt,Xr=new xy,El=new _d,Cm=new K,Ml=new K,Tl=new K,wl=new K,nf=new K,Al=new K,Rm=new K,Cl=new K;class ci extends Nn{constructor(e=new ji,t=new jg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Al.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const m=f[p],x=l[p];m!==0&&(nf.fromBufferAttribute(x,e),c?Al.addScaledVector(nf,m):Al.addScaledVector(nf.sub(t),m))}t.add(Al)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),El.copy(s.boundingSphere),El.applyMatrix4(l),Xr.copy(e.ray).recast(e.near),!(El.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(El,Cm)===null||Xr.origin.distanceToSquared(Cm)>(e.far-e.near)**2))&&(Am.copy(l).invert(),Xr.copy(e.ray).applyMatrix4(Am),!(s.boundingBox!==null&&Xr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,x=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,T=v.length;E<T;E++){const y=v[E],_=c[y.materialIndex],b=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let P=b,z=L;P<z;P+=3){const F=f.getX(P),I=f.getX(P+1),V=f.getX(P+2);a=Rl(this,_,e,s,h,m,x,F,I,V),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const b=f.getX(y),L=f.getX(y+1),P=f.getX(y+2);a=Rl(this,c,e,s,h,m,x,b,L,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,T=v.length;E<T;E++){const y=v[E],_=c[y.materialIndex],b=Math.max(y.start,S.start),L=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let P=b,z=L;P<z;P+=3){const F=P,I=P+1,V=P+2;a=Rl(this,_,e,s,h,m,x,F,I,V),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const b=y,L=y+1,P=y+2;a=Rl(this,c,e,s,h,m,x,b,L,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function Ry(r,e,t,s,a,l,c,f){let p;if(e.side===Un?p=s.intersectTriangle(c,l,a,!0,f):p=s.intersectTriangle(a,l,c,e.side===wr,f),p===null)return null;Cl.copy(f),Cl.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Cl);return h<t.near||h>t.far?null:{distance:h,point:Cl.clone(),object:r}}function Rl(r,e,t,s,a,l,c,f,p,h){r.getVertexPosition(f,Ml),r.getVertexPosition(p,Tl),r.getVertexPosition(h,wl);const m=Ry(r,e,t,s,Ml,Tl,wl,Rm);if(m){const x=new K;li.getBarycoord(Rm,Ml,Tl,wl,x),a&&(m.uv=li.getInterpolatedAttribute(a,f,p,h,x,new At)),l&&(m.uv1=li.getInterpolatedAttribute(l,f,p,h,x,new At)),c&&(m.normal=li.getInterpolatedAttribute(c,f,p,h,x,new K),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:p,c:h,normal:new K,materialIndex:0};li.getNormal(Ml,Tl,wl,v.normal),m.face=v,m.barycoord=x}return m}class ia extends ji{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const p=[],h=[],m=[],x=[];let v=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,a,c,2),E("x","z","y",1,-1,e,s,-t,a,c,3),E("x","y","z",1,-1,e,t,s,a,l,4),E("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(p),this.setAttribute("position",new Wi(h,3)),this.setAttribute("normal",new Wi(m,3)),this.setAttribute("uv",new Wi(x,2));function E(T,y,_,b,L,P,z,F,I,V,R){const C=P/I,O=z/V,J=P/2,Q=z/2,se=F/2,le=I+1,ne=V+1;let ue=0,k=0;const ce=new K;for(let oe=0;oe<ne;oe++){const N=oe*O-Q;for(let ie=0;ie<le;ie++){const De=ie*C-J;ce[T]=De*b,ce[y]=N*L,ce[_]=se,h.push(ce.x,ce.y,ce.z),ce[T]=0,ce[y]=0,ce[_]=F>0?1:-1,m.push(ce.x,ce.y,ce.z),x.push(ie/I),x.push(1-oe/V),ue+=1}}for(let oe=0;oe<V;oe++)for(let N=0;N<I;N++){const ie=v+N+le*oe,De=v+N+le*(oe+1),Y=v+(N+1)+le*(oe+1),fe=v+(N+1)+le*oe;p.push(ie,De,fe),p.push(De,Y,fe),k+=6}f.addGroup(S,k,R),S+=k,v+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Mn(r){const e={};for(let t=0;t<r.length;t++){const s=to(r[t]);for(const a in s)e[a]=s[a]}return e}function Py(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const by={clone:to,merge:Mn};var Ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ly,this.fragmentShader=Dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=Py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Kg extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new K,Pm=new At,bm=new At;class Gn extends Kg{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,Pm,bm),t.subVectors(bm,Pm)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fc*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;l+=c.offsetX*a/p,t-=c.offsetY*s/h,a*=c.width/p,s*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Hs=1;class Uy extends Nn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Gn(zs,Hs,e,t);a.layers=this.layers,this.add(a);const l=new Gn(zs,Hs,e,t);l.layers=this.layers,this.add(l);const c=new Gn(zs,Hs,e,t);c.layers=this.layers,this.add(c);const f=new Gn(zs,Hs,e,t);f.layers=this.layers,this.add(f);const p=new Gn(zs,Hs,e,t);p.layers=this.layers,this.add(p);const h=new Gn(zs,Hs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,p]=t;for(const h of t)this.remove(h);if(e===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Wl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,h,m]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,p),e.setRenderTarget(s,4,a),e.render(t,h),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,a),e.render(t,m),e.setRenderTarget(x,v,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Zg extends In{constructor(e,t,s,a,l,c,f,p,h,m){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,s,a,l,c,f,p,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Iy extends ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new Zg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ia(5,5,5),l=new Ar({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Un,blending:Er});l.uniforms.tEquirect.value=t;const c=new ci(a,l),f=t.minFilter;return t.minFilter===es&&(t.minFilter=yi),new Uy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}class Ny extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const rf=new K,Fy=new K,Oy=new at;class Yr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=rf.subVectors(s,t).cross(Fy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(rf),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Oy.getNormalMatrix(e),a=this.coplanarPoint(rf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new _d,Pl=new K;class xd{constructor(e=new Yr,t=new Yr,s=new Yr,a=new Yr,l=new Yr,c=new Yr){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Hi){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],p=a[3],h=a[4],m=a[5],x=a[6],v=a[7],S=a[8],E=a[9],T=a[10],y=a[11],_=a[12],b=a[13],L=a[14],P=a[15];if(s[0].setComponents(p-l,v-h,y-S,P-_).normalize(),s[1].setComponents(p+l,v+h,y+S,P+_).normalize(),s[2].setComponents(p+c,v+m,y+E,P+b).normalize(),s[3].setComponents(p-c,v-m,y-E,P-b).normalize(),s[4].setComponents(p-f,v-x,y-T,P-L).normalize(),t===Hi)s[5].setComponents(p+f,v+x,y+T,P+L).normalize();else if(t===Wl)s[5].setComponents(f,x,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Pl.x=a.normal.x>0?e.max.x:e.min.x,Pl.y=a.normal.y>0?e.max.y:e.min.y,Pl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bl extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Qg extends In{constructor(e,t,s,a,l,c,f,p,h,m=qs){if(m!==qs&&m!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===qs&&(s=ts),s===void 0&&m===Js&&(s=Qs),super(null,a,l,c,f,p,m,s,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:fi,this.minFilter=p!==void 0?p:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yl extends ji{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),p=Math.floor(a),h=f+1,m=p+1,x=e/f,v=t/p,S=[],E=[],T=[],y=[];for(let _=0;_<m;_++){const b=_*v-c;for(let L=0;L<h;L++){const P=L*x-l;E.push(P,-b,0),T.push(0,0,1),y.push(L/f),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let b=0;b<f;b++){const L=b+h*_,P=b+h*(_+1),z=b+1+h*(_+1),F=b+1+h*_;S.push(L,P,F),S.push(P,z,F)}this.setIndex(S),this.setAttribute("position",new Wi(E,3)),this.setAttribute("normal",new Wi(T,3)),this.setAttribute("uv",new Wi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ky extends na{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bg,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class By extends na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zy extends na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lm={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Hy{constructor(e,t,s){const a=this;let l=!1,c=0,f=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){f++,l===!1&&a.onStart!==void 0&&a.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return p?p(m):m},this.setURLModifier=function(m){return p=m,this},this.addHandler=function(m,x){return h.push(m,x),this},this.removeHandler=function(m){const x=h.indexOf(m);return x!==-1&&h.splice(x,2),this},this.getHandler=function(m){for(let x=0,v=h.length;x<v;x+=2){const S=h[x],E=h[x+1];if(S.global&&(S.lastIndex=0),S.test(m))return E}return null}}}const Vy=new Hy;class yd{constructor(e){this.manager=e!==void 0?e:Vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,l){s.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yd.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki={};class Gy extends Error{constructor(e,t){super(e),this.response=t}}class Wy extends yd{constructor(e){super(e)}load(e,t,s,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Lm.get(e);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:s,onError:a});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:s,onError:a});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,p=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=ki[e],x=h.body.getReader(),v=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),S=v?parseInt(v):0,E=S!==0;let T=0;const y=new ReadableStream({start(_){b();function b(){x.read().then(({done:L,value:P})=>{if(L)_.close();else{T+=P.byteLength;const z=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:S});for(let F=0,I=m.length;F<I;F++){const V=m[F];V.onProgress&&V.onProgress(z)}_.enqueue(P),b()}},L=>{_.error(L)})}}});return new Response(y)}else throw new Gy(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(p){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,f));case"json":return h.json();default:if(f===void 0)return h.text();{const x=/charset="?([^;"\s]*)"?/i.exec(f),v=x&&x[1]?x[1].toLowerCase():void 0,S=new TextDecoder(v);return h.arrayBuffer().then(E=>S.decode(E))}}}).then(h=>{Lm.add(e,h);const m=ki[e];delete ki[e];for(let x=0,v=m.length;x<v;x++){const S=m[x];S.onLoad&&S.onLoad(h)}}).catch(h=>{const m=ki[e];if(m===void 0)throw this.manager.itemError(e),h;delete ki[e];for(let x=0,v=m.length;x<v;x++){const S=m[x];S.onError&&S.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Xy extends Nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const sf=new Gt,Dm=new K,Um=new K;class jy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xd,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Dm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dm),Um.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Um),t.updateMatrixWorld(),sf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Im=new Gt,Xo=new K,of=new K;class qy extends jy{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){const s=this.camera,a=this.matrix,l=e.distance||s.far;l!==s.far&&(s.far=l,s.updateProjectionMatrix()),Xo.setFromMatrixPosition(e.matrixWorld),s.position.copy(Xo),of.copy(s.position),of.add(this._cubeDirections[t]),s.up.copy(this._cubeUps[t]),s.lookAt(of),s.updateMatrixWorld(),a.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Im.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Im)}}class Nm extends Xy{constructor(e,t,s=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=a,this.shadow=new qy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $y extends Kg{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,p=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yy extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ky{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fm(){return performance.now()}function Om(r,e,t,s){const a=Zy(s);switch(t){case Dg:return r*e;case Ig:return r*e;case Ng:return r*e*2;case Fg:return r*e/a.components*a.byteLength;case md:return r*e/a.components*a.byteLength;case Og:return r*e*2/a.components*a.byteLength;case gd:return r*e*2/a.components*a.byteLength;case Ug:return r*e*3/a.components*a.byteLength;case ui:return r*e*4/a.components*a.byteLength;case vd:return r*e*4/a.components*a.byteLength;case Fl:case Ol:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kl:case Bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lf:case Uf:return Math.max(r,16)*Math.max(e,8)/4;case bf:case Df:return Math.max(r,8)*Math.max(e,8)/2;case If:case Nf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ff:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case zf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case jf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case qf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case $f:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case zl:case Zf:case Qf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case kg:case Jf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ed:case td:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zy(r){switch(r){case Xi:case Pg:return{byteLength:1,components:1};case $o:case bg:case Qo:return{byteLength:2,components:1};case hd:case pd:return{byteLength:2,components:4};case ts:case dd:case zi:return{byteLength:4,components:1};case Lg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jg(){let r=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Qy(r){const e=new WeakMap;function t(f,p){const h=f.array,m=f.usage,x=h.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,h,m),f.onUploadCallback();let S;if(h instanceof Float32Array)S=r.FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=r.SHORT;else if(h instanceof Uint32Array)S=r.UNSIGNED_INT;else if(h instanceof Int32Array)S=r.INT;else if(h instanceof Int8Array)S=r.BYTE;else if(h instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:x}}function s(f,p,h){const m=p.array,x=p.updateRanges;if(r.bindBuffer(h,f),x.length===0)r.bufferSubData(h,0,m);else{x.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<x.length;S++){const E=x[v],T=x[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,x[v]=T)}x.length=v+1;for(let S=0,E=x.length;S<E;S++){const T=x[S];r.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(r.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,f,p),h.version=f.version}}return{get:a,remove:l,update:c}}var Jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eS=`#ifdef USE_ALPHAHASH
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
#endif`,tS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sS=`#ifdef USE_AOMAP
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
#endif`,oS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aS=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dS=`#ifdef USE_IRIDESCENCE
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
#endif`,hS=`#ifdef USE_BUMPMAP
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
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ES=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,MS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TS=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PS="gl_FragColor = linearToOutputTexel( gl_FragColor );",bS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,US=`#ifdef USE_ENVMAP
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
#endif`,IS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zS=`#ifdef USE_GRADIENTMAP
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
}`,HS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WS=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,XS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,jS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$S=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ZS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QS=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lE=`#if defined( USE_POINTS_UV )
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
#endif`,uE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
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
#endif`,mE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SE=`#ifdef USE_NORMALMAP
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
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ME=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,RE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,OE=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,kE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,zE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HE=`#ifdef USE_SKINNING
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
#endif`,VE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`#include <common>
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
}`,sM=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oM=`#define DISTANCE
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
}`,aM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`uniform float scale;
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
}`,fM=`uniform vec3 diffuse;
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
}`,dM=`#include <common>
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
}`,hM=`uniform vec3 diffuse;
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
}`,pM=`#define LAMBERT
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
}`,mM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,gM=`#define MATCAP
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
}`,vM=`#define MATCAP
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
}`,_M=`#define NORMAL
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
}`,xM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yM=`#define PHONG
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
}`,SM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,EM=`#define STANDARD
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
}`,MM=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,TM=`#define TOON
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
}`,wM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,AM=`uniform float size;
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
}`,CM=`uniform vec3 diffuse;
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
}`,RM=`#include <common>
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
}`,PM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,bM=`uniform float rotation;
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
}`,LM=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:Jy,alphahash_pars_fragment:eS,alphamap_fragment:tS,alphamap_pars_fragment:nS,alphatest_fragment:iS,alphatest_pars_fragment:rS,aomap_fragment:sS,aomap_pars_fragment:oS,batching_pars_vertex:aS,batching_vertex:lS,begin_vertex:uS,beginnormal_vertex:cS,bsdfs:fS,iridescence_fragment:dS,bumpmap_pars_fragment:hS,clipping_planes_fragment:pS,clipping_planes_pars_fragment:mS,clipping_planes_pars_vertex:gS,clipping_planes_vertex:vS,color_fragment:_S,color_pars_fragment:xS,color_pars_vertex:yS,color_vertex:SS,common:ES,cube_uv_reflection_fragment:MS,defaultnormal_vertex:TS,displacementmap_pars_vertex:wS,displacementmap_vertex:AS,emissivemap_fragment:CS,emissivemap_pars_fragment:RS,colorspace_fragment:PS,colorspace_pars_fragment:bS,envmap_fragment:LS,envmap_common_pars_fragment:DS,envmap_pars_fragment:US,envmap_pars_vertex:IS,envmap_physical_pars_fragment:XS,envmap_vertex:NS,fog_vertex:FS,fog_pars_vertex:OS,fog_fragment:kS,fog_pars_fragment:BS,gradientmap_pars_fragment:zS,lightmap_pars_fragment:HS,lights_lambert_fragment:VS,lights_lambert_pars_fragment:GS,lights_pars_begin:WS,lights_toon_fragment:jS,lights_toon_pars_fragment:qS,lights_phong_fragment:$S,lights_phong_pars_fragment:YS,lights_physical_fragment:KS,lights_physical_pars_fragment:ZS,lights_fragment_begin:QS,lights_fragment_maps:JS,lights_fragment_end:eE,logdepthbuf_fragment:tE,logdepthbuf_pars_fragment:nE,logdepthbuf_pars_vertex:iE,logdepthbuf_vertex:rE,map_fragment:sE,map_pars_fragment:oE,map_particle_fragment:aE,map_particle_pars_fragment:lE,metalnessmap_fragment:uE,metalnessmap_pars_fragment:cE,morphinstance_vertex:fE,morphcolor_vertex:dE,morphnormal_vertex:hE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:vE,normal_pars_fragment:_E,normal_pars_vertex:xE,normal_vertex:yE,normalmap_pars_fragment:SE,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:ME,clearcoat_pars_fragment:TE,iridescence_pars_fragment:wE,opaque_fragment:AE,packing:CE,premultiplied_alpha_fragment:RE,project_vertex:PE,dithering_fragment:bE,dithering_pars_fragment:LE,roughnessmap_fragment:DE,roughnessmap_pars_fragment:UE,shadowmap_pars_fragment:IE,shadowmap_pars_vertex:NE,shadowmap_vertex:FE,shadowmask_pars_fragment:OE,skinbase_vertex:kE,skinning_pars_vertex:BE,skinning_vertex:zE,skinnormal_vertex:HE,specularmap_fragment:VE,specularmap_pars_fragment:GE,tonemapping_fragment:WE,tonemapping_pars_fragment:XE,transmission_fragment:jE,transmission_pars_fragment:qE,uv_pars_fragment:$E,uv_pars_vertex:YE,uv_vertex:KE,worldpos_vertex:ZE,background_vert:QE,background_frag:JE,backgroundCube_vert:eM,backgroundCube_frag:tM,cube_vert:nM,cube_frag:iM,depth_vert:rM,depth_frag:sM,distanceRGBA_vert:oM,distanceRGBA_frag:aM,equirect_vert:lM,equirect_frag:uM,linedashed_vert:cM,linedashed_frag:fM,meshbasic_vert:dM,meshbasic_frag:hM,meshlambert_vert:pM,meshlambert_frag:mM,meshmatcap_vert:gM,meshmatcap_frag:vM,meshnormal_vert:_M,meshnormal_frag:xM,meshphong_vert:yM,meshphong_frag:SM,meshphysical_vert:EM,meshphysical_frag:MM,meshtoon_vert:TM,meshtoon_frag:wM,points_vert:AM,points_frag:CM,shadow_vert:RM,shadow_frag:PM,sprite_vert:bM,sprite_frag:LM},Pe={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},_i={basic:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new St(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Mn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Mn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new St(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Mn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Mn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Mn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Mn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Mn([Pe.common,Pe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Mn([Pe.lights,Pe.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};_i.physical={uniforms:Mn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Ll={r:0,b:0,g:0},qr=new Si,DM=new Gt;function UM(r,e,t,s,a,l,c){const f=new St(0);let p=l===!0?0:1,h,m,x=null,v=0,S=null;function E(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function T(L){let P=!1;const z=E(L);z===null?_(f,p):z&&z.isColor&&(_(z,1),P=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,P){const z=E(P);z&&(z.isCubeTexture||z.mapping===$l)?(m===void 0&&(m=new ci(new ia(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:to(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,I,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),qr.copy(P.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),m.material.uniforms.envMap.value=z,m.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(DM.makeRotationFromEuler(qr)),m.material.toneMapped=wt.getTransfer(z.colorSpace)!==Lt,(x!==z||v!==z.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,x=z,v=z.version,S=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):z&&z.isTexture&&(h===void 0&&(h=new ci(new Yl(2,2),new Ar({name:"BackgroundMaterial",uniforms:to(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=z,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=wt.getTransfer(z.colorSpace)!==Lt,z.matrixAutoUpdate===!0&&z.updateMatrix(),h.material.uniforms.uvTransform.value.copy(z.matrix),(x!==z||v!==z.version||S!==r.toneMapping)&&(h.material.needsUpdate=!0,x=z,v=z.version,S=r.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function _(L,P){L.getRGB(Ll,Yg(r)),s.buffers.color.setClear(Ll.r,Ll.g,Ll.b,P,c)}function b(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(L,P=1){f.set(L),p=P,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(f,p)},render:T,addToRenderList:y,dispose:b}}function IM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=v(null);let l=a,c=!1;function f(C,O,J,Q,se){let le=!1;const ne=x(Q,J,O);l!==ne&&(l=ne,h(l.object)),le=S(C,Q,J,se),le&&E(C,Q,J,se),se!==null&&e.update(se,r.ELEMENT_ARRAY_BUFFER),(le||c)&&(c=!1,P(C,O,J,Q),se!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function p(){return r.createVertexArray()}function h(C){return r.bindVertexArray(C)}function m(C){return r.deleteVertexArray(C)}function x(C,O,J){const Q=J.wireframe===!0;let se=s[C.id];se===void 0&&(se={},s[C.id]=se);let le=se[O.id];le===void 0&&(le={},se[O.id]=le);let ne=le[Q];return ne===void 0&&(ne=v(p()),le[Q]=ne),ne}function v(C){const O=[],J=[],Q=[];for(let se=0;se<t;se++)O[se]=0,J[se]=0,Q[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:J,attributeDivisors:Q,object:C,attributes:{},index:null}}function S(C,O,J,Q){const se=l.attributes,le=O.attributes;let ne=0;const ue=J.getAttributes();for(const k in ue)if(ue[k].location>=0){const oe=se[k];let N=le[k];if(N===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),oe===void 0||oe.attribute!==N||N&&oe.data!==N.data)return!0;ne++}return l.attributesNum!==ne||l.index!==Q}function E(C,O,J,Q){const se={},le=O.attributes;let ne=0;const ue=J.getAttributes();for(const k in ue)if(ue[k].location>=0){let oe=le[k];oe===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const N={};N.attribute=oe,oe&&oe.data&&(N.data=oe.data),se[k]=N,ne++}l.attributes=se,l.attributesNum=ne,l.index=Q}function T(){const C=l.newAttributes;for(let O=0,J=C.length;O<J;O++)C[O]=0}function y(C){_(C,0)}function _(C,O){const J=l.newAttributes,Q=l.enabledAttributes,se=l.attributeDivisors;J[C]=1,Q[C]===0&&(r.enableVertexAttribArray(C),Q[C]=1),se[C]!==O&&(r.vertexAttribDivisor(C,O),se[C]=O)}function b(){const C=l.newAttributes,O=l.enabledAttributes;for(let J=0,Q=O.length;J<Q;J++)O[J]!==C[J]&&(r.disableVertexAttribArray(J),O[J]=0)}function L(C,O,J,Q,se,le,ne){ne===!0?r.vertexAttribIPointer(C,O,J,se,le):r.vertexAttribPointer(C,O,J,Q,se,le)}function P(C,O,J,Q){T();const se=Q.attributes,le=J.getAttributes(),ne=O.defaultAttributeValues;for(const ue in le){const k=le[ue];if(k.location>=0){let ce=se[ue];if(ce===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ce!==void 0){const oe=ce.normalized,N=ce.itemSize,ie=e.get(ce);if(ie===void 0)continue;const De=ie.buffer,Y=ie.type,fe=ie.bytesPerElement,ye=Y===r.INT||Y===r.UNSIGNED_INT||ce.gpuType===dd;if(ce.isInterleavedBufferAttribute){const xe=ce.data,we=xe.stride,Ne=ce.offset;if(xe.isInstancedInterleavedBuffer){for(let Je=0;Je<k.locationSize;Je++)_(k.location+Je,xe.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Je=0;Je<k.locationSize;Je++)y(k.location+Je);r.bindBuffer(r.ARRAY_BUFFER,De);for(let Je=0;Je<k.locationSize;Je++)L(k.location+Je,N/k.locationSize,Y,oe,we*fe,(Ne+N/k.locationSize*Je)*fe,ye)}else{if(ce.isInstancedBufferAttribute){for(let xe=0;xe<k.locationSize;xe++)_(k.location+xe,ce.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<k.locationSize;xe++)y(k.location+xe);r.bindBuffer(r.ARRAY_BUFFER,De);for(let xe=0;xe<k.locationSize;xe++)L(k.location+xe,N/k.locationSize,Y,oe,N*fe,N/k.locationSize*xe*fe,ye)}}else if(ne!==void 0){const oe=ne[ue];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(k.location,oe);break;case 3:r.vertexAttrib3fv(k.location,oe);break;case 4:r.vertexAttrib4fv(k.location,oe);break;default:r.vertexAttrib1fv(k.location,oe)}}}}b()}function z(){V();for(const C in s){const O=s[C];for(const J in O){const Q=O[J];for(const se in Q)m(Q[se].object),delete Q[se];delete O[J]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const O=s[C.id];for(const J in O){const Q=O[J];for(const se in Q)m(Q[se].object),delete Q[se];delete O[J]}delete s[C.id]}function I(C){for(const O in s){const J=s[O];if(J[C.id]===void 0)continue;const Q=J[C.id];for(const se in Q)m(Q[se].object),delete Q[se];delete J[C.id]}}function V(){R(),c=!0,l!==a&&(l=a,h(l.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:V,resetDefaultState:R,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:y,disableUnusedAttributes:b}}function NM(r,e,t){let s;function a(h){s=h}function l(h,m){r.drawArrays(s,h,m),t.update(m,s,1)}function c(h,m,x){x!==0&&(r.drawArraysInstanced(s,h,m,x),t.update(m,s,x))}function f(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,m,0,x);let S=0;for(let E=0;E<x;E++)S+=m[E];t.update(S,s,1)}function p(h,m,x,v){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<h.length;E++)c(h[E],m[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(s,h,0,m,0,v,0,x);let E=0;for(let T=0;T<x;T++)E+=m[T]*v[T];t.update(E,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function FM(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==ui&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const V=I===Qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Xi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==zi&&!V)}function p(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=p(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const x=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:z,maxSamples:F}}function OM(r){const e=this;let t=null,s=0,a=!1,l=!1;const c=new Yr,f=new at,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||s!==0||a;return a=v,s=x.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,v){t=m(x,v,0)},this.setState=function(x,v,S){const E=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,_=r.get(x);if(!a||E===null||E.length===0||l&&!y)l?m(null):h();else{const b=l?0:s,L=b*4;let P=_.clippingState||null;p.value=P,P=m(E,v,L,S);for(let z=0;z!==L;++z)P[z]=t[z];_.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=b}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(x,v,S,E){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=p.value,E!==!0||y===null){const _=S+T*4,b=v.matrixWorldInverse;f.getNormalMatrix(b),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,P=S;L!==T;++L,P+=4)c.copy(x[L]).applyMatrix4(b,f),c.normal.toArray(y,P),y[P+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function kM(r){let e=new WeakMap;function t(c,f){return f===Af?c.mapping=Ks:f===Cf&&(c.mapping=Zs),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Af||f===Cf)if(e.has(c)){const p=e.get(c).texture;return t(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const h=new Iy(p.height);return h.fromEquirectangularTexture(r,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const Ws=4,km=[.125,.215,.35,.446,.526,.582],Qr=20,af=new $y,Bm=new St;let lf=null,uf=0,cf=0,ff=!1;const Kr=(1+Math.sqrt(5))/2,Vs=1/Kr,zm=[new K(-Kr,Vs,0),new K(Kr,Vs,0),new K(-Vs,0,Kr),new K(Vs,0,Kr),new K(0,Kr,-Vs),new K(0,Kr,Vs),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){lf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,uf,cf),this._renderer.xr.enabled=ff,e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Qo,format:ui,colorSpace:eo,depthBuffer:!1},a=Vm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vm(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BM(l)),this._blurMaterial=zM(l,e,t)}return a}_compileMaterial(e){const t=new ci(this._lodPlanes[0],e);this._renderer.compile(t,af)}_sceneToCubeUV(e,t,s,a){const f=new Gn(90,1,t,s),p=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,v=m.toneMapping;m.getClearColor(Bm),m.toneMapping=Mr,m.autoClear=!1;const S=new jg({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),E=new ci(new ia,S);let T=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,T=!0):(S.color.copy(Bm),T=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(f.up.set(0,p[_],0),f.lookAt(h[_],0,0)):b===1?(f.up.set(0,0,p[_]),f.lookAt(0,h[_],0)):(f.up.set(0,p[_],0),f.lookAt(0,0,h[_]));const L=this._cubeSize;Dl(a,b*L,_>2?L:0,L,L),m.setRenderTarget(a),T&&m.render(E,f),m.render(e,f)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=v,m.autoClear=x,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Ks||e.mapping===Zs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new ci(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;Dl(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(c,af)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=zm[(a-l-1)%zm.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,x=new ci(this._lodPlanes[a],h),v=h.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Qr-1),T=l/E,y=isFinite(l)?1+Math.floor(m*T):Qr;y>Qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Qr}`);const _=[];let b=0;for(let I=0;I<Qr;++I){const V=I/T,R=Math.exp(-V*V/2);_.push(R),I===0?b+=R:I<y&&(b+=2*R)}for(let I=0;I<_.length;I++)_[I]=_[I]/b;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-s;const P=this._sizeLods[a],z=3*P*(a>L-Ws?a-L+Ws:0),F=4*(this._cubeSize-P);Dl(t,z,F,3*P,2*P),p.setRenderTarget(t),p.render(x,af)}}function BM(r){const e=[],t=[],s=[];let a=r;const l=r-Ws+1+km.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let p=1/f;c>r-Ws?p=km[c-r+Ws-1]:c===0&&(p=0),s.push(p);const h=1/(f-2),m=-h,x=1+h,v=[m,m,x,m,x,x,m,m,x,x,m,x],S=6,E=6,T=3,y=2,_=1,b=new Float32Array(T*E*S),L=new Float32Array(y*E*S),P=new Float32Array(_*E*S);for(let F=0;F<S;F++){const I=F%3*2/3-1,V=F>2?0:-1,R=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];b.set(R,T*E*F),L.set(v,y*E*F);const C=[F,F,F,F,F,F];P.set(C,_*E*F)}const z=new ji;z.setAttribute("position",new Wn(b,T)),z.setAttribute("uv",new Wn(L,y)),z.setAttribute("faceIndex",new Wn(P,_)),e.push(z),a>Ws&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Vm(r,e,t){const s=new ns(r,e,t);return s.texture.mapping=$l,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dl(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function zM(r,e,t){const s=new Float32Array(Qr),a=new K(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Sd(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Gm(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sd(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Wm(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Sd(){return`

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
	`}function HM(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const p=f.mapping,h=p===Af||p===Cf,m=p===Ks||p===Zs;if(h||m){let x=e.get(f);const v=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new Hm(r)),x=h?t.fromEquirectangular(f,x):t.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const S=f.image;return h&&S&&S.height>0||m&&S&&a(S)?(t===null&&(t=new Hm(r)),x=h?t.fromEquirectangular(f):t.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",l),x.texture):null}}}return f}function a(f){let p=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&p++;return p===h}function l(f){const p=f.target;p.removeEventListener("dispose",l);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function VM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Gs("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function GM(r,e,t,s){const a={},l=new WeakMap;function c(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(x,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function p(x){const v=x.attributes;for(const S in v)e.update(v[S],r.ARRAY_BUFFER)}function h(x){const v=[],S=x.index,E=x.attributes.position;let T=0;if(S!==null){const b=S.array;T=S.version;for(let L=0,P=b.length;L<P;L+=3){const z=b[L+0],F=b[L+1],I=b[L+2];v.push(z,F,F,I,I,z)}}else if(E!==void 0){const b=E.array;T=E.version;for(let L=0,P=b.length/3-1;L<P;L+=3){const z=L+0,F=L+1,I=L+2;v.push(z,F,F,I,I,z)}}else return;const y=new(Hg(v)?$g:qg)(v,1);y.version=T;const _=l.get(x);_&&e.remove(_),l.set(x,y)}function m(x){const v=l.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&h(x)}else h(x);return l.get(x)}return{get:f,update:p,getWireframeAttribute:m}}function WM(r,e,t){let s;function a(v){s=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,S){r.drawElements(s,S,l,v*c),t.update(S,s,1)}function h(v,S,E){E!==0&&(r.drawElementsInstanced(s,S,l,v*c,E),t.update(S,s,E))}function m(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,v,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];t.update(y,s,1)}function x(v,S,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)h(v[_]/c,S[_],T[_]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,v,0,T,0,E);let _=0;for(let b=0;b<E;b++)_+=S[b]*T[b];t.update(_,s,1)}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=x}function XM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function jM(r,e,t){const s=new WeakMap,a=new Dt;function l(c,f,p){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=m!==void 0?m.length:0;let v=s.get(f);if(v===void 0||v.count!==x){let C=function(){V.dispose(),s.delete(f),f.removeEventListener("dispose",C)};var S=C;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;E===!0&&(P=1),T===!0&&(P=2),y===!0&&(P=3);let z=f.attributes.position.count*P,F=1;z>e.maxTextureSize&&(F=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*F*4*x),V=new Gg(I,z,F,x);V.type=zi,V.needsUpdate=!0;const R=P*4;for(let O=0;O<x;O++){const J=_[O],Q=b[O],se=L[O],le=z*F*4*O;for(let ne=0;ne<J.count;ne++){const ue=ne*R;E===!0&&(a.fromBufferAttribute(J,ne),I[le+ue+0]=a.x,I[le+ue+1]=a.y,I[le+ue+2]=a.z,I[le+ue+3]=0),T===!0&&(a.fromBufferAttribute(Q,ne),I[le+ue+4]=a.x,I[le+ue+5]=a.y,I[le+ue+6]=a.z,I[le+ue+7]=0),y===!0&&(a.fromBufferAttribute(se,ne),I[le+ue+8]=a.x,I[le+ue+9]=a.y,I[le+ue+10]=a.z,I[le+ue+11]=se.itemSize===4?a.w:1)}}v={count:x,texture:V,size:new At(z,F)},s.set(f,v),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const T=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",h)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function qM(r,e,t,s){let a=new WeakMap;function l(p){const h=s.render.frame,m=p.geometry,x=e.get(p,m);if(a.get(x)!==h&&(e.update(x),a.set(x,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==h&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),a.set(p,h))),p.isSkinnedMesh){const v=p.skeleton;a.get(v)!==h&&(v.update(),a.set(v,h))}return x}function c(){a=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}const ev=new In,Xm=new Qg(1,1),tv=new Gg,nv=new vy,iv=new Zg,jm=[],qm=[],$m=new Float32Array(16),Ym=new Float32Array(9),Km=new Float32Array(4);function ro(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=jm[a];if(l===void 0&&(l=new Float32Array(a),jm[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function Jt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Kl(r,e){let t=qm[e];t===void 0&&(t=new Int32Array(e),qm[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function $M(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function YM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function KM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function ZM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function QM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,s))return;Km.set(s),r.uniformMatrix2fv(this.addr,!1,Km),en(t,s)}}function JM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,s))return;Ym.set(s),r.uniformMatrix3fv(this.addr,!1,Ym),en(t,s)}}function e1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,s))return;$m.set(s),r.uniformMatrix4fv(this.addr,!1,$m),en(t,s)}}function t1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function n1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function i1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function r1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function s1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function o1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function a1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function l1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function u1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Xm.compareFunction=zg,l=Xm):l=ev,t.setTexture2D(e||l,a)}function c1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||nv,a)}function f1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||iv,a)}function d1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||tv,a)}function h1(r){switch(r){case 5126:return $M;case 35664:return YM;case 35665:return KM;case 35666:return ZM;case 35674:return QM;case 35675:return JM;case 35676:return e1;case 5124:case 35670:return t1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return r1;case 5125:return s1;case 36294:return o1;case 36295:return a1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return d1}}function p1(r,e){r.uniform1fv(this.addr,e)}function m1(r,e){const t=ro(e,this.size,2);r.uniform2fv(this.addr,t)}function g1(r,e){const t=ro(e,this.size,3);r.uniform3fv(this.addr,t)}function v1(r,e){const t=ro(e,this.size,4);r.uniform4fv(this.addr,t)}function _1(r,e){const t=ro(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function x1(r,e){const t=ro(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function y1(r,e){const t=ro(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function S1(r,e){r.uniform1iv(this.addr,e)}function E1(r,e){r.uniform2iv(this.addr,e)}function M1(r,e){r.uniform3iv(this.addr,e)}function T1(r,e){r.uniform4iv(this.addr,e)}function w1(r,e){r.uniform1uiv(this.addr,e)}function A1(r,e){r.uniform2uiv(this.addr,e)}function C1(r,e){r.uniform3uiv(this.addr,e)}function R1(r,e){r.uniform4uiv(this.addr,e)}function P1(r,e,t){const s=this.cache,a=e.length,l=Kl(t,a);Jt(s,l)||(r.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||ev,l[c])}function b1(r,e,t){const s=this.cache,a=e.length,l=Kl(t,a);Jt(s,l)||(r.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||nv,l[c])}function L1(r,e,t){const s=this.cache,a=e.length,l=Kl(t,a);Jt(s,l)||(r.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||iv,l[c])}function D1(r,e,t){const s=this.cache,a=e.length,l=Kl(t,a);Jt(s,l)||(r.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||tv,l[c])}function U1(r){switch(r){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return v1;case 35674:return _1;case 35675:return x1;case 35676:return y1;case 5124:case 35670:return S1;case 35667:case 35671:return E1;case 35668:case 35672:return M1;case 35669:case 35673:return T1;case 5125:return w1;case 36294:return A1;case 36295:return C1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return D1}}class I1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=h1(t.type)}}class N1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U1(t.type)}}class F1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const df=/(\w+)(\])?(\[|\.)?/g;function Zm(r,e){r.seq.push(e),r.map[e.id]=e}function O1(r,e,t){const s=r.name,a=s.length;for(df.lastIndex=0;;){const l=df.exec(s),c=df.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&c+2===a){Zm(t,h===void 0?new I1(f,r,e):new N1(f,r,e));break}else{let x=t.map[f];x===void 0&&(x=new F1(f),Zm(t,x)),t=x}}}class Hl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);O1(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],p=s[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function Qm(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const k1=37297;let B1=0;function z1(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const Jm=new at;function H1(r){wt._getMatrix(Jm,wt.workingColorSpace,r);const e=`mat3( ${Jm.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(r)){case Gl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function eg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+z1(r.getShaderSource(e),c)}else return a}function V1(r,e){const t=H1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function G1(r,e){let t;switch(e){case Gx:t="Linear";break;case Wx:t="Reinhard";break;case Xx:t="Cineon";break;case jx:t="ACESFilmic";break;case $x:t="AgX";break;case Yx:t="Neutral";break;case qx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ul=new K;function W1(){wt.getLuminanceCoefficients(Ul);const r=Ul.x.toFixed(4),e=Ul.y.toFixed(4),t=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function j1(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function q1(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function jo(r){return r!==""}function tg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ng(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $1=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(r){return r.replace($1,K1)}const Y1=new Map;function K1(r,e){let t=lt[e];if(t===void 0){const s=Y1.get(e);if(s!==void 0)t=lt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return id(t)}const Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ig(r){return r.replace(Z1,Q1)}function Q1(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function rg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function J1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ag?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ex?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function eT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function nT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Cg:e="ENVMAP_BLENDING_MULTIPLY";break;case Hx:e="ENVMAP_BLENDING_MIX";break;case Vx:e="ENVMAP_BLENDING_ADD";break}return e}function iT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function rT(r,e,t,s){const a=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const p=J1(t),h=eT(t),m=tT(t),x=nT(t),v=iT(t),S=X1(t),E=j1(l),T=a.createProgram();let y,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(jo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(jo).join(`
`),_.length>0&&(_+=`
`)):(y=[rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),_=[rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?lt.tonemapping_pars_fragment:"",t.toneMapping!==Mr?G1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,V1("linearToOutputTexel",t.outputColorSpace),W1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),c=id(c),c=tg(c,t),c=ng(c,t),f=id(f),f=tg(f,t),f=ng(f,t),c=ig(c),f=ig(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=b+y+c,P=b+_+f,z=Qm(a,a.VERTEX_SHADER,L),F=Qm(a,a.FRAGMENT_SHADER,P);a.attachShader(T,z),a.attachShader(T,F),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function I(O){if(r.debug.checkShaderErrors){const J=a.getProgramInfoLog(T).trim(),Q=a.getShaderInfoLog(z).trim(),se=a.getShaderInfoLog(F).trim();let le=!0,ne=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(le=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,T,z,F);else{const ue=eg(a,z,"vertex"),k=eg(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+J+`
`+ue+`
`+k)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Q===""||se==="")&&(ne=!1);ne&&(O.diagnostics={runnable:le,programLog:J,vertexShader:{log:Q,prefix:y},fragmentShader:{log:se,prefix:_}})}a.deleteShader(z),a.deleteShader(F),V=new Hl(a,T),R=q1(a,T)}let V;this.getUniforms=function(){return V===void 0&&I(this),V};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(T,k1)),C},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B1++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=F,this}let sT=0;class oT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new aT(e),t.set(e,s)),s}}class aT{constructor(e){this.id=sT++,this.code=e,this.usedTimes=0}}function lT(r,e,t,s,a,l,c){const f=new Wg,p=new oT,h=new Set,m=[],x=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return h.add(R),R===0?"uv":`uv${R}`}function y(R,C,O,J,Q){const se=J.fog,le=Q.geometry,ne=R.isMeshStandardMaterial?J.environment:null,ue=(R.isMeshStandardMaterial?t:e).get(R.envMap||ne),k=ue&&ue.mapping===$l?ue.image.height:null,ce=E[R.type];R.precision!==null&&(S=a.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const oe=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,N=oe!==void 0?oe.length:0;let ie=0;le.morphAttributes.position!==void 0&&(ie=1),le.morphAttributes.normal!==void 0&&(ie=2),le.morphAttributes.color!==void 0&&(ie=3);let De,Y,fe,ye;if(ce){const xt=_i[ce];De=xt.vertexShader,Y=xt.fragmentShader}else De=R.vertexShader,Y=R.fragmentShader,p.update(R),fe=p.getVertexShaderID(R),ye=p.getFragmentShaderID(R);const xe=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Ne=Q.isInstancedMesh===!0,Je=Q.isBatchedMesh===!0,Pt=!!R.map,mt=!!R.matcap,Ut=!!ue,H=!!R.aoMap,vn=!!R.lightMap,ht=!!R.bumpMap,ct=!!R.normalMap,$e=!!R.displacementMap,Rt=!!R.emissiveMap,je=!!R.metalnessMap,D=!!R.roughnessMap,w=R.anisotropy>0,Z=R.clearcoat>0,me=R.dispersion>0,ve=R.iridescence>0,he=R.sheen>0,We=R.transmission>0,Ae=w&&!!R.anisotropyMap,Fe=Z&&!!R.clearcoatMap,ut=Z&&!!R.clearcoatNormalMap,Me=Z&&!!R.clearcoatRoughnessMap,Be=ve&&!!R.iridescenceMap,Ke=ve&&!!R.iridescenceThicknessMap,et=he&&!!R.sheenColorMap,ze=he&&!!R.sheenRoughnessMap,ft=!!R.specularMap,rt=!!R.specularColorMap,Ct=!!R.specularIntensityMap,X=We&&!!R.transmissionMap,Ce=We&&!!R.thicknessMap,ae=!!R.gradientMap,pe=!!R.alphaMap,Le=R.alphaTest>0,be=!!R.alphaHash,st=!!R.extensions;let Nt=Mr;R.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Nt=r.toneMapping);const Kt={shaderID:ce,shaderType:R.type,shaderName:R.name,vertexShader:De,fragmentShader:Y,defines:R.defines,customVertexShaderID:fe,customFragmentShaderID:ye,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Je,batchingColor:Je&&Q._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&Q.instanceColor!==null,instancingMorph:Ne&&Q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:eo,alphaToCoverage:!!R.alphaToCoverage,map:Pt,matcap:mt,envMap:Ut,envMapMode:Ut&&ue.mapping,envMapCubeUVHeight:k,aoMap:H,lightMap:vn,bumpMap:ht,normalMap:ct,displacementMap:v&&$e,emissiveMap:Rt,normalMapObjectSpace:ct&&R.normalMapType===Jx,normalMapTangentSpace:ct&&R.normalMapType===Bg,metalnessMap:je,roughnessMap:D,anisotropy:w,anisotropyMap:Ae,clearcoat:Z,clearcoatMap:Fe,clearcoatNormalMap:ut,clearcoatRoughnessMap:Me,dispersion:me,iridescence:ve,iridescenceMap:Be,iridescenceThicknessMap:Ke,sheen:he,sheenColorMap:et,sheenRoughnessMap:ze,specularMap:ft,specularColorMap:rt,specularIntensityMap:Ct,transmission:We,transmissionMap:X,thicknessMap:Ce,gradientMap:ae,opaque:R.transparent===!1&&R.blending===js&&R.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:be,combine:R.combine,mapUv:Pt&&T(R.map.channel),aoMapUv:H&&T(R.aoMap.channel),lightMapUv:vn&&T(R.lightMap.channel),bumpMapUv:ht&&T(R.bumpMap.channel),normalMapUv:ct&&T(R.normalMap.channel),displacementMapUv:$e&&T(R.displacementMap.channel),emissiveMapUv:Rt&&T(R.emissiveMap.channel),metalnessMapUv:je&&T(R.metalnessMap.channel),roughnessMapUv:D&&T(R.roughnessMap.channel),anisotropyMapUv:Ae&&T(R.anisotropyMap.channel),clearcoatMapUv:Fe&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:ut&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(R.sheenRoughnessMap.channel),specularMapUv:ft&&T(R.specularMap.channel),specularColorMapUv:rt&&T(R.specularColorMap.channel),specularIntensityMapUv:Ct&&T(R.specularIntensityMap.channel),transmissionMapUv:X&&T(R.transmissionMap.channel),thicknessMapUv:Ce&&T(R.thicknessMap.channel),alphaMapUv:pe&&T(R.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(ct||w),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!le.attributes.uv&&(Pt||pe),fog:!!se,useFog:R.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:we,skinning:Q.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Pt&&R.map.isVideoTexture===!0&&wt.getTransfer(R.map.colorSpace)===Lt,decodeVideoTextureEmissive:Rt&&R.emissiveMap.isVideoTexture===!0&&wt.getTransfer(R.emissiveMap.colorSpace)===Lt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===xi,flipSided:R.side===Un,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:st&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&R.extensions.multiDraw===!0||Je)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Kt.vertexUv1s=h.has(1),Kt.vertexUv2s=h.has(2),Kt.vertexUv3s=h.has(3),h.clear(),Kt}function _(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const O in R.defines)C.push(O),C.push(R.defines[O]);return R.isRawShaderMaterial===!1&&(b(C,R),L(C,R),C.push(r.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function b(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function L(R,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),R.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),R.push(f.mask)}function P(R){const C=E[R.type];let O;if(C){const J=_i[C];O=by.clone(J.uniforms)}else O=R.uniforms;return O}function z(R,C){let O;for(let J=0,Q=m.length;J<Q;J++){const se=m[J];if(se.cacheKey===C){O=se,++O.usedTimes;break}}return O===void 0&&(O=new rT(r,C,R,l),m.push(O)),O}function F(R){if(--R.usedTimes===0){const C=m.indexOf(R);m[C]=m[m.length-1],m.pop(),R.destroy()}}function I(R){p.remove(R)}function V(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:P,acquireProgram:z,releaseProgram:F,releaseShaderCache:I,programs:m,dispose:V}}function uT(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function a(c,f,p){r.get(c)[f]=p}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function cT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function sg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function og(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(x,v,S,E,T,y){let _=r[e];return _===void 0?(_={id:x.id,object:x,geometry:v,material:S,groupOrder:E,renderOrder:x.renderOrder,z:T,group:y},r[e]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=S,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=T,_.group=y),e++,_}function f(x,v,S,E,T,y){const _=c(x,v,S,E,T,y);S.transmission>0?s.push(_):S.transparent===!0?a.push(_):t.push(_)}function p(x,v,S,E,T,y){const _=c(x,v,S,E,T,y);S.transmission>0?s.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function h(x,v){t.length>1&&t.sort(x||cT),s.length>1&&s.sort(v||sg),a.length>1&&a.sort(v||sg)}function m(){for(let x=e,v=r.length;x<v;x++){const S=r[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:p,finish:m,sort:h}}function fT(){let r=new WeakMap;function e(s,a){const l=r.get(s);let c;return l===void 0?(c=new og,r.set(s,[c])):a>=l.length?(c=new og,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function dT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new St};break;case"SpotLight":t={position:new K,direction:new K,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function hT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let pT=0;function mT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function gT(r){const e=new dT,t=hT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new K);const a=new K,l=new Gt,c=new Gt;function f(h){let m=0,x=0,v=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let S=0,E=0,T=0,y=0,_=0,b=0,L=0,P=0,z=0,F=0,I=0;h.sort(mT);for(let R=0,C=h.length;R<C;R++){const O=h[R],J=O.color,Q=O.intensity,se=O.distance,le=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)m+=J.r*Q,x+=J.g*Q,v+=J.b*Q;else if(O.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(O.sh.coefficients[ne],Q);I++}else if(O.isDirectionalLight){const ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ue=O.shadow,k=t.get(O);k.shadowIntensity=ue.intensity,k.shadowBias=ue.bias,k.shadowNormalBias=ue.normalBias,k.shadowRadius=ue.radius,k.shadowMapSize=ue.mapSize,s.directionalShadow[S]=k,s.directionalShadowMap[S]=le,s.directionalShadowMatrix[S]=O.shadow.matrix,b++}s.directional[S]=ne,S++}else if(O.isSpotLight){const ne=e.get(O);ne.position.setFromMatrixPosition(O.matrixWorld),ne.color.copy(J).multiplyScalar(Q),ne.distance=se,ne.coneCos=Math.cos(O.angle),ne.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ne.decay=O.decay,s.spot[T]=ne;const ue=O.shadow;if(O.map&&(s.spotLightMap[z]=O.map,z++,ue.updateMatrices(O),O.castShadow&&F++),s.spotLightMatrix[T]=ue.matrix,O.castShadow){const k=t.get(O);k.shadowIntensity=ue.intensity,k.shadowBias=ue.bias,k.shadowNormalBias=ue.normalBias,k.shadowRadius=ue.radius,k.shadowMapSize=ue.mapSize,s.spotShadow[T]=k,s.spotShadowMap[T]=le,P++}T++}else if(O.isRectAreaLight){const ne=e.get(O);ne.color.copy(J).multiplyScalar(Q),ne.halfWidth.set(O.width*.5,0,0),ne.halfHeight.set(0,O.height*.5,0),s.rectArea[y]=ne,y++}else if(O.isPointLight){const ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),ne.distance=O.distance,ne.decay=O.decay,O.castShadow){const ue=O.shadow,k=t.get(O);k.shadowIntensity=ue.intensity,k.shadowBias=ue.bias,k.shadowNormalBias=ue.normalBias,k.shadowRadius=ue.radius,k.shadowMapSize=ue.mapSize,k.shadowCameraNear=ue.camera.near,k.shadowCameraFar=ue.camera.far,s.pointShadow[E]=k,s.pointShadowMap[E]=le,s.pointShadowMatrix[E]=O.shadow.matrix,L++}s.point[E]=ne,E++}else if(O.isHemisphereLight){const ne=e.get(O);ne.skyColor.copy(O.color).multiplyScalar(Q),ne.groundColor.copy(O.groundColor).multiplyScalar(Q),s.hemi[_]=ne,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=x,s.ambient[2]=v;const V=s.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==T||V.rectAreaLength!==y||V.hemiLength!==_||V.numDirectionalShadows!==b||V.numPointShadows!==L||V.numSpotShadows!==P||V.numSpotMaps!==z||V.numLightProbes!==I)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=y,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+z-F,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=I,V.directionalLength=S,V.pointLength=E,V.spotLength=T,V.rectAreaLength=y,V.hemiLength=_,V.numDirectionalShadows=b,V.numPointShadows=L,V.numSpotShadows=P,V.numSpotMaps=z,V.numLightProbes=I,s.version=pT++)}function p(h,m){let x=0,v=0,S=0,E=0,T=0;const y=m.matrixWorldInverse;for(let _=0,b=h.length;_<b;_++){const L=h[_];if(L.isDirectionalLight){const P=s.directional[x];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),x++}else if(L.isSpotLight){const P=s.spot[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const P=s.rectArea[E];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const P=s.point[v];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const P=s.hemi[T];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(y),T++}}}return{setup:f,setupView:p,state:s}}function ag(r){const e=new gT(r),t=[],s=[];function a(m){h.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function p(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function vT(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new ag(r),e.set(a,[f])):l>=c.length?(f=new ag(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const _T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yT(r,e,t){let s=new xd;const a=new At,l=new At,c=new Dt,f=new By({depthPacking:Qx}),p=new zy,h={},m=t.maxTextureSize,x={[wr]:Un,[Un]:wr,[xi]:xi},v=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:_T,fragmentShader:xT}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new ji;E.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ci(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ag;let _=this.type;this.render=function(F,I,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const R=r.getRenderTarget(),C=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Er),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Q=_!==Bi&&this.type===Bi,se=_===Bi&&this.type!==Bi;for(let le=0,ne=F.length;le<ne;le++){const ue=F[le],k=ue.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ce=k.getFrameExtents();if(a.multiply(ce),l.copy(k.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/ce.x),a.x=l.x*ce.x,k.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/ce.y),a.y=l.y*ce.y,k.mapSize.y=l.y)),k.map===null||Q===!0||se===!0){const N=this.type!==Bi?{minFilter:fi,magFilter:fi}:{};k.map!==null&&k.map.dispose(),k.map=new ns(a.x,a.y,N),k.map.texture.name=ue.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const oe=k.getViewportCount();for(let N=0;N<oe;N++){const ie=k.getViewport(N);c.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),J.viewport(c),k.updateMatrices(ue,N),s=k.getFrustum(),P(I,V,k.camera,ue,this.type)}k.isPointLightShadow!==!0&&this.type===Bi&&b(k,V),k.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(R,C,O)};function b(F,I){const V=e.update(T);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ns(a.x,a.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(I,null,V,v,T,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(I,null,V,S,T,null)}function L(F,I,V,R){let C=null;const O=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(O!==void 0)C=O;else if(C=V.isPointLight===!0?p:f,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const J=C.uuid,Q=I.uuid;let se=h[J];se===void 0&&(se={},h[J]=se);let le=se[Q];le===void 0&&(le=C.clone(),se[Q]=le,I.addEventListener("dispose",z)),C=le}if(C.visible=I.visible,C.wireframe=I.wireframe,R===Bi?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:x[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const J=r.properties.get(C);J.light=V}return C}function P(F,I,V,R,C){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Bi)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const Q=e.update(F),se=F.material;if(Array.isArray(se)){const le=Q.groups;for(let ne=0,ue=le.length;ne<ue;ne++){const k=le[ne],ce=se[k.materialIndex];if(ce&&ce.visible){const oe=L(F,ce,R,C);F.onBeforeShadow(r,F,I,V,Q,oe,k),r.renderBufferDirect(V,null,Q,oe,F,k),F.onAfterShadow(r,F,I,V,Q,oe,k)}}}else if(se.visible){const le=L(F,se,R,C);F.onBeforeShadow(r,F,I,V,Q,le,null),r.renderBufferDirect(V,null,Q,le,F,null),F.onAfterShadow(r,F,I,V,Q,le,null)}}const J=F.children;for(let Q=0,se=J.length;Q<se;Q++)P(J[Q],I,V,R,C)}function z(F){F.target.removeEventListener("dispose",z);for(const V in h){const R=h[V],C=F.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const ST={[xf]:yf,[Sf]:Tf,[Ef]:wf,[Ys]:Mf,[yf]:xf,[Tf]:Sf,[wf]:Ef,[Mf]:Ys};function ET(r,e){function t(){let X=!1;const Ce=new Dt;let ae=null;const pe=new Dt(0,0,0,0);return{setMask:function(Le){ae!==Le&&!X&&(r.colorMask(Le,Le,Le,Le),ae=Le)},setLocked:function(Le){X=Le},setClear:function(Le,be,st,Nt,Kt){Kt===!0&&(Le*=Nt,be*=Nt,st*=Nt),Ce.set(Le,be,st,Nt),pe.equals(Ce)===!1&&(r.clearColor(Le,be,st,Nt),pe.copy(Ce))},reset:function(){X=!1,ae=null,pe.set(-1,0,0,0)}}}function s(){let X=!1,Ce=!1,ae=null,pe=null,Le=null;return{setReversed:function(be){if(Ce!==be){const st=e.get("EXT_clip_control");Ce?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Nt=Le;Le=null,this.setClear(Nt)}Ce=be},getReversed:function(){return Ce},setTest:function(be){be?xe(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(be){ae!==be&&!X&&(r.depthMask(be),ae=be)},setFunc:function(be){if(Ce&&(be=ST[be]),pe!==be){switch(be){case xf:r.depthFunc(r.NEVER);break;case yf:r.depthFunc(r.ALWAYS);break;case Sf:r.depthFunc(r.LESS);break;case Ys:r.depthFunc(r.LEQUAL);break;case Ef:r.depthFunc(r.EQUAL);break;case Mf:r.depthFunc(r.GEQUAL);break;case Tf:r.depthFunc(r.GREATER);break;case wf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=be}},setLocked:function(be){X=be},setClear:function(be){Le!==be&&(Ce&&(be=1-be),r.clearDepth(be),Le=be)},reset:function(){X=!1,ae=null,pe=null,Le=null,Ce=!1}}}function a(){let X=!1,Ce=null,ae=null,pe=null,Le=null,be=null,st=null,Nt=null,Kt=null;return{setTest:function(xt){X||(xt?xe(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(xt){Ce!==xt&&!X&&(r.stencilMask(xt),Ce=xt)},setFunc:function(xt,Tn,_n){(ae!==xt||pe!==Tn||Le!==_n)&&(r.stencilFunc(xt,Tn,_n),ae=xt,pe=Tn,Le=_n)},setOp:function(xt,Tn,_n){(be!==xt||st!==Tn||Nt!==_n)&&(r.stencilOp(xt,Tn,_n),be=xt,st=Tn,Nt=_n)},setLocked:function(xt){X=xt},setClear:function(xt){Kt!==xt&&(r.clearStencil(xt),Kt=xt)},reset:function(){X=!1,Ce=null,ae=null,pe=null,Le=null,be=null,st=null,Nt=null,Kt=null}}}const l=new t,c=new s,f=new a,p=new WeakMap,h=new WeakMap;let m={},x={},v=new WeakMap,S=[],E=null,T=!1,y=null,_=null,b=null,L=null,P=null,z=null,F=null,I=new St(0,0,0),V=0,R=!1,C=null,O=null,J=null,Q=null,se=null;const le=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ue=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(k)[1]),ne=ue>=1):k.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ne=ue>=2);let ce=null,oe={};const N=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),De=new Dt().fromArray(N),Y=new Dt().fromArray(ie);function fe(X,Ce,ae,pe){const Le=new Uint8Array(4),be=r.createTexture();r.bindTexture(X,be),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<ae;st++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,Le):r.texImage2D(Ce+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Le);return be}const ye={};ye[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),xe(r.DEPTH_TEST),c.setFunc(Ys),ht(!1),ct(am),xe(r.CULL_FACE),H(Er);function xe(X){m[X]!==!0&&(r.enable(X),m[X]=!0)}function we(X){m[X]!==!1&&(r.disable(X),m[X]=!1)}function Ne(X,Ce){return x[X]!==Ce?(r.bindFramebuffer(X,Ce),x[X]=Ce,X===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ce),X===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Je(X,Ce){let ae=S,pe=!1;if(X){ae=v.get(Ce),ae===void 0&&(ae=[],v.set(Ce,ae));const Le=X.textures;if(ae.length!==Le.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let be=0,st=Le.length;be<st;be++)ae[be]=r.COLOR_ATTACHMENT0+be;ae.length=Le.length,pe=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,pe=!0);pe&&r.drawBuffers(ae)}function Pt(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const mt={[Zr]:r.FUNC_ADD,[Tx]:r.FUNC_SUBTRACT,[wx]:r.FUNC_REVERSE_SUBTRACT};mt[Ax]=r.MIN,mt[Cx]=r.MAX;const Ut={[Rx]:r.ZERO,[Px]:r.ONE,[bx]:r.SRC_COLOR,[vf]:r.SRC_ALPHA,[Fx]:r.SRC_ALPHA_SATURATE,[Ix]:r.DST_COLOR,[Dx]:r.DST_ALPHA,[Lx]:r.ONE_MINUS_SRC_COLOR,[_f]:r.ONE_MINUS_SRC_ALPHA,[Nx]:r.ONE_MINUS_DST_COLOR,[Ux]:r.ONE_MINUS_DST_ALPHA,[Ox]:r.CONSTANT_COLOR,[kx]:r.ONE_MINUS_CONSTANT_COLOR,[Bx]:r.CONSTANT_ALPHA,[zx]:r.ONE_MINUS_CONSTANT_ALPHA};function H(X,Ce,ae,pe,Le,be,st,Nt,Kt,xt){if(X===Er){T===!0&&(we(r.BLEND),T=!1);return}if(T===!1&&(xe(r.BLEND),T=!0),X!==Mx){if(X!==y||xt!==R){if((_!==Zr||P!==Zr)&&(r.blendEquation(r.FUNC_ADD),_=Zr,P=Zr),xt)switch(X){case js:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lm:r.blendFunc(r.ONE,r.ONE);break;case um:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case um:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}b=null,L=null,z=null,F=null,I.set(0,0,0),V=0,y=X,R=xt}return}Le=Le||Ce,be=be||ae,st=st||pe,(Ce!==_||Le!==P)&&(r.blendEquationSeparate(mt[Ce],mt[Le]),_=Ce,P=Le),(ae!==b||pe!==L||be!==z||st!==F)&&(r.blendFuncSeparate(Ut[ae],Ut[pe],Ut[be],Ut[st]),b=ae,L=pe,z=be,F=st),(Nt.equals(I)===!1||Kt!==V)&&(r.blendColor(Nt.r,Nt.g,Nt.b,Kt),I.copy(Nt),V=Kt),y=X,R=!1}function vn(X,Ce){X.side===xi?we(r.CULL_FACE):xe(r.CULL_FACE);let ae=X.side===Un;Ce&&(ae=!ae),ht(ae),X.blending===js&&X.transparent===!1?H(Er):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const pe=X.stencilWrite;f.setTest(pe),pe&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Rt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(X){C!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),C=X)}function ct(X){X!==yx?(xe(r.CULL_FACE),X!==O&&(X===am?r.cullFace(r.BACK):X===Sx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),O=X}function $e(X){X!==J&&(ne&&r.lineWidth(X),J=X)}function Rt(X,Ce,ae){X?(xe(r.POLYGON_OFFSET_FILL),(Q!==Ce||se!==ae)&&(r.polygonOffset(Ce,ae),Q=Ce,se=ae)):we(r.POLYGON_OFFSET_FILL)}function je(X){X?xe(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function D(X){X===void 0&&(X=r.TEXTURE0+le-1),ce!==X&&(r.activeTexture(X),ce=X)}function w(X,Ce,ae){ae===void 0&&(ce===null?ae=r.TEXTURE0+le-1:ae=ce);let pe=oe[ae];pe===void 0&&(pe={type:void 0,texture:void 0},oe[ae]=pe),(pe.type!==X||pe.texture!==Ce)&&(ce!==ae&&(r.activeTexture(ae),ce=ae),r.bindTexture(X,Ce||ye[X]),pe.type=X,pe.texture=Ce)}function Z(){const X=oe[ce];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{r.compressedTexImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{r.texSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{r.texSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{r.texStorage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{r.texStorage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Be(){try{r.texImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ke(){try{r.texImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(X){De.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),De.copy(X))}function ze(X){Y.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Y.copy(X))}function ft(X,Ce){let ae=h.get(Ce);ae===void 0&&(ae=new WeakMap,h.set(Ce,ae));let pe=ae.get(X);pe===void 0&&(pe=r.getUniformBlockIndex(Ce,X.name),ae.set(X,pe))}function rt(X,Ce){const pe=h.get(Ce).get(X);p.get(Ce)!==pe&&(r.uniformBlockBinding(Ce,pe,X.__bindingPointIndex),p.set(Ce,pe))}function Ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},ce=null,oe={},x={},v=new WeakMap,S=[],E=null,T=!1,y=null,_=null,b=null,L=null,P=null,z=null,F=null,I=new St(0,0,0),V=0,R=!1,C=null,O=null,J=null,Q=null,se=null,De.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:xe,disable:we,bindFramebuffer:Ne,drawBuffers:Je,useProgram:Pt,setBlending:H,setMaterial:vn,setFlipSided:ht,setCullFace:ct,setLineWidth:$e,setPolygonOffset:Rt,setScissorTest:je,activeTexture:D,bindTexture:w,unbindTexture:Z,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:Be,texImage3D:Ke,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:ut,texStorage3D:Me,texSubImage2D:he,texSubImage3D:We,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:et,viewport:ze,reset:Ct}}function MT(r,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new At,m=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,w){return S?new OffscreenCanvas(D,w):Xl("canvas")}function T(D,w,Z){let me=1;const ve=je(D);if((ve.width>Z||ve.height>Z)&&(me=Z/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const he=Math.floor(me*ve.width),We=Math.floor(me*ve.height);x===void 0&&(x=E(he,We));const Ae=w?E(he,We):x;return Ae.width=he,Ae.height=We,Ae.getContext("2d").drawImage(D,0,0,he,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+he+"x"+We+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function y(D){return D.generateMipmaps}function _(D){r.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(D,w,Z,me,ve=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let he=w;if(w===r.RED&&(Z===r.FLOAT&&(he=r.R32F),Z===r.HALF_FLOAT&&(he=r.R16F),Z===r.UNSIGNED_BYTE&&(he=r.R8)),w===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(he=r.R8UI),Z===r.UNSIGNED_SHORT&&(he=r.R16UI),Z===r.UNSIGNED_INT&&(he=r.R32UI),Z===r.BYTE&&(he=r.R8I),Z===r.SHORT&&(he=r.R16I),Z===r.INT&&(he=r.R32I)),w===r.RG&&(Z===r.FLOAT&&(he=r.RG32F),Z===r.HALF_FLOAT&&(he=r.RG16F),Z===r.UNSIGNED_BYTE&&(he=r.RG8)),w===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(he=r.RG8UI),Z===r.UNSIGNED_SHORT&&(he=r.RG16UI),Z===r.UNSIGNED_INT&&(he=r.RG32UI),Z===r.BYTE&&(he=r.RG8I),Z===r.SHORT&&(he=r.RG16I),Z===r.INT&&(he=r.RG32I)),w===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(he=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(he=r.RGB16UI),Z===r.UNSIGNED_INT&&(he=r.RGB32UI),Z===r.BYTE&&(he=r.RGB8I),Z===r.SHORT&&(he=r.RGB16I),Z===r.INT&&(he=r.RGB32I)),w===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),Z===r.UNSIGNED_INT&&(he=r.RGBA32UI),Z===r.BYTE&&(he=r.RGBA8I),Z===r.SHORT&&(he=r.RGBA16I),Z===r.INT&&(he=r.RGBA32I)),w===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),w===r.RGBA){const We=ve?Gl:wt.getTransfer(me);Z===r.FLOAT&&(he=r.RGBA32F),Z===r.HALF_FLOAT&&(he=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(he=We===Lt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(D,w){let Z;return D?w===null||w===ts||w===Qs?Z=r.DEPTH24_STENCIL8:w===zi?Z=r.DEPTH32F_STENCIL8:w===$o&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ts||w===Qs?Z=r.DEPTH_COMPONENT24:w===zi?Z=r.DEPTH_COMPONENT32F:w===$o&&(Z=r.DEPTH_COMPONENT16),Z}function z(D,w){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==fi&&D.minFilter!==yi?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function F(D){const w=D.target;w.removeEventListener("dispose",F),V(w),w.isVideoTexture&&m.delete(w)}function I(D){const w=D.target;w.removeEventListener("dispose",I),C(w)}function V(D){const w=s.get(D);if(w.__webglInit===void 0)return;const Z=D.source,me=v.get(Z);if(me){const ve=me[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&R(D),Object.keys(me).length===0&&v.delete(Z)}s.remove(D)}function R(D){const w=s.get(D);r.deleteTexture(w.__webglTexture);const Z=D.source,me=v.get(Z);delete me[w.__cacheKey],c.memory.textures--}function C(D){const w=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let ve=0;ve<w.__webglFramebuffer[me].length;ve++)r.deleteFramebuffer(w.__webglFramebuffer[me][ve]);else r.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)r.deleteFramebuffer(w.__webglFramebuffer[me]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=D.textures;for(let me=0,ve=Z.length;me<ve;me++){const he=s.get(Z[me]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),c.memory.textures--),s.remove(Z[me])}s.remove(D)}let O=0;function J(){O=0}function Q(){const D=O;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),O+=1,D}function se(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function le(D,w){const Z=s.get(D);if(D.isVideoTexture&&$e(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(Z,D,w);return}}t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+w)}function ne(D,w){const Z=s.get(D);if(D.version>0&&Z.__version!==D.version){Y(Z,D,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+w)}function ue(D,w){const Z=s.get(D);if(D.version>0&&Z.__version!==D.version){Y(Z,D,w);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+w)}function k(D,w){const Z=s.get(D);if(D.version>0&&Z.__version!==D.version){fe(Z,D,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+w)}const ce={[Rf]:r.REPEAT,[Jr]:r.CLAMP_TO_EDGE,[Pf]:r.MIRRORED_REPEAT},oe={[fi]:r.NEAREST,[Kx]:r.NEAREST_MIPMAP_NEAREST,[dl]:r.NEAREST_MIPMAP_LINEAR,[yi]:r.LINEAR,[Nc]:r.LINEAR_MIPMAP_NEAREST,[es]:r.LINEAR_MIPMAP_LINEAR},N={[ey]:r.NEVER,[oy]:r.ALWAYS,[ty]:r.LESS,[zg]:r.LEQUAL,[ny]:r.EQUAL,[sy]:r.GEQUAL,[iy]:r.GREATER,[ry]:r.NOTEQUAL};function ie(D,w){if(w.type===zi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===yi||w.magFilter===Nc||w.magFilter===dl||w.magFilter===es||w.minFilter===yi||w.minFilter===Nc||w.minFilter===dl||w.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ce[w.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ce[w.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ce[w.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,oe[w.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,oe[w.minFilter]),w.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,N[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===fi||w.minFilter!==dl&&w.minFilter!==es||w.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function De(D,w){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",F));const me=w.source;let ve=v.get(me);ve===void 0&&(ve={},v.set(me,ve));const he=se(w);if(he!==D.__cacheKey){ve[he]===void 0&&(ve[he]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),ve[he].usedTimes++;const We=ve[D.__cacheKey];We!==void 0&&(ve[D.__cacheKey].usedTimes--,We.usedTimes===0&&R(w)),D.__cacheKey=he,D.__webglTexture=ve[he].texture}return Z}function Y(D,w,Z){let me=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=r.TEXTURE_3D);const ve=De(D,w),he=w.source;t.bindTexture(me,D.__webglTexture,r.TEXTURE0+Z);const We=s.get(he);if(he.version!==We.__version||ve===!0){t.activeTexture(r.TEXTURE0+Z);const Ae=wt.getPrimaries(wt.workingColorSpace),Fe=w.colorSpace===Sr?null:wt.getPrimaries(w.colorSpace),ut=w.colorSpace===Sr||Ae===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Me=T(w.image,!1,a.maxTextureSize);Me=Rt(w,Me);const Be=l.convert(w.format,w.colorSpace),Ke=l.convert(w.type);let et=L(w.internalFormat,Be,Ke,w.colorSpace,w.isVideoTexture);ie(me,w);let ze;const ft=w.mipmaps,rt=w.isVideoTexture!==!0,Ct=We.__version===void 0||ve===!0,X=he.dataReady,Ce=z(w,Me);if(w.isDepthTexture)et=P(w.format===Js,w.type),Ct&&(rt?t.texStorage2D(r.TEXTURE_2D,1,et,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,et,Me.width,Me.height,0,Be,Ke,null));else if(w.isDataTexture)if(ft.length>0){rt&&Ct&&t.texStorage2D(r.TEXTURE_2D,Ce,et,ft[0].width,ft[0].height);for(let ae=0,pe=ft.length;ae<pe;ae++)ze=ft[ae],rt?X&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,Ke,ze.data):t.texImage2D(r.TEXTURE_2D,ae,et,ze.width,ze.height,0,Be,Ke,ze.data);w.generateMipmaps=!1}else rt?(Ct&&t.texStorage2D(r.TEXTURE_2D,Ce,et,Me.width,Me.height),X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,Be,Ke,Me.data)):t.texImage2D(r.TEXTURE_2D,0,et,Me.width,Me.height,0,Be,Ke,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&Ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,et,ft[0].width,ft[0].height,Me.depth);for(let ae=0,pe=ft.length;ae<pe;ae++)if(ze=ft[ae],w.format!==ui)if(Be!==null)if(rt){if(X)if(w.layerUpdates.size>0){const Le=Om(ze.width,ze.height,w.format,w.type);for(const be of w.layerUpdates){const st=ze.data.subarray(be*Le/ze.data.BYTES_PER_ELEMENT,(be+1)*Le/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,be,ze.width,ze.height,1,Be,st)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,Me.depth,Be,ze.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,et,ze.width,ze.height,Me.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,ze.width,ze.height,Me.depth,Be,Ke,ze.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,et,ze.width,ze.height,Me.depth,0,Be,Ke,ze.data)}else{rt&&Ct&&t.texStorage2D(r.TEXTURE_2D,Ce,et,ft[0].width,ft[0].height);for(let ae=0,pe=ft.length;ae<pe;ae++)ze=ft[ae],w.format!==ui?Be!==null?rt?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,ze.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,et,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?X&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ze.width,ze.height,Be,Ke,ze.data):t.texImage2D(r.TEXTURE_2D,ae,et,ze.width,ze.height,0,Be,Ke,ze.data)}else if(w.isDataArrayTexture)if(rt){if(Ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,et,Me.width,Me.height,Me.depth),X)if(w.layerUpdates.size>0){const ae=Om(Me.width,Me.height,w.format,w.type);for(const pe of w.layerUpdates){const Le=Me.data.subarray(pe*ae/Me.data.BYTES_PER_ELEMENT,(pe+1)*ae/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Be,Ke,Le)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Be,Ke,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,et,Me.width,Me.height,Me.depth,0,Be,Ke,Me.data);else if(w.isData3DTexture)rt?(Ct&&t.texStorage3D(r.TEXTURE_3D,Ce,et,Me.width,Me.height,Me.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Be,Ke,Me.data)):t.texImage3D(r.TEXTURE_3D,0,et,Me.width,Me.height,Me.depth,0,Be,Ke,Me.data);else if(w.isFramebufferTexture){if(Ct)if(rt)t.texStorage2D(r.TEXTURE_2D,Ce,et,Me.width,Me.height);else{let ae=Me.width,pe=Me.height;for(let Le=0;Le<Ce;Le++)t.texImage2D(r.TEXTURE_2D,Le,et,ae,pe,0,Be,Ke,null),ae>>=1,pe>>=1}}else if(ft.length>0){if(rt&&Ct){const ae=je(ft[0]);t.texStorage2D(r.TEXTURE_2D,Ce,et,ae.width,ae.height)}for(let ae=0,pe=ft.length;ae<pe;ae++)ze=ft[ae],rt?X&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Be,Ke,ze):t.texImage2D(r.TEXTURE_2D,ae,et,Be,Ke,ze);w.generateMipmaps=!1}else if(rt){if(Ct){const ae=je(Me);t.texStorage2D(r.TEXTURE_2D,Ce,et,ae.width,ae.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,Ke,Me)}else t.texImage2D(r.TEXTURE_2D,0,et,Be,Ke,Me);y(w)&&_(me),We.__version=he.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function fe(D,w,Z){if(w.image.length!==6)return;const me=De(D,w),ve=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Z);const he=s.get(ve);if(ve.version!==he.__version||me===!0){t.activeTexture(r.TEXTURE0+Z);const We=wt.getPrimaries(wt.workingColorSpace),Ae=w.colorSpace===Sr?null:wt.getPrimaries(w.colorSpace),Fe=w.colorSpace===Sr||We===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ut=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Be=[];for(let pe=0;pe<6;pe++)!ut&&!Me?Be[pe]=T(w.image[pe],!0,a.maxCubemapSize):Be[pe]=Me?w.image[pe].image:w.image[pe],Be[pe]=Rt(w,Be[pe]);const Ke=Be[0],et=l.convert(w.format,w.colorSpace),ze=l.convert(w.type),ft=L(w.internalFormat,et,ze,w.colorSpace),rt=w.isVideoTexture!==!0,Ct=he.__version===void 0||me===!0,X=ve.dataReady;let Ce=z(w,Ke);ie(r.TEXTURE_CUBE_MAP,w);let ae;if(ut){rt&&Ct&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,ft,Ke.width,Ke.height);for(let pe=0;pe<6;pe++){ae=Be[pe].mipmaps;for(let Le=0;Le<ae.length;Le++){const be=ae[Le];w.format!==ui?et!==null?rt?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,be.width,be.height,et,be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ft,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,be.width,be.height,et,ze,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ft,be.width,be.height,0,et,ze,be.data)}}}else{if(ae=w.mipmaps,rt&&Ct){ae.length>0&&Ce++;const pe=je(Be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){rt?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Be[pe].width,Be[pe].height,et,ze,Be[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Be[pe].width,Be[pe].height,0,et,ze,Be[pe].data);for(let Le=0;Le<ae.length;Le++){const st=ae[Le].image[pe].image;rt?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,st.width,st.height,et,ze,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ft,st.width,st.height,0,et,ze,st.data)}}else{rt?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,ze,Be[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,et,ze,Be[pe]);for(let Le=0;Le<ae.length;Le++){const be=ae[Le];rt?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,et,ze,be.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ft,et,ze,be.image[pe])}}}y(w)&&_(r.TEXTURE_CUBE_MAP),he.__version=ve.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ye(D,w,Z,me,ve,he){const We=l.convert(Z.format,Z.colorSpace),Ae=l.convert(Z.type),Fe=L(Z.internalFormat,We,Ae,Z.colorSpace),ut=s.get(w),Me=s.get(Z);if(Me.__renderTarget=w,!ut.__hasExternalTextures){const Be=Math.max(1,w.width>>he),Ke=Math.max(1,w.height>>he);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,he,Fe,Be,Ke,w.depth,0,We,Ae,null):t.texImage2D(ve,he,Fe,Be,Ke,0,We,Ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),ct(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ve,Me.__webglTexture,0,ht(w)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ve,Me.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(D,w,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,D),w.depthBuffer){const me=w.depthTexture,ve=me&&me.isDepthTexture?me.type:null,he=P(w.stencilBuffer,ve),We=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=ht(w);ct(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae,he,w.width,w.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,he,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,he,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,We,r.RENDERBUFFER,D)}else{const me=w.textures;for(let ve=0;ve<me.length;ve++){const he=me[ve],We=l.convert(he.format,he.colorSpace),Ae=l.convert(he.type),Fe=L(he.internalFormat,We,Ae,he.colorSpace),ut=ht(w);Z&&ct(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,Fe,w.width,w.height):ct(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,Fe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Fe,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),le(w.depthTexture,0);const ve=me.__webglTexture,he=ht(w);if(w.depthTexture.format===qs)ct(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(w.depthTexture.format===Js)ct(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ne(D){const w=s.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=me}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,D)}else if(Z){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=r.createRenderbuffer(),xe(w.__webglDepthbuffer[me],D,!1);else{const ve=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,he)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),xe(w.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,ve)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(D,w,Z){const me=s.get(D);w!==void 0&&ye(me.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&Ne(D)}function Pt(D){const w=D.texture,Z=s.get(D),me=s.get(w);D.addEventListener("dispose",I);const ve=D.textures,he=D.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=w.version,c.memory.textures++),he){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)Z.__webglFramebuffer[Ae][Fe]=r.createFramebuffer()}else Z.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(We)for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const ut=s.get(ve[Ae]);ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&ct(D)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Fe=ve[Ae];Z.__webglColorRenderbuffer[Ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const ut=l.convert(Fe.format,Fe.colorSpace),Me=l.convert(Fe.type),Be=L(Fe.internalFormat,ut,Me,Fe.colorSpace,D.isXRRenderTarget===!0),Ke=ht(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,Be,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),xe(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),ie(r.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)ye(Z.__webglFramebuffer[Ae][Fe],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else ye(Z.__webglFramebuffer[Ae],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(w)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const ut=ve[Ae],Me=s.get(ut);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),ie(r.TEXTURE_2D,ut),ye(Z.__webglFramebuffer,D,ut,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,0),y(ut)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,me.__webglTexture),ie(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)ye(Z.__webglFramebuffer[Fe],D,w,r.COLOR_ATTACHMENT0,Ae,Fe);else ye(Z.__webglFramebuffer,D,w,r.COLOR_ATTACHMENT0,Ae,0);y(w)&&_(Ae),t.unbindTexture()}D.depthBuffer&&Ne(D)}function mt(D){const w=D.textures;for(let Z=0,me=w.length;Z<me;Z++){const ve=w[Z];if(y(ve)){const he=b(D),We=s.get(ve).__webglTexture;t.bindTexture(he,We),_(he),t.unbindTexture()}}}const Ut=[],H=[];function vn(D){if(D.samples>0){if(ct(D)===!1){const w=D.textures,Z=D.width,me=D.height;let ve=r.COLOR_BUFFER_BIT;const he=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,We=s.get(D),Ae=w.length>1;if(Ae)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ut=s.get(w[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ut,0)}r.blitFramebuffer(0,0,Z,me,0,0,Z,me,ve,r.NEAREST),p===!0&&(Ut.length=0,H.length=0,Ut.push(r.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ut.push(he),H.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ut=s.get(w[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,ut,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const w=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function ht(D){return Math.min(a.maxSamples,D.samples)}function ct(D){const w=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $e(D){const w=c.render.frame;m.get(D)!==w&&(m.set(D,w),D.update())}function Rt(D,w){const Z=D.colorSpace,me=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==eo&&Z!==Sr&&(wt.getTransfer(Z)===Lt?(me!==ui||ve!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=J,this.setTexture2D=le,this.setTexture2DArray=ne,this.setTexture3D=ue,this.setTextureCube=k,this.rebindTextures=Je,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ct}function TT(r,e){function t(s,a=Sr){let l;const c=wt.getTransfer(a);if(s===Xi)return r.UNSIGNED_BYTE;if(s===hd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===pd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Lg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Pg)return r.BYTE;if(s===bg)return r.SHORT;if(s===$o)return r.UNSIGNED_SHORT;if(s===dd)return r.INT;if(s===ts)return r.UNSIGNED_INT;if(s===zi)return r.FLOAT;if(s===Qo)return r.HALF_FLOAT;if(s===Dg)return r.ALPHA;if(s===Ug)return r.RGB;if(s===ui)return r.RGBA;if(s===Ig)return r.LUMINANCE;if(s===Ng)return r.LUMINANCE_ALPHA;if(s===qs)return r.DEPTH_COMPONENT;if(s===Js)return r.DEPTH_STENCIL;if(s===Fg)return r.RED;if(s===md)return r.RED_INTEGER;if(s===Og)return r.RG;if(s===gd)return r.RG_INTEGER;if(s===vd)return r.RGBA_INTEGER;if(s===Fl||s===Ol||s===kl||s===Bl)if(c===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Fl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Fl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ol)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bf||s===Lf||s===Df||s===Uf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===bf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Df)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Uf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===If||s===Nf||s===Ff)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===If||s===Nf)return c===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Ff)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Of||s===kf||s===Bf||s===zf||s===Hf||s===Vf||s===Gf||s===Wf||s===Xf||s===jf||s===qf||s===$f||s===Yf||s===Kf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Of)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$f)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zl||s===Zf||s===Qf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===zl)return c===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Qf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kg||s===Jf||s===ed||s===td)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===zl)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Jf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ed)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===td)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qs?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const wT={type:"move"};class hf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,s),_=this._getHandJoint(h,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const m=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],v=m.position.distanceTo(x.position),S=.02,E=.005;h.inputState.pinching&&v>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(wT)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new bl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const AT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CT=`
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

}`;class RT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new In,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Ar({vertexShader:AT,fragmentShader:CT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ci(new Yl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PT extends io{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",p=1,h=null,m=null,x=null,v=null,S=null,E=null;const T=new RT,y=t.getContextAttributes();let _=null,b=null;const L=[],P=[],z=new At;let F=null;const I=new Gn;I.viewport=new Dt;const V=new Gn;V.viewport=new Dt;const R=[I,V],C=new Yy;let O=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let fe=L[Y];return fe===void 0&&(fe=new hf,L[Y]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Y){let fe=L[Y];return fe===void 0&&(fe=new hf,L[Y]=fe),fe.getGripSpace()},this.getHand=function(Y){let fe=L[Y];return fe===void 0&&(fe=new hf,L[Y]=fe),fe.getHandSpace()};function Q(Y){const fe=P.indexOf(Y.inputSource);if(fe===-1)return;const ye=L[fe];ye!==void 0&&(ye.update(Y.inputSource,Y.frame,h||c),ye.dispatchEvent({type:Y.type,data:Y.inputSource}))}function se(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",se),a.removeEventListener("inputsourceschange",le);for(let Y=0;Y<L.length;Y++){const fe=P[Y];fe!==null&&(P[Y]=null,L[Y].disconnect(fe))}O=null,J=null,T.reset(),e.setRenderTarget(_),S=null,v=null,x=null,a=null,b=null,De.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){f=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",se),a.addEventListener("inputsourceschange",le),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(z),a.renderState.layers===void 0){const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new ns(S.framebufferWidth,S.framebufferHeight,{format:ui,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let fe=null,ye=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?Js:qs,ye=y.stencil?Qs:ts);const we={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};x=new XRWebGLBinding(a,t),v=x.createProjectionLayer(we),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new ns(v.textureWidth,v.textureHeight,{format:ui,type:Xi,depthTexture:new Qg(v.textureWidth,v.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await a.requestReferenceSpace(f),De.setContext(a),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function le(Y){for(let fe=0;fe<Y.removed.length;fe++){const ye=Y.removed[fe],xe=P.indexOf(ye);xe>=0&&(P[xe]=null,L[xe].disconnect(ye))}for(let fe=0;fe<Y.added.length;fe++){const ye=Y.added[fe];let xe=P.indexOf(ye);if(xe===-1){for(let Ne=0;Ne<L.length;Ne++)if(Ne>=P.length){P.push(ye),xe=Ne;break}else if(P[Ne]===null){P[Ne]=ye,xe=Ne;break}if(xe===-1)break}const we=L[xe];we&&we.connect(ye)}}const ne=new K,ue=new K;function k(Y,fe,ye){ne.setFromMatrixPosition(fe.matrixWorld),ue.setFromMatrixPosition(ye.matrixWorld);const xe=ne.distanceTo(ue),we=fe.projectionMatrix.elements,Ne=ye.projectionMatrix.elements,Je=we[14]/(we[10]-1),Pt=we[14]/(we[10]+1),mt=(we[9]+1)/we[5],Ut=(we[9]-1)/we[5],H=(we[8]-1)/we[0],vn=(Ne[8]+1)/Ne[0],ht=Je*H,ct=Je*vn,$e=xe/(-H+vn),Rt=$e*-H;if(fe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Rt),Y.translateZ($e),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),we[10]===-1)Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const je=Je+$e,D=Pt+$e,w=ht-Rt,Z=ct+(xe-Rt),me=mt*Pt/D*je,ve=Ut*Pt/D*je;Y.projectionMatrix.makePerspective(w,Z,me,ve,je,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ce(Y,fe){fe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(fe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let fe=Y.near,ye=Y.far;T.texture!==null&&(T.depthNear>0&&(fe=T.depthNear),T.depthFar>0&&(ye=T.depthFar)),C.near=V.near=I.near=fe,C.far=V.far=I.far=ye,(O!==C.near||J!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,J=C.far),I.layers.mask=Y.layers.mask|2,V.layers.mask=Y.layers.mask|4,C.layers.mask=I.layers.mask|V.layers.mask;const xe=Y.parent,we=C.cameras;ce(C,xe);for(let Ne=0;Ne<we.length;Ne++)ce(we[Ne],xe);we.length===2?k(C,I,V):C.projectionMatrix.copy(I.projectionMatrix),oe(Y,C,xe)};function oe(Y,fe,ye){ye===null?Y.matrix.copy(fe.matrixWorld):(Y.matrix.copy(ye.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(fe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=nd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(Y){p=Y,v!==null&&(v.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let N=null;function ie(Y,fe){if(m=fe.getViewerPose(h||c),E=fe,m!==null){const ye=m.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let xe=!1;ye.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Ne=0;Ne<ye.length;Ne++){const Je=ye[Ne];let Pt=null;if(S!==null)Pt=S.getViewport(Je);else{const Ut=x.getViewSubImage(v,Je);Pt=Ut.viewport,Ne===0&&(e.setRenderTargetTextures(b,Ut.colorTexture,v.ignoreDepthValues?void 0:Ut.depthStencilTexture),e.setRenderTarget(b))}let mt=R[Ne];mt===void 0&&(mt=new Gn,mt.layers.enable(Ne),mt.viewport=new Dt,R[Ne]=mt),mt.matrix.fromArray(Je.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Je.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Ne===0&&(C.matrix.copy(mt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(mt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ne=x.getDepthInformation(ye[0]);Ne&&Ne.isValid&&Ne.texture&&T.init(e,Ne,a.renderState)}}for(let ye=0;ye<L.length;ye++){const xe=P[ye],we=L[ye];xe!==null&&we!==void 0&&we.update(xe,fe,h||c)}N&&N(Y,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),E=null}const De=new Jg;De.setAnimationLoop(ie),this.setAnimationLoop=function(Y){N=Y},this.dispose=function(){}}}const $r=new Si,bT=new Gt;function LT(r,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,Yg(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,b,L,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),x(y,_)):_.isMeshPhongMaterial?(l(y,_),m(y,_)):_.isMeshStandardMaterial?(l(y,_),v(y,_),_.isMeshPhysicalMaterial&&S(y,_,P)):_.isMeshMatcapMaterial?(l(y,_),E(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),T(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?p(y,_,b,L):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Un&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Un&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const b=e.get(_),L=b.envMap,P=b.envMapRotation;L&&(y.envMap.value=L,$r.copy(P),$r.x*=-1,$r.y*=-1,$r.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),y.envMapRotation.value.setFromMatrix4(bT.makeRotationFromEuler($r)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,b,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*b,y.scale.value=L*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,b){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Un&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){const b=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function DT(r,e,t,s){let a={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,L){const P=L.program;s.uniformBlockBinding(b,P)}function h(b,L){let P=a[b.id];P===void 0&&(E(b),P=m(b),a[b.id]=P,b.addEventListener("dispose",y));const z=L.program;s.updateUBOMapping(b,z);const F=e.render.frame;l[b.id]!==F&&(v(b),l[b.id]=F)}function m(b){const L=x();b.__bindingPointIndex=L;const P=r.createBuffer(),z=b.__size,F=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,z,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,P),P}function x(){for(let b=0;b<f;b++)if(c.indexOf(b)===-1)return c.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(b){const L=a[b.id],P=b.uniforms,z=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let F=0,I=P.length;F<I;F++){const V=Array.isArray(P[F])?P[F]:[P[F]];for(let R=0,C=V.length;R<C;R++){const O=V[R];if(S(O,F,R,z)===!0){const J=O.__offset,Q=Array.isArray(O.value)?O.value:[O.value];let se=0;for(let le=0;le<Q.length;le++){const ne=Q[le],ue=T(ne);typeof ne=="number"||typeof ne=="boolean"?(O.__data[0]=ne,r.bufferSubData(r.UNIFORM_BUFFER,J+se,O.__data)):ne.isMatrix3?(O.__data[0]=ne.elements[0],O.__data[1]=ne.elements[1],O.__data[2]=ne.elements[2],O.__data[3]=0,O.__data[4]=ne.elements[3],O.__data[5]=ne.elements[4],O.__data[6]=ne.elements[5],O.__data[7]=0,O.__data[8]=ne.elements[6],O.__data[9]=ne.elements[7],O.__data[10]=ne.elements[8],O.__data[11]=0):(ne.toArray(O.__data,se),se+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(b,L,P,z){const F=b.value,I=L+"_"+P;if(z[I]===void 0)return typeof F=="number"||typeof F=="boolean"?z[I]=F:z[I]=F.clone(),!0;{const V=z[I];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return z[I]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function E(b){const L=b.uniforms;let P=0;const z=16;for(let I=0,V=L.length;I<V;I++){const R=Array.isArray(L[I])?L[I]:[L[I]];for(let C=0,O=R.length;C<O;C++){const J=R[C],Q=Array.isArray(J.value)?J.value:[J.value];for(let se=0,le=Q.length;se<le;se++){const ne=Q[se],ue=T(ne),k=P%z,ce=k%ue.boundary,oe=k+ce;P+=ce,oe!==0&&z-oe<ue.storage&&(P+=z-oe),J.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=P,P+=ue.storage}}}const F=P%z;return F>0&&(P+=z-F),b.__size=P,b.__cache={},this}function T(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),L}function y(b){const L=b.target;L.removeEventListener("dispose",y);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function _(){for(const b in a)r.deleteBuffer(a[b]);c=[],a={},l={}}return{bind:p,update:h,dispose:_}}class UT{constructor(e={}){const{canvas:t=ly(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,_=null;const b=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this.toneMapping=Mr,this.toneMappingExposure=1;const P=this;let z=!1,F=0,I=0,V=null,R=-1,C=null;const O=new Dt,J=new Dt;let Q=null;const se=new St(0);let le=0,ne=t.width,ue=t.height,k=1,ce=null,oe=null;const N=new Dt(0,0,ne,ue),ie=new Dt(0,0,ne,ue);let De=!1;const Y=new xd;let fe=!1,ye=!1;const xe=new Gt,we=new Gt,Ne=new K,Je=new Dt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Ut(){return V===null?k:1}let H=s;function vn(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fd}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",be,!1),H===null){const j="webgl2";if(H=vn(j,A),H===null)throw vn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,ct,$e,Rt,je,D,w,Z,me,ve,he,We,Ae,Fe,ut,Me,Be,Ke,et,ze,ft,rt,Ct,X;function Ce(){ht=new VM(H),ht.init(),rt=new TT(H,ht),ct=new FM(H,ht,e,rt),$e=new ET(H,ht),ct.reverseDepthBuffer&&v&&$e.buffers.depth.setReversed(!0),Rt=new XM(H),je=new uT,D=new MT(H,ht,$e,je,ct,rt,Rt),w=new kM(P),Z=new HM(P),me=new Qy(H),Ct=new IM(H,me),ve=new GM(H,me,Rt,Ct),he=new qM(H,ve,me,Rt),et=new jM(H,ct,D),Me=new OM(je),We=new lT(P,w,Z,ht,ct,Ct,Me),Ae=new LT(P,je),Fe=new fT,ut=new vT(ht),Ke=new UM(P,w,Z,$e,he,S,p),Be=new yT(P,he,ct),X=new DT(H,Rt,ct,$e),ze=new NM(H,ht,Rt),ft=new WM(H,ht,Rt),Rt.programs=We.programs,P.capabilities=ct,P.extensions=ht,P.properties=je,P.renderLists=Fe,P.shadowMap=Be,P.state=$e,P.info=Rt}Ce();const ae=new PT(P,H);this.xr=ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(ne,ue,!1))},this.getSize=function(A){return A.set(ne,ue)},this.setSize=function(A,j,te=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,ue=j,t.width=Math.floor(A*k),t.height=Math.floor(j*k),te===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(ne*k,ue*k).floor()},this.setDrawingBufferSize=function(A,j,te){ne=A,ue=j,k=te,t.width=Math.floor(A*te),t.height=Math.floor(j*te),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,j,te,re){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,j,te,re),$e.viewport(O.copy(N).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,j,te,re){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,j,te,re),$e.scissor(J.copy(ie).multiplyScalar(k).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){$e.setScissorTest(De=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,j=!0,te=!0){let re=0;if(A){let G=!1;if(V!==null){const Ee=V.texture.format;G=Ee===vd||Ee===gd||Ee===md}if(G){const Ee=V.texture.type,Re=Ee===Xi||Ee===ts||Ee===$o||Ee===Qs||Ee===hd||Ee===pd,Ie=Ke.getClearColor(),Oe=Ke.getClearAlpha(),tt=Ie.r,nt=Ie.g,qe=Ie.b;Re?(E[0]=tt,E[1]=nt,E[2]=qe,E[3]=Oe,H.clearBufferuiv(H.COLOR,0,E)):(T[0]=tt,T[1]=nt,T[2]=qe,T[3]=Oe,H.clearBufferiv(H.COLOR,0,T))}else re|=H.COLOR_BUFFER_BIT}j&&(re|=H.DEPTH_BUFFER_BIT),te&&(re|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ke.dispose(),Fe.dispose(),ut.dispose(),je.dispose(),w.dispose(),Z.dispose(),he.dispose(),Ct.dispose(),X.dispose(),We.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ss),ae.removeEventListener("sessionend",$i),Mi.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const A=Rt.autoReset,j=Be.enabled,te=Be.autoUpdate,re=Be.needsUpdate,G=Be.type;Ce(),Rt.autoReset=A,Be.enabled=j,Be.autoUpdate=te,Be.needsUpdate=re,Be.type=G}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const j=A.target;j.removeEventListener("dispose",st),Nt(j)}function Nt(A){Kt(A),je.remove(A)}function Kt(A){const j=je.get(A).programs;j!==void 0&&(j.forEach(function(te){We.releaseProgram(te)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,te,re,G,Ee){j===null&&(j=Pt);const Re=G.isMesh&&G.matrixWorld.determinant()<0,Ie=oa(A,j,te,re,G);$e.setMaterial(re,Re);let Oe=te.index,tt=1;if(re.wireframe===!0){if(Oe=ve.getWireframeAttribute(te),Oe===void 0)return;tt=2}const nt=te.drawRange,qe=te.attributes.position;let ot=nt.start*tt,Et=(nt.start+nt.count)*tt;Ee!==null&&(ot=Math.max(ot,Ee.start*tt),Et=Math.min(Et,(Ee.start+Ee.count)*tt)),Oe!==null?(ot=Math.max(ot,0),Et=Math.min(Et,Oe.count)):qe!=null&&(ot=Math.max(ot,0),Et=Math.min(Et,qe.count));const Mt=Et-ot;if(Mt<0||Mt===1/0)return;Ct.setup(G,re,Ie,te,Oe);let kt,_t=ze;if(Oe!==null&&(kt=me.get(Oe),_t=ft,_t.setIndex(kt)),G.isMesh)re.wireframe===!0?($e.setLineWidth(re.wireframeLinewidth*Ut()),_t.setMode(H.LINES)):_t.setMode(H.TRIANGLES);else if(G.isLine){let Ye=re.linewidth;Ye===void 0&&(Ye=1),$e.setLineWidth(Ye*Ut()),G.isLineSegments?_t.setMode(H.LINES):G.isLineLoop?_t.setMode(H.LINE_LOOP):_t.setMode(H.LINE_STRIP)}else G.isPoints?_t.setMode(H.POINTS):G.isSprite&&_t.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)_t.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))_t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ye=G._multiDrawStarts,Wt=G._multiDrawCounts,gt=G._multiDrawCount,on=Oe?me.get(Oe).bytesPerElement:1,Qn=je.get(re).currentProgram.getUniforms();for(let xn=0;xn<gt;xn++)Qn.setValue(H,"_gl_DrawID",xn),_t.render(Ye[xn]/on,Wt[xn])}else if(G.isInstancedMesh)_t.renderInstances(ot,Mt,G.count);else if(te.isInstancedBufferGeometry){const Ye=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Wt=Math.min(te.instanceCount,Ye);_t.renderInstances(ot,Mt,Wt)}else _t.render(ot,Mt)};function xt(A,j,te){A.transparent===!0&&A.side===xi&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,os(A,j,te),A.side=wr,A.needsUpdate=!0,os(A,j,te),A.side=xi):os(A,j,te)}this.compile=function(A,j,te=null){te===null&&(te=A),_=ut.get(te),_.init(j),L.push(_),te.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),A!==te&&A.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights();const re=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Ee=G.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){const Ie=Ee[Re];xt(Ie,te,G),re.add(Ie)}else xt(Ee,te,G),re.add(Ee)}),L.pop(),_=null,re},this.compileAsync=function(A,j,te=null){const re=this.compile(A,j,te);return new Promise(G=>{function Ee(){if(re.forEach(function(Re){je.get(Re).currentProgram.isReady()&&re.delete(Re)}),re.size===0){G(A);return}setTimeout(Ee,10)}ht.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Tn=null;function _n(A){Tn&&Tn(A)}function ss(){Mi.stop()}function $i(){Mi.start()}const Mi=new Jg;Mi.setAnimationLoop(_n),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(A){Tn=A,ae.setAnimationLoop(A),A===null?Mi.stop():Mi.start()},ae.addEventListener("sessionstart",ss),ae.addEventListener("sessionend",$i),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(j),j=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,j,V),_=ut.get(A,L.length),_.init(j),L.push(_),we.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Y.setFromProjectionMatrix(we),ye=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,ye),y=Fe.get(A,b.length),y.init(),b.push(y),ae.enabled===!0&&ae.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&Ti(Ee,j,-1/0,P.sortObjects)}Ti(A,j,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(ce,oe),mt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,mt&&Ke.addToRenderList(y,A),this.info.render.frame++,fe===!0&&Me.beginShadows();const te=_.state.shadowsArray;Be.render(te,A,j),fe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,G=y.transmissive;if(_.setupLights(),j.isArrayCamera){const Ee=j.cameras;if(G.length>0)for(let Re=0,Ie=Ee.length;Re<Ie;Re++){const Oe=Ee[Re];Rr(re,G,A,Oe)}mt&&Ke.render(A);for(let Re=0,Ie=Ee.length;Re<Ie;Re++){const Oe=Ee[Re];Cr(y,A,Oe,Oe.viewport)}}else G.length>0&&Rr(re,G,A,j),mt&&Ke.render(A),Cr(y,A,j);V!==null&&(D.updateMultisampleRenderTarget(V),D.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(P,A,j),Ct.resetDefaultState(),R=-1,C=null,L.pop(),L.length>0?(_=L[L.length-1],fe===!0&&Me.setGlobalState(P.clippingPlanes,_.state.camera)):_=null,b.pop(),b.length>0?y=b[b.length-1]:y=null};function Ti(A,j,te,re){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){re&&Je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Re=he.update(A),Ie=A.material;Ie.visible&&y.push(A,Re,Ie,te,Je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const Re=he.update(A),Ie=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Je.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Je.copy(Re.boundingSphere.center)),Je.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Ie)){const Oe=Re.groups;for(let tt=0,nt=Oe.length;tt<nt;tt++){const qe=Oe[tt],ot=Ie[qe.materialIndex];ot&&ot.visible&&y.push(A,Re,ot,te,Je.z,qe)}}else Ie.visible&&y.push(A,Re,Ie,te,Je.z,null)}}const Ee=A.children;for(let Re=0,Ie=Ee.length;Re<Ie;Re++)Ti(Ee[Re],j,te,re)}function Cr(A,j,te,re){const G=A.opaque,Ee=A.transmissive,Re=A.transparent;_.setupLightsView(te),fe===!0&&Me.setGlobalState(P.clippingPlanes,te),re&&$e.viewport(O.copy(re)),G.length>0&&Yi(G,j,te),Ee.length>0&&Yi(Ee,j,te),Re.length>0&&Yi(Re,j,te),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Rr(A,j,te,re){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[re.id]===void 0&&(_.state.transmissionRenderTarget[re.id]=new ns(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Qo:Xi,minFilter:es,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Ee=_.state.transmissionRenderTarget[re.id],Re=re.viewport||O;Ee.setSize(Re.z,Re.w);const Ie=P.getRenderTarget();P.setRenderTarget(Ee),P.getClearColor(se),le=P.getClearAlpha(),le<1&&P.setClearColor(16777215,.5),P.clear(),mt&&Ke.render(te);const Oe=P.toneMapping;P.toneMapping=Mr;const tt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),_.setupLightsView(re),fe===!0&&Me.setGlobalState(P.clippingPlanes,re),Yi(A,te,re),D.updateMultisampleRenderTarget(Ee),D.updateRenderTargetMipmap(Ee),ht.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let qe=0,ot=j.length;qe<ot;qe++){const Et=j[qe],Mt=Et.object,kt=Et.geometry,_t=Et.material,Ye=Et.group;if(_t.side===xi&&Mt.layers.test(re.layers)){const Wt=_t.side;_t.side=Un,_t.needsUpdate=!0,ra(Mt,te,re,kt,_t,Ye),_t.side=Wt,_t.needsUpdate=!0,nt=!0}}nt===!0&&(D.updateMultisampleRenderTarget(Ee),D.updateRenderTargetMipmap(Ee))}P.setRenderTarget(Ie),P.setClearColor(se,le),tt!==void 0&&(re.viewport=tt),P.toneMapping=Oe}function Yi(A,j,te){const re=j.isScene===!0?j.overrideMaterial:null;for(let G=0,Ee=A.length;G<Ee;G++){const Re=A[G],Ie=Re.object,Oe=Re.geometry,tt=re===null?Re.material:re,nt=Re.group;Ie.layers.test(te.layers)&&ra(Ie,j,te,Oe,tt,nt)}}function ra(A,j,te,re,G,Ee){A.onBeforeRender(P,j,te,re,G,Ee),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(P,j,te,re,A,Ee),G.transparent===!0&&G.side===xi&&G.forceSinglePass===!1?(G.side=Un,G.needsUpdate=!0,P.renderBufferDirect(te,j,re,G,A,Ee),G.side=wr,G.needsUpdate=!0,P.renderBufferDirect(te,j,re,G,A,Ee),G.side=xi):P.renderBufferDirect(te,j,re,G,A,Ee),A.onAfterRender(P,j,te,re,G,Ee)}function os(A,j,te){j.isScene!==!0&&(j=Pt);const re=je.get(A),G=_.state.lights,Ee=_.state.shadowsArray,Re=G.state.version,Ie=We.getParameters(A,G.state,Ee,j,te),Oe=We.getProgramCacheKey(Ie);let tt=re.programs;re.environment=A.isMeshStandardMaterial?j.environment:null,re.fog=j.fog,re.envMap=(A.isMeshStandardMaterial?Z:w).get(A.envMap||re.environment),re.envMapRotation=re.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",st),tt=new Map,re.programs=tt);let nt=tt.get(Oe);if(nt!==void 0){if(re.currentProgram===nt&&re.lightsStateVersion===Re)return hi(A,Ie),nt}else Ie.uniforms=We.getUniforms(A),A.onBeforeCompile(Ie,P),nt=We.acquireProgram(Ie,Oe),tt.set(Oe,nt),re.uniforms=Ie.uniforms;const qe=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=Me.uniform),hi(A,Ie),re.needsLights=Zl(A),re.lightsStateVersion=Re,re.needsLights&&(qe.ambientLightColor.value=G.state.ambient,qe.lightProbe.value=G.state.probe,qe.directionalLights.value=G.state.directional,qe.directionalLightShadows.value=G.state.directionalShadow,qe.spotLights.value=G.state.spot,qe.spotLightShadows.value=G.state.spotShadow,qe.rectAreaLights.value=G.state.rectArea,qe.ltc_1.value=G.state.rectAreaLTC1,qe.ltc_2.value=G.state.rectAreaLTC2,qe.pointLights.value=G.state.point,qe.pointLightShadows.value=G.state.pointShadow,qe.hemisphereLights.value=G.state.hemi,qe.directionalShadowMap.value=G.state.directionalShadowMap,qe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,qe.spotShadowMap.value=G.state.spotShadowMap,qe.spotLightMatrix.value=G.state.spotLightMatrix,qe.spotLightMap.value=G.state.spotLightMap,qe.pointShadowMap.value=G.state.pointShadowMap,qe.pointShadowMatrix.value=G.state.pointShadowMatrix),re.currentProgram=nt,re.uniformsList=null,nt}function sa(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Hl.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function hi(A,j){const te=je.get(A);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.batchingColor=j.batchingColor,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.instancingMorph=j.instancingMorph,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function oa(A,j,te,re,G){j.isScene!==!0&&(j=Pt),D.resetTextureUnits();const Ee=j.fog,Re=re.isMeshStandardMaterial?j.environment:null,Ie=V===null?P.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:eo,Oe=(re.isMeshStandardMaterial?Z:w).get(re.envMap||Re),tt=re.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,nt=!!te.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),qe=!!te.morphAttributes.position,ot=!!te.morphAttributes.normal,Et=!!te.morphAttributes.color;let Mt=Mr;re.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Mt=P.toneMapping);const kt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,_t=kt!==void 0?kt.length:0,Ye=je.get(re),Wt=_.state.lights;if(fe===!0&&(ye===!0||A!==C)){const jt=A===C&&re.id===R;Me.setState(re,A,jt)}let gt=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Wt.state.version||Ye.outputColorSpace!==Ie||G.isBatchedMesh&&Ye.batching===!1||!G.isBatchedMesh&&Ye.batching===!0||G.isBatchedMesh&&Ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ye.instancing===!1||!G.isInstancedMesh&&Ye.instancing===!0||G.isSkinnedMesh&&Ye.skinning===!1||!G.isSkinnedMesh&&Ye.skinning===!0||G.isInstancedMesh&&Ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ye.instancingMorph===!1&&G.morphTexture!==null||Ye.envMap!==Oe||re.fog===!0&&Ye.fog!==Ee||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==nt||Ye.morphTargets!==qe||Ye.morphNormals!==ot||Ye.morphColors!==Et||Ye.toneMapping!==Mt||Ye.morphTargetsCount!==_t)&&(gt=!0):(gt=!0,Ye.__version=re.version);let on=Ye.currentProgram;gt===!0&&(on=os(re,j,G));let Qn=!1,xn=!1,Pr=!1;const bt=on.getUniforms(),yn=Ye.uniforms;if($e.useProgram(on.program)&&(Qn=!0,xn=!0,Pr=!0),re.id!==R&&(R=re.id,xn=!0),Qn||C!==A){$e.buffers.depth.getReversed()?(xe.copy(A.projectionMatrix),cy(xe),fy(xe),bt.setValue(H,"projectionMatrix",xe)):bt.setValue(H,"projectionMatrix",A.projectionMatrix),bt.setValue(H,"viewMatrix",A.matrixWorldInverse);const cn=bt.map.cameraPosition;cn!==void 0&&cn.setValue(H,Ne.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&bt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&bt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,xn=!0,Pr=!0)}if(G.isSkinnedMesh){bt.setOptional(H,G,"bindMatrix"),bt.setOptional(H,G,"bindMatrixInverse");const jt=G.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),bt.setValue(H,"boneTexture",jt.boneTexture,D))}G.isBatchedMesh&&(bt.setOptional(H,G,"batchingTexture"),bt.setValue(H,"batchingTexture",G._matricesTexture,D),bt.setOptional(H,G,"batchingIdTexture"),bt.setValue(H,"batchingIdTexture",G._indirectTexture,D),bt.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&bt.setValue(H,"batchingColorTexture",G._colorsTexture,D));const un=te.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&et.update(G,te,on),(xn||Ye.receiveShadow!==G.receiveShadow)&&(Ye.receiveShadow=G.receiveShadow,bt.setValue(H,"receiveShadow",G.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(yn.envMap.value=Oe,yn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&j.environment!==null&&(yn.envMapIntensity.value=j.environmentIntensity),xn&&(bt.setValue(H,"toneMappingExposure",P.toneMappingExposure),Ye.needsLights&&aa(yn,Pr),Ee&&re.fog===!0&&Ae.refreshFogUniforms(yn,Ee),Ae.refreshMaterialUniforms(yn,re,k,ue,_.state.transmissionRenderTarget[A.id]),Hl.upload(H,sa(Ye),yn,D)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Hl.upload(H,sa(Ye),yn,D),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&bt.setValue(H,"center",G.center),bt.setValue(H,"modelViewMatrix",G.modelViewMatrix),bt.setValue(H,"normalMatrix",G.normalMatrix),bt.setValue(H,"modelMatrix",G.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const jt=re.uniformsGroups;for(let cn=0,br=jt.length;cn<br;cn++){const pt=jt[cn];X.update(pt,on),X.bind(pt,on)}}return on}function aa(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Zl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,j,te){je.get(A.texture).__webglTexture=j,je.get(A.depthTexture).__webglTexture=te;const re=je.get(A);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=te===void 0,re.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const te=je.get(A);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,te=0){V=A,F=j,I=te;let re=!0,G=null,Ee=!1,Re=!1;if(A){const Oe=je.get(A);if(Oe.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(H.FRAMEBUFFER,null),re=!1;else if(Oe.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Oe.__hasExternalTextures)D.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qe=A.depthTexture;if(Oe.__boundDepthTexture!==qe){if(qe!==null&&je.has(qe)&&(A.width!==qe.image.width||A.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Re=!0);const nt=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[j])?G=nt[j][te]:G=nt[j],Ee=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?G=je.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?G=nt[te]:G=nt,O.copy(A.viewport),J.copy(A.scissor),Q=A.scissorTest}else O.copy(N).multiplyScalar(k).floor(),J.copy(ie).multiplyScalar(k).floor(),Q=De;if($e.bindFramebuffer(H.FRAMEBUFFER,G)&&re&&$e.drawBuffers(A,G),$e.viewport(O),$e.scissor(J),$e.setScissorTest(Q),Ee){const Oe=je.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,te)}else if(Re){const Oe=je.get(A.texture),tt=j||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.__webglTexture,te||0,tt)}R=-1},this.readRenderTargetPixels=function(A,j,te,re,G,Ee,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){$e.bindFramebuffer(H.FRAMEBUFFER,Ie);try{const Oe=A.texture,tt=Oe.format,nt=Oe.type;if(!ct.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-re&&te>=0&&te<=A.height-G&&H.readPixels(j,te,re,G,rt.convert(tt),rt.convert(nt),Ee)}finally{const Oe=V!==null?je.get(V).__webglFramebuffer:null;$e.bindFramebuffer(H.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,j,te,re,G,Ee,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){const Oe=A.texture,tt=Oe.format,nt=Oe.type;if(!ct.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-re&&te>=0&&te<=A.height-G){$e.bindFramebuffer(H.FRAMEBUFFER,Ie);const qe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,qe),H.bufferData(H.PIXEL_PACK_BUFFER,Ee.byteLength,H.STREAM_READ),H.readPixels(j,te,re,G,rt.convert(tt),rt.convert(nt),0);const ot=V!==null?je.get(V).__webglFramebuffer:null;$e.bindFramebuffer(H.FRAMEBUFFER,ot);const Et=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await uy(H,Et,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,qe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ee),H.deleteBuffer(qe),H.deleteSync(Et),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,te=0){A.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const re=Math.pow(2,-te),G=Math.floor(A.image.width*re),Ee=Math.floor(A.image.height*re),Re=j!==null?j.x:0,Ie=j!==null?j.y:0;D.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,Re,Ie,G,Ee),$e.unbindTexture()};const la=H.createFramebuffer(),ua=H.createFramebuffer();this.copyTextureToTexture=function(A,j,te=null,re=null,G=0,Ee=null){A.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,A=arguments[1],j=arguments[2],Ee=arguments[3]||0,te=null),Ee===null&&(G!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=G,G=0):Ee=0);let Re,Ie,Oe,tt,nt,qe,ot,Et,Mt;const kt=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(te!==null)Re=te.max.x-te.min.x,Ie=te.max.y-te.min.y,Oe=te.isBox3?te.max.z-te.min.z:1,tt=te.min.x,nt=te.min.y,qe=te.isBox3?te.min.z:0;else{const un=Math.pow(2,-G);Re=Math.floor(kt.width*un),Ie=Math.floor(kt.height*un),A.isDataArrayTexture?Oe=kt.depth:A.isData3DTexture?Oe=Math.floor(kt.depth*un):Oe=1,tt=0,nt=0,qe=0}re!==null?(ot=re.x,Et=re.y,Mt=re.z):(ot=0,Et=0,Mt=0);const _t=rt.convert(j.format),Ye=rt.convert(j.type);let Wt;j.isData3DTexture?(D.setTexture3D(j,0),Wt=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(D.setTexture2DArray(j,0),Wt=H.TEXTURE_2D_ARRAY):(D.setTexture2D(j,0),Wt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const gt=H.getParameter(H.UNPACK_ROW_LENGTH),on=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Qn=H.getParameter(H.UNPACK_SKIP_PIXELS),xn=H.getParameter(H.UNPACK_SKIP_ROWS),Pr=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,kt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,kt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,tt),H.pixelStorei(H.UNPACK_SKIP_ROWS,nt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qe);const bt=A.isDataArrayTexture||A.isData3DTexture,yn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const un=je.get(A),jt=je.get(j),cn=je.get(un.__renderTarget),br=je.get(jt.__renderTarget);$e.bindFramebuffer(H.READ_FRAMEBUFFER,cn.__webglFramebuffer),$e.bindFramebuffer(H.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let pt=0;pt<Oe;pt++)bt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.get(A).__webglTexture,G,qe+pt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.get(j).__webglTexture,Ee,Mt+pt)),H.blitFramebuffer(tt,nt,Re,Ie,ot,Et,Re,Ie,H.DEPTH_BUFFER_BIT,H.NEAREST);$e.bindFramebuffer(H.READ_FRAMEBUFFER,null),$e.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||je.has(A)){const un=je.get(A),jt=je.get(j);$e.bindFramebuffer(H.READ_FRAMEBUFFER,la),$e.bindFramebuffer(H.DRAW_FRAMEBUFFER,ua);for(let cn=0;cn<Oe;cn++)bt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,un.__webglTexture,G,qe+cn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,un.__webglTexture,G),yn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.__webglTexture,Ee,Mt+cn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,jt.__webglTexture,Ee),G!==0?H.blitFramebuffer(tt,nt,Re,Ie,ot,Et,Re,Ie,H.COLOR_BUFFER_BIT,H.NEAREST):yn?H.copyTexSubImage3D(Wt,Ee,ot,Et,Mt+cn,tt,nt,Re,Ie):H.copyTexSubImage2D(Wt,Ee,ot,Et,tt,nt,Re,Ie);$e.bindFramebuffer(H.READ_FRAMEBUFFER,null),$e.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else yn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Wt,Ee,ot,Et,Mt,Re,Ie,Oe,_t,Ye,kt.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(Wt,Ee,ot,Et,Mt,Re,Ie,Oe,_t,kt.data):H.texSubImage3D(Wt,Ee,ot,Et,Mt,Re,Ie,Oe,_t,Ye,kt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ee,ot,Et,Re,Ie,_t,Ye,kt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ee,ot,Et,kt.width,kt.height,_t,kt.data):H.texSubImage2D(H.TEXTURE_2D,Ee,ot,Et,Re,Ie,_t,Ye,kt);H.pixelStorei(H.UNPACK_ROW_LENGTH,gt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,on),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Qn),H.pixelStorei(H.UNPACK_SKIP_ROWS,xn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Pr),Ee===0&&j.generateMipmaps&&H.generateMipmap(Wt),$e.unbindTexture()},this.copyTextureToTexture3D=function(A,j,te=null,re=null,G=0){return A.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,re=arguments[1]||null,A=arguments[2],j=arguments[3],G=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,te,re,G)},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),$e.unbindTexture()},this.resetState=function(){F=0,I=0,V=null,$e.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}class IT extends yd{constructor(e){super(e)}load(e,t,s,a){const l=this,c=new Wy(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(f){try{t(l.parse(f))}catch(p){a?a(p):console.error(p),l.manager.itemError(e)}},s,a)}parse(e){function t(h){const m=new DataView(h),x=32/8*3+32/8*3*3+16/8,v=m.getUint32(80,!0);if(80+32/8+v*x===m.byteLength)return!0;const E=[115,111,108,105,100];for(let T=0;T<5;T++)if(s(E,m,T))return!1;return!0}function s(h,m,x){for(let v=0,S=h.length;v<S;v++)if(h[v]!==m.getUint8(x+v))return!1;return!0}function a(h){const m=new DataView(h),x=m.getUint32(80,!0);let v,S,E,T=!1,y,_,b,L,P;for(let O=0;O<70;O++)m.getUint32(O,!1)==1129270351&&m.getUint8(O+4)==82&&m.getUint8(O+5)==61&&(T=!0,y=new Float32Array(x*3*3),_=m.getUint8(O+6)/255,b=m.getUint8(O+7)/255,L=m.getUint8(O+8)/255,P=m.getUint8(O+9)/255);const z=84,F=12*4+2,I=new ji,V=new Float32Array(x*3*3),R=new Float32Array(x*3*3),C=new St;for(let O=0;O<x;O++){const J=z+O*F,Q=m.getFloat32(J,!0),se=m.getFloat32(J+4,!0),le=m.getFloat32(J+8,!0);if(T){const ne=m.getUint16(J+48,!0);ne&32768?(v=_,S=b,E=L):(v=(ne&31)/31,S=(ne>>5&31)/31,E=(ne>>10&31)/31)}for(let ne=1;ne<=3;ne++){const ue=J+ne*12,k=O*3*3+(ne-1)*3;V[k]=m.getFloat32(ue,!0),V[k+1]=m.getFloat32(ue+4,!0),V[k+2]=m.getFloat32(ue+8,!0),R[k]=Q,R[k+1]=se,R[k+2]=le,T&&(C.setRGB(v,S,E,Vn),y[k]=C.r,y[k+1]=C.g,y[k+2]=C.b)}}return I.setAttribute("position",new Wn(V,3)),I.setAttribute("normal",new Wn(R,3)),T&&(I.setAttribute("color",new Wn(y,3)),I.hasColors=!0,I.alpha=P),I}function l(h){const m=new ji,x=/solid([\s\S]*?)endsolid/g,v=/facet([\s\S]*?)endfacet/g,S=/solid\s(.+)/;let E=0;const T=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+T+T+T,"g"),_=new RegExp("normal"+T+T+T,"g"),b=[],L=[],P=[],z=new K;let F,I=0,V=0,R=0;for(;(F=x.exec(h))!==null;){V=R;const C=F[0],O=(F=S.exec(C))!==null?F[1]:"";for(P.push(O);(F=v.exec(C))!==null;){let se=0,le=0;const ne=F[0];for(;(F=_.exec(ne))!==null;)z.x=parseFloat(F[1]),z.y=parseFloat(F[2]),z.z=parseFloat(F[3]),le++;for(;(F=y.exec(ne))!==null;)b.push(parseFloat(F[1]),parseFloat(F[2]),parseFloat(F[3])),L.push(z.x,z.y,z.z),se++,R++;le!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+E),se!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+E),E++}const J=V,Q=R-V;m.userData.groupNames=P,m.addGroup(J,Q,I),I++}return m.setAttribute("position",new Wi(b,3)),m.setAttribute("normal",new Wi(L,3)),m}function c(h){return typeof h!="string"?new TextDecoder().decode(h):h}function f(h){if(typeof h=="string"){const m=new Uint8Array(h.length);for(let x=0;x<h.length;x++)m[x]=h.charCodeAt(x)&255;return m.buffer||m}else return h}const p=f(e);return t(p)?a(p):l(c(e))}}class NT{constructor(e,t=" .:-=+*#%@",s={}){const a=s.resolution||.15,l=s.scale||1,c=s.color||!1,f=s.alpha||!1,p=s.block||!1,h=s.invert||!1,m=s.strResolution||"low";let x,v;const S=document.createElement("div");S.style.cursor="default";const E=document.createElement("table");S.appendChild(E);let T,y,_;this.setSize=function(se,le){x=se,v=le,e.setSize(se,le),b()},this.render=function(se,le){e.render(se,le),Q(E)},this.domElement=S;function b(){T=Math.floor(x*a),y=Math.floor(v*a),I.width=T,I.height=y,_=e.domElement,_.style.backgroundColor&&(E.rows[0].cells[0].style.backgroundColor=_.style.backgroundColor,E.rows[0].cells[0].style.color=_.style.color),E.cellSpacing=0,E.cellPadding=0;const se=E.style;se.whiteSpace="pre",se.margin="0px",se.padding="0px",se.letterSpacing=J+"px",se.fontFamily=z,se.fontSize=C+"px",se.lineHeight=O+"px",se.textAlign="left",se.textDecoration="none"}const L=" .,:;i1tfLCG08@".split(""),P=" CGO08@".split(""),z="courier new, monospace",F=e.domElement,I=document.createElement("canvas");if(!I.getContext)return;const V=I.getContext("2d");if(!V.getImageData)return;let R=c?P:L;t&&(R=t);const C=2/a*l,O=2/a*l;let J=0;if(m=="low")switch(l){case 1:J=-1;break;case 2:case 3:J=-2.1;break;case 4:J=-3.1;break;case 5:J=-4.15;break}if(m=="medium")switch(l){case 1:J=0;break;case 2:J=-1;break;case 3:J=-1.04;break;case 4:case 5:J=-2.1;break}if(m=="high")switch(l){case 1:case 2:J=0;break;case 3:case 4:case 5:J=-1;break}function Q(se){V.clearRect(0,0,T,y),V.drawImage(F,0,0,T,y);const le=V.getImageData(0,0,T,y).data;let ne="";for(let ue=0;ue<y;ue+=2){for(let k=0;k<T;k++){const ce=(ue*T+k)*4,oe=le[ce],N=le[ce+1],ie=le[ce+2],De=le[ce+3];let Y,fe;fe=(.3*oe+.59*N+.11*ie)/255,De==0&&(fe=1),Y=Math.floor((1-fe)*(R.length-1)),h&&(Y=R.length-Y-1);let ye=R[Y];(ye===void 0||ye==" ")&&(ye="&nbsp;"),c?ne+="<span style='color:rgb("+oe+","+N+","+ie+");"+(p?"background-color:rgb("+oe+","+N+","+ie+");":"")+(f?"opacity:"+De/255+";":"")+"'>"+ye+"</span>":ne+=ye}ne+="<br/>"}se.innerHTML=`<tr><td style="display:block;width:${x}px;height:${v}px;overflow:hidden">${ne}</td></tr>`}}}const FT=()=>{const r=de.useRef();return de.useEffect(()=>{const e=r.current,t=new Ky,s=new ci,a=new Ny;a.background=new St(0,0,0,0);const l=new Nm(16777215,1,0,0);l.position.set(100,100,400),a.add(l);const c=new Nm(16777215,.5);c.position.set(-500,100,-400),a.add(c);const f=new IT,p=new ky;p.flatShading=!0,p.side=xi;const h={width:window.innerWidth,height:window.innerHeight},m=new Gn(45,h.width/h.height,.1,2e3),x=new UT;let v,S=" .:-+*=%@#";const E={amount:.205};let T="transparent",y="rgba(184, 255, 71, 1)";function _(){v=new NT(x,S,{invert:!0,resolution:E.amount}),v.setSize(h.width,h.height),v.domElement.style.color=y,v.domElement.style.backgroundColor=T,v.domElement.style.position="fixed",v.domElement.style.top="0",v.domElement.style.left="0",v.domElement.style.width="100%",v.domElement.style.height="100%",v.domElement.style.zIndex="-5",v.domElement.style.pointerEvents="none"}_(),e.appendChild(v.domElement),f.load("./models/main_page_model.stl",function(L){s.material=p,s.geometry=L;var P=new ci(L,p);s.position.copy(P.position),L.computeVertexNormals(),s.geometry.center(),s.rotation.x=-90*Math.PI/180,s.geometry.computeBoundingBox();var z=s.geometry.boundingBox;s.position.y=(z.max.z-z.min.z)/5,m.position.x=z.max.x*1.5,m.position.y=z.max.y,m.position.z=z.max.z,a.add(s),m.lookAt(s.position);function F(){{const R=t.getElapsedTime();s.rotation.z=R/3}I(),window.requestAnimationFrame(F)}function I(){v.render(a,m)}F();const V=()=>{document.body.scrollHeight-window.innerHeight;const R=Math.min(5,window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*10),C=[185,255,71],O=[0,0,0],J=C.map((le,ne)=>Math.round(le+R*(O[ne]-le)));y=`rgba(${J[0]}, ${J[1]}, ${J[2]}, 1)`,v.domElement.style.color=y;const se=document.querySelector(".main_front_text");se.style.opacity=1-R};window.addEventListener("scroll",V)}),window.addEventListener("resize",b);function b(){h.width=window.innerWidth,h.height=window.innerHeight,m.aspect=h.width/h.height,m.updateProjectionMatrix(),x.setSize(h.width,h.height),v.setSize(h.width,h.height)}return()=>{window.removeEventListener("resize",b),e.removeChild(v.domElement)}},[]),Ve.jsx("div",{ref:r,style:{width:"100%"}})};function Xs(){return Xs=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Xs.apply(this,arguments)}function OT(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,rd(r,e)}function rd(r,e){return rd=Object.setPrototypeOf||function(s,a){return s.__proto__=a,s},rd(r,e)}var Ed=function(r){OT(e,r);function e(){var s;return s=r.call(this)||this,s.state={columns:[],childRefs:[],hasDistributed:!1},s}var t=e.prototype;return t.componentDidUpdate=function(){!this.state.hasDistributed&&!this.props.sequential&&this.distributeChildren()},e.getDerivedStateFromProps=function(a,l){var c=a.children,f=a.columnsCount;return l&&c===l.children?null:Xs({},e.getEqualCountColumns(c,f),{children:c,hasDistributed:!1})},t.distributeChildren=function(){var a=this,l=this.props,c=l.children,f=l.columnsCount,p=Array(f).fill(0),h=this.state.childRefs.every(function(v){return v.current.getBoundingClientRect().height});if(h){var m=Array.from({length:f},function(){return[]}),x=0;Dn.Children.forEach(c,function(v){if(v&&Dn.isValidElement(v)){var S=a.state.childRefs[x].current.getBoundingClientRect().height,E=p.indexOf(Math.min.apply(Math,p));p[E]+=S,m[E].push(v),x++}}),this.setState(function(v){return Xs({},v,{columns:m,hasDistributed:!0})})}},e.getEqualCountColumns=function(a,l){var c=Array.from({length:l},function(){return[]}),f=0,p=[];return Dn.Children.forEach(a,function(h){if(h&&Dn.isValidElement(h)){var m=Dn.createRef();p.push(m),c[f%l].push(Dn.createElement("div",{style:{display:"flex",justifyContent:"stretch"},key:f,ref:m},h)),f++}}),{columns:c,childRefs:p}},t.renderColumns=function(){var a=this.props,l=a.gutter,c=a.itemTag,f=a.itemStyle;return this.state.columns.map(function(p,h){return Dn.createElement(c,{key:h,style:Xs({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:l},f)},p.map(function(m){return m}))})},t.render=function(){var a=this.props,l=a.gutter,c=a.className,f=a.style,p=a.containerTag;return Dn.createElement(p,{style:Xs({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:l},f),className:c},this.renderColumns())},e}(Dn.Component);Ed.propTypes={};Ed.defaultProps={columnsCount:3,gutter:"0",className:null,style:{},containerTag:"div",itemTag:"div",itemStyle:{},sequential:!1};var kT=1,rv=typeof window<"u"?de.useLayoutEffect:de.useEffect,BT=function(){var e=de.useState(!1),t=e[0],s=e[1];return rv(function(){s(!0)},[]),t},zT=function(){var e=BT(),t=de.useState(typeof window<"u"?window.innerWidth:0),s=t[0],a=t[1],l=de.useCallback(function(){e&&a(window.innerWidth)},[e]);return rv(function(){if(e)return window.addEventListener("resize",l),l(),function(){return window.removeEventListener("resize",l)}},[e,l]),s},sv=function(e){var t=e.columnsCountBreakPoints,s=t===void 0?{350:1,750:2,900:3}:t,a=e.children,l=e.className,c=l===void 0?null:l,f=e.style,p=f===void 0?null:f,h=zT(),m=de.useMemo(function(){var x=Object.keys(s).sort(function(S,E){return S-E}),v=x.length>0?s[x[0]]:kT;return x.forEach(function(S){S<h&&(v=s[S])}),v},[h,s]);return Dn.createElement("div",{className:c,style:p},Dn.Children.map(a,function(x,v){return Dn.cloneElement(x,{key:v,columnsCount:m})}))};sv.propTypes={};const HT=[{src:"https://picsum.photos/1000/1000?random=2",description:"Tokyo, 2019"},{src:"https://picsum.photos/1000/800?random=3",description:"Game Design"},{src:"https://picsum.photos/900/1200?random=4",description:"VR Project"},{src:"https://picsum.photos/1100/950?random=5",description:"Amsterdam, 2023"},{src:"https://picsum.photos/800/600?random=6",description:"Unity Demo"},{src:"https://picsum.photos/1000/1400?random=7",description:"AI Research"},{src:"https://picsum.photos/1100/600?random=8",description:"Paris, 2022"},{src:"https://picsum.photos/1000/1000?random=9",description:"Web Design"},{src:"https://picsum.photos/1000/800?random=10",description:"Mobile App"},{src:"https://picsum.photos/900/1200?random=11",description:"London, 2021"},{src:"https://picsum.photos/1100/950?random=12",description:"3D Model"},{src:"https://picsum.photos/800/600?random=13",description:"UI/UX Study"},{src:"https://picsum.photos/1000/1400?random=14",description:"Berlin, 2020"},{src:"https://picsum.photos/1100/600?random=15",description:"Game Jam"},{src:"https://picsum.photos/1000/1000?random=16",description:"AR Demo"},{src:"https://picsum.photos/1000/800?random=17",description:"Rome, 2023"},{src:"https://picsum.photos/900/1200?random=18",description:"Portfolio"},{src:"https://picsum.photos/1100/950?random=19",description:"Prototype"},{src:"https://picsum.photos/800/600?random=20",description:"Madrid, 2022"},{src:"https://picsum.photos/1000/1400?random=21",description:"ML Model"},{src:"https://picsum.photos/1100/600?random=22",description:"Interface"},{src:"https://picsum.photos/1000/1000?random=23",description:"Oslo, 2021"},{src:"https://picsum.photos/1000/800?random=24",description:"Game Art"},{src:"https://picsum.photos/900/1200?random=25",description:"Blender"},{src:"https://picsum.photos/1100/950?random=26",description:"Vienna, 2020"},{src:"https://picsum.photos/800/600?random=27",description:"Project X"},{src:"https://picsum.photos/1000/1400?random=28",description:"Research"},{src:"https://picsum.photos/1100/600?random=29",description:"Athens, 2019"}];class VT extends Dn.Component{constructor(){super(...arguments);Xp(this,"handleResize",()=>{this.forceUpdate()})}componentDidMount(){window.addEventListener("resize",this.handleResize)}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}render(){return Ve.jsx("div",{className:"gallery-container",children:Ve.jsx(sv,{columnsCountBreakPoints:{350:1,750:2,900:4},children:Ve.jsx(Ed,{children:HT.map((t,s)=>Ve.jsxs("div",{className:"image-gallery-item",children:[Ve.jsx("img",{src:t.src,className:"img"}),Ve.jsx("div",{className:"tooltip",children:t.description})]},s))})})})}}function GT(){return Ve.jsxs("div",{children:[Ve.jsx("header",{className:"app-header",children:Ve.jsx("div",{className:"main_front_text",children:Ve.jsx("span",{children:"('Portfolio')"})})}),Ve.jsx("section",{className:"gallery-container",children:Ve.jsx(VT,{})}),Ve.jsx(FT,{}),Ve.jsx("h1",{className:"bottom-website-text",children:Ve.jsx("span",{children:"Panayiotis Evangelou"})})]})}const WT=()=>{const r=["AI","Blender","Substance Designer","Game Design","Photoshop","UX","React","Machine Learning","Deep Learning","Homework"];return Ve.jsx("div",{className:"carousel-container",children:Ve.jsxs("div",{className:"carousel",children:[r.map((e,t)=>Ve.jsx("h3",{className:"carousel-item",children:e},t)),r.map((e,t)=>Ve.jsx("h3",{className:"carousel-item",children:e},t+r.length))]})})};function XT(){return Ve.jsxs("div",{children:[Ve.jsxs("section",{className:"header",children:[Ve.jsx("img",{src:"/public/images/hello_my_name_is.png",className:"hello-my-name-is-sticker"}),Ve.jsx("div",{className:"main-about-text main-text",children:Ve.jsx("span",{children:"Panagiotis Evangelou"})})]}),Ve.jsx("hr",{className:"divider"}),Ve.jsxs("section",{className:"about-background-header",children:[Ve.jsx("h2",{children:"SKILLS"}),Ve.jsx(WT,{})]}),Ve.jsx("hr",{className:"divider"}),Ve.jsxs("section",{className:"about-background-header",children:[Ve.jsx("h2",{children:"ABOUT"}),Ve.jsx("h3",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar venenatis diam, id venenatis eros condimentum ac. Sed in nunc vulputate, laoreet nisi pretium, laoreet risus. Aenean at neque sit amet quam mollis ornare. Etiam facilisis purus eget finibus vestibulum. In ac luctus justo, nec sagittis turpis. Curabitur vitae gravida elit. Pellentesque cursus nisi nec odio blandit, et efficitur libero varius. Duis faucibus tortor in nibh eleifend aliquam. Aenean tristique ut eros in maximus."})]}),Ve.jsx("hr",{className:"divider"}),Ve.jsxs("section",{className:"about-background-header",children:[Ve.jsx("h2",{children:"EDUCATION"}),Ve.jsx("h3",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar venenatis diam, id venenatis eros condimentum ac. Sed in nunc vulputate, laoreet nisi pretium, laoreet risus. Aenean at neque sit amet quam mollis ornare. Etiam facilisis purus eget finibus vestibulum. In ac luctus justo, nec sagittis turpis. Curabitur vitae gravida elit. Pellentesque cursus nisi nec odio blandit, et efficitur libero varius. Duis faucibus tortor in nibh eleifend aliquam. Aenean tristique ut eros in maximus."})]}),Ve.jsx("hr",{className:"divider"}),Ve.jsxs("section",{className:"about-background-header",children:[Ve.jsx("h2",{children:"CONTACT"}),Ve.jsx("h3",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar venenatis diam, id venenatis eros condimentum ac. Sed in nunc vulputate, laoreet nisi pretium, laoreet risus. Aenean at neque sit amet quam mollis ornare. Etiam facilisis purus eget finibus vestibulum. In ac luctus justo, nec sagittis turpis. Curabitur vitae gravida elit. Pellentesque cursus nisi nec odio blandit, et efficitur libero varius. Duis faucibus tortor in nibh eleifend aliquam. Aenean tristique ut eros in maximus."})]}),Ve.jsx("hr",{className:"divider"}),Ve.jsx("h1",{className:"bottom-website-text",children:Ve.jsx("span",{children:"Panagiotis Evangelou"})})]})}function jT(){return Ve.jsx(Eg,{children:Ve.jsxs("div",{children:[Ve.jsx(xx,{}),Ve.jsxs(z0,{children:[Ve.jsx(mf,{path:"/",element:Ve.jsx(GT,{})}),Ve.jsx(mf,{path:"/about",element:Ve.jsx(XT,{})})]})]})})}Y_.createRoot(document.getElementById("root")).render(Ve.jsx(Dn.StrictMode,{children:Ve.jsx(Eg,{children:Ve.jsx(jT,{})})}));
