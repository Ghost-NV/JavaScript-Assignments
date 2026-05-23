/*
  - reduce()
  - gives 1 value in output using an array, 'filter' filters values by a condition in an array to a new array, 'map' makes a new array;
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - if there's no initialValue.. first Accumulator = first element in the array as default...
  - if there's an initialValue.. it start with it like adding a new element
*/
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

console.log(add);

/*
  - forEach()
  --- method executes a provided function once for each array element.
  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  --- Doesn't Return Anything [Undefined]
  --- 'Break' Won't Break The Loop
*/

// (don't have enough info about it yet)...
