"use strict";

console.log(this);
console.log(this === window);

let myVar = 100;

function sayHello() {
  return this; // In strict mode, 'this' is undefined in a regular function
}
console.log(sayHello());

console.log(sayHello() === window);

document.getElementById("show").onclick = function () {
  console.log(this);
};

/*
  How to make 'this' work in a function in strict mode
  - Non-Strict Mode (default)
  - Strict Mode ("use strict")
*/

// Solution 1 (basic): Use a variable to store the reference to 'this'
// todo.. Note : does not work with arrow function because it does not have its own 'this'
let user_1 = {
  name: "Ali",
  sayHello_1: function () {
    console.log(this.name);
  },
};
user_1.sayHello_1();
// Solution 2 (advanced): Use the bind method to bind 'this' to the function
function sayHello_2() {
  console.log(this.name);
}
let user_2 = { name: "Mona" };
sayHello_2.call(user_2);
