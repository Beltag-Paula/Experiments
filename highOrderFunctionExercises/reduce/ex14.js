// Goal: Merge nested 'conf' objects into one.
// INPUT:
// [
//  {
//  "conf": {
//  "a": 1
//  }
//  },
//  {
//  "conf": {
//  "b": 2
//  }
//  }
// ]
// OUTPUT:
// {
//  "a": 1,
//  "b": 2
// }

const input = [
  {
    conf: {
      a: 1,
    },
  },
  {
    conf: {
      b: 2,
    },
  },
];

const output = input.reduce((myResult,x)=>{
      return myResult.concat(x.conf);
},[])

console.log(output);