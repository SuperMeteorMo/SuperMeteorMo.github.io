import{e as o,C as s,l as e,c as t,w as n,i,o as a,a as p,b as r,p as c,g as u,$ as l}from"./index-CbIesGMf.js";import{_ as m}from"./uni-id-pages-sms-form.B6kVxh41.js";import{r as d}from"./uni-app.es.BgKzZsuk.js";import{_ as h}from"./uni-forms.BEcpn5lC.js";import{_ as f}from"./uni-popup-captcha.xLCo8hVV.js";import{m as g}from"./login-page.mixin.DidmOfZE.js";import{_}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-captcha.D0T0Mw3F.js";import"./uni-icons.Q3foZM-m.js";import"./uni-easyinput.DG_BaQW4.js";import"./uni-popup.KCZoA5_7.js";import"./store.BIjkn5rT.js";const j=_({mixins:[g],data:()=>({code:"",phone:"",captcha:"",logo:"/static/logo.png"}),computed:{tipText(){return"验证码已通过短信发送至"+this.phone}},onLoad({phoneNumber:o}){this.phone=o},onShow(){document.onkeydown=o=>{var s=o||window.event;s&&13==s.keyCode&&this.submit()}},methods:{submit(){const e=o.importObject("uni-id-co",{errorOptions:{type:"toast"}});if(6!=this.code.length)return this.$refs.smsCode.focusSmsCodeInput=!0,s({title:"验证码不能为空",icon:"none",duration:3e3});e.loginBySms({mobile:this.phone,code:this.code,captcha:this.captcha}).then((o=>{this.loginSuccess(o)})).catch((o=>{"uni-id-captcha-required"==o.errCode?this.$refs.popup.open():console.log(o.errMsg)})).finally((o=>{this.captcha=""}))}}},[["render",function(o,s,g,_,j,b){const y=c,C=i,x=u,V=d(e("uni-id-pages-sms-form"),m),k=l,w=d(e("uni-forms"),h),v=d(e("uni-popup-captcha"),f);return a(),t(C,{class:"uni-content"},{default:n((()=>[p(C,{class:"login-logo"},{default:n((()=>[p(y,{src:j.logo},null,8,["src"])])),_:1}),p(x,{class:"title"},{default:n((()=>[r("请输入验证码")])),_:1}),p(x,{class:"tip"},{default:n((()=>[r("先输入图形验证码，再获取短信验证码")])),_:1}),p(w,null,{default:n((()=>[p(V,{focusCaptchaInput:"",modelValue:j.code,"onUpdate:modelValue":s[0]||(s[0]=o=>j.code=o),type:"login-by-sms",ref:"smsCode",phone:j.phone},null,8,["modelValue","phone"]),p(k,{class:"uni-btn send-btn",type:"primary",onClick:b.submit},{default:n((()=>[r("登录")])),_:1},8,["onClick"])])),_:1}),p(v,{onConfirm:b.submit,modelValue:j.captcha,"onUpdate:modelValue":s[1]||(s[1]=o=>j.captcha=o),scene:"login-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-93225fe2"]]);export{j as default};
