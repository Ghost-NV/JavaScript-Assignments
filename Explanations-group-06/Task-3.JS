// Only words contains less than 5 characthers are printed
let sentence = "I Love Foood Code Too Playing Much";

let fn = sentence
  .split(" ")
  .filter(function (i) {
    return i.length < 5;
  })
  .join(" ");

console.log(fn);
