import{g as e,z as o,n as s,a2 as a,l as r,c as t,w as i,i as n,o as u,a as l,b as d,p,f as m,a1 as c}from"./index-BVMXMiMb.js";import{_ as f}from"./uni-match-media.NWG1fv0p.js";import{r as h}from"./uni-app.es.epOgXtuT.js";import{_ as w}from"./uni-easyinput.CeIeHzwa.js";import{_ as b}from"./uni-forms-item.2P10lwSB.js";import{_ as g}from"./uni-id-pages-sms-form.Dbn-z7ZQ.js";import{_}from"./uni-forms.BqlIhhLV.js";import{_ as y}from"./uni-popup-captcha.BZw3-P6c.js";import{m as D}from"./login-page.mixin.BBfNQt5Q.js";import{_ as k}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.9-IskY_u.js";import"./uni-captcha.D9W3I_BZ.js";import"./uni-popup.oUplogks.js";import"./store.BeZKph60.js";const C=e.importObject("uni-id-co",{errorOptions:{type:"toast"}});const j=k({mixins:[D],data:()=>({lock:!1,focusPhone:!0,focusPassword:!1,focusPassword2:!1,formData:{phone:"",code:"",password:"",password2:"",captcha:""},rules:{phone:{rules:[{required:!0,errorMessage:"请输入手机号"},{pattern:/^1\d{10}$/,errorMessage:"手机号码格式不正确"}]},code:{rules:[{required:!0,errorMessage:"请输入短信验证码"},{pattern:/^.{6}$/,errorMessage:"请输入6位验证码"}]},password:{rules:[{required:!0,errorMessage:"请输入新密码"},{pattern:/^.{6,20}$/,errorMessage:"密码为6 - 20位"}]},password2:{rules:[{required:!0,errorMessage:"请确认密码"},{pattern:/^.{6,20}$/,errorMessage:"密码为6 - 20位"},{validateFunction:function(e,o,s,a){return o!=s.password&&a("两次输入密码不一致"),!0}}]}},logo:"/static/logo.png"}),computed:{isPhone(){return/^1\d{10}$/.test(this.formData.phone)},isPwd(){return/^.{6,20}$/.test(this.formData.password)},isCode(){return/^\d{6}$/.test(this.formData.code)}},onLoad(e){e&&e.phoneNumber&&(this.formData.phone=e.phoneNumber,e.lock&&(this.lock=e.lock,this.focusPhone=!0))},onReady(){this.formData.phone&&this.$refs.shortCode.start(),this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=e=>{var o=e||window.event;o&&13==o.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((e=>{let{phone:s,password:a,captcha:r,code:t}=this.formData;C.resetPwdBySms({mobile:s,code:t,password:a,captcha:r}).then((e=>{o()})).catch((e=>{"uni-id-captcha-required"==e.errCode&&this.$refs.popup.open()})).finally((e=>{this.formData.captcha=""}))})).catch((e=>{let o=e[0].key;if("code"==o)return this.$refs.shortCode.focusSmsCodeInput=!0;o=o.replace(o[0],o[0].toUpperCase()),this["focus"+o]=!0}))},retrieveByEmail(){s({url:"/uni_modules/uni-id-pages/pages/retrieve/retrieve-by-email"})},backLogin(){a({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})}}},[["render",function(e,o,s,a,D,k){const C=p,j=n,V=m,v=h(r("uni-match-media"),f),x=h(r("uni-easyinput"),w),P=h(r("uni-forms-item"),b),$=h(r("uni-id-pages-sms-form"),g),B=c,M=h(r("uni-forms"),_),U=h(r("uni-popup-captcha"),y);return u(),t(j,{class:"uni-content"},{default:i((()=>[l(v,{"min-width":690},{default:i((()=>[l(j,{class:"login-logo"},{default:i((()=>[l(C,{src:D.logo},null,8,["src"])])),_:1}),l(V,{class:"title title-box"},{default:i((()=>[d("通过手机验证码找回密码")])),_:1})])),_:1}),l(M,{ref:"form",value:D.formData,"err-show-type":"toast"},{default:i((()=>[l(P,{name:"phone"},{default:i((()=>[l(x,{focus:D.focusPhone,onBlur:o[0]||(o[0]=e=>D.focusPhone=!1),class:"input-box",disabled:D.lock,type:"number",inputBorder:!1,trim:"both",modelValue:D.formData.phone,"onUpdate:modelValue":o[1]||(o[1]=e=>D.formData.phone=e),maxlength:"11",placeholder:"请输入手机号"},null,8,["focus","disabled","modelValue"])])),_:1}),l(P,{name:"code"},{default:i((()=>[l($,{ref:"shortCode",phone:D.formData.phone,type:"reset-pwd-by-sms",modelValue:D.formData.code,"onUpdate:modelValue":o[2]||(o[2]=e=>D.formData.code=e)},null,8,["phone","modelValue"])])),_:1}),l(P,{name:"password"},{default:i((()=>[l(x,{focus:D.focusPassword,onBlur:o[3]||(o[3]=e=>D.focusPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:D.formData.password,"onUpdate:modelValue":o[4]||(o[4]=e=>D.formData.password=e),trim:"both",placeholder:"请输入新密码"},null,8,["focus","modelValue"])])),_:1}),l(P,{name:"password2"},{default:i((()=>[l(x,{focus:D.focusPassword2,onBlur:o[5]||(o[5]=e=>D.focusPassword2=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:D.formData.password2,"onUpdate:modelValue":o[6]||(o[6]=e=>D.formData.password2=e),trim:"both",placeholder:"请再次输入新密码"},null,8,["focus","modelValue"])])),_:1}),l(B,{class:"uni-btn send-btn-box",type:"primary",onClick:k.submit},{default:i((()=>[d("提交")])),_:1},8,["onClick"]),l(v,{"min-width":690},{default:i((()=>[l(j,{class:"link-box"},{default:i((()=>[l(V,{class:"link",onClick:k.retrieveByEmail},{default:i((()=>[d("通过邮箱验证码找回密码")])),_:1},8,["onClick"]),l(j),l(V,{class:"link",onClick:k.backLogin},{default:i((()=>[d("返回登录")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["value"]),l(U,{onConfirm:k.submit,modelValue:D.formData.captcha,"onUpdate:modelValue":o[7]||(o[7]=e=>D.formData.captcha=e),scene:"reset-pwd-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-abcd9a31"]]);export{j as default};
