(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1433:function(o,e,n){var t=n(30),a=n(1484);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[o.i,a,""]]);var i={insert:function(o){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(o);let e;e=document.getElementsByTagName("apryse-webviewer"),e.length||(e=function o(e,n=document){const t=[];return n.querySelectorAll(e).forEach(o=>t.push(o)),n.querySelectorAll("*").forEach(n=>{n.shadowRoot&&t.push(...o(e,n.shadowRoot))}),t}("apryse-webviewer"));const n=[];for(let t=0;t<e.length;t++){const a=e[t];if(0===t)a.shadowRoot.appendChild(o),o.onload=function(){n.length>0&&n.forEach(e=>{e.innerHTML=o.innerHTML})};else{const e=o.cloneNode(!0);a.shadowRoot.appendChild(e),n.push(e)}}},singleton:!1};t(a,i);o.exports=a.locals||{}},1446:function(o,e,n){"use strict";var t=n(0),a=n.n(t),i=n(4),r=n.n(i),l=n(43),c=(n(1532),{img:r.a.string,label:r.a.oneOfType([r.a.string,r.a.number]),dataElement:r.a.string,onClick:r.a.func,ariaLabel:r.a.string,ariaControls:r.a.string,role:r.a.string,disabled:r.a.bool}),u=function(o){var e=o.img,n=o.dataElement,t=o.onClick,i=o.label,r=o.ariaLabel,c=o.ariaControls,u=o.role,s=o.disabled;return a.a.createElement(l.a,{className:"TextButton",img:e,label:i,dataElement:n,onClick:t,ariaLabel:r,ariaControls:c,role:u,disabled:s})};u.propTypes=c;var s=a.a.memo(u);e.a=s},1484:function(o,e,n){(o.exports=n(31)(!1)).push([o.i,".bookmark-outline-panel{display:flex;padding-left:var(--padding);padding-right:var(--padding-small)}.bookmark-outline-control-button{width:auto}.bookmark-outline-control-button span{color:inherit}.bookmark-outline-control-button,.bookmark-outline-control-button.disabled,.bookmark-outline-control-button[disabled]{color:var(--secondary-button-text)}.bookmark-outline-control-button.disabled,.bookmark-outline-control-button[disabled]{opacity:.5}.bookmark-outline-control-button.disabled span,.bookmark-outline-control-button[disabled] span{color:inherit}.bookmark-outline-control-button:not(.disabled):active,.bookmark-outline-control-button:not(.disabled):hover,.bookmark-outline-control-button:not([disabled]):active,.bookmark-outline-control-button:not([disabled]):hover{color:var(--secondary-button-hover)}.bookmark-outline-panel-header{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;padding:var(--padding-tiny);border-bottom:1px solid var(--divider)}.bookmark-outline-panel-header .header-title{font-size:16px}.bookmark-outline-row{flex-grow:1;overflow-y:auto}.msg-no-bookmark-outline{color:var(--placeholder-text);text-align:center}.bookmark-outline-single-container{display:flex;flex-flow:row nowrap;align-items:flex-start;border-radius:4px;margin-left:2px;margin-right:2px}.bookmark-outline-single-container.default{padding:var(--padding-tiny);border:1px solid transparent}.bookmark-outline-single-container.default.hover,.bookmark-outline-single-container.default:hover,.bookmark-outline-single-container.default[focus-within]{cursor:pointer}.bookmark-outline-single-container.default.hover,.bookmark-outline-single-container.default:focus-within,.bookmark-outline-single-container.default:hover{cursor:pointer}.bookmark-outline-single-container.default.hover .bookmark-outline-more-button,.bookmark-outline-single-container.default:hover .bookmark-outline-more-button,.bookmark-outline-single-container.default[focus-within] .bookmark-outline-more-button{display:flex;background-color:transparent}.bookmark-outline-single-container.default.hover .bookmark-outline-more-button,.bookmark-outline-single-container.default:focus-within .bookmark-outline-more-button,.bookmark-outline-single-container.default:hover .bookmark-outline-more-button{display:flex;background-color:transparent}.bookmark-outline-single-container.default[focus-within]{border-color:transparent}.bookmark-outline-single-container.default:focus-within{border-color:transparent}.bookmark-outline-single-container.default .bookmark-outline-label-row{overflow:hidden}.bookmark-outline-single-container.default.focus-visible,.bookmark-outline-single-container.default:focus-visible{outline:var(--focus-visible-outline)!important}.bookmark-outline-single-container.editing{background-color:var(--faded-component-background);padding:var(--padding-medium) 20px}.bookmark-outline-single-container.editing.focus-visible,.bookmark-outline-single-container.editing:focus-visible{outline:var(--focus-visible-outline)!important}.bookmark-outline-single-container.preview{display:inline-flex;margin-top:0;padding:var(--padding-small);background-color:var(--component-background);box-shadow:0 0 3px var(--note-box-shadow)}.bookmark-outline-single-container .bookmark-outline-checkbox{flex-grow:0;flex-shrink:0;margin-top:2px;margin-bottom:2px;margin-right:var(--padding-small)}.bookmark-outline-single-container .bookmark-outline-label-row{flex-grow:1;flex-shrink:1;display:flex;flex-flow:row wrap;align-items:flex-start;position:relative;overflow:hidden}.bookmark-outline-single-container .bookmark-outline-label{font-weight:600;flex-grow:1;flex-shrink:1;margin-bottom:var(--padding-small)}.bookmark-outline-single-container .bookmark-outline-input,.bookmark-outline-single-container .bookmark-outline-text{flex-grow:1;flex-shrink:1;flex-basis:calc(100% - 22px);margin-top:2px;margin-bottom:2px}.bookmark-outline-single-container .bookmark-text-input{margin-left:var(--padding-large)}.bookmark-outline-single-container .bookmark-outline-input{color:var(--text-color);width:calc(100% - var(--padding-large));padding:var(--padding-small);border:1px solid var(--border)}.bookmark-outline-single-container .bookmark-outline-input:focus{border-color:var(--outline-color)}.bookmark-outline-single-container .bookmark-outline-input::-moz-placeholder{color:var(--placeholder-text)}.bookmark-outline-single-container .bookmark-outline-input::placeholder{color:var(--placeholder-text)}.bookmark-outline-single-container .bookmark-outline-more-button{display:none;flex-grow:0;flex-shrink:0;width:16px;height:16px;margin:2px 2px 2px var(--padding-tiny)}.bookmark-outline-single-container .bookmark-outline-more-button .Icon{width:14px;height:14px}.bookmark-outline-single-container .bookmark-outline-more-button.icon-only:hover:not(:disabled):not(.disabled){box-shadow:none;outline:solid 1px var(--hover-border)}.bookmark-outline-single-container .bookmark-outline-more-button[focus-within].icon-only{border:none;box-shadow:none}.bookmark-outline-single-container .bookmark-outline-more-button:focus-within.icon-only{border:none;box-shadow:none}.bookmark-outline-single-container .bookmark-outline-more-button[focus-within] .Icon{color:var(--focus-border)}.bookmark-outline-single-container .bookmark-outline-more-button:focus-within .Icon{color:var(--focus-border)}.bookmark-outline-single-container .bookmark-outline-editing-controls{padding:2px;flex-basis:100%;display:flex;flex-flow:row wrap;justify-content:flex-end;align-items:center;margin-top:var(--padding-medium)}.bookmark-outline-single-container .bookmark-outline-cancel-button,.bookmark-outline-single-container .bookmark-outline-save-button{width:auto;padding:6px var(--padding)}.bookmark-outline-single-container .bookmark-outline-cancel-button{color:var(--secondary-button-text)}.bookmark-outline-single-container .bookmark-outline-cancel-button:hover{color:var(--secondary-button-hover)}.bookmark-outline-single-container .bookmark-outline-save-button{color:var(--primary-button-text);background-color:var(--primary-button);margin-left:var(--padding-tiny);border-radius:4px}.bookmark-outline-single-container .bookmark-outline-save-button:hover{background-color:var(--primary-button-hover)}.bookmark-outline-single-container .bookmark-outline-save-button.disabled,.bookmark-outline-single-container .bookmark-outline-save-button:disabled{background-color:var(--primary-button)!important;opacity:.5}.bookmark-outline-single-container .bookmark-outline-save-button.disabled span,.bookmark-outline-single-container .bookmark-outline-save-button:disabled span{color:var(--primary-button-text)}.bookmark-outline-footer{border-top:1.5px solid var(--gray-4);padding-top:var(--padding-medium);padding-bottom:var(--padding-medium);display:flex;justify-content:center;align-items:center}.bookmark-outline-footer .add-new-button .Icon{width:14px;height:14px;margin-right:var(--padding-tiny);color:inherit;fill:currentColor}.bookmark-outline-footer .add-new-button.disabled .Icon.disabled,.bookmark-outline-footer .add-new-button.disabled .Icon.disabled path,.bookmark-outline-footer .add-new-button[disabled] .Icon.disabled,.bookmark-outline-footer .add-new-button[disabled] .Icon.disabled path{color:inherit;fill:currentColor}.bookmark-outline-footer .multi-selection-button{width:auto;padding:7px}.bookmark-outline-footer .multi-selection-button .Icon{width:18px;height:18px}.bookmark-outline-footer .multi-selection-button:not(:first-child){margin-left:var(--padding-tiny)}.bookmark-outline-footer .multi-selection-button:hover{background-color:transparent}.bookmark-outline-footer .multi-selection-button.disabled:hover,.bookmark-outline-footer .multi-selection-button:disabled:hover{box-shadow:none}",""])},1532:function(o,e,n){var t=n(30),a=n(1533);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[o.i,a,""]]);var i={insert:function(o){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(o);let e;e=document.getElementsByTagName("apryse-webviewer"),e.length||(e=function o(e,n=document){const t=[];return n.querySelectorAll(e).forEach(o=>t.push(o)),n.querySelectorAll("*").forEach(n=>{n.shadowRoot&&t.push(...o(e,n.shadowRoot))}),t}("apryse-webviewer"));const n=[];for(let t=0;t<e.length;t++){const a=e[t];if(0===t)a.shadowRoot.appendChild(o),o.onload=function(){n.length>0&&n.forEach(e=>{e.innerHTML=o.innerHTML})};else{const e=o.cloneNode(!0);a.shadowRoot.appendChild(e),n.push(e)}}},singleton:!1};t(a,i);o.exports=a.locals||{}},1533:function(o,e,n){(o.exports=n(31)(!1)).push([o.i,".TextButton{color:var(--secondary-button-text);width:-moz-fit-content;width:fit-content;padding-left:8px;padding-right:8px}.TextButton .Icon{display:flex;align-items:center}.TextButton svg{color:var(--secondary-button-text);height:14px;width:14px}.TextButton:hover{box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6);background-color:var(--faded-component-background)}",""])},1568:function(o,e,n){var t=n(30),a=n(1569);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[o.i,a,""]]);var i={insert:function(o){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(o);let e;e=document.getElementsByTagName("apryse-webviewer"),e.length||(e=function o(e,n=document){const t=[];return n.querySelectorAll(e).forEach(o=>t.push(o)),n.querySelectorAll("*").forEach(n=>{n.shadowRoot&&t.push(...o(e,n.shadowRoot))}),t}("apryse-webviewer"));const n=[];for(let t=0;t<e.length;t++){const a=e[t];if(0===t)a.shadowRoot.appendChild(o),o.onload=function(){n.length>0&&n.forEach(e=>{e.innerHTML=o.innerHTML})};else{const e=o.cloneNode(!0);a.shadowRoot.appendChild(e),n.push(e)}}},singleton:!1};t(a,i);o.exports=a.locals||{}},1569:function(o,e,n){(e=o.exports=n(31)(!1)).push([o.i,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.BookmarksPanel{display:flex;flex-direction:column;flex:1;font-size:var(--font-size-default)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel{margin:16px;padding:0;overflow-y:auto}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel{margin:16px;padding:0;overflow-y:auto}}.BookmarksPanel .bookmark-switch{-webkit-font-smoothing:antialiased;margin-top:var(--padding-medium);padding-left:4px}.BookmarksPanel .bookmark-outline-single-container{margin-top:var(--padding-medium)}.BookmarksPanel .bookmark-outline-single-container[focus-within]:not(.editing){background-color:var(--outline-selected);outline:1px solid var(--bookmark-outline-hover-border)}.BookmarksPanel .bookmark-outline-single-container:focus-within:not(.editing){background-color:var(--outline-selected);outline:1px solid var(--bookmark-outline-hover-border)}.BookmarksPanel .msg-no-bookmark-outline{margin-top:var(--padding)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel .ui__choice__label{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel .ui__choice__label{font-size:13px}}.BookmarksPanel .ui__choice__input__switch{background-color:var(--gray-6)!important}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel .bookmark-outline-row{overflow:auto}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel .bookmark-outline-row{overflow:auto}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel .bookmark-outline-cancel-button,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel .bookmark-outline-control-button,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel .bookmark-outline-save-button{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel .bookmark-outline-cancel-button,.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel .bookmark-outline-control-button,.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel .bookmark-outline-save-button{font-size:13px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel .bookmark-outline-input,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .BookmarksPanel .bookmark-text-input{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel .bookmark-outline-input,.App.is-web-component:not(.is-in-desktop-only-mode) .BookmarksPanel .bookmark-text-input{font-size:13px}}.BookmarksPanel .panel-list-row .Button{font-weight:700}",""]),e.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1615:function(o,e,n){"use strict";n.r(e);n(38),n(34),n(112),n(23),n(8),n(24),n(46),n(52),n(32),n(25),n(35),n(94),n(107),n(88),n(18),n(11),n(13),n(14),n(10),n(9),n(12),n(16),n(15),n(20),n(17),n(27),n(28),n(22),n(53),n(57),n(54);var t=n(0),a=n.n(t),i=n(6),r=n(396),l=(n(150),n(84),n(3)),c=n(19),u=n.n(c),s=n(1),d=n(4),m=n.n(d),b=n(43),k=n(1446),p=n(74),f=n(1439),g=n(5),h=n(1455);n(1433);function v(o,e){return function(o){if(Array.isArray(o))return o}(o)||function(o,e){var n=null==o?null:"undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(null!=n){var t,a,i,r,l=[],c=!0,u=!1;try{if(i=(n=n.call(o)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(t=i.call(n)).done)&&(l.push(t.value),l.length!==e);c=!0);}catch(o){u=!0,a=o}finally{try{if(!c&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(u)throw a}}return l}}(o,e)||function(o,e){if(!o)return;if("string"==typeof o)return w(o,e);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(o,e)}(o,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(o,e){(null==e||e>o.length)&&(e=o.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=o[n];return t}var y={text:m.a.string.isRequired,label:m.a.string.isRequired,defaultLabel:m.a.string,pageIndex:m.a.number.isRequired,isAdding:m.a.bool,isMultiSelectionMode:m.a.bool,setSelected:m.a.func,onSave:m.a.func.isRequired,onRemove:m.a.func,onCancel:m.a.func,panelSelector:m.a.string},x=function(o){var e=o.text,n=o.label,c=o.defaultLabel,d=o.pageIndex,m=o.isAdding,w=o.isMultiSelectionMode,y=o.setSelected,x=o.onSave,E=o.onRemove,O=o.onCancel,A=o.panelSelector,S=v(Object(r.a)(),1)[0],B=v(Object(t.useState)(!1),2),P=B[0],C=B[1],T=v(Object(t.useState)(!1),2),j=T[0],_=T[1],I=v(Object(t.useState)(e),2),N=I[0],M=I[1],R=v(Object(t.useState)(void 0),2),L=R[0],D=R[1],K=Object(t.useRef)(),H=function(){return!N||e===N},z=function(){C(!1),x(""===N.trim()?S("message.untitled"):N)},U=function(){C(!1),P&&M(e),m&&O()};Object(t.useEffect)((function(){N!==e&&M(e)}),[e]),Object(t.useEffect)((function(){(m||P)&&(K.current.focus(),K.current.select()),_(!m&&!P)}),[P]);var W="".concat(g.a.BOOKMARK_FLYOUT,"-").concat(d),q=Object(i.e)((function(o){return l.a.getFlyout(o,W)})),F="bookmark-more-button-".concat(A,"-").concat(d),V={labelHeader:c,description:e,enableMoreOptionsContextMenuFlyout:!0,contentMenuFlyoutOptions:{shouldHideDeleteButton:!1,currentFlyout:q,flyoutSelector:W,type:"bookmark",handleOnClick:function(o){switch(o){case f.b.RENAME:C(!0);break;case f.b.DELETE:E(d)}}},contextMenuMoreButtonOptions:{flyoutToggleElement:W,moreOptionsDataElement:F},onClick:function(o){j&&1===o.detail&&D(setTimeout((function(){!function(o){s.a.setCurrentPage(o+1)}(d)}),300))},onDoubleClick:function(){j&&C(!0)},checkboxOptions:{id:"bookmark-checkbox-".concat(d+1),onChange:function(o){y(d,o.target.checked)},ariaLabel:"".concat(S("action.select")," ").concat(n),disabled:!w}};return a.a.createElement(a.a.Fragment,null,j&&a.a.createElement(h.a,V),(m||P)&&a.a.createElement(p.a,{className:u()({"bookmark-outline-single-container":!0,editing:m||P,default:j}),onDoubleClick:function(){j&&clearTimeout(L)}},a.a.createElement("div",{className:"bookmark-outline-label-row"},a.a.createElement("div",{className:"bookmark-outline-label"},m||P?n:c),a.a.createElement("input",{type:"text",name:"bookmark",ref:K,className:"bookmark-outline-input bookmark-text-input","aria-label":S("action.name"),value:N,onKeyDown:function(o){"Enter"===o.key&&(o.stopPropagation(),(m||P&&!H())&&z()),"Escape"===o.key&&U()},onChange:function(o){return M(o.target.value)}}),a.a.createElement("div",{className:"bookmark-outline-editing-controls"},a.a.createElement(k.a,{label:S("action.cancel"),onClick:U,ariaLabel:"".concat(S("action.cancel")," ").concat(S("component.bookmarkPanel"))}),m&&a.a.createElement(b.a,{className:"bookmark-outline-save-button",label:S("action.add"),isSubmitType:!0,onClick:z,ariaLabel:"".concat(S("action.add")," ").concat(S("component.bookmarkPanel"))}),P&&a.a.createElement(b.a,{className:"bookmark-outline-save-button",label:S("action.save"),isSubmitType:!0,disabled:H(),onClick:z,ariaLabel:"".concat(S("action.save")," ").concat(S("component.bookmarkPanel"))})))))};x.propTypes=y;var E=x,O=n(151),A=n(2);n(1568);function S(o){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function B(o){return function(o){if(Array.isArray(o))return I(o)}(o)||function(o){if("undefined"!=typeof Symbol&&null!=o[Symbol.iterator]||null!=o["@@iterator"])return Array.from(o)}(o)||_(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(o,e){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(o);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.push.apply(n,t)}return n}function C(o){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){T(o,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(n,e))}))}return o}function T(o,e,n){return(e=function(o){var e=function(o,e){if("object"!==S(o)||null===o)return o;var n=o[Symbol.toPrimitive];if(void 0!==n){var t=n.call(o,e||"default");if("object"!==S(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(o)}(o,"string");return"symbol"===S(e)?e:String(e)}(e))in o?Object.defineProperty(o,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[e]=n,o}function j(o,e){return function(o){if(Array.isArray(o))return o}(o)||function(o,e){var n=null==o?null:"undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(null!=n){var t,a,i,r,l=[],c=!0,u=!1;try{if(i=(n=n.call(o)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(t=i.call(n)).done)&&(l.push(t.value),l.length!==e);c=!0);}catch(o){u=!0,a=o}finally{try{if(!c&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(u)throw a}}return l}}(o,e)||_(o,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(o,e){if(o){if("string"==typeof o)return I(o,e);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(o,e):void 0}}function I(o,e){(null==e||e>o.length)&&(e=o.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=o[n];return t}var N=function(o){var e,n,c=o.panelSelector,d=j(Object(i.e)((function(o){return[l.a.isElementDisabled(o,g.a.BOOKMARK_PANEL),l.a.getBookmarks(o),l.a.getCurrentPage(o)-1,l.a.getPageLabels(o),l.a.isBookmarkIconShortcutVisible(o),l.a.getFeatureFlags(o)]}),i.c),6),m=d[0],f=d[1],h=d[2],v=d[3],w=d[4],y=d[5],x=j(Object(t.useState)(!1),2),S=x[0],P=x[1],_=j(Object(t.useState)(!1),2),I=_[0],N=_[1],M=j(Object(t.useState)([]),2),R=M[0],L=M[1],D=y.customizableUI,K=j(Object(r.a)(),1)[0],H=Object(i.d)();Object(t.useEffect)((function(){w&&!m?s.a.setBookmarkIconShortcutVisibility(!0):s.a.setBookmarkIconShortcutVisibility(!1)}),[m,w]);var z=Object.keys(f).map((function(o){return parseInt(o,10)}));Object(t.useEffect)((function(){R.forEach((function(o){z.includes(o)||L(R.filter((function(e){return e!==o})))})),0===z.length&&N(!1)}),[f]);var U=function(o){var e=K("warning.deleteBookmark.title"),n={message:K("warning.deleteBookmark.message"),title:e,onConfirm:function(){o.forEach((function(o){return s.a.removeUserBookmark(Number(o))})),L([])},confirmBtnText:K("action.delete")};H(A.a.showWarningMessage(n))};return m?null:a.a.createElement("div",{className:u()((e={Panel:!0,BookmarksPanel:!0,"bookmark-outline-panel":!0},T(e,c,!0),T(e,"modular-ui-panel",D),e)),"data-element":g.a.BOOKMARK_PANEL},a.a.createElement("div",{className:"bookmark-outline-panel-header"},a.a.createElement("div",{className:"header-title"},K("component.bookmarksPanel")),!I&&a.a.createElement(k.a,{dataElement:g.a.BOOKMARK_MULTI_SELECT,label:K("action.edit"),disabled:S||0===z.length,onClick:function(){return N(!0)},ariaLabel:"".concat(K("action.edit")," ").concat(K("component.bookmarksPanel"))}),I&&a.a.createElement(k.a,{dataElement:g.a.BOOKMARK_MULTI_SELECT,label:K("option.bookmarkOutlineControls.done"),disabled:S,onClick:function(){N(!1),L([])},ariaLabel:"".concat(K("option.bookmarkOutlineControls.done")," ").concat(K("action.edit"))})),a.a.createElement(O.a,{dataElement:g.a.BOOKMARK_SHORTCUT_OPTION,type:"checkbox",isSwitch:!0,id:"bookmark-view-option",className:"bookmark-switch",label:K("message.viewBookmark"),checked:w,onChange:function(o){return H(A.a.setBookmarkIconShortcutVisibility(o.target.checked))}}),!S&&0===z.length&&a.a.createElement("div",{className:"msg msg-no-bookmark-outline"},K("message.noBookmarks")),a.a.createElement("div",{className:"bookmark-outline-row"},S&&a.a.createElement(E,{isAdding:!0,label:"".concat(K("component.bookmarkPage")," ").concat(v[h]," - ").concat(K("component.bookmarkTitle")),text:null!==(n=f[h])&&void 0!==n?n:"",pageIndex:h,onSave:function(o){s.a.addUserBookmark(h,o),P(!1)},onCancel:function(){return P(!1)},panelSelector:c}),z.map((function(o){return a.a.createElement(E,{key:o,panelSelector:c,isMultiSelectionMode:I,label:"".concat(K("component.bookmarkPage")," ").concat(v[o]," - ").concat(K("component.bookmarkTitle")),defaultLabel:"".concat(K("component.bookmarkPage")," ").concat(v[o]),text:f[o],pageIndex:o,onSave:function(e){var n=C(C({},s.a.getUserBookmarks()),{},T({},o,e));s.a.setUserBookmarks(n)},onRemove:function(o){return U([o])},setSelected:function(o,e){o=o.toString(),R.find((function(e){return e===o}))?e||L(R.filter((function(e){return e!==o}))):e&&L([].concat(B(R),[o]))}})}))),a.a.createElement(p.a,{className:"bookmark-outline-footer",dataElement:g.a.BOOKMARK_ADD_NEW_BUTTON_CONTAINER},I?a.a.createElement(a.a.Fragment,null,a.a.createElement(b.a,{className:"multi-selection-button",img:"icon-menu-add",disabled:R.length>0||!!f[h]||S,onClick:function(){return P(!0)},ariaLabel:"".concat(K("action.add")," ").concat(K("component.bookmarkPanel"))}),a.a.createElement(b.a,{className:"multi-selection-button",img:"icon-delete-line",disabled:0===R.length,onClick:function(){return U(R)},ariaLabel:"".concat(K("action.delete")," ").concat(K("component.bookmarkPanel"))})):a.a.createElement(k.a,{img:"icon-menu-add",dataElement:g.a.BOOKMARK_ADD_NEW_BUTTON,label:"".concat(K("action.add")," ").concat(K("component.bookmarkPanel")),disabled:S||!!f[h],onClick:function(){return P(!0)},ariaLabel:"".concat(K("action.add")," ").concat(K("component.bookmarkPanel"))})))};e.default=N}}]);
//# sourceMappingURL=chunk.44.js.map