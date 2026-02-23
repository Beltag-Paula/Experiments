// Title: The Delay
// Goal: Wrap setTimeout in a Promise.
// Input: wait(1000)
// Output: Resolves after 1 second.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;

      if (success) {
        resolve("Data received");
      } else {
        reject("Network Error");
      }
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log("Success!", data))
  .catch((err) => console.error("Some error", err));
