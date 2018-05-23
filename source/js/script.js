var toggleBtn = document.querySelector(".header__menu-toggle");
var toggleMenu = document.querySelector(".menu");

  toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("header__menu-toggle--opened");
});

var body = document.querySelector("body");

body.classList.remove("no-js");
body.classList.add("js");
