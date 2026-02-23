// Title: Independent Instances (Intermediate)
// Goal: Demonstrate that separate closure instances do not share state.
// Input: Create two counters a and b from the same factory. Increment a twice and b once.
// Output: a returns 2, b returns 1.

function myFunction() {
  let counter = 0;

  return function childF() {
    return counter++;
  };

}

const a = myFunction();
const b = myFunction();

a();
a();
b();

console.log(a()); // 2
console.log(b()); // 1