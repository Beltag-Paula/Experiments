// Goal: Safely access nested properties without crashing.
// Title: Safe Property Access
// Goal: Access a property that might be null.
// Input: user = {}; Access user?.profile
// Output: undefined

const user = {};

console.log(user?.path?.profile);
