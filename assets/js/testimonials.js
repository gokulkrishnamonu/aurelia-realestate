
const slides=[...document.querySelectorAll("[data-testimonial]")];
let index=0;
if(slides.length>1){
 setInterval(()=>{slides[index].hidden=true;index=(index+1)%slides.length;slides[index].hidden=false},5000);
}
