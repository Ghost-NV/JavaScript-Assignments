/*
  Format
  - "Aug 27 2010"
  - "8/27/2010" // can use any special characthers
  - "2010-8-27" => ISO International Standard
  - "2010 8"
  - "2010"
  - "91"
  - 2010, 9, 27, 2, 10, 0
  - 2010, 9, 27
  - "2010-8-27T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("Aug 27 2010"));

let date1 = new Date(0); // Unix
console.log(date1);

let date2 = new Date(1282860000000); // My Birthday
console.log(date2);

let date3 = new Date("8-27-2010");
console.log(date3);

let date4 = new Date("2010-8-27");
console.log(date4);

let date5 = new Date("2010-8");
console.log(date5);

let date6 = new Date("2026");
console.log(date6);

let date7 = new Date(2010, 7, 27, 2, 10, 956); // indexing the month
console.log(date7);

let date8 = new Date(2010, 7, 27);
console.log(date8);

let date9 = new Date("2010-08-27T06:10:00Z");
console.log(date9);
