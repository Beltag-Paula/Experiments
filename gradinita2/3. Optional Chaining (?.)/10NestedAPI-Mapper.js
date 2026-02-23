// Title: Nested API Mapper (Expert)
// Goal: Map an array of objects where some objects lack the target nested structure.
// Input: [{info: {tags: ['a']}}, {info: null}]. Map to x.info?.tags?.[0]
// Output: ['a', undefined]

const rawData = [
  { info: { tags: ['a'] } }, 
  { info: null }
];

// We map through the array and safely reach for the first tag
const result = rawData.map(x => x.info?.tags?.[0]);

console.log(result); 
// Output: ['a', undefined]