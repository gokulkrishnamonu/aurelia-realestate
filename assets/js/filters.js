
document.querySelectorAll("[data-filter-group]").forEach(group=>{
  const buttons=group.querySelectorAll("[data-filter]");
  const items=document.querySelectorAll("[data-category]");
  buttons.forEach(btn=>btn.addEventListener("click",()=>{
    buttons.forEach(b=>b.classList.remove("active")); btn.classList.add("active");
    const value=btn.dataset.filter;
    items.forEach(item=>item.hidden=!(value==="all"||item.dataset.category===value));
  }));
});
