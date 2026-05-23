let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let fn = theBiggest.reduce(function (acc, curr) {
  return acc.length >= curr.length ? acc : curr;
  return acc.length <= curr.length ? curr : acc;
});

console.log(fn);
