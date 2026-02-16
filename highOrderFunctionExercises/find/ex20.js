// Goal: Find user with 'super_admin' inside deeply nested attrs array.
// INPUT:
// [
//  {
//  "attrs": {
//  "l1": {
//  "l2": {
//  "tags": [
//  "user"
//  ]
//  }
//  }
//  }
//  },
//  {
//  "attrs": {
//      "l1": {
//  "l2": {
//  "tags": [
//  "super_admin"
//  ]
//  }
//  }
//  }
//  }
// ]
// OUTPUT:
// {
//  "attrs": {
//  "l1": {
//  "l2": {
//  "tags": [
//  "super_admin"
//  ]
//  }
//  }
//  }

const input = [
  {
    attrs: {
      l1: {
        l2: {
          tags: ["user"],
        },
      },
    },
  },
  {
    attrs: {
      l1: {
        l2: {
          tags: ["super_admin"],
        },
      },
    },
  },
];

const output = input.find((x)=>x.attrs.l1.l2.tags.find((tag)=>tag.includes("super_admin")));

console.log(JSON.stringify(output,null,2));
