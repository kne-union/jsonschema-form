"use strict";(self.webpackChunk_kne_components_jsonschema_form=self.webpackChunk_kne_components_jsonschema_form||[]).push([[429],{87810:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m,preset:()=>i});var o=n(65457),r=n(78430),c=n(94922),s=n.n(c);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}const u={getContainer:null,withInstall:e=>t=>s().createElement(e,t)},i=e=>Object.assign(u,e),f=["onCancel","onDestroy","outRef","onMount","onOk"],h=["withInstall","getContainer"],d=e=>t=>{let{onCancel:n,onDestroy:o,outRef:r,onMount:u,onOk:i}=t,h=l(t,f);const[d,m]=(0,c.useState)(!1);(0,c.useImperativeHandle)(r,(()=>({close:()=>m(!1),setVisible:m,visible:d})),[d,m]);const p=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,c.useRef)(e);return t||(n.current=e),(0,c.useCallback)((function(){return n.current&&n.current(...arguments)}),[])}(u);return(0,c.useEffect)((()=>{p(),m(!0)}),[p]),s().createElement(e,a({},h,{open:d,close:()=>m(!1),onOk:async()=>{if(!i)return void m(!1);!1!==await i()&&m(!1)},onCancel:function(){m(!1),n&&n(...arguments)},afterClose:o}))},m=e=>{const t=(0,c.createRef)(null);return n=>{const c=u.getContainer&&u.getContainer()||document.body,i=document.createElement("div"),f=Object.assign({},n),{withInstall:m,getContainer:p}=f,C=l(f,h);c.appendChild(i);const y=o.createRoot(i),b=new Promise((n=>{const o=(0,r.A)(d,u.withInstall)("function"===typeof m?m(e):e);y.render(s().createElement(o,a({outRef:t},C,{getContainer:p||(()=>i),onDestroy:()=>{i.style.opacity="0",c.removeChild(i),setTimeout((()=>{y.unmount()}),0)},onMount:()=>{n({close:t.current.close})}})))})),g=()=>b.then((e=>{let{close:t}=e;t()}));return{close:g,current:{close:g}}}}},65457:(e,t,n)=>{var o=n(85714);t.createRoot=o.createRoot,t.hydrateRoot=o.hydrateRoot}}]);
//# sourceMappingURL=429.7554cf0c.chunk.js.map