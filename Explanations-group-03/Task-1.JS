let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

console.log("====================");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]
