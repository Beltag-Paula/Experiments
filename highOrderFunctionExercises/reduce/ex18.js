// Goal: Sum values found at level 6.
// INPUT:
// [
//  {
//  "a": {
//  "b": {
//  "c": {
//  "d": {
//  "e": {
//  "f": 1
//  }
//  }
//  }
//  }
//  }
//  },
//  {
//  "a": {
//  "b": {
//  "c": {
//  "d": {
//  "e": {
//  "f": 2
//  }
//  }
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// 3

const input = [
  {
    a: {
      b: {
        c: {
          d: {
            e: {
              f: 1,
            },
          },
        },
      },
    },
  },
  {
    a: {
      b: {
        c: {
          d: {
            e: {
              f: 2,
            },
          },
        },
      },
    },
  },
];


const output = input.reduce((mySum,x)=>{
    mySum+=x.a.b.c.d.e.f;
    return mySum;
},0);

console.log(output);