let arr = [1, 2, "Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

let arry = [];

let num = 5;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr.at[i] === "string") {
    console.log(arr.at[i]);
  }
  arry += arr.at[i];
  if (i !== arr.length - 1) {
    arry += ", ";
  }
}

console.log(arry);
console.log("hello ".repeat(5)); // repeat without loop

/* 
  - nested Loop
  - continue
  - break
  - label
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(` - ${colors[j]} `);
    if (colors[j] === "Green" && i < products.length - 2) {
      continue mainLoop;
      // break nestedLoop;
    }
  }
}

// While loop

let index = 0;

while (index < products.length) {
  console.log(products[index]);
  index += 1;
}

// Do while loop

// "check" first
let i = 0;
while (false) {
  // ! does not work
  console.log(i);
  i++;
}
console.log(i);

console.log("=".repeat(10)); // ===========

// "DO" first
let j = 0;
do {
  console.log(j);
  j++;
} while (false);
console.log(j);
