import{e,h as s,az as o,C as i,q as n,v as t,a6 as r,a0 as a,aA as u,X as l,y as d,a5 as c,z as g,ap as f}from"./index-BnZTiJHI.js";const p=e.importObject("uni-id-co"),I=e.database().collection("uni-id-users");let h=s("uni-id-pages-userInfo")||{};const w={userInfo:h,hasLogin:0!=Object.keys(h).length},m={async updateUserInfo(s=!1){if(s)I.where("_id==$env.uid").update(s).then((e=>{e.result.updated?(i({title:"更新成功",icon:"none",duration:3e3}),this.setUserInfo(s)):i({title:"没有改变",icon:"none",duration:3e3})}));else{const s=e.getCurrentUserInfo().uid;this.setUserInfo({_id:s},{cover:!0});const i=e.importObject("uni-id-co",{customUI:!0});try{let e=await I.where("'_id' == $cloudEnv_uid").field("mobile,nickname,username,email,avatar_file").get();const s=await i.getRealNameInfo();this.setUserInfo({...e.result.data[0],realNameAuth:s})}catch(o){this.setUserInfo({},{cover:!0}),console.error(o.message,o.errCode)}}},setUserInfo(e,{cover:s}={cover:!1}){let o=s?e:Object.assign(U.userInfo,e);return U.userInfo=Object.assign({},o),U.hasLogin=0!=Object.keys(U.userInfo).length,n("uni-id-pages-userInfo",U.userInfo),e},async logout(){if(e.getCurrentUserInfo().tokenExpired>Date.now())try{await p.logout()}catch(s){console.error(s)}t("uni_id_token"),n("uni_id_token_expired",0),this.setUserInfo({},{cover:!0}),r("uni-id-pages-logout"),a({url:`/${u.uniIdRouter&&u.uniIdRouter.loginPage?u.uniIdRouter.loginPage:"uni_modules/uni-id-pages/pages/login/login-withoutpwd"}`})},loginBack(e={}){const{uniIdRedirectUrl:s=""}=e;let o=0,i=l();if(i.forEach(((e,s)=>{"login"==i[i.length-s-1].route.split("/")[3]&&o++})),s)return a({url:s,fail:e=>{d({url:s,fail:s=>{console.log(e,s)}})}});if("weixin"==e.loginType)return window.history.go(-3);if(o){const e=u.pages[0];return c({url:`/${e.path}`})}g({delta:o})},loginSuccess(e={}){const{showToast:s=!0,toastText:o="登录成功",autoBack:n=!0,uniIdRedirectUrl:t="",passwordConfirmed:u}=e;if(s&&i({title:o,icon:"none",duration:3e3}),this.updateUserInfo(),r("uni-id-pages-login-success"),f.setPasswordAfterLogin&&!u)return a({url:t?`/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd?uniIdRedirectUrl=${t}&loginType=${e.loginType}`:`/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd?loginType=${e.loginType}`,fail:e=>{console.log(e)}});n&&this.loginBack({uniIdRedirectUrl:t})}},U=o(w);export{m,U as s};
