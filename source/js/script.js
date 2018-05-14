var toggleBtn = document.querySelector(".header__menu-toggle");
var toggleMenu = document.querySelector(".nav__menu");

  toggleBtn.addEventListener("click", function () {
    toggleMenu.classList.toggle("nav__menu--open");
  });
