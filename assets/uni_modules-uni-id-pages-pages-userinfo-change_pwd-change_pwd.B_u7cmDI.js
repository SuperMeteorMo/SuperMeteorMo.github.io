import{f as s,u as o,p as a,V as e,q as r,k as t,c as d,w as l,i as n,o as u,a as i,b as m,m as w,e as f,U as p}from"./index-CpH68wGS.js";import{_ as c}from"./uni-match-media.BNGW-eGY.js";import{r as P}from"./uni-app.es.sM20WYHF.js";import{_}from"./uni-easyinput.D3DXiC8M.js";import{_ as h}from"./uni-forms-item.uDmSmTvB.js";import{_ as g}from"./uni-forms.DsB-N5zd.js";import{m as b}from"./login-page.mixin.BJL6T_Rk.js";import{p as j}from"./password.Bg6Mdz8n.js";import{_ as x}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.n7LShZtt.js";import"./store.DhdtLXQq.js";const y=s.importObject("uni-id-co",{customUI:!0});const D=x({mixins:[b],data:()=>({focusOldPassword:!1,focusNewPassword:!1,focusNewPassword2:!1,formData:{oldPassword:"",newPassword:"",newPassword2:""},rules:{oldPassword:{rules:[{required:!0,errorMessage:"请输入新密码"},{pattern:/^.{6,20}$/,errorMessage:"密码为6 - 20位"}]},...j.getPwdRules("newPassword","newPassword2")},logo:"/static/logo.png"}),onReady(){this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=s=>{var o=s||window.event;o&&13==o.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((s=>{let{oldPassword:t,newPassword:d}=this.formData;y.updatePwd({oldPassword:t,newPassword:d}).then((s=>{o("uni_id_token"),a("uni_id_token_expired",0),e({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})})).catch((s=>{r({content:s.message,showCancel:!1})}))})).catch((s=>{let o=s[0].key;o=o.replace(o[0],o[0].toUpperCase()),this["focus"+o]=!0}))}}},[["render",function(s,o,a,e,r,b){const j=w,x=n,y=f,D=P(t("uni-match-media"),c),V=P(t("uni-easyinput"),_),k=P(t("uni-forms-item"),h),v=p,B=P(t("uni-forms"),g);return u(),d(x,{class:"uni-content"},{default:l((()=>[i(D,{"min-width":690},{default:l((()=>[i(x,{class:"login-logo"},{default:l((()=>[i(j,{src:r.logo},null,8,["src"])])),_:1}),i(y,{class:"title title-box"},{default:l((()=>[m("修改密码")])),_:1})])),_:1}),i(B,{ref:"form",value:r.formData,"err-show-type":"toast"},{default:l((()=>[i(k,{name:"oldPassword"},{default:l((()=>[i(V,{focus:r.focusOldPassword,onBlur:o[0]||(o[0]=s=>r.focusOldPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.oldPassword,"onUpdate:modelValue":o[1]||(o[1]=s=>r.formData.oldPassword=s),placeholder:"请输入旧密码"},null,8,["focus","modelValue"])])),_:1}),i(k,{name:"newPassword"},{default:l((()=>[i(V,{focus:r.focusNewPassword,onBlur:o[2]||(o[2]=s=>r.focusNewPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.newPassword,"onUpdate:modelValue":o[3]||(o[3]=s=>r.formData.newPassword=s),placeholder:"请输入新密码"},null,8,["focus","modelValue"])])),_:1}),i(k,{name:"newPassword2"},{default:l((()=>[i(V,{focus:r.focusNewPassword2,onBlur:o[4]||(o[4]=s=>r.focusNewPassword2=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.newPassword2,"onUpdate:modelValue":o[5]||(o[5]=s=>r.formData.newPassword2=s),placeholder:"请再次输入新密码"},null,8,["focus","modelValue"])])),_:1}),i(v,{class:"uni-btn send-btn-box",type:"primary",onClick:b.submit},{default:l((()=>[m("提交")])),_:1},8,["onClick"])])),_:1},8,["value"])])),_:1})}],["__scopeId","data-v-310f3ac4"]]);export{D as default};
