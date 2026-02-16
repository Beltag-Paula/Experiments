// Goal: Find first test suite where results.summary.failed > 0.
// INPUT:
// [
//  {
//  "results": {
//  "summary": {
//  "failed": 0
//  }
//  }
//  },
//  {
//  "results": {
//  "summary": {
//  "failed": 2
//  }
//  }
//  }
// ]
// OUTPUT:
// {
//  "results": {
//  "summary": {
//  "failed": 2
//  }
//  }
// }

const input = [
  {
    results: {
      summary: {
        failed: 0,
      },
    },
  },
  {
    results: {
      summary: {
        failed: 2,
      },
    },
  },
];

const output = input.find((x)=>x.results.summary.failed>0);

console.log(output);