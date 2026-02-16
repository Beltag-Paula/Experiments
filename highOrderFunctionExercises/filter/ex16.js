// Goal: Filter logs where trace > stack > 0 > file is 'error.js'.
// INPUT:
// [
//  {
//  "trace": {
//  "stack": [
//  {
//  "file": "app.js"
//  }
//  ]
//  }
//  },
//   {
//  "trace": {
//  "stack": [
//  {
//  "file": "error.js"
//  }
//  ]
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "trace": {
//  "stack": [
//  {
//  "file": "error.js"
//  }
//  ]
//  }
//  }
// ]

const input = [
  {
    trace: {
      stack: [
        {
          file: "app.js",
        },
      ],
    },
  },
  {
    trace: {
      stack: [
        {
          file: "error.js",
        },
      ],
    },
  },
];

const output = input.filter((x)=>
    x.trace.stack[0].file.includes("error.js")
)

console.log(JSON.stringify(output,null,2));