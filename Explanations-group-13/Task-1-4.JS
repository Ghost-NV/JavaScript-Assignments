/* Inheritance + Encapsulation + prototype */

class User {
  #u; // Define Private Property before Encapsulation
  constructor(id, username) {
    this.i = id;
    this.#u = username; // Encapsulation
  }
  WelcomeUser() {
    return `Hello "${this.#u}"`;
  }
}

class UserExtend extends User {
  constructor(id, username, salary) {
    super(id, username);
    this.s = salary;
  }
  WelcomeUser() {
    // return `Hello "${this.#u}" From UserExtend Class`; // Error
    return `${super.WelcomeUser()}, ID: ${parseInt(this.i)} From UserExtend`;
  }
}

let user = new User(100, "Ghost");
console.log(user.WelcomeUser());

let userExtend = new UserExtend("100 id", "Elzero", 5000);
console.log(userExtend.WelcomeUser());

let string = "Hello";
console.log(String.prototype);
console.log(string.length); // length is a property of the prototype in String class

// prototype
UserExtend.prototype.WelcomeUser = function () {
  return `Welcome, your Salary is ${this.s}`;
};

console.log(userExtend.WelcomeUser());

console.log(User.prototype);
console.log(user.constructor.prototype);

console.log(Object.prototype);
Object.prototype.Hello = "Hello";
console.log(Object.prototype);

// Adding Method to prototype
String.prototype.DotAfter = function () {
  return `${this}.`;
};
console.log(String.prototype);

console.log("Hello".DotAfter());
