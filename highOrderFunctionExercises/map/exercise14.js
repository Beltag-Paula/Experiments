// Goal: Map a 2D grid to a list of coordinate strings 'x,y'.
// INPUT:
// [
//  [
//  {
//  "x": 0,
//  "y": 0
//  },
//  {
//  "x": 1,
//  "y": 0
//  }
//  ],
//  [
//  {
//  "x": 0,
//  "y": 1
//  },
//  {
//  "x": 1,
//   "y": 1
//  }
//  ]
// ]
// OUTPUT:
// [
//  [
//  "0,0",
//  "1,0"
//  ],
//  [
//  "0,1",
//  "1,1"
//  ]
// ]

const input = [
  [
    {
      x: 0,
      y: 0,
    },
    {
      x: 1,
      y: 0,
    },
  ],
  [
    {
      x: 0,
      y: 1,
    },
    {
      x: 1,
      y: 1,
    },
  ],
];

const output = input.map((elementOfInput) =>
  elementOfInput.map((n) => {
    return `${n.x} ${n.y}`;
  }),
);

console.log(output);
