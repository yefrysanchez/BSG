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

//event Listenings

form.addEventListener("change", () => {
  horiRange.addEventListener("change", (e) => {
    hori.innerText = e.target.value + "px";
  });

  vertRange.addEventListener("change", (e) => {
    vert.innerText = e.target.value + "px";
  });

  blurRange.addEventListener("change", (e) => {
    blur.innerText = e.target.value + "px";
  });

  spreadRange.addEventListener("change", (e) => {
    spread.innerText = e.target.value + "px";
  });

  opaRange.addEventListener("change", (e) => {
    opa.innerText = e.target.value / 100;
    const color = colorInput.value;
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${opa.innerText})`;
  });

  colorInput.addEventListener("change", (ev) => {
    const color = ev.target.value;
    const opacity = opaRange.value;
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  });

  result.innerText = `box-shadow: ${hori.innerText} ${vert.innerText} ${blur.innerText} ${spread.innerText} ${rgba};`;
  box.style.boxShadow = `${hori.innerText} ${vert.innerText} ${blur.innerText} ${spread.innerText} ${rgba}`;
});
