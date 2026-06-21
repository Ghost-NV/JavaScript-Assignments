let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

// Needed Output
let map = new Map(Object.entries(myInfo));

console.log(map);
console.log(map.size);
console.log(map.has("role"));
