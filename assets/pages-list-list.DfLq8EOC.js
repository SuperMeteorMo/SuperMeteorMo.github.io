import{g as e,h as o,j as r,k as s,n as a,s as t,l as n,c as l,w as i,i as c,o as d,a as h,e as u,r as p,F as m,S as f}from"./index-BpteF7XO.js";import{_ as w}from"./uni-icons.ChP_gS18.js";import{r as g}from"./uni-app.es.CzYWKprg.js";import{_}from"./uni-search-bar.BFa6FLSj.js";import{_ as y}from"./bannerScript.p2572FDq.js";import{_ as b}from"./uni-load-state.BCdpJSLA.js";import{_ as k}from"./unicloud-db.CtB8qMyV.js";import{s as C}from"./uni-status-bar.A8ETf5gu.js";import{_ as j}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-dateformat.ChFUqbug.js";let R;const M=e.database();const F=j({components:{statusBar:C},computed:{inputPlaceholder:e=>"en"==o("CURRENT_LANG")?"Please enter the search content":"请输入搜索内容",colList(){return[M.collection("web-script").where(this.where).field('id,name,description,"update-id",host,publisher,publish_date,day,total,user_id,create_date,version,show').getTemp(),M.collection("uni-id-users").field("_id,nickname").getTemp()]}},data:()=>({where:'"show" == 2',keyword:"",showRefresh:!1,listHight:0}),watch:{keyword(e,o){let r='"show" == 2';this.where=e?r+`&& /${e}/.test(name)`:r,console.log("搜索",this.where)}},async onReady(){this.listHight="auto",R=this.$refs.udb},async onShow(){this.keyword=r().globalData.searchText,console.log("显示",this.keyword)},methods:{searchClick(e){s(),a({url:"/pages/list/search/search",animationType:"fade-in"})},retry(){this.refresh()},refresh(){R.loadData({clear:!0},(()=>{t(),console.log("end")})),console.log("refresh")},loadMore(){R.loadMore()},onqueryerror(e){console.error(e)},onpullingdown(e){console.log(e),this.showRefresh=!0,e.pullingDistance>100&&this.refresh()}},onPullDownRefresh(){this.refresh()},onReachBottom(){this.loadMore()}},[["render",function(e,o,r,s,a,t){const C=g(n("uni-icons"),w),j=g(n("uni-search-bar"),_),R=c,M=g(n("bannerScript"),y),F=g(n("uni-load-state"),b),x=f,D=g(n("unicloud-db"),k);return d(),l(R,{class:"page-container"},{default:i((()=>[h(R,{class:"search-container",onClick:t.searchClick},{default:i((()=>[h(j,{modelValue:a.keyword,"onUpdate:modelValue":o[0]||(o[0]=e=>a.keyword=e),radius:"30",bgColor:"#FFFFFF",placeholderColor:"#A0AEC0",cancelButton:"none",placeholder:t.inputPlaceholder,onConfirm:e.searchConfirm},{searchIcon:i((()=>[h(C,{type:"search",size:"18",color:"#718096"})])),_:1},8,["modelValue","placeholder","onConfirm"])])),_:1},8,["onClick"]),h(D,{ref:"udb",orderby:"day desc",where:a.where,onError:t.onqueryerror,collection:"web-script","page-size":10},{default:i((({data:e,pagination:o,hasMore:r,loading:s,error:a,options:n})=>[h(x,{class:"content-scroll","scroll-y":"","show-scrollbar":!1,enhanced:!0,bounces:!1},{default:i((()=>[h(R,{class:"list-container"},{default:i((()=>[(d(!0),u(m,null,p(e,((e,o)=>(d(),l(M,{key:o,item:e},null,8,["item"])))),128))])),_:2},1024),h(R,{class:"loading-state"},{default:i((()=>[h(F,{onNetworkResume:t.refresh,state:{data:e,pagination:o,hasMore:r,loading:s,error:a},onLoadMore:t.loadMore},null,8,["onNetworkResume","state","onLoadMore"])])),_:2},1024)])),_:2},1024)])),_:1},8,["where","onError"])])),_:1})}],["__scopeId","data-v-5d79d710"]]);export{F as default};
