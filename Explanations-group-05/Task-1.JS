function sayHello(theName, theGender = "") {
  if (theGender === "Male") {
    document.write(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    document.write(`Hello Miss ${theName}`);
  } else {
    document.write(`Hello ${theName}`);
  }
  // Your Code Here
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

function calculate(firstNum, secondNum, operation = "+") {
  if (secondNum === undefined) {
    return console.log(`Second Number Not Found`);
  }
  if (operation === "+") {
    return console.log(firstNum + secondNum);
  } else if (operation === "-") {
    return console.log(firstNum - secondNum);
  } else if (operation === "*") {
    return console.log(firstNum * secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "+"); // 50
calculate(20, 30, "-"); // -10
calculate(20, 30, "*"); // 600
