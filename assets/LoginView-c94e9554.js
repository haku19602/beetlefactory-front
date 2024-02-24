import{Y as k,X as _,Z as C,x as S,a1 as B,a3 as F,a4 as s,ad as T,c as a,ag as U,ah as M,aa as c,ai as $,a8 as o,aj as q,ak as m,J as N}from"./index-e0d6e017.js";import{c as P,a as p,u as R,d as f,V as j}from"./index.esm-3d659294.js";import{V as A}from"./VContainer-986f0775.js";import{V as J,a as L}from"./VRow-c076aebb.js";const E={__name:"LoginView",setup(X){const{api:b}=T(),g=k(),d=_(),V=C(),n=S(!1),v=P({account:p().required("使用者帳號必填").min(4,"帳號名稱最少 4 字").max(20,"帳號名稱最多 20 字"),password:p().required("使用者密碼必填").min(4,"密碼最少 4 字").max(20,"密碼最多 20 字")}),{handleSubmit:x,isSubmitting:h}=R({validationSchema:v}),r=f("account"),u=f("password"),w=x(async i=>{var e,t;try{const{data:l}=await b.post("/users/login",{account:i.account,password:i.password});V.login(l.result),d({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"back",location:"bottom"}}),g.push("/")}catch(l){console.log(l);const y=((t=(e=l==null?void 0:l.response)==null?void 0:e.data)==null?void 0:t.message)||"發生錯誤，請稍後再試";d({text:y,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"secondary",location:"bottom"}})}});return(i,e)=>(B(),F(A,{class:"d-flex align-center",style:{height:"90%"}},{default:s(()=>[a(L,null,{default:s(()=>[a(J,{cols:"12",md:"6","offset-md":"3"},{default:s(()=>[a(U,{class:"mx-auto pa-8 pb-8 bg-back",elevation:"8","max-width":"448",rounded:"xl","align-self":"center"},{default:s(()=>[a(M,{class:"pb-5"},{default:s(()=>[c("登入")]),_:1}),a($,null,{default:s(()=>[a(j,{disabled:o(h),onSubmit:q(o(w),["prevent"])},{default:s(()=>[a(m,{class:"pb-3",label:"帳號",placeholder:"User name",hint:"4~20字 英文或數字",density:"compact",variant:"outlined",minlength:"4",maxlength:"20",counter:"","prepend-inner-icon":"mdi-account-outline",modelValue:o(r).value.value,"onUpdate:modelValue":e[0]||(e[0]=t=>o(r).value.value=t),"error-messages":o(r).errorMessage.value},null,8,["modelValue","error-messages"]),a(m,{class:"pb-3",label:"密碼",placeholder:"請輸入密碼",hint:"4~20字",density:"compact",variant:"outlined",minlength:"4",maxlength:"20",counter:"",type:n.value?"text":"password","prepend-inner-icon":"mdi-lock-outline","append-icon":n.value?"mdi-eye-off":"mdi-eye","onClick:append":e[1]||(e[1]=t=>n.value=!n.value),modelValue:o(u).value.value,"onUpdate:modelValue":e[2]||(e[2]=t=>o(u).value.value=t),"error-messages":o(u).errorMessage.value},null,8,["type","append-icon","modelValue","error-messages"]),a(N,{type:"submit",color:"secondary",rounded:"xl"},{default:s(()=>[c("Sign in")]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{E as default};
