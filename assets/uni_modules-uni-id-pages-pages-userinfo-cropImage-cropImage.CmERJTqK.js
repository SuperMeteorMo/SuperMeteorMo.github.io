import{x as t,W as i,aj as e,Q as s,C as a,a3 as l,E as h,o,c,w as n,a as p,m as g,f as r,r as d,F as m,ab as u,A as f,H as w,b as y,G as v,ag as D,R as x,i as H,p as T,V as W,z as S,N as k}from"./index-BeTsOSG5.js";import{_ as C}from"./_plugin-vue_export-helper.BCo6x5W8.js";function M(t,i){return Math.sqrt(Math.pow(t,2)+Math.pow(i,2))}function b(t,i){const e=i.touches[0].clientX,s=i.touches[0].clientY;let{clipWidth:a,clipHeight:l,clipY:h,clipX:o,clipStart:c,isLockRatio:n,maxWidth:p,minWidth:g,maxHeight:r,minHeight:d}=t;p/=2,g/=2,d/=2,r/=2;let m=a,u=l,f=h,w=o,y=()=>(m=m<=p?m>=g?m:g:p,u=u<=r?u>=d?u:d:r,!(m>p||m<g||u>r||u<d)||!n);switch(u=c.height+(c.corner>1&&c.corner<4?1:-1)*(c.y-s),c.corner){case 1:if(m=c.width-c.x+e,n&&(u=m/(a/l)),!y())return;break;case 2:if(m=c.width-c.x+e,n&&(u=m/(a/l)),!y())return;f=c.clipY-(u-c.height);break;case 3:if(m=c.width+c.x-e,n&&(u=m/(a/l)),!y())return;f=c.clipY-(u-c.height),w=c.clipX-(m-c.width);break;case 4:if(m=c.width+c.x-e,n&&(u=m/(a/l)),!y())return;w=c.clipX-(m-c.width)}return{width:m,height:u,clipX:w,clipY:f}}const L={};const F=C({components:{limeClipper:C({name:"l-clipper",props:{value:{type:Boolean,default:!0},customStyle:{type:String},canvasId:{type:String,default:"l-clipper"},zIndex:{type:Number,default:99},imageUrl:{type:String},fileType:{type:String,default:"png"},quality:{type:Number,default:1},width:{type:Number,default:400},height:{type:Number,default:400},minWidth:{type:Number,default:200},maxWidth:{type:Number,default:600},minHeight:{type:Number,default:200},maxHeight:{type:Number,default:600},isLockWidth:{type:Boolean,default:!1},isLockHeight:{type:Boolean,default:!1},isLockRatio:{type:Boolean,default:!0},scaleRatio:{type:Number,default:1},minRatio:{type:Number,default:.5},maxRatio:{type:Number,default:2},isDisableScale:{type:Boolean,default:!1},isDisableRotate:{type:Boolean,default:!1},isLimitMove:{type:Boolean,default:!1},isShowPhotoBtn:{type:Boolean,default:!0},isShowRotateBtn:{type:Boolean,default:!0},isShowConfirmBtn:{type:Boolean,default:!0},isShowCancelBtn:{type:Boolean,default:!0},rotateAngle:{type:Number,default:90},source:{type:Object,default:()=>({album:"从相册中选择",camera:"拍照"})}},data(){return{canvasWidth:0,canvasHeight:0,clipX:0,clipY:0,clipWidth:0,clipHeight:0,animation:!1,imageWidth:0,imageHeight:0,imageTop:0,imageLeft:0,scale:1,angle:0,image:this.imageUrl,sysinfo:{},throttleTimer:null,throttleFlag:!0,timeClipCenter:null,flagClipTouch:!1,flagEndTouch:!1,clipStart:{},animationTimer:null,touchRelative:[{x:0,y:0}],hypotenuseLength:0,ctx:null}},computed:{clipStyle(){const{clipWidth:t,clipHeight:i,clipY:e,clipX:s,animation:a}=this;return`\n\t\t\twidth: ${t}px;\n\t\t\theight:${i}px;\n\t\t\ttransition-property: ${a?"":"background"};\n\t\t\tleft: ${s}px;\n\t\t\ttop: ${e}px\n\t\t\t`},imageStyle(){const{imageWidth:t,imageHeight:i,imageLeft:e,imageTop:s,animation:a,scale:l,angle:h}=this;return`\n\t\t\t\twidth: ${t?t+"px":"auto"};\n\t\t\t\theight: ${i?i+"px":"auto"};\n\t\t\t\ttransform: translate3d(${e-t/2}px, ${s-i/2}px, 0) scale(${l}) rotate(${h}deg);\n\t\t\t\ttransition-duration: ${a?.35:0}s\n\t\t\t`},clipSize(){const{clipWidth:t,clipHeight:i}=this;return{clipWidth:t,clipHeight:i}},clipPoint(){const{clipY:t,clipX:i}=this;return{clipY:t,clipX:i}}},watch:{value(t){if(t){if(this.imageUrl){const{imageWidth:t,imageHeight:i,imageLeft:e,imageTop:s,scale:a,clipX:l,clipY:h,clipWidth:o,clipHeight:c,path:n}=(null==L?void 0:L[this.imageUrl])||{};n!=this.image?this.image=this.imageUrl:this.setDiffData({imageWidth:t,imageHeight:i,imageLeft:e,imageTop:s,scale:a,clipX:l,clipY:h,clipWidth:o,clipHeight:c})}}else this.animation=0,this.angle=0},imageUrl(t){this.image=t},image:{handler:async function(t){this.getImageInfo(t)}},clipSize({widthVal:t,heightVal:i}){let{minWidth:e,minHeight:s}=this;e/=2,s/=2,t<e&&this.setDiffData({clipWidth:e}),i<s&&this.setDiffData({clipHeight:s}),this.calcClipSize()},angle(t){this.animation=!0,this.moveStop();const{isLimitMove:i}=this;i&&t%90&&this.setDiffData({angle:90*Math.round(t/90)}),this.imgMarginDetectionScale()},animation(t){if(clearTimeout(this.animationTimer),t){let t=setTimeout((()=>{this.setDiffData({animation:!1})}),260);this.setDiffData({animationTimer:t}),this.animationTimer=t}},isLimitMove(t){t&&(this.angle%90&&this.setDiffData({angle:90*Math.round(this.angle/90)}),this.imgMarginDetectionScale())},clipPoint(){this.cutDetectionPosition()},width(t,i){t!==i&&this.setDiffData({clipWidth:t/2})},height(t,i){t!==i&&this.setDiffData({clipHeight:t/2})}},mounted(){const i=t();this.sysinfo=i,this.setClipInfo(),this.image&&this.getImageInfo(this.image),this.setClipCenter(),this.calcClipSize(),this.cutDetectionPosition()},methods:{setDiffData(t){Object.keys(t).forEach((i=>{this[i]!==t[i]&&(this[i]=t[i])}))},getImageInfo(t){t&&(this.value&&i({title:"请稍候...",mask:!0}),e({src:t,success:i=>{this.imgComputeSize(i.width,i.height),this.image=i.path,this.isLimitMove&&(this.imgMarginDetectionScale(),this.$emit("ready",i));const{imageWidth:e,imageHeight:s,imageLeft:a,imageTop:l,scale:h,clipX:o,clipY:c,clipWidth:n,clipHeight:p}=this;L[t]=Object.assign(i,{imageWidth:e,imageHeight:s,imageLeft:a,imageTop:l,scale:h,clipX:o,clipY:c,clipWidth:n,clipHeight:p})},fail:t=>{this.imgComputeSize(),this.isLimitMove&&this.imgMarginDetectionScale()}}))},setClipInfo(){const{width:t,height:i,sysinfo:e,canvasId:a}=this,l=t/2,h=i/2,o=(e.windowHeight-h)/2,c=(e.windowWidth-l)/2,n=e.windowWidth/2,p=e.windowHeight/2;this.ctx=s(a,this),this.clipWidth=l,this.clipHeight=h,this.clipX=c,this.clipY=o,this.canvasHeight=h,this.canvasWidth=l,this.imageLeft=n,this.imageTop=p},setClipCenter(){const{sysInfo:i,clipHeight:e,clipWidth:s,imageTop:a,imageLeft:l}=this;let h=i||t(),o=.5*(h.windowHeight-e),c=.5*(h.windowWidth-s);this.imageTop=a-this.clipY+o,this.imageLeft=l-this.clipX+c,this.clipY=o,this.clipX=c},calcClipSize(){const{clipHeight:t,clipWidth:i,sysinfo:e,clipX:s,clipY:a}=this;i>e.windowWidth?this.setDiffData({clipWidth:e.windowWidth}):i+s>e.windowWidth&&this.setDiffData({clipX:e.windowWidth-s}),t>e.windowHeight?this.setDiffData({clipHeight:e.windowHeight}):t+a>e.windowHeight&&(this.clipY=e.windowHeight-a,this.setDiffData({clipY:e.windowHeight-a}))},cutDetectionPosition(){const{clipX:t,clipY:i,sysinfo:e,clipHeight:s,clipWidth:a}=this;let l=()=>{i<0&&this.setDiffData({clipY:0}),i>e.windowHeight-s&&this.setDiffData({clipY:e.windowHeight-s})},h=()=>{t<0&&this.setDiffData({clipX:0}),t>e.windowWidth-a&&this.setDiffData({clipX:e.windowWidth-a})};if(null===i&&null===t){let t=.5*(e.windowHeight-s),i=.5*(e.windowWidth-a);this.setDiffData({clipX:i,clipY:t})}else null!==i&&null!==t?(l(),h()):null!==i&&null===t?(l(),this.setDiffData({clipX:(e.windowWidth-a)/2})):null===i&&null!==t&&(h(),this.setDiffData({clipY:(e.windowHeight-s)/2}))},imgComputeSize(i,e){const{imageWidth:s,imageHeight:a}=function(i,e,s){let a=i,l=e,{clipWidth:h,clipHeight:o,sysinfo:c,width:n,height:p}=s;a&&l?a/l>(h||n)/(h||p)?(l=o||p,a=i/e*l):(a=h||n,l=e/i*a):(a=(c||t()).windowWidth,l=0);return{imageWidth:a,imageHeight:l}}(i,e,this);this.imageWidth=s,this.imageHeight=a},imgMarginDetectionScale(t){if(!this.isLimitMove)return;const i=function(t,i){i=i||t.scale;let{imageWidth:e,imageHeight:s,clipWidth:a,clipHeight:l,angle:h}=t;return h/90%2&&(e=s,s=e),e*i<a&&(i=a/e),s*i<l&&(i=Math.max(i,l/s)),i}(this,t);this.imgMarginDetectionPosition(i)},imgMarginDetectionPosition(t){if(!this.isLimitMove)return;const{scale:i,left:e,top:s}=function(t,i){let e=t.imageLeft,s=t.imageTop;i=i||t.scale;let a=t.imageWidth,l=t.imageHeight;t.angle/90%2&&(a=t.imageHeight,l=t.imageWidth);const{clipX:h,clipWidth:o,clipY:c,clipHeight:n}=t,p=t=>t*i/2,g=p(a),r=p(l);return e=h+g>=e?e:h+g,e=h+o-g<=e?e:h+o-g,s=c+r>=s?s:c+r,s=c+n-r<=s?s:c+n-r,{left:e,top:s,scale:i}}(this,t);this.setDiffData({imageLeft:e,imageTop:s,scale:i})},throttle(){this.setDiffData({throttleFlag:!0})},moveDuring(){clearTimeout(this.timeClipCenter)},moveStop(){clearTimeout(this.timeClipCenter);const t=setTimeout((()=>{this.animation||this.setDiffData({animation:!0}),this.setClipCenter()}),800);this.setDiffData({timeClipCenter:t})},clipTouchStart(t){if(t.preventDefault(),!this.image)return void a({title:"请选择图片",icon:"none",duration:3e3});const i=t.touches[0].clientX,e=t.touches[0].clientY,{clipX:s,clipY:l,clipWidth:h,clipHeight:o}=this,c=function(t,i,e,s,a,l){let h;const o=[t+e/2,i+s/2],c=[a,l];return c[0]<=o[0]&&c[1]<=o[1]?h=3:c[0]>=o[0]&&c[1]<=o[1]?h=2:c[0]<=o[0]&&c[1]>=o[1]?h=4:c[0]>=o[0]&&c[1]>=o[1]&&(h=1),h}(s,l,h,o,i,e);this.moveDuring(),c&&(this.clipStart={width:h,height:o,x:i,y:e,clipY:l,clipX:s,corner:c},this.flagClipTouch=!0,this.flagEndTouch=!0)},clipTouchMove(t){if(t.stopPropagation(),t.preventDefault(),!this.image)return void a({title:"请选择图片",icon:"none",duration:3e3});if(1!==t.touches.length)return;const{flagClipTouch:i,throttleFlag:e}=this;if(i&&e){const{isLockRatio:i,isLockHeight:e,isLockWidth:s}=this;if(i&&(s||e))return;this.setDiffData({throttleFlag:!1}),this.throttle();const a=b(this,t);if(a){const{width:t,height:i,clipX:l,clipY:h}=a;s||e?s?e||this.setDiffData({clipHeight:i,clipY:h}):this.setDiffData({clipWidth:t,clipX:l}):this.setDiffData({clipWidth:t,clipHeight:i,clipX:l,clipY:h}),this.imgMarginDetectionScale()}}},clipTouchEnd(){this.moveStop(),this.flagClipTouch=!1},imageTouchStart(t){event.preventDefault(),this.flagEndTouch=!1;const{imageLeft:i,imageTop:e}=this,s=t.touches[0].clientX,a=t.touches[0].clientY;let l=[];if(1===t.touches.length)l[0]={x:s-i,y:a-e},this.touchRelative=l;else{const h=t.touches[1].clientX,o=t.touches[1].clientY;const c=M(Math.abs(s-h),Math.abs(a-o));l=[{x:s-i,y:a-e},{x:h-i,y:o-e}],this.touchRelative=l,this.hypotenuseLength=c}},imageTouchMove(t){event.preventDefault();const{flagEndTouch:i,throttleFlag:e}=this;if(i||!e)return;const s=t.touches[0].clientX,a=t.touches[0].clientY;if(this.setDiffData({throttleFlag:!1}),this.throttle(),this.moveDuring(),1===t.touches.length){const{left:t,top:i}=function(t,i,e){return{left:i-t.touchRelative[0].x,top:e-t.touchRelative[0].y}}(this,s,a);this.setDiffData({imageLeft:t,imageTop:i}),this.imgMarginDetectionPosition()}else{const i=t.touches[1].clientX,e=t.touches[1].clientY;let l=Math.abs(s-i),h=Math.abs(a-e),o=M(l,h),c=this.scale*(o/this.hypotenuseLength);this.isDisableScale?c=1:(c=c<=this.minRatio?this.minRatio:c,c=c>=this.maxRatio?this.maxRatio:c,this.$emit("change",{width:this.imageWidth*c,height:this.imageHeight*c})),this.imgMarginDetectionScale(c),this.hypotenuseLength=Math.sqrt(Math.pow(l,2)+Math.pow(h,2)),this.scale=c}},imageTouchEnd(){this.setDiffData({flagEndTouch:!0}),this.moveStop()},uploadImage(){const t=Object.entries(this.source),i=["original","compressed"],e=({tempFilePaths:t,tempFiles:i})=>{this.image=t?t[0]:i[0].path},s=t=>{"message"!==t&&D({count:1,sizeType:i,sourceType:[t],success:e})};t.length>1?l({itemList:t.map((t=>t[1])),success:({tapIndex:i})=>{s(t[i][0])}}):s(t[0][0])},imageReset(){const i=this.sysinfo||t();this.scale=1,this.angle=0,this.imageTop=i.windowHeight/2,this.imageLeft=i.windowWidth/2},imageLoad(t){this.imageReset(),h(),this.$emit("ready",t.detail)},rotate(t){if(this.isDisableRotate)return;if(!this.image)return void a({title:"请选择图片",icon:"none",duration:3e3});const{rotateAngle:i}=this,e=this.angle,s=t.currentTarget.dataset.type;this.angle="along"===s?e+i:e-i,this.$emit("rotate",this.angle)},confirm(){if(!this.image)return void a({title:"请选择图片",icon:"none",duration:3e3});i({title:"加载中"});const{canvasHeight:t,canvasWidth:e,clipHeight:s,clipWidth:l,ctx:o,scale:c,imageLeft:n,imageTop:p,clipX:g,clipY:r,angle:d,scaleRatio:m,image:u,quality:f,fileType:w,type:y,canvasId:v}=this,D=()=>{const t=this.imageWidth*c*m,i=this.imageHeight*c*m,e=n-g,a=p-r;o.translate(e*m,a*m),o.rotate(d*Math.PI/180),o.drawImage(u,-t/2,-i/2,t,i),o.draw(!1,(()=>{const t=l*m,i=s*m;let e={x:0,y:0,width:t,height:i,destWidth:t,destHeight:i,canvasId:v,fileType:w,quality:f,success:t=>{a.url=t.tempFilePath,h(),this.$emit("success",a),this.$emit("input",!1)},fail:t=>{console.error("error",t),this.$emit("fail",t),this.$emit("input",!1)}},a={url:"",width:t,height:i};x(e,this)}))};e!==l||t!==s?(this.canvasWidth=l,this.canvasHeight=s,o.draw(),this.$nextTick((()=>{setTimeout((()=>{D()}),100)}))):D()},cancel(){this.$emit("cancel",!1),this.$emit("input",!1)}}},[["render",function(t,i,e,s,a,l){const h=H,D=T,x=W;return o(),c(h,{class:v(["l-clipper",{open:e.value}]),"disable-scroll":"",style:g("z-index: "+e.zIndex+";"+e.customStyle)},{default:n((()=>[p(h,{class:"l-clipper-mask",onTouchstart:u(l.clipTouchStart,["stop","prevent"]),onTouchmove:u(l.clipTouchMove,["stop","prevent"]),onTouchend:u(l.clipTouchEnd,["stop","prevent"])},{default:n((()=>[p(h,{class:"l-clipper__content",style:g(l.clipStyle)},{default:n((()=>[(o(),r(m,null,d([0,0,0,0],((t,i)=>p(h,{class:"l-clipper__edge",key:i}))),64))])),_:1},8,["style"])])),_:1},8,["onTouchstart","onTouchmove","onTouchend"]),a.image?(o(),c(D,{key:0,class:"l-clipper-image",onError:l.imageLoad,onLoad:l.imageLoad,onTouchstart:u(l.imageTouchStart,["stop","prevent"]),onTouchmove:u(l.imageTouchMove,["stop","prevent"]),onTouchend:u(l.imageTouchEnd,["stop","prevent"]),src:a.image,mode:"auto"==a.imageWidth?"widthFix":"",style:g(l.imageStyle)},null,8,["onError","onLoad","onTouchstart","onTouchmove","onTouchend","src","mode","style"])):f("",!0),p(x,{"canvas-id":e.canvasId,id:"l-clipper","disable-scroll":"",style:g("width: "+a.canvasWidth*e.scaleRatio+"px; height:"+a.canvasHeight*e.scaleRatio+"px;"),class:"l-clipper-canvas"},null,8,["canvas-id","style"]),p(h,{class:"l-clipper-tools"},{default:n((()=>[p(h,{class:"l-clipper-tools__btns"},{default:n((()=>[e.isShowCancelBtn?(o(),c(h,{key:0,onClick:l.cancel},{default:n((()=>[t.$slots.cancel?w(t.$slots,"cancel",{key:0},void 0,!0):(o(),c(h,{key:1,class:"cancel"},{default:n((()=>[y("取消")])),_:1}))])),_:3},8,["onClick"])):f("",!0),e.isShowPhotoBtn?(o(),c(h,{key:1,onClick:l.uploadImage},{default:n((()=>[t.$slots.photo?w(t.$slots,"photo",{key:0},void 0,!0):(o(),c(D,{key:1,src:"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2024.3.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='图层_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2030%2030'%20style='enable-background:new%200%200%2030%2030;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23606060;}%20.st1{fill:none;stroke:%23FFFFFF;stroke-width:2.4306;stroke-miterlimit:10;}%20.st2{fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpath%20class='st2'%20d='M11.6,11c0.4,0.4,0.6,0.9,0.6,1.5c0,0.6-0.2,1.1-0.6,1.4c-0.4,0.4-0.9,0.6-1.5,0.6c-0.6,0-1.1-0.2-1.5-0.6%20c-0.4-0.4-0.6-0.9-0.6-1.4s0.2-1.1,0.6-1.5c0.4-0.4,0.9-0.6,1.5-0.6C10.8,10.4,11.2,10.6,11.6,11z%20M24.6,18.4V6.7H5.4v12l1.8-1.8%20c0.3-0.3,0.6-0.4,1-0.4c0.4,0,0.7,0.1,1,0.4l1.8,1.8l5.8-7c0.3-0.3,0.6-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5%20C18.8,11.6,24.6,18.4,24.6,18.4z%20M25.6,5.7C25.9,6,26,6.3,26,6.7v16.1c0,0.4-0.1,0.7-0.4,1c-0.3,0.3-0.6,0.4-1,0.4H5.4%20c-0.4,0-0.7-0.1-1-0.4c-0.3-0.3-0.4-0.6-0.4-1V6.7c0-0.4,0.1-0.7,0.4-1c0.3-0.3,0.6-0.4,1-0.4h19.3C25,5.3,25.3,5.4,25.6,5.7z'/%3e%3cpath%20class='st1'%20d='M24.3,21.5H5.7c-0.2,0-0.3-0.2-0.3-0.3V7c0-0.2,0.2-0.3,0.3-0.3h18.6c0.2,0,0.3,0.2,0.3,0.3v14.2%20C24.6,21.3,24.5,21.5,24.3,21.5z'/%3e%3c/g%3e%3c/svg%3e"}))])),_:3},8,["onClick"])):f("",!0),e.isShowRotateBtn?(o(),c(h,{key:2,onClick:l.rotate},{default:n((()=>[t.$slots.rotate?w(t.$slots,"rotate",{key:0},void 0,!0):(o(),c(D,{key:1,src:"data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2024.3.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='图层_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='30px'%20height='30px'%20viewBox='0%200%2030%2030'%20style='enable-background:new%200%200%2030%2030;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:none;stroke:%23FFFFFF;stroke-width:2.4306;stroke-miterlimit:10;}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M17.1,24.2h-12c-0.2,0-0.3-0.2-0.3-0.3v-9.3c0-0.2,0.2-0.3,0.3-0.3h12c0.2,0,0.3,0.2,0.3,0.3v9.3%20C17.5,24.1,17.3,24.2,17.1,24.2z'/%3e%3cpath%20class='st0'%20d='M16.6,5.4c4.8,0,8.7,3.9,8.7,8.7'/%3e%3cpolyline%20class='st0'%20points='19.3,10.1%2014.9,5.6%2019.3,1.2%20'/%3e%3c/g%3e%3c/svg%3e","data-type":"inverse"}))])),_:3},8,["onClick"])):f("",!0),e.isShowConfirmBtn?(o(),c(h,{key:3,onClick:l.confirm},{default:n((()=>[t.$slots.confirm?w(t.$slots,"confirm",{key:0},void 0,!0):(o(),c(h,{key:1,class:"confirm"},{default:n((()=>[y("确定")])),_:1}))])),_:3},8,["onClick"])):f("",!0)])),_:3}),w(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["class","style"])}],["__scopeId","data-v-592a86cd"]])},data:()=>({path:"",options:{width:600,height:600}}),onLoad({path:t,options:i}){this.path=t,i&&(this.options=JSON.parse(i))},methods:{successFn(t){this.getOpenerEventChannel().emit("success",t.url),S()},cancel(){S()}}},[["render",function(t,i,e,s,a,l){const h=k("limeClipper"),g=H;return o(),c(g,{class:"content"},{default:n((()=>[p(h,{width:a.options.width,"scale-ratio":2,"is-lock-width":!1,"is-lock-height":!1,height:a.options.height,"image-url":a.path,onSuccess:l.successFn,onCancel:l.cancel},null,8,["width","height","image-url","onSuccess","onCancel"])])),_:1})}],["__scopeId","data-v-c2c356f4"]]);export{F as default};
