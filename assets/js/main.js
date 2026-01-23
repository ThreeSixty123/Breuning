/* ===============================
   DARK MODE (persistent)
================================ */

const body = document.body;

function toggleTheme() {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
}

// Theme beim Laden setzen
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

// Dark-Mode Buttons
document.getElementById("darkToggle")?.addEventListener("click", toggleTheme);
document.getElementById("darkToggleMobile")?.addEventListener("click", toggleTheme);
document.getElementById("darkToggleMobileMenu")?.addEventListener("click", toggleTheme);


/* ===============================
   MOBILE BURGER MENU (FINAL)
================================ */

const menuToggle = document.getElementById("menuToggle");
const menuClose  = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");

function openMobileMenu() {
  mobileMenu.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenu.classList.add("hidden");
  document.body.style.overflow = "";
}

menuToggle?.addEventListener("click", openMobileMenu);
menuClose?.addEventListener("click", closeMobileMenu);

// Schließen bei Klick auf einen Menüpunkt
mobileMenu?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});


/* ===============================
   FADE-IN ANIMATION
================================ */

const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));


/* ===============================
   ACTIVE NAVIGATION STATE
================================ */

const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
