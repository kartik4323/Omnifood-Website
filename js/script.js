console.log("Hello world!");
const myName = "Kartik Pandey";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

//set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////////////////////////////////////////////////
//make mobile nav work

const btNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////////////////////////////
//Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
