// 9. Multiple Criteria (Expert)
// Goal: Sort by Score (High->Low), then Time (Low->High).
// Input: [{"s": 10, "t": 5}, {"s": 10, "t": 2}, {"s": 20, "t": 10}]
// Output: [{"s": 20, "t": 10}, {"s": 10, "t": 2}, {"s": 10, "t": 5}]

const input = [
  { s: 10, t: 5 },
  { s: 10, t: 2 },
  { s: 20, t: 10 },
];

const output1 = input.sort((x, y) => x.t - y.t + y.s - x.s);
//const output2 = output1.sort((x,y)=> y.s-x.s);
console.log(output1);
