"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[3657],{23657:function(e,r,n){n.r(r),n.d(r,{clearBoundingBoxCache:function(){return h},computeIconLayerResourceSize:function(){return d},computeLayerResourceSize:function(){return y},computeLayerSize:function(){return b},computeObjectLayerResourceSize:function(){return x}});var t=n(74165),u=n(15861),o=n(76200),i=n(10064),c=n(59026),s=n(92026),a=n(41414),p=n(53720),f=l();function l(){return new c.Z(50)}function h(){f=l()}function y(e,r){if("icon"===e.type)return d(e,r);if("object"===e.type)return x(e,r);throw new i.Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}function b(e,r){return m.apply(this,arguments)}function m(){return(m=(0,u.Z)((0,t.Z)().mark((function e(r,n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("icon"!==r.type){e.next=2;break}return e.abrupt("return",w(r,n));case 2:if("object"!==r.type){e.next=4;break}return e.abrupt("return",Z(r,n));case 4:throw new i.Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,r){return v.apply(this,arguments)}function v(){return(v=(0,u.Z)((0,t.Z)().mark((function e(r,n){var u,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(u=r.resource)||void 0===u||!u.href){e.next=2;break}return e.abrupt("return",(t=r.resource.href,(0,o.default)(t,{responseType:"image"}).then((function(e){return e.data}))).then((function(e){return[e.width,e.height]})));case 2:if(null===(c=r.resource)||void 0===c||!c.primitive){e.next=4;break}return e.abrupt("return",(0,s.pC)(n)?[n,n]:[256,256]);case 4:throw new i.Z("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource");case 5:case"end":return e.stop()}var t}),e)})))).apply(this,arguments)}function w(e,r){return d(e,r).then((function(r){if(null==e.size)return r;var n=r[0]/r[1];return n>1?[e.size,e.size/n]:[e.size*n,e.size]}))}function x(e,r){return function(e,r){return z.apply(this,arguments)}(e,r).then((function(e){return(0,a.dp)(e)}))}function Z(e,r){return k.apply(this,arguments)}function k(){return(k=(0,u.Z)((0,t.Z)().mark((function e(r,n){var u;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(r,n);case 2:return u=e.sent,e.abrupt("return",(0,p.$K)(u,r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=(0,u.Z)((0,t.Z)().mark((function e(r,u){var o,c,l,h,y,b,m;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.isPrimitive){e.next=11;break}if(c=(0,s.s3)(null===(o=r.resource)||void 0===o?void 0:o.href),void 0===(l=f.get(c))){e.next=4;break}return e.abrupt("return",l);case 4:return e.next=6,Promise.all([n.e(1378),n.e(2029),n.e(5158),n.e(1158),n.e(9900)]).then(n.bind(n,59900));case 6:return h=e.sent,e.next=9,h.fetch(c,{disableTextures:!0});case 9:return y=e.sent,e.abrupt("return",(f.put(c,y.referenceBoundingBox),y.referenceBoundingBox));case 11:if(b=null,r.resource&&r.resource.primitive&&(b=(0,a.Ue)((0,p.Uz)(r.resource.primitive)),(0,s.pC)(u)))for(m=0;m<b.length;m++)b[m]*=u;return e.abrupt("return",b?Promise.resolve(b):Promise.reject(new i.Z("symbol:invalid-resource","The symbol does not have a valid resource")));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=3657.2240b01e.chunk.js.map