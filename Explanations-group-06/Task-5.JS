// Filter and Multiply
let mix = "A13BS2ZX";

let functe = mix
  .split("")
  .filter(function (el) {
    return !isNaN(el);
  })
  .map(function (i) {
    return i * i;
  })
  .join(" ");
console.log(functe);
