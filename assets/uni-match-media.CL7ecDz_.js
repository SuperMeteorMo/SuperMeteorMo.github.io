import{av as t,R as e,T as i,o as a,c as n,w as h,E as r,i as s}from"./index-BaDKg7nY.js";import{_ as d}from"./_plugin-vue_export-helper.BCo6x5W8.js";let m;const o=d({name:"UniMatchMedia",props:{width:{type:[Number,String],default:""},minWidth:{type:[Number,String],default:""},maxWidth:{type:[Number,String],default:""},height:{type:[Number,String],default:""},minHeight:{type:[Number,String],default:""},maxHeight:{type:[Number,String],default:""},orientation:{type:String,default:""}},data:()=>({matches:!0}),mounted(){let e=this.$parent;for(;e.$parent;)e=e.$parent;m=t(e),m.observe({width:this.width,maxWidth:this.maxWidth,minWidth:this.minWidth,height:this.height,minHeight:this.minHeight,maxHeight:this.maxHeight,orientation:this.orientation},(t=>{this.matches=t}))},destroyed(){m.disconnect()}},[["render",function(t,d,m,o,u,p){const g=s;return e((a(),n(g,null,{default:h((()=>[r(t.$slots,"default",{},void 0,!0)])),_:3},512)),[[i,u.matches]])}],["__scopeId","data-v-eed4b8a9"]]);export{o as _};
