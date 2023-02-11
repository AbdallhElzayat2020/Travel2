let el = document.querySelector(".scroll");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scroller = document.documentElement.scrollTop;
  el.style.width = `${(scroller / height) * 100}%`;
});

//show search icon
let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".searh-form");
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchForm.classList.toggle("active");
});

//show login section
let userBtn = document.querySelector("#user-btn");
let formLogIn = document.querySelector(".login-form");
let closeBtn = document.querySelector("#close-btn");

userBtn.addEventListener("click", () => {
  formLogIn.classList.add("active");
  // closeBtn.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
  // formLogIn.classList.add("active");
  formLogIn.classList.remove("active");
});
//bars icon
// let openBtn = document.querySelector("#menu-bar");
// let navMenu = document.querySelector(".navbar");
// let closesBtn = document.querySelector("close-btn");
// openBtn.addEventListener("click", () => {
//   openBtn.style.display = "none";
//   closeBtn.style.display = "block";
//   navMenu.style.display = "flex";
// });
// closesBtn.addEventListener("click", () => {
//   openBar.style.display = "inline-block";
//   closeBtn.style.display = "none";
//   navMenu.style.display = "none";
// });
// closeBtn.addEventListener("click", closeBtn);
// OR
//bar icon
let openBtn = document.querySelector("#menu-bar");
let navMenu = document.querySelector(".navbar");
let closesBtn = document.querySelector("#close-btn");
openBtn.addEventListener("click", () => {
  openBtn.classList.toggle("fa-times");
  navMenu.classList.toggle("active");
});

// slider
let vidBtn = document.querySelectorAll(".video-btn");

vidBtn.forEach((slide) => {
  slide.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    slide.classList.add("active");
    let src = slide.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

//slider
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    dleay: 2500,
  },
  breakpoints: {
    640: {
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
