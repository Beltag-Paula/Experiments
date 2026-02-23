// Title: Filtering Keys (Intermediate)
// Goal: Use the replacer array to keep specific keys.
// Input: obj = {a:1, b:2, c:3}; stringify(obj, ['a', 'c'])
// Output: '{"a":1,"c":3}'

const obj = { a: 1, b: 2, c: 3, d:4 };

const output = JSON.stringify(obj, ["a", "c"]);

console.log(`user is:${obj} and it's type is: ${typeof obj}`);
console.log(`user is:${output} and it's type is: ${typeof output}`);