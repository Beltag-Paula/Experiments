// Title: Function Call (Intermediate)
// Goal: Call a function inside the interpolation.
// Input: fn = () => "Active"; Template: "Status: ${fn()}"
// Output: "Status: Active"

const getStatus = () => "Active";

const message = `Status: ${getStatus()}`;

console.log(message); // Output: "Status: Active"