
document.addEventListener("DOMContentLoaded",()=>{
  const year=document.querySelectorAll("[data-year]");
  year.forEach(el=>el.textContent=new Date().getFullYear());

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")})
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

  document.querySelectorAll("[data-count]").forEach(el=>{
    const target=Number(el.dataset.count);
    const suffix=el.dataset.suffix||"";
    let started=false;
    const io=new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting&&!started){
        started=true; let start=0; const duration=1200; const t0=performance.now();
        const tick=now=>{
          const p=Math.min((now-t0)/duration,1);
          const eased=1-Math.pow(1-p,3);
          el.textContent=Math.round(target*eased)+suffix;
          if(p<1) requestAnimationFrame(tick);
        }; requestAnimationFrame(tick); io.disconnect();
      }
    });
    io.observe(el);
  });
});
