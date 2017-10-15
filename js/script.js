var open_btn = document.querySelector(".main-nav__toggle--close");
var menu = document.querySelector(".nav-list");
var close = document.querySelector(".main-nav__toggle");

open_btn.addEventListener("click", function(event) {
  event.preventDefault();
  if (menu.classList.contain("nav-list--close") {
    menu.classList.remove("nav-list--close");
  } else {
    menu.classList.add("nav-list--close");
    open_btn.classList.add("main-nav__toggle--close");
  }
});

// close.addEventListener("click", function(event) {
//   event.preventDefault();
//   menu.classList.add("nav-list--close");
//   open_btn.classList.add("main-nav__toggle--close");
// });

// var send = document.querySelector(".send-btn");
// var popup_success = document.querySelector(".pop-up--success");
// var popup_fail = document.querySelector(".pop-up--fail");
// var close = document.querySelector(".btn-close");
// var form = document.querySelector(".form");
// var name = form.querySelector("#user-first-name");
// var surmane = form.querySelector("#user-surname");
// var email = form.querySelector("#user-email");
//
// form.addEventListener("submit", function(event) {
//   if (!name.value || !surmane.value || !email.value) {
//     event.preventDefault();
//     popup_fail.style.display = "block";
//   } else {
//     popup_success.style.display = "block";
//   }
// });
//
// close.addEventListener("click", function(event) {
//   event.preventDefault();
//   popup_success.style.display = "none";
//   popup_fail.style.display = "none";
// });
