import{at as s,au as a,av as r,aw as e,ax as n,ad as t,ay as o}from"./index-C6fQHDme.js";const i=(i,f,u=!1)=>{const d=u?s(i):a(i);if("undefined"==typeof window)return d;const w=window[n];if(!w)return d;const c=t()?e:o;return function(s,a=!1){if(!s)throw new Error((a?"shallowSsrRef":"ssrRef")+": You must provide a key.")}(f,u),r(w[c],f)&&(d.value=w[c][f],c===e&&delete w[c][f]),d},f=(s,a)=>i(s,a),u=(s,a)=>i(s,a,!0);function d(s,a){return"string"==typeof s?a:s}export{f as a,d as r,u as s};
