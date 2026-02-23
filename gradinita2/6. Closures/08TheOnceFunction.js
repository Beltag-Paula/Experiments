// Title: The "Once" Function (Expert)
// Goal: Create a higher-order function that restricts a function to a single execution.
// Input: A function initialize passed into a once wrapper.
// Output: The first call returns the result; all subsequent calls return undefined.

//Real World Applications: initializing a service or setting up a connection
// that should happen only once, even if multiple parts of your code call it!!!!

function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }

    return result;
  };
}

//1) Initialize a database connection once
function connectDatabase() {
  console.log("Connecting...");
  return { connectionId: Math.floor(Math.random() * 1000) };
}


const initiateDatabase = once(connectDatabase);


//Only one connection is ever created
//Every subsequent call gets the same object
//Prevents expensive or unsafe repeated initialization
console.log(initiateDatabase());
console.log(initiateDatabase());
console.log(initiateDatabase());
console.log(initiateDatabase());
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////



// const attachClickListener = once(() => {
//   document.addEventListener("click", () => console.log("Clicked!"));
//   return true;
// });


// //2) Suppose you want to attach an event listener once, even if multiple modules try:
// //This avoids duplicating event handlers.
// attachClickListener(); // Adds listener
// attachClickListener(); // Does nothing
// attachClickListener(); // Does nothing

