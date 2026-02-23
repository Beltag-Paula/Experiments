//Promise All runs if all promises are resolved; if one is rejected that i will give only the error

const p1 = new Promise((resolve) => setTimeout(() => resolve("Winner"), 5000));
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Runner up"), 2000),
);
const p3 = Promise.reject("P3 Crashed!");

Promise.all([p1, p2, p3])
  .then((results) => {
    // This code will NEVER run
    console.log(results);
  })
  .catch((err) => {
    // This runs immediately (after p3 rejects)
    console.log("Error caught:", err); // "Error caught: P3 Crashed!"
  });
