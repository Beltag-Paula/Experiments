// Title: Basic Await
// Goal: Await a resolved promise.
// Input: await Promise.resolve(5)
// Output: 5

async function run() {
  return Promise.resolve(5);
}

const myResult = await run();

console.log(myResult); //will return 5
