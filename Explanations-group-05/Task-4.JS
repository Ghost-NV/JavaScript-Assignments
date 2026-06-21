function multiply(...params) {
  let result = 1;
  for (let i = 0; i < params.length; i++) {
    if (typeof params[i] !== "string") {
      result *= Math.floor(params[i]);
    }
  }
  return result;
}

console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000
console.log(multiply("X", "Y", 5, 2.7)); // 10
console.log(multiply(1.1, 2.9, 3.5)); // 6
