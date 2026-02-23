// Title: Short-Circuiting (Expert)
// Goal: Prove that expressions after ?. are not executed if short-circuited.
// Input: a = null; x = 0; a?.[x++]
// Output: x remains 0

let a = null;
let x = 0;

// Since 'a' is null, the engine stops here.
// The code inside [x++] is never executed.
const result = a?.[x++];

console.log(result); // Output: undefined
console.log(x);      // Output: 0 (The increment never happened!)