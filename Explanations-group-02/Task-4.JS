let userName = "Elzero";
console.log(userName.at(3)); // e
console.log(userName.charAtat(3)); // e
console.log(userName[3]); // e
console.log(userName.substr(3, 1)); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.slice(3, 4)); // e
console.log(userName.at(3).repeat(3)); // eee

// =======

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.endsWith("z", 3)); // True
console.log(word.startsWith("e", 3)); // True
console.log(word.includes("o", 5)); // True
