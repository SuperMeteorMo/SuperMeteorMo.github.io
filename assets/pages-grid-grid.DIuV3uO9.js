import{g as e,C as a,n as i,l as s,c as n,w as r,i as t,o as l,a as o,e as d,r as c,F as u,b as g,t as p,p as f,G as h,f as m,A as b,H as _}from"./index-CupAtnve.js";import{_ as x}from"./unicloud-db.CXBgCWQY.js";import{r as k}from"./uni-app.es.TiEKNA9k.js";import{_ as w,a as L}from"./uni-grid.DHqrqUuW.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";const y=v({data:()=>({gridList:[],current:0,hasLogin:!1}),onShow(){this.hasLogin=e.getCurrentUserInfo().tokenExpired>Date.now()},onLoad(){let e=[];for(var a=0;a<3;a++)e.push(this.$t("grid.visibleToAll"));for(a=0;a<3;a++)e.push(this.$t("grid.invisibleToTourists"));for(a=0;a<3;a++)e.push(this.$t("grid.adminVisible"));this.gridList=e},methods:{change(e){a({title:this.$t("grid.clickTip")+` ${e.detail.index+1} `+this.$t("grid.clickTipGrid"),icon:"none"})},onqueryload(e){},changeSwiper(e){this.current=e.detail.current},clickBannerItem(e){e.open_url&&i({url:"/uni_modules/uni-id-pages/pages/common/webview/webview?url="+e.open_url+"&title="+e.title,success:e=>{},fail:()=>{},complete:()=>{}})}}},[["render",function(e,a,i,v,y,C){const $=f,j=_,I=h,T=k(s("unicloud-db"),x),B=m,F=t,H=k(s("uni-grid-item"),w),S=k(s("uni-grid"),L);return l(),n(F,{class:"warp"},{default:r((()=>[o(T,{ref:"bannerdb",collection:"opendb-banner",field:"_id,bannerfile,open_url,title",onLoad:C.onqueryload},{default:r((({data:e,loading:a,error:i,options:s})=>[a||e.length?(l(),n(I,{key:1,class:"swiper-box",onChange:C.changeSwiper,current:y.current,"indicator-dots":""},{default:r((()=>[(l(!0),d(u,null,c(e,((e,a)=>(l(),n(j,{key:e._id},{default:r((()=>[o($,{class:"banner-image",src:e.bannerfile.url,mode:"aspectFill",onClick:a=>C.clickBannerItem(e),draggable:!1},null,8,["src","onClick"])])),_:2},1024)))),128))])),_:2},1032,["onChange","current"])):(l(),n($,{key:0,class:"banner-image",src:"/assets/headers-BiHnxiJ5.png",mode:"aspectFill",draggable:!1}))])),_:1},8,["onLoad"]),o(F,{class:"section-box"},{default:r((()=>[o(B,{class:"decoration"}),o(B,{class:"section-text"},{default:r((()=>[g(p(e.$t("grid.grid")),1)])),_:1})])),_:1}),o(F,{class:"example-body"},{default:r((()=>[o(S,{column:3,highlight:!0,onChange:C.change},{default:r((()=>[(l(!0),d(u,null,c(y.gridList,((a,i)=>(l(),d(u,null,[i<3||i>2&&i<6&&y.hasLogin||i>5&&e.uniIDHasRole("admin")?(l(),n(H,{index:i,key:i},{default:r((()=>[o(F,{class:"grid-item-box",style:{"background-color":"#fff"}},{default:r((()=>[o(B,{class:"big-number"},{default:r((()=>[g(p(i+1),1)])),_:2},1024),o(B,{class:"text"},{default:r((()=>[g(p(a),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["index"])):b("",!0)],64)))),256))])),_:1},8,["onChange"])])),_:1})])),_:1})}],["__scopeId","data-v-5f2644cf"]]);export{y as default};
