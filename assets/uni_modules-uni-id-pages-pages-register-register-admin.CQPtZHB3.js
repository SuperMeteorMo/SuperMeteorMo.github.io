import{e,z as a,u as s,n as o,l as r,c as t,w as i,i as l,o as u,a as n,b as m,p as d,g as p,$ as c}from"./index-CbIesGMf.js";import{_ as f}from"./uni-match-media.B9woek1S.js";import{r as g}from"./uni-app.es.BgKzZsuk.js";import{_ as h}from"./uni-easyinput.DG_BaQW4.js";import{_ as w}from"./uni-forms-item.C-5PBkbE.js";import{_}from"./uni-id-pages-agreements.DwJ9CsRl.js";import{_ as b}from"./uni-forms.BEcpn5lC.js";import{r as k}from"./validator.DKvC9jL4.js";import{m as V}from"./login-page.mixin.DidmOfZE.js";import{_ as j}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.Q3foZM-m.js";import"./uni-popup-dialog.D62hvjqp.js";import"./uni-popup.KCZoA5_7.js";import"./password.DIAK80cg.js";import"./store.BIjkn5rT.js";const D=e.importObject("uni-id-co",{customUI:!0});const x=j({mixins:[V],data:()=>({formData:{username:"",nickname:"",password:"",password2:"",captcha:""},rules:k,focusUsername:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}),onReady(){this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=e=>{var a=e||window.event;a&&13==a.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((e=>{if(this.needAgreements&&!this.agree)return this.$refs.agreements.popup((()=>{this.submitForm(e)}));this.submitForm(e)})).catch((e=>{let a=e[0].key;a=a.replace(a[0],a[0].toUpperCase()),this["focus"+a]=!0}))},submitForm(e){D.registerAdmin(this.formData).then((e=>{a()})).catch((e=>{this.$refs.captcha.getImageCaptcha(),s({title:"提示",content:e.errMsg||`创建失败: ${e.errCode}`,showCancel:!1})}))},navigateBack(){a()},toLogin(){o({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByEmail(){o({url:"/uni_modules/uni-id-pages/pages/register/register-by-email"})}}},[["render",function(e,a,s,o,k,V){const j=d,D=l,x=p,y=g(r("uni-match-media"),f),v=g(r("uni-easyinput"),h),B=g(r("uni-forms-item"),w),C=g(r("uni-id-pages-agreements"),_),U=c,P=g(r("uni-forms"),b);return u(),t(D,{class:"uni-content"},{default:i((()=>[n(y,{"min-width":690},{default:i((()=>[n(D,{class:"login-logo"},{default:i((()=>[n(j,{src:k.logo},null,8,["src"])])),_:1}),n(x,{class:"title title-box"},{default:i((()=>[m("创建超级管理员")])),_:1})])),_:1}),n(P,{ref:"form",value:k.formData,rules:k.rules,"validate-trigger":"submit","err-show-type":"toast"},{default:i((()=>[n(B,{name:"username",required:""},{default:i((()=>[n(v,{inputBorder:!1,focus:k.focusUsername,onBlur:a[0]||(a[0]=e=>k.focusUsername=!1),class:"input-box",placeholder:"请输入用户名",modelValue:k.formData.username,"onUpdate:modelValue":a[1]||(a[1]=e=>k.formData.username=e),trim:"both"},null,8,["focus","modelValue"])])),_:1}),n(B,{name:"nickname"},{default:i((()=>[n(v,{inputBorder:!1,focus:k.focusNickname,onBlur:a[2]||(a[2]=e=>k.focusNickname=!1),class:"input-box",placeholder:"请输入用户昵称",modelValue:k.formData.nickname,"onUpdate:modelValue":a[3]||(a[3]=e=>k.formData.nickname=e),trim:"both"},null,8,["focus","modelValue"])])),_:1}),n(B,{name:"password",modelValue:k.formData.password,"onUpdate:modelValue":a[6]||(a[6]=e=>k.formData.password=e),required:""},{default:i((()=>[n(v,{inputBorder:!1,focus:k.focusPassword,onBlur:a[4]||(a[4]=e=>k.focusPassword=!1),class:"input-box",maxlength:"20",placeholder:"请输入"+("weak"==e.config.passwordStrength?"6":"8")+"-16位密码",type:"password",modelValue:k.formData.password,"onUpdate:modelValue":a[5]||(a[5]=e=>k.formData.password=e),trim:"both"},null,8,["focus","placeholder","modelValue"])])),_:1},8,["modelValue"]),n(B,{name:"password2",modelValue:k.formData.password2,"onUpdate:modelValue":a[9]||(a[9]=e=>k.formData.password2=e),required:""},{default:i((()=>[n(v,{inputBorder:!1,focus:k.focusPassword2,onBlur:a[7]||(a[7]=e=>k.focusPassword2=!1),class:"input-box",placeholder:"再次输入密码",maxlength:"20",type:"password",modelValue:k.formData.password2,"onUpdate:modelValue":a[8]||(a[8]=e=>k.formData.password2=e),trim:"both"},null,8,["focus","modelValue"])])),_:1},8,["modelValue"]),n(C,{scope:"register",ref:"agreements"},null,512),n(U,{class:"uni-btn",type:"primary",onClick:V.submit},{default:i((()=>[m("注册")])),_:1},8,["onClick"]),n(U,{onClick:V.navigateBack,class:"register-back"},{default:i((()=>[m("返回")])),_:1},8,["onClick"]),n(y,{"min-width":690},{default:i((()=>[n(D,{class:"link-box"},{default:i((()=>[n(x,{class:"link",onClick:V.toLogin},{default:i((()=>[m("已有账号？点此登录")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["value","rules"])])),_:1})}],["__scopeId","data-v-aaf7d8b3"]]);export{x as default};
