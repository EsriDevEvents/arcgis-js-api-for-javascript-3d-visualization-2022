import{aD as v,cu as F,V as n,_ as d,gk as _,dG as m,J as h,dF as c,a2 as b,ac as u,b4 as w,r as I,M as s,O as l,dM as E,dK as S,Q as x}from"./vendor.96994164.js";import{l as C,u as q,I as Q}from"./I3SMeshView3D.c0b3c0d8.js";import{o as O,c as j,i as A,a as D,b as R}from"./SceneLayerView.8ceac9a1.js";import{M as p,d as L,a as G,n as H}from"./I3SQueryFeatureStore.8c6205ce.js";import{i as y}from"./I3SNode.16dfae5e.js";import{b as $,t as M}from"./I3SUtil.4e9a8af5.js";import{p as V}from"./DefinitionExpressionSceneLayerView.b8fabc04.js";import{c as N}from"./PopupSceneLayerView.1ceff675.js";import"./I3SAttributeOverrides.16ac6234.js";import"./I3SBinaryReader.d46f2be4.js";import"./Graphics3DScaleVisibility.dba1b710.js";import"./optimizedFeatureQueryEngineAdapter.5dee4110.js";import"./PooledRBush.f151c595.js";import"./quickselect.02d2bace.js";import"./SceneLayerWorker.87d4b808.js";import"./attributeUtils.987422a2.js";import"./QueryEngine.70d82ce4.js";import"./popupUtils.a4899550.js";const P=v.getLogger("esri.views.3d.layers.SceneLayerView3D"),g=R();let i=class extends C(V(N(F(O)))){constructor(){super(...arguments),this.type="scene-layer-3d",this.lodFactor=1,this.progressiveLoadFactor=1,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!0,this._interactiveEditingSessions=new Map,this._queryEngine=null}get filter(){return n(this.viewFilter)?this.viewFilter.filter:null}set filter(e){!d(e)&&p.checkSupport(e)?n(this.viewFilter)?this.viewFilter.filter=e:this.viewFilter=new p({filter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:t=>this._loadAsyncModule(t),applyFilters:()=>this._applyFilters(!0),addSqlFilter:(t,r)=>this.addSqlFilter(t,r,this.logError)}):this.viewFilter=null}get requiredFields(){var e,t;return(e=(t=this.fieldsHelper)==null?void 0:t.requiredFields)!=null?e:[]}get floorFilterClause(){const e=_(this);return n(e)?m.create(e,this.layer.fieldsIndex):null}get excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort((t,r)=>t-r):null}get lodCrossfadeinDuration(){var e,t;return(e=(t=this.view)==null?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeinDuration)!=null?e:0}get lodCrossfadeoutDuration(){var e,t;return(e=(t=this.view)==null?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeoutDuration)!=null?e:0}get lodCrossfadeUncoveredDuration(){var e,t;return(e=(t=this.view)==null?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeUncoveredDuration)!=null?e:0}initialize(){this.fieldsHelper=new j({layerView:this}),this.updatingHandles.add(()=>this.layer.rangeInfos,e=>this._rangeInfosChanged(e),h),this.updatingHandles.add(()=>this.layer.renderer,e=>this.updatingHandles.addPromise(this._rendererChange(e)),h),this.updatingHandles.add(()=>[this.parsedDefinitionExpression,this.filter,this.floorFilterClause,this.excludeObjectIdsSorted,c(this.viewFilter,e=>[e.parsedWhereClause,e.parsedGeometry,e.sortedObjectIds])],()=>this._filterChange()),this.updatingHandles.add(()=>[this.filter,c(this.viewFilter,e=>e.parsedGeometry)],()=>this._geometryFilterChange()),this.handles.add(this.layer.on("apply-edits",e=>this.updatingHandles.addPromise(e.result))),this.handles.add(this.layer.on("edits",e=>this._handleEdits(e)))}destroy(){this.fieldsHelper=b(this.fieldsHelper)}_rangeInfosChanged(e){e!=null&&e.length>0&&P.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return n(this.filter)?this.filter.createQuery(e):new u(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t==null?void 0:t.signal).then(r=>{if(r==null||!r.features)return r;const a=this.layer;for(const o of r.features)o.layer=a,o.sourceLayer=a;return r})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQueryEngine(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=q(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new L({layerView:this,priority:w.FEATURE_QUERY_ENGINE,spatialIndex:new G({featureAdapter:new H({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(t,r)=>this._forAllFeatures((a,o,f)=>t({id:a,index:o,meta:f}),r,Q.ALL_IN_CLIPPING_AREA),getFeatureExtent:e,sourceSpatialReference:$(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(e){const t=this._highlights;if(e instanceof u){const{set:r,handle:a}=t.acquireSet();return this.queryObjectIds(e).then(o=>t.setFeatureIds(r,o)),a}return super.highlight(e)}createInteractiveEditSession(e){return A(this.attributeEditingContext,e)}_createLayerGraphic(e){const t=new I(null,null,e);return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}getFilters(){const e=super.getFilters(),t=this.excludeObjectIdsSorted;return n(t)&&e.push(r=>M(t,!1,r)),this.floorFilterClause&&this.addSqlFilter(e,this.floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),n(this.viewFilter)&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}_ensureQuery(e){return this._addDefinitionExpressionToQuery(d(e)?this.createQuery():u.from(e))}get attributeEditingContext(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),forEachNode:e=>this._forAllNodes(t=>n(t)?e(t.node,t.featureIds):null),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this.attributeOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}_handleEdits(e){D(this.attributeEditingContext,e)}get hasGeometryFilter(){const e=this.viewFilter;return n(e)&&n(e.parsedGeometry)}computeNodeFiltering(e){const t=this.viewFilter;return d(t)||t.isMBSGeoemtryVisible(e,this.view.spatialReference,this._controller.crsIndex)?y.Unmodified:y.Culled}};s([l({aliasOf:"layer"})],i.prototype,"i3slayer",void 0),s([l(E)],i.prototype,"updatingProgress",void 0),s([l({type:S})],i.prototype,"filter",null),s([l()],i.prototype,"viewFilter",void 0),s([l(g.requiredFields)],i.prototype,"requiredFields",null),s([l(g.availableFields)],i.prototype,"availableFields",void 0),s([l()],i.prototype,"fieldsHelper",void 0),s([l()],i.prototype,"floorFilterClause",null),s([l()],i.prototype,"excludeObjectIdsSorted",null),s([l({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],i.prototype,"lodFactor",void 0),s([l({readOnly:!0,aliasOf:"_controller.updatingProgress"})],i.prototype,"updatingProgressValue",void 0),i=s([x("esri.views.3d.layers.SceneLayerView3D")],i);const ae=i;export{ae as default};