import{g as e,n as a,z as o,l as s,c as r,w as t,i,o as l,a as m,b as u,p as n,f as d,a1 as p}from"./index-Cjdy1NX2.js";import{_ as c}from"./uni-match-media.CuldKD8p.js";import{r as f}from"./uni-app.es.lkFlsBrM.js";import{_ as g}from"./uni-easyinput.C18cDJC-.js";import{_ as h}from"./uni-forms-item.BpvXI6y4.js";import{_ as w}from"./uni-id-pages-email-form.Xy1WHQ1T.js";import{_}from"./uni-id-pages-agreements.Bi62O5ro.js";import{_ as k}from"./uni-forms.CnxRvcRz.js";import"./validator.DruiDkFG.js";import{m as b}from"./login-page.mixin.1aOgbVq4.js";import{p as V}from"./password.DyltKF-W.js";import{_ as D}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.Dd5FM1Ai.js";import"./uni-captcha.Dy-dUjOj.js";import"./uni-popup-dialog.BX0qmP_i.js";import"./uni-popup.C9UBNQ2U.js";import"./store.DfBmFboh.js";const j=e.importObject("uni-id-co");const x=D({mixins:[b],data:()=>({formData:{email:"",nickname:"",password:"",password2:"",code:""},rules:{email:{rules:[{required:!0,errorMessage:"请输入邮箱"},{format:"email",errorMessage:"邮箱格式不正确"}]},nickname:{rules:[{minLength:3,maxLength:32,errorMessage:"昵称长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(e,a,o,s){return(/^1\d{10}$/.test(a)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a))&&s("昵称不能是：手机号或邮箱"),/^\d+$/.test(a)&&s("昵称不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(a)&&s("昵称不能包含中文"),!0}}],label:"昵称"},...V.getPwdRules(),code:{rules:[{required:!0,errorMessage:"请输入邮箱验证码"},{pattern:/^.{6}$/,errorMessage:"邮箱验证码不正确"}]}},focusEmail:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}),onReady(){this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=e=>{var a=e||window.event;a&&13==a.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((e=>{if(this.needAgreements&&!this.agree)return this.$refs.agreements.popup((()=>{this.submitForm(e)}));this.submitForm(e)})).catch((e=>{let a=e[0].key;a=a.replace(a[0],a[0].toUpperCase()),this["focus"+a]=!0}))},submitForm(e){j.registerUserByEmail(this.formData).then((e=>{a({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd",complete:e=>{}})})).catch((e=>{console.log(e.message)}))},navigateBack(){o()},toLogin(){a({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByUserName(){a({url:"/uni_modules/uni-id-pages/pages/register/register"})}}},[["render",function(e,a,o,b,V,D){const j=n,x=i,y=d,v=f(s("uni-match-media"),c),B=f(s("uni-easyinput"),g),C=f(s("uni-forms-item"),h),U=f(s("uni-id-pages-email-form"),w),$=f(s("uni-id-pages-agreements"),_),F=p,P=f(s("uni-forms"),k);return l(),r(x,{class:"uni-content"},{default:t((()=>[m(v,{"min-width":690},{default:t((()=>[m(x,{class:"login-logo"},{default:t((()=>[m(j,{src:V.logo},null,8,["src"])])),_:1}),m(y,{class:"title title-box"},{default:t((()=>[u("邮箱验证码注册")])),_:1})])),_:1}),m(P,{ref:"form",value:V.formData,rules:V.rules,"validate-trigger":"submit","err-show-type":"toast"},{default:t((()=>[m(C,{name:"email",required:""},{default:t((()=>[m(B,{inputBorder:!1,focus:V.focusEmail,onBlur:a[0]||(a[0]=e=>V.focusEmail=!1),class:"input-box",placeholder:"请输入邮箱",modelValue:V.formData.email,"onUpdate:modelValue":a[1]||(a[1]=e=>V.formData.email=e),trim:"both"},null,8,["focus","modelValue"])])),_:1}),m(C,{name:"nickname"},{default:t((()=>[m(B,{inputBorder:!1,focus:V.focusNickname,onBlur:a[2]||(a[2]=e=>V.focusNickname=!1),class:"input-box",placeholder:"请输入用户昵称",modelValue:V.formData.nickname,"onUpdate:modelValue":a[3]||(a[3]=e=>V.formData.nickname=e),trim:"both"},null,8,["focus","modelValue"])])),_:1}),m(C,{name:"password",modelValue:V.formData.password,"onUpdate:modelValue":a[6]||(a[6]=e=>V.formData.password=e),required:""},{default:t((()=>[m(B,{inputBorder:!1,focus:V.focusPassword,onBlur:a[4]||(a[4]=e=>V.focusPassword=!1),class:"input-box",maxlength:"20",placeholder:"请输入"+("weak"==e.config.passwordStrength?"6":"8")+"-16位密码",type:"password",modelValue:V.formData.password,"onUpdate:modelValue":a[5]||(a[5]=e=>V.formData.password=e),trim:"both"},null,8,["focus","placeholder","modelValue"])])),_:1},8,["modelValue"]),m(C,{name:"password2",modelValue:V.formData.password2,"onUpdate:modelValue":a[9]||(a[9]=e=>V.formData.password2=e),required:""},{default:t((()=>[m(B,{inputBorder:!1,focus:V.focusPassword2,onBlur:a[7]||(a[7]=e=>V.focusPassword2=!1),class:"input-box",placeholder:"再次输入密码",maxlength:"20",type:"password",modelValue:V.formData.password2,"onUpdate:modelValue":a[8]||(a[8]=e=>V.formData.password2=e),trim:"both"},null,8,["focus","modelValue"])])),_:1},8,["modelValue"]),m(C,{name:"code"},{default:t((()=>[m(U,{ref:"shortCode",email:V.formData.email,type:"register",modelValue:V.formData.code,"onUpdate:modelValue":a[10]||(a[10]=e=>V.formData.code=e)},null,8,["email","modelValue"])])),_:1}),m($,{scope:"register",ref:"agreements"},null,512),m(F,{class:"uni-btn",type:"primary",onClick:D.submit},{default:t((()=>[u("注册")])),_:1},8,["onClick"]),m(F,{onClick:D.navigateBack,class:"register-back"},{default:t((()=>[u("返回")])),_:1},8,["onClick"]),m(v,{"min-width":690},{default:t((()=>[m(x,{class:"link-box"},{default:t((()=>[m(y,{class:"link",onClick:D.registerByUserName},{default:t((()=>[u("用户名密码注册")])),_:1},8,["onClick"]),m(y,{class:"link",onClick:D.toLogin},{default:t((()=>[u("已有账号？点此登录")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["value","rules"])])),_:1})}],["__scopeId","data-v-6451329b"]]);export{x as default};
