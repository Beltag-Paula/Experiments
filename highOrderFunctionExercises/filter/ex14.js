// Goal: Filter users who have 'admin' in role > config > types.
// INPUT:
// [
//  {
//  "role": {
//  "config": {
//  "types": [
//  "user"
//  ]
//  }
//  }
//  },
//  {
//  "role": {
//  "config": {
//  "types": [
//  "user",
//  "admin"
//  ]
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  {
//  "role": {
//  "config": {
//  "types": [
//  "user",
//  "admin"
//  ]
//  }
//  }
//  }
// ]

const input = [
  {
    role: {
      config: {
        types: ["user"],
      },
    },
  },
  {
    role: {
      config: {
        types: ["user", "admin"],
      },
    },
  },
  {
    role: {
      config: {
        types: ["user"],
      },
    },
  },
  {
    role: {
      config: {
        types: ["user", "admin"],
      },
    },
  },
];

const output = input.filter((x) => x.role.config.types.includes("admin"));

console.log(JSON.stringify(output,null,2));
