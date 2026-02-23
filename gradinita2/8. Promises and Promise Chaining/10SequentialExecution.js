// Title: Sequential Execution (Expert)
// Goal: Execute an array of functions returning promises sequentially using reduce.
// Input: [fn1, fn2, fn3]
// Output: fn1 completes, then fn2 starts, etc.

function fn1(v) {
  return Promise.resolve(v + 1);
}
function fn2(v) {
  return Promise.resolve(v + 2);
}
function fn3(v) {
  return Promise.resolve(v + 3);
}

const myFunctions = [fn1, fn2, fn3];

const x = myFunctions.reduce((myAccumulatorPromise, currentFunction) => {
  return myAccumulatorPromise.then(currentFunction);
}, Promise.resolve(1));

x.then(console.log)