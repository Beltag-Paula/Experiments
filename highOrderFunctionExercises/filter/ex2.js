// 2. String Length (Beginner)
// Goal: Keep words longer than 3 characters.
// Input: ["Hi", "Hello", "Yo", "World"]
// Output: ["Hello", "World"]

const i = ["Hi", "Hello", "Yo", "World"];

const o = i.filter((word)=>word.length>3)

console.log(o);