/*
  Higher Order Functions
  -> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.
  --- Map Returns A New Array

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => current element in array.
  - Index => index of current element in array.
  - Array => Current Array
*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

// Using Map()

// regular way
let addSelf = myNums.map(function (element, index, arr) {
  return element + element;
}, 10);

// arrow-fn way
let addarr = myNums.map((a) => a + a);

// fn way
function addition(ele) {
  return ele + ele;
}
let add = myNums.map(addition);

// ### results:
console.log(newArray);
console.log(addSelf);
console.log(addarr);
console.log(add);
