import{_ as e,e as t,q as a,s as i,O as n,r as l,a as s,c as o,w as r,i as u,aD as d,b as p,d as c,B as h,f as m,g,a5 as f,o as _,h as y,A as b,l as C,m as v,F as D,k as q,t as T,j as x}from"./index-ChNMzRY4.js";import{_ as O}from"./uni-stat-breadcrumb.BVNH9BxX.js";import{_ as V}from"./uni-link.DOf10afO.js";import{_ as k}from"./uni-data-select.CDU5Czb5.js";import{_ as w}from"./uni-stat-tabs.DUlStDBC.js";import{_ as S}from"./uni-stat-panel.llXMK2iK.js";import{_ as P}from"./qiun-data-charts.BkjqysnU.js";import{_ as j}from"./uni-pagination.BffVetFt.js";import{_ as z}from"./uni-popup-dialog.CvtLt9Mg.js";import{s as M,e as $,d as A,g as B,a as I,b as F,m as N,h as U,c as E}from"./util.D1YaTYYo.js";import"./uni-tooltip.CEunZ6wx.js";const J=[{title:"渠道值",field:"channel_code",tooltip:"",formatter:""},{title:"渠道名称",field:"channel_name",tooltip:"",formatter:""},{title:"新增设备",field:"new_device_count",tooltip:"首次访问应用的设备数（以设备为判断标准，去重）",value:0},{title:"活跃设备",field:"active_device_count",tooltip:"访问过应用内任意页面的总设备数（去重）",value:0},{title:"访问次数",field:"page_visit_count",tooltip:"访问过应用内任意页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问",value:0},{title:"启动次数",field:"app_launch_count",tooltip:"设备从打开应用到主动关闭应用或超时退出计为一次启动",value:0},{title:"次均停留时长",field:"avg_device_session_time",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0},{title:"设备平均停留时长 ",field:"avg_device_time",formatter:":",tooltip:"平均每个设备停留在应用内的总时长，即应用停留总时长/活跃设备",value:0},{title:"跳出率",field:"bounceRate",computed:"bounce_times/app_launch_count",formatter:"%",tooltip:"只浏览一个页面便离开应用的次数占总启动次数的百分比",value:0,contrast:0,fix:2},{title:"总设备数",field:"total_devices",tooltip:"从添加统计到当前选择时间的总设备数（去重）",value:0}];const R=e({data:()=>({fieldsMap:J,query:{dimension:"day",appid:"",uni_platform:"android",platform_id:"",version_id:"",start_time:[]},paginationOptions:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,days:0,tableData:[],panelData:J.filter((e=>e.hasOwnProperty("value"))),chartData:{},chartTab:"new_device_count",queryId:"",updateValue:"",errorMessage:""}),computed:{chartTabs(){const e=[];return J.forEach((t=>{const{field:a,title:i}=t,n=t.hasOwnProperty("value");a&&i&&n&&e.push({_id:a,name:i})})),e},queryStr(){return M(this.query,!0)},dimension(){return $(this.query.start_time,1)?"hour":"day"},versionQuery(){const{appid:e,uni_platform:t}=this.query;return M({appid:e,uni_platform:t,type:"native_app"})}},created(){this.debounceGet=A((()=>{this.getAllData(this.queryStr)}),300)},watch:{query:{deep:!0,handler(e){this.paginationOptions.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker(){this.currentDateTab=-1},changePlatform(e,t,a,i){this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange(e,t){this.currentDateTab=t;let a,i;a=B(e),i=e?B(0)-1:B(0)+864e5-1,this.query.start_time=[a,i]},changePageCurrent(e){this.paginationOptions.pageCurrent=e.current,this.getTableData()},changePageSize(e){this.paginationOptions.pageSize=e,this.paginationOptions.pageCurrent=1,this.getTableData()},changeChartTab(e,t,a){this.getChartData(e,a)},getAllData(e){this.query.appid?(this.errorMessage="",this.getPanelData(),this.getChartData(),this.getTableData()):this.errorMessage="请先选择应用"},getChartData(e=this.chartTab){let a=M(this.query,!1,["uni_platform"]);this.paginationOptions;t.database().collection("uni-stat-result").where(a).field(`${I(J,e)}, start_time, channel_id`).groupBy("channel_id,start_time").groupField(F(J,e)).orderBy("start_time","asc").get({getCount:!0}).then((t=>{const{count:a,data:i}=t.result,n={categories:[],series:[{name:"暂无数据",data:[]}]},l=n.categories;if("hour"===this.dimension)for(let e=0;e<24;++e){const t=e<10?"0"+e:e,a=`${t}:00 ~ ${t}:59`;l.push(a)}const s=[];i.forEach((e=>{s.indexOf(e.channel_id)<0&&s.push(e.channel_id)}));let o=[];this.getChannels().then((e=>{o=e.result.data})).finally((()=>{s.forEach(((t,a)=>{const s=o.find((e=>e._id===t)),r=n.series[a]={name:s&&s.channel_name||"未知",data:[]};if("hour"===this.dimension)for(let e=0;e<24;++e)r.data[e]=0;let u=J.filter((t=>t.field===e));u=JSON.parse(JSON.stringify(u)),delete u[0].value,u[0].formatter="";for(const n of i){N(u,n,n);let a=n.start_time;const i=U(a,this.dimension);let s=n[e];const o=l.indexOf(i);t===n.channel_id&&(o<0?(l.push(i),r.data.push(s)):r.data[o]=s)}})),n.series=n.series.sort(((e,t)=>e.name.localeCompare(t.name))),this.chartData=n}))})).catch((e=>{console.error(e)})).finally((()=>{}))},getChannels(){return t.database().collection("uni-stat-app-channels").where(M({appid:this.query.appid,platform_id:this.query.platform_id})).get()},getTableData(){const e=M(this.query,!1,["uni_platform"]),{pageCurrent:a}=this.paginationOptions;this.loading=!0;t.database().collection("uni-stat-result").where(e).field(`${I(J)},appid, channel_id`).groupBy("appid, channel_id").groupField(F(J)).orderBy("new_device_count","desc").skip((a-1)*this.paginationOptions.pageSize).limit(this.paginationOptions.pageSize).get({getCount:!0}).then((e=>{const{count:t,data:a}=e.result;this.getChannels().then((e=>{const t=e.result.data;for(const i of a)t.forEach((e=>{i.channel_id===e._id&&(i.channel_code=e.channel_code,i.channel_name=e.channel_name)}))})).finally((()=>{for(const e of a)N(J,e,e,"total_");this.tableData=[],this.paginationOptions.total=t,this.tableData=a,this.loading=!1}))})).catch((e=>{console.error(e),this.loading=!1}))},createStr(e,t,a="total_"){const i=[];return e.forEach((e=>{if(field.hasOwnProperty("value")){const n=e.field;i.push(`${t}(${n}) as ${a+n}`)}})),i.join()},getPanelData(){let e=JSON.parse(JSON.stringify(this.query));e.dimension="day";let a=M(e,!1,["uni_platform"]);t.database().collection("uni-stat-result").where(a).field(I(J)).groupBy("appid").groupField(F(J)).orderBy("start_time","desc").get().then((t=>{const a=t.result.data[0];a&&(a.total_devices=0),E.call(this,e),this.panelData=[],this.panelData=N(J,a)}))},inputDialogToggle(e,t){this.queryId=e,this.updateValue=t,this.$refs.inputDialog.open()},editName(e){t.database().collection("uni-stat-app-channels").where({channel_code:this.queryId}).update({channel_name:e}).then((e=>{a({title:"修改成功"}),this.getTableData()})).catch((e=>{i({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{n()}))}}},[["render",function(e,t,a,i,n,M){const $=l(s("uni-stat-breadcrumb"),O),A=l(s("uni-link"),V),B=u,I=l(s("uni-data-select"),k),F=l(s("uni-stat-tabs"),w),N=l(s("uni-datetime-picker"),d),U=l(s("uni-stat-panel"),S),E=l(s("qiun-data-charts"),P),J=l(s("uni-th"),p),R=l(s("uni-tr"),c),G=l(s("uni-icons"),h),Q=l(s("uni-td"),m),H=l(s("uni-table"),g),L=l(s("uni-pagination"),j),K=l(s("uni-popup-dialog"),z),W=l(s("uni-popup"),f);return _(),o(B,{class:"fix-top-window"},{default:r((()=>[y(B,{class:"uni-header"},{default:r((()=>[y($,{class:"uni-stat-breadcrumb-on-phone"}),y(B,{class:"uni-group"},{default:r((()=>[y(B,{class:"uni-sub-title hide-on-phone"},{default:r((()=>[y(A,{href:"https://ask.dcloud.net.cn/article/35974",text:"支持Android App多渠道统计。设置App渠道包的方法，请参考 https://ask.dcloud.net.cn/article/35974。"})])),_:1})])),_:1})])),_:1}),y(B,{class:"uni-container"},{default:r((()=>[y(B,{class:"uni-stat--x flex p-1015"},{default:r((()=>[y(B,{class:"uni-stat--app-select"},{default:r((()=>[y(I,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",modelValue:n.query.appid,"onUpdate:modelValue":t[0]||(t[0]=e=>n.query.appid=e),clear:!1},null,8,["modelValue"]),y(I,{collection:"opendb-app-versions",storage:!1,where:M.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:n.query.version_id,"onUpdate:modelValue":t[1]||(t[1]=e=>n.query.version_id=e)},null,8,["where","modelValue"])])),_:1}),y(F,{label:"平台选择",type:"boldLine",mode:"platform-channel",all:!1,modelValue:n.query.platform_id,"onUpdate:modelValue":t[2]||(t[2]=e=>n.query.platform_id=e),onChange:M.changePlatform},null,8,["modelValue","onChange"])])),_:1}),y(B,{class:"uni-stat--x flex"},{default:r((()=>[y(F,{label:"日期选择",current:n.currentDateTab,mode:"date",onChange:M.changeTimeRange},null,8,["current","onChange"]),y(N,{type:"datetimerange",end:(new Date).getTime(),modelValue:n.query.start_time,"onUpdate:modelValue":t[3]||(t[3]=e=>n.query.start_time=e),returnType:"timestamp",clearIcon:!1,class:b(["uni-stat-datetime-picker",{"uni-stat__actived":n.currentDateTab<0&&!!n.query.start_time.length}]),onChange:M.useDatetimePicker},null,8,["end","modelValue","class","onChange"])])),_:1}),y(B,{class:"uni-stat--x",style:{padding:"15px 0"}},{default:r((()=>[y(U,{items:n.panelData,class:"uni-stat-panel"},null,8,["items"]),y(F,{type:"box",modelValue:n.chartTab,"onUpdate:modelValue":t[4]||(t[4]=e=>n.chartTab=e),tabs:M.chartTabs,class:"mb-l",onChange:M.changeChartTab},null,8,["modelValue","tabs","onChange"]),y(B,{class:"uni-charts-box"},{default:r((()=>[y(E,{type:"area",chartData:n.chartData,echartsH5:"",echartsApp:"",tooltipFormat:"tooltipCustom",errorMessage:n.errorMessage},null,8,["chartData","errorMessage"])])),_:1})])),_:1}),y(B,{class:"uni-stat--x p-m"},{default:r((()=>[y(B,{class:"mb-m"},{default:r((()=>[y(A,{color:"",href:"https://ask.dcloud.net.cn/article/35974",text:"如何自定义渠道包?"})])),_:1}),y(H,{loading:n.loading,border:"",stripe:"",emptyText:n.errorMessage||e.$t("common.empty")},{default:r((()=>[y(R,null,{default:r((()=>[(_(!0),C(D,null,v(n.fieldsMap.slice(0,n.fieldsMap.length-1),((e,t)=>(_(),C(D,{key:t},[e.title?(_(),o(J,{key:t,align:"center"},{default:r((()=>[q(T(e.title),1)])),_:2},1024)):x("",!0)],64)))),128))])),_:1}),(_(!0),C(D,null,v(n.tableData,((e,t)=>(_(),o(R,{key:t},{default:r((()=>[(_(!0),C(D,null,v(n.fieldsMap.slice(0,n.fieldsMap.length-1),((t,a)=>(_(),C(D,{key:a},[t.title&&1===a?(_(),o(Q,{key:t.field,class:"uni-stat-edit--x"},{default:r((()=>[q(T(e[t.field]?e[t.field]:"-")+" ",1),y(G,{type:"compose",color:"#2979ff",size:"25",class:"uni-stat-edit--btn",onClick:t=>M.inputDialogToggle(e.channel_code,e.channel_name)},null,8,["onClick"])])),_:2},1024)):(_(),o(Q,{key:t.field,align:"center"},{default:r((()=>[q(T(void 0!==e[t.field]?e[t.field]:"-"),1)])),_:2},1024))],64)))),128))])),_:2},1024)))),128))])),_:1},8,["loading","emptyText"]),y(B,{class:"uni-pagination-box"},{default:r((()=>[y(L,{"show-icon":"","show-page-size":"","page-size":n.paginationOptions.pageSize,current:n.paginationOptions.pageCurrent,total:n.paginationOptions.total,onChange:M.changePageCurrent,onPageSizeChange:M.changePageSize},null,8,["page-size","current","total","onChange","onPageSizeChange"])])),_:1})])),_:1})])),_:1}),y(W,{ref:"inputDialog",type:"dialog",maskClick:!0},{default:r((()=>[y(K,{ref:"inputClose",mode:"input",title:"请编辑名称",modelValue:n.updateValue,"onUpdate:modelValue":t[5]||(t[5]=e=>n.updateValue=e),placeholder:"请输入内容",onConfirm:M.editName},null,8,["modelValue","onConfirm"])])),_:1},512)])),_:1})}],["__scopeId","data-v-9ae91fa3"]]);export{R as default};
