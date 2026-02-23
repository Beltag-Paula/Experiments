// Title: Promise.all (Intermediate)
// Goal: Wait for multiple promises.
// Input: [p1 (1s), p2 (2s)]
// Output: Resolves when both are done with [r1, r2].

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
const p1 = Promise.all([1, 2, 3]); // Result: [1, 2, 3]
const p2 = Promise.resolve(444); // Result: 444

// Let's make p3 successful so the whole chain works
const p3 = Promise.resolve("Success!");

// destructuring + With then()
Promise.all([p1, p2, p3])
  .then(([res1, res2, res3]) => {
    console.log(res1); // [1, 2, 3]
    console.log(res2); // 444
    console.log(res3); // "Success!"
  })
  .catch((err) => console.error("One failed:", err));


