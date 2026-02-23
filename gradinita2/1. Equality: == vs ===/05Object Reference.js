// Title: Object Reference (Intermediate)
// Goal: Compare two distinct objects with identical properties.
// Input: let a = {id:1}; let b = {id:1}; a == b
// Output: false

let a = { id: 1 };
let b = { id: 1 }; 

console.log(a==b);  //false
console.log(a === b); //false

// - Even though a and b have the same structure and property values ({ id: 1 }), they are two separate objects in memory. 
// - The == (and ===) operator checks whether both variables point to the same object reference, 
// not whether their contents are identical.

// - Only if both variables point to the same object would it return true

let x = { id: 1 };
let y = x;
console.log(x === y); // true   