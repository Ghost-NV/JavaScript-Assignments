/*
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

let date = new Date();

// date.setTime(10000); // been 10 seconds till 1/1/1970
// console.log(date);

date.setDate(20);
date.setDate(10);
date.setDate(-1);
date.setDate(0);
date.setDate(1);
console.log(date);

date.setFullYear(2026, 4, 11);
console.log(date);

// date.setMonth(2, 5);
// console.log(date);

// date.setHours(14, 18, 15, 817);
// console.log(date);

// date.setMinutes(15, 12, 884);
// console.log(date);

// date.setSeconds(12, 924);
// console.log(date);

// date.setMilliseconds(956);
// console.log(date);
