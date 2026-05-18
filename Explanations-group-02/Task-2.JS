console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

// =======

let myVar = "100.56789 Views";
console.log(+parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// =======

let num = 10;
console.log(num.toString().length); // 2
