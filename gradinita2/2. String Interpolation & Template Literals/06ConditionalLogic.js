// Title: Conditional Logic (Intermediate)
// Goal: Use a ternary operator inside ${}.
// Input: isAdmin = true; Template: "Access: ${isAdmin ? 'Granted' : 'Denied'}"
// Output: "Access: Granted"

const isAdmin = true;

const accessMessage = `Access: ${isAdmin ? 'Granted' : 'Denied'}`;

console.log(accessMessage); // Output: "Access: Granted"
