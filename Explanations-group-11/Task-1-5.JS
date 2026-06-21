// Array.every(callBackFunction(Element, Index, Array) { }, thisArg)

const locations = {
  20: "Place 1",
  30: "Place 2",
  // 10: "Place.3",
  40: "Place 4",
};

let mainLocation = 15;

let check = Object.keys(locations)
  .map((e) => +e)
  .every(function (e) {
    return e > this;
  }, mainLocation);

console.log(check);
