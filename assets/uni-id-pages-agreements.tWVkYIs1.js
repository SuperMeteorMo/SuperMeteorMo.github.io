import{ap as e,n as t,l as s,o as a,c as n,w as r,f as l,F as i,a as o,b as p,r as u,t as g,A as c,aD as m,g as d,aE as f,aF as _,i as h}from"./index-2q7tZIrz.js";import{_ as A}from"./uni-popup-dialog.D2yE7VU0.js";import{r as k}from"./uni-app.es.DTub21Gi.js";import{_ as x}from"./uni-popup.DhTKxkyd.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";let y=()=>console.log("为定义");const C=v({name:"uni-agreements",computed:{agreements(){if(!e.agreements)return[];let{serviceUrl:t,privacyUrl:s}=e.agreements;return[{url:t,title:"用户服务协议"},{url:s,title:"隐私政策条款"}]}},props:{scope:{type:String,default:()=>"register"}},methods:{popupConfirm(){this.isAgree=!0,y()},popup(e){this.needPopupAgreements=!0,this.$nextTick((()=>{e&&(y=e),this.$refs.popupAgreement.open()}))},navigateTo({url:e,title:s}){t({url:"/uni_modules/uni-id-pages/pages/common/webview/webview?url="+e+"&title="+s,success:e=>{},fail:()=>{},complete:()=>{}})},hasAnd:(e,t)=>e.length-1>t,setAgree(e){this.isAgree=!this.isAgree,this.$emit("setAgree",this.isAgree)}},created(){var t,s;this.needAgreements=((null==(s=null==(t=e)?void 0:t.agreements)?void 0:s.scope)||[]).includes(this.scope)},data:()=>({isAgree:!1,needAgreements:!0,needPopupAgreements:!1})},[["render",function(e,t,v,y,C,b){const j=m,w=d,T=f,F=_,P=h,$=k(s("uni-popup-dialog"),A),D=k(s("uni-popup"),x);return b.agreements.length?(a(),n(P,{key:0,class:"root"},{default:r((()=>[C.needAgreements?(a(),l(i,{key:0},[o(F,{onChange:b.setAgree},{default:r((()=>[o(T,{class:"checkbox-box"},{default:r((()=>[o(j,{checked:C.isAgree,style:{transform:"scale(0.5)","margin-right":"-6px"}},null,8,["checked"]),o(w,{class:"text"},{default:r((()=>[p("同意")])),_:1})])),_:1})])),_:1},8,["onChange"]),o(P,{class:"content"},{default:r((()=>[(a(!0),l(i,null,u(b.agreements,((e,t)=>(a(),n(P,{class:"item",key:t},{default:r((()=>[o(w,{class:"agreement text",onClick:t=>b.navigateTo(e)},{default:r((()=>[p(g(e.title),1)])),_:2},1032,["onClick"]),b.hasAnd(b.agreements,t)?(a(),n(w,{key:0,class:"text and",space:"nbsp"},{default:r((()=>[p(" 和 ")])),_:1})):c("",!0)])),_:2},1024)))),128))])),_:1})],64)):c("",!0),C.needAgreements||C.needPopupAgreements?(a(),n(D,{key:1,ref:"popupAgreement",type:"center"},{default:r((()=>[o($,{confirmText:"同意",onConfirm:b.popupConfirm},{default:r((()=>[o(P,{class:"content"},{default:r((()=>[o(w,{class:"text"},{default:r((()=>[p("请先阅读并同意")])),_:1}),(a(!0),l(i,null,u(b.agreements,((e,t)=>(a(),n(P,{class:"item",key:t},{default:r((()=>[o(w,{class:"agreement text",onClick:t=>b.navigateTo(e)},{default:r((()=>[p(g(e.title),1)])),_:2},1032,["onClick"]),b.hasAnd(b.agreements,t)?(a(),n(w,{key:0,class:"text and",space:"nbsp"},{default:r((()=>[p(" 和 ")])),_:1})):c("",!0)])),_:2},1024)))),128))])),_:1})])),_:1},8,["onConfirm"])])),_:1},512)):c("",!0)])),_:1})):c("",!0)}],["__scopeId","data-v-2709ff10"]]);export{C as _};
