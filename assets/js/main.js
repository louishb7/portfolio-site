/*==================== MENU SHOW & HIDDEN ====================*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== SCROLL ABOUT ANIMATION ====================*/
/* GSAP and ScrollTrigger come from a CDN and may be unavailable */
if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
  console.error(
    "GSAP/ScrollTrigger failed to load: text gradient animations are disabled.",
  );
} else {
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

/*==================== DARK LIGHT THEME ====================*/

/*==================== MIXITUP FILTER PORTFOLIO ====================*/

/* Active work */

/*==================== EMAIL JS ====================*/

/*==================== SCROLL REVEAL ANIMATION ====================*/
