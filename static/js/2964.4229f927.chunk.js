"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[2964],{12964:function(e,t,r){r.r(t),r.d(t,{executeRelationshipQuery:function(){return R},executeRelationshipQueryForCount:function(){return w}});var n=r(1413),u=r(74165),a=r(15861),o=r(23084),c=r(37762),i=r(76200),s=r(22585);function d(e,t){var r=e.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),!r.outFields||null!==t&&void 0!==t&&t.returnCountOnly?delete r.outFields:r.outFields.includes("*")?r.outFields="*":r.outFields=r.outFields.join(","),r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}function f(e,t,r){return l.apply(this,arguments)}function l(){return l=(0,a.Z)((0,u.Z)().mark((function e(t,r,a){var o,i,s,d,f,l,p,y,Z,v;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,r,a);case 2:o=e.sent,i=o.data,s=i.geometryType,d=i.spatialReference,f={},l=(0,c.Z)(i.relatedRecordGroups);try{for(l.s();!(p=l.n()).done;)if(y=p.value,Z={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:d,hasZ:!!i.hasZ,hasM:!!i.hasM,features:y.relatedRecords},null!=y.objectId)f[y.objectId]=Z;else for(v in y)y.hasOwnProperty(v)&&"relatedRecords"!==v&&(f[y[v]]=Z)}catch(u){l.e(u)}finally{l.f()}return e.abrupt("return",(0,n.Z)((0,n.Z)({},o),{},{data:f}));case 10:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function p(e,t,r){return y.apply(this,arguments)}function y(){return y=(0,a.Z)((0,u.Z)().mark((function e(t,r,a){var o,i,s,d,f,l;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,r,a,{returnCountOnly:!0});case 2:o=e.sent,i=o.data,s={},d=(0,c.Z)(i.relatedRecordGroups);try{for(d.s();!(f=d.n()).done;)null!=(l=f.value).objectId&&(s[l.objectId]=l.count)}catch(u){d.e(u)}finally{d.f()}return e.abrupt("return",(0,n.Z)((0,n.Z)({},o),{},{data:s}));case 8:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function h(e,t){return Z.apply(this,arguments)}function Z(){return Z=(0,a.Z)((0,u.Z)().mark((function e(t,r){var a,o,c,f=arguments;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.length>2&&void 0!==f[2]?f[2]:{},o=f.length>3?f[3]:void 0,c=(0,s.A)((0,n.Z)((0,n.Z)((0,n.Z)({},t.query),{},{f:"json"},o),d(r,o))),e.abrupt("return",(0,i.default)(t.path+"/queryRelatedRecords",(0,n.Z)((0,n.Z)({},a),{},{query:(0,n.Z)((0,n.Z)({},a.query),c)})));case 4:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}var v=r(49818),b=r(99086);function R(e,t,r){return m.apply(this,arguments)}function m(){return m=(0,a.Z)((0,u.Z)().mark((function e(t,r,n){var a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=b.default.from(r),a=(0,o.en)(t),e.abrupt("return",f(a,r,n).then((function(e){var t=e.data,r={};return Object.keys(t).forEach((function(e){return r[e]=v.Z.fromJSON(t[e])})),r})));case 3:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function w(e,t,r){return j.apply(this,arguments)}function j(){return j=(0,a.Z)((0,u.Z)().mark((function e(t,r,a){var c;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=b.default.from(r),c=(0,o.en)(t),e.abrupt("return",p(c,r,(0,n.Z)({},a)).then((function(e){return e.data})));case 3:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}}}]);
//# sourceMappingURL=2964.4229f927.chunk.js.map