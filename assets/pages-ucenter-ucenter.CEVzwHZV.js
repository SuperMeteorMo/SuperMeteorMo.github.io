import{M as e,N as t,g as s,C as i,h as n,n as o,l as a,o as l,c as r,w as d,a as c,b as u,t as h,e as g,F as _,r as f,K as p,p as m,f as y,i as k,j as I,A as w}from"./index-DVYpAuCD.js";import{_ as x}from"./uni-icons.DiJ6eL87.js";import{r as C}from"./uni-app.es.CoMFyYcx.js";import{_ as b}from"./uni-popup.B40DE7cP.js";import{_ as L}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as v}from"./cloud-image.BgteUG5u.js";import{_ as F,a as $}from"./uni-grid.BZSREmse.js";import{_ as A,a as S}from"./uni-list.BlK7raVf.js";import{s as E}from"./store.CwsX-Tdg.js";const T="RewardedVideo",R="FullScreenVideo";const j="csj";class D{constructor(e,t={}){this._isLoad=!1,this._isLoading=!1,this._lastLoadTime=0,this._lastError=null,this._retryCount=0,this._loadCallback=null,this._closeCallback=null,this._errorCallback=null;const s=this._ad=e;s.onLoad((e=>{this._isLoading=!1,this._isLoad=!0,this._lastLoadTime=Date.now(),this.onLoad()})),s.onClose((e=>{this._isLoad=!1,this.onClose(e)})),s.onVerify&&s.onVerify((e=>{})),s.onError((({code:e,message:t})=>{this._isLoading=!1;const s={code:e,errMsg:t};if(-5008!==e){if(this._retryCount<1)return this._retryCount+=1,void this._loadAd();this._lastError=s,this.onError(s)}else this._loadAd()}))}get isExpired(){return 0!==this._lastLoadTime&&Math.abs(Date.now()-this._lastLoadTime)>18e5}get isLoading(){return this._isLoading}getProvider(){return this._ad.getProvider()}load(e,t){this._loadCallback=e,this._errorCallback=t,this._isLoading||(this._isLoad?this.onLoad():(this._retryCount=0,this._loadAd()))}show(e){if(this._closeCallback=e,this._isLoading||!this._isLoad)return;if(null!==this._lastError)return void this.onError(this._lastError);this.getProvider()===j&&this.isExpired?this._loadAd():this._ad.show()}onLoad(e){null!=this._loadCallback&&this._loadCallback()}onClose(e){null!=this._closeCallback&&this._closeCallback({isEnded:e.isEnded})}onError(e){null!=this._errorCallback&&this._errorCallback(e)}destroy(){this._ad.destroy()}_loadAd(){this._isLoad=!1,this._isLoading=!0,this._lastError=null,this._ad.load()}}class V extends D{constructor(e={}){super(plus.ad.createRewardedVideoAd(e),e)}}class B extends D{constructor(e={}){super(plus.ad.createFullScreenVideoAd(e),e)}}const M=new class{constructor(){this._ads={}}load(e,t,s){let i=this._fixOldOptions(e),{adpid:n}=i;n&&!this.isBusy(n)&&this.get(i).load(t,s)}show(s,i,n){let o=this._fixOldOptions(s),{adpid:a}=o;if(a){e({mask:!0});var l=this.get(o);l.load((()=>{t(),l.show((e=>{i&&i(e)}))}),(e=>{t(),n&&n(e)}))}}isBusy(e){return this._ads[e]&&this._ads[e].isLoading}get(e){const{adpid:t,singleton:s=!0}=e;return!1===s&&this._ads[t]&&(this._ads[t].destroy(),delete this._ads[t]),delete e.singleton,this._ads[t]||(this._ads[t]=this._createAdInstance(e)),this._ads[t]}_createAdInstance(e){const t=e.adType||T;delete e.adType;let s=null;return t===T?s=new V(e):t===R&&(s=new B(e)),s}_fixOldOptions(e){return"string"==typeof e?{adpid:e}:e}},O=s.database().action("signIn").collection("opendb-sign-in");new Date((new Date).toLocaleDateString()).getTime();const z=L({name:"uni-signIn",data:()=>({total:0,scores:0,weekdays:[1,2,3,4,5,6,7],signInRes:{days:[],n:0}}),mounted(){},methods:{async getSignedInInfo(e="今日已签过"){const t=new Date((new Date).toLocaleDateString()).getTime();let s=await O.where(`'user_id' == $env.uid && 'date' == ${t} && 'isDelete' == false`).get();return s.result.data.length&&(this.signInRes=s.result,this.$refs.popup.open(),i({title:e,duration:3e3,icon:"none"})),s.result.data},async showRewardedVideoAd(){let s=await this.getSignedInInfo();if(console.log(s),s&&0==s.length){let{_id:s}=n("userInfo");if(console.log(s,n("userInfo")),!s)return o({url:"/pages/ucenter/login-page/index/index"});M.show({adpid:1733738477,adType:"RewardedVideo",urlCallback:{userId:s,extra:"uniSignIn"}},(s=>{if(s&&s.isEnded){console.log("onClose "+s.isEnded);let n=0;e({mask:!0});let o=setInterval((async e=>{n++,s=await this.getSignedInInfo("签到成功"),(n>2||s.length)&&(s.length||i({title:"签到失败！",icon:"error",duration:6e3}),clearInterval(o),t())}),2e3)}else console.log("onClose "+s.isEnded),i({title:"播放中途退出,签到失败！",icon:"error",duration:5e3})}),(e=>{console.log(e),i({title:e.errMsg,icon:"none"})}))}},async open(){e({mask:!0});try{let e=await this.getSignedInInfo();if(e&&0==e.length){let e=await O.add({});console.log(e),t(),this.signInRes=e.result,this.$refs.popup.open(),7==this.signInRes.days.length?i({title:"你已完成7日连续签到，获得60积分！",icon:"none",duration:5e3}):i({title:"签到成功,获得10积分！",icon:"none",duration:5e3})}}catch(s){t(),console.error(s)}},closeMe(e){this.$refs.popup.close()}}},[["render",function(e,t,s,i,n,o){const I=m,w=y,L=k,v=C(a("uni-icons"),x),F=C(a("uni-popup"),b);return l(),r(L,null,{default:d((()=>[c(F,{ref:"popup",type:"center"},{default:d((()=>[c(I,{class:"background-img",src:"/assets/background-Bu1oXiEy.png",mode:"width"}),c(L,{class:"content"},{default:d((()=>[c(L,{class:"main"},{default:d((()=>[c(w,{class:"title"},{default:d((()=>[u("今日签到成功")])),_:1}),c(w,{class:"total"},{default:d((()=>[u("本轮已签到"+h(n.signInRes.days.length)+"天",1)])),_:1}),c(w,{class:"scores"},{default:d((()=>[u("当前积分："+h(n.signInRes.score),1)])),_:1})])),_:1}),c(L,null,{default:d((()=>[c(L,{class:"days-box"},{default:d((()=>[(l(!0),g(_,null,f(n.weekdays,((e,t)=>(l(),r(L,{class:"days",key:t},{default:d((()=>[n.signInRes.days.includes(e-1)?(l(),r(v,{key:0,class:"icon active",color:"#FFFFFF",type:"checkmarkempty"})):(l(),g(_,{key:1},[e<n.signInRes.n?(l(),r(v,{key:0,class:"icon active",color:"#FFFFFF",type:"closeempty"})):(l(),r(v,{key:1,class:"icon",type:"checkmarkempty",color:"#FFFFFF"}))],64)),n.signInRes.days.includes(e-1)||e>n.signInRes.n?(l(),r(w,{key:2,class:p(["day",{grey:e>n.signInRes.n}])},{default:d((()=>[u("第"+h(e)+"天",1)])),_:2},1032,["class"])):(l(),r(w,{key:3,class:"day"},{default:d((()=>[u("缺卡")])),_:1}))])),_:2},1024)))),128))])),_:1}),c(L,{class:"tip-box"},{default:d((()=>[c(w,{class:"tip"},{default:d((()=>[u("签到一次得10积分")])),_:1}),c(L,{class:"row"},{default:d((()=>[c(w,{class:"tip"},{default:d((()=>[u("连续签到7天可多得")])),_:1}),c(w,{class:"red"},{default:d((()=>[u("50")])),_:1}),c(w,{class:"tip"},{default:d((()=>[u("积分")])),_:1})])),_:1})])),_:1})])),_:1}),c(v,{onClick:o.closeMe,class:"close-icon",type:"closeempty",size:"20",color:"#AAAAAA"},null,8,["onClick"])])),_:1})])),_:1},512)])),_:1})}],["__scopeId","data-v-26f1750b"]]);const P=s.database();const U=L({data(){return{gridList:[{text:this.$t("mine.showText"),icon:"chat"},{text:this.$t("mine.showText"),icon:"cloud-upload"},{text:this.$t("mine.showText"),icon:"contact"},{text:this.$t("mine.showText"),icon:"download"}],ucenterList:[[{title:this.$t("mine.signIn"),event:"signIn",icon:"compose"},{title:this.$t("mine.readArticles"),to:"/pages/ucenter/read-news-log/read-news-log",icon:"flag"},{title:this.$t("mine.myScore"),to:"",event:"getScore",icon:"paperplane"}],[{title:this.$t("mine.feedback"),to:"/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback",icon:"help"},{title:this.$t("mine.settings"),to:"/pages/ucenter/settings/settings",icon:"gear"}]],listStyles:{height:"150rpx",width:"150rpx",border:{color:"#eee",width:"1px",style:"solid",radius:"100%"}}}},onLoad(){},onShow(){},computed:{userInfo:()=>E.userInfo,hasLogin:()=>E.hasLogin,appConfig:()=>I().globalData.config},methods:{toSettings(){o({url:"/pages/ucenter/settings/settings"})},signIn(){this.$refs.signIn.open()},signInByAd(){this.$refs.signIn.showRewardedVideoAd()},ucenterListClick(e){!e.to&&e.event&&this[e.event]()},async checkVersion(){let e=await new Promise(((e,t)=>{t({message:"请在App中使用"})}));console.log(e),e.result.code>0||i({title:e.result.message,icon:"none"})},toUserInfo(){o({url:"/uni_modules/uni-id-pages/pages/userinfo/userinfo"})},tapGrid(e){i({title:this.$t("mine.clicked")+" "+(e+1),icon:"none"})},gotoMarket(){},getScore(){if(!this.userInfo)return i({title:this.$t("mine.checkScore"),icon:"none"});e({mask:!0}),P.collection("uni-id-scores").where('"user_id" == $env.uid').field("score,balance").orderBy("create_date","desc").limit(1).get().then((e=>{console.log(e);const t=e.result.data[0];let s="";s=t?this.$t("mine.currentScore")+t.balance:this.$t("mine.noScore"),i({title:s,icon:"none"})})).finally((()=>{t()}))},async share(){let{result:e}=await P.collection("uni-id-users").where("'_id' == $cloudEnv_uid").field("my_invite_code").get(),t=e.data[0].my_invite_code;if(!t)return i({title:"请检查uni-config-center中uni-id配置，是否已启用 autoSetInviteCode",icon:"none"});console.log({myInviteCode:t}),this.appConfig.about}}},[["render",function(e,t,s,i,n,o){const p=C(a("uni-sign-in"),z),m=C(a("cloud-image"),v),I=C(a("uni-icons"),x),b=k,L=y,E=C(a("uni-grid-item"),F),T=C(a("uni-grid"),$),R=C(a("uni-list-item"),A),j=C(a("uni-list"),S);return l(),r(b,{class:"center"},{default:d((()=>[c(p,{ref:"signIn"},null,512),c(b,{class:"userInfo",onClickCapture:o.toUserInfo},{default:d((()=>[o.hasLogin&&o.userInfo.avatar_file&&o.userInfo.avatar_file.url?(l(),r(m,{key:0,width:"150rpx",height:"150rpx",src:o.userInfo.avatar_file.url},null,8,["src"])):(l(),r(b,{key:1,class:"defaultAvatarUrl"},{default:d((()=>[c(I,{color:"#ffffff",size:"50",type:"person-filled"})])),_:1})),c(b,{class:"logo-title"},{default:d((()=>[o.hasLogin?(l(),r(L,{key:0,class:"uer-name"},{default:d((()=>[u(h(o.userInfo.nickname||o.userInfo.username||o.userInfo.mobile),1)])),_:1})):(l(),r(L,{key:1,class:"uer-name"},{default:d((()=>[u(h(e.$t("mine.notLogged")),1)])),_:1}))])),_:1})])),_:1},8,["onClickCapture"]),c(T,{class:"grid",column:4,showBorder:!1,square:!0},{default:d((()=>[(l(!0),g(_,null,f(n.gridList,((e,t)=>(l(),r(E,{class:"item",onClick:e=>o.tapGrid(t),key:t},{default:d((()=>[c(I,{class:"icon",color:"#007AFF",type:e.icon,size:"26"},null,8,["type"]),c(L,{class:"text"},{default:d((()=>[u(h(e.text),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}),(l(!0),g(_,null,f(n.ucenterList,((e,t)=>(l(),r(j,{class:"center-list",key:t},{default:d((()=>[(l(!0),g(_,null,f(e,((e,t)=>(l(),r(R,{title:e.title,link:"",rightText:e.rightText,key:t,clickable:!0,to:e.to,onClick:t=>o.ucenterListClick(e),"show-extra-icon":!0,extraIcon:{type:e.icon,color:"#999"}},{footer:d((()=>[e.showBadge?(l(),r(b,{key:0,class:"item-footer"},{default:d((()=>[c(L,{class:"item-footer-text"},{default:d((()=>[u(h(e.rightText),1)])),_:2},1024),c(b,{class:"item-footer-badge"})])),_:2},1024)):w("",!0)])),_:2},1032,["title","rightText","to","onClick","extraIcon"])))),128))])),_:2},1024)))),128))])),_:1})}],["__scopeId","data-v-8ccee2e0"]]);export{U as default};
