import{e,W as t,E as a,C as o,z as s,u as n,l,c as i,w as r,i as m,o as u,a as d,b as f,$ as c}from"./index-2q7tZIrz.js";import{_ as p}from"./uni-easyinput.BF0TlnBp.js";import{r as h}from"./uni-app.es.DTub21Gi.js";import{_ as b}from"./uni-forms-item.BdEjR4mu.js";import{_ as D}from"./uni-forms.Di5Smm1S.js";import{v as _}from"./web-script-collection-info.Cjjrus_3.js";import{_ as w}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.Kcpg7EQU.js";const g=e.database(),y="web-script-collection-info";function j(e){let t={};for(let a in _)e.indexOf(a)>-1&&(t[a]=_[a]);return t}const V=w({data(){let e={name:"",description:"",show:null};return{formData:e,formOptions:{},rules:{...j(Object.keys(e))}}},onLoad(e){if(e.id){const t=e.id;this.formDataId=t,this.getDetail(t)}},onReady(){this.$refs.form.setRules(this.rules)},methods:{submit(){t({mask:!0}),this.$refs.form.validate().then((e=>this.submitForm(e))).catch((()=>{})).finally((()=>{a()}))},submitForm(e){return g.collection(y).doc(this.formDataId).update(e).then((e=>{o({icon:"none",title:"修改成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>s()),500)})).catch((e=>{n({content:e.message||"请求服务失败",showCancel:!1})}))},getDetail(e){t({mask:!0}),g.collection(y).doc(e).field("name,description,show").get().then((e=>{const t=e.result.data[0];t&&(this.formData=t)})).catch((e=>{n({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{a()}))}}},[["render",function(e,t,a,o,s,n){const _=h(l("uni-easyinput"),p),w=h(l("uni-forms-item"),b),g=c,y=m,j=h(l("uni-forms"),D);return u(),i(y,{class:"uni-container"},{default:r((()=>[d(j,{ref:"form",model:s.formData,"validate-trigger":"submit","err-show-type":"toast"},{default:r((()=>[d(w,{name:"name",label:""},{default:r((()=>[d(_,{placeholder:"合集标题",modelValue:s.formData.name,"onUpdate:modelValue":t[0]||(t[0]=e=>s.formData.name=e)},null,8,["modelValue"])])),_:1}),d(w,{name:"description",label:""},{default:r((()=>[d(_,{placeholder:"合集描述",modelValue:s.formData.description,"onUpdate:modelValue":t[1]||(t[1]=e=>s.formData.description=e)},null,8,["modelValue"])])),_:1}),d(w,{name:"show",label:""},{default:r((()=>[d(_,{placeholder:"合集展示",type:"number",modelValue:s.formData.show,"onUpdate:modelValue":t[2]||(t[2]=e=>s.formData.show=e)},null,8,["modelValue"])])),_:1}),d(y,{class:"uni-button-group"},{default:r((()=>[d(g,{type:"primary",class:"uni-button",onClick:n.submit},{default:r((()=>[f("提交")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1})}],["__scopeId","data-v-1586d9f1"]]);export{V as default};
