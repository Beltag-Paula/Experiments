// Goal: Multiply all numbers.
// Input: [2, 3, 4]
// Output: 24

const input = [2, 3, 4];
const output = input.reduce((myResult,x)=>myResult*x);

console.log(output);