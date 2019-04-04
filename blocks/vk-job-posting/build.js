!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";e.exports=n(2)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=wp.i18n.__,l=wp.blocks.registerBlockType,i=wp.components,c=i.RangeControl,a=i.ServerSideRender,f=i.PanelBody,s=i.SelectControl,p=wp.element.Fragment,y=wp.editor.InspectorControls;l("vk-blocks/job-posting",{title:u("Job Posting","vk-job-posting"),category:"vk-blocks-cat",attributes:{id:{type:"number",default:0},style:{type:"string",default:"default"}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=(e.className,t.id),l=t.style;return o.a.createElement(p,null,o.a.createElement(y,null,o.a.createElement(f,null,o.a.createElement(c,{help:"Please enter the post ID which you want to display.",value:r,onChange:function(e){n({id:e})},min:0,step:1}),o.a.createElement(s,{label:u("Table Style","vk-job-posting"),value:l,onChange:function(e){return n({style:e})},options:[{value:"default",label:u("Default","vk-job-posting")},{value:"stripe",label:u("Stripe","vk-job-posting")}]}))),o.a.createElement("div",null,o.a.createElement(a,{block:"vk-blocks/job-posting",attributes:t})))},save:function(){return null}})},function(e,t,n){"use strict";
/** @license React v16.8.4
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(3),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,u,l,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,u,l,i],a=0;(e=Error(t.replace(/%s/g,function(){return c[a++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S={};function j(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||g}function _(){}function k(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||g}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&h("85"),this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=j.prototype;var w=k.prototype=new _;w.constructor=k,r(w,j.prototype),w.isPureReactComponent=!0;var O={current:null},P={current:null},x=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r=void 0,o={},l=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)x.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var a=Array(c),f=0;f<c;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:u,type:e,key:l,ref:i,props:o,_owner:P.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,M=[];function I(e,t,n,r){if(M.length){var o=M.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>M.length&&M.push(e)}function T(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var c=!1;if(null===t)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case u:case l:c=!0}}if(c)return r(o,t,""===n?"."+q(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var a=0;a<t.length;a++){var f=n+q(i=t[a],a);c+=e(i,f,r,o)}else if(f=null===t||"object"!=typeof t?null:"function"==typeof(f=m&&t[m]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),a=0;!(i=t.next()).done;)c+=e(i=i.value,f=n+q(i,a++),r,o);else"object"===i&&h("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,function(e){return e}):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(R,"$&/")+"/"),T(e,D,t=I(t,u,r,o)),A(t)}function N(){var e=O.current;return null===e&&h("307"),e}var L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,U,t=I(null,null,t,n)),A(t)},count:function(e){return T(e,function(){return null},null)},toArray:function(e){var t=[];return F(e,t,null,function(e){return e}),t},only:function(e){return $(e)||h("143"),e}},createRef:function(){return{current:null}},Component:j,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return N().useCallback(e,t)},useContext:function(e,t){return N().useContext(e,t)},useEffect:function(e,t){return N().useEffect(e,t)},useImperativeHandle:function(e,t,n){return N().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return N().useLayoutEffect(e,t)},useMemo:function(e,t){return N().useMemo(e,t)},useReducer:function(e,t,n){return N().useReducer(e,t,n)},useRef:function(e){return N().useRef(e)},useState:function(e){return N().useState(e)},Fragment:i,StrictMode:c,Suspense:d,createElement:E,cloneElement:function(e,t,n){null==e&&h("267",e);var o=void 0,l=r({},e.props),i=e.key,c=e.ref,a=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,a=P.current),void 0!==t.key&&(i=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)x.call(t,o)&&!C.hasOwnProperty(o)&&(l[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))l.children=n;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];l.children=f}return{$$typeof:u,type:e.type,key:i,ref:c,props:l,_owner:a}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.8.4",unstable_ConcurrentMode:p,unstable_Profiler:a,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:O,ReactCurrentOwner:P,assign:r}},V={default:L},B=V&&L||V;e.exports=B.default||B},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var a in n=Object(arguments[c]))o.call(n,a)&&(i[a]=n[a]);if(r){l=r(n);for(var f=0;f<l.length;f++)u.call(n,l[f])&&(i[l[f]]=n[l[f]])}}return i}}]);
//# sourceMappingURL=build.js.map