window.onload = function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1.31,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  });

  let links = document.querySelector(".links");
  let btn = document.querySelector(".read-more-btn");
  let btnContent = document.querySelector(".read-more-btn-content");
  let down = document.querySelector(".down");
  let containter = document.querySelector(".container");

  btn.addEventListener("click", function () {
    if (btnContent.textContent === "Показать все") {
      btnContent.textContent = "Скрыть";
      links.style.height = "auto ";
      containter.style.height = "auto";
      down.classList.add("downRotate");
    } else if ((btnContent.textContent = "Скрыть")) {
      btnContent.textContent = "Показать все";
      links.style.height = "170px";
      containter.style.height = "322px";
      down.classList.remove("downRotate");
    }
  });
};
