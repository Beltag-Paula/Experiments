// Title: Array Serialization
// Goal: Stringify an array.
// Input: [1, "a", true]
// Output: '[1,"a",true]'

const input = [1, "a", true];

const output = JSON.stringify(input);

console.log(`user is:${input} and it's type is: ${typeof input}`);
console.log(`user is:${output} and it's type is: ${typeof output}`);