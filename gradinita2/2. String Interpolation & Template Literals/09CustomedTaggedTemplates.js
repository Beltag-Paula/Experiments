// Title: Custom Tagged Template (Expert)
// Goal: Write a tag function highlight that wraps interpolated values in <b> tags.
// Input: highlight on "Hello ${user}"
// Output: "Hello <b>Alice</b>"

function highlight(strings, ...values) {
  // .reduce is the cleanest way to stitch these together
  return strings.reduce((accumulator, currentString, i) => {
    // 1. Get the text part
    // 2. If there's a value at this position, wrap it in <b> tags
    const value = values[i] ? `<b>${values[i]}</b>` : '';
    
    // 3. Return the combined piece for the next loop
    return accumulator + currentString + value;
  }, '');
}

const user = "Alice";
const users = ["KK", "TV", "Pizza"];
const result = highlight`Hello ${user}`;

const result2 = users.map((user)=>highlight`${user}`)

console.log(result2); // Output: "Hello <b>Alice</b>"