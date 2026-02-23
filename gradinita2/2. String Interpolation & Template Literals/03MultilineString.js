// Title: Multiline String
// Goal: Create a string spanning two lines without \n.
// Input: Template literal with a line break.
// Output: String with preserved newline.



//One of the biggest perks of template literals is that they are whitespace sensitive, 
// meaning the code looks exactly like the output.
let multiline = `This is line one.
This is line two.`;

console.log(multiline);