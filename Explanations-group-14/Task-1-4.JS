// Generators

// use case 1 : iterating
function* generator(array) {
  // for (let i = 0; i < array.length; i++) {
  //   yield array[i];
  // }
  // return "End of the array";
  yield* array; // every value in the array
}

let generate = generator([1, 2, 3]);
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());

// use case 2 : infinite loop
function* generator2() {
  let id = 1;

  // while (true) {
  //   yield id++;
  // }

  while (true) {
    const increment = yield id;
    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}
let generate2 = generator2();
console.log(generate2.next(222)); // Nothing happen (require to be second at least)
console.log(generate2.next(4));
console.log(generate2.next(2));
console.log(generate2.next());
console.log(generate2.throw(new Error("Error"))); // throw an error
console.log(generate2.return("End-of-function"));
console.log(generate2.next()); // undefined
