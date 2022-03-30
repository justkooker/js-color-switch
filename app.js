"use strict";
const startBtn = document.querySelector("button[data-action='start']");
const stophBtn = document.querySelector("button[data-action='stop']");
const body = document.querySelector("body");

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

let randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalId;
const colorSwitcherStart = function () {
  const min = 0;
  const max = colors.length - 1;
  intervalId = setInterval(() => {
    const color = colors[randomIntegerFromInterval(min, max)];
    console.log(color);
    body.style.backgroundColor = color;
  }, 1000);
  startBtn.setAttribute("disabled", "disabled");
};
const colorSwitcherStop = function () {
  clearInterval(intervalId);
  startBtn.removeAttribute("disabled");
};
startBtn.addEventListener("click", colorSwitcherStart);
stophBtn.addEventListener("click", colorSwitcherStop);
