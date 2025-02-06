(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.querySelector(".ankors-menu"),u=document.querySelector(".menu-button"),l=["About me","Benefits","Projects","FAQ"],d=r=>`
    <li>
    <a>${r}<a/>
    <li/>
    `,a=r=>r.map(o=>d(o)).join(""),f=r=>c.insertAdjacentHTML("beforeend",r),m=function(r,o){return r.classList.toggle(o)};f(a(l));u.addEventListener("click",r=>{m(c,"is-hidden")});
//# sourceMappingURL=index.js.map
