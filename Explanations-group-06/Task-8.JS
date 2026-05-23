let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let result = "";
let fn = mix
  .map(function (i) {
    return isNaN(i) ? i : "";
  })
  .reduce(function (acc, curr) {
    return (result += curr);
  }, "");

console.log(fn);
