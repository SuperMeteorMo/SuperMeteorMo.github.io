import{e,n as t,l,c as a,w as o,i as s,o as d,a as n,b as i,t as r,A as u,g as c,$ as _}from"./index-ClWtyYka.js";import{_ as f}from"./uni-load-more.BCf5jNp6.js";import{r as m}from"./uni-app.es.-FEe5jo2.js";import{_ as p}from"./uni-dateformat.DCst6t36.js";import{_ as h}from"./unicloud-db.CzBPaDQe.js";import{e as b}from"./web-like-collection.D3Ww2TXv.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";e.database();const k=y({data:()=>({queryWhere:"",collectionList:"web-like-collection",loadMore:{contentdown:"",contentrefresh:"",contentnomore:""},options:{...b}}),onLoad(e){this._id=e.id},onReady(){this._id&&(this.queryWhere='_id=="'+this._id+'"')},methods:{handleUpdate(){t({url:"./edit?id="+this._id,events:{refreshData:()=>{this.$refs.udb.loadData({clear:!0})}}})},handleDelete(){this.$refs.udb.remove(this._id,{success:e=>{t({url:"./list"})}})}}},[["render",function(e,t,b,y,k,j){const w=s,g=m(l("uni-load-more"),f),x=c,D=m(l("uni-dateformat"),p),v=m(l("unicloud-db"),h),C=_;return d(),a(w,{class:"container"},{default:o((()=>[n(v,{ref:"udb",options:k.options,collection:k.collectionList,field:"user_id,collect_id,sort,create_time",where:k.queryWhere,getone:!0,manual:!0},{default:o((({data:e,loading:t,error:l,options:s})=>[l?(d(),a(w,{key:0},{default:o((()=>[i(r(l.message),1)])),_:2},1024)):t?(d(),a(w,{key:1},{default:o((()=>[n(g,{contentText:k.loadMore,status:"loading"},null,8,["contentText"])])),_:1})):e?(d(),a(w,{key:2},{default:o((()=>[n(w,null,{default:o((()=>[n(x,null,{default:o((()=>[i("user_id")])),_:1}),n(x,null,{default:o((()=>[i(r(e.user_id),1)])),_:2},1024)])),_:2},1024),n(w,null,{default:o((()=>[n(x,null,{default:o((()=>[i("collect_id")])),_:1}),n(x,null,{default:o((()=>[i(r(e.collect_id),1)])),_:2},1024)])),_:2},1024),n(w,null,{default:o((()=>[n(x,null,{default:o((()=>[i("sort")])),_:1}),n(x,null,{default:o((()=>[i(r(e.sort),1)])),_:2},1024)])),_:2},1024),n(w,null,{default:o((()=>[n(x,null,{default:o((()=>[i("create_time")])),_:1}),n(D,{threshold:[0,0],date:e.create_time},null,8,["date"])])),_:2},1024)])),_:2},1024)):u("",!0)])),_:1},8,["options","collection","where"]),n(w,{class:"btns"},{default:o((()=>[n(C,{type:"primary",onClick:j.handleUpdate},{default:o((()=>[i("修改")])),_:1},8,["onClick"]),n(C,{type:"warn",class:"btn-delete",onClick:j.handleDelete},{default:o((()=>[i("删除")])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-74ef853b"]]);export{k as default};
