"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[8023],{28023:function(e,t,r){r.r(t),r.d(t,{execute:function(){return o}});var a,n=r(74165),s=r(1413),u=r(15861),c=r(10064),i=r(92026);function o(e,t){var r=t.responseType;r?"array-buffer"!==r&&"blob"!==r&&"json"!==r&&"native"!==r&&"native-request-init"!==r&&"text"!==r&&(r="text"):r="json",t.responseType=r;var o=(0,i.Wg)(t.signal);return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:o}).then(function(){var i=(0,u.Z)((0,n.Z)().mark((function u(i){var b,p,l,f,k,x,h;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!i.data){n.next=23;break}if(!(i.data instanceof ArrayBuffer)){n.next=16;break}if("json"!==r&&"text"!==r&&"blob"!==r||(b=new Blob([i.data]),"json"!==r&&"text"!==r||(a||(a=new FileReaderSync),f=a.readAsText(b),"json"!==r))){n.next=14;break}n.prev=3,p=JSON.parse(f||null),n.next=11;break;case 7:throw n.prev=7,n.t0=n.catch(3),x=(0,s.Z)((0,s.Z)({},n.t0),{},{url:e,requestOptions:t}),new c.Z("request:server",n.t0.message,x);case 11:if(!p.error){n.next=14;break}throw h=(0,s.Z)((0,s.Z)({},p.error),{},{url:e,requestOptions:t}),new c.Z("request:server",p.error.message,h);case 14:n.next=23;break;case 16:if(n.t1="native"===r,!n.t1){n.next=23;break}return i.data.signal=o,n.next=21,fetch(i.data.url,i.data);case 21:l=n.sent,i.httpStatus=l.status;case 23:n.t2=r,n.next="blob"===n.t2?26:"json"===n.t2?28:"native"===n.t2?30:"text"===n.t2?32:34;break;case 26:return k=b,n.abrupt("break",35);case 28:return k=p,n.abrupt("break",35);case 30:return k=l,n.abrupt("break",35);case 32:return k=f,n.abrupt("break",35);case 34:k=i.data;case 35:return n.abrupt("return",{data:k,httpStatus:i.httpStatus,requestOptions:t,ssl:i.ssl,url:e});case 36:case"end":return n.stop()}}),u,null,[[3,7]])})));return function(e){return i.apply(this,arguments)}}())}}}]);
//# sourceMappingURL=8023.dc9fa8af.chunk.js.map