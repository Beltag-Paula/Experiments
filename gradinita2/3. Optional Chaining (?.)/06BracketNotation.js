// Title: Bracket Notation (Intermediate)
// Goal: Use variable key with optional chaining.
// Input: key = "data"; obj = null; Access obj?.[key]
// Output: undefined

const key = "data";
const obj = null;

// The ?. ensures that if 'obj' is null, JS doesn't try to look up the 'key'
const result = obj?.[key];

console.log(result); // Output: undefined