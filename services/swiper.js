window.onload = function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1.32,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  });

  let links = document.querySelector(".links");
  let btn = document.querySelector(".read-more-btn");
  let btnContent = document.querySelector(".read-more-btn-content");
  let down = document.querySelector(".down");
  let container = document.querySelector(".container");

  btn.addEventListener("click", function () {
    if (btnContent.textContent === "Показать все") {
      btnContent.textContent = "Скрыть";
      links.style.height = "auto ";
      container.style.height = "auto";
      down.classList.add("downRotate");
    } else if ((btnContent.textContent = "Скрыть")) {
      btnContent.textContent = "Показать все";
      links.style.height = "170px";
      container.style.height = "322px";
      down.classList.remove("downRotate");
    }
  });
};
