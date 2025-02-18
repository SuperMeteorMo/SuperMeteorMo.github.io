import{g as a,C as e,z as s,n as o,l as t,c as r,w as i,i as l,o as u,a as n,b as m,p as d,f as c,a1 as p}from"./index-CsBabVVh.js";import{_ as f}from"./uni-match-media.Cl_yEOQ2.js";import{r as h}from"./uni-app.es.CHxFQLV4.js";import{_ as g}from"./uni-easyinput.DbKo-NuM.js";import{_ as w}from"./uni-forms-item.H2hJufE2.js";import{_}from"./uni-captcha.Dv00yqzr.js";import{_ as k}from"./uni-id-pages-agreements.1Y0a7GEn.js";import{_ as b}from"./uni-forms.CB_MeD0A.js";import{r as V}from"./validator.DlQajzsQ.js";import{m as D}from"./login-page.mixin.i0FMqnAB.js";import"./store.Br2o1vCk.js";import{_ as j}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.B8m2qatV.js";import"./uni-popup-dialog.D5TXoCIv.js";import"./uni-popup.BWIRb1Mk.js";import"./password.yMH6IfJY.js";const x=a.importObject("uni-id-co");const y=j({mixins:[D],data:()=>({formData:{username:"",nickname:"",password:"",password2:"",captcha:""},rules:V,focusUsername:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}),onReady(){this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=a=>{var e=a||window.event;e&&13==e.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((a=>4!=this.formData.captcha.length?(this.$refs.captcha.focusCaptchaInput=!0,e({title:"请输入验证码",icon:"none",duration:3e3})):this.needAgreements&&!this.agree?this.$refs.agreements.popup((()=>{this.submitForm(a)})):void this.submitForm(a))).catch((a=>{let e=a[0].key;e=e.replace(e[0],e[0].toUpperCase()),this["focus"+e]=!0}))},submitForm(a){x.registerUser(this.formData).then((a=>{this.loginSuccess(a)})).catch((a=>{console.log(a.message),this.$refs.captcha.getImageCaptcha()}))},navigateBack(){s()},toLogin(){o({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByEmail(){o({url:"/uni_modules/uni-id-pages/pages/register/register-by-email"})}}},[["render",function(a,e,s,o,V,D){const j=d,x=l,y=c,v=h(t("uni-match-media"),f),C=h(t("uni-easyinput"),g),B=h(t("uni-forms-item"),w),U=h(t("uni-captcha"),_),P=h(t("uni-id-pages-agreements"),k),$=p,q=h(t("uni-forms"),b);return u(),r(x,{class:"uni-content"},{default:i((()=>[n(v,{"min-width":690},{default:i((()=>[n(x,{class:"login-logo"},{default:i((()=>[n(j,{src:V.logo},null,8,["src"])])),_:1}),n(y,{class:"title title-box"},{default:i((()=>[m("用户名密码注册")])),_:1})])),_:1}),n(q,{ref:"form",value:V.formData,rules:V.rules,"validate-trigger":"submit","err-show-type":"toast"},{default:i((()=>[n(B,{name:"username",required:""},{default:i((()=>[n(C,{inputBorder:!1,focus:V.focusUsername,onBlur:e[0]||(e[0]=a=>V.focusUsername=!1),class:"input-box",placeholder:"请输入用户名",modelValue:V.formData.username,"onUpdate:modelValue":e[1]||(e[1]=a=>V.formData.username=a),trim:"both"},null,8,["focus","modelValue"])])),_:1}),n(B,{name:"nickname"},{default:i((()=>[n(C,{inputBorder:!1,focus:V.focusNickname,onBlur:e[2]||(e[2]=a=>V.focusNickname=!1),class:"input-box",placeholder:"请输入用户昵称",modelValue:V.formData.nickname,"onUpdate:modelValue":e[3]||(e[3]=a=>V.formData.nickname=a),trim:"both"},null,8,["focus","modelValue"])])),_:1}),n(B,{name:"password",modelValue:V.formData.password,"onUpdate:modelValue":e[6]||(e[6]=a=>V.formData.password=a),required:""},{default:i((()=>[n(C,{inputBorder:!1,focus:V.focusPassword,onBlur:e[4]||(e[4]=a=>V.focusPassword=!1),class:"input-box",maxlength:"20",placeholder:"请输入"+("weak"==a.config.passwordStrength?"6":"8")+"-16位密码",type:"password",modelValue:V.formData.password,"onUpdate:modelValue":e[5]||(e[5]=a=>V.formData.password=a),trim:"both"},null,8,["focus","placeholder","modelValue"])])),_:1},8,["modelValue"]),n(B,{name:"password2",modelValue:V.formData.password2,"onUpdate:modelValue":e[9]||(e[9]=a=>V.formData.password2=a),required:""},{default:i((()=>[n(C,{inputBorder:!1,focus:V.focusPassword2,onBlur:e[7]||(e[7]=a=>V.focusPassword2=!1),class:"input-box",placeholder:"再次输入密码",maxlength:"20",type:"password",modelValue:V.formData.password2,"onUpdate:modelValue":e[8]||(e[8]=a=>V.formData.password2=a),trim:"both"},null,8,["focus","modelValue"])])),_:1},8,["modelValue"]),n(B,null,{default:i((()=>[n(U,{ref:"captcha",scene:"register",modelValue:V.formData.captcha,"onUpdate:modelValue":e[10]||(e[10]=a=>V.formData.captcha=a)},null,8,["modelValue"])])),_:1}),n(P,{scope:"register",ref:"agreements"},null,512),n($,{class:"uni-btn",type:"primary",onClick:D.submit},{default:i((()=>[m("注册")])),_:1},8,["onClick"]),n($,{onClick:D.navigateBack,class:"register-back"},{default:i((()=>[m("返回")])),_:1},8,["onClick"]),n(v,{"min-width":690},{default:i((()=>[n(x,{class:"link-box"},{default:i((()=>[n(y,{class:"link",onClick:D.registerByEmail},{default:i((()=>[m("邮箱验证码注册")])),_:1},8,["onClick"]),n(y,{class:"link",onClick:D.toLogin},{default:i((()=>[m("已有账号？点此登录")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["value","rules"])])),_:1})}],["__scopeId","data-v-7ae85e3a"]]);export{y as default};
