let theName = "Elzero";

// ----

console.log([...theName]);
console.log(Array.from(theName));
console.log(theName.split(""));

let nameA = [];
for (let i = 0; i < theName.length; i++) {
  nameA.push(theName[i]);
}
console.log(nameA);

let nameB = [];
for (let i of theName) {
  nameB.push(i);
}
console.log(nameB);

// Needed Output
["E", "l", "z", "e", "r", "o"];

// ? other solutions

let nameC = [];
new Set(theName).forEach((char) => nameC.push(char));
console.log(nameC);

let nameD = Object.values(theName);
console.log(nameD);

let nameE = Object.assign([], theName);
console.log(nameE);

let nameF = [];
for (let index in theName) {
  nameF.push(theName[index]);
}
console.log(nameF);

let nameG = [];
let counter = 0;
while (counter < theName.length) {
  nameG.push(theName[counter]);
  counter++;
}
console.log(nameG);

let nameH = [];
let count = 0;
do {
  nameH.push(theName[count]);
  count++;
} while (count < theName.length);
console.log(nameH);

let nameI = theName.match(/./g);
console.log(nameI);
