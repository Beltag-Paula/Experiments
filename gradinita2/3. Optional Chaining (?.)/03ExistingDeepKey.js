// Title: Existing Deep Key
// Goal: Verify standard access works.
// Input: user = {address: {zip: 90210}}; Access user?.address?.zip
// Output: 90210

const user = {
  address: {
    zip: 90210
  }
};

const zipCode = user?.address?.zip;

console.log(zipCode); // Output: 90210