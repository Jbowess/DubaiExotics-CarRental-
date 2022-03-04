let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

//login

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login').classList.remove('active');
}

//header stays in place

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};


//performance tab

var swiper = new Swiper(".performance-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },


  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//luxury tab

var swiper = new Swiper(".luxury-slider", {
  spaceBetween: 40,
  loop:true,
  centeredSlides: true,  
  grabCursor: true,

  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



