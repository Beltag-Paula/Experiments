// 5. Deep Value Scaling (Nesting Level: 4)
// Goal: Double the value inside data.payload.metrics.score.
// INPUT:
// [
//  {
//  "data": {
//  "payload": {
//  "metrics": {
//  "score": 10
//  }
//  }
//  }
//  },
//  {
//  "data": {
//  "payload": {
//  "metrics": {
//  "score": 20
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "score": 20
//  },
//  {
//  "score": 40
//  }
// ]

const input = [
  {
    data: {
      payload: {
        metrics: {
          score: 10,
        },
      },
    },
  },
  {
    data: {
      payload: {
        metrics: {
          score: 20,
        },
      },
    },
  },
];

const output = input.map((x)=>{return x.data.payload.metrics.score*2});

console.log(output);