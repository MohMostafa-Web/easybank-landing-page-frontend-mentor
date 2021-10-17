const nav = document.querySelector("header nav");
const openMenu = document.querySelector("nav .open-menu");
const closeMenu = document.querySelector("nav .close-menu");
const navList = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav li a");
const overlay = document.querySelector(".overlay");
const footerLinks = document.querySelectorAll("footer li a");
const scrollTopBtn = document.querySelector(".scroll-top-btn");

// toggle Mobile Navbar
document.body.onclick = function (e) {
  if (e.target.classList.contains("open-menu")) {
    
    showMobileNav();
  } else {
    
    hideMobileNav();
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
      if (navList.classList.contains("visible")) {
        hideMobileNav();
      }
    }
  });
}

// When click on a sepcific link, scroll to a sepcific section
scrollToSection(navLinks);
scrollToSection(footerLinks);


// When window is resized, hide Mobile Navbar
window.onresize = hideMobileNav;


// When you click on Scroll To Top Button, Go to the top of the page
scrollTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// toggle Scroll To Top Button
window.onscroll = function () {
  if (window.scrollY >= 400) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
}

/** Helper Functions */

// Create Function to show Mobile Navbar
function showMobileNav() {
  openMenu.classList.remove("active");
  closeMenu.classList.add("active");
  navList.classList.add("visible");
  overlay.classList.add("visible");
  document.body.classList.add("scroll-locked");
}

// Create Function to hide Mobile Navbar
function hideMobileNav() {
  openMenu.classList.add("active");
  closeMenu.classList.remove("active");
  navList.classList.remove("visible");
  overlay.classList.remove("visible");
  document.body.classList.remove("scroll-locked");
}

