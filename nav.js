document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".header__menu-icon");
  const menu = document.querySelector(".header__menu");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});
