// ####### String
let theName = "  Ahmed  ";

// access
console.log(theName);
console.log(theName[1]);
console.log(theName[5]);
console.log(theName.charAt(1));
console.log(theName.charAt(5));
console.log(theName.at(1));
console.log(theName.at(5));
console.log(theName.charCodeAt(1)); // 97 (ASCII value)
console.log(theName.charCodeAt(5)); // 104 (ASCII value)

// toString()
console.log((10).toString());

// length of the array
console.log(theName.length); // 9

// ### String Editing and replacement

// trim() , trimStart() , trimEnd()
console.log(theName.trim()); // delete spaces and other characters
console.log(theName.trimStart()); // delete spaces and other characters from start
console.log(theName.trimEnd()); // delete spaces and other characters from end

// padStart() , padEnd()... Add one character with costumized size (in the end or the first)
console.log(
  theName.padStart(20, theName[2]).padEnd(37, theName[theName.length - 3]),
);

// replace()
console.log(theName.replace("Ahmed", "Sayed"));

// replaceAll()
console.log(theName.replaceAll("Ahmed", "Sayed"));

// toUpperCase() , toLowerCase()
console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

// Todo : 3th char in the trimmed array is UpperCase
console.log(theName.trim().charAt(2).toUpperCase());

let a = "Elzero Web School";

// repeat()
console.log((a + " ").repeat(5)); // "Elzero Web School" + " " (repeated 5 times)

// ### String Extraction
console.log(a.slice(2, 6)); // zero
console.log(a.slice(-5, -3)); // ch

// split()
console.log(a.split("", 6));
console.log(a.split(" ", 6));
console.log(a.split("o", 6));
console.log("====");

// substring() // doesn't support negative values
console.log(a.substring(2, 6)); // zero , start from least value to greatest (2 to 6)
console.log(a.substring(6, 2)); // zero , start from least value to greatest (2 to 6)
console.log(a.substring(-10, 6)); // Elzero , starts from 0 to 6
console.log(a.substring(a.length - 5, a.length - 3)); // ch
console.log("====");
