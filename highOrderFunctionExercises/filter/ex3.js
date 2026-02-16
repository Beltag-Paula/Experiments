// 3. Positive Numbers (Beginner)
// Goal: Remove negative numbers.
// Input: [-10, 5, 0, -2, 8]
// Output: [5, 0, 8]

const i = [-10, 5, 0, -2, 8];

const o = i.filter((number)=> number>=0);

console.log(o);