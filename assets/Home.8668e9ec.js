import{_ as v,e as f,u as A,i as g,j as r,k as t,o as s,c as o,a as l,l as n,t as u,m as x,N as H,F,n as I,r as B,b as m,f as k}from"./app.0bf1572d.js";const L={key:0,class:"home-hero"},b={key:0,class:"figure"},C=["src","alt"],N={key:1,id:"main-title",class:"title"},w={key:2,class:"description"},S=f({setup(i){const a=A(),e=g(),_=r(()=>e.value.heroImage||h.value||c.value||$.value),h=r(()=>e.value.heroText!==null),y=r(()=>e.value.heroText||a.value.title),c=r(()=>e.value.tagline!==null),p=r(()=>e.value.tagline||a.value.description),$=r(()=>e.value.actionLink&&e.value.actionText),T=r(()=>e.value.altActionLink&&e.value.altActionText);return(d,Z)=>t(_)?(s(),o("header",L,[d.$frontmatter.heroImage?(s(),o("figure",b,[l("img",{class:"image",src:d.$withBase(d.$frontmatter.heroImage),alt:d.$frontmatter.heroAlt},null,8,C)])):n("",!0),t(h)?(s(),o("h1",N,u(t(y)),1)):n("",!0),t(c)?(s(),o("p",w,u(t(p)),1)):n("",!0),t($)?(s(),x(H,{key:3,item:{link:t(e).actionLink,text:t(e).actionText},class:"action"},null,8,["item"])):n("",!0),t(T)?(s(),x(H,{key:4,item:{link:t(e).altActionLink,text:t(e).altActionText},class:"action alt"},null,8,["item"])):n("",!0)])):n("",!0)}});var V=v(S,[["__scopeId","data-v-4aeb51c6"]]);const j={key:0,class:"home-features"},D={class:"wrapper"},E={class:"container"},R={class:"features"},q={key:0,class:"title"},z={key:1,class:"details"},G=f({setup(i){const a=g(),e=r(()=>a.value.features&&a.value.features.length>0),_=r(()=>a.value.features?a.value.features:[]);return(h,y)=>t(e)?(s(),o("div",j,[l("div",D,[l("div",E,[l("div",R,[(s(!0),o(F,null,I(t(_),(c,p)=>(s(),o("section",{key:p,class:"feature"},[c.title?(s(),o("h2",q,u(c.title),1)):n("",!0),c.details?(s(),o("p",z,u(c.details),1)):n("",!0)]))),128))])])])])):n("",!0)}});var J=v(G,[["__scopeId","data-v-793c2722"]]);const K={},M={key:0,class:"footer"},O={class:"container"},P={class:"text"};function Q(i,a){return i.$frontmatter.footer?(s(),o("footer",M,[l("div",O,[l("p",P,u(i.$frontmatter.footer),1)])])):n("",!0)}var U=v(K,[["render",Q],["__scopeId","data-v-41020908"]]);const W={class:"home","aria-labelledby":"main-title"},X={class:"home-content"},Y=f({setup(i){return(a,e)=>{const _=B("Content");return s(),o("main",W,[m(V),k(a.$slots,"hero",{},void 0,!0),m(J),l("div",X,[m(_)]),k(a.$slots,"features",{},void 0,!0),m(U),k(a.$slots,"footer",{},void 0,!0)])}}});var te=v(Y,[["__scopeId","data-v-cc1f894c"]]);export{te as default};
