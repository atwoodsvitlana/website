const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link, .nav__contact");
const year = document.querySelector("#year");

function closeNav() {
  if (!navToggle || !nav) return;
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("nav-is-open");
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    nav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-is-open", !isOpen);
  });

  navLinks.forEach((link) => link.addEventListener("click", closeNav));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) closeNav();
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}
