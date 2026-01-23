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
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");

function openMenu() {
  mobileOverlay.classList.remove("hidden");
  mobileMenu.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileOverlay.classList.add("hidden");
  mobileMenu.classList.add("hidden");
  document.body.style.overflow = "";
}

menuToggle?.addEventListener("click", openMenu);
menuClose?.addEventListener("click", closeMenu);
mobileOverlay?.addEventListener("click", closeMenu);

mobileMenu?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

document
  .getElementById("darkToggleMobileMenu")
  ?.addEventListener("click", toggleTheme);


// Dark Mode (beide Buttons)
document
  .getElementById("darkToggleMobileMenu")
  ?.addEventListener("click", toggleTheme);


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


