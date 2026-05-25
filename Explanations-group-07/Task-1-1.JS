/*
  ## Object ##
  - Data Structures & Representations in JS
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

// Using array
let arr = [10, 20];
console.log(arr[0]); // 10
console.log(arr[1]); // 20
console.log("======================");

// Using array (with "{}")
let arr_2 = [{ Name: 10 }, { Val: 20 }];
console.log(arr_2);
console.log("======================");

// Using Map
let map = new Map([
  ["Name", 10],
  ["Val", 20],
]);
console.log(map.get("Name")); // 10
console.log(map.get("Val")); // 20
console.log("======================");

// Using Object
let obj = { Name: 10, Val: 20 };
console.log(obj.Name); // 10
console.log(obj["Name"]); // or this.. 10
console.log(obj.Val); // 20
console.log("======================");
