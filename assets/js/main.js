document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;

  /* Theme laden */
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

  /* Mobile Menu */
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle?.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenu?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

});
