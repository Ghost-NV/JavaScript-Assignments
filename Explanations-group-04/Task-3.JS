let index = 10;
let jump = 2;

for (;;) {
  // Write Your Code Here
  if (index > jump) {
    console.log(index);
  } else {
    break;
  }
  index -= jump;
}

// Output
// 10;
// 8;
// 6;
// 4;

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let number = true;
number--;

for (let i = number; i < friends.length; i++) {
  if (friends[i][number] !== "A") {
    console.log(friends[i]);
  }
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
