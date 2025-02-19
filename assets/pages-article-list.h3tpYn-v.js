import{g as e,h as a,j as s,k as t,n as o,s as r,l,c as i,w as n,i as d,o as c,a as u,m as h,e as m,r as f,F as p,b as _,t as y,p as g,f as w}from"./index-BaDKg7nY.js";import{_ as b}from"./uni-search-bar.DV_h8FkN.js";import{r as k}from"./uni-app.es.DQ3KnF-q.js";import{_ as j}from"./uni-dateformat.H2IiAnbr.js";import{_ as M,a as R}from"./uni-list.D08ni6qu.js";import{_ as v}from"./uni-load-state.DOQJg8Tq.js";import{_ as x}from"./unicloud-db.cRV13bh5.js";import{s as T}from"./uni-status-bar.BacAQCTp.js";import{_ as C}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.CriUYiHV.js";let D;const B=e.database();const L=C({components:{statusBar:T},computed:{inputPlaceholder:e=>"en"==a("CURRENT_LANG")?"Please enter the search content":"请输入搜索内容",colList(){return[B.collection("opendb-news-articles").where(this.where).field("avatar,title,last_modify_date,user_id").getTemp(),B.collection("uni-id-users").field("_id,nickname").getTemp()]}},data:()=>({where:'"article_status" == 1',keyword:"",showRefresh:!1,listHight:0}),watch:{keyword(e,a){let s='"article_status" == 1 ';this.where=e?s+`&& /${e}/.test(title)`:s}},async onReady(){this.listHight="auto",D=this.$refs.udb},async onShow(){this.keyword=s().globalData.searchText,s().globalData.searchText=""},methods:{searchClick(e){t(),o({url:"/pages/article/search/search",animationType:"fade-in"})},retry(){this.refresh()},refresh(){D.loadData({clear:!0},(()=>{r(),console.log("end")})),console.log("refresh")},loadMore(){D.loadMore()},onqueryerror(e){console.error(e)},onpullingdown(e){console.log(e),this.showRefresh=!0,e.pullingDistance>100&&this.refresh()}},onPullDownRefresh(){this.refresh()},onReachBottom(){this.loadMore()}},[["render",function(e,a,s,t,o,r){const T=k(l("uni-search-bar"),b),C=d,D=g,B=w,L=k(l("uni-dateformat"),j),N=k(l("uni-list-item"),M),P=k(l("uni-load-state"),v),E=k(l("uni-list"),R),H=k(l("unicloud-db"),x);return c(),i(C,{class:"pages"},{default:n((()=>[u(C,{class:"uni-search-box"},{default:n((()=>[u(T,{modelValue:o.keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>o.keyword=e),ref:"searchBar",radius:"100",cancelButton:"none",disabled:"",placeholder:r.inputPlaceholder},null,8,["modelValue","placeholder"]),u(C,{class:"cover-search-bar",onClick:r.searchClick},null,8,["onClick"])])),_:1}),u(H,{ref:"udb",onError:r.onqueryerror,collection:r.colList,"page-size":10},{default:n((({data:e,pagination:a,hasMore:s,loading:t,error:l,options:d})=>[u(E,{class:"uni-list",border:!1,style:h({height:o.listHight})},{default:n((()=>[(c(!0),m(p,null,f(e,((e,a)=>(c(),i(N,{to:"/pages/article/detail?id="+e._id+"&title="+e.title,key:a},{header:n((()=>[u(D,{class:"avatar",src:e.avatar,mode:"scaleToFill"},null,8,["src"])])),body:n((()=>[u(C,{class:"main"},{default:n((()=>[u(B,{class:"title"},{default:n((()=>[_(y(e.title),1)])),_:2},1024),u(C,{class:"info"},{default:n((()=>[u(B,{class:"author"},{default:n((()=>[_(y(e.user_id[0]?e.user_id[0].nickname:""),1)])),_:2},1024),u(L,{class:"last_modify_date",date:e.last_modify_date,format:"yyyy-MM-dd",threshold:[6e4,2592e6]},null,8,["date"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])))),128)),u(P,{class:"load-state",onNetworkResume:r.refresh,state:{data:e,pagination:a,hasMore:s,loading:t,error:l},onLoadMore:r.loadMore},null,8,["onNetworkResume","state","onLoadMore"])])),_:2},1032,["style"])])),_:1},8,["onError","collection"])])),_:1})}],["__scopeId","data-v-c55ee84b"]]);export{L as default};
