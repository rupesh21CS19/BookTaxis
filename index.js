// nav bar

let navBtn = document.querySelectorAll(".nav-icon");
let MobileNavBar = document.querySelector(".mobile-nav-bar");
let navRightData = document.querySelector(".nav-right-data");

navBtn.forEach((e) => {
  e.addEventListener("click", () => {
    MobileNavBar.classList.toggle("active");
    navRightData.classList.toggle("active");
  });
});

// faq question
let li = document.querySelectorAll(".li");
let label = document.querySelectorAll("#label");

label.forEach((e) => {
  e.addEventListener("click", () => {
    li.forEach((w) => {
      w.classList.toggle("liii");
    });
  });
});

//----- memeber
var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
