// Title: Unique Values with Set
// Goal: Remove duplicates from an array.
// Input: [1, 2, 2, 3]
// Output: Set containing {1, 2, 3}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

const myArray = [1, 2, 2, 3];

const output = new Set(myArray);

console.log(output);

//if you want to convert it back to array:
const uniqueArray = [...new Set(myArray)];
console.log(uniqueArray); // Output: [1, 2, 3]