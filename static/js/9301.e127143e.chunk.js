"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[9301],{59301:function(t,e,n){n.r(e),n.d(e,{executeAttachmentQuery:function(){return d},fetchAttachments:function(){return y},processAttachmentQueryResult:function(){return p}});var r=n(74165),a=n(15861),c=n(1413),u=n(37762),o=n(19545),s=n(76200),f=n(35995),h=n(22585),i=n(11812);function l(t){var e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function p(t,e){var n,r={},a=(0,u.Z)(e);try{for(a.s();!(n=a.n()).done;){var c,s=n.value,h=s.parentObjectId,l=s.parentGlobalId,p=s.attachmentInfos,d=(0,u.Z)(p);try{for(d.s();!(c=d.n()).done;){var y=c.value,m=y.id,b=(0,f.qg)((0,o.Dp)("".concat(t.path,"/").concat(h,"/attachments/").concat(m))),I=i.Z.fromJSON(y);I.set({url:b,parentObjectId:h,parentGlobalId:l}),r[h]?r[h].push(I):r[h]=[I]}}catch(Z){d.e(Z)}finally{d.f()}}}catch(Z){a.e(Z)}finally{a.f()}return r}function d(t,e,n){var r={query:(0,h.A)((0,c.Z)((0,c.Z)({},t.query),{},{f:"json"},l(e)))};return n&&(r=(0,c.Z)((0,c.Z)((0,c.Z)({},n),r),{},{query:(0,c.Z)((0,c.Z)({},n.query),r.query)})),(0,s.default)(t.path+"/queryAttachments",r).then((function(t){return t.data.attachmentGroups}))}function y(t,e,n){return m.apply(this,arguments)}function m(){return m=(0,a.Z)((0,r.Z)().mark((function t(e,n,a){var c,o,f,h,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=n.objectIds,o=[],f=(0,u.Z)(c);try{for(f.s();!(h=f.n()).done;)i=h.value,o.push((0,s.default)(e.path+"/"+i+"/attachments",a))}catch(r){f.e(r)}finally{f.f()}return t.abrupt("return",Promise.all(o).then((function(t){return c.map((function(e,n){return{parentObjectId:e,attachmentInfos:t[n].data.attachmentInfos}}))})));case 4:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}}}]);
//# sourceMappingURL=9301.e127143e.chunk.js.map