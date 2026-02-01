function IM(a,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in a)){const c=Object.getOwnPropertyDescriptor(r,o);c&&Object.defineProperty(a,o,c.get?c:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function zM(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Uh={exports:{}},Tl={};var T_;function HM(){if(T_)return Tl;T_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:f,ref:o!==void 0?o:null,props:c}}return Tl.Fragment=e,Tl.jsx=n,Tl.jsxs=n,Tl}var A_;function GM(){return A_||(A_=1,Uh.exports=HM()),Uh.exports}var Z=GM(),Nh={exports:{}},lt={};var C_;function VM(){if(C_)return lt;C_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function y(I,oe,_e){this.props=I,this.context=oe,this.refs=b,this.updater=_e||T}y.prototype.isReactComponent={},y.prototype.setState=function(I,oe){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,oe,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function P(){}P.prototype=y.prototype;function B(I,oe,_e){this.props=I,this.context=oe,this.refs=b,this.updater=_e||T}var U=B.prototype=new P;U.constructor=B,E(U,y.prototype),U.isPureReactComponent=!0;var z=Array.isArray;function L(){}var O={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function C(I,oe,_e){var Ce=_e.ref;return{$$typeof:a,type:I,key:oe,ref:Ce!==void 0?Ce:null,props:_e}}function D(I,oe){return C(I.type,oe,I.props)}function k(I){return typeof I=="object"&&I!==null&&I.$$typeof===a}function A(I){var oe={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(_e){return oe[_e]})}var W=/\/+/g;function q(I,oe){return typeof I=="object"&&I!==null&&I.key!=null?A(""+I.key):oe.toString(36)}function ee(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function(oe){I.status==="pending"&&(I.status="fulfilled",I.value=oe)},function(oe){I.status==="pending"&&(I.status="rejected",I.reason=oe)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,oe,_e,Ce,He){var re=typeof I;(re==="undefined"||re==="boolean")&&(I=null);var pe=!1;if(I===null)pe=!0;else switch(re){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(I.$$typeof){case a:case e:pe=!0;break;case v:return pe=I._init,F(pe(I._payload),oe,_e,Ce,He)}}if(pe)return He=He(I),pe=Ce===""?"."+q(I,0):Ce,z(He)?(_e="",pe!=null&&(_e=pe.replace(W,"$&/")+"/"),F(He,oe,_e,"",function(Ve){return Ve})):He!=null&&(k(He)&&(He=D(He,_e+(He.key==null||I&&I.key===He.key?"":(""+He.key).replace(W,"$&/")+"/")+pe)),oe.push(He)),1;pe=0;var Re=Ce===""?".":Ce+":";if(z(I))for(var Xe=0;Xe<I.length;Xe++)Ce=I[Xe],re=Re+q(Ce,Xe),pe+=F(Ce,oe,_e,re,He);else if(Xe=M(I),typeof Xe=="function")for(I=Xe.call(I),Xe=0;!(Ce=I.next()).done;)Ce=Ce.value,re=Re+q(Ce,Xe++),pe+=F(Ce,oe,_e,re,He);else if(re==="object"){if(typeof I.then=="function")return F(ee(I),oe,_e,Ce,He);throw oe=String(I),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.")}return pe}function V(I,oe,_e){if(I==null)return I;var Ce=[],He=0;return F(I,Ce,"","",function(re){return oe.call(_e,re,He++)}),Ce}function ne(I){if(I._status===-1){var oe=I._result;oe=oe(),oe.then(function(_e){(I._status===0||I._status===-1)&&(I._status=1,I._result=_e)},function(_e){(I._status===0||I._status===-1)&&(I._status=2,I._result=_e)}),I._status===-1&&(I._status=0,I._result=oe)}if(I._status===1)return I._result.default;throw I._result}var be=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var oe=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(oe))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Se={map:V,forEach:function(I,oe,_e){V(I,function(){oe.apply(this,arguments)},_e)},count:function(I){var oe=0;return V(I,function(){oe++}),oe},toArray:function(I){return V(I,function(oe){return oe})||[]},only:function(I){if(!k(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return lt.Activity=g,lt.Children=Se,lt.Component=y,lt.Fragment=n,lt.Profiler=o,lt.PureComponent=B,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,lt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},lt.cache=function(I){return function(){return I.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(I,oe,_e){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ce=E({},I.props),He=I.key;if(oe!=null)for(re in oe.key!==void 0&&(He=""+oe.key),oe)!Q.call(oe,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&oe.ref===void 0||(Ce[re]=oe[re]);var re=arguments.length-2;if(re===1)Ce.children=_e;else if(1<re){for(var pe=Array(re),Re=0;Re<re;Re++)pe[Re]=arguments[Re+2];Ce.children=pe}return C(I.type,He,Ce)},lt.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},lt.createElement=function(I,oe,_e){var Ce,He={},re=null;if(oe!=null)for(Ce in oe.key!==void 0&&(re=""+oe.key),oe)Q.call(oe,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(He[Ce]=oe[Ce]);var pe=arguments.length-2;if(pe===1)He.children=_e;else if(1<pe){for(var Re=Array(pe),Xe=0;Xe<pe;Xe++)Re[Xe]=arguments[Xe+2];He.children=Re}if(I&&I.defaultProps)for(Ce in pe=I.defaultProps,pe)He[Ce]===void 0&&(He[Ce]=pe[Ce]);return C(I,re,He)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(I){return{$$typeof:d,render:I}},lt.isValidElement=k,lt.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:ne}},lt.memo=function(I,oe){return{$$typeof:p,type:I,compare:oe===void 0?null:oe}},lt.startTransition=function(I){var oe=O.T,_e={};O.T=_e;try{var Ce=I(),He=O.S;He!==null&&He(_e,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(L,be)}catch(re){be(re)}finally{oe!==null&&_e.types!==null&&(oe.types=_e.types),O.T=oe}},lt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},lt.use=function(I){return O.H.use(I)},lt.useActionState=function(I,oe,_e){return O.H.useActionState(I,oe,_e)},lt.useCallback=function(I,oe){return O.H.useCallback(I,oe)},lt.useContext=function(I){return O.H.useContext(I)},lt.useDebugValue=function(){},lt.useDeferredValue=function(I,oe){return O.H.useDeferredValue(I,oe)},lt.useEffect=function(I,oe){return O.H.useEffect(I,oe)},lt.useEffectEvent=function(I){return O.H.useEffectEvent(I)},lt.useId=function(){return O.H.useId()},lt.useImperativeHandle=function(I,oe,_e){return O.H.useImperativeHandle(I,oe,_e)},lt.useInsertionEffect=function(I,oe){return O.H.useInsertionEffect(I,oe)},lt.useLayoutEffect=function(I,oe){return O.H.useLayoutEffect(I,oe)},lt.useMemo=function(I,oe){return O.H.useMemo(I,oe)},lt.useOptimistic=function(I,oe){return O.H.useOptimistic(I,oe)},lt.useReducer=function(I,oe,_e){return O.H.useReducer(I,oe,_e)},lt.useRef=function(I){return O.H.useRef(I)},lt.useState=function(I){return O.H.useState(I)},lt.useSyncExternalStore=function(I,oe,_e){return O.H.useSyncExternalStore(I,oe,_e)},lt.useTransition=function(){return O.H.useTransition()},lt.version="19.2.3",lt}var R_;function Mm(){return R_||(R_=1,Nh.exports=VM()),Nh.exports}var Je=Mm();const kM=zM(Je),w_=IM({__proto__:null,default:kM},[Je]);var Lh={exports:{}},Al={},Oh={exports:{}},Ph={};var D_;function XM(){return D_||(D_=1,(function(a){function e(F,V){var ne=F.length;F.push(V);e:for(;0<ne;){var be=ne-1>>>1,Se=F[be];if(0<o(Se,V))F[be]=V,F[ne]=Se,ne=be;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var V=F[0],ne=F.pop();if(ne!==V){F[0]=ne;e:for(var be=0,Se=F.length,I=Se>>>1;be<I;){var oe=2*(be+1)-1,_e=F[oe],Ce=oe+1,He=F[Ce];if(0>o(_e,ne))Ce<Se&&0>o(He,_e)?(F[be]=He,F[Ce]=ne,be=Ce):(F[be]=_e,F[oe]=ne,be=oe);else if(Ce<Se&&0>o(He,ne))F[be]=He,F[Ce]=ne,be=Ce;else break e}}return V}function o(F,V){var ne=F.sortIndex-V.sortIndex;return ne!==0?ne:F.id-V.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var m=[],p=[],v=1,g=null,x=3,M=!1,T=!1,E=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function U(F){for(var V=n(p);V!==null;){if(V.callback===null)r(p);else if(V.startTime<=F)r(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=n(p)}}function z(F){if(E=!1,U(F),!T)if(n(m)!==null)T=!0,L||(L=!0,A());else{var V=n(p);V!==null&&ee(z,V.startTime-F)}}var L=!1,O=-1,Q=5,C=-1;function D(){return b?!0:!(a.unstable_now()-C<Q)}function k(){if(b=!1,L){var F=a.unstable_now();C=F;var V=!0;try{e:{T=!1,E&&(E=!1,P(O),O=-1),M=!0;var ne=x;try{t:{for(U(F),g=n(m);g!==null&&!(g.expirationTime>F&&D());){var be=g.callback;if(typeof be=="function"){g.callback=null,x=g.priorityLevel;var Se=be(g.expirationTime<=F);if(F=a.unstable_now(),typeof Se=="function"){g.callback=Se,U(F),V=!0;break t}g===n(m)&&r(m),U(F)}else r(m);g=n(m)}if(g!==null)V=!0;else{var I=n(p);I!==null&&ee(z,I.startTime-F),V=!1}}break e}finally{g=null,x=ne,M=!1}V=void 0}}finally{V?A():L=!1}}}var A;if(typeof B=="function")A=function(){B(k)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=k,A=function(){q.postMessage(null)}}else A=function(){y(k,0)};function ee(F,V){O=y(function(){F(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(F){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var ne=x;x=V;try{return F()}finally{x=ne}},a.unstable_requestPaint=function(){b=!0},a.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ne=x;x=F;try{return V()}finally{x=ne}},a.unstable_scheduleCallback=function(F,V,ne){var be=a.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?be+ne:be):ne=be,F){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ne+Se,F={id:v++,callback:V,priorityLevel:F,startTime:ne,expirationTime:Se,sortIndex:-1},ne>be?(F.sortIndex=ne,e(p,F),n(m)===null&&F===n(p)&&(E?(P(O),O=-1):E=!0,ee(z,ne-be))):(F.sortIndex=Se,e(m,F),T||M||(T=!0,L||(L=!0,A()))),F},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(F){var V=x;return function(){var ne=x;x=V;try{return F.apply(this,arguments)}finally{x=ne}}}})(Ph)),Ph}var U_;function WM(){return U_||(U_=1,Oh.exports=XM()),Oh.exports}var Fh={exports:{}},Xn={};var N_;function qM(){if(N_)return Xn;N_=1;var a=Mm();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Xn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Xn.flushSync=function(m){var p=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=v,r.d.f()}},Xn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Xn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Xn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Xn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Xn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Xn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Xn.requestFormReset=function(m){r.d.r(m)},Xn.unstable_batchedUpdates=function(m,p){return m(p)},Xn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Xn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Xn.version="19.2.3",Xn}var L_;function jM(){if(L_)return Fh.exports;L_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Fh.exports=qM(),Fh.exports}var O_;function YM(){if(O_)return Al;O_=1;var a=WM(),e=Mm(),n=jM();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var u=s.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===s)return m(u),t;if(h===l)return m(u),i;h=h.sibling}throw Error(r(188))}if(s.return!==l.return)s=u,l=h;else{for(var S=!1,R=u.child;R;){if(R===s){S=!0,s=u,l=h;break}if(R===l){S=!0,l=u,s=h;break}R=R.sibling}if(!S){for(R=h.child;R;){if(R===s){S=!0,s=h,l=u;break}if(R===l){S=!0,l=h,s=u;break}R=R.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function v(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=v(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),B=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function A(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var W=Symbol.for("react.client.reference");function q(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===W?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case z:return"Suspense";case L:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case B:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case U:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return i=t.displayName||null,i!==null?i:q(t.type)||"Memo";case Q:i=t._payload,t=t._init;try{return q(t(i))}catch{}}return null}var ee=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},be=[],Se=-1;function I(t){return{current:t}}function oe(t){0>Se||(t.current=be[Se],be[Se]=null,Se--)}function _e(t,i){Se++,be[Se]=t.current,t.current=i}var Ce=I(null),He=I(null),re=I(null),pe=I(null);function Re(t,i){switch(_e(re,i),_e(He,t),_e(Ce,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Yv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Yv(i),t=Zv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}oe(Ce),_e(Ce,t)}function Xe(){oe(Ce),oe(He),oe(re)}function Ve(t){t.memoizedState!==null&&_e(pe,t);var i=Ce.current,s=Zv(i,t.type);i!==s&&(_e(He,t),_e(Ce,s))}function mt(t){He.current===t&&(oe(Ce),oe(He)),pe.current===t&&(oe(pe),Sl._currentValue=ne)}var tn,vt;function gt(t){if(tn===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);tn=i&&i[1]||"",vt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tn+t+vt}var Tt=!1;function st(t,i){if(!t||Tt)return"";Tt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(de){var ce=de}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(de){ce=de}t.call(xe.prototype)}}else{try{throw Error()}catch(de){ce=de}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(de){if(de&&ce&&typeof de.stack=="string")return[de.stack,ce.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),S=h[0],R=h[1];if(S&&R){var G=S.split(`
`),ae=R.split(`
`);for(u=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;u<ae.length&&!ae[u].includes("DetermineComponentFrameRoot");)u++;if(l===G.length||u===ae.length)for(l=G.length-1,u=ae.length-1;1<=l&&0<=u&&G[l]!==ae[u];)u--;for(;1<=l&&0<=u;l--,u--)if(G[l]!==ae[u]){if(l!==1||u!==1)do if(l--,u--,0>u||G[l]!==ae[u]){var me=`
`+G[l].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=l&&0<=u);break}}}finally{Tt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?gt(s):""}function nn(t,i){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==i&&i!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return st(t.type,!1);case 11:return st(t.type.render,!1);case 1:return st(t.type,!0);case 31:return gt("Activity");default:return""}}function X(t){try{var i="",s=null;do i+=nn(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Kt=Object.prototype.hasOwnProperty,bt=a.unstable_scheduleCallback,At=a.unstable_cancelCallback,je=a.unstable_shouldYield,N=a.unstable_requestPaint,_=a.unstable_now,H=a.unstable_getCurrentPriorityLevel,J=a.unstable_ImmediatePriority,he=a.unstable_UserBlockingPriority,se=a.unstable_NormalPriority,Fe=a.unstable_LowPriority,we=a.unstable_IdlePriority,ke=a.log,et=a.unstable_setDisableYieldValue,Ee=null,Te=null;function ze(t){if(typeof ke=="function"&&et(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Ee,t)}catch{}}var Be=Math.clz32?Math.clz32:Y,Ue=Math.log,ft=Math.LN2;function Y(t){return t>>>=0,t===0?32:31-(Ue(t)/ft|0)|0}var Le=256,Ae=262144,Ie=4194304;function Me(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var u=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~h,l!==0?u=Me(l):(S&=R,S!==0?u=Me(S):s||(s=R&~t,s!==0&&(u=Me(s))))):(R=l&~h,R!==0?u=Me(R):S!==0?u=Me(S):s||(s=l&~t,s!==0&&(u=Me(s)))),u===0?0:i!==0&&i!==u&&(i&h)===0&&(h=u&-u,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:u}function De(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function at(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function Ct(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function kn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bi(t,i,s,l,u,h){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,ae=t.hiddenUpdates;for(s=S&~s;0<s;){var me=31-Be(s),xe=1<<me;R[me]=0,G[me]=-1;var ce=ae[me];if(ce!==null)for(ae[me]=null,me=0;me<ce.length;me++){var de=ce[me];de!==null&&(de.lane&=-536870913)}s&=~xe}l!==0&&cc(t,l,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~i))}function cc(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Be(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function Lo(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Be(s),u=1<<l;u&i|t[l]&i&&(t[l]|=i),s&=~u}}function _s(t,i){var s=i&-i;return s=(s&42)!==0?1:Oo(s),(s&(t.suspendedLanes|i))!==0?0:s}function Oo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function xs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Po(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:__(t.type))}function Ji(t,i){var s=V.p;try{return V.p=t,i()}finally{V.p=s}}var yi=Math.random().toString(36).slice(2),gn="__reactFiber$"+yi,Dn="__reactProps$"+yi,Ii="__reactContainer$"+yi,ys="__reactEvents$"+yi,Ss="__reactListeners$"+yi,uc="__reactHandles$"+yi,Fo="__reactResources$"+yi,Pr="__reactMarker$"+yi;function Bo(t){delete t[gn],delete t[Dn],delete t[ys],delete t[Ss],delete t[uc]}function Za(t){var i=t[gn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ii]||s[gn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=n_(t);t!==null;){if(s=t[gn])return s;t=n_(t)}return i}t=s,s=t.parentNode}return null}function Ka(t){if(t=t[gn]||t[Ii]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Fr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function $a(t){var i=t[Fo];return i||(i=t[Fo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function w(t){t[Pr]=!0}var K=new Set,fe={};function le(t,i){te(t,i),te(t+"Capture",i)}function te(t,i){for(fe[t]=i,t=0;t<i.length;t++)K.add(i[t])}var Ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ge={},Oe={};function We(t){return Kt.call(Oe,t)?!0:Kt.call(Ge,t)?!1:Ne.test(t)?Oe[t]=!0:(Ge[t]=!0,!1)}function Ye(t,i,s){if(We(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function tt(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ze(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function nt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function an(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,h.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Qt(t){if(!t._valueTracker){var i=Nt(t)?"checked":"value";t._valueTracker=an(t,i,""+t[i])}}function It(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Nt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function $e(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function ot(t){return t.replace(Lt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Un(t,i,s,l,u,h,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+nt(i)):t.value!==""+nt(i)&&(t.value=""+nt(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?Nn(t,S,nt(i)):s!=null?Nn(t,S,nt(s)):l!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+nt(R):t.removeAttribute("name")}function va(t,i,s,l,u,h,S,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){Qt(t);return}s=s!=null?""+nt(s):"",i=i!=null?""+nt(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Qt(t)}function Nn(t,i,s){i==="number"&&$e(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Si(t,i,s,l){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+nt(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function Ht(t,i,s){if(i!=null&&(i=""+nt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+nt(s):""}function Ln(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(ee(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=nt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Qt(t)}function En(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var On=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||On.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function bs(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&Pn(t,u,l)}else for(var h in i)i.hasOwnProperty(h)&&Pn(t,h,i[h])}function zi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var OS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),PS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fc(t){return PS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function _a(){}var Rf=null;function wf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ms=null,Es=null;function jm(t){var i=Ka(t);if(i&&(t=i.stateNode)){var s=t[Dn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Un(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ot(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var u=l[Dn]||null;if(!u)throw Error(r(90));Un(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&It(l)}break e;case"textarea":Ht(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Si(t,!!s.multiple,i,!1)}}}var Df=!1;function Ym(t,i,s){if(Df)return t(i,s);Df=!0;try{var l=t(i);return l}finally{if(Df=!1,(Ms!==null||Es!==null)&&(Qc(),Ms&&(i=Ms,t=Es,Es=Ms=null,jm(i),t)))for(i=0;i<t.length;i++)jm(t[i])}}function Io(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Dn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var xa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=!1;if(xa)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{Uf=!1}var Qa=null,Nf=null,dc=null;function Zm(){if(dc)return dc;var t,i=Nf,s=i.length,l,u="value"in Qa?Qa.value:Qa.textContent,h=u.length;for(t=0;t<s&&i[t]===u[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===u[h-l];l++);return dc=u.slice(t,1<l?1-l:void 0)}function hc(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function pc(){return!0}function Km(){return!1}function $n(t){function i(s,l,u,h,S){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?pc:Km,this.isPropagationStopped=Km,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=pc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=pc)},persist:function(){},isPersistent:pc}),i}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=$n(Br),Ho=g({},Br,{view:0,detail:0}),FS=$n(Ho),Lf,Of,Go,gc=g({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Go&&(Go&&t.type==="mousemove"?(Lf=t.screenX-Go.screenX,Of=t.screenY-Go.screenY):Of=Lf=0,Go=t),Lf)},movementY:function(t){return"movementY"in t?t.movementY:Of}}),$m=$n(gc),BS=g({},gc,{dataTransfer:0}),IS=$n(BS),zS=g({},Ho,{relatedTarget:0}),Pf=$n(zS),HS=g({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),GS=$n(HS),VS=g({},Br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kS=$n(VS),XS=g({},Br,{data:0}),Qm=$n(XS),WS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=jS[t])?!!i[t]:!1}function Ff(){return YS}var ZS=g({},Ho,{key:function(t){if(t.key){var i=WS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=hc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(t){return t.type==="keypress"?hc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KS=$n(ZS),$S=g({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=$n($S),QS=g({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),JS=$n(QS),eb=g({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),tb=$n(eb),nb=g({},gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ib=$n(nb),ab=g({},Br,{newState:0,oldState:0}),rb=$n(ab),sb=[9,13,27,32],Bf=xa&&"CompositionEvent"in window,Vo=null;xa&&"documentMode"in document&&(Vo=document.documentMode);var ob=xa&&"TextEvent"in window&&!Vo,eg=xa&&(!Bf||Vo&&8<Vo&&11>=Vo),tg=" ",ng=!1;function ig(t,i){switch(t){case"keyup":return sb.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ag(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function lb(t,i){switch(t){case"compositionend":return ag(i);case"keypress":return i.which!==32?null:(ng=!0,tg);case"textInput":return t=i.data,t===tg&&ng?null:t;default:return null}}function cb(t,i){if(Ts)return t==="compositionend"||!Bf&&ig(t,i)?(t=Zm(),dc=Nf=Qa=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return eg&&i.locale!=="ko"?null:i.data;default:return null}}var ub={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rg(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!ub[t.type]:i==="textarea"}function sg(t,i,s,l){Ms?Es?Es.push(l):Es=[l]:Ms=l,i=ru(i,"onChange"),0<i.length&&(s=new mc("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var ko=null,Xo=null;function fb(t){Vv(t,0)}function vc(t){var i=Fr(t);if(It(i))return t}function og(t,i){if(t==="change")return i}var lg=!1;if(xa){var If;if(xa){var zf="oninput"in document;if(!zf){var cg=document.createElement("div");cg.setAttribute("oninput","return;"),zf=typeof cg.oninput=="function"}If=zf}else If=!1;lg=If&&(!document.documentMode||9<document.documentMode)}function ug(){ko&&(ko.detachEvent("onpropertychange",fg),Xo=ko=null)}function fg(t){if(t.propertyName==="value"&&vc(Xo)){var i=[];sg(i,Xo,t,wf(t)),Ym(fb,i)}}function db(t,i,s){t==="focusin"?(ug(),ko=i,Xo=s,ko.attachEvent("onpropertychange",fg)):t==="focusout"&&ug()}function hb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(Xo)}function pb(t,i){if(t==="click")return vc(i)}function mb(t,i){if(t==="input"||t==="change")return vc(i)}function gb(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var oi=typeof Object.is=="function"?Object.is:gb;function Wo(t,i){if(oi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!Kt.call(i,u)||!oi(t[u],i[u]))return!1}return!0}function dg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hg(t,i){var s=dg(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=dg(s)}}function pg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?pg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function mg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=$e(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=$e(t.document)}return i}function Hf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var vb=xa&&"documentMode"in document&&11>=document.documentMode,As=null,Gf=null,qo=null,Vf=!1;function gg(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Vf||As==null||As!==$e(l)||(l=As,"selectionStart"in l&&Hf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),qo&&Wo(qo,l)||(qo=l,l=ru(Gf,"onSelect"),0<l.length&&(i=new mc("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=As)))}function Ir(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Cs={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionrun:Ir("Transition","TransitionRun"),transitionstart:Ir("Transition","TransitionStart"),transitioncancel:Ir("Transition","TransitionCancel"),transitionend:Ir("Transition","TransitionEnd")},kf={},vg={};xa&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function zr(t){if(kf[t])return kf[t];if(!Cs[t])return t;var i=Cs[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in vg)return kf[t]=i[s];return t}var _g=zr("animationend"),xg=zr("animationiteration"),yg=zr("animationstart"),_b=zr("transitionrun"),xb=zr("transitionstart"),yb=zr("transitioncancel"),Sg=zr("transitionend"),bg=new Map,Xf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xf.push("scrollEnd");function Hi(t,i){bg.set(t,i),le(i,[t])}var _c=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},bi=[],Rs=0,Wf=0;function xc(){for(var t=Rs,i=Wf=Rs=0;i<t;){var s=bi[i];bi[i++]=null;var l=bi[i];bi[i++]=null;var u=bi[i];bi[i++]=null;var h=bi[i];if(bi[i++]=null,l!==null&&u!==null){var S=l.pending;S===null?u.next=u:(u.next=S.next,S.next=u),l.pending=u}h!==0&&Mg(s,u,h)}}function yc(t,i,s,l){bi[Rs++]=t,bi[Rs++]=i,bi[Rs++]=s,bi[Rs++]=l,Wf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function qf(t,i,s,l){return yc(t,i,s,l),Sc(t)}function Hr(t,i){return yc(t,null,null,i),Sc(t)}function Mg(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var u=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&i!==null&&(u=31-Be(s),t=h.hiddenUpdates,l=t[u],l===null?t[u]=[i]:l.push(i),i.lane=s|536870912),h):null}function Sc(t){if(50<pl)throw pl=0,th=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ws={};function Sb(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,i,s,l){return new Sb(t,i,s,l)}function jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ya(t,i){var s=t.alternate;return s===null?(s=li(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Eg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function bc(t,i,s,l,u,h){var S=0;if(l=t,typeof t=="function")jf(t)&&(S=1);else if(typeof t=="string")S=AM(t,s,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=li(31,s,i,u),t.elementType=C,t.lanes=h,t;case E:return Gr(s.children,u,h,i);case b:S=8,u|=24;break;case y:return t=li(12,s,i,u|2),t.elementType=y,t.lanes=h,t;case z:return t=li(13,s,i,u),t.elementType=z,t.lanes=h,t;case L:return t=li(19,s,i,u),t.elementType=L,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:S=10;break e;case P:S=9;break e;case U:S=11;break e;case O:S=14;break e;case Q:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=li(S,s,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function Gr(t,i,s,l){return t=li(7,t,l,i),t.lanes=s,t}function Yf(t,i,s){return t=li(6,t,null,i),t.lanes=s,t}function Tg(t){var i=li(18,null,null,0);return i.stateNode=t,i}function Zf(t,i,s){return i=li(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Ag=new WeakMap;function Mi(t,i){if(typeof t=="object"&&t!==null){var s=Ag.get(t);return s!==void 0?s:(i={value:t,source:i,stack:X(i)},Ag.set(t,i),i)}return{value:t,source:i,stack:X(i)}}var Ds=[],Us=0,Mc=null,jo=0,Ei=[],Ti=0,Ja=null,ea=1,ta="";function Sa(t,i){Ds[Us++]=jo,Ds[Us++]=Mc,Mc=t,jo=i}function Cg(t,i,s){Ei[Ti++]=ea,Ei[Ti++]=ta,Ei[Ti++]=Ja,Ja=t;var l=ea;t=ta;var u=32-Be(l)-1;l&=~(1<<u),s+=1;var h=32-Be(i)+u;if(30<h){var S=u-u%5;h=(l&(1<<S)-1).toString(32),l>>=S,u-=S,ea=1<<32-Be(i)+u|s<<u|l,ta=h+t}else ea=1<<h|s<<u|l,ta=t}function Kf(t){t.return!==null&&(Sa(t,1),Cg(t,1,0))}function $f(t){for(;t===Mc;)Mc=Ds[--Us],Ds[Us]=null,jo=Ds[--Us],Ds[Us]=null;for(;t===Ja;)Ja=Ei[--Ti],Ei[Ti]=null,ta=Ei[--Ti],Ei[Ti]=null,ea=Ei[--Ti],Ei[Ti]=null}function Rg(t,i){Ei[Ti++]=ea,Ei[Ti++]=ta,Ei[Ti++]=Ja,ea=i.id,ta=i.overflow,Ja=t}var Fn=null,Jt=null,Mt=!1,er=null,Ai=!1,Qf=Error(r(519));function tr(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yo(Mi(i,t)),Qf}function wg(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[gn]=t,i[Dn]=l,s){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(s=0;s<gl.length;s++)xt(gl[s],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":xt("invalid",i),va(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xt("invalid",i);break;case"textarea":xt("invalid",i),Ln(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||qv(i.textContent,s)?(l.popover!=null&&(xt("beforetoggle",i),xt("toggle",i)),l.onScroll!=null&&xt("scroll",i),l.onScrollEnd!=null&&xt("scrollend",i),l.onClick!=null&&(i.onclick=_a),i=!0):i=!1,i||tr(t,!0)}function Dg(t){for(Fn=t.return;Fn;)switch(Fn.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Fn=Fn.return}}function Ns(t){if(t!==Fn)return!1;if(!Mt)return Dg(t),Mt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||gh(t.type,t.memoizedProps)),s=!s),s&&Jt&&tr(t),Dg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Jt=t_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Jt=t_(t)}else i===27?(i=Jt,mr(t.type)?(t=Sh,Sh=null,Jt=t):Jt=i):Jt=Fn?Ri(t.stateNode.nextSibling):null;return!0}function Vr(){Jt=Fn=null,Mt=!1}function Jf(){var t=er;return t!==null&&(ti===null?ti=t:ti.push.apply(ti,t),er=null),t}function Yo(t){er===null?er=[t]:er.push(t)}var ed=I(null),kr=null,ba=null;function nr(t,i,s){_e(ed,i._currentValue),i._currentValue=s}function Ma(t){t._currentValue=ed.current,oe(ed)}function td(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function nd(t,i,s,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=u;for(var G=0;G<i.length;G++)if(R.context===i[G]){h.lanes|=s,R=h.alternate,R!==null&&(R.lanes|=s),td(h.return,s,t),l||(S=null);break e}h=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=s,h=S.alternate,h!==null&&(h.lanes|=s),td(S,s,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Ls(t,i,s,l){t=null;for(var u=i,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=u.type;oi(u.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(u===pe.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Sl):t=[Sl])}u=u.return}t!==null&&nd(i,t,s,l),i.flags|=262144}function Ec(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Xr(t){kr=t,ba=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Bn(t){return Ug(kr,t)}function Tc(t,i){return kr===null&&Xr(t),Ug(t,i)}function Ug(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ba===null){if(t===null)throw Error(r(308));ba=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ba=ba.next=i;return s}var bb=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},Mb=a.unstable_scheduleCallback,Eb=a.unstable_NormalPriority,vn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function id(){return{controller:new bb,data:new Map,refCount:0}}function Zo(t){t.refCount--,t.refCount===0&&Mb(Eb,function(){t.controller.abort()})}var Ko=null,ad=0,Os=0,Ps=null;function Tb(t,i){if(Ko===null){var s=Ko=[];ad=0,Os=oh(),Ps={status:"pending",value:void 0,then:function(l){s.push(l)}}}return ad++,i.then(Ng,Ng),i}function Ng(){if(--ad===0&&Ko!==null){Ps!==null&&(Ps.status="fulfilled");var t=Ko;Ko=null,Os=0,Ps=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Ab(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var Lg=F.S;F.S=function(t,i){gv=_(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Tb(t,i),Lg!==null&&Lg(t,i)};var Wr=I(null);function rd(){var t=Wr.current;return t!==null?t:$t.pooledCache}function Ac(t,i){i===null?_e(Wr,Wr.current):_e(Wr,i.pool)}function Og(){var t=rd();return t===null?null:{parent:vn._currentValue,pool:t}}var Fs=Error(r(460)),sd=Error(r(474)),Cc=Error(r(542)),Rc={then:function(){}};function Pg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Fg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(_a,_a),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ig(t),t;default:if(typeof i.status=="string")i.then(_a,_a);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ig(t),t}throw jr=i,Fs}}function qr(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(jr=s,Fs):s}}var jr=null;function Bg(){if(jr===null)throw Error(r(459));var t=jr;return jr=null,t}function Ig(t){if(t===Fs||t===Cc)throw Error(r(483))}var Bs=null,$o=0;function wc(t){var i=$o;return $o+=1,Bs===null&&(Bs=[]),Fg(Bs,t,i)}function Qo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Dc(t,i){throw i.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function zg(t){function i($,j){if(t){var ie=$.deletions;ie===null?($.deletions=[j],$.flags|=16):ie.push(j)}}function s($,j){if(!t)return null;for(;j!==null;)i($,j),j=j.sibling;return null}function l($){for(var j=new Map;$!==null;)$.key!==null?j.set($.key,$):j.set($.index,$),$=$.sibling;return j}function u($,j){return $=ya($,j),$.index=0,$.sibling=null,$}function h($,j,ie){return $.index=ie,t?(ie=$.alternate,ie!==null?(ie=ie.index,ie<j?($.flags|=67108866,j):ie):($.flags|=67108866,j)):($.flags|=1048576,j)}function S($){return t&&$.alternate===null&&($.flags|=67108866),$}function R($,j,ie,ve){return j===null||j.tag!==6?(j=Yf(ie,$.mode,ve),j.return=$,j):(j=u(j,ie),j.return=$,j)}function G($,j,ie,ve){var Qe=ie.type;return Qe===E?me($,j,ie.props.children,ve,ie.key):j!==null&&(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Q&&qr(Qe)===j.type)?(j=u(j,ie.props),Qo(j,ie),j.return=$,j):(j=bc(ie.type,ie.key,ie.props,null,$.mode,ve),Qo(j,ie),j.return=$,j)}function ae($,j,ie,ve){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=Zf(ie,$.mode,ve),j.return=$,j):(j=u(j,ie.children||[]),j.return=$,j)}function me($,j,ie,ve,Qe){return j===null||j.tag!==7?(j=Gr(ie,$.mode,ve,Qe),j.return=$,j):(j=u(j,ie),j.return=$,j)}function xe($,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Yf(""+j,$.mode,ie),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return ie=bc(j.type,j.key,j.props,null,$.mode,ie),Qo(ie,j),ie.return=$,ie;case T:return j=Zf(j,$.mode,ie),j.return=$,j;case Q:return j=qr(j),xe($,j,ie)}if(ee(j)||A(j))return j=Gr(j,$.mode,ie,null),j.return=$,j;if(typeof j.then=="function")return xe($,wc(j),ie);if(j.$$typeof===B)return xe($,Tc($,j),ie);Dc($,j)}return null}function ce($,j,ie,ve){var Qe=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return Qe!==null?null:R($,j,""+ie,ve);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:return ie.key===Qe?G($,j,ie,ve):null;case T:return ie.key===Qe?ae($,j,ie,ve):null;case Q:return ie=qr(ie),ce($,j,ie,ve)}if(ee(ie)||A(ie))return Qe!==null?null:me($,j,ie,ve,null);if(typeof ie.then=="function")return ce($,j,wc(ie),ve);if(ie.$$typeof===B)return ce($,j,Tc($,ie),ve);Dc($,ie)}return null}function de($,j,ie,ve,Qe){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return $=$.get(ie)||null,R(j,$,""+ve,Qe);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case M:return $=$.get(ve.key===null?ie:ve.key)||null,G(j,$,ve,Qe);case T:return $=$.get(ve.key===null?ie:ve.key)||null,ae(j,$,ve,Qe);case Q:return ve=qr(ve),de($,j,ie,ve,Qe)}if(ee(ve)||A(ve))return $=$.get(ie)||null,me(j,$,ve,Qe,null);if(typeof ve.then=="function")return de($,j,ie,wc(ve),Qe);if(ve.$$typeof===B)return de($,j,ie,Tc(j,ve),Qe);Dc(j,ve)}return null}function qe($,j,ie,ve){for(var Qe=null,wt=null,Ke=j,dt=j=0,St=null;Ke!==null&&dt<ie.length;dt++){Ke.index>dt?(St=Ke,Ke=null):St=Ke.sibling;var Dt=ce($,Ke,ie[dt],ve);if(Dt===null){Ke===null&&(Ke=St);break}t&&Ke&&Dt.alternate===null&&i($,Ke),j=h(Dt,j,dt),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt,Ke=St}if(dt===ie.length)return s($,Ke),Mt&&Sa($,dt),Qe;if(Ke===null){for(;dt<ie.length;dt++)Ke=xe($,ie[dt],ve),Ke!==null&&(j=h(Ke,j,dt),wt===null?Qe=Ke:wt.sibling=Ke,wt=Ke);return Mt&&Sa($,dt),Qe}for(Ke=l(Ke);dt<ie.length;dt++)St=de(Ke,$,dt,ie[dt],ve),St!==null&&(t&&St.alternate!==null&&Ke.delete(St.key===null?dt:St.key),j=h(St,j,dt),wt===null?Qe=St:wt.sibling=St,wt=St);return t&&Ke.forEach(function(yr){return i($,yr)}),Mt&&Sa($,dt),Qe}function it($,j,ie,ve){if(ie==null)throw Error(r(151));for(var Qe=null,wt=null,Ke=j,dt=j=0,St=null,Dt=ie.next();Ke!==null&&!Dt.done;dt++,Dt=ie.next()){Ke.index>dt?(St=Ke,Ke=null):St=Ke.sibling;var yr=ce($,Ke,Dt.value,ve);if(yr===null){Ke===null&&(Ke=St);break}t&&Ke&&yr.alternate===null&&i($,Ke),j=h(yr,j,dt),wt===null?Qe=yr:wt.sibling=yr,wt=yr,Ke=St}if(Dt.done)return s($,Ke),Mt&&Sa($,dt),Qe;if(Ke===null){for(;!Dt.done;dt++,Dt=ie.next())Dt=xe($,Dt.value,ve),Dt!==null&&(j=h(Dt,j,dt),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt);return Mt&&Sa($,dt),Qe}for(Ke=l(Ke);!Dt.done;dt++,Dt=ie.next())Dt=de(Ke,$,dt,Dt.value,ve),Dt!==null&&(t&&Dt.alternate!==null&&Ke.delete(Dt.key===null?dt:Dt.key),j=h(Dt,j,dt),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt);return t&&Ke.forEach(function(BM){return i($,BM)}),Mt&&Sa($,dt),Qe}function Yt($,j,ie,ve){if(typeof ie=="object"&&ie!==null&&ie.type===E&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:e:{for(var Qe=ie.key;j!==null;){if(j.key===Qe){if(Qe=ie.type,Qe===E){if(j.tag===7){s($,j.sibling),ve=u(j,ie.props.children),ve.return=$,$=ve;break e}}else if(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Q&&qr(Qe)===j.type){s($,j.sibling),ve=u(j,ie.props),Qo(ve,ie),ve.return=$,$=ve;break e}s($,j);break}else i($,j);j=j.sibling}ie.type===E?(ve=Gr(ie.props.children,$.mode,ve,ie.key),ve.return=$,$=ve):(ve=bc(ie.type,ie.key,ie.props,null,$.mode,ve),Qo(ve,ie),ve.return=$,$=ve)}return S($);case T:e:{for(Qe=ie.key;j!==null;){if(j.key===Qe)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){s($,j.sibling),ve=u(j,ie.children||[]),ve.return=$,$=ve;break e}else{s($,j);break}else i($,j);j=j.sibling}ve=Zf(ie,$.mode,ve),ve.return=$,$=ve}return S($);case Q:return ie=qr(ie),Yt($,j,ie,ve)}if(ee(ie))return qe($,j,ie,ve);if(A(ie)){if(Qe=A(ie),typeof Qe!="function")throw Error(r(150));return ie=Qe.call(ie),it($,j,ie,ve)}if(typeof ie.then=="function")return Yt($,j,wc(ie),ve);if(ie.$$typeof===B)return Yt($,j,Tc($,ie),ve);Dc($,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,j!==null&&j.tag===6?(s($,j.sibling),ve=u(j,ie),ve.return=$,$=ve):(s($,j),ve=Yf(ie,$.mode,ve),ve.return=$,$=ve),S($)):s($,j)}return function($,j,ie,ve){try{$o=0;var Qe=Yt($,j,ie,ve);return Bs=null,Qe}catch(Ke){if(Ke===Fs||Ke===Cc)throw Ke;var wt=li(29,Ke,null,$.mode);return wt.lanes=ve,wt.return=$,wt}}}var Yr=zg(!0),Hg=zg(!1),ir=!1;function od(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ld(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ar(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function rr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ot&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=Sc(t),Mg(t,null,s),i}return yc(t,l,i,s),Sc(t)}function Jo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Lo(t,s)}}function cd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,s=s.next}while(s!==null);h===null?u=h=i:h=h.next=i}else u=h=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var ud=!1;function el(){if(ud){var t=Ps;if(t!==null)throw t}}function tl(t,i,s,l){ud=!1;var u=t.updateQueue;ir=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,ae=G.next;G.next=null,S===null?h=ae:S.next=ae,S=G;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==S&&(R===null?me.firstBaseUpdate=ae:R.next=ae,me.lastBaseUpdate=G))}if(h!==null){var xe=u.baseState;S=0,me=ae=G=null,R=h;do{var ce=R.lane&-536870913,de=ce!==R.lane;if(de?(yt&ce)===ce:(l&ce)===ce){ce!==0&&ce===Os&&(ud=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,it=R;ce=i;var Yt=s;switch(it.tag){case 1:if(qe=it.payload,typeof qe=="function"){xe=qe.call(Yt,xe,ce);break e}xe=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=it.payload,ce=typeof qe=="function"?qe.call(Yt,xe,ce):qe,ce==null)break e;xe=g({},xe,ce);break e;case 2:ir=!0}}ce=R.callback,ce!==null&&(t.flags|=64,de&&(t.flags|=8192),de=u.callbacks,de===null?u.callbacks=[ce]:de.push(ce))}else de={lane:ce,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(ae=me=de,G=xe):me=me.next=de,S|=ce;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;de=R,R=de.next,de.next=null,u.lastBaseUpdate=de,u.shared.pending=null}}while(!0);me===null&&(G=xe),u.baseState=G,u.firstBaseUpdate=ae,u.lastBaseUpdate=me,h===null&&(u.shared.lanes=0),ur|=S,t.lanes=S,t.memoizedState=xe}}function Gg(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Vg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Gg(s[t],i)}var Is=I(null),Uc=I(0);function kg(t,i){t=Na,_e(Uc,t),_e(Is,i),Na=t|i.baseLanes}function fd(){_e(Uc,Na),_e(Is,Is.current)}function dd(){Na=Uc.current,oe(Is),oe(Uc)}var ci=I(null),Ci=null;function sr(t){var i=t.alternate;_e(dn,dn.current&1),_e(ci,t),Ci===null&&(i===null||Is.current!==null||i.memoizedState!==null)&&(Ci=t)}function hd(t){_e(dn,dn.current),_e(ci,t),Ci===null&&(Ci=t)}function Xg(t){t.tag===22?(_e(dn,dn.current),_e(ci,t),Ci===null&&(Ci=t)):or()}function or(){_e(dn,dn.current),_e(ci,ci.current)}function ui(t){oe(ci),Ci===t&&(Ci=null),oe(dn)}var dn=I(0);function Nc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||xh(s)||yh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ea=0,ut=null,qt=null,_n=null,Lc=!1,zs=!1,Zr=!1,Oc=0,nl=0,Hs=null,Cb=0;function on(){throw Error(r(321))}function pd(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!oi(t[s],i[s]))return!1;return!0}function md(t,i,s,l,u,h){return Ea=h,ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=t===null||t.memoizedState===null?C0:Dd,Zr=!1,h=s(l,u),Zr=!1,zs&&(h=qg(i,s,l,u)),Wg(t),h}function Wg(t){F.H=rl;var i=qt!==null&&qt.next!==null;if(Ea=0,_n=qt=ut=null,Lc=!1,nl=0,Hs=null,i)throw Error(r(300));t===null||xn||(t=t.dependencies,t!==null&&Ec(t)&&(xn=!0))}function qg(t,i,s,l){ut=t;var u=0;do{if(zs&&(Hs=null),nl=0,zs=!1,25<=u)throw Error(r(301));if(u+=1,_n=qt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=R0,h=i(s,l)}while(zs);return h}function Rb(){var t=F.H,i=t.useState()[0];return i=typeof i.then=="function"?il(i):i,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(ut.flags|=1024),i}function gd(){var t=Oc!==0;return Oc=0,t}function vd(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function _d(t){if(Lc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Lc=!1}Ea=0,_n=qt=ut=null,zs=!1,nl=Oc=0,Hs=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?ut.memoizedState=_n=t:_n=_n.next=t,_n}function hn(){if(qt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=_n===null?ut.memoizedState:_n.next;if(i!==null)_n=i,qt=t;else{if(t===null)throw ut.alternate===null?Error(r(467)):Error(r(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},_n===null?ut.memoizedState=_n=t:_n=_n.next=t}return _n}function Pc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function il(t){var i=nl;return nl+=1,Hs===null&&(Hs=[]),t=Fg(Hs,t,i),i=ut,(_n===null?i.memoizedState:_n.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?C0:Dd),t}function Fc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return il(t);if(t.$$typeof===B)return Bn(t)}throw Error(r(438,String(t)))}function xd(t){var i=null,s=ut.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ut.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Pc(),ut.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=D;return i.index++,s}function Ta(t,i){return typeof i=="function"?i(t):i}function Bc(t){var i=hn();return yd(i,qt,t)}function yd(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var u=t.baseQueue,h=l.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}i.baseQueue=u=h,l.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{i=u.next;var R=S=null,G=null,ae=i,me=!1;do{var xe=ae.lane&-536870913;if(xe!==ae.lane?(yt&xe)===xe:(Ea&xe)===xe){var ce=ae.revertLane;if(ce===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),xe===Os&&(me=!0);else if((Ea&ce)===ce){ae=ae.next,ce===Os&&(me=!0);continue}else xe={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(R=G=xe,S=h):G=G.next=xe,ut.lanes|=ce,ur|=ce;xe=ae.action,Zr&&s(h,xe),h=ae.hasEagerState?ae.eagerState:s(h,xe)}else ce={lane:xe,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(R=G=ce,S=h):G=G.next=ce,ut.lanes|=xe,ur|=xe;ae=ae.next}while(ae!==null&&ae!==i);if(G===null?S=h:G.next=R,!oi(h,t.memoizedState)&&(xn=!0,me&&(s=Ps,s!==null)))throw s;t.memoizedState=h,t.baseState=S,t.baseQueue=G,l.lastRenderedState=h}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Sd(t){var i=hn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,h=i.memoizedState;if(u!==null){s.pending=null;var S=u=u.next;do h=t(h,S.action),S=S.next;while(S!==u);oi(h,i.memoizedState)||(xn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function jg(t,i,s){var l=ut,u=hn(),h=Mt;if(h){if(s===void 0)throw Error(r(407));s=s()}else s=i();var S=!oi((qt||u).memoizedState,s);if(S&&(u.memoizedState=s,xn=!0),u=u.queue,Ed(Kg.bind(null,l,u,t),[t]),u.getSnapshot!==i||S||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,Gs(9,{destroy:void 0},Zg.bind(null,l,u,s,i),null),$t===null)throw Error(r(349));h||(Ea&127)!==0||Yg(l,i,s)}return s}function Yg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ut.updateQueue,i===null?(i=Pc(),ut.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Zg(t,i,s,l){i.value=s,i.getSnapshot=l,$g(i)&&Qg(t)}function Kg(t,i,s){return s(function(){$g(i)&&Qg(t)})}function $g(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!oi(t,s)}catch{return!0}}function Qg(t){var i=Hr(t,2);i!==null&&ni(i,t,2)}function bd(t){var i=Yn();if(typeof t=="function"){var s=t;if(t=s(),Zr){ze(!0);try{s()}finally{ze(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},i}function Jg(t,i,s,l){return t.baseState=s,yd(t,qt,typeof l=="function"?l:Ta)}function wb(t,i,s,l,u){if(Hc(t))throw Error(r(485));if(t=i.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};F.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,e0(i,h)):(h.next=s.next,i.pending=s.next=h)}}function e0(t,i){var s=i.action,l=i.payload,u=t.state;if(i.isTransition){var h=F.T,S={};F.T=S;try{var R=s(u,l),G=F.S;G!==null&&G(S,R),t0(t,i,R)}catch(ae){Md(t,i,ae)}finally{h!==null&&S.types!==null&&(h.types=S.types),F.T=h}}else try{h=s(u,l),t0(t,i,h)}catch(ae){Md(t,i,ae)}}function t0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){n0(t,i,l)},function(l){return Md(t,i,l)}):n0(t,i,s)}function n0(t,i,s){i.status="fulfilled",i.value=s,i0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,e0(t,s)))}function Md(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,i0(i),i=i.next;while(i!==l)}t.action=null}function i0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function a0(t,i){return i}function r0(t,i){if(Mt){var s=$t.formState;if(s!==null){e:{var l=ut;if(Mt){if(Jt){t:{for(var u=Jt,h=Ai;u.nodeType!==8;){if(!h){u=null;break t}if(u=Ri(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Jt=Ri(u.nextSibling),l=u.data==="F!";break e}}tr(l)}l=!1}l&&(i=s[0])}}return s=Yn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a0,lastRenderedState:i},s.queue=l,s=E0.bind(null,ut,l),l.dispatch=s,l=bd(!1),h=wd.bind(null,ut,!1,l.queue),l=Yn(),u={state:i,dispatch:null,action:t,pending:null},l.queue=u,s=wb.bind(null,ut,u,h,s),u.dispatch=s,l.memoizedState=t,[i,s,!1]}function s0(t){var i=hn();return o0(i,qt,t)}function o0(t,i,s){if(i=yd(t,i,a0)[0],t=Bc(Ta)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=il(i)}catch(S){throw S===Fs?Cc:S}else l=i;i=hn();var u=i.queue,h=u.dispatch;return s!==i.memoizedState&&(ut.flags|=2048,Gs(9,{destroy:void 0},Db.bind(null,u,s),null)),[l,h,t]}function Db(t,i){t.action=i}function l0(t){var i=hn(),s=qt;if(s!==null)return o0(i,s,t);hn(),i=i.memoizedState,s=hn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Gs(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ut.updateQueue,i===null&&(i=Pc(),ut.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function c0(){return hn().memoizedState}function Ic(t,i,s,l){var u=Yn();ut.flags|=t,u.memoizedState=Gs(1|i,{destroy:void 0},s,l===void 0?null:l)}function zc(t,i,s,l){var u=hn();l=l===void 0?null:l;var h=u.memoizedState.inst;qt!==null&&l!==null&&pd(l,qt.memoizedState.deps)?u.memoizedState=Gs(i,h,s,l):(ut.flags|=t,u.memoizedState=Gs(1|i,h,s,l))}function u0(t,i){Ic(8390656,8,t,i)}function Ed(t,i){zc(2048,8,t,i)}function Ub(t){ut.flags|=4;var i=ut.updateQueue;if(i===null)i=Pc(),ut.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function f0(t){var i=hn().memoizedState;return Ub({ref:i,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function d0(t,i){return zc(4,2,t,i)}function h0(t,i){return zc(4,4,t,i)}function p0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function m0(t,i,s){s=s!=null?s.concat([t]):null,zc(4,4,p0.bind(null,i,t),s)}function Td(){}function g0(t,i){var s=hn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&pd(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function v0(t,i){var s=hn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&pd(i,l[1]))return l[0];if(l=t(),Zr){ze(!0);try{t()}finally{ze(!1)}}return s.memoizedState=[l,i],l}function Ad(t,i,s){return s===void 0||(Ea&1073741824)!==0&&(yt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=_v(),ut.lanes|=t,ur|=t,s)}function _0(t,i,s,l){return oi(s,i)?s:Is.current!==null?(t=Ad(t,s,l),oi(t,i)||(xn=!0),t):(Ea&42)===0||(Ea&1073741824)!==0&&(yt&261930)===0?(xn=!0,t.memoizedState=s):(t=_v(),ut.lanes|=t,ur|=t,i)}function x0(t,i,s,l,u){var h=V.p;V.p=h!==0&&8>h?h:8;var S=F.T,R={};F.T=R,wd(t,!1,i,s);try{var G=u(),ae=F.S;if(ae!==null&&ae(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var me=Ab(G,l);al(t,i,me,hi(t))}else al(t,i,l,hi(t))}catch(xe){al(t,i,{then:function(){},status:"rejected",reason:xe},hi())}finally{V.p=h,S!==null&&R.types!==null&&(S.types=R.types),F.T=S}}function Nb(){}function Cd(t,i,s,l){if(t.tag!==5)throw Error(r(476));var u=y0(t).queue;x0(t,u,i,ne,s===null?Nb:function(){return S0(t),s(l)})}function y0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:ne},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function S0(t){var i=y0(t);i.next===null&&(i=t.alternate.memoizedState),al(t,i.next.queue,{},hi())}function Rd(){return Bn(Sl)}function b0(){return hn().memoizedState}function M0(){return hn().memoizedState}function Lb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=hi();t=ar(s);var l=rr(i,t,s);l!==null&&(ni(l,i,s),Jo(l,i,s)),i={cache:id()},t.payload=i;return}i=i.return}}function Ob(t,i,s){var l=hi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Hc(t)?T0(i,s):(s=qf(t,i,s,l),s!==null&&(ni(s,t,l),A0(s,i,l)))}function E0(t,i,s){var l=hi();al(t,i,s,l)}function al(t,i,s,l){var u={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Hc(t))T0(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,R=h(S,s);if(u.hasEagerState=!0,u.eagerState=R,oi(R,S))return yc(t,i,u,0),$t===null&&xc(),!1}catch{}if(s=qf(t,i,u,l),s!==null)return ni(s,t,l),A0(s,i,l),!0}return!1}function wd(t,i,s,l){if(l={lane:2,revertLane:oh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Hc(t)){if(i)throw Error(r(479))}else i=qf(t,s,l,2),i!==null&&ni(i,t,2)}function Hc(t){var i=t.alternate;return t===ut||i!==null&&i===ut}function T0(t,i){zs=Lc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function A0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Lo(t,s)}}var rl={readContext:Bn,use:Fc,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};rl.useEffectEvent=on;var C0={readContext:Bn,use:Fc,useCallback:function(t,i){return Yn().memoizedState=[t,i===void 0?null:i],t},useContext:Bn,useEffect:u0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Ic(4194308,4,p0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ic(4194308,4,t,i)},useInsertionEffect:function(t,i){Ic(4,2,t,i)},useMemo:function(t,i){var s=Yn();i=i===void 0?null:i;var l=t();if(Zr){ze(!0);try{t()}finally{ze(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Yn();if(s!==void 0){var u=s(i);if(Zr){ze(!0);try{s(i)}finally{ze(!1)}}}else u=i;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=Ob.bind(null,ut,t),[l.memoizedState,t]},useRef:function(t){var i=Yn();return t={current:t},i.memoizedState=t},useState:function(t){t=bd(t);var i=t.queue,s=E0.bind(null,ut,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Td,useDeferredValue:function(t,i){var s=Yn();return Ad(s,t,i)},useTransition:function(){var t=bd(!1);return t=x0.bind(null,ut,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ut,u=Yn();if(Mt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),$t===null)throw Error(r(349));(yt&127)!==0||Yg(l,i,s)}u.memoizedState=s;var h={value:s,getSnapshot:i};return u.queue=h,u0(Kg.bind(null,l,h,t),[t]),l.flags|=2048,Gs(9,{destroy:void 0},Zg.bind(null,l,h,s,i),null),s},useId:function(){var t=Yn(),i=$t.identifierPrefix;if(Mt){var s=ta,l=ea;s=(l&~(1<<32-Be(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Oc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Cb++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Rd,useFormState:r0,useActionState:r0,useOptimistic:function(t){var i=Yn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=wd.bind(null,ut,!0,s),s.dispatch=i,[t,i]},useMemoCache:xd,useCacheRefresh:function(){return Yn().memoizedState=Lb.bind(null,ut)},useEffectEvent:function(t){var i=Yn(),s={impl:t};return i.memoizedState=s,function(){if((Ot&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Dd={readContext:Bn,use:Fc,useCallback:g0,useContext:Bn,useEffect:Ed,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:h0,useMemo:v0,useReducer:Bc,useRef:c0,useState:function(){return Bc(Ta)},useDebugValue:Td,useDeferredValue:function(t,i){var s=hn();return _0(s,qt.memoizedState,t,i)},useTransition:function(){var t=Bc(Ta)[0],i=hn().memoizedState;return[typeof t=="boolean"?t:il(t),i]},useSyncExternalStore:jg,useId:b0,useHostTransitionStatus:Rd,useFormState:s0,useActionState:s0,useOptimistic:function(t,i){var s=hn();return Jg(s,qt,t,i)},useMemoCache:xd,useCacheRefresh:M0};Dd.useEffectEvent=f0;var R0={readContext:Bn,use:Fc,useCallback:g0,useContext:Bn,useEffect:Ed,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:h0,useMemo:v0,useReducer:Sd,useRef:c0,useState:function(){return Sd(Ta)},useDebugValue:Td,useDeferredValue:function(t,i){var s=hn();return qt===null?Ad(s,t,i):_0(s,qt.memoizedState,t,i)},useTransition:function(){var t=Sd(Ta)[0],i=hn().memoizedState;return[typeof t=="boolean"?t:il(t),i]},useSyncExternalStore:jg,useId:b0,useHostTransitionStatus:Rd,useFormState:l0,useActionState:l0,useOptimistic:function(t,i){var s=hn();return qt!==null?Jg(s,qt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:xd,useCacheRefresh:M0};R0.useEffectEvent=f0;function Ud(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Nd={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=hi(),u=ar(l);u.payload=i,s!=null&&(u.callback=s),i=rr(t,u,l),i!==null&&(ni(i,t,l),Jo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=hi(),u=ar(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=rr(t,u,l),i!==null&&(ni(i,t,l),Jo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=hi(),l=ar(s);l.tag=2,i!=null&&(l.callback=i),i=rr(t,l,s),i!==null&&(ni(i,t,s),Jo(i,t,s))}};function w0(t,i,s,l,u,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,S):i.prototype&&i.prototype.isPureReactComponent?!Wo(s,l)||!Wo(u,h):!0}function D0(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Nd.enqueueReplaceState(i,i.state,null)}function Kr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function U0(t){_c(t)}function N0(t){console.error(t)}function L0(t){_c(t)}function Gc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function O0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ld(t,i,s){return s=ar(s),s.tag=3,s.payload={element:null},s.callback=function(){Gc(t,i)},s}function P0(t){return t=ar(t),t.tag=3,t}function F0(t,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var h=l.value;t.payload=function(){return u(h)},t.callback=function(){O0(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){O0(i,s,l),typeof u!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function Pb(t,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Ls(i,s,u,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Ci===null?Jc():s.alternate===null&&ln===0&&(ln=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===Rc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),ah(t,l,u)),!1;case 22:return s.flags|=65536,l===Rc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),ah(t,l,u)),!1}throw Error(r(435,s.tag))}return ah(t,l,u),Jc(),!1}if(Mt)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==Qf&&(t=Error(r(422),{cause:l}),Yo(Mi(t,s)))):(l!==Qf&&(i=Error(r(423),{cause:l}),Yo(Mi(i,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=Mi(l,s),u=Ld(t.stateNode,l,u),cd(t,u),ln!==4&&(ln=2)),!1;var h=Error(r(520),{cause:l});if(h=Mi(h,s),hl===null?hl=[h]:hl.push(h),ln!==4&&(ln=2),i===null)return!0;l=Mi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=Ld(s.stateNode,l,t),cd(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(fr===null||!fr.has(h))))return s.flags|=65536,u&=-u,s.lanes|=u,u=P0(u),F0(u,t,s,l),cd(s,u),!1}s=s.return}while(s!==null);return!1}var Od=Error(r(461)),xn=!1;function In(t,i,s,l){i.child=t===null?Hg(i,null,s,l):Yr(i,t.child,s,l)}function B0(t,i,s,l,u){s=s.render;var h=i.ref;if("ref"in l){var S={};for(var R in l)R!=="ref"&&(S[R]=l[R])}else S=l;return Xr(i),l=md(t,i,s,S,h,u),R=gd(),t!==null&&!xn?(vd(t,i,u),Aa(t,i,u)):(Mt&&R&&Kf(i),i.flags|=1,In(t,i,l,u),i.child)}function I0(t,i,s,l,u){if(t===null){var h=s.type;return typeof h=="function"&&!jf(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,z0(t,i,h,l,u)):(t=bc(s.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Vd(t,u)){var S=h.memoizedProps;if(s=s.compare,s=s!==null?s:Wo,s(S,l)&&t.ref===i.ref)return Aa(t,i,u)}return i.flags|=1,t=ya(h,l),t.ref=i.ref,t.return=i,i.child=t}function z0(t,i,s,l,u){if(t!==null){var h=t.memoizedProps;if(Wo(h,l)&&t.ref===i.ref)if(xn=!1,i.pendingProps=l=h,Vd(t,u))(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,Aa(t,i,u)}return Pd(t,i,s,l,u)}function H0(t,i,s,l){var u=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~h}else l=0,i.child=null;return G0(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ac(i,h!==null?h.cachePool:null),h!==null?kg(i,h):fd(),Xg(i);else return l=i.lanes=536870912,G0(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(Ac(i,h.cachePool),kg(i,h),or(),i.memoizedState=null):(t!==null&&Ac(i,null),fd(),or());return In(t,i,u,s),i.child}function sl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function G0(t,i,s,l,u){var h=rd();return h=h===null?null:{parent:vn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&Ac(i,null),fd(),Xg(i),t!==null&&Ls(t,i,l,!0),i.childLanes=u,null}function Vc(t,i){return i=Xc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function V0(t,i,s){return Yr(i,t.child,null,s),t=Vc(i,i.pendingProps),t.flags|=2,ui(i),i.memoizedState=null,t}function Fb(t,i,s){var l=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Mt){if(l.mode==="hidden")return t=Vc(i,l),i.lanes=536870912,sl(null,t);if(hd(i),(t=Jt)?(t=e_(t,Ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ja!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},s=Tg(t),s.return=i,i.child=s,Fn=i,Jt=null)):t=null,t===null)throw tr(i);return i.lanes=536870912,null}return Vc(i,l)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(hd(i),u)if(i.flags&256)i.flags&=-257,i=V0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(xn||Ls(t,i,s,!1),u=(s&t.childLanes)!==0,xn||u){if(l=$t,l!==null&&(S=_s(l,s),S!==0&&S!==h.retryLane))throw h.retryLane=S,Hr(t,S),ni(l,t,S),Od;Jc(),i=V0(t,i,s)}else t=h.treeContext,Jt=Ri(S.nextSibling),Fn=i,Mt=!0,er=null,Ai=!1,t!==null&&Rg(i,t),i=Vc(i,l),i.flags|=4096;return i}return t=ya(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function kc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Pd(t,i,s,l,u){return Xr(i),s=md(t,i,s,l,void 0,u),l=gd(),t!==null&&!xn?(vd(t,i,u),Aa(t,i,u)):(Mt&&l&&Kf(i),i.flags|=1,In(t,i,s,u),i.child)}function k0(t,i,s,l,u,h){return Xr(i),i.updateQueue=null,s=qg(i,l,s,u),Wg(t),l=gd(),t!==null&&!xn?(vd(t,i,h),Aa(t,i,h)):(Mt&&l&&Kf(i),i.flags|=1,In(t,i,s,h),i.child)}function X0(t,i,s,l,u){if(Xr(i),i.stateNode===null){var h=ws,S=s.contextType;typeof S=="object"&&S!==null&&(h=Bn(S)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Nd,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},od(i),S=s.contextType,h.context=typeof S=="object"&&S!==null?Bn(S):ws,h.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Ud(i,s,S,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Nd.enqueueReplaceState(h,h.state,null),tl(i,l,h,u),el(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var R=i.memoizedProps,G=Kr(s,R);h.props=G;var ae=h.context,me=s.contextType;S=ws,typeof me=="object"&&me!==null&&(S=Bn(me));var xe=s.getDerivedStateFromProps;me=typeof xe=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,me||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||ae!==S)&&D0(i,h,l,S),ir=!1;var ce=i.memoizedState;h.state=ce,tl(i,l,h,u),el(),ae=i.memoizedState,R||ce!==ae||ir?(typeof xe=="function"&&(Ud(i,s,xe,l),ae=i.memoizedState),(G=ir||w0(i,s,G,l,ce,ae,S))?(me||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ae),h.props=l,h.state=ae,h.context=S,l=G):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,ld(t,i),S=i.memoizedProps,me=Kr(s,S),h.props=me,xe=i.pendingProps,ce=h.context,ae=s.contextType,G=ws,typeof ae=="object"&&ae!==null&&(G=Bn(ae)),R=s.getDerivedStateFromProps,(ae=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==xe||ce!==G)&&D0(i,h,l,G),ir=!1,ce=i.memoizedState,h.state=ce,tl(i,l,h,u),el();var de=i.memoizedState;S!==xe||ce!==de||ir||t!==null&&t.dependencies!==null&&Ec(t.dependencies)?(typeof R=="function"&&(Ud(i,s,R,l),de=i.memoizedState),(me=ir||w0(i,s,me,l,ce,de,G)||t!==null&&t.dependencies!==null&&Ec(t.dependencies))?(ae||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,de,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,de,G)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=de),h.props=l,h.state=de,h.context=G,l=me):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,kc(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=Yr(i,t.child,null,u),i.child=Yr(i,null,s,u)):In(t,i,s,u),i.memoizedState=h.state,t=i.child):t=Aa(t,i,u),t}function W0(t,i,s,l){return Vr(),i.flags|=256,In(t,i,s,l),i.child}var Fd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bd(t){return{baseLanes:t,cachePool:Og()}}function Id(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=di),t}function q0(t,i,s){var l=i.pendingProps,u=!1,h=(i.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),S&&(u=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Mt){if(u?sr(i):or(),(t=Jt)?(t=e_(t,Ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ja!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},s=Tg(t),s.return=i,i.child=s,Fn=i,Jt=null)):t=null,t===null)throw tr(i);return yh(t)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,u?(or(),u=i.mode,R=Xc({mode:"hidden",children:R},u),l=Gr(l,u,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=Bd(s),l.childLanes=Id(t,S,s),i.memoizedState=Fd,sl(null,l)):(sr(i),zd(i,R))}var G=t.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(h)i.flags&256?(sr(i),i.flags&=-257,i=Hd(t,i,s)):i.memoizedState!==null?(or(),i.child=t.child,i.flags|=128,i=null):(or(),R=l.fallback,u=i.mode,l=Xc({mode:"visible",children:l.children},u),R=Gr(R,u,s,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,Yr(i,t.child,null,s),l=i.child,l.memoizedState=Bd(s),l.childLanes=Id(t,S,s),i.memoizedState=Fd,i=sl(null,l));else if(sr(i),yh(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var ae=S.dgst;S=ae,l=Error(r(419)),l.stack="",l.digest=S,Yo({value:l,source:null,stack:null}),i=Hd(t,i,s)}else if(xn||Ls(t,i,s,!1),S=(s&t.childLanes)!==0,xn||S){if(S=$t,S!==null&&(l=_s(S,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Hr(t,l),ni(S,t,l),Od;xh(R)||Jc(),i=Hd(t,i,s)}else xh(R)?(i.flags|=192,i.child=t.child,i=null):(t=G.treeContext,Jt=Ri(R.nextSibling),Fn=i,Mt=!0,er=null,Ai=!1,t!==null&&Rg(i,t),i=zd(i,l.children),i.flags|=4096);return i}return u?(or(),R=l.fallback,u=i.mode,G=t.child,ae=G.sibling,l=ya(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,ae!==null?R=ya(ae,R):(R=Gr(R,u,s,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,sl(null,l),l=i.child,R=t.child.memoizedState,R===null?R=Bd(s):(u=R.cachePool,u!==null?(G=vn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Og(),R={baseLanes:R.baseLanes|s,cachePool:u}),l.memoizedState=R,l.childLanes=Id(t,S,s),i.memoizedState=Fd,sl(t.child,l)):(sr(i),s=t.child,t=s.sibling,s=ya(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function zd(t,i){return i=Xc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Xc(t,i){return t=li(22,t,null,i),t.lanes=0,t}function Hd(t,i,s){return Yr(i,t.child,null,s),t=zd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function j0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),td(t.return,i,s)}function Gd(t,i,s,l,u,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u,treeForkCount:h}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=u,S.treeForkCount=h)}function Y0(t,i,s){var l=i.pendingProps,u=l.revealOrder,h=l.tail;l=l.children;var S=dn.current,R=(S&2)!==0;if(R?(S=S&1|2,i.flags|=128):S&=1,_e(dn,S),In(t,i,l,s),l=Mt?jo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&j0(t,s,i);else if(t.tag===19)j0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&Nc(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),Gd(i,!1,u,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Nc(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}Gd(i,!0,s,null,h,l);break;case"together":Gd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Aa(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ur|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Ls(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=ya(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ya(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Vd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ec(t)))}function Bb(t,i,s){switch(i.tag){case 3:Re(i,i.stateNode.containerInfo),nr(i,vn,t.memoizedState.cache),Vr();break;case 27:case 5:Ve(i);break;case 4:Re(i,i.stateNode.containerInfo);break;case 10:nr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,hd(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(sr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?q0(t,i,s):(sr(i),t=Aa(t,i,s),t!==null?t.sibling:null);sr(i);break;case 19:var u=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Ls(t,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return Y0(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(dn,dn.current),l)break;return null;case 22:return i.lanes=0,H0(t,i,s,i.pendingProps);case 24:nr(i,vn,t.memoizedState.cache)}return Aa(t,i,s)}function Z0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)xn=!0;else{if(!Vd(t,s)&&(i.flags&128)===0)return xn=!1,Bb(t,i,s);xn=(t.flags&131072)!==0}else xn=!1,Mt&&(i.flags&1048576)!==0&&Cg(i,jo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=qr(i.elementType),i.type=t,typeof t=="function")jf(t)?(l=Kr(t,l),i.tag=1,i=X0(null,i,t,l,s)):(i.tag=0,i=Pd(null,i,t,l,s));else{if(t!=null){var u=t.$$typeof;if(u===U){i.tag=11,i=B0(null,i,t,l,s);break e}else if(u===O){i.tag=14,i=I0(null,i,t,l,s);break e}}throw i=q(t)||t,Error(r(306,i,""))}}return i;case 0:return Pd(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=Kr(l,i.pendingProps),X0(t,i,l,u,s);case 3:e:{if(Re(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var h=i.memoizedState;u=h.element,ld(t,i),tl(i,l,null,s);var S=i.memoizedState;if(l=S.cache,nr(i,vn,l),l!==h.cache&&nd(i,[vn],s,!0),el(),l=S.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=W0(t,i,l,s);break e}else if(l!==u){u=Mi(Error(r(424)),i),Yo(u),i=W0(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Jt=Ri(t.firstChild),Fn=i,Mt=!0,er=null,Ai=!0,s=Hg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Vr(),l===u){i=Aa(t,i,s);break e}In(t,i,l,s)}i=i.child}return i;case 26:return kc(t,i),t===null?(s=s_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Mt||(s=i.type,t=i.pendingProps,l=su(re.current).createElement(s),l[gn]=i,l[Dn]=t,zn(l,s,t),w(l),i.stateNode=l):i.memoizedState=s_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ve(i),t===null&&Mt&&(l=i.stateNode=i_(i.type,i.pendingProps,re.current),Fn=i,Ai=!0,u=Jt,mr(i.type)?(Sh=u,Jt=Ri(l.firstChild)):Jt=u),In(t,i,i.pendingProps.children,s),kc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Mt&&((u=l=Jt)&&(l=hM(l,i.type,i.pendingProps,Ai),l!==null?(i.stateNode=l,Fn=i,Jt=Ri(l.firstChild),Ai=!1,u=!0):u=!1),u||tr(i)),Ve(i),u=i.type,h=i.pendingProps,S=t!==null?t.memoizedProps:null,l=h.children,gh(u,h)?l=null:S!==null&&gh(u,S)&&(i.flags|=32),i.memoizedState!==null&&(u=md(t,i,Rb,null,null,s),Sl._currentValue=u),kc(t,i),In(t,i,l,s),i.child;case 6:return t===null&&Mt&&((t=s=Jt)&&(s=pM(s,i.pendingProps,Ai),s!==null?(i.stateNode=s,Fn=i,Jt=null,t=!0):t=!1),t||tr(i)),null;case 13:return q0(t,i,s);case 4:return Re(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Yr(i,null,l,s):In(t,i,l,s),i.child;case 11:return B0(t,i,i.type,i.pendingProps,s);case 7:return In(t,i,i.pendingProps,s),i.child;case 8:return In(t,i,i.pendingProps.children,s),i.child;case 12:return In(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,nr(i,i.type,l.value),In(t,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,Xr(i),u=Bn(u),l=l(u),i.flags|=1,In(t,i,l,s),i.child;case 14:return I0(t,i,i.type,i.pendingProps,s);case 15:return z0(t,i,i.type,i.pendingProps,s);case 19:return Y0(t,i,s);case 31:return Fb(t,i,s);case 22:return H0(t,i,s,i.pendingProps);case 24:return Xr(i),l=Bn(vn),t===null?(u=rd(),u===null&&(u=$t,h=id(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=s),u=h),i.memoizedState={parent:l,cache:u},od(i),nr(i,vn,u)):((t.lanes&s)!==0&&(ld(t,i),tl(i,null,null,s),el()),u=t.memoizedState,h=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),nr(i,vn,l)):(l=h.cache,nr(i,vn,l),l!==u.cache&&nd(i,[vn],s,!0))),In(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Ca(t){t.flags|=4}function kd(t,i,s,l,u){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(bv())t.flags|=8192;else throw jr=Rc,sd}else t.flags&=-16777217}function K0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!f_(i))if(bv())t.flags|=8192;else throw jr=Rc,sd}function Wc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?zt():536870912,t.lanes|=i,Ws|=i)}function ol(t,i){if(!Mt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function en(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function Ib(t,i,s){var l=i.pendingProps;switch($f(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(i),null;case 1:return en(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ma(vn),Xe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ns(i)?Ca(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jf())),en(i),null;case 26:var u=i.type,h=i.memoizedState;return t===null?(Ca(i),h!==null?(en(i),K0(i,h)):(en(i),kd(i,u,null,l,s))):h?h!==t.memoizedState?(Ca(i),en(i),K0(i,h)):(en(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ca(i),en(i),kd(i,u,t,l,s)),null;case 27:if(mt(i),s=re.current,u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ca(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return en(i),null}t=Ce.current,Ns(i)?wg(i):(t=i_(u,l,s),i.stateNode=t,Ca(i))}return en(i),null;case 5:if(mt(i),u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ca(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return en(i),null}if(h=Ce.current,Ns(i))wg(i);else{var S=su(re.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?S.createElement(u,{is:l.is}):S.createElement(u)}}h[gn]=i,h[Dn]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=h;e:switch(zn(h,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ca(i)}}return en(i),kd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ca(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=re.current,Ns(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,u=Fn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[gn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||qv(t.nodeValue,s)),t||tr(i,!0)}else t=su(t).createTextNode(l),t[gn]=i,i.stateNode=t}return en(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Ns(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[gn]=i}else Vr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),t=!1}else s=Jf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(r(558))}return en(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ns(i),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[gn]=i}else Vr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),u=!1}else u=Jf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==u&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Wc(i,i.updateQueue),en(i),null);case 4:return Xe(),t===null&&fh(i.stateNode.containerInfo),en(i),null;case 10:return Ma(i.type),en(i),null;case 19:if(oe(dn),l=i.memoizedState,l===null)return en(i),null;if(u=(i.flags&128)!==0,h=l.rendering,h===null)if(u)ol(l,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=Nc(t),h!==null){for(i.flags|=128,ol(l,!1),t=h.updateQueue,i.updateQueue=t,Wc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Eg(s,t),s=s.sibling;return _e(dn,dn.current&1|2),Mt&&Sa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&_()>Kc&&(i.flags|=128,u=!0,ol(l,!1),i.lanes=4194304)}else{if(!u)if(t=Nc(h),t!==null){if(i.flags|=128,u=!0,t=t.updateQueue,i.updateQueue=t,Wc(i,t),ol(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Mt)return en(i),null}else 2*_()-l.renderingStartTime>Kc&&s!==536870912&&(i.flags|=128,u=!0,ol(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=_(),t.sibling=null,s=dn.current,_e(dn,u?s&1|2:s&1),Mt&&Sa(i,l.treeForkCount),t):(en(i),null);case 22:case 23:return ui(i),dd(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(en(i),i.subtreeFlags&6&&(i.flags|=8192)):en(i),s=i.updateQueue,s!==null&&Wc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&oe(Wr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ma(vn),en(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function zb(t,i){switch($f(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ma(vn),Xe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return mt(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(r(340));Vr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ui(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Vr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return oe(dn),null;case 4:return Xe(),null;case 10:return Ma(i.type),null;case 22:case 23:return ui(i),dd(),t!==null&&oe(Wr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ma(vn),null;case 25:return null;default:return null}}function $0(t,i){switch($f(i),i.tag){case 3:Ma(vn),Xe();break;case 26:case 27:case 5:mt(i);break;case 4:Xe();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:oe(dn);break;case 10:Ma(i.type);break;case 22:case 23:ui(i),dd(),t!==null&&oe(Wr);break;case 24:Ma(vn)}}function ll(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){l=void 0;var h=s.create,S=s.inst;l=h(),S.destroy=l}s=s.next}while(s!==u)}}catch(R){Vt(i,i.return,R)}}function lr(t,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var h=u.next;l=h;do{if((l.tag&t)===t){var S=l.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=i;var G=s,ae=R;try{ae()}catch(me){Vt(u,G,me)}}}l=l.next}while(l!==h)}}catch(me){Vt(i,i.return,me)}}function Q0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Vg(i,s)}catch(l){Vt(t,t.return,l)}}}function J0(t,i,s){s.props=Kr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Vt(t,i,l)}}function cl(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(u){Vt(t,i,u)}}function na(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){Vt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Vt(t,i,u)}else s.current=null}function ev(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){Vt(t,t.return,u)}}function Xd(t,i,s){try{var l=t.stateNode;oM(l,t.type,s,i),l[Dn]=i}catch(u){Vt(t,t.return,u)}}function tv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&mr(t.type)||t.tag===4}function Wd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&mr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=_a));else if(l!==4&&(l===27&&mr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(qd(t,i,s),t=t.sibling;t!==null;)qd(t,i,s),t=t.sibling}function qc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&mr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(qc(t,i,s),t=t.sibling;t!==null;)qc(t,i,s),t=t.sibling}function nv(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);zn(i,l,s),i[gn]=t,i[Dn]=s}catch(h){Vt(t,t.return,h)}}var Ra=!1,yn=!1,jd=!1,iv=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function Hb(t,i){if(t=t.containerInfo,ph=hu,t=mg(t),Hf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var S=0,R=-1,G=-1,ae=0,me=0,xe=t,ce=null;t:for(;;){for(var de;xe!==s||u!==0&&xe.nodeType!==3||(R=S+u),xe!==h||l!==0&&xe.nodeType!==3||(G=S+l),xe.nodeType===3&&(S+=xe.nodeValue.length),(de=xe.firstChild)!==null;)ce=xe,xe=de;for(;;){if(xe===t)break t;if(ce===s&&++ae===u&&(R=S),ce===h&&++me===l&&(G=S),(de=xe.nextSibling)!==null)break;xe=ce,ce=xe.parentNode}xe=de}s=R===-1||G===-1?null:{start:R,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(mh={focusedElem:t,selectionRange:s},hu=!1,Rn=i;Rn!==null;)if(i=Rn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Rn=t;else for(;Rn!==null;){switch(i=Rn,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,u=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var qe=Kr(s.type,u);t=l.getSnapshotBeforeUpdate(qe,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(it){Vt(s,s.return,it)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)_h(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":_h(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Rn=t;break}Rn=i.return}}function av(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Da(t,s),l&4&&ll(5,s);break;case 1:if(Da(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){Vt(s,s.return,S)}else{var u=Kr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Vt(s,s.return,S)}}l&64&&Q0(s),l&512&&cl(s,s.return);break;case 3:if(Da(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Vg(t,i)}catch(S){Vt(s,s.return,S)}}break;case 27:i===null&&l&4&&nv(s);case 26:case 5:Da(t,s),i===null&&l&4&&ev(s),l&512&&cl(s,s.return);break;case 12:Da(t,s);break;case 31:Da(t,s),l&4&&ov(t,s);break;case 13:Da(t,s),l&4&&lv(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Zb.bind(null,s),mM(t,s))));break;case 22:if(l=s.memoizedState!==null||Ra,!l){i=i!==null&&i.memoizedState!==null||yn,u=Ra;var h=yn;Ra=l,(yn=i)&&!h?Ua(t,s,(s.subtreeFlags&8772)!==0):Da(t,s),Ra=u,yn=h}break;case 30:break;default:Da(t,s)}}function rv(t){var i=t.alternate;i!==null&&(t.alternate=null,rv(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Bo(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,Qn=!1;function wa(t,i,s){for(s=s.child;s!==null;)sv(t,i,s),s=s.sibling}function sv(t,i,s){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Ee,s)}catch{}switch(s.tag){case 26:yn||na(s,i),wa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:yn||na(s,i);var l=rn,u=Qn;mr(s.type)&&(rn=s.stateNode,Qn=!1),wa(t,i,s),_l(s.stateNode),rn=l,Qn=u;break;case 5:yn||na(s,i);case 6:if(l=rn,u=Qn,rn=null,wa(t,i,s),rn=l,Qn=u,rn!==null)if(Qn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(s.stateNode)}catch(h){Vt(s,i,h)}else try{rn.removeChild(s.stateNode)}catch(h){Vt(s,i,h)}break;case 18:rn!==null&&(Qn?(t=rn,Qv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Js(t)):Qv(rn,s.stateNode));break;case 4:l=rn,u=Qn,rn=s.stateNode.containerInfo,Qn=!0,wa(t,i,s),rn=l,Qn=u;break;case 0:case 11:case 14:case 15:lr(2,s,i),yn||lr(4,s,i),wa(t,i,s);break;case 1:yn||(na(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&J0(s,i,l)),wa(t,i,s);break;case 21:wa(t,i,s);break;case 22:yn=(l=yn)||s.memoizedState!==null,wa(t,i,s),yn=l;break;default:wa(t,i,s)}}function ov(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Js(t)}catch(s){Vt(i,i.return,s)}}}function lv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Js(t)}catch(s){Vt(i,i.return,s)}}function Gb(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new iv),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new iv),i;default:throw Error(r(435,t.tag))}}function jc(t,i){var s=Gb(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var u=Kb.bind(null,t,l);l.then(u,u)}})}function Jn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],h=t,S=i,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(mr(R.type)){rn=R.stateNode,Qn=!1;break e}break;case 5:rn=R.stateNode,Qn=!1;break e;case 3:case 4:rn=R.stateNode.containerInfo,Qn=!0;break e}R=R.return}if(rn===null)throw Error(r(160));sv(h,S,u),rn=null,Qn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)cv(i,t),i=i.sibling}var Gi=null;function cv(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jn(i,t),ei(t),l&4&&(lr(3,t,t.return),ll(3,t),lr(5,t,t.return));break;case 1:Jn(i,t),ei(t),l&512&&(yn||s===null||na(s,s.return)),l&64&&Ra&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=Gi;if(Jn(i,t),ei(t),l&512&&(yn||s===null||na(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Pr]||h[gn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(l),u.head.insertBefore(h,u.querySelector("head > title"))),zn(h,l,s),h[gn]=t,w(h),l=h;break e;case"link":var S=c_("link","href",u).get(l+(s.href||""));if(S){for(var R=0;R<S.length;R++)if(h=S[R],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(R,1);break t}}h=u.createElement(l),zn(h,l,s),u.head.appendChild(h);break;case"meta":if(S=c_("meta","content",u).get(l+(s.content||""))){for(R=0;R<S.length;R++)if(h=S[R],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(R,1);break t}}h=u.createElement(l),zn(h,l,s),u.head.appendChild(h);break;default:throw Error(r(468,l))}h[gn]=t,w(h),l=h}t.stateNode=l}else u_(u,t.type,t.stateNode);else t.stateNode=l_(u,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?u_(u,t.type,t.stateNode):l_(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Xd(t,t.memoizedProps,s.memoizedProps)}break;case 27:Jn(i,t),ei(t),l&512&&(yn||s===null||na(s,s.return)),s!==null&&l&4&&Xd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Jn(i,t),ei(t),l&512&&(yn||s===null||na(s,s.return)),t.flags&32){u=t.stateNode;try{En(u,"")}catch(qe){Vt(t,t.return,qe)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,Xd(t,u,s!==null?s.memoizedProps:u)),l&1024&&(jd=!0);break;case 6:if(Jn(i,t),ei(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(qe){Vt(t,t.return,qe)}}break;case 3:if(cu=null,u=Gi,Gi=ou(i.containerInfo),Jn(i,t),Gi=u,ei(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Js(i.containerInfo)}catch(qe){Vt(t,t.return,qe)}jd&&(jd=!1,uv(t));break;case 4:l=Gi,Gi=ou(t.stateNode.containerInfo),Jn(i,t),ei(t),Gi=l;break;case 12:Jn(i,t),ei(t);break;case 31:Jn(i,t),ei(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,jc(t,l)));break;case 13:Jn(i,t),ei(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Zc=_()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,jc(t,l)));break;case 22:u=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,ae=Ra,me=yn;if(Ra=ae||u,yn=me||G,Jn(i,t),yn=me,Ra=ae,ei(t),l&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||G||Ra||yn||$r(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(h=G.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=G.stateNode;var xe=G.memoizedProps.style,ce=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(qe){Vt(G,G.return,qe)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(qe){Vt(G,G.return,qe)}}}else if(i.tag===18){if(s===null){G=i;try{var de=G.stateNode;u?Jv(de,!0):Jv(G.stateNode,!1)}catch(qe){Vt(G,G.return,qe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,jc(t,s))));break;case 19:Jn(i,t),ei(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,jc(t,l)));break;case 30:break;case 21:break;default:Jn(i,t),ei(t)}}function ei(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(tv(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,h=Wd(t);qc(t,h,u);break;case 5:var S=s.stateNode;s.flags&32&&(En(S,""),s.flags&=-33);var R=Wd(t);qc(t,R,S);break;case 3:case 4:var G=s.stateNode.containerInfo,ae=Wd(t);qd(t,ae,G);break;default:throw Error(r(161))}}catch(me){Vt(t,t.return,me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function uv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;uv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Da(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)av(t,i.alternate,i),i=i.sibling}function $r(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:lr(4,i,i.return),$r(i);break;case 1:na(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&J0(i,i.return,s),$r(i);break;case 27:_l(i.stateNode);case 26:case 5:na(i,i.return),$r(i);break;case 22:i.memoizedState===null&&$r(i);break;case 30:$r(i);break;default:$r(i)}t=t.sibling}}function Ua(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=t,h=i,S=h.flags;switch(h.tag){case 0:case 11:case 15:Ua(u,h,s),ll(4,h);break;case 1:if(Ua(u,h,s),l=h,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ae){Vt(l,l.return,ae)}if(l=h,u=l.updateQueue,u!==null){var R=l.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Gg(G[u],R)}catch(ae){Vt(l,l.return,ae)}}s&&S&64&&Q0(h),cl(h,h.return);break;case 27:nv(h);case 26:case 5:Ua(u,h,s),s&&l===null&&S&4&&ev(h),cl(h,h.return);break;case 12:Ua(u,h,s);break;case 31:Ua(u,h,s),s&&S&4&&ov(u,h);break;case 13:Ua(u,h,s),s&&S&4&&lv(u,h);break;case 22:h.memoizedState===null&&Ua(u,h,s),cl(h,h.return);break;case 30:break;default:Ua(u,h,s)}i=i.sibling}}function Yd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Zo(s))}function Zd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Zo(t))}function Vi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)fv(t,i,s,l),i=i.sibling}function fv(t,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Vi(t,i,s,l),u&2048&&ll(9,i);break;case 1:Vi(t,i,s,l);break;case 3:Vi(t,i,s,l),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Zo(t)));break;case 12:if(u&2048){Vi(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,S=h.id,R=h.onPostCommit;typeof R=="function"&&R(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Vt(i,i.return,G)}}else Vi(t,i,s,l);break;case 31:Vi(t,i,s,l);break;case 13:Vi(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,S=i.alternate,i.memoizedState!==null?h._visibility&2?Vi(t,i,s,l):ul(t,i):h._visibility&2?Vi(t,i,s,l):(h._visibility|=2,Vs(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),u&2048&&Yd(S,i);break;case 24:Vi(t,i,s,l),u&2048&&Zd(i.alternate,i);break;default:Vi(t,i,s,l)}}function Vs(t,i,s,l,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,S=i,R=s,G=l,ae=S.flags;switch(S.tag){case 0:case 11:case 15:Vs(h,S,R,G,u),ll(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?Vs(h,S,R,G,u):ul(h,S):(me._visibility|=2,Vs(h,S,R,G,u)),u&&ae&2048&&Yd(S.alternate,S);break;case 24:Vs(h,S,R,G,u),u&&ae&2048&&Zd(S.alternate,S);break;default:Vs(h,S,R,G,u)}i=i.sibling}}function ul(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,u=l.flags;switch(l.tag){case 22:ul(s,l),u&2048&&Yd(l.alternate,l);break;case 24:ul(s,l),u&2048&&Zd(l.alternate,l);break;default:ul(s,l)}i=i.sibling}}var fl=8192;function ks(t,i,s){if(t.subtreeFlags&fl)for(t=t.child;t!==null;)dv(t,i,s),t=t.sibling}function dv(t,i,s){switch(t.tag){case 26:ks(t,i,s),t.flags&fl&&t.memoizedState!==null&&CM(s,Gi,t.memoizedState,t.memoizedProps);break;case 5:ks(t,i,s);break;case 3:case 4:var l=Gi;Gi=ou(t.stateNode.containerInfo),ks(t,i,s),Gi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=fl,fl=16777216,ks(t,i,s),fl=l):ks(t,i,s));break;default:ks(t,i,s)}}function hv(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function dl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Rn=l,mv(l,t)}hv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pv(t),t=t.sibling}function pv(t){switch(t.tag){case 0:case 11:case 15:dl(t),t.flags&2048&&lr(9,t,t.return);break;case 3:dl(t);break;case 12:dl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Yc(t)):dl(t);break;default:dl(t)}}function Yc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Rn=l,mv(l,t)}hv(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:lr(8,i,i.return),Yc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Yc(i));break;default:Yc(i)}t=t.sibling}}function mv(t,i){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:lr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Rn=l;else e:for(s=t;Rn!==null;){l=Rn;var u=l.sibling,h=l.return;if(rv(l),l===s){Rn=null;break e}if(u!==null){u.return=h,Rn=u;break e}Rn=h}}}var Vb={getCacheForType:function(t){var i=Bn(vn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Bn(vn).controller.signal}},kb=typeof WeakMap=="function"?WeakMap:Map,Ot=0,$t=null,_t=null,yt=0,Gt=0,fi=null,cr=!1,Xs=!1,Kd=!1,Na=0,ln=0,ur=0,Qr=0,$d=0,di=0,Ws=0,hl=null,ti=null,Qd=!1,Zc=0,gv=0,Kc=1/0,$c=null,fr=null,Tn=0,dr=null,qs=null,La=0,Jd=0,eh=null,vv=null,pl=0,th=null;function hi(){return(Ot&2)!==0&&yt!==0?yt&-yt:F.T!==null?oh():Po()}function _v(){if(di===0)if((yt&536870912)===0||Mt){var t=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),di=t}else di=536870912;return t=ci.current,t!==null&&(t.flags|=32),di}function ni(t,i,s){(t===$t&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(js(t,0),hr(t,yt,di,!1)),kn(t,s),((Ot&2)===0||t!==$t)&&(t===$t&&((Ot&2)===0&&(Qr|=s),ln===4&&hr(t,yt,di,!1)),ia(t))}function xv(t,i,s){if((Ot&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||De(t,i),u=l?qb(t,i):ih(t,i,!0),h=l;do{if(u===0){Xs&&!l&&hr(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!Xb(s)){u=ih(t,i,!1),h=!1;continue}if(u===2){if(h=i,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var R=t;u=hl;var G=R.current.memoizedState.isDehydrated;if(G&&(js(R,S).flags|=256),S=ih(R,S,!1),S!==2){if(Kd&&!G){R.errorRecoveryDisabledLanes|=h,Qr|=h,u=4;break e}h=ti,ti=u,h!==null&&(ti===null?ti=h:ti.push.apply(ti,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){js(t,0),hr(t,i,0,!0);break}e:{switch(l=t,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:hr(l,i,di,!cr);break e;case 2:ti=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=Zc+300-_(),10<u)){if(hr(l,i,di,!cr),ye(l,0,!0)!==0)break e;La=i,l.timeoutHandle=Kv(yv.bind(null,l,s,ti,$c,Qd,i,di,Qr,Ws,cr,h,"Throttled",-0,0),u);break e}yv(l,s,ti,$c,Qd,i,di,Qr,Ws,cr,h,null,-0,0)}}break}while(!0);ia(t)}function yv(t,i,s,l,u,h,S,R,G,ae,me,xe,ce,de){if(t.timeoutHandle=-1,xe=i.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_a},dv(i,h,xe);var qe=(h&62914560)===h?Zc-_():(h&4194048)===h?gv-_():0;if(qe=RM(xe,qe),qe!==null){La=h,t.cancelPendingCommit=qe(Rv.bind(null,t,i,h,s,l,u,S,R,G,me,xe,null,ce,de)),hr(t,h,S,!ae);return}}Rv(t,i,h,s,l,u,S,R,G)}function Xb(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],h=u.getSnapshot;u=u.value;try{if(!oi(h(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(t,i,s,l){i&=~$d,i&=~Qr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var u=i;0<u;){var h=31-Be(u),S=1<<h;l[h]=-1,u&=~S}s!==0&&cc(t,s,i)}function Qc(){return(Ot&6)===0?(ml(0),!1):!0}function nh(){if(_t!==null){if(Gt===0)var t=_t.return;else t=_t,ba=kr=null,_d(t),Bs=null,$o=0,t=_t;for(;t!==null;)$0(t.alternate,t),t=t.return;_t=null}}function js(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,uM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),La=0,nh(),$t=t,_t=s=ya(t.current,null),yt=i,Gt=0,fi=null,cr=!1,Xs=De(t,i),Kd=!1,Ws=di=$d=Qr=ur=ln=0,ti=hl=null,Qd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var u=31-Be(l),h=1<<u;i|=t[u],l&=~h}return Na=i,xc(),s}function Sv(t,i){ut=null,F.H=rl,i===Fs||i===Cc?(i=Bg(),Gt=3):i===sd?(i=Bg(),Gt=4):Gt=i===Od?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,_t===null&&(ln=1,Gc(t,Mi(i,t.current)))}function bv(){var t=ci.current;return t===null?!0:(yt&4194048)===yt?Ci===null:(yt&62914560)===yt||(yt&536870912)!==0?t===Ci:!1}function Mv(){var t=F.H;return F.H=rl,t===null?rl:t}function Ev(){var t=F.A;return F.A=Vb,t}function Jc(){ln=4,cr||(yt&4194048)!==yt&&ci.current!==null||(Xs=!0),(ur&134217727)===0&&(Qr&134217727)===0||$t===null||hr($t,yt,di,!1)}function ih(t,i,s){var l=Ot;Ot|=2;var u=Mv(),h=Ev();($t!==t||yt!==i)&&($c=null,js(t,i)),i=!1;var S=ln;e:do try{if(Gt!==0&&_t!==null){var R=_t,G=fi;switch(Gt){case 8:nh(),S=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var ae=Gt;if(Gt=0,fi=null,Ys(t,R,G,ae),s&&Xs){S=0;break e}break;default:ae=Gt,Gt=0,fi=null,Ys(t,R,G,ae)}}Wb(),S=ln;break}catch(me){Sv(t,me)}while(!0);return i&&t.shellSuspendCounter++,ba=kr=null,Ot=l,F.H=u,F.A=h,_t===null&&($t=null,yt=0,xc()),S}function Wb(){for(;_t!==null;)Tv(_t)}function qb(t,i){var s=Ot;Ot|=2;var l=Mv(),u=Ev();$t!==t||yt!==i?($c=null,Kc=_()+500,js(t,i)):Xs=De(t,i);e:do try{if(Gt!==0&&_t!==null){i=_t;var h=fi;t:switch(Gt){case 1:Gt=0,fi=null,Ys(t,i,h,1);break;case 2:case 9:if(Pg(h)){Gt=0,fi=null,Av(i);break}i=function(){Gt!==2&&Gt!==9||$t!==t||(Gt=7),ia(t)},h.then(i,i);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:Pg(h)?(Gt=0,fi=null,Av(i)):(Gt=0,fi=null,Ys(t,i,h,7));break;case 5:var S=null;switch(_t.tag){case 26:S=_t.memoizedState;case 5:case 27:var R=_t;if(S?f_(S):R.stateNode.complete){Gt=0,fi=null;var G=R.sibling;if(G!==null)_t=G;else{var ae=R.return;ae!==null?(_t=ae,eu(ae)):_t=null}break t}}Gt=0,fi=null,Ys(t,i,h,5);break;case 6:Gt=0,fi=null,Ys(t,i,h,6);break;case 8:nh(),ln=6;break e;default:throw Error(r(462))}}jb();break}catch(me){Sv(t,me)}while(!0);return ba=kr=null,F.H=l,F.A=u,Ot=s,_t!==null?0:($t=null,yt=0,xc(),ln)}function jb(){for(;_t!==null&&!je();)Tv(_t)}function Tv(t){var i=Z0(t.alternate,t,Na);t.memoizedProps=t.pendingProps,i===null?eu(t):_t=i}function Av(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=k0(s,i,i.pendingProps,i.type,void 0,yt);break;case 11:i=k0(s,i,i.pendingProps,i.type.render,i.ref,yt);break;case 5:_d(i);default:$0(s,i),i=_t=Eg(i,Na),i=Z0(s,i,Na)}t.memoizedProps=t.pendingProps,i===null?eu(t):_t=i}function Ys(t,i,s,l){ba=kr=null,_d(i),Bs=null,$o=0;var u=i.return;try{if(Pb(t,u,i,s,yt)){ln=1,Gc(t,Mi(s,t.current)),_t=null;return}}catch(h){if(u!==null)throw _t=u,h;ln=1,Gc(t,Mi(s,t.current)),_t=null;return}i.flags&32768?(Mt||l===1?t=!0:Xs||(yt&536870912)!==0?t=!1:(cr=t=!0,(l===2||l===9||l===3||l===6)&&(l=ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),Cv(i,t)):eu(i)}function eu(t){var i=t;do{if((i.flags&32768)!==0){Cv(i,cr);return}t=i.return;var s=Ib(i.alternate,i,Na);if(s!==null){_t=s;return}if(i=i.sibling,i!==null){_t=i;return}_t=i=t}while(i!==null);ln===0&&(ln=5)}function Cv(t,i){do{var s=zb(t.alternate,t);if(s!==null){s.flags&=32767,_t=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){_t=t;return}_t=t=s}while(t!==null);ln=6,_t=null}function Rv(t,i,s,l,u,h,S,R,G){t.cancelPendingCommit=null;do tu();while(Tn!==0);if((Ot&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(h=i.lanes|i.childLanes,h|=Wf,Bi(t,s,h,S,R,G),t===$t&&(_t=$t=null,yt=0),qs=i,dr=t,La=s,Jd=h,eh=u,vv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$b(se,function(){return Lv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,u=V.p,V.p=2,S=Ot,Ot|=4;try{Hb(t,i,s)}finally{Ot=S,V.p=u,F.T=l}}Tn=1,wv(),Dv(),Uv()}}function wv(){if(Tn===1){Tn=0;var t=dr,i=qs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=V.p;V.p=2;var u=Ot;Ot|=4;try{cv(i,t);var h=mh,S=mg(t.containerInfo),R=h.focusedElem,G=h.selectionRange;if(S!==R&&R&&R.ownerDocument&&pg(R.ownerDocument.documentElement,R)){if(G!==null&&Hf(R)){var ae=G.start,me=G.end;if(me===void 0&&(me=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(me,R.value.length);else{var xe=R.ownerDocument||document,ce=xe&&xe.defaultView||window;if(ce.getSelection){var de=ce.getSelection(),qe=R.textContent.length,it=Math.min(G.start,qe),Yt=G.end===void 0?it:Math.min(G.end,qe);!de.extend&&it>Yt&&(S=Yt,Yt=it,it=S);var $=hg(R,it),j=hg(R,Yt);if($&&j&&(de.rangeCount!==1||de.anchorNode!==$.node||de.anchorOffset!==$.offset||de.focusNode!==j.node||de.focusOffset!==j.offset)){var ie=xe.createRange();ie.setStart($.node,$.offset),de.removeAllRanges(),it>Yt?(de.addRange(ie),de.extend(j.node,j.offset)):(ie.setEnd(j.node,j.offset),de.addRange(ie))}}}}for(xe=[],de=R;de=de.parentNode;)de.nodeType===1&&xe.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ve=xe[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}hu=!!ph,mh=ph=null}finally{Ot=u,V.p=l,F.T=s}}t.current=i,Tn=2}}function Dv(){if(Tn===2){Tn=0;var t=dr,i=qs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=V.p;V.p=2;var u=Ot;Ot|=4;try{av(t,i.alternate,i)}finally{Ot=u,V.p=l,F.T=s}}Tn=3}}function Uv(){if(Tn===4||Tn===3){Tn=0,N();var t=dr,i=qs,s=La,l=vv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Tn=5:(Tn=0,qs=dr=null,Nv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(fr=null),xs(s),i=i.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Ee,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,u=V.p,V.p=2,F.T=null;try{for(var h=t.onRecoverableError,S=0;S<l.length;S++){var R=l[S];h(R.value,{componentStack:R.stack})}}finally{F.T=i,V.p=u}}(La&3)!==0&&tu(),ia(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===th?pl++:(pl=0,th=t):pl=0,ml(0)}}function Nv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Zo(i)))}function tu(){return wv(),Dv(),Uv(),Lv()}function Lv(){if(Tn!==5)return!1;var t=dr,i=Jd;Jd=0;var s=xs(La),l=F.T,u=V.p;try{V.p=32>s?32:s,F.T=null,s=eh,eh=null;var h=dr,S=La;if(Tn=0,qs=dr=null,La=0,(Ot&6)!==0)throw Error(r(331));var R=Ot;if(Ot|=4,pv(h.current),fv(h,h.current,S,s),Ot=R,ml(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Ee,h)}catch{}return!0}finally{V.p=u,F.T=l,Nv(t,i)}}function Ov(t,i,s){i=Mi(s,i),i=Ld(t.stateNode,i,2),t=rr(t,i,2),t!==null&&(kn(t,2),ia(t))}function Vt(t,i,s){if(t.tag===3)Ov(t,t,s);else for(;i!==null;){if(i.tag===3){Ov(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fr===null||!fr.has(l))){t=Mi(s,t),s=P0(2),l=rr(i,s,2),l!==null&&(F0(s,l,i,t),kn(l,2),ia(l));break}}i=i.return}}function ah(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new kb;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(Kd=!0,u.add(s),t=Yb.bind(null,t,i,s),i.then(t,t))}function Yb(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,$t===t&&(yt&s)===s&&(ln===4||ln===3&&(yt&62914560)===yt&&300>_()-Zc?(Ot&2)===0&&js(t,0):$d|=s,Ws===yt&&(Ws=0)),ia(t)}function Pv(t,i){i===0&&(i=zt()),t=Hr(t,i),t!==null&&(kn(t,i),ia(t))}function Zb(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Pv(t,s)}function Kb(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),Pv(t,s)}function $b(t,i){return bt(t,i)}var nu=null,Zs=null,rh=!1,iu=!1,sh=!1,pr=0;function ia(t){t!==Zs&&t.next===null&&(Zs===null?nu=Zs=t:Zs=Zs.next=t),iu=!0,rh||(rh=!0,Jb())}function ml(t,i){if(!sh&&iu){sh=!0;do for(var s=!1,l=nu;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var h=0;else{var S=l.suspendedLanes,R=l.pingedLanes;h=(1<<31-Be(42|t)+1)-1,h&=u&~(S&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,zv(l,h))}else h=yt,h=ye(l,l===$t?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||De(l,h)||(s=!0,zv(l,h));l=l.next}while(s);sh=!1}}function Qb(){Fv()}function Fv(){iu=rh=!1;var t=0;pr!==0&&cM()&&(t=pr);for(var i=_(),s=null,l=nu;l!==null;){var u=l.next,h=Bv(l,i);h===0?(l.next=null,s===null?nu=u:s.next=u,u===null&&(Zs=s)):(s=l,(t!==0||(h&3)!==0)&&(iu=!0)),l=u}Tn!==0&&Tn!==5||ml(t),pr!==0&&(pr=0)}function Bv(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-Be(h),R=1<<S,G=u[S];G===-1?((R&s)===0||(R&l)!==0)&&(u[S]=at(R,i)):G<=i&&(t.expiredLanes|=R),h&=~R}if(i=$t,s=yt,s=ye(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&At(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||De(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&At(l),xs(s)){case 2:case 8:s=he;break;case 32:s=se;break;case 268435456:s=we;break;default:s=se}return l=Iv.bind(null,t),s=bt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&At(l),t.callbackPriority=2,t.callbackNode=null,2}function Iv(t,i){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(tu()&&t.callbackNode!==s)return null;var l=yt;return l=ye(t,t===$t?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(xv(t,l,i),Bv(t,_()),t.callbackNode!=null&&t.callbackNode===s?Iv.bind(null,t):null)}function zv(t,i){if(tu())return null;xv(t,i,!0)}function Jb(){fM(function(){(Ot&6)!==0?bt(J,Qb):Fv()})}function oh(){if(pr===0){var t=Os;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),pr=t}return pr}function Hv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fc(""+t)}function Gv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function eM(t,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var h=Hv((u[Dn]||null).action),S=l.submitter;S&&(i=(i=S[Dn]||null)?Hv(i.formAction):S.getAttribute("formAction"),i!==null&&(h=i,S=null));var R=new mc("action","action",null,l,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(pr!==0){var G=S?Gv(u,S):new FormData(u);Cd(s,{pending:!0,data:G,method:u.method,action:h},null,G)}}else typeof h=="function"&&(R.preventDefault(),G=S?Gv(u,S):new FormData(u),Cd(s,{pending:!0,data:G,method:u.method,action:h},h,G))},currentTarget:u}]})}}for(var lh=0;lh<Xf.length;lh++){var ch=Xf[lh],tM=ch.toLowerCase(),nM=ch[0].toUpperCase()+ch.slice(1);Hi(tM,"on"+nM)}Hi(_g,"onAnimationEnd"),Hi(xg,"onAnimationIteration"),Hi(yg,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi(_b,"onTransitionRun"),Hi(xb,"onTransitionStart"),Hi(yb,"onTransitionCancel"),Hi(Sg,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gl));function Vv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var S=l.length-1;0<=S;S--){var R=l[S],G=R.instance,ae=R.currentTarget;if(R=R.listener,G!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=ae;try{h(u)}catch(me){_c(me)}u.currentTarget=null,h=G}else for(S=0;S<l.length;S++){if(R=l[S],G=R.instance,ae=R.currentTarget,R=R.listener,G!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=ae;try{h(u)}catch(me){_c(me)}u.currentTarget=null,h=G}}}}function xt(t,i){var s=i[ys];s===void 0&&(s=i[ys]=new Set);var l=t+"__bubble";s.has(l)||(kv(i,t,2,!1),s.add(l))}function uh(t,i,s){var l=0;i&&(l|=4),kv(s,t,l,i)}var au="_reactListening"+Math.random().toString(36).slice(2);function fh(t){if(!t[au]){t[au]=!0,K.forEach(function(s){s!=="selectionchange"&&(iM.has(s)||uh(s,!1,t),uh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[au]||(i[au]=!0,uh("selectionchange",!1,i))}}function kv(t,i,s,l){switch(__(i)){case 2:var u=UM;break;case 8:u=NM;break;default:u=Ah}s=u.bind(null,i,s,t),u=void 0,!Uf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function dh(t,i,s,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var R=l.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=l.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=Za(R),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){l=h=S;continue e}R=R.parentNode}}l=l.return}Ym(function(){var ae=h,me=wf(s),xe=[];e:{var ce=bg.get(t);if(ce!==void 0){var de=mc,qe=t;switch(t){case"keypress":if(hc(s)===0)break e;case"keydown":case"keyup":de=KS;break;case"focusin":qe="focus",de=Pf;break;case"focusout":qe="blur",de=Pf;break;case"beforeblur":case"afterblur":de=Pf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=IS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=JS;break;case _g:case xg:case yg:de=GS;break;case Sg:de=tb;break;case"scroll":case"scrollend":de=FS;break;case"wheel":de=ib;break;case"copy":case"cut":case"paste":de=kS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Jm;break;case"toggle":case"beforetoggle":de=rb}var it=(i&4)!==0,Yt=!it&&(t==="scroll"||t==="scrollend"),$=it?ce!==null?ce+"Capture":null:ce;it=[];for(var j=ae,ie;j!==null;){var ve=j;if(ie=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ie===null||$===null||(ve=Io(j,$),ve!=null&&it.push(vl(j,ve,ie))),Yt)break;j=j.return}0<it.length&&(ce=new de(ce,qe,null,s,me),xe.push({event:ce,listeners:it}))}}if((i&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",ce&&s!==Rf&&(qe=s.relatedTarget||s.fromElement)&&(Za(qe)||qe[Ii]))break e;if((de||ce)&&(ce=me.window===me?me:(ce=me.ownerDocument)?ce.defaultView||ce.parentWindow:window,de?(qe=s.relatedTarget||s.toElement,de=ae,qe=qe?Za(qe):null,qe!==null&&(Yt=c(qe),it=qe.tag,qe!==Yt||it!==5&&it!==27&&it!==6)&&(qe=null)):(de=null,qe=ae),de!==qe)){if(it=$m,ve="onMouseLeave",$="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(it=Jm,ve="onPointerLeave",$="onPointerEnter",j="pointer"),Yt=de==null?ce:Fr(de),ie=qe==null?ce:Fr(qe),ce=new it(ve,j+"leave",de,s,me),ce.target=Yt,ce.relatedTarget=ie,ve=null,Za(me)===ae&&(it=new it($,j+"enter",qe,s,me),it.target=ie,it.relatedTarget=Yt,ve=it),Yt=ve,de&&qe)t:{for(it=aM,$=de,j=qe,ie=0,ve=$;ve;ve=it(ve))ie++;ve=0;for(var Qe=j;Qe;Qe=it(Qe))ve++;for(;0<ie-ve;)$=it($),ie--;for(;0<ve-ie;)j=it(j),ve--;for(;ie--;){if($===j||j!==null&&$===j.alternate){it=$;break t}$=it($),j=it(j)}it=null}else it=null;de!==null&&Xv(xe,ce,de,it,!1),qe!==null&&Yt!==null&&Xv(xe,Yt,qe,it,!0)}}e:{if(ce=ae?Fr(ae):window,de=ce.nodeName&&ce.nodeName.toLowerCase(),de==="select"||de==="input"&&ce.type==="file")var wt=og;else if(rg(ce))if(lg)wt=mb;else{wt=hb;var Ke=db}else de=ce.nodeName,!de||de.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?ae&&zi(ae.elementType)&&(wt=og):wt=pb;if(wt&&(wt=wt(t,ae))){sg(xe,wt,s,me);break e}Ke&&Ke(t,ce,ae),t==="focusout"&&ae&&ce.type==="number"&&ae.memoizedProps.value!=null&&Nn(ce,"number",ce.value)}switch(Ke=ae?Fr(ae):window,t){case"focusin":(rg(Ke)||Ke.contentEditable==="true")&&(As=Ke,Gf=ae,qo=null);break;case"focusout":qo=Gf=As=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,gg(xe,s,me);break;case"selectionchange":if(vb)break;case"keydown":case"keyup":gg(xe,s,me)}var dt;if(Bf)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Ts?ig(t,s)&&(St="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(St="onCompositionStart");St&&(eg&&s.locale!=="ko"&&(Ts||St!=="onCompositionStart"?St==="onCompositionEnd"&&Ts&&(dt=Zm()):(Qa=me,Nf="value"in Qa?Qa.value:Qa.textContent,Ts=!0)),Ke=ru(ae,St),0<Ke.length&&(St=new Qm(St,t,null,s,me),xe.push({event:St,listeners:Ke}),dt?St.data=dt:(dt=ag(s),dt!==null&&(St.data=dt)))),(dt=ob?lb(t,s):cb(t,s))&&(St=ru(ae,"onBeforeInput"),0<St.length&&(Ke=new Qm("onBeforeInput","beforeinput",null,s,me),xe.push({event:Ke,listeners:St}),Ke.data=dt)),eM(xe,t,ae,s,me)}Vv(xe,i)})}function vl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function ru(t,i){for(var s=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Io(t,s),u!=null&&l.unshift(vl(t,u,h)),u=Io(t,i),u!=null&&l.push(vl(t,u,h))),t.tag===3)return l;t=t.return}return[]}function aM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Xv(t,i,s,l,u){for(var h=i._reactName,S=[];s!==null&&s!==l;){var R=s,G=R.alternate,ae=R.stateNode;if(R=R.tag,G!==null&&G===l)break;R!==5&&R!==26&&R!==27||ae===null||(G=ae,u?(ae=Io(s,h),ae!=null&&S.unshift(vl(s,ae,G))):u||(ae=Io(s,h),ae!=null&&S.push(vl(s,ae,G)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var rM=/\r\n?/g,sM=/\u0000|\uFFFD/g;function Wv(t){return(typeof t=="string"?t:""+t).replace(rM,`
`).replace(sM,"")}function qv(t,i){return i=Wv(i),Wv(t)===i}function jt(t,i,s,l,u,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||En(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&En(t,""+l);break;case"className":tt(t,"class",l);break;case"tabIndex":tt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":tt(t,s,l);break;case"style":bs(t,l,h);break;case"data":if(i!=="object"){tt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=fc(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&jt(t,i,"name",u.name,u,null),jt(t,i,"formEncType",u.formEncType,u,null),jt(t,i,"formMethod",u.formMethod,u,null),jt(t,i,"formTarget",u.formTarget,u,null)):(jt(t,i,"encType",u.encType,u,null),jt(t,i,"method",u.method,u,null),jt(t,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=fc(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=_a);break;case"onScroll":l!=null&&xt("scroll",t);break;case"onScrollEnd":l!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=fc(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Ye(t,"popover",l);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ye(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=OS.get(s)||s,Ye(t,s,l))}}function hh(t,i,s,l,u,h){switch(s){case"style":bs(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?En(t,l):(typeof l=="number"||typeof l=="bigint")&&En(t,""+l);break;case"onScroll":l!=null&&xt("scroll",t);break;case"onScrollEnd":l!=null&&xt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=_a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fe.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),h=t[Dn]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,u),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,u);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Ye(t,s,l)}}}function zn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var l=!1,u=!1,h;for(h in s)if(s.hasOwnProperty(h)){var S=s[h];if(S!=null)switch(h){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:jt(t,i,h,S,s,null)}}u&&jt(t,i,"srcSet",s.srcSet,s,null),l&&jt(t,i,"src",s.src,s,null);return;case"input":xt("invalid",t);var R=h=S=u=null,G=null,ae=null;for(l in s)if(s.hasOwnProperty(l)){var me=s[l];if(me!=null)switch(l){case"name":u=me;break;case"type":S=me;break;case"checked":G=me;break;case"defaultChecked":ae=me;break;case"value":h=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,i));break;default:jt(t,i,l,me,s,null)}}va(t,h,R,G,ae,S,u,!1);return;case"select":xt("invalid",t),l=S=h=null;for(u in s)if(s.hasOwnProperty(u)&&(R=s[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":S=R;break;case"multiple":l=R;default:jt(t,i,u,R,s,null)}i=h,s=S,t.multiple=!!l,i!=null?Si(t,!!l,i,!1):s!=null&&Si(t,!!l,s,!0);return;case"textarea":xt("invalid",t),h=u=l=null;for(S in s)if(s.hasOwnProperty(S)&&(R=s[S],R!=null))switch(S){case"value":l=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:jt(t,i,S,R,s,null)}Ln(t,l,u,h);return;case"option":for(G in s)s.hasOwnProperty(G)&&(l=s[G],l!=null)&&(G==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":jt(t,i,G,l,s,null));return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(l=0;l<gl.length;l++)xt(gl[l],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in s)if(s.hasOwnProperty(ae)&&(l=s[ae],l!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:jt(t,i,ae,l,s,null)}return;default:if(zi(i)){for(me in s)s.hasOwnProperty(me)&&(l=s[me],l!==void 0&&hh(t,i,me,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&jt(t,i,R,l,s,null))}function oM(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,R=null,G=null,ae=null,me=null;for(de in s){var xe=s[de];if(s.hasOwnProperty(de)&&xe!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":G=xe;default:l.hasOwnProperty(de)||jt(t,i,de,null,l,xe)}}for(var ce in l){var de=l[ce];if(xe=s[ce],l.hasOwnProperty(ce)&&(de!=null||xe!=null))switch(ce){case"type":h=de;break;case"name":u=de;break;case"checked":ae=de;break;case"defaultChecked":me=de;break;case"value":S=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,i));break;default:de!==xe&&jt(t,i,ce,de,l,xe)}}Un(t,S,R,G,ae,me,h,u);return;case"select":de=S=R=ce=null;for(h in s)if(G=s[h],s.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":de=G;default:l.hasOwnProperty(h)||jt(t,i,h,null,l,G)}for(u in l)if(h=l[u],G=s[u],l.hasOwnProperty(u)&&(h!=null||G!=null))switch(u){case"value":ce=h;break;case"defaultValue":R=h;break;case"multiple":S=h;default:h!==G&&jt(t,i,u,h,l,G)}i=R,s=S,l=de,ce!=null?Si(t,!!s,ce,!1):!!l!=!!s&&(i!=null?Si(t,!!s,i,!0):Si(t,!!s,s?[]:"",!1));return;case"textarea":de=ce=null;for(R in s)if(u=s[R],s.hasOwnProperty(R)&&u!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:jt(t,i,R,null,l,u)}for(S in l)if(u=l[S],h=s[S],l.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":ce=u;break;case"defaultValue":de=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&jt(t,i,S,u,l,h)}Ht(t,ce,de);return;case"option":for(var qe in s)ce=s[qe],s.hasOwnProperty(qe)&&ce!=null&&!l.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:jt(t,i,qe,null,l,ce));for(G in l)ce=l[G],de=s[G],l.hasOwnProperty(G)&&ce!==de&&(ce!=null||de!=null)&&(G==="selected"?t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol":jt(t,i,G,ce,l,de));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in s)ce=s[it],s.hasOwnProperty(it)&&ce!=null&&!l.hasOwnProperty(it)&&jt(t,i,it,null,l,ce);for(ae in l)if(ce=l[ae],de=s[ae],l.hasOwnProperty(ae)&&ce!==de&&(ce!=null||de!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,i));break;default:jt(t,i,ae,ce,l,de)}return;default:if(zi(i)){for(var Yt in s)ce=s[Yt],s.hasOwnProperty(Yt)&&ce!==void 0&&!l.hasOwnProperty(Yt)&&hh(t,i,Yt,void 0,l,ce);for(me in l)ce=l[me],de=s[me],!l.hasOwnProperty(me)||ce===de||ce===void 0&&de===void 0||hh(t,i,me,ce,l,de);return}}for(var $ in s)ce=s[$],s.hasOwnProperty($)&&ce!=null&&!l.hasOwnProperty($)&&jt(t,i,$,null,l,ce);for(xe in l)ce=l[xe],de=s[xe],!l.hasOwnProperty(xe)||ce===de||ce==null&&de==null||jt(t,i,xe,ce,l,de)}function jv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var u=s[l],h=u.transferSize,S=u.initiatorType,R=u.duration;if(h&&R&&jv(S)){for(S=0,R=u.responseEnd,l+=1;l<s.length;l++){var G=s[l],ae=G.startTime;if(ae>R)break;var me=G.transferSize,xe=G.initiatorType;me&&jv(xe)&&(G=G.responseEnd,S+=me*(G<R?1:(R-ae)/(G-ae)))}if(--l,i+=8*(h+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ph=null,mh=null;function su(t){return t.nodeType===9?t:t.ownerDocument}function Yv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function gh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var vh=null;function cM(){var t=window.event;return t&&t.type==="popstate"?t===vh?!1:(vh=t,!0):(vh=null,!1)}var Kv=typeof setTimeout=="function"?setTimeout:void 0,uM=typeof clearTimeout=="function"?clearTimeout:void 0,$v=typeof Promise=="function"?Promise:void 0,fM=typeof queueMicrotask=="function"?queueMicrotask:typeof $v<"u"?function(t){return $v.resolve(null).then(t).catch(dM)}:Kv;function dM(t){setTimeout(function(){throw t})}function mr(t){return t==="head"}function Qv(t,i){var s=i,l=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(u),Js(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")_l(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,_l(s);for(var h=s.firstChild;h;){var S=h.nextSibling,R=h.nodeName;h[Pr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=S}}else s==="body"&&_l(t.ownerDocument.body);s=u}while(s);Js(i)}function Jv(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function _h(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":_h(s),Bo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function hM(t,i,s,l){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Pr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Ri(t.nextSibling),t===null)break}return null}function pM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ri(t.nextSibling),t===null))return null;return t}function e_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ri(t.nextSibling),t===null))return null;return t}function xh(t){return t.data==="$?"||t.data==="$~"}function yh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function mM(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ri(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Sh=null;function t_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ri(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function n_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function i_(t,i,s){switch(i=su(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function _l(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Bo(t)}var wi=new Map,a_=new Set;function ou(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Oa=V.d;V.d={f:gM,r:vM,D:_M,C:xM,L:yM,m:SM,X:MM,S:bM,M:EM};function gM(){var t=Oa.f(),i=Qc();return t||i}function vM(t){var i=Ka(t);i!==null&&i.tag===5&&i.type==="form"?S0(i):Oa.r(t)}var Ks=typeof document>"u"?null:document;function r_(t,i,s){var l=Ks;if(l&&typeof i=="string"&&i){var u=ot(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),a_.has(u)||(a_.add(u),t={rel:t,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),zn(i,"link",t),w(i),l.head.appendChild(i)))}}function _M(t){Oa.D(t),r_("dns-prefetch",t,null)}function xM(t,i){Oa.C(t,i),r_("preconnect",t,i)}function yM(t,i,s){Oa.L(t,i,s);var l=Ks;if(l&&t&&i){var u='link[rel="preload"][as="'+ot(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+ot(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+ot(s.imageSizes)+'"]')):u+='[href="'+ot(t)+'"]';var h=u;switch(i){case"style":h=$s(t);break;case"script":h=Qs(t)}wi.has(h)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),wi.set(h,t),l.querySelector(u)!==null||i==="style"&&l.querySelector(xl(h))||i==="script"&&l.querySelector(yl(h))||(i=l.createElement("link"),zn(i,"link",t),w(i),l.head.appendChild(i)))}}function SM(t,i){Oa.m(t,i);var s=Ks;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+ot(l)+'"][href="'+ot(t)+'"]',h=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Qs(t)}if(!wi.has(h)&&(t=g({rel:"modulepreload",href:t},i),wi.set(h,t),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(yl(h)))return}l=s.createElement("link"),zn(l,"link",t),w(l),s.head.appendChild(l)}}}function bM(t,i,s){Oa.S(t,i,s);var l=Ks;if(l&&t){var u=$a(l).hoistableStyles,h=$s(t);i=i||"default";var S=u.get(h);if(!S){var R={loading:0,preload:null};if(S=l.querySelector(xl(h)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=wi.get(h))&&bh(t,s);var G=S=l.createElement("link");w(G),zn(G,"link",t),G._p=new Promise(function(ae,me){G.onload=ae,G.onerror=me}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,lu(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(h,S)}}}function MM(t,i){Oa.X(t,i);var s=Ks;if(s&&t){var l=$a(s).hoistableScripts,u=Qs(t),h=l.get(u);h||(h=s.querySelector(yl(u)),h||(t=g({src:t,async:!0},i),(i=wi.get(u))&&Mh(t,i),h=s.createElement("script"),w(h),zn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(u,h))}}function EM(t,i){Oa.M(t,i);var s=Ks;if(s&&t){var l=$a(s).hoistableScripts,u=Qs(t),h=l.get(u);h||(h=s.querySelector(yl(u)),h||(t=g({src:t,async:!0,type:"module"},i),(i=wi.get(u))&&Mh(t,i),h=s.createElement("script"),w(h),zn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(u,h))}}function s_(t,i,s,l){var u=(u=re.current)?ou(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=$s(s.href),s=$a(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=$s(s.href);var h=$a(u).hoistableStyles,S=h.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=u.querySelector(xl(t)))&&!h._p&&(S.instance=h,S.state.loading=5),wi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},wi.set(t,s),h||TM(u,t,s,S.state))),i&&l===null)throw Error(r(528,""));return S}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Qs(s),s=$a(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $s(t){return'href="'+ot(t)+'"'}function xl(t){return'link[rel="stylesheet"]['+t+"]"}function o_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function TM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),zn(i,"link",s),w(i),t.head.appendChild(i))}function Qs(t){return'[src="'+ot(t)+'"]'}function yl(t){return"script[async]"+t}function l_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+ot(s.href)+'"]');if(l)return i.instance=l,w(l),l;var u=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),w(l),zn(l,"style",u),lu(l,s.precedence,t),i.instance=l;case"stylesheet":u=$s(s.href);var h=t.querySelector(xl(u));if(h)return i.state.loading|=4,i.instance=h,w(h),h;l=o_(s),(u=wi.get(u))&&bh(l,u),h=(t.ownerDocument||t).createElement("link"),w(h);var S=h;return S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),zn(h,"link",l),i.state.loading|=4,lu(h,s.precedence,t),i.instance=h;case"script":return h=Qs(s.src),(u=t.querySelector(yl(h)))?(i.instance=u,w(u),u):(l=s,(u=wi.get(h))&&(l=g({},s),Mh(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),w(u),zn(u,"link",l),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,lu(l,s.precedence,t));return i.instance}function lu(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,h=u,S=0;S<l.length;S++){var R=l[S];if(R.dataset.precedence===i)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function bh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Mh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var cu=null;function c_(t,i,s){if(cu===null){var l=new Map,u=cu=new Map;u.set(s,l)}else u=cu,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var h=s[u];if(!(h[Pr]||h[gn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(i)||"";S=t+S;var R=l.get(S);R?R.push(h):l.set(S,[h])}}return l}function u_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function AM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function f_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function CM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=$s(l.href),h=i.querySelector(xl(u));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=uu.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,w(h);return}h=i.ownerDocument||i,l=o_(l),(u=wi.get(u))&&bh(l,u),h=h.createElement("link"),w(h);var S=h;S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),zn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=uu.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Eh=0;function RM(t,i){return t.stylesheets&&t.count===0&&du(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&du(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&Eh===0&&(Eh=62500*lM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&du(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Eh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)du(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var fu=null;function du(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,fu=new Map,i.forEach(wM,t),fu=null,uu.call(t))}function wM(t,i){if(!(i.state.loading&4)){var s=fu.get(t);if(s)var l=s.get(null);else{s=new Map,fu.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}u=i.instance,S=u.getAttribute("data-precedence"),h=s.get(S)||l,h===l&&s.set(null,u),s.set(S,u),this.count++,l=uu.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var Sl={$$typeof:B,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function DM(t,i,s,l,u,h,S,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function d_(t,i,s,l,u,h,S,R,G,ae,me,xe){return t=new DM(t,i,s,S,G,ae,me,xe,R),i=1,h===!0&&(i|=24),h=li(3,null,null,i),t.current=h,h.stateNode=t,i=id(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},od(h),t}function h_(t){return t?(t=ws,t):ws}function p_(t,i,s,l,u,h){u=h_(u),l.context===null?l.context=u:l.pendingContext=u,l=ar(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=rr(t,l,i),s!==null&&(ni(s,t,i),Jo(s,t,i))}function m_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Th(t,i){m_(t,i),(t=t.alternate)&&m_(t,i)}function g_(t){if(t.tag===13||t.tag===31){var i=Hr(t,67108864);i!==null&&ni(i,t,67108864),Th(t,67108864)}}function v_(t){if(t.tag===13||t.tag===31){var i=hi();i=Oo(i);var s=Hr(t,i);s!==null&&ni(s,t,i),Th(t,i)}}var hu=!0;function UM(t,i,s,l){var u=F.T;F.T=null;var h=V.p;try{V.p=2,Ah(t,i,s,l)}finally{V.p=h,F.T=u}}function NM(t,i,s,l){var u=F.T;F.T=null;var h=V.p;try{V.p=8,Ah(t,i,s,l)}finally{V.p=h,F.T=u}}function Ah(t,i,s,l){if(hu){var u=Ch(l);if(u===null)dh(t,i,l,pu,s),x_(t,l);else if(OM(u,t,i,s,l))l.stopPropagation();else if(x_(t,l),i&4&&-1<LM.indexOf(t)){for(;u!==null;){var h=Ka(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Me(h.pendingLanes);if(S!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var G=1<<31-Be(S);R.entanglements[1]|=G,S&=~G}ia(h),(Ot&6)===0&&(Kc=_()+500,ml(0))}}break;case 31:case 13:R=Hr(h,2),R!==null&&ni(R,h,2),Qc(),Th(h,2)}if(h=Ch(l),h===null&&dh(t,i,l,pu,s),h===u)break;u=h}u!==null&&l.stopPropagation()}else dh(t,i,l,null,s)}}function Ch(t){return t=wf(t),Rh(t)}var pu=null;function Rh(t){if(pu=null,t=Za(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return pu=t,null}function __(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(H()){case J:return 2;case he:return 8;case se:case Fe:return 32;case we:return 268435456;default:return 32}default:return 32}}var wh=!1,gr=null,vr=null,_r=null,bl=new Map,Ml=new Map,xr=[],LM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x_(t,i){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":bl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(i.pointerId)}}function El(t,i,s,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=Ka(i),i!==null&&g_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function OM(t,i,s,l,u){switch(i){case"focusin":return gr=El(gr,t,i,s,l,u),!0;case"dragenter":return vr=El(vr,t,i,s,l,u),!0;case"mouseover":return _r=El(_r,t,i,s,l,u),!0;case"pointerover":var h=u.pointerId;return bl.set(h,El(bl.get(h)||null,t,i,s,l,u)),!0;case"gotpointercapture":return h=u.pointerId,Ml.set(h,El(Ml.get(h)||null,t,i,s,l,u)),!0}return!1}function y_(t){var i=Za(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,Ji(t.priority,function(){v_(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,Ji(t.priority,function(){v_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Ch(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Rf=l,s.target.dispatchEvent(l),Rf=null}else return i=Ka(s),i!==null&&g_(i),t.blockedOn=s,!1;i.shift()}return!0}function S_(t,i,s){mu(t)&&s.delete(i)}function PM(){wh=!1,gr!==null&&mu(gr)&&(gr=null),vr!==null&&mu(vr)&&(vr=null),_r!==null&&mu(_r)&&(_r=null),bl.forEach(S_),Ml.forEach(S_)}function gu(t,i){t.blockedOn===i&&(t.blockedOn=null,wh||(wh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,PM)))}var vu=null;function b_(t){vu!==t&&(vu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){vu===t&&(vu=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],u=t[i+2];if(typeof l!="function"){if(Rh(l||s)===null)continue;break}var h=Ka(s);h!==null&&(t.splice(i,3),i-=3,Cd(h,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function Js(t){function i(G){return gu(G,t)}gr!==null&&gu(gr,t),vr!==null&&gu(vr,t),_r!==null&&gu(_r,t),bl.forEach(i),Ml.forEach(i);for(var s=0;s<xr.length;s++){var l=xr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<xr.length&&(s=xr[0],s.blockedOn===null);)y_(s),s.blockedOn===null&&xr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],h=s[l+1],S=u[Dn]||null;if(typeof h=="function")S||b_(s);else if(S){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[Dn]||null)R=S.formAction;else if(Rh(u)!==null)continue}else R=S.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),b_(s)}}}function M_(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function Dh(t){this._internalRoot=t}_u.prototype.render=Dh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=hi();p_(s,l,t,i,null,null)},_u.prototype.unmount=Dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;p_(t.current,2,null,t,null,null),Qc(),i[Ii]=null}};function _u(t){this._internalRoot=t}_u.prototype.unstable_scheduleHydration=function(t){if(t){var i=Po();t={blockedOn:null,target:t,priority:i};for(var s=0;s<xr.length&&i!==0&&i<xr[s].priority;s++);xr.splice(s,0,t),s===0&&y_(t)}};var E_=e.version;if(E_!=="19.2.3")throw Error(r(527,E_,"19.2.3"));V.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(i),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var FM={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{Ee=xu.inject(FM),Te=xu}catch{}}return Al.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",u=U0,h=N0,S=L0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=d_(t,1,!1,null,null,s,l,null,u,h,S,M_),t[Ii]=i.current,fh(t),new Dh(i)},Al.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,u="",h=U0,S=N0,R=L0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=d_(t,1,!0,i,s??null,l,u,G,h,S,R,M_),i.context=h_(null),s=i.current,l=hi(),l=Oo(l),u=ar(l),u.callback=null,rr(s,u,l),s=l,i.current.lanes=s,kn(i,s),ia(i),t[Ii]=i.current,fh(t),new _u(i)},Al.version="19.2.3",Al}var P_;function ZM(){if(P_)return Lh.exports;P_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Lh.exports=YM(),Lh.exports}var KM=ZM();function Em(){return Z.jsxs(Z.Fragment,{children:[Z.jsxs("div",{children:["  ",Z.jsx("a",{href:"https://www.linkedin.com/in/samarth-khandelwal-bba65228a",target:"_blank",rel:"noopener noreferrer",children:Z.jsx("img",{className:"github",src:"linkedin.svg",alt:""})})]}),Z.jsx("div",{children:Z.jsx("a",{href:"https://leetcode.com/u/re9l7O1TpJ/",target:"_blank",rel:"noopener noreferrer",children:Z.jsx("img",{className:"github",src:"leetcode.svg",alt:""})})}),Z.jsx("div",{children:Z.jsx("a",{href:"https://github.com/samarth96k",target:"_blank",rel:"noopener noreferrer",children:Z.jsx("img",{className:"github",src:"github.svg",alt:""})})}),Z.jsx("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=samarthkhandelwal880@gmail.com&body=Hey%20Samarth",target:"_blank",rel:"noopener noreferrer",children:Z.jsx("img",{className:"github",src:"mail.svg",alt:"Email Samarth"})}),Z.jsx("div",{children:Z.jsx("a",{href:"https://www.instagram.com/samarth9_6/",target:"_blank",rel:"noopener noreferrer",children:Z.jsx("img",{className:"github",src:"instagram.svg",alt:""})})}),Z.jsx("div",{children:Z.jsx("a",{href:"https://wa.me/919773959744?text=Hey%20Samarth",target:"_blank",rel:"noopener noreferrer",children:Z.jsx("img",{className:"github",src:"whatsapp.svg",alt:"WhatsApp Samarth"})})}),Z.jsxs("a",{href:"/Resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"resume-button-top-bar",style:{fontFamily:"Aquire-Bold"},children:["Resume",Z.jsx("img",{className:"resume-icon",src:"Download.png",alt:"Download Resume"})]})]})}function $M(){return Z.jsxs("div",{className:"opening-wrapper",children:[Z.jsxs("div",{className:"opening-top",children:[Z.jsx("div",{className:"mid-topbar",children:Z.jsx("p",{className:"topbar-name cedarville-cursive-regular",children:"Samarth Khandelwal"})}),Z.jsx("div",{className:"right-topbar",children:Z.jsx(Em,{})})]}),Z.jsxs("div",{className:"opening-right fade-in",children:[Z.jsxs("h1",{className:"typing-text",children:[Z.jsx("span",{className:"line line1 Agaleoz",style:{fontFamily:"Aquire"},children:"Hi,"}),Z.jsx("br",{}),Z.jsx("span",{className:"line line2 Satoshi-Medium",style:{fontFamily:"Aquire-Bold"},children:"I'm Samarth Khandelwal."})]}),Z.jsx("h2",{className:"typing-subtext ",style:{fontFamily:"Aquire"},children:"Full Stack Developer | Software Engineer"}),Z.jsx("button",{style:{fontFamily:"Aquire-Light"},className:"view-work-button",onClick:()=>{const a=document.querySelector(".projects-container");a&&a.scrollIntoView({behavior:"smooth"})},children:"View My Work"})]}),Z.jsx("div",{className:"opening-bottom fade-in-delay",onClick:()=>window.scrollTo({top:window.innerHeight,behavior:"smooth"}),children:"⌄"})]})}const QM="About Me",JM="Hello there! I’m Samarth, a third-year B.Tech student at VIT, pursuing Computer Science and Engineering. I enjoy exploring new technologies, building projects, and learning by doing. I love collaborating with new people and working on ideas that challenge me and help me grow. This portfolio is a small showcase of my journey, skills, and the projects I’ve worked on so far. I like to read books of different genres and explore about space! How facinating it is to watch to a universe which is evolving forever and is limitless just like human potentiel! Hope you enjoy exploring my work!";function eE(){const a=Je.useRef(null);return Je.useEffect(()=>{const e=a.current;if(!e)return;const n=new IntersectionObserver(([r])=>{r.isIntersecting&&(e.classList.add("about-visible"),n.unobserve(e))},{threshold:.2});return n.observe(e),()=>n.disconnect()},[]),Z.jsxs("div",{ref:a,className:"about-div about-animate",children:[Z.jsx("div",{className:"about-left about-slide-left",children:Z.jsx("div",{className:"about-pic",children:Z.jsx("img",{src:"IMG_1775.jpeg",alt:"",className:"about-pic-tag"})})}),Z.jsxs("div",{className:"about-right about-slide-right",children:[Z.jsx("div",{className:"about-title",style:{fontFamily:"Aquire"},children:Z.jsx("h1",{children:QM})}),Z.jsx("div",{className:"about-desc inknut-antiqua-regular",children:JM})]})]})}const tE=[{skill:"React",link:"tech_stack_section/react.svg",level:"Strong"},{skill:"JavaScript",link:"tech_stack_section/icons8-javascript.svg",level:"Strong"},{skill:"Node.js",link:"tech_stack_section/node-js.svg",level:"Strong"},{skill:"Express.js",link:"tech_stack_section/icons8-express-js-48.png",level:"Strong"},{skill:"PostgreSQL",link:"tech_stack_section/postgresql.svg",level:"Strong"},{skill:"MySQL",link:"tech_stack_section/mysql-logo-svgrepo-com.svg",level:"Strong"},{skill:"Git",link:"tech_stack_section/git-icon-logo-svgrepo-com.svg",level:"Proficient"},{skill:"GitHub",link:"tech_stack_section/github.svg",level:"Proficient"},{skill:"Bootstrap",link:"tech_stack_section/bootstrap.png",level:"Proficient"},{skill:"Java",link:"tech_stack_section/java.svg",level:"Proficient"},{skill:"Python",link:"tech_stack_section/python.png",level:"Proficient"},{skill:"C++",link:"tech_stack_section/c.svg",level:"Strong"},{skill:"HTML",link:"tech_stack_section/html.svg",level:"Strong"},{skill:"VS Code",link:"tech_stack_section/vs-code-svgrepo-com.svg",level:"Strong"},{skill:"AWS",link:"tech_stack_section/aws.svg",level:"Familiar"},{skill:"Postman",link:"tech_stack_section/postman.svg",level:"Familiar"},{skill:"Replit",link:"tech_stack_section/replit.svg",level:"Familiar"},{skill:"Vercel",link:"tech_stack_section/vercel-icon-svgrepo-com.svg",level:"Familiar"}];function nE(){const a=Je.useRef([]);return Je.useEffect(()=>{const e=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&r.target.classList.add("skill-show")})},{threshold:.25});return a.current.forEach(n=>{n&&e.observe(n)}),()=>e.disconnect()},[]),Z.jsxs("section",{className:"skills",children:[Z.jsx("h1",{className:"skills-title",style:{fontFamily:"Aquire"},children:"My Skills"}),Z.jsx("p",{className:"skills-subtitle inknut-antiqua-semibold",children:"Skill levels are based on real project usage, not tutorials."}),Z.jsx("div",{className:"skills-grid",children:tE.map((e,n)=>Z.jsxs("div",{ref:r=>a.current[n]=r,className:"skill-card skill-hidden slide-top",children:[Z.jsx("img",{src:e.link,alt:e.skill}),Z.jsx("h3",{className:"inknut-antiqua-bold",children:e.skill}),Z.jsx("span",{className:`skill-level ${e.level.toLowerCase()}`,children:e.level})]},n))})]})}function cy(a){var e,n,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var o=a.length;for(e=0;e<o;e++)a[e]&&(n=cy(a[e]))&&(r&&(r+=" "),r+=n)}else for(n in a)a[n]&&(r&&(r+=" "),r+=n);return r}function ga(){for(var a,e,n=0,r="",o=arguments.length;n<o;n++)(a=arguments[n])&&(e=cy(a))&&(r&&(r+=" "),r+=e);return r}function Nr(a,e,n=void 0){const r={};for(const o in a){const c=a[o];let f="",d=!0;for(let m=0;m<c.length;m+=1){const p=c[m];p&&(f+=(d===!0?"":" ")+e(p),d=!1,n&&n[p]&&(f+=" "+n[p]))}r[o]=f}return r}function ps(a,...e){const n=new URL(`https://mui.com/production-error/?code=${a}`);return e.forEach(r=>n.searchParams.append("args[]",r)),`Minified MUI error #${a}; visit ${n} for the full message.`}const Tm="$$material";function Sp(){return Sp=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a},Sp.apply(null,arguments)}function iE(a){if(a.sheet)return a.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===a)return document.styleSheets[e]}function aE(a){var e=document.createElement("style");return e.setAttribute("data-emotion",a.key),a.nonce!==void 0&&e.setAttribute("nonce",a.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var rE=(function(){function a(n){var r=this;this._insertTag=function(o){var c;r.tags.length===0?r.insertionPoint?c=r.insertionPoint.nextSibling:r.prepend?c=r.container.firstChild:c=r.before:c=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,c),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=a.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(aE(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var c=iE(o);try{c.insertRule(r,c.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},a})(),jn="-ms-",tf="-moz-",Pt="-webkit-",uy="comm",Am="rule",Cm="decl",sE="@import",fy="@keyframes",oE="@layer",lE=Math.abs,ff=String.fromCharCode,cE=Object.assign;function uE(a,e){return Hn(a,0)^45?(((e<<2^Hn(a,0))<<2^Hn(a,1))<<2^Hn(a,2))<<2^Hn(a,3):0}function dy(a){return a.trim()}function fE(a,e){return(a=e.exec(a))?a[0]:a}function Ft(a,e,n){return a.replace(e,n)}function bp(a,e){return a.indexOf(e)}function Hn(a,e){return a.charCodeAt(e)|0}function Xl(a,e,n){return a.slice(e,n)}function sa(a){return a.length}function Rm(a){return a.length}function yu(a,e){return e.push(a),a}function dE(a,e){return a.map(e).join("")}var df=1,Eo=1,hy=0,si=0,bn=0,Do="";function hf(a,e,n,r,o,c,f){return{value:a,root:e,parent:n,type:r,props:o,children:c,line:df,column:Eo,length:f,return:""}}function Cl(a,e){return cE(hf("",null,null,"",null,null,0),a,{length:-a.length},e)}function hE(){return bn}function pE(){return bn=si>0?Hn(Do,--si):0,Eo--,bn===10&&(Eo=1,df--),bn}function _i(){return bn=si<hy?Hn(Do,si++):0,Eo++,bn===10&&(Eo=1,df++),bn}function fa(){return Hn(Do,si)}function Wu(){return si}function Jl(a,e){return Xl(Do,a,e)}function Wl(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function py(a){return df=Eo=1,hy=sa(Do=a),si=0,[]}function my(a){return Do="",a}function qu(a){return dy(Jl(si-1,Mp(a===91?a+2:a===40?a+1:a)))}function mE(a){for(;(bn=fa())&&bn<33;)_i();return Wl(a)>2||Wl(bn)>3?"":" "}function gE(a,e){for(;--e&&_i()&&!(bn<48||bn>102||bn>57&&bn<65||bn>70&&bn<97););return Jl(a,Wu()+(e<6&&fa()==32&&_i()==32))}function Mp(a){for(;_i();)switch(bn){case a:return si;case 34:case 39:a!==34&&a!==39&&Mp(bn);break;case 40:a===41&&Mp(a);break;case 92:_i();break}return si}function vE(a,e){for(;_i()&&a+bn!==57;)if(a+bn===84&&fa()===47)break;return"/*"+Jl(e,si-1)+"*"+ff(a===47?a:_i())}function _E(a){for(;!Wl(fa());)_i();return Jl(a,si)}function xE(a){return my(ju("",null,null,null,[""],a=py(a),0,[0],a))}function ju(a,e,n,r,o,c,f,d,m){for(var p=0,v=0,g=f,x=0,M=0,T=0,E=1,b=1,y=1,P=0,B="",U=o,z=c,L=r,O=B;b;)switch(T=P,P=_i()){case 40:if(T!=108&&Hn(O,g-1)==58){bp(O+=Ft(qu(P),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:O+=qu(P);break;case 9:case 10:case 13:case 32:O+=mE(T);break;case 92:O+=gE(Wu()-1,7);continue;case 47:switch(fa()){case 42:case 47:yu(yE(vE(_i(),Wu()),e,n),m);break;default:O+="/"}break;case 123*E:d[p++]=sa(O)*y;case 125*E:case 59:case 0:switch(P){case 0:case 125:b=0;case 59+v:y==-1&&(O=Ft(O,/\f/g,"")),M>0&&sa(O)-g&&yu(M>32?B_(O+";",r,n,g-1):B_(Ft(O," ","")+";",r,n,g-2),m);break;case 59:O+=";";default:if(yu(L=F_(O,e,n,p,v,o,d,B,U=[],z=[],g),c),P===123)if(v===0)ju(O,e,L,L,U,c,g,d,z);else switch(x===99&&Hn(O,3)===110?100:x){case 100:case 108:case 109:case 115:ju(a,L,L,r&&yu(F_(a,L,L,0,0,o,d,B,o,U=[],g),z),o,z,g,d,r?U:z);break;default:ju(O,L,L,L,[""],z,0,d,z)}}p=v=M=0,E=y=1,B=O="",g=f;break;case 58:g=1+sa(O),M=T;default:if(E<1){if(P==123)--E;else if(P==125&&E++==0&&pE()==125)continue}switch(O+=ff(P),P*E){case 38:y=v>0?1:(O+="\f",-1);break;case 44:d[p++]=(sa(O)-1)*y,y=1;break;case 64:fa()===45&&(O+=qu(_i())),x=fa(),v=g=sa(B=O+=_E(Wu())),P++;break;case 45:T===45&&sa(O)==2&&(E=0)}}return c}function F_(a,e,n,r,o,c,f,d,m,p,v){for(var g=o-1,x=o===0?c:[""],M=Rm(x),T=0,E=0,b=0;T<r;++T)for(var y=0,P=Xl(a,g+1,g=lE(E=f[T])),B=a;y<M;++y)(B=dy(E>0?x[y]+" "+P:Ft(P,/&\f/g,x[y])))&&(m[b++]=B);return hf(a,e,n,o===0?Am:d,m,p,v)}function yE(a,e,n){return hf(a,e,n,uy,ff(hE()),Xl(a,2,-2),0)}function B_(a,e,n,r){return hf(a,e,n,Cm,Xl(a,0,r),Xl(a,r+1,-1),r)}function yo(a,e){for(var n="",r=Rm(a),o=0;o<r;o++)n+=e(a[o],o,a,e)||"";return n}function SE(a,e,n,r){switch(a.type){case oE:if(a.children.length)break;case sE:case Cm:return a.return=a.return||a.value;case uy:return"";case fy:return a.return=a.value+"{"+yo(a.children,r)+"}";case Am:a.value=a.props.join(",")}return sa(n=yo(a.children,r))?a.return=a.value+"{"+n+"}":""}function bE(a){var e=Rm(a);return function(n,r,o,c){for(var f="",d=0;d<e;d++)f+=a[d](n,r,o,c)||"";return f}}function ME(a){return function(e){e.root||(e=e.return)&&a(e)}}function gy(a){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=a(n)),e[n]}}var EE=function(e,n,r){for(var o=0,c=0;o=c,c=fa(),o===38&&c===12&&(n[r]=1),!Wl(c);)_i();return Jl(e,si)},TE=function(e,n){var r=-1,o=44;do switch(Wl(o)){case 0:o===38&&fa()===12&&(n[r]=1),e[r]+=EE(si-1,n,r);break;case 2:e[r]+=qu(o);break;case 4:if(o===44){e[++r]=fa()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=ff(o)}while(o=_i());return e},AE=function(e,n){return my(TE(py(e),n))},I_=new WeakMap,CE=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,o=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!I_.get(r))&&!o){I_.set(e,!0);for(var c=[],f=AE(n,c),d=r.props,m=0,p=0;m<f.length;m++)for(var v=0;v<d.length;v++,p++)e.props[p]=c[m]?f[m].replace(/&\f/g,d[v]):d[v]+" "+f[m]}}},RE=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function vy(a,e){switch(uE(a,e)){case 5103:return Pt+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pt+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Pt+a+tf+a+jn+a+a;case 6828:case 4268:return Pt+a+jn+a+a;case 6165:return Pt+a+jn+"flex-"+a+a;case 5187:return Pt+a+Ft(a,/(\w+).+(:[^]+)/,Pt+"box-$1$2"+jn+"flex-$1$2")+a;case 5443:return Pt+a+jn+"flex-item-"+Ft(a,/flex-|-self/,"")+a;case 4675:return Pt+a+jn+"flex-line-pack"+Ft(a,/align-content|flex-|-self/,"")+a;case 5548:return Pt+a+jn+Ft(a,"shrink","negative")+a;case 5292:return Pt+a+jn+Ft(a,"basis","preferred-size")+a;case 6060:return Pt+"box-"+Ft(a,"-grow","")+Pt+a+jn+Ft(a,"grow","positive")+a;case 4554:return Pt+Ft(a,/([^-])(transform)/g,"$1"+Pt+"$2")+a;case 6187:return Ft(Ft(Ft(a,/(zoom-|grab)/,Pt+"$1"),/(image-set)/,Pt+"$1"),a,"")+a;case 5495:case 3959:return Ft(a,/(image-set\([^]*)/,Pt+"$1$`$1");case 4968:return Ft(Ft(a,/(.+:)(flex-)?(.*)/,Pt+"box-pack:$3"+jn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pt+a+a;case 4095:case 3583:case 4068:case 2532:return Ft(a,/(.+)-inline(.+)/,Pt+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sa(a)-1-e>6)switch(Hn(a,e+1)){case 109:if(Hn(a,e+4)!==45)break;case 102:return Ft(a,/(.+:)(.+)-([^]+)/,"$1"+Pt+"$2-$3$1"+tf+(Hn(a,e+3)==108?"$3":"$2-$3"))+a;case 115:return~bp(a,"stretch")?vy(Ft(a,"stretch","fill-available"),e)+a:a}break;case 4949:if(Hn(a,e+1)!==115)break;case 6444:switch(Hn(a,sa(a)-3-(~bp(a,"!important")&&10))){case 107:return Ft(a,":",":"+Pt)+a;case 101:return Ft(a,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Pt+(Hn(a,14)===45?"inline-":"")+"box$3$1"+Pt+"$2$3$1"+jn+"$2box$3")+a}break;case 5936:switch(Hn(a,e+11)){case 114:return Pt+a+jn+Ft(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Pt+a+jn+Ft(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Pt+a+jn+Ft(a,/[svh]\w+-[tblr]{2}/,"lr")+a}return Pt+a+jn+a+a}return a}var wE=function(e,n,r,o){if(e.length>-1&&!e.return)switch(e.type){case Cm:e.return=vy(e.value,e.length);break;case fy:return yo([Cl(e,{value:Ft(e.value,"@","@"+Pt)})],o);case Am:if(e.length)return dE(e.props,function(c){switch(fE(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return yo([Cl(e,{props:[Ft(c,/:(read-\w+)/,":"+tf+"$1")]})],o);case"::placeholder":return yo([Cl(e,{props:[Ft(c,/:(plac\w+)/,":"+Pt+"input-$1")]}),Cl(e,{props:[Ft(c,/:(plac\w+)/,":"+tf+"$1")]}),Cl(e,{props:[Ft(c,/:(plac\w+)/,jn+"input-$1")]})],o)}return""})}},DE=[wE],UE=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(E){var b=E.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(E),E.setAttribute("data-s",""))})}var o=e.stylisPlugins||DE,c={},f,d=[];f=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(E){for(var b=E.getAttribute("data-emotion").split(" "),y=1;y<b.length;y++)c[b[y]]=!0;d.push(E)});var m,p=[CE,RE];{var v,g=[SE,ME(function(E){v.insert(E)})],x=bE(p.concat(o,g)),M=function(b){return yo(xE(b),x)};m=function(b,y,P,B){v=P,M(b?b+"{"+y.styles+"}":y.styles),B&&(T.inserted[y.name]=!0)}}var T={key:n,sheet:new rE({key:n,container:f,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:c,registered:{},insert:m};return T.sheet.hydrate(d),T},NE=!0;function LE(a,e,n){var r="";return n.split(" ").forEach(function(o){a[o]!==void 0?e.push(a[o]+";"):o&&(r+=o+" ")}),r}var _y=function(e,n,r){var o=e.key+"-"+n.name;(r===!1||NE===!1)&&e.registered[o]===void 0&&(e.registered[o]=n.styles)},OE=function(e,n,r){_y(e,n,r);var o=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var c=n;do e.insert(n===c?"."+o:"",c,e.sheet,!0),c=c.next;while(c!==void 0)}};function PE(a){for(var e=0,n,r=0,o=a.length;o>=4;++r,o-=4)n=a.charCodeAt(r)&255|(a.charCodeAt(++r)&255)<<8|(a.charCodeAt(++r)&255)<<16|(a.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(a.charCodeAt(r+2)&255)<<16;case 2:e^=(a.charCodeAt(r+1)&255)<<8;case 1:e^=a.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var FE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},BE=/[A-Z]|^ms/g,IE=/_EMO_([^_]+?)_([^]*?)_EMO_/g,xy=function(e){return e.charCodeAt(1)===45},z_=function(e){return e!=null&&typeof e!="boolean"},Bh=gy(function(a){return xy(a)?a:a.replace(BE,"-$&").toLowerCase()}),H_=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(IE,function(r,o,c){return oa={name:o,styles:c,next:oa},o})}return FE[e]!==1&&!xy(e)&&typeof n=="number"&&n!==0?n+"px":n};function ql(a,e,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return oa={name:o.name,styles:o.styles,next:oa},o.name;var c=n;if(c.styles!==void 0){var f=c.next;if(f!==void 0)for(;f!==void 0;)oa={name:f.name,styles:f.styles,next:oa},f=f.next;var d=c.styles+";";return d}return zE(a,e,n)}case"function":{if(a!==void 0){var m=oa,p=n(a);return oa=m,ql(a,e,p)}break}}var v=n;if(e==null)return v;var g=e[v];return g!==void 0?g:v}function zE(a,e,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=ql(a,e,n[o])+";";else for(var c in n){var f=n[c];if(typeof f!="object"){var d=f;e!=null&&e[d]!==void 0?r+=c+"{"+e[d]+"}":z_(d)&&(r+=Bh(c)+":"+H_(c,d)+";")}else if(Array.isArray(f)&&typeof f[0]=="string"&&(e==null||e[f[0]]===void 0))for(var m=0;m<f.length;m++)z_(f[m])&&(r+=Bh(c)+":"+H_(c,f[m])+";");else{var p=ql(a,e,f);switch(c){case"animation":case"animationName":{r+=Bh(c)+":"+p+";";break}default:r+=c+"{"+p+"}"}}}return r}var G_=/label:\s*([^\s;{]+)\s*(;|$)/g,oa;function yy(a,e,n){if(a.length===1&&typeof a[0]=="object"&&a[0]!==null&&a[0].styles!==void 0)return a[0];var r=!0,o="";oa=void 0;var c=a[0];if(c==null||c.raw===void 0)r=!1,o+=ql(n,e,c);else{var f=c;o+=f[0]}for(var d=1;d<a.length;d++)if(o+=ql(n,e,a[d]),r){var m=c;o+=m[d]}G_.lastIndex=0;for(var p="",v;(v=G_.exec(o))!==null;)p+="-"+v[1];var g=PE(o)+p;return{name:g,styles:o,next:oa}}var HE=function(e){return e()},GE=w_.useInsertionEffect?w_.useInsertionEffect:!1,VE=GE||HE,Sy=Je.createContext(typeof HTMLElement<"u"?UE({key:"css"}):null);Sy.Provider;var kE=function(e){return Je.forwardRef(function(n,r){var o=Je.useContext(Sy);return e(n,o,r)})},by=Je.createContext({}),XE=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,WE=gy(function(a){return XE.test(a)||a.charCodeAt(0)===111&&a.charCodeAt(1)===110&&a.charCodeAt(2)<91}),qE=WE,jE=function(e){return e!=="theme"},V_=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?qE:jE},k_=function(e,n,r){var o;if(n){var c=n.shouldForwardProp;o=e.__emotion_forwardProp&&c?function(f){return e.__emotion_forwardProp(f)&&c(f)}:c}return typeof o!="function"&&r&&(o=e.__emotion_forwardProp),o},YE=function(e){var n=e.cache,r=e.serialized,o=e.isStringTag;return _y(n,r,o),VE(function(){return OE(n,r,o)}),null},ZE=function a(e,n){var r=e.__emotion_real===e,o=r&&e.__emotion_base||e,c,f;n!==void 0&&(c=n.label,f=n.target);var d=k_(e,n,r),m=d||V_(o),p=!m("as");return function(){var v=arguments,g=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(c!==void 0&&g.push("label:"+c+";"),v[0]==null||v[0].raw===void 0)g.push.apply(g,v);else{var x=v[0];g.push(x[0]);for(var M=v.length,T=1;T<M;T++)g.push(v[T],x[T])}var E=kE(function(b,y,P){var B=p&&b.as||o,U="",z=[],L=b;if(b.theme==null){L={};for(var O in b)L[O]=b[O];L.theme=Je.useContext(by)}typeof b.className=="string"?U=LE(y.registered,z,b.className):b.className!=null&&(U=b.className+" ");var Q=yy(g.concat(z),y.registered,L);U+=y.key+"-"+Q.name,f!==void 0&&(U+=" "+f);var C=p&&d===void 0?V_(B):m,D={};for(var k in b)p&&k==="as"||C(k)&&(D[k]=b[k]);return D.className=U,P&&(D.ref=P),Je.createElement(Je.Fragment,null,Je.createElement(YE,{cache:y,serialized:Q,isStringTag:typeof B=="string"}),Je.createElement(B,D))});return E.displayName=c!==void 0?c:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",E.defaultProps=e.defaultProps,E.__emotion_real=E,E.__emotion_base=o,E.__emotion_styles=g,E.__emotion_forwardProp=d,Object.defineProperty(E,"toString",{value:function(){return"."+f}}),E.withComponent=function(b,y){var P=a(b,Sp({},n,y,{shouldForwardProp:k_(E,y,!0)}));return P.apply(void 0,g)},E}},KE=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ep=ZE.bind(null);KE.forEach(function(a){Ep[a]=Ep(a)});function My(a,e){return Ep(a,e)}function $E(a,e){Array.isArray(a.__emotion_styles)&&(a.__emotion_styles=e(a.__emotion_styles))}const X_=[];function ds(a){return X_[0]=a,yy(X_)}var Ih={exports:{}},Zt={};var W_;function QE(){if(W_)return Zt;W_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.view_transition"),M=Symbol.for("react.client.reference");function T(E){if(typeof E=="object"&&E!==null){var b=E.$$typeof;switch(b){case a:switch(E=E.type,E){case n:case o:case r:case m:case p:case x:return E;default:switch(E=E&&E.$$typeof,E){case f:case d:case g:case v:return E;case c:return E;default:return b}}case e:return b}}}return Zt.ContextConsumer=c,Zt.ContextProvider=f,Zt.Element=a,Zt.ForwardRef=d,Zt.Fragment=n,Zt.Lazy=g,Zt.Memo=v,Zt.Portal=e,Zt.Profiler=o,Zt.StrictMode=r,Zt.Suspense=m,Zt.SuspenseList=p,Zt.isContextConsumer=function(E){return T(E)===c},Zt.isContextProvider=function(E){return T(E)===f},Zt.isElement=function(E){return typeof E=="object"&&E!==null&&E.$$typeof===a},Zt.isForwardRef=function(E){return T(E)===d},Zt.isFragment=function(E){return T(E)===n},Zt.isLazy=function(E){return T(E)===g},Zt.isMemo=function(E){return T(E)===v},Zt.isPortal=function(E){return T(E)===e},Zt.isProfiler=function(E){return T(E)===o},Zt.isStrictMode=function(E){return T(E)===r},Zt.isSuspense=function(E){return T(E)===m},Zt.isSuspenseList=function(E){return T(E)===p},Zt.isValidElementType=function(E){return typeof E=="string"||typeof E=="function"||E===n||E===o||E===r||E===m||E===p||typeof E=="object"&&E!==null&&(E.$$typeof===g||E.$$typeof===v||E.$$typeof===f||E.$$typeof===c||E.$$typeof===d||E.$$typeof===M||E.getModuleId!==void 0)},Zt.typeOf=T,Zt}var q_;function JE(){return q_||(q_=1,Ih.exports=QE()),Ih.exports}var Ey=JE();function ca(a){if(typeof a!="object"||a===null)return!1;const e=Object.getPrototypeOf(a);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function Ty(a){if(Je.isValidElement(a)||Ey.isValidElementType(a)||!ca(a))return a;const e={};return Object.keys(a).forEach(n=>{e[n]=Ty(a[n])}),e}function xi(a,e,n={clone:!0}){const r=n.clone?{...a}:a;return ca(a)&&ca(e)&&Object.keys(e).forEach(o=>{Je.isValidElement(e[o])||Ey.isValidElementType(e[o])?r[o]=e[o]:ca(e[o])&&Object.prototype.hasOwnProperty.call(a,o)&&ca(a[o])?r[o]=xi(a[o],e[o],n):n.clone?r[o]=ca(e[o])?Ty(e[o]):e[o]:r[o]=e[o]}),r}const eT=a=>{const e=Object.keys(a).map(n=>({key:n,val:a[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>({...n,[r.key]:r.val}),{})};function tT(a){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5,...o}=a,c=eT(e),f=Object.keys(c);function d(x){return`@media (min-width:${typeof e[x]=="number"?e[x]:x}${n})`}function m(x){return`@media (max-width:${(typeof e[x]=="number"?e[x]:x)-r/100}${n})`}function p(x,M){const T=f.indexOf(M);return`@media (min-width:${typeof e[x]=="number"?e[x]:x}${n}) and (max-width:${(T!==-1&&typeof e[f[T]]=="number"?e[f[T]]:M)-r/100}${n})`}function v(x){return f.indexOf(x)+1<f.length?p(x,f[f.indexOf(x)+1]):d(x)}function g(x){const M=f.indexOf(x);return M===0?d(f[1]):M===f.length-1?m(f[M]):p(x,f[f.indexOf(x)+1]).replace("@media","@media not all and")}return{keys:f,values:c,up:d,down:m,between:p,only:v,not:g,unit:n,...o}}function j_(a,e){if(!a.containerQueries)return e;const n=Object.keys(e).filter(r=>r.startsWith("@container")).sort((r,o)=>{const c=/min-width:\s*([0-9.]+)/;return+(r.match(c)?.[1]||0)-+(o.match(c)?.[1]||0)});return n.length?n.reduce((r,o)=>{const c=e[o];return delete r[o],r[o]=c,r},{...e}):e}function nT(a,e){return e==="@"||e.startsWith("@")&&(a.some(n=>e.startsWith(`@${n}`))||!!e.match(/^@\d/))}function iT(a,e){const n=e.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;const[,r,o]=n,c=Number.isNaN(+r)?r||0:+r;return a.containerQueries(o).up(c)}function aT(a){const e=(c,f)=>c.replace("@media",f?`@container ${f}`:"@container");function n(c,f){c.up=(...d)=>e(a.breakpoints.up(...d),f),c.down=(...d)=>e(a.breakpoints.down(...d),f),c.between=(...d)=>e(a.breakpoints.between(...d),f),c.only=(...d)=>e(a.breakpoints.only(...d),f),c.not=(...d)=>{const m=e(a.breakpoints.not(...d),f);return m.includes("not all and")?m.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):m}}const r={},o=c=>(n(r,c),r);return n(o),{...a,containerQueries:o}}const rT={borderRadius:4};function Vl(a,e){return e?xi(a,e,{clone:!1}):a}const pf={xs:0,sm:600,md:900,lg:1200,xl:1536},Y_={keys:["xs","sm","md","lg","xl"],up:a=>`@media (min-width:${pf[a]}px)`},sT={containerQueries:a=>({up:e=>{let n=typeof e=="number"?e:pf[e]||e;return typeof n=="number"&&(n=`${n}px`),a?`@container ${a} (min-width:${n})`:`@container (min-width:${n})`}})};function Xa(a,e,n){const r=a.theme||{};if(Array.isArray(e)){const c=r.breakpoints||Y_;return e.reduce((f,d,m)=>(f[c.up(c.keys[m])]=n(e[m]),f),{})}if(typeof e=="object"){const c=r.breakpoints||Y_;return Object.keys(e).reduce((f,d)=>{if(nT(c.keys,d)){const m=iT(r.containerQueries?r:sT,d);m&&(f[m]=n(e[d],d))}else if(Object.keys(c.values||pf).includes(d)){const m=c.up(d);f[m]=n(e[d],d)}else{const m=d;f[m]=e[m]}return f},{})}return n(e)}function oT(a={}){return a.keys?.reduce((n,r)=>{const o=a.up(r);return n[o]={},n},{})||{}}function Z_(a,e){return a.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},e)}function wr(a){if(typeof a!="string")throw new Error(ps(7));return a.charAt(0).toUpperCase()+a.slice(1)}function mf(a,e,n=!0){if(!e||typeof e!="string")return null;if(a&&a.vars&&n){const r=`vars.${e}`.split(".").reduce((o,c)=>o&&o[c]?o[c]:null,a);if(r!=null)return r}return e.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,a)}function nf(a,e,n,r=n){let o;return typeof a=="function"?o=a(n):Array.isArray(a)?o=a[n]||r:o=mf(a,n)||r,e&&(o=e(o,r,a)),o}function mn(a){const{prop:e,cssProperty:n=a.prop,themeKey:r,transform:o}=a,c=f=>{if(f[e]==null)return null;const d=f[e],m=f.theme,p=mf(m,r)||{};return Xa(f,d,g=>{let x=nf(p,o,g);return g===x&&typeof g=="string"&&(x=nf(p,o,`${e}${g==="default"?"":wr(g)}`,g)),n===!1?x:{[n]:x}})};return c.propTypes={},c.filterProps=[e],c}function lT(a){const e={};return n=>(e[n]===void 0&&(e[n]=a(n)),e[n])}const cT={m:"margin",p:"padding"},uT={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},K_={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},fT=lT(a=>{if(a.length>2)if(K_[a])a=K_[a];else return[a];const[e,n]=a.split(""),r=cT[e],o=uT[n]||"";return Array.isArray(o)?o.map(c=>r+c):[r+o]}),wm=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Dm=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...wm,...Dm];function ec(a,e,n,r){const o=mf(a,e,!0)??n;return typeof o=="number"||typeof o=="string"?c=>typeof c=="string"?c:typeof o=="string"?o.startsWith("var(")&&c===0?0:o.startsWith("var(")&&c===1?o:`calc(${c} * ${o})`:o*c:Array.isArray(o)?c=>{if(typeof c=="string")return c;const f=Math.abs(c),d=o[f];return c>=0?d:typeof d=="number"?-d:typeof d=="string"&&d.startsWith("var(")?`calc(-1 * ${d})`:`-${d}`}:typeof o=="function"?o:()=>{}}function Um(a){return ec(a,"spacing",8)}function tc(a,e){return typeof e=="string"||e==null?e:a(e)}function dT(a,e){return n=>a.reduce((r,o)=>(r[o]=tc(e,n),r),{})}function hT(a,e,n,r){if(!e.includes(n))return null;const o=fT(n),c=dT(o,r),f=a[n];return Xa(a,f,c)}function Ay(a,e){const n=Um(a.theme);return Object.keys(a).map(r=>hT(a,e,r,n)).reduce(Vl,{})}function cn(a){return Ay(a,wm)}cn.propTypes={};cn.filterProps=wm;function un(a){return Ay(a,Dm)}un.propTypes={};un.filterProps=Dm;function Cy(a=8,e=Um({spacing:a})){if(a.mui)return a;const n=(...r)=>(r.length===0?[1]:r).map(c=>{const f=e(c);return typeof f=="number"?`${f}px`:f}).join(" ");return n.mui=!0,n}function gf(...a){const e=a.reduce((r,o)=>(o.filterProps.forEach(c=>{r[c]=o}),r),{}),n=r=>Object.keys(r).reduce((o,c)=>e[c]?Vl(o,e[c](r)):o,{});return n.propTypes={},n.filterProps=a.reduce((r,o)=>r.concat(o.filterProps),[]),n}function Ni(a){return typeof a!="number"?a:`${a}px solid`}function Fi(a,e){return mn({prop:a,themeKey:"borders",transform:e})}const pT=Fi("border",Ni),mT=Fi("borderTop",Ni),gT=Fi("borderRight",Ni),vT=Fi("borderBottom",Ni),_T=Fi("borderLeft",Ni),xT=Fi("borderColor"),yT=Fi("borderTopColor"),ST=Fi("borderRightColor"),bT=Fi("borderBottomColor"),MT=Fi("borderLeftColor"),ET=Fi("outline",Ni),TT=Fi("outlineColor"),vf=a=>{if(a.borderRadius!==void 0&&a.borderRadius!==null){const e=ec(a.theme,"shape.borderRadius",4),n=r=>({borderRadius:tc(e,r)});return Xa(a,a.borderRadius,n)}return null};vf.propTypes={};vf.filterProps=["borderRadius"];gf(pT,mT,gT,vT,_T,xT,yT,ST,bT,MT,vf,ET,TT);const _f=a=>{if(a.gap!==void 0&&a.gap!==null){const e=ec(a.theme,"spacing",8),n=r=>({gap:tc(e,r)});return Xa(a,a.gap,n)}return null};_f.propTypes={};_f.filterProps=["gap"];const xf=a=>{if(a.columnGap!==void 0&&a.columnGap!==null){const e=ec(a.theme,"spacing",8),n=r=>({columnGap:tc(e,r)});return Xa(a,a.columnGap,n)}return null};xf.propTypes={};xf.filterProps=["columnGap"];const yf=a=>{if(a.rowGap!==void 0&&a.rowGap!==null){const e=ec(a.theme,"spacing",8),n=r=>({rowGap:tc(e,r)});return Xa(a,a.rowGap,n)}return null};yf.propTypes={};yf.filterProps=["rowGap"];const AT=mn({prop:"gridColumn"}),CT=mn({prop:"gridRow"}),RT=mn({prop:"gridAutoFlow"}),wT=mn({prop:"gridAutoColumns"}),DT=mn({prop:"gridAutoRows"}),UT=mn({prop:"gridTemplateColumns"}),NT=mn({prop:"gridTemplateRows"}),LT=mn({prop:"gridTemplateAreas"}),OT=mn({prop:"gridArea"});gf(_f,xf,yf,AT,CT,RT,wT,DT,UT,NT,LT,OT);function So(a,e){return e==="grey"?e:a}const PT=mn({prop:"color",themeKey:"palette",transform:So}),FT=mn({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:So}),BT=mn({prop:"backgroundColor",themeKey:"palette",transform:So});gf(PT,FT,BT);function gi(a){return a<=1&&a!==0?`${a*100}%`:a}const IT=mn({prop:"width",transform:gi}),Nm=a=>{if(a.maxWidth!==void 0&&a.maxWidth!==null){const e=n=>{const r=a.theme?.breakpoints?.values?.[n]||pf[n];return r?a.theme?.breakpoints?.unit!=="px"?{maxWidth:`${r}${a.theme.breakpoints.unit}`}:{maxWidth:r}:{maxWidth:gi(n)}};return Xa(a,a.maxWidth,e)}return null};Nm.filterProps=["maxWidth"];const zT=mn({prop:"minWidth",transform:gi}),HT=mn({prop:"height",transform:gi}),GT=mn({prop:"maxHeight",transform:gi}),VT=mn({prop:"minHeight",transform:gi});mn({prop:"size",cssProperty:"width",transform:gi});mn({prop:"size",cssProperty:"height",transform:gi});const kT=mn({prop:"boxSizing"});gf(IT,Nm,zT,HT,GT,VT,kT);const nc={border:{themeKey:"borders",transform:Ni},borderTop:{themeKey:"borders",transform:Ni},borderRight:{themeKey:"borders",transform:Ni},borderBottom:{themeKey:"borders",transform:Ni},borderLeft:{themeKey:"borders",transform:Ni},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Ni},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:vf},color:{themeKey:"palette",transform:So},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:So},backgroundColor:{themeKey:"palette",transform:So},p:{style:un},pt:{style:un},pr:{style:un},pb:{style:un},pl:{style:un},px:{style:un},py:{style:un},padding:{style:un},paddingTop:{style:un},paddingRight:{style:un},paddingBottom:{style:un},paddingLeft:{style:un},paddingX:{style:un},paddingY:{style:un},paddingInline:{style:un},paddingInlineStart:{style:un},paddingInlineEnd:{style:un},paddingBlock:{style:un},paddingBlockStart:{style:un},paddingBlockEnd:{style:un},m:{style:cn},mt:{style:cn},mr:{style:cn},mb:{style:cn},ml:{style:cn},mx:{style:cn},my:{style:cn},margin:{style:cn},marginTop:{style:cn},marginRight:{style:cn},marginBottom:{style:cn},marginLeft:{style:cn},marginX:{style:cn},marginY:{style:cn},marginInline:{style:cn},marginInlineStart:{style:cn},marginInlineEnd:{style:cn},marginBlock:{style:cn},marginBlockStart:{style:cn},marginBlockEnd:{style:cn},displayPrint:{cssProperty:!1,transform:a=>({"@media print":{display:a}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:_f},rowGap:{style:yf},columnGap:{style:xf},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:gi},maxWidth:{style:Nm},minWidth:{transform:gi},height:{transform:gi},maxHeight:{transform:gi},minHeight:{transform:gi},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function XT(...a){const e=a.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(e);return a.every(r=>n.size===Object.keys(r).length)}function WT(a,e){return typeof a=="function"?a(e):a}function qT(){function a(n,r,o,c){const f={[n]:r,theme:o},d=c[n];if(!d)return{[n]:r};const{cssProperty:m=n,themeKey:p,transform:v,style:g}=d;if(r==null)return null;if(p==="typography"&&r==="inherit")return{[n]:r};const x=mf(o,p)||{};return g?g(f):Xa(f,r,T=>{let E=nf(x,v,T);return T===E&&typeof T=="string"&&(E=nf(x,v,`${n}${T==="default"?"":wr(T)}`,T)),m===!1?E:{[m]:E}})}function e(n){const{sx:r,theme:o={},nested:c}=n||{};if(!r)return null;const f=o.unstable_sxConfig??nc;function d(m){let p=m;if(typeof m=="function")p=m(o);else if(typeof m!="object")return m;if(!p)return null;const v=oT(o.breakpoints),g=Object.keys(v);let x=v;return Object.keys(p).forEach(M=>{const T=WT(p[M],o);if(T!=null)if(typeof T=="object")if(f[M])x=Vl(x,a(M,T,o,f));else{const E=Xa({theme:o},T,b=>({[M]:b}));XT(E,T)?x[M]=e({sx:T,theme:o,nested:!0}):x=Vl(x,E)}else x=Vl(x,a(M,T,o,f))}),!c&&o.modularCssLayers?{"@layer sx":j_(o,Z_(g,x))}:j_(o,Z_(g,x))}return Array.isArray(r)?r.map(d):d(r)}return e}const ms=qT();ms.filterProps=["sx"];function jT(a,e){const n=this;if(n.vars){if(!n.colorSchemes?.[a]||typeof n.getColorSchemeSelector!="function")return{};let r=n.getColorSchemeSelector(a);return r==="&"?e:((r.includes("data-")||r.includes("."))&&(r=`*:where(${r.replace(/\s*&$/,"")}) &`),{[r]:e})}return n.palette.mode===a?e:{}}function Lm(a={},...e){const{breakpoints:n={},palette:r={},spacing:o,shape:c={},...f}=a,d=tT(n),m=Cy(o);let p=xi({breakpoints:d,direction:"ltr",components:{},palette:{mode:"light",...r},spacing:m,shape:{...rT,...c}},f);return p=aT(p),p.applyStyles=jT,p=e.reduce((v,g)=>xi(v,g),p),p.unstable_sxConfig={...nc,...f?.unstable_sxConfig},p.unstable_sx=function(g){return ms({sx:g,theme:this})},p}function YT(a){return Object.keys(a).length===0}function ZT(a=null){const e=Je.useContext(by);return!e||YT(e)?a:e}const KT=Lm();function Ry(a=KT){return ZT(a)}const $T=a=>{const e={systemProps:{},otherProps:{}},n=a?.theme?.unstable_sxConfig??nc;return Object.keys(a).forEach(r=>{n[r]?e.systemProps[r]=a[r]:e.otherProps[r]=a[r]}),e};function wy(a){const{sx:e,...n}=a,{systemProps:r,otherProps:o}=$T(n);let c;return Array.isArray(e)?c=[r,...e]:typeof e=="function"?c=(...f)=>{const d=e(...f);return ca(d)?{...r,...d}:r}:c={...r,...e},{...o,sx:c}}const $_=a=>a,QT=()=>{let a=$_;return{configure(e){a=e},generate(e){return a(e)},reset(){a=$_}}},Dy=QT();function JT(a={}){const{themeId:e,defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:o}=a,c=My("div",{shouldForwardProp:d=>d!=="theme"&&d!=="sx"&&d!=="as"})(ms);return Je.forwardRef(function(m,p){const v=Ry(n),{className:g,component:x="div",...M}=wy(m);return Z.jsx(c,{as:x,ref:p,className:ga(g,o?o(r):r),theme:e&&v[e]||v,...M})})}const e1={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function ja(a,e,n="Mui"){const r=e1[e];return r?`${n}-${r}`:`${Dy.generate(a)}-${e}`}function Ya(a,e,n="Mui"){const r={};return e.forEach(o=>{r[o]=ja(a,o,n)}),r}function Uy(a){const{variants:e,...n}=a,r={variants:e,style:ds(n),isProcessed:!0};return r.style===n||e&&e.forEach(o=>{typeof o.style!="function"&&(o.style=ds(o.style))}),r}const t1=Lm();function zh(a){return a!=="ownerState"&&a!=="theme"&&a!=="sx"&&a!=="as"}function cs(a,e){return e&&a&&typeof a=="object"&&a.styles&&!a.styles.startsWith("@layer")&&(a.styles=`@layer ${e}{${String(a.styles)}}`),a}function n1(a){return a?(e,n)=>n[a]:null}function i1(a,e,n){a.theme=s1(a.theme)?n:a.theme[e]||a.theme}function Yu(a,e,n){const r=typeof e=="function"?e(a):e;if(Array.isArray(r))return r.flatMap(o=>Yu(a,o,n));if(Array.isArray(r?.variants)){let o;if(r.isProcessed)o=n?cs(r.style,n):r.style;else{const{variants:c,...f}=r;o=n?cs(ds(f),n):f}return Ny(a,r.variants,[o],n)}return r?.isProcessed?n?cs(ds(r.style),n):r.style:n?cs(ds(r),n):r}function Ny(a,e,n=[],r=void 0){let o;e:for(let c=0;c<e.length;c+=1){const f=e[c];if(typeof f.props=="function"){if(o??={...a,...a.ownerState,ownerState:a.ownerState},!f.props(o))continue}else for(const d in f.props)if(a[d]!==f.props[d]&&a.ownerState?.[d]!==f.props[d])continue e;typeof f.style=="function"?(o??={...a,...a.ownerState,ownerState:a.ownerState},n.push(r?cs(ds(f.style(o)),r):f.style(o))):n.push(r?cs(ds(f.style),r):f.style)}return n}function a1(a={}){const{themeId:e,defaultTheme:n=t1,rootShouldForwardProp:r=zh,slotShouldForwardProp:o=zh}=a;function c(d){i1(d,e,n)}return(d,m={})=>{$E(d,L=>L.filter(O=>O!==ms));const{name:p,slot:v,skipVariantsResolver:g,skipSx:x,overridesResolver:M=n1(l1(v)),...T}=m,E=p&&p.startsWith("Mui")||v?"components":"custom",b=g!==void 0?g:v&&v!=="Root"&&v!=="root"||!1,y=x||!1;let P=zh;v==="Root"||v==="root"?P=r:v?P=o:o1(d)&&(P=void 0);const B=My(d,{shouldForwardProp:P,label:r1(),...T}),U=L=>{if(L.__emotion_real===L)return L;if(typeof L=="function")return function(Q){return Yu(Q,L,Q.theme.modularCssLayers?E:void 0)};if(ca(L)){const O=Uy(L);return function(C){return O.variants?Yu(C,O,C.theme.modularCssLayers?E:void 0):C.theme.modularCssLayers?cs(O.style,E):O.style}}return L},z=(...L)=>{const O=[],Q=L.map(U),C=[];if(O.push(c),p&&M&&C.push(function(W){const ee=W.theme.components?.[p]?.styleOverrides;if(!ee)return null;const F={};for(const V in ee)F[V]=Yu(W,ee[V],W.theme.modularCssLayers?"theme":void 0);return M(W,F)}),p&&!b&&C.push(function(W){const ee=W.theme?.components?.[p]?.variants;return ee?Ny(W,ee,[],W.theme.modularCssLayers?"theme":void 0):null}),y||C.push(ms),Array.isArray(Q[0])){const A=Q.shift(),W=new Array(O.length).fill(""),q=new Array(C.length).fill("");let ee;ee=[...W,...A,...q],ee.raw=[...W,...A.raw,...q],O.unshift(ee)}const D=[...O,...Q,...C],k=B(...D);return d.muiName&&(k.muiName=d.muiName),k};return B.withConfig&&(z.withConfig=B.withConfig),z}}function r1(a,e){return void 0}function s1(a){for(const e in a)return!1;return!0}function o1(a){return typeof a=="string"&&a.charCodeAt(0)>96}function l1(a){return a&&a.charAt(0).toLowerCase()+a.slice(1)}function af(a,e,n=!1){const r={...e};for(const o in a)if(Object.prototype.hasOwnProperty.call(a,o)){const c=o;if(c==="components"||c==="slots")r[c]={...a[c],...r[c]};else if(c==="componentsProps"||c==="slotProps"){const f=a[c],d=e[c];if(!d)r[c]=f||{};else if(!f)r[c]=d;else{r[c]={...d};for(const m in f)if(Object.prototype.hasOwnProperty.call(f,m)){const p=m;r[c][p]=af(f[p],d[p],n)}}}else c==="className"&&n&&e.className?r.className=ga(a?.className,e?.className):c==="style"&&n&&e.style?r.style={...a?.style,...e?.style}:r[c]===void 0&&(r[c]=a[c])}return r}function c1(a){const{theme:e,name:n,props:r}=a;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:af(e.components[n].defaultProps,r)}function u1({props:a,name:e,defaultTheme:n,themeId:r}){let o=Ry(n);return o=o[r]||o,c1({theme:o,name:e,props:a})}function f1(a,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(a,n))}function Om(a,e=0,n=1){return f1(a,e,n)}function d1(a){a=a.slice(1);const e=new RegExp(`.{1,${a.length>=6?2:1}}`,"g");let n=a.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Dr(a){if(a.type)return a;if(a.charAt(0)==="#")return Dr(d1(a));const e=a.indexOf("("),n=a.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(n))throw new Error(ps(9,a));let r=a.substring(e+1,a.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(o))throw new Error(ps(10,o))}else r=r.split(",");return r=r.map(c=>parseFloat(c)),{type:n,values:r,colorSpace:o}}const h1=a=>{const e=Dr(a);return e.values.slice(0,3).map((n,r)=>e.type.includes("hsl")&&r!==0?`${n}%`:n).join(" ")},Bl=(a,e)=>{try{return h1(a)}catch{return a}};function Sf(a){const{type:e,colorSpace:n}=a;let{values:r}=a;return e.includes("rgb")?r=r.map((o,c)=>c<3?parseInt(o,10):o):e.includes("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.includes("color")?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function Ly(a){a=Dr(a);const{values:e}=a,n=e[0],r=e[1]/100,o=e[2]/100,c=r*Math.min(o,1-o),f=(p,v=(p+n/30)%12)=>o-c*Math.max(Math.min(v-3,9-v,1),-1);let d="rgb";const m=[Math.round(f(0)*255),Math.round(f(8)*255),Math.round(f(4)*255)];return a.type==="hsla"&&(d+="a",m.push(e[3])),Sf({type:d,values:m})}function Tp(a){a=Dr(a);let e=a.type==="hsl"||a.type==="hsla"?Dr(Ly(a)).values:a.values;return e=e.map(n=>(a.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function p1(a,e){const n=Tp(a),r=Tp(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Oy(a,e){return a=Dr(a),e=Om(e),(a.type==="rgb"||a.type==="hsl")&&(a.type+="a"),a.type==="color"?a.values[3]=`/${e}`:a.values[3]=e,Sf(a)}function Jr(a,e,n){try{return Oy(a,e)}catch{return a}}function bf(a,e){if(a=Dr(a),e=Om(e),a.type.includes("hsl"))a.values[2]*=1-e;else if(a.type.includes("rgb")||a.type.includes("color"))for(let n=0;n<3;n+=1)a.values[n]*=1-e;return Sf(a)}function kt(a,e,n){try{return bf(a,e)}catch{return a}}function Mf(a,e){if(a=Dr(a),e=Om(e),a.type.includes("hsl"))a.values[2]+=(100-a.values[2])*e;else if(a.type.includes("rgb"))for(let n=0;n<3;n+=1)a.values[n]+=(255-a.values[n])*e;else if(a.type.includes("color"))for(let n=0;n<3;n+=1)a.values[n]+=(1-a.values[n])*e;return Sf(a)}function Xt(a,e,n){try{return Mf(a,e)}catch{return a}}function m1(a,e=.15){return Tp(a)>.5?bf(a,e):Mf(a,e)}function Su(a,e,n){try{return m1(a,e)}catch{return a}}const g1=Je.createContext(void 0);function v1(a){const{theme:e,name:n,props:r}=a;if(!e||!e.components||!e.components[n])return r;const o=e.components[n];return o.defaultProps?af(o.defaultProps,r,e.components.mergeClassNameAndStyle):!o.styleOverrides&&!o.variants?af(o,r,e.components.mergeClassNameAndStyle):r}function _1({props:a,name:e}){const n=Je.useContext(g1);return v1({props:a,name:e,theme:{components:n}})}const Q_={theme:void 0};function x1(a){let e,n;return function(o){let c=e;return(c===void 0||o.theme!==n)&&(Q_.theme=o.theme,c=Uy(a(Q_)),e=c,n=o.theme),c}}function y1(a=""){function e(...r){if(!r.length)return"";const o=r[0];return typeof o=="string"&&!o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${a?`${a}-`:""}${o}${e(...r.slice(1))})`:`, ${o}`}return(r,...o)=>`var(--${a?`${a}-`:""}${r}${e(...o)})`}const J_=(a,e,n,r=[])=>{let o=a;e.forEach((c,f)=>{f===e.length-1?Array.isArray(o)?o[Number(c)]=n:o&&typeof o=="object"&&(o[c]=n):o&&typeof o=="object"&&(o[c]||(o[c]=r.includes(c)?[]:{}),o=o[c])})},S1=(a,e,n)=>{function r(o,c=[],f=[]){Object.entries(o).forEach(([d,m])=>{(!n||n&&!n([...c,d]))&&m!=null&&(typeof m=="object"&&Object.keys(m).length>0?r(m,[...c,d],Array.isArray(m)?[...f,d]:f):e([...c,d],m,f))})}r(a)},b1=(a,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(r=>a.includes(r))||a[a.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function Hh(a,e){const{prefix:n,shouldSkipGeneratingVar:r}=e||{},o={},c={},f={};return S1(a,(d,m,p)=>{if((typeof m=="string"||typeof m=="number")&&(!r||!r(d,m))){const v=`--${n?`${n}-`:""}${d.join("-")}`,g=b1(d,m);Object.assign(o,{[v]:g}),J_(c,d,`var(${v})`,p),J_(f,d,`var(${v}, ${g})`,p)}},d=>d[0]==="vars"),{css:o,vars:c,varsWithDefaults:f}}function M1(a,e={}){const{getSelector:n=y,disableCssColorScheme:r,colorSchemeSelector:o,enableContrastVars:c}=e,{colorSchemes:f={},components:d,defaultColorScheme:m="light",...p}=a,{vars:v,css:g,varsWithDefaults:x}=Hh(p,e);let M=x;const T={},{[m]:E,...b}=f;if(Object.entries(b||{}).forEach(([U,z])=>{const{vars:L,css:O,varsWithDefaults:Q}=Hh(z,e);M=xi(M,Q),T[U]={css:O,vars:L}}),E){const{css:U,vars:z,varsWithDefaults:L}=Hh(E,e);M=xi(M,L),T[m]={css:U,vars:z}}function y(U,z){let L=o;if(o==="class"&&(L=".%s"),o==="data"&&(L="[data-%s]"),o?.startsWith("data-")&&!o.includes("%s")&&(L=`[${o}="%s"]`),U){if(L==="media")return a.defaultColorScheme===U?":root":{[`@media (prefers-color-scheme: ${f[U]?.palette?.mode||U})`]:{":root":z}};if(L)return a.defaultColorScheme===U?`:root, ${L.replace("%s",String(U))}`:L.replace("%s",String(U))}return":root"}return{vars:M,generateThemeVars:()=>{let U={...v};return Object.entries(T).forEach(([,{vars:z}])=>{U=xi(U,z)}),U},generateStyleSheets:()=>{const U=[],z=a.defaultColorScheme||"light";function L(C,D){Object.keys(D).length&&U.push(typeof C=="string"?{[C]:{...D}}:C)}L(n(void 0,{...g}),g);const{[z]:O,...Q}=T;if(O){const{css:C}=O,D=f[z]?.palette?.mode,k=!r&&D?{colorScheme:D,...C}:{...C};L(n(z,{...k}),k)}return Object.entries(Q).forEach(([C,{css:D}])=>{const k=f[C]?.palette?.mode,A=!r&&k?{colorScheme:k,...D}:{...D};L(n(C,{...A}),A)}),c&&U.push({":root":{"--__l-threshold":"0.7","--__l":"clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)","--__a":"clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"}}),U}}}function E1(a){return function(n){return a==="media"?`@media (prefers-color-scheme: ${n})`:a?a.startsWith("data-")&&!a.includes("%s")?`[${a}="${n}"] &`:a==="class"?`.${n} &`:a==="data"?`[data-${n}] &`:`${a.replace("%s",n)} &`:"&"}}function T1(a,e){return Je.isValidElement(a)&&e.indexOf(a.type.muiName??a.type?._payload?.value?.muiName)!==-1}const jl={black:"#000",white:"#fff"},A1={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},eo={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},to={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Rl={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},no={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},io={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},ao={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"};function Py(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:jl.white,default:jl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const Fy=Py();function By(){return{text:{primary:jl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:jl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const Ap=By();function ex(a,e,n,r){const o=r.light||r,c=r.dark||r*1.5;a[e]||(a.hasOwnProperty(n)?a[e]=a[n]:e==="light"?a.light=Mf(a.main,o):e==="dark"&&(a.dark=bf(a.main,c)))}function tx(a,e,n,r,o){const c=o.light||o,f=o.dark||o*1.5;e[n]||(e.hasOwnProperty(r)?e[n]=e[r]:n==="light"?e.light=`color-mix(in ${a}, ${e.main}, #fff ${(c*100).toFixed(0)}%)`:n==="dark"&&(e.dark=`color-mix(in ${a}, ${e.main}, #000 ${(f*100).toFixed(0)}%)`))}function C1(a="light"){return a==="dark"?{main:no[200],light:no[50],dark:no[400]}:{main:no[700],light:no[400],dark:no[800]}}function R1(a="light"){return a==="dark"?{main:eo[200],light:eo[50],dark:eo[400]}:{main:eo[500],light:eo[300],dark:eo[700]}}function w1(a="light"){return a==="dark"?{main:to[500],light:to[300],dark:to[700]}:{main:to[700],light:to[400],dark:to[800]}}function D1(a="light"){return a==="dark"?{main:io[400],light:io[300],dark:io[700]}:{main:io[700],light:io[500],dark:io[900]}}function U1(a="light"){return a==="dark"?{main:ao[400],light:ao[300],dark:ao[700]}:{main:ao[800],light:ao[500],dark:ao[900]}}function N1(a="light"){return a==="dark"?{main:Rl[400],light:Rl[300],dark:Rl[700]}:{main:"#ed6c02",light:Rl[500],dark:Rl[900]}}function L1(a){return`oklch(from ${a} var(--__l) 0 h / var(--__a))`}function Pm(a){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2,colorSpace:o,...c}=a,f=a.primary||C1(e),d=a.secondary||R1(e),m=a.error||w1(e),p=a.info||D1(e),v=a.success||U1(e),g=a.warning||N1(e);function x(b){return o?L1(b):p1(b,Ap.text.primary)>=n?Ap.text.primary:Fy.text.primary}const M=({color:b,name:y,mainShade:P=500,lightShade:B=300,darkShade:U=700})=>{if(b={...b},!b.main&&b[P]&&(b.main=b[P]),!b.hasOwnProperty("main"))throw new Error(ps(11,y?` (${y})`:"",P));if(typeof b.main!="string")throw new Error(ps(12,y?` (${y})`:"",JSON.stringify(b.main)));return o?(tx(o,b,"light",B,r),tx(o,b,"dark",U,r)):(ex(b,"light",B,r),ex(b,"dark",U,r)),b.contrastText||(b.contrastText=x(b.main)),b};let T;return e==="light"?T=Py():e==="dark"&&(T=By()),xi({common:{...jl},mode:e,primary:M({color:f,name:"primary"}),secondary:M({color:d,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:M({color:m,name:"error"}),warning:M({color:g,name:"warning"}),info:M({color:p,name:"info"}),success:M({color:v,name:"success"}),grey:A1,contrastThreshold:n,getContrastText:x,augmentColor:M,tonalOffset:r,...T},c)}function O1(a){const e={};return Object.entries(a).forEach(r=>{const[o,c]=r;typeof c=="object"&&(e[o]=`${c.fontStyle?`${c.fontStyle} `:""}${c.fontVariant?`${c.fontVariant} `:""}${c.fontWeight?`${c.fontWeight} `:""}${c.fontStretch?`${c.fontStretch} `:""}${c.fontSize||""}${c.lineHeight?`/${c.lineHeight} `:""}${c.fontFamily||""}`)}),e}function P1(a,e){return{toolbar:{minHeight:56,[a.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[a.up("sm")]:{minHeight:64}},...e}}function F1(a){return Math.round(a*1e5)/1e5}const nx={textTransform:"uppercase"},ix='"Roboto", "Helvetica", "Arial", sans-serif';function B1(a,e){const{fontFamily:n=ix,fontSize:r=14,fontWeightLight:o=300,fontWeightRegular:c=400,fontWeightMedium:f=500,fontWeightBold:d=700,htmlFontSize:m=16,allVariants:p,pxToRem:v,...g}=typeof e=="function"?e(a):e,x=r/14,M=v||(b=>`${b/m*x}rem`),T=(b,y,P,B,U)=>({fontFamily:n,fontWeight:b,fontSize:M(y),lineHeight:P,...n===ix?{letterSpacing:`${F1(B/y)}em`}:{},...U,...p}),E={h1:T(o,96,1.167,-1.5),h2:T(o,60,1.2,-.5),h3:T(c,48,1.167,0),h4:T(c,34,1.235,.25),h5:T(c,24,1.334,0),h6:T(f,20,1.6,.15),subtitle1:T(c,16,1.75,.15),subtitle2:T(f,14,1.57,.1),body1:T(c,16,1.5,.15),body2:T(c,14,1.43,.15),button:T(f,14,1.75,.4,nx),caption:T(c,12,1.66,.4),overline:T(c,12,2.66,1,nx),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return xi({htmlFontSize:m,pxToRem:M,fontFamily:n,fontSize:r,fontWeightLight:o,fontWeightRegular:c,fontWeightMedium:f,fontWeightBold:d,...E},g,{clone:!1})}const I1=.2,z1=.14,H1=.12;function sn(...a){return[`${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${I1})`,`${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${z1})`,`${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${H1})`].join(",")}const G1=["none",sn(0,2,1,-1,0,1,1,0,0,1,3,0),sn(0,3,1,-2,0,2,2,0,0,1,5,0),sn(0,3,3,-2,0,3,4,0,0,1,8,0),sn(0,2,4,-1,0,4,5,0,0,1,10,0),sn(0,3,5,-1,0,5,8,0,0,1,14,0),sn(0,3,5,-1,0,6,10,0,0,1,18,0),sn(0,4,5,-2,0,7,10,1,0,2,16,1),sn(0,5,5,-3,0,8,10,1,0,3,14,2),sn(0,5,6,-3,0,9,12,1,0,3,16,2),sn(0,6,6,-3,0,10,14,1,0,4,18,3),sn(0,6,7,-4,0,11,15,1,0,4,20,3),sn(0,7,8,-4,0,12,17,2,0,5,22,4),sn(0,7,8,-4,0,13,19,2,0,5,24,4),sn(0,7,9,-4,0,14,21,2,0,5,26,4),sn(0,8,9,-5,0,15,22,2,0,6,28,5),sn(0,8,10,-5,0,16,24,2,0,6,30,5),sn(0,8,11,-5,0,17,26,2,0,6,32,5),sn(0,9,11,-5,0,18,28,2,0,7,34,6),sn(0,9,12,-6,0,19,29,2,0,7,36,6),sn(0,10,13,-6,0,20,31,3,0,8,38,7),sn(0,10,13,-6,0,21,33,3,0,8,40,7),sn(0,10,14,-6,0,22,35,3,0,8,42,7),sn(0,11,14,-7,0,23,36,3,0,9,44,8),sn(0,11,15,-7,0,24,38,3,0,9,46,8)],V1={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},k1={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function ax(a){return`${Math.round(a)}ms`}function X1(a){if(!a)return 0;const e=a/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function W1(a){const e={...V1,...a.easing},n={...k1,...a.duration};return{getAutoHeightDuration:X1,create:(o=["all"],c={})=>{const{duration:f=n.standard,easing:d=e.easeInOut,delay:m=0,...p}=c;return(Array.isArray(o)?o:[o]).map(v=>`${v} ${typeof f=="string"?f:ax(f)} ${d} ${typeof m=="string"?m:ax(m)}`).join(",")},...a,easing:e,duration:n}}const q1={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function j1(a){return ca(a)||typeof a>"u"||typeof a=="string"||typeof a=="boolean"||typeof a=="number"||Array.isArray(a)}function Iy(a={}){const e={...a};function n(r){const o=Object.entries(r);for(let c=0;c<o.length;c++){const[f,d]=o[c];!j1(d)||f.startsWith("unstable_")?delete r[f]:ca(d)&&(r[f]={...d},n(r[f]))}}return n(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function rx(a){return typeof a=="number"?`${(a*100).toFixed(0)}%`:`calc((${a}) * 100%)`}const Y1=a=>{if(!Number.isNaN(+a))return+a;const e=a.match(/\d*\.?\d+/g);if(!e)return 0;let n=0;for(let r=0;r<e.length;r+=1)n+=+e[r];return n};function Z1(a){Object.assign(a,{alpha(e,n){const r=this||a;return r.colorSpace?`oklch(from ${e} l c h / ${typeof n=="string"?`calc(${n})`:n})`:r.vars?`rgba(${e.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g,"var(--$1Channel)")} / ${typeof n=="string"?`calc(${n})`:n})`:Oy(e,Y1(n))},lighten(e,n){const r=this||a;return r.colorSpace?`color-mix(in ${r.colorSpace}, ${e}, #fff ${rx(n)})`:Mf(e,n)},darken(e,n){const r=this||a;return r.colorSpace?`color-mix(in ${r.colorSpace}, ${e}, #000 ${rx(n)})`:bf(e,n)}})}function Cp(a={},...e){const{breakpoints:n,mixins:r={},spacing:o,palette:c={},transitions:f={},typography:d={},shape:m,colorSpace:p,...v}=a;if(a.vars&&a.generateThemeVars===void 0)throw new Error(ps(20));const g=Pm({...c,colorSpace:p}),x=Lm(a);let M=xi(x,{mixins:P1(x.breakpoints,r),palette:g,shadows:G1.slice(),typography:B1(g,d),transitions:W1(f),zIndex:{...q1}});return M=xi(M,v),M=e.reduce((T,E)=>xi(T,E),M),M.unstable_sxConfig={...nc,...v?.unstable_sxConfig},M.unstable_sx=function(E){return ms({sx:E,theme:this})},M.toRuntimeSource=Iy,Z1(M),M}function K1(a){let e;return a<1?e=5.11916*a**2:e=4.5*Math.log(a+1)+2,Math.round(e*10)/1e3}const $1=[...Array(25)].map((a,e)=>{if(e===0)return"none";const n=K1(e);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function zy(a){return{inputPlaceholder:a==="dark"?.5:.42,inputUnderline:a==="dark"?.7:.42,switchTrackDisabled:a==="dark"?.2:.12,switchTrack:a==="dark"?.3:.38}}function Hy(a){return a==="dark"?$1:[]}function Q1(a){const{palette:e={mode:"light"},opacity:n,overlays:r,colorSpace:o,...c}=a,f=Pm({...e,colorSpace:o});return{palette:f,opacity:{...zy(f.mode),...n},overlays:r||Hy(f.mode),...c}}function J1(a){return!!a[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!a[0].match(/sxConfig$/)||a[0]==="palette"&&!!a[1]?.match(/(mode|contrastThreshold|tonalOffset)/)}const eA=a=>[...[...Array(25)].map((e,n)=>`--${a?`${a}-`:""}overlays-${n}`),`--${a?`${a}-`:""}palette-AppBar-darkBg`,`--${a?`${a}-`:""}palette-AppBar-darkColor`],tA=a=>(e,n)=>{const r=a.rootSelector||":root",o=a.colorSchemeSelector;let c=o;if(o==="class"&&(c=".%s"),o==="data"&&(c="[data-%s]"),o?.startsWith("data-")&&!o.includes("%s")&&(c=`[${o}="%s"]`),a.defaultColorScheme===e){if(e==="dark"){const f={};return eA(a.cssVarPrefix).forEach(d=>{f[d]=n[d],delete n[d]}),c==="media"?{[r]:n,"@media (prefers-color-scheme: dark)":{[r]:f}}:c?{[c.replace("%s",e)]:f,[`${r}, ${c.replace("%s",e)}`]:n}:{[r]:{...n,...f}}}if(c&&c!=="media")return`${r}, ${c.replace("%s",String(e))}`}else if(e){if(c==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[r]:n}};if(c)return c.replace("%s",String(e))}return r};function nA(a,e){e.forEach(n=>{a[n]||(a[n]={})})}function ge(a,e,n){!a[e]&&n&&(a[e]=n)}function Il(a){return typeof a!="string"||!a.startsWith("hsl")?a:Ly(a)}function Pa(a,e){`${e}Channel`in a||(a[`${e}Channel`]=Bl(Il(a[e])))}function iA(a){return typeof a=="number"?`${a}px`:typeof a=="string"||typeof a=="function"||Array.isArray(a)?a:"8px"}const aa=a=>{try{return a()}catch{}},aA=(a="mui")=>y1(a);function Gh(a,e,n,r,o){if(!n)return;n=n===!0?{}:n;const c=o==="dark"?"dark":"light";if(!r){e[o]=Q1({...n,palette:{mode:c,...n?.palette},colorSpace:a});return}const{palette:f,...d}=Cp({...r,palette:{mode:c,...n?.palette},colorSpace:a});return e[o]={...n,palette:f,opacity:{...zy(c),...n?.opacity},overlays:n?.overlays||Hy(c)},d}function rA(a={},...e){const{colorSchemes:n={light:!0},defaultColorScheme:r,disableCssColorScheme:o=!1,cssVarPrefix:c="mui",nativeColor:f=!1,shouldSkipGeneratingVar:d=J1,colorSchemeSelector:m=n.light&&n.dark?"media":void 0,rootSelector:p=":root",...v}=a,g=Object.keys(n)[0],x=r||(n.light&&g!=="light"?"light":g),M=aA(c),{[x]:T,light:E,dark:b,...y}=n,P={...y};let B=T;if((x==="dark"&&!("dark"in n)||x==="light"&&!("light"in n))&&(B=!0),!B)throw new Error(ps(21,x));let U;f&&(U="oklch");const z=Gh(U,P,B,v,x);E&&!P.light&&Gh(U,P,E,void 0,"light"),b&&!P.dark&&Gh(U,P,b,void 0,"dark");let L={defaultColorScheme:x,...z,cssVarPrefix:c,colorSchemeSelector:m,rootSelector:p,getCssVar:M,colorSchemes:P,font:{...O1(z.typography),...z.font},spacing:iA(v.spacing)};Object.keys(L.colorSchemes).forEach(k=>{const A=L.colorSchemes[k].palette,W=ee=>{const F=ee.split("-"),V=F[1],ne=F[2];return M(ee,A[V][ne])};A.mode==="light"&&(ge(A.common,"background","#fff"),ge(A.common,"onBackground","#000")),A.mode==="dark"&&(ge(A.common,"background","#000"),ge(A.common,"onBackground","#fff"));function q(ee,F,V){if(U){let ne;return ee===Jr&&(ne=`transparent ${((1-V)*100).toFixed(0)}%`),ee===kt&&(ne=`#000 ${(V*100).toFixed(0)}%`),ee===Xt&&(ne=`#fff ${(V*100).toFixed(0)}%`),`color-mix(in ${U}, ${F}, ${ne})`}return ee(F,V)}if(nA(A,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),A.mode==="light"){ge(A.Alert,"errorColor",q(kt,A.error.light,.6)),ge(A.Alert,"infoColor",q(kt,A.info.light,.6)),ge(A.Alert,"successColor",q(kt,A.success.light,.6)),ge(A.Alert,"warningColor",q(kt,A.warning.light,.6)),ge(A.Alert,"errorFilledBg",W("palette-error-main")),ge(A.Alert,"infoFilledBg",W("palette-info-main")),ge(A.Alert,"successFilledBg",W("palette-success-main")),ge(A.Alert,"warningFilledBg",W("palette-warning-main")),ge(A.Alert,"errorFilledColor",aa(()=>A.getContrastText(A.error.main))),ge(A.Alert,"infoFilledColor",aa(()=>A.getContrastText(A.info.main))),ge(A.Alert,"successFilledColor",aa(()=>A.getContrastText(A.success.main))),ge(A.Alert,"warningFilledColor",aa(()=>A.getContrastText(A.warning.main))),ge(A.Alert,"errorStandardBg",q(Xt,A.error.light,.9)),ge(A.Alert,"infoStandardBg",q(Xt,A.info.light,.9)),ge(A.Alert,"successStandardBg",q(Xt,A.success.light,.9)),ge(A.Alert,"warningStandardBg",q(Xt,A.warning.light,.9)),ge(A.Alert,"errorIconColor",W("palette-error-main")),ge(A.Alert,"infoIconColor",W("palette-info-main")),ge(A.Alert,"successIconColor",W("palette-success-main")),ge(A.Alert,"warningIconColor",W("palette-warning-main")),ge(A.AppBar,"defaultBg",W("palette-grey-100")),ge(A.Avatar,"defaultBg",W("palette-grey-400")),ge(A.Button,"inheritContainedBg",W("palette-grey-300")),ge(A.Button,"inheritContainedHoverBg",W("palette-grey-A100")),ge(A.Chip,"defaultBorder",W("palette-grey-400")),ge(A.Chip,"defaultAvatarColor",W("palette-grey-700")),ge(A.Chip,"defaultIconColor",W("palette-grey-700")),ge(A.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),ge(A.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),ge(A.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),ge(A.LinearProgress,"primaryBg",q(Xt,A.primary.main,.62)),ge(A.LinearProgress,"secondaryBg",q(Xt,A.secondary.main,.62)),ge(A.LinearProgress,"errorBg",q(Xt,A.error.main,.62)),ge(A.LinearProgress,"infoBg",q(Xt,A.info.main,.62)),ge(A.LinearProgress,"successBg",q(Xt,A.success.main,.62)),ge(A.LinearProgress,"warningBg",q(Xt,A.warning.main,.62)),ge(A.Skeleton,"bg",U?q(Jr,A.text.primary,.11):`rgba(${W("palette-text-primaryChannel")} / 0.11)`),ge(A.Slider,"primaryTrack",q(Xt,A.primary.main,.62)),ge(A.Slider,"secondaryTrack",q(Xt,A.secondary.main,.62)),ge(A.Slider,"errorTrack",q(Xt,A.error.main,.62)),ge(A.Slider,"infoTrack",q(Xt,A.info.main,.62)),ge(A.Slider,"successTrack",q(Xt,A.success.main,.62)),ge(A.Slider,"warningTrack",q(Xt,A.warning.main,.62));const ee=U?q(kt,A.background.default,.6825):Su(A.background.default,.8);ge(A.SnackbarContent,"bg",ee),ge(A.SnackbarContent,"color",aa(()=>U?Ap.text.primary:A.getContrastText(ee))),ge(A.SpeedDialAction,"fabHoverBg",Su(A.background.paper,.15)),ge(A.StepConnector,"border",W("palette-grey-400")),ge(A.StepContent,"border",W("palette-grey-400")),ge(A.Switch,"defaultColor",W("palette-common-white")),ge(A.Switch,"defaultDisabledColor",W("palette-grey-100")),ge(A.Switch,"primaryDisabledColor",q(Xt,A.primary.main,.62)),ge(A.Switch,"secondaryDisabledColor",q(Xt,A.secondary.main,.62)),ge(A.Switch,"errorDisabledColor",q(Xt,A.error.main,.62)),ge(A.Switch,"infoDisabledColor",q(Xt,A.info.main,.62)),ge(A.Switch,"successDisabledColor",q(Xt,A.success.main,.62)),ge(A.Switch,"warningDisabledColor",q(Xt,A.warning.main,.62)),ge(A.TableCell,"border",q(Xt,q(Jr,A.divider,1),.88)),ge(A.Tooltip,"bg",q(Jr,A.grey[700],.92))}if(A.mode==="dark"){ge(A.Alert,"errorColor",q(Xt,A.error.light,.6)),ge(A.Alert,"infoColor",q(Xt,A.info.light,.6)),ge(A.Alert,"successColor",q(Xt,A.success.light,.6)),ge(A.Alert,"warningColor",q(Xt,A.warning.light,.6)),ge(A.Alert,"errorFilledBg",W("palette-error-dark")),ge(A.Alert,"infoFilledBg",W("palette-info-dark")),ge(A.Alert,"successFilledBg",W("palette-success-dark")),ge(A.Alert,"warningFilledBg",W("palette-warning-dark")),ge(A.Alert,"errorFilledColor",aa(()=>A.getContrastText(A.error.dark))),ge(A.Alert,"infoFilledColor",aa(()=>A.getContrastText(A.info.dark))),ge(A.Alert,"successFilledColor",aa(()=>A.getContrastText(A.success.dark))),ge(A.Alert,"warningFilledColor",aa(()=>A.getContrastText(A.warning.dark))),ge(A.Alert,"errorStandardBg",q(kt,A.error.light,.9)),ge(A.Alert,"infoStandardBg",q(kt,A.info.light,.9)),ge(A.Alert,"successStandardBg",q(kt,A.success.light,.9)),ge(A.Alert,"warningStandardBg",q(kt,A.warning.light,.9)),ge(A.Alert,"errorIconColor",W("palette-error-main")),ge(A.Alert,"infoIconColor",W("palette-info-main")),ge(A.Alert,"successIconColor",W("palette-success-main")),ge(A.Alert,"warningIconColor",W("palette-warning-main")),ge(A.AppBar,"defaultBg",W("palette-grey-900")),ge(A.AppBar,"darkBg",W("palette-background-paper")),ge(A.AppBar,"darkColor",W("palette-text-primary")),ge(A.Avatar,"defaultBg",W("palette-grey-600")),ge(A.Button,"inheritContainedBg",W("palette-grey-800")),ge(A.Button,"inheritContainedHoverBg",W("palette-grey-700")),ge(A.Chip,"defaultBorder",W("palette-grey-700")),ge(A.Chip,"defaultAvatarColor",W("palette-grey-300")),ge(A.Chip,"defaultIconColor",W("palette-grey-300")),ge(A.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),ge(A.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),ge(A.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),ge(A.LinearProgress,"primaryBg",q(kt,A.primary.main,.5)),ge(A.LinearProgress,"secondaryBg",q(kt,A.secondary.main,.5)),ge(A.LinearProgress,"errorBg",q(kt,A.error.main,.5)),ge(A.LinearProgress,"infoBg",q(kt,A.info.main,.5)),ge(A.LinearProgress,"successBg",q(kt,A.success.main,.5)),ge(A.LinearProgress,"warningBg",q(kt,A.warning.main,.5)),ge(A.Skeleton,"bg",U?q(Jr,A.text.primary,.13):`rgba(${W("palette-text-primaryChannel")} / 0.13)`),ge(A.Slider,"primaryTrack",q(kt,A.primary.main,.5)),ge(A.Slider,"secondaryTrack",q(kt,A.secondary.main,.5)),ge(A.Slider,"errorTrack",q(kt,A.error.main,.5)),ge(A.Slider,"infoTrack",q(kt,A.info.main,.5)),ge(A.Slider,"successTrack",q(kt,A.success.main,.5)),ge(A.Slider,"warningTrack",q(kt,A.warning.main,.5));const ee=U?q(Xt,A.background.default,.985):Su(A.background.default,.98);ge(A.SnackbarContent,"bg",ee),ge(A.SnackbarContent,"color",aa(()=>U?Fy.text.primary:A.getContrastText(ee))),ge(A.SpeedDialAction,"fabHoverBg",Su(A.background.paper,.15)),ge(A.StepConnector,"border",W("palette-grey-600")),ge(A.StepContent,"border",W("palette-grey-600")),ge(A.Switch,"defaultColor",W("palette-grey-300")),ge(A.Switch,"defaultDisabledColor",W("palette-grey-600")),ge(A.Switch,"primaryDisabledColor",q(kt,A.primary.main,.55)),ge(A.Switch,"secondaryDisabledColor",q(kt,A.secondary.main,.55)),ge(A.Switch,"errorDisabledColor",q(kt,A.error.main,.55)),ge(A.Switch,"infoDisabledColor",q(kt,A.info.main,.55)),ge(A.Switch,"successDisabledColor",q(kt,A.success.main,.55)),ge(A.Switch,"warningDisabledColor",q(kt,A.warning.main,.55)),ge(A.TableCell,"border",q(kt,q(Jr,A.divider,1),.68)),ge(A.Tooltip,"bg",q(Jr,A.grey[700],.92))}Pa(A.background,"default"),Pa(A.background,"paper"),Pa(A.common,"background"),Pa(A.common,"onBackground"),Pa(A,"divider"),Object.keys(A).forEach(ee=>{const F=A[ee];ee!=="tonalOffset"&&F&&typeof F=="object"&&(F.main&&ge(A[ee],"mainChannel",Bl(Il(F.main))),F.light&&ge(A[ee],"lightChannel",Bl(Il(F.light))),F.dark&&ge(A[ee],"darkChannel",Bl(Il(F.dark))),F.contrastText&&ge(A[ee],"contrastTextChannel",Bl(Il(F.contrastText))),ee==="text"&&(Pa(A[ee],"primary"),Pa(A[ee],"secondary")),ee==="action"&&(F.active&&Pa(A[ee],"active"),F.selected&&Pa(A[ee],"selected")))})}),L=e.reduce((k,A)=>xi(k,A),L);const O={prefix:c,disableCssColorScheme:o,shouldSkipGeneratingVar:d,getSelector:tA(L),enableContrastVars:f},{vars:Q,generateThemeVars:C,generateStyleSheets:D}=M1(L,O);return L.vars=Q,Object.entries(L.colorSchemes[L.defaultColorScheme]).forEach(([k,A])=>{L[k]=A}),L.generateThemeVars=C,L.generateStyleSheets=D,L.generateSpacing=function(){return Cy(v.spacing,Um(this))},L.getColorSchemeSelector=E1(m),L.spacing=L.generateSpacing(),L.shouldSkipGeneratingVar=d,L.unstable_sxConfig={...nc,...v?.unstable_sxConfig},L.unstable_sx=function(A){return ms({sx:A,theme:this})},L.toRuntimeSource=Iy,L}function sx(a,e,n){a.colorSchemes&&n&&(a.colorSchemes[e]={...n!==!0&&n,palette:Pm({...n===!0?{}:n.palette,mode:e})})}function Gy(a={},...e){const{palette:n,cssVariables:r=!1,colorSchemes:o=n?void 0:{light:!0},defaultColorScheme:c=n?.mode,...f}=a,d=c||"light",m=o?.[d],p={...o,...n?{[d]:{...typeof m!="boolean"&&m,palette:n}}:void 0};if(r===!1){if(!("colorSchemes"in a))return Cp(a,...e);let v=n;"palette"in a||p[d]&&(p[d]!==!0?v=p[d].palette:d==="dark"&&(v={mode:"dark"}));const g=Cp({...a,palette:v},...e);return g.defaultColorScheme=d,g.colorSchemes=p,g.palette.mode==="light"&&(g.colorSchemes.light={...p.light!==!0&&p.light,palette:g.palette},sx(g,"dark",p.dark)),g.palette.mode==="dark"&&(g.colorSchemes.dark={...p.dark!==!0&&p.dark,palette:g.palette},sx(g,"light",p.light)),g}return!n&&!("light"in p)&&d==="light"&&(p.light=!0),rA({...f,colorSchemes:p,defaultColorScheme:d,...typeof r!="boolean"&&r},...e)}const Vy=Gy();function vs({props:a,name:e}){return u1({props:a,name:e,defaultTheme:Vy,themeId:Tm})}function sA(a){return a!=="ownerState"&&a!=="theme"&&a!=="sx"&&a!=="as"}const oA=a=>sA(a)&&a!=="classes",Lr=a1({themeId:Tm,defaultTheme:Vy,rootShouldForwardProp:oA}),Yl=Je.createContext({});function lA(a){return ja("MuiTimeline",a)}Ya("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function cA(){return wy}const uA=x1;function fA(a){return _1(a)}function Or(a){return a==="alternate-reverse"?"positionAlternateReverse":`position${wr(a)}`}const dA=a=>{const{position:e,classes:n}=a,r={root:["root",e&&Or(e)]};return Nr(r,lA,n)},hA=Lr("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:n}=a;return[e.root,n.position&&e[Or(n.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),pA=Je.forwardRef(function(e,n){const r=vs({props:e,name:"MuiTimeline"}),{position:o="right",className:c,...f}=r,d={...r,position:o},m=dA(d),p=Je.useMemo(()=>({position:o}),[o]);return Z.jsx(Yl.Provider,{value:p,children:Z.jsx(hA,{className:ga(m.root,c),ownerState:d,ref:n,...f})})});function mA(a){return typeof a.main=="string"}function gA(a,e=[]){if(!mA(a))return!1;for(const n of e)if(!a.hasOwnProperty(n)||typeof a[n]!="string")return!1;return!0}function vA(a=[]){return([,e])=>e&&gA(e,a)}function _A(a){return ja("MuiTypography",a)}Ya("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const xA={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},yA=cA(),SA=a=>{const{align:e,gutterBottom:n,noWrap:r,paragraph:o,variant:c,classes:f}=a,d={root:["root",c,a.align!=="inherit"&&`align${wr(e)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return Nr(d,_A,f)},bA=Lr("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:n}=a;return[e.root,n.variant&&e[n.variant],n.align!=="inherit"&&e[`align${wr(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(uA(({theme:a})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(a.typography).filter(([e,n])=>e!=="inherit"&&n&&typeof n=="object").map(([e,n])=>({props:{variant:e},style:n})),...Object.entries(a.palette).filter(vA()).map(([e])=>({props:{color:e},style:{color:(a.vars||a).palette[e].main}})),...Object.entries(a.palette?.text||{}).filter(([,e])=>typeof e=="string").map(([e])=>({props:{color:`text${wr(e)}`},style:{color:(a.vars||a).palette.text[e]}})),{props:({ownerState:e})=>e.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:e})=>e.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:e})=>e.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:e})=>e.paragraph,style:{marginBottom:16}}]}))),ox={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},kl=Je.forwardRef(function(e,n){const{color:r,...o}=fA({props:e,name:"MuiTypography"}),c=!xA[r],f=yA({...o,...c&&{color:r}}),{align:d="inherit",className:m,component:p,gutterBottom:v=!1,noWrap:g=!1,paragraph:x=!1,variant:M="body1",variantMapping:T=ox,...E}=f,b={...f,align:d,color:r,className:m,component:p,gutterBottom:v,noWrap:g,paragraph:x,variant:M,variantMapping:T},y=p||(x?"p":T[M]||ox[M])||"span",P=SA(b);return Z.jsx(bA,{as:y,ref:n,className:ga(P.root,m),...E,ownerState:b,style:{...d!=="inherit"&&{"--Typography-textAlign":d},...E.style}})});function MA(a){return ja("MuiTimelineContent",a)}const EA=Ya("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),TA=a=>{const{position:e,classes:n}=a,r={root:["root",Or(e)]};return Nr(r,MA,n)},AA=Lr(kl,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:n}=a;return[e.root,e[Or(n.position)]]}})(({ownerState:a})=>({flex:1,padding:"6px 16px",textAlign:"left",...a.position==="left"&&{textAlign:"right"}})),CA=Je.forwardRef(function(e,n){const r=vs({props:e,name:"MuiTimelineContent"}),{className:o,...c}=r,{position:f}=Je.useContext(Yl),d={...r,position:f||"right"},m=TA(d);return Z.jsx(AA,{component:"div",className:ga(m.root,o),ownerState:d,ref:n,...c})});function RA(a){return ja("MuiTimelineOppositeContent",a)}const wA=Ya("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),DA=a=>{const{position:e,classes:n}=a,r={root:["root",Or(e)]};return Nr(r,RA,n)},UA=Lr(kl,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:n}=a;return[e.root,e[Or(n.position)]]}})(({ownerState:a})=>({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1,...a.position==="left"&&{textAlign:"left"}})),ky=Je.forwardRef(function(e,n){const r=vs({props:e,name:"MuiTimelineOppositeContent"}),{className:o,...c}=r,{position:f}=Je.useContext(Yl),d={...r,position:f||"left"},m=DA(d);return Z.jsx(UA,{component:"div",className:ga(m.root,o),ownerState:d,ref:n,...c})});ky.muiName="TimelineOppositeContent";function NA(a){return ja("MuiTimelineItem",a)}Ya("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]);const LA=a=>{const{position:e,classes:n,hasOppositeContent:r}=a,o={root:["root",Or(e),!r&&"missingOppositeContent"]};return Nr(o,NA,n)},OA=Lr("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:n}=a;return[e.root,e[Or(n.position)]]}})(({ownerState:a})=>({listStyle:"none",display:"flex",position:"relative",minHeight:70,...a.position==="left"&&{flexDirection:"row-reverse"},...(a.position==="alternate"||a.position==="alternate-reverse")&&{[`&:nth-of-type(${a.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${EA.root}`]:{textAlign:"right"},[`& .${wA.root}`]:{textAlign:"left"}}},...!a.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}}})),PA=Je.forwardRef(function(e,n){const r=vs({props:e,name:"MuiTimelineItem"}),{position:o,className:c,...f}=r,{position:d}=Je.useContext(Yl);let m=!1;Je.Children.forEach(r.children,x=>{T1(x,["TimelineOppositeContent"])&&(m=!0)});const p={...r,position:o||d||"right",hasOppositeContent:m},v=LA(p),g=Je.useMemo(()=>({position:p.position}),[p.position]);return Z.jsx(Yl.Provider,{value:g,children:Z.jsx(OA,{className:ga(v.root,c),ownerState:p,ref:n,...f})})});function FA(a){return ja("MuiTimelineSeparator",a)}Ya("MuiTimelineSeparator",["root"]);const BA=a=>{const{classes:e}=a;return Nr({root:["root"]},FA,e)},IA=Lr("div",{name:"MuiTimelineSeparator",slot:"Root"})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),zA=Je.forwardRef(function(e,n){const r=vs({props:e,name:"MuiTimelineSeparator"}),{className:o,...c}=r,f=r,d=BA(f);return Z.jsx(IA,{className:ga(d.root,o),ownerState:f,ref:n,...c})});function HA(a){return ja("MuiTimelineConnector",a)}Ya("MuiTimelineConnector",["root"]);const GA=a=>{const{classes:e}=a;return Nr({root:["root"]},HA,e)},VA=Lr("span",{name:"MuiTimelineConnector",slot:"Root"})(({theme:a})=>({width:2,backgroundColor:(a.vars||a).palette.grey[400],flexGrow:1})),lx=Je.forwardRef(function(e,n){const r=vs({props:e,name:"MuiTimelineConnector"}),{className:o,...c}=r,f=r,d=GA(f);return Z.jsx(VA,{className:ga(d.root,o),ownerState:f,ref:n,...c})});function kA(a){return ja("MuiTimelineDot",a)}Ya("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const XA=a=>{const{color:e,variant:n,classes:r}=a,o={root:["root",n,e!=="inherit"&&`${n}${wr(e)}`]};return Nr(o,kA,r)},WA=Lr("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:n}=a;return[e.root,e[n.color!=="inherit"&&`${n.variant}${wr(n.color)}`],e[n.variant]]}})(({ownerState:a,theme:e})=>({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(e.vars||e).shadows[1],margin:"11.5px 0",...a.variant==="filled"&&{borderColor:"transparent",...a.color!=="inherit"&&{...a.color==="grey"?{color:(e.vars||e).palette.grey[50],backgroundColor:(e.vars||e).palette.grey[400]}:{color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main}}},...a.variant==="outlined"&&{boxShadow:"none",backgroundColor:"transparent",...a.color!=="inherit"&&{...a.color==="grey"?{borderColor:(e.vars||e).palette.grey[400]}:{borderColor:(e.vars||e).palette[a.color].main}}}})),qA=Je.forwardRef(function(e,n){const r=vs({props:e,name:"MuiTimelineDot"}),{className:o,color:c="grey",variant:f="filled",...d}=r,m={...r,color:c,variant:f},p=XA(m);return Z.jsx(WA,{className:ga(p.root,o),ownerState:m,ref:n,...d})}),jA=Ya("MuiBox",["root"]),YA=Gy(),ZA=JT({themeId:Tm,defaultTheme:YA,defaultClassName:jA.root,generateClassName:Dy.generate});function KA({title:a,description:e,duration:n,showTime:r=!0,refProp:o}){return Z.jsxs(PA,{className:"timeline-item",ref:o,children:[r&&Z.jsx(ky,{className:"timeline-time",variant:"body2"}),Z.jsxs(zA,{children:[Z.jsx(lx,{className:"timeline-connector"}),Z.jsx(qA,{variant:"outlined",className:"timeline-dot"}),Z.jsx(lx,{className:"timeline-connector"})]}),Z.jsx(CA,{className:"timeline-content",children:Z.jsxs(ZA,{className:"glass-card",children:[Z.jsx(kl,{variant:"h6",className:"timeline-title",children:Z.jsx("h3",{className:"inknut-antiqua-bold",children:a})}),n&&Z.jsx(kl,{className:"timeline-title",children:Z.jsx("h4",{className:"inknut-antiqua-medium",children:n})}),Z.jsx(kl,{className:"timeline-description",children:Z.jsx("h4",{className:"inknut-antiqua-regular",children:e})})]})})]})}function $A(){const a=Je.useRef([]),e=[{title:"Eat",description:"Sample description text...Sample description text...Sample description text...",duration:"Jan 2025 - Dec 2026"},{title:"Code",description:"Because it's awesome!"},{title:"Sleep",description:"Because you need rest"},{title:"Repeat",description:"Because this is the life you love!"}];return Je.useEffect(()=>{const n=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&(o.target.classList.add("visible"),n.unobserve(o.target))})},{threshold:.2});return a.current.forEach(r=>r&&n.observe(r)),()=>n.disconnect()},[]),Z.jsx(pA,{position:"alternate",className:"timeline-root",children:e.map((n,r)=>Z.jsx(KA,{refProp:o=>a.current[r]=o,title:n.title,description:n.description,duration:n.duration},r))})}function QA(){return Z.jsxs("div",{class:"experience-div",children:[Z.jsx("h1",{style:{fontFamily:"Aquire"},className:"experience-title",children:"Experience"}),Z.jsx($A,{})]})}function Vh({inst_name:a,board:e,degree_name:n,cgpa:r,percantage:o,start:c,end:f,inst_img:d,img_setting:m,img_type:p}){return Z.jsxs("div",{className:"ed-card",children:[Z.jsx("div",{className:"ed-right-side",children:Z.jsx("img",{className:"inst-img"+p,src:d,alt:a,style:m?{width:"20rem"}:{}})}),Z.jsxs("div",{className:"ed-left-side libertinus-serif-regular",children:[Z.jsx("h2",{className:"ed-inst libertinus-serif-bold",children:a}),Z.jsx("p",{className:"board",children:e}),Z.jsx("p",{className:"degreeName",children:n})]}),Z.jsxs("div",{className:"ed-mid-side libertinus-serif-bold",children:[Z.jsxs("span",{className:"ed-duration",children:[c,f&&Z.jsxs(Z.Fragment,{children:["–",f]})]}),Z.jsxs("div",{className:"ed-score",children:[r&&Z.jsxs("span",{children:["CGPA: ",Z.jsx("strong",{children:r})]}),o&&Z.jsx("span",{children:Z.jsxs("strong",{children:[o,"%"]})})]})]})]})}function JA(){return Z.jsxs("div",{className:"Education",children:[Z.jsx(Vh,{inst_name:"VIT Bhopal University",degree_name:"Computer Science and Engineering",board:"Bachelor in Technology",cgpa:"9.46",start:"2023",end:"2027",inst_img:"VitBhopalImage2.png",img_setting:"small",img_type:"large"}),Z.jsx(Vh,{inst_name:"Adarsh World School",board:"Central Board Of Secondary Education",degree_name:"Senior Secondary Examination (Class XII)",percantage:"93.5",start:"2023",inst_img:"CBSE_new_logo.svg.png",img_type:"small"}),Z.jsx(Vh,{inst_name:"Adarsh World School",board:"Central Board Of Secondary Education",degree_name:"Secondary Examination (Class X)",percantage:"97.4",start:"2021",inst_img:"CBSE_new_logo.svg.png",img_type:"small"})]})}function eC({tech:a}){return Z.jsx("span",{className:"tech-element glass-tech google-sans-code",children:a})}function tC({title:a,image:e,github:n,live:r,tech:o=[],desc:c,date:f,status:d,learned:m,role:p}){const[v,g]=Je.useState(!1);return Z.jsx("div",{className:`card ${v?"flipped":""}`,onClick:()=>g(!v),children:Z.jsxs("div",{className:"card-inner",children:[Z.jsx("div",{className:"card-front",style:{backgroundImage:`url(${e})`},children:Z.jsxs("div",{className:"overlay glass-overlay",children:[Z.jsxs("div",{children:[Z.jsx("h3",{className:"limelight-regular projectTitle",style:{fontFamily:"Aquire"},children:a}),Z.jsx("p",{className:"status-badge",children:d})]}),Z.jsx("div",{className:"tech",children:o.map((x,M)=>Z.jsx(eC,{tech:x},M))}),Z.jsxs("div",{className:"actions",children:[n&&Z.jsx("a",{href:n,target:"_blank",onClick:x=>x.stopPropagation(),className:"google-sans-code",children:"GitHub"}),r&&Z.jsx("a",{href:r,target:"_blank",onClick:x=>x.stopPropagation(),children:"Live"})]})]})}),Z.jsxs("div",{className:"card-back glass-back",children:[Z.jsx("h3",{className:"limelight-regular",children:a}),Z.jsx("p",{children:c}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Role:"})," ",p]}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Learned:"})," ",m]}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Date:"})," ",f]})]})]})})}const cx=[{title:"Indian States Game",categories:["Frontend"],status:null,learned:"Built interactive UI with Python, Tkinter, and JS logic to manage score and highlight missing states.",role:"Solo Project",image:"",github:"https://github.com/samarth96k/Indian-States-Game",live:"https://samarth96k.github.io/Indian-States-Game/",tech:["Python","HTML","CSS","JavaScript","Tkinter"],desc:"An interactive learning game that helps students learn Indian states, with score tracking and a final summary highlighting unguessed states in red.",date:"2023"},{title:"Driver Drowsiness Detection System",categories:["Machine Learning","Computer Vision"],status:null,learned:"Implemented real-time detection using OpenCV, YOLO, Vision Transformer, and integrated Google Health API for heartbeat analysis.",role:"Team Project",image:"/images/driver-drowsiness.png",github:"https://github.com/samarth96k/Driver_Drowsiness_Detection",live:null,tech:["Python","Machine Learning","OpenCV","YOLO","Vision Transformer"],desc:"A real-time driver drowsiness detection system using computer vision, ML models, and Google Health API data to analyze eye closure, yawning, and heart-rate patterns. Achieves ~92% accuracy and triggers alarms and emergency alerts during prolonged drowsiness.",date:"2023"},{title:"Portfolio Website",categories:["React","Frontend"],status:null,learned:"Built a responsive portfolio using React, improving component-based design and CSS styling skills.",role:"Solo Project",image:"/images/portfolio.png",github:"https://github.com/samarth96k/portfolio",live:"https://samarth96k.github.io/portfolio",tech:["React","JavaScript","CSS"],desc:"A modern, responsive personal portfolio showcasing my projects, skills, and experience, built with React for smooth UI interactions.",date:"2024"},{title:"Drum App",categories:["Frontend"],status:null,learned:"Practiced JS event listeners and DOM manipulation to create interactive audio-based UI.",role:"Solo Project",image:"/images/drum-app.png",github:"https://github.com/samarth96k/Drum-Game",live:"https://samarth96k.github.io/Drum-Game/",tech:["HTML","CSS","JavaScript"],desc:"A simple yet impactful frontend project that simulates a virtual drum kit using clicks and keyboard events. Built to practice JS fundamentals like event listeners and DOM interactions, and boosted my confidence in frontend development.",date:"2023"},{title:"CGPA Calculator App",categories:["JavaScript","Frontend"],status:null,learned:"Handled edge cases like missing grades/credits while computing results, improving logic and DOM manipulation skills.",role:"Solo Project",image:"/images/cgpa-calculator.png",github:"https://github.com/samarth96k/cgpa-calc-test",live:"https://samarth96k.github.io/cgpa-calc-test/",tech:["HTML","CSS","JavaScript"],desc:"A browser-based CGPA calculator that handles edge cases like missing grades or credits while computing results accurately. Built with clean JS logic to ensure seamless validation and error handling.",date:"2025"},{title:"Blog Project",categories:["Full Stack","JavaScript"],status:null,learned:"Implemented dynamic views with Node.js, Express, and EJS. Learned modal-based UI and prepared for multi-user authentication.",role:"Solo Project",image:"/images/blog-project.png",github:"https://github.com/samarth96k/Blog-Project",live:null,tech:["HTML","CSS","JavaScript","Node.js","Express","EJS"],desc:"A full-stack blogging platform built with Node.js, Express, and EJS, featuring dynamic views and a modal-based interface for creating new posts. Designed to refine backend fundamentals and frontend skills, with upcoming support for multi-user authentication.",date:"2025"}];function nC(){const[a,e]=Je.useState("All"),n=Je.useRef([]),r=a==="All"?cx:cx.filter(o=>o.categories.includes(a));return Je.useEffect(()=>{const o=new IntersectionObserver(c=>{c.forEach(f=>{f.isIntersecting&&(f.target.classList.add("visible"),o.unobserve(f.target))})},{threshold:.2});return n.current.forEach(c=>c&&o.observe(c)),()=>o.disconnect()},[r]),Z.jsxs("div",{className:"projects-container glass-section",children:[Z.jsx("div",{className:"projectContainerTitle",style:{fontFamily:"Aquire-bold",fontSize:"50px"},children:"My Projects Archive"}),Z.jsx("div",{className:"filters glass-filters inknut-antiqua-light",style:{fontSize:"12px"},children:["All","React","JavaScript","Frontend","Machine Learning","Full Stack"].map(o=>Z.jsx("button",{className:a===o?"active":"",onClick:()=>e(o),children:o},o))}),Z.jsx("p",{className:"libertinus-serif-regular-italic hint-text",children:"(Tap on the cards for more information)"}),Z.jsx("div",{className:"project-grid",children:r.map((o,c)=>Z.jsx("div",{ref:f=>n.current[c]=f,className:"fade-card",children:Z.jsx(tC,{title:o.title,image:o.image,github:o.github,live:o.live,tech:o.tech,desc:o.desc,date:o.date,categories:o.categories,status:o.status,learned:o.learned,role:o.role})},c))})]})}class ic{constructor(e=0,n="Network Error"){this.status=e,this.text=n}}const iC=()=>{if(!(typeof localStorage>"u"))return{get:a=>Promise.resolve(localStorage.getItem(a)),set:(a,e)=>Promise.resolve(localStorage.setItem(a,e)),remove:a=>Promise.resolve(localStorage.removeItem(a))}},Gn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:iC()},Fm=a=>a?typeof a=="string"?{publicKey:a}:a.toString()==="[object Object]"?a:{}:{},aC=(a,e="https://api.emailjs.com")=>{if(!a)return;const n=Fm(a);Gn.publicKey=n.publicKey,Gn.blockHeadless=n.blockHeadless,Gn.storageProvider=n.storageProvider,Gn.blockList=n.blockList,Gn.limitRate=n.limitRate,Gn.origin=n.origin||e},Xy=async(a,e,n={})=>{const r=await fetch(Gn.origin+a,{method:"POST",headers:n,body:e}),o=await r.text(),c=new ic(r.status,o);if(r.ok)return c;throw c},Wy=(a,e,n)=>{if(!a||typeof a!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},rC=a=>{if(a&&a.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},qy=a=>a.webdriver||!a.languages||a.languages.length===0,jy=()=>new ic(451,"Unavailable For Headless Browser"),sC=(a,e)=>{if(!Array.isArray(a))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},oC=a=>!a.list?.length||!a.watchVariable,lC=(a,e)=>a instanceof FormData?a.get(e):a[e],Yy=(a,e)=>{if(oC(a))return!1;sC(a.list,a.watchVariable);const n=lC(e,a.watchVariable);return typeof n!="string"?!1:a.list.includes(n)},Zy=()=>new ic(403,"Forbidden"),cC=(a,e)=>{if(typeof a!="number"||a<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},uC=async(a,e,n)=>{const r=Number(await n.get(a)||0);return e-Date.now()+r},Ky=async(a,e,n)=>{if(!e.throttle||!n)return!1;cC(e.throttle,e.id);const r=e.id||a;return await uC(r,e.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},$y=()=>new ic(429,"Too Many Requests"),fC=async(a,e,n,r)=>{const o=Fm(r),c=o.publicKey||Gn.publicKey,f=o.blockHeadless||Gn.blockHeadless,d=o.storageProvider||Gn.storageProvider,m={...Gn.blockList,...o.blockList},p={...Gn.limitRate,...o.limitRate};return f&&qy(navigator)?Promise.reject(jy()):(Wy(c,a,e),rC(n),n&&Yy(m,n)?Promise.reject(Zy()):await Ky(location.pathname,p,d)?Promise.reject($y()):Xy("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:c,service_id:a,template_id:e,template_params:n}),{"Content-type":"application/json"}))},dC=a=>{if(!a||a.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},hC=a=>typeof a=="string"?document.querySelector(a):a,pC=async(a,e,n,r)=>{const o=Fm(r),c=o.publicKey||Gn.publicKey,f=o.blockHeadless||Gn.blockHeadless,d=Gn.storageProvider||o.storageProvider,m={...Gn.blockList,...o.blockList},p={...Gn.limitRate,...o.limitRate};if(f&&qy(navigator))return Promise.reject(jy());const v=hC(n);Wy(c,a,e),dC(v);const g=new FormData(v);return Yy(m,g)?Promise.reject(Zy()):await Ky(location.pathname,p,d)?Promise.reject($y()):(g.append("lib_version","4.4.1"),g.append("service_id",a),g.append("template_id",e),g.append("user_id",c),Xy("/api/v1.0/email/send-form",g))},mC={init:aC,send:fC,sendForm:pC,EmailJSResponseStatus:ic};function gC(){const[a,e]=Je.useState({fullName:"",email:"",enquiryType:"General_Enquiry",phone:"",message:""}),n=c=>{e({...a,[c.target.name]:c.target.value})},r=()=>{mC.send("service_uxottht","template_x4fbtgh",a,"E3TN8dbhMocOktNw5").then(m=>{alert("Message sent successfully! ✅"),e({fullName:"",email:"",enquiryType:"General_Enquiry",phone:"",message:""})}).catch(m=>{alert("Failed to send message. ❌ Try again later."),console.error(m)})},o=()=>{const c=encodeURIComponent(`Name: ${a.fullName}
Email: ${a.email}
Phone: ${a.phone}
Enquiry Type: ${a.enquiryType}

Message:
${a.message}`);window.open(`https://wa.me/919773959744?text=${c}`,"_blank")};return Z.jsx("div",{className:"contact-form",children:Z.jsxs("form",{onSubmit:c=>c.preventDefault(),children:[Z.jsx("input",{type:"text",name:"fullName",placeholder:"Full Name",value:a.fullName,onChange:n,required:!0}),Z.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:a.email,onChange:n,required:!0}),Z.jsxs("select",{name:"enquiryType",value:a.enquiryType,onChange:n,children:[Z.jsx("option",{value:"General_Enquiry",children:"General Enquiry"}),Z.jsx("option",{value:"Collaboration_Request",children:"Collaboration Request"}),Z.jsx("option",{value:"Feedback",children:"Feedback"}),Z.jsx("option",{value:"Bug_Report",children:"Bug Report"})]}),Z.jsx("input",{type:"text",name:"phone",placeholder:"Phone Number",value:a.phone,onChange:n}),Z.jsx("textarea",{name:"message",placeholder:"Your Message",rows:"4",value:a.message,onChange:n,required:!0}),Z.jsxs("div",{className:"contact-buttons",children:[Z.jsx("button",{type:"button",onClick:r,children:"Send via Email"}),Z.jsx("button",{type:"button",onClick:o,children:"Send via WhatsApp"})]})]})})}function vC(){return Z.jsxs("div",{children:[Z.jsx("div",{className:"contact-top",style:{fontFamily:"Aquire"},children:"Let's Connect"}),Z.jsxs("div",{className:"contact-div",children:[Z.jsx("div",{className:"contact-left",children:Z.jsx(gC,{})}),Z.jsxs("div",{className:"contact-right",children:[Z.jsx("h2",{className:"contact-heading",style:{fontFamily:"Aquire-Light"},children:"Get in touch"}),Z.jsxs("div",{className:"contact-item-wrapper",children:[Z.jsx("span",{className:"contact-label inknut-antiqua-medium",children:"Email"}),Z.jsx("a",{className:"contact-item",children:"Samarthkhandelwal880@gmail.com"})]}),Z.jsxs("div",{className:"contact-item-wrapper",children:[Z.jsx("span",{className:"contact-label inknut-antiqua-medium inknut-antiqua-medium",children:"Phone"}),Z.jsx("a",{href:"tel:+919773959744",className:"contact-item",children:"+91 97739 59744"})]}),Z.jsxs("div",{className:"contact-item-wrapper",children:[Z.jsx("span",{className:"contact-label inknut-antiqua-medium",children:"Location"}),Z.jsx("div",{className:"contact-item inknut-antiqua-medium",children:"Delhi, India"})]}),Z.jsx("div",{className:"formaticons",children:Z.jsx(Em,{})})]})]})]})}function _C(){return Z.jsxs("div",{className:"footer",children:[Z.jsx("div",{className:"footer-line"}),Z.jsxs("div",{className:"footer-top",children:[Z.jsx("div",{className:"mid-topbar",children:Z.jsx("p",{className:"topbar-name cedarville-cursive-regular",children:"Samarth Khandelwal"})}),Z.jsx("div",{className:"footer-icons",children:Z.jsx(Em,{})})]}),Z.jsx("div",{className:"footer-bottom inknut-antiqua-medium",children:"Made With ❤️ by Samarth!"})]})}const Bm="182",xC=0,ux=1,yC=2,Zu=1,SC=2,zl=3,Ur=0,ai=1,Ga=2,Va=0,bo=1,Rp=2,fx=3,dx=4,bC=5,os=100,MC=101,EC=102,TC=103,AC=104,CC=200,RC=201,wC=202,DC=203,wp=204,Dp=205,UC=206,NC=207,LC=208,OC=209,PC=210,FC=211,BC=212,IC=213,zC=214,Up=0,Np=1,Lp=2,To=3,Op=4,Pp=5,Fp=6,Bp=7,Qy=0,HC=1,GC=2,da=0,Jy=1,eS=2,tS=3,nS=4,iS=5,aS=6,rS=7,sS=300,gs=301,Ao=302,Ip=303,zp=304,Ef=306,Hp=1e3,vi=1001,Gp=1002,Vn=1003,VC=1004,bu=1005,Mn=1006,kh=1007,us=1008,Li=1009,oS=1010,lS=1011,Zl=1012,Im=1013,ha=1014,Yi=1015,pa=1016,zm=1017,Hm=1018,Kl=1020,cS=35902,uS=35899,fS=1021,dS=1022,Oi=1023,Wa=1026,fs=1027,hS=1028,Gm=1029,Co=1030,Vm=1031,km=1033,Ku=33776,$u=33777,Qu=33778,Ju=33779,Vp=35840,kp=35841,Xp=35842,Wp=35843,qp=36196,jp=37492,Yp=37496,Zp=37488,Kp=37489,$p=37490,Qp=37491,Jp=37808,em=37809,tm=37810,nm=37811,im=37812,am=37813,rm=37814,sm=37815,om=37816,lm=37817,cm=37818,um=37819,fm=37820,dm=37821,hm=36492,pm=36494,mm=36495,gm=36283,vm=36284,_m=36285,xm=36286,kC=3200,XC=0,WC=1,Cr="",Ui="srgb",Ro="srgb-linear",rf="linear",Wt="srgb",ro=7680,hx=519,qC=512,jC=513,YC=514,Xm=515,ZC=516,KC=517,Wm=518,$C=519,px=35044,mx="300 es",ua=2e3,sf=2001;function pS(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function of(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function QC(){const a=of("canvas");return a.style.display="block",a}const gx={};function vx(...a){const e="THREE."+a.shift();console.log(e,...a)}function rt(...a){const e="THREE."+a.shift();console.warn(e,...a)}function Ut(...a){const e="THREE."+a.shift();console.error(e,...a)}function $l(...a){const e=a.join(" ");e in gx||(gx[e]=!0,rt(...a))}function JC(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}class Uo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xh=Math.PI/180,ym=180/Math.PI;function ac(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wn[a&255]+Wn[a>>8&255]+Wn[a>>16&255]+Wn[a>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]).toLowerCase()}function Et(a,e,n){return Math.max(e,Math.min(n,a))}function e2(a,e){return(a%e+e)%e}function Wh(a,e,n){return(1-n)*a+n*e}function wl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ii(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,n=0){ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*o+e.x,this.y=c*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rc{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,f,d){let m=r[o+0],p=r[o+1],v=r[o+2],g=r[o+3],x=c[f+0],M=c[f+1],T=c[f+2],E=c[f+3];if(d<=0){e[n+0]=m,e[n+1]=p,e[n+2]=v,e[n+3]=g;return}if(d>=1){e[n+0]=x,e[n+1]=M,e[n+2]=T,e[n+3]=E;return}if(g!==E||m!==x||p!==M||v!==T){let b=m*x+p*M+v*T+g*E;b<0&&(x=-x,M=-M,T=-T,E=-E,b=-b);let y=1-d;if(b<.9995){const P=Math.acos(b),B=Math.sin(P);y=Math.sin(y*P)/B,d=Math.sin(d*P)/B,m=m*y+x*d,p=p*y+M*d,v=v*y+T*d,g=g*y+E*d}else{m=m*y+x*d,p=p*y+M*d,v=v*y+T*d,g=g*y+E*d;const P=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=P,p*=P,v*=P,g*=P}}e[n]=m,e[n+1]=p,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,o,c,f){const d=r[o],m=r[o+1],p=r[o+2],v=r[o+3],g=c[f],x=c[f+1],M=c[f+2],T=c[f+3];return e[n]=d*T+v*g+m*M-p*x,e[n+1]=m*T+v*x+p*g-d*M,e[n+2]=p*T+v*M+d*x-m*g,e[n+3]=v*T-d*g-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(o/2),g=d(c/2),x=m(r/2),M=m(o/2),T=m(c/2);switch(f){case"XYZ":this._x=x*v*g+p*M*T,this._y=p*M*g-x*v*T,this._z=p*v*T+x*M*g,this._w=p*v*g-x*M*T;break;case"YXZ":this._x=x*v*g+p*M*T,this._y=p*M*g-x*v*T,this._z=p*v*T-x*M*g,this._w=p*v*g+x*M*T;break;case"ZXY":this._x=x*v*g-p*M*T,this._y=p*M*g+x*v*T,this._z=p*v*T+x*M*g,this._w=p*v*g-x*M*T;break;case"ZYX":this._x=x*v*g-p*M*T,this._y=p*M*g+x*v*T,this._z=p*v*T-x*M*g,this._w=p*v*g+x*M*T;break;case"YZX":this._x=x*v*g+p*M*T,this._y=p*M*g+x*v*T,this._z=p*v*T-x*M*g,this._w=p*v*g-x*M*T;break;case"XZY":this._x=x*v*g-p*M*T,this._y=p*M*g-x*v*T,this._z=p*v*T+x*M*g,this._w=p*v*g+x*M*T;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],f=n[1],d=n[5],m=n[9],p=n[2],v=n[6],g=n[10],x=r+d+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-o)*M}else if(r>d&&r>g){const M=2*Math.sqrt(1+r-d-g);this._w=(v-m)/M,this._x=.25*M,this._y=(o+f)/M,this._z=(c+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-r-g);this._w=(c-p)/M,this._x=(o+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-r-d);this._w=(f-o)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,f=e._w,d=n._x,m=n._y,p=n._z,v=n._w;return this._x=r*v+f*d+o*p-c*m,this._y=o*v+f*m+c*d-r*p,this._z=c*v+f*p+r*m-o*d,this._w=f*v-r*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,f=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,f=-f,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,n=Math.sin(n*p)/v,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,n=0,r=0){ue.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_x.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_x.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*o-d*r),v=2*(d*n-c*o),g=2*(c*r-f*n);return this.x=n+m*p+f*g-d*v,this.y=r+m*v+d*p-c*g,this.z=o+m*g+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,f=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*f-r*m,this.z=r*d-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qh.copy(this).projectOnVector(e),this.sub(qh)}reflect(e){return this.sub(qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qh=new ue,_x=new rc;class ht{constructor(e,n,r,o,c,f,d,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,d,m,p)}set(e,n,r,o,c,f,d,m,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=n,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],v=r[4],g=r[7],x=r[2],M=r[5],T=r[8],E=o[0],b=o[3],y=o[6],P=o[1],B=o[4],U=o[7],z=o[2],L=o[5],O=o[8];return c[0]=f*E+d*P+m*z,c[3]=f*b+d*B+m*L,c[6]=f*y+d*U+m*O,c[1]=p*E+v*P+g*z,c[4]=p*b+v*B+g*L,c[7]=p*y+v*U+g*O,c[2]=x*E+M*P+T*z,c[5]=x*b+M*B+T*L,c[8]=x*y+M*U+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return n*f*v-n*d*p-r*c*v+r*d*m+o*c*p-o*f*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=v*f-d*p,x=d*m-v*c,M=p*c-f*m,T=n*g+r*x+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=g*E,e[1]=(o*p-v*r)*E,e[2]=(d*r-o*f)*E,e[3]=x*E,e[4]=(v*n-o*m)*E,e[5]=(o*c-d*n)*E,e[6]=M*E,e[7]=(r*m-p*n)*E,e[8]=(f*n-r*c)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*d)+f+e,-o*p,o*m,-o*(-p*f+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(jh.makeScale(e,n)),this}rotate(e){return this.premultiply(jh.makeRotation(-e)),this}translate(e,n){return this.premultiply(jh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jh=new ht,xx=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yx=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t2(){const a={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Wt&&(o.r=ka(o.r),o.g=ka(o.g),o.b=ka(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Wt&&(o.r=Mo(o.r),o.g=Mo(o.g),o.b=Mo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Cr?rf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return $l("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return $l("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Ro]:{primaries:e,whitePoint:r,transfer:rf,toXYZ:xx,fromXYZ:yx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ui},outputColorSpaceConfig:{drawingBufferColorSpace:Ui}},[Ui]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:xx,fromXYZ:yx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ui}}}),a}const Rt=t2();function ka(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Mo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let so;class n2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{so===void 0&&(so=of("canvas")),so.width=e.width,so.height=e.height;const o=so.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=so}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=of("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=ka(c[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ka(n[r]/255)*255):n[r]=ka(n[r]);return{data:n,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let i2=0;class qm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i2++}),this.uuid=ac(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,d=o.length;f<d;f++)o[f].isDataTexture?c.push(Yh(o[f].image)):c.push(Yh(o[f]))}else c=Yh(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Yh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?n2.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let a2=0;const Zh=new ue;class Kn extends Uo{constructor(e=Kn.DEFAULT_IMAGE,n=Kn.DEFAULT_MAPPING,r=vi,o=vi,c=Mn,f=us,d=Oi,m=Li,p=Kn.DEFAULT_ANISOTROPY,v=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a2++}),this.uuid=ac(),this.name="",this.source=new qm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zh).x}get height(){return this.source.getSize(Zh).y}get depth(){return this.source.getSize(Zh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){rt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){rt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hp:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Gp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hp:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Gp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=sS;Kn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,n=0,r=0,o=1){fn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,p=m[0],v=m[4],g=m[8],x=m[1],M=m[5],T=m[9],E=m[2],b=m[6],y=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-E)<.01&&Math.abs(T-b)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+E)<.1&&Math.abs(T+b)<.1&&Math.abs(p+M+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const B=(p+1)/2,U=(M+1)/2,z=(y+1)/2,L=(v+x)/4,O=(g+E)/4,Q=(T+b)/4;return B>U&&B>z?B<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(B),o=L/r,c=O/r):U>z?U<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(U),r=L/o,c=Q/o):z<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(z),r=O/c,o=Q/c),this.set(r,o,c,n),this}let P=Math.sqrt((b-T)*(b-T)+(g-E)*(g-E)+(x-v)*(x-v));return Math.abs(P)<.001&&(P=1),this.x=(b-T)/P,this.y=(g-E)/P,this.z=(x-v)/P,this.w=Math.acos((p+M+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this.w=Et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this.w=Et(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r2 extends Uo{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new fn(0,0,e,n),this.scissorTest=!1,this.viewport=new fn(0,0,e,n);const o={width:e,height:n,depth:r.depth},c=new Kn(o);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new qm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends r2{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class mS extends Kn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class s2 extends Kn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sc{constructor(e=new ue(1/0,1/0,1/0),n=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ki.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ki.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ki.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ki):ki.fromBufferAttribute(c,f),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mu.copy(r.boundingBox)),Mu.applyMatrix4(e.matrixWorld),this.union(Mu)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dl),Eu.subVectors(this.max,Dl),oo.subVectors(e.a,Dl),lo.subVectors(e.b,Dl),co.subVectors(e.c,Dl),Sr.subVectors(lo,oo),br.subVectors(co,lo),es.subVectors(oo,co);let n=[0,-Sr.z,Sr.y,0,-br.z,br.y,0,-es.z,es.y,Sr.z,0,-Sr.x,br.z,0,-br.x,es.z,0,-es.x,-Sr.y,Sr.x,0,-br.y,br.x,0,-es.y,es.x,0];return!Kh(n,oo,lo,co,Eu)||(n=[1,0,0,0,1,0,0,0,1],!Kh(n,oo,lo,co,Eu))?!1:(Tu.crossVectors(Sr,br),n=[Tu.x,Tu.y,Tu.z],Kh(n,oo,lo,co,Eu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fa=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],ki=new ue,Mu=new sc,oo=new ue,lo=new ue,co=new ue,Sr=new ue,br=new ue,es=new ue,Dl=new ue,Eu=new ue,Tu=new ue,ts=new ue;function Kh(a,e,n,r,o){for(let c=0,f=a.length-3;c<=f;c+=3){ts.fromArray(a,c);const d=o.x*Math.abs(ts.x)+o.y*Math.abs(ts.y)+o.z*Math.abs(ts.z),m=e.dot(ts),p=n.dot(ts),v=r.dot(ts);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const o2=new sc,Ul=new ue,$h=new ue;class Tf{constructor(e=new ue,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):o2.setFromPoints(e).getCenter(r);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ul.subVectors(e,this.center);const n=Ul.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ul,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ul.copy(e.center).add($h)),this.expandByPoint(Ul.copy(e.center).sub($h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ba=new ue,Qh=new ue,Au=new ue,Mr=new ue,Jh=new ue,Cu=new ue,ep=new ue;class gS{constructor(e=new ue,n=new ue(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ba)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ba.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ba.copy(this.origin).addScaledVector(this.direction,n),Ba.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Qh.copy(e).add(n).multiplyScalar(.5),Au.copy(n).sub(e).normalize(),Mr.copy(this.origin).sub(Qh);const c=e.distanceTo(n)*.5,f=-this.direction.dot(Au),d=Mr.dot(this.direction),m=-Mr.dot(Au),p=Mr.lengthSq(),v=Math.abs(1-f*f);let g,x,M,T;if(v>0)if(g=f*m-d,x=f*d-m,T=c*v,g>=0)if(x>=-T)if(x<=T){const E=1/v;g*=E,x*=E,M=g*(g+f*x+2*d)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x<=-T?(g=Math.max(0,-(-f*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p):x<=T?(g=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(g=Math.max(0,-(f*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Qh).addScaledVector(Au,x),M}intersectSphere(e,n){Ba.subVectors(e.center,this.origin);const r=Ba.dot(this.direction),o=Ba.dot(Ba)-r*r,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,f,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||c>o||((c>r||isNaN(r))&&(r=c),(f<o||isNaN(o))&&(o=f),g>=0?(d=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ba)!==null}intersectTriangle(e,n,r,o,c){Jh.subVectors(n,e),Cu.subVectors(r,e),ep.crossVectors(Jh,Cu);let f=this.direction.dot(ep),d;if(f>0){if(o)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Mr.subVectors(this.origin,e);const m=d*this.direction.dot(Cu.crossVectors(Mr,Cu));if(m<0)return null;const p=d*this.direction.dot(Jh.cross(Mr));if(p<0||m+p>f)return null;const v=-d*Mr.dot(ep);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,n,r,o,c,f,d,m,p,v,g,x,M,T,E,b){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,d,m,p,v,g,x,M,T,E,b)}set(e,n,r,o,c,f,d,m,p,v,g,x,M,T,E,b){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=o,y[1]=c,y[5]=f,y[9]=d,y[13]=m,y[2]=p,y[6]=v,y[10]=g,y[14]=x,y[3]=M,y[7]=T,y[11]=E,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/uo.setFromMatrixColumn(e,0).length(),c=1/uo.setFromMatrixColumn(e,1).length(),f=1/uo.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(o),p=Math.sin(o),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=f*v,M=f*g,T=d*v,E=d*g;n[0]=m*v,n[4]=-m*g,n[8]=p,n[1]=M+T*p,n[5]=x-E*p,n[9]=-d*m,n[2]=E-x*p,n[6]=T+M*p,n[10]=f*m}else if(e.order==="YXZ"){const x=m*v,M=m*g,T=p*v,E=p*g;n[0]=x+E*d,n[4]=T*d-M,n[8]=f*p,n[1]=f*g,n[5]=f*v,n[9]=-d,n[2]=M*d-T,n[6]=E+x*d,n[10]=f*m}else if(e.order==="ZXY"){const x=m*v,M=m*g,T=p*v,E=p*g;n[0]=x-E*d,n[4]=-f*g,n[8]=T+M*d,n[1]=M+T*d,n[5]=f*v,n[9]=E-x*d,n[2]=-f*p,n[6]=d,n[10]=f*m}else if(e.order==="ZYX"){const x=f*v,M=f*g,T=d*v,E=d*g;n[0]=m*v,n[4]=T*p-M,n[8]=x*p+E,n[1]=m*g,n[5]=E*p+x,n[9]=M*p-T,n[2]=-p,n[6]=d*m,n[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*p,T=d*m,E=d*p;n[0]=m*v,n[4]=E-x*g,n[8]=T*g+M,n[1]=g,n[5]=f*v,n[9]=-d*v,n[2]=-p*v,n[6]=M*g+T,n[10]=x-E*g}else if(e.order==="XZY"){const x=f*m,M=f*p,T=d*m,E=d*p;n[0]=m*v,n[4]=-g,n[8]=p*v,n[1]=x*g+E,n[5]=f*v,n[9]=M*g-T,n[2]=T*g-M,n[6]=d*v,n[10]=E*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l2,e,c2)}lookAt(e,n,r){const o=this.elements;return pi.subVectors(e,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Er.crossVectors(r,pi),Er.lengthSq()===0&&(Math.abs(r.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Er.crossVectors(r,pi)),Er.normalize(),Ru.crossVectors(pi,Er),o[0]=Er.x,o[4]=Ru.x,o[8]=pi.x,o[1]=Er.y,o[5]=Ru.y,o[9]=pi.y,o[2]=Er.z,o[6]=Ru.z,o[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],v=r[1],g=r[5],x=r[9],M=r[13],T=r[2],E=r[6],b=r[10],y=r[14],P=r[3],B=r[7],U=r[11],z=r[15],L=o[0],O=o[4],Q=o[8],C=o[12],D=o[1],k=o[5],A=o[9],W=o[13],q=o[2],ee=o[6],F=o[10],V=o[14],ne=o[3],be=o[7],Se=o[11],I=o[15];return c[0]=f*L+d*D+m*q+p*ne,c[4]=f*O+d*k+m*ee+p*be,c[8]=f*Q+d*A+m*F+p*Se,c[12]=f*C+d*W+m*V+p*I,c[1]=v*L+g*D+x*q+M*ne,c[5]=v*O+g*k+x*ee+M*be,c[9]=v*Q+g*A+x*F+M*Se,c[13]=v*C+g*W+x*V+M*I,c[2]=T*L+E*D+b*q+y*ne,c[6]=T*O+E*k+b*ee+y*be,c[10]=T*Q+E*A+b*F+y*Se,c[14]=T*C+E*W+b*V+y*I,c[3]=P*L+B*D+U*q+z*ne,c[7]=P*O+B*k+U*ee+z*be,c[11]=P*Q+B*A+U*F+z*Se,c[15]=P*C+B*W+U*V+z*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],f=e[1],d=e[5],m=e[9],p=e[13],v=e[2],g=e[6],x=e[10],M=e[14],T=e[3],E=e[7],b=e[11],y=e[15],P=m*M-p*x,B=d*M-p*g,U=d*x-m*g,z=f*M-p*v,L=f*x-m*v,O=f*g-d*v;return n*(E*P-b*B+y*U)-r*(T*P-b*z+y*L)+o*(T*B-E*z+y*O)-c*(T*U-E*L+b*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=e[9],x=e[10],M=e[11],T=e[12],E=e[13],b=e[14],y=e[15],P=g*b*p-E*x*p+E*m*M-d*b*M-g*m*y+d*x*y,B=T*x*p-v*b*p-T*m*M+f*b*M+v*m*y-f*x*y,U=v*E*p-T*g*p+T*d*M-f*E*M-v*d*y+f*g*y,z=T*g*m-v*E*m-T*d*x+f*E*x+v*d*b-f*g*b,L=n*P+r*B+o*U+c*z;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=P*O,e[1]=(E*x*c-g*b*c-E*o*M+r*b*M+g*o*y-r*x*y)*O,e[2]=(d*b*c-E*m*c+E*o*p-r*b*p-d*o*y+r*m*y)*O,e[3]=(g*m*c-d*x*c-g*o*p+r*x*p+d*o*M-r*m*M)*O,e[4]=B*O,e[5]=(v*b*c-T*x*c+T*o*M-n*b*M-v*o*y+n*x*y)*O,e[6]=(T*m*c-f*b*c-T*o*p+n*b*p+f*o*y-n*m*y)*O,e[7]=(f*x*c-v*m*c+v*o*p-n*x*p-f*o*M+n*m*M)*O,e[8]=U*O,e[9]=(T*g*c-v*E*c-T*r*M+n*E*M+v*r*y-n*g*y)*O,e[10]=(f*E*c-T*d*c+T*r*p-n*E*p-f*r*y+n*d*y)*O,e[11]=(v*d*c-f*g*c-v*r*p+n*g*p+f*r*M-n*d*M)*O,e[12]=z*O,e[13]=(v*E*o-T*g*o+T*r*x-n*E*x-v*r*b+n*g*b)*O,e[14]=(T*d*o-f*E*o-T*r*m+n*E*m+f*r*b-n*d*b)*O,e[15]=(f*g*o-v*d*o+v*r*m-n*g*m-f*r*x+n*d*x)*O,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,f=e.x,d=e.y,m=e.z,p=c*f,v=c*d;return this.set(p*f+r,p*d-o*m,p*m+o*d,0,p*d+o*m,v*d+r,v*m-o*f,0,p*m-o*d,v*m+o*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,f){return this.set(1,r,c,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,f=n._y,d=n._z,m=n._w,p=c+c,v=f+f,g=d+d,x=c*p,M=c*v,T=c*g,E=f*v,b=f*g,y=d*g,P=m*p,B=m*v,U=m*g,z=r.x,L=r.y,O=r.z;return o[0]=(1-(E+y))*z,o[1]=(M+U)*z,o[2]=(T-B)*z,o[3]=0,o[4]=(M-U)*L,o[5]=(1-(x+y))*L,o[6]=(b+P)*L,o[7]=0,o[8]=(T+B)*O,o[9]=(b-P)*O,o[10]=(1-(x+E))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let c=uo.set(o[0],o[1],o[2]).length();const f=uo.set(o[4],o[5],o[6]).length(),d=uo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),Xi.copy(this);const p=1/c,v=1/f,g=1/d;return Xi.elements[0]*=p,Xi.elements[1]*=p,Xi.elements[2]*=p,Xi.elements[4]*=v,Xi.elements[5]*=v,Xi.elements[6]*=v,Xi.elements[8]*=g,Xi.elements[9]*=g,Xi.elements[10]*=g,n.setFromRotationMatrix(Xi),r.x=c,r.y=f,r.z=d,this}makePerspective(e,n,r,o,c,f,d=ua,m=!1){const p=this.elements,v=2*c/(n-e),g=2*c/(r-o),x=(n+e)/(n-e),M=(r+o)/(r-o);let T,E;if(m)T=c/(f-c),E=f*c/(f-c);else if(d===ua)T=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===sf)T=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,f,d=ua,m=!1){const p=this.elements,v=2/(n-e),g=2/(r-o),x=-(n+e)/(n-e),M=-(r+o)/(r-o);let T,E;if(m)T=1/(f-c),E=f/(f-c);else if(d===ua)T=-2/(f-c),E=-(f+c)/(f-c);else if(d===sf)T=-1/(f-c),E=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const uo=new ue,Xi=new pn,l2=new ue(0,0,0),c2=new ue(1,1,1),Er=new ue,Ru=new ue,pi=new ue,Sx=new pn,bx=new rc;class qa{constructor(e=0,n=0,r=0,o=qa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],f=o[4],d=o[8],m=o[1],p=o[5],v=o[9],g=o[2],x=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Sx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sx,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bx.setFromEuler(this),this.setFromQuaternion(bx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qa.DEFAULT_ORDER="XYZ";class vS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u2=0;const Mx=new ue,fo=new rc,Ia=new pn,wu=new ue,Nl=new ue,f2=new ue,d2=new rc,Ex=new ue(1,0,0),Tx=new ue(0,1,0),Ax=new ue(0,0,1),Cx={type:"added"},h2={type:"removed"},ho={type:"childadded",child:null},tp={type:"childremoved",child:null};class ri extends Uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u2++}),this.uuid=ac(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ri.DEFAULT_UP.clone();const e=new ue,n=new qa,r=new rc,o=new ue(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pn},normalMatrix:{value:new ht}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fo.setFromAxisAngle(e,n),this.quaternion.multiply(fo),this}rotateOnWorldAxis(e,n){return fo.setFromAxisAngle(e,n),this.quaternion.premultiply(fo),this}rotateX(e){return this.rotateOnAxis(Ex,e)}rotateY(e){return this.rotateOnAxis(Tx,e)}rotateZ(e){return this.rotateOnAxis(Ax,e)}translateOnAxis(e,n){return Mx.copy(e).applyQuaternion(this.quaternion),this.position.add(Mx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ex,e)}translateY(e){return this.translateOnAxis(Tx,e)}translateZ(e){return this.translateOnAxis(Ax,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ia.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?wu.copy(e):wu.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ia.lookAt(Nl,wu,this.up):Ia.lookAt(wu,Nl,this.up),this.quaternion.setFromRotationMatrix(Ia),o&&(Ia.extractRotation(o.matrixWorld),fo.setFromRotationMatrix(Ia),this.quaternion.premultiply(fo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cx),ho.child=e,this.dispatchEvent(ho),ho.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(h2),tp.child=e,this.dispatchEvent(tp),tp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ia.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ia.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ia),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cx),ho.child=e,this.dispatchEvent(ho),ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nl,e,f2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nl,d2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),M=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function f(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ri.DEFAULT_UP=new ue(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new ue,za=new ue,np=new ue,Ha=new ue,po=new ue,mo=new ue,Rx=new ue,ip=new ue,ap=new ue,rp=new ue,sp=new fn,op=new fn,lp=new fn;class ji{constructor(e=new ue,n=new ue,r=new ue){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Wi.subVectors(e,n),o.cross(Wi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Wi.subVectors(o,n),za.subVectors(r,n),np.subVectors(e,n);const f=Wi.dot(Wi),d=Wi.dot(za),m=Wi.dot(np),p=za.dot(za),v=za.dot(np),g=f*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,M=(p*m-d*v)*x,T=(f*v-d*m)*x;return c.set(1-M-T,T,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ha)===null?!1:Ha.x>=0&&Ha.y>=0&&Ha.x+Ha.y<=1}static getInterpolation(e,n,r,o,c,f,d,m){return this.getBarycoord(e,n,r,o,Ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ha.x),m.addScaledVector(f,Ha.y),m.addScaledVector(d,Ha.z),m)}static getInterpolatedAttribute(e,n,r,o,c,f){return sp.setScalar(0),op.setScalar(0),lp.setScalar(0),sp.fromBufferAttribute(e,n),op.fromBufferAttribute(e,r),lp.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(sp,c.x),f.addScaledVector(op,c.y),f.addScaledVector(lp,c.z),f}static isFrontFacing(e,n,r,o){return Wi.subVectors(r,n),za.subVectors(e,n),Wi.cross(za).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),za.subVectors(this.a,this.b),Wi.cross(za).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ji.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return ji.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let f,d;po.subVectors(o,r),mo.subVectors(c,r),ip.subVectors(e,r);const m=po.dot(ip),p=mo.dot(ip);if(m<=0&&p<=0)return n.copy(r);ap.subVectors(e,o);const v=po.dot(ap),g=mo.dot(ap);if(v>=0&&g<=v)return n.copy(o);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),n.copy(r).addScaledVector(po,f);rp.subVectors(e,c);const M=po.dot(rp),T=mo.dot(rp);if(T>=0&&M<=T)return n.copy(c);const E=M*p-m*T;if(E<=0&&p>=0&&T<=0)return d=p/(p-T),n.copy(r).addScaledVector(mo,d);const b=v*T-M*g;if(b<=0&&g-v>=0&&M-T>=0)return Rx.subVectors(c,o),d=(g-v)/(g-v+(M-T)),n.copy(o).addScaledVector(Rx,d);const y=1/(b+E+x);return f=E*y,d=x*y,n.copy(r).addScaledVector(po,f).addScaledVector(mo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _S={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Du={h:0,s:0,l:0};function cp(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Bt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Rt.workingColorSpace){if(e=e2(e,1),n=Et(n,0,1),r=Et(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=cp(f,c,e+1/3),this.g=cp(f,c,e),this.b=cp(f,c,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,n=Ui){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],d=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ui){const r=_S[e.toLowerCase()];return r!==void 0?this.setHex(r,n):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ui){return Rt.workingToColorSpace(qn.copy(this),e),Math.round(Et(qn.r*255,0,255))*65536+Math.round(Et(qn.g*255,0,255))*256+Math.round(Et(qn.b*255,0,255))}getHexString(e=Ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(qn.copy(this),n);const r=qn.r,o=qn.g,c=qn.b,f=Math.max(r,o,c),d=Math.min(r,o,c);let m,p;const v=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=v<=.5?g/(f+d):g/(2-f-d),f){case r:m=(o-c)/g+(o<c?6:0);break;case o:m=(c-r)/g+2;break;case c:m=(r-o)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(qn.copy(this),n),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Ui){Rt.workingToColorSpace(qn.copy(this),e);const n=qn.r,r=qn.g,o=qn.b;return e!==Ui?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+n,Tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Tr),e.getHSL(Du);const r=Wh(Tr.h,Du.h,n),o=Wh(Tr.s,Du.s,n),c=Wh(Tr.l,Du.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new Bt;Bt.NAMES=_S;let p2=0;class oc extends Uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p2++}),this.uuid=ac(),this.name="",this.type="Material",this.blending=bo,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wp,this.blendDst=Dp,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){rt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){rt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(r.blending=this.blending),this.side!==Ur&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wp&&(r.blendSrc=this.blendSrc),this.blendDst!==Dp&&(r.blendDst=this.blendDst),this.blendEquation!==os&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ro&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ro&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ro&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(n){const c=o(e.textures),f=o(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xS extends oc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qa,this.combine=Qy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sn=new ue,Uu=new ct;let m2=0;class Ki{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=px,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Uu.fromBufferAttribute(this,n),Uu.applyMatrix3(e),this.setXY(n,Uu.x,Uu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=wl(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ii(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=wl(n,this.array)),n}setX(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=wl(n,this.array)),n}setY(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=wl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=wl(n,this.array)),n}setW(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ii(n,this.array),r=ii(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=ii(n,this.array),r=ii(r,this.array),o=ii(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=ii(n,this.array),r=ii(r,this.array),o=ii(o,this.array),c=ii(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==px&&(e.usage=this.usage),e}}class yS extends Ki{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class SS extends Ki{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class $i extends Ki{constructor(e,n,r){super(new Float32Array(e),n,r)}}let g2=0;const Di=new pn,up=new ri,go=new ue,mi=new sc,Ll=new sc,wn=new ue;class Qi extends Uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g2++}),this.uuid=ac(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pS(e)?SS:yS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,n,r){return Di.makeTranslation(e,n,r),this.applyMatrix4(Di),this}scale(e,n,r){return Di.makeScale(e,n,r),this.applyMatrix4(Di),this}lookAt(e){return up.lookAt(e),up.updateMatrix(),this.applyMatrix4(up.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const f=e[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new $i(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const r=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];Ll.setFromBufferAttribute(d),this.morphTargetsRelative?(wn.addVectors(mi.min,Ll.min),mi.expandByPoint(wn),wn.addVectors(mi.max,Ll.max),mi.expandByPoint(wn)):(mi.expandByPoint(Ll.min),mi.expandByPoint(Ll.max))}mi.getCenter(r);let o=0;for(let c=0,f=e.count;c<f;c++)wn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(wn));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)wn.fromBufferAttribute(d,p),m&&(go.fromBufferAttribute(e,p),wn.add(go)),o=Math.max(o,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ki(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<r.count;Q++)d[Q]=new ue,m[Q]=new ue;const p=new ue,v=new ue,g=new ue,x=new ct,M=new ct,T=new ct,E=new ue,b=new ue;function y(Q,C,D){p.fromBufferAttribute(r,Q),v.fromBufferAttribute(r,C),g.fromBufferAttribute(r,D),x.fromBufferAttribute(c,Q),M.fromBufferAttribute(c,C),T.fromBufferAttribute(c,D),v.sub(p),g.sub(p),M.sub(x),T.sub(x);const k=1/(M.x*T.y-T.x*M.y);isFinite(k)&&(E.copy(v).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(k),b.copy(g).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(k),d[Q].add(E),d[C].add(E),d[D].add(E),m[Q].add(b),m[C].add(b),m[D].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let Q=0,C=P.length;Q<C;++Q){const D=P[Q],k=D.start,A=D.count;for(let W=k,q=k+A;W<q;W+=3)y(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const B=new ue,U=new ue,z=new ue,L=new ue;function O(Q){z.fromBufferAttribute(o,Q),L.copy(z);const C=d[Q];B.copy(C),B.sub(z.multiplyScalar(z.dot(C))).normalize(),U.crossVectors(L,C);const k=U.dot(m[Q])<0?-1:1;f.setXYZW(Q,B.x,B.y,B.z,k)}for(let Q=0,C=P.length;Q<C;++Q){const D=P[Q],k=D.start,A=D.count;for(let W=k,q=k+A;W<q;W+=3)O(e.getX(W+0)),O(e.getX(W+1)),O(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ki(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new ue,c=new ue,f=new ue,d=new ue,m=new ue,p=new ue,v=new ue,g=new ue;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),E=e.getX(x+1),b=e.getX(x+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,E),f.fromBufferAttribute(n,b),v.subVectors(f,c),g.subVectors(o,c),v.cross(g),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),d.add(v),m.add(v),p.add(v),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(E,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let x=0,M=n.count;x<M;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,c),g.subVectors(o,c),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)wn.fromBufferAttribute(e,n),wn.normalize(),e.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,g=d.normalized,x=new p.constructor(m.length*v);let M=0,T=0;for(let E=0,b=m.length;E<b;E++){d.isInterleavedBufferAttribute?M=m[E]*d.data.stride+d.offset:M=m[E]*v;for(let y=0;y<v;y++)x[T++]=p[M++]}return new Ki(x,v,g)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qi,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,r);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const x=p[v],M=e(x,r);m.push(M)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];v.push(M.toJSON(e.data))}v.length>0&&(o[m]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(n))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,M=g.length;x<M;x++)v.push(g[x].clone(n));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wx=new pn,ns=new gS,Nu=new Tf,Dx=new ue,Lu=new ue,Ou=new ue,Pu=new ue,fp=new ue,Fu=new ue,Ux=new ue,Bu=new ue;class Pi extends ri{constructor(e=new Qi,n=new xS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Fu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&(fp.fromBufferAttribute(g,e),f?Fu.addScaledVector(fp,v):Fu.addScaledVector(fp.sub(n),v))}n.add(Fu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nu.copy(r.boundingSphere),Nu.applyMatrix4(c),ns.copy(e.ray).recast(e.near),!(Nu.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Nu,Dx)===null||ns.origin.distanceToSquared(Dx)>(e.far-e.near)**2))&&(wx.copy(c).invert(),ns.copy(e.ray).applyMatrix4(wx),!(r.boundingBox!==null&&ns.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ns)))}_computeIntersections(e,n,r){let o;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,E=x.length;T<E;T++){const b=x[T],y=f[b.materialIndex],P=Math.max(b.start,M.start),B=Math.min(d.count,Math.min(b.start+b.count,M.start+M.count));for(let U=P,z=B;U<z;U+=3){const L=d.getX(U),O=d.getX(U+1),Q=d.getX(U+2);o=Iu(this,y,e,r,p,v,g,L,O,Q),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),E=Math.min(d.count,M.start+M.count);for(let b=T,y=E;b<y;b+=3){const P=d.getX(b),B=d.getX(b+1),U=d.getX(b+2);o=Iu(this,f,e,r,p,v,g,P,B,U),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,E=x.length;T<E;T++){const b=x[T],y=f[b.materialIndex],P=Math.max(b.start,M.start),B=Math.min(m.count,Math.min(b.start+b.count,M.start+M.count));for(let U=P,z=B;U<z;U+=3){const L=U,O=U+1,Q=U+2;o=Iu(this,y,e,r,p,v,g,L,O,Q),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),E=Math.min(m.count,M.start+M.count);for(let b=T,y=E;b<y;b+=3){const P=b,B=b+1,U=b+2;o=Iu(this,f,e,r,p,v,g,P,B,U),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}}}function v2(a,e,n,r,o,c,f,d){let m;if(e.side===ai?m=r.intersectTriangle(f,c,o,!0,d):m=r.intersectTriangle(o,c,f,e.side===Ur,d),m===null)return null;Bu.copy(d),Bu.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(Bu);return p<n.near||p>n.far?null:{distance:p,point:Bu.clone(),object:a}}function Iu(a,e,n,r,o,c,f,d,m,p){a.getVertexPosition(d,Lu),a.getVertexPosition(m,Ou),a.getVertexPosition(p,Pu);const v=v2(a,e,n,r,Lu,Ou,Pu,Ux);if(v){const g=new ue;ji.getBarycoord(Ux,Lu,Ou,Pu,g),o&&(v.uv=ji.getInterpolatedAttribute(o,d,m,p,g,new ct)),c&&(v.uv1=ji.getInterpolatedAttribute(c,d,m,p,g,new ct)),f&&(v.normal=ji.getInterpolatedAttribute(f,d,m,p,g,new ue),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new ue,materialIndex:0};ji.getNormal(Lu,Ou,Pu,x.normal),v.face=x,v.barycoord=g}return v}class lc extends Qi{constructor(e=1,n=1,r=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:f};const d=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,M=0;T("z","y","x",-1,-1,r,n,e,f,c,0),T("z","y","x",1,-1,r,n,-e,f,c,1),T("x","z","y",1,1,e,r,n,o,f,2),T("x","z","y",1,-1,e,r,-n,o,f,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new $i(p,3)),this.setAttribute("normal",new $i(v,3)),this.setAttribute("uv",new $i(g,2));function T(E,b,y,P,B,U,z,L,O,Q,C){const D=U/O,k=z/Q,A=U/2,W=z/2,q=L/2,ee=O+1,F=Q+1;let V=0,ne=0;const be=new ue;for(let Se=0;Se<F;Se++){const I=Se*k-W;for(let oe=0;oe<ee;oe++){const _e=oe*D-A;be[E]=_e*P,be[b]=I*B,be[y]=q,p.push(be.x,be.y,be.z),be[E]=0,be[b]=0,be[y]=L>0?1:-1,v.push(be.x,be.y,be.z),g.push(oe/O),g.push(1-Se/Q),V+=1}}for(let Se=0;Se<Q;Se++)for(let I=0;I<O;I++){const oe=x+I+ee*Se,_e=x+I+ee*(Se+1),Ce=x+(I+1)+ee*(Se+1),He=x+(I+1)+ee*Se;m.push(oe,_e,He),m.push(_e,Ce,He),ne+=6}d.addGroup(M,ne,C),M+=ne,x+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wo(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Zn(a){const e={};for(let n=0;n<a.length;n++){const r=wo(a[n]);for(const o in r)e[o]=r[o]}return e}function _2(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function bS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const x2={clone:wo,merge:Zn};var y2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ma extends oc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y2,this.fragmentShader=S2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=_2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class lf extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new ue,Nx=new ct,Lx=new ct;class qi extends lf{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ym*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ym*2*Math.atan(Math.tan(Xh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,n){return this.getViewBounds(e,Nx,Lx),n.subVectors(Lx,Nx)}setViewOffset(e,n,r,o,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xh*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*o/m,n-=f.offsetY*r/p,o*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vo=-90,_o=1;class b2 extends ri{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new qi(vo,_o,e,n);o.layers=this.layers,this.add(o);const c=new qi(vo,_o,e,n);c.layers=this.layers,this.add(c);const f=new qi(vo,_o,e,n);f.layers=this.layers,this.add(f);const d=new qi(vo,_o,e,n);d.layers=this.layers,this.add(d);const m=new qi(vo,_o,e,n);m.layers=this.layers,this.add(m);const p=new qi(vo,_o,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,f,d,m]=n;for(const p of n)this.remove(p);if(e===ua)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===sf)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,f),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,m),e.setRenderTarget(r,4,o),e.render(n,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(g,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class MS extends Kn{constructor(e=[],n=gs,r,o,c,f,d,m,p,v){super(e,n,r,o,c,f,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ES extends Zi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new MS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new lc(5,5,5),c=new ma({name:"CubemapFromEquirect",uniforms:wo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ai,blending:Va});c.uniforms.tEquirect.value=n;const f=new Pi(o,c),d=n.minFilter;return n.minFilter===us&&(n.minFilter=Mn),new b2(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(c)}}class zu extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M2={type:"move"};class dp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const E of e.hand.values()){const b=n.getJointPose(E,r),y=this._getHandJoint(p,E);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(M2)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new zu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Ox extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qa,this.environmentIntensity=1,this.environmentRotation=new qa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class TS extends Kn{constructor(e=null,n=1,r=1,o,c,f,d,m,p=Vn,v=Vn,g,x){super(null,f,d,m,p,v,o,c,g,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hp=new ue,E2=new ue,T2=new ht;class ss{constructor(e=new ue(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=hp.subVectors(r,n).cross(E2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(hp),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||T2.getNormalMatrix(e),o=this.coplanarPoint(hp).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new Tf,A2=new ct(.5,.5),Hu=new ue;class AS{constructor(e=new ss,n=new ss,r=new ss,o=new ss,c=new ss,f=new ss){this.planes=[e,n,r,o,c,f]}set(e,n,r,o,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ua,r=!1){const o=this.planes,c=e.elements,f=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],M=c[7],T=c[8],E=c[9],b=c[10],y=c[11],P=c[12],B=c[13],U=c[14],z=c[15];if(o[0].setComponents(p-f,M-v,y-T,z-P).normalize(),o[1].setComponents(p+f,M+v,y+T,z+P).normalize(),o[2].setComponents(p+d,M+g,y+E,z+B).normalize(),o[3].setComponents(p-d,M-g,y-E,z-B).normalize(),r)o[4].setComponents(m,x,b,U).normalize(),o[5].setComponents(p-m,M-x,y-b,z-U).normalize();else if(o[4].setComponents(p-m,M-x,y-b,z-U).normalize(),n===ua)o[5].setComponents(p+m,M+x,y+b,z+U).normalize();else if(n===sf)o[5].setComponents(m,x,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const n=A2.distanceTo(e.center);return is.radius=.7071067811865476+n,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Hu.x=o.normal.x>0?e.max.x:e.min.x,Hu.y=o.normal.y>0?e.max.y:e.min.y,Hu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Hu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C2 extends oc{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cf=new ue,uf=new ue,Px=new pn,Ol=new gS,Gu=new Tf,pp=new ue,Fx=new ue;class R2 extends ri{constructor(e=new Qi,n=new C2){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)cf.fromBufferAttribute(n,o-1),uf.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=cf.distanceTo(uf);e.setAttribute("lineDistance",new $i(r,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gu.copy(r.boundingSphere),Gu.applyMatrix4(o),Gu.radius+=c,e.ray.intersectsSphere(Gu)===!1)return;Px.copy(o).invert(),Ol.copy(e.ray).applyMatrix4(Px);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const M=Math.max(0,f.start),T=Math.min(v.count,f.start+f.count);for(let E=M,b=T-1;E<b;E+=p){const y=v.getX(E),P=v.getX(E+1),B=Vu(this,e,Ol,m,y,P,E);B&&n.push(B)}if(this.isLineLoop){const E=v.getX(T-1),b=v.getX(M),y=Vu(this,e,Ol,m,E,b,T-1);y&&n.push(y)}}else{const M=Math.max(0,f.start),T=Math.min(x.count,f.start+f.count);for(let E=M,b=T-1;E<b;E+=p){const y=Vu(this,e,Ol,m,E,E+1,E);y&&n.push(y)}if(this.isLineLoop){const E=Vu(this,e,Ol,m,T-1,M,T-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Vu(a,e,n,r,o,c,f){const d=a.geometry.attributes.position;if(cf.fromBufferAttribute(d,o),uf.fromBufferAttribute(d,c),n.distanceSqToSegment(cf,uf,pp,Fx)>r)return;pp.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo(pp);if(!(p<e.near||p>e.far))return{distance:p,point:Fx.clone().applyMatrix4(a.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:a}}const Bx=new ue,Ix=new ue;class w2 extends R2{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)Bx.fromBufferAttribute(n,o),Ix.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Bx.distanceTo(Ix);e.setAttribute("lineDistance",new $i(r,1))}else rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ql extends Kn{constructor(e,n,r=ha,o,c,f,d=Vn,m=Vn,p,v=Wa,g=1){if(v!==Wa&&v!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:g};super(x,o,c,f,d,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class D2 extends Ql{constructor(e,n=ha,r=gs,o,c,f=Vn,d=Vn,m,p=Wa){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,n,r,o,c,f,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class CS extends Kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hs extends Qi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,f=n/2,d=Math.floor(r),m=Math.floor(o),p=d+1,v=m+1,g=e/d,x=n/m,M=[],T=[],E=[],b=[];for(let y=0;y<v;y++){const P=y*x-f;for(let B=0;B<p;B++){const U=B*g-c;T.push(U,-P,0),E.push(0,0,1),b.push(B/d),b.push(1-y/m)}}for(let y=0;y<m;y++)for(let P=0;P<d;P++){const B=P+p*y,U=P+p*(y+1),z=P+1+p*(y+1),L=P+1+p*y;M.push(B,U,L),M.push(U,z,L)}this.setIndex(M),this.setAttribute("position",new $i(T,3)),this.setAttribute("normal",new $i(E,3)),this.setAttribute("uv",new $i(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hl extends ma{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class U2 extends oc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N2 extends oc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class RS extends lf{constructor(e=-1,n=1,r=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,f=r+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class L2 extends qi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class O2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function zx(a,e,n,r){const o=P2(r);switch(n){case fS:return a*e;case hS:return a*e/o.components*o.byteLength;case Gm:return a*e/o.components*o.byteLength;case Co:return a*e*2/o.components*o.byteLength;case Vm:return a*e*2/o.components*o.byteLength;case dS:return a*e*3/o.components*o.byteLength;case Oi:return a*e*4/o.components*o.byteLength;case km:return a*e*4/o.components*o.byteLength;case Ku:case $u:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Qu:case Ju:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case kp:case Wp:return Math.max(a,16)*Math.max(e,8)/4;case Vp:case Xp:return Math.max(a,8)*Math.max(e,8)/2;case qp:case jp:case Zp:case Kp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Yp:case $p:case Qp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Jp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case em:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case tm:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case nm:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case im:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case am:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case rm:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case sm:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case om:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case lm:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case cm:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case um:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case fm:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case dm:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case hm:case pm:case mm:return Math.ceil(a/4)*Math.ceil(e/4)*16;case gm:case vm:return Math.ceil(a/4)*Math.ceil(e/4)*8;case _m:case xm:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function P2(a){switch(a){case Li:case oS:return{byteLength:1,components:1};case Zl:case lS:case pa:return{byteLength:2,components:1};case zm:case Hm:return{byteLength:2,components:4};case ha:case Im:case Yi:return{byteLength:4,components:1};case cS:case uS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bm}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bm);function wS(){let a=null,e=!1,n=null,r=null;function o(c,f){n(c,f),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function F2(a){const e=new WeakMap;function n(d,m){const p=d.array,v=d.usage,g=p.byteLength,x=a.createBuffer();a.bindBuffer(m,x),a.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=a.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=a.HALF_FLOAT:M=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=a.SHORT;else if(p instanceof Uint32Array)M=a.UNSIGNED_INT;else if(p instanceof Int32Array)M=a.INT;else if(p instanceof Int8Array)M=a.BYTE;else if(p instanceof Uint8Array)M=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const v=m.array,g=m.updateRanges;if(a.bindBuffer(p,d),g.length===0)a.bufferSubData(p,0,v);else{g.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<g.length;M++){const T=g[x],E=g[M];E.start<=T.start+T.count+1?T.count=Math.max(T.count,E.start+E.count-T.start):(++x,g[x]=E)}g.length=x+1;for(let M=0,T=g.length;M<T;M++){const E=g[M];a.bufferSubData(p,E.start*v.BYTES_PER_ELEMENT,v,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:f}}var B2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I2=`#ifdef USE_ALPHAHASH
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
#endif`,z2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k2=`#ifdef USE_AOMAP
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
#endif`,X2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W2=`#ifdef USE_BATCHING
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
#endif`,q2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K2=`#ifdef USE_IRIDESCENCE
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
#endif`,$2=`#ifdef USE_BUMPMAP
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
#endif`,Q2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sR=`#define PI 3.141592653589793
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
} // validated`,oR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lR=`vec3 transformedNormal = objectNormal;
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
#endif`,cR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hR="gl_FragColor = linearToOutputTexel( gl_FragColor );",pR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mR=`#ifdef USE_ENVMAP
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
#endif`,gR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vR=`#ifdef USE_ENVMAP
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
#endif`,_R=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xR=`#ifdef USE_ENVMAP
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
#endif`,yR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ER=`#ifdef USE_GRADIENTMAP
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
}`,TR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RR=`uniform bool receiveShadow;
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
#endif`,wR=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,DR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OR=`PhysicalMaterial material;
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
#endif`,PR=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,FR=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BR=`#if defined( RE_IndirectDiffuse )
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
#endif`,IR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qR=`#if defined( USE_POINTS_UV )
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
#endif`,jR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$R=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QR=`#ifdef USE_MORPHTARGETS
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
#endif`,JR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r3=`#ifdef USE_NORMALMAP
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
#endif`,s3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,x3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S3=`float getShadowMask() {
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
}`,b3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M3=`#ifdef USE_SKINNING
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
#endif`,E3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T3=`#ifdef USE_SKINNING
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
#endif`,A3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D3=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U3=`#ifdef USE_TRANSMISSION
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
#endif`,N3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B3=`uniform sampler2D t2D;
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
}`,I3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V3=`#include <common>
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
}`,k3=`#if DEPTH_PACKING == 3200
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
}`,X3=`#define DISTANCE
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
}`,W3=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,q3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y3=`uniform float scale;
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
}`,Z3=`uniform vec3 diffuse;
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
}`,K3=`#include <common>
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
}`,$3=`uniform vec3 diffuse;
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
}`,Q3=`#define LAMBERT
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
}`,J3=`#define LAMBERT
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
}`,ew=`#define MATCAP
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
}`,tw=`#define MATCAP
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
}`,nw=`#define NORMAL
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
}`,iw=`#define NORMAL
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
}`,aw=`#define PHONG
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
}`,rw=`#define PHONG
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
}`,sw=`#define STANDARD
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
}`,ow=`#define STANDARD
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
}`,lw=`#define TOON
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
}`,cw=`#define TOON
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
}`,uw=`uniform float size;
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
}`,fw=`uniform vec3 diffuse;
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
}`,dw=`#include <common>
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
}`,hw=`uniform vec3 color;
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
}`,pw=`uniform float rotation;
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
}`,mw=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:B2,alphahash_pars_fragment:I2,alphamap_fragment:z2,alphamap_pars_fragment:H2,alphatest_fragment:G2,alphatest_pars_fragment:V2,aomap_fragment:k2,aomap_pars_fragment:X2,batching_pars_vertex:W2,batching_vertex:q2,begin_vertex:j2,beginnormal_vertex:Y2,bsdfs:Z2,iridescence_fragment:K2,bumpmap_pars_fragment:$2,clipping_planes_fragment:Q2,clipping_planes_pars_fragment:J2,clipping_planes_pars_vertex:eR,clipping_planes_vertex:tR,color_fragment:nR,color_pars_fragment:iR,color_pars_vertex:aR,color_vertex:rR,common:sR,cube_uv_reflection_fragment:oR,defaultnormal_vertex:lR,displacementmap_pars_vertex:cR,displacementmap_vertex:uR,emissivemap_fragment:fR,emissivemap_pars_fragment:dR,colorspace_fragment:hR,colorspace_pars_fragment:pR,envmap_fragment:mR,envmap_common_pars_fragment:gR,envmap_pars_fragment:vR,envmap_pars_vertex:_R,envmap_physical_pars_fragment:wR,envmap_vertex:xR,fog_vertex:yR,fog_pars_vertex:SR,fog_fragment:bR,fog_pars_fragment:MR,gradientmap_pars_fragment:ER,lightmap_pars_fragment:TR,lights_lambert_fragment:AR,lights_lambert_pars_fragment:CR,lights_pars_begin:RR,lights_toon_fragment:DR,lights_toon_pars_fragment:UR,lights_phong_fragment:NR,lights_phong_pars_fragment:LR,lights_physical_fragment:OR,lights_physical_pars_fragment:PR,lights_fragment_begin:FR,lights_fragment_maps:BR,lights_fragment_end:IR,logdepthbuf_fragment:zR,logdepthbuf_pars_fragment:HR,logdepthbuf_pars_vertex:GR,logdepthbuf_vertex:VR,map_fragment:kR,map_pars_fragment:XR,map_particle_fragment:WR,map_particle_pars_fragment:qR,metalnessmap_fragment:jR,metalnessmap_pars_fragment:YR,morphinstance_vertex:ZR,morphcolor_vertex:KR,morphnormal_vertex:$R,morphtarget_pars_vertex:QR,morphtarget_vertex:JR,normal_fragment_begin:e3,normal_fragment_maps:t3,normal_pars_fragment:n3,normal_pars_vertex:i3,normal_vertex:a3,normalmap_pars_fragment:r3,clearcoat_normal_fragment_begin:s3,clearcoat_normal_fragment_maps:o3,clearcoat_pars_fragment:l3,iridescence_pars_fragment:c3,opaque_fragment:u3,packing:f3,premultiplied_alpha_fragment:d3,project_vertex:h3,dithering_fragment:p3,dithering_pars_fragment:m3,roughnessmap_fragment:g3,roughnessmap_pars_fragment:v3,shadowmap_pars_fragment:_3,shadowmap_pars_vertex:x3,shadowmap_vertex:y3,shadowmask_pars_fragment:S3,skinbase_vertex:b3,skinning_pars_vertex:M3,skinning_vertex:E3,skinnormal_vertex:T3,specularmap_fragment:A3,specularmap_pars_fragment:C3,tonemapping_fragment:R3,tonemapping_pars_fragment:w3,transmission_fragment:D3,transmission_pars_fragment:U3,uv_pars_fragment:N3,uv_pars_vertex:L3,uv_vertex:O3,worldpos_vertex:P3,background_vert:F3,background_frag:B3,backgroundCube_vert:I3,backgroundCube_frag:z3,cube_vert:H3,cube_frag:G3,depth_vert:V3,depth_frag:k3,distance_vert:X3,distance_frag:W3,equirect_vert:q3,equirect_frag:j3,linedashed_vert:Y3,linedashed_frag:Z3,meshbasic_vert:K3,meshbasic_frag:$3,meshlambert_vert:Q3,meshlambert_frag:J3,meshmatcap_vert:ew,meshmatcap_frag:tw,meshnormal_vert:nw,meshnormal_frag:iw,meshphong_vert:aw,meshphong_frag:rw,meshphysical_vert:sw,meshphysical_frag:ow,meshtoon_vert:lw,meshtoon_frag:cw,points_vert:uw,points_frag:fw,shadow_vert:dw,shadow_frag:hw,sprite_vert:pw,sprite_frag:mw},Pe={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},la={basic:{uniforms:Zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Zn([Pe.points,Pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Zn([Pe.common,Pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Zn([Pe.sprite,Pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Zn([Pe.lights,Pe.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};la.physical={uniforms:Zn([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const ku={r:0,b:0,g:0},as=new qa,gw=new pn;function vw(a,e,n,r,o,c,f){const d=new Bt(0);let m=c===!0?0:1,p,v,g=null,x=0,M=null;function T(B){let U=B.isScene===!0?B.background:null;return U&&U.isTexture&&(U=(B.backgroundBlurriness>0?n:e).get(U)),U}function E(B){let U=!1;const z=T(B);z===null?y(d,m):z&&z.isColor&&(y(z,1),U=!0);const L=a.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,f):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function b(B,U){const z=T(U);z&&(z.isCubeTexture||z.mapping===Ef)?(v===void 0&&(v=new Pi(new lc(1,1,1),new ma({name:"BackgroundCubeMaterial",uniforms:wo(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(L,O,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),as.copy(U.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),v.material.uniforms.envMap.value=z,v.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(gw.makeRotationFromEuler(as)),v.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Wt,(g!==z||x!==z.version||M!==a.toneMapping)&&(v.material.needsUpdate=!0,g=z,x=z.version,M=a.toneMapping),v.layers.enableAll(),B.unshift(v,v.geometry,v.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Pi(new hs(2,2),new ma({name:"BackgroundMaterial",uniforms:wo(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Wt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||x!==z.version||M!==a.toneMapping)&&(p.material.needsUpdate=!0,g=z,x=z.version,M=a.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null))}function y(B,U){B.getRGB(ku,bS(a)),r.buffers.color.setClear(ku.r,ku.g,ku.b,U,f)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(B,U=1){d.set(B),m=U,y(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(B){m=B,y(d,m)},render:E,addToRenderList:b,dispose:P}}function _w(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,f=!1;function d(D,k,A,W,q){let ee=!1;const F=g(W,A,k);c!==F&&(c=F,p(c.object)),ee=M(D,W,A,q),ee&&T(D,W,A,q),q!==null&&e.update(q,a.ELEMENT_ARRAY_BUFFER),(ee||f)&&(f=!1,U(D,k,A,W),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return a.createVertexArray()}function p(D){return a.bindVertexArray(D)}function v(D){return a.deleteVertexArray(D)}function g(D,k,A){const W=A.wireframe===!0;let q=r[D.id];q===void 0&&(q={},r[D.id]=q);let ee=q[k.id];ee===void 0&&(ee={},q[k.id]=ee);let F=ee[W];return F===void 0&&(F=x(m()),ee[W]=F),F}function x(D){const k=[],A=[],W=[];for(let q=0;q<n;q++)k[q]=0,A[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:A,attributeDivisors:W,object:D,attributes:{},index:null}}function M(D,k,A,W){const q=c.attributes,ee=k.attributes;let F=0;const V=A.getAttributes();for(const ne in V)if(V[ne].location>=0){const Se=q[ne];let I=ee[ne];if(I===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(I=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(I=D.instanceColor)),Se===void 0||Se.attribute!==I||I&&Se.data!==I.data)return!0;F++}return c.attributesNum!==F||c.index!==W}function T(D,k,A,W){const q={},ee=k.attributes;let F=0;const V=A.getAttributes();for(const ne in V)if(V[ne].location>=0){let Se=ee[ne];Se===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor));const I={};I.attribute=Se,Se&&Se.data&&(I.data=Se.data),q[ne]=I,F++}c.attributes=q,c.attributesNum=F,c.index=W}function E(){const D=c.newAttributes;for(let k=0,A=D.length;k<A;k++)D[k]=0}function b(D){y(D,0)}function y(D,k){const A=c.newAttributes,W=c.enabledAttributes,q=c.attributeDivisors;A[D]=1,W[D]===0&&(a.enableVertexAttribArray(D),W[D]=1),q[D]!==k&&(a.vertexAttribDivisor(D,k),q[D]=k)}function P(){const D=c.newAttributes,k=c.enabledAttributes;for(let A=0,W=k.length;A<W;A++)k[A]!==D[A]&&(a.disableVertexAttribArray(A),k[A]=0)}function B(D,k,A,W,q,ee,F){F===!0?a.vertexAttribIPointer(D,k,A,q,ee):a.vertexAttribPointer(D,k,A,W,q,ee)}function U(D,k,A,W){E();const q=W.attributes,ee=A.getAttributes(),F=k.defaultAttributeValues;for(const V in ee){const ne=ee[V];if(ne.location>=0){let be=q[V];if(be===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),be!==void 0){const Se=be.normalized,I=be.itemSize,oe=e.get(be);if(oe===void 0)continue;const _e=oe.buffer,Ce=oe.type,He=oe.bytesPerElement,re=Ce===a.INT||Ce===a.UNSIGNED_INT||be.gpuType===Im;if(be.isInterleavedBufferAttribute){const pe=be.data,Re=pe.stride,Xe=be.offset;if(pe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<ne.locationSize;Ve++)y(ne.location+Ve,pe.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ve=0;Ve<ne.locationSize;Ve++)b(ne.location+Ve);a.bindBuffer(a.ARRAY_BUFFER,_e);for(let Ve=0;Ve<ne.locationSize;Ve++)B(ne.location+Ve,I/ne.locationSize,Ce,Se,Re*He,(Xe+I/ne.locationSize*Ve)*He,re)}else{if(be.isInstancedBufferAttribute){for(let pe=0;pe<ne.locationSize;pe++)y(ne.location+pe,be.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let pe=0;pe<ne.locationSize;pe++)b(ne.location+pe);a.bindBuffer(a.ARRAY_BUFFER,_e);for(let pe=0;pe<ne.locationSize;pe++)B(ne.location+pe,I/ne.locationSize,Ce,Se,I*He,I/ne.locationSize*pe*He,re)}}else if(F!==void 0){const Se=F[V];if(Se!==void 0)switch(Se.length){case 2:a.vertexAttrib2fv(ne.location,Se);break;case 3:a.vertexAttrib3fv(ne.location,Se);break;case 4:a.vertexAttrib4fv(ne.location,Se);break;default:a.vertexAttrib1fv(ne.location,Se)}}}}P()}function z(){Q();for(const D in r){const k=r[D];for(const A in k){const W=k[A];for(const q in W)v(W[q].object),delete W[q];delete k[A]}delete r[D]}}function L(D){if(r[D.id]===void 0)return;const k=r[D.id];for(const A in k){const W=k[A];for(const q in W)v(W[q].object),delete W[q];delete k[A]}delete r[D.id]}function O(D){for(const k in r){const A=r[k];if(A[D.id]===void 0)continue;const W=A[D.id];for(const q in W)v(W[q].object),delete W[q];delete A[D.id]}}function Q(){C(),f=!0,c!==o&&(c=o,p(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:L,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:b,disableUnusedAttributes:P}}function xw(a,e,n){let r;function o(p){r=p}function c(p,v){a.drawArrays(r,p,v),n.update(v,r,1)}function f(p,v,g){g!==0&&(a.drawArraysInstanced(r,p,v,g),n.update(v,r,g))}function d(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let M=0;for(let T=0;T<g;T++)M+=v[T];n.update(M,r,1)}function m(p,v,g,x){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)f(p[T],v[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,g);let T=0;for(let E=0;E<g;E++)T+=v[E]*x[E];n.update(T,r,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function yw(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(O){return!(O!==Oi&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const Q=O===pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Li&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Yi&&!Q)}function m(O){if(O==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const v=m(p);v!==p&&(rt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),P=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),B=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),z=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:E,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:P,maxVaryings:B,maxFragmentUniforms:U,maxSamples:z,samples:L}}function Sw(a){const e=this;let n=null,r=0,o=!1,c=!1;const f=new ss,d=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||r!==0||o;return o=x,r=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){n=v(g,x,0)},this.setState=function(g,x,M){const T=g.clippingPlanes,E=g.clipIntersection,b=g.clipShadows,y=a.get(g);if(!o||T===null||T.length===0||c&&!b)c?v(null):p();else{const P=c?0:r,B=P*4;let U=y.clippingState||null;m.value=U,U=v(T,x,B,M);for(let z=0;z!==B;++z)U[z]=n[z];y.clippingState=U,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,M,T){const E=g!==null?g.length:0;let b=null;if(E!==0){if(b=m.value,T!==!0||b===null){const y=M+E*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(b===null||b.length<y)&&(b=new Float32Array(y));for(let B=0,U=M;B!==E;++B,U+=4)f.copy(g[B]).applyMatrix4(P,d),f.normal.toArray(b,U),b[U+3]=f.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,b}}function bw(a){let e=new WeakMap;function n(f,d){return d===Ip?f.mapping=gs:d===zp&&(f.mapping=Ao),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ip||d===zp)if(e.has(f)){const m=e.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new ES(m.height);return p.fromEquirectangularTexture(a,f),e.set(f,p),f.addEventListener("dispose",o),n(p.texture,f.mapping)}else return null}}return f}function o(f){const d=f.target;d.removeEventListener("dispose",o);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Rr=4,Hx=[.125,.215,.35,.446,.526,.582],ls=20,Mw=256,Pl=new RS,Gx=new Bt;let mp=null,gp=0,vp=0,_p=!1;const Ew=new ue;class Vx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:f=256,position:d=Ew}=c;mp=this._renderer.getRenderTarget(),gp=this._renderer.getActiveCubeFace(),vp=this._renderer.getActiveMipmapLevel(),_p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mp,gp,vp),this._renderer.xr.enabled=_p,e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===gs||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mp=this._renderer.getRenderTarget(),gp=this._renderer.getActiveCubeFace(),vp=this._renderer.getActiveMipmapLevel(),_p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:pa,format:Oi,colorSpace:Ro,depthBuffer:!1},o=kx(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kx(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Tw(c)),this._blurMaterial=Cw(c,e,n),this._ggxMaterial=Aw(c,e,n)}return o}_compileMaterial(e){const n=new Pi(new Qi,e);this._renderer.compile(n,Pl)}_sceneToCubeUV(e,n,r,o,c){const m=new qi(90,1,n,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor(Gx),g.toneMapping=da,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pi(new lc,new xS({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,b=E.material;let y=!1;const P=e.background;P?P.isColor&&(b.color.copy(P),e.background=null,y=!0):(b.color.copy(Gx),y=!0);for(let B=0;B<6;B++){const U=B%3;U===0?(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[B],c.y,c.z)):U===1?(m.up.set(0,0,p[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[B],c.z)):(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[B]));const z=this._cubeSize;xo(o,U*z,B>2?z:0,z,z),g.setRenderTarget(o),y&&g.render(E,m),g.render(e,m)}g.toneMapping=M,g.autoClear=x,e.background=P}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===gs||e.mapping===Ao;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xx());const c=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;xo(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,Pl)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[r];d.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),x=0+p*1.25,M=g*x,{_lodMax:T}=this,E=this._sizeLods[r],b=3*E*(r>T-Rr?r-T+Rr:0),y=4*(this._cubeSize-E);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-n,xo(c,b,y,3*E,2*E),o.setRenderTarget(c),o.render(d,Pl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,xo(e,b,y,3*E,2*E),o.setRenderTarget(e),o.render(d,Pl)}_blur(e,n,r,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",c),this._halfBlur(f,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[o];g.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ls-1),E=c/T,b=isFinite(c)?1+Math.floor(v*E):ls;b>ls&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ls}`);const y=[];let P=0;for(let O=0;O<ls;++O){const Q=O/E,C=Math.exp(-Q*Q/2);y.push(C),O===0?P+=C:O<b&&(P+=2*C)}for(let O=0;O<y.length;O++)y[O]=y[O]/P;x.envMap.value=e.texture,x.samples.value=b,x.weights.value=y,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:B}=this;x.dTheta.value=T,x.mipInt.value=B-r;const U=this._sizeLods[o],z=3*U*(o>B-Rr?o-B+Rr:0),L=4*(this._cubeSize-U);xo(n,z,L,3*U,2*U),m.setRenderTarget(n),m.render(g,Pl)}}function Tw(a){const e=[],n=[],r=[];let o=a;const c=a-Rr+1+Hx.length;for(let f=0;f<c;f++){const d=Math.pow(2,o);e.push(d);let m=1/d;f>a-Rr?m=Hx[f-a+Rr-1]:f===0&&(m=0),n.push(m);const p=1/(d-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,T=6,E=3,b=2,y=1,P=new Float32Array(E*T*M),B=new Float32Array(b*T*M),U=new Float32Array(y*T*M);for(let L=0;L<M;L++){const O=L%3*2/3-1,Q=L>2?0:-1,C=[O,Q,0,O+2/3,Q,0,O+2/3,Q+1,0,O,Q,0,O+2/3,Q+1,0,O,Q+1,0];P.set(C,E*T*L),B.set(x,b*T*L);const D=[L,L,L,L,L,L];U.set(D,y*T*L)}const z=new Qi;z.setAttribute("position",new Ki(P,E)),z.setAttribute("uv",new Ki(B,b)),z.setAttribute("faceIndex",new Ki(U,y)),r.push(new Pi(z,null)),o>Rr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function kx(a,e,n){const r=new Zi(a,e,n);return r.texture.mapping=Ef,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xo(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function Aw(a,e,n){return new ma({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Af(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Cw(a,e,n){const r=new Float32Array(ls),o=new ue(0,1,0);return new ma({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Af(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Xx(){return new ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Af(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Wx(){return new ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Af(){return`

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
	`}function Rw(a){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ip||m===zp,v=m===gs||m===Ao;if(p||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Vx(a)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&o(M)?(n===null&&(n=new Vx(a)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function o(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function ww(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&$l("WebGLRenderer: "+r+" extension not supported."),o}}}function Dw(a,e,n,r){const o={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete o[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(g,x){return o[x.id]===!0||(x.addEventListener("dispose",f),o[x.id]=!0,n.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)e.update(x[M],a.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,T=g.attributes.position;let E=0;if(M!==null){const P=M.array;E=M.version;for(let B=0,U=P.length;B<U;B+=3){const z=P[B+0],L=P[B+1],O=P[B+2];x.push(z,L,L,O,O,z)}}else if(T!==void 0){const P=T.array;E=T.version;for(let B=0,U=P.length/3-1;B<U;B+=3){const z=B+0,L=B+1,O=B+2;x.push(z,L,L,O,O,z)}}else return;const b=new(pS(x)?SS:yS)(x,1);b.version=E;const y=c.get(g);y&&e.remove(y),c.set(g,b)}function v(g){const x=c.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function Uw(a,e,n){let r;function o(x){r=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,M){a.drawElements(r,M,c,x*f),n.update(M,r,1)}function p(x,M,T){T!==0&&(a.drawElementsInstanced(r,M,c,x*f,T),n.update(M,r,T))}function v(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,T);let b=0;for(let y=0;y<T;y++)b+=M[y];n.update(b,r,1)}function g(x,M,T,E){if(T===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let y=0;y<x.length;y++)p(x[y]/f,M[y],E[y]);else{b.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,E,0,T);let y=0;for(let P=0;P<T;P++)y+=M[P]*E[P];n.update(y,r,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function Nw(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=d*(c/3);break;case a.LINES:n.lines+=d*(c/2);break;case a.LINE_STRIP:n.lines+=d*(c-1);break;case a.LINE_LOOP:n.lines+=d*c;break;case a.POINTS:n.points+=d*c;break;default:Ut("WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function Lw(a,e,n){const r=new WeakMap,o=new fn;function c(f,d,m){const p=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let D=function(){Q.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var M=D;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let U=0;T===!0&&(U=1),E===!0&&(U=2),b===!0&&(U=3);let z=d.attributes.position.count*U,L=1;z>e.maxTextureSize&&(L=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const O=new Float32Array(z*L*4*g),Q=new mS(O,z,L,g);Q.type=Yi,Q.needsUpdate=!0;const C=U*4;for(let k=0;k<g;k++){const A=y[k],W=P[k],q=B[k],ee=z*L*4*k;for(let F=0;F<A.count;F++){const V=F*C;T===!0&&(o.fromBufferAttribute(A,F),O[ee+V+0]=o.x,O[ee+V+1]=o.y,O[ee+V+2]=o.z,O[ee+V+3]=0),E===!0&&(o.fromBufferAttribute(W,F),O[ee+V+4]=o.x,O[ee+V+5]=o.y,O[ee+V+6]=o.z,O[ee+V+7]=0),b===!0&&(o.fromBufferAttribute(q,F),O[ee+V+8]=o.x,O[ee+V+9]=o.y,O[ee+V+10]=o.z,O[ee+V+11]=q.itemSize===4?o.w:1)}}x={count:g,texture:Q,size:new ct(z,L)},r.set(d,x),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let T=0;for(let b=0;b<p.length;b++)T+=p[b];const E=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(a,"morphTargetBaseInfluence",E),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function Ow(a,e,n,r){let o=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,g=e.get(m,v);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==p&&(n.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,a.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return g}function f(){o=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const Pw={[Jy]:"LINEAR_TONE_MAPPING",[eS]:"REINHARD_TONE_MAPPING",[tS]:"CINEON_TONE_MAPPING",[nS]:"ACES_FILMIC_TONE_MAPPING",[aS]:"AGX_TONE_MAPPING",[rS]:"NEUTRAL_TONE_MAPPING",[iS]:"CUSTOM_TONE_MAPPING"};function Fw(a,e,n,r,o){const c=new Zi(e,n,{type:a,depthBuffer:r,stencilBuffer:o}),f=new Zi(e,n,{type:pa,depthBuffer:!1,stencilBuffer:!1}),d=new Qi;d.setAttribute("position",new $i([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new $i([0,2,0,0,2,0],2));const m=new Hl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Pi(d,m),v=new RS(-1,1,1,-1,0,1);let g=null,x=null,M=!1,T,E=null,b=[],y=!1;this.setSize=function(P,B){c.setSize(P,B),f.setSize(P,B);for(let U=0;U<b.length;U++){const z=b[U];z.setSize&&z.setSize(P,B)}},this.setEffects=function(P){b=P,y=b.length>0&&b[0].isRenderPass===!0;const B=c.width,U=c.height;for(let z=0;z<b.length;z++){const L=b[z];L.setSize&&L.setSize(B,U)}},this.begin=function(P,B){if(M||P.toneMapping===da&&b.length===0)return!1;if(E=B,B!==null){const U=B.width,z=B.height;(c.width!==U||c.height!==z)&&this.setSize(U,z)}return y===!1&&P.setRenderTarget(c),T=P.toneMapping,P.toneMapping=da,!0},this.hasRenderPass=function(){return y},this.end=function(P,B){P.toneMapping=T,M=!0;let U=c,z=f;for(let L=0;L<b.length;L++){const O=b[L];if(O.enabled!==!1&&(O.render(P,z,U,B),O.needsSwap!==!1)){const Q=U;U=z,z=Q}}if(g!==P.outputColorSpace||x!==P.toneMapping){g=P.outputColorSpace,x=P.toneMapping,m.defines={},Rt.getTransfer(g)===Wt&&(m.defines.SRGB_TRANSFER="");const L=Pw[x];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,P.setRenderTarget(E),P.render(p,v),E=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const DS=new Kn,Sm=new Ql(1,1),US=new mS,NS=new s2,LS=new MS,qx=[],jx=[],Yx=new Float32Array(16),Zx=new Float32Array(9),Kx=new Float32Array(4);function No(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=qx[o];if(c===void 0&&(c=new Float32Array(o),qx[o]=c),e!==0){r.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=n,a[f].toArray(c,d)}return c}function An(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function Cn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Cf(a,e){let n=jx[e];n===void 0&&(n=new Int32Array(e),jx[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function Bw(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function Iw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;a.uniform2fv(this.addr,e),Cn(n,e)}}function zw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(An(n,e))return;a.uniform3fv(this.addr,e),Cn(n,e)}}function Hw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;a.uniform4fv(this.addr,e),Cn(n,e)}}function Gw(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,r))return;Kx.set(r),a.uniformMatrix2fv(this.addr,!1,Kx),Cn(n,r)}}function Vw(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,r))return;Zx.set(r),a.uniformMatrix3fv(this.addr,!1,Zx),Cn(n,r)}}function kw(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,r))return;Yx.set(r),a.uniformMatrix4fv(this.addr,!1,Yx),Cn(n,r)}}function Xw(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function Ww(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;a.uniform2iv(this.addr,e),Cn(n,e)}}function qw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;a.uniform3iv(this.addr,e),Cn(n,e)}}function jw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;a.uniform4iv(this.addr,e),Cn(n,e)}}function Yw(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function Zw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;a.uniform2uiv(this.addr,e),Cn(n,e)}}function Kw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;a.uniform3uiv(this.addr,e),Cn(n,e)}}function $w(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;a.uniform4uiv(this.addr,e),Cn(n,e)}}function Qw(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Sm.compareFunction=n.isReversedDepthBuffer()?Wm:Xm,c=Sm):c=DS,n.setTexture2D(e||c,o)}function Jw(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||NS,o)}function eD(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||LS,o)}function tD(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||US,o)}function nD(a){switch(a){case 5126:return Bw;case 35664:return Iw;case 35665:return zw;case 35666:return Hw;case 35674:return Gw;case 35675:return Vw;case 35676:return kw;case 5124:case 35670:return Xw;case 35667:case 35671:return Ww;case 35668:case 35672:return qw;case 35669:case 35673:return jw;case 5125:return Yw;case 36294:return Zw;case 36295:return Kw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return eD;case 36289:case 36303:case 36311:case 36292:return tD}}function iD(a,e){a.uniform1fv(this.addr,e)}function aD(a,e){const n=No(e,this.size,2);a.uniform2fv(this.addr,n)}function rD(a,e){const n=No(e,this.size,3);a.uniform3fv(this.addr,n)}function sD(a,e){const n=No(e,this.size,4);a.uniform4fv(this.addr,n)}function oD(a,e){const n=No(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function lD(a,e){const n=No(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function cD(a,e){const n=No(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function uD(a,e){a.uniform1iv(this.addr,e)}function fD(a,e){a.uniform2iv(this.addr,e)}function dD(a,e){a.uniform3iv(this.addr,e)}function hD(a,e){a.uniform4iv(this.addr,e)}function pD(a,e){a.uniform1uiv(this.addr,e)}function mD(a,e){a.uniform2uiv(this.addr,e)}function gD(a,e){a.uniform3uiv(this.addr,e)}function vD(a,e){a.uniform4uiv(this.addr,e)}function _D(a,e,n){const r=this.cache,o=e.length,c=Cf(n,o);An(r,c)||(a.uniform1iv(this.addr,c),Cn(r,c));let f;this.type===a.SAMPLER_2D_SHADOW?f=Sm:f=DS;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||f,c[d])}function xD(a,e,n){const r=this.cache,o=e.length,c=Cf(n,o);An(r,c)||(a.uniform1iv(this.addr,c),Cn(r,c));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||NS,c[f])}function yD(a,e,n){const r=this.cache,o=e.length,c=Cf(n,o);An(r,c)||(a.uniform1iv(this.addr,c),Cn(r,c));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||LS,c[f])}function SD(a,e,n){const r=this.cache,o=e.length,c=Cf(n,o);An(r,c)||(a.uniform1iv(this.addr,c),Cn(r,c));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||US,c[f])}function bD(a){switch(a){case 5126:return iD;case 35664:return aD;case 35665:return rD;case 35666:return sD;case 35674:return oD;case 35675:return lD;case 35676:return cD;case 5124:case 35670:return uD;case 35667:case 35671:return fD;case 35668:case 35672:return dD;case 35669:case 35673:return hD;case 5125:return pD;case 36294:return mD;case 36295:return gD;case 36296:return vD;case 35678:case 36198:case 36298:case 36306:case 35682:return _D;case 35679:case 36299:case 36307:return xD;case 35680:case 36300:case 36308:case 36293:return yD;case 36289:case 36303:case 36311:case 36292:return SD}}class MD{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=nD(n.type)}}class ED{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bD(n.type)}}class TD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const xp=/(\w+)(\])?(\[|\.)?/g;function $x(a,e){a.seq.push(e),a.map[e.id]=e}function AD(a,e,n){const r=a.name,o=r.length;for(xp.lastIndex=0;;){const c=xp.exec(r),f=xp.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===o){$x(n,p===void 0?new MD(d,a,e):new ED(d,a,e));break}else{let g=n.map[d];g===void 0&&(g=new TD(d),$x(n,g)),n=g}}}class ef{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const d=e.getActiveUniform(n,f),m=e.getUniformLocation(n,d.name);AD(d,m,this)}const o=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(f):c.push(f);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,f=n.length;c!==f;++c){const d=n[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function Qx(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const CD=37297;let RD=0;function wD(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=o;f<c;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Jx=new ht;function DD(a){Rt._getMatrix(Jx,Rt.workingColorSpace,a);const e=`mat3( ${Jx.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(a)){case rf:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function ey(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+wD(a.getShaderSource(e),d)}else return c}function UD(a,e){const n=DD(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const ND={[Jy]:"Linear",[eS]:"Reinhard",[tS]:"Cineon",[nS]:"ACESFilmic",[aS]:"AgX",[rS]:"Neutral",[iS]:"Custom"};function LD(a,e){const n=ND[e];return n===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xu=new ue;function OD(){Rt.getLuminanceCoefficients(Xu);const a=Xu.x.toFixed(4),e=Xu.y.toFixed(4),n=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PD(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gl).join(`
`)}function FD(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function BD(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),f=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:d}}return n}function Gl(a){return a!==""}function ty(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ny(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ID=/^[ \t]*#include +<([\w\d./]+)>/gm;function bm(a){return a.replace(ID,HD)}const zD=new Map;function HD(a,e){let n=pt[e];if(n===void 0){const r=zD.get(e);if(r!==void 0)n=pt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bm(n)}const GD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iy(a){return a.replace(GD,VD)}function VD(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ay(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const kD={[Zu]:"SHADOWMAP_TYPE_PCF",[zl]:"SHADOWMAP_TYPE_VSM"};function XD(a){return kD[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WD={[gs]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE",[Ef]:"ENVMAP_TYPE_CUBE_UV"};function qD(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":WD[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const jD={[Ao]:"ENVMAP_MODE_REFRACTION"};function YD(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":jD[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ZD={[Qy]:"ENVMAP_BLENDING_MULTIPLY",[HC]:"ENVMAP_BLENDING_MIX",[GC]:"ENVMAP_BLENDING_ADD"};function KD(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":ZD[a.combine]||"ENVMAP_BLENDING_NONE"}function $D(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function QD(a,e,n,r){const o=a.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const m=XD(n),p=qD(n),v=YD(n),g=KD(n),x=$D(n),M=PD(n),T=FD(c),E=o.createProgram();let b,y,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Gl).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Gl).join(`
`),y.length>0&&(y+=`
`)):(b=[ay(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gl).join(`
`),y=[ay(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==da?"#define TONE_MAPPING":"",n.toneMapping!==da?pt.tonemapping_pars_fragment:"",n.toneMapping!==da?LD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,UD("linearToOutputTexel",n.outputColorSpace),OD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Gl).join(`
`)),f=bm(f),f=ty(f,n),f=ny(f,n),d=bm(d),d=ty(d,n),d=ny(d,n),f=iy(f),d=iy(d),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,b=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",n.glslVersion===mx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const B=P+b+f,U=P+y+d,z=Qx(o,o.VERTEX_SHADER,B),L=Qx(o,o.FRAGMENT_SHADER,U);o.attachShader(E,z),o.attachShader(E,L),n.index0AttributeName!==void 0?o.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function O(k){if(a.debug.checkShaderErrors){const A=o.getProgramInfoLog(E)||"",W=o.getShaderInfoLog(z)||"",q=o.getShaderInfoLog(L)||"",ee=A.trim(),F=W.trim(),V=q.trim();let ne=!0,be=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(ne=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,E,z,L);else{const Se=ey(o,z,"vertex"),I=ey(o,L,"fragment");Ut("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ee+`
`+Se+`
`+I)}else ee!==""?rt("WebGLProgram: Program Info Log:",ee):(F===""||V==="")&&(be=!1);be&&(k.diagnostics={runnable:ne,programLog:ee,vertexShader:{log:F,prefix:b},fragmentShader:{log:V,prefix:y}})}o.deleteShader(z),o.deleteShader(L),Q=new ef(o,E),C=BD(o,E)}let Q;this.getUniforms=function(){return Q===void 0&&O(this),Q};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(E,CD)),D},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RD++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=L,this}let JD=0;class eU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new tU(e),n.set(e,r)),r}}class tU{constructor(e){this.id=JD++,this.code=e,this.usedTimes=0}}function nU(a,e,n,r,o,c,f){const d=new vS,m=new eU,p=new Set,v=[],g=new Map,x=o.logarithmicDepthBuffer;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return p.add(C),C===0?"uv":`uv${C}`}function b(C,D,k,A,W){const q=A.fog,ee=W.geometry,F=C.isMeshStandardMaterial?A.environment:null,V=(C.isMeshStandardMaterial?n:e).get(C.envMap||F),ne=V&&V.mapping===Ef?V.image.height:null,be=T[C.type];C.precision!==null&&(M=o.getMaxPrecision(C.precision),M!==C.precision&&rt("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const Se=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,I=Se!==void 0?Se.length:0;let oe=0;ee.morphAttributes.position!==void 0&&(oe=1),ee.morphAttributes.normal!==void 0&&(oe=2),ee.morphAttributes.color!==void 0&&(oe=3);let _e,Ce,He,re;if(be){const Ct=la[be];_e=Ct.vertexShader,Ce=Ct.fragmentShader}else _e=C.vertexShader,Ce=C.fragmentShader,m.update(C),He=m.getVertexShaderID(C),re=m.getFragmentShaderID(C);const pe=a.getRenderTarget(),Re=a.state.buffers.depth.getReversed(),Xe=W.isInstancedMesh===!0,Ve=W.isBatchedMesh===!0,mt=!!C.map,tn=!!C.matcap,vt=!!V,gt=!!C.aoMap,Tt=!!C.lightMap,st=!!C.bumpMap,nn=!!C.normalMap,X=!!C.displacementMap,Kt=!!C.emissiveMap,bt=!!C.metalnessMap,At=!!C.roughnessMap,je=C.anisotropy>0,N=C.clearcoat>0,_=C.dispersion>0,H=C.iridescence>0,J=C.sheen>0,he=C.transmission>0,se=je&&!!C.anisotropyMap,Fe=N&&!!C.clearcoatMap,we=N&&!!C.clearcoatNormalMap,ke=N&&!!C.clearcoatRoughnessMap,et=H&&!!C.iridescenceMap,Ee=H&&!!C.iridescenceThicknessMap,Te=J&&!!C.sheenColorMap,ze=J&&!!C.sheenRoughnessMap,Be=!!C.specularMap,Ue=!!C.specularColorMap,ft=!!C.specularIntensityMap,Y=he&&!!C.transmissionMap,Le=he&&!!C.thicknessMap,Ae=!!C.gradientMap,Ie=!!C.alphaMap,Me=C.alphaTest>0,ye=!!C.alphaHash,De=!!C.extensions;let at=da;C.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(at=a.toneMapping);const zt={shaderID:be,shaderType:C.type,shaderName:C.name,vertexShader:_e,fragmentShader:Ce,defines:C.defines,customVertexShaderID:He,customFragmentShaderID:re,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Ve,batchingColor:Ve&&W._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&W.instanceColor!==null,instancingMorph:Xe&&W.morphTexture!==null,outputColorSpace:pe===null?a.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ro,alphaToCoverage:!!C.alphaToCoverage,map:mt,matcap:tn,envMap:vt,envMapMode:vt&&V.mapping,envMapCubeUVHeight:ne,aoMap:gt,lightMap:Tt,bumpMap:st,normalMap:nn,displacementMap:X,emissiveMap:Kt,normalMapObjectSpace:nn&&C.normalMapType===WC,normalMapTangentSpace:nn&&C.normalMapType===XC,metalnessMap:bt,roughnessMap:At,anisotropy:je,anisotropyMap:se,clearcoat:N,clearcoatMap:Fe,clearcoatNormalMap:we,clearcoatRoughnessMap:ke,dispersion:_,iridescence:H,iridescenceMap:et,iridescenceThicknessMap:Ee,sheen:J,sheenColorMap:Te,sheenRoughnessMap:ze,specularMap:Be,specularColorMap:Ue,specularIntensityMap:ft,transmission:he,transmissionMap:Y,thicknessMap:Le,gradientMap:Ae,opaque:C.transparent===!1&&C.blending===bo&&C.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Me,alphaHash:ye,combine:C.combine,mapUv:mt&&E(C.map.channel),aoMapUv:gt&&E(C.aoMap.channel),lightMapUv:Tt&&E(C.lightMap.channel),bumpMapUv:st&&E(C.bumpMap.channel),normalMapUv:nn&&E(C.normalMap.channel),displacementMapUv:X&&E(C.displacementMap.channel),emissiveMapUv:Kt&&E(C.emissiveMap.channel),metalnessMapUv:bt&&E(C.metalnessMap.channel),roughnessMapUv:At&&E(C.roughnessMap.channel),anisotropyMapUv:se&&E(C.anisotropyMap.channel),clearcoatMapUv:Fe&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(C.sheenRoughnessMap.channel),specularMapUv:Be&&E(C.specularMap.channel),specularColorMapUv:Ue&&E(C.specularColorMap.channel),specularIntensityMapUv:ft&&E(C.specularIntensityMap.channel),transmissionMapUv:Y&&E(C.transmissionMap.channel),thicknessMapUv:Le&&E(C.thicknessMap.channel),alphaMapUv:Ie&&E(C.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(nn||je),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ee.attributes.uv&&(mt||Ie),fog:!!q,useFog:C.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Re,skinning:W.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:oe,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:at,decodeVideoTexture:mt&&C.map.isVideoTexture===!0&&Rt.getTransfer(C.map.colorSpace)===Wt,decodeVideoTextureEmissive:Kt&&C.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(C.emissiveMap.colorSpace)===Wt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ga,flipSided:C.side===ai,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:De&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&C.extensions.multiDraw===!0||Ve)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return zt.vertexUv1s=p.has(1),zt.vertexUv2s=p.has(2),zt.vertexUv3s=p.has(3),p.clear(),zt}function y(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)D.push(k),D.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(P(D,C),B(D,C),D.push(a.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function P(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function B(C,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const D=T[C.type];let k;if(D){const A=la[D];k=x2.clone(A.uniforms)}else k=C.uniforms;return k}function z(C,D){let k=g.get(D);return k!==void 0?++k.usedTimes:(k=new QD(a,D,C,c),v.push(k),g.set(D,k)),k}function L(C){if(--C.usedTimes===0){const D=v.indexOf(C);v[D]=v[v.length-1],v.pop(),g.delete(C.cacheKey),C.destroy()}}function O(C){m.remove(C)}function Q(){m.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:U,acquireProgram:z,releaseProgram:L,releaseShaderCache:O,programs:v,dispose:Q}}function iU(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let d=a.get(f);return d===void 0&&(d={},a.set(f,d)),d}function r(f){a.delete(f)}function o(f,d,m){a.get(f)[d]=m}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function aU(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function ry(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function sy(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function f(g,x,M,T,E,b){let y=a[e];return y===void 0?(y={id:g.id,object:g,geometry:x,material:M,groupOrder:T,renderOrder:g.renderOrder,z:E,group:b},a[e]=y):(y.id=g.id,y.object=g,y.geometry=x,y.material=M,y.groupOrder=T,y.renderOrder=g.renderOrder,y.z=E,y.group=b),e++,y}function d(g,x,M,T,E,b){const y=f(g,x,M,T,E,b);M.transmission>0?r.push(y):M.transparent===!0?o.push(y):n.push(y)}function m(g,x,M,T,E,b){const y=f(g,x,M,T,E,b);M.transmission>0?r.unshift(y):M.transparent===!0?o.unshift(y):n.unshift(y)}function p(g,x){n.length>1&&n.sort(g||aU),r.length>1&&r.sort(x||ry),o.length>1&&o.sort(x||ry)}function v(){for(let g=e,x=a.length;g<x;g++){const M=a[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:d,unshift:m,finish:v,sort:p}}function rU(){let a=new WeakMap;function e(r,o){const c=a.get(r);let f;return c===void 0?(f=new sy,a.set(r,[f])):o>=c.length?(f=new sy,c.push(f)):f=c[o],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function sU(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ue,color:new Bt};break;case"SpotLight":n={position:new ue,direction:new ue,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ue,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ue,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":n={color:new Bt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return a[e.id]=n,n}}}function oU(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let lU=0;function cU(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function uU(a){const e=new sU,n=oU(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ue);const o=new ue,c=new pn,f=new pn;function d(p){let v=0,g=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,T=0,E=0,b=0,y=0,P=0,B=0,U=0,z=0,L=0,O=0;p.sort(cU);for(let C=0,D=p.length;C<D;C++){const k=p[C],A=k.color,W=k.intensity,q=k.distance;let ee=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Co?ee=k.shadow.map.texture:ee=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=A.r*W,g+=A.g*W,x+=A.b*W;else if(k.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(k.sh.coefficients[F],W);O++}else if(k.isDirectionalLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const V=k.shadow,ne=n.get(k);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,r.directionalShadow[M]=ne,r.directionalShadowMap[M]=ee,r.directionalShadowMatrix[M]=k.shadow.matrix,P++}r.directional[M]=F,M++}else if(k.isSpotLight){const F=e.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(A).multiplyScalar(W),F.distance=q,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,r.spot[E]=F;const V=k.shadow;if(k.map&&(r.spotLightMap[z]=k.map,z++,V.updateMatrices(k),k.castShadow&&L++),r.spotLightMatrix[E]=V.matrix,k.castShadow){const ne=n.get(k);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,r.spotShadow[E]=ne,r.spotShadowMap[E]=ee,U++}E++}else if(k.isRectAreaLight){const F=e.get(k);F.color.copy(A).multiplyScalar(W),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),r.rectArea[b]=F,b++}else if(k.isPointLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const V=k.shadow,ne=n.get(k);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,ne.shadowCameraNear=V.camera.near,ne.shadowCameraFar=V.camera.far,r.pointShadow[T]=ne,r.pointShadowMap[T]=ee,r.pointShadowMatrix[T]=k.shadow.matrix,B++}r.point[T]=F,T++}else if(k.isHemisphereLight){const F=e.get(k);F.skyColor.copy(k.color).multiplyScalar(W),F.groundColor.copy(k.groundColor).multiplyScalar(W),r.hemi[y]=F,y++}}b>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const Q=r.hash;(Q.directionalLength!==M||Q.pointLength!==T||Q.spotLength!==E||Q.rectAreaLength!==b||Q.hemiLength!==y||Q.numDirectionalShadows!==P||Q.numPointShadows!==B||Q.numSpotShadows!==U||Q.numSpotMaps!==z||Q.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=E,r.rectArea.length=b,r.point.length=T,r.hemi.length=y,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=B,r.spotLightMatrix.length=U+z-L,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=O,Q.directionalLength=M,Q.pointLength=T,Q.spotLength=E,Q.rectAreaLength=b,Q.hemiLength=y,Q.numDirectionalShadows=P,Q.numPointShadows=B,Q.numSpotShadows=U,Q.numSpotMaps=z,Q.numLightProbes=O,r.version=lU++)}function m(p,v){let g=0,x=0,M=0,T=0,E=0;const b=v.matrixWorldInverse;for(let y=0,P=p.length;y<P;y++){const B=p[y];if(B.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(B.matrixWorld),o.setFromMatrixPosition(B.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(b),g++}else if(B.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(b),U.direction.setFromMatrixPosition(B.matrixWorld),o.setFromMatrixPosition(B.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(b),M++}else if(B.isRectAreaLight){const U=r.rectArea[T];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(b),f.identity(),c.copy(B.matrixWorld),c.premultiply(b),f.extractRotation(c),U.halfWidth.set(B.width*.5,0,0),U.halfHeight.set(0,B.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),T++}else if(B.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(b),x++}else if(B.isHemisphereLight){const U=r.hemi[E];U.direction.setFromMatrixPosition(B.matrixWorld),U.direction.transformDirection(b),E++}}}return{setup:d,setupView:m,state:r}}function oy(a){const e=new uU(a),n=[],r=[];function o(v){p.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function m(v){e.setupView(n,v)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function fU(a){let e=new WeakMap;function n(o,c=0){const f=e.get(o);let d;return f===void 0?(d=new oy(a),e.set(o,[d])):c>=f.length?(d=new oy(a),f.push(d)):d=f[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const dU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hU=`uniform sampler2D shadow_pass;
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
}`,pU=[new ue(1,0,0),new ue(-1,0,0),new ue(0,1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1)],mU=[new ue(0,-1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,-1,0),new ue(0,-1,0)],ly=new pn,Fl=new ue,yp=new ue;function gU(a,e,n){let r=new AS;const o=new ct,c=new ct,f=new fn,d=new U2,m=new N2,p={},v=n.maxTextureSize,g={[Ur]:ai,[ai]:Ur,[Ga]:Ga},x=new ma({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:dU,fragmentShader:hU}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new Qi;T.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Pi(T,x),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let y=this.type;this.render=function(L,O,Q){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;L.type===SC&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=Zu);const C=a.getRenderTarget(),D=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),A=a.state;A.setBlending(Va),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const W=y!==this.type;W&&O.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(ee=>ee.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,ee=L.length;q<ee;q++){const F=L[q],V=F.shadow;if(V===void 0){rt("WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ne=V.getFrameExtents();if(o.multiply(ne),c.copy(V.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/ne.x),o.x=c.x*ne.x,V.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/ne.y),o.y=c.y*ne.y,V.mapSize.y=c.y)),V.map===null||W===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===zl){if(F.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Zi(o.x,o.y,{format:Co,type:pa,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),V.map.texture.name=F.name+".shadowMap",V.map.depthTexture=new Ql(o.x,o.y,Yi),V.map.depthTexture.name=F.name+".shadowMapDepth",V.map.depthTexture.format=Wa,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Vn,V.map.depthTexture.magFilter=Vn}else{F.isPointLight?(V.map=new ES(o.x),V.map.depthTexture=new D2(o.x,ha)):(V.map=new Zi(o.x,o.y),V.map.depthTexture=new Ql(o.x,o.y,ha)),V.map.depthTexture.name=F.name+".shadowMap",V.map.depthTexture.format=Wa;const Se=a.state.buffers.depth.getReversed();this.type===Zu?(V.map.depthTexture.compareFunction=Se?Wm:Xm,V.map.depthTexture.minFilter=Mn,V.map.depthTexture.magFilter=Mn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Vn,V.map.depthTexture.magFilter=Vn)}V.camera.updateProjectionMatrix()}const be=V.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<be;Se++){if(V.map.isWebGLCubeRenderTarget)a.setRenderTarget(V.map,Se),a.clear();else{Se===0&&(a.setRenderTarget(V.map),a.clear());const I=V.getViewport(Se);f.set(c.x*I.x,c.y*I.y,c.x*I.z,c.y*I.w),A.viewport(f)}if(F.isPointLight){const I=V.camera,oe=V.matrix,_e=F.distance||I.far;_e!==I.far&&(I.far=_e,I.updateProjectionMatrix()),Fl.setFromMatrixPosition(F.matrixWorld),I.position.copy(Fl),yp.copy(I.position),yp.add(pU[Se]),I.up.copy(mU[Se]),I.lookAt(yp),I.updateMatrixWorld(),oe.makeTranslation(-Fl.x,-Fl.y,-Fl.z),ly.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ly,I.coordinateSystem,I.reversedDepth)}else V.updateMatrices(F);r=V.getFrustum(),U(O,Q,V.camera,F,this.type)}V.isPointLightShadow!==!0&&this.type===zl&&P(V,Q),V.needsUpdate=!1}y=this.type,b.needsUpdate=!1,a.setRenderTarget(C,D,k)};function P(L,O){const Q=e.update(E);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Zi(o.x,o.y,{format:Co,type:pa})),x.uniforms.shadow_pass.value=L.map.depthTexture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(O,null,Q,x,E,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(O,null,Q,M,E,null)}function B(L,O,Q,C){let D=null;const k=Q.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)D=k;else if(D=Q.isPointLight===!0?m:d,a.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const A=D.uuid,W=O.uuid;let q=p[A];q===void 0&&(q={},p[A]=q);let ee=q[W];ee===void 0&&(ee=D.clone(),q[W]=ee,O.addEventListener("dispose",z)),D=ee}if(D.visible=O.visible,D.wireframe=O.wireframe,C===zl?D.side=O.shadowSide!==null?O.shadowSide:O.side:D.side=O.shadowSide!==null?O.shadowSide:g[O.side],D.alphaMap=O.alphaMap,D.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,D.map=O.map,D.clipShadows=O.clipShadows,D.clippingPlanes=O.clippingPlanes,D.clipIntersection=O.clipIntersection,D.displacementMap=O.displacementMap,D.displacementScale=O.displacementScale,D.displacementBias=O.displacementBias,D.wireframeLinewidth=O.wireframeLinewidth,D.linewidth=O.linewidth,Q.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const A=a.properties.get(D);A.light=Q}return D}function U(L,O,Q,C,D){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&D===zl)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,L.matrixWorld);const W=e.update(L),q=L.material;if(Array.isArray(q)){const ee=W.groups;for(let F=0,V=ee.length;F<V;F++){const ne=ee[F],be=q[ne.materialIndex];if(be&&be.visible){const Se=B(L,be,C,D);L.onBeforeShadow(a,L,O,Q,W,Se,ne),a.renderBufferDirect(Q,null,W,Se,L,ne),L.onAfterShadow(a,L,O,Q,W,Se,ne)}}}else if(q.visible){const ee=B(L,q,C,D);L.onBeforeShadow(a,L,O,Q,W,ee,null),a.renderBufferDirect(Q,null,W,ee,L,null),L.onAfterShadow(a,L,O,Q,W,ee,null)}}const A=L.children;for(let W=0,q=A.length;W<q;W++)U(A[W],O,Q,C,D)}function z(L){L.target.removeEventListener("dispose",z);for(const Q in p){const C=p[Q],D=L.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const vU={[Up]:Np,[Lp]:Fp,[Op]:Bp,[To]:Pp,[Np]:Up,[Fp]:Lp,[Bp]:Op,[Pp]:To};function _U(a,e){function n(){let Y=!1;const Le=new fn;let Ae=null;const Ie=new fn(0,0,0,0);return{setMask:function(Me){Ae!==Me&&!Y&&(a.colorMask(Me,Me,Me,Me),Ae=Me)},setLocked:function(Me){Y=Me},setClear:function(Me,ye,De,at,zt){zt===!0&&(Me*=at,ye*=at,De*=at),Le.set(Me,ye,De,at),Ie.equals(Le)===!1&&(a.clearColor(Me,ye,De,at),Ie.copy(Le))},reset:function(){Y=!1,Ae=null,Ie.set(-1,0,0,0)}}}function r(){let Y=!1,Le=!1,Ae=null,Ie=null,Me=null;return{setReversed:function(ye){if(Le!==ye){const De=e.get("EXT_clip_control");ye?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Le=ye;const at=Me;Me=null,this.setClear(at)}},getReversed:function(){return Le},setTest:function(ye){ye?pe(a.DEPTH_TEST):Re(a.DEPTH_TEST)},setMask:function(ye){Ae!==ye&&!Y&&(a.depthMask(ye),Ae=ye)},setFunc:function(ye){if(Le&&(ye=vU[ye]),Ie!==ye){switch(ye){case Up:a.depthFunc(a.NEVER);break;case Np:a.depthFunc(a.ALWAYS);break;case Lp:a.depthFunc(a.LESS);break;case To:a.depthFunc(a.LEQUAL);break;case Op:a.depthFunc(a.EQUAL);break;case Pp:a.depthFunc(a.GEQUAL);break;case Fp:a.depthFunc(a.GREATER);break;case Bp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ie=ye}},setLocked:function(ye){Y=ye},setClear:function(ye){Me!==ye&&(Le&&(ye=1-ye),a.clearDepth(ye),Me=ye)},reset:function(){Y=!1,Ae=null,Ie=null,Me=null,Le=!1}}}function o(){let Y=!1,Le=null,Ae=null,Ie=null,Me=null,ye=null,De=null,at=null,zt=null;return{setTest:function(Ct){Y||(Ct?pe(a.STENCIL_TEST):Re(a.STENCIL_TEST))},setMask:function(Ct){Le!==Ct&&!Y&&(a.stencilMask(Ct),Le=Ct)},setFunc:function(Ct,kn,Bi){(Ae!==Ct||Ie!==kn||Me!==Bi)&&(a.stencilFunc(Ct,kn,Bi),Ae=Ct,Ie=kn,Me=Bi)},setOp:function(Ct,kn,Bi){(ye!==Ct||De!==kn||at!==Bi)&&(a.stencilOp(Ct,kn,Bi),ye=Ct,De=kn,at=Bi)},setLocked:function(Ct){Y=Ct},setClear:function(Ct){zt!==Ct&&(a.clearStencil(Ct),zt=Ct)},reset:function(){Y=!1,Le=null,Ae=null,Ie=null,Me=null,ye=null,De=null,at=null,zt=null}}}const c=new n,f=new r,d=new o,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,M=[],T=null,E=!1,b=null,y=null,P=null,B=null,U=null,z=null,L=null,O=new Bt(0,0,0),Q=0,C=!1,D=null,k=null,A=null,W=null,q=null;const ee=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const ne=a.getParameter(a.VERSION);ne.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ne)[1]),F=V>=1):ne.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),F=V>=2);let be=null,Se={};const I=a.getParameter(a.SCISSOR_BOX),oe=a.getParameter(a.VIEWPORT),_e=new fn().fromArray(I),Ce=new fn().fromArray(oe);function He(Y,Le,Ae,Ie){const Me=new Uint8Array(4),ye=a.createTexture();a.bindTexture(Y,ye),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let De=0;De<Ae;De++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(Le,0,a.RGBA,1,1,Ie,0,a.RGBA,a.UNSIGNED_BYTE,Me):a.texImage2D(Le+De,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Me);return ye}const re={};re[a.TEXTURE_2D]=He(a.TEXTURE_2D,a.TEXTURE_2D,1),re[a.TEXTURE_CUBE_MAP]=He(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[a.TEXTURE_2D_ARRAY]=He(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),re[a.TEXTURE_3D]=He(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),pe(a.DEPTH_TEST),f.setFunc(To),st(!1),nn(ux),pe(a.CULL_FACE),gt(Va);function pe(Y){v[Y]!==!0&&(a.enable(Y),v[Y]=!0)}function Re(Y){v[Y]!==!1&&(a.disable(Y),v[Y]=!1)}function Xe(Y,Le){return g[Y]!==Le?(a.bindFramebuffer(Y,Le),g[Y]=Le,Y===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Le),Y===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ve(Y,Le){let Ae=M,Ie=!1;if(Y){Ae=x.get(Le),Ae===void 0&&(Ae=[],x.set(Le,Ae));const Me=Y.textures;if(Ae.length!==Me.length||Ae[0]!==a.COLOR_ATTACHMENT0){for(let ye=0,De=Me.length;ye<De;ye++)Ae[ye]=a.COLOR_ATTACHMENT0+ye;Ae.length=Me.length,Ie=!0}}else Ae[0]!==a.BACK&&(Ae[0]=a.BACK,Ie=!0);Ie&&a.drawBuffers(Ae)}function mt(Y){return T!==Y?(a.useProgram(Y),T=Y,!0):!1}const tn={[os]:a.FUNC_ADD,[MC]:a.FUNC_SUBTRACT,[EC]:a.FUNC_REVERSE_SUBTRACT};tn[TC]=a.MIN,tn[AC]=a.MAX;const vt={[CC]:a.ZERO,[RC]:a.ONE,[wC]:a.SRC_COLOR,[wp]:a.SRC_ALPHA,[PC]:a.SRC_ALPHA_SATURATE,[LC]:a.DST_COLOR,[UC]:a.DST_ALPHA,[DC]:a.ONE_MINUS_SRC_COLOR,[Dp]:a.ONE_MINUS_SRC_ALPHA,[OC]:a.ONE_MINUS_DST_COLOR,[NC]:a.ONE_MINUS_DST_ALPHA,[FC]:a.CONSTANT_COLOR,[BC]:a.ONE_MINUS_CONSTANT_COLOR,[IC]:a.CONSTANT_ALPHA,[zC]:a.ONE_MINUS_CONSTANT_ALPHA};function gt(Y,Le,Ae,Ie,Me,ye,De,at,zt,Ct){if(Y===Va){E===!0&&(Re(a.BLEND),E=!1);return}if(E===!1&&(pe(a.BLEND),E=!0),Y!==bC){if(Y!==b||Ct!==C){if((y!==os||U!==os)&&(a.blendEquation(a.FUNC_ADD),y=os,U=os),Ct)switch(Y){case bo:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Rp:a.blendFunc(a.ONE,a.ONE);break;case fx:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case dx:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ut("WebGLState: Invalid blending: ",Y);break}else switch(Y){case bo:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Rp:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case fx:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dx:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",Y);break}P=null,B=null,z=null,L=null,O.set(0,0,0),Q=0,b=Y,C=Ct}return}Me=Me||Le,ye=ye||Ae,De=De||Ie,(Le!==y||Me!==U)&&(a.blendEquationSeparate(tn[Le],tn[Me]),y=Le,U=Me),(Ae!==P||Ie!==B||ye!==z||De!==L)&&(a.blendFuncSeparate(vt[Ae],vt[Ie],vt[ye],vt[De]),P=Ae,B=Ie,z=ye,L=De),(at.equals(O)===!1||zt!==Q)&&(a.blendColor(at.r,at.g,at.b,zt),O.copy(at),Q=zt),b=Y,C=!1}function Tt(Y,Le){Y.side===Ga?Re(a.CULL_FACE):pe(a.CULL_FACE);let Ae=Y.side===ai;Le&&(Ae=!Ae),st(Ae),Y.blending===bo&&Y.transparent===!1?gt(Va):gt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ie=Y.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Kt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?pe(a.SAMPLE_ALPHA_TO_COVERAGE):Re(a.SAMPLE_ALPHA_TO_COVERAGE)}function st(Y){D!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),D=Y)}function nn(Y){Y!==xC?(pe(a.CULL_FACE),Y!==k&&(Y===ux?a.cullFace(a.BACK):Y===yC?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Re(a.CULL_FACE),k=Y}function X(Y){Y!==A&&(F&&a.lineWidth(Y),A=Y)}function Kt(Y,Le,Ae){Y?(pe(a.POLYGON_OFFSET_FILL),(W!==Le||q!==Ae)&&(a.polygonOffset(Le,Ae),W=Le,q=Ae)):Re(a.POLYGON_OFFSET_FILL)}function bt(Y){Y?pe(a.SCISSOR_TEST):Re(a.SCISSOR_TEST)}function At(Y){Y===void 0&&(Y=a.TEXTURE0+ee-1),be!==Y&&(a.activeTexture(Y),be=Y)}function je(Y,Le,Ae){Ae===void 0&&(be===null?Ae=a.TEXTURE0+ee-1:Ae=be);let Ie=Se[Ae];Ie===void 0&&(Ie={type:void 0,texture:void 0},Se[Ae]=Ie),(Ie.type!==Y||Ie.texture!==Le)&&(be!==Ae&&(a.activeTexture(Ae),be=Ae),a.bindTexture(Y,Le||re[Y]),Ie.type=Y,Ie.texture=Le)}function N(){const Y=Se[be];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function _(){try{a.compressedTexImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function H(){try{a.compressedTexImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function J(){try{a.texSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function he(){try{a.texSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function se(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Fe(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function we(){try{a.texStorage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function ke(){try{a.texStorage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function et(){try{a.texImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Ee(){try{a.texImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Te(Y){_e.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),_e.copy(Y))}function ze(Y){Ce.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),Ce.copy(Y))}function Be(Y,Le){let Ae=p.get(Le);Ae===void 0&&(Ae=new WeakMap,p.set(Le,Ae));let Ie=Ae.get(Y);Ie===void 0&&(Ie=a.getUniformBlockIndex(Le,Y.name),Ae.set(Y,Ie))}function Ue(Y,Le){const Ie=p.get(Le).get(Y);m.get(Le)!==Ie&&(a.uniformBlockBinding(Le,Ie,Y.__bindingPointIndex),m.set(Le,Ie))}function ft(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),v={},be=null,Se={},g={},x=new WeakMap,M=[],T=null,E=!1,b=null,y=null,P=null,B=null,U=null,z=null,L=null,O=new Bt(0,0,0),Q=0,C=!1,D=null,k=null,A=null,W=null,q=null,_e.set(0,0,a.canvas.width,a.canvas.height),Ce.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:pe,disable:Re,bindFramebuffer:Xe,drawBuffers:Ve,useProgram:mt,setBlending:gt,setMaterial:Tt,setFlipSided:st,setCullFace:nn,setLineWidth:X,setPolygonOffset:Kt,setScissorTest:bt,activeTexture:At,bindTexture:je,unbindTexture:N,compressedTexImage2D:_,compressedTexImage3D:H,texImage2D:et,texImage3D:Ee,updateUBOMapping:Be,uniformBlockBinding:Ue,texStorage2D:we,texStorage3D:ke,texSubImage2D:J,texSubImage3D:he,compressedTexSubImage2D:se,compressedTexSubImage3D:Fe,scissor:Te,viewport:ze,reset:ft}}function xU(a,e,n,r,o,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,v=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,_){return M?new OffscreenCanvas(N,_):of("canvas")}function E(N,_,H){let J=1;const he=je(N);if((he.width>H||he.height>H)&&(J=H/Math.max(he.width,he.height)),J<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const se=Math.floor(J*he.width),Fe=Math.floor(J*he.height);g===void 0&&(g=T(se,Fe));const we=_?T(se,Fe):g;return we.width=se,we.height=Fe,we.getContext("2d").drawImage(N,0,0,se,Fe),rt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+se+"x"+Fe+")."),we}else return"data"in N&&rt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),N;return N}function b(N){return N.generateMipmaps}function y(N){a.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?a.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function B(N,_,H,J,he=!1){if(N!==null){if(a[N]!==void 0)return a[N];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let se=_;if(_===a.RED&&(H===a.FLOAT&&(se=a.R32F),H===a.HALF_FLOAT&&(se=a.R16F),H===a.UNSIGNED_BYTE&&(se=a.R8)),_===a.RED_INTEGER&&(H===a.UNSIGNED_BYTE&&(se=a.R8UI),H===a.UNSIGNED_SHORT&&(se=a.R16UI),H===a.UNSIGNED_INT&&(se=a.R32UI),H===a.BYTE&&(se=a.R8I),H===a.SHORT&&(se=a.R16I),H===a.INT&&(se=a.R32I)),_===a.RG&&(H===a.FLOAT&&(se=a.RG32F),H===a.HALF_FLOAT&&(se=a.RG16F),H===a.UNSIGNED_BYTE&&(se=a.RG8)),_===a.RG_INTEGER&&(H===a.UNSIGNED_BYTE&&(se=a.RG8UI),H===a.UNSIGNED_SHORT&&(se=a.RG16UI),H===a.UNSIGNED_INT&&(se=a.RG32UI),H===a.BYTE&&(se=a.RG8I),H===a.SHORT&&(se=a.RG16I),H===a.INT&&(se=a.RG32I)),_===a.RGB_INTEGER&&(H===a.UNSIGNED_BYTE&&(se=a.RGB8UI),H===a.UNSIGNED_SHORT&&(se=a.RGB16UI),H===a.UNSIGNED_INT&&(se=a.RGB32UI),H===a.BYTE&&(se=a.RGB8I),H===a.SHORT&&(se=a.RGB16I),H===a.INT&&(se=a.RGB32I)),_===a.RGBA_INTEGER&&(H===a.UNSIGNED_BYTE&&(se=a.RGBA8UI),H===a.UNSIGNED_SHORT&&(se=a.RGBA16UI),H===a.UNSIGNED_INT&&(se=a.RGBA32UI),H===a.BYTE&&(se=a.RGBA8I),H===a.SHORT&&(se=a.RGBA16I),H===a.INT&&(se=a.RGBA32I)),_===a.RGB&&(H===a.UNSIGNED_INT_5_9_9_9_REV&&(se=a.RGB9_E5),H===a.UNSIGNED_INT_10F_11F_11F_REV&&(se=a.R11F_G11F_B10F)),_===a.RGBA){const Fe=he?rf:Rt.getTransfer(J);H===a.FLOAT&&(se=a.RGBA32F),H===a.HALF_FLOAT&&(se=a.RGBA16F),H===a.UNSIGNED_BYTE&&(se=Fe===Wt?a.SRGB8_ALPHA8:a.RGBA8),H===a.UNSIGNED_SHORT_4_4_4_4&&(se=a.RGBA4),H===a.UNSIGNED_SHORT_5_5_5_1&&(se=a.RGB5_A1)}return(se===a.R16F||se===a.R32F||se===a.RG16F||se===a.RG32F||se===a.RGBA16F||se===a.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function U(N,_){let H;return N?_===null||_===ha||_===Kl?H=a.DEPTH24_STENCIL8:_===Yi?H=a.DEPTH32F_STENCIL8:_===Zl&&(H=a.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ha||_===Kl?H=a.DEPTH_COMPONENT24:_===Yi?H=a.DEPTH_COMPONENT32F:_===Zl&&(H=a.DEPTH_COMPONENT16),H}function z(N,_){return b(N)===!0||N.isFramebufferTexture&&N.minFilter!==Vn&&N.minFilter!==Mn?Math.log2(Math.max(_.width,_.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?_.mipmaps.length:1}function L(N){const _=N.target;_.removeEventListener("dispose",L),Q(_),_.isVideoTexture&&v.delete(_)}function O(N){const _=N.target;_.removeEventListener("dispose",O),D(_)}function Q(N){const _=r.get(N);if(_.__webglInit===void 0)return;const H=N.source,J=x.get(H);if(J){const he=J[_.__cacheKey];he.usedTimes--,he.usedTimes===0&&C(N),Object.keys(J).length===0&&x.delete(H)}r.remove(N)}function C(N){const _=r.get(N);a.deleteTexture(_.__webglTexture);const H=N.source,J=x.get(H);delete J[_.__cacheKey],f.memory.textures--}function D(N){const _=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let he=0;he<_.__webglFramebuffer[J].length;he++)a.deleteFramebuffer(_.__webglFramebuffer[J][he]);else a.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)a.deleteFramebuffer(_.__webglFramebuffer[J]);else a.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&a.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&a.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&a.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const H=N.textures;for(let J=0,he=H.length;J<he;J++){const se=r.get(H[J]);se.__webglTexture&&(a.deleteTexture(se.__webglTexture),f.memory.textures--),r.remove(H[J])}r.remove(N)}let k=0;function A(){k=0}function W(){const N=k;return N>=o.maxTextures&&rt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),k+=1,N}function q(N){const _=[];return _.push(N.wrapS),_.push(N.wrapT),_.push(N.wrapR||0),_.push(N.magFilter),_.push(N.minFilter),_.push(N.anisotropy),_.push(N.internalFormat),_.push(N.format),_.push(N.type),_.push(N.generateMipmaps),_.push(N.premultiplyAlpha),_.push(N.flipY),_.push(N.unpackAlignment),_.push(N.colorSpace),_.join()}function ee(N,_){const H=r.get(N);if(N.isVideoTexture&&bt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&H.__version!==N.version){const J=N.image;if(J===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{re(H,N,_);return}}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,H.__webglTexture,a.TEXTURE0+_)}function F(N,_){const H=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){re(H,N,_);return}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,H.__webglTexture,a.TEXTURE0+_)}function V(N,_){const H=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){re(H,N,_);return}n.bindTexture(a.TEXTURE_3D,H.__webglTexture,a.TEXTURE0+_)}function ne(N,_){const H=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&H.__version!==N.version){pe(H,N,_);return}n.bindTexture(a.TEXTURE_CUBE_MAP,H.__webglTexture,a.TEXTURE0+_)}const be={[Hp]:a.REPEAT,[vi]:a.CLAMP_TO_EDGE,[Gp]:a.MIRRORED_REPEAT},Se={[Vn]:a.NEAREST,[VC]:a.NEAREST_MIPMAP_NEAREST,[bu]:a.NEAREST_MIPMAP_LINEAR,[Mn]:a.LINEAR,[kh]:a.LINEAR_MIPMAP_NEAREST,[us]:a.LINEAR_MIPMAP_LINEAR},I={[qC]:a.NEVER,[$C]:a.ALWAYS,[jC]:a.LESS,[Xm]:a.LEQUAL,[YC]:a.EQUAL,[Wm]:a.GEQUAL,[ZC]:a.GREATER,[KC]:a.NOTEQUAL};function oe(N,_){if(_.type===Yi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Mn||_.magFilter===kh||_.magFilter===bu||_.magFilter===us||_.minFilter===Mn||_.minFilter===kh||_.minFilter===bu||_.minFilter===us)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(N,a.TEXTURE_WRAP_S,be[_.wrapS]),a.texParameteri(N,a.TEXTURE_WRAP_T,be[_.wrapT]),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,be[_.wrapR]),a.texParameteri(N,a.TEXTURE_MAG_FILTER,Se[_.magFilter]),a.texParameteri(N,a.TEXTURE_MIN_FILTER,Se[_.minFilter]),_.compareFunction&&(a.texParameteri(N,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(N,a.TEXTURE_COMPARE_FUNC,I[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vn||_.minFilter!==bu&&_.minFilter!==us||_.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");a.texParameterf(N,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,o.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function _e(N,_){let H=!1;N.__webglInit===void 0&&(N.__webglInit=!0,_.addEventListener("dispose",L));const J=_.source;let he=x.get(J);he===void 0&&(he={},x.set(J,he));const se=q(_);if(se!==N.__cacheKey){he[se]===void 0&&(he[se]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,H=!0),he[se].usedTimes++;const Fe=he[N.__cacheKey];Fe!==void 0&&(he[N.__cacheKey].usedTimes--,Fe.usedTimes===0&&C(_)),N.__cacheKey=se,N.__webglTexture=he[se].texture}return H}function Ce(N,_,H){return Math.floor(Math.floor(N/H)/_)}function He(N,_,H,J){const se=N.updateRanges;if(se.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,_.width,_.height,H,J,_.data);else{se.sort((Ee,Te)=>Ee.start-Te.start);let Fe=0;for(let Ee=1;Ee<se.length;Ee++){const Te=se[Fe],ze=se[Ee],Be=Te.start+Te.count,Ue=Ce(ze.start,_.width,4),ft=Ce(Te.start,_.width,4);ze.start<=Be+1&&Ue===ft&&Ce(ze.start+ze.count-1,_.width,4)===Ue?Te.count=Math.max(Te.count,ze.start+ze.count-Te.start):(++Fe,se[Fe]=ze)}se.length=Fe+1;const we=a.getParameter(a.UNPACK_ROW_LENGTH),ke=a.getParameter(a.UNPACK_SKIP_PIXELS),et=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,_.width);for(let Ee=0,Te=se.length;Ee<Te;Ee++){const ze=se[Ee],Be=Math.floor(ze.start/4),Ue=Math.ceil(ze.count/4),ft=Be%_.width,Y=Math.floor(Be/_.width),Le=Ue,Ae=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ft),a.pixelStorei(a.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(a.TEXTURE_2D,0,ft,Y,Le,Ae,H,J,_.data)}N.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,we),a.pixelStorei(a.UNPACK_SKIP_PIXELS,ke),a.pixelStorei(a.UNPACK_SKIP_ROWS,et)}}function re(N,_,H){let J=a.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=a.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=a.TEXTURE_3D);const he=_e(N,_),se=_.source;n.bindTexture(J,N.__webglTexture,a.TEXTURE0+H);const Fe=r.get(se);if(se.version!==Fe.__version||he===!0){n.activeTexture(a.TEXTURE0+H);const we=Rt.getPrimaries(Rt.workingColorSpace),ke=_.colorSpace===Cr?null:Rt.getPrimaries(_.colorSpace),et=_.colorSpace===Cr||we===ke?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Ee=E(_.image,!1,o.maxTextureSize);Ee=At(_,Ee);const Te=c.convert(_.format,_.colorSpace),ze=c.convert(_.type);let Be=B(_.internalFormat,Te,ze,_.colorSpace,_.isVideoTexture);oe(J,_);let Ue;const ft=_.mipmaps,Y=_.isVideoTexture!==!0,Le=Fe.__version===void 0||he===!0,Ae=se.dataReady,Ie=z(_,Ee);if(_.isDepthTexture)Be=U(_.format===fs,_.type),Le&&(Y?n.texStorage2D(a.TEXTURE_2D,1,Be,Ee.width,Ee.height):n.texImage2D(a.TEXTURE_2D,0,Be,Ee.width,Ee.height,0,Te,ze,null));else if(_.isDataTexture)if(ft.length>0){Y&&Le&&n.texStorage2D(a.TEXTURE_2D,Ie,Be,ft[0].width,ft[0].height);for(let Me=0,ye=ft.length;Me<ye;Me++)Ue=ft[Me],Y?Ae&&n.texSubImage2D(a.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Te,ze,Ue.data):n.texImage2D(a.TEXTURE_2D,Me,Be,Ue.width,Ue.height,0,Te,ze,Ue.data);_.generateMipmaps=!1}else Y?(Le&&n.texStorage2D(a.TEXTURE_2D,Ie,Be,Ee.width,Ee.height),Ae&&He(_,Ee,Te,ze)):n.texImage2D(a.TEXTURE_2D,0,Be,Ee.width,Ee.height,0,Te,ze,Ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Y&&Le&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,Be,ft[0].width,ft[0].height,Ee.depth);for(let Me=0,ye=ft.length;Me<ye;Me++)if(Ue=ft[Me],_.format!==Oi)if(Te!==null)if(Y){if(Ae)if(_.layerUpdates.size>0){const De=zx(Ue.width,Ue.height,_.format,_.type);for(const at of _.layerUpdates){const zt=Ue.data.subarray(at*De/Ue.data.BYTES_PER_ELEMENT,(at+1)*De/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,at,Ue.width,Ue.height,1,Te,zt)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,0,Ue.width,Ue.height,Ee.depth,Te,Ue.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Me,Be,Ue.width,Ue.height,Ee.depth,0,Ue.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Ae&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,0,Ue.width,Ue.height,Ee.depth,Te,ze,Ue.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Me,Be,Ue.width,Ue.height,Ee.depth,0,Te,ze,Ue.data)}else{Y&&Le&&n.texStorage2D(a.TEXTURE_2D,Ie,Be,ft[0].width,ft[0].height);for(let Me=0,ye=ft.length;Me<ye;Me++)Ue=ft[Me],_.format!==Oi?Te!==null?Y?Ae&&n.compressedTexSubImage2D(a.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Te,Ue.data):n.compressedTexImage2D(a.TEXTURE_2D,Me,Be,Ue.width,Ue.height,0,Ue.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Ae&&n.texSubImage2D(a.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Te,ze,Ue.data):n.texImage2D(a.TEXTURE_2D,Me,Be,Ue.width,Ue.height,0,Te,ze,Ue.data)}else if(_.isDataArrayTexture)if(Y){if(Le&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,Be,Ee.width,Ee.height,Ee.depth),Ae)if(_.layerUpdates.size>0){const Me=zx(Ee.width,Ee.height,_.format,_.type);for(const ye of _.layerUpdates){const De=Ee.data.subarray(ye*Me/Ee.data.BYTES_PER_ELEMENT,(ye+1)*Me/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ye,Ee.width,Ee.height,1,Te,ze,De)}_.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,ze,Ee.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Be,Ee.width,Ee.height,Ee.depth,0,Te,ze,Ee.data);else if(_.isData3DTexture)Y?(Le&&n.texStorage3D(a.TEXTURE_3D,Ie,Be,Ee.width,Ee.height,Ee.depth),Ae&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,ze,Ee.data)):n.texImage3D(a.TEXTURE_3D,0,Be,Ee.width,Ee.height,Ee.depth,0,Te,ze,Ee.data);else if(_.isFramebufferTexture){if(Le)if(Y)n.texStorage2D(a.TEXTURE_2D,Ie,Be,Ee.width,Ee.height);else{let Me=Ee.width,ye=Ee.height;for(let De=0;De<Ie;De++)n.texImage2D(a.TEXTURE_2D,De,Be,Me,ye,0,Te,ze,null),Me>>=1,ye>>=1}}else if(ft.length>0){if(Y&&Le){const Me=je(ft[0]);n.texStorage2D(a.TEXTURE_2D,Ie,Be,Me.width,Me.height)}for(let Me=0,ye=ft.length;Me<ye;Me++)Ue=ft[Me],Y?Ae&&n.texSubImage2D(a.TEXTURE_2D,Me,0,0,Te,ze,Ue):n.texImage2D(a.TEXTURE_2D,Me,Be,Te,ze,Ue);_.generateMipmaps=!1}else if(Y){if(Le){const Me=je(Ee);n.texStorage2D(a.TEXTURE_2D,Ie,Be,Me.width,Me.height)}Ae&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Te,ze,Ee)}else n.texImage2D(a.TEXTURE_2D,0,Be,Te,ze,Ee);b(_)&&y(J),Fe.__version=se.version,_.onUpdate&&_.onUpdate(_)}N.__version=_.version}function pe(N,_,H){if(_.image.length!==6)return;const J=_e(N,_),he=_.source;n.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+H);const se=r.get(he);if(he.version!==se.__version||J===!0){n.activeTexture(a.TEXTURE0+H);const Fe=Rt.getPrimaries(Rt.workingColorSpace),we=_.colorSpace===Cr?null:Rt.getPrimaries(_.colorSpace),ke=_.colorSpace===Cr||Fe===we?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const et=_.isCompressedTexture||_.image[0].isCompressedTexture,Ee=_.image[0]&&_.image[0].isDataTexture,Te=[];for(let ye=0;ye<6;ye++)!et&&!Ee?Te[ye]=E(_.image[ye],!0,o.maxCubemapSize):Te[ye]=Ee?_.image[ye].image:_.image[ye],Te[ye]=At(_,Te[ye]);const ze=Te[0],Be=c.convert(_.format,_.colorSpace),Ue=c.convert(_.type),ft=B(_.internalFormat,Be,Ue,_.colorSpace),Y=_.isVideoTexture!==!0,Le=se.__version===void 0||J===!0,Ae=he.dataReady;let Ie=z(_,ze);oe(a.TEXTURE_CUBE_MAP,_);let Me;if(et){Y&&Le&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,ft,ze.width,ze.height);for(let ye=0;ye<6;ye++){Me=Te[ye].mipmaps;for(let De=0;De<Me.length;De++){const at=Me[De];_.format!==Oi?Be!==null?Y?Ae&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De,0,0,at.width,at.height,Be,at.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De,ft,at.width,at.height,0,at.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Ae&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De,0,0,at.width,at.height,Be,Ue,at.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De,ft,at.width,at.height,0,Be,Ue,at.data)}}}else{if(Me=_.mipmaps,Y&&Le){Me.length>0&&Ie++;const ye=je(Te[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,ft,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ee){Y?Ae&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Te[ye].width,Te[ye].height,Be,Ue,Te[ye].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ft,Te[ye].width,Te[ye].height,0,Be,Ue,Te[ye].data);for(let De=0;De<Me.length;De++){const zt=Me[De].image[ye].image;Y?Ae&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De+1,0,0,zt.width,zt.height,Be,Ue,zt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De+1,ft,zt.width,zt.height,0,Be,Ue,zt.data)}}else{Y?Ae&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Be,Ue,Te[ye]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ft,Be,Ue,Te[ye]);for(let De=0;De<Me.length;De++){const at=Me[De];Y?Ae&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De+1,0,0,Be,Ue,at.image[ye]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De+1,ft,Be,Ue,at.image[ye])}}}b(_)&&y(a.TEXTURE_CUBE_MAP),se.__version=he.version,_.onUpdate&&_.onUpdate(_)}N.__version=_.version}function Re(N,_,H,J,he,se){const Fe=c.convert(H.format,H.colorSpace),we=c.convert(H.type),ke=B(H.internalFormat,Fe,we,H.colorSpace),et=r.get(_),Ee=r.get(H);if(Ee.__renderTarget=_,!et.__hasExternalTextures){const Te=Math.max(1,_.width>>se),ze=Math.max(1,_.height>>se);he===a.TEXTURE_3D||he===a.TEXTURE_2D_ARRAY?n.texImage3D(he,se,ke,Te,ze,_.depth,0,Fe,we,null):n.texImage2D(he,se,ke,Te,ze,0,Fe,we,null)}n.bindFramebuffer(a.FRAMEBUFFER,N),Kt(_)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,J,he,Ee.__webglTexture,0,X(_)):(he===a.TEXTURE_2D||he>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,J,he,Ee.__webglTexture,se),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Xe(N,_,H){if(a.bindRenderbuffer(a.RENDERBUFFER,N),_.depthBuffer){const J=_.depthTexture,he=J&&J.isDepthTexture?J.type:null,se=U(_.stencilBuffer,he),Fe=_.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Kt(_)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X(_),se,_.width,_.height):H?a.renderbufferStorageMultisample(a.RENDERBUFFER,X(_),se,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,se,_.width,_.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Fe,a.RENDERBUFFER,N)}else{const J=_.textures;for(let he=0;he<J.length;he++){const se=J[he],Fe=c.convert(se.format,se.colorSpace),we=c.convert(se.type),ke=B(se.internalFormat,Fe,we,se.colorSpace);Kt(_)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X(_),ke,_.width,_.height):H?a.renderbufferStorageMultisample(a.RENDERBUFFER,X(_),ke,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,ke,_.width,_.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ve(N,_,H){const J=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,N),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(_.depthTexture);if(he.__renderTarget=_,(!he.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J){if(he.__webglInit===void 0&&(he.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),he.__webglTexture===void 0){he.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),oe(a.TEXTURE_CUBE_MAP,_.depthTexture);const et=c.convert(_.depthTexture.format),Ee=c.convert(_.depthTexture.type);let Te;_.depthTexture.format===Wa?Te=a.DEPTH_COMPONENT24:_.depthTexture.format===fs&&(Te=a.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Te,_.width,_.height,0,et,Ee,null)}}else ee(_.depthTexture,0);const se=he.__webglTexture,Fe=X(_),we=J?a.TEXTURE_CUBE_MAP_POSITIVE_X+H:a.TEXTURE_2D,ke=_.depthTexture.format===fs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(_.depthTexture.format===Wa)Kt(_)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ke,we,se,0,Fe):a.framebufferTexture2D(a.FRAMEBUFFER,ke,we,se,0);else if(_.depthTexture.format===fs)Kt(_)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ke,we,se,0,Fe):a.framebufferTexture2D(a.FRAMEBUFFER,ke,we,se,0);else throw new Error("Unknown depthTexture format")}function mt(N){const _=r.get(N),H=N.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==N.depthTexture){const J=N.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){const he=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",he)};J.addEventListener("dispose",he),_.__depthDisposeCallback=he}_.__boundDepthTexture=J}if(N.depthTexture&&!_.__autoAllocateDepthBuffer)if(H)for(let J=0;J<6;J++)Ve(_.__webglFramebuffer[J],N,J);else{const J=N.texture.mipmaps;J&&J.length>0?Ve(_.__webglFramebuffer[0],N,0):Ve(_.__webglFramebuffer,N,0)}else if(H){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=a.createRenderbuffer(),Xe(_.__webglDepthbuffer[J],N,!1);else{const he=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[J];a.bindRenderbuffer(a.RENDERBUFFER,se),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,se)}}else{const J=N.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=a.createRenderbuffer(),Xe(_.__webglDepthbuffer,N,!1);else{const he=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,se),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,se)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function tn(N,_,H){const J=r.get(N);_!==void 0&&Re(J.__webglFramebuffer,N,N.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),H!==void 0&&mt(N)}function vt(N){const _=N.texture,H=r.get(N),J=r.get(_);N.addEventListener("dispose",O);const he=N.textures,se=N.isWebGLCubeRenderTarget===!0,Fe=he.length>1;if(Fe||(J.__webglTexture===void 0&&(J.__webglTexture=a.createTexture()),J.__version=_.version,f.memory.textures++),se){H.__webglFramebuffer=[];for(let we=0;we<6;we++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[we]=[];for(let ke=0;ke<_.mipmaps.length;ke++)H.__webglFramebuffer[we][ke]=a.createFramebuffer()}else H.__webglFramebuffer[we]=a.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let we=0;we<_.mipmaps.length;we++)H.__webglFramebuffer[we]=a.createFramebuffer()}else H.__webglFramebuffer=a.createFramebuffer();if(Fe)for(let we=0,ke=he.length;we<ke;we++){const et=r.get(he[we]);et.__webglTexture===void 0&&(et.__webglTexture=a.createTexture(),f.memory.textures++)}if(N.samples>0&&Kt(N)===!1){H.__webglMultisampledFramebuffer=a.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let we=0;we<he.length;we++){const ke=he[we];H.__webglColorRenderbuffer[we]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,H.__webglColorRenderbuffer[we]);const et=c.convert(ke.format,ke.colorSpace),Ee=c.convert(ke.type),Te=B(ke.internalFormat,et,Ee,ke.colorSpace,N.isXRRenderTarget===!0),ze=X(N);a.renderbufferStorageMultisample(a.RENDERBUFFER,ze,Te,N.width,N.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,H.__webglColorRenderbuffer[we])}a.bindRenderbuffer(a.RENDERBUFFER,null),N.depthBuffer&&(H.__webglDepthRenderbuffer=a.createRenderbuffer(),Xe(H.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(se){n.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture),oe(a.TEXTURE_CUBE_MAP,_);for(let we=0;we<6;we++)if(_.mipmaps&&_.mipmaps.length>0)for(let ke=0;ke<_.mipmaps.length;ke++)Re(H.__webglFramebuffer[we][ke],N,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+we,ke);else Re(H.__webglFramebuffer[we],N,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);b(_)&&y(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Fe){for(let we=0,ke=he.length;we<ke;we++){const et=he[we],Ee=r.get(et);let Te=a.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Te=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Te,Ee.__webglTexture),oe(Te,et),Re(H.__webglFramebuffer,N,et,a.COLOR_ATTACHMENT0+we,Te,0),b(et)&&y(Te)}n.unbindTexture()}else{let we=a.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(we=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(we,J.__webglTexture),oe(we,_),_.mipmaps&&_.mipmaps.length>0)for(let ke=0;ke<_.mipmaps.length;ke++)Re(H.__webglFramebuffer[ke],N,_,a.COLOR_ATTACHMENT0,we,ke);else Re(H.__webglFramebuffer,N,_,a.COLOR_ATTACHMENT0,we,0);b(_)&&y(we),n.unbindTexture()}N.depthBuffer&&mt(N)}function gt(N){const _=N.textures;for(let H=0,J=_.length;H<J;H++){const he=_[H];if(b(he)){const se=P(N),Fe=r.get(he).__webglTexture;n.bindTexture(se,Fe),y(se),n.unbindTexture()}}}const Tt=[],st=[];function nn(N){if(N.samples>0){if(Kt(N)===!1){const _=N.textures,H=N.width,J=N.height;let he=a.COLOR_BUFFER_BIT;const se=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Fe=r.get(N),we=_.length>1;if(we)for(let et=0;et<_.length;et++)n.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+et,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+et,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const ke=N.texture.mipmaps;ke&&ke.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let et=0;et<_.length;et++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(he|=a.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(he|=a.STENCIL_BUFFER_BIT)),we){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Fe.__webglColorRenderbuffer[et]);const Ee=r.get(_[et]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ee,0)}a.blitFramebuffer(0,0,H,J,0,0,H,J,he,a.NEAREST),m===!0&&(Tt.length=0,st.length=0,Tt.push(a.COLOR_ATTACHMENT0+et),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Tt.push(se),st.push(se),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,st)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Tt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),we)for(let et=0;et<_.length;et++){n.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+et,a.RENDERBUFFER,Fe.__webglColorRenderbuffer[et]);const Ee=r.get(_[et]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+et,a.TEXTURE_2D,Ee,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const _=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[_])}}}function X(N){return Math.min(o.maxSamples,N.samples)}function Kt(N){const _=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function bt(N){const _=f.render.frame;v.get(N)!==_&&(v.set(N,_),N.update())}function At(N,_){const H=N.colorSpace,J=N.format,he=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||H!==Ro&&H!==Cr&&(Rt.getTransfer(H)===Wt?(J!==Oi||he!==Li)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",H)),_}function je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=A,this.setTexture2D=ee,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=ne,this.rebindTextures=tn,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function yU(a,e){function n(r,o=Cr){let c;const f=Rt.getTransfer(o);if(r===Li)return a.UNSIGNED_BYTE;if(r===zm)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Hm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===cS)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===uS)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===oS)return a.BYTE;if(r===lS)return a.SHORT;if(r===Zl)return a.UNSIGNED_SHORT;if(r===Im)return a.INT;if(r===ha)return a.UNSIGNED_INT;if(r===Yi)return a.FLOAT;if(r===pa)return a.HALF_FLOAT;if(r===fS)return a.ALPHA;if(r===dS)return a.RGB;if(r===Oi)return a.RGBA;if(r===Wa)return a.DEPTH_COMPONENT;if(r===fs)return a.DEPTH_STENCIL;if(r===hS)return a.RED;if(r===Gm)return a.RED_INTEGER;if(r===Co)return a.RG;if(r===Vm)return a.RG_INTEGER;if(r===km)return a.RGBA_INTEGER;if(r===Ku||r===$u||r===Qu||r===Ju)if(f===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ku)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ju)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ku)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$u)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ju)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vp||r===kp||r===Xp||r===Wp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Vp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qp||r===jp||r===Yp||r===Zp||r===Kp||r===$p||r===Qp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===qp||r===jp)return f===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Yp)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Zp)return c.COMPRESSED_R11_EAC;if(r===Kp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===$p)return c.COMPRESSED_RG11_EAC;if(r===Qp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Jp||r===em||r===tm||r===nm||r===im||r===am||r===rm||r===sm||r===om||r===lm||r===cm||r===um||r===fm||r===dm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Jp)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===em)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===tm)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nm)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===im)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===am)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rm)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sm)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===om)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lm)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cm)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===um)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fm)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dm)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hm||r===pm||r===mm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===hm)return f===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===mm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gm||r===vm||r===_m||r===xm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===gm)return c.COMPRESSED_RED_RGTC1_EXT;if(r===vm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_m)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Kl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const SU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bU=`
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

}`;class MU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new CS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new ma({vertexShader:SU,fragmentShader:bU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pi(new hs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EU extends Uo{constructor(e,n){super();const r=this;let o=null,c=1,f=null,d="local-floor",m=1,p=null,v=null,g=null,x=null,M=null,T=null;const E=typeof XRWebGLBinding<"u",b=new MU,y={},P=n.getContextAttributes();let B=null,U=null;const z=[],L=[],O=new ct;let Q=null;const C=new qi;C.viewport=new fn;const D=new qi;D.viewport=new fn;const k=[C,D],A=new L2;let W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let pe=z[re];return pe===void 0&&(pe=new dp,z[re]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(re){let pe=z[re];return pe===void 0&&(pe=new dp,z[re]=pe),pe.getGripSpace()},this.getHand=function(re){let pe=z[re];return pe===void 0&&(pe=new dp,z[re]=pe),pe.getHandSpace()};function ee(re){const pe=L.indexOf(re.inputSource);if(pe===-1)return;const Re=z[pe];Re!==void 0&&(Re.update(re.inputSource,re.frame,p||f),Re.dispatchEvent({type:re.type,data:re.inputSource}))}function F(){o.removeEventListener("select",ee),o.removeEventListener("selectstart",ee),o.removeEventListener("selectend",ee),o.removeEventListener("squeeze",ee),o.removeEventListener("squeezestart",ee),o.removeEventListener("squeezeend",ee),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",V);for(let re=0;re<z.length;re++){const pe=L[re];pe!==null&&(L[re]=null,z[re].disconnect(pe))}W=null,q=null,b.reset();for(const re in y)delete y[re];e.setRenderTarget(B),M=null,x=null,g=null,o=null,U=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(Q),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(B=e.getRenderTarget(),o.addEventListener("select",ee),o.addEventListener("selectstart",ee),o.addEventListener("selectend",ee),o.addEventListener("squeeze",ee),o.addEventListener("squeezestart",ee),o.addEventListener("squeezeend",ee),o.addEventListener("end",F),o.addEventListener("inputsourceschange",V),P.xrCompatible!==!0&&await n.makeXRCompatible(),Q=e.getPixelRatio(),e.getSize(O),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Xe=null,Ve=null;P.depth&&(Ve=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=P.stencil?fs:Wa,Xe=P.stencil?Kl:ha);const mt={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(mt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new Zi(x.textureWidth,x.textureHeight,{format:Oi,type:Li,depthTexture:new Ql(x.textureWidth,x.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Re={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,Re),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Zi(M.framebufferWidth,M.framebufferHeight,{format:Oi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await o.requestReferenceSpace(d),He.setContext(o),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function V(re){for(let pe=0;pe<re.removed.length;pe++){const Re=re.removed[pe],Xe=L.indexOf(Re);Xe>=0&&(L[Xe]=null,z[Xe].disconnect(Re))}for(let pe=0;pe<re.added.length;pe++){const Re=re.added[pe];let Xe=L.indexOf(Re);if(Xe===-1){for(let mt=0;mt<z.length;mt++)if(mt>=L.length){L.push(Re),Xe=mt;break}else if(L[mt]===null){L[mt]=Re,Xe=mt;break}if(Xe===-1)break}const Ve=z[Xe];Ve&&Ve.connect(Re)}}const ne=new ue,be=new ue;function Se(re,pe,Re){ne.setFromMatrixPosition(pe.matrixWorld),be.setFromMatrixPosition(Re.matrixWorld);const Xe=ne.distanceTo(be),Ve=pe.projectionMatrix.elements,mt=Re.projectionMatrix.elements,tn=Ve[14]/(Ve[10]-1),vt=Ve[14]/(Ve[10]+1),gt=(Ve[9]+1)/Ve[5],Tt=(Ve[9]-1)/Ve[5],st=(Ve[8]-1)/Ve[0],nn=(mt[8]+1)/mt[0],X=tn*st,Kt=tn*nn,bt=Xe/(-st+nn),At=bt*-st;if(pe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(At),re.translateZ(bt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ve[10]===-1)re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const je=tn+bt,N=vt+bt,_=X-At,H=Kt+(Xe-At),J=gt*vt/N*je,he=Tt*vt/N*je;re.projectionMatrix.makePerspective(_,H,J,he,je,N),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function I(re,pe){pe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(pe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let pe=re.near,Re=re.far;b.texture!==null&&(b.depthNear>0&&(pe=b.depthNear),b.depthFar>0&&(Re=b.depthFar)),A.near=D.near=C.near=pe,A.far=D.far=C.far=Re,(W!==A.near||q!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),W=A.near,q=A.far),A.layers.mask=re.layers.mask|6,C.layers.mask=A.layers.mask&3,D.layers.mask=A.layers.mask&5;const Xe=re.parent,Ve=A.cameras;I(A,Xe);for(let mt=0;mt<Ve.length;mt++)I(Ve[mt],Xe);Ve.length===2?Se(A,C,D):A.projectionMatrix.copy(C.projectionMatrix),oe(re,A,Xe)};function oe(re,pe,Re){Re===null?re.matrix.copy(pe.matrixWorld):(re.matrix.copy(Re.matrixWorld),re.matrix.invert(),re.matrix.multiply(pe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ym*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(re){m=re,x!==null&&(x.fixedFoveation=re),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=re)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(A)},this.getCameraTexture=function(re){return y[re]};let _e=null;function Ce(re,pe){if(v=pe.getViewerPose(p||f),T=pe,v!==null){const Re=v.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Xe=!1;Re.length!==A.cameras.length&&(A.cameras.length=0,Xe=!0);for(let vt=0;vt<Re.length;vt++){const gt=Re[vt];let Tt=null;if(M!==null)Tt=M.getViewport(gt);else{const nn=g.getViewSubImage(x,gt);Tt=nn.viewport,vt===0&&(e.setRenderTargetTextures(U,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(U))}let st=k[vt];st===void 0&&(st=new qi,st.layers.enable(vt),st.viewport=new fn,k[vt]=st),st.matrix.fromArray(gt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(gt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),vt===0&&(A.matrix.copy(st.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Xe===!0&&A.cameras.push(st)}const Ve=o.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){g=r.getBinding();const vt=g.getDepthInformation(Re[0]);vt&&vt.isValid&&vt.texture&&b.init(vt,o.renderState)}if(Ve&&Ve.includes("camera-access")&&E){e.state.unbindTexture(),g=r.getBinding();for(let vt=0;vt<Re.length;vt++){const gt=Re[vt].camera;if(gt){let Tt=y[gt];Tt||(Tt=new CS,y[gt]=Tt);const st=g.getCameraImage(gt);Tt.sourceTexture=st}}}}for(let Re=0;Re<z.length;Re++){const Xe=L[Re],Ve=z[Re];Xe!==null&&Ve!==void 0&&Ve.update(Xe,pe,p||f)}_e&&_e(re,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),T=null}const He=new wS;He.setAnimationLoop(Ce),this.setAnimationLoop=function(re){_e=re},this.dispose=function(){}}}const rs=new qa,TU=new pn;function AU(a,e){function n(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function r(b,y){y.color.getRGB(b.fogColor.value,bS(a)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function o(b,y,P,B,U){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(b,y):y.isMeshToonMaterial?(c(b,y),g(b,y)):y.isMeshPhongMaterial?(c(b,y),v(b,y)):y.isMeshStandardMaterial?(c(b,y),x(b,y),y.isMeshPhysicalMaterial&&M(b,y,U)):y.isMeshMatcapMaterial?(c(b,y),T(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),E(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(f(b,y),y.isLineDashedMaterial&&d(b,y)):y.isPointsMaterial?m(b,y,P,B):y.isSpriteMaterial?p(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,n(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,n(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===ai&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,n(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===ai&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,n(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,n(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const P=e.get(y),B=P.envMap,U=P.envMapRotation;B&&(b.envMap.value=B,rs.copy(U),rs.x*=-1,rs.y*=-1,rs.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),b.envMapRotation.value.setFromMatrix4(TU.makeRotationFromEuler(rs)),b.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,b.aoMapTransform))}function f(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,n(y.map,b.mapTransform))}function d(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function m(b,y,P,B){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*P,b.scale.value=B*.5,y.map&&(b.map.value=y.map,n(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function p(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,n(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function v(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function g(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function x(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function M(b,y,P){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ai&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,b.specularIntensityMapTransform))}function T(b,y){y.matcap&&(b.matcap.value=y.matcap)}function E(b,y){const P=e.get(y).light;b.referencePosition.value.setFromMatrixPosition(P.matrixWorld),b.nearDistance.value=P.shadow.camera.near,b.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function CU(a,e,n,r){let o={},c={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,B){const U=B.program;r.uniformBlockBinding(P,U)}function p(P,B){let U=o[P.id];U===void 0&&(T(P),U=v(P),o[P.id]=U,P.addEventListener("dispose",b));const z=B.program;r.updateUBOMapping(P,z);const L=e.render.frame;c[P.id]!==L&&(x(P),c[P.id]=L)}function v(P){const B=g();P.__bindingPointIndex=B;const U=a.createBuffer(),z=P.__size,L=P.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,z,L),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,B,U),U}function g(){for(let P=0;P<d;P++)if(f.indexOf(P)===-1)return f.push(P),P;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const B=o[P.id],U=P.uniforms,z=P.__cache;a.bindBuffer(a.UNIFORM_BUFFER,B);for(let L=0,O=U.length;L<O;L++){const Q=Array.isArray(U[L])?U[L]:[U[L]];for(let C=0,D=Q.length;C<D;C++){const k=Q[C];if(M(k,L,C,z)===!0){const A=k.__offset,W=Array.isArray(k.value)?k.value:[k.value];let q=0;for(let ee=0;ee<W.length;ee++){const F=W[ee],V=E(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,a.bufferSubData(a.UNIFORM_BUFFER,A+q,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,q),q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,A,k.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function M(P,B,U,z){const L=P.value,O=B+"_"+U;if(z[O]===void 0)return typeof L=="number"||typeof L=="boolean"?z[O]=L:z[O]=L.clone(),!0;{const Q=z[O];if(typeof L=="number"||typeof L=="boolean"){if(Q!==L)return z[O]=L,!0}else if(Q.equals(L)===!1)return Q.copy(L),!0}return!1}function T(P){const B=P.uniforms;let U=0;const z=16;for(let O=0,Q=B.length;O<Q;O++){const C=Array.isArray(B[O])?B[O]:[B[O]];for(let D=0,k=C.length;D<k;D++){const A=C[D],W=Array.isArray(A.value)?A.value:[A.value];for(let q=0,ee=W.length;q<ee;q++){const F=W[q],V=E(F),ne=U%z,be=ne%V.boundary,Se=ne+be;U+=be,Se!==0&&z-Se<V.storage&&(U+=z-Se),A.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=U,U+=V.storage}}}const L=U%z;return L>0&&(U+=z-L),P.__size=U,P.__cache={},this}function E(P){const B={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(B.boundary=4,B.storage=4):P.isVector2?(B.boundary=8,B.storage=8):P.isVector3||P.isColor?(B.boundary=16,B.storage=12):P.isVector4?(B.boundary=16,B.storage=16):P.isMatrix3?(B.boundary=48,B.storage=48):P.isMatrix4?(B.boundary=64,B.storage=64):P.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",P),B}function b(P){const B=P.target;B.removeEventListener("dispose",b);const U=f.indexOf(B.__bindingPointIndex);f.splice(U,1),a.deleteBuffer(o[B.id]),delete o[B.id],delete c[B.id]}function y(){for(const P in o)a.deleteBuffer(o[P]);f=[],o={},c={}}return{bind:m,update:p,dispose:y}}const RU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function wU(){return ra===null&&(ra=new TS(RU,16,16,Co,pa),ra.name="DFG_LUT",ra.minFilter=Mn,ra.magFilter=Mn,ra.wrapS=vi,ra.wrapT=vi,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class DU{constructor(e={}){const{canvas:n=QC(),context:r=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Li}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=f;const E=M,b=new Set([km,Vm,Gm]),y=new Set([Li,ha,Zl,Kl,zm,Hm]),P=new Uint32Array(4),B=new Int32Array(4);let U=null,z=null;const L=[],O=[];let Q=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1;this._outputColorSpace=Ui;let k=0,A=0,W=null,q=-1,ee=null;const F=new fn,V=new fn;let ne=null;const be=new Bt(0);let Se=0,I=n.width,oe=n.height,_e=1,Ce=null,He=null;const re=new fn(0,0,I,oe),pe=new fn(0,0,I,oe);let Re=!1;const Xe=new AS;let Ve=!1,mt=!1;const tn=new pn,vt=new ue,gt=new fn,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function nn(){return W===null?_e:1}let X=r;function Kt(w,K){return n.getContext(w,K)}try{const w={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bm}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",zt,!1),n.addEventListener("webglcontextcreationerror",Ct,!1),X===null){const K="webgl2";if(X=Kt(K,w),X===null)throw Kt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ut("WebGLRenderer: "+w.message),w}let bt,At,je,N,_,H,J,he,se,Fe,we,ke,et,Ee,Te,ze,Be,Ue,ft,Y,Le,Ae,Ie,Me;function ye(){bt=new ww(X),bt.init(),Ae=new yU(X,bt),At=new yw(X,bt,e,Ae),je=new _U(X,bt),At.reversedDepthBuffer&&x&&je.buffers.depth.setReversed(!0),N=new Nw(X),_=new iU,H=new xU(X,bt,je,_,At,Ae,N),J=new bw(C),he=new Rw(C),se=new F2(X),Ie=new _w(X,se),Fe=new Dw(X,se,N,Ie),we=new Ow(X,Fe,se,N),ft=new Lw(X,At,H),ze=new Sw(_),ke=new nU(C,J,he,bt,At,Ie,ze),et=new AU(C,_),Ee=new rU,Te=new fU(bt),Ue=new vw(C,J,he,je,we,T,m),Be=new gU(C,we,At),Me=new CU(X,N,At,je),Y=new xw(X,bt,N),Le=new Uw(X,bt,N),N.programs=ke.programs,C.capabilities=At,C.extensions=bt,C.properties=_,C.renderLists=Ee,C.shadowMap=Be,C.state=je,C.info=N}ye(),E!==Li&&(Q=new Fw(E,n.width,n.height,o,c));const De=new EU(C,X);this.xr=De,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=bt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=bt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(w){w!==void 0&&(_e=w,this.setSize(I,oe,!1))},this.getSize=function(w){return w.set(I,oe)},this.setSize=function(w,K,fe=!0){if(De.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,oe=K,n.width=Math.floor(w*_e),n.height=Math.floor(K*_e),fe===!0&&(n.style.width=w+"px",n.style.height=K+"px"),Q!==null&&Q.setSize(n.width,n.height),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(I*_e,oe*_e).floor()},this.setDrawingBufferSize=function(w,K,fe){I=w,oe=K,_e=fe,n.width=Math.floor(w*fe),n.height=Math.floor(K*fe),this.setViewport(0,0,w,K)},this.setEffects=function(w){if(E===Li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let K=0;K<w.length;K++)if(w[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Q.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,K,fe,le){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,K,fe,le),je.viewport(F.copy(re).multiplyScalar(_e).round())},this.getScissor=function(w){return w.copy(pe)},this.setScissor=function(w,K,fe,le){w.isVector4?pe.set(w.x,w.y,w.z,w.w):pe.set(w,K,fe,le),je.scissor(V.copy(pe).multiplyScalar(_e).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(w){je.setScissorTest(Re=w)},this.setOpaqueSort=function(w){Ce=w},this.setTransparentSort=function(w){He=w},this.getClearColor=function(w){return w.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,fe=!0){let le=0;if(w){let te=!1;if(W!==null){const Ne=W.texture.format;te=b.has(Ne)}if(te){const Ne=W.texture.type,Ge=y.has(Ne),Oe=Ue.getClearColor(),We=Ue.getClearAlpha(),Ye=Oe.r,tt=Oe.g,Ze=Oe.b;Ge?(P[0]=Ye,P[1]=tt,P[2]=Ze,P[3]=We,X.clearBufferuiv(X.COLOR,0,P)):(B[0]=Ye,B[1]=tt,B[2]=Ze,B[3]=We,X.clearBufferiv(X.COLOR,0,B))}else le|=X.COLOR_BUFFER_BIT}K&&(le|=X.DEPTH_BUFFER_BIT),fe&&(le|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",zt,!1),n.removeEventListener("webglcontextcreationerror",Ct,!1),Ue.dispose(),Ee.dispose(),Te.dispose(),_.dispose(),J.dispose(),he.dispose(),we.dispose(),Ie.dispose(),Me.dispose(),ke.dispose(),De.dispose(),De.removeEventListener("sessionstart",xs),De.removeEventListener("sessionend",Po),Ji.stop()};function at(w){w.preventDefault(),vx("WebGLRenderer: Context Lost."),D=!0}function zt(){vx("WebGLRenderer: Context Restored."),D=!1;const w=N.autoReset,K=Be.enabled,fe=Be.autoUpdate,le=Be.needsUpdate,te=Be.type;ye(),N.autoReset=w,Be.enabled=K,Be.autoUpdate=fe,Be.needsUpdate=le,Be.type=te}function Ct(w){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function kn(w){const K=w.target;K.removeEventListener("dispose",kn),Bi(K)}function Bi(w){cc(w),_.remove(w)}function cc(w){const K=_.get(w).programs;K!==void 0&&(K.forEach(function(fe){ke.releaseProgram(fe)}),w.isShaderMaterial&&ke.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,fe,le,te,Ne){K===null&&(K=Tt);const Ge=te.isMesh&&te.matrixWorld.determinant()<0,Oe=Pr(w,K,fe,le,te);je.setMaterial(le,Ge);let We=fe.index,Ye=1;if(le.wireframe===!0){if(We=Fe.getWireframeAttribute(fe),We===void 0)return;Ye=2}const tt=fe.drawRange,Ze=fe.attributes.position;let nt=tt.start*Ye,Nt=(tt.start+tt.count)*Ye;Ne!==null&&(nt=Math.max(nt,Ne.start*Ye),Nt=Math.min(Nt,(Ne.start+Ne.count)*Ye)),We!==null?(nt=Math.max(nt,0),Nt=Math.min(Nt,We.count)):Ze!=null&&(nt=Math.max(nt,0),Nt=Math.min(Nt,Ze.count));const an=Nt-nt;if(an<0||an===1/0)return;Ie.setup(te,le,Oe,fe,We);let Qt,It=Y;if(We!==null&&(Qt=se.get(We),It=Le,It.setIndex(Qt)),te.isMesh)le.wireframe===!0?(je.setLineWidth(le.wireframeLinewidth*nn()),It.setMode(X.LINES)):It.setMode(X.TRIANGLES);else if(te.isLine){let $e=le.linewidth;$e===void 0&&($e=1),je.setLineWidth($e*nn()),te.isLineSegments?It.setMode(X.LINES):te.isLineLoop?It.setMode(X.LINE_LOOP):It.setMode(X.LINE_STRIP)}else te.isPoints?It.setMode(X.POINTS):te.isSprite&&It.setMode(X.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)$l("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))It.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const $e=te._multiDrawStarts,Lt=te._multiDrawCounts,ot=te._multiDrawCount,Un=We?se.get(We).bytesPerElement:1,va=_.get(le).currentProgram.getUniforms();for(let Nn=0;Nn<ot;Nn++)va.setValue(X,"_gl_DrawID",Nn),It.render($e[Nn]/Un,Lt[Nn])}else if(te.isInstancedMesh)It.renderInstances(nt,an,te.count);else if(fe.isInstancedBufferGeometry){const $e=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Lt=Math.min(fe.instanceCount,$e);It.renderInstances(nt,an,Lt)}else It.render(nt,an)};function Lo(w,K,fe){w.transparent===!0&&w.side===Ga&&w.forceSinglePass===!1?(w.side=ai,w.needsUpdate=!0,Ss(w,K,fe),w.side=Ur,w.needsUpdate=!0,Ss(w,K,fe),w.side=Ga):Ss(w,K,fe)}this.compile=function(w,K,fe=null){fe===null&&(fe=w),z=Te.get(fe),z.init(K),O.push(z),fe.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(z.pushLight(te),te.castShadow&&z.pushShadow(te))}),w!==fe&&w.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(z.pushLight(te),te.castShadow&&z.pushShadow(te))}),z.setupLights();const le=new Set;return w.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ne=te.material;if(Ne)if(Array.isArray(Ne))for(let Ge=0;Ge<Ne.length;Ge++){const Oe=Ne[Ge];Lo(Oe,fe,te),le.add(Oe)}else Lo(Ne,fe,te),le.add(Ne)}),z=O.pop(),le},this.compileAsync=function(w,K,fe=null){const le=this.compile(w,K,fe);return new Promise(te=>{function Ne(){if(le.forEach(function(Ge){_.get(Ge).currentProgram.isReady()&&le.delete(Ge)}),le.size===0){te(w);return}setTimeout(Ne,10)}bt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let _s=null;function Oo(w){_s&&_s(w)}function xs(){Ji.stop()}function Po(){Ji.start()}const Ji=new wS;Ji.setAnimationLoop(Oo),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(w){_s=w,De.setAnimationLoop(w),w===null?Ji.stop():Ji.start()},De.addEventListener("sessionstart",xs),De.addEventListener("sessionend",Po),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const fe=De.enabled===!0&&De.isPresenting===!0,le=Q!==null&&(W===null||fe)&&Q.begin(C,W);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(Q===null||Q.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(K),K=De.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,K,W),z=Te.get(w,O.length),z.init(K),O.push(z),tn.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Xe.setFromProjectionMatrix(tn,ua,K.reversedDepth),mt=this.localClippingEnabled,Ve=ze.init(this.clippingPlanes,mt),U=Ee.get(w,L.length),U.init(),L.push(U),De.enabled===!0&&De.isPresenting===!0){const Ge=C.xr.getDepthSensingMesh();Ge!==null&&yi(Ge,K,-1/0,C.sortObjects)}yi(w,K,0,C.sortObjects),U.finish(),C.sortObjects===!0&&U.sort(Ce,He),st=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,st&&Ue.addToRenderList(U,w),this.info.render.frame++,Ve===!0&&ze.beginShadows();const te=z.state.shadowsArray;if(Be.render(te,w,K),Ve===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&Q.hasRenderPass())===!1){const Ge=U.opaque,Oe=U.transmissive;if(z.setupLights(),K.isArrayCamera){const We=K.cameras;if(Oe.length>0)for(let Ye=0,tt=We.length;Ye<tt;Ye++){const Ze=We[Ye];Dn(Ge,Oe,w,Ze)}st&&Ue.render(w);for(let Ye=0,tt=We.length;Ye<tt;Ye++){const Ze=We[Ye];gn(U,w,Ze,Ze.viewport)}}else Oe.length>0&&Dn(Ge,Oe,w,K),st&&Ue.render(w),gn(U,w,K)}W!==null&&A===0&&(H.updateMultisampleRenderTarget(W),H.updateRenderTargetMipmap(W)),le&&Q.end(C),w.isScene===!0&&w.onAfterRender(C,w,K),Ie.resetDefaultState(),q=-1,ee=null,O.pop(),O.length>0?(z=O[O.length-1],Ve===!0&&ze.setGlobalState(C.clippingPlanes,z.state.camera)):z=null,L.pop(),L.length>0?U=L[L.length-1]:U=null};function yi(w,K,fe,le){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)fe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLight)z.pushLight(w),w.castShadow&&z.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Xe.intersectsSprite(w)){le&&gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(tn);const Ge=we.update(w),Oe=w.material;Oe.visible&&U.push(w,Ge,Oe,fe,gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Xe.intersectsObject(w))){const Ge=we.update(w),Oe=w.material;if(le&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),gt.copy(w.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),gt.copy(Ge.boundingSphere.center)),gt.applyMatrix4(w.matrixWorld).applyMatrix4(tn)),Array.isArray(Oe)){const We=Ge.groups;for(let Ye=0,tt=We.length;Ye<tt;Ye++){const Ze=We[Ye],nt=Oe[Ze.materialIndex];nt&&nt.visible&&U.push(w,Ge,nt,fe,gt.z,Ze)}}else Oe.visible&&U.push(w,Ge,Oe,fe,gt.z,null)}}const Ne=w.children;for(let Ge=0,Oe=Ne.length;Ge<Oe;Ge++)yi(Ne[Ge],K,fe,le)}function gn(w,K,fe,le){const{opaque:te,transmissive:Ne,transparent:Ge}=w;z.setupLightsView(fe),Ve===!0&&ze.setGlobalState(C.clippingPlanes,fe),le&&je.viewport(F.copy(le)),te.length>0&&Ii(te,K,fe),Ne.length>0&&Ii(Ne,K,fe),Ge.length>0&&Ii(Ge,K,fe),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Dn(w,K,fe,le){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[le.id]===void 0){const nt=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[le.id]=new Zi(1,1,{generateMipmaps:!0,type:nt?pa:Li,minFilter:us,samples:At.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ne=z.state.transmissionRenderTarget[le.id],Ge=le.viewport||F;Ne.setSize(Ge.z*C.transmissionResolutionScale,Ge.w*C.transmissionResolutionScale);const Oe=C.getRenderTarget(),We=C.getActiveCubeFace(),Ye=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(be),Se=C.getClearAlpha(),Se<1&&C.setClearColor(16777215,.5),C.clear(),st&&Ue.render(fe);const tt=C.toneMapping;C.toneMapping=da;const Ze=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),z.setupLightsView(le),Ve===!0&&ze.setGlobalState(C.clippingPlanes,le),Ii(w,fe,le),H.updateMultisampleRenderTarget(Ne),H.updateRenderTargetMipmap(Ne),bt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Nt=0,an=K.length;Nt<an;Nt++){const Qt=K[Nt],{object:It,geometry:$e,material:Lt,group:ot}=Qt;if(Lt.side===Ga&&It.layers.test(le.layers)){const Un=Lt.side;Lt.side=ai,Lt.needsUpdate=!0,ys(It,fe,le,$e,Lt,ot),Lt.side=Un,Lt.needsUpdate=!0,nt=!0}}nt===!0&&(H.updateMultisampleRenderTarget(Ne),H.updateRenderTargetMipmap(Ne))}C.setRenderTarget(Oe,We,Ye),C.setClearColor(be,Se),Ze!==void 0&&(le.viewport=Ze),C.toneMapping=tt}function Ii(w,K,fe){const le=K.isScene===!0?K.overrideMaterial:null;for(let te=0,Ne=w.length;te<Ne;te++){const Ge=w[te],{object:Oe,geometry:We,group:Ye}=Ge;let tt=Ge.material;tt.allowOverride===!0&&le!==null&&(tt=le),Oe.layers.test(fe.layers)&&ys(Oe,K,fe,We,tt,Ye)}}function ys(w,K,fe,le,te,Ne){w.onBeforeRender(C,K,fe,le,te,Ne),w.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),te.onBeforeRender(C,K,fe,le,w,Ne),te.transparent===!0&&te.side===Ga&&te.forceSinglePass===!1?(te.side=ai,te.needsUpdate=!0,C.renderBufferDirect(fe,K,le,te,w,Ne),te.side=Ur,te.needsUpdate=!0,C.renderBufferDirect(fe,K,le,te,w,Ne),te.side=Ga):C.renderBufferDirect(fe,K,le,te,w,Ne),w.onAfterRender(C,K,fe,le,te,Ne)}function Ss(w,K,fe){K.isScene!==!0&&(K=Tt);const le=_.get(w),te=z.state.lights,Ne=z.state.shadowsArray,Ge=te.state.version,Oe=ke.getParameters(w,te.state,Ne,K,fe),We=ke.getProgramCacheKey(Oe);let Ye=le.programs;le.environment=w.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(w.isMeshStandardMaterial?he:J).get(w.envMap||le.environment),le.envMapRotation=le.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,Ye===void 0&&(w.addEventListener("dispose",kn),Ye=new Map,le.programs=Ye);let tt=Ye.get(We);if(tt!==void 0){if(le.currentProgram===tt&&le.lightsStateVersion===Ge)return Fo(w,Oe),tt}else Oe.uniforms=ke.getUniforms(w),w.onBeforeCompile(Oe,C),tt=ke.acquireProgram(Oe,We),Ye.set(We,tt),le.uniforms=Oe.uniforms;const Ze=le.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=ze.uniform),Fo(w,Oe),le.needsLights=Za(w),le.lightsStateVersion=Ge,le.needsLights&&(Ze.ambientLightColor.value=te.state.ambient,Ze.lightProbe.value=te.state.probe,Ze.directionalLights.value=te.state.directional,Ze.directionalLightShadows.value=te.state.directionalShadow,Ze.spotLights.value=te.state.spot,Ze.spotLightShadows.value=te.state.spotShadow,Ze.rectAreaLights.value=te.state.rectArea,Ze.ltc_1.value=te.state.rectAreaLTC1,Ze.ltc_2.value=te.state.rectAreaLTC2,Ze.pointLights.value=te.state.point,Ze.pointLightShadows.value=te.state.pointShadow,Ze.hemisphereLights.value=te.state.hemi,Ze.directionalShadowMap.value=te.state.directionalShadowMap,Ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ze.spotShadowMap.value=te.state.spotShadowMap,Ze.spotLightMatrix.value=te.state.spotLightMatrix,Ze.spotLightMap.value=te.state.spotLightMap,Ze.pointShadowMap.value=te.state.pointShadowMap,Ze.pointShadowMatrix.value=te.state.pointShadowMatrix),le.currentProgram=tt,le.uniformsList=null,tt}function uc(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=ef.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function Fo(w,K){const fe=_.get(w);fe.outputColorSpace=K.outputColorSpace,fe.batching=K.batching,fe.batchingColor=K.batchingColor,fe.instancing=K.instancing,fe.instancingColor=K.instancingColor,fe.instancingMorph=K.instancingMorph,fe.skinning=K.skinning,fe.morphTargets=K.morphTargets,fe.morphNormals=K.morphNormals,fe.morphColors=K.morphColors,fe.morphTargetsCount=K.morphTargetsCount,fe.numClippingPlanes=K.numClippingPlanes,fe.numIntersection=K.numClipIntersection,fe.vertexAlphas=K.vertexAlphas,fe.vertexTangents=K.vertexTangents,fe.toneMapping=K.toneMapping}function Pr(w,K,fe,le,te){K.isScene!==!0&&(K=Tt),H.resetTextureUnits();const Ne=K.fog,Ge=le.isMeshStandardMaterial?K.environment:null,Oe=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ro,We=(le.isMeshStandardMaterial?he:J).get(le.envMap||Ge),Ye=le.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,tt=!!fe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ze=!!fe.morphAttributes.position,nt=!!fe.morphAttributes.normal,Nt=!!fe.morphAttributes.color;let an=da;le.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(an=C.toneMapping);const Qt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,It=Qt!==void 0?Qt.length:0,$e=_.get(le),Lt=z.state.lights;if(Ve===!0&&(mt===!0||w!==ee)){const On=w===ee&&le.id===q;ze.setState(le,w,On)}let ot=!1;le.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Lt.state.version||$e.outputColorSpace!==Oe||te.isBatchedMesh&&$e.batching===!1||!te.isBatchedMesh&&$e.batching===!0||te.isBatchedMesh&&$e.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&$e.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&$e.instancing===!1||!te.isInstancedMesh&&$e.instancing===!0||te.isSkinnedMesh&&$e.skinning===!1||!te.isSkinnedMesh&&$e.skinning===!0||te.isInstancedMesh&&$e.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&$e.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&$e.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&$e.instancingMorph===!1&&te.morphTexture!==null||$e.envMap!==We||le.fog===!0&&$e.fog!==Ne||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ze.numPlanes||$e.numIntersection!==ze.numIntersection)||$e.vertexAlphas!==Ye||$e.vertexTangents!==tt||$e.morphTargets!==Ze||$e.morphNormals!==nt||$e.morphColors!==Nt||$e.toneMapping!==an||$e.morphTargetsCount!==It)&&(ot=!0):(ot=!0,$e.__version=le.version);let Un=$e.currentProgram;ot===!0&&(Un=Ss(le,K,te));let va=!1,Nn=!1,Si=!1;const Ht=Un.getUniforms(),Ln=$e.uniforms;if(je.useProgram(Un.program)&&(va=!0,Nn=!0,Si=!0),le.id!==q&&(q=le.id,Nn=!0),va||ee!==w){je.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ht.setValue(X,"projectionMatrix",w.projectionMatrix),Ht.setValue(X,"viewMatrix",w.matrixWorldInverse);const Pn=Ht.map.cameraPosition;Pn!==void 0&&Pn.setValue(X,vt.setFromMatrixPosition(w.matrixWorld)),At.logarithmicDepthBuffer&&Ht.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Ht.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),ee!==w&&(ee=w,Nn=!0,Si=!0)}if($e.needsLights&&(Lt.state.directionalShadowMap.length>0&&Ht.setValue(X,"directionalShadowMap",Lt.state.directionalShadowMap,H),Lt.state.spotShadowMap.length>0&&Ht.setValue(X,"spotShadowMap",Lt.state.spotShadowMap,H),Lt.state.pointShadowMap.length>0&&Ht.setValue(X,"pointShadowMap",Lt.state.pointShadowMap,H)),te.isSkinnedMesh){Ht.setOptional(X,te,"bindMatrix"),Ht.setOptional(X,te,"bindMatrixInverse");const On=te.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),Ht.setValue(X,"boneTexture",On.boneTexture,H))}te.isBatchedMesh&&(Ht.setOptional(X,te,"batchingTexture"),Ht.setValue(X,"batchingTexture",te._matricesTexture,H),Ht.setOptional(X,te,"batchingIdTexture"),Ht.setValue(X,"batchingIdTexture",te._indirectTexture,H),Ht.setOptional(X,te,"batchingColorTexture"),te._colorsTexture!==null&&Ht.setValue(X,"batchingColorTexture",te._colorsTexture,H));const En=fe.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&ft.update(te,fe,Un),(Nn||$e.receiveShadow!==te.receiveShadow)&&($e.receiveShadow=te.receiveShadow,Ht.setValue(X,"receiveShadow",te.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Ln.envMap.value=We,Ln.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&K.environment!==null&&(Ln.envMapIntensity.value=K.environmentIntensity),Ln.dfgLUT!==void 0&&(Ln.dfgLUT.value=wU()),Nn&&(Ht.setValue(X,"toneMappingExposure",C.toneMappingExposure),$e.needsLights&&Bo(Ln,Si),Ne&&le.fog===!0&&et.refreshFogUniforms(Ln,Ne),et.refreshMaterialUniforms(Ln,le,_e,oe,z.state.transmissionRenderTarget[w.id]),ef.upload(X,uc($e),Ln,H)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(ef.upload(X,uc($e),Ln,H),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Ht.setValue(X,"center",te.center),Ht.setValue(X,"modelViewMatrix",te.modelViewMatrix),Ht.setValue(X,"normalMatrix",te.normalMatrix),Ht.setValue(X,"modelMatrix",te.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const On=le.uniformsGroups;for(let Pn=0,bs=On.length;Pn<bs;Pn++){const zi=On[Pn];Me.update(zi,Un),Me.bind(zi,Un)}}return Un}function Bo(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function Za(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,K,fe){const le=_.get(w);le.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),_.get(w.texture).__webglTexture=K,_.get(w.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:fe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,K){const fe=_.get(w);fe.__webglFramebuffer=K,fe.__useDefaultFramebuffer=K===void 0};const Ka=X.createFramebuffer();this.setRenderTarget=function(w,K=0,fe=0){W=w,k=K,A=fe;let le=null,te=!1,Ne=!1;if(w){const Oe=_.get(w);if(Oe.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(X.FRAMEBUFFER,Oe.__webglFramebuffer),F.copy(w.viewport),V.copy(w.scissor),ne=w.scissorTest,je.viewport(F),je.scissor(V),je.setScissorTest(ne),q=-1;return}else if(Oe.__webglFramebuffer===void 0)H.setupRenderTarget(w);else if(Oe.__hasExternalTextures)H.rebindTextures(w,_.get(w.texture).__webglTexture,_.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const tt=w.depthTexture;if(Oe.__boundDepthTexture!==tt){if(tt!==null&&_.has(tt)&&(w.width!==tt.image.width||w.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ne=!0);const Ye=_.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ye[K])?le=Ye[K][fe]:le=Ye[K],te=!0):w.samples>0&&H.useMultisampledRTT(w)===!1?le=_.get(w).__webglMultisampledFramebuffer:Array.isArray(Ye)?le=Ye[fe]:le=Ye,F.copy(w.viewport),V.copy(w.scissor),ne=w.scissorTest}else F.copy(re).multiplyScalar(_e).floor(),V.copy(pe).multiplyScalar(_e).floor(),ne=Re;if(fe!==0&&(le=Ka),je.bindFramebuffer(X.FRAMEBUFFER,le)&&je.drawBuffers(w,le),je.viewport(F),je.scissor(V),je.setScissorTest(ne),te){const Oe=_.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,Oe.__webglTexture,fe)}else if(Ne){const Oe=K;for(let We=0;We<w.textures.length;We++){const Ye=_.get(w.textures[We]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+We,Ye.__webglTexture,fe,Oe)}}else if(w!==null&&fe!==0){const Oe=_.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Oe.__webglTexture,fe)}q=-1},this.readRenderTargetPixels=function(w,K,fe,le,te,Ne,Ge,Oe=0){if(!(w&&w.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We){je.bindFramebuffer(X.FRAMEBUFFER,We);try{const Ye=w.textures[Oe],tt=Ye.format,Ze=Ye.type;if(!At.textureFormatReadable(tt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Ze)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-le&&fe>=0&&fe<=w.height-te&&(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe),X.readPixels(K,fe,le,te,Ae.convert(tt),Ae.convert(Ze),Ne))}finally{const Ye=W!==null?_.get(W).__webglFramebuffer:null;je.bindFramebuffer(X.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(w,K,fe,le,te,Ne,Ge,Oe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We)if(K>=0&&K<=w.width-le&&fe>=0&&fe<=w.height-te){je.bindFramebuffer(X.FRAMEBUFFER,We);const Ye=w.textures[Oe],tt=Ye.format,Ze=Ye.type;if(!At.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,nt),X.bufferData(X.PIXEL_PACK_BUFFER,Ne.byteLength,X.STREAM_READ),w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe),X.readPixels(K,fe,le,te,Ae.convert(tt),Ae.convert(Ze),0);const Nt=W!==null?_.get(W).__webglFramebuffer:null;je.bindFramebuffer(X.FRAMEBUFFER,Nt);const an=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await JC(X,an,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,nt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ne),X.deleteBuffer(nt),X.deleteSync(an),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,K=null,fe=0){const le=Math.pow(2,-fe),te=Math.floor(w.image.width*le),Ne=Math.floor(w.image.height*le),Ge=K!==null?K.x:0,Oe=K!==null?K.y:0;H.setTexture2D(w,0),X.copyTexSubImage2D(X.TEXTURE_2D,fe,0,0,Ge,Oe,te,Ne),je.unbindTexture()};const Fr=X.createFramebuffer(),$a=X.createFramebuffer();this.copyTextureToTexture=function(w,K,fe=null,le=null,te=0,Ne=null){Ne===null&&(te!==0?($l("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=te,te=0):Ne=0);let Ge,Oe,We,Ye,tt,Ze,nt,Nt,an;const Qt=w.isCompressedTexture?w.mipmaps[Ne]:w.image;if(fe!==null)Ge=fe.max.x-fe.min.x,Oe=fe.max.y-fe.min.y,We=fe.isBox3?fe.max.z-fe.min.z:1,Ye=fe.min.x,tt=fe.min.y,Ze=fe.isBox3?fe.min.z:0;else{const En=Math.pow(2,-te);Ge=Math.floor(Qt.width*En),Oe=Math.floor(Qt.height*En),w.isDataArrayTexture?We=Qt.depth:w.isData3DTexture?We=Math.floor(Qt.depth*En):We=1,Ye=0,tt=0,Ze=0}le!==null?(nt=le.x,Nt=le.y,an=le.z):(nt=0,Nt=0,an=0);const It=Ae.convert(K.format),$e=Ae.convert(K.type);let Lt;K.isData3DTexture?(H.setTexture3D(K,0),Lt=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(H.setTexture2DArray(K,0),Lt=X.TEXTURE_2D_ARRAY):(H.setTexture2D(K,0),Lt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);const ot=X.getParameter(X.UNPACK_ROW_LENGTH),Un=X.getParameter(X.UNPACK_IMAGE_HEIGHT),va=X.getParameter(X.UNPACK_SKIP_PIXELS),Nn=X.getParameter(X.UNPACK_SKIP_ROWS),Si=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Qt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Qt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ye),X.pixelStorei(X.UNPACK_SKIP_ROWS,tt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ze);const Ht=w.isDataArrayTexture||w.isData3DTexture,Ln=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const En=_.get(w),On=_.get(K),Pn=_.get(En.__renderTarget),bs=_.get(On.__renderTarget);je.bindFramebuffer(X.READ_FRAMEBUFFER,Pn.__webglFramebuffer),je.bindFramebuffer(X.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let zi=0;zi<We;zi++)Ht&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,_.get(w).__webglTexture,te,Ze+zi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,_.get(K).__webglTexture,Ne,an+zi)),X.blitFramebuffer(Ye,tt,Ge,Oe,nt,Nt,Ge,Oe,X.DEPTH_BUFFER_BIT,X.NEAREST);je.bindFramebuffer(X.READ_FRAMEBUFFER,null),je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(te!==0||w.isRenderTargetTexture||_.has(w)){const En=_.get(w),On=_.get(K);je.bindFramebuffer(X.READ_FRAMEBUFFER,Fr),je.bindFramebuffer(X.DRAW_FRAMEBUFFER,$a);for(let Pn=0;Pn<We;Pn++)Ht?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,En.__webglTexture,te,Ze+Pn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,En.__webglTexture,te),Ln?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,On.__webglTexture,Ne,an+Pn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,On.__webglTexture,Ne),te!==0?X.blitFramebuffer(Ye,tt,Ge,Oe,nt,Nt,Ge,Oe,X.COLOR_BUFFER_BIT,X.NEAREST):Ln?X.copyTexSubImage3D(Lt,Ne,nt,Nt,an+Pn,Ye,tt,Ge,Oe):X.copyTexSubImage2D(Lt,Ne,nt,Nt,Ye,tt,Ge,Oe);je.bindFramebuffer(X.READ_FRAMEBUFFER,null),je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ln?w.isDataTexture||w.isData3DTexture?X.texSubImage3D(Lt,Ne,nt,Nt,an,Ge,Oe,We,It,$e,Qt.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(Lt,Ne,nt,Nt,an,Ge,Oe,We,It,Qt.data):X.texSubImage3D(Lt,Ne,nt,Nt,an,Ge,Oe,We,It,$e,Qt):w.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ne,nt,Nt,Ge,Oe,It,$e,Qt.data):w.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ne,nt,Nt,Qt.width,Qt.height,It,Qt.data):X.texSubImage2D(X.TEXTURE_2D,Ne,nt,Nt,Ge,Oe,It,$e,Qt);X.pixelStorei(X.UNPACK_ROW_LENGTH,ot),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Un),X.pixelStorei(X.UNPACK_SKIP_PIXELS,va),X.pixelStorei(X.UNPACK_SKIP_ROWS,Nn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Si),Ne===0&&K.generateMipmaps&&X.generateMipmap(Lt),je.unbindTexture()},this.initRenderTarget=function(w){_.get(w).__webglFramebuffer===void 0&&H.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?H.setTextureCube(w,0):w.isData3DTexture?H.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?H.setTexture2DArray(w,0):H.setTexture2D(w,0),je.unbindTexture()},this.resetState=function(){k=0,A=0,W=null,je.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}function UU({mouseForce:a=10,cursorSize:e=100,isViscous:n=!1,viscous:r=30,iterationsViscous:o=320,iterationsPoisson:c=32,dt:f=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:v=["#5227FF","#FF9FFC","#B19EEF"],style:g={},className:x="",autoDemo:M=!0,autoSpeed:T=.2,autoIntensity:E=2.2,takeoverDuration:b=20,autoResumeDelay:y=1e3,autoRampDuration:P=.2}){const B=Je.useRef(null),U=Je.useRef(null),z=Je.useRef(null),L=Je.useRef(null),O=Je.useRef(null),Q=Je.useRef(!0),C=Je.useRef(null);return Je.useEffect(()=>{if(!B.current)return;function D(N){let _;Array.isArray(N)&&N.length>0?N.length===1?_=[N[0],N[0]]:_=N:_=["#ffffff","#ffffff"];const H=_.length,J=new Uint8Array(H*4);for(let se=0;se<H;se++){const Fe=new Bt(_[se]);J[se*4+0]=Math.round(Fe.r*255),J[se*4+1]=Math.round(Fe.g*255),J[se*4+2]=Math.round(Fe.b*255),J[se*4+3]=255}const he=new TS(J,H,1,Oi);return he.magFilter=Mn,he.minFilter=Mn,he.wrapS=vi,he.wrapT=vi,he.generateMipmaps=!1,he.needsUpdate=!0,he}const k=D(v),A=new fn(0,0,0,0);class W{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(_){this.container=_,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new DU({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Bt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new O2,this.clock.start()}resize(){if(!this.container)return;const _=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(_.width)),this.height=Math.max(1,Math.floor(_.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const q=new W;class ee{constructor(){this.mouseMoved=!1,this.coords=new ct,this.coords_old=new ct,this.diff=new ct,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ct,this.takeoverTo=new ct,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(_){this.container=_,this.docTarget=_.ownerDocument||null;const H=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);H&&(this.listenerTarget=H,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(_,H){if(!this.container)return!1;const J=this.container.getBoundingClientRect();return J.width===0||J.height===0?!1:_>=J.left&&_<=J.right&&H>=J.top&&H<=J.bottom}updateHoverState(_,H){return this.isHoverInside=this.isPointInside(_,H),this.isHoverInside}setCoords(_,H){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const J=this.container.getBoundingClientRect();if(J.width===0||J.height===0)return;const he=(_-J.left)/J.width,se=(H-J.top)/J.height;this.coords.set(he*2-1,-(se*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(_,H){this.coords.set(_,H),this.mouseMoved=!0}onDocumentMouseMove(_){if(this.updateHoverState(_.clientX,_.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const H=this.container.getBoundingClientRect();if(H.width===0||H.height===0)return;const J=(_.clientX-H.left)/H.width,he=(_.clientY-H.top)/H.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(J*2-1,-(he*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(_.clientX,_.clientY),this.hasUserControl=!0}}onDocumentTouchStart(_){if(_.touches.length!==1)return;const H=_.touches[0];this.updateHoverState(H.clientX,H.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(H.clientX,H.clientY),this.hasUserControl=!0)}onDocumentTouchMove(_){if(_.touches.length!==1)return;const H=_.touches[0];this.updateHoverState(H.clientX,H.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(H.clientX,H.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const _=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(_>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const H=_*_*(3-2*_);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,H)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const F=new ee;class V{constructor(_,H,J){this.mouse=_,this.manager=H,this.enabled=J.enabled,this.speed=J.speed,this.resumeDelay=J.resumeDelay||3e3,this.rampDurationMs=(J.rampDuration||0)*1e3,this.active=!1,this.current=new ct(0,0),this.target=new ct,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ct,this.pickNewTarget()}pickNewTarget(){const _=Math.random;this.target.set((_()*2-1)*(1-this.margin),(_()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const _=performance.now();if(_-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=_,this.activationTime=_),!this.active)return;this.mouse.isAutoActive=!0;let J=(_-this.lastTime)/1e3;this.lastTime=_,J>.2&&(J=.016);const he=this._tmpDir.subVectors(this.target,this.current),se=he.length();if(se<.01){this.pickNewTarget();return}he.normalize();let Fe=1;if(this.rampDurationMs>0){const et=Math.min(1,(_-this.activationTime)/this.rampDurationMs);Fe=et*et*(3-2*et)}const we=this.speed*J*Fe,ke=Math.min(we,se);this.current.addScaledVector(he,ke),this.mouse.setNormalized(this.current.x,this.current.y)}}const ne=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,be=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,Se=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,I=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,oe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,_e=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Ce=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,He=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,re=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,pe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Re{constructor(_){this.props=_||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Ox,this.camera=new lf,this.uniforms&&(this.material=new Hl(this.props.material),this.geometry=new hs(2,2),this.plane=new Pi(this.geometry,this.material),this.scene.add(this.plane))}update(){q.renderer.setRenderTarget(this.props.output||null),q.renderer.render(this.scene,this.camera),q.renderer.setRenderTarget(null)}}class Xe extends Re{constructor(_){super({material:{vertexShader:ne,fragmentShader:I,uniforms:{boundarySpace:{value:_.cellScale},px:{value:_.cellScale},fboSize:{value:_.fboSize},velocity:{value:_.src.texture},dt:{value:_.dt},isBFECC:{value:!0}}},output:_.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const _=new Qi,H=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);_.setAttribute("position",new Ki(H,3));const J=new Hl({vertexShader:be,fragmentShader:I,uniforms:this.uniforms});this.line=new w2(_,J),this.scene.add(this.line)}update({dt:_,isBounce:H,BFECC:J}){this.uniforms.dt.value=_,this.line.visible=H,this.uniforms.isBFECC.value=J,super.update()}}class Ve extends Re{constructor(_){super({output:_.dst}),this.init(_)}init(_){super.init();const H=new hs(1,1),J=new Hl({vertexShader:Se,fragmentShader:Ce,blending:Rp,depthWrite:!1,uniforms:{px:{value:_.cellScale},force:{value:new ct(0,0)},center:{value:new ct(0,0)},scale:{value:new ct(_.cursor_size,_.cursor_size)}}});this.mouse=new Pi(H,J),this.scene.add(this.mouse)}update(_){const H=F.diff.x/2*_.mouse_force,J=F.diff.y/2*_.mouse_force,he=_.cursor_size*_.cellScale.x,se=_.cursor_size*_.cellScale.y,Fe=Math.min(Math.max(F.coords.x,-1+he+_.cellScale.x*2),1-he-_.cellScale.x*2),we=Math.min(Math.max(F.coords.y,-1+se+_.cellScale.y*2),1-se-_.cellScale.y*2),ke=this.mouse.material.uniforms;ke.force.value.set(H,J),ke.center.value.set(Fe,we),ke.scale.value.set(_.cursor_size,_.cursor_size),super.update()}}class mt extends Re{constructor(_){super({material:{vertexShader:ne,fragmentShader:pe,uniforms:{boundarySpace:{value:_.boundarySpace},velocity:{value:_.src.texture},velocity_new:{value:_.dst_.texture},v:{value:_.viscous},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst,output0:_.dst_,output1:_.dst}),this.init()}update({viscous:_,iterations:H,dt:J}){let he,se;this.uniforms.v.value=_;for(let Fe=0;Fe<H;Fe++)Fe%2===0?(he=this.props.output0,se=this.props.output1):(he=this.props.output1,se=this.props.output0),this.uniforms.velocity_new.value=he.texture,this.props.output=se,this.uniforms.dt.value=J,super.update();return se}}class tn extends Re{constructor(_){super({material:{vertexShader:ne,fragmentShader:_e,uniforms:{boundarySpace:{value:_.boundarySpace},velocity:{value:_.src.texture},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst}),this.init()}update({vel:_}){this.uniforms.velocity.value=_.texture,super.update()}}class vt extends Re{constructor(_){super({material:{vertexShader:ne,fragmentShader:He,uniforms:{boundarySpace:{value:_.boundarySpace},pressure:{value:_.dst_.texture},divergence:{value:_.src.texture},px:{value:_.cellScale}}},output:_.dst,output0:_.dst_,output1:_.dst}),this.init()}update({iterations:_}){let H,J;for(let he=0;he<_;he++)he%2===0?(H=this.props.output0,J=this.props.output1):(H=this.props.output1,J=this.props.output0),this.uniforms.pressure.value=H.texture,this.props.output=J,super.update();return J}}class gt extends Re{constructor(_){super({material:{vertexShader:ne,fragmentShader:re,uniforms:{boundarySpace:{value:_.boundarySpace},pressure:{value:_.src_p.texture},velocity:{value:_.src_v.texture},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst}),this.init()}update({vel:_,pressure:H}){this.uniforms.velocity.value=_.texture,this.uniforms.pressure.value=H.texture,super.update()}}class Tt{constructor(_){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,..._},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ct,this.cellScale=new ct,this.boundarySpace=new ct,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?pa:Yi}createAllFBO(){const H={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Mn,magFilter:Mn,wrapS:vi,wrapT:vi};for(let J in this.fbos)this.fbos[J]=new Zi(this.fboSize.x,this.fboSize.y,H)}createShaderPass(){this.advection=new Xe({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ve({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new mt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new tn({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new vt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new gt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const _=Math.max(1,Math.round(this.options.resolution*q.width)),H=Math.max(1,Math.round(this.options.resolution*q.height)),J=1/_,he=1/H;this.cellScale.set(J,he),this.fboSize.set(_,H)}resize(){this.calcSize();for(let _ in this.fbos)this.fbos[_].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let _=this.fbos.vel_1;this.options.isViscous&&(_=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:_});const H=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:_,pressure:H})}}class st{constructor(){this.init()}init(){this.simulation=new Tt,this.scene=new Ox,this.camera=new lf,this.output=new Pi(new hs(2,2),new Hl({vertexShader:ne,fragmentShader:oe,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ct},palette:{value:k},bgColor:{value:A}}})),this.scene.add(this.output)}addScene(_){this.scene.add(_)}resize(){this.simulation.resize()}render(){q.renderer.setRenderTarget(null),q.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class nn{constructor(_){this.props=_,q.init(_.$wrapper),F.init(_.$wrapper),F.autoIntensity=_.autoIntensity,F.takeoverDuration=_.takeoverDuration,this.lastUserInteraction=performance.now(),F.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new V(F,this,{enabled:_.autoDemo,speed:_.autoSpeed,resumeDelay:_.autoResumeDelay,rampDuration:_.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():Q.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(q.renderer.domElement),this.output=new st}resize(){q.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),F.update(),q.update(),this.output.update()}loop(){this.running&&(this.render(),L.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,L.current&&(cancelAnimationFrame(L.current),L.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),F.dispose(),q.renderer){const _=q.renderer.domElement;_&&_.parentNode&&_.parentNode.removeChild(_),q.renderer.dispose()}}catch{}}}const X=B.current;X.style.position=X.style.position||"relative",X.style.overflow=X.style.overflow||"hidden";const Kt=new nn({$wrapper:X,autoDemo:M,autoSpeed:T,autoIntensity:E,takeoverDuration:b,autoResumeDelay:y,autoRampDuration:P});U.current=Kt,(()=>{if(!U.current)return;const N=U.current.output?.simulation;if(!N)return;const _=N.options.resolution;Object.assign(N.options,{mouse_force:a,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:o,iterations_poisson:c,dt:f,BFECC:d,resolution:m,isBounce:p}),m!==_&&N.resize()})(),Kt.start();const At=new IntersectionObserver(N=>{const _=N[0],H=_.isIntersecting&&_.intersectionRatio>0;Q.current=H,U.current&&(H&&!document.hidden?U.current.start():U.current.pause())},{threshold:[0,.01,.1]});At.observe(X),O.current=At;const je=new ResizeObserver(()=>{U.current&&(C.current&&cancelAnimationFrame(C.current),C.current=requestAnimationFrame(()=>{U.current&&U.current.resize()}))});return je.observe(X),z.current=je,()=>{if(L.current&&cancelAnimationFrame(L.current),z.current)try{z.current.disconnect()}catch{}if(O.current)try{O.current.disconnect()}catch{}U.current&&U.current.dispose(),U.current=null}},[d,e,f,p,n,c,o,a,m,r,v,M,T,E,b,y,P]),Je.useEffect(()=>{const D=U.current;if(!D)return;const k=D.output?.simulation;if(!k)return;const A=k.options.resolution;Object.assign(k.options,{mouse_force:a,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:o,iterations_poisson:c,dt:f,BFECC:d,resolution:m,isBounce:p}),D.autoDriver&&(D.autoDriver.enabled=M,D.autoDriver.speed=T,D.autoDriver.resumeDelay=y,D.autoDriver.rampDurationMs=P*1e3,D.autoDriver.mouse&&(D.autoDriver.mouse.autoIntensity=E,D.autoDriver.mouse.takeoverDuration=b)),m!==A&&k.resize()},[a,e,n,r,o,c,f,d,m,p,M,T,E,b,y,P]),Z.jsx("div",{ref:B,className:`liquid-ether-container ${x||""}`,style:g})}function NU(){return Z.jsxs(Z.Fragment,{children:[Z.jsx("div",{className:"background-layer",children:Z.jsx(UU,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,autoDemo:!0})}),Z.jsxs("main",{children:[Z.jsx($M,{}),Z.jsx(eE,{}),Z.jsx(nE,{}),Z.jsx(QA,{}),Z.jsx("h1",{style:{fontFamily:"Aquire"},className:"education-title",children:"Education"}),Z.jsx(JA,{}),Z.jsx(nC,{}),Z.jsx(vC,{}),Z.jsx(_C,{})]})]})}KM.createRoot(document.getElementById("root")).render(Z.jsx(Je.StrictMode,{children:Z.jsx(NU,{})}));
