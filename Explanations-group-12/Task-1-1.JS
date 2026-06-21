/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Method
  - input.match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Matches => Returns An Array
  -- No Match => Returns null

  Caret ^ sign refers to "Not"
*/

let MString = "com org net co info";

let regex = /(com|org|net)/gim;

console.log(MString.match(regex));

let nums = "12345678910";
let numsRe = /[0-3]/g;
console.log(nums.match(numsRe));

let notNums = "12345678910";
let notNsRe = /[^0-5]/g;
console.log(notNums.match(notNsRe));

let SpecialOnly = "!1@2#3$4%5^6&7*8(9)0";
let NotSpecialRe = /[^0-9]/g;
console.log(SpecialOnly.match(NotSpecialRe));

let OsOnly = "Os1 Os1Os Os2 Os8 Os8Os";
OsOnlyRe = /Os[0-9]Os/g;
console.log(OsOnly.match(OsOnlyRe));

// ====

let myString = "AaBbcdefG123!234%^&*";

let atozSmall = /[a-z]/g;
let atozCapital = /[A-Z]/g;
let aAndcAnde = /[aceg]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let specials = /[^a-zA-Z0-9]/g;
let specialsAndCaret = /[^a-z^A-Z0-9]/g;

console.log(myString.match(atozSmall));
console.log(myString.match(atozCapital));
console.log(myString.match(aAndcAnde));
console.log(myString.match(lettersCapsAndSmall));
console.log(myString.match(specials));
console.log(myString.match(specialsAndCaret));
