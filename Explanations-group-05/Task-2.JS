function ageInTime(theAge) {
  if (theAge <= 10 || theAge >= 100) {
    console.log("Age Out Of Range");
  } else {
    return console.log(`${theAge * 12} Months`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = 0; i <= endYear - startYear; i++) {
    document.write(`<option>${startYear + i}</option>`);
  }
  document.write(`</select>`);
}

createSelectBox(2000, 2021);
