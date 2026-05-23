// swapcase(With Map)
let swapcase = "gHOST";

let SwapByMap = swapcase
  .split("") // to work as an array
  .map(function (i) {
    return i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase();
  })
  .join(""); // to make non-spilt array

console.log(SwapByMap);

// Invert pos to neg & neg to pos

let invert = [0, 1, 2, -1, -2];
let InvertNum = invert.map((a) => -a).join(" | ");
console.log(InvertNum);
