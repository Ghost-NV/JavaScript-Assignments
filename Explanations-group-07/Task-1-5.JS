let user_1 = { age: 20 }; // Way-1
let user_2 = new Object({ age: 20 }); // Way-2
let user_3 = Object.create({}); // Way-3
let user_4 = Object.assign({}, user_2); // Way-4
user_3.age = 20;

console.log(user_1);
console.log(user_2);
console.log(user_3);
console.log(user_4);
console.log("----------------------------------");

user_1.age = 38; // update property
user_1["country"] = "Egypt"; // new property

user_1.sayHello = function () {
  // new function
  return `Hello`;
};

console.log(user_1);
console.log(user_1.age);
console.log(user_1.country);
console.log(user_1.sayHello());
console.log("----------------------------------");

let user = {
  age: 20,
  doubleAge: function () {
    return this.age * 2; // => user.age (this refers to Current object, dynamic variable)
    return user.age * 2; // same as above but causeds an error if name changed because it's non-dynamic variable
  },
};
console.log(user);
console.log(user.age);
console.log(user.doubleAge());
console.log("----------------------------------");

// Object.create() -> create new object with specified prototype object and properties
let copyObj = Object.create(user); // inheritance
copyObj.age = 50; // update property (default was 20)

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());
console.log("----------------------------------");

// Object.assign() -> copy values of one or more source objects
let mergedObj = Object.assign({}, user, { country: "Egypt" });
mergedObj.age = 30; // update property (default was 20)

console.log(mergedObj);
console.log(mergedObj.age);
console.log(mergedObj.doubleAge());
console.log(mergedObj.country);
