// 5. Max Value (Intermediate)
// Goal: Find the maximum number.
// Input: [10, 50, 30]
// Output: 50
// ------------

const input = [10, 50, 30];
const output = input.reduce((myResult, x) => {
  if (myResult > x) {
    return myResult;
  } else {
    return x;
  }
});

console.log(output);
