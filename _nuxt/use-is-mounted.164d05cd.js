import{r as o,i,ar as f}from"./entry.82fcf186.js";const a=/^(\d|\.)+$/,n=/(\d|\.)+/;function m(r,{c:u=1,offset:t=0,attachPx:s=!0}={}){if(typeof r=="number"){const e=(r+t)*u;return e===0?"0":`${e}px`}else if(typeof r=="string")if(a.test(r)){const e=(Number(r)+t)*u;return s?e===0?"0":`${e}px`:`${e}`}else{const e=n.exec(r);return e?r.replace(n,String((Number(e[0])+t)*u)):r}return r}function p(){const r=o(!1);return i(()=>{r.value=!0}),f(r)}export{m as f,p as i};
