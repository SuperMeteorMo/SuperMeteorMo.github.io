import{W as e,E as t,e as s,C as i,h as o,n,l as a,o as l,c as r,w as d,a as c,b as u,t as h,f as g,F as _,r as f,G as p,p as m,g as y,i as k,j as I,A as w}from"./index-2q7tZIrz.js";import{_ as b}from"./uni-icons.Kcpg7EQU.js";import{r as C}from"./uni-app.es.DTub21Gi.js";import{_ as L}from"./uni-popup.DhTKxkyd.js";import{_ as x}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as v}from"./cloud-image.CTFux9H7.js";import{_ as $,a as A}from"./uni-list.BGVoUgHt.js";import{s as F}from"./store.XWGwOT8x.js";const E="RewardedVideo",S="FullScreenVideo";const T="csj";class R{constructor(e,t={}){this._isLoad=!1,this._isLoading=!1,this._lastLoadTime=0,this._lastError=null,this._retryCount=0,this._loadCallback=null,this._closeCallback=null,this._errorCallback=null;const s=this._ad=e;s.onLoad((e=>{this._isLoading=!1,this._isLoad=!0,this._lastLoadTime=Date.now(),this.onLoad()})),s.onClose((e=>{this._isLoad=!1,this.onClose(e)})),s.onVerify&&s.onVerify((e=>{})),s.onError((({code:e,message:t})=>{this._isLoading=!1;const s={code:e,errMsg:t};if(-5008!==e){if(this._retryCount<1)return this._retryCount+=1,void this._loadAd();this._lastError=s,this.onError(s)}else this._loadAd()}))}get isExpired(){return 0!==this._lastLoadTime&&Math.abs(Date.now()-this._lastLoadTime)>18e5}get isLoading(){return this._isLoading}getProvider(){return this._ad.getProvider()}load(e,t){this._loadCallback=e,this._errorCallback=t,this._isLoading||(this._isLoad?this.onLoad():(this._retryCount=0,this._loadAd()))}show(e){if(this._closeCallback=e,this._isLoading||!this._isLoad)return;if(null!==this._lastError)return void this.onError(this._lastError);this.getProvider()===T&&this.isExpired?this._loadAd():this._ad.show()}onLoad(e){null!=this._loadCallback&&this._loadCallback()}onClose(e){null!=this._closeCallback&&this._closeCallback({isEnded:e.isEnded})}onError(e){null!=this._errorCallback&&this._errorCallback(e)}destroy(){this._ad.destroy()}_loadAd(){this._isLoad=!1,this._isLoading=!0,this._lastError=null,this._ad.load()}}class D extends R{constructor(e={}){super(plus.ad.createRewardedVideoAd(e),e)}}class j extends R{constructor(e={}){super(plus.ad.createFullScreenVideoAd(e),e)}}const V=new class{constructor(){this._ads={}}load(e,t,s){let i=this._fixOldOptions(e),{adpid:o}=i;o&&!this.isBusy(o)&&this.get(i).load(t,s)}show(s,i,o){let n=this._fixOldOptions(s),{adpid:a}=n;if(a){e({mask:!0});var l=this.get(n);l.load((()=>{t(),l.show((e=>{i&&i(e)}))}),(e=>{t(),o&&o(e)}))}}isBusy(e){return this._ads[e]&&this._ads[e].isLoading}get(e){const{adpid:t,singleton:s=!0}=e;return!1===s&&this._ads[t]&&(this._ads[t].destroy(),delete this._ads[t]),delete e.singleton,this._ads[t]||(this._ads[t]=this._createAdInstance(e)),this._ads[t]}_createAdInstance(e){const t=e.adType||E;delete e.adType;let s=null;return t===E?s=new D(e):t===S&&(s=new j(e)),s}_fixOldOptions(e){return"string"==typeof e?{adpid:e}:e}},O=s.database().action("signIn").collection("opendb-sign-in");new Date((new Date).toLocaleDateString()).getTime();const B=x({name:"uni-signIn",data:()=>({total:0,scores:0,weekdays:[1,2,3,4,5,6,7],signInRes:{days:[],n:0}}),mounted(){},methods:{async getSignedInInfo(e="今日已签过"){const t=new Date((new Date).toLocaleDateString()).getTime();let s=await O.where(`'user_id' == $env.uid && 'date' == ${t} && 'isDelete' == false`).get();return s.result.data.length&&(this.signInRes=s.result,this.$refs.popup.open(),i({title:e,duration:3e3,icon:"none"})),s.result.data},async showRewardedVideoAd(){let s=await this.getSignedInInfo();if(console.log(s),s&&0==s.length){let{_id:s}=o("userInfo");if(console.log(s,o("userInfo")),!s)return n({url:"/pages/ucenter/login-page/index/index"});V.show({adpid:1733738477,adType:"RewardedVideo",urlCallback:{userId:s,extra:"uniSignIn"}},(s=>{if(s&&s.isEnded){console.log("onClose "+s.isEnded);let o=0;e({mask:!0});let n=setInterval((async e=>{o++,s=await this.getSignedInInfo("签到成功"),(o>2||s.length)&&(s.length||i({title:"签到失败！",icon:"error",duration:6e3}),clearInterval(n),t())}),2e3)}else console.log("onClose "+s.isEnded),i({title:"播放中途退出,签到失败！",icon:"error",duration:5e3})}),(e=>{console.log(e),i({title:e.errMsg,icon:"none"})}))}},async open(){e({mask:!0});try{let e=await this.getSignedInInfo();if(e&&0==e.length){let e=await O.add({});console.log(e),t(),this.signInRes=e.result,this.$refs.popup.open(),7==this.signInRes.days.length?i({title:"你已完成7日连续签到，获得60积分！",icon:"none",duration:5e3}):i({title:"签到成功,获得10积分！",icon:"none",duration:5e3})}}catch(s){t(),console.error(s)}},closeMe(e){this.$refs.popup.close()}}},[["render",function(e,t,s,i,o,n){const I=m,w=y,x=k,v=C(a("uni-icons"),b),$=C(a("uni-popup"),L);return l(),r(x,null,{default:d((()=>[c($,{ref:"popup",type:"center"},{default:d((()=>[c(I,{class:"background-img",src:"/assets/background-Bu1oXiEy.png",mode:"width"}),c(x,{class:"content"},{default:d((()=>[c(x,{class:"main"},{default:d((()=>[c(w,{class:"title"},{default:d((()=>[u("今日签到成功")])),_:1}),c(w,{class:"total"},{default:d((()=>[u("本轮已签到"+h(o.signInRes.days.length)+"天",1)])),_:1}),c(w,{class:"scores"},{default:d((()=>[u("当前积分："+h(o.signInRes.score),1)])),_:1})])),_:1}),c(x,null,{default:d((()=>[c(x,{class:"days-box"},{default:d((()=>[(l(!0),g(_,null,f(o.weekdays,((e,t)=>(l(),r(x,{class:"days",key:t},{default:d((()=>[o.signInRes.days.includes(e-1)?(l(),r(v,{key:0,class:"icon active",color:"#FFFFFF",type:"checkmarkempty"})):(l(),g(_,{key:1},[e<o.signInRes.n?(l(),r(v,{key:0,class:"icon active",color:"#FFFFFF",type:"closeempty"})):(l(),r(v,{key:1,class:"icon",type:"checkmarkempty",color:"#FFFFFF"}))],64)),o.signInRes.days.includes(e-1)||e>o.signInRes.n?(l(),r(w,{key:2,class:p(["day",{grey:e>o.signInRes.n}])},{default:d((()=>[u("第"+h(e)+"天",1)])),_:2},1032,["class"])):(l(),r(w,{key:3,class:"day"},{default:d((()=>[u("缺卡")])),_:1}))])),_:2},1024)))),128))])),_:1}),c(x,{class:"tip-box"},{default:d((()=>[c(w,{class:"tip"},{default:d((()=>[u("签到一次得10积分")])),_:1}),c(x,{class:"row"},{default:d((()=>[c(w,{class:"tip"},{default:d((()=>[u("连续签到7天可多得")])),_:1}),c(w,{class:"red"},{default:d((()=>[u("50")])),_:1}),c(w,{class:"tip"},{default:d((()=>[u("积分")])),_:1})])),_:1})])),_:1})])),_:1}),c(v,{onClick:n.closeMe,class:"close-icon",type:"closeempty",size:"20",color:"#AAAAAA"},null,8,["onClick"])])),_:1})])),_:1},512)])),_:1})}],["__scopeId","data-v-26f1750b"]]);const M=s.database();const P=x({data(){return{gridList:[{text:this.$t("mine.showText"),icon:"chat"},{text:this.$t("mine.showText"),icon:"cloud-upload"},{text:this.$t("mine.showText"),icon:"contact"},{text:this.$t("mine.showText"),icon:"download"}],ucenterList:[[{title:"我的合集",to:"/pages/web-like-collection/list",icon:"star"},{title:this.$t("mine.signIn"),event:"signIn",icon:"compose"},{title:this.$t("mine.readArticles"),to:"/pages/ucenter/read-news-log/read-news-log",icon:"flag"},{title:this.$t("mine.myScore"),to:"",event:"getScore",icon:"paperplane"}],[{title:this.$t("mine.feedback"),to:"/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback",icon:"help"},{title:this.$t("mine.settings"),to:"/pages/ucenter/settings/settings",icon:"gear"}]],listStyles:{height:"150rpx",width:"150rpx",border:{color:"#eee",width:"1px",style:"solid",radius:"100%"}}}},onLoad(){},onShow(){},computed:{userInfo:()=>F.userInfo,hasLogin:()=>F.hasLogin,appConfig:()=>I().globalData.config},methods:{toSettings(){n({url:"/pages/ucenter/settings/settings"})},signIn(){this.$refs.signIn.open()},signInByAd(){this.$refs.signIn.showRewardedVideoAd()},ucenterListClick(e){!e.to&&e.event&&this[e.event]()},async checkVersion(){let e=await new Promise(((e,t)=>{t({message:"请在App中使用"})}));console.log(e),e.result.code>0||i({title:e.result.message,icon:"none"})},toUserInfo(){n({url:"/uni_modules/uni-id-pages/pages/userinfo/userinfo"})},tapGrid(e){i({title:this.$t("mine.clicked")+" "+(e+1),icon:"none"})},gotoMarket(){},getScore(){if(!this.userInfo)return i({title:this.$t("mine.checkScore"),icon:"none"});e({mask:!0}),M.collection("uni-id-scores").where('"user_id" == $env.uid').field("score,balance").orderBy("create_date","desc").limit(1).get().then((e=>{console.log(e);const t=e.result.data[0];let s="";s=t?this.$t("mine.currentScore")+t.balance:this.$t("mine.noScore"),i({title:s,icon:"none"})})).finally((()=>{t()}))},async share(){let{result:e}=await M.collection("uni-id-users").where("'_id' == $cloudEnv_uid").field("my_invite_code").get(),t=e.data[0].my_invite_code;if(!t)return i({title:"请检查uni-config-center中uni-id配置，是否已启用 autoSetInviteCode",icon:"none"});console.log({myInviteCode:t}),this.appConfig.about}}},[["render",function(e,t,s,i,o,n){const p=C(a("uni-sign-in"),B),m=C(a("cloud-image"),v),I=C(a("uni-icons"),b),L=k,x=y,F=C(a("uni-list-item"),$),E=C(a("uni-list"),A);return l(),r(L,{class:"center"},{default:d((()=>[c(p,{ref:"signIn"},null,512),c(L,{class:"userInfo",onClickCapture:n.toUserInfo},{default:d((()=>[n.hasLogin&&n.userInfo.avatar_file&&n.userInfo.avatar_file.url?(l(),r(m,{key:0,width:"150rpx",height:"150rpx",src:n.userInfo.avatar_file.url},null,8,["src"])):(l(),r(L,{key:1,class:"defaultAvatarUrl"},{default:d((()=>[c(I,{color:"#ffffff",size:"50",type:"person-filled"})])),_:1})),c(L,{class:"logo-title"},{default:d((()=>[n.hasLogin?(l(),r(x,{key:0,class:"uer-name"},{default:d((()=>[u(h(n.userInfo.nickname||n.userInfo.username||n.userInfo.mobile),1)])),_:1})):(l(),r(x,{key:1,class:"uer-name"},{default:d((()=>[u(h(e.$t("mine.notLogged")),1)])),_:1}))])),_:1})])),_:1},8,["onClickCapture"]),(l(!0),g(_,null,f(o.ucenterList,((e,t)=>(l(),r(E,{class:"center-list",key:t},{default:d((()=>[(l(!0),g(_,null,f(e,((e,t)=>(l(),r(F,{title:e.title,link:"",rightText:e.rightText,key:t,clickable:!0,to:e.to,onClick:t=>n.ucenterListClick(e),"show-extra-icon":!0,extraIcon:{type:e.icon,color:"#999"}},{footer:d((()=>[e.showBadge?(l(),r(L,{key:0,class:"item-footer"},{default:d((()=>[c(x,{class:"item-footer-text"},{default:d((()=>[u(h(e.rightText),1)])),_:2},1024),c(L,{class:"item-footer-badge"})])),_:2},1024)):w("",!0)])),_:2},1032,["title","rightText","to","onClick","extraIcon"])))),128))])),_:2},1024)))),128))])),_:1})}],["__scopeId","data-v-4a4df69e"]]);export{P as default};
