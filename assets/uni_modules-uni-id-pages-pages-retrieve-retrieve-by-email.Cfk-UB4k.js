import{e,n as a,a0 as o,m as s,c as t,w as r,i,o as l,a as m,b as u,q as d,h as n,$ as p}from"./index-86rZ-D-t.js";import{_ as c}from"./uni-match-media.Cm9nDgPU.js";import{r as f}from"./uni-app.es.Cksdd9Qe.js";import{_ as h}from"./uni-easyinput.CTOjbJ8w.js";import{_ as w}from"./uni-forms-item.CyYqCa5A.js";import{_ as g}from"./uni-id-pages-email-form.Bl8BxIRA.js";import{_}from"./uni-forms.B_CTfGEe.js";import{_ as b}from"./uni-popup-captcha.C6XoG79s.js";import{m as D}from"./login-page.mixin.gM0cw5Ni.js";import{p as k}from"./password.Budth2Ml.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.jo3z_KBL.js";import"./uni-captcha.BAbmAz6r.js";import"./uni-popup.y6iiP_Bm.js";import"./store.1mgwHa0O.js";const j=e.importObject("uni-id-co",{errorOptions:{type:"toast"}});const C=y({mixins:[D],data:()=>({lock:!1,focusEmail:!0,focusPassword:!1,focusPassword2:!1,formData:{email:"",code:"",password:"",password2:"",captcha:""},rules:{email:{rules:[{required:!0,errorMessage:"请输入邮箱"},{format:"email",errorMessage:"邮箱格式不正确"}]},code:{rules:[{required:!0,errorMessage:"请输入邮箱验证码"},{pattern:/^.{6}$/,errorMessage:"请输入6位验证码"}]},...k.getPwdRules()},logo:"/static/logo.png"}),computed:{isEmail(){return/@/.test(this.formData.email)},isPwd(){return/^.{6,20}$/.test(this.formData.password)},isCode(){return/^\d{6}$/.test(this.formData.code)}},onLoad(e){e&&e.emailNumber&&(this.formData.email=e.emailNumber,e.lock&&(this.lock=e.lock,this.focusEmail=!0))},onReady(){this.formData.email&&this.$refs.shortCode.start(),this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=e=>{var a=e||window.event;a&&13==a.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((e=>{let{email:o,password:s,captcha:t,code:r}=this.formData;j.resetPwdByEmail({email:o,code:r,password:s,captcha:t}).then((e=>{a({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd",complete:e=>{}})})).catch((e=>{"uni-id-captcha-required"==e.errCode&&this.$refs.popup.open()})).finally((e=>{this.formData.captcha=""}))})).catch((e=>{let a=e[0].key;if("code"==a)return this.$refs.shortCode.focusSmsCodeInput=!0;a=a.replace(a[0],a[0].toUpperCase()),this["focus"+a]=!0}))},retrieveByPhone(){a({url:"/uni_modules/uni-id-pages/pages/retrieve/retrieve"})},backLogin(){o({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})}}},[["render",function(e,a,o,D,k,y){const j=d,C=i,V=n,P=f(s("uni-match-media"),c),v=f(s("uni-easyinput"),h),x=f(s("uni-forms-item"),w),$=f(s("uni-id-pages-email-form"),g),B=p,U=f(s("uni-forms"),_),E=f(s("uni-popup-captcha"),b);return l(),t(C,{class:"uni-content"},{default:r((()=>[m(P,{"min-width":690},{default:r((()=>[m(C,{class:"login-logo"},{default:r((()=>[m(j,{src:k.logo},null,8,["src"])])),_:1}),m(V,{class:"title title-box"},{default:r((()=>[u("通过邮箱验证码找回密码")])),_:1})])),_:1}),m(U,{ref:"form",value:k.formData,"err-show-type":"toast"},{default:r((()=>[m(x,{name:"email"},{default:r((()=>[m(v,{focus:k.focusEmail,onBlur:a[0]||(a[0]=e=>k.focusEmail=!1),class:"input-box",disabled:k.lock,inputBorder:!1,trim:"both",modelValue:k.formData.email,"onUpdate:modelValue":a[1]||(a[1]=e=>k.formData.email=e),placeholder:"请输入邮箱"},null,8,["focus","disabled","modelValue"])])),_:1}),m(x,{name:"code"},{default:r((()=>[m($,{ref:"shortCode",email:k.formData.email,type:"reset-pwd-by-email",modelValue:k.formData.code,"onUpdate:modelValue":a[2]||(a[2]=e=>k.formData.code=e)},null,8,["email","modelValue"])])),_:1}),m(x,{name:"password"},{default:r((()=>[m(v,{focus:k.focusPassword,onBlur:a[3]||(a[3]=e=>k.focusPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:k.formData.password,"onUpdate:modelValue":a[4]||(a[4]=e=>k.formData.password=e),trim:"both",placeholder:"请输入新密码"},null,8,["focus","modelValue"])])),_:1}),m(x,{name:"password2"},{default:r((()=>[m(v,{focus:k.focusPassword2,onBlur:a[5]||(a[5]=e=>k.focusPassword2=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:k.formData.password2,"onUpdate:modelValue":a[6]||(a[6]=e=>k.formData.password2=e),trim:"both",placeholder:"请再次输入新密码"},null,8,["focus","modelValue"])])),_:1}),m(B,{class:"uni-btn send-btn-box",type:"primary",onClick:y.submit},{default:r((()=>[u("提交")])),_:1},8,["onClick"]),m(P,{"min-width":690},{default:r((()=>[m(C,{class:"link-box"},{default:r((()=>[m(V,{class:"link",onClick:y.retrieveByPhone},{default:r((()=>[u("通过手机验证码找回密码")])),_:1},8,["onClick"]),m(C),m(V,{class:"link",onClick:y.backLogin},{default:r((()=>[u("返回登录")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["value"]),m(E,{onConfirm:y.submit,modelValue:k.formData.captcha,"onUpdate:modelValue":a[7]||(a[7]=e=>k.formData.captcha=e),scene:"reset-pwd-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-63882b6c"]]);export{C as default};
