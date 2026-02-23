// Title: Promise.allSettled (Expert)
// Goal: Handle a list of API calls where some might fail.
// Input: 3 Promises (2 resolve, 1 rejects).
// Output: Array of 3 objects with status: "fulfilled"|"rejected".


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
const api1 = Promise.resolve("User data");
const api2 = Promise.resolve("Posts data");
const api3 = Promise.reject("Server error");

Promise.allSettled([api1, api2, api3]).then((results) => {
  console.log(results);
});
