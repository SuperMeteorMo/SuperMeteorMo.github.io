import{J as e,k as a,l as c,o as l,c as s,w as t,a as r,m as o,G as n,b as i,t as h,A as u,i as d,K as m,f as p}from"./index-Cjdy1NX2.js";import{_ as f}from"./uni-icons.Dd5FM1Ai.js";import{r as b}from"./uni-app.es.lkFlsBrM.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";const _={en:{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"},"zh-Hans":{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"请输入搜索内容"},"zh-Hant":{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"請輸入搜索內容"}},{t:x}=e(_);const V=y({name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:""},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({show:!1,showSync:!1,searchVal:""}),computed:{cancelTextI18n(){return this.cancelText||x("uni-search-bar.cancel")},placeholderText(){return this.placeholder||x("uni-search-bar.placeholder")}},watch:{modelValue:{immediate:!0,handler(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler(e){if(e){if(this.readonly)return;this.show=!0,this.$nextTick((()=>{this.showSync=!0}))}}},searchVal(e,a){this.$emit("input",e),this.$emit("update:modelValue",e)}},methods:{searchClick(){this.readonly||this.show||(this.show=!0,this.$nextTick((()=>{this.showSync=!0})))},clear(){this.$emit("clear",{value:this.searchVal}),this.searchVal=""},cancel(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,a())},confirm(){a(),this.$emit("confirm",{value:this.searchVal})},blur(){a(),this.$emit("blur",{value:this.searchVal})},emitFocus(e){this.$emit("focus",e.detail)}}},[["render",function(e,a,y,_,x,V){const w=b(c("uni-icons"),f),g=d,k=m,S=p;return l(),s(g,{class:"uni-searchbar"},{default:t((()=>[r(g,{style:o({borderRadius:y.radius+"px",backgroundColor:y.bgColor}),class:"uni-searchbar__box",onClick:V.searchClick},{default:t((()=>[r(g,{class:"uni-searchbar__box-icon-search"},{default:t((()=>[n(e.$slots,"searchIcon",{},(()=>[r(w,{color:"#c0c4cc",size:"18",type:"search"})]),!0)])),_:3}),x.show||x.searchVal?(l(),s(k,{key:0,focus:x.showSync,disabled:y.readonly,placeholder:V.placeholderText,maxlength:y.maxlength,class:"uni-searchbar__box-search-input","confirm-type":"search",type:"text",modelValue:x.searchVal,"onUpdate:modelValue":a[0]||(a[0]=e=>x.searchVal=e),onConfirm:V.confirm,onBlur:V.blur,onFocus:V.emitFocus},null,8,["focus","disabled","placeholder","maxlength","modelValue","onConfirm","onBlur","onFocus"])):(l(),s(S,{key:1,class:"uni-searchbar__text-placeholder"},{default:t((()=>[i(h(y.placeholder),1)])),_:1})),x.show&&("always"===y.clearButton||"auto"===y.clearButton&&""!==x.searchVal)&&!y.readonly?(l(),s(g,{key:2,class:"uni-searchbar__box-icon-clear",onClick:V.clear},{default:t((()=>[n(e.$slots,"clearIcon",{},(()=>[r(w,{color:"#c0c4cc",size:"20",type:"clear"})]),!0)])),_:3},8,["onClick"])):u("",!0)])),_:3},8,["style","onClick"]),"always"===y.cancelButton||x.show&&"auto"===y.cancelButton?(l(),s(S,{key:0,onClick:V.cancel,class:"uni-searchbar__cancel"},{default:t((()=>[i(h(V.cancelTextI18n),1)])),_:1},8,["onClick"])):u("",!0)])),_:3})}],["__scopeId","data-v-f744e7d2"]]);export{V as _};
