// Selectors

const horiRange = document.querySelector("#hori_range");
const hori = document.querySelector(".hori");
const vertRange = document.querySelector("#vert_range");
const vert = document.querySelector(".vert");
const blurRange = document.querySelector("#blur_range");
const blur = document.querySelector(".blur");
const spreadRange = document.querySelector("#spread_range");
const spread = document.querySelector(".spread");
const colorInput = document.querySelector("#color_input");
const opaRange = document.querySelector("#opa_range");
const opa = document.querySelector(".opa");
let result = document.querySelector("#result");
const form = document.querySelector("#form");
let rgba = "rgba(0,0,0,0.75)";
const box = document.querySelector("#box");
const reset = document.querySelector("#reset");

//event Listenings

horiRange.addEventListener("input", (e) => {
  hori.innerText = e.target.value + "px";
});

vertRange.addEventListener("input", (e) => {
  vert.innerText = e.target.value + "px";
});

blurRange.addEventListener("input", (e) => {
  blur.innerText = e.target.value + "px";
});

spreadRange.addEventListener("input", (e) => {
  spread.innerText = e.target.value + "px";
});

opaRange.addEventListener("input", (e) => {
  opa.innerText = e.target.value / 100;
  const color = colorInput.value;
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);
  rgba = `rgba(${r}, ${g}, ${b}, ${opa.innerText})`;
});

colorInput.addEventListener("input", (ev) => {
  const color = ev.target.value;
  const opacity = opaRange.value;
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);
  rgba = `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
});

form.addEventListener("input", () => {
  result.innerText = `box-shadow: ${hori.innerText} ${vert.innerText} ${blur.innerText} ${spread.innerText} ${rgba};`;
  box.style.boxShadow = `${hori.innerText} ${vert.innerText} ${blur.innerText} ${spread.innerText} ${rgba}`;
});
