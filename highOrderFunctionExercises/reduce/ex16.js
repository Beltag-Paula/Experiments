// Goal: Sum stock from store > aisle > shelf > stock.
// INPUT:
// [
//  {
//  "store": {
//  "aisle": {
//  "shelf": {
//  "stock": 5
//  }
//  }
//  }
//  },
//  {
//  "store": {
//  "aisle": {
//  "shelf": {
//  "stock": 10
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// 15

const input = [
  {
    store: {
      aisle: {
        shelf: {
          stock: 5,
        },
      },
    },
  },
  {
    store: {
      aisle: {
        shelf: {
          stock: 10,
        },
      },
    },
  },
];


const output = input.reduce((mySum,x)=>mySum+=x.store.aisle.shelf.stock,0);

console.log(output);