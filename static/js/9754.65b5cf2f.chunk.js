/*! For license information please see 9754.65b5cf2f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[9754],{39754:function(e,t,n){n.r(t),n.d(t,{CalciteSwitch:function(){return g},defineCustomElement:function(){return y}});var i=n(74165),a=n(15861),r=n(15671),o=n(43144),c=n(97326),l=n(60136),s=n(29388),u=n(51554),d=n(92358),h=n(85955),f=n(13160),m=n(19579),v=n(74310),b=n(47242),p=(0,u.GH)(function(e){(0,l.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.calciteSwitchChange=(0,u.yM)((0,c.Z)(e),"calciteSwitchChange",6),e.keyDownHandler=function(t){!e.disabled&&(0,m.i)(t.key)&&(e.toggle(),t.preventDefault())},e.clickHandler=function(){e.toggle()},e.setSwitchEl=function(t){e.switchEl=t},e.disabled=!1,e.label=void 0,e.name=void 0,e.scale="m",e.checked=!1,e.value=void 0,e}return(0,o.Z)(n,[{key:"setFocus",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.c)(this);case 2:(0,d.h)(this.switchEl);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"syncHiddenFormInput",value:function(e){e.type="checkbox"}},{key:"onLabelClick",value:function(){this.disabled||(this.toggle(),this.setFocus())}},{key:"toggle",value:function(){this.checked=!this.checked,this.calciteSwitchChange.emit()}},{key:"connectedCallback",value:function(){(0,v.c)(this),(0,h.c)(this)}},{key:"componentWillLoad",value:function(){(0,b.a)(this)}},{key:"componentDidLoad",value:function(){(0,b.s)(this)}},{key:"disconnectedCallback",value:function(){(0,v.d)(this),(0,h.d)(this)}},{key:"componentDidRender",value:function(){(0,f.u)(this)}},{key:"render",value:function(){return(0,u.h)(u.AA,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,u.h)("div",{"aria-checked":(0,d.t)(this.checked),"aria-label":(0,v.g)(this),class:"container",ref:this.setSwitchEl,role:"switch",tabIndex:0},(0,u.h)("div",{class:"track"},(0,u.h)("div",{class:"handle"})),(0,u.h)(h.H,{component:this})))}},{key:"el",get:function(){return this}}],[{key:"style",get:function(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([scale=s]) .container{block-size:0.75rem}:host([scale=s]) .track{block-size:0.75rem;inline-size:1.5rem}:host([scale=s]) .handle{block-size:0.5rem;inline-size:0.5rem}:host([scale=m]) .container{block-size:1rem}:host([scale=m]) .track{block-size:1rem;inline-size:2rem}:host([scale=m]) .handle{block-size:0.75rem;inline-size:0.75rem}:host([scale=l]) .container{block-size:1.5rem}:host([scale=l]) .track{block-size:1.5rem;inline-size:3rem}:host([scale=l]) .handle{block-size:1.25rem;inline-size:1.25rem}:host{position:relative;display:inline-block;inline-size:auto;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host{inline-size:auto;outline-color:transparent}.track{pointer-events:none;position:relative;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-2);vertical-align:top;transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-block-start:-1px;inset-inline:-1px auto}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]) .handle{border-color:var(--calcite-ui-brand);inset-inline:auto -1px}:host([checked]:hover) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}.container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"}}]),n}(u.mv),[1,"calcite-switch",{disabled:[516],label:[1],name:[513],scale:[513],checked:[1540],value:[8],setFocus:[64]}]);function k(){if("undefined"!==typeof customElements){["calcite-switch"].forEach((function(e){if("calcite-switch"===e)customElements.get(e)||customElements.define(e,p)}))}}k();var g=p,y=k},85955:function(e,t,n){n.d(t,{H:function(){return b},c:function(){return u},d:function(){return h},s:function(){return s}});var i=n(92358),a=n(51554),r="hidden-form-input";function o(e){return"checked"in e}var c=new WeakMap,l=new WeakSet;function s(e){var t=e.formEl;return!!t&&("requestSubmit"in t?t.requestSubmit():t.submit(),!0)}function u(e){var t=e.el,n=e.value,a=(0,i.r)(t,"form");if(a&&!function(e,t){var n="calciteInternalFormComponentRegister",i=!1;return e.addEventListener(n,(function(e){i=e.composedPath().some((function(e){return l.has(e)})),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),i}(a,t)){e.formEl=a,e.defaultValue=n,o(e)&&(e.defaultChecked=e.checked);var r=(e.onFormReset||d).bind(e);a.addEventListener("reset",r),c.set(e.el,r),l.add(t)}}function d(){o(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function h(e){var t=e.el,n=e.formEl;if(n){var i=c.get(t);n.removeEventListener("reset",i),c.delete(t),e.formEl=null,l.delete(t)}}var f=function(e){e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},m=function(e){return e.removeEventListener("change",f)};function v(e,t,n){var i,a=e.defaultValue,r=e.disabled,c=e.name,l=e.required;t.defaultValue=a,t.disabled=r,t.name=c,t.required=l,t.tabIndex=-1,o(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",null===(i=e.syncHiddenFormInput)||void 0===i||i.call(e,t)}var b=function(e){return function(e){var t=e.el,n=e.formEl,i=e.name,a=e.value,o=t.ownerDocument,c=t.querySelectorAll('input[slot="'.concat(r,'"]'));if(n&&i){var l,s=Array.isArray(a)?a:[a],u=[],d=new Set;c.forEach((function(t){var n=s.find((function(e){return e==t.value}));null!=n?(d.add(n),v(e,t,n)):u.push(t)})),s.forEach((function(t){if(!d.has(t)){var n=u.pop();n||((n=o.createElement("input")).slot=r),l||(l=o.createDocumentFragment()),l.append(n),n.addEventListener("change",f),v(e,n,t)}})),l&&t.append(l),u.forEach((function(e){m(e),e.remove()}))}else c.forEach((function(e){m(e),e.remove()}))}(e.component),(0,a.h)("slot",{name:r})}},13160:function(e,t,n){function i(){}function a(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void(e.el.click=i);e.el.click=HTMLElement.prototype.click,"function"===typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}n.d(t,{u:function(){return a}})},19579:function(e,t,n){function i(e){return"Enter"===e||" "===e}n.d(t,{i:function(){return i},n:function(){return a}});var a=["0","1","2","3","4","5","6","7","8","9"]},74310:function(e,t,n){n.d(t,{a:function(){return o},c:function(){return f},d:function(){return m},g:function(){return v},l:function(){return r}});var i=n(92358),a="calciteInternalLabelClick",r="calciteInternalLabelConnected",o="calciteInternaLabelDisconnected",c="calcite-label",l=new WeakMap,s=new WeakMap,u=new WeakMap,d=new Set,h=function(e){var t=e.id,n=t&&(0,i.u)(e,{selector:"".concat(c,'[for="').concat(t,'"]')});if(n)return n;var a=(0,i.r)(e,c);return!a||function(e,t){var n,i="custom-element-ancestor-check",a=function(i){i.stopImmediatePropagation();var a=i.composedPath();n=a.slice(a.indexOf(t),a.indexOf(e))};e.addEventListener(i,a,{once:!0}),t.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),e.removeEventListener(i,a);var r=n.filter((function(n){return n!==t&&n!==e})).filter((function(e){var t;return null===(t=e.tagName)||void 0===t?void 0:t.includes("-")}));return r.length>0}(a,e)?null:a};function f(e){var t=h(e.el);if(!(l.has(t)||!t&&d.has(e))){var n=k.bind(e);if(t){e.labelEl=t;var i=b.bind(e);l.set(e.labelEl,i),e.labelEl.addEventListener(a,i),d.delete(e),document.removeEventListener(r,s.get(e)),u.set(e,n),document.addEventListener(o,n)}else d.has(e)||(n(),document.removeEventListener(o,u.get(e)))}}function m(e){if(d.delete(e),document.removeEventListener(r,s.get(e)),document.removeEventListener(o,u.get(e)),s.delete(e),u.delete(e),e.labelEl){var t=l.get(e.labelEl);e.labelEl.removeEventListener(a,t),l.delete(e.labelEl)}}function v(e){var t,n;return e.label||(null===(t=e.labelEl)||void 0===t||null===(n=t.textContent)||void 0===n?void 0:n.trim())||""}function b(e){this.disabled||(this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e))}function p(){d.has(this)&&f(this)}function k(){d.add(this);var e=s.get(this)||p.bind(this);s.set(this,e),document.addEventListener(r,e)}},47242:function(e,t,n){n.d(t,{a:function(){return r},c:function(){return c},s:function(){return o}});var i=new WeakMap,a=new WeakMap;function r(e){a.set(e,new Promise((function(t){return i.set(e,t)})))}function o(e){i.get(e)()}function c(e){return a.get(e)}}}]);
//# sourceMappingURL=9754.65b5cf2f.chunk.js.map