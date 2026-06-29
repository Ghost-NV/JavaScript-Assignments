let objJSON = '{"name": "Osama", "age": 42, "country": "Egypt"}';
console.log(typeof objJSON); // string
console.log(objJSON); // {"name": "Osama", "age": 42, "country": "Egypt"}

let obj = JSON.parse(objJSON);
console.log(typeof obj); // object
console.log(obj); // {name: "Osama", age: 42, country: "Egypt"}

obj["name"] = "Ghost";
obj["age"] = "16";
console.log(obj); // {name: "Ghost", age: "16", country: "Egypt"}

let objJSON2 = JSON.stringify(obj);
console.log(typeof objJSON2); // string
console.log(objJSON2); // {"name":"Ghost","age":"16","country":"Egypt"}

// ===========

// LIFO

// FIFO
setTimeout(() => {
  console.log("Web API method - 1");
}, 0);
setTimeout(() => {
  console.log("Web API method - 2");
}, 0);

function one() {
  console.log("one");
}

function two() {
  one();
  console.log("two");
}

function three() {
  two();
  console.log("three");
}

three();
three();
console.log("============");
console.log(1);
console.log(2);
console.log(3);

// synchronous (Single Thread) -> example: alert
// Asynchronous (Single-thread) -> example: setTimeout, fetch
//  Multi-thread -> example: Web Workers

// Note : In Most of time We use Asynchronous
// sometimes we use Synchronous in cases like Array Methods, DOM, form validation, math, etc
// JS is a Single-Threaded Language

// Synchronous go directly to Call Stack and be executed
// Asynchronous go to Call Stack then be redirected to Web API, then to Callback Queue and wait till Call Stack is empty
// Event Loop checks if Call Stack is empty, then pushes the next item from Callback Queue to Call Stack

// Callback Queue:
// Microtask Queue -> has the priority immediately after Callback Queue
// Macrotask Queue -> excuted after Microtask Queue, line by line
