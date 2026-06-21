let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start; i < mix.length; i++) {
  if (mix[i] === mix[i].toString() || mix[i] === mix[start]) {
    continue;
  }
  console.log(mix[i]);
}
// typeof mix[i] === "string" => mix[i] === mix[i].toString()
// Output
// 2
// 3
// 4

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (friends[index][counter] !== "A") {
    console.log(friends[index]);
  }
  index++;
}

// Output
// "1 => Sayed"
// "2 => Mahmoud"
