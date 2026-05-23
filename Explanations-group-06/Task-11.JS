let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"]; // [-1, -10, 10, 20, -5, -3]
let fn = numsAndStrings.filter((i) => !isNaN(i)).map((i) => -i);
console.log(fn);

// ---

let nums = [2, 12, 11, 5, 10, 1, 99]; // 500
let func = nums.reduce(function (acc, curr) {
  return curr % 2 !== 0 ? acc + curr : acc * curr;
}, 1);
console.log(func);
