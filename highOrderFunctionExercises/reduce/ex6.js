// 6. Flatten Array (Intermediate)
// Goal: Turn [[1,2], [3,4]] into [1,2,3,4].
// Input: [[1, 2], [3, 4]]
// Output: [1, 2, 3, 4]


const input = [
  [1, 2],
  [3, 4],
]; 

const output = input.reduce((myArray,x)=>myArray.concat(x));

console.log(output);