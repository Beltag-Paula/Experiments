// Title: The Loop Trap (Intermediate)
// Goal: Use block scoping or a closure to capture the correct index in an asynchronous loop.
// Input: A for loop that sets a setTimeout to log the index i.
// Output: Logs 0, 1, 2 instead of 3, 3, 3.


//this one gives 3,3,3
for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };

  setTimeout(log, 100);
}


//this one gives 0,1,2
for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };

  setTimeout(log, 100);
}
