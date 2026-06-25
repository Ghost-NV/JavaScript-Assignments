"use strict";

// All descriptors are false by default
const obj = {};
Object.defineProperty(obj, "A", {
  enumerable: true, // visible in 'for in loop', 'Object.keys(obj)', 'JSON.stringify(obj)', can use Object.assign()
  // enumerable: false, // invisible, only visible in 'obj.A' and 'Object.getOwnPropertyNames(obj)'

  configurable: true, // removable
  // configurable: false, // unremovable, unredefinable, can't change it or 'writable' to true, can't change enumerable at all

  writable: true, // editable
  // writable: false, // Read-only, if you try to change it, it'll throw an error (in strict mode)

  value: 1, // undefined by default
});

// to keep descriptors Safe -> use 'Object.create(null)' to avoid prototype pollution to make all of descriptors false by default
const descriptor = Object.create(null);
descriptor.value = 2;
Object.defineProperty(obj, "B", descriptor);

// Locking the object (can't reach Nested Objects inside)
Object.seal(obj); // keep 'writable' to true, change 'configurable' to false, can't add/delete
Object.freeze(obj); // absolutely immutable, change all descriptors to false, can't add/delete or even edit

// All descriptors are true by default
const NormalObject = { c: 3 };
console.log(Object.getOwnPropertyDescriptor(NormalObject, "c"));

console.log(obj); // Output: { A: 1, B: 2 } (Note: 'B' won't show in console if it's enumerable: false, but it exists)
console.log(Object.getOwnPropertyDescriptor(obj, "A"));

// ======================

const user = {};

Object.defineProperties(user, {
  firstName: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: undefined,
  },

  id: {
    value: 9942,
  },

  salary: Object.assign(Object.create(null), {
    value: 5000,
  }),
});

user.firstName = "Ghost";
console.log(user.firstName); // Output: Ghost
console.log(user.id); // Output: 9942
console.log(user.salary); // Output: 5000
console.log(Object.getOwnPropertyDescriptors(user));
