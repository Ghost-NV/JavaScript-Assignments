// ###### Data type :

// string
console.log("Saged Mohamed");
console.log(typeof "Saged Mohamed");
// int
console.log(typeof 5000);
// double
console.log(typeof 5000.99);
// array
console.log(typeof [15, 16, 17]);
console.log(typeof { name: "Saged", age: 16, country: "Eg" });
// bool
console.log(typeof true);
console.log(typeof false);
// undefined & null
console.log(typeof undefined);
console.log(typeof null);

// ==============

// string
console.log("Saged Mohamed");
console.log("Saged Mohamed");
// int
console.log(5000);
// double
console.log(5000.99);
// array
console.log([15, 16, 17]);
console.log({ name: "Osama", age: 16, country: "Eg" });
// bool
console.log(true);
console.log(false);
// undefined & null
console.log(undefined);
console.log(null);

// Template Literals Template Strings

let title = "Elzero";
let desc = "Elzero Web School";

// use ``
// use `${variable}` for adding varibles
let markUp = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>`;

document.write(markUp + "using varibales only");
document.write(`${markUp} using \`\${}\``);
console.log(`${title} \b\b\b\b\b "hello" ${desc}`);
