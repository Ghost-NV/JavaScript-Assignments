let myArray = ["E", "l", "z", ["e", "r"], "o"]; // Elzero

let fn = myArray.reduce(function (acc, curr) {
  if (typeof curr === "object") {
    for (let i = 0; i < curr.length; i++) {
      acc += curr.at(i);
    }
  } else {
    acc += curr;
  }
  return acc;
}, "");
console.log(fn);

// Global solution (without higher order functions) for arrays like [["a", "v", ["c", [[["r"], "k"], "o"]]]];
// function flatten(arr) {
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "object") {
//       result += flatten(arr[i]);
//     } else {
//       result += arr[i];
//     }
//   }
//   return result;
// }
// let fn = flatten(myArray);
// console.log(fn);
// console.log(flatten(myArray)); // or

// ! My first-partly-failed try :
// let result = "";
// let fn = myArray.reduce(function (acc, curr) {
//   if (typeof curr === "object") {
//     for (let i = 0; i < curr.length; i++) {
//       result += curr.at(i);
//     }
//   }
//   return (result += curr);
// }, "");
