// Goal: Combine arrays found at deep level into one unique set.
// INPUT:
// [
//  {
//  "d": {
//  "d": {
//  "d": {
//  "d": {
//  "d": {
//  "arr": [
//  1,
//  2
//  ]
//  }
//  }
//  }
//  }
//  }
//  },
//  {
//  "d": {
//  "d": {
//  "d": {
//      "d": {
//  "d": {
//  "arr": [
//  2,
//  3
//  ]
//  }
//  }
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  1,
//  2,
//  3
// ]

const input = [
  {
    d: {
      d: {
        d: {
          d: {
            d: {
              arr: [1, 2],
            },
          },
        },
      },
    },
  },
  {
    d: {
      d: {
        d: {
          d: {
            d: {
              arr: [2, 3],
            },
          },
        },
      },
    },
  },
];

const output1 = input.reduce((myResult, x)=>
    myResult.concat(x.d.d.d.d.d.arr)
,[]);
console.log(output1);

const output2 = output1.reduce((myArray, x) => {
  const number = x;
  if (!myArray[number] && myArray[number] === myArray[number - 1]) {
    myArray.push(number);
  }
  return myArray;
}, []);

console.log(output2);