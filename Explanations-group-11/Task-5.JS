function solve(arr) {
  let index = 0;

  for (let i of arr) {
    if (typeof i === "number") index++;
  }

  index = index - 1;

  let newArr = [];
  for (let i of arr) {
    if (typeof i === "number") {
      if (typeof arr.filter((e) => typeof e === "string")[index] == "string") {
        newArr.unshift(arr.filter((e) => typeof e === "string")[index]);
        index--;
      }
    } else {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(solve([6, "A", 2, "B", "C", "B", "C", 2, 2, 2]));

// ? better solution

function solveBetter(arr) {
  let letters = arr.filter((el) => typeof el === "string");

  let numCount = arr.filter((el) => typeof el === "number").length;

  return [...letters.slice(0, numCount), ...letters];
}

console.log(solveBetter([6, "A", 2, "B", "C", "B", "C", 2, 2, 2]));
