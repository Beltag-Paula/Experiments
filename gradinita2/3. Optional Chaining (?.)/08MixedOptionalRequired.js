// Title: Mixed Optional/Required (Expert)
// Goal: Access a complex path where intermediate nodes are optional but leaf is required.
// Input: data = { response: null }; data.response?.items?.length
// Output: undefined

const data = { response: null };

// 'data' is expected to exist (required), 
// but 'response' and 'items' might be missing (optional).
const count = data.response?.items?.length;

console.log(count); // Output: undefined