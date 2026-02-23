// Title: Chaining Coalesce (Intermediate)
// Goal: Chain multiple ??.
// Input: null ?? undefined ?? "found"
// Output: "found"


// JavaScript checks 'null' -> Missing.
// Checks 'undefined' -> Missing.
// Checks '"found"' -> Found it!
const result = null ?? undefined ?? "found me";

console.log(result); // Output: "found"