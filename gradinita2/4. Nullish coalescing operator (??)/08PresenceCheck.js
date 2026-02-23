// Title: Precedence Check (Expert)
// Goal: Mix ?? with && or || (requires parenthesis).
// Input: (null || undefined) ?? "foo"
// Output: "foo"

// JavaScript is actually terrified of you mixing ?? with || or && without parentheses.

// If you tried to write null || undefined ?? "foo", JavaScript would throw a SyntaxError. 
// It forces you to use parentheses to explicitly state your intent, because the "order of operations" (precedence)
// between these operators isn't intuitively agreed upon by all programmers.




// 1. (null || undefined) evaluates first. 
//    Since null is falsy, it moves to the right and returns undefined.
// 2. undefined ?? "foo" evaluates next.
//    Since undefined is nullish, it returns "foo".
const result = (null || undefined) ?? "foo";

console.log(result); // Output: "foo"