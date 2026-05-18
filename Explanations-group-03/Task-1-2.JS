// Conditional Ternary Operator
let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");
let result = theGender === "Male" ? "Mr" : "Mrs";
document.write(result);
console.log(theGender === "Male" ? "Mr" : "Mrs");
console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);
theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
    ? console.log("20 To 60")
    : theAge > 60
      ? console.log("Larger Than 60")
      : console.log("Unknown");

// Nullish Coalescing Operator & Logical Or
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

// let price (undefined) doesn't return in both
let price = 0; // returns as a number in "??" only
// let price = null; (doesn't return in both)

console.log(`The Price Is ${price || 200}`);
console.log(`The Price Is ${price ?? 200}`);
