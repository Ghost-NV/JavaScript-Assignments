// ####### String
let theName = "  Ahmed  ";

// access
console.log(theName);
console.log(theName[1]);
console.log(theName[5]);
console.log(theName.charAt(1));
console.log(theName.charAt(5));
// in 2022, .at() been added, the best
console.log(theName.at(1));
console.log(theName.at(5));

// length of the array
console.log(theName.length); // 9

// delete spaces and other characters
console.log(theName.trim());

// toUpperCase() , toLowerCase()
console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

// repeat()
console.log((a + " ").repeat(5)); // "Elzero Web School" + " " (repeated 5 times)

// Todo : 3th char in the trimmed array is UpperCase
console.log(theName.trim().charAt(2).toUpperCase());

let a = "Elzero Web School";

// ### String Extraction
console.log(a.slice(2, 6)); // zero
console.log(a.slice(-5, -3)); // ch

// split()
console.log(a.split("", 6));
console.log(a.split(" ", 6));
console.log(a.split("o", 6));
console.log("====");

// substring()
console.log(a.substring(2, 6)); // zero , start from least value to greatest (2 to 6)
console.log(a.substring(6, 2)); // zero , start from least value to greatest (2 to 6)
console.log(a.substring(-10, 6)); // Elzero , starts from 0 to 6
console.log(a.substring(a.length - 5, a.length - 3)); // ch
console.log("====");

// substr()
console.log(a.substr(0, 6)); // start from index 0 and take elements before index 6
console.log(a.substr(17)); // (no output) , start from index (17) to the end
console.log(a.substr(15)); // ol , start from index (16) to the end
console.log(a.substr(-3)); // ool , start from index (length - 3) and move to the end
console.log(a.substr(-5, 2)); // ch , start from index (length - 5) and move 2 steps
console.log("====");
