import logoImg from '../img/imgJPEG/logoImg/logoImg-min.jpg';
import { createImg } from "./header";
import { addImg } from "./header";

addImg(document.querySelector('.footer-title-fl'), createImg(logoImg,'img-logo'));

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formfield");
  const modal = document.getElementById("modal");
  const closeModalBtn = document.querySelector(".close-modal");
  
  function toggleMenu() {
    const body = document.body;
    
  if (menuMobCont.classList.contains("menu-div-is-open")) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
    }  
}




  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    modal.classList.remove("is-hidden");
  form.reset();
  });

  toggleMenu()
  
  closeModalBtn.addEventListener("click", function () {
    toggleMenu()
    modal.classList.add("is-hidden");
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.add("is-hidden");
    }
  });


  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.classList.add("is-hidden");
    }
  });
});



