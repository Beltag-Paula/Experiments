// Goal: Keep items where deep nested 'isCorrupt' flag is true.
// INPUT:
// [
//  {
//  "a": {
//  "b": {
//  "c": {
//  "d": {
//  "e": {
//  "f": {
//  "isCorrupt": true
//  }
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
//  "f": {
//  "isCorrupt": false
//  }
//  }
//  }
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "a": {
//  "b": {
//  "c": {
//  "d": {
//  "e": {
//  "f": {
//  "isCorrupt": true
//  }
//  }
//  }
//  }
//  }
//  }
//  }
// ]

const input = [
  {
    a: {
      b: {
        c: {
          d: {
            e: {
              f: {
                isCorrupt: true,
              },
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
              f: {
                isCorrupt: false,
              },
            },
          },
        },
      },
    },
  },
];

const output = input.filter((x)=>{
    return x.a.b.c.d.e.f.isCorrupt
})

console.log(JSON.stringify(output,null,2));