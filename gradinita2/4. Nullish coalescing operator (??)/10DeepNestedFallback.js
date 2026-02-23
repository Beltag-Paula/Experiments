// Title: Deep Nested Fallback (Expert)
// Goal: Extract a deep value from a potentially malformed JSON, falling back only on null/undefined.
// Input: data = { meta: { page: 0 } }; res = data?.meta?.page ?? 1
// Output: 0

const data = { meta: { page: 96 } };
const res = data?.meta?.page ?? 1;

console.log(res);
