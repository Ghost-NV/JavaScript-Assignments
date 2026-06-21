// ###### Number
// Number & Number Methods

// ways to print 1000000
console.log(1000000);
console.log("1000000");
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 23434343434); // same value

// toString() : convert data to srting
console.log((100).toString()); // or (100..toString)
console.log((100.1).toString()); // or (100.1.toString)

// toFixed() : takes first 2 numbers after "." , and Rounding it
console.log((100.554555).toFixed(2)); // 100.55
console.log((100.555555).toFixed(2)); // 100.56

// parseInt() : get the int in the string (more accurated)
console.log(Number("100.Osama")); // NaN
console.log(+"100 Osama"); // NaN
console.log(parseInt("100.Osama")); // 100
console.log(parseInt("100.500 Osama")); // 100
console.log(parseInt("Osama.100.Osama")); // NaN (prevents if a string was in the first)

// parseFloat() : same with float
console.log(parseFloat("100")); // 100
console.log(parseFloat("100.500")); // 100.5
console.log(parseFloat("100.500.Osama")); // 100.5

// isInteger() : checks if data is int
console.log(Number.isInteger("100")); // false
console.log(Number.isInteger(100.5)); // false
console.log(Number.isInteger(100)); // true

// isNaN() : check if data is NaN
console.log(Number.isNaN("Osama")); // false
console.log(Number.isNaN("Osama" / 20)); // true
