"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[3684],{53684:function(e,r,n){n.r(r),n.d(r,{default:function(){return V}});var t=n(74165),i=n(37762),a=n(15861),o=n(15671),l=n(43144),s=n(60136),u=n(29388),h=n(27366),p=n(44055),c=n(40281),y=n(94172),f=(n(32718),n(25243),n(63780),n(10064),n(93169),n(69912)),d=n(34999),v=n(9014),g=n(49818),w=n(95986),m=n(75391),Z=n(34035),b=n(67581),_=function(e){(0,s.Z)(n,e);var r=(0,u.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=r.apply(this,arguments))._graphicsViewMap={},e._popupTemplates=new Map,e.graphicsViews=[],e}return(0,l.Z)(n,[{key:"hitTest",value:function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r,n){var a,o=this;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.graphicsViews.length){e.next=2;break}return e.abrupt("return",null);case 2:return a=this.layer,e.abrupt("return",this.graphicsViews.reverse().map((function(e){var n,t=o._popupTemplates.get(e),l=e.hitTest(r),s=(0,i.Z)(l);try{for(s.s();!(n=s.n()).done;){var u=n.value;u.layer=a,u.sourceLayer=a,u.popupTemplate=t}}catch(h){s.e(h)}finally{s.f()}return l})).flat().map((function(e){return{type:"graphic",graphic:e,layer:a,mapPoint:r}})));case 4:case"end":return e.stop()}}),e,this)})));return function(r,n){return e.apply(this,arguments)}}()},{key:"update",value:function(e){if(this.graphicsViews){var r,n=(0,i.Z)(this.graphicsViews);try{for(n.s();!(r=n.n()).done;){r.value.processUpdate(e)}}catch(t){n.e(t)}finally{n.f()}}}},{key:"attach",value:function(){var e=this;this.addAttachHandles([(0,y.YP)((function(){var r;return null===(r=e.layer)||void 0===r?void 0:r.featureCollections}),(function(r){e._clear();var n,t=(0,i.Z)(r);try{for(t.s();!(n=t.n()).done;){var a=n.value,o=a.popupInfo,l=a.featureSet,s=a.layerDefinition,u=g.Z.fromJSON(l),h=new c.Z(u.features),y=s.drawingInfo,f=o?p.Z.fromJSON(o):null,d=(0,v.i)(y.renderer),w=new Z.Z({requestUpdateCallback:function(){return e.requestUpdate()},view:e.view,graphics:h,renderer:d,container:new m.Z(e.view.featuresTilingScheme)});e._graphicsViewMap[u.geometryType]=w,e._popupTemplates.set(w,f),"polygon"!==u.geometryType||e.layer.polygonSymbol?"polyline"!==u.geometryType||e.layer.lineSymbol?"point"!==u.geometryType||e.layer.pointSymbol||(e.layer.pointSymbol=d.symbol):e.layer.lineSymbol=d.symbol:e.layer.polygonSymbol=d.symbol,e.graphicsViews.push(w),e.container.addChild(w.container)}}catch(b){t.e(b)}finally{t.f()}}),y.nn),(0,y.YP)((function(){var r;return null===(r=e.layer)||void 0===r?void 0:r.polygonSymbol}),(function(r){e._graphicsViewMap.polygon.renderer=new d.Z({symbol:r})}),y.nn),(0,y.YP)((function(){var r;return null===(r=e.layer)||void 0===r?void 0:r.lineSymbol}),(function(r){e._graphicsViewMap.polyline.renderer=new d.Z({symbol:r})}),y.nn),(0,y.YP)((function(){var r;return null===(r=e.layer)||void 0===r?void 0:r.pointSymbol}),(function(r){e._graphicsViewMap.point.renderer=new d.Z({symbol:r})}),y.nn)])}},{key:"detach",value:function(){this._clear()}},{key:"moveStart",value:function(){}},{key:"moveEnd",value:function(){}},{key:"viewChange",value:function(){var e,r=(0,i.Z)(this.graphicsViews);try{for(r.s();!(e=r.n()).done;){e.value.viewChange()}}catch(n){r.e(n)}finally{r.f()}}},{key:"_clear",value:function(){this.container.removeAllChildren();var e,r=(0,i.Z)(this.graphicsViews);try{for(r.s();!(e=r.n()).done;){e.value.destroy()}}catch(n){r.e(n)}finally{r.f()}this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}}]),n}((0,w.y)(b.Z)),V=_=(0,h._)([(0,f.j)("esri.views.2d.layers.GeoRSSLayerView2D")],_)},75391:function(e,r,n){n.d(r,{Z:function(){return h}});var t=n(15671),i=n(43144),a=n(11752),o=n(61120),l=n(60136),s=n(29388),u=n(80613),h=function(e){(0,l.Z)(n,e);var r=(0,s.Z)(n);function n(){return(0,t.Z)(this,n),r.apply(this,arguments)}return(0,i.Z)(n,[{key:"renderChildren",value:function(e){this.attributeView.update(),this.children.some((function(e){return e.hasData}))&&(this.attributeView.bindTextures(e.context,!1),(0,a.Z)((0,o.Z)(n.prototype),"renderChildren",this).call(this,e),e.drawPhase===u.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===u.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}},{key:"_renderHighlight",value:function(e){var r=e.painter.effects.highlight;r.bind(e),this._renderChildren(e,r.defines),r.draw(e),r.unbind()}}]),n}(n(82022).Z)}}]);
//# sourceMappingURL=3684.69fc907c.chunk.js.map