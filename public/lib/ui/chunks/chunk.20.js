(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1707:function(o,n,t){var i=t(30),e=t(1782);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[o.i,e,""]]);var a={insert:function(o){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(o);let n;n=document.getElementsByTagName("apryse-webviewer"),n.length||(n=function o(n,t=document){const i=[];return t.querySelectorAll(n).forEach(o=>i.push(o)),t.querySelectorAll("*").forEach(t=>{t.shadowRoot&&i.push(...o(n,t.shadowRoot))}),i}("apryse-webviewer"));const t=[];for(let i=0;i<n.length;i++){const e=n[i];if(0===i)e.shadowRoot.appendChild(o),o.onload=function(){t.length>0&&t.forEach(n=>{n.innerHTML=o.innerHTML})};else{const n=o.cloneNode(!0);e.shadowRoot.appendChild(n),t.push(n)}}},singleton:!1};i(e,a);o.exports=e.locals||{}},1782:function(o,n,t){(n=o.exports=t(31)(!1)).push([o.i,".open.LinkModal{visibility:visible}.closed.LinkModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.LinkModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.LinkModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.LinkModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.LinkModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.LinkModal .footer .modal-button.cancel:hover,.LinkModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.LinkModal .footer .modal-button.cancel,.LinkModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.LinkModal .footer .modal-button.cancel.disabled,.LinkModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.LinkModal .footer .modal-button.cancel.disabled span,.LinkModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.LinkModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.LinkModal .modal-container .wrapper .modal-content{padding:10px}.LinkModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.LinkModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.LinkModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.LinkModal .footer .modal-button.confirm{margin-left:4px}.LinkModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LinkModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .LinkModal .footer .modal-button{padding:23px 8px}}.LinkModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LinkModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .LinkModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LinkModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .LinkModal .swipe-indicator{width:32px}}.LinkModal .container .tab-list{width:100%;height:28px;display:flex;border-radius:4px;color:var(--text-color)}.LinkModal .container .tab-list .tab-options-button{background-color:transparent;text-align:center;vertical-align:middle;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1;border-radius:0;cursor:pointer}.LinkModal .container .tab-list .tab-options-button:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.LinkModal .container .tab-list .tab-options-button:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.LinkModal .container .tab-list .tab-options-button:hover{background:var(--popup-button-hover)}.LinkModal .container .tab-list .tab-options-button.selected{cursor:default}.LinkModal .container .tab-list .tab-options-button.focus-visible,.LinkModal .container .tab-list .tab-options-button:focus-visible{outline:var(--focus-visible-outline)}.LinkModal .container .tab-panel{width:100%;display:flex;flex-direction:column;align-items:center}.LinkModal .container .tab-panel.focus-visible,.LinkModal .container .tab-panel:focus-visible{outline:var(--focus-visible-outline)!important}.LinkModal{font-size:.9em}.LinkModal .container{display:flex;flex-direction:column;align-items:center;min-width:400px;width:480px;border-radius:4px;background:var(--component-background)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LinkModal .container{padding:24px 24px 16px;width:100%;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .LinkModal .container{padding:24px 24px 16px;width:100%;min-width:100px}}.LinkModal .container .StylePopup{border-radius:0;box-shadow:none}.LinkModal .container .divider-horizontal{width:100%;height:1px;margin-bottom:8px;background:var(--divider)}.LinkModal .container .linkInput{display:flex;flex-direction:row;justify-content:space-between}.LinkModal .container input::-webkit-inner-spin-button,.LinkModal .container input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.LinkModal .container input[type=number]{-moz-appearance:textfield}.LinkModal .container form{width:100%}.LinkModal .container .tabs-header-container{padding:16px;width:100%}.LinkModal .container .header{margin:0;display:flex;align-items:center;width:100%;height:24px}.LinkModal .container .header label,.LinkModal .container .header p{font-size:16px;font-weight:700;width:89.286%;margin:0 16px 0 0}.LinkModal .container .tab-list{font-size:14px}.LinkModal .container .tab-panel{overflow-y:visible}.LinkModal .container .tab-panel .panel-body{width:100%;height:140px;position:relative;padding:0 16px 16px;font-size:13px;border-radius:4px}.LinkModal .container .tab-panel .panel-body .add-url-link{display:flex;justify-content:center;height:100%;flex-direction:column;background-color:var(--document-background-color);border-radius:4px}.LinkModal .container .tab-panel .panel-body .add-url-link .inputLabel{font-size:13px;line-height:16px;padding-left:16px;padding-bottom:8px;font-weight:700}.LinkModal .container .tab-panel .panel-body .add-url-link label.inputLabel{width:100%;display:inline-block}.LinkModal .container .tab-panel .panel-body .add-url-link .linkInput{padding:0 16px}.LinkModal .container .tab-panel .panel-body .add-url-link .linkInput input{width:100%;height:32px;padding-left:8px;font-size:13px;box-sizing:border-box}.LinkModal .container .footer{display:flex;padding:16px;align-items:center;justify-content:flex-end;width:100%;box-shadow:inset 0 1px 0 var(--modal-stroke-and-border);margin:0}.LinkModal .container .footer .ok-button.Button{display:flex;justify-content:center;align-items:center;background-color:var(--primary-button);border:none;color:var(--gray-0);padding:6px 18px;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:28px;cursor:pointer}.LinkModal .container .footer .ok-button.Button:hover:not(:disabled){background:var(--primary-button-hover)}.LinkModal .container .footer .ok-button.Button.disabled{background:var(--disabled-button-color)!important;cursor:not-allowed}.LinkModal .container .footer .ok-button.Button.disabled span{color:var(--gray-0)}.LinkModal .container input.pageInput:focus,.LinkModal .container input.urlInput:focus{border-color:var(--outline-color)}.LinkModal .container input.pageInput:active,.LinkModal .container input.urlInput:active{border-color:var(--focus-border)}.LinkModal .container .tab-list .tab-options-divider+.tab-options-button{border-left:none!important}.LinkModal .container .tab-list .tab-options-button{border-top:1px solid var(--tab-border-color);border-bottom:1px solid var(--tab-border-color)}.LinkModal .container .tab-list .tab-options-button:first-child{border-left:1px solid var(--tab-border-color)}.LinkModal .container .tab-list .tab-options-button:last-child{border-right:1px solid var(--tab-border-color)}.LinkModal .container .tab-list .tab-options-button:hover{background:var(--tab-background-color-hover);border-top:1px solid var(--tab-border-color-hover);border-bottom:1px solid var(--tab-border-color-hover);border-right:1px solid var(--tab-border-color-hover)}.LinkModal .container .tab-list .tab-options-button:hover+button,.LinkModal .container .tab-list .tab-options-button:hover+div{border-left:none}.LinkModal .container .tab-list .tab-options-button.selected{background:var(--tab-color-selected);border:1px solid var(--tab-color-selected);color:var(--tab-text-color-selected)}.LinkModal .container .tab-list .tab-options-button.selected+button,.LinkModal .container .tab-list .tab-options-button.selected+div{border-left:none!important}.LinkModal .container .tab-list .tab-options-button:not(.selected){border-right:1px solid var(--tab-border-color)}",""]),n.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}}}]);
//# sourceMappingURL=chunk.20.js.map