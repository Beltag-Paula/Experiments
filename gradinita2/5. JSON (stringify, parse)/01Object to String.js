// Goal: Serialize and deserialize data, handling complex transformations.
// Title: Object to String
// Goal: Serialize a simple object.
// Input: { name: "X" }
// Output: '{"name":"X"}'

const user = { name: "X" };

// JSON.stringify converts a JS object into a JSON string
const result = JSON.stringify(user);

console.log(`user is:${user} and it's type is: ${typeof user}`);
console.log(`user is:${result} and it's type is: ${typeof result}`);