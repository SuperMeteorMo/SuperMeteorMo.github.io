import{_ as e,e as a,r as t,a as s,c as i,w as r,i as l,aD as n,o as d,h as o,k as c,A as u,l as _,m as p,F as m,t as h}from"./index-ChNMzRY4.js";import{_ as f}from"./uni-stat-breadcrumb.BVNH9BxX.js";import{_ as y}from"./uni-data-select.CDU5Czb5.js";import{_ as v}from"./qiun-data-charts.BkjqysnU.js";import{g,d as b,s as D}from"./util.D1YaTYYo.js";const x=e({data:()=>({query:{dimension:"day",appid:"",version_id:"",start_time:g(0)},platforms:[],dayChartsData:[],monChartsData:[],errorMessage:""}),created(){this.debounceGet=b((()=>{this.getAllData(this.query)}),300)},watch:{query:{deep:!0,handler(e){this.debounceGet()}}},computed:{chartsData(){return[...this.dayChartsData,...this.monChartsData]},versionQuery(){const{appid:e}=this.query;return D({appid:e})}},methods:{getAllData(e){e.appid?(this.errorMessage="",this.getChartData(e),this.getRangeCountData(e,"month")):this.errorMessage="请先选择应用"},getChartData(e,t="day"){e=JSON.parse(JSON.stringify(e));const s=g(0);if(e.start_time>=s){const a=(new Date).getTime();e.start_time=[s,a],e=D(e,!0)}else e=D(e);a.database().collection("uni-stat-result").where(e).field("active_device_count,new_device_count,total_devices,platform_id").groupBy("platform_id").groupField(`sum(active_device_count) as ${t}_active_device_count, sum(new_device_count) as ${t}_new_device_count, max(total_devices) as ${t}_total_devices`).get().then((e=>{const a=e.result.data;this.initChartOption(a,"dayChartsData")}))},getRangeCountData(e,t){e=D(e);a.database().collection("uni-stat-result").where(e).field(`active_device_count, new_device_count, platform_id, ${t}(add(new Date(0),start_time), "Asia/Shanghai") as ${t},year(add(new Date(0),start_time), "Asia/Shanghai") as year`).groupBy(`year, ${t?t+",":""}platform_id`).groupField(`sum(active_device_count) as ${t}_active_device_count, sum(new_device_count) as ${t}_new_device_count`).orderBy(`year asc, ${t} asc`).get().then((e=>{const a=e.result.data;this.initChartOption(a,"monChartsData","month")}))},initChartOption(e,t,s="day"){a.database().collection("uni-stat-app-platforms").get().then((a=>{const i=[{field:`${s}_new_device_count`,title:("day"===s?"日":"月")+"新增设备对比",series:[{data:[]}]},{field:`${s}_active_device_count`,title:("day"===s?"日":"月")+"活跃设备对比",series:[{data:[]}]}];"day"===s&&i.unshift({field:"day_total_devices",title:"总设备数对比",series:[{data:[]}]}),this[t]=i;const r=a.result.data,l={};r.forEach((e=>{l[e._id]=e.name}));for(const s of this[t]){const a=s.series[0].data,t=JSON.parse(JSON.stringify(l));for(const i of e)for(const e in i)if(s.field===e){const s=i.platform_id,r={name:t[s],value:i[e]};a.push(r),delete t[s]}for(const e in t){const s={name:t[e],value:0};a.push(s)}}}))}}},[["render",function(e,a,g,b,D,x){const w=t(s("uni-stat-breadcrumb"),f),q=l,C=t(s("uni-data-select"),y),$=t(s("uni-datetime-picker"),n),V=t(s("qiun-data-charts"),v);return d(),i(q,{class:"fix-top-window"},{default:r((()=>[o(q,{class:"uni-header"},{default:r((()=>[o(w,{class:"uni-stat-breadcrumb-on-phone"}),o(q,{class:"uni-group hide-on-phone"},{default:r((()=>[o(q,{class:"uni-sub-title"},{default:r((()=>[c("多个指标在不同平台数据的占比，可以直观看出各个平台引流的效果")])),_:1})])),_:1})])),_:1}),o(q,{class:"uni-container"},{default:r((()=>[o(q,{class:"uni-stat--x flex mb-m",style:{padding:"0px 15px"}},{default:r((()=>[o(q,{class:"uni-stat--app-select"},{default:r((()=>[o(C,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",modelValue:D.query.appid,"onUpdate:modelValue":a[0]||(a[0]=e=>D.query.appid=e),clear:!1},null,8,["modelValue"]),o(C,{collection:"opendb-app-versions",where:x.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:D.query.version_id,"onUpdate:modelValue":a[1]||(a[1]=e=>D.query.version_id=e)},null,8,["where","modelValue"])])),_:1}),o(q,{class:"flex",style:{flex:"1"}},{default:r((()=>[o(q,{class:"ml-m label-text hide-on-phone"},{default:r((()=>[c("日期选择:")])),_:1}),o($,{type:"date",modelValue:D.query.start_time,"onUpdate:modelValue":a[2]||(a[2]=e=>D.query.start_time=e),returnType:"timestamp",clearIcon:!1,class:u(["uni-stat-datetime-picker",{"uni-stat__actived":!!D.query.start_time}])},null,8,["modelValue","class"])])),_:1})])),_:1}),o(q,{class:"dispaly-grid"},{default:r((()=>[(d(!0),_(m,null,p(x.chartsData,((e,a)=>(d(),i(q,{key:a,class:"uni-stat--x uni-charts-box1"},{default:r((()=>[o(q,{class:"label-text",style:{margin:"5px 0 20px 0"}},{default:r((()=>[c(h(x.chartsData[a].title),1)])),_:2},1024),o(V,{type:"ring",chartData:x.chartsData[a],echartsH5:"",echartsApp:"",errorMessage:D.errorMessage},null,8,["chartData","errorMessage"])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-e58c6c8b"]]);export{x as default};
