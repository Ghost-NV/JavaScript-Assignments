/*
  Object
  - Nested Object
*/

let available = true;

let User = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (User.available === true) {
      // Access Object Property
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
  check: function () {
    if (available === true) {
      // Access Global Variable
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(User.name);
console.log(User.age);
console.log(User.skills);
console.log(User.skills.join(" | "));
console.log(User.skills.at(2));
console.log(User.addresses.ksa);
console.log(User.addresses.egypt.one);
console.log(User["addresses"].egypt.one);
console.log(User["addresses"]["egypt"].one);
console.log(User["addresses"]["egypt"]["one"]);
console.log(User["addresses"]["egypt"]);
console.log(User["addresses"]);

console.log(User.checkAv());
console.log(User.check());
