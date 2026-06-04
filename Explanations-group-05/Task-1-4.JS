// arrow function (doesn't have parameters)
// ways to write an arrow function
// instead of 'function' write '=' + '>'

// let arrow_fn = (num) => {return num;};
// let arrow_fn = (num) => num; // can also delete '{}' in same condition
// let arrow_fn = num => num; // can delete '()' if there's one parameter
// let arrow_fn = _ => 10; // can use '_' instead of '()' if there's no parameters

let fn = function (num) {
  return num;
};

let arrow_fn = (num) => {
  return num;
};

console.log(fn());
console.log(arrow_fn());

// Global and local scope
// Block scope (If , switch , for , function , while.. any {} within it let or const is)
// Block scope : any {} within it let or const is Block scope (excepte 'object literal')

let a = 1;

function showText() {
  let a = 10;
  console.log(`Function - From Local ${a}`);
}

console.log(`From Global ${a}`);
showText();

let x = 10;

if (true) {
  let x = 50;
  console.log(`From If Block - ${x}`);
}

console.log(`From Global - ${x}`);

b();
function b() {
  console.log(`b`);
}

// var and function are Execution Context (so you can put them anywhere)

// var -> go to Variable Object (VO)
console.log(c); // undefined (hoisting)
var c = 10;
console.log(c); // 10

// function -> go to memory before excution
sayHi(); // "Hi"
function sayHi() {
  console.log("Hi");
}

// ### functions types

function sum() {
  console.log("This's function declared");
}

(function () {
  console.log("This's function IIF");
})();

sunny = () => {
  console.log("This's function Arrow");
};

// Anonymous Function

let i = function () {
  console.log("This's Anonymous Function");
};

const sunn = () => {
  console.log("This's Anonymous Arrow Function");
};
