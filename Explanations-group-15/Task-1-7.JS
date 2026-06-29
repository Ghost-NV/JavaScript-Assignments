const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved Promise");
    reject(Error("rejected Promise"));
  }, 1000);
});

// ============

// 'await' only works inside async functions
// async function readData() {
//   console.log("Before Promise");
//   // myPromise.then((resolvedValue) => console.log(resolvedValue)); // execute the promise immediately after call
//   console.log(await myPromise); // wait for the promise to resolve
//   // console.log(await myPromise.catch((err) => err)); // if rejected
//   console.log("After Promise");
// }
// readData();

// Using try-catch-finally
// async function readDataTryCatchFinally() {
//   try {
//     console.log("Before try");
//     console.log(await myPromise);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("After try");
//   }
// }
// readDataTryCatchFinally();

// + Using Fetch
async function readDataFetch() {
  try {
    console.log("Before Fetch");
    let response = await fetch("https://api.github.com/users/Ghost-NV/repos");
    let data = await response.json();
    console.log(data[0].full_name);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("After Fetch");
  }
}
readDataFetch();
