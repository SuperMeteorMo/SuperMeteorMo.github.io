import{e,s as t,C as l,n as s,l as o,c as a,w as c,i,o as n,a as d,b as r,t as u,f,r as _,F as m,g as p,A as h,ab as y}from"./index-B3GYLZIM.js";import{_ as b}from"./uni-icons.AdRFqC9u.js";import{r as g}from"./uni-app.es.BTBElOEf.js";import{_ as k}from"./uni-dateformat.j55iOt7E.js";import{_ as w}from"./uni-load-more.4g5WHqXS.js";import{_ as C}from"./unicloud-db.gjk_y6gA.js";import{s as I}from"./store.DmIwV_rQ.js";import{_ as j}from"./_plugin-vue_export-helper.BCo6x5W8.js";const v=e.database();const M=j({data:()=>({collectionList:"web-like-collection",loadMore:{contentdown:"",contentrefresh:"",contentnomore:""},userInfo:{},id:null,host:null}),onLoad(e){this.userInfo=I.userInfo,console.log(" 用户",I,e),this.id=e.id,this.host=e.host,this.where={user_id:I.userInfo._id},this.id&&(this.where.collect_user_id=I.userInfo._id)},computed:{colList(){return console.log(" 查询",I.userInfo),[v.collection("web-like-collection").where(this.where).field("collect_id,create_time,sort").orderBy("sort","desc").getTemp(),v.collection("web-script-collection-info").field("_id,name,description,create_time,user_id").getTemp()]}},onPullDownRefresh(){this.$refs.udb.loadData({clear:!0},(()=>{t()}))},onReachBottom(){this.$refs.udb.loadMore()},methods:{async add(e){var t=await v.collection("web-script-collection").where({collect_id:e,id:this.id,host:this.host}).count();console.log("存在",t),t.result.total?l({title:"已在合集中",icon:"none"}):(await v.collection("web-script-collection").add({collect_id:e,id:this.id,host:this.host,sort:0}),l({title:"加入成功",icon:"none"}))},handleItemClick(e){e.collect_id.length?s({url:"/pages/web-script-collection-info/detail?id="+e.collect_id[0]._id}):l({title:"该合集已被删除",icon:"none"})},fabClick(){s({url:"/pages/web-script-collection-info/add",events:{refreshData:()=>{this.$refs.udb.loadData({clear:!0})}}})}}},[["render",function(e,t,l,s,I,j){const v=p,M=i,D=g(o("uni-icons"),b),L=g(o("uni-dateformat"),k),x=g(o("uni-load-more"),w),z=g(o("unicloud-db"),C);return n(),a(M,{class:"container"},{default:c((()=>[d(M,{class:"header"},{default:c((()=>[d(v,{class:"title"},{default:c((()=>[r("⭐ 我的收藏")])),_:1})])),_:1}),d(M,{class:"main-content"},{default:c((()=>[d(M,{class:"add-btn",onClick:j.fabClick},{default:c((()=>[d(M,{class:"btn-content"},{default:c((()=>[d(v,{class:"icon"},{default:c((()=>[r("＋")])),_:1}),d(v,null,{default:c((()=>[r("新建合集")])),_:1})])),_:1})])),_:1},8,["onClick"]),d(z,{ref:"udb",collection:j.colList},{default:c((({data:e,pagination:t,loading:l,hasMore:s,error:o})=>[o?(n(),a(M,{key:0,class:"card error-card"},{default:c((()=>[d(v,{class:"section-title warning"},{default:c((()=>[r("⚠️ 数据加载错误")])),_:1}),d(v,{class:"error-msg"},{default:c((()=>[r(u(o.message),1)])),_:2},1024)])),_:2},1024)):e?(n(),a(M,{key:1,class:"card list-card"},{default:c((()=>[d(M,{class:"list-header"},{default:c((()=>[d(v,{class:"section-title"},{default:c((()=>[r("📚 已收藏 "+u(e.length)+" 个合集",1)])),_:2},1024),d(v,{class:"sort-tag"},{default:c((()=>[r("排序方式：最近收藏")])),_:1})])),_:2},1024),d(M,{class:"collection-list"},{default:c((()=>[(n(!0),f(m,null,_(e,((e,t)=>(n(),a(M,{key:t,class:"collection-item",onClick:t=>j.handleItemClick(e)},{default:c((()=>[d(M,{class:"collection-icon"},{default:c((()=>[d(v,{class:"iconfont"},{default:c((()=>[r("📁")])),_:1})])),_:1}),d(M,{class:"collection-content"},{default:c((()=>[d(M,{class:"title-wrapper"},{default:c((()=>[d(v,{class:"collection-title"},{default:c((()=>{var t;return[r(u((null==(t=e.collect_id[0])?void 0:t.name)||"该合集已被删除"),1)]})),_:2},1024),e.collect_id.length?(n(),a(M,{key:0,class:"collection-status"},{default:c((()=>[e.collect_id[0].user_id==I.userInfo._id?(n(),a(M,{key:0,class:"creator-group"},{default:c((()=>[I.id?h("",!0):(n(),a(M,{key:0,class:"status-tag type-creator"},{default:c((()=>[d(D,{type:"person",size:"14",color:"#1677ff"}),d(v,null,{default:c((()=>[r("我创建的")])),_:1})])),_:1})),I.id?(n(),a(M,{key:1,class:"action-btn",onClick:y((t=>j.add(e.collect_id[0]._id)),["stop"])},{default:c((()=>[d(D,{type:"plus-filled",size:"16",color:"#fff"}),d(v,null,{default:c((()=>[r("添加至此")])),_:1})])),_:2},1032,["onClick"])):h("",!0)])),_:2},1024)):(n(),a(M,{key:1,class:"status-tag type-collector"},{default:c((()=>[d(D,{type:"star-filled",size:"14",color:"#52c41a"}),d(v,null,{default:c((()=>[r("已收藏")])),_:1})])),_:1}))])),_:2},1024)):h("",!0)])),_:2},1024),d(v,{class:"collection-desc"},{default:c((()=>{var t;return[r(u((null==(t=e.collect_id[0])?void 0:t.description)||"暂无详细描述"),1)]})),_:2},1024),d(M,{class:"collection-meta"},{default:c((()=>[d(L,{date:e.create_time,format:"yyyy/MM/dd hh:mm",class:"time-text"},null,8,["date"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1024),d(x,{status:l?"loading":s?"more":"noMore"},null,8,["status"])])),_:2},1024)):(n(),a(M,{key:2,class:"card empty-card"},{default:c((()=>[d(M,{class:"empty-content"},{default:c((()=>[d(v,{class:"empty-icon"},{default:c((()=>[r("📭")])),_:1}),d(v,{class:"empty-title"},{default:c((()=>[r("收藏夹空空如也")])),_:1}),d(v,{class:"empty-subtitle"},{default:c((()=>[r("点击下方按钮创建第一个合集")])),_:1})])),_:1})])),_:1}))])),_:1},8,["collection"])])),_:1})])),_:1})}],["__scopeId","data-v-c65658d5"]]);export{M as default};
