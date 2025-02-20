import{C as e,g as t,l as s,o as a,c as o,w as i,a as n,L as r,b as u,t as l,f as c,i as m}from"./index-Cjdy1NX2.js";import{_ as h}from"./uni-captcha.Dy-dUjOj.js";import{r as p}from"./uni-app.es.lkFlsBrM.js";import{_ as d}from"./uni-easyinput.C18cDJC-.js";import{_ as f}from"./_plugin-vue_export-helper.BCo6x5W8.js";const g=f({name:"uni-sms-form",model:{prop:"modelValue",event:"update:modelValue"},props:{event:["update:modelValue"],count:{type:[String,Number],default:60},phone:{type:[String,Number],default:""},type:{type:String,default:()=>"login"},focusCaptchaInput:{type:Boolean,default:()=>!1}},data:()=>({captcha:"",reverseNumber:0,reverseTimer:null,modelValue:"",focusSmsCodeInput:!1}),watch:{captcha(e,t){4==e.length&&4!=t.length&&this.start()},modelValue(e){this.$emit("input",e),this.$emit("update:modelValue",e)}},computed:{innerText(){return 0==this.reverseNumber?"获取短信验证码":"重新发送("+this.reverseNumber+"s)"}},created(){this.initClick()},methods:{getImageCaptcha(e){this.$refs.captcha.getImageCaptcha(e)},initClick(){this.start=function(e,t){let s;return t=t||500,function(){let a=arguments;s&&clearTimeout(s);let o=!s;s=setTimeout((()=>{s=null}),t),o&&e.apply(this,a)}}((()=>{0==this.reverseNumber&&this.sendMsg()}))},sendMsg(){if(4!=this.captcha.length)return this.$refs.captcha.focusCaptchaInput=!0,e({title:"请先输入图形验证码",icon:"none",duration:3e3});if(!/^1\d{10}$/.test(this.phone))return e({title:"手机号格式错误",icon:"none",duration:3e3});const s=t.importObject("uni-id-co",{customUI:!0});console.log("sendSmsCode",{mobile:this.phone,scene:this.type,captcha:this.captcha}),s.sendSmsCode({mobile:this.phone,scene:this.type,captcha:this.captcha}).then((t=>{e({title:"短信验证码发送成功",icon:"none",duration:3e3}),this.reverseNumber=Number(this.count),this.getCode()})).catch((t=>{"uni-id-invalid-sms-template-id"==t.code?(this.modelValue="123456",e({title:"已启动测试模式,详情【控制台信息】",icon:"none",duration:3e3}),console.warn(t.message)):(this.getImageCaptcha(),this.captcha="",e({title:t.message,icon:"none",duration:3e3}))}))},getCode(){if(0==this.reverseNumber)return clearTimeout(this.reverseTimer),void(this.reverseTimer=null);this.reverseNumber--,this.reverseTimer=setTimeout((()=>{this.getCode()}),1e3)}}},[["render",function(e,t,f,g,b,v){const C=p(s("uni-captcha"),h),V=p(s("uni-easyinput"),d),_=c,x=m;return a(),o(x,null,{default:i((()=>[n(C,{focus:f.focusCaptchaInput,ref:"captcha",scene:"send-sms-code",modelValue:b.captcha,"onUpdate:modelValue":t[0]||(t[0]=e=>b.captcha=e)},null,8,["focus","modelValue"]),n(x,{class:"box"},{default:i((()=>[n(V,{focus:b.focusSmsCodeInput,onBlur:t[1]||(t[1]=e=>b.focusSmsCodeInput=!1),type:"number",class:"input-box",inputBorder:!1,modelValue:b.modelValue,"onUpdate:modelValue":t[2]||(t[2]=e=>b.modelValue=e),maxlength:"6",clearable:!1,trim:"both",placeholder:"请输入短信验证码"},null,8,["focus","modelValue"]),n(x,{class:"short-code-btn","hover-class":"hover",onClick:e.start},{default:i((()=>[n(_,{class:r(["inner-text",0==b.reverseNumber?"inner-text-active":""])},{default:i((()=>[u(l(v.innerText),1)])),_:1},8,["class"])])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-b1f7d9e0"]]);export{g as _};
