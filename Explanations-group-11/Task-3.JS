// ! failed parly

let theNumber = 100020003000;

let set = new Set([...theNumber.toString().trim()]);
set.delete("0");

console.log(...set);

// Needed Output : 123

// ? true soltions

console.log(+[...new Set(theNumber + "")].sort().join("").slice(1)); // Number
