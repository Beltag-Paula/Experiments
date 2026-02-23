// Title: Non-Existent Deep Key
// Goal: Access level 2 depth on missing parent.
// Input: user = null; Access user?.address?.zip
// Output: undefined

const user = null;

// The ?. stops the evaluation the moment it hits null or undefined
const zipCode = user?.address?.zip;

console.log(zipCode); // Output: undefined