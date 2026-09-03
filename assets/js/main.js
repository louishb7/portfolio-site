const navMenu = document.getElementById("nav-menu");
const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");
const navLinks = document.querySelectorAll(".nav-link");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle?.querySelector("i");
const currentYear = document.querySelector(".current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

function updateThemeToggle(theme) {
  if (!themeToggle || !themeIcon) return;

  const isDark = theme === "dark";
  themeIcon.className = isDark ? "ri-sun-line" : "ri-moon-line";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme",
  );
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;

  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {}

  updateThemeToggle(theme);
}

const currentTheme = document.documentElement.dataset.theme || "dark";
updateThemeToggle(currentTheme);

themeToggle?.addEventListener("click", () => {
  setTheme(
    document.documentElement.dataset.theme === "dark" ? "light" : "dark",
  );
});

function setMenuState(isOpen, returnFocus = false) {
  if (!navMenu || !navToggle) return;

  navMenu.classList.toggle("show-menu", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));

  if (isOpen) {
    navClose?.focus();
  } else if (returnFocus) {
    navToggle.focus();
  }
}

if (navMenu && navToggle) {
  navToggle.addEventListener("click", () => setMenuState(true));
  navClose?.addEventListener("click", () => setMenuState(false, true));
  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
}

/*==================== SCROLL ABOUT ANIMATION ====================*/
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!prefersReducedMotion) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".text-gradient").forEach((span) => {
    gsap.to(span, {
      backgroundSize: "100% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: span,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });
  });
}
