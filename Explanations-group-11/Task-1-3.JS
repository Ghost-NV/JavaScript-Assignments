/*
  - Array.from(iterable, mapFunction, thisArg)
  - Array.copyWithin(target, start, end)
  - Array.some()
  - Array.every()
*/

console.log(Array.from("Osama"));
console.log(Array.from("12345", (n) => +n + +n));

let arr = [1, 1, 1, 2, 3];
console.log(Array.from(new Set(arr)));
// console.log([...new Set(arr)]); // advanced

// function testArgs(...arguments) {
//   return arguments;
// }

function testArgs() {
  return Array.from(arguments);
}

console.log(testArgs("Osama", "Ahmed", "sayed"));

// =============

let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]
// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]
// myArray.copyWithin(4, 6, 7); // [10, 20, 30, 40, "B", "A", "B"]
// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]
// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]
myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

console.log(myArray);

// =============
