import{g as t,j as e,B as a,C as i,h as l,q as o,l as s,c as n,w as d,i as r,o as c,a as u,b as _,t as f,e as m,F as h,A as p,p as g,f as w,D as b}from"./index-DaWOLB7u.js";import{_ as D}from"./uni-dateformat.C1LmtByp.js";import{r as y}from"./uni-app.es.CZKDAWJM.js";import{_ as L,a as j}from"./uni-list.C4t9cK3L.js";import{_ as v}from"./unicloud-db.CZgWySNX.js";import{_ as x}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.DoovmNf9.js";const k=t.database(),$=k.collection("read-news-log");const C=x({data:()=>({id:"",title:"title",formData:{noData:'<p style="text-align:center;color:#666">详情加载中...</p>'}}),computed:{uniStarterConfig:()=>e().globalData.config,where(){return`_id =="${this.id}"`},colList(){return[k.collection("opendb-news-articles").where(this.where).field("user_id,_id,avatar,excerpt,last_modify_date,comment_count,like_count,title,content").getTemp(),k.collection("uni-id-users").field("_id,nickname").getTemp()]}},onLoad(t){t.id&&(this.id=t.id),t.title&&(this.title=t.title,a({title:t.title}))},onReady(){this.id?this.$refs.detail.loadData():i({icon:"none",title:this.$t("listDetail.newsErr")})},onNavigationBarButtonTap(t){"share"==t.type&&this.shareClick()},methods:{$log(...t){console.log("args",...t,this.id)},setReadNewsLog(){let t={article_id:this.id,last_time:Date.now()},e=l("readNewsLog")||[],a=-1;e.forEach((({article_id:e},i)=>{e==t.article_id&&(a=i)})),-1===a?e.push(t):e.splice(a,1,t),o("readNewsLog",e),console.log(e)},setFavorite(){if(t.getCurrentUserInfo().tokenExpired<Date.now())return console.log("未登录用户");let e=this.id,a=Date.now();console.log({article_id:e,last_time:a}),$.where(`"article_id" == "${e}" && "user_id"==$env.uid`).update({last_time:a}).then((({result:{updated:t}})=>{console.log("updated",t),t||$.add({article_id:e}).then((t=>{console.log(t)})).catch((t=>{console.log(t)}))})).catch((t=>{console.log(t)}))},loadData(t){""==this.title&&t[0].title&&(this.title=t[0].title,a({title:t[0].title})),this.setReadNewsLog()},followClick(){i({title:this.$t("listDetail.follow"),icon:"none"})}}},[["render",function(t,e,a,i,l,o){const x=r,k=y(s("uni-dateformat"),D),$=y(s("uni-list-item"),L),C=y(s("uni-list"),j),N=g,B=w,T=b,E=y(s("unicloud-db"),v);return c(),n(x,{class:"article"},{default:d((()=>[u(x,{class:"article-title"},{default:d((()=>[_(f(l.title),1)])),_:1}),u(E,{options:l.formData,collection:o.colList,getone:!0,manual:!0,ref:"detail",foreignKey:"opendb-news-articles.user_id",onLoad:o.loadData},{default:d((({data:t,loading:e,error:a,options:i})=>[!e&&t?(c(),m(h,{key:0},[u(C,{border:!1},{default:d((()=>[u($,{thumbSize:"lg",thumb:t.image},{body:d((()=>[u(x,{class:"header-content"},{default:d((()=>[u(x,{class:"uni-title"},{default:d((()=>[_(f(t.user_id&&t.user_id[0]&&t.user_id[0].nickname||"未知"),1)])),_:2},1024)])),_:2},1024)])),footer:d((()=>[u(x,{class:"footer"},{default:d((()=>[u(x,{class:"uni-note"},{default:d((()=>[_("更新于 "),u(k,{date:t.last_modify_date,format:"yyyy-MM-dd hh:mm",threshold:[6e4,2592e6]},null,8,["date"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["thumb"])])),_:2},1024),u(x,{class:"banner"},{default:d((()=>[u(N,{class:"banner-img",src:t.avatar,mode:"scaleToFill"},null,8,["src"]),u(x,{class:"banner-title"},{default:d((()=>[u(B,{class:"uni-ellipsis"},{default:d((()=>[_(f(t.excerpt),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),u(x,{class:"article-content"},{default:d((()=>[u(T,{nodes:t.content},null,8,["nodes"])])),_:2},1024)],64)):p("",!0)])),_:1},8,["options","collection","onLoad"])])),_:1})}],["__scopeId","data-v-d8f3110e"]]);export{C as default};
