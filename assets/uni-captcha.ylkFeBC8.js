import{C as a,g as e,l as t,o as s,c,w as o,a as l,A as i,K as n,p,i as u,J as h}from"./index-DZh7KiIT.js";import{_ as r}from"./uni-icons.DdMMwnlO.js";import{r as m}from"./uni-app.es.CmAO1mfw.js";import{_ as g}from"./_plugin-vue_export-helper.BCo6x5W8.js";const d=g({props:{modelValue:String,value:String,scene:{type:String,default:()=>""},focus:{type:Boolean,default:()=>!1}},computed:{val:{get(){return this.value||this.modelValue},set(a){this.$emit("update:modelValue",a)}}},data:()=>({focusCaptchaInput:!1,captchaBase64:"",loging:!1}),watch:{scene:{handler(e){e?this.getImageCaptcha(this.focus):a({title:"scene不能为空",icon:"none"})},immediate:!0}},methods:{getImageCaptcha(t=!0){this.loging=!0,t&&(this.val="",this.focusCaptchaInput=!0);e.importObject("uni-captcha-co",{customUI:!0}).getImageCaptcha({scene:this.scene}).then((a=>{this.captchaBase64=a.captchaBase64})).catch((e=>{a({title:e.message,icon:"none"})})).finally((a=>{this.loging=!1}))}}},[["render",function(a,e,g,d,f,C){const x=m(t("uni-icons"),r),B=p,I=u,v=h;return s(),c(I,{class:"captcha-box"},{default:o((()=>[l(I,{class:"captcha-img-box"},{default:o((()=>[f.loging?(s(),c(x,{key:0,class:"loding",size:"20px",color:"#BBB",type:"spinner-cycle"})):i("",!0),l(B,{class:n(["captcha-img",{opacity:f.loging}]),onClick:C.getImageCaptcha,src:f.captchaBase64,mode:"widthFix"},null,8,["class","onClick","src"])])),_:1}),l(v,{onBlur:e[0]||(e[0]=a=>f.focusCaptchaInput=!1),focus:f.focusCaptchaInput,type:"text",class:"captcha",inputBorder:!1,maxlength:"4",modelValue:C.val,"onUpdate:modelValue":e[1]||(e[1]=a=>C.val=a),placeholder:"请输入验证码"},null,8,["focus","modelValue"])])),_:1})}],["__scopeId","data-v-07444ffa"]]);export{d as _};
