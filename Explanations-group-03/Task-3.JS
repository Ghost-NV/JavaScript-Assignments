let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// sol1
console.log(haystack.includes(needle) ? needle : "Not found");

// sol2
console.log(haystack.indexOf(needle) !== -1 ? needle : "Not found");

// sol3 (constant soultion)
if (needle == haystack[1]) {
  console.log(needle);
}

console.log("===================");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here (never use numbers)

arr1.shift();
arr1.shift();
arr2.shift();
arr2.shift();
let temp = false;
temp++; // 1
allArrs = allArrs.concat(arr2[--temp], arr1, arr2[++temp]);
console.log(allArrs.join("").toLowerCase()); // fxy
