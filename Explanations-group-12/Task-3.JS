let date1 = "25/ 10 / 1982";
let date2 = "25 - 10-1982";
let date3 = "25 _10 _ 1982";
let date4 = "25 10 1982";
let date5 = "2510 82";
let date6 = "25 10  82";

let re = /(\d{2} ?[/\-_]? ?){2}\d{2,4}/gi; // Write Pattern Here
// let re = /(\d{2}(?: \D | )){2}\d{2,4}/gi; // ? better solution using (?: \D | )) -> ignore spaces, more special characters

console.log(date1.match(re)); // "25/ 10 / 1982"
console.log(date2.match(re)); // "25 - 10-1982"
console.log(date3.match(re)); // "25 _10 _ 82"
console.log(date4.match(re)); // "25 10 1982"
console.log(date5.match(re)); // "2510 82"
console.log(date6.match(re)); // "25 10  82"
