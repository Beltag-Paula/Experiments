// Goal: Reduce list of category objects (each has 'items' array) to single items array.

// INPUT: [
//   {
//     items: [1, 2],
//   },
//   {
//     items: [3, 4],
//   },
// ];
// OUTPUT: [1, 2, 3, 4];

const input = [
  {
    items: [1, 2],
  },
  {
    items: [3, 4],
  },
];

const output = input.reduce((myResult,x)=>myResult.concat(x.items),[]);

console.log(output);