// Goal: Find the group containing member ID 99.
// Input: [{"g": 1, "m": [10, 20]}, {"g": 2, "m": [99, 100]}]
// Output: {"g": 2, "m": [99, 100]}

const input = [
  { g: 1, m: [10, 20] },
  { g: 2, m: [99, 100] },
];

const output = input.find((x) => x.m[0]===99);

console.log(output);