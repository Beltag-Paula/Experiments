// Title: Async Generators (Expert)
// Goal: Generator that yields promises (paginated API).
// Input: async function* fetchPages() { ... yield fetch() ... }
// Output: Consumed via for await (const page of fetchPages()).

async function* fetchPage() {
  yield await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();
  yield await (
    await fetch("https://jsonplaceholder.typicode.com/posts/2")
  ).json();
  yield await (
    await fetch("https://jsonplaceholder.typicode.com/posts/3")
  ).json();
}

for await (const x of fetchPage()) {
  console.log(x);
}