"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[9130],{59130:function(t,e,r){r.r(e),r.d(e,{submitValidateNetworkTopologyJob:function(){return p},validateNetworkTopology:function(){return l}});var n=r(74165),a=r(1413),i=r(15861),o=r(76200),s=r(10064),u=r(23084),c=r(64267);function l(t,e,r){return d.apply(this,arguments)}function d(){return d=(0,i.Z)((0,n.Z)().mark((function t(e,r,i){var s,l,d,p,f,v,Z,h,y,b,k;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d=(0,u.en)(e),p=r.toJSON(),r.validationSet&&(p.validationSet=JSON.stringify(r.validationSet)),f=(0,a.Z)((0,a.Z)({},p),{},{returnEdits:!0,f:"json"}),v=(0,u.cv)((0,a.Z)((0,a.Z)({},d.query),f)),Z=(0,u.lA)(v,(0,a.Z)((0,a.Z)({},i),{},{method:"post"})),h="".concat(d.path,"/validateNetworkTopology"),t.next=8,(0,o.default)(h,Z);case 8:if(y=t.sent,b=y.data){t.next=12;break}return t.abrupt("return",null);case 12:return k=c.Z.fromJSON(b),t.abrupt("return",(k.serviceEdits=null!==(s=null===(l=k.serviceEdits)||void 0===l?void 0:l.map((function(t){return{layerId:t.id,editedFeatures:t.editedFeatures}})))&&void 0!==s?s:[],k));case 14:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}function p(t,e,r){return f.apply(this,arguments)}function f(){return f=(0,i.Z)((0,n.Z)().mark((function t(e,r,i){var c,l,d,p,f,v;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.gdbVersion){t.next=2;break}throw new s.Z("submit-validate-network-topology-job:missing-gdb-version","version is missing");case 2:return c=(0,u.en)(e),l=r.toJSON(),r.validationSet&&(l.validationSet=JSON.stringify(r.validationSet)),d=(0,u.lA)(c.query,(0,a.Z)((0,a.Z)({query:(0,u.cv)((0,a.Z)((0,a.Z)({},l),{},{returnEdits:!0,async:!0,f:"json"}))},i),{},{method:"post"})),p="".concat(c.path,"/validateNetworkTopology"),t.next=8,(0,o.default)(p,d);case 8:return f=t.sent,v=f.data,t.abrupt("return",v?v.statusUrl:null);case 11:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}}}]);
//# sourceMappingURL=9130.f1921b28.chunk.js.map