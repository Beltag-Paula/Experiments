// Title: Catch and Continue (Intermediate)
// Goal: Handle error and recover.
// Input: Reject -> .catch(return 'recovered') -> .then()
// Output: Final .then receives 'recovered'.

function myFunction() {
  return new Promise((resolve, reject) => {
    let x = 0;
    if (x === 1) {
      resolve(x);
    } else {
      // Pass an object so the catch knows exactly what happened
      reject({ value: x, message: "Value must be 1" });
    }
  });
}

myFunction()
  .then((data) => {
    console.log("Success!", data);
    return data;
  })
  .catch((err) => {
    console.log(err.value); // Accesses the 0
    console.log(err.message); // Accesses the explanation
  });
