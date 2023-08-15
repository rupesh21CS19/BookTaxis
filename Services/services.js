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
