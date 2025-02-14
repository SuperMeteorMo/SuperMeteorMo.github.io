import{I as e,o as t,c as l,w as o,a,K as i,b as p,t as u,E as n,A as s,f as d,i as c,J as r}from"./index-BVMXMiMb.js";import{_ as h}from"./_plugin-vue_export-helper.BCo6x5W8.js";const f={data:()=>({}),created(){this.popup=this.getParent()},methods:{getParent(e="uniPopup"){let t=this.$parent,l=t.$options.name;for(;l!==e;){if(t=t.$parent,!t)return!1;l=t.$options.name}return t}}},m={en:{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"},"zh-Hans":{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"},"zh-Hant":{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}},{t:g}=e(m);const y=h({name:"uniPopupDialog",mixins:[f],emits:["confirm","close","update:modelValue","input"],props:{inputType:{type:String,default:"text"},showClose:{type:Boolean,default:!0},modelValue:{type:[Number,String],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""},maxlength:{type:Number,default:-1},focus:{type:Boolean,default:!0}},data:()=>({dialogType:"error",val:""}),computed:{okText(){return this.confirmText||g("uni-popup.ok")},closeText(){return this.cancelText||g("uni-popup.cancel")},placeholderText(){return this.placeholder||g("uni-popup.placeholder")},titleText(){return this.title||g("uni-popup.title")}},watch:{type(e){this.dialogType=e},mode(e){"input"===e&&(this.dialogType="info")},value(e){-1!=this.maxlength&&"input"===this.mode?this.val=e.slice(0,this.maxlength):this.val=e},val(e){this.$emit("update:modelValue",e)}},created(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value,this.val=this.modelValue):this.dialogType=this.type},methods:{onOk(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog(){this.$emit("close"),this.beforeClose||this.popup.close()},close(){this.popup.close()}}},[["render",function(e,h,f,m,g,y){const x=d,T=c,_=r;return t(),l(T,{class:"uni-popup-dialog"},{default:o((()=>[a(T,{class:"uni-dialog-title"},{default:o((()=>[a(x,{class:i(["uni-dialog-title-text",["uni-popup__"+g.dialogType]])},{default:o((()=>[p(u(y.titleText),1)])),_:1},8,["class"])])),_:1}),"base"===f.mode?(t(),l(T,{key:0,class:"uni-dialog-content"},{default:o((()=>[n(e.$slots,"default",{},(()=>[a(x,{class:"uni-dialog-content-text"},{default:o((()=>[p(u(f.content),1)])),_:1})]),!0)])),_:3})):(t(),l(T,{key:1,class:"uni-dialog-content"},{default:o((()=>[n(e.$slots,"default",{},(()=>[a(_,{class:"uni-dialog-input",maxlength:f.maxlength,modelValue:g.val,"onUpdate:modelValue":h[0]||(h[0]=e=>g.val=e),type:f.inputType,placeholder:y.placeholderText,focus:f.focus},null,8,["maxlength","modelValue","type","placeholder","focus"])]),!0)])),_:3})),a(T,{class:"uni-dialog-button-group"},{default:o((()=>[f.showClose?(t(),l(T,{key:0,class:"uni-dialog-button",onClick:y.closeDialog},{default:o((()=>[a(x,{class:"uni-dialog-button-text"},{default:o((()=>[p(u(y.closeText),1)])),_:1})])),_:1},8,["onClick"])):s("",!0),a(T,{class:i(["uni-dialog-button",f.showClose?"uni-border-left":""]),onClick:y.onOk},{default:o((()=>[a(x,{class:"uni-dialog-button-text uni-button-color"},{default:o((()=>[p(u(y.okText),1)])),_:1})])),_:1},8,["class","onClick"])])),_:1})])),_:3})}],["__scopeId","data-v-dc2a088f"]]);export{y as _};
