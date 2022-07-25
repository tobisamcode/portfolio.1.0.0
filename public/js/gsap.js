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
  8
);

// header

t1.from(
  ".landing section header",
  1.5,
  {
    y: "-150"
  },
  7
);

// features

t1.from(
  ".landing section .content .features .feature h1, .landing section .content .features .feature p",
  1.5,
  {
    y: "-250"
  },
  9
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
  9
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
  9
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
  8
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
  8
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
  9
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
  9
);

// svg
t1.from(
  ".landing section .content .extra .half-num .ion ",
  1.5,
  {
    y: "-500"
  },
  7
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
  9
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
  10
);

TweenMax.to(".first", 1, {
  delay: 1,
  left: "-100%",
  ease: Expo.easeInOut
});

TweenMax.to(".second", 1.5, {
  delay: 2,
  left: "-100%",
  ease: Expo.easeInOut
});

TweenMax.to(".third", 1, {
  delay: 2.5,
  left: "-100%",
  ease: Expo.easeInOut
});

// TEXT ANIMATION
var text = document.querySelector(".text h1"),
  char = text.querySelectorAll(".text span"),
  replaceChar = text.querySelectorAll('.text span:not([data-char="."])');

var tl = gsap.timeline();

tl.set(char, {
  yPercent: -110
});
tl.set(text, {
  autoAlpha: 1
});
tl
  .to(char, {
    duration: 1,
    yPercent: 0,
    stagger: 0.05,
    ease: "expo.inOut"
  })
  .to(replaceChar, {
    duration: 1,
    yPercent: 110,
    ease: "expo.inOut",
    repeat: -1,
    yoyo: true,
    stagger: 0.1
  });

TweenMax.to(".text", 4, {
  delay: 3,
  display: "none",
  ease: Expo.easeInOut
});

// TEXT ANIMATE ON SCROLL

gsap.to(".ogg p", {
  backgroundPositionX: "0%",
  stagger: 1,
  duration: 5,
  scrollTrigger: {
    trigger: ".ogg p",
    scrub: 1,
    start: 250,
    end: 800
  }
});

gsap.from(".first-para", {
  y: 300,
  stagger: 1,
  scrollTrigger: {
    trigger: ".first-para",
    scrub: 1,
    start: 250,
    end: 800
  }
});

gsap.from(".second-para", {
  y: 700,
  stagger: 1,
  scrollTrigger: {
    trigger: ".first-para",
    scrub: 1,
    start: 250,
    end: 800
  }
});
gsap.from(".third-para", {
  y: 1200,
  stagger: 1,
  scrollTrigger: {
    trigger: ".first-para",
    scrub: 1,
    start: 250,
    end: 800
  }
});

gsap.from(".project-links.og", {
  y: 800,
  stagger: 1,
  duration: 4,
  scrollTrigger: {
    trigger: ".og",
    scrub: 1,
    start: 700,
    end: 900
  }
});

gsap.from(".project-section h2", {
  y: 800,
  stagger: 1,
  scrollTrigger: {
    trigger: ".project-section h2",
    scrub: 1,
    start: 1300,
    end: 1400
  }
});

gsap.from(".project-section .title-container p", {
  y: 200,
  stagger: 1,
  scrollTrigger: {
    trigger: ".project-section .title-container p",
    scrub: 1,
    start: 1400,
    end: 1500
  }
});
