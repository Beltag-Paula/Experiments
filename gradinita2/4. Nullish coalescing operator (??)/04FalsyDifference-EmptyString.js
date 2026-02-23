// Title: The Falsy Difference - Empty String
// Goal: Preserve empty string input.
// Input: text = ""; text ?? "Hello"
// Output: ""

const text = "";

// The ?? operator sees "" as a valid, non-nullish value.
const result = text ?? "Hello";

console.log(result); // Output: ""