let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", mouseMove);

function mouseMove(e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px";
}

const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".wrapper");

let load = 0;

let int = setInterval(blurring, 60);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
