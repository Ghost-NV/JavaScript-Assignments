// Arrays Methods [Slicing]
let arr4 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

console.log(arr4);
// Ahmed, Sayed, Ali, Osama, Gamal, Ameer
// ----
console.log(arr4.slice()); // include all
// Ahmed, Sayed, Ali, Osama, Gamal, Ameer
// ----
console.log(arr4.slice(1)); // start from index 1
// Sayed, Ali, Osama, Gamal, Ameer
// ----
console.log(arr4.slice(1, 3)); // start from index 1 to index 3 (not including 3)
// Sayed, Ali
// ----
console.log(arr4.slice(-3)); // strat from index -3
// Osama, Gamal, Ameer
// ----
console.log(arr4.slice(1, -2)); // strat from index 1 to index -2
// Sayed, Ali, Osama
// ----
console.log(arr4.slice(-4, -2)); // strat from index -4 to index -2
// Ali, Osama

console.log("----");
console.log(arr4);
arr4.splice(1, 2, "1", "2"); // [start , deltete , (others are the added elements)]
console.log(arr4);

/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

console.log("======================================");
let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

// concat() (add arrays in one array)
let allFriends = myFriends.concat(
  myNewFriends,
  schoolFriends,
  "Gameel",
  [1, 2],
);
console.log(allFriends);

// join() (convert array elements to string and add Separator)
console.log(allFriends.join()); // default
console.log(allFriends.join(""));
console.log(allFriends.join(" | ").toUpperCase());
