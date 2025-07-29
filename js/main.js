// First: 
/////////////////////////////////////
// Change "Active" Class For The Li Of The Selsected Page 
const active_page = window.location.pathname;
const NavLinks = document.querySelectorAll("nav .links .link a").forEach(link => {
  if(link.href.includes(`${active_page}`)){
    link.parentElement.classList.add("active")
  }
})
/////////////////////////////////////
