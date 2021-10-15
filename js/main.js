const nav = document.querySelector("header nav");
const openMenu = document.querySelector("nav .open-menu");
const closeMenu = document.querySelector("nav .close-menu");
const navList = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav li a");
const overlay = document.querySelector(".overlay");
const footerLinks = document.querySelectorAll("footer li a");

nav.onclick = function (e) {
  if (e.target.classList.contains("open-menu") || e.target.classList.contains("close-menu")) {
    openMenu.classList.toggle("active");
    closeMenu.classList.toggle("active");
    navList.classList.toggle("visible");
    overlay.classList.toggle("visible");
    document.body.classList.toggle("scroll-locked");
  }
};

// Create Function Scroll to section on click
function scrollToSection(links) {
  links.forEach(link => {
    link.onclick = function (e) {
      e.preventDefault();
      if(this.dataset.section) {
        document.querySelector(this.dataset.section).scrollIntoView({behavior: "smooth", block: "start"});
      }
    }
  });
}

// When click on a sepcific link, scroll to a sepcific section
scrollToSection(navLinks);
scrollToSection(footerLinks);
