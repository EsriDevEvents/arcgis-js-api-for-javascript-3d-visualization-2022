var f=Object.defineProperty,S=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var h=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&h(e,r,t[r]);if(c)for(var r of c(t))_.call(t,r)&&h(e,r,t[r]);return e},d=(e,t)=>S(e,T(t));import{aD as $,mi as b,mj as D,mk as I,ml as V,mm as E,fg as O,V as u,b6 as j,cn as C,c4 as y,mn as L,az as m,M as s,O as o,mo as A,mp as U,ee as q,Q as J,l as N}from"./vendor.96994164.js";import{s as k}from"./ArcGISCachedService.3ad1f399.js";import"./TilemapCache.5f1eb4a7.js";const v=$.getLogger("esri.layers.ElevationLayer");let a=class extends k(b(D(I(V(N))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=E()}normalizeCtorArgs(e,t){return typeof e=="string"?p({url:e},t):e}destroy(){this._lercDecoder=O(this._lercDecoder)}set minScale(e){this.constructed&&v.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(e){this.constructed&&v.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(e,t){let r=t.currentVersion;return r||(r=9.3),r}load(e){const t=u(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:r=>{for(let i=0;i<r.typeKeywords.length;i++)if(r.typeKeywords[i].toLowerCase()==="elevation 3d layer")return!0;throw new j("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(C).then(()=>this._fetchImageService(t))),Promise.resolve(this)}fetchTile(e,t,r,i){const n=u((i=i||{signal:null}).signal)?i.signal:i.signal=new AbortController().signal,g={responseType:"array-buffer",signal:n},w={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(e,t,r,i)).then(()=>y(this.getTileUrl(e,t,r),g)).then(l=>this._lercDecoder.decode(l.data,w,n)).then(l=>({values:l.pixelData,width:l.width,height:l.height,maxZError:l.fileInfo.maxZError,noDataValue:l.noDataValue,minValue:l.minValue,maxValue:l.maxValue}))}getTileUrl(e,t,r){const i=!this.tilemapCache&&this.supportsBlankTile,n=L(d(p({},this.parsedUrl.query),{blankTile:!i&&null}));return`${this.parsedUrl.path}/tile/${e}/${t}/${r}${n?"?"+n:""}`}async queryElevation(e,t){const{ElevationQuery:r}=await import("./ElevationQuery.98b3a213.js");return m(t),new r().query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:r}=await import("./ElevationQuery.98b3a213.js");return m(t),new r().createSampler(this,e,t)}_fetchTileAvailability(e,t,r,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,r,i):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:p({f:"json"},this.parsedUrl.query),responseType:"json",signal:e},r=await y(this.parsedUrl.path,t);r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};s([o({json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),s([o({readOnly:!0,type:A})],a.prototype,"heightModelInfo",void 0),s([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),s([o({type:["show","hide"]})],a.prototype,"listMode",void 0),s([o({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],a.prototype,"minScale",null),s([o({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],a.prototype,"maxScale",null),s([o({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),s([o({type:["ArcGISTiledElevationServiceLayer"]})],a.prototype,"operationalLayerType",void 0),s([o()],a.prototype,"sourceJSON",void 0),s([o({json:{read:!1},value:"elevation",readOnly:!0})],a.prototype,"type",void 0),s([o(U)],a.prototype,"url",void 0),s([o()],a.prototype,"version",void 0),s([q("version",["currentVersion"])],a.prototype,"readVersion",null),a=s([J("esri.layers.ElevationLayer")],a),a.prototype.fetchTile.__isDefault__=!0;const z=a;export{z as default};