// 5. Object Property (Intermediate)
// Goal: Sort users by age (youngest first).
// Input: [{"a": 30}, {"a": 20}, {"a": 25}]
// Output: [{"a": 20}, {"a": 25}, {"a": 30}]

const input = [{ a: 30 }, { a: 20 }, { a: 25 }];

const output = input.sort((e1,e2)=>e1.a-e2.a);

console.log(output);