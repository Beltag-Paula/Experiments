// Goal: Find the comment object that contains reply ID 99.
// INPUT:
// [
//      {
//  "id": 1,
//  "replies": [
//  {
//  "id": 2
//  }
//  ]
//  },
//  {
//  "id": 3,
//  "replies": [
//  {
//  "id": 99
//  }
//  ]
//  }
// ]
// OUTPUT:
// {
//  "id": 3,
//  "replies": [
//  {
//  "id": 99
//  }
//  ]
// }

const input = [
  {
    id: 1,
    replies: [
      {
        id: 2,
      },
    ],
  },
  {
    id: 3,
    replies: [
      {
        id: 99,
      },
    ],
  },
];

const output = input.find((x)=>x.replies.find((elem)=>elem.id === 99));

console.log(output);