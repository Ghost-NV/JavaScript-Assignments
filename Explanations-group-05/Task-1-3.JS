/*
  Nested Function
  - Function Inside Function & Return 
*/

// Example 1

function sayMessage1(fName, lName) {
  let message = `Hello`;
  message += ` ${fName} ${lName}`;
  // message = `${message} ${fName} ${lName}`; // or
  return message;
}

console.log(sayMessage1("Saged", "Mohamed")); // output: Hello Saged Mohamed

// Example 2

function sayMessage2(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    message += ` ${fName} ${lName}`;
    // message = `${message} ${fName} ${lName}`; // or
  }
  concatMsg();
  return message;
}

console.log(sayMessage2("Saged", "Mohamed")); // output: Hello Saged Mohamed

// Example 3

function sayMessage3(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatMsg();
}

console.log(sayMessage3("Saged", "Mohamed")); // output: Hello Saged Mohamed

// Example 4

function sayMessage4(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage4("Saged", "Mohamed")); // output: Hello Saged Mohamed

// Example 5

function sayMessage5(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      function FirstName() {
        return fName;
      }
      return `${FirstName()} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage5("Saged", "Mohamed")); // output: Hello Saged Mohamed
