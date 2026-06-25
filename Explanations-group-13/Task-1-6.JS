// Accessor Descriptor vs Data Descriptor
"use strict";

const account = {
  _age: undefined,
  _Name: undefined,

  set age(value) {
    if (value < 0) {
      console.log("Can't be negative!");
    } else {
      this._age = value;
    }
  },
  get age() {
    return this._age;
  },

  set Name(value) {
    let lettersOnly = /^[A-Za-z]+$/; // one letter(A-Za-z) or more (+), must Start and End letters it only ($ , ^)

    if (!lettersOnly.test(value)) {
      console.log("Can't be Number nor empty");
    } else {
      this._Name = value;
    }
  },
  get Name() {
    return this._Name;
  },
};

account.age = -5; // Output: Can't be negative!
account.age = 30;
console.log(account.age); // Output: 30
account.Name = 5; // Output: Can't be Number nor empty
account.Name = ""; // Output: Can't be Number nor empty
account.Name = "H1"; // Output: Can't be Number nor empty
account.Name = "Ghost";
console.log(account.Name); // Output: Ghost

// ===================

const wallet = {};

// instead of 'value', 'writable: true' we use 'get', 'set' functions
{
  let hiddenMoney; // Encapsulation

  Object.defineProperty(wallet, "money", {
    enumerable: true, // visible in 'for in loop',
    configurable: false, // unremovable

    get() {
      return `${hiddenMoney}$`;
    },

    set(value) {
      if (value >= 0) {
        hiddenMoney = value;
        console.log(hiddenMoney); // reachable
      }
    },
  });
}

wallet.money = 500;
console.log(wallet.hiddenMoney); // unreachable
console.log(wallet.money);
