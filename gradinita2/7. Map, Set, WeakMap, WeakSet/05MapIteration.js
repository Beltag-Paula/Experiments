// Title: Map Iteration (Intermediate)
// Goal: Iterate over entries using for...of.
// Input: Map {'a' => 1, 'b' => 2}
// Output: Logs a, 1 then b, 2.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
  console.log(key, value);
}
// 1
// 2
// 3

iterable.forEach((value, key) => {
  console.log(`Key: ${key} has Value: ${value}`);
});