// Title: Mixed Type Nested Check (Expert)
// Goal: Validate a specific deeply nested value using strict equality against a derived value.
// Input: obj = {x: "10"}; (obj.x * 1) === 10
// Output: true



//You have an object where the value of x is a String (indicated by the quotes), 
// but the content inside those quotes looks like a Number.
const obj = { x: "10" };



// The Triple Equals (===) is "Strict." It checks two things:
// Value: Is it ten? (Yes)
// Type: Is it a Number? (No, obj.x is a String).
// Because the types don't match, JavaScript immediately says false.
console.log(obj.x === 10); // false



// This is the "Expert" trick. Before the === happens, the math operation * 1 runs.
// JavaScript sees a mathematical operator (*).
// It knows you can't multiply a String, so it coerces (converts) "10" into the Number 10 automatically.
// Now, the comparison becomes 10 === 10.
const result = (obj.x * 1) === 10;

console.log(result); // true