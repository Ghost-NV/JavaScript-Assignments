// Needed Output : Your birthday

let myMilli = Date.now() - Date.parse("Aug 27 2010");
console.log(`"${Math.floor(myMilli)}" milliseconds`);
console.log(`"${Math.floor(myMilli / 1000)}" seconds`);
console.log(`"${Math.floor(myMilli / 1000 / 60)}" minutes`);
console.log(`"${Math.floor(myMilli / 1000 / 60 / 60)}" hours`);
console.log(`"${Math.floor(myMilli / 1000 / 60 / 60 / 24)}" days`);
console.log(`"${Math.floor(myMilli / 1000 / 60 / 60 / 24 / 30)}" Months`);
console.log(`"${Math.floor(myMilli / 1000 / 60 / 60 / 24 / 30 / 12)}" years`);

// ====================

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
console.log(new Date(Date.parse("Jan 01 1980") + 1000));
