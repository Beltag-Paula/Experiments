// Title: Skipping Function (Intermediate)
// Goal: Observe how JSON ignores functions.
// Input: stringify({ fn: () => {} })
// Output: '{}'

const intput = { fn: () => {} };

const output = JSON.stringify(intput);

console.log(`user is:${output} and it's type is: ${typeof output}`);