import{az as s,aA as a,aB as r,aC as e,aD as n,ac as o,aE as t}from"./index-CudTLtGD.js";const i=(i,f,u=!1)=>{const c=u?s(i):a(i);if("undefined"==typeof window)return c;const d=window[n];if(!d)return c;const w=o()?e:t;return function(s,a=!1){if(!s)throw new Error((a?"shallowSsrRef":"ssrRef")+": You must provide a key.")}(f,u),r(d[w],f)&&(c.value=d[w][f],w===e&&delete d[w][f]),c},f=(s,a)=>i(s,a),u=(s,a)=>i(s,a,!0);function c(s,a){return"string"==typeof s?a:s}export{f as a,c as r,u as s};
