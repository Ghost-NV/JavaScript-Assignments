// delete numbers
let text = "G1h2o3s4t";

let DelNum = text
  .split("") // NaN != NaN
  .map(function (i) {
    return isNaN(i) ? i : ""; // Main Way
    return i * 1 || i === "0" ? "" : i; //another simple way
  })
  .join("");

console.log(DelNum);

/*
## History for failed tries ##:
  return typeof parseInt(i) !== "number" && parseInt(i) !== "number"
    ? (i = "")
    : (i = i);
  if (
    i === "0" ||
    i === "1" ||
    i === "2" ||
    i === "3" ||
    i === "4" ||
    i === "5" ||
    i === "6" ||
    i === "7" ||
    i === "8" ||
    i === "9"
  ) {
    return "";
  }
  return i;
  return i * 1 || i === "0" ? "" : i; //another simple way
*/
