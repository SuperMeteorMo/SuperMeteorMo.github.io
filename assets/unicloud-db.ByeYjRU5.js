import{aq as t,_ as e,au as i,av as n,aw as o,N as a,e as s,q as l,s as c,O as r,o as d,c as h,w as u,D as p,ax as g,i as m}from"./index-ChNMzRY4.js";const f={en:{"uniCloud.component.add.success":"Success","uniCloud.component.update.success":"Success","uniCloud.component.remove.showModal.title":"Tips","uniCloud.component.remove.showModal.content":"是否删除该数据"},es:{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"},fr:{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"},"zh-Hans":{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"},"zh-Hant":{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否刪除數據"}},y=Array.isArray,{t:C}=t(f),v="load",_="error",w="add",S="replace",b="auto",D="manual",L=["pageCurrent","pageSize","collection","action","field","getcount","orderby","where","groupby","groupField","distinct"];const x=e({name:"UniClouddb",setup(t){const e=t.ssrKey?t.getone?i(void 0,t.ssrKey):n([],t.ssrKey):t.getone?i(void 0,"2QPAQ3NNS/LSyzeAHnXsLw=="):n([],"Ec2JrgjkfKrd3CpUkGcNhA=="),a=g();return o((()=>{e.value&&0!==e.value.length||t.manual||t.loadtime!==b||a.proxy.loadData()})),{dataList:e}},async serverPrefetch(){if(!this.manual&&this.loadtime===b)return this.loadData()},props:{options:{type:[Object,Array],default:()=>({})},spaceInfo:{type:Object,default:()=>({})},collection:{type:[String,Array],default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String,Object],default:!1},gettreepath:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},groupby:{type:String,default:""},groupField:{type:String,default:""},distinct:{type:[Boolean,String],default:!1},pageIndistinct:{type:[Boolean,String],default:!1},foreignKey:{type:String,default:""},loadtime:{type:String,default:"auto"},manual:{type:Boolean,default:!1},ssrKey:{type:[String,Number],default:""}},data:()=>({loading:!1,hasMore:!1,paginationInternal:{},errorMessage:""}),computed:{collectionArgs(){return y(this.collection)?this.collection:[this.collection]},isLookup(){return y(this.collection)&&this.collection.length>1||"string"==typeof this.collection&&this.collection.indexOf(",")>-1},mainCollection(){if("string"==typeof this.collection)return this.collection.split(",")[0];return JSON.parse(JSON.stringify(this.collection[0])).$db[0].$param[0]}},created(){this._isEnded=!1,this.paginationInternal={current:this.pageCurrent,size:this.pageSize,count:0},this.$watch((()=>{var t=[];return L.forEach((e=>{t.push(this[e])})),t}),((t,e)=>{if(this.paginationInternal.size=this.pageSize,t[0]!==e[0]&&(this.paginationInternal.current=this.pageCurrent),this.loadtime===D)return;let i=!1;for(let n=2;n<t.length;n++)if(t[n]!==e[n]){i=!0;break}i&&(this.clear(),this.reset()),this._execLoadData()}))},methods:{loadData(t,e){let i=null,n=!1;return"object"==typeof t?(t.clear&&(this.pageData===S?this.clear():n=t.clear,this.reset()),void 0!==t.current&&(this.paginationInternal.current=t.current),"function"==typeof e&&(i=e)):"function"==typeof t&&(i=t),this._execLoadData(i,n)},loadMore(){this._isEnded||this.loading||(this.pageData===w&&this.paginationInternal.current++,this._execLoadData())},refresh(){this.clear(),this._execLoadData()},clear(){this._isEnded=!1,this.dataList=[]},reset(){this.paginationInternal.current=1},add(t,{action:e,showToast:i=!0,toastTitle:n,success:o,fail:d,complete:h,needConfirm:u=!0,needLoading:p=!0,loadingTitle:g=""}={}){p&&a({title:g});let m=s.database(this.spaceInfo);e&&(m=m.action(e)),m.collection(this.mainCollection).add(t).then((t=>{o&&o(t),i&&l({title:n||C("uniCloud.component.add.success")})})).catch((t=>{d&&d(t),u&&c({content:t.message,showCancel:!1})})).finally((()=>{p&&r(),h&&h()}))},remove(t,{action:e,success:i,fail:n,complete:o,confirmTitle:a,confirmContent:s,needConfirm:l=!0,needLoading:r=!0,loadingTitle:d=""}={}){t&&t.length&&(l?c({title:a||C("uniCloud.component.remove.showModal.title"),content:s||C("uniCloud.component.remove.showModal.content"),showCancel:!0,success:a=>{a.confirm&&this._execRemove(t,e,i,n,o,l,r,d)}}):this._execRemove(t,e,i,n,o,l,r,d))},update(t,e,{action:i,showToast:n=!0,toastTitle:o,success:d,fail:h,complete:u,needConfirm:p=!0,needLoading:g=!0,loadingTitle:m=""}={}){g&&a({title:m});let f=s.database(this.spaceInfo);return i&&(f=f.action(i)),f.collection(this.mainCollection).doc(t).update(e).then((t=>{d&&d(t),n&&l({title:o||C("uniCloud.component.update.success")})})).catch((t=>{h&&h(t),p&&c({content:t.message,showCancel:!1})})).finally((()=>{g&&r(),u&&u()}))},getTemp(t=!0){let e=s.database(this.spaceInfo);this.action&&(e=e.action(this.action)),e=e.collection(...this.collectionArgs),this.foreignKey&&(e=e.foreignKey(this.foreignKey)),this.where&&Object.keys(this.where).length&&(e=e.where(this.where)),this.field&&(e=e.field(this.field)),this.groupby&&(e=e.groupBy(this.groupby)),this.groupField&&(e=e.groupField(this.groupField)),!0===this.distinct&&(e=e.distinct()),this.orderby&&(e=e.orderBy(this.orderby));const{current:i,size:n}=this.paginationInternal,o={};this.getcount&&(o.getCount=this.getcount);const a={limitLevel:this.limitlevel,startWith:this.startwith};return this.gettree&&(o.getTree=a),this.gettreepath&&(o.getTreePath=a),e=e.skip(n*(i-1)).limit(n),t?(e=e.getTemp(o),e.udb=this):e=e.get(o),e},setResult(t){0===t.code?this._execLoadDataSuccess(t):this._execLoadDataFail(new Error(t.message))},_execLoadData(t,e){if(!this.loading)return this.loading=!0,this.errorMessage="",this._getExec().then((i=>{this.loading=!1,this._execLoadDataSuccess(i.result,t,e)})).catch((e=>{this.loading=!1,this._execLoadDataFail(e,t)}))},_execLoadDataSuccess(t,e,i){const{data:n,count:o}=t;this._isEnded=void 0!==o?this.paginationInternal.current*this.paginationInternal.size>=o:n.length<this.pageSize,this.hasMore=!this._isEnded;const a=this.getone?n.length?n[0]:void 0:n;this.getcount&&(this.paginationInternal.count=o),e&&e(a,this._isEnded,this.paginationInternal),this._dispatchEvent(v,a),this.getone||this.pageData===S||i?this.dataList=a:this.dataList.push(...a)},_execLoadDataFail(t,e){this.errorMessage=t,e&&e(),this.$emit(_,t)},_getExec(){return this.getTemp(!1)},_execRemove(t,e,i,n,o,l,d,h){if(!this.collection||!t)return;const u=y(t)?t:[t];if(!u.length)return;d&&a({mask:!0,title:h});const p=s.database(this.spaceInfo),g=p.command;let m=p;e&&(m=m.action(e)),m.collection(this.mainCollection).where({_id:g.in(u)}).remove().then((t=>{i&&i(t.result),this.pageData===S?this.refresh():this.removeData(u)})).catch((t=>{n&&n(t),l&&c({content:t.message,showCancel:!1})})).finally((()=>{d&&r(),o&&o()}))},removeData(t){const e=t.slice(0),i=this.dataList;for(let n=i.length-1;n>=0;n--){const t=e.indexOf(i[n]._id);t>=0&&(i.splice(n,1),e.splice(t,1))}},_dispatchEvent(t,e){this._changeDataFunction?this._changeDataFunction(e,this._isEnded,this.paginationInternal):this.$emit(t,e,this._isEnded,this.paginationInternal)}}},[["render",function(t,e,i,n,o,a){const s=m;return d(),h(s,null,{default:u((()=>[p(t.$slots,"default",{options:i.options,data:n.dataList,pagination:o.paginationInternal,loading:o.loading,hasMore:o.hasMore,error:o.errorMessage})])),_:3})}]]);export{x as _};
