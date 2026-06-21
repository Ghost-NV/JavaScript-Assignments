/*
  DOM [classList]
    -- length 
    -- contains  ===> requirs class to print Boolean value (true , false)
    -- item      ===> requirs index to print class
    -- add       ===> requirs at least 1 class added
    -- remove    ===> requirs at least 1 class removed
    -- toggle    ===> requirs 1 class removed or added (Works as 'add' & 'remove' (Mix)), there's another optional parameter -> (true: add only, false: remove only)
    -- replace   ===> requirs 2 classes only to be replaced
    -- entries   ===> Gives [index , class]
    -- keys       ===> Gives [index]
    -- values     ===> Gives [class]
*/

let element = document.getElementById("my-div");

console.log(element.classList); // 'one', 'two', 'three', 'four'
console.log(Array.from(element.classList));
console.log(typeof element); // object
console.log(typeof element.classList); // object

console.log(element.classList.contains("one")); // true
console.log(element.classList.contains("five")); // false

console.log(element.classList[1]); // two
console.log(element.classList.item(1)); // two

console.log(element.classList[10]); // undefined
console.log(element.classList.item(10)); // null

// ====================================
console.log("====================================");
// ====================================

element.classList.add("five"); // add class "five"
element.classList.remove("three"); // remove class "three"

element.classList.add("five", "six", "seven"); // can add an existed class (does nothing)
element.classList.remove("two", "one", "eight"); // can remove an non-existed class (does nothing)

element.classList.toggle("four"); // class existed ====> remove()
element.classList.toggle("nine"); // class not existed => add()

element.classList.replace("nine", "ten"); // class existed => replace()
element.classList.replace("eleven", "twelve"); // class not existed => does nothing

console.log(Array.from(element.classList)); // 'five', 'six', 'seven', 'ten'
console.log(element.classList.contains("five")); // true
console.log(element.classList.item(1)); // six
console.log(element.classList[1]); // six

// Ex1
for (const [index, className] of element.classList.entries()) {
  console.log(`class ${index} is: "${className}"`);
}

// Ex2
const classesObject = Object.fromEntries(element.classList.entries());
console.log(classesObject);

// Ex3
console.log([...element.classList.entries()]);
console.log([...element.classList.values()]);
console.log([...element.classList.keys()]);

/* <div id="my-div" class="one two three four"></div> */
