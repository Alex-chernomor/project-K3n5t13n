(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const y=[{title:"ABOUT ME",description:["I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.","Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."]},{title:"ROLE",description:["Frontend development","HeadlessCMS, Wordpress","Blender (enjoy)"]},{title:"EDUCATION",description:["2018 - 2019  / Frontend Development Diploma, GoIT IT School, New York","2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York","2020 - 2022 / Advanced Blender Animation Techniques, Udemy"]}];function E(){const t=document.querySelector(".about-me-list");y.forEach(e=>{const o=document.createElement("li");o.classList.add("my-description-about-me");const s=document.createElement("p");s.classList.add("el-name-about-me"),s.innerText=e.title;const n=document.createElement("button");n.innerHTML=`<buttun><svg width='40px' height='40px'><use href='../img/imgSVG/sprite.svg#arrowUp'></use></svg></buttun>;
`;const a=document.createElement("div");a.classList.add("div-description"),a.style.display="none";const c=document.createElement("ul");c.classList.add("ul-description-about-me"),e.description.forEach(i=>{const r=document.createElement("li");r.innerText=i,c.appendChild(r)}),n.addEventListener("click",()=>{o.classList.toggle("active");const i=n.querySelector("svg use"),r=o.classList.contains("active");i.setAttribute("href",r?"./img/imgSVG/sprite.svg#arrowUp":"./img/imgSVG/sprite.svg#arrowDown"),a.style.display=r?"block":"none"}),a.appendChild(c),s.appendChild(n),o.appendChild(s),o.appendChild(a),t.appendChild(o)})}E();const b=document.querySelector(".skills-slider-about-me"),A=document.createElement("div");A.classList.add("swiper-about-me");const I=["HTML/CSS","JavaScript","React","Node.js","React Native","Soft skills"],h=document.createElement("ul");h.classList.add("skills-list-about-me");const k=t=>`
    <li class='skills-link-about-me'>
        <p class='skill-p-about-me'>${t}</p>
    </li>
    `,B=t=>t.map(e=>k(e)).join("");h.innerHTML=B(I);A.appendChild(h);const f=document.createElement("div");f.classList.add("swiper-button-next-about-me");f.innerHTML=`<button class="button"><svg width='40px' height='40px'><use href='./img/imgSVG/sprite.svg#arrowRight'></use></svg></button>`;A.appendChild(f);b.appendChild(A);const C="/project-K3n5t13n/assets/sprite-D3MZqXXq.svg",j=[{iconId:"userSVG",title:"Expertise",description:"As a highly experienced developer, I have deep knowledge of programming and website development."},{iconId:"dialogSVG",title:"Communication",description:"Understanding your needs and wants is my priority and I am always open     to discussions and corrections."},{iconId:"penSVG",title:"Art",description:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life."},{iconId:"hourglassSVG",title:"Urgent execution",description:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}],L=document.querySelector(".benefits-list"),S=({iconId:t,title:e,description:o})=>`
    <li class="benefits-elements">
        <div class="benefits-wrapper">
          <svg class="benefits-icon" width="24" height="24">
            <use href="${C}#${t}"></use>
          </svg>
        </div>
        <h3 class="benefits-subtitle">${e}</h3>
        <p class="benefits-desc">
          ${o}
        </p>
      </li>
    `,M=t=>t.map(S).join(""),q=()=>L.insertAdjacentHTML("beforeend",M(j));q();const x="/project-K3n5t13n/assets/coversImg1-Bl0z15Uf.jpg",R="/project-K3n5t13n/assets/coversImg2-DHmTGa53.jpg",Q="/project-K3n5t13n/assets/coversImg3-Dg9-9aBp.jpg",T="/project-K3n5t13n/assets/coversImg4-BhGxIJnM.jpg",H="/project-K3n5t13n/assets/coversImg5-CHdCNz5w.jpg",D="/project-K3n5t13n/assets/coversImg6-BgVpq4JB.jpg",P="/project-K3n5t13n/assets/coversImg7--Yeft_Ha.jpg",F="/project-K3n5t13n/assets/coversImg8-Zm4i-Bmd.jpg",G="/project-K3n5t13n/assets/coversImg9-CqQl1g0-.jpg",N="/project-K3n5t13n/assets/coversImg10-Cpn2LkO2.jpg";document.addEventListener("DOMContentLoaded",()=>{const t=[{src:x,alt:"PowerPulse"},{src:R,alt:"MIMINO"},{src:Q,alt:"Ukrainian Art"},{src:T,alt:"GREEN.HARVEST"},{src:H,alt:"WALLET"},{src:D,alt:"chego jewelry"},{src:P,alt:"energy.flow"},{src:F,alt:"fruitbox"},{src:G,alt:"englishexcellence"},{src:N,alt:"StarlightStudio"}],e=[1,2,3,4].map(i=>document.getElementById(`row${i}`));function o({src:i,alt:r}){const l=document.createElement("li");l.className="covers-item";const u=document.createElement("a");u.className="covers-link",u.href=i;const d=document.createElement("img");return d.className="covers-image",d.src=i,d.srcset=`${i} 1x, ${i.replace(".jpg","@2x.jpg")} 2x`,d.alt=r,d.loading="lazy",u.appendChild(d),l.appendChild(u),l}function s(i,r=100){setTimeout(()=>{i.classList.add("visible")},r)}function n(i,r,l){let u=[];l?r.forEach(d=>{const m=o(d);i.appendChild(m),s(m)}):([...r].sort(()=>.5-Math.random()).forEach(m=>{if(u.includes(m.src))return;const p=o(m);i.appendChild(p),s(p),u.push(m.src)}),u.forEach(m=>{const p=i.firstChild.cloneNode(!0);i.appendChild(p),s(p)}))}e.forEach((i,r)=>{n(i,t,r===0)});const a=document.querySelector(".covers-gallery");new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting?e.forEach(l=>l.classList.add("active")):e.forEach(l=>l.classList.remove("active"))})}).observe(a)});document.addEventListener("DOMContentLoaded",()=>{const t=[{question:"What programming languages are most often used in your project?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"How can I contact you?",answer:"You can contact me via email, phone, or through social media platforms listed on the website."},{question:"What are the deadlines for the project?",answer:"The terms of project implementation depend on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines usually occurs during the planning phase."},{question:"Do you provide advice or support?",answer:"Yes! I offer consultations and ongoing support throughout the project lifecycle."},{question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, PayPal, as well as payments in cryptocurrencies like Bitcoin and Ethereum."},{question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, PayPal, as well as payments in cryptocurrencies like Bitcoin and Ethereum."}],e=document.querySelector(".faq-grid");if(!e){console.error("FAQ container not found!");return}const o=s=>`
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
    `;e.innerHTML=t.map(o).join(""),document.querySelectorAll(".faq-item").forEach(s=>{s.addEventListener("click",()=>{s.classList.toggle("active");const n=s.querySelector(".faq-answer");n.classList.toggle("hidden");const a=s.querySelector(".faq-toggle svg");a.style.transform=n.classList.contains("hidden")?"rotate(0deg)":"rotate(180deg)"})})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("formfield"),e=document.getElementById("modal"),o=document.querySelector(".close-modal");t.addEventListener("submit",function(s){s.preventDefault(),e.classList.remove("is-hidden")}),t.reset(),o.addEventListener("click",function(){e.classList.add("is-hidden")}),window.addEventListener("click",function(s){s.target===e&&e.classList.add("is-hidden")}),document.addEventListener("keydown",function(s){s.key==="Escape"&&e.classList.add("is-hidden")})});const O="data:image/jpeg;base64,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",U=document.querySelector(".logo-container"),W=document.querySelector(".ankors-menu"),w=document.querySelector(".menu-cont"),V=document.querySelector("#burger-menu"),X=document.querySelector(".menu-burger-button"),K=document.querySelector(".menu-button"),Z=document.querySelector(".closeMenuSvgIcon"),Y=document.querySelector(".burgerSvgIcon"),J=["About me","Benefits","Projects","FAQ"],z=(t,e)=>{t.prepend(e)},$=(t,e)=>{const o=document.createElement("img");return o.src=t,o.classList.add(e),o},_=t=>`
    <li class='ankorLink'>
    <a href='#'>${t}</a>
    <li/>
    `,ee=t=>t.map(e=>_(e)).join(""),te=t=>W.insertAdjacentHTML("beforeend",t),g=function(t,e){return t.classList.toggle(e)},v=()=>{g(w,"is-hidden"),g(Y,"is-hidden"),g(Z,"is-hidden"),g(V,"menu-div-is-open")};te(ee(J));z(U,$(O,"img-logo"));K.addEventListener("click",v);X.addEventListener("click",v);w.addEventListener("click",v);const se=[{url:"https://www.instagram.com/goitclub/",name:"IG"},{url:"https://www.facebook.com/goITclub/",name:"FB"},{url:"https://www.youtube.com/c/GoIT",name:"YT"},{url:"https://github.com/Alex-chernomor/project-K3n5t13n",name:"GH"},{url:"mailto:lloydfefferson@gmail.com",name:"lloydfefferson@gmail.com"}],ne=document.querySelector(".list-link"),oe=t=>t.map(e=>`
    <li class="link-wrap">
        <a class="link" href="${e.url}" target="_blank">${e.name}</a>
    </li>
`).join("");ne.innerHTML=oe(se);document.addEventListener("DOMContentLoaded",async()=>{const t=document.getElementById("reviews-list"),e=document.getElementById("error-message"),o=document.querySelector(".swiper-button-prev"),s=document.querySelector(".swiper-button-next"),n=document.querySelector(".button_pointer");if(!t||!e||!o||!s||!n){console.error("Не найдены необходимые элементы");return}try{const c=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!c.ok)throw new Error("Failed to fetch reviews");const i=await c.json();if(!Array.isArray(i)||i.length===0)throw new Error("No reviews found");t.innerHTML=i.map(r=>`
                <li class="swiper-slide">
                    <img src="${r.avatar_url}" alt="${r.author}" class="review-avatar">
                    <h3 class="review-author">${r.author}</h3>
                    <p class="review-text">"${r.review}"</p>
                </li>
            `).join(""),setTimeout(()=>{const r=new Swiper(".swiper",{slidesPerView:1,spaceBetween:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,centeredSlides:!1,loop:!1,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:2,spaceBetween:10}},on:{slideChange:function(){o.disabled=this.isBeginning,s.disabled=this.isEnd,o.classList.toggle("disabled",this.isBeginning),s.classList.toggle("disabled",this.isEnd)}}});o.disabled=r.isBeginning,s.disabled=r.isEnd,o.classList.toggle("disabled",r.isBeginning),s.classList.toggle("disabled",r.isEnd)},100)}catch(c){console.error(c),e.style.display="block",t.style.display="none",n.style.display="none"}const a=document.createElement("style");a.innerHTML=`
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
