import{e,h as a,j as s,k as t,n as o,s as r,l,c as i,w as n,i as d,o as c,a as u,m as h,f as m,r as f,F as p,b as _,t as g,p as y,g as w}from"./index-BJZc63rs.js";import{_ as b}from"./uni-search-bar.BsB3_u24.js";import{r as k}from"./uni-app.es.4VuEEZqp.js";import{_ as j}from"./uni-dateformat.Bj17-449.js";import{_ as M,a as R}from"./uni-list.eIiMOQXK.js";import{_ as T}from"./uni-load-state.CsTXC1PT.js";import{_ as v}from"./unicloud-db.CVpjWgmP.js";import{s as x}from"./uni-status-bar.DIu1Ojh9.js";import{_ as D}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.TNQD-_IA.js";import"./uni-load-more.COi_Ys_S.js";let L;const C=e.database();const B=D({components:{statusBar:x},computed:{inputPlaceholder:e=>"en"==a("CURRENT_LANG")?"Please enter the search content":"请输入搜索内容",colList(){return[C.collection("opendb-news-articles").where(this.where).field("avatar,title,last_modify_date,user_id").getTemp(),C.collection("uni-id-users").field("_id,nickname").getTemp()]}},data:()=>({where:'"article_status" == 1',keyword:"",showRefresh:!1,listHight:0}),watch:{keyword(e,a){let s='"article_status" == 1 ';this.where=e?s+`&& /${e}/.test(title)`:s}},async onReady(){this.listHight="auto",L=this.$refs.udb},async onShow(){this.keyword=s().globalData.searchText,s().globalData.searchText=""},methods:{searchClick(e){t(),o({url:"/pages/article/search/search",animationType:"fade-in"})},retry(){this.refresh()},refresh(){L.loadData({clear:!0},(()=>{r(),console.log("end")})),console.log("refresh")},loadMore(){L.loadMore()},onqueryerror(e){console.error(e)},onpullingdown(e){console.log(e),this.showRefresh=!0,e.pullingDistance>100&&this.refresh()}},onPullDownRefresh(){this.refresh()},onReachBottom(){this.loadMore()}},[["render",function(e,a,s,t,o,r){const x=k(l("uni-search-bar"),b),D=d,L=y,C=w,B=k(l("uni-dateformat"),j),E=k(l("uni-list-item"),M),H=k(l("uni-load-state"),T),N=k(l("uni-list"),R),P=k(l("unicloud-db"),v);return c(),i(D,{class:"pages"},{default:n((()=>[u(D,{class:"uni-search-box"},{default:n((()=>[u(x,{modelValue:o.keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>o.keyword=e),ref:"searchBar",radius:"100",cancelButton:"none",disabled:"",placeholder:r.inputPlaceholder},null,8,["modelValue","placeholder"]),u(D,{class:"cover-search-bar",onClick:r.searchClick},null,8,["onClick"])])),_:1}),u(P,{ref:"udb",onError:r.onqueryerror,collection:r.colList,"page-size":10},{default:n((({data:e,pagination:a,hasMore:s,loading:t,error:l,options:d})=>[u(N,{class:"uni-list",border:!1,style:h({height:o.listHight})},{default:n((()=>[(c(!0),m(p,null,f(e,((e,a)=>(c(),i(E,{to:"/pages/article/detail?id="+e._id+"&title="+e.title,key:a},{header:n((()=>[u(L,{class:"avatar",src:e.avatar,mode:"scaleToFill"},null,8,["src"])])),body:n((()=>[u(D,{class:"main"},{default:n((()=>[u(C,{class:"title"},{default:n((()=>[_(g(e.title),1)])),_:2},1024),u(D,{class:"info"},{default:n((()=>[u(C,{class:"author"},{default:n((()=>[_(g(e.user_id[0]?e.user_id[0].nickname:""),1)])),_:2},1024),u(B,{class:"last_modify_date",date:e.last_modify_date,format:"yyyy-MM-dd",threshold:[6e4,2592e6]},null,8,["date"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])))),128)),u(H,{class:"load-state",onNetworkResume:r.refresh,state:{data:e,pagination:a,hasMore:s,loading:t,error:l},onLoadMore:r.loadMore},null,8,["onNetworkResume","state","onLoadMore"])])),_:2},1032,["style"])])),_:1},8,["onError","collection"])])),_:1})}],["__scopeId","data-v-c55ee84b"]]);export{B as default};
