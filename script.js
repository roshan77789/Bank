// for nav ------------------------------------------------------

const nav = document.querySelector(".new-nav");
const showNav = document.querySelector(".show-nav");

showNav.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// for intersection ---------------------------------------------

const bankInfoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("info-observer", entry.isIntersecting);
  });
});
const articleImageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle(
      "articleImage-observer",
      entry.isIntersecting
    );
  });
});
const articleInfoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("articleInfo-observer", entry.isIntersecting);
  });
});

const bankInfo = document.querySelectorAll(".card");
bankInfo.forEach((e) => {
  bankInfoObserver.observe(e);
});

const articleImage = document.querySelectorAll(".article-img");
articleImage.forEach((e) => {
  articleImageObserver.observe(e);
});

const articleInfo = document.querySelectorAll(".article-info");
articleInfo.forEach((e) => {
  articleInfoObserver.observe(e);
});
