import{g as e,h as a,j as s,k as t,q as o,u as l,v as c,x as i,y as r,z as n,l as h,c as d,w as u,i as f,o as p,a as _,b as m,e as y,r as L,F as g,A as x,t as b,f as k}from"./index-CupAtnve.js";import{_ as C}from"./uni-search-bar.CzhJJbCQ.js";import{r as w}from"./uni-app.es.TiEKNA9k.js";import{_ as S}from"./uni-icons.DELVtk4N.js";import{_ as D}from"./unicloud-db.CXBgCWQY.js";import{_ as v,a as T}from"./uni-list.Bbbm3tui.js";import{_ as H}from"./_plugin-vue_export-helper.BCo6x5W8.js";const I="__local_search_history";e.database().command;var z,j,B,W,F,N;const A=H({data:()=>({mallGoodsDbName:"web-script",searchLogDbName:"opendb-search-log",statusBarHeight:"0px",localSearchList:a(I),localSearchListDel:!1,netHotListIsHide:!1,searchText:"",iconColor:"#999999",associativeList:[],keyBoardPopup:!1,hotWorld:"FCQ",focus:!0,speechEngine:"iFly"}),created(){this.db=e.database(),this.searchLogDb=this.db.collection(this.searchLogDbName),this.mallGoodsDb=this.db.collection(this.mallGoodsDbName),this.searchText=s().globalData.searchText},computed:{associativeShow(){return this.searchText&&this.associativeList.length}},onLoad(){},methods:{clear(e){console.log("res: ",e)},confirm(e){this.search(e.value)},cancel(e){t(),this.searchText="",this.loadList()},search(e){(e||this.hotWorld)&&(e?(this.searchText!==e&&(this.searchText=e),this.localSearchListManage(e),this.searchLogDbAdd(e)):this.hotWorld&&(this.searchText=this.hotWorld),t(),this.loadList(this.searchText))},localSearchListManage(e){a(I).length?(this.localSearchList.unshift(e),(e=>{for(let a=e.length-1;a>=0;a--){const s=e.indexOf(e[a]),t=e.lastIndexOf(e[a]);s!=t&&e.splice(t,1)}})(this.localSearchList),this.localSearchList.length>10&&this.localSearchList.pop()):this.localSearchList=[e],o(I,this.localSearchList)},LocalSearchListClear(){l({content:"确认清空搜索历史吗",confirmText:"删除",confirmColor:"red",cancelColor:"#808080",success:e=>{e.confirm&&(this.localSearchListDel=!1,this.localSearchList=[],c(I))}})},LocalSearchlistItemClick(e,a){if(this.localSearchListDel)return this.localSearchList.splice(a,1),o(I,this.localSearchList),void(this.localSearchList.length||(this.localSearchListDel=!1));this.search(e)},searchHotRefresh(){this.$refs.udb.refresh()},speech(){},searchLogDbAdd(e){this.getDeviceId().then((a=>{this.searchLogDb.add({device_id:a,content:e,create_date:Date.now()})}))},getDeviceId:()=>new Promise(((e,s)=>{const t=a("uni_id");e(t||i().system+"_"+Math.random().toString(36).substr(2))})),associativeClick(e){console.log("associativeClick: ",e),this.search(e.name)},loadList(e=""){s().globalData.searchText=e,r({url:"/pages/list/list"})},backPage(){n()}},watch:{searchText:(z=function(a){a?e.callFunction({name:"scripts",data:{type:"getList",data:{skip:0,limit:20,show:2,search:a,field:{name:!0}}}}).then((e=>{this.associativeList=e.result.data})):(this.associativeList.length=0,s().globalData.searchText="")},j=100,W=z,F=null,N=!0,B&&W(),function(){var e=arguments,a=this;N&&(N=!1,W.apply(a,e)),F&&clearTimeout(F),F=setTimeout((function(){clearTimeout(F),F=null,W.apply(a,e)}),j||200)})}},[["render",function(e,a,s,t,o,l){const c=w(h("uni-search-bar"),C),i=f,r=k,n=w(h("uni-icons"),S),H=w(h("unicloud-db"),D),I=w(h("uni-list-item"),v),z=w(h("uni-list"),T);return p(),d(i,{class:"container"},{default:u((()=>[_(i,{class:"search-container"},{default:u((()=>[_(i,{class:"search-container-bar"},{default:u((()=>[_(c,{ref:"searchBar",style:{flex:"1"},radius:"100",modelValue:o.searchText,"onUpdate:modelValue":a[0]||(a[0]=e=>o.searchText=e),focus:o.focus,placeholder:o.hotWorld,clearButton:"auto",cancelButton:"always",onClear:l.clear,onConfirm:l.confirm,onCancel:l.cancel},null,8,["modelValue","focus","placeholder","onClear","onConfirm","onCancel"])])),_:1})])),_:1}),_(i,{class:"search-body"},{default:u((()=>[o.localSearchList.length?(p(),d(i,{key:0,class:"word-container"},{default:u((()=>[_(i,{class:"word-container_header"},{default:u((()=>[_(r,{class:"word-container_header-text"},{default:u((()=>[m("搜索历史")])),_:1}),o.localSearchListDel?(p(),d(i,{key:1,class:"flex-center flex-row",style:{"font-weight":"500","justify-content":"space-between"}},{default:u((()=>[_(r,{style:{"font-size":"22rpx",color:"#666","padding-top":"4rpx","padding-bottom":"4rpx","padding-right":"20rpx"},onClick:l.LocalSearchListClear},{default:u((()=>[m("全部删除")])),_:1},8,["onClick"]),_(r,{style:{"font-size":"22rpx",color:"#c0402b","padding-top":"4rpx","padding-bottom":"4rpx","padding-left":"20rpx"},onClick:a[2]||(a[2]=e=>o.localSearchListDel=!1)},{default:u((()=>[m("完成")])),_:1})])),_:1})):(p(),d(n,{key:0,onClick:a[1]||(a[1]=e=>o.localSearchListDel=!0),class:"search-icons",style:{"padding-right":"0"},color:o.iconColor,size:"18",type:"trash"},null,8,["color"]))])),_:1}),_(i,{class:"word-container_body"},{default:u((()=>[(p(!0),y(g,null,L(o.localSearchList,((e,a)=>(p(),d(i,{class:"flex-center flex-row word-container_body-text",key:a,onClick:s=>l.LocalSearchlistItemClick(e,a)},{default:u((()=>[(p(),d(r,{class:"word-display",key:e},{default:u((()=>[m(b(e),1)])),_:2},1024)),o.localSearchListDel?(p(),d(n,{key:0,size:"12",type:"closeempty"})):x("",!0)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):x("",!0),_(i,{class:"word-container"},{default:u((()=>[_(i,{class:"word-container_header"},{default:u((()=>[_(i,{class:"flex-center flex-row"},{default:u((()=>[_(r,{class:"word-container_header-text"},{default:u((()=>[m("搜索发现")])),_:1}),o.netHotListIsHide?x("",!0):(p(),d(n,{key:0,class:"search-icons",color:o.iconColor,size:"14",type:"reload",onClick:l.searchHotRefresh},null,8,["color","onClick"]))])),_:1}),_(n,{class:"search-icons",style:{"padding-right":"0"},color:o.iconColor,size:"18",type:o.netHotListIsHide?"eye-slash":"eye",onClick:a[3]||(a[3]=e=>o.netHotListIsHide=!o.netHotListIsHide)},null,8,["color","type"])])),_:1}),_(H,{ref:"udb",field:"content",collection:"opendb-search-hot",orderby:"create_date desc,count desc","page-data":"replace","page-size":10},{default:u((({data:e,loading:a,error:s,options:t})=>[a&&!o.netHotListIsHide?(p(),d(r,{key:0,class:"word-container_body-info"},{default:u((()=>[m("正在加载...")])),_:1})):(p(),d(i,{key:1,class:"word-container_body"},{default:u((()=>[o.netHotListIsHide?(p(),d(i,{key:1,style:{flex:"1"}},{default:u((()=>[_(r,{class:"word-container_body-info"},{default:u((()=>[m("当前搜索发现已隐藏")])),_:1})])),_:1})):(p(),y(g,{key:0},[s?(p(),d(r,{key:0,class:"word-container_body-info"},{default:u((()=>[m(b(s.message),1)])),_:2},1024)):(p(!0),y(g,{key:1},L(e,((e,a)=>(p(),d(r,{class:"word-container_body-text",key:a,onClick:a=>l.search(e.content)},{default:u((()=>[m(b(e.content),1)])),_:2},1032,["onClick"])))),128))],64))])),_:2},1024))])),_:1},512)])),_:1})])),_:1}),l.associativeShow?(p(),d(i,{key:0,class:"search-associative"},{default:u((()=>[_(z,null,{default:u((()=>[(p(!0),y(g,null,L(o.associativeList,((e,a)=>(p(),d(I,{key:e._id,ellipsis:1,title:e.name,onClick:a=>l.associativeClick(e),"show-extra-icon":"",clickable:"","extra-icon":{size:18,color:o.iconColor,type:"search"}},null,8,["title","onClick","extra-icon"])))),128))])),_:1})])),_:1})):x("",!0)])),_:1})}],["__scopeId","data-v-1062e04b"]]);export{A as default};
