(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1843:function(t,n,e){var o=e(30),r=e(1844);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var a={insert:function(t){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(t);let n;n=document.getElementsByTagName("apryse-webviewer"),n.length||(n=function t(n,e=document){const o=[];return e.querySelectorAll(n).forEach(t=>o.push(t)),e.querySelectorAll("*").forEach(e=>{e.shadowRoot&&o.push(...t(n,e.shadowRoot))}),o}("apryse-webviewer"));const e=[];for(let o=0;o<n.length;o++){const r=n[o];if(0===o)r.shadowRoot.appendChild(t),t.onload=function(){e.length>0&&e.forEach(n=>{n.innerHTML=t.innerHTML})};else{const n=t.cloneNode(!0);r.shadowRoot.appendChild(n),e.push(n)}}},singleton:!1};o(r,a);t.exports=r.locals||{}},1844:function(t,n,e){(n=t.exports=e(31)(!1)).push([t.i,".open.WarningModal{visibility:visible}.closed.WarningModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.WarningModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.WarningModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.WarningModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.WarningModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.WarningModal .footer .modal-button.cancel:hover,.WarningModal .footer .modal-button.second-option-button:hover,.WarningModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.WarningModal .footer .modal-button.cancel,.WarningModal .footer .modal-button.second-option-button,.WarningModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.WarningModal .footer .modal-button.cancel.disabled,.WarningModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.WarningModal .footer .modal-button.cancel.disabled span,.WarningModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.WarningModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.WarningModal .modal-container .wrapper .modal-content{padding:10px}.WarningModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.WarningModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.WarningModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.WarningModal .footer .modal-button.confirm{margin-left:4px}.WarningModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .footer .modal-button{padding:23px 8px}}.WarningModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .swipe-indicator{width:32px}}.WarningModal{z-index:101}.WarningModal .container{display:flex;width:480px;flex-direction:column;align-items:flex-start;border-radius:4px;background:var(--component-background)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .container{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .container{width:100%}}.WarningModal.connect-to-url-modal{overflow:hidden;word-break:break-all}.WarningModal .header{display:flex;align-items:center;position:relative;width:100%;padding:16px}.WarningModal .header .header-text span{font-size:16px;font-weight:700}.WarningModal .header .Button{position:absolute;top:10px;right:10px}.WarningModal .header .Button .Icon{height:22px;width:22px;color:var(--icon-color)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .header .Button .Icon{height:28px;width:28px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .header .Button .Icon{height:28px;width:28px}}.WarningModal .header .Button:hover{background:var(--view-header-button-hover);border-radius:4px}.WarningModal .body{font-size:13px;padding:16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .body{padding:16px 32px 16px 16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .body{padding:16px 32px 16px 16px}}.WarningModal .body .customMessage p:first-child{margin-top:0}.WarningModal .body .customMessage p:last-child{margin-bottom:0}.WarningModal .body .footer{justify-content:flex-start}.WarningModal .footer{padding:16px;margin-top:0}.WarningModal .footer .ui__choice--center{flex:auto;align-self:center}.WarningModal .footer .modal-button{height:32px;margin:0}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .footer .modal-button{padding:0;border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;height:32px;width:52px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer;font-size:13px}:host(:not([data-tabbing=true])) .App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .footer .modal-button,html:not([data-tabbing=true]) .App:not(.is-in-desktop-only-mode):not(.is-web-component) .WarningModal .footer .modal-button{outline:none}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .footer .modal-button{padding:0;border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;height:32px;width:52px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer;font-size:13px}:host(:not([data-tabbing=true])) .App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .footer .modal-button,html:not([data-tabbing=true]) .App.is-web-component:not(.is-in-desktop-only-mode) .WarningModal .footer .modal-button{outline:none}}.WarningModal .divider{height:1px;width:100%;background:var(--divider)}",""]),n.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1942:function(t,n,e){"use strict";e.r(n);e(46),e(52),e(38),e(18),e(11),e(13),e(8),e(14),e(10),e(9),e(12),e(16),e(15),e(20),e(17),e(56),e(22),e(63),e(64),e(65),e(66),e(36),e(40),e(23),e(24),e(41),e(62),e(27),e(28),e(25);var o=e(0),r=e.n(o),a=e(6),i=e(26),d=e(1),l=e(43),c=e(279),s=e(1458),p=e(19),u=e.n(p),f=e(2),m=e(3),h=e(5),g=e(333),b=e(169);e(1843);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,n,e){return(n=function(t){var n=function(t,n){if("object"!==y(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,n||"default");if("object"!==y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===y(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function x(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */x=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",d=r.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function c(t,n,e,r){var a=n&&n.prototype instanceof u?n:u,i=Object.create(a.prototype),d=new L(r||[]);return o(i,"_invoke",{value:M(t,e,d)}),i}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var p={};function u(){}function f(){}function m(){}var h={};l(h,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(j([])));b&&b!==n&&e.call(b,a)&&(h=b);var v=m.prototype=u.prototype=Object.create(h);function w(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function W(t,n){var r;o(this,"_invoke",{value:function(o,a){function i(){return new n((function(r,i){!function o(r,a,i,d){var l=s(t[r],t,a);if("throw"!==l.type){var c=l.arg,p=c.value;return p&&"object"==y(p)&&e.call(p,"__await")?n.resolve(p.__await).then((function(t){o("next",t,i,d)}),(function(t){o("throw",t,i,d)})):n.resolve(p).then((function(t){c.value=t,i(c)}),(function(t){return o("throw",t,i,d)}))}d(l.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}})}function M(t,n,e){var o="suspendedStart";return function(r,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw a;return O()}for(e.method=r,e.arg=a;;){var i=e.delegate;if(i){var d=k(i,e);if(d){if(d===p)continue;return d}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===o)throw o="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o="executing";var l=s(t,n,e);if("normal"===l.type){if(o=e.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(o="completed",e.method="throw",e.arg=l.arg)}}}function k(t,n){var e=n.method,o=t.iterator[e];if(void 0===o)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,k(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var r=s(o,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,p;var a=r.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function A(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function n(){for(;++o<t.length;)if(e.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=m,o(v,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:f,configurable:!0}),f.displayName=l(m,d,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===f||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,d,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},w(W.prototype),l(W.prototype,i,(function(){return this})),t.AsyncIterator=W,t.async=function(n,e,o,r,a){void 0===a&&(a=Promise);var i=new W(c(n,e,o,r),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(v),l(v,d,"Generator"),l(v,a,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var o in n)e.push(o);return e.reverse(),function t(){for(;e.length;){var o=e.pop();if(o in n)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(e,o){return i.type="throw",i.arg=t,n.next=e,o&&(n.method="next",n.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var d=e.call(a,"catchLoc"),l=e.call(a,"finallyLoc");if(d&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(d){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&e.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),A(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var o=e.completion;if("throw"===o.type){var r=o.arg;A(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:j(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function w(t,n,e,o,r,a,i){try{var d=t[a](i),l=d.value}catch(t){return void e(t)}d.done?n(l):Promise.resolve(l).then(o,r)}function W(t){return function(){var n=this,e=arguments;return new Promise((function(o,r){var a=t.apply(n,e);function i(t){w(a,o,r,i,d,"next",t)}function d(t){w(a,o,r,i,d,"throw",t)}i(void 0)}))}}function M(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var o,r,a,i,d=[],l=!0,c=!1;try{if(a=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;l=!1}else for(;!(l=(o=a.call(e)).done)&&(d.push(o.value),d.length!==n);l=!0);}catch(t){c=!0,r=t}finally{try{if(!l&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw r}}return d}}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return k(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return k(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var E=function(){var t=r.a.createRef(),n=M(Object(a.e)((function(t){return[m.a.getWarningTitle(t)||"",m.a.getWarningMessage(t),m.a.getWarningConfirmEvent(t),m.a.getWarningConfirmBtnText(t),m.a.getWarningSecondaryEvent(t),m.a.getWarningSecondaryBtnText(t),m.a.getWarningSecondaryBtnClass(t),m.a.getWarningCancelEvent(t),m.a.isElementDisabled(t,h.a.WARNING_MODAL),m.a.isElementOpen(t,h.a.WARNING_MODAL),m.a.getShowAskAgainCheckbox(t),m.a.getWarningTemplateStrings(t)||{},m.a.getWarningModalClass(t)||"",m.a.getWarningCloseEvent(t)||""]}),a.c),14),e=n[0],p=n[1],y=n[2],w=n[3],k=n[4],E=n[5],A=n[6],L=n[7],j=n[8],O=n[9],S=n[10],N=n[11],_=n[12],C=n[13],T=M(Object(o.useState)(!1),2),I=T[0],P=T[1],G=Object(a.d)(),B=Object(s.a)("Modal WarningModal ".concat(_),{isOpen:O}),R=i.a.t(w,N)||i.a.t("action.ok");Object(o.useEffect)((function(){return d.a.addEventListener("documentUnloaded",U),function(){d.a.removeEventListener("documentUnloaded",U)}}),[]),Object(o.useEffect)((function(){O&&P(!1)}),[O]);var D,F,z=function(){var t=W(x().mark((function t(){return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!O){t.next=6;break}if(t.t0=C,!t.t0){t.next=5;break}return t.next=5,C(I);case 5:G(f.a.closeElements(h.a.WARNING_MODAL));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),H=Object(b.a)(z),U=function(){var t=W(x().mark((function t(){return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=L,!t.t0){t.next=4;break}return t.next=4,L();case 4:H();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),q=function(){var t=W(x().mark((function t(n){return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=y,!t.t0){t.next=4;break}return t.next=4,y(n);case 4:H();case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),J=function(){var t=W(x().mark((function t(){return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=k,!t.t0){t.next=4;break}return t.next=4,k();case 4:H();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return j?null:r.a.createElement("div",{className:B,onMouseDown:U,role:"alertdialog","aria-modal":"true","aria-label":i.a.t(e,N),"aria-describedby":i.a.t(e,N)},r.a.createElement(g.a,{title:i.a.t(e,N),isOpen:O,closeHandler:U,onCloseClick:U,swipeToClose:!0},r.a.createElement("div",{className:"container",onMouseDown:function(t){return t.stopPropagation()}},r.a.createElement("div",{className:"body"},(F="string"==typeof p&&i.a.exists(p)?i.a.t(p,N):p,null!==(D=F.includes)&&void 0!==D&&D.call(F,"\n")?F.split("\n").map((function(t,n){return r.a.createElement(r.a.Fragment,{key:n},0===n?r.a.createElement(r.a.Fragment,null,t):r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),t))})):F)),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"footer"},S&&r.a.createElement(c.a,{dataElement:"doNotAskAgainCheckbox",ref:t,id:"do-not-ask-again-checkbox",name:"do-not-ask-again-checkbox",label:i.a.t("message.doNotAskAgain"),onChange:function(t){return P(t.target.checked)},checked:I,center:!0}),k&&r.a.createElement(l.a,{className:u()(v({"modal-button":!0,"second-option-button":!0},A,A)),dataElement:"WarningModalClearButton",label:i.a.t(E,N),onClick:J}),r.a.createElement(l.a,{className:"confirm modal-button",dataElement:"WarningModalSignButton",label:R,onClick:q})))))};n.default=E}}]);
//# sourceMappingURL=chunk.75.js.map