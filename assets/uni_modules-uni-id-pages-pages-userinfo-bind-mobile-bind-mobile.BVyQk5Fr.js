import{D as o,e,A as a,m as t,c as s,w as i,i as n,o as m,a as r,b as l,q as u,h as p,$ as c}from"./index-86rZ-D-t.js";import{_ as d}from"./uni-match-media.Cm9nDgPU.js";import{r as f}from"./uni-app.es.Cksdd9Qe.js";import{_ as h}from"./uni-easyinput.CTOjbJ8w.js";import{_ as b}from"./uni-id-pages-sms-form.T8DVsaUp.js";import{_ as D}from"./uni-popup-captcha.C6XoG79s.js";import{m as _}from"./store.1mgwHa0O.js";import{_ as g}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.jo3z_KBL.js";import"./uni-captcha.BAbmAz6r.js";import"./uni-popup.y6iiP_Bm.js";const j=g({data:()=>({formData:{mobile:"",code:"",captcha:""},focusMobile:!0,logo:"/static/logo.png"}),computed:{tipText(){return`验证码已通过短信发送至 ${this.formData.mobile}。密码为6 - 20位`}},onLoad(o){},onReady(){},methods:{submit(){if(!/^1\d{10}$/.test(this.formData.mobile))return this.focusMobile=!0,o({title:"手机号码格式不正确",icon:"none",duration:3e3});if(!/^\d{6}$/.test(this.formData.code))return this.$refs.smsForm.focusSmsCodeInput=!0,o({title:"验证码格式不正确",icon:"none",duration:3e3});e.importObject("uni-id-co").bindMobileBySms(this.formData).then((e=>{o({title:e.errMsg,icon:"none",duration:3e3}),this.getOpenerEventChannel(),_.setUserInfo(this.formData),a()})).catch((o=>{console.log(o),"uni-id-captcha-required"==o.errCode&&this.$refs.popup.open()})).finally((o=>{this.formData.captcha=""}))}}},[["render",function(o,e,a,_,g,j){const y=u,V=n,x=p,C=f(t("uni-match-media"),d),$=f(t("uni-easyinput"),h),M=f(t("uni-id-pages-sms-form"),b),U=c,v=f(t("uni-popup-captcha"),D);return m(),s(V,{class:"uni-content"},{default:i((()=>[r(C,{"min-width":690},{default:i((()=>[r(V,{class:"login-logo"},{default:i((()=>[r(y,{src:g.logo},null,8,["src"])])),_:1}),r(x,{class:"title title-box"},{default:i((()=>[l("绑定手机号")])),_:1})])),_:1}),r($,{clearable:"",focus:g.focusMobile,onBlur:e[0]||(e[0]=o=>g.focusMobile=!1),type:"number",class:"input-box",inputBorder:!1,modelValue:g.formData.mobile,"onUpdate:modelValue":e[1]||(e[1]=o=>g.formData.mobile=o),maxlength:"11",placeholder:"请输入手机号"},null,8,["focus","modelValue"]),r(M,{ref:"smsForm",type:"bind-mobile-by-sms",modelValue:g.formData.code,"onUpdate:modelValue":e[2]||(e[2]=o=>g.formData.code=o),phone:g.formData.mobile},null,8,["modelValue","phone"]),r(U,{class:"uni-btn send-btn-box",type:"primary",onClick:j.submit},{default:i((()=>[l("提交")])),_:1},8,["onClick"]),r(v,{onConfirm:j.submit,modelValue:g.formData.captcha,"onUpdate:modelValue":e[3]||(e[3]=o=>g.formData.captcha=o),scene:"bind-mobile-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-8ad2d767"]]);export{j as default};
