// Goal: Find the first product that is in stock.
// Input: [{"n": "A", "stock": 0}, {"n": "B", "stock": 5}]
// Output: [{"n": "B", "stock": 5}]

const input = [{"n": "A", "stock": 0}, {"n": "B", "stock": 5}];

const output = input.find((x) => x.stock > 0);

console.log(output);