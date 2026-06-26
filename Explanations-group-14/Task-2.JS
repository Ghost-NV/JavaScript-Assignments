// Needed Output
let date = new Date();
date.setDate(-1);
console.log(date);

console.log(
  `Previous Month Is ${date.getMonth() + 1} And Last Day Is ${date.getDate()}`,
);

const shortMonth = date.toLocaleString("default", { month: "short" });
console.log(shortMonth); // to get the name of the month (not index)

// ==============

// Needed Output
// Fri Aug 27 2010 00:00:00 GMT+0200 (Eastern European Standard Time)
// Fri Aug 27 2010 00:00:00 GMT+0200 (Eastern European Standard Time)
// Fri Aug 27 2010 00:00:00 GMT+0200 (Eastern European Standard Time)
// Fri Aug 27 2010 00:00:00 GMT+0200 (Eastern European Standard Time)

console.log(new Date(Date.parse("Aug 27 2010")));
console.log(new Date("2010-8-27"));
console.log(new Date(1282860000000));
console.log(new Date(2010, 7, 27));
