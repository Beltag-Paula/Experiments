// 10. Regex Match (Expert)
// Goal: Find first email ending in .org.
// Input: ["a@com", "b@org", "c@net"]
// Output: "b@org"

const input = ["a@com", "b@org", "c@net"];

const output = input.findIndex((x) => x.includes("org"));

console.log(output);