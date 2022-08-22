$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 2,
    variableWidth: true,
    prevArrow:
      '<div class="arrow-left"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1171 0.066173L0.36753 11.1924C0.252163 11.293 0.15964 11.4173 0.0962285 11.557C0.0328172 11.6967 -5.31162e-07 11.8484 -5.2445e-07 12.002C-5.17738e-07 12.1555 0.0328172 12.3073 0.0962286 12.447C0.15964 12.5866 0.252163 12.711 0.36753 12.8116L13.1171 23.9344C13.1555 23.968 13.2027 23.9898 13.2531 23.9972C13.3035 24.0046 13.355 23.9972 13.4013 23.9761C13.4477 23.9549 13.487 23.9207 13.5146 23.8777C13.5422 23.8346 13.557 23.7845 13.557 23.7333L13.557 21.0179C13.557 20.8637 13.4904 20.7162 13.3737 20.6123L4.96403 13.2742L23.7333 13.2742C23.88 13.2742 24 13.1535 24 13.006L24 10.9946C24 10.8471 23.88 10.7264 23.7333 10.7264L4.96403 10.7264L13.3737 3.38828C13.4904 3.28772 13.557 3.14022 13.557 2.98266L13.557 0.267309C13.557 0.0393537 13.2904 -0.0846811 13.1171 0.066173Z" fill="#70908B"/></svg></div>',
    nextArrow:
      '<div class="arrow-right"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1171 0.066173L0.36753 11.1924C0.252163 11.293 0.15964 11.4173 0.0962285 11.557C0.0328172 11.6967 -5.31162e-07 11.8484 -5.2445e-07 12.002C-5.17738e-07 12.1555 0.0328172 12.3073 0.0962286 12.447C0.15964 12.5866 0.252163 12.711 0.36753 12.8116L13.1171 23.9344C13.1555 23.968 13.2027 23.9898 13.2531 23.9972C13.3035 24.0046 13.355 23.9972 13.4013 23.9761C13.4477 23.9549 13.487 23.9207 13.5146 23.8777C13.5422 23.8346 13.557 23.7845 13.557 23.7333L13.557 21.0179C13.557 20.8637 13.4904 20.7162 13.3737 20.6123L4.96403 13.2742L23.7333 13.2742C23.88 13.2742 24 13.1535 24 13.006L24 10.9946C24 10.8471 23.88 10.7264 23.7333 10.7264L4.96403 10.7264L13.3737 3.38828C13.4904 3.28772 13.557 3.14022 13.557 2.98266L13.557 0.267309C13.557 0.0393537 13.2904 -0.0846811 13.1171 0.066173Z" fill="#70908B"/></svg></div>',
      responsive: [
        {
           breakpoint: 1040,
           settings: {
            variableWidth: true,
            slidesToShow: 1,
           }
        }
     ]
  });
});

function addInfo() {
  const accordion = document.querySelectorAll(".card");
  let allInfo = document.querySelectorAll(".add-info");
  let body = document.querySelector("body");

  accordion.forEach((elem) => {
    const self = elem.querySelector(".add-info");
    let addInfoBtn = elem.querySelector(".add-info-btn");

    addInfoBtn.addEventListener("click", (e) => {
      if (self.classList.contains("active")) {
        self.classList.remove("active");
      } else {
        allInfo.forEach((item) => {
          item.classList.remove("active");
        });
        self.classList.add("active");
      }
    });
  });
}
addInfo();

function accordions() {
  const btn = document.querySelector(".dropdown-btn");
  const dropdown = document.querySelector(".dropdown");

  btn.addEventListener('click', (e) => {
    btn.classList.toggle('open');
    dropdown.classList.toggle('open');

    console.log(e.target)
  })

  
}
accordions();

function mobileMenu() {
  let menu = document.querySelector(".header__nav_mobile");
  let menuBtn = document.querySelector(".mobile-menu-btn");
  let btnClose = document.querySelector(".close-btn");

  menuBtn.addEventListener("click", () => {
    menu.classList.add("open");
  });

  btnClose.addEventListener("click", () => {
    menu.classList.remove("open");
  });
}
mobileMenu();

// function accordions() {
//   const accordion = document.querySelectorAll(".dropdown-btn");

//   accordion.forEach((elem) => {
//     elem.addEventListener("click", (e) => {
//       const self = e.currentTarget;
//       const control = self.querySelector(".accordion__control");
//       const content = self.querySelector(".accordion__content");

//       self.classList.toggle("open");

//       if (self.classList.contains("open")) {
//         control.setAttribute("aria-expanded", true);
//         content.setAttribute("aria-hidden", false);
//         content.style.maxHeight = content.scrollHeight + "px";
//       } else {
//         control.setAttribute("aria-expanded", false);
//         content.setAttribute("aria-hidden", true);
//         content.style.maxHeight = null;
//       }
//     });
//   });
// }
// accordions();

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
