function* generate() {
  let start = performance.now();

  let id = 1;
  while (id <= 3000) {
    document.write("Hello");
    id++;
  }

  let end = performance.now();
  let duration = end - start;

  yield `Loop Took ${Math.round(duration)} Milliseconds.`;
}

let gener = generate();

console.log(gener.next().value);

// ==================

function* gen() {
  let id = 1;
  while (true) {
    // yield id;
    yield 100 * id ** 2 - 160 * id + 74;
    id++;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false} + 140
console.log(generator.next()); // {value: 154, done: false} + 340
console.log(generator.next()); // {value: 494, done: false} + 540
console.log(generator.next()); // {value: 1034, done: false} + 740
console.log(generator.next()); // {value: 1774, done: false} + 940
console.log(generator.next()); // {value: 2714, done: false} + 1140
console.log(generator.next()); // {value: 3854, done: false} + 1340
console.log(generator.next()); // {value: 5194, done: false} + 1540
console.log(generator.next()); // {value: 6734, done: false}
