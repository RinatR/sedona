var toggle = document.querySelector(".main-menu__toggle");
var menu = document.querySelector(".main-menu");

toggle.addEventListener("click", function(event) {
  event.preventDefault();

  if(menu.classList.contains("main-menu--closed")) {
    menu.classList.remove("main-menu--closed");
    menu.classList.add("main-menu--opened");
  }
  else {
    menu.classList.remove("main-menu--opened");
    menu.classList.add("main-menu--closed");
  }
});
