// 9. Calculation Search (Expert)
// Goal: Find the first rectangle with area > 100.
// Input: [{"w": 5, "h": 5}, {"w": 10, "h": 11}, {"w": 20, "h": 20}]
// Output: {"w": 10, "h": 11}

const input = [{"w": 5, "h": 5}, {"w": 10, "h": 11}, {"w": 20, "h": 20}]

const output = input.find((x) => x.w*x.h>100);

console.log(output);