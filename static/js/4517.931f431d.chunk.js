"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[4517],{82582:function(e,t,r){r.d(t,{dp:function(){return o},yZ:function(){return a}});var n=r(68860),i=96;function a(e,t){var r=t||e.extent,a=e.width,o=(0,n.c9)(r&&r.spatialReference);return r&&a?r.width/a*o*n.hd*i:0}function o(e,t){return e/((0,n.c9)(t)*n.hd*i)}},83978:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(15671),i=r(43144),a=r(11752),o=r(61120),u=r(60136),s=r(29388),l=r(27366),c=(r(32718),r(25243),r(63780),r(10064),r(93169),r(69912)),p=r(80613),f=r(82022),y=r(8548),d=function(e){(0,u.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"doRender",value:function(e){e.drawPhase===p.jx.HIGHLIGHT&&(0,a.Z)((0,o.Z)(r.prototype),"doRender",this).call(this,e)}},{key:"renderChildren",value:function(e){if(this.attributeView.update(),this.children.some((function(e){return e.hasData}))){this.attributeView.bindTextures(e.context),(0,a.Z)((0,o.Z)(r.prototype),"renderChildren",this).call(this,e);var t=e.painter.effects.highlight;t.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(y.lk.COLOR_BUFFER_BIT),this._renderChildren(e,t.defines.concat(["highlightAll"])),t.draw(e),t.unbind()}}}]),r}(f.Z),h=d=(0,l._)([(0,c.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],d)},84848:function(e,t,r){r.d(t,{VF:function(){return pe},Uf:function(){return ce}});var n=r(1413),i=r(93433),a=r(29439),o=r(37762),u=r(74165),s=r(15861),l=r(15671),c=r(43144),p=r(60136),f=r(29388),y=r(27366),d=r(52639),h=r(85015),v=r(40281),m=r(10064),b=r(93169),g=r(77427),x=r(92026),w=r(66978),Z=r(94172),k=r(68860),_=r(49861),C=r(25243),F=(r(63780),r(69912)),S=r(53866),I=r(82582),R=r(87072);function j(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function E(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,n=0;n<e.length;n++){var i=e[n].size;"number"==typeof i&&(t+=i,r++)}return t/r}(e.stops):t}function O(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.maxSize,n=t.minSize;return(E(r,e)+E(n,e))/2})),n=0,i=r.length;if(0===i)return e;for(var a=0;a<i;a++)n+=r[a];var o=Math.floor(n/i);return Math.max(o,e)}function P(e){var t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;var n="visualVariables"in t?O(r,t.visualVariables):r;if("simple"===t.type)return j(n,t.symbol);if("unique-value"===t.type){var i,a=n;return null!==(i=t.uniqueValueInfos)&&void 0!==i&&i.forEach((function(e){a=j(a,e.symbol)})),a}if("class-breaks"===t.type){var o=n;return t.classBreakInfos.forEach((function(e){o=j(o,e.symbol)})),o}return"dot-density"===t.type||t.type,n}var N=r(76200),V=r(91340),G=r(23084),T=r(76672),M=r(77981),A=r(58132),L=function(e){return e.spatialReference.wkid||JSON.stringify(e.spatialReference)};function U(e,t){var r=e.toJSON(),n=r.dpi,i=r.gdbVersion,a=r.geometry,o=r.geometryPrecision,u=r.height,s=r.layerOption,l=r.mapExtent,c=r.maxAllowableOffset,p=r.returnFieldName,f=r.returnGeometry,y=r.returnUnformattedValues,d=r.returnZ,h=r.spatialReference,v=r.timeExtent,m=r.tolerance,b=r.width,g=H(e),w=g.dynamicLayers,Z=g.layerDefs,k=g.layerIds,_=t&&(0,x.pC)(t.geometry)?t.geometry:null,C={geometryPrecision:o,maxAllowableOffset:c,returnFieldName:p,returnGeometry:f,returnUnformattedValues:y,returnZ:d,tolerance:m},F=_&&_.toJSON()||a;if(C.imageDisplay="".concat(b,",").concat(u,",").concat(n),i&&(C.gdbVersion=i),F&&(delete F.spatialReference,C.geometry=JSON.stringify(F),C.geometryType=(0,M.Ji)(F)),h?C.sr=h.wkid||JSON.stringify(h):F&&F.spatialReference?C.sr=L(F):l&&l.spatialReference&&(C.sr=L(l)),C.time=v?[v.start,v.end].join(","):null,l){var S=l.xmin,I=l.ymin,R=l.xmax,j=l.ymax;C.mapExtent="".concat(S,",").concat(I,",").concat(R,",").concat(j)}return Z&&(C.layerDefs=Z),w&&!Z&&(C.dynamicLayers=w),C.layers="popup"===s?"visible":s,k&&!w&&(C.layers+=":".concat(k.join(","))),C}function H(e){var t,r,n=e.mapExtent,i=e.floors,a=e.width,u=e.sublayers,s=e.layerIds,l=e.layerOption,c=e.gdbVersion,p=null===u||void 0===u||null===(t=u.find((function(e){return null!=e.layer})))||void 0===t||null===(r=t.layer)||void 0===r?void 0:r.serviceSublayers,f="popup"===l,y={},d=(0,I.yZ)({extent:n,width:a,spatialReference:null===n||void 0===n?void 0:n.spatialReference}),h=[];if(null!==u&&void 0!==u&&u.forEach((function e(t){var r=0===d,n=0===t.minScale||d<=t.minScale,i=0===t.maxScale||d>=t.maxScale;if(t.visible&&(r||n&&i))if(t.sublayers)t.sublayers.forEach(e);else{if(!1===(null===s||void 0===s?void 0:s.includes(t.id))||f&&(!t.popupTemplate||!t.popupEnabled))return;h.unshift(t)}})),u&&!h.length)y.layerIds=[];else{var v=(0,A.FN)(h,p,c),m=h.map((function(e){var t=(0,R.f)(i,e);return e.toExportImageJSON(t)}));if(v)y.dynamicLayers=JSON.stringify(m);else{if(u){var b=h.map((function(e){return e.id}));s&&(b=b.filter((function(e){return s.includes(e)}))),y.layerIds=b}else(null===s||void 0===s?void 0:s.length)&&(y.layerIds=s);var g=function(e,t){var r=!(null===e||void 0===e||!e.length),n=t.filter((function(e){return null!=e.definitionExpression||r&&null!=e.floorInfo}));return n.length?n.map((function(t){var r=(0,R.f)(e,t),n=(0,T._)(r,t.definitionExpression);return{id:t.id,definitionExpression:(0,x.Pt)(n,void 0)}})):null}(i,h);if((0,x.pC)(g)&&g.length){var w,Z={},k=(0,o.Z)(g);try{for(k.s();!(w=k.n()).done;){var _=w.value;_.definitionExpression&&(Z[_.id]=_.definitionExpression)}}catch(C){k.e(C)}finally{k.f()}Object.keys(Z).length&&(y.layerDefs=JSON.stringify(Z))}}}return y}var J,q=r(59486),Q=r(62044),z=r(46784),B=r(78952),D=J=function(e){(0,p.Z)(r,e);var t=(0,f.Z)(r);function r(e){var n;return(0,l.Z)(this,r),(n=t.call(this,e)).dpi=96,n.floors=null,n.gdbVersion=null,n.geometry=null,n.geometryPrecision=null,n.height=400,n.layerIds=null,n.layerOption="top",n.mapExtent=null,n.maxAllowableOffset=null,n.returnFieldName=!0,n.returnGeometry=!1,n.returnM=!1,n.returnUnformattedValues=!0,n.returnZ=!1,n.spatialReference=null,n.sublayers=null,n.timeExtent=null,n.tolerance=null,n.width=400,n}return(0,c.Z)(r,null,[{key:"from",value:function(e){return(0,C.TJ)(J,e)}}]),r}(z.wq);(0,y._)([(0,_.Cb)({type:Number,json:{write:!0}})],D.prototype,"dpi",void 0),(0,y._)([(0,_.Cb)()],D.prototype,"floors",void 0),(0,y._)([(0,_.Cb)({type:String,json:{write:!0}})],D.prototype,"gdbVersion",void 0),(0,y._)([(0,_.Cb)({types:q.qM,json:{read:M.im,write:!0}})],D.prototype,"geometry",void 0),(0,y._)([(0,_.Cb)({type:Number,json:{write:!0}})],D.prototype,"geometryPrecision",void 0),(0,y._)([(0,_.Cb)({type:Number,json:{write:!0}})],D.prototype,"height",void 0),(0,y._)([(0,_.Cb)({type:[Number],json:{write:!0}})],D.prototype,"layerIds",void 0),(0,y._)([(0,_.Cb)({type:["top","visible","all","popup"],json:{write:!0}})],D.prototype,"layerOption",void 0),(0,y._)([(0,_.Cb)({type:S.Z,json:{write:!0}})],D.prototype,"mapExtent",void 0),(0,y._)([(0,_.Cb)({type:Number,json:{write:!0}})],D.prototype,"maxAllowableOffset",void 0),(0,y._)([(0,_.Cb)({type:Boolean,json:{write:!0}})],D.prototype,"returnFieldName",void 0),(0,y._)([(0,_.Cb)({type:Boolean,json:{write:!0}})],D.prototype,"returnGeometry",void 0),(0,y._)([(0,_.Cb)({type:Boolean,json:{write:!0}})],D.prototype,"returnM",void 0),(0,y._)([(0,_.Cb)({type:Boolean,json:{write:!0}})],D.prototype,"returnUnformattedValues",void 0),(0,y._)([(0,_.Cb)({type:Boolean,json:{write:!0}})],D.prototype,"returnZ",void 0),(0,y._)([(0,_.Cb)({type:B.Z,json:{write:!0}})],D.prototype,"spatialReference",void 0),(0,y._)([(0,_.Cb)()],D.prototype,"sublayers",void 0),(0,y._)([(0,_.Cb)({type:Q.Z,json:{write:!0}})],D.prototype,"timeExtent",void 0),(0,y._)([(0,_.Cb)({type:Number,json:{write:!0}})],D.prototype,"tolerance",void 0),(0,y._)([(0,_.Cb)({type:Number,json:{write:!0}})],D.prototype,"width",void 0);var W=D=J=(0,y._)([(0,F.j)("esri.rest.support.IdentifyParameters")],D),K=r(38511),X=r(31201),Y=r(27823),$=function(e){(0,p.Z)(r,e);var t=(0,f.Z)(r);function r(e){var n;return(0,l.Z)(this,r),(n=t.call(this,e)).displayFieldName=null,n.feature=null,n.layerId=null,n.layerName=null,n}return(0,c.Z)(r,[{key:"readFeature",value:function(e,t){return d.Z.fromJSON({attributes:(0,n.Z)({},t.attributes),geometry:(0,n.Z)({},t.geometry)})}},{key:"writeFeature",value:function(e,t){if(e){var r=e.attributes,i=e.geometry;r&&(t.attributes=(0,n.Z)({},r)),(0,x.pC)(i)&&(t.geometry=i.toJSON(),t.geometryType=Y.P.toJSON(i.type))}}}]),r}(z.wq);(0,y._)([(0,_.Cb)({type:String,json:{write:!0}})],$.prototype,"displayFieldName",void 0),(0,y._)([(0,_.Cb)({type:d.Z})],$.prototype,"feature",void 0),(0,y._)([(0,K.r)("feature",["attributes","geometry"])],$.prototype,"readFeature",null),(0,y._)([(0,X.c)("feature")],$.prototype,"writeFeature",null),(0,y._)([(0,_.Cb)({type:Number,json:{write:!0}})],$.prototype,"layerId",void 0),(0,y._)([(0,_.Cb)({type:String,json:{write:!0}})],$.prototype,"layerName",void 0);var ee=$=(0,y._)([(0,F.j)("esri.rest.support.IdentifyResult")],$);function te(e,t,r){return re.apply(this,arguments)}function re(){return re=(0,s.Z)((0,u.Z)().mark((function e(t,r,i){var a,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(r=ie(r)).geometry?[r.geometry]:[],o=(0,G.en)(t),e.abrupt("return",(o.path+="/identify",(0,V.aX)(a).then((function(e){var t=U(r,{geometry:e&&e[0]}),a=(0,G.cv)((0,n.Z)((0,n.Z)({},o.query),{},{f:"json"},t)),u=(0,G.lA)(a,i);return(0,N.default)(o.path,u).then(ne).then((function(e){return ae(e,r.sublayers)}))}))));case 2:case"end":return e.stop()}}),e)}))),re.apply(this,arguments)}function ne(e){var t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((function(e){return ee.fromJSON(e)})),t}function ie(e){return W.from(e)}function ae(e,t){if(null===t||void 0===t||!t.length)return e;var r=new Map;t.forEach((function e(t){r.set(t.id,t),t.sublayers&&t.sublayers.forEach(e)}));var n,i=(0,o.Z)(e.results);try{for(i.s();!(n=i.n()).done;){var a=n.value;a.feature.sourceLayer=r.get(a.layerId)}}catch(u){i.e(u)}finally{i.f()}return e}var oe=r(819),ue=r(16072),se=r(24405),le=null;function ce(e,t){return"tile"===t.type||"map-image"===t.type}var pe=function(e){(0,p.Z)(n,e);var t=(0,f.Z)(n);function n(e){var r;return(0,l.Z)(this,n),(r=t.call(this,e))._featuresResolutions=new WeakMap,r.highlightGraphics=null,r.highlightGraphicUpdated=null,r.updateHighlightedFeatures=(0,w.Ds)(function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.destroyed||r.updatingHandles.addPromise(r._updateHighlightedFeaturesGeometries(t).catch((function(){})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r}return(0,c.Z)(n,[{key:"initialize",value:function(){var e=this,t=function(t){e.updatingHandles.addPromise(e._updateHighlightedFeaturesSymbols(t).catch((function(){}))),e.updateHighlightedFeatures(e._highlightGeometriesResolution)};this.addHandles([(0,Z.on)((function(){return e.highlightGraphics}),"change",(function(e){return t(e.added)}),{onListenerAdd:function(e){return t(e)}})])}},{key:"fetchPopupFeatures",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t,r){var n,i,a,o,s,l,c,p;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.layerView,s=o.layer,l=o.view.scale,t){e.next=3;break}throw new m.Z("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});case 3:if((c=fe(s.sublayers,l,r)).length){e.next=6;break}return e.abrupt("return",[]);case 6:return e.next=8,de(s,c);case 8:if(p=e.sent,(null===(n=null===(i=s.capabilities)||void 0===i||null===(a=i.operations)||void 0===a?void 0:a.supportsIdentify)||void 0===n||n)&&s.version>=10.5||p){e.next=11;break}throw new m.Z("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});case 11:return e.abrupt("return",p?this._fetchPopupFeaturesUsingQueries(t,c,r):this._fetchPopupFeaturesUsingIdentify(t,c,r));case 12:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"clearHighlights",value:function(){var e;null===(e=this.highlightGraphics)||void 0===e||e.removeAll()}},{key:"highlight",value:function(e){var t,r=this.highlightGraphics;if(!r)return{remove:function(){}};var n=null;if(e instanceof d.Z?n=[e]:v.Z.isCollection(e)&&e.length>0?n=e.toArray():Array.isArray(e)&&e.length>0&&(n=e),!(n=null===(t=n)||void 0===t?void 0:t.filter(x.pC))||!n.length)return{remove:function(){}};var i,a=(0,o.Z)(n);try{for(a.s();!(i=a.n()).done;){var u=i.value,s=u.sourceLayer;null!=s&&"geometryType"in s&&"point"===s.geometryType&&(u.visible=!1)}}catch(l){a.e(l)}finally{a.f()}return r.addMany(n),{remove:function(){var e;r.removeMany(null!==(e=n)&&void 0!==e?e:[])}}}},{key:"_updateHighlightedFeaturesSymbols",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t){var n,i,a,l,c,p;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.layerView.view,i=this.highlightGraphics,a=this.highlightGraphicUpdated,!i||!a){e.next=18;break}l=(0,o.Z)(t),e.prev=3,p=(0,u.Z)().mark((function e(){var t,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=c.value,o=t.sourceLayer&&"renderer"in t.sourceLayer&&t.sourceLayer.renderer,t.sourceLayer&&"geometryType"in t.sourceLayer&&"point"===t.sourceLayer.geometryType&&o&&"getSymbolAsync"in o&&o.getSymbolAsync(t).then(function(){var e=(0,s.Z)((0,u.Z)().mark((function e(s){var l,c,p;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s||(s=new ue.Z),c=null,p="visualVariables"in o?null===(l=o.visualVariables)||void 0===l?void 0:l.find((function(e){return"size"===e.type})):void 0,e.t0=p,!e.t0){e.next=11;break}if(e.t1=le,e.t1){e.next=10;break}return e.next=9,Promise.resolve().then(r.bind(r,56011));case 9:le=e.sent.getSize;case 10:c=le(p,t,{view:n.type,scale:n.scale,shape:"simple-marker"===s.type?s.style:null});case 11:c||(c="width"in s&&"height"in s&&null!=s.width&&null!=s.height?Math.max(s.width,s.height):"size"in s?s.size:16),i.includes(t)&&(t.symbol=new ue.Z({style:"square",size:c,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),a(t,"symbol"),t.visible=!0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})),l.s();case 6:if((c=l.n()).done){e.next=10;break}return e.delegateYield(p(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),l.e(e.t1);case 15:return e.prev=15,l.f(),e.finish(15);case 18:case"end":return e.stop()}}),e,this,[[3,12,15,18]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_updateHighlightedFeaturesGeometries",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t){var r,n,s,l,c,p,f,y,d,h,v,m,b,x,w,Z,k,_,C,F,S;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.layerView,n=r.layer,s=r.view,l=this.highlightGraphics,c=this.highlightGraphicUpdated,this._highlightGeometriesResolution=t,c&&null!==l&&void 0!==l&&l.length&&n.capabilities.operations.supportsQuery){e.next=3;break}return e.abrupt("return");case 3:p=this._getTargetResolution(t),f=new Map,y=(0,o.Z)(l);try{for(y.s();!(d=y.n()).done;)h=d.value,(!this._featuresResolutions.has(h)||this._featuresResolutions.get(h)>p)&&(v=h.sourceLayer,(0,g.s1)(f,v,(function(){return new Map})).set(h.getObjectId(),h))}catch(u){y.e(u)}finally{y.f()}return m=Array.from(f,(function(e){var t=(0,a.Z)(e,2),r=t[0],n=t[1],o=r.createQuery();return o.objectIds=(0,i.Z)(n.keys()),o.outFields=[r.objectIdField],o.returnGeometry=!0,o.maxAllowableOffset=p,o.outSpatialReference=s.spatialReference,r.queryFeatures(o)})),e.next=9,Promise.all(m);case 9:if(b=e.sent,!this.destroyed){x=(0,o.Z)(b);try{for(x.s();!(w=x.n()).done;){Z=w.value.features,k=(0,o.Z)(Z);try{for(k.s();!(_=k.n()).done;)C=_.value,F=C.sourceLayer,(S=f.get(F).get(C.getObjectId()))&&l.includes(S)&&(S.geometry=C.geometry,c(S,"geometry"),this._featuresResolutions.set(S,p))}catch(u){k.e(u)}finally{k.f()}}}catch(u){x.e(u)}finally{x.f()}}case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getTargetResolution",value:function(e){var t=e*(0,k.c9)(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r}},{key:"_fetchPopupFeaturesUsingIdentify",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t,r,n){var i,a,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._createIdentifyParameters(t,r,n);case 2:if(i=e.sent,!(0,x.Wi)(i)){e.next=5;break}return e.abrupt("return",[]);case 5:return e.next=7,te(this.layerView.layer.parsedUrl,i);case 7:return a=e.sent,o=a.results,e.abrupt("return",o.map((function(e){return e.feature})));case 10:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"_createIdentifyParameters",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t,r,n){var i,a,o,s,l,c,p,f,y,d,h,v,m;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.layerView,a=i.floors,o=i.layer,s=i.timeExtent,l=i.view,c=l.spatialReference,p=l.scale,f=(0,x.pC)(n)?n.event:null,r.length){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,Promise.all(r.map((function(e){return e.sublayer.load().catch((function(){}))})));case 5:return y=Math.min((0,b.Z)("mapservice-popup-identify-max-tolerance"),o.allSublayers.reduce((function(e,t){return t.renderer?P({renderer:t.renderer,event:f}):e}),2)),d=this.createFetchPopupFeaturesQueryGeometry(t,y),h=(0,I.dp)(p,c),v=Math.round(d.width/h),m=new S.Z({xmin:d.center.x-h*v,ymin:d.center.y-h*v,xmax:d.center.x+h*v,ymax:d.center.y+h*v,spatialReference:d.spatialReference}),e.abrupt("return",new W({floors:a,gdbVersion:"gdbVersion"in o?o.gdbVersion:void 0,geometry:t,height:v,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:c,sublayers:o.sublayers,timeExtent:s,tolerance:y,width:v}));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"_fetchPopupFeaturesUsingQueries",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t,r,n){var a,l,c,p,f,y=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.layerView,l=a.floors,c=a.timeExtent,p=(0,x.pC)(n)?n.event:null,f=r.map(function(){var e=(0,s.Z)((0,u.Z)().mark((function e(r){var n,i,a,s,f,d,h,v,m,b,g,w,Z,k,_,C;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.sublayer,i=r.popupTemplate,e.next=3,n.load().catch((function(){}));case 3:if(!n.capabilities||n.capabilities.operations.supportsQuery){e.next=5;break}return e.abrupt("return",[]);case 5:return a=n.createQuery(),s=P({renderer:n.renderer,event:p}),f=y.createFetchPopupFeaturesQueryGeometry(t,s),a.geometry=f,e.next=9,(0,se.e)(n,i);case 9:if(a.outFields=e.sent,a.timeExtent=c,!l){e.next=14;break}d=l.clone(),h=(0,R.f)(d,n),(0,x.pC)(h)&&(a.where=a.where?"(".concat(a.where,") AND (").concat(h,")"):h);case 14:return v=y._getTargetResolution(f.width/s),e.next=17,ye(i);case 17:return m=e.sent,(b="point"===n.geometryType||m&&m.arcadeUtils.hasGeometryOperations(i))||(a.maxAllowableOffset=v),e.next=22,n.queryFeatures(a);case 22:return g=e.sent,w=g.features,Z=b?0:v,e.next=27,ve(n,w);case 27:w=e.sent,k=(0,o.Z)(w);try{for(k.s();!(_=k.n()).done;)C=_.value,y._featuresResolutions.set(C,Z)}catch(u){k.e(u)}finally{k.f()}return e.abrupt("return",w);case 31:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,(0,w.as)(f);case 3:return e.abrupt("return",e.sent.reverse().reduce((function(e,t){return t.value?[].concat((0,i.Z)(e),(0,i.Z)(t.value)):e}),[]).filter((function(e){return null!=e})));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()}]),n}(h.Z);function fe(e,t,r){var i,a=[];return(null!==(i=null===e||void 0===e?void 0:e.toArray())&&void 0!==i?i:[]).reverse().map((function e(i){var o=0===i.minScale||t<=i.minScale,u=0===i.maxScale||t>=i.maxScale;if(i.visible&&o&&u)if(i.sublayers)i.sublayers.forEach(e);else if(i.popupEnabled){var s=(0,se.V)(i,(0,n.Z)((0,n.Z)({},r),{},{defaultPopupTemplateEnabled:!1}));(0,x.pC)(s)&&a.unshift({sublayer:i,popupTemplate:s})}})),a}function ye(e){var t;return null!==(t=e.expressionInfos)&&void 0!==t&&t.length||Array.isArray(e.content)&&e.content.some((function(e){return"expression"===e.type}))?(0,oe.LC)():Promise.resolve()}function de(e,t){return he.apply(this,arguments)}function he(){return he=(0,s.Z)((0,u.Z)().mark((function e(t,r){var n,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(n=t.capabilities)||void 0===n||null===(i=n.operations)||void 0===i||!i.supportsQuery){e.next=2;break}return e.abrupt("return",!0);case 2:return e.prev=2,e.next=5,Promise.any(r.map((function(e){var t=e.sublayer;return t.load().then((function(){return t.capabilities.operations.supportsQuery}))})));case 5:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[2,8]])}))),he.apply(this,arguments)}function ve(e,t){return me.apply(this,arguments)}function me(){return me=(0,s.Z)((0,u.Z)().mark((function e(t,r){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.renderer,e.t0=n&&"defaultSymbol"in n&&!n.defaultSymbol,!e.t0){e.next=11;break}if(!n.valueExpression){e.next=9;break}return e.next=6,Promise.all(r.map((function(e){return n.getSymbolAsync(e).then((function(t){return t?e:null}))}))).then((function(e){return e.filter((function(e){return null!=e}))}));case 6:e.t1=e.sent,e.next=10;break;case 9:e.t1=r.filter((function(e){return null!=n.getSymbol(e)}));case 10:r=e.t1;case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)}))),me.apply(this,arguments)}(0,y._)([(0,_.Cb)({constructOnly:!0})],pe.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),(0,y._)([(0,_.Cb)({constructOnly:!0})],pe.prototype,"layerView",void 0),(0,y._)([(0,_.Cb)({constructOnly:!0})],pe.prototype,"highlightGraphics",void 0),(0,y._)([(0,_.Cb)({constructOnly:!0})],pe.prototype,"highlightGraphicUpdated",void 0),(0,y._)([(0,_.Cb)({constructOnly:!0})],pe.prototype,"updatingHandles",void 0),pe=(0,y._)([(0,F.j)("esri.views.layers.support.MapService")],pe)},24405:function(e,t,r){r.d(t,{V:function(){return c},e:function(){return s}});var n=r(74165),i=r(93433),a=r(15861),o=r(92026),u=r(80031);function s(e){return l.apply(this,arguments)}function l(){return l=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s,l,c,p,f,y,d,h,v,m=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=m.length>1&&void 0!==m[1]?m[1]:t.popupTemplate,!(0,o.Wi)(s)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,s.getRequiredFields(t.fieldsIndex);case 5:if(l=e.sent,c=s.lastEditInfoEnabled,p=t.objectIdField,f=t.typeIdField,y=t.globalIdField,d=t.relationships,!l.includes("*")){e.next=13;break}return e.abrupt("return",["*"]);case 13:if(!c){e.next=19;break}return e.next=16,(0,u.CH)(t);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0=[];case 20:return h=e.t0,v=(0,u.Q0)(t.fieldsIndex,[].concat((0,i.Z)(l),(0,i.Z)(h))),e.abrupt("return",(f&&v.push(f),v&&p&&null!==(r=t.fieldsIndex)&&void 0!==r&&r.has(p)&&!v.includes(p)&&v.push(p),v&&y&&null!==(a=t.fieldsIndex)&&void 0!==a&&a.has(y)&&!v.includes(y)&&v.push(y),d&&d.forEach((function(e){var r,n=e.keyField;v&&n&&(null===(r=t.fieldsIndex)||void 0===r?void 0:r.has(n))&&!v.includes(n)&&v.push(n)})),v));case 23:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function c(e,t){return e.popupTemplate?e.popupTemplate:(0,o.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,o.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},45008:function(e,t,r){r.d(t,{K:function(){return o}});r(59486);var n=r(92026),i=r(68860),a=r(53866);function o(e,t,r){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new a.Z,s=0;if("2d"===r.type)s=t*(null!==(o=r.resolution)&&void 0!==o?o:0);else if("3d"===r.type){var l=r.overlayPixelSizeInMapUnits(e),c=r.basemapSpatialReference;s=(0,n.pC)(c)&&!c.equals(r.spatialReference)?(0,i.c9)(c)/(0,i.c9)(r.spatialReference):t*l}var p=e.x-s,f=e.y-s,y=e.x+s,d=e.y+s,h=r.spatialReference;return u.xmin=Math.min(p,y),u.ymin=Math.min(f,d),u.xmax=Math.max(p,y),u.ymax=Math.max(f,d),u.spatialReference=h,u}new a.Z}}]);
//# sourceMappingURL=4517.931f431d.chunk.js.map