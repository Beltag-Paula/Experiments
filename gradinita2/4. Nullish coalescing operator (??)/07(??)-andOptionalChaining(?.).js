// Title: With Optional Chaining (Intermediate)
// Goal: Combine ?. and ??.
// Input: user = {}; user.settings?.theme ?? "light"
// Output: "light"

const user = {};

// 1. user.settings is undefined, so the ?. stops and returns undefined
// 2. undefined ?? "light" triggers the fallback
const theme = user.settings?.theme ?? "light";

console.log(theme); // Output: "light"