// Goal: Filter posts where comments array in 'eng' object is empty.
// INPUT: [
//   {
//     eng: {
//       comments: [],
//     },
//   },
//   {
//     eng: {
//       comments: [1],
//     },
//   },
// ];
// OUTPUT: [
//   {
//     eng: {
//       comments: [],
//     },
//   },
// ];

const i = [
  {
    eng: {
      comments: [],
    },
  },
  {
    eng: {
      comments: [1],
    },
  },
];

const o = i.filter((x)=>x.eng.comments.length===0);

console.log(o);