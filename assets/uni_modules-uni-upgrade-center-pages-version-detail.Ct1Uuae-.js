import{_ as e,e as a,N as t,O as l,q as i,H as s,s as o,r as n,a as d,c as r,w as u,i as m,o as c,h as f,k as p,t as h,j as b,l as _,F as y,m as g,P as k,p as x,Q as D,R as v,v as V,T as S,U as C,V as w,Z as P,W as U,X as F,Y as j}from"./index-ChNMzRY4.js";import{_ as T}from"./uni-easyinput.Bwbd5nzK.js";import{_ as W}from"./uni-forms-item.BcVhrZ6O.js";import{_ as q}from"./uni-data-checkbox.DFguk4Fx.js";import{_ as z,a as L,b as E}from"./uni-card.BqRH2QHJ.js";import{_ as G}from"./uni-dateformat.DTlBwPlF.js";import{_ as I}from"./uni-forms.DMBatpC-.js";import{a as A,f as O}from"./version_add_detail_mixin.KfgVt5tM.js";import{f as M,a as $}from"./utils.Cmulk4oG.js";import"./uni-load-more.5Ttyhepy.js";const N=a.database();N.command;const B=$;const H=e({mixins:[A],data:()=>({showStableInfo:!1,isStable:!0,originalData:{},detailsState:!0,uniFilePickerProvider:"unicloud",domain:""}),async onLoad(e){let{domain:a,provider:t}=this.getCloudStorageConfig();a&&(this.domain=a),t&&(this.uniFilePickerProvider=t);const l=e.id;this.formDataId=l,await this.getDetail(l),this.isStable=this.formData.stable_publish,this.latestStableData=await this.getLatestVersion(),this.isWGT&&this.rules.min_uni_version.rules.push({required:!0})},onUnload(){this.setCloudStorage({provider:null})},watch:{domain(e){this.setCloudStorage({domain:e}),this.formData.url&&(e||(e="请输入自定义域名"),this.formData.url=this.formData.url.replace(/^(https?:\/\/)[^\/]+/,`$1${e}`))},uniFilePickerProvider(e){this.setCloudStorage({provider:e})}},methods:{submit(){t({mask:!0}),this.$refs.form.validate(["store_list"]).then((e=>{e.store_list&&e.store_list.forEach((e=>{e.priority=parseFloat(e.priority)})),this.submitForm(e)})).catch((e=>{l()}))},async submitForm(e){const a=N.collection(B);a.doc(this.formDataId).update(e).then((async t=>{!this.isStable&&!0===e.stable_publish&&this.latestStableData&&await a.doc(this.latestStableData._id).update({stable_publish:!1}),i({title:"修改成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>s()),500)})).catch((e=>{o({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{l()}))},getDetail(e){return t({mask:!0}),N.collection(B).doc(e).field(O).get().then((e=>{const a=e.result.data[0];a&&(a.store_list||(a.store_list=[]),this.formData=a,this.originalData=M(this.formData))})).catch((e=>{o({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{l()}))},deletePackage(){o({title:"提示",content:"是否删除该版本",success:e=>{e.confirm&&(t({mask:!0}),N.collection(B).doc(this.formDataId).remove().then((()=>{i({title:"删除成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>s()),500)})).catch((e=>{o({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{l()})))}})},async getLatestVersion(){const e={appid:this.formData.appid,type:this.formData.type,stable_publish:!0};this.isWGT||(e.platform=this.formData.platform[0]);return(await N.collection(B).where(e).get()).result.data.find((e=>e.platform.toString()===this.formData.platform.toString()))},cancelEdit(){let e="";!this.isiOS&&this.hasPackage&&(e+="\n将会删除已上传的包"),o({title:"取消修改",content:e,success:e=>{e.confirm&&(this.formData=M(this.originalData),this.detailsState=!0,this.hasPackage&&this.deleteFile([this.appFileList.url]))}})}}},[["render",function(e,a,t,l,i,s){const o=m,A=x,O=n(d("uni-easyinput"),T),M=n(d("uni-forms-item"),W),$=D,N=n(d("uni-data-checkbox"),q),B=n(d("show-info"),z),H=v,Q=V,R=S,X=C,Y=n(d("uni-file-picker"),L),Z=F,J=j,K=n(d("uni-card"),E),ee=w,ae=n(d("uni-dateformat"),G),te=P,le=n(d("uni-forms"),I);return c(),r(o,{class:"uni-container"},{default:u((()=>[f(o,{class:"uni-header"},{default:u((()=>[f(o,{class:"uni-group"},{default:u((()=>[f(o,{class:"uni-title"},{default:u((()=>[p("包类型")])),_:1}),f(o,{class:"uni-sub-title",style:{display:"flex","justify-content":"center","align-items":"center"}},{default:u((()=>[p(h(e.type_valuetotext[e.formData.type]),1)])),_:1})])),_:1}),i.isStable?b("",!0):(c(),r(o,{key:0,class:"uni-group"},{default:u((()=>[f(A,{class:"uni-button",type:"warn",size:"mini",onClick:s.deletePackage},{default:u((()=>[p("删除")])),_:1},8,["onClick"])])),_:1}))])),_:1}),f(le,{ref:"form",value:e.formData,validateTrigger:"bind",labelWidth:e.labelWidth},{default:u((()=>[f(M,{name:"appid",label:"AppID",required:""},{default:u((()=>[f(O,{disabled:!0,modelValue:e.formData.appid,"onUpdate:modelValue":a[0]||(a[0]=a=>e.formData.appid=a),trim:"both"},null,8,["modelValue"])])),_:1}),f(M,{name:"name",label:"应用名称"},{default:u((()=>[f(O,{disabled:!0,modelValue:e.formData.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.formData.name=a),trim:"both"},null,8,["modelValue"])])),_:1}),f(M,{name:"title",label:"更新标题"},{default:u((()=>[f(O,{disabled:i.detailsState,placeholder:"更新标题",modelValue:e.formData.title,"onUpdate:modelValue":a[2]||(a[2]=a=>e.formData.title=a)},null,8,["disabled","modelValue"])])),_:1}),f(M,{name:"contents",label:"更新内容",required:""},{default:u((()=>[f($,{"auto-height":"",style:{"box-sizing":"content-box"},disabled:i.detailsState,onInput:a[3]||(a[3]=a=>e.binddata("contents",a.detail.value)),class:"uni-textarea-border",placeholder:"更新内容 (可换行)",value:e.formData.contents,"onUpdate:value":a[4]||(a[4]=a=>e.formData.contents=a)},null,8,["disabled","value"])])),_:1}),f(M,{name:"platform",label:"平台",required:""},{default:u((()=>[f(N,{disabled:!0,multiple:e.isWGT,modelValue:e.formData.platform,"onUpdate:modelValue":a[5]||(a[5]=a=>e.formData.platform=a),localdata:e.platformLocaldata},null,8,["multiple","modelValue","localdata"])])),_:1}),f(M,{name:"version",label:"版本号",required:""},{default:u((()=>[f(O,{disabled:!0,modelValue:e.formData.version,"onUpdate:modelValue":a[6]||(a[6]=a=>e.formData.version=a),placeholder:"当前包版本号，必须大于当前已上线版本号"},null,8,["modelValue"])])),_:1}),e.isWGT?(c(),r(M,{key:"min_uni_version",name:"min_uni_version",label:"原生App最低版本",required:e.isWGT},{default:u((()=>[f(O,{disabled:i.detailsState,placeholder:"原生App最低版本",modelValue:e.formData.min_uni_version,"onUpdate:modelValue":a[7]||(a[7]=a=>e.formData.min_uni_version=a)},null,8,["disabled","modelValue"]),f(B,{content:e.minUniVersionContent},null,8,["content"])])),_:1},8,["required"])):b("",!0),e.enableUploadPackage&&!i.detailsState?(c(),_(y,{key:1},[f(M,{label:"存储选择"},{default:u((()=>[f(o,{class:"flex"},{default:u((()=>[f(X,{onChange:a[8]||(a[8]=e=>i.uniFilePickerProvider=e.detail.value),style:{width:"100%"}},{default:u((()=>[f(o,{class:"flex",style:{"flex-wrap":"nowrap"}},{default:u((()=>[p(" 上传至： "),f(R,null,{default:u((()=>[f(H,{value:"unicloud",checked:"unicloud"===i.uniFilePickerProvider},null,8,["checked"]),f(Q,null,{default:u((()=>[p("内置存储")])),_:1})])),_:1}),f(R,{style:{"margin-left":"20rpx"}},{default:u((()=>[f(H,{value:"extStorage",checked:"extStorage"===i.uniFilePickerProvider},null,8,["checked"]),f(Q,null,{default:u((()=>[p("扩展存储")])),_:1})])),_:1})])),_:1})])),_:1}),f(Q,{class:"uni-sub-title",style:{"margin-top":"10px","font-size":"12px",color:"#666",width:"100%"}},{default:u((()=>[p("内置存储是服务空间开通后自带的云存储，不支持自定义域名，不支持阶梯计费")])),_:1}),f(Q,{class:"uni-sub-title",style:{"margin-top":"10px","font-size":"12px",color:"#666"}},{default:u((()=>[p("扩展存储支持自定义域名、阶梯计费，越用越便宜、功能更强大")])),_:1}),f(Q,{class:"uni-sub-title",style:{"margin-top":"10px","font-size":"12px",color:"#2979ff",cursor:"pointer","text-decoration":"underline","margin-left":"10px"},onClick:a[9]||(a[9]=a=>e.toUrl("https://doc.dcloud.net.cn/uniCloud/ext-storage/service.html"))},{default:u((()=>[p("扩展存储开通文档")])),_:1})])),_:1})])),_:1}),"extStorage"===i.uniFilePickerProvider?(c(),r(M,{key:0,label:"自定义域名"},{default:u((()=>[f(o,{class:"flex",style:{"flex-direction":"column","align-items":"flex-start"}},{default:u((()=>[f(O,{placeholder:"请输入扩展存储自定义域名",modelValue:i.domain,"onUpdate:modelValue":a[10]||(a[10]=e=>i.domain=e),maxlength:-1,style:{width:"550px"}},null,8,["modelValue"]),f(Q,{class:"uni-sub-title",style:{"margin-top":"10px","font-size":"12px",color:"#666"}},{default:u((()=>[p("输入扩展存储绑定的域名，在服务空间-云存储-扩展存储页面可查看，如：cdn.example.com")])),_:1})])),_:1})])),_:1})):b("",!0),f(M,{label:"上传"+e.fileExtname[0]+"包"},{default:u((()=>[f(Y,{modelValue:e.appFileList,"onUpdate:modelValue":a[11]||(a[11]=a=>e.appFileList=a),"file-extname":e.fileExtname,disabled:e.hasPackage,returnType:"object","file-mediatype":"all",limit:"1",onSuccess:e.packageUploadSuccess,provider:i.uniFilePickerProvider,onDelete:e.packageDelete},{default:u((()=>[f(o,{class:"flex"},{default:u((()=>[f(A,{type:"primary",size:"mini",onClick:e.selectFile,style:{margin:"0px"}},{default:u((()=>[p("选择文件")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["modelValue","file-extname","disabled","onSuccess","provider","onDelete"]),e.hasPackage?(c(),r(Q,{key:0,style:{"padding-left":"20px",color:"#a8a8a8"}},{default:u((()=>[p(h(Number(e.appFileList.size/1024/1024).toFixed(2))+"M",1)])),_:1})):b("",!0)])),_:1},8,["label"])],64)):b("",!0),f(M,{key:"url",name:"url",label:e.urlLabel,required:""},{default:u((()=>[f(o,{class:"flex",style:{"flex-direction":"column","align-items":"flex-start",flex:"1"}},{default:u((()=>[f(o,{class:"flex",style:{width:"100%"}},{default:u((()=>[f(O,{disabled:i.detailsState,placeholder:"下载链接",modelValue:e.formData.url,"onUpdate:modelValue":a[12]||(a[12]=a=>e.formData.url=a),maxlength:-1},null,8,["disabled","modelValue"]),e.formData.url?(c(),r(Q,{key:0,style:{"margin-left":"10px",color:"#2979ff",cursor:"pointer","text-decoration":"underline"},onClick:a[13]||(a[13]=a=>e.toUrl(e.formData.url))},{default:u((()=>[p("测试下载")])),_:1})):b("",!0)])),_:1}),e.formData.url&&!i.detailsState?(c(),r(Q,{key:0,style:{"margin-top":"10px","font-size":"12px",color:"#666"}},{default:u((()=>[p("建议点击【测试下载】能正常下载后，再进行发布")])),_:1})):b("",!0)])),_:1})])),_:1},8,["label"]),e.isAndroid&&!e.isWGT&&e.formData.store_list.length?(c(),r(M,{label:"Android应用市场",key:"store_list",name:"store_list",labelWidth:"120"},{default:u((()=>[f(o,{style:{flex:"1"}},{default:u((()=>[(c(!0),_(y,null,g(e.formData.store_list,((a,t)=>(c(),r(o,{key:a.id},{default:u((()=>[f(K,{style:{margin:"0px 0px 20px 0px"}},{default:u((()=>[f(o,{style:{display:"flex"}},{default:u((()=>[f(J,{style:{"user-select":"none"},onChange:({detail:{value:e}})=>{a.enable=!!e.length}},{default:u((()=>[f(R,{class:"title_padding"},{default:u((()=>[f(Z,{disabled:i.detailsState,value:"scheme",checked:a.enable},null,8,["disabled","checked"]),f(Q,null,{default:u((()=>[p("是否启用")])),_:1})])),_:2},1024)])),_:2},1032,["onChange"])])),_:2},1024),f(M,{label:"商店名称"},{default:u((()=>[f(O,{disabled:"",modelValue:a.name,"onUpdate:modelValue":e=>a.name=e,trim:"both"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),f(M,{label:"Scheme"},{default:u((()=>[f(O,{disabled:"",modelValue:a.scheme,"onUpdate:modelValue":e=>a.scheme=e,trim:"both"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),f(M,{label:"优先级"},{default:u((()=>[f(O,{disabled:i.detailsState,modelValue:a.priority,"onUpdate:modelValue":e=>a.priority=e,type:"number"},null,8,["disabled","modelValue","onUpdate:modelValue"]),f(B,{top:-100,left:-180,content:e.priorityContent},null,8,["content"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})):b("",!0),e.isWGT?(c(),r(M,{key:"is_silently",name:"is_silently",label:"静默更新"},{default:u((()=>[f(ee,{disabled:i.detailsState,onChange:a[14]||(a[14]=a=>(e.binddata("is_silently",a.detail.value),e.formData.is_silently=a.detail.value)),checked:e.formData.is_silently},null,8,["disabled","checked"]),f(B,{top:-80,content:e.silentlyContent},null,8,["content"])])),_:1})):b("",!0),f(M,{key:"is_mandatory",name:"is_mandatory",label:"强制更新"},{default:u((()=>[f(ee,{disabled:i.detailsState,onChange:a[15]||(a[15]=a=>(e.binddata("is_mandatory",a.detail.value),e.formData.is_mandatory=a.detail.value)),checked:e.formData.is_mandatory},null,8,["disabled","checked"]),f(B,{width:"230",top:-30,content:e.mandatoryContent},null,8,["content"])])),_:1}),f(M,{name:"stable_publish",label:"上线发行"},{default:u((()=>[f(ee,{disabled:i.detailsState||i.isStable,onChange:a[16]||(a[16]=a=>(e.binddata("stable_publish",a.detail.value),e.formData.stable_publish=a.detail.value)),checked:e.formData.stable_publish},null,8,["disabled","checked"]),i.isStable?(c(),r(B,{key:0,top:-50,width:"350",content:e.stablePublishContent},null,8,["content"])):(c(),r(B,{key:1,top:-40,content:e.stablePublishContent2},null,8,["content"]))])),_:1}),f(M,{name:"create_date",label:"上传时间"},{default:u((()=>[f(ae,{format:"yyyy-MM-dd hh:mm:ss",date:e.formData.create_date,threshold:[0,0]},null,8,["date"])])),_:1}),k(f(M,{name:"type",label:"安装包类型"},{default:u((()=>[f(N,{modelValue:e.formData.type,"onUpdate:modelValue":a[17]||(a[17]=a=>e.formData.type=a),localdata:e.formOptions.type_localdata},null,8,["modelValue","localdata"])])),_:1},512),[[U,!1]]),f(o,{class:"uni-button-group"},{default:u((()=>[i.detailsState?(c(),r(A,{key:0,type:"primary",class:"uni-button",style:{width:"100px"},onClick:a[18]||(a[18]=e=>i.detailsState=!1)},{default:u((()=>[p("修改")])),_:1})):b("",!0),i.detailsState?b("",!0):(c(),r(A,{key:1,type:"primary",class:"uni-button",style:{width:"100px"},onClick:s.submit},{default:u((()=>[p("提交")])),_:1},8,["onClick"])),i.detailsState?b("",!0):(c(),r(A,{key:2,type:"warn",class:"uni-button",style:{width:"100px"},onClick:s.cancelEdit},{default:u((()=>[p("取消")])),_:1},8,["onClick"])),f(te,{"open-type":"navigateBack",style:{"margin-left":"15px"}},{default:u((()=>[f(A,{class:"uni-button",style:{width:"100px"}},{default:u((()=>[p("返回")])),_:1})])),_:1})])),_:1})])),_:1},8,["value","labelWidth"])])),_:1})}],["__scopeId","data-v-c956ba61"]]);export{H as default};
