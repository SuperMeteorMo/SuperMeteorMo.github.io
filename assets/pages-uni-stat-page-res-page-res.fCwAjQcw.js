import{_ as e,e as t,q as a,s as i,O as l,r as n,a as s,c as o,w as r,i as u,aD as d,B as p,b as c,d as m,f as h,g,a5 as f,o as _,h as y,k as b,A as D,j as v,l as q,m as C,F as x,ap as T,t as V}from"./index-ChNMzRY4.js";import{_ as k}from"./uni-stat-breadcrumb.BVNH9BxX.js";import{_ as w}from"./uni-data-select.CDU5Czb5.js";import{_ as z}from"./uni-stat-tabs.DUlStDBC.js";import{_ as P}from"./uni-stat-panel.llXMK2iK.js";import{_ as j}from"./uni-tooltip.CEunZ6wx.js";import{_ as M}from"./uni-pagination.BffVetFt.js";import{_ as S}from"./uni-popup-dialog.CvtLt9Mg.js";import{s as I,d as A,g as B,a as U,b as F,m as O}from"./util.D1YaTYYo.js";const Q=[{title:"受访页",field:"path",tooltip:"设备进入应用访问的所有页面，例如设备从页面1进入应用，跳转到页面2，1,2均为受访页",stat:-1},{title:"页面名称",field:"title",stat:-1},{title:"访问次数",field:"visit_times",tooltip:"访问过应用内任意页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问；",value:0},{title:"退出页次数",field:"exit_times",tooltip:"作为访问会话最后一个访问页面(即离开页）的次数",value:0},{title:"退出率",field:"exitRate",computed:"exit_times/visit_times",formatter:"%",tooltip:"在此页面，选择离开应用占此页面访问次数的比例",stat:-1},{title:"访问总时长(秒)",field:"duration",disabled:!0},{title:"次均停留时长",field:"avg_device_session_time",computed:"duration/visit_times",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0},{title:"设备平均停留时长",field:"avg_user_time",computed:"duration/visit_devices",formatter:":",tooltip:"平均每个设备停留在应用内的总时长，即应用停留总时长/访问设备数",value:0},{title:"分享次数",field:"share_count",tooltip:"页面被分享成功的次数",value:0}];const R=e({data:()=>({fieldsMap:Q,query:{dimension:"day",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,tableData:[],panelData:Q.filter((e=>e.hasOwnProperty("value"))),queryId:"",updateValue:"",channelData:[],errorMessage:""}),computed:{channelQuery(){const e=this.query.platform_id;return I({platform_id:e})},versionQuery(){const{appid:e,uni_platform:t}=this.query;return I({appid:e,uni_platform:t})}},created(){this.debounceGet=A((()=>this.getAllData())),this.getChannelData()},watch:{query:{deep:!0,handler(e){this.options.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker(){this.currentDateTab=-1},changeAppid(e){this.getChannelData(e,!1)},changePlatform(e,t,a,i){this.getChannelData(null,e),this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange(e,t){this.currentDateTab=t;const a=B(e),i=B(0)-1;this.query.start_time=[a,i]},changePageCurrent(e){this.options.pageCurrent=e.current,this.getTableData(this.query)},changePageSize(e){this.options.pageSize=e,this.options.pageCurrent=1,this.getTableData()},getAllData(){this.getPanelData(),this.getTableData()},getTableData(e){if(!this.query.appid)return void(this.errorMessage="请先选择应用");this.errorMessage="",e=I(this.query,null,["uni_platform"]);const{pageCurrent:a}=this.options;this.loading=!0;const i=t.database(),l=I({appid:this.query.appid}),n=i.collection("uni-stat-pages").where(l).field("_id, title, path").getTemp(),s=i.collection("uni-stat-page-result").where(e).getTemp();i.collection(s,n).field(`${U(Q)}, stat_date, page_id`).groupBy("page_id").groupField(F(Q)).orderBy("visit_times","desc").skip((a-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((e=>{const{count:t,data:a}=e.result;this.options.total=t,this.tableData=[];for(const i of a){const e=i.page_id;if(Array.isArray(e)){delete i.page_id;const t=e[0];if(t&&Object.keys(t).length)for(const e in t)"_id"!==e&&(i[e]=t[e])}O(Q,i,i),this.tableData.push(i)}})).catch((e=>{console.error(e)})).finally((()=>{this.loading=!1}))},getPanelData(e=I(this.query,null,["uni_platform"])){if(!this.query.appid)return void(this.errorMessage="请先选择应用");this.errorMessage="";t.database().collection("uni-stat-page-result").where(e).field(U(Q)).groupBy("appid").groupField(F(Q)).orderBy("start_time","desc ").get().then((e=>{const t=e.result.data[0];this.panelData=[],this.panelData=O(Q,t)}))},inputDialogToggle(e,t){this.queryId=e,this.updateValue=t,this.$refs.inputDialog.open()},editName(e){t.database().collection("uni-stat-pages").where({path:this.queryId}).update({title:e}).then((e=>{e.result.updated?(a({title:"修改成功"}),this.getTableData()):a({title:"修改失败",icon:"none"})})).catch((e=>{i({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{l()}))},getChannelData(e,a){this.query.channel_id="";const i=t.database(),l={};(e=e||this.query.appid)&&(l.appid=e),(a=a||this.query.platform_id)&&(l.platform_id=a);let n=i.collection("uni-stat-app-platforms").field("_id, name").getTemp(),s=i.collection("uni-stat-app-channels").where(l).field("_id, channel_name, create_time, platform_id").getTemp();i.collection(s,n).orderBy("platform_id","asc").get().then((e=>{let t=e.result.data,a=[];if(t.length>0){let e;for(let i in t)e=t[i].channel_name?t[i].channel_name:"默认",t[i].platform_id.length>0&&(e=t[i].platform_id[0].name+"-"+e),a.push({value:t[i]._id,text:e})}this.channelData=a})).catch((e=>{console.error(e)})).finally((()=>{}))}}},[["render",function(e,t,a,i,l,I){const A=n(s("uni-stat-breadcrumb"),k),B=u,U=n(s("uni-data-select"),w),F=n(s("uni-stat-tabs"),z),O=n(s("uni-datetime-picker"),d),Q=n(s("uni-stat-panel"),P),R=n(s("uni-icons"),p),$=n(s("uni-tooltip"),j),G=n(s("uni-th"),c),N=n(s("uni-tr"),m),L=n(s("uni-td"),h),E=n(s("uni-table"),g),H=n(s("uni-pagination"),M),J=n(s("uni-popup-dialog"),S),K=n(s("uni-popup"),f);return _(),o(B,{class:"fix-top-window"},{default:r((()=>[y(B,{class:"uni-header"},{default:r((()=>[y(A,{class:"uni-stat-breadcrumb-on-phone"}),y(B,{class:"uni-group"},{default:r((()=>[y(B,{class:"uni-sub-title hide-on-phone"},{default:r((()=>[b("受访页数据分析")])),_:1})])),_:1})])),_:1}),y(B,{class:"uni-container"},{default:r((()=>[y(B,{class:"uni-stat--x flex p-1015"},{default:r((()=>[y(B,{class:"uni-stat--app-select"},{default:r((()=>[y(U,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",modelValue:l.query.appid,"onUpdate:modelValue":t[0]||(t[0]=e=>l.query.appid=e),clear:!1},null,8,["modelValue"]),y(U,{collection:"opendb-app-versions",where:I.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:l.query.version_id,"onUpdate:modelValue":t[1]||(t[1]=e=>l.query.version_id=e)},null,8,["where","modelValue"])])),_:1})])),_:1}),y(B,{class:"uni-stat--x flex"},{default:r((()=>[y(F,{label:"日期选择",current:l.currentDateTab,mode:"date",onChange:I.changeTimeRange},null,8,["current","onChange"]),y(O,{type:"datetimerange",end:(new Date).getTime(),modelValue:l.query.start_time,"onUpdate:modelValue":t[2]||(t[2]=e=>l.query.start_time=e),returnType:"timestamp",clearIcon:!1,class:D(["uni-stat-datetime-picker",{"uni-stat__actived":l.currentDateTab<0&&!!l.query.start_time.length}]),onChange:I.useDatetimePicker},null,8,["end","modelValue","class","onChange"])])),_:1}),y(B,{class:"uni-stat--x"},{default:r((()=>[y(F,{label:"平台选择",type:"boldLine",mode:"platform",modelValue:l.query.platform_id,"onUpdate:modelValue":t[3]||(t[3]=e=>l.query.platform_id=e),onChange:I.changePlatform},null,8,["modelValue","onChange"]),l.query.platform_id&&-1===l.query.platform_id.indexOf("==")?(_(),o(U,{key:0,ref:"version-select",collection:"uni-stat-app-channels",where:I.channelQuery,class:"p-channel",field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择",modelValue:l.query.channel_id,"onUpdate:modelValue":t[4]||(t[4]=e=>l.query.channel_id=e)},null,8,["where","modelValue"])):v("",!0)])),_:1}),y(Q,{items:l.panelData},null,8,["items"]),y(B,{class:"uni-stat--x p-m"},{default:r((()=>[y(E,{loading:l.loading,border:"",stripe:"",emptyText:l.errorMessage||e.$t("common.empty")},{default:r((()=>[y(N,null,{default:r((()=>[(_(!0),q(x,null,C(l.fieldsMap,((e,t)=>(_(),q(x,{key:t},[e.title?(_(),o(G,{key:t,align:"center"},{default:r((()=>[y($,null,T({default:r((()=>[b(V(e.title)+" ",1),0===t&&e.tooltip?(_(),o(R,{key:0,type:"help",color:"#666"})):v("",!0)])),_:2},[0===t&&e.tooltip?{name:"content",fn:r((()=>[y(B,{class:"uni-stat-tooltip-s"},{default:r((()=>[b(V(e.tooltip),1)])),_:2},1024)])),key:"0"}:void 0]),1024)])),_:2},1024)):v("",!0)],64)))),128))])),_:1}),(_(!0),q(x,null,C(l.tableData,((e,t)=>(_(),o(N,{key:t},{default:r((()=>[(_(!0),q(x,null,C(l.fieldsMap,((t,a)=>(_(),q(x,{key:a},[1===a?(_(),o(L,{key:t.field,class:"uni-stat-edit--x"},{default:r((()=>[b(V(void 0!==e[t.field]?e[t.field]:"-")+" ",1),y(R,{type:"compose",color:"#2979ff",size:"25",class:"uni-stat-edit--btn",onClick:t=>I.inputDialogToggle(e.path,e.title)},null,8,["onClick"])])),_:2},1024)):(_(),o(L,{key:t.field,align:0===a?"left":"center"},{default:r((()=>[b(V(void 0!==e[t.field]?e[t.field]:"-"),1)])),_:2},1032,["align"]))],64)))),128))])),_:2},1024)))),128))])),_:1},8,["loading","emptyText"]),y(B,{class:"uni-pagination-box"},{default:r((()=>[y(H,{"show-icon":"","show-page-size":"","page-size":l.options.pageSize,current:l.options.pageCurrent,total:l.options.total,onChange:I.changePageCurrent,onPageSizeChange:I.changePageSize},null,8,["page-size","current","total","onChange","onPageSizeChange"])])),_:1})])),_:1})])),_:1}),y(K,{ref:"inputDialog",type:"dialog",maskClick:!0},{default:r((()=>[y(J,{ref:"inputClose",mode:"input",title:"请编辑名称",modelValue:l.updateValue,"onUpdate:modelValue":t[5]||(t[5]=e=>l.updateValue=e),placeholder:"请输入内容",onConfirm:I.editName},null,8,["modelValue","onConfirm"])])),_:1},512)])),_:1})}],["__scopeId","data-v-8e57580c"]]);export{R as default};
