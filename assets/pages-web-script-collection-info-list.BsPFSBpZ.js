import{e as a,s as e,n as s,l as o,c as t,w as l,i,o as r,a as n,b as d,t as c,f as u,r as f,F as m,A as p,g as _}from"./index-4EZ8v3QT.js";import{_ as b}from"./uni-icons.5yTMgLsQ.js";import{r as h}from"./uni-app.es.Bc_DzAQZ.js";import{_ as k}from"./uni-load-more.CYACisWm.js";import{_ as w}from"./unicloud-db.HbFNxVLB.js";import{_ as g}from"./_plugin-vue_export-helper.BCo6x5W8.js";a.database();const j=g({data:()=>({collectionList:"web-script-collection-info",loadMore:{contentdown:"",contentrefresh:"",contentnomore:""}}),onPullDownRefresh(){this.$refs.udb.loadData({clear:!0},(()=>{e()}))},onReachBottom(){this.$refs.udb.loadMore()},methods:{handleItemClick(a){s({url:"./detail?id="+a})},fabClick(){s({url:"./add",events:{refreshData:()=>{this.$refs.udb.loadData({clear:!0})}}})}}},[["render",function(a,e,s,g,j,C){const D=i,M=_,y=h(o("uni-icons"),b),v=h(o("uni-load-more"),k),x=h(o("unicloud-db"),w);return r(),t(D,{class:"container"},{default:l((()=>[n(x,{ref:"udb",collection:j.collectionList,field:"name,description,show",where:"user_id=='67babdf5bf7490a7f48fadb5'"},{default:l((({data:a,pagination:e,loading:s,hasMore:o,error:i})=>[i?(r(),t(D,{key:0,class:"error-message"},{default:l((()=>[d(c(i.message),1)])),_:2},1024)):a?(r(),t(D,{key:1,class:"data-list"},{default:l((()=>[(r(!0),u(m,null,f(a,((a,e)=>(r(),t(D,{key:e,class:"list-item",onClick:e=>C.handleItemClick(a._id)},{default:l((()=>[n(D,{class:"item-content"},{default:l((()=>[n(M,{class:"item-title"},{default:l((()=>[d(c(a.name),1)])),_:2},1024),n(M,{class:"item-desc"},{default:l((()=>[d(c(a.description||"暂无描述"),1)])),_:2},1024)])),_:2},1024),n(y,{type:"forward",size:"20",class:"arrow-icon"})])),_:2},1032,["onClick"])))),128))])),_:2},1024)):p("",!0),n(v,{status:s?"loading":o?"more":"noMore"},null,8,["status"])])),_:1},8,["collection"])])),_:1})}],["__scopeId","data-v-48af4578"]]);export{j as default};
