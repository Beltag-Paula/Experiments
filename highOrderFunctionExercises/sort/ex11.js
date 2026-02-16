// 1. Nested Age Sort (Nesting Level: 2)
// Goal: Sort by info.age.
// INPUT:
// [
//  {
//  "info": {
//  "age": 30
//  }
//  },
//  {
//  "info": {
//  "age": 20
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "info": {
//  "age": 20
//  }
//  },
//  {
//  "info": {
//  "age": 30
//  }
//  }
// ]

const input = [
  {
    info: {
      age: 30,
    },
  },
  {
    info: {
      age: 20,
    },
  },
  {
    info: {
      age: 50,
    },
  },
  {
    info: {
      age: 10,
    },
  },
  {
    info: {
      age: 36,
    },
  },
  {
    info: {
      age: 28,
    },
  },
];

input.sort((x,y)=>x.info.age-y.info.age);

console.log(input);