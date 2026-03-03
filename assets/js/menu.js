const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".mobile-menu-overlay");
const closeButtons = document.querySelectorAll("[data-menu-close]");

function openMenu() {
  document.body.classList.add("menu-open");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
}

hamburger.addEventListener("click", openMenu);

closeButtons.forEach(btn => {
  btn.addEventListener("click", closeMenu);
});

overlay.addEventListener("click", closeMenu);
