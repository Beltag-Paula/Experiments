function onceAsync(fn) {
  let called = false;
  let result;

  return async function (...args) {
    if (!called) {
      called = true;
      result = await fn(...args); // run the async function once
    }
    return result; // return cached result on subsequent calls
  };
}

// Simulate a fetch function
async function fetchUserProfile(userId) {
  console.log(`Fetching user ${userId} from API...`);
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { userId, name: "Alice" };
}

// Wrap it with onceAsync
const getUserProfileOnce = onceAsync(fetchUserProfile);

// Usage
(async () => {
  const user1 = await getUserProfileOnce(1); // Fetches API
  console.log(user1);

  const user2 = await getUserProfileOnce(1); // Returns cached result
  console.log(user2);

  const user3 = await getUserProfileOnce(2); // Still returns cached result (first call wins)
  console.log(user3);
})();


// 🔹 Why this is practical
// - Prevents duplicate API calls
// - Useful for things like:
// - User authentication data
// - Config fetching
// - App initialization
// - Works with async/await functions