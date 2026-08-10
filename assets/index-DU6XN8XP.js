(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var $f={exports:{}},Do={};var T_;function wS(){if(T_)return Do;T_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var A_;function DS(){return A_||(A_=1,$f.exports=wS()),$f.exports}var k=DS(),eh={exports:{}},rt={};var R_;function US(){if(R_)return rt;R_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function S(U,ie,_e){this.props=U,this.context=ie,this.refs=M,this.updater=_e||A}S.prototype.isReactComponent={},S.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function F(){}F.prototype=S.prototype;function P(U,ie,_e){this.props=U,this.context=ie,this.refs=M,this.updater=_e||A}var L=P.prototype=new F;L.constructor=P,C(L,S.prototype),L.isPureReactComponent=!0;var z=Array.isArray;function H(){}var I={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function R(U,ie,_e){var Ae=_e.ref;return{$$typeof:o,type:U,key:ie,ref:Ae!==void 0?Ae:null,props:_e}}function D(U,ie){return R(U.type,ie,U.props)}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function oe(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_e){return ie[_e]})}var le=/\/+/g;function he(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?oe(""+U.key):ie.toString(36)}function pe(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(ie){U.status==="pending"&&(U.status="fulfilled",U.value=ie)},function(ie){U.status==="pending"&&(U.status="rejected",U.reason=ie)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function N(U,ie,_e,Ae,Be){var te=typeof U;(te==="undefined"||te==="boolean")&&(U=null);var de=!1;if(U===null)de=!0;else switch(te){case"bigint":case"string":case"number":de=!0;break;case"object":switch(U.$$typeof){case o:case t:de=!0;break;case x:return de=U._init,N(de(U._payload),ie,_e,Ae,Be)}}if(de)return Be=Be(U),de=Ae===""?"."+he(U,0):Ae,z(Be)?(_e="",de!=null&&(_e=de.replace(le,"$&/")+"/"),N(Be,ie,_e,"",function(Ge){return Ge})):Be!=null&&(X(Be)&&(Be=D(Be,_e+(Be.key==null||U&&U.key===Be.key?"":(""+Be.key).replace(le,"$&/")+"/")+de)),ie.push(Be)),1;de=0;var Re=Ae===""?".":Ae+":";if(z(U))for(var ke=0;ke<U.length;ke++)Ae=U[ke],te=Re+he(Ae,ke),de+=N(Ae,ie,_e,te,Be);else if(ke=E(U),typeof ke=="function")for(U=ke.call(U),ke=0;!(Ae=U.next()).done;)Ae=Ae.value,te=Re+he(Ae,ke++),de+=N(Ae,ie,_e,te,Be);else if(te==="object"){if(typeof U.then=="function")return N(pe(U),ie,_e,Ae,Be);throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return de}function G(U,ie,_e){if(U==null)return U;var Ae=[],Be=0;return N(U,Ae,"","",function(te){return ie.call(_e,te,Be++)}),Ae}function ee(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(_e){(U._status===0||U._status===-1)&&(U._status=1,U._result=_e)},function(_e){(U._status===0||U._status===-1)&&(U._status=2,U._result=_e)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var ye=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Se={map:G,forEach:function(U,ie,_e){G(U,function(){ie.apply(this,arguments)},_e)},count:function(U){var ie=0;return G(U,function(){ie++}),ie},toArray:function(U){return G(U,function(ie){return ie})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return rt.Activity=v,rt.Children=Se,rt.Component=S,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=P,rt.StrictMode=s,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,rt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return I.H.useMemoCache(U)}},rt.cache=function(U){return function(){return U.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(U,ie,_e){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ae=C({},U.props),Be=U.key;if(ie!=null)for(te in ie.key!==void 0&&(Be=""+ie.key),ie)!Q.call(ie,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ie.ref===void 0||(Ae[te]=ie[te]);var te=arguments.length-2;if(te===1)Ae.children=_e;else if(1<te){for(var de=Array(te),Re=0;Re<te;Re++)de[Re]=arguments[Re+2];Ae.children=de}return R(U.type,Be,Ae)},rt.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},rt.createElement=function(U,ie,_e){var Ae,Be={},te=null;if(ie!=null)for(Ae in ie.key!==void 0&&(te=""+ie.key),ie)Q.call(ie,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Be[Ae]=ie[Ae]);var de=arguments.length-2;if(de===1)Be.children=_e;else if(1<de){for(var Re=Array(de),ke=0;ke<de;ke++)Re[ke]=arguments[ke+2];Be.children=Re}if(U&&U.defaultProps)for(Ae in de=U.defaultProps,de)Be[Ae]===void 0&&(Be[Ae]=de[Ae]);return R(U,te,Be)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(U){return{$$typeof:d,render:U}},rt.isValidElement=X,rt.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:ee}},rt.memo=function(U,ie){return{$$typeof:p,type:U,compare:ie===void 0?null:ie}},rt.startTransition=function(U){var ie=I.T,_e={};I.T=_e;try{var Ae=U(),Be=I.S;Be!==null&&Be(_e,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(H,ye)}catch(te){ye(te)}finally{ie!==null&&_e.types!==null&&(ie.types=_e.types),I.T=ie}},rt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},rt.use=function(U){return I.H.use(U)},rt.useActionState=function(U,ie,_e){return I.H.useActionState(U,ie,_e)},rt.useCallback=function(U,ie){return I.H.useCallback(U,ie)},rt.useContext=function(U){return I.H.useContext(U)},rt.useDebugValue=function(){},rt.useDeferredValue=function(U,ie){return I.H.useDeferredValue(U,ie)},rt.useEffect=function(U,ie){return I.H.useEffect(U,ie)},rt.useEffectEvent=function(U){return I.H.useEffectEvent(U)},rt.useId=function(){return I.H.useId()},rt.useImperativeHandle=function(U,ie,_e){return I.H.useImperativeHandle(U,ie,_e)},rt.useInsertionEffect=function(U,ie){return I.H.useInsertionEffect(U,ie)},rt.useLayoutEffect=function(U,ie){return I.H.useLayoutEffect(U,ie)},rt.useMemo=function(U,ie){return I.H.useMemo(U,ie)},rt.useOptimistic=function(U,ie){return I.H.useOptimistic(U,ie)},rt.useReducer=function(U,ie,_e){return I.H.useReducer(U,ie,_e)},rt.useRef=function(U){return I.H.useRef(U)},rt.useState=function(U){return I.H.useState(U)},rt.useSyncExternalStore=function(U,ie,_e){return I.H.useSyncExternalStore(U,ie,_e)},rt.useTransition=function(){return I.H.useTransition()},rt.version="19.2.3",rt}var C_;function Od(){return C_||(C_=1,eh.exports=US()),eh.exports}var pn=Od(),th={exports:{}},Uo={},nh={exports:{}},ih={};var w_;function NS(){return w_||(w_=1,(function(o){function t(N,G){var ee=N.length;N.push(G);e:for(;0<ee;){var ye=ee-1>>>1,Se=N[ye];if(0<l(Se,G))N[ye]=G,N[ee]=Se,ee=ye;else break e}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var G=N[0],ee=N.pop();if(ee!==G){N[0]=ee;e:for(var ye=0,Se=N.length,U=Se>>>1;ye<U;){var ie=2*(ye+1)-1,_e=N[ie],Ae=ie+1,Be=N[Ae];if(0>l(_e,ee))Ae<Se&&0>l(Be,_e)?(N[ye]=Be,N[Ae]=ee,ye=Ae):(N[ye]=_e,N[ie]=ee,ye=ie);else if(Ae<Se&&0>l(Be,ee))N[ye]=Be,N[Ae]=ee,ye=Ae;else break e}}return G}function l(N,G){var ee=N.sortIndex-G.sortIndex;return ee!==0?ee:N.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,v=null,y=3,E=!1,A=!1,C=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(N){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=N)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function z(N){if(C=!1,L(N),!A)if(i(m)!==null)A=!0,H||(H=!0,oe());else{var G=i(p);G!==null&&pe(z,G.startTime-N)}}var H=!1,I=-1,Q=5,R=-1;function D(){return M?!0:!(o.unstable_now()-R<Q)}function X(){if(M=!1,H){var N=o.unstable_now();R=N;var G=!0;try{e:{A=!1,C&&(C=!1,F(I),I=-1),E=!0;var ee=y;try{t:{for(L(N),v=i(m);v!==null&&!(v.expirationTime>N&&D());){var ye=v.callback;if(typeof ye=="function"){v.callback=null,y=v.priorityLevel;var Se=ye(v.expirationTime<=N);if(N=o.unstable_now(),typeof Se=="function"){v.callback=Se,L(N),G=!0;break t}v===i(m)&&s(m),L(N)}else s(m);v=i(m)}if(v!==null)G=!0;else{var U=i(p);U!==null&&pe(z,U.startTime-N),G=!1}}break e}finally{v=null,y=ee,E=!1}G=void 0}}finally{G?oe():H=!1}}}var oe;if(typeof P=="function")oe=function(){P(X)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,he=le.port2;le.port1.onmessage=X,oe=function(){he.postMessage(null)}}else oe=function(){S(X,0)};function pe(N,G){I=S(function(){N(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(N){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var ee=y;y=G;try{return N()}finally{y=ee}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ee=y;y=N;try{return G()}finally{y=ee}},o.unstable_scheduleCallback=function(N,G,ee){var ye=o.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ye+ee:ye):ee=ye,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ee+Se,N={id:x++,callback:G,priorityLevel:N,startTime:ee,expirationTime:Se,sortIndex:-1},ee>ye?(N.sortIndex=ee,t(p,N),i(m)===null&&N===i(p)&&(C?(F(I),I=-1):C=!0,pe(z,ee-ye))):(N.sortIndex=Se,t(m,N),A||E||(A=!0,H||(H=!0,oe()))),N},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(N){var G=y;return function(){var ee=y;y=G;try{return N.apply(this,arguments)}finally{y=ee}}}})(ih)),ih}var D_;function LS(){return D_||(D_=1,nh.exports=NS()),nh.exports}var ah={exports:{}},Nn={};var U_;function OS(){if(U_)return Nn;U_=1;var o=Od();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,x)},Nn.flushSync=function(m){var p=h.T,x=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=x,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,v=d(x,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:E}):x==="script"&&s.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,v=d(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.2.3",Nn}var N_;function PS(){if(N_)return ah.exports;N_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ah.exports=OS(),ah.exports}var L_;function FS(){if(L_)return Uo;L_=1;var o=LS(),t=Od(),i=PS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,b=u.child;b;){if(b===a){_=!0,a=u,r=f;break}if(b===r){_=!0,r=u,a=f;break}b=b.sibling}if(!_){for(b=f.child;b;){if(b===a){_=!0,a=f,r=u;break}if(b===r){_=!0,r=f,a=u;break}b=b.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function he(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case H:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case P:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:he(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return he(e(n))}catch{}}return null}var pe=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ye=[],Se=-1;function U(e){return{current:e}}function ie(e){0>Se||(e.current=ye[Se],ye[Se]=null,Se--)}function _e(e,n){Se++,ye[Se]=e.current,e.current=n}var Ae=U(null),Be=U(null),te=U(null),de=U(null);function Re(e,n){switch(_e(te,n),_e(Be,e),_e(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Yg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Yg(n),e=Zg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ie(Ae),_e(Ae,e)}function ke(){ie(Ae),ie(Be),ie(te)}function Ge(e){e.memoizedState!==null&&_e(de,e);var n=Ae.current,a=Zg(n,e.type);n!==a&&(_e(Be,e),_e(Ae,a))}function dt(e){Be.current===e&&(ie(Ae),ie(Be)),de.current===e&&(ie(de),Ao._currentValue=ee)}var Yt,mt;function pt(e){if(Yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",mt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+e+mt}var Et=!1;function at(e,n){if(!e||Et)return"";Et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ue){var se=ue}Reflect.construct(e,[],ve)}else{try{ve.call()}catch(ue){se=ue}e.call(ve.prototype)}}else{try{throw Error()}catch(ue){se=ue}(ve=e())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ue){if(ue&&se&&typeof ue.stack=="string")return[ue.stack,se.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],b=f[1];if(_&&b){var B=_.split(`
`),$=b.split(`
`);for(u=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(r===B.length||u===$.length)for(r=B.length-1,u=$.length-1;1<=r&&0<=u&&B[r]!==$[u];)u--;for(;1<=r&&0<=u;r--,u--)if(B[r]!==$[u]){if(r!==1||u!==1)do if(r--,u--,0>u||B[r]!==$[u]){var me=`
`+B[r].replace(" at new "," at ");return e.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",e.displayName)),me}while(1<=r&&0<=u);break}}}finally{Et=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pt(a):""}function Zt(e,n){switch(e.tag){case 26:case 27:case 5:return pt(e.type);case 16:return pt("Lazy");case 13:return e.child!==n&&n!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return at(e.type,!1);case 11:return at(e.type.render,!1);case 1:return at(e.type,!0);case 31:return pt("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=Zt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var kt=Object.prototype.hasOwnProperty,St=o.unstable_scheduleCallback,bt=o.unstable_cancelCallback,We=o.unstable_shouldYield,w=o.unstable_requestPaint,g=o.unstable_now,O=o.unstable_getCurrentPriorityLevel,Z=o.unstable_ImmediatePriority,fe=o.unstable_UserBlockingPriority,ne=o.unstable_NormalPriority,Pe=o.unstable_LowPriority,Ce=o.unstable_IdlePriority,Ve=o.log,Je=o.unstable_setDisableYieldValue,Ee=null,be=null;function ze(e){if(typeof Ve=="function"&&Je(e),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Ee,e)}catch{}}var Fe=Math.clz32?Math.clz32:W,De=Math.log,ct=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(De(e)/ct|0)|0}var Ne=256,Te=262144,Ie=4194304;function Me(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?u=Me(r):(_&=b,_!==0?u=Me(_):a||(a=b&~e,a!==0&&(u=Me(a))))):(b=r&~f,b!==0?u=Me(b):_!==0?u=Me(_):a||(a=r&~e,a!==0&&(u=Me(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function we(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function nt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var e=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),e}function Tt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Un(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vi(e,n,a,r,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,B=e.expirationTimes,$=e.hiddenUpdates;for(a=_&~a;0<a;){var me=31-Fe(a),ve=1<<me;b[me]=0,B[me]=-1;var se=$[me];if(se!==null)for($[me]=null,me=0;me<se.length;me++){var ue=se[me];ue!==null&&(ue.lane&=-536870913)}a&=~ve}r!==0&&$o(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function $o(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Fe(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ir(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Fe(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Ns(e,n){var a=n&-n;return a=(a&42)!==0?1:zr(a),(a&(e.suspendedLanes|n))!==0?0:a}function zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ls(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Br(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:v_(e.type))}function Oi(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var ii=Math.random().toString(36).slice(2),sn="__reactFiber$"+ii,xn="__reactProps$"+ii,xi="__reactContainer$"+ii,Os="__reactEvents$"+ii,Ps="__reactListeners$"+ii,el="__reactHandles$"+ii,Hr="__reactResources$"+ii,ts="__reactMarker$"+ii;function Gr(e){delete e[sn],delete e[xn],delete e[Os],delete e[Ps],delete e[el]}function Sa(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[xi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=n_(e);e!==null;){if(a=e[sn])return a;e=n_(e)}return n}e=a,a=e.parentNode}return null}function ya(e){if(e=e[sn]||e[xi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ns(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ma(e){var n=e[Hr];return n||(n=e[Hr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function T(e){e[ts]=!0}var j=new Set,ce={};function ae(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(ce[e]=n,e=0;e<n.length;e++)j.add(n[e])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),He={},Le={};function Xe(e){return kt.call(Le,e)?!0:kt.call(He,e)?!1:Ue.test(e)?Le[e]=!0:(He[e]=!0,!1)}function je(e,n,a){if(Xe(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function $e(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ye(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qt(e){if(!e._valueTracker){var n=Dt(e)?"checked":"value";e._valueTracker=Kt(e,n,""+e[n])}}function Ot(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Dt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function st(e){return e.replace(Ut,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(e,n,a,r,u,f,_,b){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+et(n)):e.value!==""+et(n)&&(e.value=""+et(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?yn(e,_,et(n)):a!=null?yn(e,_,et(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+et(b):e.removeAttribute("name")}function Wi(e,n,a,r,u,f,_,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qt(e);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),qt(e)}function yn(e,n,a){n==="number"&&Ke(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ai(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ft(e,n,a){if(n!=null&&(n=""+et(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+et(a):""}function Mn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(pe(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=et(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),qt(e)}function hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bn(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Fs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&bn(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&bn(e,f,n[f])}function Si(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Av=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(e){return Av.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var Zc=null;function Kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Is=null,zs=null;function jd(e){var n=ya(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Sn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[xn]||null;if(!u)throw Error(s(90));Sn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ot(r)}break e;case"textarea":Ft(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ai(e,!!a.multiple,n,!1)}}}var Qc=!1;function Yd(e,n,a){if(Qc)return e(n,a);Qc=!0;try{var r=e(n);return r}finally{if(Qc=!1,(Is!==null||zs!==null)&&(Vl(),Is&&(n=Is,e=zs,zs=Is=null,jd(n),e)))for(n=0;n<e.length;n++)jd(e[n])}}function Vr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[xn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(Yi)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Jc=!1}var Ea=null,$c=null,nl=null;function Zd(){if(nl)return nl;var e,n=$c,a=n.length,r,u="value"in Ea?Ea.value:Ea.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return nl=u.slice(e,1<r?1-r:void 0)}function il(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function al(){return!0}function Kd(){return!1}function zn(e){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:Kd,this.isPropagationStopped=Kd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=zn(is),Xr=v({},is,{view:0,detail:0}),Rv=zn(Xr),eu,tu,qr,rl=v({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(eu=e.screenX-qr.screenX,tu=e.screenY-qr.screenY):tu=eu=0,qr=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),Qd=zn(rl),Cv=v({},rl,{dataTransfer:0}),wv=zn(Cv),Dv=v({},Xr,{relatedTarget:0}),nu=zn(Dv),Uv=v({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Nv=zn(Uv),Lv=v({},is,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ov=zn(Lv),Pv=v({},is,{data:0}),Jd=zn(Pv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zv[e])?!!n[e]:!1}function iu(){return Bv}var Hv=v({},Xr,{key:function(e){if(e.key){var n=Fv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Iv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gv=zn(Hv),Vv=v({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=zn(Vv),kv=v({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),Xv=zn(kv),qv=v({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=zn(qv),jv=v({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yv=zn(jv),Zv=v({},is,{newState:0,oldState:0}),Kv=zn(Zv),Qv=[9,13,27,32],au=Yi&&"CompositionEvent"in window,Wr=null;Yi&&"documentMode"in document&&(Wr=document.documentMode);var Jv=Yi&&"TextEvent"in window&&!Wr,ep=Yi&&(!au||Wr&&8<Wr&&11>=Wr),tp=" ",np=!1;function ip(e,n){switch(e){case"keyup":return Qv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bs=!1;function $v(e,n){switch(e){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,tp);case"textInput":return e=n.data,e===tp&&np?null:e;default:return null}}function ex(e,n){if(Bs)return e==="compositionend"||!au&&ip(e,n)?(e=Zd(),nl=$c=Ea=null,Bs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ep&&n.locale!=="ko"?null:n.data;default:return null}}var tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!tx[e.type]:n==="textarea"}function rp(e,n,a,r){Is?zs?zs.push(r):zs=[r]:Is=r,n=Zl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var jr=null,Yr=null;function nx(e){Vg(e,0)}function ol(e){var n=ns(e);if(Ot(n))return e}function op(e,n){if(e==="change")return n}var lp=!1;if(Yi){var su;if(Yi){var ru="oninput"in document;if(!ru){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),ru=typeof cp.oninput=="function"}su=ru}else su=!1;lp=su&&(!document.documentMode||9<document.documentMode)}function up(){jr&&(jr.detachEvent("onpropertychange",fp),Yr=jr=null)}function fp(e){if(e.propertyName==="value"&&ol(Yr)){var n=[];rp(n,Yr,e,Kc(e)),Yd(nx,n)}}function ix(e,n,a){e==="focusin"?(up(),jr=n,Yr=a,jr.attachEvent("onpropertychange",fp)):e==="focusout"&&up()}function ax(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(Yr)}function sx(e,n){if(e==="click")return ol(n)}function rx(e,n){if(e==="input"||e==="change")return ol(n)}function ox(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:ox;function Zr(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!kt.call(n,u)||!jn(e[u],n[u]))return!1}return!0}function hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dp(e,n){var a=hp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hp(a)}}function pp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ke(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ke(e.document)}return n}function ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var lx=Yi&&"documentMode"in document&&11>=document.documentMode,Hs=null,lu=null,Kr=null,cu=!1;function gp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||Hs==null||Hs!==Ke(r)||(r=Hs,"selectionStart"in r&&ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&Zr(Kr,r)||(Kr=r,r=Zl(lu,"onSelect"),0<r.length&&(n=new sl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Hs)))}function as(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Gs={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},uu={},_p={};Yi&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function ss(e){if(uu[e])return uu[e];if(!Gs[e])return e;var n=Gs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return uu[e]=n[a];return e}var vp=ss("animationend"),xp=ss("animationiteration"),Sp=ss("animationstart"),cx=ss("transitionrun"),ux=ss("transitionstart"),fx=ss("transitioncancel"),yp=ss("transitionend"),Mp=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function yi(e,n){Mp.set(e,n),ae(n,[e])}var ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],Vs=0,hu=0;function cl(){for(var e=Vs,n=hu=Vs=0;n<e;){var a=si[n];si[n++]=null;var r=si[n];si[n++]=null;var u=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Ep(a,u,f)}}function ul(e,n,a,r){si[Vs++]=e,si[Vs++]=n,si[Vs++]=a,si[Vs++]=r,hu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function du(e,n,a,r){return ul(e,n,a,r),fl(e)}function rs(e,n){return ul(e,null,null,n),fl(e)}function Ep(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Fe(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function fl(e){if(50<xo)throw xo=0,Ef=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ks={};function hx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,r){return new hx(e,n,a,r)}function pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function bp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hl(e,n,a,r,u,f){var _=0;if(r=e,typeof e=="function")pu(e)&&(_=1);else if(typeof e=="string")_=_S(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case R:return e=Yn(31,a,n,u),e.elementType=R,e.lanes=f,e;case C:return os(a.children,u,f,n);case M:_=8,u|=24;break;case S:return e=Yn(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case z:return e=Yn(13,a,n,u),e.elementType=z,e.lanes=f,e;case H:return e=Yn(19,a,n,u),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:_=10;break e;case F:_=9;break e;case L:_=11;break e;case I:_=14;break e;case Q:_=16,r=null;break e}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Yn(_,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function os(e,n,a,r){return e=Yn(7,e,r,n),e.lanes=a,e}function mu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function Tp(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function gu(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ap=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=Ap.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Ap.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Xs=[],qs=0,dl=null,Qr=0,oi=[],li=0,ba=null,Pi=1,Fi="";function Ki(e,n){Xs[qs++]=Qr,Xs[qs++]=dl,dl=e,Qr=n}function Rp(e,n,a){oi[li++]=Pi,oi[li++]=Fi,oi[li++]=ba,ba=e;var r=Pi;e=Fi;var u=32-Fe(r)-1;r&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Pi=1<<32-Fe(n)+u|a<<u|r,Fi=f+e}else Pi=1<<f|a<<u|r,Fi=e}function _u(e){e.return!==null&&(Ki(e,1),Rp(e,1,0))}function vu(e){for(;e===dl;)dl=Xs[--qs],Xs[qs]=null,Qr=Xs[--qs],Xs[qs]=null;for(;e===ba;)ba=oi[--li],oi[li]=null,Fi=oi[--li],oi[li]=null,Pi=oi[--li],oi[li]=null}function Cp(e,n){oi[li++]=Pi,oi[li++]=Fi,oi[li++]=ba,Pi=n.id,Fi=n.overflow,ba=e}var Tn=null,Wt=null,yt=!1,Ta=null,ci=!1,xu=Error(s(519));function Aa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jr(ri(n,e)),xu}function wp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[sn]=e,n[xn]=r,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)_t(yo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Wi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Mn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Wg(n.textContent,a)?(r.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),r.onScroll!=null&&_t("scroll",n),r.onScrollEnd!=null&&_t("scrollend",n),r.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Aa(e,!0)}function Dp(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Tn=Tn.return}}function Ws(e){if(e!==Tn)return!1;if(!yt)return Dp(e),yt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&Wt&&Aa(e),Dp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Wt=t_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Wt=t_(e)}else n===27?(n=Wt,Ha(e.type)?(e=kf,kf=null,Wt=e):Wt=n):Wt=Tn?fi(e.stateNode.nextSibling):null;return!0}function ls(){Wt=Tn=null,yt=!1}function Su(){var e=Ta;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Ta=null),e}function Jr(e){Ta===null?Ta=[e]:Ta.push(e)}var yu=U(null),cs=null,Qi=null;function Ra(e,n,a){_e(yu,n._currentValue),n._currentValue=a}function Ji(e){e._currentValue=yu.current,ie(yu)}function Mu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Eu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=u;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Mu(f.return,a,e),r||(_=null);break e}f=b.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Mu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function js(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var b=u.type;jn(u.pendingProps.value,_.value)||(e!==null?e.push(b):e=[b])}}else if(u===de.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}u=u.return}e!==null&&Eu(n,e,a,r),n.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function us(e){cs=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Up(cs,e)}function ml(e,n){return cs===null&&us(e),Up(e,n)}function Up(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(e===null)throw Error(s(308));Qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Qi=Qi.next=n;return a}var dx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},px=o.unstable_scheduleCallback,mx=o.unstable_NormalPriority,rn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bu(){return{controller:new dx,data:new Map,refCount:0}}function $r(e){e.refCount--,e.refCount===0&&px(mx,function(){e.controller.abort()})}var eo=null,Tu=0,Ys=0,Zs=null;function gx(e,n){if(eo===null){var a=eo=[];Tu=0,Ys=wf(),Zs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Tu++,n.then(Np,Np),n}function Np(){if(--Tu===0&&eo!==null){Zs!==null&&(Zs.status="fulfilled");var e=eo;eo=null,Ys=0,Zs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function _x(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Lp=N.S;N.S=function(e,n){gg=g(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gx(e,n),Lp!==null&&Lp(e,n)};var fs=U(null);function Au(){var e=fs.current;return e!==null?e:Xt.pooledCache}function gl(e,n){n===null?_e(fs,fs.current):_e(fs,n.pool)}function Op(){var e=Au();return e===null?null:{parent:rn._currentValue,pool:e}}var Ks=Error(s(460)),Ru=Error(s(474)),_l=Error(s(542)),vl={then:function(){}};function Pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zp(e),e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=Xt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zp(e),e}throw ds=n,Ks}}function hs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ds=a,Ks):a}}var ds=null;function Ip(){if(ds===null)throw Error(s(459));var e=ds;return ds=null,e}function zp(e){if(e===Ks||e===_l)throw Error(s(483))}var Qs=null,to=0;function xl(e){var n=to;return to+=1,Qs===null&&(Qs=[]),Fp(Qs,e,n)}function no(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Sl(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bp(e){function n(Y,q){if(e){var J=Y.deletions;J===null?(Y.deletions=[q],Y.flags|=16):J.push(q)}}function a(Y,q){if(!e)return null;for(;q!==null;)n(Y,q),q=q.sibling;return null}function r(Y){for(var q=new Map;Y!==null;)Y.key!==null?q.set(Y.key,Y):q.set(Y.index,Y),Y=Y.sibling;return q}function u(Y,q){return Y=Zi(Y,q),Y.index=0,Y.sibling=null,Y}function f(Y,q,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<q?(Y.flags|=67108866,q):J):(Y.flags|=67108866,q)):(Y.flags|=1048576,q)}function _(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,q,J,ge){return q===null||q.tag!==6?(q=mu(J,Y.mode,ge),q.return=Y,q):(q=u(q,J),q.return=Y,q)}function B(Y,q,J,ge){var Qe=J.type;return Qe===C?me(Y,q,J.props.children,ge,J.key):q!==null&&(q.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Q&&hs(Qe)===q.type)?(q=u(q,J.props),no(q,J),q.return=Y,q):(q=hl(J.type,J.key,J.props,null,Y.mode,ge),no(q,J),q.return=Y,q)}function $(Y,q,J,ge){return q===null||q.tag!==4||q.stateNode.containerInfo!==J.containerInfo||q.stateNode.implementation!==J.implementation?(q=gu(J,Y.mode,ge),q.return=Y,q):(q=u(q,J.children||[]),q.return=Y,q)}function me(Y,q,J,ge,Qe){return q===null||q.tag!==7?(q=os(J,Y.mode,ge,Qe),q.return=Y,q):(q=u(q,J),q.return=Y,q)}function ve(Y,q,J){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=mu(""+q,Y.mode,J),q.return=Y,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case E:return J=hl(q.type,q.key,q.props,null,Y.mode,J),no(J,q),J.return=Y,J;case A:return q=gu(q,Y.mode,J),q.return=Y,q;case Q:return q=hs(q),ve(Y,q,J)}if(pe(q)||oe(q))return q=os(q,Y.mode,J,null),q.return=Y,q;if(typeof q.then=="function")return ve(Y,xl(q),J);if(q.$$typeof===P)return ve(Y,ml(Y,q),J);Sl(Y,q)}return null}function se(Y,q,J,ge){var Qe=q!==null?q.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Qe!==null?null:b(Y,q,""+J,ge);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case E:return J.key===Qe?B(Y,q,J,ge):null;case A:return J.key===Qe?$(Y,q,J,ge):null;case Q:return J=hs(J),se(Y,q,J,ge)}if(pe(J)||oe(J))return Qe!==null?null:me(Y,q,J,ge,null);if(typeof J.then=="function")return se(Y,q,xl(J),ge);if(J.$$typeof===P)return se(Y,q,ml(Y,J),ge);Sl(Y,J)}return null}function ue(Y,q,J,ge,Qe){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Y=Y.get(J)||null,b(q,Y,""+ge,Qe);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case E:return Y=Y.get(ge.key===null?J:ge.key)||null,B(q,Y,ge,Qe);case A:return Y=Y.get(ge.key===null?J:ge.key)||null,$(q,Y,ge,Qe);case Q:return ge=hs(ge),ue(Y,q,J,ge,Qe)}if(pe(ge)||oe(ge))return Y=Y.get(J)||null,me(q,Y,ge,Qe,null);if(typeof ge.then=="function")return ue(Y,q,J,xl(ge),Qe);if(ge.$$typeof===P)return ue(Y,q,J,ml(q,ge),Qe);Sl(q,ge)}return null}function qe(Y,q,J,ge){for(var Qe=null,Rt=null,Ze=q,ut=q=0,xt=null;Ze!==null&&ut<J.length;ut++){Ze.index>ut?(xt=Ze,Ze=null):xt=Ze.sibling;var Ct=se(Y,Ze,J[ut],ge);if(Ct===null){Ze===null&&(Ze=xt);break}e&&Ze&&Ct.alternate===null&&n(Y,Ze),q=f(Ct,q,ut),Rt===null?Qe=Ct:Rt.sibling=Ct,Rt=Ct,Ze=xt}if(ut===J.length)return a(Y,Ze),yt&&Ki(Y,ut),Qe;if(Ze===null){for(;ut<J.length;ut++)Ze=ve(Y,J[ut],ge),Ze!==null&&(q=f(Ze,q,ut),Rt===null?Qe=Ze:Rt.sibling=Ze,Rt=Ze);return yt&&Ki(Y,ut),Qe}for(Ze=r(Ze);ut<J.length;ut++)xt=ue(Ze,Y,ut,J[ut],ge),xt!==null&&(e&&xt.alternate!==null&&Ze.delete(xt.key===null?ut:xt.key),q=f(xt,q,ut),Rt===null?Qe=xt:Rt.sibling=xt,Rt=xt);return e&&Ze.forEach(function(qa){return n(Y,qa)}),yt&&Ki(Y,ut),Qe}function tt(Y,q,J,ge){if(J==null)throw Error(s(151));for(var Qe=null,Rt=null,Ze=q,ut=q=0,xt=null,Ct=J.next();Ze!==null&&!Ct.done;ut++,Ct=J.next()){Ze.index>ut?(xt=Ze,Ze=null):xt=Ze.sibling;var qa=se(Y,Ze,Ct.value,ge);if(qa===null){Ze===null&&(Ze=xt);break}e&&Ze&&qa.alternate===null&&n(Y,Ze),q=f(qa,q,ut),Rt===null?Qe=qa:Rt.sibling=qa,Rt=qa,Ze=xt}if(Ct.done)return a(Y,Ze),yt&&Ki(Y,ut),Qe;if(Ze===null){for(;!Ct.done;ut++,Ct=J.next())Ct=ve(Y,Ct.value,ge),Ct!==null&&(q=f(Ct,q,ut),Rt===null?Qe=Ct:Rt.sibling=Ct,Rt=Ct);return yt&&Ki(Y,ut),Qe}for(Ze=r(Ze);!Ct.done;ut++,Ct=J.next())Ct=ue(Ze,Y,ut,Ct.value,ge),Ct!==null&&(e&&Ct.alternate!==null&&Ze.delete(Ct.key===null?ut:Ct.key),q=f(Ct,q,ut),Rt===null?Qe=Ct:Rt.sibling=Ct,Rt=Ct);return e&&Ze.forEach(function(CS){return n(Y,CS)}),yt&&Ki(Y,ut),Qe}function Vt(Y,q,J,ge){if(typeof J=="object"&&J!==null&&J.type===C&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case E:e:{for(var Qe=J.key;q!==null;){if(q.key===Qe){if(Qe=J.type,Qe===C){if(q.tag===7){a(Y,q.sibling),ge=u(q,J.props.children),ge.return=Y,Y=ge;break e}}else if(q.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Q&&hs(Qe)===q.type){a(Y,q.sibling),ge=u(q,J.props),no(ge,J),ge.return=Y,Y=ge;break e}a(Y,q);break}else n(Y,q);q=q.sibling}J.type===C?(ge=os(J.props.children,Y.mode,ge,J.key),ge.return=Y,Y=ge):(ge=hl(J.type,J.key,J.props,null,Y.mode,ge),no(ge,J),ge.return=Y,Y=ge)}return _(Y);case A:e:{for(Qe=J.key;q!==null;){if(q.key===Qe)if(q.tag===4&&q.stateNode.containerInfo===J.containerInfo&&q.stateNode.implementation===J.implementation){a(Y,q.sibling),ge=u(q,J.children||[]),ge.return=Y,Y=ge;break e}else{a(Y,q);break}else n(Y,q);q=q.sibling}ge=gu(J,Y.mode,ge),ge.return=Y,Y=ge}return _(Y);case Q:return J=hs(J),Vt(Y,q,J,ge)}if(pe(J))return qe(Y,q,J,ge);if(oe(J)){if(Qe=oe(J),typeof Qe!="function")throw Error(s(150));return J=Qe.call(J),tt(Y,q,J,ge)}if(typeof J.then=="function")return Vt(Y,q,xl(J),ge);if(J.$$typeof===P)return Vt(Y,q,ml(Y,J),ge);Sl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,q!==null&&q.tag===6?(a(Y,q.sibling),ge=u(q,J),ge.return=Y,Y=ge):(a(Y,q),ge=mu(J,Y.mode,ge),ge.return=Y,Y=ge),_(Y)):a(Y,q)}return function(Y,q,J,ge){try{to=0;var Qe=Vt(Y,q,J,ge);return Qs=null,Qe}catch(Ze){if(Ze===Ks||Ze===_l)throw Ze;var Rt=Yn(29,Ze,null,Y.mode);return Rt.lanes=ge,Rt.return=Y,Rt}}}var ps=Bp(!0),Hp=Bp(!1),Ca=!1;function Cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Nt&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=fl(e),Ep(e,null,a),n}return ul(e,r,n,a),fl(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ir(e,a)}}function Du(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Uu=!1;function ao(){if(Uu){var e=Zs;if(e!==null)throw e}}function so(e,n,a,r){Uu=!1;var u=e.updateQueue;Ca=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var B=b,$=B.next;B.next=null,_===null?f=$:_.next=$,_=B;var me=e.alternate;me!==null&&(me=me.updateQueue,b=me.lastBaseUpdate,b!==_&&(b===null?me.firstBaseUpdate=$:b.next=$,me.lastBaseUpdate=B))}if(f!==null){var ve=u.baseState;_=0,me=$=B=null,b=f;do{var se=b.lane&-536870913,ue=se!==b.lane;if(ue?(vt&se)===se:(r&se)===se){se!==0&&se===Ys&&(Uu=!0),me!==null&&(me=me.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var qe=e,tt=b;se=n;var Vt=a;switch(tt.tag){case 1:if(qe=tt.payload,typeof qe=="function"){ve=qe.call(Vt,ve,se);break e}ve=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=tt.payload,se=typeof qe=="function"?qe.call(Vt,ve,se):qe,se==null)break e;ve=v({},ve,se);break e;case 2:Ca=!0}}se=b.callback,se!==null&&(e.flags|=64,ue&&(e.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[se]:ue.push(se))}else ue={lane:se,tag:b.tag,payload:b.payload,callback:b.callback,next:null},me===null?($=me=ue,B=ve):me=me.next=ue,_|=se;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ue=b,b=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);me===null&&(B=ve),u.baseState=B,u.firstBaseUpdate=$,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Pa|=_,e.lanes=_,e.memoizedState=ve}}function Gp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Vp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gp(a[e],n)}var Js=U(null),yl=U(0);function kp(e,n){e=oa,_e(yl,e),_e(Js,n),oa=e|n.baseLanes}function Nu(){_e(yl,oa),_e(Js,Js.current)}function Lu(){oa=yl.current,ie(Js),ie(yl)}var Zn=U(null),ui=null;function Ua(e){var n=e.alternate;_e(tn,tn.current&1),_e(Zn,e),ui===null&&(n===null||Js.current!==null||n.memoizedState!==null)&&(ui=e)}function Ou(e){_e(tn,tn.current),_e(Zn,e),ui===null&&(ui=e)}function Xp(e){e.tag===22?(_e(tn,tn.current),_e(Zn,e),ui===null&&(ui=e)):Na()}function Na(){_e(tn,tn.current),_e(Zn,Zn.current)}function Kn(e){ie(Zn),ui===e&&(ui=null),ie(tn)}var tn=U(0);function Ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gf(a)||Vf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,lt=null,Ht=null,on=null,El=!1,$s=!1,ms=!1,bl=0,ro=0,er=null,vx=0;function Jt(){throw Error(s(321))}function Pu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function Fu(e,n,a,r,u,f){return $i=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Rm:Qu,ms=!1,f=a(r,u),ms=!1,$s&&(f=Wp(n,a,r,u)),qp(e),f}function qp(e){N.H=co;var n=Ht!==null&&Ht.next!==null;if($i=0,on=Ht=lt=null,El=!1,ro=0,er=null,n)throw Error(s(300));e===null||ln||(e=e.dependencies,e!==null&&pl(e)&&(ln=!0))}function Wp(e,n,a,r){lt=e;var u=0;do{if($s&&(er=null),ro=0,$s=!1,25<=u)throw Error(s(301));if(u+=1,on=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Cm,f=n(a,r)}while($s);return f}function xx(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(lt.flags|=1024),n}function Iu(){var e=bl!==0;return bl=0,e}function zu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Bu(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}$i=0,on=Ht=lt=null,$s=!1,ro=bl=0,er=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?lt.memoizedState=on=e:on=on.next=e,on}function nn(){if(Ht===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=on===null?lt.memoizedState:on.next;if(n!==null)on=n,Ht=e;else{if(e===null)throw lt.alternate===null?Error(s(467)):Error(s(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},on===null?lt.memoizedState=on=e:on=on.next=e}return on}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=ro;return ro+=1,er===null&&(er=[]),e=Fp(er,e,n),n=lt,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Rm:Qu),e}function Al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===P)return An(e)}throw Error(s(438,String(e)))}function Hu(e){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=lt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=D;return n.index++,a}function ea(e,n){return typeof n=="function"?n(e):n}function Rl(e){var n=nn();return Gu(n,Ht,e)}function Gu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=_=null,B=null,$=n,me=!1;do{var ve=$.lane&-536870913;if(ve!==$.lane?(vt&ve)===ve:($i&ve)===ve){var se=$.revertLane;if(se===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ve===Ys&&(me=!0);else if(($i&se)===se){$=$.next,se===Ys&&(me=!0);continue}else ve={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=ve,_=f):B=B.next=ve,lt.lanes|=se,Pa|=se;ve=$.action,ms&&a(f,ve),f=$.hasEagerState?$.eagerState:a(f,ve)}else se={lane:ve,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=se,_=f):B=B.next=se,lt.lanes|=ve,Pa|=ve;$=$.next}while($!==null&&$!==n);if(B===null?_=f:B.next=b,!jn(f,e.memoizedState)&&(ln=!0,me&&(a=Zs,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=B,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vu(e){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);jn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function jp(e,n,a){var r=lt,u=nn(),f=yt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!jn((Ht||u).memoizedState,a);if(_&&(u.memoizedState=a,ln=!0),u=u.queue,qu(Kp.bind(null,r,u,e),[e]),u.getSnapshot!==n||_||on!==null&&on.memoizedState.tag&1){if(r.flags|=2048,tr(9,{destroy:void 0},Zp.bind(null,r,u,a,n),null),Xt===null)throw Error(s(349));f||($i&127)!==0||Yp(r,n,a)}return a}function Yp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Tl(),lt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Zp(e,n,a,r){n.value=a,n.getSnapshot=r,Qp(n)&&Jp(e)}function Kp(e,n,a){return a(function(){Qp(n)&&Jp(e)})}function Qp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function Jp(e){var n=rs(e,2);n!==null&&kn(n,e,2)}function ku(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),ms){ze(!0);try{a()}finally{ze(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},n}function $p(e,n,a,r){return e.baseState=a,Gu(e,Ht,typeof r=="function"?r:ea)}function Sx(e,n,a,r,u){if(Dl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};N.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,em(n,f)):(f.next=a.next,n.pending=a.next=f)}}function em(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=N.T,_={};N.T=_;try{var b=a(u,r),B=N.S;B!==null&&B(_,b),tm(e,n,b)}catch($){Xu(e,n,$)}finally{f!==null&&_.types!==null&&(f.types=_.types),N.T=f}}else try{f=a(u,r),tm(e,n,f)}catch($){Xu(e,n,$)}}function tm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){nm(e,n,r)},function(r){return Xu(e,n,r)}):nm(e,n,a)}function nm(e,n,a){n.status="fulfilled",n.value=a,im(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,em(e,a)))}function Xu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,im(n),n=n.next;while(n!==r)}e.action=null}function im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function am(e,n){return n}function sm(e,n){if(yt){var a=Xt.formState;if(a!==null){e:{var r=lt;if(yt){if(Wt){t:{for(var u=Wt,f=ci;u.nodeType!==8;){if(!f){u=null;break t}if(u=fi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Wt=fi(u.nextSibling),r=u.data==="F!";break e}}Aa(r)}r=!1}r&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:am,lastRenderedState:n},a.queue=r,a=bm.bind(null,lt,r),r.dispatch=a,r=ku(!1),f=Ku.bind(null,lt,!1,r.queue),r=Pn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Sx.bind(null,lt,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function rm(e){var n=nn();return om(n,Ht,e)}function om(e,n,a){if(n=Gu(e,n,am)[0],e=Rl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=oo(n)}catch(_){throw _===Ks?_l:_}else r=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,tr(9,{destroy:void 0},yx.bind(null,u,a),null)),[r,f,e]}function yx(e,n){e.action=n}function lm(e){var n=nn(),a=Ht;if(a!==null)return om(n,a,e);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function tr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Tl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function cm(){return nn().memoizedState}function Cl(e,n,a,r){var u=Pn();lt.flags|=e,u.memoizedState=tr(1|n,{destroy:void 0},a,r===void 0?null:r)}function wl(e,n,a,r){var u=nn();r=r===void 0?null:r;var f=u.memoizedState.inst;Ht!==null&&r!==null&&Pu(r,Ht.memoizedState.deps)?u.memoizedState=tr(n,f,a,r):(lt.flags|=e,u.memoizedState=tr(1|n,f,a,r))}function um(e,n){Cl(8390656,8,e,n)}function qu(e,n){wl(2048,8,e,n)}function Mx(e){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Tl(),lt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function fm(e){var n=nn().memoizedState;return Mx({ref:n,nextImpl:e}),function(){if((Nt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function hm(e,n){return wl(4,2,e,n)}function dm(e,n){return wl(4,4,e,n)}function pm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function mm(e,n,a){a=a!=null?a.concat([e]):null,wl(4,4,pm.bind(null,n,e),a)}function Wu(){}function gm(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Pu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function _m(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Pu(n,r[1]))return r[0];if(r=e(),ms){ze(!0);try{e()}finally{ze(!1)}}return a.memoizedState=[r,n],r}function ju(e,n,a){return a===void 0||($i&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=vg(),lt.lanes|=e,Pa|=e,a)}function vm(e,n,a,r){return jn(a,n)?a:Js.current!==null?(e=ju(e,a,r),jn(e,n)||(ln=!0),e):($i&42)===0||($i&1073741824)!==0&&(vt&261930)===0?(ln=!0,e.memoizedState=a):(e=vg(),lt.lanes|=e,Pa|=e,n)}function xm(e,n,a,r,u){var f=G.p;G.p=f!==0&&8>f?f:8;var _=N.T,b={};N.T=b,Ku(e,!1,n,a);try{var B=u(),$=N.S;if($!==null&&$(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var me=_x(B,r);lo(e,n,me,$n(e))}else lo(e,n,r,$n(e))}catch(ve){lo(e,n,{then:function(){},status:"rejected",reason:ve},$n())}finally{G.p=f,_!==null&&b.types!==null&&(_.types=b.types),N.T=_}}function Ex(){}function Yu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Sm(e).queue;xm(e,u,n,ee,a===null?Ex:function(){return ym(e),a(r)})}function Sm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ym(e){var n=Sm(e);n.next===null&&(n=e.alternate.memoizedState),lo(e,n.next.queue,{},$n())}function Zu(){return An(Ao)}function Mm(){return nn().memoizedState}function Em(){return nn().memoizedState}function bx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=wa(a);var r=Da(n,e,a);r!==null&&(kn(r,n,a),io(r,n,a)),n={cache:bu()},e.payload=n;return}n=n.return}}function Tx(e,n,a){var r=$n();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(e)?Tm(n,a):(a=du(e,n,a,r),a!==null&&(kn(a,e,r),Am(a,n,r)))}function bm(e,n,a){var r=$n();lo(e,n,a,r)}function lo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(e))Tm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,b=f(_,a);if(u.hasEagerState=!0,u.eagerState=b,jn(b,_))return ul(e,n,u,0),Xt===null&&cl(),!1}catch{}if(a=du(e,n,u,r),a!==null)return kn(a,e,r),Am(a,n,r),!0}return!1}function Ku(e,n,a,r){if(r={lane:2,revertLane:wf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Dl(e)){if(n)throw Error(s(479))}else n=du(e,a,r,2),n!==null&&kn(n,e,2)}function Dl(e){var n=e.alternate;return e===lt||n!==null&&n===lt}function Tm(e,n){$s=El=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Am(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ir(e,a)}}var co={readContext:An,use:Al,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};co.useEffectEvent=Jt;var Rm={readContext:An,use:Al,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:um,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Cl(4194308,4,pm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Cl(4194308,4,e,n)},useInsertionEffect:function(e,n){Cl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var r=e();if(ms){ze(!0);try{e()}finally{ze(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Pn();if(a!==void 0){var u=a(n);if(ms){ze(!0);try{a(n)}finally{ze(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Tx.bind(null,lt,e),[r.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=ku(e);var n=e.queue,a=bm.bind(null,lt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(e,n){var a=Pn();return ju(a,e,n)},useTransition:function(){var e=ku(!1);return e=xm.bind(null,lt,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=lt,u=Pn();if(yt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xt===null)throw Error(s(349));(vt&127)!==0||Yp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,um(Kp.bind(null,r,f,e),[e]),r.flags|=2048,tr(9,{destroy:void 0},Zp.bind(null,r,f,a,n),null),a},useId:function(){var e=Pn(),n=Xt.identifierPrefix;if(yt){var a=Fi,r=Pi;a=(r&~(1<<32-Fe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=vx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Zu,useFormState:sm,useActionState:sm,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,lt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Hu,useCacheRefresh:function(){return Pn().memoizedState=bx.bind(null,lt)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Qu={readContext:An,use:Al,useCallback:gm,useContext:An,useEffect:qu,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:Rl,useRef:cm,useState:function(){return Rl(ea)},useDebugValue:Wu,useDeferredValue:function(e,n){var a=nn();return vm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Rl(ea)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:jp,useId:Mm,useHostTransitionStatus:Zu,useFormState:rm,useActionState:rm,useOptimistic:function(e,n){var a=nn();return $p(a,Ht,e,n)},useMemoCache:Hu,useCacheRefresh:Em};Qu.useEffectEvent=fm;var Cm={readContext:An,use:Al,useCallback:gm,useContext:An,useEffect:qu,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:Vu,useRef:cm,useState:function(){return Vu(ea)},useDebugValue:Wu,useDeferredValue:function(e,n){var a=nn();return Ht===null?ju(a,e,n):vm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Vu(ea)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:jp,useId:Mm,useHostTransitionStatus:Zu,useFormState:lm,useActionState:lm,useOptimistic:function(e,n){var a=nn();return Ht!==null?$p(a,Ht,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Hu,useCacheRefresh:Em};Cm.useEffectEvent=fm;function Ju(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $u={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=$n(),u=wa(r);u.payload=n,a!=null&&(u.callback=a),n=Da(e,u,r),n!==null&&(kn(n,e,r),io(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=$n(),u=wa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Da(e,u,r),n!==null&&(kn(n,e,r),io(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),r=wa(a);r.tag=2,n!=null&&(r.callback=n),n=Da(e,r,a),n!==null&&(kn(n,e,a),io(n,e,a))}};function wm(e,n,a,r,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Zr(a,r)||!Zr(u,f):!0}function Dm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&$u.enqueueReplaceState(n,n.state,null)}function gs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Um(e){ll(e)}function Nm(e){console.error(e)}function Lm(e){ll(e)}function Ul(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Om(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ef(e,n,a){return a=wa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(e,n)},a}function Pm(e){return e=wa(e),e.tag=3,e}function Fm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Om(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Om(n,a,r),typeof u!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function Ax(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&js(n,a,u,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?kl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Af(e,r,u)),!1;case 22:return a.flags|=65536,r===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Af(e,r,u)),!1}throw Error(s(435,a.tag))}return Af(e,r,u),kl(),!1}if(yt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==xu&&(e=Error(s(422),{cause:r}),Jr(ri(e,a)))):(r!==xu&&(n=Error(s(423),{cause:r}),Jr(ri(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ri(r,a),u=ef(e.stateNode,r,u),Du(e,u),$t!==4&&($t=2)),!1;var f=Error(s(520),{cause:r});if(f=ri(f,a),vo===null?vo=[f]:vo.push(f),$t!==4&&($t=2),n===null)return!0;r=ri(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ef(a.stateNode,r,e),Du(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fa===null||!Fa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Pm(u),Fm(u,e,a,r),Du(a,u),!1}a=a.return}while(a!==null);return!1}var tf=Error(s(461)),ln=!1;function Rn(e,n,a,r){n.child=e===null?Hp(n,null,a,r):ps(n,e.child,a,r)}function Im(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var b in r)b!=="ref"&&(_[b]=r[b])}else _=r;return us(n),r=Fu(e,n,a,_,f,u),b=Iu(),e!==null&&!ln?(zu(e,n,u),ta(e,n,u)):(yt&&b&&_u(n),n.flags|=1,Rn(e,n,r,u),n.child)}function zm(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bm(e,n,f,r,u)):(e=hl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!uf(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zr,a(_,r)&&e.ref===n.ref)return ta(e,n,u)}return n.flags|=1,e=Zi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Bm(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Zr(f,r)&&e.ref===n.ref)if(ln=!1,n.pendingProps=r=f,uf(e,u))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,ta(e,n,u)}return nf(e,n,a,r,u)}function Hm(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Gm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,f!==null?f.cachePool:null),f!==null?kp(n,f):Nu(),Xp(n);else return r=n.lanes=536870912,Gm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(gl(n,f.cachePool),kp(n,f),Na(),n.memoizedState=null):(e!==null&&gl(n,null),Nu(),Na());return Rn(e,n,u,a),n.child}function uo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gm(e,n,a,r,u){var f=Au();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&gl(n,null),Nu(),Xp(n),e!==null&&js(e,n,r,!0),n.childLanes=u,null}function Nl(e,n){return n=Ol({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Vm(e,n,a){return ps(n,e.child,null,a),e=Nl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function Rx(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(yt){if(r.mode==="hidden")return e=Nl(n,r),n.lanes=536870912,uo(null,e);if(Ou(n),(e=Wt)?(e=e_(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Pi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Tp(e),a.return=n,n.child=a,Tn=n,Wt=null)):e=null,e===null)throw Aa(n);return n.lanes=536870912,null}return Nl(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Ou(n),u)if(n.flags&256)n.flags&=-257,n=Vm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(ln||js(e,n,a,!1),u=(a&e.childLanes)!==0,ln||u){if(r=Xt,r!==null&&(_=Ns(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,rs(e,_),kn(r,e,_),tf;kl(),n=Vm(e,n,a)}else e=f.treeContext,Wt=fi(_.nextSibling),Tn=n,yt=!0,Ta=null,ci=!1,e!==null&&Cp(n,e),n=Nl(n,r),n.flags|=4096;return n}return e=Zi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ll(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function nf(e,n,a,r,u){return us(n),a=Fu(e,n,a,r,void 0,u),r=Iu(),e!==null&&!ln?(zu(e,n,u),ta(e,n,u)):(yt&&r&&_u(n),n.flags|=1,Rn(e,n,a,u),n.child)}function km(e,n,a,r,u,f){return us(n),n.updateQueue=null,a=Wp(n,r,a,u),qp(e),r=Iu(),e!==null&&!ln?(zu(e,n,f),ta(e,n,f)):(yt&&r&&_u(n),n.flags|=1,Rn(e,n,a,f),n.child)}function Xm(e,n,a,r,u){if(us(n),n.stateNode===null){var f=ks,_=a.contextType;typeof _=="object"&&_!==null&&(f=An(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=$u,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Cu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?An(_):ks,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Ju(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&$u.enqueueReplaceState(f,f.state,null),so(n,r,f,u),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,B=gs(a,b);f.props=B;var $=f.context,me=a.contextType;_=ks,typeof me=="object"&&me!==null&&(_=An(me));var ve=a.getDerivedStateFromProps;me=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==_)&&Dm(n,f,r,_),Ca=!1;var se=n.memoizedState;f.state=se,so(n,r,f,u),ao(),$=n.memoizedState,b||se!==$||Ca?(typeof ve=="function"&&(Ju(n,a,ve,r),$=n.memoizedState),(B=Ca||wm(n,a,B,r,se,$,_))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=_,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,wu(e,n),_=n.memoizedProps,me=gs(a,_),f.props=me,ve=n.pendingProps,se=f.context,$=a.contextType,B=ks,typeof $=="object"&&$!==null&&(B=An($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==ve||se!==B)&&Dm(n,f,r,B),Ca=!1,se=n.memoizedState,f.state=se,so(n,r,f,u),ao();var ue=n.memoizedState;_!==ve||se!==ue||Ca||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof b=="function"&&(Ju(n,a,b,r),ue=n.memoizedState),(me=Ca||wm(n,a,me,r,se,ue,B)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ue,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ue,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ue),f.props=r,f.state=ue,f.context=B,r=me):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ll(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ps(n,e.child,null,u),n.child=ps(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ta(e,n,u),e}function qm(e,n,a,r){return ls(),n.flags|=256,Rn(e,n,a,r),n.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sf(e){return{baseLanes:e,cachePool:Op()}}function rf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function Wm(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(yt){if(u?Ua(n):Na(),(e=Wt)?(e=e_(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Pi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Tp(e),a.return=n,n.child=a,Tn=n,Wt=null)):e=null,e===null)throw Aa(n);return Vf(e)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,u?(Na(),u=n.mode,b=Ol({mode:"hidden",children:b},u),r=os(r,u,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=sf(a),r.childLanes=rf(e,_,a),n.memoizedState=af,uo(null,r)):(Ua(n),of(n,b))}var B=e.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(Ua(n),n.flags&=-257,n=lf(e,n,a)):n.memoizedState!==null?(Na(),n.child=e.child,n.flags|=128,n=null):(Na(),b=r.fallback,u=n.mode,r=Ol({mode:"visible",children:r.children},u),b=os(b,u,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,ps(n,e.child,null,a),r=n.child,r.memoizedState=sf(a),r.childLanes=rf(e,_,a),n.memoizedState=af,n=uo(null,r));else if(Ua(n),Vf(b)){if(_=b.nextSibling&&b.nextSibling.dataset,_)var $=_.dgst;_=$,r=Error(s(419)),r.stack="",r.digest=_,Jr({value:r,source:null,stack:null}),n=lf(e,n,a)}else if(ln||js(e,n,a,!1),_=(a&e.childLanes)!==0,ln||_){if(_=Xt,_!==null&&(r=Ns(_,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,rs(e,r),kn(_,e,r),tf;Gf(b)||kl(),n=lf(e,n,a)}else Gf(b)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Wt=fi(b.nextSibling),Tn=n,yt=!0,Ta=null,ci=!1,e!==null&&Cp(n,e),n=of(n,r.children),n.flags|=4096);return n}return u?(Na(),b=r.fallback,u=n.mode,B=e.child,$=B.sibling,r=Zi(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,$!==null?b=Zi($,b):(b=os(b,u,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,uo(null,r),r=n.child,b=e.child.memoizedState,b===null?b=sf(a):(u=b.cachePool,u!==null?(B=rn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Op(),b={baseLanes:b.baseLanes|a,cachePool:u}),r.memoizedState=b,r.childLanes=rf(e,_,a),n.memoizedState=af,uo(e.child,r)):(Ua(n),a=e.child,e=a.sibling,a=Zi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function of(e,n){return n=Ol({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ol(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function lf(e,n,a){return ps(n,e.child,null,a),e=of(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Mu(e.return,n,a)}function cf(e,n,a,r,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function Ym(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=tn.current,b=(_&2)!==0;if(b?(_=_&1|2,n.flags|=128):_&=1,_e(tn,_),Rn(e,n,r,a),r=yt?Qr:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jm(e,a,n);else if(e.tag===19)jm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ml(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),cf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ml(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}cf(n,!0,a,null,f,r);break;case"together":cf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ta(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(js(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function uf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function Cx(e,n,a){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),Ra(n,rn,e.memoizedState.cache),ls();break;case 27:case 5:Ge(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ou(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Wm(e,n,a):(Ua(n),e=ta(e,n,a),e!==null?e.sibling:null);Ua(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(js(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Ym(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(tn,tn.current),r)break;return null;case 22:return n.lanes=0,Hm(e,n,a,n.pendingProps);case 24:Ra(n,rn,e.memoizedState.cache)}return ta(e,n,a)}function Zm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!uf(e,a)&&(n.flags&128)===0)return ln=!1,Cx(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,yt&&(n.flags&1048576)!==0&&Rp(n,Qr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=hs(n.elementType),n.type=e,typeof e=="function")pu(e)?(r=gs(e,r),n.tag=1,n=Xm(null,n,e,r,a)):(n.tag=0,n=nf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=Im(null,n,e,r,a);break e}else if(u===I){n.tag=14,n=zm(null,n,e,r,a);break e}}throw n=he(e)||e,Error(s(306,n,""))}}return n;case 0:return nf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=gs(r,n.pendingProps),Xm(e,n,r,u,a);case 3:e:{if(Re(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,wu(e,n),so(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Ra(n,rn,r),r!==f.cache&&Eu(n,[rn],a,!0),ao(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=qm(e,n,r,a);break e}else if(r!==u){u=ri(Error(s(424)),n),Jr(u),n=qm(e,n,r,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Wt=fi(e.firstChild),Tn=n,yt=!0,Ta=null,ci=!0,a=Hp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ls(),r===u){n=ta(e,n,a);break e}Rn(e,n,r,a)}n=n.child}return n;case 26:return Ll(e,n),e===null?(a=r_(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,e=n.pendingProps,r=Kl(te.current).createElement(a),r[sn]=n,r[xn]=e,Cn(r,a,e),T(r),n.stateNode=r):n.memoizedState=r_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ge(n),e===null&&yt&&(r=n.stateNode=i_(n.type,n.pendingProps,te.current),Tn=n,ci=!0,u=Wt,Ha(n.type)?(kf=u,Wt=fi(r.firstChild)):Wt=u),Rn(e,n,n.pendingProps.children,a),Ll(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&yt&&((u=r=Wt)&&(r=aS(r,n.type,n.pendingProps,ci),r!==null?(n.stateNode=r,Tn=n,Wt=fi(r.firstChild),ci=!1,u=!0):u=!1),u||Aa(n)),Ge(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,zf(u,f)?r=null:_!==null&&zf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Fu(e,n,xx,null,null,a),Ao._currentValue=u),Ll(e,n),Rn(e,n,r,a),n.child;case 6:return e===null&&yt&&((e=a=Wt)&&(a=sS(a,n.pendingProps,ci),a!==null?(n.stateNode=a,Tn=n,Wt=null,e=!0):e=!1),e||Aa(n)),null;case 13:return Wm(e,n,a);case 4:return Re(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ps(n,null,r,a):Rn(e,n,r,a),n.child;case 11:return Im(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ra(n,n.type,r.value),Rn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,us(n),u=An(u),r=r(u),n.flags|=1,Rn(e,n,r,a),n.child;case 14:return zm(e,n,n.type,n.pendingProps,a);case 15:return Bm(e,n,n.type,n.pendingProps,a);case 19:return Ym(e,n,a);case 31:return Rx(e,n,a);case 22:return Hm(e,n,a,n.pendingProps);case 24:return us(n),r=An(rn),e===null?(u=Au(),u===null&&(u=Xt,f=bu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Cu(n),Ra(n,rn,u)):((e.lanes&a)!==0&&(wu(e,n),so(n,null,null,a),ao()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ra(n,rn,r)):(r=f.cache,Ra(n,rn,r),r!==u.cache&&Eu(n,[rn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(e){e.flags|=4}function ff(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Mg())e.flags|=8192;else throw ds=vl,Ru}else e.flags&=-16777217}function Km(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!f_(n))if(Mg())e.flags|=8192;else throw ds=vl,Ru}function Pl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pt():536870912,e.lanes|=n,sr|=n)}function fo(e,n){if(!yt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function jt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function wx(e,n,a){var r=n.pendingProps;switch(vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ji(rn),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ws(n)?na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Su())),jt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(na(n),f!==null?(jt(n),Km(n,f)):(jt(n),ff(n,u,null,r,a))):f?f!==e.memoizedState?(na(n),jt(n),Km(n,f)):(jt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&na(n),jt(n),ff(n,u,e,r,a)),null;case 27:if(dt(n),a=te.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return jt(n),null}e=Ae.current,Ws(n)?wp(n):(e=i_(u,r,a),n.stateNode=e,na(n))}return jt(n),null;case 5:if(dt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return jt(n),null}if(f=Ae.current,Ws(n))wp(n);else{var _=Kl(te.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[sn]=n,f[xn]=r;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Cn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&na(n)}}return jt(n),ff(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=te.current,Ws(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Wg(e.nodeValue,a)),e||Aa(n,!0)}else e=Kl(e).createTextNode(r),e[sn]=n,n.stateNode=e}return jt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ws(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[sn]=n}else ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),e=!1}else a=Su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return jt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ws(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[sn]=n}else ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),u=!1}else u=Su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),jt(n),null);case 4:return ke(),e===null&&Lf(n.stateNode.containerInfo),jt(n),null;case 10:return Ji(n.type),jt(n),null;case 19:if(ie(tn),r=n.memoizedState,r===null)return jt(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)fo(r,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ml(e),f!==null){for(n.flags|=128,fo(r,!1),e=f.updateQueue,n.updateQueue=e,Pl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)bp(a,e),a=a.sibling;return _e(tn,tn.current&1|2),yt&&Ki(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&g()>Hl&&(n.flags|=128,u=!0,fo(r,!1),n.lanes=4194304)}else{if(!u)if(e=Ml(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Pl(n,e),fo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!yt)return jt(n),null}else 2*g()-r.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,u=!0,fo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=g(),e.sibling=null,a=tn.current,_e(tn,u?a&1|2:a&1),yt&&Ki(n,r.treeForkCount),e):(jt(n),null);case 22:case 23:return Kn(n),Lu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ie(fs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(rn),jt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Dx(e,n){switch(vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ji(rn),ke(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));ls()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ls()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ie(tn),null;case 4:return ke(),null;case 10:return Ji(n.type),null;case 22:case 23:return Kn(n),Lu(),e!==null&&ie(fs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ji(rn),null;case 25:return null;default:return null}}function Qm(e,n){switch(vu(n),n.tag){case 3:Ji(rn),ke();break;case 26:case 27:case 5:dt(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:ie(tn);break;case 10:Ji(n.type);break;case 22:case 23:Kn(n),Lu(),e!==null&&ie(fs);break;case 24:Ji(rn)}}function ho(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(b){zt(n,n.return,b)}}function La(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var _=r.inst,b=_.destroy;if(b!==void 0){_.destroy=void 0,u=n;var B=a,$=b;try{$()}catch(me){zt(u,B,me)}}}r=r.next}while(r!==f)}}catch(me){zt(n,n.return,me)}}function Jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Vp(n,a)}catch(r){zt(e,e.return,r)}}}function $m(e,n,a){a.props=gs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){zt(e,n,r)}}function po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){zt(e,n,u)}}function Ii(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){zt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(e,n,u)}else a.current=null}function eg(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){zt(e,e.return,u)}}function hf(e,n,a){try{var r=e.stateNode;Jx(r,e.type,a,n),r[xn]=n}catch(u){zt(e,e.return,u)}}function tg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function df(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(r!==4&&(r===27&&Ha(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(pf(e,n,a),e=e.sibling;e!==null;)pf(e,n,a),e=e.sibling}function Fl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Fl(e,n,a),e=e.sibling;e!==null;)Fl(e,n,a),e=e.sibling}function ng(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,r,a),n[sn]=e,n[xn]=a}catch(f){zt(e,e.return,f)}}var ia=!1,cn=!1,mf=!1,ig=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Ux(e,n){if(e=e.containerInfo,Ff=ic,e=mp(e),ou(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,b=-1,B=-1,$=0,me=0,ve=e,se=null;t:for(;;){for(var ue;ve!==a||u!==0&&ve.nodeType!==3||(b=_+u),ve!==f||r!==0&&ve.nodeType!==3||(B=_+r),ve.nodeType===3&&(_+=ve.nodeValue.length),(ue=ve.firstChild)!==null;)se=ve,ve=ue;for(;;){if(ve===e)break t;if(se===a&&++$===u&&(b=_),se===f&&++me===r&&(B=_),(ue=ve.nextSibling)!==null)break;ve=se,se=ve.parentNode}ve=ue}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},ic=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var qe=gs(a.type,u);e=r.getSnapshotBeforeUpdate(qe,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(tt){zt(a,a.return,tt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function ag(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),r&4&&ho(5,a);break;case 1:if(sa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){zt(a,a.return,_)}else{var u=gs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){zt(a,a.return,_)}}r&64&&Jm(a),r&512&&po(a,a.return);break;case 3:if(sa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vp(e,n)}catch(_){zt(a,a.return,_)}}break;case 27:n===null&&r&4&&ng(a);case 26:case 5:sa(e,a),n===null&&r&4&&eg(a),r&512&&po(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),r&4&&og(e,a);break;case 13:sa(e,a),r&4&&lg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Hx.bind(null,a),rS(e,a))));break;case 22:if(r=a.memoizedState!==null||ia,!r){n=n!==null&&n.memoizedState!==null||cn,u=ia;var f=cn;ia=r,(cn=n)&&!f?ra(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),ia=u,cn=f}break;case 30:break;default:sa(e,a)}}function sg(e){var n=e.alternate;n!==null&&(e.alternate=null,sg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Gr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qt=null,Bn=!1;function aa(e,n,a){for(a=a.child;a!==null;)rg(e,n,a),a=a.sibling}function rg(e,n,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:cn||Ii(a,n),aa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ii(a,n);var r=Qt,u=Bn;Ha(a.type)&&(Qt=a.stateNode,Bn=!1),aa(e,n,a),Eo(a.stateNode),Qt=r,Bn=u;break;case 5:cn||Ii(a,n);case 6:if(r=Qt,u=Bn,Qt=null,aa(e,n,a),Qt=r,Bn=u,Qt!==null)if(Bn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Qt!==null&&(Bn?(e=Qt,Jg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),dr(e)):Jg(Qt,a.stateNode));break;case 4:r=Qt,u=Bn,Qt=a.stateNode.containerInfo,Bn=!0,aa(e,n,a),Qt=r,Bn=u;break;case 0:case 11:case 14:case 15:La(2,a,n),cn||La(4,a,n),aa(e,n,a);break;case 1:cn||(Ii(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&$m(a,n,r)),aa(e,n,a);break;case 21:aa(e,n,a);break;case 22:cn=(r=cn)||a.memoizedState!==null,aa(e,n,a),cn=r;break;default:aa(e,n,a)}}function og(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{dr(e)}catch(a){zt(n,n.return,a)}}}function lg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{dr(e)}catch(a){zt(n,n.return,a)}}function Nx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ig),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ig),n;default:throw Error(s(435,e.tag))}}function Il(e,n){var a=Nx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Gx.bind(null,e,r);r.then(u,u)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,_=n,b=_;e:for(;b!==null;){switch(b.tag){case 27:if(Ha(b.type)){Qt=b.stateNode,Bn=!1;break e}break;case 5:Qt=b.stateNode,Bn=!1;break e;case 3:case 4:Qt=b.stateNode.containerInfo,Bn=!0;break e}b=b.return}if(Qt===null)throw Error(s(160));rg(f,_,u),Qt=null,Bn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)cg(n,e),n=n.sibling}var Mi=null;function cg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),r&4&&(La(3,e,e.return),ho(3,e),La(5,e,e.return));break;case 1:Hn(n,e),Gn(e),r&512&&(cn||a===null||Ii(a,a.return)),r&64&&ia&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Mi;if(Hn(n,e),Gn(e),r&512&&(cn||a===null||Ii(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ts]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,r,a),f[sn]=e,T(f),r=f;break e;case"link":var _=c_("link","href",u).get(r+(a.href||""));if(_){for(var b=0;b<_.length;b++)if(f=_[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(b,1);break t}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;case"meta":if(_=c_("meta","content",u).get(r+(a.content||""))){for(b=0;b<_.length;b++)if(f=_[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(b,1);break t}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[sn]=e,T(f),r=f}e.stateNode=r}else u_(u,e.type,e.stateNode);else e.stateNode=l_(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?u_(u,e.type,e.stateNode):l_(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),r&512&&(cn||a===null||Ii(a,a.return)),a!==null&&r&4&&hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),r&512&&(cn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{hn(u,"")}catch(qe){zt(e,e.return,qe)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,hf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(mf=!0);break;case 6:if(Hn(n,e),Gn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(qe){zt(e,e.return,qe)}}break;case 3:if($l=null,u=Mi,Mi=Ql(n.containerInfo),Hn(n,e),Mi=u,Gn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{dr(n.containerInfo)}catch(qe){zt(e,e.return,qe)}mf&&(mf=!1,ug(e));break;case 4:r=Mi,Mi=Ql(e.stateNode.containerInfo),Hn(n,e),Gn(e),Mi=r;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Il(e,r)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bl=g()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Il(e,r)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=ia,me=cn;if(ia=$||u,cn=me||B,Hn(n,e),cn=me,ia=$,Gn(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ia||cn||_s(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{b=B.stateNode;var ve=B.memoizedProps.style,se=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;b.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(qe){zt(B,B.return,qe)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(qe){zt(B,B.return,qe)}}}else if(n.tag===18){if(a===null){B=n;try{var ue=B.stateNode;u?$g(ue,!0):$g(B.stateNode,!1)}catch(qe){zt(B,B.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Il(e,a))));break;case 19:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Il(e,r)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(tg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=df(e);Fl(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(hn(_,""),a.flags&=-33);var b=df(e);Fl(e,b,_);break;case 3:case 4:var B=a.stateNode.containerInfo,$=df(e);pf(e,$,B);break;default:throw Error(s(161))}}catch(me){zt(e,e.return,me)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ug(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ag(e,n.alternate,n),n=n.sibling}function _s(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),_s(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&$m(n,n.return,a),_s(n);break;case 27:Eo(n.stateNode);case 26:case 5:Ii(n,n.return),_s(n);break;case 22:n.memoizedState===null&&_s(n);break;case 30:_s(n);break;default:_s(n)}e=e.sibling}}function ra(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ra(u,f,a),ho(4,f);break;case 1:if(ra(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){zt(r,r.return,$)}if(r=f,u=r.updateQueue,u!==null){var b=r.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Gp(B[u],b)}catch($){zt(r,r.return,$)}}a&&_&64&&Jm(f),po(f,f.return);break;case 27:ng(f);case 26:case 5:ra(u,f,a),a&&r===null&&_&4&&eg(f),po(f,f.return);break;case 12:ra(u,f,a);break;case 31:ra(u,f,a),a&&_&4&&og(u,f);break;case 13:ra(u,f,a),a&&_&4&&lg(u,f);break;case 22:f.memoizedState===null&&ra(u,f,a),po(f,f.return);break;case 30:break;default:ra(u,f,a)}n=n.sibling}}function gf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$r(a))}function _f(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$r(e))}function Ei(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fg(e,n,a,r),n=n.sibling}function fg(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,r),u&2048&&ho(9,n);break;case 1:Ei(e,n,a,r);break;case 3:Ei(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$r(e)));break;case 12:if(u&2048){Ei(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,b=f.onPostCommit;typeof b=="function"&&b(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){zt(n,n.return,B)}}else Ei(e,n,a,r);break;case 31:Ei(e,n,a,r);break;case 13:Ei(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,r):mo(e,n):f._visibility&2?Ei(e,n,a,r):(f._visibility|=2,nr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&gf(_,n);break;case 24:Ei(e,n,a,r),u&2048&&_f(n.alternate,n);break;default:Ei(e,n,a,r)}}function nr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,b=a,B=r,$=_.flags;switch(_.tag){case 0:case 11:case 15:nr(f,_,b,B,u),ho(8,_);break;case 23:break;case 22:var me=_.stateNode;_.memoizedState!==null?me._visibility&2?nr(f,_,b,B,u):mo(f,_):(me._visibility|=2,nr(f,_,b,B,u)),u&&$&2048&&gf(_.alternate,_);break;case 24:nr(f,_,b,B,u),u&&$&2048&&_f(_.alternate,_);break;default:nr(f,_,b,B,u)}n=n.sibling}}function mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:mo(a,r),u&2048&&gf(r.alternate,r);break;case 24:mo(a,r),u&2048&&_f(r.alternate,r);break;default:mo(a,r)}n=n.sibling}}var go=8192;function ir(e,n,a){if(e.subtreeFlags&go)for(e=e.child;e!==null;)hg(e,n,a),e=e.sibling}function hg(e,n,a){switch(e.tag){case 26:ir(e,n,a),e.flags&go&&e.memoizedState!==null&&vS(a,Mi,e.memoizedState,e.memoizedProps);break;case 5:ir(e,n,a);break;case 3:case 4:var r=Mi;Mi=Ql(e.stateNode.containerInfo),ir(e,n,a),Mi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=go,go=16777216,ir(e,n,a),go=r):ir(e,n,a));break;default:ir(e,n,a)}}function dg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,mg(r,e)}dg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pg(e),e=e.sibling}function pg(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&La(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):_o(e);break;default:_o(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,mg(r,e)}dg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:La(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function mg(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:$r(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else e:for(a=e;_n!==null;){r=_n;var u=r.sibling,f=r.return;if(sg(r),r===a){_n=null;break e}if(u!==null){u.return=f,_n=u;break e}_n=f}}}var Lx={getCacheForType:function(e){var n=An(rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(rn).controller.signal}},Ox=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Xt=null,gt=null,vt=0,It=0,Qn=null,Oa=!1,ar=!1,vf=!1,oa=0,$t=0,Pa=0,vs=0,xf=0,Jn=0,sr=0,vo=null,Vn=null,Sf=!1,Bl=0,gg=0,Hl=1/0,Gl=null,Fa=null,dn=0,Ia=null,rr=null,la=0,yf=0,Mf=null,_g=null,xo=0,Ef=null;function $n(){return(Nt&2)!==0&&vt!==0?vt&-vt:N.T!==null?wf():Br()}function vg(){if(Jn===0)if((vt&536870912)===0||yt){var e=Te;Te<<=1,(Te&3932160)===0&&(Te=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function kn(e,n,a){(e===Xt&&(It===2||It===9)||e.cancelPendingCommit!==null)&&(or(e,0),za(e,vt,Jn,!1)),Un(e,a),((Nt&2)===0||e!==Xt)&&(e===Xt&&((Nt&2)===0&&(vs|=a),$t===4&&za(e,vt,Jn,!1)),zi(e))}function xg(e,n,a){if((Nt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||we(e,n),u=r?Ix(e,n):Tf(e,n,!0),f=r;do{if(u===0){ar&&!r&&za(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Px(a)){u=Tf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var b=e;u=vo;var B=b.current.memoizedState.isDehydrated;if(B&&(or(b,_).flags|=256),_=Tf(b,_,!1),_!==2){if(vf&&!B){b.errorRecoveryDisabledLanes|=f,vs|=f,u=4;break e}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){or(e,0),za(e,n,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:za(r,n,Jn,!Oa);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Bl+300-g(),10<u)){if(za(r,n,Jn,!Oa),xe(r,0,!0)!==0)break e;la=n,r.timeoutHandle=Kg(Sg.bind(null,r,a,Vn,Gl,Sf,n,Jn,vs,sr,Oa,f,"Throttled",-0,0),u);break e}Sg(r,a,Vn,Gl,Sf,n,Jn,vs,sr,Oa,f,null,-0,0)}}break}while(!0);zi(e)}function Sg(e,n,a,r,u,f,_,b,B,$,me,ve,se,ue){if(e.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},hg(n,f,ve);var qe=(f&62914560)===f?Bl-g():(f&4194048)===f?gg-g():0;if(qe=xS(ve,qe),qe!==null){la=f,e.cancelPendingCommit=qe(Cg.bind(null,e,n,f,a,r,u,_,b,B,me,ve,null,se,ue)),za(e,f,_,!$);return}}Cg(e,n,f,a,r,u,_,b,B)}function Px(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(e,n,a,r){n&=~xf,n&=~vs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&$o(e,a,n)}function Vl(){return(Nt&6)===0?(So(0),!1):!0}function bf(){if(gt!==null){if(It===0)var e=gt.return;else e=gt,Qi=cs=null,Bu(e),Qs=null,to=0,e=gt;for(;e!==null;)Qm(e.alternate,e),e=e.return;gt=null}}function or(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,tS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,bf(),Xt=e,gt=a=Zi(e.current,null),vt=n,It=0,Qn=null,Oa=!1,ar=we(e,n),vf=!1,sr=Jn=xf=vs=Pa=$t=0,Vn=vo=null,Sf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Fe(r),f=1<<u;n|=e[u],r&=~f}return oa=n,cl(),a}function yg(e,n){lt=null,N.H=co,n===Ks||n===_l?(n=Ip(),It=3):n===Ru?(n=Ip(),It=4):It=n===tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,gt===null&&($t=1,Ul(e,ri(n,e.current)))}function Mg(){var e=Zn.current;return e===null?!0:(vt&4194048)===vt?ui===null:(vt&62914560)===vt||(vt&536870912)!==0?e===ui:!1}function Eg(){var e=N.H;return N.H=co,e===null?co:e}function bg(){var e=N.A;return N.A=Lx,e}function kl(){$t=4,Oa||(vt&4194048)!==vt&&Zn.current!==null||(ar=!0),(Pa&134217727)===0&&(vs&134217727)===0||Xt===null||za(Xt,vt,Jn,!1)}function Tf(e,n,a){var r=Nt;Nt|=2;var u=Eg(),f=bg();(Xt!==e||vt!==n)&&(Gl=null,or(e,n)),n=!1;var _=$t;e:do try{if(It!==0&&gt!==null){var b=gt,B=Qn;switch(It){case 8:bf(),_=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var $=It;if(It=0,Qn=null,lr(e,b,B,$),a&&ar){_=0;break e}break;default:$=It,It=0,Qn=null,lr(e,b,B,$)}}Fx(),_=$t;break}catch(me){yg(e,me)}while(!0);return n&&e.shellSuspendCounter++,Qi=cs=null,Nt=r,N.H=u,N.A=f,gt===null&&(Xt=null,vt=0,cl()),_}function Fx(){for(;gt!==null;)Tg(gt)}function Ix(e,n){var a=Nt;Nt|=2;var r=Eg(),u=bg();Xt!==e||vt!==n?(Gl=null,Hl=g()+500,or(e,n)):ar=we(e,n);e:do try{if(It!==0&&gt!==null){n=gt;var f=Qn;t:switch(It){case 1:It=0,Qn=null,lr(e,n,f,1);break;case 2:case 9:if(Pp(f)){It=0,Qn=null,Ag(n);break}n=function(){It!==2&&It!==9||Xt!==e||(It=7),zi(e)},f.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:Pp(f)?(It=0,Qn=null,Ag(n)):(It=0,Qn=null,lr(e,n,f,7));break;case 5:var _=null;switch(gt.tag){case 26:_=gt.memoizedState;case 5:case 27:var b=gt;if(_?f_(_):b.stateNode.complete){It=0,Qn=null;var B=b.sibling;if(B!==null)gt=B;else{var $=b.return;$!==null?(gt=$,Xl($)):gt=null}break t}}It=0,Qn=null,lr(e,n,f,5);break;case 6:It=0,Qn=null,lr(e,n,f,6);break;case 8:bf(),$t=6;break e;default:throw Error(s(462))}}zx();break}catch(me){yg(e,me)}while(!0);return Qi=cs=null,N.H=r,N.A=u,Nt=a,gt!==null?0:(Xt=null,vt=0,cl(),$t)}function zx(){for(;gt!==null&&!We();)Tg(gt)}function Tg(e){var n=Zm(e.alternate,e,oa);e.memoizedProps=e.pendingProps,n===null?Xl(e):gt=n}function Ag(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=km(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=km(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Bu(n);default:Qm(a,n),n=gt=bp(n,oa),n=Zm(a,n,oa)}e.memoizedProps=e.pendingProps,n===null?Xl(e):gt=n}function lr(e,n,a,r){Qi=cs=null,Bu(n),Qs=null,to=0;var u=n.return;try{if(Ax(e,u,n,a,vt)){$t=1,Ul(e,ri(a,e.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;$t=1,Ul(e,ri(a,e.current)),gt=null;return}n.flags&32768?(yt||r===1?e=!0:ar||(vt&536870912)!==0?e=!1:(Oa=e=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Rg(n,e)):Xl(n)}function Xl(e){var n=e;do{if((n.flags&32768)!==0){Rg(n,Oa);return}e=n.return;var a=wx(n.alternate,n,oa);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);$t===0&&($t=5)}function Rg(e,n){do{var a=Dx(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);$t=6,gt=null}function Cg(e,n,a,r,u,f,_,b,B){e.cancelPendingCommit=null;do ql();while(dn!==0);if((Nt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=hu,vi(e,a,f,_,b,B),e===Xt&&(gt=Xt=null,vt=0),rr=n,Ia=e,la=a,yf=f,Mf=u,_g=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vx(ne,function(){return Lg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,u=G.p,G.p=2,_=Nt,Nt|=4;try{Ux(e,n,a)}finally{Nt=_,G.p=u,N.T=r}}dn=1,wg(),Dg(),Ug()}}function wg(){if(dn===1){dn=0;var e=Ia,n=rr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var r=G.p;G.p=2;var u=Nt;Nt|=4;try{cg(n,e);var f=If,_=mp(e.containerInfo),b=f.focusedElem,B=f.selectionRange;if(_!==b&&b&&b.ownerDocument&&pp(b.ownerDocument.documentElement,b)){if(B!==null&&ou(b)){var $=B.start,me=B.end;if(me===void 0&&(me=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(me,b.value.length);else{var ve=b.ownerDocument||document,se=ve&&ve.defaultView||window;if(se.getSelection){var ue=se.getSelection(),qe=b.textContent.length,tt=Math.min(B.start,qe),Vt=B.end===void 0?tt:Math.min(B.end,qe);!ue.extend&&tt>Vt&&(_=Vt,Vt=tt,tt=_);var Y=dp(b,tt),q=dp(b,Vt);if(Y&&q&&(ue.rangeCount!==1||ue.anchorNode!==Y.node||ue.anchorOffset!==Y.offset||ue.focusNode!==q.node||ue.focusOffset!==q.offset)){var J=ve.createRange();J.setStart(Y.node,Y.offset),ue.removeAllRanges(),tt>Vt?(ue.addRange(J),ue.extend(q.node,q.offset)):(J.setEnd(q.node,q.offset),ue.addRange(J))}}}}for(ve=[],ue=b;ue=ue.parentNode;)ue.nodeType===1&&ve.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ve.length;b++){var ge=ve[b];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}ic=!!Ff,If=Ff=null}finally{Nt=u,G.p=r,N.T=a}}e.current=n,dn=2}}function Dg(){if(dn===2){dn=0;var e=Ia,n=rr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var r=G.p;G.p=2;var u=Nt;Nt|=4;try{ag(e,n.alternate,n)}finally{Nt=u,G.p=r,N.T=a}}dn=3}}function Ug(){if(dn===4||dn===3){dn=0,w();var e=Ia,n=rr,a=la,r=_g;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,rr=Ia=null,Ng(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Fa=null),Ls(a),n=n.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=N.T,u=G.p,G.p=2,N.T=null;try{for(var f=e.onRecoverableError,_=0;_<r.length;_++){var b=r[_];f(b.value,{componentStack:b.stack})}}finally{N.T=n,G.p=u}}(la&3)!==0&&ql(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Ef?xo++:(xo=0,Ef=e):xo=0,So(0)}}function Ng(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$r(n)))}function ql(){return wg(),Dg(),Ug(),Lg()}function Lg(){if(dn!==5)return!1;var e=Ia,n=yf;yf=0;var a=Ls(la),r=N.T,u=G.p;try{G.p=32>a?32:a,N.T=null,a=Mf,Mf=null;var f=Ia,_=la;if(dn=0,rr=Ia=null,la=0,(Nt&6)!==0)throw Error(s(331));var b=Nt;if(Nt|=4,pg(f.current),fg(f,f.current,_,a),Nt=b,So(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Ee,f)}catch{}return!0}finally{G.p=u,N.T=r,Ng(e,n)}}function Og(e,n,a){n=ri(a,n),n=ef(e.stateNode,n,2),e=Da(e,n,2),e!==null&&(Un(e,2),zi(e))}function zt(e,n,a){if(e.tag===3)Og(e,e,a);else for(;n!==null;){if(n.tag===3){Og(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fa===null||!Fa.has(r))){e=ri(a,e),a=Pm(2),r=Da(n,a,2),r!==null&&(Fm(a,r,n,e),Un(r,2),zi(r));break}}n=n.return}}function Af(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Ox;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(vf=!0,u.add(a),e=Bx.bind(null,e,n,a),n.then(e,e))}function Bx(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xt===e&&(vt&a)===a&&($t===4||$t===3&&(vt&62914560)===vt&&300>g()-Bl?(Nt&2)===0&&or(e,0):xf|=a,sr===vt&&(sr=0)),zi(e)}function Pg(e,n){n===0&&(n=Pt()),e=rs(e,n),e!==null&&(Un(e,n),zi(e))}function Hx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Pg(e,a)}function Gx(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Pg(e,a)}function Vx(e,n){return St(e,n)}var Wl=null,cr=null,Rf=!1,jl=!1,Cf=!1,Ba=0;function zi(e){e!==cr&&e.next===null&&(cr===null?Wl=cr=e:cr=cr.next=e),jl=!0,Rf||(Rf=!0,Xx())}function So(e,n){if(!Cf&&jl){Cf=!0;do for(var a=!1,r=Wl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Fe(42|e)+1)-1,f&=u&~(_&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Bg(r,f))}else f=vt,f=xe(r,r===Xt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||we(r,f)||(a=!0,Bg(r,f));r=r.next}while(a);Cf=!1}}function kx(){Fg()}function Fg(){jl=Rf=!1;var e=0;Ba!==0&&eS()&&(e=Ba);for(var n=g(),a=null,r=Wl;r!==null;){var u=r.next,f=Ig(r,n);f===0?(r.next=null,a===null?Wl=u:a.next=u,u===null&&(cr=a)):(a=r,(e!==0||(f&3)!==0)&&(jl=!0)),r=u}dn!==0&&dn!==5||So(e),Ba!==0&&(Ba=0)}function Ig(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Fe(f),b=1<<_,B=u[_];B===-1?((b&a)===0||(b&r)!==0)&&(u[_]=nt(b,n)):B<=n&&(e.expiredLanes|=b),f&=~b}if(n=Xt,a=vt,a=xe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(It===2||It===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&bt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||we(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&bt(r),Ls(a)){case 2:case 8:a=fe;break;case 32:a=ne;break;case 268435456:a=Ce;break;default:a=ne}return r=zg.bind(null,e),a=St(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&bt(r),e.callbackPriority=2,e.callbackNode=null,2}function zg(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ql()&&e.callbackNode!==a)return null;var r=vt;return r=xe(e,e===Xt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(xg(e,r,n),Ig(e,g()),e.callbackNode!=null&&e.callbackNode===a?zg.bind(null,e):null)}function Bg(e,n){if(ql())return null;xg(e,n,!0)}function Xx(){nS(function(){(Nt&6)!==0?St(Z,kx):Fg()})}function wf(){if(Ba===0){var e=Ys;e===0&&(e=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),Ba=e}return Ba}function Hg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tl(""+e)}function Gg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function qx(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Hg((u[xn]||null).action),_=r.submitter;_&&(n=(n=_[xn]||null)?Hg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var b=new sl("action","action",null,r,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ba!==0){var B=_?Gg(u,_):new FormData(u);Yu(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=_?Gg(u,_):new FormData(u),Yu(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Df=0;Df<fu.length;Df++){var Uf=fu[Df],Wx=Uf.toLowerCase(),jx=Uf[0].toUpperCase()+Uf.slice(1);yi(Wx,"on"+jx)}yi(vp,"onAnimationEnd"),yi(xp,"onAnimationIteration"),yi(Sp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(cx,"onTransitionRun"),yi(ux,"onTransitionStart"),yi(fx,"onTransitionCancel"),yi(yp,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function Vg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var b=r[_],B=b.instance,$=b.currentTarget;if(b=b.listener,B!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=$;try{f(u)}catch(me){ll(me)}u.currentTarget=null,f=B}else for(_=0;_<r.length;_++){if(b=r[_],B=b.instance,$=b.currentTarget,b=b.listener,B!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=$;try{f(u)}catch(me){ll(me)}u.currentTarget=null,f=B}}}}function _t(e,n){var a=n[Os];a===void 0&&(a=n[Os]=new Set);var r=e+"__bubble";a.has(r)||(kg(n,e,2,!1),a.add(r))}function Nf(e,n,a){var r=0;n&&(r|=4),kg(a,e,r,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[Yl]){e[Yl]=!0,j.forEach(function(a){a!=="selectionchange"&&(Yx.has(a)||Nf(a,!1,e),Nf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Nf("selectionchange",!1,n))}}function kg(e,n,a,r){switch(v_(n)){case 2:var u=MS;break;case 8:u=ES;break;default:u=Yf}a=u.bind(null,n,a,e),u=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Of(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var b=r.stateNode.containerInfo;if(b===u)break;if(_===4)for(_=r.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;b!==null;){if(_=Sa(b),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){r=f=_;continue e}b=b.parentNode}}r=r.return}Yd(function(){var $=f,me=Kc(a),ve=[];e:{var se=Mp.get(e);if(se!==void 0){var ue=sl,qe=e;switch(e){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":ue=Gv;break;case"focusin":qe="focus",ue=nu;break;case"focusout":qe="blur",ue=nu;break;case"beforeblur":case"afterblur":ue=nu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=Xv;break;case vp:case xp:case Sp:ue=Nv;break;case yp:ue=Wv;break;case"scroll":case"scrollend":ue=Rv;break;case"wheel":ue=Yv;break;case"copy":case"cut":case"paste":ue=Ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=$d;break;case"toggle":case"beforetoggle":ue=Kv}var tt=(n&4)!==0,Vt=!tt&&(e==="scroll"||e==="scrollend"),Y=tt?se!==null?se+"Capture":null:se;tt=[];for(var q=$,J;q!==null;){var ge=q;if(J=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||J===null||Y===null||(ge=Vr(q,Y),ge!=null&&tt.push(Mo(q,ge,J))),Vt)break;q=q.return}0<tt.length&&(se=new ue(se,qe,null,a,me),ve.push({event:se,listeners:tt}))}}if((n&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",se&&a!==Zc&&(qe=a.relatedTarget||a.fromElement)&&(Sa(qe)||qe[xi]))break e;if((ue||se)&&(se=me.window===me?me:(se=me.ownerDocument)?se.defaultView||se.parentWindow:window,ue?(qe=a.relatedTarget||a.toElement,ue=$,qe=qe?Sa(qe):null,qe!==null&&(Vt=c(qe),tt=qe.tag,qe!==Vt||tt!==5&&tt!==27&&tt!==6)&&(qe=null)):(ue=null,qe=$),ue!==qe)){if(tt=Qd,ge="onMouseLeave",Y="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(tt=$d,ge="onPointerLeave",Y="onPointerEnter",q="pointer"),Vt=ue==null?se:ns(ue),J=qe==null?se:ns(qe),se=new tt(ge,q+"leave",ue,a,me),se.target=Vt,se.relatedTarget=J,ge=null,Sa(me)===$&&(tt=new tt(Y,q+"enter",qe,a,me),tt.target=J,tt.relatedTarget=Vt,ge=tt),Vt=ge,ue&&qe)t:{for(tt=Zx,Y=ue,q=qe,J=0,ge=Y;ge;ge=tt(ge))J++;ge=0;for(var Qe=q;Qe;Qe=tt(Qe))ge++;for(;0<J-ge;)Y=tt(Y),J--;for(;0<ge-J;)q=tt(q),ge--;for(;J--;){if(Y===q||q!==null&&Y===q.alternate){tt=Y;break t}Y=tt(Y),q=tt(q)}tt=null}else tt=null;ue!==null&&Xg(ve,se,ue,tt,!1),qe!==null&&Vt!==null&&Xg(ve,Vt,qe,tt,!0)}}e:{if(se=$?ns($):window,ue=se.nodeName&&se.nodeName.toLowerCase(),ue==="select"||ue==="input"&&se.type==="file")var Rt=op;else if(sp(se))if(lp)Rt=rx;else{Rt=ax;var Ze=ix}else ue=se.nodeName,!ue||ue.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?$&&Si($.elementType)&&(Rt=op):Rt=sx;if(Rt&&(Rt=Rt(e,$))){rp(ve,Rt,a,me);break e}Ze&&Ze(e,se,$),e==="focusout"&&$&&se.type==="number"&&$.memoizedProps.value!=null&&yn(se,"number",se.value)}switch(Ze=$?ns($):window,e){case"focusin":(sp(Ze)||Ze.contentEditable==="true")&&(Hs=Ze,lu=$,Kr=null);break;case"focusout":Kr=lu=Hs=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,gp(ve,a,me);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":gp(ve,a,me)}var ut;if(au)e:{switch(e){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Bs?ip(e,a)&&(xt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(ep&&a.locale!=="ko"&&(Bs||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Bs&&(ut=Zd()):(Ea=me,$c="value"in Ea?Ea.value:Ea.textContent,Bs=!0)),Ze=Zl($,xt),0<Ze.length&&(xt=new Jd(xt,e,null,a,me),ve.push({event:xt,listeners:Ze}),ut?xt.data=ut:(ut=ap(a),ut!==null&&(xt.data=ut)))),(ut=Jv?$v(e,a):ex(e,a))&&(xt=Zl($,"onBeforeInput"),0<xt.length&&(Ze=new Jd("onBeforeInput","beforeinput",null,a,me),ve.push({event:Ze,listeners:xt}),Ze.data=ut)),qx(ve,e,$,a,me)}Vg(ve,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Zl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Vr(e,a),u!=null&&r.unshift(Mo(e,u,f)),u=Vr(e,n),u!=null&&r.push(Mo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function Zx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xg(e,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var b=a,B=b.alternate,$=b.stateNode;if(b=b.tag,B!==null&&B===r)break;b!==5&&b!==26&&b!==27||$===null||(B=$,u?($=Vr(a,f),$!=null&&_.unshift(Mo(a,$,B))):u||($=Vr(a,f),$!=null&&_.push(Mo(a,$,B)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var Kx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function qg(e){return(typeof e=="string"?e:""+e).replace(Kx,`
`).replace(Qx,"")}function Wg(e,n){return n=qg(n),qg(e)===n}function Gt(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||hn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&hn(e,""+r);break;case"className":$e(e,"class",r);break;case"tabIndex":$e(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(e,a,r);break;case"style":Fs(e,r,f);break;case"data":if(n!=="object"){$e(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=tl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(e,n,"name",u.name,u,null),Gt(e,n,"formEncType",u.formEncType,u,null),Gt(e,n,"formMethod",u.formMethod,u,null),Gt(e,n,"formTarget",u.formTarget,u,null)):(Gt(e,n,"encType",u.encType,u,null),Gt(e,n,"method",u.method,u,null),Gt(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=tl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ji);break;case"onScroll":r!=null&&_t("scroll",e);break;case"onScrollEnd":r!=null&&_t("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=tl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":_t("beforetoggle",e),_t("toggle",e),je(e,"popover",r);break;case"xlinkActuate":Ye(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ye(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ye(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ye(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ye(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ye(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ye(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ye(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ye(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":je(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Tv.get(a)||a,je(e,a,r))}}function Pf(e,n,a,r,u,f){switch(a){case"style":Fs(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?hn(e,r):(typeof r=="number"||typeof r=="bigint")&&hn(e,""+r);break;case"onScroll":r!=null&&_t("scroll",e);break;case"onScrollEnd":r!=null&&_t("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ce.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):je(e,a,r)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(e,n,f,_,a,null)}}u&&Gt(e,n,"srcSet",a.srcSet,a,null),r&&Gt(e,n,"src",a.src,a,null);return;case"input":_t("invalid",e);var b=f=_=u=null,B=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var me=a[r];if(me!=null)switch(r){case"name":u=me;break;case"type":_=me;break;case"checked":B=me;break;case"defaultChecked":$=me;break;case"value":f=me;break;case"defaultValue":b=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:Gt(e,n,r,me,a,null)}}Wi(e,f,b,B,$,_,u,!1);return;case"select":_t("invalid",e),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":_=b;break;case"multiple":r=b;default:Gt(e,n,u,b,a,null)}n=f,a=_,e.multiple=!!r,n!=null?ai(e,!!r,n,!1):a!=null&&ai(e,!!r,a,!0);return;case"textarea":_t("invalid",e),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(b=a[_],b!=null))switch(_){case"value":r=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Gt(e,n,_,b,a,null)}Mn(e,r,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(r=a[B],r!=null)&&(B==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Gt(e,n,B,r,a,null));return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(r=0;r<yo.length;r++)_t(yo[r],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(e,n,$,r,a,null)}return;default:if(Si(n)){for(me in a)a.hasOwnProperty(me)&&(r=a[me],r!==void 0&&Pf(e,n,me,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Gt(e,n,b,r,a,null))}function Jx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,b=null,B=null,$=null,me=null;for(ue in a){var ve=a[ue];if(a.hasOwnProperty(ue)&&ve!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":B=ve;default:r.hasOwnProperty(ue)||Gt(e,n,ue,null,r,ve)}}for(var se in r){var ue=r[se];if(ve=a[se],r.hasOwnProperty(se)&&(ue!=null||ve!=null))switch(se){case"type":f=ue;break;case"name":u=ue;break;case"checked":$=ue;break;case"defaultChecked":me=ue;break;case"value":_=ue;break;case"defaultValue":b=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==ve&&Gt(e,n,se,ue,r,ve)}}Sn(e,_,b,B,$,me,f,u);return;case"select":ue=_=b=se=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ue=B;default:r.hasOwnProperty(f)||Gt(e,n,f,null,r,B)}for(u in r)if(f=r[u],B=a[u],r.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":se=f;break;case"defaultValue":b=f;break;case"multiple":_=f;default:f!==B&&Gt(e,n,u,f,r,B)}n=b,a=_,r=ue,se!=null?ai(e,!!a,se,!1):!!r!=!!a&&(n!=null?ai(e,!!a,n,!0):ai(e,!!a,a?[]:"",!1));return;case"textarea":ue=se=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Gt(e,n,b,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":se=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Gt(e,n,_,u,r,f)}Ft(e,se,ue);return;case"option":for(var qe in a)se=a[qe],a.hasOwnProperty(qe)&&se!=null&&!r.hasOwnProperty(qe)&&(qe==="selected"?e.selected=!1:Gt(e,n,qe,null,r,se));for(B in r)se=r[B],ue=a[B],r.hasOwnProperty(B)&&se!==ue&&(se!=null||ue!=null)&&(B==="selected"?e.selected=se&&typeof se!="function"&&typeof se!="symbol":Gt(e,n,B,se,r,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)se=a[tt],a.hasOwnProperty(tt)&&se!=null&&!r.hasOwnProperty(tt)&&Gt(e,n,tt,null,r,se);for($ in r)if(se=r[$],ue=a[$],r.hasOwnProperty($)&&se!==ue&&(se!=null||ue!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:Gt(e,n,$,se,r,ue)}return;default:if(Si(n)){for(var Vt in a)se=a[Vt],a.hasOwnProperty(Vt)&&se!==void 0&&!r.hasOwnProperty(Vt)&&Pf(e,n,Vt,void 0,r,se);for(me in r)se=r[me],ue=a[me],!r.hasOwnProperty(me)||se===ue||se===void 0&&ue===void 0||Pf(e,n,me,se,r,ue);return}}for(var Y in a)se=a[Y],a.hasOwnProperty(Y)&&se!=null&&!r.hasOwnProperty(Y)&&Gt(e,n,Y,null,r,se);for(ve in r)se=r[ve],ue=a[ve],!r.hasOwnProperty(ve)||se===ue||se==null&&ue==null||Gt(e,n,ve,se,r,ue)}function jg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $x(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,b=u.duration;if(f&&b&&jg(_)){for(_=0,b=u.responseEnd,r+=1;r<a.length;r++){var B=a[r],$=B.startTime;if($>b)break;var me=B.transferSize,ve=B.initiatorType;me&&jg(ve)&&(B=B.responseEnd,_+=me*(B<b?1:(b-$)/(B-$)))}if(--r,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ff=null,If=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function Yg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function eS(){var e=window.event;return e&&e.type==="popstate"?e===Bf?!1:(Bf=e,!0):(Bf=null,!1)}var Kg=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(e){return Qg.resolve(null).then(e).catch(iS)}:Kg;function iS(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function Jg(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),dr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Eo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,b=f.nodeName;f[ts]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Eo(e.ownerDocument.body);a=u}while(a);dr(n)}function $g(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Hf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),Gr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function aS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ts])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function sS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function e_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$?"||e.data==="$~"}function Vf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var kf=null;function t_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function n_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function i_(e,n,a){switch(n=Kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Gr(e)}var hi=new Map,a_=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=G.d;G.d={f:oS,r:lS,D:cS,C:uS,L:fS,m:hS,X:pS,S:dS,M:mS};function oS(){var e=ca.f(),n=Vl();return e||n}function lS(e){var n=ya(e);n!==null&&n.tag===5&&n.type==="form"?ym(n):ca.r(e)}var ur=typeof document>"u"?null:document;function s_(e,n,a){var r=ur;if(r&&typeof n=="string"&&n){var u=st(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),a_.has(u)||(a_.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Cn(n,"link",e),T(n),r.head.appendChild(n)))}}function cS(e){ca.D(e),s_("dns-prefetch",e,null)}function uS(e,n){ca.C(e,n),s_("preconnect",e,n)}function fS(e,n,a){ca.L(e,n,a);var r=ur;if(r&&e&&n){var u='link[rel="preload"][as="'+st(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+st(a.imageSizes)+'"]')):u+='[href="'+st(e)+'"]';var f=u;switch(n){case"style":f=fr(e);break;case"script":f=hr(e)}hi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),hi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(bo(f))||n==="script"&&r.querySelector(To(f))||(n=r.createElement("link"),Cn(n,"link",e),T(n),r.head.appendChild(n)))}}function hS(e,n){ca.m(e,n);var a=ur;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+st(r)+'"][href="'+st(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=hr(e)}if(!hi.has(f)&&(e=v({rel:"modulepreload",href:e},n),hi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}r=a.createElement("link"),Cn(r,"link",e),T(r),a.head.appendChild(r)}}}function dS(e,n,a){ca.S(e,n,a);var r=ur;if(r&&e){var u=Ma(r).hoistableStyles,f=fr(e);n=n||"default";var _=u.get(f);if(!_){var b={loading:0,preload:null};if(_=r.querySelector(bo(f)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=hi.get(f))&&Xf(e,a);var B=_=r.createElement("link");T(B),Cn(B,"link",e),B._p=new Promise(function($,me){B.onload=$,B.onerror=me}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Jl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:b},u.set(f,_)}}}function pS(e,n){ca.X(e,n);var a=ur;if(a&&e){var r=Ma(a).hoistableScripts,u=hr(e),f=r.get(u);f||(f=a.querySelector(To(u)),f||(e=v({src:e,async:!0},n),(n=hi.get(u))&&qf(e,n),f=a.createElement("script"),T(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function mS(e,n){ca.M(e,n);var a=ur;if(a&&e){var r=Ma(a).hoistableScripts,u=hr(e),f=r.get(u);f||(f=a.querySelector(To(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=hi.get(u))&&qf(e,n),f=a.createElement("script"),T(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function r_(e,n,a,r){var u=(u=te.current)?Ql(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fr(a.href),a=Ma(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=fr(a.href);var f=Ma(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(bo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),hi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(e,a),f||gS(u,e,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hr(a),a=Ma(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function fr(e){return'href="'+st(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function o_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function gS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Cn(n,"link",a),T(n),e.head.appendChild(n))}function hr(e){return'[src="'+st(e)+'"]'}function To(e){return"script[async]"+e}function l_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+st(a.href)+'"]');if(r)return n.instance=r,T(r),r;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),T(r),Cn(r,"style",u),Jl(r,a.precedence,e),n.instance=r;case"stylesheet":u=fr(a.href);var f=e.querySelector(bo(u));if(f)return n.state.loading|=4,n.instance=f,T(f),f;r=o_(a),(u=hi.get(u))&&Xf(r,u),f=(e.ownerDocument||e).createElement("link"),T(f);var _=f;return _._p=new Promise(function(b,B){_.onload=b,_.onerror=B}),Cn(f,"link",r),n.state.loading|=4,Jl(f,a.precedence,e),n.instance=f;case"script":return f=hr(a.src),(u=e.querySelector(To(f)))?(n.instance=u,T(u),u):(r=a,(u=hi.get(f))&&(r=v({},a),qf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),T(u),Cn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Jl(r,a.precedence,e));return n.instance}function Jl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var b=r[_];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $l=null;function c_(e,n,a){if($l===null){var r=new Map,u=$l=new Map;u.set(a,r)}else u=$l,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ts]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var b=r.get(_);b?b.push(f):r.set(_,[f])}}return r}function u_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function _S(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function f_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=fr(r.href),f=n.querySelector(bo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ec.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,T(f);return}f=n.ownerDocument||n,r=o_(r),(u=hi.get(u))&&Xf(r,u),f=f.createElement("link"),T(f);var _=f;_._p=new Promise(function(b,B){_.onload=b,_.onerror=B}),Cn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ec.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wf=0;function xS(e,n){return e.stylesheets&&e.count===0&&nc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&nc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Wf===0&&(Wf=62500*$x());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Wf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tc=null;function nc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tc=new Map,n.forEach(SS,e),tc=null,ec.call(e))}function SS(e,n){if(!(n.state.loading&4)){var a=tc.get(e);if(a)var r=a.get(null);else{a=new Map,tc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=ec.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ao={$$typeof:P,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function yS(e,n,a,r,u,f,_,b,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function h_(e,n,a,r,u,f,_,b,B,$,me,ve){return e=new yS(e,n,a,_,B,$,me,ve,b),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=bu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Cu(f),e}function d_(e){return e?(e=ks,e):ks}function p_(e,n,a,r,u,f){u=d_(u),r.context===null?r.context=u:r.pendingContext=u,r=wa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Da(e,r,n),a!==null&&(kn(a,e,n),io(a,e,n))}function m_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function jf(e,n){m_(e,n),(e=e.alternate)&&m_(e,n)}function g_(e){if(e.tag===13||e.tag===31){var n=rs(e,67108864);n!==null&&kn(n,e,67108864),jf(e,67108864)}}function __(e){if(e.tag===13||e.tag===31){var n=$n();n=zr(n);var a=rs(e,n);a!==null&&kn(a,e,n),jf(e,n)}}var ic=!0;function MS(e,n,a,r){var u=N.T;N.T=null;var f=G.p;try{G.p=2,Yf(e,n,a,r)}finally{G.p=f,N.T=u}}function ES(e,n,a,r){var u=N.T;N.T=null;var f=G.p;try{G.p=8,Yf(e,n,a,r)}finally{G.p=f,N.T=u}}function Yf(e,n,a,r){if(ic){var u=Zf(r);if(u===null)Of(e,n,r,ac,a),x_(e,r);else if(TS(u,e,n,a,r))r.stopPropagation();else if(x_(e,r),n&4&&-1<bS.indexOf(e)){for(;u!==null;){var f=ya(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Me(f.pendingLanes);if(_!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;_;){var B=1<<31-Fe(_);b.entanglements[1]|=B,_&=~B}zi(f),(Nt&6)===0&&(Hl=g()+500,So(0))}}break;case 31:case 13:b=rs(f,2),b!==null&&kn(b,f,2),Vl(),jf(f,2)}if(f=Zf(r),f===null&&Of(e,n,r,ac,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Of(e,n,r,null,a)}}function Zf(e){return e=Kc(e),Kf(e)}var ac=null;function Kf(e){if(ac=null,e=Sa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ac=e,null}function v_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(O()){case Z:return 2;case fe:return 8;case ne:case Pe:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var Qf=!1,Ga=null,Va=null,ka=null,Ro=new Map,Co=new Map,Xa=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x_(e,n){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ya(n),n!==null&&g_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function TS(e,n,a,r,u){switch(n){case"focusin":return Ga=wo(Ga,e,n,a,r,u),!0;case"dragenter":return Va=wo(Va,e,n,a,r,u),!0;case"mouseover":return ka=wo(ka,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Ro.set(f,wo(Ro.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Co.set(f,wo(Co.get(f)||null,e,n,a,r,u)),!0}return!1}function S_(e){var n=Sa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){__(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){__(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Zf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Zc=r,a.target.dispatchEvent(r),Zc=null}else return n=ya(a),n!==null&&g_(n),e.blockedOn=a,!1;n.shift()}return!0}function y_(e,n,a){sc(e)&&a.delete(n)}function AS(){Qf=!1,Ga!==null&&sc(Ga)&&(Ga=null),Va!==null&&sc(Va)&&(Va=null),ka!==null&&sc(ka)&&(ka=null),Ro.forEach(y_),Co.forEach(y_)}function rc(e,n){e.blockedOn===n&&(e.blockedOn=null,Qf||(Qf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,AS)))}var oc=null;function M_(e){oc!==e&&(oc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===e&&(oc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Kf(r||a)===null)continue;break}var f=ya(a);f!==null&&(e.splice(n,3),n-=3,Yu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function dr(e){function n(B){return rc(B,e)}Ga!==null&&rc(Ga,e),Va!==null&&rc(Va,e),ka!==null&&rc(ka,e),Ro.forEach(n),Co.forEach(n);for(var a=0;a<Xa.length;a++){var r=Xa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)S_(a),a.blockedOn===null&&Xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[xn]||null;if(typeof f=="function")_||M_(a);else if(_){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[xn]||null)b=_.formAction;else if(Kf(u)!==null)continue}else b=_.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),M_(a)}}}function E_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Jf(e){this._internalRoot=e}lc.prototype.render=Jf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=$n();p_(a,r,e,n,null,null)},lc.prototype.unmount=Jf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;p_(e.current,2,null,e,null,null),Vl(),n[xi]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Br();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,e),a===0&&S_(e)}};var b_=t.version;if(b_!=="19.2.3")throw Error(s(527,b_,"19.2.3"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var RS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{Ee=cc.inject(RS),be=cc}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Um,f=Nm,_=Lm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=h_(e,1,!1,null,null,a,r,null,u,f,_,E_),e[xi]=n.current,Lf(e),new Jf(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Um,_=Nm,b=Lm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=h_(e,1,!0,n,a??null,r,u,B,f,_,b,E_),n.context=d_(null),a=n.current,r=$n(),r=zr(r),u=wa(r),u.callback=null,Da(a,u,r),a=r,n.current.lanes=a,Un(n,a),zi(n),e[xi]=n.current,Lf(e),new lc(n)},Uo.version="19.2.3",Uo}var O_;function IS(){if(O_)return th.exports;O_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),th.exports=FS(),th.exports}var zS=IS();function Pd(){return k.jsxs(k.Fragment,{children:[k.jsxs("div",{children:["  ",k.jsx("a",{href:"https://www.linkedin.com/in/samarth-khandelwal-bba65228a",target:"_blank",rel:"noopener noreferrer",children:k.jsx("img",{className:"github",src:"linkedin.svg",alt:""})})]}),k.jsx("div",{children:k.jsx("a",{href:"https://leetcode.com/u/re9l7O1TpJ/",target:"_blank",rel:"noopener noreferrer",children:k.jsx("img",{className:"github",src:"leetcode.svg",alt:""})})}),k.jsx("div",{children:k.jsx("a",{href:"https://github.com/samarth96k",target:"_blank",rel:"noopener noreferrer",children:k.jsx("img",{className:"github",src:"github.svg",alt:""})})}),k.jsx("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=samarthkhandelwal880@gmail.com&body=Hey%20Samarth",target:"_blank",rel:"noopener noreferrer",children:k.jsx("img",{className:"github",src:"mail.svg",alt:"Email Samarth"})}),k.jsx("div",{children:k.jsx("a",{href:"https://www.instagram.com/samarth9_6/",target:"_blank",rel:"noopener noreferrer",children:k.jsx("img",{className:"github",src:"instagram.svg",alt:""})})}),k.jsx("div",{children:k.jsx("a",{href:"https://wa.me/919773959744?text=Hey%20Samarth",target:"_blank",rel:"noopener noreferrer",children:k.jsx("img",{className:"github",src:"whatsapp.svg",alt:"WhatsApp Samarth"})})}),k.jsxs("a",{href:"/Resume (8).pdf",target:"_blank",rel:"noopener noreferrer",className:"resume-button-top-bar",style:{fontFamily:"Aquire-Bold"},children:["Resume",k.jsx("img",{className:"resume-icon",src:"Download.png",alt:"Download Resume"})]})]})}function BS(){return k.jsxs("div",{className:"opening-wrapper",children:[k.jsxs("div",{className:"opening-top",children:[k.jsx("div",{className:"mid-topbar",children:k.jsx("p",{className:"topbar-name cedarville-cursive-regular",children:"Samarth Khandelwal"})}),k.jsx("div",{className:"right-topbar",children:k.jsx(Pd,{})})]}),k.jsxs("div",{className:"opening-right fade-in",children:[k.jsxs("h1",{className:"typing-text",children:[k.jsx("span",{className:"line line1 Agaleoz",style:{fontFamily:"Aquire"},children:"Hi,"}),k.jsx("br",{}),k.jsx("span",{className:"line line2 Satoshi-Medium",style:{fontFamily:"Aquire-Bold"},children:"I'm Samarth Khandelwal."})]}),k.jsx("h2",{className:"typing-subtext ",style:{fontFamily:"Aquire"},children:"Full Stack Developer | Software Engineer"}),k.jsx("button",{style:{fontFamily:"Aquire-Light"},className:"view-work-button",onClick:()=>{const o=document.querySelector(".skills");o&&o.scrollIntoView({behavior:"smooth"})},children:"Skills"}),k.jsx("button",{style:{fontFamily:"Aquire-Light"},className:"view-work-button",onClick:()=>{const o=document.querySelector(".featuredProjectContainer");o&&o.scrollIntoView({behavior:"smooth"})},children:"Projects"}),k.jsx("button",{style:{fontFamily:"Aquire-Light"},className:"view-work-button",onClick:()=>{const o=document.querySelector(".Education");o&&o.scrollIntoView({behavior:"smooth"})},children:"Education"}),k.jsx("button",{style:{fontFamily:"Aquire-Light"},className:"view-work-button",onClick:()=>{const o=document.querySelector(".projects-container");o&&o.scrollIntoView({behavior:"smooth"})},children:"VIEW PROJECTS"})]}),k.jsx("div",{className:"opening-bottom fade-in-delay",onClick:()=>window.scrollTo({top:window.innerHeight,behavior:"smooth"}),children:"⌄"})]})}const HS="About Me",GS="I'm Samarth, a third-year Computer Science undergrad at VIT Bhopal, building toward backend and AI engineering. My work sits at the intersection of the two — production-grade systems (transaction integrity, caching, load handling) paired with LLM tooling. I was selected for Amazon ML Summer School 2025, and I learn best by shipping: ForeverSoles (a full-stack retail platform hardened with atomic transactions and Redis caching), CodeSentinel (an AI-powered PR reviewer built on a RAG layer), and a double-entry ledger engine exploring fintech-grade correctness. Outside of code, I read across genres and follow space and astrophysics — mostly because both are good training for sitting with problems that don't resolve quickly.";function VS(){const o=pn.useRef(null);return pn.useEffect(()=>{const t=o.current;if(!t)return;const i=new IntersectionObserver(([s])=>{s.isIntersecting&&(t.classList.add("about-visible"),i.unobserve(t))},{threshold:.2});return i.observe(t),()=>i.disconnect()},[]),k.jsxs("div",{ref:o,className:"about-div about-animate",children:[k.jsx("div",{className:"about-left about-slide-left",children:k.jsx("div",{className:"about-pic",children:k.jsx("img",{src:"IMG_1775.jpeg",alt:"",className:"about-pic-tag"})})}),k.jsxs("div",{className:"about-right about-slide-right",children:[k.jsx("div",{className:"about-title",style:{fontFamily:"Aquire"},children:k.jsx("h1",{children:HS})}),k.jsx("div",{className:"about-desc inknut-antiqua-regular",children:GS})]})]})}const kS=[{skill:"TypeScript",link:"tech_stack_section/images.png",level:"Proficient"},{skill:"JavaScript",link:"tech_stack_section/icons8-javascript.svg",level:"Strong"},{skill:"Node.js",link:"tech_stack_section/node-js.svg",level:"Strong"},{skill:"Express.js",link:"tech_stack_section/icons8-express-js-48.png",level:"Strong"},{skill:"Redis",link:"tech_stack_section/redis-logo-svgrepo-com.svg",level:"Proficient"},{skill:"Docker",link:"tech_stack_section/Docker.svg",level:"Proficient"},{skill:"GitHub Actions",link:"tech_stack_section/GitHub Actions.svg",level:"Proficient"},{skill:"Prisma",link:"tech_stack_section/prisma-svgrepo-com.svg",level:"Proficient"},{skill:"React",link:"tech_stack_section/react.svg",level:"Strong"},{skill:"PostgreSQL",link:"tech_stack_section/postgresql.svg",level:"Strong"},{skill:"MySQL",link:"tech_stack_section/mysql-logo-svgrepo-com.svg",level:"Strong"},{skill:"Git",link:"tech_stack_section/git-icon-logo-svgrepo-com.svg",level:"Proficient"},{skill:"GitHub",link:"tech_stack_section/github.svg",level:"Proficient"},{skill:"Bootstrap",link:"tech_stack_section/bootstrap.png",level:"Proficient"},{skill:"Java",link:"tech_stack_section/java.svg",level:"Proficient"},{skill:"Python",link:"tech_stack_section/python.png",level:"Proficient"},{skill:"C++",link:"tech_stack_section/c.svg",level:"Strong"},{skill:"MongoDB",link:"tech_stack_section/download (2).png",level:"Proficient"},{skill:"HTML",link:"tech_stack_section/html.svg",level:"Strong"},{skill:"VS Code",link:"tech_stack_section/vs-code-svgrepo-com.svg",level:"Strong"},{skill:"AWS",link:"tech_stack_section/aws.svg",level:"Familiar"},{skill:"Postman",link:"tech_stack_section/postman.svg",level:"Familiar"},{skill:"Replit",link:"tech_stack_section/replit.svg",level:"Familiar"},{skill:"Vercel",link:"tech_stack_section/vercel-icon-svgrepo-com.svg",level:"Familiar"}];function XS(){const o=pn.useRef([]);return pn.useEffect(()=>{const t=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&s.target.classList.add("skill-show")})},{threshold:.25});return o.current.forEach(i=>{i&&t.observe(i)}),()=>t.disconnect()},[]),k.jsxs("section",{className:"skills",children:[k.jsx("h1",{className:"skills-title",style:{fontFamily:"Aquire"},children:"My Skills"}),k.jsx("p",{className:"skills-subtitle inknut-antiqua-semibold",children:"Skill levels are based on real project usage, not tutorials."}),k.jsx("div",{className:"skills-grid",children:kS.map((t,i)=>k.jsxs("div",{ref:s=>o.current[i]=s,className:"skill-card skill-hidden slide-top",children:[k.jsx("img",{src:t.link,alt:t.skill}),k.jsx("h3",{className:"inknut-antiqua-bold",children:t.skill}),k.jsx("span",{className:`skill-level ${t.level.toLowerCase()}`,children:t.level})]},i))})]})}function sh({inst_name:o,board:t,degree_name:i,cgpa:s,percantage:l,start:c,end:h,inst_img:d,img_setting:m,img_type:p}){return k.jsxs("div",{className:"ed-card",children:[k.jsx("div",{className:"ed-right-side",children:k.jsx("img",{className:"inst-img"+p,src:d,alt:o,style:m?{width:"20rem"}:{}})}),k.jsxs("div",{className:"ed-left-side libertinus-serif-regular",children:[k.jsx("h2",{className:"ed-inst libertinus-serif-bold",children:o}),k.jsx("p",{className:"board",children:t}),k.jsx("p",{className:"degreeName",children:i})]}),k.jsxs("div",{className:"ed-mid-side libertinus-serif-bold",children:[k.jsxs("span",{className:"ed-duration",children:[c,h&&k.jsxs(k.Fragment,{children:["–",h]})]}),k.jsxs("div",{className:"ed-score",children:[s&&k.jsxs("span",{children:["CGPA: ",k.jsx("strong",{children:s})]}),l&&k.jsx("span",{children:k.jsxs("strong",{children:[l,"%"]})})]})]})]})}function qS(){return k.jsxs("div",{className:"Education",children:[k.jsx(sh,{inst_name:"VIT Bhopal University",degree_name:"Computer Science and Engineering",board:"Bachelor in Technology",cgpa:"9.42",start:"2023",end:"2027",inst_img:"VitBhopalImage2.png",img_setting:"small",img_type:"large"}),k.jsx(sh,{inst_name:"Adarsh World School",board:"Central Board Of Secondary Education",degree_name:"Senior Secondary Examination (Class XII)",percantage:"93.5",start:"2023",inst_img:"CBSE_new_logo.svg.png",img_type:"small"}),k.jsx(sh,{inst_name:"Adarsh World School",board:"Central Board Of Secondary Education",degree_name:"Secondary Examination (Class X)",percantage:"97.4",start:"2021",inst_img:"CBSE_new_logo.svg.png",img_type:"small"})]})}function WS({tech:o}){return k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:o})}function jS({title:o,image:t,github:i,live:s,tech:l=[],desc:c,date:h,status:d,learned:m,role:p}){const[x,v]=pn.useState(!1);return k.jsx("div",{className:`card ${x?"flipped":""}`,onClick:()=>v(!x),children:k.jsxs("div",{className:"card-inner",children:[k.jsx("div",{className:"card-front",style:{backgroundImage:`url(${t})`},children:k.jsxs("div",{className:"overlay glass-overlay",children:[k.jsxs("div",{children:[k.jsx("h3",{className:"limelight-regular projectTitle",style:{fontFamily:"Aquire"},children:o}),k.jsx("p",{className:"status-badge",children:d})]}),k.jsx("div",{className:"tech",children:l.map((y,E)=>k.jsx(WS,{tech:y},E))}),k.jsxs("div",{className:"actions",children:[i&&k.jsx("a",{href:i,target:"_blank",onClick:y=>y.stopPropagation(),className:"google-sans-code",children:"GitHub"}),s&&k.jsx("a",{href:s,target:"_blank",onClick:y=>y.stopPropagation(),children:"Live"})]})]})}),k.jsxs("div",{className:"card-back glass-back",children:[k.jsx("h3",{className:"limelight-regular",children:o}),k.jsx("p",{children:c}),k.jsxs("p",{children:[k.jsx("strong",{children:"Role:"})," ",p]}),k.jsxs("p",{children:[k.jsx("strong",{children:"Learned:"})," ",m]}),k.jsxs("p",{children:[k.jsx("strong",{children:"Date:"})," ",h]})]})]})})}const P_=[{title:"Indian States Game",categories:["Frontend"],status:null,learned:"Built interactive UI with Python, Tkinter, and JS logic to manage score and highlight missing states.",role:"Solo Project",image:"",github:"https://github.com/samarth96k/Indian-States-Game",live:"https://samarth96k.github.io/Indian-States-Game/",tech:["Python","HTML","CSS","JavaScript","Tkinter"],desc:"An interactive learning game that helps students learn Indian states, with score tracking and a final summary highlighting unguessed states in red.",date:"2023"},{title:"Driver Drowsiness Detection System",categories:["Machine Learning","Computer Vision"],status:null,learned:"Implemented real-time detection using OpenCV, YOLO, Vision Transformer, and integrated Google Health API for heartbeat analysis.",role:"Team Project",image:"/images/driver-drowsiness.png",github:"https://github.com/samarth96k/Driver_Drowsiness_Detection",live:null,tech:["Python","Machine Learning","OpenCV","YOLO","Vision Transformer"],desc:"A real-time driver drowsiness detection system using computer vision, ML models, and Google Health API data to analyze eye closure, yawning, and heart-rate patterns. Achieves ~92% accuracy and triggers alarms and emergency alerts during prolonged drowsiness.",date:"2023"},{title:"Portfolio Website",categories:["Frontend","React"],status:null,learned:"Built a responsive portfolio using React, improving component-based design and CSS styling skills.",role:"Solo Project",image:"/images/portfolio.png",github:"https://github.com/samarth96k/portfolio",live:"https://samarth96k.github.io/portfolio",tech:["React","JavaScript","CSS"],desc:"A modern, responsive personal portfolio showcasing my projects, skills, and experience, built with React for smooth UI interactions.",date:"2024"},{title:"Drum App",categories:["Frontend"],status:null,learned:"Practiced JS event listeners and DOM manipulation to create interactive audio-based UI.",role:"Solo Project",image:"/images/drum-app.png",github:"https://github.com/samarth96k/Drum-Game",live:"https://samarth96k.github.io/Drum-Game/",tech:["HTML","CSS","JavaScript"],desc:"A simple yet impactful frontend project that simulates a virtual drum kit using clicks and keyboard events. Built to practice JS fundamentals like event listeners and DOM interactions, and boosted my confidence in frontend development.",date:"2023"},{title:"CGPA Calculator App",categories:["Frontend","JavaScript"],status:null,learned:"Handled edge cases like missing grades/credits while computing results, improving logic and DOM manipulation skills.",role:"Solo Project",image:"/images/cgpa-calculator.png",github:"https://github.com/samarth96k/cgpa-calc-test",live:"https://samarth96k.github.io/cgpa-calc-test/",tech:["HTML","CSS","JavaScript"],desc:"A browser-based CGPA calculator that handles edge cases like missing grades or credits while computing results accurately. Built with clean JS logic to ensure seamless validation and error handling.",date:"2025"},{title:"Blog Project",categories:["Full Stack","Backend"],status:null,learned:"Implemented dynamic views with Node.js, Express, and EJS. Learned modal-based UI and prepared for multi-user authentication.",role:"Solo Project",image:"/images/blog-project.png",github:"https://github.com/samarth96k/Blog-Project",live:null,tech:["HTML","CSS","JavaScript","Node.js","Express","EJS"],desc:"A full-stack blogging platform built with Node.js, Express, and EJS, featuring dynamic views and a modal-based interface for creating new posts. Designed to refine backend fundamentals and frontend skills, with upcoming support for multi-user authentication.",date:"2025"},{title:"LedgerCore",categories:["Backend","FinTech","System Design"],status:null,learned:"Designed a production-oriented double-entry ledger with ACID transactions, row-level locking, idempotency, immutable ledger entries, and asynchronous transaction processing.",role:"Solo Project",image:"/images/ledgercore.png",github:"https://github.com/samarth96k/LedgerCore",live:null,tech:["Node.js","TypeScript","PostgreSQL","Prisma","Redis","BullMQ"],desc:"A fintech-grade double-entry ledger and wallet system designed for atomic, duplicate-safe money transfers. Uses immutable ledger entries instead of mutable balances, PostgreSQL transactions and row-level locking for concurrency safety, idempotency keys for retry-safe operations, and Redis with BullMQ for asynchronous processing and reconciliation.",date:"2026"},{title:"CodeSentinal",categories:["AI","Developer Tools","GitHub Automation"],status:null,learned:"Built an AI-powered GitHub workflow that combines LLM reasoning with repository context to automate pull-request reviews and maintain an evolving project wiki.",role:"Solo Project",image:"/images/codesentinal.png",github:"https://github.com/samarth96k/CodeSentinal/tree/package-github-action-phase2",live:null,tech:["TypeScript","Node.js","GitHub Actions","Octokit","Gemini API"],desc:"An AI-powered GitHub PR reviewer that analyzes code changes using Gemini and repository-specific context. Integrates with GitHub Actions and Octokit to automatically review pull requests, generate architecture-aware feedback, and maintain a repository wiki covering coding conventions, architecture, and database structure.",date:"2026"},{title:"Forever Soles",categories:["Full Stack","E-Commerce","Backend"],status:null,learned:"Built a complete MERN e-commerce platform while working with authentication, payment gateways, cloud image storage, Redis caching, Docker, and AI-powered features.",role:"Solo Project",image:"/images/forever-soles.png",github:"https://github.com/samarth96k/ECommerceApp",live:"https://foreversolesfrontend.vercel.app/",tech:["React","Node.js","Express","MongoDB","Redis","Cloudinary","JWT","Stripe","Razorpay"],desc:"A full-stack e-commerce platform built with the MERN stack featuring secure JWT authentication, product and order management, Cloudinary image storage, Redis caching, and integrated Stripe and Razorpay payments. Designed with a scalable backend architecture and enhanced with AI-powered capabilities.",date:"2026"}];function YS(){const[o,t]=pn.useState("All"),i=pn.useRef([]),s=["All","Backend","Full Stack","AI","Developer Tools","FinTech","Frontend","Machine Learning"],l=o==="All"?P_:P_.filter(c=>c.categories.includes(o));return pn.useEffect(()=>{const c=new IntersectionObserver(h=>{h.forEach(d=>{d.isIntersecting&&(d.target.classList.add("visible"),c.unobserve(d.target))})},{threshold:.2});return i.current.forEach(h=>h&&c.observe(h)),()=>c.disconnect()},[l]),k.jsxs("div",{className:"projects-container glass-section",children:[k.jsx("div",{className:"projectContainerTitle",style:{fontFamily:"Aquire-bold",fontSize:"50px"},children:"Projects Archive"}),k.jsx("div",{className:"filters glass-filters inknut-antiqua-light",style:{fontSize:"12px"},children:s.map(c=>k.jsx("button",{className:o===c?"active":"",onClick:()=>t(c),children:c},c))}),k.jsx("p",{className:"libertinus-serif-regular-italic hint-text",children:"(Tap on the cards for more information)"}),k.jsx("div",{className:"project-grid",children:l.map((c,h)=>k.jsx("div",{ref:d=>i.current[h]=d,className:"fade-card",children:k.jsx(jS,{title:c.title,image:c.image,github:c.github,live:c.live,tech:c.tech,desc:c.desc,date:c.date,categories:c.categories,status:c.status,learned:c.learned,role:c.role})},h))})]})}class jo{constructor(t=0,i="Network Error"){this.status=t,this.text=i}}const ZS=()=>{if(!(typeof localStorage>"u"))return{get:o=>Promise.resolve(localStorage.getItem(o)),set:(o,t)=>Promise.resolve(localStorage.setItem(o,t)),remove:o=>Promise.resolve(localStorage.removeItem(o))}},wn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:ZS()},Fd=o=>o?typeof o=="string"?{publicKey:o}:o.toString()==="[object Object]"?o:{}:{},KS=(o,t="https://api.emailjs.com")=>{if(!o)return;const i=Fd(o);wn.publicKey=i.publicKey,wn.blockHeadless=i.blockHeadless,wn.storageProvider=i.storageProvider,wn.blockList=i.blockList,wn.limitRate=i.limitRate,wn.origin=i.origin||t},P0=async(o,t,i={})=>{const s=await fetch(wn.origin+o,{method:"POST",headers:i,body:t}),l=await s.text(),c=new jo(s.status,l);if(s.ok)return c;throw c},F0=(o,t,i)=>{if(!o||typeof o!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i||typeof i!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},QS=o=>{if(o&&o.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},I0=o=>o.webdriver||!o.languages||o.languages.length===0,z0=()=>new jo(451,"Unavailable For Headless Browser"),JS=(o,t)=>{if(!Array.isArray(o))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},$S=o=>!o.list?.length||!o.watchVariable,ey=(o,t)=>o instanceof FormData?o.get(t):o[t],B0=(o,t)=>{if($S(o))return!1;JS(o.list,o.watchVariable);const i=ey(t,o.watchVariable);return typeof i!="string"?!1:o.list.includes(i)},H0=()=>new jo(403,"Forbidden"),ty=(o,t)=>{if(typeof o!="number"||o<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},ny=async(o,t,i)=>{const s=Number(await i.get(o)||0);return t-Date.now()+s},G0=async(o,t,i)=>{if(!t.throttle||!i)return!1;ty(t.throttle,t.id);const s=t.id||o;return await ny(s,t.throttle,i)>0?!0:(await i.set(s,Date.now().toString()),!1)},V0=()=>new jo(429,"Too Many Requests"),iy=async(o,t,i,s)=>{const l=Fd(s),c=l.publicKey||wn.publicKey,h=l.blockHeadless||wn.blockHeadless,d=l.storageProvider||wn.storageProvider,m={...wn.blockList,...l.blockList},p={...wn.limitRate,...l.limitRate};return h&&I0(navigator)?Promise.reject(z0()):(F0(c,o,t),QS(i),i&&B0(m,i)?Promise.reject(H0()):await G0(location.pathname,p,d)?Promise.reject(V0()):P0("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:c,service_id:o,template_id:t,template_params:i}),{"Content-type":"application/json"}))},ay=o=>{if(!o||o.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},sy=o=>typeof o=="string"?document.querySelector(o):o,ry=async(o,t,i,s)=>{const l=Fd(s),c=l.publicKey||wn.publicKey,h=l.blockHeadless||wn.blockHeadless,d=wn.storageProvider||l.storageProvider,m={...wn.blockList,...l.blockList},p={...wn.limitRate,...l.limitRate};if(h&&I0(navigator))return Promise.reject(z0());const x=sy(i);F0(c,o,t),ay(x);const v=new FormData(x);return B0(m,v)?Promise.reject(H0()):await G0(location.pathname,p,d)?Promise.reject(V0()):(v.append("lib_version","4.4.1"),v.append("service_id",o),v.append("template_id",t),v.append("user_id",c),P0("/api/v1.0/email/send-form",v))},oy={init:KS,send:iy,sendForm:ry,EmailJSResponseStatus:jo};function ly(){const[o,t]=pn.useState({fullName:"",email:"",enquiryType:"General_Enquiry",phone:"",message:""}),i=c=>{t({...o,[c.target.name]:c.target.value})},s=()=>{oy.send("service_uxottht","template_x4fbtgh",o,"E3TN8dbhMocOktNw5").then(m=>{alert("Message sent successfully! ✅"),t({fullName:"",email:"",enquiryType:"General_Enquiry",phone:"",message:""})}).catch(m=>{alert("Failed to send message. ❌ Try again later."),console.error(m)})},l=()=>{const c=encodeURIComponent(`Name: ${o.fullName}
Email: ${o.email}
Phone: ${o.phone}
Enquiry Type: ${o.enquiryType}

Message:
${o.message}`);window.open(`https://wa.me/919773959744?text=${c}`,"_blank")};return k.jsx("div",{className:"contact-form",children:k.jsxs("form",{onSubmit:c=>c.preventDefault(),children:[k.jsx("input",{type:"text",name:"fullName",placeholder:"Full Name",value:o.fullName,onChange:i,required:!0}),k.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:o.email,onChange:i,required:!0}),k.jsxs("select",{name:"enquiryType",value:o.enquiryType,onChange:i,children:[k.jsx("option",{value:"General_Enquiry",children:"General Enquiry"}),k.jsx("option",{value:"Collaboration_Request",children:"Collaboration Request"}),k.jsx("option",{value:"Feedback",children:"Feedback"}),k.jsx("option",{value:"Bug_Report",children:"Bug Report"})]}),k.jsx("input",{type:"text",name:"phone",placeholder:"Phone Number",value:o.phone,onChange:i}),k.jsx("textarea",{name:"message",placeholder:"Your Message",rows:"4",value:o.message,onChange:i,required:!0}),k.jsxs("div",{className:"contact-buttons",children:[k.jsx("button",{type:"button",onClick:s,children:"Send via Email"}),k.jsx("button",{type:"button",onClick:l,children:"Send via WhatsApp"})]})]})})}function cy(){return k.jsxs("div",{children:[k.jsx("div",{className:"contact-top",style:{fontFamily:"Aquire"},children:"Let's Connect"}),k.jsxs("div",{className:"contact-div",children:[k.jsx("div",{className:"contact-left",children:k.jsx(ly,{})}),k.jsxs("div",{className:"contact-right",children:[k.jsx("h2",{className:"contact-heading",style:{fontFamily:"Aquire-Light"},children:"Get in touch"}),k.jsxs("div",{className:"contact-item-wrapper",children:[k.jsx("span",{className:"contact-label inknut-antiqua-medium",children:"Email"}),k.jsx("a",{className:"contact-item",children:"Samarthkhandelwal880@gmail.com"})]}),k.jsxs("div",{className:"contact-item-wrapper",children:[k.jsx("span",{className:"contact-label inknut-antiqua-medium inknut-antiqua-medium",children:"Phone"}),k.jsx("a",{href:"tel:+919773959744",className:"contact-item",children:"+91 97739 59744"})]}),k.jsxs("div",{className:"contact-item-wrapper",children:[k.jsx("span",{className:"contact-label inknut-antiqua-medium",children:"Location"}),k.jsx("div",{className:"contact-item inknut-antiqua-medium",children:"Delhi, India"})]}),k.jsx("div",{className:"formaticons",children:k.jsx(Pd,{})})]})]})]})}function uy(){return k.jsxs("div",{className:"footer",children:[k.jsx("div",{className:"footer-line"}),k.jsxs("div",{className:"footer-top",children:[k.jsx("div",{className:"mid-topbar",children:k.jsx("p",{className:"topbar-name cedarville-cursive-regular",children:"Samarth Khandelwal"})}),k.jsx("div",{className:"footer-icons",children:k.jsx(Pd,{})})]}),k.jsx("div",{className:"footer-bottom inknut-antiqua-medium",children:"Made With ❤️ by Samarth!"})]})}const rh=({children:o,index:t})=>k.jsx("div",{className:"ssx-scroll-stack__card",style:{top:`${120+t*40}px`},children:o}),fy=({children:o})=>k.jsxs("section",{className:"ssx-scroll-stack",children:[o.map((t,i)=>t&&{...t,props:{...t.props,index:i}}),k.jsx("div",{className:"ssx-scroll-stack__end"})]});const Id="182",hy=0,F_=1,dy=2,Lc=1,py=2,Ho=3,es=0,qn=1,ma=2,ga=0,Cr=1,Bh=2,I_=3,z_=4,my=5,As=100,gy=101,_y=102,vy=103,xy=104,Sy=200,yy=201,My=202,Ey=203,Hh=204,Gh=205,by=206,Ty=207,Ay=208,Ry=209,Cy=210,wy=211,Dy=212,Uy=213,Ny=214,Vh=0,kh=1,Xh=2,Dr=3,qh=4,Wh=5,jh=6,Yh=7,k0=0,Ly=1,Oy=2,Vi=0,X0=1,q0=2,W0=3,j0=4,Y0=5,Z0=6,K0=7,Q0=300,Us=301,Ur=302,Zh=303,Kh=304,qc=306,Qh=1e3,ni=1001,Jh=1002,Dn=1003,Py=1004,uc=1005,fn=1006,oh=1007,Cs=1008,mi=1009,J0=1010,$0=1011,ko=1012,zd=1013,ki=1014,wi=1015,Xi=1016,Bd=1017,Hd=1018,Xo=1020,ev=35902,tv=35899,nv=1021,iv=1022,gi=1023,va=1026,ws=1027,av=1028,Gd=1029,Nr=1030,Vd=1031,kd=1033,Oc=33776,Pc=33777,Fc=33778,Ic=33779,$h=35840,ed=35841,td=35842,nd=35843,id=36196,ad=37492,sd=37496,rd=37488,od=37489,ld=37490,cd=37491,ud=37808,fd=37809,hd=37810,dd=37811,pd=37812,md=37813,gd=37814,_d=37815,vd=37816,xd=37817,Sd=37818,yd=37819,Md=37820,Ed=37821,bd=36492,Td=36494,Ad=36495,Rd=36283,Cd=36284,wd=36285,Dd=36286,Fy=3200,Iy=0,zy=1,Ja="",pi="srgb",Lr="srgb-linear",Bc="linear",Bt="srgb",pr=7680,B_=519,By=512,Hy=513,Gy=514,Xd=515,Vy=516,ky=517,qd=518,Xy=519,H_=35044,G_="300 es",Gi=2e3,Hc=2001;function sv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Gc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function qy(){const o=Gc("canvas");return o.style.display="block",o}const V_={};function k_(...o){const t="THREE."+o.shift();console.log(t,...o)}function it(...o){const t="THREE."+o.shift();console.warn(t,...o)}function wt(...o){const t="THREE."+o.shift();console.error(t,...o)}function qo(...o){const t=o.join(" ");t in V_||(V_[t]=!0,it(...o))}function Wy(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Pr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lh=Math.PI/180,Ud=180/Math.PI;function Yo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Mt(o,t,i){return Math.max(t,Math.min(i,o))}function jy(o,t){return(o%t+t)%t}function ch(o,t,i){return(1-i)*o+i*t}function No(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ot{constructor(t=0,i=0){ot.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Mt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],x=s[l+2],v=s[l+3],y=c[h+0],E=c[h+1],A=c[h+2],C=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=v;return}if(d>=1){t[i+0]=y,t[i+1]=E,t[i+2]=A,t[i+3]=C;return}if(v!==C||m!==y||p!==E||x!==A){let M=m*y+p*E+x*A+v*C;M<0&&(y=-y,E=-E,A=-A,C=-C,M=-M);let S=1-d;if(M<.9995){const F=Math.acos(M),P=Math.sin(F);S=Math.sin(S*F)/P,d=Math.sin(d*F)/P,m=m*S+y*d,p=p*S+E*d,x=x*S+A*d,v=v*S+C*d}else{m=m*S+y*d,p=p*S+E*d,x=x*S+A*d,v=v*S+C*d;const F=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=F,p*=F,x*=F,v*=F}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],x=s[l+3],v=c[h],y=c[h+1],E=c[h+2],A=c[h+3];return t[i]=d*A+x*v+m*E-p*y,t[i+1]=m*A+x*y+p*v-d*E,t[i+2]=p*A+x*E+d*y-m*v,t[i+3]=x*A-d*v-m*y-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),x=d(l/2),v=d(c/2),y=m(s/2),E=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=y*x*v+p*E*A,this._y=p*E*v-y*x*A,this._z=p*x*A+y*E*v,this._w=p*x*v-y*E*A;break;case"YXZ":this._x=y*x*v+p*E*A,this._y=p*E*v-y*x*A,this._z=p*x*A-y*E*v,this._w=p*x*v+y*E*A;break;case"ZXY":this._x=y*x*v-p*E*A,this._y=p*E*v+y*x*A,this._z=p*x*A+y*E*v,this._w=p*x*v-y*E*A;break;case"ZYX":this._x=y*x*v-p*E*A,this._y=p*E*v+y*x*A,this._z=p*x*A-y*E*v,this._w=p*x*v+y*E*A;break;case"YZX":this._x=y*x*v+p*E*A,this._y=p*E*v+y*x*A,this._z=p*x*A-y*E*v,this._w=p*x*v-y*E*A;break;case"XZY":this._x=y*x*v-p*E*A,this._y=p*E*v-y*x*A,this._z=p*x*A+y*E*v,this._w=p*x*v+y*E*A;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],v=i[10],y=s+d+v;if(y>0){const E=.5/Math.sqrt(y+1);this._w=.25/E,this._x=(x-m)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(s>d&&s>v){const E=2*Math.sqrt(1+s-d-v);this._w=(x-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(d>v){const E=2*Math.sqrt(1+d-s-v);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+v-s-d);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+h*d+l*p-c*m,this._y=l*x+h*m+c*d-s*p,this._z=c*x+h*p+s*m-l*d,this._w=h*x-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,s=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(X_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(X_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),x=2*(d*i-c*l),v=2*(c*s-h*i);return this.x=i+m*p+h*v-d*x,this.y=s+m*x+d*p-c*v,this.z=l+m*v+c*x-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return uh.copy(this).projectOnVector(t),this.sub(uh)}reflect(t){return this.sub(uh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Mt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uh=new re,X_=new Zo;class ft{constructor(t,i,s,l,c,h,d,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],x=s[4],v=s[7],y=s[2],E=s[5],A=s[8],C=l[0],M=l[3],S=l[6],F=l[1],P=l[4],L=l[7],z=l[2],H=l[5],I=l[8];return c[0]=h*C+d*F+m*z,c[3]=h*M+d*P+m*H,c[6]=h*S+d*L+m*I,c[1]=p*C+x*F+v*z,c[4]=p*M+x*P+v*H,c[7]=p*S+x*L+v*I,c[2]=y*C+E*F+A*z,c[5]=y*M+E*P+A*H,c[8]=y*S+E*L+A*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8];return i*h*x-i*d*p-s*c*x+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],v=x*h-d*p,y=d*m-x*c,E=p*c-h*m,A=i*v+s*y+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=v*C,t[1]=(l*p-x*s)*C,t[2]=(d*s-l*h)*C,t[3]=y*C,t[4]=(x*i-l*m)*C,t[5]=(l*c-d*i)*C,t[6]=E*C,t[7]=(s*m-p*i)*C,t[8]=(h*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(fh.makeScale(t,i)),this}rotate(t){return this.premultiply(fh.makeRotation(-t)),this}translate(t,i){return this.premultiply(fh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fh=new ft,q_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yy(){const o={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Bt&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Bt&&(l.r=wr(l.r),l.g=wr(l.g),l.b=wr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?Bc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Lr]:{primaries:t,whitePoint:s,transfer:Bc,toXYZ:q_,fromXYZ:W_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:s,transfer:Bt,toXYZ:q_,fromXYZ:W_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const At=Yy();function _a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function wr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let mr;class Zy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{mr===void 0&&(mr=Gc("canvas")),mr.width=t.width,mr.height=t.height;const l=mr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=mr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Gc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=_a(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(_a(i[s]/255)*255):i[s]=_a(i[s]);return{data:i,width:t.width,height:t.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ky=0;class Wd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=Yo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(hh(l[h].image)):c.push(hh(l[h]))}else c=hh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function hh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Zy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let Qy=0;const dh=new re;class In extends Pr{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=ni,l=ni,c=fn,h=Cs,d=gi,m=mi,p=In.DEFAULT_ANISOTROPY,x=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Yo(),this.name="",this.source=new Wd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dh).x}get height(){return this.source.getSize(dh).y}get depth(){return this.source.getSize(dh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){it(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Q0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qh:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case Jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qh:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case Jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Q0;In.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],x=m[4],v=m[8],y=m[1],E=m[5],A=m[9],C=m[2],M=m[6],S=m[10];if(Math.abs(x-y)<.01&&Math.abs(v-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(x+y)<.1&&Math.abs(v+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,L=(E+1)/2,z=(S+1)/2,H=(x+y)/4,I=(v+C)/4,Q=(A+M)/4;return P>L&&P>z?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=H/s,c=I/s):L>z?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=H/l,c=Q/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=I/c,l=Q/c),this.set(s,l,c,i),this}let F=Math.sqrt((M-A)*(M-A)+(v-C)*(v-C)+(y-x)*(y-x));return Math.abs(F)<.001&&(F=1),this.x=(M-A)/F,this.y=(v-C)/F,this.z=(y-x)/F,this.w=Math.acos((p+E+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this.w=Mt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this.w=Mt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jy extends Pr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,t,i),this.scissorTest=!1,this.viewport=new en(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new In(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Wd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Jy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class rv extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $y extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,bi):bi.fromBufferAttribute(c,h),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),fc.copy(s.boundingBox)),fc.applyMatrix4(t.matrixWorld),this.union(fc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),hc.subVectors(this.max,Lo),gr.subVectors(t.a,Lo),_r.subVectors(t.b,Lo),vr.subVectors(t.c,Lo),Wa.subVectors(_r,gr),ja.subVectors(vr,_r),xs.subVectors(gr,vr);let i=[0,-Wa.z,Wa.y,0,-ja.z,ja.y,0,-xs.z,xs.y,Wa.z,0,-Wa.x,ja.z,0,-ja.x,xs.z,0,-xs.x,-Wa.y,Wa.x,0,-ja.y,ja.x,0,-xs.y,xs.x,0];return!ph(i,gr,_r,vr,hc)||(i=[1,0,0,0,1,0,0,0,1],!ph(i,gr,_r,vr,hc))?!1:(dc.crossVectors(Wa,ja),i=[dc.x,dc.y,dc.z],ph(i,gr,_r,vr,hc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ua=[new re,new re,new re,new re,new re,new re,new re,new re],bi=new re,fc=new Ko,gr=new re,_r=new re,vr=new re,Wa=new re,ja=new re,xs=new re,Lo=new re,hc=new re,dc=new re,Ss=new re;function ph(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Ss.fromArray(o,c);const d=l.x*Math.abs(Ss.x)+l.y*Math.abs(Ss.y)+l.z*Math.abs(Ss.z),m=t.dot(Ss),p=i.dot(Ss),x=s.dot(Ss);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const eM=new Ko,Oo=new re,mh=new re;class Wc{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):eM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Oo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(mh)),this.expandByPoint(Oo.copy(t.center).sub(mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const fa=new re,gh=new re,pc=new re,Ya=new re,_h=new re,mc=new re,vh=new re;class ov{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=fa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){gh.copy(t).add(i).multiplyScalar(.5),pc.copy(i).sub(t).normalize(),Ya.copy(this.origin).sub(gh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(pc),d=Ya.dot(this.direction),m=-Ya.dot(pc),p=Ya.lengthSq(),x=Math.abs(1-h*h);let v,y,E,A;if(x>0)if(v=h*m-d,y=h*d-m,A=c*x,v>=0)if(y>=-A)if(y<=A){const C=1/x;v*=C,y*=C,E=v*(v+h*y+2*d)+y*(h*v+y+2*m)+p}else y=c,v=Math.max(0,-(h*y+d)),E=-v*v+y*(y+2*m)+p;else y=-c,v=Math.max(0,-(h*y+d)),E=-v*v+y*(y+2*m)+p;else y<=-A?(v=Math.max(0,-(-h*c+d)),y=v>0?-c:Math.min(Math.max(-c,-m),c),E=-v*v+y*(y+2*m)+p):y<=A?(v=0,y=Math.min(Math.max(-c,-m),c),E=y*(y+2*m)+p):(v=Math.max(0,-(h*c+d)),y=v>0?c:Math.min(Math.max(-c,-m),c),E=-v*v+y*(y+2*m)+p);else y=h>0?-c:c,v=Math.max(0,-(h*y+d)),E=-v*v+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(gh).addScaledVector(pc,y),E}intersectSphere(t,i){fa.subVectors(t.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),x>=0?(c=(t.min.y-y.y)*x,h=(t.max.y-y.y)*x):(c=(t.max.y-y.y)*x,h=(t.min.y-y.y)*x),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-y.z)*v,m=(t.max.z-y.z)*v):(d=(t.max.z-y.z)*v,m=(t.min.z-y.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,i,s,l,c){_h.subVectors(i,t),mc.subVectors(s,t),vh.crossVectors(_h,mc);let h=this.direction.dot(vh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ya.subVectors(this.origin,t);const m=d*this.direction.dot(mc.crossVectors(Ya,mc));if(m<0)return null;const p=d*this.direction.dot(_h.cross(Ya));if(p<0||m+p>h)return null;const x=-d*Ya.dot(vh);return x<0?null:this.at(x/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(t,i,s,l,c,h,d,m,p,x,v,y,E,A,C,M){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,x,v,y,E,A,C,M)}set(t,i,s,l,c,h,d,m,p,x,v,y,E,A,C,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=x,S[10]=v,S[14]=y,S[3]=E,S[7]=A,S[11]=C,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/xr.setFromMatrixColumn(t,0).length(),c=1/xr.setFromMatrixColumn(t,1).length(),h=1/xr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const y=h*x,E=h*v,A=d*x,C=d*v;i[0]=m*x,i[4]=-m*v,i[8]=p,i[1]=E+A*p,i[5]=y-C*p,i[9]=-d*m,i[2]=C-y*p,i[6]=A+E*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*x,E=m*v,A=p*x,C=p*v;i[0]=y+C*d,i[4]=A*d-E,i[8]=h*p,i[1]=h*v,i[5]=h*x,i[9]=-d,i[2]=E*d-A,i[6]=C+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*x,E=m*v,A=p*x,C=p*v;i[0]=y-C*d,i[4]=-h*v,i[8]=A+E*d,i[1]=E+A*d,i[5]=h*x,i[9]=C-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*x,E=h*v,A=d*x,C=d*v;i[0]=m*x,i[4]=A*p-E,i[8]=y*p+C,i[1]=m*v,i[5]=C*p+y,i[9]=E*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,E=h*p,A=d*m,C=d*p;i[0]=m*x,i[4]=C-y*v,i[8]=A*v+E,i[1]=v,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=E*v+A,i[10]=y-C*v}else if(t.order==="XZY"){const y=h*m,E=h*p,A=d*m,C=d*p;i[0]=m*x,i[4]=-v,i[8]=p*x,i[1]=y*v+C,i[5]=h*x,i[9]=E*v-A,i[2]=A*v-E,i[6]=d*x,i[10]=C*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tM,t,nM)}lookAt(t,i,s){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Za.crossVectors(s,ei),Za.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Za.crossVectors(s,ei)),Za.normalize(),gc.crossVectors(ei,Za),l[0]=Za.x,l[4]=gc.x,l[8]=ei.x,l[1]=Za.y,l[5]=gc.y,l[9]=ei.y,l[2]=Za.z,l[6]=gc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],x=s[1],v=s[5],y=s[9],E=s[13],A=s[2],C=s[6],M=s[10],S=s[14],F=s[3],P=s[7],L=s[11],z=s[15],H=l[0],I=l[4],Q=l[8],R=l[12],D=l[1],X=l[5],oe=l[9],le=l[13],he=l[2],pe=l[6],N=l[10],G=l[14],ee=l[3],ye=l[7],Se=l[11],U=l[15];return c[0]=h*H+d*D+m*he+p*ee,c[4]=h*I+d*X+m*pe+p*ye,c[8]=h*Q+d*oe+m*N+p*Se,c[12]=h*R+d*le+m*G+p*U,c[1]=x*H+v*D+y*he+E*ee,c[5]=x*I+v*X+y*pe+E*ye,c[9]=x*Q+v*oe+y*N+E*Se,c[13]=x*R+v*le+y*G+E*U,c[2]=A*H+C*D+M*he+S*ee,c[6]=A*I+C*X+M*pe+S*ye,c[10]=A*Q+C*oe+M*N+S*Se,c[14]=A*R+C*le+M*G+S*U,c[3]=F*H+P*D+L*he+z*ee,c[7]=F*I+P*X+L*pe+z*ye,c[11]=F*Q+P*oe+L*N+z*Se,c[15]=F*R+P*le+L*G+z*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],x=t[2],v=t[6],y=t[10],E=t[14],A=t[3],C=t[7],M=t[11],S=t[15],F=m*E-p*y,P=d*E-p*v,L=d*y-m*v,z=h*E-p*x,H=h*y-m*x,I=h*v-d*x;return i*(C*F-M*P+S*L)-s*(A*F-M*z+S*H)+l*(A*P-C*z+S*I)-c*(A*L-C*H+M*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],v=t[9],y=t[10],E=t[11],A=t[12],C=t[13],M=t[14],S=t[15],F=v*M*p-C*y*p+C*m*E-d*M*E-v*m*S+d*y*S,P=A*y*p-x*M*p-A*m*E+h*M*E+x*m*S-h*y*S,L=x*C*p-A*v*p+A*d*E-h*C*E-x*d*S+h*v*S,z=A*v*m-x*C*m-A*d*y+h*C*y+x*d*M-h*v*M,H=i*F+s*P+l*L+c*z;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/H;return t[0]=F*I,t[1]=(C*y*c-v*M*c-C*l*E+s*M*E+v*l*S-s*y*S)*I,t[2]=(d*M*c-C*m*c+C*l*p-s*M*p-d*l*S+s*m*S)*I,t[3]=(v*m*c-d*y*c-v*l*p+s*y*p+d*l*E-s*m*E)*I,t[4]=P*I,t[5]=(x*M*c-A*y*c+A*l*E-i*M*E-x*l*S+i*y*S)*I,t[6]=(A*m*c-h*M*c-A*l*p+i*M*p+h*l*S-i*m*S)*I,t[7]=(h*y*c-x*m*c+x*l*p-i*y*p-h*l*E+i*m*E)*I,t[8]=L*I,t[9]=(A*v*c-x*C*c-A*s*E+i*C*E+x*s*S-i*v*S)*I,t[10]=(h*C*c-A*d*c+A*s*p-i*C*p-h*s*S+i*d*S)*I,t[11]=(x*d*c-h*v*c-x*s*p+i*v*p+h*s*E-i*d*E)*I,t[12]=z*I,t[13]=(x*C*l-A*v*l+A*s*y-i*C*y-x*s*M+i*v*M)*I,t[14]=(A*d*l-h*C*l-A*s*m+i*C*m+h*s*M-i*d*M)*I,t[15]=(h*v*l-x*d*l+x*s*m-i*v*m-h*s*y+i*d*y)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,x=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+s,x*m-l*h,0,p*m-l*d,x*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,x=h+h,v=d+d,y=c*p,E=c*x,A=c*v,C=h*x,M=h*v,S=d*v,F=m*p,P=m*x,L=m*v,z=s.x,H=s.y,I=s.z;return l[0]=(1-(C+S))*z,l[1]=(E+L)*z,l[2]=(A-P)*z,l[3]=0,l[4]=(E-L)*H,l[5]=(1-(y+S))*H,l[6]=(M+F)*H,l[7]=0,l[8]=(A+P)*I,l[9]=(M-F)*I,l[10]=(1-(y+C))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=xr.set(l[0],l[1],l[2]).length();const h=xr.set(l[4],l[5],l[6]).length(),d=xr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ti.copy(this);const p=1/c,x=1/h,v=1/d;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=x,Ti.elements[5]*=x,Ti.elements[6]*=x,Ti.elements[8]*=v,Ti.elements[9]*=v,Ti.elements[10]*=v,i.setFromRotationMatrix(Ti),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Gi,m=!1){const p=this.elements,x=2*c/(i-t),v=2*c/(s-l),y=(i+t)/(i-t),E=(s+l)/(s-l);let A,C;if(m)A=c/(h-c),C=h*c/(h-c);else if(d===Gi)A=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===Hc)A=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Gi,m=!1){const p=this.elements,x=2/(i-t),v=2/(s-l),y=-(i+t)/(i-t),E=-(s+l)/(s-l);let A,C;if(m)A=1/(h-c),C=h/(h-c);else if(d===Gi)A=-2/(h-c),C=-(h+c)/(h-c);else if(d===Hc)A=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=v,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const xr=new re,Ti=new an,tM=new re(0,0,0),nM=new re(1,1,1),Za=new re,gc=new re,ei=new re,j_=new an,Y_=new Zo;class xa{constructor(t=0,i=0,s=0,l=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],v=l[2],y=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return j_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(j_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Y_.setFromEuler(this),this.setFromQuaternion(Y_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class lv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iM=0;const Z_=new re,Sr=new Zo,ha=new an,_c=new re,Po=new re,aM=new re,sM=new Zo,K_=new re(1,0,0),Q_=new re(0,1,0),J_=new re(0,0,1),$_={type:"added"},rM={type:"removed"},yr={type:"childadded",child:null},xh={type:"childremoved",child:null};class Wn extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const t=new re,i=new xa,s=new Zo,l=new re(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new ft}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Sr.setFromAxisAngle(t,i),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(t,i){return Sr.setFromAxisAngle(t,i),this.quaternion.premultiply(Sr),this}rotateX(t){return this.rotateOnAxis(K_,t)}rotateY(t){return this.rotateOnAxis(Q_,t)}rotateZ(t){return this.rotateOnAxis(J_,t)}translateOnAxis(t,i){return Z_.copy(t).applyQuaternion(this.quaternion),this.position.add(Z_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(K_,t)}translateY(t){return this.translateOnAxis(Q_,t)}translateZ(t){return this.translateOnAxis(J_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?_c.copy(t):_c.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Po,_c,this.up):ha.lookAt(_c,Po,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),Sr.setFromRotationMatrix(ha),this.quaternion.premultiply(Sr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($_),yr.child=t,this.dispatchEvent(yr),yr.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(rM),xh.child=t,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($_),yr.child=t,this.dispatchEvent(yr),yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,aM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,sM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),x=h(t.images),v=h(t.shapes),y=h(t.skeletons),E=h(t.animations),A=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),E.length>0&&(s.animations=E),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new re(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new re,da=new re,Sh=new re,pa=new re,Mr=new re,Er=new re,e0=new re,yh=new re,Mh=new re,Eh=new re,bh=new en,Th=new en,Ah=new en;class Ci{constructor(t=new re,i=new re,s=new re){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ai.subVectors(t,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ai.subVectors(l,i),da.subVectors(s,i),Sh.subVectors(t,i);const h=Ai.dot(Ai),d=Ai.dot(da),m=Ai.dot(Sh),p=da.dot(da),x=da.dot(Sh),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const y=1/v,E=(p*m-d*x)*y,A=(h*x-d*m)*y;return c.set(1-E-A,A,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(h,pa.y),m.addScaledVector(d,pa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return bh.setScalar(0),Th.setScalar(0),Ah.setScalar(0),bh.fromBufferAttribute(t,i),Th.fromBufferAttribute(t,s),Ah.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(bh,c.x),h.addScaledVector(Th,c.y),h.addScaledVector(Ah,c.z),h}static isFrontFacing(t,i,s,l){return Ai.subVectors(s,i),da.subVectors(t,i),Ai.cross(da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ai.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ci.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Mr.subVectors(l,s),Er.subVectors(c,s),yh.subVectors(t,s);const m=Mr.dot(yh),p=Er.dot(yh);if(m<=0&&p<=0)return i.copy(s);Mh.subVectors(t,l);const x=Mr.dot(Mh),v=Er.dot(Mh);if(x>=0&&v<=x)return i.copy(l);const y=m*v-x*p;if(y<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(s).addScaledVector(Mr,h);Eh.subVectors(t,c);const E=Mr.dot(Eh),A=Er.dot(Eh);if(A>=0&&E<=A)return i.copy(c);const C=E*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(s).addScaledVector(Er,d);const M=x*A-E*v;if(M<=0&&v-x>=0&&E-A>=0)return e0.subVectors(c,l),d=(v-x)/(v-x+(E-A)),i.copy(l).addScaledVector(e0,d);const S=1/(M+C+y);return h=C*S,d=y*S,i.copy(s).addScaledVector(Mr,h).addScaledVector(Er,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Rh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Lt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=At.workingColorSpace){return this.r=t,this.g=i,this.b=s,At.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=At.workingColorSpace){if(t=jy(t,1),i=Mt(i,0,1),s=Mt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Rh(h,c,t+1/3),this.g=Rh(h,c,t),this.b=Rh(h,c,t-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function s(c){c!==void 0&&parseFloat(c)<1&&it("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:it("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);it("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const s=cv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):it("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return At.workingToColorSpace(On.copy(this),t),Math.round(Mt(On.r*255,0,255))*65536+Math.round(Mt(On.g*255,0,255))*256+Math.round(Mt(On.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=At.workingColorSpace){At.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,c=On.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=x<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=At.workingColorSpace){return At.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=pi){At.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,l=On.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+i,Ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ka),t.getHSL(vc);const s=ch(Ka.h,vc.h,i),l=ch(Ka.s,vc.s,i),c=ch(Ka.l,vc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Lt;Lt.NAMES=cv;let oM=0;class Qo extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Cr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){it(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Hh&&(s.blendSrc=this.blendSrc),this.blendDst!==Gh&&(s.blendDst=this.blendDst),this.blendEquation!==As&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class uv extends Qo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=k0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new re,xc=new ot;let lM=0;class Ui{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=H_,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(t),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=No(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Xn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==H_&&(t.usage=this.usage),t}}class fv extends Ui{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class hv extends Ui{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ni extends Ui{constructor(t,i,s){super(new Float32Array(t),i,s)}}let cM=0;const di=new an,Ch=new Wn,br=new re,ti=new Ko,Fo=new Ko,vn=new re;class Li extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sv(t)?hv:fv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ft().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,s){return di.makeTranslation(t,i,s),this.applyMatrix4(di),this}scale(t,i,s){return di.makeScale(t,i,s),this.applyMatrix4(di),this}lookAt(t){return Ch.lookAt(t),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ni(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ti.min,Fo.min),ti.expandByPoint(vn),vn.addVectors(ti.max,Fo.max),ti.expandByPoint(vn)):(ti.expandByPoint(Fo.min),ti.expandByPoint(Fo.max))}ti.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)vn.fromBufferAttribute(d,p),m&&(br.fromBufferAttribute(t,p),vn.add(br)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<s.count;Q++)d[Q]=new re,m[Q]=new re;const p=new re,x=new re,v=new re,y=new ot,E=new ot,A=new ot,C=new re,M=new re;function S(Q,R,D){p.fromBufferAttribute(s,Q),x.fromBufferAttribute(s,R),v.fromBufferAttribute(s,D),y.fromBufferAttribute(c,Q),E.fromBufferAttribute(c,R),A.fromBufferAttribute(c,D),x.sub(p),v.sub(p),E.sub(y),A.sub(y);const X=1/(E.x*A.y-A.x*E.y);isFinite(X)&&(C.copy(x).multiplyScalar(A.y).addScaledVector(v,-E.y).multiplyScalar(X),M.copy(v).multiplyScalar(E.x).addScaledVector(x,-A.x).multiplyScalar(X),d[Q].add(C),d[R].add(C),d[D].add(C),m[Q].add(M),m[R].add(M),m[D].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let Q=0,R=F.length;Q<R;++Q){const D=F[Q],X=D.start,oe=D.count;for(let le=X,he=X+oe;le<he;le+=3)S(t.getX(le+0),t.getX(le+1),t.getX(le+2))}const P=new re,L=new re,z=new re,H=new re;function I(Q){z.fromBufferAttribute(l,Q),H.copy(z);const R=d[Q];P.copy(R),P.sub(z.multiplyScalar(z.dot(R))).normalize(),L.crossVectors(H,R);const X=L.dot(m[Q])<0?-1:1;h.setXYZW(Q,P.x,P.y,P.z,X)}for(let Q=0,R=F.length;Q<R;++Q){const D=F[Q],X=D.start,oe=D.count;for(let le=X,he=X+oe;le<he;le+=3)I(t.getX(le+0)),I(t.getX(le+1)),I(t.getX(le+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,E=s.count;y<E;y++)s.setXYZ(y,0,0,0);const l=new re,c=new re,h=new re,d=new re,m=new re,p=new re,x=new re,v=new re;if(t)for(let y=0,E=t.count;y<E;y+=3){const A=t.getX(y+0),C=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),x.subVectors(h,c),v.subVectors(l,c),x.cross(v),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),d.add(x),m.add(x),p.add(x),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,E=i.count;y<E;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),x.subVectors(h,c),v.subVectors(l,c),x.cross(v),s.setXYZ(y+0,x.x,x.y,x.z),s.setXYZ(y+1,x.x,x.y,x.z),s.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,x=d.itemSize,v=d.normalized,y=new p.constructor(m.length*x);let E=0,A=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?E=m[C]*d.data.stride+d.offset:E=m[C]*x;for(let S=0;S<x;S++)y[A++]=p[E++]}return new Ui(y,x,v)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Li,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,v=p.length;x<v;x++){const y=p[x],E=t(y,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,y=p.length;v<y;v++){const E=p[v];x.push(E.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=t.morphAttributes;for(const p in c){const x=[],v=c[p];for(let y=0,E=v.length;y<E;y++)x.push(v[y].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,x=h.length;p<x;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const t0=new an,ys=new ov,Sc=new Wc,n0=new re,yc=new re,Mc=new re,Ec=new re,wh=new re,bc=new re,i0=new re,Tc=new re;class _i extends Wn{constructor(t=new Li,i=new uv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){bc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],v=c[m];x!==0&&(wh.fromBufferAttribute(v,t),h?bc.addScaledVector(wh,x):bc.addScaledVector(wh.sub(i),x))}i.add(bc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(c),ys.copy(t.ray).recast(t.near),!(Sc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Sc,n0)===null||ys.origin.distanceToSquared(n0)>(t.far-t.near)**2))&&(t0.copy(c).invert(),ys.copy(t.ray).applyMatrix4(t0),!(s.boundingBox!==null&&ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ys)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,v=c.attributes.normal,y=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=y.length;A<C;A++){const M=y[A],S=h[M.materialIndex],F=Math.max(M.start,E.start),P=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let L=F,z=P;L<z;L+=3){const H=d.getX(L),I=d.getX(L+1),Q=d.getX(L+2);l=Ac(this,S,t,s,p,x,v,H,I,Q),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(d.count,E.start+E.count);for(let M=A,S=C;M<S;M+=3){const F=d.getX(M),P=d.getX(M+1),L=d.getX(M+2);l=Ac(this,h,t,s,p,x,v,F,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=y.length;A<C;A++){const M=y[A],S=h[M.materialIndex],F=Math.max(M.start,E.start),P=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let L=F,z=P;L<z;L+=3){const H=L,I=L+1,Q=L+2;l=Ac(this,S,t,s,p,x,v,H,I,Q),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let M=A,S=C;M<S;M+=3){const F=M,P=M+1,L=M+2;l=Ac(this,h,t,s,p,x,v,F,P,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function uM(o,t,i,s,l,c,h,d){let m;if(t.side===qn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===es,d),m===null)return null;Tc.copy(d),Tc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Tc);return p<i.near||p>i.far?null:{distance:p,point:Tc.clone(),object:o}}function Ac(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,yc),o.getVertexPosition(m,Mc),o.getVertexPosition(p,Ec);const x=uM(o,t,i,s,yc,Mc,Ec,i0);if(x){const v=new re;Ci.getBarycoord(i0,yc,Mc,Ec,v),l&&(x.uv=Ci.getInterpolatedAttribute(l,d,m,p,v,new ot)),c&&(x.uv1=Ci.getInterpolatedAttribute(c,d,m,p,v,new ot)),h&&(x.normal=Ci.getInterpolatedAttribute(h,d,m,p,v,new re),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new re,materialIndex:0};Ci.getNormal(yc,Mc,Ec,y.normal),x.face=y,x.barycoord=v}return x}class Jo extends Li{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],x=[],v=[];let y=0,E=0;A("z","y","x",-1,-1,s,i,t,h,c,0),A("z","y","x",1,-1,s,i,-t,h,c,1),A("x","z","y",1,1,t,s,i,l,h,2),A("x","z","y",1,-1,t,s,-i,l,h,3),A("x","y","z",1,-1,t,i,s,l,c,4),A("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ni(p,3)),this.setAttribute("normal",new Ni(x,3)),this.setAttribute("uv",new Ni(v,2));function A(C,M,S,F,P,L,z,H,I,Q,R){const D=L/I,X=z/Q,oe=L/2,le=z/2,he=H/2,pe=I+1,N=Q+1;let G=0,ee=0;const ye=new re;for(let Se=0;Se<N;Se++){const U=Se*X-le;for(let ie=0;ie<pe;ie++){const _e=ie*D-oe;ye[C]=_e*F,ye[M]=U*P,ye[S]=he,p.push(ye.x,ye.y,ye.z),ye[C]=0,ye[M]=0,ye[S]=H>0?1:-1,x.push(ye.x,ye.y,ye.z),v.push(ie/I),v.push(1-Se/Q),G+=1}}for(let Se=0;Se<Q;Se++)for(let U=0;U<I;U++){const ie=y+U+pe*Se,_e=y+U+pe*(Se+1),Ae=y+(U+1)+pe*(Se+1),Be=y+(U+1)+pe*Se;m.push(ie,_e,Be),m.push(_e,Ae,Be),ee+=6}d.addGroup(E,ee,R),E+=ee,y+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Or(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const s=Or(o[i]);for(const l in s)t[l]=s[l]}return t}function fM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function dv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:At.workingColorSpace}const hM={clone:Or,merge:Fn};var dM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Qo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dM,this.fragmentShader=pM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=fM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Vc extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new re,a0=new ot,s0=new ot;class Ri extends Vc{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ud*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(lh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z)}getViewSize(t,i){return this.getViewBounds(t,a0,s0),i.subVectors(s0,a0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(lh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Tr=-90,Ar=1;class mM extends Wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(Tr,Ar,t,i);l.layers=this.layers,this.add(l);const c=new Ri(Tr,Ar,t,i);c.layers=this.layers,this.add(c);const h=new Ri(Tr,Ar,t,i);h.layers=this.layers,this.add(h);const d=new Ri(Tr,Ar,t,i);d.layers=this.layers,this.add(d);const m=new Ri(Tr,Ar,t,i);m.layers=this.layers,this.add(m);const p=new Ri(Tr,Ar,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Hc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,x]=this.children,v=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,x),t.setRenderTarget(v,y,E),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class pv extends In{constructor(t=[],i=Us,s,l,c,h,d,m,p,x){super(t,i,s,l,c,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mv extends Di{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new pv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Jo(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:Or(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:ga});c.uniforms.tEquirect.value=i;const h=new _i(l,c),d=i.minFilter;return i.minFilter===Cs&&(i.minFilter=fn),new mM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Rc extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gM={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,s),S=this._getHandJoint(p,C);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=x.position.distanceTo(v.position),E=.02,A=.005;p.inputState.pinching&&y>E+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=E-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(gM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Rc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class r0 extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class gv extends In{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Dn,x=Dn,v,y){super(null,h,d,m,p,x,l,c,v,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uh=new re,_M=new re,vM=new ft;class Ts{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Uh.subVectors(s,i).cross(_M.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Uh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||vM.getNormalMatrix(t),l=this.coplanarPoint(Uh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new Wc,xM=new ot(.5,.5),Cc=new re;class _v{constructor(t=new Ts,i=new Ts,s=new Ts,l=new Ts,c=new Ts,h=new Ts){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Gi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],x=c[4],v=c[5],y=c[6],E=c[7],A=c[8],C=c[9],M=c[10],S=c[11],F=c[12],P=c[13],L=c[14],z=c[15];if(l[0].setComponents(p-h,E-x,S-A,z-F).normalize(),l[1].setComponents(p+h,E+x,S+A,z+F).normalize(),l[2].setComponents(p+d,E+v,S+C,z+P).normalize(),l[3].setComponents(p-d,E-v,S-C,z-P).normalize(),s)l[4].setComponents(m,y,M,L).normalize(),l[5].setComponents(p-m,E-y,S-M,z-L).normalize();else if(l[4].setComponents(p-m,E-y,S-M,z-L).normalize(),i===Gi)l[5].setComponents(p+m,E+y,S+M,z+L).normalize();else if(i===Hc)l[5].setComponents(m,y,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){Ms.center.set(0,0,0);const i=xM.distanceTo(t.center);return Ms.radius=.7071067811865476+i,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Cc.x=l.normal.x>0?t.max.x:t.min.x,Cc.y=l.normal.y>0?t.max.y:t.min.y,Cc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class SM extends Qo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const kc=new re,Xc=new re,o0=new an,Io=new ov,wc=new Wc,Nh=new re,l0=new re;class yM extends Wn{constructor(t=new Li,i=new SM){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)kc.fromBufferAttribute(i,l-1),Xc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=kc.distanceTo(Xc);t.setAttribute("lineDistance",new Ni(s,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(l),wc.radius+=c,t.ray.intersectsSphere(wc)===!1)return;o0.copy(l).invert(),Io.copy(t.ray).applyMatrix4(o0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,x=s.index,y=s.attributes.position;if(x!==null){const E=Math.max(0,h.start),A=Math.min(x.count,h.start+h.count);for(let C=E,M=A-1;C<M;C+=p){const S=x.getX(C),F=x.getX(C+1),P=Dc(this,t,Io,m,S,F,C);P&&i.push(P)}if(this.isLineLoop){const C=x.getX(A-1),M=x.getX(E),S=Dc(this,t,Io,m,C,M,A-1);S&&i.push(S)}}else{const E=Math.max(0,h.start),A=Math.min(y.count,h.start+h.count);for(let C=E,M=A-1;C<M;C+=p){const S=Dc(this,t,Io,m,C,C+1,C);S&&i.push(S)}if(this.isLineLoop){const C=Dc(this,t,Io,m,A-1,E,A-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Dc(o,t,i,s,l,c,h){const d=o.geometry.attributes.position;if(kc.fromBufferAttribute(d,l),Xc.fromBufferAttribute(d,c),i.distanceSqToSegment(kc,Xc,Nh,l0)>s)return;Nh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Nh);if(!(p<t.near||p>t.far))return{distance:p,point:l0.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const c0=new re,u0=new re;class MM extends yM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)c0.fromBufferAttribute(i,l),u0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+c0.distanceTo(u0);t.setAttribute("lineDistance",new Ni(s,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wo extends In{constructor(t,i,s=ki,l,c,h,d=Dn,m=Dn,p,x=va,v=1){if(x!==va&&x!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:v};super(y,l,c,h,d,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class EM extends Wo{constructor(t,i=ki,s=Us,l,c,h=Dn,d=Dn,m,p=va){const x={width:t,height:t,depth:1},v=[x,x,x,x,x,x];super(t,t,i,s,l,c,h,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class vv extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ds extends Li{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,x=m+1,v=t/d,y=i/m,E=[],A=[],C=[],M=[];for(let S=0;S<x;S++){const F=S*y-h;for(let P=0;P<p;P++){const L=P*v-c;A.push(L,-F,0),C.push(0,0,1),M.push(P/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let F=0;F<d;F++){const P=F+p*S,L=F+p*(S+1),z=F+1+p*(S+1),H=F+1+p*S;E.push(P,L,H),E.push(L,z,H)}this.setIndex(E),this.setAttribute("position",new Ni(A,3)),this.setAttribute("normal",new Ni(C,3)),this.setAttribute("uv",new Ni(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.width,t.height,t.widthSegments,t.heightSegments)}}class Go extends qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bM extends Qo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class TM extends Qo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class xv extends Vc{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class AM extends Ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class RM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function f0(o,t,i,s){const l=CM(s);switch(i){case nv:return o*t;case av:return o*t/l.components*l.byteLength;case Gd:return o*t/l.components*l.byteLength;case Nr:return o*t*2/l.components*l.byteLength;case Vd:return o*t*2/l.components*l.byteLength;case iv:return o*t*3/l.components*l.byteLength;case gi:return o*t*4/l.components*l.byteLength;case kd:return o*t*4/l.components*l.byteLength;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Fc:case Ic:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ed:case nd:return Math.max(o,16)*Math.max(t,8)/4;case $h:case td:return Math.max(o,8)*Math.max(t,8)/2;case id:case ad:case rd:case od:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case sd:case ld:case cd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ud:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case hd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case dd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case pd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case md:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case gd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case _d:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case vd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case xd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case yd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Md:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Ed:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case bd:case Td:case Ad:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Rd:case Cd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case wd:case Dd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function CM(o){switch(o){case mi:case J0:return{byteLength:1,components:1};case ko:case $0:case Xi:return{byteLength:2,components:1};case Bd:case Hd:return{byteLength:2,components:4};case ki:case zd:case wi:return{byteLength:4,components:1};case ev:case tv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);function Sv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function wM(o){const t=new WeakMap;function i(d,m){const p=d.array,x=d.usage,v=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,x),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const x=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,x);else{v.sort((E,A)=>E.start-A.start);let y=0;for(let E=1;E<v.length;E++){const A=v[y],C=v[E];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++y,v[y]=C)}v.length=y+1;for(let E=0,A=v.length;E<A;E++){const C=v[E];o.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=t.get(d);(!x||x.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var DM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UM=`#ifdef USE_ALPHAHASH
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
#endif`,NM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FM=`#ifdef USE_AOMAP
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
#endif`,IM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
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
#endif`,BM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kM=`#ifdef USE_IRIDESCENCE
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
#endif`,XM=`#ifdef USE_BUMPMAP
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
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$M=`#define PI 3.141592653589793
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
} // validated`,eE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tE=`vec3 transformedNormal = objectNormal;
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
#endif`,nE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rE="gl_FragColor = linearToOutputTexel( gl_FragColor );",oE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,fE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
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
#endif`,dE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_E=`#ifdef USE_GRADIENTMAP
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
}`,vE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yE=`uniform bool receiveShadow;
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
#endif`,ME=`#ifdef USE_ENVMAP
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
#endif`,EE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RE=`PhysicalMaterial material;
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
#endif`,CE=`uniform sampler2D dfgLUT;
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
}`,wE=`
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
#endif`,DE=`#if defined( RE_IndirectDiffuse )
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
#endif`,UE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BE=`#if defined( USE_POINTS_UV )
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
#endif`,HE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qE=`#ifdef USE_MORPHTARGETS
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
#endif`,WE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JE=`#ifdef USE_NORMALMAP
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
#endif`,$E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ab=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pb=`float getShadowMask() {
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
}`,mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gb=`#ifdef USE_SKINNING
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
#endif`,_b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vb=`#ifdef USE_SKINNING
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
#endif`,xb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eb=`#ifdef USE_TRANSMISSION
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
#endif`,bb=`#ifdef USE_TRANSMISSION
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Db=`uniform sampler2D t2D;
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ob=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`#include <common>
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
}`,Fb=`#if DEPTH_PACKING == 3200
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
}`,Ib=`#define DISTANCE
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
}`,zb=`#define DISTANCE
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
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`uniform float scale;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,kb=`#include <common>
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
}`,Xb=`uniform vec3 diffuse;
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
}`,qb=`#define LAMBERT
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
}`,Wb=`#define LAMBERT
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
}`,jb=`#define MATCAP
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
}`,Yb=`#define MATCAP
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
}`,Zb=`#define NORMAL
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
}`,Kb=`#define NORMAL
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
}`,Qb=`#define PHONG
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
}`,Jb=`#define PHONG
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
}`,$b=`#define STANDARD
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
}`,eT=`#define STANDARD
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
}`,tT=`#define TOON
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
}`,nT=`#define TOON
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
}`,iT=`uniform float size;
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
}`,aT=`uniform vec3 diffuse;
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
}`,sT=`#include <common>
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
}`,rT=`uniform vec3 color;
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
}`,oT=`uniform float rotation;
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
}`,lT=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:DM,alphahash_pars_fragment:UM,alphamap_fragment:NM,alphamap_pars_fragment:LM,alphatest_fragment:OM,alphatest_pars_fragment:PM,aomap_fragment:FM,aomap_pars_fragment:IM,batching_pars_vertex:zM,batching_vertex:BM,begin_vertex:HM,beginnormal_vertex:GM,bsdfs:VM,iridescence_fragment:kM,bumpmap_pars_fragment:XM,clipping_planes_fragment:qM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:jM,clipping_planes_vertex:YM,color_fragment:ZM,color_pars_fragment:KM,color_pars_vertex:QM,color_vertex:JM,common:$M,cube_uv_reflection_fragment:eE,defaultnormal_vertex:tE,displacementmap_pars_vertex:nE,displacementmap_vertex:iE,emissivemap_fragment:aE,emissivemap_pars_fragment:sE,colorspace_fragment:rE,colorspace_pars_fragment:oE,envmap_fragment:lE,envmap_common_pars_fragment:cE,envmap_pars_fragment:uE,envmap_pars_vertex:fE,envmap_physical_pars_fragment:ME,envmap_vertex:hE,fog_vertex:dE,fog_pars_vertex:pE,fog_fragment:mE,fog_pars_fragment:gE,gradientmap_pars_fragment:_E,lightmap_pars_fragment:vE,lights_lambert_fragment:xE,lights_lambert_pars_fragment:SE,lights_pars_begin:yE,lights_toon_fragment:EE,lights_toon_pars_fragment:bE,lights_phong_fragment:TE,lights_phong_pars_fragment:AE,lights_physical_fragment:RE,lights_physical_pars_fragment:CE,lights_fragment_begin:wE,lights_fragment_maps:DE,lights_fragment_end:UE,logdepthbuf_fragment:NE,logdepthbuf_pars_fragment:LE,logdepthbuf_pars_vertex:OE,logdepthbuf_vertex:PE,map_fragment:FE,map_pars_fragment:IE,map_particle_fragment:zE,map_particle_pars_fragment:BE,metalnessmap_fragment:HE,metalnessmap_pars_fragment:GE,morphinstance_vertex:VE,morphcolor_vertex:kE,morphnormal_vertex:XE,morphtarget_pars_vertex:qE,morphtarget_vertex:WE,normal_fragment_begin:jE,normal_fragment_maps:YE,normal_pars_fragment:ZE,normal_pars_vertex:KE,normal_vertex:QE,normalmap_pars_fragment:JE,clearcoat_normal_fragment_begin:$E,clearcoat_normal_fragment_maps:eb,clearcoat_pars_fragment:tb,iridescence_pars_fragment:nb,opaque_fragment:ib,packing:ab,premultiplied_alpha_fragment:sb,project_vertex:rb,dithering_fragment:ob,dithering_pars_fragment:lb,roughnessmap_fragment:cb,roughnessmap_pars_fragment:ub,shadowmap_pars_fragment:fb,shadowmap_pars_vertex:hb,shadowmap_vertex:db,shadowmask_pars_fragment:pb,skinbase_vertex:mb,skinning_pars_vertex:gb,skinning_vertex:_b,skinnormal_vertex:vb,specularmap_fragment:xb,specularmap_pars_fragment:Sb,tonemapping_fragment:yb,tonemapping_pars_fragment:Mb,transmission_fragment:Eb,transmission_pars_fragment:bb,uv_pars_fragment:Tb,uv_pars_vertex:Ab,uv_vertex:Rb,worldpos_vertex:Cb,background_vert:wb,background_frag:Db,backgroundCube_vert:Ub,backgroundCube_frag:Nb,cube_vert:Lb,cube_frag:Ob,depth_vert:Pb,depth_frag:Fb,distance_vert:Ib,distance_frag:zb,equirect_vert:Bb,equirect_frag:Hb,linedashed_vert:Gb,linedashed_frag:Vb,meshbasic_vert:kb,meshbasic_frag:Xb,meshlambert_vert:qb,meshlambert_frag:Wb,meshmatcap_vert:jb,meshmatcap_frag:Yb,meshnormal_vert:Zb,meshnormal_frag:Kb,meshphong_vert:Qb,meshphong_frag:Jb,meshphysical_vert:$b,meshphysical_frag:eT,meshtoon_vert:tT,meshtoon_frag:nT,points_vert:iT,points_frag:aT,shadow_vert:sT,shadow_frag:rT,sprite_vert:oT,sprite_frag:lT},Oe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Hi={basic:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Fn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Fn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Fn([Oe.points,Oe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Fn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Fn([Oe.common,Oe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Fn([Oe.sprite,Oe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Fn([Oe.common,Oe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Fn([Oe.lights,Oe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Hi.physical={uniforms:Fn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Uc={r:0,b:0,g:0},Es=new xa,cT=new an;function uT(o,t,i,s,l,c,h){const d=new Lt(0);let m=c===!0?0:1,p,x,v=null,y=0,E=null;function A(P){let L=P.isScene===!0?P.background:null;return L&&L.isTexture&&(L=(P.backgroundBlurriness>0?i:t).get(L)),L}function C(P){let L=!1;const z=A(P);z===null?S(d,m):z&&z.isColor&&(S(z,1),L=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(P,L){const z=A(L);z&&(z.isCubeTexture||z.mapping===qc)?(x===void 0&&(x=new _i(new Jo(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Or(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(H,I,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Es.copy(L.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),x.material.uniforms.envMap.value=z,x.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(cT.makeRotationFromEuler(Es)),x.material.toneMapped=At.getTransfer(z.colorSpace)!==Bt,(v!==z||y!==z.version||E!==o.toneMapping)&&(x.material.needsUpdate=!0,v=z,y=z.version,E=o.toneMapping),x.layers.enableAll(),P.unshift(x,x.geometry,x.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new _i(new Ds(2,2),new qi({name:"BackgroundMaterial",uniforms:Or(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=At.getTransfer(z.colorSpace)!==Bt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||y!==z.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,v=z,y=z.version,E=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function S(P,L){P.getRGB(Uc,dv(o)),s.buffers.color.setClear(Uc.r,Uc.g,Uc.b,L,h)}function F(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,L=1){d.set(P),m=L,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,S(d,m)},render:C,addToRenderList:M,dispose:F}}function fT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(D,X,oe,le,he){let pe=!1;const N=v(le,oe,X);c!==N&&(c=N,p(c.object)),pe=E(D,le,oe,he),pe&&A(D,le,oe,he),he!==null&&t.update(he,o.ELEMENT_ARRAY_BUFFER),(pe||h)&&(h=!1,L(D,X,oe,le),he!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(he).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function x(D){return o.deleteVertexArray(D)}function v(D,X,oe){const le=oe.wireframe===!0;let he=s[D.id];he===void 0&&(he={},s[D.id]=he);let pe=he[X.id];pe===void 0&&(pe={},he[X.id]=pe);let N=pe[le];return N===void 0&&(N=y(m()),pe[le]=N),N}function y(D){const X=[],oe=[],le=[];for(let he=0;he<i;he++)X[he]=0,oe[he]=0,le[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:oe,attributeDivisors:le,object:D,attributes:{},index:null}}function E(D,X,oe,le){const he=c.attributes,pe=X.attributes;let N=0;const G=oe.getAttributes();for(const ee in G)if(G[ee].location>=0){const Se=he[ee];let U=pe[ee];if(U===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(U=D.instanceColor)),Se===void 0||Se.attribute!==U||U&&Se.data!==U.data)return!0;N++}return c.attributesNum!==N||c.index!==le}function A(D,X,oe,le){const he={},pe=X.attributes;let N=0;const G=oe.getAttributes();for(const ee in G)if(G[ee].location>=0){let Se=pe[ee];Se===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor));const U={};U.attribute=Se,Se&&Se.data&&(U.data=Se.data),he[ee]=U,N++}c.attributes=he,c.attributesNum=N,c.index=le}function C(){const D=c.newAttributes;for(let X=0,oe=D.length;X<oe;X++)D[X]=0}function M(D){S(D,0)}function S(D,X){const oe=c.newAttributes,le=c.enabledAttributes,he=c.attributeDivisors;oe[D]=1,le[D]===0&&(o.enableVertexAttribArray(D),le[D]=1),he[D]!==X&&(o.vertexAttribDivisor(D,X),he[D]=X)}function F(){const D=c.newAttributes,X=c.enabledAttributes;for(let oe=0,le=X.length;oe<le;oe++)X[oe]!==D[oe]&&(o.disableVertexAttribArray(oe),X[oe]=0)}function P(D,X,oe,le,he,pe,N){N===!0?o.vertexAttribIPointer(D,X,oe,he,pe):o.vertexAttribPointer(D,X,oe,le,he,pe)}function L(D,X,oe,le){C();const he=le.attributes,pe=oe.getAttributes(),N=X.defaultAttributeValues;for(const G in pe){const ee=pe[G];if(ee.location>=0){let ye=he[G];if(ye===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor)),ye!==void 0){const Se=ye.normalized,U=ye.itemSize,ie=t.get(ye);if(ie===void 0)continue;const _e=ie.buffer,Ae=ie.type,Be=ie.bytesPerElement,te=Ae===o.INT||Ae===o.UNSIGNED_INT||ye.gpuType===zd;if(ye.isInterleavedBufferAttribute){const de=ye.data,Re=de.stride,ke=ye.offset;if(de.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ee.locationSize;Ge++)S(ee.location+Ge,de.meshPerAttribute);D.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ge=0;Ge<ee.locationSize;Ge++)M(ee.location+Ge);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let Ge=0;Ge<ee.locationSize;Ge++)P(ee.location+Ge,U/ee.locationSize,Ae,Se,Re*Be,(ke+U/ee.locationSize*Ge)*Be,te)}else{if(ye.isInstancedBufferAttribute){for(let de=0;de<ee.locationSize;de++)S(ee.location+de,ye.meshPerAttribute);D.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let de=0;de<ee.locationSize;de++)M(ee.location+de);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let de=0;de<ee.locationSize;de++)P(ee.location+de,U/ee.locationSize,Ae,Se,U*Be,U/ee.locationSize*de*Be,te)}}else if(N!==void 0){const Se=N[G];if(Se!==void 0)switch(Se.length){case 2:o.vertexAttrib2fv(ee.location,Se);break;case 3:o.vertexAttrib3fv(ee.location,Se);break;case 4:o.vertexAttrib4fv(ee.location,Se);break;default:o.vertexAttrib1fv(ee.location,Se)}}}}F()}function z(){Q();for(const D in s){const X=s[D];for(const oe in X){const le=X[oe];for(const he in le)x(le[he].object),delete le[he];delete X[oe]}delete s[D]}}function H(D){if(s[D.id]===void 0)return;const X=s[D.id];for(const oe in X){const le=X[oe];for(const he in le)x(le[he].object),delete le[he];delete X[oe]}delete s[D.id]}function I(D){for(const X in s){const oe=s[X];if(oe[D.id]===void 0)continue;const le=oe[D.id];for(const he in le)x(le[he].object),delete le[he];delete oe[D.id]}}function Q(){R(),h=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:R,dispose:z,releaseStatesOfGeometry:H,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:M,disableUnusedAttributes:F}}function hT(o,t,i){let s;function l(p){s=p}function c(p,x){o.drawArrays(s,p,x),i.update(x,s,1)}function h(p,x,v){v!==0&&(o.drawArraysInstanced(s,p,x,v),i.update(x,s,v))}function d(p,x,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,v);let E=0;for(let A=0;A<v;A++)E+=x[A];i.update(E,s,1)}function m(p,x,v,y){if(v===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<p.length;A++)h(p[A],x[A],y[A]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,x,0,y,0,v);let A=0;for(let C=0;C<v;C++)A+=x[C]*y[C];i.update(A,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function dT(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==gi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Q=I===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==mi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==wi&&!Q)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(it("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),H=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:E,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:F,maxVaryings:P,maxFragmentUniforms:L,maxSamples:z,samples:H}}function pT(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Ts,d=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const E=v.length!==0||y||s!==0||l;return l=y,s=v.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=x(v,y,0)},this.setState=function(v,y,E){const A=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,S=o.get(v);if(!l||A===null||A.length===0||c&&!M)c?x(null):p();else{const F=c?0:s,P=F*4;let L=S.clippingState||null;m.value=L,L=x(A,y,P,E);for(let z=0;z!==P;++z)L[z]=i[z];S.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(v,y,E,A){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const S=E+C*4,F=y.matrixWorldInverse;d.getNormalMatrix(F),(M===null||M.length<S)&&(M=new Float32Array(S));for(let P=0,L=E;P!==C;++P,L+=4)h.copy(v[P]).applyMatrix4(F,d),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}function mT(o){let t=new WeakMap;function i(h,d){return d===Zh?h.mapping=Us:d===Kh&&(h.mapping=Ur),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Zh||d===Kh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new mv(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const $a=4,h0=[.125,.215,.35,.446,.526,.582],Rs=20,gT=256,zo=new xv,d0=new Lt;let Lh=null,Oh=0,Ph=0,Fh=!1;const _T=new re;class p0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=_T}=c;Lh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lh,Oh,Ph),this._renderer.xr.enabled=Fh,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Us||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Xi,format:gi,colorSpace:Lr,depthBuffer:!1},l=m0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m0(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vT(c)),this._blurMaterial=ST(c,t,i),this._ggxMaterial=xT(c,t,i)}return l}_compileMaterial(t){const i=new _i(new Li,t);this._renderer.compile(i,zo)}_sceneToCubeUV(t,i,s,l,c){const m=new Ri(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,E=v.toneMapping;v.getClearColor(d0),v.toneMapping=Vi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new Jo,new uv({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let S=!1;const F=t.background;F?F.isColor&&(M.color.copy(F),t.background=null,S=!0):(M.color.copy(d0),S=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[P],c.y,c.z)):L===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[P]));const z=this._cubeSize;Rr(l,L*z,P>2?z:0,z,z),v.setRenderTarget(l),S&&v.render(C,m),v.render(t,m)}v.toneMapping=E,v.autoClear=y,t.background=F}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Us||t.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=_0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Rr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,zo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-x*x),y=0+p*1.25,E=v*y,{_lodMax:A}=this,C=this._sizeLods[s],M=3*C*(s>A-$a?s-A+$a:0),S=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=A-i,Rr(c,M,S,3*C,2*C),l.setRenderTarget(c),l.render(d,zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,Rr(t,M,S,3*C,2*C),l.setRenderTarget(t),l.render(d,zo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[l];v.material=p;const y=p.uniforms,E=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Rs-1),C=c/A,M=isFinite(c)?1+Math.floor(x*C):Rs;M>Rs&&it(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Rs}`);const S=[];let F=0;for(let I=0;I<Rs;++I){const Q=I/C,R=Math.exp(-Q*Q/2);S.push(R),I===0?F+=R:I<M&&(F+=2*R)}for(let I=0;I<S.length;I++)S[I]=S[I]/F;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=S,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=A,y.mipInt.value=P-s;const L=this._sizeLods[l],z=3*L*(l>P-$a?l-P+$a:0),H=4*(this._cubeSize-L);Rr(i,z,H,3*L,2*L),m.setRenderTarget(i),m.render(v,zo)}}function vT(o){const t=[],i=[],s=[];let l=o;const c=o-$a+1+h0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>o-$a?m=h0[h-o+$a-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),x=-p,v=1+p,y=[x,x,v,x,v,v,x,x,v,v,x,v],E=6,A=6,C=3,M=2,S=1,F=new Float32Array(C*A*E),P=new Float32Array(M*A*E),L=new Float32Array(S*A*E);for(let H=0;H<E;H++){const I=H%3*2/3-1,Q=H>2?0:-1,R=[I,Q,0,I+2/3,Q,0,I+2/3,Q+1,0,I,Q,0,I+2/3,Q+1,0,I,Q+1,0];F.set(R,C*A*H),P.set(y,M*A*H);const D=[H,H,H,H,H,H];L.set(D,S*A*H)}const z=new Li;z.setAttribute("position",new Ui(F,C)),z.setAttribute("uv",new Ui(P,M)),z.setAttribute("faceIndex",new Ui(L,S)),s.push(new _i(z,null)),l>$a&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function m0(o,t,i){const s=new Di(o,t,i);return s.texture.mapping=qc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Rr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function xT(o,t,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function ST(o,t,i){const s=new Float32Array(Rs),l=new re(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jc(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function g0(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function _0(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function yT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Zh||m===Kh,x=m===Us||m===Ur;if(p||x){let v=t.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new p0(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const E=d.image;return p&&E&&E.height>0||x&&E&&l(E)?(i===null&&(i=new p0(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function MT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&qo("WebGLRenderer: "+s+" extension not supported."),l}}}function ET(o,t,i,s){const l={},c=new WeakMap;function h(v){const y=v.target;y.index!==null&&t.remove(y.index);for(const A in y.attributes)t.remove(y.attributes[A]);y.removeEventListener("dispose",h),delete l[y.id];const E=c.get(y);E&&(t.remove(E),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const E in y)t.update(y[E],o.ARRAY_BUFFER)}function p(v){const y=[],E=v.index,A=v.attributes.position;let C=0;if(E!==null){const F=E.array;C=E.version;for(let P=0,L=F.length;P<L;P+=3){const z=F[P+0],H=F[P+1],I=F[P+2];y.push(z,H,H,I,I,z)}}else if(A!==void 0){const F=A.array;C=A.version;for(let P=0,L=F.length/3-1;P<L;P+=3){const z=P+0,H=P+1,I=P+2;y.push(z,H,H,I,I,z)}}else return;const M=new(sv(y)?hv:fv)(y,1);M.version=C;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function x(v){const y=c.get(v);if(y){const E=v.index;E!==null&&y.version<E.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:x}}function bT(o,t,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,E){o.drawElements(s,E,c,y*h),i.update(E,s,1)}function p(y,E,A){A!==0&&(o.drawElementsInstanced(s,E,c,y*h,A),i.update(E,s,A))}function x(y,E,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,y,0,A);let M=0;for(let S=0;S<A;S++)M+=E[S];i.update(M,s,1)}function v(y,E,A,C){if(A===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<y.length;S++)p(y[S]/h,E[S],C[S]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,c,y,0,C,0,A);let S=0;for(let F=0;F<A;F++)S+=E[F]*C[F];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function TT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:wt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function AT(o,t,i){const s=new WeakMap,l=new en;function c(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let y=s.get(d);if(y===void 0||y.count!==v){let D=function(){Q.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var E=D;y!==void 0&&y.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let L=0;A===!0&&(L=1),C===!0&&(L=2),M===!0&&(L=3);let z=d.attributes.position.count*L,H=1;z>t.maxTextureSize&&(H=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const I=new Float32Array(z*H*4*v),Q=new rv(I,z,H,v);Q.type=wi,Q.needsUpdate=!0;const R=L*4;for(let X=0;X<v;X++){const oe=S[X],le=F[X],he=P[X],pe=z*H*4*X;for(let N=0;N<oe.count;N++){const G=N*R;A===!0&&(l.fromBufferAttribute(oe,N),I[pe+G+0]=l.x,I[pe+G+1]=l.y,I[pe+G+2]=l.z,I[pe+G+3]=0),C===!0&&(l.fromBufferAttribute(le,N),I[pe+G+4]=l.x,I[pe+G+5]=l.y,I[pe+G+6]=l.z,I[pe+G+7]=0),M===!0&&(l.fromBufferAttribute(he,N),I[pe+G+8]=l.x,I[pe+G+9]=l.y,I[pe+G+10]=l.z,I[pe+G+11]=he.itemSize===4?l.w:1)}}y={count:v,texture:Q,size:new ot(z,H)},s.set(d,y),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function RT(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,x=m.geometry,v=t.get(m,x);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const CT={[X0]:"LINEAR_TONE_MAPPING",[q0]:"REINHARD_TONE_MAPPING",[W0]:"CINEON_TONE_MAPPING",[j0]:"ACES_FILMIC_TONE_MAPPING",[Z0]:"AGX_TONE_MAPPING",[K0]:"NEUTRAL_TONE_MAPPING",[Y0]:"CUSTOM_TONE_MAPPING"};function wT(o,t,i,s,l){const c=new Di(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Di(t,i,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),d=new Li;d.setAttribute("position",new Ni([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ni([0,2,0,0,2,0],2));const m=new Go({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new _i(d,m),x=new xv(-1,1,1,-1,0,1);let v=null,y=null,E=!1,A,C=null,M=[],S=!1;this.setSize=function(F,P){c.setSize(F,P),h.setSize(F,P);for(let L=0;L<M.length;L++){const z=M[L];z.setSize&&z.setSize(F,P)}},this.setEffects=function(F){M=F,S=M.length>0&&M[0].isRenderPass===!0;const P=c.width,L=c.height;for(let z=0;z<M.length;z++){const H=M[z];H.setSize&&H.setSize(P,L)}},this.begin=function(F,P){if(E||F.toneMapping===Vi&&M.length===0)return!1;if(C=P,P!==null){const L=P.width,z=P.height;(c.width!==L||c.height!==z)&&this.setSize(L,z)}return S===!1&&F.setRenderTarget(c),A=F.toneMapping,F.toneMapping=Vi,!0},this.hasRenderPass=function(){return S},this.end=function(F,P){F.toneMapping=A,E=!0;let L=c,z=h;for(let H=0;H<M.length;H++){const I=M[H];if(I.enabled!==!1&&(I.render(F,z,L,P),I.needsSwap!==!1)){const Q=L;L=z,z=Q}}if(v!==F.outputColorSpace||y!==F.toneMapping){v=F.outputColorSpace,y=F.toneMapping,m.defines={},At.getTransfer(v)===Bt&&(m.defines.SRGB_TRANSFER="");const H=CT[y];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,F.setRenderTarget(C),F.render(p,x),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const yv=new In,Nd=new Wo(1,1),Mv=new rv,Ev=new $y,bv=new pv,v0=[],x0=[],S0=new Float32Array(16),y0=new Float32Array(9),M0=new Float32Array(4);function Fr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=v0[l];if(c===void 0&&(c=new Float32Array(l),v0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function mn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Yc(o,t){let i=x0[t];i===void 0&&(i=new Int32Array(t),x0[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function DT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function UT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function NT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function LT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function OT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;M0.set(s),o.uniformMatrix2fv(this.addr,!1,M0),gn(i,s)}}function PT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;y0.set(s),o.uniformMatrix3fv(this.addr,!1,y0),gn(i,s)}}function FT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;S0.set(s),o.uniformMatrix4fv(this.addr,!1,S0),gn(i,s)}}function IT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function zT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function BT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function HT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function GT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function VT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function kT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function XT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function qT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Nd.compareFunction=i.isReversedDepthBuffer()?qd:Xd,c=Nd):c=yv,i.setTexture2D(t||c,l)}function WT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Ev,l)}function jT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||bv,l)}function YT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Mv,l)}function ZT(o){switch(o){case 5126:return DT;case 35664:return UT;case 35665:return NT;case 35666:return LT;case 35674:return OT;case 35675:return PT;case 35676:return FT;case 5124:case 35670:return IT;case 35667:case 35671:return zT;case 35668:case 35672:return BT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return VT;case 36295:return kT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return YT}}function KT(o,t){o.uniform1fv(this.addr,t)}function QT(o,t){const i=Fr(t,this.size,2);o.uniform2fv(this.addr,i)}function JT(o,t){const i=Fr(t,this.size,3);o.uniform3fv(this.addr,i)}function $T(o,t){const i=Fr(t,this.size,4);o.uniform4fv(this.addr,i)}function eA(o,t){const i=Fr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function tA(o,t){const i=Fr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function nA(o,t){const i=Fr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function iA(o,t){o.uniform1iv(this.addr,t)}function aA(o,t){o.uniform2iv(this.addr,t)}function sA(o,t){o.uniform3iv(this.addr,t)}function rA(o,t){o.uniform4iv(this.addr,t)}function oA(o,t){o.uniform1uiv(this.addr,t)}function lA(o,t){o.uniform2uiv(this.addr,t)}function cA(o,t){o.uniform3uiv(this.addr,t)}function uA(o,t){o.uniform4uiv(this.addr,t)}function fA(o,t,i){const s=this.cache,l=t.length,c=Yc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Nd:h=yv;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function hA(o,t,i){const s=this.cache,l=t.length,c=Yc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Ev,c[h])}function dA(o,t,i){const s=this.cache,l=t.length,c=Yc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||bv,c[h])}function pA(o,t,i){const s=this.cache,l=t.length,c=Yc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Mv,c[h])}function mA(o){switch(o){case 5126:return KT;case 35664:return QT;case 35665:return JT;case 35666:return $T;case 35674:return eA;case 35675:return tA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return aA;case 35668:case 35672:return sA;case 35669:case 35673:return rA;case 5125:return oA;case 36294:return lA;case 36295:return cA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return pA}}class gA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=ZT(i.type)}}class _A{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mA(i.type)}}class vA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Ih=/(\w+)(\])?(\[|\.)?/g;function E0(o,t){o.seq.push(t),o.map[t.id]=t}function xA(o,t,i){const s=o.name,l=s.length;for(Ih.lastIndex=0;;){const c=Ih.exec(s),h=Ih.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){E0(i,p===void 0?new gA(d,o,t):new _A(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new vA(d),E0(i,v)),i=v}}}class zc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);xA(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function b0(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const SA=37297;let yA=0;function MA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const T0=new ft;function EA(o){At._getMatrix(T0,At.workingColorSpace,o);const t=`mat3( ${T0.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(o)){case Bc:return[t,"LinearTransferOETF"];case Bt:return[t,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function A0(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+MA(o.getShaderSource(t),d)}else return c}function bA(o,t){const i=EA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const TA={[X0]:"Linear",[q0]:"Reinhard",[W0]:"Cineon",[j0]:"ACESFilmic",[Z0]:"AgX",[K0]:"Neutral",[Y0]:"Custom"};function AA(o,t){const i=TA[t];return i===void 0?(it("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nc=new re;function RA(){At.getLuminanceCoefficients(Nc);const o=Nc.x.toFixed(4),t=Nc.y.toFixed(4),i=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function wA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function DA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Vo(o){return o!==""}function R0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function C0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const UA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(o){return o.replace(UA,LA)}const NA=new Map;function LA(o,t){let i=ht[t];if(i===void 0){const s=NA.get(t);if(s!==void 0)i=ht[s],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ld(i)}const OA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w0(o){return o.replace(OA,PA)}function PA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function D0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const FA={[Lc]:"SHADOWMAP_TYPE_PCF",[Ho]:"SHADOWMAP_TYPE_VSM"};function IA(o){return FA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zA={[Us]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE",[qc]:"ENVMAP_TYPE_CUBE_UV"};function BA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":zA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const HA={[Ur]:"ENVMAP_MODE_REFRACTION"};function GA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":HA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VA={[k0]:"ENVMAP_BLENDING_MULTIPLY",[Ly]:"ENVMAP_BLENDING_MIX",[Oy]:"ENVMAP_BLENDING_ADD"};function kA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":VA[o.combine]||"ENVMAP_BLENDING_NONE"}function XA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function qA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=IA(i),p=BA(i),x=GA(i),v=kA(i),y=XA(i),E=CA(i),A=wA(c),C=l.createProgram();let M,S,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Vo).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Vo).join(`
`),S.length>0&&(S+=`
`)):(M=[D0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),S=[D0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?ht.tonemapping_pars_fragment:"",i.toneMapping!==Vi?AA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,bA("linearToOutputTexel",i.outputColorSpace),RA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),h=Ld(h),h=R0(h,i),h=C0(h,i),d=Ld(d),d=R0(d,i),d=C0(d,i),h=w0(h),d=w0(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===G_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===G_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=F+M+h,L=F+S+d,z=b0(l,l.VERTEX_SHADER,P),H=b0(l,l.FRAGMENT_SHADER,L);l.attachShader(C,z),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(X){if(o.debug.checkShaderErrors){const oe=l.getProgramInfoLog(C)||"",le=l.getShaderInfoLog(z)||"",he=l.getShaderInfoLog(H)||"",pe=oe.trim(),N=le.trim(),G=he.trim();let ee=!0,ye=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ee=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,z,H);else{const Se=A0(l,z,"vertex"),U=A0(l,H,"fragment");wt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+pe+`
`+Se+`
`+U)}else pe!==""?it("WebGLProgram: Program Info Log:",pe):(N===""||G==="")&&(ye=!1);ye&&(X.diagnostics={runnable:ee,programLog:pe,vertexShader:{log:N,prefix:M},fragmentShader:{log:G,prefix:S}})}l.deleteShader(z),l.deleteShader(H),Q=new zc(l,C),R=DA(l,C)}let Q;this.getUniforms=function(){return Q===void 0&&I(this),Q};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(C,SA)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yA++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=H,this}let WA=0;class jA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new YA(t),i.set(t,s)),s}}class YA{constructor(t){this.id=WA++,this.code=t,this.usedTimes=0}}function ZA(o,t,i,s,l,c,h){const d=new lv,m=new jA,p=new Set,x=[],v=new Map,y=l.logarithmicDepthBuffer;let E=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,D,X,oe,le){const he=oe.fog,pe=le.geometry,N=R.isMeshStandardMaterial?oe.environment:null,G=(R.isMeshStandardMaterial?i:t).get(R.envMap||N),ee=G&&G.mapping===qc?G.image.height:null,ye=A[R.type];R.precision!==null&&(E=l.getMaxPrecision(R.precision),E!==R.precision&&it("WebGLProgram.getParameters:",R.precision,"not supported, using",E,"instead."));const Se=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,U=Se!==void 0?Se.length:0;let ie=0;pe.morphAttributes.position!==void 0&&(ie=1),pe.morphAttributes.normal!==void 0&&(ie=2),pe.morphAttributes.color!==void 0&&(ie=3);let _e,Ae,Be,te;if(ye){const Tt=Hi[ye];_e=Tt.vertexShader,Ae=Tt.fragmentShader}else _e=R.vertexShader,Ae=R.fragmentShader,m.update(R),Be=m.getVertexShaderID(R),te=m.getFragmentShaderID(R);const de=o.getRenderTarget(),Re=o.state.buffers.depth.getReversed(),ke=le.isInstancedMesh===!0,Ge=le.isBatchedMesh===!0,dt=!!R.map,Yt=!!R.matcap,mt=!!G,pt=!!R.aoMap,Et=!!R.lightMap,at=!!R.bumpMap,Zt=!!R.normalMap,V=!!R.displacementMap,kt=!!R.emissiveMap,St=!!R.metalnessMap,bt=!!R.roughnessMap,We=R.anisotropy>0,w=R.clearcoat>0,g=R.dispersion>0,O=R.iridescence>0,Z=R.sheen>0,fe=R.transmission>0,ne=We&&!!R.anisotropyMap,Pe=w&&!!R.clearcoatMap,Ce=w&&!!R.clearcoatNormalMap,Ve=w&&!!R.clearcoatRoughnessMap,Je=O&&!!R.iridescenceMap,Ee=O&&!!R.iridescenceThicknessMap,be=Z&&!!R.sheenColorMap,ze=Z&&!!R.sheenRoughnessMap,Fe=!!R.specularMap,De=!!R.specularColorMap,ct=!!R.specularIntensityMap,W=fe&&!!R.transmissionMap,Ne=fe&&!!R.thicknessMap,Te=!!R.gradientMap,Ie=!!R.alphaMap,Me=R.alphaTest>0,xe=!!R.alphaHash,we=!!R.extensions;let nt=Vi;R.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(nt=o.toneMapping);const Pt={shaderID:ye,shaderType:R.type,shaderName:R.name,vertexShader:_e,fragmentShader:Ae,defines:R.defines,customVertexShaderID:Be,customFragmentShaderID:te,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:E,batching:Ge,batchingColor:Ge&&le._colorsTexture!==null,instancing:ke,instancingColor:ke&&le.instanceColor!==null,instancingMorph:ke&&le.morphTexture!==null,outputColorSpace:de===null?o.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Lr,alphaToCoverage:!!R.alphaToCoverage,map:dt,matcap:Yt,envMap:mt,envMapMode:mt&&G.mapping,envMapCubeUVHeight:ee,aoMap:pt,lightMap:Et,bumpMap:at,normalMap:Zt,displacementMap:V,emissiveMap:kt,normalMapObjectSpace:Zt&&R.normalMapType===zy,normalMapTangentSpace:Zt&&R.normalMapType===Iy,metalnessMap:St,roughnessMap:bt,anisotropy:We,anisotropyMap:ne,clearcoat:w,clearcoatMap:Pe,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ve,dispersion:g,iridescence:O,iridescenceMap:Je,iridescenceThicknessMap:Ee,sheen:Z,sheenColorMap:be,sheenRoughnessMap:ze,specularMap:Fe,specularColorMap:De,specularIntensityMap:ct,transmission:fe,transmissionMap:W,thicknessMap:Ne,gradientMap:Te,opaque:R.transparent===!1&&R.blending===Cr&&R.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Me,alphaHash:xe,combine:R.combine,mapUv:dt&&C(R.map.channel),aoMapUv:pt&&C(R.aoMap.channel),lightMapUv:Et&&C(R.lightMap.channel),bumpMapUv:at&&C(R.bumpMap.channel),normalMapUv:Zt&&C(R.normalMap.channel),displacementMapUv:V&&C(R.displacementMap.channel),emissiveMapUv:kt&&C(R.emissiveMap.channel),metalnessMapUv:St&&C(R.metalnessMap.channel),roughnessMapUv:bt&&C(R.roughnessMap.channel),anisotropyMapUv:ne&&C(R.anisotropyMap.channel),clearcoatMapUv:Pe&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:be&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:ze&&C(R.sheenRoughnessMap.channel),specularMapUv:Fe&&C(R.specularMap.channel),specularColorMapUv:De&&C(R.specularColorMap.channel),specularIntensityMapUv:ct&&C(R.specularIntensityMap.channel),transmissionMapUv:W&&C(R.transmissionMap.channel),thicknessMapUv:Ne&&C(R.thicknessMap.channel),alphaMapUv:Ie&&C(R.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(Zt||We),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!pe.attributes.uv&&(dt||Ie),fog:!!he,useFog:R.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Re,skinning:le.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:nt,decodeVideoTexture:dt&&R.map.isVideoTexture===!0&&At.getTransfer(R.map.colorSpace)===Bt,decodeVideoTextureEmissive:kt&&R.emissiveMap.isVideoTexture===!0&&At.getTransfer(R.emissiveMap.colorSpace)===Bt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ma,flipSided:R.side===qn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:we&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&R.extensions.multiDraw===!0||Ge)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function S(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const X in R.defines)D.push(X),D.push(R.defines[X]);return R.isRawShaderMaterial===!1&&(F(D,R),P(D,R),D.push(o.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function F(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function P(R,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),R.push(d.mask)}function L(R){const D=A[R.type];let X;if(D){const oe=Hi[D];X=hM.clone(oe.uniforms)}else X=R.uniforms;return X}function z(R,D){let X=v.get(D);return X!==void 0?++X.usedTimes:(X=new qA(o,D,R,c),x.push(X),v.set(D,X)),X}function H(R){if(--R.usedTimes===0){const D=x.indexOf(R);x[D]=x[x.length-1],x.pop(),v.delete(R.cacheKey),R.destroy()}}function I(R){m.remove(R)}function Q(){m.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:L,acquireProgram:z,releaseProgram:H,releaseShaderCache:I,programs:x,dispose:Q}}function KA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function QA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function U0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function N0(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(v,y,E,A,C,M){let S=o[t];return S===void 0?(S={id:v.id,object:v,geometry:y,material:E,groupOrder:A,renderOrder:v.renderOrder,z:C,group:M},o[t]=S):(S.id=v.id,S.object=v,S.geometry=y,S.material=E,S.groupOrder=A,S.renderOrder=v.renderOrder,S.z=C,S.group=M),t++,S}function d(v,y,E,A,C,M){const S=h(v,y,E,A,C,M);E.transmission>0?s.push(S):E.transparent===!0?l.push(S):i.push(S)}function m(v,y,E,A,C,M){const S=h(v,y,E,A,C,M);E.transmission>0?s.unshift(S):E.transparent===!0?l.unshift(S):i.unshift(S)}function p(v,y){i.length>1&&i.sort(v||QA),s.length>1&&s.sort(y||U0),l.length>1&&l.sort(y||U0)}function x(){for(let v=t,y=o.length;v<y;v++){const E=o[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:x,sort:p}}function JA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new N0,o.set(s,[h])):l>=c.length?(h=new N0,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function $A(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new Lt};break;case"SpotLight":i={position:new re,direction:new re,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function e1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let t1=0;function n1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function i1(o){const t=new $A,i=e1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new re);const l=new re,c=new an,h=new an;function d(p){let x=0,v=0,y=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let E=0,A=0,C=0,M=0,S=0,F=0,P=0,L=0,z=0,H=0,I=0;p.sort(n1);for(let R=0,D=p.length;R<D;R++){const X=p[R],oe=X.color,le=X.intensity,he=X.distance;let pe=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Nr?pe=X.shadow.map.texture:pe=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)x+=oe.r*le,v+=oe.g*le,y+=oe.b*le;else if(X.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(X.sh.coefficients[N],le);I++}else if(X.isDirectionalLight){const N=t.get(X);if(N.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const G=X.shadow,ee=i.get(X);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,s.directionalShadow[E]=ee,s.directionalShadowMap[E]=pe,s.directionalShadowMatrix[E]=X.shadow.matrix,F++}s.directional[E]=N,E++}else if(X.isSpotLight){const N=t.get(X);N.position.setFromMatrixPosition(X.matrixWorld),N.color.copy(oe).multiplyScalar(le),N.distance=he,N.coneCos=Math.cos(X.angle),N.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),N.decay=X.decay,s.spot[C]=N;const G=X.shadow;if(X.map&&(s.spotLightMap[z]=X.map,z++,G.updateMatrices(X),X.castShadow&&H++),s.spotLightMatrix[C]=G.matrix,X.castShadow){const ee=i.get(X);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,s.spotShadow[C]=ee,s.spotShadowMap[C]=pe,L++}C++}else if(X.isRectAreaLight){const N=t.get(X);N.color.copy(oe).multiplyScalar(le),N.halfWidth.set(X.width*.5,0,0),N.halfHeight.set(0,X.height*.5,0),s.rectArea[M]=N,M++}else if(X.isPointLight){const N=t.get(X);if(N.color.copy(X.color).multiplyScalar(X.intensity),N.distance=X.distance,N.decay=X.decay,X.castShadow){const G=X.shadow,ee=i.get(X);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,ee.shadowCameraNear=G.camera.near,ee.shadowCameraFar=G.camera.far,s.pointShadow[A]=ee,s.pointShadowMap[A]=pe,s.pointShadowMatrix[A]=X.shadow.matrix,P++}s.point[A]=N,A++}else if(X.isHemisphereLight){const N=t.get(X);N.skyColor.copy(X.color).multiplyScalar(le),N.groundColor.copy(X.groundColor).multiplyScalar(le),s.hemi[S]=N,S++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=y;const Q=s.hash;(Q.directionalLength!==E||Q.pointLength!==A||Q.spotLength!==C||Q.rectAreaLength!==M||Q.hemiLength!==S||Q.numDirectionalShadows!==F||Q.numPointShadows!==P||Q.numSpotShadows!==L||Q.numSpotMaps!==z||Q.numLightProbes!==I)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=M,s.point.length=A,s.hemi.length=S,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=L+z-H,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=I,Q.directionalLength=E,Q.pointLength=A,Q.spotLength=C,Q.rectAreaLength=M,Q.hemiLength=S,Q.numDirectionalShadows=F,Q.numPointShadows=P,Q.numSpotShadows=L,Q.numSpotMaps=z,Q.numLightProbes=I,s.version=t1++)}function m(p,x){let v=0,y=0,E=0,A=0,C=0;const M=x.matrixWorldInverse;for(let S=0,F=p.length;S<F;S++){const P=p[S];if(P.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),v++}else if(P.isSpotLight){const L=s.spot[E];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),E++}else if(P.isRectAreaLight){const L=s.rectArea[A];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),h.identity(),c.copy(P.matrixWorld),c.premultiply(M),h.extractRotation(c),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),A++}else if(P.isPointLight){const L=s.point[y];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(M),y++}else if(P.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:s}}function L0(o){const t=new i1(o),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function h(x){s.push(x)}function d(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function a1(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new L0(o),t.set(l,[d])):c>=h.length?(d=new L0(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r1=`uniform sampler2D shadow_pass;
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
}`,o1=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],l1=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],O0=new an,Bo=new re,zh=new re;function c1(o,t,i){let s=new _v;const l=new ot,c=new ot,h=new en,d=new bM,m=new TM,p={},x=i.maxTextureSize,v={[es]:qn,[qn]:es,[ma]:ma},y=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:s1,fragmentShader:r1}),E=y.clone();E.defines.HORIZONTAL_PASS=1;const A=new Li;A.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new _i(A,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let S=this.type;this.render=function(H,I,Q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;H.type===py&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=Lc);const R=o.getRenderTarget(),D=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),oe=o.state;oe.setBlending(ga),oe.buffers.depth.getReversed()===!0?oe.buffers.color.setClear(0,0,0,0):oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const le=S!==this.type;le&&I.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(pe=>pe.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,pe=H.length;he<pe;he++){const N=H[he],G=N.shadow;if(G===void 0){it("WebGLShadowMap:",N,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ee=G.getFrameExtents();if(l.multiply(ee),c.copy(G.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ee.x),l.x=c.x*ee.x,G.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ee.y),l.y=c.y*ee.y,G.mapSize.y=c.y)),G.map===null||le===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ho){if(N.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Di(l.x,l.y,{format:Nr,type:Xi,minFilter:fn,magFilter:fn,generateMipmaps:!1}),G.map.texture.name=N.name+".shadowMap",G.map.depthTexture=new Wo(l.x,l.y,wi),G.map.depthTexture.name=N.name+".shadowMapDepth",G.map.depthTexture.format=va,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn}else{N.isPointLight?(G.map=new mv(l.x),G.map.depthTexture=new EM(l.x,ki)):(G.map=new Di(l.x,l.y),G.map.depthTexture=new Wo(l.x,l.y,ki)),G.map.depthTexture.name=N.name+".shadowMap",G.map.depthTexture.format=va;const Se=o.state.buffers.depth.getReversed();this.type===Lc?(G.map.depthTexture.compareFunction=Se?qd:Xd,G.map.depthTexture.minFilter=fn,G.map.depthTexture.magFilter=fn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn)}G.camera.updateProjectionMatrix()}const ye=G.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<ye;Se++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,Se),o.clear();else{Se===0&&(o.setRenderTarget(G.map),o.clear());const U=G.getViewport(Se);h.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),oe.viewport(h)}if(N.isPointLight){const U=G.camera,ie=G.matrix,_e=N.distance||U.far;_e!==U.far&&(U.far=_e,U.updateProjectionMatrix()),Bo.setFromMatrixPosition(N.matrixWorld),U.position.copy(Bo),zh.copy(U.position),zh.add(o1[Se]),U.up.copy(l1[Se]),U.lookAt(zh),U.updateMatrixWorld(),ie.makeTranslation(-Bo.x,-Bo.y,-Bo.z),O0.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G._frustum.setFromProjectionMatrix(O0,U.coordinateSystem,U.reversedDepth)}else G.updateMatrices(N);s=G.getFrustum(),L(I,Q,G.camera,N,this.type)}G.isPointLightShadow!==!0&&this.type===Ho&&F(G,Q),G.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(R,D,X)};function F(H,I){const Q=t.update(C);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Di(l.x,l.y,{format:Nr,type:Xi})),y.uniforms.shadow_pass.value=H.map.depthTexture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(I,null,Q,y,C,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(I,null,Q,E,C,null)}function P(H,I,Q,R){let D=null;const X=Q.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(X!==void 0)D=X;else if(D=Q.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const oe=D.uuid,le=I.uuid;let he=p[oe];he===void 0&&(he={},p[oe]=he);let pe=he[le];pe===void 0&&(pe=D.clone(),he[le]=pe,I.addEventListener("dispose",z)),D=pe}if(D.visible=I.visible,D.wireframe=I.wireframe,R===Ho?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:v[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,Q.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const oe=o.properties.get(D);oe.light=Q}return D}function L(H,I,Q,R,D){if(H.visible===!1)return;if(H.layers.test(I.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&D===Ho)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,H.matrixWorld);const le=t.update(H),he=H.material;if(Array.isArray(he)){const pe=le.groups;for(let N=0,G=pe.length;N<G;N++){const ee=pe[N],ye=he[ee.materialIndex];if(ye&&ye.visible){const Se=P(H,ye,R,D);H.onBeforeShadow(o,H,I,Q,le,Se,ee),o.renderBufferDirect(Q,null,le,Se,H,ee),H.onAfterShadow(o,H,I,Q,le,Se,ee)}}}else if(he.visible){const pe=P(H,he,R,D);H.onBeforeShadow(o,H,I,Q,le,pe,null),o.renderBufferDirect(Q,null,le,pe,H,null),H.onAfterShadow(o,H,I,Q,le,pe,null)}}const oe=H.children;for(let le=0,he=oe.length;le<he;le++)L(oe[le],I,Q,R,D)}function z(H){H.target.removeEventListener("dispose",z);for(const Q in p){const R=p[Q],D=H.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}const u1={[Vh]:kh,[Xh]:jh,[qh]:Yh,[Dr]:Wh,[kh]:Vh,[jh]:Xh,[Yh]:qh,[Wh]:Dr};function f1(o,t){function i(){let W=!1;const Ne=new en;let Te=null;const Ie=new en(0,0,0,0);return{setMask:function(Me){Te!==Me&&!W&&(o.colorMask(Me,Me,Me,Me),Te=Me)},setLocked:function(Me){W=Me},setClear:function(Me,xe,we,nt,Pt){Pt===!0&&(Me*=nt,xe*=nt,we*=nt),Ne.set(Me,xe,we,nt),Ie.equals(Ne)===!1&&(o.clearColor(Me,xe,we,nt),Ie.copy(Ne))},reset:function(){W=!1,Te=null,Ie.set(-1,0,0,0)}}}function s(){let W=!1,Ne=!1,Te=null,Ie=null,Me=null;return{setReversed:function(xe){if(Ne!==xe){const we=t.get("EXT_clip_control");xe?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Ne=xe;const nt=Me;Me=null,this.setClear(nt)}},getReversed:function(){return Ne},setTest:function(xe){xe?de(o.DEPTH_TEST):Re(o.DEPTH_TEST)},setMask:function(xe){Te!==xe&&!W&&(o.depthMask(xe),Te=xe)},setFunc:function(xe){if(Ne&&(xe=u1[xe]),Ie!==xe){switch(xe){case Vh:o.depthFunc(o.NEVER);break;case kh:o.depthFunc(o.ALWAYS);break;case Xh:o.depthFunc(o.LESS);break;case Dr:o.depthFunc(o.LEQUAL);break;case qh:o.depthFunc(o.EQUAL);break;case Wh:o.depthFunc(o.GEQUAL);break;case jh:o.depthFunc(o.GREATER);break;case Yh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ie=xe}},setLocked:function(xe){W=xe},setClear:function(xe){Me!==xe&&(Ne&&(xe=1-xe),o.clearDepth(xe),Me=xe)},reset:function(){W=!1,Te=null,Ie=null,Me=null,Ne=!1}}}function l(){let W=!1,Ne=null,Te=null,Ie=null,Me=null,xe=null,we=null,nt=null,Pt=null;return{setTest:function(Tt){W||(Tt?de(o.STENCIL_TEST):Re(o.STENCIL_TEST))},setMask:function(Tt){Ne!==Tt&&!W&&(o.stencilMask(Tt),Ne=Tt)},setFunc:function(Tt,Un,vi){(Te!==Tt||Ie!==Un||Me!==vi)&&(o.stencilFunc(Tt,Un,vi),Te=Tt,Ie=Un,Me=vi)},setOp:function(Tt,Un,vi){(xe!==Tt||we!==Un||nt!==vi)&&(o.stencilOp(Tt,Un,vi),xe=Tt,we=Un,nt=vi)},setLocked:function(Tt){W=Tt},setClear:function(Tt){Pt!==Tt&&(o.clearStencil(Tt),Pt=Tt)},reset:function(){W=!1,Ne=null,Te=null,Ie=null,Me=null,xe=null,we=null,nt=null,Pt=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let x={},v={},y=new WeakMap,E=[],A=null,C=!1,M=null,S=null,F=null,P=null,L=null,z=null,H=null,I=new Lt(0,0,0),Q=0,R=!1,D=null,X=null,oe=null,le=null,he=null;const pe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,G=0;const ee=o.getParameter(o.VERSION);ee.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ee)[1]),N=G>=1):ee.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),N=G>=2);let ye=null,Se={};const U=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),_e=new en().fromArray(U),Ae=new en().fromArray(ie);function Be(W,Ne,Te,Ie){const Me=new Uint8Array(4),xe=o.createTexture();o.bindTexture(W,xe),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let we=0;we<Te;we++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,Me):o.texImage2D(Ne+we,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Me);return xe}const te={};te[o.TEXTURE_2D]=Be(o.TEXTURE_2D,o.TEXTURE_2D,1),te[o.TEXTURE_CUBE_MAP]=Be(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[o.TEXTURE_2D_ARRAY]=Be(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),te[o.TEXTURE_3D]=Be(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),de(o.DEPTH_TEST),h.setFunc(Dr),at(!1),Zt(F_),de(o.CULL_FACE),pt(ga);function de(W){x[W]!==!0&&(o.enable(W),x[W]=!0)}function Re(W){x[W]!==!1&&(o.disable(W),x[W]=!1)}function ke(W,Ne){return v[W]!==Ne?(o.bindFramebuffer(W,Ne),v[W]=Ne,W===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ne),W===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ge(W,Ne){let Te=E,Ie=!1;if(W){Te=y.get(Ne),Te===void 0&&(Te=[],y.set(Ne,Te));const Me=W.textures;if(Te.length!==Me.length||Te[0]!==o.COLOR_ATTACHMENT0){for(let xe=0,we=Me.length;xe<we;xe++)Te[xe]=o.COLOR_ATTACHMENT0+xe;Te.length=Me.length,Ie=!0}}else Te[0]!==o.BACK&&(Te[0]=o.BACK,Ie=!0);Ie&&o.drawBuffers(Te)}function dt(W){return A!==W?(o.useProgram(W),A=W,!0):!1}const Yt={[As]:o.FUNC_ADD,[gy]:o.FUNC_SUBTRACT,[_y]:o.FUNC_REVERSE_SUBTRACT};Yt[vy]=o.MIN,Yt[xy]=o.MAX;const mt={[Sy]:o.ZERO,[yy]:o.ONE,[My]:o.SRC_COLOR,[Hh]:o.SRC_ALPHA,[Cy]:o.SRC_ALPHA_SATURATE,[Ay]:o.DST_COLOR,[by]:o.DST_ALPHA,[Ey]:o.ONE_MINUS_SRC_COLOR,[Gh]:o.ONE_MINUS_SRC_ALPHA,[Ry]:o.ONE_MINUS_DST_COLOR,[Ty]:o.ONE_MINUS_DST_ALPHA,[wy]:o.CONSTANT_COLOR,[Dy]:o.ONE_MINUS_CONSTANT_COLOR,[Uy]:o.CONSTANT_ALPHA,[Ny]:o.ONE_MINUS_CONSTANT_ALPHA};function pt(W,Ne,Te,Ie,Me,xe,we,nt,Pt,Tt){if(W===ga){C===!0&&(Re(o.BLEND),C=!1);return}if(C===!1&&(de(o.BLEND),C=!0),W!==my){if(W!==M||Tt!==R){if((S!==As||L!==As)&&(o.blendEquation(o.FUNC_ADD),S=As,L=As),Tt)switch(W){case Cr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Bh:o.blendFunc(o.ONE,o.ONE);break;case I_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case z_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:wt("WebGLState: Invalid blending: ",W);break}else switch(W){case Cr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Bh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case I_:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z_:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",W);break}F=null,P=null,z=null,H=null,I.set(0,0,0),Q=0,M=W,R=Tt}return}Me=Me||Ne,xe=xe||Te,we=we||Ie,(Ne!==S||Me!==L)&&(o.blendEquationSeparate(Yt[Ne],Yt[Me]),S=Ne,L=Me),(Te!==F||Ie!==P||xe!==z||we!==H)&&(o.blendFuncSeparate(mt[Te],mt[Ie],mt[xe],mt[we]),F=Te,P=Ie,z=xe,H=we),(nt.equals(I)===!1||Pt!==Q)&&(o.blendColor(nt.r,nt.g,nt.b,Pt),I.copy(nt),Q=Pt),M=W,R=!1}function Et(W,Ne){W.side===ma?Re(o.CULL_FACE):de(o.CULL_FACE);let Te=W.side===qn;Ne&&(Te=!Te),at(Te),W.blending===Cr&&W.transparent===!1?pt(ga):pt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ie=W.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),kt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(o.SAMPLE_ALPHA_TO_COVERAGE):Re(o.SAMPLE_ALPHA_TO_COVERAGE)}function at(W){D!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),D=W)}function Zt(W){W!==hy?(de(o.CULL_FACE),W!==X&&(W===F_?o.cullFace(o.BACK):W===dy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Re(o.CULL_FACE),X=W}function V(W){W!==oe&&(N&&o.lineWidth(W),oe=W)}function kt(W,Ne,Te){W?(de(o.POLYGON_OFFSET_FILL),(le!==Ne||he!==Te)&&(o.polygonOffset(Ne,Te),le=Ne,he=Te)):Re(o.POLYGON_OFFSET_FILL)}function St(W){W?de(o.SCISSOR_TEST):Re(o.SCISSOR_TEST)}function bt(W){W===void 0&&(W=o.TEXTURE0+pe-1),ye!==W&&(o.activeTexture(W),ye=W)}function We(W,Ne,Te){Te===void 0&&(ye===null?Te=o.TEXTURE0+pe-1:Te=ye);let Ie=Se[Te];Ie===void 0&&(Ie={type:void 0,texture:void 0},Se[Te]=Ie),(Ie.type!==W||Ie.texture!==Ne)&&(ye!==Te&&(o.activeTexture(Te),ye=Te),o.bindTexture(W,Ne||te[W]),Ie.type=W,Ie.texture=Ne)}function w(){const W=Se[ye];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function g(){try{o.compressedTexImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function O(){try{o.compressedTexImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Z(){try{o.texSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function fe(){try{o.texSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function ne(){try{o.compressedTexSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Pe(){try{o.compressedTexSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ce(){try{o.texStorage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ve(){try{o.texStorage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Je(){try{o.texImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ee(){try{o.texImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function be(W){_e.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),_e.copy(W))}function ze(W){Ae.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Ae.copy(W))}function Fe(W,Ne){let Te=p.get(Ne);Te===void 0&&(Te=new WeakMap,p.set(Ne,Te));let Ie=Te.get(W);Ie===void 0&&(Ie=o.getUniformBlockIndex(Ne,W.name),Te.set(W,Ie))}function De(W,Ne){const Ie=p.get(Ne).get(W);m.get(Ne)!==Ie&&(o.uniformBlockBinding(Ne,Ie,W.__bindingPointIndex),m.set(Ne,Ie))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},ye=null,Se={},v={},y=new WeakMap,E=[],A=null,C=!1,M=null,S=null,F=null,P=null,L=null,z=null,H=null,I=new Lt(0,0,0),Q=0,R=!1,D=null,X=null,oe=null,le=null,he=null,_e.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:de,disable:Re,bindFramebuffer:ke,drawBuffers:Ge,useProgram:dt,setBlending:pt,setMaterial:Et,setFlipSided:at,setCullFace:Zt,setLineWidth:V,setPolygonOffset:kt,setScissorTest:St,activeTexture:bt,bindTexture:We,unbindTexture:w,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:Je,texImage3D:Ee,updateUBOMapping:Fe,uniformBlockBinding:De,texStorage2D:Ce,texStorage3D:Ve,texSubImage2D:Z,texSubImage3D:fe,compressedTexSubImage2D:ne,compressedTexSubImage3D:Pe,scissor:be,viewport:ze,reset:ct}}function h1(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ot,x=new WeakMap;let v;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,g){return E?new OffscreenCanvas(w,g):Gc("canvas")}function C(w,g,O){let Z=1;const fe=We(w);if((fe.width>O||fe.height>O)&&(Z=O/Math.max(fe.width,fe.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ne=Math.floor(Z*fe.width),Pe=Math.floor(Z*fe.height);v===void 0&&(v=A(ne,Pe));const Ce=g?A(ne,Pe):v;return Ce.width=ne,Ce.height=Pe,Ce.getContext("2d").drawImage(w,0,0,ne,Pe),it("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ne+"x"+Pe+")."),Ce}else return"data"in w&&it("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),w;return w}function M(w){return w.generateMipmaps}function S(w){o.generateMipmap(w)}function F(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(w,g,O,Z,fe=!1){if(w!==null){if(o[w]!==void 0)return o[w];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ne=g;if(g===o.RED&&(O===o.FLOAT&&(ne=o.R32F),O===o.HALF_FLOAT&&(ne=o.R16F),O===o.UNSIGNED_BYTE&&(ne=o.R8)),g===o.RED_INTEGER&&(O===o.UNSIGNED_BYTE&&(ne=o.R8UI),O===o.UNSIGNED_SHORT&&(ne=o.R16UI),O===o.UNSIGNED_INT&&(ne=o.R32UI),O===o.BYTE&&(ne=o.R8I),O===o.SHORT&&(ne=o.R16I),O===o.INT&&(ne=o.R32I)),g===o.RG&&(O===o.FLOAT&&(ne=o.RG32F),O===o.HALF_FLOAT&&(ne=o.RG16F),O===o.UNSIGNED_BYTE&&(ne=o.RG8)),g===o.RG_INTEGER&&(O===o.UNSIGNED_BYTE&&(ne=o.RG8UI),O===o.UNSIGNED_SHORT&&(ne=o.RG16UI),O===o.UNSIGNED_INT&&(ne=o.RG32UI),O===o.BYTE&&(ne=o.RG8I),O===o.SHORT&&(ne=o.RG16I),O===o.INT&&(ne=o.RG32I)),g===o.RGB_INTEGER&&(O===o.UNSIGNED_BYTE&&(ne=o.RGB8UI),O===o.UNSIGNED_SHORT&&(ne=o.RGB16UI),O===o.UNSIGNED_INT&&(ne=o.RGB32UI),O===o.BYTE&&(ne=o.RGB8I),O===o.SHORT&&(ne=o.RGB16I),O===o.INT&&(ne=o.RGB32I)),g===o.RGBA_INTEGER&&(O===o.UNSIGNED_BYTE&&(ne=o.RGBA8UI),O===o.UNSIGNED_SHORT&&(ne=o.RGBA16UI),O===o.UNSIGNED_INT&&(ne=o.RGBA32UI),O===o.BYTE&&(ne=o.RGBA8I),O===o.SHORT&&(ne=o.RGBA16I),O===o.INT&&(ne=o.RGBA32I)),g===o.RGB&&(O===o.UNSIGNED_INT_5_9_9_9_REV&&(ne=o.RGB9_E5),O===o.UNSIGNED_INT_10F_11F_11F_REV&&(ne=o.R11F_G11F_B10F)),g===o.RGBA){const Pe=fe?Bc:At.getTransfer(Z);O===o.FLOAT&&(ne=o.RGBA32F),O===o.HALF_FLOAT&&(ne=o.RGBA16F),O===o.UNSIGNED_BYTE&&(ne=Pe===Bt?o.SRGB8_ALPHA8:o.RGBA8),O===o.UNSIGNED_SHORT_4_4_4_4&&(ne=o.RGBA4),O===o.UNSIGNED_SHORT_5_5_5_1&&(ne=o.RGB5_A1)}return(ne===o.R16F||ne===o.R32F||ne===o.RG16F||ne===o.RG32F||ne===o.RGBA16F||ne===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ne}function L(w,g){let O;return w?g===null||g===ki||g===Xo?O=o.DEPTH24_STENCIL8:g===wi?O=o.DEPTH32F_STENCIL8:g===ko&&(O=o.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ki||g===Xo?O=o.DEPTH_COMPONENT24:g===wi?O=o.DEPTH_COMPONENT32F:g===ko&&(O=o.DEPTH_COMPONENT16),O}function z(w,g){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==Dn&&w.minFilter!==fn?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function H(w){const g=w.target;g.removeEventListener("dispose",H),Q(g),g.isVideoTexture&&x.delete(g)}function I(w){const g=w.target;g.removeEventListener("dispose",I),D(g)}function Q(w){const g=s.get(w);if(g.__webglInit===void 0)return;const O=w.source,Z=y.get(O);if(Z){const fe=Z[g.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&R(w),Object.keys(Z).length===0&&y.delete(O)}s.remove(w)}function R(w){const g=s.get(w);o.deleteTexture(g.__webglTexture);const O=w.source,Z=y.get(O);delete Z[g.__cacheKey],h.memory.textures--}function D(w){const g=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let fe=0;fe<g.__webglFramebuffer[Z].length;fe++)o.deleteFramebuffer(g.__webglFramebuffer[Z][fe]);else o.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&o.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)o.deleteFramebuffer(g.__webglFramebuffer[Z]);else o.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&o.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&o.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&o.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&o.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=w.textures;for(let Z=0,fe=O.length;Z<fe;Z++){const ne=s.get(O[Z]);ne.__webglTexture&&(o.deleteTexture(ne.__webglTexture),h.memory.textures--),s.remove(O[Z])}s.remove(w)}let X=0;function oe(){X=0}function le(){const w=X;return w>=l.maxTextures&&it("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),X+=1,w}function he(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function pe(w,g){const O=s.get(w);if(w.isVideoTexture&&St(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const Z=w.image;if(Z===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{te(O,w,g);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,O.__webglTexture,o.TEXTURE0+g)}function N(w,g){const O=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){te(O,w,g);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,O.__webglTexture,o.TEXTURE0+g)}function G(w,g){const O=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){te(O,w,g);return}i.bindTexture(o.TEXTURE_3D,O.__webglTexture,o.TEXTURE0+g)}function ee(w,g){const O=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){de(O,w,g);return}i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+g)}const ye={[Qh]:o.REPEAT,[ni]:o.CLAMP_TO_EDGE,[Jh]:o.MIRRORED_REPEAT},Se={[Dn]:o.NEAREST,[Py]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[fn]:o.LINEAR,[oh]:o.LINEAR_MIPMAP_NEAREST,[Cs]:o.LINEAR_MIPMAP_LINEAR},U={[By]:o.NEVER,[Xy]:o.ALWAYS,[Hy]:o.LESS,[Xd]:o.LEQUAL,[Gy]:o.EQUAL,[qd]:o.GEQUAL,[Vy]:o.GREATER,[ky]:o.NOTEQUAL};function ie(w,g){if(g.type===wi&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===fn||g.magFilter===oh||g.magFilter===uc||g.magFilter===Cs||g.minFilter===fn||g.minFilter===oh||g.minFilter===uc||g.minFilter===Cs)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,ye[g.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,ye[g.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,ye[g.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,Se[g.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,Se[g.minFilter]),g.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,U[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Dn||g.minFilter!==uc&&g.minFilter!==Cs||g.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||s.get(g).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");o.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,l.getMaxAnisotropy())),s.get(g).__currentAnisotropy=g.anisotropy}}}function _e(w,g){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",H));const Z=g.source;let fe=y.get(Z);fe===void 0&&(fe={},y.set(Z,fe));const ne=he(g);if(ne!==w.__cacheKey){fe[ne]===void 0&&(fe[ne]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,O=!0),fe[ne].usedTimes++;const Pe=fe[w.__cacheKey];Pe!==void 0&&(fe[w.__cacheKey].usedTimes--,Pe.usedTimes===0&&R(g)),w.__cacheKey=ne,w.__webglTexture=fe[ne].texture}return O}function Ae(w,g,O){return Math.floor(Math.floor(w/O)/g)}function Be(w,g,O,Z){const ne=w.updateRanges;if(ne.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,g.width,g.height,O,Z,g.data);else{ne.sort((Ee,be)=>Ee.start-be.start);let Pe=0;for(let Ee=1;Ee<ne.length;Ee++){const be=ne[Pe],ze=ne[Ee],Fe=be.start+be.count,De=Ae(ze.start,g.width,4),ct=Ae(be.start,g.width,4);ze.start<=Fe+1&&De===ct&&Ae(ze.start+ze.count-1,g.width,4)===De?be.count=Math.max(be.count,ze.start+ze.count-be.start):(++Pe,ne[Pe]=ze)}ne.length=Pe+1;const Ce=o.getParameter(o.UNPACK_ROW_LENGTH),Ve=o.getParameter(o.UNPACK_SKIP_PIXELS),Je=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,g.width);for(let Ee=0,be=ne.length;Ee<be;Ee++){const ze=ne[Ee],Fe=Math.floor(ze.start/4),De=Math.ceil(ze.count/4),ct=Fe%g.width,W=Math.floor(Fe/g.width),Ne=De,Te=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ct),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ct,W,Ne,Te,O,Z,g.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ce),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ve),o.pixelStorei(o.UNPACK_SKIP_ROWS,Je)}}function te(w,g,O){let Z=o.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=o.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=o.TEXTURE_3D);const fe=_e(w,g),ne=g.source;i.bindTexture(Z,w.__webglTexture,o.TEXTURE0+O);const Pe=s.get(ne);if(ne.version!==Pe.__version||fe===!0){i.activeTexture(o.TEXTURE0+O);const Ce=At.getPrimaries(At.workingColorSpace),Ve=g.colorSpace===Ja?null:At.getPrimaries(g.colorSpace),Je=g.colorSpace===Ja||Ce===Ve?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,g.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,g.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Ee=C(g.image,!1,l.maxTextureSize);Ee=bt(g,Ee);const be=c.convert(g.format,g.colorSpace),ze=c.convert(g.type);let Fe=P(g.internalFormat,be,ze,g.colorSpace,g.isVideoTexture);ie(Z,g);let De;const ct=g.mipmaps,W=g.isVideoTexture!==!0,Ne=Pe.__version===void 0||fe===!0,Te=ne.dataReady,Ie=z(g,Ee);if(g.isDepthTexture)Fe=L(g.format===ws,g.type),Ne&&(W?i.texStorage2D(o.TEXTURE_2D,1,Fe,Ee.width,Ee.height):i.texImage2D(o.TEXTURE_2D,0,Fe,Ee.width,Ee.height,0,be,ze,null));else if(g.isDataTexture)if(ct.length>0){W&&Ne&&i.texStorage2D(o.TEXTURE_2D,Ie,Fe,ct[0].width,ct[0].height);for(let Me=0,xe=ct.length;Me<xe;Me++)De=ct[Me],W?Te&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,De.width,De.height,be,ze,De.data):i.texImage2D(o.TEXTURE_2D,Me,Fe,De.width,De.height,0,be,ze,De.data);g.generateMipmaps=!1}else W?(Ne&&i.texStorage2D(o.TEXTURE_2D,Ie,Fe,Ee.width,Ee.height),Te&&Be(g,Ee,be,ze)):i.texImage2D(o.TEXTURE_2D,0,Fe,Ee.width,Ee.height,0,be,ze,Ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){W&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,Fe,ct[0].width,ct[0].height,Ee.depth);for(let Me=0,xe=ct.length;Me<xe;Me++)if(De=ct[Me],g.format!==gi)if(be!==null)if(W){if(Te)if(g.layerUpdates.size>0){const we=f0(De.width,De.height,g.format,g.type);for(const nt of g.layerUpdates){const Pt=De.data.subarray(nt*we/De.data.BYTES_PER_ELEMENT,(nt+1)*we/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,nt,De.width,De.height,1,be,Pt)}g.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,Ee.depth,be,De.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,Fe,De.width,De.height,Ee.depth,0,De.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Te&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,Ee.depth,be,ze,De.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Me,Fe,De.width,De.height,Ee.depth,0,be,ze,De.data)}else{W&&Ne&&i.texStorage2D(o.TEXTURE_2D,Ie,Fe,ct[0].width,ct[0].height);for(let Me=0,xe=ct.length;Me<xe;Me++)De=ct[Me],g.format!==gi?be!==null?W?Te&&i.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,De.width,De.height,be,De.data):i.compressedTexImage2D(o.TEXTURE_2D,Me,Fe,De.width,De.height,0,De.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Te&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,De.width,De.height,be,ze,De.data):i.texImage2D(o.TEXTURE_2D,Me,Fe,De.width,De.height,0,be,ze,De.data)}else if(g.isDataArrayTexture)if(W){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,Fe,Ee.width,Ee.height,Ee.depth),Te)if(g.layerUpdates.size>0){const Me=f0(Ee.width,Ee.height,g.format,g.type);for(const xe of g.layerUpdates){const we=Ee.data.subarray(xe*Me/Ee.data.BYTES_PER_ELEMENT,(xe+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xe,Ee.width,Ee.height,1,be,ze,we)}g.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,be,ze,Ee.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Fe,Ee.width,Ee.height,Ee.depth,0,be,ze,Ee.data);else if(g.isData3DTexture)W?(Ne&&i.texStorage3D(o.TEXTURE_3D,Ie,Fe,Ee.width,Ee.height,Ee.depth),Te&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,be,ze,Ee.data)):i.texImage3D(o.TEXTURE_3D,0,Fe,Ee.width,Ee.height,Ee.depth,0,be,ze,Ee.data);else if(g.isFramebufferTexture){if(Ne)if(W)i.texStorage2D(o.TEXTURE_2D,Ie,Fe,Ee.width,Ee.height);else{let Me=Ee.width,xe=Ee.height;for(let we=0;we<Ie;we++)i.texImage2D(o.TEXTURE_2D,we,Fe,Me,xe,0,be,ze,null),Me>>=1,xe>>=1}}else if(ct.length>0){if(W&&Ne){const Me=We(ct[0]);i.texStorage2D(o.TEXTURE_2D,Ie,Fe,Me.width,Me.height)}for(let Me=0,xe=ct.length;Me<xe;Me++)De=ct[Me],W?Te&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,be,ze,De):i.texImage2D(o.TEXTURE_2D,Me,Fe,be,ze,De);g.generateMipmaps=!1}else if(W){if(Ne){const Me=We(Ee);i.texStorage2D(o.TEXTURE_2D,Ie,Fe,Me.width,Me.height)}Te&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,be,ze,Ee)}else i.texImage2D(o.TEXTURE_2D,0,Fe,be,ze,Ee);M(g)&&S(Z),Pe.__version=ne.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function de(w,g,O){if(g.image.length!==6)return;const Z=_e(w,g),fe=g.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+O);const ne=s.get(fe);if(fe.version!==ne.__version||Z===!0){i.activeTexture(o.TEXTURE0+O);const Pe=At.getPrimaries(At.workingColorSpace),Ce=g.colorSpace===Ja?null:At.getPrimaries(g.colorSpace),Ve=g.colorSpace===Ja||Pe===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,g.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,g.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Je=g.isCompressedTexture||g.image[0].isCompressedTexture,Ee=g.image[0]&&g.image[0].isDataTexture,be=[];for(let xe=0;xe<6;xe++)!Je&&!Ee?be[xe]=C(g.image[xe],!0,l.maxCubemapSize):be[xe]=Ee?g.image[xe].image:g.image[xe],be[xe]=bt(g,be[xe]);const ze=be[0],Fe=c.convert(g.format,g.colorSpace),De=c.convert(g.type),ct=P(g.internalFormat,Fe,De,g.colorSpace),W=g.isVideoTexture!==!0,Ne=ne.__version===void 0||Z===!0,Te=fe.dataReady;let Ie=z(g,ze);ie(o.TEXTURE_CUBE_MAP,g);let Me;if(Je){W&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ct,ze.width,ze.height);for(let xe=0;xe<6;xe++){Me=be[xe].mipmaps;for(let we=0;we<Me.length;we++){const nt=Me[we];g.format!==gi?Fe!==null?W?Te&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,0,0,nt.width,nt.height,Fe,nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,ct,nt.width,nt.height,0,nt.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,0,0,nt.width,nt.height,Fe,De,nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,ct,nt.width,nt.height,0,Fe,De,nt.data)}}}else{if(Me=g.mipmaps,W&&Ne){Me.length>0&&Ie++;const xe=We(be[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ct,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ee){W?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,be[xe].width,be[xe].height,Fe,De,be[xe].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,be[xe].width,be[xe].height,0,Fe,De,be[xe].data);for(let we=0;we<Me.length;we++){const Pt=Me[we].image[xe].image;W?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,0,0,Pt.width,Pt.height,Fe,De,Pt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,ct,Pt.width,Pt.height,0,Fe,De,Pt.data)}}else{W?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Fe,De,be[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,Fe,De,be[xe]);for(let we=0;we<Me.length;we++){const nt=Me[we];W?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,0,0,Fe,De,nt.image[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,ct,Fe,De,nt.image[xe])}}}M(g)&&S(o.TEXTURE_CUBE_MAP),ne.__version=fe.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Re(w,g,O,Z,fe,ne){const Pe=c.convert(O.format,O.colorSpace),Ce=c.convert(O.type),Ve=P(O.internalFormat,Pe,Ce,O.colorSpace),Je=s.get(g),Ee=s.get(O);if(Ee.__renderTarget=g,!Je.__hasExternalTextures){const be=Math.max(1,g.width>>ne),ze=Math.max(1,g.height>>ne);fe===o.TEXTURE_3D||fe===o.TEXTURE_2D_ARRAY?i.texImage3D(fe,ne,Ve,be,ze,g.depth,0,Pe,Ce,null):i.texImage2D(fe,ne,Ve,be,ze,0,Pe,Ce,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),kt(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Z,fe,Ee.__webglTexture,0,V(g)):(fe===o.TEXTURE_2D||fe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Z,fe,Ee.__webglTexture,ne),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(w,g,O){if(o.bindRenderbuffer(o.RENDERBUFFER,w),g.depthBuffer){const Z=g.depthTexture,fe=Z&&Z.isDepthTexture?Z.type:null,ne=L(g.stencilBuffer,fe),Pe=g.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;kt(g)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(g),ne,g.width,g.height):O?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(g),ne,g.width,g.height):o.renderbufferStorage(o.RENDERBUFFER,ne,g.width,g.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pe,o.RENDERBUFFER,w)}else{const Z=g.textures;for(let fe=0;fe<Z.length;fe++){const ne=Z[fe],Pe=c.convert(ne.format,ne.colorSpace),Ce=c.convert(ne.type),Ve=P(ne.internalFormat,Pe,Ce,ne.colorSpace);kt(g)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(g),Ve,g.width,g.height):O?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(g),Ve,g.width,g.height):o.renderbufferStorage(o.RENDERBUFFER,Ve,g.width,g.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ge(w,g,O){const Z=g.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=s.get(g.depthTexture);if(fe.__renderTarget=g,(!fe.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,g.depthTexture.addEventListener("dispose",H)),fe.__webglTexture===void 0){fe.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture),ie(o.TEXTURE_CUBE_MAP,g.depthTexture);const Je=c.convert(g.depthTexture.format),Ee=c.convert(g.depthTexture.type);let be;g.depthTexture.format===va?be=o.DEPTH_COMPONENT24:g.depthTexture.format===ws&&(be=o.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,be,g.width,g.height,0,Je,Ee,null)}}else pe(g.depthTexture,0);const ne=fe.__webglTexture,Pe=V(g),Ce=Z?o.TEXTURE_CUBE_MAP_POSITIVE_X+O:o.TEXTURE_2D,Ve=g.depthTexture.format===ws?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(g.depthTexture.format===va)kt(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ve,Ce,ne,0,Pe):o.framebufferTexture2D(o.FRAMEBUFFER,Ve,Ce,ne,0);else if(g.depthTexture.format===ws)kt(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ve,Ce,ne,0,Pe):o.framebufferTexture2D(o.FRAMEBUFFER,Ve,Ce,ne,0);else throw new Error("Unknown depthTexture format")}function dt(w){const g=s.get(w),O=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){const fe=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",fe)};Z.addEventListener("dispose",fe),g.__depthDisposeCallback=fe}g.__boundDepthTexture=Z}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let Z=0;Z<6;Z++)Ge(g.__webglFramebuffer[Z],w,Z);else{const Z=w.texture.mipmaps;Z&&Z.length>0?Ge(g.__webglFramebuffer[0],w,0):Ge(g.__webglFramebuffer,w,0)}else if(O){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(i.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=o.createRenderbuffer(),ke(g.__webglDepthbuffer[Z],w,!1);else{const fe=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ne=g.__webglDepthbuffer[Z];o.bindRenderbuffer(o.RENDERBUFFER,ne),o.framebufferRenderbuffer(o.FRAMEBUFFER,fe,o.RENDERBUFFER,ne)}}else{const Z=w.texture.mipmaps;if(Z&&Z.length>0?i.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=o.createRenderbuffer(),ke(g.__webglDepthbuffer,w,!1);else{const fe=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ne=g.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ne),o.framebufferRenderbuffer(o.FRAMEBUFFER,fe,o.RENDERBUFFER,ne)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(w,g,O){const Z=s.get(w);g!==void 0&&Re(Z.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),O!==void 0&&dt(w)}function mt(w){const g=w.texture,O=s.get(w),Z=s.get(g);w.addEventListener("dispose",I);const fe=w.textures,ne=w.isWebGLCubeRenderTarget===!0,Pe=fe.length>1;if(Pe||(Z.__webglTexture===void 0&&(Z.__webglTexture=o.createTexture()),Z.__version=g.version,h.memory.textures++),ne){O.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[Ce]=[];for(let Ve=0;Ve<g.mipmaps.length;Ve++)O.__webglFramebuffer[Ce][Ve]=o.createFramebuffer()}else O.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let Ce=0;Ce<g.mipmaps.length;Ce++)O.__webglFramebuffer[Ce]=o.createFramebuffer()}else O.__webglFramebuffer=o.createFramebuffer();if(Pe)for(let Ce=0,Ve=fe.length;Ce<Ve;Ce++){const Je=s.get(fe[Ce]);Je.__webglTexture===void 0&&(Je.__webglTexture=o.createTexture(),h.memory.textures++)}if(w.samples>0&&kt(w)===!1){O.__webglMultisampledFramebuffer=o.createFramebuffer(),O.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Ce=0;Ce<fe.length;Ce++){const Ve=fe[Ce];O.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,O.__webglColorRenderbuffer[Ce]);const Je=c.convert(Ve.format,Ve.colorSpace),Ee=c.convert(Ve.type),be=P(Ve.internalFormat,Je,Ee,Ve.colorSpace,w.isXRRenderTarget===!0),ze=V(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,ze,be,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,O.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(O.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ne){i.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture),ie(o.TEXTURE_CUBE_MAP,g);for(let Ce=0;Ce<6;Ce++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ve=0;Ve<g.mipmaps.length;Ve++)Re(O.__webglFramebuffer[Ce][Ve],w,g,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ve);else Re(O.__webglFramebuffer[Ce],w,g,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);M(g)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let Ce=0,Ve=fe.length;Ce<Ve;Ce++){const Je=fe[Ce],Ee=s.get(Je);let be=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(be=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(be,Ee.__webglTexture),ie(be,Je),Re(O.__webglFramebuffer,w,Je,o.COLOR_ATTACHMENT0+Ce,be,0),M(Je)&&S(be)}i.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ce=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ce,Z.__webglTexture),ie(Ce,g),g.mipmaps&&g.mipmaps.length>0)for(let Ve=0;Ve<g.mipmaps.length;Ve++)Re(O.__webglFramebuffer[Ve],w,g,o.COLOR_ATTACHMENT0,Ce,Ve);else Re(O.__webglFramebuffer,w,g,o.COLOR_ATTACHMENT0,Ce,0);M(g)&&S(Ce),i.unbindTexture()}w.depthBuffer&&dt(w)}function pt(w){const g=w.textures;for(let O=0,Z=g.length;O<Z;O++){const fe=g[O];if(M(fe)){const ne=F(w),Pe=s.get(fe).__webglTexture;i.bindTexture(ne,Pe),S(ne),i.unbindTexture()}}}const Et=[],at=[];function Zt(w){if(w.samples>0){if(kt(w)===!1){const g=w.textures,O=w.width,Z=w.height;let fe=o.COLOR_BUFFER_BIT;const ne=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pe=s.get(w),Ce=g.length>1;if(Ce)for(let Je=0;Je<g.length;Je++)i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Je,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Je,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ve=w.texture.mipmaps;Ve&&Ve.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Je=0;Je<g.length;Je++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(fe|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(fe|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[Je]);const Ee=s.get(g[Je]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ee,0)}o.blitFramebuffer(0,0,O,Z,0,0,O,Z,fe,o.NEAREST),m===!0&&(Et.length=0,at.length=0,Et.push(o.COLOR_ATTACHMENT0+Je),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Et.push(ne),at.push(ne),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,at)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Et))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let Je=0;Je<g.length;Je++){i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Je,o.RENDERBUFFER,Pe.__webglColorRenderbuffer[Je]);const Ee=s.get(g[Je]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Je,o.TEXTURE_2D,Ee,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const g=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[g])}}}function V(w){return Math.min(l.maxSamples,w.samples)}function kt(w){const g=s.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function St(w){const g=h.render.frame;x.get(w)!==g&&(x.set(w,g),w.update())}function bt(w,g){const O=w.colorSpace,Z=w.format,fe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Lr&&O!==Ja&&(At.getTransfer(O)===Bt?(Z!==gi||fe!==mi)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",O)),g}function We(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.setTexture2D=pe,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=ee,this.rebindTextures=Yt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function d1(o,t){function i(s,l=Ja){let c;const h=At.getTransfer(l);if(s===mi)return o.UNSIGNED_BYTE;if(s===Bd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Hd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===ev)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===tv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===J0)return o.BYTE;if(s===$0)return o.SHORT;if(s===ko)return o.UNSIGNED_SHORT;if(s===zd)return o.INT;if(s===ki)return o.UNSIGNED_INT;if(s===wi)return o.FLOAT;if(s===Xi)return o.HALF_FLOAT;if(s===nv)return o.ALPHA;if(s===iv)return o.RGB;if(s===gi)return o.RGBA;if(s===va)return o.DEPTH_COMPONENT;if(s===ws)return o.DEPTH_STENCIL;if(s===av)return o.RED;if(s===Gd)return o.RED_INTEGER;if(s===Nr)return o.RG;if(s===Vd)return o.RG_INTEGER;if(s===kd)return o.RGBA_INTEGER;if(s===Oc||s===Pc||s===Fc||s===Ic)if(h===Bt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$h||s===ed||s===td||s===nd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===$h)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ed)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===td)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===id||s===ad)return h===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===sd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===rd)return c.COMPRESSED_R11_EAC;if(s===od)return c.COMPRESSED_SIGNED_R11_EAC;if(s===ld)return c.COMPRESSED_RG11_EAC;if(s===cd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===Sd||s===yd||s===Md||s===Ed)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ud)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===md)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_d)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Md)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ed)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bd||s===Td||s===Ad)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===bd)return h===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Td)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ad)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rd||s===Cd||s===wd||s===Dd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Rd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Cd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const p1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m1=`
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

}`;class g1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new vv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qi({vertexShader:p1,fragmentShader:m1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _i(new Ds(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _1 extends Pr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,x=null,v=null,y=null,E=null,A=null;const C=typeof XRWebGLBinding<"u",M=new g1,S={},F=i.getContextAttributes();let P=null,L=null;const z=[],H=[],I=new ot;let Q=null;const R=new Ri;R.viewport=new en;const D=new Ri;D.viewport=new en;const X=[R,D],oe=new AM;let le=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=z[te];return de===void 0&&(de=new Dh,z[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=z[te];return de===void 0&&(de=new Dh,z[te]=de),de.getGripSpace()},this.getHand=function(te){let de=z[te];return de===void 0&&(de=new Dh,z[te]=de),de.getHandSpace()};function pe(te){const de=H.indexOf(te.inputSource);if(de===-1)return;const Re=z[de];Re!==void 0&&(Re.update(te.inputSource,te.frame,p||h),Re.dispatchEvent({type:te.type,data:te.inputSource}))}function N(){l.removeEventListener("select",pe),l.removeEventListener("selectstart",pe),l.removeEventListener("selectend",pe),l.removeEventListener("squeeze",pe),l.removeEventListener("squeezestart",pe),l.removeEventListener("squeezeend",pe),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",G);for(let te=0;te<z.length;te++){const de=H[te];de!==null&&(H[te]=null,z[te].disconnect(de))}le=null,he=null,M.reset();for(const te in S)delete S[te];t.setRenderTarget(P),E=null,y=null,v=null,l=null,L=null,Be.stop(),s.isPresenting=!1,t.setPixelRatio(Q),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,s.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,s.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return y!==null?y:E},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",pe),l.addEventListener("selectstart",pe),l.addEventListener("selectend",pe),l.addEventListener("squeeze",pe),l.addEventListener("squeezestart",pe),l.addEventListener("squeezeend",pe),l.addEventListener("end",N),l.addEventListener("inputsourceschange",G),F.xrCompatible!==!0&&await i.makeXRCompatible(),Q=t.getPixelRatio(),t.getSize(I),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,ke=null,Ge=null;F.depth&&(Ge=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Re=F.stencil?ws:va,ke=F.stencil?Xo:ki);const dt={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};v=this.getBinding(),y=v.createProjectionLayer(dt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),L=new Di(y.textureWidth,y.textureHeight,{format:gi,type:mi,depthTexture:new Wo(y.textureWidth,y.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Re={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Re),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new Di(E.framebufferWidth,E.framebufferHeight,{format:gi,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Be.setContext(l),Be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(te){for(let de=0;de<te.removed.length;de++){const Re=te.removed[de],ke=H.indexOf(Re);ke>=0&&(H[ke]=null,z[ke].disconnect(Re))}for(let de=0;de<te.added.length;de++){const Re=te.added[de];let ke=H.indexOf(Re);if(ke===-1){for(let dt=0;dt<z.length;dt++)if(dt>=H.length){H.push(Re),ke=dt;break}else if(H[dt]===null){H[dt]=Re,ke=dt;break}if(ke===-1)break}const Ge=z[ke];Ge&&Ge.connect(Re)}}const ee=new re,ye=new re;function Se(te,de,Re){ee.setFromMatrixPosition(de.matrixWorld),ye.setFromMatrixPosition(Re.matrixWorld);const ke=ee.distanceTo(ye),Ge=de.projectionMatrix.elements,dt=Re.projectionMatrix.elements,Yt=Ge[14]/(Ge[10]-1),mt=Ge[14]/(Ge[10]+1),pt=(Ge[9]+1)/Ge[5],Et=(Ge[9]-1)/Ge[5],at=(Ge[8]-1)/Ge[0],Zt=(dt[8]+1)/dt[0],V=Yt*at,kt=Yt*Zt,St=ke/(-at+Zt),bt=St*-at;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(bt),te.translateZ(St),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ge[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const We=Yt+St,w=mt+St,g=V-bt,O=kt+(ke-bt),Z=pt*mt/w*We,fe=Et*mt/w*We;te.projectionMatrix.makePerspective(g,O,Z,fe,We,w),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function U(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let de=te.near,Re=te.far;M.texture!==null&&(M.depthNear>0&&(de=M.depthNear),M.depthFar>0&&(Re=M.depthFar)),oe.near=D.near=R.near=de,oe.far=D.far=R.far=Re,(le!==oe.near||he!==oe.far)&&(l.updateRenderState({depthNear:oe.near,depthFar:oe.far}),le=oe.near,he=oe.far),oe.layers.mask=te.layers.mask|6,R.layers.mask=oe.layers.mask&3,D.layers.mask=oe.layers.mask&5;const ke=te.parent,Ge=oe.cameras;U(oe,ke);for(let dt=0;dt<Ge.length;dt++)U(Ge[dt],ke);Ge.length===2?Se(oe,R,D):oe.projectionMatrix.copy(R.projectionMatrix),ie(te,oe,ke)};function ie(te,de,Re){Re===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Re.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ud*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return oe},this.getFoveation=function(){if(!(y===null&&E===null))return m},this.setFoveation=function(te){m=te,y!==null&&(y.fixedFoveation=te),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(oe)},this.getCameraTexture=function(te){return S[te]};let _e=null;function Ae(te,de){if(x=de.getViewerPose(p||h),A=de,x!==null){const Re=x.views;E!==null&&(t.setRenderTargetFramebuffer(L,E.framebuffer),t.setRenderTarget(L));let ke=!1;Re.length!==oe.cameras.length&&(oe.cameras.length=0,ke=!0);for(let mt=0;mt<Re.length;mt++){const pt=Re[mt];let Et=null;if(E!==null)Et=E.getViewport(pt);else{const Zt=v.getViewSubImage(y,pt);Et=Zt.viewport,mt===0&&(t.setRenderTargetTextures(L,Zt.colorTexture,Zt.depthStencilTexture),t.setRenderTarget(L))}let at=X[mt];at===void 0&&(at=new Ri,at.layers.enable(mt),at.viewport=new en,X[mt]=at),at.matrix.fromArray(pt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(pt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Et.x,Et.y,Et.width,Et.height),mt===0&&(oe.matrix.copy(at.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale)),ke===!0&&oe.cameras.push(at)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const mt=v.getDepthInformation(Re[0]);mt&&mt.isValid&&mt.texture&&M.init(mt,l.renderState)}if(Ge&&Ge.includes("camera-access")&&C){t.state.unbindTexture(),v=s.getBinding();for(let mt=0;mt<Re.length;mt++){const pt=Re[mt].camera;if(pt){let Et=S[pt];Et||(Et=new vv,S[pt]=Et);const at=v.getCameraImage(pt);Et.sourceTexture=at}}}}for(let Re=0;Re<z.length;Re++){const ke=H[Re],Ge=z[Re];ke!==null&&Ge!==void 0&&Ge.update(ke,de,p||h)}_e&&_e(te,de),de.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:de}),A=null}const Be=new Sv;Be.setAnimationLoop(Ae),this.setAnimationLoop=function(te){_e=te},this.dispose=function(){}}}const bs=new xa,v1=new an;function x1(o,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,dv(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,F,P,L){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(M,S):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),x(M,S)):S.isMeshStandardMaterial?(c(M,S),y(M,S),S.isMeshPhysicalMaterial&&E(M,S,L)):S.isMeshMatcapMaterial?(c(M,S),A(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),C(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,F,P):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===qn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===qn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const F=t.get(S),P=F.envMap,L=F.envMapRotation;P&&(M.envMap.value=P,bs.copy(L),bs.x*=-1,bs.y*=-1,bs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),M.envMapRotation.value.setFromMatrix4(v1.makeRotationFromEuler(bs)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,F,P){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*F,M.scale.value=P*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function x(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function y(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function E(M,S,F){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===qn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,S){S.matcap&&(M.matcap.value=S.matcap)}function C(M,S){const F=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function S1(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,P){const L=P.program;s.uniformBlockBinding(F,L)}function p(F,P){let L=l[F.id];L===void 0&&(A(F),L=x(F),l[F.id]=L,F.addEventListener("dispose",M));const z=P.program;s.updateUBOMapping(F,z);const H=t.render.frame;c[F.id]!==H&&(y(F),c[F.id]=H)}function x(F){const P=v();F.__bindingPointIndex=P;const L=o.createBuffer(),z=F.__size,H=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,z,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,L),L}function v(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(F){const P=l[F.id],L=F.uniforms,z=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let H=0,I=L.length;H<I;H++){const Q=Array.isArray(L[H])?L[H]:[L[H]];for(let R=0,D=Q.length;R<D;R++){const X=Q[R];if(E(X,H,R,z)===!0){const oe=X.__offset,le=Array.isArray(X.value)?X.value:[X.value];let he=0;for(let pe=0;pe<le.length;pe++){const N=le[pe],G=C(N);typeof N=="number"||typeof N=="boolean"?(X.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,oe+he,X.__data)):N.isMatrix3?(X.__data[0]=N.elements[0],X.__data[1]=N.elements[1],X.__data[2]=N.elements[2],X.__data[3]=0,X.__data[4]=N.elements[3],X.__data[5]=N.elements[4],X.__data[6]=N.elements[5],X.__data[7]=0,X.__data[8]=N.elements[6],X.__data[9]=N.elements[7],X.__data[10]=N.elements[8],X.__data[11]=0):(N.toArray(X.__data,he),he+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,oe,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(F,P,L,z){const H=F.value,I=P+"_"+L;if(z[I]===void 0)return typeof H=="number"||typeof H=="boolean"?z[I]=H:z[I]=H.clone(),!0;{const Q=z[I];if(typeof H=="number"||typeof H=="boolean"){if(Q!==H)return z[I]=H,!0}else if(Q.equals(H)===!1)return Q.copy(H),!0}return!1}function A(F){const P=F.uniforms;let L=0;const z=16;for(let I=0,Q=P.length;I<Q;I++){const R=Array.isArray(P[I])?P[I]:[P[I]];for(let D=0,X=R.length;D<X;D++){const oe=R[D],le=Array.isArray(oe.value)?oe.value:[oe.value];for(let he=0,pe=le.length;he<pe;he++){const N=le[he],G=C(N),ee=L%z,ye=ee%G.boundary,Se=ee+ye;L+=ye,Se!==0&&z-Se<G.storage&&(L+=z-Se),oe.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=L,L+=G.storage}}}const H=L%z;return H>0&&(L+=z-H),F.__size=L,F.__cache={},this}function C(F){const P={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(P.boundary=4,P.storage=4):F.isVector2?(P.boundary=8,P.storage=8):F.isVector3||F.isColor?(P.boundary=16,P.storage=12):F.isVector4?(P.boundary=16,P.storage=16):F.isMatrix3?(P.boundary=48,P.storage=48):F.isMatrix4?(P.boundary=64,P.storage=64):F.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):it("WebGLRenderer: Unsupported uniform value type.",F),P}function M(F){const P=F.target;P.removeEventListener("dispose",M);const L=h.indexOf(P.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function S(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}const y1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function M1(){return Bi===null&&(Bi=new gv(y1,16,16,Nr,Xi),Bi.name="DFG_LUT",Bi.minFilter=fn,Bi.magFilter=fn,Bi.wrapS=ni,Bi.wrapT=ni,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class E1{constructor(t={}){const{canvas:i=qy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1,outputBufferType:E=mi}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=h;const C=E,M=new Set([kd,Vd,Gd]),S=new Set([mi,ki,ko,Xo,Bd,Hd]),F=new Uint32Array(4),P=new Int32Array(4);let L=null,z=null;const H=[],I=[];let Q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1;this._outputColorSpace=pi;let X=0,oe=0,le=null,he=-1,pe=null;const N=new en,G=new en;let ee=null;const ye=new Lt(0);let Se=0,U=i.width,ie=i.height,_e=1,Ae=null,Be=null;const te=new en(0,0,U,ie),de=new en(0,0,U,ie);let Re=!1;const ke=new _v;let Ge=!1,dt=!1;const Yt=new an,mt=new re,pt=new en,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Zt(){return le===null?_e:1}let V=s;function kt(T,j){return i.getContext(T,j)}try{const T={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Id}`),i.addEventListener("webglcontextlost",nt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),V===null){const j="webgl2";if(V=kt(j,T),V===null)throw kt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw wt("WebGLRenderer: "+T.message),T}let St,bt,We,w,g,O,Z,fe,ne,Pe,Ce,Ve,Je,Ee,be,ze,Fe,De,ct,W,Ne,Te,Ie,Me;function xe(){St=new MT(V),St.init(),Te=new d1(V,St),bt=new dT(V,St,t,Te),We=new f1(V,St),bt.reversedDepthBuffer&&y&&We.buffers.depth.setReversed(!0),w=new TT(V),g=new KA,O=new h1(V,St,We,g,bt,Te,w),Z=new mT(R),fe=new yT(R),ne=new wM(V),Ie=new fT(V,ne),Pe=new ET(V,ne,w,Ie),Ce=new RT(V,Pe,ne,w),ct=new AT(V,bt,O),ze=new pT(g),Ve=new ZA(R,Z,fe,St,bt,Ie,ze),Je=new x1(R,g),Ee=new JA,be=new a1(St),De=new uT(R,Z,fe,We,Ce,A,m),Fe=new c1(R,Ce,bt),Me=new S1(V,w,bt,We),W=new hT(V,St,w),Ne=new bT(V,St,w),w.programs=Ve.programs,R.capabilities=bt,R.extensions=St,R.properties=g,R.renderLists=Ee,R.shadowMap=Fe,R.state=We,R.info=w}xe(),C!==mi&&(Q=new wT(C,i.width,i.height,l,c));const we=new _1(R,V);this.xr=we,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=St.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=St.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(T){T!==void 0&&(_e=T,this.setSize(U,ie,!1))},this.getSize=function(T){return T.set(U,ie)},this.setSize=function(T,j,ce=!0){if(we.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,ie=j,i.width=Math.floor(T*_e),i.height=Math.floor(j*_e),ce===!0&&(i.style.width=T+"px",i.style.height=j+"px"),Q!==null&&Q.setSize(i.width,i.height),this.setViewport(0,0,T,j)},this.getDrawingBufferSize=function(T){return T.set(U*_e,ie*_e).floor()},this.setDrawingBufferSize=function(T,j,ce){U=T,ie=j,_e=ce,i.width=Math.floor(T*ce),i.height=Math.floor(j*ce),this.setViewport(0,0,T,j)},this.setEffects=function(T){if(C===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let j=0;j<T.length;j++)if(T[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Q.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,j,ce,ae){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,j,ce,ae),We.viewport(N.copy(te).multiplyScalar(_e).round())},this.getScissor=function(T){return T.copy(de)},this.setScissor=function(T,j,ce,ae){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,j,ce,ae),We.scissor(G.copy(de).multiplyScalar(_e).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(T){We.setScissorTest(Re=T)},this.setOpaqueSort=function(T){Ae=T},this.setTransparentSort=function(T){Be=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(T=!0,j=!0,ce=!0){let ae=0;if(T){let K=!1;if(le!==null){const Ue=le.texture.format;K=M.has(Ue)}if(K){const Ue=le.texture.type,He=S.has(Ue),Le=De.getClearColor(),Xe=De.getClearAlpha(),je=Le.r,$e=Le.g,Ye=Le.b;He?(F[0]=je,F[1]=$e,F[2]=Ye,F[3]=Xe,V.clearBufferuiv(V.COLOR,0,F)):(P[0]=je,P[1]=$e,P[2]=Ye,P[3]=Xe,V.clearBufferiv(V.COLOR,0,P))}else ae|=V.COLOR_BUFFER_BIT}j&&(ae|=V.DEPTH_BUFFER_BIT),ce&&(ae|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",nt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),De.dispose(),Ee.dispose(),be.dispose(),g.dispose(),Z.dispose(),fe.dispose(),Ce.dispose(),Ie.dispose(),Me.dispose(),Ve.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ls),we.removeEventListener("sessionend",Br),Oi.stop()};function nt(T){T.preventDefault(),k_("WebGLRenderer: Context Lost."),D=!0}function Pt(){k_("WebGLRenderer: Context Restored."),D=!1;const T=w.autoReset,j=Fe.enabled,ce=Fe.autoUpdate,ae=Fe.needsUpdate,K=Fe.type;xe(),w.autoReset=T,Fe.enabled=j,Fe.autoUpdate=ce,Fe.needsUpdate=ae,Fe.type=K}function Tt(T){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Un(T){const j=T.target;j.removeEventListener("dispose",Un),vi(j)}function vi(T){$o(T),g.remove(T)}function $o(T){const j=g.get(T).programs;j!==void 0&&(j.forEach(function(ce){Ve.releaseProgram(ce)}),T.isShaderMaterial&&Ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,j,ce,ae,K,Ue){j===null&&(j=Et);const He=K.isMesh&&K.matrixWorld.determinant()<0,Le=ts(T,j,ce,ae,K);We.setMaterial(ae,He);let Xe=ce.index,je=1;if(ae.wireframe===!0){if(Xe=Pe.getWireframeAttribute(ce),Xe===void 0)return;je=2}const $e=ce.drawRange,Ye=ce.attributes.position;let et=$e.start*je,Dt=($e.start+$e.count)*je;Ue!==null&&(et=Math.max(et,Ue.start*je),Dt=Math.min(Dt,(Ue.start+Ue.count)*je)),Xe!==null?(et=Math.max(et,0),Dt=Math.min(Dt,Xe.count)):Ye!=null&&(et=Math.max(et,0),Dt=Math.min(Dt,Ye.count));const Kt=Dt-et;if(Kt<0||Kt===1/0)return;Ie.setup(K,ae,Le,ce,Xe);let qt,Ot=W;if(Xe!==null&&(qt=ne.get(Xe),Ot=Ne,Ot.setIndex(qt)),K.isMesh)ae.wireframe===!0?(We.setLineWidth(ae.wireframeLinewidth*Zt()),Ot.setMode(V.LINES)):Ot.setMode(V.TRIANGLES);else if(K.isLine){let Ke=ae.linewidth;Ke===void 0&&(Ke=1),We.setLineWidth(Ke*Zt()),K.isLineSegments?Ot.setMode(V.LINES):K.isLineLoop?Ot.setMode(V.LINE_LOOP):Ot.setMode(V.LINE_STRIP)}else K.isPoints?Ot.setMode(V.POINTS):K.isSprite&&Ot.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))Ot.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ke=K._multiDrawStarts,Ut=K._multiDrawCounts,st=K._multiDrawCount,Sn=Xe?ne.get(Xe).bytesPerElement:1,Wi=g.get(ae).currentProgram.getUniforms();for(let yn=0;yn<st;yn++)Wi.setValue(V,"_gl_DrawID",yn),Ot.render(Ke[yn]/Sn,Ut[yn])}else if(K.isInstancedMesh)Ot.renderInstances(et,Kt,K.count);else if(ce.isInstancedBufferGeometry){const Ke=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ut=Math.min(ce.instanceCount,Ke);Ot.renderInstances(et,Kt,Ut)}else Ot.render(et,Kt)};function Ir(T,j,ce){T.transparent===!0&&T.side===ma&&T.forceSinglePass===!1?(T.side=qn,T.needsUpdate=!0,Ps(T,j,ce),T.side=es,T.needsUpdate=!0,Ps(T,j,ce),T.side=ma):Ps(T,j,ce)}this.compile=function(T,j,ce=null){ce===null&&(ce=T),z=be.get(ce),z.init(j),I.push(z),ce.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(z.pushLight(K),K.castShadow&&z.pushShadow(K))}),T!==ce&&T.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(z.pushLight(K),K.castShadow&&z.pushShadow(K))}),z.setupLights();const ae=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ue=K.material;if(Ue)if(Array.isArray(Ue))for(let He=0;He<Ue.length;He++){const Le=Ue[He];Ir(Le,ce,K),ae.add(Le)}else Ir(Ue,ce,K),ae.add(Ue)}),z=I.pop(),ae},this.compileAsync=function(T,j,ce=null){const ae=this.compile(T,j,ce);return new Promise(K=>{function Ue(){if(ae.forEach(function(He){g.get(He).currentProgram.isReady()&&ae.delete(He)}),ae.size===0){K(T);return}setTimeout(Ue,10)}St.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Ns=null;function zr(T){Ns&&Ns(T)}function Ls(){Oi.stop()}function Br(){Oi.start()}const Oi=new Sv;Oi.setAnimationLoop(zr),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(T){Ns=T,we.setAnimationLoop(T),T===null?Oi.stop():Oi.start()},we.addEventListener("sessionstart",Ls),we.addEventListener("sessionend",Br),this.render=function(T,j){if(j!==void 0&&j.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ce=we.enabled===!0&&we.isPresenting===!0,ae=Q!==null&&(le===null||ce)&&Q.begin(R,le);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(Q===null||Q.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(j),j=we.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,j,le),z=be.get(T,I.length),z.init(j),I.push(z),Yt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ke.setFromProjectionMatrix(Yt,Gi,j.reversedDepth),dt=this.localClippingEnabled,Ge=ze.init(this.clippingPlanes,dt),L=Ee.get(T,H.length),L.init(),H.push(L),we.enabled===!0&&we.isPresenting===!0){const He=R.xr.getDepthSensingMesh();He!==null&&ii(He,j,-1/0,R.sortObjects)}ii(T,j,0,R.sortObjects),L.finish(),R.sortObjects===!0&&L.sort(Ae,Be),at=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,at&&De.addToRenderList(L,T),this.info.render.frame++,Ge===!0&&ze.beginShadows();const K=z.state.shadowsArray;if(Fe.render(K,T,j),Ge===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&Q.hasRenderPass())===!1){const He=L.opaque,Le=L.transmissive;if(z.setupLights(),j.isArrayCamera){const Xe=j.cameras;if(Le.length>0)for(let je=0,$e=Xe.length;je<$e;je++){const Ye=Xe[je];xn(He,Le,T,Ye)}at&&De.render(T);for(let je=0,$e=Xe.length;je<$e;je++){const Ye=Xe[je];sn(L,T,Ye,Ye.viewport)}}else Le.length>0&&xn(He,Le,T,j),at&&De.render(T),sn(L,T,j)}le!==null&&oe===0&&(O.updateMultisampleRenderTarget(le),O.updateRenderTargetMipmap(le)),ae&&Q.end(R),T.isScene===!0&&T.onAfterRender(R,T,j),Ie.resetDefaultState(),he=-1,pe=null,I.pop(),I.length>0?(z=I[I.length-1],Ge===!0&&ze.setGlobalState(R.clippingPlanes,z.state.camera)):z=null,H.pop(),H.length>0?L=H[H.length-1]:L=null};function ii(T,j,ce,ae){if(T.visible===!1)return;if(T.layers.test(j.layers)){if(T.isGroup)ce=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(j);else if(T.isLight)z.pushLight(T),T.castShadow&&z.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ke.intersectsSprite(T)){ae&&pt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Yt);const He=Ce.update(T),Le=T.material;Le.visible&&L.push(T,He,Le,ce,pt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ke.intersectsObject(T))){const He=Ce.update(T),Le=T.material;if(ae&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),pt.copy(T.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),pt.copy(He.boundingSphere.center)),pt.applyMatrix4(T.matrixWorld).applyMatrix4(Yt)),Array.isArray(Le)){const Xe=He.groups;for(let je=0,$e=Xe.length;je<$e;je++){const Ye=Xe[je],et=Le[Ye.materialIndex];et&&et.visible&&L.push(T,He,et,ce,pt.z,Ye)}}else Le.visible&&L.push(T,He,Le,ce,pt.z,null)}}const Ue=T.children;for(let He=0,Le=Ue.length;He<Le;He++)ii(Ue[He],j,ce,ae)}function sn(T,j,ce,ae){const{opaque:K,transmissive:Ue,transparent:He}=T;z.setupLightsView(ce),Ge===!0&&ze.setGlobalState(R.clippingPlanes,ce),ae&&We.viewport(N.copy(ae)),K.length>0&&xi(K,j,ce),Ue.length>0&&xi(Ue,j,ce),He.length>0&&xi(He,j,ce),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function xn(T,j,ce,ae){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ae.id]===void 0){const et=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ae.id]=new Di(1,1,{generateMipmaps:!0,type:et?Xi:mi,minFilter:Cs,samples:bt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Ue=z.state.transmissionRenderTarget[ae.id],He=ae.viewport||N;Ue.setSize(He.z*R.transmissionResolutionScale,He.w*R.transmissionResolutionScale);const Le=R.getRenderTarget(),Xe=R.getActiveCubeFace(),je=R.getActiveMipmapLevel();R.setRenderTarget(Ue),R.getClearColor(ye),Se=R.getClearAlpha(),Se<1&&R.setClearColor(16777215,.5),R.clear(),at&&De.render(ce);const $e=R.toneMapping;R.toneMapping=Vi;const Ye=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),z.setupLightsView(ae),Ge===!0&&ze.setGlobalState(R.clippingPlanes,ae),xi(T,ce,ae),O.updateMultisampleRenderTarget(Ue),O.updateRenderTargetMipmap(Ue),St.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Dt=0,Kt=j.length;Dt<Kt;Dt++){const qt=j[Dt],{object:Ot,geometry:Ke,material:Ut,group:st}=qt;if(Ut.side===ma&&Ot.layers.test(ae.layers)){const Sn=Ut.side;Ut.side=qn,Ut.needsUpdate=!0,Os(Ot,ce,ae,Ke,Ut,st),Ut.side=Sn,Ut.needsUpdate=!0,et=!0}}et===!0&&(O.updateMultisampleRenderTarget(Ue),O.updateRenderTargetMipmap(Ue))}R.setRenderTarget(Le,Xe,je),R.setClearColor(ye,Se),Ye!==void 0&&(ae.viewport=Ye),R.toneMapping=$e}function xi(T,j,ce){const ae=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Ue=T.length;K<Ue;K++){const He=T[K],{object:Le,geometry:Xe,group:je}=He;let $e=He.material;$e.allowOverride===!0&&ae!==null&&($e=ae),Le.layers.test(ce.layers)&&Os(Le,j,ce,Xe,$e,je)}}function Os(T,j,ce,ae,K,Ue){T.onBeforeRender(R,j,ce,ae,K,Ue),T.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(R,j,ce,ae,T,Ue),K.transparent===!0&&K.side===ma&&K.forceSinglePass===!1?(K.side=qn,K.needsUpdate=!0,R.renderBufferDirect(ce,j,ae,K,T,Ue),K.side=es,K.needsUpdate=!0,R.renderBufferDirect(ce,j,ae,K,T,Ue),K.side=ma):R.renderBufferDirect(ce,j,ae,K,T,Ue),T.onAfterRender(R,j,ce,ae,K,Ue)}function Ps(T,j,ce){j.isScene!==!0&&(j=Et);const ae=g.get(T),K=z.state.lights,Ue=z.state.shadowsArray,He=K.state.version,Le=Ve.getParameters(T,K.state,Ue,j,ce),Xe=Ve.getProgramCacheKey(Le);let je=ae.programs;ae.environment=T.isMeshStandardMaterial?j.environment:null,ae.fog=j.fog,ae.envMap=(T.isMeshStandardMaterial?fe:Z).get(T.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&T.envMap===null?j.environmentRotation:T.envMapRotation,je===void 0&&(T.addEventListener("dispose",Un),je=new Map,ae.programs=je);let $e=je.get(Xe);if($e!==void 0){if(ae.currentProgram===$e&&ae.lightsStateVersion===He)return Hr(T,Le),$e}else Le.uniforms=Ve.getUniforms(T),T.onBeforeCompile(Le,R),$e=Ve.acquireProgram(Le,Xe),je.set(Xe,$e),ae.uniforms=Le.uniforms;const Ye=ae.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=ze.uniform),Hr(T,Le),ae.needsLights=Sa(T),ae.lightsStateVersion=He,ae.needsLights&&(Ye.ambientLightColor.value=K.state.ambient,Ye.lightProbe.value=K.state.probe,Ye.directionalLights.value=K.state.directional,Ye.directionalLightShadows.value=K.state.directionalShadow,Ye.spotLights.value=K.state.spot,Ye.spotLightShadows.value=K.state.spotShadow,Ye.rectAreaLights.value=K.state.rectArea,Ye.ltc_1.value=K.state.rectAreaLTC1,Ye.ltc_2.value=K.state.rectAreaLTC2,Ye.pointLights.value=K.state.point,Ye.pointLightShadows.value=K.state.pointShadow,Ye.hemisphereLights.value=K.state.hemi,Ye.directionalShadowMap.value=K.state.directionalShadowMap,Ye.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ye.spotShadowMap.value=K.state.spotShadowMap,Ye.spotLightMatrix.value=K.state.spotLightMatrix,Ye.spotLightMap.value=K.state.spotLightMap,Ye.pointShadowMap.value=K.state.pointShadowMap,Ye.pointShadowMatrix.value=K.state.pointShadowMatrix),ae.currentProgram=$e,ae.uniformsList=null,$e}function el(T){if(T.uniformsList===null){const j=T.currentProgram.getUniforms();T.uniformsList=zc.seqWithValue(j.seq,T.uniforms)}return T.uniformsList}function Hr(T,j){const ce=g.get(T);ce.outputColorSpace=j.outputColorSpace,ce.batching=j.batching,ce.batchingColor=j.batchingColor,ce.instancing=j.instancing,ce.instancingColor=j.instancingColor,ce.instancingMorph=j.instancingMorph,ce.skinning=j.skinning,ce.morphTargets=j.morphTargets,ce.morphNormals=j.morphNormals,ce.morphColors=j.morphColors,ce.morphTargetsCount=j.morphTargetsCount,ce.numClippingPlanes=j.numClippingPlanes,ce.numIntersection=j.numClipIntersection,ce.vertexAlphas=j.vertexAlphas,ce.vertexTangents=j.vertexTangents,ce.toneMapping=j.toneMapping}function ts(T,j,ce,ae,K){j.isScene!==!0&&(j=Et),O.resetTextureUnits();const Ue=j.fog,He=ae.isMeshStandardMaterial?j.environment:null,Le=le===null?R.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Lr,Xe=(ae.isMeshStandardMaterial?fe:Z).get(ae.envMap||He),je=ae.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,$e=!!ce.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ye=!!ce.morphAttributes.position,et=!!ce.morphAttributes.normal,Dt=!!ce.morphAttributes.color;let Kt=Vi;ae.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Kt=R.toneMapping);const qt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ot=qt!==void 0?qt.length:0,Ke=g.get(ae),Ut=z.state.lights;if(Ge===!0&&(dt===!0||T!==pe)){const En=T===pe&&ae.id===he;ze.setState(ae,T,En)}let st=!1;ae.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Ut.state.version||Ke.outputColorSpace!==Le||K.isBatchedMesh&&Ke.batching===!1||!K.isBatchedMesh&&Ke.batching===!0||K.isBatchedMesh&&Ke.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ke.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ke.instancing===!1||!K.isInstancedMesh&&Ke.instancing===!0||K.isSkinnedMesh&&Ke.skinning===!1||!K.isSkinnedMesh&&Ke.skinning===!0||K.isInstancedMesh&&Ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ke.instancingMorph===!1&&K.morphTexture!==null||Ke.envMap!==Xe||ae.fog===!0&&Ke.fog!==Ue||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ze.numPlanes||Ke.numIntersection!==ze.numIntersection)||Ke.vertexAlphas!==je||Ke.vertexTangents!==$e||Ke.morphTargets!==Ye||Ke.morphNormals!==et||Ke.morphColors!==Dt||Ke.toneMapping!==Kt||Ke.morphTargetsCount!==Ot)&&(st=!0):(st=!0,Ke.__version=ae.version);let Sn=Ke.currentProgram;st===!0&&(Sn=Ps(ae,j,K));let Wi=!1,yn=!1,ai=!1;const Ft=Sn.getUniforms(),Mn=Ke.uniforms;if(We.useProgram(Sn.program)&&(Wi=!0,yn=!0,ai=!0),ae.id!==he&&(he=ae.id,yn=!0),Wi||pe!==T){We.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ft.setValue(V,"projectionMatrix",T.projectionMatrix),Ft.setValue(V,"viewMatrix",T.matrixWorldInverse);const bn=Ft.map.cameraPosition;bn!==void 0&&bn.setValue(V,mt.setFromMatrixPosition(T.matrixWorld)),bt.logarithmicDepthBuffer&&Ft.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ft.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),pe!==T&&(pe=T,yn=!0,ai=!0)}if(Ke.needsLights&&(Ut.state.directionalShadowMap.length>0&&Ft.setValue(V,"directionalShadowMap",Ut.state.directionalShadowMap,O),Ut.state.spotShadowMap.length>0&&Ft.setValue(V,"spotShadowMap",Ut.state.spotShadowMap,O),Ut.state.pointShadowMap.length>0&&Ft.setValue(V,"pointShadowMap",Ut.state.pointShadowMap,O)),K.isSkinnedMesh){Ft.setOptional(V,K,"bindMatrix"),Ft.setOptional(V,K,"bindMatrixInverse");const En=K.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ft.setValue(V,"boneTexture",En.boneTexture,O))}K.isBatchedMesh&&(Ft.setOptional(V,K,"batchingTexture"),Ft.setValue(V,"batchingTexture",K._matricesTexture,O),Ft.setOptional(V,K,"batchingIdTexture"),Ft.setValue(V,"batchingIdTexture",K._indirectTexture,O),Ft.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Ft.setValue(V,"batchingColorTexture",K._colorsTexture,O));const hn=ce.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ct.update(K,ce,Sn),(yn||Ke.receiveShadow!==K.receiveShadow)&&(Ke.receiveShadow=K.receiveShadow,Ft.setValue(V,"receiveShadow",K.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Mn.envMap.value=Xe,Mn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&j.environment!==null&&(Mn.envMapIntensity.value=j.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=M1()),yn&&(Ft.setValue(V,"toneMappingExposure",R.toneMappingExposure),Ke.needsLights&&Gr(Mn,ai),Ue&&ae.fog===!0&&Je.refreshFogUniforms(Mn,Ue),Je.refreshMaterialUniforms(Mn,ae,_e,ie,z.state.transmissionRenderTarget[T.id]),zc.upload(V,el(Ke),Mn,O)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(zc.upload(V,el(Ke),Mn,O),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ft.setValue(V,"center",K.center),Ft.setValue(V,"modelViewMatrix",K.modelViewMatrix),Ft.setValue(V,"normalMatrix",K.normalMatrix),Ft.setValue(V,"modelMatrix",K.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const En=ae.uniformsGroups;for(let bn=0,Fs=En.length;bn<Fs;bn++){const Si=En[bn];Me.update(Si,Sn),Me.bind(Si,Sn)}}return Sn}function Gr(T,j){T.ambientLightColor.needsUpdate=j,T.lightProbe.needsUpdate=j,T.directionalLights.needsUpdate=j,T.directionalLightShadows.needsUpdate=j,T.pointLights.needsUpdate=j,T.pointLightShadows.needsUpdate=j,T.spotLights.needsUpdate=j,T.spotLightShadows.needsUpdate=j,T.rectAreaLights.needsUpdate=j,T.hemisphereLights.needsUpdate=j}function Sa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(T,j,ce){const ae=g.get(T);ae.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),g.get(T.texture).__webglTexture=j,g.get(T.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ce,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,j){const ce=g.get(T);ce.__webglFramebuffer=j,ce.__useDefaultFramebuffer=j===void 0};const ya=V.createFramebuffer();this.setRenderTarget=function(T,j=0,ce=0){le=T,X=j,oe=ce;let ae=null,K=!1,Ue=!1;if(T){const Le=g.get(T);if(Le.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(V.FRAMEBUFFER,Le.__webglFramebuffer),N.copy(T.viewport),G.copy(T.scissor),ee=T.scissorTest,We.viewport(N),We.scissor(G),We.setScissorTest(ee),he=-1;return}else if(Le.__webglFramebuffer===void 0)O.setupRenderTarget(T);else if(Le.__hasExternalTextures)O.rebindTextures(T,g.get(T.texture).__webglTexture,g.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const $e=T.depthTexture;if(Le.__boundDepthTexture!==$e){if($e!==null&&g.has($e)&&(T.width!==$e.image.width||T.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(T)}}const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ue=!0);const je=g.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(je[j])?ae=je[j][ce]:ae=je[j],K=!0):T.samples>0&&O.useMultisampledRTT(T)===!1?ae=g.get(T).__webglMultisampledFramebuffer:Array.isArray(je)?ae=je[ce]:ae=je,N.copy(T.viewport),G.copy(T.scissor),ee=T.scissorTest}else N.copy(te).multiplyScalar(_e).floor(),G.copy(de).multiplyScalar(_e).floor(),ee=Re;if(ce!==0&&(ae=ya),We.bindFramebuffer(V.FRAMEBUFFER,ae)&&We.drawBuffers(T,ae),We.viewport(N),We.scissor(G),We.setScissorTest(ee),K){const Le=g.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Le.__webglTexture,ce)}else if(Ue){const Le=j;for(let Xe=0;Xe<T.textures.length;Xe++){const je=g.get(T.textures[Xe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Xe,je.__webglTexture,ce,Le)}}else if(T!==null&&ce!==0){const Le=g.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Le.__webglTexture,ce)}he=-1},this.readRenderTargetPixels=function(T,j,ce,ae,K,Ue,He,Le=0){if(!(T&&T.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=g.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&He!==void 0&&(Xe=Xe[He]),Xe){We.bindFramebuffer(V.FRAMEBUFFER,Xe);try{const je=T.textures[Le],$e=je.format,Ye=je.type;if(!bt.textureFormatReadable($e)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Ye)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=T.width-ae&&ce>=0&&ce<=T.height-K&&(T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le),V.readPixels(j,ce,ae,K,Te.convert($e),Te.convert(Ye),Ue))}finally{const je=le!==null?g.get(le).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(T,j,ce,ae,K,Ue,He,Le=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=g.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&He!==void 0&&(Xe=Xe[He]),Xe)if(j>=0&&j<=T.width-ae&&ce>=0&&ce<=T.height-K){We.bindFramebuffer(V.FRAMEBUFFER,Xe);const je=T.textures[Le],$e=je.format,Ye=je.type;if(!bt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.bufferData(V.PIXEL_PACK_BUFFER,Ue.byteLength,V.STREAM_READ),T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le),V.readPixels(j,ce,ae,K,Te.convert($e),Te.convert(Ye),0);const Dt=le!==null?g.get(le).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,Dt);const Kt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Wy(V,Kt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ue),V.deleteBuffer(et),V.deleteSync(Kt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,j=null,ce=0){const ae=Math.pow(2,-ce),K=Math.floor(T.image.width*ae),Ue=Math.floor(T.image.height*ae),He=j!==null?j.x:0,Le=j!==null?j.y:0;O.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,ce,0,0,He,Le,K,Ue),We.unbindTexture()};const ns=V.createFramebuffer(),Ma=V.createFramebuffer();this.copyTextureToTexture=function(T,j,ce=null,ae=null,K=0,Ue=null){Ue===null&&(K!==0?(qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=K,K=0):Ue=0);let He,Le,Xe,je,$e,Ye,et,Dt,Kt;const qt=T.isCompressedTexture?T.mipmaps[Ue]:T.image;if(ce!==null)He=ce.max.x-ce.min.x,Le=ce.max.y-ce.min.y,Xe=ce.isBox3?ce.max.z-ce.min.z:1,je=ce.min.x,$e=ce.min.y,Ye=ce.isBox3?ce.min.z:0;else{const hn=Math.pow(2,-K);He=Math.floor(qt.width*hn),Le=Math.floor(qt.height*hn),T.isDataArrayTexture?Xe=qt.depth:T.isData3DTexture?Xe=Math.floor(qt.depth*hn):Xe=1,je=0,$e=0,Ye=0}ae!==null?(et=ae.x,Dt=ae.y,Kt=ae.z):(et=0,Dt=0,Kt=0);const Ot=Te.convert(j.format),Ke=Te.convert(j.type);let Ut;j.isData3DTexture?(O.setTexture3D(j,0),Ut=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(O.setTexture2DArray(j,0),Ut=V.TEXTURE_2D_ARRAY):(O.setTexture2D(j,0),Ut=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const st=V.getParameter(V.UNPACK_ROW_LENGTH),Sn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Wi=V.getParameter(V.UNPACK_SKIP_PIXELS),yn=V.getParameter(V.UNPACK_SKIP_ROWS),ai=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,qt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,je),V.pixelStorei(V.UNPACK_SKIP_ROWS,$e),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ye);const Ft=T.isDataArrayTexture||T.isData3DTexture,Mn=j.isDataArrayTexture||j.isData3DTexture;if(T.isDepthTexture){const hn=g.get(T),En=g.get(j),bn=g.get(hn.__renderTarget),Fs=g.get(En.__renderTarget);We.bindFramebuffer(V.READ_FRAMEBUFFER,bn.__webglFramebuffer),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let Si=0;Si<Xe;Si++)Ft&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,g.get(T).__webglTexture,K,Ye+Si),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,g.get(j).__webglTexture,Ue,Kt+Si)),V.blitFramebuffer(je,$e,He,Le,et,Dt,He,Le,V.DEPTH_BUFFER_BIT,V.NEAREST);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||g.has(T)){const hn=g.get(T),En=g.get(j);We.bindFramebuffer(V.READ_FRAMEBUFFER,ns),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ma);for(let bn=0;bn<Xe;bn++)Ft?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,K,Ye+bn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,K),Mn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,En.__webglTexture,Ue,Kt+bn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,En.__webglTexture,Ue),K!==0?V.blitFramebuffer(je,$e,He,Le,et,Dt,He,Le,V.COLOR_BUFFER_BIT,V.NEAREST):Mn?V.copyTexSubImage3D(Ut,Ue,et,Dt,Kt+bn,je,$e,He,Le):V.copyTexSubImage2D(Ut,Ue,et,Dt,je,$e,He,Le);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Mn?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(Ut,Ue,et,Dt,Kt,He,Le,Xe,Ot,Ke,qt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Ut,Ue,et,Dt,Kt,He,Le,Xe,Ot,qt.data):V.texSubImage3D(Ut,Ue,et,Dt,Kt,He,Le,Xe,Ot,Ke,qt):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ue,et,Dt,He,Le,Ot,Ke,qt.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ue,et,Dt,qt.width,qt.height,Ot,qt.data):V.texSubImage2D(V.TEXTURE_2D,Ue,et,Dt,He,Le,Ot,Ke,qt);V.pixelStorei(V.UNPACK_ROW_LENGTH,st),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Sn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Wi),V.pixelStorei(V.UNPACK_SKIP_ROWS,yn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ai),Ue===0&&j.generateMipmaps&&V.generateMipmap(Ut),We.unbindTexture()},this.initRenderTarget=function(T){g.get(T).__webglFramebuffer===void 0&&O.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?O.setTextureCube(T,0):T.isData3DTexture?O.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?O.setTexture2DArray(T,0):O.setTexture2D(T,0),We.unbindTexture()},this.resetState=function(){X=0,oe=0,le=null,We.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(t),i.unpackColorSpace=At._getUnpackColorSpace()}}function b1({mouseForce:o=10,cursorSize:t=100,isViscous:i=!1,viscous:s=30,iterationsViscous:l=320,iterationsPoisson:c=32,dt:h=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:x=["#5227FF","#FF9FFC","#B19EEF"],style:v={},className:y="",autoDemo:E=!0,autoSpeed:A=.2,autoIntensity:C=2.2,takeoverDuration:M=20,autoResumeDelay:S=1e3,autoRampDuration:F=.2}){const P=pn.useRef(null),L=pn.useRef(null),z=pn.useRef(null),H=pn.useRef(null),I=pn.useRef(null),Q=pn.useRef(!0),R=pn.useRef(null);return pn.useEffect(()=>{if(!P.current)return;function D(w){let g;Array.isArray(w)&&w.length>0?w.length===1?g=[w[0],w[0]]:g=w:g=["#ffffff","#ffffff"];const O=g.length,Z=new Uint8Array(O*4);for(let ne=0;ne<O;ne++){const Pe=new Lt(g[ne]);Z[ne*4+0]=Math.round(Pe.r*255),Z[ne*4+1]=Math.round(Pe.g*255),Z[ne*4+2]=Math.round(Pe.b*255),Z[ne*4+3]=255}const fe=new gv(Z,O,1,gi);return fe.magFilter=fn,fe.minFilter=fn,fe.wrapS=ni,fe.wrapT=ni,fe.generateMipmaps=!1,fe.needsUpdate=!0,fe}const X=D(x),oe=new en(0,0,0,0);class le{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(g){this.container=g,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new E1({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Lt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new RM,this.clock.start()}resize(){if(!this.container)return;const g=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(g.width)),this.height=Math.max(1,Math.floor(g.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const he=new le;class pe{constructor(){this.mouseMoved=!1,this.coords=new ot,this.coords_old=new ot,this.diff=new ot,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ot,this.takeoverTo=new ot,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(g){this.container=g,this.docTarget=g.ownerDocument||null;const O=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);O&&(this.listenerTarget=O,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(g,O){if(!this.container)return!1;const Z=this.container.getBoundingClientRect();return Z.width===0||Z.height===0?!1:g>=Z.left&&g<=Z.right&&O>=Z.top&&O<=Z.bottom}updateHoverState(g,O){return this.isHoverInside=this.isPointInside(g,O),this.isHoverInside}setCoords(g,O){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const Z=this.container.getBoundingClientRect();if(Z.width===0||Z.height===0)return;const fe=(g-Z.left)/Z.width,ne=(O-Z.top)/Z.height;this.coords.set(fe*2-1,-(ne*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(g,O){this.coords.set(g,O),this.mouseMoved=!0}onDocumentMouseMove(g){if(this.updateHoverState(g.clientX,g.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const O=this.container.getBoundingClientRect();if(O.width===0||O.height===0)return;const Z=(g.clientX-O.left)/O.width,fe=(g.clientY-O.top)/O.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Z*2-1,-(fe*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(g.clientX,g.clientY),this.hasUserControl=!0}}onDocumentTouchStart(g){if(g.touches.length!==1)return;const O=g.touches[0];this.updateHoverState(O.clientX,O.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(O.clientX,O.clientY),this.hasUserControl=!0)}onDocumentTouchMove(g){if(g.touches.length!==1)return;const O=g.touches[0];this.updateHoverState(O.clientX,O.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(O.clientX,O.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const g=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(g>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const O=g*g*(3-2*g);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,O)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const N=new pe;class G{constructor(g,O,Z){this.mouse=g,this.manager=O,this.enabled=Z.enabled,this.speed=Z.speed,this.resumeDelay=Z.resumeDelay||3e3,this.rampDurationMs=(Z.rampDuration||0)*1e3,this.active=!1,this.current=new ot(0,0),this.target=new ot,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ot,this.pickNewTarget()}pickNewTarget(){const g=Math.random;this.target.set((g()*2-1)*(1-this.margin),(g()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const g=performance.now();if(g-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=g,this.activationTime=g),!this.active)return;this.mouse.isAutoActive=!0;let Z=(g-this.lastTime)/1e3;this.lastTime=g,Z>.2&&(Z=.016);const fe=this._tmpDir.subVectors(this.target,this.current),ne=fe.length();if(ne<.01){this.pickNewTarget();return}fe.normalize();let Pe=1;if(this.rampDurationMs>0){const Je=Math.min(1,(g-this.activationTime)/this.rampDurationMs);Pe=Je*Je*(3-2*Je)}const Ce=this.speed*Z*Pe,Ve=Math.min(Ce,ne);this.current.addScaledVector(fe,Ve),this.mouse.setNormalized(this.current.x,this.current.y)}}const ee=`
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
`,ye=`
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
`,U=`
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
`,ie=`
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
`,Ae=`
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
`,Be=`
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
`,te=`
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
`,de=`
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
`;class Re{constructor(g){this.props=g||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new r0,this.camera=new Vc,this.uniforms&&(this.material=new Go(this.props.material),this.geometry=new Ds(2,2),this.plane=new _i(this.geometry,this.material),this.scene.add(this.plane))}update(){he.renderer.setRenderTarget(this.props.output||null),he.renderer.render(this.scene,this.camera),he.renderer.setRenderTarget(null)}}class ke extends Re{constructor(g){super({material:{vertexShader:ee,fragmentShader:U,uniforms:{boundarySpace:{value:g.cellScale},px:{value:g.cellScale},fboSize:{value:g.fboSize},velocity:{value:g.src.texture},dt:{value:g.dt},isBFECC:{value:!0}}},output:g.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const g=new Li,O=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);g.setAttribute("position",new Ui(O,3));const Z=new Go({vertexShader:ye,fragmentShader:U,uniforms:this.uniforms});this.line=new MM(g,Z),this.scene.add(this.line)}update({dt:g,isBounce:O,BFECC:Z}){this.uniforms.dt.value=g,this.line.visible=O,this.uniforms.isBFECC.value=Z,super.update()}}class Ge extends Re{constructor(g){super({output:g.dst}),this.init(g)}init(g){super.init();const O=new Ds(1,1),Z=new Go({vertexShader:Se,fragmentShader:Ae,blending:Bh,depthWrite:!1,uniforms:{px:{value:g.cellScale},force:{value:new ot(0,0)},center:{value:new ot(0,0)},scale:{value:new ot(g.cursor_size,g.cursor_size)}}});this.mouse=new _i(O,Z),this.scene.add(this.mouse)}update(g){const O=N.diff.x/2*g.mouse_force,Z=N.diff.y/2*g.mouse_force,fe=g.cursor_size*g.cellScale.x,ne=g.cursor_size*g.cellScale.y,Pe=Math.min(Math.max(N.coords.x,-1+fe+g.cellScale.x*2),1-fe-g.cellScale.x*2),Ce=Math.min(Math.max(N.coords.y,-1+ne+g.cellScale.y*2),1-ne-g.cellScale.y*2),Ve=this.mouse.material.uniforms;Ve.force.value.set(O,Z),Ve.center.value.set(Pe,Ce),Ve.scale.value.set(g.cursor_size,g.cursor_size),super.update()}}class dt extends Re{constructor(g){super({material:{vertexShader:ee,fragmentShader:de,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},velocity_new:{value:g.dst_.texture},v:{value:g.viscous},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({viscous:g,iterations:O,dt:Z}){let fe,ne;this.uniforms.v.value=g;for(let Pe=0;Pe<O;Pe++)Pe%2===0?(fe=this.props.output0,ne=this.props.output1):(fe=this.props.output1,ne=this.props.output0),this.uniforms.velocity_new.value=fe.texture,this.props.output=ne,this.uniforms.dt.value=Z,super.update();return ne}}class Yt extends Re{constructor(g){super({material:{vertexShader:ee,fragmentShader:_e,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g}){this.uniforms.velocity.value=g.texture,super.update()}}class mt extends Re{constructor(g){super({material:{vertexShader:ee,fragmentShader:Be,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.dst_.texture},divergence:{value:g.src.texture},px:{value:g.cellScale}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({iterations:g}){let O,Z;for(let fe=0;fe<g;fe++)fe%2===0?(O=this.props.output0,Z=this.props.output1):(O=this.props.output1,Z=this.props.output0),this.uniforms.pressure.value=O.texture,this.props.output=Z,super.update();return Z}}class pt extends Re{constructor(g){super({material:{vertexShader:ee,fragmentShader:te,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.src_p.texture},velocity:{value:g.src_v.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g,pressure:O}){this.uniforms.velocity.value=g.texture,this.uniforms.pressure.value=O.texture,super.update()}}class Et{constructor(g){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...g},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ot,this.cellScale=new ot,this.boundarySpace=new ot,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Xi:wi}createAllFBO(){const O={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:fn,magFilter:fn,wrapS:ni,wrapT:ni};for(let Z in this.fbos)this.fbos[Z]=new Di(this.fboSize.x,this.fboSize.y,O)}createShaderPass(){this.advection=new ke({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ge({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new dt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Yt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new mt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new pt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const g=Math.max(1,Math.round(this.options.resolution*he.width)),O=Math.max(1,Math.round(this.options.resolution*he.height)),Z=1/g,fe=1/O;this.cellScale.set(Z,fe),this.fboSize.set(g,O)}resize(){this.calcSize();for(let g in this.fbos)this.fbos[g].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let g=this.fbos.vel_1;this.options.isViscous&&(g=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:g});const O=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:g,pressure:O})}}class at{constructor(){this.init()}init(){this.simulation=new Et,this.scene=new r0,this.camera=new Vc,this.output=new _i(new Ds(2,2),new Go({vertexShader:ee,fragmentShader:ie,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ot},palette:{value:X},bgColor:{value:oe}}})),this.scene.add(this.output)}addScene(g){this.scene.add(g)}resize(){this.simulation.resize()}render(){he.renderer.setRenderTarget(null),he.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Zt{constructor(g){this.props=g,he.init(g.$wrapper),N.init(g.$wrapper),N.autoIntensity=g.autoIntensity,N.takeoverDuration=g.takeoverDuration,this.lastUserInteraction=performance.now(),N.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new G(N,this,{enabled:g.autoDemo,speed:g.autoSpeed,resumeDelay:g.autoResumeDelay,rampDuration:g.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():Q.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(he.renderer.domElement),this.output=new at}resize(){he.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),N.update(),he.update(),this.output.update()}loop(){this.running&&(this.render(),H.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,H.current&&(cancelAnimationFrame(H.current),H.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),N.dispose(),he.renderer){const g=he.renderer.domElement;g&&g.parentNode&&g.parentNode.removeChild(g),he.renderer.dispose()}}catch{}}}const V=P.current;V.style.position=V.style.position||"relative",V.style.overflow=V.style.overflow||"hidden";const kt=new Zt({$wrapper:V,autoDemo:E,autoSpeed:A,autoIntensity:C,takeoverDuration:M,autoResumeDelay:S,autoRampDuration:F});L.current=kt,(()=>{if(!L.current)return;const w=L.current.output?.simulation;if(!w)return;const g=w.options.resolution;Object.assign(w.options,{mouse_force:o,cursor_size:t,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:h,BFECC:d,resolution:m,isBounce:p}),m!==g&&w.resize()})(),kt.start();const bt=new IntersectionObserver(w=>{const g=w[0],O=g.isIntersecting&&g.intersectionRatio>0;Q.current=O,L.current&&(O&&!document.hidden?L.current.start():L.current.pause())},{threshold:[0,.01,.1]});bt.observe(V),I.current=bt;const We=new ResizeObserver(()=>{L.current&&(R.current&&cancelAnimationFrame(R.current),R.current=requestAnimationFrame(()=>{L.current&&L.current.resize()}))});return We.observe(V),z.current=We,()=>{if(H.current&&cancelAnimationFrame(H.current),z.current)try{z.current.disconnect()}catch{}if(I.current)try{I.current.disconnect()}catch{}L.current&&L.current.dispose(),L.current=null}},[d,t,h,p,i,c,l,o,m,s,x,E,A,C,M,S,F]),pn.useEffect(()=>{const D=L.current;if(!D)return;const X=D.output?.simulation;if(!X)return;const oe=X.options.resolution;Object.assign(X.options,{mouse_force:o,cursor_size:t,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:h,BFECC:d,resolution:m,isBounce:p}),D.autoDriver&&(D.autoDriver.enabled=E,D.autoDriver.speed=A,D.autoDriver.resumeDelay=S,D.autoDriver.rampDurationMs=F*1e3,D.autoDriver.mouse&&(D.autoDriver.mouse.autoIntensity=C,D.autoDriver.mouse.takeoverDuration=M)),m!==oe&&X.resize()},[o,t,i,s,l,c,h,d,m,p,E,A,C,M,S,F]),k.jsx("div",{ref:P,className:`liquid-ether-container ${y||""}`,style:v})}function T1(){return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"background-layer",children:k.jsx(b1,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,autoDemo:!0})}),k.jsxs("main",{children:[k.jsx(BS,{}),k.jsx(VS,{}),k.jsx(XS,{}),k.jsxs(k.Fragment,{children:[k.jsx("section",{style:{padding:"1.5rem 3rem"},children:k.jsx("h1",{style:{fontFamily:"Aquire"},className:"featuredProjectContainer",children:"Featured Projects"})}),k.jsxs(fy,{children:[k.jsxs(rh,{children:[k.jsx("img",{src:"YOUR_IMAGE_PATH_HERE",className:"scrollstackimg"}),k.jsx("h2",{children:"LedgerCore"}),k.jsx("p",{children:"Engineered a production-oriented double-entry ledger and wallet system for atomic and duplicate-safe fund transfers. Implemented immutable ledger entries with ACID-compliant PostgreSQL transactions, row-level locking, and idempotency keys to prevent double spending and ensure correctness under concurrent requests. Built asynchronous transaction processing and scheduled reconciliation using Redis and BullMQ, with balances derived directly from the ledger rather than stored as mutable state."}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"Node.js"}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"TypeScript"}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"PostgreSQL"}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"Redis"}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"BullMQ"}),k.jsx("br",{}),k.jsx("a",{href:"YOUR_LEDGERCORE_GITHUB_LINK",target:"_blank",rel:"noopener noreferrer",className:"google-sans-code featured_project_buttons",children:"GitHub"}),k.jsx("a",{href:"YOUR_LEDGERCORE_LIVE_LINK",target:"_blank",rel:"noopener noreferrer",className:"google-sans-code featured_project_buttons",children:"Live"})]}),k.jsxs(rh,{children:[k.jsx("img",{src:"YOUR_IMAGE_PATH_HERE",className:"scrollstackimg"}),k.jsx("h2",{children:"CodeSentinal"}),k.jsx("p",{children:"Built an AI-powered GitHub PR review system that automatically analyzes pull requests and generates codebase-aware feedback using Gemini. Integrated GitHub Actions and Octokit to fetch repository files, inspect code changes, and post automated reviews directly on pull requests. Designed an evolving repository wiki that captures coding conventions, architecture, and database context, allowing the LLM to reason about changes using project-specific knowledge rather than isolated code."}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"TypeScript"}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"Node.js"}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"GitHub Actions"}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"Octokit"}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"Gemini API"}),k.jsx("br",{}),k.jsx("a",{href:"https://github.com/samarth96k/CodeSentinal",target:"_blank",rel:"noopener noreferrer",className:"google-sans-code featured_project_buttons",children:"GitHub"}),k.jsx("a",{href:"YOUR_CODESENTINAL_LIVE_LINK",target:"_blank",rel:"noopener noreferrer",className:"google-sans-code featured_project_buttons",children:"Live"})]}),k.jsxs(rh,{children:[k.jsx("img",{src:"YOUR_IMAGE_PATH_HERE",className:"scrollstackimg"}),k.jsx("h2",{children:"Forever Soles"}),k.jsx("p",{children:"Developed a full-stack e-commerce platform with a scalable MERN architecture covering authentication, product management, cart and order workflows, and secure payment processing. Integrated Stripe and Razorpay for payments, Cloudinary for optimized image management, and Redis for caching frequently accessed data. Implemented JWT-based authentication and backend APIs while incorporating AI-powered capabilities to enhance the overall shopping experience."}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"React"}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"Node.js"}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"MongoDB"}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"Redis"}),k.jsx("span",{className:"tech-element glass-tech google-sans-code",children:"Stripe & Razorpay"}),k.jsx("br",{}),k.jsx("a",{href:"https://github.com/samarth96k/ECommerceApp",target:"_blank",rel:"noopener noreferrer",className:"google-sans-code featured_project_buttons",children:"GitHub"}),k.jsx("a",{href:"https://e-commerce-app-frontend-dusky.vercel.app/",target:"_blank",rel:"noopener noreferrer",className:"google-sans-code featured_project_buttons",children:"Live"})]})]})]}),k.jsx("h1",{style:{fontFamily:"Aquire"},className:"education-title",children:"Education"}),k.jsx(qS,{}),k.jsx(YS,{}),k.jsx(cy,{}),k.jsx(uy,{})]})]})}zS.createRoot(document.getElementById("root")).render(k.jsx(pn.StrictMode,{children:k.jsx(T1,{})}));
