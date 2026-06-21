function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    let a = "";
    for (let i = 0; i < zName.length; i++) {
      if (zName[i] !== " ") a += zName[i];
      else {
        a += ` ${zName[i + 1].toUpperCase()}.`;
        break;
      }
      // Saged Mohamed => Saged M.
      // Ahmed ali => Ahmed A.
    }
    return a;
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    return `Your Age Is ${parseInt(zAge)}`;
    // 16 Is My Age => Your Age Is 16
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    return `${zCountry[0].toUpperCase()}${zCountry[1].toUpperCase()}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`;
    // Write Your Code Here
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Saged Mohamed", "16 Is My Age", "Egypt"));
// Hello Saged M., Your Age Is 16, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
