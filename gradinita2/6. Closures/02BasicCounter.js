// Title: Basic Counter
// Goal: Create a function that increments a private variable every time it is called.
// Input: A factory function createCounter.
// Output: const count = createCounter(); followed by count(); count(); returning 1 then 2.

function myFunction(){
    let counter = 0;

    return function createCounter(){
        counter++
        return counter;
    }
    
}

const myResult = myFunction();

console.log(myResult());

console.log(myResult());

console.log(myResult());

console.log(myResult());
