// 7. Case Insensitive (Intermediate)
// Goal: Sort ignoring capitalization.
// Input: ["apple", "Banana", "cherry"]
// Output: ["apple", "Banana", "cherry"]

const input = ["Dandelion", "cheryy", "Banana","apple"];

const output = input.sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase()),
);
console.log(output);