import{C as e,g as t,l as a,o as i,c as s,w as n,a as o,L as r,b as l,t as u,f as c,i as m}from"./index-DaWOLB7u.js";import{_ as d}from"./uni-captcha.CSb-n_dT.js";import{r as h}from"./uni-app.es.CZKDAWJM.js";import{_ as p}from"./uni-easyinput.BNN2yiQA.js";import{_ as f}from"./_plugin-vue_export-helper.BCo6x5W8.js";const g=f({name:"uni-email-code-form",model:{prop:"modelValue",event:"update:modelValue"},props:{event:["update:modelValue"],count:{type:[String,Number],default:60},email:{type:[String],default:""},type:{type:String,default:()=>"register"},focusCaptchaInput:{type:Boolean,default:()=>!1}},data:()=>({captcha:"",reverseNumber:0,reverseTimer:null,modelValue:"",focusEmailCodeInput:!1}),watch:{captcha(e,t){4==e.length&&4!=t.length&&this.start()},modelValue(e){this.$emit("input",e),this.$emit("update:modelValue",e)}},computed:{innerText(){return 0==this.reverseNumber?"获取邮箱验证码":"重新发送("+this.reverseNumber+"s)"}},created(){this.initClick()},methods:{getImageCaptcha(e){this.$refs.captcha.getImageCaptcha(e)},initClick(){this.start=function(e,t){let a;return t=t||500,function(){let i=arguments;a&&clearTimeout(a);let s=!a;a=setTimeout((()=>{a=null}),t),s&&e.apply(this,i)}}((()=>{0==this.reverseNumber&&this.sendMsg()}))},sendMsg(){if(4!=this.captcha.length)return this.$refs.captcha.focusCaptchaInput=!0,e({title:"请先输入图形验证码",icon:"none",duration:3e3});if(!this.email)return e({title:"请输入邮箱",icon:"none",duration:3e3});if(!/@/.test(this.email))return e({title:"邮箱格式错误",icon:"none",duration:3e3});const a=t.importObject("uni-id-co",{customUI:!0});console.log("sendEmailCode",{email:this.email,scene:this.type,captcha:this.captcha}),a.sendEmailCode({email:this.email,scene:this.type,captcha:this.captcha}).then((t=>{e({title:"邮箱验证码发送成功",icon:"none",duration:3e3}),this.reverseNumber=Number(this.count),this.getCode()})).catch((t=>{"uni-id-invalid-mail-template"==t.code?(this.modelValue="123456",e({title:"已启动测试模式,详情【控制台信息】",icon:"none",duration:3e3}),console.warn(t.message)):(this.getImageCaptcha(),this.captcha="",e({title:t.message,icon:"none",duration:3e3}))}))},getCode(){if(0==this.reverseNumber)return clearTimeout(this.reverseTimer),void(this.reverseTimer=null);this.reverseNumber--,this.reverseTimer=setTimeout((()=>{this.getCode()}),1e3)}}},[["render",function(e,t,f,g,v,C){const b=h(a("uni-captcha"),d),V=h(a("uni-easyinput"),p),_=c,x=m;return i(),s(x,null,{default:n((()=>[o(b,{focus:f.focusCaptchaInput,ref:"captcha",scene:"send-email-code",modelValue:v.captcha,"onUpdate:modelValue":t[0]||(t[0]=e=>v.captcha=e)},null,8,["focus","modelValue"]),o(x,{class:"box"},{default:n((()=>[o(V,{focus:v.focusEmailCodeInput,onBlur:t[1]||(t[1]=e=>v.focusEmailCodeInput=!1),type:"number",class:"input-box",inputBorder:!1,modelValue:v.modelValue,"onUpdate:modelValue":t[2]||(t[2]=e=>v.modelValue=e),maxlength:"6",placeholder:"请输入邮箱验证码"},null,8,["focus","modelValue"]),o(x,{class:"short-code-btn","hover-class":"hover",onClick:e.start},{default:n((()=>[o(_,{class:r(["inner-text",0==v.reverseNumber?"inner-text-active":""])},{default:n((()=>[l(u(C.innerText),1)])),_:1},8,["class"])])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-55918d51"]]);export{g as _};
