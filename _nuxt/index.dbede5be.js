import{r as f,ar as i,I as o,z as l,l as h,F as c,C as p,h as d,K as y,L as w,as as g}from"./entry.82fcf186.js";function T(n){const t=f(!!n.value);if(t.value)return i(t);const r=o(n,e=>{e&&(t.value=!0,r())});return i(t)}function m(n,t){return o(n,r=>{r!==void 0&&(t.value=r)}),l(()=>n.value===void 0?t.value:n.value)}function a(n,t,r="default"){const e=t[r];if(e===void 0)throw new Error(`[vueuc/${n}]: slot[${r}] is empty.`);return e()}function s(n,t=!0,r=[]){return n.forEach(e=>{if(e!==null){if(typeof e!="object"){(typeof e=="string"||typeof e=="number")&&r.push(h(String(e)));return}if(Array.isArray(e)){s(e,t,r);return}if(e.type===c){if(e.children===null)return;Array.isArray(e.children)&&s(e.children,t,r)}else e.type!==p&&r.push(e)}}),r}function $(n,t,r="default"){const e=t[r];if(e===void 0)throw new Error(`[vueuc/${n}]: slot[${r}] is empty.`);const u=s(e());if(u.length===1)return u[0];throw new Error(`[vueuc/${n}]: slot[${r}] should have exactly one child.`)}const z=d({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(n){return{showTeleport:T(y(n,"show")),mergedTo:l(()=>{const{to:t}=n;return t??"body"})}},render(){return this.showTeleport?this.disabled?a("lazy-teleport",this.$slots):w(g,{disabled:this.disabled,to:this.mergedTo},a("lazy-teleport",this.$slots)):null}});export{z as L,$ as a,a as g,m as u};
