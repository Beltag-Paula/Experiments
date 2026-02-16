// Goal: Sum price from item.cost.
// INPUT:
// [
//  {
//  "item": {
//  "cost": 10
//  }
//  },
//  {
//  "item": {
//  "cost": 20
//  }
//  }
// ]
// OUTPUT:
// 30

const input = [
  {
    item: {
      cost: 10,
    },
  },
  {
    item: {
      cost: 20,
    },
  },
];

const output = input.reduce((mySum, x)=>mySum+=x.item.cost,0);

console.log(output);