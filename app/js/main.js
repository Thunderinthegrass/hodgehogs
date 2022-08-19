$(document).ready(function(){
  $('.banner__slider').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    prevArrow: '<div class="banner__arrow banner__arrow-left"><svg width="9" height="16" viewBox="null" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.97095 14.6461L1.3249 8.00001L7.97095 1.35396" stroke-linecap="round"></path> </svg></div>',
    nextArrow: '<div class="banner__arrow banner__arrow-right"><svg width="9" height="16" viewBox="null" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.97095 14.6461L1.3249 8.00001L7.97095 1.35396" stroke-linecap="round"></path> </svg></div>',
  //   responsive: [
  //     {
  //        breakpoint: 660,
  //        settings: "unslick"
  //     }
  //  ]
  });
});

// function mobileMenu() {
//   let menu = document.querySelector(".mobile-menu");
//   let menuBtn = document.querySelector(".mobile-menu__btn");
//   let btnClose = document.querySelector(".mobile-menu__close-btn");

//   menuBtn.addEventListener("click", () => {
//     menu.classList.remove("d-none");
//   });

//   btnClose.addEventListener("click", () => {
//     menu.classList.add("d-none");
//   });
// }
// mobileMenu();

// function viewAll() {
//   const btn = document.querySelector(".view-all");
//   const sliders = document.querySelectorAll(".cases__slider-item");

//   btn.addEventListener("click", () => {
//     btn.classList.add("d-none");
//     sliders.forEach((item) => {
//       item.classList.add("d-block");
//     });
//   });
// }
// viewAll();

// function scrollToLink() {
//   const anchors = document.querySelectorAll('a[href*="#"]');

//   for (let anchor of anchors) {
//     anchor.addEventListener("click", function (event) {
//       event.preventDefault();
//       const blockID = anchor.getAttribute("href");
//       document.querySelector("" + blockID).scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     });
//   }
// }
// scrollToLink();



