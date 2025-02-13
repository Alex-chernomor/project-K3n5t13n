import"./assets/vendor-BfW2lO3I.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const B="/project-K3n5t13n/assets/heroImg-BzBQmX8p.jpg",g="/project-K3n5t13n/assets/sprite-D3MZqXXq.svg";document.addEventListener("DOMContentLoaded",()=>{const e=[{title:"ABOUT ME",description:["I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.","Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."]},{title:"ROLE",description:["Frontend development","HeadlessCMS, Wordpress","Blender (enjoy)"]},{title:"EDUCATION",description:["2018 - 2019  / Frontend Development Diploma, GoIT IT School, New York","2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York","2020 - 2022 / Advanced Blender Animation Techniques, Udemy"]}],t=document.createElement("img");t.classList.add("img-avatar-about-me"),t.src=B,document.querySelector(".container-about-me").appendChild(t);function r(){const c=document.querySelector(".about-me-list");e.forEach(d=>{const l=document.createElement("li");l.classList.add("my-description-about-me");const p=document.createElement("p");p.classList.add("el-name-about-me"),p.innerText=d.title;const f=document.createElement("button");f.innerHTML=`<svg width='40px' height='40px'><use href='${g}#arrowUp'></use></svg>`;const A=document.createElement("div");A.classList.add("div-description"),A.style.display="none";const w=document.createElement("ul");w.classList.add("ul-description-about-me"),d.description.forEach(y=>{const h=document.createElement("li");h.innerText=y,w.appendChild(h)}),f.addEventListener("click",()=>{l.classList.toggle("active");const y=f.querySelector("svg use"),h=l.classList.contains("active");y.setAttribute("href",h?`${g}#arrowUp`:`${g}#arrowDown`),A.style.display=h?"block":"none"}),A.appendChild(w),p.appendChild(f),l.appendChild(p),l.appendChild(A),c.appendChild(l)})}r();const s=document.querySelector(".skills-slider-about-me"),n=document.createElement("div");n.classList.add("swipe-about-me");const a=["HTML/CSS","JavaScript","React","Node.js","React Native","Soft skills"],u=document.createElement("ul");u.classList.add("skills-list-about-me");const o=c=>`
    <li class='skills-link-about-me'>
        <p class='skill-p-about-me'>${c}</p>
    </li>
    `,i=c=>c.map(d=>o(d)).join("");u.innerHTML=i(a),n.appendChild(u);const m=document.createElement("div");m.classList.add("swipe-button-next-about-me"),m.innerHTML=`<svg width='40px' height='40px'><use href='${g}#arrowRight'></use></svg>`,n.appendChild(m),s.appendChild(n)});const C=[{iconId:"userSVG",title:"Expertise",description:"As a highly experienced developer, I have deep knowledge of programming and website development."},{iconId:"dialogSVG",title:"Communication",description:"Understanding your needs and wants is my priority and I am always open     to discussions and corrections."},{iconId:"penSVG",title:"Art",description:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life."},{iconId:"hourglassSVG",title:"Urgent execution",description:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}],L=document.querySelector(".benefits-list"),S=({iconId:e,title:t,description:r})=>`
    <li class="benefits-elements">
        <div class="benefits-wrapper">
          <svg class="benefits-icon" width="24" height="24">
            <use href="${g}#${e}"></use>
          </svg>
        </div>
        <h3 class="benefits-subtitle">${t}</h3>
        <p class="benefits-desc">
          ${r}
        </p>
      </li>
    `,M=e=>e.map(S).join(""),q=()=>L.insertAdjacentHTML("beforeend",M(C));q();const T="/project-K3n5t13n/assets/coversImg1-Bl0z15Uf.jpg",x="/project-K3n5t13n/assets/coversImg2-DHmTGa53.jpg",R="/project-K3n5t13n/assets/coversImg3-Dg9-9aBp.jpg",Q="/project-K3n5t13n/assets/coversImg4-BhGxIJnM.jpg",H="/project-K3n5t13n/assets/coversImg5-CHdCNz5w.jpg",D="/project-K3n5t13n/assets/coversImg6-BgVpq4JB.jpg",P="/project-K3n5t13n/assets/coversImg7--Yeft_Ha.jpg",N="/project-K3n5t13n/assets/coversImg8-Zm4i-Bmd.jpg",F="/project-K3n5t13n/assets/coversImg9-CqQl1g0-.jpg",O="/project-K3n5t13n/assets/coversImg10-Cpn2LkO2.jpg";document.addEventListener("DOMContentLoaded",()=>{const e=[{src:T,alt:"PowerPulse"},{src:x,alt:"MIMINO"},{src:R,alt:"Ukrainian Art"},{src:Q,alt:"GREEN.HARVEST"},{src:H,alt:"WALLET"},{src:D,alt:"chego jewelry"},{src:P,alt:"energy.flow"},{src:N,alt:"fruitbox"},{src:F,alt:"englishexcellence"},{src:O,alt:"StarlightStudio"}],t=[1,2,3,4].map(o=>document.getElementById(`row${o}`));function r({src:o,alt:i}){const m=document.createElement("li");m.className="covers-item";const c=document.createElement("a");c.className="covers-link",c.href=o;const d=document.createElement("img");return d.className="covers-image",d.src=o,d.srcset=`${o} 1x, ${o.replace(".jpg","@2x.jpg")} 2x`,d.alt=i,d.loading="lazy",c.appendChild(d),m.appendChild(c),m}function s(o,i=100){setTimeout(()=>{o.classList.add("visible")},i)}function n(o,i,m){let c=[];m?i.forEach(d=>{const l=r(d);o.appendChild(l),s(l)}):([...i].sort(()=>.5-Math.random()).forEach(l=>{if(c.includes(l.src))return;const p=r(l);o.appendChild(p),s(p),c.push(l.src)}),c.forEach(l=>{if(c.includes(l))return;const p=o.firstChild.cloneNode(!0);o.appendChild(p),s(p)}))}t.forEach((o,i)=>{n(o,e,i===0)});const a=document.querySelector(".covers-gallery");new IntersectionObserver(o=>{o.forEach(i=>{i.isIntersecting?t.forEach(m=>m.classList.add("active")):t.forEach(m=>m.classList.remove("active"))})}).observe(a)});document.addEventListener("DOMContentLoaded",()=>{const e=[{question:"What programming languages are most often used in your project?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"How can I contact you?",answer:"You can contact me via email, phone, or through social media platforms listed on the website."},{question:"What are the deadlines for the project?",answer:"The terms of project implementation depend on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines usually occurs during the planning phase."},{question:"Do you provide advice or support?",answer:"Yes! I offer consultations and ongoing support throughout the project lifecycle."},{question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, PayPal, as well as payments in cryptocurrencies like Bitcoin and Ethereum."},{question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, PayPal, as well as payments in cryptocurrencies like Bitcoin and Ethereum."}],t=document.querySelector(".faq-grid");if(!t){console.error("FAQ container not found!");return}const r=s=>`
      <li class="faq-item">
        <div class="faq-question">
          ${s.question}
          <span class="faq-toggle">
            <!-- Добавлен SVG стрелки -->
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1.5L6 6.5L1 1.5" stroke="#FAFAFA" stroke-width="2" />
            </svg>
          </span>
        </div>
        <div class="faq-answer hidden">${s.answer}</div>
      </li>
    `;t.innerHTML=e.map(r).join(""),document.querySelectorAll(".faq-item").forEach(s=>{s.addEventListener("click",()=>{s.classList.toggle("active");const n=s.querySelector(".faq-answer");n.classList.toggle("hidden");const a=s.querySelector(".faq-toggle svg");a.style.transform=n.classList.contains("hidden")?"rotate(0deg)":"rotate(180deg)"})})});const I="data:image/jpeg;base64,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",G=document.querySelector(".logo-container"),U=document.querySelector(".ankors-menu"),j=document.querySelector(".menu-cont"),K=document.querySelector("#burger-menu"),W=document.querySelector(".menu-burger-button"),X=document.querySelector(".menu-button"),Z=document.querySelector(".closeMenuSvgIcon"),V=document.querySelector(".burgerSvgIcon"),Y=["About me","Benefits","Projects","FAQ"],b=(e,t)=>{e.prepend(t)},k=(e,t)=>{const r=document.createElement("img");return r.src=e,r.classList.add(t),r},J=(e,t)=>`
    <li class='ankorLink'>
    <a href='#${t}'>${e}</a>
    <li/>
    `,z=e=>e.toLowerCase().split(" ").join("-"),$=e=>e.map(t=>J(t,z(t))).join(""),_=e=>U.insertAdjacentHTML("beforeend",e),v=function(e,t){return e.classList.toggle(t)},E=()=>{v(j,"is-hidden"),v(V,"is-hidden"),v(Z,"is-hidden"),v(K,"menu-div-is-open")};_($(Y));b(G,k(I,"img-logo"));X.addEventListener("click",E);W.addEventListener("click",E);j.addEventListener("click",E);b(document.querySelector(".footer-title-fl"),k(I,"img-logo"));document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("formfield"),t=document.getElementById("modal"),r=document.querySelector(".close-modal");e.addEventListener("submit",function(s){s.preventDefault(),t.classList.remove("is-hidden")}),e.reset(),r.addEventListener("click",function(){t.classList.add("is-hidden")}),window.addEventListener("click",function(s){s.target===t&&t.classList.add("is-hidden")}),document.addEventListener("keydown",function(s){s.key==="Escape"&&t.classList.add("is-hidden")})});const ee=[{url:"https://www.instagram.com/goitclub/",name:"IG"},{url:"https://www.facebook.com/goITclub/",name:"FB"},{url:"https://www.youtube.com/c/GoIT",name:"YT"},{url:"https://github.com/Alex-chernomor/project-K3n5t13n",name:"GH"},{url:"mailto:lloydfefferson@gmail.com",name:"lloydfefferson@gmail.com"}],te=document.querySelector(".list-link"),se=e=>e.map(t=>`
    <li class="link-wrap">
        <a class="link" href="${t.url}" target="_blank">${t.name}</a>
    </li>
`).join("");te.innerHTML=se(ee);const ne="/project-K3n5t13n/assets/projectImg1-DJe22lFz.jpg",oe="/project-K3n5t13n/assets/projectImg2-BdEXOc0P.jpg",re="/project-K3n5t13n/assets/projectImg3-BBaqWZx3.jpg",ie=[{projectName:"Programming Across Borders: Ideas, Technologies, Innovations",img:ne},{projectName:"Programming Across Borders: Ideas, Technologies, Innovations",img:oe},{projectName:"Programming Across Borders: Ideas, Technologies, Innovations",img:re}],ae=document.querySelector(".projects-list"),ce=e=>`
    <div class='project-link-container'>
        <div class='proj-link-container'>
            <ul class='skill-proj-list'>
                <li class = 'skill-proj-link'>#react</li>
                <li class = 'skill-proj-link'>#js</li>
                <li class = 'skill-proj-link'>#node.js</li>
                <li class = 'skill-proj-link'>#git</li>
            </ul>
          <p class='project-name-p'>${e.projectName}</p>
            <button class='send-button-proj'>Send project</button>
        </div>
        <div class='project-image-link-cont'>
            <img class = 'project-image'src="${e.img}" alt="${e.projectName}">
        </div>
    </div>
    `,le=e=>e.map(t=>ce(t)).join(""),de=e=>ae.insertAdjacentHTML("beforeend",e);de(le(ie));const ue=document.querySelector(".right-arrow-prjct"),me=document.querySelector(".left-arrow-prjct");me.setAttribute("href",`${g}#arrowLeft`);ue.setAttribute("href",`${g}#arrowRight`);document.addEventListener("DOMContentLoaded",async()=>{const e=document.getElementById("reviews-list"),t=document.getElementById("error-message"),r=document.querySelector(".swiper-button-prev"),s=document.querySelector(".swiper-button-next"),n=document.querySelector(".button_pointer");if(!e||!t||!r||!s||!n){console.error("Не найдены необходимые элементы");return}try{const u=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!u.ok)throw new Error("Failed to fetch reviews");const o=await u.json();if(!Array.isArray(o)||o.length===0)throw new Error("No reviews found");e.innerHTML=o.map(i=>`
                <li class="swiper-slide">
                    <img src="${i.avatar_url}" alt="${i.author}" class="review-avatar">
                    <h3 class="review-author">${i.author}</h3>
                    <p class="review-text">"${i.review}"</p>
                </li>
            `).join(""),setTimeout(()=>{const i=new Swiper(".swiper",{slidesPerView:1,spaceBetween:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,centeredSlides:!1,loop:!1,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:2,spaceBetween:10}},on:{slideChange:function(){r.disabled=this.isBeginning,s.disabled=this.isEnd,r.classList.toggle("disabled",this.isBeginning),s.classList.toggle("disabled",this.isEnd)}}});r.disabled=i.isBeginning,s.disabled=i.isEnd,r.classList.toggle("disabled",i.isBeginning),s.classList.toggle("disabled",i.isEnd)},100)}catch(u){console.error(u),t.style.display="block",e.style.display="none",n.style.display="none"}const a=document.createElement("style");a.innerHTML=`
        .swiper-button-prev.disabled,
        .swiper-button-next.disabled {
            opacity: 0.5;
            pointer-events: none;
        }
        .swiper-button-prev:not(.disabled):hover,
        .swiper-button-next:not(.disabled):hover {
            opacity: 0.8;
            transform: scale(1.1);
            transition: opacity 0.3s, transform 0.3s;
        }
    `,document.head.appendChild(a)});
//# sourceMappingURL=index.js.map
