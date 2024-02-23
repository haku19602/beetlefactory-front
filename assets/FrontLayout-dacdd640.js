import{p as P,m as O,a as W,g as A,u as R,c as o,b as re,d as ue,e as Z,f as ee,h as te,t as H,i as ie,j as ce,k as ae,l as de,n as ve,s as C,o as m,q as ge,V as oe,r as q,v as M,w as me,x as j,y as fe,z as U,A as be,B as he,C as ye,D as xe,E as Ve,F as ke,G as F,H as _e,I as pe,J as L,K as Se,L as Be,M as Te,N as we,O as Ce,P as Ne,Q as Ie,R as Le,S as Pe,T as Ae,U as Re,W as D,_ as Ee,X as $e,Y as De,Z as He,$ as Fe,a0 as Me,a1 as n,a2 as b,a3 as p,a4 as i,a5 as S,a6 as h,a7 as N,a8 as Y,a9 as Ue,aa as B,ab as G,ac as I,ad as Ye}from"./index-2680eac0.js";import{V as ze,a as Xe}from"./VNavigationDrawer-27ef6c03.js";import{u as qe,V as z,a as X,b as Oe}from"./VList-1b07ef35.js";import{V as J}from"./VDivider-040db6bb.js";import{V as We}from"./VContainer-acdc9872.js";const le=P({text:String,...O(),...W()},"VToolbarTitle"),ne=A()({name:"VToolbarTitle",props:le(),setup(e,d){let{slots:a}=d;return R(()=>{const y=!!(a.default||a.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[y&&o("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(l=a.default)==null?void 0:l.call(a)])]}})}),{}}}),je=[null,"prominent","default","comfortable","compact"],se=P({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>je.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...re(),...O(),...ue(),...Z(),...W({tag:"header"}),...ee()},"VToolbar"),K=A()({name:"VToolbar",props:se(),setup(e,d){var r;let{slots:a}=d;const{backgroundColorClasses:y,backgroundColorStyles:l}=te(H(e,"color")),{borderClasses:s}=ie(e),{elevationClasses:x}=ce(e),{roundedClasses:f}=ae(e),{themeClasses:k}=de(e),{rtlClasses:_}=ve(),u=C(!!(e.extended||(r=a.extension)!=null&&r.call(a))),V=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),v=m(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ge({VBtn:{variant:"text"}}),R(()=>{var c;const g=!!(e.title||a.title),t=!!(a.image||e.image),T=(c=a.extension)==null?void 0:c.call(a);return u.value=!!(e.extended||T),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},y.value,s.value,x.value,f.value,k.value,_.value,e.class],style:[l.value,e.style]},{default:()=>[t&&o("div",{key:"image",class:"v-toolbar__image"},[a.image?o(q,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):o(oe,{key:"image-img",cover:!0,src:e.image},null)]),o(q,{defaults:{VTabs:{height:M(V.value)}}},{default:()=>{var w,E,$;return[o("div",{class:"v-toolbar__content",style:{height:M(V.value)}},[a.prepend&&o("div",{class:"v-toolbar__prepend"},[(w=a.prepend)==null?void 0:w.call(a)]),g&&o(ne,{key:"title",text:e.title},{text:a.title}),(E=a.default)==null?void 0:E.call(a),a.append&&o("div",{class:"v-toolbar__append"},[($=a.append)==null?void 0:$.call(a)])])]}}),o(q,{defaults:{VTabs:{height:M(v.value)}}},{default:()=>[o(me,null,{default:()=>[u.value&&o("div",{class:"v-toolbar__extension",style:{height:M(v.value)}},[T])]})]})]})}),{contentHeight:V,extensionHeight:v}}}),Ge=P({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Je(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=d;let y=0;const l=j(null),s=C(0),x=C(0),f=C(0),k=C(!1),_=C(!1),u=m(()=>Number(e.scrollThreshold)),V=m(()=>fe((u.value-s.value)/u.value||0)),v=()=>{const r=l.value;!r||a&&!a.value||(y=s.value,s.value="window"in r?r.pageYOffset:r.scrollTop,_.value=s.value<y,f.value=Math.abs(s.value-u.value))};return U(_,()=>{x.value=x.value||s.value}),U(k,()=>{x.value=0}),be(()=>{U(()=>e.scrollTarget,r=>{var t;const g=r?document.querySelector(r):window;g&&g!==l.value&&((t=l.value)==null||t.removeEventListener("scroll",v),l.value=g,l.value.addEventListener("scroll",v,{passive:!0}))},{immediate:!0})}),he(()=>{var r;(r=l.value)==null||r.removeEventListener("scroll",v)}),a&&U(a,v,{immediate:!0}),{scrollThreshold:u,currentScroll:s,currentThreshold:f,isScrollActive:k,scrollRatio:V,isScrollingUp:_,savedScroll:x}}const Ke=P({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...se(),...ye(),...Ge(),height:{type:[Number,String],default:64}},"VAppBar"),Qe=A()({name:"VAppBar",props:Ke(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:a}=d;const y=j(),l=xe(e,"modelValue"),s=m(()=>{var w;const c=new Set(((w=e.scrollBehavior)==null?void 0:w.split(" "))??[]);return{hide:c.has("hide"),inverted:c.has("inverted"),collapse:c.has("collapse"),elevate:c.has("elevate"),fadeImage:c.has("fade-image")}}),x=m(()=>{const c=s.value;return c.hide||c.inverted||c.collapse||c.elevate||c.fadeImage||!l.value}),{currentScroll:f,scrollThreshold:k,isScrollingUp:_,scrollRatio:u}=Je(e,{canScroll:x}),V=m(()=>e.collapse||s.value.collapse&&(s.value.inverted?u.value>0:u.value===0)),v=m(()=>e.flat||s.value.elevate&&(s.value.inverted?f.value>0:f.value===0)),r=m(()=>s.value.fadeImage?s.value.inverted?1-u.value:u.value:void 0),g=m(()=>{var E,$;if(s.value.hide&&s.value.inverted)return 0;const c=((E=y.value)==null?void 0:E.contentHeight)??0,w=(($=y.value)==null?void 0:$.extensionHeight)??0;return c+w});Ve(m(()=>!!e.scrollBehavior),()=>{_e(()=>{s.value.hide?s.value.inverted?l.value=f.value>k.value:l.value=_.value||f.value<k.value:l.value=!0})});const{ssrBootStyles:t}=qe(),{layoutItemStyles:T}=ke({id:e.name,order:m(()=>parseInt(e.order,10)),position:H(e,"location"),layoutSize:g,elementSize:C(void 0),active:l,absolute:H(e,"absolute")});return R(()=>{const c=K.filterProps(e);return o(K,F({ref:y,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...T.value,"--v-toolbar-image-opacity":r.value,height:void 0,...t.value},e.style]},c,{collapse:V.value,flat:v.value}),a)}),{}}}),Ze=P({...pe({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),et=A()({name:"VAppBarNavIcon",props:Ze(),setup(e,d){let{slots:a}=d;return R(()=>o(L,F(e,{class:["v-app-bar-nav-icon"]}),a)),{}}}),tt=A()({name:"VAppBarTitle",props:le(),setup(e,d){let{slots:a}=d;return R(()=>o(ne,F(e,{class:"v-app-bar-title"}),a)),{}}});const at=P({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Se,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...O(),...Be({location:"top end"}),...Z(),...W(),...ee(),...Te({transition:"scale-rotate-transition"})},"VBadge"),Q=A()({name:"VBadge",inheritAttrs:!1,props:at(),setup(e,d){const{backgroundColorClasses:a,backgroundColorStyles:y}=te(H(e,"color")),{roundedClasses:l}=ae(e),{t:s}=we(),{textColorClasses:x,textColorStyles:f}=Ce(H(e,"textColor")),{themeClasses:k}=Ne(),{locationStyles:_}=Ie(e,!0,u=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(u)?+(e.offsetY??0):["left","right"].includes(u)?+(e.offsetX??0):0));return R(()=>{const u=Number(e.content),V=!e.max||isNaN(u)?e.content:u<=+e.max?u:`${e.max}+`,[v,r]=Le(d.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return o(e.tag,F({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},r,{style:e.style}),{default:()=>{var g,t;return[o("div",{class:"v-badge__wrapper"},[(t=(g=d.slots).default)==null?void 0:t.call(g),o(Pe,{transition:e.transition},{default:()=>{var T,c;return[Ae(o("span",F({class:["v-badge__badge",k.value,a.value,l.value,x.value],style:[y.value,f.value,e.inline?{}:_.value],"aria-atomic":"true","aria-label":s(e.label,u),"aria-live":"polite",role:"status"},v),[e.dot?void 0:d.slots.badge?(c=(T=d.slots).badge)==null?void 0:c.call(T):e.icon?o(D,{icon:e.icon},null):V]),[[Re,e.modelValue]])]}})])]}})}),{}}}),ot="/assets/logo_home-422bc9b0.png";const lt={__name:"FrontLayout",setup(e){const{apiAuth:d}=Ye(),a=$e(),y=De(),l=He(),{mobile:s}=Fe(),x=m(()=>s.value),f=j(!1),k=m(()=>[{to:"/book",text:"飼養攻略",icon:"mdi-book-open-variant",show:!0},{to:"/shop",text:"商店",icon:"mdi-shopping",show:!0}]),_=m(()=>[{to:"/cart",text:"購物車",icon:"mdi-cart",show:l.isLogin},{to:"/my",text:"我的",icon:"mdi-account",show:l.isLogin},{to:"/admin",text:"管理員",icon:"mdi-cog",show:l.isLogin&&l.isAdmin}]),u=m(()=>[{to:"/login",text:"登入",icon:"mdi-login",show:!l.isLogin},{to:"/register",text:"註冊",icon:"mdi-account-plus",show:!l.isLogin}]),V=async()=>{var v,r;try{await d.delete("/users/logout"),l.logout(),a({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"back",location:"bottom"}}),y.push("/")}catch(g){const t=((r=(v=g==null?void 0:g.response)==null?void 0:v.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";a({text:t,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"secondary",location:"bottom"}})}};return(v,r)=>{const g=Me("RouterView");return n(),b(h,null,[x.value?(n(),p(ze,{key:0,modelValue:f.value,"onUpdate:modelValue":r[0]||(r[0]=t=>f.value=t),temporary:"",location:"right",color:"primary",class:"pa-3"},{default:i(()=>[o(Oe,{nav:""},{default:i(()=>[(n(!0),b(h,null,N(k.value,t=>(n(),b(h,{key:t.to},[t.show?(n(),p(z,{key:0,to:t.to,rounded:"xl"},{prepend:i(()=>[o(D,{icon:t.icon},null,8,["icon"])]),default:i(()=>[o(X,null,{default:i(()=>[B(I(t.text),1)]),_:2},1024)]),_:2},1032,["to"])):S("",!0)],64))),128)),o(J,{class:"my-3"}),(n(!0),b(h,null,N(_.value,t=>(n(),b(h,{key:t.to},[t.show?(n(),p(z,{key:0,to:t.to,rounded:"xl"},{prepend:i(()=>[o(D,{icon:t.icon},null,8,["icon"])]),append:i(()=>[t.to==="/cart"?(n(),p(Q,{key:0,color:"secondary",content:Y(l).cart,inline:""},null,8,["content"])):S("",!0)]),default:i(()=>[o(X,null,{default:i(()=>[B(I(t.text),1)]),_:2},1024)]),_:2},1032,["to"])):S("",!0)],64))),128)),(n(!0),b(h,null,N(u.value,t=>(n(),b(h,{key:t.to},[t.show?(n(),p(z,{key:0,to:t.to,rounded:"xl"},{prepend:i(()=>[o(D,{icon:t.icon},null,8,["icon"])]),default:i(()=>[o(X,null,{default:i(()=>[B(I(t.text),1)]),_:2},1024)]),_:2},1032,["to"])):S("",!0)],64))),128)),o(J,{class:"my-3"}),Y(l).isLogin?(n(),p(z,{key:0,rounded:"xl",onClick:V},{default:i(()=>[Ue("template",null,[o(D,{icon:"mdi-logout"})]),o(X,null,{default:i(()=>[B("登出")]),_:1})]),_:1})):S("",!0)]),_:1})]),_:1},8,["modelValue"])):S("",!0),o(Qe,{color:"primary",elevation:"0"},{default:i(()=>[o(We,{class:"d-flex align-center"},{default:i(()=>[o(L,{to:"/",active:!1,color:"back",class:"logo"},{default:i(()=>[o(tt,null,{default:i(()=>[o(oe,{src:ot,alt:"甲蟲工廠 | 首頁",width:"75px"})]),_:1})]),_:1}),x.value?(n(),b(h,{key:0},[o(G),o(et,{color:"back",onClick:r[1]||(r[1]=t=>f.value=!0)})],64)):(n(),b(h,{key:1},[(n(!0),b(h,null,N(k.value,t=>(n(),b(h,{key:t.to},[t.show?(n(),p(L,{key:0,to:t.to,"prepend-icon":t.icon,rounded:"xl"},{default:i(()=>[B(I(t.text),1)]),_:2},1032,["to","prepend-icon"])):S("",!0)],64))),128)),o(G),(n(!0),b(h,null,N(_.value,t=>(n(),b(h,{key:t.to},[t.show?(n(),p(L,{key:0,to:t.to,"prepend-icon":t.icon,rounded:"xl"},{default:i(()=>[B(I(t.text)+" ",1),t.to==="/cart"?(n(),p(Q,{key:0,color:"secondary",content:Y(l).cart,floating:""},null,8,["content"])):S("",!0)]),_:2},1032,["to","prepend-icon"])):S("",!0)],64))),128)),(n(!0),b(h,null,N(u.value,t=>(n(),b(h,{key:t.to},[t.show?(n(),p(L,{key:0,to:t.to,"prepend-icon":t.icon,color:"warning",rounded:"xl",variant:"outlined",class:"sign"},{default:i(()=>[B(I(t.text),1)]),_:2},1032,["to","prepend-icon"])):S("",!0)],64))),128)),Y(l).isLogin?(n(),p(L,{key:0,"prepend-icon":"mdi-logout",color:"warning",rounded:"xl",variant:"outlined",class:"sign",onClick:V},{default:i(()=>[B("登出")]),_:1})):S("",!0)],64))]),_:1})]),_:1}),o(Xe,null,{default:i(()=>[(n(),p(g,{key:v.$route.path}))]),_:1})],64)}}},ct=Ee(lt,[["__scopeId","data-v-061b6bfb"]]);export{ct as default};
