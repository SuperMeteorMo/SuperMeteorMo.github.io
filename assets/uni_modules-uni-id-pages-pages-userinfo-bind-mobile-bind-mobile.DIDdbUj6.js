import{C as o,g as a,z as e,l as t,c as s,w as i,i as n,o as r,a as m,b as l,p as u,f as p,a1 as c}from"./index-Nr1wO0Nh.js";import{_ as d}from"./uni-match-media.BPy4NeCp.js";import{r as f}from"./uni-app.es.D1aCJPSs.js";import{_ as b}from"./uni-easyinput.CIJqMQeD.js";import{_ as h}from"./uni-id-pages-sms-form.CJSZaZGl.js";import{_ as D}from"./uni-popup-captcha.DnxNoDYk.js";import{m as g}from"./store.CRSy-qi_.js";import{_}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.BqVh1rwu.js";import"./uni-captcha.efOcdbkh.js";import"./uni-popup.4PLxvFcZ.js";const j=_({data:()=>({formData:{mobile:"",code:"",captcha:""},focusMobile:!0,logo:"/static/logo.png"}),computed:{tipText(){return`验证码已通过短信发送至 ${this.formData.mobile}。密码为6 - 20位`}},onLoad(o){},onReady(){},methods:{submit(){if(!/^1\d{10}$/.test(this.formData.mobile))return this.focusMobile=!0,o({title:"手机号码格式不正确",icon:"none",duration:3e3});if(!/^\d{6}$/.test(this.formData.code))return this.$refs.smsForm.focusSmsCodeInput=!0,o({title:"验证码格式不正确",icon:"none",duration:3e3});a.importObject("uni-id-co").bindMobileBySms(this.formData).then((a=>{o({title:a.errMsg,icon:"none",duration:3e3}),this.getOpenerEventChannel(),g.setUserInfo(this.formData),e()})).catch((o=>{console.log(o),"uni-id-captcha-required"==o.errCode&&this.$refs.popup.open()})).finally((o=>{this.formData.captcha=""}))}}},[["render",function(o,a,e,g,_,j){const y=u,x=n,V=p,C=f(t("uni-match-media"),d),M=f(t("uni-easyinput"),b),$=f(t("uni-id-pages-sms-form"),h),v=c,U=f(t("uni-popup-captcha"),D);return r(),s(x,{class:"uni-content"},{default:i((()=>[m(C,{"min-width":690},{default:i((()=>[m(x,{class:"login-logo"},{default:i((()=>[m(y,{src:_.logo},null,8,["src"])])),_:1}),m(V,{class:"title title-box"},{default:i((()=>[l("绑定手机号")])),_:1})])),_:1}),m(M,{clearable:"",focus:_.focusMobile,onBlur:a[0]||(a[0]=o=>_.focusMobile=!1),type:"number",class:"input-box",inputBorder:!1,modelValue:_.formData.mobile,"onUpdate:modelValue":a[1]||(a[1]=o=>_.formData.mobile=o),maxlength:"11",placeholder:"请输入手机号"},null,8,["focus","modelValue"]),m($,{ref:"smsForm",type:"bind-mobile-by-sms",modelValue:_.formData.code,"onUpdate:modelValue":a[2]||(a[2]=o=>_.formData.code=o),phone:_.formData.mobile},null,8,["modelValue","phone"]),m(v,{class:"uni-btn send-btn-box",type:"primary",onClick:j.submit},{default:i((()=>[l("提交")])),_:1},8,["onClick"]),m(U,{onConfirm:j.submit,modelValue:_.formData.captcha,"onUpdate:modelValue":a[3]||(a[3]=o=>_.formData.captcha=o),scene:"bind-mobile-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-8ad2d767"]]);export{j as default};
