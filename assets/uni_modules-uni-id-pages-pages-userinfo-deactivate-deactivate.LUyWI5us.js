import{z as e,u as n,e as t,C as a,v as s,q as o,n as i,c,w as l,i as u,o as d,a as p,b as r,g as _,$ as f}from"./index-CbIesGMf.js";import{_ as m}from"./_plugin-vue_export-helper.BCo6x5W8.js";const g=m({data:()=>({}),onLoad(){},methods:{cancel(){e()},nextStep(){n({content:"已经仔细阅读注销提示，知晓可能带来的后果，并确认要注销",complete:n=>{if(n.confirm){t.importObject("uni-id-co").closeAccount().then((e=>{a({title:"注销成功",duration:3e3}),s("uni_id_token"),o("uni_id_token_expired",0),i({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"})}))}else e()}})}}},[["render",function(e,n,t,a,s,o){const i=_,m=f,g=u;return d(),c(g,{class:"uni-content"},{default:l((()=>[p(i,{class:"words",space:"emsp"},{default:l((()=>[r(" 一、注销是不可逆操作，注销后:\\n 1.帐号将无法登录、无法找回。\\n 2.帐号所有信息都会清除(个人身份信息、粉丝数等;发布的作品、评论、点赞等;交易信息等)，你 的朋友将无法通过本应用帐号联系你，请自行备份相关 信息和数据。\\n 二、重要提示\\n 1.封禁帐号(永久封禁、社交封禁、直播权限封禁)不能申请注销。\\n 2.注销后，你的身份证、三方帐号(微信、QQ、微博、支付宝)、手机号等绑定关系将解除，解除后可以绑定到其他帐号。\\n 3.注销后，手机号可以注册新的帐号，新帐号不会存在之前帐号的任何信息(作品、粉丝、评论、个人信息等)。\\n 4.注销本应用帐号前，需尽快处理帐号下的资金问题。\\n 5.视具体帐号情况而定，注销最多需要7天。\\n ")])),_:1}),p(g,{class:"button-group"},{default:l((()=>[p(m,{onClick:o.nextStep,class:"next",type:"default"},{default:l((()=>[r("下一步")])),_:1},8,["onClick"]),p(m,{onClick:o.cancel,type:"warn"},{default:l((()=>[r("取消")])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-eb0fe298"]]);export{g as default};
