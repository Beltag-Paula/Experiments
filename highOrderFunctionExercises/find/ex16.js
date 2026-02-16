// Goal: Find the directory containing file 'secret.txt'.
// INPUT:
// [
//  {
//  "dir": "A",
//  "files": [
//  "x.txt"
//  ]
//  },
//  {
//  "dir": "B",
//  "files": [
//  "secret.txt"
//  ]
//  }
// ]
// OUTPUT:
// {
//  "dir": "B",
//  "files": [
//  "secret.txt"
//  ]

const input = [
  {
    dir: "A",
    files: ["x.txt"],
  },
  {
    dir: "B",
    files: ["secret.txt"],
  },
];

const output = input.find((x)=>x.files.find((elem)=>elem.includes("secret.txt")));

console.log(output);