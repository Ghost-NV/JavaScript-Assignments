// ###### Array
// intro

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]]; // Nested array

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`${myFriends[3][1][2]}`);
console.log(myFriends);

console.log("======");
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

console.log(Array.isArray(myFriends));

myFriends = "Ameer";
console.log(myFriends);
console.log(Array.isArray(myFriends));

console.log("======");

// length
let arr = ["Ahmed", "Mohamed", "Sayed", "Saged"];
console.log(arr);
console.log(arr.length);
arr[arr.length - 1] = "updated";
arr[arr.length] = "Added";
console.log("======");

console.log(arr);
arr.length += 1;
console.log(arr);
arr.length -= 2;
console.log(arr);
arr.length += 1;
console.log(arr);
