import{x as e,j as t,h as n,B as i,W as s,C as o,M as a,X as l,Y as r,N as c,Z as u,q as g,$ as d,a0 as p,a1 as h,l as f,c as m,w as v,i as k,o as I,a as L,A as b,b as A,t as $,f as S}from"./index-BpteF7XO.js";import{_ as x,a as O}from"./uni-list.CiJnS1eA.js";import{r as _}from"./uni-app.es.CzYWKprg.js";import{s as T,m as P}from"./store.DcqqqD6V.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.ChP_gS18.js";function C(){var e=void 0;try{if("iOS"==plus.os.name){var t=0,n=plus.ios.invoke("UIApplication","sharedApplication"),i=plus.ios.invoke(n,"currentUserNotificationSettings");i?(t=i.plusGetAttribute("types"),plus.ios.deleteObject(i)):t=plus.ios.invoke(n,"enabledRemoteNotificationTypes"),plus.ios.deleteObject(n),e=0!=t}else{var s=plus.android.runtimeMainActivity(),o=plus.android.invoke("com.igexin.sdk.PushManager","getInstance");e=plus.android.invoke(o,"isPushTurnedOn",s)}}catch(a){console.error("exception in isTurnedOnPush@dc-push!!")}return e}function N(){try{if("iOS"==plus.os.name){var e=plus.ios.invoke("UIApplication","sharedApplication"),t=plus.ios.invoke("NSURL","URLWithString:","app-settings:");plus.ios.invoke(e,"openURL:",t),plus.ios.deleteObject(t),plus.ios.deleteObject(e)}}catch(n){console.error("exception in settingInIos@dc-push!!")}}const E={isOn:C,iosSetting:N,on:function(){try{if("iOS"==plus.os.name)C()||N();else{var e=plus.android.runtimeMainActivity(),t=plus.android.invoke("com.igexin.sdk.PushManager","getInstance");plus.android.invoke(t,"turnOnPush",e)}}catch(n){console.error("exception in turnOnPush@dc-push!!")}},off:function(){try{if("iOS"==plus.os.name);else{var e=plus.android.runtimeMainActivity(),t=plus.android.invoke("com.igexin.sdk.PushManager","getInstance");plus.android.invoke(t,"turnOffPush",e)}}catch(n){console.error("exception in trunOffPush@dc-push!!")}},setting:function(){"ios"==e().platform&&N(),"android"==e().platform&&function(){if("android"==e().platform){var t=plus.android.runtimeMainActivity(),n=new(plus.android.importClass("android.content.Intent"))(plus.android.importClass("android.provider.Settings").ACTION_APPLICATION_DETAILS_SETTINGS);t.startActivity(n)}}()}};const M=y({data:()=>({pushServer:E,supportMode:[],pushIsOn:"wait",currentLanguage:"",userInfo:{}}),computed:{hasLogin:()=>T.hasLogin,i18nEnable:()=>t().globalData.config.i18n.enable},onLoad(){this.currentLanguage="en"==n("CURRENT_LANG")?"English":"简体中文",i({title:this.$t("settings.navigationBarTitle")})},onShow(){},methods:{async changeLoginState(){this.hasLogin?await P.logout():s({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"})},startSoterAuthentication(e){console.log(e);let t={fingerPrint:this.$t("settings.fingerPrint"),facial:this.$t("settings.facial")}[e];this.checkIsSoterEnrolledInDevice({checkAuthMode:e,title:t}).then((()=>{console.log(e,t),uni.startSoterAuthentication({requestAuthModes:[e],challenge:"123456",authContent:this.$t("settings.please")+` ${t}`,complete:e=>{console.log(e)},success:e=>{if(console.log(e),0==e.errCode)return o({title:`${t}`+this.$t("settings.successText"),icon:"none"});o({title:this.$t("settings.failTip"),icon:"none"})},fail:e=>{console.log(e),console.log(`认证失败:${e.errCode}`),o({title:this.$t("settings.authFailed"),icon:"none"})}})}))},checkIsSoterEnrolledInDevice({checkAuthMode:e,title:t}){return new Promise(((n,i)=>{uni.checkIsSoterEnrolledInDevice({checkAuthMode:e,success:e=>{if(console.log(e),e.isEnrolled)return n(e);o({title:this.$t("settings.deviceNoOpen")+`${t}`,icon:"none"}),i(e)},fail:e=>{console.log(e),o({title:`${t}`+this.$t("settings.fail"),icon:"none"}),i(e)}})}))},clearTmp(){a({title:this.$t("settings.clearing"),mask:!0}),l({success:e=>{e.fileList.length>0?r({filePath:e.fileList[0].filePath,complete:e=>{console.log(e),c(),o({title:this.$t("settings.clearedSuccessed"),icon:"none"})}}):(c(),o({title:this.$t("settings.clearedSuccessed"),icon:"none"}))},complete:e=>{console.log(e)}})},changeLanguage(){console.log("语言切换"),u({itemList:["English","简体中文"],success:e=>{console.log(e.tapIndex);let i=n("CURRENT_LANG");if(!e.tapIndex&&"zh-Hans"==i||e.tapIndex&&"en"==i){const n=t().globalData;i=n.locale="en"===i?"zh-Hans":"en",g("CURRENT_LANG",i),t().globalData.$i18n.locale=i,this.currentLanguage=e.tapIndex?"简体中文":"English",d&&d(i),p({url:"/pages/list/list",complete:()=>{h("changeLanguage",i)}})}},fail:()=>{},complete:()=>{}})}}},[["render",function(e,t,n,i,s,o){const a=_(f("uni-list-item"),x),l=_(f("uni-list"),O),r=S,c=k;return I(),m(c,{class:"content"},{default:v((()=>[L(l,{class:"mt10",border:!1},{default:v((()=>[L(a,{title:e.$t("settings.userInfo"),to:"/uni_modules/uni-id-pages/pages/userinfo/userinfo",link:"navigateTo"},null,8,["title"]),s.userInfo.mobile?(I(),m(a,{key:0,title:e.$t("settings.changePassword"),to:"/pages/ucenter/login-page/pwd-retrieve/pwd-retrieve?phoneNumber="+s.userInfo.mobile,link:"navigateTo"},null,8,["title","to"])):b("",!0)])),_:1}),L(l,{class:"mt10",border:!1},{default:v((()=>[o.i18nEnable?(I(),m(a,{key:0,title:e.$t("settings.changeLanguage"),onClick:o.changeLanguage,rightText:s.currentLanguage,link:""},null,8,["title","onClick","rightText"])):b("",!0)])),_:1}),L(c,{class:"bottom-back",onClick:o.changeLoginState},{default:v((()=>[o.hasLogin?(I(),m(r,{key:0,class:"bottom-back-text"},{default:v((()=>[A($(e.$t("settings.logOut")),1)])),_:1})):(I(),m(r,{key:1,class:"bottom-back-text"},{default:v((()=>[A($(e.$t("settings.login")),1)])),_:1}))])),_:1},8,["onClick"])])),_:1})}],["__scopeId","data-v-e9506755"]]);export{M as default};
