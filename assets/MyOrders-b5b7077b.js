import{_ as S,K as M,r as n,P as R,Q as x,R as C,h as t,T as a,aN as z,a6 as w,W as O,X as U,$ as r,a2 as d,aK as L,V as _,Z as q,J as K,a8 as W,aI as $,a1 as j,a3 as E}from"./index-61bdf3a1.js";import{V as F}from"./VContainer-a4748d4a.js";import{a as J,V as B}from"./VRow-9215a6d5.js";import{b as Q,V as X}from"./VList-f0b74b49.js";import{V as Z,a as G}from"./VDataTable-23569a90.js";import{V as A}from"./VChip-30fdb8fe.js";import"./ssrBoot-c6cb0a50.js";import"./VDivider-b6542a92.js";import"./VSelect-f5e4d4e8.js";const H={style:{height:"100%"},class:"bg-back"},Y={class:"text-center pt-2"},ee={__name:"MyOrders",setup(ae){const{apiAuth:g}=E(),p=M(),I=[{to:"/mysetting",text:"會員設定",icon:"mdi-cog"},{to:"/mylikes",text:"我的收藏",icon:"mdi-heart"},{to:"/myorders",text:"我的訂單",icon:"mdi-list-box"}],m=n(""),i=n(!1),D=l=>{m.value=l._id,i.value=!0},v=()=>{i.value=!1},P=async()=>{var l,o;try{await g.patch("/orders/"+m.value,{done:!0}),v(),f(),p({text:"訂單已完成",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"success",location:"bottom"}})}catch(s){const e=((o=(l=s==null?void 0:s.response)==null?void 0:l.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";p({text:e,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"secondary",location:"bottom"}})}},h=n([]),T=n([{key:"createdAt",order:"desc"}]),c=n(1),N=[{title:"訂單編號",sortable:!1,key:"_id"},{title:"訂購日期",sortable:!1,key:"createdAt"},{title:"訂單金額",sortable:!1,key:"price",align:"center",value:l=>{const o=l.cart.reduce((s,e)=>s+e.quantity*e.product.price,0);return l.delivery==="黑貓"?o+110:l.delivery==="7-11 交貨便"?o+70:o}},{title:"付款狀態",sortable:!1,key:"paid",align:"center"},{title:"出貨狀態",sortable:!1,key:"shipped",align:"center"},{title:"完成訂單",sortable:!1,key:"done",align:"center"}],b=n(!0),y=n(0),V=n(1),f=async()=>{var l,o;try{const{data:s}=await g.get("/orders");y.value=s.result.length,h.value=s.result.slice((c.value-1)*5,c.value*5),V.value=Math.ceil(y.value/5)}catch(s){const e=((o=(l=s==null?void 0:s.response)==null?void 0:l.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";p({text:e,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"secondary",location:"bottom"}})}b.value=!1};return f(),(l,o)=>{const s=R("RouterLink");return x(),C("div",H,[t(F,null,{default:a(()=>[t(J,{class:"justify-center pt-10"},{default:a(()=>[t(B,{cols:"5",sm:"4",md:"3",lg:"2"},{default:a(()=>[t(w,{class:"mx-auto",width:"200",flat:"0"},{default:a(()=>[t(Q,{density:"compact",class:"bg-back"},{default:a(()=>[(x(),C(O,null,U(I,(e,u)=>t(X,{key:u,to:e.to,"prepend-icon":e.icon,title:e.text,color:"primary",rounded:"xl"},null,8,["to","prepend-icon","title"])),64))]),_:1})]),_:1})]),_:1}),t(B,{cols:"12",sm:"8",md:"9",lg:"10"},{default:a(()=>[t(Z,{items:h.value,headers:N,"items-per-page":5,"sort-by":T.value,page:c.value,"onUpdate:page":[o[1]||(o[1]=e=>c.value=e),f],"items-length":y.value,loading:b.value,class:"bg-back"},{"item._id":a(({item:e})=>[t(s,{to:"/orders/"+e._id,class:"text-primary"},{default:a(()=>[r(d(e._id),1)]),_:2},1032,["to"])]),"item.createdAt":a(({item:e})=>[r(d(new Date(e.createdAt).toLocaleString("zh-TW",{hour12:!1,year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})),1)]),"item.price":a(({item:e})=>[r(" NT. "+d(e.cart.reduce((u,k)=>u+k.quantity*k.product.price,0)+(e.delivery==="黑貓"?110:e.delivery==="7-11 交貨便"?70:0)),1)]),"item.paid":a(({item:e})=>[t(A,{"append-icon":e.paid?"mdi-check":"mdi-close",variant:"text",class:L(e.paid?["text-primary"]:["text-secondary"])},{default:a(()=>[r(d(e.paid?"已付款":"未付款"),1)]),_:2},1032,["append-icon","class"])]),"item.shipped":a(({item:e})=>[t(A,{"append-icon":e.shipped?"mdi-check":"mdi-close",variant:"text",class:L(e.shipped?["text-primary"]:["text-secondary"])},{default:a(()=>[r(d(e.shipped?"已出貨":"未出貨"),1)]),_:2},1032,["append-icon","class"])]),"item.done":a(({item:e})=>[t(_,{color:e.done?"primary":"secondary",class:"text-back",variant:"flat",rounded:"",elevation:e.done?"0":"5",disabled:e.done||!e.paid||!e.shipped,"append-icon":e.done?"mdi-check":"",onClick:u=>D(e)},{default:a(()=>[r(d(e.done?"已完成":"完成訂單"),1)]),_:2},1032,["color","elevation","disabled","append-icon","onClick"])]),bottom:a(()=>[q("div",Y,[t(G,{modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=e=>c.value=e),length:V.value,rounded:"circle"},null,8,["modelValue","length"])])]),_:2},1032,["items","sort-by","page","items-length","loading"])]),_:1})]),_:1})]),_:1}),t(z,{modelValue:i.value,"onUpdate:modelValue":o[2]||(o[2]=e=>i.value=e),width:"350px"},{default:a(()=>[t(w,{rounded:"xl"},{default:a(()=>[t(K,{icon:"mdi-alert-circle",color:"secondary",size:"50",class:"ma-auto mt-5"}),t(W,null,{default:a(()=>[r("確定完成訂單「"+d(m.value)+"」嗎？此動作無法復原！",1)]),_:1}),t($,null,{default:a(()=>[t(j),t(_,{color:"secondary",rounded:"",onClick:v},{default:a(()=>[r("取消")]),_:1}),t(_,{color:"primary",rounded:"",onClick:P},{default:a(()=>[r("完成訂單")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}},ue=S(ee,[["__scopeId","data-v-28e3aa6f"]]);export{ue as default};
