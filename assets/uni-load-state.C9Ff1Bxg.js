import{L as t,a7 as e,a8 as o,x as a,l as s,o as r,c as n,w as i,a as p,b as l,t as d,p as u,g as c,i as m}from"./index-BeTsOSG5.js";import{_ as k}from"./uni-load-more.CTojKKDf.js";import{r as f}from"./uni-app.es.0hj2hPwg.js";import{_ as h}from"./_plugin-vue_export-helper.BCo6x5W8.js";const w={en:{noData:"No Data",noNetwork:"Network error",toSet:"Go to settings",error:"error"},"zh-Hans":{noData:"暂无数据",noNetwork:"网络异常",toSet:"前往设置",error:"错误"}},{t:g}=t(w);const y=h({name:"uni-load-state",computed:{noData:()=>g("noData"),noNetwork:()=>g("noNetwork"),toSet:()=>g("toSet"),error:()=>g("error")},data:()=>({networkType:""}),props:{state:{type:Object,default:()=>({loading:!0,hasMore:!1,pagination:{pages:0},data:[],error:{}})}},mounted(){e((({networkType:t})=>{"none"==this.networkType&&"none"!=t&&this.$emit("networkResume"),this.networkType=t})),o({success:({networkType:t})=>{this.networkType=t}})},methods:{appear(){!this.state.loading&&this.state.hasMore&&this.$emit("loadMore")},openSettings(){if("ios"==a().platform){var t=plus.ios.import("UIApplication").sharedApplication(),e=plus.ios.import("NSURL"),o=e.URLWithString("App-prefs:root=General");t.openURL(o),plus.ios.deleteObject(o),plus.ios.deleteObject(e),plus.ios.deleteObject(t)}else{var s=plus.android.importClass("android.content.Intent"),r=plus.android.importClass("android.provider.Settings"),n=plus.android.runtimeMainActivity(),i=new s(r.ACTION_SETTINGS);n.startActivity(i)}}}},[["render",function(t,e,o,a,h,w){const g=u,y=c,_=m,S=f(s("uni-load-more"),k);return r(),n(_,{onAppear:w.appear},{default:i((()=>[o.state.error?(r(),n(_,{key:0},{default:i((()=>["none"==h.networkType?(r(),n(_,{key:0,class:"box"},{default:i((()=>[p(g,{class:"icon-image",src:"/assets/disconnection-CxcuTO1c.png",mode:"widthFix"}),p(y,{class:"tip-text"},{default:i((()=>[l(d(w.noNetwork),1)])),_:1}),p(_,{class:"btn btn-default",onClick:w.openSettings},{default:i((()=>[p(y,{class:"btn-text"},{default:i((()=>[l(d(w.toSet),1)])),_:1})])),_:1},8,["onClick"])])),_:1})):(r(),n(y,{key:1,class:"error"},{default:i((()=>[l(d(w.error)+"："+d(JSON.stringify(o.state.error)),1)])),_:1}))])),_:1})):(r(),n(S,{key:1,class:"uni-load-more",status:o.state.loading?"loading":o.state.hasMore?"hasMore":"noMore"},null,8,["status"]))])),_:1},8,["onAppear"])}],["__scopeId","data-v-ee28c781"]]);export{y as _};
