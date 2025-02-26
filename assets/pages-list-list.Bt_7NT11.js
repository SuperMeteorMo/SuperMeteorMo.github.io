import{e as a,h as t,j as e,k as i,n as s,E as o,C as l,s as n,l as r,c,w as d,i as h,o as p,a as u,f as m,r as g,F as y,A as k,b,g as f,S as w,G as _,t as v}from"./index-DmhPW71T.js";import{_ as T}from"./uni-icons.gpgYDw5Z.js";import{r as C}from"./uni-app.es.H98Hr6Mz.js";import{_ as L}from"./uni-search-bar.CrJPjQNc.js";import{_ as j}from"./bannerScript.qyh1x9kt.js";import{s as D}from"./uni-status-bar.BUzjwixP.js";import{_ as F}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-dateformat.CBIX9MZS.js";import"./store.Cl-8fweu.js";const S=a.database(),R=S.command;R.aggregate;const x=F({components:{statusBar:D},computed:{inputPlaceholder:a=>"en"==t("CURRENT_LANG")?"Please enter the search content":"输入搜索词或完整网址",colList(){return[S.collection("web-script").where(this.where).field('id,name,description,"update-id",host,publisher,publish_date,day,total,user_id,create_date,version,show').getTemp(),S.collection("uni-id-users").field("_id,nickname").getTemp()]}},data:()=>({keyword:"1",dataList:[],pagination:{skip:0,limit:20,total:0},loadingType:"more",currentRequest:null,tabs:[{label:"今日安装",value:"today"},{label:"近期热门",value:"hot"},{label:"最近更新",value:"latest"}],activeTab:"today"}),watch:{keyword(a,t){this.handleSearch(a)}},async onReady(){this.listHight="auto"},async onShow(){this.keyword=e().globalData.searchText,this.keyword&&(this.activeTab="today")},onUnload(){this.dataList=[]},methods:{switchTab(a){this.activeTab=a,this.loadData(!0)},searchClick(a){i(),s({url:"/pages/list/search/search",animationType:"fade-in"})},async handleSearch(){this.pagination.skip=0,await this.loadData(!0)},async loadData(t=!1){if("loading"!==this.loadingType){this.loadingType="loading";try{t&&(this.pagination.skip=0,this.dataList=[]);try{const s=await a.callFunction({name:"web-scripts",data:{type:"getList",data:{skip:this.pagination.skip,limit:this.pagination.limit,show:2,search:this.keyword.trim(),type:this.activeTab}}});var e=await S.collection("web-script").where({_id:R.in(s.result.data.map((a=>a._id)))}).field({name:!0,description:!0,publisher:!0,version:!0,create_date:!0,publish_date:!0,id:!0,"update-id":!0,host:!0,day:!0,total:!0}).get(),i=s.result.data.map((a=>e.result.data.find((t=>t._id==a._id)))).filter((a=>a));this.dataList=t?i:[...this.dataList,...i],this.pagination.total=e.result.total,this.pagination.skip=this.pagination.skip+i.length,this.loadingType=i.length<this.pagination.limit?"noMore":"more",o()}catch(s){this.loadingType="more",l({title:"加载失败",icon:"none"}),o()}n()}catch(s){"AbortError"!==s.name&&(console.error(s),this.loadingType="error")}}},refresh(){this.loadData().then((a=>{n(),console.log("end")}))},loadMore(){this.loadData()},onqueryerror(a){console.error(a)},onpullingdown(a){console.log(a),this.showRefresh=!0,a.pullingDistance>100&&this.refresh()}},onPullDownRefresh(){this.refresh()},onReachBottom(){this.loadMore()}},[["render",function(a,t,e,i,s,o){const l=C(r("uni-icons"),T),n=C(r("uni-search-bar"),L),D=h,F=C(r("bannerScript"),j),S=f,R=w;return p(),c(D,{class:"page-container"},{default:d((()=>[u(D,{class:"search-container",onClick:o.searchClick},{default:d((()=>[u(n,{modelValue:s.keyword,"onUpdate:modelValue":t[0]||(t[0]=a=>s.keyword=a),radius:"30",bgColor:"#FFFFFF",placeholderColor:"#A0AEC0",cancelButton:"none",placeholder:o.inputPlaceholder},{searchIcon:d((()=>[u(l,{type:"search",size:"18",color:"#718096"})])),_:1},8,["modelValue","placeholder"])])),_:1},8,["onClick"]),this.keyword?k("",!0):(p(),c(D,{key:0,class:"nav-container"},{default:d((()=>[(p(!0),m(y,null,g(s.tabs,(a=>(p(),c(D,{key:a.value,class:_(["nav-item",{active:s.activeTab===a.value}]),onClick:t=>o.switchTab(a.value)},{default:d((()=>[b(v(a.label)+" ",1),s.activeTab===a.value?(p(),c(D,{key:0,class:"active-indicator"})):k("",!0)])),_:2},1032,["class","onClick"])))),128))])),_:1})),u(R,{onScrolltolower:o.loadMore,"scroll-y":!0},{default:d((()=>[s.dataList.length?(p(!0),m(y,{key:0},g(s.dataList,((a,t)=>(p(),c(F,{key:a._id,item:a},null,8,["item"])))),128)):k("",!0),u(D,{class:"loading-state"},{default:d((()=>["loading"===s.loadingType?(p(),c(D,{key:0,class:"loading-indicator"})):"noMore"===s.loadingType?(p(),m(y,{key:1},[u(l,{type:"checkmarkempty",size:"24",color:"#718096"}),u(S,{class:"tip-text"},{default:d((()=>[b("已经到底啦")])),_:1})],64)):k("",!0)])),_:1})])),_:1},8,["onScrolltolower"])])),_:1})}],["__scopeId","data-v-f7675ec2"]]);export{x as default};
