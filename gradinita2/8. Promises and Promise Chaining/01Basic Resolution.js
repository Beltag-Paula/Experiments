// Title: Basic Resolution
// Goal: Create a Promise that resolves immediately.
// Input: Promise.resolve("Done")
// Output: .then(val => val) is "Done"


//pending, fullfilled, rejected!!!  3 states of a promise 

Promise.resolve("Done").then(val=>console.log(val))