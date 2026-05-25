let user = {
  // Properties
  theName: "Osama",
  theAge: 38,
  // Methods
  sayHello: function () {
    return `Hello`;
  },
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());

console.log("======================");
let user_2 = {
  theName: "Osama",
  country: "Egypt",
  "country.of": "Egypt",
  100: "Number",
};
console.log(user_2.theName);
console.log(user_2.country);
console.log(user_2["country.of"]);
console.log(user_2[100]);
console.log("======================");

let myVar = "country";
let value = "val";
let user_1 = {
  theName: "Osama",
  country: "Egypt",
  val: "Eg",
};
console.log(user_1.theName); //user_1.theName
console.log(user_1.country); //user_1.country
console.log(user_1.myVar); //user_1.country // undefined
console.log(user_1[myVar]); //user_1.country
console.log(user_1.val); //user_1.val
console.log(user_1.value); //user_1.val // undefined
console.log(user_1[value]); //user_1.val
