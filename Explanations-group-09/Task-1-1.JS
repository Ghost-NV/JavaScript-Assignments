/*
  - alert
  - confirm
  - prompt
*/

window.alert("Test");
this.alert("Test");
alert("Test");

let confirmMsg = confirm("Are You Sure?");

console.log(confirmMsg);

if (confirmMsg === true) {
  console.log("Item Deleted"); // true
} else {
  console.log("Item Not Deleted"); // false
}

let promptMsg = prompt("Are You Sure?", "Default Value"); // second argument is default value (optional)
console.log(promptMsg); // in flase => null, in true => "returns a value"
