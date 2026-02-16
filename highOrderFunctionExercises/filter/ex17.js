// Goal: Filter out objects where l1.l2.l3.l4.val is null.
// INPUT:
// [
//  {
//  "l1": {
//  "l2": {
//  "l3": {
//  "l4": {
//  "val": 1
//  }
//  }
//  }
//  }
//  },
//  {
//  "l1": {
//  "l2": {
//  "l3": {
//  "l4": {
//  "val": null
//  }
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//   {
//     l1: {
//       l2: {
//         l3: {
//           l4: {
//             val: 1,
//           },
//         },
//       },
//     },
//   },
// ];

const input = [
  {
    l1: {
      l2: {
        l3: {
          l4: {
            val: 1,
          },
        },
      },
    },
  },
  {
    l1: {
      l2: {
        l3: {
          l4: {
            val: null,
          },
        },
      },
    },
  },
];

const output = input.filter((x)=>{
   return x.l1.l2.l3.l4.val!==null;
})

console.log(JSON.stringify(output,null,2));