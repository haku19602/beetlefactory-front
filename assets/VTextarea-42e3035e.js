import{p,aA as ee,aI as te,g as ae,aJ as ne,D as le,aC as oe,o as y,x as v,s as ue,H as ie,A as re,z as x,B as se,u as ce,aE as de,aF as G,aK as fe,c as l,aL as ve,G as R,a6 as S,T as _,aM as xe,aN as me,aO as ge,aP as he,ao as M,aQ as we,v as Ve,y as ye}from"./index-e0d6e017.js";const Fe=p({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ee(),...te()},"VTextarea"),Pe=ae()({name:"VTextarea",directives:{Intersect:ne},inheritAttrs:!1,props:Fe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,D){let{attrs:F,emit:b,slots:i}=D;const o=le(e,"modelValue"),{isFocused:f,focus:E,blur:U}=oe(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),$=y(()=>{if(F.maxlength)return F.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function j(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const A=v(),m=v(),B=ue(""),g=v(),J=y(()=>e.persistentPlaceholder||f.value||e.active);function C(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||E()}function K(t){C(),b("click:control",t)}function L(t){b("mousedown:control",t)}function Q(t){t.stopPropagation(),C(),M(()=>{o.value="",we(e["onClick:clear"],t)})}function q(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];M(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));ie(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&M(()=>{if(!c.value||!m.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(m.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),I=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),k=parseFloat(e.maxRows)*w+a||1/0,s=ye(u??0,I,k);h.value=Math.floor((s-a)/w),B.value=Ve(s)})}re(d),x(o,d),x(()=>e.rows,d),x(()=>e.maxRows,d),x(()=>e.density,d);let r;return x(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),se(()=>{r==null||r.disconnect()}),ce(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=de(F),{modelValue:w,...I}=G.filterProps(e),k=fe(e);return l(G,R({ref:A,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":P.value},e.class],style:e.style},a,I,{centerAffix:h.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{id:V,isDisabled:H,isDirty:N,isReadonly:W,isValid:X}=s;return l(ve,R({ref:m,style:{"--v-textarea-control-height":B.value},onClick:K,onMousedown:L,"onClick:clear":Q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},k,{id:V.value,active:J.value||N.value,centerAffix:h.value===1&&!P.value,dirty:N.value||e.dirty,disabled:H.value,focused:f.value,error:X.value===!1}),{...i,default:Y=>{let{props:{class:T,...z}}=Y;return l(S,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),_(l("textarea",R({ref:g,class:T,value:o.value,onInput:q,autofocus:e.autofocus,readonly:W.value,disabled:H.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:C,onBlur:U},z,u),null),[[xe("intersect"),{handler:j},null,{once:!0}]]),e.autoGrow&&_(l("textarea",{class:[T,"v-textarea__sizer"],id:`${z.id}-sizer`,"onUpdate:modelValue":Z=>o.value=Z,ref:c,readonly:!0,"aria-hidden":"true"},null),[[me,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(S,null,[(V=i.details)==null?void 0:V.call(i,s),t&&l(S,null,[l("span",null,null),l(ge,{active:e.persistentCounter||f.value,value:O.value,max:$.value},i.counter)])])}:void 0})}),he({},A,m,g)}});export{Pe as V};
