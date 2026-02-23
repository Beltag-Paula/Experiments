// Title: Undefined Fallback
// Goal: Provide default for undefined.
// Input: val = undefined; val ?? 0
// Output: 0


// The Logic Breakdown
// When JavaScript sees val ?? 0, it does this:
// Checks the left side (val): "Is this variable empty (either null or undefined)?"
// If YES: It ignores val and gives you the number on the right (0).
// If NO: It gives you whatever is inside val.

const val = undefined;

const result = val ?? 0;

console.log(result);