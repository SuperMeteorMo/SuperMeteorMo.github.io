import{an as e,ao as i,ap as s,C as n,n as o,l as t,c as a,w as l,i as p,o as u,a as r,b as d,e as c,F as g,p as m,f as h,a1 as f}from"./index-DaWOLB7u.js";import{_ as y}from"./uni-id-pages-agreements.CksKxjFM.js";import{r as b}from"./uni-app.es.CZKDAWJM.js";import{_}from"./uni-easyinput.BNN2yiQA.js";import{_ as k}from"./uni-id-pages-fab-login.C90frxLp.js";import{m as x}from"./login-page.mixin.CoA723GH.js";import{_ as w}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-popup-dialog.CSz0GUXo.js";import"./uni-popup.DgTHHg2i.js";import"./uni-icons.DoovmNf9.js";import"./store.OuolqkZQ.js";const L=w({mixins:[x],data:()=>({type:"",phone:"",focusPhone:!1,logo:"/static/logo.png"}),computed:{loginTypes:async()=>e.loginTypes,isPhone(){return/^1\d{10}$/.test(this.phone)},imgSrc(){return"weixin"==this.type?"/uni_modules/uni-id-pages/static/login/weixin.png":"/uni_modules/uni-id-pages/static/app-plus/apple.png"}},async onLoad(s){let n=s.type||e.loginTypes[0];this.type=n,"univerify"!=n&&(this.focusPhone=!0),this.$nextTick((()=>{["weixin","apple"].includes(n)&&(this.$refs.uniFabLogin.servicesList=this.$refs.uniFabLogin.servicesList.filter((e=>e.id!=n)))})),i("uni-id-pages-setLoginType",(e=>{this.type=e}))},onShow(){document.onkeydown=e=>{var i=e||window.event;i&&13==i.keyCode&&this.toSmsPage()}},onUnload(){s("uni-id-pages-setLoginType")},onReady(){},methods:{showCurrentWebview(){undefined.setStyle({top:0})},quickLogin(e){var i,s;let n={};(null==(i=e.detail)?void 0:i.code)&&(n.phoneNumberCode=e.detail.code),("weixinMobile"!==this.type||(null==(s=e.detail)?void 0:s.code))&&this.$refs.uniFabLogin.login_before(this.type,!0,n)},toSmsPage(){return this.isPhone?this.needAgreements&&!this.agree?this.$refs.agreements.popup(this.toSmsPage):void o({url:"/uni_modules/uni-id-pages/pages/login/login-smscode?phoneNumber="+this.phone}):(this.focusPhone=!0,n({title:"手机号码格式不正确",icon:"none",duration:3e3}))},toPwdLogin(){o({url:"../login/password"})},chooseArea(){n({title:"暂不支持其他国家",icon:"none",duration:3e3})}}},[["render",function(e,i,s,n,o,x){const w=m,L=p,v=h,P=f,j=b(t("uni-id-pages-agreements"),y),C=b(t("uni-easyinput"),_),S=b(t("uni-id-pages-fab-login"),k);return u(),a(L,{class:"uni-content"},{default:l((()=>[r(L,{class:"login-logo"},{default:l((()=>[r(w,{src:o.logo},null,8,["src"])])),_:1}),r(v,{class:"title"},{default:l((()=>[d("请选择登录方式")])),_:1}),["apple","weixin","weixinMobile"].includes(o.type)?(u(),c(g,{key:0},[r(v,{class:"tip"},{default:l((()=>[d("将根据第三方账号服务平台的授权范围获取你的信息")])),_:1}),r(L,{class:"quickLogin"},{default:l((()=>["weixinMobile"!==o.type?(u(),a(w,{key:0,onClick:x.quickLogin,src:x.imgSrc,mode:"widthFix",class:"quickLoginBtn"},null,8,["onClick","src"])):(u(),a(P,{key:1,type:"primary","open-type":"getPhoneNumber",onGetphonenumber:x.quickLogin,class:"uni-btn"},{default:l((()=>[d("微信授权手机号登录")])),_:1},8,["onGetphonenumber"])),r(j,{scope:"register",ref:"agreements"},null,512)])),_:1})],64)):(u(),c(g,{key:1},[r(v,{class:"tip"},{default:l((()=>[d("未注册的账号验证通过后将自动注册")])),_:1}),r(L,{class:"phone-box"},{default:l((()=>[r(L,{onClick:x.chooseArea,class:"area"},{default:l((()=>[d("+86")])),_:1},8,["onClick"]),r(C,{trim:"both",focus:o.focusPhone,onBlur:i[0]||(i[0]=e=>o.focusPhone=!1),class:"input-box",type:"number",inputBorder:!1,modelValue:o.phone,"onUpdate:modelValue":i[1]||(i[1]=e=>o.phone=e),maxlength:"11",placeholder:"请输入手机号"},null,8,["focus","modelValue"])])),_:1}),r(j,{scope:"register",ref:"agreements"},null,512),r(P,{class:"uni-btn",type:"primary",onClick:x.toSmsPage},{default:l((()=>[d("获取验证码")])),_:1},8,["onClick"])],64)),r(S,{ref:"uniFabLogin"},null,512)])),_:1})}],["__scopeId","data-v-66062f3f"]]);export{L as default};
