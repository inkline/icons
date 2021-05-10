var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,n=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{h as o,defineComponent as l,computed as i,onMounted as s}from"vue";const c=class{static add(e,t){c.icons[e]=t}static addMultiple(e){Object.keys(e).forEach((t=>{c.icons[t]=e[t]}))}};let u=c;u.icons={};const p=e=>e.map((e=>"element"===e.type?o(e.name,e.attributes,p(e.children)):e.value));var v=l({name:"IIcon",props:{name:{type:String,default:""},size:{type:String,default:""}},setup(e){const l=i((()=>e.name.replace(/[-_]([a-z0-9])/g,((e,t)=>t.toUpperCase())))),c=i((()=>u.icons[l.value])),v=i((()=>({"inkline-icon":!0,[`-${e.size}`]:Boolean(e.size)})));return s((()=>{if(l.value&&!u.icons[l.value])throw new Error(`The icon ${l.value} is not registered.`)})),()=>{var e,l;return o("svg",((e,o)=>{for(var l in o||(o={}))t.call(o,l)&&n(e,l,o[l]);if(r)for(var l of r(o))a.call(o,l)&&n(e,l,o[l]);return e})({class:v.value},null==(e=c.value)?void 0:e.attributes),p((null==(l=c.value)?void 0:l.children)||[]))}}});const d={install(e,t={}){e.component(v.name,v),Object.keys(t).forEach((e=>{u.add(e,t[e])}))}};export default d;export{d as InklineIcons};
