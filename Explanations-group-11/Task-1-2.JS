/* 
  Map vs Object
  - size

  - set
  - get
  - delete
  - clear
  - has
*/

let object = { 10: "Num", 10: "Str" };
console.log(object);

let map = new Map()
  .set("10", "Str")
  .set(10, "Num")
  .set(true, "Bool")
  .set(null, "Null")
  .set(() => {}, "func")
  .set({ 10: "Num", 10: "Str" }, "func");
console.log(map);

// =====

let antherMap = new Map([
  ["Name", 10],
  ["Val", 20],
]);

console.log(antherMap.get("Name"));
console.log(antherMap.has("Name"));
console.log(antherMap.delete("Name"));
console.log(antherMap.size);
console.log(antherMap.clear());
console.log(antherMap.size);

// ====

let user = { name: "Name" };
let myMap = new Map();

myMap.set(user);

user = null;

console.log(myMap);

// -----

let myUser = { name: "Name" };
let myWeakMap = new WeakMap();

myWeakMap.set(myUser);

myUser = null;

console.log(myWeakMap);
