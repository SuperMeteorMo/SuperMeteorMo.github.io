import{e,W as t,E as a,C as o,z as l,u as s,l as i,c as r,w as m,i as n,o as u,a as d,b as c,$ as f}from"./index-DmhPW71T.js";import{_ as p}from"./uni-easyinput.DJ2HsnHX.js";import{r as _}from"./uni-app.es.H98Hr6Mz.js";import{_ as h}from"./uni-forms-item.EOTbeUKz.js";import{_ as b}from"./uni-datetime-picker.B1c2O9wL.js";import{_ as D}from"./uni-forms.BCTaLCL9.js";import{v as V}from"./web-like-collection.D3Ww2TXv.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.gpgYDw5Z.js";const g=e.database(),j="web-like-collection";function k(e){let t={};for(let a in V)e.indexOf(a)>-1&&(t[a]=V[a]);return t}const v=y({data(){let e={user_id:"",collect_id:"",sort:null,create_time:null};return{formData:e,formOptions:{},rules:{...k(Object.keys(e))}}},onLoad(e){if(e.id){const t=e.id;this.formDataId=t,this.getDetail(t)}},onReady(){this.$refs.form.setRules(this.rules)},methods:{submit(){t({mask:!0}),this.$refs.form.validate().then((e=>this.submitForm(e))).catch((()=>{})).finally((()=>{a()}))},submitForm(e){return g.collection(j).doc(this.formDataId).update(e).then((e=>{o({icon:"none",title:"修改成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>l()),500)})).catch((e=>{s({content:e.message||"请求服务失败",showCancel:!1})}))},getDetail(e){t({mask:!0}),g.collection(j).doc(e).field("user_id,collect_id,sort,create_time").get().then((e=>{const t=e.result.data[0];t&&(this.formData=t)})).catch((e=>{s({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{a()}))}}},[["render",function(e,t,a,o,l,s){const V=_(i("uni-easyinput"),p),y=_(i("uni-forms-item"),h),g=_(i("uni-datetime-picker"),b),j=f,k=n,v=_(i("uni-forms"),D);return u(),r(k,{class:"uni-container"},{default:m((()=>[d(v,{ref:"form",model:l.formData,"validate-trigger":"submit","err-show-type":"toast"},{default:m((()=>[d(y,{name:"user_id",label:""},{default:m((()=>[d(V,{placeholder:"用户ID， 参考`uni-id-users` 表",modelValue:l.formData.user_id,"onUpdate:modelValue":t[0]||(t[0]=e=>l.formData.user_id=e)},null,8,["modelValue"])])),_:1}),d(y,{name:"collect_id",label:""},{default:m((()=>[d(V,{placeholder:"合集id",modelValue:l.formData.collect_id,"onUpdate:modelValue":t[1]||(t[1]=e=>l.formData.collect_id=e)},null,8,["modelValue"])])),_:1}),d(y,{name:"sort",label:""},{default:m((()=>[d(V,{placeholder:"排序",type:"number",modelValue:l.formData.sort,"onUpdate:modelValue":t[2]||(t[2]=e=>l.formData.sort=e)},null,8,["modelValue"])])),_:1}),d(y,{name:"create_time",label:""},{default:m((()=>[d(g,{"return-type":"timestamp",modelValue:l.formData.create_time,"onUpdate:modelValue":t[3]||(t[3]=e=>l.formData.create_time=e)},null,8,["modelValue"])])),_:1}),d(k,{class:"uni-button-group"},{default:m((()=>[d(j,{type:"primary",class:"uni-button",onClick:s.submit},{default:m((()=>[c("提交")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1})}],["__scopeId","data-v-84f70919"]]);export{v as default};
