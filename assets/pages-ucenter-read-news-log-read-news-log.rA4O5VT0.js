import{h as e,B as a,s as t,n as s,l as o,c as i,w as r,i as n,o as l,a as d,e as u,r as m,F as f,b as c,t as h,f as p}from"./index-Cjdy1NX2.js";import{_}from"./uni-dateformat.DsuIX7Ki.js";import{r as g}from"./uni-app.es.lkFlsBrM.js";import{_ as w,a as b}from"./uni-list.CvdGD4v-.js";import{_ as L}from"./uni-load-state.DJGj9ZBe.js";import{_ as y}from"./unicloud-db.Dxqv_OI5.js";import{_ as j}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.Dd5FM1Ai.js";const k=j({data:()=>({isLoading:!0,loadMore:{contentdown:"",contentrefresh:"",contentnomore:""},readNewsLog:[],udbWhere:""}),onLoad(){this.readNewsLog=e("readNewsLog")||[];let t=this.readNewsLog.map((({article_id:e})=>e));console.log(typeof t,t),this.udbWhere=`"_id" in ${JSON.stringify(t)}`,a({title:this.$t("newsLog.navigationBarTitle")})},onPullDownRefresh(){this.refreshData()},onReachBottom(){this.$refs.udb.loadMore()},methods:{refreshData(){this.$refs.udb.loadData({clear:!0},(e=>{t()}))},handleItemClick(e){s({url:"/pages/list/detail?id="+e._id+"&title="+e.title})}}},[["render",function(e,a,t,s,j,k){const N=p,D=g(o("uni-dateformat"),_),M=n,v=g(o("uni-list-item"),w),x=g(o("uni-list"),b),B=g(o("uni-load-state"),L),C=g(o("unicloud-db"),y);return l(),i(M,{class:"container"},{default:r((()=>[d(C,{ref:"udb",where:j.udbWhere,collection:"opendb-news-articles",onLoad:a[0]||(a[0]=e=>0==j.isLoading),onError:a[1]||(a[1]=e=>0==j.isLoading),field:"title,_id","page-size":10},{default:r((({data:e,pagination:a,loading:t,hasMore:s,error:o})=>[d(x,null,{default:r((()=>[(l(!0),u(f,null,m(e,((e,a)=>(l(),i(v,{key:a,clickable:!0,onClick:a=>k.handleItemClick(e)},{body:r((()=>[d(M,{class:"item"},{default:r((()=>[d(N,null,{default:r((()=>[c(h(e.title),1)])),_:2},1024),d(D,{class:"article-date",date:j.readNewsLog[a].last_time,format:"yyyy-MM-dd hh:mm",threshold:[0,0]},null,8,["date"])])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1024),d(B,{onNetworkResume:k.refreshData,state:{data:e,pagination:a,hasMore:s,loading:t,error:o}},null,8,["onNetworkResume","state"])])),_:1},8,["where"])])),_:1})}],["__scopeId","data-v-6e4786f2"]]);export{k as default};
