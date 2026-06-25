/*
  class NameClass {
    - properties (in TypeScript)
    - constructor
    - Methods
  }
  --> and all of them considered as Functions
*/

class User {
  // any '=' in JS is a property
  constructor(id, username, salary) {
    // constructor is a Function
    this.i = id;
    this.u = username;
    this.s = salary || 0;
    this.UserID = () => {
      return `Your ID Is "${this.i}"`;
    };
  }

  getBonus() {
    return `Your Salary Is "${this.s * 0.1}"`;
  }

  WelcomeUser = () => {
    // read as 'this.WelcomeUser = () => {}' (property)
    return `Hello "${this.u}"`;
  };
  Update(newName) {
    this.u = newName;
  }
}

console.log(typeof User); // Function, cuz original was 'function User(id, username, salary) {...}', so that Class / Method /

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(200, "Ghost", 1000);
let userThree = new User(200, "Saged", 1000);

console.log(userOne);
console.log(userOne.i);
console.log(userOne.UserID()); // Constructor Property Function
console.log(userOne.WelcomeUser()); // Arrow Function Property
console.log(userOne.getBonus()); // method
console.log(userOne.s);
console.log(userOne.u);

console.log(userTwo);
console.log(userTwo.u);

console.log(userThree);
console.log(userThree.u);
userThree.Update("NewName");
console.log(userThree.u);

let NumberOne = 5;
let NumberTwo = new Number(5);

console.log(typeof NumberOne);
console.log(typeof NumberTwo);

// Check Root of Prototype Chain (So it's better than '.constructor')
console.log(userOne instanceof User);
console.log(NumberOne instanceof Number);
console.log(NumberTwo instanceof Number);

// Check if this Object defintely made with this Class
console.log(NumberOne.constructor === Number);
console.log(NumberTwo.constructor === Number);
