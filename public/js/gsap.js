gsap.registerPlugin(ScrollTrigger);

const t1 = new TimelineMax();

// Circle Outer

t1.fromTo(
  ".circle-outer",
  1,
  {
    opacity: "0"
  },
  {
    opacity: "1"
  },
  8
);

// Circle inner

t1.fromTo(
  ".circle-inner",
  1,
  {
    opacity: "0"
  },
  {
    opacity: "1"
  },
  15
);

// aside

t1.from(
  ".landing aside",
  2,
  {
    x: "-150"
  },
  3
);

// header

t1.from(
  ".landing section header",
  1.5,
  {
    y: "-150"
  },
  2
);

// features

t1.from(
  ".landing section .content .features .feature h1, .landing section .content .features .feature p",
  1.5,
  {
    y: "-150"
  },
  3
);

t1.fromTo(
  ".landing section .content .features .feature span",
  1.5,
  {
    height: "0"
  },
  {
    height: "30"
  },
  3
);

t1.fromTo(
  ".landing section .content .features .feature:last-child span",
  1.5,
  {
    height: "0"
  },
  {
    height: "60"
  },
  3
);

// salut
t1.fromTo(
  ".landing section .content .theme h2 .wrap",
  1.5,
  {
    top: "300"
  },
  {
    top: "0"
  },
  2
);

// TOBI

t1.fromTo(
  ".landing section .content .theme h1 .wrap",
  1.5,
  {
    top: "300"
  },
  {
    top: "0"
  },
  2
);

// Make things work

t1.fromTo(
  ".landing section .content .theme p",
  1.5,
  {
    opacity: "0"
  },
  {
    opacity: "1"
  },
  3
);

// 02

t1.fromTo(
  ".landing section .content .extra .half-num h1 .wrap",
  1.5,
  {
    right: "300"
  },
  {
    right: "0"
  },
  3
);

// svg
t1.from(
  ".landing section .content .extra .half-num .ion ",
  1.5,
  {
    y: "-500"
  },
  1
);

// go
t1.fromTo(
  ".landing section .content .extra .love .go ",
  2,
  {
    opacity: "0"
  },
  {
    opacity: "1"
  },
  3
);

t1.fromTo(
  ".landing section .content .extra .love .content ",
  1.5,
  {
    opacity: "0"
  },
  {
    opacity: "1"
  },
  3.5
);

TweenMax.to(".first", 1.5, {
  delay: 1,
  left: "-100%",
  ease: Expo.easeInOut
});

TweenMax.to(".second", 1.5, {
  delay: 1.5,
  left: "-100%",
  ease: Expo.easeInOut
});

TweenMax.to(".third", 1.5, {
  delay: 2.0,
  left: "-100%",
  ease: Expo.easeInOut
});
