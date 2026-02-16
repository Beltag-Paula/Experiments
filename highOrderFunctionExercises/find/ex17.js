// Goal: Find object where l1.l2.l3.l4.l5.l6 is 'Found'.
// INPUT:
// [
//  {
//  "l1": {
//  "l2": {
//  "l3": {
//  "l4": {
//  "l5": {
//  "l6": "Found"
//  }
//  }
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// {
//  "l1": {
//  "l2": {
//  "l3": {
//  "l4": {
//  "l5": {
//  "l6": "Found"
//  }
//  }
//  }
//  }
//  }
// }

const input = [
  {
    l1: {
      l2: {
        l3: {
          l4: {
            l5: {
              l6: "Found",
            },
          },
        },
      },
    },
  },
    {
    l1: {
      l2: {
        l3: {
          l4: {
            l5: {
              l6: "Not Found",
            },
          },
        },
      },
    },
  },
];


const output = input.find((x)=>x.l1.l2.l3.l4.l5.l6 === "Not Found");

console.log(JSON.stringify(output,null,2));