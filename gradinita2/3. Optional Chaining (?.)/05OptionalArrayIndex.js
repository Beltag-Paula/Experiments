// Title: Optional Array Index (Intermediate)
// Goal: Access an array index on a variable that might be null.
// Input: arr = null; Access arr?.[0]
// Output: undefined

const arr = null;

// The ?. before the [0] tells JS: "Check if 'arr' exists before looking for an index."
const firstElement = arr?.[0];

const topResult = arr?.[0] ?? "No results found";

console.log(firstElement); // Output: undefined
console.log(topResult); //Output: also undefined