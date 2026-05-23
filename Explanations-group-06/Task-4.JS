// ignore numbers
let ignoreNumbers = "Elz123er4o";

let func = ignoreNumbers
  .split("")
  .filter(function (el) {
    return isNaN(el);
  })
  .join("");

console.log(func);
