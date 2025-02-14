import{_ as e,e as a,N as t,O as s,q as i,H as o,s as n,r as m,a as l,c as r,w as d,i as u,o as c,h as f,k as p,t as h,I as b,Q as _,p as D,Z as y}from"./index-ChNMzRY4.js";import{_ as g}from"./uni-easyinput.Bwbd5nzK.js";import{_ as v}from"./uni-forms-item.BcVhrZ6O.js";import{_ as V}from"./uni-forms.DMBatpC-.js";import{v as k}from"./uni-id-permissions.DrKF0XvK.js";const I=a.database();I.command;function j(e){let a={};for(let t in k)e.includes(t)&&(a[t]=k[t]);return a}const x=e({data(){let e={permission_id:"",permission_name:"",comment:""};return{formData:e,formOptions:{},rules:{...j(Object.keys(e))}}},onLoad(e){if(e.id){const a=e.id;this.formDataId=a,this.getDetail(a)}},onReady(){this.$refs.form.setRules(this.rules)},methods:{submit(){t({mask:!0}),this.$refs.form.validate().then((e=>{this.submitForm(e)})).catch((()=>{s()}))},submitForm(e){I.collection("uni-id-permissions").doc(this.formDataId).update(e).then((e=>{i({title:"修改成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>o()),500)})).catch((e=>{n({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{s()}))},getDetail(e){t({mask:!0}),I.collection("uni-id-permissions").doc(e).field("permission_id,permission_name,comment").get().then((e=>{const a=e.result.data[0];a&&(this.formData=a)})).catch((e=>{n({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{s()}))}}},[["render",function(e,a,t,s,i,o){const n=m(l("uni-easyinput"),g),k=m(l("uni-forms-item"),v),I=b,j=_,x=D,w=y,C=u,O=m(l("uni-forms"),V);return c(),r(C,{class:"uni-container"},{default:d((()=>[f(O,{ref:"form",value:i.formData,validateTrigger:"bind"},{default:d((()=>[f(k,{name:"permission_id",label:"权限ID",required:""},{default:d((()=>[f(n,{placeholder:"权限唯一标识，不可修改，不允许重复",onInput:a[0]||(a[0]=a=>e.binddata("permission_id",a.detail.value)),modelValue:i.formData.permission_id,"onUpdate:modelValue":a[1]||(a[1]=e=>i.formData.permission_id=e),trim:"both",disabled:""},null,8,["modelValue"])])),_:1}),f(k,{name:"permission_name",label:"权限名称",required:""},{default:d((()=>[f(I,{placeholder:"权限名称",onInput:a[2]||(a[2]=a=>e.binddata("permission_name",a.detail.value)),class:"uni-input-border",modelValue:i.formData.permission_name,"onUpdate:modelValue":a[3]||(a[3]=e=>i.formData.permission_name=e),trim:"both"},null,8,["modelValue"])])),_:1}),f(k,{name:"comment",label:"备注"},{default:d((()=>[f(j,{placeholder:"备注",onInput:a[4]||(a[4]=a=>e.binddata("comment",a.detail.value)),class:"uni-textarea-border",modelValue:i.formData.comment,"onUpdate:modelValue":a[5]||(a[5]=e=>i.formData.comment=e),trim:"both"},null,8,["modelValue"])])),_:1}),f(C,{class:"uni-button-group"},{default:d((()=>[f(x,{type:"primary",class:"uni-button",style:{width:"100px"},onClick:o.submit},{default:d((()=>[p(h(e.$t("common.button.submit")),1)])),_:1},8,["onClick"]),f(w,{"open-type":"navigateBack",style:{"margin-left":"15px"}},{default:d((()=>[f(x,{class:"uni-button",style:{width:"100px"}},{default:d((()=>[p(h(e.$t("common.button.back")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["value"])])),_:1})}],["__scopeId","data-v-429be1ab"]]);export{x as default};
