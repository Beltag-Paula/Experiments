// 5. Price Threshold (Intermediate)
// Goal: Keep items under $50.
// Input: [{"p": 100}, {"p": 20}, {"p": 49}]
// Output: [{"p": 20}, {"p": 49}]

const input = [{ p: 100 }, { p: 20 }, { p: 49 }];

const output = input.filter((item)=>item.p <50);

console.log(output);