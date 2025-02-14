import{_ as e,e as t,n as a,r as s,a as i,c as n,w as r,i as l,aD as o,o as u,h as d,k as c,A as h,j as p}from"./index-ChNMzRY4.js";import{_ as m}from"./uni-stat-breadcrumb.BVNH9BxX.js";import{_ as g}from"./uni-data-select.CDU5Czb5.js";import{_}from"./uni-stat-tabs.DUlStDBC.js";import{_ as f}from"./uni-stat-panel.llXMK2iK.js";import{_ as b}from"./qiun-data-charts.BkjqysnU.js";import{_ as y}from"./uni-stat-table.CsARHXM5.js";import{_ as D}from"./uni-pagination.BffVetFt.js";import{s as q,d as C,g as T,a as v,b as x,m as w,h as V,c as P}from"./util.D1YaTYYo.js";import"./uni-tooltip.CEunZ6wx.js";const S=[{title:"日期",field:"start_time",tooltip:"",formatter:"",stat:-1},{title:"新增用户",field:"new_user_count",tooltip:"首次访问应用的用户数（以设备为判断标准，去重）",value:0},{title:"活跃用户",field:"active_user_count",tooltip:"访问过应用内任意页面的总用户数（去重）",value:0},{title:"次均停留时长",field:"avg_user_session_time",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0,stat:"avg"},{title:"人均停留时长 ",field:"avg_user_time",formatter:":",tooltip:"平均每个用户停留在应用内的总时长，即应用停留总时长/活跃用户",value:0,stat:"avg"},{title:"总用户数",field:"total_users",tooltip:"从添加统计到当前选择时间的总用户数（去重）",value:0}];const z=e({data:()=>({fieldsMap:S,query:{dimension:"day",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,currentDimensionTab:1,tableData:[],panelData:S.filter((e=>e.hasOwnProperty("value"))),chartData:{},chartTab:"new_user_count",channelData:[],tabName:"新增用户",errorMessage:"",setOptions:{xAxis:{boundaryGap:!1,axisTick:{show:!1},axisLine:{lineStyle:{color:"#999"}}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{left:40,right:50,bottom:50,top:60,containLabel:!0,show:!1}}}),computed:{chartTabs(){const e=[];return S.forEach((t=>{const{field:a,title:s}=t,i=t.hasOwnProperty("value");a&&s&&i&&e.push({_id:a,name:s})})),e},dimensionTabs(){const e=[{_id:"hour",name:"按时"},{_id:"day",name:"按日"},{_id:"week",name:"按周"},{_id:"month",name:"按月"}];return this.getDays()?e.forEach(((e,t)=>{e._id,e.disabled=!1})):(this.query.dimension="hour",e.forEach(((e,t)=>{"hour"===e._id?e.disabled=!1:e.disabled=!0})),this.currentDimensionTab=0),e},channelQuery(){const e=this.query.platform_id;return q({platform_id:e})},versionQuery(){const{appid:e,uni_platform:t}=this.query;return q({appid:e,uni_platform:t})}},created(){this.debounceGet=C((()=>{this.getAllData(this.query)}),300),this.getChannelData()},watch:{query:{deep:!0,handler(e){this.debounceGet()}}},methods:{getDays(){if(!this.query.start_time.length)return!0;const[e,t]=this.query.start_time;return t-e>=864e5},useDatetimePicker(){this.currentDateTab=-1},changeAppid(e){this.getChannelData(e,!1)},changePlatform(e,t,a,s){this.getChannelData(null,e),this.query.version_id=0,this.query.uni_platform=s.code},changeTimeRange(e,t){this.currentDateTab=t;let a,s;a=T(e),s=e?T(0)-1:T(0)+864e5-1,this.query.start_time=[a,s]},changePageCurrent(e){this.options.pageCurrent=e.current,this.getTabelData(this.query)},changePageSize(e){this.options.pageSize=e,this.getTabelData(this.query)},changeChartTab(e,t,a){this.tabName=a,this.getChartData(this.query,e,a)},changeDimensionTab(e,t){this.currentDimensionTab=t,this.query.dimension=e},getAllData(e){e.appid?(this.errorMessage="",this.getPanelData(),this.getChartData(e,this.chartTab,this.tabName),this.getTabelData(e)):this.errorMessage="请先选择应用"},getChartData(e,a=this.chartTab,s="新增用户"){e=q(e,!0,["uni_platform"]);const i=this.query.dimension;t.database().collection("uni-stat-result").where(e).field(`${v(S,a)}, start_time`).groupBy("start_time").groupField(x(S,a)).orderBy("start_time","asc").get({getCount:!0}).then((e=>{const{count:t,data:n}=e.result,r={categories:[],series:[{name:s,data:[]}]};let l=S.filter((e=>e.field===a));l=JSON.parse(JSON.stringify(l)),delete l[0].value,l[0].formatter="";for(const s of n){w(l,s,s);const e=V(s.start_time,i);let t=s[a];r.series[0].data.push(t),r.categories.push(e)}this.chartData=r})).catch((e=>{console.error(e)})).finally((()=>{this.loading=!1}))},getTabelData(e){const{pageCurrent:a}=this.options;e=q(e,!0,["uni_platform"]),this.options.pageCurrent=1,this.loading=!0;t.database().collection("uni-stat-result").where(e).field(v(S)).groupBy("start_time").groupField(x(S)).orderBy("start_time","desc").skip((a-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((e=>{const{count:t,data:a}=e.result;for(const s of a){let e=s.start_time;if(e){const t=this.query.dimension;s.start_time=V(e,t)}w(S,s,s)}this.tableData=[],this.options.total=t,this.tableData=a})).catch((e=>{console.error(e)})).finally((()=>{this.loading=!1}))},getPanelData(){let e=JSON.parse(JSON.stringify(this.query)),a=q(e,null,["uni_platform"]);t.database().collection("uni-stat-result").where(a).field(`${v(S)},stat_date`).groupBy("appid").groupField(x(S)).orderBy("stat_date","desc").get().then((e=>{const t=e.result.data[0];t&&(t.total_users=0),this.panelData=[],this.panelData=w(S,t),P.call(this,a,"total_users")}))},navTo(e){a({url:`/pages/uni-stat/overview/overview?id=${e}`})},getChannelData(e,a){this.query.channel_id="";const s=t.database(),i={};(e=e||this.query.appid)&&(i.appid=e),(a=a||this.query.platform_id)&&(i.platform_id=a);let n=s.collection("uni-stat-app-platforms").field("_id, name").getTemp(),r=s.collection("uni-stat-app-channels").where(i).field("_id, channel_name, create_time, platform_id").getTemp();s.collection(r,n).orderBy("platform_id","asc").get().then((e=>{let t=e.result.data,a=[];if(t.length>0){let e;for(let s in t)e=t[s].channel_name?t[s].channel_name:"默认",t[s].platform_id.length>0&&(e=t[s].platform_id[0].name+"-"+e),a.push({value:t[s]._id,text:e})}this.channelData=a})).catch((e=>{console.error(e)})).finally((()=>{}))}}},[["render",function(e,t,a,q,C,T){const v=s(i("uni-stat-breadcrumb"),m),x=l,w=s(i("uni-data-select"),g),V=s(i("uni-stat-tabs"),_),P=s(i("uni-datetime-picker"),o),S=s(i("uni-stat-panel"),f),z=s(i("qiun-data-charts"),b),j=s(i("uni-stat-table"),y),M=s(i("uni-pagination"),D);return u(),n(x,{class:"fix-top-window"},{default:r((()=>[d(x,{class:"uni-header"},{default:r((()=>[d(v,{class:"uni-stat-breadcrumb-on-phone"}),d(x,{class:"uni-group"},{default:r((()=>[d(x,{class:"uni-sub-title hide-on-phone"},{default:r((()=>[c("各指标趋势分析")])),_:1})])),_:1})])),_:1}),d(x,{class:"uni-container"},{default:r((()=>[d(x,{class:"uni-stat--x flex p-1015"},{default:r((()=>[d(x,{class:"uni-stat--app-select"},{default:r((()=>[d(w,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",onChange:T.changeAppid,modelValue:C.query.appid,"onUpdate:modelValue":t[0]||(t[0]=e=>C.query.appid=e),clear:!1},null,8,["onChange","modelValue"]),d(w,{collection:"opendb-app-versions",where:T.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:C.query.version_id,"onUpdate:modelValue":t[1]||(t[1]=e=>C.query.version_id=e)},null,8,["where","modelValue"])])),_:1})])),_:1}),d(x,{class:"uni-stat--x flex"},{default:r((()=>[d(V,{label:"日期选择",current:C.currentDateTab,mode:"date",onChange:T.changeTimeRange},null,8,["current","onChange"]),d(P,{type:"datetimerange",end:(new Date).getTime(),modelValue:C.query.start_time,"onUpdate:modelValue":t[2]||(t[2]=e=>C.query.start_time=e),returnType:"timestamp",clearIcon:!1,class:h(["uni-stat-datetime-picker",{"uni-stat__actived":C.currentDateTab<0&&!!C.query.start_time.length}]),onChange:T.useDatetimePicker},null,8,["end","modelValue","class","onChange"]),d(V,{label:"维度选择",type:"box",current:C.currentDimensionTab,tabs:T.dimensionTabs,onChange:T.changeDimensionTab},null,8,["current","tabs","onChange"])])),_:1}),d(x,{class:"uni-stat--x"},{default:r((()=>[d(V,{label:"平台选择",type:"boldLine",mode:"platform",modelValue:C.query.platform_id,"onUpdate:modelValue":t[3]||(t[3]=e=>C.query.platform_id=e),onChange:T.changePlatform},null,8,["modelValue","onChange"]),C.query.platform_id&&-1===C.query.platform_id.indexOf("==")?(u(),n(w,{key:0,ref:"version-select",collection:"uni-stat-app-channels",where:T.channelQuery,class:"p-channel",field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择",modelValue:C.query.channel_id,"onUpdate:modelValue":t[4]||(t[4]=e=>C.query.channel_id=e)},null,8,["where","modelValue"])):p("",!0)])),_:1}),d(S,{items:C.panelData},null,8,["items"]),d(x,{class:"uni-stat--x p-m"},{default:r((()=>[d(x,{class:"label-text mb-l"},{default:r((()=>[c(" 趋势图 ")])),_:1}),d(V,{type:"box",modelValue:C.chartTab,"onUpdate:modelValue":t[5]||(t[5]=e=>C.chartTab=e),tabs:T.chartTabs,class:"mb-l",onChange:T.changeChartTab},null,8,["modelValue","tabs","onChange"]),d(x,{class:"uni-charts-box"},{default:r((()=>[d(z,{type:"area",chartData:C.chartData,echartsH5:"",echartsApp:"",errorMessage:C.errorMessage,eopts:C.setOptions},null,8,["chartData","errorMessage","eopts"])])),_:1})])),_:1}),d(x,{class:"uni-stat--x p-m"},{default:r((()=>[d(j,{data:C.tableData,filedsMap:C.fieldsMap,loading:C.loading},null,8,["data","filedsMap","loading"]),d(x,{class:"uni-pagination-box"},{default:r((()=>[d(M,{"show-icon":"","show-page-size":"","page-size":C.options.pageSize,current:C.options.pageCurrent,total:C.options.total,onChange:T.changePageCurrent,onPageSizeChange:T.changePageSize},null,8,["page-size","current","total","onChange","onPageSizeChange"])])),_:1})])),_:1})])),_:1})])),_:1})}]]);export{z as default};
