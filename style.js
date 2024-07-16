const swiper = new Swiper('.chefcontainer', {
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const swiper2 = new Swiper('.testimonialcontainer',{
  slidesPerView: 2,
  autoplay: {
    delay: 3000,
  },
  pagination:{
    el: ".swiper-pagination",
    clickable:true,
  }
})