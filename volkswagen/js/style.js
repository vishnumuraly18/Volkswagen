// Initialize hero Swiper  slider

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    speed:3000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//mobile menu fa-bars//

let bars=document.querySelector('header .fa-bars')
let menu=document.querySelector('header .menu')

bars.addEventListener('click',function(){
  menu.classList.toggle('open'); 
})
