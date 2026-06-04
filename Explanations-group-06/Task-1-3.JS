// ### Iterator Methods ###
// Intro:
let nums = [10, 20, 15, 30];
let add = nums.reduce(function (acc, current, index, arr) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log(`#############`);
  return acc + current;
}, 5);
// 'this' arrgument can be used in regular functions only
console.log(add);

const numbers = [10, 20, 30, 40]; // original array

// 'num' is the current element in the array
// forEach() : Use elements in the array and Do an action for each of them, doesn't return anything, Break' Won't Break The Loop
numbers.forEach((num) => console.log(num ** 2)); // 100, 400, 900, 1600
console.log(numbers);

// map() : creates a new array conains element after Doing an aciton on all elements
const doubled = numbers.map((num) => num * 2); // [20, 40, 60, 80]
console.log(doubled);

// filter() : creates a new array, only conatains elements that pass the condition
const bigNumbers = numbers.filter((num) => num > 25); // [30, 40]
console.log(bigNumbers);

// reduce() : reduces an array to a single value
const total = numbers.reduce((Total, num) => Total + num, 0); // Total = 100
console.log(total);

// some() : returns true if at least one element pass the condition
const hasBig = numbers.some((num) => num > 35); // true
console.log(hasBig);

// every() : returns true if all elements pass the condition
const allBig = numbers.every((num) => num > 35); // false
console.log(allBig);

// find() : returns the first element that pass the condition
const firstBig = numbers.find((num) => num > 25); // 30
console.log(firstBig);

// findIndex() : returns the index of the first element that pass the condition
const firstBigIndex = numbers.findIndex((num) => num > 25); // 2
console.log(firstBigIndex);

// flatMap() : creates a new array mixed with original array, works like map() with flat()
const oldFlatMapped = numbers.map((num) => [num, num ** 2]).flat(); // [10, 100, 20, 400, 30, 900, 40, 1600]
const flatMapped = numbers.flatMap((num) => [num, num ** 2]); // [10, 100, 20, 400, 30, 900, 40, 1600]
console.log(oldFlatMapped);
console.log(flatMapped);
