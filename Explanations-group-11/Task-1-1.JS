/* 
  Set vs Array
  - size

  - add
  - delete
  - clear
  - has
*/

data = [1, 1, 1, 2, 3];

// unique = new Set(data);
// unique = new Set([1, 1, 1, 2, 3]);
unique = new Set().add(1).add(1).add(2).add(3);

unique.add(4);

console.log(`Is 3 exists: ${unique.has(3)}`);
console.log(`Is 3 exists: ${unique.delete(3)}`);

unique.delete(2);
console.log(unique);
console.log(unique.size);

unique.clear();
console.log(unique);
console.log(unique.size);

// ==============================

// WeakSet stores objects only, reference is weak

let user = { name: "Name" };
let mySet = new set();

mySet.add(user);

user = null;

console.log(mySet);

// ------

let myUser = { name: "Name" };
let myWeakSet = new WeakSet();

myWeakSet.add(myUser);

myUser = null;

console.log(myWeakSet);
