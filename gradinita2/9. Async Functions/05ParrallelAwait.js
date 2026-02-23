// Title: Parallel Await (Intermediate)
// Goal: Trigger payloads, then await all.
// Input: p1 = fetch(); p2 = fetch(); await p1; await p2;
// Output: Total time = max(p1, p2).

async function myFunction() {
  console.time("Total time: ");
  const p1 = Promise.resolve(5);
  const p2 = Promise.resolve(4);

  console.log(await Promise.all([p1, p2]));

  //console.log(await p1);
  //console.log(await p2);
  console.timeEnd("Total time: ");
}

myFunction();
