import{o as e,c as i,w as t,a as r,G as s,m as o,H as d,A as n,i as a,I as l,e as h,C as c,n as u,l as g,f as p,r as f,F as m,b,t as _,p as w,J as x,g as y,K as C}from"./index-DLqD9BoL.js";import{_ as k}from"./unicloud-db.C6Hmwjgf.js";import{r as v}from"./uni-app.es.DuJQdQoy.js";import{_ as B}from"./_plugin-vue_export-helper.BCo6x5W8.js";const I=B({name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:()=>({column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}),created(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy(){this.grid.children.forEach(((e,i)=>{e===this&&this.grid.children.splice(i,1)}))},methods:{_onClick(){this.grid.change({detail:{index:this.index}})}}},[["render",function(l,h,c,u,g,p){const f=a;return g.width?(e(),i(f,{key:0,style:o("width:"+g.width+";"+(g.square?"height:"+g.width:"")),class:"uni-grid-item"},{default:t((()=>[r(f,{class:s([{"uni-grid-item--border":g.showBorder,"uni-grid-item--border-top":g.showBorder&&c.index<g.column,"uni-highlight":g.highlight},"uni-grid-item__box"]),style:o({"border-right-color":g.borderColor,"border-bottom-color":g.borderColor,"border-top-color":g.borderColor}),onClick:p._onClick},{default:t((()=>[d(l.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])])),_:3},8,["style"])):n("",!0)}],["__scopeId","data-v-0810a0ad"]]);const $=B({name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide(){return{grid:this}},data:()=>({elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,width:0}),created(){this.children=[]},mounted(){this.$nextTick((()=>{this.init()}))},methods:{init(){setTimeout((()=>{this._getSize((e=>{this.children.forEach(((i,t)=>{i.width=e}))}))}),50)},change(e){this.$emit("change",e)},_getSize(e){l().in(this).select(`#${this.elId}`).boundingClientRect().exec((i=>{this.width=parseInt((i[0].width-1)/this.column)+"px",e(this.width)}))}}},[["render",function(n,l,h,c,u,g){const p=a;return e(),i(p,{class:"uni-grid-wrap"},{default:t((()=>[r(p,{id:u.elId,ref:"uni-grid",class:s(["uni-grid",{"uni-grid--border":h.showBorder}]),style:o({"border-left-color":h.borderColor})},{default:t((()=>[d(n.$slots,"default",{},void 0,!0)])),_:3},8,["id","class","style"])])),_:3})}],["__scopeId","data-v-257e8068"]]);const L=B({data:()=>({gridList:[],current:0,hasLogin:!1}),onShow(){this.hasLogin=h.getCurrentUserInfo().tokenExpired>Date.now()},onLoad(){let e=[];for(var i=0;i<3;i++)e.push(this.$t("grid.visibleToAll"));for(i=0;i<3;i++)e.push(this.$t("grid.invisibleToTourists"));for(i=0;i<3;i++)e.push(this.$t("grid.adminVisible"));this.gridList=e},methods:{change(e){c({title:this.$t("grid.clickTip")+` ${e.detail.index+1} `+this.$t("grid.clickTipGrid"),icon:"none"})},onqueryload(e){},changeSwiper(e){this.current=e.detail.current},clickBannerItem(e){e.open_url&&u({url:"/uni_modules/uni-id-pages/pages/common/webview/webview?url="+e.open_url+"&title="+e.title,success:e=>{},fail:()=>{},complete:()=>{}})}}},[["render",function(s,o,d,l,h,c){const u=w,B=C,L=x,q=v(g("unicloud-db"),k),D=y,S=a,T=v(g("uni-grid-item"),I),j=v(g("uni-grid"),$);return e(),i(S,{class:"warp"},{default:t((()=>[r(q,{ref:"bannerdb",collection:"opendb-banner",field:"_id,bannerfile,open_url,title",onLoad:c.onqueryload},{default:t((({data:s,loading:o,error:d,options:n})=>[o||s.length?(e(),i(L,{key:1,class:"swiper-box",onChange:c.changeSwiper,current:h.current,"indicator-dots":""},{default:t((()=>[(e(!0),p(m,null,f(s,((s,o)=>(e(),i(B,{key:s._id},{default:t((()=>[r(u,{class:"banner-image",src:s.bannerfile.url,mode:"aspectFill",onClick:e=>c.clickBannerItem(s),draggable:!1},null,8,["src","onClick"])])),_:2},1024)))),128))])),_:2},1032,["onChange","current"])):(e(),i(u,{key:0,class:"banner-image",src:"/assets/headers-BiHnxiJ5.png",mode:"aspectFill",draggable:!1}))])),_:1},8,["onLoad"]),r(S,{class:"section-box"},{default:t((()=>[r(D,{class:"decoration"}),r(D,{class:"section-text"},{default:t((()=>[b(_(s.$t("grid.grid")),1)])),_:1})])),_:1}),r(S,{class:"example-body"},{default:t((()=>[r(j,{column:3,highlight:!0,onChange:c.change},{default:t((()=>[(e(!0),p(m,null,f(h.gridList,((o,d)=>(e(),p(m,null,[d<3||d>2&&d<6&&h.hasLogin||d>5&&s.uniIDHasRole("admin")?(e(),i(T,{index:d,key:d},{default:t((()=>[r(S,{class:"grid-item-box",style:{"background-color":"#fff"}},{default:t((()=>[r(D,{class:"big-number"},{default:t((()=>[b(_(d+1),1)])),_:2},1024),r(D,{class:"text"},{default:t((()=>[b(_(o),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["index"])):n("",!0)],64)))),256))])),_:1},8,["onChange"])])),_:1})])),_:1})}],["__scopeId","data-v-5f2644cf"]]);export{L as default};
