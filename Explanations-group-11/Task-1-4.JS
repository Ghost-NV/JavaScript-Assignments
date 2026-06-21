// Array.some(callBackFunction(Element, Index, Array) { }, thisArg)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let range = {
  min: 10,
  max: 20,
};

// ====

let check = arr.some(function (el) {
  return el > 5;
});

// ----

let val = 10;
let checker = arr.some(function (el) {
  return el > this;
}, val);

// ----

function checkVal(arr, val) {
  return arr.some(function (el) {
    return el > val;
  });
}

// ----

let checkNumberInRange = arr.some(function (e) {
  return e >= this.min && e <= this.max;
}, range);

// ----

console.log(check);
console.log(checker);
console.log(checkVal(arr, 0));
console.log(checkNumberInRange);
