// Goal: Calculate total size of file tree structure.
// INPUT:
// [
//  {
//  "size": 10,
//  "files": [
//  {
//  "size": 20,
//  "files": []
//  },
//  {
//  "size": 5,
//  "files": [
//  {
//  "size": 5
//  }
//  ]
//  }
//  ]
//  }
// ]
// OUTPUT:
// 40

const input = [
  {
    size: 10,
    files: [
      {
        size: 20,
        files: [],
      },
      {
        size: 5,
        files: [
          {
            size: 5,
          },
        ],
      },
    ],
  },
];


function myFunction(array) {
  return array.flatMap((x) => {
    return [x.size, ...(x.files ? myFunction(x.files) : [])];
  });
}

const output = (myFunction(input)).reduce((myResult,x)=>myResult+=x);

console.log(output);