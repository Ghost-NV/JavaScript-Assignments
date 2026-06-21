// add & delete
let arr = ["Ahmed", "Mohamed", "Sayed", "Saged"];
console.log(arr);
arr.unshift("hello", "there"); // add in first
arr.push("see", "you", "soon"); // add in last
arr.shift(); // delete first
arr.pop(); // delete last
console.log(arr);
let first = arr.shift(); // delete and keep the first
let last = arr.pop(); // delete and keep the last
console.log(arr);
console.log(`Fisrt name was : ${first}`);
console.log(`Last name was : ${last}`);

/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let arr2 = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(arr2);

console.log(arr2.indexOf("Ahmed")); // index (left to right)
console.log(arr2.indexOf("Ahmed", 2)); // index (left to right and start from index 2)

console.log(arr2.lastIndexOf("Ahmed")); // index (right to left)
console.log(arr2.lastIndexOf("Ahmed", -2)); // index (right to left and start from -2)

console.log(arr2.includes("Ahmed")); // indludes "Ahmed" ?
console.log(arr2.includes("Ahmed", 2)); // indludes "Ahmed" ? (start from index 2)

if (arr2.lastIndexOf("Osama") === -1) {
  // if element doesn't exist in array.. index = -1, here it becomes true (does not exist)
  console.log("Not Found");
}

console.log(arr2.indexOf("Osama"));
console.log(arr2.lastIndexOf("Osama"));

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/
console.log("======================================");
let arr3 = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(arr3);
console.log(arr3.reverse());
console.log(arr3.reverse()); // reverse + reverse = original
console.log(arr3.sort()); // sorting by the first int in the first number, small to greater (means 9 > 80 > 700 > 60987097 > 569873649287364)
console.log(arr3.sort().reverse()); // sort & reverse together
