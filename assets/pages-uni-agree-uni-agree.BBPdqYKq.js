import{n as e,q as a,z as t,u as s,c as l,w as c,a0 as o,i,o as n,a as u,b as r,f as d,a1 as f}from"./index-DaWOLB7u.js";import{_}from"./_plugin-vue_export-helper.BCo6x5W8.js";const{about:m}=o;const p=_({data:()=>({}),onLoad(){this._canBack=!1},onBackPress(){return!this._canBack},methods:{openprotocol(a){e({url:"/uni_modules/uni-id-pages/pages/common/webview/webview?url="+m.agreements[0].url})},openPrivacyPolicy(a){e({url:"/uni_modules/uni-id-pages/pages/common/webview/webview?url="+m.agreements[1].url})},agree(e){a("userprotocol",1),this._canBack=!0,setTimeout((()=>{t({animationDuration:0})}),100)},disagree(){s({content:"确定退出本应用？",cancelText:"退出",confirmText:"取消",success:e=>{e.confirm||(window.location.href="about:blank",window.close())}})}}},[["render",function(e,a,t,s,o,_){const m=d,p=i,x=f;return n(),l(p,{class:"page"},{default:c((()=>[u(p,null,{default:c((()=>[u(m,{class:"title"},{default:c((()=>[r("个人信息保护指引")])),_:1})])),_:1}),u(p,{class:"text-item"},{default:c((()=>[u(m,{class:"tl"},{default:c((()=>[r("1.在浏览使用时，我们会收集、使用设备标识信息用于推荐。")])),_:1})])),_:1}),u(p,{class:"text-item"},{default:c((()=>[u(m,{class:"tl"},{default:c((()=>[r("2.我们可能会申请位置权限，用于演示 uni-app 的地图、定位能力。")])),_:1})])),_:1}),u(p,{class:"text-item"},{default:c((()=>[u(m,{class:"tl"},{default:c((()=>[r("3.你可以查看完整版")])),_:1})])),_:1}),u(p,{class:"text-item flex-r"},{default:c((()=>[u(m,{class:"tl hl",onClick:_.openprotocol},{default:c((()=>[r("《用户协议》")])),_:1},8,["onClick"]),u(m,{class:"tl"},{default:c((()=>[r(" 和 ")])),_:1}),u(m,{class:"tl hl",onClick:_.openPrivacyPolicy},{default:c((()=>[r("《隐私政策》")])),_:1},8,["onClick"])])),_:1}),u(p,{class:"text-item"},{default:c((()=>[u(m,{class:"tl"},{default:c((()=>[r("以便了解我们收集、使用、共享、存储信息的情况，以及对信息的保护措施。")])),_:1})])),_:1}),u(p,{class:"text-item"},{default:c((()=>[u(m,{class:"service"},{default:c((()=>[r("如果你同意请点击下面的按钮以接受我们的服务")])),_:1})])),_:1}),u(p,{class:"text-item confirm"},{default:c((()=>[u(x,{class:"btn-privacy",type:"primary",onClick:_.agree},{default:c((()=>[r("同意")])),_:1},8,["onClick"]),u(x,{class:"btn-privacy btn-disagree",onClick:_.disagree},{default:c((()=>[r("暂不使用")])),_:1},8,["onClick"])])),_:1}),u(p,{class:"exit-area"})])),_:1})}],["__scopeId","data-v-395ecabe"]]);export{p as default};
