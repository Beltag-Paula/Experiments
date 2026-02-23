// Title: Reviver Function (Expert)
// Goal: Parse a string containing ISO dates back into Date objects.
// Input: '{"created": "2023-01-01T00:00:00.000Z"}' and a reviver checking key name.
// Output: Object where created is a Date instance.

const input = '{"created": "2023-01-01T00:00:00.000Z"}';


//The goal of a Reviver is usually to end up with a Date Object 
// so you can use methods like .getMonth() or .getDay().

function myFunction(key, value) {
  console.log(key, value);
  if (key==="created" && typeof value === "string") {
    return new Date(value)
  }
  return value;
}

const output = JSON.parse(input, myFunction);

console.log(output);
console.log(typeof output);