const object = {
  name: "Osama",
  age: 36,
  country: "Egypt",
};

// let name = object.name;
// let age = object.age;
// let country = object.country;

// ({ name, age, country } = object);
// const { name, age, country } = object;

// To skip we have 2 ways: comma or object destructuring By property name
// const { name, , country } = object;
const { name: Aname, country } = object;
console.log(Aname);
console.log(country);

// ----
const [A = 1] = []; // A is 1
const { B = 2 } = { B: undefined }; // B is 2
const { C = 2 } = { C: null }; // C is null
const { D = 2 } = { D: 10 }; // D is 10
console.log(A); // 1
console.log(B); // undefined
console.log(C); // null
console.log(D); // 10

const Mainobject = {
  a: 1,
  uAlt: "Main",
  oAlt: "Main",
  cAlt: 3,
  dAlt: 4,
  extra: "Extra",
};

const {
  a: AltValName,
  u: uAlt = "New",
  o: oAlt = "New",
  cAlt = 9,
  dAlt,
  ...others
} = Mainobject;

console.log(others); // { uAlt: "Main", oAlt: "Main", extra: 5 }
console.log(others.extra); // Extra
console.log(Mainobject.extra); // Extra
console.log(AltValName); // 1
console.log(uAlt); // New
console.log(Mainobject.uAlt); // Main
console.log(oAlt); // New
console.log(Mainobject.oAlt); // Main
console.log(cAlt); // 3
console.log(dAlt); // 4
// console.log(a); // error

// ----
const obj = {
  chosenA: 1,
  b: { c: 2 },
  tomtom: 10,
  c: 5,
};

const {
  b: { c: chosenA },
  chosenA: tomtom,
} = obj;

console.log(tomtom); // 1
console.log(chosenA); // 2

const { tomtom: c, tomtom: d } = obj;
console.log(c); // 10
console.log(d); // 10

const {
  b: { AltC = chosenA },
  // b: { c: AltA }, -> AltA = 2
  AltA = c, // -> AltA = 10
} = obj;

console.log(AltC); // 2
console.log(AltA); // 10

const {
  chosenA: chosenB,
  b: { c: chosenD },
  c: chosenE,
} = obj;
console.log(chosenB); // 1
console.log(chosenD); // 2
console.log(chosenE); // 5
