import{o as e,c as t,w as r,b as a,t as s,f as o}from"./index-DVYpAuCD.js";import{_ as n}from"./_plugin-vue_export-helper.BCo6x5W8.js";function h(e,t=2){for(e+="";e.length<t;)e="0"+e;return e.slice(-t)}const u={yyyy:e=>h(e.year,4),yy:e=>h(e.year),MM:e=>h(e.month),M:e=>e.month,dd:e=>h(e.day),d:e=>e.day,hh:e=>h(e.hour),h:e=>e.hour,mm:e=>h(e.minute),m:e=>e.minute,ss:e=>h(e.second),s:e=>e.second,SSS:e=>h(e.millisecond,3),S:e=>e.millisecond};function i(e){return e instanceof Date?e:"string"==typeof e?e.indexOf("T")>-1?new Date(e):new Date(e.replace(/-/g,"/")):new Date(e)}function l(e,{locale:t="zh",threshold:r=[6e4,36e5],format:a="yyyy/MM/dd hh:mm:ss"}){if("-"===e)return e;if(!e&&0!==e)return"";const s={zh:{year:"年",month:"月",day:"天",hour:"小时",minute:"分钟",second:"秒",ago:"前",later:"后",justNow:"刚刚",soon:"马上",template:"{num}{unit}{suffix}"},en:{year:"year",month:"month",day:"day",hour:"hour",minute:"minute",second:"second",ago:"ago",later:"later",justNow:"just now",soon:"soon",template:"{num} {unit} {suffix}"}},o=s[t]||s.zh;let n,h,l=i(e),f=l.getTime()-Date.now(),d=Math.abs(f);if(d<r[0])return f<0?o.justNow:o.soon;if(d>=r[1])return function(e,t="yyyy/MM/dd hh:mm:ss"){if(!e&&0!==e)return"";const r={year:(e=i(e)).getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds(),millisecond:e.getMilliseconds()},a=/yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/;let s=!0,o=t;for(;s;)s=!1,o=o.replace(a,(function(e){return s=!0,u[e](r)}));return o}(l,a);let m=o.later;f<0&&(m=o.ago,f=-f);const c=Math.floor(f/1e3),y=Math.floor(c/60),M=Math.floor(y/60),p=Math.floor(M/24),g=Math.floor(p/30),S=Math.floor(g/12);switch(!0){case S>0:n=S,h=o.year;break;case g>0:n=g,h=o.month;break;case p>0:n=p,h=o.day;break;case M>0:n=M,h=o.hour;break;case y>0:n=y,h=o.minute;break;default:n=c,h=o.second}return"en"===t&&(1===n?n="a":h+="s"),o.template.replace(/{\s*num\s*}/g,n+"").replace(/{\s*unit\s*}/g,h).replace(/{\s*suffix\s*}/g,m)}const f=n({name:"uniDateformat",props:{date:{type:[Object,String,Number],default:()=>"-"},locale:{type:String,default:"zh"},threshold:{type:Array,default:()=>[0,0]},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:()=>({refreshMark:0}),computed:{dateShow(){return this.refreshMark,l(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler(){this.setAutoRefresh()},immediate:!0}},methods:{refresh(){this.refreshMark++},setAutoRefresh(){clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((()=>{this.refresh()}),parseInt(this.refreshRate)))}}},[["render",function(n,h,u,i,l,f){const d=o;return e(),t(d,null,{default:r((()=>[a(s(f.dateShow),1)])),_:1})}]]);export{f as _};
