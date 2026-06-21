let start = 1;
let end = 6;
let breaker = 2;

for (let i = start; i <= end; i += start) {
  console.log(i);
  console.log("-- " + breaker);
  console.log("-- " + breaker * breaker);
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

let start = 0;
let swappedName = "elZerO";
let result = "";

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    result += swappedName[i].toLowerCase();
  } else if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  }
}
console.log(result);

// Output
// "ELzERo"
