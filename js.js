const navbtnEl = document.querySelector(".nav-btn");
const hamburgerEl = document.querySelector(".hamburger");

const closel1El = document.querySelector(".close__ligne-1");
const closel2El = document.querySelector(".close__ligne-2");

const ctaboxEl = document.querySelector(".header__cta-box");
const navlistEl = document.querySelector(".navigation__list");

navbtnEl.addEventListener("click", function () {
  navlistEl.classList.toggle("show");
  ctaboxEl.classList.toggle("show");

  closel1El.classList.toggle("show");
  closel2El.classList.toggle("show");
  hamburgerEl.classList.toggle("show");
});

const slidetbtnEl = document.querySelector(".section-testamonial__btn");
const sliderightEl = document.querySelector(".section-testamonial__btn-right");

const cardboxEl = document.querySelectorAll(".card-box");

slidetbtnEl.addEventListener("click", () => {
  cardboxEl.forEach((el) => {
    el.classList.toggle("slide");
  });
});

function Slide() {
  document.getElementById("arrow").classList.toggle("slide-left")[0];
  document.getElementById("arrow").classList.toggle("slide-right")[0];
}

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
  });
});
