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
  10
);

// aside

t1.from(
  ".landing aside",
  2,
  {
    x: "-150"
  },
  7
);

// header

t1.from(
  ".landing section header",
  1.5,
  {
    y: "-150"
  },
  6
);

// features

t1.from(
  ".landing section .content .features .feature h1, .landing section .content .features .feature p",
  1.5,
  {
    y: "-250"
  },
  7
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
  7
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
  7
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
  6
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
  6
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
  7
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
  7
);

// svg
t1.from(
  ".landing section .content .extra .half-num .ion ",
  1.5,
  {
    y: "-500"
  },
  5
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
  7
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
  8
);

TweenMax.to(".first", 2, {
  delay: 4,
  left: "-100%",
  ease: Expo.easeInOut
});

TweenMax.to(".second", 1.5, {
  delay: 5,
  left: "-100%",
  ease: Expo.easeInOut
});

TweenMax.to(".third", 2, {
  delay: 6,
  left: "-100%",
  ease: Expo.easeInOut
});
