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
  3
);
