"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[8423],{79347:function(e,t,r){r.d(t,{e:function(){return s}});var n,i,a,s={},u={get exports(){return s},set exports(e){s=e}};n=u,i=function(){function e(e,r,i){i=i||2;var a,s,u,l,c,v,f,h=r&&r.length,y=h?r[0]*i:e.length,p=t(e,0,y,i,!0),d=[];if(!p||p.next===p.prev)return d;if(h&&(p=o(e,r,p,i)),e.length>80*i){a=u=e[0],s=l=e[1];for(var x=i;x<y;x+=i)(c=e[x])<a&&(a=c),(v=e[x+1])<s&&(s=v),c>u&&(u=c),v>l&&(l=v);f=0!==(f=Math.max(u-a,l-s))?1/f:0}return n(p,d,i,a,s,f),d}function t(e,t,r,n,i){var a,s;if(i===V(e,t,r,n)>0)for(a=t;a<r;a+=n)s=L(a,e[a],e[a+1],s);else for(a=r-n;a>=t;a-=n)s=L(a,e[a],e[a+1],s);if(s&&g(s,s.next)){var u=s.next;w(s),s=u}return s}function r(e,t){if(!e)return e;t||(t=e);var r,n=e;do{if(r=!1,n.steiner||!g(n,n.next)&&0!==m(n.prev,n,n.next))n=n.next;else{var i=n.prev;if(w(n),(n=t=i)===n.next)break;r=!0}}while(r||n!==t);return t}function n(e,t,o,l,c,v,f){if(e){!f&&v&&h(e,l,c,v);for(var y,p,d=e;e.prev!==e.next;)if(y=e.prev,p=e.next,v?a(e,l,c,v):i(e))t.push(y.i/o),t.push(e.i/o),t.push(p.i/o),w(e),e=p.next,d=p.next;else if((e=p)===d){f?1===f?n(e=s(r(e),t,o),t,o,l,c,v,2):2===f&&u(e,t,o,l,c,v):n(r(e),t,o,l,c,v,1);break}}}function i(e){var t=e.prev,r=e,n=e.next;if(m(t,r,n)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(d(t.x,t.y,r.x,r.y,n.x,n.y,i.x,i.y)&&m(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function a(e,t,r,n){var i=e.prev,a=e,s=e.next;if(m(i,a,s)>=0)return!1;for(var u=i.x<a.x?i.x<s.x?i.x:s.x:a.x<s.x?a.x:s.x,o=i.y<a.y?i.y<s.y?i.y:s.y:a.y<s.y?a.y:s.y,l=i.x>a.x?i.x>s.x?i.x:s.x:a.x>s.x?a.x:s.x,c=i.y>a.y?i.y>s.y?i.y:s.y:a.y>s.y?a.y:s.y,v=y(u,o,t,r,n),f=y(l,c,t,r,n),h=e.prevZ,p=e.nextZ;h&&h.z>=v&&p&&p.z<=f;){if(h!==e.prev&&h!==e.next&&d(i.x,i.y,a.x,a.y,s.x,s.y,h.x,h.y)&&m(h.prev,h,h.next)>=0)return!1;if(h=h.prevZ,p!==e.prev&&p!==e.next&&d(i.x,i.y,a.x,a.y,s.x,s.y,p.x,p.y)&&m(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(;h&&h.z>=v;){if(h!==e.prev&&h!==e.next&&d(i.x,i.y,a.x,a.y,s.x,s.y,h.x,h.y)&&m(h.prev,h,h.next)>=0)return!1;h=h.prevZ}for(;p&&p.z<=f;){if(p!==e.prev&&p!==e.next&&d(i.x,i.y,a.x,a.y,s.x,s.y,p.x,p.y)&&m(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function s(e,t,n){var i=e;do{var a=i.prev,s=i.next.next;!g(a,s)&&b(a,i,i.next,s)&&k(a,s)&&k(s,a)&&(t.push(a.i/n),t.push(i.i/n),t.push(s.i/n),w(i),w(i.next),i=e=s),i=i.next}while(i!==e);return r(i)}function u(e,t,i,a,s,u){var o=e;do{for(var l=o.next.next;l!==o.prev;){if(o.i!==l.i&&x(o,l)){var c=_(o,l);return o=r(o,o.next),c=r(c,c.next),n(o,t,i,a,s,u),void n(c,t,i,a,s,u)}l=l.next}o=o.next}while(o!==e)}function o(e,n,i,a){var s,u,o,c=[];for(s=0,u=n.length;s<u;s++)(o=t(e,n[s]*a,s<u-1?n[s+1]*a:e.length,a,!1))===o.next&&(o.steiner=!0),c.push(p(o));for(c.sort(l),s=0;s<c.length;s++)i=r(i=v(c[s],i),i.next);return i}function l(e,t){return e.x-t.x}function c(e){if(e.next.prev===e)return e;for(var t=e;;){var r=t.next;if(r.prev===t||r===t||r===e)break;t=r}return t}function v(e,t){var n=function(e,t){var r,n=t,i=e.x,a=e.y,s=-1/0;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){var u=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=i&&u>s){if(s=u,u===i){if(a===n.y)return n;if(a===n.next.y)return n.next}r=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!r)return null;if(i===s)return r;var o,l=r,c=r.x,v=r.y,h=1/0;n=r;do{i>=n.x&&n.x>=c&&i!==n.x&&d(a<v?i:s,a,c,v,a<v?s:i,a,n.x,n.y)&&(o=Math.abs(a-n.y)/(i-n.x),k(n,e)&&(o<h||o===h&&(n.x>r.x||n.x===r.x&&f(r,n)))&&(r=n,h=o)),n=n.next}while(n!==l);return r}(e,t);if(!n)return t;var i=_(n,e),a=r(n,n.next),s=c(i);return r(s,s.next),a=c(a),c(t===n?a:t)}function f(e,t){return m(e.prev,e,t.prev)<0&&m(t.next,e,e.next)<0}function h(e,t,r,n){var i=e;do{null===i.z&&(i.z=y(i.x,i.y,t,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,function(e){var t,r,n,i,a,s,u,o,l=1;do{for(r=e,e=null,a=null,s=0;r;){for(s++,n=r,u=0,t=0;t<l&&(u++,n=n.nextZ);t++);for(o=l;u>0||o>0&&n;)0!==u&&(0===o||!n||r.z<=n.z)?(i=r,r=r.nextZ,u--):(i=n,n=n.nextZ,o--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=n}a.nextZ=null,l*=2}while(s>1)}(i)}function y(e,t,r,n,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function p(e){var t=e,r=e;do{(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next}while(t!==e);return r}function d(e,t,r,n,i,a,s,u){return(i-s)*(t-u)-(e-s)*(a-u)>=0&&(e-s)*(n-u)-(r-s)*(t-u)>=0&&(r-s)*(a-u)-(i-s)*(n-u)>=0}function x(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&b(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}(e,t)&&(k(e,t)&&k(t,e)&&function(e,t){var r=e,n=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do{r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next}while(r!==e);return n}(e,t)&&(m(e.prev,e,t.prev)||m(e,t.prev,t))||g(e,t)&&m(e.prev,e,e.next)>0&&m(t.prev,t,t.next)>0)}function m(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function g(e,t){return e.x===t.x&&e.y===t.y}function b(e,t,r,n){var i=Z(m(e,t,r)),a=Z(m(e,t,n)),s=Z(m(r,n,e)),u=Z(m(r,n,t));return i!==a&&s!==u||!(0!==i||!S(e,r,t))||!(0!==a||!S(e,n,t))||!(0!==s||!S(r,e,n))||!(0!==u||!S(r,t,n))}function S(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function Z(e){return e>0?1:e<0?-1:0}function k(e,t){return m(e.prev,e,e.next)<0?m(e,t,e.next)>=0&&m(e,e.prev,t)>=0:m(e,t,e.prev)<0||m(e,e.next,t)<0}function _(e,t){var r=new T(e.i,e.x,e.y),n=new T(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=i,i.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function L(e,t,r,n){var i=new T(e,t,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function w(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function T(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function V(e,t,r,n){for(var i=0,a=t,s=r-n;a<r;a+=n)i+=(e[s]-e[a])*(e[a+1]+e[s+1]),s=a;return i}return e.deviation=function(e,t,r,n){var i=t&&t.length,a=i?t[0]*r:e.length,s=Math.abs(V(e,0,a,r));if(i)for(var u=0,o=t.length;u<o;u++){var l=t[u]*r,c=u<o-1?t[u+1]*r:e.length;s-=Math.abs(V(e,l,c,r))}var v=0;for(u=0;u<n.length;u+=3){var f=n[u]*r,h=n[u+1]*r,y=n[u+2]*r;v+=Math.abs((e[f]-e[y])*(e[h+1]-e[f+1])-(e[f]-e[h])*(e[y+1]-e[f+1]))}return 0===s&&0===v?0:Math.abs((v-s)/s)},e.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},n=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var s=0;s<t;s++)r.vertices.push(e[i][a][s]);i>0&&(n+=e[i-1].length,r.holes.push(n))}return r},e},void 0!==(a=i())&&(n.exports=a)},13200:function(e,t,r){r.d(t,{k3:function(){return u},s5:function(){return s}});Math.PI;var n=256/360,i=1/Math.LN2;function a(e,t){return(e%=t)>=0?e:e+t}function s(e){return a(e*n,256)}function u(e){return Math.log(e)*i}},38999:function(e,t,r){var n,i;function a(e){switch(e){case"left":return n.Left;case"right":return n.Right;case"center":return n.Center}}function s(e){switch(e){case"top":return i.Top;case"middle":return i.Center;case"baseline":return i.Baseline;case"bottom":return i.Bottom}}function u(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[n.Right,i.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[n.Center,i.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[n.Left,i.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[n.Right,i.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[n.Center,i.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[n.Left,i.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[n.Right,i.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[n.Center,i.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[n.Left,i.Top];default:return console.debug("Found invalid placement type ".concat(e)),[n.Center,i.Center]}}function o(e){switch(e){case n.Right:return-1;case n.Center:return 0;case n.Left:return 1;default:return console.debug("Found invalid horizontal alignment ".concat(e)),0}}function l(e){switch(e){case i.Top:return 1;case i.Center:return 0;case i.Bottom:case i.Baseline:return-1;default:return console.debug("Found invalid vertical alignment ".concat(e)),0}}function c(e){switch(e){case"left":return n.Left;case"right":return n.Right;case"center":return n.Center}}function v(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}r.d(t,{Hd:function(){return c},M7:function(){return n},NS:function(){return v},TR:function(){return i},b7:function(){return s},g:function(){return o},kH:function(){return a},qv:function(){return u},tf:function(){return l}}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(n||(n={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(i||(i={}))},54815:function(e,t,r){r.d(t,{CA:function(){return x},Gq:function(){return M},Xp:function(){return d},a:function(){return T},dk:function(){return L},hF:function(){return g},jj:function(){return m},jy:function(){return p},m2:function(){return b},mE:function(){return w},qr:function(){return V}});var n=r(11752),i=r(61120),a=r(60136),s=r(29388),u=r(15671),o=r(43144),l=r(4942),c=r(1413),v=r(10064),f=r(38999),h=r(80613);var y=Object.keys(h.mD).filter((function(e){return"number"==typeof h.mD[e]})).reduce((function(e,t){return(0,c.Z)((0,c.Z)({},e),{},(0,l.Z)({},t,h.mD[t]))}),{});function p(e){return e===h.mD.OUTLINE_FILL||e===h.mD.OUTLINE_FILL_SIMPLE}function d(e){return function(e){return e===h.mD.SIMPLE||e===h.mD.OUTLINE_FILL_SIMPLE}(e.symbologyType)}function x(e){return p(e.symbologyType)}function m(e,t){switch(e){case h.LW.FILL:return L.from(t);case h.LW.LINE:return T.from(t);case h.LW.MARKER:return w.from(t);case h.LW.TEXT:return V.from(t);case h.LW.LABEL:return M.from(t);default:throw new Error("Unable to createMaterialKey for unknown geometryType ".concat(e))}}function g(e){switch(b.load(e).geometryType){case h.LW.MARKER:return new w(e);case h.LW.FILL:return new L(e);case h.LW.LINE:return new T(e);case h.LW.TEXT:return new V(e);case h.LW.LABEL:return new M(e)}}var b=function(){function e(t){(0,u.Z)(this,e),this._data=0,this._data=t}return(0,o.Z)(e,[{key:"data",get:function(){return this._data},set:function(e){this._data=null!==e&&void 0!==e?e:0}},{key:"geometryType",get:function(){return this.bits(8,11)},set:function(e){this.setBits(e,8,11)}},{key:"mapAligned",get:function(){return!!this.bit(20)},set:function(e){this.setBit(20,e)}},{key:"sdf",get:function(){return!!this.bit(11)},set:function(e){this.setBit(11,null!==e&&void 0!==e&&e)}},{key:"pattern",get:function(){return!!this.bit(12)},set:function(e){this.setBit(12,e)}},{key:"textureBinding",get:function(){return this.bits(0,8)},set:function(e){this.setBits(e,0,8)}},{key:"symbologyType",get:function(){return this.bits(21,26)},set:function(e){this.setBits(e,21,26)}},{key:"geometryTypeString",get:function(){switch(this.geometryType){case h.LW.FILL:return"fill";case h.LW.MARKER:return"marker";case h.LW.LINE:return"line";case h.LW.TEXT:return"text";case h.LW.LABEL:return"label";default:throw new v.Z("Unable to handle unknown geometryType: ".concat(this.geometryType))}}},{key:"setBit",value:function(e,t){var r=1<<e;t?this._data|=r:this._data&=~r}},{key:"bit",value:function(e){return(this._data&1<<e)>>e}},{key:"setBits",value:function(e,t,r){for(var n=t,i=0;n<r;n++,i++)this.setBit(n,0!=(e&1<<i))}},{key:"bits",value:function(e,t){for(var r=0,n=e,i=0;n<t;n++,i++)r|=this.bit(n)<<i;return r}},{key:"hasVV",value:function(){return!1}},{key:"setVV",value:function(e,t){}},{key:"getVariation",value:function(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf,symbologyType:{value:h.mD[this.symbologyType],options:y,namespace:"SYMBOLOGY_TYPE"}}}},{key:"getVariationHash",value:function(){return this._data&~(7&this.textureBinding)}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}}]),e}();b.shared=new b(0);var S=function(e){return function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"vvSizeMinMaxValue",get:function(){return 0!==this.bit(16)},set:function(e){this.setBit(16,e)}},{key:"vvSizeScaleStops",get:function(){return 0!==this.bit(17)},set:function(e){this.setBit(17,e)}},{key:"vvSizeFieldStops",get:function(){return 0!==this.bit(18)},set:function(e){this.setBit(18,e)}},{key:"vvSizeUnitValue",get:function(){return 0!==this.bit(19)},set:function(e){this.setBit(19,e)}},{key:"hasVV",value:function(){return(0,n.Z)((0,i.Z)(r.prototype),"hasVV",this).call(this)||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}},{key:"setVV",value:function(e,t){(0,n.Z)((0,i.Z)(r.prototype),"setVV",this).call(this,e,t);var a=function(e,t,r){var n=h.X.SIZE_FIELD_STOPS|h.X.SIZE_MINMAX_VALUE|h.X.SIZE_SCALE_STOPS|h.X.SIZE_UNIT_VALUE,i=(t&(h.mf.FIELD_TARGETS_OUTLINE|h.mf.MINMAX_TARGETS_OUTLINE|h.mf.SCALE_TARGETS_OUTLINE|h.mf.UNIT_TARGETS_OUTLINE))>>>4;return e===h.LW.LINE&&r.isOutline||e===h.LW.FILL&&p(r.symbologyType)?n&i:n&~i}(this.geometryType,e,t)&e;this.vvSizeMinMaxValue=!!(a&h.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(a&h.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(a&h.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(a&h.X.SIZE_SCALE_STOPS)}}]),r}(e)},Z=function(e){return function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"vvRotation",get:function(){return 0!==this.bit(15)},set:function(e){this.setBit(15,e)}},{key:"hasVV",value:function(){return(0,n.Z)((0,i.Z)(r.prototype),"hasVV",this).call(this)||this.vvRotation}},{key:"setVV",value:function(e,t){(0,n.Z)((0,i.Z)(r.prototype),"setVV",this).call(this,e,t),this.vvRotation=!t.isOutline&&!!(e&h.X.ROTATION)}}]),r}(e)},k=function(e){return function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"vvColor",get:function(){return 0!==this.bit(13)},set:function(e){this.setBit(13,e)}},{key:"hasVV",value:function(){return(0,n.Z)((0,i.Z)(r.prototype),"hasVV",this).call(this)||this.vvColor}},{key:"setVV",value:function(e,t){(0,n.Z)((0,i.Z)(r.prototype),"setVV",this).call(this,e,t),this.vvColor=!t.isOutline&&!!(e&h.X.COLOR)}}]),r}(e)},_=function(e){return function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"vvOpacity",get:function(){return 0!==this.bit(14)},set:function(e){this.setBit(14,e)}},{key:"hasVV",value:function(){return(0,n.Z)((0,i.Z)(r.prototype),"hasVV",this).call(this)||this.vvOpacity}},{key:"setVV",value:function(e,t){(0,n.Z)((0,i.Z)(r.prototype),"setVV",this).call(this,e,t),this.vvOpacity=!t.isOutline&&!!(e&h.X.OPACITY)}}]),r}(e)},L=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,n.Z)((0,i.Z)(r.prototype),"getVariation",this).call(this)),{},{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=e.symbologyType,r=e.vvFlags,n=this.load(0);return n.geometryType=h.LW.FILL,n.symbologyType=t,t!==h.mD.DOT_DENSITY&&n.setVV(r,e),n.data}}]),r}(k(_(S(b))));L.shared=new L(0);var w=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,n.Z)((0,i.Z)(r.prototype),"getVariation",this).call(this)),{},{vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=e.symbologyType,r=e.vvFlags,n=this.load(0);return n.geometryType=h.LW.MARKER,n.symbologyType=t,t!==h.mD.HEATMAP&&n.setVV(r,e),n.data}}]),r}(k(_(Z(S(b)))));w.shared=new w(0);var T=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,n.Z)((0,i.Z)(r.prototype),"getVariation",this).call(this)),{},{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=this.load(0);return t.geometryType=h.LW.LINE,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.data}}]),r}(k(_(S(b))));T.shared=new T(0);var V=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,n.Z)((0,i.Z)(r.prototype),"getVariation",this).call(this)),{},{vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=this.load(0);return t.geometryType=h.LW.TEXT,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.data}}]),r}(k(_(Z(S(b)))));V.shared=new V(0);var M=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"getVariation",value:function(){return(0,c.Z)((0,c.Z)({},(0,n.Z)((0,i.Z)(r.prototype),"getVariation",this).call(this)),{},{vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue})}}],[{key:"load",value:function(e){var t=this.shared;return t.data=e,t}},{key:"from",value:function(e){var t=this.load(0);return t.geometryType=h.LW.LABEL,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.mapAligned=(0,f.NS)(e.placement),t.data}}]),r}(S(b));M.shared=new M(0)},81735:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(15671),i=r(43144),a=r(60136),s=r(29388),u=r(27366),o=r(41691),l=r(49861),c=(r(25243),r(63780),r(69912)),v=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"initialize",value:function(){}},{key:"destroy",value:function(){}},{key:"supportsTileUpdates",get:function(){return!1}},{key:"spatialReference",get:function(){var e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}}]),r}(o.r);(0,u._)([(0,l.Cb)({readOnly:!0})],v.prototype,"supportsTileUpdates",null),(0,u._)([(0,l.Cb)({constructOnly:!0})],v.prototype,"remoteClient",void 0),(0,u._)([(0,l.Cb)({constructOnly:!0})],v.prototype,"service",void 0),(0,u._)([(0,l.Cb)()],v.prototype,"spatialReference",null),(0,u._)([(0,l.Cb)({constructOnly:!0})],v.prototype,"tileInfo",void 0),(0,u._)([(0,l.Cb)({constructOnly:!0})],v.prototype,"tileStore",void 0);var f=v=(0,u._)([(0,c.j)("esri.views.2d.layers.features.processors.BaseProcessor")],v)},3561:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var n=r(37762),i=r(74165),a=r(15861),s=r(15671),u=r(43144),o=r(60136),l=r(29388),c=r(27366),v=r(75746),f=(r(10064),r(93169),r(32718),r(92026)),h=r(66978),y=(r(25243),r(63780),r(69912)),p=r(48732),d=r(78952),x=r(84328),m=r(80613),g=r(72774),b=r(74017),S=r(61909),Z=r(69813),k=r(27301),_=r(81735),L=r(1413),w=function(){function e(t){(0,s.Z)(this,e),this._remoteClient=t,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}return(0,u.Z)(e,[{key:"destroy",value:function(){}},{key:"fetchResource",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r){var n,a,s,u=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this._resourceMap,!(a=n.get(t))){e.next=3;break}return e.abrupt("return",a);case 3:if(!(s=this._inFlightResourceMap.get(t))){e.next=6;break}return e.abrupt("return",s);case 6:e.prev=6,s=this._remoteClient.invoke("tileRenderer.fetchResource",{url:t},(0,L.Z)({},r)),this._inFlightResourceMap.set(t,s),s.then((function(e){return u._inFlightResourceMap.delete(t),n.set(t,e),e})),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(6),e.abrupt("return",(0,h.D_)(e.t0)?null:{width:0,height:0});case 13:return e.abrupt("return",s);case 14:case"end":return e.stop()}}),e,this,[[6,10]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getResource",value:function(e){var t;return null!==(t=this._resourceMap.get(e))&&void 0!==t?t:null}}]),e}();function T(e,t){return(!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function V(e){var t=e.message,r={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin,version:t.version},transferList:new Array};for(var n in t.data){var i=t.data[n];if(r.message.data[n]=null,(0,f.pC)(i)){var a=i.stride,s=i.indices.slice(0),u=i.vertices.slice(0),o=i.records.slice(0),l={stride:a,indices:s,vertices:u,records:o,metrics:(0,f.yw)(i.metrics,(function(e){return e.slice(0)}))};r.transferList.push(s,u,o),r.message.data[n]=l}}return r}var M=function(e){(0,o.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).type="symbol",e._matchers={feature:null,aggregate:null},e._bufferData=new Map,e._bufferIds=new Map,e}return(0,u.Z)(r,[{key:"initialize",value:function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new w(this.remoteClient)}},{key:"destroy",value:function(){this._resourceManagerProxy.destroy()}},{key:"supportsTileUpdates",get:function(){return!0}},{key:"forEachBufferId",value:function(e){this._bufferIds.forEach((function(t){t.forEach(e)}))}},{key:"update",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r){var n,a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("symbol"===(a=r.schema.processors[0]).type){e.next=3;break}return e.abrupt("return");case 3:s=(0,p.Hg)(this._schema,a),((0,p.uD)(s,"mesh")||(0,p.uD)(s,"target"))&&(t.mesh=!0,null!==(n=t.why)&&void 0!==n&&n.mesh.push("Symbology changed"),this._schema=a,this._factory=this._createFactory(a),this._factory.update(a,this.tileStore.tileScheme.tileInfo));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"onTileMessage",value:function(e,t,r,n){return(0,h.k_)(n),this._onTileData(e,t,r,n)}},{key:"onTileClear",value:function(e){return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}},{key:"onTileError",value:function(e,t,r){var n=r.signal,i={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:n})}},{key:"onTileUpdate",value:function(e){var t,r=this,i=(0,n.Z)(e.removed);try{for(i.s();!(t=i.n()).done;){var a=t.value;this._bufferData.has(a.key.id)&&this._bufferData.delete(a.key.id),this._bufferIds.has(a.key.id)&&this._bufferIds.delete(a.key.id)}}catch(l){i.e(l)}finally{i.f()}var s,u=(0,n.Z)(e.added);try{var o=function(){var e=s.value;r._bufferData.forEach((function(t){var i,a=(0,n.Z)(t);try{for(a.s();!(i=a.n()).done;){var s=i.value;s.message.tileKey===e.id&&r._updateTileMesh("append",e,V(s),[],!1,!1,null)}}catch(l){a.e(l)}finally{a.f()}}))};for(u.s();!(s=u.n()).done;)o()}catch(l){u.e(l)}finally{u.f()}}},{key:"_addBufferData",value:function(e,t){var r;this._bufferData.has(e)||this._bufferData.set(e,[]),null===(r=this._bufferData.get(e))||void 0===r||r.push(V(t))}},{key:"_createFactory",value:function(e){var t=this,r=this.service,n=r.geometryType,i=r.objectIdField,a={geometryType:n,fields:r.fields,spatialReference:d.Z.fromJSON(this.spatialReference)},s=new S.Wr((function(e,r){return t.remoteClient.invoke("tileRenderer.getMaterialItems",e,r)}),this.tileStore.tileScheme.tileInfo),u=e.mesh,o=u.matcher,l=u.aggregateMatcher;return this._store=s,this._matchers.feature=(0,Z.fL)(o,s,a,this._resourceManagerProxy),this._matchers.aggregate=(0,f.yw)(l,(function(e){return(0,Z.fL)(e,s,a,t._resourceManagerProxy)})),new b.j(n,i,s)}},{key:"_onTileData",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r,a,s){var u,o,l,c,v,y,p,d,x,m,g,b,S,Z,k,_,L,w,T,V,M,z,E,I,C=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,h.k_)(s),o=r.type,l=r.addOrUpdate,c=r.remove,v=r.clear,y=r.end,p=!!this._schema.mesh.sortKey,l){e.next=5;break}return d={type:o,addOrUpdate:null,remove:c,clear:v,end:y,sort:p},e.abrupt("return",this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:d},s));case 5:return x=this._processFeatures(t,l,a,s,null===(u=r.status)||void 0===u?void 0:u.version),e.prev=6,e.next=9,x;case 9:if(m=e.sent,!(0,f.Wi)(m)){e.next=13;break}return g={type:o,addOrUpdate:null,remove:c,clear:v,end:y,sort:p},e.abrupt("return",this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:g},s));case 13:b=[],S=(0,n.Z)(m),e.prev=15,S.s();case 17:if((Z=S.n()).done){e.next=41;break}if(k=Z.value,_=!1,L=k.message.bufferIds,w=t.key.id,T=k.message.tileKey,w===T||!(0,f.pC)(L)){e.next=38;break}if(this.tileStore.get(T)){e.next=25;break}return this._addBufferData(w,k),b.push(k),e.abrupt("continue",39);case 25:(V=this._bufferIds.get(T))||(V=new Set,this._bufferIds.set(T,V)),M=Array.from(L),z=0,E=M;case 29:if(!(z<E.length)){e.next=38;break}if(I=E[z],!V.has(I)){e.next=34;break}return _=!0,e.abrupt("break",38);case 34:V.add(I);case 35:z++,e.next=29;break;case 38:_||(this._addBufferData(w,k),b.push(k));case 39:e.next=17;break;case 41:e.next=46;break;case 43:e.prev=43,e.t0=e.catch(15),S.e(e.t0);case 46:return e.prev=46,S.f(),e.finish(46);case 49:return e.next=51,Promise.all(b.map((function(e){var n=t.key.id===e.message.tileKey,i=n?r.remove:[],a=n&&r.end;return C._updateTileMesh(o,t,e,i,a,!!r.clear,s.signal)})));case 51:e.next=56;break;case 53:e.prev=53,e.t1=e.catch(6),this._handleError(t,e.t1,s);case 56:case"end":return e.stop()}}),e,this,[[6,53],[15,43,46,49]])})));return function(t,r,n,i){return e.apply(this,arguments)}}()},{key:"_updateTileMesh",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r,n,a,s,u,o){var l,c,v,y,p,d,x;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t,c=n.message.tileKey,v=!!this._schema.mesh.sortKey,c!==r.key.id&&(s=!1),y=(0,f.yw)(n,(function(e){return e.message})),p=(0,f.yw)(n,(function(e){return e.transferList}))||[],d={type:l,addOrUpdate:y,remove:a,clear:u,end:s,sort:v},x={transferList:(0,f.Wg)(p)||[],signal:o},e.abrupt("return",((0,h.k_)(x),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:c,data:d},x)));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i,a,s,u){return e.apply(this,arguments)}}()},{key:"_processFeatures",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r,n,a,s){var u,o,l,c,v,y;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,f.Wi)(r)&&r.hasFeatures){e.next=2;break}return e.abrupt("return",null);case 2:return u={transform:t.transform,hasZ:!1,hasM:!1},o=this._factory,l={viewingMode:"",scale:t.scale},e.next=7,this._matchers.feature;case 7:return c=e.sent,e.next=10,this._matchers.aggregate;case 10:return v=e.sent,(0,h.k_)(a),y=this._getLabelInfos(t,r),e.next=15,o.analyze(r.getCursor(),this._resourceManagerProxy,c,v,u,l);case 15:return(0,h.k_)(a),e.abrupt("return",this._writeFeatureSet(t,r,u,y,o,n,s));case 17:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i,a){return e.apply(this,arguments)}}()},{key:"_writeFeatureSet",value:function(e,t,r,n,i,a,s){for(var u=t.getSize(),o=this._schema.mesh.matcher.symbologyType,l=new g._(e.key.id,{features:u,records:u,metrics:0},o,a,o!==m.mD.HEATMAP,s),c={viewingMode:"",scale:e.scale},v=t.getCursor();v.next();)try{var h=v.getDisplayId(),y=(0,f.pC)(n)?n.get(h):null;i.writeCursor(l,v,r,c,e.level,y,this._resourceManagerProxy)}catch(d){}var p=e.tileInfoView.tileInfo.isWrappable;return l.serialize(p)}},{key:"_handleError",value:function(e,t,r){if(!(0,h.D_)(t)){var n={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",n,{signal:r.signal})}return Promise.resolve()}},{key:"_getLabelingSchemaForScale",value:function(e){var t=this._schema.mesh.labels;if((0,f.Wi)(t))return null;if("subtype"===t.type){var r={type:"subtype",classes:{}},n=!1;for(var i in t.classes){var a=t.classes[i].filter((function(t){return T(t,e.scale)}));n=n||!!a.length,r.classes[i]=a}return n?r:null}var s=t.classes.filter((function(t){return T(t,e.scale)}));return s.length?{type:"simple",classes:s}:null}},{key:"_getLabels",value:function(e,t){if("subtype"===t.type){var r,n=this.service.subtypeField,i=(0,f.s3)(n,"Expected to find subtype Field"),a=e.readAttribute(i);return null==a?[]:null!==(r=t.classes[a])&&void 0!==r?r:[]}return t.classes}},{key:"_getLabelInfos",value:function(e,t){var r=this,i=this._getLabelingSchemaForScale(e);if((0,f.Wi)(i))return null;for(var a=new Map,s=t.getCursor(),u=function(){var e,t=s.getDisplayId(),u=[],o=(0,x.nE)(t),l=o&&1!==s.readAttribute("cluster_count")?"aggregate":"feature",c=r._getLabels(s,i),f=(0,n.Z)(c);try{var h=function(){var n=e.value;if(n.target!==l)return"continue";var i=s.getStorage(),a=o&&"feature"===l?i.getComputedStringAtIndex(s.readAttribute("referenceId"),n.fieldIndex):i.getComputedStringAtIndex(t,n.fieldIndex);if(!a)return"continue";var c=(0,v.E)(a.toString()),f=c[0],h=c[1];r._store.getMosaicItem(n.symbol,(0,k._)(f)).then((function(e){var t;u[n.index]={glyphs:null!==(t=e.glyphMosaicItems)&&void 0!==t?t:[],rtl:h,index:n.index}}))};for(f.s();!(e=f.n()).done;)h()}catch(y){f.e(y)}finally{f.f()}a.set(t,u)};s.next();)u();return a}}]),r}(_.Z),z=M=(0,c._)([(0,y.j)("esri.views.2d.layers.features.processors.SymbolProcessor")],M)},98125:function(e,t,r){r.d(t,{x:function(){return z},B:function(){return V}});var n=r(74165),i=r(15861),a=r(98991),s=r(37762),u=r(15671),o=r(43144),l=r(80613),c=r(54815),v={marker:l.LW.MARKER,fill:l.LW.FILL,line:l.LW.LINE,text:l.LW.TEXT},f=function(){function e(t,r,n,i){(0,u.Z)(this,e);var a={minScale:null===r||void 0===r?void 0:r.minScale,maxScale:null===r||void 0===r?void 0:r.maxScale},o=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(a);this.layers=t,this.data=r,this.hash=this._createHash()+o,this.rendererKey=n;var f,h={isOutline:!1,placement:null,symbologyType:l.mD.DEFAULT,vvFlags:n},y=(0,s.Z)(t);try{for(y.s();!(f=y.n()).done;){var p=f.value,d=v[p.type];h.isOutline="line"===p.type&&p.isOutline,p.materialKey=(0,c.jj)(d,h),p.maxVVSize=i,p.scaleInfo=a,p.templateHash+=o}}catch(x){y.e(x)}finally{y.f()}}return(0,o.Z)(e,[{key:"type",get:function(){return"expanded-cim"}},{key:"_createHash",value:function(){var e,t="",r=(0,s.Z)(this.layers);try{for(r.s();!(e=r.n()).done;){t+=e.value.templateHash}}catch(n){r.e(n)}finally{r.f()}return t}}]),e}();var h=r(71277),y=r(10064),p=r(92026),d=r(66978),x=r(35995),m=r(70032),g=r(53283),b=r(38048);function S(e,t,r){return Z.apply(this,arguments)}function Z(){return Z=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.name){e.next=2;break}throw new y.Z("style-symbol-reference-name-missing","Missing name in style symbol reference");case 2:if(!t.styleName||"Esri2DPointSymbolsStyle"!==t.styleName){e.next=4;break}return e.abrupt("return",k(t,i));case 4:return e.prev=4,e.t0=L,e.next=8,(0,b.n2)(t,r,i);case 8:return e.t1=e.sent,e.t2=t.name,e.t3=r,e.t4=i,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3,e.t4));case 15:return e.prev=15,e.t5=e.catch(4),e.abrupt("return",((0,d.k_)(e.t5),null));case 18:case"end":return e.stop()}}),e,null,[[4,15]])}))),Z.apply(this,arguments)}function k(e,t){return _.apply(this,arguments)}function _(){return _=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=b.wm.replace(/\{SymbolName\}/gi,t.name),e.prev=1,e.next=4,(0,b.EJ)(i,r);case 4:return a=e.sent,e.abrupt("return",(0,b.KV)(a.data));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",((0,d.k_)(e.t0),null));case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),_.apply(this,arguments)}function L(e,t,r,n){return w.apply(this,arguments)}function w(){return w=(0,i.Z)((0,n.Z)().mark((function e(t,r,i,a){var s,u,o,l,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.data,u={portal:i&&(0,p.pC)(i.portal)?i.portal:m.Z.getDefault(),url:(0,x.mN)(t.baseUrl),origin:"portal-item"},o=s.items.find((function(e){return e.name===r}))){e.next=3;break}throw new y.Z("symbolstyleutils:symbol-name-not-found","The symbol name '".concat(r,"' could not be found"),{symbolName:r});case 3:return l=(0,g.f)((0,b.v9)(o,"cimRef"),u),(0,h.XO)()&&(l=(0,h.pJ)(l)),e.prev=5,e.next=8,(0,b.EJ)(l,a);case 8:return c=e.sent,e.abrupt("return",(0,b.KV)(c.data));case 12:return e.prev=12,e.t0=e.catch(5),e.abrupt("return",((0,d.k_)(e.t0),null));case 15:case"end":return e.stop()}}),e,null,[[5,12]])}))),w.apply(this,arguments)}var T=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,(0,a.c)(t.data,r,i);case 3:return e.t1=e.sent,e.t2=t.data,e.t3=t.rendererKey,e.t4=t.maxVVSize,e.abrupt("return",new e.t0(e.t1,e.t2,e.t3,e.t4));case 8:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();function V(e,t,r,n){return M.apply(this,arguments)}function M(){return M=(0,i.Z)((0,n.Z)().mark((function e(t,r,i,a){var s,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if("cim"!==t.type){e.next=4;break}return e.abrupt("return",T(t,r,i));case 4:if("web-style"!==t.type){e.next=21;break}return e.next=7,S(t,null,a);case 7:if(e.t1=s=e.sent,e.t0=null!==e.t1,!e.t0){e.next=11;break}e.t0=void 0!==s;case 11:if(!e.t0){e.next=15;break}e.t2=s,e.next=16;break;case 15:e.t2=void 0;case 16:return e.t3=e.t2,e.t4=t.rendererKey,e.t5=t.maxVVSize,u={type:"cim",data:e.t3,rendererKey:e.t4,maxVVSize:e.t5},e.abrupt("return",T(u,r,i));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function z(e){if(!e)return null;var t=e.avoidSDFRasterization,r=e.type,n=e.cim,i=e.url,a={cim:n,type:r,mosaicHash:e.materialHash,url:i,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null,avoidSDFRasterization:t};switch(r){case"marker":a.size=e.size,a.path=e.path,a.animatedSymbolProperties=e.animatedSymbolProperties;break;case"line":a.dashTemplate=e.dashTemplate;break;case"text":a.text=e.text,a.fontName=e.fontName}return a}}}]);
//# sourceMappingURL=8423.8463694b.chunk.js.map