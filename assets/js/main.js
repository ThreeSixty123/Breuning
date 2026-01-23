// ================= THEME =================
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

function toggleTheme() {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
}

document.getElementById("darkToggle")?.addEventListener("click", toggleTheme);
document.getElementById("darkToggleMobile")?.addEventListener("click", toggleTheme);

// ================= MOBILE MENU =================
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
});

mobileMenu?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// ================= FADE IN =================
const faders = document.querySelectorAll(".fade-in");

if (faders.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(el => observer.observe(el));
}

// ================= ACTIVE NAV =================
const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
