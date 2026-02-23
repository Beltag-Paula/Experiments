// Title: The Outer Variable
// Goal: Access a variable defined in the parent function from a child function.
// Input: A function outer containing a variable secret, returning an inner function
// that returns that variable.
// Output: Calling the returned function returns the value of secret.

function myParent() {
  let mySecret = "alabalaportocala";
  return function myChild() {
    return mySecret;
  };
}

const child = myParent();
console.log(child());
