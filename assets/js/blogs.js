
document.querySelectorAll("[data-search]").forEach(input=>{
 input.addEventListener("input",()=>{
   const q=input.value.toLowerCase().trim();
   document.querySelectorAll("[data-blog-card]").forEach(card=>{
     card.hidden=q && !card.textContent.toLowerCase().includes(q);
   });
 });
});
