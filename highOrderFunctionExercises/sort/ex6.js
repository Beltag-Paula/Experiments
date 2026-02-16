// 6. Boolean Sort (Intermediate)
// Goal: False first, True second.
// Input: [true, false, true, false]
// Output: [false, false, true, true]

const input = [true, false, true, false];

const output = input.sort((e1,e2)=>e1-e2);

console.log(output);