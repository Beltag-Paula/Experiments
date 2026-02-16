// Goal: Filter if (deep.x > 10 AND deep.y < 5).
// INPUT:
// [
//  {
//  "deep": {
//  "l1": {
//  "l2": {
//  "l3": {
//  "x": 20,
//  "y": 2
//  }
//  }
//  }
//  }
//  },
//  {
//  "deep": {
//  "l1": {
//  "l2": {
//  "l3": {
//  "x": 20,
//  "y": 10
//  }
// }
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "deep": {
//  "l1": {
//  "l2": {
//  "l3": {
//  "x": 20,
//  "y": 2
//  }
//  }
//  }
//  }
 

const input = [
  {
    deep: {
      l1: {
        l2: {
          l3: {
            x: 20,
            y: 2,
          },
        },
      },
    },
  },
  {
    deep: {
      l1: {
        l2: {
          l3: {
            x: 20,
            y: 10,
          },
        },
      },
    },
  },
];

const output = input.filter((x)=>x.deep.l1.l2.l3.x>10 && x.deep.l1.l2.l3.y<5)

console.log(JSON.stringify(output,null,2));
