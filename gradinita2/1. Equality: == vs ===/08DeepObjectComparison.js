// Title: Deep Object Comparison (Expert)
// Goal: Create a function deepEqual to strictly compare two nested objects.
// Input: deepEqual({a: {b: 1}}, {a: {b: 1}})
// Output: true

function deepEqual(a, b) {
  // 1. Primitive / Reference check
  if (a === b) return true;

  // 2. Handle Dates and Regex (Special Objects)
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (a instanceof RegExp && b instanceof RegExp)
    return a.toString() === b.toString();

  // 3. Null or Non-Object check
  if (
    a === null ||
    b === null ||
    typeof a !== "object" ||
    typeof b !== "object"
  ) {
    return false;
  }

  // 4. Ensure they share the same constructor (Optional but recommended)
  if (a.constructor !== b.constructor) return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    // 5. Use hasOwnProperty for better performance/safety than .includes()
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false;

    // Recursive call
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}
console.log(deepEqual({a: {b: 1}}, {a: {b: 1}})); 
// true

console.log(deepEqual({a: {b: 1}}, {a: {b: 2}})); 
// false
