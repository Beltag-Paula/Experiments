// Title: Simple Chaining (Intermediate)
// Goal: Return a value from .then to the next .then.
// Input: Resolve 1 -> .then(x => x+1)
// Output: 2

function myFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let x = 1;
      if (x) {
        resolve(x);
      } else reject("Some error");
    }, 1000);
  });
}

myFunction()
  .then((data) => {
    console.log("Success!", data);
    return data;
  })
  .then((data) => console.log("Success!", data + 1))

  .catch((err) => console.error("Some error", err));
