import{g as s,ah as o,C as e,u as a,l as t,c as r,w as i,i as n,o as l,a as d,b as u,A as p,p as c,f as m,V as f}from"./index-DVYpAuCD.js";import{_ as w}from"./uni-match-media.DXu11WLx.js";import{r as h}from"./uni-app.es.CoMFyYcx.js";import{_ as g}from"./uni-easyinput.CoRrRlvW.js";import{_}from"./uni-forms-item.DU_y5aNY.js";import{_ as P}from"./uni-id-pages-sms-form.Awr9WjG5.js";import{_ as y}from"./uni-forms.Cp0cG3HG.js";import{_ as b}from"./uni-popup-captcha.C39Eh7k2.js";import{p as D}from"./password.C0D-FX8-.js";import{s as j,m as k}from"./store.CwsX-Tdg.js";import{_ as C}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.DiJ6eL87.js";import"./uni-captcha.DILNkHrm.js";import"./uni-popup.B40DE7cP.js";const I=s.importObject("uni-id-co",{customUI:!0});const V=C({name:"set-pwd.vue",data:()=>({uniIdRedirectUrl:"",loginType:"",logo:"/static/logo.png",focusNewPassword:!1,focusNewPassword2:!1,allowSkip:!1,formData:{code:"",captcha:"",newPassword:"",newPassword2:""},rules:D.getPwdRules("newPassword","newPassword2")}),computed:{userInfo:()=>j.userInfo},onReady(){this.$refs.form.setRules(this.rules)},onLoad(s){var e;this.uniIdRedirectUrl=s.uniIdRedirectUrl,this.loginType=s.loginType,o.setPasswordAfterLogin&&(null==(e=o.setPasswordAfterLogin)?void 0:e.allowSkip)&&(this.allowSkip=!0)},methods:{submit(){if(!/^\d{6}$/.test(this.formData.code))return this.$refs.smsCode.focusSmsCodeInput=!0,e({title:"验证码格式不正确",icon:"none"});this.$refs.form.validate().then((s=>{I.setPwd({password:this.formData.newPassword,code:this.formData.code,captcha:this.formData.captcha}).then((s=>{a({content:"密码设置成功",showCancel:!1,success:()=>{k.loginBack({uniIdRedirectUrl:this.uniIdRedirectUrl,loginType:this.loginType})}})})).catch((s=>{a({content:s.message,showCancel:!1})}))})).catch((s=>{"uni-id-captcha-required"==s.errCode?this.$refs.popup.open():console.log(s.errMsg)})).finally((s=>{this.formData.captcha=""}))},skip(){k.loginBack({uniIdRedirectUrl:this.uniIdRedirectUrl})}}},[["render",function(s,o,e,a,D,j){const k=c,C=n,I=m,V=h(t("uni-match-media"),w),U=h(t("uni-easyinput"),g),R=h(t("uni-forms-item"),_),v=h(t("uni-id-pages-sms-form"),P),x=f,B=h(t("uni-forms"),y),N=h(t("uni-popup-captcha"),b);return l(),r(C,{class:"uni-content"},{default:i((()=>[d(V,{"min-width":690},{default:i((()=>[d(C,{class:"login-logo"},{default:i((()=>[d(k,{src:D.logo},null,8,["src"])])),_:1}),d(I,{class:"title title-box"},{default:i((()=>[u("设置密码")])),_:1})])),_:1}),d(B,{class:"set-password-form",ref:"form",value:D.formData,"err-show-type":"toast"},{default:i((()=>[d(I,{class:"tip"},{default:i((()=>[u("输入密码")])),_:1}),d(R,{name:"newPassword"},{default:i((()=>[d(U,{focus:D.focusNewPassword,onBlur:o[0]||(o[0]=s=>D.focusNewPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:D.formData.newPassword,"onUpdate:modelValue":o[1]||(o[1]=s=>D.formData.newPassword=s),placeholder:"请输入密码"},null,8,["focus","modelValue"])])),_:1}),d(I,{class:"tip"},{default:i((()=>[u("再次输入密码")])),_:1}),d(R,{name:"newPassword2"},{default:i((()=>[d(U,{focus:D.focusNewPassword2,onBlur:o[2]||(o[2]=s=>D.focusNewPassword2=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:D.formData.newPassword2,"onUpdate:modelValue":o[3]||(o[3]=s=>D.formData.newPassword2=s),placeholder:"请再次输入新密码"},null,8,["focus","modelValue"])])),_:1}),d(v,{modelValue:D.formData.code,"onUpdate:modelValue":o[4]||(o[4]=s=>D.formData.code=s),type:"set-pwd-by-sms",ref:"smsCode",phone:j.userInfo.mobile},null,8,["modelValue","phone"]),d(C,{class:"link-box"},{default:i((()=>[d(x,{class:"uni-btn send-btn",type:"primary",onClick:j.submit},{default:i((()=>[u("确认")])),_:1},8,["onClick"]),D.allowSkip?(l(),r(x,{key:0,class:"uni-btn send-btn",type:"default",onClick:j.skip},{default:i((()=>[u("跳过")])),_:1},8,["onClick"])):p("",!0)])),_:1})])),_:1},8,["value"]),d(N,{onConfirm:j.submit,modelValue:D.formData.captcha,"onUpdate:modelValue":o[5]||(o[5]=s=>D.formData.captcha=s),scene:"set-pwd-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-f34b7681"]]);export{V as default};
