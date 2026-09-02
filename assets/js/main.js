const navMenu = document.getElementById("nav-menu");
const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");
const navLinks = document.querySelectorAll(".nav-link");

function setMenuState(isOpen) {
  if (!navMenu || !navToggle) return;

  navMenu.classList.toggle("show-menu", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

if (navMenu && navToggle) {
  navToggle.addEventListener("click", () => setMenuState(true));
  navClose?.addEventListener("click", () => setMenuState(false));
  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
}

/*==================== SCROLL ABOUT ANIMATION ====================*/
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
