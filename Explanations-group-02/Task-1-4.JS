// ### String Search Methods
let a = "Elzero Web School";

// indexOf() , lastIndexOf()
console.log(a.indexOf("Web")); // 7
console.log(a.indexOf("Web", 8)); // -1
console.log(a.indexOf("o")); // 5
console.log(a.lastIndexOf("o")); // 15

// includs() , default end is 0
console.log(a.includes("Web")); // true
console.log(a.includes("Web", 7)); // false
console.log("====");

// startsWith() , default end is 0
console.log(a.startsWith("E")); // true
console.log(a.startsWith("E", 2)); // false
console.log(a.startsWith("zero", 2)); // true
console.log(a.startsWith("Elzero", 2)); // false
console.log(a.startsWith("Elzero")); // = true ("Elzero", 0)
console.log(a.startsWith("School", 11)); // true
console.log("====");

// endsWith() , default end is full length
console.log(a.endsWith("School")); // true
console.log(a.endsWith("ool")); // true
console.log(a.endsWith("ool", 17)); // true
console.log(a.endsWith("ool", 16)); // false
console.log(a.endsWith("Elzero")); // false
console.log("====");
