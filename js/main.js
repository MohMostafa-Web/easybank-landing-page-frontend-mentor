const nav = document.querySelector("header nav");
const openMenu = document.querySelector("nav .open-menu");
const closeMenu = document.querySelector("nav .close-menu");
const navList = document.querySelector("nav ul");
const overlay = document.querySelector(".overlay");


nav.onclick = function (e) {
  console.log(e.target.className);
  if (e.target.classList.contains("open-menu") || e.target.classList.contains("close-menu")) {
    openMenu.classList.toggle("active");
    closeMenu.classList.toggle("active");
    navList.classList.toggle("visible");
    overlay.classList.toggle("visible");
    document.body.classList.toggle("scroll-locked");
  }
};
