import{g as o,C as s,l as e,c as t,w as n,i,o as a,a as p,b as c,p as r,f as u,a1 as l}from"./index-DZh7KiIT.js";import{_ as m}from"./uni-id-pages-sms-form.2ixw_d5e.js";import{r as d}from"./uni-app.es.CmAO1mfw.js";import{_ as h}from"./uni-forms.BpFovC3H.js";import{_ as f}from"./uni-popup-captcha.Z9SvH07x.js";import{m as g}from"./login-page.mixin.DKRBOuCb.js";import{_}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-captcha.ylkFeBC8.js";import"./uni-icons.DdMMwnlO.js";import"./uni-easyinput.eAeuKjqq.js";import"./uni-popup.Dau5xemA.js";import"./store.DEY66dNj.js";const b=_({mixins:[g],data:()=>({code:"",phone:"",captcha:"",logo:"/static/logo.png"}),computed:{tipText(){return"验证码已通过短信发送至"+this.phone}},onLoad({phoneNumber:o}){this.phone=o},onShow(){document.onkeydown=o=>{var s=o||window.event;s&&13==s.keyCode&&this.submit()}},methods:{submit(){const e=o.importObject("uni-id-co",{errorOptions:{type:"toast"}});if(6!=this.code.length)return this.$refs.smsCode.focusSmsCodeInput=!0,s({title:"验证码不能为空",icon:"none",duration:3e3});e.loginBySms({mobile:this.phone,code:this.code,captcha:this.captcha}).then((o=>{this.loginSuccess(o)})).catch((o=>{"uni-id-captcha-required"==o.errCode?this.$refs.popup.open():console.log(o.errMsg)})).finally((o=>{this.captcha=""}))}}},[["render",function(o,s,g,_,b,j){const y=r,C=i,x=u,V=d(e("uni-id-pages-sms-form"),m),v=l,w=d(e("uni-forms"),h),k=d(e("uni-popup-captcha"),f);return a(),t(C,{class:"uni-content"},{default:n((()=>[p(C,{class:"login-logo"},{default:n((()=>[p(y,{src:b.logo},null,8,["src"])])),_:1}),p(x,{class:"title"},{default:n((()=>[c("请输入验证码")])),_:1}),p(x,{class:"tip"},{default:n((()=>[c("先输入图形验证码，再获取短信验证码")])),_:1}),p(w,null,{default:n((()=>[p(V,{focusCaptchaInput:"",modelValue:b.code,"onUpdate:modelValue":s[0]||(s[0]=o=>b.code=o),type:"login-by-sms",ref:"smsCode",phone:b.phone},null,8,["modelValue","phone"]),p(v,{class:"uni-btn send-btn",type:"primary",onClick:j.submit},{default:n((()=>[c("登录")])),_:1},8,["onClick"])])),_:1}),p(k,{onConfirm:j.submit,modelValue:b.captcha,"onUpdate:modelValue":s[1]||(s[1]=o=>b.captcha=o),scene:"login-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-93225fe2"]]);export{b as default};
