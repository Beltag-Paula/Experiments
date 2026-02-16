// Goal: Extract the 'secret' value found at level 6.
// INPUT:
// [
//  {
//  "l1": {
//  "l2": {
//  "l3": {
//  "l4": {
//  "l5": {
//  "l6": {
//  "secret": "XYZ"
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
//  "XYZ"
// ]

const input = [
  {
    l1: {
      l2: {
        l3: {
          l4: {
            l5: {
              l6: {
                secret: "XYZ",
              },
            },
          },
        },
      },
    },
  },
];

const output = input.map((x)=>{return x.l1.l2.l3.l4.l5.l6.secret})

console.log(output);