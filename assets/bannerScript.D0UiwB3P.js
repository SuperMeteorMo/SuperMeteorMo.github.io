import{g as t,Z as e,n as a,l as s,o as l,c as i,w as o,a as d,K as c,b as r,t as n,A as u,$ as f,f as m,i as h}from"./index-CupAtnve.js";import{_}from"./uni-dateformat.vfIf9t8m.js";import{r as p}from"./uni-app.es.TiEKNA9k.js";import{_ as g}from"./uni-icons.DELVtk4N.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";t.database().command;const b=y({data:()=>({showRefresh:!1,state:0,installState:!1}),computed:{originClass(){var t,e;return(null==(t=this.item.host)?void 0:t.includes("greasyfork"))?"greasyfork":(null==(e=this.item.host)?void 0:e.includes("scriptcat"))?"scriptcat":"soujiaoben"},originText(){return{greasyfork:"海外源",scriptcat:"社区源",soujiaoben:"本站源"}[this.originClass]},getSourceIcon(){return{greasyfork:"flag-filled",scriptcat:"community-filled",soujiaoben:"home-filled"}[this.originClass]},getSourceText(){return{greasyfork:"greasyfork",scriptcat:"scriptCat",soujiaoben:"soujiaoben"}[this.originClass]}},methods:{install(){var a="https://env-00jxt5o5005s.dev-hz.cloudbasefunction.cn/scripts/";a=(a=a+this.item.host+"/")+this.item.id+"/",2!=this.item.show&&(a=a+this.item["update-id"]+"/"),a+="install.user.js",window.open(a),this.installState||(this.installState=!0,e().then((e=>{t.callFunction({name:"scripts",data:{type:"install",data:{device_id:e.deviceId,script_id:this.item._id}},success:t=>{},fail:t=>{}})})))},onpullingdown({pullingDistance:t,viewHeight:e}){this.state=t<e?0:1},golast(){a({url:"/pages/list/detail?id="+this.item.id+"&host="+this.item.host})},refresh(){this.showRefresh=!0,this.state=2,this.$emit("refresh")}},watch:{},props:{item:{type:Object,default:()=>!1},goto:{type:Boolean,default:()=>!0}}},[["render",function(t,e,a,y,b,v){const j=m,k=h,w=p(s("uni-dateformat"),_),C=p(s("uni-icons"),g);return l(),i(k,{class:"card-container",onClick:e[1]||(e[1]=t=>v.golast())},{default:o((()=>[d(k,{class:c(["source-badge",v.originClass])},{default:o((()=>[d(j,null,{default:o((()=>[r(n(v.getSourceText),1)])),_:1})])),_:1},8,["class"]),d(k,{class:"card-header"},{default:o((()=>[d(k,{class:"title-container"},{default:o((()=>[d(j,{class:"card-title"},{default:o((()=>[r(n(a.item.name),1)])),_:1})])),_:1}),d(k,{class:"card-description"},{default:o((()=>[r(n(a.item.description||"暂无脚本描述"),1)])),_:1})])),_:1}),d(k,{class:"card-details"},{default:o((()=>[d(k,{class:"detail-item"},{default:o((()=>[d(j,{class:"label"},{default:o((()=>[r("👤 作者")])),_:1}),d(j,{class:"value"},{default:o((()=>[r(n(a.item.publisher||"匿名开发者"),1)])),_:1})])),_:1}),d(k,{class:"detail-item"},{default:o((()=>[d(j,{class:"label"},{default:o((()=>[r("📆 今日安装")])),_:1}),d(j,{class:"value"},{default:o((()=>[r(n(a.item.day||0),1)])),_:1})])),_:1}),d(k,{class:"detail-item"},{default:o((()=>[d(j,{class:"label"},{default:o((()=>[r("🔄 最新版本")])),_:1}),d(j,{class:"value"},{default:o((()=>[r(n(a.item.version||"1.0.0"),1)])),_:1})])),_:1}),d(k,{class:"detail-item"},{default:o((()=>[d(j,{class:"label"},{default:o((()=>[r("⏰ 更新时间")])),_:1}),d(w,{class:"value",date:a.item.create_date,format:"yyyy-MM-dd hh:mm",threshold:[6e4,2592e6]},null,8,["date"])])),_:1}),d(k,{class:"detail-item"},{default:o((()=>[d(j,{class:"label"},{default:o((()=>[r("📅 创建时间")])),_:1}),d(w,{class:"value",date:a.item.publish_date,format:"yyyy-MM-dd hh:mm",threshold:[6e4,2592e6]},null,8,["date"])])),_:1}),d(k,{class:"detail-item"},{default:o((()=>[d(j,{class:"label"},{default:o((()=>[r("📊 总计安装")])),_:1}),d(j,{class:"value"},{default:o((()=>[r(n(a.item.total||0),1)])),_:1})])),_:1})])),_:1}),a.goto?u("",!0):(l(),i(k,{key:0,class:"rating-container"},{default:o((()=>[d(j,{class:"score positive"},{default:o((()=>[r("★ "+n(a.item.good||0)+" 好评",1)])),_:1}),d(j,{class:"score neutral"},{default:o((()=>[r("★ "+n(a.item.neutral||0)+" 中评",1)])),_:1}),d(j,{class:"score negative"},{default:o((()=>[r("★ "+n(a.item.bad||0)+" 差评",1)])),_:1})])),_:1})),a.goto?u("",!0):(l(),i(k,{key:1,class:"action-buttons"},{default:o((()=>[d(k,{class:"install-btn",onClick:f(v.install,["stop"])},{default:o((()=>[d(C,{type:"download-filled",size:"16",color:"#fff"}),d(j,null,{default:o((()=>[r(n("立即安装"))])),_:1})])),_:1},8,["onClick"]),a.item.last?u("",!0):(l(),i(k,{key:0,class:"secondary-btn",onClick:e[0]||(e[0]=t=>v.golast())},{default:o((()=>[d(C,{type:"forward",size:"14",color:"#4a5568"}),d(j,null,{default:o((()=>[r("查看最新版")])),_:1})])),_:1}))])),_:1}))])),_:1})}],["__scopeId","data-v-15ace4b1"]]);export{b as _};
