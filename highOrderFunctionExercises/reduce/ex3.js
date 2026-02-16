// 3. Concatenate (Beginner)
// Goal: Turn array of chars into string.
// Input: ["h", "e", "l", "l", "o"]
// Output: "hello"

const input = ["h", "e", "l", "l", "o"];
const output = input.reduce((myString,x)=>`${myString}${x}`);

console.log(output);