// Title: Set Membership (Intermediate)
// Goal: Check for existence efficiently.
// Input: s = new Set(['a', 'b']); s.has('c')
// Output: false

const s = new Set(['a', 'b']);

console.log(s.has('c'));


// Why not just use an Array?
// If you used an array ['a', 'b'] and checked array.includes('c'), 
// JavaScript would have to look at 'a', then look at 'b', and then realize 'c' isn't there. 
// If your list had 1,000,000 items, it would have to check all 1,000,000 before giving you an answer.



// Expert Use Case: The "Filter" Pattern
// Imagine you have a giant list of IDs and a "Blacklist" of IDs to remove. 
// Using a Set for the blacklist makes the operation incredibly fast.
const allItems = [1, 2, 3, 4, 5, 6, 7, 8];

const blacklist = new Set([2, 5, 8]); // Instant lookups

const filtered = allItems.filter(item => !blacklist.has(item));

console.log(filtered); // [1, 3, 4, 6, 7]