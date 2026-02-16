// Goal: Transform deeply nested error object into simple message string.
// INPUT:
// [
//  {
//  "err": {
//  "response": {
//  "data": {
//     "error": {
//  "message": "Fail"
//  }
//  }
//  }
//  }
//  },
//  {
//  "err": {
//  "response": {
//  "data": {
//  "error": {
//  "message": "Crash"
//  }
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  "Fail",
//  "Crash"
// ]

const input = [
  {
    err: {
      response: {
        data: {
          error: {
            message: "Fail",
          },
        },
      },
    },
  },
  {
    err: {
      response: {
        data: {
          error: {
            message: "Crash",
          },
        },
      },
    },
  },
];


const output = input.map((x)=>{return x.err.response.data.error.message});

console.log(output);