!function(){"use strict";(()=>{const t=document.querySelectorAll(".triggers__item"),e=document.querySelectorAll(".library__block");function c(t,e){e.forEach((e=>{e.dataset.type===t?(e.classList.remove("hide"),e.classList.add("active")):(e.classList.remove("active"),e.classList.add("hide"))}))}c("italy",t),c("italy",e),t.forEach((o=>{o.addEventListener("click",(o=>{const s=o.target.dataset.type;c(s,t),c(s,e)}))}))})(),(()=>{const t=document.querySelectorAll("[data-goto]"),e=document.querySelector(".menu__icon"),c=document.querySelector(".menu");if(e.addEventListener("click",(t=>{c.classList.toggle("_active"),e.classList.toggle("_active"),document.body.classList.toggle("_lock")})),t.length>0){function o(t){const o=t.target;if(o.dataset.goto&&document.querySelector(o.dataset.goto)){const s=document.querySelector(o.dataset.goto).getBoundingClientRect().top+pageYOffset;e.classList.contains("_active")&&(document.body.classList.remove("_lock"),e.classList.remove("_active"),c.classList.toggle("_active")),window.scrollTo({top:s,behavior:"smooth"}),t.preventDefault()}}t.forEach((t=>{t.addEventListener("click",o)}))}})()}();