/* ===============================
   BASIC SAFETY INIT
================================ */

document.addEventListener("DOMContentLoaded", () => {

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

  document.getElementById("darkToggle")?.addEventListener("click", toggleTheme);
  document.getElementById("darkToggleMobile")?.addEventListener("click", toggleTheme);
  document.getElementById("darkToggleMobileMenu")?.addEventListener("click", toggleTheme);


  /* ===============================
     MOBILE BURGER MENU
  ================================ */

  const menuToggle = document.getElementById("menuToggle");
  const menuClose  = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add("hidden");
    document.body.style.overflow = "";
  }

  menuToggle?.addEventListener("click", openMobileMenu);
  menuClose?.addEventListener("click", closeMobileMenu);

  mobileMenu?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });


  /* ===============================
     FADE-IN ANIMATION (SAFE)
  ================================ */

  if ("IntersectionObserver" in window) {
    const faders = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    faders.forEach(el => observer.observe(el));
  }


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

});
