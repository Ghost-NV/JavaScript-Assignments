let myString = "EElllzzzzzzzeroo";

// Elzero

let fn = myString
  .split("")
  .filter(function (i, idx, arr) {
    return arr[idx] !== arr[idx + 1];
  })
  .join("");

console.log(fn);
