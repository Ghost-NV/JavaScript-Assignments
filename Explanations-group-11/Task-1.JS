let setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size);

console.log([...setOfNumbers][2]);

// =====

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// Needed Output
console.log([...new Set(myFriends)].sort());
