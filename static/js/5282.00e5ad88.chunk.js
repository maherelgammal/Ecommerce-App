"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[5282],{65282:function(n,e,r){r.r(e),r.d(e,{registerFunctions:function(){return d}});var t=r(74165),a=r(15861),u=r(62357),c=r(22564),o=r(44715),i=r(29876);function s(n,e){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?u.Z.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:i.yE[n.field.type],codedValues:n.domain.codedValues.map((function(n){return{name:n.name,code:n.code}}))},(0,o.C)(e)):u.Z.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:i.yE[n.field.type],min:n.domain.min,max:n.domain.max},(0,o.C)(e)):null}function d(n){"async"===n.mode&&(n.functions.domain=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,a.Z)((0,t.Z)().mark((function n(a,u,i){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,o.y)(i,2,3,e,r),!(0,o.w)(i[0])){n.next=2;break}return n.abrupt("return",s((0,o.P)(i[0],(0,o.j)(i[1]),void 0===i[2]?void 0:(0,o.g)(i[2])),e));case 2:if(!(0,o.T)(i[0])){n.next=6;break}return n.next=5,i[0]._ensureLoaded();case 5:return n.abrupt("return",s((0,o.Y)((0,o.j)(i[1]),i[0],null,void 0===i[2]?void 0:(0,o.g)(i[2])),e));case 6:throw new c.aV(e,c.rH.InvalidParameter,r);case 7:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.functions.subtypes=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,a.Z)((0,t.Z)().mark((function n(a,i,s){var d,f;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,o.y)(s,1,1,e,r),!(0,o.w)(s[0])){n.next=3;break}return d=(0,o.O)(s[0]),n.abrupt("return",d?u.Z.convertObjectToArcadeDictionary(d,(0,o.C)(e)):null);case 3:if(!(0,o.T)(s[0])){n.next=8;break}return n.next=6,s[0]._ensureLoaded();case 6:return f=s[0].subtypes(),n.abrupt("return",f?u.Z.convertObjectToArcadeDictionary(f,(0,o.C)(e)):null);case 8:throw new c.aV(e,c.rH.InvalidParameter,r);case 9:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.functions.domainname=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,a.Z)((0,t.Z)().mark((function n(a,u,i){var s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,o.y)(i,2,4,e,r),!(0,o.w)(i[0])){n.next=2;break}return n.abrupt("return",(0,o.Q)(i[0],(0,o.j)(i[1]),i[2],void 0===i[3]?void 0:(0,o.g)(i[3])));case 2:if(!(0,o.T)(i[0])){n.next=7;break}return n.next=5,i[0]._ensureLoaded();case 5:return s=(0,o.Y)((0,o.j)(i[1]),i[0],null,void 0===i[3]?void 0:(0,o.g)(i[3])),n.abrupt("return",(0,o.Z)(s,i[2]));case 7:throw new c.aV(e,c.rH.InvalidParameter,r);case 8:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.signatures.push({name:"domainname",min:2,max:4}),n.functions.domaincode=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,a.Z)((0,t.Z)().mark((function n(a,u,i){var s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,o.y)(i,2,4,e,r),!(0,o.w)(i[0])){n.next=2;break}return n.abrupt("return",(0,o.S)(i[0],(0,o.j)(i[1]),i[2],void 0===i[3]?void 0:(0,o.g)(i[3])));case 2:if(!(0,o.T)(i[0])){n.next=7;break}return n.next=5,i[0]._ensureLoaded();case 5:return s=(0,o.Y)((0,o.j)(i[1]),i[0],null,void 0===i[3]?void 0:(0,o.g)(i[3])),n.abrupt("return",(0,o._)(s,i[2]));case 7:throw new c.aV(e,c.rH.InvalidParameter,r);case 8:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.signatures.push({name:"domaincode",min:2,max:4})),n.functions.text=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if((0,o.y)(a,1,2,e,r),!(0,o.T)(a[0]))return(0,o.t)(a[0],a[1]);var u=(0,o.A)(a[1],"");return""===u?a[0].castToText():"schema"===u.toLowerCase()?a[0].convertToText("schema",n.abortSignal):"featureset"===u.toLowerCase()?a[0].convertToText("featureset",n.abortSignal):void 0}))},n.functions.gdbversion=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,a.Z)((0,t.Z)().mark((function n(a,u,i){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,o.y)(i,1,1,e,r),!(0,o.w)(i[0])){n.next=2;break}return n.abrupt("return",i[0].gdbVersion());case 2:if(!(0,o.T)(i[0])){n.next=6;break}return n.next=5,i[0].load();case 5:return n.abrupt("return",n.sent.gdbVersion);case 6:throw new c.aV(e,c.rH.InvalidParameter,r);case 7:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.functions.schema=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,a.Z)((0,t.Z)().mark((function n(a,i,s){var d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,o.y)(s,1,1,e,r),!(0,o.T)(s[0])){n.next=4;break}return n.next=3,s[0].load();case 3:return n.abrupt("return",u.Z.convertObjectToArcadeDictionary(s[0].schema(),(0,o.C)(e)));case 4:if(!(0,o.w)(s[0])){n.next=7;break}return d=(0,o.N)(s[0]),n.abrupt("return",d?u.Z.convertObjectToArcadeDictionary(d,(0,o.C)(e)):null);case 7:throw new c.aV(e,c.rH.InvalidParameter,r);case 8:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())}}}}]);
//# sourceMappingURL=5282.00e5ad88.chunk.js.map