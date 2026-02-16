// Goal: Extract tags array from meta object.
// INPUT: [
//   {
//     p: 1,
//     meta: {
//       seo: {
//         tags: ["new", "sale"],
//       },
//     },
//   },
//   {
//     p: 2,
//     meta: {
//       seo: {
//         tags: ["old"],
//       },
//     },
//   },
// ];
// OUTPUT: [["new", "sale"], ["old"]];

const input = [
  {
    p: 1,
    meta: {
      seo: {
        tags: ["new", "sale"],
      },
    },
  },
  {
    p: 2,
    meta: {
      seo: {
        tags: ["old"],
      },
    },
  },
];

const output = input.map((x)=>{return x.meta.seo.tags})

console.log(output);