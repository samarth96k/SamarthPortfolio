function CM(a,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in a)){const c=Object.getOwnPropertyDescriptor(r,o);c&&Object.defineProperty(a,o,c.get?c:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function RM(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var wh={exports:{}},El={};var b_;function wM(){if(b_)return El;b_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:f,ref:o!==void 0?o:null,props:c}}return El.Fragment=e,El.jsx=n,El.jsxs=n,El}var M_;function DM(){return M_||(M_=1,wh.exports=wM()),wh.exports}var Z=DM(),Dh={exports:{}},lt={};var E_;function UM(){if(E_)return lt;E_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function y(I,oe,_e){this.props=I,this.context=oe,this.refs=b,this.updater=_e||T}y.prototype.isReactComponent={},y.prototype.setState=function(I,oe){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,oe,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function P(){}P.prototype=y.prototype;function B(I,oe,_e){this.props=I,this.context=oe,this.refs=b,this.updater=_e||T}var U=B.prototype=new P;U.constructor=B,E(U,y.prototype),U.isPureReactComponent=!0;var z=Array.isArray;function L(){}var O={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function C(I,oe,_e){var Ce=_e.ref;return{$$typeof:a,type:I,key:oe,ref:Ce!==void 0?Ce:null,props:_e}}function D(I,oe){return C(I.type,oe,I.props)}function k(I){return typeof I=="object"&&I!==null&&I.$$typeof===a}function A(I){var oe={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(_e){return oe[_e]})}var W=/\/+/g;function q(I,oe){return typeof I=="object"&&I!==null&&I.key!=null?A(""+I.key):oe.toString(36)}function ee(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function(oe){I.status==="pending"&&(I.status="fulfilled",I.value=oe)},function(oe){I.status==="pending"&&(I.status="rejected",I.reason=oe)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,oe,_e,Ce,He){var re=typeof I;(re==="undefined"||re==="boolean")&&(I=null);var pe=!1;if(I===null)pe=!0;else switch(re){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(I.$$typeof){case a:case e:pe=!0;break;case v:return pe=I._init,F(pe(I._payload),oe,_e,Ce,He)}}if(pe)return He=He(I),pe=Ce===""?"."+q(I,0):Ce,z(He)?(_e="",pe!=null&&(_e=pe.replace(W,"$&/")+"/"),F(He,oe,_e,"",function(Ve){return Ve})):He!=null&&(k(He)&&(He=D(He,_e+(He.key==null||I&&I.key===He.key?"":(""+He.key).replace(W,"$&/")+"/")+pe)),oe.push(He)),1;pe=0;var Re=Ce===""?".":Ce+":";if(z(I))for(var Xe=0;Xe<I.length;Xe++)Ce=I[Xe],re=Re+q(Ce,Xe),pe+=F(Ce,oe,_e,re,He);else if(Xe=M(I),typeof Xe=="function")for(I=Xe.call(I),Xe=0;!(Ce=I.next()).done;)Ce=Ce.value,re=Re+q(Ce,Xe++),pe+=F(Ce,oe,_e,re,He);else if(re==="object"){if(typeof I.then=="function")return F(ee(I),oe,_e,Ce,He);throw oe=String(I),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.")}return pe}function V(I,oe,_e){if(I==null)return I;var Ce=[],He=0;return F(I,Ce,"","",function(re){return oe.call(_e,re,He++)}),Ce}function ne(I){if(I._status===-1){var oe=I._result;oe=oe(),oe.then(function(_e){(I._status===0||I._status===-1)&&(I._status=1,I._result=_e)},function(_e){(I._status===0||I._status===-1)&&(I._status=2,I._result=_e)}),I._status===-1&&(I._status=0,I._result=oe)}if(I._status===1)return I._result.default;throw I._result}var be=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var oe=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(oe))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Se={map:V,forEach:function(I,oe,_e){V(I,function(){oe.apply(this,arguments)},_e)},count:function(I){var oe=0;return V(I,function(){oe++}),oe},toArray:function(I){return V(I,function(oe){return oe})||[]},only:function(I){if(!k(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return lt.Activity=g,lt.Children=Se,lt.Component=y,lt.Fragment=n,lt.Profiler=o,lt.PureComponent=B,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,lt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},lt.cache=function(I){return function(){return I.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(I,oe,_e){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ce=E({},I.props),He=I.key;if(oe!=null)for(re in oe.key!==void 0&&(He=""+oe.key),oe)!Q.call(oe,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&oe.ref===void 0||(Ce[re]=oe[re]);var re=arguments.length-2;if(re===1)Ce.children=_e;else if(1<re){for(var pe=Array(re),Re=0;Re<re;Re++)pe[Re]=arguments[Re+2];Ce.children=pe}return C(I.type,He,Ce)},lt.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},lt.createElement=function(I,oe,_e){var Ce,He={},re=null;if(oe!=null)for(Ce in oe.key!==void 0&&(re=""+oe.key),oe)Q.call(oe,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(He[Ce]=oe[Ce]);var pe=arguments.length-2;if(pe===1)He.children=_e;else if(1<pe){for(var Re=Array(pe),Xe=0;Xe<pe;Xe++)Re[Xe]=arguments[Xe+2];He.children=Re}if(I&&I.defaultProps)for(Ce in pe=I.defaultProps,pe)He[Ce]===void 0&&(He[Ce]=pe[Ce]);return C(I,re,He)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(I){return{$$typeof:d,render:I}},lt.isValidElement=k,lt.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:ne}},lt.memo=function(I,oe){return{$$typeof:p,type:I,compare:oe===void 0?null:oe}},lt.startTransition=function(I){var oe=O.T,_e={};O.T=_e;try{var Ce=I(),He=O.S;He!==null&&He(_e,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(L,be)}catch(re){be(re)}finally{oe!==null&&_e.types!==null&&(oe.types=_e.types),O.T=oe}},lt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},lt.use=function(I){return O.H.use(I)},lt.useActionState=function(I,oe,_e){return O.H.useActionState(I,oe,_e)},lt.useCallback=function(I,oe){return O.H.useCallback(I,oe)},lt.useContext=function(I){return O.H.useContext(I)},lt.useDebugValue=function(){},lt.useDeferredValue=function(I,oe){return O.H.useDeferredValue(I,oe)},lt.useEffect=function(I,oe){return O.H.useEffect(I,oe)},lt.useEffectEvent=function(I){return O.H.useEffectEvent(I)},lt.useId=function(){return O.H.useId()},lt.useImperativeHandle=function(I,oe,_e){return O.H.useImperativeHandle(I,oe,_e)},lt.useInsertionEffect=function(I,oe){return O.H.useInsertionEffect(I,oe)},lt.useLayoutEffect=function(I,oe){return O.H.useLayoutEffect(I,oe)},lt.useMemo=function(I,oe){return O.H.useMemo(I,oe)},lt.useOptimistic=function(I,oe){return O.H.useOptimistic(I,oe)},lt.useReducer=function(I,oe,_e){return O.H.useReducer(I,oe,_e)},lt.useRef=function(I){return O.H.useRef(I)},lt.useState=function(I){return O.H.useState(I)},lt.useSyncExternalStore=function(I,oe,_e){return O.H.useSyncExternalStore(I,oe,_e)},lt.useTransition=function(){return O.H.useTransition()},lt.version="19.2.3",lt}var T_;function Sm(){return T_||(T_=1,Dh.exports=UM()),Dh.exports}var Je=Sm();const NM=RM(Je),A_=CM({__proto__:null,default:NM},[Je]);var Uh={exports:{}},Tl={},Nh={exports:{}},Lh={};var C_;function LM(){return C_||(C_=1,(function(a){function e(F,V){var ne=F.length;F.push(V);e:for(;0<ne;){var be=ne-1>>>1,Se=F[be];if(0<o(Se,V))F[be]=V,F[ne]=Se,ne=be;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var V=F[0],ne=F.pop();if(ne!==V){F[0]=ne;e:for(var be=0,Se=F.length,I=Se>>>1;be<I;){var oe=2*(be+1)-1,_e=F[oe],Ce=oe+1,He=F[Ce];if(0>o(_e,ne))Ce<Se&&0>o(He,_e)?(F[be]=He,F[Ce]=ne,be=Ce):(F[be]=_e,F[oe]=ne,be=oe);else if(Ce<Se&&0>o(He,ne))F[be]=He,F[Ce]=ne,be=Ce;else break e}}return V}function o(F,V){var ne=F.sortIndex-V.sortIndex;return ne!==0?ne:F.id-V.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var m=[],p=[],v=1,g=null,x=3,M=!1,T=!1,E=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function U(F){for(var V=n(p);V!==null;){if(V.callback===null)r(p);else if(V.startTime<=F)r(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=n(p)}}function z(F){if(E=!1,U(F),!T)if(n(m)!==null)T=!0,L||(L=!0,A());else{var V=n(p);V!==null&&ee(z,V.startTime-F)}}var L=!1,O=-1,Q=5,C=-1;function D(){return b?!0:!(a.unstable_now()-C<Q)}function k(){if(b=!1,L){var F=a.unstable_now();C=F;var V=!0;try{e:{T=!1,E&&(E=!1,P(O),O=-1),M=!0;var ne=x;try{t:{for(U(F),g=n(m);g!==null&&!(g.expirationTime>F&&D());){var be=g.callback;if(typeof be=="function"){g.callback=null,x=g.priorityLevel;var Se=be(g.expirationTime<=F);if(F=a.unstable_now(),typeof Se=="function"){g.callback=Se,U(F),V=!0;break t}g===n(m)&&r(m),U(F)}else r(m);g=n(m)}if(g!==null)V=!0;else{var I=n(p);I!==null&&ee(z,I.startTime-F),V=!1}}break e}finally{g=null,x=ne,M=!1}V=void 0}}finally{V?A():L=!1}}}var A;if(typeof B=="function")A=function(){B(k)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=k,A=function(){q.postMessage(null)}}else A=function(){y(k,0)};function ee(F,V){O=y(function(){F(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(F){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var ne=x;x=V;try{return F()}finally{x=ne}},a.unstable_requestPaint=function(){b=!0},a.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ne=x;x=F;try{return V()}finally{x=ne}},a.unstable_scheduleCallback=function(F,V,ne){var be=a.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?be+ne:be):ne=be,F){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ne+Se,F={id:v++,callback:V,priorityLevel:F,startTime:ne,expirationTime:Se,sortIndex:-1},ne>be?(F.sortIndex=ne,e(p,F),n(m)===null&&F===n(p)&&(E?(P(O),O=-1):E=!0,ee(z,ne-be))):(F.sortIndex=Se,e(m,F),T||M||(T=!0,L||(L=!0,A()))),F},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(F){var V=x;return function(){var ne=x;x=V;try{return F.apply(this,arguments)}finally{x=ne}}}})(Lh)),Lh}var R_;function OM(){return R_||(R_=1,Nh.exports=LM()),Nh.exports}var Oh={exports:{}},kn={};var w_;function PM(){if(w_)return kn;w_=1;var a=Sm();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,kn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},kn.flushSync=function(m){var p=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=v,r.d.f()}},kn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},kn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},kn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},kn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},kn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},kn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},kn.requestFormReset=function(m){r.d.r(m)},kn.unstable_batchedUpdates=function(m,p){return m(p)},kn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},kn.useFormStatus=function(){return f.H.useHostTransitionStatus()},kn.version="19.2.3",kn}var D_;function FM(){if(D_)return Oh.exports;D_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Oh.exports=PM(),Oh.exports}var U_;function BM(){if(U_)return Tl;U_=1;var a=OM(),e=Sm(),n=FM();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var u=s.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===s)return m(u),t;if(h===l)return m(u),i;h=h.sibling}throw Error(r(188))}if(s.return!==l.return)s=u,l=h;else{for(var S=!1,R=u.child;R;){if(R===s){S=!0,s=u,l=h;break}if(R===l){S=!0,l=u,s=h;break}R=R.sibling}if(!S){for(R=h.child;R;){if(R===s){S=!0,s=h,l=u;break}if(R===l){S=!0,l=h,s=u;break}R=R.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function v(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=v(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),B=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function A(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var W=Symbol.for("react.client.reference");function q(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===W?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case z:return"Suspense";case L:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case B:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case U:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return i=t.displayName||null,i!==null?i:q(t.type)||"Memo";case Q:i=t._payload,t=t._init;try{return q(t(i))}catch{}}return null}var ee=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},be=[],Se=-1;function I(t){return{current:t}}function oe(t){0>Se||(t.current=be[Se],be[Se]=null,Se--)}function _e(t,i){Se++,be[Se]=t.current,t.current=i}var Ce=I(null),He=I(null),re=I(null),pe=I(null);function Re(t,i){switch(_e(re,i),_e(He,t),_e(Ce,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Wv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Wv(i),t=qv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}oe(Ce),_e(Ce,t)}function Xe(){oe(Ce),oe(He),oe(re)}function Ve(t){t.memoizedState!==null&&_e(pe,t);var i=Ce.current,s=qv(i,t.type);i!==s&&(_e(He,t),_e(Ce,s))}function mt(t){He.current===t&&(oe(Ce),oe(He)),pe.current===t&&(oe(pe),yl._currentValue=ne)}var tn,vt;function gt(t){if(tn===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);tn=i&&i[1]||"",vt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tn+t+vt}var Tt=!1;function st(t,i){if(!t||Tt)return"";Tt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(de){var ce=de}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(de){ce=de}t.call(xe.prototype)}}else{try{throw Error()}catch(de){ce=de}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(de){if(de&&ce&&typeof de.stack=="string")return[de.stack,ce.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),S=h[0],R=h[1];if(S&&R){var G=S.split(`
`),ae=R.split(`
`);for(u=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;u<ae.length&&!ae[u].includes("DetermineComponentFrameRoot");)u++;if(l===G.length||u===ae.length)for(l=G.length-1,u=ae.length-1;1<=l&&0<=u&&G[l]!==ae[u];)u--;for(;1<=l&&0<=u;l--,u--)if(G[l]!==ae[u]){if(l!==1||u!==1)do if(l--,u--,0>u||G[l]!==ae[u]){var me=`
`+G[l].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=l&&0<=u);break}}}finally{Tt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?gt(s):""}function nn(t,i){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==i&&i!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return st(t.type,!1);case 11:return st(t.type.render,!1);case 1:return st(t.type,!0);case 31:return gt("Activity");default:return""}}function X(t){try{var i="",s=null;do i+=nn(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Kt=Object.prototype.hasOwnProperty,bt=a.unstable_scheduleCallback,At=a.unstable_cancelCallback,je=a.unstable_shouldYield,N=a.unstable_requestPaint,_=a.unstable_now,H=a.unstable_getCurrentPriorityLevel,J=a.unstable_ImmediatePriority,he=a.unstable_UserBlockingPriority,se=a.unstable_NormalPriority,Fe=a.unstable_LowPriority,we=a.unstable_IdlePriority,ke=a.log,et=a.unstable_setDisableYieldValue,Ee=null,Te=null;function ze(t){if(typeof ke=="function"&&et(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Ee,t)}catch{}}var Be=Math.clz32?Math.clz32:Y,Ue=Math.log,ft=Math.LN2;function Y(t){return t>>>=0,t===0?32:31-(Ue(t)/ft|0)|0}var Le=256,Ae=262144,Ie=4194304;function Me(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var u=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~h,l!==0?u=Me(l):(S&=R,S!==0?u=Me(S):s||(s=R&~t,s!==0&&(u=Me(s))))):(R=l&~h,R!==0?u=Me(R):S!==0?u=Me(S):s||(s=l&~t,s!==0&&(u=Me(s)))),u===0?0:i!==0&&i!==u&&(i&h)===0&&(h=u&-u,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:u}function De(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function at(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function Ct(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Vn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Fi(t,i,s,l,u,h){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,ae=t.hiddenUpdates;for(s=S&~s;0<s;){var me=31-Be(s),xe=1<<me;R[me]=0,G[me]=-1;var ce=ae[me];if(ce!==null)for(ae[me]=null,me=0;me<ce.length;me++){var de=ce[me];de!==null&&(de.lane&=-536870913)}s&=~xe}l!==0&&oc(t,l,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~i))}function oc(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Be(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function No(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Be(s),u=1<<l;u&i|t[l]&i&&(t[l]|=i),s&=~u}}function vs(t,i){var s=i&-i;return s=(s&42)!==0?1:Lo(s),(s&(t.suspendedLanes|i))!==0?0:s}function Lo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function _s(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Oo(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:m_(t.type))}function Qi(t,i){var s=V.p;try{return V.p=t,i()}finally{V.p=s}}var xi=Math.random().toString(36).slice(2),gn="__reactFiber$"+xi,Dn="__reactProps$"+xi,Bi="__reactContainer$"+xi,xs="__reactEvents$"+xi,ys="__reactListeners$"+xi,lc="__reactHandles$"+xi,Po="__reactResources$"+xi,Or="__reactMarker$"+xi;function Fo(t){delete t[gn],delete t[Dn],delete t[xs],delete t[ys],delete t[lc]}function Ya(t){var i=t[gn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Bi]||s[gn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Jv(t);t!==null;){if(s=t[gn])return s;t=Jv(t)}return i}t=s,s=t.parentNode}return null}function Za(t){if(t=t[gn]||t[Bi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Pr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function Ka(t){var i=t[Po];return i||(i=t[Po]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function w(t){t[Or]=!0}var K=new Set,fe={};function le(t,i){te(t,i),te(t+"Capture",i)}function te(t,i){for(fe[t]=i,t=0;t<i.length;t++)K.add(i[t])}var Ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ge={},Oe={};function We(t){return Kt.call(Oe,t)?!0:Kt.call(Ge,t)?!1:Ne.test(t)?Oe[t]=!0:(Ge[t]=!0,!1)}function Ye(t,i,s){if(We(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function tt(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ze(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function nt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function an(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,h.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Qt(t){if(!t._valueTracker){var i=Nt(t)?"checked":"value";t._valueTracker=an(t,i,""+t[i])}}function It(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Nt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function $e(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function ot(t){return t.replace(Lt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Un(t,i,s,l,u,h,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+nt(i)):t.value!==""+nt(i)&&(t.value=""+nt(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?Nn(t,S,nt(i)):s!=null?Nn(t,S,nt(s)):l!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+nt(R):t.removeAttribute("name")}function ga(t,i,s,l,u,h,S,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){Qt(t);return}s=s!=null?""+nt(s):"",i=i!=null?""+nt(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Qt(t)}function Nn(t,i,s){i==="number"&&$e(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function yi(t,i,s,l){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+nt(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function Ht(t,i,s){if(i!=null&&(i=""+nt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+nt(s):""}function Ln(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(ee(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=nt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Qt(t)}function En(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var On=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||On.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Ss(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&Pn(t,u,l)}else for(var h in i)i.hasOwnProperty(h)&&Pn(t,h,i[h])}function Ii(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var MS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ES=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cc(t){return ES.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function va(){}var Af=null;function Cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bs=null,Ms=null;function Xm(t){var i=Za(t);if(i&&(t=i.stateNode)){var s=t[Dn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Un(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ot(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var u=l[Dn]||null;if(!u)throw Error(r(90));Un(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&It(l)}break e;case"textarea":Ht(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&yi(t,!!s.multiple,i,!1)}}}var Rf=!1;function Wm(t,i,s){if(Rf)return t(i,s);Rf=!0;try{var l=t(i);return l}finally{if(Rf=!1,(bs!==null||Ms!==null)&&(Kc(),bs&&(i=bs,t=Ms,Ms=bs=null,Xm(i),t)))for(i=0;i<t.length;i++)Xm(t[i])}}function Bo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Dn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wf=!1;if(_a)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){wf=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{wf=!1}var $a=null,Df=null,uc=null;function qm(){if(uc)return uc;var t,i=Df,s=i.length,l,u="value"in $a?$a.value:$a.textContent,h=u.length;for(t=0;t<s&&i[t]===u[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===u[h-l];l++);return uc=u.slice(t,1<l?1-l:void 0)}function fc(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function dc(){return!0}function jm(){return!1}function Kn(t){function i(s,l,u,h,S){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?dc:jm,this.isPropagationStopped=jm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),i}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=Kn(Fr),zo=g({},Fr,{view:0,detail:0}),TS=Kn(zo),Uf,Nf,Ho,pc=g({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ho&&(Ho&&t.type==="mousemove"?(Uf=t.screenX-Ho.screenX,Nf=t.screenY-Ho.screenY):Nf=Uf=0,Ho=t),Uf)},movementY:function(t){return"movementY"in t?t.movementY:Nf}}),Ym=Kn(pc),AS=g({},pc,{dataTransfer:0}),CS=Kn(AS),RS=g({},zo,{relatedTarget:0}),Lf=Kn(RS),wS=g({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),DS=Kn(wS),US=g({},Fr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NS=Kn(US),LS=g({},Fr,{data:0}),Zm=Kn(LS),OS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=FS[t])?!!i[t]:!1}function Of(){return BS}var IS=g({},zo,{key:function(t){if(t.key){var i=OS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=fc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Of,charCode:function(t){return t.type==="keypress"?fc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zS=Kn(IS),HS=g({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=Kn(HS),GS=g({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Of}),VS=Kn(GS),kS=g({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),XS=Kn(kS),WS=g({},pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qS=Kn(WS),jS=g({},Fr,{newState:0,oldState:0}),YS=Kn(jS),ZS=[9,13,27,32],Pf=_a&&"CompositionEvent"in window,Go=null;_a&&"documentMode"in document&&(Go=document.documentMode);var KS=_a&&"TextEvent"in window&&!Go,$m=_a&&(!Pf||Go&&8<Go&&11>=Go),Qm=" ",Jm=!1;function eg(t,i){switch(t){case"keyup":return ZS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function $S(t,i){switch(t){case"compositionend":return tg(i);case"keypress":return i.which!==32?null:(Jm=!0,Qm);case"textInput":return t=i.data,t===Qm&&Jm?null:t;default:return null}}function QS(t,i){if(Es)return t==="compositionend"||!Pf&&eg(t,i)?(t=qm(),uc=Df=$a=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $m&&i.locale!=="ko"?null:i.data;default:return null}}var JS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!JS[t.type]:i==="textarea"}function ig(t,i,s,l){bs?Ms?Ms.push(l):Ms=[l]:bs=l,i=iu(i,"onChange"),0<i.length&&(s=new hc("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Vo=null,ko=null;function eb(t){zv(t,0)}function mc(t){var i=Pr(t);if(It(i))return t}function ag(t,i){if(t==="change")return i}var rg=!1;if(_a){var Ff;if(_a){var Bf="oninput"in document;if(!Bf){var sg=document.createElement("div");sg.setAttribute("oninput","return;"),Bf=typeof sg.oninput=="function"}Ff=Bf}else Ff=!1;rg=Ff&&(!document.documentMode||9<document.documentMode)}function og(){Vo&&(Vo.detachEvent("onpropertychange",lg),ko=Vo=null)}function lg(t){if(t.propertyName==="value"&&mc(ko)){var i=[];ig(i,ko,t,Cf(t)),Wm(eb,i)}}function tb(t,i,s){t==="focusin"?(og(),Vo=i,ko=s,Vo.attachEvent("onpropertychange",lg)):t==="focusout"&&og()}function nb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mc(ko)}function ib(t,i){if(t==="click")return mc(i)}function ab(t,i){if(t==="input"||t==="change")return mc(i)}function rb(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var si=typeof Object.is=="function"?Object.is:rb;function Xo(t,i){if(si(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!Kt.call(i,u)||!si(t[u],i[u]))return!1}return!0}function cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ug(t,i){var s=cg(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=cg(s)}}function fg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?fg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function dg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=$e(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=$e(t.document)}return i}function If(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var sb=_a&&"documentMode"in document&&11>=document.documentMode,Ts=null,zf=null,Wo=null,Hf=!1;function hg(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Hf||Ts==null||Ts!==$e(l)||(l=Ts,"selectionStart"in l&&If(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Wo&&Xo(Wo,l)||(Wo=l,l=iu(zf,"onSelect"),0<l.length&&(i=new hc("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Ts)))}function Br(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var As={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionrun:Br("Transition","TransitionRun"),transitionstart:Br("Transition","TransitionStart"),transitioncancel:Br("Transition","TransitionCancel"),transitionend:Br("Transition","TransitionEnd")},Gf={},pg={};_a&&(pg=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Ir(t){if(Gf[t])return Gf[t];if(!As[t])return t;var i=As[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in pg)return Gf[t]=i[s];return t}var mg=Ir("animationend"),gg=Ir("animationiteration"),vg=Ir("animationstart"),ob=Ir("transitionrun"),lb=Ir("transitionstart"),cb=Ir("transitioncancel"),_g=Ir("transitionend"),xg=new Map,Vf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vf.push("scrollEnd");function zi(t,i){xg.set(t,i),le(i,[t])}var gc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Si=[],Cs=0,kf=0;function vc(){for(var t=Cs,i=kf=Cs=0;i<t;){var s=Si[i];Si[i++]=null;var l=Si[i];Si[i++]=null;var u=Si[i];Si[i++]=null;var h=Si[i];if(Si[i++]=null,l!==null&&u!==null){var S=l.pending;S===null?u.next=u:(u.next=S.next,S.next=u),l.pending=u}h!==0&&yg(s,u,h)}}function _c(t,i,s,l){Si[Cs++]=t,Si[Cs++]=i,Si[Cs++]=s,Si[Cs++]=l,kf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Xf(t,i,s,l){return _c(t,i,s,l),xc(t)}function zr(t,i){return _c(t,null,null,i),xc(t)}function yg(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var u=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&i!==null&&(u=31-Be(s),t=h.hiddenUpdates,l=t[u],l===null?t[u]=[i]:l.push(i),i.lane=s|536870912),h):null}function xc(t){if(50<hl)throw hl=0,Jd=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Rs={};function ub(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(t,i,s,l){return new ub(t,i,s,l)}function Wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xa(t,i){var s=t.alternate;return s===null?(s=oi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Sg(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function yc(t,i,s,l,u,h){var S=0;if(l=t,typeof t=="function")Wf(t)&&(S=1);else if(typeof t=="string")S=mM(t,s,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=oi(31,s,i,u),t.elementType=C,t.lanes=h,t;case E:return Hr(s.children,u,h,i);case b:S=8,u|=24;break;case y:return t=oi(12,s,i,u|2),t.elementType=y,t.lanes=h,t;case z:return t=oi(13,s,i,u),t.elementType=z,t.lanes=h,t;case L:return t=oi(19,s,i,u),t.elementType=L,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:S=10;break e;case P:S=9;break e;case U:S=11;break e;case O:S=14;break e;case Q:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=oi(S,s,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function Hr(t,i,s,l){return t=oi(7,t,l,i),t.lanes=s,t}function qf(t,i,s){return t=oi(6,t,null,i),t.lanes=s,t}function bg(t){var i=oi(18,null,null,0);return i.stateNode=t,i}function jf(t,i,s){return i=oi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Mg=new WeakMap;function bi(t,i){if(typeof t=="object"&&t!==null){var s=Mg.get(t);return s!==void 0?s:(i={value:t,source:i,stack:X(i)},Mg.set(t,i),i)}return{value:t,source:i,stack:X(i)}}var ws=[],Ds=0,Sc=null,qo=0,Mi=[],Ei=0,Qa=null,Ji=1,ea="";function ya(t,i){ws[Ds++]=qo,ws[Ds++]=Sc,Sc=t,qo=i}function Eg(t,i,s){Mi[Ei++]=Ji,Mi[Ei++]=ea,Mi[Ei++]=Qa,Qa=t;var l=Ji;t=ea;var u=32-Be(l)-1;l&=~(1<<u),s+=1;var h=32-Be(i)+u;if(30<h){var S=u-u%5;h=(l&(1<<S)-1).toString(32),l>>=S,u-=S,Ji=1<<32-Be(i)+u|s<<u|l,ea=h+t}else Ji=1<<h|s<<u|l,ea=t}function Yf(t){t.return!==null&&(ya(t,1),Eg(t,1,0))}function Zf(t){for(;t===Sc;)Sc=ws[--Ds],ws[Ds]=null,qo=ws[--Ds],ws[Ds]=null;for(;t===Qa;)Qa=Mi[--Ei],Mi[Ei]=null,ea=Mi[--Ei],Mi[Ei]=null,Ji=Mi[--Ei],Mi[Ei]=null}function Tg(t,i){Mi[Ei++]=Ji,Mi[Ei++]=ea,Mi[Ei++]=Qa,Ji=i.id,ea=i.overflow,Qa=t}var Fn=null,Jt=null,Mt=!1,Ja=null,Ti=!1,Kf=Error(r(519));function er(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jo(bi(i,t)),Kf}function Ag(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[gn]=t,i[Dn]=l,s){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(s=0;s<ml.length;s++)xt(ml[s],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":xt("invalid",i),ga(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xt("invalid",i);break;case"textarea":xt("invalid",i),Ln(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||kv(i.textContent,s)?(l.popover!=null&&(xt("beforetoggle",i),xt("toggle",i)),l.onScroll!=null&&xt("scroll",i),l.onScrollEnd!=null&&xt("scrollend",i),l.onClick!=null&&(i.onclick=va),i=!0):i=!1,i||er(t,!0)}function Cg(t){for(Fn=t.return;Fn;)switch(Fn.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Fn=Fn.return}}function Us(t){if(t!==Fn)return!1;if(!Mt)return Cg(t),Mt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||ph(t.type,t.memoizedProps)),s=!s),s&&Jt&&er(t),Cg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Jt=Qv(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Jt=Qv(t)}else i===27?(i=Jt,pr(t.type)?(t=xh,xh=null,Jt=t):Jt=i):Jt=Fn?Ci(t.stateNode.nextSibling):null;return!0}function Gr(){Jt=Fn=null,Mt=!1}function $f(){var t=Ja;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),Ja=null),t}function jo(t){Ja===null?Ja=[t]:Ja.push(t)}var Qf=I(null),Vr=null,Sa=null;function tr(t,i,s){_e(Qf,i._currentValue),i._currentValue=s}function ba(t){t._currentValue=Qf.current,oe(Qf)}function Jf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function ed(t,i,s,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=u;for(var G=0;G<i.length;G++)if(R.context===i[G]){h.lanes|=s,R=h.alternate,R!==null&&(R.lanes|=s),Jf(h.return,s,t),l||(S=null);break e}h=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=s,h=S.alternate,h!==null&&(h.lanes|=s),Jf(S,s,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Ns(t,i,s,l){t=null;for(var u=i,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=u.type;si(u.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(u===pe.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(yl):t=[yl])}u=u.return}t!==null&&ed(i,t,s,l),i.flags|=262144}function bc(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function kr(t){Vr=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Bn(t){return Rg(Vr,t)}function Mc(t,i){return Vr===null&&kr(t),Rg(t,i)}function Rg(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Sa===null){if(t===null)throw Error(r(308));Sa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Sa=Sa.next=i;return s}var fb=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},db=a.unstable_scheduleCallback,hb=a.unstable_NormalPriority,vn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function td(){return{controller:new fb,data:new Map,refCount:0}}function Yo(t){t.refCount--,t.refCount===0&&db(hb,function(){t.controller.abort()})}var Zo=null,nd=0,Ls=0,Os=null;function pb(t,i){if(Zo===null){var s=Zo=[];nd=0,Ls=rh(),Os={status:"pending",value:void 0,then:function(l){s.push(l)}}}return nd++,i.then(wg,wg),i}function wg(){if(--nd===0&&Zo!==null){Os!==null&&(Os.status="fulfilled");var t=Zo;Zo=null,Ls=0,Os=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function mb(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var Dg=F.S;F.S=function(t,i){hv=_(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&pb(t,i),Dg!==null&&Dg(t,i)};var Xr=I(null);function id(){var t=Xr.current;return t!==null?t:$t.pooledCache}function Ec(t,i){i===null?_e(Xr,Xr.current):_e(Xr,i.pool)}function Ug(){var t=id();return t===null?null:{parent:vn._currentValue,pool:t}}var Ps=Error(r(460)),ad=Error(r(474)),Tc=Error(r(542)),Ac={then:function(){}};function Ng(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Lg(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(va,va),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Pg(t),t;default:if(typeof i.status=="string")i.then(va,va);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Pg(t),t}throw qr=i,Ps}}function Wr(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(qr=s,Ps):s}}var qr=null;function Og(){if(qr===null)throw Error(r(459));var t=qr;return qr=null,t}function Pg(t){if(t===Ps||t===Tc)throw Error(r(483))}var Fs=null,Ko=0;function Cc(t){var i=Ko;return Ko+=1,Fs===null&&(Fs=[]),Lg(Fs,t,i)}function $o(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Rc(t,i){throw i.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Fg(t){function i($,j){if(t){var ie=$.deletions;ie===null?($.deletions=[j],$.flags|=16):ie.push(j)}}function s($,j){if(!t)return null;for(;j!==null;)i($,j),j=j.sibling;return null}function l($){for(var j=new Map;$!==null;)$.key!==null?j.set($.key,$):j.set($.index,$),$=$.sibling;return j}function u($,j){return $=xa($,j),$.index=0,$.sibling=null,$}function h($,j,ie){return $.index=ie,t?(ie=$.alternate,ie!==null?(ie=ie.index,ie<j?($.flags|=67108866,j):ie):($.flags|=67108866,j)):($.flags|=1048576,j)}function S($){return t&&$.alternate===null&&($.flags|=67108866),$}function R($,j,ie,ve){return j===null||j.tag!==6?(j=qf(ie,$.mode,ve),j.return=$,j):(j=u(j,ie),j.return=$,j)}function G($,j,ie,ve){var Qe=ie.type;return Qe===E?me($,j,ie.props.children,ve,ie.key):j!==null&&(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Q&&Wr(Qe)===j.type)?(j=u(j,ie.props),$o(j,ie),j.return=$,j):(j=yc(ie.type,ie.key,ie.props,null,$.mode,ve),$o(j,ie),j.return=$,j)}function ae($,j,ie,ve){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=jf(ie,$.mode,ve),j.return=$,j):(j=u(j,ie.children||[]),j.return=$,j)}function me($,j,ie,ve,Qe){return j===null||j.tag!==7?(j=Hr(ie,$.mode,ve,Qe),j.return=$,j):(j=u(j,ie),j.return=$,j)}function xe($,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=qf(""+j,$.mode,ie),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return ie=yc(j.type,j.key,j.props,null,$.mode,ie),$o(ie,j),ie.return=$,ie;case T:return j=jf(j,$.mode,ie),j.return=$,j;case Q:return j=Wr(j),xe($,j,ie)}if(ee(j)||A(j))return j=Hr(j,$.mode,ie,null),j.return=$,j;if(typeof j.then=="function")return xe($,Cc(j),ie);if(j.$$typeof===B)return xe($,Mc($,j),ie);Rc($,j)}return null}function ce($,j,ie,ve){var Qe=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return Qe!==null?null:R($,j,""+ie,ve);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:return ie.key===Qe?G($,j,ie,ve):null;case T:return ie.key===Qe?ae($,j,ie,ve):null;case Q:return ie=Wr(ie),ce($,j,ie,ve)}if(ee(ie)||A(ie))return Qe!==null?null:me($,j,ie,ve,null);if(typeof ie.then=="function")return ce($,j,Cc(ie),ve);if(ie.$$typeof===B)return ce($,j,Mc($,ie),ve);Rc($,ie)}return null}function de($,j,ie,ve,Qe){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return $=$.get(ie)||null,R(j,$,""+ve,Qe);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case M:return $=$.get(ve.key===null?ie:ve.key)||null,G(j,$,ve,Qe);case T:return $=$.get(ve.key===null?ie:ve.key)||null,ae(j,$,ve,Qe);case Q:return ve=Wr(ve),de($,j,ie,ve,Qe)}if(ee(ve)||A(ve))return $=$.get(ie)||null,me(j,$,ve,Qe,null);if(typeof ve.then=="function")return de($,j,ie,Cc(ve),Qe);if(ve.$$typeof===B)return de($,j,ie,Mc(j,ve),Qe);Rc(j,ve)}return null}function qe($,j,ie,ve){for(var Qe=null,wt=null,Ke=j,dt=j=0,St=null;Ke!==null&&dt<ie.length;dt++){Ke.index>dt?(St=Ke,Ke=null):St=Ke.sibling;var Dt=ce($,Ke,ie[dt],ve);if(Dt===null){Ke===null&&(Ke=St);break}t&&Ke&&Dt.alternate===null&&i($,Ke),j=h(Dt,j,dt),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt,Ke=St}if(dt===ie.length)return s($,Ke),Mt&&ya($,dt),Qe;if(Ke===null){for(;dt<ie.length;dt++)Ke=xe($,ie[dt],ve),Ke!==null&&(j=h(Ke,j,dt),wt===null?Qe=Ke:wt.sibling=Ke,wt=Ke);return Mt&&ya($,dt),Qe}for(Ke=l(Ke);dt<ie.length;dt++)St=de(Ke,$,dt,ie[dt],ve),St!==null&&(t&&St.alternate!==null&&Ke.delete(St.key===null?dt:St.key),j=h(St,j,dt),wt===null?Qe=St:wt.sibling=St,wt=St);return t&&Ke.forEach(function(xr){return i($,xr)}),Mt&&ya($,dt),Qe}function it($,j,ie,ve){if(ie==null)throw Error(r(151));for(var Qe=null,wt=null,Ke=j,dt=j=0,St=null,Dt=ie.next();Ke!==null&&!Dt.done;dt++,Dt=ie.next()){Ke.index>dt?(St=Ke,Ke=null):St=Ke.sibling;var xr=ce($,Ke,Dt.value,ve);if(xr===null){Ke===null&&(Ke=St);break}t&&Ke&&xr.alternate===null&&i($,Ke),j=h(xr,j,dt),wt===null?Qe=xr:wt.sibling=xr,wt=xr,Ke=St}if(Dt.done)return s($,Ke),Mt&&ya($,dt),Qe;if(Ke===null){for(;!Dt.done;dt++,Dt=ie.next())Dt=xe($,Dt.value,ve),Dt!==null&&(j=h(Dt,j,dt),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt);return Mt&&ya($,dt),Qe}for(Ke=l(Ke);!Dt.done;dt++,Dt=ie.next())Dt=de(Ke,$,dt,Dt.value,ve),Dt!==null&&(t&&Dt.alternate!==null&&Ke.delete(Dt.key===null?dt:Dt.key),j=h(Dt,j,dt),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt);return t&&Ke.forEach(function(AM){return i($,AM)}),Mt&&ya($,dt),Qe}function Yt($,j,ie,ve){if(typeof ie=="object"&&ie!==null&&ie.type===E&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:e:{for(var Qe=ie.key;j!==null;){if(j.key===Qe){if(Qe=ie.type,Qe===E){if(j.tag===7){s($,j.sibling),ve=u(j,ie.props.children),ve.return=$,$=ve;break e}}else if(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Q&&Wr(Qe)===j.type){s($,j.sibling),ve=u(j,ie.props),$o(ve,ie),ve.return=$,$=ve;break e}s($,j);break}else i($,j);j=j.sibling}ie.type===E?(ve=Hr(ie.props.children,$.mode,ve,ie.key),ve.return=$,$=ve):(ve=yc(ie.type,ie.key,ie.props,null,$.mode,ve),$o(ve,ie),ve.return=$,$=ve)}return S($);case T:e:{for(Qe=ie.key;j!==null;){if(j.key===Qe)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){s($,j.sibling),ve=u(j,ie.children||[]),ve.return=$,$=ve;break e}else{s($,j);break}else i($,j);j=j.sibling}ve=jf(ie,$.mode,ve),ve.return=$,$=ve}return S($);case Q:return ie=Wr(ie),Yt($,j,ie,ve)}if(ee(ie))return qe($,j,ie,ve);if(A(ie)){if(Qe=A(ie),typeof Qe!="function")throw Error(r(150));return ie=Qe.call(ie),it($,j,ie,ve)}if(typeof ie.then=="function")return Yt($,j,Cc(ie),ve);if(ie.$$typeof===B)return Yt($,j,Mc($,ie),ve);Rc($,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,j!==null&&j.tag===6?(s($,j.sibling),ve=u(j,ie),ve.return=$,$=ve):(s($,j),ve=qf(ie,$.mode,ve),ve.return=$,$=ve),S($)):s($,j)}return function($,j,ie,ve){try{Ko=0;var Qe=Yt($,j,ie,ve);return Fs=null,Qe}catch(Ke){if(Ke===Ps||Ke===Tc)throw Ke;var wt=oi(29,Ke,null,$.mode);return wt.lanes=ve,wt.return=$,wt}}}var jr=Fg(!0),Bg=Fg(!1),nr=!1;function rd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ir(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ar(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ot&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=xc(t),yg(t,null,s),i}return _c(t,l,i,s),xc(t)}function Qo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,No(t,s)}}function od(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,s=s.next}while(s!==null);h===null?u=h=i:h=h.next=i}else u=h=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var ld=!1;function Jo(){if(ld){var t=Os;if(t!==null)throw t}}function el(t,i,s,l){ld=!1;var u=t.updateQueue;nr=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,ae=G.next;G.next=null,S===null?h=ae:S.next=ae,S=G;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==S&&(R===null?me.firstBaseUpdate=ae:R.next=ae,me.lastBaseUpdate=G))}if(h!==null){var xe=u.baseState;S=0,me=ae=G=null,R=h;do{var ce=R.lane&-536870913,de=ce!==R.lane;if(de?(yt&ce)===ce:(l&ce)===ce){ce!==0&&ce===Ls&&(ld=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,it=R;ce=i;var Yt=s;switch(it.tag){case 1:if(qe=it.payload,typeof qe=="function"){xe=qe.call(Yt,xe,ce);break e}xe=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=it.payload,ce=typeof qe=="function"?qe.call(Yt,xe,ce):qe,ce==null)break e;xe=g({},xe,ce);break e;case 2:nr=!0}}ce=R.callback,ce!==null&&(t.flags|=64,de&&(t.flags|=8192),de=u.callbacks,de===null?u.callbacks=[ce]:de.push(ce))}else de={lane:ce,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(ae=me=de,G=xe):me=me.next=de,S|=ce;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;de=R,R=de.next,de.next=null,u.lastBaseUpdate=de,u.shared.pending=null}}while(!0);me===null&&(G=xe),u.baseState=G,u.firstBaseUpdate=ae,u.lastBaseUpdate=me,h===null&&(u.shared.lanes=0),cr|=S,t.lanes=S,t.memoizedState=xe}}function Ig(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function zg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Ig(s[t],i)}var Bs=I(null),wc=I(0);function Hg(t,i){t=Ua,_e(wc,t),_e(Bs,i),Ua=t|i.baseLanes}function cd(){_e(wc,Ua),_e(Bs,Bs.current)}function ud(){Ua=wc.current,oe(Bs),oe(wc)}var li=I(null),Ai=null;function rr(t){var i=t.alternate;_e(dn,dn.current&1),_e(li,t),Ai===null&&(i===null||Bs.current!==null||i.memoizedState!==null)&&(Ai=t)}function fd(t){_e(dn,dn.current),_e(li,t),Ai===null&&(Ai=t)}function Gg(t){t.tag===22?(_e(dn,dn.current),_e(li,t),Ai===null&&(Ai=t)):sr()}function sr(){_e(dn,dn.current),_e(li,li.current)}function ci(t){oe(li),Ai===t&&(Ai=null),oe(dn)}var dn=I(0);function Dc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||vh(s)||_h(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ma=0,ut=null,qt=null,_n=null,Uc=!1,Is=!1,Yr=!1,Nc=0,tl=0,zs=null,gb=0;function on(){throw Error(r(321))}function dd(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!si(t[s],i[s]))return!1;return!0}function hd(t,i,s,l,u,h){return Ma=h,ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=t===null||t.memoizedState===null?E0:Rd,Yr=!1,h=s(l,u),Yr=!1,Is&&(h=kg(i,s,l,u)),Vg(t),h}function Vg(t){F.H=al;var i=qt!==null&&qt.next!==null;if(Ma=0,_n=qt=ut=null,Uc=!1,tl=0,zs=null,i)throw Error(r(300));t===null||xn||(t=t.dependencies,t!==null&&bc(t)&&(xn=!0))}function kg(t,i,s,l){ut=t;var u=0;do{if(Is&&(zs=null),tl=0,Is=!1,25<=u)throw Error(r(301));if(u+=1,_n=qt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=T0,h=i(s,l)}while(Is);return h}function vb(){var t=F.H,i=t.useState()[0];return i=typeof i.then=="function"?nl(i):i,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(ut.flags|=1024),i}function pd(){var t=Nc!==0;return Nc=0,t}function md(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function gd(t){if(Uc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Uc=!1}Ma=0,_n=qt=ut=null,Is=!1,tl=Nc=0,zs=null}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?ut.memoizedState=_n=t:_n=_n.next=t,_n}function hn(){if(qt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=_n===null?ut.memoizedState:_n.next;if(i!==null)_n=i,qt=t;else{if(t===null)throw ut.alternate===null?Error(r(467)):Error(r(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},_n===null?ut.memoizedState=_n=t:_n=_n.next=t}return _n}function Lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nl(t){var i=tl;return tl+=1,zs===null&&(zs=[]),t=Lg(zs,t,i),i=ut,(_n===null?i.memoizedState:_n.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?E0:Rd),t}function Oc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nl(t);if(t.$$typeof===B)return Bn(t)}throw Error(r(438,String(t)))}function vd(t){var i=null,s=ut.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ut.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Lc(),ut.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=D;return i.index++,s}function Ea(t,i){return typeof i=="function"?i(t):i}function Pc(t){var i=hn();return _d(i,qt,t)}function _d(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var u=t.baseQueue,h=l.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}i.baseQueue=u=h,l.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{i=u.next;var R=S=null,G=null,ae=i,me=!1;do{var xe=ae.lane&-536870913;if(xe!==ae.lane?(yt&xe)===xe:(Ma&xe)===xe){var ce=ae.revertLane;if(ce===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),xe===Ls&&(me=!0);else if((Ma&ce)===ce){ae=ae.next,ce===Ls&&(me=!0);continue}else xe={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(R=G=xe,S=h):G=G.next=xe,ut.lanes|=ce,cr|=ce;xe=ae.action,Yr&&s(h,xe),h=ae.hasEagerState?ae.eagerState:s(h,xe)}else ce={lane:xe,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(R=G=ce,S=h):G=G.next=ce,ut.lanes|=xe,cr|=xe;ae=ae.next}while(ae!==null&&ae!==i);if(G===null?S=h:G.next=R,!si(h,t.memoizedState)&&(xn=!0,me&&(s=Os,s!==null)))throw s;t.memoizedState=h,t.baseState=S,t.baseQueue=G,l.lastRenderedState=h}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function xd(t){var i=hn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,h=i.memoizedState;if(u!==null){s.pending=null;var S=u=u.next;do h=t(h,S.action),S=S.next;while(S!==u);si(h,i.memoizedState)||(xn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function Xg(t,i,s){var l=ut,u=hn(),h=Mt;if(h){if(s===void 0)throw Error(r(407));s=s()}else s=i();var S=!si((qt||u).memoizedState,s);if(S&&(u.memoizedState=s,xn=!0),u=u.queue,bd(jg.bind(null,l,u,t),[t]),u.getSnapshot!==i||S||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,Hs(9,{destroy:void 0},qg.bind(null,l,u,s,i),null),$t===null)throw Error(r(349));h||(Ma&127)!==0||Wg(l,i,s)}return s}function Wg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ut.updateQueue,i===null?(i=Lc(),ut.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function qg(t,i,s,l){i.value=s,i.getSnapshot=l,Yg(i)&&Zg(t)}function jg(t,i,s){return s(function(){Yg(i)&&Zg(t)})}function Yg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!si(t,s)}catch{return!0}}function Zg(t){var i=zr(t,2);i!==null&&ti(i,t,2)}function yd(t){var i=jn();if(typeof t=="function"){var s=t;if(t=s(),Yr){ze(!0);try{s()}finally{ze(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},i}function Kg(t,i,s,l){return t.baseState=s,_d(t,qt,typeof l=="function"?l:Ea)}function _b(t,i,s,l,u){if(Ic(t))throw Error(r(485));if(t=i.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};F.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,$g(i,h)):(h.next=s.next,i.pending=s.next=h)}}function $g(t,i){var s=i.action,l=i.payload,u=t.state;if(i.isTransition){var h=F.T,S={};F.T=S;try{var R=s(u,l),G=F.S;G!==null&&G(S,R),Qg(t,i,R)}catch(ae){Sd(t,i,ae)}finally{h!==null&&S.types!==null&&(h.types=S.types),F.T=h}}else try{h=s(u,l),Qg(t,i,h)}catch(ae){Sd(t,i,ae)}}function Qg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Jg(t,i,l)},function(l){return Sd(t,i,l)}):Jg(t,i,s)}function Jg(t,i,s){i.status="fulfilled",i.value=s,e0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,$g(t,s)))}function Sd(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,e0(i),i=i.next;while(i!==l)}t.action=null}function e0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function t0(t,i){return i}function n0(t,i){if(Mt){var s=$t.formState;if(s!==null){e:{var l=ut;if(Mt){if(Jt){t:{for(var u=Jt,h=Ti;u.nodeType!==8;){if(!h){u=null;break t}if(u=Ci(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Jt=Ci(u.nextSibling),l=u.data==="F!";break e}}er(l)}l=!1}l&&(i=s[0])}}return s=jn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t0,lastRenderedState:i},s.queue=l,s=S0.bind(null,ut,l),l.dispatch=s,l=yd(!1),h=Cd.bind(null,ut,!1,l.queue),l=jn(),u={state:i,dispatch:null,action:t,pending:null},l.queue=u,s=_b.bind(null,ut,u,h,s),u.dispatch=s,l.memoizedState=t,[i,s,!1]}function i0(t){var i=hn();return a0(i,qt,t)}function a0(t,i,s){if(i=_d(t,i,t0)[0],t=Pc(Ea)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=nl(i)}catch(S){throw S===Ps?Tc:S}else l=i;i=hn();var u=i.queue,h=u.dispatch;return s!==i.memoizedState&&(ut.flags|=2048,Hs(9,{destroy:void 0},xb.bind(null,u,s),null)),[l,h,t]}function xb(t,i){t.action=i}function r0(t){var i=hn(),s=qt;if(s!==null)return a0(i,s,t);hn(),i=i.memoizedState,s=hn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Hs(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ut.updateQueue,i===null&&(i=Lc(),ut.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function s0(){return hn().memoizedState}function Fc(t,i,s,l){var u=jn();ut.flags|=t,u.memoizedState=Hs(1|i,{destroy:void 0},s,l===void 0?null:l)}function Bc(t,i,s,l){var u=hn();l=l===void 0?null:l;var h=u.memoizedState.inst;qt!==null&&l!==null&&dd(l,qt.memoizedState.deps)?u.memoizedState=Hs(i,h,s,l):(ut.flags|=t,u.memoizedState=Hs(1|i,h,s,l))}function o0(t,i){Fc(8390656,8,t,i)}function bd(t,i){Bc(2048,8,t,i)}function yb(t){ut.flags|=4;var i=ut.updateQueue;if(i===null)i=Lc(),ut.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function l0(t){var i=hn().memoizedState;return yb({ref:i,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function c0(t,i){return Bc(4,2,t,i)}function u0(t,i){return Bc(4,4,t,i)}function f0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function d0(t,i,s){s=s!=null?s.concat([t]):null,Bc(4,4,f0.bind(null,i,t),s)}function Md(){}function h0(t,i){var s=hn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&dd(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function p0(t,i){var s=hn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&dd(i,l[1]))return l[0];if(l=t(),Yr){ze(!0);try{t()}finally{ze(!1)}}return s.memoizedState=[l,i],l}function Ed(t,i,s){return s===void 0||(Ma&1073741824)!==0&&(yt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=mv(),ut.lanes|=t,cr|=t,s)}function m0(t,i,s,l){return si(s,i)?s:Bs.current!==null?(t=Ed(t,s,l),si(t,i)||(xn=!0),t):(Ma&42)===0||(Ma&1073741824)!==0&&(yt&261930)===0?(xn=!0,t.memoizedState=s):(t=mv(),ut.lanes|=t,cr|=t,i)}function g0(t,i,s,l,u){var h=V.p;V.p=h!==0&&8>h?h:8;var S=F.T,R={};F.T=R,Cd(t,!1,i,s);try{var G=u(),ae=F.S;if(ae!==null&&ae(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var me=mb(G,l);il(t,i,me,di(t))}else il(t,i,l,di(t))}catch(xe){il(t,i,{then:function(){},status:"rejected",reason:xe},di())}finally{V.p=h,S!==null&&R.types!==null&&(S.types=R.types),F.T=S}}function Sb(){}function Td(t,i,s,l){if(t.tag!==5)throw Error(r(476));var u=v0(t).queue;g0(t,u,i,ne,s===null?Sb:function(){return _0(t),s(l)})}function v0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:ne},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function _0(t){var i=v0(t);i.next===null&&(i=t.alternate.memoizedState),il(t,i.next.queue,{},di())}function Ad(){return Bn(yl)}function x0(){return hn().memoizedState}function y0(){return hn().memoizedState}function bb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=di();t=ir(s);var l=ar(i,t,s);l!==null&&(ti(l,i,s),Qo(l,i,s)),i={cache:td()},t.payload=i;return}i=i.return}}function Mb(t,i,s){var l=di();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Ic(t)?b0(i,s):(s=Xf(t,i,s,l),s!==null&&(ti(s,t,l),M0(s,i,l)))}function S0(t,i,s){var l=di();il(t,i,s,l)}function il(t,i,s,l){var u={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ic(t))b0(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,R=h(S,s);if(u.hasEagerState=!0,u.eagerState=R,si(R,S))return _c(t,i,u,0),$t===null&&vc(),!1}catch{}if(s=Xf(t,i,u,l),s!==null)return ti(s,t,l),M0(s,i,l),!0}return!1}function Cd(t,i,s,l){if(l={lane:2,revertLane:rh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ic(t)){if(i)throw Error(r(479))}else i=Xf(t,s,l,2),i!==null&&ti(i,t,2)}function Ic(t){var i=t.alternate;return t===ut||i!==null&&i===ut}function b0(t,i){Is=Uc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function M0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,No(t,s)}}var al={readContext:Bn,use:Oc,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};al.useEffectEvent=on;var E0={readContext:Bn,use:Oc,useCallback:function(t,i){return jn().memoizedState=[t,i===void 0?null:i],t},useContext:Bn,useEffect:o0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Fc(4194308,4,f0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Fc(4194308,4,t,i)},useInsertionEffect:function(t,i){Fc(4,2,t,i)},useMemo:function(t,i){var s=jn();i=i===void 0?null:i;var l=t();if(Yr){ze(!0);try{t()}finally{ze(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=jn();if(s!==void 0){var u=s(i);if(Yr){ze(!0);try{s(i)}finally{ze(!1)}}}else u=i;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=Mb.bind(null,ut,t),[l.memoizedState,t]},useRef:function(t){var i=jn();return t={current:t},i.memoizedState=t},useState:function(t){t=yd(t);var i=t.queue,s=S0.bind(null,ut,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Md,useDeferredValue:function(t,i){var s=jn();return Ed(s,t,i)},useTransition:function(){var t=yd(!1);return t=g0.bind(null,ut,t.queue,!0,!1),jn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ut,u=jn();if(Mt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),$t===null)throw Error(r(349));(yt&127)!==0||Wg(l,i,s)}u.memoizedState=s;var h={value:s,getSnapshot:i};return u.queue=h,o0(jg.bind(null,l,h,t),[t]),l.flags|=2048,Hs(9,{destroy:void 0},qg.bind(null,l,h,s,i),null),s},useId:function(){var t=jn(),i=$t.identifierPrefix;if(Mt){var s=ea,l=Ji;s=(l&~(1<<32-Be(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Nc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=gb++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Ad,useFormState:n0,useActionState:n0,useOptimistic:function(t){var i=jn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Cd.bind(null,ut,!0,s),s.dispatch=i,[t,i]},useMemoCache:vd,useCacheRefresh:function(){return jn().memoizedState=bb.bind(null,ut)},useEffectEvent:function(t){var i=jn(),s={impl:t};return i.memoizedState=s,function(){if((Ot&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Rd={readContext:Bn,use:Oc,useCallback:h0,useContext:Bn,useEffect:bd,useImperativeHandle:d0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:Pc,useRef:s0,useState:function(){return Pc(Ea)},useDebugValue:Md,useDeferredValue:function(t,i){var s=hn();return m0(s,qt.memoizedState,t,i)},useTransition:function(){var t=Pc(Ea)[0],i=hn().memoizedState;return[typeof t=="boolean"?t:nl(t),i]},useSyncExternalStore:Xg,useId:x0,useHostTransitionStatus:Ad,useFormState:i0,useActionState:i0,useOptimistic:function(t,i){var s=hn();return Kg(s,qt,t,i)},useMemoCache:vd,useCacheRefresh:y0};Rd.useEffectEvent=l0;var T0={readContext:Bn,use:Oc,useCallback:h0,useContext:Bn,useEffect:bd,useImperativeHandle:d0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:xd,useRef:s0,useState:function(){return xd(Ea)},useDebugValue:Md,useDeferredValue:function(t,i){var s=hn();return qt===null?Ed(s,t,i):m0(s,qt.memoizedState,t,i)},useTransition:function(){var t=xd(Ea)[0],i=hn().memoizedState;return[typeof t=="boolean"?t:nl(t),i]},useSyncExternalStore:Xg,useId:x0,useHostTransitionStatus:Ad,useFormState:r0,useActionState:r0,useOptimistic:function(t,i){var s=hn();return qt!==null?Kg(s,qt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:vd,useCacheRefresh:y0};T0.useEffectEvent=l0;function wd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Dd={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=di(),u=ir(l);u.payload=i,s!=null&&(u.callback=s),i=ar(t,u,l),i!==null&&(ti(i,t,l),Qo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=di(),u=ir(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=ar(t,u,l),i!==null&&(ti(i,t,l),Qo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=di(),l=ir(s);l.tag=2,i!=null&&(l.callback=i),i=ar(t,l,s),i!==null&&(ti(i,t,s),Qo(i,t,s))}};function A0(t,i,s,l,u,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,S):i.prototype&&i.prototype.isPureReactComponent?!Xo(s,l)||!Xo(u,h):!0}function C0(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Dd.enqueueReplaceState(i,i.state,null)}function Zr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function R0(t){gc(t)}function w0(t){console.error(t)}function D0(t){gc(t)}function zc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function U0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ud(t,i,s){return s=ir(s),s.tag=3,s.payload={element:null},s.callback=function(){zc(t,i)},s}function N0(t){return t=ir(t),t.tag=3,t}function L0(t,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var h=l.value;t.payload=function(){return u(h)},t.callback=function(){U0(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){U0(i,s,l),typeof u!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function Eb(t,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Ns(i,s,u,!0),s=li.current,s!==null){switch(s.tag){case 31:case 13:return Ai===null?$c():s.alternate===null&&ln===0&&(ln=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===Ac?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),nh(t,l,u)),!1;case 22:return s.flags|=65536,l===Ac?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),nh(t,l,u)),!1}throw Error(r(435,s.tag))}return nh(t,l,u),$c(),!1}if(Mt)return i=li.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==Kf&&(t=Error(r(422),{cause:l}),jo(bi(t,s)))):(l!==Kf&&(i=Error(r(423),{cause:l}),jo(bi(i,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=bi(l,s),u=Ud(t.stateNode,l,u),od(t,u),ln!==4&&(ln=2)),!1;var h=Error(r(520),{cause:l});if(h=bi(h,s),dl===null?dl=[h]:dl.push(h),ln!==4&&(ln=2),i===null)return!0;l=bi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=Ud(s.stateNode,l,t),od(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ur===null||!ur.has(h))))return s.flags|=65536,u&=-u,s.lanes|=u,u=N0(u),L0(u,t,s,l),od(s,u),!1}s=s.return}while(s!==null);return!1}var Nd=Error(r(461)),xn=!1;function In(t,i,s,l){i.child=t===null?Bg(i,null,s,l):jr(i,t.child,s,l)}function O0(t,i,s,l,u){s=s.render;var h=i.ref;if("ref"in l){var S={};for(var R in l)R!=="ref"&&(S[R]=l[R])}else S=l;return kr(i),l=hd(t,i,s,S,h,u),R=pd(),t!==null&&!xn?(md(t,i,u),Ta(t,i,u)):(Mt&&R&&Yf(i),i.flags|=1,In(t,i,l,u),i.child)}function P0(t,i,s,l,u){if(t===null){var h=s.type;return typeof h=="function"&&!Wf(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,F0(t,i,h,l,u)):(t=yc(s.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Hd(t,u)){var S=h.memoizedProps;if(s=s.compare,s=s!==null?s:Xo,s(S,l)&&t.ref===i.ref)return Ta(t,i,u)}return i.flags|=1,t=xa(h,l),t.ref=i.ref,t.return=i,i.child=t}function F0(t,i,s,l,u){if(t!==null){var h=t.memoizedProps;if(Xo(h,l)&&t.ref===i.ref)if(xn=!1,i.pendingProps=l=h,Hd(t,u))(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,Ta(t,i,u)}return Ld(t,i,s,l,u)}function B0(t,i,s,l){var u=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~h}else l=0,i.child=null;return I0(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ec(i,h!==null?h.cachePool:null),h!==null?Hg(i,h):cd(),Gg(i);else return l=i.lanes=536870912,I0(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(Ec(i,h.cachePool),Hg(i,h),sr(),i.memoizedState=null):(t!==null&&Ec(i,null),cd(),sr());return In(t,i,u,s),i.child}function rl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function I0(t,i,s,l,u){var h=id();return h=h===null?null:{parent:vn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&Ec(i,null),cd(),Gg(i),t!==null&&Ns(t,i,l,!0),i.childLanes=u,null}function Hc(t,i){return i=Vc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function z0(t,i,s){return jr(i,t.child,null,s),t=Hc(i,i.pendingProps),t.flags|=2,ci(i),i.memoizedState=null,t}function Tb(t,i,s){var l=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Mt){if(l.mode==="hidden")return t=Hc(i,l),i.lanes=536870912,rl(null,t);if(fd(i),(t=Jt)?(t=$v(t,Ti),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Qa!==null?{id:Ji,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},s=bg(t),s.return=i,i.child=s,Fn=i,Jt=null)):t=null,t===null)throw er(i);return i.lanes=536870912,null}return Hc(i,l)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(fd(i),u)if(i.flags&256)i.flags&=-257,i=z0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(xn||Ns(t,i,s,!1),u=(s&t.childLanes)!==0,xn||u){if(l=$t,l!==null&&(S=vs(l,s),S!==0&&S!==h.retryLane))throw h.retryLane=S,zr(t,S),ti(l,t,S),Nd;$c(),i=z0(t,i,s)}else t=h.treeContext,Jt=Ci(S.nextSibling),Fn=i,Mt=!0,Ja=null,Ti=!1,t!==null&&Tg(i,t),i=Hc(i,l),i.flags|=4096;return i}return t=xa(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Gc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Ld(t,i,s,l,u){return kr(i),s=hd(t,i,s,l,void 0,u),l=pd(),t!==null&&!xn?(md(t,i,u),Ta(t,i,u)):(Mt&&l&&Yf(i),i.flags|=1,In(t,i,s,u),i.child)}function H0(t,i,s,l,u,h){return kr(i),i.updateQueue=null,s=kg(i,l,s,u),Vg(t),l=pd(),t!==null&&!xn?(md(t,i,h),Ta(t,i,h)):(Mt&&l&&Yf(i),i.flags|=1,In(t,i,s,h),i.child)}function G0(t,i,s,l,u){if(kr(i),i.stateNode===null){var h=Rs,S=s.contextType;typeof S=="object"&&S!==null&&(h=Bn(S)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Dd,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},rd(i),S=s.contextType,h.context=typeof S=="object"&&S!==null?Bn(S):Rs,h.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(wd(i,s,S,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Dd.enqueueReplaceState(h,h.state,null),el(i,l,h,u),Jo(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var R=i.memoizedProps,G=Zr(s,R);h.props=G;var ae=h.context,me=s.contextType;S=Rs,typeof me=="object"&&me!==null&&(S=Bn(me));var xe=s.getDerivedStateFromProps;me=typeof xe=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,me||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||ae!==S)&&C0(i,h,l,S),nr=!1;var ce=i.memoizedState;h.state=ce,el(i,l,h,u),Jo(),ae=i.memoizedState,R||ce!==ae||nr?(typeof xe=="function"&&(wd(i,s,xe,l),ae=i.memoizedState),(G=nr||A0(i,s,G,l,ce,ae,S))?(me||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ae),h.props=l,h.state=ae,h.context=S,l=G):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,sd(t,i),S=i.memoizedProps,me=Zr(s,S),h.props=me,xe=i.pendingProps,ce=h.context,ae=s.contextType,G=Rs,typeof ae=="object"&&ae!==null&&(G=Bn(ae)),R=s.getDerivedStateFromProps,(ae=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==xe||ce!==G)&&C0(i,h,l,G),nr=!1,ce=i.memoizedState,h.state=ce,el(i,l,h,u),Jo();var de=i.memoizedState;S!==xe||ce!==de||nr||t!==null&&t.dependencies!==null&&bc(t.dependencies)?(typeof R=="function"&&(wd(i,s,R,l),de=i.memoizedState),(me=nr||A0(i,s,me,l,ce,de,G)||t!==null&&t.dependencies!==null&&bc(t.dependencies))?(ae||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,de,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,de,G)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=de),h.props=l,h.state=de,h.context=G,l=me):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,Gc(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=jr(i,t.child,null,u),i.child=jr(i,null,s,u)):In(t,i,s,u),i.memoizedState=h.state,t=i.child):t=Ta(t,i,u),t}function V0(t,i,s,l){return Gr(),i.flags|=256,In(t,i,s,l),i.child}var Od={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pd(t){return{baseLanes:t,cachePool:Ug()}}function Fd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=fi),t}function k0(t,i,s){var l=i.pendingProps,u=!1,h=(i.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),S&&(u=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Mt){if(u?rr(i):sr(),(t=Jt)?(t=$v(t,Ti),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Qa!==null?{id:Ji,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},s=bg(t),s.return=i,i.child=s,Fn=i,Jt=null)):t=null,t===null)throw er(i);return _h(t)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,u?(sr(),u=i.mode,R=Vc({mode:"hidden",children:R},u),l=Hr(l,u,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=Pd(s),l.childLanes=Fd(t,S,s),i.memoizedState=Od,rl(null,l)):(rr(i),Bd(i,R))}var G=t.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(h)i.flags&256?(rr(i),i.flags&=-257,i=Id(t,i,s)):i.memoizedState!==null?(sr(),i.child=t.child,i.flags|=128,i=null):(sr(),R=l.fallback,u=i.mode,l=Vc({mode:"visible",children:l.children},u),R=Hr(R,u,s,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,jr(i,t.child,null,s),l=i.child,l.memoizedState=Pd(s),l.childLanes=Fd(t,S,s),i.memoizedState=Od,i=rl(null,l));else if(rr(i),_h(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var ae=S.dgst;S=ae,l=Error(r(419)),l.stack="",l.digest=S,jo({value:l,source:null,stack:null}),i=Id(t,i,s)}else if(xn||Ns(t,i,s,!1),S=(s&t.childLanes)!==0,xn||S){if(S=$t,S!==null&&(l=vs(S,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,zr(t,l),ti(S,t,l),Nd;vh(R)||$c(),i=Id(t,i,s)}else vh(R)?(i.flags|=192,i.child=t.child,i=null):(t=G.treeContext,Jt=Ci(R.nextSibling),Fn=i,Mt=!0,Ja=null,Ti=!1,t!==null&&Tg(i,t),i=Bd(i,l.children),i.flags|=4096);return i}return u?(sr(),R=l.fallback,u=i.mode,G=t.child,ae=G.sibling,l=xa(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,ae!==null?R=xa(ae,R):(R=Hr(R,u,s,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,rl(null,l),l=i.child,R=t.child.memoizedState,R===null?R=Pd(s):(u=R.cachePool,u!==null?(G=vn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Ug(),R={baseLanes:R.baseLanes|s,cachePool:u}),l.memoizedState=R,l.childLanes=Fd(t,S,s),i.memoizedState=Od,rl(t.child,l)):(rr(i),s=t.child,t=s.sibling,s=xa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function Bd(t,i){return i=Vc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Vc(t,i){return t=oi(22,t,null,i),t.lanes=0,t}function Id(t,i,s){return jr(i,t.child,null,s),t=Bd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function X0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Jf(t.return,i,s)}function zd(t,i,s,l,u,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u,treeForkCount:h}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=u,S.treeForkCount=h)}function W0(t,i,s){var l=i.pendingProps,u=l.revealOrder,h=l.tail;l=l.children;var S=dn.current,R=(S&2)!==0;if(R?(S=S&1|2,i.flags|=128):S&=1,_e(dn,S),In(t,i,l,s),l=Mt?qo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&X0(t,s,i);else if(t.tag===19)X0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&Dc(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),zd(i,!1,u,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Dc(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}zd(i,!0,s,null,h,l);break;case"together":zd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Ta(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),cr|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Ns(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=xa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=xa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Hd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&bc(t)))}function Ab(t,i,s){switch(i.tag){case 3:Re(i,i.stateNode.containerInfo),tr(i,vn,t.memoizedState.cache),Gr();break;case 27:case 5:Ve(i);break;case 4:Re(i,i.stateNode.containerInfo);break;case 10:tr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,fd(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(rr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?k0(t,i,s):(rr(i),t=Ta(t,i,s),t!==null?t.sibling:null);rr(i);break;case 19:var u=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Ns(t,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return W0(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(dn,dn.current),l)break;return null;case 22:return i.lanes=0,B0(t,i,s,i.pendingProps);case 24:tr(i,vn,t.memoizedState.cache)}return Ta(t,i,s)}function q0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)xn=!0;else{if(!Hd(t,s)&&(i.flags&128)===0)return xn=!1,Ab(t,i,s);xn=(t.flags&131072)!==0}else xn=!1,Mt&&(i.flags&1048576)!==0&&Eg(i,qo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Wr(i.elementType),i.type=t,typeof t=="function")Wf(t)?(l=Zr(t,l),i.tag=1,i=G0(null,i,t,l,s)):(i.tag=0,i=Ld(null,i,t,l,s));else{if(t!=null){var u=t.$$typeof;if(u===U){i.tag=11,i=O0(null,i,t,l,s);break e}else if(u===O){i.tag=14,i=P0(null,i,t,l,s);break e}}throw i=q(t)||t,Error(r(306,i,""))}}return i;case 0:return Ld(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=Zr(l,i.pendingProps),G0(t,i,l,u,s);case 3:e:{if(Re(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var h=i.memoizedState;u=h.element,sd(t,i),el(i,l,null,s);var S=i.memoizedState;if(l=S.cache,tr(i,vn,l),l!==h.cache&&ed(i,[vn],s,!0),Jo(),l=S.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=V0(t,i,l,s);break e}else if(l!==u){u=bi(Error(r(424)),i),jo(u),i=V0(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Jt=Ci(t.firstChild),Fn=i,Mt=!0,Ja=null,Ti=!0,s=Bg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Gr(),l===u){i=Ta(t,i,s);break e}In(t,i,l,s)}i=i.child}return i;case 26:return Gc(t,i),t===null?(s=i_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Mt||(s=i.type,t=i.pendingProps,l=au(re.current).createElement(s),l[gn]=i,l[Dn]=t,zn(l,s,t),w(l),i.stateNode=l):i.memoizedState=i_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ve(i),t===null&&Mt&&(l=i.stateNode=e_(i.type,i.pendingProps,re.current),Fn=i,Ti=!0,u=Jt,pr(i.type)?(xh=u,Jt=Ci(l.firstChild)):Jt=u),In(t,i,i.pendingProps.children,s),Gc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Mt&&((u=l=Jt)&&(l=nM(l,i.type,i.pendingProps,Ti),l!==null?(i.stateNode=l,Fn=i,Jt=Ci(l.firstChild),Ti=!1,u=!0):u=!1),u||er(i)),Ve(i),u=i.type,h=i.pendingProps,S=t!==null?t.memoizedProps:null,l=h.children,ph(u,h)?l=null:S!==null&&ph(u,S)&&(i.flags|=32),i.memoizedState!==null&&(u=hd(t,i,vb,null,null,s),yl._currentValue=u),Gc(t,i),In(t,i,l,s),i.child;case 6:return t===null&&Mt&&((t=s=Jt)&&(s=iM(s,i.pendingProps,Ti),s!==null?(i.stateNode=s,Fn=i,Jt=null,t=!0):t=!1),t||er(i)),null;case 13:return k0(t,i,s);case 4:return Re(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=jr(i,null,l,s):In(t,i,l,s),i.child;case 11:return O0(t,i,i.type,i.pendingProps,s);case 7:return In(t,i,i.pendingProps,s),i.child;case 8:return In(t,i,i.pendingProps.children,s),i.child;case 12:return In(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,tr(i,i.type,l.value),In(t,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,kr(i),u=Bn(u),l=l(u),i.flags|=1,In(t,i,l,s),i.child;case 14:return P0(t,i,i.type,i.pendingProps,s);case 15:return F0(t,i,i.type,i.pendingProps,s);case 19:return W0(t,i,s);case 31:return Tb(t,i,s);case 22:return B0(t,i,s,i.pendingProps);case 24:return kr(i),l=Bn(vn),t===null?(u=id(),u===null&&(u=$t,h=td(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=s),u=h),i.memoizedState={parent:l,cache:u},rd(i),tr(i,vn,u)):((t.lanes&s)!==0&&(sd(t,i),el(i,null,null,s),Jo()),u=t.memoizedState,h=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),tr(i,vn,l)):(l=h.cache,tr(i,vn,l),l!==u.cache&&ed(i,[vn],s,!0))),In(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Aa(t){t.flags|=4}function Gd(t,i,s,l,u){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(xv())t.flags|=8192;else throw qr=Ac,ad}else t.flags&=-16777217}function j0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!l_(i))if(xv())t.flags|=8192;else throw qr=Ac,ad}function kc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?zt():536870912,t.lanes|=i,Xs|=i)}function sl(t,i){if(!Mt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function en(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function Cb(t,i,s){var l=i.pendingProps;switch(Zf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(i),null;case 1:return en(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ba(vn),Xe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Us(i)?Aa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,$f())),en(i),null;case 26:var u=i.type,h=i.memoizedState;return t===null?(Aa(i),h!==null?(en(i),j0(i,h)):(en(i),Gd(i,u,null,l,s))):h?h!==t.memoizedState?(Aa(i),en(i),j0(i,h)):(en(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Aa(i),en(i),Gd(i,u,t,l,s)),null;case 27:if(mt(i),s=re.current,u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Aa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return en(i),null}t=Ce.current,Us(i)?Ag(i):(t=e_(u,l,s),i.stateNode=t,Aa(i))}return en(i),null;case 5:if(mt(i),u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Aa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return en(i),null}if(h=Ce.current,Us(i))Ag(i);else{var S=au(re.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?S.createElement(u,{is:l.is}):S.createElement(u)}}h[gn]=i,h[Dn]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=h;e:switch(zn(h,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Aa(i)}}return en(i),Gd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Aa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=re.current,Us(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,u=Fn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[gn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||kv(t.nodeValue,s)),t||er(i,!0)}else t=au(t).createTextNode(l),t[gn]=i,i.stateNode=t}return en(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Us(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[gn]=i}else Gr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),t=!1}else s=$f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ci(i),i):(ci(i),null);if((i.flags&128)!==0)throw Error(r(558))}return en(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Us(i),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[gn]=i}else Gr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),u=!1}else u=$f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ci(i),i):(ci(i),null)}return ci(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==u&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),kc(i,i.updateQueue),en(i),null);case 4:return Xe(),t===null&&ch(i.stateNode.containerInfo),en(i),null;case 10:return ba(i.type),en(i),null;case 19:if(oe(dn),l=i.memoizedState,l===null)return en(i),null;if(u=(i.flags&128)!==0,h=l.rendering,h===null)if(u)sl(l,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=Dc(t),h!==null){for(i.flags|=128,sl(l,!1),t=h.updateQueue,i.updateQueue=t,kc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Sg(s,t),s=s.sibling;return _e(dn,dn.current&1|2),Mt&&ya(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&_()>Yc&&(i.flags|=128,u=!0,sl(l,!1),i.lanes=4194304)}else{if(!u)if(t=Dc(h),t!==null){if(i.flags|=128,u=!0,t=t.updateQueue,i.updateQueue=t,kc(i,t),sl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Mt)return en(i),null}else 2*_()-l.renderingStartTime>Yc&&s!==536870912&&(i.flags|=128,u=!0,sl(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=_(),t.sibling=null,s=dn.current,_e(dn,u?s&1|2:s&1),Mt&&ya(i,l.treeForkCount),t):(en(i),null);case 22:case 23:return ci(i),ud(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(en(i),i.subtreeFlags&6&&(i.flags|=8192)):en(i),s=i.updateQueue,s!==null&&kc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&oe(Xr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ba(vn),en(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Rb(t,i){switch(Zf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ba(vn),Xe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return mt(i),null;case 31:if(i.memoizedState!==null){if(ci(i),i.alternate===null)throw Error(r(340));Gr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ci(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Gr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return oe(dn),null;case 4:return Xe(),null;case 10:return ba(i.type),null;case 22:case 23:return ci(i),ud(),t!==null&&oe(Xr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ba(vn),null;case 25:return null;default:return null}}function Y0(t,i){switch(Zf(i),i.tag){case 3:ba(vn),Xe();break;case 26:case 27:case 5:mt(i);break;case 4:Xe();break;case 31:i.memoizedState!==null&&ci(i);break;case 13:ci(i);break;case 19:oe(dn);break;case 10:ba(i.type);break;case 22:case 23:ci(i),ud(),t!==null&&oe(Xr);break;case 24:ba(vn)}}function ol(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){l=void 0;var h=s.create,S=s.inst;l=h(),S.destroy=l}s=s.next}while(s!==u)}}catch(R){Vt(i,i.return,R)}}function or(t,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var h=u.next;l=h;do{if((l.tag&t)===t){var S=l.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=i;var G=s,ae=R;try{ae()}catch(me){Vt(u,G,me)}}}l=l.next}while(l!==h)}}catch(me){Vt(i,i.return,me)}}function Z0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{zg(i,s)}catch(l){Vt(t,t.return,l)}}}function K0(t,i,s){s.props=Zr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Vt(t,i,l)}}function ll(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(u){Vt(t,i,u)}}function ta(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){Vt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Vt(t,i,u)}else s.current=null}function $0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){Vt(t,t.return,u)}}function Vd(t,i,s){try{var l=t.stateNode;Kb(l,t.type,s,i),l[Dn]=i}catch(u){Vt(t,t.return,u)}}function Q0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&pr(t.type)||t.tag===4}function kd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&pr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=va));else if(l!==4&&(l===27&&pr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Xd(t,i,s),t=t.sibling;t!==null;)Xd(t,i,s),t=t.sibling}function Xc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&pr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Xc(t,i,s),t=t.sibling;t!==null;)Xc(t,i,s),t=t.sibling}function J0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);zn(i,l,s),i[gn]=t,i[Dn]=s}catch(h){Vt(t,t.return,h)}}var Ca=!1,yn=!1,Wd=!1,ev=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function wb(t,i){if(t=t.containerInfo,dh=fu,t=dg(t),If(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var S=0,R=-1,G=-1,ae=0,me=0,xe=t,ce=null;t:for(;;){for(var de;xe!==s||u!==0&&xe.nodeType!==3||(R=S+u),xe!==h||l!==0&&xe.nodeType!==3||(G=S+l),xe.nodeType===3&&(S+=xe.nodeValue.length),(de=xe.firstChild)!==null;)ce=xe,xe=de;for(;;){if(xe===t)break t;if(ce===s&&++ae===u&&(R=S),ce===h&&++me===l&&(G=S),(de=xe.nextSibling)!==null)break;xe=ce,ce=xe.parentNode}xe=de}s=R===-1||G===-1?null:{start:R,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(hh={focusedElem:t,selectionRange:s},fu=!1,Rn=i;Rn!==null;)if(i=Rn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Rn=t;else for(;Rn!==null;){switch(i=Rn,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,u=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var qe=Zr(s.type,u);t=l.getSnapshotBeforeUpdate(qe,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(it){Vt(s,s.return,it)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)gh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":gh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Rn=t;break}Rn=i.return}}function tv(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:wa(t,s),l&4&&ol(5,s);break;case 1:if(wa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){Vt(s,s.return,S)}else{var u=Zr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Vt(s,s.return,S)}}l&64&&Z0(s),l&512&&ll(s,s.return);break;case 3:if(wa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{zg(t,i)}catch(S){Vt(s,s.return,S)}}break;case 27:i===null&&l&4&&J0(s);case 26:case 5:wa(t,s),i===null&&l&4&&$0(s),l&512&&ll(s,s.return);break;case 12:wa(t,s);break;case 31:wa(t,s),l&4&&av(t,s);break;case 13:wa(t,s),l&4&&rv(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Ib.bind(null,s),aM(t,s))));break;case 22:if(l=s.memoizedState!==null||Ca,!l){i=i!==null&&i.memoizedState!==null||yn,u=Ca;var h=yn;Ca=l,(yn=i)&&!h?Da(t,s,(s.subtreeFlags&8772)!==0):wa(t,s),Ca=u,yn=h}break;case 30:break;default:wa(t,s)}}function nv(t){var i=t.alternate;i!==null&&(t.alternate=null,nv(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Fo(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,$n=!1;function Ra(t,i,s){for(s=s.child;s!==null;)iv(t,i,s),s=s.sibling}function iv(t,i,s){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Ee,s)}catch{}switch(s.tag){case 26:yn||ta(s,i),Ra(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:yn||ta(s,i);var l=rn,u=$n;pr(s.type)&&(rn=s.stateNode,$n=!1),Ra(t,i,s),vl(s.stateNode),rn=l,$n=u;break;case 5:yn||ta(s,i);case 6:if(l=rn,u=$n,rn=null,Ra(t,i,s),rn=l,$n=u,rn!==null)if($n)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(s.stateNode)}catch(h){Vt(s,i,h)}else try{rn.removeChild(s.stateNode)}catch(h){Vt(s,i,h)}break;case 18:rn!==null&&($n?(t=rn,Zv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Qs(t)):Zv(rn,s.stateNode));break;case 4:l=rn,u=$n,rn=s.stateNode.containerInfo,$n=!0,Ra(t,i,s),rn=l,$n=u;break;case 0:case 11:case 14:case 15:or(2,s,i),yn||or(4,s,i),Ra(t,i,s);break;case 1:yn||(ta(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&K0(s,i,l)),Ra(t,i,s);break;case 21:Ra(t,i,s);break;case 22:yn=(l=yn)||s.memoizedState!==null,Ra(t,i,s),yn=l;break;default:Ra(t,i,s)}}function av(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Qs(t)}catch(s){Vt(i,i.return,s)}}}function rv(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Qs(t)}catch(s){Vt(i,i.return,s)}}function Db(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new ev),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new ev),i;default:throw Error(r(435,t.tag))}}function Wc(t,i){var s=Db(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var u=zb.bind(null,t,l);l.then(u,u)}})}function Qn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],h=t,S=i,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(pr(R.type)){rn=R.stateNode,$n=!1;break e}break;case 5:rn=R.stateNode,$n=!1;break e;case 3:case 4:rn=R.stateNode.containerInfo,$n=!0;break e}R=R.return}if(rn===null)throw Error(r(160));iv(h,S,u),rn=null,$n=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)sv(i,t),i=i.sibling}var Hi=null;function sv(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(i,t),Jn(t),l&4&&(or(3,t,t.return),ol(3,t),or(5,t,t.return));break;case 1:Qn(i,t),Jn(t),l&512&&(yn||s===null||ta(s,s.return)),l&64&&Ca&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=Hi;if(Qn(i,t),Jn(t),l&512&&(yn||s===null||ta(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Or]||h[gn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(l),u.head.insertBefore(h,u.querySelector("head > title"))),zn(h,l,s),h[gn]=t,w(h),l=h;break e;case"link":var S=s_("link","href",u).get(l+(s.href||""));if(S){for(var R=0;R<S.length;R++)if(h=S[R],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(R,1);break t}}h=u.createElement(l),zn(h,l,s),u.head.appendChild(h);break;case"meta":if(S=s_("meta","content",u).get(l+(s.content||""))){for(R=0;R<S.length;R++)if(h=S[R],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(R,1);break t}}h=u.createElement(l),zn(h,l,s),u.head.appendChild(h);break;default:throw Error(r(468,l))}h[gn]=t,w(h),l=h}t.stateNode=l}else o_(u,t.type,t.stateNode);else t.stateNode=r_(u,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?o_(u,t.type,t.stateNode):r_(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Vd(t,t.memoizedProps,s.memoizedProps)}break;case 27:Qn(i,t),Jn(t),l&512&&(yn||s===null||ta(s,s.return)),s!==null&&l&4&&Vd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Qn(i,t),Jn(t),l&512&&(yn||s===null||ta(s,s.return)),t.flags&32){u=t.stateNode;try{En(u,"")}catch(qe){Vt(t,t.return,qe)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,Vd(t,u,s!==null?s.memoizedProps:u)),l&1024&&(Wd=!0);break;case 6:if(Qn(i,t),Jn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(qe){Vt(t,t.return,qe)}}break;case 3:if(ou=null,u=Hi,Hi=ru(i.containerInfo),Qn(i,t),Hi=u,Jn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Qs(i.containerInfo)}catch(qe){Vt(t,t.return,qe)}Wd&&(Wd=!1,ov(t));break;case 4:l=Hi,Hi=ru(t.stateNode.containerInfo),Qn(i,t),Jn(t),Hi=l;break;case 12:Qn(i,t),Jn(t);break;case 31:Qn(i,t),Jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wc(t,l)));break;case 13:Qn(i,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(jc=_()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wc(t,l)));break;case 22:u=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,ae=Ca,me=yn;if(Ca=ae||u,yn=me||G,Qn(i,t),yn=me,Ca=ae,Jn(t),l&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||G||Ca||yn||Kr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(h=G.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=G.stateNode;var xe=G.memoizedProps.style,ce=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(qe){Vt(G,G.return,qe)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(qe){Vt(G,G.return,qe)}}}else if(i.tag===18){if(s===null){G=i;try{var de=G.stateNode;u?Kv(de,!0):Kv(G.stateNode,!1)}catch(qe){Vt(G,G.return,qe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Wc(t,s))));break;case 19:Qn(i,t),Jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wc(t,l)));break;case 30:break;case 21:break;default:Qn(i,t),Jn(t)}}function Jn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Q0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,h=kd(t);Xc(t,h,u);break;case 5:var S=s.stateNode;s.flags&32&&(En(S,""),s.flags&=-33);var R=kd(t);Xc(t,R,S);break;case 3:case 4:var G=s.stateNode.containerInfo,ae=kd(t);Xd(t,ae,G);break;default:throw Error(r(161))}}catch(me){Vt(t,t.return,me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function ov(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;ov(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function wa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)tv(t,i.alternate,i),i=i.sibling}function Kr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:or(4,i,i.return),Kr(i);break;case 1:ta(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&K0(i,i.return,s),Kr(i);break;case 27:vl(i.stateNode);case 26:case 5:ta(i,i.return),Kr(i);break;case 22:i.memoizedState===null&&Kr(i);break;case 30:Kr(i);break;default:Kr(i)}t=t.sibling}}function Da(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=t,h=i,S=h.flags;switch(h.tag){case 0:case 11:case 15:Da(u,h,s),ol(4,h);break;case 1:if(Da(u,h,s),l=h,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ae){Vt(l,l.return,ae)}if(l=h,u=l.updateQueue,u!==null){var R=l.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Ig(G[u],R)}catch(ae){Vt(l,l.return,ae)}}s&&S&64&&Z0(h),ll(h,h.return);break;case 27:J0(h);case 26:case 5:Da(u,h,s),s&&l===null&&S&4&&$0(h),ll(h,h.return);break;case 12:Da(u,h,s);break;case 31:Da(u,h,s),s&&S&4&&av(u,h);break;case 13:Da(u,h,s),s&&S&4&&rv(u,h);break;case 22:h.memoizedState===null&&Da(u,h,s),ll(h,h.return);break;case 30:break;default:Da(u,h,s)}i=i.sibling}}function qd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Yo(s))}function jd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Yo(t))}function Gi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)lv(t,i,s,l),i=i.sibling}function lv(t,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Gi(t,i,s,l),u&2048&&ol(9,i);break;case 1:Gi(t,i,s,l);break;case 3:Gi(t,i,s,l),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Yo(t)));break;case 12:if(u&2048){Gi(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,S=h.id,R=h.onPostCommit;typeof R=="function"&&R(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Vt(i,i.return,G)}}else Gi(t,i,s,l);break;case 31:Gi(t,i,s,l);break;case 13:Gi(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,S=i.alternate,i.memoizedState!==null?h._visibility&2?Gi(t,i,s,l):cl(t,i):h._visibility&2?Gi(t,i,s,l):(h._visibility|=2,Gs(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),u&2048&&qd(S,i);break;case 24:Gi(t,i,s,l),u&2048&&jd(i.alternate,i);break;default:Gi(t,i,s,l)}}function Gs(t,i,s,l,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,S=i,R=s,G=l,ae=S.flags;switch(S.tag){case 0:case 11:case 15:Gs(h,S,R,G,u),ol(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?Gs(h,S,R,G,u):cl(h,S):(me._visibility|=2,Gs(h,S,R,G,u)),u&&ae&2048&&qd(S.alternate,S);break;case 24:Gs(h,S,R,G,u),u&&ae&2048&&jd(S.alternate,S);break;default:Gs(h,S,R,G,u)}i=i.sibling}}function cl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,u=l.flags;switch(l.tag){case 22:cl(s,l),u&2048&&qd(l.alternate,l);break;case 24:cl(s,l),u&2048&&jd(l.alternate,l);break;default:cl(s,l)}i=i.sibling}}var ul=8192;function Vs(t,i,s){if(t.subtreeFlags&ul)for(t=t.child;t!==null;)cv(t,i,s),t=t.sibling}function cv(t,i,s){switch(t.tag){case 26:Vs(t,i,s),t.flags&ul&&t.memoizedState!==null&&gM(s,Hi,t.memoizedState,t.memoizedProps);break;case 5:Vs(t,i,s);break;case 3:case 4:var l=Hi;Hi=ru(t.stateNode.containerInfo),Vs(t,i,s),Hi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ul,ul=16777216,Vs(t,i,s),ul=l):Vs(t,i,s));break;default:Vs(t,i,s)}}function uv(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function fl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Rn=l,dv(l,t)}uv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fv(t),t=t.sibling}function fv(t){switch(t.tag){case 0:case 11:case 15:fl(t),t.flags&2048&&or(9,t,t.return);break;case 3:fl(t);break;case 12:fl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,qc(t)):fl(t);break;default:fl(t)}}function qc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Rn=l,dv(l,t)}uv(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:or(8,i,i.return),qc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,qc(i));break;default:qc(i)}t=t.sibling}}function dv(t,i){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:or(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Yo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Rn=l;else e:for(s=t;Rn!==null;){l=Rn;var u=l.sibling,h=l.return;if(nv(l),l===s){Rn=null;break e}if(u!==null){u.return=h,Rn=u;break e}Rn=h}}}var Ub={getCacheForType:function(t){var i=Bn(vn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Bn(vn).controller.signal}},Nb=typeof WeakMap=="function"?WeakMap:Map,Ot=0,$t=null,_t=null,yt=0,Gt=0,ui=null,lr=!1,ks=!1,Yd=!1,Ua=0,ln=0,cr=0,$r=0,Zd=0,fi=0,Xs=0,dl=null,ei=null,Kd=!1,jc=0,hv=0,Yc=1/0,Zc=null,ur=null,Tn=0,fr=null,Ws=null,Na=0,$d=0,Qd=null,pv=null,hl=0,Jd=null;function di(){return(Ot&2)!==0&&yt!==0?yt&-yt:F.T!==null?rh():Oo()}function mv(){if(fi===0)if((yt&536870912)===0||Mt){var t=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),fi=t}else fi=536870912;return t=li.current,t!==null&&(t.flags|=32),fi}function ti(t,i,s){(t===$t&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(qs(t,0),dr(t,yt,fi,!1)),Vn(t,s),((Ot&2)===0||t!==$t)&&(t===$t&&((Ot&2)===0&&($r|=s),ln===4&&dr(t,yt,fi,!1)),na(t))}function gv(t,i,s){if((Ot&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||De(t,i),u=l?Pb(t,i):th(t,i,!0),h=l;do{if(u===0){ks&&!l&&dr(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!Lb(s)){u=th(t,i,!1),h=!1;continue}if(u===2){if(h=i,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var R=t;u=dl;var G=R.current.memoizedState.isDehydrated;if(G&&(qs(R,S).flags|=256),S=th(R,S,!1),S!==2){if(Yd&&!G){R.errorRecoveryDisabledLanes|=h,$r|=h,u=4;break e}h=ei,ei=u,h!==null&&(ei===null?ei=h:ei.push.apply(ei,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){qs(t,0),dr(t,i,0,!0);break}e:{switch(l=t,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:dr(l,i,fi,!lr);break e;case 2:ei=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=jc+300-_(),10<u)){if(dr(l,i,fi,!lr),ye(l,0,!0)!==0)break e;Na=i,l.timeoutHandle=jv(vv.bind(null,l,s,ei,Zc,Kd,i,fi,$r,Xs,lr,h,"Throttled",-0,0),u);break e}vv(l,s,ei,Zc,Kd,i,fi,$r,Xs,lr,h,null,-0,0)}}break}while(!0);na(t)}function vv(t,i,s,l,u,h,S,R,G,ae,me,xe,ce,de){if(t.timeoutHandle=-1,xe=i.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:va},cv(i,h,xe);var qe=(h&62914560)===h?jc-_():(h&4194048)===h?hv-_():0;if(qe=vM(xe,qe),qe!==null){Na=h,t.cancelPendingCommit=qe(Tv.bind(null,t,i,h,s,l,u,S,R,G,me,xe,null,ce,de)),dr(t,h,S,!ae);return}}Tv(t,i,h,s,l,u,S,R,G)}function Lb(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],h=u.getSnapshot;u=u.value;try{if(!si(h(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(t,i,s,l){i&=~Zd,i&=~$r,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var u=i;0<u;){var h=31-Be(u),S=1<<h;l[h]=-1,u&=~S}s!==0&&oc(t,s,i)}function Kc(){return(Ot&6)===0?(pl(0),!1):!0}function eh(){if(_t!==null){if(Gt===0)var t=_t.return;else t=_t,Sa=Vr=null,gd(t),Fs=null,Ko=0,t=_t;for(;t!==null;)Y0(t.alternate,t),t=t.return;_t=null}}function qs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Jb(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Na=0,eh(),$t=t,_t=s=xa(t.current,null),yt=i,Gt=0,ui=null,lr=!1,ks=De(t,i),Yd=!1,Xs=fi=Zd=$r=cr=ln=0,ei=dl=null,Kd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var u=31-Be(l),h=1<<u;i|=t[u],l&=~h}return Ua=i,vc(),s}function _v(t,i){ut=null,F.H=al,i===Ps||i===Tc?(i=Og(),Gt=3):i===ad?(i=Og(),Gt=4):Gt=i===Nd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ui=i,_t===null&&(ln=1,zc(t,bi(i,t.current)))}function xv(){var t=li.current;return t===null?!0:(yt&4194048)===yt?Ai===null:(yt&62914560)===yt||(yt&536870912)!==0?t===Ai:!1}function yv(){var t=F.H;return F.H=al,t===null?al:t}function Sv(){var t=F.A;return F.A=Ub,t}function $c(){ln=4,lr||(yt&4194048)!==yt&&li.current!==null||(ks=!0),(cr&134217727)===0&&($r&134217727)===0||$t===null||dr($t,yt,fi,!1)}function th(t,i,s){var l=Ot;Ot|=2;var u=yv(),h=Sv();($t!==t||yt!==i)&&(Zc=null,qs(t,i)),i=!1;var S=ln;e:do try{if(Gt!==0&&_t!==null){var R=_t,G=ui;switch(Gt){case 8:eh(),S=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(i=!0);var ae=Gt;if(Gt=0,ui=null,js(t,R,G,ae),s&&ks){S=0;break e}break;default:ae=Gt,Gt=0,ui=null,js(t,R,G,ae)}}Ob(),S=ln;break}catch(me){_v(t,me)}while(!0);return i&&t.shellSuspendCounter++,Sa=Vr=null,Ot=l,F.H=u,F.A=h,_t===null&&($t=null,yt=0,vc()),S}function Ob(){for(;_t!==null;)bv(_t)}function Pb(t,i){var s=Ot;Ot|=2;var l=yv(),u=Sv();$t!==t||yt!==i?(Zc=null,Yc=_()+500,qs(t,i)):ks=De(t,i);e:do try{if(Gt!==0&&_t!==null){i=_t;var h=ui;t:switch(Gt){case 1:Gt=0,ui=null,js(t,i,h,1);break;case 2:case 9:if(Ng(h)){Gt=0,ui=null,Mv(i);break}i=function(){Gt!==2&&Gt!==9||$t!==t||(Gt=7),na(t)},h.then(i,i);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:Ng(h)?(Gt=0,ui=null,Mv(i)):(Gt=0,ui=null,js(t,i,h,7));break;case 5:var S=null;switch(_t.tag){case 26:S=_t.memoizedState;case 5:case 27:var R=_t;if(S?l_(S):R.stateNode.complete){Gt=0,ui=null;var G=R.sibling;if(G!==null)_t=G;else{var ae=R.return;ae!==null?(_t=ae,Qc(ae)):_t=null}break t}}Gt=0,ui=null,js(t,i,h,5);break;case 6:Gt=0,ui=null,js(t,i,h,6);break;case 8:eh(),ln=6;break e;default:throw Error(r(462))}}Fb();break}catch(me){_v(t,me)}while(!0);return Sa=Vr=null,F.H=l,F.A=u,Ot=s,_t!==null?0:($t=null,yt=0,vc(),ln)}function Fb(){for(;_t!==null&&!je();)bv(_t)}function bv(t){var i=q0(t.alternate,t,Ua);t.memoizedProps=t.pendingProps,i===null?Qc(t):_t=i}function Mv(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=H0(s,i,i.pendingProps,i.type,void 0,yt);break;case 11:i=H0(s,i,i.pendingProps,i.type.render,i.ref,yt);break;case 5:gd(i);default:Y0(s,i),i=_t=Sg(i,Ua),i=q0(s,i,Ua)}t.memoizedProps=t.pendingProps,i===null?Qc(t):_t=i}function js(t,i,s,l){Sa=Vr=null,gd(i),Fs=null,Ko=0;var u=i.return;try{if(Eb(t,u,i,s,yt)){ln=1,zc(t,bi(s,t.current)),_t=null;return}}catch(h){if(u!==null)throw _t=u,h;ln=1,zc(t,bi(s,t.current)),_t=null;return}i.flags&32768?(Mt||l===1?t=!0:ks||(yt&536870912)!==0?t=!1:(lr=t=!0,(l===2||l===9||l===3||l===6)&&(l=li.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ev(i,t)):Qc(i)}function Qc(t){var i=t;do{if((i.flags&32768)!==0){Ev(i,lr);return}t=i.return;var s=Cb(i.alternate,i,Ua);if(s!==null){_t=s;return}if(i=i.sibling,i!==null){_t=i;return}_t=i=t}while(i!==null);ln===0&&(ln=5)}function Ev(t,i){do{var s=Rb(t.alternate,t);if(s!==null){s.flags&=32767,_t=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){_t=t;return}_t=t=s}while(t!==null);ln=6,_t=null}function Tv(t,i,s,l,u,h,S,R,G){t.cancelPendingCommit=null;do Jc();while(Tn!==0);if((Ot&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(h=i.lanes|i.childLanes,h|=kf,Fi(t,s,h,S,R,G),t===$t&&(_t=$t=null,yt=0),Ws=i,fr=t,Na=s,$d=h,Qd=u,pv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Hb(se,function(){return Dv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,u=V.p,V.p=2,S=Ot,Ot|=4;try{wb(t,i,s)}finally{Ot=S,V.p=u,F.T=l}}Tn=1,Av(),Cv(),Rv()}}function Av(){if(Tn===1){Tn=0;var t=fr,i=Ws,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var l=V.p;V.p=2;var u=Ot;Ot|=4;try{sv(i,t);var h=hh,S=dg(t.containerInfo),R=h.focusedElem,G=h.selectionRange;if(S!==R&&R&&R.ownerDocument&&fg(R.ownerDocument.documentElement,R)){if(G!==null&&If(R)){var ae=G.start,me=G.end;if(me===void 0&&(me=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(me,R.value.length);else{var xe=R.ownerDocument||document,ce=xe&&xe.defaultView||window;if(ce.getSelection){var de=ce.getSelection(),qe=R.textContent.length,it=Math.min(G.start,qe),Yt=G.end===void 0?it:Math.min(G.end,qe);!de.extend&&it>Yt&&(S=Yt,Yt=it,it=S);var $=ug(R,it),j=ug(R,Yt);if($&&j&&(de.rangeCount!==1||de.anchorNode!==$.node||de.anchorOffset!==$.offset||de.focusNode!==j.node||de.focusOffset!==j.offset)){var ie=xe.createRange();ie.setStart($.node,$.offset),de.removeAllRanges(),it>Yt?(de.addRange(ie),de.extend(j.node,j.offset)):(ie.setEnd(j.node,j.offset),de.addRange(ie))}}}}for(xe=[],de=R;de=de.parentNode;)de.nodeType===1&&xe.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ve=xe[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}fu=!!dh,hh=dh=null}finally{Ot=u,V.p=l,F.T=s}}t.current=i,Tn=2}}function Cv(){if(Tn===2){Tn=0;var t=fr,i=Ws,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var l=V.p;V.p=2;var u=Ot;Ot|=4;try{tv(t,i.alternate,i)}finally{Ot=u,V.p=l,F.T=s}}Tn=3}}function Rv(){if(Tn===4||Tn===3){Tn=0,N();var t=fr,i=Ws,s=Na,l=pv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Tn=5:(Tn=0,Ws=fr=null,wv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ur=null),_s(s),i=i.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Ee,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,u=V.p,V.p=2,F.T=null;try{for(var h=t.onRecoverableError,S=0;S<l.length;S++){var R=l[S];h(R.value,{componentStack:R.stack})}}finally{F.T=i,V.p=u}}(Na&3)!==0&&Jc(),na(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===Jd?hl++:(hl=0,Jd=t):hl=0,pl(0)}}function wv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Yo(i)))}function Jc(){return Av(),Cv(),Rv(),Dv()}function Dv(){if(Tn!==5)return!1;var t=fr,i=$d;$d=0;var s=_s(Na),l=F.T,u=V.p;try{V.p=32>s?32:s,F.T=null,s=Qd,Qd=null;var h=fr,S=Na;if(Tn=0,Ws=fr=null,Na=0,(Ot&6)!==0)throw Error(r(331));var R=Ot;if(Ot|=4,fv(h.current),lv(h,h.current,S,s),Ot=R,pl(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Ee,h)}catch{}return!0}finally{V.p=u,F.T=l,wv(t,i)}}function Uv(t,i,s){i=bi(s,i),i=Ud(t.stateNode,i,2),t=ar(t,i,2),t!==null&&(Vn(t,2),na(t))}function Vt(t,i,s){if(t.tag===3)Uv(t,t,s);else for(;i!==null;){if(i.tag===3){Uv(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ur===null||!ur.has(l))){t=bi(s,t),s=N0(2),l=ar(i,s,2),l!==null&&(L0(s,l,i,t),Vn(l,2),na(l));break}}i=i.return}}function nh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Nb;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(Yd=!0,u.add(s),t=Bb.bind(null,t,i,s),i.then(t,t))}function Bb(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,$t===t&&(yt&s)===s&&(ln===4||ln===3&&(yt&62914560)===yt&&300>_()-jc?(Ot&2)===0&&qs(t,0):Zd|=s,Xs===yt&&(Xs=0)),na(t)}function Nv(t,i){i===0&&(i=zt()),t=zr(t,i),t!==null&&(Vn(t,i),na(t))}function Ib(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Nv(t,s)}function zb(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),Nv(t,s)}function Hb(t,i){return bt(t,i)}var eu=null,Ys=null,ih=!1,tu=!1,ah=!1,hr=0;function na(t){t!==Ys&&t.next===null&&(Ys===null?eu=Ys=t:Ys=Ys.next=t),tu=!0,ih||(ih=!0,Vb())}function pl(t,i){if(!ah&&tu){ah=!0;do for(var s=!1,l=eu;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var h=0;else{var S=l.suspendedLanes,R=l.pingedLanes;h=(1<<31-Be(42|t)+1)-1,h&=u&~(S&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,Fv(l,h))}else h=yt,h=ye(l,l===$t?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||De(l,h)||(s=!0,Fv(l,h));l=l.next}while(s);ah=!1}}function Gb(){Lv()}function Lv(){tu=ih=!1;var t=0;hr!==0&&Qb()&&(t=hr);for(var i=_(),s=null,l=eu;l!==null;){var u=l.next,h=Ov(l,i);h===0?(l.next=null,s===null?eu=u:s.next=u,u===null&&(Ys=s)):(s=l,(t!==0||(h&3)!==0)&&(tu=!0)),l=u}Tn!==0&&Tn!==5||pl(t),hr!==0&&(hr=0)}function Ov(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-Be(h),R=1<<S,G=u[S];G===-1?((R&s)===0||(R&l)!==0)&&(u[S]=at(R,i)):G<=i&&(t.expiredLanes|=R),h&=~R}if(i=$t,s=yt,s=ye(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&At(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||De(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&At(l),_s(s)){case 2:case 8:s=he;break;case 32:s=se;break;case 268435456:s=we;break;default:s=se}return l=Pv.bind(null,t),s=bt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&At(l),t.callbackPriority=2,t.callbackNode=null,2}function Pv(t,i){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Jc()&&t.callbackNode!==s)return null;var l=yt;return l=ye(t,t===$t?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(gv(t,l,i),Ov(t,_()),t.callbackNode!=null&&t.callbackNode===s?Pv.bind(null,t):null)}function Fv(t,i){if(Jc())return null;gv(t,i,!0)}function Vb(){eM(function(){(Ot&6)!==0?bt(J,Gb):Lv()})}function rh(){if(hr===0){var t=Ls;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),hr=t}return hr}function Bv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:cc(""+t)}function Iv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function kb(t,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var h=Bv((u[Dn]||null).action),S=l.submitter;S&&(i=(i=S[Dn]||null)?Bv(i.formAction):S.getAttribute("formAction"),i!==null&&(h=i,S=null));var R=new hc("action","action",null,l,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(hr!==0){var G=S?Iv(u,S):new FormData(u);Td(s,{pending:!0,data:G,method:u.method,action:h},null,G)}}else typeof h=="function"&&(R.preventDefault(),G=S?Iv(u,S):new FormData(u),Td(s,{pending:!0,data:G,method:u.method,action:h},h,G))},currentTarget:u}]})}}for(var sh=0;sh<Vf.length;sh++){var oh=Vf[sh],Xb=oh.toLowerCase(),Wb=oh[0].toUpperCase()+oh.slice(1);zi(Xb,"on"+Wb)}zi(mg,"onAnimationEnd"),zi(gg,"onAnimationIteration"),zi(vg,"onAnimationStart"),zi("dblclick","onDoubleClick"),zi("focusin","onFocus"),zi("focusout","onBlur"),zi(ob,"onTransitionRun"),zi(lb,"onTransitionStart"),zi(cb,"onTransitionCancel"),zi(_g,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function zv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var S=l.length-1;0<=S;S--){var R=l[S],G=R.instance,ae=R.currentTarget;if(R=R.listener,G!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=ae;try{h(u)}catch(me){gc(me)}u.currentTarget=null,h=G}else for(S=0;S<l.length;S++){if(R=l[S],G=R.instance,ae=R.currentTarget,R=R.listener,G!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=ae;try{h(u)}catch(me){gc(me)}u.currentTarget=null,h=G}}}}function xt(t,i){var s=i[xs];s===void 0&&(s=i[xs]=new Set);var l=t+"__bubble";s.has(l)||(Hv(i,t,2,!1),s.add(l))}function lh(t,i,s){var l=0;i&&(l|=4),Hv(s,t,l,i)}var nu="_reactListening"+Math.random().toString(36).slice(2);function ch(t){if(!t[nu]){t[nu]=!0,K.forEach(function(s){s!=="selectionchange"&&(qb.has(s)||lh(s,!1,t),lh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[nu]||(i[nu]=!0,lh("selectionchange",!1,i))}}function Hv(t,i,s,l){switch(m_(i)){case 2:var u=yM;break;case 8:u=SM;break;default:u=Eh}s=u.bind(null,i,s,t),u=void 0,!wf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function uh(t,i,s,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var R=l.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=l.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=Ya(R),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){l=h=S;continue e}R=R.parentNode}}l=l.return}Wm(function(){var ae=h,me=Cf(s),xe=[];e:{var ce=xg.get(t);if(ce!==void 0){var de=hc,qe=t;switch(t){case"keypress":if(fc(s)===0)break e;case"keydown":case"keyup":de=zS;break;case"focusin":qe="focus",de=Lf;break;case"focusout":qe="blur",de=Lf;break;case"beforeblur":case"afterblur":de=Lf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=CS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=VS;break;case mg:case gg:case vg:de=DS;break;case _g:de=XS;break;case"scroll":case"scrollend":de=TS;break;case"wheel":de=qS;break;case"copy":case"cut":case"paste":de=NS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Km;break;case"toggle":case"beforetoggle":de=YS}var it=(i&4)!==0,Yt=!it&&(t==="scroll"||t==="scrollend"),$=it?ce!==null?ce+"Capture":null:ce;it=[];for(var j=ae,ie;j!==null;){var ve=j;if(ie=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ie===null||$===null||(ve=Bo(j,$),ve!=null&&it.push(gl(j,ve,ie))),Yt)break;j=j.return}0<it.length&&(ce=new de(ce,qe,null,s,me),xe.push({event:ce,listeners:it}))}}if((i&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",ce&&s!==Af&&(qe=s.relatedTarget||s.fromElement)&&(Ya(qe)||qe[Bi]))break e;if((de||ce)&&(ce=me.window===me?me:(ce=me.ownerDocument)?ce.defaultView||ce.parentWindow:window,de?(qe=s.relatedTarget||s.toElement,de=ae,qe=qe?Ya(qe):null,qe!==null&&(Yt=c(qe),it=qe.tag,qe!==Yt||it!==5&&it!==27&&it!==6)&&(qe=null)):(de=null,qe=ae),de!==qe)){if(it=Ym,ve="onMouseLeave",$="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(it=Km,ve="onPointerLeave",$="onPointerEnter",j="pointer"),Yt=de==null?ce:Pr(de),ie=qe==null?ce:Pr(qe),ce=new it(ve,j+"leave",de,s,me),ce.target=Yt,ce.relatedTarget=ie,ve=null,Ya(me)===ae&&(it=new it($,j+"enter",qe,s,me),it.target=ie,it.relatedTarget=Yt,ve=it),Yt=ve,de&&qe)t:{for(it=jb,$=de,j=qe,ie=0,ve=$;ve;ve=it(ve))ie++;ve=0;for(var Qe=j;Qe;Qe=it(Qe))ve++;for(;0<ie-ve;)$=it($),ie--;for(;0<ve-ie;)j=it(j),ve--;for(;ie--;){if($===j||j!==null&&$===j.alternate){it=$;break t}$=it($),j=it(j)}it=null}else it=null;de!==null&&Gv(xe,ce,de,it,!1),qe!==null&&Yt!==null&&Gv(xe,Yt,qe,it,!0)}}e:{if(ce=ae?Pr(ae):window,de=ce.nodeName&&ce.nodeName.toLowerCase(),de==="select"||de==="input"&&ce.type==="file")var wt=ag;else if(ng(ce))if(rg)wt=ab;else{wt=nb;var Ke=tb}else de=ce.nodeName,!de||de.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?ae&&Ii(ae.elementType)&&(wt=ag):wt=ib;if(wt&&(wt=wt(t,ae))){ig(xe,wt,s,me);break e}Ke&&Ke(t,ce,ae),t==="focusout"&&ae&&ce.type==="number"&&ae.memoizedProps.value!=null&&Nn(ce,"number",ce.value)}switch(Ke=ae?Pr(ae):window,t){case"focusin":(ng(Ke)||Ke.contentEditable==="true")&&(Ts=Ke,zf=ae,Wo=null);break;case"focusout":Wo=zf=Ts=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,hg(xe,s,me);break;case"selectionchange":if(sb)break;case"keydown":case"keyup":hg(xe,s,me)}var dt;if(Pf)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Es?eg(t,s)&&(St="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(St="onCompositionStart");St&&($m&&s.locale!=="ko"&&(Es||St!=="onCompositionStart"?St==="onCompositionEnd"&&Es&&(dt=qm()):($a=me,Df="value"in $a?$a.value:$a.textContent,Es=!0)),Ke=iu(ae,St),0<Ke.length&&(St=new Zm(St,t,null,s,me),xe.push({event:St,listeners:Ke}),dt?St.data=dt:(dt=tg(s),dt!==null&&(St.data=dt)))),(dt=KS?$S(t,s):QS(t,s))&&(St=iu(ae,"onBeforeInput"),0<St.length&&(Ke=new Zm("onBeforeInput","beforeinput",null,s,me),xe.push({event:Ke,listeners:St}),Ke.data=dt)),kb(xe,t,ae,s,me)}zv(xe,i)})}function gl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function iu(t,i){for(var s=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Bo(t,s),u!=null&&l.unshift(gl(t,u,h)),u=Bo(t,i),u!=null&&l.push(gl(t,u,h))),t.tag===3)return l;t=t.return}return[]}function jb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Gv(t,i,s,l,u){for(var h=i._reactName,S=[];s!==null&&s!==l;){var R=s,G=R.alternate,ae=R.stateNode;if(R=R.tag,G!==null&&G===l)break;R!==5&&R!==26&&R!==27||ae===null||(G=ae,u?(ae=Bo(s,h),ae!=null&&S.unshift(gl(s,ae,G))):u||(ae=Bo(s,h),ae!=null&&S.push(gl(s,ae,G)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var Yb=/\r\n?/g,Zb=/\u0000|\uFFFD/g;function Vv(t){return(typeof t=="string"?t:""+t).replace(Yb,`
`).replace(Zb,"")}function kv(t,i){return i=Vv(i),Vv(t)===i}function jt(t,i,s,l,u,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||En(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&En(t,""+l);break;case"className":tt(t,"class",l);break;case"tabIndex":tt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":tt(t,s,l);break;case"style":Ss(t,l,h);break;case"data":if(i!=="object"){tt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=cc(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&jt(t,i,"name",u.name,u,null),jt(t,i,"formEncType",u.formEncType,u,null),jt(t,i,"formMethod",u.formMethod,u,null),jt(t,i,"formTarget",u.formTarget,u,null)):(jt(t,i,"encType",u.encType,u,null),jt(t,i,"method",u.method,u,null),jt(t,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=cc(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=va);break;case"onScroll":l!=null&&xt("scroll",t);break;case"onScrollEnd":l!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=cc(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Ye(t,"popover",l);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ye(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=MS.get(s)||s,Ye(t,s,l))}}function fh(t,i,s,l,u,h){switch(s){case"style":Ss(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?En(t,l):(typeof l=="number"||typeof l=="bigint")&&En(t,""+l);break;case"onScroll":l!=null&&xt("scroll",t);break;case"onScrollEnd":l!=null&&xt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=va);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fe.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),h=t[Dn]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,u),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,u);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Ye(t,s,l)}}}function zn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var l=!1,u=!1,h;for(h in s)if(s.hasOwnProperty(h)){var S=s[h];if(S!=null)switch(h){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:jt(t,i,h,S,s,null)}}u&&jt(t,i,"srcSet",s.srcSet,s,null),l&&jt(t,i,"src",s.src,s,null);return;case"input":xt("invalid",t);var R=h=S=u=null,G=null,ae=null;for(l in s)if(s.hasOwnProperty(l)){var me=s[l];if(me!=null)switch(l){case"name":u=me;break;case"type":S=me;break;case"checked":G=me;break;case"defaultChecked":ae=me;break;case"value":h=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,i));break;default:jt(t,i,l,me,s,null)}}ga(t,h,R,G,ae,S,u,!1);return;case"select":xt("invalid",t),l=S=h=null;for(u in s)if(s.hasOwnProperty(u)&&(R=s[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":S=R;break;case"multiple":l=R;default:jt(t,i,u,R,s,null)}i=h,s=S,t.multiple=!!l,i!=null?yi(t,!!l,i,!1):s!=null&&yi(t,!!l,s,!0);return;case"textarea":xt("invalid",t),h=u=l=null;for(S in s)if(s.hasOwnProperty(S)&&(R=s[S],R!=null))switch(S){case"value":l=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:jt(t,i,S,R,s,null)}Ln(t,l,u,h);return;case"option":for(G in s)s.hasOwnProperty(G)&&(l=s[G],l!=null)&&(G==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":jt(t,i,G,l,s,null));return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(l=0;l<ml.length;l++)xt(ml[l],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in s)if(s.hasOwnProperty(ae)&&(l=s[ae],l!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:jt(t,i,ae,l,s,null)}return;default:if(Ii(i)){for(me in s)s.hasOwnProperty(me)&&(l=s[me],l!==void 0&&fh(t,i,me,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&jt(t,i,R,l,s,null))}function Kb(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,R=null,G=null,ae=null,me=null;for(de in s){var xe=s[de];if(s.hasOwnProperty(de)&&xe!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":G=xe;default:l.hasOwnProperty(de)||jt(t,i,de,null,l,xe)}}for(var ce in l){var de=l[ce];if(xe=s[ce],l.hasOwnProperty(ce)&&(de!=null||xe!=null))switch(ce){case"type":h=de;break;case"name":u=de;break;case"checked":ae=de;break;case"defaultChecked":me=de;break;case"value":S=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,i));break;default:de!==xe&&jt(t,i,ce,de,l,xe)}}Un(t,S,R,G,ae,me,h,u);return;case"select":de=S=R=ce=null;for(h in s)if(G=s[h],s.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":de=G;default:l.hasOwnProperty(h)||jt(t,i,h,null,l,G)}for(u in l)if(h=l[u],G=s[u],l.hasOwnProperty(u)&&(h!=null||G!=null))switch(u){case"value":ce=h;break;case"defaultValue":R=h;break;case"multiple":S=h;default:h!==G&&jt(t,i,u,h,l,G)}i=R,s=S,l=de,ce!=null?yi(t,!!s,ce,!1):!!l!=!!s&&(i!=null?yi(t,!!s,i,!0):yi(t,!!s,s?[]:"",!1));return;case"textarea":de=ce=null;for(R in s)if(u=s[R],s.hasOwnProperty(R)&&u!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:jt(t,i,R,null,l,u)}for(S in l)if(u=l[S],h=s[S],l.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":ce=u;break;case"defaultValue":de=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&jt(t,i,S,u,l,h)}Ht(t,ce,de);return;case"option":for(var qe in s)ce=s[qe],s.hasOwnProperty(qe)&&ce!=null&&!l.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:jt(t,i,qe,null,l,ce));for(G in l)ce=l[G],de=s[G],l.hasOwnProperty(G)&&ce!==de&&(ce!=null||de!=null)&&(G==="selected"?t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol":jt(t,i,G,ce,l,de));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in s)ce=s[it],s.hasOwnProperty(it)&&ce!=null&&!l.hasOwnProperty(it)&&jt(t,i,it,null,l,ce);for(ae in l)if(ce=l[ae],de=s[ae],l.hasOwnProperty(ae)&&ce!==de&&(ce!=null||de!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,i));break;default:jt(t,i,ae,ce,l,de)}return;default:if(Ii(i)){for(var Yt in s)ce=s[Yt],s.hasOwnProperty(Yt)&&ce!==void 0&&!l.hasOwnProperty(Yt)&&fh(t,i,Yt,void 0,l,ce);for(me in l)ce=l[me],de=s[me],!l.hasOwnProperty(me)||ce===de||ce===void 0&&de===void 0||fh(t,i,me,ce,l,de);return}}for(var $ in s)ce=s[$],s.hasOwnProperty($)&&ce!=null&&!l.hasOwnProperty($)&&jt(t,i,$,null,l,ce);for(xe in l)ce=l[xe],de=s[xe],!l.hasOwnProperty(xe)||ce===de||ce==null&&de==null||jt(t,i,xe,ce,l,de)}function Xv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $b(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var u=s[l],h=u.transferSize,S=u.initiatorType,R=u.duration;if(h&&R&&Xv(S)){for(S=0,R=u.responseEnd,l+=1;l<s.length;l++){var G=s[l],ae=G.startTime;if(ae>R)break;var me=G.transferSize,xe=G.initiatorType;me&&Xv(xe)&&(G=G.responseEnd,S+=me*(G<R?1:(R-ae)/(G-ae)))}if(--l,i+=8*(h+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var dh=null,hh=null;function au(t){return t.nodeType===9?t:t.ownerDocument}function Wv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function ph(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mh=null;function Qb(){var t=window.event;return t&&t.type==="popstate"?t===mh?!1:(mh=t,!0):(mh=null,!1)}var jv=typeof setTimeout=="function"?setTimeout:void 0,Jb=typeof clearTimeout=="function"?clearTimeout:void 0,Yv=typeof Promise=="function"?Promise:void 0,eM=typeof queueMicrotask=="function"?queueMicrotask:typeof Yv<"u"?function(t){return Yv.resolve(null).then(t).catch(tM)}:jv;function tM(t){setTimeout(function(){throw t})}function pr(t){return t==="head"}function Zv(t,i){var s=i,l=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(u),Qs(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")vl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,vl(s);for(var h=s.firstChild;h;){var S=h.nextSibling,R=h.nodeName;h[Or]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=S}}else s==="body"&&vl(t.ownerDocument.body);s=u}while(s);Qs(i)}function Kv(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function gh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":gh(s),Fo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function nM(t,i,s,l){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Or])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Ci(t.nextSibling),t===null)break}return null}function iM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ci(t.nextSibling),t===null))return null;return t}function $v(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ci(t.nextSibling),t===null))return null;return t}function vh(t){return t.data==="$?"||t.data==="$~"}function _h(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function aM(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ci(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var xh=null;function Qv(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ci(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function Jv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function e_(t,i,s){switch(i=au(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function vl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fo(t)}var Ri=new Map,t_=new Set;function ru(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var La=V.d;V.d={f:rM,r:sM,D:oM,C:lM,L:cM,m:uM,X:dM,S:fM,M:hM};function rM(){var t=La.f(),i=Kc();return t||i}function sM(t){var i=Za(t);i!==null&&i.tag===5&&i.type==="form"?_0(i):La.r(t)}var Zs=typeof document>"u"?null:document;function n_(t,i,s){var l=Zs;if(l&&typeof i=="string"&&i){var u=ot(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),t_.has(u)||(t_.add(u),t={rel:t,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),zn(i,"link",t),w(i),l.head.appendChild(i)))}}function oM(t){La.D(t),n_("dns-prefetch",t,null)}function lM(t,i){La.C(t,i),n_("preconnect",t,i)}function cM(t,i,s){La.L(t,i,s);var l=Zs;if(l&&t&&i){var u='link[rel="preload"][as="'+ot(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+ot(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+ot(s.imageSizes)+'"]')):u+='[href="'+ot(t)+'"]';var h=u;switch(i){case"style":h=Ks(t);break;case"script":h=$s(t)}Ri.has(h)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Ri.set(h,t),l.querySelector(u)!==null||i==="style"&&l.querySelector(_l(h))||i==="script"&&l.querySelector(xl(h))||(i=l.createElement("link"),zn(i,"link",t),w(i),l.head.appendChild(i)))}}function uM(t,i){La.m(t,i);var s=Zs;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+ot(l)+'"][href="'+ot(t)+'"]',h=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=$s(t)}if(!Ri.has(h)&&(t=g({rel:"modulepreload",href:t},i),Ri.set(h,t),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(xl(h)))return}l=s.createElement("link"),zn(l,"link",t),w(l),s.head.appendChild(l)}}}function fM(t,i,s){La.S(t,i,s);var l=Zs;if(l&&t){var u=Ka(l).hoistableStyles,h=Ks(t);i=i||"default";var S=u.get(h);if(!S){var R={loading:0,preload:null};if(S=l.querySelector(_l(h)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Ri.get(h))&&yh(t,s);var G=S=l.createElement("link");w(G),zn(G,"link",t),G._p=new Promise(function(ae,me){G.onload=ae,G.onerror=me}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,su(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(h,S)}}}function dM(t,i){La.X(t,i);var s=Zs;if(s&&t){var l=Ka(s).hoistableScripts,u=$s(t),h=l.get(u);h||(h=s.querySelector(xl(u)),h||(t=g({src:t,async:!0},i),(i=Ri.get(u))&&Sh(t,i),h=s.createElement("script"),w(h),zn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(u,h))}}function hM(t,i){La.M(t,i);var s=Zs;if(s&&t){var l=Ka(s).hoistableScripts,u=$s(t),h=l.get(u);h||(h=s.querySelector(xl(u)),h||(t=g({src:t,async:!0,type:"module"},i),(i=Ri.get(u))&&Sh(t,i),h=s.createElement("script"),w(h),zn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(u,h))}}function i_(t,i,s,l){var u=(u=re.current)?ru(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Ks(s.href),s=Ka(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ks(s.href);var h=Ka(u).hoistableStyles,S=h.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=u.querySelector(_l(t)))&&!h._p&&(S.instance=h,S.state.loading=5),Ri.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ri.set(t,s),h||pM(u,t,s,S.state))),i&&l===null)throw Error(r(528,""));return S}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=$s(s),s=Ka(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ks(t){return'href="'+ot(t)+'"'}function _l(t){return'link[rel="stylesheet"]['+t+"]"}function a_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function pM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),zn(i,"link",s),w(i),t.head.appendChild(i))}function $s(t){return'[src="'+ot(t)+'"]'}function xl(t){return"script[async]"+t}function r_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+ot(s.href)+'"]');if(l)return i.instance=l,w(l),l;var u=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),w(l),zn(l,"style",u),su(l,s.precedence,t),i.instance=l;case"stylesheet":u=Ks(s.href);var h=t.querySelector(_l(u));if(h)return i.state.loading|=4,i.instance=h,w(h),h;l=a_(s),(u=Ri.get(u))&&yh(l,u),h=(t.ownerDocument||t).createElement("link"),w(h);var S=h;return S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),zn(h,"link",l),i.state.loading|=4,su(h,s.precedence,t),i.instance=h;case"script":return h=$s(s.src),(u=t.querySelector(xl(h)))?(i.instance=u,w(u),u):(l=s,(u=Ri.get(h))&&(l=g({},s),Sh(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),w(u),zn(u,"link",l),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,su(l,s.precedence,t));return i.instance}function su(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,h=u,S=0;S<l.length;S++){var R=l[S];if(R.dataset.precedence===i)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function yh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Sh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var ou=null;function s_(t,i,s){if(ou===null){var l=new Map,u=ou=new Map;u.set(s,l)}else u=ou,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var h=s[u];if(!(h[Or]||h[gn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(i)||"";S=t+S;var R=l.get(S);R?R.push(h):l.set(S,[h])}}return l}function o_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function mM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function l_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function gM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Ks(l.href),h=i.querySelector(_l(u));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=lu.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,w(h);return}h=i.ownerDocument||i,l=a_(l),(u=Ri.get(u))&&yh(l,u),h=h.createElement("link"),w(h);var S=h;S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),zn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=lu.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var bh=0;function vM(t,i){return t.stylesheets&&t.count===0&&uu(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&uu(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&bh===0&&(bh=62500*$b());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&uu(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>bh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function lu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cu=null;function uu(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cu=new Map,i.forEach(_M,t),cu=null,lu.call(t))}function _M(t,i){if(!(i.state.loading&4)){var s=cu.get(t);if(s)var l=s.get(null);else{s=new Map,cu.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}u=i.instance,S=u.getAttribute("data-precedence"),h=s.get(S)||l,h===l&&s.set(null,u),s.set(S,u),this.count++,l=lu.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var yl={$$typeof:B,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function xM(t,i,s,l,u,h,S,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function c_(t,i,s,l,u,h,S,R,G,ae,me,xe){return t=new xM(t,i,s,S,G,ae,me,xe,R),i=1,h===!0&&(i|=24),h=oi(3,null,null,i),t.current=h,h.stateNode=t,i=td(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},rd(h),t}function u_(t){return t?(t=Rs,t):Rs}function f_(t,i,s,l,u,h){u=u_(u),l.context===null?l.context=u:l.pendingContext=u,l=ir(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=ar(t,l,i),s!==null&&(ti(s,t,i),Qo(s,t,i))}function d_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Mh(t,i){d_(t,i),(t=t.alternate)&&d_(t,i)}function h_(t){if(t.tag===13||t.tag===31){var i=zr(t,67108864);i!==null&&ti(i,t,67108864),Mh(t,67108864)}}function p_(t){if(t.tag===13||t.tag===31){var i=di();i=Lo(i);var s=zr(t,i);s!==null&&ti(s,t,i),Mh(t,i)}}var fu=!0;function yM(t,i,s,l){var u=F.T;F.T=null;var h=V.p;try{V.p=2,Eh(t,i,s,l)}finally{V.p=h,F.T=u}}function SM(t,i,s,l){var u=F.T;F.T=null;var h=V.p;try{V.p=8,Eh(t,i,s,l)}finally{V.p=h,F.T=u}}function Eh(t,i,s,l){if(fu){var u=Th(l);if(u===null)uh(t,i,l,du,s),g_(t,l);else if(MM(u,t,i,s,l))l.stopPropagation();else if(g_(t,l),i&4&&-1<bM.indexOf(t)){for(;u!==null;){var h=Za(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Me(h.pendingLanes);if(S!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var G=1<<31-Be(S);R.entanglements[1]|=G,S&=~G}na(h),(Ot&6)===0&&(Yc=_()+500,pl(0))}}break;case 31:case 13:R=zr(h,2),R!==null&&ti(R,h,2),Kc(),Mh(h,2)}if(h=Th(l),h===null&&uh(t,i,l,du,s),h===u)break;u=h}u!==null&&l.stopPropagation()}else uh(t,i,l,null,s)}}function Th(t){return t=Cf(t),Ah(t)}var du=null;function Ah(t){if(du=null,t=Ya(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return du=t,null}function m_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(H()){case J:return 2;case he:return 8;case se:case Fe:return 32;case we:return 268435456;default:return 32}default:return 32}}var Ch=!1,mr=null,gr=null,vr=null,Sl=new Map,bl=new Map,_r=[],bM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function g_(t,i){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Sl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(i.pointerId)}}function Ml(t,i,s,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=Za(i),i!==null&&h_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function MM(t,i,s,l,u){switch(i){case"focusin":return mr=Ml(mr,t,i,s,l,u),!0;case"dragenter":return gr=Ml(gr,t,i,s,l,u),!0;case"mouseover":return vr=Ml(vr,t,i,s,l,u),!0;case"pointerover":var h=u.pointerId;return Sl.set(h,Ml(Sl.get(h)||null,t,i,s,l,u)),!0;case"gotpointercapture":return h=u.pointerId,bl.set(h,Ml(bl.get(h)||null,t,i,s,l,u)),!0}return!1}function v_(t){var i=Ya(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,Qi(t.priority,function(){p_(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,Qi(t.priority,function(){p_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Th(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Af=l,s.target.dispatchEvent(l),Af=null}else return i=Za(s),i!==null&&h_(i),t.blockedOn=s,!1;i.shift()}return!0}function __(t,i,s){hu(t)&&s.delete(i)}function EM(){Ch=!1,mr!==null&&hu(mr)&&(mr=null),gr!==null&&hu(gr)&&(gr=null),vr!==null&&hu(vr)&&(vr=null),Sl.forEach(__),bl.forEach(__)}function pu(t,i){t.blockedOn===i&&(t.blockedOn=null,Ch||(Ch=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,EM)))}var mu=null;function x_(t){mu!==t&&(mu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){mu===t&&(mu=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],u=t[i+2];if(typeof l!="function"){if(Ah(l||s)===null)continue;break}var h=Za(s);h!==null&&(t.splice(i,3),i-=3,Td(h,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function Qs(t){function i(G){return pu(G,t)}mr!==null&&pu(mr,t),gr!==null&&pu(gr,t),vr!==null&&pu(vr,t),Sl.forEach(i),bl.forEach(i);for(var s=0;s<_r.length;s++){var l=_r[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<_r.length&&(s=_r[0],s.blockedOn===null);)v_(s),s.blockedOn===null&&_r.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],h=s[l+1],S=u[Dn]||null;if(typeof h=="function")S||x_(s);else if(S){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[Dn]||null)R=S.formAction;else if(Ah(u)!==null)continue}else R=S.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),x_(s)}}}function y_(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function Rh(t){this._internalRoot=t}gu.prototype.render=Rh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=di();f_(s,l,t,i,null,null)},gu.prototype.unmount=Rh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;f_(t.current,2,null,t,null,null),Kc(),i[Bi]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var i=Oo();t={blockedOn:null,target:t,priority:i};for(var s=0;s<_r.length&&i!==0&&i<_r[s].priority;s++);_r.splice(s,0,t),s===0&&v_(t)}};var S_=e.version;if(S_!=="19.2.3")throw Error(r(527,S_,"19.2.3"));V.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(i),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var TM={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{Ee=vu.inject(TM),Te=vu}catch{}}return Tl.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",u=R0,h=w0,S=D0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=c_(t,1,!1,null,null,s,l,null,u,h,S,y_),t[Bi]=i.current,ch(t),new Rh(i)},Tl.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,u="",h=R0,S=w0,R=D0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=c_(t,1,!0,i,s??null,l,u,G,h,S,R,y_),i.context=u_(null),s=i.current,l=di(),l=Lo(l),u=ir(l),u.callback=null,ar(s,u,l),s=l,i.current.lanes=s,Vn(i,s),na(i),t[Bi]=i.current,ch(t),new gu(i)},Tl.version="19.2.3",Tl}var N_;function IM(){if(N_)return Uh.exports;N_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Uh.exports=BM(),Uh.exports}var zM=IM();function bm(){return Z.jsxs(Z.Fragment,{children:[Z.jsxs("div",{children:["  ",Z.jsx("a",{href:"https://www.linkedin.com/in/samarth-khandelwal-bba65228a",target:"_blank",rel:"noopener noreferrer",children:Z.jsx("img",{className:"github",src:"linkedin.svg",alt:""})})]}),Z.jsx("div",{children:Z.jsx("a",{href:"https://leetcode.com/u/re9l7O1TpJ/",target:"_blank",rel:"noopener noreferrer",children:Z.jsx("img",{className:"github",src:"leetcode.svg",alt:""})})}),Z.jsx("div",{children:Z.jsx("a",{href:"https://github.com/samarth96k",target:"_blank",rel:"noopener noreferrer",children:Z.jsx("img",{className:"github",src:"github.svg",alt:""})})}),Z.jsx("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=samarthkhandelwal880@gmail.com&body=Hey%20Samarth",target:"_blank",rel:"noopener noreferrer",children:Z.jsx("img",{className:"github",src:"mail.svg",alt:"Email Samarth"})}),Z.jsx("div",{children:Z.jsx("a",{href:"https://www.instagram.com/samarth9_6/",target:"_blank",rel:"noopener noreferrer",children:Z.jsx("img",{className:"github",src:"instagram.svg",alt:""})})}),Z.jsx("div",{children:Z.jsx("a",{href:"https://wa.me/919773959744?text=Hey%20Samarth",target:"_blank",rel:"noopener noreferrer",children:Z.jsx("img",{className:"github",src:"whatsapp.svg",alt:"WhatsApp Samarth"})})}),Z.jsxs("a",{href:"/Resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"resume-button-top-bar",style:{fontFamily:"Aquire-Bold"},children:["Resume",Z.jsx("img",{className:"resume-icon",src:"Download.png",alt:"Download Resume"})]})]})}function HM(){return Z.jsxs("div",{className:"opening-wrapper",children:[Z.jsxs("div",{className:"opening-top",children:[Z.jsx("div",{className:"mid-topbar",children:Z.jsx("p",{className:"topbar-name cedarville-cursive-regular",children:"Samarth Khandelwal"})}),Z.jsx("div",{className:"right-topbar",children:Z.jsx(bm,{})})]}),Z.jsxs("div",{className:"opening-right fade-in",children:[Z.jsxs("h1",{className:"typing-text",children:[Z.jsx("span",{className:"line line1 Agaleoz",style:{fontFamily:"Aquire"},children:"Hi,"}),Z.jsx("br",{}),Z.jsx("span",{className:"line line2 Satoshi-Medium",style:{fontFamily:"Aquire-Bold"},children:"I'm Samarth Khandelwal."})]}),Z.jsx("h2",{className:"typing-subtext ",style:{fontFamily:"Aquire"},children:"Full Stack Developer | Software Engineer"}),Z.jsx("button",{style:{fontFamily:"Aquire-Light"},className:"view-work-button",onClick:()=>{const a=document.querySelector(".projects-container");a&&a.scrollIntoView({behavior:"smooth"})},children:"View My Work"})]}),Z.jsx("div",{className:"opening-bottom fade-in-delay",onClick:()=>window.scrollTo({top:window.innerHeight,behavior:"smooth"}),children:"⌄"})]})}const GM="About Me",VM="Hello there! I’m Samarth, a third-year B.Tech student at VIT, pursuing Computer Science and Engineering. I enjoy exploring new technologies, building projects, and learning by doing. I love collaborating with new people and working on ideas that challenge me and help me grow. This portfolio is a small showcase of my journey, skills, and the projects I’ve worked on so far. I like to read books of different genres and explore about space! How facinating it is to watch to a universe which is evolving forever and is limitless just like human potentiel! Hope you enjoy exploring my work!";function kM(){const a=Je.useRef(null);return Je.useEffect(()=>{const e=a.current;if(!e)return;const n=new IntersectionObserver(([r])=>{r.isIntersecting&&(e.classList.add("about-visible"),n.unobserve(e))},{threshold:.2});return n.observe(e),()=>n.disconnect()},[]),Z.jsxs("div",{ref:a,className:"about-div about-animate",children:[Z.jsx("div",{className:"about-left about-slide-left",children:Z.jsx("div",{className:"about-pic",children:Z.jsx("img",{src:"IMG_1775.jpeg",alt:"",className:"about-pic-tag"})})}),Z.jsxs("div",{className:"about-right about-slide-right",children:[Z.jsx("div",{className:"about-title",style:{fontFamily:"Aquire"},children:Z.jsx("h1",{children:GM})}),Z.jsx("div",{className:"about-desc inknut-antiqua-regular",children:VM})]})]})}const XM=[{skill:"React",link:"tech_stack_section/react.svg",level:"Strong"},{skill:"JavaScript",link:"tech_stack_section/icons8-javascript.svg",level:"Strong"},{skill:"Node.js",link:"tech_stack_section/node-js.svg",level:"Strong"},{skill:"Express.js",link:"tech_stack_section/icons8-express-js-48.png",level:"Strong"},{skill:"PostgreSQL",link:"tech_stack_section/postgresql.svg",level:"Strong"},{skill:"MySQL",link:"tech_stack_section/mysql-logo-svgrepo-com.svg",level:"Strong"},{skill:"Git",link:"tech_stack_section/git-icon-logo-svgrepo-com.svg",level:"Proficient"},{skill:"GitHub",link:"tech_stack_section/github.svg",level:"Proficient"},{skill:"Bootstrap",link:"tech_stack_section/bootstrap.png",level:"Proficient"},{skill:"Java",link:"tech_stack_section/java.svg",level:"Proficient"},{skill:"Python",link:"tech_stack_section/python.png",level:"Proficient"},{skill:"C++",link:"tech_stack_section/c.svg",level:"Strong"},{skill:"HTML",link:"tech_stack_section/html.svg",level:"Strong"},{skill:"VS Code",link:"tech_stack_section/vs-code-svgrepo-com.svg",level:"Strong"},{skill:"AWS",link:"tech_stack_section/aws.svg",level:"Familiar"},{skill:"Postman",link:"tech_stack_section/postman.svg",level:"Familiar"},{skill:"Replit",link:"tech_stack_section/replit.svg",level:"Familiar"},{skill:"Vercel",link:"tech_stack_section/vercel-icon-svgrepo-com.svg",level:"Familiar"}];function WM(){const a=Je.useRef([]);return Je.useEffect(()=>{const e=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&r.target.classList.add("skill-show")})},{threshold:.25});return a.current.forEach(n=>{n&&e.observe(n)}),()=>e.disconnect()},[]),Z.jsxs("section",{className:"skills",children:[Z.jsx("h1",{className:"skills-title",style:{fontFamily:"Aquire"},children:"My Skills"}),Z.jsx("p",{className:"skills-subtitle inknut-antiqua-semibold",children:"Skill levels are based on real project usage, not tutorials."}),Z.jsx("div",{className:"skills-grid",children:XM.map((e,n)=>Z.jsxs("div",{ref:r=>a.current[n]=r,className:"skill-card skill-hidden slide-top",children:[Z.jsx("img",{src:e.link,alt:e.skill}),Z.jsx("h3",{className:"inknut-antiqua-bold",children:e.skill}),Z.jsx("span",{className:`skill-level ${e.level.toLowerCase()}`,children:e.level})]},n))})]})}function sy(a){var e,n,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var o=a.length;for(e=0;e<o;e++)a[e]&&(n=sy(a[e]))&&(r&&(r+=" "),r+=n)}else for(n in a)a[n]&&(r&&(r+=" "),r+=n);return r}function ma(){for(var a,e,n=0,r="",o=arguments.length;n<o;n++)(a=arguments[n])&&(e=sy(a))&&(r&&(r+=" "),r+=e);return r}function Ur(a,e,n=void 0){const r={};for(const o in a){const c=a[o];let f="",d=!0;for(let m=0;m<c.length;m+=1){const p=c[m];p&&(f+=(d===!0?"":" ")+e(p),d=!1,n&&n[p]&&(f+=" "+n[p]))}r[o]=f}return r}function hs(a,...e){const n=new URL(`https://mui.com/production-error/?code=${a}`);return e.forEach(r=>n.searchParams.append("args[]",r)),`Minified MUI error #${a}; visit ${n} for the full message.`}const Mm="$$material";function xp(){return xp=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a},xp.apply(null,arguments)}function qM(a){if(a.sheet)return a.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===a)return document.styleSheets[e]}function jM(a){var e=document.createElement("style");return e.setAttribute("data-emotion",a.key),a.nonce!==void 0&&e.setAttribute("nonce",a.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var YM=(function(){function a(n){var r=this;this._insertTag=function(o){var c;r.tags.length===0?r.insertionPoint?c=r.insertionPoint.nextSibling:r.prepend?c=r.container.firstChild:c=r.before:c=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,c),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=a.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(jM(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var c=qM(o);try{c.insertRule(r,c.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},a})(),qn="-ms-",Ju="-moz-",Pt="-webkit-",oy="comm",Em="rule",Tm="decl",ZM="@import",ly="@keyframes",KM="@layer",$M=Math.abs,cf=String.fromCharCode,QM=Object.assign;function JM(a,e){return Hn(a,0)^45?(((e<<2^Hn(a,0))<<2^Hn(a,1))<<2^Hn(a,2))<<2^Hn(a,3):0}function cy(a){return a.trim()}function eE(a,e){return(a=e.exec(a))?a[0]:a}function Ft(a,e,n){return a.replace(e,n)}function yp(a,e){return a.indexOf(e)}function Hn(a,e){return a.charCodeAt(e)|0}function kl(a,e,n){return a.slice(e,n)}function ra(a){return a.length}function Am(a){return a.length}function _u(a,e){return e.push(a),a}function tE(a,e){return a.map(e).join("")}var uf=1,Mo=1,uy=0,ri=0,bn=0,wo="";function ff(a,e,n,r,o,c,f){return{value:a,root:e,parent:n,type:r,props:o,children:c,line:uf,column:Mo,length:f,return:""}}function Al(a,e){return QM(ff("",null,null,"",null,null,0),a,{length:-a.length},e)}function nE(){return bn}function iE(){return bn=ri>0?Hn(wo,--ri):0,Mo--,bn===10&&(Mo=1,uf--),bn}function vi(){return bn=ri<uy?Hn(wo,ri++):0,Mo++,bn===10&&(Mo=1,uf++),bn}function ua(){return Hn(wo,ri)}function ku(){return ri}function Ql(a,e){return kl(wo,a,e)}function Xl(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fy(a){return uf=Mo=1,uy=ra(wo=a),ri=0,[]}function dy(a){return wo="",a}function Xu(a){return cy(Ql(ri-1,Sp(a===91?a+2:a===40?a+1:a)))}function aE(a){for(;(bn=ua())&&bn<33;)vi();return Xl(a)>2||Xl(bn)>3?"":" "}function rE(a,e){for(;--e&&vi()&&!(bn<48||bn>102||bn>57&&bn<65||bn>70&&bn<97););return Ql(a,ku()+(e<6&&ua()==32&&vi()==32))}function Sp(a){for(;vi();)switch(bn){case a:return ri;case 34:case 39:a!==34&&a!==39&&Sp(bn);break;case 40:a===41&&Sp(a);break;case 92:vi();break}return ri}function sE(a,e){for(;vi()&&a+bn!==57;)if(a+bn===84&&ua()===47)break;return"/*"+Ql(e,ri-1)+"*"+cf(a===47?a:vi())}function oE(a){for(;!Xl(ua());)vi();return Ql(a,ri)}function lE(a){return dy(Wu("",null,null,null,[""],a=fy(a),0,[0],a))}function Wu(a,e,n,r,o,c,f,d,m){for(var p=0,v=0,g=f,x=0,M=0,T=0,E=1,b=1,y=1,P=0,B="",U=o,z=c,L=r,O=B;b;)switch(T=P,P=vi()){case 40:if(T!=108&&Hn(O,g-1)==58){yp(O+=Ft(Xu(P),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:O+=Xu(P);break;case 9:case 10:case 13:case 32:O+=aE(T);break;case 92:O+=rE(ku()-1,7);continue;case 47:switch(ua()){case 42:case 47:_u(cE(sE(vi(),ku()),e,n),m);break;default:O+="/"}break;case 123*E:d[p++]=ra(O)*y;case 125*E:case 59:case 0:switch(P){case 0:case 125:b=0;case 59+v:y==-1&&(O=Ft(O,/\f/g,"")),M>0&&ra(O)-g&&_u(M>32?O_(O+";",r,n,g-1):O_(Ft(O," ","")+";",r,n,g-2),m);break;case 59:O+=";";default:if(_u(L=L_(O,e,n,p,v,o,d,B,U=[],z=[],g),c),P===123)if(v===0)Wu(O,e,L,L,U,c,g,d,z);else switch(x===99&&Hn(O,3)===110?100:x){case 100:case 108:case 109:case 115:Wu(a,L,L,r&&_u(L_(a,L,L,0,0,o,d,B,o,U=[],g),z),o,z,g,d,r?U:z);break;default:Wu(O,L,L,L,[""],z,0,d,z)}}p=v=M=0,E=y=1,B=O="",g=f;break;case 58:g=1+ra(O),M=T;default:if(E<1){if(P==123)--E;else if(P==125&&E++==0&&iE()==125)continue}switch(O+=cf(P),P*E){case 38:y=v>0?1:(O+="\f",-1);break;case 44:d[p++]=(ra(O)-1)*y,y=1;break;case 64:ua()===45&&(O+=Xu(vi())),x=ua(),v=g=ra(B=O+=oE(ku())),P++;break;case 45:T===45&&ra(O)==2&&(E=0)}}return c}function L_(a,e,n,r,o,c,f,d,m,p,v){for(var g=o-1,x=o===0?c:[""],M=Am(x),T=0,E=0,b=0;T<r;++T)for(var y=0,P=kl(a,g+1,g=$M(E=f[T])),B=a;y<M;++y)(B=cy(E>0?x[y]+" "+P:Ft(P,/&\f/g,x[y])))&&(m[b++]=B);return ff(a,e,n,o===0?Em:d,m,p,v)}function cE(a,e,n){return ff(a,e,n,oy,cf(nE()),kl(a,2,-2),0)}function O_(a,e,n,r){return ff(a,e,n,Tm,kl(a,0,r),kl(a,r+1,-1),r)}function xo(a,e){for(var n="",r=Am(a),o=0;o<r;o++)n+=e(a[o],o,a,e)||"";return n}function uE(a,e,n,r){switch(a.type){case KM:if(a.children.length)break;case ZM:case Tm:return a.return=a.return||a.value;case oy:return"";case ly:return a.return=a.value+"{"+xo(a.children,r)+"}";case Em:a.value=a.props.join(",")}return ra(n=xo(a.children,r))?a.return=a.value+"{"+n+"}":""}function fE(a){var e=Am(a);return function(n,r,o,c){for(var f="",d=0;d<e;d++)f+=a[d](n,r,o,c)||"";return f}}function dE(a){return function(e){e.root||(e=e.return)&&a(e)}}function hy(a){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=a(n)),e[n]}}var hE=function(e,n,r){for(var o=0,c=0;o=c,c=ua(),o===38&&c===12&&(n[r]=1),!Xl(c);)vi();return Ql(e,ri)},pE=function(e,n){var r=-1,o=44;do switch(Xl(o)){case 0:o===38&&ua()===12&&(n[r]=1),e[r]+=hE(ri-1,n,r);break;case 2:e[r]+=Xu(o);break;case 4:if(o===44){e[++r]=ua()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=cf(o)}while(o=vi());return e},mE=function(e,n){return dy(pE(fy(e),n))},P_=new WeakMap,gE=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,o=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!P_.get(r))&&!o){P_.set(e,!0);for(var c=[],f=mE(n,c),d=r.props,m=0,p=0;m<f.length;m++)for(var v=0;v<d.length;v++,p++)e.props[p]=c[m]?f[m].replace(/&\f/g,d[v]):d[v]+" "+f[m]}}},vE=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function py(a,e){switch(JM(a,e)){case 5103:return Pt+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pt+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Pt+a+Ju+a+qn+a+a;case 6828:case 4268:return Pt+a+qn+a+a;case 6165:return Pt+a+qn+"flex-"+a+a;case 5187:return Pt+a+Ft(a,/(\w+).+(:[^]+)/,Pt+"box-$1$2"+qn+"flex-$1$2")+a;case 5443:return Pt+a+qn+"flex-item-"+Ft(a,/flex-|-self/,"")+a;case 4675:return Pt+a+qn+"flex-line-pack"+Ft(a,/align-content|flex-|-self/,"")+a;case 5548:return Pt+a+qn+Ft(a,"shrink","negative")+a;case 5292:return Pt+a+qn+Ft(a,"basis","preferred-size")+a;case 6060:return Pt+"box-"+Ft(a,"-grow","")+Pt+a+qn+Ft(a,"grow","positive")+a;case 4554:return Pt+Ft(a,/([^-])(transform)/g,"$1"+Pt+"$2")+a;case 6187:return Ft(Ft(Ft(a,/(zoom-|grab)/,Pt+"$1"),/(image-set)/,Pt+"$1"),a,"")+a;case 5495:case 3959:return Ft(a,/(image-set\([^]*)/,Pt+"$1$`$1");case 4968:return Ft(Ft(a,/(.+:)(flex-)?(.*)/,Pt+"box-pack:$3"+qn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pt+a+a;case 4095:case 3583:case 4068:case 2532:return Ft(a,/(.+)-inline(.+)/,Pt+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ra(a)-1-e>6)switch(Hn(a,e+1)){case 109:if(Hn(a,e+4)!==45)break;case 102:return Ft(a,/(.+:)(.+)-([^]+)/,"$1"+Pt+"$2-$3$1"+Ju+(Hn(a,e+3)==108?"$3":"$2-$3"))+a;case 115:return~yp(a,"stretch")?py(Ft(a,"stretch","fill-available"),e)+a:a}break;case 4949:if(Hn(a,e+1)!==115)break;case 6444:switch(Hn(a,ra(a)-3-(~yp(a,"!important")&&10))){case 107:return Ft(a,":",":"+Pt)+a;case 101:return Ft(a,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Pt+(Hn(a,14)===45?"inline-":"")+"box$3$1"+Pt+"$2$3$1"+qn+"$2box$3")+a}break;case 5936:switch(Hn(a,e+11)){case 114:return Pt+a+qn+Ft(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Pt+a+qn+Ft(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Pt+a+qn+Ft(a,/[svh]\w+-[tblr]{2}/,"lr")+a}return Pt+a+qn+a+a}return a}var _E=function(e,n,r,o){if(e.length>-1&&!e.return)switch(e.type){case Tm:e.return=py(e.value,e.length);break;case ly:return xo([Al(e,{value:Ft(e.value,"@","@"+Pt)})],o);case Em:if(e.length)return tE(e.props,function(c){switch(eE(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return xo([Al(e,{props:[Ft(c,/:(read-\w+)/,":"+Ju+"$1")]})],o);case"::placeholder":return xo([Al(e,{props:[Ft(c,/:(plac\w+)/,":"+Pt+"input-$1")]}),Al(e,{props:[Ft(c,/:(plac\w+)/,":"+Ju+"$1")]}),Al(e,{props:[Ft(c,/:(plac\w+)/,qn+"input-$1")]})],o)}return""})}},xE=[_E],yE=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(E){var b=E.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(E),E.setAttribute("data-s",""))})}var o=e.stylisPlugins||xE,c={},f,d=[];f=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(E){for(var b=E.getAttribute("data-emotion").split(" "),y=1;y<b.length;y++)c[b[y]]=!0;d.push(E)});var m,p=[gE,vE];{var v,g=[uE,dE(function(E){v.insert(E)})],x=fE(p.concat(o,g)),M=function(b){return xo(lE(b),x)};m=function(b,y,P,B){v=P,M(b?b+"{"+y.styles+"}":y.styles),B&&(T.inserted[y.name]=!0)}}var T={key:n,sheet:new YM({key:n,container:f,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:c,registered:{},insert:m};return T.sheet.hydrate(d),T},SE=!0;function bE(a,e,n){var r="";return n.split(" ").forEach(function(o){a[o]!==void 0?e.push(a[o]+";"):o&&(r+=o+" ")}),r}var my=function(e,n,r){var o=e.key+"-"+n.name;(r===!1||SE===!1)&&e.registered[o]===void 0&&(e.registered[o]=n.styles)},ME=function(e,n,r){my(e,n,r);var o=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var c=n;do e.insert(n===c?"."+o:"",c,e.sheet,!0),c=c.next;while(c!==void 0)}};function EE(a){for(var e=0,n,r=0,o=a.length;o>=4;++r,o-=4)n=a.charCodeAt(r)&255|(a.charCodeAt(++r)&255)<<8|(a.charCodeAt(++r)&255)<<16|(a.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(a.charCodeAt(r+2)&255)<<16;case 2:e^=(a.charCodeAt(r+1)&255)<<8;case 1:e^=a.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var TE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},AE=/[A-Z]|^ms/g,CE=/_EMO_([^_]+?)_([^]*?)_EMO_/g,gy=function(e){return e.charCodeAt(1)===45},F_=function(e){return e!=null&&typeof e!="boolean"},Ph=hy(function(a){return gy(a)?a:a.replace(AE,"-$&").toLowerCase()}),B_=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(CE,function(r,o,c){return sa={name:o,styles:c,next:sa},o})}return TE[e]!==1&&!gy(e)&&typeof n=="number"&&n!==0?n+"px":n};function Wl(a,e,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return sa={name:o.name,styles:o.styles,next:sa},o.name;var c=n;if(c.styles!==void 0){var f=c.next;if(f!==void 0)for(;f!==void 0;)sa={name:f.name,styles:f.styles,next:sa},f=f.next;var d=c.styles+";";return d}return RE(a,e,n)}case"function":{if(a!==void 0){var m=sa,p=n(a);return sa=m,Wl(a,e,p)}break}}var v=n;if(e==null)return v;var g=e[v];return g!==void 0?g:v}function RE(a,e,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Wl(a,e,n[o])+";";else for(var c in n){var f=n[c];if(typeof f!="object"){var d=f;e!=null&&e[d]!==void 0?r+=c+"{"+e[d]+"}":F_(d)&&(r+=Ph(c)+":"+B_(c,d)+";")}else if(Array.isArray(f)&&typeof f[0]=="string"&&(e==null||e[f[0]]===void 0))for(var m=0;m<f.length;m++)F_(f[m])&&(r+=Ph(c)+":"+B_(c,f[m])+";");else{var p=Wl(a,e,f);switch(c){case"animation":case"animationName":{r+=Ph(c)+":"+p+";";break}default:r+=c+"{"+p+"}"}}}return r}var I_=/label:\s*([^\s;{]+)\s*(;|$)/g,sa;function vy(a,e,n){if(a.length===1&&typeof a[0]=="object"&&a[0]!==null&&a[0].styles!==void 0)return a[0];var r=!0,o="";sa=void 0;var c=a[0];if(c==null||c.raw===void 0)r=!1,o+=Wl(n,e,c);else{var f=c;o+=f[0]}for(var d=1;d<a.length;d++)if(o+=Wl(n,e,a[d]),r){var m=c;o+=m[d]}I_.lastIndex=0;for(var p="",v;(v=I_.exec(o))!==null;)p+="-"+v[1];var g=EE(o)+p;return{name:g,styles:o,next:sa}}var wE=function(e){return e()},DE=A_.useInsertionEffect?A_.useInsertionEffect:!1,UE=DE||wE,_y=Je.createContext(typeof HTMLElement<"u"?yE({key:"css"}):null);_y.Provider;var NE=function(e){return Je.forwardRef(function(n,r){var o=Je.useContext(_y);return e(n,o,r)})},xy=Je.createContext({}),LE=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,OE=hy(function(a){return LE.test(a)||a.charCodeAt(0)===111&&a.charCodeAt(1)===110&&a.charCodeAt(2)<91}),PE=OE,FE=function(e){return e!=="theme"},z_=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?PE:FE},H_=function(e,n,r){var o;if(n){var c=n.shouldForwardProp;o=e.__emotion_forwardProp&&c?function(f){return e.__emotion_forwardProp(f)&&c(f)}:c}return typeof o!="function"&&r&&(o=e.__emotion_forwardProp),o},BE=function(e){var n=e.cache,r=e.serialized,o=e.isStringTag;return my(n,r,o),UE(function(){return ME(n,r,o)}),null},IE=function a(e,n){var r=e.__emotion_real===e,o=r&&e.__emotion_base||e,c,f;n!==void 0&&(c=n.label,f=n.target);var d=H_(e,n,r),m=d||z_(o),p=!m("as");return function(){var v=arguments,g=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(c!==void 0&&g.push("label:"+c+";"),v[0]==null||v[0].raw===void 0)g.push.apply(g,v);else{var x=v[0];g.push(x[0]);for(var M=v.length,T=1;T<M;T++)g.push(v[T],x[T])}var E=NE(function(b,y,P){var B=p&&b.as||o,U="",z=[],L=b;if(b.theme==null){L={};for(var O in b)L[O]=b[O];L.theme=Je.useContext(xy)}typeof b.className=="string"?U=bE(y.registered,z,b.className):b.className!=null&&(U=b.className+" ");var Q=vy(g.concat(z),y.registered,L);U+=y.key+"-"+Q.name,f!==void 0&&(U+=" "+f);var C=p&&d===void 0?z_(B):m,D={};for(var k in b)p&&k==="as"||C(k)&&(D[k]=b[k]);return D.className=U,P&&(D.ref=P),Je.createElement(Je.Fragment,null,Je.createElement(BE,{cache:y,serialized:Q,isStringTag:typeof B=="string"}),Je.createElement(B,D))});return E.displayName=c!==void 0?c:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",E.defaultProps=e.defaultProps,E.__emotion_real=E,E.__emotion_base=o,E.__emotion_styles=g,E.__emotion_forwardProp=d,Object.defineProperty(E,"toString",{value:function(){return"."+f}}),E.withComponent=function(b,y){var P=a(b,xp({},n,y,{shouldForwardProp:H_(E,y,!0)}));return P.apply(void 0,g)},E}},zE=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],bp=IE.bind(null);zE.forEach(function(a){bp[a]=bp(a)});function yy(a,e){return bp(a,e)}function HE(a,e){Array.isArray(a.__emotion_styles)&&(a.__emotion_styles=e(a.__emotion_styles))}const G_=[];function fs(a){return G_[0]=a,vy(G_)}var Fh={exports:{}},Zt={};var V_;function GE(){if(V_)return Zt;V_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.view_transition"),M=Symbol.for("react.client.reference");function T(E){if(typeof E=="object"&&E!==null){var b=E.$$typeof;switch(b){case a:switch(E=E.type,E){case n:case o:case r:case m:case p:case x:return E;default:switch(E=E&&E.$$typeof,E){case f:case d:case g:case v:return E;case c:return E;default:return b}}case e:return b}}}return Zt.ContextConsumer=c,Zt.ContextProvider=f,Zt.Element=a,Zt.ForwardRef=d,Zt.Fragment=n,Zt.Lazy=g,Zt.Memo=v,Zt.Portal=e,Zt.Profiler=o,Zt.StrictMode=r,Zt.Suspense=m,Zt.SuspenseList=p,Zt.isContextConsumer=function(E){return T(E)===c},Zt.isContextProvider=function(E){return T(E)===f},Zt.isElement=function(E){return typeof E=="object"&&E!==null&&E.$$typeof===a},Zt.isForwardRef=function(E){return T(E)===d},Zt.isFragment=function(E){return T(E)===n},Zt.isLazy=function(E){return T(E)===g},Zt.isMemo=function(E){return T(E)===v},Zt.isPortal=function(E){return T(E)===e},Zt.isProfiler=function(E){return T(E)===o},Zt.isStrictMode=function(E){return T(E)===r},Zt.isSuspense=function(E){return T(E)===m},Zt.isSuspenseList=function(E){return T(E)===p},Zt.isValidElementType=function(E){return typeof E=="string"||typeof E=="function"||E===n||E===o||E===r||E===m||E===p||typeof E=="object"&&E!==null&&(E.$$typeof===g||E.$$typeof===v||E.$$typeof===f||E.$$typeof===c||E.$$typeof===d||E.$$typeof===M||E.getModuleId!==void 0)},Zt.typeOf=T,Zt}var k_;function VE(){return k_||(k_=1,Fh.exports=GE()),Fh.exports}var Sy=VE();function la(a){if(typeof a!="object"||a===null)return!1;const e=Object.getPrototypeOf(a);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function by(a){if(Je.isValidElement(a)||Sy.isValidElementType(a)||!la(a))return a;const e={};return Object.keys(a).forEach(n=>{e[n]=by(a[n])}),e}function _i(a,e,n={clone:!0}){const r=n.clone?{...a}:a;return la(a)&&la(e)&&Object.keys(e).forEach(o=>{Je.isValidElement(e[o])||Sy.isValidElementType(e[o])?r[o]=e[o]:la(e[o])&&Object.prototype.hasOwnProperty.call(a,o)&&la(a[o])?r[o]=_i(a[o],e[o],n):n.clone?r[o]=la(e[o])?by(e[o]):e[o]:r[o]=e[o]}),r}const kE=a=>{const e=Object.keys(a).map(n=>({key:n,val:a[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>({...n,[r.key]:r.val}),{})};function XE(a){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5,...o}=a,c=kE(e),f=Object.keys(c);function d(x){return`@media (min-width:${typeof e[x]=="number"?e[x]:x}${n})`}function m(x){return`@media (max-width:${(typeof e[x]=="number"?e[x]:x)-r/100}${n})`}function p(x,M){const T=f.indexOf(M);return`@media (min-width:${typeof e[x]=="number"?e[x]:x}${n}) and (max-width:${(T!==-1&&typeof e[f[T]]=="number"?e[f[T]]:M)-r/100}${n})`}function v(x){return f.indexOf(x)+1<f.length?p(x,f[f.indexOf(x)+1]):d(x)}function g(x){const M=f.indexOf(x);return M===0?d(f[1]):M===f.length-1?m(f[M]):p(x,f[f.indexOf(x)+1]).replace("@media","@media not all and")}return{keys:f,values:c,up:d,down:m,between:p,only:v,not:g,unit:n,...o}}function X_(a,e){if(!a.containerQueries)return e;const n=Object.keys(e).filter(r=>r.startsWith("@container")).sort((r,o)=>{const c=/min-width:\s*([0-9.]+)/;return+(r.match(c)?.[1]||0)-+(o.match(c)?.[1]||0)});return n.length?n.reduce((r,o)=>{const c=e[o];return delete r[o],r[o]=c,r},{...e}):e}function WE(a,e){return e==="@"||e.startsWith("@")&&(a.some(n=>e.startsWith(`@${n}`))||!!e.match(/^@\d/))}function qE(a,e){const n=e.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;const[,r,o]=n,c=Number.isNaN(+r)?r||0:+r;return a.containerQueries(o).up(c)}function jE(a){const e=(c,f)=>c.replace("@media",f?`@container ${f}`:"@container");function n(c,f){c.up=(...d)=>e(a.breakpoints.up(...d),f),c.down=(...d)=>e(a.breakpoints.down(...d),f),c.between=(...d)=>e(a.breakpoints.between(...d),f),c.only=(...d)=>e(a.breakpoints.only(...d),f),c.not=(...d)=>{const m=e(a.breakpoints.not(...d),f);return m.includes("not all and")?m.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):m}}const r={},o=c=>(n(r,c),r);return n(o),{...a,containerQueries:o}}const YE={borderRadius:4};function Gl(a,e){return e?_i(a,e,{clone:!1}):a}const df={xs:0,sm:600,md:900,lg:1200,xl:1536},W_={keys:["xs","sm","md","lg","xl"],up:a=>`@media (min-width:${df[a]}px)`},ZE={containerQueries:a=>({up:e=>{let n=typeof e=="number"?e:df[e]||e;return typeof n=="number"&&(n=`${n}px`),a?`@container ${a} (min-width:${n})`:`@container (min-width:${n})`}})};function ka(a,e,n){const r=a.theme||{};if(Array.isArray(e)){const c=r.breakpoints||W_;return e.reduce((f,d,m)=>(f[c.up(c.keys[m])]=n(e[m]),f),{})}if(typeof e=="object"){const c=r.breakpoints||W_;return Object.keys(e).reduce((f,d)=>{if(WE(c.keys,d)){const m=qE(r.containerQueries?r:ZE,d);m&&(f[m]=n(e[d],d))}else if(Object.keys(c.values||df).includes(d)){const m=c.up(d);f[m]=n(e[d],d)}else{const m=d;f[m]=e[m]}return f},{})}return n(e)}function KE(a={}){return a.keys?.reduce((n,r)=>{const o=a.up(r);return n[o]={},n},{})||{}}function q_(a,e){return a.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},e)}function Rr(a){if(typeof a!="string")throw new Error(hs(7));return a.charAt(0).toUpperCase()+a.slice(1)}function hf(a,e,n=!0){if(!e||typeof e!="string")return null;if(a&&a.vars&&n){const r=`vars.${e}`.split(".").reduce((o,c)=>o&&o[c]?o[c]:null,a);if(r!=null)return r}return e.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,a)}function ef(a,e,n,r=n){let o;return typeof a=="function"?o=a(n):Array.isArray(a)?o=a[n]||r:o=hf(a,n)||r,e&&(o=e(o,r,a)),o}function mn(a){const{prop:e,cssProperty:n=a.prop,themeKey:r,transform:o}=a,c=f=>{if(f[e]==null)return null;const d=f[e],m=f.theme,p=hf(m,r)||{};return ka(f,d,g=>{let x=ef(p,o,g);return g===x&&typeof g=="string"&&(x=ef(p,o,`${e}${g==="default"?"":Rr(g)}`,g)),n===!1?x:{[n]:x}})};return c.propTypes={},c.filterProps=[e],c}function $E(a){const e={};return n=>(e[n]===void 0&&(e[n]=a(n)),e[n])}const QE={m:"margin",p:"padding"},JE={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},j_={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},eT=$E(a=>{if(a.length>2)if(j_[a])a=j_[a];else return[a];const[e,n]=a.split(""),r=QE[e],o=JE[n]||"";return Array.isArray(o)?o.map(c=>r+c):[r+o]}),Cm=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Rm=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Cm,...Rm];function Jl(a,e,n,r){const o=hf(a,e,!0)??n;return typeof o=="number"||typeof o=="string"?c=>typeof c=="string"?c:typeof o=="string"?o.startsWith("var(")&&c===0?0:o.startsWith("var(")&&c===1?o:`calc(${c} * ${o})`:o*c:Array.isArray(o)?c=>{if(typeof c=="string")return c;const f=Math.abs(c),d=o[f];return c>=0?d:typeof d=="number"?-d:typeof d=="string"&&d.startsWith("var(")?`calc(-1 * ${d})`:`-${d}`}:typeof o=="function"?o:()=>{}}function wm(a){return Jl(a,"spacing",8)}function ec(a,e){return typeof e=="string"||e==null?e:a(e)}function tT(a,e){return n=>a.reduce((r,o)=>(r[o]=ec(e,n),r),{})}function nT(a,e,n,r){if(!e.includes(n))return null;const o=eT(n),c=tT(o,r),f=a[n];return ka(a,f,c)}function My(a,e){const n=wm(a.theme);return Object.keys(a).map(r=>nT(a,e,r,n)).reduce(Gl,{})}function cn(a){return My(a,Cm)}cn.propTypes={};cn.filterProps=Cm;function un(a){return My(a,Rm)}un.propTypes={};un.filterProps=Rm;function Ey(a=8,e=wm({spacing:a})){if(a.mui)return a;const n=(...r)=>(r.length===0?[1]:r).map(c=>{const f=e(c);return typeof f=="number"?`${f}px`:f}).join(" ");return n.mui=!0,n}function pf(...a){const e=a.reduce((r,o)=>(o.filterProps.forEach(c=>{r[c]=o}),r),{}),n=r=>Object.keys(r).reduce((o,c)=>e[c]?Gl(o,e[c](r)):o,{});return n.propTypes={},n.filterProps=a.reduce((r,o)=>r.concat(o.filterProps),[]),n}function Ui(a){return typeof a!="number"?a:`${a}px solid`}function Pi(a,e){return mn({prop:a,themeKey:"borders",transform:e})}const iT=Pi("border",Ui),aT=Pi("borderTop",Ui),rT=Pi("borderRight",Ui),sT=Pi("borderBottom",Ui),oT=Pi("borderLeft",Ui),lT=Pi("borderColor"),cT=Pi("borderTopColor"),uT=Pi("borderRightColor"),fT=Pi("borderBottomColor"),dT=Pi("borderLeftColor"),hT=Pi("outline",Ui),pT=Pi("outlineColor"),mf=a=>{if(a.borderRadius!==void 0&&a.borderRadius!==null){const e=Jl(a.theme,"shape.borderRadius",4),n=r=>({borderRadius:ec(e,r)});return ka(a,a.borderRadius,n)}return null};mf.propTypes={};mf.filterProps=["borderRadius"];pf(iT,aT,rT,sT,oT,lT,cT,uT,fT,dT,mf,hT,pT);const gf=a=>{if(a.gap!==void 0&&a.gap!==null){const e=Jl(a.theme,"spacing",8),n=r=>({gap:ec(e,r)});return ka(a,a.gap,n)}return null};gf.propTypes={};gf.filterProps=["gap"];const vf=a=>{if(a.columnGap!==void 0&&a.columnGap!==null){const e=Jl(a.theme,"spacing",8),n=r=>({columnGap:ec(e,r)});return ka(a,a.columnGap,n)}return null};vf.propTypes={};vf.filterProps=["columnGap"];const _f=a=>{if(a.rowGap!==void 0&&a.rowGap!==null){const e=Jl(a.theme,"spacing",8),n=r=>({rowGap:ec(e,r)});return ka(a,a.rowGap,n)}return null};_f.propTypes={};_f.filterProps=["rowGap"];const mT=mn({prop:"gridColumn"}),gT=mn({prop:"gridRow"}),vT=mn({prop:"gridAutoFlow"}),_T=mn({prop:"gridAutoColumns"}),xT=mn({prop:"gridAutoRows"}),yT=mn({prop:"gridTemplateColumns"}),ST=mn({prop:"gridTemplateRows"}),bT=mn({prop:"gridTemplateAreas"}),MT=mn({prop:"gridArea"});pf(gf,vf,_f,mT,gT,vT,_T,xT,yT,ST,bT,MT);function yo(a,e){return e==="grey"?e:a}const ET=mn({prop:"color",themeKey:"palette",transform:yo}),TT=mn({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:yo}),AT=mn({prop:"backgroundColor",themeKey:"palette",transform:yo});pf(ET,TT,AT);function mi(a){return a<=1&&a!==0?`${a*100}%`:a}const CT=mn({prop:"width",transform:mi}),Dm=a=>{if(a.maxWidth!==void 0&&a.maxWidth!==null){const e=n=>{const r=a.theme?.breakpoints?.values?.[n]||df[n];return r?a.theme?.breakpoints?.unit!=="px"?{maxWidth:`${r}${a.theme.breakpoints.unit}`}:{maxWidth:r}:{maxWidth:mi(n)}};return ka(a,a.maxWidth,e)}return null};Dm.filterProps=["maxWidth"];const RT=mn({prop:"minWidth",transform:mi}),wT=mn({prop:"height",transform:mi}),DT=mn({prop:"maxHeight",transform:mi}),UT=mn({prop:"minHeight",transform:mi});mn({prop:"size",cssProperty:"width",transform:mi});mn({prop:"size",cssProperty:"height",transform:mi});const NT=mn({prop:"boxSizing"});pf(CT,Dm,RT,wT,DT,UT,NT);const tc={border:{themeKey:"borders",transform:Ui},borderTop:{themeKey:"borders",transform:Ui},borderRight:{themeKey:"borders",transform:Ui},borderBottom:{themeKey:"borders",transform:Ui},borderLeft:{themeKey:"borders",transform:Ui},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Ui},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:mf},color:{themeKey:"palette",transform:yo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:yo},backgroundColor:{themeKey:"palette",transform:yo},p:{style:un},pt:{style:un},pr:{style:un},pb:{style:un},pl:{style:un},px:{style:un},py:{style:un},padding:{style:un},paddingTop:{style:un},paddingRight:{style:un},paddingBottom:{style:un},paddingLeft:{style:un},paddingX:{style:un},paddingY:{style:un},paddingInline:{style:un},paddingInlineStart:{style:un},paddingInlineEnd:{style:un},paddingBlock:{style:un},paddingBlockStart:{style:un},paddingBlockEnd:{style:un},m:{style:cn},mt:{style:cn},mr:{style:cn},mb:{style:cn},ml:{style:cn},mx:{style:cn},my:{style:cn},margin:{style:cn},marginTop:{style:cn},marginRight:{style:cn},marginBottom:{style:cn},marginLeft:{style:cn},marginX:{style:cn},marginY:{style:cn},marginInline:{style:cn},marginInlineStart:{style:cn},marginInlineEnd:{style:cn},marginBlock:{style:cn},marginBlockStart:{style:cn},marginBlockEnd:{style:cn},displayPrint:{cssProperty:!1,transform:a=>({"@media print":{display:a}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:gf},rowGap:{style:_f},columnGap:{style:vf},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:mi},maxWidth:{style:Dm},minWidth:{transform:mi},height:{transform:mi},maxHeight:{transform:mi},minHeight:{transform:mi},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function LT(...a){const e=a.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(e);return a.every(r=>n.size===Object.keys(r).length)}function OT(a,e){return typeof a=="function"?a(e):a}function PT(){function a(n,r,o,c){const f={[n]:r,theme:o},d=c[n];if(!d)return{[n]:r};const{cssProperty:m=n,themeKey:p,transform:v,style:g}=d;if(r==null)return null;if(p==="typography"&&r==="inherit")return{[n]:r};const x=hf(o,p)||{};return g?g(f):ka(f,r,T=>{let E=ef(x,v,T);return T===E&&typeof T=="string"&&(E=ef(x,v,`${n}${T==="default"?"":Rr(T)}`,T)),m===!1?E:{[m]:E}})}function e(n){const{sx:r,theme:o={},nested:c}=n||{};if(!r)return null;const f=o.unstable_sxConfig??tc;function d(m){let p=m;if(typeof m=="function")p=m(o);else if(typeof m!="object")return m;if(!p)return null;const v=KE(o.breakpoints),g=Object.keys(v);let x=v;return Object.keys(p).forEach(M=>{const T=OT(p[M],o);if(T!=null)if(typeof T=="object")if(f[M])x=Gl(x,a(M,T,o,f));else{const E=ka({theme:o},T,b=>({[M]:b}));LT(E,T)?x[M]=e({sx:T,theme:o,nested:!0}):x=Gl(x,E)}else x=Gl(x,a(M,T,o,f))}),!c&&o.modularCssLayers?{"@layer sx":X_(o,q_(g,x))}:X_(o,q_(g,x))}return Array.isArray(r)?r.map(d):d(r)}return e}const ps=PT();ps.filterProps=["sx"];function FT(a,e){const n=this;if(n.vars){if(!n.colorSchemes?.[a]||typeof n.getColorSchemeSelector!="function")return{};let r=n.getColorSchemeSelector(a);return r==="&"?e:((r.includes("data-")||r.includes("."))&&(r=`*:where(${r.replace(/\s*&$/,"")}) &`),{[r]:e})}return n.palette.mode===a?e:{}}function Um(a={},...e){const{breakpoints:n={},palette:r={},spacing:o,shape:c={},...f}=a,d=XE(n),m=Ey(o);let p=_i({breakpoints:d,direction:"ltr",components:{},palette:{mode:"light",...r},spacing:m,shape:{...YE,...c}},f);return p=jE(p),p.applyStyles=FT,p=e.reduce((v,g)=>_i(v,g),p),p.unstable_sxConfig={...tc,...f?.unstable_sxConfig},p.unstable_sx=function(g){return ps({sx:g,theme:this})},p}function BT(a){return Object.keys(a).length===0}function IT(a=null){const e=Je.useContext(xy);return!e||BT(e)?a:e}const zT=Um();function Ty(a=zT){return IT(a)}const HT=a=>{const e={systemProps:{},otherProps:{}},n=a?.theme?.unstable_sxConfig??tc;return Object.keys(a).forEach(r=>{n[r]?e.systemProps[r]=a[r]:e.otherProps[r]=a[r]}),e};function Ay(a){const{sx:e,...n}=a,{systemProps:r,otherProps:o}=HT(n);let c;return Array.isArray(e)?c=[r,...e]:typeof e=="function"?c=(...f)=>{const d=e(...f);return la(d)?{...r,...d}:r}:c={...r,...e},{...o,sx:c}}const Y_=a=>a,GT=()=>{let a=Y_;return{configure(e){a=e},generate(e){return a(e)},reset(){a=Y_}}},Cy=GT();function VT(a={}){const{themeId:e,defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:o}=a,c=yy("div",{shouldForwardProp:d=>d!=="theme"&&d!=="sx"&&d!=="as"})(ps);return Je.forwardRef(function(m,p){const v=Ty(n),{className:g,component:x="div",...M}=Ay(m);return Z.jsx(c,{as:x,ref:p,className:ma(g,o?o(r):r),theme:e&&v[e]||v,...M})})}const kT={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function qa(a,e,n="Mui"){const r=kT[e];return r?`${n}-${r}`:`${Cy.generate(a)}-${e}`}function ja(a,e,n="Mui"){const r={};return e.forEach(o=>{r[o]=qa(a,o,n)}),r}function Ry(a){const{variants:e,...n}=a,r={variants:e,style:fs(n),isProcessed:!0};return r.style===n||e&&e.forEach(o=>{typeof o.style!="function"&&(o.style=fs(o.style))}),r}const XT=Um();function Bh(a){return a!=="ownerState"&&a!=="theme"&&a!=="sx"&&a!=="as"}function ls(a,e){return e&&a&&typeof a=="object"&&a.styles&&!a.styles.startsWith("@layer")&&(a.styles=`@layer ${e}{${String(a.styles)}}`),a}function WT(a){return a?(e,n)=>n[a]:null}function qT(a,e,n){a.theme=ZT(a.theme)?n:a.theme[e]||a.theme}function qu(a,e,n){const r=typeof e=="function"?e(a):e;if(Array.isArray(r))return r.flatMap(o=>qu(a,o,n));if(Array.isArray(r?.variants)){let o;if(r.isProcessed)o=n?ls(r.style,n):r.style;else{const{variants:c,...f}=r;o=n?ls(fs(f),n):f}return wy(a,r.variants,[o],n)}return r?.isProcessed?n?ls(fs(r.style),n):r.style:n?ls(fs(r),n):r}function wy(a,e,n=[],r=void 0){let o;e:for(let c=0;c<e.length;c+=1){const f=e[c];if(typeof f.props=="function"){if(o??={...a,...a.ownerState,ownerState:a.ownerState},!f.props(o))continue}else for(const d in f.props)if(a[d]!==f.props[d]&&a.ownerState?.[d]!==f.props[d])continue e;typeof f.style=="function"?(o??={...a,...a.ownerState,ownerState:a.ownerState},n.push(r?ls(fs(f.style(o)),r):f.style(o))):n.push(r?ls(fs(f.style),r):f.style)}return n}function jT(a={}){const{themeId:e,defaultTheme:n=XT,rootShouldForwardProp:r=Bh,slotShouldForwardProp:o=Bh}=a;function c(d){qT(d,e,n)}return(d,m={})=>{HE(d,L=>L.filter(O=>O!==ps));const{name:p,slot:v,skipVariantsResolver:g,skipSx:x,overridesResolver:M=WT($T(v)),...T}=m,E=p&&p.startsWith("Mui")||v?"components":"custom",b=g!==void 0?g:v&&v!=="Root"&&v!=="root"||!1,y=x||!1;let P=Bh;v==="Root"||v==="root"?P=r:v?P=o:KT(d)&&(P=void 0);const B=yy(d,{shouldForwardProp:P,label:YT(),...T}),U=L=>{if(L.__emotion_real===L)return L;if(typeof L=="function")return function(Q){return qu(Q,L,Q.theme.modularCssLayers?E:void 0)};if(la(L)){const O=Ry(L);return function(C){return O.variants?qu(C,O,C.theme.modularCssLayers?E:void 0):C.theme.modularCssLayers?ls(O.style,E):O.style}}return L},z=(...L)=>{const O=[],Q=L.map(U),C=[];if(O.push(c),p&&M&&C.push(function(W){const ee=W.theme.components?.[p]?.styleOverrides;if(!ee)return null;const F={};for(const V in ee)F[V]=qu(W,ee[V],W.theme.modularCssLayers?"theme":void 0);return M(W,F)}),p&&!b&&C.push(function(W){const ee=W.theme?.components?.[p]?.variants;return ee?wy(W,ee,[],W.theme.modularCssLayers?"theme":void 0):null}),y||C.push(ps),Array.isArray(Q[0])){const A=Q.shift(),W=new Array(O.length).fill(""),q=new Array(C.length).fill("");let ee;ee=[...W,...A,...q],ee.raw=[...W,...A.raw,...q],O.unshift(ee)}const D=[...O,...Q,...C],k=B(...D);return d.muiName&&(k.muiName=d.muiName),k};return B.withConfig&&(z.withConfig=B.withConfig),z}}function YT(a,e){return void 0}function ZT(a){for(const e in a)return!1;return!0}function KT(a){return typeof a=="string"&&a.charCodeAt(0)>96}function $T(a){return a&&a.charAt(0).toLowerCase()+a.slice(1)}function tf(a,e,n=!1){const r={...e};for(const o in a)if(Object.prototype.hasOwnProperty.call(a,o)){const c=o;if(c==="components"||c==="slots")r[c]={...a[c],...r[c]};else if(c==="componentsProps"||c==="slotProps"){const f=a[c],d=e[c];if(!d)r[c]=f||{};else if(!f)r[c]=d;else{r[c]={...d};for(const m in f)if(Object.prototype.hasOwnProperty.call(f,m)){const p=m;r[c][p]=tf(f[p],d[p],n)}}}else c==="className"&&n&&e.className?r.className=ma(a?.className,e?.className):c==="style"&&n&&e.style?r.style={...a?.style,...e?.style}:r[c]===void 0&&(r[c]=a[c])}return r}function QT(a){const{theme:e,name:n,props:r}=a;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:tf(e.components[n].defaultProps,r)}function JT({props:a,name:e,defaultTheme:n,themeId:r}){let o=Ty(n);return o=o[r]||o,QT({theme:o,name:e,props:a})}function e1(a,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(a,n))}function Nm(a,e=0,n=1){return e1(a,e,n)}function t1(a){a=a.slice(1);const e=new RegExp(`.{1,${a.length>=6?2:1}}`,"g");let n=a.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function wr(a){if(a.type)return a;if(a.charAt(0)==="#")return wr(t1(a));const e=a.indexOf("("),n=a.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(n))throw new Error(hs(9,a));let r=a.substring(e+1,a.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(o))throw new Error(hs(10,o))}else r=r.split(",");return r=r.map(c=>parseFloat(c)),{type:n,values:r,colorSpace:o}}const n1=a=>{const e=wr(a);return e.values.slice(0,3).map((n,r)=>e.type.includes("hsl")&&r!==0?`${n}%`:n).join(" ")},Fl=(a,e)=>{try{return n1(a)}catch{return a}};function xf(a){const{type:e,colorSpace:n}=a;let{values:r}=a;return e.includes("rgb")?r=r.map((o,c)=>c<3?parseInt(o,10):o):e.includes("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.includes("color")?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function Dy(a){a=wr(a);const{values:e}=a,n=e[0],r=e[1]/100,o=e[2]/100,c=r*Math.min(o,1-o),f=(p,v=(p+n/30)%12)=>o-c*Math.max(Math.min(v-3,9-v,1),-1);let d="rgb";const m=[Math.round(f(0)*255),Math.round(f(8)*255),Math.round(f(4)*255)];return a.type==="hsla"&&(d+="a",m.push(e[3])),xf({type:d,values:m})}function Mp(a){a=wr(a);let e=a.type==="hsl"||a.type==="hsla"?wr(Dy(a)).values:a.values;return e=e.map(n=>(a.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function i1(a,e){const n=Mp(a),r=Mp(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Uy(a,e){return a=wr(a),e=Nm(e),(a.type==="rgb"||a.type==="hsl")&&(a.type+="a"),a.type==="color"?a.values[3]=`/${e}`:a.values[3]=e,xf(a)}function Qr(a,e,n){try{return Uy(a,e)}catch{return a}}function yf(a,e){if(a=wr(a),e=Nm(e),a.type.includes("hsl"))a.values[2]*=1-e;else if(a.type.includes("rgb")||a.type.includes("color"))for(let n=0;n<3;n+=1)a.values[n]*=1-e;return xf(a)}function kt(a,e,n){try{return yf(a,e)}catch{return a}}function Sf(a,e){if(a=wr(a),e=Nm(e),a.type.includes("hsl"))a.values[2]+=(100-a.values[2])*e;else if(a.type.includes("rgb"))for(let n=0;n<3;n+=1)a.values[n]+=(255-a.values[n])*e;else if(a.type.includes("color"))for(let n=0;n<3;n+=1)a.values[n]+=(1-a.values[n])*e;return xf(a)}function Xt(a,e,n){try{return Sf(a,e)}catch{return a}}function a1(a,e=.15){return Mp(a)>.5?yf(a,e):Sf(a,e)}function xu(a,e,n){try{return a1(a,e)}catch{return a}}const r1=Je.createContext(void 0);function s1(a){const{theme:e,name:n,props:r}=a;if(!e||!e.components||!e.components[n])return r;const o=e.components[n];return o.defaultProps?tf(o.defaultProps,r,e.components.mergeClassNameAndStyle):!o.styleOverrides&&!o.variants?tf(o,r,e.components.mergeClassNameAndStyle):r}function o1({props:a,name:e}){const n=Je.useContext(r1);return s1({props:a,name:e,theme:{components:n}})}const Z_={theme:void 0};function l1(a){let e,n;return function(o){let c=e;return(c===void 0||o.theme!==n)&&(Z_.theme=o.theme,c=Ry(a(Z_)),e=c,n=o.theme),c}}function c1(a=""){function e(...r){if(!r.length)return"";const o=r[0];return typeof o=="string"&&!o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${a?`${a}-`:""}${o}${e(...r.slice(1))})`:`, ${o}`}return(r,...o)=>`var(--${a?`${a}-`:""}${r}${e(...o)})`}const K_=(a,e,n,r=[])=>{let o=a;e.forEach((c,f)=>{f===e.length-1?Array.isArray(o)?o[Number(c)]=n:o&&typeof o=="object"&&(o[c]=n):o&&typeof o=="object"&&(o[c]||(o[c]=r.includes(c)?[]:{}),o=o[c])})},u1=(a,e,n)=>{function r(o,c=[],f=[]){Object.entries(o).forEach(([d,m])=>{(!n||n&&!n([...c,d]))&&m!=null&&(typeof m=="object"&&Object.keys(m).length>0?r(m,[...c,d],Array.isArray(m)?[...f,d]:f):e([...c,d],m,f))})}r(a)},f1=(a,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(r=>a.includes(r))||a[a.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function Ih(a,e){const{prefix:n,shouldSkipGeneratingVar:r}=e||{},o={},c={},f={};return u1(a,(d,m,p)=>{if((typeof m=="string"||typeof m=="number")&&(!r||!r(d,m))){const v=`--${n?`${n}-`:""}${d.join("-")}`,g=f1(d,m);Object.assign(o,{[v]:g}),K_(c,d,`var(${v})`,p),K_(f,d,`var(${v}, ${g})`,p)}},d=>d[0]==="vars"),{css:o,vars:c,varsWithDefaults:f}}function d1(a,e={}){const{getSelector:n=y,disableCssColorScheme:r,colorSchemeSelector:o,enableContrastVars:c}=e,{colorSchemes:f={},components:d,defaultColorScheme:m="light",...p}=a,{vars:v,css:g,varsWithDefaults:x}=Ih(p,e);let M=x;const T={},{[m]:E,...b}=f;if(Object.entries(b||{}).forEach(([U,z])=>{const{vars:L,css:O,varsWithDefaults:Q}=Ih(z,e);M=_i(M,Q),T[U]={css:O,vars:L}}),E){const{css:U,vars:z,varsWithDefaults:L}=Ih(E,e);M=_i(M,L),T[m]={css:U,vars:z}}function y(U,z){let L=o;if(o==="class"&&(L=".%s"),o==="data"&&(L="[data-%s]"),o?.startsWith("data-")&&!o.includes("%s")&&(L=`[${o}="%s"]`),U){if(L==="media")return a.defaultColorScheme===U?":root":{[`@media (prefers-color-scheme: ${f[U]?.palette?.mode||U})`]:{":root":z}};if(L)return a.defaultColorScheme===U?`:root, ${L.replace("%s",String(U))}`:L.replace("%s",String(U))}return":root"}return{vars:M,generateThemeVars:()=>{let U={...v};return Object.entries(T).forEach(([,{vars:z}])=>{U=_i(U,z)}),U},generateStyleSheets:()=>{const U=[],z=a.defaultColorScheme||"light";function L(C,D){Object.keys(D).length&&U.push(typeof C=="string"?{[C]:{...D}}:C)}L(n(void 0,{...g}),g);const{[z]:O,...Q}=T;if(O){const{css:C}=O,D=f[z]?.palette?.mode,k=!r&&D?{colorScheme:D,...C}:{...C};L(n(z,{...k}),k)}return Object.entries(Q).forEach(([C,{css:D}])=>{const k=f[C]?.palette?.mode,A=!r&&k?{colorScheme:k,...D}:{...D};L(n(C,{...A}),A)}),c&&U.push({":root":{"--__l-threshold":"0.7","--__l":"clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)","--__a":"clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"}}),U}}}function h1(a){return function(n){return a==="media"?`@media (prefers-color-scheme: ${n})`:a?a.startsWith("data-")&&!a.includes("%s")?`[${a}="${n}"] &`:a==="class"?`.${n} &`:a==="data"?`[data-${n}] &`:`${a.replace("%s",n)} &`:"&"}}function p1(a,e){return Je.isValidElement(a)&&e.indexOf(a.type.muiName??a.type?._payload?.value?.muiName)!==-1}const ql={black:"#000",white:"#fff"},m1={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Js={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},eo={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Cl={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},to={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},no={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},io={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"};function Ny(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ql.white,default:ql.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const Ly=Ny();function Oy(){return{text:{primary:ql.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ql.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const Ep=Oy();function $_(a,e,n,r){const o=r.light||r,c=r.dark||r*1.5;a[e]||(a.hasOwnProperty(n)?a[e]=a[n]:e==="light"?a.light=Sf(a.main,o):e==="dark"&&(a.dark=yf(a.main,c)))}function Q_(a,e,n,r,o){const c=o.light||o,f=o.dark||o*1.5;e[n]||(e.hasOwnProperty(r)?e[n]=e[r]:n==="light"?e.light=`color-mix(in ${a}, ${e.main}, #fff ${(c*100).toFixed(0)}%)`:n==="dark"&&(e.dark=`color-mix(in ${a}, ${e.main}, #000 ${(f*100).toFixed(0)}%)`))}function g1(a="light"){return a==="dark"?{main:to[200],light:to[50],dark:to[400]}:{main:to[700],light:to[400],dark:to[800]}}function v1(a="light"){return a==="dark"?{main:Js[200],light:Js[50],dark:Js[400]}:{main:Js[500],light:Js[300],dark:Js[700]}}function _1(a="light"){return a==="dark"?{main:eo[500],light:eo[300],dark:eo[700]}:{main:eo[700],light:eo[400],dark:eo[800]}}function x1(a="light"){return a==="dark"?{main:no[400],light:no[300],dark:no[700]}:{main:no[700],light:no[500],dark:no[900]}}function y1(a="light"){return a==="dark"?{main:io[400],light:io[300],dark:io[700]}:{main:io[800],light:io[500],dark:io[900]}}function S1(a="light"){return a==="dark"?{main:Cl[400],light:Cl[300],dark:Cl[700]}:{main:"#ed6c02",light:Cl[500],dark:Cl[900]}}function b1(a){return`oklch(from ${a} var(--__l) 0 h / var(--__a))`}function Lm(a){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2,colorSpace:o,...c}=a,f=a.primary||g1(e),d=a.secondary||v1(e),m=a.error||_1(e),p=a.info||x1(e),v=a.success||y1(e),g=a.warning||S1(e);function x(b){return o?b1(b):i1(b,Ep.text.primary)>=n?Ep.text.primary:Ly.text.primary}const M=({color:b,name:y,mainShade:P=500,lightShade:B=300,darkShade:U=700})=>{if(b={...b},!b.main&&b[P]&&(b.main=b[P]),!b.hasOwnProperty("main"))throw new Error(hs(11,y?` (${y})`:"",P));if(typeof b.main!="string")throw new Error(hs(12,y?` (${y})`:"",JSON.stringify(b.main)));return o?(Q_(o,b,"light",B,r),Q_(o,b,"dark",U,r)):($_(b,"light",B,r),$_(b,"dark",U,r)),b.contrastText||(b.contrastText=x(b.main)),b};let T;return e==="light"?T=Ny():e==="dark"&&(T=Oy()),_i({common:{...ql},mode:e,primary:M({color:f,name:"primary"}),secondary:M({color:d,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:M({color:m,name:"error"}),warning:M({color:g,name:"warning"}),info:M({color:p,name:"info"}),success:M({color:v,name:"success"}),grey:m1,contrastThreshold:n,getContrastText:x,augmentColor:M,tonalOffset:r,...T},c)}function M1(a){const e={};return Object.entries(a).forEach(r=>{const[o,c]=r;typeof c=="object"&&(e[o]=`${c.fontStyle?`${c.fontStyle} `:""}${c.fontVariant?`${c.fontVariant} `:""}${c.fontWeight?`${c.fontWeight} `:""}${c.fontStretch?`${c.fontStretch} `:""}${c.fontSize||""}${c.lineHeight?`/${c.lineHeight} `:""}${c.fontFamily||""}`)}),e}function E1(a,e){return{toolbar:{minHeight:56,[a.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[a.up("sm")]:{minHeight:64}},...e}}function T1(a){return Math.round(a*1e5)/1e5}const J_={textTransform:"uppercase"},ex='"Roboto", "Helvetica", "Arial", sans-serif';function A1(a,e){const{fontFamily:n=ex,fontSize:r=14,fontWeightLight:o=300,fontWeightRegular:c=400,fontWeightMedium:f=500,fontWeightBold:d=700,htmlFontSize:m=16,allVariants:p,pxToRem:v,...g}=typeof e=="function"?e(a):e,x=r/14,M=v||(b=>`${b/m*x}rem`),T=(b,y,P,B,U)=>({fontFamily:n,fontWeight:b,fontSize:M(y),lineHeight:P,...n===ex?{letterSpacing:`${T1(B/y)}em`}:{},...U,...p}),E={h1:T(o,96,1.167,-1.5),h2:T(o,60,1.2,-.5),h3:T(c,48,1.167,0),h4:T(c,34,1.235,.25),h5:T(c,24,1.334,0),h6:T(f,20,1.6,.15),subtitle1:T(c,16,1.75,.15),subtitle2:T(f,14,1.57,.1),body1:T(c,16,1.5,.15),body2:T(c,14,1.43,.15),button:T(f,14,1.75,.4,J_),caption:T(c,12,1.66,.4),overline:T(c,12,2.66,1,J_),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return _i({htmlFontSize:m,pxToRem:M,fontFamily:n,fontSize:r,fontWeightLight:o,fontWeightRegular:c,fontWeightMedium:f,fontWeightBold:d,...E},g,{clone:!1})}const C1=.2,R1=.14,w1=.12;function sn(...a){return[`${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${C1})`,`${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${R1})`,`${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${w1})`].join(",")}const D1=["none",sn(0,2,1,-1,0,1,1,0,0,1,3,0),sn(0,3,1,-2,0,2,2,0,0,1,5,0),sn(0,3,3,-2,0,3,4,0,0,1,8,0),sn(0,2,4,-1,0,4,5,0,0,1,10,0),sn(0,3,5,-1,0,5,8,0,0,1,14,0),sn(0,3,5,-1,0,6,10,0,0,1,18,0),sn(0,4,5,-2,0,7,10,1,0,2,16,1),sn(0,5,5,-3,0,8,10,1,0,3,14,2),sn(0,5,6,-3,0,9,12,1,0,3,16,2),sn(0,6,6,-3,0,10,14,1,0,4,18,3),sn(0,6,7,-4,0,11,15,1,0,4,20,3),sn(0,7,8,-4,0,12,17,2,0,5,22,4),sn(0,7,8,-4,0,13,19,2,0,5,24,4),sn(0,7,9,-4,0,14,21,2,0,5,26,4),sn(0,8,9,-5,0,15,22,2,0,6,28,5),sn(0,8,10,-5,0,16,24,2,0,6,30,5),sn(0,8,11,-5,0,17,26,2,0,6,32,5),sn(0,9,11,-5,0,18,28,2,0,7,34,6),sn(0,9,12,-6,0,19,29,2,0,7,36,6),sn(0,10,13,-6,0,20,31,3,0,8,38,7),sn(0,10,13,-6,0,21,33,3,0,8,40,7),sn(0,10,14,-6,0,22,35,3,0,8,42,7),sn(0,11,14,-7,0,23,36,3,0,9,44,8),sn(0,11,15,-7,0,24,38,3,0,9,46,8)],U1={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},N1={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function tx(a){return`${Math.round(a)}ms`}function L1(a){if(!a)return 0;const e=a/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function O1(a){const e={...U1,...a.easing},n={...N1,...a.duration};return{getAutoHeightDuration:L1,create:(o=["all"],c={})=>{const{duration:f=n.standard,easing:d=e.easeInOut,delay:m=0,...p}=c;return(Array.isArray(o)?o:[o]).map(v=>`${v} ${typeof f=="string"?f:tx(f)} ${d} ${typeof m=="string"?m:tx(m)}`).join(",")},...a,easing:e,duration:n}}const P1={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function F1(a){return la(a)||typeof a>"u"||typeof a=="string"||typeof a=="boolean"||typeof a=="number"||Array.isArray(a)}function Py(a={}){const e={...a};function n(r){const o=Object.entries(r);for(let c=0;c<o.length;c++){const[f,d]=o[c];!F1(d)||f.startsWith("unstable_")?delete r[f]:la(d)&&(r[f]={...d},n(r[f]))}}return n(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function nx(a){return typeof a=="number"?`${(a*100).toFixed(0)}%`:`calc((${a}) * 100%)`}const B1=a=>{if(!Number.isNaN(+a))return+a;const e=a.match(/\d*\.?\d+/g);if(!e)return 0;let n=0;for(let r=0;r<e.length;r+=1)n+=+e[r];return n};function I1(a){Object.assign(a,{alpha(e,n){const r=this||a;return r.colorSpace?`oklch(from ${e} l c h / ${typeof n=="string"?`calc(${n})`:n})`:r.vars?`rgba(${e.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g,"var(--$1Channel)")} / ${typeof n=="string"?`calc(${n})`:n})`:Uy(e,B1(n))},lighten(e,n){const r=this||a;return r.colorSpace?`color-mix(in ${r.colorSpace}, ${e}, #fff ${nx(n)})`:Sf(e,n)},darken(e,n){const r=this||a;return r.colorSpace?`color-mix(in ${r.colorSpace}, ${e}, #000 ${nx(n)})`:yf(e,n)}})}function Tp(a={},...e){const{breakpoints:n,mixins:r={},spacing:o,palette:c={},transitions:f={},typography:d={},shape:m,colorSpace:p,...v}=a;if(a.vars&&a.generateThemeVars===void 0)throw new Error(hs(20));const g=Lm({...c,colorSpace:p}),x=Um(a);let M=_i(x,{mixins:E1(x.breakpoints,r),palette:g,shadows:D1.slice(),typography:A1(g,d),transitions:O1(f),zIndex:{...P1}});return M=_i(M,v),M=e.reduce((T,E)=>_i(T,E),M),M.unstable_sxConfig={...tc,...v?.unstable_sxConfig},M.unstable_sx=function(E){return ps({sx:E,theme:this})},M.toRuntimeSource=Py,I1(M),M}function z1(a){let e;return a<1?e=5.11916*a**2:e=4.5*Math.log(a+1)+2,Math.round(e*10)/1e3}const H1=[...Array(25)].map((a,e)=>{if(e===0)return"none";const n=z1(e);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function Fy(a){return{inputPlaceholder:a==="dark"?.5:.42,inputUnderline:a==="dark"?.7:.42,switchTrackDisabled:a==="dark"?.2:.12,switchTrack:a==="dark"?.3:.38}}function By(a){return a==="dark"?H1:[]}function G1(a){const{palette:e={mode:"light"},opacity:n,overlays:r,colorSpace:o,...c}=a,f=Lm({...e,colorSpace:o});return{palette:f,opacity:{...Fy(f.mode),...n},overlays:r||By(f.mode),...c}}function V1(a){return!!a[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!a[0].match(/sxConfig$/)||a[0]==="palette"&&!!a[1]?.match(/(mode|contrastThreshold|tonalOffset)/)}const k1=a=>[...[...Array(25)].map((e,n)=>`--${a?`${a}-`:""}overlays-${n}`),`--${a?`${a}-`:""}palette-AppBar-darkBg`,`--${a?`${a}-`:""}palette-AppBar-darkColor`],X1=a=>(e,n)=>{const r=a.rootSelector||":root",o=a.colorSchemeSelector;let c=o;if(o==="class"&&(c=".%s"),o==="data"&&(c="[data-%s]"),o?.startsWith("data-")&&!o.includes("%s")&&(c=`[${o}="%s"]`),a.defaultColorScheme===e){if(e==="dark"){const f={};return k1(a.cssVarPrefix).forEach(d=>{f[d]=n[d],delete n[d]}),c==="media"?{[r]:n,"@media (prefers-color-scheme: dark)":{[r]:f}}:c?{[c.replace("%s",e)]:f,[`${r}, ${c.replace("%s",e)}`]:n}:{[r]:{...n,...f}}}if(c&&c!=="media")return`${r}, ${c.replace("%s",String(e))}`}else if(e){if(c==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[r]:n}};if(c)return c.replace("%s",String(e))}return r};function W1(a,e){e.forEach(n=>{a[n]||(a[n]={})})}function ge(a,e,n){!a[e]&&n&&(a[e]=n)}function Bl(a){return typeof a!="string"||!a.startsWith("hsl")?a:Dy(a)}function Oa(a,e){`${e}Channel`in a||(a[`${e}Channel`]=Fl(Bl(a[e])))}function q1(a){return typeof a=="number"?`${a}px`:typeof a=="string"||typeof a=="function"||Array.isArray(a)?a:"8px"}const ia=a=>{try{return a()}catch{}},j1=(a="mui")=>c1(a);function zh(a,e,n,r,o){if(!n)return;n=n===!0?{}:n;const c=o==="dark"?"dark":"light";if(!r){e[o]=G1({...n,palette:{mode:c,...n?.palette},colorSpace:a});return}const{palette:f,...d}=Tp({...r,palette:{mode:c,...n?.palette},colorSpace:a});return e[o]={...n,palette:f,opacity:{...Fy(c),...n?.opacity},overlays:n?.overlays||By(c)},d}function Y1(a={},...e){const{colorSchemes:n={light:!0},defaultColorScheme:r,disableCssColorScheme:o=!1,cssVarPrefix:c="mui",nativeColor:f=!1,shouldSkipGeneratingVar:d=V1,colorSchemeSelector:m=n.light&&n.dark?"media":void 0,rootSelector:p=":root",...v}=a,g=Object.keys(n)[0],x=r||(n.light&&g!=="light"?"light":g),M=j1(c),{[x]:T,light:E,dark:b,...y}=n,P={...y};let B=T;if((x==="dark"&&!("dark"in n)||x==="light"&&!("light"in n))&&(B=!0),!B)throw new Error(hs(21,x));let U;f&&(U="oklch");const z=zh(U,P,B,v,x);E&&!P.light&&zh(U,P,E,void 0,"light"),b&&!P.dark&&zh(U,P,b,void 0,"dark");let L={defaultColorScheme:x,...z,cssVarPrefix:c,colorSchemeSelector:m,rootSelector:p,getCssVar:M,colorSchemes:P,font:{...M1(z.typography),...z.font},spacing:q1(v.spacing)};Object.keys(L.colorSchemes).forEach(k=>{const A=L.colorSchemes[k].palette,W=ee=>{const F=ee.split("-"),V=F[1],ne=F[2];return M(ee,A[V][ne])};A.mode==="light"&&(ge(A.common,"background","#fff"),ge(A.common,"onBackground","#000")),A.mode==="dark"&&(ge(A.common,"background","#000"),ge(A.common,"onBackground","#fff"));function q(ee,F,V){if(U){let ne;return ee===Qr&&(ne=`transparent ${((1-V)*100).toFixed(0)}%`),ee===kt&&(ne=`#000 ${(V*100).toFixed(0)}%`),ee===Xt&&(ne=`#fff ${(V*100).toFixed(0)}%`),`color-mix(in ${U}, ${F}, ${ne})`}return ee(F,V)}if(W1(A,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),A.mode==="light"){ge(A.Alert,"errorColor",q(kt,A.error.light,.6)),ge(A.Alert,"infoColor",q(kt,A.info.light,.6)),ge(A.Alert,"successColor",q(kt,A.success.light,.6)),ge(A.Alert,"warningColor",q(kt,A.warning.light,.6)),ge(A.Alert,"errorFilledBg",W("palette-error-main")),ge(A.Alert,"infoFilledBg",W("palette-info-main")),ge(A.Alert,"successFilledBg",W("palette-success-main")),ge(A.Alert,"warningFilledBg",W("palette-warning-main")),ge(A.Alert,"errorFilledColor",ia(()=>A.getContrastText(A.error.main))),ge(A.Alert,"infoFilledColor",ia(()=>A.getContrastText(A.info.main))),ge(A.Alert,"successFilledColor",ia(()=>A.getContrastText(A.success.main))),ge(A.Alert,"warningFilledColor",ia(()=>A.getContrastText(A.warning.main))),ge(A.Alert,"errorStandardBg",q(Xt,A.error.light,.9)),ge(A.Alert,"infoStandardBg",q(Xt,A.info.light,.9)),ge(A.Alert,"successStandardBg",q(Xt,A.success.light,.9)),ge(A.Alert,"warningStandardBg",q(Xt,A.warning.light,.9)),ge(A.Alert,"errorIconColor",W("palette-error-main")),ge(A.Alert,"infoIconColor",W("palette-info-main")),ge(A.Alert,"successIconColor",W("palette-success-main")),ge(A.Alert,"warningIconColor",W("palette-warning-main")),ge(A.AppBar,"defaultBg",W("palette-grey-100")),ge(A.Avatar,"defaultBg",W("palette-grey-400")),ge(A.Button,"inheritContainedBg",W("palette-grey-300")),ge(A.Button,"inheritContainedHoverBg",W("palette-grey-A100")),ge(A.Chip,"defaultBorder",W("palette-grey-400")),ge(A.Chip,"defaultAvatarColor",W("palette-grey-700")),ge(A.Chip,"defaultIconColor",W("palette-grey-700")),ge(A.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),ge(A.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),ge(A.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),ge(A.LinearProgress,"primaryBg",q(Xt,A.primary.main,.62)),ge(A.LinearProgress,"secondaryBg",q(Xt,A.secondary.main,.62)),ge(A.LinearProgress,"errorBg",q(Xt,A.error.main,.62)),ge(A.LinearProgress,"infoBg",q(Xt,A.info.main,.62)),ge(A.LinearProgress,"successBg",q(Xt,A.success.main,.62)),ge(A.LinearProgress,"warningBg",q(Xt,A.warning.main,.62)),ge(A.Skeleton,"bg",U?q(Qr,A.text.primary,.11):`rgba(${W("palette-text-primaryChannel")} / 0.11)`),ge(A.Slider,"primaryTrack",q(Xt,A.primary.main,.62)),ge(A.Slider,"secondaryTrack",q(Xt,A.secondary.main,.62)),ge(A.Slider,"errorTrack",q(Xt,A.error.main,.62)),ge(A.Slider,"infoTrack",q(Xt,A.info.main,.62)),ge(A.Slider,"successTrack",q(Xt,A.success.main,.62)),ge(A.Slider,"warningTrack",q(Xt,A.warning.main,.62));const ee=U?q(kt,A.background.default,.6825):xu(A.background.default,.8);ge(A.SnackbarContent,"bg",ee),ge(A.SnackbarContent,"color",ia(()=>U?Ep.text.primary:A.getContrastText(ee))),ge(A.SpeedDialAction,"fabHoverBg",xu(A.background.paper,.15)),ge(A.StepConnector,"border",W("palette-grey-400")),ge(A.StepContent,"border",W("palette-grey-400")),ge(A.Switch,"defaultColor",W("palette-common-white")),ge(A.Switch,"defaultDisabledColor",W("palette-grey-100")),ge(A.Switch,"primaryDisabledColor",q(Xt,A.primary.main,.62)),ge(A.Switch,"secondaryDisabledColor",q(Xt,A.secondary.main,.62)),ge(A.Switch,"errorDisabledColor",q(Xt,A.error.main,.62)),ge(A.Switch,"infoDisabledColor",q(Xt,A.info.main,.62)),ge(A.Switch,"successDisabledColor",q(Xt,A.success.main,.62)),ge(A.Switch,"warningDisabledColor",q(Xt,A.warning.main,.62)),ge(A.TableCell,"border",q(Xt,q(Qr,A.divider,1),.88)),ge(A.Tooltip,"bg",q(Qr,A.grey[700],.92))}if(A.mode==="dark"){ge(A.Alert,"errorColor",q(Xt,A.error.light,.6)),ge(A.Alert,"infoColor",q(Xt,A.info.light,.6)),ge(A.Alert,"successColor",q(Xt,A.success.light,.6)),ge(A.Alert,"warningColor",q(Xt,A.warning.light,.6)),ge(A.Alert,"errorFilledBg",W("palette-error-dark")),ge(A.Alert,"infoFilledBg",W("palette-info-dark")),ge(A.Alert,"successFilledBg",W("palette-success-dark")),ge(A.Alert,"warningFilledBg",W("palette-warning-dark")),ge(A.Alert,"errorFilledColor",ia(()=>A.getContrastText(A.error.dark))),ge(A.Alert,"infoFilledColor",ia(()=>A.getContrastText(A.info.dark))),ge(A.Alert,"successFilledColor",ia(()=>A.getContrastText(A.success.dark))),ge(A.Alert,"warningFilledColor",ia(()=>A.getContrastText(A.warning.dark))),ge(A.Alert,"errorStandardBg",q(kt,A.error.light,.9)),ge(A.Alert,"infoStandardBg",q(kt,A.info.light,.9)),ge(A.Alert,"successStandardBg",q(kt,A.success.light,.9)),ge(A.Alert,"warningStandardBg",q(kt,A.warning.light,.9)),ge(A.Alert,"errorIconColor",W("palette-error-main")),ge(A.Alert,"infoIconColor",W("palette-info-main")),ge(A.Alert,"successIconColor",W("palette-success-main")),ge(A.Alert,"warningIconColor",W("palette-warning-main")),ge(A.AppBar,"defaultBg",W("palette-grey-900")),ge(A.AppBar,"darkBg",W("palette-background-paper")),ge(A.AppBar,"darkColor",W("palette-text-primary")),ge(A.Avatar,"defaultBg",W("palette-grey-600")),ge(A.Button,"inheritContainedBg",W("palette-grey-800")),ge(A.Button,"inheritContainedHoverBg",W("palette-grey-700")),ge(A.Chip,"defaultBorder",W("palette-grey-700")),ge(A.Chip,"defaultAvatarColor",W("palette-grey-300")),ge(A.Chip,"defaultIconColor",W("palette-grey-300")),ge(A.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),ge(A.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),ge(A.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),ge(A.LinearProgress,"primaryBg",q(kt,A.primary.main,.5)),ge(A.LinearProgress,"secondaryBg",q(kt,A.secondary.main,.5)),ge(A.LinearProgress,"errorBg",q(kt,A.error.main,.5)),ge(A.LinearProgress,"infoBg",q(kt,A.info.main,.5)),ge(A.LinearProgress,"successBg",q(kt,A.success.main,.5)),ge(A.LinearProgress,"warningBg",q(kt,A.warning.main,.5)),ge(A.Skeleton,"bg",U?q(Qr,A.text.primary,.13):`rgba(${W("palette-text-primaryChannel")} / 0.13)`),ge(A.Slider,"primaryTrack",q(kt,A.primary.main,.5)),ge(A.Slider,"secondaryTrack",q(kt,A.secondary.main,.5)),ge(A.Slider,"errorTrack",q(kt,A.error.main,.5)),ge(A.Slider,"infoTrack",q(kt,A.info.main,.5)),ge(A.Slider,"successTrack",q(kt,A.success.main,.5)),ge(A.Slider,"warningTrack",q(kt,A.warning.main,.5));const ee=U?q(Xt,A.background.default,.985):xu(A.background.default,.98);ge(A.SnackbarContent,"bg",ee),ge(A.SnackbarContent,"color",ia(()=>U?Ly.text.primary:A.getContrastText(ee))),ge(A.SpeedDialAction,"fabHoverBg",xu(A.background.paper,.15)),ge(A.StepConnector,"border",W("palette-grey-600")),ge(A.StepContent,"border",W("palette-grey-600")),ge(A.Switch,"defaultColor",W("palette-grey-300")),ge(A.Switch,"defaultDisabledColor",W("palette-grey-600")),ge(A.Switch,"primaryDisabledColor",q(kt,A.primary.main,.55)),ge(A.Switch,"secondaryDisabledColor",q(kt,A.secondary.main,.55)),ge(A.Switch,"errorDisabledColor",q(kt,A.error.main,.55)),ge(A.Switch,"infoDisabledColor",q(kt,A.info.main,.55)),ge(A.Switch,"successDisabledColor",q(kt,A.success.main,.55)),ge(A.Switch,"warningDisabledColor",q(kt,A.warning.main,.55)),ge(A.TableCell,"border",q(kt,q(Qr,A.divider,1),.68)),ge(A.Tooltip,"bg",q(Qr,A.grey[700],.92))}Oa(A.background,"default"),Oa(A.background,"paper"),Oa(A.common,"background"),Oa(A.common,"onBackground"),Oa(A,"divider"),Object.keys(A).forEach(ee=>{const F=A[ee];ee!=="tonalOffset"&&F&&typeof F=="object"&&(F.main&&ge(A[ee],"mainChannel",Fl(Bl(F.main))),F.light&&ge(A[ee],"lightChannel",Fl(Bl(F.light))),F.dark&&ge(A[ee],"darkChannel",Fl(Bl(F.dark))),F.contrastText&&ge(A[ee],"contrastTextChannel",Fl(Bl(F.contrastText))),ee==="text"&&(Oa(A[ee],"primary"),Oa(A[ee],"secondary")),ee==="action"&&(F.active&&Oa(A[ee],"active"),F.selected&&Oa(A[ee],"selected")))})}),L=e.reduce((k,A)=>_i(k,A),L);const O={prefix:c,disableCssColorScheme:o,shouldSkipGeneratingVar:d,getSelector:X1(L),enableContrastVars:f},{vars:Q,generateThemeVars:C,generateStyleSheets:D}=d1(L,O);return L.vars=Q,Object.entries(L.colorSchemes[L.defaultColorScheme]).forEach(([k,A])=>{L[k]=A}),L.generateThemeVars=C,L.generateStyleSheets=D,L.generateSpacing=function(){return Ey(v.spacing,wm(this))},L.getColorSchemeSelector=h1(m),L.spacing=L.generateSpacing(),L.shouldSkipGeneratingVar=d,L.unstable_sxConfig={...tc,...v?.unstable_sxConfig},L.unstable_sx=function(A){return ps({sx:A,theme:this})},L.toRuntimeSource=Py,L}function ix(a,e,n){a.colorSchemes&&n&&(a.colorSchemes[e]={...n!==!0&&n,palette:Lm({...n===!0?{}:n.palette,mode:e})})}function Iy(a={},...e){const{palette:n,cssVariables:r=!1,colorSchemes:o=n?void 0:{light:!0},defaultColorScheme:c=n?.mode,...f}=a,d=c||"light",m=o?.[d],p={...o,...n?{[d]:{...typeof m!="boolean"&&m,palette:n}}:void 0};if(r===!1){if(!("colorSchemes"in a))return Tp(a,...e);let v=n;"palette"in a||p[d]&&(p[d]!==!0?v=p[d].palette:d==="dark"&&(v={mode:"dark"}));const g=Tp({...a,palette:v},...e);return g.defaultColorScheme=d,g.colorSchemes=p,g.palette.mode==="light"&&(g.colorSchemes.light={...p.light!==!0&&p.light,palette:g.palette},ix(g,"dark",p.dark)),g.palette.mode==="dark"&&(g.colorSchemes.dark={...p.dark!==!0&&p.dark,palette:g.palette},ix(g,"light",p.light)),g}return!n&&!("light"in p)&&d==="light"&&(p.light=!0),Y1({...f,colorSchemes:p,defaultColorScheme:d,...typeof r!="boolean"&&r},...e)}const zy=Iy();function gs({props:a,name:e}){return JT({props:a,name:e,defaultTheme:zy,themeId:Mm})}function Z1(a){return a!=="ownerState"&&a!=="theme"&&a!=="sx"&&a!=="as"}const K1=a=>Z1(a)&&a!=="classes",Nr=jT({themeId:Mm,defaultTheme:zy,rootShouldForwardProp:K1}),jl=Je.createContext({});function $1(a){return qa("MuiTimeline",a)}ja("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function Q1(){return Ay}const J1=l1;function eA(a){return o1(a)}function Lr(a){return a==="alternate-reverse"?"positionAlternateReverse":`position${Rr(a)}`}const tA=a=>{const{position:e,classes:n}=a,r={root:["root",e&&Lr(e)]};return Ur(r,$1,n)},nA=Nr("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:n}=a;return[e.root,n.position&&e[Lr(n.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),iA=Je.forwardRef(function(e,n){const r=gs({props:e,name:"MuiTimeline"}),{position:o="right",className:c,...f}=r,d={...r,position:o},m=tA(d),p=Je.useMemo(()=>({position:o}),[o]);return Z.jsx(jl.Provider,{value:p,children:Z.jsx(nA,{className:ma(m.root,c),ownerState:d,ref:n,...f})})});function aA(a){return typeof a.main=="string"}function rA(a,e=[]){if(!aA(a))return!1;for(const n of e)if(!a.hasOwnProperty(n)||typeof a[n]!="string")return!1;return!0}function sA(a=[]){return([,e])=>e&&rA(e,a)}function oA(a){return qa("MuiTypography",a)}ja("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const lA={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},cA=Q1(),uA=a=>{const{align:e,gutterBottom:n,noWrap:r,paragraph:o,variant:c,classes:f}=a,d={root:["root",c,a.align!=="inherit"&&`align${Rr(e)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return Ur(d,oA,f)},fA=Nr("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:n}=a;return[e.root,n.variant&&e[n.variant],n.align!=="inherit"&&e[`align${Rr(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(J1(({theme:a})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(a.typography).filter(([e,n])=>e!=="inherit"&&n&&typeof n=="object").map(([e,n])=>({props:{variant:e},style:n})),...Object.entries(a.palette).filter(sA()).map(([e])=>({props:{color:e},style:{color:(a.vars||a).palette[e].main}})),...Object.entries(a.palette?.text||{}).filter(([,e])=>typeof e=="string").map(([e])=>({props:{color:`text${Rr(e)}`},style:{color:(a.vars||a).palette.text[e]}})),{props:({ownerState:e})=>e.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:e})=>e.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:e})=>e.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:e})=>e.paragraph,style:{marginBottom:16}}]}))),ax={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Vl=Je.forwardRef(function(e,n){const{color:r,...o}=eA({props:e,name:"MuiTypography"}),c=!lA[r],f=cA({...o,...c&&{color:r}}),{align:d="inherit",className:m,component:p,gutterBottom:v=!1,noWrap:g=!1,paragraph:x=!1,variant:M="body1",variantMapping:T=ax,...E}=f,b={...f,align:d,color:r,className:m,component:p,gutterBottom:v,noWrap:g,paragraph:x,variant:M,variantMapping:T},y=p||(x?"p":T[M]||ax[M])||"span",P=uA(b);return Z.jsx(fA,{as:y,ref:n,className:ma(P.root,m),...E,ownerState:b,style:{...d!=="inherit"&&{"--Typography-textAlign":d},...E.style}})});function dA(a){return qa("MuiTimelineContent",a)}const hA=ja("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),pA=a=>{const{position:e,classes:n}=a,r={root:["root",Lr(e)]};return Ur(r,dA,n)},mA=Nr(Vl,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:n}=a;return[e.root,e[Lr(n.position)]]}})(({ownerState:a})=>({flex:1,padding:"6px 16px",textAlign:"left",...a.position==="left"&&{textAlign:"right"}})),gA=Je.forwardRef(function(e,n){const r=gs({props:e,name:"MuiTimelineContent"}),{className:o,...c}=r,{position:f}=Je.useContext(jl),d={...r,position:f||"right"},m=pA(d);return Z.jsx(mA,{component:"div",className:ma(m.root,o),ownerState:d,ref:n,...c})});function vA(a){return qa("MuiTimelineOppositeContent",a)}const _A=ja("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),xA=a=>{const{position:e,classes:n}=a,r={root:["root",Lr(e)]};return Ur(r,vA,n)},yA=Nr(Vl,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:n}=a;return[e.root,e[Lr(n.position)]]}})(({ownerState:a})=>({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1,...a.position==="left"&&{textAlign:"left"}})),Hy=Je.forwardRef(function(e,n){const r=gs({props:e,name:"MuiTimelineOppositeContent"}),{className:o,...c}=r,{position:f}=Je.useContext(jl),d={...r,position:f||"left"},m=xA(d);return Z.jsx(yA,{component:"div",className:ma(m.root,o),ownerState:d,ref:n,...c})});Hy.muiName="TimelineOppositeContent";function SA(a){return qa("MuiTimelineItem",a)}ja("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]);const bA=a=>{const{position:e,classes:n,hasOppositeContent:r}=a,o={root:["root",Lr(e),!r&&"missingOppositeContent"]};return Ur(o,SA,n)},MA=Nr("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:n}=a;return[e.root,e[Lr(n.position)]]}})(({ownerState:a})=>({listStyle:"none",display:"flex",position:"relative",minHeight:70,...a.position==="left"&&{flexDirection:"row-reverse"},...(a.position==="alternate"||a.position==="alternate-reverse")&&{[`&:nth-of-type(${a.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${hA.root}`]:{textAlign:"right"},[`& .${_A.root}`]:{textAlign:"left"}}},...!a.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}}})),EA=Je.forwardRef(function(e,n){const r=gs({props:e,name:"MuiTimelineItem"}),{position:o,className:c,...f}=r,{position:d}=Je.useContext(jl);let m=!1;Je.Children.forEach(r.children,x=>{p1(x,["TimelineOppositeContent"])&&(m=!0)});const p={...r,position:o||d||"right",hasOppositeContent:m},v=bA(p),g=Je.useMemo(()=>({position:p.position}),[p.position]);return Z.jsx(jl.Provider,{value:g,children:Z.jsx(MA,{className:ma(v.root,c),ownerState:p,ref:n,...f})})});function TA(a){return qa("MuiTimelineSeparator",a)}ja("MuiTimelineSeparator",["root"]);const AA=a=>{const{classes:e}=a;return Ur({root:["root"]},TA,e)},CA=Nr("div",{name:"MuiTimelineSeparator",slot:"Root"})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),RA=Je.forwardRef(function(e,n){const r=gs({props:e,name:"MuiTimelineSeparator"}),{className:o,...c}=r,f=r,d=AA(f);return Z.jsx(CA,{className:ma(d.root,o),ownerState:f,ref:n,...c})});function wA(a){return qa("MuiTimelineConnector",a)}ja("MuiTimelineConnector",["root"]);const DA=a=>{const{classes:e}=a;return Ur({root:["root"]},wA,e)},UA=Nr("span",{name:"MuiTimelineConnector",slot:"Root"})(({theme:a})=>({width:2,backgroundColor:(a.vars||a).palette.grey[400],flexGrow:1})),rx=Je.forwardRef(function(e,n){const r=gs({props:e,name:"MuiTimelineConnector"}),{className:o,...c}=r,f=r,d=DA(f);return Z.jsx(UA,{className:ma(d.root,o),ownerState:f,ref:n,...c})});function NA(a){return qa("MuiTimelineDot",a)}ja("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const LA=a=>{const{color:e,variant:n,classes:r}=a,o={root:["root",n,e!=="inherit"&&`${n}${Rr(e)}`]};return Ur(o,NA,r)},OA=Nr("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:n}=a;return[e.root,e[n.color!=="inherit"&&`${n.variant}${Rr(n.color)}`],e[n.variant]]}})(({ownerState:a,theme:e})=>({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(e.vars||e).shadows[1],margin:"11.5px 0",...a.variant==="filled"&&{borderColor:"transparent",...a.color!=="inherit"&&{...a.color==="grey"?{color:(e.vars||e).palette.grey[50],backgroundColor:(e.vars||e).palette.grey[400]}:{color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main}}},...a.variant==="outlined"&&{boxShadow:"none",backgroundColor:"transparent",...a.color!=="inherit"&&{...a.color==="grey"?{borderColor:(e.vars||e).palette.grey[400]}:{borderColor:(e.vars||e).palette[a.color].main}}}})),PA=Je.forwardRef(function(e,n){const r=gs({props:e,name:"MuiTimelineDot"}),{className:o,color:c="grey",variant:f="filled",...d}=r,m={...r,color:c,variant:f},p=LA(m);return Z.jsx(OA,{className:ma(p.root,o),ownerState:m,ref:n,...d})}),FA=ja("MuiBox",["root"]),BA=Iy(),IA=VT({themeId:Mm,defaultTheme:BA,defaultClassName:FA.root,generateClassName:Cy.generate});function zA({title:a,description:e,duration:n,showTime:r=!0,refProp:o}){return Z.jsxs(EA,{className:"timeline-item",ref:o,children:[r&&Z.jsx(Hy,{className:"timeline-time",variant:"body2"}),Z.jsxs(RA,{children:[Z.jsx(rx,{className:"timeline-connector"}),Z.jsx(PA,{variant:"outlined",className:"timeline-dot"}),Z.jsx(rx,{className:"timeline-connector"})]}),Z.jsx(gA,{className:"timeline-content",children:Z.jsxs(IA,{className:"glass-card",children:[Z.jsx(Vl,{variant:"h6",className:"timeline-title",children:Z.jsx("h3",{className:"inknut-antiqua-bold",children:a})}),n&&Z.jsx(Vl,{className:"timeline-title",children:Z.jsx("h4",{className:"inknut-antiqua-medium",children:n})}),Z.jsx(Vl,{className:"timeline-description",children:Z.jsx("h4",{className:"inknut-antiqua-regular",children:e})})]})})]})}function HA(){const a=Je.useRef([]),e=[{title:"Eat",description:"Sample description text...Sample description text...Sample description text...",duration:"Jan 2025 - Dec 2026"},{title:"Code",description:"Because it's awesome!"},{title:"Sleep",description:"Because you need rest"},{title:"Repeat",description:"Because this is the life you love!"}];return Je.useEffect(()=>{const n=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&(o.target.classList.add("visible"),n.unobserve(o.target))})},{threshold:.2});return a.current.forEach(r=>r&&n.observe(r)),()=>n.disconnect()},[]),Z.jsx(iA,{position:"alternate",className:"timeline-root",children:e.map((n,r)=>Z.jsx(zA,{refProp:o=>a.current[r]=o,title:n.title,description:n.description,duration:n.duration},r))})}function GA(){return Z.jsxs("div",{class:"experience-div",children:[Z.jsx("h1",{style:{fontFamily:"Aquire"},className:"experience-title",children:"Experience"}),Z.jsx(HA,{})]})}function Hh({inst_name:a,board:e,degree_name:n,cgpa:r,percantage:o,start:c,end:f,inst_img:d,img_setting:m,img_type:p}){return Z.jsxs("div",{className:"ed-card",children:[Z.jsx("div",{className:"ed-right-side",children:Z.jsx("img",{className:"inst-img"+p,src:d,alt:a,style:m?{width:"20rem"}:{}})}),Z.jsxs("div",{className:"ed-left-side libertinus-serif-regular",children:[Z.jsx("h2",{className:"ed-inst libertinus-serif-bold",children:a}),Z.jsx("p",{className:"board",children:e}),Z.jsx("p",{className:"degreeName",children:n})]}),Z.jsxs("div",{className:"ed-mid-side libertinus-serif-bold",children:[Z.jsxs("span",{className:"ed-duration",children:[c,f&&Z.jsxs(Z.Fragment,{children:["–",f]})]}),Z.jsxs("div",{className:"ed-score",children:[r&&Z.jsxs("span",{children:["CGPA: ",Z.jsx("strong",{children:r})]}),o&&Z.jsx("span",{children:Z.jsxs("strong",{children:[o,"%"]})})]})]})]})}function VA(){return Z.jsxs("div",{className:"Education",children:[Z.jsx(Hh,{inst_name:"VIT Bhopal University",degree_name:"Computer Science and Engineering",board:"Bachelor in Technology",cgpa:"9.46",start:"2023",end:"2027",inst_img:"VitBhopalImage2.png",img_setting:"small",img_type:"large"}),Z.jsx(Hh,{inst_name:"Adarsh World School",board:"Central Board Of Secondary Education",degree_name:"Senior Secondary Examination (Class XII)",percantage:"93.5",start:"2023",inst_img:"CBSE_new_logo.svg.png",img_type:"small"}),Z.jsx(Hh,{inst_name:"Adarsh World School",board:"Central Board Of Secondary Education",degree_name:"Secondary Examination (Class X)",percantage:"97.4",start:"2021",inst_img:"CBSE_new_logo.svg.png",img_type:"small"})]})}function kA({tech:a}){return Z.jsx("span",{className:"tech-element glass-tech google-sans-code",children:a})}function XA({title:a,image:e,github:n,live:r,tech:o=[],desc:c,date:f,status:d,learned:m,role:p}){const[v,g]=Je.useState(!1);return Z.jsx("div",{className:`card ${v?"flipped":""}`,onClick:()=>g(!v),children:Z.jsxs("div",{className:"card-inner",children:[Z.jsx("div",{className:"card-front",style:{backgroundImage:`url(${e})`},children:Z.jsxs("div",{className:"overlay glass-overlay",children:[Z.jsxs("div",{children:[Z.jsx("h3",{className:"limelight-regular projectTitle",style:{fontFamily:"Aquire"},children:a}),Z.jsx("p",{className:"status-badge",children:d})]}),Z.jsx("div",{className:"tech",children:o.map((x,M)=>Z.jsx(kA,{tech:x},M))}),Z.jsxs("div",{className:"actions",children:[n&&Z.jsx("a",{href:n,target:"_blank",onClick:x=>x.stopPropagation(),className:"google-sans-code",children:"GitHub"}),r&&Z.jsx("a",{href:r,target:"_blank",onClick:x=>x.stopPropagation(),children:"Live"})]})]})}),Z.jsxs("div",{className:"card-back glass-back",children:[Z.jsx("h3",{className:"limelight-regular",children:a}),Z.jsx("p",{children:c}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Role:"})," ",p]}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Learned:"})," ",m]}),Z.jsxs("p",{children:[Z.jsx("strong",{children:"Date:"})," ",f]})]})]})})}const sx=[{title:"Indian States Game",categories:["Frontend"],status:null,learned:"Built interactive UI with Python, Tkinter, and JS logic to manage score and highlight missing states.",role:"Solo Project",image:"",github:"https://github.com/samarth96k/Indian-States-Game",live:"https://samarth96k.github.io/Indian-States-Game/",tech:["Python","HTML","CSS","JavaScript","Tkinter"],desc:"An interactive learning game that helps students learn Indian states, with score tracking and a final summary highlighting unguessed states in red.",date:"2023"},{title:"Driver Drowsiness Detection System",categories:["Machine Learning","Computer Vision"],status:null,learned:"Implemented real-time detection using OpenCV, YOLO, Vision Transformer, and integrated Google Health API for heartbeat analysis.",role:"Team Project",image:"/images/driver-drowsiness.png",github:"https://github.com/samarth96k/Driver_Drowsiness_Detection",live:null,tech:["Python","Machine Learning","OpenCV","YOLO","Vision Transformer"],desc:"A real-time driver drowsiness detection system using computer vision, ML models, and Google Health API data to analyze eye closure, yawning, and heart-rate patterns. Achieves ~92% accuracy and triggers alarms and emergency alerts during prolonged drowsiness.",date:"2023"},{title:"Portfolio Website",categories:["React","Frontend"],status:null,learned:"Built a responsive portfolio using React, improving component-based design and CSS styling skills.",role:"Solo Project",image:"/images/portfolio.png",github:"https://github.com/samarth96k/portfolio",live:"https://samarth96k.github.io/portfolio",tech:["React","JavaScript","CSS"],desc:"A modern, responsive personal portfolio showcasing my projects, skills, and experience, built with React for smooth UI interactions.",date:"2024"},{title:"Drum App",categories:["Frontend"],status:null,learned:"Practiced JS event listeners and DOM manipulation to create interactive audio-based UI.",role:"Solo Project",image:"/images/drum-app.png",github:"https://github.com/samarth96k/Drum-Game",live:"https://samarth96k.github.io/Drum-Game/",tech:["HTML","CSS","JavaScript"],desc:"A simple yet impactful frontend project that simulates a virtual drum kit using clicks and keyboard events. Built to practice JS fundamentals like event listeners and DOM interactions, and boosted my confidence in frontend development.",date:"2023"},{title:"CGPA Calculator App",categories:["JavaScript","Frontend"],status:null,learned:"Handled edge cases like missing grades/credits while computing results, improving logic and DOM manipulation skills.",role:"Solo Project",image:"/images/cgpa-calculator.png",github:"https://github.com/samarth96k/cgpa-calc-test",live:"https://samarth96k.github.io/cgpa-calc-test/",tech:["HTML","CSS","JavaScript"],desc:"A browser-based CGPA calculator that handles edge cases like missing grades or credits while computing results accurately. Built with clean JS logic to ensure seamless validation and error handling.",date:"2025"},{title:"Blog Project",categories:["Full Stack","JavaScript"],status:null,learned:"Implemented dynamic views with Node.js, Express, and EJS. Learned modal-based UI and prepared for multi-user authentication.",role:"Solo Project",image:"/images/blog-project.png",github:"https://github.com/samarth96k/Blog-Project",live:null,tech:["HTML","CSS","JavaScript","Node.js","Express","EJS"],desc:"A full-stack blogging platform built with Node.js, Express, and EJS, featuring dynamic views and a modal-based interface for creating new posts. Designed to refine backend fundamentals and frontend skills, with upcoming support for multi-user authentication.",date:"2025"}];function WA(){const[a,e]=Je.useState("All"),n=Je.useRef([]),r=a==="All"?sx:sx.filter(o=>o.categories.includes(a));return Je.useEffect(()=>{const o=new IntersectionObserver(c=>{c.forEach(f=>{f.isIntersecting&&(f.target.classList.add("visible"),o.unobserve(f.target))})},{threshold:.2});return n.current.forEach(c=>c&&o.observe(c)),()=>o.disconnect()},[r]),Z.jsxs("div",{className:"projects-container glass-section",children:[Z.jsx("div",{className:"projectContainerTitle",style:{fontFamily:"Aquire-bold",fontSize:"50px"},children:"My Projects Archive"}),Z.jsx("div",{className:"filters glass-filters inknut-antiqua-light",style:{fontSize:"12px"},children:["All","React","JavaScript","Frontend","Machine Learning","Full Stack"].map(o=>Z.jsx("button",{className:a===o?"active":"",onClick:()=>e(o),children:o},o))}),Z.jsx("p",{className:"libertinus-serif-regular-italic hint-text",children:"(Tap on the cards for more information)"}),Z.jsx("div",{className:"project-grid",children:r.map((o,c)=>Z.jsx("div",{ref:f=>n.current[c]=f,className:"fade-card",children:Z.jsx(XA,{title:o.title,image:o.image,github:o.github,live:o.live,tech:o.tech,desc:o.desc,date:o.date,categories:o.categories,status:o.status,learned:o.learned,role:o.role})},c))})]})}function qA(){const[a,e]=Je.useState({fullName:"",email:"",enquiryType:"General_Enquiry",phone:"",message:""}),n=f=>{e({...a,[f.target.name]:f.target.value})},r=()=>`
Name: ${a.fullName}
Email: ${a.email}
Phone: ${a.phone}
Enquiry Type: ${a.enquiryType}

Message:
${a.message}
    `,o=()=>{const f="samarthkhandelwal880@gmail.com",d=encodeURIComponent("New Portfolio Enquiry"),m=encodeURIComponent(r());window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${f}&su=${d}&body=${m}`,"_blank")},c=()=>{const f=encodeURIComponent(r());window.open(`https://wa.me/919773959744?text=${f}`,"_blank")};return Z.jsx("div",{className:"contact-form",children:Z.jsxs("form",{onSubmit:f=>f.preventDefault(),children:[Z.jsx("input",{type:"text",name:"fullName",placeholder:"Full Name",value:a.fullName,onChange:n,required:!0}),Z.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:a.email,onChange:n,required:!0}),Z.jsxs("select",{name:"enquiryType",value:a.enquiryType,onChange:n,children:[Z.jsx("option",{value:"General_Enquiry",children:"General Enquiry"}),Z.jsx("option",{value:"Collaboration_Request",children:"Collaboration Request"}),Z.jsx("option",{value:"Feedback",children:"Feedback"}),Z.jsx("option",{value:"Bug_Report",children:"Bug Report"})]}),Z.jsx("input",{type:"text",name:"phone",placeholder:"Phone Number",value:a.phone,onChange:n}),Z.jsx("textarea",{name:"message",placeholder:"Your Message",rows:"4",value:a.message,onChange:n,required:!0}),Z.jsxs("div",{className:"contact-buttons",children:[Z.jsx("button",{type:"button",onClick:o,children:"Send via Gmail"}),Z.jsx("button",{type:"button",onClick:c,children:"Send via WhatsApp"})]})]})})}function jA(){return Z.jsxs("div",{children:[Z.jsx("div",{className:"contact-top",style:{fontFamily:"Aquire"},children:"Let's Connect"}),Z.jsxs("div",{className:"contact-div",children:[Z.jsx("div",{className:"contact-left",children:Z.jsx(qA,{})}),Z.jsxs("div",{className:"contact-right",children:[Z.jsx("h2",{className:"contact-heading",style:{fontFamily:"Aquire-Light"},children:"Get in touch"}),Z.jsxs("div",{className:"contact-item-wrapper",children:[Z.jsx("span",{className:"contact-label inknut-antiqua-medium",children:"Email"}),Z.jsx("a",{className:"contact-item",children:"Samarthkhandelwal880@gmail.com"})]}),Z.jsxs("div",{className:"contact-item-wrapper",children:[Z.jsx("span",{className:"contact-label inknut-antiqua-medium inknut-antiqua-medium",children:"Phone"}),Z.jsx("a",{href:"tel:+919773959744",className:"contact-item",children:"+91 97739 59744"})]}),Z.jsxs("div",{className:"contact-item-wrapper",children:[Z.jsx("span",{className:"contact-label inknut-antiqua-medium",children:"Location"}),Z.jsx("div",{className:"contact-item inknut-antiqua-medium",children:"Delhi, India"})]}),Z.jsx("div",{className:"formaticons",children:Z.jsx(bm,{})})]})]})]})}function YA(){return Z.jsxs("div",{className:"footer",children:[Z.jsx("div",{className:"footer-line"}),Z.jsxs("div",{className:"footer-top",children:[Z.jsx("div",{className:"mid-topbar",children:Z.jsx("p",{className:"topbar-name cedarville-cursive-regular",children:"Samarth Khandelwal"})}),Z.jsx("div",{className:"footer-icons",children:Z.jsx(bm,{})})]}),Z.jsx("div",{className:"footer-bottom inknut-antiqua-medium",children:"Made With ❤️ by Samarth!"})]})}const Om="182",ZA=0,ox=1,KA=2,ju=1,$A=2,Il=3,Dr=0,ii=1,Ha=2,Ga=0,So=1,Ap=2,lx=3,cx=4,QA=5,ss=100,JA=101,eC=102,tC=103,nC=104,iC=200,aC=201,rC=202,sC=203,Cp=204,Rp=205,oC=206,lC=207,cC=208,uC=209,fC=210,dC=211,hC=212,pC=213,mC=214,wp=0,Dp=1,Up=2,Eo=3,Np=4,Lp=5,Op=6,Pp=7,Gy=0,gC=1,vC=2,fa=0,Vy=1,ky=2,Xy=3,Wy=4,qy=5,jy=6,Yy=7,Zy=300,ms=301,To=302,Fp=303,Bp=304,bf=306,Ip=1e3,gi=1001,zp=1002,Gn=1003,_C=1004,yu=1005,Mn=1006,Gh=1007,cs=1008,Ni=1009,Ky=1010,$y=1011,Yl=1012,Pm=1013,da=1014,ji=1015,ha=1016,Fm=1017,Bm=1018,Zl=1020,Qy=35902,Jy=35899,eS=1021,tS=1022,Li=1023,Xa=1026,us=1027,nS=1028,Im=1029,Ao=1030,zm=1031,Hm=1033,Yu=33776,Zu=33777,Ku=33778,$u=33779,Hp=35840,Gp=35841,Vp=35842,kp=35843,Xp=36196,Wp=37492,qp=37496,jp=37488,Yp=37489,Zp=37490,Kp=37491,$p=37808,Qp=37809,Jp=37810,em=37811,tm=37812,nm=37813,im=37814,am=37815,rm=37816,sm=37817,om=37818,lm=37819,cm=37820,um=37821,fm=36492,dm=36494,hm=36495,pm=36283,mm=36284,gm=36285,vm=36286,xC=3200,yC=0,SC=1,Ar="",Di="srgb",Co="srgb-linear",nf="linear",Wt="srgb",ao=7680,ux=519,bC=512,MC=513,EC=514,Gm=515,TC=516,AC=517,Vm=518,CC=519,fx=35044,dx="300 es",ca=2e3,af=2001;function iS(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function rf(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function RC(){const a=rf("canvas");return a.style.display="block",a}const hx={};function px(...a){const e="THREE."+a.shift();console.log(e,...a)}function rt(...a){const e="THREE."+a.shift();console.warn(e,...a)}function Ut(...a){const e="THREE."+a.shift();console.error(e,...a)}function Kl(...a){const e=a.join(" ");e in hx||(hx[e]=!0,rt(...a))}function wC(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}class Do{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vh=Math.PI/180,_m=180/Math.PI;function nc(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xn[a&255]+Xn[a>>8&255]+Xn[a>>16&255]+Xn[a>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[n&63|128]+Xn[n>>8&255]+"-"+Xn[n>>16&255]+Xn[n>>24&255]+Xn[r&255]+Xn[r>>8&255]+Xn[r>>16&255]+Xn[r>>24&255]).toLowerCase()}function Et(a,e,n){return Math.max(e,Math.min(n,a))}function DC(a,e){return(a%e+e)%e}function kh(a,e,n){return(1-n)*a+n*e}function Rl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ni(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,n=0){ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*o+e.x,this.y=c*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ic{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,f,d){let m=r[o+0],p=r[o+1],v=r[o+2],g=r[o+3],x=c[f+0],M=c[f+1],T=c[f+2],E=c[f+3];if(d<=0){e[n+0]=m,e[n+1]=p,e[n+2]=v,e[n+3]=g;return}if(d>=1){e[n+0]=x,e[n+1]=M,e[n+2]=T,e[n+3]=E;return}if(g!==E||m!==x||p!==M||v!==T){let b=m*x+p*M+v*T+g*E;b<0&&(x=-x,M=-M,T=-T,E=-E,b=-b);let y=1-d;if(b<.9995){const P=Math.acos(b),B=Math.sin(P);y=Math.sin(y*P)/B,d=Math.sin(d*P)/B,m=m*y+x*d,p=p*y+M*d,v=v*y+T*d,g=g*y+E*d}else{m=m*y+x*d,p=p*y+M*d,v=v*y+T*d,g=g*y+E*d;const P=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=P,p*=P,v*=P,g*=P}}e[n]=m,e[n+1]=p,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,o,c,f){const d=r[o],m=r[o+1],p=r[o+2],v=r[o+3],g=c[f],x=c[f+1],M=c[f+2],T=c[f+3];return e[n]=d*T+v*g+m*M-p*x,e[n+1]=m*T+v*x+p*g-d*M,e[n+2]=p*T+v*M+d*x-m*g,e[n+3]=v*T-d*g-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(o/2),g=d(c/2),x=m(r/2),M=m(o/2),T=m(c/2);switch(f){case"XYZ":this._x=x*v*g+p*M*T,this._y=p*M*g-x*v*T,this._z=p*v*T+x*M*g,this._w=p*v*g-x*M*T;break;case"YXZ":this._x=x*v*g+p*M*T,this._y=p*M*g-x*v*T,this._z=p*v*T-x*M*g,this._w=p*v*g+x*M*T;break;case"ZXY":this._x=x*v*g-p*M*T,this._y=p*M*g+x*v*T,this._z=p*v*T+x*M*g,this._w=p*v*g-x*M*T;break;case"ZYX":this._x=x*v*g-p*M*T,this._y=p*M*g+x*v*T,this._z=p*v*T-x*M*g,this._w=p*v*g+x*M*T;break;case"YZX":this._x=x*v*g+p*M*T,this._y=p*M*g+x*v*T,this._z=p*v*T-x*M*g,this._w=p*v*g-x*M*T;break;case"XZY":this._x=x*v*g-p*M*T,this._y=p*M*g-x*v*T,this._z=p*v*T+x*M*g,this._w=p*v*g+x*M*T;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],f=n[1],d=n[5],m=n[9],p=n[2],v=n[6],g=n[10],x=r+d+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-o)*M}else if(r>d&&r>g){const M=2*Math.sqrt(1+r-d-g);this._w=(v-m)/M,this._x=.25*M,this._y=(o+f)/M,this._z=(c+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-r-g);this._w=(c-p)/M,this._x=(o+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-r-d);this._w=(f-o)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,f=e._w,d=n._x,m=n._y,p=n._z,v=n._w;return this._x=r*v+f*d+o*p-c*m,this._y=o*v+f*m+c*d-r*p,this._z=c*v+f*p+r*m-o*d,this._w=f*v-r*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,f=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,f=-f,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,n=Math.sin(n*p)/v,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,n=0,r=0){ue.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*o-d*r),v=2*(d*n-c*o),g=2*(c*r-f*n);return this.x=n+m*p+f*g-d*v,this.y=r+m*v+d*p-c*g,this.z=o+m*g+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,f=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*f-r*m,this.z=r*d-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Xh.copy(this).projectOnVector(e),this.sub(Xh)}reflect(e){return this.sub(Xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xh=new ue,mx=new ic;class ht{constructor(e,n,r,o,c,f,d,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,d,m,p)}set(e,n,r,o,c,f,d,m,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=n,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],v=r[4],g=r[7],x=r[2],M=r[5],T=r[8],E=o[0],b=o[3],y=o[6],P=o[1],B=o[4],U=o[7],z=o[2],L=o[5],O=o[8];return c[0]=f*E+d*P+m*z,c[3]=f*b+d*B+m*L,c[6]=f*y+d*U+m*O,c[1]=p*E+v*P+g*z,c[4]=p*b+v*B+g*L,c[7]=p*y+v*U+g*O,c[2]=x*E+M*P+T*z,c[5]=x*b+M*B+T*L,c[8]=x*y+M*U+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return n*f*v-n*d*p-r*c*v+r*d*m+o*c*p-o*f*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=v*f-d*p,x=d*m-v*c,M=p*c-f*m,T=n*g+r*x+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=g*E,e[1]=(o*p-v*r)*E,e[2]=(d*r-o*f)*E,e[3]=x*E,e[4]=(v*n-o*m)*E,e[5]=(o*c-d*n)*E,e[6]=M*E,e[7]=(r*m-p*n)*E,e[8]=(f*n-r*c)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*d)+f+e,-o*p,o*m,-o*(-p*f+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Wh.makeScale(e,n)),this}rotate(e){return this.premultiply(Wh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wh=new ht,gx=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vx=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UC(){const a={enabled:!0,workingColorSpace:Co,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Wt&&(o.r=Va(o.r),o.g=Va(o.g),o.b=Va(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Wt&&(o.r=bo(o.r),o.g=bo(o.g),o.b=bo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ar?nf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Kl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Kl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Co]:{primaries:e,whitePoint:r,transfer:nf,toXYZ:gx,fromXYZ:vx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:gx,fromXYZ:vx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),a}const Rt=UC();function Va(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function bo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ro;class NC{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ro===void 0&&(ro=rf("canvas")),ro.width=e.width,ro.height=e.height;const o=ro.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ro}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=rf("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=Va(c[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Va(n[r]/255)*255):n[r]=Va(n[r]);return{data:n,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LC=0;class km{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LC++}),this.uuid=nc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,d=o.length;f<d;f++)o[f].isDataTexture?c.push(qh(o[f].image)):c.push(qh(o[f]))}else c=qh(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function qh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?NC.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let OC=0;const jh=new ue;class Zn extends Do{constructor(e=Zn.DEFAULT_IMAGE,n=Zn.DEFAULT_MAPPING,r=gi,o=gi,c=Mn,f=cs,d=Li,m=Ni,p=Zn.DEFAULT_ANISOTROPY,v=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OC++}),this.uuid=nc(),this.name="",this.source=new km(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jh).x}get height(){return this.source.getSize(jh).y}get depth(){return this.source.getSize(jh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){rt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){rt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ip:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case zp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ip:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case zp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Zy;Zn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,n=0,r=0,o=1){fn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,p=m[0],v=m[4],g=m[8],x=m[1],M=m[5],T=m[9],E=m[2],b=m[6],y=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-E)<.01&&Math.abs(T-b)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+E)<.1&&Math.abs(T+b)<.1&&Math.abs(p+M+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const B=(p+1)/2,U=(M+1)/2,z=(y+1)/2,L=(v+x)/4,O=(g+E)/4,Q=(T+b)/4;return B>U&&B>z?B<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(B),o=L/r,c=O/r):U>z?U<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(U),r=L/o,c=Q/o):z<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(z),r=O/c,o=Q/c),this.set(r,o,c,n),this}let P=Math.sqrt((b-T)*(b-T)+(g-E)*(g-E)+(x-v)*(x-v));return Math.abs(P)<.001&&(P=1),this.x=(b-T)/P,this.y=(g-E)/P,this.z=(x-v)/P,this.w=Math.acos((p+M+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this.w=Et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this.w=Et(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PC extends Do{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new fn(0,0,e,n),this.scissorTest=!1,this.viewport=new fn(0,0,e,n);const o={width:e,height:n,depth:r.depth},c=new Zn(o);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new km(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends PC{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class aS extends Zn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FC extends Zn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ac{constructor(e=new ue(1/0,1/0,1/0),n=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Vi):Vi.fromBufferAttribute(c,f),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Su.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Su.copy(r.boundingBox)),Su.applyMatrix4(e.matrixWorld),this.union(Su)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wl),bu.subVectors(this.max,wl),so.subVectors(e.a,wl),oo.subVectors(e.b,wl),lo.subVectors(e.c,wl),yr.subVectors(oo,so),Sr.subVectors(lo,oo),Jr.subVectors(so,lo);let n=[0,-yr.z,yr.y,0,-Sr.z,Sr.y,0,-Jr.z,Jr.y,yr.z,0,-yr.x,Sr.z,0,-Sr.x,Jr.z,0,-Jr.x,-yr.y,yr.x,0,-Sr.y,Sr.x,0,-Jr.y,Jr.x,0];return!Yh(n,so,oo,lo,bu)||(n=[1,0,0,0,1,0,0,0,1],!Yh(n,so,oo,lo,bu))?!1:(Mu.crossVectors(yr,Sr),n=[Mu.x,Mu.y,Mu.z],Yh(n,so,oo,lo,bu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pa=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Vi=new ue,Su=new ac,so=new ue,oo=new ue,lo=new ue,yr=new ue,Sr=new ue,Jr=new ue,wl=new ue,bu=new ue,Mu=new ue,es=new ue;function Yh(a,e,n,r,o){for(let c=0,f=a.length-3;c<=f;c+=3){es.fromArray(a,c);const d=o.x*Math.abs(es.x)+o.y*Math.abs(es.y)+o.z*Math.abs(es.z),m=e.dot(es),p=n.dot(es),v=r.dot(es);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const BC=new ac,Dl=new ue,Zh=new ue;class Mf{constructor(e=new ue,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):BC.setFromPoints(e).getCenter(r);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dl.subVectors(e,this.center);const n=Dl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Dl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dl.copy(e.center).add(Zh)),this.expandByPoint(Dl.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fa=new ue,Kh=new ue,Eu=new ue,br=new ue,$h=new ue,Tu=new ue,Qh=new ue;class rS{constructor(e=new ue,n=new ue(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fa.copy(this.origin).addScaledVector(this.direction,n),Fa.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Kh.copy(e).add(n).multiplyScalar(.5),Eu.copy(n).sub(e).normalize(),br.copy(this.origin).sub(Kh);const c=e.distanceTo(n)*.5,f=-this.direction.dot(Eu),d=br.dot(this.direction),m=-br.dot(Eu),p=br.lengthSq(),v=Math.abs(1-f*f);let g,x,M,T;if(v>0)if(g=f*m-d,x=f*d-m,T=c*v,g>=0)if(x>=-T)if(x<=T){const E=1/v;g*=E,x*=E,M=g*(g+f*x+2*d)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x<=-T?(g=Math.max(0,-(-f*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p):x<=T?(g=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(g=Math.max(0,-(f*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Kh).addScaledVector(Eu,x),M}intersectSphere(e,n){Fa.subVectors(e.center,this.origin);const r=Fa.dot(this.direction),o=Fa.dot(Fa)-r*r,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,f,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||c>o||((c>r||isNaN(r))&&(r=c),(f<o||isNaN(o))&&(o=f),g>=0?(d=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Fa)!==null}intersectTriangle(e,n,r,o,c){$h.subVectors(n,e),Tu.subVectors(r,e),Qh.crossVectors($h,Tu);let f=this.direction.dot(Qh),d;if(f>0){if(o)return null;d=1}else if(f<0)d=-1,f=-f;else return null;br.subVectors(this.origin,e);const m=d*this.direction.dot(Tu.crossVectors(br,Tu));if(m<0)return null;const p=d*this.direction.dot($h.cross(br));if(p<0||m+p>f)return null;const v=-d*br.dot(Qh);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,n,r,o,c,f,d,m,p,v,g,x,M,T,E,b){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,d,m,p,v,g,x,M,T,E,b)}set(e,n,r,o,c,f,d,m,p,v,g,x,M,T,E,b){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=o,y[1]=c,y[5]=f,y[9]=d,y[13]=m,y[2]=p,y[6]=v,y[10]=g,y[14]=x,y[3]=M,y[7]=T,y[11]=E,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/co.setFromMatrixColumn(e,0).length(),c=1/co.setFromMatrixColumn(e,1).length(),f=1/co.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(o),p=Math.sin(o),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=f*v,M=f*g,T=d*v,E=d*g;n[0]=m*v,n[4]=-m*g,n[8]=p,n[1]=M+T*p,n[5]=x-E*p,n[9]=-d*m,n[2]=E-x*p,n[6]=T+M*p,n[10]=f*m}else if(e.order==="YXZ"){const x=m*v,M=m*g,T=p*v,E=p*g;n[0]=x+E*d,n[4]=T*d-M,n[8]=f*p,n[1]=f*g,n[5]=f*v,n[9]=-d,n[2]=M*d-T,n[6]=E+x*d,n[10]=f*m}else if(e.order==="ZXY"){const x=m*v,M=m*g,T=p*v,E=p*g;n[0]=x-E*d,n[4]=-f*g,n[8]=T+M*d,n[1]=M+T*d,n[5]=f*v,n[9]=E-x*d,n[2]=-f*p,n[6]=d,n[10]=f*m}else if(e.order==="ZYX"){const x=f*v,M=f*g,T=d*v,E=d*g;n[0]=m*v,n[4]=T*p-M,n[8]=x*p+E,n[1]=m*g,n[5]=E*p+x,n[9]=M*p-T,n[2]=-p,n[6]=d*m,n[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*p,T=d*m,E=d*p;n[0]=m*v,n[4]=E-x*g,n[8]=T*g+M,n[1]=g,n[5]=f*v,n[9]=-d*v,n[2]=-p*v,n[6]=M*g+T,n[10]=x-E*g}else if(e.order==="XZY"){const x=f*m,M=f*p,T=d*m,E=d*p;n[0]=m*v,n[4]=-g,n[8]=p*v,n[1]=x*g+E,n[5]=f*v,n[9]=M*g-T,n[2]=T*g-M,n[6]=d*v,n[10]=E*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IC,e,zC)}lookAt(e,n,r){const o=this.elements;return hi.subVectors(e,n),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),Mr.crossVectors(r,hi),Mr.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),Mr.crossVectors(r,hi)),Mr.normalize(),Au.crossVectors(hi,Mr),o[0]=Mr.x,o[4]=Au.x,o[8]=hi.x,o[1]=Mr.y,o[5]=Au.y,o[9]=hi.y,o[2]=Mr.z,o[6]=Au.z,o[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],v=r[1],g=r[5],x=r[9],M=r[13],T=r[2],E=r[6],b=r[10],y=r[14],P=r[3],B=r[7],U=r[11],z=r[15],L=o[0],O=o[4],Q=o[8],C=o[12],D=o[1],k=o[5],A=o[9],W=o[13],q=o[2],ee=o[6],F=o[10],V=o[14],ne=o[3],be=o[7],Se=o[11],I=o[15];return c[0]=f*L+d*D+m*q+p*ne,c[4]=f*O+d*k+m*ee+p*be,c[8]=f*Q+d*A+m*F+p*Se,c[12]=f*C+d*W+m*V+p*I,c[1]=v*L+g*D+x*q+M*ne,c[5]=v*O+g*k+x*ee+M*be,c[9]=v*Q+g*A+x*F+M*Se,c[13]=v*C+g*W+x*V+M*I,c[2]=T*L+E*D+b*q+y*ne,c[6]=T*O+E*k+b*ee+y*be,c[10]=T*Q+E*A+b*F+y*Se,c[14]=T*C+E*W+b*V+y*I,c[3]=P*L+B*D+U*q+z*ne,c[7]=P*O+B*k+U*ee+z*be,c[11]=P*Q+B*A+U*F+z*Se,c[15]=P*C+B*W+U*V+z*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],f=e[1],d=e[5],m=e[9],p=e[13],v=e[2],g=e[6],x=e[10],M=e[14],T=e[3],E=e[7],b=e[11],y=e[15],P=m*M-p*x,B=d*M-p*g,U=d*x-m*g,z=f*M-p*v,L=f*x-m*v,O=f*g-d*v;return n*(E*P-b*B+y*U)-r*(T*P-b*z+y*L)+o*(T*B-E*z+y*O)-c*(T*U-E*L+b*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=e[9],x=e[10],M=e[11],T=e[12],E=e[13],b=e[14],y=e[15],P=g*b*p-E*x*p+E*m*M-d*b*M-g*m*y+d*x*y,B=T*x*p-v*b*p-T*m*M+f*b*M+v*m*y-f*x*y,U=v*E*p-T*g*p+T*d*M-f*E*M-v*d*y+f*g*y,z=T*g*m-v*E*m-T*d*x+f*E*x+v*d*b-f*g*b,L=n*P+r*B+o*U+c*z;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=P*O,e[1]=(E*x*c-g*b*c-E*o*M+r*b*M+g*o*y-r*x*y)*O,e[2]=(d*b*c-E*m*c+E*o*p-r*b*p-d*o*y+r*m*y)*O,e[3]=(g*m*c-d*x*c-g*o*p+r*x*p+d*o*M-r*m*M)*O,e[4]=B*O,e[5]=(v*b*c-T*x*c+T*o*M-n*b*M-v*o*y+n*x*y)*O,e[6]=(T*m*c-f*b*c-T*o*p+n*b*p+f*o*y-n*m*y)*O,e[7]=(f*x*c-v*m*c+v*o*p-n*x*p-f*o*M+n*m*M)*O,e[8]=U*O,e[9]=(T*g*c-v*E*c-T*r*M+n*E*M+v*r*y-n*g*y)*O,e[10]=(f*E*c-T*d*c+T*r*p-n*E*p-f*r*y+n*d*y)*O,e[11]=(v*d*c-f*g*c-v*r*p+n*g*p+f*r*M-n*d*M)*O,e[12]=z*O,e[13]=(v*E*o-T*g*o+T*r*x-n*E*x-v*r*b+n*g*b)*O,e[14]=(T*d*o-f*E*o-T*r*m+n*E*m+f*r*b-n*d*b)*O,e[15]=(f*g*o-v*d*o+v*r*m-n*g*m-f*r*x+n*d*x)*O,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,f=e.x,d=e.y,m=e.z,p=c*f,v=c*d;return this.set(p*f+r,p*d-o*m,p*m+o*d,0,p*d+o*m,v*d+r,v*m-o*f,0,p*m-o*d,v*m+o*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,f){return this.set(1,r,c,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,f=n._y,d=n._z,m=n._w,p=c+c,v=f+f,g=d+d,x=c*p,M=c*v,T=c*g,E=f*v,b=f*g,y=d*g,P=m*p,B=m*v,U=m*g,z=r.x,L=r.y,O=r.z;return o[0]=(1-(E+y))*z,o[1]=(M+U)*z,o[2]=(T-B)*z,o[3]=0,o[4]=(M-U)*L,o[5]=(1-(x+y))*L,o[6]=(b+P)*L,o[7]=0,o[8]=(T+B)*O,o[9]=(b-P)*O,o[10]=(1-(x+E))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let c=co.set(o[0],o[1],o[2]).length();const f=co.set(o[4],o[5],o[6]).length(),d=co.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),ki.copy(this);const p=1/c,v=1/f,g=1/d;return ki.elements[0]*=p,ki.elements[1]*=p,ki.elements[2]*=p,ki.elements[4]*=v,ki.elements[5]*=v,ki.elements[6]*=v,ki.elements[8]*=g,ki.elements[9]*=g,ki.elements[10]*=g,n.setFromRotationMatrix(ki),r.x=c,r.y=f,r.z=d,this}makePerspective(e,n,r,o,c,f,d=ca,m=!1){const p=this.elements,v=2*c/(n-e),g=2*c/(r-o),x=(n+e)/(n-e),M=(r+o)/(r-o);let T,E;if(m)T=c/(f-c),E=f*c/(f-c);else if(d===ca)T=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===af)T=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,f,d=ca,m=!1){const p=this.elements,v=2/(n-e),g=2/(r-o),x=-(n+e)/(n-e),M=-(r+o)/(r-o);let T,E;if(m)T=1/(f-c),E=f/(f-c);else if(d===ca)T=-2/(f-c),E=-(f+c)/(f-c);else if(d===af)T=-1/(f-c),E=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const co=new ue,ki=new pn,IC=new ue(0,0,0),zC=new ue(1,1,1),Mr=new ue,Au=new ue,hi=new ue,_x=new pn,xx=new ic;class Wa{constructor(e=0,n=0,r=0,o=Wa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],f=o[4],d=o[8],m=o[1],p=o[5],v=o[9],g=o[2],x=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return _x.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_x,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xx.setFromEuler(this),this.setFromQuaternion(xx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wa.DEFAULT_ORDER="XYZ";class sS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HC=0;const yx=new ue,uo=new ic,Ba=new pn,Cu=new ue,Ul=new ue,GC=new ue,VC=new ic,Sx=new ue(1,0,0),bx=new ue(0,1,0),Mx=new ue(0,0,1),Ex={type:"added"},kC={type:"removed"},fo={type:"childadded",child:null},Jh={type:"childremoved",child:null};class ai extends Do{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HC++}),this.uuid=nc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new ue,n=new Wa,r=new ic,o=new ue(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pn},normalMatrix:{value:new ht}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return uo.setFromAxisAngle(e,n),this.quaternion.multiply(uo),this}rotateOnWorldAxis(e,n){return uo.setFromAxisAngle(e,n),this.quaternion.premultiply(uo),this}rotateX(e){return this.rotateOnAxis(Sx,e)}rotateY(e){return this.rotateOnAxis(bx,e)}rotateZ(e){return this.rotateOnAxis(Mx,e)}translateOnAxis(e,n){return yx.copy(e).applyQuaternion(this.quaternion),this.position.add(yx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sx,e)}translateY(e){return this.translateOnAxis(bx,e)}translateZ(e){return this.translateOnAxis(Mx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ba.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Cu.copy(e):Cu.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ba.lookAt(Ul,Cu,this.up):Ba.lookAt(Cu,Ul,this.up),this.quaternion.setFromRotationMatrix(Ba),o&&(Ba.extractRotation(o.matrixWorld),uo.setFromRotationMatrix(Ba),this.quaternion.premultiply(uo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ex),fo.child=e,this.dispatchEvent(fo),fo.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kC),Jh.child=e,this.dispatchEvent(Jh),Jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ex),fo.child=e,this.dispatchEvent(fo),fo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,e,GC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,VC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),M=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function f(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ai.DEFAULT_UP=new ue(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xi=new ue,Ia=new ue,ep=new ue,za=new ue,ho=new ue,po=new ue,Tx=new ue,tp=new ue,np=new ue,ip=new ue,ap=new fn,rp=new fn,sp=new fn;class qi{constructor(e=new ue,n=new ue,r=new ue){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Xi.subVectors(e,n),o.cross(Xi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Xi.subVectors(o,n),Ia.subVectors(r,n),ep.subVectors(e,n);const f=Xi.dot(Xi),d=Xi.dot(Ia),m=Xi.dot(ep),p=Ia.dot(Ia),v=Ia.dot(ep),g=f*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,M=(p*m-d*v)*x,T=(f*v-d*m)*x;return c.set(1-M-T,T,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,za)===null?!1:za.x>=0&&za.y>=0&&za.x+za.y<=1}static getInterpolation(e,n,r,o,c,f,d,m){return this.getBarycoord(e,n,r,o,za)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,za.x),m.addScaledVector(f,za.y),m.addScaledVector(d,za.z),m)}static getInterpolatedAttribute(e,n,r,o,c,f){return ap.setScalar(0),rp.setScalar(0),sp.setScalar(0),ap.fromBufferAttribute(e,n),rp.fromBufferAttribute(e,r),sp.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(ap,c.x),f.addScaledVector(rp,c.y),f.addScaledVector(sp,c.z),f}static isFrontFacing(e,n,r,o){return Xi.subVectors(r,n),Ia.subVectors(e,n),Xi.cross(Ia).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Ia.subVectors(this.a,this.b),Xi.cross(Ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return qi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let f,d;ho.subVectors(o,r),po.subVectors(c,r),tp.subVectors(e,r);const m=ho.dot(tp),p=po.dot(tp);if(m<=0&&p<=0)return n.copy(r);np.subVectors(e,o);const v=ho.dot(np),g=po.dot(np);if(v>=0&&g<=v)return n.copy(o);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),n.copy(r).addScaledVector(ho,f);ip.subVectors(e,c);const M=ho.dot(ip),T=po.dot(ip);if(T>=0&&M<=T)return n.copy(c);const E=M*p-m*T;if(E<=0&&p>=0&&T<=0)return d=p/(p-T),n.copy(r).addScaledVector(po,d);const b=v*T-M*g;if(b<=0&&g-v>=0&&M-T>=0)return Tx.subVectors(c,o),d=(g-v)/(g-v+(M-T)),n.copy(o).addScaledVector(Tx,d);const y=1/(b+E+x);return f=E*y,d=x*y,n.copy(r).addScaledVector(ho,f).addScaledVector(po,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},Ru={h:0,s:0,l:0};function op(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Bt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Rt.workingColorSpace){if(e=DC(e,1),n=Et(n,0,1),r=Et(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=op(f,c,e+1/3),this.g=op(f,c,e),this.b=op(f,c,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,n=Di){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],d=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Di){const r=oS[e.toLowerCase()];return r!==void 0?this.setHex(r,n):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return Rt.workingToColorSpace(Wn.copy(this),e),Math.round(Et(Wn.r*255,0,255))*65536+Math.round(Et(Wn.g*255,0,255))*256+Math.round(Et(Wn.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(Wn.copy(this),n);const r=Wn.r,o=Wn.g,c=Wn.b,f=Math.max(r,o,c),d=Math.min(r,o,c);let m,p;const v=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=v<=.5?g/(f+d):g/(2-f-d),f){case r:m=(o-c)/g+(o<c?6:0);break;case o:m=(c-r)/g+2;break;case c:m=(r-o)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(Wn.copy(this),n),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Di){Rt.workingToColorSpace(Wn.copy(this),e);const n=Wn.r,r=Wn.g,o=Wn.b;return e!==Di?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+n,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Er),e.getHSL(Ru);const r=kh(Er.h,Ru.h,n),o=kh(Er.s,Ru.s,n),c=kh(Er.l,Ru.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Bt;Bt.NAMES=oS;let XC=0;class rc extends Do{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XC++}),this.uuid=nc(),this.name="",this.type="Material",this.blending=So,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cp,this.blendDst=Rp,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ux,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){rt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){rt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==So&&(r.blending=this.blending),this.side!==Dr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cp&&(r.blendSrc=this.blendSrc),this.blendDst!==Rp&&(r.blendDst=this.blendDst),this.blendEquation!==ss&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ux&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ao&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ao&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ao&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(n){const c=o(e.textures),f=o(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lS extends rc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wa,this.combine=Gy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sn=new ue,wu=new ct;let WC=0;class Zi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WC++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=fx,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)wu.fromBufferAttribute(this,n),wu.applyMatrix3(e),this.setXY(n,wu.x,wu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Rl(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ni(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Rl(n,this.array)),n}setX(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Rl(n,this.array)),n}setY(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Rl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Rl(n,this.array)),n}setW(e,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),r=ni(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),r=ni(r,this.array),o=ni(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=ni(n,this.array),r=ni(r,this.array),o=ni(o,this.array),c=ni(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fx&&(e.usage=this.usage),e}}class cS extends Zi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class uS extends Zi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ki extends Zi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let qC=0;const wi=new pn,lp=new ai,mo=new ue,pi=new ac,Nl=new ac,wn=new ue;class $i extends Do{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qC++}),this.uuid=nc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iS(e)?uS:cS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,n,r){return wi.makeTranslation(e,n,r),this.applyMatrix4(wi),this}scale(e,n,r){return wi.makeScale(e,n,r),this.applyMatrix4(wi),this}lookAt(e){return lp.lookAt(e),lp.updateMatrix(),this.applyMatrix4(lp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const f=e[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ki(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ac);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];Nl.setFromBufferAttribute(d),this.morphTargetsRelative?(wn.addVectors(pi.min,Nl.min),pi.expandByPoint(wn),wn.addVectors(pi.max,Nl.max),pi.expandByPoint(wn)):(pi.expandByPoint(Nl.min),pi.expandByPoint(Nl.max))}pi.getCenter(r);let o=0;for(let c=0,f=e.count;c<f;c++)wn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(wn));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)wn.fromBufferAttribute(d,p),m&&(mo.fromBufferAttribute(e,p),wn.add(mo)),o=Math.max(o,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<r.count;Q++)d[Q]=new ue,m[Q]=new ue;const p=new ue,v=new ue,g=new ue,x=new ct,M=new ct,T=new ct,E=new ue,b=new ue;function y(Q,C,D){p.fromBufferAttribute(r,Q),v.fromBufferAttribute(r,C),g.fromBufferAttribute(r,D),x.fromBufferAttribute(c,Q),M.fromBufferAttribute(c,C),T.fromBufferAttribute(c,D),v.sub(p),g.sub(p),M.sub(x),T.sub(x);const k=1/(M.x*T.y-T.x*M.y);isFinite(k)&&(E.copy(v).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(k),b.copy(g).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(k),d[Q].add(E),d[C].add(E),d[D].add(E),m[Q].add(b),m[C].add(b),m[D].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let Q=0,C=P.length;Q<C;++Q){const D=P[Q],k=D.start,A=D.count;for(let W=k,q=k+A;W<q;W+=3)y(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const B=new ue,U=new ue,z=new ue,L=new ue;function O(Q){z.fromBufferAttribute(o,Q),L.copy(z);const C=d[Q];B.copy(C),B.sub(z.multiplyScalar(z.dot(C))).normalize(),U.crossVectors(L,C);const k=U.dot(m[Q])<0?-1:1;f.setXYZW(Q,B.x,B.y,B.z,k)}for(let Q=0,C=P.length;Q<C;++Q){const D=P[Q],k=D.start,A=D.count;for(let W=k,q=k+A;W<q;W+=3)O(e.getX(W+0)),O(e.getX(W+1)),O(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Zi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new ue,c=new ue,f=new ue,d=new ue,m=new ue,p=new ue,v=new ue,g=new ue;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),E=e.getX(x+1),b=e.getX(x+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,E),f.fromBufferAttribute(n,b),v.subVectors(f,c),g.subVectors(o,c),v.cross(g),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),d.add(v),m.add(v),p.add(v),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(E,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let x=0,M=n.count;x<M;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,c),g.subVectors(o,c),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)wn.fromBufferAttribute(e,n),wn.normalize(),e.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,g=d.normalized,x=new p.constructor(m.length*v);let M=0,T=0;for(let E=0,b=m.length;E<b;E++){d.isInterleavedBufferAttribute?M=m[E]*d.data.stride+d.offset:M=m[E]*v;for(let y=0;y<v;y++)x[T++]=p[M++]}return new Zi(x,v,g)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $i,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,r);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const x=p[v],M=e(x,r);m.push(M)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];v.push(M.toJSON(e.data))}v.length>0&&(o[m]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(n))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,M=g.length;x<M;x++)v.push(g[x].clone(n));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ax=new pn,ts=new rS,Du=new Mf,Cx=new ue,Uu=new ue,Nu=new ue,Lu=new ue,cp=new ue,Ou=new ue,Rx=new ue,Pu=new ue;class Oi extends ai{constructor(e=new $i,n=new lS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Ou.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&(cp.fromBufferAttribute(g,e),f?Ou.addScaledVector(cp,v):Ou.addScaledVector(cp.sub(n),v))}n.add(Ou)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Du.copy(r.boundingSphere),Du.applyMatrix4(c),ts.copy(e.ray).recast(e.near),!(Du.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Du,Cx)===null||ts.origin.distanceToSquared(Cx)>(e.far-e.near)**2))&&(Ax.copy(c).invert(),ts.copy(e.ray).applyMatrix4(Ax),!(r.boundingBox!==null&&ts.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ts)))}_computeIntersections(e,n,r){let o;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,E=x.length;T<E;T++){const b=x[T],y=f[b.materialIndex],P=Math.max(b.start,M.start),B=Math.min(d.count,Math.min(b.start+b.count,M.start+M.count));for(let U=P,z=B;U<z;U+=3){const L=d.getX(U),O=d.getX(U+1),Q=d.getX(U+2);o=Fu(this,y,e,r,p,v,g,L,O,Q),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),E=Math.min(d.count,M.start+M.count);for(let b=T,y=E;b<y;b+=3){const P=d.getX(b),B=d.getX(b+1),U=d.getX(b+2);o=Fu(this,f,e,r,p,v,g,P,B,U),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,E=x.length;T<E;T++){const b=x[T],y=f[b.materialIndex],P=Math.max(b.start,M.start),B=Math.min(m.count,Math.min(b.start+b.count,M.start+M.count));for(let U=P,z=B;U<z;U+=3){const L=U,O=U+1,Q=U+2;o=Fu(this,y,e,r,p,v,g,L,O,Q),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=b.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),E=Math.min(m.count,M.start+M.count);for(let b=T,y=E;b<y;b+=3){const P=b,B=b+1,U=b+2;o=Fu(this,f,e,r,p,v,g,P,B,U),o&&(o.faceIndex=Math.floor(b/3),n.push(o))}}}}function jC(a,e,n,r,o,c,f,d){let m;if(e.side===ii?m=r.intersectTriangle(f,c,o,!0,d):m=r.intersectTriangle(o,c,f,e.side===Dr,d),m===null)return null;Pu.copy(d),Pu.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(Pu);return p<n.near||p>n.far?null:{distance:p,point:Pu.clone(),object:a}}function Fu(a,e,n,r,o,c,f,d,m,p){a.getVertexPosition(d,Uu),a.getVertexPosition(m,Nu),a.getVertexPosition(p,Lu);const v=jC(a,e,n,r,Uu,Nu,Lu,Rx);if(v){const g=new ue;qi.getBarycoord(Rx,Uu,Nu,Lu,g),o&&(v.uv=qi.getInterpolatedAttribute(o,d,m,p,g,new ct)),c&&(v.uv1=qi.getInterpolatedAttribute(c,d,m,p,g,new ct)),f&&(v.normal=qi.getInterpolatedAttribute(f,d,m,p,g,new ue),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new ue,materialIndex:0};qi.getNormal(Uu,Nu,Lu,x.normal),v.face=x,v.barycoord=g}return v}class sc extends $i{constructor(e=1,n=1,r=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:f};const d=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,M=0;T("z","y","x",-1,-1,r,n,e,f,c,0),T("z","y","x",1,-1,r,n,-e,f,c,1),T("x","z","y",1,1,e,r,n,o,f,2),T("x","z","y",1,-1,e,r,-n,o,f,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Ki(p,3)),this.setAttribute("normal",new Ki(v,3)),this.setAttribute("uv",new Ki(g,2));function T(E,b,y,P,B,U,z,L,O,Q,C){const D=U/O,k=z/Q,A=U/2,W=z/2,q=L/2,ee=O+1,F=Q+1;let V=0,ne=0;const be=new ue;for(let Se=0;Se<F;Se++){const I=Se*k-W;for(let oe=0;oe<ee;oe++){const _e=oe*D-A;be[E]=_e*P,be[b]=I*B,be[y]=q,p.push(be.x,be.y,be.z),be[E]=0,be[b]=0,be[y]=L>0?1:-1,v.push(be.x,be.y,be.z),g.push(oe/O),g.push(1-Se/Q),V+=1}}for(let Se=0;Se<Q;Se++)for(let I=0;I<O;I++){const oe=x+I+ee*Se,_e=x+I+ee*(Se+1),Ce=x+(I+1)+ee*(Se+1),He=x+(I+1)+ee*Se;m.push(oe,_e,He),m.push(_e,Ce,He),ne+=6}d.addGroup(M,ne,C),M+=ne,x+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ro(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Yn(a){const e={};for(let n=0;n<a.length;n++){const r=Ro(a[n]);for(const o in r)e[o]=r[o]}return e}function YC(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function fS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const ZC={clone:Ro,merge:Yn};var KC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$C=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pa extends rc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KC,this.fragmentShader=$C,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=YC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class sf extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=ca,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new ue,wx=new ct,Dx=new ct;class Wi extends sf{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_m*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _m*2*Math.atan(Math.tan(Vh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,n){return this.getViewBounds(e,wx,Dx),n.subVectors(Dx,wx)}setViewOffset(e,n,r,o,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vh*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*o/m,n-=f.offsetY*r/p,o*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const go=-90,vo=1;class QC extends ai{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Wi(go,vo,e,n);o.layers=this.layers,this.add(o);const c=new Wi(go,vo,e,n);c.layers=this.layers,this.add(c);const f=new Wi(go,vo,e,n);f.layers=this.layers,this.add(f);const d=new Wi(go,vo,e,n);d.layers=this.layers,this.add(d);const m=new Wi(go,vo,e,n);m.layers=this.layers,this.add(m);const p=new Wi(go,vo,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,f,d,m]=n;for(const p of n)this.remove(p);if(e===ca)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===af)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,f),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,m),e.setRenderTarget(r,4,o),e.render(n,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(g,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class dS extends Zn{constructor(e=[],n=ms,r,o,c,f,d,m,p,v){super(e,n,r,o,c,f,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hS extends Yi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new dS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new sc(5,5,5),c=new pa({name:"CubemapFromEquirect",uniforms:Ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:Ga});c.uniforms.tEquirect.value=n;const f=new Oi(o,c),d=n.minFilter;return n.minFilter===cs&&(n.minFilter=Mn),new QC(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(c)}}class Bu extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JC={type:"move"};class up{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const E of e.hand.values()){const b=n.getJointPose(E,r),y=this._getHandJoint(p,E);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(JC)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Bu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Ux extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wa,this.environmentIntensity=1,this.environmentRotation=new Wa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class pS extends Zn{constructor(e=null,n=1,r=1,o,c,f,d,m,p=Gn,v=Gn,g,x){super(null,f,d,m,p,v,o,c,g,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fp=new ue,e2=new ue,t2=new ht;class rs{constructor(e=new ue(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=fp.subVectors(r,n).cross(e2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(fp),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||t2.getNormalMatrix(e),o=this.coplanarPoint(fp).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Mf,n2=new ct(.5,.5),Iu=new ue;class mS{constructor(e=new rs,n=new rs,r=new rs,o=new rs,c=new rs,f=new rs){this.planes=[e,n,r,o,c,f]}set(e,n,r,o,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ca,r=!1){const o=this.planes,c=e.elements,f=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],M=c[7],T=c[8],E=c[9],b=c[10],y=c[11],P=c[12],B=c[13],U=c[14],z=c[15];if(o[0].setComponents(p-f,M-v,y-T,z-P).normalize(),o[1].setComponents(p+f,M+v,y+T,z+P).normalize(),o[2].setComponents(p+d,M+g,y+E,z+B).normalize(),o[3].setComponents(p-d,M-g,y-E,z-B).normalize(),r)o[4].setComponents(m,x,b,U).normalize(),o[5].setComponents(p-m,M-x,y-b,z-U).normalize();else if(o[4].setComponents(p-m,M-x,y-b,z-U).normalize(),n===ca)o[5].setComponents(p+m,M+x,y+b,z+U).normalize();else if(n===af)o[5].setComponents(m,x,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const n=n2.distanceTo(e.center);return ns.radius=.7071067811865476+n,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Iu.x=o.normal.x>0?e.max.x:e.min.x,Iu.y=o.normal.y>0?e.max.y:e.min.y,Iu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Iu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class i2 extends rc{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const of=new ue,lf=new ue,Nx=new pn,Ll=new rS,zu=new Mf,dp=new ue,Lx=new ue;class a2 extends ai{constructor(e=new $i,n=new i2){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)of.fromBufferAttribute(n,o-1),lf.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=of.distanceTo(lf);e.setAttribute("lineDistance",new Ki(r,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zu.copy(r.boundingSphere),zu.applyMatrix4(o),zu.radius+=c,e.ray.intersectsSphere(zu)===!1)return;Nx.copy(o).invert(),Ll.copy(e.ray).applyMatrix4(Nx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const M=Math.max(0,f.start),T=Math.min(v.count,f.start+f.count);for(let E=M,b=T-1;E<b;E+=p){const y=v.getX(E),P=v.getX(E+1),B=Hu(this,e,Ll,m,y,P,E);B&&n.push(B)}if(this.isLineLoop){const E=v.getX(T-1),b=v.getX(M),y=Hu(this,e,Ll,m,E,b,T-1);y&&n.push(y)}}else{const M=Math.max(0,f.start),T=Math.min(x.count,f.start+f.count);for(let E=M,b=T-1;E<b;E+=p){const y=Hu(this,e,Ll,m,E,E+1,E);y&&n.push(y)}if(this.isLineLoop){const E=Hu(this,e,Ll,m,T-1,M,T-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Hu(a,e,n,r,o,c,f){const d=a.geometry.attributes.position;if(of.fromBufferAttribute(d,o),lf.fromBufferAttribute(d,c),n.distanceSqToSegment(of,lf,dp,Lx)>r)return;dp.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo(dp);if(!(p<e.near||p>e.far))return{distance:p,point:Lx.clone().applyMatrix4(a.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:a}}const Ox=new ue,Px=new ue;class r2 extends a2{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)Ox.fromBufferAttribute(n,o),Px.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Ox.distanceTo(Px);e.setAttribute("lineDistance",new Ki(r,1))}else rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $l extends Zn{constructor(e,n,r=da,o,c,f,d=Gn,m=Gn,p,v=Xa,g=1){if(v!==Xa&&v!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:g};super(x,o,c,f,d,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new km(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class s2 extends $l{constructor(e,n=da,r=ms,o,c,f=Gn,d=Gn,m,p=Xa){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,n,r,o,c,f,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gS extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ds extends $i{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,f=n/2,d=Math.floor(r),m=Math.floor(o),p=d+1,v=m+1,g=e/d,x=n/m,M=[],T=[],E=[],b=[];for(let y=0;y<v;y++){const P=y*x-f;for(let B=0;B<p;B++){const U=B*g-c;T.push(U,-P,0),E.push(0,0,1),b.push(B/d),b.push(1-y/m)}}for(let y=0;y<m;y++)for(let P=0;P<d;P++){const B=P+p*y,U=P+p*(y+1),z=P+1+p*(y+1),L=P+1+p*y;M.push(B,U,L),M.push(U,z,L)}this.setIndex(M),this.setAttribute("position",new Ki(T,3)),this.setAttribute("normal",new Ki(E,3)),this.setAttribute("uv",new Ki(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.widthSegments,e.heightSegments)}}class zl extends pa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class o2 extends rc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l2 extends rc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vS extends sf{constructor(e=-1,n=1,r=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,f=r+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class c2 extends Wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class u2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Fx(a,e,n,r){const o=f2(r);switch(n){case eS:return a*e;case nS:return a*e/o.components*o.byteLength;case Im:return a*e/o.components*o.byteLength;case Ao:return a*e*2/o.components*o.byteLength;case zm:return a*e*2/o.components*o.byteLength;case tS:return a*e*3/o.components*o.byteLength;case Li:return a*e*4/o.components*o.byteLength;case Hm:return a*e*4/o.components*o.byteLength;case Yu:case Zu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ku:case $u:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Gp:case kp:return Math.max(a,16)*Math.max(e,8)/4;case Hp:case Vp:return Math.max(a,8)*Math.max(e,8)/2;case Xp:case Wp:case jp:case Yp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case qp:case Zp:case Kp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case $p:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Qp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Jp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case em:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case tm:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case nm:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case im:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case am:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case rm:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case sm:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case om:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case lm:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case cm:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case um:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case fm:case dm:case hm:return Math.ceil(a/4)*Math.ceil(e/4)*16;case pm:case mm:return Math.ceil(a/4)*Math.ceil(e/4)*8;case gm:case vm:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function f2(a){switch(a){case Ni:case Ky:return{byteLength:1,components:1};case Yl:case $y:case ha:return{byteLength:2,components:1};case Fm:case Bm:return{byteLength:2,components:4};case da:case Pm:case ji:return{byteLength:4,components:1};case Qy:case Jy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Om}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Om);function _S(){let a=null,e=!1,n=null,r=null;function o(c,f){n(c,f),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function d2(a){const e=new WeakMap;function n(d,m){const p=d.array,v=d.usage,g=p.byteLength,x=a.createBuffer();a.bindBuffer(m,x),a.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=a.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=a.HALF_FLOAT:M=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=a.SHORT;else if(p instanceof Uint32Array)M=a.UNSIGNED_INT;else if(p instanceof Int32Array)M=a.INT;else if(p instanceof Int8Array)M=a.BYTE;else if(p instanceof Uint8Array)M=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const v=m.array,g=m.updateRanges;if(a.bindBuffer(p,d),g.length===0)a.bufferSubData(p,0,v);else{g.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<g.length;M++){const T=g[x],E=g[M];E.start<=T.start+T.count+1?T.count=Math.max(T.count,E.start+E.count-T.start):(++x,g[x]=E)}g.length=x+1;for(let M=0,T=g.length;M<T;M++){const E=g[M];a.bufferSubData(p,E.start*v.BYTES_PER_ELEMENT,v,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:f}}var h2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p2=`#ifdef USE_ALPHAHASH
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
#endif`,m2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x2=`#ifdef USE_AOMAP
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
#endif`,y2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S2=`#ifdef USE_BATCHING
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
#endif`,b2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A2=`#ifdef USE_IRIDESCENCE
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
#endif`,C2=`#ifdef USE_BUMPMAP
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
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,F2=`#define PI 3.141592653589793
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
} // validated`,B2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I2=`vec3 transformedNormal = objectNormal;
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
#endif`,z2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k2="gl_FragColor = linearToOutputTexel( gl_FragColor );",X2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W2=`#ifdef USE_ENVMAP
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
#endif`,q2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j2=`#ifdef USE_ENVMAP
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
#endif`,Y2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z2=`#ifdef USE_ENVMAP
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
#endif`,K2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eR=`#ifdef USE_GRADIENTMAP
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
}`,tR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aR=`uniform bool receiveShadow;
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
#endif`,rR=`#ifdef USE_ENVMAP
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
#endif`,sR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uR=`PhysicalMaterial material;
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
#endif`,fR=`uniform sampler2D dfgLUT;
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
}`,dR=`
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
#endif`,hR=`#if defined( RE_IndirectDiffuse )
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
#endif`,pR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_R=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bR=`#if defined( USE_POINTS_UV )
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
#endif`,MR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ER=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RR=`#ifdef USE_MORPHTARGETS
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
#endif`,wR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PR=`#ifdef USE_NORMALMAP
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
#endif`,FR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$R=`float getShadowMask() {
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
}`,QR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JR=`#ifdef USE_SKINNING
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
#endif`,e3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t3=`#ifdef USE_SKINNING
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
#endif`,n3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s3=`#ifdef USE_TRANSMISSION
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
#endif`,o3=`#ifdef USE_TRANSMISSION
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
#endif`,l3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h3=`uniform sampler2D t2D;
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
}`,p3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_3=`#include <common>
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
}`,x3=`#if DEPTH_PACKING == 3200
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
}`,y3=`#define DISTANCE
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
}`,S3=`#define DISTANCE
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
}`,b3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E3=`uniform float scale;
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
}`,T3=`uniform vec3 diffuse;
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
}`,A3=`#include <common>
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
}`,C3=`uniform vec3 diffuse;
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
}`,R3=`#define LAMBERT
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
}`,w3=`#define LAMBERT
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
}`,D3=`#define MATCAP
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
}`,U3=`#define MATCAP
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
}`,N3=`#define NORMAL
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
}`,L3=`#define NORMAL
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
}`,O3=`#define PHONG
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
}`,P3=`#define PHONG
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
}`,F3=`#define STANDARD
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
}`,B3=`#define STANDARD
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
}`,I3=`#define TOON
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
}`,z3=`#define TOON
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
}`,H3=`uniform float size;
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
}`,G3=`uniform vec3 diffuse;
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
}`,V3=`#include <common>
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
}`,k3=`uniform vec3 color;
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
}`,X3=`uniform float rotation;
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
}`,W3=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:h2,alphahash_pars_fragment:p2,alphamap_fragment:m2,alphamap_pars_fragment:g2,alphatest_fragment:v2,alphatest_pars_fragment:_2,aomap_fragment:x2,aomap_pars_fragment:y2,batching_pars_vertex:S2,batching_vertex:b2,begin_vertex:M2,beginnormal_vertex:E2,bsdfs:T2,iridescence_fragment:A2,bumpmap_pars_fragment:C2,clipping_planes_fragment:R2,clipping_planes_pars_fragment:w2,clipping_planes_pars_vertex:D2,clipping_planes_vertex:U2,color_fragment:N2,color_pars_fragment:L2,color_pars_vertex:O2,color_vertex:P2,common:F2,cube_uv_reflection_fragment:B2,defaultnormal_vertex:I2,displacementmap_pars_vertex:z2,displacementmap_vertex:H2,emissivemap_fragment:G2,emissivemap_pars_fragment:V2,colorspace_fragment:k2,colorspace_pars_fragment:X2,envmap_fragment:W2,envmap_common_pars_fragment:q2,envmap_pars_fragment:j2,envmap_pars_vertex:Y2,envmap_physical_pars_fragment:rR,envmap_vertex:Z2,fog_vertex:K2,fog_pars_vertex:$2,fog_fragment:Q2,fog_pars_fragment:J2,gradientmap_pars_fragment:eR,lightmap_pars_fragment:tR,lights_lambert_fragment:nR,lights_lambert_pars_fragment:iR,lights_pars_begin:aR,lights_toon_fragment:sR,lights_toon_pars_fragment:oR,lights_phong_fragment:lR,lights_phong_pars_fragment:cR,lights_physical_fragment:uR,lights_physical_pars_fragment:fR,lights_fragment_begin:dR,lights_fragment_maps:hR,lights_fragment_end:pR,logdepthbuf_fragment:mR,logdepthbuf_pars_fragment:gR,logdepthbuf_pars_vertex:vR,logdepthbuf_vertex:_R,map_fragment:xR,map_pars_fragment:yR,map_particle_fragment:SR,map_particle_pars_fragment:bR,metalnessmap_fragment:MR,metalnessmap_pars_fragment:ER,morphinstance_vertex:TR,morphcolor_vertex:AR,morphnormal_vertex:CR,morphtarget_pars_vertex:RR,morphtarget_vertex:wR,normal_fragment_begin:DR,normal_fragment_maps:UR,normal_pars_fragment:NR,normal_pars_vertex:LR,normal_vertex:OR,normalmap_pars_fragment:PR,clearcoat_normal_fragment_begin:FR,clearcoat_normal_fragment_maps:BR,clearcoat_pars_fragment:IR,iridescence_pars_fragment:zR,opaque_fragment:HR,packing:GR,premultiplied_alpha_fragment:VR,project_vertex:kR,dithering_fragment:XR,dithering_pars_fragment:WR,roughnessmap_fragment:qR,roughnessmap_pars_fragment:jR,shadowmap_pars_fragment:YR,shadowmap_pars_vertex:ZR,shadowmap_vertex:KR,shadowmask_pars_fragment:$R,skinbase_vertex:QR,skinning_pars_vertex:JR,skinning_vertex:e3,skinnormal_vertex:t3,specularmap_fragment:n3,specularmap_pars_fragment:i3,tonemapping_fragment:a3,tonemapping_pars_fragment:r3,transmission_fragment:s3,transmission_pars_fragment:o3,uv_pars_fragment:l3,uv_pars_vertex:c3,uv_vertex:u3,worldpos_vertex:f3,background_vert:d3,background_frag:h3,backgroundCube_vert:p3,backgroundCube_frag:m3,cube_vert:g3,cube_frag:v3,depth_vert:_3,depth_frag:x3,distance_vert:y3,distance_frag:S3,equirect_vert:b3,equirect_frag:M3,linedashed_vert:E3,linedashed_frag:T3,meshbasic_vert:A3,meshbasic_frag:C3,meshlambert_vert:R3,meshlambert_frag:w3,meshmatcap_vert:D3,meshmatcap_frag:U3,meshnormal_vert:N3,meshnormal_frag:L3,meshphong_vert:O3,meshphong_frag:P3,meshphysical_vert:F3,meshphysical_frag:B3,meshtoon_vert:I3,meshtoon_frag:z3,points_vert:H3,points_frag:G3,shadow_vert:V3,shadow_frag:k3,sprite_vert:X3,sprite_frag:W3},Pe={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},oa={basic:{uniforms:Yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Yn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Yn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Yn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Yn([Pe.points,Pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Yn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Yn([Pe.common,Pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Yn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Yn([Pe.sprite,Pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Yn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Yn([Pe.lights,Pe.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};oa.physical={uniforms:Yn([oa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Gu={r:0,b:0,g:0},is=new Wa,q3=new pn;function j3(a,e,n,r,o,c,f){const d=new Bt(0);let m=c===!0?0:1,p,v,g=null,x=0,M=null;function T(B){let U=B.isScene===!0?B.background:null;return U&&U.isTexture&&(U=(B.backgroundBlurriness>0?n:e).get(U)),U}function E(B){let U=!1;const z=T(B);z===null?y(d,m):z&&z.isColor&&(y(z,1),U=!0);const L=a.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,f):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function b(B,U){const z=T(U);z&&(z.isCubeTexture||z.mapping===bf)?(v===void 0&&(v=new Oi(new sc(1,1,1),new pa({name:"BackgroundCubeMaterial",uniforms:Ro(oa.backgroundCube.uniforms),vertexShader:oa.backgroundCube.vertexShader,fragmentShader:oa.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(L,O,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),is.copy(U.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),v.material.uniforms.envMap.value=z,v.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(q3.makeRotationFromEuler(is)),v.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Wt,(g!==z||x!==z.version||M!==a.toneMapping)&&(v.material.needsUpdate=!0,g=z,x=z.version,M=a.toneMapping),v.layers.enableAll(),B.unshift(v,v.geometry,v.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Oi(new ds(2,2),new pa({name:"BackgroundMaterial",uniforms:Ro(oa.background.uniforms),vertexShader:oa.background.vertexShader,fragmentShader:oa.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Wt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||x!==z.version||M!==a.toneMapping)&&(p.material.needsUpdate=!0,g=z,x=z.version,M=a.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null))}function y(B,U){B.getRGB(Gu,fS(a)),r.buffers.color.setClear(Gu.r,Gu.g,Gu.b,U,f)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(B,U=1){d.set(B),m=U,y(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(B){m=B,y(d,m)},render:E,addToRenderList:b,dispose:P}}function Y3(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,f=!1;function d(D,k,A,W,q){let ee=!1;const F=g(W,A,k);c!==F&&(c=F,p(c.object)),ee=M(D,W,A,q),ee&&T(D,W,A,q),q!==null&&e.update(q,a.ELEMENT_ARRAY_BUFFER),(ee||f)&&(f=!1,U(D,k,A,W),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return a.createVertexArray()}function p(D){return a.bindVertexArray(D)}function v(D){return a.deleteVertexArray(D)}function g(D,k,A){const W=A.wireframe===!0;let q=r[D.id];q===void 0&&(q={},r[D.id]=q);let ee=q[k.id];ee===void 0&&(ee={},q[k.id]=ee);let F=ee[W];return F===void 0&&(F=x(m()),ee[W]=F),F}function x(D){const k=[],A=[],W=[];for(let q=0;q<n;q++)k[q]=0,A[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:A,attributeDivisors:W,object:D,attributes:{},index:null}}function M(D,k,A,W){const q=c.attributes,ee=k.attributes;let F=0;const V=A.getAttributes();for(const ne in V)if(V[ne].location>=0){const Se=q[ne];let I=ee[ne];if(I===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(I=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(I=D.instanceColor)),Se===void 0||Se.attribute!==I||I&&Se.data!==I.data)return!0;F++}return c.attributesNum!==F||c.index!==W}function T(D,k,A,W){const q={},ee=k.attributes;let F=0;const V=A.getAttributes();for(const ne in V)if(V[ne].location>=0){let Se=ee[ne];Se===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor));const I={};I.attribute=Se,Se&&Se.data&&(I.data=Se.data),q[ne]=I,F++}c.attributes=q,c.attributesNum=F,c.index=W}function E(){const D=c.newAttributes;for(let k=0,A=D.length;k<A;k++)D[k]=0}function b(D){y(D,0)}function y(D,k){const A=c.newAttributes,W=c.enabledAttributes,q=c.attributeDivisors;A[D]=1,W[D]===0&&(a.enableVertexAttribArray(D),W[D]=1),q[D]!==k&&(a.vertexAttribDivisor(D,k),q[D]=k)}function P(){const D=c.newAttributes,k=c.enabledAttributes;for(let A=0,W=k.length;A<W;A++)k[A]!==D[A]&&(a.disableVertexAttribArray(A),k[A]=0)}function B(D,k,A,W,q,ee,F){F===!0?a.vertexAttribIPointer(D,k,A,q,ee):a.vertexAttribPointer(D,k,A,W,q,ee)}function U(D,k,A,W){E();const q=W.attributes,ee=A.getAttributes(),F=k.defaultAttributeValues;for(const V in ee){const ne=ee[V];if(ne.location>=0){let be=q[V];if(be===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),be!==void 0){const Se=be.normalized,I=be.itemSize,oe=e.get(be);if(oe===void 0)continue;const _e=oe.buffer,Ce=oe.type,He=oe.bytesPerElement,re=Ce===a.INT||Ce===a.UNSIGNED_INT||be.gpuType===Pm;if(be.isInterleavedBufferAttribute){const pe=be.data,Re=pe.stride,Xe=be.offset;if(pe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<ne.locationSize;Ve++)y(ne.location+Ve,pe.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ve=0;Ve<ne.locationSize;Ve++)b(ne.location+Ve);a.bindBuffer(a.ARRAY_BUFFER,_e);for(let Ve=0;Ve<ne.locationSize;Ve++)B(ne.location+Ve,I/ne.locationSize,Ce,Se,Re*He,(Xe+I/ne.locationSize*Ve)*He,re)}else{if(be.isInstancedBufferAttribute){for(let pe=0;pe<ne.locationSize;pe++)y(ne.location+pe,be.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let pe=0;pe<ne.locationSize;pe++)b(ne.location+pe);a.bindBuffer(a.ARRAY_BUFFER,_e);for(let pe=0;pe<ne.locationSize;pe++)B(ne.location+pe,I/ne.locationSize,Ce,Se,I*He,I/ne.locationSize*pe*He,re)}}else if(F!==void 0){const Se=F[V];if(Se!==void 0)switch(Se.length){case 2:a.vertexAttrib2fv(ne.location,Se);break;case 3:a.vertexAttrib3fv(ne.location,Se);break;case 4:a.vertexAttrib4fv(ne.location,Se);break;default:a.vertexAttrib1fv(ne.location,Se)}}}}P()}function z(){Q();for(const D in r){const k=r[D];for(const A in k){const W=k[A];for(const q in W)v(W[q].object),delete W[q];delete k[A]}delete r[D]}}function L(D){if(r[D.id]===void 0)return;const k=r[D.id];for(const A in k){const W=k[A];for(const q in W)v(W[q].object),delete W[q];delete k[A]}delete r[D.id]}function O(D){for(const k in r){const A=r[k];if(A[D.id]===void 0)continue;const W=A[D.id];for(const q in W)v(W[q].object),delete W[q];delete A[D.id]}}function Q(){C(),f=!0,c!==o&&(c=o,p(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:L,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:b,disableUnusedAttributes:P}}function Z3(a,e,n){let r;function o(p){r=p}function c(p,v){a.drawArrays(r,p,v),n.update(v,r,1)}function f(p,v,g){g!==0&&(a.drawArraysInstanced(r,p,v,g),n.update(v,r,g))}function d(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let M=0;for(let T=0;T<g;T++)M+=v[T];n.update(M,r,1)}function m(p,v,g,x){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)f(p[T],v[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,g);let T=0;for(let E=0;E<g;E++)T+=v[E]*x[E];n.update(T,r,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function K3(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(O){return!(O!==Li&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const Q=O===ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ni&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ji&&!Q)}function m(O){if(O==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const v=m(p);v!==p&&(rt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),P=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),B=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),z=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:E,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:P,maxVaryings:B,maxFragmentUniforms:U,maxSamples:z,samples:L}}function $3(a){const e=this;let n=null,r=0,o=!1,c=!1;const f=new rs,d=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||r!==0||o;return o=x,r=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){n=v(g,x,0)},this.setState=function(g,x,M){const T=g.clippingPlanes,E=g.clipIntersection,b=g.clipShadows,y=a.get(g);if(!o||T===null||T.length===0||c&&!b)c?v(null):p();else{const P=c?0:r,B=P*4;let U=y.clippingState||null;m.value=U,U=v(T,x,B,M);for(let z=0;z!==B;++z)U[z]=n[z];y.clippingState=U,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,M,T){const E=g!==null?g.length:0;let b=null;if(E!==0){if(b=m.value,T!==!0||b===null){const y=M+E*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(b===null||b.length<y)&&(b=new Float32Array(y));for(let B=0,U=M;B!==E;++B,U+=4)f.copy(g[B]).applyMatrix4(P,d),f.normal.toArray(b,U),b[U+3]=f.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,b}}function Q3(a){let e=new WeakMap;function n(f,d){return d===Fp?f.mapping=ms:d===Bp&&(f.mapping=To),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Fp||d===Bp)if(e.has(f)){const m=e.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new hS(m.height);return p.fromEquirectangularTexture(a,f),e.set(f,p),f.addEventListener("dispose",o),n(p.texture,f.mapping)}else return null}}return f}function o(f){const d=f.target;d.removeEventListener("dispose",o);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Cr=4,Bx=[.125,.215,.35,.446,.526,.582],os=20,J3=256,Ol=new vS,Ix=new Bt;let hp=null,pp=0,mp=0,gp=!1;const ew=new ue;class zx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:f=256,position:d=ew}=c;hp=this._renderer.getRenderTarget(),pp=this._renderer.getActiveCubeFace(),mp=this._renderer.getActiveMipmapLevel(),gp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hp,pp,mp),this._renderer.xr.enabled=gp,e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hp=this._renderer.getRenderTarget(),pp=this._renderer.getActiveCubeFace(),mp=this._renderer.getActiveMipmapLevel(),gp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:ha,format:Li,colorSpace:Co,depthBuffer:!1},o=Hx(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hx(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tw(c)),this._blurMaterial=iw(c,e,n),this._ggxMaterial=nw(c,e,n)}return o}_compileMaterial(e){const n=new Oi(new $i,e);this._renderer.compile(n,Ol)}_sceneToCubeUV(e,n,r,o,c){const m=new Wi(90,1,n,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor(Ix),g.toneMapping=fa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oi(new sc,new lS({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,b=E.material;let y=!1;const P=e.background;P?P.isColor&&(b.color.copy(P),e.background=null,y=!0):(b.color.copy(Ix),y=!0);for(let B=0;B<6;B++){const U=B%3;U===0?(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[B],c.y,c.z)):U===1?(m.up.set(0,0,p[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[B],c.z)):(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[B]));const z=this._cubeSize;_o(o,U*z,B>2?z:0,z,z),g.setRenderTarget(o),y&&g.render(E,m),g.render(e,m)}g.toneMapping=M,g.autoClear=x,e.background=P}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ms||e.mapping===To;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gx());const c=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;_o(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,Ol)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[r];d.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),x=0+p*1.25,M=g*x,{_lodMax:T}=this,E=this._sizeLods[r],b=3*E*(r>T-Cr?r-T+Cr:0),y=4*(this._cubeSize-E);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-n,_o(c,b,y,3*E,2*E),o.setRenderTarget(c),o.render(d,Ol),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,_o(e,b,y,3*E,2*E),o.setRenderTarget(e),o.render(d,Ol)}_blur(e,n,r,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",c),this._halfBlur(f,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[o];g.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*os-1),E=c/T,b=isFinite(c)?1+Math.floor(v*E):os;b>os&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${os}`);const y=[];let P=0;for(let O=0;O<os;++O){const Q=O/E,C=Math.exp(-Q*Q/2);y.push(C),O===0?P+=C:O<b&&(P+=2*C)}for(let O=0;O<y.length;O++)y[O]=y[O]/P;x.envMap.value=e.texture,x.samples.value=b,x.weights.value=y,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:B}=this;x.dTheta.value=T,x.mipInt.value=B-r;const U=this._sizeLods[o],z=3*U*(o>B-Cr?o-B+Cr:0),L=4*(this._cubeSize-U);_o(n,z,L,3*U,2*U),m.setRenderTarget(n),m.render(g,Ol)}}function tw(a){const e=[],n=[],r=[];let o=a;const c=a-Cr+1+Bx.length;for(let f=0;f<c;f++){const d=Math.pow(2,o);e.push(d);let m=1/d;f>a-Cr?m=Bx[f-a+Cr-1]:f===0&&(m=0),n.push(m);const p=1/(d-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,T=6,E=3,b=2,y=1,P=new Float32Array(E*T*M),B=new Float32Array(b*T*M),U=new Float32Array(y*T*M);for(let L=0;L<M;L++){const O=L%3*2/3-1,Q=L>2?0:-1,C=[O,Q,0,O+2/3,Q,0,O+2/3,Q+1,0,O,Q,0,O+2/3,Q+1,0,O,Q+1,0];P.set(C,E*T*L),B.set(x,b*T*L);const D=[L,L,L,L,L,L];U.set(D,y*T*L)}const z=new $i;z.setAttribute("position",new Zi(P,E)),z.setAttribute("uv",new Zi(B,b)),z.setAttribute("faceIndex",new Zi(U,y)),r.push(new Oi(z,null)),o>Cr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Hx(a,e,n){const r=new Yi(a,e,n);return r.texture.mapping=bf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _o(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function nw(a,e,n){return new pa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:J3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ef(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function iw(a,e,n){const r=new Float32Array(os),o=new ue(0,1,0);return new pa({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ef(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Gx(){return new pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ef(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Vx(){return new pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Ef(){return`

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
	`}function aw(a){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Fp||m===Bp,v=m===ms||m===To;if(p||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new zx(a)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&o(M)?(n===null&&(n=new zx(a)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function o(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function rw(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Kl("WebGLRenderer: "+r+" extension not supported."),o}}}function sw(a,e,n,r){const o={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete o[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(g,x){return o[x.id]===!0||(x.addEventListener("dispose",f),o[x.id]=!0,n.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)e.update(x[M],a.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,T=g.attributes.position;let E=0;if(M!==null){const P=M.array;E=M.version;for(let B=0,U=P.length;B<U;B+=3){const z=P[B+0],L=P[B+1],O=P[B+2];x.push(z,L,L,O,O,z)}}else if(T!==void 0){const P=T.array;E=T.version;for(let B=0,U=P.length/3-1;B<U;B+=3){const z=B+0,L=B+1,O=B+2;x.push(z,L,L,O,O,z)}}else return;const b=new(iS(x)?uS:cS)(x,1);b.version=E;const y=c.get(g);y&&e.remove(y),c.set(g,b)}function v(g){const x=c.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function ow(a,e,n){let r;function o(x){r=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,M){a.drawElements(r,M,c,x*f),n.update(M,r,1)}function p(x,M,T){T!==0&&(a.drawElementsInstanced(r,M,c,x*f,T),n.update(M,r,T))}function v(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,T);let b=0;for(let y=0;y<T;y++)b+=M[y];n.update(b,r,1)}function g(x,M,T,E){if(T===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let y=0;y<x.length;y++)p(x[y]/f,M[y],E[y]);else{b.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,E,0,T);let y=0;for(let P=0;P<T;P++)y+=M[P]*E[P];n.update(y,r,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function lw(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=d*(c/3);break;case a.LINES:n.lines+=d*(c/2);break;case a.LINE_STRIP:n.lines+=d*(c-1);break;case a.LINE_LOOP:n.lines+=d*c;break;case a.POINTS:n.points+=d*c;break;default:Ut("WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function cw(a,e,n){const r=new WeakMap,o=new fn;function c(f,d,m){const p=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let D=function(){Q.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var M=D;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let U=0;T===!0&&(U=1),E===!0&&(U=2),b===!0&&(U=3);let z=d.attributes.position.count*U,L=1;z>e.maxTextureSize&&(L=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const O=new Float32Array(z*L*4*g),Q=new aS(O,z,L,g);Q.type=ji,Q.needsUpdate=!0;const C=U*4;for(let k=0;k<g;k++){const A=y[k],W=P[k],q=B[k],ee=z*L*4*k;for(let F=0;F<A.count;F++){const V=F*C;T===!0&&(o.fromBufferAttribute(A,F),O[ee+V+0]=o.x,O[ee+V+1]=o.y,O[ee+V+2]=o.z,O[ee+V+3]=0),E===!0&&(o.fromBufferAttribute(W,F),O[ee+V+4]=o.x,O[ee+V+5]=o.y,O[ee+V+6]=o.z,O[ee+V+7]=0),b===!0&&(o.fromBufferAttribute(q,F),O[ee+V+8]=o.x,O[ee+V+9]=o.y,O[ee+V+10]=o.z,O[ee+V+11]=q.itemSize===4?o.w:1)}}x={count:g,texture:Q,size:new ct(z,L)},r.set(d,x),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let T=0;for(let b=0;b<p.length;b++)T+=p[b];const E=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(a,"morphTargetBaseInfluence",E),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function uw(a,e,n,r){let o=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,g=e.get(m,v);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==p&&(n.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,a.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return g}function f(){o=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const fw={[Vy]:"LINEAR_TONE_MAPPING",[ky]:"REINHARD_TONE_MAPPING",[Xy]:"CINEON_TONE_MAPPING",[Wy]:"ACES_FILMIC_TONE_MAPPING",[jy]:"AGX_TONE_MAPPING",[Yy]:"NEUTRAL_TONE_MAPPING",[qy]:"CUSTOM_TONE_MAPPING"};function dw(a,e,n,r,o){const c=new Yi(e,n,{type:a,depthBuffer:r,stencilBuffer:o}),f=new Yi(e,n,{type:ha,depthBuffer:!1,stencilBuffer:!1}),d=new $i;d.setAttribute("position",new Ki([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ki([0,2,0,0,2,0],2));const m=new zl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Oi(d,m),v=new vS(-1,1,1,-1,0,1);let g=null,x=null,M=!1,T,E=null,b=[],y=!1;this.setSize=function(P,B){c.setSize(P,B),f.setSize(P,B);for(let U=0;U<b.length;U++){const z=b[U];z.setSize&&z.setSize(P,B)}},this.setEffects=function(P){b=P,y=b.length>0&&b[0].isRenderPass===!0;const B=c.width,U=c.height;for(let z=0;z<b.length;z++){const L=b[z];L.setSize&&L.setSize(B,U)}},this.begin=function(P,B){if(M||P.toneMapping===fa&&b.length===0)return!1;if(E=B,B!==null){const U=B.width,z=B.height;(c.width!==U||c.height!==z)&&this.setSize(U,z)}return y===!1&&P.setRenderTarget(c),T=P.toneMapping,P.toneMapping=fa,!0},this.hasRenderPass=function(){return y},this.end=function(P,B){P.toneMapping=T,M=!0;let U=c,z=f;for(let L=0;L<b.length;L++){const O=b[L];if(O.enabled!==!1&&(O.render(P,z,U,B),O.needsSwap!==!1)){const Q=U;U=z,z=Q}}if(g!==P.outputColorSpace||x!==P.toneMapping){g=P.outputColorSpace,x=P.toneMapping,m.defines={},Rt.getTransfer(g)===Wt&&(m.defines.SRGB_TRANSFER="");const L=fw[x];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,P.setRenderTarget(E),P.render(p,v),E=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const xS=new Zn,xm=new $l(1,1),yS=new aS,SS=new FC,bS=new dS,kx=[],Xx=[],Wx=new Float32Array(16),qx=new Float32Array(9),jx=new Float32Array(4);function Uo(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=kx[o];if(c===void 0&&(c=new Float32Array(o),kx[o]=c),e!==0){r.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=n,a[f].toArray(c,d)}return c}function An(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function Cn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Tf(a,e){let n=Xx[e];n===void 0&&(n=new Int32Array(e),Xx[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function hw(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function pw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;a.uniform2fv(this.addr,e),Cn(n,e)}}function mw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(An(n,e))return;a.uniform3fv(this.addr,e),Cn(n,e)}}function gw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;a.uniform4fv(this.addr,e),Cn(n,e)}}function vw(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,r))return;jx.set(r),a.uniformMatrix2fv(this.addr,!1,jx),Cn(n,r)}}function _w(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,r))return;qx.set(r),a.uniformMatrix3fv(this.addr,!1,qx),Cn(n,r)}}function xw(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,r))return;Wx.set(r),a.uniformMatrix4fv(this.addr,!1,Wx),Cn(n,r)}}function yw(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function Sw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;a.uniform2iv(this.addr,e),Cn(n,e)}}function bw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;a.uniform3iv(this.addr,e),Cn(n,e)}}function Mw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;a.uniform4iv(this.addr,e),Cn(n,e)}}function Ew(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function Tw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;a.uniform2uiv(this.addr,e),Cn(n,e)}}function Aw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;a.uniform3uiv(this.addr,e),Cn(n,e)}}function Cw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;a.uniform4uiv(this.addr,e),Cn(n,e)}}function Rw(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(xm.compareFunction=n.isReversedDepthBuffer()?Vm:Gm,c=xm):c=xS,n.setTexture2D(e||c,o)}function ww(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||SS,o)}function Dw(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||bS,o)}function Uw(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||yS,o)}function Nw(a){switch(a){case 5126:return hw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return vw;case 35675:return _w;case 35676:return xw;case 5124:case 35670:return yw;case 35667:case 35671:return Sw;case 35668:case 35672:return bw;case 35669:case 35673:return Mw;case 5125:return Ew;case 36294:return Tw;case 36295:return Aw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Uw}}function Lw(a,e){a.uniform1fv(this.addr,e)}function Ow(a,e){const n=Uo(e,this.size,2);a.uniform2fv(this.addr,n)}function Pw(a,e){const n=Uo(e,this.size,3);a.uniform3fv(this.addr,n)}function Fw(a,e){const n=Uo(e,this.size,4);a.uniform4fv(this.addr,n)}function Bw(a,e){const n=Uo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function Iw(a,e){const n=Uo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function zw(a,e){const n=Uo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function Hw(a,e){a.uniform1iv(this.addr,e)}function Gw(a,e){a.uniform2iv(this.addr,e)}function Vw(a,e){a.uniform3iv(this.addr,e)}function kw(a,e){a.uniform4iv(this.addr,e)}function Xw(a,e){a.uniform1uiv(this.addr,e)}function Ww(a,e){a.uniform2uiv(this.addr,e)}function qw(a,e){a.uniform3uiv(this.addr,e)}function jw(a,e){a.uniform4uiv(this.addr,e)}function Yw(a,e,n){const r=this.cache,o=e.length,c=Tf(n,o);An(r,c)||(a.uniform1iv(this.addr,c),Cn(r,c));let f;this.type===a.SAMPLER_2D_SHADOW?f=xm:f=xS;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||f,c[d])}function Zw(a,e,n){const r=this.cache,o=e.length,c=Tf(n,o);An(r,c)||(a.uniform1iv(this.addr,c),Cn(r,c));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||SS,c[f])}function Kw(a,e,n){const r=this.cache,o=e.length,c=Tf(n,o);An(r,c)||(a.uniform1iv(this.addr,c),Cn(r,c));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||bS,c[f])}function $w(a,e,n){const r=this.cache,o=e.length,c=Tf(n,o);An(r,c)||(a.uniform1iv(this.addr,c),Cn(r,c));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||yS,c[f])}function Qw(a){switch(a){case 5126:return Lw;case 35664:return Ow;case 35665:return Pw;case 35666:return Fw;case 35674:return Bw;case 35675:return Iw;case 35676:return zw;case 5124:case 35670:return Hw;case 35667:case 35671:return Gw;case 35668:case 35672:return Vw;case 35669:case 35673:return kw;case 5125:return Xw;case 36294:return Ww;case 36295:return qw;case 36296:return jw;case 35678:case 36198:case 36298:case 36306:case 35682:return Yw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return $w}}class Jw{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Nw(n.type)}}class eD{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Qw(n.type)}}class tD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const vp=/(\w+)(\])?(\[|\.)?/g;function Yx(a,e){a.seq.push(e),a.map[e.id]=e}function nD(a,e,n){const r=a.name,o=r.length;for(vp.lastIndex=0;;){const c=vp.exec(r),f=vp.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===o){Yx(n,p===void 0?new Jw(d,a,e):new eD(d,a,e));break}else{let g=n.map[d];g===void 0&&(g=new tD(d),Yx(n,g)),n=g}}}class Qu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const d=e.getActiveUniform(n,f),m=e.getUniformLocation(n,d.name);nD(d,m,this)}const o=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(f):c.push(f);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,f=n.length;c!==f;++c){const d=n[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function Zx(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const iD=37297;let aD=0;function rD(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=o;f<c;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Kx=new ht;function sD(a){Rt._getMatrix(Kx,Rt.workingColorSpace,a);const e=`mat3( ${Kx.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(a)){case nf:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function $x(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+rD(a.getShaderSource(e),d)}else return c}function oD(a,e){const n=sD(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const lD={[Vy]:"Linear",[ky]:"Reinhard",[Xy]:"Cineon",[Wy]:"ACESFilmic",[jy]:"AgX",[Yy]:"Neutral",[qy]:"Custom"};function cD(a,e){const n=lD[e];return n===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vu=new ue;function uD(){Rt.getLuminanceCoefficients(Vu);const a=Vu.x.toFixed(4),e=Vu.y.toFixed(4),n=Vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fD(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hl).join(`
`)}function dD(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function hD(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),f=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:d}}return n}function Hl(a){return a!==""}function Qx(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jx(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pD=/^[ \t]*#include +<([\w\d./]+)>/gm;function ym(a){return a.replace(pD,gD)}const mD=new Map;function gD(a,e){let n=pt[e];if(n===void 0){const r=mD.get(e);if(r!==void 0)n=pt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ym(n)}const vD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ey(a){return a.replace(vD,_D)}function _D(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ty(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const xD={[ju]:"SHADOWMAP_TYPE_PCF",[Il]:"SHADOWMAP_TYPE_VSM"};function yD(a){return xD[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SD={[ms]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE",[bf]:"ENVMAP_TYPE_CUBE_UV"};function bD(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":SD[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const MD={[To]:"ENVMAP_MODE_REFRACTION"};function ED(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":MD[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TD={[Gy]:"ENVMAP_BLENDING_MULTIPLY",[gC]:"ENVMAP_BLENDING_MIX",[vC]:"ENVMAP_BLENDING_ADD"};function AD(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":TD[a.combine]||"ENVMAP_BLENDING_NONE"}function CD(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function RD(a,e,n,r){const o=a.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const m=yD(n),p=bD(n),v=ED(n),g=AD(n),x=CD(n),M=fD(n),T=dD(c),E=o.createProgram();let b,y,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Hl).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Hl).join(`
`),y.length>0&&(y+=`
`)):(b=[ty(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hl).join(`
`),y=[ty(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fa?"#define TONE_MAPPING":"",n.toneMapping!==fa?pt.tonemapping_pars_fragment:"",n.toneMapping!==fa?cD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,oD("linearToOutputTexel",n.outputColorSpace),uD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Hl).join(`
`)),f=ym(f),f=Qx(f,n),f=Jx(f,n),d=ym(d),d=Qx(d,n),d=Jx(d,n),f=ey(f),d=ey(d),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,b=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",n.glslVersion===dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const B=P+b+f,U=P+y+d,z=Zx(o,o.VERTEX_SHADER,B),L=Zx(o,o.FRAGMENT_SHADER,U);o.attachShader(E,z),o.attachShader(E,L),n.index0AttributeName!==void 0?o.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function O(k){if(a.debug.checkShaderErrors){const A=o.getProgramInfoLog(E)||"",W=o.getShaderInfoLog(z)||"",q=o.getShaderInfoLog(L)||"",ee=A.trim(),F=W.trim(),V=q.trim();let ne=!0,be=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(ne=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,E,z,L);else{const Se=$x(o,z,"vertex"),I=$x(o,L,"fragment");Ut("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ee+`
`+Se+`
`+I)}else ee!==""?rt("WebGLProgram: Program Info Log:",ee):(F===""||V==="")&&(be=!1);be&&(k.diagnostics={runnable:ne,programLog:ee,vertexShader:{log:F,prefix:b},fragmentShader:{log:V,prefix:y}})}o.deleteShader(z),o.deleteShader(L),Q=new Qu(o,E),C=hD(o,E)}let Q;this.getUniforms=function(){return Q===void 0&&O(this),Q};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(E,iD)),D},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aD++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=L,this}let wD=0;class DD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new UD(e),n.set(e,r)),r}}class UD{constructor(e){this.id=wD++,this.code=e,this.usedTimes=0}}function ND(a,e,n,r,o,c,f){const d=new sS,m=new DD,p=new Set,v=[],g=new Map,x=o.logarithmicDepthBuffer;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return p.add(C),C===0?"uv":`uv${C}`}function b(C,D,k,A,W){const q=A.fog,ee=W.geometry,F=C.isMeshStandardMaterial?A.environment:null,V=(C.isMeshStandardMaterial?n:e).get(C.envMap||F),ne=V&&V.mapping===bf?V.image.height:null,be=T[C.type];C.precision!==null&&(M=o.getMaxPrecision(C.precision),M!==C.precision&&rt("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const Se=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,I=Se!==void 0?Se.length:0;let oe=0;ee.morphAttributes.position!==void 0&&(oe=1),ee.morphAttributes.normal!==void 0&&(oe=2),ee.morphAttributes.color!==void 0&&(oe=3);let _e,Ce,He,re;if(be){const Ct=oa[be];_e=Ct.vertexShader,Ce=Ct.fragmentShader}else _e=C.vertexShader,Ce=C.fragmentShader,m.update(C),He=m.getVertexShaderID(C),re=m.getFragmentShaderID(C);const pe=a.getRenderTarget(),Re=a.state.buffers.depth.getReversed(),Xe=W.isInstancedMesh===!0,Ve=W.isBatchedMesh===!0,mt=!!C.map,tn=!!C.matcap,vt=!!V,gt=!!C.aoMap,Tt=!!C.lightMap,st=!!C.bumpMap,nn=!!C.normalMap,X=!!C.displacementMap,Kt=!!C.emissiveMap,bt=!!C.metalnessMap,At=!!C.roughnessMap,je=C.anisotropy>0,N=C.clearcoat>0,_=C.dispersion>0,H=C.iridescence>0,J=C.sheen>0,he=C.transmission>0,se=je&&!!C.anisotropyMap,Fe=N&&!!C.clearcoatMap,we=N&&!!C.clearcoatNormalMap,ke=N&&!!C.clearcoatRoughnessMap,et=H&&!!C.iridescenceMap,Ee=H&&!!C.iridescenceThicknessMap,Te=J&&!!C.sheenColorMap,ze=J&&!!C.sheenRoughnessMap,Be=!!C.specularMap,Ue=!!C.specularColorMap,ft=!!C.specularIntensityMap,Y=he&&!!C.transmissionMap,Le=he&&!!C.thicknessMap,Ae=!!C.gradientMap,Ie=!!C.alphaMap,Me=C.alphaTest>0,ye=!!C.alphaHash,De=!!C.extensions;let at=fa;C.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(at=a.toneMapping);const zt={shaderID:be,shaderType:C.type,shaderName:C.name,vertexShader:_e,fragmentShader:Ce,defines:C.defines,customVertexShaderID:He,customFragmentShaderID:re,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Ve,batchingColor:Ve&&W._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&W.instanceColor!==null,instancingMorph:Xe&&W.morphTexture!==null,outputColorSpace:pe===null?a.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Co,alphaToCoverage:!!C.alphaToCoverage,map:mt,matcap:tn,envMap:vt,envMapMode:vt&&V.mapping,envMapCubeUVHeight:ne,aoMap:gt,lightMap:Tt,bumpMap:st,normalMap:nn,displacementMap:X,emissiveMap:Kt,normalMapObjectSpace:nn&&C.normalMapType===SC,normalMapTangentSpace:nn&&C.normalMapType===yC,metalnessMap:bt,roughnessMap:At,anisotropy:je,anisotropyMap:se,clearcoat:N,clearcoatMap:Fe,clearcoatNormalMap:we,clearcoatRoughnessMap:ke,dispersion:_,iridescence:H,iridescenceMap:et,iridescenceThicknessMap:Ee,sheen:J,sheenColorMap:Te,sheenRoughnessMap:ze,specularMap:Be,specularColorMap:Ue,specularIntensityMap:ft,transmission:he,transmissionMap:Y,thicknessMap:Le,gradientMap:Ae,opaque:C.transparent===!1&&C.blending===So&&C.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Me,alphaHash:ye,combine:C.combine,mapUv:mt&&E(C.map.channel),aoMapUv:gt&&E(C.aoMap.channel),lightMapUv:Tt&&E(C.lightMap.channel),bumpMapUv:st&&E(C.bumpMap.channel),normalMapUv:nn&&E(C.normalMap.channel),displacementMapUv:X&&E(C.displacementMap.channel),emissiveMapUv:Kt&&E(C.emissiveMap.channel),metalnessMapUv:bt&&E(C.metalnessMap.channel),roughnessMapUv:At&&E(C.roughnessMap.channel),anisotropyMapUv:se&&E(C.anisotropyMap.channel),clearcoatMapUv:Fe&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(C.sheenRoughnessMap.channel),specularMapUv:Be&&E(C.specularMap.channel),specularColorMapUv:Ue&&E(C.specularColorMap.channel),specularIntensityMapUv:ft&&E(C.specularIntensityMap.channel),transmissionMapUv:Y&&E(C.transmissionMap.channel),thicknessMapUv:Le&&E(C.thicknessMap.channel),alphaMapUv:Ie&&E(C.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(nn||je),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ee.attributes.uv&&(mt||Ie),fog:!!q,useFog:C.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Re,skinning:W.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:oe,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:at,decodeVideoTexture:mt&&C.map.isVideoTexture===!0&&Rt.getTransfer(C.map.colorSpace)===Wt,decodeVideoTextureEmissive:Kt&&C.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(C.emissiveMap.colorSpace)===Wt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ha,flipSided:C.side===ii,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:De&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&C.extensions.multiDraw===!0||Ve)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return zt.vertexUv1s=p.has(1),zt.vertexUv2s=p.has(2),zt.vertexUv3s=p.has(3),p.clear(),zt}function y(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)D.push(k),D.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(P(D,C),B(D,C),D.push(a.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function P(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function B(C,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const D=T[C.type];let k;if(D){const A=oa[D];k=ZC.clone(A.uniforms)}else k=C.uniforms;return k}function z(C,D){let k=g.get(D);return k!==void 0?++k.usedTimes:(k=new RD(a,D,C,c),v.push(k),g.set(D,k)),k}function L(C){if(--C.usedTimes===0){const D=v.indexOf(C);v[D]=v[v.length-1],v.pop(),g.delete(C.cacheKey),C.destroy()}}function O(C){m.remove(C)}function Q(){m.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:U,acquireProgram:z,releaseProgram:L,releaseShaderCache:O,programs:v,dispose:Q}}function LD(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let d=a.get(f);return d===void 0&&(d={},a.set(f,d)),d}function r(f){a.delete(f)}function o(f,d,m){a.get(f)[d]=m}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function OD(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function ny(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function iy(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function f(g,x,M,T,E,b){let y=a[e];return y===void 0?(y={id:g.id,object:g,geometry:x,material:M,groupOrder:T,renderOrder:g.renderOrder,z:E,group:b},a[e]=y):(y.id=g.id,y.object=g,y.geometry=x,y.material=M,y.groupOrder=T,y.renderOrder=g.renderOrder,y.z=E,y.group=b),e++,y}function d(g,x,M,T,E,b){const y=f(g,x,M,T,E,b);M.transmission>0?r.push(y):M.transparent===!0?o.push(y):n.push(y)}function m(g,x,M,T,E,b){const y=f(g,x,M,T,E,b);M.transmission>0?r.unshift(y):M.transparent===!0?o.unshift(y):n.unshift(y)}function p(g,x){n.length>1&&n.sort(g||OD),r.length>1&&r.sort(x||ny),o.length>1&&o.sort(x||ny)}function v(){for(let g=e,x=a.length;g<x;g++){const M=a[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:d,unshift:m,finish:v,sort:p}}function PD(){let a=new WeakMap;function e(r,o){const c=a.get(r);let f;return c===void 0?(f=new iy,a.set(r,[f])):o>=c.length?(f=new iy,c.push(f)):f=c[o],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function FD(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ue,color:new Bt};break;case"SpotLight":n={position:new ue,direction:new ue,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ue,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ue,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":n={color:new Bt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return a[e.id]=n,n}}}function BD(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let ID=0;function zD(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function HD(a){const e=new FD,n=BD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ue);const o=new ue,c=new pn,f=new pn;function d(p){let v=0,g=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,T=0,E=0,b=0,y=0,P=0,B=0,U=0,z=0,L=0,O=0;p.sort(zD);for(let C=0,D=p.length;C<D;C++){const k=p[C],A=k.color,W=k.intensity,q=k.distance;let ee=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Ao?ee=k.shadow.map.texture:ee=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=A.r*W,g+=A.g*W,x+=A.b*W;else if(k.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(k.sh.coefficients[F],W);O++}else if(k.isDirectionalLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const V=k.shadow,ne=n.get(k);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,r.directionalShadow[M]=ne,r.directionalShadowMap[M]=ee,r.directionalShadowMatrix[M]=k.shadow.matrix,P++}r.directional[M]=F,M++}else if(k.isSpotLight){const F=e.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(A).multiplyScalar(W),F.distance=q,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,r.spot[E]=F;const V=k.shadow;if(k.map&&(r.spotLightMap[z]=k.map,z++,V.updateMatrices(k),k.castShadow&&L++),r.spotLightMatrix[E]=V.matrix,k.castShadow){const ne=n.get(k);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,r.spotShadow[E]=ne,r.spotShadowMap[E]=ee,U++}E++}else if(k.isRectAreaLight){const F=e.get(k);F.color.copy(A).multiplyScalar(W),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),r.rectArea[b]=F,b++}else if(k.isPointLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const V=k.shadow,ne=n.get(k);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,ne.shadowCameraNear=V.camera.near,ne.shadowCameraFar=V.camera.far,r.pointShadow[T]=ne,r.pointShadowMap[T]=ee,r.pointShadowMatrix[T]=k.shadow.matrix,B++}r.point[T]=F,T++}else if(k.isHemisphereLight){const F=e.get(k);F.skyColor.copy(k.color).multiplyScalar(W),F.groundColor.copy(k.groundColor).multiplyScalar(W),r.hemi[y]=F,y++}}b>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const Q=r.hash;(Q.directionalLength!==M||Q.pointLength!==T||Q.spotLength!==E||Q.rectAreaLength!==b||Q.hemiLength!==y||Q.numDirectionalShadows!==P||Q.numPointShadows!==B||Q.numSpotShadows!==U||Q.numSpotMaps!==z||Q.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=E,r.rectArea.length=b,r.point.length=T,r.hemi.length=y,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=B,r.spotLightMatrix.length=U+z-L,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=O,Q.directionalLength=M,Q.pointLength=T,Q.spotLength=E,Q.rectAreaLength=b,Q.hemiLength=y,Q.numDirectionalShadows=P,Q.numPointShadows=B,Q.numSpotShadows=U,Q.numSpotMaps=z,Q.numLightProbes=O,r.version=ID++)}function m(p,v){let g=0,x=0,M=0,T=0,E=0;const b=v.matrixWorldInverse;for(let y=0,P=p.length;y<P;y++){const B=p[y];if(B.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(B.matrixWorld),o.setFromMatrixPosition(B.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(b),g++}else if(B.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(b),U.direction.setFromMatrixPosition(B.matrixWorld),o.setFromMatrixPosition(B.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(b),M++}else if(B.isRectAreaLight){const U=r.rectArea[T];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(b),f.identity(),c.copy(B.matrixWorld),c.premultiply(b),f.extractRotation(c),U.halfWidth.set(B.width*.5,0,0),U.halfHeight.set(0,B.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),T++}else if(B.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(b),x++}else if(B.isHemisphereLight){const U=r.hemi[E];U.direction.setFromMatrixPosition(B.matrixWorld),U.direction.transformDirection(b),E++}}}return{setup:d,setupView:m,state:r}}function ay(a){const e=new HD(a),n=[],r=[];function o(v){p.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function m(v){e.setupView(n,v)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function GD(a){let e=new WeakMap;function n(o,c=0){const f=e.get(o);let d;return f===void 0?(d=new ay(a),e.set(o,[d])):c>=f.length?(d=new ay(a),f.push(d)):d=f[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const VD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kD=`uniform sampler2D shadow_pass;
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
}`,XD=[new ue(1,0,0),new ue(-1,0,0),new ue(0,1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1)],WD=[new ue(0,-1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,-1,0),new ue(0,-1,0)],ry=new pn,Pl=new ue,_p=new ue;function qD(a,e,n){let r=new mS;const o=new ct,c=new ct,f=new fn,d=new o2,m=new l2,p={},v=n.maxTextureSize,g={[Dr]:ii,[ii]:Dr,[Ha]:Ha},x=new pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:VD,fragmentShader:kD}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new $i;T.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Oi(T,x),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let y=this.type;this.render=function(L,O,Q){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;L.type===$A&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=ju);const C=a.getRenderTarget(),D=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),A=a.state;A.setBlending(Ga),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const W=y!==this.type;W&&O.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(ee=>ee.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,ee=L.length;q<ee;q++){const F=L[q],V=F.shadow;if(V===void 0){rt("WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ne=V.getFrameExtents();if(o.multiply(ne),c.copy(V.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/ne.x),o.x=c.x*ne.x,V.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/ne.y),o.y=c.y*ne.y,V.mapSize.y=c.y)),V.map===null||W===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Il){if(F.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Yi(o.x,o.y,{format:Ao,type:ha,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),V.map.texture.name=F.name+".shadowMap",V.map.depthTexture=new $l(o.x,o.y,ji),V.map.depthTexture.name=F.name+".shadowMapDepth",V.map.depthTexture.format=Xa,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gn,V.map.depthTexture.magFilter=Gn}else{F.isPointLight?(V.map=new hS(o.x),V.map.depthTexture=new s2(o.x,da)):(V.map=new Yi(o.x,o.y),V.map.depthTexture=new $l(o.x,o.y,da)),V.map.depthTexture.name=F.name+".shadowMap",V.map.depthTexture.format=Xa;const Se=a.state.buffers.depth.getReversed();this.type===ju?(V.map.depthTexture.compareFunction=Se?Vm:Gm,V.map.depthTexture.minFilter=Mn,V.map.depthTexture.magFilter=Mn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gn,V.map.depthTexture.magFilter=Gn)}V.camera.updateProjectionMatrix()}const be=V.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<be;Se++){if(V.map.isWebGLCubeRenderTarget)a.setRenderTarget(V.map,Se),a.clear();else{Se===0&&(a.setRenderTarget(V.map),a.clear());const I=V.getViewport(Se);f.set(c.x*I.x,c.y*I.y,c.x*I.z,c.y*I.w),A.viewport(f)}if(F.isPointLight){const I=V.camera,oe=V.matrix,_e=F.distance||I.far;_e!==I.far&&(I.far=_e,I.updateProjectionMatrix()),Pl.setFromMatrixPosition(F.matrixWorld),I.position.copy(Pl),_p.copy(I.position),_p.add(XD[Se]),I.up.copy(WD[Se]),I.lookAt(_p),I.updateMatrixWorld(),oe.makeTranslation(-Pl.x,-Pl.y,-Pl.z),ry.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ry,I.coordinateSystem,I.reversedDepth)}else V.updateMatrices(F);r=V.getFrustum(),U(O,Q,V.camera,F,this.type)}V.isPointLightShadow!==!0&&this.type===Il&&P(V,Q),V.needsUpdate=!1}y=this.type,b.needsUpdate=!1,a.setRenderTarget(C,D,k)};function P(L,O){const Q=e.update(E);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Yi(o.x,o.y,{format:Ao,type:ha})),x.uniforms.shadow_pass.value=L.map.depthTexture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(O,null,Q,x,E,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(O,null,Q,M,E,null)}function B(L,O,Q,C){let D=null;const k=Q.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)D=k;else if(D=Q.isPointLight===!0?m:d,a.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const A=D.uuid,W=O.uuid;let q=p[A];q===void 0&&(q={},p[A]=q);let ee=q[W];ee===void 0&&(ee=D.clone(),q[W]=ee,O.addEventListener("dispose",z)),D=ee}if(D.visible=O.visible,D.wireframe=O.wireframe,C===Il?D.side=O.shadowSide!==null?O.shadowSide:O.side:D.side=O.shadowSide!==null?O.shadowSide:g[O.side],D.alphaMap=O.alphaMap,D.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,D.map=O.map,D.clipShadows=O.clipShadows,D.clippingPlanes=O.clippingPlanes,D.clipIntersection=O.clipIntersection,D.displacementMap=O.displacementMap,D.displacementScale=O.displacementScale,D.displacementBias=O.displacementBias,D.wireframeLinewidth=O.wireframeLinewidth,D.linewidth=O.linewidth,Q.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const A=a.properties.get(D);A.light=Q}return D}function U(L,O,Q,C,D){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&D===Il)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,L.matrixWorld);const W=e.update(L),q=L.material;if(Array.isArray(q)){const ee=W.groups;for(let F=0,V=ee.length;F<V;F++){const ne=ee[F],be=q[ne.materialIndex];if(be&&be.visible){const Se=B(L,be,C,D);L.onBeforeShadow(a,L,O,Q,W,Se,ne),a.renderBufferDirect(Q,null,W,Se,L,ne),L.onAfterShadow(a,L,O,Q,W,Se,ne)}}}else if(q.visible){const ee=B(L,q,C,D);L.onBeforeShadow(a,L,O,Q,W,ee,null),a.renderBufferDirect(Q,null,W,ee,L,null),L.onAfterShadow(a,L,O,Q,W,ee,null)}}const A=L.children;for(let W=0,q=A.length;W<q;W++)U(A[W],O,Q,C,D)}function z(L){L.target.removeEventListener("dispose",z);for(const Q in p){const C=p[Q],D=L.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const jD={[wp]:Dp,[Up]:Op,[Np]:Pp,[Eo]:Lp,[Dp]:wp,[Op]:Up,[Pp]:Np,[Lp]:Eo};function YD(a,e){function n(){let Y=!1;const Le=new fn;let Ae=null;const Ie=new fn(0,0,0,0);return{setMask:function(Me){Ae!==Me&&!Y&&(a.colorMask(Me,Me,Me,Me),Ae=Me)},setLocked:function(Me){Y=Me},setClear:function(Me,ye,De,at,zt){zt===!0&&(Me*=at,ye*=at,De*=at),Le.set(Me,ye,De,at),Ie.equals(Le)===!1&&(a.clearColor(Me,ye,De,at),Ie.copy(Le))},reset:function(){Y=!1,Ae=null,Ie.set(-1,0,0,0)}}}function r(){let Y=!1,Le=!1,Ae=null,Ie=null,Me=null;return{setReversed:function(ye){if(Le!==ye){const De=e.get("EXT_clip_control");ye?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Le=ye;const at=Me;Me=null,this.setClear(at)}},getReversed:function(){return Le},setTest:function(ye){ye?pe(a.DEPTH_TEST):Re(a.DEPTH_TEST)},setMask:function(ye){Ae!==ye&&!Y&&(a.depthMask(ye),Ae=ye)},setFunc:function(ye){if(Le&&(ye=jD[ye]),Ie!==ye){switch(ye){case wp:a.depthFunc(a.NEVER);break;case Dp:a.depthFunc(a.ALWAYS);break;case Up:a.depthFunc(a.LESS);break;case Eo:a.depthFunc(a.LEQUAL);break;case Np:a.depthFunc(a.EQUAL);break;case Lp:a.depthFunc(a.GEQUAL);break;case Op:a.depthFunc(a.GREATER);break;case Pp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ie=ye}},setLocked:function(ye){Y=ye},setClear:function(ye){Me!==ye&&(Le&&(ye=1-ye),a.clearDepth(ye),Me=ye)},reset:function(){Y=!1,Ae=null,Ie=null,Me=null,Le=!1}}}function o(){let Y=!1,Le=null,Ae=null,Ie=null,Me=null,ye=null,De=null,at=null,zt=null;return{setTest:function(Ct){Y||(Ct?pe(a.STENCIL_TEST):Re(a.STENCIL_TEST))},setMask:function(Ct){Le!==Ct&&!Y&&(a.stencilMask(Ct),Le=Ct)},setFunc:function(Ct,Vn,Fi){(Ae!==Ct||Ie!==Vn||Me!==Fi)&&(a.stencilFunc(Ct,Vn,Fi),Ae=Ct,Ie=Vn,Me=Fi)},setOp:function(Ct,Vn,Fi){(ye!==Ct||De!==Vn||at!==Fi)&&(a.stencilOp(Ct,Vn,Fi),ye=Ct,De=Vn,at=Fi)},setLocked:function(Ct){Y=Ct},setClear:function(Ct){zt!==Ct&&(a.clearStencil(Ct),zt=Ct)},reset:function(){Y=!1,Le=null,Ae=null,Ie=null,Me=null,ye=null,De=null,at=null,zt=null}}}const c=new n,f=new r,d=new o,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,M=[],T=null,E=!1,b=null,y=null,P=null,B=null,U=null,z=null,L=null,O=new Bt(0,0,0),Q=0,C=!1,D=null,k=null,A=null,W=null,q=null;const ee=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const ne=a.getParameter(a.VERSION);ne.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ne)[1]),F=V>=1):ne.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),F=V>=2);let be=null,Se={};const I=a.getParameter(a.SCISSOR_BOX),oe=a.getParameter(a.VIEWPORT),_e=new fn().fromArray(I),Ce=new fn().fromArray(oe);function He(Y,Le,Ae,Ie){const Me=new Uint8Array(4),ye=a.createTexture();a.bindTexture(Y,ye),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let De=0;De<Ae;De++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(Le,0,a.RGBA,1,1,Ie,0,a.RGBA,a.UNSIGNED_BYTE,Me):a.texImage2D(Le+De,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Me);return ye}const re={};re[a.TEXTURE_2D]=He(a.TEXTURE_2D,a.TEXTURE_2D,1),re[a.TEXTURE_CUBE_MAP]=He(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[a.TEXTURE_2D_ARRAY]=He(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),re[a.TEXTURE_3D]=He(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),pe(a.DEPTH_TEST),f.setFunc(Eo),st(!1),nn(ox),pe(a.CULL_FACE),gt(Ga);function pe(Y){v[Y]!==!0&&(a.enable(Y),v[Y]=!0)}function Re(Y){v[Y]!==!1&&(a.disable(Y),v[Y]=!1)}function Xe(Y,Le){return g[Y]!==Le?(a.bindFramebuffer(Y,Le),g[Y]=Le,Y===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Le),Y===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ve(Y,Le){let Ae=M,Ie=!1;if(Y){Ae=x.get(Le),Ae===void 0&&(Ae=[],x.set(Le,Ae));const Me=Y.textures;if(Ae.length!==Me.length||Ae[0]!==a.COLOR_ATTACHMENT0){for(let ye=0,De=Me.length;ye<De;ye++)Ae[ye]=a.COLOR_ATTACHMENT0+ye;Ae.length=Me.length,Ie=!0}}else Ae[0]!==a.BACK&&(Ae[0]=a.BACK,Ie=!0);Ie&&a.drawBuffers(Ae)}function mt(Y){return T!==Y?(a.useProgram(Y),T=Y,!0):!1}const tn={[ss]:a.FUNC_ADD,[JA]:a.FUNC_SUBTRACT,[eC]:a.FUNC_REVERSE_SUBTRACT};tn[tC]=a.MIN,tn[nC]=a.MAX;const vt={[iC]:a.ZERO,[aC]:a.ONE,[rC]:a.SRC_COLOR,[Cp]:a.SRC_ALPHA,[fC]:a.SRC_ALPHA_SATURATE,[cC]:a.DST_COLOR,[oC]:a.DST_ALPHA,[sC]:a.ONE_MINUS_SRC_COLOR,[Rp]:a.ONE_MINUS_SRC_ALPHA,[uC]:a.ONE_MINUS_DST_COLOR,[lC]:a.ONE_MINUS_DST_ALPHA,[dC]:a.CONSTANT_COLOR,[hC]:a.ONE_MINUS_CONSTANT_COLOR,[pC]:a.CONSTANT_ALPHA,[mC]:a.ONE_MINUS_CONSTANT_ALPHA};function gt(Y,Le,Ae,Ie,Me,ye,De,at,zt,Ct){if(Y===Ga){E===!0&&(Re(a.BLEND),E=!1);return}if(E===!1&&(pe(a.BLEND),E=!0),Y!==QA){if(Y!==b||Ct!==C){if((y!==ss||U!==ss)&&(a.blendEquation(a.FUNC_ADD),y=ss,U=ss),Ct)switch(Y){case So:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ap:a.blendFunc(a.ONE,a.ONE);break;case lx:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case cx:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ut("WebGLState: Invalid blending: ",Y);break}else switch(Y){case So:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ap:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case lx:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cx:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",Y);break}P=null,B=null,z=null,L=null,O.set(0,0,0),Q=0,b=Y,C=Ct}return}Me=Me||Le,ye=ye||Ae,De=De||Ie,(Le!==y||Me!==U)&&(a.blendEquationSeparate(tn[Le],tn[Me]),y=Le,U=Me),(Ae!==P||Ie!==B||ye!==z||De!==L)&&(a.blendFuncSeparate(vt[Ae],vt[Ie],vt[ye],vt[De]),P=Ae,B=Ie,z=ye,L=De),(at.equals(O)===!1||zt!==Q)&&(a.blendColor(at.r,at.g,at.b,zt),O.copy(at),Q=zt),b=Y,C=!1}function Tt(Y,Le){Y.side===Ha?Re(a.CULL_FACE):pe(a.CULL_FACE);let Ae=Y.side===ii;Le&&(Ae=!Ae),st(Ae),Y.blending===So&&Y.transparent===!1?gt(Ga):gt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ie=Y.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Kt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?pe(a.SAMPLE_ALPHA_TO_COVERAGE):Re(a.SAMPLE_ALPHA_TO_COVERAGE)}function st(Y){D!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),D=Y)}function nn(Y){Y!==ZA?(pe(a.CULL_FACE),Y!==k&&(Y===ox?a.cullFace(a.BACK):Y===KA?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Re(a.CULL_FACE),k=Y}function X(Y){Y!==A&&(F&&a.lineWidth(Y),A=Y)}function Kt(Y,Le,Ae){Y?(pe(a.POLYGON_OFFSET_FILL),(W!==Le||q!==Ae)&&(a.polygonOffset(Le,Ae),W=Le,q=Ae)):Re(a.POLYGON_OFFSET_FILL)}function bt(Y){Y?pe(a.SCISSOR_TEST):Re(a.SCISSOR_TEST)}function At(Y){Y===void 0&&(Y=a.TEXTURE0+ee-1),be!==Y&&(a.activeTexture(Y),be=Y)}function je(Y,Le,Ae){Ae===void 0&&(be===null?Ae=a.TEXTURE0+ee-1:Ae=be);let Ie=Se[Ae];Ie===void 0&&(Ie={type:void 0,texture:void 0},Se[Ae]=Ie),(Ie.type!==Y||Ie.texture!==Le)&&(be!==Ae&&(a.activeTexture(Ae),be=Ae),a.bindTexture(Y,Le||re[Y]),Ie.type=Y,Ie.texture=Le)}function N(){const Y=Se[be];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function _(){try{a.compressedTexImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function H(){try{a.compressedTexImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function J(){try{a.texSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function he(){try{a.texSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function se(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Fe(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function we(){try{a.texStorage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function ke(){try{a.texStorage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function et(){try{a.texImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Ee(){try{a.texImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Te(Y){_e.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),_e.copy(Y))}function ze(Y){Ce.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),Ce.copy(Y))}function Be(Y,Le){let Ae=p.get(Le);Ae===void 0&&(Ae=new WeakMap,p.set(Le,Ae));let Ie=Ae.get(Y);Ie===void 0&&(Ie=a.getUniformBlockIndex(Le,Y.name),Ae.set(Y,Ie))}function Ue(Y,Le){const Ie=p.get(Le).get(Y);m.get(Le)!==Ie&&(a.uniformBlockBinding(Le,Ie,Y.__bindingPointIndex),m.set(Le,Ie))}function ft(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),v={},be=null,Se={},g={},x=new WeakMap,M=[],T=null,E=!1,b=null,y=null,P=null,B=null,U=null,z=null,L=null,O=new Bt(0,0,0),Q=0,C=!1,D=null,k=null,A=null,W=null,q=null,_e.set(0,0,a.canvas.width,a.canvas.height),Ce.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:pe,disable:Re,bindFramebuffer:Xe,drawBuffers:Ve,useProgram:mt,setBlending:gt,setMaterial:Tt,setFlipSided:st,setCullFace:nn,setLineWidth:X,setPolygonOffset:Kt,setScissorTest:bt,activeTexture:At,bindTexture:je,unbindTexture:N,compressedTexImage2D:_,compressedTexImage3D:H,texImage2D:et,texImage3D:Ee,updateUBOMapping:Be,uniformBlockBinding:Ue,texStorage2D:we,texStorage3D:ke,texSubImage2D:J,texSubImage3D:he,compressedTexSubImage2D:se,compressedTexSubImage3D:Fe,scissor:Te,viewport:ze,reset:ft}}function ZD(a,e,n,r,o,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,v=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,_){return M?new OffscreenCanvas(N,_):rf("canvas")}function E(N,_,H){let J=1;const he=je(N);if((he.width>H||he.height>H)&&(J=H/Math.max(he.width,he.height)),J<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const se=Math.floor(J*he.width),Fe=Math.floor(J*he.height);g===void 0&&(g=T(se,Fe));const we=_?T(se,Fe):g;return we.width=se,we.height=Fe,we.getContext("2d").drawImage(N,0,0,se,Fe),rt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+se+"x"+Fe+")."),we}else return"data"in N&&rt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),N;return N}function b(N){return N.generateMipmaps}function y(N){a.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?a.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function B(N,_,H,J,he=!1){if(N!==null){if(a[N]!==void 0)return a[N];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let se=_;if(_===a.RED&&(H===a.FLOAT&&(se=a.R32F),H===a.HALF_FLOAT&&(se=a.R16F),H===a.UNSIGNED_BYTE&&(se=a.R8)),_===a.RED_INTEGER&&(H===a.UNSIGNED_BYTE&&(se=a.R8UI),H===a.UNSIGNED_SHORT&&(se=a.R16UI),H===a.UNSIGNED_INT&&(se=a.R32UI),H===a.BYTE&&(se=a.R8I),H===a.SHORT&&(se=a.R16I),H===a.INT&&(se=a.R32I)),_===a.RG&&(H===a.FLOAT&&(se=a.RG32F),H===a.HALF_FLOAT&&(se=a.RG16F),H===a.UNSIGNED_BYTE&&(se=a.RG8)),_===a.RG_INTEGER&&(H===a.UNSIGNED_BYTE&&(se=a.RG8UI),H===a.UNSIGNED_SHORT&&(se=a.RG16UI),H===a.UNSIGNED_INT&&(se=a.RG32UI),H===a.BYTE&&(se=a.RG8I),H===a.SHORT&&(se=a.RG16I),H===a.INT&&(se=a.RG32I)),_===a.RGB_INTEGER&&(H===a.UNSIGNED_BYTE&&(se=a.RGB8UI),H===a.UNSIGNED_SHORT&&(se=a.RGB16UI),H===a.UNSIGNED_INT&&(se=a.RGB32UI),H===a.BYTE&&(se=a.RGB8I),H===a.SHORT&&(se=a.RGB16I),H===a.INT&&(se=a.RGB32I)),_===a.RGBA_INTEGER&&(H===a.UNSIGNED_BYTE&&(se=a.RGBA8UI),H===a.UNSIGNED_SHORT&&(se=a.RGBA16UI),H===a.UNSIGNED_INT&&(se=a.RGBA32UI),H===a.BYTE&&(se=a.RGBA8I),H===a.SHORT&&(se=a.RGBA16I),H===a.INT&&(se=a.RGBA32I)),_===a.RGB&&(H===a.UNSIGNED_INT_5_9_9_9_REV&&(se=a.RGB9_E5),H===a.UNSIGNED_INT_10F_11F_11F_REV&&(se=a.R11F_G11F_B10F)),_===a.RGBA){const Fe=he?nf:Rt.getTransfer(J);H===a.FLOAT&&(se=a.RGBA32F),H===a.HALF_FLOAT&&(se=a.RGBA16F),H===a.UNSIGNED_BYTE&&(se=Fe===Wt?a.SRGB8_ALPHA8:a.RGBA8),H===a.UNSIGNED_SHORT_4_4_4_4&&(se=a.RGBA4),H===a.UNSIGNED_SHORT_5_5_5_1&&(se=a.RGB5_A1)}return(se===a.R16F||se===a.R32F||se===a.RG16F||se===a.RG32F||se===a.RGBA16F||se===a.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function U(N,_){let H;return N?_===null||_===da||_===Zl?H=a.DEPTH24_STENCIL8:_===ji?H=a.DEPTH32F_STENCIL8:_===Yl&&(H=a.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===da||_===Zl?H=a.DEPTH_COMPONENT24:_===ji?H=a.DEPTH_COMPONENT32F:_===Yl&&(H=a.DEPTH_COMPONENT16),H}function z(N,_){return b(N)===!0||N.isFramebufferTexture&&N.minFilter!==Gn&&N.minFilter!==Mn?Math.log2(Math.max(_.width,_.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?_.mipmaps.length:1}function L(N){const _=N.target;_.removeEventListener("dispose",L),Q(_),_.isVideoTexture&&v.delete(_)}function O(N){const _=N.target;_.removeEventListener("dispose",O),D(_)}function Q(N){const _=r.get(N);if(_.__webglInit===void 0)return;const H=N.source,J=x.get(H);if(J){const he=J[_.__cacheKey];he.usedTimes--,he.usedTimes===0&&C(N),Object.keys(J).length===0&&x.delete(H)}r.remove(N)}function C(N){const _=r.get(N);a.deleteTexture(_.__webglTexture);const H=N.source,J=x.get(H);delete J[_.__cacheKey],f.memory.textures--}function D(N){const _=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let he=0;he<_.__webglFramebuffer[J].length;he++)a.deleteFramebuffer(_.__webglFramebuffer[J][he]);else a.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)a.deleteFramebuffer(_.__webglFramebuffer[J]);else a.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&a.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&a.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&a.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const H=N.textures;for(let J=0,he=H.length;J<he;J++){const se=r.get(H[J]);se.__webglTexture&&(a.deleteTexture(se.__webglTexture),f.memory.textures--),r.remove(H[J])}r.remove(N)}let k=0;function A(){k=0}function W(){const N=k;return N>=o.maxTextures&&rt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),k+=1,N}function q(N){const _=[];return _.push(N.wrapS),_.push(N.wrapT),_.push(N.wrapR||0),_.push(N.magFilter),_.push(N.minFilter),_.push(N.anisotropy),_.push(N.internalFormat),_.push(N.format),_.push(N.type),_.push(N.generateMipmaps),_.push(N.premultiplyAlpha),_.push(N.flipY),_.push(N.unpackAlignment),_.push(N.colorSpace),_.join()}function ee(N,_){const H=r.get(N);if(N.isVideoTexture&&bt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&H.__version!==N.version){const J=N.image;if(J===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{re(H,N,_);return}}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,H.__webglTexture,a.TEXTURE0+_)}function F(N,_){const H=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){re(H,N,_);return}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,H.__webglTexture,a.TEXTURE0+_)}function V(N,_){const H=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){re(H,N,_);return}n.bindTexture(a.TEXTURE_3D,H.__webglTexture,a.TEXTURE0+_)}function ne(N,_){const H=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&H.__version!==N.version){pe(H,N,_);return}n.bindTexture(a.TEXTURE_CUBE_MAP,H.__webglTexture,a.TEXTURE0+_)}const be={[Ip]:a.REPEAT,[gi]:a.CLAMP_TO_EDGE,[zp]:a.MIRRORED_REPEAT},Se={[Gn]:a.NEAREST,[_C]:a.NEAREST_MIPMAP_NEAREST,[yu]:a.NEAREST_MIPMAP_LINEAR,[Mn]:a.LINEAR,[Gh]:a.LINEAR_MIPMAP_NEAREST,[cs]:a.LINEAR_MIPMAP_LINEAR},I={[bC]:a.NEVER,[CC]:a.ALWAYS,[MC]:a.LESS,[Gm]:a.LEQUAL,[EC]:a.EQUAL,[Vm]:a.GEQUAL,[TC]:a.GREATER,[AC]:a.NOTEQUAL};function oe(N,_){if(_.type===ji&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Mn||_.magFilter===Gh||_.magFilter===yu||_.magFilter===cs||_.minFilter===Mn||_.minFilter===Gh||_.minFilter===yu||_.minFilter===cs)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(N,a.TEXTURE_WRAP_S,be[_.wrapS]),a.texParameteri(N,a.TEXTURE_WRAP_T,be[_.wrapT]),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,be[_.wrapR]),a.texParameteri(N,a.TEXTURE_MAG_FILTER,Se[_.magFilter]),a.texParameteri(N,a.TEXTURE_MIN_FILTER,Se[_.minFilter]),_.compareFunction&&(a.texParameteri(N,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(N,a.TEXTURE_COMPARE_FUNC,I[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gn||_.minFilter!==yu&&_.minFilter!==cs||_.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");a.texParameterf(N,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,o.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function _e(N,_){let H=!1;N.__webglInit===void 0&&(N.__webglInit=!0,_.addEventListener("dispose",L));const J=_.source;let he=x.get(J);he===void 0&&(he={},x.set(J,he));const se=q(_);if(se!==N.__cacheKey){he[se]===void 0&&(he[se]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,H=!0),he[se].usedTimes++;const Fe=he[N.__cacheKey];Fe!==void 0&&(he[N.__cacheKey].usedTimes--,Fe.usedTimes===0&&C(_)),N.__cacheKey=se,N.__webglTexture=he[se].texture}return H}function Ce(N,_,H){return Math.floor(Math.floor(N/H)/_)}function He(N,_,H,J){const se=N.updateRanges;if(se.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,_.width,_.height,H,J,_.data);else{se.sort((Ee,Te)=>Ee.start-Te.start);let Fe=0;for(let Ee=1;Ee<se.length;Ee++){const Te=se[Fe],ze=se[Ee],Be=Te.start+Te.count,Ue=Ce(ze.start,_.width,4),ft=Ce(Te.start,_.width,4);ze.start<=Be+1&&Ue===ft&&Ce(ze.start+ze.count-1,_.width,4)===Ue?Te.count=Math.max(Te.count,ze.start+ze.count-Te.start):(++Fe,se[Fe]=ze)}se.length=Fe+1;const we=a.getParameter(a.UNPACK_ROW_LENGTH),ke=a.getParameter(a.UNPACK_SKIP_PIXELS),et=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,_.width);for(let Ee=0,Te=se.length;Ee<Te;Ee++){const ze=se[Ee],Be=Math.floor(ze.start/4),Ue=Math.ceil(ze.count/4),ft=Be%_.width,Y=Math.floor(Be/_.width),Le=Ue,Ae=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ft),a.pixelStorei(a.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(a.TEXTURE_2D,0,ft,Y,Le,Ae,H,J,_.data)}N.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,we),a.pixelStorei(a.UNPACK_SKIP_PIXELS,ke),a.pixelStorei(a.UNPACK_SKIP_ROWS,et)}}function re(N,_,H){let J=a.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=a.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=a.TEXTURE_3D);const he=_e(N,_),se=_.source;n.bindTexture(J,N.__webglTexture,a.TEXTURE0+H);const Fe=r.get(se);if(se.version!==Fe.__version||he===!0){n.activeTexture(a.TEXTURE0+H);const we=Rt.getPrimaries(Rt.workingColorSpace),ke=_.colorSpace===Ar?null:Rt.getPrimaries(_.colorSpace),et=_.colorSpace===Ar||we===ke?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Ee=E(_.image,!1,o.maxTextureSize);Ee=At(_,Ee);const Te=c.convert(_.format,_.colorSpace),ze=c.convert(_.type);let Be=B(_.internalFormat,Te,ze,_.colorSpace,_.isVideoTexture);oe(J,_);let Ue;const ft=_.mipmaps,Y=_.isVideoTexture!==!0,Le=Fe.__version===void 0||he===!0,Ae=se.dataReady,Ie=z(_,Ee);if(_.isDepthTexture)Be=U(_.format===us,_.type),Le&&(Y?n.texStorage2D(a.TEXTURE_2D,1,Be,Ee.width,Ee.height):n.texImage2D(a.TEXTURE_2D,0,Be,Ee.width,Ee.height,0,Te,ze,null));else if(_.isDataTexture)if(ft.length>0){Y&&Le&&n.texStorage2D(a.TEXTURE_2D,Ie,Be,ft[0].width,ft[0].height);for(let Me=0,ye=ft.length;Me<ye;Me++)Ue=ft[Me],Y?Ae&&n.texSubImage2D(a.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Te,ze,Ue.data):n.texImage2D(a.TEXTURE_2D,Me,Be,Ue.width,Ue.height,0,Te,ze,Ue.data);_.generateMipmaps=!1}else Y?(Le&&n.texStorage2D(a.TEXTURE_2D,Ie,Be,Ee.width,Ee.height),Ae&&He(_,Ee,Te,ze)):n.texImage2D(a.TEXTURE_2D,0,Be,Ee.width,Ee.height,0,Te,ze,Ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Y&&Le&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,Be,ft[0].width,ft[0].height,Ee.depth);for(let Me=0,ye=ft.length;Me<ye;Me++)if(Ue=ft[Me],_.format!==Li)if(Te!==null)if(Y){if(Ae)if(_.layerUpdates.size>0){const De=Fx(Ue.width,Ue.height,_.format,_.type);for(const at of _.layerUpdates){const zt=Ue.data.subarray(at*De/Ue.data.BYTES_PER_ELEMENT,(at+1)*De/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,at,Ue.width,Ue.height,1,Te,zt)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,0,Ue.width,Ue.height,Ee.depth,Te,Ue.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Me,Be,Ue.width,Ue.height,Ee.depth,0,Ue.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Ae&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,0,Ue.width,Ue.height,Ee.depth,Te,ze,Ue.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Me,Be,Ue.width,Ue.height,Ee.depth,0,Te,ze,Ue.data)}else{Y&&Le&&n.texStorage2D(a.TEXTURE_2D,Ie,Be,ft[0].width,ft[0].height);for(let Me=0,ye=ft.length;Me<ye;Me++)Ue=ft[Me],_.format!==Li?Te!==null?Y?Ae&&n.compressedTexSubImage2D(a.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Te,Ue.data):n.compressedTexImage2D(a.TEXTURE_2D,Me,Be,Ue.width,Ue.height,0,Ue.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Ae&&n.texSubImage2D(a.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Te,ze,Ue.data):n.texImage2D(a.TEXTURE_2D,Me,Be,Ue.width,Ue.height,0,Te,ze,Ue.data)}else if(_.isDataArrayTexture)if(Y){if(Le&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,Be,Ee.width,Ee.height,Ee.depth),Ae)if(_.layerUpdates.size>0){const Me=Fx(Ee.width,Ee.height,_.format,_.type);for(const ye of _.layerUpdates){const De=Ee.data.subarray(ye*Me/Ee.data.BYTES_PER_ELEMENT,(ye+1)*Me/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ye,Ee.width,Ee.height,1,Te,ze,De)}_.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,ze,Ee.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Be,Ee.width,Ee.height,Ee.depth,0,Te,ze,Ee.data);else if(_.isData3DTexture)Y?(Le&&n.texStorage3D(a.TEXTURE_3D,Ie,Be,Ee.width,Ee.height,Ee.depth),Ae&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,ze,Ee.data)):n.texImage3D(a.TEXTURE_3D,0,Be,Ee.width,Ee.height,Ee.depth,0,Te,ze,Ee.data);else if(_.isFramebufferTexture){if(Le)if(Y)n.texStorage2D(a.TEXTURE_2D,Ie,Be,Ee.width,Ee.height);else{let Me=Ee.width,ye=Ee.height;for(let De=0;De<Ie;De++)n.texImage2D(a.TEXTURE_2D,De,Be,Me,ye,0,Te,ze,null),Me>>=1,ye>>=1}}else if(ft.length>0){if(Y&&Le){const Me=je(ft[0]);n.texStorage2D(a.TEXTURE_2D,Ie,Be,Me.width,Me.height)}for(let Me=0,ye=ft.length;Me<ye;Me++)Ue=ft[Me],Y?Ae&&n.texSubImage2D(a.TEXTURE_2D,Me,0,0,Te,ze,Ue):n.texImage2D(a.TEXTURE_2D,Me,Be,Te,ze,Ue);_.generateMipmaps=!1}else if(Y){if(Le){const Me=je(Ee);n.texStorage2D(a.TEXTURE_2D,Ie,Be,Me.width,Me.height)}Ae&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Te,ze,Ee)}else n.texImage2D(a.TEXTURE_2D,0,Be,Te,ze,Ee);b(_)&&y(J),Fe.__version=se.version,_.onUpdate&&_.onUpdate(_)}N.__version=_.version}function pe(N,_,H){if(_.image.length!==6)return;const J=_e(N,_),he=_.source;n.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+H);const se=r.get(he);if(he.version!==se.__version||J===!0){n.activeTexture(a.TEXTURE0+H);const Fe=Rt.getPrimaries(Rt.workingColorSpace),we=_.colorSpace===Ar?null:Rt.getPrimaries(_.colorSpace),ke=_.colorSpace===Ar||Fe===we?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const et=_.isCompressedTexture||_.image[0].isCompressedTexture,Ee=_.image[0]&&_.image[0].isDataTexture,Te=[];for(let ye=0;ye<6;ye++)!et&&!Ee?Te[ye]=E(_.image[ye],!0,o.maxCubemapSize):Te[ye]=Ee?_.image[ye].image:_.image[ye],Te[ye]=At(_,Te[ye]);const ze=Te[0],Be=c.convert(_.format,_.colorSpace),Ue=c.convert(_.type),ft=B(_.internalFormat,Be,Ue,_.colorSpace),Y=_.isVideoTexture!==!0,Le=se.__version===void 0||J===!0,Ae=he.dataReady;let Ie=z(_,ze);oe(a.TEXTURE_CUBE_MAP,_);let Me;if(et){Y&&Le&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,ft,ze.width,ze.height);for(let ye=0;ye<6;ye++){Me=Te[ye].mipmaps;for(let De=0;De<Me.length;De++){const at=Me[De];_.format!==Li?Be!==null?Y?Ae&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De,0,0,at.width,at.height,Be,at.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De,ft,at.width,at.height,0,at.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Ae&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De,0,0,at.width,at.height,Be,Ue,at.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De,ft,at.width,at.height,0,Be,Ue,at.data)}}}else{if(Me=_.mipmaps,Y&&Le){Me.length>0&&Ie++;const ye=je(Te[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,ft,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ee){Y?Ae&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Te[ye].width,Te[ye].height,Be,Ue,Te[ye].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ft,Te[ye].width,Te[ye].height,0,Be,Ue,Te[ye].data);for(let De=0;De<Me.length;De++){const zt=Me[De].image[ye].image;Y?Ae&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De+1,0,0,zt.width,zt.height,Be,Ue,zt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De+1,ft,zt.width,zt.height,0,Be,Ue,zt.data)}}else{Y?Ae&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Be,Ue,Te[ye]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ft,Be,Ue,Te[ye]);for(let De=0;De<Me.length;De++){const at=Me[De];Y?Ae&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De+1,0,0,Be,Ue,at.image[ye]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De+1,ft,Be,Ue,at.image[ye])}}}b(_)&&y(a.TEXTURE_CUBE_MAP),se.__version=he.version,_.onUpdate&&_.onUpdate(_)}N.__version=_.version}function Re(N,_,H,J,he,se){const Fe=c.convert(H.format,H.colorSpace),we=c.convert(H.type),ke=B(H.internalFormat,Fe,we,H.colorSpace),et=r.get(_),Ee=r.get(H);if(Ee.__renderTarget=_,!et.__hasExternalTextures){const Te=Math.max(1,_.width>>se),ze=Math.max(1,_.height>>se);he===a.TEXTURE_3D||he===a.TEXTURE_2D_ARRAY?n.texImage3D(he,se,ke,Te,ze,_.depth,0,Fe,we,null):n.texImage2D(he,se,ke,Te,ze,0,Fe,we,null)}n.bindFramebuffer(a.FRAMEBUFFER,N),Kt(_)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,J,he,Ee.__webglTexture,0,X(_)):(he===a.TEXTURE_2D||he>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,J,he,Ee.__webglTexture,se),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Xe(N,_,H){if(a.bindRenderbuffer(a.RENDERBUFFER,N),_.depthBuffer){const J=_.depthTexture,he=J&&J.isDepthTexture?J.type:null,se=U(_.stencilBuffer,he),Fe=_.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Kt(_)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X(_),se,_.width,_.height):H?a.renderbufferStorageMultisample(a.RENDERBUFFER,X(_),se,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,se,_.width,_.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Fe,a.RENDERBUFFER,N)}else{const J=_.textures;for(let he=0;he<J.length;he++){const se=J[he],Fe=c.convert(se.format,se.colorSpace),we=c.convert(se.type),ke=B(se.internalFormat,Fe,we,se.colorSpace);Kt(_)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X(_),ke,_.width,_.height):H?a.renderbufferStorageMultisample(a.RENDERBUFFER,X(_),ke,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,ke,_.width,_.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ve(N,_,H){const J=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,N),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(_.depthTexture);if(he.__renderTarget=_,(!he.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J){if(he.__webglInit===void 0&&(he.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),he.__webglTexture===void 0){he.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),oe(a.TEXTURE_CUBE_MAP,_.depthTexture);const et=c.convert(_.depthTexture.format),Ee=c.convert(_.depthTexture.type);let Te;_.depthTexture.format===Xa?Te=a.DEPTH_COMPONENT24:_.depthTexture.format===us&&(Te=a.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Te,_.width,_.height,0,et,Ee,null)}}else ee(_.depthTexture,0);const se=he.__webglTexture,Fe=X(_),we=J?a.TEXTURE_CUBE_MAP_POSITIVE_X+H:a.TEXTURE_2D,ke=_.depthTexture.format===us?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(_.depthTexture.format===Xa)Kt(_)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ke,we,se,0,Fe):a.framebufferTexture2D(a.FRAMEBUFFER,ke,we,se,0);else if(_.depthTexture.format===us)Kt(_)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ke,we,se,0,Fe):a.framebufferTexture2D(a.FRAMEBUFFER,ke,we,se,0);else throw new Error("Unknown depthTexture format")}function mt(N){const _=r.get(N),H=N.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==N.depthTexture){const J=N.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){const he=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",he)};J.addEventListener("dispose",he),_.__depthDisposeCallback=he}_.__boundDepthTexture=J}if(N.depthTexture&&!_.__autoAllocateDepthBuffer)if(H)for(let J=0;J<6;J++)Ve(_.__webglFramebuffer[J],N,J);else{const J=N.texture.mipmaps;J&&J.length>0?Ve(_.__webglFramebuffer[0],N,0):Ve(_.__webglFramebuffer,N,0)}else if(H){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=a.createRenderbuffer(),Xe(_.__webglDepthbuffer[J],N,!1);else{const he=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[J];a.bindRenderbuffer(a.RENDERBUFFER,se),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,se)}}else{const J=N.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=a.createRenderbuffer(),Xe(_.__webglDepthbuffer,N,!1);else{const he=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,se),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,se)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function tn(N,_,H){const J=r.get(N);_!==void 0&&Re(J.__webglFramebuffer,N,N.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),H!==void 0&&mt(N)}function vt(N){const _=N.texture,H=r.get(N),J=r.get(_);N.addEventListener("dispose",O);const he=N.textures,se=N.isWebGLCubeRenderTarget===!0,Fe=he.length>1;if(Fe||(J.__webglTexture===void 0&&(J.__webglTexture=a.createTexture()),J.__version=_.version,f.memory.textures++),se){H.__webglFramebuffer=[];for(let we=0;we<6;we++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[we]=[];for(let ke=0;ke<_.mipmaps.length;ke++)H.__webglFramebuffer[we][ke]=a.createFramebuffer()}else H.__webglFramebuffer[we]=a.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let we=0;we<_.mipmaps.length;we++)H.__webglFramebuffer[we]=a.createFramebuffer()}else H.__webglFramebuffer=a.createFramebuffer();if(Fe)for(let we=0,ke=he.length;we<ke;we++){const et=r.get(he[we]);et.__webglTexture===void 0&&(et.__webglTexture=a.createTexture(),f.memory.textures++)}if(N.samples>0&&Kt(N)===!1){H.__webglMultisampledFramebuffer=a.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let we=0;we<he.length;we++){const ke=he[we];H.__webglColorRenderbuffer[we]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,H.__webglColorRenderbuffer[we]);const et=c.convert(ke.format,ke.colorSpace),Ee=c.convert(ke.type),Te=B(ke.internalFormat,et,Ee,ke.colorSpace,N.isXRRenderTarget===!0),ze=X(N);a.renderbufferStorageMultisample(a.RENDERBUFFER,ze,Te,N.width,N.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,H.__webglColorRenderbuffer[we])}a.bindRenderbuffer(a.RENDERBUFFER,null),N.depthBuffer&&(H.__webglDepthRenderbuffer=a.createRenderbuffer(),Xe(H.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(se){n.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture),oe(a.TEXTURE_CUBE_MAP,_);for(let we=0;we<6;we++)if(_.mipmaps&&_.mipmaps.length>0)for(let ke=0;ke<_.mipmaps.length;ke++)Re(H.__webglFramebuffer[we][ke],N,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+we,ke);else Re(H.__webglFramebuffer[we],N,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);b(_)&&y(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Fe){for(let we=0,ke=he.length;we<ke;we++){const et=he[we],Ee=r.get(et);let Te=a.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Te=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Te,Ee.__webglTexture),oe(Te,et),Re(H.__webglFramebuffer,N,et,a.COLOR_ATTACHMENT0+we,Te,0),b(et)&&y(Te)}n.unbindTexture()}else{let we=a.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(we=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(we,J.__webglTexture),oe(we,_),_.mipmaps&&_.mipmaps.length>0)for(let ke=0;ke<_.mipmaps.length;ke++)Re(H.__webglFramebuffer[ke],N,_,a.COLOR_ATTACHMENT0,we,ke);else Re(H.__webglFramebuffer,N,_,a.COLOR_ATTACHMENT0,we,0);b(_)&&y(we),n.unbindTexture()}N.depthBuffer&&mt(N)}function gt(N){const _=N.textures;for(let H=0,J=_.length;H<J;H++){const he=_[H];if(b(he)){const se=P(N),Fe=r.get(he).__webglTexture;n.bindTexture(se,Fe),y(se),n.unbindTexture()}}}const Tt=[],st=[];function nn(N){if(N.samples>0){if(Kt(N)===!1){const _=N.textures,H=N.width,J=N.height;let he=a.COLOR_BUFFER_BIT;const se=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Fe=r.get(N),we=_.length>1;if(we)for(let et=0;et<_.length;et++)n.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+et,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+et,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const ke=N.texture.mipmaps;ke&&ke.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let et=0;et<_.length;et++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(he|=a.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(he|=a.STENCIL_BUFFER_BIT)),we){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Fe.__webglColorRenderbuffer[et]);const Ee=r.get(_[et]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ee,0)}a.blitFramebuffer(0,0,H,J,0,0,H,J,he,a.NEAREST),m===!0&&(Tt.length=0,st.length=0,Tt.push(a.COLOR_ATTACHMENT0+et),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Tt.push(se),st.push(se),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,st)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Tt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),we)for(let et=0;et<_.length;et++){n.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+et,a.RENDERBUFFER,Fe.__webglColorRenderbuffer[et]);const Ee=r.get(_[et]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+et,a.TEXTURE_2D,Ee,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const _=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[_])}}}function X(N){return Math.min(o.maxSamples,N.samples)}function Kt(N){const _=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function bt(N){const _=f.render.frame;v.get(N)!==_&&(v.set(N,_),N.update())}function At(N,_){const H=N.colorSpace,J=N.format,he=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||H!==Co&&H!==Ar&&(Rt.getTransfer(H)===Wt?(J!==Li||he!==Ni)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",H)),_}function je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=A,this.setTexture2D=ee,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=ne,this.rebindTextures=tn,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function KD(a,e){function n(r,o=Ar){let c;const f=Rt.getTransfer(o);if(r===Ni)return a.UNSIGNED_BYTE;if(r===Fm)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Bm)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Qy)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Jy)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ky)return a.BYTE;if(r===$y)return a.SHORT;if(r===Yl)return a.UNSIGNED_SHORT;if(r===Pm)return a.INT;if(r===da)return a.UNSIGNED_INT;if(r===ji)return a.FLOAT;if(r===ha)return a.HALF_FLOAT;if(r===eS)return a.ALPHA;if(r===tS)return a.RGB;if(r===Li)return a.RGBA;if(r===Xa)return a.DEPTH_COMPONENT;if(r===us)return a.DEPTH_STENCIL;if(r===nS)return a.RED;if(r===Im)return a.RED_INTEGER;if(r===Ao)return a.RG;if(r===zm)return a.RG_INTEGER;if(r===Hm)return a.RGBA_INTEGER;if(r===Yu||r===Zu||r===Ku||r===$u)if(f===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Yu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ku)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Yu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ku)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$u)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hp||r===Gp||r===Vp||r===kp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Hp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xp||r===Wp||r===qp||r===jp||r===Yp||r===Zp||r===Kp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Xp||r===Wp)return f===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===qp)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===jp)return c.COMPRESSED_R11_EAC;if(r===Yp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Zp)return c.COMPRESSED_RG11_EAC;if(r===Kp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===$p||r===Qp||r===Jp||r===em||r===tm||r===nm||r===im||r===am||r===rm||r===sm||r===om||r===lm||r===cm||r===um)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===$p)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qp)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jp)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===em)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tm)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nm)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===im)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===am)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rm)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sm)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===om)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lm)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cm)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===um)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fm||r===dm||r===hm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===fm)return f===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===dm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pm||r===mm||r===gm||r===vm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===pm)return c.COMPRESSED_RED_RGTC1_EXT;if(r===mm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const $D=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QD=`
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

}`;class JD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new gS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new pa({vertexShader:$D,fragmentShader:QD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Oi(new ds(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eU extends Do{constructor(e,n){super();const r=this;let o=null,c=1,f=null,d="local-floor",m=1,p=null,v=null,g=null,x=null,M=null,T=null;const E=typeof XRWebGLBinding<"u",b=new JD,y={},P=n.getContextAttributes();let B=null,U=null;const z=[],L=[],O=new ct;let Q=null;const C=new Wi;C.viewport=new fn;const D=new Wi;D.viewport=new fn;const k=[C,D],A=new c2;let W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let pe=z[re];return pe===void 0&&(pe=new up,z[re]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(re){let pe=z[re];return pe===void 0&&(pe=new up,z[re]=pe),pe.getGripSpace()},this.getHand=function(re){let pe=z[re];return pe===void 0&&(pe=new up,z[re]=pe),pe.getHandSpace()};function ee(re){const pe=L.indexOf(re.inputSource);if(pe===-1)return;const Re=z[pe];Re!==void 0&&(Re.update(re.inputSource,re.frame,p||f),Re.dispatchEvent({type:re.type,data:re.inputSource}))}function F(){o.removeEventListener("select",ee),o.removeEventListener("selectstart",ee),o.removeEventListener("selectend",ee),o.removeEventListener("squeeze",ee),o.removeEventListener("squeezestart",ee),o.removeEventListener("squeezeend",ee),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",V);for(let re=0;re<z.length;re++){const pe=L[re];pe!==null&&(L[re]=null,z[re].disconnect(pe))}W=null,q=null,b.reset();for(const re in y)delete y[re];e.setRenderTarget(B),M=null,x=null,g=null,o=null,U=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(Q),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(B=e.getRenderTarget(),o.addEventListener("select",ee),o.addEventListener("selectstart",ee),o.addEventListener("selectend",ee),o.addEventListener("squeeze",ee),o.addEventListener("squeezestart",ee),o.addEventListener("squeezeend",ee),o.addEventListener("end",F),o.addEventListener("inputsourceschange",V),P.xrCompatible!==!0&&await n.makeXRCompatible(),Q=e.getPixelRatio(),e.getSize(O),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Xe=null,Ve=null;P.depth&&(Ve=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=P.stencil?us:Xa,Xe=P.stencil?Zl:da);const mt={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(mt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new Yi(x.textureWidth,x.textureHeight,{format:Li,type:Ni,depthTexture:new $l(x.textureWidth,x.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Re={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,Re),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Yi(M.framebufferWidth,M.framebufferHeight,{format:Li,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await o.requestReferenceSpace(d),He.setContext(o),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function V(re){for(let pe=0;pe<re.removed.length;pe++){const Re=re.removed[pe],Xe=L.indexOf(Re);Xe>=0&&(L[Xe]=null,z[Xe].disconnect(Re))}for(let pe=0;pe<re.added.length;pe++){const Re=re.added[pe];let Xe=L.indexOf(Re);if(Xe===-1){for(let mt=0;mt<z.length;mt++)if(mt>=L.length){L.push(Re),Xe=mt;break}else if(L[mt]===null){L[mt]=Re,Xe=mt;break}if(Xe===-1)break}const Ve=z[Xe];Ve&&Ve.connect(Re)}}const ne=new ue,be=new ue;function Se(re,pe,Re){ne.setFromMatrixPosition(pe.matrixWorld),be.setFromMatrixPosition(Re.matrixWorld);const Xe=ne.distanceTo(be),Ve=pe.projectionMatrix.elements,mt=Re.projectionMatrix.elements,tn=Ve[14]/(Ve[10]-1),vt=Ve[14]/(Ve[10]+1),gt=(Ve[9]+1)/Ve[5],Tt=(Ve[9]-1)/Ve[5],st=(Ve[8]-1)/Ve[0],nn=(mt[8]+1)/mt[0],X=tn*st,Kt=tn*nn,bt=Xe/(-st+nn),At=bt*-st;if(pe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(At),re.translateZ(bt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ve[10]===-1)re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const je=tn+bt,N=vt+bt,_=X-At,H=Kt+(Xe-At),J=gt*vt/N*je,he=Tt*vt/N*je;re.projectionMatrix.makePerspective(_,H,J,he,je,N),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function I(re,pe){pe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(pe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let pe=re.near,Re=re.far;b.texture!==null&&(b.depthNear>0&&(pe=b.depthNear),b.depthFar>0&&(Re=b.depthFar)),A.near=D.near=C.near=pe,A.far=D.far=C.far=Re,(W!==A.near||q!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),W=A.near,q=A.far),A.layers.mask=re.layers.mask|6,C.layers.mask=A.layers.mask&3,D.layers.mask=A.layers.mask&5;const Xe=re.parent,Ve=A.cameras;I(A,Xe);for(let mt=0;mt<Ve.length;mt++)I(Ve[mt],Xe);Ve.length===2?Se(A,C,D):A.projectionMatrix.copy(C.projectionMatrix),oe(re,A,Xe)};function oe(re,pe,Re){Re===null?re.matrix.copy(pe.matrixWorld):(re.matrix.copy(Re.matrixWorld),re.matrix.invert(),re.matrix.multiply(pe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=_m*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(re){m=re,x!==null&&(x.fixedFoveation=re),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=re)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(A)},this.getCameraTexture=function(re){return y[re]};let _e=null;function Ce(re,pe){if(v=pe.getViewerPose(p||f),T=pe,v!==null){const Re=v.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Xe=!1;Re.length!==A.cameras.length&&(A.cameras.length=0,Xe=!0);for(let vt=0;vt<Re.length;vt++){const gt=Re[vt];let Tt=null;if(M!==null)Tt=M.getViewport(gt);else{const nn=g.getViewSubImage(x,gt);Tt=nn.viewport,vt===0&&(e.setRenderTargetTextures(U,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(U))}let st=k[vt];st===void 0&&(st=new Wi,st.layers.enable(vt),st.viewport=new fn,k[vt]=st),st.matrix.fromArray(gt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(gt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),vt===0&&(A.matrix.copy(st.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Xe===!0&&A.cameras.push(st)}const Ve=o.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){g=r.getBinding();const vt=g.getDepthInformation(Re[0]);vt&&vt.isValid&&vt.texture&&b.init(vt,o.renderState)}if(Ve&&Ve.includes("camera-access")&&E){e.state.unbindTexture(),g=r.getBinding();for(let vt=0;vt<Re.length;vt++){const gt=Re[vt].camera;if(gt){let Tt=y[gt];Tt||(Tt=new gS,y[gt]=Tt);const st=g.getCameraImage(gt);Tt.sourceTexture=st}}}}for(let Re=0;Re<z.length;Re++){const Xe=L[Re],Ve=z[Re];Xe!==null&&Ve!==void 0&&Ve.update(Xe,pe,p||f)}_e&&_e(re,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),T=null}const He=new _S;He.setAnimationLoop(Ce),this.setAnimationLoop=function(re){_e=re},this.dispose=function(){}}}const as=new Wa,tU=new pn;function nU(a,e){function n(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function r(b,y){y.color.getRGB(b.fogColor.value,fS(a)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function o(b,y,P,B,U){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(b,y):y.isMeshToonMaterial?(c(b,y),g(b,y)):y.isMeshPhongMaterial?(c(b,y),v(b,y)):y.isMeshStandardMaterial?(c(b,y),x(b,y),y.isMeshPhysicalMaterial&&M(b,y,U)):y.isMeshMatcapMaterial?(c(b,y),T(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),E(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(f(b,y),y.isLineDashedMaterial&&d(b,y)):y.isPointsMaterial?m(b,y,P,B):y.isSpriteMaterial?p(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,n(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,n(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===ii&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,n(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===ii&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,n(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,n(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const P=e.get(y),B=P.envMap,U=P.envMapRotation;B&&(b.envMap.value=B,as.copy(U),as.x*=-1,as.y*=-1,as.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),b.envMapRotation.value.setFromMatrix4(tU.makeRotationFromEuler(as)),b.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,b.aoMapTransform))}function f(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,n(y.map,b.mapTransform))}function d(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function m(b,y,P,B){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*P,b.scale.value=B*.5,y.map&&(b.map.value=y.map,n(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function p(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,n(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,n(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function v(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function g(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function x(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function M(b,y,P){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ii&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,b.specularIntensityMapTransform))}function T(b,y){y.matcap&&(b.matcap.value=y.matcap)}function E(b,y){const P=e.get(y).light;b.referencePosition.value.setFromMatrixPosition(P.matrixWorld),b.nearDistance.value=P.shadow.camera.near,b.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function iU(a,e,n,r){let o={},c={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,B){const U=B.program;r.uniformBlockBinding(P,U)}function p(P,B){let U=o[P.id];U===void 0&&(T(P),U=v(P),o[P.id]=U,P.addEventListener("dispose",b));const z=B.program;r.updateUBOMapping(P,z);const L=e.render.frame;c[P.id]!==L&&(x(P),c[P.id]=L)}function v(P){const B=g();P.__bindingPointIndex=B;const U=a.createBuffer(),z=P.__size,L=P.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,z,L),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,B,U),U}function g(){for(let P=0;P<d;P++)if(f.indexOf(P)===-1)return f.push(P),P;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const B=o[P.id],U=P.uniforms,z=P.__cache;a.bindBuffer(a.UNIFORM_BUFFER,B);for(let L=0,O=U.length;L<O;L++){const Q=Array.isArray(U[L])?U[L]:[U[L]];for(let C=0,D=Q.length;C<D;C++){const k=Q[C];if(M(k,L,C,z)===!0){const A=k.__offset,W=Array.isArray(k.value)?k.value:[k.value];let q=0;for(let ee=0;ee<W.length;ee++){const F=W[ee],V=E(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,a.bufferSubData(a.UNIFORM_BUFFER,A+q,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,q),q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,A,k.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function M(P,B,U,z){const L=P.value,O=B+"_"+U;if(z[O]===void 0)return typeof L=="number"||typeof L=="boolean"?z[O]=L:z[O]=L.clone(),!0;{const Q=z[O];if(typeof L=="number"||typeof L=="boolean"){if(Q!==L)return z[O]=L,!0}else if(Q.equals(L)===!1)return Q.copy(L),!0}return!1}function T(P){const B=P.uniforms;let U=0;const z=16;for(let O=0,Q=B.length;O<Q;O++){const C=Array.isArray(B[O])?B[O]:[B[O]];for(let D=0,k=C.length;D<k;D++){const A=C[D],W=Array.isArray(A.value)?A.value:[A.value];for(let q=0,ee=W.length;q<ee;q++){const F=W[q],V=E(F),ne=U%z,be=ne%V.boundary,Se=ne+be;U+=be,Se!==0&&z-Se<V.storage&&(U+=z-Se),A.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=U,U+=V.storage}}}const L=U%z;return L>0&&(U+=z-L),P.__size=U,P.__cache={},this}function E(P){const B={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(B.boundary=4,B.storage=4):P.isVector2?(B.boundary=8,B.storage=8):P.isVector3||P.isColor?(B.boundary=16,B.storage=12):P.isVector4?(B.boundary=16,B.storage=16):P.isMatrix3?(B.boundary=48,B.storage=48):P.isMatrix4?(B.boundary=64,B.storage=64):P.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",P),B}function b(P){const B=P.target;B.removeEventListener("dispose",b);const U=f.indexOf(B.__bindingPointIndex);f.splice(U,1),a.deleteBuffer(o[B.id]),delete o[B.id],delete c[B.id]}function y(){for(const P in o)a.deleteBuffer(o[P]);f=[],o={},c={}}return{bind:m,update:p,dispose:y}}const aU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let aa=null;function rU(){return aa===null&&(aa=new pS(aU,16,16,Ao,ha),aa.name="DFG_LUT",aa.minFilter=Mn,aa.magFilter=Mn,aa.wrapS=gi,aa.wrapT=gi,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}class sU{constructor(e={}){const{canvas:n=RC(),context:r=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Ni}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=f;const E=M,b=new Set([Hm,zm,Im]),y=new Set([Ni,da,Yl,Zl,Fm,Bm]),P=new Uint32Array(4),B=new Int32Array(4);let U=null,z=null;const L=[],O=[];let Q=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1;this._outputColorSpace=Di;let k=0,A=0,W=null,q=-1,ee=null;const F=new fn,V=new fn;let ne=null;const be=new Bt(0);let Se=0,I=n.width,oe=n.height,_e=1,Ce=null,He=null;const re=new fn(0,0,I,oe),pe=new fn(0,0,I,oe);let Re=!1;const Xe=new mS;let Ve=!1,mt=!1;const tn=new pn,vt=new ue,gt=new fn,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function nn(){return W===null?_e:1}let X=r;function Kt(w,K){return n.getContext(w,K)}try{const w={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Om}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",zt,!1),n.addEventListener("webglcontextcreationerror",Ct,!1),X===null){const K="webgl2";if(X=Kt(K,w),X===null)throw Kt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ut("WebGLRenderer: "+w.message),w}let bt,At,je,N,_,H,J,he,se,Fe,we,ke,et,Ee,Te,ze,Be,Ue,ft,Y,Le,Ae,Ie,Me;function ye(){bt=new rw(X),bt.init(),Ae=new KD(X,bt),At=new K3(X,bt,e,Ae),je=new YD(X,bt),At.reversedDepthBuffer&&x&&je.buffers.depth.setReversed(!0),N=new lw(X),_=new LD,H=new ZD(X,bt,je,_,At,Ae,N),J=new Q3(C),he=new aw(C),se=new d2(X),Ie=new Y3(X,se),Fe=new sw(X,se,N,Ie),we=new uw(X,Fe,se,N),ft=new cw(X,At,H),ze=new $3(_),ke=new ND(C,J,he,bt,At,Ie,ze),et=new nU(C,_),Ee=new PD,Te=new GD(bt),Ue=new j3(C,J,he,je,we,T,m),Be=new qD(C,we,At),Me=new iU(X,N,At,je),Y=new Z3(X,bt,N),Le=new ow(X,bt,N),N.programs=ke.programs,C.capabilities=At,C.extensions=bt,C.properties=_,C.renderLists=Ee,C.shadowMap=Be,C.state=je,C.info=N}ye(),E!==Ni&&(Q=new dw(E,n.width,n.height,o,c));const De=new eU(C,X);this.xr=De,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=bt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=bt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(w){w!==void 0&&(_e=w,this.setSize(I,oe,!1))},this.getSize=function(w){return w.set(I,oe)},this.setSize=function(w,K,fe=!0){if(De.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,oe=K,n.width=Math.floor(w*_e),n.height=Math.floor(K*_e),fe===!0&&(n.style.width=w+"px",n.style.height=K+"px"),Q!==null&&Q.setSize(n.width,n.height),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(I*_e,oe*_e).floor()},this.setDrawingBufferSize=function(w,K,fe){I=w,oe=K,_e=fe,n.width=Math.floor(w*fe),n.height=Math.floor(K*fe),this.setViewport(0,0,w,K)},this.setEffects=function(w){if(E===Ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let K=0;K<w.length;K++)if(w[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Q.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,K,fe,le){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,K,fe,le),je.viewport(F.copy(re).multiplyScalar(_e).round())},this.getScissor=function(w){return w.copy(pe)},this.setScissor=function(w,K,fe,le){w.isVector4?pe.set(w.x,w.y,w.z,w.w):pe.set(w,K,fe,le),je.scissor(V.copy(pe).multiplyScalar(_e).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(w){je.setScissorTest(Re=w)},this.setOpaqueSort=function(w){Ce=w},this.setTransparentSort=function(w){He=w},this.getClearColor=function(w){return w.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,fe=!0){let le=0;if(w){let te=!1;if(W!==null){const Ne=W.texture.format;te=b.has(Ne)}if(te){const Ne=W.texture.type,Ge=y.has(Ne),Oe=Ue.getClearColor(),We=Ue.getClearAlpha(),Ye=Oe.r,tt=Oe.g,Ze=Oe.b;Ge?(P[0]=Ye,P[1]=tt,P[2]=Ze,P[3]=We,X.clearBufferuiv(X.COLOR,0,P)):(B[0]=Ye,B[1]=tt,B[2]=Ze,B[3]=We,X.clearBufferiv(X.COLOR,0,B))}else le|=X.COLOR_BUFFER_BIT}K&&(le|=X.DEPTH_BUFFER_BIT),fe&&(le|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",zt,!1),n.removeEventListener("webglcontextcreationerror",Ct,!1),Ue.dispose(),Ee.dispose(),Te.dispose(),_.dispose(),J.dispose(),he.dispose(),we.dispose(),Ie.dispose(),Me.dispose(),ke.dispose(),De.dispose(),De.removeEventListener("sessionstart",_s),De.removeEventListener("sessionend",Oo),Qi.stop()};function at(w){w.preventDefault(),px("WebGLRenderer: Context Lost."),D=!0}function zt(){px("WebGLRenderer: Context Restored."),D=!1;const w=N.autoReset,K=Be.enabled,fe=Be.autoUpdate,le=Be.needsUpdate,te=Be.type;ye(),N.autoReset=w,Be.enabled=K,Be.autoUpdate=fe,Be.needsUpdate=le,Be.type=te}function Ct(w){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Vn(w){const K=w.target;K.removeEventListener("dispose",Vn),Fi(K)}function Fi(w){oc(w),_.remove(w)}function oc(w){const K=_.get(w).programs;K!==void 0&&(K.forEach(function(fe){ke.releaseProgram(fe)}),w.isShaderMaterial&&ke.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,fe,le,te,Ne){K===null&&(K=Tt);const Ge=te.isMesh&&te.matrixWorld.determinant()<0,Oe=Or(w,K,fe,le,te);je.setMaterial(le,Ge);let We=fe.index,Ye=1;if(le.wireframe===!0){if(We=Fe.getWireframeAttribute(fe),We===void 0)return;Ye=2}const tt=fe.drawRange,Ze=fe.attributes.position;let nt=tt.start*Ye,Nt=(tt.start+tt.count)*Ye;Ne!==null&&(nt=Math.max(nt,Ne.start*Ye),Nt=Math.min(Nt,(Ne.start+Ne.count)*Ye)),We!==null?(nt=Math.max(nt,0),Nt=Math.min(Nt,We.count)):Ze!=null&&(nt=Math.max(nt,0),Nt=Math.min(Nt,Ze.count));const an=Nt-nt;if(an<0||an===1/0)return;Ie.setup(te,le,Oe,fe,We);let Qt,It=Y;if(We!==null&&(Qt=se.get(We),It=Le,It.setIndex(Qt)),te.isMesh)le.wireframe===!0?(je.setLineWidth(le.wireframeLinewidth*nn()),It.setMode(X.LINES)):It.setMode(X.TRIANGLES);else if(te.isLine){let $e=le.linewidth;$e===void 0&&($e=1),je.setLineWidth($e*nn()),te.isLineSegments?It.setMode(X.LINES):te.isLineLoop?It.setMode(X.LINE_LOOP):It.setMode(X.LINE_STRIP)}else te.isPoints?It.setMode(X.POINTS):te.isSprite&&It.setMode(X.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Kl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))It.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const $e=te._multiDrawStarts,Lt=te._multiDrawCounts,ot=te._multiDrawCount,Un=We?se.get(We).bytesPerElement:1,ga=_.get(le).currentProgram.getUniforms();for(let Nn=0;Nn<ot;Nn++)ga.setValue(X,"_gl_DrawID",Nn),It.render($e[Nn]/Un,Lt[Nn])}else if(te.isInstancedMesh)It.renderInstances(nt,an,te.count);else if(fe.isInstancedBufferGeometry){const $e=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Lt=Math.min(fe.instanceCount,$e);It.renderInstances(nt,an,Lt)}else It.render(nt,an)};function No(w,K,fe){w.transparent===!0&&w.side===Ha&&w.forceSinglePass===!1?(w.side=ii,w.needsUpdate=!0,ys(w,K,fe),w.side=Dr,w.needsUpdate=!0,ys(w,K,fe),w.side=Ha):ys(w,K,fe)}this.compile=function(w,K,fe=null){fe===null&&(fe=w),z=Te.get(fe),z.init(K),O.push(z),fe.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(z.pushLight(te),te.castShadow&&z.pushShadow(te))}),w!==fe&&w.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(z.pushLight(te),te.castShadow&&z.pushShadow(te))}),z.setupLights();const le=new Set;return w.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ne=te.material;if(Ne)if(Array.isArray(Ne))for(let Ge=0;Ge<Ne.length;Ge++){const Oe=Ne[Ge];No(Oe,fe,te),le.add(Oe)}else No(Ne,fe,te),le.add(Ne)}),z=O.pop(),le},this.compileAsync=function(w,K,fe=null){const le=this.compile(w,K,fe);return new Promise(te=>{function Ne(){if(le.forEach(function(Ge){_.get(Ge).currentProgram.isReady()&&le.delete(Ge)}),le.size===0){te(w);return}setTimeout(Ne,10)}bt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let vs=null;function Lo(w){vs&&vs(w)}function _s(){Qi.stop()}function Oo(){Qi.start()}const Qi=new _S;Qi.setAnimationLoop(Lo),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(w){vs=w,De.setAnimationLoop(w),w===null?Qi.stop():Qi.start()},De.addEventListener("sessionstart",_s),De.addEventListener("sessionend",Oo),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const fe=De.enabled===!0&&De.isPresenting===!0,le=Q!==null&&(W===null||fe)&&Q.begin(C,W);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(Q===null||Q.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(K),K=De.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,K,W),z=Te.get(w,O.length),z.init(K),O.push(z),tn.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Xe.setFromProjectionMatrix(tn,ca,K.reversedDepth),mt=this.localClippingEnabled,Ve=ze.init(this.clippingPlanes,mt),U=Ee.get(w,L.length),U.init(),L.push(U),De.enabled===!0&&De.isPresenting===!0){const Ge=C.xr.getDepthSensingMesh();Ge!==null&&xi(Ge,K,-1/0,C.sortObjects)}xi(w,K,0,C.sortObjects),U.finish(),C.sortObjects===!0&&U.sort(Ce,He),st=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,st&&Ue.addToRenderList(U,w),this.info.render.frame++,Ve===!0&&ze.beginShadows();const te=z.state.shadowsArray;if(Be.render(te,w,K),Ve===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&Q.hasRenderPass())===!1){const Ge=U.opaque,Oe=U.transmissive;if(z.setupLights(),K.isArrayCamera){const We=K.cameras;if(Oe.length>0)for(let Ye=0,tt=We.length;Ye<tt;Ye++){const Ze=We[Ye];Dn(Ge,Oe,w,Ze)}st&&Ue.render(w);for(let Ye=0,tt=We.length;Ye<tt;Ye++){const Ze=We[Ye];gn(U,w,Ze,Ze.viewport)}}else Oe.length>0&&Dn(Ge,Oe,w,K),st&&Ue.render(w),gn(U,w,K)}W!==null&&A===0&&(H.updateMultisampleRenderTarget(W),H.updateRenderTargetMipmap(W)),le&&Q.end(C),w.isScene===!0&&w.onAfterRender(C,w,K),Ie.resetDefaultState(),q=-1,ee=null,O.pop(),O.length>0?(z=O[O.length-1],Ve===!0&&ze.setGlobalState(C.clippingPlanes,z.state.camera)):z=null,L.pop(),L.length>0?U=L[L.length-1]:U=null};function xi(w,K,fe,le){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)fe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLight)z.pushLight(w),w.castShadow&&z.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Xe.intersectsSprite(w)){le&&gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(tn);const Ge=we.update(w),Oe=w.material;Oe.visible&&U.push(w,Ge,Oe,fe,gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Xe.intersectsObject(w))){const Ge=we.update(w),Oe=w.material;if(le&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),gt.copy(w.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),gt.copy(Ge.boundingSphere.center)),gt.applyMatrix4(w.matrixWorld).applyMatrix4(tn)),Array.isArray(Oe)){const We=Ge.groups;for(let Ye=0,tt=We.length;Ye<tt;Ye++){const Ze=We[Ye],nt=Oe[Ze.materialIndex];nt&&nt.visible&&U.push(w,Ge,nt,fe,gt.z,Ze)}}else Oe.visible&&U.push(w,Ge,Oe,fe,gt.z,null)}}const Ne=w.children;for(let Ge=0,Oe=Ne.length;Ge<Oe;Ge++)xi(Ne[Ge],K,fe,le)}function gn(w,K,fe,le){const{opaque:te,transmissive:Ne,transparent:Ge}=w;z.setupLightsView(fe),Ve===!0&&ze.setGlobalState(C.clippingPlanes,fe),le&&je.viewport(F.copy(le)),te.length>0&&Bi(te,K,fe),Ne.length>0&&Bi(Ne,K,fe),Ge.length>0&&Bi(Ge,K,fe),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Dn(w,K,fe,le){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[le.id]===void 0){const nt=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[le.id]=new Yi(1,1,{generateMipmaps:!0,type:nt?ha:Ni,minFilter:cs,samples:At.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ne=z.state.transmissionRenderTarget[le.id],Ge=le.viewport||F;Ne.setSize(Ge.z*C.transmissionResolutionScale,Ge.w*C.transmissionResolutionScale);const Oe=C.getRenderTarget(),We=C.getActiveCubeFace(),Ye=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(be),Se=C.getClearAlpha(),Se<1&&C.setClearColor(16777215,.5),C.clear(),st&&Ue.render(fe);const tt=C.toneMapping;C.toneMapping=fa;const Ze=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),z.setupLightsView(le),Ve===!0&&ze.setGlobalState(C.clippingPlanes,le),Bi(w,fe,le),H.updateMultisampleRenderTarget(Ne),H.updateRenderTargetMipmap(Ne),bt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Nt=0,an=K.length;Nt<an;Nt++){const Qt=K[Nt],{object:It,geometry:$e,material:Lt,group:ot}=Qt;if(Lt.side===Ha&&It.layers.test(le.layers)){const Un=Lt.side;Lt.side=ii,Lt.needsUpdate=!0,xs(It,fe,le,$e,Lt,ot),Lt.side=Un,Lt.needsUpdate=!0,nt=!0}}nt===!0&&(H.updateMultisampleRenderTarget(Ne),H.updateRenderTargetMipmap(Ne))}C.setRenderTarget(Oe,We,Ye),C.setClearColor(be,Se),Ze!==void 0&&(le.viewport=Ze),C.toneMapping=tt}function Bi(w,K,fe){const le=K.isScene===!0?K.overrideMaterial:null;for(let te=0,Ne=w.length;te<Ne;te++){const Ge=w[te],{object:Oe,geometry:We,group:Ye}=Ge;let tt=Ge.material;tt.allowOverride===!0&&le!==null&&(tt=le),Oe.layers.test(fe.layers)&&xs(Oe,K,fe,We,tt,Ye)}}function xs(w,K,fe,le,te,Ne){w.onBeforeRender(C,K,fe,le,te,Ne),w.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),te.onBeforeRender(C,K,fe,le,w,Ne),te.transparent===!0&&te.side===Ha&&te.forceSinglePass===!1?(te.side=ii,te.needsUpdate=!0,C.renderBufferDirect(fe,K,le,te,w,Ne),te.side=Dr,te.needsUpdate=!0,C.renderBufferDirect(fe,K,le,te,w,Ne),te.side=Ha):C.renderBufferDirect(fe,K,le,te,w,Ne),w.onAfterRender(C,K,fe,le,te,Ne)}function ys(w,K,fe){K.isScene!==!0&&(K=Tt);const le=_.get(w),te=z.state.lights,Ne=z.state.shadowsArray,Ge=te.state.version,Oe=ke.getParameters(w,te.state,Ne,K,fe),We=ke.getProgramCacheKey(Oe);let Ye=le.programs;le.environment=w.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(w.isMeshStandardMaterial?he:J).get(w.envMap||le.environment),le.envMapRotation=le.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,Ye===void 0&&(w.addEventListener("dispose",Vn),Ye=new Map,le.programs=Ye);let tt=Ye.get(We);if(tt!==void 0){if(le.currentProgram===tt&&le.lightsStateVersion===Ge)return Po(w,Oe),tt}else Oe.uniforms=ke.getUniforms(w),w.onBeforeCompile(Oe,C),tt=ke.acquireProgram(Oe,We),Ye.set(We,tt),le.uniforms=Oe.uniforms;const Ze=le.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=ze.uniform),Po(w,Oe),le.needsLights=Ya(w),le.lightsStateVersion=Ge,le.needsLights&&(Ze.ambientLightColor.value=te.state.ambient,Ze.lightProbe.value=te.state.probe,Ze.directionalLights.value=te.state.directional,Ze.directionalLightShadows.value=te.state.directionalShadow,Ze.spotLights.value=te.state.spot,Ze.spotLightShadows.value=te.state.spotShadow,Ze.rectAreaLights.value=te.state.rectArea,Ze.ltc_1.value=te.state.rectAreaLTC1,Ze.ltc_2.value=te.state.rectAreaLTC2,Ze.pointLights.value=te.state.point,Ze.pointLightShadows.value=te.state.pointShadow,Ze.hemisphereLights.value=te.state.hemi,Ze.directionalShadowMap.value=te.state.directionalShadowMap,Ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ze.spotShadowMap.value=te.state.spotShadowMap,Ze.spotLightMatrix.value=te.state.spotLightMatrix,Ze.spotLightMap.value=te.state.spotLightMap,Ze.pointShadowMap.value=te.state.pointShadowMap,Ze.pointShadowMatrix.value=te.state.pointShadowMatrix),le.currentProgram=tt,le.uniformsList=null,tt}function lc(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=Qu.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function Po(w,K){const fe=_.get(w);fe.outputColorSpace=K.outputColorSpace,fe.batching=K.batching,fe.batchingColor=K.batchingColor,fe.instancing=K.instancing,fe.instancingColor=K.instancingColor,fe.instancingMorph=K.instancingMorph,fe.skinning=K.skinning,fe.morphTargets=K.morphTargets,fe.morphNormals=K.morphNormals,fe.morphColors=K.morphColors,fe.morphTargetsCount=K.morphTargetsCount,fe.numClippingPlanes=K.numClippingPlanes,fe.numIntersection=K.numClipIntersection,fe.vertexAlphas=K.vertexAlphas,fe.vertexTangents=K.vertexTangents,fe.toneMapping=K.toneMapping}function Or(w,K,fe,le,te){K.isScene!==!0&&(K=Tt),H.resetTextureUnits();const Ne=K.fog,Ge=le.isMeshStandardMaterial?K.environment:null,Oe=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Co,We=(le.isMeshStandardMaterial?he:J).get(le.envMap||Ge),Ye=le.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,tt=!!fe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ze=!!fe.morphAttributes.position,nt=!!fe.morphAttributes.normal,Nt=!!fe.morphAttributes.color;let an=fa;le.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(an=C.toneMapping);const Qt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,It=Qt!==void 0?Qt.length:0,$e=_.get(le),Lt=z.state.lights;if(Ve===!0&&(mt===!0||w!==ee)){const On=w===ee&&le.id===q;ze.setState(le,w,On)}let ot=!1;le.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Lt.state.version||$e.outputColorSpace!==Oe||te.isBatchedMesh&&$e.batching===!1||!te.isBatchedMesh&&$e.batching===!0||te.isBatchedMesh&&$e.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&$e.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&$e.instancing===!1||!te.isInstancedMesh&&$e.instancing===!0||te.isSkinnedMesh&&$e.skinning===!1||!te.isSkinnedMesh&&$e.skinning===!0||te.isInstancedMesh&&$e.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&$e.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&$e.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&$e.instancingMorph===!1&&te.morphTexture!==null||$e.envMap!==We||le.fog===!0&&$e.fog!==Ne||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ze.numPlanes||$e.numIntersection!==ze.numIntersection)||$e.vertexAlphas!==Ye||$e.vertexTangents!==tt||$e.morphTargets!==Ze||$e.morphNormals!==nt||$e.morphColors!==Nt||$e.toneMapping!==an||$e.morphTargetsCount!==It)&&(ot=!0):(ot=!0,$e.__version=le.version);let Un=$e.currentProgram;ot===!0&&(Un=ys(le,K,te));let ga=!1,Nn=!1,yi=!1;const Ht=Un.getUniforms(),Ln=$e.uniforms;if(je.useProgram(Un.program)&&(ga=!0,Nn=!0,yi=!0),le.id!==q&&(q=le.id,Nn=!0),ga||ee!==w){je.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ht.setValue(X,"projectionMatrix",w.projectionMatrix),Ht.setValue(X,"viewMatrix",w.matrixWorldInverse);const Pn=Ht.map.cameraPosition;Pn!==void 0&&Pn.setValue(X,vt.setFromMatrixPosition(w.matrixWorld)),At.logarithmicDepthBuffer&&Ht.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Ht.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),ee!==w&&(ee=w,Nn=!0,yi=!0)}if($e.needsLights&&(Lt.state.directionalShadowMap.length>0&&Ht.setValue(X,"directionalShadowMap",Lt.state.directionalShadowMap,H),Lt.state.spotShadowMap.length>0&&Ht.setValue(X,"spotShadowMap",Lt.state.spotShadowMap,H),Lt.state.pointShadowMap.length>0&&Ht.setValue(X,"pointShadowMap",Lt.state.pointShadowMap,H)),te.isSkinnedMesh){Ht.setOptional(X,te,"bindMatrix"),Ht.setOptional(X,te,"bindMatrixInverse");const On=te.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),Ht.setValue(X,"boneTexture",On.boneTexture,H))}te.isBatchedMesh&&(Ht.setOptional(X,te,"batchingTexture"),Ht.setValue(X,"batchingTexture",te._matricesTexture,H),Ht.setOptional(X,te,"batchingIdTexture"),Ht.setValue(X,"batchingIdTexture",te._indirectTexture,H),Ht.setOptional(X,te,"batchingColorTexture"),te._colorsTexture!==null&&Ht.setValue(X,"batchingColorTexture",te._colorsTexture,H));const En=fe.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&ft.update(te,fe,Un),(Nn||$e.receiveShadow!==te.receiveShadow)&&($e.receiveShadow=te.receiveShadow,Ht.setValue(X,"receiveShadow",te.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Ln.envMap.value=We,Ln.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&K.environment!==null&&(Ln.envMapIntensity.value=K.environmentIntensity),Ln.dfgLUT!==void 0&&(Ln.dfgLUT.value=rU()),Nn&&(Ht.setValue(X,"toneMappingExposure",C.toneMappingExposure),$e.needsLights&&Fo(Ln,yi),Ne&&le.fog===!0&&et.refreshFogUniforms(Ln,Ne),et.refreshMaterialUniforms(Ln,le,_e,oe,z.state.transmissionRenderTarget[w.id]),Qu.upload(X,lc($e),Ln,H)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Qu.upload(X,lc($e),Ln,H),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Ht.setValue(X,"center",te.center),Ht.setValue(X,"modelViewMatrix",te.modelViewMatrix),Ht.setValue(X,"normalMatrix",te.normalMatrix),Ht.setValue(X,"modelMatrix",te.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const On=le.uniformsGroups;for(let Pn=0,Ss=On.length;Pn<Ss;Pn++){const Ii=On[Pn];Me.update(Ii,Un),Me.bind(Ii,Un)}}return Un}function Fo(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function Ya(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,K,fe){const le=_.get(w);le.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),_.get(w.texture).__webglTexture=K,_.get(w.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:fe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,K){const fe=_.get(w);fe.__webglFramebuffer=K,fe.__useDefaultFramebuffer=K===void 0};const Za=X.createFramebuffer();this.setRenderTarget=function(w,K=0,fe=0){W=w,k=K,A=fe;let le=null,te=!1,Ne=!1;if(w){const Oe=_.get(w);if(Oe.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(X.FRAMEBUFFER,Oe.__webglFramebuffer),F.copy(w.viewport),V.copy(w.scissor),ne=w.scissorTest,je.viewport(F),je.scissor(V),je.setScissorTest(ne),q=-1;return}else if(Oe.__webglFramebuffer===void 0)H.setupRenderTarget(w);else if(Oe.__hasExternalTextures)H.rebindTextures(w,_.get(w.texture).__webglTexture,_.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const tt=w.depthTexture;if(Oe.__boundDepthTexture!==tt){if(tt!==null&&_.has(tt)&&(w.width!==tt.image.width||w.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ne=!0);const Ye=_.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ye[K])?le=Ye[K][fe]:le=Ye[K],te=!0):w.samples>0&&H.useMultisampledRTT(w)===!1?le=_.get(w).__webglMultisampledFramebuffer:Array.isArray(Ye)?le=Ye[fe]:le=Ye,F.copy(w.viewport),V.copy(w.scissor),ne=w.scissorTest}else F.copy(re).multiplyScalar(_e).floor(),V.copy(pe).multiplyScalar(_e).floor(),ne=Re;if(fe!==0&&(le=Za),je.bindFramebuffer(X.FRAMEBUFFER,le)&&je.drawBuffers(w,le),je.viewport(F),je.scissor(V),je.setScissorTest(ne),te){const Oe=_.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,Oe.__webglTexture,fe)}else if(Ne){const Oe=K;for(let We=0;We<w.textures.length;We++){const Ye=_.get(w.textures[We]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+We,Ye.__webglTexture,fe,Oe)}}else if(w!==null&&fe!==0){const Oe=_.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Oe.__webglTexture,fe)}q=-1},this.readRenderTargetPixels=function(w,K,fe,le,te,Ne,Ge,Oe=0){if(!(w&&w.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We){je.bindFramebuffer(X.FRAMEBUFFER,We);try{const Ye=w.textures[Oe],tt=Ye.format,Ze=Ye.type;if(!At.textureFormatReadable(tt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Ze)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-le&&fe>=0&&fe<=w.height-te&&(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe),X.readPixels(K,fe,le,te,Ae.convert(tt),Ae.convert(Ze),Ne))}finally{const Ye=W!==null?_.get(W).__webglFramebuffer:null;je.bindFramebuffer(X.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(w,K,fe,le,te,Ne,Ge,Oe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We)if(K>=0&&K<=w.width-le&&fe>=0&&fe<=w.height-te){je.bindFramebuffer(X.FRAMEBUFFER,We);const Ye=w.textures[Oe],tt=Ye.format,Ze=Ye.type;if(!At.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,nt),X.bufferData(X.PIXEL_PACK_BUFFER,Ne.byteLength,X.STREAM_READ),w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe),X.readPixels(K,fe,le,te,Ae.convert(tt),Ae.convert(Ze),0);const Nt=W!==null?_.get(W).__webglFramebuffer:null;je.bindFramebuffer(X.FRAMEBUFFER,Nt);const an=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await wC(X,an,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,nt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ne),X.deleteBuffer(nt),X.deleteSync(an),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,K=null,fe=0){const le=Math.pow(2,-fe),te=Math.floor(w.image.width*le),Ne=Math.floor(w.image.height*le),Ge=K!==null?K.x:0,Oe=K!==null?K.y:0;H.setTexture2D(w,0),X.copyTexSubImage2D(X.TEXTURE_2D,fe,0,0,Ge,Oe,te,Ne),je.unbindTexture()};const Pr=X.createFramebuffer(),Ka=X.createFramebuffer();this.copyTextureToTexture=function(w,K,fe=null,le=null,te=0,Ne=null){Ne===null&&(te!==0?(Kl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=te,te=0):Ne=0);let Ge,Oe,We,Ye,tt,Ze,nt,Nt,an;const Qt=w.isCompressedTexture?w.mipmaps[Ne]:w.image;if(fe!==null)Ge=fe.max.x-fe.min.x,Oe=fe.max.y-fe.min.y,We=fe.isBox3?fe.max.z-fe.min.z:1,Ye=fe.min.x,tt=fe.min.y,Ze=fe.isBox3?fe.min.z:0;else{const En=Math.pow(2,-te);Ge=Math.floor(Qt.width*En),Oe=Math.floor(Qt.height*En),w.isDataArrayTexture?We=Qt.depth:w.isData3DTexture?We=Math.floor(Qt.depth*En):We=1,Ye=0,tt=0,Ze=0}le!==null?(nt=le.x,Nt=le.y,an=le.z):(nt=0,Nt=0,an=0);const It=Ae.convert(K.format),$e=Ae.convert(K.type);let Lt;K.isData3DTexture?(H.setTexture3D(K,0),Lt=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(H.setTexture2DArray(K,0),Lt=X.TEXTURE_2D_ARRAY):(H.setTexture2D(K,0),Lt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);const ot=X.getParameter(X.UNPACK_ROW_LENGTH),Un=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ga=X.getParameter(X.UNPACK_SKIP_PIXELS),Nn=X.getParameter(X.UNPACK_SKIP_ROWS),yi=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Qt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Qt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ye),X.pixelStorei(X.UNPACK_SKIP_ROWS,tt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ze);const Ht=w.isDataArrayTexture||w.isData3DTexture,Ln=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const En=_.get(w),On=_.get(K),Pn=_.get(En.__renderTarget),Ss=_.get(On.__renderTarget);je.bindFramebuffer(X.READ_FRAMEBUFFER,Pn.__webglFramebuffer),je.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ss.__webglFramebuffer);for(let Ii=0;Ii<We;Ii++)Ht&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,_.get(w).__webglTexture,te,Ze+Ii),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,_.get(K).__webglTexture,Ne,an+Ii)),X.blitFramebuffer(Ye,tt,Ge,Oe,nt,Nt,Ge,Oe,X.DEPTH_BUFFER_BIT,X.NEAREST);je.bindFramebuffer(X.READ_FRAMEBUFFER,null),je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(te!==0||w.isRenderTargetTexture||_.has(w)){const En=_.get(w),On=_.get(K);je.bindFramebuffer(X.READ_FRAMEBUFFER,Pr),je.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ka);for(let Pn=0;Pn<We;Pn++)Ht?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,En.__webglTexture,te,Ze+Pn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,En.__webglTexture,te),Ln?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,On.__webglTexture,Ne,an+Pn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,On.__webglTexture,Ne),te!==0?X.blitFramebuffer(Ye,tt,Ge,Oe,nt,Nt,Ge,Oe,X.COLOR_BUFFER_BIT,X.NEAREST):Ln?X.copyTexSubImage3D(Lt,Ne,nt,Nt,an+Pn,Ye,tt,Ge,Oe):X.copyTexSubImage2D(Lt,Ne,nt,Nt,Ye,tt,Ge,Oe);je.bindFramebuffer(X.READ_FRAMEBUFFER,null),je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ln?w.isDataTexture||w.isData3DTexture?X.texSubImage3D(Lt,Ne,nt,Nt,an,Ge,Oe,We,It,$e,Qt.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(Lt,Ne,nt,Nt,an,Ge,Oe,We,It,Qt.data):X.texSubImage3D(Lt,Ne,nt,Nt,an,Ge,Oe,We,It,$e,Qt):w.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ne,nt,Nt,Ge,Oe,It,$e,Qt.data):w.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ne,nt,Nt,Qt.width,Qt.height,It,Qt.data):X.texSubImage2D(X.TEXTURE_2D,Ne,nt,Nt,Ge,Oe,It,$e,Qt);X.pixelStorei(X.UNPACK_ROW_LENGTH,ot),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Un),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ga),X.pixelStorei(X.UNPACK_SKIP_ROWS,Nn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,yi),Ne===0&&K.generateMipmaps&&X.generateMipmap(Lt),je.unbindTexture()},this.initRenderTarget=function(w){_.get(w).__webglFramebuffer===void 0&&H.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?H.setTextureCube(w,0):w.isData3DTexture?H.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?H.setTexture2DArray(w,0):H.setTexture2D(w,0),je.unbindTexture()},this.resetState=function(){k=0,A=0,W=null,je.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}function oU({mouseForce:a=10,cursorSize:e=100,isViscous:n=!1,viscous:r=30,iterationsViscous:o=320,iterationsPoisson:c=32,dt:f=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:v=["#5227FF","#FF9FFC","#B19EEF"],style:g={},className:x="",autoDemo:M=!0,autoSpeed:T=.2,autoIntensity:E=2.2,takeoverDuration:b=20,autoResumeDelay:y=1e3,autoRampDuration:P=.2}){const B=Je.useRef(null),U=Je.useRef(null),z=Je.useRef(null),L=Je.useRef(null),O=Je.useRef(null),Q=Je.useRef(!0),C=Je.useRef(null);return Je.useEffect(()=>{if(!B.current)return;function D(N){let _;Array.isArray(N)&&N.length>0?N.length===1?_=[N[0],N[0]]:_=N:_=["#ffffff","#ffffff"];const H=_.length,J=new Uint8Array(H*4);for(let se=0;se<H;se++){const Fe=new Bt(_[se]);J[se*4+0]=Math.round(Fe.r*255),J[se*4+1]=Math.round(Fe.g*255),J[se*4+2]=Math.round(Fe.b*255),J[se*4+3]=255}const he=new pS(J,H,1,Li);return he.magFilter=Mn,he.minFilter=Mn,he.wrapS=gi,he.wrapT=gi,he.generateMipmaps=!1,he.needsUpdate=!0,he}const k=D(v),A=new fn(0,0,0,0);class W{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(_){this.container=_,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new sU({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Bt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new u2,this.clock.start()}resize(){if(!this.container)return;const _=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(_.width)),this.height=Math.max(1,Math.floor(_.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const q=new W;class ee{constructor(){this.mouseMoved=!1,this.coords=new ct,this.coords_old=new ct,this.diff=new ct,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ct,this.takeoverTo=new ct,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(_){this.container=_,this.docTarget=_.ownerDocument||null;const H=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);H&&(this.listenerTarget=H,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(_,H){if(!this.container)return!1;const J=this.container.getBoundingClientRect();return J.width===0||J.height===0?!1:_>=J.left&&_<=J.right&&H>=J.top&&H<=J.bottom}updateHoverState(_,H){return this.isHoverInside=this.isPointInside(_,H),this.isHoverInside}setCoords(_,H){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const J=this.container.getBoundingClientRect();if(J.width===0||J.height===0)return;const he=(_-J.left)/J.width,se=(H-J.top)/J.height;this.coords.set(he*2-1,-(se*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(_,H){this.coords.set(_,H),this.mouseMoved=!0}onDocumentMouseMove(_){if(this.updateHoverState(_.clientX,_.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const H=this.container.getBoundingClientRect();if(H.width===0||H.height===0)return;const J=(_.clientX-H.left)/H.width,he=(_.clientY-H.top)/H.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(J*2-1,-(he*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(_.clientX,_.clientY),this.hasUserControl=!0}}onDocumentTouchStart(_){if(_.touches.length!==1)return;const H=_.touches[0];this.updateHoverState(H.clientX,H.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(H.clientX,H.clientY),this.hasUserControl=!0)}onDocumentTouchMove(_){if(_.touches.length!==1)return;const H=_.touches[0];this.updateHoverState(H.clientX,H.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(H.clientX,H.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const _=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(_>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const H=_*_*(3-2*_);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,H)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const F=new ee;class V{constructor(_,H,J){this.mouse=_,this.manager=H,this.enabled=J.enabled,this.speed=J.speed,this.resumeDelay=J.resumeDelay||3e3,this.rampDurationMs=(J.rampDuration||0)*1e3,this.active=!1,this.current=new ct(0,0),this.target=new ct,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ct,this.pickNewTarget()}pickNewTarget(){const _=Math.random;this.target.set((_()*2-1)*(1-this.margin),(_()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const _=performance.now();if(_-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=_,this.activationTime=_),!this.active)return;this.mouse.isAutoActive=!0;let J=(_-this.lastTime)/1e3;this.lastTime=_,J>.2&&(J=.016);const he=this._tmpDir.subVectors(this.target,this.current),se=he.length();if(se<.01){this.pickNewTarget();return}he.normalize();let Fe=1;if(this.rampDurationMs>0){const et=Math.min(1,(_-this.activationTime)/this.rampDurationMs);Fe=et*et*(3-2*et)}const we=this.speed*J*Fe,ke=Math.min(we,se);this.current.addScaledVector(he,ke),this.mouse.setNormalized(this.current.x,this.current.y)}}const ne=`
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
`;class Re{constructor(_){this.props=_||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Ux,this.camera=new sf,this.uniforms&&(this.material=new zl(this.props.material),this.geometry=new ds(2,2),this.plane=new Oi(this.geometry,this.material),this.scene.add(this.plane))}update(){q.renderer.setRenderTarget(this.props.output||null),q.renderer.render(this.scene,this.camera),q.renderer.setRenderTarget(null)}}class Xe extends Re{constructor(_){super({material:{vertexShader:ne,fragmentShader:I,uniforms:{boundarySpace:{value:_.cellScale},px:{value:_.cellScale},fboSize:{value:_.fboSize},velocity:{value:_.src.texture},dt:{value:_.dt},isBFECC:{value:!0}}},output:_.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const _=new $i,H=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);_.setAttribute("position",new Zi(H,3));const J=new zl({vertexShader:be,fragmentShader:I,uniforms:this.uniforms});this.line=new r2(_,J),this.scene.add(this.line)}update({dt:_,isBounce:H,BFECC:J}){this.uniforms.dt.value=_,this.line.visible=H,this.uniforms.isBFECC.value=J,super.update()}}class Ve extends Re{constructor(_){super({output:_.dst}),this.init(_)}init(_){super.init();const H=new ds(1,1),J=new zl({vertexShader:Se,fragmentShader:Ce,blending:Ap,depthWrite:!1,uniforms:{px:{value:_.cellScale},force:{value:new ct(0,0)},center:{value:new ct(0,0)},scale:{value:new ct(_.cursor_size,_.cursor_size)}}});this.mouse=new Oi(H,J),this.scene.add(this.mouse)}update(_){const H=F.diff.x/2*_.mouse_force,J=F.diff.y/2*_.mouse_force,he=_.cursor_size*_.cellScale.x,se=_.cursor_size*_.cellScale.y,Fe=Math.min(Math.max(F.coords.x,-1+he+_.cellScale.x*2),1-he-_.cellScale.x*2),we=Math.min(Math.max(F.coords.y,-1+se+_.cellScale.y*2),1-se-_.cellScale.y*2),ke=this.mouse.material.uniforms;ke.force.value.set(H,J),ke.center.value.set(Fe,we),ke.scale.value.set(_.cursor_size,_.cursor_size),super.update()}}class mt extends Re{constructor(_){super({material:{vertexShader:ne,fragmentShader:pe,uniforms:{boundarySpace:{value:_.boundarySpace},velocity:{value:_.src.texture},velocity_new:{value:_.dst_.texture},v:{value:_.viscous},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst,output0:_.dst_,output1:_.dst}),this.init()}update({viscous:_,iterations:H,dt:J}){let he,se;this.uniforms.v.value=_;for(let Fe=0;Fe<H;Fe++)Fe%2===0?(he=this.props.output0,se=this.props.output1):(he=this.props.output1,se=this.props.output0),this.uniforms.velocity_new.value=he.texture,this.props.output=se,this.uniforms.dt.value=J,super.update();return se}}class tn extends Re{constructor(_){super({material:{vertexShader:ne,fragmentShader:_e,uniforms:{boundarySpace:{value:_.boundarySpace},velocity:{value:_.src.texture},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst}),this.init()}update({vel:_}){this.uniforms.velocity.value=_.texture,super.update()}}class vt extends Re{constructor(_){super({material:{vertexShader:ne,fragmentShader:He,uniforms:{boundarySpace:{value:_.boundarySpace},pressure:{value:_.dst_.texture},divergence:{value:_.src.texture},px:{value:_.cellScale}}},output:_.dst,output0:_.dst_,output1:_.dst}),this.init()}update({iterations:_}){let H,J;for(let he=0;he<_;he++)he%2===0?(H=this.props.output0,J=this.props.output1):(H=this.props.output1,J=this.props.output0),this.uniforms.pressure.value=H.texture,this.props.output=J,super.update();return J}}class gt extends Re{constructor(_){super({material:{vertexShader:ne,fragmentShader:re,uniforms:{boundarySpace:{value:_.boundarySpace},pressure:{value:_.src_p.texture},velocity:{value:_.src_v.texture},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst}),this.init()}update({vel:_,pressure:H}){this.uniforms.velocity.value=_.texture,this.uniforms.pressure.value=H.texture,super.update()}}class Tt{constructor(_){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,..._},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ct,this.cellScale=new ct,this.boundarySpace=new ct,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?ha:ji}createAllFBO(){const H={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Mn,magFilter:Mn,wrapS:gi,wrapT:gi};for(let J in this.fbos)this.fbos[J]=new Yi(this.fboSize.x,this.fboSize.y,H)}createShaderPass(){this.advection=new Xe({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ve({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new mt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new tn({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new vt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new gt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const _=Math.max(1,Math.round(this.options.resolution*q.width)),H=Math.max(1,Math.round(this.options.resolution*q.height)),J=1/_,he=1/H;this.cellScale.set(J,he),this.fboSize.set(_,H)}resize(){this.calcSize();for(let _ in this.fbos)this.fbos[_].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let _=this.fbos.vel_1;this.options.isViscous&&(_=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:_});const H=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:_,pressure:H})}}class st{constructor(){this.init()}init(){this.simulation=new Tt,this.scene=new Ux,this.camera=new sf,this.output=new Oi(new ds(2,2),new zl({vertexShader:ne,fragmentShader:oe,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ct},palette:{value:k},bgColor:{value:A}}})),this.scene.add(this.output)}addScene(_){this.scene.add(_)}resize(){this.simulation.resize()}render(){q.renderer.setRenderTarget(null),q.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class nn{constructor(_){this.props=_,q.init(_.$wrapper),F.init(_.$wrapper),F.autoIntensity=_.autoIntensity,F.takeoverDuration=_.takeoverDuration,this.lastUserInteraction=performance.now(),F.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new V(F,this,{enabled:_.autoDemo,speed:_.autoSpeed,resumeDelay:_.autoResumeDelay,rampDuration:_.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():Q.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(q.renderer.domElement),this.output=new st}resize(){q.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),F.update(),q.update(),this.output.update()}loop(){this.running&&(this.render(),L.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,L.current&&(cancelAnimationFrame(L.current),L.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),F.dispose(),q.renderer){const _=q.renderer.domElement;_&&_.parentNode&&_.parentNode.removeChild(_),q.renderer.dispose()}}catch{}}}const X=B.current;X.style.position=X.style.position||"relative",X.style.overflow=X.style.overflow||"hidden";const Kt=new nn({$wrapper:X,autoDemo:M,autoSpeed:T,autoIntensity:E,takeoverDuration:b,autoResumeDelay:y,autoRampDuration:P});U.current=Kt,(()=>{if(!U.current)return;const N=U.current.output?.simulation;if(!N)return;const _=N.options.resolution;Object.assign(N.options,{mouse_force:a,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:o,iterations_poisson:c,dt:f,BFECC:d,resolution:m,isBounce:p}),m!==_&&N.resize()})(),Kt.start();const At=new IntersectionObserver(N=>{const _=N[0],H=_.isIntersecting&&_.intersectionRatio>0;Q.current=H,U.current&&(H&&!document.hidden?U.current.start():U.current.pause())},{threshold:[0,.01,.1]});At.observe(X),O.current=At;const je=new ResizeObserver(()=>{U.current&&(C.current&&cancelAnimationFrame(C.current),C.current=requestAnimationFrame(()=>{U.current&&U.current.resize()}))});return je.observe(X),z.current=je,()=>{if(L.current&&cancelAnimationFrame(L.current),z.current)try{z.current.disconnect()}catch{}if(O.current)try{O.current.disconnect()}catch{}U.current&&U.current.dispose(),U.current=null}},[d,e,f,p,n,c,o,a,m,r,v,M,T,E,b,y,P]),Je.useEffect(()=>{const D=U.current;if(!D)return;const k=D.output?.simulation;if(!k)return;const A=k.options.resolution;Object.assign(k.options,{mouse_force:a,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:o,iterations_poisson:c,dt:f,BFECC:d,resolution:m,isBounce:p}),D.autoDriver&&(D.autoDriver.enabled=M,D.autoDriver.speed=T,D.autoDriver.resumeDelay=y,D.autoDriver.rampDurationMs=P*1e3,D.autoDriver.mouse&&(D.autoDriver.mouse.autoIntensity=E,D.autoDriver.mouse.takeoverDuration=b)),m!==A&&k.resize()},[a,e,n,r,o,c,f,d,m,p,M,T,E,b,y,P]),Z.jsx("div",{ref:B,className:`liquid-ether-container ${x||""}`,style:g})}function lU(){return Z.jsxs(Z.Fragment,{children:[Z.jsx("div",{className:"background-layer",children:Z.jsx(oU,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,autoDemo:!0})}),Z.jsxs("main",{children:[Z.jsx(HM,{}),Z.jsx(kM,{}),Z.jsx(WM,{}),Z.jsx(GA,{}),Z.jsx("h1",{style:{fontFamily:"Aquire"},className:"education-title",children:"Education"}),Z.jsx(VA,{}),Z.jsx(WA,{}),Z.jsx(jA,{}),Z.jsx(YA,{})]})]})}zM.createRoot(document.getElementById("root")).render(Z.jsx(Je.StrictMode,{children:Z.jsx(lU,{})}));
