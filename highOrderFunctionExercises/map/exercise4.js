// 4. HTML Wrapper (Intermediate)
// Goal: Wrap every string in an <h1> tag.
// Input: ["Hello", "World"]
// Output: ["<h1>Hello</h1>", "<h1>World</h1>"]

const message = ["Hello", "World"];

const convertedMessage = message.map((x)=>{return "<h1>"+x+"</h1>"});

console.log(convertedMessage);