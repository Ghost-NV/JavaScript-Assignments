/* Inheritance */

class Admin {
  constructor(id, username) {
    this.id = id;
    this.username = username;
  }
}

class MainUser extends Admin {
  constructor(id, username, salary) {
    super(id, username);
    this.salary = salary;
  }
}

class User extends MainUser {
  constructor(id, username, salary, permissions) {
    super(id, username, salary);
    this.permissions = permissions;
  }
}

let userOne = new User(100, "Ghost", 5000, "Full Access");
console.log(userOne.permissions);
console.log(userOne.username);

console.log("######");

let userTwo = new MainUser(200, "Osama", 5000, "Read Only");
console.log(userTwo.permissions);
console.log(userTwo.salary);
console.log(userTwo.username);

console.log("######");

let userThree = new Admin(300, "Elzero");
console.log(userThree.permissions);
console.log(userThree.salary);
console.log(userThree.username);
console.log(userThree.id);
