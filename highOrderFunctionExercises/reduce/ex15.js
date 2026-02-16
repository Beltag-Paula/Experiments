// Goal: Find max value in data.results.score.
// INPUT:
// [
//  {
//  "data": {
//  "results": {
//  "score": 10
//  }
//  }
//  },
//  {
//  "data": {
//  "results": {
//  "score": 50
//  }
//   }
//  }
// ]
// OUTPUT:
// 50

const input = [
  {
    data: {
      results: {
        score: 10,
      },
    },
  },
  {
    data: {
      results: {
        score: 50,
      },
    },
  },
];

const output = input.reduce((myResult, x) => {
  if (myResult > x.data.results.score) return myResult;
  else return x.data.results.score;
}, 0);

console.log(output);
