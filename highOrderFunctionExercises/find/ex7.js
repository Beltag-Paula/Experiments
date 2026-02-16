// 7. Undefined Checker (Intermediate)
// Goal: Find first element that is undefined.
// Input: [1, 2, "undefined", 4]
// Output: "undefined"

const input = [1, 2, "undefined", 4];

const output = input.findIndex((x) => x==="undefined");

console.log(output);