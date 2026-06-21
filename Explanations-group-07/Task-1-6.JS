let user1 = { name: "Hassan" };
let user2 = { name: "Sara", age: 25 };
let user3 = { name: "Osama", age: 41, country: "Egypt(byObj)" };
let user4 = { name: "Yasser", age: 16, country: "Saudia(byObj)" };

function intro(country, age) {
  if (age !== undefined) {
    this.age = age;
  }
  if (country !== undefined) {
    this.country = country;
  }
  // same
  /*
    this.age = age || this.age; 
    this.country = country || this.country;
  */
  console.log(
    `Hello ${this.name} from ${this.country}, your age is ${this.age}`,
  );
}

intro.call(user1, "Egypt", 16);
intro.call(user2, "Syria");
intro.call(user3);
intro.call(user4, "Saudia", 25);

// bind() works as call() but copies functions not excuting it
let frozen = intro.bind(user1, "Earth");
frozen(19); // This new function requiers the second parameter 'age' only now

// How it works:
// if parameter exists it takes it
// if not it takes object properties
// if object property doesn't exist it returns undefined

// Output:
// Hello Hassan from Egypt, your age is 16
// Hello Sara from Syria, your age is 25
// Hello Osama from Egypt(byObj), your age is 41
// Hello Yasser from Saudia, your age is 25
// Hello Hassan from Earth, your age is 19
