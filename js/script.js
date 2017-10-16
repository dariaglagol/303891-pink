var open_btn = document.querySelector(".main-nav__toggle--open");
var menu = document.querySelector(".nav-list");
var close = document.querySelector(".main-nav__toggle--open");
var menuBackground = document.querySelector(".main-nav__inner");

open_btn.addEventListener("click", function(event) {
  event.preventDefault();
  if (!menu.classList.contains("nav-list--close")) {
    menu.classList.add("nav-list--close");
    open_btn.classList.remove("main-nav__toggle--open");
    menuBackground.classList.remove("main-nav__inner--colored");
  } else {
    menu.classList.remove("nav-list--close");
    open_btn.classList.add("main-nav__toggle--open");
    open_btn.classList.remove("main-nav__toggle--close");
    menuBackground.classList.add("main-nav__inner--colored");
  }
});
