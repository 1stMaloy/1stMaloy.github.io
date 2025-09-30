const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 16,
  slidesPerView: 1.2,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let servicesWrapper = document.querySelector(".services-wrapper");
let links = document.querySelector(".links");
let btn = document.querySelector(".read-more-btn");
let btnContent = document.querySelector(".read-more-btn-content");
let down = document.querySelector(".down");
let repareDown = document.querySelector(".repare__down");
let container = document.querySelector(".container");
let repareByTypeReadMore = document.querySelector(".repare-by-type__read-more");
let repareList = document.querySelector(".repare-by-type-items");
let repareContent = document.querySelector(".repare-by-type-content");
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".menu");
let cross = document.querySelector(".menu__cross");
let menuChat = document.querySelector(".menu__chat");
let feedBack = document.querySelector(".feedBack");
let feedBackCross = document.querySelector(".feedBack__cross");
let menuCall = document.querySelector(".menu__call");
let takeCall = document.querySelector(".takeCall");
let takeCallCross = document.querySelector(".takeCall__cross");
let wrapper = document.querySelector(".wrapper");

btn.addEventListener("click", function () {
  if (btnContent.textContent === "Показать все") {
    btnContent.textContent = "Скрыть";
    servicesWrapper.classList.add("services-wrapper-max");
    links.classList.add("links-max");
    down.classList.add("downRotate");
  } else if ((btnContent.textContent = "Скрыть")) {
    btnContent.textContent = "Показать все";
    servicesWrapper.classList.remove("services-wrapper-max");
    links.classList.remove("links-max");
    down.classList.remove("downRotate");
  }
});

repareByTypeReadMore.addEventListener("click", function () {
  if (repareContent.textContent === "Показать все") {
    repareList.classList.add("repare-by-type-items--max");
    repareContent.textContent = "Скрыть";
    repareDown.classList.add("downRotate");
  } else if ((repareContent.textContent = "Скрыть")) {
    repareList.classList.remove("repare-by-type-items--max");
    repareContent.textContent = "Показать все";
    repareDown.classList.remove("downRotate");
  }
});

burger.addEventListener("click", function () {
  menu.classList.remove("menu--hide");
  container.classList.add("container--opacity-96");
});

cross.addEventListener("click", function () {
  menu.classList.add("menu--hide");
  container.classList.remove("container--opacity-96");
});

menuCall.addEventListener("click", function () {
  if (window.innerWidth < 1440) {
    takeCall.classList.remove("takeCall--hide");
    menu.classList.add("menu--hide");
  } else {
    menu.classList.add("container--opacity-96");
    container.classList.add("container--opacity-96");
    takeCall.classList.remove("takeCall--hide");
  }
});

menuChat.addEventListener("click", function () {
  if (window.innerWidth < 1440) {
    menu.classList.add("menu--hide");
    feedBack.classList.remove("feedBack--hide");
  } else {
    menu.classList.add("container--opacity-96");
    container.classList.add("container--opacity-96");
    feedBack.classList.remove("feedBack--hide");
  }
});

feedBackCross.addEventListener("click", function () {
  if (window.innerWidth < 1440) {
    feedBack.classList.add("feedBack--hide");
    menu.classList.remove("menu--hide");
  } else {
    feedBack.classList.add("feedBack--hide");
    menu.classList.remove("container--opacity-96");
    container.classList.remove("container--opacity-96");
  }
});

takeCallCross.addEventListener("click", function () {
  if (window.innerWidth < 1440) {
    takeCall.classList.add("takeCall--hide");
    menu.classList.remove("menu--hide");
  } else {
    menu.classList.remove("container--opacity-96");
    container.classList.remove("container--opacity-96");
    takeCall.classList.add("takeCall--hide");
  }
});
