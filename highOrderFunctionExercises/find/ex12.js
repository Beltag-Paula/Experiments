// INPUT:
// [
//  {
//  "members": [
//  "Alice"
//  ]
//  },
//  {
//  "members": [
//  "John",
//  "Bob"
//  ]
//  }
// ]
// OUTPUT:
// {
//  "members": [
//  "John",
//  "Bob"
//  ]

const input = [
  {
    members: ["Alice"],
  },
  {
    members: ["John", "Bob"],
  },
];

const output = input.find((x)=>x.members.find((name)=>name.includes("John")));

console.log(output);