import { gsap } from "gsap";

export const fromTitle: gsap.TweenVars = {
  x: -100,
  opacity: 0,
};

export const toTitle: gsap.TweenVars = {
  x: 0,
  opacity: 1,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".welcome-text",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
  onComplete: () => {
    gsap.fromTo(
      ".description-text",
      {
        x: 10,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".description-text",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  },
};
