// Anonymous Function is used for one-time used functions

// basic example for Anonymous Function
let calculator = function (num1, num2) {
  return num1 + num2;
};
console.log(calculator(10, 20));

/* 
  - remember to add :
      <button id="show">button 1</button>
      <button id="showw">button 2</button>
    in you html file to use examples below
*/
// another example
document.getElementById("show").onclick = function () {
  console.log("by Anonymous Function");
};

// another example using another function in an Anonymous Function
function sayHello() {
  console.log("using a function in an Anonymous Function");
}
document.getElementById("showw").onclick = sayHello;

setTimeout(function elzero() {
  // (a functoin use a duration by miliseconds)
  console.log("Good");
}, 2000);
