// Goal: Get list of permissions from user > role > config > perms.
// INPUT:
// [
//  {
//  "u": "A",
//  "role": {
//  "config": {
//  "perms": [
//  "read",
//  "write"
//  ]
//  }
//  }
//  }
// ]
// OUTPUT:
// [
//  [
//  "read",
//  "write"
//  ]
// ]

const input = [
  {
    u: "A",
    role: {
      config: {
        perms: ["read", "write"],
      },
    },
  },
];


const output = input.map((x)=>{return x.role.config.perms});

console.log(output);