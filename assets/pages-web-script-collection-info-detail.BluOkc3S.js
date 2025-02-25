import{e as t,C as e,u as o,z as i,y as a,l as s,c as l,w as c,i as n,o as r,a as d,b as h,f as m,t as f,A as u,F as p,r as _,G as C,g,M as w,ae as b,$ as y}from"./index-Cgk0Zs9f.js";import{_ as v}from"./uni-icons.B-5OKUiy.js";import{r as I}from"./uni-app.es.CYq6AJdW.js";import{_ as k}from"./bannerScript.CvA1V3p4.js";import{s as S}from"./store.D9v-Sbvi.js";import{_ as D}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-dateformat.BJyr8aom.js";const x=t.database(),F=x.command;const j=D({components:{bannerScript:k},data:()=>({collectionData:{name:"加载中...",description:""},rawCollection:[],showEditDialog:!1,activeIndex:-1,originalOrder:[],firstSort:[],hasChanged:!1,areaHeight:0,editForm:{name:"",description:""},collectionList:"web-script-collection-info",_id:"",userInfo:null}),computed:{filteredCollection(){return this.rawCollection.filter((t=>!!t.id))}},watch:{filteredCollection:{handler(t){this.calcAreaHeight(t)},immediate:!0}},onLoad(t){this._id=t.id||"67bccc6f47ea33825d4b8d7e",this.initData(),this.userInfo=S.userInfo},methods:{sort(){this.hasChanged=this.rawCollection.filter((t=>{var e=this.firstSort.find((e=>e._id==t._id));return e.sort!=t.sort||e.comment!=t.comment})).length,this.rawCollection.sort(((t,e)=>e.sort-t.sort))},async initData(){await Promise.all([this.loadCollectionInfo(),this.loadScripts()]),this.$nextTick((()=>{this.originalOrder=[...this.filteredCollection]}))},async loadCollectionInfo(){try{const{result:t}=await x.collection("web-script-collection-info").doc(this._id).get();this.collectionData=t.data[0],this.editForm={...t.data[0]}}catch(t){console.error(" 加载合集信息失败:",t),e({title:"数据加载失败",icon:"error"})}},async loadScripts(){try{const t=await x.collection("web-script-collection").where({collect_id:this._id}).orderBy("sort","desc").get(),e=t.result.data.map((t=>({id:t.id,host:t.host,show:F.gt(0)})));if(e.length){const o=await x.collection("web-script").where(F.or(e)).field({id:!0,name:!0,description:!0,publisher:!0,"update-id":!0,host:!0,publish_date:!0,day:!0,total:!0,user_id:!0,create_date:!0,version:!0,userContentHtml:!0,changelog:!0,show:!0}).get();this.rawCollection=o.result.data.map((e=>{var o=t.result.data.find((t=>t.id==e.id&&t.host==e.host));return e.sort=o?o.sort:0,e.comment=o?o.comment:0,e})),this.firstSort=this.rawCollection.map((t=>({_id:t._id,sort:t.sort,comment:t.comment})))}}catch(t){console.error(" 加载脚本失败:",t),e({title:"脚本加载失败",icon:"error"})}},calcAreaHeight(t=[]){this.areaHeight=2015*t.length},handleTouchStart(t){this.activeIndex=t,this.originalOrder=[...this.filteredCollection]},handleTouchEnd(){this.activeIndex=-1,this.checkSortChange()},handleMove(t,e){const o=t.detail.y;if(void 0===o)return;const i=Math.min(Math.max(0,Math.round((o+140*e)/140)),this.filteredCollection.length-1);if(i!==e){const t=JSON.parse(JSON.stringify(this.filteredCollection)),[o]=t.splice(e,1);t.splice(i,0,o),this.rawCollection=t,this.activeIndex=i}},checkSortChange(){this.hasChanged=!this.filteredCollection.every(((t,e)=>{var o;return t.id===(null==(o=this.originalOrder[e])?void 0:o.id)}))},async saveSort(){var t=this.rawCollection.filter((t=>{var e=this.firstSort.find((e=>e._id==t._id));return e.sort!=t.sort||e.comment!=t.comment}));await Promise.all(t.map((t=>x.collection("web-script-collection").where({id:t.id,host:t.host,collect_id:t.collect_id}).update({sort:parseInt(t.sort),comment:t.comment})))),e({title:"设置保存成功",icon:"success"}),this.hasChanged=!1,this.firstSort=this.rawCollection.map((t=>({_id:t._id,sort:t.sort,comment:t.comment})))},async updateCollectionInfo(){if(!this.editForm.name||this.editForm.name.length<2)return e({title:"名称需2-20个字符",icon:"none"});try{await x.collection("web-script-collection-info").doc(this._id).update({name:this.editForm.name,description:this.editForm.description}),this.collectionData={...this.editForm},this.showEditDialog=!1,e({title:"信息更新成功",icon:"success"})}catch(t){console.error(" 更新失败:",t),e({title:"更新失败，请重试",icon:"error"})}},handleDelete(){o({title:"危险操作确认",content:"将永久删除该合集及所有关联数据",confirmColor:"#ff4444",success:async t=>{if(t.confirm)try{await x.collection("web-script-collection").where({collect_id:this._id}).remove(),await x.collection("web-script-collection-info").doc(this._id).remove(),i(),e({title:"删除成功",icon:"success"})}catch(o){console.error(" 删除失败:",o),e({title:"删除操作失败",icon:"error"})}}})},goback(){i({fail:()=>{a({url:"/pages/list/index"})}})}}},[["render",function(t,e,o,i,a,S){const D=g,x=n,F=I(s("uni-icons"),v),j=w,O=b,E=y,V=I(s("bannerScript"),k);return r(),l(x,{class:"container"},{default:c((()=>[d(x,{class:"header",onClick:S.goback},{default:c((()=>[d(D,{class:"title"},{default:c((()=>[h("👈 返回搜脚本加速站")])),_:1})])),_:1},8,["onClick"]),d(x,{class:"main-content"},{default:c((()=>[d(x,{class:"card info-card"},{default:c((()=>[a.showEditDialog?(r(),l(x,{key:1,class:"edit-form"},{default:c((()=>[d(x,{class:"form-item"},{default:c((()=>[d(D,{class:"label"},{default:c((()=>[h("合集名称")])),_:1}),d(j,{modelValue:a.editForm.name,"onUpdate:modelValue":e[1]||(e[1]=t=>a.editForm.name=t),placeholder:"请输入2-20个字符",class:"input",maxlength:"20"},null,8,["modelValue"])])),_:1}),d(x,{class:"form-item"},{default:c((()=>[d(D,{class:"label"},{default:c((()=>[h("合集描述")])),_:1}),d(O,{modelValue:a.editForm.description,"onUpdate:modelValue":e[2]||(e[2]=t=>a.editForm.description=t),placeholder:"请输入描述信息（可选）",class:"textarea",maxlength:"100"},null,8,["modelValue"])])),_:1}),d(x,{class:"form-actions"},{default:c((()=>[d(E,{class:"btn-cancel",onClick:e[3]||(e[3]=t=>a.showEditDialog=!1)},{default:c((()=>[h("取消修改")])),_:1}),d(E,{class:"btn-save",onClick:S.updateCollectionInfo},{default:c((()=>[h("保存更改")])),_:1},8,["onClick"])])),_:1})])),_:1})):(r(),m(p,{key:0},[d(x,{class:"section-header"},{default:c((()=>[d(D,{class:"section-title"},{default:c((()=>[h(f(a.collectionData.name),1)])),_:1}),a.userInfo&&a.userInfo._id&&a.userInfo._id==a.collectionData.user_id?(r(),l(F,{key:0,type:"compose",size:"24",class:"edit-icon",onClick:e[0]||(e[0]=t=>a.showEditDialog=!0)})):u("",!0)])),_:1}),d(D,{class:"welcome-text"},{default:c((()=>[h(f(a.collectionData.description||"暂无描述信息"),1)])),_:1})],64))])),_:1}),d(x,{class:"card list-card"},{default:c((()=>[d(x,{class:"list-header"},{default:c((()=>[d(D,{class:"count"},{default:c((()=>[h("📜 包含脚本（"+f(S.filteredCollection.length)+" ）",1)])),_:1})])),_:1}),d(x,{class:"script-item"},{default:c((()=>[(r(!0),m(p,null,_(S.filteredCollection,((t,e)=>(r(),l(V,{item:t,onRefresh:S.loadCollectionInfo,collect:a.collectionData,onSort:S.sort},null,8,["item","onRefresh","collect","onSort"])))),256))])),_:1})])),_:1}),a.userInfo&&a.userInfo._id&&a.userInfo._id==a.collectionData.user_id?(r(),l(x,{key:0,class:"card operation-card"},{default:c((()=>[d(x,{class:"action-btns"},{default:c((()=>[d(E,{class:C(["btn-primary",{disabled:!a.hasChanged}]),onClick:S.saveSort,disabled:!a.hasChanged},{default:c((()=>[h(f(a.hasChanged?"保存设置":"未修改"),1)])),_:1},8,["class","onClick","disabled"]),d(E,{class:"btn-danger",onClick:S.handleDelete},{default:c((()=>[h("删除当前合集")])),_:1},8,["onClick"])])),_:1})])),_:1})):u("",!0)])),_:1})])),_:1})}],["__scopeId","data-v-4803e7ab"]]);export{j as default};
