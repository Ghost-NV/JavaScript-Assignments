let member = {
  name: "Saged",
  age: 16,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
  },
};
console.log(member.fullDetails());
// My Name Is Saged, My Age Is 16, I Live in Egypt

console.log("=".repeat(20));

let a = 1;
let threeNums = { b: 2, c: 3, d: 4 };
let twoNums = { e: 5, f: 6 };

let finalObject = Object.assign({ a, threeNums, twoNums });
console.log(finalObject); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
