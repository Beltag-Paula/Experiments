// Goal: Filter modules that have 'vulnerable' flag in deep deps.
// INPUT:
// [
//  {
//  "mod": "A",
//  "deps": {
//  "d1": {
//  "deps": {
//  "d2": {
//  "vulnerable": true
//  }
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "mod": "A",
//  "deps": {
//  "d1": {
//  "deps": {
//  "d2": {
//  "vulnerable": true
//  }
//  }
//  }
//  }
//  }
// ]

const input = [
  {
    mod: "A",
    deps: {
      d1: {
        deps: {
          d2: {
            vulnerable: true,
          },
        },
      },
    },
  },
  {
    mod: "B",
    deps: {
      d1: {
        deps: {
          d2: {
            vulnerable: false,
          },
        },
      },
    },
  },
  {
    mod: "A",
    deps: {
      d1: {
        deps: {
          d2: {
          },
        },
      },
    },
  },
];

const output = input.filter((x)=>x.deps.d1.deps.d2.vulnerable!==undefined)

console.log(JSON.stringify(output,2,null));