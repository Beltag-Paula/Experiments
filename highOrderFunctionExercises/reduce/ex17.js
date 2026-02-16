// Goal: Construct path string from nodes.
// INPUT:
// [
//  {
//  "node": {
//  "val": "home"
//  }
//  },
//  {
//  "node": {
//  "val": "user"
//  }
//  },
//  {
//  "node": {
//  "val": "docs"
//  }
//  }
// ]
// OUTPUT:
// "/home/user/docs"

const input = [
  {
    node: {
      val: "home",
    },
  },
  {
    node: {
      val: "user",
    },
  },
  {
    node: {
      val: "docs",
    },
  },
];

const output = input.reduce((myString, x) => `${myString}/${x.node.val}`, "");

console.log(output);
