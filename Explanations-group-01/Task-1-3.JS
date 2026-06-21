// ###### Operators

// (pre , post) (increament & decreament)
let num = 1;
console.log(num++);
console.log(num);
console.log(--num);
console.log(num--);

// Unary Plus And Negation Operators
// like saying, get a number from this data type and multiply it by 1 / -1;
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);
// ---
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null); // returns 0!!
console.log(-false); // even this!!
console.log(-true);
let numb = "10";
let TextToNum = +numb;
console.log(TextToNum);

console.log(Number("100")); // another way to get a number from a data type

// Assignment Operators
let a = 10; // ---
console.log(a);
a = a + 90; // ---
console.log(a);
a += 100; //  a = a + 100
console.log(a);
a -= 50; //  a = a - 50
console.log(a);
a *= 50; //  a = a * 50
console.log(a);
a /= 50; // a = a / 50
console.log(a);
a %= 50; // a = a % 50
console.log(a);
