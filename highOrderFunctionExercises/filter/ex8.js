// 8. Array Intersection (Expert)
// Goal: Filter array A to only include items found in array B (Context: B=[1,3]).
// Input: [1, 2, 3, 4]
// Output: [1, 3]

const input = [1,2,3,4];
const B = [1,3];

const output = input.filter((number)=>B.includes(number));

console.log(output);