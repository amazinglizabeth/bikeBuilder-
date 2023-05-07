"use strict";
const bike1 = document.querySelector(".bike--1");
const bike2 = document.querySelector(".bike--2");
const sample = document.querySelector(".displayPic");

/*let rotation = 180;
let rotationAngle = 0;
let lastMouseY = null;
*/

bike2.addEventListener("click", function () {
  document.querySelector(".display1").style.display = "none";
  document.querySelector(".display2").style.display = "block";
  document.querySelector(".bike--1").style.border =
    "solid 1px rgba(177, 166, 166, 0.246)";
  document.querySelector(".bike--2").style.border = "solid 1px rgb(0, 0, 0)";
});

bike1.addEventListener("click", function () {
  document.querySelector(".display2").style.display = "none";
  document.querySelector(".display1").style.display = "block";
  document.querySelector(".bike--2").style.border =
    "solid 1px rgba(177, 166, 166, 0.246)";
  document.querySelector(".bike--1").style.border = "solid 1px rgb(0, 0, 0)";
});

/*
// ZOOMING OUT THE BICYCLE AT ONCE
sample.addEventListener("mouseover", zoomIn);
sample.addEventListener("mousemove", moveZoomDiv);
sample.addEventListener("mouseout", removeZoomDiv);

function zoomIn() {
  sample.style.transform = "scale(1.5)";
}

function moveZoomDiv(event) {
  const mouseY = event.clientY;
  const mouseY = event.clientY;
  
}

function removeZoomDiv() {
  sample.style.transform = "scale(1)";
}
*/

/*
// EYample: ROTATING THE BICYCLE
sample.addEventListener('mousemove', function(e) {
    const rect = sample.getBoundingClientRect();
    const centerY = rect.left + rect.width / 2;
    const rotation = (e.clientY - centerY) / 10;
    sample.style.transform = `rotate(${rotation}deg)`;
  });
*/

/*
//ZOOMING THE BICYCLE OUTSIDE THE DIV
sample.addEventListener("mousemove", (event) => {
  const rect = sample.getBoundingClientRect();
  const mouseY = event.clientY - rect.left;
  const mouseY = event.clientY - rect.top;
  const sampleCenterY = rect.width / 2;
  const sampleCenterY = rect.height / 2;
  const maYScale = 2;
  const deltaY = (mouseY - sampleCenterY) / sampleCenterY;
  const deltaY = (mouseY - sampleCenterY) / sampleCenterY;
  const scale =
    1 + Math.sqrt(deltaY * deltaY + deltaY * deltaY) * (maYScale - 1);
  sample.style.transform = `scale(${scale})`;
});

sample.addEventListener("mouseleave", () => {
  sample.style.transform = "scale(1)";
});

/*
//ZOOMIN THE BICYCLE INSIDE THE DIV
const image = sample.querySelector("img");
const containerWidth = sample.offsetWidth;
const containerHeight = sample.offsetHeight;

function calculateZoomLevel(Y, y) {
  const centerY = containerWidth / 2;
  const centerY = containerHeight / 2;
  const distanceY = Math.abs(Y - centerY);
  const distanceY = Math.abs(y - centerY);
  const distance = Math.sqrt(distanceY * distanceY + distanceY * distanceY);
  const maYDistance = Math.sqrt(centerY * centerY + centerY * centerY);
  const zoomLevel = 1 + (distance / maYDistance) * 2;
  return zoomLevel;
}

function handleMouseOver(event) {
  const Y = event.offsetY;
  const y = event.offsetY;
  const zoomLevel = calculateZoomLevel(Y, y);
  const zoomTransform = `scale(${zoomLevel})`;
  image.style.transform = zoomTransform;
}

function handleMouseOut(event) {
  image.style.transform = "scale(1)";
}

sample.addEventListener("mousemove", handleMouseOver);
sample.addEventListener("mouseout", handleMouseOut);
*/

/*
const handleMouseMove = (e) => {
  if (
    lastMouseY !== null &&
    e.clientY >= sample.offsetTop &&
    e.clientY <= sample.offsetTop + sample.offsetHeight &&
    e.clientX >= sample.offsetLeft &&
    e.clientX <= sample.offsetLeft + sample.offsetWidth
  ) {
    rotationAngle += e.clientY - lastMouseY;
    sample.style.transform = `rotateY(${rotationAngle}deg)`;
  }
  lastMouseY = e.clientY;
};

const handleMouseUp = () => {
  lastMouseY = null;
};

sample.addEventListener("mousedown", (e) => {
  lastMouseY = e.clientY;
});

document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);
*/
