
const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");
toggle?.addEventListener("click",()=>{
  nav?.classList.toggle("open");
  toggle.setAttribute("aria-expanded",nav?.classList.contains("open")?"true":"false");
});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));
