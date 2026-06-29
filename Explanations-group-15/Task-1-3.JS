// PROMISES manages Asyncronous operations

let myPromise = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

console.log(myPromise);

let resolveIT = (resolve) => console.log(resolve);
let rejectIT = (reject) => console.log(reject);

myPromise.then(resolveIT, rejectIT);

myPromise.then(
  (resolve) => console.log(resolve),
  (reject) => console.log(reject),
);

myPromise
  .then(
    (resolve) => console.log(resolve),
    (reject) => console.log(reject),
  ) // on true
  .catch((error) => console.log(error)) // on false
  .finally(() => console.log("promise finished")); // always executed
