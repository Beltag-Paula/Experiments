// Title: Retry Logic (Expert)
// Goal: Implement a generic retry wrapper using loop + await.
// Input: Async function that fails twice then succeeds.
// Output: Wrapper returns success after 2 catches.

/**
 * @param {Function} fn - The async function to retry
 * @param {number} retries - Number of allowed attempts
 * @param {number} delay - Initial delay in ms
 */
async function retry(fn, retries = 3, delay = 1000) {
  for (let i = 1; i <= retries; i++) {
    try {
      // Attempt the operation
      return await fn();
    } catch (error) {
      // If this was the last attempt, throw the error
      if (i === retries) throw error;

      console.warn(`Attempt ${i} failed. Retrying in ${delay}ms...`);

      // Wait before the next attempt
      await new Promise((resolve) => setTimeout(resolve, delay));

      // Optional: Exponential backoff (Expert touch)
      // delay *= 2;
    }
  }
}

// --- Test Case ---
let count = 0;
const unstableTask = async () => {
  count++;
  if (count < 3) throw new Error("Database Timeout");
  return "Success!";
};

(async () => {
  const result = await retry(unstableTask, 5, 500);
  console.log(`Final Result: ${result}`); // "Success!" after 2 fails
})();
