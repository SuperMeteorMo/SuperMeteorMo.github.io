import{e,W as a,E as t,C as o,z as s,u as l,l as r,c as i,w as n,i as m,o as u,a as d,b as c,$ as f}from"./index-CbIesGMf.js";import{_ as p}from"./uni-easyinput.DG_BaQW4.js";import{r as h}from"./uni-app.es.BgKzZsuk.js";import{_}from"./uni-forms-item.C-5PBkbE.js";import{_ as b}from"./uni-forms.BEcpn5lC.js";import{v as w}from"./web-script-collection-info.Cjjrus_3.js";import{s as y}from"./store.BIjkn5rT.js";import{_ as j}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.Q3foZM-m.js";const D=e.database();function V(e){let a={};for(let t in w)e.indexOf(t)>-1&&(a[t]=w[t]);return a}const v=j({data(){let e={name:"",description:"",show:null};return{formData:e,formOptions:{},rules:{...V(Object.keys(e))}}},onReady(){this.$refs.form.setRules(this.rules)},methods:{submit(){a({mask:!0}),this.$refs.form.validate().then((e=>this.submitForm(e))).catch((()=>{})).finally((()=>{t()}))},async submitForm(e){try{var a=await D.collection("web-script-collection-info").add(e);await D.collection("web-like-collection").add({collect_id:a.result.id,sort:0,collect_user_id:y.userInfo._id});o({icon:"none",title:"新增成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>s()),500)}catch(t){l({content:err.message||"请求服务失败",showCancel:!1})}}}},[["render",function(e,a,t,o,s,l){const w=h(r("uni-easyinput"),p),y=h(r("uni-forms-item"),_),j=f,D=m,V=h(r("uni-forms"),b);return u(),i(D,{class:"uni-container"},{default:n((()=>[d(V,{ref:"form",model:s.formData,"validate-trigger":"submit","err-show-type":"toast"},{default:n((()=>[d(y,{name:"name",label:""},{default:n((()=>[d(w,{placeholder:"合集标题",modelValue:s.formData.name,"onUpdate:modelValue":a[0]||(a[0]=e=>s.formData.name=e)},null,8,["modelValue"])])),_:1}),d(y,{name:"description",label:""},{default:n((()=>[d(w,{placeholder:"合集描述",modelValue:s.formData.description,"onUpdate:modelValue":a[1]||(a[1]=e=>s.formData.description=e)},null,8,["modelValue"])])),_:1}),d(y,{name:"show",label:""},{default:n((()=>[d(w,{placeholder:"合集展示",type:"number",modelValue:s.formData.show,"onUpdate:modelValue":a[2]||(a[2]=e=>s.formData.show=e)},null,8,["modelValue"])])),_:1}),d(D,{class:"uni-button-group"},{default:n((()=>[d(j,{type:"primary",class:"uni-button",onClick:l.submit},{default:n((()=>[c("提交")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1})}],["__scopeId","data-v-9f94edc7"]]);export{v as default};
