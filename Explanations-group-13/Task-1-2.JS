class User {
  static count = 0;
  static SayHello() {
    return `Hello by 'Class'`;
  }
  constructor(id, username, salary) {
    this.i = id;
    User.count++;
  }
  Hello() {
    return `Hello by 'Object'`;
  }
  static countFn() {
    return `current count is ${this.count}`;
  }
}

console.log(User.countFn());
let userOne = new User(100);
console.log(User.countFn());
let userTwo = new User(200);
console.log(User.countFn());
let userThree = new User(300);
console.log(User.countFn());

console.log(userOne);
console.log(userTwo.i);
console.log(userThree.Hello());
console.log(User.SayHello());
