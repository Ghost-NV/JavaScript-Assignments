let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
[1, 2, 3, 4, 5, 6];

let newArr = numsOne.concat(numsTwo);

let newArr2 = [];
let fn = (e) => newArr2.push(e);
numsOne.forEach(fn);
numsTwo.forEach(fn);

let newArr3 = [...numsOne, ...numsTwo];

console.log(newArr);
console.log(newArr2);
console.log(newArr3);
