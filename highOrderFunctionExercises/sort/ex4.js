// 4. String Length (Intermediate)
// Goal: Sort by word length (shortest first).
// Input: ["Banana", "Apple", "Kiwi"]
// Output: ["Kiwi", "Apple", "Banana"]

const input = ["Banana", "Apple", "Kiwi"];

const output = input.sort((x,y)=>x.length-y.length);

console.log(output);