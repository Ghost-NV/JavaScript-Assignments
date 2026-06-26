// https://www.unixtimestamp.com/
// Starts from 1/1/1970

let milliseconds = Date.now();
let seconds = Math.floor(milliseconds / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
let years = Math.floor(days / 365);
console.log(`Time until 1/1/1970: `);
console.log(`- milliseconds: ${milliseconds}`);
console.log(`- seconds: ${seconds}`);
console.log(`- minutes: ${minutes}`);
console.log(`- hours: ${hours}`);
console.log(`- days: ${days}`);
console.log(`- years: ${years}`);

console.log("======================");

let dateNow = new Date();
console.log(`current date: ${dateNow}`);
console.log(`milliseconds: ${dateNow.getTime()}`);
console.log(`current milliseconds: ${dateNow.getMilliseconds()}`);
console.log(`current second: ${dateNow.getSeconds()}`);
console.log(`current minute: ${dateNow.getMinutes()}`);
console.log(`current hour(24-Hour): ${dateNow.getHours()}`);
console.log(`Day of the Week: ${dateNow.getDay()}`);
console.log(`Day of the Month: ${dateNow.getDate()}`);
console.log(`current Month: ${dateNow.getMonth() + 1}`); // index of the month + 1 => get the current month
console.log(`current Year: ${dateNow.getFullYear()}`);
