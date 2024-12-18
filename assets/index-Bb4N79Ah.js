var k_=Object.defineProperty;var B_=(r,e,t)=>e in r?k_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var qp=(r,e,t)=>B_(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function cg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var bc={exports:{}},ko={},Lc={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function z_(){if($p)return ht;$p=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(N,re,Ue){this.props=N,this.context=re,this.refs=T,this.updater=Ue||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,re){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,re,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=y.prototype;function b(N,re,Ue){this.props=N,this.context=re,this.refs=T,this.updater=Ue||S}var L=b.prototype=new _;L.constructor=b,E(L,y.prototype),L.isPureReactComponent=!0;var P=Array.isArray,z=Object.prototype.hasOwnProperty,F={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function V(N,re,Ue){var Y,de={},Se=null,ye=null;if(re!=null)for(Y in re.ref!==void 0&&(ye=re.ref),re.key!==void 0&&(Se=""+re.key),re)z.call(re,Y)&&!I.hasOwnProperty(Y)&&(de[Y]=re[Y]);var Ae=arguments.length-2;if(Ae===1)de.children=Ue;else if(1<Ae){for(var Fe=Array(Ae),et=0;et<Ae;et++)Fe[et]=arguments[et+2];de.children=Fe}if(N&&N.defaultProps)for(Y in Ae=N.defaultProps,Ae)de[Y]===void 0&&(de[Y]=Ae[Y]);return{$$typeof:r,type:N,key:Se,ref:ye,props:de,_owner:F.current}}function R(N,re){return{$$typeof:r,type:N.type,key:re,ref:N.ref,props:N.props,_owner:N._owner}}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function O(N){var re={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ue){return re[Ue]})}var ee=/\/+/g;function J(N,re){return typeof N=="object"&&N!==null&&N.key!=null?O(""+N.key):re.toString(36)}function oe(N,re,Ue,Y,de){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var ye=!1;if(N===null)ye=!0;else switch(Se){case"string":case"number":ye=!0;break;case"object":switch(N.$$typeof){case r:case e:ye=!0}}if(ye)return ye=N,de=de(ye),N=Y===""?"."+J(ye,0):Y,P(de)?(Ue="",N!=null&&(Ue=N.replace(ee,"$&/")+"/"),oe(de,re,Ue,"",function(et){return et})):de!=null&&(C(de)&&(de=R(de,Ue+(!de.key||ye&&ye.key===de.key?"":(""+de.key).replace(ee,"$&/")+"/")+N)),re.push(de)),1;if(ye=0,Y=Y===""?".":Y+":",P(N))for(var Ae=0;Ae<N.length;Ae++){Se=N[Ae];var Fe=Y+J(Se,Ae);ye+=oe(Se,re,Ue,Fe,de)}else if(Fe=v(N),typeof Fe=="function")for(N=Fe.call(N),Ae=0;!(Se=N.next()).done;)Se=Se.value,Fe=Y+J(Se,Ae++),ye+=oe(Se,re,Ue,Fe,de);else if(Se==="object")throw re=String(N),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ye}function ue(N,re,Ue){if(N==null)return N;var Y=[],de=0;return oe(N,Y,"","",function(Se){return re.call(Ue,Se,de++)}),Y}function ie(N){if(N._status===-1){var re=N._result;re=re(),re.then(function(Ue){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ue)},function(Ue){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ue)}),N._status===-1&&(N._status=0,N._result=re)}if(N._status===1)return N._result.default;throw N._result}var ce={current:null},k={transition:null},fe={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:k,ReactCurrentOwner:F};function ae(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:ue,forEach:function(N,re,Ue){ue(N,function(){re.apply(this,arguments)},Ue)},count:function(N){var re=0;return ue(N,function(){re++}),re},toArray:function(N){return ue(N,function(re){return re})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ht.Component=y,ht.Fragment=t,ht.Profiler=a,ht.PureComponent=b,ht.StrictMode=s,ht.Suspense=p,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,ht.act=ae,ht.cloneElement=function(N,re,Ue){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Y=E({},N.props),de=N.key,Se=N.ref,ye=N._owner;if(re!=null){if(re.ref!==void 0&&(Se=re.ref,ye=F.current),re.key!==void 0&&(de=""+re.key),N.type&&N.type.defaultProps)var Ae=N.type.defaultProps;for(Fe in re)z.call(re,Fe)&&!I.hasOwnProperty(Fe)&&(Y[Fe]=re[Fe]===void 0&&Ae!==void 0?Ae[Fe]:re[Fe])}var Fe=arguments.length-2;if(Fe===1)Y.children=Ue;else if(1<Fe){Ae=Array(Fe);for(var et=0;et<Fe;et++)Ae[et]=arguments[et+2];Y.children=Ae}return{$$typeof:r,type:N.type,key:de,ref:Se,props:Y,_owner:ye}},ht.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},ht.createElement=V,ht.createFactory=function(N){var re=V.bind(null,N);return re.type=N,re},ht.createRef=function(){return{current:null}},ht.forwardRef=function(N){return{$$typeof:f,render:N}},ht.isValidElement=C,ht.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:ie}},ht.memo=function(N,re){return{$$typeof:h,type:N,compare:re===void 0?null:re}},ht.startTransition=function(N){var re=k.transition;k.transition={};try{N()}finally{k.transition=re}},ht.unstable_act=ae,ht.useCallback=function(N,re){return ce.current.useCallback(N,re)},ht.useContext=function(N){return ce.current.useContext(N)},ht.useDebugValue=function(){},ht.useDeferredValue=function(N){return ce.current.useDeferredValue(N)},ht.useEffect=function(N,re){return ce.current.useEffect(N,re)},ht.useId=function(){return ce.current.useId()},ht.useImperativeHandle=function(N,re,Ue){return ce.current.useImperativeHandle(N,re,Ue)},ht.useInsertionEffect=function(N,re){return ce.current.useInsertionEffect(N,re)},ht.useLayoutEffect=function(N,re){return ce.current.useLayoutEffect(N,re)},ht.useMemo=function(N,re){return ce.current.useMemo(N,re)},ht.useReducer=function(N,re,Ue){return ce.current.useReducer(N,re,Ue)},ht.useRef=function(N){return ce.current.useRef(N)},ht.useState=function(N){return ce.current.useState(N)},ht.useSyncExternalStore=function(N,re,Ue){return ce.current.useSyncExternalStore(N,re,Ue)},ht.useTransition=function(){return ce.current.useTransition()},ht.version="18.3.1",ht}var Yp;function ad(){return Yp||(Yp=1,Lc.exports=z_()),Lc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function H_(){if(Kp)return ko;Kp=1;var r=ad(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,h){var m,x={},v=null,S=null;h!==void 0&&(v=""+h),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(S=p.ref);for(m in p)s.call(p,m)&&!l.hasOwnProperty(m)&&(x[m]=p[m]);if(f&&f.defaultProps)for(m in p=f.defaultProps,p)x[m]===void 0&&(x[m]=p[m]);return{$$typeof:e,type:f,key:v,ref:S,props:x,_owner:a.current}}return ko.Fragment=t,ko.jsx=c,ko.jsxs=c,ko}var Zp;function V_(){return Zp||(Zp=1,bc.exports=H_()),bc.exports}var Ge=V_(),he=ad();const Un=cg(he);var fl={},Dc={exports:{}},Ln={},Uc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function G_(){return Qp||(Qp=1,function(r){function e(k,fe){var ae=k.length;k.push(fe);e:for(;0<ae;){var N=ae-1>>>1,re=k[N];if(0<a(re,fe))k[N]=fe,k[ae]=re,ae=N;else break e}}function t(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var fe=k[0],ae=k.pop();if(ae!==fe){k[0]=ae;e:for(var N=0,re=k.length,Ue=re>>>1;N<Ue;){var Y=2*(N+1)-1,de=k[Y],Se=Y+1,ye=k[Se];if(0>a(de,ae))Se<re&&0>a(ye,de)?(k[N]=ye,k[Se]=ae,N=Se):(k[N]=de,k[Y]=ae,N=Y);else if(Se<re&&0>a(ye,ae))k[N]=ye,k[Se]=ae,N=Se;else break e}}return fe}function a(k,fe){var ae=k.sortIndex-fe.sortIndex;return ae!==0?ae:k.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],h=[],m=1,x=null,v=3,S=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(k){for(var fe=t(h);fe!==null;){if(fe.callback===null)s(h);else if(fe.startTime<=k)s(h),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=t(h)}}function P(k){if(T=!1,L(k),!E)if(t(p)!==null)E=!0,ie(z);else{var fe=t(h);fe!==null&&ce(P,fe.startTime-k)}}function z(k,fe){E=!1,T&&(T=!1,_(V),V=-1),S=!0;var ae=v;try{for(L(fe),x=t(p);x!==null&&(!(x.expirationTime>fe)||k&&!O());){var N=x.callback;if(typeof N=="function"){x.callback=null,v=x.priorityLevel;var re=N(x.expirationTime<=fe);fe=r.unstable_now(),typeof re=="function"?x.callback=re:x===t(p)&&s(p),L(fe)}else s(p);x=t(p)}if(x!==null)var Ue=!0;else{var Y=t(h);Y!==null&&ce(P,Y.startTime-fe),Ue=!1}return Ue}finally{x=null,v=ae,S=!1}}var F=!1,I=null,V=-1,R=5,C=-1;function O(){return!(r.unstable_now()-C<R)}function ee(){if(I!==null){var k=r.unstable_now();C=k;var fe=!0;try{fe=I(!0,k)}finally{fe?J():(F=!1,I=null)}}else F=!1}var J;if(typeof b=="function")J=function(){b(ee)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ue=oe.port2;oe.port1.onmessage=ee,J=function(){ue.postMessage(null)}}else J=function(){y(ee,0)};function ie(k){I=k,F||(F=!0,J())}function ce(k,fe){V=y(function(){k(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,ie(z))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(k){switch(v){case 1:case 2:case 3:var fe=3;break;default:fe=v}var ae=v;v=fe;try{return k()}finally{v=ae}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,fe){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ae=v;v=k;try{return fe()}finally{v=ae}},r.unstable_scheduleCallback=function(k,fe,ae){var N=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?N+ae:N):ae=N,k){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ae+re,k={id:m++,callback:fe,priorityLevel:k,startTime:ae,expirationTime:re,sortIndex:-1},ae>N?(k.sortIndex=ae,e(h,k),t(p)===null&&k===t(h)&&(T?(_(V),V=-1):T=!0,ce(P,ae-N))):(k.sortIndex=re,e(p,k),E||S||(E=!0,ie(z))),k},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(k){var fe=v;return function(){var ae=v;v=fe;try{return k.apply(this,arguments)}finally{v=ae}}}}(Ic)),Ic}var Jp;function W_(){return Jp||(Jp=1,Uc.exports=G_()),Uc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function X_(){if(em)return Ln;em=1;var r=ad(),e=W_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},x={};function v(n){return p.call(x,n)?!0:p.call(m,n)?!1:h.test(n)?x[n]=!0:(m[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,o,u,d,g,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,b);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,b);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,b);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,u)&&(o=null),u||d===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),F=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),O=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),k=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,N;function re(n){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Ue=!1;function Y(n,i){if(!n||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var u=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){u=te}n.call(i.prototype)}else{try{throw Error()}catch(te){u=te}n()}}catch(te){if(te&&u&&typeof te.stack=="string"){for(var d=te.stack.split(`
`),g=u.stack.split(`
`),M=d.length-1,U=g.length-1;1<=M&&0<=U&&d[M]!==g[U];)U--;for(;1<=M&&0<=U;M--,U--)if(d[M]!==g[U]){if(M!==1||U!==1)do if(M--,U--,0>U||d[M]!==g[U]){var B=`
`+d[M].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=M&&0<=U);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?re(n):""}function de(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case F:return"Portal";case R:return"Profiler";case V:return"StrictMode";case J:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ee:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(n){var i=Fe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,g.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function bt(n){n._valueTracker||(n._valueTracker=et(n))}function gt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Fe(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function It(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function H(n,i){var o=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function _n(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ft(n,i){pt(n,i);var o=Ae(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Pt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Pt(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ye(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Pt(n,i,o){(i!=="number"||It(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var qe=Array.isArray;function D(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function w(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(qe(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ae(o)}}function ge(n,i){var o=Ae(i.value),u=Ae(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Oe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ct(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Te[i]=Te[n]})});function Ze(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Te.hasOwnProperty(n)&&Te[n]?(""+i).trim():i+"px"}function tt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Ze(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var He=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(n,i){if(i){if(He[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function st(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,le=null,me=null;function De(n){if(n=Mo(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Aa(i),Re(n.stateNode,n.type,i))}}function Le(n){le?me?me.push(n):me=[n]:le=n}function ot(){if(le){var n=le,i=me;if(me=le=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function Ft(n,i){return n(i)}function Zt(){}var yt=!1;function wn(n,i,o){if(yt)return n(i,o);yt=!0;try{return Ft(n,i,o)}finally{yt=!1,(le!==null||me!==null)&&(Zt(),ot())}}function xn(n,i){var o=n.stateNode;if(o===null)return null;var u=Aa(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var os=!1;if(f)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){os=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{os=!1}function Ti(n,i,o,u,d,g,M,U,B){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(xe){this.onError(xe)}}var wi=!1,Rr=null,Pr=!1,Ki=null,sa={onError:function(n){wi=!0,Rr=n}};function as(n,i,o,u,d,g,M,U,B){wi=!1,Rr=null,Ti.apply(sa,arguments)}function oa(n,i,o,u,d,g,M,U,B){if(as.apply(this,arguments),wi){if(wi){var te=Rr;wi=!1,Rr=null}else throw Error(t(198));Pr||(Pr=!0,Ki=te)}}function pi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function aa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function la(n){if(pi(n)!==n)throw Error(t(188))}function Jl(n){var i=n.alternate;if(!i){if(i=pi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var g=d.alternate;if(g===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===o)return la(d),n;if(g===u)return la(d),i;g=g.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=g;else{for(var M=!1,U=d.child;U;){if(U===o){M=!0,o=d,u=g;break}if(U===u){M=!0,u=d,o=g;break}U=U.sibling}if(!M){for(U=g.child;U;){if(U===o){M=!0,o=g,u=d;break}if(U===u){M=!0,u=g,o=d;break}U=U.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ua(n){return n=Jl(n),n!==null?ca(n):null}function ca(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ca(n);if(i!==null)return i;n=n.sibling}return null}var A=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,ne=e.unstable_shouldYield,se=e.unstable_requestPaint,G=e.unstable_now,Me=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,ke=e.unstable_NormalPriority,nt=e.unstable_LowPriority,it=e.unstable_IdlePriority,$e=null,at=null;function Mt(n){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot($e,n,void 0,(n.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Ke,Bt=Math.log,xt=Math.LN2;function Ke(n){return n>>>=0,n===0?32:31-(Bt(n)/xt|0)|0}var Xt=64,vt=4194304;function an(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Jn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,g=n.pingedLanes,M=o&268435455;if(M!==0){var U=M&~d;U!==0?u=an(U):(g&=M,g!==0&&(u=an(g)))}else M=o&~d,M!==0?u=an(M):g!==0&&(u=an(g));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if(u&4&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Tt(i),d=1<<o,u|=n[o],i&=~d;return u}function yn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function br(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var M=31-Tt(g),U=1<<M,B=d[M];B===-1?(!(U&o)||U&u)&&(d[M]=yn(U,i)):B<=i&&(n.expiredLanes|=U),g&=~U}}function Lt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sn(){var n=Xt;return Xt<<=1,!(Xt&4194240)&&(Xt=64),n}function cn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function qt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Tt(i),n[i]=o}function fn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Tt(o),g=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~g}}function Lr(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Tt(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var mt=0;function wd(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ad,eu,Cd,Rd,Pd,tu=!1,fa=[],Zi=null,Qi=null,Ji=null,oo=new Map,ao=new Map,er=[],ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bd(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":oo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(i.pointerId)}}function lo(n,i,o,u,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Mo(i),i!==null&&eu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function av(n,i,o,u,d){switch(i){case"focusin":return Zi=lo(Zi,n,i,o,u,d),!0;case"dragenter":return Qi=lo(Qi,n,i,o,u,d),!0;case"mouseover":return Ji=lo(Ji,n,i,o,u,d),!0;case"pointerover":var g=d.pointerId;return oo.set(g,lo(oo.get(g)||null,n,i,o,u,d)),!0;case"gotpointercapture":return g=d.pointerId,ao.set(g,lo(ao.get(g)||null,n,i,o,u,d)),!0}return!1}function Ld(n){var i=Dr(n.target);if(i!==null){var o=pi(i);if(o!==null){if(i=o.tag,i===13){if(i=aa(o),i!==null){n.blockedOn=i,Pd(n.priority,function(){Cd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function da(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=iu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Rt=u,o.target.dispatchEvent(u),Rt=null}else return i=Mo(o),i!==null&&eu(i),n.blockedOn=o,!1;i.shift()}return!0}function Dd(n,i,o){da(n)&&o.delete(i)}function lv(){tu=!1,Zi!==null&&da(Zi)&&(Zi=null),Qi!==null&&da(Qi)&&(Qi=null),Ji!==null&&da(Ji)&&(Ji=null),oo.forEach(Dd),ao.forEach(Dd)}function uo(n,i){n.blockedOn===i&&(n.blockedOn=null,tu||(tu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lv)))}function co(n){function i(d){return uo(d,n)}if(0<fa.length){uo(fa[0],n);for(var o=1;o<fa.length;o++){var u=fa[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Zi!==null&&uo(Zi,n),Qi!==null&&uo(Qi,n),Ji!==null&&uo(Ji,n),oo.forEach(i),ao.forEach(i),o=0;o<er.length;o++)u=er[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<er.length&&(o=er[0],o.blockedOn===null);)Ld(o),o.blockedOn===null&&er.shift()}var ls=P.ReactCurrentBatchConfig,ha=!0;function uv(n,i,o,u){var d=mt,g=ls.transition;ls.transition=null;try{mt=1,nu(n,i,o,u)}finally{mt=d,ls.transition=g}}function cv(n,i,o,u){var d=mt,g=ls.transition;ls.transition=null;try{mt=4,nu(n,i,o,u)}finally{mt=d,ls.transition=g}}function nu(n,i,o,u){if(ha){var d=iu(n,i,o,u);if(d===null)yu(n,i,u,pa,o),bd(n,u);else if(av(d,n,i,o,u))u.stopPropagation();else if(bd(n,u),i&4&&-1<ov.indexOf(n)){for(;d!==null;){var g=Mo(d);if(g!==null&&Ad(g),g=iu(n,i,o,u),g===null&&yu(n,i,u,pa,o),g===d)break;d=g}d!==null&&u.stopPropagation()}else yu(n,i,u,null,o)}}var pa=null;function iu(n,i,o,u){if(pa=null,n=X(u),n=Dr(n),n!==null)if(i=pi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=aa(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return pa=n,null}function Ud(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Me()){case Pe:return 1;case Ne:return 4;case ke:case nt:return 16;case it:return 536870912;default:return 16}default:return 16}}var tr=null,ru=null,ma=null;function Id(){if(ma)return ma;var n,i=ru,o=i.length,u,d="value"in tr?tr.value:tr.textContent,g=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===d[g-u];u++);return ma=d.slice(n,1<u?1-u:void 0)}function ga(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function va(){return!0}function Nd(){return!1}function On(n){function i(o,u,d,g,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=g,this.target=M,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(o=n[U],this[U]=o?o(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?va:Nd,this.isPropagationStopped=Nd,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},su=On(us),fo=ae({},us,{view:0,detail:0}),fv=On(fo),ou,au,ho,_a=ae({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ho&&(ho&&n.type==="mousemove"?(ou=n.screenX-ho.screenX,au=n.screenY-ho.screenY):au=ou=0,ho=n),ou)},movementY:function(n){return"movementY"in n?n.movementY:au}}),Fd=On(_a),dv=ae({},_a,{dataTransfer:0}),hv=On(dv),pv=ae({},fo,{relatedTarget:0}),lu=On(pv),mv=ae({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),gv=On(mv),vv=ae({},us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_v=On(vv),xv=ae({},us,{data:0}),Od=On(xv),yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ev[n])?!!i[n]:!1}function uu(){return Mv}var Tv=ae({},fo,{key:function(n){if(n.key){var i=yv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ga(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Sv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(n){return n.type==="keypress"?ga(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ga(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wv=On(Tv),Av=ae({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=On(Av),Cv=ae({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),Rv=On(Cv),Pv=ae({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),bv=On(Pv),Lv=ae({},_a,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dv=On(Lv),Uv=[9,13,27,32],cu=f&&"CompositionEvent"in window,po=null;f&&"documentMode"in document&&(po=document.documentMode);var Iv=f&&"TextEvent"in window&&!po,Bd=f&&(!cu||po&&8<po&&11>=po),zd=" ",Hd=!1;function Vd(n,i){switch(n){case"keyup":return Uv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var cs=!1;function Nv(n,i){switch(n){case"compositionend":return Gd(i);case"keypress":return i.which!==32?null:(Hd=!0,zd);case"textInput":return n=i.data,n===zd&&Hd?null:n;default:return null}}function Fv(n,i){if(cs)return n==="compositionend"||!cu&&Vd(n,i)?(n=Id(),ma=ru=tr=null,cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Bd&&i.locale!=="ko"?null:i.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ov[n.type]:i==="textarea"}function Xd(n,i,o,u){Le(u),i=Ma(i,"onChange"),0<i.length&&(o=new su("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var mo=null,go=null;function kv(n){uh(n,0)}function xa(n){var i=ms(n);if(gt(i))return n}function Bv(n,i){if(n==="change")return i}var jd=!1;if(f){var fu;if(f){var du="oninput"in document;if(!du){var qd=document.createElement("div");qd.setAttribute("oninput","return;"),du=typeof qd.oninput=="function"}fu=du}else fu=!1;jd=fu&&(!document.documentMode||9<document.documentMode)}function $d(){mo&&(mo.detachEvent("onpropertychange",Yd),go=mo=null)}function Yd(n){if(n.propertyName==="value"&&xa(go)){var i=[];Xd(i,go,n,X(n)),wn(kv,i)}}function zv(n,i,o){n==="focusin"?($d(),mo=i,go=o,mo.attachEvent("onpropertychange",Yd)):n==="focusout"&&$d()}function Hv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xa(go)}function Vv(n,i){if(n==="click")return xa(i)}function Gv(n,i){if(n==="input"||n==="change")return xa(i)}function Wv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ei=typeof Object.is=="function"?Object.is:Wv;function vo(n,i){if(ei(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!p.call(i,d)||!ei(n[d],i[d]))return!1}return!0}function Kd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zd(n,i){var o=Kd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Kd(o)}}function Qd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Qd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Jd(){for(var n=window,i=It();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=It(n.document)}return i}function hu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Xv(n){var i=Jd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Qd(o.ownerDocument.documentElement,o)){if(u!==null&&hu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,g=Math.min(u.start,d);u=u.end===void 0?g:Math.min(u.end,d),!n.extend&&g>u&&(d=u,u=g,g=d),d=Zd(o,g);var M=Zd(o,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var jv=f&&"documentMode"in document&&11>=document.documentMode,fs=null,pu=null,_o=null,mu=!1;function eh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;mu||fs==null||fs!==It(u)||(u=fs,"selectionStart"in u&&hu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),_o&&vo(_o,u)||(_o=u,u=Ma(pu,"onSelect"),0<u.length&&(i=new su("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=fs)))}function ya(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ds={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},gu={},th={};f&&(th=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Sa(n){if(gu[n])return gu[n];if(!ds[n])return n;var i=ds[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in th)return gu[n]=i[o];return n}var nh=Sa("animationend"),ih=Sa("animationiteration"),rh=Sa("animationstart"),sh=Sa("transitionend"),oh=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(n,i){oh.set(n,i),l(i,[n])}for(var vu=0;vu<ah.length;vu++){var _u=ah[vu],qv=_u.toLowerCase(),$v=_u[0].toUpperCase()+_u.slice(1);nr(qv,"on"+$v)}nr(nh,"onAnimationEnd"),nr(ih,"onAnimationIteration"),nr(rh,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(sh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function lh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,oa(u,i,void 0,n),n.currentTarget=null}function uh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var M=u.length-1;0<=M;M--){var U=u[M],B=U.instance,te=U.currentTarget;if(U=U.listener,B!==g&&d.isPropagationStopped())break e;lh(d,U,te),g=B}else for(M=0;M<u.length;M++){if(U=u[M],B=U.instance,te=U.currentTarget,U=U.listener,B!==g&&d.isPropagationStopped())break e;lh(d,U,te),g=B}}}if(Pr)throw n=Ki,Pr=!1,Ki=null,n}function Ot(n,i){var o=i[Au];o===void 0&&(o=i[Au]=new Set);var u=n+"__bubble";o.has(u)||(ch(i,n,2,!1),o.add(u))}function xu(n,i,o){var u=0;i&&(u|=4),ch(o,n,u,i)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function yo(n){if(!n[Ea]){n[Ea]=!0,s.forEach(function(o){o!=="selectionchange"&&(Yv.has(o)||xu(o,!1,n),xu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ea]||(i[Ea]=!0,xu("selectionchange",!1,i))}}function ch(n,i,o,u){switch(Ud(i)){case 1:var d=uv;break;case 4:d=cv;break;default:d=nu}o=d.bind(null,i,o,n),d=void 0,!os||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function yu(n,i,o,u,d){var g=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var U=u.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;M=M.return}for(;U!==null;){if(M=Dr(U),M===null)return;if(B=M.tag,B===5||B===6){u=g=M;continue e}U=U.parentNode}}u=u.return}wn(function(){var te=g,xe=X(o),Ee=[];e:{var ve=oh.get(n);if(ve!==void 0){var Ie=su,Ve=n;switch(n){case"keypress":if(ga(o)===0)break e;case"keydown":case"keyup":Ie=wv;break;case"focusin":Ve="focus",Ie=lu;break;case"focusout":Ve="blur",Ie=lu;break;case"beforeblur":case"afterblur":Ie=lu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=hv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Rv;break;case nh:case ih:case rh:Ie=gv;break;case sh:Ie=bv;break;case"scroll":Ie=fv;break;case"wheel":Ie=Dv;break;case"copy":case"cut":case"paste":Ie=_v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=kd}var We=(i&4)!==0,$t=!We&&n==="scroll",q=We?ve!==null?ve+"Capture":null:ve;We=[];for(var W=te,$;W!==null;){$=W;var we=$.stateNode;if($.tag===5&&we!==null&&($=we,q!==null&&(we=xn(W,q),we!=null&&We.push(So(W,we,$)))),$t)break;W=W.return}0<We.length&&(ve=new Ie(ve,Ve,null,o,xe),Ee.push({event:ve,listeners:We}))}}if(!(i&7)){e:{if(ve=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",ve&&o!==Rt&&(Ve=o.relatedTarget||o.fromElement)&&(Dr(Ve)||Ve[Ai]))break e;if((Ie||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ie?(Ve=o.relatedTarget||o.toElement,Ie=te,Ve=Ve?Dr(Ve):null,Ve!==null&&($t=pi(Ve),Ve!==$t||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ie=null,Ve=te),Ie!==Ve)){if(We=Fd,we="onMouseLeave",q="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(We=kd,we="onPointerLeave",q="onPointerEnter",W="pointer"),$t=Ie==null?ve:ms(Ie),$=Ve==null?ve:ms(Ve),ve=new We(we,W+"leave",Ie,o,xe),ve.target=$t,ve.relatedTarget=$,we=null,Dr(xe)===te&&(We=new We(q,W+"enter",Ve,o,xe),We.target=$,We.relatedTarget=$t,we=We),$t=we,Ie&&Ve)t:{for(We=Ie,q=Ve,W=0,$=We;$;$=hs($))W++;for($=0,we=q;we;we=hs(we))$++;for(;0<W-$;)We=hs(We),W--;for(;0<$-W;)q=hs(q),$--;for(;W--;){if(We===q||q!==null&&We===q.alternate)break t;We=hs(We),q=hs(q)}We=null}else We=null;Ie!==null&&fh(Ee,ve,Ie,We,!1),Ve!==null&&$t!==null&&fh(Ee,$t,Ve,We,!0)}}e:{if(ve=te?ms(te):window,Ie=ve.nodeName&&ve.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ve.type==="file")var je=Bv;else if(Wd(ve))if(jd)je=Gv;else{je=Hv;var Qe=zv}else(Ie=ve.nodeName)&&Ie.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(je=Vv);if(je&&(je=je(n,te))){Xd(Ee,je,o,xe);break e}Qe&&Qe(n,ve,te),n==="focusout"&&(Qe=ve._wrapperState)&&Qe.controlled&&ve.type==="number"&&Pt(ve,"number",ve.value)}switch(Qe=te?ms(te):window,n){case"focusin":(Wd(Qe)||Qe.contentEditable==="true")&&(fs=Qe,pu=te,_o=null);break;case"focusout":_o=pu=fs=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,eh(Ee,o,xe);break;case"selectionchange":if(jv)break;case"keydown":case"keyup":eh(Ee,o,xe)}var Je;if(cu)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else cs?Vd(n,o)&&(rt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(Bd&&o.locale!=="ko"&&(cs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&cs&&(Je=Id()):(tr=xe,ru="value"in tr?tr.value:tr.textContent,cs=!0)),Qe=Ma(te,rt),0<Qe.length&&(rt=new Od(rt,n,null,o,xe),Ee.push({event:rt,listeners:Qe}),Je?rt.data=Je:(Je=Gd(o),Je!==null&&(rt.data=Je)))),(Je=Iv?Nv(n,o):Fv(n,o))&&(te=Ma(te,"onBeforeInput"),0<te.length&&(xe=new Od("onBeforeInput","beforeinput",null,o,xe),Ee.push({event:xe,listeners:te}),xe.data=Je))}uh(Ee,i)})}function So(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ma(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=xn(n,o),g!=null&&u.unshift(So(n,g,d)),g=xn(n,i),g!=null&&u.push(So(n,g,d))),n=n.return}return u}function hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function fh(n,i,o,u,d){for(var g=i._reactName,M=[];o!==null&&o!==u;){var U=o,B=U.alternate,te=U.stateNode;if(B!==null&&B===u)break;U.tag===5&&te!==null&&(U=te,d?(B=xn(o,g),B!=null&&M.unshift(So(o,B,U))):d||(B=xn(o,g),B!=null&&M.push(So(o,B,U)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var Kv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function dh(n){return(typeof n=="string"?n:""+n).replace(Kv,`
`).replace(Zv,"")}function Ta(n,i,o){if(i=dh(i),dh(n)!==i&&o)throw Error(t(425))}function wa(){}var Su=null,Eu=null;function Mu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,hh=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof hh<"u"?function(n){return hh.resolve(null).then(n).catch(e_)}:Tu;function e_(n){setTimeout(function(){throw n})}function wu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),co(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);co(i)}function ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ph(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ps=Math.random().toString(36).slice(2),mi="__reactFiber$"+ps,Eo="__reactProps$"+ps,Ai="__reactContainer$"+ps,Au="__reactEvents$"+ps,t_="__reactListeners$"+ps,n_="__reactHandles$"+ps;function Dr(n){var i=n[mi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ai]||o[mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=ph(n);n!==null;){if(o=n[mi])return o;n=ph(n)}return i}n=o,o=n.parentNode}return null}function Mo(n){return n=n[mi]||n[Ai],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Aa(n){return n[Eo]||null}var Cu=[],gs=-1;function rr(n){return{current:n}}function kt(n){0>gs||(n.current=Cu[gs],Cu[gs]=null,gs--)}function Nt(n,i){gs++,Cu[gs]=n.current,n.current=i}var sr={},dn=rr(sr),An=rr(!1),Ur=sr;function vs(n,i){var o=n.type.contextTypes;if(!o)return sr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in o)d[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Cn(n){return n=n.childContextTypes,n!=null}function Ca(){kt(An),kt(dn)}function mh(n,i,o){if(dn.current!==sr)throw Error(t(168));Nt(dn,i),Nt(An,o)}function gh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ye(n)||"Unknown",d));return ae({},o,u)}function Ra(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Ur=dn.current,Nt(dn,n),Nt(An,An.current),!0}function vh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=gh(n,i,Ur),u.__reactInternalMemoizedMergedChildContext=n,kt(An),kt(dn),Nt(dn,n)):kt(An),Nt(An,o)}var Ci=null,Pa=!1,Ru=!1;function _h(n){Ci===null?Ci=[n]:Ci.push(n)}function i_(n){Pa=!0,_h(n)}function or(){if(!Ru&&Ci!==null){Ru=!0;var n=0,i=mt;try{var o=Ci;for(mt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ci=null,Pa=!1}catch(d){throw Ci!==null&&(Ci=Ci.slice(n+1)),A(Pe,or),d}finally{mt=i,Ru=!1}}return null}var _s=[],xs=0,ba=null,La=0,jn=[],qn=0,Ir=null,Ri=1,Pi="";function Nr(n,i){_s[xs++]=La,_s[xs++]=ba,ba=n,La=i}function xh(n,i,o){jn[qn++]=Ri,jn[qn++]=Pi,jn[qn++]=Ir,Ir=n;var u=Ri;n=Pi;var d=32-Tt(u)-1;u&=~(1<<d),o+=1;var g=32-Tt(i)+d;if(30<g){var M=d-d%5;g=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Ri=1<<32-Tt(i)+d|o<<d|u,Pi=g+n}else Ri=1<<g|o<<d|u,Pi=n}function Pu(n){n.return!==null&&(Nr(n,1),xh(n,1,0))}function bu(n){for(;n===ba;)ba=_s[--xs],_s[xs]=null,La=_s[--xs],_s[xs]=null;for(;n===Ir;)Ir=jn[--qn],jn[qn]=null,Pi=jn[--qn],jn[qn]=null,Ri=jn[--qn],jn[qn]=null}var kn=null,Bn=null,zt=!1,ti=null;function yh(n,i){var o=Zn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Sh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,kn=n,Bn=ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,kn=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ir!==null?{id:Ri,overflow:Pi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Zn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,kn=n,Bn=null,!0):!1;default:return!1}}function Lu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Du(n){if(zt){var i=Bn;if(i){var o=i;if(!Sh(n,i)){if(Lu(n))throw Error(t(418));i=ir(o.nextSibling);var u=kn;i&&Sh(n,i)?yh(u,o):(n.flags=n.flags&-4097|2,zt=!1,kn=n)}}else{if(Lu(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,kn=n}}}function Eh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function Da(n){if(n!==kn)return!1;if(!zt)return Eh(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Mu(n.type,n.memoizedProps)),i&&(i=Bn)){if(Lu(n))throw Mh(),Error(t(418));for(;i;)yh(n,i),i=ir(i.nextSibling)}if(Eh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Bn=ir(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=kn?ir(n.stateNode.nextSibling):null;return!0}function Mh(){for(var n=Bn;n;)n=ir(n.nextSibling)}function ys(){Bn=kn=null,zt=!1}function Uu(n){ti===null?ti=[n]:ti.push(n)}var r_=P.ReactCurrentBatchConfig;function To(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(M){var U=d.refs;M===null?delete U[g]:U[g]=M},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ua(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Th(n){var i=n._init;return i(n._payload)}function wh(n){function i(q,W){if(n){var $=q.deletions;$===null?(q.deletions=[W],q.flags|=16):$.push(W)}}function o(q,W){if(!n)return null;for(;W!==null;)i(q,W),W=W.sibling;return null}function u(q,W){for(q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function d(q,W){return q=pr(q,W),q.index=0,q.sibling=null,q}function g(q,W,$){return q.index=$,n?($=q.alternate,$!==null?($=$.index,$<W?(q.flags|=2,W):$):(q.flags|=2,W)):(q.flags|=1048576,W)}function M(q){return n&&q.alternate===null&&(q.flags|=2),q}function U(q,W,$,we){return W===null||W.tag!==6?(W=Tc($,q.mode,we),W.return=q,W):(W=d(W,$),W.return=q,W)}function B(q,W,$,we){var je=$.type;return je===I?xe(q,W,$.props.children,we,$.key):W!==null&&(W.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ie&&Th(je)===W.type)?(we=d(W,$.props),we.ref=To(q,W,$),we.return=q,we):(we=il($.type,$.key,$.props,null,q.mode,we),we.ref=To(q,W,$),we.return=q,we)}function te(q,W,$,we){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=wc($,q.mode,we),W.return=q,W):(W=d(W,$.children||[]),W.return=q,W)}function xe(q,W,$,we,je){return W===null||W.tag!==7?(W=Gr($,q.mode,we,je),W.return=q,W):(W=d(W,$),W.return=q,W)}function Ee(q,W,$){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Tc(""+W,q.mode,$),W.return=q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case z:return $=il(W.type,W.key,W.props,null,q.mode,$),$.ref=To(q,null,W),$.return=q,$;case F:return W=wc(W,q.mode,$),W.return=q,W;case ie:var we=W._init;return Ee(q,we(W._payload),$)}if(qe(W)||fe(W))return W=Gr(W,q.mode,$,null),W.return=q,W;Ua(q,W)}return null}function ve(q,W,$,we){var je=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return je!==null?null:U(q,W,""+$,we);if(typeof $=="object"&&$!==null){switch($.$$typeof){case z:return $.key===je?B(q,W,$,we):null;case F:return $.key===je?te(q,W,$,we):null;case ie:return je=$._init,ve(q,W,je($._payload),we)}if(qe($)||fe($))return je!==null?null:xe(q,W,$,we,null);Ua(q,$)}return null}function Ie(q,W,$,we,je){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get($)||null,U(W,q,""+we,je);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case z:return q=q.get(we.key===null?$:we.key)||null,B(W,q,we,je);case F:return q=q.get(we.key===null?$:we.key)||null,te(W,q,we,je);case ie:var Qe=we._init;return Ie(q,W,$,Qe(we._payload),je)}if(qe(we)||fe(we))return q=q.get($)||null,xe(W,q,we,je,null);Ua(W,we)}return null}function Ve(q,W,$,we){for(var je=null,Qe=null,Je=W,rt=W=0,sn=null;Je!==null&&rt<$.length;rt++){Je.index>rt?(sn=Je,Je=null):sn=Je.sibling;var wt=ve(q,Je,$[rt],we);if(wt===null){Je===null&&(Je=sn);break}n&&Je&&wt.alternate===null&&i(q,Je),W=g(wt,W,rt),Qe===null?je=wt:Qe.sibling=wt,Qe=wt,Je=sn}if(rt===$.length)return o(q,Je),zt&&Nr(q,rt),je;if(Je===null){for(;rt<$.length;rt++)Je=Ee(q,$[rt],we),Je!==null&&(W=g(Je,W,rt),Qe===null?je=Je:Qe.sibling=Je,Qe=Je);return zt&&Nr(q,rt),je}for(Je=u(q,Je);rt<$.length;rt++)sn=Ie(Je,q,rt,$[rt],we),sn!==null&&(n&&sn.alternate!==null&&Je.delete(sn.key===null?rt:sn.key),W=g(sn,W,rt),Qe===null?je=sn:Qe.sibling=sn,Qe=sn);return n&&Je.forEach(function(mr){return i(q,mr)}),zt&&Nr(q,rt),je}function We(q,W,$,we){var je=fe($);if(typeof je!="function")throw Error(t(150));if($=je.call($),$==null)throw Error(t(151));for(var Qe=je=null,Je=W,rt=W=0,sn=null,wt=$.next();Je!==null&&!wt.done;rt++,wt=$.next()){Je.index>rt?(sn=Je,Je=null):sn=Je.sibling;var mr=ve(q,Je,wt.value,we);if(mr===null){Je===null&&(Je=sn);break}n&&Je&&mr.alternate===null&&i(q,Je),W=g(mr,W,rt),Qe===null?je=mr:Qe.sibling=mr,Qe=mr,Je=sn}if(wt.done)return o(q,Je),zt&&Nr(q,rt),je;if(Je===null){for(;!wt.done;rt++,wt=$.next())wt=Ee(q,wt.value,we),wt!==null&&(W=g(wt,W,rt),Qe===null?je=wt:Qe.sibling=wt,Qe=wt);return zt&&Nr(q,rt),je}for(Je=u(q,Je);!wt.done;rt++,wt=$.next())wt=Ie(Je,q,rt,wt.value,we),wt!==null&&(n&&wt.alternate!==null&&Je.delete(wt.key===null?rt:wt.key),W=g(wt,W,rt),Qe===null?je=wt:Qe.sibling=wt,Qe=wt);return n&&Je.forEach(function(O_){return i(q,O_)}),zt&&Nr(q,rt),je}function $t(q,W,$,we){if(typeof $=="object"&&$!==null&&$.type===I&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case z:e:{for(var je=$.key,Qe=W;Qe!==null;){if(Qe.key===je){if(je=$.type,je===I){if(Qe.tag===7){o(q,Qe.sibling),W=d(Qe,$.props.children),W.return=q,q=W;break e}}else if(Qe.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ie&&Th(je)===Qe.type){o(q,Qe.sibling),W=d(Qe,$.props),W.ref=To(q,Qe,$),W.return=q,q=W;break e}o(q,Qe);break}else i(q,Qe);Qe=Qe.sibling}$.type===I?(W=Gr($.props.children,q.mode,we,$.key),W.return=q,q=W):(we=il($.type,$.key,$.props,null,q.mode,we),we.ref=To(q,W,$),we.return=q,q=we)}return M(q);case F:e:{for(Qe=$.key;W!==null;){if(W.key===Qe)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){o(q,W.sibling),W=d(W,$.children||[]),W.return=q,q=W;break e}else{o(q,W);break}else i(q,W);W=W.sibling}W=wc($,q.mode,we),W.return=q,q=W}return M(q);case ie:return Qe=$._init,$t(q,W,Qe($._payload),we)}if(qe($))return Ve(q,W,$,we);if(fe($))return We(q,W,$,we);Ua(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,W!==null&&W.tag===6?(o(q,W.sibling),W=d(W,$),W.return=q,q=W):(o(q,W),W=Tc($,q.mode,we),W.return=q,q=W),M(q)):o(q,W)}return $t}var Ss=wh(!0),Ah=wh(!1),Ia=rr(null),Na=null,Es=null,Iu=null;function Nu(){Iu=Es=Na=null}function Fu(n){var i=Ia.current;kt(Ia),n._currentValue=i}function Ou(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Ms(n,i){Na=n,Iu=Es=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Rn=!0),n.firstContext=null)}function $n(n){var i=n._currentValue;if(Iu!==n)if(n={context:n,memoizedValue:i,next:null},Es===null){if(Na===null)throw Error(t(308));Es=n,Na.dependencies={lanes:0,firstContext:n}}else Es=Es.next=n;return i}var Fr=null;function ku(n){Fr===null?Fr=[n]:Fr.push(n)}function Ch(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,ku(i)):(o.next=d.next,d.next=o),i.interleaved=o,bi(n,u)}function bi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ar=!1;function Bu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Li(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,St&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,bi(n,o)}return d=u.interleaved,d===null?(i.next=i,ku(u)):(i.next=d.next,d.next=i),u.interleaved=i,bi(n,o)}function Fa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Lr(n,o)}}function Ph(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?d=g=M:g=g.next=M,o=o.next}while(o!==null);g===null?d=g=i:g=g.next=i}else d=g=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Oa(n,i,o,u){var d=n.updateQueue;ar=!1;var g=d.firstBaseUpdate,M=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var B=U,te=B.next;B.next=null,M===null?g=te:M.next=te,M=B;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==M&&(U===null?xe.firstBaseUpdate=te:U.next=te,xe.lastBaseUpdate=B))}if(g!==null){var Ee=d.baseState;M=0,xe=te=B=null,U=g;do{var ve=U.lane,Ie=U.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Ie,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ve=n,We=U;switch(ve=i,Ie=o,We.tag){case 1:if(Ve=We.payload,typeof Ve=="function"){Ee=Ve.call(Ie,Ee,ve);break e}Ee=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=We.payload,ve=typeof Ve=="function"?Ve.call(Ie,Ee,ve):Ve,ve==null)break e;Ee=ae({},Ee,ve);break e;case 2:ar=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[U]:ve.push(U))}else Ie={eventTime:Ie,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(te=xe=Ie,B=Ee):xe=xe.next=Ie,M|=ve;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(xe===null&&(B=Ee),d.baseState=B,d.firstBaseUpdate=te,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);Br|=M,n.lanes=M,n.memoizedState=Ee}}function bh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var wo={},gi=rr(wo),Ao=rr(wo),Co=rr(wo);function Or(n){if(n===wo)throw Error(t(174));return n}function zu(n,i){switch(Nt(Co,i),Nt(Ao,n),Nt(gi,wo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Xe(i,n)}kt(gi),Nt(gi,i)}function Ts(){kt(gi),kt(Ao),kt(Co)}function Lh(n){Or(Co.current);var i=Or(gi.current),o=Xe(i,n.type);i!==o&&(Nt(Ao,n),Nt(gi,o))}function Hu(n){Ao.current===n&&(kt(gi),kt(Ao))}var Ht=rr(0);function ka(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Vu=[];function Gu(){for(var n=0;n<Vu.length;n++)Vu[n]._workInProgressVersionPrimary=null;Vu.length=0}var Ba=P.ReactCurrentDispatcher,Wu=P.ReactCurrentBatchConfig,kr=0,Vt=null,Qt=null,nn=null,za=!1,Ro=!1,Po=0,s_=0;function hn(){throw Error(t(321))}function Xu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ei(n[o],i[o]))return!1;return!0}function ju(n,i,o,u,d,g){if(kr=g,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ba.current=n===null||n.memoizedState===null?u_:c_,n=o(u,d),Ro){g=0;do{if(Ro=!1,Po=0,25<=g)throw Error(t(301));g+=1,nn=Qt=null,i.updateQueue=null,Ba.current=f_,n=o(u,d)}while(Ro)}if(Ba.current=Ga,i=Qt!==null&&Qt.next!==null,kr=0,nn=Qt=Vt=null,za=!1,i)throw Error(t(300));return n}function qu(){var n=Po!==0;return Po=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Vt.memoizedState=nn=n:nn=nn.next=n,nn}function Yn(){if(Qt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var i=nn===null?Vt.memoizedState:nn.next;if(i!==null)nn=i,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},nn===null?Vt.memoizedState=nn=n:nn=nn.next=n}return nn}function bo(n,i){return typeof i=="function"?i(n):i}function $u(n){var i=Yn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Qt,d=u.baseQueue,g=o.pending;if(g!==null){if(d!==null){var M=d.next;d.next=g.next,g.next=M}u.baseQueue=d=g,o.pending=null}if(d!==null){g=d.next,u=u.baseState;var U=M=null,B=null,te=g;do{var xe=te.lane;if((kr&xe)===xe)B!==null&&(B=B.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),u=te.hasEagerState?te.eagerState:n(u,te.action);else{var Ee={lane:xe,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};B===null?(U=B=Ee,M=u):B=B.next=Ee,Vt.lanes|=xe,Br|=xe}te=te.next}while(te!==null&&te!==g);B===null?M=u:B.next=U,ei(u,i.memoizedState)||(Rn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=B,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do g=d.lane,Vt.lanes|=g,Br|=g,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Yu(n){var i=Yn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,g=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do g=n(g,M.action),M=M.next;while(M!==d);ei(g,i.memoizedState)||(Rn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,u]}function Dh(){}function Uh(n,i){var o=Vt,u=Yn(),d=i(),g=!ei(u.memoizedState,d);if(g&&(u.memoizedState=d,Rn=!0),u=u.queue,Ku(Fh.bind(null,o,u,n),[n]),u.getSnapshot!==i||g||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Lo(9,Nh.bind(null,o,u,d,i),void 0,null),rn===null)throw Error(t(349));kr&30||Ih(o,i,d)}return d}function Ih(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Nh(n,i,o,u){i.value=o,i.getSnapshot=u,Oh(i)&&kh(n)}function Fh(n,i,o){return o(function(){Oh(i)&&kh(n)})}function Oh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ei(n,o)}catch{return!0}}function kh(n){var i=bi(n,1);i!==null&&si(i,n,1,-1)}function Bh(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:n},i.queue=n,n=n.dispatch=l_.bind(null,Vt,n),[i.memoizedState,n]}function Lo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function zh(){return Yn().memoizedState}function Ha(n,i,o,u){var d=vi();Vt.flags|=n,d.memoizedState=Lo(1|i,o,void 0,u===void 0?null:u)}function Va(n,i,o,u){var d=Yn();u=u===void 0?null:u;var g=void 0;if(Qt!==null){var M=Qt.memoizedState;if(g=M.destroy,u!==null&&Xu(u,M.deps)){d.memoizedState=Lo(i,o,g,u);return}}Vt.flags|=n,d.memoizedState=Lo(1|i,o,g,u)}function Hh(n,i){return Ha(8390656,8,n,i)}function Ku(n,i){return Va(2048,8,n,i)}function Vh(n,i){return Va(4,2,n,i)}function Gh(n,i){return Va(4,4,n,i)}function Wh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Xh(n,i,o){return o=o!=null?o.concat([n]):null,Va(4,4,Wh.bind(null,i,n),o)}function Zu(){}function jh(n,i){var o=Yn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Xu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function qh(n,i){var o=Yn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Xu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function $h(n,i,o){return kr&21?(ei(o,i)||(o=Sn(),Vt.lanes|=o,Br|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Rn=!0),n.memoizedState=o)}function o_(n,i){var o=mt;mt=o!==0&&4>o?o:4,n(!0);var u=Wu.transition;Wu.transition={};try{n(!1),i()}finally{mt=o,Wu.transition=u}}function Yh(){return Yn().memoizedState}function a_(n,i,o){var u=dr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Kh(n))Zh(i,o);else if(o=Ch(n,i,o,u),o!==null){var d=Mn();si(o,n,u,d),Qh(o,i,u)}}function l_(n,i,o){var u=dr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Kh(n))Zh(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var M=i.lastRenderedState,U=g(M,o);if(d.hasEagerState=!0,d.eagerState=U,ei(U,M)){var B=i.interleaved;B===null?(d.next=d,ku(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}o=Ch(n,i,d,u),o!==null&&(d=Mn(),si(o,n,u,d),Qh(o,i,u))}}function Kh(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function Zh(n,i){Ro=za=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Qh(n,i,o){if(o&4194240){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Lr(n,o)}}var Ga={readContext:$n,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},u_={readContext:$n,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:$n,useEffect:Hh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ha(4194308,4,Wh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ha(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ha(4,2,n,i)},useMemo:function(n,i){var o=vi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=vi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=a_.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:Bh,useDebugValue:Zu,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=Bh(!1),i=n[0];return n=o_.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Vt,d=vi();if(zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),rn===null)throw Error(t(349));kr&30||Ih(u,i,o)}d.memoizedState=o;var g={value:o,getSnapshot:i};return d.queue=g,Hh(Fh.bind(null,u,g,n),[n]),u.flags|=2048,Lo(9,Nh.bind(null,u,g,o,i),void 0,null),o},useId:function(){var n=vi(),i=rn.identifierPrefix;if(zt){var o=Pi,u=Ri;o=(u&~(1<<32-Tt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Po++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=s_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},c_={readContext:$n,useCallback:jh,useContext:$n,useEffect:Ku,useImperativeHandle:Xh,useInsertionEffect:Vh,useLayoutEffect:Gh,useMemo:qh,useReducer:$u,useRef:zh,useState:function(){return $u(bo)},useDebugValue:Zu,useDeferredValue:function(n){var i=Yn();return $h(i,Qt.memoizedState,n)},useTransition:function(){var n=$u(bo)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:Dh,useSyncExternalStore:Uh,useId:Yh,unstable_isNewReconciler:!1},f_={readContext:$n,useCallback:jh,useContext:$n,useEffect:Ku,useImperativeHandle:Xh,useInsertionEffect:Vh,useLayoutEffect:Gh,useMemo:qh,useReducer:Yu,useRef:zh,useState:function(){return Yu(bo)},useDebugValue:Zu,useDeferredValue:function(n){var i=Yn();return Qt===null?i.memoizedState=n:$h(i,Qt.memoizedState,n)},useTransition:function(){var n=Yu(bo)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:Dh,useSyncExternalStore:Uh,useId:Yh,unstable_isNewReconciler:!1};function ni(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Qu(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:ae({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Wa={isMounted:function(n){return(n=n._reactInternals)?pi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=dr(n),g=Li(u,d);g.payload=i,o!=null&&(g.callback=o),i=lr(n,g,d),i!==null&&(si(i,n,d,u),Fa(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=dr(n),g=Li(u,d);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=lr(n,g,d),i!==null&&(si(i,n,d,u),Fa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Mn(),u=dr(n),d=Li(o,u);d.tag=2,i!=null&&(d.callback=i),i=lr(n,d,u),i!==null&&(si(i,n,u,o),Fa(i,n,u))}};function Jh(n,i,o,u,d,g,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,M):i.prototype&&i.prototype.isPureReactComponent?!vo(o,u)||!vo(d,g):!0}function ep(n,i,o){var u=!1,d=sr,g=i.contextType;return typeof g=="object"&&g!==null?g=$n(g):(d=Cn(i)?Ur:dn.current,u=i.contextTypes,g=(u=u!=null)?vs(n,d):sr),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function tp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Wa.enqueueReplaceState(i,i.state,null)}function Ju(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Bu(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=$n(g):(g=Cn(i)?Ur:dn.current,d.context=vs(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Qu(n,i,g,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Wa.enqueueReplaceState(d,d.state,null),Oa(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ws(n,i){try{var o="",u=i;do o+=de(u),u=u.return;while(u);var d=o}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function ec(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function tc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var d_=typeof WeakMap=="function"?WeakMap:Map;function np(n,i,o){o=Li(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Za||(Za=!0,gc=u),tc(n,i)},o}function ip(n,i,o){o=Li(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){tc(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){tc(n,i),typeof u!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function rp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new d_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=A_.bind(null,n,i,o),i.then(n,n))}function sp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function op(n,i,o,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Li(-1,1),i.tag=2,lr(o,i,1))),o.lanes|=1),n)}var h_=P.ReactCurrentOwner,Rn=!1;function En(n,i,o,u){i.child=n===null?Ah(i,null,o,u):Ss(i,n.child,o,u)}function ap(n,i,o,u,d){o=o.render;var g=i.ref;return Ms(i,d),u=ju(n,i,o,u,g,d),o=qu(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Di(n,i,d)):(zt&&o&&Pu(i),i.flags|=1,En(n,i,u,d),i.child)}function lp(n,i,o,u,d){if(n===null){var g=o.type;return typeof g=="function"&&!Mc(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,up(n,i,g,u,d)):(n=il(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,!(n.lanes&d)){var M=g.memoizedProps;if(o=o.compare,o=o!==null?o:vo,o(M,u)&&n.ref===i.ref)return Di(n,i,d)}return i.flags|=1,n=pr(g,u),n.ref=i.ref,n.return=i,i.child=n}function up(n,i,o,u,d){if(n!==null){var g=n.memoizedProps;if(vo(g,u)&&n.ref===i.ref)if(Rn=!1,i.pendingProps=u=g,(n.lanes&d)!==0)n.flags&131072&&(Rn=!0);else return i.lanes=n.lanes,Di(n,i,d)}return nc(n,i,o,u,d)}function cp(n,i,o){var u=i.pendingProps,d=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Cs,zn),zn|=o;else{if(!(o&1073741824))return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Nt(Cs,zn),zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,Nt(Cs,zn),zn|=u}else g!==null?(u=g.baseLanes|o,i.memoizedState=null):u=o,Nt(Cs,zn),zn|=u;return En(n,i,d,o),i.child}function fp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function nc(n,i,o,u,d){var g=Cn(o)?Ur:dn.current;return g=vs(i,g),Ms(i,d),o=ju(n,i,o,u,g,d),u=qu(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Di(n,i,d)):(zt&&u&&Pu(i),i.flags|=1,En(n,i,o,d),i.child)}function dp(n,i,o,u,d){if(Cn(o)){var g=!0;Ra(i)}else g=!1;if(Ms(i,d),i.stateNode===null)ja(n,i),ep(i,o,u),Ju(i,o,u,d),u=!0;else if(n===null){var M=i.stateNode,U=i.memoizedProps;M.props=U;var B=M.context,te=o.contextType;typeof te=="object"&&te!==null?te=$n(te):(te=Cn(o)?Ur:dn.current,te=vs(i,te));var xe=o.getDerivedStateFromProps,Ee=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";Ee||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==u||B!==te)&&tp(i,M,u,te),ar=!1;var ve=i.memoizedState;M.state=ve,Oa(i,u,M,d),B=i.memoizedState,U!==u||ve!==B||An.current||ar?(typeof xe=="function"&&(Qu(i,o,xe,u),B=i.memoizedState),(U=ar||Jh(i,o,U,u,ve,B,te))?(Ee||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),M.props=u,M.state=B,M.context=te,u=U):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Rh(n,i),U=i.memoizedProps,te=i.type===i.elementType?U:ni(i.type,U),M.props=te,Ee=i.pendingProps,ve=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=$n(B):(B=Cn(o)?Ur:dn.current,B=vs(i,B));var Ie=o.getDerivedStateFromProps;(xe=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==Ee||ve!==B)&&tp(i,M,u,B),ar=!1,ve=i.memoizedState,M.state=ve,Oa(i,u,M,d);var Ve=i.memoizedState;U!==Ee||ve!==Ve||An.current||ar?(typeof Ie=="function"&&(Qu(i,o,Ie,u),Ve=i.memoizedState),(te=ar||Jh(i,o,te,u,ve,Ve,B)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ve,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ve,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ve),M.props=u,M.state=Ve,M.context=B,u=te):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),u=!1)}return ic(n,i,o,u,g,d)}function ic(n,i,o,u,d,g){fp(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&vh(i,o,!1),Di(n,i,g);u=i.stateNode,h_.current=i;var U=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=Ss(i,n.child,null,g),i.child=Ss(i,null,U,g)):En(n,i,U,g),i.memoizedState=u.state,d&&vh(i,o,!0),i.child}function hp(n){var i=n.stateNode;i.pendingContext?mh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&mh(n,i.context,!1),zu(n,i.containerInfo)}function pp(n,i,o,u,d){return ys(),Uu(d),i.flags|=256,En(n,i,o,u),i.child}var rc={dehydrated:null,treeContext:null,retryLane:0};function sc(n){return{baseLanes:n,cachePool:null,transitions:null}}function mp(n,i,o){var u=i.pendingProps,d=Ht.current,g=!1,M=(i.flags&128)!==0,U;if((U=M)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Nt(Ht,d&1),n===null)return Du(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=u.children,n=u.fallback,g?(u=i.mode,g=i.child,M={mode:"hidden",children:M},!(u&1)&&g!==null?(g.childLanes=0,g.pendingProps=M):g=rl(M,u,0,null),n=Gr(n,u,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=sc(o),i.memoizedState=rc,n):oc(i,M));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return p_(n,i,M,u,U,d,o);if(g){g=u.fallback,M=i.mode,d=n.child,U=d.sibling;var B={mode:"hidden",children:u.children};return!(M&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=pr(d,B),u.subtreeFlags=d.subtreeFlags&14680064),U!==null?g=pr(U,g):(g=Gr(g,M,o,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,M=n.child.memoizedState,M=M===null?sc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},g.memoizedState=M,g.childLanes=n.childLanes&~o,i.memoizedState=rc,u}return g=n.child,n=g.sibling,u=pr(g,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function oc(n,i){return i=rl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Xa(n,i,o,u){return u!==null&&Uu(u),Ss(i,n.child,null,o),n=oc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function p_(n,i,o,u,d,g,M){if(o)return i.flags&256?(i.flags&=-257,u=ec(Error(t(422))),Xa(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,d=i.mode,u=rl({mode:"visible",children:u.children},d,0,null),g=Gr(g,d,M,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,i.mode&1&&Ss(i,n.child,null,M),i.child.memoizedState=sc(M),i.memoizedState=rc,g);if(!(i.mode&1))return Xa(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var U=u.dgst;return u=U,g=Error(t(419)),u=ec(g,u,void 0),Xa(n,i,M,u)}if(U=(M&n.childLanes)!==0,Rn||U){if(u=rn,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|M)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,bi(n,d),si(u,n,d,-1))}return Ec(),u=ec(Error(t(421))),Xa(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=C_.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,Bn=ir(d.nextSibling),kn=i,zt=!0,ti=null,n!==null&&(jn[qn++]=Ri,jn[qn++]=Pi,jn[qn++]=Ir,Ri=n.id,Pi=n.overflow,Ir=i),i=oc(i,u.children),i.flags|=4096,i)}function gp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Ou(n.return,i,o)}function ac(n,i,o,u,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=d)}function vp(n,i,o){var u=i.pendingProps,d=u.revealOrder,g=u.tail;if(En(n,i,u.children,o),u=Ht.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gp(n,o,i);else if(n.tag===19)gp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Nt(Ht,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&ka(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),ac(i,!1,d,o,g);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ka(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}ac(i,!0,o,null,g);break;case"together":ac(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ja(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Di(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Br|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=pr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=pr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function m_(n,i,o){switch(i.tag){case 3:hp(i),ys();break;case 5:Lh(i);break;case 1:Cn(i.type)&&Ra(i);break;case 4:zu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Nt(Ia,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Nt(Ht,Ht.current&1),i.flags|=128,null):o&i.child.childLanes?mp(n,i,o):(Nt(Ht,Ht.current&1),n=Di(n,i,o),n!==null?n.sibling:null);Nt(Ht,Ht.current&1);break;case 19:if(u=(o&i.childLanes)!==0,n.flags&128){if(u)return vp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Nt(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,cp(n,i,o)}return Di(n,i,o)}var _p,lc,xp,yp;_p=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},lc=function(){},xp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Or(gi.current);var g=null;switch(o){case"input":d=H(n,d),u=H(n,u),g=[];break;case"select":d=ae({},d,{value:void 0}),u=ae({},u,{value:void 0}),g=[];break;case"textarea":d=w(n,d),u=w(n,u),g=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=wa)}dt(o,u);var M;o=null;for(te in d)if(!u.hasOwnProperty(te)&&d.hasOwnProperty(te)&&d[te]!=null)if(te==="style"){var U=d[te];for(M in U)U.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?g||(g=[]):(g=g||[]).push(te,null));for(te in u){var B=u[te];if(U=d!=null?d[te]:void 0,u.hasOwnProperty(te)&&B!==U&&(B!=null||U!=null))if(te==="style")if(U){for(M in U)!U.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&U[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(g||(g=[]),g.push(te,o)),o=B;else te==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(g=g||[]).push(te,B)):te==="children"?typeof B!="string"&&typeof B!="number"||(g=g||[]).push(te,""+B):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(B!=null&&te==="onScroll"&&Ot("scroll",n),g||U===B||(g=[])):(g=g||[]).push(te,B))}o&&(g=g||[]).push("style",o);var te=g;(i.updateQueue=te)&&(i.flags|=4)}},yp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Do(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function pn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function g_(n,i,o){var u=i.pendingProps;switch(bu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return Cn(i.type)&&Ca(),pn(i),null;case 3:return u=i.stateNode,Ts(),kt(An),kt(dn),Gu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Da(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,ti!==null&&(xc(ti),ti=null))),lc(n,i),pn(i),null;case 5:Hu(i);var d=Or(Co.current);if(o=i.type,n!==null&&i.stateNode!=null)xp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return pn(i),null}if(n=Or(gi.current),Da(i)){u=i.stateNode,o=i.type;var g=i.memoizedProps;switch(u[mi]=i,u[Eo]=g,n=(i.mode&1)!==0,o){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(d=0;d<xo.length;d++)Ot(xo[d],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":_n(u,g),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Ot("invalid",u);break;case"textarea":Q(u,g),Ot("invalid",u)}dt(o,g),d=null;for(var M in g)if(g.hasOwnProperty(M)){var U=g[M];M==="children"?typeof U=="string"?u.textContent!==U&&(g.suppressHydrationWarning!==!0&&Ta(u.textContent,U,n),d=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&Ta(u.textContent,U,n),d=["children",""+U]):a.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Ot("scroll",u)}switch(o){case"input":bt(u),Ye(u,g,!0);break;case"textarea":bt(u),_e(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=wa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[mi]=i,n[Eo]=u,_p(n,i,!1,!1),i.stateNode=n;e:{switch(M=st(o,u),o){case"dialog":Ot("cancel",n),Ot("close",n),d=u;break;case"iframe":case"object":case"embed":Ot("load",n),d=u;break;case"video":case"audio":for(d=0;d<xo.length;d++)Ot(xo[d],n);d=u;break;case"source":Ot("error",n),d=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),d=u;break;case"details":Ot("toggle",n),d=u;break;case"input":_n(n,u),d=H(n,u),Ot("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=ae({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":Q(n,u),d=w(n,u),Ot("invalid",n);break;default:d=u}dt(o,d),U=d;for(g in U)if(U.hasOwnProperty(g)){var B=U[g];g==="style"?tt(n,B):g==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Oe(n,B)):g==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&ct(n,B):typeof B=="number"&&ct(n,""+B):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?B!=null&&g==="onScroll"&&Ot("scroll",n):B!=null&&L(n,g,B,M))}switch(o){case"input":bt(n),Ye(n,u,!1);break;case"textarea":bt(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?D(n,!!u.multiple,g,!1):u.defaultValue!=null&&D(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=wa)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(n&&i.stateNode!=null)yp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Or(Co.current),Or(gi.current),Da(i)){if(u=i.stateNode,o=i.memoizedProps,u[mi]=i,(g=u.nodeValue!==o)&&(n=kn,n!==null))switch(n.tag){case 3:Ta(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ta(u.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[mi]=i,i.stateNode=u}return pn(i),null;case 13:if(kt(Ht),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Bn!==null&&i.mode&1&&!(i.flags&128))Mh(),ys(),i.flags|=98560,g=!1;else if(g=Da(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[mi]=i}else ys(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;pn(i),g=!1}else ti!==null&&(xc(ti),ti=null),g=!0;if(!g)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||Ht.current&1?Jt===0&&(Jt=3):Ec())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return Ts(),lc(n,i),n===null&&yo(i.stateNode.containerInfo),pn(i),null;case 10:return Fu(i.type._context),pn(i),null;case 17:return Cn(i.type)&&Ca(),pn(i),null;case 19:if(kt(Ht),g=i.memoizedState,g===null)return pn(i),null;if(u=(i.flags&128)!==0,M=g.rendering,M===null)if(u)Do(g,!1);else{if(Jt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(M=ka(n),M!==null){for(i.flags|=128,Do(g,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)g=o,n=u,g.flags&=14680066,M=g.alternate,M===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=M.childLanes,g.lanes=M.lanes,g.child=M.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=M.memoizedProps,g.memoizedState=M.memoizedState,g.updateQueue=M.updateQueue,g.type=M.type,n=M.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Nt(Ht,Ht.current&1|2),i.child}n=n.sibling}g.tail!==null&&G()>Rs&&(i.flags|=128,u=!0,Do(g,!1),i.lanes=4194304)}else{if(!u)if(n=ka(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Do(g,!0),g.tail===null&&g.tailMode==="hidden"&&!M.alternate&&!zt)return pn(i),null}else 2*G()-g.renderingStartTime>Rs&&o!==1073741824&&(i.flags|=128,u=!0,Do(g,!1),i.lanes=4194304);g.isBackwards?(M.sibling=i.child,i.child=M):(o=g.last,o!==null?o.sibling=M:i.child=M,g.last=M)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=G(),i.sibling=null,o=Ht.current,Nt(Ht,u?o&1|2:o&1),i):(pn(i),null);case 22:case 23:return Sc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?zn&1073741824&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function v_(n,i){switch(bu(i),i.tag){case 1:return Cn(i.type)&&Ca(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ts(),kt(An),kt(dn),Gu(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Hu(i),null;case 13:if(kt(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ys()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return kt(Ht),null;case 4:return Ts(),null;case 10:return Fu(i.type._context),null;case 22:case 23:return Sc(),null;case 24:return null;default:return null}}var qa=!1,mn=!1,__=typeof WeakSet=="function"?WeakSet:Set,Be=null;function As(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){jt(n,i,u)}else o.current=null}function uc(n,i,o){try{o()}catch(u){jt(n,i,u)}}var Sp=!1;function x_(n,i){if(Su=ha,n=Jd(),hu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var M=0,U=-1,B=-1,te=0,xe=0,Ee=n,ve=null;t:for(;;){for(var Ie;Ee!==o||d!==0&&Ee.nodeType!==3||(U=M+d),Ee!==g||u!==0&&Ee.nodeType!==3||(B=M+u),Ee.nodeType===3&&(M+=Ee.nodeValue.length),(Ie=Ee.firstChild)!==null;)ve=Ee,Ee=Ie;for(;;){if(Ee===n)break t;if(ve===o&&++te===d&&(U=M),ve===g&&++xe===u&&(B=M),(Ie=Ee.nextSibling)!==null)break;Ee=ve,ve=Ee.parentNode}Ee=Ie}o=U===-1||B===-1?null:{start:U,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(Eu={focusedElem:n,selectionRange:o},ha=!1,Be=i;Be!==null;)if(i=Be,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Be=n;else for(;Be!==null;){i=Be;try{var Ve=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var We=Ve.memoizedProps,$t=Ve.memoizedState,q=i.stateNode,W=q.getSnapshotBeforeUpdate(i.elementType===i.type?We:ni(i.type,We),$t);q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){jt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Be=n;break}Be=i.return}return Ve=Sp,Sp=!1,Ve}function Uo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&uc(i,o,g)}d=d.next}while(d!==u)}}function $a(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function cc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Ep(n){var i=n.alternate;i!==null&&(n.alternate=null,Ep(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[mi],delete i[Eo],delete i[Au],delete i[t_],delete i[n_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Mp(n){return n.tag===5||n.tag===3||n.tag===4}function Tp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Mp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function fc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=wa));else if(u!==4&&(n=n.child,n!==null))for(fc(n,i,o),n=n.sibling;n!==null;)fc(n,i,o),n=n.sibling}function dc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(dc(n,i,o),n=n.sibling;n!==null;)dc(n,i,o),n=n.sibling}var ln=null,ii=!1;function ur(n,i,o){for(o=o.child;o!==null;)wp(n,i,o),o=o.sibling}function wp(n,i,o){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount($e,o)}catch{}switch(o.tag){case 5:mn||As(o,i);case 6:var u=ln,d=ii;ln=null,ur(n,i,o),ln=u,ii=d,ln!==null&&(ii?(n=ln,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):ln.removeChild(o.stateNode));break;case 18:ln!==null&&(ii?(n=ln,o=o.stateNode,n.nodeType===8?wu(n.parentNode,o):n.nodeType===1&&wu(n,o),co(n)):wu(ln,o.stateNode));break;case 4:u=ln,d=ii,ln=o.stateNode.containerInfo,ii=!0,ur(n,i,o),ln=u,ii=d;break;case 0:case 11:case 14:case 15:if(!mn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var g=d,M=g.destroy;g=g.tag,M!==void 0&&(g&2||g&4)&&uc(o,i,M),d=d.next}while(d!==u)}ur(n,i,o);break;case 1:if(!mn&&(As(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(U){jt(o,i,U)}ur(n,i,o);break;case 21:ur(n,i,o);break;case 22:o.mode&1?(mn=(u=mn)||o.memoizedState!==null,ur(n,i,o),mn=u):ur(n,i,o);break;default:ur(n,i,o)}}function Ap(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new __),i.forEach(function(u){var d=R_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ri(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var g=n,M=i,U=M;e:for(;U!==null;){switch(U.tag){case 5:ln=U.stateNode,ii=!1;break e;case 3:ln=U.stateNode.containerInfo,ii=!0;break e;case 4:ln=U.stateNode.containerInfo,ii=!0;break e}U=U.return}if(ln===null)throw Error(t(160));wp(g,M,d),ln=null,ii=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(te){jt(d,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Cp(i,n),i=i.sibling}function Cp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ri(i,n),_i(n),u&4){try{Uo(3,n,n.return),$a(3,n)}catch(We){jt(n,n.return,We)}try{Uo(5,n,n.return)}catch(We){jt(n,n.return,We)}}break;case 1:ri(i,n),_i(n),u&512&&o!==null&&As(o,o.return);break;case 5:if(ri(i,n),_i(n),u&512&&o!==null&&As(o,o.return),n.flags&32){var d=n.stateNode;try{ct(d,"")}catch(We){jt(n,n.return,We)}}if(u&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,M=o!==null?o.memoizedProps:g,U=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&pt(d,g),st(U,M);var te=st(U,g);for(M=0;M<B.length;M+=2){var xe=B[M],Ee=B[M+1];xe==="style"?tt(d,Ee):xe==="dangerouslySetInnerHTML"?Oe(d,Ee):xe==="children"?ct(d,Ee):L(d,xe,Ee,te)}switch(U){case"input":ft(d,g);break;case"textarea":ge(d,g);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Ie=g.value;Ie!=null?D(d,!!g.multiple,Ie,!1):ve!==!!g.multiple&&(g.defaultValue!=null?D(d,!!g.multiple,g.defaultValue,!0):D(d,!!g.multiple,g.multiple?[]:"",!1))}d[Eo]=g}catch(We){jt(n,n.return,We)}}break;case 6:if(ri(i,n),_i(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(We){jt(n,n.return,We)}}break;case 3:if(ri(i,n),_i(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{co(i.containerInfo)}catch(We){jt(n,n.return,We)}break;case 4:ri(i,n),_i(n);break;case 13:ri(i,n),_i(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(mc=G())),u&4&&Ap(n);break;case 22:if(xe=o!==null&&o.memoizedState!==null,n.mode&1?(mn=(te=mn)||xe,ri(i,n),mn=te):ri(i,n),_i(n),u&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!xe&&n.mode&1)for(Be=n,xe=n.child;xe!==null;){for(Ee=Be=xe;Be!==null;){switch(ve=Be,Ie=ve.child,ve.tag){case 0:case 11:case 14:case 15:Uo(4,ve,ve.return);break;case 1:As(ve,ve.return);var Ve=ve.stateNode;if(typeof Ve.componentWillUnmount=="function"){u=ve,o=ve.return;try{i=u,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(We){jt(u,o,We)}}break;case 5:As(ve,ve.return);break;case 22:if(ve.memoizedState!==null){bp(Ee);continue}}Ie!==null?(Ie.return=ve,Be=Ie):bp(Ee)}xe=xe.sibling}e:for(xe=null,Ee=n;;){if(Ee.tag===5){if(xe===null){xe=Ee;try{d=Ee.stateNode,te?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=Ee.stateNode,B=Ee.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=Ze("display",M))}catch(We){jt(n,n.return,We)}}}else if(Ee.tag===6){if(xe===null)try{Ee.stateNode.nodeValue=te?"":Ee.memoizedProps}catch(We){jt(n,n.return,We)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;xe===Ee&&(xe=null),Ee=Ee.return}xe===Ee&&(xe=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:ri(i,n),_i(n),u&4&&Ap(n);break;case 21:break;default:ri(i,n),_i(n)}}function _i(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Mp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ct(d,""),u.flags&=-33);var g=Tp(n);dc(n,g,d);break;case 3:case 4:var M=u.stateNode.containerInfo,U=Tp(n);fc(n,U,M);break;default:throw Error(t(161))}}catch(B){jt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function y_(n,i,o){Be=n,Rp(n)}function Rp(n,i,o){for(var u=(n.mode&1)!==0;Be!==null;){var d=Be,g=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||qa;if(!M){var U=d.alternate,B=U!==null&&U.memoizedState!==null||mn;U=qa;var te=mn;if(qa=M,(mn=B)&&!te)for(Be=d;Be!==null;)M=Be,B=M.child,M.tag===22&&M.memoizedState!==null?Lp(d):B!==null?(B.return=M,Be=B):Lp(d);for(;g!==null;)Be=g,Rp(g),g=g.sibling;Be=d,qa=U,mn=te}Pp(n)}else d.subtreeFlags&8772&&g!==null?(g.return=d,Be=g):Pp(n)}}function Pp(n){for(;Be!==null;){var i=Be;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:mn||$a(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!mn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ni(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&bh(i,g,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}bh(i,M,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var xe=te.memoizedState;if(xe!==null){var Ee=xe.dehydrated;Ee!==null&&co(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||i.flags&512&&cc(i)}catch(ve){jt(i,i.return,ve)}}if(i===n){Be=null;break}if(o=i.sibling,o!==null){o.return=i.return,Be=o;break}Be=i.return}}function bp(n){for(;Be!==null;){var i=Be;if(i===n){Be=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Be=o;break}Be=i.return}}function Lp(n){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{$a(4,i)}catch(B){jt(i,o,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(B){jt(i,d,B)}}var g=i.return;try{cc(i)}catch(B){jt(i,g,B)}break;case 5:var M=i.return;try{cc(i)}catch(B){jt(i,M,B)}}}catch(B){jt(i,i.return,B)}if(i===n){Be=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Be=U;break}Be=i.return}}var S_=Math.ceil,Ya=P.ReactCurrentDispatcher,hc=P.ReactCurrentOwner,Kn=P.ReactCurrentBatchConfig,St=0,rn=null,Yt=null,un=0,zn=0,Cs=rr(0),Jt=0,Io=null,Br=0,Ka=0,pc=0,No=null,Pn=null,mc=0,Rs=1/0,Ui=null,Za=!1,gc=null,cr=null,Qa=!1,fr=null,Ja=0,Fo=0,vc=null,el=-1,tl=0;function Mn(){return St&6?G():el!==-1?el:el=G()}function dr(n){return n.mode&1?St&2&&un!==0?un&-un:r_.transition!==null?(tl===0&&(tl=Sn()),tl):(n=mt,n!==0||(n=window.event,n=n===void 0?16:Ud(n.type)),n):1}function si(n,i,o,u){if(50<Fo)throw Fo=0,vc=null,Error(t(185));qt(n,o,u),(!(St&2)||n!==rn)&&(n===rn&&(!(St&2)&&(Ka|=o),Jt===4&&hr(n,un)),bn(n,u),o===1&&St===0&&!(i.mode&1)&&(Rs=G()+500,Pa&&or()))}function bn(n,i){var o=n.callbackNode;br(n,i);var u=Jn(n,n===rn?un:0);if(u===0)o!==null&&j(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&j(o),i===1)n.tag===0?i_(Up.bind(null,n)):_h(Up.bind(null,n)),Jv(function(){!(St&6)&&or()}),o=null;else{switch(wd(u)){case 1:o=Pe;break;case 4:o=Ne;break;case 16:o=ke;break;case 536870912:o=it;break;default:o=ke}o=Hp(o,Dp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Dp(n,i){if(el=-1,tl=0,St&6)throw Error(t(327));var o=n.callbackNode;if(Ps()&&n.callbackNode!==o)return null;var u=Jn(n,n===rn?un:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=nl(n,u);else{i=u;var d=St;St|=2;var g=Np();(rn!==n||un!==i)&&(Ui=null,Rs=G()+500,Hr(n,i));do try{T_();break}catch(U){Ip(n,U)}while(!0);Nu(),Ya.current=g,St=d,Yt!==null?i=0:(rn=null,un=0,i=Jt)}if(i!==0){if(i===2&&(d=Lt(n),d!==0&&(u=d,i=_c(n,d))),i===1)throw o=Io,Hr(n,0),hr(n,u),bn(n,G()),o;if(i===6)hr(n,u);else{if(d=n.current.alternate,!(u&30)&&!E_(d)&&(i=nl(n,u),i===2&&(g=Lt(n),g!==0&&(u=g,i=_c(n,g))),i===1))throw o=Io,Hr(n,0),hr(n,u),bn(n,G()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Vr(n,Pn,Ui);break;case 3:if(hr(n,u),(u&130023424)===u&&(i=mc+500-G(),10<i)){if(Jn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Mn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Tu(Vr.bind(null,n,Pn,Ui),i);break}Vr(n,Pn,Ui);break;case 4:if(hr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-Tt(u);g=1<<M,M=i[M],M>d&&(d=M),u&=~g}if(u=d,u=G()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*S_(u/1960))-u,10<u){n.timeoutHandle=Tu(Vr.bind(null,n,Pn,Ui),u);break}Vr(n,Pn,Ui);break;case 5:Vr(n,Pn,Ui);break;default:throw Error(t(329))}}}return bn(n,G()),n.callbackNode===o?Dp.bind(null,n):null}function _c(n,i){var o=No;return n.current.memoizedState.isDehydrated&&(Hr(n,i).flags|=256),n=nl(n,i),n!==2&&(i=Pn,Pn=o,i!==null&&xc(i)),n}function xc(n){Pn===null?Pn=n:Pn.push.apply(Pn,n)}function E_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],g=d.getSnapshot;d=d.value;try{if(!ei(g(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(n,i){for(i&=~pc,i&=~Ka,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Tt(i),u=1<<o;n[o]=-1,i&=~u}}function Up(n){if(St&6)throw Error(t(327));Ps();var i=Jn(n,0);if(!(i&1))return bn(n,G()),null;var o=nl(n,i);if(n.tag!==0&&o===2){var u=Lt(n);u!==0&&(i=u,o=_c(n,u))}if(o===1)throw o=Io,Hr(n,0),hr(n,i),bn(n,G()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Vr(n,Pn,Ui),bn(n,G()),null}function yc(n,i){var o=St;St|=1;try{return n(i)}finally{St=o,St===0&&(Rs=G()+500,Pa&&or())}}function zr(n){fr!==null&&fr.tag===0&&!(St&6)&&Ps();var i=St;St|=1;var o=Kn.transition,u=mt;try{if(Kn.transition=null,mt=1,n)return n()}finally{mt=u,Kn.transition=o,St=i,!(St&6)&&or()}}function Sc(){zn=Cs.current,kt(Cs)}function Hr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Qv(o)),Yt!==null)for(o=Yt.return;o!==null;){var u=o;switch(bu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ca();break;case 3:Ts(),kt(An),kt(dn),Gu();break;case 5:Hu(u);break;case 4:Ts();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:Fu(u.type._context);break;case 22:case 23:Sc()}o=o.return}if(rn=n,Yt=n=pr(n.current,null),un=zn=i,Jt=0,Io=null,pc=Ka=Br=0,Pn=No=null,Fr!==null){for(i=0;i<Fr.length;i++)if(o=Fr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,g=o.pending;if(g!==null){var M=g.next;g.next=d,u.next=M}o.pending=u}Fr=null}return n}function Ip(n,i){do{var o=Yt;try{if(Nu(),Ba.current=Ga,za){for(var u=Vt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}za=!1}if(kr=0,nn=Qt=Vt=null,Ro=!1,Po=0,hc.current=null,o===null||o.return===null){Jt=1,Io=i,Yt=null;break}e:{var g=n,M=o.return,U=o,B=i;if(i=un,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var te=B,xe=U,Ee=xe.tag;if(!(xe.mode&1)&&(Ee===0||Ee===11||Ee===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ie=sp(M);if(Ie!==null){Ie.flags&=-257,op(Ie,M,U,g,i),Ie.mode&1&&rp(g,te,i),i=Ie,B=te;var Ve=i.updateQueue;if(Ve===null){var We=new Set;We.add(B),i.updateQueue=We}else Ve.add(B);break e}else{if(!(i&1)){rp(g,te,i),Ec();break e}B=Error(t(426))}}else if(zt&&U.mode&1){var $t=sp(M);if($t!==null){!($t.flags&65536)&&($t.flags|=256),op($t,M,U,g,i),Uu(ws(B,U));break e}}g=B=ws(B,U),Jt!==4&&(Jt=2),No===null?No=[g]:No.push(g),g=M;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var q=np(g,B,i);Ph(g,q);break e;case 1:U=B;var W=g.type,$=g.stateNode;if(!(g.flags&128)&&(typeof W.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(cr===null||!cr.has($)))){g.flags|=65536,i&=-i,g.lanes|=i;var we=ip(g,U,i);Ph(g,we);break e}}g=g.return}while(g!==null)}Op(o)}catch(je){i=je,Yt===o&&o!==null&&(Yt=o=o.return);continue}break}while(!0)}function Np(){var n=Ya.current;return Ya.current=Ga,n===null?Ga:n}function Ec(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),rn===null||!(Br&268435455)&&!(Ka&268435455)||hr(rn,un)}function nl(n,i){var o=St;St|=2;var u=Np();(rn!==n||un!==i)&&(Ui=null,Hr(n,i));do try{M_();break}catch(d){Ip(n,d)}while(!0);if(Nu(),St=o,Ya.current=u,Yt!==null)throw Error(t(261));return rn=null,un=0,Jt}function M_(){for(;Yt!==null;)Fp(Yt)}function T_(){for(;Yt!==null&&!ne();)Fp(Yt)}function Fp(n){var i=zp(n.alternate,n,zn);n.memoizedProps=n.pendingProps,i===null?Op(n):Yt=i,hc.current=null}function Op(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=v_(o,i),o!==null){o.flags&=32767,Yt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,Yt=null;return}}else if(o=g_(o,i,zn),o!==null){Yt=o;return}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=n}while(i!==null);Jt===0&&(Jt=5)}function Vr(n,i,o){var u=mt,d=Kn.transition;try{Kn.transition=null,mt=1,w_(n,i,o,u)}finally{Kn.transition=d,mt=u}return null}function w_(n,i,o,u){do Ps();while(fr!==null);if(St&6)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(fn(n,g),n===rn&&(Yt=rn=null,un=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Qa||(Qa=!0,Hp(ke,function(){return Ps(),null})),g=(o.flags&15990)!==0,o.subtreeFlags&15990||g){g=Kn.transition,Kn.transition=null;var M=mt;mt=1;var U=St;St|=4,hc.current=null,x_(n,o),Cp(o,n),Xv(Eu),ha=!!Su,Eu=Su=null,n.current=o,y_(o),se(),St=U,mt=M,Kn.transition=g}else n.current=o;if(Qa&&(Qa=!1,fr=n,Ja=d),g=n.pendingLanes,g===0&&(cr=null),Mt(o.stateNode),bn(n,G()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Za)throw Za=!1,n=gc,gc=null,n;return Ja&1&&n.tag!==0&&Ps(),g=n.pendingLanes,g&1?n===vc?Fo++:(Fo=0,vc=n):Fo=0,or(),null}function Ps(){if(fr!==null){var n=wd(Ja),i=Kn.transition,o=mt;try{if(Kn.transition=null,mt=16>n?16:n,fr===null)var u=!1;else{if(n=fr,fr=null,Ja=0,St&6)throw Error(t(331));var d=St;for(St|=4,Be=n.current;Be!==null;){var g=Be,M=g.child;if(Be.flags&16){var U=g.deletions;if(U!==null){for(var B=0;B<U.length;B++){var te=U[B];for(Be=te;Be!==null;){var xe=Be;switch(xe.tag){case 0:case 11:case 15:Uo(8,xe,g)}var Ee=xe.child;if(Ee!==null)Ee.return=xe,Be=Ee;else for(;Be!==null;){xe=Be;var ve=xe.sibling,Ie=xe.return;if(Ep(xe),xe===te){Be=null;break}if(ve!==null){ve.return=Ie,Be=ve;break}Be=Ie}}}var Ve=g.alternate;if(Ve!==null){var We=Ve.child;if(We!==null){Ve.child=null;do{var $t=We.sibling;We.sibling=null,We=$t}while(We!==null)}}Be=g}}if(g.subtreeFlags&2064&&M!==null)M.return=g,Be=M;else e:for(;Be!==null;){if(g=Be,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Uo(9,g,g.return)}var q=g.sibling;if(q!==null){q.return=g.return,Be=q;break e}Be=g.return}}var W=n.current;for(Be=W;Be!==null;){M=Be;var $=M.child;if(M.subtreeFlags&2064&&$!==null)$.return=M,Be=$;else e:for(M=W;Be!==null;){if(U=Be,U.flags&2048)try{switch(U.tag){case 0:case 11:case 15:$a(9,U)}}catch(je){jt(U,U.return,je)}if(U===M){Be=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,Be=we;break e}Be=U.return}}if(St=d,or(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot($e,n)}catch{}u=!0}return u}finally{mt=o,Kn.transition=i}}return!1}function kp(n,i,o){i=ws(o,i),i=np(n,i,1),n=lr(n,i,1),i=Mn(),n!==null&&(qt(n,1,i),bn(n,i))}function jt(n,i,o){if(n.tag===3)kp(n,n,o);else for(;i!==null;){if(i.tag===3){kp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(cr===null||!cr.has(u))){n=ws(o,n),n=ip(i,n,1),i=lr(i,n,1),n=Mn(),i!==null&&(qt(i,1,n),bn(i,n));break}}i=i.return}}function A_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&o,rn===n&&(un&o)===o&&(Jt===4||Jt===3&&(un&130023424)===un&&500>G()-mc?Hr(n,0):pc|=o),bn(n,i)}function Bp(n,i){i===0&&(n.mode&1?(i=vt,vt<<=1,!(vt&130023424)&&(vt=4194304)):i=1);var o=Mn();n=bi(n,i),n!==null&&(qt(n,i,o),bn(n,o))}function C_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Bp(n,o)}function R_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Bp(n,o)}var zp;zp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||An.current)Rn=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return Rn=!1,m_(n,i,o);Rn=!!(n.flags&131072)}else Rn=!1,zt&&i.flags&1048576&&xh(i,La,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ja(n,i),n=i.pendingProps;var d=vs(i,dn.current);Ms(i,o),d=ju(null,i,u,n,d,o);var g=qu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(u)?(g=!0,Ra(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Bu(i),d.updater=Wa,i.stateNode=d,d._reactInternals=i,Ju(i,u,n,o),i=ic(null,i,u,!0,g,o)):(i.tag=0,zt&&g&&Pu(i),En(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ja(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=b_(u),n=ni(u,n),d){case 0:i=nc(null,i,u,n,o);break e;case 1:i=dp(null,i,u,n,o);break e;case 11:i=ap(null,i,u,n,o);break e;case 14:i=lp(null,i,u,ni(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ni(u,d),nc(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ni(u,d),dp(n,i,u,d,o);case 3:e:{if(hp(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,d=g.element,Rh(n,i),Oa(i,u,null,o);var M=i.memoizedState;if(u=M.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=ws(Error(t(423)),i),i=pp(n,i,u,o,d);break e}else if(u!==d){d=ws(Error(t(424)),i),i=pp(n,i,u,o,d);break e}else for(Bn=ir(i.stateNode.containerInfo.firstChild),kn=i,zt=!0,ti=null,o=Ah(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ys(),u===d){i=Di(n,i,o);break e}En(n,i,u,o)}i=i.child}return i;case 5:return Lh(i),n===null&&Du(i),u=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,M=d.children,Mu(u,d)?M=null:g!==null&&Mu(u,g)&&(i.flags|=32),fp(n,i),En(n,i,M,o),i.child;case 6:return n===null&&Du(i),null;case 13:return mp(n,i,o);case 4:return zu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ss(i,null,u,o):En(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ni(u,d),ap(n,i,u,d,o);case 7:return En(n,i,i.pendingProps,o),i.child;case 8:return En(n,i,i.pendingProps.children,o),i.child;case 12:return En(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,g=i.memoizedProps,M=d.value,Nt(Ia,u._currentValue),u._currentValue=M,g!==null)if(ei(g.value,M)){if(g.children===d.children&&!An.current){i=Di(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var U=g.dependencies;if(U!==null){M=g.child;for(var B=U.firstContext;B!==null;){if(B.context===u){if(g.tag===1){B=Li(-1,o&-o),B.tag=2;var te=g.updateQueue;if(te!==null){te=te.shared;var xe=te.pending;xe===null?B.next=B:(B.next=xe.next,xe.next=B),te.pending=B}}g.lanes|=o,B=g.alternate,B!==null&&(B.lanes|=o),Ou(g.return,o,i),U.lanes|=o;break}B=B.next}}else if(g.tag===10)M=g.type===i.type?null:g.child;else if(g.tag===18){if(M=g.return,M===null)throw Error(t(341));M.lanes|=o,U=M.alternate,U!==null&&(U.lanes|=o),Ou(M,o,i),M=g.sibling}else M=g.child;if(M!==null)M.return=g;else for(M=g;M!==null;){if(M===i){M=null;break}if(g=M.sibling,g!==null){g.return=M.return,M=g;break}M=M.return}g=M}En(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ms(i,o),d=$n(d),u=u(d),i.flags|=1,En(n,i,u,o),i.child;case 14:return u=i.type,d=ni(u,i.pendingProps),d=ni(u.type,d),lp(n,i,u,d,o);case 15:return up(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ni(u,d),ja(n,i),i.tag=1,Cn(u)?(n=!0,Ra(i)):n=!1,Ms(i,o),ep(i,u,d),Ju(i,u,d,o),ic(null,i,u,!0,n,o);case 19:return vp(n,i,o);case 22:return cp(n,i,o)}throw Error(t(156,i.tag))};function Hp(n,i){return A(n,i)}function P_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,i,o,u){return new P_(n,i,o,u)}function Mc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function b_(n){if(typeof n=="function")return Mc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===ue)return 14}return 2}function pr(n,i){var o=n.alternate;return o===null?(o=Zn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function il(n,i,o,u,d,g){var M=2;if(u=n,typeof n=="function")Mc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case I:return Gr(o.children,d,g,i);case V:M=8,d|=8;break;case R:return n=Zn(12,o,i,d|2),n.elementType=R,n.lanes=g,n;case J:return n=Zn(13,o,i,d),n.elementType=J,n.lanes=g,n;case oe:return n=Zn(19,o,i,d),n.elementType=oe,n.lanes=g,n;case ce:return rl(o,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:M=10;break e;case O:M=9;break e;case ee:M=11;break e;case ue:M=14;break e;case ie:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Zn(M,o,i,d),i.elementType=n,i.type=u,i.lanes=g,i}function Gr(n,i,o,u){return n=Zn(7,n,u,i),n.lanes=o,n}function rl(n,i,o,u){return n=Zn(22,n,u,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function Tc(n,i,o){return n=Zn(6,n,null,i),n.lanes=o,n}function wc(n,i,o){return i=Zn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function L_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cn(0),this.expirationTimes=cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ac(n,i,o,u,d,g,M,U,B){return n=new L_(n,i,o,U,B),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Zn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bu(g),n}function D_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Vp(n){if(!n)return sr;n=n._reactInternals;e:{if(pi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Cn(o))return gh(n,o,i)}return i}function Gp(n,i,o,u,d,g,M,U,B){return n=Ac(o,u,!0,n,d,g,M,U,B),n.context=Vp(null),o=n.current,u=Mn(),d=dr(o),g=Li(u,d),g.callback=i??null,lr(o,g,d),n.current.lanes=d,qt(n,d,u),bn(n,u),n}function sl(n,i,o,u){var d=i.current,g=Mn(),M=dr(d);return o=Vp(o),i.context===null?i.context=o:i.pendingContext=o,i=Li(g,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=lr(d,i,M),n!==null&&(si(n,d,M,g),Fa(n,d,M)),M}function ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Wp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Cc(n,i){Wp(n,i),(n=n.alternate)&&Wp(n,i)}function U_(){return null}var Xp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Rc(n){this._internalRoot=n}al.prototype.render=Rc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));sl(n,i,null,null)},al.prototype.unmount=Rc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zr(function(){sl(null,n,null,null)}),i[Ai]=null}};function al(n){this._internalRoot=n}al.prototype.unstable_scheduleHydration=function(n){if(n){var i=Rd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<er.length&&i!==0&&i<er[o].priority;o++);er.splice(o,0,n),o===0&&Ld(n)}};function Pc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ll(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jp(){}function I_(n,i,o,u,d){if(d){if(typeof u=="function"){var g=u;u=function(){var te=ol(M);g.call(te)}}var M=Gp(i,u,n,0,null,!1,!1,"",jp);return n._reactRootContainer=M,n[Ai]=M.current,yo(n.nodeType===8?n.parentNode:n),zr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var U=u;u=function(){var te=ol(B);U.call(te)}}var B=Ac(n,0,!1,null,null,!1,!1,"",jp);return n._reactRootContainer=B,n[Ai]=B.current,yo(n.nodeType===8?n.parentNode:n),zr(function(){sl(i,B,o,u)}),B}function ul(n,i,o,u,d){var g=o._reactRootContainer;if(g){var M=g;if(typeof d=="function"){var U=d;d=function(){var B=ol(M);U.call(B)}}sl(i,M,n,d)}else M=I_(o,i,n,d,u);return ol(M)}Ad=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=an(i.pendingLanes);o!==0&&(Lr(i,o|1),bn(i,G()),!(St&6)&&(Rs=G()+500,or()))}break;case 13:zr(function(){var u=bi(n,1);if(u!==null){var d=Mn();si(u,n,1,d)}}),Cc(n,1)}},eu=function(n){if(n.tag===13){var i=bi(n,134217728);if(i!==null){var o=Mn();si(i,n,134217728,o)}Cc(n,134217728)}},Cd=function(n){if(n.tag===13){var i=dr(n),o=bi(n,i);if(o!==null){var u=Mn();si(o,n,i,u)}Cc(n,i)}},Rd=function(){return mt},Pd=function(n,i){var o=mt;try{return mt=n,i()}finally{mt=o}},Re=function(n,i,o){switch(i){case"input":if(ft(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Aa(u);if(!d)throw Error(t(90));gt(u),ft(u,d)}}}break;case"textarea":ge(n,o);break;case"select":i=o.value,i!=null&&D(n,!!o.multiple,i,!1)}},Ft=yc,Zt=zr;var N_={usingClientEntryPoint:!1,Events:[Mo,ms,Aa,Le,ot,yc]},Oo={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F_={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ua(n),n===null?null:n.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||U_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{$e=cl.inject(F_),at=cl}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_,Ln.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pc(i))throw Error(t(200));return D_(n,i,null,o)},Ln.createRoot=function(n,i){if(!Pc(n))throw Error(t(299));var o=!1,u="",d=Xp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Ac(n,1,!1,null,null,o,!1,u,d),n[Ai]=i.current,yo(n.nodeType===8?n.parentNode:n),new Rc(i)},Ln.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ua(i),n=n===null?null:n.stateNode,n},Ln.flushSync=function(n){return zr(n)},Ln.hydrate=function(n,i,o){if(!ll(i))throw Error(t(200));return ul(null,n,i,!0,o)},Ln.hydrateRoot=function(n,i,o){if(!Pc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,g="",M=Xp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Gp(i,null,n,1,o??null,d,!1,g,M),n[Ai]=i.current,yo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new al(i)},Ln.render=function(n,i,o){if(!ll(i))throw Error(t(200));return ul(null,n,i,!1,o)},Ln.unmountComponentAtNode=function(n){if(!ll(n))throw Error(t(40));return n._reactRootContainer?(zr(function(){ul(null,null,n,!1,function(){n._reactRootContainer=null,n[Ai]=null})}),!0):!1},Ln.unstable_batchedUpdates=yc,Ln.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!ll(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ul(n,i,o,!1,u)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var tm;function j_(){if(tm)return Dc.exports;tm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Dc.exports=X_(),Dc.exports}var nm;function q_(){if(nm)return fl;nm=1;var r=j_();return fl.createRoot=r.createRoot,fl.hydrateRoot=r.hydrateRoot,fl}var $_=q_();const Y_=cg($_);var Bo={},im;function K_(){if(im)return Bo;im=1,Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.parse=c,Bo.serialize=h;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function c(v,S){const E=new l,T=v.length;if(T<2)return E;const y=(S==null?void 0:S.decode)||m;let _=0;do{const b=v.indexOf("=",_);if(b===-1)break;const L=v.indexOf(";",_),P=L===-1?T:L;if(b>P){_=v.lastIndexOf(";",b-1)+1;continue}const z=f(v,_,b),F=p(v,b,z),I=v.slice(z,F);if(E[I]===void 0){let V=f(v,b+1,P),R=p(v,P,V);const C=y(v.slice(V,R));E[I]=C}_=P+1}while(_<T);return E}function f(v,S,E){do{const T=v.charCodeAt(S);if(T!==32&&T!==9)return S}while(++S<E);return E}function p(v,S,E){for(;S>E;){const T=v.charCodeAt(--S);if(T!==32&&T!==9)return S+1}return E}function h(v,S,E){const T=(E==null?void 0:E.encode)||encodeURIComponent;if(!r.test(v))throw new TypeError(`argument name is invalid: ${v}`);const y=T(S);if(!e.test(y))throw new TypeError(`argument val is invalid: ${S}`);let _=v+"="+y;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!t.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!s.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function m(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return a.call(v)==="[object Date]"}return Bo}K_();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var rm="popstate";function Z_(r={}){function e(a,l){let{pathname:c="/",search:f="",hash:p=""}=rs(a.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),gf("",{pathname:c,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(a,l){let c=a.document.querySelector("base"),f="";if(c&&c.getAttribute("href")){let p=a.location.href,h=p.indexOf("#");f=h===-1?p:p.slice(0,h)}return f+"#"+(typeof l=="string"?l:$o(l))}function s(a,l){hi(a.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return J_(e,t,s,r)}function Gt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function hi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Q_(){return Math.random().toString(36).substring(2,10)}function sm(r,e){return{usr:r.state,key:r.key,idx:e}}function gf(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?rs(e):e,state:t,key:e&&e.key||s||Q_()}}function $o({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function rs(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function J_(r,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,f="POP",p=null,h=m();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function m(){return(c.state||{idx:null}).idx}function x(){f="POP";let y=m(),_=y==null?null:y-h;h=y,p&&p({action:f,location:T.location,delta:_})}function v(y,_){f="PUSH";let b=gf(T.location,y,_);t&&t(b,y),h=m()+1;let L=sm(b,h),P=T.createHref(b);try{c.pushState(L,"",P)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;a.location.assign(P)}l&&p&&p({action:f,location:T.location,delta:1})}function S(y,_){f="REPLACE";let b=gf(T.location,y,_);t&&t(b,y),h=m();let L=sm(b,h),P=T.createHref(b);c.replaceState(L,"",P),l&&p&&p({action:f,location:T.location,delta:0})}function E(y){let _=a.location.origin!=="null"?a.location.origin:a.location.href,b=typeof y=="string"?y:$o(y);return b=b.replace(/ $/,"%20"),Gt(_,`No window.location.(origin|href) available to create URL for href: ${b}`),new URL(b,_)}let T={get action(){return f},get location(){return r(a,c)},listen(y){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(rm,x),p=y,()=>{a.removeEventListener(rm,x),p=null}},createHref(y){return e(a,y)},createURL:E,encodeLocation(y){let _=E(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:S,go(y){return c.go(y)}};return T}function fg(r,e,t="/"){return e0(r,e,t,!1)}function e0(r,e,t,s){let a=typeof e=="string"?rs(e):e,l=wr(a.pathname||"/",t);if(l==null)return null;let c=dg(r);t0(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let h=d0(l);f=c0(c[p],h,s)}return f}function dg(r,e=[],t=[],s=""){let a=(l,c,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(Gt(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let h=Gi([s,p.relativePath]),m=t.concat(p);l.children&&l.children.length>0&&(Gt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),dg(l.children,e,m,h)),!(l.path==null&&!l.index)&&e.push({path:h,score:l0(h,l.index),routesMeta:m})};return r.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))a(l,c);else for(let p of hg(l.path))a(l,c,p)}),e}function hg(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=hg(s.join("/")),f=[];return f.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&f.push(...c),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function t0(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:u0(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var n0=/^:[\w-]+$/,i0=3,r0=2,s0=1,o0=10,a0=-2,om=r=>r==="*";function l0(r,e){let t=r.split("/"),s=t.length;return t.some(om)&&(s+=a0),e&&(s+=r0),t.filter(a=>!om(a)).reduce((a,l)=>a+(n0.test(l)?i0:l===""?s0:o0),s)}function u0(r,e){return r.length===e.length&&r.slice(0,-1).every((s,a)=>s===e[a])?r[r.length-1]-e[e.length-1]:0}function c0(r,e,t=!1){let{routesMeta:s}=r,a={},l="/",c=[];for(let f=0;f<s.length;++f){let p=s[f],h=f===s.length-1,m=l==="/"?e:e.slice(l.length)||"/",x=Gl({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},m),v=p.route;if(!x&&h&&t&&!s[s.length-1].route.index&&(x=Gl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},m)),!x)return null;Object.assign(a,x.params),c.push({params:a,pathname:Gi([l,x.pathname]),pathnameBase:g0(Gi([l,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(l=Gi([l,x.pathnameBase]))}return c}function Gl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=f0(r.path,r.caseSensitive,r.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:s.reduce((h,{paramName:m,isOptional:x},v)=>{if(m==="*"){let E=f[v]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[v];return x&&!S?h[m]=void 0:h[m]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:c,pattern:r}}function f0(r,e=!1,t=!0){hi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function d0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hi(!1,`The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function wr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function h0(r,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof r=="string"?rs(r):r;return{pathname:t?t.startsWith("/")?t:p0(t,e):e,search:v0(s),hash:_0(a)}}function p0(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Nc(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function m0(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function pg(r){let e=m0(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function mg(r,e,t,s=!1){let a;typeof r=="string"?a=rs(r):(a={...r},Gt(!a.pathname||!a.pathname.includes("?"),Nc("?","pathname","search",a)),Gt(!a.pathname||!a.pathname.includes("#"),Nc("#","pathname","hash",a)),Gt(!a.search||!a.search.includes("#"),Nc("#","search","hash",a)));let l=r===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let x=e.length-1;if(!s&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),x-=1;a.pathname=v.join("/")}f=x>=0?e[x]:"/"}let p=h0(a,f),h=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(h||m)&&(p.pathname+="/"),p}var Gi=r=>r.join("/").replace(/\/\/+/g,"/"),g0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),v0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,_0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function x0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var gg=["POST","PUT","PATCH","DELETE"];new Set(gg);var y0=["GET",...gg];new Set(y0);var io=he.createContext(null);io.displayName="DataRouter";var $l=he.createContext(null);$l.displayName="DataRouterState";var vg=he.createContext({isTransitioning:!1});vg.displayName="ViewTransition";var S0=he.createContext(new Map);S0.displayName="Fetchers";var E0=he.createContext(null);E0.displayName="Await";var Mi=he.createContext(null);Mi.displayName="Navigation";var Ko=he.createContext(null);Ko.displayName="Location";var $i=he.createContext({outlet:null,matches:[],isDataRoute:!1});$i.displayName="Route";var ld=he.createContext(null);ld.displayName="RouteError";function M0(r,{relative:e}={}){Gt(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=he.useContext(Mi),{hash:a,pathname:l,search:c}=Qo(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Gi([t,l])),s.createHref({pathname:f,search:c,hash:a})}function Zo(){return he.useContext(Ko)!=null}function ss(){return Gt(Zo(),"useLocation() may be used only in the context of a <Router> component."),he.useContext(Ko).location}var _g="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xg(r){he.useContext(Mi).static||he.useLayoutEffect(r)}function T0(){let{isDataRoute:r}=he.useContext($i);return r?O0():w0()}function w0(){Gt(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let r=he.useContext(io),{basename:e,navigator:t}=he.useContext(Mi),{matches:s}=he.useContext($i),{pathname:a}=ss(),l=JSON.stringify(pg(s)),c=he.useRef(!1);return xg(()=>{c.current=!0}),he.useCallback((p,h={})=>{if(hi(c.current,_g),!c.current)return;if(typeof p=="number"){t.go(p);return}let m=mg(p,JSON.parse(l),a,h.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Gi([e,m.pathname])),(h.replace?t.replace:t.push)(m,h.state,h)},[e,t,l,a,r])}he.createContext(null);function Qo(r,{relative:e}={}){let{matches:t}=he.useContext($i),{pathname:s}=ss(),a=JSON.stringify(pg(t));return he.useMemo(()=>mg(r,JSON.parse(a),s,e==="path"),[r,a,s,e])}function A0(r,e){return yg(r,e)}function yg(r,e,t,s){var _;Gt(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=he.useContext(Mi),{matches:l}=he.useContext($i),c=l[l.length-1],f=c?c.params:{},p=c?c.pathname:"/",h=c?c.pathnameBase:"/",m=c&&c.route;{let b=m&&m.path||"";Sg(p,!m||b.endsWith("*")||b.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b==="/"?"*":`${b}/*`}">.`)}let x=ss(),v;if(e){let b=typeof e=="string"?rs(e):e;Gt(h==="/"||((_=b.pathname)==null?void 0:_.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${b.pathname}" was given in the \`location\` prop.`),v=b}else v=x;let S=v.pathname||"/",E=S;if(h!=="/"){let b=h.replace(/^\//,"").split("/");E="/"+S.replace(/^\//,"").split("/").slice(b.length).join("/")}let T=fg(r,{pathname:E});hi(m||T!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),hi(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=L0(T&&T.map(b=>Object.assign({},b,{params:Object.assign({},f,b.params),pathname:Gi([h,a.encodeLocation?a.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?h:Gi([h,a.encodeLocation?a.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,t,s);return e&&y?he.createElement(Ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},y):y}function C0(){let r=F0(),e=x0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=he.createElement(he.Fragment,null,he.createElement("p",null,"💿 Hey developer 👋"),he.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",he.createElement("code",{style:l},"ErrorBoundary")," or"," ",he.createElement("code",{style:l},"errorElement")," prop on your route.")),he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),t?he.createElement("pre",{style:a},t):null,c)}var R0=he.createElement(C0,null),P0=class extends he.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?he.createElement($i.Provider,{value:this.props.routeContext},he.createElement(ld.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function b0({routeContext:r,match:e,children:t}){let s=he.useContext(io);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),he.createElement($i.Provider,{value:r},t)}function L0(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let a=r,l=t==null?void 0:t.errors;if(l!=null){let p=a.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);Gt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,f=-1;if(t)for(let p=0;p<a.length;p++){let h=a[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(f=p),h.route.id){let{loaderData:m,errors:x}=t,v=h.route.loader&&!m.hasOwnProperty(h.route.id)&&(!x||x[h.route.id]===void 0);if(h.route.lazy||v){c=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((p,h,m)=>{let x,v=!1,S=null,E=null;t&&(x=l&&h.route.id?l[h.route.id]:void 0,S=h.route.errorElement||R0,c&&(f<0&&m===0?(Sg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):f===m&&(v=!0,E=h.route.hydrateFallbackElement||null)));let T=e.concat(a.slice(0,m+1)),y=()=>{let _;return x?_=S:v?_=E:h.route.Component?_=he.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=p,he.createElement(b0,{match:h,routeContext:{outlet:p,matches:T,isDataRoute:t!=null},children:_})};return t&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?he.createElement(P0,{location:t.location,revalidation:t.revalidation,component:S,error:x,children:y(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):y()},null)}function ud(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function D0(r){let e=he.useContext(io);return Gt(e,ud(r)),e}function U0(r){let e=he.useContext($l);return Gt(e,ud(r)),e}function I0(r){let e=he.useContext($i);return Gt(e,ud(r)),e}function cd(r){let e=I0(r),t=e.matches[e.matches.length-1];return Gt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function N0(){return cd("useRouteId")}function F0(){var s;let r=he.useContext(ld),e=U0("useRouteError"),t=cd("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function O0(){let{router:r}=D0("useNavigate"),e=cd("useNavigate"),t=he.useRef(!1);return xg(()=>{t.current=!0}),he.useCallback(async(a,l={})=>{hi(t.current,_g),t.current&&(typeof a=="number"?r.navigate(a):await r.navigate(a,{fromRouteId:e,...l}))},[r,e])}var am={};function Sg(r,e,t){!e&&!am[r]&&(am[r]=!0,hi(!1,t))}he.memo(k0);function k0({routes:r,future:e,state:t}){return yg(r,void 0,t,e)}function vf(r){Gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function B0({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1}){Gt(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),f=he.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=rs(t));let{pathname:p="/",search:h="",hash:m="",state:x=null,key:v="default"}=t,S=he.useMemo(()=>{let E=wr(p,c);return E==null?null:{location:{pathname:E,search:h,hash:m,state:x,key:v},navigationType:s}},[c,p,h,m,x,v,s]);return hi(S!=null,`<Router basename="${c}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:he.createElement(Mi.Provider,{value:f},he.createElement(Ko.Provider,{children:e,value:S}))}function z0({children:r,location:e}){return A0(_f(r),e)}function _f(r,e=[]){let t=[];return he.Children.forEach(r,(s,a)=>{if(!he.isValidElement(s))return;let l=[...e,a];if(s.type===he.Fragment){t.push.apply(t,_f(s.props.children,l));return}Gt(s.type===vf,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Gt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=_f(s.props.children,l)),t.push(c)}),t}var Nl="get",Fl="application/x-www-form-urlencoded";function Yl(r){return r!=null&&typeof r.tagName=="string"}function H0(r){return Yl(r)&&r.tagName.toLowerCase()==="button"}function V0(r){return Yl(r)&&r.tagName.toLowerCase()==="form"}function G0(r){return Yl(r)&&r.tagName.toLowerCase()==="input"}function W0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function X0(r,e){return r.button===0&&(!e||e==="_self")&&!W0(r)}var dl=null;function j0(){if(dl===null)try{new FormData(document.createElement("form"),0),dl=!1}catch{dl=!0}return dl}var q0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fc(r){return r!=null&&!q0.has(r)?(hi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fl}"`),null):r}function $0(r,e){let t,s,a,l,c;if(V0(r)){let f=r.getAttribute("action");s=f?wr(f,e):null,t=r.getAttribute("method")||Nl,a=Fc(r.getAttribute("enctype"))||Fl,l=new FormData(r)}else if(H0(r)||G0(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||f.getAttribute("action");if(s=p?wr(p,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Nl,a=Fc(r.getAttribute("formenctype"))||Fc(f.getAttribute("enctype"))||Fl,l=new FormData(f,r),!j0()){let{name:h,type:m,value:x}=r;if(m==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,x)}}else{if(Yl(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Nl,s=null,a=Fl,c=r}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}function fd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function Y0(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function K0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Z0(r,e,t){let s=await Promise.all(r.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await Y0(l,t);return c.links?c.links():[]}return[]}));return tx(s.flat(1).filter(K0).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function lm(r,e,t,s,a,l){let c=(p,h)=>t[h]?p.route.id!==t[h].route.id:!0,f=(p,h)=>{var m;return t[h].pathname!==p.pathname||((m=t[h].route.path)==null?void 0:m.endsWith("*"))&&t[h].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,h)=>c(p,h)||f(p,h)):l==="data"?e.filter((p,h)=>{var x;let m=s.routes[p.route.id];if(!m||!m.hasLoader)return!1;if(c(p,h)||f(p,h))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=t[0])==null?void 0:x.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Q0(r,e){return J0(r.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let a=[s.module];return s.imports&&(a=a.concat(s.imports)),a}).flat(1))}function J0(r){return[...new Set(r)]}function ex(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function tx(r,e){let t=new Set;return new Set(e),r.reduce((s,a)=>{let l=JSON.stringify(ex(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}function nx(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function ix(){let r=he.useContext(io);return fd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function rx(){let r=he.useContext($l);return fd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var dd=he.createContext(void 0);dd.displayName="FrameworkContext";function Eg(){let r=he.useContext(dd);return fd(r,"You must render this element inside a <HydratedRouter> element"),r}function sx(r,e){let t=he.useContext(dd),[s,a]=he.useState(!1),[l,c]=he.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:h,onMouseLeave:m,onTouchStart:x}=e,v=he.useRef(null);he.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let T=_=>{_.forEach(b=>{c(b.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),he.useEffect(()=>{if(s){let T=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(T)}}},[s]);let S=()=>{a(!0)},E=()=>{a(!1),c(!1)};return t?r!=="intent"?[l,v,{}]:[l,v,{onFocus:zo(f,S),onBlur:zo(p,E),onMouseEnter:zo(h,S),onMouseLeave:zo(m,E),onTouchStart:zo(x,S)}]:[!1,v,{}]}function zo(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function ox({page:r,...e}){let{router:t}=ix(),s=he.useMemo(()=>fg(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?he.createElement(lx,{page:r,matches:s,...e}):(console.warn(`Tried to prefetch ${r} but no routes matched.`),null)}function ax(r){let{manifest:e,routeModules:t}=Eg(),[s,a]=he.useState([]);return he.useEffect(()=>{let l=!1;return Z0(r,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[r,e,t]),s}function lx({page:r,matches:e,...t}){let s=ss(),{manifest:a,routeModules:l}=Eg(),{loaderData:c,matches:f}=rx(),p=he.useMemo(()=>lm(r,e,f,a,s,"data"),[r,e,f,a,s]),h=he.useMemo(()=>lm(r,e,f,a,s,"assets"),[r,e,f,a,s]),m=he.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let S=new Set,E=!1;if(e.forEach(y=>{var b;let _=a.routes[y.route.id];!_||!_.hasLoader||(!p.some(L=>L.route.id===y.route.id)&&y.route.id in c&&((b=l[y.route.id])!=null&&b.shouldRevalidate)||_.hasClientLoader?E=!0:S.add(y.route.id))}),S.size===0)return[];let T=nx(r);return E&&S.size>0&&T.searchParams.set("_routes",e.filter(y=>S.has(y.route.id)).map(y=>y.route.id).join(",")),[T.pathname+T.search]},[c,s,a,p,e,r,l]),x=he.useMemo(()=>Q0(h,a),[h,a]),v=ax(h);return he.createElement(he.Fragment,null,m.map(S=>he.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...t})),x.map(S=>he.createElement("link",{key:S,rel:"modulepreload",href:S,...t})),v.map(({key:S,link:E})=>he.createElement("link",{key:S,...E})))}function ux(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Mg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Mg&&(window.__reactRouterVersion="7.0.2")}catch{}function cx({basename:r,children:e,window:t}){let s=he.useRef();s.current==null&&(s.current=Z_({window:t,v5Compat:!0}));let a=s.current,[l,c]=he.useState({action:a.action,location:a.location}),f=he.useCallback(p=>{he.startTransition(()=>c(p))},[c]);return he.useLayoutEffect(()=>a.listen(f),[a,f]),he.createElement(B0,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:a})}var Tg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wl=he.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,state:f,target:p,to:h,preventScrollReset:m,viewTransition:x,...v},S){let{basename:E}=he.useContext(Mi),T=typeof h=="string"&&Tg.test(h),y,_=!1;if(typeof h=="string"&&T&&(y=h,Mg))try{let R=new URL(window.location.href),C=h.startsWith("//")?new URL(R.protocol+h):new URL(h),O=wr(C.pathname,E);C.origin===R.origin&&O!=null?h=O+C.search+C.hash:_=!0}catch{hi(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let b=M0(h,{relative:a}),[L,P,z]=sx(s,v),F=px(h,{replace:c,state:f,target:p,preventScrollReset:m,relative:a,viewTransition:x});function I(R){e&&e(R),R.defaultPrevented||F(R)}let V=he.createElement("a",{...v,...z,href:y||b,onClick:_||l?e:I,ref:ux(S,P),target:p,"data-discover":!T&&t==="render"?"true":void 0});return L&&!T?he.createElement(he.Fragment,null,V,he.createElement(ox,{page:b})):V});Wl.displayName="Link";var fx=he.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:f,children:p,...h},m){let x=Qo(c,{relative:h.relative}),v=ss(),S=he.useContext($l),{navigator:E,basename:T}=he.useContext(Mi),y=S!=null&&xx(x)&&f===!0,_=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,b=v.pathname,L=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(b=b.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&T&&(L=wr(L,T)||L);const P=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let z=b===_||!a&&b.startsWith(_)&&b.charAt(P)==="/",F=L!=null&&(L===_||!a&&L.startsWith(_)&&L.charAt(_.length)==="/"),I={isActive:z,isPending:F,isTransitioning:y},V=z?e:void 0,R;typeof s=="function"?R=s(I):R=[s,z?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(I):l;return he.createElement(Wl,{...h,"aria-current":V,className:R,ref:m,style:C,to:c,viewTransition:f},typeof p=="function"?p(I):p)});fx.displayName="NavLink";var dx=he.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=Nl,action:f,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:x,...v},S)=>{let E=vx(),T=_x(f,{relative:h}),y=c.toLowerCase()==="get"?"get":"post",_=typeof f=="string"&&Tg.test(f),b=L=>{if(p&&p(L),L.defaultPrevented)return;L.preventDefault();let P=L.nativeEvent.submitter,z=(P==null?void 0:P.getAttribute("formmethod"))||c;E(P||L.currentTarget,{fetcherKey:e,method:z,navigate:t,replace:a,state:l,relative:h,preventScrollReset:m,viewTransition:x})};return he.createElement("form",{ref:S,method:y,action:T,onSubmit:s?p:b,...v,"data-discover":!_&&r==="render"?"true":void 0})});dx.displayName="Form";function hx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wg(r){let e=he.useContext(io);return Gt(e,hx(r)),e}function px(r,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:c}={}){let f=T0(),p=ss(),h=Qo(r,{relative:l});return he.useCallback(m=>{if(X0(m,e)){m.preventDefault();let x=t!==void 0?t:$o(p)===$o(h);f(r,{replace:x,state:s,preventScrollReset:a,relative:l,viewTransition:c})}},[p,f,h,t,s,e,r,a,l,c])}var mx=0,gx=()=>`__${String(++mx)}__`;function vx(){let{router:r}=wg("useSubmit"),{basename:e}=he.useContext(Mi),t=N0();return he.useCallback(async(s,a={})=>{let{action:l,method:c,encType:f,formData:p,body:h}=$0(s,e);if(a.navigate===!1){let m=a.fetcherKey||gx();await r.fetch(m,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:h,formMethod:a.method||c,formEncType:a.encType||f,flushSync:a.flushSync})}else await r.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:h,formMethod:a.method||c,formEncType:a.encType||f,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,e,t])}function _x(r,{relative:e}={}){let{basename:t}=he.useContext(Mi),s=he.useContext($i);Gt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...Qo(r||".",{relative:e})},c=ss();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(m=>m==="")){f.delete("index"),p.filter(x=>x).forEach(x=>f.append("index",x));let m=f.toString();l.search=m?`?${m}`:""}}return(!r||r===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Gi([t,l.pathname])),$o(l)}function xx(r,e={}){let t=he.useContext(vg);Gt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=wg("useViewTransitionState"),a=Qo(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=wr(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=wr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Gl(a.pathname,c)!=null||Gl(a.pathname,l)!=null}new TextEncoder;const yx=()=>Ge.jsxs("nav",{className:"navbar",children:[Ge.jsx("div",{className:"navbar-left"}),Ge.jsxs("div",{className:"navbar-center",children:[Ge.jsx("img",{src:"/portfolio/images/p_logo.png",alt:"Description",className:"navbar-logo"}),Ge.jsxs("ul",{className:"nav-links",children:[Ge.jsx("li",{children:Ge.jsx(Wl,{to:"/",children:"PROJECTS"})}),Ge.jsx("li",{children:Ge.jsx(Wl,{to:"/about",children:"ABOUT"})})]})]})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hd="171",Sx=0,um=1,Ex=2,Ag=1,Mx=2,zi=3,Ar=0,In=1,yi=2,Mr=0,qs=1,cm=2,fm=3,dm=4,Tx=5,Qr=100,wx=101,Ax=102,Cx=103,Rx=104,Px=200,bx=201,Lx=202,Dx=203,xf=204,yf=205,Ux=206,Ix=207,Nx=208,Fx=209,Ox=210,kx=211,Bx=212,zx=213,Hx=214,Sf=0,Ef=1,Mf=2,Ks=3,Tf=4,wf=5,Af=6,Cf=7,Cg=0,Vx=1,Gx=2,Tr=0,Wx=1,Xx=2,jx=3,qx=4,$x=5,Yx=6,Kx=7,Rg=300,Zs=301,Qs=302,Rf=303,Pf=304,Kl=306,bf=1e3,es=1001,Lf=1002,di=1003,Zx=1004,hl=1005,Si=1006,Oc=1007,ts=1008,ji=1009,Pg=1010,bg=1011,Yo=1012,pd=1013,ns=1014,Hi=1015,Jo=1016,md=1017,gd=1018,Js=1020,Lg=35902,Dg=1021,Ug=1022,ci=1023,Ig=1024,Ng=1025,$s=1026,eo=1027,Fg=1028,vd=1029,Og=1030,_d=1031,xd=1033,Ol=33776,kl=33777,Bl=33778,zl=33779,Df=35840,Uf=35841,If=35842,Nf=35843,Ff=36196,Of=37492,kf=37496,Bf=37808,zf=37809,Hf=37810,Vf=37811,Gf=37812,Wf=37813,Xf=37814,jf=37815,qf=37816,$f=37817,Yf=37818,Kf=37819,Zf=37820,Qf=37821,Hl=36492,Jf=36494,ed=36495,kg=36283,td=36284,nd=36285,id=36286,Qx=3200,Jx=3201,Bg=0,ey=1,Er="",Gn="srgb",to="srgb-linear",Xl="linear",Dt="srgb",bs=7680,hm=519,ty=512,ny=513,iy=514,zg=515,ry=516,sy=517,oy=518,ay=519,pm=35044,mm="300 es",Vi=2e3,jl=2001;class ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,rd=180/Math.PI;function ea(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function ly(r,e){return(r%e+e)%e}function Bc(r,e,t){return(1-t)*r+t*e}function Ho(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,t=0){Ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,s,a,l,c,f,p,h){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,p,h)}set(e,t,s,a,l,c,f,p,h){const m=this.elements;return m[0]=e,m[1]=a,m[2]=f,m[3]=t,m[4]=l,m[5]=p,m[6]=s,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],p=s[6],h=s[1],m=s[4],x=s[7],v=s[2],S=s[5],E=s[8],T=a[0],y=a[3],_=a[6],b=a[1],L=a[4],P=a[7],z=a[2],F=a[5],I=a[8];return l[0]=c*T+f*b+p*z,l[3]=c*y+f*L+p*F,l[6]=c*_+f*P+p*I,l[1]=h*T+m*b+x*z,l[4]=h*y+m*L+x*F,l[7]=h*_+m*P+x*I,l[2]=v*T+S*b+E*z,l[5]=v*y+S*L+E*F,l[8]=v*_+S*P+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],m=e[8];return t*c*m-t*f*h-s*l*m+s*f*p+a*l*h-a*c*p}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],m=e[8],x=m*c-f*h,v=f*p-m*l,S=h*l-c*p,E=t*x+s*v+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=x*T,e[1]=(a*h-m*s)*T,e[2]=(f*s-a*c)*T,e[3]=v*T,e[4]=(m*t-a*p)*T,e[5]=(a*l-f*t)*T,e[6]=S*T,e[7]=(s*p-h*t)*T,e[8]=(c*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const p=Math.cos(l),h=Math.sin(l);return this.set(s*p,s*h,-s*(p*c+h*f)+c+e,-a*h,a*p,-a*(-h*c+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(zc.makeScale(e,t)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zc=new lt;function Hg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ql(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function uy(){const r=ql("canvas");return r.style.display="block",r}const gm={};function Ws(r){r in gm||(gm[r]=!0,console.warn(r))}function cy(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function fy(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dy(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vm=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hy(){const r={enabled:!0,workingColorSpace:to,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(a.r=Wi(a.r),a.g=Wi(a.g),a.b=Wi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(a.r=Ys(a.r),a.g=Ys(a.g),a.b=Ys(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Er?Xl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[to]:{primaries:e,whitePoint:s,transfer:Xl,toXYZ:vm,fromXYZ:_m,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:s,transfer:Dt,toXYZ:vm,fromXYZ:_m,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),r}const At=hy();function Wi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ys(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ls;class py{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=ql("canvas")),Ls.width=e.width,Ls.height=e.height;const s=Ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ql("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Wi(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Wi(t[s]/255)*255):t[s]=Wi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let my=0;class Vg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=ea(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Hc(a[c].image)):l.push(Hc(a[c]))}else l=Hc(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function Hc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?py.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gy=0;class Nn extends ro{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,s=es,a=es,l=Si,c=ts,f=ci,p=ji,h=Nn.DEFAULT_ANISOTROPY,m=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=ea(),this.name="",this.source=new Vg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bf:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case Lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bf:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case Lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Rg;Nn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,s=0,a=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const p=e.elements,h=p[0],m=p[4],x=p[8],v=p[1],S=p[5],E=p[9],T=p[2],y=p[6],_=p[10];if(Math.abs(m-v)<.01&&Math.abs(x-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(x+T)<.1&&Math.abs(E+y)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,P=(S+1)/2,z=(_+1)/2,F=(m+v)/4,I=(x+T)/4,V=(E+y)/4;return L>P&&L>z?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=F/s,l=I/s):P>z?P<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),s=F/a,l=V/a):z<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),s=I/l,a=V/l),this.set(s,a,l,t),this}let b=Math.sqrt((y-E)*(y-E)+(x-T)*(x-T)+(v-m)*(v-m));return Math.abs(b)<.001&&(b=1),this.x=(y-E)/b,this.y=(x-T)/b,this.z=(v-m)/b,this.w=Math.acos((h+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vy extends ro{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Nn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends vy{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Gg extends Nn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _y extends Nn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ta{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let p=s[a+0],h=s[a+1],m=s[a+2],x=s[a+3];const v=l[c+0],S=l[c+1],E=l[c+2],T=l[c+3];if(f===0){e[t+0]=p,e[t+1]=h,e[t+2]=m,e[t+3]=x;return}if(f===1){e[t+0]=v,e[t+1]=S,e[t+2]=E,e[t+3]=T;return}if(x!==T||p!==v||h!==S||m!==E){let y=1-f;const _=p*v+h*S+m*E+x*T,b=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const z=Math.sqrt(L),F=Math.atan2(z,_*b);y=Math.sin(y*F)/z,f=Math.sin(f*F)/z}const P=f*b;if(p=p*y+v*P,h=h*y+S*P,m=m*y+E*P,x=x*y+T*P,y===1-f){const z=1/Math.sqrt(p*p+h*h+m*m+x*x);p*=z,h*=z,m*=z,x*=z}}e[t]=p,e[t+1]=h,e[t+2]=m,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],p=s[a+1],h=s[a+2],m=s[a+3],x=l[c],v=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+m*x+p*S-h*v,e[t+1]=p*E+m*v+h*x-f*S,e[t+2]=h*E+m*S+f*v-p*x,e[t+3]=m*E-f*x-p*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,p=Math.sin,h=f(s/2),m=f(a/2),x=f(l/2),v=p(s/2),S=p(a/2),E=p(l/2);switch(c){case"XYZ":this._x=v*m*x+h*S*E,this._y=h*S*x-v*m*E,this._z=h*m*E+v*S*x,this._w=h*m*x-v*S*E;break;case"YXZ":this._x=v*m*x+h*S*E,this._y=h*S*x-v*m*E,this._z=h*m*E-v*S*x,this._w=h*m*x+v*S*E;break;case"ZXY":this._x=v*m*x-h*S*E,this._y=h*S*x+v*m*E,this._z=h*m*E+v*S*x,this._w=h*m*x-v*S*E;break;case"ZYX":this._x=v*m*x-h*S*E,this._y=h*S*x+v*m*E,this._z=h*m*E-v*S*x,this._w=h*m*x+v*S*E;break;case"YZX":this._x=v*m*x+h*S*E,this._y=h*S*x+v*m*E,this._z=h*m*E-v*S*x,this._w=h*m*x-v*S*E;break;case"XZY":this._x=v*m*x-h*S*E,this._y=h*S*x-v*m*E,this._z=h*m*E+v*S*x,this._w=h*m*x+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],p=t[9],h=t[2],m=t[6],x=t[10],v=s+f+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-p)*S,this._y=(l-h)*S,this._z=(c-a)*S}else if(s>f&&s>x){const S=2*Math.sqrt(1+s-f-x);this._w=(m-p)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+h)/S}else if(f>x){const S=2*Math.sqrt(1+f-s-x);this._w=(l-h)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(p+m)/S}else{const S=2*Math.sqrt(1+x-s-f);this._w=(c-a)/S,this._x=(l+h)/S,this._y=(p+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,p=t._y,h=t._z,m=t._w;return this._x=s*m+c*f+a*h-l*p,this._y=a*m+c*p+l*f-s*h,this._z=l*m+c*h+s*p-a*f,this._w=c*m-s*f-a*p-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const h=Math.sqrt(p),m=Math.atan2(h,f),x=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=c*x+this._w*v,this._x=s*x+this._x*v,this._y=a*x+this._y*v,this._z=l*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,s=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,p=e.w,h=2*(c*a-f*s),m=2*(f*t-l*a),x=2*(l*s-c*t);return this.x=t+p*h+c*x-f*m,this.y=s+p*m+f*h-l*x,this.z=a+p*x+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,p=t.z;return this.x=a*p-l*f,this.y=l*c-s*p,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new K,xm=new ta;class na{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,oi):oi.fromBufferAttribute(l,c),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),pl.copy(s.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),ml.subVectors(this.max,Vo),Ds.subVectors(e.a,Vo),Us.subVectors(e.b,Vo),Is.subVectors(e.c,Vo),gr.subVectors(Us,Ds),vr.subVectors(Is,Us),Wr.subVectors(Ds,Is);let t=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-Wr.z,Wr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,Wr.z,0,-Wr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-Wr.y,Wr.x,0];return!Gc(t,Ds,Us,Is,ml)||(t=[1,0,0,0,1,0,0,0,1],!Gc(t,Ds,Us,Is,ml))?!1:(gl.crossVectors(gr,vr),t=[gl.x,gl.y,gl.z],Gc(t,Ds,Us,Is,ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new K,new K,new K,new K,new K,new K,new K,new K],oi=new K,pl=new na,Ds=new K,Us=new K,Is=new K,gr=new K,vr=new K,Wr=new K,Vo=new K,ml=new K,gl=new K,Xr=new K;function Gc(r,e,t,s,a){for(let l=0,c=r.length-3;l<=c;l+=3){Xr.fromArray(r,l);const f=a.x*Math.abs(Xr.x)+a.y*Math.abs(Xr.y)+a.z*Math.abs(Xr.z),p=e.dot(Xr),h=t.dot(Xr),m=s.dot(Xr);if(Math.max(-Math.max(p,h,m),Math.min(p,h,m))>f)return!1}return!0}const xy=new na,Go=new K,Wc=new K;class yd{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):xy.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const t=Go.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Go,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Wc)),this.expandByPoint(Go.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new K,Xc=new K,vl=new K,_r=new K,jc=new K,_l=new K,qc=new K;class yy{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Xc.copy(e).add(t).multiplyScalar(.5),vl.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(Xc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(vl),f=_r.dot(this.direction),p=-_r.dot(vl),h=_r.lengthSq(),m=Math.abs(1-c*c);let x,v,S,E;if(m>0)if(x=c*p-f,v=c*f-p,E=l*m,x>=0)if(v>=-E)if(v<=E){const T=1/m;x*=T,v*=T,S=x*(x+c*v+2*f)+v*(c*x+v+2*p)+h}else v=l,x=Math.max(0,-(c*v+f)),S=-x*x+v*(v+2*p)+h;else v=-l,x=Math.max(0,-(c*v+f)),S=-x*x+v*(v+2*p)+h;else v<=-E?(x=Math.max(0,-(-c*l+f)),v=x>0?-l:Math.min(Math.max(-l,-p),l),S=-x*x+v*(v+2*p)+h):v<=E?(x=0,v=Math.min(Math.max(-l,-p),l),S=v*(v+2*p)+h):(x=Math.max(0,-(c*l+f)),v=x>0?l:Math.min(Math.max(-l,-p),l),S=-x*x+v*(v+2*p)+h);else v=c>0?-l:l,x=Math.max(0,-(c*v+f)),S=-x*x+v*(v+2*p)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Xc).addScaledVector(vl,v),S}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const s=Ni.dot(this.direction),a=Ni.dot(Ni)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,p=s+c;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,p;const h=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,v=this.origin;return h>=0?(s=(e.min.x-v.x)*h,a=(e.max.x-v.x)*h):(s=(e.max.x-v.x)*h,a=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),x>=0?(f=(e.min.z-v.z)*x,p=(e.max.z-v.z)*x):(f=(e.max.z-v.z)*x,p=(e.min.z-v.z)*x),s>p||f>a)||((f>s||s!==s)&&(s=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,s,a,l){jc.subVectors(t,e),_l.subVectors(s,e),qc.crossVectors(jc,_l);let c=this.direction.dot(qc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;_r.subVectors(this.origin,e);const p=f*this.direction.dot(_l.crossVectors(_r,_l));if(p<0)return null;const h=f*this.direction.dot(jc.cross(_r));if(h<0||p+h>c)return null;const m=-f*_r.dot(qc);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,s,a,l,c,f,p,h,m,x,v,S,E,T,y){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,p,h,m,x,v,S,E,T,y)}set(e,t,s,a,l,c,f,p,h,m,x,v,S,E,T,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=s,_[12]=a,_[1]=l,_[5]=c,_[9]=f,_[13]=p,_[2]=h,_[6]=m,_[10]=x,_[14]=v,_[3]=S,_[7]=E,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Ns.setFromMatrixColumn(e,0).length(),l=1/Ns.setFromMatrixColumn(e,1).length(),c=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),p=Math.cos(a),h=Math.sin(a),m=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const v=c*m,S=c*x,E=f*m,T=f*x;t[0]=p*m,t[4]=-p*x,t[8]=h,t[1]=S+E*h,t[5]=v-T*h,t[9]=-f*p,t[2]=T-v*h,t[6]=E+S*h,t[10]=c*p}else if(e.order==="YXZ"){const v=p*m,S=p*x,E=h*m,T=h*x;t[0]=v+T*f,t[4]=E*f-S,t[8]=c*h,t[1]=c*x,t[5]=c*m,t[9]=-f,t[2]=S*f-E,t[6]=T+v*f,t[10]=c*p}else if(e.order==="ZXY"){const v=p*m,S=p*x,E=h*m,T=h*x;t[0]=v-T*f,t[4]=-c*x,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*m,t[9]=T-v*f,t[2]=-c*h,t[6]=f,t[10]=c*p}else if(e.order==="ZYX"){const v=c*m,S=c*x,E=f*m,T=f*x;t[0]=p*m,t[4]=E*h-S,t[8]=v*h+T,t[1]=p*x,t[5]=T*h+v,t[9]=S*h-E,t[2]=-h,t[6]=f*p,t[10]=c*p}else if(e.order==="YZX"){const v=c*p,S=c*h,E=f*p,T=f*h;t[0]=p*m,t[4]=T-v*x,t[8]=E*x+S,t[1]=x,t[5]=c*m,t[9]=-f*m,t[2]=-h*m,t[6]=S*x+E,t[10]=v-T*x}else if(e.order==="XZY"){const v=c*p,S=c*h,E=f*p,T=f*h;t[0]=p*m,t[4]=-x,t[8]=h*m,t[1]=v*x+T,t[5]=c*m,t[9]=S*x-E,t[2]=E*x-S,t[6]=f*m,t[10]=T*x+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sy,e,Ey)}lookAt(e,t,s){const a=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),xr.crossVectors(s,Hn),xr.lengthSq()===0&&(Math.abs(s.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),xr.crossVectors(s,Hn)),xr.normalize(),xl.crossVectors(Hn,xr),a[0]=xr.x,a[4]=xl.x,a[8]=Hn.x,a[1]=xr.y,a[5]=xl.y,a[9]=Hn.y,a[2]=xr.z,a[6]=xl.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],p=s[8],h=s[12],m=s[1],x=s[5],v=s[9],S=s[13],E=s[2],T=s[6],y=s[10],_=s[14],b=s[3],L=s[7],P=s[11],z=s[15],F=a[0],I=a[4],V=a[8],R=a[12],C=a[1],O=a[5],ee=a[9],J=a[13],oe=a[2],ue=a[6],ie=a[10],ce=a[14],k=a[3],fe=a[7],ae=a[11],N=a[15];return l[0]=c*F+f*C+p*oe+h*k,l[4]=c*I+f*O+p*ue+h*fe,l[8]=c*V+f*ee+p*ie+h*ae,l[12]=c*R+f*J+p*ce+h*N,l[1]=m*F+x*C+v*oe+S*k,l[5]=m*I+x*O+v*ue+S*fe,l[9]=m*V+x*ee+v*ie+S*ae,l[13]=m*R+x*J+v*ce+S*N,l[2]=E*F+T*C+y*oe+_*k,l[6]=E*I+T*O+y*ue+_*fe,l[10]=E*V+T*ee+y*ie+_*ae,l[14]=E*R+T*J+y*ce+_*N,l[3]=b*F+L*C+P*oe+z*k,l[7]=b*I+L*O+P*ue+z*fe,l[11]=b*V+L*ee+P*ie+z*ae,l[15]=b*R+L*J+P*ce+z*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],p=e[9],h=e[13],m=e[2],x=e[6],v=e[10],S=e[14],E=e[3],T=e[7],y=e[11],_=e[15];return E*(+l*p*x-a*h*x-l*f*v+s*h*v+a*f*S-s*p*S)+T*(+t*p*S-t*h*v+l*c*v-a*c*S+a*h*m-l*p*m)+y*(+t*h*x-t*f*S-l*c*x+s*c*S+l*f*m-s*h*m)+_*(-a*f*m-t*p*x+t*f*v+a*c*x-s*c*v+s*p*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],m=e[8],x=e[9],v=e[10],S=e[11],E=e[12],T=e[13],y=e[14],_=e[15],b=x*y*h-T*v*h+T*p*S-f*y*S-x*p*_+f*v*_,L=E*v*h-m*y*h-E*p*S+c*y*S+m*p*_-c*v*_,P=m*T*h-E*x*h+E*f*S-c*T*S-m*f*_+c*x*_,z=E*x*p-m*T*p-E*f*v+c*T*v+m*f*y-c*x*y,F=t*b+s*L+a*P+l*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=b*I,e[1]=(T*v*l-x*y*l-T*a*S+s*y*S+x*a*_-s*v*_)*I,e[2]=(f*y*l-T*p*l+T*a*h-s*y*h-f*a*_+s*p*_)*I,e[3]=(x*p*l-f*v*l-x*a*h+s*v*h+f*a*S-s*p*S)*I,e[4]=L*I,e[5]=(m*y*l-E*v*l+E*a*S-t*y*S-m*a*_+t*v*_)*I,e[6]=(E*p*l-c*y*l-E*a*h+t*y*h+c*a*_-t*p*_)*I,e[7]=(c*v*l-m*p*l+m*a*h-t*v*h-c*a*S+t*p*S)*I,e[8]=P*I,e[9]=(E*x*l-m*T*l-E*s*S+t*T*S+m*s*_-t*x*_)*I,e[10]=(c*T*l-E*f*l+E*s*h-t*T*h-c*s*_+t*f*_)*I,e[11]=(m*f*l-c*x*l-m*s*h+t*x*h+c*s*S-t*f*S)*I,e[12]=z*I,e[13]=(m*T*a-E*x*a+E*s*v-t*T*v-m*s*y+t*x*y)*I,e[14]=(E*f*a-c*T*a-E*s*p+t*T*p+c*s*y-t*f*y)*I,e[15]=(c*x*a-m*f*a+m*s*p-t*x*p-c*s*v+t*f*v)*I,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,p=e.z,h=l*c,m=l*f;return this.set(h*c+s,h*f-a*p,h*p+a*f,0,h*f+a*p,m*f+s,m*p-a*c,0,h*p-a*f,m*p+a*c,l*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,p=t._w,h=l+l,m=c+c,x=f+f,v=l*h,S=l*m,E=l*x,T=c*m,y=c*x,_=f*x,b=p*h,L=p*m,P=p*x,z=s.x,F=s.y,I=s.z;return a[0]=(1-(T+_))*z,a[1]=(S+P)*z,a[2]=(E-L)*z,a[3]=0,a[4]=(S-P)*F,a[5]=(1-(v+_))*F,a[6]=(y+b)*F,a[7]=0,a[8]=(E+L)*I,a[9]=(y-b)*I,a[10]=(1-(v+T))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Ns.set(a[0],a[1],a[2]).length();const c=Ns.set(a[4],a[5],a[6]).length(),f=Ns.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ai.copy(this);const h=1/l,m=1/c,x=1/f;return ai.elements[0]*=h,ai.elements[1]*=h,ai.elements[2]*=h,ai.elements[4]*=m,ai.elements[5]*=m,ai.elements[6]*=m,ai.elements[8]*=x,ai.elements[9]*=x,ai.elements[10]*=x,t.setFromRotationMatrix(ai),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=Vi){const p=this.elements,h=2*l/(t-e),m=2*l/(s-a),x=(t+e)/(t-e),v=(s+a)/(s-a);let S,E;if(f===Vi)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===jl)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=h,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=m,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=Vi){const p=this.elements,h=1/(t-e),m=1/(s-a),x=1/(c-l),v=(t+e)*h,S=(s+a)*m;let E,T;if(f===Vi)E=(c+l)*x,T=-2*x;else if(f===jl)E=l*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*h,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*m,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Ns=new K,ai=new Wt,Sy=new K(0,0,0),Ey=new K(1,1,1),xr=new K,xl=new K,Hn=new K,ym=new Wt,Sm=new ta;class Ei{constructor(e=0,t=0,s=0,a=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],p=a[1],h=a[5],m=a[9],x=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-_t(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ym,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sm.setFromEuler(this),this.setFromQuaternion(Sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Wg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let My=0;const Em=new K,Fs=new ta,Fi=new Wt,yl=new K,Wo=new K,Ty=new K,wy=new ta,Mm=new K(1,0,0),Tm=new K(0,1,0),wm=new K(0,0,1),Am={type:"added"},Ay={type:"removed"},Os={type:"childadded",child:null},$c={type:"childremoved",child:null};class Fn extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new K,t=new Ei,s=new ta,a=new K(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Wt},normalMatrix:{value:new lt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(Tm,e)}rotateZ(e){return this.rotateOnAxis(wm,e)}translateOnAxis(e,t){return Em.copy(e).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(Tm,e)}translateZ(e){return this.translateOnAxis(wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?yl.copy(e):yl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Wo,yl,this.up):Fi.lookAt(yl,Wo,this.up),this.quaternion.setFromRotationMatrix(Fi),a&&(Fi.extractRotation(a.matrixWorld),Fs.setFromRotationMatrix(Fi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Am),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ay),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Am),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,Ty),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,m=p.length;h<m;h++){const x=p[h];l(e.shapes,x)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(e.materials,this.material[p]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(l(e.animations,p))}}if(t){const f=c(e.geometries),p=c(e.materials),h=c(e.textures),m=c(e.images),x=c(e.shapes),v=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),h.length>0&&(s.textures=h),m.length>0&&(s.images=m),x.length>0&&(s.shapes=x),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=a,s;function c(f){const p=[];for(const h in f){const m=f[h];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Fn.DEFAULT_UP=new K(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new K,Oi=new K,Yc=new K,ki=new K,ks=new K,Bs=new K,Cm=new K,Kc=new K,Zc=new K,Qc=new K,Jc=new Ut,ef=new Ut,tf=new Ut;class ui{constructor(e=new K,t=new K,s=new K){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),li.subVectors(e,t),a.cross(li);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){li.subVectors(a,t),Oi.subVectors(s,t),Yc.subVectors(e,t);const c=li.dot(li),f=li.dot(Oi),p=li.dot(Yc),h=Oi.dot(Oi),m=Oi.dot(Yc),x=c*h-f*f;if(x===0)return l.set(0,0,0),null;const v=1/x,S=(h*p-f*m)*v,E=(c*m-f*p)*v;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,s,a,l,c,f,p){return this.getBarycoord(e,t,s,a,ki)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,ki.x),p.addScaledVector(c,ki.y),p.addScaledVector(f,ki.z),p)}static getInterpolatedAttribute(e,t,s,a,l,c){return Jc.setScalar(0),ef.setScalar(0),tf.setScalar(0),Jc.fromBufferAttribute(e,t),ef.fromBufferAttribute(e,s),tf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Jc,l.x),c.addScaledVector(ef,l.y),c.addScaledVector(tf,l.z),c}static isFrontFacing(e,t,s,a){return li.subVectors(s,t),Oi.subVectors(e,t),li.cross(Oi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),li.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return ui.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;ks.subVectors(a,s),Bs.subVectors(l,s),Kc.subVectors(e,s);const p=ks.dot(Kc),h=Bs.dot(Kc);if(p<=0&&h<=0)return t.copy(s);Zc.subVectors(e,a);const m=ks.dot(Zc),x=Bs.dot(Zc);if(m>=0&&x<=m)return t.copy(a);const v=p*x-m*h;if(v<=0&&p>=0&&m<=0)return c=p/(p-m),t.copy(s).addScaledVector(ks,c);Qc.subVectors(e,l);const S=ks.dot(Qc),E=Bs.dot(Qc);if(E>=0&&S<=E)return t.copy(l);const T=S*h-p*E;if(T<=0&&h>=0&&E<=0)return f=h/(h-E),t.copy(s).addScaledVector(Bs,f);const y=m*E-S*x;if(y<=0&&x-m>=0&&S-E>=0)return Cm.subVectors(l,a),f=(x-m)/(x-m+(S-E)),t.copy(a).addScaledVector(Cm,f);const _=1/(y+T+v);return c=T*_,f=v*_,t.copy(s).addScaledVector(ks,c).addScaledVector(Bs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function nf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Et{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=s,At.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=At.workingColorSpace){if(e=ly(e,1),t=_t(t,0,1),s=_t(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=nf(c,l,e+1/3),this.g=nf(c,l,e),this.b=nf(c,l,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,t=Gn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const s=Xg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return At.fromWorkingColorSpace(vn.copy(this),e),Math.round(_t(vn.r*255,0,255))*65536+Math.round(_t(vn.g*255,0,255))*256+Math.round(_t(vn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(vn.copy(this),t);const s=vn.r,a=vn.g,l=vn.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let p,h;const m=(f+c)/2;if(f===c)p=0,h=0;else{const x=c-f;switch(h=m<=.5?x/(c+f):x/(2-c-f),c){case s:p=(a-l)/x+(a<l?6:0);break;case a:p=(l-s)/x+2;break;case l:p=(s-a)/x+4;break}p/=6}return e.h=p,e.s=h,e.l=m,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Gn){At.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,s=vn.g,a=vn.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(Sl);const s=Bc(yr.h,Sl.h,t),a=Bc(yr.s,Sl.s,t),l=Bc(yr.l,Sl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Et;Et.NAMES=Xg;let Cy=0;class ia extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=qs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xf,this.blendDst=yf,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(s.blending=this.blending),this.side!==Ar&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==xf&&(s.blendSrc=this.blendSrc),this.blendDst!==yf&&(s.blendDst=this.blendDst),this.blendEquation!==Qr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jg extends ia{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new K,El=new Ct;class Xn{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=pm,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ho(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Dn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),s=Dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),s=Dn(s,this.array),a=Dn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),s=Dn(s,this.array),a=Dn(a,this.array),l=Dn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pm&&(e.usage=this.usage),e}}class qg extends Xn{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class $g extends Xn{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Xi extends Xn{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Ry=0;const Qn=new Wt,rf=new Fn,zs=new K,Vn=new na,Xo=new na,on=new K;class qi extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hg(e)?$g:qg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new lt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,s){return Qn.makeTranslation(e,t,s),this.applyMatrix4(Qn),this}scale(e,t,s){return Qn.makeScale(e,t,s),this.applyMatrix4(Qn),this}lookAt(e){return rf.lookAt(e),rf.updateMatrix(),this.applyMatrix4(rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Xi(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Xo.setFromBufferAttribute(f),this.morphTargetsRelative?(on.addVectors(Vn.min,Xo.min),Vn.expandByPoint(on),on.addVectors(Vn.max,Xo.max),Vn.expandByPoint(on)):(Vn.expandByPoint(Xo.min),Vn.expandByPoint(Xo.max))}Vn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)on.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(on));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],p=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)on.fromBufferAttribute(f,h),p&&(zs.fromBufferAttribute(e,h),on.add(zs)),a=Math.max(a,s.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let V=0;V<s.count;V++)f[V]=new K,p[V]=new K;const h=new K,m=new K,x=new K,v=new Ct,S=new Ct,E=new Ct,T=new K,y=new K;function _(V,R,C){h.fromBufferAttribute(s,V),m.fromBufferAttribute(s,R),x.fromBufferAttribute(s,C),v.fromBufferAttribute(l,V),S.fromBufferAttribute(l,R),E.fromBufferAttribute(l,C),m.sub(h),x.sub(h),S.sub(v),E.sub(v);const O=1/(S.x*E.y-E.x*S.y);isFinite(O)&&(T.copy(m).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(O),y.copy(x).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(O),f[V].add(T),f[R].add(T),f[C].add(T),p[V].add(y),p[R].add(y),p[C].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let V=0,R=b.length;V<R;++V){const C=b[V],O=C.start,ee=C.count;for(let J=O,oe=O+ee;J<oe;J+=3)_(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const L=new K,P=new K,z=new K,F=new K;function I(V){z.fromBufferAttribute(a,V),F.copy(z);const R=f[V];L.copy(R),L.sub(z.multiplyScalar(z.dot(R))).normalize(),P.crossVectors(F,R);const O=P.dot(p[V])<0?-1:1;c.setXYZW(V,L.x,L.y,L.z,O)}for(let V=0,R=b.length;V<R;++V){const C=b[V],O=C.start,ee=C.count;for(let J=O,oe=O+ee;J<oe;J+=3)I(e.getX(J+0)),I(e.getX(J+1)),I(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const a=new K,l=new K,c=new K,f=new K,p=new K,h=new K,m=new K,x=new K;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),T=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),m.subVectors(c,l),x.subVectors(a,l),m.cross(x),f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,T),h.fromBufferAttribute(s,y),f.add(m),p.add(m),h.add(m),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),x.subVectors(a,l),m.cross(x),s.setXYZ(v+0,m.x,m.y,m.z),s.setXYZ(v+1,m.x,m.y,m.z),s.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(f,p){const h=f.array,m=f.itemSize,x=f.normalized,v=new h.constructor(p.length*m);let S=0,E=0;for(let T=0,y=p.length;T<y;T++){f.isInterleavedBufferAttribute?S=p[T]*f.data.stride+f.offset:S=p[T]*m;for(let _=0;_<m;_++)v[E++]=h[S++]}return new Xn(v,m,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qi,s=this.index.array,a=this.attributes;for(const f in a){const p=a[f],h=e(p,s);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let m=0,x=h.length;m<x;m++){const v=h[m],S=e(v,s);p.push(S)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const h=s[p];e.data.attributes[p]=h.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],m=[];for(let x=0,v=h.length;x<v;x++){const S=h[x];m.push(S.toJSON(e.data))}m.length>0&&(a[p]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const h in a){const m=a[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],x=l[h];for(let v=0,S=x.length;v<S;v++)m.push(x[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const x=c[h];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rm=new Wt,jr=new yy,Ml=new yd,Pm=new K,Tl=new K,wl=new K,Al=new K,sf=new K,Cl=new K,bm=new K,Rl=new K;class fi extends Fn{constructor(e=new qi,t=new jg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Cl.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const m=f[p],x=l[p];m!==0&&(sf.fromBufferAttribute(x,e),c?Cl.addScaledVector(sf,m):Cl.addScaledVector(sf.sub(t),m))}t.add(Cl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ml.copy(s.boundingSphere),Ml.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(Ml.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Ml,Pm)===null||jr.origin.distanceToSquared(Pm)>(e.far-e.near)**2))&&(Rm.copy(l).invert(),jr.copy(e.ray).applyMatrix4(Rm),!(s.boundingBox!==null&&jr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,x=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,T=v.length;E<T;E++){const y=v[E],_=c[y.materialIndex],b=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let P=b,z=L;P<z;P+=3){const F=f.getX(P),I=f.getX(P+1),V=f.getX(P+2);a=Pl(this,_,e,s,h,m,x,F,I,V),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const b=f.getX(y),L=f.getX(y+1),P=f.getX(y+2);a=Pl(this,c,e,s,h,m,x,b,L,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,T=v.length;E<T;E++){const y=v[E],_=c[y.materialIndex],b=Math.max(y.start,S.start),L=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let P=b,z=L;P<z;P+=3){const F=P,I=P+1,V=P+2;a=Pl(this,_,e,s,h,m,x,F,I,V),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const b=y,L=y+1,P=y+2;a=Pl(this,c,e,s,h,m,x,b,L,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function Py(r,e,t,s,a,l,c,f){let p;if(e.side===In?p=s.intersectTriangle(c,l,a,!0,f):p=s.intersectTriangle(a,l,c,e.side===Ar,f),p===null)return null;Rl.copy(f),Rl.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Rl);return h<t.near||h>t.far?null:{distance:h,point:Rl.clone(),object:r}}function Pl(r,e,t,s,a,l,c,f,p,h){r.getVertexPosition(f,Tl),r.getVertexPosition(p,wl),r.getVertexPosition(h,Al);const m=Py(r,e,t,s,Tl,wl,Al,bm);if(m){const x=new K;ui.getBarycoord(bm,Tl,wl,Al,x),a&&(m.uv=ui.getInterpolatedAttribute(a,f,p,h,x,new Ct)),l&&(m.uv1=ui.getInterpolatedAttribute(l,f,p,h,x,new Ct)),c&&(m.normal=ui.getInterpolatedAttribute(c,f,p,h,x,new K),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:p,c:h,normal:new K,materialIndex:0};ui.getNormal(Tl,wl,Al,v.normal),m.face=v,m.barycoord=x}return m}class ra extends qi{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const p=[],h=[],m=[],x=[];let v=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,a,c,2),E("x","z","y",1,-1,e,s,-t,a,c,3),E("x","y","z",1,-1,e,t,s,a,l,4),E("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(p),this.setAttribute("position",new Xi(h,3)),this.setAttribute("normal",new Xi(m,3)),this.setAttribute("uv",new Xi(x,2));function E(T,y,_,b,L,P,z,F,I,V,R){const C=P/I,O=z/V,ee=P/2,J=z/2,oe=F/2,ue=I+1,ie=V+1;let ce=0,k=0;const fe=new K;for(let ae=0;ae<ie;ae++){const N=ae*O-J;for(let re=0;re<ue;re++){const Ue=re*C-ee;fe[T]=Ue*b,fe[y]=N*L,fe[_]=oe,h.push(fe.x,fe.y,fe.z),fe[T]=0,fe[y]=0,fe[_]=F>0?1:-1,m.push(fe.x,fe.y,fe.z),x.push(re/I),x.push(1-ae/V),ce+=1}}for(let ae=0;ae<V;ae++)for(let N=0;N<I;N++){const re=v+N+ue*ae,Ue=v+N+ue*(ae+1),Y=v+(N+1)+ue*(ae+1),de=v+(N+1)+ue*ae;p.push(re,Ue,de),p.push(Ue,Y,de),k+=6}f.addGroup(S,k,R),S+=k,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Tn(r){const e={};for(let t=0;t<r.length;t++){const s=no(r[t]);for(const a in s)e[a]=s[a]}return e}function by(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Ly={clone:no,merge:Tn};var Dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends ia{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dy,this.fragmentShader=Uy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=by(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Kg extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new K,Lm=new Ct,Dm=new Ct;class Wn extends Kg{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rd*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,Lm,Dm),t.subVectors(Dm,Lm)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kc*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;l+=c.offsetX*a/p,t-=c.offsetY*s/h,a*=c.width/p,s*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Vs=1;class Iy extends Fn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Wn(Hs,Vs,e,t);a.layers=this.layers,this.add(a);const l=new Wn(Hs,Vs,e,t);l.layers=this.layers,this.add(l);const c=new Wn(Hs,Vs,e,t);c.layers=this.layers,this.add(c);const f=new Wn(Hs,Vs,e,t);f.layers=this.layers,this.add(f);const p=new Wn(Hs,Vs,e,t);p.layers=this.layers,this.add(p);const h=new Wn(Hs,Vs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,p]=t;for(const h of t)this.remove(h);if(e===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===jl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,h,m]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,p),e.setRenderTarget(s,4,a),e.render(t,h),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,a),e.render(t,m),e.setRenderTarget(x,v,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Zg extends Nn{constructor(e,t,s,a,l,c,f,p,h,m){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,s,a,l,c,f,p,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ny extends is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new Zg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ra(5,5,5),l=new Cr({name:"CubemapFromEquirect",uniforms:no(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:In,blending:Mr});l.uniforms.tEquirect.value=t;const c=new fi(a,l),f=t.minFilter;return t.minFilter===ts&&(t.minFilter=Si),new Iy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}class Fy extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const of=new K,Oy=new K,ky=new lt;class Kr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=of.subVectors(s,t).cross(Oy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(of),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||ky.getNormalMatrix(e),a=this.coplanarPoint(of).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new yd,bl=new K;class Sd{constructor(e=new Kr,t=new Kr,s=new Kr,a=new Kr,l=new Kr,c=new Kr){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Vi){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],p=a[3],h=a[4],m=a[5],x=a[6],v=a[7],S=a[8],E=a[9],T=a[10],y=a[11],_=a[12],b=a[13],L=a[14],P=a[15];if(s[0].setComponents(p-l,v-h,y-S,P-_).normalize(),s[1].setComponents(p+l,v+h,y+S,P+_).normalize(),s[2].setComponents(p+c,v+m,y+E,P+b).normalize(),s[3].setComponents(p-c,v-m,y-E,P-b).normalize(),s[4].setComponents(p-f,v-x,y-T,P-L).normalize(),t===Vi)s[5].setComponents(p+f,v+x,y+T,P+L).normalize();else if(t===jl)s[5].setComponents(f,x,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(bl.x=a.normal.x>0?e.max.x:e.min.x,bl.y=a.normal.y>0?e.max.y:e.min.y,bl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ll extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Qg extends Nn{constructor(e,t,s,a,l,c,f,p,h,m=$s){if(m!==$s&&m!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===$s&&(s=ns),s===void 0&&m===eo&&(s=Js),super(null,a,l,c,f,p,m,s,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:di,this.minFilter=p!==void 0?p:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zl extends qi{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),p=Math.floor(a),h=f+1,m=p+1,x=e/f,v=t/p,S=[],E=[],T=[],y=[];for(let _=0;_<m;_++){const b=_*v-c;for(let L=0;L<h;L++){const P=L*x-l;E.push(P,-b,0),T.push(0,0,1),y.push(L/f),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let b=0;b<f;b++){const L=b+h*_,P=b+h*(_+1),z=b+1+h*(_+1),F=b+1+h*_;S.push(L,P,F),S.push(P,z,F)}this.setIndex(S),this.setAttribute("position",new Xi(E,3)),this.setAttribute("normal",new Xi(T,3)),this.setAttribute("uv",new Xi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.width,e.height,e.widthSegments,e.heightSegments)}}class By extends ia{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bg,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zy extends ia{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hy extends ia{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Um={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Vy{constructor(e,t,s){const a=this;let l=!1,c=0,f=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){f++,l===!1&&a.onStart!==void 0&&a.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return p?p(m):m},this.setURLModifier=function(m){return p=m,this},this.addHandler=function(m,x){return h.push(m,x),this},this.removeHandler=function(m){const x=h.indexOf(m);return x!==-1&&h.splice(x,2),this},this.getHandler=function(m){for(let x=0,v=h.length;x<v;x+=2){const S=h[x],E=h[x+1];if(S.global&&(S.lastIndex=0),S.test(m))return E}return null}}}const Gy=new Vy;class Ed{constructor(e){this.manager=e!==void 0?e:Gy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,l){s.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ed.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi={};class Wy extends Error{constructor(e,t){super(e),this.response=t}}class Xy extends Ed{constructor(e){super(e)}load(e,t,s,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Um.get(e);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:s,onError:a});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:s,onError:a});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,p=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=Bi[e],x=h.body.getReader(),v=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),S=v?parseInt(v):0,E=S!==0;let T=0;const y=new ReadableStream({start(_){b();function b(){x.read().then(({done:L,value:P})=>{if(L)_.close();else{T+=P.byteLength;const z=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:S});for(let F=0,I=m.length;F<I;F++){const V=m[F];V.onProgress&&V.onProgress(z)}_.enqueue(P),b()}},L=>{_.error(L)})}}});return new Response(y)}else throw new Wy(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(p){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,f));case"json":return h.json();default:if(f===void 0)return h.text();{const x=/charset="?([^;"\s]*)"?/i.exec(f),v=x&&x[1]?x[1].toLowerCase():void 0,S=new TextDecoder(v);return h.arrayBuffer().then(E=>S.decode(E))}}}).then(h=>{Um.add(e,h);const m=Bi[e];delete Bi[e];for(let x=0,v=m.length;x<v;x++){const S=m[x];S.onLoad&&S.onLoad(h)}}).catch(h=>{const m=Bi[e];if(m===void 0)throw this.manager.itemError(e),h;delete Bi[e];for(let x=0,v=m.length;x<v;x++){const S=m[x];S.onError&&S.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jy extends Fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const af=new Wt,Im=new K,Nm=new K;class qy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sd,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Im.setFromMatrixPosition(e.matrixWorld),t.position.copy(Im),Nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nm),t.updateMatrixWorld(),af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fm=new Wt,jo=new K,lf=new K;class $y extends qy{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){const s=this.camera,a=this.matrix,l=e.distance||s.far;l!==s.far&&(s.far=l,s.updateProjectionMatrix()),jo.setFromMatrixPosition(e.matrixWorld),s.position.copy(jo),lf.copy(s.position),lf.add(this._cubeDirections[t]),s.up.copy(this._cubeUps[t]),s.lookAt(lf),s.updateMatrixWorld(),a.makeTranslation(-jo.x,-jo.y,-jo.z),Fm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fm)}}class Om extends jy{constructor(e,t,s=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=a,this.shadow=new $y}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yy extends Kg{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,p=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ky extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=km(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=km();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function km(){return performance.now()}function Bm(r,e,t,s){const a=Qy(s);switch(t){case Dg:return r*e;case Ig:return r*e;case Ng:return r*e*2;case Fg:return r*e/a.components*a.byteLength;case vd:return r*e/a.components*a.byteLength;case Og:return r*e*2/a.components*a.byteLength;case _d:return r*e*2/a.components*a.byteLength;case Ug:return r*e*3/a.components*a.byteLength;case ci:return r*e*4/a.components*a.byteLength;case xd:return r*e*4/a.components*a.byteLength;case Ol:case kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bl:case zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uf:case Nf:return Math.max(r,16)*Math.max(e,8)/4;case Df:case If:return Math.max(r,8)*Math.max(e,8)/2;case Ff:case Of:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case jf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case qf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case $f:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Qf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Hl:case Jf:case ed:return Math.ceil(r/4)*Math.ceil(e/4)*16;case kg:case td:return Math.ceil(r/4)*Math.ceil(e/4)*8;case nd:case id:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qy(r){switch(r){case ji:case Pg:return{byteLength:1,components:1};case Yo:case bg:case Jo:return{byteLength:2,components:1};case md:case gd:return{byteLength:2,components:4};case ns:case pd:case Hi:return{byteLength:4,components:1};case Lg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jg(){let r=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Jy(r){const e=new WeakMap;function t(f,p){const h=f.array,m=f.usage,x=h.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,h,m),f.onUploadCallback();let S;if(h instanceof Float32Array)S=r.FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=r.SHORT;else if(h instanceof Uint32Array)S=r.UNSIGNED_INT;else if(h instanceof Int32Array)S=r.INT;else if(h instanceof Int8Array)S=r.BYTE;else if(h instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:x}}function s(f,p,h){const m=p.array,x=p.updateRanges;if(r.bindBuffer(h,f),x.length===0)r.bufferSubData(h,0,m);else{x.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<x.length;S++){const E=x[v],T=x[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,x[v]=T)}x.length=v+1;for(let S=0,E=x.length;S<E;S++){const T=x[S];r.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(r.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,f,p),h.version=f.version}}return{get:a,remove:l,update:c}}var eS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tS=`#ifdef USE_ALPHAHASH
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
#endif`,nS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oS=`#ifdef USE_AOMAP
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
#endif`,aS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lS=`#ifdef USE_BATCHING
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
#endif`,uS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hS=`#ifdef USE_IRIDESCENCE
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
#endif`,pS=`#ifdef USE_BUMPMAP
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
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ES=`#if defined( USE_COLOR_ALPHA )
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
#endif`,MS=`#define PI 3.141592653589793
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
} // validated`,TS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wS=`vec3 transformedNormal = objectNormal;
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
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bS="gl_FragColor = linearToOutputTexel( gl_FragColor );",LS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DS=`#ifdef USE_ENVMAP
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
#endif`,US=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IS=`#ifdef USE_ENVMAP
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
#endif`,NS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FS=`#ifdef USE_ENVMAP
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
#endif`,OS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HS=`#ifdef USE_GRADIENTMAP
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
}`,VS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XS=`uniform bool receiveShadow;
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
#endif`,jS=`#ifdef USE_ENVMAP
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
#endif`,qS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZS=`PhysicalMaterial material;
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
#endif`,QS=`struct PhysicalMaterial {
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
}`,JS=`
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
#endif`,eE=`#if defined( RE_IndirectDiffuse )
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
#endif`,tE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uE=`#if defined( USE_POINTS_UV )
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
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
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
#endif`,gE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_E=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EE=`#ifdef USE_NORMALMAP
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
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kE=`float getShadowMask() {
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
}`,BE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zE=`#ifdef USE_SKINNING
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
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VE=`#ifdef USE_SKINNING
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
#endif`,GE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,$E=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eM=`uniform sampler2D t2D;
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
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`#include <common>
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
}`,oM=`#if DEPTH_PACKING == 3200
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
}`,aM=`#define DISTANCE
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
}`,lM=`#define DISTANCE
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`uniform float scale;
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
}`,dM=`uniform vec3 diffuse;
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
}`,hM=`#include <common>
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#define LAMBERT
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
}`,gM=`#define LAMBERT
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
}`,vM=`#define MATCAP
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
}`,_M=`#define MATCAP
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
}`,xM=`#define NORMAL
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
}`,yM=`#define NORMAL
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
}`,SM=`#define PHONG
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
}`,EM=`#define PHONG
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
}`,MM=`#define STANDARD
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
}`,TM=`#define STANDARD
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
}`,wM=`#define TOON
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
}`,AM=`#define TOON
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
}`,CM=`uniform float size;
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
}`,RM=`uniform vec3 diffuse;
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
}`,PM=`#include <common>
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
}`,bM=`uniform vec3 color;
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
}`,LM=`uniform float rotation;
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
}`,DM=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:eS,alphahash_pars_fragment:tS,alphamap_fragment:nS,alphamap_pars_fragment:iS,alphatest_fragment:rS,alphatest_pars_fragment:sS,aomap_fragment:oS,aomap_pars_fragment:aS,batching_pars_vertex:lS,batching_vertex:uS,begin_vertex:cS,beginnormal_vertex:fS,bsdfs:dS,iridescence_fragment:hS,bumpmap_pars_fragment:pS,clipping_planes_fragment:mS,clipping_planes_pars_fragment:gS,clipping_planes_pars_vertex:vS,clipping_planes_vertex:_S,color_fragment:xS,color_pars_fragment:yS,color_pars_vertex:SS,color_vertex:ES,common:MS,cube_uv_reflection_fragment:TS,defaultnormal_vertex:wS,displacementmap_pars_vertex:AS,displacementmap_vertex:CS,emissivemap_fragment:RS,emissivemap_pars_fragment:PS,colorspace_fragment:bS,colorspace_pars_fragment:LS,envmap_fragment:DS,envmap_common_pars_fragment:US,envmap_pars_fragment:IS,envmap_pars_vertex:NS,envmap_physical_pars_fragment:jS,envmap_vertex:FS,fog_vertex:OS,fog_pars_vertex:kS,fog_fragment:BS,fog_pars_fragment:zS,gradientmap_pars_fragment:HS,lightmap_pars_fragment:VS,lights_lambert_fragment:GS,lights_lambert_pars_fragment:WS,lights_pars_begin:XS,lights_toon_fragment:qS,lights_toon_pars_fragment:$S,lights_phong_fragment:YS,lights_phong_pars_fragment:KS,lights_physical_fragment:ZS,lights_physical_pars_fragment:QS,lights_fragment_begin:JS,lights_fragment_maps:eE,lights_fragment_end:tE,logdepthbuf_fragment:nE,logdepthbuf_pars_fragment:iE,logdepthbuf_pars_vertex:rE,logdepthbuf_vertex:sE,map_fragment:oE,map_pars_fragment:aE,map_particle_fragment:lE,map_particle_pars_fragment:uE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:fE,morphinstance_vertex:dE,morphcolor_vertex:hE,morphnormal_vertex:pE,morphtarget_pars_vertex:mE,morphtarget_vertex:gE,normal_fragment_begin:vE,normal_fragment_maps:_E,normal_pars_fragment:xE,normal_pars_vertex:yE,normal_vertex:SE,normalmap_pars_fragment:EE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:TE,clearcoat_pars_fragment:wE,iridescence_pars_fragment:AE,opaque_fragment:CE,packing:RE,premultiplied_alpha_fragment:PE,project_vertex:bE,dithering_fragment:LE,dithering_pars_fragment:DE,roughnessmap_fragment:UE,roughnessmap_pars_fragment:IE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:FE,shadowmap_vertex:OE,shadowmask_pars_fragment:kE,skinbase_vertex:BE,skinning_pars_vertex:zE,skinning_vertex:HE,skinnormal_vertex:VE,specularmap_fragment:GE,specularmap_pars_fragment:WE,tonemapping_fragment:XE,tonemapping_pars_fragment:jE,transmission_fragment:qE,transmission_pars_fragment:$E,uv_pars_fragment:YE,uv_pars_vertex:KE,uv_vertex:ZE,worldpos_vertex:QE,background_vert:JE,background_frag:eM,backgroundCube_vert:tM,backgroundCube_frag:nM,cube_vert:iM,cube_frag:rM,depth_vert:sM,depth_frag:oM,distanceRGBA_vert:aM,distanceRGBA_frag:lM,equirect_vert:uM,equirect_frag:cM,linedashed_vert:fM,linedashed_frag:dM,meshbasic_vert:hM,meshbasic_frag:pM,meshlambert_vert:mM,meshlambert_frag:gM,meshmatcap_vert:vM,meshmatcap_frag:_M,meshnormal_vert:xM,meshnormal_frag:yM,meshphong_vert:SM,meshphong_frag:EM,meshphysical_vert:MM,meshphysical_frag:TM,meshtoon_vert:wM,meshtoon_frag:AM,points_vert:CM,points_frag:RM,shadow_vert:PM,shadow_frag:bM,sprite_vert:LM,sprite_frag:DM},be={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},xi={basic:{uniforms:Tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Et(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Tn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Tn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Et(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Tn([be.points,be.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Tn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Tn([be.common,be.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Tn([be.sprite,be.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Tn([be.common,be.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Tn([be.lights,be.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};xi.physical={uniforms:Tn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Dl={r:0,b:0,g:0},$r=new Ei,UM=new Wt;function IM(r,e,t,s,a,l,c){const f=new Et(0);let p=l===!0?0:1,h,m,x=null,v=0,S=null;function E(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function T(L){let P=!1;const z=E(L);z===null?_(f,p):z&&z.isColor&&(_(z,1),P=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,P){const z=E(P);z&&(z.isCubeTexture||z.mapping===Kl)?(m===void 0&&(m=new fi(new ra(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:no(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,I,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),$r.copy(P.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),m.material.uniforms.envMap.value=z,m.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(UM.makeRotationFromEuler($r)),m.material.toneMapped=At.getTransfer(z.colorSpace)!==Dt,(x!==z||v!==z.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,x=z,v=z.version,S=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):z&&z.isTexture&&(h===void 0&&(h=new fi(new Zl(2,2),new Cr({name:"BackgroundMaterial",uniforms:no(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=z,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=At.getTransfer(z.colorSpace)!==Dt,z.matrixAutoUpdate===!0&&z.updateMatrix(),h.material.uniforms.uvTransform.value.copy(z.matrix),(x!==z||v!==z.version||S!==r.toneMapping)&&(h.material.needsUpdate=!0,x=z,v=z.version,S=r.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function _(L,P){L.getRGB(Dl,Yg(r)),s.buffers.color.setClear(Dl.r,Dl.g,Dl.b,P,c)}function b(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(L,P=1){f.set(L),p=P,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(f,p)},render:T,addToRenderList:y,dispose:b}}function NM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=v(null);let l=a,c=!1;function f(C,O,ee,J,oe){let ue=!1;const ie=x(J,ee,O);l!==ie&&(l=ie,h(l.object)),ue=S(C,J,ee,oe),ue&&E(C,J,ee,oe),oe!==null&&e.update(oe,r.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,P(C,O,ee,J),oe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function p(){return r.createVertexArray()}function h(C){return r.bindVertexArray(C)}function m(C){return r.deleteVertexArray(C)}function x(C,O,ee){const J=ee.wireframe===!0;let oe=s[C.id];oe===void 0&&(oe={},s[C.id]=oe);let ue=oe[O.id];ue===void 0&&(ue={},oe[O.id]=ue);let ie=ue[J];return ie===void 0&&(ie=v(p()),ue[J]=ie),ie}function v(C){const O=[],ee=[],J=[];for(let oe=0;oe<t;oe++)O[oe]=0,ee[oe]=0,J[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:ee,attributeDivisors:J,object:C,attributes:{},index:null}}function S(C,O,ee,J){const oe=l.attributes,ue=O.attributes;let ie=0;const ce=ee.getAttributes();for(const k in ce)if(ce[k].location>=0){const ae=oe[k];let N=ue[k];if(N===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),ae===void 0||ae.attribute!==N||N&&ae.data!==N.data)return!0;ie++}return l.attributesNum!==ie||l.index!==J}function E(C,O,ee,J){const oe={},ue=O.attributes;let ie=0;const ce=ee.getAttributes();for(const k in ce)if(ce[k].location>=0){let ae=ue[k];ae===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor));const N={};N.attribute=ae,ae&&ae.data&&(N.data=ae.data),oe[k]=N,ie++}l.attributes=oe,l.attributesNum=ie,l.index=J}function T(){const C=l.newAttributes;for(let O=0,ee=C.length;O<ee;O++)C[O]=0}function y(C){_(C,0)}function _(C,O){const ee=l.newAttributes,J=l.enabledAttributes,oe=l.attributeDivisors;ee[C]=1,J[C]===0&&(r.enableVertexAttribArray(C),J[C]=1),oe[C]!==O&&(r.vertexAttribDivisor(C,O),oe[C]=O)}function b(){const C=l.newAttributes,O=l.enabledAttributes;for(let ee=0,J=O.length;ee<J;ee++)O[ee]!==C[ee]&&(r.disableVertexAttribArray(ee),O[ee]=0)}function L(C,O,ee,J,oe,ue,ie){ie===!0?r.vertexAttribIPointer(C,O,ee,oe,ue):r.vertexAttribPointer(C,O,ee,J,oe,ue)}function P(C,O,ee,J){T();const oe=J.attributes,ue=ee.getAttributes(),ie=O.defaultAttributeValues;for(const ce in ue){const k=ue[ce];if(k.location>=0){let fe=oe[ce];if(fe===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),fe!==void 0){const ae=fe.normalized,N=fe.itemSize,re=e.get(fe);if(re===void 0)continue;const Ue=re.buffer,Y=re.type,de=re.bytesPerElement,Se=Y===r.INT||Y===r.UNSIGNED_INT||fe.gpuType===pd;if(fe.isInterleavedBufferAttribute){const ye=fe.data,Ae=ye.stride,Fe=fe.offset;if(ye.isInstancedInterleavedBuffer){for(let et=0;et<k.locationSize;et++)_(k.location+et,ye.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let et=0;et<k.locationSize;et++)y(k.location+et);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let et=0;et<k.locationSize;et++)L(k.location+et,N/k.locationSize,Y,ae,Ae*de,(Fe+N/k.locationSize*et)*de,Se)}else{if(fe.isInstancedBufferAttribute){for(let ye=0;ye<k.locationSize;ye++)_(k.location+ye,fe.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ye=0;ye<k.locationSize;ye++)y(k.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let ye=0;ye<k.locationSize;ye++)L(k.location+ye,N/k.locationSize,Y,ae,N*de,N/k.locationSize*ye*de,Se)}}else if(ie!==void 0){const ae=ie[ce];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(k.location,ae);break;case 3:r.vertexAttrib3fv(k.location,ae);break;case 4:r.vertexAttrib4fv(k.location,ae);break;default:r.vertexAttrib1fv(k.location,ae)}}}}b()}function z(){V();for(const C in s){const O=s[C];for(const ee in O){const J=O[ee];for(const oe in J)m(J[oe].object),delete J[oe];delete O[ee]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const O=s[C.id];for(const ee in O){const J=O[ee];for(const oe in J)m(J[oe].object),delete J[oe];delete O[ee]}delete s[C.id]}function I(C){for(const O in s){const ee=s[O];if(ee[C.id]===void 0)continue;const J=ee[C.id];for(const oe in J)m(J[oe].object),delete J[oe];delete ee[C.id]}}function V(){R(),c=!0,l!==a&&(l=a,h(l.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:V,resetDefaultState:R,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:y,disableUnusedAttributes:b}}function FM(r,e,t){let s;function a(h){s=h}function l(h,m){r.drawArrays(s,h,m),t.update(m,s,1)}function c(h,m,x){x!==0&&(r.drawArraysInstanced(s,h,m,x),t.update(m,s,x))}function f(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,m,0,x);let S=0;for(let E=0;E<x;E++)S+=m[E];t.update(S,s,1)}function p(h,m,x,v){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<h.length;E++)c(h[E],m[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(s,h,0,m,0,v,0,x);let E=0;for(let T=0;T<x;T++)E+=m[T]*v[T];t.update(E,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function OM(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==ci&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const V=I===Jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ji&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Hi&&!V)}function p(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=p(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const x=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:z,maxSamples:F}}function kM(r){const e=this;let t=null,s=0,a=!1,l=!1;const c=new Kr,f=new lt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||s!==0||a;return a=v,s=x.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,v){t=m(x,v,0)},this.setState=function(x,v,S){const E=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,_=r.get(x);if(!a||E===null||E.length===0||l&&!y)l?m(null):h();else{const b=l?0:s,L=b*4;let P=_.clippingState||null;p.value=P,P=m(E,v,L,S);for(let z=0;z!==L;++z)P[z]=t[z];_.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=b}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(x,v,S,E){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=p.value,E!==!0||y===null){const _=S+T*4,b=v.matrixWorldInverse;f.getNormalMatrix(b),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,P=S;L!==T;++L,P+=4)c.copy(x[L]).applyMatrix4(b,f),c.normal.toArray(y,P),y[P+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function BM(r){let e=new WeakMap;function t(c,f){return f===Rf?c.mapping=Zs:f===Pf&&(c.mapping=Qs),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Rf||f===Pf)if(e.has(c)){const p=e.get(c).texture;return t(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const h=new Ny(p.height);return h.fromEquirectangularTexture(r,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const Xs=4,zm=[.125,.215,.35,.446,.526,.582],Jr=20,uf=new Yy,Hm=new Et;let cf=null,ff=0,df=0,hf=!1;const Zr=(1+Math.sqrt(5))/2,Gs=1/Zr,Vm=[new K(-Zr,Gs,0),new K(Zr,Gs,0),new K(-Gs,0,Zr),new K(Gs,0,Zr),new K(0,Zr,-Gs),new K(0,Zr,Gs),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cf,ff,df),this._renderer.xr.enabled=hf,e.scissorTest=!1,Ul(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Jo,format:ci,colorSpace:to,depthBuffer:!1},a=Wm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wm(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zM(l)),this._blurMaterial=HM(l,e,t)}return a}_compileMaterial(e){const t=new fi(this._lodPlanes[0],e);this._renderer.compile(t,uf)}_sceneToCubeUV(e,t,s,a){const f=new Wn(90,1,t,s),p=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,v=m.toneMapping;m.getClearColor(Hm),m.toneMapping=Tr,m.autoClear=!1;const S=new jg({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),E=new fi(new ra,S);let T=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,T=!0):(S.color.copy(Hm),T=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(f.up.set(0,p[_],0),f.lookAt(h[_],0,0)):b===1?(f.up.set(0,0,p[_]),f.lookAt(0,h[_],0)):(f.up.set(0,p[_],0),f.lookAt(0,0,h[_]));const L=this._cubeSize;Ul(a,b*L,_>2?L:0,L,L),m.setRenderTarget(a),T&&m.render(E,f),m.render(e,f)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=v,m.autoClear=x,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Zs||e.mapping===Qs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=jm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new fi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;Ul(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(c,uf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Vm[(a-l-1)%Vm.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,x=new fi(this._lodPlanes[a],h),v=h.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Jr-1),T=l/E,y=isFinite(l)?1+Math.floor(m*T):Jr;y>Jr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Jr}`);const _=[];let b=0;for(let I=0;I<Jr;++I){const V=I/T,R=Math.exp(-V*V/2);_.push(R),I===0?b+=R:I<y&&(b+=2*R)}for(let I=0;I<_.length;I++)_[I]=_[I]/b;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-s;const P=this._sizeLods[a],z=3*P*(a>L-Xs?a-L+Xs:0),F=4*(this._cubeSize-P);Ul(t,z,F,3*P,2*P),p.setRenderTarget(t),p.render(x,uf)}}function zM(r){const e=[],t=[],s=[];let a=r;const l=r-Xs+1+zm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let p=1/f;c>r-Xs?p=zm[c-r+Xs-1]:c===0&&(p=0),s.push(p);const h=1/(f-2),m=-h,x=1+h,v=[m,m,x,m,x,x,m,m,x,x,m,x],S=6,E=6,T=3,y=2,_=1,b=new Float32Array(T*E*S),L=new Float32Array(y*E*S),P=new Float32Array(_*E*S);for(let F=0;F<S;F++){const I=F%3*2/3-1,V=F>2?0:-1,R=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];b.set(R,T*E*F),L.set(v,y*E*F);const C=[F,F,F,F,F,F];P.set(C,_*E*F)}const z=new qi;z.setAttribute("position",new Xn(b,T)),z.setAttribute("uv",new Xn(L,y)),z.setAttribute("faceIndex",new Xn(P,_)),e.push(z),a>Xs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Wm(r,e,t){const s=new is(r,e,t);return s.texture.mapping=Kl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ul(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function HM(r,e,t){const s=new Float32Array(Jr),a=new K(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Md(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Xm(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Md(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function jm(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Md(){return`

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
	`}function VM(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const p=f.mapping,h=p===Rf||p===Pf,m=p===Zs||p===Qs;if(h||m){let x=e.get(f);const v=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new Gm(r)),x=h?t.fromEquirectangular(f,x):t.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const S=f.image;return h&&S&&S.height>0||m&&S&&a(S)?(t===null&&(t=new Gm(r)),x=h?t.fromEquirectangular(f):t.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",l),x.texture):null}}}return f}function a(f){let p=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&p++;return p===h}function l(f){const p=f.target;p.removeEventListener("dispose",l);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function GM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Ws("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function WM(r,e,t,s){const a={},l=new WeakMap;function c(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(x,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function p(x){const v=x.attributes;for(const S in v)e.update(v[S],r.ARRAY_BUFFER)}function h(x){const v=[],S=x.index,E=x.attributes.position;let T=0;if(S!==null){const b=S.array;T=S.version;for(let L=0,P=b.length;L<P;L+=3){const z=b[L+0],F=b[L+1],I=b[L+2];v.push(z,F,F,I,I,z)}}else if(E!==void 0){const b=E.array;T=E.version;for(let L=0,P=b.length/3-1;L<P;L+=3){const z=L+0,F=L+1,I=L+2;v.push(z,F,F,I,I,z)}}else return;const y=new(Hg(v)?$g:qg)(v,1);y.version=T;const _=l.get(x);_&&e.remove(_),l.set(x,y)}function m(x){const v=l.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&h(x)}else h(x);return l.get(x)}return{get:f,update:p,getWireframeAttribute:m}}function XM(r,e,t){let s;function a(v){s=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,S){r.drawElements(s,S,l,v*c),t.update(S,s,1)}function h(v,S,E){E!==0&&(r.drawElementsInstanced(s,S,l,v*c,E),t.update(S,s,E))}function m(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,v,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];t.update(y,s,1)}function x(v,S,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)h(v[_]/c,S[_],T[_]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,v,0,T,0,E);let _=0;for(let b=0;b<E;b++)_+=S[b]*T[b];t.update(_,s,1)}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=x}function jM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function qM(r,e,t){const s=new WeakMap,a=new Ut;function l(c,f,p){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=m!==void 0?m.length:0;let v=s.get(f);if(v===void 0||v.count!==x){let C=function(){V.dispose(),s.delete(f),f.removeEventListener("dispose",C)};var S=C;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;E===!0&&(P=1),T===!0&&(P=2),y===!0&&(P=3);let z=f.attributes.position.count*P,F=1;z>e.maxTextureSize&&(F=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*F*4*x),V=new Gg(I,z,F,x);V.type=Hi,V.needsUpdate=!0;const R=P*4;for(let O=0;O<x;O++){const ee=_[O],J=b[O],oe=L[O],ue=z*F*4*O;for(let ie=0;ie<ee.count;ie++){const ce=ie*R;E===!0&&(a.fromBufferAttribute(ee,ie),I[ue+ce+0]=a.x,I[ue+ce+1]=a.y,I[ue+ce+2]=a.z,I[ue+ce+3]=0),T===!0&&(a.fromBufferAttribute(J,ie),I[ue+ce+4]=a.x,I[ue+ce+5]=a.y,I[ue+ce+6]=a.z,I[ue+ce+7]=0),y===!0&&(a.fromBufferAttribute(oe,ie),I[ue+ce+8]=a.x,I[ue+ce+9]=a.y,I[ue+ce+10]=a.z,I[ue+ce+11]=oe.itemSize===4?a.w:1)}}v={count:x,texture:V,size:new Ct(z,F)},s.set(f,v),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const T=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",h)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function $M(r,e,t,s){let a=new WeakMap;function l(p){const h=s.render.frame,m=p.geometry,x=e.get(p,m);if(a.get(x)!==h&&(e.update(x),a.set(x,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==h&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),a.set(p,h))),p.isSkinnedMesh){const v=p.skeleton;a.get(v)!==h&&(v.update(),a.set(v,h))}return x}function c(){a=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}const ev=new Nn,qm=new Qg(1,1),tv=new Gg,nv=new _y,iv=new Zg,$m=[],Ym=[],Km=new Float32Array(16),Zm=new Float32Array(9),Qm=new Float32Array(4);function so(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=$m[a];if(l===void 0&&(l=new Float32Array(a),$m[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Ql(r,e){let t=Ym[e];t===void 0&&(t=new Int32Array(e),Ym[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function YM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function KM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function ZM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function QM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function JM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Qm.set(s),r.uniformMatrix2fv(this.addr,!1,Qm),tn(t,s)}}function e1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Zm.set(s),r.uniformMatrix3fv(this.addr,!1,Zm),tn(t,s)}}function t1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Km.set(s),r.uniformMatrix4fv(this.addr,!1,Km),tn(t,s)}}function n1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function i1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function r1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function s1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function o1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function a1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function l1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function u1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function c1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(qm.compareFunction=zg,l=qm):l=ev,t.setTexture2D(e||l,a)}function f1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||nv,a)}function d1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||iv,a)}function h1(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||tv,a)}function p1(r){switch(r){case 5126:return YM;case 35664:return KM;case 35665:return ZM;case 35666:return QM;case 35674:return JM;case 35675:return e1;case 35676:return t1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return r1;case 35669:case 35673:return s1;case 5125:return o1;case 36294:return a1;case 36295:return l1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return h1}}function m1(r,e){r.uniform1fv(this.addr,e)}function g1(r,e){const t=so(e,this.size,2);r.uniform2fv(this.addr,t)}function v1(r,e){const t=so(e,this.size,3);r.uniform3fv(this.addr,t)}function _1(r,e){const t=so(e,this.size,4);r.uniform4fv(this.addr,t)}function x1(r,e){const t=so(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function y1(r,e){const t=so(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function S1(r,e){const t=so(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function E1(r,e){r.uniform1iv(this.addr,e)}function M1(r,e){r.uniform2iv(this.addr,e)}function T1(r,e){r.uniform3iv(this.addr,e)}function w1(r,e){r.uniform4iv(this.addr,e)}function A1(r,e){r.uniform1uiv(this.addr,e)}function C1(r,e){r.uniform2uiv(this.addr,e)}function R1(r,e){r.uniform3uiv(this.addr,e)}function P1(r,e){r.uniform4uiv(this.addr,e)}function b1(r,e,t){const s=this.cache,a=e.length,l=Ql(t,a);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||ev,l[c])}function L1(r,e,t){const s=this.cache,a=e.length,l=Ql(t,a);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||nv,l[c])}function D1(r,e,t){const s=this.cache,a=e.length,l=Ql(t,a);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||iv,l[c])}function U1(r,e,t){const s=this.cache,a=e.length,l=Ql(t,a);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||tv,l[c])}function I1(r){switch(r){case 5126:return m1;case 35664:return g1;case 35665:return v1;case 35666:return _1;case 35674:return x1;case 35675:return y1;case 35676:return S1;case 5124:case 35670:return E1;case 35667:case 35671:return M1;case 35668:case 35672:return T1;case 35669:case 35673:return w1;case 5125:return A1;case 36294:return C1;case 36295:return R1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return U1}}class N1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=p1(t.type)}}class F1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I1(t.type)}}class O1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function Jm(r,e){r.seq.push(e),r.map[e.id]=e}function k1(r,e,t){const s=r.name,a=s.length;for(pf.lastIndex=0;;){const l=pf.exec(s),c=pf.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&c+2===a){Jm(t,h===void 0?new N1(f,r,e):new F1(f,r,e));break}else{let x=t.map[f];x===void 0&&(x=new O1(f),Jm(t,x)),t=x}}}class Vl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);k1(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],p=s[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function eg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const B1=37297;let z1=0;function H1(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const tg=new lt;function V1(r){At._getMatrix(tg,At.workingColorSpace,r);const e=`mat3( ${tg.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(r)){case Xl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ng(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+H1(r.getShaderSource(e),c)}else return a}function G1(r,e){const t=V1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function W1(r,e){let t;switch(e){case Wx:t="Linear";break;case Xx:t="Reinhard";break;case jx:t="Cineon";break;case qx:t="ACESFilmic";break;case Yx:t="AgX";break;case Kx:t="Neutral";break;case $x:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Il=new K;function X1(){At.getLuminanceCoefficients(Il);const r=Il.x.toFixed(4),e=Il.y.toFixed(4),t=Il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function q1(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function $1(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function qo(r){return r!==""}function ig(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(r){return r.replace(Y1,Z1)}const K1=new Map;function Z1(r,e){let t=ut[e];if(t===void 0){const s=K1.get(e);if(s!==void 0)t=ut[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return sd(t)}const Q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sg(r){return r.replace(Q1,J1)}function J1(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function og(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function eT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ag?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Mx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function tT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zs:case Qs:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function iT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Cg:e="ENVMAP_BLENDING_MULTIPLY";break;case Vx:e="ENVMAP_BLENDING_MIX";break;case Gx:e="ENVMAP_BLENDING_ADD";break}return e}function rT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function sT(r,e,t,s){const a=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const p=eT(t),h=tT(t),m=nT(t),x=iT(t),v=rT(t),S=j1(t),E=q1(l),T=a.createProgram();let y,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(qo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(qo).join(`
`),_.length>0&&(_+=`
`)):(y=[og(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),_=[og(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?ut.tonemapping_pars_fragment:"",t.toneMapping!==Tr?W1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,G1("linearToOutputTexel",t.outputColorSpace),X1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),c=sd(c),c=ig(c,t),c=rg(c,t),f=sd(f),f=ig(f,t),f=rg(f,t),c=sg(c),f=sg(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=b+y+c,P=b+_+f,z=eg(a,a.VERTEX_SHADER,L),F=eg(a,a.FRAGMENT_SHADER,P);a.attachShader(T,z),a.attachShader(T,F),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function I(O){if(r.debug.checkShaderErrors){const ee=a.getProgramInfoLog(T).trim(),J=a.getShaderInfoLog(z).trim(),oe=a.getShaderInfoLog(F).trim();let ue=!0,ie=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(ue=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,T,z,F);else{const ce=ng(a,z,"vertex"),k=ng(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ee+`
`+ce+`
`+k)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(J===""||oe==="")&&(ie=!1);ie&&(O.diagnostics={runnable:ue,programLog:ee,vertexShader:{log:J,prefix:y},fragmentShader:{log:oe,prefix:_}})}a.deleteShader(z),a.deleteShader(F),V=new Vl(a,T),R=$1(a,T)}let V;this.getUniforms=function(){return V===void 0&&I(this),V};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(T,B1)),C},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z1++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=F,this}let oT=0;class aT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new lT(e),t.set(e,s)),s}}class lT{constructor(e){this.id=oT++,this.code=e,this.usedTimes=0}}function uT(r,e,t,s,a,l,c){const f=new Wg,p=new aT,h=new Set,m=[],x=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return h.add(R),R===0?"uv":`uv${R}`}function y(R,C,O,ee,J){const oe=ee.fog,ue=J.geometry,ie=R.isMeshStandardMaterial?ee.environment:null,ce=(R.isMeshStandardMaterial?t:e).get(R.envMap||ie),k=ce&&ce.mapping===Kl?ce.image.height:null,fe=E[R.type];R.precision!==null&&(S=a.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const ae=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,N=ae!==void 0?ae.length:0;let re=0;ue.morphAttributes.position!==void 0&&(re=1),ue.morphAttributes.normal!==void 0&&(re=2),ue.morphAttributes.color!==void 0&&(re=3);let Ue,Y,de,Se;if(fe){const yt=xi[fe];Ue=yt.vertexShader,Y=yt.fragmentShader}else Ue=R.vertexShader,Y=R.fragmentShader,p.update(R),de=p.getVertexShaderID(R),Se=p.getFragmentShaderID(R);const ye=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Fe=J.isInstancedMesh===!0,et=J.isBatchedMesh===!0,bt=!!R.map,gt=!!R.matcap,It=!!ce,H=!!R.aoMap,_n=!!R.lightMap,pt=!!R.bumpMap,ft=!!R.normalMap,Ye=!!R.displacementMap,Pt=!!R.emissiveMap,qe=!!R.metalnessMap,D=!!R.roughnessMap,w=R.anisotropy>0,Q=R.clearcoat>0,ge=R.dispersion>0,_e=R.iridescence>0,pe=R.sheen>0,Xe=R.transmission>0,Ce=w&&!!R.anisotropyMap,Oe=Q&&!!R.clearcoatMap,ct=Q&&!!R.clearcoatNormalMap,Te=Q&&!!R.clearcoatRoughnessMap,ze=_e&&!!R.iridescenceMap,Ze=_e&&!!R.iridescenceThicknessMap,tt=pe&&!!R.sheenColorMap,He=pe&&!!R.sheenRoughnessMap,dt=!!R.specularMap,st=!!R.specularColorMap,Rt=!!R.specularIntensityMap,X=Xe&&!!R.transmissionMap,Re=Xe&&!!R.thicknessMap,le=!!R.gradientMap,me=!!R.alphaMap,De=R.alphaTest>0,Le=!!R.alphaHash,ot=!!R.extensions;let Ft=Tr;R.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ft=r.toneMapping);const Zt={shaderID:fe,shaderType:R.type,shaderName:R.name,vertexShader:Ue,fragmentShader:Y,defines:R.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:et,batchingColor:et&&J._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&J.instanceColor!==null,instancingMorph:Fe&&J.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:to,alphaToCoverage:!!R.alphaToCoverage,map:bt,matcap:gt,envMap:It,envMapMode:It&&ce.mapping,envMapCubeUVHeight:k,aoMap:H,lightMap:_n,bumpMap:pt,normalMap:ft,displacementMap:v&&Ye,emissiveMap:Pt,normalMapObjectSpace:ft&&R.normalMapType===ey,normalMapTangentSpace:ft&&R.normalMapType===Bg,metalnessMap:qe,roughnessMap:D,anisotropy:w,anisotropyMap:Ce,clearcoat:Q,clearcoatMap:Oe,clearcoatNormalMap:ct,clearcoatRoughnessMap:Te,dispersion:ge,iridescence:_e,iridescenceMap:ze,iridescenceThicknessMap:Ze,sheen:pe,sheenColorMap:tt,sheenRoughnessMap:He,specularMap:dt,specularColorMap:st,specularIntensityMap:Rt,transmission:Xe,transmissionMap:X,thicknessMap:Re,gradientMap:le,opaque:R.transparent===!1&&R.blending===qs&&R.alphaToCoverage===!1,alphaMap:me,alphaTest:De,alphaHash:Le,combine:R.combine,mapUv:bt&&T(R.map.channel),aoMapUv:H&&T(R.aoMap.channel),lightMapUv:_n&&T(R.lightMap.channel),bumpMapUv:pt&&T(R.bumpMap.channel),normalMapUv:ft&&T(R.normalMap.channel),displacementMapUv:Ye&&T(R.displacementMap.channel),emissiveMapUv:Pt&&T(R.emissiveMap.channel),metalnessMapUv:qe&&T(R.metalnessMap.channel),roughnessMapUv:D&&T(R.roughnessMap.channel),anisotropyMapUv:Ce&&T(R.anisotropyMap.channel),clearcoatMapUv:Oe&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:ct&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:He&&T(R.sheenRoughnessMap.channel),specularMapUv:dt&&T(R.specularMap.channel),specularColorMapUv:st&&T(R.specularColorMap.channel),specularIntensityMapUv:Rt&&T(R.specularIntensityMap.channel),transmissionMapUv:X&&T(R.transmissionMap.channel),thicknessMapUv:Re&&T(R.thicknessMap.channel),alphaMapUv:me&&T(R.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(ft||w),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ue.attributes.uv&&(bt||me),fog:!!oe,useFog:R.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ae,skinning:J.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:bt&&R.map.isVideoTexture===!0&&At.getTransfer(R.map.colorSpace)===Dt,decodeVideoTextureEmissive:Pt&&R.emissiveMap.isVideoTexture===!0&&At.getTransfer(R.emissiveMap.colorSpace)===Dt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===yi,flipSided:R.side===In,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:ot&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&R.extensions.multiDraw===!0||et)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Zt.vertexUv1s=h.has(1),Zt.vertexUv2s=h.has(2),Zt.vertexUv3s=h.has(3),h.clear(),Zt}function _(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const O in R.defines)C.push(O),C.push(R.defines[O]);return R.isRawShaderMaterial===!1&&(b(C,R),L(C,R),C.push(r.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function b(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function L(R,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),R.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),R.push(f.mask)}function P(R){const C=E[R.type];let O;if(C){const ee=xi[C];O=Ly.clone(ee.uniforms)}else O=R.uniforms;return O}function z(R,C){let O;for(let ee=0,J=m.length;ee<J;ee++){const oe=m[ee];if(oe.cacheKey===C){O=oe,++O.usedTimes;break}}return O===void 0&&(O=new sT(r,C,R,l),m.push(O)),O}function F(R){if(--R.usedTimes===0){const C=m.indexOf(R);m[C]=m[m.length-1],m.pop(),R.destroy()}}function I(R){p.remove(R)}function V(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:P,acquireProgram:z,releaseProgram:F,releaseShaderCache:I,programs:m,dispose:V}}function cT(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function a(c,f,p){r.get(c)[f]=p}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function fT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ag(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function lg(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(x,v,S,E,T,y){let _=r[e];return _===void 0?(_={id:x.id,object:x,geometry:v,material:S,groupOrder:E,renderOrder:x.renderOrder,z:T,group:y},r[e]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=S,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=T,_.group=y),e++,_}function f(x,v,S,E,T,y){const _=c(x,v,S,E,T,y);S.transmission>0?s.push(_):S.transparent===!0?a.push(_):t.push(_)}function p(x,v,S,E,T,y){const _=c(x,v,S,E,T,y);S.transmission>0?s.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function h(x,v){t.length>1&&t.sort(x||fT),s.length>1&&s.sort(v||ag),a.length>1&&a.sort(v||ag)}function m(){for(let x=e,v=r.length;x<v;x++){const S=r[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:p,finish:m,sort:h}}function dT(){let r=new WeakMap;function e(s,a){const l=r.get(s);let c;return l===void 0?(c=new lg,r.set(s,[c])):a>=l.length?(c=new lg,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function hT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Et};break;case"SpotLight":t={position:new K,direction:new K,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function pT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let mT=0;function gT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vT(r){const e=new hT,t=pT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new K);const a=new K,l=new Wt,c=new Wt;function f(h){let m=0,x=0,v=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let S=0,E=0,T=0,y=0,_=0,b=0,L=0,P=0,z=0,F=0,I=0;h.sort(gT);for(let R=0,C=h.length;R<C;R++){const O=h[R],ee=O.color,J=O.intensity,oe=O.distance,ue=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)m+=ee.r*J,x+=ee.g*J,v+=ee.b*J;else if(O.isLightProbe){for(let ie=0;ie<9;ie++)s.probe[ie].addScaledVector(O.sh.coefficients[ie],J);I++}else if(O.isDirectionalLight){const ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ce=O.shadow,k=t.get(O);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,s.directionalShadow[S]=k,s.directionalShadowMap[S]=ue,s.directionalShadowMatrix[S]=O.shadow.matrix,b++}s.directional[S]=ie,S++}else if(O.isSpotLight){const ie=e.get(O);ie.position.setFromMatrixPosition(O.matrixWorld),ie.color.copy(ee).multiplyScalar(J),ie.distance=oe,ie.coneCos=Math.cos(O.angle),ie.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ie.decay=O.decay,s.spot[T]=ie;const ce=O.shadow;if(O.map&&(s.spotLightMap[z]=O.map,z++,ce.updateMatrices(O),O.castShadow&&F++),s.spotLightMatrix[T]=ce.matrix,O.castShadow){const k=t.get(O);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,s.spotShadow[T]=k,s.spotShadowMap[T]=ue,P++}T++}else if(O.isRectAreaLight){const ie=e.get(O);ie.color.copy(ee).multiplyScalar(J),ie.halfWidth.set(O.width*.5,0,0),ie.halfHeight.set(0,O.height*.5,0),s.rectArea[y]=ie,y++}else if(O.isPointLight){const ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),ie.distance=O.distance,ie.decay=O.decay,O.castShadow){const ce=O.shadow,k=t.get(O);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,k.shadowCameraNear=ce.camera.near,k.shadowCameraFar=ce.camera.far,s.pointShadow[E]=k,s.pointShadowMap[E]=ue,s.pointShadowMatrix[E]=O.shadow.matrix,L++}s.point[E]=ie,E++}else if(O.isHemisphereLight){const ie=e.get(O);ie.skyColor.copy(O.color).multiplyScalar(J),ie.groundColor.copy(O.groundColor).multiplyScalar(J),s.hemi[_]=ie,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=x,s.ambient[2]=v;const V=s.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==T||V.rectAreaLength!==y||V.hemiLength!==_||V.numDirectionalShadows!==b||V.numPointShadows!==L||V.numSpotShadows!==P||V.numSpotMaps!==z||V.numLightProbes!==I)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=y,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+z-F,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=I,V.directionalLength=S,V.pointLength=E,V.spotLength=T,V.rectAreaLength=y,V.hemiLength=_,V.numDirectionalShadows=b,V.numPointShadows=L,V.numSpotShadows=P,V.numSpotMaps=z,V.numLightProbes=I,s.version=mT++)}function p(h,m){let x=0,v=0,S=0,E=0,T=0;const y=m.matrixWorldInverse;for(let _=0,b=h.length;_<b;_++){const L=h[_];if(L.isDirectionalLight){const P=s.directional[x];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),x++}else if(L.isSpotLight){const P=s.spot[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const P=s.rectArea[E];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const P=s.point[v];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const P=s.hemi[T];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(y),T++}}}return{setup:f,setupView:p,state:s}}function ug(r){const e=new vT(r),t=[],s=[];function a(m){h.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function p(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function _T(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new ug(r),e.set(a,[f])):l>=c.length?(f=new ug(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const xT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yT=`uniform sampler2D shadow_pass;
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
}`;function ST(r,e,t){let s=new Sd;const a=new Ct,l=new Ct,c=new Ut,f=new zy({depthPacking:Jx}),p=new Hy,h={},m=t.maxTextureSize,x={[Ar]:In,[In]:Ar,[yi]:yi},v=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:xT,fragmentShader:yT}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new qi;E.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new fi(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ag;let _=this.type;this.render=function(F,I,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const R=r.getRenderTarget(),C=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),ee=r.state;ee.setBlending(Mr),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const J=_!==zi&&this.type===zi,oe=_===zi&&this.type!==zi;for(let ue=0,ie=F.length;ue<ie;ue++){const ce=F[ue],k=ce.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const fe=k.getFrameExtents();if(a.multiply(fe),l.copy(k.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/fe.x),a.x=l.x*fe.x,k.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/fe.y),a.y=l.y*fe.y,k.mapSize.y=l.y)),k.map===null||J===!0||oe===!0){const N=this.type!==zi?{minFilter:di,magFilter:di}:{};k.map!==null&&k.map.dispose(),k.map=new is(a.x,a.y,N),k.map.texture.name=ce.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const ae=k.getViewportCount();for(let N=0;N<ae;N++){const re=k.getViewport(N);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ee.viewport(c),k.updateMatrices(ce,N),s=k.getFrustum(),P(I,V,k.camera,ce,this.type)}k.isPointLightShadow!==!0&&this.type===zi&&b(k,V),k.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(R,C,O)};function b(F,I){const V=e.update(T);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new is(a.x,a.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(I,null,V,v,T,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(I,null,V,S,T,null)}function L(F,I,V,R){let C=null;const O=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(O!==void 0)C=O;else if(C=V.isPointLight===!0?p:f,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ee=C.uuid,J=I.uuid;let oe=h[ee];oe===void 0&&(oe={},h[ee]=oe);let ue=oe[J];ue===void 0&&(ue=C.clone(),oe[J]=ue,I.addEventListener("dispose",z)),C=ue}if(C.visible=I.visible,C.wireframe=I.wireframe,R===zi?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:x[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ee=r.properties.get(C);ee.light=V}return C}function P(F,I,V,R,C){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===zi)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const J=e.update(F),oe=F.material;if(Array.isArray(oe)){const ue=J.groups;for(let ie=0,ce=ue.length;ie<ce;ie++){const k=ue[ie],fe=oe[k.materialIndex];if(fe&&fe.visible){const ae=L(F,fe,R,C);F.onBeforeShadow(r,F,I,V,J,ae,k),r.renderBufferDirect(V,null,J,ae,F,k),F.onAfterShadow(r,F,I,V,J,ae,k)}}}else if(oe.visible){const ue=L(F,oe,R,C);F.onBeforeShadow(r,F,I,V,J,ue,null),r.renderBufferDirect(V,null,J,ue,F,null),F.onAfterShadow(r,F,I,V,J,ue,null)}}const ee=F.children;for(let J=0,oe=ee.length;J<oe;J++)P(ee[J],I,V,R,C)}function z(F){F.target.removeEventListener("dispose",z);for(const V in h){const R=h[V],C=F.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const ET={[Sf]:Ef,[Mf]:Af,[Tf]:Cf,[Ks]:wf,[Ef]:Sf,[Af]:Mf,[Cf]:Tf,[wf]:Ks};function MT(r,e){function t(){let X=!1;const Re=new Ut;let le=null;const me=new Ut(0,0,0,0);return{setMask:function(De){le!==De&&!X&&(r.colorMask(De,De,De,De),le=De)},setLocked:function(De){X=De},setClear:function(De,Le,ot,Ft,Zt){Zt===!0&&(De*=Ft,Le*=Ft,ot*=Ft),Re.set(De,Le,ot,Ft),me.equals(Re)===!1&&(r.clearColor(De,Le,ot,Ft),me.copy(Re))},reset:function(){X=!1,le=null,me.set(-1,0,0,0)}}}function s(){let X=!1,Re=!1,le=null,me=null,De=null;return{setReversed:function(Le){if(Re!==Le){const ot=e.get("EXT_clip_control");Re?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Ft=De;De=null,this.setClear(Ft)}Re=Le},getReversed:function(){return Re},setTest:function(Le){Le?ye(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Le){le!==Le&&!X&&(r.depthMask(Le),le=Le)},setFunc:function(Le){if(Re&&(Le=ET[Le]),me!==Le){switch(Le){case Sf:r.depthFunc(r.NEVER);break;case Ef:r.depthFunc(r.ALWAYS);break;case Mf:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case Tf:r.depthFunc(r.EQUAL);break;case wf:r.depthFunc(r.GEQUAL);break;case Af:r.depthFunc(r.GREATER);break;case Cf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=Le}},setLocked:function(Le){X=Le},setClear:function(Le){De!==Le&&(Re&&(Le=1-Le),r.clearDepth(Le),De=Le)},reset:function(){X=!1,le=null,me=null,De=null,Re=!1}}}function a(){let X=!1,Re=null,le=null,me=null,De=null,Le=null,ot=null,Ft=null,Zt=null;return{setTest:function(yt){X||(yt?ye(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(yt){Re!==yt&&!X&&(r.stencilMask(yt),Re=yt)},setFunc:function(yt,wn,xn){(le!==yt||me!==wn||De!==xn)&&(r.stencilFunc(yt,wn,xn),le=yt,me=wn,De=xn)},setOp:function(yt,wn,xn){(Le!==yt||ot!==wn||Ft!==xn)&&(r.stencilOp(yt,wn,xn),Le=yt,ot=wn,Ft=xn)},setLocked:function(yt){X=yt},setClear:function(yt){Zt!==yt&&(r.clearStencil(yt),Zt=yt)},reset:function(){X=!1,Re=null,le=null,me=null,De=null,Le=null,ot=null,Ft=null,Zt=null}}}const l=new t,c=new s,f=new a,p=new WeakMap,h=new WeakMap;let m={},x={},v=new WeakMap,S=[],E=null,T=!1,y=null,_=null,b=null,L=null,P=null,z=null,F=null,I=new Et(0,0,0),V=0,R=!1,C=null,O=null,ee=null,J=null,oe=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ce=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(k)[1]),ie=ce>=1):k.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ie=ce>=2);let fe=null,ae={};const N=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),Ue=new Ut().fromArray(N),Y=new Ut().fromArray(re);function de(X,Re,le,me){const De=new Uint8Array(4),Le=r.createTexture();r.bindTexture(X,Le),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<le;ot++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(Re+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return Le}const Se={};Se[r.TEXTURE_2D]=de(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=de(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=de(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=de(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ye(r.DEPTH_TEST),c.setFunc(Ks),pt(!1),ft(um),ye(r.CULL_FACE),H(Mr);function ye(X){m[X]!==!0&&(r.enable(X),m[X]=!0)}function Ae(X){m[X]!==!1&&(r.disable(X),m[X]=!1)}function Fe(X,Re){return x[X]!==Re?(r.bindFramebuffer(X,Re),x[X]=Re,X===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Re),X===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function et(X,Re){let le=S,me=!1;if(X){le=v.get(Re),le===void 0&&(le=[],v.set(Re,le));const De=X.textures;if(le.length!==De.length||le[0]!==r.COLOR_ATTACHMENT0){for(let Le=0,ot=De.length;Le<ot;Le++)le[Le]=r.COLOR_ATTACHMENT0+Le;le.length=De.length,me=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,me=!0);me&&r.drawBuffers(le)}function bt(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const gt={[Qr]:r.FUNC_ADD,[wx]:r.FUNC_SUBTRACT,[Ax]:r.FUNC_REVERSE_SUBTRACT};gt[Cx]=r.MIN,gt[Rx]=r.MAX;const It={[Px]:r.ZERO,[bx]:r.ONE,[Lx]:r.SRC_COLOR,[xf]:r.SRC_ALPHA,[Ox]:r.SRC_ALPHA_SATURATE,[Nx]:r.DST_COLOR,[Ux]:r.DST_ALPHA,[Dx]:r.ONE_MINUS_SRC_COLOR,[yf]:r.ONE_MINUS_SRC_ALPHA,[Fx]:r.ONE_MINUS_DST_COLOR,[Ix]:r.ONE_MINUS_DST_ALPHA,[kx]:r.CONSTANT_COLOR,[Bx]:r.ONE_MINUS_CONSTANT_COLOR,[zx]:r.CONSTANT_ALPHA,[Hx]:r.ONE_MINUS_CONSTANT_ALPHA};function H(X,Re,le,me,De,Le,ot,Ft,Zt,yt){if(X===Mr){T===!0&&(Ae(r.BLEND),T=!1);return}if(T===!1&&(ye(r.BLEND),T=!0),X!==Tx){if(X!==y||yt!==R){if((_!==Qr||P!==Qr)&&(r.blendEquation(r.FUNC_ADD),_=Qr,P=Qr),yt)switch(X){case qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cm:r.blendFunc(r.ONE,r.ONE);break;case fm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case fm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}b=null,L=null,z=null,F=null,I.set(0,0,0),V=0,y=X,R=yt}return}De=De||Re,Le=Le||le,ot=ot||me,(Re!==_||De!==P)&&(r.blendEquationSeparate(gt[Re],gt[De]),_=Re,P=De),(le!==b||me!==L||Le!==z||ot!==F)&&(r.blendFuncSeparate(It[le],It[me],It[Le],It[ot]),b=le,L=me,z=Le,F=ot),(Ft.equals(I)===!1||Zt!==V)&&(r.blendColor(Ft.r,Ft.g,Ft.b,Zt),I.copy(Ft),V=Zt),y=X,R=!1}function _n(X,Re){X.side===yi?Ae(r.CULL_FACE):ye(r.CULL_FACE);let le=X.side===In;Re&&(le=!le),pt(le),X.blending===qs&&X.transparent===!1?H(Mr):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const me=X.stencilWrite;f.setTest(me),me&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Pt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(X){C!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),C=X)}function ft(X){X!==Sx?(ye(r.CULL_FACE),X!==O&&(X===um?r.cullFace(r.BACK):X===Ex?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),O=X}function Ye(X){X!==ee&&(ie&&r.lineWidth(X),ee=X)}function Pt(X,Re,le){X?(ye(r.POLYGON_OFFSET_FILL),(J!==Re||oe!==le)&&(r.polygonOffset(Re,le),J=Re,oe=le)):Ae(r.POLYGON_OFFSET_FILL)}function qe(X){X?ye(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function D(X){X===void 0&&(X=r.TEXTURE0+ue-1),fe!==X&&(r.activeTexture(X),fe=X)}function w(X,Re,le){le===void 0&&(fe===null?le=r.TEXTURE0+ue-1:le=fe);let me=ae[le];me===void 0&&(me={type:void 0,texture:void 0},ae[le]=me),(me.type!==X||me.texture!==Re)&&(fe!==le&&(r.activeTexture(le),fe=le),r.bindTexture(X,Re||Se[X]),me.type=X,me.texture=Re)}function Q(){const X=ae[fe];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ge(){try{r.compressedTexImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{r.compressedTexImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{r.texSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xe(){try{r.texSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{r.texStorage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{r.texStorage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(){try{r.texImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ze(){try{r.texImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(X){Ue.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ue.copy(X))}function He(X){Y.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Y.copy(X))}function dt(X,Re){let le=h.get(Re);le===void 0&&(le=new WeakMap,h.set(Re,le));let me=le.get(X);me===void 0&&(me=r.getUniformBlockIndex(Re,X.name),le.set(X,me))}function st(X,Re){const me=h.get(Re).get(X);p.get(Re)!==me&&(r.uniformBlockBinding(Re,me,X.__bindingPointIndex),p.set(Re,me))}function Rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},fe=null,ae={},x={},v=new WeakMap,S=[],E=null,T=!1,y=null,_=null,b=null,L=null,P=null,z=null,F=null,I=new Et(0,0,0),V=0,R=!1,C=null,O=null,ee=null,J=null,oe=null,Ue.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ye,disable:Ae,bindFramebuffer:Fe,drawBuffers:et,useProgram:bt,setBlending:H,setMaterial:_n,setFlipSided:pt,setCullFace:ft,setLineWidth:Ye,setPolygonOffset:Pt,setScissorTest:qe,activeTexture:D,bindTexture:w,unbindTexture:Q,compressedTexImage2D:ge,compressedTexImage3D:_e,texImage2D:ze,texImage3D:Ze,updateUBOMapping:dt,uniformBlockBinding:st,texStorage2D:ct,texStorage3D:Te,texSubImage2D:pe,texSubImage3D:Xe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Oe,scissor:tt,viewport:He,reset:Rt}}function TT(r,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ct,m=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,w){return S?new OffscreenCanvas(D,w):ql("canvas")}function T(D,w,Q){let ge=1;const _e=qe(D);if((_e.width>Q||_e.height>Q)&&(ge=Q/Math.max(_e.width,_e.height)),ge<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pe=Math.floor(ge*_e.width),Xe=Math.floor(ge*_e.height);x===void 0&&(x=E(pe,Xe));const Ce=w?E(pe,Xe):x;return Ce.width=pe,Ce.height=Xe,Ce.getContext("2d").drawImage(D,0,0,pe,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+pe+"x"+Xe+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function y(D){return D.generateMipmaps}function _(D){r.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(D,w,Q,ge,_e=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe=w;if(w===r.RED&&(Q===r.FLOAT&&(pe=r.R32F),Q===r.HALF_FLOAT&&(pe=r.R16F),Q===r.UNSIGNED_BYTE&&(pe=r.R8)),w===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pe=r.R8UI),Q===r.UNSIGNED_SHORT&&(pe=r.R16UI),Q===r.UNSIGNED_INT&&(pe=r.R32UI),Q===r.BYTE&&(pe=r.R8I),Q===r.SHORT&&(pe=r.R16I),Q===r.INT&&(pe=r.R32I)),w===r.RG&&(Q===r.FLOAT&&(pe=r.RG32F),Q===r.HALF_FLOAT&&(pe=r.RG16F),Q===r.UNSIGNED_BYTE&&(pe=r.RG8)),w===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pe=r.RG8UI),Q===r.UNSIGNED_SHORT&&(pe=r.RG16UI),Q===r.UNSIGNED_INT&&(pe=r.RG32UI),Q===r.BYTE&&(pe=r.RG8I),Q===r.SHORT&&(pe=r.RG16I),Q===r.INT&&(pe=r.RG32I)),w===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),Q===r.UNSIGNED_INT&&(pe=r.RGB32UI),Q===r.BYTE&&(pe=r.RGB8I),Q===r.SHORT&&(pe=r.RGB16I),Q===r.INT&&(pe=r.RGB32I)),w===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),Q===r.UNSIGNED_INT&&(pe=r.RGBA32UI),Q===r.BYTE&&(pe=r.RGBA8I),Q===r.SHORT&&(pe=r.RGBA16I),Q===r.INT&&(pe=r.RGBA32I)),w===r.RGB&&Q===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),w===r.RGBA){const Xe=_e?Xl:At.getTransfer(ge);Q===r.FLOAT&&(pe=r.RGBA32F),Q===r.HALF_FLOAT&&(pe=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(pe=Xe===Dt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function P(D,w){let Q;return D?w===null||w===ns||w===Js?Q=r.DEPTH24_STENCIL8:w===Hi?Q=r.DEPTH32F_STENCIL8:w===Yo&&(Q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ns||w===Js?Q=r.DEPTH_COMPONENT24:w===Hi?Q=r.DEPTH_COMPONENT32F:w===Yo&&(Q=r.DEPTH_COMPONENT16),Q}function z(D,w){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==di&&D.minFilter!==Si?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function F(D){const w=D.target;w.removeEventListener("dispose",F),V(w),w.isVideoTexture&&m.delete(w)}function I(D){const w=D.target;w.removeEventListener("dispose",I),C(w)}function V(D){const w=s.get(D);if(w.__webglInit===void 0)return;const Q=D.source,ge=v.get(Q);if(ge){const _e=ge[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&R(D),Object.keys(ge).length===0&&v.delete(Q)}s.remove(D)}function R(D){const w=s.get(D);r.deleteTexture(w.__webglTexture);const Q=D.source,ge=v.get(Q);delete ge[w.__cacheKey],c.memory.textures--}function C(D){const w=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(w.__webglFramebuffer[ge]))for(let _e=0;_e<w.__webglFramebuffer[ge].length;_e++)r.deleteFramebuffer(w.__webglFramebuffer[ge][_e]);else r.deleteFramebuffer(w.__webglFramebuffer[ge]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[ge])}else{if(Array.isArray(w.__webglFramebuffer))for(let ge=0;ge<w.__webglFramebuffer.length;ge++)r.deleteFramebuffer(w.__webglFramebuffer[ge]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ge=0;ge<w.__webglColorRenderbuffer.length;ge++)w.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[ge]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=D.textures;for(let ge=0,_e=Q.length;ge<_e;ge++){const pe=s.get(Q[ge]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),c.memory.textures--),s.remove(Q[ge])}s.remove(D)}let O=0;function ee(){O=0}function J(){const D=O;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),O+=1,D}function oe(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function ue(D,w){const Q=s.get(D);if(D.isVideoTexture&&Ye(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const ge=D.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(Q,D,w);return}}t.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+w)}function ie(D,w){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){Y(Q,D,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+w)}function ce(D,w){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){Y(Q,D,w);return}t.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+w)}function k(D,w){const Q=s.get(D);if(D.version>0&&Q.__version!==D.version){de(Q,D,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+w)}const fe={[bf]:r.REPEAT,[es]:r.CLAMP_TO_EDGE,[Lf]:r.MIRRORED_REPEAT},ae={[di]:r.NEAREST,[Zx]:r.NEAREST_MIPMAP_NEAREST,[hl]:r.NEAREST_MIPMAP_LINEAR,[Si]:r.LINEAR,[Oc]:r.LINEAR_MIPMAP_NEAREST,[ts]:r.LINEAR_MIPMAP_LINEAR},N={[ty]:r.NEVER,[ay]:r.ALWAYS,[ny]:r.LESS,[zg]:r.LEQUAL,[iy]:r.EQUAL,[oy]:r.GEQUAL,[ry]:r.GREATER,[sy]:r.NOTEQUAL};function re(D,w){if(w.type===Hi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Si||w.magFilter===Oc||w.magFilter===hl||w.magFilter===ts||w.minFilter===Si||w.minFilter===Oc||w.minFilter===hl||w.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,fe[w.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,fe[w.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,fe[w.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ae[w.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ae[w.minFilter]),w.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,N[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===di||w.minFilter!==hl&&w.minFilter!==ts||w.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function Ue(D,w){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",F));const ge=w.source;let _e=v.get(ge);_e===void 0&&(_e={},v.set(ge,_e));const pe=oe(w);if(pe!==D.__cacheKey){_e[pe]===void 0&&(_e[pe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),_e[pe].usedTimes++;const Xe=_e[D.__cacheKey];Xe!==void 0&&(_e[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&R(w)),D.__cacheKey=pe,D.__webglTexture=_e[pe].texture}return Q}function Y(D,w,Q){let ge=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ge=r.TEXTURE_3D);const _e=Ue(D,w),pe=w.source;t.bindTexture(ge,D.__webglTexture,r.TEXTURE0+Q);const Xe=s.get(pe);if(pe.version!==Xe.__version||_e===!0){t.activeTexture(r.TEXTURE0+Q);const Ce=At.getPrimaries(At.workingColorSpace),Oe=w.colorSpace===Er?null:At.getPrimaries(w.colorSpace),ct=w.colorSpace===Er||Ce===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Te=T(w.image,!1,a.maxTextureSize);Te=Pt(w,Te);const ze=l.convert(w.format,w.colorSpace),Ze=l.convert(w.type);let tt=L(w.internalFormat,ze,Ze,w.colorSpace,w.isVideoTexture);re(ge,w);let He;const dt=w.mipmaps,st=w.isVideoTexture!==!0,Rt=Xe.__version===void 0||_e===!0,X=pe.dataReady,Re=z(w,Te);if(w.isDepthTexture)tt=P(w.format===eo,w.type),Rt&&(st?t.texStorage2D(r.TEXTURE_2D,1,tt,Te.width,Te.height):t.texImage2D(r.TEXTURE_2D,0,tt,Te.width,Te.height,0,ze,Ze,null));else if(w.isDataTexture)if(dt.length>0){st&&Rt&&t.texStorage2D(r.TEXTURE_2D,Re,tt,dt[0].width,dt[0].height);for(let le=0,me=dt.length;le<me;le++)He=dt[le],st?X&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,He.width,He.height,ze,Ze,He.data):t.texImage2D(r.TEXTURE_2D,le,tt,He.width,He.height,0,ze,Ze,He.data);w.generateMipmaps=!1}else st?(Rt&&t.texStorage2D(r.TEXTURE_2D,Re,tt,Te.width,Te.height),X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Te.width,Te.height,ze,Ze,Te.data)):t.texImage2D(r.TEXTURE_2D,0,tt,Te.width,Te.height,0,ze,Ze,Te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&Rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,tt,dt[0].width,dt[0].height,Te.depth);for(let le=0,me=dt.length;le<me;le++)if(He=dt[le],w.format!==ci)if(ze!==null)if(st){if(X)if(w.layerUpdates.size>0){const De=Bm(He.width,He.height,w.format,w.type);for(const Le of w.layerUpdates){const ot=He.data.subarray(Le*De/He.data.BYTES_PER_ELEMENT,(Le+1)*De/He.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,Le,He.width,He.height,1,ze,ot)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,He.width,He.height,Te.depth,ze,He.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,tt,He.width,He.height,Te.depth,0,He.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,He.width,He.height,Te.depth,ze,Ze,He.data):t.texImage3D(r.TEXTURE_2D_ARRAY,le,tt,He.width,He.height,Te.depth,0,ze,Ze,He.data)}else{st&&Rt&&t.texStorage2D(r.TEXTURE_2D,Re,tt,dt[0].width,dt[0].height);for(let le=0,me=dt.length;le<me;le++)He=dt[le],w.format!==ci?ze!==null?st?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,He.width,He.height,ze,He.data):t.compressedTexImage2D(r.TEXTURE_2D,le,tt,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?X&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,He.width,He.height,ze,Ze,He.data):t.texImage2D(r.TEXTURE_2D,le,tt,He.width,He.height,0,ze,Ze,He.data)}else if(w.isDataArrayTexture)if(st){if(Rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,tt,Te.width,Te.height,Te.depth),X)if(w.layerUpdates.size>0){const le=Bm(Te.width,Te.height,w.format,w.type);for(const me of w.layerUpdates){const De=Te.data.subarray(me*le/Te.data.BYTES_PER_ELEMENT,(me+1)*le/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,Te.width,Te.height,1,ze,Ze,De)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,ze,Ze,Te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,tt,Te.width,Te.height,Te.depth,0,ze,Ze,Te.data);else if(w.isData3DTexture)st?(Rt&&t.texStorage3D(r.TEXTURE_3D,Re,tt,Te.width,Te.height,Te.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,ze,Ze,Te.data)):t.texImage3D(r.TEXTURE_3D,0,tt,Te.width,Te.height,Te.depth,0,ze,Ze,Te.data);else if(w.isFramebufferTexture){if(Rt)if(st)t.texStorage2D(r.TEXTURE_2D,Re,tt,Te.width,Te.height);else{let le=Te.width,me=Te.height;for(let De=0;De<Re;De++)t.texImage2D(r.TEXTURE_2D,De,tt,le,me,0,ze,Ze,null),le>>=1,me>>=1}}else if(dt.length>0){if(st&&Rt){const le=qe(dt[0]);t.texStorage2D(r.TEXTURE_2D,Re,tt,le.width,le.height)}for(let le=0,me=dt.length;le<me;le++)He=dt[le],st?X&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,ze,Ze,He):t.texImage2D(r.TEXTURE_2D,le,tt,ze,Ze,He);w.generateMipmaps=!1}else if(st){if(Rt){const le=qe(Te);t.texStorage2D(r.TEXTURE_2D,Re,tt,le.width,le.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,Ze,Te)}else t.texImage2D(r.TEXTURE_2D,0,tt,ze,Ze,Te);y(w)&&_(ge),Xe.__version=pe.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function de(D,w,Q){if(w.image.length!==6)return;const ge=Ue(D,w),_e=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Q);const pe=s.get(_e);if(_e.version!==pe.__version||ge===!0){t.activeTexture(r.TEXTURE0+Q);const Xe=At.getPrimaries(At.workingColorSpace),Ce=w.colorSpace===Er?null:At.getPrimaries(w.colorSpace),Oe=w.colorSpace===Er||Xe===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ct=w.isCompressedTexture||w.image[0].isCompressedTexture,Te=w.image[0]&&w.image[0].isDataTexture,ze=[];for(let me=0;me<6;me++)!ct&&!Te?ze[me]=T(w.image[me],!0,a.maxCubemapSize):ze[me]=Te?w.image[me].image:w.image[me],ze[me]=Pt(w,ze[me]);const Ze=ze[0],tt=l.convert(w.format,w.colorSpace),He=l.convert(w.type),dt=L(w.internalFormat,tt,He,w.colorSpace),st=w.isVideoTexture!==!0,Rt=pe.__version===void 0||ge===!0,X=_e.dataReady;let Re=z(w,Ze);re(r.TEXTURE_CUBE_MAP,w);let le;if(ct){st&&Rt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,dt,Ze.width,Ze.height);for(let me=0;me<6;me++){le=ze[me].mipmaps;for(let De=0;De<le.length;De++){const Le=le[De];w.format!==ci?tt!==null?st?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Le.width,Le.height,tt,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,dt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Le.width,Le.height,tt,He,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,dt,Le.width,Le.height,0,tt,He,Le.data)}}}else{if(le=w.mipmaps,st&&Rt){le.length>0&&Re++;const me=qe(ze[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,dt,me.width,me.height)}for(let me=0;me<6;me++)if(Te){st?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ze[me].width,ze[me].height,tt,He,ze[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,dt,ze[me].width,ze[me].height,0,tt,He,ze[me].data);for(let De=0;De<le.length;De++){const ot=le[De].image[me].image;st?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,ot.width,ot.height,tt,He,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,dt,ot.width,ot.height,0,tt,He,ot.data)}}else{st?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,tt,He,ze[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,dt,tt,He,ze[me]);for(let De=0;De<le.length;De++){const Le=le[De];st?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,tt,He,Le.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,dt,tt,He,Le.image[me])}}}y(w)&&_(r.TEXTURE_CUBE_MAP),pe.__version=_e.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Se(D,w,Q,ge,_e,pe){const Xe=l.convert(Q.format,Q.colorSpace),Ce=l.convert(Q.type),Oe=L(Q.internalFormat,Xe,Ce,Q.colorSpace),ct=s.get(w),Te=s.get(Q);if(Te.__renderTarget=w,!ct.__hasExternalTextures){const ze=Math.max(1,w.width>>pe),Ze=Math.max(1,w.height>>pe);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,pe,Oe,ze,Ze,w.depth,0,Xe,Ce,null):t.texImage2D(_e,pe,Oe,ze,Ze,0,Xe,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),ft(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,_e,Te.__webglTexture,0,pt(w)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,_e,Te.__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(D,w,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),w.depthBuffer){const ge=w.depthTexture,_e=ge&&ge.isDepthTexture?ge.type:null,pe=P(w.stencilBuffer,_e),Xe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=pt(w);ft(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,pe,w.width,w.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,pe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,pe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,D)}else{const ge=w.textures;for(let _e=0;_e<ge.length;_e++){const pe=ge[_e],Xe=l.convert(pe.format,pe.colorSpace),Ce=l.convert(pe.type),Oe=L(pe.internalFormat,Xe,Ce,pe.colorSpace),ct=pt(w);Q&&ft(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,Oe,w.width,w.height):ft(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,Oe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=s.get(w.depthTexture);ge.__renderTarget=w,(!ge.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ue(w.depthTexture,0);const _e=ge.__webglTexture,pe=pt(w);if(w.depthTexture.format===$s)ft(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(w.depthTexture.format===eo)ft(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Fe(D){const w=s.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const ge=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ge){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ge.removeEventListener("dispose",_e)};ge.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=ge}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,D)}else if(Q){w.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ge]),w.__webglDepthbuffer[ge]===void 0)w.__webglDepthbuffer[ge]=r.createRenderbuffer(),ye(w.__webglDepthbuffer[ge],D,!1);else{const _e=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=w.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ye(w.__webglDepthbuffer,D,!1);else{const ge=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,_e)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function et(D,w,Q){const ge=s.get(D);w!==void 0&&Se(ge.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&Fe(D)}function bt(D){const w=D.texture,Q=s.get(D),ge=s.get(w);D.addEventListener("dispose",I);const _e=D.textures,pe=D.isWebGLCubeRenderTarget===!0,Xe=_e.length>1;if(Xe||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=w.version,c.memory.textures++),pe){Q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[Ce]=[];for(let Oe=0;Oe<w.mipmaps.length;Oe++)Q.__webglFramebuffer[Ce][Oe]=r.createFramebuffer()}else Q.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)Q.__webglFramebuffer[Ce]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Ce=0,Oe=_e.length;Ce<Oe;Ce++){const ct=s.get(_e[Ce]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&ft(D)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Oe=_e[Ce];Q.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce]);const ct=l.convert(Oe.format,Oe.colorSpace),Te=l.convert(Oe.type),ze=L(Oe.internalFormat,ct,Te,Oe.colorSpace,D.isXRRenderTarget===!0),Ze=pt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,ze,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),ye(Q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),re(r.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)Se(Q.__webglFramebuffer[Ce][Oe],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Oe);else Se(Q.__webglFramebuffer[Ce],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(w)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ce=0,Oe=_e.length;Ce<Oe;Ce++){const ct=_e[Ce],Te=s.get(ct);t.bindTexture(r.TEXTURE_2D,Te.__webglTexture),re(r.TEXTURE_2D,ct),Se(Q.__webglFramebuffer,D,ct,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),y(ct)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ge.__webglTexture),re(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)Se(Q.__webglFramebuffer[Oe],D,w,r.COLOR_ATTACHMENT0,Ce,Oe);else Se(Q.__webglFramebuffer,D,w,r.COLOR_ATTACHMENT0,Ce,0);y(w)&&_(Ce),t.unbindTexture()}D.depthBuffer&&Fe(D)}function gt(D){const w=D.textures;for(let Q=0,ge=w.length;Q<ge;Q++){const _e=w[Q];if(y(_e)){const pe=b(D),Xe=s.get(_e).__webglTexture;t.bindTexture(pe,Xe),_(pe),t.unbindTexture()}}}const It=[],H=[];function _n(D){if(D.samples>0){if(ft(D)===!1){const w=D.textures,Q=D.width,ge=D.height;let _e=r.COLOR_BUFFER_BIT;const pe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=s.get(D),Ce=w.length>1;if(Ce)for(let Oe=0;Oe<w.length;Oe++)t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Oe=0;Oe<w.length;Oe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Oe]);const ct=s.get(w[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,Q,ge,0,0,Q,ge,_e,r.NEAREST),p===!0&&(It.length=0,H.length=0,It.push(r.COLOR_ATTACHMENT0+Oe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(It.push(pe),H.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Oe=0;Oe<w.length;Oe++){t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Oe]);const ct=s.get(w[Oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,ct,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const w=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function pt(D){return Math.min(a.maxSamples,D.samples)}function ft(D){const w=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(D){const w=c.render.frame;m.get(D)!==w&&(m.set(D,w),D.update())}function Pt(D,w){const Q=D.colorSpace,ge=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==to&&Q!==Er&&(At.getTransfer(Q)===Dt?(ge!==ci||_e!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}function qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=ee,this.setTexture2D=ue,this.setTexture2DArray=ie,this.setTexture3D=ce,this.setTextureCube=k,this.rebindTextures=et,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ft}function wT(r,e){function t(s,a=Er){let l;const c=At.getTransfer(a);if(s===ji)return r.UNSIGNED_BYTE;if(s===md)return r.UNSIGNED_SHORT_4_4_4_4;if(s===gd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Lg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Pg)return r.BYTE;if(s===bg)return r.SHORT;if(s===Yo)return r.UNSIGNED_SHORT;if(s===pd)return r.INT;if(s===ns)return r.UNSIGNED_INT;if(s===Hi)return r.FLOAT;if(s===Jo)return r.HALF_FLOAT;if(s===Dg)return r.ALPHA;if(s===Ug)return r.RGB;if(s===ci)return r.RGBA;if(s===Ig)return r.LUMINANCE;if(s===Ng)return r.LUMINANCE_ALPHA;if(s===$s)return r.DEPTH_COMPONENT;if(s===eo)return r.DEPTH_STENCIL;if(s===Fg)return r.RED;if(s===vd)return r.RED_INTEGER;if(s===Og)return r.RG;if(s===_d)return r.RG_INTEGER;if(s===xd)return r.RGBA_INTEGER;if(s===Ol||s===kl||s===Bl||s===zl)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Ol)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Ol)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Df||s===Uf||s===If||s===Nf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Df)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Uf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===If)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ff||s===Of||s===kf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Ff||s===Of)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===kf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Bf||s===zf||s===Hf||s===Vf||s===Gf||s===Wf||s===Xf||s===jf||s===qf||s===$f||s===Yf||s===Kf||s===Zf||s===Qf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Bf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Hf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$f)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hl||s===Jf||s===ed)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Hl)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Jf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ed)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kg||s===td||s===nd||s===id)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Hl)return l.COMPRESSED_RED_RGTC1_EXT;if(s===td)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===id)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Js?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const AT={type:"move"};class mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,s),_=this._getHandJoint(h,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const m=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],v=m.position.distanceTo(x.position),S=.02,E=.005;h.inputState.pinching&&v>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(AT)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Ll;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const CT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RT=`
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

}`;class PT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Nn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Cr({vertexShader:CT,fragmentShader:RT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fi(new Zl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bT extends ro{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",p=1,h=null,m=null,x=null,v=null,S=null,E=null;const T=new PT,y=t.getContextAttributes();let _=null,b=null;const L=[],P=[],z=new Ct;let F=null;const I=new Wn;I.viewport=new Ut;const V=new Wn;V.viewport=new Ut;const R=[I,V],C=new Ky;let O=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let de=L[Y];return de===void 0&&(de=new mf,L[Y]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Y){let de=L[Y];return de===void 0&&(de=new mf,L[Y]=de),de.getGripSpace()},this.getHand=function(Y){let de=L[Y];return de===void 0&&(de=new mf,L[Y]=de),de.getHandSpace()};function J(Y){const de=P.indexOf(Y.inputSource);if(de===-1)return;const Se=L[de];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,h||c),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function oe(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",ue);for(let Y=0;Y<L.length;Y++){const de=P[Y];de!==null&&(P[Y]=null,L[Y].disconnect(de))}O=null,ee=null,T.reset(),e.setRenderTarget(_),S=null,v=null,x=null,a=null,b=null,Ue.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){f=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",ue),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(z),a.renderState.layers===void 0){const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,de),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new is(S.framebufferWidth,S.framebufferHeight,{format:ci,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let de=null,Se=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?eo:$s,Se=y.stencil?Js:ns);const Ae={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:l};x=new XRWebGLBinding(a,t),v=x.createProjectionLayer(Ae),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new is(v.textureWidth,v.textureHeight,{format:ci,type:ji,depthTexture:new Qg(v.textureWidth,v.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await a.requestReferenceSpace(f),Ue.setContext(a),Ue.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ue(Y){for(let de=0;de<Y.removed.length;de++){const Se=Y.removed[de],ye=P.indexOf(Se);ye>=0&&(P[ye]=null,L[ye].disconnect(Se))}for(let de=0;de<Y.added.length;de++){const Se=Y.added[de];let ye=P.indexOf(Se);if(ye===-1){for(let Fe=0;Fe<L.length;Fe++)if(Fe>=P.length){P.push(Se),ye=Fe;break}else if(P[Fe]===null){P[Fe]=Se,ye=Fe;break}if(ye===-1)break}const Ae=L[ye];Ae&&Ae.connect(Se)}}const ie=new K,ce=new K;function k(Y,de,Se){ie.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(Se.matrixWorld);const ye=ie.distanceTo(ce),Ae=de.projectionMatrix.elements,Fe=Se.projectionMatrix.elements,et=Ae[14]/(Ae[10]-1),bt=Ae[14]/(Ae[10]+1),gt=(Ae[9]+1)/Ae[5],It=(Ae[9]-1)/Ae[5],H=(Ae[8]-1)/Ae[0],_n=(Fe[8]+1)/Fe[0],pt=et*H,ft=et*_n,Ye=ye/(-H+_n),Pt=Ye*-H;if(de.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pt),Y.translateZ(Ye),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ae[10]===-1)Y.projectionMatrix.copy(de.projectionMatrix),Y.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const qe=et+Ye,D=bt+Ye,w=pt-Pt,Q=ft+(ye-Pt),ge=gt*bt/D*qe,_e=It*bt/D*qe;Y.projectionMatrix.makePerspective(w,Q,ge,_e,qe,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function fe(Y,de){de===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(de.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let de=Y.near,Se=Y.far;T.texture!==null&&(T.depthNear>0&&(de=T.depthNear),T.depthFar>0&&(Se=T.depthFar)),C.near=V.near=I.near=de,C.far=V.far=I.far=Se,(O!==C.near||ee!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,ee=C.far),I.layers.mask=Y.layers.mask|2,V.layers.mask=Y.layers.mask|4,C.layers.mask=I.layers.mask|V.layers.mask;const ye=Y.parent,Ae=C.cameras;fe(C,ye);for(let Fe=0;Fe<Ae.length;Fe++)fe(Ae[Fe],ye);Ae.length===2?k(C,I,V):C.projectionMatrix.copy(I.projectionMatrix),ae(Y,C,ye)};function ae(Y,de,Se){Se===null?Y.matrix.copy(de.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(de.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(de.projectionMatrix),Y.projectionMatrixInverse.copy(de.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=rd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(Y){p=Y,v!==null&&(v.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let N=null;function re(Y,de){if(m=de.getViewerPose(h||c),E=de,m!==null){const Se=m.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let ye=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,ye=!0);for(let Fe=0;Fe<Se.length;Fe++){const et=Se[Fe];let bt=null;if(S!==null)bt=S.getViewport(et);else{const It=x.getViewSubImage(v,et);bt=It.viewport,Fe===0&&(e.setRenderTargetTextures(b,It.colorTexture,v.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(b))}let gt=R[Fe];gt===void 0&&(gt=new Wn,gt.layers.enable(Fe),gt.viewport=new Ut,R[Fe]=gt),gt.matrix.fromArray(et.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(et.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(bt.x,bt.y,bt.width,bt.height),Fe===0&&(C.matrix.copy(gt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ye===!0&&C.cameras.push(gt)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Fe=x.getDepthInformation(Se[0]);Fe&&Fe.isValid&&Fe.texture&&T.init(e,Fe,a.renderState)}}for(let Se=0;Se<L.length;Se++){const ye=P[Se],Ae=L[Se];ye!==null&&Ae!==void 0&&Ae.update(ye,de,h||c)}N&&N(Y,de),de.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:de}),E=null}const Ue=new Jg;Ue.setAnimationLoop(re),this.setAnimationLoop=function(Y){N=Y},this.dispose=function(){}}}const Yr=new Ei,LT=new Wt;function DT(r,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,Yg(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,b,L,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),x(y,_)):_.isMeshPhongMaterial?(l(y,_),m(y,_)):_.isMeshStandardMaterial?(l(y,_),v(y,_),_.isMeshPhysicalMaterial&&S(y,_,P)):_.isMeshMatcapMaterial?(l(y,_),E(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),T(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?p(y,_,b,L):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===In&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===In&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const b=e.get(_),L=b.envMap,P=b.envMapRotation;L&&(y.envMap.value=L,Yr.copy(P),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),y.envMapRotation.value.setFromMatrix4(LT.makeRotationFromEuler(Yr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,b,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*b,y.scale.value=L*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,b){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){const b=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function UT(r,e,t,s){let a={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,L){const P=L.program;s.uniformBlockBinding(b,P)}function h(b,L){let P=a[b.id];P===void 0&&(E(b),P=m(b),a[b.id]=P,b.addEventListener("dispose",y));const z=L.program;s.updateUBOMapping(b,z);const F=e.render.frame;l[b.id]!==F&&(v(b),l[b.id]=F)}function m(b){const L=x();b.__bindingPointIndex=L;const P=r.createBuffer(),z=b.__size,F=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,z,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,P),P}function x(){for(let b=0;b<f;b++)if(c.indexOf(b)===-1)return c.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(b){const L=a[b.id],P=b.uniforms,z=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let F=0,I=P.length;F<I;F++){const V=Array.isArray(P[F])?P[F]:[P[F]];for(let R=0,C=V.length;R<C;R++){const O=V[R];if(S(O,F,R,z)===!0){const ee=O.__offset,J=Array.isArray(O.value)?O.value:[O.value];let oe=0;for(let ue=0;ue<J.length;ue++){const ie=J[ue],ce=T(ie);typeof ie=="number"||typeof ie=="boolean"?(O.__data[0]=ie,r.bufferSubData(r.UNIFORM_BUFFER,ee+oe,O.__data)):ie.isMatrix3?(O.__data[0]=ie.elements[0],O.__data[1]=ie.elements[1],O.__data[2]=ie.elements[2],O.__data[3]=0,O.__data[4]=ie.elements[3],O.__data[5]=ie.elements[4],O.__data[6]=ie.elements[5],O.__data[7]=0,O.__data[8]=ie.elements[6],O.__data[9]=ie.elements[7],O.__data[10]=ie.elements[8],O.__data[11]=0):(ie.toArray(O.__data,oe),oe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ee,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(b,L,P,z){const F=b.value,I=L+"_"+P;if(z[I]===void 0)return typeof F=="number"||typeof F=="boolean"?z[I]=F:z[I]=F.clone(),!0;{const V=z[I];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return z[I]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function E(b){const L=b.uniforms;let P=0;const z=16;for(let I=0,V=L.length;I<V;I++){const R=Array.isArray(L[I])?L[I]:[L[I]];for(let C=0,O=R.length;C<O;C++){const ee=R[C],J=Array.isArray(ee.value)?ee.value:[ee.value];for(let oe=0,ue=J.length;oe<ue;oe++){const ie=J[oe],ce=T(ie),k=P%z,fe=k%ce.boundary,ae=k+fe;P+=fe,ae!==0&&z-ae<ce.storage&&(P+=z-ae),ee.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=P,P+=ce.storage}}}const F=P%z;return F>0&&(P+=z-F),b.__size=P,b.__cache={},this}function T(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),L}function y(b){const L=b.target;L.removeEventListener("dispose",y);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function _(){for(const b in a)r.deleteBuffer(a[b]);c=[],a={},l={}}return{bind:p,update:h,dispose:_}}class IT{constructor(e={}){const{canvas:t=uy(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,_=null;const b=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Tr,this.toneMappingExposure=1;const P=this;let z=!1,F=0,I=0,V=null,R=-1,C=null;const O=new Ut,ee=new Ut;let J=null;const oe=new Et(0);let ue=0,ie=t.width,ce=t.height,k=1,fe=null,ae=null;const N=new Ut(0,0,ie,ce),re=new Ut(0,0,ie,ce);let Ue=!1;const Y=new Sd;let de=!1,Se=!1;const ye=new Wt,Ae=new Wt,Fe=new K,et=new Ut,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function It(){return V===null?k:1}let H=s;function _n(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hd}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Le,!1),H===null){const j="webgl2";if(H=_n(j,A),H===null)throw _n(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,ft,Ye,Pt,qe,D,w,Q,ge,_e,pe,Xe,Ce,Oe,ct,Te,ze,Ze,tt,He,dt,st,Rt,X;function Re(){pt=new GM(H),pt.init(),st=new wT(H,pt),ft=new OM(H,pt,e,st),Ye=new MT(H,pt),ft.reverseDepthBuffer&&v&&Ye.buffers.depth.setReversed(!0),Pt=new jM(H),qe=new cT,D=new TT(H,pt,Ye,qe,ft,st,Pt),w=new BM(P),Q=new VM(P),ge=new Jy(H),Rt=new NM(H,ge),_e=new WM(H,ge,Pt,Rt),pe=new $M(H,_e,ge,Pt),tt=new qM(H,ft,D),Te=new kM(qe),Xe=new uT(P,w,Q,pt,ft,Rt,Te),Ce=new DT(P,qe),Oe=new dT,ct=new _T(pt),Ze=new IM(P,w,Q,Ye,pe,S,p),ze=new ST(P,pe,ft),X=new UT(H,Pt,ft,Ye),He=new FM(H,pt,Pt),dt=new XM(H,pt,Pt),Pt.programs=Xe.programs,P.capabilities=ft,P.extensions=pt,P.properties=qe,P.renderLists=Oe,P.shadowMap=ze,P.state=Ye,P.info=Pt}Re();const le=new bT(P,H);this.xr=le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(ie,ce,!1))},this.getSize=function(A){return A.set(ie,ce)},this.setSize=function(A,j,ne=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,ce=j,t.width=Math.floor(A*k),t.height=Math.floor(j*k),ne===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(ie*k,ce*k).floor()},this.setDrawingBufferSize=function(A,j,ne){ie=A,ce=j,k=ne,t.width=Math.floor(A*ne),t.height=Math.floor(j*ne),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,j,ne,se){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,j,ne,se),Ye.viewport(O.copy(N).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,j,ne,se){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,j,ne,se),Ye.scissor(ee.copy(re).multiplyScalar(k).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){Ye.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){fe=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(A=!0,j=!0,ne=!0){let se=0;if(A){let G=!1;if(V!==null){const Me=V.texture.format;G=Me===xd||Me===_d||Me===vd}if(G){const Me=V.texture.type,Pe=Me===ji||Me===ns||Me===Yo||Me===Js||Me===md||Me===gd,Ne=Ze.getClearColor(),ke=Ze.getClearAlpha(),nt=Ne.r,it=Ne.g,$e=Ne.b;Pe?(E[0]=nt,E[1]=it,E[2]=$e,E[3]=ke,H.clearBufferuiv(H.COLOR,0,E)):(T[0]=nt,T[1]=it,T[2]=$e,T[3]=ke,H.clearBufferiv(H.COLOR,0,T))}else se|=H.COLOR_BUFFER_BIT}j&&(se|=H.DEPTH_BUFFER_BIT),ne&&(se|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ze.dispose(),Oe.dispose(),ct.dispose(),qe.dispose(),w.dispose(),Q.dispose(),pe.dispose(),Rt.dispose(),X.dispose(),Xe.dispose(),le.dispose(),le.removeEventListener("sessionstart",os),le.removeEventListener("sessionend",Yi),Ti.stop()};function me(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const A=Pt.autoReset,j=ze.enabled,ne=ze.autoUpdate,se=ze.needsUpdate,G=ze.type;Re(),Pt.autoReset=A,ze.enabled=j,ze.autoUpdate=ne,ze.needsUpdate=se,ze.type=G}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const j=A.target;j.removeEventListener("dispose",ot),Ft(j)}function Ft(A){Zt(A),qe.remove(A)}function Zt(A){const j=qe.get(A).programs;j!==void 0&&(j.forEach(function(ne){Xe.releaseProgram(ne)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ne,se,G,Me){j===null&&(j=bt);const Pe=G.isMesh&&G.matrixWorld.determinant()<0,Ne=aa(A,j,ne,se,G);Ye.setMaterial(se,Pe);let ke=ne.index,nt=1;if(se.wireframe===!0){if(ke=_e.getWireframeAttribute(ne),ke===void 0)return;nt=2}const it=ne.drawRange,$e=ne.attributes.position;let at=it.start*nt,Mt=(it.start+it.count)*nt;Me!==null&&(at=Math.max(at,Me.start*nt),Mt=Math.min(Mt,(Me.start+Me.count)*nt)),ke!==null?(at=Math.max(at,0),Mt=Math.min(Mt,ke.count)):$e!=null&&(at=Math.max(at,0),Mt=Math.min(Mt,$e.count));const Tt=Mt-at;if(Tt<0||Tt===1/0)return;Rt.setup(G,se,Ne,ne,ke);let Bt,xt=He;if(ke!==null&&(Bt=ge.get(ke),xt=dt,xt.setIndex(Bt)),G.isMesh)se.wireframe===!0?(Ye.setLineWidth(se.wireframeLinewidth*It()),xt.setMode(H.LINES)):xt.setMode(H.TRIANGLES);else if(G.isLine){let Ke=se.linewidth;Ke===void 0&&(Ke=1),Ye.setLineWidth(Ke*It()),G.isLineSegments?xt.setMode(H.LINES):G.isLineLoop?xt.setMode(H.LINE_LOOP):xt.setMode(H.LINE_STRIP)}else G.isPoints?xt.setMode(H.POINTS):G.isSprite&&xt.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)xt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))xt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ke=G._multiDrawStarts,Xt=G._multiDrawCounts,vt=G._multiDrawCount,an=ke?ge.get(ke).bytesPerElement:1,Jn=qe.get(se).currentProgram.getUniforms();for(let yn=0;yn<vt;yn++)Jn.setValue(H,"_gl_DrawID",yn),xt.render(Ke[yn]/an,Xt[yn])}else if(G.isInstancedMesh)xt.renderInstances(at,Tt,G.count);else if(ne.isInstancedBufferGeometry){const Ke=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Xt=Math.min(ne.instanceCount,Ke);xt.renderInstances(at,Tt,Xt)}else xt.render(at,Tt)};function yt(A,j,ne){A.transparent===!0&&A.side===yi&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,as(A,j,ne),A.side=Ar,A.needsUpdate=!0,as(A,j,ne),A.side=yi):as(A,j,ne)}this.compile=function(A,j,ne=null){ne===null&&(ne=A),_=ct.get(ne),_.init(j),L.push(_),ne.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),A!==ne&&A.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights();const se=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){const Ne=Me[Pe];yt(Ne,ne,G),se.add(Ne)}else yt(Me,ne,G),se.add(Me)}),L.pop(),_=null,se},this.compileAsync=function(A,j,ne=null){const se=this.compile(A,j,ne);return new Promise(G=>{function Me(){if(se.forEach(function(Pe){qe.get(Pe).currentProgram.isReady()&&se.delete(Pe)}),se.size===0){G(A);return}setTimeout(Me,10)}pt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let wn=null;function xn(A){wn&&wn(A)}function os(){Ti.stop()}function Yi(){Ti.start()}const Ti=new Jg;Ti.setAnimationLoop(xn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){wn=A,le.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},le.addEventListener("sessionstart",os),le.addEventListener("sessionend",Yi),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(j),j=le.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,j,V),_=ct.get(A,L.length),_.init(j),L.push(_),Ae.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Y.setFromProjectionMatrix(Ae),Se=this.localClippingEnabled,de=Te.init(this.clippingPlanes,Se),y=Oe.get(A,b.length),y.init(),b.push(y),le.enabled===!0&&le.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&wi(Me,j,-1/0,P.sortObjects)}wi(A,j,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(fe,ae),gt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,gt&&Ze.addToRenderList(y,A),this.info.render.frame++,de===!0&&Te.beginShadows();const ne=_.state.shadowsArray;ze.render(ne,A,j),de===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=y.opaque,G=y.transmissive;if(_.setupLights(),j.isArrayCamera){const Me=j.cameras;if(G.length>0)for(let Pe=0,Ne=Me.length;Pe<Ne;Pe++){const ke=Me[Pe];Pr(se,G,A,ke)}gt&&Ze.render(A);for(let Pe=0,Ne=Me.length;Pe<Ne;Pe++){const ke=Me[Pe];Rr(y,A,ke,ke.viewport)}}else G.length>0&&Pr(se,G,A,j),gt&&Ze.render(A),Rr(y,A,j);V!==null&&(D.updateMultisampleRenderTarget(V),D.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(P,A,j),Rt.resetDefaultState(),R=-1,C=null,L.pop(),L.length>0?(_=L[L.length-1],de===!0&&Te.setGlobalState(P.clippingPlanes,_.state.camera)):_=null,b.pop(),b.length>0?y=b[b.length-1]:y=null};function wi(A,j,ne,se){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){se&&et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const Pe=pe.update(A),Ne=A.material;Ne.visible&&y.push(A,Pe,Ne,ne,et.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const Pe=pe.update(A),Ne=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),et.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),et.copy(Pe.boundingSphere.center)),et.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ne)){const ke=Pe.groups;for(let nt=0,it=ke.length;nt<it;nt++){const $e=ke[nt],at=Ne[$e.materialIndex];at&&at.visible&&y.push(A,Pe,at,ne,et.z,$e)}}else Ne.visible&&y.push(A,Pe,Ne,ne,et.z,null)}}const Me=A.children;for(let Pe=0,Ne=Me.length;Pe<Ne;Pe++)wi(Me[Pe],j,ne,se)}function Rr(A,j,ne,se){const G=A.opaque,Me=A.transmissive,Pe=A.transparent;_.setupLightsView(ne),de===!0&&Te.setGlobalState(P.clippingPlanes,ne),se&&Ye.viewport(O.copy(se)),G.length>0&&Ki(G,j,ne),Me.length>0&&Ki(Me,j,ne),Pe.length>0&&Ki(Pe,j,ne),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Pr(A,j,ne,se){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[se.id]===void 0&&(_.state.transmissionRenderTarget[se.id]=new is(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Jo:ji,minFilter:ts,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Me=_.state.transmissionRenderTarget[se.id],Pe=se.viewport||O;Me.setSize(Pe.z,Pe.w);const Ne=P.getRenderTarget();P.setRenderTarget(Me),P.getClearColor(oe),ue=P.getClearAlpha(),ue<1&&P.setClearColor(16777215,.5),P.clear(),gt&&Ze.render(ne);const ke=P.toneMapping;P.toneMapping=Tr;const nt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),_.setupLightsView(se),de===!0&&Te.setGlobalState(P.clippingPlanes,se),Ki(A,ne,se),D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me),pt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let $e=0,at=j.length;$e<at;$e++){const Mt=j[$e],Tt=Mt.object,Bt=Mt.geometry,xt=Mt.material,Ke=Mt.group;if(xt.side===yi&&Tt.layers.test(se.layers)){const Xt=xt.side;xt.side=In,xt.needsUpdate=!0,sa(Tt,ne,se,Bt,xt,Ke),xt.side=Xt,xt.needsUpdate=!0,it=!0}}it===!0&&(D.updateMultisampleRenderTarget(Me),D.updateRenderTargetMipmap(Me))}P.setRenderTarget(Ne),P.setClearColor(oe,ue),nt!==void 0&&(se.viewport=nt),P.toneMapping=ke}function Ki(A,j,ne){const se=j.isScene===!0?j.overrideMaterial:null;for(let G=0,Me=A.length;G<Me;G++){const Pe=A[G],Ne=Pe.object,ke=Pe.geometry,nt=se===null?Pe.material:se,it=Pe.group;Ne.layers.test(ne.layers)&&sa(Ne,j,ne,ke,nt,it)}}function sa(A,j,ne,se,G,Me){A.onBeforeRender(P,j,ne,se,G,Me),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(P,j,ne,se,A,Me),G.transparent===!0&&G.side===yi&&G.forceSinglePass===!1?(G.side=In,G.needsUpdate=!0,P.renderBufferDirect(ne,j,se,G,A,Me),G.side=Ar,G.needsUpdate=!0,P.renderBufferDirect(ne,j,se,G,A,Me),G.side=yi):P.renderBufferDirect(ne,j,se,G,A,Me),A.onAfterRender(P,j,ne,se,G,Me)}function as(A,j,ne){j.isScene!==!0&&(j=bt);const se=qe.get(A),G=_.state.lights,Me=_.state.shadowsArray,Pe=G.state.version,Ne=Xe.getParameters(A,G.state,Me,j,ne),ke=Xe.getProgramCacheKey(Ne);let nt=se.programs;se.environment=A.isMeshStandardMaterial?j.environment:null,se.fog=j.fog,se.envMap=(A.isMeshStandardMaterial?Q:w).get(A.envMap||se.environment),se.envMapRotation=se.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",ot),nt=new Map,se.programs=nt);let it=nt.get(ke);if(it!==void 0){if(se.currentProgram===it&&se.lightsStateVersion===Pe)return pi(A,Ne),it}else Ne.uniforms=Xe.getUniforms(A),A.onBeforeCompile(Ne,P),it=Xe.acquireProgram(Ne,ke),nt.set(ke,it),se.uniforms=Ne.uniforms;const $e=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=Te.uniform),pi(A,Ne),se.needsLights=Jl(A),se.lightsStateVersion=Pe,se.needsLights&&($e.ambientLightColor.value=G.state.ambient,$e.lightProbe.value=G.state.probe,$e.directionalLights.value=G.state.directional,$e.directionalLightShadows.value=G.state.directionalShadow,$e.spotLights.value=G.state.spot,$e.spotLightShadows.value=G.state.spotShadow,$e.rectAreaLights.value=G.state.rectArea,$e.ltc_1.value=G.state.rectAreaLTC1,$e.ltc_2.value=G.state.rectAreaLTC2,$e.pointLights.value=G.state.point,$e.pointLightShadows.value=G.state.pointShadow,$e.hemisphereLights.value=G.state.hemi,$e.directionalShadowMap.value=G.state.directionalShadowMap,$e.directionalShadowMatrix.value=G.state.directionalShadowMatrix,$e.spotShadowMap.value=G.state.spotShadowMap,$e.spotLightMatrix.value=G.state.spotLightMatrix,$e.spotLightMap.value=G.state.spotLightMap,$e.pointShadowMap.value=G.state.pointShadowMap,$e.pointShadowMatrix.value=G.state.pointShadowMatrix),se.currentProgram=it,se.uniformsList=null,it}function oa(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Vl.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function pi(A,j){const ne=qe.get(A);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function aa(A,j,ne,se,G){j.isScene!==!0&&(j=bt),D.resetTextureUnits();const Me=j.fog,Pe=se.isMeshStandardMaterial?j.environment:null,Ne=V===null?P.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:to,ke=(se.isMeshStandardMaterial?Q:w).get(se.envMap||Pe),nt=se.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,it=!!ne.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),$e=!!ne.morphAttributes.position,at=!!ne.morphAttributes.normal,Mt=!!ne.morphAttributes.color;let Tt=Tr;se.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Tt=P.toneMapping);const Bt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,xt=Bt!==void 0?Bt.length:0,Ke=qe.get(se),Xt=_.state.lights;if(de===!0&&(Se===!0||A!==C)){const qt=A===C&&se.id===R;Te.setState(se,A,qt)}let vt=!1;se.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Xt.state.version||Ke.outputColorSpace!==Ne||G.isBatchedMesh&&Ke.batching===!1||!G.isBatchedMesh&&Ke.batching===!0||G.isBatchedMesh&&Ke.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ke.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ke.instancing===!1||!G.isInstancedMesh&&Ke.instancing===!0||G.isSkinnedMesh&&Ke.skinning===!1||!G.isSkinnedMesh&&Ke.skinning===!0||G.isInstancedMesh&&Ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ke.instancingMorph===!1&&G.morphTexture!==null||Ke.envMap!==ke||se.fog===!0&&Ke.fog!==Me||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Te.numPlanes||Ke.numIntersection!==Te.numIntersection)||Ke.vertexAlphas!==nt||Ke.vertexTangents!==it||Ke.morphTargets!==$e||Ke.morphNormals!==at||Ke.morphColors!==Mt||Ke.toneMapping!==Tt||Ke.morphTargetsCount!==xt)&&(vt=!0):(vt=!0,Ke.__version=se.version);let an=Ke.currentProgram;vt===!0&&(an=as(se,j,G));let Jn=!1,yn=!1,br=!1;const Lt=an.getUniforms(),Sn=Ke.uniforms;if(Ye.useProgram(an.program)&&(Jn=!0,yn=!0,br=!0),se.id!==R&&(R=se.id,yn=!0),Jn||C!==A){Ye.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),fy(ye),dy(ye),Lt.setValue(H,"projectionMatrix",ye)):Lt.setValue(H,"projectionMatrix",A.projectionMatrix),Lt.setValue(H,"viewMatrix",A.matrixWorldInverse);const fn=Lt.map.cameraPosition;fn!==void 0&&fn.setValue(H,Fe.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&Lt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Lt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,yn=!0,br=!0)}if(G.isSkinnedMesh){Lt.setOptional(H,G,"bindMatrix"),Lt.setOptional(H,G,"bindMatrixInverse");const qt=G.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Lt.setValue(H,"boneTexture",qt.boneTexture,D))}G.isBatchedMesh&&(Lt.setOptional(H,G,"batchingTexture"),Lt.setValue(H,"batchingTexture",G._matricesTexture,D),Lt.setOptional(H,G,"batchingIdTexture"),Lt.setValue(H,"batchingIdTexture",G._indirectTexture,D),Lt.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&Lt.setValue(H,"batchingColorTexture",G._colorsTexture,D));const cn=ne.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&tt.update(G,ne,an),(yn||Ke.receiveShadow!==G.receiveShadow)&&(Ke.receiveShadow=G.receiveShadow,Lt.setValue(H,"receiveShadow",G.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Sn.envMap.value=ke,Sn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&j.environment!==null&&(Sn.envMapIntensity.value=j.environmentIntensity),yn&&(Lt.setValue(H,"toneMappingExposure",P.toneMappingExposure),Ke.needsLights&&la(Sn,br),Me&&se.fog===!0&&Ce.refreshFogUniforms(Sn,Me),Ce.refreshMaterialUniforms(Sn,se,k,ce,_.state.transmissionRenderTarget[A.id]),Vl.upload(H,oa(Ke),Sn,D)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Vl.upload(H,oa(Ke),Sn,D),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Lt.setValue(H,"center",G.center),Lt.setValue(H,"modelViewMatrix",G.modelViewMatrix),Lt.setValue(H,"normalMatrix",G.normalMatrix),Lt.setValue(H,"modelMatrix",G.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const qt=se.uniformsGroups;for(let fn=0,Lr=qt.length;fn<Lr;fn++){const mt=qt[fn];X.update(mt,an),X.bind(mt,an)}}return an}function la(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Jl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,j,ne){qe.get(A.texture).__webglTexture=j,qe.get(A.depthTexture).__webglTexture=ne;const se=qe.get(A);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ne===void 0,se.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const ne=qe.get(A);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,ne=0){V=A,F=j,I=ne;let se=!0,G=null,Me=!1,Pe=!1;if(A){const ke=qe.get(A);if(ke.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(H.FRAMEBUFFER,null),se=!1;else if(ke.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(ke.__hasExternalTextures)D.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(ke.__boundDepthTexture!==$e){if($e!==null&&qe.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Pe=!0);const it=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[j])?G=it[j][ne]:G=it[j],Me=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?G=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?G=it[ne]:G=it,O.copy(A.viewport),ee.copy(A.scissor),J=A.scissorTest}else O.copy(N).multiplyScalar(k).floor(),ee.copy(re).multiplyScalar(k).floor(),J=Ue;if(Ye.bindFramebuffer(H.FRAMEBUFFER,G)&&se&&Ye.drawBuffers(A,G),Ye.viewport(O),Ye.scissor(ee),Ye.setScissorTest(J),Me){const ke=qe.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,ke.__webglTexture,ne)}else if(Pe){const ke=qe.get(A.texture),nt=j||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.__webglTexture,ne||0,nt)}R=-1},this.readRenderTargetPixels=function(A,j,ne,se,G,Me,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){Ye.bindFramebuffer(H.FRAMEBUFFER,Ne);try{const ke=A.texture,nt=ke.format,it=ke.type;if(!ft.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-se&&ne>=0&&ne<=A.height-G&&H.readPixels(j,ne,se,G,st.convert(nt),st.convert(it),Me)}finally{const ke=V!==null?qe.get(V).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,j,ne,se,G,Me,Pe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){const ke=A.texture,nt=ke.format,it=ke.type;if(!ft.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-se&&ne>=0&&ne<=A.height-G){Ye.bindFramebuffer(H.FRAMEBUFFER,Ne);const $e=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,$e),H.bufferData(H.PIXEL_PACK_BUFFER,Me.byteLength,H.STREAM_READ),H.readPixels(j,ne,se,G,st.convert(nt),st.convert(it),0);const at=V!==null?qe.get(V).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,at);const Mt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await cy(H,Mt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,$e),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Me),H.deleteBuffer($e),H.deleteSync(Mt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,ne=0){A.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const se=Math.pow(2,-ne),G=Math.floor(A.image.width*se),Me=Math.floor(A.image.height*se),Pe=j!==null?j.x:0,Ne=j!==null?j.y:0;D.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,ne,0,0,Pe,Ne,G,Me),Ye.unbindTexture()};const ua=H.createFramebuffer(),ca=H.createFramebuffer();this.copyTextureToTexture=function(A,j,ne=null,se=null,G=0,Me=null){A.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,A=arguments[1],j=arguments[2],Me=arguments[3]||0,ne=null),Me===null&&(G!==0?(Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=G,G=0):Me=0);let Pe,Ne,ke,nt,it,$e,at,Mt,Tt;const Bt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(ne!==null)Pe=ne.max.x-ne.min.x,Ne=ne.max.y-ne.min.y,ke=ne.isBox3?ne.max.z-ne.min.z:1,nt=ne.min.x,it=ne.min.y,$e=ne.isBox3?ne.min.z:0;else{const cn=Math.pow(2,-G);Pe=Math.floor(Bt.width*cn),Ne=Math.floor(Bt.height*cn),A.isDataArrayTexture?ke=Bt.depth:A.isData3DTexture?ke=Math.floor(Bt.depth*cn):ke=1,nt=0,it=0,$e=0}se!==null?(at=se.x,Mt=se.y,Tt=se.z):(at=0,Mt=0,Tt=0);const xt=st.convert(j.format),Ke=st.convert(j.type);let Xt;j.isData3DTexture?(D.setTexture3D(j,0),Xt=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(D.setTexture2DArray(j,0),Xt=H.TEXTURE_2D_ARRAY):(D.setTexture2D(j,0),Xt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=H.getParameter(H.UNPACK_ROW_LENGTH),an=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Jn=H.getParameter(H.UNPACK_SKIP_PIXELS),yn=H.getParameter(H.UNPACK_SKIP_ROWS),br=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Bt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,nt),H.pixelStorei(H.UNPACK_SKIP_ROWS,it),H.pixelStorei(H.UNPACK_SKIP_IMAGES,$e);const Lt=A.isDataArrayTexture||A.isData3DTexture,Sn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const cn=qe.get(A),qt=qe.get(j),fn=qe.get(cn.__renderTarget),Lr=qe.get(qt.__renderTarget);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,fn.__webglFramebuffer),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let mt=0;mt<ke;mt++)Lt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,G,$e+mt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(j).__webglTexture,Me,Tt+mt)),H.blitFramebuffer(nt,it,Pe,Ne,at,Mt,Pe,Ne,H.DEPTH_BUFFER_BIT,H.NEAREST);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||qe.has(A)){const cn=qe.get(A),qt=qe.get(j);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,ua),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,ca);for(let fn=0;fn<ke;fn++)Lt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,cn.__webglTexture,G,$e+fn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,cn.__webglTexture,G),Sn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qt.__webglTexture,Me,Tt+fn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qt.__webglTexture,Me),G!==0?H.blitFramebuffer(nt,it,Pe,Ne,at,Mt,Pe,Ne,H.COLOR_BUFFER_BIT,H.NEAREST):Sn?H.copyTexSubImage3D(Xt,Me,at,Mt,Tt+fn,nt,it,Pe,Ne):H.copyTexSubImage2D(Xt,Me,at,Mt,nt,it,Pe,Ne);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Sn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Xt,Me,at,Mt,Tt,Pe,Ne,ke,xt,Ke,Bt.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(Xt,Me,at,Mt,Tt,Pe,Ne,ke,xt,Bt.data):H.texSubImage3D(Xt,Me,at,Mt,Tt,Pe,Ne,ke,xt,Ke,Bt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Me,at,Mt,Pe,Ne,xt,Ke,Bt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Me,at,Mt,Bt.width,Bt.height,xt,Bt.data):H.texSubImage2D(H.TEXTURE_2D,Me,at,Mt,Pe,Ne,xt,Ke,Bt);H.pixelStorei(H.UNPACK_ROW_LENGTH,vt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,an),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Jn),H.pixelStorei(H.UNPACK_SKIP_ROWS,yn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,br),Me===0&&j.generateMipmaps&&H.generateMipmap(Xt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,j,ne=null,se=null,G=0){return A.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,se=arguments[1]||null,A=arguments[2],j=arguments[3],G=arguments[4]||0),Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,ne,se,G)},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){F=0,I=0,V=null,Ye.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}class NT extends Ed{constructor(e){super(e)}load(e,t,s,a){const l=this,c=new Xy(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(f){try{t(l.parse(f))}catch(p){a?a(p):console.error(p),l.manager.itemError(e)}},s,a)}parse(e){function t(h){const m=new DataView(h),x=32/8*3+32/8*3*3+16/8,v=m.getUint32(80,!0);if(80+32/8+v*x===m.byteLength)return!0;const E=[115,111,108,105,100];for(let T=0;T<5;T++)if(s(E,m,T))return!1;return!0}function s(h,m,x){for(let v=0,S=h.length;v<S;v++)if(h[v]!==m.getUint8(x+v))return!1;return!0}function a(h){const m=new DataView(h),x=m.getUint32(80,!0);let v,S,E,T=!1,y,_,b,L,P;for(let O=0;O<70;O++)m.getUint32(O,!1)==1129270351&&m.getUint8(O+4)==82&&m.getUint8(O+5)==61&&(T=!0,y=new Float32Array(x*3*3),_=m.getUint8(O+6)/255,b=m.getUint8(O+7)/255,L=m.getUint8(O+8)/255,P=m.getUint8(O+9)/255);const z=84,F=12*4+2,I=new qi,V=new Float32Array(x*3*3),R=new Float32Array(x*3*3),C=new Et;for(let O=0;O<x;O++){const ee=z+O*F,J=m.getFloat32(ee,!0),oe=m.getFloat32(ee+4,!0),ue=m.getFloat32(ee+8,!0);if(T){const ie=m.getUint16(ee+48,!0);ie&32768?(v=_,S=b,E=L):(v=(ie&31)/31,S=(ie>>5&31)/31,E=(ie>>10&31)/31)}for(let ie=1;ie<=3;ie++){const ce=ee+ie*12,k=O*3*3+(ie-1)*3;V[k]=m.getFloat32(ce,!0),V[k+1]=m.getFloat32(ce+4,!0),V[k+2]=m.getFloat32(ce+8,!0),R[k]=J,R[k+1]=oe,R[k+2]=ue,T&&(C.setRGB(v,S,E,Gn),y[k]=C.r,y[k+1]=C.g,y[k+2]=C.b)}}return I.setAttribute("position",new Xn(V,3)),I.setAttribute("normal",new Xn(R,3)),T&&(I.setAttribute("color",new Xn(y,3)),I.hasColors=!0,I.alpha=P),I}function l(h){const m=new qi,x=/solid([\s\S]*?)endsolid/g,v=/facet([\s\S]*?)endfacet/g,S=/solid\s(.+)/;let E=0;const T=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+T+T+T,"g"),_=new RegExp("normal"+T+T+T,"g"),b=[],L=[],P=[],z=new K;let F,I=0,V=0,R=0;for(;(F=x.exec(h))!==null;){V=R;const C=F[0],O=(F=S.exec(C))!==null?F[1]:"";for(P.push(O);(F=v.exec(C))!==null;){let oe=0,ue=0;const ie=F[0];for(;(F=_.exec(ie))!==null;)z.x=parseFloat(F[1]),z.y=parseFloat(F[2]),z.z=parseFloat(F[3]),ue++;for(;(F=y.exec(ie))!==null;)b.push(parseFloat(F[1]),parseFloat(F[2]),parseFloat(F[3])),L.push(z.x,z.y,z.z),oe++,R++;ue!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+E),oe!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+E),E++}const ee=V,J=R-V;m.userData.groupNames=P,m.addGroup(ee,J,I),I++}return m.setAttribute("position",new Xi(b,3)),m.setAttribute("normal",new Xi(L,3)),m}function c(h){return typeof h!="string"?new TextDecoder().decode(h):h}function f(h){if(typeof h=="string"){const m=new Uint8Array(h.length);for(let x=0;x<h.length;x++)m[x]=h.charCodeAt(x)&255;return m.buffer||m}else return h}const p=f(e);return t(p)?a(p):l(c(e))}}class FT{constructor(e,t=" .:-=+*#%@",s={}){const a=s.resolution||.15,l=s.scale||1,c=s.color||!1,f=s.alpha||!1,p=s.block||!1,h=s.invert||!1,m=s.strResolution||"low";let x,v;const S=document.createElement("div");S.style.cursor="default";const E=document.createElement("table");S.appendChild(E);let T,y,_;this.setSize=function(oe,ue){x=oe,v=ue,e.setSize(oe,ue),b()},this.render=function(oe,ue){e.render(oe,ue),J(E)},this.domElement=S;function b(){T=Math.floor(x*a),y=Math.floor(v*a),I.width=T,I.height=y,_=e.domElement,_.style.backgroundColor&&(E.rows[0].cells[0].style.backgroundColor=_.style.backgroundColor,E.rows[0].cells[0].style.color=_.style.color),E.cellSpacing=0,E.cellPadding=0;const oe=E.style;oe.whiteSpace="pre",oe.margin="0px",oe.padding="0px",oe.letterSpacing=ee+"px",oe.fontFamily=z,oe.fontSize=C+"px",oe.lineHeight=O+"px",oe.textAlign="left",oe.textDecoration="none"}const L=" .,:;i1tfLCG08@".split(""),P=" CGO08@".split(""),z="courier new, monospace",F=e.domElement,I=document.createElement("canvas");if(!I.getContext)return;const V=I.getContext("2d");if(!V.getImageData)return;let R=c?P:L;t&&(R=t);const C=2/a*l,O=2/a*l;let ee=0;if(m=="low")switch(l){case 1:ee=-1;break;case 2:case 3:ee=-2.1;break;case 4:ee=-3.1;break;case 5:ee=-4.15;break}if(m=="medium")switch(l){case 1:ee=0;break;case 2:ee=-1;break;case 3:ee=-1.04;break;case 4:case 5:ee=-2.1;break}if(m=="high")switch(l){case 1:case 2:ee=0;break;case 3:case 4:case 5:ee=-1;break}function J(oe){V.clearRect(0,0,T,y),V.drawImage(F,0,0,T,y);const ue=V.getImageData(0,0,T,y).data;let ie="";for(let ce=0;ce<y;ce+=2){for(let k=0;k<T;k++){const fe=(ce*T+k)*4,ae=ue[fe],N=ue[fe+1],re=ue[fe+2],Ue=ue[fe+3];let Y,de;de=(.3*ae+.59*N+.11*re)/255,Ue==0&&(de=1),Y=Math.floor((1-de)*(R.length-1)),h&&(Y=R.length-Y-1);let Se=R[Y];(Se===void 0||Se==" ")&&(Se="&nbsp;"),c?ie+="<span style='color:rgb("+ae+","+N+","+re+");"+(p?"background-color:rgb("+ae+","+N+","+re+");":"")+(f?"opacity:"+Ue/255+";":"")+"'>"+Se+"</span>":ie+=Se}ie+="<br/>"}oe.innerHTML=`<tr><td style="display:block;width:${x}px;height:${v}px;overflow:hidden">${ie}</td></tr>`}}}const OT=()=>{const r=he.useRef();return he.useEffect(()=>{const e=r.current,t=new Zy,s=new fi,a=new Fy;a.background=new Et(0,0,0,0);const l=new Om(16777215,1,0,0);l.position.set(100,100,400),a.add(l);const c=new Om(16777215,.5);c.position.set(-500,100,-400),a.add(c);const f=new NT,p=new By;p.flatShading=!0,p.side=yi;const h={width:window.innerWidth,height:window.innerHeight},m=new Wn(45,h.width/h.height,.1,2e3),x=new IT;let v,S=" .:-+*=%@#";const E={amount:.205};let T="transparent",y="rgba(184, 255, 71, 1)";function _(){v=new FT(x,S,{invert:!0,resolution:E.amount}),v.setSize(h.width,h.height),v.domElement.style.color=y,v.domElement.style.backgroundColor=T,v.domElement.style.position="fixed",v.domElement.style.top="0",v.domElement.style.left="0",v.domElement.style.width="100%",v.domElement.style.height="100%",v.domElement.style.zIndex="-5",v.domElement.style.pointerEvents="none"}_(),e.appendChild(v.domElement),f.load("./models/main_page_model.stl",function(L){s.material=p,s.geometry=L;var P=new fi(L,p);s.position.copy(P.position),L.computeVertexNormals(),s.geometry.center(),s.rotation.x=-90*Math.PI/180,s.geometry.computeBoundingBox();var z=s.geometry.boundingBox;s.position.y=(z.max.z-z.min.z)/5,m.position.x=z.max.x*1.5,m.position.y=z.max.y,m.position.z=z.max.z,a.add(s),m.lookAt(s.position);function F(){{const R=t.getElapsedTime();s.rotation.z=R/3}I(),window.requestAnimationFrame(F)}function I(){v.render(a,m)}F();const V=()=>{document.body.scrollHeight-window.innerHeight;const R=Math.min(5,window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*10),C=[185,255,71],O=[0,0,0],ee=C.map((ue,ie)=>Math.round(ue+R*(O[ie]-ue)));y=`rgba(${ee[0]}, ${ee[1]}, ${ee[2]}, 1)`,v.domElement.style.color=y;const oe=document.querySelector(".main_front_text");oe.style.opacity=1-R};window.addEventListener("scroll",V)}),window.addEventListener("resize",b);function b(){h.width=window.innerWidth,h.height=window.innerHeight,m.aspect=h.width/h.height,m.updateProjectionMatrix(),x.setSize(h.width,h.height),v.setSize(h.width,h.height)}return()=>{window.removeEventListener("resize",b),e.removeChild(v.domElement)}},[]),Ge.jsx("div",{ref:r,style:{width:"100%"}})};function js(){return js=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},js.apply(this,arguments)}function kT(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,od(r,e)}function od(r,e){return od=Object.setPrototypeOf||function(s,a){return s.__proto__=a,s},od(r,e)}var Td=function(r){kT(e,r);function e(){var s;return s=r.call(this)||this,s.state={columns:[],childRefs:[],hasDistributed:!1},s}var t=e.prototype;return t.componentDidUpdate=function(){!this.state.hasDistributed&&!this.props.sequential&&this.distributeChildren()},e.getDerivedStateFromProps=function(a,l){var c=a.children,f=a.columnsCount;return l&&c===l.children?null:js({},e.getEqualCountColumns(c,f),{children:c,hasDistributed:!1})},t.distributeChildren=function(){var a=this,l=this.props,c=l.children,f=l.columnsCount,p=Array(f).fill(0),h=this.state.childRefs.every(function(v){return v.current.getBoundingClientRect().height});if(h){var m=Array.from({length:f},function(){return[]}),x=0;Un.Children.forEach(c,function(v){if(v&&Un.isValidElement(v)){var S=a.state.childRefs[x].current.getBoundingClientRect().height,E=p.indexOf(Math.min.apply(Math,p));p[E]+=S,m[E].push(v),x++}}),this.setState(function(v){return js({},v,{columns:m,hasDistributed:!0})})}},e.getEqualCountColumns=function(a,l){var c=Array.from({length:l},function(){return[]}),f=0,p=[];return Un.Children.forEach(a,function(h){if(h&&Un.isValidElement(h)){var m=Un.createRef();p.push(m),c[f%l].push(Un.createElement("div",{style:{display:"flex",justifyContent:"stretch"},key:f,ref:m},h)),f++}}),{columns:c,childRefs:p}},t.renderColumns=function(){var a=this.props,l=a.gutter,c=a.itemTag,f=a.itemStyle;return this.state.columns.map(function(p,h){return Un.createElement(c,{key:h,style:js({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:l},f)},p.map(function(m){return m}))})},t.render=function(){var a=this.props,l=a.gutter,c=a.className,f=a.style,p=a.containerTag;return Un.createElement(p,{style:js({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:l},f),className:c},this.renderColumns())},e}(Un.Component);Td.propTypes={};Td.defaultProps={columnsCount:3,gutter:"0",className:null,style:{},containerTag:"div",itemTag:"div",itemStyle:{},sequential:!1};var BT=1,rv=typeof window<"u"?he.useLayoutEffect:he.useEffect,zT=function(){var e=he.useState(!1),t=e[0],s=e[1];return rv(function(){s(!0)},[]),t},HT=function(){var e=zT(),t=he.useState(typeof window<"u"?window.innerWidth:0),s=t[0],a=t[1],l=he.useCallback(function(){e&&a(window.innerWidth)},[e]);return rv(function(){if(e)return window.addEventListener("resize",l),l(),function(){return window.removeEventListener("resize",l)}},[e,l]),s},sv=function(e){var t=e.columnsCountBreakPoints,s=t===void 0?{350:1,750:2,900:3}:t,a=e.children,l=e.className,c=l===void 0?null:l,f=e.style,p=f===void 0?null:f,h=HT(),m=he.useMemo(function(){var x=Object.keys(s).sort(function(S,E){return S-E}),v=x.length>0?s[x[0]]:BT;return x.forEach(function(S){S<h&&(v=s[S])}),v},[h,s]);return Un.createElement("div",{className:c,style:p},Un.Children.map(a,function(x,v){return Un.cloneElement(x,{key:v,columnsCount:m})}))};sv.propTypes={};const VT=[{src:"https://picsum.photos/1000/1000?random=2",description:"Tokyo, 2019"},{src:"https://picsum.photos/1000/800?random=3",description:"Game Design"},{src:"https://picsum.photos/900/1200?random=4",description:"VR Project"},{src:"https://picsum.photos/1100/950?random=5",description:"Amsterdam, 2023"},{src:"https://picsum.photos/800/600?random=6",description:"Unity Demo"},{src:"https://picsum.photos/1000/1400?random=7",description:"AI Research"},{src:"https://picsum.photos/1100/600?random=8",description:"Paris, 2022"},{src:"https://picsum.photos/1000/1000?random=9",description:"Web Design"},{src:"https://picsum.photos/1000/800?random=10",description:"Mobile App"},{src:"https://picsum.photos/900/1200?random=11",description:"London, 2021"},{src:"https://picsum.photos/1100/950?random=12",description:"3D Model"},{src:"https://picsum.photos/800/600?random=13",description:"UI/UX Study"},{src:"https://picsum.photos/1000/1400?random=14",description:"Berlin, 2020"},{src:"https://picsum.photos/1100/600?random=15",description:"Game Jam"},{src:"https://picsum.photos/1000/1000?random=16",description:"AR Demo"},{src:"https://picsum.photos/1000/800?random=17",description:"Rome, 2023"},{src:"https://picsum.photos/900/1200?random=18",description:"Portfolio"},{src:"https://picsum.photos/1100/950?random=19",description:"Prototype"},{src:"https://picsum.photos/800/600?random=20",description:"Madrid, 2022"},{src:"https://picsum.photos/1000/1400?random=21",description:"ML Model"},{src:"https://picsum.photos/1100/600?random=22",description:"Interface"},{src:"https://picsum.photos/1000/1000?random=23",description:"Oslo, 2021"},{src:"https://picsum.photos/1000/800?random=24",description:"Game Art"},{src:"https://picsum.photos/900/1200?random=25",description:"Blender"},{src:"https://picsum.photos/1100/950?random=26",description:"Vienna, 2020"},{src:"https://picsum.photos/800/600?random=27",description:"Project X"},{src:"https://picsum.photos/1000/1400?random=28",description:"Research"},{src:"https://picsum.photos/1100/600?random=29",description:"Athens, 2019"}];class GT extends Un.Component{constructor(){super(...arguments);qp(this,"handleResize",()=>{this.forceUpdate()})}componentDidMount(){window.addEventListener("resize",this.handleResize)}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}render(){return Ge.jsx("div",{className:"gallery-container",children:Ge.jsx(sv,{columnsCountBreakPoints:{350:1,750:2,900:4},children:Ge.jsx(Td,{children:VT.map((t,s)=>Ge.jsxs("div",{className:"image-gallery-item",children:[Ge.jsx("img",{src:t.src,className:"img"}),Ge.jsx("div",{className:"tooltip",children:t.description})]},s))})})})}}function WT(){return Ge.jsxs("div",{children:[Ge.jsx("header",{className:"app-header",children:Ge.jsx("div",{className:"main_front_text",children:Ge.jsx("span",{children:"('Portfolio')"})})}),Ge.jsx("section",{className:"gallery-container",children:Ge.jsx(GT,{})}),Ge.jsx(OT,{}),Ge.jsx("h1",{className:"bottom-website-text",children:Ge.jsx("span",{children:"Panayiotis Evangelou"})})]})}const XT=()=>{const r=["AI","Blender","Substance Designer","Game Design","Photoshop","UX","React","Machine Learning","Deep Learning","Homework"];return Ge.jsx("div",{className:"carousel-container",children:Ge.jsxs("div",{className:"carousel",children:[r.map((e,t)=>Ge.jsx("h3",{className:"carousel-item",children:e},t)),r.map((e,t)=>Ge.jsx("h3",{className:"carousel-item",children:e},t+r.length))]})})};function jT(){return Ge.jsxs("div",{children:[Ge.jsxs("section",{className:"header",children:[Ge.jsx("img",{src:"/portfolio/images/hello_my_name_is.png",className:"hello-my-name-is-sticker"}),Ge.jsx("div",{className:"main-about-text main-text",children:Ge.jsx("span",{children:"Panagiotis Evangelou"})})]}),Ge.jsx("hr",{className:"divider"}),Ge.jsxs("section",{className:"about-background-header",children:[Ge.jsx("h2",{children:"SKILLS"}),Ge.jsx(XT,{})]}),Ge.jsx("hr",{className:"divider"}),Ge.jsxs("section",{className:"about-background-header",children:[Ge.jsx("h2",{children:"ABOUT"}),Ge.jsx("h3",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar venenatis diam, id venenatis eros condimentum ac. Sed in nunc vulputate, laoreet nisi pretium, laoreet risus. Aenean at neque sit amet quam mollis ornare. Etiam facilisis purus eget finibus vestibulum. In ac luctus justo, nec sagittis turpis. Curabitur vitae gravida elit. Pellentesque cursus nisi nec odio blandit, et efficitur libero varius. Duis faucibus tortor in nibh eleifend aliquam. Aenean tristique ut eros in maximus."})]}),Ge.jsx("hr",{className:"divider"}),Ge.jsxs("section",{className:"about-background-header",children:[Ge.jsx("h2",{children:"EDUCATION"}),Ge.jsx("h3",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar venenatis diam, id venenatis eros condimentum ac. Sed in nunc vulputate, laoreet nisi pretium, laoreet risus. Aenean at neque sit amet quam mollis ornare. Etiam facilisis purus eget finibus vestibulum. In ac luctus justo, nec sagittis turpis. Curabitur vitae gravida elit. Pellentesque cursus nisi nec odio blandit, et efficitur libero varius. Duis faucibus tortor in nibh eleifend aliquam. Aenean tristique ut eros in maximus."})]}),Ge.jsx("hr",{className:"divider"}),Ge.jsxs("section",{className:"about-background-header",children:[Ge.jsx("h2",{children:"CONTACT"}),Ge.jsx("h3",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar venenatis diam, id venenatis eros condimentum ac. Sed in nunc vulputate, laoreet nisi pretium, laoreet risus. Aenean at neque sit amet quam mollis ornare. Etiam facilisis purus eget finibus vestibulum. In ac luctus justo, nec sagittis turpis. Curabitur vitae gravida elit. Pellentesque cursus nisi nec odio blandit, et efficitur libero varius. Duis faucibus tortor in nibh eleifend aliquam. Aenean tristique ut eros in maximus."})]}),Ge.jsx("hr",{className:"divider"}),Ge.jsx("h1",{className:"bottom-website-text",children:Ge.jsx("span",{children:"Panagiotis Evangelou"})})]})}function qT(){return Ge.jsxs("div",{children:[Ge.jsx(yx,{}),Ge.jsxs(z0,{children:[Ge.jsx(vf,{path:"/",element:Ge.jsx(WT,{})}),Ge.jsx(vf,{path:"/about",element:Ge.jsx(jT,{})})]})]})}Z;Y_.createRoot(document.getElementById("root")).render(Ge.jsx(Un.StrictMode,{children:Ge.jsx(cx,{children:Ge.jsx(qT,{})})}));
