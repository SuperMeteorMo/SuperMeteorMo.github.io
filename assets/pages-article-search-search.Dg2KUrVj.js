import{h as e,g as a,j as t,k as s,q as o,u as l,v as c,x as i,y as r,z as n,l as h,c as d,w as u,i as f,o as p,a as _,b as L,e as y,r as g,F as m,A as x,t as b,f as k}from"./index-CF18_Xzg.js";import{_ as C}from"./uni-search-bar.yobxzSQg.js";import{r as w}from"./uni-app.es.Cv9tj6QD.js";import{_ as S}from"./uni-icons.EJCcdNov.js";import{_ as D}from"./unicloud-db.87iV_k9q.js";import{_ as v,a as T}from"./uni-list.DDT-gTWY.js";import{_ as H}from"./_plugin-vue_export-helper.BCo6x5W8.js";const I="title",z="__local_search_history";var j,B,W,G,N,A;const M=H({data:()=>({mallGoodsDbName:"opendb-news-articles",searchLogDbName:"opendb-search-log",statusBarHeight:"0px",localSearchList:e(z),localSearchListDel:!1,netHotListIsHide:!1,searchText:"",iconColor:"#999999",associativeList:[],keyBoardPopup:!1,hotWorld:"DCloud",focus:!0,speechEngine:"iFly"}),created(){this.db=a.database(),this.searchLogDb=this.db.collection(this.searchLogDbName),this.mallGoodsDb=this.db.collection(this.mallGoodsDbName),this.searchText=t().globalData.searchText},computed:{associativeShow(){return this.searchText&&this.associativeList.length}},onLoad(){},methods:{clear(e){console.log("res: ",e)},confirm(e){this.search(e.value)},cancel(e){s(),this.searchText="",this.loadList()},search(e){(e||this.hotWorld)&&(e?(this.searchText!==e&&(this.searchText=e),this.localSearchListManage(e),this.searchLogDbAdd(e)):this.hotWorld&&(this.searchText=this.hotWorld),s(),this.loadList(this.searchText))},localSearchListManage(a){e(z).length?(this.localSearchList.unshift(a),(e=>{for(let a=e.length-1;a>=0;a--){const t=e.indexOf(e[a]),s=e.lastIndexOf(e[a]);t!=s&&e.splice(s,1)}})(this.localSearchList),this.localSearchList.length>10&&this.localSearchList.pop()):this.localSearchList=[a],o(z,this.localSearchList)},LocalSearchListClear(){l({content:"确认清空搜索历史吗",confirmText:"删除",confirmColor:"red",cancelColor:"#808080",success:e=>{e.confirm&&(this.localSearchListDel=!1,this.localSearchList=[],c(z))}})},LocalSearchlistItemClick(e,a){if(this.localSearchListDel)return this.localSearchList.splice(a,1),o(z,this.localSearchList),void(this.localSearchList.length||(this.localSearchListDel=!1));this.search(e)},searchHotRefresh(){this.$refs.udb.refresh()},speech(){},searchLogDbAdd(e){this.getDeviceId().then((a=>{this.searchLogDb.add({device_id:a,content:e,create_date:Date.now()})}))},getDeviceId:()=>new Promise(((a,t)=>{const s=e("uni_id");a(s||i().system+"_"+Math.random().toString(36).substr(2))})),associativeClick(e){console.log("associativeClick: ",e),this.loadList(e.title)},loadList(e=""){t().globalData.searchText=e,r({url:"/pages/article/list"})},backPage(){n()}},watch:{searchText:(j=function(e){e?this.mallGoodsDb.where({[I]:new RegExp(e,"i")}).field("_id,title").get().then((e=>{this.associativeList=e.result.data})):(this.associativeList.length=0,t().globalData.searchText="")},B=100,G=j,N=null,A=!0,W&&G(),function(){var e=arguments,a=this;A&&(A=!1,G.apply(a,e)),N&&clearTimeout(N),N=setTimeout((function(){clearTimeout(N),N=null,G.apply(a,e)}),B||200)})}},[["render",function(e,a,t,s,o,l){const c=w(h("uni-search-bar"),C),i=f,r=k,n=w(h("uni-icons"),S),H=w(h("unicloud-db"),D),I=w(h("uni-list-item"),v),z=w(h("uni-list"),T);return p(),d(i,{class:"container"},{default:u((()=>[_(i,{class:"search-container"},{default:u((()=>[_(i,{class:"search-container-bar"},{default:u((()=>[_(c,{ref:"searchBar",style:{flex:"1"},radius:"100",modelValue:o.searchText,"onUpdate:modelValue":a[0]||(a[0]=e=>o.searchText=e),focus:o.focus,placeholder:o.hotWorld,clearButton:"auto",cancelButton:"always",onClear:l.clear,onConfirm:l.confirm,onCancel:l.cancel},null,8,["modelValue","focus","placeholder","onClear","onConfirm","onCancel"])])),_:1})])),_:1}),_(i,{class:"search-body"},{default:u((()=>[o.localSearchList.length?(p(),d(i,{key:0,class:"word-container"},{default:u((()=>[_(i,{class:"word-container_header"},{default:u((()=>[_(r,{class:"word-container_header-text"},{default:u((()=>[L("搜索历史")])),_:1}),o.localSearchListDel?(p(),d(i,{key:1,class:"flex-center flex-row",style:{"font-weight":"500","justify-content":"space-between"}},{default:u((()=>[_(r,{style:{"font-size":"22rpx",color:"#666","padding-top":"4rpx","padding-bottom":"4rpx","padding-right":"20rpx"},onClick:l.LocalSearchListClear},{default:u((()=>[L("全部删除")])),_:1},8,["onClick"]),_(r,{style:{"font-size":"22rpx",color:"#c0402b","padding-top":"4rpx","padding-bottom":"4rpx","padding-left":"20rpx"},onClick:a[2]||(a[2]=e=>o.localSearchListDel=!1)},{default:u((()=>[L("完成")])),_:1})])),_:1})):(p(),d(n,{key:0,onClick:a[1]||(a[1]=e=>o.localSearchListDel=!0),class:"search-icons",style:{"padding-right":"0"},color:o.iconColor,size:"18",type:"trash"},null,8,["color"]))])),_:1}),_(i,{class:"word-container_body"},{default:u((()=>[(p(!0),y(m,null,g(o.localSearchList,((e,a)=>(p(),d(i,{class:"flex-center flex-row word-container_body-text",key:a,onClick:t=>l.LocalSearchlistItemClick(e,a)},{default:u((()=>[(p(),d(r,{class:"word-display",key:e},{default:u((()=>[L(b(e),1)])),_:2},1024)),o.localSearchListDel?(p(),d(n,{key:0,size:"12",type:"closeempty"})):x("",!0)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):x("",!0),_(i,{class:"word-container"},{default:u((()=>[_(i,{class:"word-container_header"},{default:u((()=>[_(i,{class:"flex-center flex-row"},{default:u((()=>[_(r,{class:"word-container_header-text"},{default:u((()=>[L("搜索发现")])),_:1}),o.netHotListIsHide?x("",!0):(p(),d(n,{key:0,class:"search-icons",color:o.iconColor,size:"14",type:"reload",onClick:l.searchHotRefresh},null,8,["color","onClick"]))])),_:1}),_(n,{class:"search-icons",style:{"padding-right":"0"},color:o.iconColor,size:"18",type:o.netHotListIsHide?"eye-slash":"eye",onClick:a[3]||(a[3]=e=>o.netHotListIsHide=!o.netHotListIsHide)},null,8,["color","type"])])),_:1}),_(H,{ref:"udb",field:"content",collection:"opendb-search-hot",orderby:"create_date desc,count desc","page-data":"replace","page-size":10},{default:u((({data:e,loading:a,error:t,options:s})=>[a&&!o.netHotListIsHide?(p(),d(r,{key:0,class:"word-container_body-info"},{default:u((()=>[L("正在加载...")])),_:1})):(p(),d(i,{key:1,class:"word-container_body"},{default:u((()=>[o.netHotListIsHide?(p(),d(i,{key:1,style:{flex:"1"}},{default:u((()=>[_(r,{class:"word-container_body-info"},{default:u((()=>[L("当前搜索发现已隐藏")])),_:1})])),_:1})):(p(),y(m,{key:0},[t?(p(),d(r,{key:0,class:"word-container_body-info"},{default:u((()=>[L(b(t.message),1)])),_:2},1024)):(p(!0),y(m,{key:1},g(e,((e,a)=>(p(),d(r,{class:"word-container_body-text",key:a,onClick:a=>l.search(e.content)},{default:u((()=>[L(b(e.content),1)])),_:2},1032,["onClick"])))),128))],64))])),_:2},1024))])),_:1},512)])),_:1})])),_:1}),l.associativeShow?(p(),d(i,{key:0,class:"search-associative"},{default:u((()=>[_(z,null,{default:u((()=>[(p(!0),y(m,null,g(o.associativeList,((e,a)=>(p(),d(I,{key:e._id,ellipsis:1,title:e.name,onClick:a=>l.associativeClick(e),"show-extra-icon":"",clickable:"","extra-icon":{size:18,color:o.iconColor,type:"search"}},null,8,["title","onClick","extra-icon"])))),128))])),_:1})])),_:1})):x("",!0)])),_:1})}],["__scopeId","data-v-0cd965ba"]]);export{M as default};
