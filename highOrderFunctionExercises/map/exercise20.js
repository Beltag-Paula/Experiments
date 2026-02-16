// Goal: Flatten a comment thread (Root > Reply > Reply) into text only.
// INPUT:
// [
//  {
//      "text": "A",
//  "r": [
//  {
//  "text": "B",
//  "r": [
//  {
//  "text": "C"
//  }
//  ]
//  }
//  ]
//  }
// ]
// OUTPUT:
// [
//  "A",
//  "B",
//  "C"
// ]

const input = [
  {
    text: "A",
    r: [
      {
        text: "B",
        r: [
          {
            text: "C",
          },
        ],
      },
    ],
  },
];

function myFunction(array) {
  return array.flatMap((x) => {
    return [x.text, ...(x.r ? myFunction(x.r) : [])];
  });
}

const output = myFunction(input);
