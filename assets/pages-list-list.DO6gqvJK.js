import{g as a,h as e,j as t,k as i,n as o,E as s,C as n,s as r,l,c as d,w as c,i as h,o as p,a as u,e as m,r as g,F as y,A as f,b as _,f as k,S as w}from"./index-Cjdy1NX2.js";import{_ as b}from"./uni-icons.Dd5FM1Ai.js";import{r as T}from"./uni-app.es.lkFlsBrM.js";import{_ as C}from"./uni-search-bar.CNmyesPq.js";import{_ as L}from"./bannerScript.dgk-FiyJ.js";import{s as j}from"./uni-status-bar.C2EeKtKb.js";import{_ as D}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-dateformat.DsuIX7Ki.js";const F=a.database(),S=F.command;S.aggregate;const R=D({components:{statusBar:j},computed:{inputPlaceholder:a=>"en"==e("CURRENT_LANG")?"Please enter the search content":"输入搜索词或完整网址",colList(){return[F.collection("web-script").where(this.where).field('id,name,description,"update-id",host,publisher,publish_date,day,total,user_id,create_date,version,show').getTemp(),F.collection("uni-id-users").field("_id,nickname").getTemp()]}},data:()=>({keyword:"1",dataList:[],pagination:{skip:0,limit:20,total:0},loadingType:"more",currentRequest:null}),watch:{keyword(a,e){this.handleSearch(a)}},async onReady(){this.listHight="auto"},async onShow(){this.keyword=t().globalData.searchText},onUnload(){this.dataList=[]},methods:{searchClick(a){i(),o({url:"/pages/list/search/search",animationType:"fade-in"})},async handleSearch(){this.pagination.skip=0,await this.loadData(!0)},async loadData(e=!1){if("loading"!==this.loadingType){this.loadingType="loading";try{e&&(this.pagination.skip=0,this.dataList=[]);try{const o=await a.callFunction({name:"scripts",data:{type:"getList",data:{skip:this.pagination.skip,limit:this.pagination.limit,show:2,search:this.keyword.trim()}}});var t=await F.collection("web-script").where({_id:S.in(o.result.data.map((a=>a._id)))}).field({name:!0,description:!0,publisher:!0,version:!0,create_date:!0,publish_date:!0,id:!0,"update-id":!0,host:!0,day:!0,total:!0}).get(),i=o.result.data.map((a=>t.result.data.find((e=>e._id==a._id)))).filter((a=>a));this.dataList=e?i:[...this.dataList,...i],this.pagination.total=t.result.total,this.pagination.skip=this.pagination.skip+i.length,this.loadingType=i.length<this.pagination.limit?"noMore":"more",s()}catch(o){this.loadingType="more",n({title:"加载失败",icon:"none"}),s()}r()}catch(o){"AbortError"!==o.name&&(console.error(o),this.loadingType="error")}}},refresh(){this.loadData().then((a=>{r(),console.log("end")}))},loadMore(){this.loadData()},onqueryerror(a){console.error(a)},onpullingdown(a){console.log(a),this.showRefresh=!0,a.pullingDistance>100&&this.refresh()}},onPullDownRefresh(){this.refresh()},onReachBottom(){this.loadMore()}},[["render",function(a,e,t,i,o,s){const n=T(l("uni-icons"),b),r=T(l("uni-search-bar"),C),j=h,D=T(l("bannerScript"),L),F=k,S=w;return p(),d(j,{class:"page-container"},{default:c((()=>[u(j,{class:"search-container",onClick:s.searchClick},{default:c((()=>[u(r,{modelValue:o.keyword,"onUpdate:modelValue":e[0]||(e[0]=a=>o.keyword=a),radius:"30",bgColor:"#FFFFFF",placeholderColor:"#A0AEC0",cancelButton:"none",placeholder:s.inputPlaceholder},{searchIcon:c((()=>[u(n,{type:"search",size:"18",color:"#718096"})])),_:1},8,["modelValue","placeholder"])])),_:1},8,["onClick"]),u(S,{onScrolltolower:s.loadMore,"scroll-y":!0},{default:c((()=>[o.dataList.length?(p(!0),m(y,{key:0},g(o.dataList,((a,e)=>(p(),d(D,{key:a._id,item:a},null,8,["item"])))),128)):f("",!0),u(j,{class:"loading-state"},{default:c((()=>["loading"===o.loadingType?(p(),d(j,{key:0,class:"loading-indicator"})):"noMore"===o.loadingType?(p(),m(y,{key:1},[u(n,{type:"checkmarkempty",size:"24",color:"#718096"}),u(F,{class:"tip-text"},{default:c((()=>[_("已经到底啦")])),_:1})],64)):f("",!0)])),_:1})])),_:1},8,["onScrolltolower"])])),_:1})}],["__scopeId","data-v-e1794f70"]]);export{R as default};
