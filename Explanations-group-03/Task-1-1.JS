// ###### Conditions
// Comparison Operators
console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed");

// Logical Operators
console.log(true); // true
console.log(!true); // false
console.log(!(10 == "10")); // false
console.log(!(10 === "10")); // true
console.log(!(10 !== "10")); // false

console.log(10 == "10" && 10 > 8 && 10 > 50); // false
console.log(10 == "10" && 10 > 8 && !(10 > 50)); // true
console.log("hello");

console.log(10 == "10" || 10 > 80 || 10 > 50); // true
console.log(!(10 == "10") || !(10 > 80) || 10 > 50); // true
console.log(!(10 == "10") || 10 > 80 || 10 > 50); // false

// if condition & nested condition

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}
console.log(price);

if (discount === true) {
  price -= discountAmount;
} else if (country === "Egypt") {
  if (student === true) {
    price -= discountAmount + 30;
  } else {
    price -= discountAmount + 10;
  }
} else {
  price -= 10;
}
console.log(price);

// switch
let day = "A";

switch (day) {
  default:
    console.log("Unknown Day");
    break;
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
}

// using template literal

console.log(`You ${score >= 60 ? "passed" : "failed"} with ${score}%`);
