import{x as e,W as i,e as t,E as a,n as o,ag as s,l as n,o as l,c as r,w as u,m as c,G as d,$ as p,am as h,a as m,b as f,g,i as y,C as b,A as _,f as w,F as v}from"./index-BnZTiJHI.js";import{_ as k}from"./cloud-image.FfFBarPb.js";import{r as I}from"./uni-app.es.CF8X_mXS.js";import{_ as C}from"./uni-icons.DXdvJWme.js";import{s as x,m as M}from"./store.Bou-8y0P.js";import{_ as S}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as P,a as B}from"./uni-list.DsqRgJfe.js";import{_ as A}from"./uni-popup-dialog.BtuhWYdV.js";import{_ as j}from"./uni-popup.Ctej2wo0.js";const L=S({data:()=>({isPC:!1}),props:{width:{type:String,default:()=>"50px"},height:{type:String,default:()=>"50px"},border:{type:Boolean,default:()=>!1}},async mounted(){this.isPC=!["ios","android"].includes(e().platform)},computed:{hasLogin:()=>x.hasLogin,userInfo:()=>x.userInfo,avatar_file:()=>x.userInfo.avatar_file},methods:{setAvatarFile(e){M.updateUserInfo({avatar_file:e})},async bindchooseavatar(e){let o=e.detail.avatarUrl,s={extname:o.split(".")[o.split(".").length-1],name:"",url:""},n=this.userInfo._id+""+Date.now();s.name=n;try{i({title:"更新中",mask:!0});let{fileID:e}=await t.uploadFile({filePath:o,cloudPath:n,fileType:"image"});s.url=e,a()}catch(l){console.error(l)}console.log("avatar_file",s),this.setAvatarFile(s)},uploadAvatarImg(e){if(!this.hasLogin)return o({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"});const n={quality:100,width:600,height:600,resize:!0};s({count:1,crop:n,success:async e=>{let s=e.tempFiles[0],l={extname:s.name.split(".")[s.name.split(".").length-1]},r=e.tempFilePaths[0];this.isPC||(r=await new Promise((e=>{o({url:"/uni_modules/uni-id-pages/pages/userinfo/cropImage/cropImage?path="+r+`&options=${JSON.stringify(n)}`,animationType:"fade-in",events:{success:i=>{e(i)}},complete(e){console.log(e)}})})));let u=this.userInfo._id+""+Date.now();l.name=u,i({title:"更新中",mask:!0});let{fileID:c}=await t.uploadFile({filePath:r,cloudPath:u,fileType:"image"});l.url=c,a(),this.setAvatarFile(l)}})}}},[["render",function(e,i,t,a,o,s){const h=I(n("cloud-image"),k),m=I(n("uni-icons"),C),f=p;return l(),r(f,{"open-type":"chooseAvatar",onChooseavatar:s.bindchooseavatar,onClick:s.uploadAvatarImg,class:d(["box",{showBorder:t.border}]),style:c({width:t.width,height:t.height,lineHeight:t.height})},{default:u((()=>[s.avatar_file?(l(),r(h,{key:0,src:s.avatar_file.url,width:t.width,height:t.height},null,8,["src","width","height"])):(l(),r(m,{key:1,style:c({width:t.width,height:t.height,lineHeight:t.height}),class:"chooseAvatar",type:"plusempty",size:"30",color:"#dddddd"},null,8,["style"]))])),_:1},8,["onChooseavatar","onClick","class","style"])}],["__scopeId","data-v-4fc3dad3"]]);t.database().collection("uni-id-users");const N=t.importObject("uni-id-co");const T=S({emits:["success"],computed:{},data:()=>({}),methods:{beforeGetphonenumber:async()=>await new Promise(((e,o)=>{i({mask:!0}),wx.checkSession({success(){e(),a()},fail(){h({success({code:i}){t.importObject("uni-id-co",{customUI:!0}).loginByWeixin({code:i}).then((i=>{e()})).catch((e=>{console.log(e),o()})).finally((e=>{a()}))},fail:e=>{console.error(e),o()}})}})})),async bindMobileByMpWeixin(e){"getPhoneNumber:ok"==e.detail.errMsg?(await this.beforeGetphonenumber(),N.bindMobileByMpWeixin(e.detail).then((e=>{this.$emit("success")})).finally((e=>{this.closeMe()}))):this.closeMe()},async open(){this.$refs.popup.open()},closeMe(e){this.$refs.popup.close()}}},[["render",function(e,i,t,a,o,s){const c=g,d=p,h=y,b=I(n("uni-popup"),j);return l(),r(b,{ref:"popup",type:"bottom"},{default:u((()=>[m(h,{class:"box"},{default:u((()=>[m(c,{class:"headBox"},{default:u((()=>[f("绑定资料")])),_:1}),m(c,{class:"tip"},{default:u((()=>[f("将一键获取你的手机号码绑定你的个人资料")])),_:1}),m(h,{class:"btnBox"},{default:u((()=>[m(c,{onClick:s.closeMe,class:"close"},{default:u((()=>[f("关闭")])),_:1},8,["onClick"]),m(d,{class:"agree uni-btn",type:"primary","open-type":"getPhoneNumber",onGetphonenumber:s.bindMobileByMpWeixin},{default:u((()=>[f("获取")])),_:1},8,["onGetphonenumber"])])),_:1})])),_:1})])),_:1},512)}],["__scopeId","data-v-1edc5089"]]),F=t.importObject("uni-id-co");const U=S({computed:{userInfo:()=>x.userInfo,realNameStatus(){return this.userInfo.realNameAuth?this.userInfo.realNameAuth.authStatus:0}},data:()=>({univerifyStyle:{authButton:{title:"本机号码一键绑定"},otherLoginButton:{title:"其他号码绑定"}},hasPwd:!1,showLoginManage:!1,setNicknameIng:!1}),async onShow(){this.univerifyStyle.authButton.title="本机号码一键绑定",this.univerifyStyle.otherLoginButton.title="其他号码绑定"},async onLoad(e){e.showLoginManage&&(this.showLoginManage=!0);let i=await F.getAccountInfo();this.hasPwd=i.isPasswordSet},methods:{login(){o({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd",complete:e=>{}})},logout(){M.logout()},bindMobileSuccess(){M.updateUserInfo()},changePassword(){o({url:"/uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd",complete:e=>{}})},bindMobile(){this.bindMobileBySmsCode()},univerify(){h({provider:"univerify",univerifyStyle:this.univerifyStyle,success:async e=>{F.bindMobileByUniverify(e.authResult).then((e=>{M.updateUserInfo()})).catch((e=>{console.log(e)})).finally((e=>{uni.closeAuthView()}))},fail:e=>{console.log(e),"30002"!=e.code&&"30001"!=e.code||this.bindMobileBySmsCode()}})},bindMobileBySmsCode(){o({url:"./bind-mobile/bind-mobile"})},setNickname(e){e?(M.updateUserInfo({nickname:e}),this.setNicknameIng=!1,this.$refs.dialog.close()):this.$refs.dialog.open()},deactivate(){o({url:"/uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate"})},async bindThirdAccount(e){const i=t.importObject("uni-id-co"),o={weixin:"wx_openid",alipay:"ali_openid",apple:"apple_openid",qq:"qq_openid"}[e.toLowerCase()];this.userInfo[o]?(await i["unbind"+e](),await M.updateUserInfo()):h({provider:e.toLowerCase(),onlyAuthorize:!0,success:async t=>{const a=await i["bind"+e]({code:t.code});a.errCode&&b({title:a.errMsg||"绑定失败",duration:3e3}),await M.updateUserInfo()},fail:async e=>{console.log(e),a()}})},realNameVerify(){o({url:"/uni_modules/uni-id-pages/pages/userinfo/realname-verify/realname-verify"})}}},[["render",function(e,i,t,a,o,s){const c=I(n("uni-id-pages-avatar"),L),d=y,h=I(n("uni-list-item"),P),g=I(n("uni-list"),B),b=I(n("uni-popup-dialog"),A),k=I(n("uni-popup"),j),C=I(n("uni-id-pages-bind-mobile"),T),x=p;return l(),r(d,{class:"uni-content"},{default:u((()=>[m(d,{class:"avatar"},{default:u((()=>[m(c,{width:"260rpx",height:"260rpx"})])),_:1}),m(g,null,{default:u((()=>[m(h,{class:"item",onClick:i[0]||(i[0]=e=>s.setNickname("")),title:"昵称",rightText:s.userInfo.nickname||"未设置",link:""},null,8,["rightText"]),m(h,{class:"item",onClick:s.bindMobile,title:"手机号",rightText:s.userInfo.mobile||"未绑定",link:""},null,8,["onClick","rightText"]),s.userInfo.email?(l(),r(h,{key:0,class:"item",title:"电子邮箱",rightText:s.userInfo.email},null,8,["rightText"])):_("",!0),o.hasPwd?(l(),r(h,{key:1,class:"item",onClick:s.changePassword,title:"修改密码",link:""},null,8,["onClick"])):_("",!0)])),_:1}),m(g,{class:"mt10"},{default:u((()=>[m(h,{onClick:s.deactivate,title:"注销账号",link:"navigateTo"},null,8,["onClick"])])),_:1}),m(k,{ref:"dialog",type:"dialog"},{default:u((()=>[m(b,{mode:"input",value:s.userInfo.nickname,onConfirm:s.setNickname,inputType:o.setNicknameIng?"nickname":"text",title:"设置昵称",placeholder:"请输入要设置的昵称"},null,8,["value","onConfirm","inputType"])])),_:1},512),m(C,{ref:"bind-mobile-by-sms",onSuccess:s.bindMobileSuccess},null,8,["onSuccess"]),o.showLoginManage?(l(),w(v,{key:0},[s.userInfo._id?(l(),r(x,{key:0,onClick:s.logout},{default:u((()=>[f("退出登录")])),_:1},8,["onClick"])):(l(),r(x,{key:1,onClick:s.login},{default:u((()=>[f("去登录")])),_:1},8,["onClick"]))],64)):_("",!0)])),_:1})}],["__scopeId","data-v-a98497c8"]]);export{U as default};
