let font = document.getElementById("fontSelector");
let color = document.getElementById("colorSelector");
let size = document.getElementById("sizeSelector");
let box = document.getElementById("previewBox");

function updateStyle(property, value) {
  box.style[property] = value;
  localStorage.setItem(property, value);
}

font.addEventListener("change", () => updateStyle("fontFamily", font.value));
color.addEventListener("change", () => updateStyle("color", color.value));
size.addEventListener("change", () => updateStyle("fontSize", size.value));

if (localStorage.getItem("fontFamily")) {
  font.value = box.style.fontFamily = localStorage.getItem("fontFamily");
}
if (localStorage.getItem("color")) {
  color.value = box.style.color = localStorage.getItem("color");
}
if (localStorage.getItem("fontSize")) {
  size.value = box.style.fontSize = localStorage.getItem("fontSize");
}
