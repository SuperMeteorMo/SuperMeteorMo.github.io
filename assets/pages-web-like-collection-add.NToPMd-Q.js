import{e,W as t,E as a,C as o,z as l,u as r,l as s,c as i,w as m,i as n,o as u,a as d,b as c,$ as f}from"./index-4EZ8v3QT.js";import{_ as p}from"./uni-easyinput.gj8l1EuW.js";import{r as _}from"./uni-app.es.Bc_DzAQZ.js";import{_ as b}from"./uni-forms-item.CnguMIIH.js";import{_ as h}from"./uni-datetime-picker.CIzhVnRn.js";import{_ as D}from"./uni-forms.BA7NxeTx.js";import{v as V}from"./web-like-collection.D3Ww2TXv.js";import{_ as j}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.5yTMgLsQ.js";const y=e.database();function k(e){let t={};for(let a in V)e.indexOf(a)>-1&&(t[a]=V[a]);return t}const g=j({data(){let e={user_id:"",collect_id:"",sort:null,create_time:null};return{formData:e,formOptions:{},rules:{...k(Object.keys(e))}}},onReady(){this.$refs.form.setRules(this.rules)},methods:{submit(){t({mask:!0}),this.$refs.form.validate().then((e=>this.submitForm(e))).catch((()=>{})).finally((()=>{a()}))},submitForm(e){return y.collection("web-like-collection").add(e).then((e=>{o({icon:"none",title:"新增成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>l()),500)})).catch((e=>{r({content:e.message||"请求服务失败",showCancel:!1})}))}}},[["render",function(e,t,a,o,l,r){const V=_(s("uni-easyinput"),p),j=_(s("uni-forms-item"),b),y=_(s("uni-datetime-picker"),h),k=f,g=n,v=_(s("uni-forms"),D);return u(),i(g,{class:"uni-container"},{default:m((()=>[d(v,{ref:"form",model:l.formData,"validate-trigger":"submit","err-show-type":"toast"},{default:m((()=>[d(j,{name:"user_id",label:""},{default:m((()=>[d(V,{placeholder:"用户ID， 参考`uni-id-users` 表",modelValue:l.formData.user_id,"onUpdate:modelValue":t[0]||(t[0]=e=>l.formData.user_id=e)},null,8,["modelValue"])])),_:1}),d(j,{name:"collect_id",label:""},{default:m((()=>[d(V,{placeholder:"合集id",modelValue:l.formData.collect_id,"onUpdate:modelValue":t[1]||(t[1]=e=>l.formData.collect_id=e)},null,8,["modelValue"])])),_:1}),d(j,{name:"sort",label:""},{default:m((()=>[d(V,{placeholder:"排序",type:"number",modelValue:l.formData.sort,"onUpdate:modelValue":t[2]||(t[2]=e=>l.formData.sort=e)},null,8,["modelValue"])])),_:1}),d(j,{name:"create_time",label:""},{default:m((()=>[d(y,{"return-type":"timestamp",modelValue:l.formData.create_time,"onUpdate:modelValue":t[3]||(t[3]=e=>l.formData.create_time=e)},null,8,["modelValue"])])),_:1}),d(g,{class:"uni-button-group"},{default:m((()=>[d(k,{type:"primary",class:"uni-button",onClick:r.submit},{default:m((()=>[c("提交")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1})}],["__scopeId","data-v-5363ef17"]]);export{g as default};
