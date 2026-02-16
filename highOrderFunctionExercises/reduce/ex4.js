// 4. Count Occurrences (Intermediate)
// Goal: Count how many times each fruit appears.
// Input: ["apple", "banana", "apple"]
// Output: {"apple": 2, "banana": 1}

const input = ["apple", "banana", "apple"];
const output = input.reduce((myResult, x) => {
    myResult[x]=(myResult[x] || 0) + 1;
  
  return myResult;
},{});

console.log(output);
