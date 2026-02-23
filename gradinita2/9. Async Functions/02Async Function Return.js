// Title: Async Function Return
// Goal: Understand that async functions return promises.
// Input: async function f() { return 1; }
// Output: f() is a Promise.

async function myFunction(){
    return 1;
}

const myPromise = myFunction();

console.log(myPromise); //will return a promise with the state fullfilled and the value 1