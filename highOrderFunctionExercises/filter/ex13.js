// Goal: Filter items where details.specs.weight exists.
// INPUT:
// [
//  {
//  "details": {
//  "specs": {
//  "color": "red"
//  }
//  }
//  },
//  {
//  "details": {
//  "specs": {
//  "weight": 10
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "details": {
//  "specs": {
//  "weight": 10
//  }
//  }

const input = [
  {
    details: {
      specs: {
        color: "red",
      },
    },
  },
  {
    details: {
      specs: {
        weight: 10,
      },
    },
  },
];


const output = input.filter((x)=>x.details.specs.weight)

console.log(JSON.stringify(output, null, 2));