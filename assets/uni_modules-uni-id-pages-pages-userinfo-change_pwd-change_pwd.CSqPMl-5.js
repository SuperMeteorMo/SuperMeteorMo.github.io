import{g as s,v as o,q as a,a2 as e,u as r,l as t,c as d,w as l,i as n,o as u,a as i,b as m,p as w,f,a1 as p}from"./index-BaDKg7nY.js";import{_ as c}from"./uni-match-media.CL7ecDz_.js";import{r as P}from"./uni-app.es.DQ3KnF-q.js";import{_}from"./uni-easyinput.CkYFqH_C.js";import{_ as h}from"./uni-forms-item.BL2ngk3q.js";import{_ as g}from"./uni-forms.bYZ4zg1X.js";import{m as b}from"./login-page.mixin.CzomoqhN.js";import{p as j}from"./password.BydZbp1d.js";import{_ as x}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.CriUYiHV.js";import"./store.896cFtds.js";const y=s.importObject("uni-id-co",{customUI:!0});const D=x({mixins:[b],data:()=>({focusOldPassword:!1,focusNewPassword:!1,focusNewPassword2:!1,formData:{oldPassword:"",newPassword:"",newPassword2:""},rules:{oldPassword:{rules:[{required:!0,errorMessage:"请输入新密码"},{pattern:/^.{6,20}$/,errorMessage:"密码为6 - 20位"}]},...j.getPwdRules("newPassword","newPassword2")},logo:"/static/logo.png"}),onReady(){this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=s=>{var o=s||window.event;o&&13==o.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((s=>{let{oldPassword:t,newPassword:d}=this.formData;y.updatePwd({oldPassword:t,newPassword:d}).then((s=>{o("uni_id_token"),a("uni_id_token_expired",0),e({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})})).catch((s=>{r({content:s.message,showCancel:!1})}))})).catch((s=>{let o=s[0].key;o=o.replace(o[0],o[0].toUpperCase()),this["focus"+o]=!0}))}}},[["render",function(s,o,a,e,r,b){const j=w,x=n,y=f,D=P(t("uni-match-media"),c),v=P(t("uni-easyinput"),_),V=P(t("uni-forms-item"),h),k=p,B=P(t("uni-forms"),g);return u(),d(x,{class:"uni-content"},{default:l((()=>[i(D,{"min-width":690},{default:l((()=>[i(x,{class:"login-logo"},{default:l((()=>[i(j,{src:r.logo},null,8,["src"])])),_:1}),i(y,{class:"title title-box"},{default:l((()=>[m("修改密码")])),_:1})])),_:1}),i(B,{ref:"form",value:r.formData,"err-show-type":"toast"},{default:l((()=>[i(V,{name:"oldPassword"},{default:l((()=>[i(v,{focus:r.focusOldPassword,onBlur:o[0]||(o[0]=s=>r.focusOldPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.oldPassword,"onUpdate:modelValue":o[1]||(o[1]=s=>r.formData.oldPassword=s),placeholder:"请输入旧密码"},null,8,["focus","modelValue"])])),_:1}),i(V,{name:"newPassword"},{default:l((()=>[i(v,{focus:r.focusNewPassword,onBlur:o[2]||(o[2]=s=>r.focusNewPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.newPassword,"onUpdate:modelValue":o[3]||(o[3]=s=>r.formData.newPassword=s),placeholder:"请输入新密码"},null,8,["focus","modelValue"])])),_:1}),i(V,{name:"newPassword2"},{default:l((()=>[i(v,{focus:r.focusNewPassword2,onBlur:o[4]||(o[4]=s=>r.focusNewPassword2=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.newPassword2,"onUpdate:modelValue":o[5]||(o[5]=s=>r.formData.newPassword2=s),placeholder:"请再次输入新密码"},null,8,["focus","modelValue"])])),_:1}),i(k,{class:"uni-btn send-btn-box",type:"primary",onClick:b.submit},{default:l((()=>[m("提交")])),_:1},8,["onClick"])])),_:1},8,["value"])])),_:1})}],["__scopeId","data-v-310f3ac4"]]);export{D as default};
