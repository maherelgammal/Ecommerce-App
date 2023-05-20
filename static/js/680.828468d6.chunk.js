"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[680],{6741:function(e,r,t){t.d(r,{O:function(){return w}});var i=t(37762),n=t(1413),a=t(74165),l=t(15861),o=t(15671),s=t(43144),u=t(60136),y=t(29388),d=t(27366),p=t(76200),c=t(66978),f=t(35995),v=t(49901),b=t(49861),h=(t(25243),t(63780),t(38511)),m=t(69912),g=t(53866),S=t(78952),I=t(45948),w=function(e){var r=function(e){(0,u.Z)(t,e);var r=(0,y.Z)(t);function t(){var e;return(0,o.Z)(this,t),(e=r.apply(this,arguments)).capabilities=void 0,e.copyright=null,e.fullExtent=null,e.legendEnabled=!0,e.spatialReference=null,e.version=void 0,e._allLayersAndTablesPromise=null,e._allLayersAndTablesMap=null,e}return(0,s.Z)(t,[{key:"readCapabilities",value:function(e,r){var t,i,n=r.capabilities&&r.capabilities.split(",").map((function(e){return e.toLowerCase().trim()}));if(!n)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};var a=this.type,l="tile"!==a&&!!r.supportsDynamicLayers,o=n.includes("query"),s=n.includes("map"),u=!!r.exportTilesAllowed,y=n.includes("tilemap"),d=n.includes("data"),p="tile"!==a&&(!r.tileInfo||l),c="tile"!==a&&(!r.tileInfo||l),f="tile"!==a,b=r.cimVersion&&v.G.parse(r.cimVersion),h=null!==(t=null===b||void 0===b?void 0:b.since(1,4))&&void 0!==t&&t,m=null!==(i=null===b||void 0===b?void 0:b.since(2,0))&&void 0!==i&&i;return{operations:{supportsExportMap:s,supportsExportTiles:u,supportsIdentify:o,supportsQuery:d,supportsTileMap:y},exportMap:s?{supportsArcadeExpressionForLabeling:h,supportsSublayersChanges:f,supportsDynamicLayers:l,supportsSublayerVisibility:p,supportsSublayerDefinitionExpression:c,supportsCIMSymbols:m}:null,exportTiles:u?{maxExportTilesCount:+r.maxExportTilesCount}:null}}},{key:"readVersion",value:function(e,r){var t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t}},{key:"fetchSublayerInfo",value:function(){var e=(0,l.Z)((0,a.Z)().mark((function e(r,t){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetchAllLayersAndTables(t);case 3:return e.abrupt("return",null===(i=this._allLayersAndTablesMap)||void 0===i?void 0:i.get(r));case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return");case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(r,t){return e.apply(this,arguments)}}()},{key:"fetchAllLayersAndTables",value:function(){var e=(0,l.Z)((0,a.Z)().mark((function e(r){var t,l=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load(r);case 2:return this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=(0,p.default)((0,f.mN)(this.url).path+"/layers",{responseType:"json",query:(0,n.Z)((0,n.Z)({f:"json"},this.customParameters),{},{token:this.apiKey})}).then((function(e){l._allLayersAndTablesMap=new Map;var r,t=(0,i.Z)(e.data.layers);try{for(t.s();!(r=t.n()).done;){var n=r.value;l._allLayersAndTablesMap.set(n.id,n)}}catch(a){t.e(a)}finally{t.f()}return{result:e.data}}),(function(e){return{error:e}}))),e.next=5,this._allLayersAndTablesPromise;case 5:if(t=e.sent,(0,c.k_)(r),!("result"in t)){e.next=8;break}return e.abrupt("return",t.result);case 8:throw t.error;case 9:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()}]),t}(e);return(0,d._)([(0,b.Cb)({readOnly:!0})],r.prototype,"capabilities",void 0),(0,d._)([(0,h.r)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),(0,d._)([(0,b.Cb)({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),(0,d._)([(0,b.Cb)({type:g.Z})],r.prototype,"fullExtent",void 0),(0,d._)([(0,b.Cb)(I.id)],r.prototype,"id",void 0),(0,d._)([(0,b.Cb)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),(0,d._)([(0,b.Cb)(I.C_)],r.prototype,"popupEnabled",void 0),(0,d._)([(0,b.Cb)({type:S.Z})],r.prototype,"spatialReference",void 0),(0,d._)([(0,b.Cb)({readOnly:!0})],r.prototype,"version",void 0),(0,d._)([(0,h.r)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=(0,d._)([(0,m.j)("esri.layers.mixins.ArcGISMapService")],r)}},18870:function(e,r,t){t.d(r,{x:function(){return k}});var i=t(37762),n=t(4942),a=t(15671),l=t(43144),o=t(11752),s=t(61120),u=t(60136),y=t(29388),d=t(27366),p=t(40281),c=t(77178),f=t(10064),v=t(32718),b=t(94172),h=t(49861),m=(t(25243),t(63780),t(23879)),g=t(69912),S=t(25265),I=t(77990),w=t(58132),_=v.Z.getLogger("esri.layers.TileLayer");var x=p.Z.ofType(I.Z);function E(e,r){e&&e.forEach((function(e){r(e),e.sublayers&&e.sublayers.length&&E(e.sublayers,r)}))}var k=function(e){var r=function(e){(0,u.Z)(t,e);var r=(0,y.Z)(t);function t(){var e,i;(0,a.Z)(this,t);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return(i=r.call.apply(r,[this].concat(o))).allSublayers=new c.Z({getCollections:function(){return[i.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),i.sublayersSourceJSON=(e={},(0,n.Z)(e,S.s3.SERVICE,{}),(0,n.Z)(e,S.s3.PORTAL_ITEM,{}),(0,n.Z)(e,S.s3.WEB_SCENE,{}),(0,n.Z)(e,S.s3.WEB_MAP,{}),e),i.addHandles((0,b.YP)((function(){return i.sublayers}),(function(e,r){return i._handleSublayersChange(e,r)}),b.Z_)),i}return(0,l.Z)(t,[{key:"readSublayers",value:function(e,r){if(r&&e){var t=this.sublayersSourceJSON,i=(0,S.M9)(r.origin);if(!(i<S.s3.SERVICE)&&(t[i]={context:r,visibleLayers:e.visibleLayers||t[i].visibleLayers,layers:e.layers||t[i].layers},!(i>S.s3.SERVICE))){this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);var n=this.createSublayersForOrigin("web-document"),a=n.sublayers,l=n.origin,o=(0,m.vw)(this);o.setDefaultOrigin(l),this._set("sublayers",new x(a)),o.setDefaultOrigin("user")}}}},{key:"findSublayerById",value:function(e){return this.allSublayers.find((function(r){return r.id===e}))}},{key:"createServiceSublayers",value:function(){return this.createSublayersForOrigin("service").sublayers}},{key:"createSublayersForOrigin",value:function(e){var r,t,n=(0,S.M9)("web-document"===e?"web-map":e),a=S.s3.SERVICE,l=this.sublayersSourceJSON[S.s3.SERVICE].layers,o=this.sublayersSourceJSON[S.s3.SERVICE].context,s=null,u=[S.s3.PORTAL_ITEM,S.s3.WEB_SCENE,S.s3.WEB_MAP].filter((function(e){return e<=n})),y=(0,i.Z)(u);try{for(y.s();!(t=y.n()).done;){var d=t.value,p=this.sublayersSourceJSON[d];(0,w.ac)(p.layers)&&(a=d,l=p.layers,o=p.context,p.visibleLayers&&(s={visibleLayers:p.visibleLayers,context:p.context}))}}catch(M){y.e(M)}finally{y.f()}var c,f=[S.s3.PORTAL_ITEM,S.s3.WEB_SCENE,S.s3.WEB_MAP].filter((function(e){return e>a&&e<=n})),v=null,b=(0,i.Z)(f);try{for(b.s();!(c=b.n()).done;){var h=c.value,m=this.sublayersSourceJSON[h],g=m.layers,_=m.visibleLayers,k=m.context;g&&(v={layers:g,context:k}),_&&(s={visibleLayers:_,context:k})}}catch(M){b.e(M)}finally{b.f()}var L=function(e,r){var t=[],i={};return e?(e.forEach((function(e){var n=new I.Z;if(n.read(e,r),i[n.id]=n,null!=e.parentLayerId&&-1!==e.parentLayerId){var a=i[e.parentLayerId];a.sublayers||(a.sublayers=[]),a.sublayers.unshift(n)}else t.unshift(n)})),t):t}(l,o),Z=new Map,C=new Set;if(v){var O,T=(0,i.Z)(v.layers);try{for(T.s();!(O=T.n()).done;){var D=O.value;Z.set(D.id,D)}}catch(M){T.e(M)}finally{T.f()}}if(null!==(r=s)&&void 0!==r&&r.visibleLayers){var P,A=(0,i.Z)(s.visibleLayers);try{for(A.s();!(P=A.n()).done;){var F=P.value;C.add(F)}}catch(M){A.e(M)}finally{A.f()}}return E(L,(function(e){v&&e.read(Z.get(e.id),v.context),s&&e.read({defaultVisibility:C.has(e.id)},s.context)})),{origin:(0,S.x3)(a),sublayers:new x({items:L})}}},{key:"read",value:function(e,r){(0,o.Z)((0,s.Z)(t.prototype),"read",this).call(this,e,r),this.readSublayers(e,r)}},{key:"_handleSublayersChange",value:function(e,r){var t=this;r&&(r.forEach((function(e){e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((function(e){e.parent=t,e.layer=t})),this.handles.add([e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t})),e.on("after-remove",(function(e){var r=e.item;r.parent=null,r.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(function(e){_.error(new f.Z("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:t})),e.preventDefault()})),"sublayers-owner"))}}]),t}(e);return(0,d._)([(0,h.Cb)({readOnly:!0})],r.prototype,"allSublayers",void 0),(0,d._)([(0,h.Cb)({readOnly:!0,type:p.Z.ofType(I.Z)})],r.prototype,"serviceSublayers",void 0),(0,d._)([(0,h.Cb)({value:null,type:x,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),(0,d._)([(0,h.Cb)({readOnly:!0})],r.prototype,"sublayersSourceJSON",void 0),r=(0,d._)([(0,g.j)("esri.layers.mixins.SublayersOwner")],r),r}},77990:function(e,r,t){t.d(r,{Z:function(){return le}});var i,n=t(37762),a=t(74165),l=t(1413),o=t(15861),s=t(15671),u=t(43144),y=t(60136),d=t(29388),p=t(27366),c=(t(59486),t(44055)),f=(t(94931),t(78451),t(98689),t(57823),t(32066),t(49018),t(34999),t(28189),t(9014),t(40464)),v=t(76200),b=t(51508),h=t(40281),m=t(10064),g=t(41691),S=t(93169),I=t(79056),w=t(84652),_=t(54472),x=t(32718),E=t(92026),k=t(97642),L=t(76672),Z=t(35995),C=t(49861),O=t(89125),T=t(38511),D=t(69912),P=t(31201),A=t(25243),F=t(25265),M=t(23879),j=t(27676),V=t(87165),N=t(83040),R=t(52410),q=t(77748),U=t(85116),B=t(71065),J=t(94582),Q=t(64020),G=t(23505),W=t(99837),z=t(86638),K=t(81085),H=t(53866),X=t(27823);function Y(e){return null!=e&&"esriSMS"===e.type}function $(e,r,t){var i,n=this.originIdOf(r)>=(0,F.M9)(t.origin);return{ignoreOrigin:!0,allowNull:n,enabled:!!t&&"map-image"===(null===(i=t.layer)||void 0===i?void 0:i.type)&&(t.writeSublayerStructure||n)}}function ee(e,r,t){var i;return{enabled:!!t&&"tile"===(null===(i=t.layer)||void 0===i?void 0:i.type)&&this._isOverridden(r)}}function re(e,r,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function te(e,r,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(r)>=(0,F.M9)(t.origin))}}var ie=0,ne=new Set;ne.add("layer"),ne.add("parent"),ne.add("loaded"),ne.add("loadStatus"),ne.add("loadError"),ne.add("loadWarnings");var ae=i=function(e){(0,y.Z)(p,e);var r=(0,d.Z)(p);function p(e){var t;return(0,s.Z)(this,p),(t=r.call(this,e)).capabilities=void 0,t.fields=null,t.fullExtent=null,t.geometryType=null,t.globalIdField=null,t.legendEnabled=!0,t.objectIdField=null,t.popupEnabled=!0,t.popupTemplate=null,t.sourceJSON=null,t.title=null,t.typeIdField=null,t.types=null,t._lastParsedUrl=null,t}return(0,u.Z)(p,[{key:"load",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.addResolvingPromise((0,o.Z)((0,a.Z)().mark((function e(){var i,n,o,s,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.layer,n=t.source,o=t.url,i||o){e.next=3;break}throw new m.Z("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:t});case 3:if(s=null,i&&!(t.originIdOf("url")>F.s3.SERVICE)&&"data-layer"!==(null===n||void 0===n?void 0:n.type)){e.next=10;break}return e.next=7,(0,v.default)(o,(0,l.Z)({responseType:"json",query:{f:"json"}},r));case 7:s=e.sent.data,e.next=15;break;case 10:return u=t.id,"map-layer"===(null===n||void 0===n?void 0:n.type)&&(u=n.mapLayerId),e.next=14,i.fetchSublayerInfo(u,r);case 14:s=e.sent;case 15:s&&(t.sourceJSON=s,t.read({layerDefinition:s},{origin:"service"}));case 16:case"end":return e.stop()}}),e)})))()),this));case 1:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()},{key:"readCapabilities",value:function(e,r){r=r.layerDefinition||r;var t=(0,J.h)(r,this.url),i=t.operations,n=i.supportsQuery,a=i.supportsQueryAttachments,l=t.query.supportsFormatPBF,o=t.data.supportsAttachment;return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:n,supportsQueryAttachments:a},data:{supportsAttachment:o},query:{supportsFormatPBF:l}}}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"definitionExpression",set:function(e){this._setAndNotifyLayer("definitionExpression",e)}},{key:"fieldsIndex",get:function(){return new R.Z(this.fields||[])}},{key:"floorInfo",set:function(e){this._setAndNotifyLayer("floorInfo",e)}},{key:"readGlobalIdFieldFromService",value:function(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields){var t,i=(0,n.Z)(r.fields);try{for(i.s();!(t=i.n()).done;){var a=t.value;if("esriFieldTypeGlobalID"===a.type)return a.name}}catch(l){i.e(l)}finally{i.f()}}}},{key:"id",get:function(){var e=this._get("id");return null!==e&&void 0!==e?e:ie++},set:function(e){var r,t,i;this._get("id")!==e&&(!1!==(null===(r=this.layer)||void 0===r||null===(t=r.capabilities)||void 0===t||null===(i=t.exportMap)||void 0===i?void 0:i.supportsDynamicLayers)?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}},{key:"labelingInfo",set:function(e){this._setAndNotifyLayer("labelingInfo",e)}},{key:"writeLabelingInfo",value:function(e,r,t,i){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((function(e){return e.write({},i)}))}})}},{key:"labelsVisible",set:function(e){this._setAndNotifyLayer("labelsVisible",e)}},{key:"layer",set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(r){return r.layer=e}))}},{key:"listMode",set:function(e){this._set("listMode",e)}},{key:"minScale",set:function(e){this._setAndNotifyLayer("minScale",e)}},{key:"readMinScale",value:function(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}},{key:"maxScale",set:function(e){this._setAndNotifyLayer("maxScale",e)}},{key:"readMaxScale",value:function(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}},{key:"effectiveScaleRange",get:function(){return{minScale:this.minScale,maxScale:this.maxScale}}},{key:"readObjectIdFieldFromService",value:function(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields){var t,i=(0,n.Z)(r.fields);try{for(i.s();!(t=i.n()).done;){var a=t.value;if("esriFieldTypeOID"===a.type)return a.name}}catch(l){i.e(l)}finally{i.f()}}}},{key:"opacity",set:function(e){this._setAndNotifyLayer("opacity",e)}},{key:"readOpacity",value:function(e,r){var t,i,n=r.layerDefinition;return 1-.01*(null!==(t=null!=(null===n||void 0===n?void 0:n.transparency)?n.transparency:null===n||void 0===n||null===(i=n.drawingInfo)||void 0===i?void 0:i.transparency)&&void 0!==t?t:0)}},{key:"writeOpacity",value:function(e,r,t,i){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}},{key:"writeParent",value:function(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=(0,A.vU)(this.parent.id):r.parentLayerId=-1}},{key:"queryTask",get:function(){var e,r;if(!this.layer)return null;var t=this.layer.spatialReference,i="gdbVersion"in this.layer?this.layer.gdbVersion:void 0,n=this.capabilities,a=this.fieldsIndex,l=(0,S.Z)("featurelayer-pbf")&&(null===n||void 0===n?void 0:n.query.supportsFormatPBF),o=null!==(e=null===n||void 0===n||null===(r=n.operations)||void 0===r?void 0:r.supportsQueryAttachments)&&void 0!==e&&e;return new j.Z({url:this.url,pbfSupported:l,fieldsIndex:a,gdbVersion:i,sourceSpatialReference:t,queryAttachmentsSupported:o})}},{key:"renderer",set:function(e){if(e){var r,t=(0,n.Z)(e.getSymbols());try{for(t.s();!(r=t.n()).done;){var i=r.value;if((0,b.dU)(i)){x.Z.getLogger(this.declaredClass).warn("Sublayer renderer should use 2D symbols");break}}}catch(a){t.e(a)}finally{t.f()}}this._setAndNotifyLayer("renderer",e)}},{key:"source",get:function(){return this._get("source")||new G.R({mapLayerId:this.id})},set:function(e){this._setAndNotifyLayer("source",e)}},{key:"sublayers",set:function(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}},{key:"castSublayers",value:function(e){return(0,A.se)(h.Z.ofType(i),e)}},{key:"writeSublayers",value:function(e,r,t){var i;(null===(i=this.sublayers)||void 0===i?void 0:i.length)&&(r[t]=this.sublayers.map((function(e){return e.id})).toArray().reverse())}},{key:"readTypeIdField",value:function(e,r){var t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();var i=r.fields.find((function(e){return e.name.toLowerCase()===t}));i&&(t=i.name)}return t}},{key:"url",get:function(){var e,r,t=null!==(e=null===(r=this.layer)||void 0===r?void 0:r.parsedUrl)&&void 0!==e?e:this._lastParsedUrl,i=this.source;if(!t)return null;if(this._lastParsedUrl=t,"map-layer"===(null===i||void 0===i?void 0:i.type))return"".concat(t.path,"/").concat(i.mapLayerId);var n={layer:JSON.stringify({source:this.source})};return"".concat(t.path,"/dynamicLayer?").concat((0,Z.B7)(n))},set:function(e){this._overrideIfSome("url",e)}},{key:"visible",set:function(e){this._setAndNotifyLayer("visible",e)}},{key:"writeVisible",value:function(e,r,t,i){r[t]=this.getAtOrigin("defaultVisibility","service")||e}},{key:"clone",value:function(){var e=(0,M.vw)(this).store,r=new i;return(0,M.vw)(r).store=e.clone(ne),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}},{key:"createPopupTemplate",value:function(e){return(0,K.eZ)(this,e)}},{key:"createQuery",value:function(){return new z.Z({returnGeometry:!0,where:this.definitionExpression||"1=1"})}},{key:"createFeatureLayer",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var r,i,n,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.hasOwnProperty("sublayers")){e.next=2;break}return e.abrupt("return",null);case 2:return i=this.layer,n=null===i||void 0===i?void 0:i.parsedUrl,e.next=7,Promise.resolve().then(t.bind(t,64326));case 7:return e.t0=e.sent.default,e.t1={url:null===n||void 0===n?void 0:n.path},l=new e.t0(e.t1),e.abrupt("return",(n&&this.source&&("map-layer"===this.source.type?l.layerId=this.source.mapLayerId:l.dynamicDataSource=this.source),null!=(null===i||void 0===i?void 0:i.refreshInterval)&&(l.refreshInterval=i.refreshInterval),this.definitionExpression&&(l.definitionExpression=this.definitionExpression),this.floorInfo&&(l.floorInfo=(0,w.d9)(this.floorInfo)),this.originIdOf("labelingInfo")>F.s3.SERVICE&&(l.labelingInfo=(0,w.d9)(this.labelingInfo)),this.originIdOf("labelsVisible")>F.s3.DEFAULTS&&(l.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>F.s3.DEFAULTS&&(l.legendEnabled=this.legendEnabled),this.originIdOf("visible")>F.s3.DEFAULTS&&(l.visible=this.visible),this.originIdOf("minScale")>F.s3.DEFAULTS&&(l.minScale=this.minScale),this.originIdOf("maxScale")>F.s3.DEFAULTS&&(l.maxScale=this.maxScale),this.originIdOf("opacity")>F.s3.DEFAULTS&&(l.opacity=this.opacity),this.originIdOf("popupTemplate")>F.s3.DEFAULTS&&(l.popupTemplate=(0,w.d9)(this.popupTemplate)),this.originIdOf("renderer")>F.s3.SERVICE&&(l.renderer=(0,w.d9)(this.renderer)),"data-layer"===(null===(r=this.source)||void 0===r?void 0:r.type)&&(l.dynamicDataSource=this.source.clone()),this.originIdOf("title")>F.s3.DEFAULTS&&(l.title=this.title),"map-image"===(null===i||void 0===i?void 0:i.type)&&i.originIdOf("customParameters")>F.s3.DEFAULTS&&(l.customParameters=i.customParameters),"tile"===(null===i||void 0===i?void 0:i.type)&&i.originIdOf("customParameters")>F.s3.DEFAULTS&&(l.customParameters=i.customParameters),l));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFeatureType",value:function(e){var r=this.typeIdField,t=this.types;if(!r||!e)return null;var i=e.attributes?e.attributes[r]:void 0;if(null==i)return null;var n=null;return null!==t&&void 0!==t&&t.some((function(e){var r=e.id;return null!=r&&(r.toString()===i.toString()&&(n=e),!!n)})),n}},{key:"getFieldDomain",value:function(e,r){var t=r&&r.feature,i=this.getFeatureType(t);if(i){var n=i.domains&&i.domains[e];if(n&&"inherited"!==n.type)return n}return this._getLayerDomain(e)}},{key:"queryAttachments",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r,t){var i,n,l,o,s,u,y,d,p,c,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(r=W.Z.from(r),null!==(l=this.capabilities)&&void 0!==l&&null!==(i=l.data)&&void 0!==i&&i.supportsAttachment){e.next=6;break}throw new m.Z("queryAttachments:not-supported","this layer doesn't support attachments");case 6:if(s=(o=r).attachmentTypes,u=o.objectIds,y=o.globalIds,d=o.num,p=o.size,c=o.start,f=o.where,null!==l&&void 0!==l&&null!==(n=l.operations)&&void 0!==n&&n.supportsQueryAttachments){e.next=10;break}if(!((null===s||void 0===s?void 0:s.length)>0||(null===y||void 0===y?void 0:y.length)>0||(null===p||void 0===p?void 0:p.length)>0||d||c||f)){e.next=10;break}throw new m.Z("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",r);case 10:if(null!==u&&void 0!==u&&u.length||null!==y&&void 0!==y&&y.length||f){e.next=12;break}throw new m.Z("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",r);case 12:return e.abrupt("return",this.queryTask.executeAttachmentQuery(r,t));case 13:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var r,t,i,o,s,u,y,d=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>0&&void 0!==d[0]?d[0]:this.createQuery(),o=d.length>1?d[1]:void 0,e.next=4,this.load();case 4:if(this.capabilities.operations.supportsQuery){e.next=6;break}throw new m.Z("queryFeatures:not-supported","this layer doesn't support queries.");case 6:if(this.url){e.next=8;break}throw new m.Z("queryFeatures:not-supported","this layer has no url.");case 8:return e.next=10,this.queryTask.execute(i,(0,l.Z)((0,l.Z)({},o),{},{query:(0,l.Z)((0,l.Z)({},null===(r=this.layer)||void 0===r?void 0:r.customParameters),{},{token:null===(t=this.layer)||void 0===t?void 0:t.apiKey})}));case 10:if(null!==(s=e.sent)&&void 0!==s&&s.features){u=(0,n.Z)(s.features);try{for(u.s();!(y=u.n()).done;)y.value.sourceLayer=this}catch(a){u.e(a)}finally{u.f()}}return e.abrupt("return",s);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toExportImageJSON",value:function(e){var r,t=this,i={id:this.id,source:(null===(r=this.source)||void 0===r?void 0:r.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},n=(0,L._)(e,this.definitionExpression);(0,E.pC)(n)&&(i.definitionExpression=n);var a=["renderer","labelingInfo","opacity","labelsVisible"].reduce((function(e,r){return e[r]=t.originIdOf(r),e}),{}),l=Object.keys(a).some((function(e){return a[e]>F.s3.SERVICE}));if(l){var o=i.drawingInfo={};if(a.renderer>F.s3.SERVICE&&(o.renderer=this.renderer?this.renderer.toJSON():null),a.labelsVisible>F.s3.SERVICE&&(o.showLabels=this.labelsVisible),this.labelsVisible&&a.labelingInfo>F.s3.SERVICE){!this.loaded&&this.labelingInfo.some((function(e){return!e.labelPlacement}))&&x.Z.getLogger(this.declaredClass).warnOnce("A Sublayer (title: ".concat(this.title,", id: ").concat(this.id,") has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type."),{sublayer:this});var s=this.labelingInfo;(0,E.pC)(this.geometryType)&&(s=(0,U.a)(this.labelingInfo,X.M.toJSON(this.geometryType))),o.labelingInfo=s.filter((function(e){return e.labelPlacement})).map((function(e){return e.toJSON({origin:"service",layer:t.layer})})),o.showLabels=!0}a.opacity>F.s3.SERVICE&&(o.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(o.renderer)}return i}},{key:"_assignDefaultSymbolColors",value:function(e){this._forEachSimpleMarkerSymbols(e,(function(e){e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}},{key:"_forEachSimpleMarkerSymbols",value:function(e,r){if(e){var t,i,a=null!==(t="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)&&void 0!==t?t:[],l=(0,n.Z)(a);try{for(l.s();!(i=l.n()).done;){var o=i.value;Y(o.symbol)&&r(o.symbol)}}catch(s){l.e(s)}finally{l.f()}"symbol"in e&&Y(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&Y(e.defaultSymbol)&&r(e.defaultSymbol)}}},{key:"_setAndNotifyLayer",value:function(e,r){var t,i,n=this.layer,a=this._get(e);switch(e){case"definitionExpression":case"floorInfo":t="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":t="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":t="supportsDynamicLayers",i="supportsModification"}var l=(0,M.vw)(this).getDefaultOrigin();if("service"!==l){var o,s,u,y;if(t&&!1===(null===(o=this.layer)||void 0===o||null===(s=o.capabilities)||void 0===s||null===(u=s.exportMap)||void 0===u?void 0:u[t]))return void this._logLockedError(e,"capability not available 'layer.capabilities.exportMap.".concat(t,"'"));if(i&&!1===(null===(y=this.capabilities)||void 0===y?void 0:y.exportMap[i]))return void this._logLockedError(e,"capability not available 'capabilities.exportMap.".concat(i,"'"))}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==l&&a!==r&&n&&n.emit&&n.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}},{key:"_handleSublayersChange",value:function(e,r){var t=this;r&&(r.forEach((function(e){e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this.handles.add([e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var r=e.item;r.parent=null,r.layer=null})),e.on("before-changes",(function(e){var r,i,n,a=null===(r=t.layer)||void 0===r||null===(i=r.capabilities)||void 0===i||null===(n=i.exportMap)||void 0===n?void 0:n.supportsSublayersChanges;null==a||a||(x.Z.getLogger(t.declaredClass).error(new m.Z("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:t,layer:t.layer})),e.preventDefault())}))]))}},{key:"_logLockedError",value:function(e,r){var t=this.layer,i=this.declaredClass;x.Z.getLogger(i).error(new m.Z("sublayer:locked","Property '".concat(String(e),"' can't be changed on Sublayer from the layer '").concat(null===t||void 0===t?void 0:t.id,"'"),{reason:r,sublayer:this,layer:t}))}},{key:"_getLayerDomain",value:function(e){var r=this.fieldsIndex.get(e);return r?r.domain:null}}]),p}((0,g.p)((0,k.R)((0,I.IG)(_.Z))));ae.test={isMapImageLayerOverridePolicy:function(e){return e===re||e===$},isTileImageLayerOverridePolicy:function(e){return e===ee}},(0,p._)([(0,C.Cb)({readOnly:!0})],ae.prototype,"capabilities",void 0),(0,p._)([(0,T.r)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],ae.prototype,"readCapabilities",null),(0,p._)([(0,C.Cb)()],ae.prototype,"defaultPopupTemplate",null),(0,p._)([(0,C.Cb)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:$}}})],ae.prototype,"definitionExpression",null),(0,p._)([(0,C.Cb)({type:[N.Z],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],ae.prototype,"fields",void 0),(0,p._)([(0,C.Cb)({readOnly:!0})],ae.prototype,"fieldsIndex",null),(0,p._)([(0,C.Cb)({type:B.Z,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:$},origins:{"web-scene":{read:!1,write:!1}}}})],ae.prototype,"floorInfo",null),(0,p._)([(0,C.Cb)({type:H.Z,json:{read:{source:"layerDefinition.extent"}}})],ae.prototype,"fullExtent",void 0),(0,p._)([(0,C.Cb)({type:X.M.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:X.M.read}}}}})],ae.prototype,"geometryType",void 0),(0,p._)([(0,C.Cb)({type:String})],ae.prototype,"globalIdField",void 0),(0,p._)([(0,T.r)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],ae.prototype,"readGlobalIdFieldFromService",null),(0,p._)([(0,C.Cb)({type:A.z8,json:{write:{ignoreOrigin:!0}}})],ae.prototype,"id",null),(0,p._)([(0,C.Cb)({value:null,type:[q.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:re}}})],ae.prototype,"labelingInfo",null),(0,p._)([(0,P.c)("labelingInfo")],ae.prototype,"writeLabelingInfo",null),(0,p._)([(0,C.Cb)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:re}}})],ae.prototype,"labelsVisible",null),(0,p._)([(0,C.Cb)({value:null})],ae.prototype,"layer",null),(0,p._)([(0,C.Cb)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:te}}})],ae.prototype,"legendEnabled",void 0),(0,p._)([(0,C.Cb)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],ae.prototype,"listMode",null),(0,p._)([(0,C.Cb)({type:Number,value:0,json:{write:{overridePolicy:re}}})],ae.prototype,"minScale",null),(0,p._)([(0,T.r)("minScale",["minScale","layerDefinition.minScale"])],ae.prototype,"readMinScale",null),(0,p._)([(0,C.Cb)({type:Number,value:0,json:{write:{overridePolicy:re}}})],ae.prototype,"maxScale",null),(0,p._)([(0,T.r)("maxScale",["maxScale","layerDefinition.maxScale"])],ae.prototype,"readMaxScale",null),(0,p._)([(0,C.Cb)({readOnly:!0})],ae.prototype,"effectiveScaleRange",null),(0,p._)([(0,C.Cb)({type:String})],ae.prototype,"objectIdField",void 0),(0,p._)([(0,T.r)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],ae.prototype,"readObjectIdFieldFromService",null),(0,p._)([(0,C.Cb)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:re}}})],ae.prototype,"opacity",null),(0,p._)([(0,T.r)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],ae.prototype,"readOpacity",null),(0,p._)([(0,P.c)("opacity")],ae.prototype,"writeOpacity",null),(0,p._)([(0,C.Cb)({json:{type:A.z8,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:re}}})],ae.prototype,"parent",void 0),(0,p._)([(0,P.c)("parent")],ae.prototype,"writeParent",null),(0,p._)([(0,C.Cb)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",overridePolicy:te,writer:function(e,r,t){r[t]=!e}}}})],ae.prototype,"popupEnabled",void 0),(0,p._)([(0,C.Cb)({type:c.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:te}}})],ae.prototype,"popupTemplate",void 0),(0,p._)([(0,C.Cb)({readOnly:!0})],ae.prototype,"queryTask",null),(0,p._)([(0,C.Cb)({types:f.A,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:re},origins:{"web-scene":{types:f.o,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:re}}}}})],ae.prototype,"renderer",null),(0,p._)([(0,C.Cb)({types:{key:"type",base:null,typeMap:{"data-layer":Q.n,"map-layer":G.R}},cast:function(e){if(e){if("mapLayerId"in e)return(0,A.TJ)(G.R,e);if("dataSource"in e)return(0,A.TJ)(Q.n,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:re}}})],ae.prototype,"source",null),(0,p._)([(0,C.Cb)()],ae.prototype,"sourceJSON",void 0),(0,p._)([(0,C.Cb)({value:null,json:{type:[A.z8],write:{target:"subLayerIds",allowNull:!0,overridePolicy:re}}})],ae.prototype,"sublayers",null),(0,p._)([(0,O.p)("sublayers")],ae.prototype,"castSublayers",null),(0,p._)([(0,P.c)("sublayers")],ae.prototype,"writeSublayers",null),(0,p._)([(0,C.Cb)({type:String,json:{name:"name",write:{overridePolicy:te}}})],ae.prototype,"title",void 0),(0,p._)([(0,C.Cb)({type:String})],ae.prototype,"typeIdField",void 0),(0,p._)([(0,T.r)("typeIdField",["layerDefinition.typeIdField"])],ae.prototype,"readTypeIdField",null),(0,p._)([(0,C.Cb)({type:[V.Z],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],ae.prototype,"types",void 0),(0,p._)([(0,C.Cb)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:ee}}})],ae.prototype,"url",null),(0,p._)([(0,C.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:re}}})],ae.prototype,"visible",null),(0,p._)([(0,P.c)("visible")],ae.prototype,"writeVisible",null);var le=ae=i=(0,p._)([(0,D.j)("esri.layers.support.Sublayer")],ae)},83690:function(e,r,t){t.d(r,{g:function(){return l}});var i=t(74165),n=t(15861),a=t(10064);function l(e,r){return o.apply(this,arguments)}function o(){return o=(0,n.Z)((0,i.Z)().mark((function e(r,t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(r);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new a.Z("request:server","Unable to load ".concat(t),{url:t,error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),o.apply(this,arguments)}}}]);
//# sourceMappingURL=680.828468d6.chunk.js.map