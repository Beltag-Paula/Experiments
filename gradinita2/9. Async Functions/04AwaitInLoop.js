// Title: Await in Loop (Intermediate)
// Goal: Fetch items one by one (sequence).
// Input: for loop awaiting inside.
// Output: Total time = sum of all delays.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function run1() {
  console.time("Total time");
  //everything in for loop is sequentally taken
  for (let i = 1; i <= 3; i++) {
    console.log(`Starting the task ${i}`);
    await delay(2000);
    console.log(`Finished task ${i}`);
  }
  console.timeEnd("Total time");
}
run1();

const myGenerator = function* () {
  yield delay(1000);
  yield delay(2000);
  yield delay(2000);
};

async function run() {
  console.time("Total time");
  for await (const promise of myGenerator()) {
    console.log(promise);
  }
  console.timeEnd("Total time");
}

run();

// const createGenerator = function* () {
//   yield 100;
//   yield 200;
//   yield 300;
// };

// const randomGenerator = createGenerator();

// console.log(randomGenerator.next().value);
// console.log(randomGenerator.next().value);
// console.log(randomGenerator.next().value);
// console.log(randomGenerator.next().value);

// let i = 0;
// const fakeGenerator = () => [100, 200, 300][i++];

// console.log(fakeGenerator());
// console.log(fakeGenerator());
// console.log(fakeGenerator());

// let x = myArray().next();
// x.value.then(console.log);
// x = myArray().next();
// x.value.then(console.log);
// x = myArray().next();
// x.value.then(console.log);
// x = myArray().next();
// x.value.then(console.log);
// x = myArray().next();

// myFunction();

// const urls = [
//   "https://www.google.com/",
//   "https://www.wikipedia.org/",
//   "https://www.reddit.com/",
// ];

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// async function myFunction() {
//   const results = [];
//   const start = Date.now();

//   for (const url of urls) {
//     console.log(`Fetching ${url}`);
//     await delay(500);

//     const response = await fetch(url);
//     const data = await response.json();

//     results.push(`Data from ${url}`);
//   }

//   const end = Date.now();
//   console.log(`Total time: ${(end - start)/1000} seconds`)
//   return results;
// }

// await myFunction(urls);
