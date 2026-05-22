function checker(zN) {
  return function (ST) {
    return function (SA) {
      return ST === "Available"
        ? `${zN}, My Salary Is ${SA}`
        : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// ======

let arrow_fn = (zN) => (ST) => (SA) =>
  ST === "Available" ? `${zN}, My Salary Is ${SA}` : `Iam Not Avaialble`;

console.log(arrow_fn("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(arrow_fn("Ahmed")("Not Available")()); // Iam Not Avaialble
