import{ap as e,W as i}from"./index-4EZ8v3QT.js";import{m as s}from"./store.D7g1bi5i.js";const t={data:()=>({config:e,uniIdRedirectUrl:"",isMounted:!1}),onUnload(){document.onkeydown=!1},mounted(){this.isMounted=!0},onLoad(e){if(e.is_weixin_redirect){if(i({mask:!0}),window.location.href.includes("#")){window.location.href.split("?")[1].split("&").forEach((i=>{const s=i.split("=");"code"==s[0]&&(e.code=s[1])}))}this.$nextTick((i=>{this.$refs.uniFabLogin.login({code:e.code},"weixin")}))}e.uniIdRedirectUrl&&(this.uniIdRedirectUrl=decodeURIComponent(e.uniIdRedirectUrl))},computed:{needAgreements(){if(this.isMounted)return!!this.$refs.agreements&&this.$refs.agreements.needAgreements},agree:{get(){if(this.isMounted)return!this.$refs.agreements||this.$refs.agreements.isAgree},set(e){this.$refs.agreements?this.$refs.agreements.isAgree=e:console.log("不存在 隐私政策协议组件")}}},methods:{loginSuccess(e){s.loginSuccess({...e,uniIdRedirectUrl:this.uniIdRedirectUrl})}}};export{t as m};
