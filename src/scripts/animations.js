
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";





export function initAnimations() {
   gsap.registerPlugin(ScrollTrigger);
   gsap.registerPlugin(SplitText);

    gsap.to(".parallaxBg", {
      y: 150,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".parallaxImg", {
      y: 200,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  



  gsap.utils.toArray(".fade-up").forEach((el) => {
  gsap.from(el,
    {y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: el,
      start: "top 90%"
    }}
  );
});



gsap.utils.toArray(".pop").forEach((el) => {
  gsap.fromTo(el,
    {
      scale: 0
    },
    {
      scale: 1,
      duration: 1,
      ease: "elastic.out(1, 2)",
      scrollTrigger: {
        trigger: el, // 👈 cada elemento é seu próprio trigger
        start: "top 95%",
        toggleActions: "play none none reverse"
      }
    }
  );
});



SplitText.create(".split", {
  type: "lines, words",
  mask: "lines",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.words, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      scrollTrigger: {
        trigger: self.elements[0], // o elemento original (o h2)
        start: "top 100%",          // dispara quando o topo do h2 passa 85% da viewport
        toggleActions: "play none none none",
      }
    });
  }
});




}