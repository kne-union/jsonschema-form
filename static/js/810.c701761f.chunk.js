"use strict";(self.webpackChunk_kne_components_jsonschema_form=self.webpackChunk_kne_components_jsonschema_form||[]).push([[810,429],{78430:(e,n,t)=>{t.d(n,{A:()=>o});const o=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return 0===n.length?function(e){return e}:1===n.length?n[0]:n.reduce((function(e,n){return function(){return e(n.apply(void 0,arguments))}}))}},87810:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p,preset:()=>i});var o=t(65457),r=t(78430),c=t(94922),s=t.n(c);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}const l={getContainer:null,withInstall:e=>n=>s().createElement(e,n)},i=e=>Object.assign(l,e),f=["onCancel","onDestroy","outRef","onMount","onOk"],h=["withInstall","getContainer"],d=e=>n=>{let{onCancel:t,onDestroy:o,outRef:r,onMount:l,onOk:i}=n,h=u(n,f);const[d,p]=(0,c.useState)(!1);(0,c.useImperativeHandle)(r,(()=>({close:()=>p(!1),setVisible:p,visible:d})),[d,p]);const m=function(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const t=(0,c.useRef)(e);return n||(t.current=e),(0,c.useCallback)((function(){return t.current&&t.current(...arguments)}),[])}(l);return(0,c.useEffect)((()=>{m(),p(!0)}),[m]),s().createElement(e,a({},h,{open:d,close:()=>p(!1),onOk:async()=>{if(!i)return void p(!1);!1!==await i()&&p(!1)},onCancel:function(){p(!1),t&&t(...arguments)},afterClose:o}))},p=e=>{const n=(0,c.createRef)(null);return t=>{const c=l.getContainer&&l.getContainer()||document.body,i=document.createElement("div"),f=Object.assign({},t),{withInstall:p,getContainer:m}=f,g=u(f,h);c.appendChild(i);const y=o.createRoot(i),C=new Promise((t=>{const o=(0,r.A)(d,l.withInstall)("function"===typeof p?p(e):e);y.render(s().createElement(o,a({outRef:n},g,{getContainer:m||(()=>i),onDestroy:()=>{i.style.opacity="0",c.removeChild(i),setTimeout((()=>{y.unmount()}),0)},onMount:()=>{t({close:n.current.close})}})))})),v=()=>C.then((e=>{let{close:n}=e;n()}));return{close:v,current:{close:v}}}}},65457:(e,n,t)=>{var o=t(85714);n.createRoot=o.createRoot,n.hydrateRoot=o.hydrateRoot}}]);
//# sourceMappingURL=810.c701761f.chunk.js.map