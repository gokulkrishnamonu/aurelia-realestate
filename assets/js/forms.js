
document.querySelectorAll("form[data-demo-form]").forEach(form=>{
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const status=form.querySelector("[data-form-status]");
    if(status){status.textContent="Thank you. Your enquiry has been received. Our team will contact you shortly.";status.hidden=false}
    form.reset();
  });
});
