// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// let smoother = scrollSmoother.create();

const t1 = new TimelineMax();

t1.fromTo(".circle-outer", 1, { opacity: "0" }, { opacity: "1" }, 8);
