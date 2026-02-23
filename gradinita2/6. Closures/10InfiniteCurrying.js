//Title: Infinite Currying (Expert)
//Goal: Use recursion and closures to handle an indefinite number of arguments.
//Input: sum(1)(2)(3)(4)(5)()
//Output: 15 (The final empty call triggers the return of the accumulated total).

function sum(x) {
  // We return a new function to collect the next argument
  return function(y) {
    // If an argument is provided, recurse and add to the total
    if (y !== undefined) {
      return sum(x + y);
    }
    // If no argument is provided (the final empty call), return the total
    return x;
  };
}

console.log(sum(1)(2)(3)(4)(5)()); // Output: 15