import"./assets/vendor-BfW2lO3I.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const S="/project-K3n5t13n/assets/heroImg-BzBQmX8p.jpg",p="/project-K3n5t13n/assets/sprite-D3MZqXXq.svg";document.addEventListener("DOMContentLoaded",()=>{const e=[{title:"ABOUT ME",description:["I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.","Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."]},{title:"ROLE",description:["Frontend development","HeadlessCMS, Wordpress","Blender (enjoy)"]},{title:"EDUCATION",description:["2018 - 2019  / Frontend Development Diploma, GoIT IT School, New York","2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York","2020 - 2022 / Advanced Blender Animation Techniques, Udemy"]}],t=document.createElement("img");t.classList.add("img-avatar-about-me"),t.src=S,document.querySelector(".container-about-me").appendChild(t);function n(){const l=document.querySelector(".about-me-list");e.forEach((u,d)=>{const g=document.createElement("li");g.classList.add("my-description-about-me");const v=document.createElement("p");v.classList.add("el-name-about-me"),v.innerText=u.title;const f=document.createElement("button");f.innerHTML=`<svg width='40px' height='40px'><use href='${p}#arrowDown'></use></svg>`;const A=document.createElement("div");A.classList.add("div-description"),A.style.display="none";const y=document.createElement("ul");y.classList.add("ul-description-about-me"),u.description.forEach(E=>{const h=document.createElement("li");h.innerText=E,y.appendChild(h)}),f.addEventListener("click",()=>{g.classList.toggle("active");const E=f.querySelector("svg use"),h=g.classList.contains("active");E.setAttribute("href",h?`${p}#arrowUp`:`${p}#arrowDown`),A.style.display=h?"block":"none"}),A.appendChild(y),v.appendChild(f),g.appendChild(v),g.appendChild(A),l.appendChild(g),d===0&&(g.classList.add("active"),f.querySelector("svg use").setAttribute("href",`${p}#arrowUp`),A.style.display="block")})}n();const r=document.querySelector(".skills-slider-about-me"),s=document.createElement("div");s.classList.add("swipe-about-me");const i=["HTML/CSS","JavaScript","React","Node.js","React Native","Soft skills"],o=document.createElement("ul");o.classList.add("skills-list-about-me");const c=l=>`
    <li class='skills-link-about-me'>
        <p class='skill-p-about-me'>${l}</p>
    </li>
    `,a=l=>l.map(u=>c(u)).join("");o.innerHTML=a(i),s.appendChild(o);const m=document.createElement("div");m.classList.add("swipe-button-next-about-me"),m.innerHTML=`<svg width='40px' height='40px'><use href='${p}#arrowRight'></use></svg>`,s.appendChild(m),r.appendChild(s)});const M=[{iconId:"userSVG",title:"Expertise",description:"As a highly experienced developer, I have deep knowledge of programming and website development."},{iconId:"dialogSVG",title:"Communication",description:"Understanding your needs and wants is my priority and I am always open     to discussions and corrections."},{iconId:"penSVG",title:"Art",description:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life."},{iconId:"hourglassSVG",title:"Urgent execution",description:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}],q=document.querySelector(".benefits-list"),T=({iconId:e,title:t,description:n})=>`
    <li class="benefits-elements">
        <div class="benefits-wrapper">
          <svg class="benefits-icon" width="24" height="24">
            <use href="${p}#${e}"></use>
          </svg>
        </div>
        <h3 class="benefits-subtitle">${t}</h3>
        <p class="benefits-desc">
          ${n}
        </p>
      </li>
    `,x=e=>e.map(T).join(""),R=()=>q.insertAdjacentHTML("beforeend",x(M));R();const H="/project-K3n5t13n/assets/coversImg1-Bl0z15Uf.jpg",Q="/project-K3n5t13n/assets/coversImg2-DHmTGa53.jpg",D="/project-K3n5t13n/assets/coversImg3-Dg9-9aBp.jpg",P="/project-K3n5t13n/assets/coversImg4-BhGxIJnM.jpg",F="/project-K3n5t13n/assets/coversImg5-CHdCNz5w.jpg",N="/project-K3n5t13n/assets/coversImg6-BgVpq4JB.jpg",O="/project-K3n5t13n/assets/coversImg7--Yeft_Ha.jpg",G="/project-K3n5t13n/assets/coversImg8-Zm4i-Bmd.jpg",U="/project-K3n5t13n/assets/coversImg9-CqQl1g0-.jpg",K="/project-K3n5t13n/assets/coversImg10-Cpn2LkO2.jpg";document.addEventListener("DOMContentLoaded",()=>{const e=[{src:H,alt:"PowerPulse"},{src:Q,alt:"MIMINO"},{src:D,alt:"Ukrainian Art"},{src:P,alt:"GREEN.HARVEST"},{src:F,alt:"WALLET"},{src:N,alt:"chego jewelry"},{src:O,alt:"energy.flow"},{src:G,alt:"fruitbox"},{src:U,alt:"englishexcellence"},{src:K,alt:"StarlightStudio"}],t=[1,2,3,4].map(o=>document.getElementById(`row${o}`));function n({src:o,alt:c}){return`
      <li class="covers-item">
        <picture>
          <source srcset="${o.replace(".jpg","@2x.jpg")} 2x">
          <img class="covers-image" src="${o}" alt="${c}" loading="lazy">
        </picture>
      </li>
    `}function r(o,c,a){let m=[],l="";a?c.forEach(u=>{l+=n(u)}):([...c].sort(()=>.5-Math.random()).forEach(d=>{m.includes(d.src)||(l+=n(d),m.push(d.src))}),m.forEach(d=>{m.includes(d)||(l+=n({src:d,alt:""}))})),o.innerHTML=l,o.querySelectorAll(".covers-item").forEach((u,d)=>{setTimeout(()=>{u.classList.add("visible")},d*100)})}t.forEach((o,c)=>{r(o,e,c===0)});const s=document.querySelector(".covers-gallery");new IntersectionObserver(o=>{o.forEach(c=>{c.isIntersecting?t.forEach(a=>a.classList.add("active")):t.forEach(a=>a.classList.remove("active"))})}).observe(s)});document.addEventListener("DOMContentLoaded",()=>{const e=[{question:"What programming languages are most often used in your project?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"How can I contact you?",answer:"You can contact me via email, phone, or through social media platforms listed on the website."},{question:"What are the deadlines for the project?",answer:"The terms of project implementation depend on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines usually occurs during the planning phase."},{question:"Do you provide advice or support?",answer:"Yes! I offer consultations and ongoing support throughout the project lifecycle."},{question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, PayPal, as well as payments in cryptocurrencies like Bitcoin and Ethereum."},{question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, PayPal, as well as payments in cryptocurrencies like Bitcoin and Ethereum."}],t=document.querySelector(".faq-grid");if(!t){console.error("FAQ container not found!");return}const n=r=>`
      <li class="faq-item">
        <div class="faq-question">
          ${r.question}
          <span class="faq-toggle">
            <!-- Добавлен SVG стрелки -->
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1.5L6 6.5L1 1.5" stroke="#FAFAFA" stroke-width="2" />
            </svg>
          </span>
        </div>
        <div class="faq-answer hidden">${r.answer}</div>
      </li>
    `;t.innerHTML=e.map(n).join(""),document.querySelectorAll(".faq-item").forEach(r=>{r.addEventListener("click",()=>{r.classList.toggle("active");const s=r.querySelector(".faq-answer");s.classList.toggle("hidden");const i=r.querySelector(".faq-toggle svg");i.style.transform=s.classList.contains("hidden")?"rotate(0deg)":"rotate(180deg)"})})});const j="data:image/jpeg;base64,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",W=document.querySelector(".logo-container"),X=document.querySelector(".ankors-menu"),I=document.querySelector(".menu-cont"),k=document.querySelector("#burger-menu"),B=document.querySelector(".menu-burger-button"),Z=document.querySelector(".menu-button"),Y=document.querySelector(".closeMenuSvgIcon"),V=document.querySelector(".burgerSvgIcon"),J=["About me","Benefits","Projects","FAQ"],L=(e,t)=>{e.prepend(t)},C=(e,t)=>{const n=document.createElement("img");return n.src=e,n.classList.add(t),n},z=(e,t)=>`
    <li class='ankorLink'>
    <a href='#${t}'>${e}</a>
    <li/>
    `,$=e=>e.toLowerCase().split(" ").join("-"),_=e=>e.map(t=>z(t,$(t))).join(""),ee=e=>X.insertAdjacentHTML("beforeend",e),w=function(e,t){return e.classList.toggle(t)},b=()=>{w(I,"is-hidden"),w(V,"is-hidden"),w(Y,"is-hidden")};function te(){const e=document.body;k.classList.contains("menu-div-is-open")?e.classList.add("no-scroll"):e.classList.remove("no-scroll")}const se=()=>{w(k,"menu-div-is-open"),te()};ee(_(J));L(W,C(j,"img-logo"));Z.addEventListener("click",b);B.addEventListener("click",b);B.addEventListener("click",se);I.addEventListener("click",b);L(document.querySelector(".footer-title-fl"),C(j,"img-logo"));document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("formfield"),t=document.getElementById("modal"),n=document.querySelector(".close-modal");function r(){document.body.classList.toggle("no-scroll")}e.addEventListener("submit",function(s){s.preventDefault(),t.classList.remove("is-hidden"),r(),e.reset()}),n.addEventListener("click",function(){r(),t.classList.add("is-hidden")}),window.addEventListener("click",function(s){s.target===t&&t.classList.add("is-hidden")}),document.addEventListener("keydown",function(s){s.key==="Escape"&&t.classList.add("is-hidden")})});const oe=[{url:"https://www.instagram.com/goitclub/",name:"IG"},{url:"https://www.facebook.com/goITclub/",name:"FB"},{url:"https://www.youtube.com/c/GoIT",name:"YT"},{url:"https://github.com/Alex-chernomor/project-K3n5t13n",name:"GH"},{url:"mailto:lloydfefferson@gmail.com",name:"lloydfefferson@gmail.com"}],ne=document.querySelector(".list-link"),re=e=>e.map(t=>`
    <li class="link-wrap">
        <a class="link" href="${t.url}" target="_blank">${t.name}</a>
    </li>
`).join("");ne.innerHTML=re(oe);const ie="/project-K3n5t13n/assets/projectImg1-DJe22lFz.jpg",ae="/project-K3n5t13n/assets/projectImg2-BdEXOc0P.jpg",ce="/project-K3n5t13n/assets/projectImg3-BBaqWZx3.jpg",le=[{projectName:"Programming Across Borders: Ideas, Technologies, Innovations",img:ie},{projectName:"Programming Across Borders: Ideas, Technologies, Innovations",img:ae},{projectName:"Programming Across Borders: Ideas, Technologies, Innovations",img:ce}],de=document.querySelector(".projects-list"),ue=e=>`
    <li class='project-link-container'>
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
    </li>
    `,me=e=>e.map(t=>ue(t)).join(""),pe=e=>de.insertAdjacentHTML("beforeend",e);pe(me(le));const ge=document.querySelector(".right-arrow-prjct"),Ae=document.querySelector(".left-arrow-prjct");Ae.setAttribute("href",`${p}#arrowLeft`);ge.setAttribute("href",`${p}#arrowRight`);document.addEventListener("DOMContentLoaded",async()=>{const e=document.getElementById("reviews-list"),t=document.getElementById("error-message"),n=document.querySelector(".swiper-button-prev"),r=document.querySelector(".swiper-button-next"),s=document.querySelector(".button_pointer");if(!e||!t||!n||!r||!s){console.error("Не найдены необходимые элементы");return}try{const o=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!o.ok)throw new Error("Failed to fetch reviews");const c=await o.json();if(!Array.isArray(c)||c.length===0)throw new Error("No reviews found");e.innerHTML=c.map(a=>`
                <li class="swiper-slide">
                    <img src="${a.avatar_url}" alt="${a.author}" class="review-avatar">
                    <h3 class="review-author">${a.author}</h3>
                    <p class="review-text">"${a.review}"</p>
                </li>
            `).join(""),setTimeout(()=>{const a=new Swiper(".swiper",{slidesPerView:1,spaceBetween:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,centeredSlides:!1,loop:!1,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:2,spaceBetween:10}},on:{slideChange:function(){n.disabled=this.isBeginning,r.disabled=this.isEnd,n.classList.toggle("disabled",this.isBeginning),r.classList.toggle("disabled",this.isEnd)}}});n.disabled=a.isBeginning,r.disabled=a.isEnd,n.classList.toggle("disabled",a.isBeginning),r.classList.toggle("disabled",a.isEnd)},100)}catch(o){console.error(o),t.style.display="block",e.style.display="none",s.style.display="none"}const i=document.createElement("style");i.innerHTML=`
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
    `,document.head.appendChild(i)});
//# sourceMappingURL=index.js.map
