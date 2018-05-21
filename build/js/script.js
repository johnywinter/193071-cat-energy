var toggleBtn = document.querySelector(".header__menu-toggle");
var toggleMenu = document.querySelector(".menu");

  toggleBtn.addEventListener("click", function () {
    toggleMenu.classList.toggle("menu--open");
  });
