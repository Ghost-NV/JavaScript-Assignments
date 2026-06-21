let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

console.log("================");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words[words[0].indexOf("o") + words[0].indexOf("o")][0]
    .slice(words[0].indexOf("o") + words[0].indexOf("o"))
    .toUpperCase(),
); // ZERO
// `words[0].indexOf("o") + words[0].indexOf("o")` ===> 1 + 1 = 2
// words[0].indexOf("o") * 2 === +true === 2
