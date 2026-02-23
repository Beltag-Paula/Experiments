// Title: Optional Method Call (Intermediate)
// Goal: Call a function that may not exist.
// Input: obj = {}; Call obj.print?.()
// Output: undefined (No error thrown)

const obj = {};

// The ?.() syntax checks if 'print' is a function before trying to execute it
//This is safest way to execute code in JavaScript when you aren't 100% sure a method has been defined yet.
const result = obj.print?.();
console.log(result); // Output: undefined

