// Title: Nested Async Calls (Expert)
// Goal: Complex data hydration.
// Input: await (await fetch(url)).json()
// Output: The parsed JSON object.

async function myFunction(url) {
  try {
    const response = await fetch(url);

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch the url " + err);
  }
}

async function myFunction2(url) {
  try {
    // Nested approach: fetch returns a promise, which we await,
    // then we immediately call .json() on the result and await that.
    const data = await (await fetch(url)).json();
    return data;
  } catch (err) {
    console.error("Hydration failed: " + err);
  }
}

//onsole.log(await myFunction("https://jsonplaceholder.typicode.com/posts/1"));

console.log(await myFunction2("https://jsonplaceholder.typicode.com/posts/1"));