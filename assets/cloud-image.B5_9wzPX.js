import{g as t,o as e,c as i,w as s,m as c,A as r,p as l,i as h}from"./index-CF18_Xzg.js";import{_ as d}from"./_plugin-vue_export-helper.BCo6x5W8.js";const n=d({name:"cloud-image",emits:["click"],props:{mode:{type:String,default:()=>"widthFix"},src:{default:()=>""},width:{type:String,default:()=>"100rpx"},height:{type:String,default:()=>"100rpx"}},watch:{src:{handler(e){e&&"cloud://"==e.substring(0,8)?t.getTempFileURL({fileList:[e]}).then((t=>{this.cSrc=t.fileList[0].tempFileURL})):this.cSrc=e},immediate:!0}},methods:{onClick(){this.$emit("click")}},data:()=>({cSrc:!1})},[["render",function(t,d,n,o,a,m){const p=l,u=h;return e(),i(u,{onClick:m.onClick,style:c([{width:n.width,height:n.height},{"justify-content":"center"}])},{default:s((()=>[a.cSrc?(e(),i(p,{key:0,style:c({width:n.width,height:n.height}),src:a.cSrc,mode:n.mode},null,8,["style","src","mode"])):r("",!0)])),_:1},8,["onClick","style"])}]]);export{n as _};
