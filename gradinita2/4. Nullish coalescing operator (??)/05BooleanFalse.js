// Title: Boolean False (Intermediate)
// Goal: Preserve false as a valid value.
// Input: enabled = false; enabled ?? true
// Output: false

const enabled = false;

// ?? checks: Is 'enabled' null or undefined? 
// It is not. It is a boolean 'false'.
// So, it keeps 'false'.
const result = enabled ?? true;

console.log(result); // Output: false