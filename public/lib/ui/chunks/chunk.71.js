(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1793:function(e,t,n){var a=n(30),o=n(1794);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function e(t,n=document){const a=[];return n.querySelectorAll(t).forEach(e=>a.push(e)),n.querySelectorAll("*").forEach(n=>{n.shadowRoot&&a.push(...e(t,n.shadowRoot))}),a}("apryse-webviewer"));const n=[];for(let a=0;a<t.length;a++){const o=t[a];if(0===a)o.shadowRoot.appendChild(e),e.onload=function(){n.length>0&&n.forEach(t=>{t.innerHTML=e.innerHTML})};else{const t=e.cloneNode(!0);o.shadowRoot.appendChild(t),n.push(t)}}},singleton:!1};a(o,i);e.exports=o.locals||{}},1794:function(e,t,n){(t=e.exports=n(31)(!1)).push([e.i,".open.ScaleModal{visibility:visible}.closed.ScaleModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ScaleModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.ScaleModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.ScaleModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.ScaleModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.ScaleModal .footer .modal-button.cancel:hover,.ScaleModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.ScaleModal .footer .modal-button.cancel,.ScaleModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.ScaleModal .footer .modal-button.cancel.disabled,.ScaleModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.ScaleModal .footer .modal-button.cancel.disabled span,.ScaleModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.ScaleModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.ScaleModal .modal-container .wrapper .modal-content{padding:10px}.ScaleModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.ScaleModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.ScaleModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.ScaleModal .footer .modal-button.confirm{margin-left:4px}.ScaleModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .footer .modal-button{padding:23px 8px}}.ScaleModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .swipe-indicator{width:32px}}.ScaleModal .modal-container{width:480px;overflow-y:visible}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container{width:100%;position:fixed;border-radius:0;left:0;bottom:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container{width:100%;position:fixed;border-radius:0;left:0;bottom:0}}.ScaleModal .modal-container .content-container{padding:24px 16px 16px}.ScaleModal .modal-container .content-container .ui__choice__label{font-weight:700;font-size:13px;line-height:16px;display:flex;align-items:center}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-option{padding:4px 0}.ScaleModal .modal-container .content-container .scaleSetting .custom-option-wrapper{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.ScaleModal .modal-container .content-container .scaleSetting .custom-option-wrapper .calibrate-btn{font-weight:400;line-height:16px;display:flex;align-items:center;text-align:center;color:var(--blue-5);background-color:transparent;border:none;cursor:pointer}.ScaleModal .modal-container .content-container .scaleSetting .custom-option-wrapper .calibrate-btn:hover{color:var(--blue-6)}.ScaleModal .modal-container .content-container .scaleSetting .selector{margin-top:16px;width:100%;height:32px;margin-bottom:18px}.ScaleModal .modal-container .content-container .scaleSetting .selector .Dropdown__wrapper{width:100%;height:100%}.ScaleModal .modal-container .content-container .scaleSetting .selector .Dropdown__wrapper .Dropdown{height:100%;width:100%!important;text-align:left}.ScaleModal .modal-container .content-container .scaleSetting .selector .Dropdown__wrapper .Dropdown .arrow{flex:0 1 auto}.ScaleModal .modal-container .content-container .scaleSetting .selector .Dropdown__wrapper .Dropdown__items{width:100%}.ScaleModal .modal-container .content-container .scaleSetting .block{height:18px}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container{margin-top:8px;margin-bottom:8px}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display{display:flex;flex-direction:row;align-items:center;justify-content:space-between;grid-gap:8px;gap:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .left-container,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .left-container .input-wrapper>div,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .right-container,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .right-container .input-wrapper>div{flex:1}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .left-container,.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .left-container .input-wrapper>div,.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .right-container,.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .right-container .input-wrapper>div{flex:1}}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .unit-label{padding-bottom:8px}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .scale-ratio-display .scale-ratio-equal{padding-top:24px;font-size:20px;width:28px;text-align:center}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper{display:flex;flex-direction:row}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .scale-input{border-radius:var(--border-radius);border:1px solid var(--border);width:94px;height:32px;margin-right:8px;padding-left:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .scale-input{width:79px;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .scale-input{width:79px;height:32px}}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .scale-input.invalid-value{border-color:var(--red)}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .scale-input:not(.invalid-value):focus{border:1px solid var(--blue-5)}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input{width:100px;height:32px}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input .Dropdown__wrapper{width:100%;height:100%}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input .Dropdown__wrapper .Dropdown{height:100%;text-align:left}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input .Dropdown__wrapper .Dropdown__items{width:100%}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input{width:4rem;height:2rem}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input{width:4rem;height:2rem}}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper input::-webkit-inner-spin-button,.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .input-wrapper input[type=number]{-moz-appearance:textfield}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .warning-alert{position:relative;margin-right:8px}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .warning-alert input{margin-right:0!important}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .warning-alert .Icon{text-align:center;position:absolute;top:50%;right:5px;margin:auto;transform:translateY(-50%);color:var(--red);display:block}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .warning-alert-icon{display:none}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .warning-messages{height:16px;font-weight:400;color:var(--red);margin-top:4px;position:relative;display:flex}.ScaleModal .modal-container .content-container .scaleSetting .custom-scale-container .warning-messages .world-value-warning{position:absolute;left:246px}.ScaleModal .modal-container .content-container .precision-container{display:flex;font-size:13px;font-weight:400;margin-top:16px;align-items:center;justify-content:space-between;border-top:1px solid var(--modal-stroke-and-border);padding-top:16px;grid-gap:16px;gap:16px}.ScaleModal .modal-container .content-container .precision-container .precision-selector{display:flex;justify-content:space-between;align-items:center;width:288px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .precision-container .precision-selector{flex:2}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .precision-container .precision-selector{flex:2}}.ScaleModal .modal-container .content-container .precision-container .precision-selector .precision-title{height:1rem;font-weight:400;font-size:13px;line-height:16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .precision-container .precision-selector .precision-title{margin-right:8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .precision-container .precision-selector .precision-title{margin-right:8px}}.ScaleModal .modal-container .content-container .precision-container .precision-selector .selector{width:223px;height:32px;z-index:0}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .precision-container .precision-selector .selector{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .precision-container .precision-selector .selector{width:100%}}.ScaleModal .modal-container .content-container .precision-container .precision-selector .selector .Dropdown__wrapper{width:100%;height:100%}.ScaleModal .modal-container .content-container .precision-container .precision-selector .selector .Dropdown__wrapper .Dropdown{height:100%;width:100%!important;text-align:left}.ScaleModal .modal-container .content-container .precision-container .precision-selector .selector .Dropdown__wrapper .Dropdown .arrow{flex:0 1 auto}.ScaleModal .modal-container .content-container .precision-container .precision-selector .selector .Dropdown__wrapper .Dropdown__items{width:100%}.ScaleModal .modal-container .content-container .precision-container .ui__choice__label{font-weight:400}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .content-container .precision-container .fractional-units-container{flex:1}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .content-container .precision-container .fractional-units-container{flex:1}}.ScaleModal .modal-container .footer{display:flex;padding:16px;align-items:center;justify-content:flex-end;width:100%;box-shadow:inset 0 1px 0 var(--modal-stroke-and-border);margin:0}.ScaleModal .modal-container .footer .scale-update{height:32px;min-width:72px;display:flex;align-items:center;justify-content:center;color:var(--blue-5);background-color:transparent;border:1px solid var(--blue-5);box-sizing:border-box;border-radius:var(--border-radius);cursor:pointer;margin-right:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .footer .scale-update{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .footer .scale-update{font-size:13px}}.ScaleModal .modal-container .footer .scale-update:enabled:hover{border:1px solid var(--blue-6);color:var(--blue-6)}.ScaleModal .modal-container .footer .scale-update:disabled{opacity:.5;cursor:not-allowed}.ScaleModal .modal-container .footer .scale-create{border:none;background-color:transparent;background:var(--primary-button);border-radius:var(--border-radius);padding:0 8px;height:32px;min-width:72px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}:host(:not([data-tabbing=true])) .ScaleModal .modal-container .footer .scale-create,html:not([data-tabbing=true]) .ScaleModal .modal-container .footer .scale-create{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .modal-container .footer .scale-create{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .modal-container .footer .scale-create{font-size:13px}}.ScaleModal .modal-container .footer .scale-create:enabled:hover{background:var(--primary-button-hover)}.ScaleModal .modal-container .footer .scale-create:disabled{opacity:.5;cursor:not-allowed}.ScaleModal .ui__choice__input__check.ui__choice__input__check--checked{border:3px solid var(--gray-0);outline:solid 1px var(--blue-5);background-color:var(--blue-5)}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1927:function(e,t,n){"use strict";n.r(t);n(34),n(46),n(52),n(88),n(8),n(84),n(335),n(94),n(107),n(35),n(38),n(18),n(11),n(13),n(14),n(10),n(9),n(12),n(16),n(15),n(20),n(17);var a=n(0),o=n.n(a),i=n(6),r=n(396),c=n(1265),l=n(19),s=n.n(l),d=n(342),p=n(1),m=n(2),u=n(3),f=(n(32),n(150),n(141),n(4)),b=n.n(f),w=n(125),g=n(81),h=n(42);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,o,i,r,c=[],l=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=i.call(n)).done)&&(c.push(a.value),c.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(s)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var v=window.Core.Scale,y={scale:b.a.array,onScaleChange:b.a.func,precision:b.a.number};function M(e){var t=e.scale,n=e.onScaleChange,c=e.precision,l=S(Object(i.e)((function(e){return[u.a.getMeasurementUnits(e)]}),i.c),1)[0],p=S(Object(a.useState)(""),2),m=p[0],f=p[1],b=S(Object(a.useState)(""),2),x=b[0],y=b[1],M=S(Object(a.useState)(!1),2),E=M[0],A=M[1],k=S(Object(a.useState)(""),2),j=k[0],O=k[1],_=S(Object(a.useState)(""),2),C=_[0],N=_[1],D=S(Object(a.useState)(!1),2),I=D[0],L=D[1],T=S(Object(a.useState)(0),2),R=T[0],z=T[1],U=Object(a.useRef)(null),H=Object(a.useRef)(null),F=Object(a.useRef)(null),P=S(Object(r.a)(),1)[0],B=function(e){return e.filter((function(e){return d.e.includes(e)}))},V=E?B(l.from):l.from,W=E?B(l.to):l.to;Object(a.useEffect)((function(){V.includes(t[0][1])||Q(V[0],!0)}),[t[0][1]]),Object(a.useEffect)((function(){V.includes(t[0][1])&&!W.includes(t[1][1])&&Q(W[0],!1)}),[t[0][1],t[1][1]]),Object(a.useEffect)((function(){var e=function(e){return null==e?void 0:e.toFixed((1/c).toString().length-1)};t[0][0]&&(null==U?void 0:U.current)!==document.activeElement&&f(E?v.getFormattedValue(t[0][0],t[0][1],c,!1,!0)||"":e(t[0][0])||""),!t[1][0]||H&&H.current===document.activeElement||(E||"ft-in"===t[1][1]?y(v.getFormattedValue(t[1][0],t[1][1],c,!1,!0)||""):y(e(t[1][0])||""))}),[t,c,H,U,E,I]),Object(a.useEffect)((function(){A(Object(d.j)(c))}),[c]),Object(a.useEffect)((function(){E?(O(d.i[t[0][1]]),N(d.i[t[1][1]])):"ft-in"===t[1][1]?(O(""),N(d.i["ft-in decimal"])):(O(""),N(""))}),[t,E]),Object(a.useEffect)((function(){!K&&Y(H.current.value,!1)}),[t[1][1]]),Object(a.useEffect)((function(){if(q||K)!q&&Y(U.current.value,!0),!K&&Y(H.current.value,!1);else{var e={value:t[0][0],unit:t[0][1]};Y(U.current.value,!0,(function(t){e=t.pageScale}));var n={value:t[1][0],unit:t[1][1]};Y(H.current.value,!1,(function(e){n=e.worldScale})),$(new v({pageScale:e,worldScale:n}))}}),[E]),Object(a.useEffect)((function(){F.current&&z((F.current.clientWidth-8)/2)}),[F]);var q=!!t[0][0],K=!!t[1][0],G=s()("scale-input",{"invalid-value":!q}),J=s()("scale-input",{"invalid-value":!K}),$=function(e){var t=function(e){return"ft-in"===e?c/12:c};e.pageScale.value&&e.pageScale.value<c&&(e.pageScale.value=t(e.pageScale.unit)),e.worldScale.value&&e.worldScale.value<c&&(e.worldScale.value=t(e.worldScale.unit)),n(e)},Y=function(e,n,a){var o=function(e){if(n&&e!==t[0][0]||!n&&e!==t[1][0]){var o=new v({pageScale:{value:n?e:t[0][0],unit:t[0][1]},worldScale:{value:n?t[1][0]:e,unit:t[1][1]}});a?a(o):$(o)}};n?f(e):y(e);var i=e.trim();if(E){var r=n?t[0][1]:t[1][1];if("in"===r){if(d.k.test(i)){var c=Object(d.p)(i);if(c>0)return void o(c)}}else if("ft-in"===r&&d.g.test(i)){var l=Object(d.o)(i);if(l>0)return void o(l)}}else if(n||"ft-in"!==t[1][1]){if(d.d.test(i)){return void o(parseFloat(i)||0)}}else if(d.f.test(i)){var s=Object(d.n)(i);if(s>0)return void o(s)}o(void 0)},Q=function(e,n){var a,o;a=n&&e!==t[0][1]?{value:t[0][0]?Object(d.c)(t[0][0],t[0][1],e):t[0][0],unit:e}:{value:t[0][0],unit:t[0][1]},o=n||e===t[1][1]?{value:t[1][0],unit:t[1][1]}:{value:t[1][0]?Object(d.c)(t[1][0],t[1][1],e):t[1][0],unit:e},$(new v({pageScale:a,worldScale:o}))},X=function(e){var n=e?t[0][1]:t[1][1];return E?d.i[n]:"ft-in"===n?d.i["ft-in decimal"]:""},Z=function(){L((function(e){return!e}))};return o.a.createElement("div",{className:"custom-scale-container"},o.a.createElement("div",{className:"scale-ratio-input-container"},o.a.createElement("div",{className:"scale-ratio-display"},o.a.createElement("div",{className:"left-container",ref:F},o.a.createElement("div",{className:"unit-label",id:"paper-units-dropdown-label"},P("option.measurement.scaleModal.paperUnits")),o.a.createElement("div",{className:"input-wrapper"},o.a.createElement("div",{className:s()({"warning-alert":!q})},o.a.createElement("input",{type:E?"text":"number",min:"0",className:G,value:m,"aria-label":P("insertPageModal.pageDimensions.units"),"data-element":"customPageScaleValue",onChange:function(e){return Y(e.target.value,!0)},placeholder:X(!0),ref:U,onBlur:Z}),o.a.createElement(h.a,{glyph:"icon-alert",className:"warning-alert-icon"})),o.a.createElement(w.a,{content:"option.measurement.scaleModal.paperUnits"},o.a.createElement("div",{className:"unit-input"},o.a.createElement(g.a,{id:"paper-units-dropdown",labelledById:"paper-units-dropdown-label",dataElement:"customPageScaleUnit",items:V,onClickItem:function(e){return Q(e,!0)},currentSelectionKey:t[0][1],width:R}))))),o.a.createElement("div",{className:"scale-ratio-equal"}," = "),o.a.createElement("div",{className:"right-container"},o.a.createElement("div",{className:"unit-label",id:"display-units-dropdown-label"},P("option.measurement.scaleModal.displayUnits")),o.a.createElement("div",{className:"input-wrapper"},o.a.createElement("div",{className:s()({"warning-alert":!K})},o.a.createElement("input",{type:E||"ft-in"===t[1][1]?"text":"number",min:"0",className:J,value:x,"aria-label":P("insertPageModal.pageDimensions.units"),"data-element":"customDisplayScaleValue",onChange:function(e){return Y(e.target.value,!1)},placeholder:X(!1),ref:H,onBlur:Z}),o.a.createElement(h.a,{glyph:"icon-alert",className:"warning-alert-icon"})),o.a.createElement(w.a,{content:"option.measurement.scaleModal.displayUnits"},o.a.createElement("div",{className:"unit-input"},o.a.createElement(g.a,{id:"display-units-dropdown",labelledById:"display-units-dropdown-label",items:W,dataElement:"customDisplayScaleUnit",onClickItem:function(e){return Q(e,!1)},currentSelectionKey:t[1][1],width:R}))))))),o.a.createElement("div",{className:"warning-messages","aria-live":"assertive"},!q&&o.a.createElement("p",{className:"no-margin"},"".concat(P("option.measurement.scaleModal.incorrectSyntax")," ").concat(j)),!K&&o.a.createElement("p",{className:"world-value-warning no-margin"},"".concat(P("option.measurement.scaleModal.incorrectSyntax")," ").concat(C))))}M.propTypes=y;var E=M,A=n(5),k=n(211),j=n(74),O=n(333);n(1793),n(579);function _(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||N(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,o,i,r,c=[],l=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=i.call(n)).done)&&(c.push(a.value),c.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(s)throw o}}return c}}(e,t)||N(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var I=window.Core.Scale,L="custom",T="preset",R=function(e){var t,n,l=e.annotations,f=e.selectedTool,b=Object(i.d)(),h=C(Object(r.a)(),1)[0],S=C(Object(i.e)((function(e){return[u.a.isElementDisabled(e,A.a.SCALE_MODAL),u.a.isElementOpen(e,A.a.SCALE_MODAL),u.a.isElementHidden(e,A.a.SCALE_MODAL),u.a.getCurrentToolbarGroup(e),u.a.getSelectedScale(e),u.a.getActiveToolName(e),u.a.getIsAddingNewScale(e),u.a.getMeasurementScalePreset(e),u.a.getCalibrationInfo(e),u.a.getIsMultipleScalesMode(e)]})),10),x=S[0],v=S[1],y=S[2],M=S[3],N=S[4],D=S[5],R=S[6],z=S[7],U=S[8],H=U.tempScale,F=U.isFractionalUnit,P=S[9],B=C(Object(a.useState)(!1),2),V=B[0],W=B[1],q=C(Object(a.useState)(d.r[d.a.DECIMAL][0]),2),K=q[0],G=q[1],J=C(Object(a.useState)(L),2),$=J[0],Y=J[1],Q=C(Object(a.useState)(z[d.b.METRIC][0]),2),X=Q[0],Z=Q[1],ee=C(Object(a.useState)(new I("")),2),te=ee[0],ne=ee[1],ae=C(Object(a.useState)(!1),2),oe=ae[0],ie=ae[1],re=Object.keys(p.a.getScales()).length;Object(a.useEffect)((function(){d.r[ue].includes(K)||G(d.r[ue][0]),Z(z[pe][0])}),[V]),Object(a.useEffect)((function(){Y(L),ne(new I(N.getScaleRatioAsArray()));var e=p.a.getScalePrecision(N);if(e){var t=Object(d.j)(e);W(t);var n=d.r[me(t)].find((function(t){return t[1]===e}));G(n),setTimeout((function(){ie(!1)}))}}),[N]),Object(k.a)((function(){if($===L)ne(X[1]);else{var e=d.s[X[0]];e&&e!==K&&G(e)}}),[$]),Object(k.a)((function(){"toolbarGroup-Measure"===M&&ce()}),[M]),Object(a.useEffect)((function(){var e=d.s[X[0]];e&&$===T&&G(e)}),[X]),Object(a.useEffect)((function(){!y&&H&&(ne(new I(H)),b(m.a.updateCalibrationInfo({isCalibration:!1})),W(F))}),[y]),Object(a.useEffect)((function(){ie(!0)}),[K,te,X,$]),Object(a.useEffect)((function(){v&&R&&!H&&(Y(L),ne(d.l),W(!1),G(d.r[d.a.DECIMAL][0]))}),[v,R]);var ce=function(){b(m.a.closeElement(A.a.SCALE_MODAL))},le=function(){var e=function(e,t){var n=e,a=K[1];return V?("ft-in"===t&&(a/=12),n=Math.round(n/a)*a):"ft-in"!==t&&(n=n.toFixed((1/a).toString().length-1)),1*n};if(de){var t=te.getScaleRatioAsArray();return t[0][0]=e(t[0][0],t[0][1]),t[1][0]=e(t[1][0],t[1][1]),t}return X[1].toString()},se=s()("Modal","ScaleModal",{open:!y,closed:y}),de=$===L,pe=V?d.b.IMPERIAL:d.b.METRIC,me=function(e){return e?d.a.FRACTIONAL:d.a.DECIMAL},ue=me(V),fe=!de||te.isValid(),be=de&&!(d.e.includes(null===(t=te.pageScale)||void 0===t?void 0:t.unit)&&d.e.includes(null===(n=te.worldScale)||void 0===n?void 0:n.unit));return!x&&o.a.createElement("div",{className:se,"data-element":A.a.SCALE_MODAL},o.a.createElement(O.a,{title:"option.measurementOption.scale",isOpen:v,onCloseClick:ce,closeHandler:ce,swipeToClose:!0},o.a.createElement("div",{className:"content-container"},o.a.createElement("div",{className:"scaleSetting"},o.a.createElement("div",{className:"custom-option-wrapper"},o.a.createElement("div",{className:"custom-scale-option"},o.a.createElement(c.a,{"data-element":"customScaleOption",radio:!0,name:"setting",onChange:function(){return Y(L)},checked:de,label:"".concat(h("option.measurement.scaleModal.custom"),":"),center:!0})),de&&o.a.createElement("button",{"data-element":"calibrate",className:"calibrate-btn",onClick:function(){var e;p.a.setToolMode("AnnotationCreateCalibrationMeasurement");var t=de?(null===(e=te.worldScale)||void 0===e?void 0:e.unit)||"":X[1].worldScale.unit;b(m.a.updateCalibrationInfo({isCalibration:!0,previousToolName:D,defaultUnit:t})),b(m.a.setIsElementHidden(A.a.SCALE_MODAL,!0))}},h("option.measurement.scaleModal.calibrate"))),de?o.a.createElement(E,{scale:te.getScaleRatioAsArray(),onScaleChange:ne,precision:K[1]}):null,o.a.createElement("div",{className:"custom-scale-option"},o.a.createElement(c.a,{"data-element":"presetScaleOption",radio:!0,onChange:function(){return Y(T)},name:"setting",checked:!de,label:"".concat(h("option.measurement.scaleModal.preset"),":"),center:!0})),!de&&o.a.createElement("div",{className:"scaleModal__preset-container"},o.a.createElement("div",{className:"selector"},o.a.createElement(g.a,{id:"preset-scale-dropdown",dataElement:"presetScales",items:z[pe].map((function(e){return e[0]})),currentSelectionKey:X[0],onClickItem:function(e,t){return Z(z[pe][t])}}))),de?null:o.a.createElement("div",{className:"block"})),o.a.createElement("div",{className:"precision-container"},o.a.createElement("div",{className:"precision-selector"},o.a.createElement("div",{className:"precision-title",id:"scale-precision-dropdown-label"},h("option.shared.precision"),":"),o.a.createElement("div",{className:"selector"},o.a.createElement(g.a,{id:"scale-precision-dropdown",labelledById:"scale-precision-dropdown-label",dataElement:"scalePrecisions",items:d.r[ue].map((function(e){return e[0]})),currentSelectionKey:K[0],onClickItem:function(e,t){return G(d.r[ue][t])},ariaLabel:h("option.shared.precision")}))),o.a.createElement(w.a,{content:h("option.measurement.scaleModal.fractionUnitsTooltip")},o.a.createElement("div",{className:"fractional-units-container"},o.a.createElement(c.a,{isSwitch:!0,leftLabel:!0,id:"scale-modal-fractional-units",label:h("option.measurement.scaleModal.fractionalUnits"),checked:V,onChange:function(){W((function(e){return!e}))},disabled:be}))))),o.a.createElement("div",{className:"footer"},o.a.createElement(j.a,{type:"button",onClick:function(){var e,t;e=[N],t=new I(le(),K[1]),p.a.replaceScales(e,t),ce()},className:"scale-update",dataElement:"updateScale",disabled:R||!fe||!oe},h("action.update")),o.a.createElement("button",{onClick:function(){var e,t;e=new I(le(),K[1]),t=[].concat(_(l),[f]),p.a.createAndApplyScale(e,t),ce()},className:"scale-create","data-element":"createScale",disabled:!fe||!P&&re||!R&&!oe},h("action.create")))))};t.default=R}}]);
//# sourceMappingURL=chunk.71.js.map