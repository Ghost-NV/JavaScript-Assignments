let user = {
  // Properties
  theName: "Osama",
  theAge: 38,
  // Methods
  mltpy: function (num) {
    return num ** 3;
  },
  mixed: function (num) {
    return this.theAge - num; // return user.theAge - num;
  },
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.mltpy(3));
console.log(user.mixed(18));

console.log("======================");

// some uses for '[]'
let user_2 = {
  theName: "Osama",
  country: "Egypt",
  "country.of": "Egypt",
  100: "Number",
};
console.log(user_2.theName);
console.log(user_2.country);
console.log(user_2["country.of"]);
// First : using a number as a property
console.log(user_2[100]); // Number
console.log("======================");

let myVar = "country";
let value = "val";
let user_1 = {
  theName: "Osama",
  country: "Egypt",
  val: "Eg",
};
console.log(user_1.theName); // user_1.theName
console.log(user_1.country); // user_1.country
console.log(user_1.val); // user_1.val
console.log(user_1.value); // user_1.val // undefined
// Second : using global variable as an external property
console.log(user_1[value]); // user_1.val (get the value of the [variable] )

let keyName = "status";
let userN = {
  [keyName]: "Active",
};
// Third : Adding a global variable as a property & updating it
console.log(userN.status);
