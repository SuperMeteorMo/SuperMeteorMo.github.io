import{h as e,B as a,s as t,n as o,l as s,c as i,w as r,i as n,o as l,a as d,f as u,r as m,F as f,b as c,t as h,g as p}from"./index-4EZ8v3QT.js";import{_ as g}from"./uni-dateformat.BSryRunN.js";import{r as _}from"./uni-app.es.Bc_DzAQZ.js";import{_ as w,a as b}from"./uni-list.Bq6la1b0.js";import{_ as L}from"./uni-load-state.C8MwPdw3.js";import{_ as j}from"./unicloud-db.HbFNxVLB.js";import{_ as k}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.5yTMgLsQ.js";import"./uni-load-more.CYACisWm.js";const y=k({data:()=>({isLoading:!0,loadMore:{contentdown:"",contentrefresh:"",contentnomore:""},readNewsLog:[],udbWhere:""}),onLoad(){this.readNewsLog=e("readNewsLog")||[];let t=this.readNewsLog.map((({article_id:e})=>e));console.log(typeof t,t),this.udbWhere=`"_id" in ${JSON.stringify(t)}`,a({title:this.$t("newsLog.navigationBarTitle")})},onPullDownRefresh(){this.refreshData()},onReachBottom(){this.$refs.udb.loadMore()},methods:{refreshData(){this.$refs.udb.loadData({clear:!0},(e=>{t()}))},handleItemClick(e){o({url:"/pages/list/detail?id="+e._id+"&title="+e.title})}}},[["render",function(e,a,t,o,k,y){const N=p,M=_(s("uni-dateformat"),g),D=n,C=_(s("uni-list-item"),w),I=_(s("uni-list"),b),R=_(s("uni-load-state"),L),$=_(s("unicloud-db"),j);return l(),i(D,{class:"container"},{default:r((()=>[d($,{ref:"udb",where:k.udbWhere,collection:"opendb-news-articles",onLoad:a[0]||(a[0]=e=>0==k.isLoading),onError:a[1]||(a[1]=e=>0==k.isLoading),field:"title,_id","page-size":10},{default:r((({data:e,pagination:a,loading:t,hasMore:o,error:s})=>[d(I,null,{default:r((()=>[(l(!0),u(f,null,m(e,((e,a)=>(l(),i(C,{key:a,clickable:!0,onClick:a=>y.handleItemClick(e)},{body:r((()=>[d(D,{class:"item"},{default:r((()=>[d(N,null,{default:r((()=>[c(h(e.title),1)])),_:2},1024),d(M,{class:"article-date",date:k.readNewsLog[a].last_time,format:"yyyy-MM-dd hh:mm",threshold:[0,0]},null,8,["date"])])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1024),d(R,{onNetworkResume:y.refreshData,state:{data:e,pagination:a,hasMore:o,loading:t,error:s}},null,8,["onNetworkResume","state"])])),_:1},8,["where"])])),_:1})}],["__scopeId","data-v-6e4786f2"]]);export{y as default};
