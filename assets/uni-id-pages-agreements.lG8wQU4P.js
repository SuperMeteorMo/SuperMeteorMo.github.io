import{ah as e,n as t,l as s,o as a,c as n,w as r,e as l,F as i,a as o,b as p,r as u,t as c,A as m,ao as g,f as d,ap as f,aq as h,i as _}from"./index-BpteF7XO.js";import{_ as A}from"./uni-popup-dialog.DEoP79Ia.js";import{r as k}from"./uni-app.es.CzYWKprg.js";import{_ as x}from"./uni-popup.FLRSB5v0.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";let y=()=>console.log("为定义");const C=v({name:"uni-agreements",computed:{agreements(){if(!e.agreements)return[];let{serviceUrl:t,privacyUrl:s}=e.agreements;return[{url:t,title:"用户服务协议"},{url:s,title:"隐私政策条款"}]}},props:{scope:{type:String,default:()=>"register"}},methods:{popupConfirm(){this.isAgree=!0,y()},popup(e){this.needPopupAgreements=!0,this.$nextTick((()=>{e&&(y=e),this.$refs.popupAgreement.open()}))},navigateTo({url:e,title:s}){t({url:"/uni_modules/uni-id-pages/pages/common/webview/webview?url="+e+"&title="+s,success:e=>{},fail:()=>{},complete:()=>{}})},hasAnd:(e,t)=>e.length-1>t,setAgree(e){this.isAgree=!this.isAgree,this.$emit("setAgree",this.isAgree)}},created(){var t,s;this.needAgreements=((null==(s=null==(t=e)?void 0:t.agreements)?void 0:s.scope)||[]).includes(this.scope)},data:()=>({isAgree:!1,needAgreements:!0,needPopupAgreements:!1})},[["render",function(e,t,v,y,C,b){const j=g,w=d,T=f,$=h,P=_,U=k(s("uni-popup-dialog"),A),q=k(s("uni-popup"),x);return b.agreements.length?(a(),n(P,{key:0,class:"root"},{default:r((()=>[C.needAgreements?(a(),l(i,{key:0},[o($,{onChange:b.setAgree},{default:r((()=>[o(T,{class:"checkbox-box"},{default:r((()=>[o(j,{checked:C.isAgree,style:{transform:"scale(0.5)","margin-right":"-6px"}},null,8,["checked"]),o(w,{class:"text"},{default:r((()=>[p("同意")])),_:1})])),_:1})])),_:1},8,["onChange"]),o(P,{class:"content"},{default:r((()=>[(a(!0),l(i,null,u(b.agreements,((e,t)=>(a(),n(P,{class:"item",key:t},{default:r((()=>[o(w,{class:"agreement text",onClick:t=>b.navigateTo(e)},{default:r((()=>[p(c(e.title),1)])),_:2},1032,["onClick"]),b.hasAnd(b.agreements,t)?(a(),n(w,{key:0,class:"text and",space:"nbsp"},{default:r((()=>[p(" 和 ")])),_:1})):m("",!0)])),_:2},1024)))),128))])),_:1})],64)):m("",!0),C.needAgreements||C.needPopupAgreements?(a(),n(q,{key:1,ref:"popupAgreement",type:"center"},{default:r((()=>[o(U,{confirmText:"同意",onConfirm:b.popupConfirm},{default:r((()=>[o(P,{class:"content"},{default:r((()=>[o(w,{class:"text"},{default:r((()=>[p("请先阅读并同意")])),_:1}),(a(!0),l(i,null,u(b.agreements,((e,t)=>(a(),n(P,{class:"item",key:t},{default:r((()=>[o(w,{class:"agreement text",onClick:t=>b.navigateTo(e)},{default:r((()=>[p(c(e.title),1)])),_:2},1032,["onClick"]),b.hasAnd(b.agreements,t)?(a(),n(w,{key:0,class:"text and",space:"nbsp"},{default:r((()=>[p(" 和 ")])),_:1})):m("",!0)])),_:2},1024)))),128))])),_:1})])),_:1},8,["onConfirm"])])),_:1},512)):m("",!0)])),_:1})):m("",!0)}],["__scopeId","data-v-2709ff10"]]);export{C as _};
