import{ap as e,aq as i,ar as s,C as n,n as o,l as t,c as a,w as p,i as l,o as r,a as u,b as g,f as d,F as c,p as m,g as h,$ as f}from"./index-4EZ8v3QT.js";import{_ as y}from"./uni-id-pages-agreements.BOGqwyuP.js";import{r as b}from"./uni-app.es.Bc_DzAQZ.js";import{_ as w}from"./uni-id-pages-fab-login.DFS03IxM.js";import{m as _}from"./login-page.mixin.DVmzStNk.js";import{_ as L}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-popup-dialog.di5m83gI.js";import"./uni-popup.TA5eMYsY.js";import"./store.D7g1bi5i.js";const k=L({mixins:[_],data:()=>({type:"",phone:"",focusPhone:!1,logo:"/static/logo.png"}),computed:{loginTypes:async()=>e.loginTypes,isPhone(){return/^1\d{10}$/.test(this.phone)},imgSrc(){return"weixin"==this.type?"/uni_modules/uni-id-pages/static/login/weixin.png":"/uni_modules/uni-id-pages/static/app-plus/apple.png"}},async onLoad(s){let n=s.type||e.loginTypes[0];this.type=n,"univerify"!=n&&(this.focusPhone=!0),this.$nextTick((()=>{["weixin","apple"].includes(n)&&(this.$refs.uniFabLogin.servicesList=this.$refs.uniFabLogin.servicesList.filter((e=>e.id!=n)))})),i("uni-id-pages-setLoginType",(e=>{this.type=e}))},onShow(){document.onkeydown=e=>{var i=e||window.event;i&&13==i.keyCode&&this.toSmsPage()}},onUnload(){s("uni-id-pages-setLoginType")},onReady(){},methods:{showCurrentWebview(){undefined.setStyle({top:0})},quickLogin(e){var i,s;let n={};(null==(i=e.detail)?void 0:i.code)&&(n.phoneNumberCode=e.detail.code),("weixinMobile"!==this.type||(null==(s=e.detail)?void 0:s.code))&&this.$refs.uniFabLogin.login_before(this.type,!0,n)},toSmsPage(){return this.isPhone?this.needAgreements&&!this.agree?this.$refs.agreements.popup(this.toSmsPage):void o({url:"/uni_modules/uni-id-pages/pages/login/login-smscode?phoneNumber="+this.phone}):(this.focusPhone=!0,n({title:"手机号码格式不正确",icon:"none",duration:3e3}))},toPwdLogin(){o({url:"../login/password"})},chooseArea(){n({title:"暂不支持其他国家",icon:"none",duration:3e3})}}},[["render",function(e,i,s,n,o,_){const L=m,k=l,x=h,v=f,j=b(t("uni-id-pages-agreements"),y),P=b(t("uni-id-pages-fab-login"),w);return r(),a(k,{class:"uni-content"},{default:p((()=>[u(k,{class:"login-logo"},{default:p((()=>[u(L,{src:o.logo},null,8,["src"])])),_:1}),u(x,{class:"title"},{default:p((()=>[g("请选择登录方式")])),_:1}),["apple","weixin","weixinMobile"].includes(o.type)?(r(),d(c,{key:0},[u(x,{class:"tip"},{default:p((()=>[g("将根据第三方账号服务平台的授权范围获取你的信息")])),_:1}),u(k,{class:"quickLogin"},{default:p((()=>["weixinMobile"!==o.type?(r(),a(L,{key:0,onClick:_.quickLogin,src:_.imgSrc,mode:"widthFix",class:"quickLoginBtn"},null,8,["onClick","src"])):(r(),a(v,{key:1,type:"primary","open-type":"getPhoneNumber",onGetphonenumber:_.quickLogin,class:"uni-btn"},{default:p((()=>[g("微信授权手机号登录")])),_:1},8,["onGetphonenumber"])),u(j,{scope:"register",ref:"agreements"},null,512)])),_:1})],64)):(r(),d(c,{key:1},[],64)),u(P,{ref:"uniFabLogin"},null,512)])),_:1})}],["__scopeId","data-v-8fb03eb1"]]);export{k as default};
