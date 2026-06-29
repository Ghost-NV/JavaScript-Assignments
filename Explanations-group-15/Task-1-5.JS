const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise Resolved");
  }, 3000);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("second Promise Resolved");
  }, 2000);
});

const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("third Promise Resolved");
  }, 1000);
});

Promise.all([firstPromise, secondPromise, thirdPromise]).then((values) => {
  // return all promises in an array of values, if one is rejected it throws an error
  console.log(values);
});

Promise.race([firstPromise, secondPromise, thirdPromise]).then((values) => {
  // return the first promise, if the first is rejected it throws an error
  console.log(values);
});

Promise.any([firstPromise, secondPromise, thirdPromise]).then((values) => {
  // return the first resolved promise, if all are rejected it throws an error
  console.log(values);
});

Promise.allSettled([firstPromise, secondPromise, thirdPromise]).then(
  // return all promises in an array of objects, ignores errors even if all are rejected
  (values) => {
    console.log(values);
  },
);
