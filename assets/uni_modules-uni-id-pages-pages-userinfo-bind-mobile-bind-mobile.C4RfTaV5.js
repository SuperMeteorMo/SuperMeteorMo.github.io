import{_ as o,q as a,e,a2 as t,H as s,r as i,a as n,c as l,w as m,i as r,o as u,h as c,k as d,u as p,v as f,p as h}from"./index-ChNMzRY4.js";import{_ as b}from"./uni-match-media.BUQ8krgL.js";import{_ as D}from"./uni-easyinput.Bwbd5nzK.js";import{_ as g}from"./uni-id-pages-sms-form.Ccx7tYGM.js";import{_}from"./uni-popup-captcha.BOqZhVzX.js";import"./uni-captcha.3SO-g26r.js";const y=o({data:()=>({formData:{mobile:"",code:"",captcha:""},focusMobile:!0,logo:"/static/logo.png"}),computed:{tipText(){return`验证码已通过短信发送至 ${this.formData.mobile}。密码为6 - 20位`}},onLoad(o){},onReady(){},methods:{submit(){if(!/^1\d{10}$/.test(this.formData.mobile))return this.focusMobile=!0,a({title:"手机号码格式不正确",icon:"none",duration:3e3});if(!/^\d{6}$/.test(this.formData.code))return this.$refs.smsForm.focusSmsCodeInput=!0,a({title:"验证码格式不正确",icon:"none",duration:3e3});e.importObject("uni-id-co").bindMobileBySms(this.formData).then((o=>{a({title:o.errMsg,icon:"none",duration:3e3}),this.getOpenerEventChannel(),t.setUserInfo(this.formData),s()})).catch((o=>{console.log(o),"uni-id-captcha-required"==o.errCode&&this.$refs.popup.open()})).finally((o=>{this.formData.captcha=""}))}}},[["render",function(o,a,e,t,s,y){const V=p,j=r,x=f,C=i(n("uni-match-media"),b),M=i(n("uni-easyinput"),D),$=i(n("uni-id-pages-sms-form"),g),k=h,v=i(n("uni-popup-captcha"),_);return u(),l(j,{class:"uni-content"},{default:m((()=>[c(C,{"min-width":690},{default:m((()=>[c(j,{class:"login-logo"},{default:m((()=>[c(V,{src:s.logo},null,8,["src"])])),_:1}),c(x,{class:"title title-box"},{default:m((()=>[d("绑定手机号")])),_:1})])),_:1}),c(M,{clearable:"",focus:s.focusMobile,onBlur:a[0]||(a[0]=o=>s.focusMobile=!1),type:"number",class:"input-box",inputBorder:!1,modelValue:s.formData.mobile,"onUpdate:modelValue":a[1]||(a[1]=o=>s.formData.mobile=o),maxlength:"11",placeholder:"请输入手机号"},null,8,["focus","modelValue"]),c($,{ref:"smsForm",type:"bind-mobile-by-sms",modelValue:s.formData.code,"onUpdate:modelValue":a[2]||(a[2]=o=>s.formData.code=o),phone:s.formData.mobile},null,8,["modelValue","phone"]),c(k,{class:"uni-btn send-btn-box",type:"primary",onClick:y.submit},{default:m((()=>[d("提交")])),_:1},8,["onClick"]),c(v,{onConfirm:y.submit,modelValue:s.formData.captcha,"onUpdate:modelValue":a[3]||(a[3]=o=>s.formData.captcha=o),scene:"bind-mobile-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-8ad2d767"]]);export{y as default};
