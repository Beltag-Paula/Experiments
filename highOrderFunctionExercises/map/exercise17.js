// Goal: Extract label from node > child > child > label.
// INPUT:
// [
//  {
//  "node": {
//  "child": {
//  "child": {
//  "label": "Leaf A"
//  }
//  }
//  }
//  },
//  {
//  "node": {
//  "child": {
//  "child": {
//  "label": "Leaf B"
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  "Leaf A",
//  "Leaf B"
// ]

const input = [
  {
    node: {
      child: {
        child: {
          label: "Leaf A",
        },
      },
    },
  },
  {
    node: {
      child: {
        child: {
          label: "Leaf B",
        },
      },
    },
  },
];

const output = input.map((x)=>{return x.node.child.child.label});

console.log(output);
