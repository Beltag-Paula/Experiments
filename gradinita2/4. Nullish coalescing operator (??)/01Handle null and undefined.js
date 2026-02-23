// Goal: Handle null and undefined specifically, preserving 0 and "".
// Title: Basic Default
// Goal: Provide default for null.
// Input: val = null; val ?? "default"
// Output: "default"

// While the "old" way was to use || (OR), 
// that operator is a bit of a blunt instrument—it treats :
// - 0 
// - ""
// - false 
// as "bad" values. 

// The ?? operator is smarter: it only cares if the value is null or undefined.

const  val=null;

// Since val is null, the ?? operator kicks in and returns the fallback.
const result = val ?? "default";

console.log(result); // Output: "default"