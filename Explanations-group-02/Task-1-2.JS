// ### Rounding ###
// round()
console.log(Math.round(99.2)); // 99
console.log(Math.round(99.5)); // 100

// ceil()
console.log(Math.ceil(99.2)); // 100
console.log(Math.ceil(99.9)); // 100
console.log(Math.ceil(-99.9)); // -99

// floor()
console.log(Math.floor(99.2)); // 99
console.log(Math.floor(99.9)); // 99
console.log(Math.floor(-99.9)); // -100

// trunc()
console.log(Math.trunc(99.5)); // 99
console.log(Math.trunc(-99.5)); // -99

// max() , min()
console.log(Math.min(10, 20, 100, -100, 90)); // -100
console.log(Math.max(10, 20, 100, -100, 90)); // 100

// pow()
console.log(Math.pow(2, 4)); // 16

// random()
console.log(Math.random()); // (random)
// Real random
let min = 10;
let max = 50;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

// ====

// abs()
console.log(Math.abs(-50)); // 50
console.log(Math.abs(50)); // 50

// ### Trigonometry ###

console.log(Math.PI); // Output: 3.141592653589793 (π)
// Formula helper function
const toRad = (deg) => deg * (Math.PI / 180);
const toDeg = (rad) => rad * (180 / Math.PI);

// sine of a number
console.log(parseFloat(Math.sin(toRad(30)).toFixed(2))); // Output: 0.5

// cosine of a number
console.log(parseFloat(Math.cos(toRad(30)).toFixed(2))); // Output: 0.87

// tangent of a number
console.log(parseFloat(Math.tan(toRad(45)).toFixed(2))); // Output: 1

//---

// arcsine (in radians) of a number
console.log(parseFloat(toDeg(Math.asin(0.5)).toFixed(2))); // Output: 30

// arccosine (in radians) of a number
console.log(parseFloat(toDeg(Math.acos(0.5)).toFixed(2))); // Output: 60

// arctangent (in radians) of a number
console.log(parseFloat(toDeg(Math.atan(1)).toFixed(2))); // Output: 45

// arctangent2 (in radians) of a number
console.log(parseFloat(toDeg(Math.atan2(10, 10)).toFixed(2))); // Output: 45
