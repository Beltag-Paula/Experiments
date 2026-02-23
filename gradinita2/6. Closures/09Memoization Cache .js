// Title: Memoization Cache (Expert)
// Goal: Build a cache within a closure to store results of a nested, complex calculation.
// Input: A function that takes a nested object id as a key: memoize(expensiveFn).
// Output: Subsequent calls with the same object reference return the cached result without re-running the function.

//https://www.geeksforgeeks.org/javascript/javascript-memoization/

/**
 * A higher-order function that memoizes a function 
 * specifically using object references as keys.
 */
function memoize(expensiveFn) {
  // The private cache lives here in the closure
  const cache = new WeakMap();

  return function(obj) {
    // Check if we've seen this specific object reference before
    if (cache.has(obj)) {
      console.log('Fetching from cache...');
      return cache.get(obj);
    }

    // Otherwise, run the expensive calculation
    const result = expensiveFn(obj);
    cache.set(obj, result);
    return result;
  };
}

// Example Usage:
const complexCalc = (data) => {
  // Imagine a heavy nested calculation here
  return data.value * 100; 
};

const memoizedCalc = memoize(complexCalc);

const myData = { id: 101, value: 5 };

console.log(memoizedCalc(myData)); // Calculates and returns 500
console.log(memoizedCalc(myData)); // Returns 500 from cache