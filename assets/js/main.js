/* ===============================
   DARK MODE (persistent)
================================ */

const body = document.body;
const toggleBtn = document.getElementById("darkToggle");

/* Beim Laden: Theme wiederherstellen */
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

/* Umschalten + speichern */
toggleBtn?.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
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

const currentPage =
  location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
