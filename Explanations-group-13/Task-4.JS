let myStr = "Elzero";
String.prototype.addLove = function () {
  return `I Love Elzero Web School`;
};
console.log(myStr.addLove()); // I Love Elzero Web School

// ==================

const myObj = {
  username: "Elzero",
  id: 100, // enumerable: false
  score: 1000, // writable: false
  country: "Egypt",
};

Object.defineProperty(myObj, "id", {
  enumerable: false,
});

Object.defineProperty(myObj, "score", {
  writable: false,
});

Object.defineProperty(myObj, "country", {
  enumerable: false, // prevent being shown in loop
  get() {
    return undefined; // undefined
  },
  set(val) {}, // prevent edit
});

// delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output:
// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
