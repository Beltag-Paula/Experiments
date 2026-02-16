// 7. Null Remover (Intermediate)
// Goal: Remove null or undefined values from array.
// Input: [1, null, 2, "undefined", 3]
// Output: [1, 2, 3]

const input = [1, null, 2, "undefined", 3];

const output = input.filter((number)=>(number!==null) && (number!=="undefined"));

console.log(output);