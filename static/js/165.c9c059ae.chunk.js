"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[165],{60165:function(e,t,r){r.r(t),r.d(t,{default:function(){return L}});var n,a=r(74165),i=r(15861),o=r(15671),l=r(43144),s=r(60136),u=r(29388),c=r(27366),p=(r(59486),r(76200)),d=r(10064),y=r(43404),g=r(92026),h=r(97642),v=r(49861),b=(r(25243),r(63780),r(69912)),f=r(78952),w=r(1413),Z=r(53866),m=r(65156),M=r(30651),k=r(6693),_=r(71684),C=r(56811),T=r(83690),x=r(22824),S=new(r(87960).f)("0/0/0",0,0,0,void 0),U=n=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(){var e;return(0,o.Z)(this,r),(e=t.apply(this,arguments)).tileInfo=x.Z.create({spatialReference:f.Z.WebMercator,size:256}),e.type="base-tile",e.fullExtent=new Z.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,f.Z.WebMercator),e.spatialReference=f.Z.WebMercator,e}return(0,l.Z)(r,[{key:"getTileBounds",value:function(e,t,r,n){var a=n||(0,m.Ue)();return S.level=e,S.row=t,S.col=r,S.extent=a,this.tileInfo.updateTileInfo(S),S.extent=void 0,a}},{key:"fetchTile",value:function(e,t,r){var n=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).signal,a=this.getTileUrl(e,t,r),i={responseType:"image",signal:n,query:(0,w.Z)({},this.refreshParameters)};return(0,p.default)(null!==a&&void 0!==a?a:"",i).then((function(e){return e.data}))}},{key:"fetchImageBitmapTile",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,r,i){var o,l,s,u,c,y,g,h,v=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=(l=v.length>3&&void 0!==v[3]?v[3]:{}).signal,this.fetchTile===n.prototype.fetchTile){e.next=13;break}return e.next=5,this.fetchTile(t,r,i,l);case 5:return u=e.sent,e.prev=6,e.abrupt("return",createImageBitmap(u));case 10:throw e.prev=10,e.t0=e.catch(6),new d.Z("request:server","Unable to load tile ".concat(t,"/").concat(r,"/").concat(i),{error:e.t0,level:t,row:r,col:i});case 13:return c=null!==(o=this.getTileUrl(t,r,i))&&void 0!==o?o:"",y={responseType:"blob",signal:s,query:(0,w.Z)({},this.refreshParameters)},e.next=17,(0,p.default)(c,y);case 17:return g=e.sent,h=g.data,e.abrupt("return",(0,T.g)(h,c));case 20:case"end":return e.stop()}}),e,this,[[6,10]])})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"getTileUrl",value:function(){throw new d.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}}]),r}((0,k.h)((0,C.M)((0,_.Q)(M.Z))));(0,c._)([(0,v.Cb)({type:x.Z})],U.prototype,"tileInfo",void 0),(0,c._)([(0,v.Cb)({type:["show","hide"]})],U.prototype,"listMode",void 0),(0,c._)([(0,v.Cb)({readOnly:!0,value:"base-tile"})],U.prototype,"type",void 0),(0,c._)([(0,v.Cb)({nonNullable:!0})],U.prototype,"fullExtent",void 0),(0,c._)([(0,v.Cb)()],U.prototype,"spatialReference",void 0);var j=U=n=(0,c._)([(0,b.j)("esri.layers.BaseTileLayer")],U),B=r(6061),R=r(59068),P=r(585),I=new y.X({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),q=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).type="bing-maps",n.tileInfo=new x.Z({size:[256,256],dpi:96,origin:new P.Z({x:-20037508.342787,y:20037508.342787,spatialReference:f.Z.WebMercator}),spatialReference:f.Z.WebMercator,lods:[new R.Z({level:1,resolution:78271.5169639999,scale:295828763.795777}),new R.Z({level:2,resolution:39135.7584820001,scale:147914381.897889}),new R.Z({level:3,resolution:19567.8792409999,scale:73957190.948944}),new R.Z({level:4,resolution:9783.93962049996,scale:36978595.474472}),new R.Z({level:5,resolution:4891.96981024998,scale:18489297.737236}),new R.Z({level:6,resolution:2445.98490512499,scale:9244648.868618}),new R.Z({level:7,resolution:1222.99245256249,scale:4622324.434309}),new R.Z({level:8,resolution:611.49622628138,scale:2311162.217155}),new R.Z({level:9,resolution:305.748113140558,scale:1155581.108577}),new R.Z({level:10,resolution:152.874056570411,scale:577790.554289}),new R.Z({level:11,resolution:76.4370282850732,scale:288895.277144}),new R.Z({level:12,resolution:38.2185141425366,scale:144447.638572}),new R.Z({level:13,resolution:19.1092570712683,scale:72223.819286}),new R.Z({level:14,resolution:9.55462853563415,scale:36111.909643}),new R.Z({level:15,resolution:4.77731426794937,scale:18055.954822}),new R.Z({level:16,resolution:2.38865713397468,scale:9027.977411}),new R.Z({level:17,resolution:1.19432856685505,scale:4513.988705}),new R.Z({level:18,resolution:.597164283559817,scale:2256.994353}),new R.Z({level:19,resolution:.298582141647617,scale:1128.497176}),new R.Z({level:20,resolution:.1492910708238085,scale:564.248588})]}),n.key=null,n.style="road",n.culture="en-US",n.region=null,n.portalUrl=null,n.hasAttributionData=!0,n}return(0,l.Z)(r,[{key:"bingMetadata",get:function(){return this._get("bingMetadata")},set:function(e){this._set("bingMetadata",e)}},{key:"copyright",get:function(){return(0,g.pC)(this.bingMetadata)?this.bingMetadata.copyright:null}},{key:"operationalLayerType",get:function(){return I.toJSON(this.style)}},{key:"bingLogo",get:function(){return(0,g.pC)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}},{key:"load",value:function(e){var t=this;return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((function(){return t._getMetadata()}))):this.addResolvingPromise(Promise.reject(new d.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}},{key:"getTileUrl",value:function(e,t,r){if(!this.loaded||(0,g.Wi)(this.bingMetadata))return null;var n=this.bingMetadata.resourceSets[0].resources[0],a=n.imageUrlSubdomains[t%n.imageUrlSubdomains.length],i=this._getQuadKey(e,t,r);return n.imageUrl.replace("{subdomain}",a).replace("{quadkey}",i)}},{key:"fetchAttributionData",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.load().then((function(){return(0,g.Wi)(t.bingMetadata)?null:{contributors:t.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((function(e){return{attribution:e.attribution,coverageAreas:e.coverageAreas.map((function(e){return{zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}}))}}))}})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_getMetadata",value:function(){var e=this,t={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return(0,p.default)("".concat("https://dev.virtualearth.net","/REST/v1/Imagery/Metadata/").concat(t),{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((function(t){var r=t.data;if(200!==r.statusCode)throw new d.Z("bingmapslayer:getmetadata",r.statusDescription);if(e.bingMetadata=r,0===e.bingMetadata.resourceSets.length)throw new d.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===e.bingMetadata.resourceSets[0].resources.length)throw new d.Z("bingmapslayer:getmetadata","no bing resources")})).catch((function(e){throw new d.Z("bingmapslayer:getmetadata",e.message)}))}},{key:"_getPortalBingKey",value:function(){var e,t=this;return(0,p.default)(null!==(e=this.portalUrl)&&void 0!==e?e:"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((function(e){if(!e.data.bingKey)throw new d.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");t.key=e.data.bingKey})).catch((function(e){throw new d.Z("bingmapslayer:getportalbingkey",e.message)}))}},{key:"_getQuadKey",value:function(e,t,r){for(var n="",a=e;a>0;a--){var i=0,o=1<<a-1;0!=(r&o)&&(i+=1),0!=(t&o)&&(i+=2),n+=i.toString()}return n}}]),r}((0,k.h)((0,B.q)((0,h.R)(j))));(0,c._)([(0,v.Cb)({json:{read:!1,write:!1},value:null})],q.prototype,"bingMetadata",null),(0,c._)([(0,v.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],q.prototype,"type",void 0),(0,c._)([(0,v.Cb)({type:x.Z})],q.prototype,"tileInfo",void 0),(0,c._)([(0,v.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],q.prototype,"copyright",null),(0,c._)([(0,v.Cb)({type:String,json:{write:!1,read:!1}})],q.prototype,"key",void 0),(0,c._)([(0,v.Cb)({type:I.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:I.read}}})],q.prototype,"style",void 0),(0,c._)([(0,v.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],q.prototype,"operationalLayerType",null),(0,c._)([(0,v.Cb)({type:String,json:{write:!1,read:!1}})],q.prototype,"culture",void 0),(0,c._)([(0,v.Cb)({type:String,json:{write:!1,read:!1}})],q.prototype,"region",void 0),(0,c._)([(0,v.Cb)({type:String,json:{write:!0,read:!0}})],q.prototype,"portalUrl",void 0),(0,c._)([(0,v.Cb)({type:Boolean,json:{write:!1,read:!1}})],q.prototype,"hasAttributionData",void 0),(0,c._)([(0,v.Cb)({type:String,readOnly:!0})],q.prototype,"bingLogo",null);var L=q=(0,c._)([(0,b.j)("esri.layers.BingMapsLayer")],q)},83690:function(e,t,r){r.d(t,{g:function(){return o}});var n=r(74165),a=r(15861),i=r(10064);function o(e,t){return l.apply(this,arguments)}function l(){return l=(0,a.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new i.Z("request:server","Unable to load ".concat(r),{url:r,error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),l.apply(this,arguments)}}}]);
//# sourceMappingURL=165.c9c059ae.chunk.js.map