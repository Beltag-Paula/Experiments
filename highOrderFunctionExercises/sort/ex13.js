// Goal: Sort by number of tags in details.tags.
// INPUT:
// [
//  {
//  "details": {
//  "tags": [
//  1
//  ]
//  }
//  },
//  {
//  "details": {
//  "tags": [
//  1,
//  2,
//  3
//  ]
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "details": {
//  "tags": [
//  1,
//  2,
//  3
//  ]
//  }
//  },
//  {
//  "details": {
//  "tags": [
//  1
//  ]
//  }
//  }
// ]

const input = [
  {
    details: {
      tags: [1],
    },
  },
  {
    details: {
      tags: [4, 2, 5],
    },
  },
];

input.sort((x)=>x.details.tags.sort((elem1,elem2)=>elem1-elem2));

console.log(JSON.stringify(input,null,2));

