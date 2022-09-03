import { gsap } from "gsap";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
gsap.registerPlugin(ScrollTrigger);

const sections = Array.from(document.querySelectorAll(".principles"));
function start() {
  if (window.outerWidth > 768) {
      const width = (sections[0].offsetWidth - 5 ) * (sections.length - 1);
      const tl = gsap.timeline();
      tl.fromTo(sections, { x: 0 }, { x: -width });
      ScrollTrigger.create({
        animation: tl,
        trigger: ".scroll-container",
        start: "top -80px",
        end: "bottom -100px",
        scrub: true,
        pin: true
    });
  } else {
    ScrollTrigger.killAll()
  }
}

export const scroll = () => {
  start()
  window.addEventListener("resize", start);
};
