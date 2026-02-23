// Title: Error Propagation (Expert)
// Goal: Catch errors from deeply nested async functions.
// Input: A calls await B, B calls await C, C throws.
// Output: A catches the error thrown by C.

async function C() {
  //return Promise.reject(5)
  throw new Error("Failure me daddy");
}

async function B() {
  return await C();
}

async function A() {
  try {
    return await B();
  } catch (err) {
    console.error(err);
  }
  return null;
}

console.log(await A());
