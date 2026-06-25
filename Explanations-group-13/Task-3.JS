// Edit The Class
class User {
  #c;
  set card(val) {
    let clean = String(val).replace(/-/g, ""); // delete old '-'
    this.#c = clean.replace(/(\d{4})(?=\d)/g, "$1-"); // (?=\d) prevent '-' at last of card, add '-' to first group "$1-"
  }

  constructor(username, card) {
    this.u = username;
    this.card = card;
    this.showData = `Hello ${this.u} Your Credit Card Number Is ${this.#c}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// undefined
