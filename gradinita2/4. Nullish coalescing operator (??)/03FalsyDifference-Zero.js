// Title: The Falsy Difference - Zero
// Goal: Distinguish ?? from ||.
// Input: count = 0; count ?? 10

const count = 0;

// The ?? operator check: "Is count null or undefined?"
// Since 0 is a real number (not nullish), it keeps the 0!
const result = count ?? 10;
const result2 = count || 10;

console.log(result); // Output: 0
console.log(result2); //Output: 10