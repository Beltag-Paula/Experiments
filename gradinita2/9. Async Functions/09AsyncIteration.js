// Title: Async Iteration (Expert)
// Goal: Use for await...of.
// Input: An array of promises or an async generator.
// Output: Loop body runs as each promise resolves.

async function* fetchPage() {
  const ids = [1, 2, 3];

  for (const id of ids) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      yield response.json();
    } catch (error) {
      console.error(`Failed to fetch post ${id}:`, error);
    }
  }
}

(async () => {
  for await (const post of fetchPage()) {
    console.log(`Post Title: ${post.title}`);
  }
})();
