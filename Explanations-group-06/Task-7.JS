// without .join(), print "ElZERO"

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let result = "";
let fn = removeChars
  .filter(function (i) {
    return i !== "@";
  })
  .reduce(function (acc, curr) {
    return (result += curr);
  }, "");
console.log(fn);
