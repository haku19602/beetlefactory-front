import{N as c,P as _,Q as s,R as l,h as t,T as e,W as u,Y as n,X as f}from"./index-61bdf3a1.js";import{V,a as x}from"./VNavigationDrawer-f5954e7b.js";import{b as r,V as i}from"./VList-f0b74b49.js";import{V as p}from"./VDivider-b6542a92.js";import"./ssrBoot-c6cb0a50.js";const N={__name:"AdminLayout",setup(v){const a=c(),d=[{to:"/admin/products",text:"商品管理",icon:"mdi-shopping"},{to:"/admin/orders",text:"訂單管理",icon:"mdi-list-box"},{to:"/admin/members",text:"會員管理",icon:"mdi-account-group"}];return(b,h)=>{const m=_("RouterView");return s(),l(u,null,[t(V,{permanent:"",class:"pa-3",color:"primary"},{default:e(()=>[t(r,null,{default:e(()=>[t(i,{"prepend-avatar":n(a).avatar,title:n(a).account,subtitle:n(a).email},null,8,["prepend-avatar","title","subtitle"])]),_:1}),t(p),t(r,{nav:""},{default:e(()=>[t(i,{rounded:"xl",to:"/","prepend-icon":"mdi-home",title:"回前台首頁"})]),_:1}),t(p),t(r,{nav:""},{default:e(()=>[(s(),l(u,null,f(d,o=>t(i,{rounded:"xl",key:o.to,to:o.to,"prepend-icon":o.icon,title:o.text},null,8,["to","prepend-icon","title"])),64))]),_:1})]),_:1}),t(x,null,{default:e(()=>[t(m)]),_:1})],64)}}};export{N as default};
