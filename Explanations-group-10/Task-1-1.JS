let a = "A";
let b = "B";
let c = "C";
let d = "D";

[a, b, c, d] = [d, b, c, a];
console.log(a); // D

// ----
const friends = ["Ahmed", "Eman", "Gamal", "Osama", "Rymas"];
[friends[0], friends[4]] = [friends[4], friends[0]];
// ["Rymas", "Eman", "Gamal", "Osama", "Ahmed"]

[a, b = "AltValue", c = "AltValue", , ...extraValues] = friends;
// , continue value , // b = "alt" ==> if array length = 1, it takes Alt value of b // extraValues => takes other values remaining
console.log(a); // Rymas
console.log(extraValues); // ["Ahmed"]

// ----
let myFriends = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["Shady", "Amr", ["Mohamed", "Gamal"]],
];

let Y = 0;
let W = 0;
[, , , [W, , [, Y]]] = myFriends;
console.log(Y);
console.log(W);
