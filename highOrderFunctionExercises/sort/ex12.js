// Goal: Sort by meta.created.at date string.
// INPUT:
// [
//  {
//  "meta": {
//  "created": {
//  "at": "2023"
//  }
//  }
//  },
//  {
//  "meta": {
//  "created": {
//  "at": "2022"
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "meta": {
//  "created": {
//  "at": "2022"
//   }
//  }
//  },
//  {
//  "meta": {
//  "created": {
//  "at": "2023"
//  }
//  }
//  }
// ]

const input = [
  {
    meta: {
      created: {
        at: "2023",
      },
    },
  },
  {
    meta: {
      created: {
        at: "2022",
      },
    },
  },
    {
    meta: {
      created: {
        at: "2026",
      },
    },
  },
  {
    meta: {
      created: {
        at: "2020",
      },
    },
  },
];

console.log(
  JSON.stringify(input.sort((x,y)=>x.meta.created.at-y.meta.created.at),null,2)
);