// script.js

window.addEventListener("resize", adjustNavHeight);

function adjustNavHeight() {
  const nav = document.querySelector("nav");
  const container = document.querySelector(".container");
  const containerHeight = container.clientHeight;
  nav.style.height = `${containerHeight}px`;
}

// Initial adjustment when the page loads
window.addEventListener("load", adjustNavHeight);
