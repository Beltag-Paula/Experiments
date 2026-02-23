// Title: Tagged Templates - Raw (Expert)
// Goal: Use String.raw to ignore escape characters.
// Input: String.raw tag on \n.
// Output: "\\n" (The literal characters slash and n).

const rawString = String.raw`Line one.\nLine two.`;

console.log(rawString); 
// Output: "Line one.\nLine two." (not a literal new line)
////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////
function highlight(strings, ...values) {
  // Use .reduce to stitch the strings and values back together
  return strings.reduce((result, str, i) => {
    const value = values[i] ? `<strong>${values[i]}</strong>` : '';
    return result + str + value;
  }, '');
}

const name = "Alice";
const topic = "Tagged Templates";

// Notice: No parentheses! Just the function name before the backticks.
const message = highlight`Hello, ${name}! Let's learn about ${topic}.`;

console.log(message);
// Output: "Hello, <strong>Alice</strong>! Let's learn about <strong>Tagged Templates</strong>."