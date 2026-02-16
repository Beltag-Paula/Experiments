// Goal: Find log entry where error.trace.origin.line is 404.
// INPUT:
// [
//  {
//  "error": {
//  "trace": {
//  "origin": {
//  "line": 200
//  }
//  }
//  }
//  },
//  {
//  "error": {
//  "trace": {
//  "origin": {
//  "line": 404
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// {
//  "error": {
//  "trace": {
//  "origin": {
//  "line": 404
//  }
//  }
//  }
// }

const input = [
  {
    error: {
      trace: {
        origin: {
          line: 200,
        },
      },
    },
  },
  {
    error: {
      trace: {
        origin: {
          line: 404,
        },
      },
    },
  },
];

const output=input.find((x)=>x.error.trace.origin.line ===404);

console.log(JSON.stringify(output,null,2));
