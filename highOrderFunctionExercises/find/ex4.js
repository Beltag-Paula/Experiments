// 4. First Error (Intermediate)
// Goal: Find the first log with status 'ERROR'.
// Input: [{"s": "OK"}, {"s": "WARN"}, {"s": "ERROR"}, {"s": "ERROR"}]
// Output: {"s": "ERROR"}

const input = [{"s": "OK"}, {"s": "WARN"}, {"s": "ERROR"}, {"s": "ERROR"}];

const output = input.find((x) => x.s === "ERROR");

console.log(output);