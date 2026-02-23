// Title: String to Object
// Goal: Parse a valid JSON string.
// Input: '{"age": 20}'
// Output: { age: 20 }

const myString = '{"age": 20}';

// JSON.parse converts a JS string into a JSON object
const userObj = JSON.parse(myString);

console.log(`user is:${myString} and it's type is: ${typeof myString}`);
console.log(`user is:${userObj} and it's type is: ${typeof userObj}`);