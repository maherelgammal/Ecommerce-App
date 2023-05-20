"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[7406],{80573:function(e,t,n){n.d(t,{Z:function(){return b}});var i=n(15671),r=n(43144),o=n(60136),s=n(29388),l=n(27366),a=n(85015),u=n(11582),p=n(79056),y=n(46784),c=n(92026),d=n(49861),f=(n(25243),n(63780),n(69912)),v=0,h=function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).id="".concat(Date.now().toString(16),"-analysis-").concat(v++),r.title=null,r}return(0,r.Z)(n,[{key:"parent",get:function(){return this._get("parent")},set:function(e){var t=this.parent;if((0,c.pC)(t))switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}},{key:"isEditable",get:function(){return this.requiredPropertiesForEditing.every(c.pC)}}]),n}((0,y.eC)((0,u.J)((0,p.IG)(a.Z))));(0,l._)([(0,d.Cb)({type:String,constructOnly:!0,clonable:!1})],h.prototype,"id",void 0),(0,l._)([(0,d.Cb)({type:String})],h.prototype,"title",void 0),(0,l._)([(0,d.Cb)({constructOnly:!0})],h.prototype,"type",void 0),(0,l._)([(0,d.Cb)({clonable:!1,value:null})],h.prototype,"parent",null),(0,l._)([(0,d.Cb)({readOnly:!0})],h.prototype,"isEditable",null),(0,l._)([(0,d.Cb)({readOnly:!0})],h.prototype,"requiredPropertiesForEditing",void 0);var b=h=(0,l._)([(0,f.j)("esri.analysis.Analysis")],h)},47406:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var i=n(74165),r=n(15861),o=n(15671),s=n(43144),l=n(82963),a=n(60136),u=n(29388),p=n(27366),y=n(37762),c=n(80573),d=n(51995),f=n(11582),v=n(46784),h=n(17842),b=n(49861),C=n(25243),m=(n(63780),n(69912)),_=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e)).type="simple",i.color=new d.Z("black"),i.lineSize=2,i.fontSize=10,i.textColor=new d.Z("black"),i.textBackgroundColor=new d.Z([255,255,255,.6]),i}return(0,s.Z)(n)}((0,v.eC)(f.j));(0,p._)([(0,b.Cb)({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],_.prototype,"type",void 0),(0,p._)([(0,b.Cb)({type:d.Z,nonNullable:!0,json:{type:[C.z8],write:{isRequired:!0}}})],_.prototype,"color",void 0),(0,p._)([(0,b.Cb)({type:Number,cast:h.t_,nonNullable:!0,range:{min:(0,h.Wz)(1)},json:{write:{isRequired:!0}}})],_.prototype,"lineSize",void 0),(0,p._)([(0,b.Cb)({type:Number,cast:h.t_,nonNullable:!0,json:{write:{isRequired:!0}}})],_.prototype,"fontSize",void 0),(0,p._)([(0,b.Cb)({type:d.Z,nonNullable:!0,json:{type:[C.z8],write:{isRequired:!0}}})],_.prototype,"textColor",void 0),(0,p._)([(0,b.Cb)({type:d.Z,nonNullable:!0,json:{type:[C.z8],write:{isRequired:!0}}})],_.prototype,"textBackgroundColor",void 0);var g,Z=_=(0,p._)([(0,m.j)("esri.analysis.DimensionSimpleStyle")],_);n(59486);!function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"}(g||(g={}));var w=[g.Horizontal,g.Vertical,g.Direct],k=n(17768),P=n(89125),j=n(585),x=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e)).type="length",i.startPoint=null,i.endPoint=null,i.measureType=g.Direct,i.offset=0,i.orientation=0,i}return(0,s.Z)(n)}((0,v.eC)(f.j));(0,p._)([(0,b.Cb)({type:["length"],json:{write:{isRequired:!0}}})],x.prototype,"type",void 0),(0,p._)([(0,b.Cb)({type:j.Z,json:{write:!0}})],x.prototype,"startPoint",void 0),(0,p._)([(0,b.Cb)({type:j.Z,json:{write:!0}})],x.prototype,"endPoint",void 0),(0,p._)([(0,b.Cb)({type:w,nonNullable:!0,json:{write:{isRequired:!0}}})],x.prototype,"measureType",void 0),(0,p._)([(0,b.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],x.prototype,"offset",void 0),(0,p._)([(0,b.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,P.p)((function(e){return k.BV.normalize((0,C.q9)(e),0,!0)}))],x.prototype,"orientation",void 0);var R=x=(0,p._)([(0,m.j)("esri.analysis.LengthDimension")],x),N=n(40281),O=n(60354),q=n(92026),z=n(94172),E=n(53866),S=n(52587),D=N.Z.ofType(R),A=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e)).type="dimension",i.style=new Z,i.extent=null,i}return(0,s.Z)(n,[{key:"initialize",value:function(){var e=this;this.addHandles((0,z.YP)((function(){return e._computeExtent()}),(function(t){((0,q.Wi)(t)||(0,q.Wi)(t.pending))&&e._set("extent",(0,q.pC)(t)?t.extent:null)}),z.tX))}},{key:"dimensions",get:function(){return this._get("dimensions")||new D},set:function(e){this._set("dimensions",(0,O.Z)(e,this.dimensions,D))}},{key:"spatialReference",get:function(){var e,t=(0,y.Z)(this.dimensions);try{for(t.s();!(e=t.n()).done;){var n=e.value;if((0,q.pC)(n.startPoint))return n.startPoint.spatialReference;if((0,q.pC)(n.endPoint))return n.endPoint.spatialReference}}catch(i){t.e(i)}finally{t.f()}return null}},{key:"requiredPropertiesForEditing",get:function(){return this.dimensions.reduce((function(e,t){return e.push(t.startPoint,t.endPoint),e}),[])}},{key:"waitComputeExtent",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this._computeExtent(),e.abrupt("return",(0,q.pC)(t)?(0,q.Wg)(t.pending):Promise.resolve());case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_computeExtent",value:function(){var e=this.spatialReference;if((0,q.Wi)(e))return{pending:null,extent:null};var t,n=[],i=(0,y.Z)(this.dimensions);try{for(i.s();!(t=i.n()).done;){var r=t.value;(0,q.pC)(r.startPoint)&&n.push(r.startPoint),(0,q.pC)(r.endPoint)&&n.push(r.endPoint)}}catch(l){i.e(l)}finally{i.f()}var o=(0,S.JY)(n,e);if((0,q.pC)(o.pending))return{pending:o.pending,extent:null};var s=null;return(0,q.pC)(o.geometries)&&(s=o.geometries.reduce((function(e,t){return(0,q.Wi)(e)?(0,q.pC)(t)?E.Z.fromPoint(t):null:(0,q.pC)(t)?e.union(E.Z.fromPoint(t)):e}),null)),{pending:null,extent:s}}},{key:"clear",value:function(){this.dimensions.removeAll()}}]),n}(c.Z);(0,p._)([(0,b.Cb)({type:["dimension"]})],A.prototype,"type",void 0),(0,p._)([(0,b.Cb)({cast:O.R,type:D,nonNullable:!0})],A.prototype,"dimensions",null),(0,p._)([(0,b.Cb)({readOnly:!0})],A.prototype,"spatialReference",null),(0,p._)([(0,b.Cb)({types:{key:"type",base:null,typeMap:{simple:Z}},nonNullable:!0})],A.prototype,"style",void 0),(0,p._)([(0,b.Cb)({value:null,readOnly:!0})],A.prototype,"extent",void 0),(0,p._)([(0,b.Cb)({readOnly:!0})],A.prototype,"requiredPropertiesForEditing",null);var W=A=(0,p._)([(0,m.j)("esri.analysis.DimensionAnalysis")],A),L=n(97642),T=n(31201),F=n(30651),H=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var i;if((0,o.Z)(this,n),(i=t.call(this,e)).type="dimension",i.operationalLayerType="ArcGISDimensionLayer",i.source=new W,i.opacity=1,e){var r=e.source,s=e.style;r&&s&&(r.style=s)}return(0,l.Z)(i)}return(0,s.Z)(n,[{key:"initialize",value:function(){var e=this;this.addHandles([(0,z.YP)((function(){return e.source}),(function(t,n){(0,q.pC)(n)&&n.parent===e&&(n.parent=null),(0,q.pC)(t)&&(t.parent=e)}),z.tX)])}},{key:"load",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.addResolvingPromise(this.source.waitComputeExtent()),this));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"spatialReference",get:function(){return(0,q.Wg)(this.source.spatialReference)}},{key:"style",get:function(){return this.source.style},set:function(e){this.source.style=e}},{key:"fullExtent",get:function(){return this.source.extent}},{key:"releaseAnalysis",value:function(e){this.source===e&&(this.source=new W)}},{key:"analysis",get:function(){return this.source},set:function(e){this.source=e}},{key:"dimensions",get:function(){return this.source.dimensions},set:function(e){this.source.dimensions=e}},{key:"writeDimensions",value:function(e,t,n,i){t.dimensions=e.filter((function(e){var t=e.startPoint,n=e.endPoint;return(0,q.pC)(t)&&(0,q.pC)(n)})).map((function(e){return e.toJSON(i)})).toJSON()}}]),n}((0,n(6061).q)((0,L.R)(F.Z)));(0,p._)([(0,b.Cb)({json:{read:!1},readOnly:!0})],H.prototype,"type",void 0),(0,p._)([(0,b.Cb)({type:["ArcGISDimensionLayer"]})],H.prototype,"operationalLayerType",void 0),(0,p._)([(0,b.Cb)({nonNullable:!0})],H.prototype,"source",void 0),(0,p._)([(0,b.Cb)({readOnly:!0})],H.prototype,"spatialReference",null),(0,p._)([(0,b.Cb)({types:{key:"type",base:null,typeMap:{simple:Z}},json:{write:{ignoreOrigin:!0}}})],H.prototype,"style",null),(0,p._)([(0,b.Cb)({readOnly:!0})],H.prototype,"fullExtent",null),(0,p._)([(0,b.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],H.prototype,"opacity",void 0),(0,p._)([(0,b.Cb)({type:["show","hide"]})],H.prototype,"listMode",void 0),(0,p._)([(0,b.Cb)({type:N.Z.ofType(R),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],H.prototype,"dimensions",null),(0,p._)([(0,T.c)("web-scene","dimensions")],H.prototype,"writeDimensions",null);var J=H=(0,p._)([(0,m.j)("esri.layers.DimensionLayer")],H)}}]);
//# sourceMappingURL=7406.85a08f34.chunk.js.map